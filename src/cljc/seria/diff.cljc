(ns seria.diff
  "Differ and undiffer generating functions."
  (:require [seria.type :as type]
            [seria.util :as util]))

(def ^:dynamic *opts*)

(defn equality-operator [schema]
  (let [fn-key (get-in (:config *opts*) [:eq-ops schema])]
    (if (or (type/composite-type? schema)
            (nil? fn-key))
      `=
      (util/runtime-fn fn-key))))

(defn as-diffed [schema value-1 value-2 body]
  (case (:direction *opts*)
    :diff   `(if (~(equality-operator schema) ~value-1 ~value-2)
               :seria/dnil
               ~body)
    :undiff `(if (= :seria/dnil ~value-2)
               ~value-1
               ~body)))

(defn diff-dispatch [schema _ _]
  (cond
    (type/traceable-type? schema) (first schema)
    (type/custom-type? schema)    :custom
    :else                         :non-diffable))

(defmulti diff diff-dispatch)

(defmethod diff :list [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (gensym "inner-value-1_")
        inner-value-2 (gensym "inner-value-2_")
        vec-value-1   (with-meta (gensym "vec-value-1")
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
        inner-value-1 (gensym "inner-value-1_")
        inner-value-2 (gensym "inner-value-2_")]
    `(vec (map-indexed (fn [~index ~inner-value-2]
                         (if-let [~inner-value-1 (get ~value-1 ~index)]
                           ~(as-diffed inner-schema inner-value-1 inner-value-2
                                       (diff inner-schema inner-value-1 inner-value-2))
                           ~inner-value-2))
                       ~value-2))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] value-1 value-2]
  (let [key   (gensym "key_")
        val-1 (gensym "val-1_")
        val-2 (gensym "val-2_")]
    (->> `(map (fn [[~key ~val-2]]
                 [~key (if-let [~val-1 (get ~value-1 ~key)]
                         ~(as-diffed val-schema val-1 val-2
                                     (diff val-schema val-1 val-2))
                         ~val-2)])
               ~value-2)
         (util/as-map sorted-by))))

(defmethod diff :tuple [schema value-1 value-2]
  (let [destructured-2 (util/destructure-indexed schema value-2)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
       ~(mapv (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                (let [inner-value-1 (gensym "inner-value-1_")]
                  `(let [~inner-value-1 (get ~value-1 ~index)]
                     ~(as-diffed inner-schema inner-value-1 inner-value-2
                                 (diff inner-schema inner-value-1 inner-value-2)))))
              destructured-2))))

(defmethod diff :record [schema value-1 value-2]
  (let [[_ {:keys [constructor]} :as schema] (util/expand-record schema (:schemas (:config *opts*)))
        destructured-2 (util/destructure-indexed schema value-2)]
    (->> `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
            ~(->> destructured-2
                  (map (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                         [index (let [inner-value-1 (gensym "inner-value-1_")]
                                  `(let [~inner-value-1 (get ~value-1 ~index)]
                                     ~(as-diffed inner-schema inner-value-1 inner-value-2
                                                 (diff inner-schema inner-value-1 inner-value-2))))]))
                  (into {})))
         (util/as-record constructor))))

(defmethod diff :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(as-diffed inner-schema value-1 value-2 value-2)
     ~value-2))

(defmethod diff :multi [[_ _ selector multi-cases] value-1 value-2]
  (let [selector-fn (gensym "selector-fn_")
        case-1      (gensym "case-1_")
        case-2      (gensym "case-2_")]
    `(let [~selector-fn ~(util/runtime-fn selector)
           ~case-1      (~selector-fn ~value-1)
           ~case-2      (~selector-fn ~value-2)]
       (if (not= ~case-1 ~case-2)
         ~value-2
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case inner-schema]]
                       [multi-case (as-diffed inner-schema value-1 value-2
                                              (diff inner-schema value-1 value-2))])
                     multi-cases))))))

(defmethod diff :custom [schema value-1 value-2]
  `(~(util/runtime-processor schema (case (:direction *opts*)
                                      :diff   :differ
                                      :undiff :undiffer))
    ~value-1 ~value-2 ~'config))

(defmethod diff :non-diffable [schema value-1 value-2]
  (as-diffed schema value-1 value-2 value-2))

(defn make-common [schema config direction]
  (binding [*opts* {:config config :direction direction}]
    `(fn [~'value-1 ~'value-2 ~'config]
       ~(as-diffed schema 'value-1 'value-2
                   (diff schema 'value-1 'value-2)))))

(defn make-differ [schema config]
  (make-common schema config :diff))

(defn make-undiffer [schema config]
  (make-common schema config :undiff))
