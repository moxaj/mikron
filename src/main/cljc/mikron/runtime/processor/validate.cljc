(ns mikron.runtime.processor.validate
  (:require [mikron.runtime.processor.validate-macros :refer [valid-integer?]]))

(defn valid-byte?
  "Returns `true` if `value` is a valid byte."
  [value]
  (valid-integer? value 1 true))

(defn valid-ubyte?
  "Returns `true` if `value` is a valid ubyte."
  [value]
  (valid-integer? value 1 false))

(defn valid-short?
  "Returns `true` if `value` is a valid short."
  [value]
  (valid-integer? value 2 true))

(defn valid-ushort?
  "Returns `true` if `value` is a valid ushort."
  [value]
  (valid-integer? value 2 false))

(defn valid-int?
  "Returns `true` if `value` is a valid int."
  [value]
  (valid-integer? value 4 true))

(defn valid-uint?
  "Returns `true` if `value` is a valid uint."
  [value]
  (valid-integer? value 4 false))

(defn valid-long?
  "Returns `true` if `value` is a valid long."
  [value]
  (valid-integer? value 8 true))

(def binary-type #?(:clj  (Class/forName "[B")
                    :cljs js/ArrayBuffer))

(defn valid-binary?
  "Returns `true` if `value` is a binary value, `false` otherwise."
  #?(:clj {:inline (fn [value] `(instance? binary-type ~value))})
  [value]
  (instance? binary-type value))
