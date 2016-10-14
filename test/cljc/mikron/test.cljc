(ns mikron.test
  "Unit tests for each processor."
  (:require [clojure.test :refer [deftest is testing are]]
            [mikron.core :as mikron]
            #?(:clj [mikron.compile-util :as compile-util]))
  #?(:clj  (:import [java.util Arrays])
     :cljs (:require-macros [mikron.test :refer [def-mikron-tests]])))

(defn equal? [x y]
  (if (not= (type x) #?(:clj  (Class/forName "[B")
                        :cljs js/ArrayBuffer))
    (= x y)
    #?(:clj  (Arrays/equals ^bytes x ^bytes y)
       :cljs (= (seq (.from js/Array (js/Int8Array. x)))
                (seq (.from js/Array (js/Int8Array. y)))))))

(defmulti test-mikron (fn [method schema-name dataset] method))

(defmethod test-mikron :pack [_ schema-name dataset]
  (doseq [value dataset]
    (let [{value' :value :keys [schema diffed?]} (mikron/unpack (mikron/pack schema-name value))]
      (are [x y] (equal? x y)
        schema  schema-name
        diffed? false
        value   value'))))

(defmethod test-mikron :diff [_ schema-name dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (is (= value-2 (mikron/undiff schema-name value-1 (mikron/diff schema-name value-1 value-2))))))

(defmethod test-mikron :validate [_ schema-name dataset]
  (doseq [value dataset]
    (is (mikron/valid? schema-name value))))

(defmethod test-mikron :interp [_ schema-name dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (mikron/interp schema-name value-1 value-2 0 1 0.5)))

#?(:clj
   (defmacro def-mikron-tests [test-cases]
     (compile-util/with-gensyms [dataset]
       `(do ~@(map (fn [[test-name schema]]
                     (let [schema-name (keyword (str (gensym)) (str (gensym)))]
                       `(do (mikron/defprocessors {:schemas {~schema-name ~schema}})
                            (let [~dataset (repeatedly 100 #(mikron/gen ~schema-name))]
                              ~@(map (fn [method]
                                       `(deftest ~(symbol (str (name method) "-" test-name))
                                          (test-mikron ~method ~schema-name ~dataset)))
                                     [:pack :diff :validate :interp])))))
                   test-cases)))))

(defn pre-inc ^long [^long x]
  (inc x))

(defn post-dec ^long [^long x]
  (dec x))

(def-mikron-tests
  {byte         :byte
   short        :short
   int          :int
   long         :long
   #?@(:clj [float :float]) ;; js, meh
   double       :double
   boolean      :boolean
   char         :char
   ubyte        :ubyte
   ushort       :ushort
   uint         :uint
   varint       :varint
   string       :string
   keyword      :keyword
   symbol       :symbol
   nil'         :nil
   date         :date
   binary       :binary
   any          :any
   list         [:list :byte]
   vector       [:vector :int]
   set          [:set :short]
   <-sorted-set [:set {:sorted-by <} :short]
   >-sorted-set [:set {:sorted-by >} :int]
   map          [:map :byte :string]
   <-sorted-map [:map {:sorted-by <} :byte :string]
   >-sorted-map [:map {:sorted-by >} :byte :string]
   optional     [:optional :byte]
   enum         [:enum [:cat :dog :measurement :error]]
   tuple        [:tuple [:int :string :double]]
   record       [:record {:a :int :b :string :c :byte}]
   multi        [:multi number? {true :int false :string}]
   wrapped      [:wrapped pre-inc post-dec :int]})
