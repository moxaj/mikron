(ns seria.core
  #?(:clj
     (:import [java.nio ByteBuffer]))
  (:require [seria.buffers :refer :all]
            [seria.serialization :refer :all]
            [seria.utils :refer :all]
            [seria.analyze :refer :all]))

(defn make-config [schemas & args]
  (let [{:keys [buffer-count max-bits max-bytes]
         :or   {buffer-count 4 max-bits 10000 max-bytes 10000}} (apply hash-map args)
        config-id  (unique-int)
        schemas    (validate schemas)
        config     {:schemas    schemas
                    :wbuffers   (repeatedly buffer-count #(make-wbuffer max-bits max-bytes))
                    :schema-map (bimap (keys schemas))
                    :enum-map   (bimap (find-enum-values schemas))
                    :multi-map  (bimap (find-multi-cases schemas))
                    :config-id  config-id}
        processors (do (swap! seria.serialization/non-embeddables
                              assoc config-id (bimap (find-non-embeddables schemas)))
                       (into {} (for [schema (keys schemas)]
                                  [schema {:serializer   (eval (make-serializer schema config))
                                           :deserializer (eval (make-deserializer schema config))}])))]
    (assoc config :processors processors)))

(defmacro defconfig [name schemas & args]
  `(let [schemas# ~schemas
         args#    (or ~args [])]
     (def ~name (apply make-config schemas# args#))))

(defn serialize
  ([data schema {:keys [wbuffers] :as config}]
   (serialize data schema config (first wbuffers)))
  ([data schema {:keys [processors schema-map]} wbuffer]
   (when-let [serialize! (get-in processors [schema :serializer])]
     (let [{:keys [buffer bit-position byte-position]} wbuffer]
       (reset-wbuffer! wbuffer)
       (write-short! buffer 0 (schema-map schema))
       (serialize! data buffer bit-position byte-position)
       (unwrap-wbuffer wbuffer)))))

(defn serialize-all [datas schema {:keys [wbuffers] :as config}]
  (->> datas
       (partition-all (/ (count datas) (count wbuffers)))
       (map (fn [wbuffer datas-partition]
              (future (run! (fn [data]
                              (serialize data schema config wbuffer))
                            datas-partition)))
            wbuffers)
       (map deref)
       (doall)))

(defn deserialize [bytes {:keys [processors schema-map]}]
  (let [[schema-code {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)
        schema (get schema-map schema-code)]
    (when-let [deserialize! (get-in processors [schema :deserializer])]
      [schema (deserialize! buffer bit-position byte-position)])))