(ns seria.util
  #?(:cljs (:require [cljs.reader])))

(def ^:const max-byte 128)
(def ^:const max-short 32768)

(defn cljc-read-string []
  #?(:clj  read-string
     :cljs cljs.reader/read-string))

(defn cljc-throw [message]
  (throw (new #?(:clj Exception :cljs js/Error) message)))

(def unique-int
  (let [counter (atom 0)]
    (fn [] (swap! counter inc))))

(defn bimap [coll]
  (let [coll-length (count coll)
        [max-value size-type] (condp > coll-length
                                max-byte [max-byte :byte]
                                max-short [max-short :short]
                                (cljc-throw (format "Collection length exceeds short range: %s" coll-length)))]
    {:size size-type
     :map  (->> (set coll)
                (map-indexed #(vector (- %1 max-value) %2))
                (mapcat (fn [[a b]] [[a b] [b a]]))
                (into {}))}))

(defn disj-indexed [[composite-type _ arg] data]
  (map (fn [index]
         {:index      index
          :symbol     (gensym (format "item_%s_"
                                      (if (keyword? index)
                                        (name index)
                                        index)))
          :sub-schema (get arg index)
          :sub-data   `(get ~data ~index)})
       (case composite-type
         :tuple (range (count arg))
         :record (keys arg)
         [])))