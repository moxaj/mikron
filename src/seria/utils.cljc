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

(defn find-by* [f form]
  (let [value (if (f form) [{:found form}] [])]
    (concat value (if (or (sequential? form)
                          (map? form))
                    (map (partial find-by* f) form)
                    []))))

(defn find-by [f form]
  {:pre [(ifn? f)]}
  (->> form
       (map (partial find-by* f))
       (flatten)
       (map :found)))