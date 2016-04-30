(ns seria.common
  "Functions which are embedded into the generated processors."
  #?(:cljs (:require [cljs.reader :as reader])))

;; cljc

(defn cljc-pow [base exp]
  #?(:clj  (Math/pow base exp)
     :cljs (.pow js/Math base exp)))

(defn cljc-floor [n]
  #?(:clj  (Math/floor n)
     :cljs (.floor js/Math n)))

(defn cljc-exception [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

(defn cljc-read-string [^String s]
  #?(:clj  (read-string s)
     :cljs (reader/read-string s)))

(defn cljc-abs [^double n]
  #?(:clj  (Math/abs n)
     :cljs (.abs js/Math n)))

(defn cljc-round [^double n]
  #?(:clj  (Math/round n)
     :cljs (.round js/Math n)))

;; gen

(def symbol-chars
  (map char (concat [\_ \- \? \!]
                    (range 97 123)
                    (range 65 91)
                    (range 48 58))))

(defn random-integer [bytes signed?]
  (let [max-value (cljc-pow 2 (* bytes 8))
        r         (cljc-floor (* max-value (rand)))]
    (long (if-not signed?
            r
            (- r (/ max-value 2))))))

;; diff

(defrecord DiffedValue [value])

(defn diffed? [value]
  (instance? DiffedValue value))

(defn wrap-diffed [value]
  (->DiffedValue value))

(defn unwrap-diffed [value]
  {:pre [(diffed? value)]}
  (:value value))

;; interp

(defn interp-numbers [value-1 value-2 time-factor]
  #?(:clj  (long (+' value-1 (* time-factor (-' value-2 value-1))))
     :cljs (+ value-1 (* time-factor (- value-2 value-1)))))
