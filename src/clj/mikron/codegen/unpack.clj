(ns mikron.codegen.unpack
  "unpack generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.common :as common]
            [mikron.codegen.common :as codegen-common])
  (:import [mikron.buffer Buffer]))

(defmulti unpack util/type-of :hierarchy #'type/hierarchy)

(defn unpack* [schema {:keys [diffed?] :as options}]
  (if-not diffed?
    (unpack schema options)
    `(if ~(unpack :boolean options)
       :mikron/dnil
       ~(unpack schema options))))

(defmethod unpack :primitive [schema {:keys [buffer]}]
  `(~(symbol (format "mikron.buffer/?%s" (name schema)))
    ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :coll [[_ _ schema'] options]
  `(common/into! [] ~(unpack :varint options)
                    (fn [] ~(unpack* schema' options))))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] options]
  (->> `(common/into! #{} ~(unpack :varint options)
                          (fn [] ~(unpack* schema' options)))
       (util/as-set sorted-by)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] options]
  (->> `(common/into! {} ~(unpack :varint options)
                         (fn [] ~(unpack* key-schema options))
                         (fn [] ~(unpack* val-schema options)))
       (util/as-map sorted-by)))

(defmethod unpack :tuple [[_ _ schemas] options]
  (->> schemas
       (map-indexed (fn [index schema']
                      (unpack* schema' options)))
       (vec)))

(defmethod unpack :record [[_ {:keys [constructor]} schemas] options]
  (->> schemas
       (map (fn [[index schema']]
              [index (unpack* schema' options)]))
       (into (sorted-map))
       (util/as-record constructor)))

(defmethod unpack :optional [[_ _ schema'] options]
  `(when ~(unpack :boolean options)
     ~(unpack schema' options)))

(defmethod unpack :multi [[_ _ _ multi-map] options]
  `(case (get ~(-> multi-map (keys) (sort) (vec)) ~(unpack :varint options))
     ~@(mapcat (fn [[multi-case schema']]
                 [multi-case (unpack schema' options)])
               multi-map)))

(defmethod unpack :enum [[_ _ enum-values] options]
  `(~enum-values ~(unpack :varint options)))

(defmethod unpack :wrapped [[_ _ _ post schema'] options]
  `(~post ~(unpack schema' options)))

(defmethod unpack :aliased [schema options]
  (unpack (type/aliases schema) options))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `(~(if diffed?
       (util/processor-name :unpack-diffed schema)
       (util/processor-name :unpack schema))
    ~buffer))

(defmethod codegen-common/fast-processors :unpack [_ schema-name {:keys [schemas] :as options}]
  (util/with-gensyms [value buffer]
    (let [schema  (schemas schema-name)
          options (assoc options :buffer buffer)]
      [`(~(util/processor-name :unpack schema-name)
         [~buffer]
         ~(unpack* schema (assoc options :diffed? false)))
       `(~(util/processor-name :unpack-diffed schema-name)
         [~buffer]
         ~(unpack* schema (assoc options :diffed? true)))])))

(defmethod codegen-common/processors :unpack [_ schema-name options]
  (util/with-gensyms [_ value buffer]
    [`(defmethod common/process [:unpack ~schema-name] [~_ ~_ ~buffer]
        (~(util/processor-name :unpack schema-name)
         ~buffer))
     `(defmethod common/process [:unpack-diffed ~schema-name] [~_ ~_ ~buffer]
        (~(util/processor-name :unpack-diffed schema-name)
         ~buffer))]))
