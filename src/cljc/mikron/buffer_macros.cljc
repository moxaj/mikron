(ns mikron.buffer-macros
  (:require [mikron.compile-util :as compile-util])
  #?(:cljs (:require-macros [mikron.buffer-macros])))

(defmacro with-delta
  "Executes `body` and updates the position `pos` with the delta `delta`."
  [pos delta body]
  (compile-util/with-gensyms [value]
    `(let [~value ~body]
       (set! ~pos (unchecked-add ~pos ~delta))
       ~value)))

(defmacro with-le
  "Executes the expressions with the endianness automatically set to `le`."
  [le [expr & exprs]]
  `(if ~le
     (~(symbol (str expr "LE")) ~@exprs)
     (~(symbol (str expr "BE")) ~@exprs)))
