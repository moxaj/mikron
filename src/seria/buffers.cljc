(ns seria.buffers
  (:import [java.nio ByteBuffer])
  (:require [seria.utils :refer :all]))

(set! *warn-on-reflection* true)

(defprotocol HybridBuffer
  (read! [this type position])
  (write! [this data type position]))

(do #?(:clj  (extend-type ByteBuffer
               HybridBuffer
               (read! [this type position]
                 (let [p @position]
                   (swap! position + (primitive-size type))
                   (case type
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
               (write! [this data type position]
                 (let [p @position]
                   (swap! position + (primitive-size type))
                   (case type
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
               (read! [this type position]
                 (let [p @position]
                   (swap! position (+ p (primitive-size type)))
                   (case type
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
               (write! [this data type position]
                 (let [p @position]
                   (swap! position (+ p (primitive-size type)))
                   (case type
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
  (let [size (+ max-bits max-bytes)]
    {:buffer        #?(:clj  (ByteBuffer/allocate size)
                       :cljs (js/DataView. (js/ArrayBuffer. size)))
     :bit-position  (atom 0)
     :byte-position (atom 0)
     :max-bits      max-bits}))

(defn reset-wbuffer! [{:keys [bit-position byte-position max-bits]}]
  (reset! bit-position 16)
  (reset! byte-position (+ 2 max-bits)))

(defn unwrap-wbuffer [{:keys [bit-position byte-position max-bits buffer]}]
  (let [bits-length  (int (Math/ceil (/ (- @bit-position 16) 8)))
        bytes-length (- @byte-position max-bits 2)
        total-length (+ 4 bits-length bytes-length)]
    #?(:clj  (let [buffer-bytes (.array ^ByteBuffer buffer)
                   bytes        (byte-array total-length)]
               (System/arraycopy buffer-bytes 0 bytes 0 2)
               (System/arraycopy (short->bytes bits-length) 0 bytes 2 2)
               (System/arraycopy buffer-bytes 2 bytes 4 bits-length)
               (System/arraycopy buffer-bytes (+ 2 max-bits) bytes (+ 4 bits-length) bytes-length)
               bytes)
       :cljs (let [array-buffer (.-buffer buffer)
                   byte-view    (js/Int8Array. total-length)]
               (.set byte-view (js/Int8Array. (.slice array-buffer 0 2)) 0)
               (.set byte-view (short->bytes bits-length) 2)
               (.set byte-view (js/Int8Array. (.slice array-buffer 2 (+ 2 bits-length))) 4)
               (.set byte-view (js/Int8Array. (.slice array-buffer max-bits (+ max-bits bytes-length)))
                     (+ 4 bits-length))
               (.-buffer byte-view)))))

(defn wrap-bytes [bytes]
  (let [buffer #?(:clj (ByteBuffer/wrap bytes)
                  :cljs (js/DataView. bytes))
        schema-code    (read! buffer :s/short (atom 0))
        bit-length     (read! buffer :s/short (atom 2))]
    [schema-code
     {:buffer        buffer
      :bit-position  (atom 32)
      :byte-position (atom (+ 4 bit-length))}]))