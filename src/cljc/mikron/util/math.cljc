(ns mikron.util.math
  "Runtime numeric functions."
  (:refer-clojure :exclude [and or not zero?])
  (:require [clojure.core :as core])
  #?(:cljs (:import goog.math.Long)))

;; double

(defn pow ^double [^double x ^double y]
  #?(:clj  (Math/pow x y)
     :cljs (.pow js/Math x y)))

(defn floor ^double [^double x]
  #?(:clj  (Math/floor x)
     :cljs (.floor js/Math x)))

(defn abs ^double [^double x]
  #?(:clj  (Math/abs x)
     :cljs (.abs js/Math x)))

(defn round ^long [^double x]
  #?(:clj  (Math/round x)
     :cljs (.round js/Math x)))

(defn interp ^double [^double x ^double y ^double f]
  (-> x
      (unchecked-add (unchecked-multiply f y))
      (unchecked-subtract (unchecked-multiply f x))))

;; long

(defn from
  (^long [^long x]
   #?(:clj  x
      :cljs (.fromNumber goog.math.Long x)))
  #?(:cljs ([low high]
            (.fromBits goog.math.Long low high))))

(def ^:const c0 (from 0))

(def ^:const c1 (from 1))

(def ^:const c127 (from 127))

(def ^:const c128 (from 128))

(def ^:const c-128 (from -128))

(defn to ^long [^long x]
  #?(:clj  x
     :cljs (.toNumber x)))

(defn zero? [^long x]
  #?(:clj  (core/zero? x)
     :cljs (.isZero x)))

(defn and ^long [^long x ^long y]
  #?(:clj  (bit-and x y)
     :cljs (.and x y)))

(defn or ^long [^long x ^long y]
  #?(:clj  (bit-or x y)
     :cljs (.or x y)))

(defn xor ^long [^long x ^long y]
  #?(:clj  (bit-xor x y)
     :cljs (.xor x y)))

(defn not ^long [^long x]
  #?(:clj  (bit-not x)
     :cljs (.not x)))

(defn negate ^long [^long x]
  #?(:clj  (- x)
     :cljs (.negate x)))

(defn shift-left ^long [^long x ^long n]
  #?(:clj  (bit-shift-left x n)
     :cljs (.shiftLeft x n)))

(defn shift-right ^long [^long x ^long n]
  #?(:clj  (bit-shift-right x n)
     :cljs (.shiftRight x n)))

(defn unsigned-shift-right ^long [^long x ^long n]
  #?(:clj  (unsigned-bit-shift-right x n)
     :cljs (.shiftRightUnsigned x n)))

(defn zigzag-encode ^long [^long x]
  (xor (shift-right x 63)
       (shift-left x 1)))

(defn zigzag-decode ^long [^long x]
  (xor (unsigned-shift-right x 1)
       (negate (and x c1))))
