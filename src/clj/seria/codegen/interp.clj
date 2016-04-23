(ns seria.codegen.interp
  "Linear interpolator generating functions."
  (:require [seria.type :as type]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.common :as util.common]))

(defn wrap-equal [value-1 value-2 body]
  `(if (= ~value-1 ~value-2) ~value-1 ~body))

(defn interp-numbers [value-1 value-2 time-factor]
  (long (+' value-1 (* time-factor (-' value-2 value-1)))))

(def ^:dynamic *options*)

(defmulti interp util.schema/type-of :hierarchy #'type/hierarchy)

(defmethod interp :integer [_ _ value-1 value-2]
  `(util.common/cljc-round ~(interp :floating nil value-1 value-2)))

(defmethod interp :floating [_ _ value-1 value-2]
  `(interp-numbers ~value-1 ~value-2 ~(:time-factor *options*)))

(defmethod interp :list [[_ _ inner-schema] route value-1 value-2]
  (if-not (:all route)
    (interp :default nil value-1 value-2)
    (let [vec-value-1 (with-meta (util.symbol/postfix-gensym value-1 "vec")
                                 {:no-inline true})]
      `(let [~vec-value-1 (vec ~value-1)]
         ~(interp [:vector {} inner-schema] route vec-value-1 value-2)))))

(defmethod interp :vector [[_ _ inner-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (interp :default nil value-1 value-2)
      (let [index         (gensym "index_")
            inner-value-1 (util.symbol/postfix-gensym value-1 "item")
            inner-value-2 (util.symbol/postfix-gensym value-2 "item")]
        `(vec (map-indexed (fn [~index ~inner-value-2]
                             (if-let [~inner-value-1 (get ~value-1 ~index)]
                               ~(wrap-equal inner-value-1 inner-value-2
                                            (interp inner-schema inner-route inner-value-1 inner-value-2))
                               ~inner-value-2))
                           ~value-2))))))

(defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (interp :default nil value-1 value-2)
      (let [key   (util.symbol/postfix-gensym value-2 "key")
            val-1 (util.symbol/postfix-gensym value-1 "item")
            val-2 (util.symbol/postfix-gensym value-2 "item")]
        (->> `(map (fn [[~key ~val-2]]
                     [~key (if-let [~val-1 (~value-1 ~key)]
                             ~(wrap-equal val-1 val-2
                                          (interp val-schema inner-route val-1 val-2))
                             ~val-2)])
                   ~value-2)
             (util.schema/as-map sorted-by))))))

(defmethod interp :tuple [schema route value-1 value-2]
  (if-not (map? route)
    (interp :default nil value-1 value-2)
    (let [destructured-2 (util.schema/destructure-indexed schema value-2 true)]
      `(let [~@(mapcat (juxt :symbol :value) destructured-2)]
         ~(mapv (fn [{index :index inner-schema :schema inner-value-2 :symbol}]
                  (let [inner-value-1 (util.symbol/postfix-gensym value-1 (str index))]
                    `(let [~inner-value-1 (~value-1 ~index)]
                       ~(if-let [inner-route (route index)]
                          (wrap-equal inner-value-1 inner-value-2
                                      (interp inner-schema inner-route inner-value-1 inner-value-2))
                          (interp :default nil inner-value-1 inner-value-2)))))
                destructured-2)))))

(defmethod interp :record [schema route value-1 value-2]
  (let [schema (util.schema/expand-record schema (:schemas *options*))
        route  (util.schema/expand-interp-route route (:interp-routes *options*))]
    (if-not (map? route)
      (interp :default nil value-1 value-2)
      (let [destructured-2 (util.schema/destructure-indexed schema value-2 true)]
        `(let [~@(mapcat (juxt :symbol :value) destructured-2)]
           ~(->> (map (fn [{index :index inner-schema :schema inner-value-2 :symbol}]
                        [index (let [inner-value-1 (util.symbol/postfix-gensym value-1 (name index))]
                                 `(let [~inner-value-1 (~index ~value-1)]
                                    ~(if-let [inner-route (route index)]
                                       (wrap-equal inner-value-1 inner-value-2
                                                   (interp inner-schema inner-route inner-value-1 inner-value-2))
                                       (interp :default nil inner-value-1 inner-value-2))))])
                      destructured-2)
                 (into {})
                 (util.schema/as-record (:constructor (second schema)))))))))

(defmethod interp :optional [[_ _ inner-schema] route value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(interp inner-schema route value-1 value-2)
     ~(interp :default nil value-1 value-2)))

(defmethod interp :multi [[_ _ selector multi-map] route value-1 value-2]
  (util.symbol/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~(interp :default nil value-1 value-2)
         (case ~case-1
           ~@(mapcat (fn [[multi-case inner-schema]]
                       [multi-case (interp inner-schema route value-1 value-2)])
                     multi-map))))))

(defmethod interp :custom [schema _ value-1 value-2]
  `(~(util.symbol/processor-name :interp schema)
    ~value-1
    ~value-2
    ~(:time-1 *options*)
    ~(:time-2 *options*)
    ~(:time *options*)))

(defmethod interp :default [_ _ value-1 value-2]
  `(if ~(:prefer-first? *options*) ~value-1 ~value-2))

(defn make-interper [schema-name {:keys [schemas interp-routes] :as options}]
  (util.symbol/with-gensyms [value-1 value-2 time-1 time-2 time prefer-first? time-factor]
    (let [schema (schemas schema-name)
          route  (interp-routes schema-name)]
      (binding [*options* (assoc options :prefer-first? prefer-first?
                                         :time-factor   time-factor
                                         :time-1        time-1
                                         :time-2        time-2
                                         :time          time)]
        `(defn ~(util.symbol/processor-name :interp schema-name)
           [~value-1 ~value-2 ~time-1 ~time-2 ~time]
           (let [~prefer-first? (< (util.common/cljc-abs (- ~time ~time-1))
                                   (util.common/cljc-abs (- ~time ~time-2)))
                 ~time-factor   (/ (- ~time ~time-1) (- ~time-2 ~time-1))]
             ~(wrap-equal value-1 value-2
                          (interp schema route value-1 value-2))))))))
