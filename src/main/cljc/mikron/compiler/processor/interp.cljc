(ns mikron.compiler.processor.interp
  "Linear interpolator generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.math :as math]))

(macrowbar/emit :debug
  (defmulti interp
    "Returns the generated interpolator code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn interp*
    "Returns the generated interpolator code for a given schema."
    [schema paths value-1 value-2]
    (if-not paths
      (interp [:default] nil value-1 value-2)
      (interp schema paths value-1 value-2)))

  (defmethod interp :integer [_ _ value-1 value-2]
    `(math/round ~(interp [:floating] nil value-1 value-2)))

  (defmethod interp :floating [_ _ value-1 value-2]
    `(math/interp ~value-1 ~value-2 ~(:time-factor processor.common/*processor-options*)))

  (defmethod interp :char [_ _ value-1 value-2]
    (interp [:default] nil value-1 value-2))

  (defmethod interp :list [[_ options schema'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1-vec value-2-vec]}
      (if-not (:all paths)
        (interp [:default] nil value-1 value-2)
        `(let [~value-1-vec (vec ~value-1)
               ~value-2-vec (vec ~value-2)]
           ~(interp [:vector options schema'] paths value-1-vec value-2-vec)))))

  (defmethod interp :vector [[_ _ schema'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [index value-1' value-2' value value' length-1 length-2]}
      (let [paths' (:all paths)]
        (if-not paths'
          (interp [:default] nil value-1 value-2)
          `(let [~length-1 (runtime.processor.common/count ~value-1)
                 ~length-2 (runtime.processor.common/count ~value-2)]
             (loop [~value (transient [])
                    ~index (long 0)]
               (if (== ~index ~length-2)
                 (persistent! ~value)
                 (let [~value-2' (runtime.processor.common/nth ~value-2 ~index)
                       ~value'   (if (<= ~length-1 ~index)
                                   ~(interp [:default] nil nil value-2')
                                   (let [~value-1' (runtime.processor.common/nth ~value-1 ~index)]
                                     ~(interp* schema' paths' value-1' value-2')))]
                   (recur (conj! ~value ~value')
                          (unchecked-inc ~index))))))))))

  (defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2' key-2 keys-2 value value']}
      (let [paths'     (:all paths)]
        (if-not paths'
          (interp [:default] nil value-1 value-2)
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
                                 ~(interp* val-schema paths' value-1' value-2')
                                 ~(interp [:default] nil nil value-2'))]
                 (recur (~(if sorted-by `assoc `assoc!) ~value ~key-2 ~value')
                        ~keys-2))))))))

  (defmethod interp :tuple [[_ _ schemas] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2']}
      (if-not paths
        (interp [:default] nil value-1 value-2)
        (let [fields (processor.common/tuple->fields schemas)]
          `(let [~@(mapcat (fn [[key value']]
                             [value' `(let [~value-1' ~(processor.common/tuple-lookup value-1 key)
                                            ~value-2' ~(processor.common/tuple-lookup value-2 key)]
                                        ~(if-let [paths' (paths key)]
                                           (interp (schemas key) paths' value-1' value-2')
                                           (interp [:default] nil value-1' value-2')))])
                           fields)]
             ~(processor.common/fields->tuple fields))))))

  (defmethod interp :record [[_ {:keys [type]} schemas] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2']}
      (if-not paths
        (interp [:default] nil value-1 value-2)
        (let [fields (processor.common/record->fields schemas)]
          `(let [~@(mapcat (fn [[key value']]
                             [value' `(let [~value-1' ~(processor.common/record-lookup value-1 key type)
                                            ~value-2' ~(processor.common/record-lookup value-2 key type)]
                                        ~(if-let [paths' (paths key)]
                                           (interp (schemas key) paths' value-1' value-2')
                                           (interp [:default] nil value-1' value-2')))])
                           fields)]
             ~(processor.common/fields->record fields type))))))

  (defmethod interp :optional [[_ _ schema'] paths value-1 value-2]
    `(if (and ~value-1 ~value-2)
       ~(interp schema' paths value-1 value-2)
       ~(interp [:default] nil value-1 value-2)))

  (defmethod interp :multi [[_ _ selector schemas'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [case-1 case-2]}
      (if-not paths
        (interp [:default] nil value-1 value-2)
        `(let [~case-1 (~selector ~value-1)
               ~case-2 (~selector ~value-2)]
           (if-not (= ~case-1 ~case-2)
             ~(interp [:default] nil value-1 value-2)
             (case ~case-1
               ~@(mapcat (fn [[key' schema']]
                           [key' (if-let [paths' (paths key')]
                                   (interp schema' paths' value-1 value-2)
                                   (interp [:default] nil value-1 value-2))])
                         schemas')))))))

  (defmethod interp :wrapped [[_ _ pre post schema'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2']}
      `(let [~value-1' (~pre ~value-1)
             ~value-2' (~pre ~value-2)]
         (~post ~(interp schema' paths value-1' value-2')))))

  (defmethod interp :custom [schema _ value-1 value-2]
    `(~(processor.common/custom-processor-name schema)
      ~value-1
      ~value-2
      ~(:prefer-first? processor.common/*processor-options*)
      ~(:time-factor processor.common/*processor-options*)))

  (defmethod interp :default [_ _ value-1 value-2]
    `(if ~(:prefer-first? processor.common/*processor-options*)
       ~value-1
       ~value-2))

  (defmethod processor.common/processor* :interp [_ schema]
    (macrowbar/with-syms {:gen [value-1 value-2 prefer-first? time-factor]}
      (binding [processor.common/*processor-options*
                (assoc processor.common/*processor-options* :prefer-first? prefer-first? :time-factor time-factor)]
        {:args [value-1 value-2 prefer-first? time-factor]
         :body (processor.common/force-lazy
                 (interp schema (:interp-paths processor.common/*processor-options*) value-1 value-2))}))))
