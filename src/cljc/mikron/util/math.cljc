(ns mikron.util.math
  "Numeric utility functions."
  (:refer-clojure :exclude [and or not zero? rand rand-int])
  #?(:cljs (:import goog.math.Long)))

;; double

(defn rand
  "Returns a random double value."
  ^double []
  (unchecked-double
    #?(:clj  (Math/random)
       :cljs (.random js/Math))))

(defn pow
  "Raises `x` to `y`."
  ^double [^double x ^double y]
  #?(:clj  (Math/pow x y)
     :cljs (.pow js/Math x y)))

(defn floor
  "Returns the floor of `x`."
  ^double [^double x]
  #?(:clj  (Math/floor x)
     :cljs (.floor js/Math x)))

(defn abs
  "Returns the absolute value of `x`."
  ^double [^double x]
  #?(:clj  (Math/abs x)
     :cljs (.abs js/Math x)))

(defn round
  "Rounds `x`."
  ^long [^double x]
  #?(:clj  (Math/round x)
     :cljs (.round js/Math x)))

(defn interp
  "Calculates a new value via linear interpolation."
  ^double [^double x ^double y ^double f]
  (-> x
      (unchecked-add (unchecked-multiply f y))
      (unchecked-subtract (unchecked-multiply f x))))

;; long

(defn rand-long
  "Returns a random long value in range from 0 (inclusive) to `n` (exclusive)."
  ^long [^long n]
  (->> (rand) (* n) (unchecked-long)))

(defn from
  "Creates a new long value."
  (^long [^long x]
   #?(:clj  x
      :cljs (.fromNumber goog.math.Long x)))
  #?(:cljs ([low high]
            (.fromBits goog.math.Long low high))))

(def c0 ;^:const
  "The constant long 0."
  (from 0))

(def c1 ;^:const
  "The constant long 1."
  (from 1))

(def c127 ;^:const
  "The constant long 127."
  (from 127))

(def c128 ;^:const
  "The constant long 128."
  (from 128))

(def c-128 ;^:const
  "The constant long -128."
  (from -128))

(defn to
  "Converts a number `x` to a long."
  ^long [^long x]
  #?(:clj  x
     :cljs (.toNumber x)))

(defn zero?
  "Returns `true` if a long `x` is zero, `false` otherwise."
  [^long x]
  #?(:clj  (== 0 x)
     :cljs (.isZero x)))

(defn and
  "Performs the bitwise AND operation on two longs `x` and `y`."
  ^long [^long x ^long y]
  #?(:clj  (bit-and x y)
     :cljs (.and x y)))

(defn or
  "Performs the bitwise OR operation on two longs `x` and `y`."
  ^long [^long x ^long y]
  #?(:clj  (bit-or x y)
     :cljs (.or x y)))

(defn xor
  "Performs the bitwise XOR operation on two longs `x` and `y`."
  ^long [^long x ^long y]
  #?(:clj  (bit-xor x y)
     :cljs (.xor x y)))

(defn not
  "Performs the bitwise NOT operation on a long `x`."
  ^long [^long x]
  #?(:clj  (bit-not x)
     :cljs (.not x)))

(defn negate
  "Negates a long `x`."
  ^long [^long x]
  #?(:clj  (- x)
     :cljs (.negate x)))

(defn shift-left
  "Arithmetically shifts the bits of a long `x` to the left by `n`."
  ^long [^long x ^long n]
  #?(:clj  (bit-shift-left x n)
     :cljs (.shiftLeft x n)))

(defn shift-right
  "Arithmetically shifts the bits of a long `x` to the right by `n`."
  ^long [^long x ^long n]
  #?(:clj  (bit-shift-right x n)
     :cljs (.shiftRight x n)))

(defn unsigned-shift-right
  "Logically shifts the bits of a long `x` to the right by `n`."
  ^long [^long x ^long n]
  #?(:clj  (unsigned-bit-shift-right x n)
     :cljs (.shiftRightUnsigned x n)))

(defn zigzag-encode
  "Zigzag encodes a long `x`."
  ^long [^long x]
  (xor (shift-right x 63)
       (shift-left x 1)))

(defn zigzag-decode
  "Zigzag decodes a long `x`."
  ^long [^long x]
  (xor (unsigned-shift-right x 1)
       (negate (and x c1))))

(defn lower-bound
  "Returns the lower bound for an integer value."
  [^long bytes signed?]
  (if signed?
    (- (pow 2 (dec (* bytes 8))))
    0))

(defn upper-bound
  "Returns the upper bound for an integer value."
  [^long bytes signed?]
  (let [m (pow 2 (* bytes 8))]
    (if signed?
      (/ m 2)
      m)))
