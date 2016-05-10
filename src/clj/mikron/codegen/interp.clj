(ns mikron.codegen.interp
  "Linear interpolator generating functions."
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]))

(def ^:dynamic *options*)

(defmulti interp util/type-of :hierarchy #'type/hierarchy)

(defn interp-equal [schema route value-1 value-2]
  `(if (= ~value-1 ~value-2)
     ~value-1
     ~(interp schema route value-1 value-2)))

(defmethod interp :integer [_ _ value-1 value-2]
  `(common/round ~(interp :floating nil value-1 value-2)))

(defmethod interp :floating [_ _ value-1 value-2]
  `(common/interp-numbers ~value-1 ~value-2 ~(:time-factor *options*)))

(defmethod interp :list [[_ _ inner-schema] route value-1 value-2]
  (if-not (:all route)
    (interp :default nil value-1 value-2)
    (util/with-gensyms [vec-value-1]
      `(let [~vec-value-1 (vec ~value-1)]
         ~(interp [:vector {} inner-schema] route vec-value-1 value-2)))))

(defmethod interp :vector [[_ _ inner-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (interp :default nil value-1 value-2)
      (util/with-gensyms [index inner-value-1 inner-value-2]
        `(vec (map-indexed (fn [~index ~inner-value-2]
                             (if-let [~inner-value-1 (get ~value-1 ~index)]
                               ~(interp-equal inner-schema inner-route inner-value-1 inner-value-2)
                               ~inner-value-2))
                           ~value-2))))))

(defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (interp :default nil value-1 value-2)
      (util/with-gensyms [key val-1 val-2]
        (->> `(map (fn [[~key ~val-2]]
                     [~key (if-let [~val-1 (~value-1 ~key)]
                             ~(interp-equal val-schema inner-route val-1 val-2)
                             ~val-2)])
                   ~value-2)
             (util/as-map sorted-by))))))

(defmethod interp :tuple [[_ _ inner-schemas] route value-1 value-2]
  (if-not (map? route)
    (interp :default nil value-1 value-2)
    (util/with-gensyms [inner-value-1 inner-value-2]
      (->> inner-schemas
           (map-indexed (fn [index inner-schema]
                          `(let [~inner-value-1 (~value-1 ~index)
                                 ~inner-value-2 (~value-2 ~index)]
                             ~(if-let [inner-route (route index)]
                                (interp-equal inner-schema inner-route inner-value-1 inner-value-2)
                                (interp :default nil inner-value-1 inner-value-2)))))
           (vec)))))

(defmethod interp :record [[_ options inner-schemas] route value-1 value-2]
  (if-not (map? route)
    (interp :default nil value-1 value-2)
    (util/with-gensyms [inner-value-1 inner-value-2]
      (->> inner-schemas
           (map (fn [[index inner-schema]]
                  [index `(let [~inner-value-1 (~index ~value-1)
                                ~inner-value-2 (~index ~value-2)]
                            ~(if-let [inner-route (route index)]
                               (interp-equal inner-schema inner-route inner-value-1 inner-value-2)
                               (interp :default nil inner-value-1 inner-value-2)))]))
           (into {})
           (util/as-record (:constructor options))))))

(defmethod interp :optional [[_ _ inner-schema] route value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(interp inner-schema route value-1 value-2)
     ~(interp :default nil value-1 value-2)))

(defmethod interp :multi [[_ _ selector multi-map] route value-1 value-2]
  (util/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~(interp :default nil value-1 value-2)
         (case ~case-1
           ~@(->> multi-map
                  (mapcat (fn [[multi-case inner-schema]]
                            [multi-case (interp inner-schema route value-1 value-2)]))
                  (doall)))))))

(defmethod interp :wrapped [[_ {:keys [pre post]} inner-schema] route value-1 value-2]
  (util/with-gensyms [inner-value-1 inner-value-2]
    `(~post (let [~inner-value-1 (~pre ~value-1)
                  ~inner-value-2 (~pre ~value-2)]
              ~(interp-equal inner-schema route inner-value-1 inner-value-2)))))

(defmethod interp :template [schema route value-1 value-2]
  (interp (type/templates schema) route value-1 value-2))

(defmethod interp :custom [schema _ value-1 value-2]
  `(~(util/processor-name :interp schema)
    ~value-1
    ~value-2
    ~(:time-1 *options*)
    ~(:time-2 *options*)
    ~(:time *options*)))

(defmethod interp :default [_ _ value-1 value-2]
  `(if ~(:prefer-first? *options*) ~value-1 ~value-2))

;; private api

(defn interper [schema-name {:keys [schemas interp-routes] :as options}]
  (util/with-gensyms [value-1 value-2 time-1 time-2 time prefer-first? time-factor]
    (binding [*options* (assoc options :prefer-first? prefer-first?
                                       :time-factor   time-factor
                                       :time-1        time-1
                                       :time-2        time-2
                                       :time          time)]
      `(~(with-meta (util/processor-name :interp schema-name)
                    {:private true})
        [~value-1 ~value-2 ~time-1 ~time-2 ~time]
        (let [~prefer-first? (< (common/abs (- ~time ~time-1))
                                (common/abs (- ~time ~time-2)))
              ~time-factor   (/ (- ~time ~time-1) (- ~time-2 ~time-1))]
          ~(interp-equal (schemas schema-name) (interp-routes schema-name) value-1 value-2))))))

;; public api

(defn global-interper [{:keys [schemas]}]
  (util/with-gensyms [schema value-1 value-2 time-1 time-2 time]
    `(~(util/processor-name :interp)
      [~schema ~value-1 ~value-2 ~time-1 ~time-2 ~time]
      (~(util/select-processor :interp schema schemas)
       ~value-1 ~value-2 ~time-1 ~time-2 ~time))))
