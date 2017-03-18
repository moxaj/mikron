(ns mikron.compiler.processor.unpack
  "Unpacker generating functions."
  (:require [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.buffer :as buffer]
            [mikron.util.coll :as util.coll])
  #?(:clj (:import [mikron.buffer Buffer])))

(defmulti unpack compiler.schema/schema-name :hierarchy #'compiler.schema/hierarchy)

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
  (let [fields (compiler.util/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') env)])
                     fields)]
       ~(compiler.util/fields->tuple fields))))

(defmethod unpack :record [[_ {:keys [type]} schemas] env]
  (let [fields (compiler.util/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') env)])
                     fields)]
       ~(compiler.util/fields->record fields type))))

(defmethod unpack :optional [[_ _ schema'] env]
  `(when ~(unpack [:boolean] env)
     ~(unpack schema' env)))

(defmethod unpack :multi [[_ _ _ schemas'] env]
  `(case ~(unpack (compiler.schema/integer-schema (count schemas')) env)
     ~@(->> schemas'
            (keys)
            (sort)
            (map-indexed (fn [index key']
                           [index (unpack (schemas' key') env)]))
            (apply concat))))

(defmethod unpack :enum [[_ _ enum-values] env]
  `(util.coll/nth ~enum-values ~(unpack (compiler.schema/integer-schema (count enum-values)) env)))

(defmethod unpack :wrapped [[_ _ _ post schema'] env]
  `(~post ~(unpack schema' env)))

(defmethod unpack :aliased [[schema-name] env]
  (unpack (compiler.schema/aliased-schemas schema-name) env))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `((deref ~(compiler.util/processor-name (if diffed? :unpack-diffed :unpack) schema)) ~buffer))

(defmethod compiler.util/processor :unpack [_ {:keys [schema] :as env}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? false :buffer buffer)))))

(defmethod compiler.util/processor :unpack-diffed [_ {:keys [schema] :as env}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc env :diffed? true :buffer buffer)))))
