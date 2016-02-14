(ns seria.prettify
  (:require [clojure.walk :refer [postwalk]]
            [clojure.string :as str]
            [clojure.set :refer [union]]
            [clojure.pprint :refer [pprint]]))

;; Todos
;; unwrap do in: let, do, fn, when, when-not, when-let, ?
;; inline let bindings when used only once

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
  (-> form
      (unwrap-single-arg-forms)
      (simplify-symbols)))

(defn requires [form]
  (cond
    (namespaced-symbol? form)
    (let [[namespace function] (split-symbol form)]
      (sorted-map namespace (sorted-set function)))

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
