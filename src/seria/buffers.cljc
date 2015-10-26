(ns seria.buffers
  #?(:clj
     (:import [java.nio ByteBuffer])))

(set! *warn-on-reflection* true)

(defn primitive-size [schema]
  (case schema
    :s/byte 1
    :s/short 2
    :s/int 4
    :s/float 4
    :s/double 8
    :s/char 2
    :s/boolean 1))

(defprotocol HybridBuffer
  (read! [this schema position])
  (write! [this schema position data]))

(do #?(:clj  (extend-type ByteBuffer
               HybridBuffer
               (read! [this schema position]
                 (let [p @position]
                   (vswap! position + (primitive-size schema))
                   (case schema
                     :s/byte (.get this ^int p)
                     :s/short (.getShort this p)
                     :s/int (.getInt this p)
                     :s/float (.getFloat this p)
                     :s/double (.getDouble this p)
                     :s/char (.getChar this p)
                     :s/boolean (-> this
                                    (.get ^int (quot p 8))
                                    (bit-test (rem p 8)))
                     nil)))
               (write! [this schema position data]
                 (let [p @position]
                   (vswap! position + (primitive-size schema))
                   (case schema
                     :s/byte (.put this p (byte data))
                     :s/short (.putShort this p (short data))
                     :s/int (.putInt this p (int data))
                     :s/float (.putFloat this p (float data))
                     :s/double (.putDouble this p (double data))
                     :s/char (.putChar this p (char data))
                     :s/boolean (when data
                                  (.put this (quot p 8) (-> this
                                                            (.get ^int (quot p 8))
                                                            (bit-set (rem p 8))
                                                            (unchecked-byte))))
                     nil))))

       :cljs (extend-type js/DataView
               HybridBuffer
               (read! [this schema position]
                 (let [p @position]
                   (vswap! position (+ p (primitive-size schema)))
                   (case schema
                     :s/byte (.getInt8 this p)
                     :s/short (.getInt16 this p)
                     :s/int (.getInt32 this p)
                     :s/float (.getFloat32 this p)
                     :s/double (.getFloat64 this p)
                     :s/char (.getUint8 this p)
                     :s/boolean (-> this
                                    (.getInt8 (quot p 8))
                                    (bit-test (rem p 8)))
                     nil)))
               (write! [this schema position data]
                 (let [p @position]
                   (vswap! position (+ p (primitive-size schema)))
                   (case schema
                     :s/byte (.setInt8 this p data)
                     :s/short (.setInt16 this p data)
                     :s/int (.setInt32 this p data)
                     :s/float (.setFloat32 this p data)
                     :s/double (.setFloat64 this p data)
                     :s/char (.setUint8 this p data)
                     :s/boolean (.setInt8 this (-> this
                                                   (.getInt8 (quot p 8))
                                                   (bit-set (rem p 8))
                                                   (unchecked-byte)))
                     nil))))))

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
    (write! buffer :s/short (volatile! 2) (- length-1 4))
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
        schema-code    (read! buffer :s/short (volatile! 0))
        bit-length     (read! buffer :s/short (volatile! 2))]
    [schema-code
     {:buffer        buffer
      :bit-position  (volatile! 32)
      :byte-position (volatile! (+ 4 bit-length))}]))