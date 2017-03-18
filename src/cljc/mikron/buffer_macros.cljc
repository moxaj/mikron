(ns mikron.buffer-macros
  (:require [clojure.spec :as s]
            [mikron.compiler.spec :as compiler.spec]
            [mikron.compiler.util :as compiler.util])
  #?(:cljs (:require-macros [mikron.buffer-macros])))

(defmacro with-delta
  "Executes `body` and updates the position `pos` with the delta `delta`."
  [pos delta body]
  (compiler.util/with-gensyms [value]
    `(let [~value ~body]
       (set! ~pos (unchecked-add ~pos ~delta))
       ~value)))

(defmacro with-le
  "Executes the expressions with the endianness automatically set to `le`."
  [le [expr & exprs]]
  `(if ~le
     (~(symbol (str expr "LE")) ~@exprs)
     (~(symbol (str expr "BE")) ~@exprs)))

(defmacro definterface+
  "Expands to a `definterface` call in clj, `defprotocol` call in cljs."
  [name & ops]
  (let [no-meta    #(with-meta % nil)
        cljs?      (compiler.util/cljs?)
        ops        (map (fn [[op-name args doc-string]]
                          [op-name
                           args
                           (vec (cons 'this (map no-meta args)))
                           (when doc-string [doc-string])])
                        ops)
        inner-form `(~(if cljs? `defprotocol `definterface)
                     ~name
                     ~@(map (fn [[op-name args args' doc-string]]
                              (if cljs?
                                `(~(no-meta op-name)
                                  ~args'
                                  ~@doc-string)
                                `(~(with-meta (munge op-name) (meta op-name))
                                  ~args
                                  ~@doc-string)))
                            ops))]
    (if cljs?
      inner-form
      `(do ~inner-form
           ~@(map (fn [[op-name args args' doc-string]]
                    `(defn ~(no-meta op-name)
                       {:inline         (fn ~args'
                                          `(~'~(symbol (str "." (munge op-name)))
                                            ~~@args'))
                        :inline-arities #{~(count args')}}
                       ~(with-meta (vec (cons (with-meta 'this {:tag name})
                                              args))
                                   (meta op-name))
                       (~(symbol (str "." (munge op-name)))
                        ~@args')))
                  ops)))))

(s/fdef definterface+ :args ::compiler.spec/definterface+-args)
