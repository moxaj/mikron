(ns seria.codegen.pack
  "Packer generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti pack type/type-of :default :custom)

(defn as-diffable [value body]
  (if-not (:diffed? *options*)
    body
    (let [value-dnil? (util/postfix-gensym value "dnil?")]
      `(let [~value-dnil? (= :seria/dnil ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~body)))))

(defmethod pack :byte [_ value]
  `(buffer/write-byte! ~(:buffer *options*) ~value))

(defmethod pack :ubyte [_ value]
  `(buffer/write-ubyte! ~(:buffer *options*) ~value))

(defmethod pack :short [_ value]
  `(buffer/write-short! ~(:buffer *options*) ~value))

(defmethod pack :ushort [_ value]
  `(buffer/write-ushort! ~(:buffer *options*) ~value))

(defmethod pack :int [_ value]
  `(buffer/write-int! ~(:buffer *options*) ~value))

(defmethod pack :uint [_ value]
  `(buffer/write-uint! ~(:buffer *options*) ~value))

(defmethod pack :long [_ value]
  `(buffer/write-long! ~(:buffer *options*) ~value))

(defmethod pack :float [_ value]
  `(buffer/write-float! ~(:buffer *options*) ~value))

(defmethod pack :double [_ value]
  `(buffer/write-double! ~(:buffer *options*) ~value))

(defmethod pack :char [_ value]
  `(buffer/write-char! ~(:buffer *options*) ~value))

(defmethod pack :boolean [_ value]
  `(buffer/write-boolean! ~(:buffer *options*) ~value))

(defmethod pack :varint [_ value]
  `(buffer/write-varint! ~(:buffer *options*) ~value))

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
  (let [symbol-as-str (util/postfix-gensym value "str")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod pack :any [_ value]
  (let [any-as-str (util/postfix-gensym value "str")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod pack :nil [_ _]
  nil)

(defmethod pack :list [[_ _ inner-schema] value]
  (let [inner-value (util/postfix-gensym value "item")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(as-diffable inner-value (pack inner-schema inner-value)))
               ~value))))

(defmethod pack :vector [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod pack :set [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod pack :map [[_ _ key-schema val-schema] value]
  (let [key (util/postfix-gensym value "key")
        val (util/postfix-gensym value "val")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(as-diffable val (pack val-schema val)))
               ~value))))

(defmethod pack :tuple [schema value]
  (let [destructured (util/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffable inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod pack :record [schema value]
  (let [schema       (util/expand-record schema (get-in *options* [:config :schemas]))
        destructured (util/destructure-indexed schema value false)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffable inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(pack inner-schema value))))

(defmethod pack :multi [[_ _ selector arg-map] value]
  `(case (~selector ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :varint (get-in *options* [:config :multi-map multi-case]))
                       ~(pack inner-schema value))])
               arg-map)))

(defmethod pack :enum [_ value]
  (pack :varint `(~(:enum-map (:config *options*)) ~value)))

(defmethod pack :custom [schema value]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util/processor-name (if diffed? :pack-diffed-inner :pack-inner)
                            schema)
      ~buffer ~value)))

(defn make-inner-packer [schema-name config diffed?]
  (let [buffer (gensym "buffer_")
        value  (gensym "value_")
        schema (get-in config [:schemas schema-name])]
    (binding [*options* {:config  config
                         :diffed? diffed?
                         :buffer  buffer}]
      `(~(util/processor-name (if diffed? :pack-diffed-inner :pack-inner)
                              schema-name)
        [~buffer ~value]
        ~(as-diffable value (pack schema value))
        ~buffer))))

(defn make-packer [schema-name config]
  (let [buffer  (gensym "buffer_")
        value   (gensym "value_")
        diff-id (gensym "diff-id_")
        diffed? (gensym "diffed?_")]
    `(~(util/processor-name :pack schema-name)
      [~value & {:keys [~buffer ~diff-id ~diffed?]
                 :or   {~buffer  seria.core/*buffer*
                        ~diffed? false
                        ~diff-id 0}}]
      (-> ~buffer
          (buffer/write-headers! ~(get-in config [:schema-map schema-name])
                                 ~diff-id
                                 ~diffed?)
          ((if diffed?
             ~(util/processor-name :pack-diffed-inner schema-name)
             ~(util/processor-name :pack-inner schema-name)))
          (buffer/compress)))))
