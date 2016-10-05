(ns mikron.util
  "Compile time utility functions."
  (:require [clojure.string :as string]))

;; coll

(defn index-of [item coll]
  (->> coll
       (map-indexed vector)
       (filter (comp (partial = item) second))
       (ffirst)))

;; schema

(defn type-of [schema & _]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)
    :else             nil))

(defn as-set [sorted-by body]
  (if (nil? sorted-by)
    body
    `(into ~(if (= :default sorted-by)
              `(sorted-set)
              `(sorted-set-by ~sorted-by))
           ~body)))

(defn as-map [sorted-by body]
  (if (nil? sorted-by)
    body
    `(into ~(if (= :default sorted-by)
              `(sorted-map)
              `(sorted-map-by ~sorted-by))
           ~body)))

(defn as-record [constructor body]
  (if constructor
    `(~constructor ~body)
    body))

(defn schema-ids [schemas]
  (let [m (->> (keys schemas)
               (sort)
               (map-indexed #(vector %2 %1))
               (into {}))]
    (merge m (->> m
                  (map (comp vec reverse))
                  (into {})))))

;; symbol

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym "_"))
                                      ~(meta sym))])
                   binding-form)]
     ~@body))

(def processor-name
  (memoize
    (fn [processor-type schema-name]
      (gensym (str (name processor-type) "-" (name schema-name))))))
