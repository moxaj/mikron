(ns seria.diff
  (:require [seria.spec :refer [primitive? advanced? diffable? custom? traceable-index?]]
            [seria.util :refer [disj-indexed decorate-map decorate-constructor runtime-fn runtime-processor
                                expand-record]]))

(def ^:dynamic *config*)
(def ^:dynamic *direction*)
(def ^:const dnil ::dnil)

(defn dnil? [x]
  (= dnil x))

(defn decorate-common [schema value-1 value-2 expr]
  (let [eq-op (if-not (or (primitive? schema)
                          (advanced? schema)
                          (custom? schema))
                `=
                (if-let [fn-key (get-in *config* [:eq-ops schema])]
                  (runtime-fn fn-key)
                  `=))]
    (case *direction*
      :differ   `(if (~eq-op ~value-1 ~value-2)
                   ~dnil
                   ~expr)
      :undiffer `(if (dnil? ~value-2)
                   ~value-1
                   ~expr))))

(defn diff-dispatch [schema _ _]
  (cond
    (diffable? schema) (first schema)
    (custom? schema)   :custom
    :else              :non-diffable))

(defmulti diff diff-dispatch)

(defmethod diff :vector [[_ _ inner-schema :as schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (gensym "inner-value-1_")
        inner-value-2 (gensym "inner-value-2_")]
    (->> `(vec (map-indexed (fn [~index ~inner-value-2]
                              (if-let [~inner-value-1 (get ~value-1 ~index)]
                                ~(diff inner-schema inner-value-1 inner-value-2)
                                ~inner-value-2))
                            ~value-2))
         (decorate-common schema value-1 value-2))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema :as schema] value-1 value-2]
  (let [key    (gensym "key_")
        val-1  (gensym "val-1_")
        val-2  (gensym "val-2_")]
    (->> `(map (fn [[~key ~val-2]]
                 [~key (if-let [~val-1 (get ~value-1 ~key)]
                         ~(diff val-schema val-1 val-2)
                         ~val-2)])
               ~value-2)
         (decorate-map sorted-by)
         (decorate-common schema value-1 value-2))))

(defmethod diff :tuple [[_ {to-diff :diff} :as schema] value-1 value-2]
  (let [disjoined-2 (disj-indexed schema value-2)]
    (->> `(let [~@(mapcat (juxt :symbol :inner-value) disjoined-2)]
            ~(mapv (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                     (if-not (traceable-index? index to-diff)
                       inner-value-2
                       (let [inner-value-1 (gensym "inner-value-1_")]
                         `(let [~inner-value-1 (get ~value-1 ~index)]
                            ~(diff inner-schema inner-value-1 inner-value-2)))))
                   disjoined-2))
         (decorate-common schema value-1 value-2))))

(defmethod diff :record [schema value-1 value-2]
  (let [[_ {constructor :constructor to-diff :diff} :as schema] (expand-record schema (:schemas *config*))
        disjoined-2 (disj-indexed schema value-2)]
    (->> `(let [~@(mapcat (juxt :symbol :inner-value) disjoined-2)]
            ~(->> disjoined-2
                  (map (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                         [index (if-not (traceable-index? index to-diff)
                                  inner-value-2
                                  (let [inner-value-1 (gensym "inner-value-1_")]
                                    `(let [~inner-value-1 (get ~value-1 ~index)]
                                       ~(diff inner-schema inner-value-1 inner-value-2))))]))
                  (into {})))
         (decorate-constructor constructor)
         (decorate-common schema value-1 value-2))))

(defmethod diff :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(diff inner-schema value-1 value-2)
     ~value-2))

(defmethod diff :multi [[_ _ selector multi-cases] value-1 value-2]
  (let [selector-fn (gensym "selector-fn_")
        case-1      (gensym "case-1_")
        case-2      (gensym "case-2_")]
    `(let [~selector-fn ~(runtime-fn selector)
           ~case-1      (~selector-fn ~value-1)
           ~case-2      (~selector-fn ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~value-2
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case schema]]
                       [multi-case (diff schema value-1 value-2)])
                     multi-cases))))))

(defmethod diff :custom [schema value-1 value-2]
  `(~(runtime-processor schema *direction*) ~value-1 ~value-2 ~'config))

(defmethod diff :non-diffable [schema value-1 value-2]
  (decorate-common schema value-1 value-2 value-2))

(defn make-common [schema config direction]
  (binding [*config*    config
            *direction* direction]
    `(fn [~'value-1 ~'value-2 ~'config]
       ~(diff schema 'value-1 'value-2))))

(defn make-differ [schema config]
  (make-common schema config :differ))

(defn make-undiffer [schema config]
  (make-common schema config :undiffer))
