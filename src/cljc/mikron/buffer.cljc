(ns mikron.buffer
  "Buffer interfaces, implementations, and derived operations."
  (:require [mikron.util :as util]
            [mikron.util.math :as math]
            #?(:clj [mikron.compile-util :as compile-util]))
  #?(:clj  (:import [java.nio ByteBuffer ByteOrder])
                    ;[mikron UnsafeBuffer])
     :cljs (:require-macros
            [mikron.buffer :refer
             [definterface+ with-delta
              ?bit-pos !bit-pos ?bit-index !bit-index ?bit-value !bit-value
              ?byte !byte ?short !short ?int !int ?long !long
              ?float !float ?double !double ?char !char ?binary-n !binary-n
              ?pos !pos ?le !le ?binary-all ?byte-buffer ?bit-buffer]])))

#?(:cljs
   (extend-type js/ArrayBuffer
     ISeqable
     (-seq [this] (seq (.from js/Array (js/Int8Array. this))))))

#?(:clj ;; definterface+
   (defmacro definterface+ [name & ops]
     (let [no-meta    #(with-meta % nil)
           cljs?      (boolean (:ns &env))
           ops        (map (fn [[op-name args doc-string]]
                             (list op-name
                                   args
                                   (vec (cons 'this (map no-meta args)))
                                   (if doc-string [doc-string] [])))
                           ops)
           inner-form `(~(if cljs? `defprotocol `definterface)
                        ~name
                        ~@(map (fn [[op-name args args' doc-string]]
                                 (if cljs?
                                   `(~(no-meta op-name)
                                     ~args'
                                     ~@doc-string)
                                   `(~(with-meta (munge op-name) (meta op-name))
                                     ~args
                                     ~@doc-string)))
                               ops))]
       (if cljs?
         inner-form
         `(do ~inner-form
              ~@(map (fn [[op-name args args' doc-string]]
                       `(defn ~(no-meta op-name)
                          {:inline (fn ~args'
                                     `(~'~(symbol (str "." (munge op-name)))
                                       ~~@args'))}
                          ~(with-meta (vec (cons (with-meta 'this {:tag name})
                                                 args))
                                      (meta op-name))
                          (~(symbol (str "." (munge op-name)))
                           ~@args')))
                     ops))))))

(definterface+ BitBufferOps
  (^long   ?bit-pos* [])
  (^Object !bit-pos* [^long value])

  (^long   ?bit-index* [])
  (^Object !bit-index* [^long value])

  (^long   ?bit-value* [])
  (^Object !bit-value* [^long value]))

(deftype BitBufferImpl [^long ^:unsynchronized-mutable value
                        ^long ^:unsynchronized-mutable index
                        ^long ^:unsynchronized-mutable pos]
  BitBufferOps
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

(definterface+ ByteBufferOps
  (^long   ?byte*     [])
  (^long   ?short*    [])
  (^long   ?int*      [])
  (^long   ?long*     [])
  (^double ?float*    [])
  (^double ?double*   [])
  (^bytes  ?binary-n* [^long n])

  (^Object !byte*     [^long   value])
  (^Object !short*    [^long   value])
  (^Object !int*      [^long   value])
  (^Object !long*     [^long   value])
  (^Object !float*    [^double value])
  (^Object !double*   [^double value])
  (^Object !binary-n* [^bytes  value])

  (^long   ?pos* [])
  (^Object !pos* [^long pos])
  (^Object ?le*  [])
  (^Object !le*  [^Object value])

  (^bytes ?binary-all* []))

#?(:clj  ;; impl: java.nio.ByteBuffer
   (deftype ByteBufferImplNio [^ByteBuffer buffer]
     ByteBufferOps
     (?byte* [_]
       (unchecked-long (.get buffer)))
     (?short* [_]
       (unchecked-long (.getShort buffer)))
     (?int* [_]
       (.getInt buffer))
     (?long* [_]
       (.getLong buffer))
     (?float* [_]
       (double (.getFloat buffer)))
     (?double* [_]
       (.getDouble buffer))
     (?binary-n* [_ n]
       (let [value (byte-array n)]
         (.get buffer value)
         value))

     (!byte* [_ value]
       (.put buffer (unchecked-byte value)))
     (!short* [_ value]
       (.putShort buffer (unchecked-short value)))
     (!int* [_ value]
       (.putInt buffer (unchecked-int value)))
     (!long* [_ value]
       (.putLong buffer value))
     (!float* [_ value]
       (.putFloat buffer (unchecked-float value)))
     (!double* [_ value]
       (.putDouble buffer value))
     (!binary-n* [_ value]
       (.put buffer value))

     (?pos* [_]
       (.position buffer))
     (!pos* [_ value]
       (.position buffer (unchecked-int value)))
     (?le* [_]
       (identical? ByteOrder/LITTLE_ENDIAN (.order buffer)))
     (!le* [_ value]
       (.order buffer (if value ByteOrder/LITTLE_ENDIAN ByteOrder/BIG_ENDIAN)))

     (?binary-all* [_]
       (let [bytes (byte-array (.position buffer))]
         (.position buffer (unchecked-int 0))
         (.get buffer bytes)
         bytes))))

#?(:clj
   (defmacro with-delta [pos delta body]
     (compile-util/with-gensyms [value]
       `(let [~value ~body]
          (set! ~pos (unchecked-add ~pos ~delta))
          ~value))))

#?(:cljs ;; impl: DataView
   (deftype ByteBufferImplDataView [data-view
                                    int8-array
                                    ^long    ^:unsynchronized-mutable pos
                                    ^boolean ^:unsynchronized-mutable le]
     ByteBufferOps
     (?byte* [_]
       (with-delta pos 1 (.getInt8 data-view pos)))
     (?short* [_]
       (with-delta pos 2 (.getInt16 data-view pos le)))
     (?int* [_]
       (with-delta pos 4 (.getInt32 data-view pos le)))
     (?long* [this]
       (math/to (let [u (?int* this)
                      v (?int* this)]
                  (if le (math/from u v) (math/from v u)))))
     (?float* [_]
       (with-delta pos 4 (.getFloat32 data-view pos le)))
     (?double* [_]
       (with-delta pos 8 (.getFloat64 data-view pos le)))
     (?binary-n* [_ n]
       (let [from pos
             to   (unchecked-add pos n)]
         (set! pos to)
         (.-buffer (.slice int8-array from to))))

     (!byte* [_ value]
       (with-delta pos 1 (.setInt8 data-view pos value)))
     (!short* [_ value]
       (with-delta pos 2 (.setInt16 data-view pos value le)))
     (!int* [_ value]
       (with-delta pos 4 (.setInt32 data-view pos value le)))
     (!long* [this value]
       (let [value (math/from value)
             low   (.getLowBits value)
             high  (.getHighBits value)]
         (if le
           (do (!int* this low)  (!int* this high))
           (do (!int* this high) (!int* this low)))))
     (!float* [_ value]
       (with-delta pos 4 (.setFloat32 data-view pos value le)))
     (!double* [_ value]
       (with-delta pos 8 (.setFloat64 data-view pos value le)))
     (!binary-n* [_ value]
       (do (.set int8-array (js/Int8Array. value) pos)
           (set! pos (unchecked-add pos (.-byteLength value)))))

     (?pos* [_]
       pos)
     (!pos* [_ value]
       (set! pos value))
     (?le* [_]
       le)
     (!le* [_ value]
       (set! le value))

     (?binary-all* [_]
       (.-buffer (.slice int8-array 0 pos)))))

#?(:cljs ;; impl: Node.js Buffer
   (deftype ByteBufferImplNodeBuffer [buffer
                                      ^long    ^:unsynchronized-mutable pos
                                      ^boolean ^:unsynchronized-mutable le]
     ByteBufferOps
     (?byte* [_]
       (with-delta pos 1 (.readInt8 buffer pos true)))
     (?short* [_]
       (with-delta pos 2 (if le (.readInt16LE buffer pos true) (.readInt16BE buffer pos true))))
     (?int* [_]
       (with-delta pos 4 (if le (.readInt32LE buffer pos true) (.readInt32BE buffer pos true))))
     (?long* [this]
       (math/to (let [u (?int* this)
                      v (?int* this)]
                  (if le (math/from u v) (math/from v u)))))
     (?float* [_]
       (with-delta pos 4 (if le (.readFloatLE buffer pos true) (.readFloatBE buffer pos true))))
     (?double* [_]
       (with-delta pos 8 (if le (.readDoubleLE buffer pos true) (.readDoubleBE buffer pos true))))
     (?binary-n* [_ n]
       (let [from pos
             to   (unchecked-add pos n)]
         (set! pos to)
         (.slice (.-buffer buffer) from to)))

     (!byte* [_ value]
       (with-delta pos 1 (.writeInt8 buffer value pos true)))
     (!short* [_ value]
       (with-delta pos 2 (if le (.writeInt16LE buffer value pos true) (.writeInt16BE buffer value pos true))))
     (!int* [_ value]
       (with-delta pos 4 (if le (.writeInt32LE buffer value pos true) (.writeInt32BE buffer value pos true))))
     (!long* [this value]
       (let [value (math/from value)
             low   (.getLowBits value)
             high  (.getHighBits value)]
         (if le
           (do (!int* this low)  (!int* this high))
           (do (!int* this high) (!int* this low)))))
     (!float* [_ value]
       (with-delta pos 4 (if le (.writeFloatLE buffer value pos true) (.writeFloatBE buffer value pos true))))
     (!double* [_ value]
       (with-delta pos 8 (if le (.writeDoubleLE buffer value pos true) (.writeDoubleBE buffer value pos true))))
     (!binary-n* [this value]
       (do (.copy (.from js/Buffer value) buffer pos)
           (set! pos (unchecked-add pos (.-byteLength value)))))

     (?pos* [_]
       pos)
     (!pos* [_ value]
       (set! pos value))
     (?le* [_]
       le)
     (!le* [_ value]
       (set! le value))

     (?binary-all* [_]
       (.slice (.-buffer buffer) 0 pos))))

(deftype Buffer [^{:tag #?(:clj `BitBufferOps  :cljs nil)} bit-buffer
                 ^{:tag #?(:clj `ByteBufferOps :cljs nil)} byte-buffer])

#?(:clj  ;; Delegated ops
   (do (defmacro ?byte-buffer [buffer]
         (vary-meta `(.-byte-buffer ~(with-meta buffer {:tag `Buffer}))
                    assoc :tag `ByteBufferOps))

       (defmacro ?bit-buffer [buffer]
         (vary-meta `(.-bit-buffer ~(with-meta buffer {:tag `Buffer}))
                    assoc :tag `BitBufferOps))

       (defmacro ?bit-pos [buffer]
         `(?bit-pos* (?bit-buffer ~buffer)))

       (defmacro !bit-pos [buffer value]
         `(!bit-pos* (?bit-buffer ~buffer) ~value))

       (defmacro ?bit-index [buffer]
         `(?bit-index* (?bit-buffer ~buffer)))

       (defmacro !bit-index [buffer value]
         `(!bit-index* (?bit-buffer ~buffer) ~value))

       (defmacro ?bit-value [buffer]
         `(?bit-value* (?bit-buffer ~buffer)))

       (defmacro !bit-value [buffer value]
         `(!bit-value* (?bit-buffer ~buffer) ~value))

       (defmacro ?byte [buffer]
         `(?byte* (?byte-buffer ~buffer)))

       (defmacro ?short [buffer]
         `(?short* (?byte-buffer ~buffer)))

       (defmacro ?int [buffer]
         `(?int* (?byte-buffer ~buffer)))

       (defmacro ?long [buffer]
         `(?long* (?byte-buffer ~buffer)))

       (defmacro ?float [buffer]
         `(?float* (?byte-buffer ~buffer)))

       (defmacro ?double [buffer]
         `(?double* (?byte-buffer ~buffer)))

       (defmacro ?char [buffer]
         `(?char* (?byte-buffer ~buffer)))

       (defmacro ?binary-n [buffer n]
         `(?binary-n* (?byte-buffer ~buffer) ~n))

       (defmacro !byte [buffer value]
         `(!byte* (?byte-buffer ~buffer) ~value))

       (defmacro !short [buffer value]
         `(!short* (?byte-buffer ~buffer) ~value))

       (defmacro !int [buffer value]
         `(!int* (?byte-buffer ~buffer) ~value))

       (defmacro !long [buffer value]
         `(!long* (?byte-buffer ~buffer) ~value))

       (defmacro !float [buffer value]
         `(!float* (?byte-buffer ~buffer) ~value))

       (defmacro !double [buffer value]
         `(!double* (?byte-buffer ~buffer) ~value))

       (defmacro !char [buffer value]
         `(!char* (?byte-buffer ~buffer) ~value))

       (defmacro !binary-n [buffer value]
         `(!binary-n* (?byte-buffer ~buffer) ~value))

       (defmacro ?pos [buffer]
         `(?pos* (?byte-buffer ~buffer)))

       (defmacro !pos [buffer pos]
         `(!pos* (?byte-buffer ~buffer) ~pos))

       (defmacro ?le [buffer]
         `(?le* (?byte-buffer ~buffer)))

       (defmacro !le [buffer value]
         `(!le* (?byte-buffer ~buffer) ~value))

       (defmacro ?binary-all [buffer]
         `(?binary-all* (?byte-buffer ~buffer)))))

(defn ?ubyte [^Buffer buffer]
   (bit-and (?byte buffer) 0xFF))

(defn !ubyte [^Buffer buffer ^long value]
  (!byte buffer (unchecked-byte (bit-and value 0xFF))))

(defn ?ushort [^Buffer buffer]
  (bit-and (?short buffer) 0xFFFF))

(defn !ushort [^Buffer buffer ^long value]
  (!short buffer (unchecked-short (bit-and value 0xFFFF))))

(defn ?uint [^Buffer buffer]
  #?(:clj  (bit-and (?int buffer) 0xFFFFFFFF)
     :cljs (unsigned-bit-shift-right (?int buffer) 0)))

(defn !uint [^Buffer buffer ^long value]
  (!int buffer (unchecked-int (bit-and value 0xFFFFFFFF))))

(defn !byte-at [^Buffer buffer ^long pos ^long value]
  (let [pos' (?pos buffer)]
    (doto buffer
          (!pos pos)
          (!byte value)
          (!pos pos'))))

(defn ?boolean [^Buffer buffer]
  (when (== 0 (rem (?bit-index buffer) 8))
    (!bit-value buffer (?byte buffer)))
  (let [index (?bit-index buffer)]
    (!bit-index buffer (unchecked-inc index))
    (not (== 0 (bit-and (?bit-value buffer)
                        (bit-shift-left 1 (rem index 8)))))))

(defn !boolean [^Buffer buffer value]
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

(defn ?varint ^long [^Buffer buffer]
  (loop [value math/c0
         shift (long 0)]
    (if (>= shift 64)
      (throw (util/exception "Malformed varint!"))
      (let [byte  (math/from (?byte buffer))
            value (-> (math/and byte math/c127)
                      (math/shift-left shift)
                      (math/or value))]
        (if (math/zero? (math/and byte math/c128))
          (math/to (math/zigzag-decode value))
          (recur value (unchecked-add shift 7)))))))

(defn !varint [^Buffer buffer ^long value]
  (loop [value (math/zigzag-encode (math/from value))]
    (if (math/zero? (math/and value math/c-128))
      (!byte buffer (math/to value))
      (do (!byte buffer (-> value
                            (math/and math/c127)
                            (math/or math/c128)
                            (math/to)))
          (recur (math/unsigned-shift-right value 7))))))

(defn ?binary ^bytes [^Buffer buffer]
  (?binary-n buffer (?varint buffer)))

(defn !binary [^Buffer buffer ^bytes value]
  (doto buffer
        (!varint #?(:clj  (alength value)
                    :cljs (.-byteLength value)))
        (!binary-n value)))

(defn !reset [^Buffer buffer]
  (doto buffer
    (!pos 0)
    (!bit-pos -1)
    (!bit-value 0)
    (!bit-index 0)))

(defn !finalize [^Buffer buffer]
  (let [bit-pos (?bit-pos buffer)]
    (when-not (== -1 bit-pos)
      (!byte-at buffer bit-pos (?bit-value buffer)))))

(defn wrap ^Buffer [^bytes binary]
  (Buffer. (BitBufferImpl. 0 0 -1)
           #?(:clj  (ByteBufferImplNio. (ByteBuffer/wrap binary))
              :cljs (if (util/node-env?)
                      (ByteBufferImplNodeBuffer. (.from js/Buffer binary) 0 true)
                      (ByteBufferImplDataView. (js/DataView. binary)
                                               (js/Int8Array. binary)
                                               0 true)))))

(defn allocate ^Buffer [^long size]
  (Buffer. (BitBufferImpl. 0 0 -1)
           #?(:clj  (ByteBufferImplNio. (.order (ByteBuffer/allocateDirect size) (ByteOrder/nativeOrder)))
              :cljs (if (util/node-env?)
                      (ByteBufferImplNodeBuffer. (.allocUnsafe js/Buffer size) 0 true)
                      (let [array-buffer (js/ArrayBuffer. size)]
                        (ByteBufferImplDataView. (js/DataView. array-buffer)
                                                 (js/Int8Array. array-buffer)
                                                 0 true))))))

(defn !headers [^Buffer buffer diffed?]
  (doto buffer
    (!reset)
    (!boolean (?le buffer))
    (!boolean diffed?)))

(defn ?headers [^Buffer buffer]
  (!le buffer (?boolean buffer))
  {:diffed? (?boolean buffer)})
