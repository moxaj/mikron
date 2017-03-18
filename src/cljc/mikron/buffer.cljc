(ns mikron.buffer
  "Buffer interfaces, implementations, and derived operations."
  (:require [mikron.util :as util]
            [mikron.util.math :as math]
            [mikron.buffer-macros :refer [with-delta with-le definterface+]]
            #?(:cljs [feross.buffer]))
  #?(:clj (:import [java.nio ByteBuffer ByteOrder])))

(definterface+ IMikronBitBuffer
  (^long   ?bit-pos* []            "Gets the current position.")
  (^Object !bit-pos* [^long value] "Sets the current position.")

  (^long   ?bit-index* []            "Gets the current index.")
  (^Object !bit-index* [^long value] "Sets the current index.")

  (^long   ?bit-value* []            "Gets the current value at the index.")
  (^Object !bit-value* [^long value] "Sets the current value at the index."))

(deftype MikronBitBuffer [^long ^:unsynchronized-mutable value
                          ^long ^:unsynchronized-mutable index
                          ^long ^:unsynchronized-mutable pos]
  IMikronBitBuffer
  (?bit-pos* [_]
    pos)
  (!bit-pos* [_ value']
    (set! pos #?(:clj value' :cljs (unchecked-long value'))))

  (?bit-index* [_]
    index)
  (!bit-index* [_ value']
    (set! index #?(:clj value' :cljs (unchecked-long value'))))

  (?bit-value* [_]
    value)
  (!bit-value* [_ value']
    (set! value #?(:clj value' :cljs (unchecked-long value')))))

(definterface+ IMikronByteBuffer
  (^long   ?byte* []            "Reads a byte.")
  (^Object !byte* [^long value] "Writes a byte.")

  (^long   ?short* []            "Reads a short.")
  (^Object !short* [^long value] "Writes a short.")

  (^long   ?int* []            "Reads an int.")
  (^Object !int* [^long value] "Writes an int.")

  (^long   ?long* []            "Reads a long.")
  (^Object !long* [^long value] "Writes a long.")

  (^double ?float* []              "Reads a float.")
  (^Object !float* [^double value] "Writes a float.")

  (^double ?double* []              "Reads a double.")
  (^Object !double* [^double value] "Writes a double.")

  (^bytes  ?bytes* [^long n]      "Reads a given number of bytes.")
  (^Object !bytes* [^bytes value] "Writes a given number of bytes.")

  (^bytes  ?bytes-all* [] "Reads all written bytes.")

  (^long   ?pos* []          "Gets the current position.")
  (^Object !pos* [^long pos] "Sets the current position.")

  (^Object ?le* []              "Gets the current endianness.")
  (^Object !le* [^Object value] "Sets the current endianness."))

#?(:cljs
   (def NativeJsBuffer
     (if (= "nodejs" cljs.core/*target*)
       (.-Buffer (js/require "buffer"))
       feross.buffer/Buffer)))

(deftype MikronByteBuffer
  #?(:clj  [^ByteBuffer buffer]
     :cljs [^NativeJsBuffer buffer
            ^long ^:unsynchronized-mutable pos
            ^boolean ^:unsynchronized-mutable le])
  IMikronByteBuffer
  (?byte* [_]
    #?(:clj  (unchecked-long (.get buffer))
       :cljs (with-delta pos 1 (.readInt8 buffer pos true))))
  (!byte* [_ value]
    #?(:clj  (.put buffer (unchecked-byte value))
       :cljs (with-delta pos 1 (.writeInt8 buffer value pos true))))

  (?short* [_]
    #?(:clj  (unchecked-long (.getShort buffer))
       :cljs (with-delta pos 2 (with-le le (.readInt16 buffer pos true)))))
  (!short* [_ value]
    #?(:clj  (.putShort buffer (unchecked-short value))
       :cljs (with-delta pos 2 (with-le le (.writeInt16 buffer value pos true)))))

  (?int* [_]
    #?(:clj  (.getInt buffer)
       :cljs (with-delta pos 4 (with-le le (.readInt32 buffer pos true)))))
  (!int* [_ value]
    #?(:clj  (.putInt buffer (unchecked-int value))
       :cljs (with-delta pos 4 (with-le le (.writeInt32 buffer value pos true)))))

  (?long* [this]
    #?(:clj  (.getLong buffer)
       :cljs (math/to (let [u (?int* this)
                            v (?int* this)]
                        (if le (math/from u v) (math/from v u))))))
  (!long* [this value]
    #?(:clj  (.putLong buffer value)
       :cljs (let [value (math/from value)
                   low   (.getLowBits value)
                   high  (.getHighBits value)]
               (if le
                 (do (!int* this low)  (!int* this high))
                 (do (!int* this high) (!int* this low))))))

  (?float* [_]
    #?(:clj  (double (.getFloat buffer))
       :cljs (with-delta pos 4 (with-le le (.readFloat buffer pos true)))))
  (!float* [_ value]
    #?(:clj  (.putFloat buffer (unchecked-float value))
       :cljs (with-delta pos 4 (with-le le (.writeFloat buffer value pos true)))))

  (?double* [_]
    #?(:clj  (.getDouble buffer)
       :cljs (with-delta pos 8 (with-le le (.readDouble buffer pos true)))))
  (!double* [_ value]
    #?(:clj  (.putDouble buffer value)
       :cljs (with-delta pos 8 (with-le le (.writeDouble buffer value pos true)))))

  (?bytes* [_ n]
    #?(:clj  (let [value (byte-array n)]
               (.get buffer value)
               value)
       :cljs (let [from pos
                   to   (unchecked-add pos n)]
               (set! pos to)
               (.slice (.-buffer buffer) from to))))
  (!bytes* [_ value]
    #?(:clj  (.put buffer value)
       :cljs (do (.copy (.from NativeJsBuffer value) buffer pos)
                 (set! pos (unchecked-add pos (.-byteLength value))))))

  (?bytes-all* [_]
    #?(:clj  (let [bytes (byte-array (.position buffer))]
               (.position buffer (unchecked-int 0))
               (.get buffer bytes)
               bytes)
       :cljs (.slice (.-buffer buffer) 0 pos)))

  (?pos* [_]
    #?(:clj  (.position buffer)
       :cljs pos))
  (!pos* [_ value]
    #?(:clj  (.position buffer (unchecked-int value))
       :cljs (set! pos value)))

  (?le* [_]
    #?(:clj  (identical? ByteOrder/LITTLE_ENDIAN (.order buffer))
       :cljs le))
  (!le* [_ value]
    #?(:clj  (.order buffer (if value ByteOrder/LITTLE_ENDIAN ByteOrder/BIG_ENDIAN))
       :cljs (set! le value))))

(deftype Buffer [^{:tag #?(:clj `IMikronBitBuffer  :cljs nil)} bit-buffer
                 ^{:tag #?(:clj `IMikronByteBuffer :cljs nil)} byte-buffer])

(defn ?byte-buffer
  "Gets the byte buffer of `buffer`."
  ^IMikronByteBuffer [^Buffer buffer]
  (.-byte-buffer buffer))

(defn ?bit-buffer
  "Gets the bit buffer of `buffer`."
  ^IMikronBitBuffer [^Buffer buffer]
  (.-bit-buffer buffer))

(defn ?bit-pos
  "Gets the bit position of `buffer`."
  ^long [^Buffer buffer]
  (?bit-pos* (?bit-buffer buffer)))

(defn !bit-pos
  "Sets the bit position of `buffer` to `value`."
  [^Buffer buffer ^long value]
  (!bit-pos* (?bit-buffer buffer) value))

(defn ?bit-index
  "Gets the bit index of `buffer`."
  ^long [^Buffer buffer]
  (?bit-index* (?bit-buffer buffer)))

(defn !bit-index
  "Sets the bit index of `buffer` to `value`."
  [^Buffer buffer ^long value]
  (!bit-index* (?bit-buffer buffer) value))

(defn ?bit-value
  "Gets the bit value of `buffer`."
  ^long [^Buffer buffer]
  (?bit-value* (?bit-buffer buffer)))

(defn !bit-value
  "Sets the bit value of `buffer` to `value`."
  [^Buffer buffer ^long value]
  (!bit-value* (?bit-buffer buffer) value))

;; Public operations

(defn ?byte
  "Reads a byte from `buffer`."
  ^long [^Buffer buffer]
  (?byte* (?byte-buffer buffer)))

(defn !byte
  "Writes a byte `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!byte* (?byte-buffer buffer) value))

(defn ?short
  "Reads a short from `buffer`."
  ^long [^Buffer buffer]
  (?short* (?byte-buffer buffer)))

(defn !short
  "Writes a short `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!short* (?byte-buffer buffer) value))

(defn ?int
  "Reads an int from `buffer`."
  ^long [^Buffer buffer]
  (?int* (?byte-buffer buffer)))

(defn !int
  "Writes an int `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!int* (?byte-buffer buffer) value))

(defn ?long
  "Reads a long from `buffer`."
  ^long [^Buffer buffer]
  (?long* (?byte-buffer buffer)))

(defn !long
  "Writes a long `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!long* (?byte-buffer buffer) value))

(defn ?float
  "Reads a float from `buffer`."
  ^double [^Buffer buffer]
  (?float* (?byte-buffer buffer)))

(defn !float
  "Writes a float `value` to `buffer`."
  [^Buffer buffer ^double value]
  (!float* (?byte-buffer buffer) value))

(defn ?double
  "Reads a double from `buffer`."
  ^double [^Buffer buffer]
  (?double* (?byte-buffer buffer)))

(defn !double
  "Writes a double `value` to `buffer`."
  [^Buffer buffer ^double value]
  (!double* (?byte-buffer buffer) value))

(defn ?bytes
  "Reads `n` bytes from `buffer`."
  [^Buffer buffer n]
  (?bytes* (?byte-buffer buffer) n))

(defn !bytes
  "Writes some bytes `value` to `buffer`."
  [^Buffer buffer value]
  (!bytes* (?byte-buffer buffer) value))

(defn ?bytes-all
  "Reads all bytes from `buffer`."
  [^Buffer buffer]
  (?bytes-all* (?byte-buffer buffer)))

(defn ?pos
  "Gets the position of `buffer`."
  ^long [^Buffer buffer]
  (?pos* (?byte-buffer buffer)))

(defn !pos
  "Sets the position of `buffer`."
  [^Buffer buffer ^long value]
  (!pos* (?byte-buffer buffer) value))

(defn ?le
  "Gets the endianness of `buffer`."
  [^Buffer buffer]
  (?le* (?byte-buffer buffer)))

(defn !le
  "Sets the endianness of `buffer`."
  [^Buffer buffer value]
  (!le* (?byte-buffer buffer) value))

;; Derived operations

(defn ?ubyte
  "Reads an unsigned byte from `buffer`."
  ^long [^Buffer buffer]
   (bit-and (?byte buffer) 0xFF))

(defn !ubyte
  "Writes an unsigned byte `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!byte buffer (unchecked-byte (bit-and value 0xFF))))

(defn ?ushort
  "Reads an unsigned short from `buffer`."
  [^Buffer buffer]
  (bit-and (?short buffer) 0xFFFF))

(defn !ushort
  "Writes an unsigned short `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!short buffer (unchecked-short (bit-and value 0xFFFF))))

(defn ?uint
  "Reads an unsigned int from `buffer`."
  [^Buffer buffer]
  #?(:clj  (bit-and (?int buffer) 0xFFFFFFFF)
     :cljs (unsigned-bit-shift-right (?int buffer) 0)))

(defn !uint
  "Writes an unsigned int `value` to `buffer`."
  [^Buffer buffer ^long value]
  (!int buffer (unchecked-int (bit-and value 0xFFFFFFFF))))

(defn !byte-at
  "Writes a byte to the given position in `buffer`."
  [^Buffer buffer ^long pos ^long value]
  (let [pos' (?pos buffer)]
    (doto buffer
          (!pos pos)
          (!byte value)
          (!pos pos'))))

(defn ?boolean
  "Reads a boolean from `buffer`."
  [^Buffer buffer]
  (when (== 0 (rem (?bit-index buffer) 8))
    (!bit-value buffer (?byte buffer)))
  (let [index (?bit-index buffer)]
    (!bit-index buffer (unchecked-inc index))
    (not (== 0 (bit-and (?bit-value buffer)
                        (bit-shift-left 1 (rem index 8)))))))

(defn !boolean
  "Writes a boolean `value` to `buffer`."
  [^Buffer buffer value]
  (when (== 0 (rem (?bit-index buffer) 8))
    (when (pos? (?bit-index buffer))
      (!byte-at buffer (?bit-pos buffer) (?bit-value buffer)))
    (!bit-pos buffer (?pos buffer))
    (!bit-value buffer 0)
    (!pos buffer (unchecked-inc (?bit-pos buffer))))
  (let [index (?bit-index buffer)
        mask  (bit-shift-left 1 (rem index 8))]
    (!bit-index buffer (unchecked-inc index))
    (!bit-value buffer
                (unchecked-byte (if value
                                  (bit-or (?bit-value buffer) mask)
                                  (bit-and (?bit-value buffer) (bit-not mask)))))))

(defn ?varint
  "Reads a varint from `buffer`."
  ^long [^Buffer buffer]
  (loop [value math/c0
         shift (long 0)]
    (if (>= shift 64)
      (throw (ex-info "Malformed varint!" {}))
      (let [byte  (math/from (?byte buffer))
            value (-> (math/and byte math/c127)
                      (math/shift-left shift)
                      (math/or value))]
        (if (math/zero? (math/and byte math/c128))
          (math/to (math/zigzag-decode value))
          (recur value (unchecked-add shift 7)))))))

(defn !varint
  "Writes a varint `value` to `buffer`."
  [^Buffer buffer ^long value]
  (loop [value (math/zigzag-encode (math/from value))]
    (if (math/zero? (math/and value math/c-128))
      (!byte buffer (math/to value))
      (do (!byte buffer (-> value
                            (math/and math/c127)
                            (math/or math/c128)
                            (math/to)))
          (recur (math/unsigned-shift-right value 7))))))

(defn ?binary
  "Reads a binary value from `buffer`."
  ^bytes [^Buffer buffer]
  (?bytes buffer (?varint buffer)))

(defn !binary
  "Writes a binary value `value` to `buffer`."
  [^Buffer buffer ^bytes value]
  (doto buffer
        (!varint #?(:clj  (alength value)
                    :cljs (.-byteLength value)))
        (!bytes value)))

;; Higher level operations

(defn !reset
  "Resets `buffer`."
  [^Buffer buffer]
  (doto buffer
    (!pos 0)
    (!bit-pos -1)
    (!bit-value 0)
    (!bit-index 0)))

(defn !finalize
  "Finalizes `buffer`."
  [^Buffer buffer]
  (let [bit-pos (?bit-pos buffer)]
    (when-not (== -1 bit-pos)
      (!byte-at buffer bit-pos (?bit-value buffer)))))

(definterface+ IMikronByteBufferFactory
  (^mikron.buffer.IMikronByteBuffer allocate* [^long size]    "Allocates a buffer with size `size`.")
  (^mikron.buffer.IMikronByteBuffer wrap*     [^bytes binary] "Wraps a binary value `binary` with a buffer."))

(defn byte-buffer-factory?
  "Returns `true` if `value` is an instance of `IMikronByteBufferFactory`, `false` otherwise."
  [value]
  (instance? IMikronByteBufferFactory value))

(defrecord MikronByteBufferFactory []
  IMikronByteBufferFactory
  (allocate* [_ size]
    (MikronByteBuffer.
      #?@(:clj  [(.order (ByteBuffer/allocateDirect size) (ByteOrder/nativeOrder))]
          :cljs [(.allocUnsafe NativeJsBuffer size) 0 true])))
  (wrap* [_ binary]
    (MikronByteBuffer.
      #?@(:clj  [(ByteBuffer/wrap binary)]
          :cljs [(.from NativeJsBuffer binary) 0 true]))))

(def ^IMikronByteBufferFactory byte-buffer-factory
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

(defn !headers
  "Writes the headers of `buffer`."
  [^Buffer buffer diffed?]
  (doto buffer
    (!reset)
    (!boolean (?le buffer))
    (!boolean diffed?)))

(defn ?headers
  "Reads the headers of `buffer`."
  [^Buffer buffer]
  (!le buffer (?boolean buffer))
  {:diffed? (?boolean buffer)})
