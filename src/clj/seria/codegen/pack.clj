(ns seria.codegen.pack
  "Packer generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.util.coll :as util.coll]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti pack util.schema/type-of :hierarchy #'type/hierarchy)

(defn wrap-diffed [value body]
  (if-not (:diffed? *options*)
    body
    (let [value-dnil? (util.symbol/postfix-gensym value "dnil?")]
      `(let [~value-dnil? (= :dnil ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~body)))))

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
                 ~(wrap-diffed inner-value (pack inner-schema inner-value)))
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
                 ~(wrap-diffed val (pack val-schema val)))
               ~value))))

(defmethod pack :tuple [schema value]
  (let [destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (wrap-diffed inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod pack :record [schema value]
  (let [schema       (util.schema/expand-record schema (:schemas *options*))
        destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (wrap-diffed inner-value (pack inner-schema inner-value)))
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

(defn make-inner-packer [schema-name {:keys [schemas diffed?] :as options}]
  (util.symbol/with-gensyms [value buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(defn ~(with-meta (util.symbol/processor-name (if diffed? :pack-diffed-inner* :pack-inner*)
                                                     schema-name)
                         {:private true})
        [~buffer ~value]
        ~(wrap-diffed value (pack (schemas schema-name) value))
        ~buffer))))

(def common-packer
  (util.symbol/with-gensyms [value buffer schema-id diffed? pack-fn]
    `(defn ~(with-meta 'pack {:private true})
      [~value ~buffer ~schema-id ~diffed? ~pack-fn]
      (-> ~buffer
          (buffer/write-headers! ~schema-id ~diffed?)
          (~pack-fn ~value)
          (buffer/compress)))))

(defn make-packer [schema-name {:keys [schemas processor-types]}]
  (util.symbol/with-gensyms [value buffer diffed?]
    (let [processor-name (util.symbol/processor-name :pack schema-name)]
      `(defn ~processor-name
        ([~value ~buffer]
         (~processor-name ~value ~buffer false))
        ([~value ~buffer ~diffed?]
         (~'pack ~value
                 ~buffer
                 ~(->> schemas (keys) (sort) (util.coll/index-of schema-name))
                 ~diffed?
                 ~(if-not (processor-types :diff)
                    (util.symbol/processor-name :pack-inner* schema-name)
                    `(if ~diffed?
                       ~(util.symbol/processor-name :pack-diffed-inner* schema-name)
                       ~(util.symbol/processor-name :pack-inner* schema-name)))))))))
