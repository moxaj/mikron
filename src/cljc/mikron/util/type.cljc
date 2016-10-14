(ns mikron.util.type
  "Runtime type related functions."
  (:require [clojure.tools.reader.edn :as edn]
            [mikron.util :as util]
            [mikron.util.math :as math])
  #?(:clj (:import [java.util Date]
                   [java.nio.charset StandardCharsets])))

;; converters

(defn any->string [x]
  (pr-str x))

(defn string->any [^String s]
  (edn/read-string s))

(defn keyword->string ^String [x]
  (.substring (str x) 1))

(defn string->keyword [^String s]
  (keyword s))

(defn char->int ^long [c]
  #?(:clj  (int c)
     :cljs (.charCodeAt c 0)))

(defn int->char [^long n]
  #?(:clj  (char n)
     :cljs (.fromCharCode js/String n)))

(defn date->long ^long [^Date x]
  (.getTime x))

(defn long->date ^Date [^long n]
  #?(:clj  (Date. n)
     :cljs (js/Date. n)))

(defn string->binary ^bytes [^String s]
  #?(:clj  (.getBytes s StandardCharsets/UTF_8)
     :cljs (let [chars (-> s (js/encodeURIComponent) (js/unescape) (.split ""))
                 array (array)]
             (dotimes [i (.-length chars)]
               (.push array (-> chars (aget i) (.charCodeAt 0))))
             (.-buffer (js/Uint8Array. array)))))

(defn binary->string ^String [^bytes x]
  #?(:clj  (String. x StandardCharsets/UTF_8)
     :cljs (-> (js/String.fromCharCode.apply nil (js/Uint8Array. x))
               (js/escape)
               (js/decodeURIComponent))))

(defn double->float [^double x]
  #?(:clj  (float x)
     :cljs (.fround js/Math x)))

;; predicates

(defn binary? [x]
  #?(:clj  (bytes? x)
     :cljs (instance? js/ArrayBuffer x)))

(defn date? [x]
  (instance? #?(:clj Date :cljs js/Date) x))

;; generators

(defn gen-integer [^long bytes signed?]
  (let [bytes #?(:clj  bytes
                 :cljs (long (min bytes 6)))
        max-v (math/pow 2 (* bytes 8))
        r     (math/floor (* max-v ^double (rand)))]
    (long (if-not signed?
            r
            (- r (/ max-v 2))))))

(defn gen-binary []
  (let [byte-seq (util/into! []
                             (+ 2 ^long (rand-int 30))
                             #(gen-integer 1 true))]
    #?(:clj  (byte-array byte-seq)
       :cljs (aget (js/Int8Array. (apply array byte-seq))
                   "buffer"))))

(defn gen-date []
  #?(:clj  (Date.)
     :cljs (js/Date.)))
