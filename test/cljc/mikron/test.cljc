(ns mikron.test
  "Unit tests for each processor."
  (:require [clojure.test :refer [deftest is testing are]]
            [mikron.core :as mikron]
            #?(:clj [mikron.compile-util :as compile-util]))
  #?(:clj  (:import [java.util Arrays])
     :cljs (:require-macros [mikron.test :refer [def-mikron-tests]])))

(defn equal?
  "Extended equality checker for byte[] and ArrayBuffer."
  [x y]
  (if (not= (type x) #?(:clj  (Class/forName "[B")
                        :cljs js/ArrayBuffer))
    (= x y)
    #?(:clj  (Arrays/equals ^bytes x ^bytes y)
       :cljs (= (seq (.from js/Array (js/Int8Array. x)))
                (seq (.from js/Array (js/Int8Array. y)))))))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema dataset] method))

(defmethod test-mikron :pack [_ schema dataset]
  (doseq [value dataset]
    (is (equal? value (->> value (mikron/pack schema) (mikron/unpack schema) :value)))))

(defmethod test-mikron :diff [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (is (= value-2 (->> value-2 (mikron/diff schema value-1) (mikron/undiff schema value-1))))))

(defmethod test-mikron :valid? [_ schema dataset]
  (doseq [value dataset]
    (is (mikron/valid? schema value))))

(defmethod test-mikron :interp [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (mikron/interp schema value-1 value-2 0 1 0.5)))

#?(:clj
   (defmacro def-mikron-tests
     "Generates test methods for all the test cases."
     [test-cases]
     (compile-util/with-gensyms [dataset]
       `(do ~@(for [[schema-name schema] test-cases]
                `(let [~schema-name (mikron/schema ~schema)
                       ~dataset     (repeatedly 100 #(mikron/gen ~schema-name))]
                   ~@(for [method (keys (methods test-mikron))]
                       `(deftest ~(symbol (str (name method) "-" (name schema-name)))
                          (test-mikron ~method ~schema-name ~dataset)))))))))

(defn pre-inc
  "Type hinted inc."
  ^long [^long x]
  (inc x))

(defn post-dec
  "Type hinted dec."
  ^long [^long x]
  (dec x))

(def-mikron-tests
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
   t-wrapped      [:wrapped pre-inc post-dec :int]})
