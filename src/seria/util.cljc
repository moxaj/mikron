(ns seria.util
  #?(:cljs (:require [cljs.reader])))

(def ^:const max-byte 128)
(def ^:const max-short 32768)

(def unique-int
  (let [counter (atom 0)]
    (fn [] (swap! counter inc))))

(defn bimap [coll]
  (let [[max-value size-type] (if (< (count coll) max-byte)
                                [max-byte :byte]
                                [max-short :short])]
    {:size size-type
     :map  (->> (set coll)
                (map-indexed #(vector (- %1 max-value) %2))
                (mapcat (fn [[a b]] [[a b] [b a]]))
                (into {}))}))

(defn disj-indexed [[composite-type _ arg] data]
  (map (fn [index]
         {:index      index
          :symbol     (gensym (str "item_"
                                   (if (keyword? index)
                                     (name index)
                                     index)
                                   "_"))
          :sub-schema (get arg index)
          :sub-data   `(get ~data ~index)})
       (if (= :tuple composite-type)
         (range (count arg))
         (keys arg))))

(defn cljc-read-string []
  #?(:clj  read-string
     :cljs cljs.reader/read-string))

(defn cljc-throw [message]
  (throw (new #?(:clj Exception :cljs js/Error) message)))

(defn find-by* [f form]
  (concat (if (f form) [{:found form}] [])
          (if (or (sequential? form)
                  (map? form))
            (map (partial find-by* f) form)
            [])))

(defn find-by [f form]
  (->> form
       (map (partial find-by* f))
       (flatten)
       (map :found)))