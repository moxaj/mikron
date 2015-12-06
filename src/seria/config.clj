(ns seria.config
  (:require [seria.buffer :refer [make-wbuffer]]
            [seria.util :refer [unique-long bimap]]
            [seria.validate :refer [validate]]
            [seria.analyze :refer [find-enum-values find-multi-cases find-embedded-fns]]
            [seria.delta :refer [make-differ make-undiffer]]
            [seria.serialize :refer [make-packer make-unpacker global-embed-map]]))

(def ^:const default-max-bits 10000)
(def ^:const default-max-bytes 10000)

(defn make-processors
  [schemas config]
  (->> (keys schemas)
       (map (fn [schema]
              [schema {:packer   (make-packer schema config)
                       :unpacker (make-unpacker schema config)
                       :differ   (make-differ schema config)
                       :undiffer (make-undiffer schema config)}]))
       (into {})))

(defn eval-processors [processors]
  (->> processors
       (map (fn [[key value]] [key (eval value)]))
       (into {})))

(defn make-initial-config [{:keys [max-bit-length max-bytes-length schemas schema-selector delta-strategy]
                            :or   {max-bit-length   default-max-bits
                                   max-bytes-length default-max-bytes
                                   schema-selector  (constantly nil)
                                   delta-strategy   (constantly [:incremental 30])}}]
  (let [schemas (validate schemas)
        {schema-map :map} (bimap (keys schemas))
        {enum-map :map enum-size :size} (bimap (find-enum-values schemas))
        {multi-map :map multi-size :size} (bimap (find-multi-cases schemas))]
    {:config           {:config-id       (unique-long)
                        :schemas         schemas
                        :schema-map      schema-map
                        :schema-selector schema-selector
                        :enum-map        enum-map
                        :enum-size       enum-size
                        :multi-map       multi-map
                        :multi-size      multi-size
                        :delta-map       (atom {})
                        :delta-groups    (atom {})
                        :delta-strategy  delta-strategy}
     :max-bit-length   max-bit-length
     :max-bytes-length max-bytes-length
     :embed-map        (:map (bimap (find-embedded-fns schemas)))}))

(defn make-config [& args]
  (let [{:keys [config max-bit-length max-bytes-length embed-map]} (make-initial-config args)
        {:keys [config-id schemas]} config]
    `(do (swap! global-embed-map assoc ~config-id ~embed-map)
         (assoc ~config :wbuffer (make-wbuffer ~max-bit-length ~max-bytes-length)
                        :processors ~(make-processors schemas config)))))

(defn make-test-config [& args]
  (let [{:keys [config max-bit-length max-bytes-length embed-map]} (make-initial-config args)
        {:keys [config-id schemas]} config]
    (do (swap! global-embed-map assoc config-id embed-map)
        (let [processors (make-processors schemas config)]
          (assoc config :wbuffer (make-wbuffer max-bit-length max-bytes-length)
                        :sources processors
                        :processors (eval-processors processors))))))