 (ns mikron.compiler.processor.unpack
  "Unpacker generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.buffer :as buffer]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(macrowbar/emit :debug
  (defmulti unpack
    "Returns the generated unpacker code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn unpack*
    "Returns the generated unpacker code for a given schema."
    [schema]
    (if (not= :unpack-diffed (:processor-type processor.common/*processor-options*))
      (unpack schema)
      `(if ~(unpack [:boolean])
         :mikron/nil
         ~(unpack schema))))

  (defmethod unpack :byte [_]
    `(buffer/take-byte ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :ubyte [_]
    `(buffer/take-ubyte ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :short [_]
    `(buffer/take-short ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :ushort [_]
    `(buffer/take-ushort ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :int [_]
    `(buffer/take-int ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :uint [_]
    `(buffer/take-uint ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :long [_]
    `(buffer/take-long ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :varint [_]
    `(buffer/take-varint ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :float [_]
    `(buffer/take-float ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :double [_]
    `(buffer/take-double ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :char [_]
    `(runtime.processor.common/int->char ~(unpack [:int])))

  (defmethod unpack :boolean [_]
    `(buffer/take-boolean ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :nil [_]
    nil)

  (defmethod unpack :binary [_]
    `(buffer/take-binary ~(:buffer processor.common/*processor-options*)))

  (defmethod unpack :string [_]
    `(runtime.processor.common/binary->string ~(unpack [:binary])))

  (defmethod unpack :keyword [_]
    `(runtime.processor.common/string->keyword ~(unpack [:string])))

  (defmethod unpack :symbol [_]
    `(runtime.processor.common/string->symbol ~(unpack [:string])))

  (defmethod unpack :any [_]
    nil)

  (defmethod unpack :enum [[_ _ enum-values]]
    `(runtime.processor.common/nth ~(vec (sort enum-values))
                                   ~(unpack (compiler.schema/integer-schema (count enum-values)))))

  (defmethod unpack :optional [[_ _ schema']]
    `(when ~(unpack [:boolean])
       ~(unpack schema')))

  (defmethod unpack :wrapped [[_ _ _ post schema']]
    `(~post ~(unpack schema')))

  (defmethod unpack :multi [[_ _ _ schemas']]
    `(case ~(unpack (compiler.schema/integer-schema (count schemas')))
       ~@(->> schemas'
              (keys)
              (sort)
              (mapcat (fn [index key']
                        [index (unpack (get schemas' key'))])
                      (range)))))

  (defmethod unpack :coll [[_ _ schema']]
    (processor.common/into! []
                            true
                            (unpack [:varint])
                            (unpack* schema')))

  (defmethod unpack :set [[_ {:keys [sorted-by]} schema']]
    (processor.common/into! (if sorted-by
                              `(sorted-set-by ~sorted-by)
                              #{})
                            (nil? sorted-by)
                            (unpack [:varint])
                            (unpack* schema')))

  (defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
    (processor.common/into-kv! (if sorted-by
                                 `(sorted-map-by ~sorted-by)
                                 {})
                               (nil? sorted-by)
                               (unpack [:varint])
                               (unpack key-schema)
                               (unpack* val-schema)))

  (defmethod unpack :tuple [[_ _ schemas]]
    (let [fields (processor.common/tuple->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (unpack* (get schemas key'))])
                       fields)]
         ~(processor.common/fields->tuple fields))))

  (defmethod unpack :record [[_ {:keys [type]} schemas]]
    (let [fields (processor.common/record->fields schemas)]
      `(let [~@(mapcat (fn [[key' value']]
                         [value' (unpack* (get schemas key'))])
                       fields)]
         ~(processor.common/fields->record fields type))))

  (defmethod unpack :custom [schema]
    `(~(processor.common/custom-processor-name schema)
      ~(:buffer processor.common/*processor-options*)))

  (defmethod processor.common/processor* :unpack [_ schema]
    (macrowbar/with-syms {:gen [buffer]}
      (binding [processor.common/*processor-options*
                (assoc processor.common/*processor-options* :buffer buffer)]
        {:args [buffer]
         :body (processor.common/force-lazy
                 (unpack* schema))})))

  (defmethod processor.common/processor* :unpack-diffed [_ schema]
    (macrowbar/with-syms {:gen [buffer]}
      (binding [processor.common/*processor-options*
                (assoc processor.common/*processor-options* :buffer buffer)]
        {:args [buffer]
         :body (processor.common/force-lazy
                 (unpack* schema))}))))
