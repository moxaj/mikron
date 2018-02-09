(ns mikron.compiler.processor.gen
  "Generator generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.processor.gen :as runtime.processor.gen]
            [mikron.math :as math]))

(macrowbar/emit :debug
  (def ^:const gen-length 4)

  (defmulti gen
    "Returns the generated generator code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defmethod gen :byte [_]
    `(runtime.processor.gen/gen-byte))

  (defmethod gen :ubyte [_]
    `(runtime.processor.gen/gen-ubyte))

  (defmethod gen :short [_]
    `(runtime.processor.gen/gen-short))

  (defmethod gen :ushort [_]
    `(runtime.processor.gen/gen-ushort))

  (defmethod gen :int [_]
    `(runtime.processor.gen/gen-int))

  (defmethod gen :uint [_]
    `(runtime.processor.gen/gen-uint))

  (defmethod gen :long [_]
    `(runtime.processor.gen/gen-long))

  (defmethod gen :varint [_]
    (gen [:long]))

  (defmethod gen :float [_]
    `(runtime.processor.common/double->float (math/rand)))

  (defmethod gen :double [_]
    `(math/rand))

  (defmethod gen :char [_]
    `(char (math/rand-long 50000)))

  (defmethod gen :boolean [_]
    `(< 0.5 (math/rand)))

  (defmethod gen :nil [_]
    nil)

  (defmethod gen :binary [_]
    `(runtime.processor.common/byte-seq->binary
       ~(processor.common/into! []
                                true
                                (unchecked-add 2 (math/rand-long 30))
                                (gen [:byte]))))

  (defmethod gen :string [_]
    `(apply str ~(processor.common/into! [] true gen-length (gen [:char]))))

  (defmethod gen :keyword [_]
    `(runtime.processor.common/string->keyword ~(gen [:string])))

  (defmethod gen :symbol [_]
    `(symbol ~(gen [:string])))

  (defmethod gen :any [_]
    nil)

  (defmethod gen :enum [[_ _ enum-values]]
    `(runtime.processor.common/rand-nth ~(vec enum-values)))

  (defmethod gen :optional [[_ _ schema']]
    `(when ~(gen [:boolean])
       ~(gen schema')))

  (defmethod gen :wrapped [[_ _ _ post schema']]
    `(~post ~(gen schema')))

  (defmethod gen :multi [[_ _ _ schemas']]
    `(case (math/rand-long ~(count schemas'))
       ~@(->> schemas'
              (map-indexed (fn [index [_ schema']]
                             [index (gen schema')]))
              (apply concat))))

  (defmethod gen :coll [[_ _ schema']]
    (processor.common/into! [] true gen-length (gen schema')))

  (defmethod gen :set [[_ {:keys [sorted-by]} schema']]
    (processor.common/into! (if (some? sorted-by)
                              `(sorted-set-by ~sorted-by)
                              #{})
                            (nil? sorted-by)
                            gen-length
                            (gen schema')))

  (defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema]]
    (processor.common/into-kv! (if (some? sorted-by)
                                 `(sorted-map-by ~sorted-by)
                                 {})
                               (nil? sorted-by)
                               gen-length
                               (gen key-schema)
                               (gen val-schema)))

  (defmethod gen :tuple [[_ _ schemas]]
    (let [fields (processor.common/tuple->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (gen (get schemas key'))])
                       fields)]
         ~(processor.common/fields->tuple fields))))

  (defmethod gen :record [[_ {:keys [type]} schemas]]
    (let [fields (processor.common/record->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (gen (get schemas key'))])
                       fields)]
         ~(processor.common/fields->record fields type))))

  (defmethod gen :custom [schema]
    `(~(processor.common/custom-processor-name schema)))

  (defmethod processor.common/processor* :gen [_ schema]
    {:args []
     :body (processor.common/force-lazy
             (gen schema))}))
