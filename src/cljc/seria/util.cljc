(ns seria.util
  (:require [seria.spec :refer [custom?]]
            [clojure.set :refer [union]]
   #?(:cljs [cljs.reader])))

(def ^:const max-ubyte 255)
(def ^:const max-ushort 65535)

;; General purpose

(defn cljc-throw [message]
  (throw (new #?(:clj Exception :cljs js/Error) message)))

(defn cljc-read-string [s]
  #?(:clj  (read-string s)
     :cljs (cljs.reader/read-string s)))

(defn cljc-abs [n]
  #?(:clj  (Math/abs n)
     :cljs (js/Math.abs n)))

(defn cljc-round [n]
  #?(:clj  (Math/round n)
     :cljs (js/Math.round n)))

(defn cljc-ceil [n]
  #?(:clj  (Math/ceil n)
     :cljs (js/Math.ceil n)))

(defn bimap [coll]
  (let [coll-length (count coll)
        size-type   (condp > coll-length
                      max-ubyte  :ubyte
                      max-ushort :ushort
                      (cljc-throw (str "Collection length exceeds ushort range: %s"
                                       coll-length
                                       ".")))]
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

(defn disj-indexed [[composite-type {:keys [constructor]} arg] value]
  (map (fn [index]
         {:index        index
          :symbol       (gensym "inner-value_")
          :inner-schema (arg index)
          :inner-value  (case composite-type
                          :tuple  `(~value ~index)
                          :record (if constructor
                                    `(get ~value ~index)
                                    `(~value ~index)))})
       (case composite-type
         :tuple  (range (count arg))
         :record (sort (keys arg)))))

(defn runtime-fn [fn-key]
  `(get-in @(:state ~'config) [:fn-map ~fn-key]))

(defn runtime-processor [schema type]
  `(get-in ~'config [:processors ~schema ~type]))

(defn decorate-set [sorted-by expr]
  `(into ~(case sorted-by
            :none    `#{}
            :default `(sorted-set)
            `(sorted-set-by ~(runtime-fn sorted-by)))
         ~expr))

(defn decorate-map [sorted-by expr]
  `(into ~(case sorted-by
            :none    `{}
            :default `(sorted-map)
            `(sorted-map-by ~(runtime-fn sorted-by)))
         ~expr))

(defn decorate-constructor [constructor expr]
  (if constructor
    `(~(runtime-fn constructor) ~expr)
    expr))
