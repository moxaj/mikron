(ns seria.codegen.unpack
  "Unpacker generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.common :as util.common]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti unpack type/type-of :hierarchy #'type/hierarchy)

(defn as-undiffable [body]
  (if-not (:diffed? *options*)
    body
    `(if ~(unpack :s/boolean)
       :s/dnil
       ~body)))

(defmethod unpack :s/primitive [schema]
  `(~(symbol (format "seria.buffer/read-%s!" (name schema)))
    ~(:buffer *options*)))

(defmethod unpack :s/string [_]
  `(apply str (repeatedly ~(unpack :s/varint)
                          (fn [] ~(unpack :s/char)))))

(defmethod unpack :s/keyword [_]
  `(keyword ~(unpack :s/string)))

(defmethod unpack :s/symbol [_]
  `(symbol ~(unpack :s/string)))

(defmethod unpack :s/any [_]
  `(util.common/cljc-read-string ~(unpack :s/string)))

(defmethod unpack :s/nil [_]
  nil)

(defmethod unpack :s/list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :s/varint)
                      (fn [] ~(as-undiffable (unpack inner-schema))))))

(defmethod unpack :s/vector [[_ _ inner-schema]]
  `(vec ~(unpack [:s/list {} inner-schema])))

(defmethod unpack :s/set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (unpack [:s/list {} inner-schema])
       (util.schema/as-set sorted-by)))

(defmethod unpack :s/map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :s/varint)
                    (fn [] [~(unpack key-schema)
                            ~(as-undiffable (unpack val-schema))]))
       (util.schema/as-map sorted-by)))

(defmethod unpack :s/tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (as-undiffable (unpack inner-schema)))
                    inner-schemas)))

(defmethod unpack :s/record [schema]
  (let [[_ {:keys [constructor]} record-map] (util.schema/expand-record schema (:schemas *options*))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (as-undiffable (unpack (record-map key)))]))
         (into {})
         (util.schema/as-record constructor))))

(defmethod unpack :s/optional [[_ _ inner-schema]]
  `(when ~(unpack :s/boolean)
     ~(unpack inner-schema)))

(defmethod unpack :s/multi [[_ _ _ arg-map]]
  `(case (~'multi-ids ~(unpack :s/varint))
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case (unpack inner-schema)])
               arg-map)))

(defmethod unpack :s/enum [_]
  `(~'enum-ids ~(unpack :s/varint)))

(defmethod unpack :s/custom [schema]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util.symbol/processor-name (if diffed? :unpack-diffed-inner* :unpack-inner*)
                                   schema)
      ~buffer)))

(defn make-inner-unpacker [schema-name {:keys [schemas diffed?] :as options}]
  (util.symbol/with-gensyms [buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util.symbol/processor-name (if diffed? :unpack-diffed-inner* :unpack-inner*)
                                                schema-name)
                    {:private true})
        [~buffer]
        ~(as-undiffable (unpack (schemas schema-name)))))))

(defn make-unpacker [{:keys [schemas processor-types]}]
  (util.symbol/with-gensyms [raw buffer headers diff-id diffed? schema unpack-fn]
    `(~'unpack
      [~raw]
      (let [~(with-meta buffer {:no-inline true}) (buffer/wrap ~raw)
            ~headers (buffer/read-headers! ~buffer)
            ~schema  (~'schema-ids (:schema-id ~headers))]
        (if-not ~schema
          :s/invalid
          {:schema  ~schema
           :diffed? (:diffed? ~headers)
           :diff-id (:diff-id ~headers)
           :value   ((case ~schema
                       ~@(mapcat (fn [schema-name]
                                   [schema-name (if-not (processor-types :diff)
                                                  (util.symbol/processor-name :unpack-inner* schema-name)
                                                  `(if (:diffed ~headers)
                                                     ~(util.symbol/processor-name :unpack-diffed-inner* schema-name)
                                                     ~(util.symbol/processor-name :unpack-inner* schema-name)))])
                                 (keys schemas)))
                     ~buffer)})))))
