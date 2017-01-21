(ns mikron.util.coll
  "Fast collection operations."
  (:refer-clojure :exclude [count nth every? rand-nth])
  (:require [mikron.util.math :as util.math]
            #?(:clj [mikron.compile-util :as compile-util]))
  #?(:clj (:import [clojure.lang Indexed Counted]))
  #?(:cljs (:require-macros [mikron.util.coll])))

(defn count
  "Returns the length of a vector `coll`."
  ^long [coll]
  #?(:clj  (.count ^Counted coll)
     :cljs (cljs.core/-count coll)))

(defn nth
  "Returns the value of a vector `coll` at the position `index`."
  [coll ^long index]
  #?(:clj  (.nth ^Indexed coll (unchecked-int index))
     :cljs (cljs.core/-nth coll (unchecked-int index))))

(defn rand-nth
  "Returns a random value from a vector `coll`."
  [coll]
  (nth coll (util.math/rand-long (count coll))))

(defn every?
  "Returns `true` if `pred` returns `true` for each element of a
  vector `coll`, `false` otherwise."
  [pred coll]
  (let [length (count coll)]
    (loop [index (long 0)]
      (if (== index length)
        true
        (let [value (nth coll index)]
          (and (pred value) (recur (unchecked-inc index))))))))

#?(:clj
   (defmacro into!
     "Repeatedly evaluates `expr` `n` times, collecting the results into
     a collection `coll`. Uses transient operations if `transient?` is `true`."
     [coll transient? n expr]
     (compile-util/with-evaluated [coll n]
       `(loop [~n    (long ~n)
               ~coll ~(if transient? `(transient ~coll) coll)]
          (if (== 0 ~n)
            ~(if transient? `(persistent! ~coll) coll)
            (recur (unchecked-dec ~n)
                   (~(if transient? `conj! `conj) ~coll ~expr)))))))

#?(:clj
   (defmacro into-kv!
     "Repeatedly evaluates `key-expr` and `value-expr` `n` times, collecting the results into
     a map `coll`. Uses transient operations if `transient?` is `true`."
     [coll transient? n key-expr value-expr]
     (compile-util/with-evaluated [coll n]
       `(loop [~n    (long ~n)
               ~coll ~(if transient? `(transient ~coll) coll)]
          (if (== 0 ~n)
            ~(if transient? `(persistent! ~coll) coll)
            (recur (unchecked-dec ~n)
                   (~(if transient? `assoc! `assoc) ~coll ~key-expr ~value-expr)))))))
