(ns seria.util
  #?(:cljs (:require [cljs.reader])))

(def ^:const max-ubyte 255)
(def ^:const max-ushort 65535)

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
        size-type   (condp > coll-length
                      max-ubyte :ubyte
                      max-ushort :ushort
                      (cljc-throw (format "Collection length exceeds ushort range: %s"
                                          coll-length)))]
    {:size size-type
     :map  (->> (set coll)
                (map-indexed vector)
                (mapcat (fn [[a b]] [[a b] [b a]]))
                (into {}))}))

(defn disj-indexed [[composite-type _ arg] value]
  (map (fn [index]
         {:index      index
          :symbol     (gensym (format "item_%s_"
                                      (if (keyword? index)
                                        (name index)
                                        index)))
          :sub-schema (get arg index)
          :sub-value  `(get ~value ~index)})
       (case composite-type
         :tuple (range (count arg))
         :record (keys arg)
         [])))