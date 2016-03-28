(ns seria.interp
  "Interpolator generating functions."
  (:require [seria.type :as type]
            [seria.util :as util]))

(def ^:dynamic *opts*)

(defn interp-values [v1 v2 time-factor round?]
  (let [value (+ v1 (* time-factor (- v2 v1)))]
    (if round?
      (util/cljc-round value)
      value)))

(defn interp-dispatch [schema value-1 value-2]
  (cond
    (type/number-type? schema)     :interpable
    (type/interpable-type? schema) (first schema)
    (type/custom-type? schema)     :custom
    :else                          :non-interpable))

(defmulti interp interp-dispatch)

(defmethod interp :interpable [schema value-1 value-2]
  `(interp-values ~value-1 ~value-2 ~'time-factor ~(not (type/integer-type? schema))))

(defmethod interp :non-interpable [_ value-1 value-2]
  `(if ~'prefer-first?
    ~value-1
    ~value-2))

(defmethod interp :vector [[_ _ inner-schema] value-1 value-2]
  (let [index         (gensym "index_")
        inner-value-1 (gensym "inner-value-1_")
        inner-value-2 (gensym "inner-value-2_")]
    `(vec (map-indexed (fn [~index ~inner-value-2]
                         (if-let [~inner-value-1 (get ~value-1 ~index)]
                           ~(interp inner-schema inner-value-1 inner-value-2)
                           ~inner-value-2))
                       ~value-2))))

(defmethod interp :map [[_ {:keys [sorted-by]} _ value-schema] value-1 value-2]
  (let [key   (gensym "key_")
        val-1 (gensym "val-1_")
        val-2 (gensym "val-2_")]
    (->> `(map (fn [[~key ~val-2]]
                 [~key (if-let [~val-1 (get ~value-1 ~key)]
                         ~(interp value-schema val-1 val-2)
                         ~val-2)])
               ~value-2)
         (util/as-map sorted-by))))

(defmethod interp :tuple [[_ {:keys [interp]} :as schema] value-1 value-2]
  (let [destructured-2 (util/destructure schema value-2)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
       ~(mapv (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                (if-not (type/traceable-index? index interp)
                  inner-value-2
                  (let [inner-value-1 (gensym "inner-value-1_")]
                    `(let [~inner-value-1 (get ~value-1 ~index)]
                       ~(interp inner-schema inner-value-1 inner-value-2)))))
              destructured-2))))

(defmethod interp :record [[_ {:keys [interp constructor]} :as schema] value-1 value-2]
  (let [destructured-2 (util/destructure schema value-2)]
    (->> `(let [~@(mapcat (juxt :symbol :inner-value) destructured-2)]
            ~(->> destructured-2
                  (map (fn [{index :index inner-schema :inner-schema inner-value-2 :symbol}]
                         [index (if-not (type/traceable-index? index interp)
                                  inner-value-2
                                  (let [inner-value-1 (gensym "inner-value-1_")]
                                    `(let [~inner-value-1 (get ~value-1 ~index)]
                                       ~(interp inner-schema inner-value-1 inner-value-2))))]))
                  (into {})))
         (util/as-record constructor))))

(defmethod interp :custom [schema value-1 value-2]
  `(~(util/runtime-processor schema :interper)
    ~value-1 ~value-2 ~'time-1 ~'time-2 ~'time ~'config))

(defmethod interp :optional [[_ _ inner-schema] value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(interp inner-schema value-1 value-2)
     ~value-2))

(defmethod interp :multi [[_ _ selector multi-cases] value-1 value-2]
  (let [selector-fn (gensym "selector-fn_")
        case-1      (gensym "case-1_")
        case-2      (gensym "case-2_")]
    `(let [~selector-fn ~(util/runtime-fn selector)
           ~case-1      (~selector-fn ~value-1)
           ~case-2      (~selector-fn ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~value-2
         (condp = ~case-1
           ~@(mapcat (fn [[multi-case schema]]
                       [multi-case (interp schema value-1 value-2)])
                     multi-cases))))))

(defn make-interper [schema config]
  (binding [*opts* {:config config}]
    `(fn [~'value-1 ~'value-2 ~'time-1 ~'time-2 ~'time ~'config]
       (let [~'prefer-first? (< (util/cljc-abs (- ~'time ~'time-1))
                                (util/cljc-abs (- ~'time ~'time-2)))
             ~'time-factor   (/ (- ~'time ~'time-1) (- ~'time-2 ~'time-1))]
         ~(interp schema 'value-1 'value-2)))))
