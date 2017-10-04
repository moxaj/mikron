(ns mikron.math
  "Numeric utility functions."
  (:refer-clojure :exclude [and or not zero? rand rand-int])
  #?(:cljs (:import goog.math.Long)))

;; double

(defn rand
  "Returns a random double value."
  #?(:clj {:inline (fn [] `(unchecked-double (Math/random)))})
  ^double []
  (unchecked-double
    #?(:clj  (Math/random)
       :cljs (.random js/Math))))

(defn pow
  "Raises `x` to `y`."
  #?(:clj {:inline (fn [x y] `(Math/pow ~x ~y))})
  ^double [^double x ^double y]
  #?(:clj  (Math/pow x y)
     :cljs (.pow js/Math x y)))

(defn floor
  "Returns the floor of `x`."
  #?(:clj {:inline (fn [x] `(Math/floor ~x))})
  ^double [^double x]
  #?(:clj  (Math/floor x)
     :cljs (.floor js/Math x)))

(defn abs
  "Returns the absolute value of `x`."
  #?(:clj {:inline (fn [x] `(Math/abs ~x))})
  ^double [^double x]
  #?(:clj  (Math/abs x)
     :cljs (.abs js/Math x)))

(defn round
  "Rounds `x`."
  #?(:clj {:inline (fn [x] `(Math/round ~x))})
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
  (unchecked-long (* n (rand))))

(defn from
  "Creates a new long value."
  #?(:clj {:inline (fn [x] x)})
  (^long [^long x]
   #?(:clj  x
      :cljs (.fromNumber goog.math.Long x)))
  #?(:cljs ([low high]
            (.fromBits goog.math.Long low high))))

(def ^:const c0
  "The constant long 0."
  (from 0))

(def ^:const c1
  "The constant long 1."
  (from 1))

(def ^:const c127
  "The constant long 127."
  (from 127))

(def ^:const c128
  "The constant long 128."
  (from 128))

(def ^:const c-128
  "The constant long -128."
  (from -128))

(defn to
  "Converts a number `x` to a long."
  #?(:clj {:inline (fn [x] x)})
  ^long [^long x]
  #?(:clj  x
     :cljs (.toNumber x)))

(defn zero?
  "Returns `true` if a long `x` is zero, `false` otherwise."
  #?(:clj {:inline (fn [x] `(== 0 ~x))})
  [^long x]
  #?(:clj  (== 0 x)
     :cljs (.isZero x)))

(defn and
  "Performs the bitwise AND operation on two longs `x` and `y`."
  #?(:clj {:inline (fn [x y] `(bit-and ~x ~y))})
  ^long [^long x ^long y]
  #?(:clj  (bit-and x y)
     :cljs (.and x y)))

(defn or
  "Performs the bitwise OR operation on two longs `x` and `y`."
  #?(:clj {:inline (fn [x y] `(bit-or ~x ~y))})
  ^long [^long x ^long y]
  #?(:clj  (bit-or x y)
     :cljs (.or x y)))

(defn xor
  "Performs the bitwise XOR operation on two longs `x` and `y`."
  #?(:clj {:inline (fn [x y] `(bit-xor ~x ~y))})
  ^long [^long x ^long y]
  #?(:clj  (bit-xor x y)
     :cljs (.xor x y)))

(defn not
  "Performs the bitwise NOT operation on a long `x`."
  #?(:clj {:inline (fn [x] `(bit-not ~x))})
  ^long [^long x]
  #?(:clj  (bit-not x)
     :cljs (.not x)))

(defn negate
  "Negates a long `x`."
  #?(:clj {:inline (fn [x] `(unchecked-negate ~x))})
  ^long [^long x]
  #?(:clj  (unchecked-negate x)
     :cljs (.negate x)))

(defn shift-left
  "Arithmetically shifts the bits of a long `x` to the left by `n`."
  #?(:clj {:inline (fn [x n] `(bit-shift-left ~x ~n))})
  ^long [^long x ^long n]
  #?(:clj  (bit-shift-left x n)
     :cljs (.shiftLeft x n)))

(defn shift-right
  "Arithmetically shifts the bits of a long `x` to the right by `n`."
  #?(:clj {:inline (fn [x n] `(bit-shift-right ~x ~n))})
  ^long [^long x ^long n]
  #?(:clj  (bit-shift-right x n)
     :cljs (.shiftRight x n)))

(defn unsigned-shift-right
  "Logically shifts the bits of a long `x` to the right by `n`."
  #?(:clj {:inline (fn [x n] `(unsigned-bit-shift-right ~x ~n))})
  ^long [^long x ^long n]
  #?(:clj  (unsigned-bit-shift-right x n)
     :cljs (.shiftRightUnsigned x n)))

(defn zigzag-encode
  "Zigzag encodes a long `x`."
  #?(:clj {:inline (fn [x] `(xor (shift-right ~x 63) (shift-left ~x 1)))})
  ^long [^long x]
  (xor (shift-right x 63) (shift-left x 1)))

(defn zigzag-decode
  "Zigzag decodes a long `x`."
  #?(:clj {:inline (fn [x] `(xor (unsigned-bit-shift-right ~x 1) (negate (and ~x c1))))})
  ^long [^long x]
  (xor (unsigned-shift-right x 1) (negate (and x c1))))

(defn lower-bound
  "Returns the lower bound for an integer type"
  [^long bytes signed?]
  (if signed?
    (- (pow 2 (dec (* bytes 8))))
    0))

(defn upper-bound
  "Returns the upper bound for an integer type"
  [^long bytes signed?]
  (let [m (pow 2 (* bytes 8))]
    (if signed?
      (/ m 2)
      m)))
