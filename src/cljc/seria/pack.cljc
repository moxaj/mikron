(ns seria.pack
  "Packer and unpacker generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.type :as type]))

(def ^:dynamic *opts*)

(defmulti pack type/type-of)
(defmulti unpack type/type-of)

(defn as-diffed [value body]
  (if-not (:diffed? *opts*)
    body
    (let [value-dnil? (util/postfix-gensym value "dnil?")]
      `(let [~value-dnil? (= :seria/dnil ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~body)))))

(defn as-undiffed [body]
  (if-not (:diffed? *opts*)
    body
    `(if ~(unpack :boolean)
       :seria/dnil
       ~body)))

(defmethod pack :byte [_ value]
  `(buffer/write-byte! ~(:buffer *opts*) ~value))

(defmethod unpack :byte [_]
  `(buffer/read-byte! ~(:buffer *opts*)))

(defmethod pack :ubyte [_ value]
  `(buffer/write-ubyte! ~(:buffer *opts*) ~value))

(defmethod unpack :ubyte [_]
  `(buffer/read-ubyte! ~(:buffer *opts*)))

(defmethod pack :short [_ value]
  `(buffer/write-short! ~(:buffer *opts*) ~value))

(defmethod unpack :short [_]
  `(buffer/read-short! ~(:buffer *opts*)))

(defmethod pack :ushort [_ value]
  `(buffer/write-ushort! ~(:buffer *opts*) ~value))

(defmethod unpack :ushort [_]
  `(buffer/read-ushort! ~(:buffer *opts*)))

(defmethod pack :int [_ value]
  `(buffer/write-int! ~(:buffer *opts*) ~value))

(defmethod unpack :int [_]
  `(buffer/read-int! ~(:buffer *opts*)))

(defmethod pack :uint [_ value]
  `(buffer/write-uint! ~(:buffer *opts*) ~value))

(defmethod unpack :uint [_]
  `(buffer/read-uint! ~(:buffer *opts*)))

(defmethod pack :long [_ value]
  `(buffer/write-long! ~(:buffer *opts*) ~value))

(defmethod unpack :long [_]
  `(buffer/read-long! ~(:buffer *opts*)))

(defmethod pack :float [_ value]
  `(buffer/write-float! ~(:buffer *opts*) ~value))

(defmethod unpack :float [_]
  `(buffer/read-float! ~(:buffer *opts*)))

(defmethod pack :double [_ value]
  `(buffer/write-double! ~(:buffer *opts*) ~value))

(defmethod unpack :double [_]
  `(buffer/read-double! ~(:buffer *opts*)))

(defmethod pack :char [_ value]
  `(buffer/write-char! ~(:buffer *opts*) ~value))

(defmethod unpack :char [_]
  `(buffer/read-char! ~(:buffer *opts*)))

(defmethod pack :boolean [_ value]
  `(buffer/write-boolean! ~(:buffer *opts*) ~value))

(defmethod unpack :boolean [_]
  `(buffer/read-boolean! ~(:buffer *opts*)))

(defmethod pack :varint [_ value]
  `(buffer/write-varint! ~(:buffer *opts*) ~value))

(defmethod unpack :varint [_]
  `(buffer/read-varint! ~(:buffer *opts*)))

(defmethod pack :string [_ value]
  (let [char (gensym "char_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~char] ~(pack :char char))
               ~value))))

(defmethod unpack :string [_]
  `(apply str (repeatedly ~(unpack :varint)
                          (fn [] ~(unpack :char)))))

(defmethod pack :keyword [_ value]
  (let [keyword-as-str (gensym "keyword-as-str_")]
    `(let [~keyword-as-str (name ~value)]
       ~(pack :string keyword-as-str))))

(defmethod unpack :keyword [_]
  `(keyword ~(unpack :string)))

(defmethod pack :symbol [_ value]
  (let [symbol-as-str (util/postfix-gensym value "str")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod pack :any [_ value]
  (let [any-as-str (util/postfix-gensym value "str")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod unpack :any [_]
  `(util/cljc-read-string ~(unpack :string)))

(defmethod pack :list [[_ _ inner-schema] value]
  (let [inner-value (util/postfix-gensym value "item")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(as-diffed inner-value (pack inner-schema inner-value)))
               ~value))))

