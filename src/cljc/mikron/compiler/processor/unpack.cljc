 (ns mikron.compiler.processor.unpack
  "Unpacker generating functions."
  (:require [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.buffer :as runtime.buffer]))

(defmulti unpack
  "Returns the generated unpacker code for a given schema."
  compiler.schema/schema-name
  :hierarchy #'compiler.schema/hierarchy)

(defn unpack*
  "Returns the generated unpacker code for a given schema."
  [schema {:keys [diffed?] :as opts}]
  (if-not diffed?
    (unpack schema opts)
    `(if ~(unpack [:boolean] opts)
       :mikron/dnil
       ~(unpack schema opts))))

(defmethod unpack :byte [_ {:keys [buffer]}]
  `(runtime.buffer/?byte ~buffer))

(defmethod unpack :ubyte [_ {:keys [buffer]}]
  `(runtime.buffer/?ubyte ~buffer))

(defmethod unpack :short [_ {:keys [buffer]}]
  `(runtime.buffer/?short ~buffer))

(defmethod unpack :ushort [_ {:keys [buffer]}]
  `(runtime.buffer/?ushort ~buffer))

(defmethod unpack :int [_ {:keys [buffer]}]
  `(runtime.buffer/?int ~buffer))

(defmethod unpack :uint [_ {:keys [buffer]}]
  `(runtime.buffer/?uint ~buffer))

(defmethod unpack :long [_ {:keys [buffer]}]
  `(runtime.buffer/?long ~buffer))

(defmethod unpack :varint [_ {:keys [buffer]}]
  `(runtime.buffer/?varint ~buffer))

(defmethod unpack :float [_ {:keys [buffer]}]
  `(runtime.buffer/?float ~buffer))

(defmethod unpack :double [_ {:keys [buffer]}]
  `(runtime.buffer/?double ~buffer))

(defmethod unpack :boolean [_ {:keys [buffer]}]
  `(runtime.buffer/?boolean ~buffer))

(defmethod unpack :binary [_ {:keys [buffer]}]
  `(runtime.buffer/?binary ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :enum [[_ _ enum-values] opts]
  `(runtime.processor.common/nth ~enum-values
                                 ~(unpack (compiler.schema/integer-schema (count enum-values)) opts)))

(defmethod unpack :optional [[_ _ schema'] opts]
  `(when ~(unpack [:boolean] opts)
     ~(unpack schema' opts)))

(defmethod unpack :wrapped [[_ _ _ post schema'] opts]
  `(~post ~(unpack schema' opts)))

(defmethod unpack :multi [[_ _ _ schemas'] opts]
  `(case ~(unpack (compiler.schema/integer-schema (count schemas')) opts)
     ~@(->> schemas'
            (keys)
            (sort)
            (map-indexed (fn [index key']
                           [index (unpack (schemas' key') opts)]))
            (apply concat))))

(defmethod unpack :coll [[_ _ schema'] opts]
  (common/into! [] true (unpack [:varint] opts) (unpack* schema' opts)))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] opts]
  (common/into! (if sorted-by `(sorted-set-by ~sorted-by) #{})
                (nil? sorted-by)
                (unpack [:varint] opts)
                (unpack* schema' opts)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] opts]
  (common/into-kv! (if sorted-by `(sorted-map-by ~sorted-by) {})
                   (nil? sorted-by)
                   (unpack [:varint] opts)
                   (unpack key-schema opts)
                   (unpack* val-schema opts)))

(defmethod unpack :tuple [[_ _ schemas] opts]
  (let [fields (common/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') opts)])
                     fields)]
       ~(common/fields->tuple fields))))

(defmethod unpack :record [[_ {:keys [type]} schemas] opts]
  (let [fields (common/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') opts)])
                     fields)]
       ~(common/fields->record fields type))))

(defmethod unpack :aliased [[schema-name] opts]
  (unpack (compiler.schema/aliased-schemas schema-name) opts))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `((deref ~(compiler.util/processor-name (if diffed? :unpack-diffed :unpack) schema)) ~buffer))

(defmethod common/processor :unpack [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc opts :diffed? false :buffer buffer)))))

(defmethod common/processor :unpack-diffed [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc opts :diffed? true :buffer buffer)))))
