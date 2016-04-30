(ns seria.codegen.unpack
  "Unpacker generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.type :as type]
            [seria.common :as common]))

(def ^:dynamic *options*)

(defmulti unpack util/type-of :hierarchy #'type/*hierarchy*)

(defn unpack-diffed [schema]
  (if-not (:diffed? *options*)
    (unpack schema)
    `(if ~(unpack :boolean)
       :seria/dnil
       ~(unpack schema))))

(defmethod unpack :primitive [schema]
  `(~(symbol (format "seria.buffer/read-%s!" (name schema)))
    ~(:buffer *options*)))

(defmethod unpack :string [_]
  `(apply str (repeatedly ~(unpack :varint)
                          (fn [] ~(unpack :char)))))

(defmethod unpack :keyword [_]
  `(keyword ~(unpack :string)))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod unpack :any [_]
  `(common/cljc-read-string ~(unpack :string)))

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

(defmethod unpack :record [schema]
  (let [[_ {:keys [constructor]} inner-schemas] (util/expand-record schema (:schemas *options*))]
    (->> inner-schemas
         (map (fn [[index inner-schema]]
                [index (unpack-diffed inner-schema)]))
         (into (sorted-map))
         (util/as-record constructor))))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(unpack inner-schema)))

(defmethod unpack :multi [[_ _ _ multi-map]]
  `(case (get ~(-> multi-map (keys) (sort) (vec)) ~(unpack :varint))
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case (unpack inner-schema)])
               multi-map)))

(defmethod unpack :enum [[_ _ enum-values]]
  `(get ~enum-values ~(unpack :varint)))

(defmethod unpack :custom [schema]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util/processor-name (if diffed? :unpack-diffed :unpack)
                            schema)
      ~buffer)))

;; private api

(defn make-unpacker [schema-name {:keys [schemas diffed?] :as options}]
  (util/with-gensyms [buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util/processor-name (if diffed? :unpack-diffed :unpack)
                                         schema-name)
                    {:private true})
        [~buffer]
        ~(unpack-diffed (schemas schema-name))))))

;; public api

(defn make-global-unpacker [{:keys [schemas processor-types]}]
  (util/with-gensyms [raw buffer headers diffed? schema value]
    `(~(util/processor-name :unpack) [~raw]
      (let [~buffer  (buffer/wrap ~raw)
            ~headers (buffer/read-headers! ~buffer)
            ~schema  (get ~(-> schemas (keys) (sort) (vec)) (:schema-id ~headers))
            ~diffed? (:diffed? ~headers)]
        (if-not ~schema
          :seria/invalid
          {:schema  ~schema
           :diffed? ~diffed?
           :value   (let [~value
                          ((case ~schema
                             ~@(mapcat (fn [schema-name]
                                         [schema-name
                                          `(if ~diffed?
                                             ~(util/processor-name :unpack-diffed schema-name)
                                             ~(util/processor-name :unpack schema-name))])
                                       (keys schemas)))
                           ~buffer)]
                      (if ~diffed?
                        (common/wrap-diffed ~value)
                        ~value))})))))
