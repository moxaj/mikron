(ns seria.serialization
  #?(:clj
     (:import [java.util Date]))
  (:require [seria.buffers :refer :all]))

(set! *warn-on-reflection* true)

(defn primitive? [schema]
  (#{:s/byte :s/short :s/int :s/float :s/double :s/char :s/boolean} schema))

(defn advanced? [schema]
  (#{:s/string :s/long-string :s/keyword :s/date} schema))

(defn composite? [schema]
  (and (sequential? schema)
       (#{:s/list :s/vector :s/set :s/map :s/tuple :s/record} (first schema))))

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
    :s/byte 1
    :s/short 2
    :s/int 4
    :s/float 4
    :s/double 8
    :s/char 2
    :s/boolean 1))


(defn dispatch [schema {:keys [schema-map]} & _]
  (cond
    (primitive? schema) :s/primitive
    (advanced? schema) schema
    (composite? schema) (let [sub-type (first schema)]
                          (if (#{:s/list :s/vector :s/set} sub-type)
                            :s/coll
                            sub-type))
    (schema-map schema) :s/sub-schema))

(defmulti serialize* dispatch)

(defmulti deserialize* dispatch)


(defmethod serialize* :s/primitive
  [schema _ buffer bit-position byte-position data]
  (let [position (if (= :s/boolean schema) bit-position byte-position)
        p        (gensym "p_")]
    `(let [~p (deref ~position)]
       (vswap! ~position + ~(primitive-size schema))
       ~(case schema
          :s/byte `(write-byte! ~buffer ~p ~data)
          :s/short `(write-short! ~buffer ~p ~data)
          :s/int `(write-int! ~buffer ~p ~data)
          :s/float `(write-float! ~buffer ~p ~data)
          :s/double `(write-double! ~buffer ~p ~data)
          :s/char `(write-char! ~buffer ~p ~data)
          :s/boolean `(write-boolean! ~buffer ~p ~data)
          nil))))

(defmethod deserialize* :s/primitive
  [schema _ buffer bit-position byte-position]
  (let [position (if (= :s/boolean schema) bit-position byte-position)
        p        (gensym "p_")]
    `(let [~p (deref ~position)]
       (vswap! ~position + ~(primitive-size schema))
       ~(case schema
          :s/byte `(read-byte! ~buffer ~p)
          :s/short `(read-short! ~buffer ~p)
          :s/int `(read-int! ~buffer ~p)
          :s/float `(read-float! ~buffer ~p)
          :s/double `(read-double! ~buffer ~p)
          :s/char `(read-char! ~buffer ~p)
          :s/boolean `(read-boolean! ~buffer ~p)
          nil))))


(defmethod serialize* :s/string
  [_ config buffer bit-position byte-position data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :s/byte config buffer bit-position byte-position `(count ~data))
         (run! (fn [~char] ~(serialize* :s/char config buffer bit-position byte-position char))
               ~data))))

(defmethod deserialize* :s/string
  [_ config buffer bit-position byte-position]
  `(->> (repeatedly ~(deserialize* :s/byte config buffer bit-position byte-position)
                    (fn [] ~(deserialize* :s/char config buffer bit-position byte-position)))
        (apply str)))


(defmethod serialize* :s/long-string
  [_ config buffer bit-position byte-position data]
  (let [char (gensym "char_")]
    `(do ~(serialize* :s/short config buffer bit-position byte-position `(count ~data))
         (run! (fn [~char] ~(serialize* :s/char config buffer bit-position byte-position char))
               ~data))))

(defmethod deserialize* :s/long-string
  [_ config buffer bit-position byte-position]
  `(->> (repeatedly ~(deserialize* :s/short config buffer bit-position byte-position)
                    (fn [] ~(deserialize* :s/char config buffer bit-position byte-position)))
        (apply str)))


(defmethod serialize* :s/keyword
  [_ {:keys [keyword-map] :as config} buffer bit-position byte-position data]
  (serialize* :s/short config buffer bit-position byte-position `(get ~keyword-map ~data)))

