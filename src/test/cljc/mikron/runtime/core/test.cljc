(ns mikron.runtime.core.test
  "Actual unit test cases."
  (:require [clojure.test :as test]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [com.gfredericks.test.chuck.clojure-test :as chuck #?@(:cljs [:include-macros true])]
            [macrowbar.core :as macrowbar]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.core.test-macros :refer [def-mikron-tests]]
            [mikron.runtime.generators :as generators]
            [mikron.test-util :as test-util]))

;; Tests may be run in parallel
(def buffer-1 (mikron/allocate-buffer 100000))
(def buffer-2 (mikron/allocate-buffer 100000))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema values] method))

(defmethod test-mikron :pack [_ schema values]
  (mikron/with-buffer buffer-1
    (doseq [value values]
      (test/is (test-util/equal? value (->> value
                                            (mikron/pack schema)
                                            (mikron/unpack schema)))))))

(defmethod test-mikron :diff [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    (test/is (test-util/equal? value-2 (->> value-2
                                            (mikron/diff schema value-1)
                                            (mikron/undiff schema value-1))))))

(defmethod test-mikron :valid? [_ schema values]
  (doseq [value values]
    (test/is (mikron/valid? schema value))))

(defmethod test-mikron :interp [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    ;; We don't actually test anything here
    (mikron/interp schema value-1 value-2 0 1 0.5)))

;; Simple generative testing

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

;; Property based testing

(macrowbar/compile-time-strict
  (test/deftest pack-roundtrip-test
    (chuck/checking "Pack / unpack roundtrip returns the same value" 50
      [[schema value]
       (tc.gen/bind
         generators/schema-generator
         (fn [schema]
           (tc.gen/tuple (tc.gen/return (macrowbar/eval `(mikron/schema
                                                           ~schema
                                                           :processor-types #{:pack :unpack})))
                         (generators/value-generator schema))))]
      (test/is (test-util/equal? value (mikron/with-buffer buffer-2
                                         (->> value (mikron/pack schema)
                                                    (mikron/unpack schema))))))))
