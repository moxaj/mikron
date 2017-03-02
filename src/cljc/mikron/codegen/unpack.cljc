(ns mikron.codegen.unpack
  "Unpacker generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.util.coll :as util.coll])
  #?(:clj (:import [mikron.buffer Buffer])))

(defmulti unpack schema/schema-name :hierarchy #'schema/hierarchy)

(defn unpack* [schema {:keys [diffed?] :as env}]
  (if-not diffed?
    (unpack schema env)
    `(if ~(unpack [:boolean] env)
       :mikron/dnil
       ~(unpack schema env))))

(defmethod unpack :primitive [[schema'] {:keys [buffer]}]
  `(~(symbol "mikron.buffer" (str "?" (name schema')))
    ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :coll [[_ _ schema'] env]
  `(util.coll/into! [] true ~(unpack [:varint] env) ~(unpack* schema' env)))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] env]
  `(util.coll/into! ~(if sorted-by `(sorted-set-by ~sorted-by) #{})
                    ~(nil? sorted-by)
                    ~(unpack [:varint] env)
                    ~(unpack* schema' env)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] env]
  `(util.coll/into-kv! ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                       ~(nil? sorted-by)
                       ~(unpack [:varint] env)
                       ~(unpack key-schema env)
                       ~(unpack* val-schema env)))

(defmethod unpack :tuple [[_ _ schemas] env]
  (let [fields (compile-util/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') env)])
                     fields)]
       ~(compile-util/fields->tuple fields))))

(defmethod unpack :record [[_ {:keys [type]} schemas] env]
  (let [fields (compile-util/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') env)])
                     fields)]
       ~(compile-util/fields->record fields type))))

(defmethod unpack :optional [[_ _ schema'] env]
  `(when ~(unpack [:boolean] env)
     ~(unpack schema' env)))

(defmethod unpack :multi [[_ _ _ multi-map] env]
  `(case ~(unpack (schema/integer-schema (count multi-map)) env)
     ~@(->> multi-map
            (keys)
            (sort)
            (map-indexed (fn [index multi-case]
                           [index (unpack (multi-map multi-case) env)]))
            (apply concat))))

(defmethod unpack :enum [[_ _ enum-values] env]
  `(util.coll/nth ~enum-values ~(unpack (schema/integer-schema (count enum-values)) env)))

(defmethod unpack :wrapped [[_ _ _ post schema'] env]
  `(~post ~(unpack schema' env)))

(defmethod unpack :aliased [[schema'] env]
  (unpack (schema/aliased-schemas schema') env))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `((deref ~(compile-util/processor-name (if diffed? :unpack-diffed :unpack) schema)) ~buffer))

(defmethod compile-util/processor :unpack [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? false :buffer buffer)))))

(defmethod compile-util/processor :unpack-diffed [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? true :buffer buffer)))))
