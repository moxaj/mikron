(ns seria.codegen.pack
  "Packer generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.coll :as util.coll]
            [seria.type :as type]
            [seria.util.common :as util.common])
  (:import  [seria.util.common DiffedValue]))

(def ^:dynamic *options*)

(defmulti pack util.schema/type-of :hierarchy #'type/hierarchy)

(defn pack-diffed [schema value]
  (if-not (:diffed? *options*)
    (pack schema value)
    (let [value-dnil? (util.symbol/postfix-gensym value "dnil?")]
      `(let [~value-dnil? (util.common/dnil? ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~(pack schema value))))))

(defmethod pack :primitive [schema value]
  `(~(symbol (format "seria.buffer/write-%s!" (name schema)))
    ~(:buffer *options*)
    ~value))

(defmethod pack :string [_ value]
  (let [char (gensym "char_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~char] ~(pack :char char))
               ~value))))

(defmethod pack :keyword [_ value]
  (let [keyword-as-str (gensym "keyword-as-str_")]
    `(let [~keyword-as-str (name ~value)]
       ~(pack :string keyword-as-str))))

(defmethod pack :symbol [_ value]
  (let [symbol-as-str (util.symbol/postfix-gensym value "str")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod pack :any [_ value]
  (let [any-as-str (util.symbol/postfix-gensym value "str")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod pack :nil [_ _]
  nil)

(defmethod pack :list [[_ _ inner-schema] value]
  (let [inner-value (util.symbol/postfix-gensym value "item")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack-diffed inner-schema inner-value))
               ~value))))

(defmethod pack :vector [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod pack :set [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod pack :map [[_ _ key-schema val-schema] value]
  (let [key (util.symbol/postfix-gensym value "key")
        val (util.symbol/postfix-gensym value "val")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(pack-diffed val-schema val))
               ~value))))

(defmethod pack :tuple [schema value]
  (let [destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (pack-diffed inner-schema inner-value))
                     destructured)))))

(defmethod pack :record [schema value]
  (let [schema       (util.schema/expand-record schema (:schemas *options*))
        destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (pack-diffed inner-schema inner-value))
                     destructured)))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(pack inner-schema value))))

(defmethod pack :multi [[_ _ selector multi-map] value]
  `(case (~selector ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :varint (->> multi-map (keys) (sort) (util.coll/index-of multi-case)))
                       ~(pack inner-schema value))])
               multi-map)))

(defmethod pack :enum [[_ _ enum-values] value]
  (pack :varint `(case ~value
                   ~@(mapcat (fn [enum-value]
                               [enum-value (util.coll/index-of enum-value enum-values)])
                             enum-values))))

(defmethod pack :custom [schema value]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util.symbol/processor-name (if diffed? :pack-diffed-inner* :pack-inner*)
                                   schema)
      ~buffer ~value)))

;; API

(defn make-inner-packer [schema-name {:keys [schemas diffed?] :as options}]
  (util.symbol/with-gensyms [value buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util.symbol/processor-name (if diffed? :pack-diffed-inner* :pack-inner*)
                                                schema-name)
                    {:private true})
        [~buffer ~value]
        ~(pack-diffed (schemas schema-name) value)
        ~buffer))))

(defn make-packer [schema-name {:keys [schemas processor-types]}]
  (util.symbol/with-gensyms [value options diffed?]
    (let [buffer (util.symbol/var-name :buffer)]
      `(~(util.symbol/processor-name :pack schema-name)
        [~value ~options]
        (let [~diffed? (instance? DiffedValue ~value)
              ~value   (if ~diffed? (:value ~value) ~value)]
          ~(util.common/wrap-locking buffer
             `(-> ~buffer
                  (buffer/write-headers! ~(->> schemas (keys) (sort) (util.coll/index-of schema-name))
                                         ~diffed?)
                  ((if ~diffed?
                     ~(util.symbol/processor-name :pack-diffed-inner* schema-name)
                     ~(util.symbol/processor-name :pack-inner* schema-name))
                   ~value)
                  (buffer/compress))))))))
