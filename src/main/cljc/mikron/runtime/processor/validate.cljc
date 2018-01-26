(ns mikron.runtime.processor.validate
  (:require [mikron.runtime.processor.validate-macros :refer [valid-integer?]]))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-byte?
  "Returns `true` if `value` is a valid byte."
  [value]
  (valid-integer? value 1 true))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-ubyte?
  "Returns `true` if `value` is a valid ubyte."
  [value]
  (valid-integer? value 1 false))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-short?
  "Returns `true` if `value` is a valid short."
  [value]
  (valid-integer? value 2 true))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-ushort?
  "Returns `true` if `value` is a valid ushort."
  [value]
  (valid-integer? value 2 false))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-int?
  "Returns `true` if `value` is a valid int."
  [value]
  (valid-integer? value 4 true))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-uint?
  "Returns `true` if `value` is a valid uint."
  [value]
  (valid-integer? value 4 false))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-long?
  "Returns `true` if `value` is a valid long."
  [value]
  (valid-integer? value 8 true))

(def binary-type #?(:clj  (Class/forName "[B")
                    :cljs js/ArrayBuffer))

(defn ^{:tag #?(:clj nil :cljs boolean)} valid-binary?
  "Returns `true` if `value` is a binary value, `false` otherwise."
  #?(:clj {:inline (fn [value]
                     `(instance? binary-type ~value))})
  [value]
  (instance? binary-type value))