(defmethod unpack :list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :varint)
                      (fn [] ~(as-undiffed (unpack inner-schema))))))

(defmethod pack :vector [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod unpack :vector [[_ _ inner-schema]]
  `(vec ~(unpack [:list {} inner-schema])))

(defmethod pack :set [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod unpack :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (unpack [:list {} inner-schema])
       (util/as-set sorted-by (:live-config *opts*))))

(defmethod pack :map [[_ _ key-schema val-schema] value]
  (let [key (util/postfix-gensym value "key")
        val (util/postfix-gensym value "val")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(as-diffed val (pack val-schema val)))
               ~value))))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] [~(unpack key-schema)
                            ~(as-undiffed (unpack val-schema))]))
       (util/as-map sorted-by (:live-config *opts*))))

(defmethod pack :tuple [schema value]
  (let [destructured (util/destructure-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffed inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod unpack :tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (as-undiffed (unpack inner-schema)))
                    inner-schemas)))

(defmethod pack :record [schema value]
  (let [schema       (util/expand-record schema (:schemas (:config *opts*)))
        destructured (util/destructure-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) destructured)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffed inner-value (pack inner-schema inner-value)))
                     destructured)))))

(defmethod unpack :record [schema]
  (let [[_ {:keys [constructor]} record-map] (util/expand-record schema (:schemas (:config *opts*)))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (as-undiffed (unpack (record-map key)))]))
         (into {})
         (util/as-record constructor (:live-config *opts*)))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(as-diffed value (pack inner-schema value)))))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(as-undiffed (unpack inner-schema))))

(defmethod pack :multi [[_ _ selector arg-map] value]
  `(case (~(util/runtime-fn selector (:live-config *opts*)) ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :varint (get-in *opts* [:config :multi-map multi-case]))
                       ~(as-diffed value (pack inner-schema value)))])
               arg-map)))

(defmethod unpack :multi [[_ _ _ arg-map]]
  `(case (get ~(:multi-map (:config *opts*)) ~(unpack :varint))
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case (as-undiffed (unpack inner-schema))])
               arg-map)))

(defmethod pack :enum [_ value]
  (pack :varint `(~(:enum-map (:config *opts*)) ~value)))

(defmethod unpack :enum [_]
  `(~(:enum-map (:config *opts*)) ~(unpack :varint)))

(defmethod pack :custom [schema value]
  (let [live-config (:live-config *opts*)]
    `(~(util/runtime-processor schema :packer live-config)
      ~(:buffer *opts*)
      ~value
      ~live-config)))

(defmethod unpack :custom [schema]
  (let [live-config (:live-config *opts*)]
    `(~(util/runtime-processor schema :unpacker live-config)
      ~(:buffer *opts*)
      ~live-config)))

(defn make-packer [schema config diffed?]
  (let [buffer      (gensym "buffer_")
        value       (gensym "value_")
        live-config (gensym "config_")]
    (binding [*opts* {:config      config
                      :diffed?     diffed?
                      :live-config live-config
                      :buffer      buffer}]
      `(fn [~buffer ~value ~live-config]
         ~(as-diffed value (pack schema value))
         ~(:buffer *opts*)))))

(defn make-unpacker [schema config diffed?]
  (let [buffer      (gensym "buffer_")
        live-config (gensym "config_")]
    (binding [*opts* {:config      config
                      :diffed?     diffed?
                      :live-config live-config
                      :buffer      buffer}]
      `(fn [~buffer ~live-config]
         ~(as-undiffed (unpack schema))))))
