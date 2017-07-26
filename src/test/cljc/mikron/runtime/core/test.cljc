(ns mikron.runtime.core.test
  "Actual unit test cases."
  (:require [clojure.test :as test]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [com.gfredericks.test.chuck.clojure-test :as chuck #?@(:cljs [:include-macros true])]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.core.test-macros :refer [def-mikron-tests]]
            [mikron.runtime.generators :as generators]
            [mikron.test-util :as test-util]))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema values] method))

(defmethod test-mikron :pack [_ schema values]
  (doseq [value values]
    (test/is (test-util/equal? value
                               (->> value
                                    (mikron/pack schema)
                                    (mikron/unpack schema))))))

(defmethod test-mikron :diff [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    (test/is (test-util/equal? value-2
                               (->> value-2
                                    (mikron/diff schema value-1)
                                    (mikron/undiff schema value-1))))))

(defmethod test-mikron :valid? [_ schema values]
  (doseq [value values]
    (test/is (mikron/valid? schema value))))

(defmethod test-mikron :interp [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    (mikron/interp schema value-1 value-2 0 1 0.5)))

(def-mikron-tests test-mikron [:pack :diff :valid? :interp]
  {t-byte         :byte
   t-short        :short
   t-int          :int
   t-long         :long
   #?@(:clj [t-float :float])
   t-double       :double
   t-boolean      :boolean
   t-char         :char
   t-ubyte        :ubyte
   t-ushort       :ushort
   t-uint         :uint
   t-varint       :varint
   t-string       :string
   t-keyword      :keyword
   t-symbol       :symbol
   t-nil          :nil
   t-ignored      :ignored
   t-binary       :binary
   t-any          :any
   t-list         [:list :byte]
   t-vector       [:vector :int]
   t-set          [:set :short]
   t-<-sorted-set [:set {:sorted-by '<} :short]
   t->-sorted-set [:set {:sorted-by '>} :int]
   t-map          [:map :byte :string]
   t-<-sorted-map [:map {:sorted-by '<} :byte :string]
   t->-sorted-map [:map {:sorted-by '>} :byte :string]
   t-optional     [:optional :byte]
   t-enum         [:enum #{:cat :dog :measurement :error}]
   t-tuple        [:tuple [:int :string :double]]
   t-record       [:record {:a :int :b :string :c :byte}]
   t-multi        [:multi 'number? {true :int false :string}]
   t-wrapped      [:wrapped 'unchecked-inc-int 'unchecked-dec-int :int]})

(test/deftest schema-test
  (chuck/checking "It just works" 100
    [schema generators/schema-generator
     value  (generators/value-generator schema)]
    (let [s (eval `(mikron/schema ~schema))]
      (test/is (= value
                  (->> value (mikron/pack s)
                             (mikron/unpack s)))))))
