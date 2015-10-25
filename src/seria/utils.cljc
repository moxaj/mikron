(ns seria.utils)

(set! *warn-on-reflection* true)

(defn bimap [items]
  (->> items
       (map-indexed #(vector (- %1 32768) %2))
       (mapcat (fn [[a b]] [[a b] [b a]]))
       (into {})))

(defn primitive-size [type]
  (case type
    :s/byte 1
    :s/short 2
    :s/int 4
    :s/float 4
    :s/double 8
    :s/char 2
    :s/boolean 1))

(defn short->bytes [x]
  (#?(:clj  (partial into-array Byte/TYPE)
      :cljs clj->js)
    [(-> x (bit-shift-right 8) (bit-and 0xFF))
     (-> x (bit-and 0xFF))]))