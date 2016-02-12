(ns seria.buffer
  (:require [seria.util :refer [cljc-ceil]])
  #?(:clj (:import [seria SeriaByteBuffer])))

(defprotocol HybridBuffer
  (read-byte! [this])
  (read-ubyte! [this])
  (read-short! [this])
  (read-ushort! [this])
  (read-int! [this])
  (read-uint! [this])
  (read-long! [this])
  (read-float! [this])
  (read-double! [this])
  (read-char! [this])
  (read-boolean! [this])

  (write-byte! [this value])
  (write-ubyte! [this value])
  (write-short! [this value])
  (write-ushort! [this value])
  (write-int! [this value])
  (write-uint! [this value])
  (write-long! [this value])
  (write-float! [this value])
  (write-double! [this value])
  (write-char! [this value])
  (write-boolean! [this value])

  (get-bit-position [this])
  (get-bit-position! [this amount])
  (set-bit-position! [this position])

  (get-byte-position [this])
  (get-byte-position! [this amount])
  (set-byte-position! [this position])

  (get-max-byte-length [this])
  (set-max-byte-length! [this value])

  (to-raw! [this]))

(defn long->ints [^long value]
  [(unchecked-int (bit-shift-right value 32))
   (unchecked-int value)])

(defn ints->long [int-1 int-2]
  (bit-or (unchecked-long (bit-shift-left int-1 32))
          (bit-and int-2 0xFFFFFFFF)))

(do #?(:clj  (extend-type SeriaByteBuffer
               HybridBuffer
               (read-byte!    [this] (.getByte this))
               (read-ubyte!   [this] (short (bit-and (.getByte this) 0xFF)))
               (read-short!   [this] (.getShort this))
               (read-ushort!  [this] (int (bit-and (.getShort this) 0xFFFF)))
               (read-int!     [this] (.getInt this))
               (read-uint!    [this] (long (bit-and (.getInt this) 0xFFFFFFFF)))
               (read-long!    [this] (ints->long (.getInt this) (.getInt this)))
               (read-float!   [this] (.getFloat this))
               (read-double!  [this] (.getDouble this))
               (read-char!    [this] (.getChar this))
               (read-boolean! [this] (.getBoolean this))

               (write-byte!    [this value] (.putByte this (byte value)))
               (write-ubyte!   [this value] (.putByte this (unchecked-byte (bit-and value 0xFF))))
               (write-short!   [this value] (.putShort this (short value)))
               (write-ushort!  [this value] (.putShort this (unchecked-short (bit-and value 0xFFFF))))
               (write-int!     [this value] (.putInt this (int value)))
               (write-uint!    [this value] (.putInt this (unchecked-int (bit-and value 0xFFFFFFFF))))
               (write-long!    [this value] (let [[int-1 int-2] (long->ints value)]
                                              (.putInt this int-1)
                                              (.putInt this int-2)))
               (write-float!   [this value] (.putFloat this (float value)))
               (write-double!  [this value] (.putDouble this (double value)))
               (write-char!    [this value] (.putChar this (char value)))
               (write-boolean! [this value] (.putBoolean this (boolean value)))

               (get-bit-position     [this] (.getBitPosition this))
               (get-byte-position    [this] (.getBytePosition this))
               (get-max-byte-length  [this] (.getMaxByteLength this))

               (set-bit-position!    [this value] (.setBitPosition this value))
               (set-byte-position!   [this value] (.setBytePosition this value))
               (set-max-byte-length! [this value] (.setMaxByteLength this value))

               (get-bit-position!    [this amount] (let [position (.getBitPosition this)]
                                                     (.setBitPosition this (+ position amount))
                                                     position))
               (get-byte-position!   [this amount] (let [position (.getBytePosition this)]
                                                     (.setBytePosition this (+ position amount))
                                                     position))
               (to-raw! [this] (.toRaw this)))


       :cljs (extend-type js/DataView
               HybridBuffer
               (read-byte!    [this] (.getInt8 this (get-byte-position! this this 1)))
               (read-ubyte!   [this] (.getUint8 this (get-byte-position! this 1)))
               (read-short!   [this] (.getInt16 this (get-byte-position! this 2)))
               (read-ushort!  [this] (.getUint16 this (get-byte-position! this 2)))
               (read-int!     [this] (.getInt32 this (get-byte-position! this 4)))
               (read-uint!    [this] (.getUint32 this (get this 4)))
               (read-long!    [this] (ints->long (.getInt32 this (get-byte-position! this 4))
                                                 (.getInt32 this (get-byte-position! this 4))))
               (read-float!   [this] (.getFloat32 this (get-byte-position! this 4)))
               (read-double!  [this] (.getFloat64 this (get-byte-position! this 8)))
               (read-char!    [this] (.getUint16 this (get-byte-position! this 2)))
               (read-boolean! [this] (-> this
                                         (.getInt8 (quot (get-bit-position! this 1) 8))
                                         (bit-test (rem 8))))

               (write-byte!    [this value] (.setInt8 this (get-byte-position! this 1) (byte value)))
               (write-ubyte!   [this value] (.setUint8 this (get-byte-position! this 1) (unchecked-byte value)))
               (write-short!   [this value] (.setInt16 this (get-byte-position! this 2) (short value)))
               (write-ushort!  [this value] (.setUint16 this (get-byte-position! this 2) (unchecked-short value)))
               (write-int!     [this value] (.setInt32 this (get-byte-position! this 4) (int value)))
               (write-uint!    [this value] (.setUint32 this (get-byte-position! this 4) (unchecked-int value)))
               (write-long!    [this value] (let [[int-1 int-2] (long->ints value)]
                                              (.setInt32 this (get-byte-position! this 4) int-1)
                                              (.setInt32 this (get-byte-position! this 4) int-2)))
               (write-float!   [this value] (.setFloat32 this (float value)))
               (write-double!  [this value] (.setFloat64 this (double value)))
               (write-char!    [this value] (.setUint16 this (char value)))
               (write-boolean! [this value] (let [bit-position  (get-bit-position! this 1)]
                                              (.setInt8 this
                                                        (quot bit-position 8)
                                                        (-> this
                                                            (.getInt8 (quot bit-position 8))
                                                            ((if value bit-set bit-clear) (rem bit-position 8))
                                                            (unchecked-byte)))))

               (get-byte-position   [this] (.-bytePosition this))
               (get-max-byte-length [this] (.-maxByteLength this))

               (set-bit-position!    [this value] (set! (.-bitPosition this) value))
               (set-byte-position!   [this value] (set! (.-bytePosition this) value))
               (set-max-byte-length! [this value] (set! (.-maxByteLength this) value))

               (get-bit-position!  [this amount] (let [position (.-bitPosition this)]
                                                   (set! (.-bitPosition this) (+ position amount))
                                                   position))
               (get-byte-position! [this amount] (let [position (.-bytePosition this)]
                                                   (set! (.-bytePosition this) (+ position amount))
                                                   position))

               (to-raw [this] (let [total-bit-length  (int (- (cljc-ceil (/ (get-bit-position this) 8))
                                                              (get-max-byte-length this)))
                                    total-byte-length (get-byte-position this)
                                    array-buffer      (.-buffer this)]
                                (-> (js/Int8Array (+ total-bit-length total-byte-length))
                                    (.set (js/Int8Array. (.slice array-buffer 0 total-byte-length))
                                          0)
                                    (.set (js/Int8Array. (.slice array-buffer max-byte-length
                                                                 (+ max-byte-length total-bit-length)))
                                          total-byte-length)
                                    (.-buffer)))))))

