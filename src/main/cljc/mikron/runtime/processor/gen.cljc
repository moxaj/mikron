(ns mikron.runtime.processor.gen
  (:require [mikron.math :as math]
            [mikron.runtime.processor.gen-macros :refer [gen-integer]]))

(defn gen-byte []
  "Generates a byte."
  (gen-integer 1 true))

(defn gen-ubyte []
  "Generates a ubyte."
  (gen-integer 1 false))

(defn gen-short []
  "Generates a short."
  (gen-integer 2 true))

(defn gen-ushort []
  "Generates a ushort."
  (gen-integer 2 false))

(defn gen-int []
  "Generates an int."
  (gen-integer 4 true))

(defn gen-uint []
  "Generates a uint."
  (gen-integer 4 false))

(defn gen-long []
  "Generates a long."
  (gen-integer 8 true))

(defn gen-binary []
  "Generates a binary value."
  (let [length (unchecked-add 2 (math/rand-long 30))
        array  #?(:clj  (byte-array length)
                  :cljs (js/Int8Array. length))]
    (loop [index (long 0)]
      (when-not (== length index)
        (#?(:clj  aset-byte
            :cljs aset)
         array index (gen-byte))
        (recur (unchecked-inc index))))
    #?(:clj  array
       :cljs (.-buffer array))))
