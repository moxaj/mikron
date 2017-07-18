(ns mikron.runtime.buffer
  "Buffer interfaces, implementations, and derived operations."
  (:refer-clojure :exclude [reset])
  (:require [mikron.runtime.util :as util]
            [mikron.runtime.math :as math]
            [mikron.runtime.buffer-macros :refer [with-delta with-le definterface+]]
            #?(:cljs [feross.buffer]))
  #?(:clj (:import [java.nio ByteBuffer ByteOrder])))

(definterface+ IMikronBitBuffer
  (^long   get-bit-position* []            "Gets the current position of the buffer.")
  (^Object set-bit-position* [^long value] "Sets the current position of the buffer.")

  (^long   get-bit-index* []            "Gets the current index of the buffer.")
  (^Object set-bit-index* [^long value] "Sets the current index of the buffer.")

  (^long   get-bit-value* []            "Gets the current value at the index.")
  (^Object set-bit-value* [^long value] "Sets the current value at the index."))

(deftype MikronBitBuffer [^long ^:unsynchronized-mutable value
                          ^long ^:unsynchronized-mutable index
                          ^long ^:unsynchronized-mutable position]
  IMikronBitBuffer
  (get-bit-position* [_]
    position)
  (set-bit-position* [_ value']
    (set! position (unchecked-long value')) nil)

  (get-bit-index* [_]
    index)
  (set-bit-index* [_ value']
    (set! index (unchecked-long value')) nil)

  (get-bit-value* [_]
    value)
  (set-bit-value* [_ value']
    (set! value (unchecked-long value')) nil))

(definterface+ IMikronByteBuffer
  (^long   take-byte* []            "Takes a byte from the buffer.")
  (^Object put-byte*  [^long value] "Puts a byte into the buffer.")

  (^long   take-short* []           "Takes a short from the buffer.")
  (^Object put-short*  [^long value] "Puts a short into the buffer.")

  (^long   take-int* []            "Takes an int from the buffer.")
  (^Object put-int*  [^long value] "Puts an int into the buffer.")

  (^long   take-long* []            "Takes a long from the buffer.")
  (^Object put-long*  [^long value] "Puts a long into the buffer.")

  (^double take-float* []               "Takes a float from the buffer.")
  (^Object put-float*  [^double value] "Puts a float into the buffer.")

  (^double take-double* []              "Takes a double from the buffer.")
  (^Object put-double*  [^double value] "Puts a double into the buffer.")

  (^bytes  take-bytes* [^long n]      "Takes a given number of bytes from the buffer.")
  (^Object put-bytes*  [^bytes value] "Puts a given number of bytes into the buffer.")

  (^bytes  take-bytes-all* [] "Takes all written bytes from the buffer.")

  (^long   get-position* []            "Gets the current positio of the buffer.")
  (^Object set-position* [^long value] "Sets the current position of the buffer.")

  (^Object get-le* []              "Gets the current endianness of the buffer.")
  (^Object set-le* [^Object value] "Sets the current endianness of the buffer."))

#?(:cljs
   (def NativeJsBuffer
     (if (util/node-env?)
       (.-Buffer (js/require "buffer"))
       feross.buffer/Buffer)))

(deftype MikronByteBuffer
  #?(:clj  [^ByteBuffer buffer]
     :cljs [^NativeJsBuffer buffer
            ^long ^:unsynchronized-mutable position
            ^boolean ^:unsynchronized-mutable le])
  IMikronByteBuffer
  (take-byte* [_]
    #?(:clj  (unchecked-long (.get buffer))
       :cljs (with-delta position 1 (.readInt8 buffer position true))))
  (put-byte* [_ value]
    #?(:clj  (.put buffer (unchecked-byte value))
       :cljs (with-delta position 1 (.writeInt8 buffer value position true))))

  (take-short* [_]
    #?(:clj  (unchecked-long (.getShort buffer))
       :cljs (with-delta position 2 (with-le le (.readInt16 buffer position true)))))
  (put-short* [_ value]
    #?(:clj  (.putShort buffer (unchecked-short value))
       :cljs (with-delta position 2 (with-le le (.writeInt16 buffer value position true)))))

  (take-int* [_]
    #?(:clj  (.getInt buffer)
       :cljs (with-delta position 4 (with-le le (.readInt32 buffer position true)))))
  (put-int* [_ value]
    #?(:clj  (.putInt buffer (unchecked-int value))
       :cljs (with-delta position 4 (with-le le (.writeInt32 buffer value position true)))))

  (take-long* [this]
    #?(:clj  (.getLong buffer)
       :cljs (math/to (let [u (take-int* this)
                            v (take-int* this)]
                        (if le (math/from u v) (math/from v u))))))
  (put-long* [this value]
    #?(:clj  (.putLong buffer value)
       :cljs (let [value (math/from value)
                   low   (.getLowBits value)
                   high  (.getHighBits value)]
               (if le
                 (do (put-int* this low)  (put-int* this high))
                 (do (put-int* this high) (put-int* this low))))))

  (take-float* [_]
    #?(:clj  (double (.getFloat buffer))
       :cljs (with-delta position 4 (with-le le (.readFloat buffer position true)))))
  (put-float* [_ value]
    #?(:clj  (.putFloat buffer (unchecked-float value))
       :cljs (with-delta position 4 (with-le le (.writeFloat buffer value position true)))))

  (take-double* [_]
    #?(:clj  (.getDouble buffer)
       :cljs (with-delta position 8 (with-le le (.readDouble buffer position true)))))
  (put-double* [_ value]
    #?(:clj  (.putDouble buffer value)
       :cljs (with-delta position 8 (with-le le (.writeDouble buffer value position true)))))

  (take-bytes* [_ n]
    #?(:clj  (let [value (byte-array n)]
               (.get buffer value)
               value)
       :cljs (let [from position
                   to   (unchecked-add position n)]
               (set! position to)
               (.slice (.-buffer buffer) from to))))
  (put-bytes* [_ value]
    #?(:clj  (.put buffer value)
       :cljs (do (.copy (.from NativeJsBuffer value) buffer position)
                 (set! position (unchecked-add position (.-byteLength value))))))

  (take-bytes-all* [_]
    #?(:clj  (let [bytes (byte-array (.position buffer))]
               (.position buffer (unchecked-int 0))
               (.get buffer bytes)
               bytes)
       :cljs (.slice (.-buffer buffer) 0 position)))

  (get-position* [_]
    #?(:clj  (.position buffer)
       :cljs position))
  (set-position* [_ value]
    #?(:clj  (.position buffer (unchecked-int value))
       :cljs (set! position value)))

  (get-le* [_]
    #?(:clj  (identical? ByteOrder/LITTLE_ENDIAN (.order buffer))
       :cljs le))
  (set-le* [_ value]
    #?(:clj  (.order buffer (if value ByteOrder/LITTLE_ENDIAN ByteOrder/BIG_ENDIAN))
       :cljs (set! le value))))

