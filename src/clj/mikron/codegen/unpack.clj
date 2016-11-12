(ns mikron.codegen.unpack
  "unpack generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.type :as type]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll])
  (:import [mikron.buffer Buffer]))

(defmulti unpack compile-util/type-of :hierarchy #'type/hierarchy)

(defn unpack* [schema {:keys [diffed?] :as env}]
  (if-not diffed?
    (unpack schema env)
    `(if ~(unpack :boolean env)
       :mikron/dnil
       ~(unpack schema env))))

(defmethod unpack :primitive [schema {:keys [buffer]}]
  `(~(symbol (format "mikron.buffer/?%s" (name schema)))
    ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :coll [[_ _ schema'] env]
  `(util.coll/into! [] true ~(unpack :varint env) (fn [] ~(unpack* schema' env))))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] env]
  `(util.coll/into! ~(if sorted-by `(sorted-set-by ~sorted-by) #{})
                    ~(nil? sorted-by)
                    ~(unpack :varint env)
                    (fn [] ~(unpack* schema' env))))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] env]
  `(util.coll/into-kv! ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                       ~(nil? sorted-by)
                       ~(unpack :varint env)
                       (fn [] ~(unpack key-schema env))
                       (fn [] ~(unpack* val-schema env))))

(defmethod unpack :tuple [[_ _ schemas] env]
  (->> schemas
       (map-indexed (fn [index schema']
                      (unpack* schema' env)))
       (vec)))

(defmethod unpack :record [[_ {:keys [type]} schemas] env]
  (let [fields (compile-util/record->fields schemas)]
    `(let [~@(mapcat (fn [[index field]]
                       [field (unpack* (schemas index) env)])
                     fields)]
       ~(compile-util/fields->record fields type))))

(defmethod unpack :optional [[_ _ schema'] env]
  `(when ~(unpack :boolean env)
     ~(unpack schema' env)))

(defmethod unpack :multi [[_ _ _ multi-map] env]
  (let [multi-cases (sort (keys multi-map))]
    `(case ~(unpack (compile-util/integer-type (count multi-map)) env)
       ~@(mapcat (fn [[multi-case schema']]
                   [(compile-util/index-of multi-case multi-cases)
                    (unpack schema' env)])
                 multi-map))))

(defmethod unpack :enum [[_ _ enum-values] env]
  `(util.coll/nth ~enum-values ~(unpack (compile-util/integer-type (count enum-values)) env)))

(defmethod unpack :wrapped [[_ _ _ post schema'] env]
  `(~post ~(unpack schema' env)))

(defmethod unpack :aliased [schema env]
  (unpack (type/aliases schema) env))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `(~(compile-util/processor-name (if diffed? :unpack-diffed :unpack) schema) ~buffer))

(defmethod compile-util/processor :unpack [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? false :buffer buffer)))))

(defmethod compile-util/processor :unpack-diffed [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? true :buffer buffer)))))
