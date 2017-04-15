(ns mikron.compiler.util
  "Compile time utility functions."
  #?(:cljs (:require-macros [mikron.compiler.util])))

;; macro helper

(defmacro cljs?
  "Returns `true` if compiled for cljs, `false` otherwise."
  []
  `(boolean (:ns ~'&env)))

(defmacro with-gensyms
  "Executes each expression of `body` in the context of each symbol in `syms`
  bound to a generated symbol."
  [syms & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym)) ~(meta sym))])
                   syms)]
     ~@body))

(defmacro with-evaluated
  "Executes each expression of `body` in the context of each symbol in `syms`
  bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation
  in macros."
  [syms & body]
  (let [m (into {} (map (juxt identity gensym) syms))]
    `(let [~@(mapcat (fn [[sym temp-sym]]
                       [temp-sym `(gensym '~sym)])
                     m)]
       `(let [~~@(mapcat reverse m)]
          ~(let [~@(mapcat identity m)]
             ~@body)))))

;; processor

(def processor-name
  "Returns a memoized processor name."
  (memoize
    (fn [processor-type schema-name]
      (gensym (str (name processor-type) "-" (name schema-name))))))
