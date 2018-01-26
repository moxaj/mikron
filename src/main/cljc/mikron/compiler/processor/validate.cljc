(ns mikron.compiler.processor.validate
  "Validator generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.util :as util]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.runtime.processor.validate :as runtime.processor.validate]))

(macrowbar/emit :debug
  (defmulti valid?
    "Returns the generated validator code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/hierarchy)

  (defmethod valid? :byte [_ value _]
    `(runtime.processor.validate/valid-byte? ~value))

  (defmethod valid? :ubyte [_ value _]
    `(runtime.processor.validate/valid-ubyte? ~value))

  (defmethod valid? :short [_ value _]
    `(runtime.processor.validate/valid-short? ~value))

  (defmethod valid? :ushort [_ value _]
    `(runtime.processor.validate/valid-ushort? ~value))

  (defmethod valid? :int [_ value _]
    `(runtime.processor.validate/valid-int? ~value))

  (defmethod valid? :uint [_ value _]
    `(runtime.processor.validate/valid-uint? ~value))

  (defmethod valid? :long [_ value _]
    `(runtime.processor.validate/valid-long? ~value))

  (defmethod valid? :varint [_ value global-options]
    (valid? [:long] value global-options))

  (defmethod valid? :number [_ value _]
    `(number? ~value))

  (defmethod valid? :char [_ value _]
    `(char? ~value))

  (defmethod valid? :boolean [_ value _]
    true)

  (defmethod valid? :nil [_ value _]
    `(nil? ~value))

  (defmethod valid? :binary [_ value _]
    `(runtime.processor.validate/valid-binary? ~value))

  (defmethod valid? :string [_ value _]
    `(string? ~value))

  (defmethod valid? :keyword [_ value _]
    `(keyword? ~value))

  (defmethod valid? :symbol [_ value _]
    `(symbol? ~value))

  (defmethod valid? :any [_ value _]
    true)

  (defmethod valid? :enum [[_ _ enum-values] value _]
    `(util/as-boolean (~(set enum-values) ~value)))

  (defmethod valid? :optional [[_ _ schema'] value global-options]
    `(or (nil? ~value)
         ~(valid? schema' value global-options)))

  (defmethod valid? :wrapped [[_ _ pre _ schema'] value global-options]
    (macrowbar/with-syms {:gen [value']}
      `(let [~value' (util/safe :mikron/invalid (~pre ~value))]
         (and (not (runtime.processor.common/keyword-identical? :mikron/invalid ~value'))
              ~(valid? schema' value' global-options)))))

  (defmethod valid? :multi [[_ _ selector schemas'] value global-options]
    `(case (util/safe :mikron/invalid (~selector ~value))
       ~@(mapcat (fn [[key' schema']]
                   [key' (valid? schema' value global-options)])
                 schemas')
       false))

  (defmethod valid? :list [[_ _ schema'] value global-options]
    (macrowbar/with-syms {:gen [value']}
      `(and (sequential? ~value)
            (every? (fn [~value']
                      ~(valid? schema' value' global-options))
                    ~value))))

  (defmethod valid? :vector [[_ _ schema'] value global-options]
    (macrowbar/with-syms {:gen [value']}
      `(and (vector? ~value)
            (runtime.processor.common/every? (fn [~value']
                                               ~(valid? schema' value' global-options))
                                             ~value))))

  (defmethod valid? :set [[_ _ schema'] value global-options]
    (macrowbar/with-syms {:gen [value']}
      `(and (set? ~value)
            (every? (fn [~value']
                      ~(valid? schema' value' global-options))
                    ~value))))

  (defmethod valid? :map [[_ _ key-schema val-schema] value global-options]
    (macrowbar/with-syms {:gen [entry' key' value']}
      `(and (map? ~value)
            (every? (fn [~entry']
                      (let [~key'   (key ~entry')
                            ~value' (val ~entry')]
                        (and ~(valid? key-schema key' global-options)
                             ~(valid? val-schema value' global-options))))
                    ~value))))

  (defmethod valid? :tuple [[_ _ schemas] value global-options]
    `(and (vector? ~value)
          (== (runtime.processor.common/count ~value) ~(count schemas))
          ~@(map (fn [[key' value']]
                   `(let [~value' ~(processor.common/tuple-lookup value key')]
                      ~(valid? (get schemas key') value' global-options)))
                 (processor.common/tuple->fields schemas))))

  (defmethod valid? :record [[_ {:keys [type]} schemas] value global-options]
    `(and ~(if type
             `(instance? ~(first type) ~value)
             `(map? ~value))
          ~@(map (fn [[key' value']]
                   `(let [~value' ~(processor.common/record-lookup value key' type)]
                      ~(valid? (get schemas key') value' global-options)))
                 (processor.common/record->fields schemas))))

  (defmethod valid? :custom [schema value {:keys [custom-processors]}]
    `((runtime.processor.common/deref-processor-handle
        ~(get custom-processors [:valid? schema]))
      ~value))

  (defmethod processor.common/processor :valid? [_ schema global-options]
    (macrowbar/with-syms {:gen [value]}
      {:args [value]
       :body [`(boolean ~(valid? schema value global-options))]})))
