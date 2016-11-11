(ns mikron.util
  "Generic utility functions."
  #?(:clj (:require [mikron.compile-util :as compile-util])))

#?(:cljs
   (defn node-env? []
     (= "nodejs" cljs.core/*target*)))

(defn exception [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

#?(:clj
   (defmacro safe [ex-value & body]
     `(try
        (do ~@body)
        (catch ~(if (compile-util/cljs?) `js/Object `Throwable) e#
          ~ex-value))))
