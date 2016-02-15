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
