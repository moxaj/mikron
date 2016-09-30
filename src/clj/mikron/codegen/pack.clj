(ns mikron.codegen.pack
  "Packer generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.common :as common])
  (:import [mikron.buffer Buffer]))

(defmulti pack util/type-of :hierarchy #'type/hierarchy)

(defn pack* [schema value {:keys [diffed?] :as options}]
  (util/with-gensyms [value-dnil?]
    (if-not diffed?
      (pack schema value options)
      `(let [~value-dnil? (= :mikron/dnil ~value)]
         ~(pack :boolean value-dnil? options)
         (when-not ~value-dnil?
           ~(pack schema value options))))))

(defmethod pack :primitive [schema value {:keys [buffer]}]
  `(~(symbol (format "mikron.buffer/!%s" (name schema)))
    ~buffer
    ~value))

(defmethod pack :nil [_ _ _]
  nil)

(defmethod pack :coll [[_ _ schema'] value options]
  (util/with-gensyms [value']
    `(do ~(pack :varint `(count ~value) options)
         (run! (fn [~value']
                 ~(pack* schema' value' options))
               ~value))))

(defmethod pack :map [[_ _ key-schema val-schema] value options]
  (util/with-gensyms [key val]
    `(do ~(pack :varint `(count ~value) options)
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key options)
                 ~(pack* val-schema val options))
               ~value))))

(defmethod pack :tuple [[_ _ schemas] value options]
  (util/with-gensyms [value']
    `(do ~@(map-indexed (fn [index schema']
                          `(let [~value' (~value ~index)]
                             ~(pack* schema' value' options)))
                        schemas))))

(defmethod pack :record [[_ _ schemas] value options]
  (util/with-gensyms [value']
    `(do ~@(->> schemas
                (into (sorted-map))
                (map (fn [[index schema']]
                       `(let [~value' (~index ~value)]
                          ~(pack* schema' value' options))))))))

(defmethod pack :optional [[_ _ schema'] value options]
  `(do ~(pack :boolean value options)
       (when ~value
         ~(pack schema' value options))))

(defmethod pack :multi [[_ _ selector multi-map] value options]
  (let [multi-cases (sort (keys multi-map))]
    `(case (~selector ~value)
       ~@(mapcat (fn [[multi-case schema']]
                   [multi-case
                    `(do ~(pack :varint (util/index-of multi-case multi-cases) options)
                         ~(pack schema' value options))])
                 multi-map))))

(defmethod pack :enum [[_ _ enum-values] value options]
  (pack :varint `(case ~value
                   ~@(mapcat (fn [enum-value]
                               [enum-value (util/index-of enum-value enum-values)])
                             enum-values))
                options))

(defmethod pack :wrapped [[_ _ pre _ schema'] value options]
  (util/with-gensyms [value']
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' options))))

(defmethod pack :aliased [schema value options]
  (pack (type/aliases schema) value options))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `(~(util/processor-name (if diffed? :pack-diffed :pack)
                          schema)
    ~buffer ~value))

(defmethod util/local-processor* :pack [_ schema-name {:keys [schemas diffed?]
                                                       :or {diffed? false}
                                                       :as options}]
  (util/with-gensyms [^Buffer buffer value]
    `([~buffer ~value]
      ~(pack* (schemas schema-name) value (assoc options :buffer buffer)))))

(defmethod util/local-processor* :pack-diffed [_ schema-name options]
  (util/local-processor* :pack schema-name (assoc options :diffed? true)))

(defmethod util/global-processor* :pack [_ {:keys [schemas]}]
  (util/with-gensyms [schema ^Buffer buffer value diffed? packer]
    (let [schema-ids (->> (keys schemas)
                          (sort)
                          (map-indexed #(vector %2 %1))
                          (apply concat))]
      `([~schema ~value]
        (let [~buffer  buffer/*buffer*
              ~diffed? (common/diffed? ~value)
              ~value   (cond-> ~value ~diffed? (common/undiffed))
              ~packer  (if ~diffed?
                         ~(util/processor-name :pack-diffed schema (keys schemas))
                         ~(util/processor-name :pack schema (keys schemas)))]
          (doto ~buffer
                (buffer/!headers (case ~schema ~@schema-ids) ~diffed?)
                (~packer ~value)
                (buffer/!finalize))
          (buffer/?binary-all ~buffer))))))
