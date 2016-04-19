(ns seria.output
  "Output formatting."
  (:require [clojure.set :as set]
            [clojure.pprint :as pprint]
            [seria.prettify :as prettify]))

(defn ns-requires [form]
  (cond
    (symbol? form)
    (let [form-ns (namespace form)]
      (if (or (= "clojure.core" form-ns))
        (sorted-map)
        (sorted-map (if form-ns (symbol form-ns) 'none)
                    (sorted-set (symbol (name form))))))

    (or (map? form)
        (sequential? form))
    (apply merge-with set/union (map ns-requires form))

    :else
    (sorted-map)))

(defn protected-symbols [ns-requires]
  (->> ns-requires
       (mapcat (fn [[ns-name fn-names]]
                 (map (fn [fn-name]
                        {fn-name [ns-name]})
                      fn-names)))
       (apply merge-with concat)
       (filter (fn [[fn-name ns-names]]
                 (< 1 (count ns-names))))
       (map first)
       (set)))

(defn ns-form [ns-name ns-requires protected-symbols]
  `(~'ns ~ns-name
     (:require ~@(map (fn [[required-ns-name referred-fns]]
                        (let [required-fns (->> referred-fns
                                                (remove protected-symbols)
                                                (vec))]
                          (cond-> [required-ns-name]
                            (seq required-fns) (conj :refer required-fns))))
                      (dissoc ns-requires 'none)))))

(defn pprintln [x]
  (pprint/pprint x)
  (newline))

(defn format-output [output & {:keys [ns-name config]}]
  (let [ns-requires                       (ns-requires output)
        protected-symbols                 (protected-symbols ns-requires)
        ns-form                           (ns-form ns-name ns-requires protected-symbols)
        {:keys [vars declares fns]}       (prettify/prettify output protected-symbols)
        {private-fns true public-fns nil} (group-by (comp :private meta second) fns)]
    (with-out-str
      (pprint/with-pprint-dispatch pprint/code-dispatch
        (pprintln ns-form)
        (pprintln config)
        (->> vars (sort-by second) (run! pprintln))
        (pprintln declares)
        (->> private-fns (sort-by second) (run! pprintln))
        (->> public-fns (sort-by second) (run! pprintln))))))
