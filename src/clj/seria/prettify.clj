(ns seria.prettify
  "Output code prettiffication."
  (:require [clojure.walk :as walk]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.pprint :as pprint]
            [seria.util.coll :as util.coll]))

(defn let-form? [form]
  (and (sequential? form)
       (symbol? (first form))
       (= "let" (name (first form)))))

(defn make-let-form [bindings body]
  (if (empty? bindings)
    (if (= 1 (count body))
      (first body)
      `(do ~@body))
    `(let [~@(mapcat identity bindings)]
       ~@body)))

(defn inline-let-symbols* [[_ binding-form & body]]
  (let [initial-bindings (partition 2 binding-form)]
    (loop [finished-bindings []
           [[from to] & bindings] initial-bindings
           body body]
      (if-not from
        (make-let-form finished-bindings body)
        (if (and (symbol? from)
                 (not (:no-inline (meta from)))
                 (> 2 (count (util.coll/find-by #{from} [bindings body]))))
          (recur finished-bindings
                 (walk/postwalk-replace {from to} bindings)
                 (walk/postwalk-replace {from to} body))
          (recur (conj finished-bindings [from to])
                 bindings
                 body))))))

(defn inline-let-symbols [form]
  (walk/postwalk (fn [inner-form]
                   (if-not (let-form? inner-form)
                     inner-form
                     (inline-let-symbols* inner-form)))
                 form))

(defn simplify-symbols [form protected-symbols]
  (walk/postwalk (fn [inner-form]
                   (if (and (symbol? inner-form)
                            (namespace inner-form)
                            (not (protected-symbols (symbol (name inner-form)))))
                     (symbol (name inner-form))
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

(def has-implicit-do? #{"let" "fn" "when" "when-not" "when-let" "defn" "defn-" "do"})

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
                                (symbol? (first inner-form))
                                (has-implicit-do? (name (first inner-form))))
                     inner-form
                     (let [[f & args] inner-form]
                      (if (= "do" (name f))
                        `(do ~@(mapcat unwrap-do-forms* args))
                        `(~f ~(first args)
                           ~@(mapcat unwrap-do-forms* (rest args)))))))
                 form))

(defn if-form? [form]
  (and (sequential? form)
       (symbol? (first form))
       (= "if" (name (first form)))))

(defn remove-unnecessary-ifs* [[_ conditional true-branch false-branch :as if-form]]
  (if (= true-branch false-branch)
    true-branch
    if-form))

(defn remove-unnecessary-ifs [form]
  (walk/postwalk (fn [inner-form]
                   (if-not (if-form? inner-form)
                     inner-form
                     (remove-unnecessary-ifs* inner-form)))
                 form))

(defn remove-helper-meta [form]
  (walk/postwalk (fn [inner-form]
                   (if (and (symbol? inner-form)
                            (:no-inline (meta inner-form)))
                     (with-meta inner-form {})
                     inner-form))
                 form))

(defn prettify [form protected-symbols]
  (-> form
      (unwrap-single-arg-forms)
      (inline-let-symbols)
      (unwrap-do-forms)
      (remove-unnecessary-ifs)
      (remove-helper-meta)
      (simplify-symbols protected-symbols)))
