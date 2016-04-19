(ns seria.util.coll
  "Generic collection utils."
  (:require [clojure.set :as set]))

(defn id-map [coll]
  (->> coll
       (map-indexed #(vector %2 %1))
       (into {})))

(defn bimap [coll]
  (->> coll
       (distinct)
       (map-indexed vector)
       (into {})
       ((juxt set/map-invert identity))))

(defn find-by [f form]
  (cond-> []
    (f form)
    (conj form)

    (or (sequential? form)
        (map? form))
    (concat (mapcat (partial find-by f) form))))

(defn find-unique-by [f form]
  (distinct (find-by f form)))
