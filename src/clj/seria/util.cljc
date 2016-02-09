(ns seria.util
  (:require [seria.spec :refer [primitive? advanced? composite? custom?]]
            [clojure.set :refer [union]]
   #?(:cljs [cljs.reader])))

(def ^:const max-ubyte 255)
(def ^:const max-ushort 65535)

;; General purpose

(defn cljc-throw [message]
  (throw (new #?(:clj Exception :cljs js/Error) message)))

(def cljc-read-string
  #?(:clj  #(read-string %)
     :cljs #(cljs.reader/read-string %)))

(def cljc-abs
  #?(:clj  #(Math/abs %)
     :cljs #(js/Math.abs %)))

(def cljc-round
  #?(:clj  #(Math/round %)
     :cljs #(js/Math.round %)))

(def cljc-ceil
  #?(:clj  #(Math/ceil %)
     :cljs #(js/Math.ceil %)))

(def unique-long
  (let [counter (atom (long 0))]
    (fn [] (swap! counter inc))))

(def unique-delta-id
  (let [counter (atom (long 0))]
    (fn [] (swap! counter + 2))))

(defn bimap [coll]
  (let [coll-length (count coll)
        size-type   (condp > coll-length
                      max-ubyte  :ubyte
                      max-ushort :ushort
                      (cljc-throw (format "Collection length exceeds ushort range: %s."
                                          coll-length)))]
    {:size size-type
     :map  (->> (into (sorted-set) coll)
                (map-indexed vector)
                (mapcat (fn [[a b]] [[a b] [b a]]))
                (into {}))}))

;; Code generation

(defn resolve-schema [schema schemas]
  (if (custom? schema)
    (resolve-schema (schemas schema) schemas)
    schema))

(defn expand-record [[_ {:keys [extends]} record-map :as record] schemas]
  (if (empty? extends)
    record
    (let [super-records (map #(expand-record (schemas %) schemas)
                             extends)]
      (reduce (fn [[_ {diff-1 :diff interp-1 :interp} record-map-1]
                   [_ {diff-2 :diff interp-2 :interp constructor :constructor} record-map-2]]
                (letfn [(expand-option [opt all] (set (if (= :all opt) all opt)))]
                  [:record {:diff        (union (expand-option diff-1 (keys record-map-1))
                                                (expand-option diff-2 (keys record-map-2)))
                            :interp      (union (expand-option interp-1 (keys record-map-1))
                                                (expand-option interp-2 (keys record-map-2)))
                            :constructor constructor}
                   (merge record-map-1 record-map-2)]))
              (conj super-records record)))))

(defn disj-indexed [[composite-type _ arg] value]
  (map (fn [index]
         {:index        index
          :symbol       (gensym "inner-value_")
          :inner-schema (arg index)
          :inner-value  (case composite-type
                          :tuple  `(~value ~index)
                          :record `(get ~value ~index))})
       (case composite-type
         :tuple  (range (count arg))
         :record (sort (keys arg)))))

(defn runtime-fn [fn-key]
  `(get-in @(:state ~'config) [:fn-map ~fn-key]))

(defn runtime-processor [schema type]
  `(get-in ~'config [:processors ~schema ~type]))

(defn decorate-set [sorted-by body]
  `(into ~(case sorted-by
            :none    `#{}
            :default `(sorted-set)
            `(sorted-set-by ~(runtime-fn sorted-by)))
         ~body))

(defn decorate-map [sorted-by body]
  `(into ~(case sorted-by
            :none    `{}
            :default `(sorted-map)
            `(sorted-map-by ~(runtime-fn sorted-by)))
         ~body))

(defn decorate-constructor [constructor body]
  (if constructor
    `(~(runtime-fn constructor) ~body)
    body))
