(ns seria.config
  "Code generation from static config."
  (:require [clojure.set :as set]
            [seria.util.coll :as util.coll]
            [seria.validate :as validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen])
  (:import  [java.util Date]))

(defn multi-cases [schemas]
  (->> schemas
       (util.coll/find-unique-by (fn [form]
                                   (and (vector? form)
                                        (= :s/multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn enum-values [schemas]
  (->> schemas
       (util.coll/find-unique-by (fn [form]
                                   (and (vector? form)
                                        (= :s/enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

(defn make-processors [{:keys [processor-types schemas] :as options}]
  (->> (keys schemas)
       (mapcat (fn [schema-name]
                 (cond-> []
                   (processor-types :pack)
                   (conj (pack/make-inner-packer schema-name options)
                         (pack/make-packer schema-name options)
                         (unpack/make-inner-unpacker schema-name options))

                   (processor-types :diff)
                   (conj (diff/make-differ schema-name options)
                         (diff/make-undiffer schema-name options))

                   (and (processor-types :pack)
                        (processor-types :diff))
                   (conj (pack/make-inner-packer schema-name (assoc options :diffed? true))
                         (unpack/make-inner-unpacker schema-name (assoc options :diffed? true)))

                   (processor-types :gen)
                   (conj (gen/make-generator schema-name options)))))

                   ; (processor-types :interp)
                   ; (conj (interp/make-interper schema-name options)))]))
       (concat (when (processor-types :pack)
                 [pack/common-packer (unpack/make-unpacker options)]))))

(defn process-config [config]
  (let [{:keys [schemas processor-types eq-ops]} (validate/validate-config config)
        schema-ids  (util.coll/id-map (keys schemas))
        enum-ids    (util.coll/id-map (enum-values schemas))
        multi-ids   (util.coll/id-map (multi-cases schemas))
        processors  (make-processors {:schemas         schemas
                                      :eq-ops          eq-ops
                                      :processor-types (set processor-types)
                                      :schema-ids      schema-ids
                                      :enum-ids        enum-ids
                                      :multi-ids       multi-ids})]
    {:vars     (if-not ((set processor-types) :pack)
                 []
                 (cond-> []
                   (seq schema-ids) (conj `(def ~(with-meta 'schema-ids {:private true})
                                                ~(set/map-invert schema-ids)))
                   (seq enum-ids)   (conj `(def ~(with-meta 'enum-ids {:private true})
                                                ~(set/map-invert enum-ids)))
                   (seq multi-ids)  (conj `(def ~(with-meta 'multi-ids {:private true})
                                                ~(set/map-invert multi-ids)))))
     :declares `(declare ~@(map (fn [[processor-name]]
                                  (with-meta processor-name {}))
                                processors))
     :fns      (mapv (fn [[processor-name & body]]
                       `(defn ~processor-name ~@body))
                     processors)}))

(defn eval-output [{:keys [vars declares fns]}]
  (eval [vars declares fns]))
