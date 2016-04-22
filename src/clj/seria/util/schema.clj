(ns seria.util.schema
  "Schema related utils."
  (:require [seria.util.symbol :as util.symbol]
            [seria.util.coll :as util.coll]))

(defn type-of [schema & _]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)))

(defn multi-cases [schemas]
  (->> schemas
       (util.coll/find-unique-by (fn [form]
                                   (and (vector? form)
                                        (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn enum-values [schemas]
  (->> schemas
       (util.coll/find-unique-by (fn [form]
                                   (and (vector? form)
                                        (= :enum (first form)))))
       (mapcat (fn [[_ _ values]]
                 values))))

(defn super-records [[_ {:keys [extends]} :as record] schemas]
  (conj (mapcat (fn [extend]
                  (super-records (schemas extend) schemas))
                extends)
        record))

(defn expand-record [record schemas]
  (let [records     (super-records record schemas)
        record-map  (->> records
                         (map last)
                         (apply merge))
        constructor (->> records
                         (map (comp :constructor second))
                         (remove nil?)
                         (last))]
    [:record {:constructor constructor} record-map]))

(defn destructure-indexed [[complex-type _ inner-schemas] value postfix-sym?]
  (let [tuple? (= :tuple complex-type)]
    (map (fn [index]
           {:index  index
            :symbol (if tuple?
                      (util.symbol/postfix-gensym value (str index))
                      (if postfix-sym?
                        (util.symbol/postfix-gensym value (name index))
                        (gensym (str (name index) "_"))))
            :schema (inner-schemas index)
            :value  (if tuple?
                      `(~value ~index)
                      `(~index ~value))})
         (if tuple?
           (range (count inner-schemas))
           (sort (keys inner-schemas))))))

(defn as-set [sorted-by body]
  `(into ~(case sorted-by
            nil      `#{}
            :default `(sorted-set)
            `(sorted-set-by ~sorted-by))
         ~body))

(defn as-map [sorted-by body]
  `(into ~(case sorted-by
            nil      `{}
            :default `(sorted-map)
            `(sorted-map-by ~sorted-by))
         ~body))

(defn as-record [constructor body]
  (if constructor
    `(~constructor ~body)
    body))
