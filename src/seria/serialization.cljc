(ns seria.serialization
  (:require [seria.buffers :refer :all]))

(set! *warn-on-reflection* true)

(def primitives
  #{:s/byte :s/short :s/int :s/float :s/double :s/char :s/boolean})

(defn primitive? [type]
  (primitives type))

(def composites
  #{:s/list :s/vector :s/set :s/map :s/tuple :s/record})

(defn composite? [schema]
  (and (vector? schema)
       (composites (first schema))))

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


(declare serialize-any)
(declare deserialize-any)


(defn serialize-primitive [schema _config buffer bit-position byte-position data]
  (let [position (if (= :s/boolean schema) bit-position byte-position)]
    `(write! ~buffer ~data ~schema ~position)))

(defn deserialize-primitive [schema _config buffer bit-position byte-position]
  (let [position (if (= :s/boolean schema) bit-position byte-position)]
    `(read! ~buffer ~schema ~position)))


(defn serialize-string [_schema _config buffer _bit-position byte-position data]
  (let [char (gensym "char_")]
    `(do (write! ~buffer (count ~data) :s/short ~byte-position)
         (run! (fn [~char] (write! ~buffer ~char :s/char ~byte-position))
               ~data))))

(defn deserialize-string [_schema _config buffer _bit-position byte-position]
  `(->> (repeatedly (read! ~buffer :s/short ~byte-position)
                    (fn [] (read! ~buffer :s/char ~byte-position)))
        (doall)
        (apply str)))


(defn serialize-keyword [_schema {:keys [keyword-map]} buffer _bit-position byte-position data]
  `(write! ~buffer (get ~keyword-map ~data) :s/short ~byte-position))

(defn deserialize-keyword [_schema {:keys [keyword-map]} buffer _bit-position byte-position]
  `(get ~keyword-map (read! ~buffer :s/short ~byte-position)))


(defn serialize-coll [schema config buffer bit-position byte-position data]
  (let [[_ _ [sub-schema]] (disj-composite schema)
        coll-item (gensym "coll-item__")]
    `(do (write! ~buffer (count ~data) :s/short ~byte-position)
         (run! (fn [~coll-item]
                 ~(serialize-any sub-schema config buffer bit-position byte-position coll-item))
               ~data))))

(defn deserialize-coll [schema config buffer bit-position byte-position]
  (let [[coll-type _ [sub-schema]] (disj-composite schema)]
    `(->> (repeatedly (read! ~buffer :s/short ~byte-position)
                      (fn [] ~(deserialize-any sub-schema config buffer bit-position byte-position)))
          (doall)
          ~(case coll-type
             :s/vector vec
             :s/list seq
             :s/set set))))


(defn serialize-map [schema config buffer bit-position byte-position data]
  (let [[_ _ [key-schema value-schema]] (disj-composite schema)
        key   (gensym "key_")
        value (gensym "value_")]
    `(do (write! ~buffer (count ~data) :s/short ~byte-position)
         (run! (fn [[~key ~value]]
                 ~(serialize-any key-schema config buffer bit-position byte-position key)
                 ~(serialize-any value-schema config buffer bit-position byte-position value))
               ~data))))

(defn deserialize-map [schema config buffer bit-position byte-position]
  (let [[_ _ [key-schema value-schema]] (disj-composite schema)]
    `(->> (repeatedly (read! ~buffer :s/short ~byte-position)
                      (fn [] [~(deserialize-any key-schema config buffer bit-position byte-position)
                              ~(deserialize-any value-schema config buffer bit-position byte-position)]))
          (doall)
          (into {}))))


(defn serialize-tuple [schema config buffer bit-position byte-position data]
  (let [[_ _ sub-schemas] (disj-composite schema)
        symbols  (repeatedly (count sub-schemas) #(gensym "tup-item_"))
        let-body (mapcat (fn [symbol index] [symbol `(get ~data ~index)])
                         symbols
                         (range))]
    `(let [~@let-body]
       ~@(->> (map vector symbols sub-schemas)
              (map (fn [[symbol sub-schema]]
                     (serialize-any sub-schema config buffer bit-position byte-position symbol)))
              (doall)))))

(defn deserialize-tuple [schema config buffer bit-position byte-position]
  (let [[_ _ sub-schemas] (disj-composite schema)]
    `(vector ~@(doall (map (fn [sub-schema]
                             (deserialize-any sub-schema config buffer bit-position byte-position))
                           sub-schemas)))))


(defn serialize-record [schema config buffer bit-position byte-position data]
  (let [[_ _ args] (disj-composite schema)
        arg-pairs      (partition 2 args)
        symbols        (repeatedly (count arg-pairs) #(gensym "rec-item_"))
        let-body       (mapcat (fn [symbol [key _]] [symbol `(get ~data ~key)])
                               symbols
                               arg-pairs)
        symbol-schemas (map (fn [symbol [_ schema]] [symbol schema])
                            symbols
                            arg-pairs)]
    `(let [~@let-body]
       ~@(doall (map (fn [[symbol value-schema]]
                       (serialize-any value-schema config buffer bit-position byte-position symbol))
                     symbol-schemas)))))

(defn deserialize-record [schema config buffer bit-position byte-position]
  (let [[_ _ args] (disj-composite schema)]
    `(hash-map ~@(->> args
                      (partition 2)
                      (mapcat (fn [[key value-schema]]
                                [key (deserialize-any value-schema config buffer bit-position byte-position)]))
                      (doall)))))


(defn serialize-sub-schema [schema config buffer bit-position byte-position data]
  (serialize-any (get-in config [:schemas schema]) config buffer bit-position byte-position data))

(defn deserialize-sub-schema [schema config buffer bit-position byte-position]
  (deserialize-any (get-in config [:schemas schema]) config buffer bit-position byte-position))


(defn get-processor [schema {:keys [schema-map]}]
  (cond
    (primitive? schema) [serialize-primitive deserialize-primitive]
    (= :s/string schema) [serialize-string deserialize-string]
    (= :s/keyword schema) [serialize-keyword deserialize-keyword]
    (composite? schema) (case (first schema)
                          :s/list [serialize-coll deserialize-coll]
                          :s/vector [serialize-coll deserialize-coll]
                          :s/set [serialize-coll deserialize-coll]
                          :s/map [serialize-map deserialize-map]
                          :s/tuple [serialize-tuple deserialize-tuple]
                          :s/record [serialize-record deserialize-record])
    (schema-map schema) [serialize-sub-schema deserialize-sub-schema]
    :else [nil nil]))

(defn serialize-any [schema config buffer bit-position byte-position data]
  (when-let [f (first (get-processor schema config))]
    (f schema config buffer bit-position byte-position data)))

(defn deserialize-any [schema config buffer bit-position byte-position]
  (when-let [f (second (get-processor schema config))]
    (f schema config buffer bit-position byte-position)))


(defn make-serializer [schema config]
  (let [data          (gensym "data_")
        buffer        (gensym "buffer_")
        bit-position  (gensym "bit-position_")
        byte-position (gensym "byte-position_")]
    `(fn [~data ~buffer ~bit-position ~byte-position]
       ~(serialize-any schema config buffer bit-position byte-position data))))

(defn make-deserializer [schema config]
  (let [buffer        (gensym "buffer_")
        bit-position  (gensym "bit-position_")
        byte-position (gensym "byte-position_")]
    `(fn [~buffer ~bit-position ~byte-position]
       ~(deserialize-any schema config buffer bit-position byte-position))))

;; TODO date, long-string, coll/map/tuple/record options?