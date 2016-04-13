(ns seria.config
  "Pre-compile-time config generation."
  (:require [seria.util :as util]
            [seria.validate :as validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen]))

(defn multi-cases [schemas]
  (->> schemas
       (util/find-unique-by (fn [form]
                              (and (vector? form)
                                   (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn enum-values [schemas]
  (->> schemas
       (util/find-unique-by (fn [form]
                              (and (vector? form)
                                   (= :enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

(defn make-processors [processor-types {:keys [schemas] :as config}]
  (let [need? (set processor-types)]
    (->> (keys schemas)
         (mapcat (fn [schema-name]
                   (cond-> []
                     (need? :pack)
                     (conj (pack/make-inner-packer schema-name config false)
                           (pack/make-packer schema-name config)
                           (unpack/make-inner-unpacker schema-name config false))

                     (need? :diff)
                     (conj (diff/make-differ schema-name config)
                           (diff/make-undiffer schema-name config))

                     (and (need? :pack)
                          (need? :diff))
                     (conj (pack/make-inner-packer schema-name config true)
                           (unpack/make-inner-unpacker schema-name config true))

                     (need? :gen)
                     (conj (gen/make-generator schema-name config))

                     (need? :interp)
                     (conj (interp/make-interper schema-name config)))))
         (concat (if (need? :pack)
                   [(unpack/make-unpacker config)]
                   [])))))

(defn make-config [spec]
  (let [schemas         (validate/validate-schemas (:schemas spec))
        processor-types (validate/validate-processor-types (:processors spec))
        config          {:schemas    schemas
                         :schema-map (util/bimap (keys schemas))
                         :enum-map   (util/bimap (enum-values schemas))
                         :multi-map  (util/bimap (multi-cases schemas))}
        processors      (make-processors processor-types config)]
    `[(declare ~@(map first processors))
      ~@(map (fn [processor]
               `(defn ~@processor))
             processors)]))

(defn make-test-config [args]
  (let [raw-config (apply make-config args)]
    (assoc (eval raw-config) :sources (:processors raw-config))))

;; config file: file size, flexibility?
;; macro: only unevaluated, simple
