(ns mikron.compiler.processor.pack
  "Packer generating functions."
  (:require [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.buffer :as runtime.buffer]))

(compiler.util/compile-time
  (defmulti pack
    "Returns the generated packer code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn pack*
    "Returns the generated packer code for a given schema."
    [schema value {:keys [diffed?] :as global-options}]
    (if-not diffed?
      (pack schema value global-options)
      (compiler.util/macro-context {:gen-syms [value-dnil?]}
        `(let [~value-dnil? (identical? :mikron/nil ~value)]
           ~(pack [:boolean] value-dnil? global-options)
           (when-not ~value-dnil?
             ~(pack schema value global-options))))))

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

  (defmethod pack :char [_ value global-options]
    (pack [:int] `(runtime.processor.common/char->int ~value) global-options))

  (defmethod pack :boolean [_ value {:keys [buffer]}]
    `(runtime.buffer/put-boolean ~buffer ~value))

  (defmethod pack :nil [_ _ _]
    nil)

  (defmethod pack :ignored [_ _ _]
    nil)

  (defmethod pack :binary [_ value {:keys [buffer]}]
    `(runtime.buffer/put-binary ~buffer ~value))

  (defmethod pack :string [_ value global-options]
    (pack [:binary] `(runtime.processor.common/string->binary ~value) global-options))

  (defmethod pack :keyword [_ value global-options]
    (pack [:string] `(runtime.processor.common/keyword->string ~value) global-options))

  (defmethod pack :symbol [_ value global-options]
    (pack [:string] `(runtime.processor.common/symbol->string ~value) global-options))

  (defmethod pack :any [_ value global-options]
    (pack [:string] `(runtime.processor.common/any->string ~value) global-options))

  (defmethod pack :enum [[_ _ enum-values] value global-options]
    (pack (compiler.schema/integer-schema (count enum-values))
          `(case ~value
             ~@(->> enum-values
                    (sort)
                    (map-indexed (fn [index enum-value]
                                   [enum-value index]))
                    (apply concat)))
          global-options))

  (defmethod pack :optional [[_ _ schema'] value global-options]
    `(do ~(pack [:boolean] value global-options)
         (when ~value
           ~(pack schema' value global-options))))

  (defmethod pack :wrapped [[_ _ pre _ schema'] value global-options]
    (compiler.util/macro-context {:gen-syms [value']}
      `(let [~value' (~pre ~value)]
         ~(pack schema' value' global-options))))

  (defmethod pack :multi [[_ _ selector schemas'] value global-options]
    `(case (~selector ~value)
       ~@(->> schemas'
              (keys)
              (sort)
              (map-indexed (fn [index key']
                             [key' `(do ~(pack (compiler.schema/integer-schema (count schemas')) index global-options)
                                        ~(pack (schemas' key') value global-options))]))
              (apply concat))))

  (defmethod pack :vector [[_ _ schema'] value global-options]
    (compiler.util/macro-context {:gen-syms [length value' index]}
      `(let [~length (runtime.processor.common/count ~value)]
         ~(pack [:varint] length global-options)
         (dotimes [~index ~length]
           (let [~value' (runtime.processor.common/nth ~value ~index)]
             ~(pack* schema' value' global-options))))))

  (defmethod pack :coll [[_ options schema'] value global-options]
    (compiler.util/macro-context {:gen-syms [length value']}
      `(let [~length (count ~value)]
         (do ~(pack [:varint] length global-options)
             (run! (fn [~value']
                     ~(pack* schema' value' global-options))
                   ~value)))))

  (defmethod pack :map [[_ _ key-schema val-schema] value global-options]
    (compiler.util/macro-context {:gen-syms [length entry' key' value']}
      `(let [~length (runtime.processor.common/count ~value)]
         (do ~(pack [:varint] length global-options)
             (run! (fn [~entry']
                     (let [~key'   (key ~entry')
                           ~value' (val ~entry')]
                       ~(pack key-schema key' global-options)
                       ~(pack* val-schema value' global-options)))
                   ~value)))))

  (defmethod pack :tuple [[_ _ schemas] value global-options]
    `(do ~@(map (fn [[key' value']]
                  `(let [~value' ~(common/tuple-lookup value key')]
                     ~(pack* (schemas key') value' global-options)))
                (common/tuple->fields schemas))))

  (defmethod pack :record [[_ {:keys [type]} schemas] value global-options]
    `(do ~@(map (fn [[key' value']]
                  `(let [~value' ~(common/record-lookup value key' type)]
                     ~(pack* (schemas key') value' global-options)))
                (common/record->fields schemas))))

  (defmethod pack :custom [schema value {:keys [diffed? buffer custom-processors]}]
    `((deref ~(custom-processors [(if diffed? :pack-diffed :pack) schema])) ~value ~buffer))

  (defmethod common/processor :pack [_ {:keys [schema] :as global-options}]
    (compiler.util/macro-context {:gen-syms [value buffer]}
      `([~value ~buffer]
        ~(pack* schema value (assoc global-options :buffer buffer :diffed? false)))))

  (defmethod common/processor :pack-diffed [_ {:keys [schema] :as global-options}]
    (compiler.util/macro-context {:gen-syms [value buffer]}
      `([~value ~buffer]
        ~(pack* schema value (assoc global-options :buffer buffer :diffed? true))))))
