(ns mikron.util.coll
  "Fast collection operations."
  (:refer-clojure :exclude [count nth every? rand-nth])
  (:require [mikron.util.math :as util.math]
            #?(:clj [mikron.compile-util :as compile-util]))
  #?(:clj (:import [clojure.lang Indexed Counted]))
  #?(:cljs (:require-macros [mikron.util.coll])))

(defn count ^long [coll]
  #?(:clj  (.count ^Counted coll)
     :cljs (cljs.core/-count coll)))

(defn nth [coll ^long index]
  #?(:clj  (.nth ^Indexed coll (unchecked-int index))
     :cljs (cljs.core/-nth coll (unchecked-int index))))

(defn rand-nth [coll]
  (nth coll (util.math/rand-long (count coll))))

#?(:clj
   (defmacro every? [pred coll]
     (compile-util/with-gensyms [index length value]
       (compile-util/evaluated [pred coll]
         `(let [~length (count ~coll)]
            (loop [~index (long 0)]
              (if (== ~index ~length)
                true
                (let [~value (nth ~coll ~index)]
                  (and (~pred ~value) (recur (unchecked-inc ~index)))))))))))

#?(:clj
   (defmacro combine! [coll-1 coll-2 coll transient? f-1 f-2]
     (compile-util/with-gensyms [coll' length-1 length-2 index value-1 value-2]
       (compile-util/evaluated [coll-1 coll-2 coll]
         `(let [~length-1 (count ~coll-1)
                ~length-2 (count ~coll-2)]
           (loop [~coll' ~(if transient? `(transient ~coll) coll)
                  ~index (long 0)]
             (if (== ~index ~length-2)
               ~(if transient? `(persistent! ~coll') coll')
               (recur (~(if transient? `conj! `conj)
                       ~coll' (let [~value-2 (nth ~coll-2 ~index)]
                                (if (<= ~length-1 ~index)
                                  (~f-2 nil ~value-2)
                                  (let [~value-1 (nth ~coll-1 ~index)]
                                    (~f-1 ~value-1 ~value-2)))))
                      (unchecked-inc ~index)))))))))

#?(:clj
   (defmacro combine-kv! [coll-1 coll-2 coll transient? f-1 f-2]
     (compile-util/with-gensyms [coll' entry key-2 val-1 val-2]
       (compile-util/evaluated [coll-1 coll-2 coll]
         `(loop [~coll'  ~(if transient? `(transient ~coll) coll)
                 ~coll-2 (seq ~coll-2)]
            (if-let [~entry (first ~coll-2)]
              (let [~key-2 (key ~entry)]
                (recur (~(if transient? `assoc! `assoc)
                        ~coll' ~key-2 (if-let [~val-1 (~coll-1 ~key-2)]
                                        (let [~val-2 (val ~entry)]
                                          (~f-1 ~val-1 ~val-2))
                                        (~f-2 nil ~val-2)))
                       (rest ~coll-2)))
              ~(if transient? `(persistent! ~coll') coll')))))))

#?(:clj
   (defmacro into! [coll transient? times f]
     (compile-util/with-gensyms [coll']
       (compile-util/evaluated [coll times f]
         `(loop [~times (long ~times)
                 ~coll' ~(if transient? `(transient ~coll) coll)]
            (if (== 0 ~times)
              ~(if transient? `(persistent! ~coll') coll')
              (recur (unchecked-dec ~times)
                     (~(if transient? `conj! `conj) ~coll' (~f)))))))))
#?(:clj
   (defmacro into-kv! [coll transient? times kf vf]
     (compile-util/with-gensyms [coll']
       (compile-util/evaluated [coll times kf vf]
         `(loop [~times (long ~times)
                 ~coll' ~(if transient? `(transient ~coll) coll)]
            (if (== 0 ~times)
              ~(if transient? `(persistent! ~coll') coll')
              (recur (unchecked-dec ~times)
                     (~(if transient? `assoc! `assoc) ~coll' (~kf) (~vf)))))))))
