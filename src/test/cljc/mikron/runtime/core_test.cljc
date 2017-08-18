(ns mikron.runtime.core-test
  "Generative testing namespace."
  (:require [clojure.test :as test]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.core-test-macro :refer [def-mikron-tests]]
            [mikron.runtime.test-util :as test-util]))

(def buffer (mikron/allocate-buffer 100000))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema values] method))

(defmethod test-mikron :pack [_ schema values]
  (mikron/with-buffer buffer
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