(defmethod deserialize* :s/keyword
  [_ {:keys [keyword-map] :as config} buffer bit-position byte-position]
  `(get ~keyword-map ~(deserialize* :s/short config buffer bit-position byte-position)))


(defmethod serialize* :s/date
  [_ config buffer bit-position byte-position data]
  (serialize* :s/double config buffer bit-position byte-position `(.getTime ~data)))

(defmethod deserialize* :s/date
  [_ config buffer bit-position byte-position]
  (#?(:clj  (Date. (long (deserialize* :s/double config buffer bit-position byte-position)))
      :cljs (js/Date. (deserialize* :s/double config buffer bit-position byte-position)))))


(defmethod serialize* :s/coll
  [schema config buffer bit-position byte-position data]
  (let [[_ {:keys [size] :or {size :s/byte}} [sub-schema]] (disj-composite schema)
        coll-item (gensym "coll-item__")]
    `(do ~(serialize* size config buffer bit-position byte-position `(count ~data))
         (run! (fn [~coll-item]
                 ~(serialize* sub-schema config buffer bit-position byte-position coll-item))
               ~data))))

(defmethod deserialize* :s/coll
  [schema config buffer bit-position byte-position]
  (let [[coll-type {:keys [size sorted?]
                    :or   {size :s/byte sorted? false}} [sub-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config buffer bit-position byte-position)
                      (fn [] ~(deserialize* sub-schema config buffer bit-position byte-position)))
          ~(case [coll-type sorted?]
             [:s/vector true] (comp vec sort)
             [:s/vector false] vec
             [:s/list true] sort
             [:s/list false] seq
             [:s/set true] (partial into (sorted-set))
             [:s/set false] set)
          (doall))))


(defmethod serialize* :s/map
  [schema config buffer bit-position byte-position data]
  (let [[_ {:keys [size] :or {size :s/byte}} [key-schema value-schema]] (disj-composite schema)
        key   (gensym "key_")
        value (gensym "value_")]
    `(do ~(serialize* size config buffer bit-position byte-position `(count ~data))
         (run! (fn [[~key ~value]]
                 ~(serialize* key-schema config buffer bit-position byte-position key)
                 ~(serialize* value-schema config buffer bit-position byte-position value))
               ~data))))

(defmethod deserialize* :s/map
  [schema config buffer bit-position byte-position]
  (let [[_ {:keys [size sorted?]
            :or   {size :s/byte sorted? false}} [key-schema value-schema]] (disj-composite schema)]
    `(->> (repeatedly ~(deserialize* size config buffer bit-position byte-position)
                      (fn [] [~(deserialize* key-schema config buffer bit-position byte-position)
                              ~(deserialize* value-schema config buffer bit-position byte-position)]))
          (into ~(if sorted? (sorted-set) {}))
          (doall))))


(defmethod serialize* :s/tuple
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

(defmethod deserialize* :s/tuple
  [schema config buffer bit-position byte-position]
  (let [[_ _ sub-schemas] (disj-composite schema)]
    `(vector ~@(map (fn [sub-schema]
                      (deserialize* sub-schema config buffer bit-position byte-position))
                    sub-schemas))))


(defmethod serialize* :s/record
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

(defmethod deserialize* :s/record
  [schema config buffer bit-position byte-position]
  (let [[_ _ args] (disj-composite schema)]
    `(hash-map ~@(->> (partition 2 args)
                      (mapcat (fn [[key value-schema]]
                                [key (deserialize* value-schema config buffer bit-position byte-position)]))))))


(defmethod serialize* :s/sub-schema
  [schema config buffer bit-position byte-position data]
  (serialize* (get-in config [:schemas schema]) config buffer bit-position byte-position data))

(defmethod deserialize* :s/sub-schema
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