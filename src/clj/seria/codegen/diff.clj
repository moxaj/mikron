(ns seria.codegen.diff
  "Differ and undiffer generating functions."
  (:require [seria.type :as type]
            [seria.util.coll :as util.coll]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.common :as util.common]))

(defrecord DiffedValue [value])

(def ^:dynamic *options*)

(defn equality-operator [schema]

  (or (get-in *options* [:eq-ops schema])
      `=))

(defmulti diff util.schema/type-of :hierarchy #'type/hierarchy)

(defn wrap-diffed [schema value-1 value-2]
  (case (:processor-type *options*)
    :diff   `(if (~(equality-operator schema) ~value-1 ~value-2)
               util.common/dnil
               ~(diff schema value-1 value-2))
    :undiff `(if (util.common/dnil? ~value-2)
               ~value-1
               ~(diff schema value-1 value-2))))

(defmethod diff :list [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (util.symbol/postfix-gensym value-1 "item")
        inner-value-2 (util.symbol/postfix-gensym value-2 "item")
        vec-value-1   (with-meta (util.symbol/postfix-gensym value-1 "vec")
                                 {:no-inline true})]
    `(let [~vec-value-1 (vec ~value-1)]
       (map-indexed (fn [~index ~inner-value-2]
                      (if-let [~inner-value-1 (get ~vec-value-1 ~index)]
                        ~(wrap-diffed inner-schema inner-value-1 inner-value-2)
                        ~inner-value-2))
                    ~value-2))))

(defmethod diff :vector [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (util.symbol/postfix-gensym value-1 "item")
        inner-value-2 (util.symbol/postfix-gensym value-2 "item")]
    `(vec (map-indexed (fn [~index ~inner-value-2]
                         (if-let [~inner-value-1 (get ~value-1 ~index)]
                           ~(wrap-diffed inner-schema inner-value-1 inner-value-2)
                           ~inner-value-2))
                       ~value-2))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] value-1 value-2]
  (let [key   (util.symbol/postfix-gensym value-2 "key")
        val-1 (util.symbol/postfix-gensym value-1 "val")
        val-2 (util.symbol/postfix-gensym value-2 "val")]
    (->> `(map (fn [[~key ~val-2]]
                 [~key (if-let [~val-1 (~value-1 ~key)]
                         ~(wrap-diffed val-schema val-1 val-2)
                         ~val-2)])
               ~value-2)
         (util.schema/as-map sorted-by))))

(defmethod diff :tuple [schema value-1 value-2]
  (let [destructured-2 (util.schema/destructure-indexed schema value-2 true)]
    `(let [~@(mapcat (juxt :symbol :value) destructured-2)]
       ~(mapv (fn [{index :index inner-schema :schema inner-value-2 :symbol}]
                (let [inner-value-1 (util.symbol/postfix-gensym value-1 (str index))]
                  `(let [~inner-value-1 (~value-1 ~index)]
                     ~(wrap-diffed inner-schema inner-value-1 inner-value-2))))
              destructured-2))))

(defmethod diff :record [schema value-1 value-2]
  (let [schema         (util.schema/expand-record schema (:schemas *options*))
        destructured-2 (util.schema/destructure-indexed schema value-2 true)]
    (->> `(let [~@(mapcat (juxt :symbol :value) destructured-2)]
            ~(->> destructured-2
                  (map (fn [{index :index inner-schema :schema inner-value-2 :symbol}]
                         [index (let [inner-value-1 (util.symbol/postfix-gensym value-1 (name index))]
                                  `(let [~inner-value-1 (~index ~value-1)]
                                     ~(wrap-diffed inner-schema inner-value-1 inner-value-2)))]))
                  (into {})))
         (util.schema/as-record (:constructor (second schema))))))

(defmethod diff :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(diff inner-schema value-1 value-2)
     ~value-2))

(defmethod diff :multi [[_ _ selector multi-cases] value-1 value-2]
  (util.symbol/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if (not= ~case-1 ~case-2)
         ~value-2
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case inner-schema]]
                       [multi-case (diff inner-schema value-1 value-2)])
                     multi-cases))))))

(defmethod diff :custom [schema value-1 value-2]
  `(~(util.symbol/processor-name (:processor-type *options*) schema) ~value-1 ~value-2))

(defmethod diff :default [schema value-1 value-2]
  value-2)

;; API

(defn make-differ [schema-name {:keys [schemas] :as options}]
  (binding [*options* (assoc options :processor-type :diff)]
    (util.symbol/with-gensyms [value-1 value-2]
      `(~(util.symbol/processor-name :diff schema-name)
        [~value-1 ~value-2]
        (util.common/wrap-diffed ~(wrap-diffed (schemas schema-name) value-1 value-2))))))

(defn make-undiffer [schema-name {:keys [schemas] :as options}]
  (binding [*options* (assoc options :processor-type :undiff)]
    (util.symbol/with-gensyms [value-1 value-2]
      `(~(util.symbol/processor-name :undiff schema-name)
        [~value-1 ~value-2]
        (let [~value-2 (util.common/unwrap-diffed ~value-2)]
          ~(wrap-diffed (schemas schema-name) value-1 value-2))))))
