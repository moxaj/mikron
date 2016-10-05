(ns mikron.codegen.interp
  "Linear interpolator generating functions."
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]
            [mikron.codegen.common :as codegen-common]))

(defmulti interp util/type-of :hierarchy #'type/hierarchy)

(defn interp* [schema route value-1 value-2 options]
  `(if (= ~value-1 ~value-2)
     ~value-1
     ~(interp schema route value-1 value-2 options)))

(defmethod interp :char [_ _ value-1 value-2 options]
  (interp :default nil value-1 value-2 char))

(defmethod interp :integer [_ _ value-1 value-2 options]
  `(common/round ~(interp :floating nil value-1 value-2 options)))

(defmethod interp :floating [_ _ value-1 value-2 {:keys [time-factor]}]
  `(common/interp-numbers ~value-1 ~value-2 ~time-factor))

(defmethod interp :list [[_ _ schema'] route value-1 value-2 options]
  (util/with-gensyms [vec-value-1]
    (if-not (:all route)
      (interp :default nil value-1 value-2 options)
      `(let [~vec-value-1 (vec ~value-1)]
         ~(interp [:vector {} schema'] route vec-value-1 value-2 options)))))

(defmethod interp :vector [[_ _ schema'] route value-1 value-2 options]
  (util/with-gensyms [index value-1' value-2']
    (let [route' (:all route)]
      (if-not route'
        (interp :default nil value-1 value-2 options)
        `(vec (map-indexed (fn [~index ~value-2']
                             (if-let [~value-1' (get ~value-1 ~index)]
                               ~(interp* schema' route' value-1' value-2' options)
                               ~value-2'))
                           ~value-2))))))

(defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] route value-1 value-2 options]
  (util/with-gensyms [key val-1 val-2]
    (let [route' (:all route)]
      (if-not route'
        (interp :default nil value-1 value-2 options)
        (->> `(map (fn [[~key ~val-2]]
                     [~key (if-let [~val-1 (~value-1 ~key)]
                             ~(interp* val-schema route' val-1 val-2 options)
                             ~val-2)])
                   ~value-2)
             (util/as-map sorted-by))))))

(defmethod interp :tuple [[_ _ schemas] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :default nil value-1 value-2 options)
      (->> schemas
           (map-indexed (fn [index schema']
                          `(let [~value-1' (~value-1 ~index)
                                 ~value-2' (~value-2 ~index)]
                             ~(if-let [route' (route index)]
                                (interp* schema' route' value-1' value-2' options)
                                (interp :default nil value-1' value-2' options)))))
           (vec)))))

(defmethod interp :record [[_ options schemas] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :default nil value-1 value-2 options)
      (->> schemas
           (map (fn [[index schema']]
                  [index `(let [~value-1' (~index ~value-1)
                                ~value-2' (~index ~value-2)]
                            ~(if-let [route' (route index)]
                               (interp* schema' route' value-1' value-2' options)
                               (interp :default nil value-1' value-2' options)))]))
           (into {})
           (util/as-record (:constructor options))))))

(defmethod interp :optional [[_ _ schema'] route value-1 value-2 options]
  `(if (and ~value-1 ~value-2)
     ~(interp schema' route value-1 value-2 options)
     ~(interp :default nil value-1 value-2 options)))

(defmethod interp :multi [[_ _ selector multi-map] route value-1 value-2 options]
  (util/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~(interp :default nil value-1 value-2 options)
         (case ~case-1
           ~@(mapcat (fn [[multi-case schema']]
                       [multi-case (interp schema' route value-1 value-2 options)])
                     multi-map))))))

(defmethod interp :wrapped [[_ _ pre post schema'] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    `(let [~value-1' (~pre ~value-1)
           ~value-2' (~pre ~value-2)]
       (~post ~(interp* schema' route value-1' value-2' options)))))

(defmethod interp :aliased [schema route value-1 value-2 options]
  (interp (type/aliases schema) route value-1 value-2 options))

(defmethod interp :custom [schema _ value-1 value-2 {:keys [prefer-first? time-factor]}]
  `(~(util/processor-name :interp schema) ~value-1 ~value-2 ~prefer-first? time-factor))

(defmethod interp :default [_ _ value-1 value-2 {:keys [prefer-first?]}]
  `(if ~prefer-first? ~value-1 ~value-2))

(defmethod codegen-common/fast-processors :interp [_ schema-name {:keys [schemas interp-routes] :as options}]
  (util/with-gensyms [_ value-1 value-2 prefer-first? time-factor]
    [`(~(util/processor-name :interp schema-name)
       [~value-1 ~value-2 ~prefer-first? ~time-factor]
       ~(interp (schemas schema-name)
                (interp-routes schema-name)
                value-1
                value-2
                (assoc options :prefer-first? prefer-first? :time-factor time-factor)))]))

(defmethod codegen-common/processors :interp [_ schema-name options]
  (util/with-gensyms [_ value-1 value-2 prefer-first? time-factor]
    [`(defmethod common/process [:interp ~schema-name] [~_ ~_ ~value-1 ~value-2 ~prefer-first? ~time-factor]
        (~(util/processor-name :interp schema-name)
         ~value-1
         ~value-2
         ~prefer-first?
         ~time-factor))]))
