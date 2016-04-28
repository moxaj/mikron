(ns seria.util.symbol
  "Symbol related utils."
  (:require [clojure.string :as string]))

(defn raw-gensym [sym]
  (let [sym-name (name sym)]
    (symbol (if-let [index (string/last-index-of sym-name "_")]
              (subs sym-name 0 index)
              sym-name))))

(defn postfix-gensym [sym s]
  (gensym (str (name (raw-gensym sym)) "-" s "_")))

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(gensym ~(str sym "_"))])
                   binding-form)]
     ~@body))

(def var-name
  (memoize
    (fn [key]
      (gensym (format "%s_" (name key))))))

(defn processor-name
  ([processor-type]
   (var-name processor-type))
  ([processor-type schema-name]
   (var-name (keyword (format "%s-%s" (name processor-type) (name schema-name))))))
