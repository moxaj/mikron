(ns mikron.compiler.processor.pack
  "Packer generating functions."
  (:require [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.buffer :as runtime.buffer]))

(defmulti pack
  "Returns the generated packer code for a given schema."
  compiler.schema/schema-name
  :hierarchy #'compiler.schema/hierarchy)

(defn pack*
  "Returns the generated packer code for a given schema."
  [schema value {:keys [diffed?] :as opts}]
  (if-not diffed?
    (pack schema value opts)
    (compiler.util/macro-context {:gen-syms [value-dnil?]}
      `(let [~value-dnil? (identical? :mikron/dnil ~value)]
         ~(pack [:boolean] value-dnil? opts)
         (when-not ~value-dnil?
           ~(pack schema value opts))))))

(defmethod pack :byte [_ value {:keys [buffer]}]
  `(runtime.buffer/put-byte ~buffer ~value))

(defmethod pack :ubyte [_ value {:keys [buffer]}]
  `(runtime.buffer/put-ubyte ~buffer ~value))

(defmethod pack :short [_ value {:keys [buffer]}]
  `(runtime.buffer/put-short ~buffer ~value))

(defmethod pack :ushort [_ value {:keys [buffer]}]
  `(runtime.buffer/put-ushort ~buffer ~value))

(defmethod pack :int [_ value {:keys [buffer]}]
  `(runtime.buffer/put-int ~buffer ~value))

(defmethod pack :uint [_ value {:keys [buffer]}]
  `(runtime.buffer/put-uint ~buffer ~value))

(defmethod pack :long [_ value {:keys [buffer]}]
  `(runtime.buffer/put-long ~buffer ~value))

(defmethod pack :varint [_ value {:keys [buffer]}]
  `(runtime.buffer/put-varint ~buffer ~value))

(defmethod pack :float [_ value {:keys [buffer]}]
  `(runtime.buffer/put-float ~buffer ~value))

(defmethod pack :double [_ value {:keys [buffer]}]
  `(runtime.buffer/put-double ~buffer ~value))

(defmethod pack :char [_ value opts]
  (pack [:int] `(runtime.processor.common/char->int ~value) opts))

(defmethod pack :boolean [_ value {:keys [buffer]}]
  `(runtime.buffer/put-boolean ~buffer ~value))

(defmethod pack :nil [_ _ _]
  nil)

(defmethod pack :ignored [_ _ _]
  nil)

(defmethod pack :binary [_ value {:keys [buffer]}]
  `(runtime.buffer/put-binary ~buffer ~value))

(defmethod pack :string [_ value opts]
  (pack [:binary] `(runtime.processor.common/string->binary ~value) opts))

(defmethod pack :keyword [_ value opts]
  (pack [:string] `(runtime.processor.common/keyword->string ~value) opts))

(defmethod pack :symbol [_ value opts]
  (pack [:string] `(runtime.processor.common/symbol->string ~value) opts))

(defmethod pack :any [_ value opts]
  (pack [:string] `(runtime.processor.common/any->string ~value) opts))

(defmethod pack :enum [[_ _ enum-values] value opts]
  (pack (compiler.schema/integer-schema (count enum-values))
        `(case ~value
           ~@(->> enum-values
                  (sort)
                  (map-indexed (fn [index enum-value]
                                 [enum-value index]))
                  (apply concat)))
        opts))

(defmethod pack :optional [[_ _ schema'] value opts]
  `(do ~(pack [:boolean] value opts)
       (when ~value
         ~(pack schema' value opts))))

(defmethod pack :wrapped [[_ _ pre _ schema'] value opts]
  (compiler.util/macro-context {:gen-syms [value']}
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' opts))))

(defmethod pack :multi [[_ _ selector schemas'] value opts]
  `(case (~selector ~value)
     ~@(->> schemas'
            (keys)
            (sort)
            (map-indexed (fn [index key']
                           [key' `(do ~(pack (compiler.schema/integer-schema (count schemas')) index opts)
                                      ~(pack (schemas' key') value opts))]))
            (apply concat))))

(defmethod pack :vector [[_ _ schema'] value opts]
  (compiler.util/macro-context {:gen-syms [length value' index]}
    `(let [~length (runtime.processor.common/count ~value)]
       ~(pack [:varint] length opts)
       (dotimes [~index ~length]
         (let [~value' (runtime.processor.common/nth ~value ~index)]
           ~(pack* schema' value' opts))))))

(defmethod pack :coll [[_ options schema'] value opts]
  (compiler.util/macro-context {:gen-syms [length value']}
    `(let [~length (count ~value)]
       (do ~(pack [:varint] length opts)
           (run! (fn [~value']
                   ~(pack* schema' value' opts))
                 ~value)))))

(defmethod pack :map [[_ _ key-schema val-schema] value opts]
  (compiler.util/macro-context {:gen-syms [length entry' key' value']}
    `(let [~length (runtime.processor.common/count ~value)]
       (do ~(pack [:varint] length opts)
           (run! (fn [~entry']
                   (let [~key'   (key ~entry')
                         ~value' (val ~entry')]
                     ~(pack key-schema key' opts)
                     ~(pack* val-schema value' opts)))
                 ~value)))))

(defmethod pack :tuple [[_ _ schemas] value opts]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(common/tuple-lookup value key')]
                   ~(pack* (schemas key') value' opts)))
              (common/tuple->fields schemas))))

(defmethod pack :record [[_ {:keys [type]} schemas] value opts]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(common/record-lookup value key' type)]
                   ~(pack* (schemas key') value' opts)))
              (common/record->fields schemas))))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `((deref ~(common/processor-name (if diffed? :pack-diffed :pack) schema)) ~value ~buffer))

(defmethod common/processor :pack [_ {:keys [schema] :as opts}]
  (compiler.util/macro-context {:gen-syms [value buffer]}
    `([~value ~buffer]
      ~(pack* schema value (assoc opts :buffer buffer :diffed? false)))))

(defmethod common/processor :pack-diffed [_ {:keys [schema] :as opts}]
  (compiler.util/macro-context {:gen-syms [value buffer]}
    `([~value ~buffer]
      ~(pack* schema value (assoc opts :buffer buffer :diffed? true)))))
