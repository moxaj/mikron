(ns seria.core-test
  (:require [seria.config :refer [make-test-config]]
            [seria.core :refer [pack unpack diff undiff]]
            [seria.generate :refer [sample]]
            [midje.sweet :refer [facts]]))

(defn roundtrip [data schema config]
  (unpack (pack data schema config) config))

(defn schema-test [facts-str config-args]
  (facts facts-str
    (let [config (make-test-config :schemas config-args)]
      (doseq [data (sample 5 :x (:schemas config))]
        (roundtrip data :x config) => [:x data]))))

(defn schema-tests [arg]
  (every? true? (vec (for [[facts-str schemas] arg]
                       (schema-test facts-str schemas)))))

(def test-cases
  {"Byte test"        {:x :byte}
   "Short test"       {:x :short}
   "Integer test"     {:x :int}
   "Float test"       {:x :float}
   "Double test"      {:x :double}
   "Char test"        {:x :char}
   "Boolean test"     {:x :boolean}

   "String test"      {:x :string}
   "Long string test" {:x :long-string}
   "Keyword test"     {:x :keyword}
   "Symbol test"      {:x :symbol}
   "Any test"         {:x :any}

   "List test"        {:x [:list :byte]}
   "Vector test"      {:x [:vector :int]}
   "Set test"         {:x [:set :short]}
   "Sorted-set test"  {:x [:sorted-set :boolean]}
   "Map test"         {:x [:map :byte :string]}
   "Sorted-map test"  {:x [:map :short :float]}

   "Top-schema test"  {:x [:list :y] :y [:tuple [:int :int]]}
   "Optional test"    {:x [:optional :byte]}
   "Enum test"        {:x [:enum [:cat :dog :measurement :error]]}
   "Tuple test"       {:x [:tuple [:int :float [:tuple [:int :int]]]]}
   "Record test"      {:x [:record {:a :int :b :string :c [:tuple [:int :int]]}]}
   "Multi test"       {:x [:multi number? {true :int false [:tuple [:int :int]]}]}

   "Custom test 1"    {:x [:list :y]
                       :y [:record {:a :int
                                    :b :string
                                    :c [:tuple [:float :float :float]]
                                    :d [:list :int]}]}})

(schema-tests test-cases)