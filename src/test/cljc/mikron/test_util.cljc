(ns mikron.test-util
  (:require [mikron.runtime.processor.validate :as runtime.processor.validate])
  #?(:clj (:import [java.util Arrays])))

(defn nan?
  "Returns `true` if value is NaN, `false otherwise`."
  [value]
  #?(:clj  (Double/isNaN value)
     :cljs (js/isNaN value)))

#?(:cljs
   (defn arraybuffer->seq
     "Converts an ArrayBuffer `value` to a sequence."
     [value]
     (seq (.from js/Array (js/Int8Array. value)))))

(defn equal?
  "Extended equality checker."
  [x y]
  (condp contains? (type x)
    #{runtime.processor.validate/binary-type}
    #?(:clj  (Arrays/equals ^bytes x ^bytes y)
       :cljs (= (arraybuffer->seq x) (arraybuffer->seq y)))

    #?(:clj  #{java.lang.Double java.lang.Float}
       :cljs #{js/Number})
    (or (and (nan? x) (nan? y))
        (== x y))

    (= x y)))
