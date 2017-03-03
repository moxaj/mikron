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

(test-macros/def-mikron-tests [:pack :diff :valid? :interp]
  {t-byte         :byte
   t-short        :short
   t-int          :int
   t-long         :long
   #?@(:clj [t-float :float]) ;; js, meh
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
   t-<-sorted-set [:set {:sorted-by <} :short]
   t->-sorted-set [:set {:sorted-by >} :int]
   t-map          [:map :byte :string]
   t-<-sorted-map [:map {:sorted-by <} :byte :string]
   t->-sorted-map [:map {:sorted-by >} :byte :string]
   t-optional     [:optional :byte]
   t-enum         [:enum [:cat :dog :measurement :error]]
   t-tuple        [:tuple [:int :string :double]]
   t-record       [:record {:a :int :b :string :c :byte}]
   t-multi        [:multi number? {true :int false :string}]
   t-wrapped      [:wrapped unchecked-inc-int unchecked-dec-int :int]})

(mikron/defschema ::circular-a [:list ::circular-b])

(mikron/defschema ::circular-b [:list [:tuple [:int ::circular-a]]])
