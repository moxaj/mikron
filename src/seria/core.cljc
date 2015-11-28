(ns seria.core
  (:require [seria.buffer :refer [reset-wbuffer! unwrap-wbuffer
                                  wrap-bytes write-short! write-ushort!]]))

(defn diff [data-1 data-2 schema {:keys [processors]}]
  (when-let [diff! (get-in processors [schema :differ])]
    (diff! data-1 data-2)))

(defn undiff [data-1 data-2 schema {:keys [processors]}]
  (when-let [undiff! (get-in processors [schema :undiffer])]
    (undiff! data-1 data-2)))

(defn pack-with-buffer [data schema {:keys [processors schema-map]} wbuffer]
  (when-let [pack! (get-in processors [schema :packer])]
    (let [{:keys [buffer bit-position byte-position]} wbuffer]
      (reset-wbuffer! wbuffer)
      (write-ushort! buffer 0 (schema-map schema))
      (pack! data buffer bit-position byte-position)
      (unwrap-wbuffer wbuffer))))

(defn pack [data schema {:keys [wbuffers] :as config}]
  (pack-with-buffer data schema config (first wbuffers)))

(defn unpack [bytes {:keys [processors schema-map]}]
  (let [[schema-id {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)
        schema  (get schema-map schema-id)
        unpack! (get-in processors [schema :unpacker])]
    (when (and schema unpack!)
      [schema (unpack! buffer bit-position byte-position)])))