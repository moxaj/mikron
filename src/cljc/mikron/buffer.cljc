(ns mikron.buffer
  "Buffer interfaces, implementations and derived operations."
  (:require [mikron.common :as common]
            #?(:cljs cljsjs.bytebuffer))
  #?(:clj  (:import [java.nio ByteBuffer ByteOrder])
     :cljs (:require-macros
            [mikron.buffer :refer
             [definterface+
              ?bit-pos !bit-pos ?bit-index !bit-index ?bit-value !bit-value
              ?byte !byte ?short !short ?int !int ?long !long
              ?float !float ?double !double ?char !char ?binary-n !binary-n
              ?pos !pos ?le !le ?binary-all ?byte-buffer ?bit-buffer]])))

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

(deftype BitBufferImpl [^{:tag long :unsynchronized-mutable true} value
                        ^{:tag long :unsynchronized-mutable true} index
                        ^{:tag long :unsynchronized-mutable true} pos]
  BitBufferOps
  (?bit-pos* [_]        pos)
  (!bit-pos* [_ value'] (set! pos #?(:clj value' :cljs (long value'))))

  (?bit-index* [_]        index)
  (!bit-index* [_ value'] (set! index #?(:clj value' :cljs (long value'))))

  (?bit-value* [_]        value)
  (!bit-value* [_ value'] (set! value #?(:clj value' :cljs (long value')))))

(definterface+ ByteBufferOps
  (^long   ?byte*     [])
  (^long   ?short*    [])
  (^long   ?int*      [])
  (^long   ?long*     [])
  (^Object ?float*    [])
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
     (?byte*     [_]   (long (.get buffer)))
     (?short*    [_]   (long (.getShort buffer)))
     (?int*      [_]   (.getInt buffer))
     (?long*     [_]   (.getLong buffer))
     (?float*    [_]   (.getFloat buffer))
     (?double*   [_]   (.getDouble buffer))
     (?binary-n* [_ n] (let [value (byte-array n)]
                         (.get buffer value)
                         value))

     (!byte*     [_ value] (.put buffer (byte value)))
     (!short*    [_ value] (.putShort buffer value))
     (!int*      [_ value] (.putInt buffer value))
     (!long*     [_ value] (.putLong buffer value))
     (!float*    [_ value] (.putFloat buffer value))
     (!double*   [_ value] (.putDouble buffer value))
     (!binary-n* [_ value] (.put buffer value))

     (?pos* [_]       (.position buffer))
     (!pos* [_ value] (.position buffer value))
     (?le*  [_]       (identical? ByteOrder/LITTLE_ENDIAN (.order buffer)))
     (!le*  [_ value] (.order buffer (if value
                                       ByteOrder/LITTLE_ENDIAN
                                       ByteOrder/BIG_ENDIAN)))

     (?binary-all* [_] (let [bytes (byte-array (.position buffer))]
                         (.position buffer 0)
                         (.get buffer bytes)
                         bytes))))

#?(:cljs ;; impl: ByteBuffer.js
   (deftype ByteBufferImplJs [^ByteBuffer buffer]
     ByteBufferOps
     (?byte*     [_]   (.readInt8 buffer))
     (?short*    [_]   (.readInt16 buffer))
     (?int*      [_]   (.readInt32 buffer))
     (?long*     [_]   (.toNumber (.readInt64 buffer)))
     (?float*    [_]   (.readFloat32 buffer))
     (?double*   [_]   (.readFloat64 buffer))
     (?binary-n* [_ n] (let [offset  (.-offset buffer)
                             offset' (+ offset n)
                             binary  (.toArrayBuffer (.copy buffer offset (+ offset n)))]
                         (set! (.-offset buffer) offset')
                         binary))

     (!byte*     [_ value] (.writeInt8 buffer value))
     (!short*    [_ value] (.writeInt16 buffer value))
     (!int*      [_ value] (.writeInt32 buffer value))
     (!long*     [_ value] (.writeInt64 buffer value))
     (!float*    [_ value] (.writeFloat32 buffer value))
     (!double*   [_ value] (.writeFloat64 buffer value))
     (!binary-n* [_ value] (.append buffer value))

     (?pos* [_]       (.-offset buffer))
     (!pos* [_ value] (set! (.-offset buffer) value))
     (?le*  [_]       (= true (.-littleEndian buffer)))
     (!le*  [_ value] (set! (.-littleEndian buffer) value))

     (?binary-all* [_] (.toArrayBuffer (.copy buffer 0 (.-offset buffer))))))

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
  (!byte buffer (unchecked-byte (bit-and (long value) 0xFF))))

(defn ?ushort [^Buffer buffer]
  (bit-and (?short buffer) 0xFFFF))

(defn !ushort [^Buffer buffer ^long  value]
  (!short buffer (unchecked-short (bit-and (long value) 0xFFFF))))

(defn ?uint [^Buffer buffer]
  (bit-and (?int buffer) 0xFFFFFFFF))

(defn !uint [^Buffer buffer ^long  value]
  (!int buffer (unchecked-int (bit-and (long value) 0xFFFFFFFF))))

(defn !byte-at [^Buffer buffer ^long pos ^long value]
  (let [pos' (?pos buffer)]
    (doto buffer
          (!pos pos)
          (!byte value)
          (!pos pos'))))

(defn ?boolean [^Buffer buffer]
  (when (zero? (rem (?bit-index buffer) 8))
    (!bit-value buffer (?byte buffer)))
  (let [index (?bit-index buffer)]
    (!bit-index buffer (inc index))
    (not= 0 (bit-and (?bit-value buffer)
                     (bit-shift-left 1 (rem index 8))))))

(defn !boolean [^Buffer buffer value]
  (when (zero? (rem (?bit-index buffer) 8))
    (when (pos? (?bit-index buffer))
      (!byte-at buffer (?bit-pos buffer) (?bit-value buffer)))
    (!bit-pos buffer (?pos buffer))
    (!bit-value buffer 0)
    (!pos buffer (inc (?bit-pos buffer))))
  (let [index (?bit-index buffer)
        mask  (bit-shift-left 1 (rem index 8))]
    (!bit-index buffer (inc index))
    (!bit-value buffer
                (unchecked-byte (if value
                                  (bit-or (?bit-value buffer) mask)
                                  (bit-and (?bit-value buffer) (bit-not mask)))))))

(defn ?varint ^long [^Buffer buffer]
  (let [negative? (?boolean buffer)]
    (loop [value 0, shift 0]
      (if (>= shift 64)
        (throw (common/exception "Malformed varint!"))
        (let [b      (?byte buffer)
              value' (-> (bit-and b 127)
                         (bit-shift-left shift)
                         (unchecked-long)
                         (bit-or value))]
          (if (zero? (bit-and b 128))
            (if negative?
              (dec (- value'))
              value')
            (recur value' (unchecked-add shift 7))))))))

(defn !varint [^Buffer buffer ^long value]
  (let [negative? (neg? value)]
    (!boolean buffer negative?)
    (loop [value (if negative? (- (inc value)) value)]
      (if (zero? (bit-and value -128))
        (!byte buffer value)
        (do (!byte buffer (-> (unchecked-int value)
                              (bit-and 127)
                              (bit-or 128)
                              (unchecked-byte)))
            (recur (unsigned-bit-shift-right value 7)))))))

(defn ?binary ^bytes [^Buffer buffer]
  (?binary-n buffer (?varint buffer)))

(defn !binary [^Buffer buffer ^bytes value]
  (doto buffer
        (!varint #?(:clj  (count value)
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
    (when (not= -1 bit-pos)
      (!byte-at buffer bit-pos (?bit-value buffer)))))

(defn wrap ^Buffer [^bytes binary]
  (Buffer. (BitBufferImpl. 0 0 -1)
           #?(:clj  (ByteBufferImplNio. (ByteBuffer/wrap binary))
              :cljs (ByteBufferImplJs. (.wrap js/ByteBuffer binary)))))

(defn allocate ^Buffer [^long size]
  (Buffer. (BitBufferImpl. 0 0 -1)
           #?(:clj  (ByteBufferImplNio. (.order (ByteBuffer/allocateDirect size) (ByteOrder/nativeOrder)))
              :cljs (ByteBufferImplJs. (.allocate js/ByteBuffer size)))))

(defn !headers [^Buffer buffer ^long schema-id diffed?]
  (doto buffer
        (!reset)
        (!boolean (?le buffer))
        (!boolean diffed?)
        (!varint schema-id)))

(defn ?headers [^Buffer buffer]
  (!le buffer (?boolean buffer))
  {:diffed?   (?boolean buffer)
   :schema-id (?varint buffer)})

(defonce ^{:dynamic true :tag Buffer} *buffer* (allocate 10000))
