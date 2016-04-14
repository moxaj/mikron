(ns seria.config
  "Code generation from static config."
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

(def ^:dynamic *options*)

(defn make-processors [processor-types {:keys [schemas] :as config}]
  (let [include-processor? (set processor-types)]
    (->> (keys schemas)
         (mapcat (fn [schema-name]
                   (cond-> []
                     (include-processor? :pack)
                     (conj (pack/make-inner-packer schema-name config false)
                           (pack/make-packer schema-name config)
                           (unpack/make-inner-unpacker schema-name config false))

                     (include-processor? :diff)
                     (conj (diff/make-differ schema-name config)
                           (diff/make-undiffer schema-name config))

                     (and (include-processor? :pack)
                          (include-processor? :diff))
                     (conj (pack/make-inner-packer schema-name config true)
                           (unpack/make-inner-unpacker schema-name config true))

                     (include-processor? :gen)
                     (conj (gen/make-generator schema-name config))

                     (include-processor? :interp)
                     (conj (interp/make-interper schema-name config)))))
         (concat (if (include-processor? :pack)
                   [(unpack/make-unpacker config)]
                   [])))))

(defn make-config [spec]
  (let [schemas         (validate/validated-schemas (:schemas spec))
        processor-types (validate/validated-processor-types (:processors spec))
        config          {:schemas    schemas
                         :schema-ids (util/bimap (keys schemas))
                         :enum-ids   (util/bimap (enum-values schemas))
                         :multi-ids  (util/bimap (multi-cases schemas))}
        processors      (make-processors processor-types config)]
    `[(declare ~@(map first processors))
      ~@(map (fn [processor]
               `(defn ~@processor))
             processors)]))

(comment
  (defn pack [value & {:keys [schema buffer diff-id diffed?]
                       :or   {schema  (:schema *params*)
                              buffer  (:buffer *params*)
                              diff-id 0
                              diffed? false}}]
    (let [schema-id (get-in config [:schema-ids schema])
          pack-fn   (get-in config [:processors schema (if diffed? :diffed-pack :pack)])]
      (if (and pack-fn schema-id buffer)
        (-> buffer
            (buffer/write-headers! schema-id diff-id diffed?)
            (pack-fn value config)
            (buffer/compress))
        :seria/invalid)))

  (defn unpack [raw]
    (let [buffer  (buffer/wrap raw)
          {:keys [schema-id diff-id diffed?]} (buffer/read-headers! buffer)
          schema    (get-in config [:schema-ids schema-id])
          unpack-fn (get-in config [:processors schema (if diffed? :diffed-unpack :unpack)])]
      (if (and unpack-fn schema)
        {:schema  schema
         :diff-id diff-id
         :value   (unpack-fn buffer config)}
        :seria/invalid))))
