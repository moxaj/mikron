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
    (composite? schema) (let [composite-type (first schema)]
                          (condp contains? composite-type
                            #{:list :vector :set :sorted-set} :coll
                            #{:map :sorted-map} :map
                            composite-type))
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
    `(do ~(pack* :ubyte config `(count ~value))
         (run! (fn [~char] ~(pack* :char config char))
               ~value))))

(defmethod unpack* :string [_ config]
  `(->> (repeatedly ~(unpack* :ubyte config)
                    (fn [] ~(unpack* :char config)))
        (apply str)))


(defmethod pack* :long-string [_ config value]
  (let [char (gensym "char_")]
    `(do ~(pack* :ushort config `(count ~value))
         (run! (fn [~char] ~(pack* :char config char))
               ~value))))

(defmethod unpack* :long-string [_ config]
  `(->> (repeatedly ~(unpack* :ushort config)
                    (fn [] ~(unpack* :char config)))
        (apply str)))


(defmethod pack* :keyword [_ config value]
  (let [value-as-str (gensym "keyword-as-str_")]
    `(let [~value-as-str (subs (str ~value) 1)]
       ~(pack* :string config value-as-str))))

(defmethod unpack* :keyword [_ config]
  `(keyword ~(unpack* :string config)))


(defmethod pack* :symbol [_ config value]
  (let [value-as-str (gensym "symbol-as-str_")]
    `(let [~value-as-str (str ~value)]
       ~(pack* :string config value-as-str))))

(defmethod unpack* :symbol [_ config]
  `(symbol ~(unpack* :string config)))


(defmethod pack* :any [_ config value]
  (let [value-as-str (gensym "value-as-str_")]
    `(let [~value-as-str (pr-str ~value)]
       ~(pack* :long-string config value-as-str))))

(defmethod unpack* :any [_ config]
  `((cljc-read-string) ~(unpack* :long-string config)))


(defmethod pack* :coll [[_ {:keys [size]} sub-schema] config value]
  (let [coll-item (gensym "coll-item__")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [~coll-item]
                 ~(pack* sub-schema config coll-item))
               ~value))))

(defmethod unpack* :coll [[coll-type {:keys [size]} sub-schema] config]
  `(->> (repeatedly ~(unpack* size config)
                    (fn [] ~(unpack* sub-schema config)))
        ~(case coll-type
           :list `identity
           :vector `vec
           :set `set
           :sorted-set '(into (sorted-set)))
        (doall)))


(defmethod pack* :map [[_ {:keys [size delta]} key-schema value-schema] config value]
  (let [key      (gensym "key_")
        val      (gensym "val_")
        is-dnil? (gensym "is-dnil?_")]
    `(do ~(pack* size config `(count ~value))
         (run! (fn [[~key ~val]]
                 ~@(if-not (:enabled delta)
                     [(pack* key-schema config key)
                      (pack* value-schema config val)]
                     [`(let [~is-dnil? (dnil? ~val)]
                         ~(pack* :boolean config ~is-dnil?)
                         ~(pack* key-schema config key)
                         (when-not ~is-dnil?
                           ~(pack* value-schema config val)))]))
               ~value))))

(defmethod unpack* :map [[map-type {:keys [size delta]} key-schema value-schema] config]
  (let [is-dnil? (gensym "is-dnil?_")
        key      (gensym "key_")]
    `(->> (repeatedly ~(unpack* size config)
                      (fn [] ~(if-not (:enabled delta)
                                [(unpack* key-schema config)
                                 (unpack* value-schema config)]
                                `(let [~is-dnil? ~(unpack* :boolean config)
                                       ~key ~(unpack* key-schema config)]
                                   (if-not ~is-dnil?
                                     [~key ~(unpack* value-schema config)]
                                     [~key ~dnil])))))
          (into ~(if (= map-type :sorted-map)
                   `(sorted-map)
                   `{}))
          (doall))))


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
  `(vector ~@(map (fn [sub-schema]
                    (if-not (:enabled delta)
                      (unpack* sub-schema config)
                      `(if ~(unpack* :boolean config)
                         ~dnil
                         ~(unpack* sub-schema config))))
                  sub-schemas)))


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
        constructor-key (get-in @global-embed-map [config-id constructor])
        unpack-body     `(hash-map ~@(mapcat (fn [[key value-schema]]
                                               [key (if-not (:enabled delta)
                                                      (unpack* value-schema config)
                                                      `(if ~(unpack* :boolean config)
                                                         ~dnil
                                                         ~(unpack* value-schema config)))])
                                             record-map))]
    (if constructor
      `((get-in @global-embed-map [~config-id ~constructor-key]) ~unpack-body)
      unpack-body)))


(defmethod pack* :optional [[_ _ sub-schema] config value]
  `(if ~value
     (do ~(pack* :boolean config true)
         ~(pack* sub-schema config value))
     ~(pack* :boolean config false)))

(defmethod unpack* :optional [[_ _ sub-schema] config]
  `(when ~(unpack* :boolean config)
     ~(unpack* sub-schema config)))


(defmethod pack* :multi
  [[_ _ selector arg-map] {:keys [multi-map multi-size config-id] :as config} value]
  (let [selector-key (get-in @global-embed-map [config-id selector])
        case-body    (mapcat (fn [[multi-case sub-schema]]
                               [multi-case `(do ~(pack* multi-size config (get multi-map multi-case))
                                                ~(pack* sub-schema config value))])
                             arg-map)]
    `(case ((get-in @global-embed-map [~config-id ~selector-key]) ~value)
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