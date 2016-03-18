(ns seria.buffer
  (:require [seria.util :as util])
  #?(:clj (:import [seria SeriaByteBuffer])))

(def ^:const header-byte-length 6)
(def ^:const header-bit-length 1)

(defprotocol IBuffer
  (read-byte!    [this])
  (read-ubyte!   [this])
  (read-short!   [this])
  (read-ushort!  [this])
  (read-int!     [this])
  (read-uint!    [this])
  (read-long!    [this])
  (read-float!   [this])
  (read-double!  [this])
  (read-char!    [this])
  (read-boolean! [this])

  (write-byte!    [this value])
  (write-ubyte!   [this value])
  (write-short!   [this value])
  (write-ushort!  [this value])
  (write-int!     [this value])
  (write-uint!    [this value])
  (write-long!    [this value])
  (write-float!   [this value])
  (write-double!  [this value])
  (write-char!    [this value])
  (write-boolean! [this value])

  (get-bit-position  [this])
  (get-bit-position! [this amount])
  (set-bit-position! [this position])

  (get-byte-position  [this])
  (get-byte-position! [this amount])
  (set-byte-position! [this position])

  (get-bit-offset  [this])
  (set-bit-offset! [this value])

  (compress [this]))

(defn long->ints [value]
  [(unchecked-int (bit-shift-right value 32))
   (unchecked-int value)])

(defn ints->long [int-1 int-2]
  (bit-or (unchecked-long (bit-shift-left int-1 32))
          (bit-and int-2 0xFFFFFFFF)))

(do #?(:clj  (extend-type SeriaByteBuffer
               IBuffer
               (read-byte!    [this] (.getByte this))
               (read-ubyte!   [this] (short (bit-and (.getByte this) 0xFF)))
               (read-short!   [this] (.getShort this))
               (read-ushort!  [this] (int (bit-and (.getShort this) 0xFFFF)))
               (read-int!     [this] (.getInt this))
               (read-uint!    [this] (long (bit-and (.getInt this) 0xFFFFFFFF)))
               (read-long!    [this] (.getLong this))
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
               (write-long!    [this value] (.putLong this (long value)))
               (write-float!   [this value] (.putFloat this (float value)))
               (write-double!  [this value] (.putDouble this (double value)))
               (write-char!    [this value] (.putChar this (char value)))
               (write-boolean! [this value] (.putBoolean this (boolean value)))

               (get-bit-position     [this] (.getBitPosition this))
               (get-byte-position    [this] (.getBytePosition this))
               (get-bit-offset       [this] (.getBitOffset this))

               (set-bit-position!    [this value] (.setBitPosition this value))
               (set-byte-position!   [this value] (.setBytePosition this value))
               (set-bit-offset!      [this value] (.setBitOffset this value))

               (get-bit-position!    [this amount] (let [position (.getBitPosition this)]
                                                     (.setBitPosition this (+ position amount))
                                                     position))
               (get-byte-position!   [this amount] (let [position (.getBytePosition this)]
                                                     (.setBytePosition this (+ position amount))
                                                     position))
               (compress [this] (.compress this)))


       :cljs (extend-type js/DataView
               IBuffer
               (read-byte!    [this] (.getInt8 this (get-byte-position! this 1)))
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
               (read-boolean! [this] (let [bit-position (get-bit-position! this 1)]
                                       (-> this
                                           (.getInt8 (quot bit-position 8))
                                           (bit-test (rem bit-position 8)))))

               (write-byte!    [this value] (do (.setInt8 this (get-byte-position! this 1) (byte value))
                                                this))
               (write-ubyte!   [this value] (do (.setUint8 this (get-byte-position! this 1) (unchecked-byte value))
                                                this))
               (write-short!   [this value] (do (.setInt16 this (get-byte-position! this 2) (short value))
                                                this))
               (write-ushort!  [this value] (do (.setUint16 this (get-byte-position! this 2) (unchecked-short value))
                                                this))
               (write-int!     [this value] (do (.setInt32 this (get-byte-position! this 4) (int value))
                                                this))
               (write-uint!    [this value] (do (.setUint32 this (get-byte-position! this 4) (unchecked-int value))
                                                this))
               (write-long!    [this value] (let [[int-1 int-2] (long->ints value)]
                                              (.setInt32 this (get-byte-position! this 4) int-1)
                                              (.setInt32 this (get-byte-position! this 4) int-2)
                                              this))
               (write-float!   [this value] (do (.setFloat32 this (float value))
                                                this))
               (write-double!  [this value] (do (.setFloat64 this (double value))
                                                this))
               (write-char!    [this value] (do (.setUint16 this (char value))
                                                this))
               (write-boolean! [this value] (let [bit-position  (get-bit-position! this 1)]
                                              (.setInt8 this
                                                        (quot bit-position 8)
                                                        (-> this
                                                            (.getInt8 (quot bit-position 8))
                                                            ((if value bit-set bit-clear) (rem bit-position 8))
                                                            (unchecked-byte)))))

               (get-bit-position    [this] (.-bitPosition this))
               (get-byte-position   [this] (.-bytePosition this))
               (get-bit-offset      [this] (.-maxByteLength this))

               (set-bit-position!    [this value] (do (set! (.-bitPosition this) value)
                                                      this))
               (set-byte-position!   [this value] (do (set! (.-bytePosition this) value)
                                                      this))
               (set-bit-offset!      [this value] (do (set! (.-maxByteLength this) value)
                                                      this))

               (get-bit-position!  [this amount] (let [position (.-bitPosition this)]
                                                   (set! (.-bitPosition this) (+ position amount))
                                                   position))
               (get-byte-position! [this amount] (let [position (.-bytePosition this)]
                                                   (set! (.-bytePosition this) (+ position amount))
                                                   position))

               (compress [this] (let [bit-offset        (get-bit-offset this)
                                      total-bit-length  (int (- (util/cljc-ceil (/ (get-bit-position this) 8))
                                                                bit-offset))
                                      total-byte-length (get-byte-position this)
                                      array-buffer      (.-buffer this)]
                                  (-> (js/Int8Array (+ total-bit-length total-byte-length))
                                      (.set (js/Int8Array (.slice array-buffer 0 total-byte-length))
                                            0)
                                      (.set (js/Int8Array (.slice array-buffer bit-offset
                                                                  (+ bit-offset total-bit-length)))
                                            total-byte-length)
                                      (.-buffer)))))))

