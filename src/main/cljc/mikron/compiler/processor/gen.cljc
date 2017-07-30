(ns mikron.compiler.processor.gen
  "Generator generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.processor.gen :as runtime.processor.gen]
            [mikron.runtime.math :as runtime.math]))

(macrowbar/compile-time
  (def ^:const gen-length 4)

  (defmulti gen
    "Returns the generated generator code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defmethod gen :byte [_ _]
    `(runtime.processor.gen/gen-byte))

  (defmethod gen :ubyte [_ _]
    `(runtime.processor.gen/gen-ubyte))

  (defmethod gen :short [_ _]
    `(runtime.processor.gen/gen-short))

  (defmethod gen :ushort [_ _]
    `(runtime.processor.gen/gen-ushort))

  (defmethod gen :int [_ _]
    `(runtime.processor.gen/gen-int))

  (defmethod gen :uint [_ _]
    `(runtime.processor.gen/gen-uint))

  (defmethod gen :long [_ _]
    `(runtime.processor.gen/gen-long))

  (defmethod gen :varint [_ global-options]
    (gen [:long] global-options))

  (defmethod gen :float [_ _]
    `(runtime.processor.common/double->float (runtime.math/rand)))

  (defmethod gen :double [_ _]
    `(runtime.math/rand))

  (defmethod gen :char [_ _]
    `(char (runtime.math/rand-long 10000)))

  (defmethod gen :boolean [_ _]
    `(< 0.5 (runtime.math/rand)))

  (defmethod gen :nil [_ _]
    nil)

  (defmethod gen :binary [_ global-options]
    `(runtime.processor.common/byte-seq->binary
       ~(common/into! []
                      true
                      (unchecked-add 2 (runtime.math/rand-long 30))
                      (gen [:ubyte] global-options))))

  (defmethod gen :string [_ global-options]
    `(apply str ~(common/into! [] true gen-length (gen [:char] global-options))))

  (defmethod gen :keyword [_ global-options]
    `(runtime.processor.common/string->keyword ~(gen [:string] global-options)))

  (defmethod gen :symbol [_ global-options]
    `(symbol ~(gen [:string] global-options)))

  (defmethod gen :any [_ _]
    nil)

  (defmethod gen :enum [[_ _ enum-values] _]
    `(runtime.processor.common/rand-nth ~(vec enum-values)))

  (defmethod gen :optional [[_ _ schema'] global-options]
    `(when ~(gen [:boolean] global-options)
       ~(gen schema' global-options)))

  (defmethod gen :wrapped [[_ _ _ post schema'] global-options]
    `(~post ~(gen schema' global-options)))

  (defmethod gen :multi [[_ _ _ schemas'] global-options]
    `(case (runtime.math/rand-long ~(count schemas'))
       ~@(->> schemas'
              (map-indexed (fn [index [_ schema']]
                             [index (gen schema' global-options)]))
              (apply concat))))

  (defmethod gen :coll [[_ _ schema'] global-options]
    (common/into! [] true gen-length (gen schema' global-options)))

  (defmethod gen :set [[_ {:keys [sorted-by]} schema'] global-options]
    (common/into! (if (some? sorted-by)
                    `(sorted-set-by ~sorted-by)
                    #{})
                  (nil? sorted-by)
                  gen-length
                  (gen schema' global-options)))

  (defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema] global-options]
    (common/into-kv! (if (some? sorted-by)
                       `(sorted-map-by ~sorted-by)
                       {})
                     (nil? sorted-by)
                     gen-length
                     (gen key-schema global-options)
                     (gen val-schema global-options)))

  (defmethod gen :tuple [[_ _ schemas] global-options]
    (let [fields (common/tuple->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (gen (get schemas key') global-options)])
                       fields)]
         ~(common/fields->tuple fields))))

  (defmethod gen :record [[_ {:keys [type]} schemas] global-options]
    (let [fields (common/record->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (gen (get schemas key') global-options)])
                       fields)]
         ~(common/fields->record fields type))))

  (defmethod gen :custom [schema {:keys [custom-processors]}]
    `((runtime.processor.common/deref-processor-handle
        ~(get custom-processors [:gen schema]))))

  (defmethod common/processor :gen [_ {:keys [schema] :as global-options}]
    {:args []
     :body [(gen schema global-options)]}))
