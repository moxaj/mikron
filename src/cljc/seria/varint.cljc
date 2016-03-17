(ns seria.varint
  (:require [seria.buffer :as buffer]
            [seria.util :as util])
  (:import [java.util Random]))

(defn zigzag-encode [n]
  (let [n (long n)]
    (bit-xor (bit-shift-left n 1)
             (bit-shift-right n 63))))

(defn zigzag-decode [n]
  (bit-xor (unsigned-bit-shift-right n 1)
           (- (bit-and n 1))))
