(ns mikron.runtime.util
  "Generic utility functions."
  (:require [mikron.compiler.util :as compiler.util])
  #?(:cljs (:require-macros [mikron.runtime.util])))

#?(:cljs
   (defn node-env?
     "Returns `true` if compiled for Node.js, `false` otherwise."
     []
     (= "nodejs" cljs.core/*target*)))

(defmacro safe
  "Evaluates each expression of `body` and returns `ex-value` if an exception occured.
  Otherwise returns the value of the last expression in `body`."
  [ex-value & body]
  `(try
     (do ~@body)
     (catch ~(if (compiler.util/cljs?) `js/Object `Throwable) e#
       ~ex-value)))
