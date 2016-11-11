(ns mikron.util.type
  "Runtime type related functions."
  (:require [clojure.tools.reader.edn :as edn]
            [mikron.util :as util]
            [mikron.util.math :as util.math]
            [mikron.util.coll :as util.coll])
  #?(:cljs (:require-macros [mikron.util.type :refer [gen-integer valid-integer?]]))
  #?(:clj (:import [java.nio.charset StandardCharsets])))

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
  #?(:clj  (unchecked-int c)
     :cljs (.charCodeAt c 0)))

(defn int->char [^long n]
  #?(:clj  (char n)
     :cljs (.fromCharCode js/String n)))

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
  #?(:clj  (unchecked-float x)
     :cljs (.fround js/Math x)))

;; predicates

(defn binary? [x]
  #?(:clj  (bytes? x)
     :cljs (instance? js/ArrayBuffer x)))

;; helper

#?(:clj
   (defn min-bound [^long bytes signed?]
     (if signed?
       (- (util.math/pow 2 (dec (* bytes 8))))
       0)))

#?(:clj
   (defn max-bound [^long bytes signed?]
     (let [m (util.math/pow 2 (* bytes 8))]
       (if signed? (/ m 2) m))))

;; generators

#?(:clj
   (defmacro gen-integer [bytes signed?]
     `(let [r# (util.math/rand)]
        (-> (* r# ~(max-bound bytes signed?))
            (+ (* (- 1 r#) ~(min-bound bytes signed?)))
            (util.math/floor)
            (unchecked-long)))))

(defn gen-binary []
  (let [byte-seq (util.coll/into! [] true
                                  (unchecked-add 2 (util.math/rand-long 30))
                                  (fn [] (gen-integer 1 true)))]
    #?(:clj  (byte-array byte-seq)
       :cljs (.-buffer (js/Int8Array. (apply array byte-seq))))))

;; validators

#?(:clj
   (defmacro valid-integer? [value bytes signed?]
     `(and (integer? ~value)
           (>= (unchecked-long ~value) ~(min-bound bytes signed?))
           (<  (unchecked-long ~value) ~(max-bound bytes signed?)))))
