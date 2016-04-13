(ns seria.codegen.diff
  "Differ and undiffer generating functions."
  (:require [seria.type :as type]
            [seria.util :as util]))

(def ^:dynamic *options*)

(defn equality-operator [schema]
  (or (get-in *options* [:config :eq-ops schema])
      `=))

(defn as-diffed [schema value-1 value-2 body]
  (case (:processor-type *options*)
    :diff   `(if (~(equality-operator schema) ~value-1 ~value-2)
               :seria/dnil
               ~body)
    :undiff `(if (= :seria/dnil ~value-2)
               ~value-1
               ~body)))

(defmulti diff (fn [schema _ _]
                 (let [schema-type (type/type-of schema)]
                   (cond
                     (type/diffable-type? schema-type) schema-type
                     (type/custom-type? schema-type)   :custom
                     :else                             :non-diffable))))

(defmethod diff :list [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (util/postfix-gensym value-1 "item")
        inner-value-2 (util/postfix-gensym value-2 "item")
        vec-value-1   (with-meta (util/postfix-gensym value-1 "vec")
                                 {:no-inline true})]
    `(let [~vec-value-1 (vec ~value-1)]
       (map-indexed (fn [~index ~inner-value-2]
                      (if-let [~inner-value-1 (get ~vec-value-1 ~index)]
                        ~(as-diffed inner-schema inner-value-1 inner-value-2
                                    (diff inner-schema inner-value-1 inner-value-2))
                        ~inner-value-2))
                    ~value-2))))

(defmethod diff :vector [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (util/postfix-gensym value-1 "item")
        inner-value-2 (util/postfix-gensym value-2 "item")]
    `(vec (map-indexed (fn [~index ~inner-value-2]
                         (if-let [~inner-value-1 (get ~value-1 ~index)]
                           ~(as-diffed inner-schema inner-value-1 inner-value-2
                                       (diff inner-schema inner-value-1 inner-value-2))
                           ~inner-value-2))
                       ~value-2))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] value-1 value-2]
  (let [key   (util/postfix-gensym value-1 "key")
        val-1 (util/postfix-gensym value-1 "val")
        val-2 (util/postfix-gensym value-2 "val")]
    (->> `(map (fn [[~key ~val-2]]
                 [~key (if-let [~val-1 (~value-1 ~key)]
                         ~(as-diffed val-schema val-1 val-2
                                     (diff val-schema val-1 val-2))
                         ~val-2)])
               ~value-2)
         (util/as-map sorted-by))))

(defmethod diff :tuple [schema value-1 value-2]
  (let [destructured-2 (util/destructure-indexed schema value-2 true)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
       ~(mapv (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                (let [inner-value-1 (util/postfix-gensym value-1 (str index))]
                  `(let [~inner-value-1 (~value-1 ~index)]
                     ~(as-diffed inner-schema inner-value-1 inner-value-2
                                 (diff inner-schema inner-value-1 inner-value-2)))))
              destructured-2))))

(defmethod diff :record [schema value-1 value-2]
  (let [[_ {:keys [constructor]} :as schema] (util/expand-record schema (get-in *options* [:config :schemas]))
        destructured-2 (util/destructure-indexed schema value-2 true)]
    (->> `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
            ~(->> destructured-2
                  (map (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                         [index (let [inner-value-1 (util/postfix-gensym value-1 (name index))]
                                  `(let [~inner-value-1 (~index ~value-1)]
                                     ~(as-diffed inner-schema inner-value-1 inner-value-2
                                                 (diff inner-schema inner-value-1 inner-value-2))))]))
                  (into {})))
         (util/as-record constructor))))

(defmethod diff :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(diff inner-schema value-1 value-2)
     ~value-2))

(defmethod diff :multi [[_ _ selector multi-cases] value-1 value-2]
  (let [case-1 (gensym "case-1_")
        case-2 (gensym "case-2_")]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if (not= ~case-1 ~case-2)
         ~value-2
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case inner-schema]]
                       [multi-case (diff inner-schema value-1 value-2)])
                     multi-cases))))))

(defmethod diff :custom [schema value-1 value-2]
  `(~(util/processor-name (:processor-type *options*) schema) ~value-1 ~value-2))

(defmethod diff :non-diffable [schema value-1 value-2]
  value-2)

(defn make-common [schema-name config]
  (let [value-1 (gensym "value-1_")
        value-2 (gensym "value-2_")
        schema  (get-in config [:schemas schema-name])]
    (binding [*options* (assoc *options* :config config)]
      `(~(util/processor-name (:processor-type *options*) schema-name)
        [~value-1 ~value-2]
        ~(as-diffed schema value-1 value-2 (diff schema value-1 value-2))))))

(defn make-differ [schema-name config]
  (binding [*options* {:processor-type :diff}]
    (make-common schema-name config)))

(defn make-undiffer [schema-name config]
  (binding [*options* {:processor-type :undiff}]
    (make-common schema-name config)))
