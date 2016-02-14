(ns seria.prettify
  (:require [seria.analyze :refer [find-by]]
            [clojure.walk :refer [postwalk postwalk-replace]]
            [clojure.string :as str]
            [clojure.set :refer [union]]
            [clojure.pprint :refer [pprint]]))

(defn namespaced-symbol? [form]
  (and (symbol? form)
       (some #{\/} (str form))))

(defn split-symbol [s]
  (map symbol (str/split (str s) #"/" 2)))

(defn simplify-symbols [form]
  (postwalk (fn [x]
              (if (namespaced-symbol? x)
                (second (split-symbol x))
                x))
            form))

(defn contains-deref? [form]
  (find-by (fn [x]
               (and (symbol? x)
                    (= "deref" (name x))))
           form))

(defn inline-let [let-form]
  (let [binding-map (apply hash-map (second let-form))]
    (reduce (fn [[_ binding-form & body-exprs :as new-form] binding-symbol]
              (if (and (not (contains-deref? (binding-map binding-symbol)))
                       (= (count (find-by #{binding-symbol} new-form)) 2))
                (let [new-binding-map (apply hash-map binding-form)
                      new-body-exprs  (postwalk-replace {binding-symbol (binding-map binding-symbol)}
                                                        body-exprs)]
                  (if (= 2 (count binding-form))
                    (if (= 1 (count new-body-exprs))
                      (first new-body-exprs)
                      `(do ~@new-body-exprs))
                    `(let [~@(mapcat identity (dissoc new-binding-map binding-symbol))]
                       ~@new-body-exprs)))
                new-form))
            let-form
            (keys binding-map))))

(defn inline-lets [form]
  (postwalk (fn [sub-form]
              (if (and (sequential? sub-form)
                       (symbol? (first sub-form))
                       (= "let" (name (first sub-form))))
                (inline-let sub-form)
                sub-form))
            form))

(defn unwrap-do [[op & forms]]
  `(~op
     ~@(mapcat (fn [form]
                 (if (and (sequential? form)
                          (symbol? (first form))
                          (= "do" (name (first form))))
                   (rest form)
                   (list form)))
               forms)))

(defn unwrap-dos [form]
  (postwalk (fn [sub-form]
              (if (and (sequential? sub-form)
                       (symbol? (first sub-form))
                       (#{"let" "fn" "do" "when" "when-not" "when-let"} (name (first sub-form))))
                (unwrap-do sub-form)
                sub-form))
            form))

(defn unwrap-single-arg-forms [form]
  (postwalk (fn [sub-form]
              (if (and (sequential? sub-form)
                       (symbol? (first sub-form))
                       (#{"do" "and" "or"} (name (first sub-form)))
                       (= 1 (count (rest sub-form))))
                (second sub-form)
                sub-form))
            form))

(defn prettify [form]
  (->> form
       (unwrap-single-arg-forms)
       (inline-lets)
       (unwrap-dos)
       (simplify-symbols)))

(defn requires [form]
  (cond
    (namespaced-symbol? form)
    (let [[namespace function] (split-symbol form)]
      {namespace #{function}})

    (or (map? form)
        (sequential? form))
    (apply merge-with union (map requires form))

    :else
    {}))

(defn ns-str [ns-name config-name form pretty-print?]
  (let [ns-decl `(~'ns ~ns-name
                   (:require ~@(map (fn [[required-ns-name functions]]
                                      [required-ns-name :refer (vec functions)])
                                    (dissoc (requires form) 'clojure.core))))
        write   (if pretty-print? pprint println)]
    (with-out-str
      (write ns-decl)
      (newline)
      (write `(~'def ~config-name ~(prettify form))))))
