(ns mikron.buffer
  "Buffer protocol and implementations."
  #?(:clj (:import [mikron MikronByteBuffer]))
  (:require [mikron.common :as common]
            #?(:cljs [cljsjs.bytebuffer])))

(defprotocol Buffer
  (read-byte!    [this])
  (read-short!   [this])
  (read-int!     [this])
  (read-long!    [this])
  (read-float!   [this])
  (read-double!  [this])
  (read-char!    [this])
  (read-boolean! [this])
  (read-ubyte!   [this])
  (read-ushort!  [this])
  (read-uint!    [this])

  (write-byte!    [this value])
  (write-short!   [this value])
  (write-int!     [this value])
  (write-long!    [this value])
  (write-float!   [this value])
  (write-double!  [this value])
  (write-char!    [this value])
  (write-boolean! [this value])
  (write-ubyte!   [this value])
  (write-ushort!  [this value])
  (write-uint!    [this value])

  (little-endian? [this])
  (little-endian! [this little-endian])

  (clear! [this])
  (compress [this]))

#?(:clj  (extend-type MikronByteBuffer
           Buffer
           (read-byte!    [this] (.getByte this))
           (read-short!   [this] (.getShort this))
           (read-int!     [this] (.getInt this))
           (read-long!    [this] (.getLong this))
           (read-float!   [this] (.getFloat this))
           (read-double!  [this] (.getDouble this))
           (read-char!    [this] (.getChar this))
           (read-boolean! [this] (.getBoolean this))
           (read-ubyte!   [this] (bit-and (.getByte this) 0xFF))
           (read-ushort!  [this] (bit-and (.getShort this) 0xFFFF))
           (read-uint!    [this] (bit-and (.getInt this) 0xFFFFFFFF))

           (write-byte!    [this value] (.putByte this (byte value)))
           (write-short!   [this value] (.putShort this (short value)))
           (write-int!     [this value] (.putInt this (int value)))
           (write-long!    [this value] (.putLong this (long value)))
           (write-float!   [this value] (.putFloat this (float value)))
           (write-double!  [this value] (.putDouble this (double value)))
           (write-char!    [this value] (.putChar this (char value)))
           (write-boolean! [this value] (.putBoolean this (boolean value)))
           (write-ubyte!   [this value] (.putByte this (unchecked-byte (bit-and value 0xFF))))
           (write-ushort!  [this value] (.putShort this (unchecked-short (bit-and value 0xFFFF))))
           (write-uint!    [this value] (.putInt this (unchecked-int (bit-and value 0xFFFFFFFF))))

           (little-endian? [this] (.isLittleEndian this))
           (little-endian! [this little-endian] (.setLittleEndian this little-endian))

           (clear!   [this] (.clear this))
           (compress [this] (.compress this)))
   :cljs (extend-type js/ByteBuffer
           Buffer
           (read-byte!    [this] (.readInt8 this))
           (read-short!   [this] (.readInt16 this))
           (read-int!     [this] (.readInt32 this))
           (read-long!    [this] (.toNumber (.readInt64 this)))
           (read-float!   [this] (.readFloat32 this))
           (read-double!  [this] (.readFloat64 this))
           (read-char!    [this] (.readUint16 this))
           (read-boolean! [this] (let [bit-index (aget this "bitIndex")]
                                   (when (zero? (mod bit-index 8))
                                     (aset this "bitBuffer" (.readInt8 this)))
                                   (aset this "bitIndex" (inc bit-index))
                                   (not (zero? (bit-and (aget this "bitBuffer")
                                                        (bit-shift-left 1 (mod bit-index 8)))))))
           (read-ubyte!   [this] (.readUint8 this))
           (read-ushort!  [this] (.readUint16 this))
           (read-uint!    [this] (.readUint32 this))

           (write-byte!    [this value] (.writeInt8 this (byte value)))
           (write-short!   [this value] (.writeInt16 this (short value)))
           (write-int!     [this value] (.writeInt32 this (int value)))
           (write-long!    [this value] (.writeInt64 this (long value)))
           (write-float!   [this value] (.writeFloat32 this (float value)))
           (write-double!  [this value] (.writeFloat64 this (double value)))
           (write-char!    [this value] (.writeUint16 this (char value)))
           (write-boolean! [this value] (let [bit-index (aget this "bitIndex")]
                                          (when (zero? (mod bit-index 8))
                                            (when (pos? bit-index)
                                              (.writeInt8 this (aget this "bitBuffer")
                                                               (aget this "bitPosition")))
                                            (aset this "bitBuffer" 0)
                                            (let [offset (aget this "offset")]
                                              (aset this "bitPosition" offset)
                                              (aset this "offset" (inc offset))))
                                          (aset this "bitIndex" (inc bit-index))
                                          (aset this "bitBuffer"
                                                (if value
                                                  (bit-or (aget this "bitBuffer")
                                                          (bit-shift-left 1 (mod bit-index 8)))
                                                  (bit-and (aget this "bitBuffer")
                                                           (bit-not (bit-shift-left 1 (mod bit-index 8))))))
                                          this))

           (write-ubyte!   [this value] (.writeUint8 this value))
           (write-ushort!  [this value] (.writeUint16 this value))
           (write-uint!    [this value] (.writeUint32 this value))

           (little-endian? [this] (aget this "littleEndian"))
           (little-endian! [this little-endian] (aset this "littleEndian" little-endian))

           (clear!   [this] (doto this
                                  (aset "offset" 0)
                                  (aset "bitIndex" 0)
                                  (aset "bitPosition" -1)
                                  (aset "bitBuffer" 0)))
           (compress [this] (do (let [bit-position (aget this "bitPosition")]
                                  (when (not= bit-position -1)
                                    (.writeInt8 this (aget this "bitBuffer") bit-position)))
                                (.toArrayBuffer (.slice this 0 (aget this "offset")))))))

