(ns mikron.codegen.pack
  "pack generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.type :as type]
            [mikron.codegen.common :as codegen.common]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util])
  (:import [mikron.buffer Buffer]))

(defmulti pack compile-util/type-of :hierarchy #'type/hierarchy)

(defn pack* [schema value {:keys [diffed?] :as options}]
  (compile-util/with-gensyms [value-dnil?]
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
  (compile-util/with-gensyms [value']
    `(do ~(pack :varint `(count ~value) options)
         (run! (fn [~value']
                 ~(pack* schema' value' options))
               ~value))))

(defmethod pack :map [[_ _ key-schema val-schema] value options]
  (compile-util/with-gensyms [key val]
    `(do ~(pack :varint `(count ~value) options)
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key options)
                 ~(pack* val-schema val options))
               ~value))))

(defmethod pack :tuple [[_ _ schemas] value options]
  (compile-util/with-gensyms [value']
    `(do ~@(map-indexed (fn [index schema']
                          `(let [~value' (~value ~index)]
                             ~(pack* schema' value' options)))
                        schemas))))

(defmethod pack :record [[_ {:keys [type]} schemas] value options]
  (compile-util/with-gensyms [value']
    `(do ~@(->> schemas
                (into (sorted-map))
                (map (fn [[index schema']]
                       `(let [~value' ~(compile-util/record-lookup value index type)]
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
                    `(do ~(pack :varint (compile-util/index-of multi-case multi-cases) options)
                         ~(pack schema' value options))])
                 multi-map))))

(defmethod pack :enum [[_ _ enum-values] value options]
  (pack :varint `(case ~value
                     ~@(mapcat (fn [enum-value]
                                 [enum-value (compile-util/index-of enum-value enum-values)])
                               enum-values))
                 options))

(defmethod pack :wrapped [[_ _ pre _ schema'] value options]
  (compile-util/with-gensyms [value']
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' options))))

(defmethod pack :aliased [schema value options]
  (pack (type/aliases schema) value options))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `(~(if diffed?
       (compile-util/processor-name :pack-diffed schema)
       (compile-util/processor-name :pack schema))
    ~value ~buffer))

(defmethod codegen.common/fast-processors :pack [_ schema-name {:keys [schemas] :as options}]
  (compile-util/with-gensyms [value buffer]
    (let [schema  (schemas schema-name)
          options (assoc options :buffer buffer)]
      [`(~(compile-util/processor-name :pack schema-name)
         [~value ~buffer]
         ~(pack* schema value (assoc options :diffed? false)))
       `(~(compile-util/processor-name :pack-diffed schema-name)
         [~value ~buffer]
         ~(pack* schema value (assoc options :diffed? true)))])))

(defmethod codegen.common/processors :pack [_ schema-name options]
  (compile-util/with-gensyms [_ value buffer]
    [`(defmethod util/process [:pack ~schema-name] [~_ ~_ ~value ~buffer]
        (~(compile-util/processor-name :pack schema-name)
         ~value
         ~buffer))
     `(defmethod util/process [:pack-diffed ~schema-name] [~_ ~_ ~value ~buffer]
        (~(compile-util/processor-name :pack-diffed schema-name)
         ~value
         ~buffer))]))
