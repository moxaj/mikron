(ns mikron.compiler.processor.interp
  "Linear interpolator generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.math :as runtime.math]))

(macrowbar/emit :debug
  (defmulti interp
    "Returns the generated interpolator code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn interp*
    "Returns the generated interpolator code for a given schema."
    [schema paths value-1 value-2 global-options]
    (if-not paths
      (interp [:default] nil value-1 value-2 global-options)
      (interp schema paths value-1 value-2 global-options)))

  (defmethod interp :integer [_ _ value-1 value-2 global-options]
    `(runtime.math/round ~(interp [:floating] nil value-1 value-2 global-options)))

  (defmethod interp :floating [_ _ value-1 value-2 {:keys [time-factor]}]
    `(runtime.math/interp ~value-1 ~value-2 ~time-factor))

  (defmethod interp :char [_ _ value-1 value-2 global-options]
    (interp [:default] nil value-1 value-2 global-options))

  (defmethod interp :list [[_ options schema'] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [value-1-vec value-2-vec]}
      (if-not (:all paths)
        (interp [:default] nil value-1 value-2 global-options)
        `(let [~value-1-vec (vec ~value-1)
               ~value-2-vec (vec ~value-2)]
           ~(interp [:vector options schema'] paths value-1-vec value-2-vec global-options)))))

  (defmethod interp :vector [[_ _ schema'] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [index value-1' value-2' value value' length-1 length-2]}
      (let [paths' (:all paths)]
        (if-not paths'
          (interp [:default] nil value-1 value-2 global-options)
          `(let [~length-1 (runtime.processor.common/count ~value-1)
                 ~length-2 (runtime.processor.common/count ~value-2)]
             (loop [~value (transient [])
                    ~index (long 0)]
               (if (== ~index ~length-2)
                 (persistent! ~value)
                 (let [~value-2' (runtime.processor.common/nth ~value-2 ~index)
                       ~value'   (if (<= ~length-1 ~index)
                                   ~(interp [:default] nil nil value-2' global-options)
                                   (let [~value-1' (runtime.processor.common/nth ~value-1 ~index)]
                                     ~(interp* schema' paths' value-1' value-2' global-options)))]
                   (recur (conj! ~value ~value')
                          (unchecked-inc ~index))))))))))

  (defmethod interp :map [[_ {:keys [sorted-by]} key-schema val-schema] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [value-1' value-2' key-2 keys-2 value value']}
      (let [paths'     (:all paths)]
        (if-not paths'
          (interp [:default] nil value-1 value-2 global-options)
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
                                 ~(interp* val-schema paths' value-1' value-2' global-options)
                                 ~(interp [:default] nil nil value-2' global-options))]
                 (recur (~(if sorted-by `assoc `assoc!) ~value ~key-2 ~value')
                        ~keys-2))))))))

  (defmethod interp :tuple [[_ _ schemas] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [value-1' value-2']}
      (if-not paths
        (interp [:default] nil value-1 value-2 global-options)
        (let [fields (common/tuple->fields schemas)]
          `(let [~@(mapcat (fn [[key value']]
                             [value' `(let [~value-1' ~(common/tuple-lookup value-1 key)
                                            ~value-2' ~(common/tuple-lookup value-2 key)]
                                        ~(if-let [paths' (paths key)]
                                           (interp (schemas key) paths' value-1' value-2' global-options)
                                           (interp [:default] nil value-1' value-2' global-options)))])
                           fields)]
             ~(common/fields->tuple fields))))))

  (defmethod interp :record [[_ {:keys [type]} schemas] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [value-1' value-2']}
      (if-not paths
        (interp [:default] nil value-1 value-2 global-options)
        (let [fields (common/record->fields schemas)]
          `(let [~@(mapcat (fn [[key value']]
                             [value' `(let [~value-1' ~(common/record-lookup value-1 key type)
                                            ~value-2' ~(common/record-lookup value-2 key type)]
                                        ~(if-let [paths' (paths key)]
                                           (interp (schemas key) paths' value-1' value-2' global-options)
                                           (interp [:default] nil value-1' value-2' global-options)))])
                           fields)]
             ~(common/fields->record fields type))))))

  (defmethod interp :optional [[_ _ schema'] paths value-1 value-2 global-options]
    `(if (and ~value-1 ~value-2)
       ~(interp schema' paths value-1 value-2 global-options)
       ~(interp [:default] nil value-1 value-2 global-options)))

  (defmethod interp :multi [[_ _ selector schemas'] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [case-1 case-2]}
      (if-not paths
        (interp [:default] nil value-1 value-2 global-options)
        `(let [~case-1 (~selector ~value-1)
               ~case-2 (~selector ~value-2)]
           (if-not (= ~case-1 ~case-2)
             ~(interp [:default] nil value-1 value-2 global-options)
             (case ~case-1
               ~@(mapcat (fn [[key' schema']]
                           [key' (if-let [paths' (paths key')]
                                   (interp schema' paths' value-1 value-2 global-options)
                                   (interp [:default] nil value-1 value-2 global-options))])
                         schemas')))))))

  (defmethod interp :wrapped [[_ _ pre post schema'] paths value-1 value-2 global-options]
    (macrowbar/macro-context {:gen-syms [value-1' value-2']}
      `(let [~value-1' (~pre ~value-1)
             ~value-2' (~pre ~value-2)]
         (~post ~(interp schema' paths value-1' value-2' global-options)))))

  (defmethod interp :custom [schema _ value-1 value-2 {:keys [prefer-first? time-factor custom-processors]}]
    `((runtime.processor.common/deref-processor-handle
        ~(get custom-processors [:interp schema]))
      ~value-1
      ~value-2
      ~prefer-first?
      ~time-factor))

  (defmethod interp :default [_ _ value-1 value-2 {:keys [prefer-first?]}]
    `(if ~prefer-first? ~value-1 ~value-2))

  (defmethod common/processor :interp [_ {:keys [schema interp-paths] :as global-options}]
    (macrowbar/with-gensyms [value-1 value-2 prefer-first? time-factor]
      {:args [value-1 value-2 prefer-first? time-factor]
       :body [(interp schema interp-paths value-1 value-2
                      (assoc global-options :prefer-first? prefer-first? :time-factor time-factor))]})))
