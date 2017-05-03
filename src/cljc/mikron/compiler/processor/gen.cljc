(ns mikron.compiler.processor.gen
  "Generator generating functions."
  (:require [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.processor.gen :as runtime.processor.gen]
            [mikron.runtime.math :as runtime.math]))

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

(defmethod gen :varint [_ opts]
  (gen [:long] opts))

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

(defmethod gen :string [_ opts]
  `(apply str ~(common/into! [] true gen-length (gen [:char] opts))))

(defmethod gen :binary [_ opts]
  `(runtime.processor.common/byte-seq->binary
     ~(common/into! [] true
                    (unchecked-add 2 (runtime.math/rand-long 30))
                    (gen [:ubyte] opts))))

(defmethod gen :any [_ _]
  nil)

(defmethod gen :enum [[_ _ enum-values] opts]
  `(runtime.processor.common/rand-nth ~enum-values))

(defmethod gen :optional [[_ _ schema'] opts]
  `(when ~(gen [:boolean] opts)
     ~(gen schema' opts)))

(defmethod gen :wrapped [[_ _ _ post schema'] opts]
  `(~post ~(gen schema' opts)))

(defmethod gen :multi [[_ _ _ schemas'] opts]
  `(case (runtime.math/rand-long ~(count schemas'))
     ~@(->> schemas'
            (map-indexed (fn [index [_ schema']]
                           [index (gen schema' opts)]))
            (apply concat))))

(defmethod gen :coll [[_ _ schema'] opts]
  (common/into! [] true gen-length (gen schema' opts)))

(defmethod gen :set [[_ {:keys [sorted-by]} schema'] opts]
  (common/into! (if sorted-by `(sorted-set-by ~sorted-by) #{})
                (nil? sorted-by)
                gen-length
                (gen schema' opts)))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema] opts]
  (common/into-kv! (if sorted-by `(sorted-map-by ~sorted-by) {})
                   (nil? sorted-by)
                   gen-length
                   (gen key-schema opts)
                   (gen val-schema opts)))

(defmethod gen :tuple [[_ _ schemas] opts]
  (let [fields (common/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (gen (schemas key') opts)])
                     fields)]
       ~(common/fields->tuple fields))))

(defmethod gen :record [[_ {:keys [type]} schemas] opts]
  (let [fields (common/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (gen (schemas key') opts)])
                     fields)]
       ~(common/fields->record fields type))))

(defmethod gen :aliased [[schema-name] opts]
  (gen (compiler.schema/aliased-schemas schema-name) opts))

(defmethod gen :custom [schema opts]
  `((deref ~(compiler.util/processor-name :gen schema))))

(defmethod common/processor :gen [_ {:keys [schema] :as opts}]
  `([]
    ~(gen schema opts)))
