(ns seria.io
  "Input/output processing."
  (:require [clojure.set :as set]
            [clojure.pprint :as pprint]
            [rewrite-clj.parser :as parser]
            [rewrite-clj.node :as node]
            [seria.prettify :as prettify]
            [seria.config :as config])
  (:import [java.util Date]
           [java.text SimpleDateFormat]))

(defn ns-requires [form]
  (cond
    (symbol? form)
    (let [form-ns (namespace form)]
      (if (= "clojure.core" form-ns)
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
       (filter (fn [[_ ns-names]]
                 (< 1 (count ns-names))))
       (map first)
       (set)))

(defn ns-form [ns-name ns-requires protected-symbols]
  `(~'ns ~ns-name
     ~(format "This namespace was automatically generated at %s."
              (.format (SimpleDateFormat.) (Date.)))
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

(def separator
  ";; ============================================================================")

(defn format-forms [forms & {:keys [ns-name config-string]}]
  (let [ns-requires                       (ns-requires forms)
        protected-symbols                 (protected-symbols ns-requires)
        ns-form                           (ns-form ns-name ns-requires protected-symbols)
        {:keys [declares fns]}            (prettify/prettify forms protected-symbols)
        {private-fns true public-fns nil} (group-by (comp :private meta second) fns)]
    (with-out-str
      (pprint/with-pprint-dispatch pprint/code-dispatch
        (binding [*print-meta* true]
          (pprintln ns-form)
          (println separator)
          (println ";; Static seria config ")
          (println separator) (newline)
          (println config-string) (newline)

          (when (seq declares)
            (println separator)
            (println ";; Forward declarations")
            (println separator) (newline))
          (pprintln declares)

          (when (seq private-fns)
            (println separator)
            (println ";; Private functions")
            (println separator) (newline))
          (->> private-fns (sort-by second) (run! pprintln))

          (when (seq public-fns)
            (println separator)
            (println ";; Public functions")
            (println separator) (newline))
          (->> public-fns (sort-by second) (run! pprintln)))))))

(defn ns-form? [form]
  (and (sequential? form)
       (let [[ns-sym ns-name] form]
         (and (symbol? ns-sym)
              (symbol? ns-name)
              (= "ns" (name ns-sym))))))

(defn process-input [input-string]
  (let [[ns-node config-node] (->> input-string
                                   (format "[%s]")
                                   (parser/parse-string)
                                   (node/children)
                                   (remove node/whitespace-or-comment?)
                                   (take 2))]
    (when-not (and (ns-form? (node/sexpr ns-node))
                   config-node)
      (throw (Exception. "Invalid source file!")))
    (-> config-node
        (node/sexpr)
        (eval)
        (config/process-config)
        (format-forms :ns-name       (second (node/sexpr ns-node))
                      :config-string (node/string config-node)))))
