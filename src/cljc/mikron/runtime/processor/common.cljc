(ns mikron.runtime.processor.common
  "Common runtime functions."
  (:refer-clojure :exclude [count nth every? rand-nth #?(:cljs keyword-identical?)])
  (:require [clojure.tools.reader :as edn]
            [mikron.runtime.math :as math])
  #?(:clj (:import [java.nio.charset StandardCharsets]
                   [clojure.lang Indexed Counted]))
  #?(:cljs (:require-macros [mikron.runtime.processor.common])))

;; collections

(defn count
  "Returns the length of a vector `coll`."
  ^long [coll]
  #?(:clj  (.count ^Counted coll)
     :cljs (cljs.core/-count coll)))

(defn nth
  "Returns the value of a vector `coll` at the position `index`."
  [coll ^long index]
  #?(:clj  (.nth ^Indexed coll (unchecked-int index))
     :cljs (cljs.core/-nth coll (unchecked-int index))))

(defn rand-nth
  "Returns a random value from a vector `coll`."
  [coll]
  (nth coll (math/rand-long (count coll))))

(defn every?
  "Returns `true` if `pred` returns `true` for each element of a
  vector `coll`, `false` otherwise."
  [pred coll]
  (let [length (count coll)]
    (loop [index (long 0)]
      (or (== index length)
          (and (pred (nth coll index))
               (recur (unchecked-inc index)))))))

;; converters

(defn any->string
  "Converts an edn value `value` to a string."
  [value]
  (pr-str value))

(defn string->any
  "Converts a string `value` to an edn value."
  [^String value]
  (edn/read-string value))

(defn keyword->string
  "Converts a keyword `value` to a string."
  ^String [value]
  (.substring (str value) 1))

(defn string->keyword
  "Converts a string `value` to a keyword."
  [^String value]
  (keyword value))

(defn char->int
  "Converts a character `value` to an int."
  ^long [value]
  #?(:clj  (unchecked-int value)
     :cljs (.charCodeAt value 0)))

(defn int->char
  "Converts an int `value` to a char."
  [^long value]
  #?(:clj  (char value)
     :cljs (.fromCharCode js/String value)))

(defn string->binary
  "Converts a string `value` to a binary value."
  ^bytes [^String value]
  #?(:clj  (.getBytes value StandardCharsets/UTF_8)
     :cljs (let [chars (-> value (js/encodeURIComponent) (js/unescape) (.split ""))
                 array (array)]
             (dotimes [i (.-length chars)]
               (.push array (-> chars (aget i) (.charCodeAt 0))))
             (.-buffer (js/Uint8Array. array)))))

(defn binary->string
  "Converts a binary value `value` to a string."
  ^String [^bytes value]
  #?(:clj  (String. value StandardCharsets/UTF_8)
     :cljs (-> (js/String.fromCharCode.apply nil (js/Uint8Array. value))
               (js/escape)
               (js/decodeURIComponent))))

(defn double->float
  "Converts a double `value` to a float."
  [^double value]
  #?(:clj  (unchecked-float value)
     :cljs (.fround js/Math value)))

(defn byte-seq->binary
  "Converts a byte sequence to a binary value."
  [value]
  #?(:clj  (byte-array value)
     :cljs (.-buffer (js/Int8Array. (apply array value)))))

;; diff

(defn keyword-identical? [value-1 value-2]
  #?(:clj  (identical? value-1 value-2)
     :cljs (clojure.core/keyword-identical? value-1 value-2)))
