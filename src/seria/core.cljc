(ns seria.core
  #?(:clj
     (:import [java.nio ByteBuffer]))
  (:require [seria.buffers :refer :all]
            [seria.serialization :refer :all]
            [seria.utils :refer :all]
            [clojure.core.async :refer [>!! <!!]]))

(set! *warn-on-reflection* true)

(defn make-config [schemas args]
  (let [{:keys [keywords max-bits max-bytes]
         :or {keywords [] max-bits 10000 max-bytes 10000}} args
        config        {:schemas     schemas
                       :wbuffer     (make-wbuffer max-bits max-bytes)
                       :schema-map  (bimap (keys schemas))
                       :keyword-map (bimap keywords)}
        serializers   (into {} (for [schema (keys schemas)]
                                 [schema (eval (make-serializer schema config))]))
        deserializers (into {} (for [schema (keys schemas)]
                                 [schema (eval (make-deserializer schema config))]))]
    (assoc config :serializers serializers
                  :deserializers deserializers)))

(defmacro defconfig [name schemas args]
  `(let [schemas# ~schemas
         args#    ~args]
     (def ~name (make-config schemas# args#))))

(defn serialize
  [data schema {:keys [serializers wbuffer schema-map]}]
  (let [serialize! (get serializers schema)
        {:keys [buffer bit-position byte-position]} wbuffer]
    (reset-wbuffer! wbuffer)
    (write! buffer (schema-map schema) :s/short (atom 0))
    (serialize! data buffer bit-position byte-position)
    (unwrap-wbuffer wbuffer)))

(defn deserialize
  [bytes {:keys [deserializers schema-map]}]
  (let [[schema-code {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)]
    (when-let [deserialize! (get deserializers (get schema-map schema-code))]
      (deserialize! buffer bit-position byte-position))))