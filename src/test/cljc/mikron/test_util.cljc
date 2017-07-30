(ns mikron.test-util
  (:require [mikron.runtime.processor.validate :as runtime.processor.validate]
            [clojure.walk :as walk])
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

(defn fix-for-equality*
  "Returns a more 'equal friendly' value, if necessary."
  [value]
  (condp contains? (type value)
    #{runtime.processor.validate/binary-type}
    [:mikron/binary #?(:clj  (seq value)
                       :cljs (arraybuffer->seq value))]

    #?(:clj  #{java.lang.Double java.lang.Float}
       :cljs #{js/Number})
    (if (nan? value)
      :mikron/nan
      (double value))

    value))

(defn fix-for-equality
  "Returns a more 'equal friendly' value, if necessary."
  [value]
  (walk/postwalk fix-for-equality* value))

(defn equal?
  "Checks whether the given values are equal."
  [value-1 value-2]
  (= (fix-for-equality value-1)
     (fix-for-equality value-2)))
