(ns seria.util.symbol
  "Symbol related utils."
  (:require [clojure.string :as string]))

(defn raw-gensym [sym]
  (let [sym-name (name sym)]
    (if-let [index (string/last-index-of sym-name "_")]
      (subs sym-name 0 index)
      sym-name)))

(defn postfix-gensym [sym s]
  (gensym (str (raw-gensym sym) "-" s "_")))

(defn processor-name [processor-type schema-name]
  (symbol (str (name processor-type) "-" (name schema-name))))

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(gensym ~(str sym "_"))])
                   binding-form)]
     ~@body))
