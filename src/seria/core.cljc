(ns seria.core
  #?(:clj
     (:import [java.nio ByteBuffer]))
  (:require [seria.buffers :refer :all]
            [seria.serialization :refer :all]))

(set! *warn-on-reflection* true)

(defn bimap [items]
  (->> items
       (map-indexed #(vector (- %1 32768) %2))
       (mapcat (fn [[a b]] [[a b] [b a]]))
       (into {})))

(defn make-config [schemas args]
  (let [{:keys [keywords max-bits max-bytes]
         :or   {keywords [] max-bits 10000 max-bytes 10000}} args
        config     {:schemas     schemas
                    :wbuffer     (make-wbuffer max-bits max-bytes)
                    :schema-map  (bimap (keys schemas))
                    :keyword-map (bimap keywords)}
        processors (into {} (for [schema (keys schemas)]
                              [schema {:serializer   (eval (make-serializer schema config))
                                       :deserializer (eval (make-deserializer schema config))}]))]
    (assoc config :processors processors)))

(defmacro defconfig [name schemas args]
  `(let [schemas# ~schemas
         args#    ~args]
     (def ~name (make-config schemas# args#))))

(defn serialize
  [data schema {:keys [processors wbuffer schema-map]}]
  (when-let [serialize! (get-in processors [schema :serializer])]
    (let [{:keys [buffer bit-position byte-position]} wbuffer]
      (reset-wbuffer! wbuffer)
      (write! buffer :s/short (volatile! 0) (schema-map schema))
      (serialize! data buffer bit-position byte-position)
      (unwrap-wbuffer wbuffer))))

(defn deserialize
  [bytes {:keys [processors schema-map]}]
  (let [[schema-code {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)]
    (when-let [deserialize! (get-in processors [(get schema-map schema-code) :deserializer])]
      (deserialize! buffer bit-position byte-position))))