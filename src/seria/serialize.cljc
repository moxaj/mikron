(ns seria.serialize
  (:require [seria.buffer :refer [read-byte! read-short! read-int!
                                  read-float! read-double!
                                  read-char! read-boolean!
                                  write-byte! write-short! write-int!
                                  write-float! write-double!
                                  write-char! write-boolean!]]
            [seria.util :refer [disj-indexed cljc-read-string]]
            [seria.validate :refer [primitive? advanced? composite?]]
            [seria.delta :refer [dnil? dnil]]))

; ugly hack crying out for help
(def global-embed-map (atom {}))

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


(defmethod pack* :primitive [schema _ data]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)]
    `(do ~(case schema
            :byte `(write-byte! ~'buffer @~position ~data)
            :short `(write-short! ~'buffer @~position ~data)
            :int `(write-int! ~'buffer @~position ~data)
            :float `(write-float! ~'buffer @~position ~data)
            :double `(write-double! ~'buffer @~position ~data)
            :char `(write-char! ~'buffer @~position ~data)
            :boolean `(write-boolean! ~'buffer @~position ~data)
            nil)
         (vswap! ~position unchecked-add ~(primitive-size schema)))))

(defmethod unpack* :primitive [schema _]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        value    (gensym "value_")]
    `(let [~value ~(case schema
                     :byte `(read-byte! ~'buffer @~position)
                     :short `(read-short! ~'buffer @~position)
                     :int `(read-int! ~'buffer @~position)
                     :float `(read-float! ~'buffer @~position)
                     :double `(read-double! ~'buffer @~position)
                     :char `(read-char! ~'buffer @~position)
                     :boolean `(read-boolean! ~'buffer @~position)
                     nil)]
       (vswap! ~position unchecked-add ~(primitive-size schema))
       ~value)))


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
  (let [data-as-str (gensym "keyword-as-str_")]
    `(let [~data-as-str (subs (str ~data) 1)]
       ~(pack* :string config data-as-str))))

(defmethod unpack* :keyword [_ config]
  `(keyword ~(unpack* :string config)))


(defmethod pack* :symbol [_ config data]
  (let [data-as-str (gensym "symbol-as-str_")]
    `(let [~data-as-str (str ~data)]
       ~(pack* :string config data-as-str))))

(defmethod unpack* :symbol [_ config]
  `(symbol ~(unpack* :string config)))


(defmethod pack* :any [_ config data]
  (let [data-as-str (gensym "data-as-str_")]
    `(let [~data-as-str (pr-str ~data)]
       ~(pack* :long-string config data-as-str))))

(defmethod unpack* :any [_ config]
  `((cljc-read-string) ~(unpack* :long-string config)))


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


(defmethod pack* :optional [[_ _ sub-schema] config data]
  `(if ~data
     (do ~(pack* :boolean config true)
         ~(pack* sub-schema config data))
     ~(pack* :boolean config false)))

(defmethod unpack* :optional [[_ _ sub-schema] config]
  `(when ~(unpack* :boolean config)
     ~(unpack* sub-schema config)))


(defmethod pack* :multi
  [[_ _ selector arg-map] {:keys [multi-map multi-size config-id] :as config} data]
  (let [selector-key (get-in @global-embed-map [config-id selector])
        case-body    (mapcat (fn [[multi-case sub-schema]]
                               [multi-case `(do ~(pack* multi-size config (get multi-map multi-case))
                                                ~(pack* sub-schema config data))])
                             arg-map)]
    `(case ((get-in @global-embed-map [~config-id ~selector-key]) ~data)
       ~@case-body)))

(defmethod unpack* :multi
  [[_ _ _ arg-map] {:keys [multi-map multi-size] :as config}]
  (let [case-body (mapcat (fn [[condition sub-schema]]
                            [condition (unpack* sub-schema config)])
                          arg-map)]
    `(case (get ~multi-map ~(unpack* multi-size config))
       ~@case-body)))


(defmethod pack* :enum [_ {:keys [enum-map enum-size] :as config} data]
  (pack* enum-size config `(get ~enum-map ~data)))

(defmethod unpack* :enum [_ {:keys [enum-map enum-size] :as config}]
  `(get ~enum-map ~(unpack* enum-size config)))


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