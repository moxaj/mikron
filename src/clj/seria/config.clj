(ns seria.config
  (:require [seria.util :refer [bimap]]
            [seria.validate :refer [validate-schemas validate-diff-opts validate-interp-opts]]
            [seria.analyze :refer [find-enum-values find-multi-cases]]
            [seria.diff :refer [make-differ make-undiffer]]
            [seria.pack :refer [make-packer make-unpacker]]
            [seria.interp :refer [make-interper]]))

(defn make-processors [schemas config]
  (->> (keys schemas)
       (map (fn [schema]
              (let [schema-def (schemas schema)]
                [schema {:packer   (make-packer schema-def config)
                         :unpacker (make-unpacker schema-def config)
                         :differ   (make-differ schema-def config)
                         :undiffer (make-undiffer schema-def config)
                         :interper (make-interper schema-def config)}])))
       (into {})))

(defn eval-processors [processors]
  (->> processors
       (map (fn [[key value]]
              [key (eval value)]))
       (into {})))

(defn make-initial-config [{:keys [schemas diff-opts interp-opts] :or {diff-opts   {}
                                                                       interp-opts {}}}]
  (let [schemas     (validate-schemas schemas)
        diff-opts   (validate-diff-opts diff-opts)
        interp-opts (validate-interp-opts interp-opts)
        {schema-map :map}                 (bimap (keys schemas))
        {enum-map :map enum-size :size}   (bimap (find-enum-values schemas))
        {multi-map :map multi-size :size} (bimap (find-multi-cases schemas))]
    {:schemas     schemas
     :schema-map  schema-map
     :enum-map    enum-map
     :enum-size   enum-size
     :multi-map   multi-map
     :multi-size  multi-size
     :diff-opts   diff-opts
     :interp-opts interp-opts}))

(defn make-config [& args]
  (let [{:keys [schemas] :as config} (make-initial-config args)]
    `(assoc ~config :processors ~(make-processors schemas config)
                    :state      (atom {:fn-map {}}))))

(defn make-test-config [& args]
  (let [{:keys [schemas] :as config} (make-initial-config args)
        processors (make-processors schemas config)]
    (assoc config :sources    processors
                  :processors (eval-processors processors)
                  :state      (atom {:fn-map {}}))))
