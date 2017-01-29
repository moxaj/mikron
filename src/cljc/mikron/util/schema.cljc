(ns mikron.util.schema
  "Runtime schema related functions."
  #?(:cljs (:refer-clojure :exclude [keyword-identical?]))
  (:require [clojure.tools.reader :as edn])
  #?(:clj (:import [java.nio.charset StandardCharsets])))

;; converters

(defn any->string
  "Converts an edn value `x` to a string."
  [x]
  (pr-str x))

(defn string->any
  "Converts a string `s` to an edn value."
  [^String s]
  (edn/read-string s))

(defn keyword->string
  "Converts a keyword `x` to a string."
  ^String [x]
  (.substring (str x) 1))

(defn string->keyword
  "Converts a string `s` to a keyword."
  [^String s]
  (keyword s))

(defn char->int
  "Converts a character `c` to an int."
  ^long [c]
  #?(:clj  (unchecked-int c)
     :cljs (.charCodeAt c 0)))

(defn int->char
  "Converts an int `n` to a char."
  [^long n]
  #?(:clj  (char n)
     :cljs (.fromCharCode js/String n)))

(defn string->binary
  "Converts a string `s` to a binary value."
  ^bytes [^String s]
  #?(:clj  (.getBytes s StandardCharsets/UTF_8)
     :cljs (let [chars (-> s (js/encodeURIComponent) (js/unescape) (.split ""))
                 array (array)]
             (dotimes [i (.-length chars)]
               (.push array (-> chars (aget i) (.charCodeAt 0))))
             (.-buffer (js/Uint8Array. array)))))

(defn binary->string
  "Converts a binary value `x` to a string."
  ^String [^bytes x]
  #?(:clj  (String. x StandardCharsets/UTF_8)
     :cljs (-> (js/String.fromCharCode.apply nil (js/Uint8Array. x))
               (js/escape)
               (js/decodeURIComponent))))

(defn double->float
  "Converts a double `x` to a float."
  [^double x]
  #?(:clj  (unchecked-float x)
     :cljs (.fround js/Math x)))

(defn byte-seq->binary
  "Converts a byte sequence to a binary value."
  [byte-seq]
  #?(:clj  (byte-array byte-seq)
     :cljs (.-buffer (js/Int8Array. (apply array byte-seq)))))

;; valid?

(defn binary?
  "Returns `true` if `x` is a binary value, `false` otherwise."
  [x]
  #?(:clj  (bytes? x)
     :cljs (instance? js/ArrayBuffer x)))

;; diff

(defn keyword-identical? [value-1 value-2]
  #?(:clj  (identical? value-1 value-2)
     :cljs (clojure.core/keyword-identical? value-1 value-2)))
