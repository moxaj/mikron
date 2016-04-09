(ns seria.config
  "Pre-compile-time config generation."
  (:require [seria.util :as util]
            [seria.validate :as validate]
            [seria.diff :as diff]
            [seria.pack :as pack]
            [seria.unpack :as unpack]
            [seria.interp :as interp]
            [seria.gen :as gen]))

(defn multi-cases [schemas]
  (->> schemas
       (util/find-by (fn [form]
                       (and (vector? form)
                            (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn enum-values [schemas]
  (->> schemas
       (util/find-by (fn [form]
                       (and (vector? form)
                            (= :enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

(defn make-processors [processor-types config]
  (let [need? (set processor-types)]
    (->> (:schemas config)
         (map (fn [[schema-name schema]]
                [schema-name (cond-> {}
                               (need? :pack)
                               (assoc :pack   (pack/make-packer schema config false)
                                      :unpack (unpack/make-unpacker schema config false))

                               (need? :diff)
                               (assoc :diff   (diff/make-differ schema config)
                                      :undiff (diff/make-undiffer schema config))

                               (and (need? :pack)
                                    (need? :diff))
                               (assoc :diffed-pack   (pack/make-packer schema config true)
                                      :diffed-unpack (unpack/make-unpacker schema config true))

                               (need? :gen)
                               (assoc :gen (gen/make-generator schema config))

                               (need? :interp)
                               (assoc :interp (interp/make-interper schema config)))]))
         (into {}))))

(defn make-config [& {schemas :schemas eq-ops :eq-ops processor-types :processors}]
  (let [schemas         (validate/validate-schemas schemas)
        processor-types (validate/validate-processor-types processor-types)
        config          {:schemas    schemas
                         :schema-map (util/bimap (keys schemas))
                         :enum-map   (util/bimap (enum-values schemas))
                         :multi-map  (util/bimap (multi-cases schemas))}]
    (assoc config :processors (make-processors processor-types config)
                  :state      `(atom {}))))

(defn make-test-config [& args]
  (let [raw-config (apply make-config args)]
    (assoc (eval raw-config) :sources (:processors raw-config))))
