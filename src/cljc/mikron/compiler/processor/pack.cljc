(ns mikron.compiler.processor.pack
  "Packer generating functions."
  (:require [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.util :as compiler.util]
            ;; Runtime
            [mikron.buffer]
            [mikron.util.coll :as util.coll]))

(defmulti pack compiler.schema/schema-name :hierarchy #'compiler.schema/hierarchy)

(defn pack* [schema value {:keys [diffed?] :as env}]
  (if-not diffed?
    (pack schema value env)
    (compiler.util/with-gensyms [value-dnil?]
      `(let [~value-dnil? (identical? :mikron/dnil ~value)]
         ~(pack [:boolean] value-dnil? env)
         (when-not ~value-dnil?
           ~(pack schema value env))))))

(defmethod pack :nil [_ _ _]
  nil)

(defmethod pack :primitive [[schema'] value {:keys [buffer]}]
  `(~(symbol "mikron.buffer" (str "!" (name schema')))
    ~buffer
    ~value))

(defmethod pack :vector [[_ _ schema'] value env]
  (compiler.util/with-gensyms [length value' index]
    `(let [~length (util.coll/count ~value)]
       ~(pack [:varint] length env)
       (dotimes [~index ~length]
         (let [~value' (util.coll/nth ~value ~index)]
           ~(pack* schema' value' env))))))

(defmethod pack :coll [[_ options schema'] value env]
  (compiler.util/with-gensyms [length value']
    `(let [~length (count ~value)]
       (do ~(pack [:varint] length env)
           (run! (fn [~value']
                   ~(pack* schema' value' env))
                 ~value)))))

(defmethod pack :map [[_ _ key-schema val-schema] value env]
  (compiler.util/with-gensyms [length entry' key' value']
    `(let [~length (util.coll/count ~value)]
       (do ~(pack [:varint] length env)
           (run! (fn [~entry']
                   (let [~key'   (key ~entry')
                         ~value' (val ~entry')]
                     ~(pack key-schema key' env)
                     ~(pack* val-schema value' env)))
                 ~value)))))

(defmethod pack :tuple [[_ _ schemas] value env]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(compiler.util/tuple-lookup value key')]
                   ~(pack* (schemas key') value' env)))
              (compiler.util/tuple->fields schemas))))

(defmethod pack :record [[_ {:keys [type]} schemas] value env]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(compiler.util/record-lookup value key' type)]
                   ~(pack* (schemas key') value' env)))
              (compiler.util/record->fields schemas))))

(defmethod pack :optional [[_ _ schema'] value env]
  `(do ~(pack [:boolean] value env)
       (when ~value
         ~(pack schema' value env))))

(defmethod pack :multi [[_ _ selector schemas'] value env]
  `(case (~selector ~value)
     ~@(->> schemas'
            (keys)
            (sort)
            (map-indexed (fn [index key']
                           [key' `(do ~(pack (compiler.schema/integer-schema (count schemas')) index env)
                                      ~(pack (schemas' key') value env))]))
            (apply concat))))

(defmethod pack :enum [[_ _ enum-values] value env]
  (pack (compiler.schema/integer-schema (count enum-values))
        `(case ~value
           ~@(->> enum-values
                  (map-indexed (fn [index enum-value]
                                 [enum-value index]))
                  (apply concat)))
        env))

(defmethod pack :wrapped [[_ _ pre _ schema'] value env]
  (compiler.util/with-gensyms [value']
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' env))))

(defmethod pack :aliased [[schema-name] value env]
  (pack (compiler.schema/aliased-schemas schema-name) value env))

(defmethod pack :custom [schema value {:keys [diffed? buffer]}]
  `((deref ~(compiler.util/processor-name (if diffed? :pack-diffed :pack) schema)) ~value ~buffer))

(defmethod compiler.util/processor :pack [_ {:keys [schema] :as env}]
  (compiler.util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc env :buffer buffer :diffed? false)))))

(defmethod compiler.util/processor :pack-diffed [_ {:keys [schema] :as env}]
  (compiler.util/with-gensyms [value buffer]
    `([~value ~buffer]
      ~(pack* schema value (assoc env :buffer buffer :diffed? true)))))
