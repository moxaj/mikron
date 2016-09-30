(ns mikron.codegen.unpack
  "Unpacker generating functions."
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
  `(common/repeatedly! []
                       ~(unpack :varint options)
                       (fn [] ~(unpack* schema' options))))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] options]
  (->> `(common/repeatedly! #{}
                            ~(unpack :varint options)
                            (fn [] ~(unpack* schema' options)))
       (util/as-set sorted-by)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] options]
  (->> `(common/repeatedly! {}
                            ~(unpack :varint options)
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
  `(~(util/processor-name (if diffed? :unpack-diffed :unpack)
                          schema)
    ~buffer))

(defmethod codegen-common/local-processor* :unpack [_ schema-name {:keys [schemas diffed?]
                                                                   :or {diffed? false}
                                                                   :as options}]
  (util/with-gensyms [^Buffer buffer]
    `([~buffer]
      ~(unpack* (schemas schema-name) (assoc options :buffer buffer)))))

(defmethod codegen-common/local-processor* :unpack-diffed [_ schema-name options]
  (codegen-common/local-processor* :unpack schema-name (assoc options :diffed? true)))

(defmethod codegen-common/global-processor* :unpack [_ {:keys [schemas]}]
  (util/with-gensyms [^bytes binary ^Buffer buffer headers diffed? schema unpacker]
    `([~binary]
      (let [~buffer   (buffer/wrap ~binary)
            ~headers  (buffer/?headers ~buffer)
            ~schema   (get ~(-> schemas (keys) (sort) (vec))
                           (:schema-id ~headers))
            ~diffed?  (:diffed? ~headers)
            ~unpacker (if ~diffed?
                        ~(util/processor-name :unpack-diffed schema (keys schemas))
                        ~(util/processor-name :unpack schema (keys schemas)))]
        (if-not ~schema
          :mikron/invalid
          {:schema  ~schema
           :diffed? ~diffed?
           :value   (cond-> (~unpacker ~buffer)
                      ~diffed? (common/diffed))})))))