(defn encode-negative [n]
  (- (inc n)))

(defn decode-negative [n]
  (dec (- n)))

(defn write-varint! [buffer n]
  (let [n-neg? (neg? n)
        n      (if-not n-neg? n (encode-negative n))]
    (write-boolean! buffer n-neg?)
    (loop [n n]
      (if (zero? (bit-and n -128))
        (write-byte! buffer (unchecked-byte n))
        (do (write-byte! buffer (unchecked-byte (bit-or (bit-and (unchecked-int n) 127)
                                                        128)))
            (recur (unsigned-bit-shift-right n 7)))))))

(defn read-varint! [buffer]
  (loop [result 0
         shift  0]
    (if-not (< shift 64)
      (throw (util/cljc-exception "Malformed varint!"))
      (let [b      (read-byte! buffer)
            result (bit-or result (bit-shift-left (bit-and b 127)
                                                  shift))]
         (if (zero? (bit-and b 128))
           (if-not (read-boolean! buffer)
             result
             (decode-negative result))
           (recur result (+ shift 7)))))))

(defn wrap [raw]
  (-> #?(:clj  (SeriaByteBuffer/wrap ^bytes raw)
         :cljs (js/DataView. raw))
      (set-byte-position! 0)
      (set-bit-offset! 0)
      (set-bit-position! 0)))

(defn allocate [max-bit-length max-byte-length]
  (let [max-length (+ max-bit-length max-byte-length)]
    (-> #?(:clj  (SeriaByteBuffer/allocate max-length)
           :cljs (js/DataView. (js/ArrayBuffer. max-length)))
        (set-byte-position! 0)
        (set-bit-offset! max-byte-length)
        (set-bit-position! 0))))

(defn prepare [buffer]
  (-> buffer
      (set-byte-position! header-byte-length)
      (set-bit-position! header-bit-length)))

(defn set-headers [buffer schema-id diff-id diffed?]
  (let [byte-position (get-byte-position buffer)
        bit-position  (get-bit-position buffer)]
    (-> buffer
        (set-byte-position! 0)
        (write-ushort! schema-id)
        (write-ushort! diff-id)
        (write-ushort! byte-position)
        (set-byte-position! byte-position)

        (set-bit-position! 0)
        (write-boolean! diffed?)
        (set-bit-position! bit-position))))

(defn get-headers [buffer]
  (let [schema-id   (read-ushort! buffer)
        diff-id     (read-ushort! buffer)
        byte-length (read-ushort! buffer)
        diffed?     (-> buffer
                        (set-bit-offset! byte-length)
                        (set-bit-position! 0)
                        (read-boolean!))]
    {:schema-id schema-id
     :diff-id   diff-id
     :diffed?   diffed?}))
