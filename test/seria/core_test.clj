(ns seria.core-test
  (:require [seria.config :refer [make-test-config]]
            [seria.core :refer [pack unpack diff undiff]]
            [seria.generate :refer [sample]]
            [midje.sweet :refer [fact facts]]))

(defn roundtrip [data schema config]
  (second (unpack (pack data schema config) config)))

(defmacro schema-test [facts-str config-args]
  `(facts ~facts-str
     (let [config# (make-test-config :schemas ~config-args)]
       (doseq [data# (sample 5 :x (:schemas config#))]
         (roundtrip data# :x config#) => data#))))

(schema-test "Byte test" {:x :byte})
(schema-test "Short test" {:x :short})
(schema-test "Integer test" {:x :int})
(schema-test "Float test" {:x :float})
(schema-test "Double test" {:x :double})
(schema-test "Char test" {:x :char})
(schema-test "Boolean test" {:x :boolean})

(schema-test "String test" {:x :string})
(schema-test "Long string test" {:x :long-string})
(schema-test "Keyword test" {:x :keyword})
(schema-test "Symbol test" {:x :symbol})
(schema-test "Any test" {:x :any})

(schema-test "List test" {:x [:list :byte]})
(schema-test "Vector test" {:x [:vector :int]})
(schema-test "Set test" {:x [:set :short]})
(schema-test "Sorted-set test" {:x [:sorted-set :boolean]})

(schema-test "Map test" {:x [:map :byte :string]})
(schema-test "Sorted-map test" {:x [:map :short :float]})

(schema-test "Tuple test" {:x [:tuple [:int :float [:tuple [:int :int]]]]})
(schema-test "Record test" {:x [:record {:a :int :b :string :c [:tuple [:int :int]]}]})
(schema-test "Enum test" {:x [:enum [:cat :dog :measurement :error]]})
(schema-test "Optional test" {:x [:optional :byte]})
(schema-test "Multi test" {:x [:multi number? {true :int false [:tuple [:int :int]]}]})
(schema-test "Top-schema test" {:x [:list :y]
                                :y [:tuple [:int :int]]})