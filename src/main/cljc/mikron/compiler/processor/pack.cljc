(ns mikron.compiler.processor.pack
  "Packer generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.buffer :as runtime.buffer]))

(macrowbar/emit :debug
  (defmulti pack
    "Returns the generated packer code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defn pack*
    "Returns the generated packer code for a given schema."
    [schema value {:keys [diffed?] :as global-options}]
    (macrowbar/macro-context {:gen-syms [value-dnil?]}
      (if-not diffed?
        (pack schema value global-options)
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
    (macrowbar/macro-context {:gen-syms [value']}
      `(let [~value' (runtime.processor.common/char->int ~value)]
         ~(pack [:int] value' global-options))))

  (defmethod pack :boolean [_ value {:keys [buffer]}]
    `(runtime.buffer/put-boolean ~buffer ~value))

  (defmethod pack :nil [_ _ _]
    nil)

  (defmethod pack :binary [_ value {:keys [buffer]}]
    `(runtime.buffer/put-binary ~buffer ~value))

  (defmethod pack :string [_ value global-options]
    (macrowbar/macro-context {:gen-syms [value']}
      `(let [~value' (runtime.processor.common/string->binary ~value)]
         ~(pack [:binary] value' global-options))))

  (defmethod pack :keyword [_ value global-options]
    (macrowbar/macro-context {:gen-syms [value']}
      `(let [~value' (runtime.processor.common/keyword->string ~value)]
         ~(pack [:string] value' global-options))))

  (defmethod pack :symbol [_ value global-options]
    (macrowbar/macro-context {:gen-syms [value']}
      `(let [~value' (runtime.processor.common/symbol->string ~value)]
         ~(pack [:string] value' global-options))))

  (defmethod pack :any [_ value global-options]
    nil)

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
    (macrowbar/macro-context {:gen-syms [value-some?]}
      `(let [~value-some? (some? ~value)]
         ~(pack [:boolean] value-some? global-options)
         (when ~value-some?
           ~(pack schema' value global-options)))))

  (defmethod pack :wrapped [[_ _ pre _ schema'] value global-options]
    (macrowbar/macro-context {:gen-syms [value']}
      `(let [~value' (~pre ~value)]
         ~(pack schema' value' global-options))))

  (defmethod pack :multi [[_ _ selector schemas'] value global-options]
    `(case (~selector ~value)
       ~@(->> schemas'
              (keys)
              (sort)
              (map-indexed (fn [index key']
                             [key' `(do ~(pack (compiler.schema/integer-schema (count schemas')) index global-options)
                                        ~(pack (get schemas' key') value global-options))]))
              (apply concat))))

  (defmethod pack :vector [[_ _ schema'] value global-options]
    (macrowbar/macro-context {:gen-syms [length value' index]}
      `(let [~length (runtime.processor.common/count ~value)]
         ~(pack [:varint] length global-options)
         (dotimes [~index ~length]
           (let [~value' (runtime.processor.common/nth ~value ~index)]
             ~(pack* schema' value' global-options))))))

  (defmethod pack :coll [[_ options schema'] value global-options]
    (macrowbar/macro-context {:gen-syms [length value']}
      `(let [~length (count ~value)]
         (do ~(pack [:varint] length global-options)
             (run! (fn [~value']
                     ~(pack* schema' value' global-options))
                   ~value)))))

  (defmethod pack :map [[_ _ key-schema val-schema] value global-options]
    (macrowbar/macro-context {:gen-syms [length entry' key' value']}
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
                     ~(pack* (get schemas key') value' global-options)))
                (common/tuple->fields schemas))))

  (defmethod pack :record [[_ {:keys [type]} schemas] value global-options]
    `(do ~@(map (fn [[key' value']]
                  `(let [~value' ~(common/record-lookup value key' type)]
                     ~(pack* (get schemas key') value' global-options)))
                (common/record->fields schemas))))

  (defmethod pack :custom [schema value {:keys [diffed? buffer custom-processors]}]
    `((runtime.processor.common/deref-processor-handle
        ~(get custom-processors [(if diffed? :pack-diffed :pack) schema]))
      ~value
      ~buffer))

  (defmethod common/processor :pack [_ schema global-options]
    (macrowbar/with-gensyms [value buffer]
      {:args [value buffer]
       :body [(pack* schema value (assoc global-options :buffer buffer :diffed? false))]}))

  (defmethod common/processor :pack-diffed [_ schema global-options]
    (macrowbar/with-gensyms [value buffer]
      {:args [value buffer]
       :body [(pack* schema value (assoc global-options :buffer buffer :diffed? true))]})))
