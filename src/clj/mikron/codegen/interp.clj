(ns mikron.codegen.interp
  "Linear interpolator generating functions."
  (:require [mikron.type :as type]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.math :as util.math]
            [mikron.util.coll :as util.coll]))

(defmulti interp compile-util/type-of :hierarchy #'type/hierarchy)

(defmethod interp :char [_ _ value-1 value-2 env]
  (interp :built-in nil value-1 value-2 char))

(defmethod interp :integer [_ _ value-1 value-2 env]
  `(util.math/round ~(interp :floating nil value-1 value-2 env)))

(defmethod interp :floating [_ _ value-1 value-2 {:keys [time-factor]}]
  `(util.math/interp ~value-1 ~value-2 ~time-factor))

(defmethod interp :list [[_ options schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (:all route)
      (interp :built-in nil value-1 value-2 env)
      `(let [~value-1' (vec ~value-1)
             ~value-2' (vec ~value-2)]
         ~(interp [:vector options schema'] route value-1' value-2' env)))))

(defmethod interp :vector [[_ _ schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [index value-1' value-2']
    (let [route' (:all route)]
      (if-not route'
        (interp :built-in nil value-1 value-2 env)
        `(util.coll/combine! ~value-1 ~value-2 [] true
                             (fn [~value-1' ~value-2']
                               ~(interp schema' route' value-1' value-2' env))
                             (fn [~value-1' ~value-2']
                               ~(interp :built-in nil value-1' value-2' env)))))))

(defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] route value-1 value-2 env]
  (compile-util/with-gensyms [val-1 val-2]
    (let [route' (:all route)]
      (if-not route'
        (interp :built-in nil value-1 value-2 env)
        `(util.coll/combine-kv! ~value-1 ~value-2
                                ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                                ~(nil? sorted-by)
                                (fn [~val-1 ~val-2]
                                  ~(interp val-schema route' val-1 val-2 env))
                                (fn [~val-1 ~val-2]
                                  ~(interp :built-in nil val-1 val-2 env)))))))

(defmethod interp :tuple [[_ _ schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :built-in nil value-1 value-2 env)
      (->> schemas
           (map-indexed (fn [index schema']
                          `(let [~value-1' (util.coll/nth ~value-1 ~index)
                                 ~value-2' (util.coll/nth ~value-2 ~index)]
                             ~(if-let [route' (route index)]
                                (interp schema' route' value-1' value-2' env)
                                (interp :built-in nil value-1' value-2' env)))))
           (vec)))))

(defmethod interp :record [[_ {:keys [type]} schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :built-in nil value-1 value-2 env)
      (let [fields (compile-util/record->fields schemas)]
        `(let [~@(mapcat (fn [[index field]]
                           [field `(let [~value-1' ~(compile-util/record-lookup value-1 index type)
                                         ~value-2' ~(compile-util/record-lookup value-2 index type)]
                                     ~(if-let [route' (route index)]
                                        (interp (schemas index) route' value-1' value-2' env)
                                        (interp :built-in nil value-1' value-2' env)))])
                         fields)]
           ~(compile-util/fields->record fields type))))))

(defmethod interp :optional [[_ _ schema'] route value-1 value-2 env]
  `(if (and ~value-1 ~value-2)
     ~(interp schema' route value-1 value-2 env)
     ~(interp :built-in nil value-1 value-2 env)))

(defmethod interp :multi [[_ _ selector multi-map] route value-1 value-2 env]
  (compile-util/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if-not (= ~case-1 ~case-2)
         ~(interp :built-in nil value-1 value-2 env)
         (case ~case-1
           ~@(mapcat (fn [[multi-case schema']]
                       [multi-case (interp schema' route value-1 value-2 env)])
                     multi-map))))))

(defmethod interp :wrapped [[_ _ pre post schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    `(let [~value-1' (~pre ~value-1)
           ~value-2' (~pre ~value-2)]
       (~post ~(interp schema' route value-1' value-2' env)))))

(defmethod interp :aliased [schema route value-1 value-2 env]
  (interp (type/aliases schema) route value-1 value-2 env))

(defmethod interp :built-in [schema _ value-1 value-2 {:keys [prefer-first?]}]
  `(if ~prefer-first? ~value-1 ~value-2))

(defmethod interp :custom [schema _ value-1 value-2 {:keys [prefer-first? time-factor]}]
  `(~(compile-util/processor-name :interp schema) ~value-1 ~value-2 ~prefer-first? ~time-factor))

(defmethod compile-util/processor :interp [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2 prefer-first? time-factor]
    `([~value-1 ~value-2 ~prefer-first? ~time-factor]
      ~(interp schema (:interp env) value-1 value-2
               (assoc env :prefer-first? prefer-first? :time-factor time-factor)))))
