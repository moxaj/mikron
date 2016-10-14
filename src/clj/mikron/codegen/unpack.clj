(ns mikron.codegen.unpack
  "unpack generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.type :as type]
            [mikron.codegen.common :as codegen.common]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util])
  (:import [mikron.buffer Buffer]))

(defmulti unpack compile-util/type-of :hierarchy #'type/hierarchy)

(defn unpack* [schema {:keys [diffed?] :as options}]
  (if-not diffed?
    (unpack schema options)
    `(if ~(unpack :boolean options)
       :mikron/dnil
       ~(unpack schema options))))

(defmethod unpack :primitive [schema {:keys [buffer]}]
  `(~(symbol (format "mikron.buffer/?%s" (name schema)))
    ~buffer))

(defmethod unpack :nil [_ _]
  nil)

(defmethod unpack :coll [[_ _ schema'] options]
  `(util/into! [] ~(unpack :varint options)
                  (fn [] ~(unpack* schema' options))))

(defmethod unpack :set [[_ {:keys [sorted-by]} schema'] options]
  (->> `(util/into! #{} ~(unpack :varint options)
                        (fn [] ~(unpack* schema' options)))
       (compile-util/as-set sorted-by)))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema] options]
  (->> `(util/into! {} ~(unpack :varint options)
                       (fn [] ~(unpack* key-schema options))
                       (fn [] ~(unpack* val-schema options)))
       (compile-util/as-map sorted-by)))

(defmethod unpack :tuple [[_ _ schemas] options]
  (->> schemas
       (map-indexed (fn [index schema']
                      (unpack* schema' options)))
       (vec)))

(defmethod unpack :record [[_ {:keys [type]} schemas] options]
  (let [fields (compile-util/record->fields schemas)]
    `(let [~@(mapcat (fn [[index field]]
                       [field (unpack* (schemas index) options)])
                     fields)]
       ~(compile-util/fields->record fields type))))

(defmethod unpack :optional [[_ _ schema'] options]
  `(when ~(unpack :boolean options)
     ~(unpack schema' options)))

(defmethod unpack :multi [[_ _ _ multi-map] options]
  `(case (get ~(-> multi-map (keys) (sort) (vec)) ~(unpack :varint options))
     ~@(mapcat (fn [[multi-case schema']]
                 [multi-case (unpack schema' options)])
               multi-map)))

(defmethod unpack :enum [[_ _ enum-values] options]
  `(~enum-values ~(unpack :varint options)))

(defmethod unpack :wrapped [[_ _ _ post schema'] options]
  `(~post ~(unpack schema' options)))

(defmethod unpack :aliased [schema options]
  (unpack (type/aliases schema) options))

(defmethod unpack :custom [schema {:keys [diffed? buffer]}]
  `(~(if diffed?
       (compile-util/processor-name :unpack-diffed schema)
       (compile-util/processor-name :unpack schema))
    ~buffer))

(defmethod codegen.common/fast-processors :unpack [_ schema-name {:keys [schemas] :as options}]
  (compile-util/with-gensyms [value buffer]
    (let [schema  (schemas schema-name)
          options (assoc options :buffer buffer)]
      [`(~(compile-util/processor-name :unpack schema-name)
         [~buffer]
         ~(unpack* schema (assoc options :diffed? false)))
       `(~(compile-util/processor-name :unpack-diffed schema-name)
         [~buffer]
         ~(unpack* schema (assoc options :diffed? true)))])))

(defmethod codegen.common/processors :unpack [_ schema-name options]
  (compile-util/with-gensyms [_ value buffer]
    [`(defmethod util/process [:unpack ~schema-name] [~_ ~_ ~buffer]
        (~(compile-util/processor-name :unpack schema-name)
         ~buffer))
     `(defmethod util/process [:unpack-diffed ~schema-name] [~_ ~_ ~buffer]
        (~(compile-util/processor-name :unpack-diffed schema-name)
         ~buffer))]))
