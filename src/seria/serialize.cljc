(ns seria.serialize
  (:require [seria.buffer :refer [read-byte! read-short! read-int!
                                  read-ubyte! read-ushort! read-uint!
                                  read-long! read-float! read-double!
                                  read-char! read-boolean!
                                  write-byte! write-short! write-int!
                                  write-ubyte! write-ushort! write-uint!
                                  write-long! write-float! write-double!
                                  write-char! write-boolean!]]
            [seria.util :refer [disj-indexed cljc-read-string]]
            [seria.validate :refer [primitive? advanced? composite?]]
            [seria.delta :refer [dnil? dnil]]))

; ugly hack crying out for help
(def global-embed-map (atom {}))

(defn retrieve-embedded [config-id embedded-fn]
  (let [key (get-in @global-embed-map [config-id embedded-fn])]
    `(get-in @global-embed-map [~config-id ~key])))

(defn primitive-size [schema]
  (case schema
    :byte 1
    :ubyte 1
    :short 2
    :ushort 2
    :int 4
    :uint 4
    :long 8
    :float 4
    :double 8
    :char 2
    :boolean 1))

(defn unroll-record [schemas [_ {:keys [extends] :as options} record-map :as record]]
  (if-not (seq extends)
    record
    [:record options (merge (->> extends
                                 (map #(nth (->> (get schemas %)
                                                 (unroll-record schemas))
                                            2))
                                 (apply merge))
                            record-map)]))

(defn pack-dispatch [schema {:keys [schema-map]} & _]
  (cond
    (primitive? schema) :primitive
    (advanced? schema) schema
    (composite? schema) (first schema)
    (contains? schema-map schema) :top-schema))

(defmulti pack* pack-dispatch)

(defmulti unpack* pack-dispatch)


(defmethod pack* :primitive [schema _ value]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)]
    `(do ~(case schema
            :byte `(write-byte! ~'buffer @~position ~value)
            :ubyte `(write-ubyte! ~'buffer @~position ~value)
            :short `(write-short! ~'buffer @~position ~value)
            :ushort `(write-ushort! ~'buffer @~position ~value)
            :int `(write-int! ~'buffer @~position ~value)
            :uint `(write-uint! ~'buffer @~position ~value)
            :long `(write-long! ~'buffer @~position ~value)
            :float `(write-float! ~'buffer @~position ~value)
            :double `(write-double! ~'buffer @~position ~value)
            :char `(write-char! ~'buffer @~position ~value)
            :boolean `(write-boolean! ~'buffer @~position ~value)
            nil)
         (vswap! ~position unchecked-add ~(primitive-size schema)))))

(defmethod unpack* :primitive [schema _]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        value    (gensym "value_")]
    `(let [~value ~(case schema
                     :byte `(read-byte! ~'buffer @~position)
                     :ubyte `(read-ubyte! ~'buffer @~position)
                     :short `(read-short! ~'buffer @~position)
                     :ushort `(read-ushort! ~'buffer @~position)
                     :int `(read-int! ~'buffer @~position)
                     :uint `(read-uint! ~'buffer @~position)
                     :long `(read-long! ~'buffer @~position)
                     :float `(read-float! ~'buffer @~position)
                     :double `(read-double! ~'buffer @~position)
                     :char `(read-char! ~'buffer @~position)
                     :boolean `(read-boolean! ~'buffer @~position)
                     nil)]
       (vswap! ~position unchecked-add ~(primitive-size schema))
       ~value)))


(defmethod pack* :string [_ config value]
  (let [char (gensym "char_")]
    `(do ~(pack* :ushort config `(count ~value))
         (run! (fn [~char] ~(pack* :char config char))
               ~value))))

(defmethod unpack* :string [_ config]
  `(apply str (repeatedly ~(unpack* :ushort config)
                          (fn [] ~(unpack* :char config)))))


(defmethod pack* :keyword [_ config value]
  (let [keyword-as-str (gensym "keyword-as-str_")]
    `(let [~keyword-as-str (subs (str ~value) 1)]
       ~(pack* :string config keyword-as-str))))

(defmethod unpack* :keyword [_ config]
  `(keyword ~(unpack* :string config)))


(defmethod pack* :symbol [_ config value]
  (let [symbol-as-str (gensym "symbol-as-str_")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack* :string config symbol-as-str))))

(defmethod unpack* :symbol [_ config]
  `(symbol ~(unpack* :string config)))


(defmethod pack* :any [_ config value]
  (let [any-as-str (gensym "value-as-str_")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack* :string config any-as-str))))

(defmethod unpack* :any [_ config]
  `((cljc-read-string) ~(unpack* :string config)))


(defmethod pack* :list [[_ {:keys [size]} sub-schema] config value]
  (let [list-item (gensym "list-item_")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [~list-item]
                 ~(pack* sub-schema config list-item))
               ~value))))

(defmethod unpack* :list [[_ {:keys [size]} sub-schema] config]
  `(doall (repeatedly ~(unpack* size config)
                      (fn [] ~(unpack* sub-schema config)))))


(defmethod pack* :vector [[_ {:keys [size delta]} sub-schema] config value]
  (let [vector-item (gensym "vector-item_")
        is-dnil?    (gensym "is-dnil?_")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [~vector-item]
                 ~(if-not (:enabled delta)
                    (pack* sub-schema config vector-item)
                    `(let [~is-dnil? (dnil? ~vector-item)]
                       ~(pack* :boolean config is-dnil?)
                       (when-not ~is-dnil?
                         ~(pack* sub-schema config vector-item)))))
               ~value))))

(defmethod unpack* :vector [[_ {:keys [size delta]} sub-schema] config]
  `(vec (repeatedly ~(unpack* size config)
                    (fn [] ~(if-not (:enabled delta)
                              (unpack* sub-schema config)
                              `(if ~(unpack* :boolean config)
                                 ~dnil
                                 ~(unpack* sub-schema config)))))))


(defmethod pack* :set [[_ {:keys [size]} sub-schema] config value]
  (let [set-item (gensym "set-item_")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [~set-item]
                 ~(pack* sub-schema config set-item))
               ~value))))

(defmethod unpack* :set [[_ {:keys [size sorted-by]} sub-schema] {:keys [config-id] :as config}]
  `(->> (repeatedly ~(unpack* size config)
                    (fn [] ~(unpack* sub-schema config)))
        (into ~(case sorted-by
                 :none `(hash-set)
                 :default `(sorted-set)
                 `(sorted-set-by ~(retrieve-embedded config-id sorted-by))))))


(defmethod pack* :map [[_ {:keys [size delta]} key-schema value-schema] config value]
  (let [key      (gensym "key_")
        val      (gensym "val_")
        is-dnil? (gensym "is-dnil?_")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack* key-schema config key)
                 ~(if-not (:enabled delta)
                    (pack* value-schema config val)
                    `(let [~is-dnil? (dnil? ~val)]
                       ~(pack* :boolean config ~is-dnil?)
                       (when-not ~is-dnil?
                         ~(pack* value-schema config val)))))
               ~value))))

(defmethod unpack* :map [[_ {:keys [size delta sorted-by]} key-schema value-schema] {:keys [config-id] :as config}]
  `(into ~(case sorted-by
            :none `(hash-map)
            :default `(sorted-map)
            `(sorted-map-by ~(retrieve-embedded config-id sorted-by)))
         (repeatedly ~(unpack* size config)
                     (fn [] [~(unpack* key-schema config)
                             ~(if-not (:enabled delta)
                                (unpack* value-schema config)
                                `(if ~(unpack* :boolean config)
                                   ~dnil
                                   ~(unpack* value-schema config)))]))))


(defmethod pack* :tuple [[_ {:keys [delta]} :as schema] config value]
  (let [disjoined (disj-indexed schema value)
        is-dnil?  (gensym "is-dnil?_")]
    `(let [~@(mapcat (juxt :symbol :sub-value) disjoined)]
       ~@(map (fn [{:keys [symbol sub-schema]}]
                (if-not (:enabled delta)
                  (pack* sub-schema config symbol)
                  `(let [~is-dnil? (dnil? ~symbol)]
                     ~(pack* :boolean config is-dnil?)
                     (when-not ~is-dnil?
                       ~(pack* sub-schema config symbol)))))
              disjoined))))

