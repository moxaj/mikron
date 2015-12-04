(ns seria.buffer
  #?(:clj
     (:import [java.nio ByteBuffer]
              [java.lang Math])))

(defprotocol HybridBuffer
  (read-byte! [this position])
  (read-ubyte! [this position])
  (read-short! [this position])
  (read-ushort! [this position])
  (read-int! [this position])
  (read-uint! [this position])
  (read-long! [this position])
  (read-float! [this position])
  (read-double! [this position])
  (read-char! [this position])
  (read-boolean! [this position])

  (write-byte! [this position value])
  (write-ubyte! [this position value])
  (write-short! [this position value])
  (write-ushort! [this position value])
  (write-int! [this position value])
  (write-uint! [this position value])
  (write-long! [this position value])
  (write-float! [this position value])
  (write-double! [this position value])
  (write-char! [this position value])
  (write-boolean! [this position value]))

(defn long->ints [^long value]
  [(unchecked-int (bit-shift-right value 32))
   (unchecked-int value)])

(defn ints->long [int-1 int-2]
  (bit-or (unchecked-long (bit-shift-left int-1 32))
          (bit-and int-2 0xFFFFFFFF)))

(do #?(:clj  (extend-type ByteBuffer
               HybridBuffer
               (read-byte! [this position] (.get this ^int position))
               (read-ubyte! [this position] (short (bit-and (.get this ^int position) 0xFF)))
               (read-short! [this position] (.getShort this position))
               (read-ushort! [this position] (int (bit-and (.getShort this position) 0xFFFF)))
               (read-int! [this position] (.getInt this position))
               (read-uint! [this position] (long (bit-and (.getInt this position) 0xFFFFFFFF)))
               (read-long! [this position] (ints->long (.getInt this position)
                                                       (.getInt this (+ position 4))))
               (read-float! [this position] (.getFloat this position))
               (read-double! [this position] (.getDouble this position))
               (read-char! [this position] (.getChar this position))
               (read-boolean! [this position] (-> this
                                                  (.get ^int (quot position 8))
                                                  (bit-test (rem position 8))))

               (write-byte! [this position value] (.put this position (byte value)))
               (write-ubyte! [this position value] (.put this position (unchecked-byte (bit-and value 0xFF))))
               (write-short! [this position value] (.putShort this position (short value)))
               (write-ushort! [this position value] (.putShort this position (unchecked-short (bit-and value 0xFFFF))))
               (write-int! [this position value] (.putInt this position (int value)))
               (write-uint! [this position value] (.putInt this position (unchecked-int (bit-and value 0xFFFFFFFF))))
               (write-long! [this position value] (let [[int-1 int-2] (long->ints value)]
                                                    (.putInt this position int-1)
                                                    (.putInt this (+ 4 position) int-2)))
               (write-float! [this position value] (.putFloat this position (float value)))
               (write-double! [this position value] (.putDouble this position (double value)))
               (write-char! [this position value] (.putChar this position (char value)))
               (write-boolean! [this position value] (.put this
                                                           (quot position 8)
                                                           (-> this
                                                               (.get ^int (quot position 8))
                                                               ((if value bit-set bit-clear)
                                                                 (rem position 8))
                                                               (unchecked-byte)))))

       :cljs (extend-type js/DataView
               HybridBuffer
               (read-byte! [this position] (.getInt8 this position))
               (read-ubyte! [this position] (.getUint8 this position))
               (read-short! [this position] (.getInt16 this position))
               (read-ushort! [this position] (getUint16 this position))
               (read-int! [this position] (.getInt32 this position))
               (read-uint! [this position] (.getUint32 this position))
               (read-long! [this position] (ints->long (.getInt32 this position)
                                                       (.getInt32 this (+ position 4))))
               (read-float! [this position] (.getFloat32 this position))
               (read-double! [this position] (.getFloat64 this position))
               (read-char! [this position] (.getUint16 this position))
               (read-boolean! [this position] (-> this
                                                  (.getInt8 (quot position 8))
                                                  (bit-test (rem position 8))))

               (write-byte! [this position value] (.setInt8 this position (byte value)))
               (write-ubyte! [this position value] (.setUint8 this position (unchecked-byte value)))
               (write-short! [this position value] (.setInt16 this position (short value)))
               (write-ushort! [this position value] (.setUint16 this position (unchecked-short value)))
               (write-int! [this position value] (.setInt32 this position (int value)))
               (write-uint! [this position value] (.setUint32 this position (unchecked-int value)))
               (write-long! [this position value] (let [[int-1 int-2] (long->ints value)]
                                                    (.setInt32 this position int-1)
                                                    (.setInt32 this (+ 4 position) int-2)))
               (write-float! [this position value] (.setFloat32 this position (float value)))
               (write-double! [this position value] (.setFloat64 this position (double value)))
               (write-char! [this position value] (.setUint16 this position (char value)))
               (write-boolean! [this position value] (.setInt8 this
                                                               (quot position 8)
                                                               (-> this
                                                                   (.getInt8 (quot position 8))
                                                                   ((if value bit-set bit-clear)
                                                                     (rem position 8))
                                                                   (unchecked-byte)))))))

