(ns seria.prettify
  "Config output code pretiffication."
  (:require [clojure.walk :as walk]
            [clojure.string :as str]
            [clojure.pprint :as pprint]
            [seria.util :as util]))

(defn let-form? [form]
  (and (sequential? form)
       (symbol? (first form))
       (= "let" (name (first form)))))

(defn inline-let-symbols* [[_ binding-form & exprs]]
  (let [binding-map        (apply hash-map binding-form)
        inlineable-symbols (filter (fn [sym]
                                     (and (< (count (util/find-by* #{sym} exprs))
                                             2)
                                          (not (:no-inline (meta sym)))))
                                   (keys binding-map))
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

(defn do-form? [form]
  (and (sequential? form)
       (symbol? (first form))
       (= "do" (name (first form)))))

(defn unwrap-do-forms* [form]
  (if-not (do-form? form)
    [form]
    (rest form)))

(defn unwrap-do-forms [form]
  (walk/postwalk (fn [inner-form]
                   (if-not (and (sequential? inner-form)
                                (symbol? (first inner-form)))
                     inner-form
                     (let [[f & args] inner-form]
                       (condp contains? (name f)
                         #{"let" "fn" "when" "when-not" "when-let"}
                         `(~f ~(first args)
                            ~@(mapcat unwrap-do-forms* (rest args)))

                         #{"do"}
                         `(do ~@(mapcat unwrap-do-forms* args))

                         inner-form))))
                 form))

(defn prettify [form]
  (-> form
      (inline-let-symbols)
      (unwrap-single-arg-forms)
      (unwrap-do-forms)
      (simplify-symbols)))

(defn requires [form]
  (cond
    (namespaced-symbol? form)
    (let [[namespace function] (split-symbol form)]
      (sorted-map namespace (sorted-set function)))

    (or (map? form)
        (sequential? form))
    (apply merge-with (partial apply conj) (map requires form))

    :else
    {}))

(defn ns-str [ns-name config-name form pretty-print?]
  (let [write (if pretty-print? pprint/pprint println)]
    (binding [pprint/*print-right-margin* 100
              pprint/*print-miser-width*  100]
      (pprint/with-pprint-dispatch pprint/code-dispatch
        (with-out-str
          (write `(~'ns ~ns-name
                    (:require ~@(map (fn [[required-ns-name functions]]
                                       [required-ns-name :refer (vec functions)])
                                     (dissoc (requires form) 'clojure.core)))))
          (newline)
          (write `(~'def ~config-name ~(prettify form))))))))
