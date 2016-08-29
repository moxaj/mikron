(ns mikron.common
  "Runtime cross-platform utility functions."
  (:require [clojure.tools.reader.edn :as edn]
            #?@(:cljs [[goog.string]
                       [goog.string.format]]))
  #?(:clj (:import [java.util Date]
                   [java.nio.charset StandardCharsets])))

;; generic

(defn pow ^double [^double base ^double exp]
  #?(:clj  (Math/pow base exp)
     :cljs (.pow js/Math base exp)))

(defn floor ^double [^double n]
  #?(:clj  (Math/floor n)
     :cljs (.floor js/Math n)))

(defn abs ^double [^double n]
  #?(:clj  (Math/abs n)
     :cljs (.abs js/Math n)))

(defn round ^long [^double n]
  #?(:clj  (Math/round n)
     :cljs (.round js/Math n)))

(defn exception [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

(defn read-string+ [^String s]
  (edn/read-string s))

(defn format+ ^String [^String s & args]
  #?(:clj  (apply format s args)
     :cljs (apply goog.string.format s args)))

(defn keyword->string ^String [kw]
  (.substring (str kw) 1))

(defn date->long ^long [^{:tag #?(:clj `Date :cljs nil)} date]
  (.getTime date))

(defn long->date ^{:tag #?(:clj `Date :cljs nil)} [^long time]
  #?(:clj  (Date. time)
     :cljs (js/Date. time)))

(defn string->binary ^bytes [^String s]
  #?(:clj  (.getBytes s StandardCharsets/UTF_8)
     :cljs (let [s      (.unescape js/window (.encodeURIComponent js/window s))
                 length (.-length s)
                 array  (js/Uint8Array. length)]
             (dotimes [i length]
               (aset array i (.charCodeAt s i)))
             (.-buffer array))))

(defn binary->string ^String [^bytes binary]
  #?(:clj  (String. binary StandardCharsets/UTF_8)
     :cljs (->> binary
                (js/Uint8Array.)
                (.apply String.fromCharCode nil)
                (.escape js/window)
                (.decodeURIComponent js/window))))

(defn binary? [value]
  #?(:clj  (bytes? value)
     :cljs (instance? js/ArrayBuffer value)))

(defn repeatedly!
  ([coll ^long n f]
   (loop [i 0 coll' (transient coll)]
     (if (== i n)
       (persistent! coll')
       (recur (inc i) (conj! coll' (f))))))
  ([map ^long n kf vf]
   (loop [i 0 map' (transient map)]
     (if (== i n)
       (persistent! map')
       (recur (inc i) (assoc! map' (kf) (vf)))))))

;; gen

(defn gen-integer [^long bytes signed?]
  (let [max-value (pow 2 (* bytes 8))
        r         (floor (* max-value ^double (rand)))]
    (long (if-not signed?
            r
            (- r (/ max-value 2))))))

(defn gen-binary []
  (let [byte-seq (repeatedly! []
                              (+ 2 ^long (rand-int 30))
                              #(gen-integer 1 true))]
    #?(:clj  (byte-array byte-seq)
       :cljs (aget (js/Int8Array. (apply array byte-seq))
                   "buffer"))))

(defn gen-date []
  #?(:clj  (Date.)
     :cljs (.now js/Date)))

;; diff

(defrecord DiffedValue [value])

(defn diffed? [value]
  (instance? DiffedValue value))

(defn diffed [value]
  (DiffedValue. value))

(defn undiffed [^DiffedValue value]
  (.value value))

;; interp

(defn interp-numbers ^double [^double value-1 ^double value-2 ^double time-factor]
  #?(:clj  (+' value-1 (*' time-factor (-' value-2 value-1)))
     :cljs (+ value-1 (* time-factor (- value-2 value-1)))))
