(ns mikron.compiler.util
  "Compile time utility functions."
  (:require [clojure.walk :as walk])
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

(defmacro macro-context
  "A single macro which is equivalent to `with-gensyms` + `with-evaluated`."
  [{:keys [gen-syms eval-syms]} & body]
  (let [body' `(do ~@body)
        body' (if (seq gen-syms)
                `(with-gensyms ~gen-syms
                   ~body')
                 body')
        body' (if (seq eval-syms)
                `(with-evaluated ~eval-syms
                   ~body')
                body')]
    body'))

(defmacro syntax-cond->
  [expr alias & cond+exprs]
  `(let [~alias ~expr
         ~@(->> cond+exprs
                (partition 2)
                (mapcat (fn [[cond expr]]
                          [alias `(if ~cond
                                    ~expr
                                    ~alias)])))]
     ~alias))

;; processor

(def processor-name
  "Returns a memoized processor name."
  (memoize
    (fn [processor-type schema-name]
      (gensym (str (name processor-type) "-" (name schema-name))))))
