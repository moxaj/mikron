(ns seria.codegen.unpack
  "Unpacker generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.common :as util.common]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti unpack util.schema/type-of :hierarchy #'type/hierarchy)

(defn wrap-diffed [body]
  (if-not (:diffed? *options*)
    body
    `(if ~(unpack :boolean)
       :dnil
       ~body)))

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
  `(util.common/cljc-read-string ~(unpack :string)))

(defmethod unpack :nil [_]
  nil)

(defmethod unpack :list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :varint)
                      (fn [] ~(wrap-diffed (unpack inner-schema))))))

(defmethod unpack :vector [[_ _ inner-schema]]
  `(vec ~(unpack [:list {} inner-schema])))

(defmethod unpack :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (unpack [:list {} inner-schema])
       (util.schema/as-set sorted-by)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] [~(unpack key-schema)
                            ~(wrap-diffed (unpack val-schema))]))
       (util.schema/as-map sorted-by)))

(defmethod unpack :tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (wrap-diffed (unpack inner-schema)))
                    inner-schemas)))

(defmethod unpack :record [schema]
  (let [[_ {:keys [constructor]} record-map] (util.schema/expand-record schema (:schemas *options*))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (wrap-diffed (unpack (record-map key)))]))
         (into (sorted-map))
         (util.schema/as-record constructor))))

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
    `(~(util.symbol/processor-name (if diffed? :unpack-diffed-inner* :unpack-inner*)
                                   schema)
      ~buffer)))

(defn make-inner-unpacker [schema-name {:keys [schemas diffed?] :as options}]
  (util.symbol/with-gensyms [buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(defn ~(with-meta (util.symbol/processor-name (if diffed? :unpack-diffed-inner* :unpack-inner*)
                                                     schema-name)
                         {:private true})
        [~buffer]
        ~(wrap-diffed (unpack (schemas schema-name)))))))

(defn make-unpacker [{:keys [schemas processor-types]}]
  (util.symbol/with-gensyms [raw buffer headers diffed? schema unpack-fn]
    `(defn ~'unpack [~raw]
      (let [~buffer  (buffer/wrap ~raw)
            ~headers (buffer/read-headers! ~buffer)
            ~schema  (get ~(-> schemas (keys) (sort) (vec)) (:schema-id ~headers))]
        (if-not ~schema
          :invalid
          {:schema  ~schema
           :diffed? (:diffed? ~headers)
           :value   ((case ~schema
                       ~@(mapcat (fn [schema-name]
                                   [schema-name (if-not (processor-types :diff)
                                                  (util.symbol/processor-name :unpack-inner* schema-name)
                                                  `(if (:diffed? ~headers)
                                                     ~(util.symbol/processor-name :unpack-diffed-inner* schema-name)
                                                     ~(util.symbol/processor-name :unpack-inner* schema-name)))])
                                 (keys schemas)))
                     ~buffer)})))))
