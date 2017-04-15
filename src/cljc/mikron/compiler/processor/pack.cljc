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
    (compiler.util/with-gensyms [value-dnil?]
      `(let [~value-dnil? (identical? :mikron/dnil ~value)]
         ~(pack [:boolean] value-dnil? opts)
         (when-not ~value-dnil?
           ~(pack schema value opts))))))

(defmethod pack :byte [_ value {:keys [buffer]}]
  `(runtime.buffer/!byte ~buffer ~value))

(defmethod pack :ubyte [_ value {:keys [buffer]}]
  `(runtime.buffer/!ubyte ~buffer ~value))

(defmethod pack :short [_ value {:keys [buffer]}]
  `(runtime.buffer/!short ~buffer ~value))

(defmethod pack :ushort [_ value {:keys [buffer]}]
  `(runtime.buffer/!ushort ~buffer ~value))

(defmethod pack :int [_ value {:keys [buffer]}]
  `(runtime.buffer/!int ~buffer ~value))

(defmethod pack :uint [_ value {:keys [buffer]}]
  `(runtime.buffer/!uint ~buffer ~value))

(defmethod pack :long [_ value {:keys [buffer]}]
  `(runtime.buffer/!long ~buffer ~value))

(defmethod pack :varint [_ value {:keys [buffer]}]
  `(runtime.buffer/!varint ~buffer ~value))

(defmethod pack :float [_ value {:keys [buffer]}]
  `(runtime.buffer/!float ~buffer ~value))

(defmethod pack :double [_ value {:keys [buffer]}]
  `(runtime.buffer/!double ~buffer ~value))

(defmethod pack :boolean [_ value {:keys [buffer]}]
  `(runtime.buffer/!boolean ~buffer ~value))

(defmethod pack :binary [_ value {:keys [buffer]}]
  `(runtime.buffer/!binary ~buffer ~value))

(defmethod pack :nil [_ _ _]
  nil)

(defmethod pack :enum [[_ _ enum-values] value opts]
  (pack (compiler.schema/integer-schema (count enum-values))
        `(case ~value
           ~@(->> enum-values
                  (map-indexed (fn [index enum-value]
                                 [enum-value index]))
                  (apply concat)))
        opts))

(defmethod pack :optional [[_ _ schema'] value opts]
  `(do ~(pack [:boolean] value opts)
       (when ~value
         ~(pack schema' value opts))))

(defmethod pack :wrapped [[_ _ pre _ schema'] value opts]
  (compiler.util/with-gensyms [value']
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
  (compiler.util/with-gensyms [length value' index]
    `(let [~length (runtime.processor.common/count ~value)]
       ~(pack [:varint] length opts)
       (dotimes [~index ~length]
         (let [~value' (runtime.processor.common/nth ~value ~index)]
           ~(pack* schema' value' opts))))))

(defmethod pack :coll [[_ options schema'] value opts]
  (compiler.util/with-gensyms [length value']
    `(let [~length (count ~value)]
       (do ~(pack [:varint] length opts)
           (run! (fn [~value']
                   ~(pack* schema' value' opts))
                 ~value)))))

(defmethod pack :map [[_ _ key-schema val-schema] value opts]
  (compiler.util/with-gensyms [length entry' key' value']
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

(defmethod pack :aliased [[schema-name] value opts]
  (pack (compiler.schema/aliased-schemas schema-name) value opts))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `((deref ~(compiler.util/processor-name (if diffed? :pack-diffed :pack) schema)) ~value ~buffer))

(defmethod common/processor :pack [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc opts :buffer buffer :diffed? false)))))

(defmethod common/processor :pack-diffed [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc opts :buffer buffer :diffed? true)))))