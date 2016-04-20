(ns seria.codegen.pack
  "Packer generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util.schema :as util.schema]
            [seria.util.symbol :as util.symbol]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti pack type/type-of :hierarchy #'type/hierarchy)

(defn as-diffable [value body]
  (if-not (:diffed? *options*)
    body
    (let [value-dnil? (util.symbol/postfix-gensym value "dnil?")]
      `(let [~value-dnil? (= :s/dnil ~value)]
         ~(pack :s/boolean value-dnil?)
         (when-not ~value-dnil?
           ~body)))))

(defmethod pack :s/primitive [schema value]
  `(~(symbol (format "seria.buffer/write-%s!" (name schema)))
    ~(:buffer *options*)
    ~value))

(defmethod pack :s/string [_ value]
  (let [char (gensym "char_")]
    `(do ~(pack :s/varint `(count ~value))
         (run! (fn [~char] ~(pack :s/char char))
               ~value))))

(defmethod pack :s/keyword [_ value]
  (let [keyword-as-str (gensym "keyword-as-str_")]
    `(let [~keyword-as-str (name ~value)]
       ~(pack :s/string keyword-as-str))))

(defmethod pack :s/symbol [_ value]
  (let [symbol-as-str (util.symbol/postfix-gensym value "str")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :s/string symbol-as-str))))

(defmethod pack :s/any [_ value]
  (let [any-as-str (util.symbol/postfix-gensym value "str")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :s/string any-as-str))))

(defmethod pack :s/nil [_ _]
  nil)

(defmethod pack :s/list [[_ _ inner-schema] value]
  (let [inner-value (util.symbol/postfix-gensym value "item")]
    `(do ~(pack :s/varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(as-diffable inner-value (pack inner-schema inner-value)))
               ~value))))

(defmethod pack :s/vector [[_ _ inner-schema] value]
  (pack [:s/list {} inner-schema] value))

(defmethod pack :s/set [[_ _ inner-schema] value]
  (pack [:s/list {} inner-schema] value))

(defmethod pack :s/map [[_ _ key-schema val-schema] value]
  (let [key (util.symbol/postfix-gensym value "key")
        val (util.symbol/postfix-gensym value "val")]
    `(do ~(pack :s/varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(as-diffable val (pack val-schema val)))
               ~value))))

(defmethod pack :s/tuple [schema value]
  (let [destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (as-diffable inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod pack :s/record [schema value]
  (let [schema       (util.schema/expand-record schema (:schemas *options*))
        destructured (util.schema/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :value) destructured)]
       ~@(doall (map (fn [{inner-schema :schema inner-value :symbol index :index}]
                       (as-diffable inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod pack :s/optional [[_ _ inner-schema] value]
  `(do ~(pack :s/boolean value)
       (when ~value
         ~(pack inner-schema value))))

(defmethod pack :s/multi [[_ _ selector arg-map] value]
  `(case (~selector ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :s/varint (get-in *options* [:multi-ids multi-case]))
                       ~(pack inner-schema value))])
               arg-map)))

(defmethod pack :s/enum [[_ _ enum-values] value]
  (pack :s/varint `(case ~value
                     ~@(mapcat (fn [enum-value]
                                 [enum-value (get-in *options* [:enum-ids enum-value])])
                               enum-values))))

(defmethod pack :s/custom [schema value]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util.symbol/processor-name (if diffed? :pack-diffed-inner* :pack-inner*)
                                   schema)
      ~buffer ~value)))

(defn make-inner-packer [schema-name {:keys [schemas diffed?] :as options}]
  (util.symbol/with-gensyms [value buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util.symbol/processor-name (if diffed? :pack-diffed-inner* :pack-inner*)
                                                schema-name)
                    {:private true})
        [~buffer ~value]
        ~(as-diffable value (pack (schemas schema-name) value))
        ~buffer))))

(def common-packer
  (util.symbol/with-gensyms [value buffer schema-id diff-id diffed? pack-fn]
    `(~(with-meta 'pack {:private true})
      [~value ~buffer ~schema-id ~diff-id ~diffed? ~pack-fn]
      (-> ~buffer
          (buffer/write-headers! ~schema-id ~diff-id ~diffed?)
          (~pack-fn ~value)
          (buffer/compress)))))

(defn make-packer [schema-name {:keys [schema-ids processor-types]}]
  (util.symbol/with-gensyms [value buffer diff-id diffed?]
    (let [processor-name (util.symbol/processor-name :pack schema-name)]
      `(~processor-name
        ([~value ~buffer]
         (~processor-name ~value ~buffer 0 false))
        ([~value ~buffer ~diff-id]
         (~processor-name ~value ~diff-id false))
        ([~value ~buffer ~diff-id ~diffed?]
         (~'pack ~value
                 ~buffer
                 ~(schema-ids schema-name)
                 ~diff-id
                 ~diffed?
                 ~(if-not (processor-types :diff)
                    (util.symbol/processor-name :pack-inner* schema-name)
                    `(if ~diffed?
                       ~(util.symbol/processor-name :pack-diffed-inner* schema-name)
                       ~(util.symbol/processor-name :pack-inner* schema-name)))))))))
