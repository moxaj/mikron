(ns seria.varint
  "Variable length integer implementation."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]))

(defn encode-negative [value]
  (- (inc value)))

(defn decode-negative [value]
  (dec (- value)))

(defn write-varint! [buffer value]
  (let [neg-value? (neg? value)
        value      (if-not neg-value? value (encode-negative value))]
    (buffer/write-boolean! buffer neg-value?)
    (loop [value value]
      (if (zero? (bit-and value -128))
        (buffer/write-byte! buffer (unchecked-byte value))
        (do (buffer/write-byte! buffer (unchecked-byte (bit-or (bit-and (unchecked-int value) 127)
                                                               128)))
            (recur (unsigned-bit-shift-right value 7)))))))

(defn read-varint! [buffer]
  (let [neg-value? (buffer/read-boolean! buffer)]
    (loop [value  0
           shift  0]
      (if-not (< shift 64)
        (throw (util/cljc-exception "Malformed varint!"))
        (let [b     (buffer/read-byte! buffer)
              value (bit-or value (bit-shift-left (bit-and b 127)
                                                  shift))]
           (if (zero? (bit-and b 128))
             (if-not neg-value?
               value
               (decode-negative value))
             (recur value (unchecked-add shift 7))))))))
