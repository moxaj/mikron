(ns seria.analyze
  (:require [seria.utils :refer :all]
            [clojure.set :refer [union]]))

(def primitives #{:byte :short :int :float :double :char :boolean})

(def advanceds #{:string :long-string :keyword :symbol})

(def composites #{:list :vector :set :sorted-set :map :sorted-map
                  :tuple :record :optional :multi :enum})

(def built-ins (union primitives advanceds composites))

(defn primitive? [schema]
  (contains? primitives schema))

(defn advanced? [schema]
  (contains? advanceds schema))

(defn composite? [schema]
  (and (sequential? schema)
       (contains? composites (first schema))))

(defn built-in? [kw]
  (contains? built-ins kw))

(defn disj-composite [[a b & more]]
  (let [u a]
    (if (nil? b)
      [u {} []]
      (let [v (if (map? b) b {})
            w (if (map? b) more (cons b more))
            [w1 & ws] w]
        (if (nil? w1)
          [u v []]
          (if (and (empty? ws)
                   (sequential? w1)
                   (not (composite? w1)))
            [u v w1]
            [u v w]))))))

(declare valid-schema?)

(defn valid-composite? [top-schemas schema]
  (and (composite? schema)
       (let [[composite-type _ args] (disj-composite schema)
             arg-count (count args)]
         (and (pos? arg-count)
              (condp contains? composite-type
                #{:list :vector :set :sorted-set :optional}
                (and (= 1 arg-count)
                     (valid-schema? top-schemas (first args)))

                #{:map :sorted-map}
                (and (= 2 arg-count)
                     (valid-schema? top-schemas (first args))
                     (valid-schema? top-schemas (second args)))

                #{:tuple}
                (every? (partial valid-schema? top-schemas) args)

                #{:record}
                (and (even? arg-count)
                     (every? (fn [[key sub-schema]]
                               (and (keyword? key)
                                    (valid-schema? top-schemas sub-schema)))
                             (partition 2 args)))

                #{:enum}
                (every? keyword? args)

                #{:multi}
                (and (odd? arg-count)
                     (fn? (first args))
                     (every? (fn [[multi-case sub-schema]]
                               (and (keyword? multi-case)
                                    (valid-schema? top-schemas sub-schema)))
                             (partition 2 (rest args)))))))))

(defn valid-schema? [top-schemas schema]
  (or (primitive? schema)
      (advanced? schema)
      (valid-composite? top-schemas schema)
      (contains? top-schemas schema)))

(defn valid-schemas? [schemas]
  (when-let [top-schemas (set (keys schemas))]
    (and (not-any? built-in? top-schemas)
         (every? (partial valid-schema? top-schemas) (vals schemas)))))

(defn find-multi-cases [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :multi (first form)))))
       (mapcat (fn [multi]
                 (->> (nth (disj-composite multi) 2)
                      (rest)
                      (take-nth 2))))))

(defn find-enum-values [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :enum (first form)))))
       (mapcat (fn [enum] (nth (disj-composite enum) 2)))))

(defn find-non-embeddables [schemas]
  (find-by fn? schemas))