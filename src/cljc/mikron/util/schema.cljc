(ns mikron.util.schema
  "Runtime schema related functions."
  #?(:cljs (:refer-clojure :exclude [keyword-identical?]))
  (:require [clojure.tools.reader.edn :as edn]
            [mikron.util :as util]
            [mikron.util.math :as util.math]
            [mikron.util.coll :as util.coll])
  #?(:cljs (:require-macros [mikron.util.schema :refer [gen-integer valid-integer?]]))
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

;; predicates

(defn binary?
  "Returns `true` if `x` is a binary value, `false` otherwise."
  [x]
  #?(:clj  (bytes? x)
     :cljs (instance? js/ArrayBuffer x)))

;; helper

(defn min-bound
  "Returns the lower bound for an integer value."
  [^long bytes signed?]
  (if signed?
    (- (util.math/pow 2 (dec (* bytes 8))))
    0))

(defn max-bound
  "Returns the upper bound for an integer value."
  [^long bytes signed?]
  (let [m (util.math/pow 2 (* bytes 8))]
    (if signed? (/ m 2) m)))

;; generators

(defmacro gen-integer
  "Generates a random integer."
  [bytes signed?]
  `(let [r# (util.math/rand)]
     (-> (* r# ~(max-bound bytes signed?))
         (+ (* (- 1 r#) ~(min-bound bytes signed?)))
         (util.math/floor)
         (unchecked-long))))

(defn gen-binary
  "Generates a random binary value."
  []
  (let [byte-seq (util.coll/into! [] true
                                  (unchecked-add 2 (util.math/rand-long 30))
                                  (gen-integer 1 true))]
    #?(:clj  (byte-array byte-seq)
       :cljs (.-buffer (js/Int8Array. (apply array byte-seq))))))

;; validators

(defmacro valid-integer?
  "Returns `true` if `value` is a valid integer, `false` otherwise."
  [value bytes signed?]
  `(and (integer? ~value)
        (>= (unchecked-long ~value) ~(min-bound bytes signed?))
        (<  (unchecked-long ~value) ~(max-bound bytes signed?))))

;; differ

(defn keyword-identical? [value-1 value-2]
  #?(:clj  (identical? value-1 value-2)
     :cljs (clojure.core/keyword-identical? value-1 value-2)))
