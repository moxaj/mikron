(ns seria.buffers
  #?(:clj
     (:import [java.nio ByteBuffer])))

(set! *warn-on-reflection* true)

(defprotocol HybridBuffer
  (read-byte! [this position])
  (read-short! [this position])
  (read-int! [this position])
  (read-float! [this position])
  (read-double! [this position])
  (read-char! [this position])
  (read-boolean! [this position])

  (write-byte! [this position data])
  (write-short! [this position data])
  (write-int! [this position data])
  (write-float! [this position data])
  (write-double! [this position data])
  (write-char! [this position data])
  (write-boolean! [this position data]))

(do #?(:clj  (extend-type ByteBuffer
               HybridBuffer
               (read-byte! [this position] (.get this ^int position))
               (read-short! [this position] (.getShort this position))
               (read-int! [this position] (.getInt this position))
               (read-float! [this position] (.getFloat this position))
               (read-double! [this position] (.getDouble this position))
               (read-char! [this position] (.getChar this position))
               (read-boolean! [this position] (-> this
                                                  (.get ^int (quot position 8))
                                                  (bit-test (rem position 8))))

               (write-byte! [this position data] (.put this position (byte data)))
               (write-short! [this position data] (.putShort this position (short data)))
               (write-int! [this position data] (.putInt this position (int data)))
               (write-float! [this position data] (.putFloat this position (float data)))
               (write-double! [this position data] (.putDouble this position (double data)))
               (write-char! [this position data] (.putChar this position (char data)))
               (write-boolean! [this position data] (when data
                                                      (.put this (quot position 8)
                                                            (-> this
                                                                (.get ^int (quot position 8))
                                                                (bit-set (rem position 8)))))))

       :cljs (extend-type js/DataView
               ;; TODO implement
               )))

(defn make-wbuffer [max-bits max-bytes]
  (let [size (+ 4 max-bits max-bytes)]
    {:buffer        #?(:clj  (ByteBuffer/allocate size)
                       :cljs (js/DataView. (js/ArrayBuffer. size)))
     :bit-position  (volatile! 0)
     :byte-position (volatile! 0)
     :max-bits      max-bits}))

(defn reset-wbuffer! [{:keys [bit-position byte-position max-bits]}]
  (vreset! bit-position 32)
  (vreset! byte-position (+ 4 max-bits)))

(defn unwrap-wbuffer [{:keys [bit-position byte-position max-bits buffer]}]
  (let [length-1     (int (Math/ceil (/ @bit-position 8)))
        length-2     (- @byte-position max-bits 4)
        total-length (+ length-1 length-2)]
    (write-short! buffer 2 (- length-1 4))
    #?(:clj  (let [buffer-bytes (.array ^ByteBuffer buffer)
                   bytes        (byte-array total-length)]
               (System/arraycopy buffer-bytes 0 bytes 0 length-1)
               (System/arraycopy buffer-bytes (+ 4 max-bits) bytes length-1 length-2)
               bytes)
       :cljs (let [array-buffer (.-buffer buffer)
                   byte-view    (js/Int8Array. total-length)]
               (.set byte-view (js/Int8Array. (.slice array-buffer 0 length-1)) 0)
               (.set byte-view (js/Int8Array. (.slice array-buffer (+ 4 max-bits) (+ 4 max-bits length-2))) length-1)
               (.-buffer byte-view)))))

(defn wrap-bytes [bytes]
  (let [buffer #?(:clj (ByteBuffer/wrap bytes)
                  :cljs (js/DataView. bytes))
        schema-code    (read-short! buffer 0)
        bit-length     (read-short! buffer 2)]
    [schema-code
     {:buffer        buffer
      :bit-position  (volatile! 32)
      :byte-position (volatile! (+ 4 bit-length))}]))