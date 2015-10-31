(ns seria.serialization
  #?(:clj
     (:import [java.util Date]))
  (:require [seria.buffers :refer :all]
            [seria.utils :refer :all]
            [seria.analyze :refer :all]))

(def verbose-dispatch? (atom false))
(reset! verbose-dispatch? true)

(def non-embeddables (atom {}))


(defn dispatch [schema {:keys [schema-map]} & _]
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
    (contains? schema-map schema) :sub-schema
    :else (when @verbose-dispatch?
            (println "Couldn't dispatch on" schema))))

(defmulti serialize* dispatch)

(defmulti deserialize* dispatch)


(defn primitive-size [schema]
  (case schema
    :byte 1
    :short 2
    :int 4
    :float 4
    :double 8
    :char 2
    :boolean 1))

(defmethod serialize* :primitive
  [schema _ data]
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

(defmethod deserialize* :primitive
  [schema _]
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


(defmethod serialize* :string
  [_ config data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :byte config `(count ~data))
         (run! (fn [~char] ~(serialize* :char config char))
               ~data))))

(defmethod deserialize* :string
  [_ config]
  `(->> (repeatedly ~(deserialize* :byte config)
                    (fn [] ~(deserialize* :char config)))
        (apply str)))


(defmethod serialize* :long-string
  [_ config data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :short config `(count ~data))
         (run! (fn [~char] ~(serialize* :char config char))
               ~data))))

(defmethod deserialize* :long-string
  [_ config]
  `(->> (repeatedly ~(deserialize* :short config)
                    (fn [] ~(deserialize* :char config)))
        (apply str)))


(defmethod serialize* :keyword
  [_ config data]
  (serialize* :string config `(name ~data)))

(defmethod deserialize* :keyword
  [_ config]
  `(keyword ~(deserialize* :string config)))


(defmethod serialize* :coll
  [schema config data]
  (let [[_ {:keys [size] :or {size :byte}} [sub-schema]] (disj-composite schema)
        coll-item (gensym "coll-item__")]
    `(do ~(serialize* size config `(count ~data))
         (run! (fn [~coll-item]
                 ~(serialize* sub-schema config coll-item))
               ~data))))

(defmethod deserialize* :coll
  [schema config]
  (let [[coll-type {:keys [size] :or {size :byte}} [sub-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config)
                      (fn [] ~(deserialize* sub-schema config)))
          ~(case coll-type
             :list `seq
             :vector `vec
             :set `set
             :sorted-set `(into (sorted-set)))
          (doall))))


(defmethod serialize* :map
  [schema config data]
  (let [[_ {:keys [size] :or {size :byte}} [key-schema value-schema]] (disj-composite schema)
        key   (gensym "key_")
        value (gensym "value_")]
    `(do ~(serialize* size config `(count ~data))
         (run! (fn [[~key ~value]]
                 ~(serialize* key-schema config key)
                 ~(serialize* value-schema config value))
               ~data))))

(defmethod deserialize* :map
  [schema config]
  (let [[_ {:keys [size] :or {size :byte}} [key-schema value-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config)
                      (fn [] [~(deserialize* key-schema config)
                              ~(deserialize* value-schema config)]))
          (into ~(if (= (first schema) :sorted-map)
                   `(sorted-map)
                   `{}))
          (doall))))


(defmethod serialize* :tuple
  [schema config data]
  (let [[_ _ sub-schemas] (disj-composite schema)
        symbols (repeatedly (count sub-schemas) #(gensym "tup-item_"))
        let-arg (mapcat (fn [symbol index] [symbol `(get ~data ~index)])
                        symbols
                        (range))]
    `(let [~@let-arg]
       ~@(map (fn [symbol sub-schema]
                (serialize* sub-schema config symbol))
              symbols
              sub-schemas))))

(defmethod deserialize* :tuple
  [schema config]
  (let [[_ _ sub-schemas] (disj-composite schema)]
    `(vector ~@(map (fn [sub-schema]
                      (deserialize* sub-schema config))
                    sub-schemas))))


(defmethod serialize* :record
  [schema config data]
  (let [[_ _ args] (disj-composite schema)
        arg-pairs (partition 2 args)
        symbols   (repeatedly (count arg-pairs) #(gensym "rec-item_"))
        let-arg   (mapcat (fn [symbol [key _]] [symbol `(get ~data ~key)])
                          symbols
                          arg-pairs)]
    `(let [~@let-arg]
       ~@(map (fn [symbol [_ sub-schema]]
                (serialize* sub-schema config symbol))
              symbols
              arg-pairs))))

(defmethod deserialize* :record
  [schema config]
  (let [[_ _ args] (disj-composite schema)]
    `(hash-map ~@(->> (partition 2 args)
                      (mapcat (fn [[key value-schema]]
                                [key (deserialize* value-schema config)]))))))


(defmethod serialize* :optional
  [schema config data]
  (let [[_ _ [sub-schema]] (disj-composite schema)]
    `(if ~data
       (do ~(serialize* :boolean config true)
           ~(serialize* sub-schema config data))
       ~(serialize* :boolean config false))))

(defmethod deserialize* :optional
  [schema config]
  (let [[_ _ [sub-schema]] (disj-composite schema)]
    `(when ~(deserialize* :boolean config)
       ~(deserialize* sub-schema config))))


(defmethod serialize* :multi
  [schema {:keys [multi-map config-id] :as config} data]
  (let [[_ _ [selector & args]] (disj-composite schema)
        selector-key (get-in @non-embeddables [config-id selector])
        case-body    (->> (partition 2 args)
                          (mapcat (fn [[multi-case sub-schema]]
                                    [multi-case `(do ~(serialize* :short config (get multi-map multi-case))
                                                     ~(serialize* sub-schema config data))])))]
    `(case ((get-in @non-embeddables [~config-id ~selector-key]) ~data)
       ~@case-body)))

(defmethod deserialize* :multi
  [schema {:keys [multi-map] :as config}]
  (let [[_ _ [_ & args]] (disj-composite schema)
        case-body (->> (partition 2 args)
                       (mapcat (fn [[condition sub-schema]]
                                 [condition (deserialize* sub-schema config)])))]
    `(case (get ~multi-map ~(deserialize* :short config))
       ~@case-body)))


(defmethod serialize* :enum
  [_ {:keys [enum-map] :as config} data]
  (serialize* :short config `(get ~enum-map ~data)))

(defmethod deserialize* :enum
  [_ {:keys [enum-map] :as config}]
  `(get ~enum-map ~(deserialize* :short config)))


(defmethod serialize* :sub-schema
  [schema config data]
  (serialize* (get-in config [:schemas schema]) config data))

(defmethod deserialize* :sub-schema
  [schema config]
  (deserialize* (get-in config [:schemas schema]) config))


(defn make-serializer [schema config]
  `(fn [~'data ~'buffer ~'bit-position ~'byte-position]
     ~(serialize* schema config 'data)))

(defn make-deserializer [schema config]
  `(fn [~'buffer ~'bit-position ~'byte-position]
     ~(deserialize* schema config)))