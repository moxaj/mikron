(ns mikron.test
  "Actual unit test cases."
  (:require [clojure.test :as test]
            [mikron.core :as mikron]
            [mikron.test-macros :as test-macros])
  #?(:clj (:import [java.util Arrays])))

(defn equal?
  "Extended equality checker for byte[] and ArrayBuffer."
  [x y]
  (if (not= (type x) #?(:clj  (Class/forName "[B")
                        :cljs js/ArrayBuffer))
    (= x y)
    #?(:clj  (Arrays/equals ^bytes x ^bytes y)
       :cljs (= (seq (.from js/Array (js/Int8Array. x)))
                (seq (.from js/Array (js/Int8Array. y)))))))

(defmethod test-macros/test-mikron :pack [_ schema dataset]
  (doseq [value dataset]
    (test/is (equal? value (->> value (mikron/pack schema) (mikron/unpack schema))))))

(defmethod test-macros/test-mikron :diff [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (test/is (= value-2 (->> value-2 (mikron/diff schema value-1) (mikron/undiff schema value-1))))))

(defmethod test-macros/test-mikron :valid? [_ schema dataset]
  (doseq [value dataset]
    (test/is (mikron/valid? schema value))))

(defmethod test-macros/test-mikron :interp [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (mikron/interp schema value-1 value-2 0 1 0.5)))

(test-macros/def-mikron-tests
  {::byte         :byte
   ::short        :short
   ::int          :int
   ::long         :long
   #?@(:clj [::float :float]) ;; js, meh
   ::double       :double
   ::boolean      :boolean
   ::char         :char
   ::ubyte        :ubyte
   ::ushort       :ushort
   ::uint         :uint
   ::varint       :varint
   ::string       :string
   ::keyword      :keyword
   ::symbol       :symbol
   ::nil          :nil
   ::binary       :binary
   ::any          :any
   ::list         [:list :byte]
   ::vector       [:vector :int]
   ::set          [:set :short]
   ::<-sorted-set [:set {:sorted-by <} :short]
   ::>-sorted-set [:set {:sorted-by >} :int]
   ::map          [:map :byte :string]
   ::<-sorted-map [:map {:sorted-by <} :byte :string]
   ::>-sorted-map [:map {:sorted-by >} :byte :string]
   ::optional     [:optional :byte]
   ::enum         [:enum [:cat :dog :measurement :error]]
   ::tuple        [:tuple [:int :string :double]]
   ::record       [:record {:a :int :b :string :c :byte}]
   ::multi        [:multi number? {true :int false :string}]
   ::wrapped      [:wrapped unchecked-inc-int unchecked-dec-int :int]})

(test/deftest foo
  (is true))
