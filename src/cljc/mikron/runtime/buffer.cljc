(ns mikron.runtime.buffer
  "Buffer interfaces, implementations, and derived operations."
  (:refer-clojure :exclude [reset])
  (:require [mikron.runtime.util :as util]
            [mikron.runtime.math :as math]
            [mikron.runtime.buffer-macros :refer [with-delta with-le definterface+]]
            #?(:cljs [feross.buffer]))
  #?(:clj (:import [java.nio ByteBuffer ByteOrder])))

(definterface+ IMikronBitBuffer
  (^long   get-bit-pos* []            "Gets the current position of the buffer.")
  (^Object set-bit-pos* [^long value] "Sets the current position of the buffer.")

  (^long   get-bit-index* []            "Gets the current index of the buffer.")
  (^Object set-bit-index* [^long value] "Sets the current index of the buffer.")

  (^long   get-bit-value* []            "Gets the current value at the index.")
  (^Object set-bit-value* [^long value] "Sets the current value at the index."))

(deftype MikronBitBuffer [^long ^:unsynchronized-mutable value
                          ^long ^:unsynchronized-mutable index
                          ^long ^:unsynchronized-mutable pos]
  IMikronBitBuffer
  (get-bit-pos* [_]
    pos)
  (set-bit-pos* [_ value']
    (set! pos (unchecked-long value')))

  (get-bit-index* [_]
    index)
  (set-bit-index* [_ value']
    (set! index (unchecked-long value')))

  (get-bit-value* [_]
    value)
  (set-bit-value* [_ value']
    (set! value (unchecked-long value'))))

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

  (^long   get-pos* []          "Gets the current position of the buffer.")
  (^Object set-pos* [^long pos] "Sets the current position of the buffer.")

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
            ^long ^:unsynchronized-mutable pos
            ^boolean ^:unsynchronized-mutable le])
  IMikronByteBuffer
  (take-byte* [_]
    #?(:clj  (unchecked-long (.get buffer))
       :cljs (with-delta pos 1 (.readInt8 buffer pos true))))
  (put-byte* [_ value]
    #?(:clj  (.put buffer (unchecked-byte value))
       :cljs (with-delta pos 1 (.writeInt8 buffer value pos true))))

  (take-short* [_]
    #?(:clj  (unchecked-long (.getShort buffer))
       :cljs (with-delta pos 2 (with-le le (.readInt16 buffer pos true)))))
  (put-short* [_ value]
    #?(:clj  (.putShort buffer (unchecked-short value))
       :cljs (with-delta pos 2 (with-le le (.writeInt16 buffer value pos true)))))

  (take-int* [_]
    #?(:clj  (.getInt buffer)
       :cljs (with-delta pos 4 (with-le le (.readInt32 buffer pos true)))))
  (put-int* [_ value]
    #?(:clj  (.putInt buffer (unchecked-int value))
       :cljs (with-delta pos 4 (with-le le (.writeInt32 buffer value pos true)))))

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
       :cljs (with-delta pos 4 (with-le le (.readFloat buffer pos true)))))
  (put-float* [_ value]
    #?(:clj  (.putFloat buffer (unchecked-float value))
       :cljs (with-delta pos 4 (with-le le (.writeFloat buffer value pos true)))))

  (take-double* [_]
    #?(:clj  (.getDouble buffer)
       :cljs (with-delta pos 8 (with-le le (.readDouble buffer pos true)))))
  (put-double* [_ value]
    #?(:clj  (.putDouble buffer value)
       :cljs (with-delta pos 8 (with-le le (.writeDouble buffer value pos true)))))

  (take-bytes* [_ n]
    #?(:clj  (let [value (byte-array n)]
               (.get buffer value)
               value)
       :cljs (let [from pos
                   to   (unchecked-add pos n)]
               (set! pos to)
               (.slice (.-buffer buffer) from to))))
  (put-bytes* [_ value]
    #?(:clj  (.put buffer value)
       :cljs (do (.copy (.from NativeJsBuffer value) buffer pos)
                 (set! pos (unchecked-add pos (.-byteLength value))))))

  (take-bytes-all* [_]
    #?(:clj  (let [bytes (byte-array (.position buffer))]
               (.position buffer (unchecked-int 0))
               (.get buffer bytes)
               bytes)
       :cljs (.slice (.-buffer buffer) 0 pos)))

  (get-pos* [_]
    #?(:clj  (.position buffer)
       :cljs pos))
  (set-pos* [_ value]
    #?(:clj  (.position buffer (unchecked-int value))
       :cljs (set! pos value)))

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
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(.-bit-buffer ~(vary-meta buffer assoc :tag `Buffer)))}
  ^mikron.runtime.buffer.IMikronBitBuffer [^Buffer buffer]
  (.-bit-buffer buffer))

(defn get-byte-buffer
  "Gets the byte buffer of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(.-byte-buffer ~(vary-meta buffer assoc :tag `Buffer)))}
  ^mikron.runtime.buffer.IMikronByteBuffer [^Buffer buffer]
  (.-byte-buffer buffer))

