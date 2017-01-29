(ns mikron.codegen.pack
  "Packer generating functions."
  (:require [mikron.buffer]
            [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll])
  #?(:clj (:import [mikron.buffer Buffer])))

(defmulti pack compile-util/type-of :hierarchy #'schema/hierarchy)

(defn pack* [schema value {:keys [diffed?] :as env}]
  (if-not diffed?
    (pack schema value env)
    (compile-util/with-gensyms [value-dnil?]
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
  (compile-util/with-gensyms [length value' index]
    `(let [~length (util.coll/count ~value)]
       ~(pack [:varint] length env)
       (dotimes [~index ~length]
         (let [~value' (util.coll/nth ~value ~index)]
           ~(pack* schema' value' env))))))

(defmethod pack :coll [[_ options schema'] value env]
  (compile-util/with-gensyms [length value']
    `(let [~length (count ~value)]
       (do ~(pack [:varint] length env)
           (run! (fn [~value']
                   ~(pack* schema' value' env))
                 ~value)))))

(defmethod pack :map [[_ _ key-schema value-schema] value env]
  (compile-util/with-gensyms [length entry' key' value']
    `(let [~length (util.coll/count ~value)]
       (do ~(pack [:varint] length env)
           (run! (fn [~entry']
                   (let [~key'   (key ~entry')
                         ~value' (val ~entry')]
                     ~(pack key-schema key' env)
                     ~(pack* value-schema value' env)))
                 ~value)))))

(defmethod pack :tuple [[_ _ schemas] value env]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(compile-util/tuple-lookup value key')]
                   ~(pack* (schemas key') value' env)))
              (compile-util/tuple->fields schemas))))

(defmethod pack :record [[_ {:keys [type]} schemas] value env]
  `(do ~@(map (fn [[key' value']]
                `(let [~value' ~(compile-util/record-lookup value key' type)]
                   ~(pack* (schemas key') value' env)))
              (compile-util/record->fields schemas))))

(defmethod pack :optional [[_ _ schema'] value env]
  `(do ~(pack [:boolean] value env)
       (when ~value
         ~(pack schema' value env))))

(defmethod pack :multi [[_ _ selector multi-map] value env]
  `(case (~selector ~value)
     ~@(->> multi-map
            (keys)
            (sort)
            (map-indexed (fn [index multi-case]
                           [multi-case
                            `(do ~(pack (compile-util/integer-type (count multi-map)) index env)
                                 ~(pack (multi-map multi-case) value env))]))
            (apply concat))))

(defmethod pack :enum [[_ _ enum-values] value env]
  (pack (compile-util/integer-type (count enum-values))
        `(case ~value
           ~@(->> enum-values
                  (map-indexed (fn [index enum-value]
                                 [enum-value index]))
                  (apply concat)))
        env))

(defmethod pack :wrapped [[_ _ pre _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(let [~value' (~pre ~value)]
       ~(pack schema' value' env))))

(defmethod pack :aliased [[schema'] value env]
  (pack (schema/aliases schema') value env))

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