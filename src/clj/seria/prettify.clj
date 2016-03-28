(ns seria.prettify
  "Config output code pretiffication."
  (:require [clojure.walk :as walk]
            [clojure.string :as str]
            [clojure.set :as set]
            [clojure.pprint :as pprint]
            [seria.util :as util]))

;; Todos
;; unwrap do in: let, do, fn, when, when-not, when-let, ?

(defn let-form? [form]
  (and (sequential? form)
       (symbol? (first form))
       (= "let" (name (first form)))))

(defn inline-let-symbols* [[_ binding-form & exprs]]
  (let [binding-map        (apply hash-map binding-form)
        inlineable-symbols (->> (keys binding-map)
                                (map (fn [sym]
                                       [sym (count (util/find-by* #{sym} exprs))]))
                                (filter (fn [[_ sym-count]]
                                          (< sym-count 2)))
                                (map first))
        new-binding-form   (->> (apply dissoc binding-map inlineable-symbols)
                                (mapcat identity)
                                (vec))
        new-exprs          (-> (select-keys binding-map inlineable-symbols)
                               (walk/postwalk-replace exprs))]
    (if (empty? new-binding-form)
      (if (= 1 (count new-exprs))
        (first new-exprs)
        `(do ~@new-exprs))
      `(let ~new-binding-form
         ~@new-exprs))))

(defn inline-let-symbols [form]
  (walk/postwalk (fn [inner-form]
                   (if-not (let-form? inner-form)
                     inner-form
                     (inline-let-symbols* inner-form)))
                 form))

(defn namespaced-symbol? [form]
  (and (symbol? form)
       (some #{\/} (str form))))

(defn split-symbol [s]
  (map symbol (str/split (str s) #"/" 2)))

(defn simplify-symbols [form]
  (walk/postwalk (fn [inner-form]
                   (if (namespaced-symbol? inner-form)
                     (second (split-symbol inner-form))
                     inner-form))
                 form))

(defn unwrap-single-arg-forms [form]
  (walk/postwalk (fn [inner-form]
                   (if (and (sequential? inner-form)
                            (symbol? (first inner-form))
                            (#{"do" "and" "or"} (name (first inner-form)))
                            (= 1 (count (rest inner-form))))
                     (second inner-form)
                     inner-form))
                 form))

(defn prettify [form]
  (-> form
      (inline-let-symbols)
      (unwrap-single-arg-forms)
      (simplify-symbols)))

(defn requires [form]
  (cond
    (namespaced-symbol? form)
    (let [[namespace function] (split-symbol form)]
      (sorted-map namespace (sorted-set function)))

    (or (map? form)
        (sequential? form))
    (apply merge-with set/union (map requires form))

    :else
    {}))

(defn ns-str [ns-name config-name form pretty-print?]
  (let [write (if pretty-print? pprint/pprint println)]
    (pprint/with-pprint-dispatch pprint/code-dispatch
      (with-out-str
        (write `(~'ns ~ns-name
                  (:require ~@(map (fn [[required-ns-name functions]]
                                     [required-ns-name :refer (vec functions)])
                                   (dissoc (requires form) 'clojure.core)))))
        (newline)
        (write `(~'def ~config-name ~(prettify form)))))))
