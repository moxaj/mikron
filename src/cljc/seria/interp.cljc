(ns seria.interp
  "Interpolator generating functions."
  (:require [seria.type :as type]
            [seria.util :as util]))

(def ^:dynamic *opts*)

(defn interped? [[complex-type {interped-indices :interp}]]
  (condp contains? complex-type
    #{:map}
    (= :all interped-indices)

    #{:tuple :record}
    (and (vector? interped-indices)
         (seq? interped-indices))))

(defn interp-index? [index indices]
  (or (= :all indices)
      ((set indices) index)))

(defn interp-numbers [x1 x2 time-factor round?]
  (let [x `(+ ~x1 (* ~time-factor (- ~x2 ~x1)))]
    (if round?
      `(util/cljc-round ~x)
      x)))

(defn interp-default [value-1 value-2]
  `(if ~(:prefer-first? *opts*)
     ~value-1
     ~value-2))

(defmulti interp (fn [schema value-1 value-2]
                   (let [schema-type (type/type-of schema)]
                     (cond
                       (type/number-type? schema-type)     :number
                       (type/interpable-type? schema-type) schema-type
                       (type/custom-type? schema-type)     :custom))))

(defmethod interp :number [schema value-1 value-2]
  (let [round? (not (type/integer-type? (type/type-of schema)))]
    (interp-numbers value-1 value-2 (:time-factor *opts*) round?)))

(defmethod interp :map [[_ {:keys [sorted-by]} _ value-schema :as schema] value-1 value-2]
  (if-not (interped? schema)
    (interp-default value-1 value-2)
    (let [key   (util/postfix-gensym value-2 "key")
          val-1 (util/postfix-gensym value-1 "val")
          val-2 (util/postfix-gensym value-2 "val")]
      (->> `(map (fn [[~key ~val-2]]
                   [~key (if-let [~val-1 (get ~value-1 ~key)]
                           ~(interp value-schema val-1 val-2)
                           ~val-2)])
                 ~value-2)
           (util/as-map sorted-by (:runtime-config *opts*))))))

(defmethod interp :tuple [[_ {interp-indices :interp} :as schema] value-1 value-2]
  (if-not (interped? schema)
    (interp-default value-1 value-2)
    (let [destructured-2 (util/destructure-indexed schema value-2 true)]
      `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
         ~(mapv (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                  (let [inner-value-1 (gensym "inner-value-1_")]
                    `(let [~inner-value-1 (~value-1 ~index)]
                       ~(if-not (interp-index? index interp-indices)
                          (interp-default inner-value-1 inner-value-2)
                          (interp inner-schema inner-value-1 inner-value-2)))))
                destructured-2)))))

(defmethod interp :record [schema value-1 value-2]
  (let [schema (util/expand-record schema (get-in *opts* [:config :schemas]))]
    (if-not (interped? schema)
      (interp-default value-1 value-2)
      (let [[_ {interp-indices :interp constructor :constructor}] schema
            destructured-2 (util/destructure-indexed schema value-2 true)]
        (->> `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
                ~(->> destructured-2
                      (map (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                             [index (let [inner-value-1 (gensym "inner-value-1_")]
                                      `(let [~inner-value-1 (~index ~value-1)]
                                         ~(if-not (interp-index? index interp-indices)
                                            (interp-default inner-value-1 inner-value-2)
                                            (interp inner-schema inner-value-1 inner-value-2))))]))
                      (into {})))
             (util/as-record constructor (:runtime-config *opts*)))))))

(defmethod interp :custom [schema value-1 value-2]
  (let [{:keys [time-1 time-2 time runtime-config]} *opts*]
    `(~(util/runtime-processor schema :interp runtime-config)
      ~value-1 ~value-2 ~time-1 ~time-2 ~time ~runtime-config)))

(defmethod interp :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(interp inner-schema value-1 value-2)
     ~(interp-default value-1 value-2)))

(defmethod interp :multi [[_ _ selector multi-cases] value-1 value-2]
  (let [selector-fn (gensym "selector-fn_")
        case-1      (gensym "case-1_")
        case-2      (gensym "case-2_")]
    `(let [~selector-fn ~(util/runtime-fn selector (:runtime-config *opts*))
           ~case-1      (~selector-fn ~value-1)
           ~case-2      (~selector-fn ~value-2)]
       (if (not= ~case-1 ~case-2)
         ~(interp-default value-1 value-2)
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case schema]]
                       [multi-case (interp schema value-1 value-2)])
                     multi-cases))))))

(defmethod interp :nil [_ _ _]
  nil)

(defmethod interp :default [_ value-1 value-2]
  (interp-default value-1 value-2))

(defn make-interper [schema config]
  (let [value-1        (gensym "value-1_")
        value-2        (gensym "value-2_")
        time-1         (gensym "time-1_")
        time-2         (gensym "time-2_")
        time           (gensym "time_")
        runtime-config (gensym "config_")
        prefer-first?  (gensym "prefer-first?_")
        time-factor    (gensym "time-factor_")]
    (binding [*opts* {:config         config
                      :time-1         time-1
                      :time-2         time-2
                      :time           time
                      :runtime-config runtime-config
                      :prefer-first?  prefer-first?
                      :time-factor    time-factor}]
      `(fn [~value-1 ~value-2 ~time-1 ~time-2 ~time ~runtime-config]
         (let [~prefer-first? (< (util/cljc-abs (- ~time ~time-1))
                                 (util/cljc-abs (- ~time ~time-2)))
               ~time-factor   (/ (- ~time ~time-1) (- ~time-2 ~time-1))]
           ~(interp schema value-1 value-2))))))