(defn get-bit-pos
  "Gets the bit position of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(get-bit-pos* (get-bit-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (get-bit-pos* (get-bit-buffer buffer)))

(defn set-bit-pos
  "Sets the bit position of `buffer` to `value`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(set-bit-pos* (get-bit-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (set-bit-pos* (get-bit-buffer buffer) value))

(defn get-bit-index
  "Gets the bit index of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(get-bit-index* (get-bit-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (get-bit-index* (get-bit-buffer buffer)))

(defn set-bit-index
  "Sets the bit index of `buffer` to `value`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(set-bit-index* (get-bit-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (set-bit-index* (get-bit-buffer buffer) value))

(defn get-bit-value
  "Gets the bit value of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(get-bit-value* (get-bit-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (get-bit-value* (get-bit-buffer buffer)))

(defn set-bit-value
  "Sets the bit value of `buffer` to `value`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(set-bit-value* (get-bit-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (set-bit-value* (get-bit-buffer buffer) value))

;; Public delegated operations

(defn take-byte
  "Takes a byte from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-byte* (get-byte-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (take-byte* (get-byte-buffer buffer)))

(defn put-byte
  "Puts a byte `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-byte* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (put-byte* (get-byte-buffer buffer) value))

(defn take-short
  "Takes a short from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-short* (get-byte-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (take-short* (get-byte-buffer buffer)))

(defn put-short
  "Puts a short `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-short* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (put-short* (get-byte-buffer buffer) value))

(defn take-int
  "Takes an int from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-int* (get-byte-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (take-int* (get-byte-buffer buffer)))

(defn put-int
  "Puts an int `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-int* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (put-int* (get-byte-buffer buffer) value))

(defn take-long
  "Takes a long from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-long* (get-byte-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (take-long* (get-byte-buffer buffer)))

(defn put-long
  "Puts a long `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-long* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (put-long* (get-byte-buffer buffer) value))

(defn take-float
  "Takes a float from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-float* (get-byte-buffer ~buffer)))}
  ^double [^Buffer buffer]
  (take-float* (get-byte-buffer buffer)))

(defn put-float
  "Puts a float `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-float* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^double value]
  (put-float* (get-byte-buffer buffer) value))

(defn take-double
  "Takes a double from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-double* (get-byte-buffer ~buffer)))}
  ^double [^Buffer buffer]
  (take-double* (get-byte-buffer buffer)))

(defn put-double
  "Puts a double `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-double* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^double value]
  (put-double* (get-byte-buffer buffer) value))

(defn take-bytes
  "Takes `n` bytes from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-bytes* (get-byte-buffer ~buffer)))}
  [^Buffer buffer n]
  (take-bytes* (get-byte-buffer buffer) n))

(defn put-bytes
  "Puts some bytes `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-bytes* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer value]
  (put-bytes* (get-byte-buffer buffer) value))

(defn take-bytes-all
  "Takes all bytes from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(take-bytes-all* (get-byte-buffer ~buffer)))}
  [^Buffer buffer]
  (take-bytes-all* (get-byte-buffer buffer)))

(defn get-pos
  "Gets the position of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(get-pos* (get-byte-buffer ~buffer)))}
  ^long [^Buffer buffer]
  (get-pos* (get-byte-buffer buffer)))

(defn set-pos
  "Sets the position of `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(set-pos* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer ^long value]
  (set-pos* (get-byte-buffer buffer) value))

(defn get-le
  "Gets the endianness of `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(get-le* (get-byte-buffer ~buffer)))}
  [^Buffer buffer]
  (get-le* (get-byte-buffer buffer)))

(defn set-le
  "Sets the endianness of `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(set-le* (get-byte-buffer ~buffer) ~value))}
  [^Buffer buffer value]
  (set-le* (get-byte-buffer buffer) value))

;; Public derived operations

(defn take-ubyte
  "Takes an unsigned byte from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(bit-and (take-byte ~buffer) 0xFF))}
  ^long [^Buffer buffer]
   (bit-and (take-byte buffer) 0xFF))

(defn put-ubyte
  "Puts an unsigned byte `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-byte ~buffer (unchecked-byte (bit-and ~value 0xFF))))}
  [^Buffer buffer ^long value]
  (put-byte buffer (unchecked-byte (bit-and value 0xFF))))

(defn take-ushort
  "Takes an unsigned short from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     `(bit-and (take-short ~buffer) 0xFFFF))}
  [^Buffer buffer]
  (bit-and (take-short buffer) 0xFFFF))

(defn put-ushort
  "Puts an unsigned short `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-short ~buffer (unchecked-short (bit-and ~value 0xFFFF))))}
  [^Buffer buffer ^long value]
  (put-short buffer (unchecked-short (bit-and value 0xFFFF))))

(defn take-uint
  "Takes an unsigned int from `buffer`."
  {:inline-arities #{1}
   :inline         (fn [buffer]
                     #?(:clj  `(bit-and (take-int ~buffer) 0xFFFFFFFF)
                        :cljs `(unsigned-bit-shift-right (take-int ~buffer) 0)))}
  [^Buffer buffer]
  #?(:clj  (bit-and (take-int buffer) 0xFFFFFFFF)
     :cljs (unsigned-bit-shift-right (take-int buffer) 0)))

(defn put-uint
  "Puts an unsigned int `value` to `buffer`."
  {:inline-arities #{2}
   :inline         (fn [buffer value]
                     `(put-int ~buffer (unchecked-int (bit-and ~value 0xFFFFFFFF))))}
  [^Buffer buffer ^long value]
  (put-int buffer (unchecked-int (bit-and value 0xFFFFFFFF))))

(defn put-byte-at
  "Puts a byte to the given position in `buffer`."
  [^Buffer buffer ^long pos ^long value]
  (let [pos' (get-pos buffer)]
    (doto buffer
          (set-pos pos)
          (put-byte value)
          (set-pos pos'))))

(defn take-boolean
  "Takes a boolean from `buffer`."
  [^Buffer buffer]
  (when (== 0 (rem (get-bit-index buffer) 8))
    (set-bit-value buffer (take-byte buffer)))
  (let [index (get-bit-index buffer)]
    (set-bit-index buffer (unchecked-inc index))
    (not (== 0 (bit-and (get-bit-value buffer)
                        (bit-shift-left 1 (rem index 8)))))))

(defn put-boolean
  "Puts a boolean `value` to `buffer`."
  [^Buffer buffer value]
  (when (== 0 (rem (get-bit-index buffer) 8))
    (when (pos? (get-bit-index buffer))
      (put-byte-at buffer (get-bit-pos buffer) (get-bit-value buffer)))
    (set-bit-pos buffer (get-pos buffer))
    (set-bit-value buffer 0)
    (set-pos buffer (unchecked-inc (get-bit-pos buffer))))
  (let [index (get-bit-index buffer)
        mask  (bit-shift-left 1 (rem index 8))]
    (set-bit-index buffer (unchecked-inc index))
    (set-bit-value buffer
                   (unchecked-byte (if value
                                     (bit-or (get-bit-value buffer) mask)
                                     (bit-and (get-bit-value buffer) (bit-not mask)))))))

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
  [^Buffer buffer]
  (doto buffer
        (set-pos 0)
        (set-bit-pos -1)
        (set-bit-value 0)
        (set-bit-index 0)))

(defn finalize
  "Finalizes `buffer`."
  [^Buffer buffer]
  (let [bit-pos (get-bit-pos buffer)]
    (when-not (== -1 bit-pos)
      (put-byte-at buffer bit-pos (get-bit-value buffer)))))

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
    (MikronByteBuffer.
      #?@(:clj  [(.order (ByteBuffer/allocateDirect size) (ByteOrder/nativeOrder))]
          :cljs [(.allocUnsafe NativeJsBuffer size) 0 true])))
  (wrap* [_ binary]
    (MikronByteBuffer.
      #?@(:clj  [(ByteBuffer/wrap binary)]
          :cljs [(.from NativeJsBuffer binary) 0 true]))))

(def ^mikron.runtime.buffer.IMikronByteBufferFactory byte-buffer-factory
  "The default byte buffer factory."
  (MikronByteBufferFactory.))

(defn set-byte-buffer-factory!
  "Sets the byte buffer factory."
  [factory]
  {:pre [(byte-buffer-factory? factory)]}
  #?(:clj  (alter-var-root #'byte-buffer-factory (constantly factory))
     :cljs (set! byte-buffer-factory factory)))

(defn allocate
  "Allocates a buffer with the size `size`."
  ^Buffer [^long size]
  (Buffer. (MikronBitBuffer. 0 0 -1)
           (allocate* byte-buffer-factory size)))

(defn wrap
  "Wraps a binary value `binary` with a buffer."
  ^Buffer [^bytes binary]
  (Buffer. (MikronBitBuffer. 0 0 -1)
           (wrap* byte-buffer-factory binary)))

(defn set-headers
  "Sets the headers of `buffer`."
  [^Buffer buffer diffed?]
  (doto buffer
        (reset)
        (put-boolean (get-le buffer))
        (put-boolean diffed?)))

(defn get-headers
  "Gets the headers of `buffer`."
  [^Buffer buffer]
  (set-le buffer (take-boolean buffer))
  {:diffed? (take-boolean buffer)})
