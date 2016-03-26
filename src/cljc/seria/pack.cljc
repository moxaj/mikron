(ns seria.pack
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.type :as type]
            [seria.varint :as varint]))

(def ^:dynamic *config*)
(def ^:dynamic *diffed?*)

(defmulti pack util/schema-dispatch)
(defmulti unpack util/schema-dispatch)

(defn as-diffed [value pack-value]
  (let [pack-value-fn (gensym "pack-value-fn_")
        value-dnil?   (gensym "value-dnil?_")]
    (if-not *diffed?*
      pack-value
      `(let [~value-dnil? (= :seria/dnil ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~pack-value)))))

(defn as-undiffed [unpack-value]
  (let [unpack-value-fn (gensym "unpack-value-fn_")]
    (if-not *diffed?*
      unpack-value
      `(if ~(unpack :boolean)
         :seria/dnil
         ~unpack-value))))

(defmethod pack :byte [_ value]
  `(buffer/write-byte! ~'buffer ~value))

(defmethod unpack :byte [_]
  `(buffer/read-byte! ~'buffer))

(defmethod pack :ubyte [_ value]
  `(buffer/write-ubyte! ~'buffer ~value))

(defmethod unpack :ubyte [_]
  `(buffer/read-ubyte! ~'buffer))

(defmethod pack :short [_ value]
  `(buffer/write-short! ~'buffer ~value))

(defmethod unpack :short [_]
  `(buffer/read-short! ~'buffer))

(defmethod pack :ushort [_ value]
  `(buffer/write-ushort! ~'buffer ~value))

(defmethod unpack :ushort [_]
  `(buffer/read-ushort! ~'buffer))

(defmethod pack :int [_ value]
  `(buffer/write-int! ~'buffer ~value))

(defmethod unpack :int [_]
  `(buffer/read-int! ~'buffer))

(defmethod pack :uint [_ value]
  `(buffer/write-uint! ~'buffer ~value))

(defmethod unpack :uint [_]
  `(buffer/read-uint! ~'buffer))

(defmethod pack :long [_ value]
  `(buffer/write-long! ~'buffer ~value))

(defmethod unpack :long [_]
  `(buffer/read-long! ~'buffer))

(defmethod pack :float [_ value]
  `(buffer/write-float! ~'buffer ~value))

(defmethod unpack :float [_]
  `(buffer/read-float! ~'buffer))

(defmethod pack :double [_ value]
  `(buffer/write-double! ~'buffer ~value))

(defmethod unpack :double [_]
  `(buffer/read-double! ~'buffer))

(defmethod pack :char [_ value]
  `(buffer/write-char! ~'buffer ~value))

(defmethod unpack :char [_]
  `(buffer/read-char! ~'buffer))

(defmethod pack :boolean [_ value]
  `(buffer/write-boolean! ~'buffer ~value))

(defmethod unpack :boolean [_]
  `(buffer/read-boolean! ~'buffer))

(defmethod pack :varint [_ value]
  `(varint/write-varint! ~'buffer ~value))

(defmethod unpack :varint [_]
  `(varint/read-varint! ~'buffer))

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
  (let [symbol-as-str (gensym "symbol-as-str_")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod pack :any [_ value]
  (let [any-as-str (gensym "any-as-str_")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod unpack :any [_]
  `(util/cljc-read-string ~(unpack :string)))

(defmethod pack :list [[_ _ inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(as-diffed inner-value (pack inner-schema inner-value)))
               ~value))))

(defmethod unpack :list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :varint)
                      (fn [] ~(as-undiffed (unpack inner-schema))))))

(defmethod pack :vector [[_ _ inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(as-diffed inner-value (pack inner-schema inner-value)))
               ~value))))

(defmethod unpack :vector [[_ _ inner-schema]]
  `(vec (repeatedly ~(unpack :varint)
                    (fn [] ~(as-undiffed (unpack inner-schema))))))

(defmethod pack :set [[_ _ inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack inner-schema inner-value))
               ~value))))

(defmethod unpack :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] ~(unpack inner-schema)))
       (util/as-set sorted-by)))

(defmethod pack :map [[_ _ key-schema val-schema] value]
  (let [key (gensym "key_")
        val (gensym "val_")]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(as-diffed val (pack val-schema val)))
               ~value))))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] [~(unpack key-schema)
                            ~(as-undiffed (unpack val-schema))]))
       (util/as-map sorted-by)))

(defmethod pack :tuple [schema value]
  (let [disjoined (util/disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffed inner-value (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (as-undiffed (unpack inner-schema)))
                    inner-schemas)))

(defmethod pack :record [schema value]
  (let [schema    (util/expand-record schema (:schemas *config*))
        disjoined (util/disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (as-diffed inner-value (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :record [schema]
  (let [[_ {:keys [constructor]} record-map] (util/expand-record schema (:schemas *config*))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (as-undiffed (unpack (record-map key)))]))
         (into {})
         (util/as-record constructor))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(as-diffed value (pack inner-schema value)))))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(as-undiffed (unpack inner-schema))))

(defmethod pack :multi [[_ _ selector arg-map] value]
  `(case (~(util/runtime-fn selector) ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :varint (get-in *config* [:multi-bimap multi-case]))
                       ~(as-diffed value (pack inner-schema value)))])
               arg-map)))

(defmethod unpack :multi [[_ _ _ arg-map]]
  `(case (get ~(:multi-bimap *config*) ~(unpack :varint))
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case (as-undiffed (unpack inner-schema))])
               arg-map)))

(defmethod pack :enum [_ value]
  (pack :varint `(get ~(:enum-bimap *config*) ~value)))

(defmethod unpack :enum [_]
  `(get ~(:enum-bimap *config*) ~(unpack :varint)))

(defmethod pack :custom [schema value]
  `(~(util/runtime-processor schema :packer) ~'buffer ~value ~'config))

(defmethod unpack :custom [schema]
  `(~(util/runtime-processor schema :unpacker) ~'buffer ~'config))

(defn make-packer [schema config diffed?]
  (binding [*config*  config
            *diffed?* diffed?]
    `(fn [~'buffer ~'value ~'config]
       ~(as-diffed 'value (pack schema 'value))
       ~'buffer)))

(defn make-unpacker [schema config diffed?]
  (binding [*config*  config
            *diffed?* diffed?]
    `(fn [~'buffer ~'config]
       ~(as-undiffed (unpack schema)))))