(def ^:const header-byte-length 4)
(def ^:const header-bit-length 1)

(defn make-buffer [max-bit-length max-byte-length]
  (let [length          (+ max-bit-length max-byte-length)
        buffer #?(:clj  (SeriaByteBuffer/allocate length)
                  :cljs (js/DataView. (js/ArrayBuffer. length)))]
    (set-max-byte-length! buffer max-byte-length)))

(defn prepare-buffer! [buffer]
  (-> buffer
      (set-byte-position! header-byte-length)
      (set-bit-position! (+ header-bit-length (* 8 (get-max-byte-length buffer))))))

(defn raw->buffer [raw]
  (let [buffer #?(:clj  (SeriaByteBuffer/wrap ^bytes raw)
                  :cljs (js/DataView. raw))
        schema-id       (read-ushort! buffer)
        byte-length     (read-ushort! buffer)
        diffed?         (-> buffer
                            (set-bit-position! (* 8 (+ header-byte-length byte-length)))
                            (read-boolean!))]
    {:schema-id schema-id
     :diffed?   diffed?
     :buffer    buffer}))

(defn buffer->raw [buffer schema-id diffed?]
  (let [byte-position (get-byte-position buffer)
        byte-length   (- byte-position header-byte-length)
        bit-position  (get-bit-position buffer)]
    (-> buffer
        (set-byte-position! 0)
        (write-ushort! schema-id)
        (write-ushort! byte-length)
        (set-byte-position! byte-position)

        (set-bit-position! (* 8 (+ header-byte-length (get-max-byte-length buffer))))
        (write-boolean! diffed?)
        (set-bit-position! bit-position)

        (to-raw!))))
