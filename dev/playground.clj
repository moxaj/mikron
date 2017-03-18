(ns playground
  (:refer-clojure :exclude [doubles])
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.core :as mikron :refer [defschema schema pack unpack gen valid? diff undiff interp]]))
            ;[no.disassemble :as d]))

(defmacro c! [& body]
  `(c/with-progress-reporting (c/quick-bench (do ~@body))))

(defmacro p! [expr]
 `(->> (quote ~expr)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)
       (binding [p/*print-suppress-namespaces* true])))

(defmacro p!! [expr]
 `(->> (quote ~expr)
       (walk/macroexpand-all)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)
       (binding [p/*print-suppress-namespaces* true])))

(defmacro d! [expr]
  `(println (d/disassemble ~expr)))
