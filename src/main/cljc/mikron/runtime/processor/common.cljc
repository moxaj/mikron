(ns mikron.runtime.processor.common
  "Common runtime functions."
  (:refer-clojure :exclude [count nth every? rand-nth #?(:cljs keyword-identical?)])
  (:require [mikron.math :as math]
            [mikron.util :as util])
  #?(:clj (:import [java.nio.charset StandardCharsets]
                   [clojure.lang Indexed Counted]))
  #?(:cljs (:require-macros [mikron.runtime.processor.common])))

;; collections

(defn count
  "Returns the length of a vector `coll`."
  #?(:clj {:inline (fn [coll]
                     (when-not (util/can-have-meta? coll)
                       (throw (ex-info "Invalid coll" {:value coll})))
                     `(.count ~(vary-meta coll assoc :tag `Counted)))})
  ^long [coll]
  #?(:clj  (.count ^Counted coll)
     :cljs (cljs.core/-count coll)))

(defn nth
  "Returns the value of a vector `coll` at the position `index`."
  #?(:clj {:inline (fn [coll index]
                     (when-not (util/can-have-meta? coll)
                       (throw (ex-info "Invalid coll" {:value coll})))
                     `(.nth ~(vary-meta coll assoc :tag `Indexed) (unchecked-int ~index)))})
  [coll ^long index]
  #?(:clj  (.nth ^Indexed coll (unchecked-int index))
     :cljs (cljs.core/-nth coll (unchecked-int index))))

(defn rand-nth
  "Returns a random value from a vector `coll`."
  [coll]
  (nth coll (math/rand-long (count coll))))

(defn ^{:tag #?(:clj nil :cljs boolean)} every?
  "Returns `true` if `pred` returns `true` for each element of a vector `coll`, `false` otherwise."
  [pred coll]
  (let [length (count coll)]
    (loop [index (long 0)]
      (or (== index length)
          (and (util/as-boolean (pred (nth coll index)))
               (recur (unchecked-inc index)))))))

;; converters

(defn keyword->string
  "Converts a keyword `value` to a string."
  #?(:clj {:inline (fn [value]
                     `(.substring (str ~value) 1))})
  ^String [value]
  (.substring (str value) 1))

(defn string->keyword
  "Converts a string `value` to a keyword."
  #?(:clj {:inline (fn [value]
                     `(keyword ~value))})
  [^String value]
  (keyword value))

(defn symbol->string
  "Converts a symbol `value` to a string."
  #?(:clj {:inline (fn [value]
                     `(str ~value))})
  ^String [value]
  (str value))

(defn string->symbol
  "Converts a string `value` to a symbol."
  #?(:clj {:inline (fn [value]
                     `(symbol ~value))})
  [^String value]
  (symbol value))

(defn char->int
  "Converts a character `value` to an int."
  #?(:clj {:inline (fn [value]
                     `(unchecked-int ~value))})
  ^long [value]
  #?(:clj  (unchecked-int value)
     :cljs (.charCodeAt value 0)))

(defn int->char
  "Converts an int `value` to a char."
  #?(:clj {:inline (fn [value]
                     `(char ~value))})
  [^long value]
  #?(:clj  (char value)
     :cljs (.fromCharCode js/String value)))

#?(:cljs (def ^:const ^boolean supports-text-encoder-api? (exists? js/TextEncoder)))

#?(:cljs (def text-encoder (when supports-text-encoder-api?
                             (js/TextEncoder.))))

#?(:cljs (def text-decoder (when supports-text-encoder-api?
                             (js/TextDecoder.))))

(defn string->binary
  "Converts a string `value` to a binary value."
  #?(:clj {:inline (fn [value]
                     (when-not (util/can-have-meta? value)
                       (throw (ex-info "Invalid string" {:string value})))
                     `(.getBytes ~(vary-meta value assoc :tag `String) StandardCharsets/UTF_8))})
  ^bytes [^String value]
  #?(:clj  (.getBytes value StandardCharsets/UTF_8)
     :cljs (if supports-text-encoder-api?
             (.-buffer (.encode text-encoder value))
             (let [chars (-> value (js/encodeURIComponent) (js/unescape) (.split ""))
                   array (array)]
               (dotimes [i (.-length chars)]
                 (.push array (-> chars (aget i) (.charCodeAt 0))))
               (.-buffer (js/Uint8Array. array))))))

(defn binary->string
  "Converts a binary value `value` to a string."
  #?(:clj {:inline (fn [value]
                     (when-not (util/can-have-meta? value)
                       (throw (ex-info "Invalid binary" {:binary value})))
                     `(String. ~(vary-meta value assoc :tag 'bytes) StandardCharsets/UTF_8))})
  ^String [^bytes value]
  #?(:clj  (String. value StandardCharsets/UTF_8)
     :cljs (if supports-text-encoder-api?
             (.decode text-decoder value)
             (-> (js/String.fromCharCode.apply nil (js/Uint8Array. value))
               (js/escape)
               (js/decodeURIComponent)))))

(defn double->float
  "Converts a double `value` to a float."
  #?(:clj {:inline (fn [value]
                     `(unchecked-float ~value))})
  [^double value]
  #?(:clj  (unchecked-float value)
     :cljs value))

(defn byte-seq->binary
  "Converts a byte sequence to a binary value."
  #?(:clj {:inline (fn [value]
                     `(byte-array ~value))})
  [value]
  #?(:clj  (byte-array value)
     :cljs (.-buffer (js/Int8Array. (apply array value)))))

;; diff

(defn ^{:tag #?(:clj nil :cljs boolean)} keyword-identical?
  "Returns `true` if the two keywords are identical, `false` otherwise."
  #?(:clj {:inline (fn [value-1 value-2]
                     `(identical? ~value-1 ~value-2))})
  [value-1 value-2]
  #?(:clj  (identical? value-1 value-2)
     :cljs (clojure.core/keyword-identical? value-1 value-2)))
