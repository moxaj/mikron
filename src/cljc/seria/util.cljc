(ns seria.util
  "Utility functions."
  (:require [clojure.set :as set]
            [clojure.string :as string]
   #?(:cljs [cljs.reader :as reader])))

(defn cljc-exception [s]
  #?(:clj  (Exception. ^String s)
     :cljs (js/Error. s)))

(defn cljc-read-string [s]
  #?(:clj  (read-string ^String s)
     :cljs (reader/read-string s)))

(defn cljc-abs [n]
  #?(:clj  (Math/abs ^double n)
     :cljs (.abs js/Math n)))

(defn cljc-round [n]
  #?(:clj  (Math/round ^double n)
     :cljs (.round js/Math n)))

(defn cljc-ceil [n]
  #?(:clj  (Math/ceil ^double n)
     :cljs (.ceil js/Math n)))

(defn bimap [coll]
  (->> coll
       (into (sorted-set))
       (map-indexed vector)
       (mapcat (fn [[a b]] [[a b] [b a]]))
       (into {})))

(defn find-by [f form]
  (concat (if (f form) [form] [])
          (if (or (sequential? form)
                  (map? form))
            (mapcat (partial find-by f) form)
            [])))

(defn find-unique-by [f form]
  (set (find-by f form)))

(defn raw-gensym [sym]
  (let [sym-name (name sym)]
    (if-let [index (string/last-index-of sym-name "_")]
      (subs sym-name 0 index)
      sym-name)))

(defn postfix-gensym [sym s]
  (gensym (str (raw-gensym sym) "-" s "_")))

(defn processor-name [processor-type schema-name]
  (symbol (str (name processor-type) "-" (name schema-name))))

(defn expand-record [[_ {:keys [extends]} record-map :as record] schemas]
  (if (empty? extends)
    record
    (let [super-records (map #(expand-record (schemas %) schemas)
                             extends)]
      (reduce (fn [[_ {diff-1 :diff interp-1 :interp} record-map-1]
                   [_ {diff-2 :diff interp-2 :interp constructor :constructor} record-map-2]]
                (letfn [(expand-option [opt all] (set (if (= :all opt) all opt)))]
                  [:record {:diff        (set/union (expand-option diff-1 (keys record-map-1))
                                                    (expand-option diff-2 (keys record-map-2)))
                            :interp      (set/union (expand-option interp-1 (keys record-map-1))
                                                    (expand-option interp-2 (keys record-map-2)))
                            :constructor constructor}
                   (merge record-map-1 record-map-2)]))
              (conj super-records record)))))

(defn destructure-indexed [[complex-type _ inner-schemas] value postfix-sym?]
  (let [tuple? (= :tuple complex-type)]
    (map (fn [index]
           {:index        index
            :symbol       (if tuple?
                            (postfix-gensym value (str index))
                            (if postfix-sym?
                              (postfix-gensym value (name index))
                              (gensym (str (name index) "_"))))
            :inner-schema (inner-schemas index)
            :inner-value  (if tuple?
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
