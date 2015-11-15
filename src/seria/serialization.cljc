(ns seria.serialization
  (:require [seria.buffers :refer [read-byte! read-short! read-int!
                                   read-float! read-double!
                                   read-char! read-boolean!
                                   write-byte! write-short! write-int!
                                   write-float! write-double!
                                   write-char! write-boolean!]]
            [seria.utils :refer [disj-indexed]]
            [seria.validate :refer [primitive? advanced? composite?]]
            [seria.delta :refer [dnil? dnil]]))

; ugly hack crying out for help
(def non-embeddables (atom {}))

(defn primitive-size [schema]
  (case schema
    :byte 1
    :short 2
    :int 4
    :float 4
    :double 8
    :char 2
    :boolean 1))

(defn unroll-record [schemas [_ {:keys [extends] :as options} record-map :as record]]
  (if-not extends
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


(defmethod pack* :primitive [schema _ data]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        p        (gensym "pos_")]
    `(let [~p (deref ~position)]
       (vswap! ~position unchecked-add ~(primitive-size schema))
       ~(case schema
          :byte `(write-byte! ~'buffer ~p ~data)
          :short `(write-short! ~'buffer ~p ~data)
          :int `(write-int! ~'buffer ~p ~data)
          :float `(write-float! ~'buffer ~p ~data)
          :double `(write-double! ~'buffer ~p ~data)
          :char `(write-char! ~'buffer ~p ~data)
          :boolean `(write-boolean! ~'buffer ~p ~data)
          nil))))

(defmethod unpack* :primitive [schema _]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        p        (gensym "pos_")]
    `(let [~p (deref ~position)]
       (vswap! ~position unchecked-add ~(primitive-size schema))
       ~(case schema
          :byte `(read-byte! ~'buffer ~p)
          :short `(read-short! ~'buffer ~p)
          :int `(read-int! ~'buffer ~p)
          :float `(read-float! ~'buffer ~p)
          :double `(read-double! ~'buffer ~p)
          :char `(read-char! ~'buffer ~p)
          :boolean `(read-boolean! ~'buffer ~p)
          nil))))


(defmethod pack* :string [_ config data]
  (let [char (gensym "char_")]
    `(do ~(pack* :byte config `(count ~data))
         (run! (fn [~char] ~(pack* :char config char))
               ~data))))

