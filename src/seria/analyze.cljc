(ns seria.analyze
  (:require [seria.utils :refer [find-by]]))

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
       (mapcat (fn [[_ _ values]] values))))

(defn find-non-embeddables [schemas]
  (find-by fn? schemas))