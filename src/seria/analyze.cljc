(ns seria.analyze
  (:require [seria.util :refer [find-by]]
    #?(:clj
            [clojure.walk :refer [postwalk]])))

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

(do #?(:clj (defn omit-core-ns [form]
              (postwalk (fn [x]
                          (if-not (symbol? x)
                            x
                            (-> (str x)
                                (clojure.string/replace #"clojure\.core/" "")
                                (symbol))))
                        form))))

