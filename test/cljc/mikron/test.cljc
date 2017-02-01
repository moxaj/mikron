(ns mikron.test
  "Actual unit test cases."
  (:require [mikron.test-macros :as test-macros]))

(test-macros/def-mikron-tests
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