(defn encode-negative [value]
  (- (inc value)))

(defn decode-negative [value]
  (dec (- value)))

(defn write-varint! [buffer value]
  (let [neg-value? (neg? value)
        value      (if-not neg-value? value (encode-negative value))]
    (write-boolean! buffer neg-value?)
    (loop [value value]
      (if (zero? (bit-and value -128))
        (write-byte! buffer (unchecked-byte value))
        (do (write-byte! buffer (unchecked-byte (bit-or (bit-and (unchecked-int value) 127)
                                                        128)))
            (recur (unsigned-bit-shift-right value 7)))))))

(defn read-varint! [buffer]
  (let [neg-value? (read-boolean! buffer)]
    (loop [value 0
           shift 0]
      (if-not (< shift 64)
        (throw (common/exception "Malformed varint!"))
        (let [b     (read-byte! buffer)
              value (bit-or value (bit-shift-left (bit-and b 127)
                                                  shift))]
           (if (zero? (bit-and b 128))
             (if-not neg-value?
               value
               (decode-negative value))
             (recur value (unchecked-add shift 7))))))))

(defn wrap [raw]
  (clear! #?(:clj  (MikronByteBuffer/wrap ^bytes raw)
             :cljs (.wrap js/ByteBuffer raw))))

(defn allocate [size]
  (clear! #?(:clj  (MikronByteBuffer/allocate size)
             :cljs (.allocate js/ByteBuffer size))))

(defn write-headers! [#?(:clj ^MikronByteBuffer buffer :cljs buffer) schema-id meta-schema-id diffed?]
  (-> buffer
      (clear!)
      (write-boolean! (little-endian? buffer))
      (write-boolean! diffed?)
      (write-varint! schema-id)
      (write-boolean! meta-schema-id)
      (cond->
         meta-schema-id (write-varint! meta-schema-id))))

(defn read-headers! [#?(:clj ^MikronByteBuffer buffer :cljs buffer)]
  (little-endian! buffer (read-boolean! buffer))
  {:diffed?        (read-boolean! buffer)
   :schema-id      (read-varint! buffer)
   :meta-schema-id (when (read-boolean! buffer)
                     (read-varint! buffer))})
