 (ns mikron.compiler.processor.unpack
  "Unpacker generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.buffer :as runtime.buffer]))

(macrowbar/emit :debug
  (defmulti unpack
    "Returns the generated unpacker code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn unpack*
    "Returns the generated unpacker code for a given schema."
    [schema {:keys [diffed?] :as global-options}]
    (if-not diffed?
      (unpack schema global-options)
      `(if ~(unpack [:boolean] global-options)
         :mikron/nil
         ~(unpack schema global-options))))

  (defmethod unpack :byte [_ {:keys [buffer]}]
    `(runtime.buffer/take-byte ~buffer))

  (defmethod unpack :ubyte [_ {:keys [buffer]}]
    `(runtime.buffer/take-ubyte ~buffer))

  (defmethod unpack :short [_ {:keys [buffer]}]
    `(runtime.buffer/take-short ~buffer))

  (defmethod unpack :ushort [_ {:keys [buffer]}]
    `(runtime.buffer/take-ushort ~buffer))

  (defmethod unpack :int [_ {:keys [buffer]}]
    `(runtime.buffer/take-int ~buffer))

  (defmethod unpack :uint [_ {:keys [buffer]}]
    `(runtime.buffer/take-uint ~buffer))

  (defmethod unpack :long [_ {:keys [buffer]}]
    `(runtime.buffer/take-long ~buffer))

  (defmethod unpack :varint [_ {:keys [buffer]}]
    `(runtime.buffer/take-varint ~buffer))

  (defmethod unpack :float [_ {:keys [buffer]}]
    `(runtime.buffer/take-float ~buffer))

  (defmethod unpack :double [_ {:keys [buffer]}]
    `(runtime.buffer/take-double ~buffer))

  (defmethod unpack :char [_ global-options]
    `(runtime.processor.common/int->char ~(unpack [:int] global-options)))

  (defmethod unpack :boolean [_ {:keys [buffer]}]
    `(runtime.buffer/take-boolean ~buffer))

  (defmethod unpack :nil [_ _]
    nil)

  (defmethod unpack :binary [_ {:keys [buffer]}]
    `(runtime.buffer/take-binary ~buffer))

  (defmethod unpack :string [_ global-options]
    `(runtime.processor.common/binary->string ~(unpack [:binary] global-options)))

  (defmethod unpack :keyword [_ global-options]
    `(runtime.processor.common/string->keyword ~(unpack [:string] global-options)))

  (defmethod unpack :symbol [_ global-options]
    `(runtime.processor.common/string->symbol ~(unpack [:string] global-options)))

  (defmethod unpack :any [_ global-options]
    nil)

  (defmethod unpack :enum [[_ _ enum-values] global-options]
    `(runtime.processor.common/nth ~(vec (sort enum-values))
                                   ~(unpack (compiler.schema/integer-schema (count enum-values)) global-options)))

  (defmethod unpack :optional [[_ _ schema'] global-options]
    `(when ~(unpack [:boolean] global-options)
       ~(unpack schema' global-options)))

  (defmethod unpack :wrapped [[_ _ _ post schema'] global-options]
    `(~post ~(unpack schema' global-options)))

  (defmethod unpack :multi [[_ _ _ schemas'] global-options]
    `(case ~(unpack (compiler.schema/integer-schema (count schemas')) global-options)
       ~@(->> schemas'
              (keys)
              (sort)
              (map-indexed (fn [index key']
                             [index (unpack (get schemas' key') global-options)]))
              (apply concat))))

  (defmethod unpack :coll [[_ _ schema'] global-options]
    (common/into! []
                  true
                  (unpack [:varint] global-options)
                  (unpack* schema' global-options)))

  (defmethod unpack :set [[_ {:keys [sorted-by]} schema'] global-options]
    (common/into! (if sorted-by
                    `(sorted-set-by ~sorted-by)
                    #{})
                  (nil? sorted-by)
                  (unpack [:varint] global-options)
                  (unpack* schema' global-options)))

  (defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] global-options]
    (common/into-kv! (if sorted-by
                       `(sorted-map-by ~sorted-by)
                       {})
                     (nil? sorted-by)
                     (unpack [:varint] global-options)
                     (unpack key-schema global-options)
                     (unpack* val-schema global-options)))

  (defmethod unpack :tuple [[_ _ schemas] global-options]
    (let [fields (common/tuple->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (unpack* (get schemas key') global-options)])
                       fields)]
         ~(common/fields->tuple fields))))

  (defmethod unpack :record [[_ {:keys [type]} schemas] global-options]
    (let [fields (common/record->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (unpack* (get schemas key') global-options)])
                       fields)]
         ~(common/fields->record fields type))))

  (defmethod unpack :custom [schema {:keys [diffed? buffer custom-processors]}]
    `((runtime.processor.common/deref-processor-handle
        ~(get custom-processors [(if diffed? :unpack-diffed :unpack) schema]))
      ~buffer))

  (defmethod common/processor :unpack [_ {:keys [schema] :as global-options}]
    (macrowbar/with-gensyms [buffer]
      {:args [buffer]
       :body [(unpack* schema (assoc global-options :diffed? false :buffer buffer))]}))

  (defmethod common/processor :unpack-diffed [_ {:keys [schema] :as global-options}]
    (macrowbar/with-gensyms [buffer]
      {:args [buffer]
       :body [(unpack* schema (assoc global-options :diffed? true :buffer buffer))]})))
