(ns seria.config
  (:require [seria.util :as util]
            [seria.validate :as validate]
            [seria.diff :as diff]
            [seria.pack :as pack]
            [seria.interp :as interp]))

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

(defn make-processors [schemas config]
  (->> schemas
       (map (fn [[schema schema-def]]
              [schema {:packer          (pack/make-packer schema-def config false)
                       :diffed-packer   (pack/make-packer schema-def config true)
                       :unpacker        (pack/make-unpacker schema-def config false)
                       :diffed-unpacker (pack/make-unpacker schema-def config true)
                       :differ          (diff/make-differ schema-def config)
                       :undiffer        (diff/make-undiffer schema-def config)
                       :interper        (interp/make-interper schema-def config)}]))
       (into {})))

(defn make-config [& {:keys [schemas eq-ops] :or {eq-ops {}}}]
  (let [schemas      (validate/validate-schemas schemas)
        schema-bimap (util/bimap (keys schemas))
        enum-bimap   (util/bimap (enum-values schemas))
        multi-bimap  (util/bimap (multi-cases schemas))
        config       {:schemas      schemas
                      :schema-bimap schema-bimap
                      :enum-bimap   enum-bimap
                      :multi-bimap  multi-bimap
                      :eq-ops       eq-ops
                      :state        `(atom {})}]
    (assoc config :processors (make-processors schemas config))))

(defn make-test-config [& args]
  (let [raw-config (apply make-config args)]
    (assoc (eval raw-config) :sources (:processors raw-config))))
