(ns mikron.codegen.unpack
  "Unpacker generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.common :as common]))

(def ^:dynamic *options*)

(defmulti unpack util/type-of :hierarchy #'type/hierarchy)

(defn unpack-diffed [schema]
  (if-not (:diffed? *options*)
    (unpack schema)
    `(if ~(unpack :boolean)
       :mikron/dnil
       ~(unpack schema))))

(defmethod unpack :primitive [schema]
  `(~(symbol (format "mikron.buffer/read-%s!" (name schema)))
    ~(:buffer *options*)))

(defmethod unpack :keyword [_]
  `(keyword ~(unpack :string)))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod unpack :any [_]
  `(common/parse-string ~(unpack :string)))

(defmethod unpack :nil [_]
  nil)

(defmethod unpack :list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :varint)
                      (fn [] ~(unpack-diffed inner-schema)))))

(defmethod unpack :vector [[_ _ inner-schema]]
  `(vec ~(unpack [:list {} inner-schema])))

(defmethod unpack :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (unpack [:list {} inner-schema])
       (util/as-set sorted-by)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] [~(unpack key-schema)
                            ~(unpack-diffed val-schema)]))
       (util/as-map sorted-by)))

(defmethod unpack :tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (unpack-diffed inner-schema))
                    inner-schemas)))

(defmethod unpack :record [[_ {:keys [constructor]} inner-schemas]]
  (->> inner-schemas
       (map (fn [[index inner-schema]]
              [index (unpack-diffed inner-schema)]))
       (into (sorted-map))
       (util/as-record constructor)))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(unpack inner-schema)))

(defmethod unpack :multi [[_ _ _ multi-map]]
  `(case (get ~(-> multi-map (keys) (sort) (vec)) ~(unpack :varint))
     ~@(->> multi-map
            (mapcat (fn [[multi-case inner-schema]]
                      [multi-case (unpack inner-schema)]))
            (doall))))

(defmethod unpack :enum [[_ _ enum-values]]
  `(get ~enum-values ~(unpack :varint)))

(defmethod unpack :wrapped [[_ {:keys [post]} inner-schema]]
  `(~post ~(unpack inner-schema)))

(defmethod unpack :template [schema]
  (unpack (type/templates schema)))

(defmethod unpack :custom [schema]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util/processor-name (if diffed? :unpack-diffed :unpack)
                            schema)
      ~buffer)))

;; private api

(defn unpacker [schema-name {:keys [schemas diffed?] :as options}]
  (util/with-gensyms [buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util/processor-name (if diffed? :unpack-diffed :unpack)
                                         schema-name)
                    {:private true})
        [~buffer]
        ~(unpack-diffed (schemas schema-name))))))

;; public api

(defn global-unpacker [{:keys [schemas processor-types]}]
  (util/with-gensyms [raw buffer headers diffed? schema meta-schema meta-schema-id]
    (let [schema-ids (-> schemas (keys) (sort) (vec))]
      `(~(util/processor-name :unpack) [~raw]
        (let [~buffer         (buffer/wrap ~raw)
              ~headers        (buffer/read-headers! ~buffer)
              ~schema         (get ~schema-ids (:schema-id ~headers))
              ~meta-schema-id (:meta-schema-id ~headers)
              ~meta-schema    (get ~schema-ids ~meta-schema-id)
              ~diffed?        (:diffed? ~headers)]
          (if (or (not ~schema)
                  (and ~meta-schema-id
                       (not ~meta-schema)))
            :mikron/invalid
            (cond-> {:schema  ~schema
                     :diffed? ~diffed?
                     :value   (cond-> ((if ~diffed?
                                         ~(util/select-processor :unpack-diffed schema schemas)
                                         ~(util/select-processor :unpack schema schemas))
                                       ~buffer)
                                ~diffed? (common/wrap-diffed))}
              ~meta-schema
              (assoc :meta-schema ~meta-schema
                     :meta-value  (~(util/select-processor :unpack meta-schema schemas)
                                   ~buffer)))))))))
