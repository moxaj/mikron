(ns seria.util.coll
  "Generic collection utils.")

(defn find-by [pred form]
  (cond-> []
    (pred form)
    (conj form)

    (or (sequential? form)
        (map? form))
    (concat (mapcat (partial find-by pred) form))))

(defn find-unique-by [pred form]
  (distinct (find-by pred form)))

(defn index-of [item coll]
  (->> coll
       (map-indexed vector)
       (filter (comp (partial = item) second))
       (ffirst)))
