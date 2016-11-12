(ns mikron.codegen.pack
  "pack generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.type :as type]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll])
  (:import [mikron.buffer Buffer]))

(defmulti pack compile-util/type-of :hierarchy #'type/hierarchy)

(defn pack* [schema value {:keys [diffed?] :as env}]
  (if-not diffed?
    (pack schema value env)
    (compile-util/with-gensyms [value-dnil?]
      `(let [~value-dnil? (= :mikron/dnil ~value)]
         ~(pack :boolean value-dnil? env)
         (when-not ~value-dnil?
           ~(pack schema value env))))))

(defmethod pack :nil [_ _ _]
  nil)

(defmethod pack :primitive [schema value {:keys [buffer]}]
  `(~(symbol (format "mikron.buffer/!%s" (name schema)))
    ~buffer
    ~value))

(defmethod pack :vector [[_ _ schema'] value env]
  (compile-util/with-gensyms [length value' index]
    `(let [~length (util.coll/count ~value)]
       ~(pack :varint length env)
       (dotimes [~index ~length]
         (let [~value' (util.coll/nth ~value ~index)]
           ~(pack* schema' value' env))))))

(defmethod pack :coll [[_ options schema'] value env]
  (compile-util/with-gensyms [value']
    `(do ~(pack :varint `(count ~value) env)
         (run! (fn [~value']
                 ~(pack* schema' value' env))
               ~value))))

(defmethod pack :map [[_ _ key-schema val-schema] value env]
  (compile-util/with-gensyms [entry k v]
    `(do ~(pack :varint `(util.coll/count ~value) env)
         (run! (fn [~entry]
                 (let [~k (key ~entry)
                       ~v (val ~entry)]
                   ~(pack key-schema k env)
                   ~(pack* val-schema v env)))
               ~value))))

(defmethod pack :tuple [[_ _ schemas] value env]
  (compile-util/with-gensyms [value']
    `(do ~@(map-indexed (fn [index schema']
                          `(let [~value' (util.coll/nth ~value ~index)]
                             ~(pack* schema' value' env)))
                        schemas))))

(defmethod pack :record [[_ {:keys [type]} schemas] value env]
  (compile-util/with-gensyms [value']
    `(do ~@(->> schemas
                (into (sorted-map))
                (map (fn [[index schema']]
                       `(let [~value' ~(compile-util/record-lookup value index type)]
                          ~(pack* schema' value' env))))))))

(defmethod pack :optional [[_ _ schema'] value env]
  `(do ~(pack :boolean value env)
       (when ~value
         ~(pack schema' value env))))

(defmethod pack :multi [[_ _ selector multi-map] value env]
  (let [multi-cases (sort (keys multi-map))]
    `(case (~selector ~value)
       ~@(mapcat (fn [[multi-case schema']]
                   [multi-case
                    `(do ~(pack (compile-util/integer-type (count multi-map))
                                (compile-util/index-of multi-case multi-cases) env)
                         ~(pack schema' value env))])
                 multi-map))))

(defmethod pack :enum [[_ _ enum-values] value env]
  (pack (compile-util/integer-type (count enum-values))
        `(case ~value
           ~@(mapcat (fn [enum-value]
                       [enum-value (compile-util/index-of enum-value enum-values)])
                     enum-values))
        env))

(defmethod pack :wrapped [[_ _ pre _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' env))))

(defmethod pack :aliased [schema value env]
  (pack (type/aliases schema) value env))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `(~(compile-util/processor-name (if diffed? :pack-diffed :pack) schema) ~value ~buffer))

(defmethod compile-util/processor :pack [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc env :buffer buffer :diffed? false)))))

(defmethod compile-util/processor :pack-diffed [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc env :buffer buffer :diffed? true)))))