(def ^:const header-size 6)
(def ^:const schema-id-pos 0)
(def ^:const delta-id-pos 2)
(def ^:const bit-length-pos 4)

(defn make-wbuffer [max-bits max-bytes]
  (let [size (+ header-size max-bits max-bytes)]
    {:buffer        #?(:clj  (ByteBuffer/allocate size)
                       :cljs (js/DataView. (js/ArrayBuffer. size)))
     :bit-position  (volatile! 0)
     :byte-position (volatile! 0)
     :max-bits      max-bits}))

(defn prepare-wbuffer! [schema-id delta-id {:keys [buffer bit-position byte-position max-bits]}]
  (write-ushort! buffer schema-id-pos schema-id)
  (write-ushort! buffer delta-id-pos delta-id)
  (vreset! bit-position (* header-size 8))
  (vreset! byte-position (+ header-size max-bits)))

(defn unwrap-wbuffer [{:keys [bit-position byte-position max-bits buffer]}]
  (let [length-1     (int (#?(:clj  #(Math/ceil %)
                              :cljs js/Math.ceil) (/ @bit-position 8)))
        length-2     (- @byte-position max-bits header-size)
        total-length (+ length-1 length-2)]
    (write-ushort! buffer bit-length-pos (- length-1 header-size))
    #?(:clj  (let [buffer-bytes (.array ^ByteBuffer buffer)
                   bytes        (byte-array total-length)]
               (System/arraycopy buffer-bytes 0 bytes 0 length-1)
               (System/arraycopy buffer-bytes (+ header-size max-bits) bytes length-1 length-2)
               bytes)
       :cljs (let [array-buffer (.-buffer buffer)
                   byte-view    (js/Int8Array. total-length)]
               (.set byte-view (js/Int8Array. (.slice array-buffer
                                                      0
                                                      length-1))
                     0)
               (.set byte-view (js/Int8Array. (.slice array-buffer
                                                      (+ header-size max-bits)
                                                      (+ header-size max-bits length-2)))
                     length-1)
               (.-buffer byte-view)))))

(defn wrap-bytes [bytes]
  (let [buffer #?(:clj (ByteBuffer/wrap ^bytes bytes)
                  :cljs (js/DataView. bytes))
        schema-id      (read-ushort! buffer schema-id-pos)
        delta-id       (read-ushort! buffer delta-id-pos)
        bit-length     (read-ushort! buffer bit-length-pos)]
    {:schema-id schema-id
     :delta-id  delta-id
     :wbuffer   {:buffer        buffer
                 :bit-position  (volatile! (* header-size 8))
                 :byte-position (volatile! (+ header-size bit-length))}}))