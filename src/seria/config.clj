(ns seria.config
  (:require [seria.buffer :refer [make-wbuffer]]
            [seria.util :refer [unique-int bimap]]
            [seria.validate :refer [validate]]
            [seria.analyze :refer [find-enum-values find-multi-cases find-non-embeddables]]
            [seria.delta :refer [make-differ make-undiffer]]
            [seria.serialize :refer [make-packer make-unpacker global-embed-map]]))

(def ^:const default-max-bits 10000)
(def ^:const default-max-bytes 10000)

(defn make-processors
  ([schemas config]
   (make-processors schemas config false))
  ([schemas config evaled?]
   (let [post-fn (if evaled? eval identity)]
     (->> (keys schemas)
          (map (fn [schema]
                 [schema {:packer   (post-fn (make-packer schema config))
                          :unpacker (post-fn (make-unpacker schema config))
                          :differ   (post-fn (make-differ schema config))
                          :undiffer (post-fn (make-undiffer schema config))}]))
          (into {})))))

(defn make-initial-config [{:keys [max-bits max-bytes schemas]
                            :or   {max-bits  default-max-bits
                                   max-bytes default-max-bytes}}]
  (let [config-id (unique-int)
        schemas   (validate schemas)
        {schema-map :map} (bimap (keys schemas))
        {enum-map :map enum-size :size} (bimap (find-enum-values schemas))
        {multi-map :map multi-size :size} (bimap (find-multi-cases schemas))]
    {:config    {:config-id  config-id
                 :schemas    schemas
                 :schema-map schema-map
                 :enum-map   enum-map
                 :enum-size  enum-size
                 :multi-map  multi-map
                 :multi-size multi-size}
     :max-bits  max-bits
     :max-bytes max-bytes
     :embed-map (:map (bimap (find-non-embeddables schemas)))}))

(defn make-config [& args]
  (let [{:keys [config max-bits max-bytes embed-map]} (make-initial-config args)
        {:keys [config-id schemas]} config]
    `(do (swap! global-embed-map assoc ~config-id ~embed-map)
         (assoc ~config :wbuffer (make-wbuffer ~max-bits ~max-bytes)
                        :processors ~(make-processors schemas config)))))

(defn make-test-config [& args]
  (let [{:keys [config max-bits max-bytes embed-map]} (make-initial-config args)
        {:keys [config-id schemas]} config]
    (do (swap! global-embed-map assoc config-id embed-map)
        (assoc config :wbuffer (make-wbuffer max-bits max-bytes)
                      :processors (make-processors schemas config true)))))