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

(defn make-processors [schemas processors config]
  (let [need? (set processors)]
    (->> schemas
         (map (fn [[schema schema-def]]
                [schema (cond-> {}
                          (need? :pack)
                          (assoc :packer   (pack/make-packer schema-def config false)
                                 :unpacker (unpack/make-unpacker schema-def config false))

                          (need? :diff)
                          (assoc :differ   (diff/make-differ schema-def config)
                                 :undiffer (diff/make-undiffer schema-def config))

                          (and (need? :pack)
                               (need? :diff))
                          (assoc :diffed-packer   (pack/make-packer schema-def config true)
                                 :diffed-unpacker (unpack/make-unpacker schema-def config true))

                          (need? :gen)
                          (assoc :generator (gen/make-generator schema-def config))

                          (need? :interp)
                          (assoc :interper (interp/make-interper schema-def config)))]))
         (into {}))))

(defn make-config [& {:keys [schemas eq-ops processors] :or {eq-ops {}}}]
  (let [schemas    (validate/validate-schemas schemas)
        processors (validate/validate-processors processors)
        config     {:schemas    schemas
                    :schema-map (util/bimap (keys schemas))
                    :enum-map   (util/bimap (enum-values schemas))
                    :multi-map  (util/bimap (multi-cases schemas))
                    :eq-ops     eq-ops
                    :state      `(atom {})}]
    (assoc config :processors (make-processors schemas processors config))))

(defmacro defconfig [config-name & args]
  `(def ~config-name ~(apply make-config args)))

(defn make-test-config [& args]
  (let [raw-config (apply make-config args)]
    (assoc (eval raw-config) :sources (:processors raw-config))))
