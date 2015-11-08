(ns seria.serialization
  #?(:clj
     (:import [java.util Date]))
  (:require [seria.buffers :refer :all]
            [seria.utils :refer :all]
            [seria.validate :refer :all]))

(def verbose-dispatch? (atom false))

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


(defn serialize-dispatch [schema {:keys [schema-map]} & _]
  (when @verbose-dispatch?
    (println "Dispatching on" schema))
  (cond
    (primitive? schema) :primitive
    (advanced? schema) schema
    (composite? schema) (let [composite-type (first schema)]
                          (condp contains? composite-type
                            #{:list :vector :set :sorted-set} :coll
                            #{:map :sorted-map} :map
                            composite-type))
    (contains? schema-map schema) :top-schema
    :else (when @verbose-dispatch?
            (println "Couldn't dispatch on" schema))))

(defmulti serialize* serialize-dispatch)

(defmulti deserialize* serialize-dispatch)


(defmethod serialize* :primitive [schema _ data]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        p        (gensym "p_")]
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

(defmethod deserialize* :primitive [schema _]
  (let [position (if (= :boolean schema) 'bit-position 'byte-position)
        p        (gensym "p_")]
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


(defmethod serialize* :string [_ config data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :byte config `(count ~data))
         (run! (fn [~char] ~(serialize* :char config char))
               ~data))))

(defmethod deserialize* :string [_ config]
  `(->> (repeatedly ~(deserialize* :byte config)
                    (fn [] ~(deserialize* :char config)))
        (apply str)))


(defmethod serialize* :long-string [_ config data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :short config `(count ~data))
         (run! (fn [~char] ~(serialize* :char config char))
               ~data))))

(defmethod deserialize* :long-string [_ config]
  `(->> (repeatedly ~(deserialize* :short config)
                    (fn [] ~(deserialize* :char config)))
        (apply str)))


(defmethod serialize* :keyword [_ config data]
  (serialize* :string config `(name ~data)))

(defmethod deserialize* :keyword [_ config]
  `(keyword ~(deserialize* :string config)))


(defmethod serialize* :symbol [_ config data]
  (serialize* :string config `(name ~data)))

(defmethod deserialize* :symbol [_ config]
  `(symbol ~(deserialize* :string config)))


(defmethod serialize* :any [_ config data]
  (serialize* :string config `(pr-str ~data)))

(defmethod deserialize* :any [_ config]
  `(#?(:clj  read-string
       :cljs cljs.reader/read-string) ~(deserialize* :string config)))


(defmethod serialize* :coll [[_ {:keys [size] :or {size :byte}} sub-schema] config data]
  (let [coll-item (gensym "coll-item__")]
    `(do ~(serialize* size config `(count ~data))
         (run! (fn [~coll-item]
                 ~(serialize* sub-schema config coll-item))
               ~data))))

(defmethod deserialize* :coll [[coll-type {:keys [size] :or {size :byte}} sub-schema] config]
  `(->> (repeatedly ~(deserialize* size config)
                    (fn [] ~(deserialize* sub-schema config)))
        ~(case coll-type
           :list `identity
           :vector `vec
           :set `set
           :sorted-set '(into (sorted-set)))
        (doall)))


(defmethod serialize* :map [[_ {:keys [size] :or {size :byte}} key-schema value-schema] config data]
  (let [key   (gensym "key_")
        value (gensym "value_")]
    `(do ~(serialize* size config `(count ~data))
         (run! (fn [[~key ~value]]
                 ~(serialize* key-schema config key)
                 ~(serialize* value-schema config value))
               ~data))))

(defmethod deserialize* :map [[map-type {:keys [size] :or {size :byte}} key-schema value-schema] config]
  `(->> (repeatedly ~(deserialize* size config)
                    (fn [] [~(deserialize* key-schema config)
                            ~(deserialize* value-schema config)]))
        (into ~(if (= map-type :sorted-map)
                 `(sorted-map)
                 `{}))
        (doall)))


(defmethod serialize* :tuple [schema config data]
  (let [disjoined (disj-indexed schema data)]
    `(let [~@(mapcat (juxt :symbol :sub-data) disjoined)]
       ~@(map (fn [{:keys [symbol sub-schema]}]
                (serialize* sub-schema config symbol))
              disjoined))))

(defmethod deserialize* :tuple [[_ _ sub-schemas] config]
  `(vector ~@(map (fn [sub-schema]
                    (deserialize* sub-schema config))
                  sub-schemas)))


(defmethod serialize* :record [schema {:keys [schemas] :as config} data]
  (let [disjoined (disj-indexed (unroll-record schemas schema) data)]
    `(let [~@(mapcat (juxt :symbol :sub-data) disjoined)]
       ~@(map (fn [{:keys [symbol sub-schema]}]
                (serialize* sub-schema config symbol))
              disjoined))))


(defmethod deserialize* :record [schema {:keys [schemas config-id] :as config}]
  (let [[_ {:keys [constructor]} arg-map] (unroll-record schemas schema)
        constructor-key (get-in @non-embeddables [config-id constructor])]
    `(~(if constructor
         `(comp (get-in @non-embeddables [~config-id ~constructor-key]) hash-map)
         `hash-map)
       ~@(mapcat (fn [[key value-schema]]
                   [key (deserialize* value-schema config)])
                 arg-map))))


(defmethod serialize* :optional [[_ _ sub-schema] config data]
  `(if ~data
     (do ~(serialize* :boolean config true)
         ~(serialize* sub-schema config data))
     ~(serialize* :boolean config false)))

(defmethod deserialize* :optional [[_ _ sub-schema] config]
  `(when ~(deserialize* :boolean config)
     ~(deserialize* sub-schema config)))


(defmethod serialize* :multi
  [[_ _ selector arg-map] {:keys [multi-map config-id] :as config} data]
  (let [selector-key (get-in @non-embeddables [config-id selector])
        case-body    (mapcat (fn [[multi-case sub-schema]]
                               [multi-case `(do ~(serialize* :short config (get multi-map multi-case))
                                                ~(serialize* sub-schema config data))])
                             arg-map)]
    `(case ((get-in @non-embeddables [~config-id ~selector-key]) ~data)
       ~@case-body)))

(defmethod deserialize* :multi
  [[_ _ _ arg-map] {:keys [multi-map] :as config}]
  (let [case-body (mapcat (fn [[condition sub-schema]]
                            [condition (deserialize* sub-schema config)])
                          arg-map)]
    `(case (get ~multi-map ~(deserialize* :short config))
       ~@case-body)))


(defmethod serialize* :enum [_ {:keys [enum-map] :as config} data]
  (serialize* :short config `(get ~enum-map ~data)))

(defmethod deserialize* :enum [_ {:keys [enum-map] :as config}]
  `(get ~enum-map ~(deserialize* :short config)))


(defmethod serialize* :top-schema [schema config data]
  (serialize* (get-in config [:schemas schema]) config data))

(defmethod deserialize* :top-schema [schema config]
  (deserialize* (get-in config [:schemas schema]) config))


(defn make-serializer [schema config]
  `(fn [~'data ~'buffer ~'bit-position ~'byte-position]
     ~(serialize* schema config 'data)))

(defn make-deserializer [schema config]
  `(fn [~'buffer ~'bit-position ~'byte-position]
     ~(deserialize* schema config)))