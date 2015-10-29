(ns seria.serialization
  #?(:clj
     (:import [java.util Date]))
  (:require [seria.buffers :refer :all]))

(defn primitive? [schema]
  (#{:byte :short :int :float :double :char :boolean} schema))

(defn advanced? [schema]
  (#{:string :long-string :keyword :date} schema))

(defn composite? [schema]
  (and (sequential? schema)
       (#{:list :vector :set :sorted-set :map :sorted-map :tuple :record} (first schema))))

(defn disj-composite [[a b & more]]
  (let [u  a
        v  (if (map? b) b {})
        w  (vec (if (or (map? b) (nil? b))
                  more
                  (cons b more)))
        w1 (first w)]
    (if (and (sequential? w1)
             (not (composite? w1)))
      [u v w1]
      [u v w])))

(defn primitive-size [schema]
  (case schema
    :byte 1
    :short 2
    :int 4
    :float 4
    :double 8
    :char 2
    :boolean 1))


(defn dispatch [schema {:keys [schema-map]} & _]
  (cond
    (primitive? schema) :primitive
    (advanced? schema) schema
    (composite? schema) (let [composite-type (first schema)]
                          (condp contains? composite-type
                            #{:list :vector :set :sorted-set} :coll
                            #{:map :sorted-map} :map
                            composite-type))
    (schema-map schema) :sub-schema))

(defmulti serialize* dispatch)

(defmulti deserialize* dispatch)


(defmethod serialize* :primitive
  [schema _ buffer bit-position byte-position data]
  (let [position (if (= :boolean schema) bit-position byte-position)
        p        (gensym "p_")]
    `(let [~p (deref ~position)]
       (vswap! ~position + ~(primitive-size schema))
       ~(case schema
          :byte `(write-byte! ~buffer ~p ~data)
          :short `(write-short! ~buffer ~p ~data)
          :int `(write-int! ~buffer ~p ~data)
          :float `(write-float! ~buffer ~p ~data)
          :double `(write-double! ~buffer ~p ~data)
          :char `(write-char! ~buffer ~p ~data)
          :boolean `(write-boolean! ~buffer ~p ~data)
          nil))))

(defmethod deserialize* :primitive
  [schema _ buffer bit-position byte-position]
  (let [position (if (= :boolean schema) bit-position byte-position)
        p        (gensym "p_")]
    `(let [~p (deref ~position)]
       (vswap! ~position + ~(primitive-size schema))
       ~(case schema
          :byte `(read-byte! ~buffer ~p)
          :short `(read-short! ~buffer ~p)
          :int `(read-int! ~buffer ~p)
          :float `(read-float! ~buffer ~p)
          :double `(read-double! ~buffer ~p)
          :char `(read-char! ~buffer ~p)
          :boolean `(read-boolean! ~buffer ~p)
          nil))))


(defmethod serialize* :string
  [_ config buffer bit-position byte-position data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :byte config buffer bit-position byte-position `(count ~data))
         (run! (fn [~char] ~(serialize* :char config buffer bit-position byte-position char))
               ~data))))

(defmethod deserialize* :string
  [_ config buffer bit-position byte-position]
  `(->> (repeatedly ~(deserialize* :byte config buffer bit-position byte-position)
                    (fn [] ~(deserialize* :char config buffer bit-position byte-position)))
        (apply str)))


(defmethod serialize* :long-string
  [_ config buffer bit-position byte-position data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :short config buffer bit-position byte-position `(count ~data))
         (run! (fn [~char] ~(serialize* :char config buffer bit-position byte-position char))
               ~data))))

(defmethod deserialize* :long-string
  [_ config buffer bit-position byte-position]
  `(->> (repeatedly ~(deserialize* :short config buffer bit-position byte-position)
                    (fn [] ~(deserialize* :char config buffer bit-position byte-position)))
        (apply str)))


(defmethod serialize* :keyword
  [_ {:keys [keyword-map] :as config} buffer bit-position byte-position data]
  (serialize* :short config buffer bit-position byte-position `(get ~keyword-map ~data)))

(defmethod deserialize* :keyword
  [_ {:keys [keyword-map] :as config} buffer bit-position byte-position]
  `(get ~keyword-map ~(deserialize* :short config buffer bit-position byte-position)))


(defmethod serialize* :date
  [_ config buffer bit-position byte-position data]
  (serialize* :double config buffer bit-position byte-position `(.getTime ~data)))

(defmethod deserialize* :date
  [_ config buffer bit-position byte-position]
  (#?(:clj  (Date. (long (deserialize* :double config buffer bit-position byte-position)))
      :cljs (js/Date. (deserialize* :double config buffer bit-position byte-position)))))


(defmethod serialize* :coll
  [schema config buffer bit-position byte-position data]
  (let [[_ {:keys [size] :or {size :byte}} [sub-schema]] (disj-composite schema)
        coll-item (gensym "coll-item__")]
    `(do ~(serialize* size config buffer bit-position byte-position `(count ~data))
         (run! (fn [~coll-item]
                 ~(serialize* sub-schema config buffer bit-position byte-position coll-item))
               ~data))))

(defmethod deserialize* :coll
  [schema config buffer bit-position byte-position]
  (let [[coll-type {:keys [size] :or {size :byte}} [sub-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config buffer bit-position byte-position)
                      (fn [] ~(deserialize* sub-schema config buffer bit-position byte-position)))
          ~(case coll-type
             :list `seq
             :vector `vec
             :set `set
             :sorted-set '(into (sorted-set)))
          (doall))))


(defmethod serialize* :map
  [schema config buffer bit-position byte-position data]
  (let [[_ {:keys [size] :or {size :byte}} [key-schema value-schema]] (disj-composite schema)
        key   (gensym "key_")
        value (gensym "value_")]
    `(do ~(serialize* size config buffer bit-position byte-position `(count ~data))
         (run! (fn [[~key ~value]]
                 ~(serialize* key-schema config buffer bit-position byte-position key)
                 ~(serialize* value-schema config buffer bit-position byte-position value))
               ~data))))

(defmethod deserialize* :map
  [schema config buffer bit-position byte-position]
  (let [[_ {:keys [size] :or {size :byte}} [key-schema value-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config buffer bit-position byte-position)
                      (fn [] [~(deserialize* key-schema config buffer bit-position byte-position)
                              ~(deserialize* value-schema config buffer bit-position byte-position)]))
          (into ~(if (= (first schema) :sorted-map)
                   '(sorted-map)
                   '{}))
          (doall))))

(defmethod serialize* :tuple
  [schema config buffer bit-position byte-position data]
  (let [[_ _ sub-schemas] (disj-composite schema)
        symbols (repeatedly (count sub-schemas) #(gensym "tup-item_"))
        let-arg (mapcat (fn [symbol index] [symbol `(get ~data ~index)])
                        symbols
                        (range))]
    `(let [~@let-arg]
       ~@(map (fn [symbol sub-schema]
                (serialize* sub-schema config buffer bit-position byte-position symbol))
              symbols
              sub-schemas))))

(defmethod deserialize* :tuple
  [schema config buffer bit-position byte-position]
  (let [[_ _ sub-schemas] (disj-composite schema)]
    `(vector ~@(map (fn [sub-schema]
                      (deserialize* sub-schema config buffer bit-position byte-position))
                    sub-schemas))))


(defmethod serialize* :record
  [schema config buffer bit-position byte-position data]
  (let [[_ _ args] (disj-composite schema)
        arg-pairs (partition 2 args)
        symbols   (repeatedly (count arg-pairs) #(gensym "rec-item_"))
        let-arg   (mapcat (fn [symbol [key _]] [symbol `(get ~data ~key)])
                          symbols
                          arg-pairs)]
    `(let [~@let-arg]
       ~@(map (fn [symbol [_ sub-schema]]
                (serialize* sub-schema config buffer bit-position byte-position symbol))
              symbols
              arg-pairs))))

(defmethod deserialize* :record
  [schema config buffer bit-position byte-position]
  (let [[_ _ args] (disj-composite schema)]
    `(hash-map ~@(->> (partition 2 args)
                      (mapcat (fn [[key value-schema]]
                                [key (deserialize* value-schema config buffer bit-position byte-position)]))))))


(defmethod serialize* :sub-schema
  [schema config buffer bit-position byte-position data]
  (serialize* (get-in config [:schemas schema]) config buffer bit-position byte-position data))

(defmethod deserialize* :sub-schema
  [schema config buffer bit-position byte-position]
  (deserialize* (get-in config [:schemas schema]) config buffer bit-position byte-position))


(defn make-serializer [schema config]
  (let [data          (gensym "data_")
        buffer        (gensym "buffer_")
        bit-position  (gensym "bit-position_")
        byte-position (gensym "byte-position_")]
    `(fn [~data ~buffer ~bit-position ~byte-position]
       ~(serialize* schema config buffer bit-position byte-position data))))

(defn make-deserializer [schema config]
  (let [buffer        (gensym "buffer_")
        bit-position  (gensym "bit-position_")
        byte-position (gensym "byte-position_")]
    `(fn [~buffer ~bit-position ~byte-position]
       ~(deserialize* schema config buffer bit-position byte-position))))