(defmethod unpack* :tuple [[_ {:keys [delta]} sub-schemas] config]
  `[~@(map (fn [sub-schema]
             (if-not (:enabled delta)
               (unpack* sub-schema config)
               `(if ~(unpack* :boolean config)
                  ~dnil
                  ~(unpack* sub-schema config))))
           sub-schemas)])


(defmethod pack* :record [[_ {:keys [delta]} :as schema] {:keys [schemas] :as config} value]
  (let [disjoined (disj-indexed (unroll-record schemas schema) value)
        is-dnil?  (gensym "is-dnil?_")]
    `(let [~@(mapcat (juxt :symbol :sub-value) disjoined)]
       ~@(map (fn [{:keys [symbol sub-schema]}]
                (if-not (:enabled delta)
                  (pack* sub-schema config symbol)
                  `(let [~is-dnil? (dnil? ~symbol)]
                     ~(pack* :boolean config is-dnil?)
                     (when-not ~is-dnil?
                       ~(pack* sub-schema config symbol)))))
              disjoined))))


(defmethod unpack* :record [[_ {:keys [delta]} :as schema] {:keys [schemas config-id] :as config}]
  (let [[_ {:keys [constructor]} record-map] (unroll-record schemas schema)
        unpack-body `(hash-map ~@(mapcat (fn [[key value-schema]]
                                           [key (if-not (:enabled delta)
                                                  (unpack* value-schema config)
                                                  `(if ~(unpack* :boolean config)
                                                     ~dnil
                                                     ~(unpack* value-schema config)))])
                                         record-map))]
    (if constructor
      `(~(retrieve-embedded config-id constructor) ~unpack-body)
      unpack-body)))


(defmethod pack* :optional [[_ _ sub-schema] config value]
  (let [value-present? (gensym "value-present?_")]
    `(let [~value-present? (boolean ~value)]
       ~(pack* :boolean config value-present?)
       (when ~value-present?
         ~(pack* sub-schema config value)))))