(defmethod unpack* :string [_ config]
  `(->> (repeatedly ~(unpack* :byte config)
                    (fn [] ~(unpack* :char config)))
        (apply str)))


(defmethod pack* :long-string [_ config data]
  (let [char (gensym "char_")]
    `(do ~(pack* :short config `(count ~data))
         (run! (fn [~char] ~(pack* :char config char))
               ~data))))

(defmethod unpack* :long-string [_ config]
  `(->> (repeatedly ~(unpack* :short config)
                    (fn [] ~(unpack* :char config)))
        (apply str)))


(defmethod pack* :keyword [_ config data]
  (pack* :string config `(name ~data)))

(defmethod unpack* :keyword [_ config]
  `(keyword ~(unpack* :string config)))


(defmethod pack* :symbol [_ config data]
  (pack* :string config `(name ~data)))

(defmethod unpack* :symbol [_ config]
  `(symbol ~(unpack* :string config)))


(defmethod pack* :any [_ config data]
  (pack* :string config `(pr-str ~data)))

(defmethod unpack* :any [_ config]
  `(#?(:clj  read-string
       :cljs cljs.reader/read-string) ~(unpack* :string config)))


(defmethod pack* :coll [[_ {:keys [size] :or {size :byte}} sub-schema] config data]
  (let [coll-item (gensym "coll-item__")]
    `(do ~(pack* size config `(count ~data))
         (run! (fn [~coll-item]
                 ~(pack* sub-schema config coll-item))
               ~data))))

(defmethod unpack* :coll [[coll-type {:keys [size] :or {size :byte}} sub-schema] config]
  `(->> (repeatedly ~(unpack* size config)
                    (fn [] ~(unpack* sub-schema config)))
        ~(case coll-type
           :list `identity
           :vector `vec
           :set `set
           :sorted-set '(into (sorted-set)))
        (doall)))


(defmethod pack* :map [[_ {:keys [size delta] :or {size :byte}} key-schema value-schema] config data]
  (let [key      (gensym "key_")
        value    (gensym "value_")
        is-dnil? (gensym "is-dnil?_")]
    `(do ~(pack* size config `(count ~data))
         (run! (fn [[~key ~value]]
                 ~@(if-not (:enabled delta)
                     [(pack* key-schema config key)
                      (pack* value-schema config value)]
                     [`(let [~is-dnil? (dnil? ~value)]
                         ~(pack* :boolean config ~is-dnil?)
                         ~(pack* key-schema config key)
                         (when-not ~is-dnil?
                           ~(pack* value-schema config value)))]))
               ~data))))

(defmethod unpack* :map [[map-type {:keys [size delta] :or {size :byte}} key-schema value-schema] config]
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


(defmethod pack* :tuple [[_ {:keys [delta]} :as schema] config data]
  (let [disjoined (disj-indexed schema data)
        is-dnil?  (gensym "is-dnil?_")]
    `(let [~@(mapcat (juxt :symbol :sub-data) disjoined)]
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


(defmethod pack* :record [[_ {:keys [delta]} :as schema] {:keys [schemas] :as config} data]
  (let [disjoined (disj-indexed (unroll-record schemas schema) data)
        is-dnil?  (gensym "is-dnil?_")]
    `(let [~@(mapcat (juxt :symbol :sub-data) disjoined)]
       ~@(map (fn [{:keys [symbol sub-schema]}]
                (if-not (:enabled delta)
                  (pack* sub-schema config symbol)
                  `(let [~is-dnil? (dnil? ~symbol)]
                     ~(pack* :boolean config is-dnil?)
                     (when-not ~is-dnil?
                       ~(pack* sub-schema config symbol)))))
              disjoined))))


(defmethod unpack* :record [[_ {:keys [delta]} :as schema] {:keys [schemas config-id] :as config}]
  (let [[_ {:keys [constructor]} arg-map] (unroll-record schemas schema)
        constructor-key (get-in @non-embeddables [config-id constructor])]
    `(~(if constructor
         `(comp (get-in @non-embeddables [~config-id ~constructor-key]) (partial into {}))
         `(partial into {}))
       ~(mapv (fn [[key value-schema]]
                (if-not (:enabled delta)
                  [key (unpack* value-schema config)]
                  `(if ~(unpack* :boolean config)
                     [~key ~dnil]
                     [~key ~(unpack* value-schema config)])))
              arg-map))))


(defmethod pack* :optional [[_ _ sub-schema] config data]
  `(if ~data
     (do ~(pack* :boolean config true)
         ~(pack* sub-schema config data))
     ~(pack* :boolean config false)))

(defmethod unpack* :optional [[_ _ sub-schema] config]
  `(when ~(unpack* :boolean config)
     ~(unpack* sub-schema config)))


(defmethod pack* :multi
  [[_ _ selector arg-map] {:keys [multi-map config-id] :as config} data]
  (let [selector-key (get-in @non-embeddables [config-id selector])
        case-body    (mapcat (fn [[multi-case sub-schema]]
                               [multi-case `(do ~(pack* :short config (get multi-map multi-case))
                                                ~(pack* sub-schema config data))])
                             arg-map)]
    `(case ((get-in @non-embeddables [~config-id ~selector-key]) ~data)
       ~@case-body)))

(defmethod unpack* :multi
  [[_ _ _ arg-map] {:keys [multi-map] :as config}]
  (let [case-body (mapcat (fn [[condition sub-schema]]
                            [condition (unpack* sub-schema config)])
                          arg-map)]
    `(case (get ~multi-map ~(unpack* :short config))
       ~@case-body)))


(defmethod pack* :enum [_ {:keys [enum-map] :as config} data]
  (pack* :short config `(get ~enum-map ~data)))

(defmethod unpack* :enum [_ {:keys [enum-map] :as config}]
  `(get ~enum-map ~(unpack* :short config)))


(defmethod pack* :top-schema [schema config data]
  (pack* (get-in config [:schemas schema]) config data))

(defmethod unpack* :top-schema [schema config]
  (unpack* (get-in config [:schemas schema]) config))


(defn make-packer [schema config]
  `(fn [~'data ~'buffer ~'bit-position ~'byte-position]
     ~(pack* schema config 'data)))

(defn make-unpacker [schema config]
  `(fn [~'buffer ~'bit-position ~'byte-position]
     ~(unpack* schema config)))