(deftype Buffer [^mikron.runtime.buffer.IMikronBitBuffer  bit-buffer
                 ^mikron.runtime.buffer.IMikronByteBuffer byte-buffer])

(defn get-bit-buffer
  "Gets the bit buffer of `buffer`."
  #?(:clj {:inline (fn [buffer] `(.-bit-buffer ~(vary-meta buffer assoc :tag `Buffer)))})
  ^mikron.runtime.buffer.IMikronBitBuffer [^Buffer buffer]
  (.-bit-buffer buffer))

(defn get-byte-buffer
  "Gets the byte buffer of `buffer`."
  #?(:clj {:inline (fn [buffer] `(.-byte-buffer ~(vary-meta buffer assoc :tag `Buffer)))})
  ^mikron.runtime.buffer.IMikronByteBuffer [^Buffer buffer]
  (.-byte-buffer buffer))

(defn get-bit-position
  "Gets the bit position of `buffer`."
  #?(:clj {:inline (fn [buffer] `(get-bit-position* (get-bit-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (get-bit-position* (get-bit-buffer buffer)))

(defn set-bit-position
  "Sets the bit position of `buffer` to `value`."
  #?(:clj {:inline (fn [buffer value] `(set-bit-position* (get-bit-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (set-bit-position* (get-bit-buffer buffer) value))

(defn get-bit-index
  "Gets the bit index of `buffer`."
  #?(:clj {:inline (fn [buffer] `(get-bit-index* (get-bit-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (get-bit-index* (get-bit-buffer buffer)))

(defn set-bit-index
  "Sets the bit index of `buffer` to `value`."
  #?(:clj {:inline (fn [buffer value] `(set-bit-index* (get-bit-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (set-bit-index* (get-bit-buffer buffer) value))

(defn get-bit-value
  "Gets the bit value of `buffer`."
  #?(:clj {:inline (fn [buffer] `(get-bit-value* (get-bit-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (get-bit-value* (get-bit-buffer buffer)))

(defn set-bit-value
  "Sets the bit value of `buffer` to `value`."
  #?(:clj {:inline (fn [buffer value] `(set-bit-value* (get-bit-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (set-bit-value* (get-bit-buffer buffer) value))

;; Public delegated operations

(defn take-byte
  "Takes a byte from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-byte* (get-byte-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (take-byte* (get-byte-buffer buffer)))

(defn put-byte
  "Puts a byte `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-byte* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (put-byte* (get-byte-buffer buffer) value))

(defn take-short
  "Takes a short from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-short* (get-byte-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (take-short* (get-byte-buffer buffer)))

(defn put-short
  "Puts a short `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-short* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (put-short* (get-byte-buffer buffer) value))

(defn take-int
  "Takes an int from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-int* (get-byte-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (take-int* (get-byte-buffer buffer)))

(defn put-int
  "Puts an int `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-int* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (put-int* (get-byte-buffer buffer) value))

(defn take-long
  "Takes a long from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-long* (get-byte-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (take-long* (get-byte-buffer buffer)))

(defn put-long
  "Puts a long `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-long* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (put-long* (get-byte-buffer buffer) value))

(defn take-float
  "Takes a float from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-float* (get-byte-buffer ~buffer)))})
  ^double [^Buffer buffer]
  (take-float* (get-byte-buffer buffer)))

(defn put-float
  "Puts a float `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-float* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^double value]
  (put-float* (get-byte-buffer buffer) value))

(defn take-double
  "Takes a double from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-double* (get-byte-buffer ~buffer)))})
  ^double [^Buffer buffer]
  (take-double* (get-byte-buffer buffer)))

(defn put-double
  "Puts a double `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-double* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^double value]
  (put-double* (get-byte-buffer buffer) value))

(defn take-bytes
  "Takes `n` bytes from `buffer`."
  #?(:clj {:inline (fn [buffer n] `(take-bytes* (get-byte-buffer ~buffer) ~n))})
  ^bytes [^Buffer buffer ^long n]
  (take-bytes* (get-byte-buffer buffer) n))

(defn put-bytes
  "Puts some bytes `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-bytes* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^bytes value]
  (put-bytes* (get-byte-buffer buffer) value))

(defn take-bytes-all
  "Takes all bytes from `buffer`."
  #?(:clj {:inline (fn [buffer] `(take-bytes-all* (get-byte-buffer ~buffer)))})
  ^bytes [^Buffer buffer]
  (take-bytes-all* (get-byte-buffer buffer)))

(defn get-position
  "Gets the position of `buffer`."
  #?(:clj {:inline (fn [buffer] `(get-position* (get-byte-buffer ~buffer)))})
  ^long [^Buffer buffer]
  (get-position* (get-byte-buffer buffer)))

(defn set-position
  "Sets the position of `buffer`."
  #?(:clj {:inline (fn [buffer value] `(set-position* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer ^long value]
  (set-position* (get-byte-buffer buffer) value))

(defn get-le
  "Gets the endianness of `buffer`."
  #?(:clj {:inline (fn [buffer] `(get-le* (get-byte-buffer ~buffer)))})
  [^Buffer buffer]
  (get-le* (get-byte-buffer buffer)))

(defn set-le
  "Sets the endianness of `buffer`."
  #?(:clj {:inline (fn [buffer value] `(set-le* (get-byte-buffer ~buffer) ~value))})
  [^Buffer buffer value]
  (set-le* (get-byte-buffer buffer) value))

;; Public derived operations

(defn take-ubyte
  "Takes an unsigned byte from `buffer`."
  #?(:clj {:inline (fn [buffer] `(bit-and (take-byte ~buffer) 0xFF))})
  ^long [^Buffer buffer]
   (bit-and (take-byte buffer) 0xFF))

(defn put-ubyte
  "Puts an unsigned byte `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-byte ~buffer (unchecked-byte (bit-and ~(vary-meta value assoc :tag 'long) 0xFF))))})
  [^Buffer buffer ^long value]
  (put-byte buffer (unchecked-byte (bit-and value 0xFF))))

(defn take-ushort
  "Takes an unsigned short from `buffer`."
  #?(:clj {:inline (fn [buffer] `(bit-and (take-short ~buffer) 0xFFFF))})
  ^long [^Buffer buffer]
  (bit-and (take-short buffer) 0xFFFF))

(defn put-ushort
  "Puts an unsigned short `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-short ~buffer (unchecked-short (bit-and ~(vary-meta value assoc :tag 'long) 0xFFFF))))})
  [^Buffer buffer ^long value]
  (put-short buffer (unchecked-short (bit-and value 0xFFFF))))

(defn take-uint
  "Takes an unsigned int from `buffer`."
  #?(:clj {:inline (fn [buffer] #?(:clj  `(bit-and (take-int ~buffer) 0xFFFFFFFF)
                                   :cljs `(unsigned-bit-shift-right (take-int ~buffer) 0)))})
  ^long [^Buffer buffer]
  #?(:clj  (bit-and (take-int buffer) 0xFFFFFFFF)
     :cljs (unsigned-bit-shift-right (take-int buffer) 0)))

(defn put-uint
  "Puts an unsigned int `value` to `buffer`."
  #?(:clj {:inline (fn [buffer value] `(put-int ~buffer (unchecked-int (bit-and ~(vary-meta value assoc :tag 'long) 0xFFFFFFFF))))})
  [^Buffer buffer ^long value]
  (put-int buffer (unchecked-int (bit-and value 0xFFFFFFFF))))

(defn put-byte-at
  "Puts a byte to the given position in `buffer`."
  [^Buffer buffer ^long position ^long value]
  (let [position' (get-position buffer)]
    (doto buffer
      (set-position position)
      (put-byte value)
      (set-position position'))))

(defn take-boolean
  "Takes a boolean from `buffer`."
  [^Buffer buffer]
  (let [bit-index (get-bit-index buffer)]
    (when (== 0 bit-index)
      (set-bit-value buffer (take-byte buffer)))
    (set-bit-index buffer (rem (unchecked-inc bit-index) 8))
    (not (== 0 (bit-and (get-bit-value buffer)
                        (bit-shift-left 1 bit-index))))))

(defn put-boolean
  "Puts a boolean `value` to `buffer`."
  [^Buffer buffer value]
  (let [bit-index (get-bit-index buffer)]
    (when (== 0 bit-index)
      (let [bit-position (get-bit-position buffer)]
        (if (neg? bit-position)
          (set-bit-position buffer 0)
          (put-byte-at buffer bit-position (get-bit-value buffer))))
      (let [position (get-position buffer)]
        (set-bit-position buffer position)
        (set-bit-value buffer 0)
        (set-position buffer (unchecked-inc position))))
    (let [bit-mask (bit-shift-left 1 bit-index)]
      (set-bit-index buffer (rem (unchecked-inc bit-index) 8))
      (set-bit-value buffer (unchecked-byte (if value
                                              (bit-or (get-bit-value buffer) bit-mask)
                                              (bit-and (get-bit-value buffer) (bit-not bit-mask))))))))

(defn take-varint
  "Takes a varint from `buffer`."
  ^long [^Buffer buffer]
  (loop [value math/c0
         shift (long 0)]
    (if (>= shift 64)
      (throw (ex-info "Malformed varint!" {}))
      (let [byte  (math/from (take-byte buffer))
            value (-> (math/and byte math/c127)
                      (math/shift-left shift)
                      (math/or value))]
        (if (math/zero? (math/and byte math/c128))
          (math/to (math/zigzag-decode value))
          (recur value (unchecked-add shift 7)))))))

(defn put-varint
  "Puts a varint `value` to `buffer`."
  [^Buffer buffer ^long value]
  (loop [value (math/zigzag-encode (math/from value))]
    (if (math/zero? (math/and value math/c-128))
      (put-byte buffer (math/to value))
      (do (->> value
               (math/and math/c127)
               (math/or math/c128)
               (math/to)
               (put-byte buffer))
          (recur (math/unsigned-shift-right value 7))))))

(defn take-binary
  "Takes a binary value from `buffer`."
  ^bytes [^Buffer buffer]
  (take-bytes buffer (take-varint buffer)))

(defn put-binary
  "Puts a binary value `value` to `buffer`."
  [^Buffer buffer ^bytes value]
  (doto buffer
    (put-varint #?(:clj  (alength value)
                   :cljs (.-byteLength value)))
    (put-bytes value)))

;; Public higher level operations

(defn reset
  "Resets `buffer`."
  ^Buffer [^Buffer buffer]
  (doto buffer
    (set-position 0)
    (set-bit-position -1)
    (set-bit-value 0)
    (set-bit-index 0)))

(defn finalize
  "Finalizes `buffer`."
  ^Buffer [^Buffer buffer]
  (let [bit-position (get-bit-position buffer)]
    (when-not (== -1 bit-position)
      (put-byte-at buffer bit-position (get-bit-value buffer)))
    buffer))

(definterface+ IMikronByteBufferFactory
  (^mikron.runtime.buffer.IMikronByteBuffer allocate* [^long size]    "Allocates a buffer with size `size`.")
  (^mikron.runtime.buffer.IMikronByteBuffer wrap*     [^bytes binary] "Wraps a binary value `binary` with a buffer."))

(defn byte-buffer-factory?
  "Returns `true` if `value` is an instance of `IMikronByteBufferFactory`, `false` otherwise."
  [value]
  (instance? mikron.runtime.buffer.IMikronByteBufferFactory value))

(deftype MikronByteBufferFactory []
  IMikronByteBufferFactory
  (allocate* [_ size]
    #?(:clj  (->MikronByteBuffer (.order (ByteBuffer/allocateDirect size) (ByteOrder/nativeOrder)))
       :cljs (->MikronByteBuffer (.allocUnsafe NativeJsBuffer size) 0 true)))
  (wrap* [_ binary]
    #?(:clj  (->MikronByteBuffer (ByteBuffer/wrap binary))
       :cljs (->MikronByteBuffer (.from NativeJsBuffer binary) 0 true))))

(def ^mikron.runtime.buffer.IMikronByteBufferFactory byte-buffer-factory
  "The default byte buffer factory."
  (MikronByteBufferFactory.))

(defn set-byte-buffer-factory!
  "Sets the byte buffer factory."
  [^mikron.runtime.buffer.IMikronByteBufferFactory factory]
  {:pre [(byte-buffer-factory? factory)]}
  #?(:clj  (alter-var-root #'byte-buffer-factory (constantly factory))
     :cljs (set! byte-buffer-factory factory)))

(defn allocate
  "Allocates a buffer with the size `size`."
  ^Buffer [^long size]
  (->Buffer (->MikronBitBuffer 0 0 -1) (allocate* byte-buffer-factory size)))

(defn wrap
  "Wraps a binary value `binary` with a buffer."
  ^Buffer [^bytes binary]
  (->Buffer (->MikronBitBuffer 0 0 -1) (wrap* byte-buffer-factory binary)))

(defn set-headers
  "Sets the headers of `buffer`."
  ^Buffer [^Buffer buffer diffed?]
  (doto buffer
    (reset)
    (put-boolean (get-le buffer))
    (put-boolean diffed?)))

(defn get-headers
  "Gets the headers of `buffer`."
  [^Buffer buffer]
  (set-le buffer (take-boolean buffer))
  {:diffed? (take-boolean buffer)})