(defmethod unpack* :optional [[_ _ sub-schema] config]
  `(when ~(unpack* :boolean config)
     ~(unpack* sub-schema config)))


(defmethod pack* :multi
  [[_ _ selector arg-map] {:keys [multi-map multi-size config-id] :as config} value]
  (let [case-body (mapcat (fn [[multi-case sub-schema]]
                            [multi-case `(do ~(pack* multi-size config (get multi-map multi-case))
                                             ~(pack* sub-schema config value))])
                          arg-map)]
    `(case (~(retrieve-embedded config-id selector)
             ~value)
       ~@case-body)))

(defmethod unpack* :multi
  [[_ _ _ arg-map] {:keys [multi-map multi-size] :as config}]
  (let [case-body (mapcat (fn [[condition sub-schema]]
                            [condition (unpack* sub-schema config)])
                          arg-map)]
    `(case (get ~multi-map ~(unpack* multi-size config))
       ~@case-body)))


(defmethod pack* :enum [_ {:keys [enum-map enum-size] :as config} value]
  (pack* enum-size config `(get ~enum-map ~value)))

(defmethod unpack* :enum [_ {:keys [enum-map enum-size] :as config}]
  `(get ~enum-map ~(unpack* enum-size config)))


(defmethod pack* :top-schema [schema config value]
  (pack* (get-in config [:schemas schema]) config value))

(defmethod unpack* :top-schema [schema config]
  (unpack* (get-in config [:schemas schema]) config))


(defn make-packer [schema config]
  `(fn [~'value ~'buffer ~'bit-position ~'byte-position]
     ~(pack* schema config 'value)))

(defn make-unpacker [schema config]
  `(fn [~'buffer ~'bit-position ~'byte-position]
     ~(unpack* schema config)))