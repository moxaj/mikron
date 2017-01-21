(ns mikron.util
  "Generic utility functions."
  #?(:clj (:require [mikron.compile-util :as compile-util])))

#?(:cljs
   (defn node-env?
     "Returns `true` if compiled for Node.js, `false` otherwise."
     []
     (= "nodejs" cljs.core/*target*)))

(defn exception
  "Creates an exception appropriate for the current platform, with `s` as the message."
  [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

#?(:clj
   (defmacro safe
     "Evaluates each expression of `body` and returns `ex-value` if an exception occured.
     Otherwise returns the value of the last expression in `body`."
     [ex-value & body]
     `(try
        (do ~@body)
        (catch ~(if (compile-util/cljs?) `js/Object `Throwable) e#
          ~ex-value))))
