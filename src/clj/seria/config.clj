(ns seria.config
  (:require [seria.util :refer [bimap find-by]]
            [seria.validate :refer [validate-schemas]]
            [seria.diff :refer [make-differ make-undiffer]]
            [seria.pack :refer [make-packer make-unpacker]]
            [seria.interp :refer [make-interper]]))

(defn multi-cases [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (vector? form)
                       (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn enum-values [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (vector? form)
                       (= :enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

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

(defn make-config [& {:keys [schemas eq-ops] :or {eq-ops {}}}]
  (let [schemas      (validate-schemas schemas)
        schema-bimap (bimap (keys schemas))
        enum-bimap   (bimap (enum-values schemas))
        multi-bimap  (bimap (multi-cases schemas))
        config       {:schemas      schemas
                      :schema-bimap schema-bimap
                      :enum-bimap   enum-bimap
                      :multi-bimap  multi-bimap
                      :eq-ops       eq-ops}]
    (assoc config :processors (make-processors schemas config)
                  :state      `(atom {}))))

(defn make-test-config [& args]
  (eval (apply make-config args)))
