(ns mikron.codegen.interp
  "Linear interpolator generating functions."
  (:require [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.util.coll :as util.coll]
            [mikron.util.math :as util.math]))

(defmulti interp compile-util/type-of :hierarchy #'schema/hierarchy)

(defmethod interp :char [_ _ value-1 value-2 env]
  (interp :built-in nil value-1 value-2 char))

(defmethod interp :integer [_ _ value-1 value-2 env]
  `(util.math/round ~(interp :floating nil value-1 value-2 env)))

(defmethod interp :floating [_ _ value-1 value-2 {:keys [time-factor]}]
  `(util.math/interp ~value-1 ~value-2 ~time-factor))

(defmethod interp :list [[_ options schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1-vec value-2-vec]
    (if-not (:all route)
      (interp :built-in nil value-1 value-2 env)
      `(let [~value-1-vec (vec ~value-1)
             ~value-2-vec (vec ~value-2)]
         ~(interp [:vector options schema'] route value-1-vec value-2-vec env)))))

(defmethod interp :vector [[_ _ schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [index value-1' value-2' value value' length-1 length-2]
    (let [route' (:all route)]
      (if-not route'
        (interp :built-in nil value-1 value-2 env)
        `(let [~length-1 (util.coll/count ~value-1)
               ~length-2 (util.coll/count ~value-2)]
           (loop [~value (transient [])
                  ~index (long 0)]
             (if (== ~index ~length-2)
               (persistent! ~value)
               (let [~value-2' (util.coll/nth ~value-2 ~index)
                     ~value'   (if (<= ~length-1 ~index)
                                 ~(interp :built-in nil nil value-2' env)
                                 (let [~value-1' (util.coll/nth ~value-1 ~index)]
                                   ~(interp schema' route' value-1' value-2' env)))]
                 (recur (conj! ~value ~value')
                        (unchecked-inc ~index))))))))))

(defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2' key-2 keys-2 value value']
    (let [route' (:all route)]
      (if-not route'
        (interp :built-in nil value-1 value-2 env)
        `(loop [~value            ~(if sorted-by
                                     `(sorted-map-by ~sorted-by)
                                     `(transient {}))
                [~key-2 & ~keys-2] (keys ~value-2)]
           (if-not ~key-2
             ~(if sorted-by
                value
                `(persistent! ~value))
             (let [~value-2' (~value-2 ~key-2)
                   ~value'   (if-let [~value-1' (~value-1 ~key-2)]
                               ~(interp val-schema route' value-1' value-2' env)
                               ~(interp :built-in nil nil value-2' env))]
               (recur (~(if sorted-by `assoc `assoc!) ~value ~key-2 ~value')
                      ~keys-2))))))))

(defmethod interp :tuple [[_ _ schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :built-in nil value-1 value-2 env)
      (let [fields (compile-util/tuple->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(compile-util/tuple-lookup value-1 key)
                                          ~value-2' ~(compile-util/tuple-lookup value-2 key)]
                                      ~(if-let [route' (route key)]
                                         (interp (schemas key) route' value-1' value-2' env)
                                         (interp :built-in nil value-1' value-2' env)))])
                         fields)]
           ~(compile-util/fields->tuple fields))))))

(defmethod interp :record [[_ {:keys [type]} schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (interp :built-in nil value-1 value-2 env)
      (let [fields (compile-util/record->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(compile-util/record-lookup value-1 key type)
                                          ~value-2' ~(compile-util/record-lookup value-2 key type)]
                                      ~(if-let [route' (route key)]
                                         (interp (schemas key) route' value-1' value-2' env)
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

(defmethod interp :aliased [[schema'] route value-1 value-2 env]
  (interp (schema/aliases schema') route value-1 value-2 env))

(defmethod interp :built-in [_ _ value-1 value-2 {:keys [prefer-first?]}]
  `(if ~prefer-first? ~value-1 ~value-2))

(defmethod interp :custom [schema _ value-1 value-2 {:keys [prefer-first? time-factor]}]
  `(~(compile-util/processor-name :interp schema) ~value-1 ~value-2 ~prefer-first? ~time-factor))

(defmethod compile-util/processor :interp [_ {:keys [schema ext] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2 prefer-first? time-factor]
    `([~value-1 ~value-2 ~prefer-first? ~time-factor]
      ~(interp schema (:interp ext) value-1 value-2
               (assoc env :prefer-first? prefer-first? :time-factor time-factor)))))
