(ns mikron.compiler.processor.unpack
  "Unpacker generating functions."
  (:require [mikron.compiler.processor.common :as compiler.common]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.buffer :as buffer]
            [mikron.util.coll :as util.coll])
  #?(:clj (:import [mikron.buffer Buffer])))

(defmulti unpack compiler.schema/schema-name :hierarchy #'compiler.schema/hierarchy)

(defn unpack* [schema {:keys [diffed?] :as opts}]
  (if-not diffed?
    (unpack schema opts)
    `(if ~(unpack [:boolean] opts)
       :mikron/dnil
       ~(unpack schema opts))))

(defmethod unpack :primitive [[schema'] {:keys [buffer]}]
  `(~(symbol "mikron.buffer" (str "?" (name schema')))
    ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :coll [[_ _ schema'] opts]
  `(util.coll/into! [] true ~(unpack [:varint] opts) ~(unpack* schema' opts)))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] opts]
  `(util.coll/into! ~(if sorted-by `(sorted-set-by ~sorted-by) #{})
                    ~(nil? sorted-by)
                    ~(unpack [:varint] opts)
                    ~(unpack* schema' opts)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] opts]
  `(util.coll/into-kv! ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                       ~(nil? sorted-by)
                       ~(unpack [:varint] opts)
                       ~(unpack key-schema opts)
                       ~(unpack* val-schema opts)))

(defmethod unpack :tuple [[_ _ schemas] opts]
  (let [fields (compiler.util/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') opts)])
                     fields)]
       ~(compiler.util/fields->tuple fields))))

(defmethod unpack :record [[_ {:keys [type]} schemas] opts]
  (let [fields (compiler.util/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (unpack* (schemas key') opts)])
                     fields)]
       ~(compiler.util/fields->record fields type))))

(defmethod unpack :optional [[_ _ schema'] opts]
  `(when ~(unpack [:boolean] opts)
     ~(unpack schema' opts)))

(defmethod unpack :multi [[_ _ _ schemas'] opts]
  `(case ~(unpack (compiler.schema/integer-schema (count schemas')) opts)
     ~@(->> schemas'
            (keys)
            (sort)
            (map-indexed (fn [index key']
                           [index (unpack (schemas' key') opts)]))
            (apply concat))))

(defmethod unpack :enum [[_ _ enum-values] opts]
  `(util.coll/nth ~enum-values ~(unpack (compiler.schema/integer-schema (count enum-values)) opts)))

(defmethod unpack :wrapped [[_ _ _ post schema'] opts]
  `(~post ~(unpack schema' opts)))

(defmethod unpack :aliased [[schema-name] opts]
  (unpack (compiler.schema/aliased-schemas schema-name) opts))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `((deref ~(compiler.util/processor-name (if diffed? :unpack-diffed :unpack) schema)) ~buffer))

(defmethod compiler.common/processor :unpack [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc opts :diffed? false :buffer buffer)))))

(defmethod compiler.common/processor :unpack-diffed [_ {:keys [schema] :as opts}]
  (compiler.util/with-gensyms [buffer]
    `([~buffer]
      ~(unpack* schema (assoc opts :diffed? true :buffer buffer)))))
