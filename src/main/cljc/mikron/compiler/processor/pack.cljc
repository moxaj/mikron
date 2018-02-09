(ns mikron.compiler.processor.pack
  "Packer generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.buffer :as buffer]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(macrowbar/emit :debug
  (defmulti pack
    "Returns the generated packer code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn pack*
    "Returns the generated packer code for a given schema."
    [schema value]
    (macrowbar/with-syms {:gen [value-dnil?]}
      (if (not= :pack-diffed (:processor-type processor.common/*processor-options*))
        (pack schema value)
        `(let [~value-dnil? (runtime.processor.common/keyword-identical? :mikron/nil ~value)]
           ~(pack [:boolean] value-dnil?)
           (when-not ~value-dnil?
             ~(pack schema value))))))

  (defmethod pack :byte [_ value]
    `(buffer/put-byte ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :ubyte [_ value]
    `(buffer/put-ubyte ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :short [_ value]
    `(buffer/put-short ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :ushort [_ value]
    `(buffer/put-ushort ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :int [_ value]
    `(buffer/put-int ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :uint [_ value]
    `(buffer/put-uint ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :long [_ value]
    `(buffer/put-long ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :varint [_ value]
    `(buffer/put-varint ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :float [_ value]
    `(buffer/put-float ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :double [_ value]
    `(buffer/put-double ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :char [_ value]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (runtime.processor.common/char->int ~value)]
         ~(pack [:int] value'))))

  (defmethod pack :boolean [_ value]
    `(buffer/put-boolean ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :nil [_ _]
    nil)

  (defmethod pack :binary [_ value]
    `(buffer/put-binary ~(:buffer processor.common/*processor-options*) ~value))

  (defmethod pack :string [_ value]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (runtime.processor.common/string->binary ~value)]
         ~(pack [:binary] value'))))

  (defmethod pack :keyword [_ value]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (runtime.processor.common/keyword->string ~value)]
         ~(pack [:string] value'))))

  (defmethod pack :symbol [_ value]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (runtime.processor.common/symbol->string ~value)]
         ~(pack [:string] value'))))

  (defmethod pack :any [_ _]
    nil)

  (defmethod pack :constant [_ _]
    nil)

  (defmethod pack :enum [[_ _ enum-values] value]
    (pack (compiler.schema/integer-schema (count enum-values))
          `(case ~value
             ~@(->> enum-values
                    (sort)
                    (mapcat (fn [index enum-value]
                              [enum-value index])
                            (range))))))

  (defmethod pack :optional [[_ _ schema'] value]
    (macrowbar/with-syms {:gen [value-some?]}
      `(let [~value-some? (some? ~value)]
         ~(pack [:boolean] value-some?)
         (when ~value-some?
           ~(pack schema' value)))))

  (defmethod pack :wrapped [[_ _ pre _ schema'] value]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (~pre ~value)]
         ~(pack schema' value'))))

  (defmethod pack :multi [[_ _ selector schemas'] value]
    `(case (~selector ~value)
       ~@(->> schemas'
              (keys)
              (sort)
              (mapcat (fn [index key']
                        [key' `(do ~(pack (compiler.schema/integer-schema (count schemas')) index)
                                   ~(pack (get schemas' key') value))])
                      (range)))))

  (defmethod pack :vector [[_ _ schema'] value]
    (macrowbar/with-syms {:gen [length value' index]}
      `(let [~length (runtime.processor.common/count ~value)]
         ~(pack [:varint] length)
         (dotimes [~index ~length]
           (let [~value' (runtime.processor.common/nth ~value ~index)]
             ~(pack* schema' value'))))))

  (defmethod pack :coll [[_ options schema'] value]
    (macrowbar/with-syms {:gen [length value']}
      `(let [~length (count ~value)]
         (do ~(pack [:varint] length)
             (run! (fn [~value']
                     ~(pack* schema' value'))
                   ~value)))))

  (defmethod pack :map [[_ _ key-schema val-schema] value]
    (macrowbar/with-syms {:gen [length entry' key' value']}
      `(let [~length (runtime.processor.common/count ~value)]
         (do ~(pack [:varint] length)
             (run! (fn [~entry']
                     (let [~key'   (key ~entry')
                           ~value' (val ~entry')]
                       ~(pack key-schema key')
                       ~(pack* val-schema value')))
                   ~value)))))

  (defmethod pack :tuple [[_ _ schemas] value]
    `(do ~@(map (fn [[key' value']]
                  `(let [~value' ~(processor.common/tuple-lookup value key')]
                     ~(pack* (get schemas key') value')))
                (processor.common/tuple->fields schemas))))

  (defmethod pack :record [[_ {:keys [type]} schemas] value]
    `(do ~@(map (fn [[key' value']]
                  `(let [~value' ~(processor.common/record-lookup value key' type)]
                     ~(pack* (get schemas key') value')))
                (processor.common/record->fields schemas))))

  (defmethod pack :custom [schema value]
    `(~(processor.common/custom-processor-name schema)
      ~(:buffer processor.common/*processor-options*)
      ~value))

  (defmethod processor.common/processor* :pack [_ schema]
    (macrowbar/with-syms {:gen [buffer value]}
      (binding [processor.common/*processor-options*
                (assoc processor.common/*processor-options* :buffer buffer)]
        {:args [buffer value]
         :body (processor.common/force-lazy
                 (pack* schema value))})))

  (defmethod processor.common/processor* :pack-diffed [_ schema]
    (macrowbar/with-syms {:gen [buffer value]}
      (binding [processor.common/*processor-options*
                (assoc processor.common/*processor-options* :buffer buffer)]
        {:args [buffer value]
         :body (processor.common/force-lazy
                 (pack* schema value))}))))
