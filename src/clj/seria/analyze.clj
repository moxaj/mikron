(ns seria.analyze
  (:require [clojure.set :refer [union]]
            [seria.spec :refer [built-in?]]
            [clojure.string :refer [split]]))

(defn find-by [f form]
  (concat (if (f form) [form] [])
          (if (or (sequential? form)
                  (map? form))
            (mapcat (partial find-by f) form)
            [])))

(defn find-multi-cases [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn find-enum-values [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

(defn inner-schemas [schema]
  (cond
    (and (keyword? schema)
         (not (built-in? schema)))
    [schema]

    (vector? schema)
    (condp = (first schema)
      :list     (inner-schemas (get schema 2))
      :vector   (inner-schemas (get schema 2))
      :set      (inner-schemas (get schema 2))
      :optional (inner-schemas (get schema 2))
      :map      (concat (inner-schemas (get schema 2))
                        (inner-schemas (get schema 3)))
      :tuple    (mapcat inner-schemas (get schema 2))
      :record   (mapcat inner-schemas (vals (get schema 2)))
      :multi    (mapcat inner-schemas (vals (get schema 3))))

    :else
    []))

(defn schema-graph [schemas]
  (->> schemas
       (map (fn [[schema-name schema]]
              [schema-name (set (inner-schemas schemas))]))
       (into {})))

(defn schema-order [graph]
  (loop [graph graph
         order []]
    (if (empty? graph)
      order
      (if-let [schema (->> graph (filter #(empty? (second %))) (ffirst))]
        (recur (->> (dissoc graph schema)
                    (map (fn [[k v]] [k (disj v schema)]))
                    (into {}))
               (conj order schema))
        nil))))
