(ns seria.utils)

(def unique-int
  (let [counter (atom 0)]
    (fn [] (swap! counter inc))))

(defn bimap [coll]
  {:pre [(sequential? coll)]}
  (->> coll
       (map-indexed #(vector (- %1 32768) %2))
       (mapcat (fn [[a b]] [[a b] [b a]]))
       (into {})))

(defn disj-indexed [[composite-type _ arg] data]
  (map (fn [index]
         {:index      index
          :symbol     (gensym "item_")
          :sub-schema (get arg index)
          :sub-data   `(get ~data ~index)})
       (if (= :tuple composite-type)
         (range (count arg))
         (keys arg))))

(defn find-by* [f form]
  (concat (if (f form) [{:found form}] [])
          (if (or (sequential? form)
                  (map? form))
            (map (partial find-by* f) form)
            [])))

(defn find-by [f form]
  {:pre [(ifn? f)]}
  (->> form
       (map (partial find-by* f))
       (flatten)
       (map :found)))