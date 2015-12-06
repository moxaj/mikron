(ns seria.analyze
  (:require [clojure.walk :refer [postwalk postwalk-replace]]
            [clojure.string :as str]))

(defn find-by* [f form]
  (concat (if (f form) [{:found form}] [])
          (if (or (sequential? form)
                  (map? form))
            (map (partial find-by* f) form)
            [])))

(defn find-by [f form]
  (->> (find-by* f form)
       (flatten)
       (map :found)))

(defn find-multi-cases [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn find-enum-values [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :enum (first form)))))
       (mapcat (fn [[_ _ values]] values))))

(defn find-embedded-fns [schemas]
  (find-by fn? schemas))

(defn omit-core-ns [form]
  (postwalk (fn [x]
              (if-not (symbol? x)
                x
                (-> (str x)
                    (str/replace #"clojure\.core/" "")
                    (symbol))))
            form))

(defn safe-expr? [form]
  (empty? (find-by (fn [x]
                     (and (symbol? x)
                          (= "deref" (name x))))
                   form)))

(defn inline-let [let-form]
  (let [binding-map (apply hash-map (second let-form))]
    (reduce (fn [[_ binding-form & body-exprs :as new-form] binding-symbol]
              (if-not (and (safe-expr? (binding-map binding-symbol))
                           (= (count (find-by #{binding-symbol} new-form)) 2))
                new-form
                (let [new-binding-map (apply hash-map binding-form)
                      new-body-exprs  (postwalk-replace {binding-symbol (binding-map binding-symbol)}
                                                        body-exprs)]
                  (if (= 2 (count binding-form))
                    (if (= 1 (count new-body-exprs))
                      (first new-body-exprs)
                      `(do ~@new-body-exprs))
                    `(let [~@(mapcat identity (dissoc new-binding-map binding-symbol))]
                       ~@new-body-exprs)))))
            let-form
            (keys binding-map))))

(defn inline-lets [form]
  (postwalk (fn [sub-form]
              (if-not (and (sequential? sub-form)
                           (symbol? (first sub-form))
                           (= "let" (name (first sub-form))))
                sub-form
                (inline-let sub-form)))
            form))

(defn unwrap-do [super-form]
  (let [[op binding-form & body-exprs] super-form]
    `(~op ~binding-form
       ~@(mapcat (fn [body-expr]
                   (if-not (and (sequential? body-expr)
                                (symbol? (first body-expr))
                                (= "do" (name (first body-expr))))
                     (list body-expr)
                     (rest body-expr)))
                 body-exprs))))

(defn unwrap-dos [form]
  (postwalk (fn [sub-form]
              (if-not (and (sequential? sub-form)
                           (symbol? (first sub-form))
                           (#{"let" "fn"} (name (first sub-form))))
                sub-form
                (unwrap-do sub-form)))
            form))

(defn unwrap-single-arg-forms [form]
  (postwalk (fn [sub-form]
              (if-not (and (sequential? sub-form)
                           (symbol? (first sub-form))
                           (#{"do" "and" "or"} (name (first sub-form)))
                           (= 1 (count (rest sub-form))))
                sub-form
                (second sub-form)))
            form))

(defn prettify-form [form]
  (->> form
       (unwrap-single-arg-forms)
       (inline-lets)
       (unwrap-dos)
       (omit-core-ns)))