(ns playground
  (:refer-clojure :exclude [doubles])
  (:require [clojure.pprint :as p]
            [clojure.spec :as s]
            [clojure.walk :as walk]
            [criterium.core :as c]
            [mikron.buffer :as buffer]
            ;[mikron.benchmark.data :as benchmark.data]
            ;[mikron.benchmark.schema :as benchmark.schema]
            [mikron.core :as mikron :refer [defschema schema pack unpack gen valid? diff undiff interp]]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll]
            [mikron.util.math :as util.math]
            [mikron.compile-util :as compile-util]))
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

(comment
  (defschema ::a [:list ::b2])

  (defschema ::b [:record {:a [:optional ::a2] :c :int :d :string}])

  (defschema ::a2 [:list ::b3])

  (defschema ::b2 [:record {:a [:optional ::a3] :c :int :d :string}])

  (defschema ::a3 [:list :nil])

  (defschema ::b3 [:record {:a [:optional :nil] :c :int :d :string}])

  (c! (gen (schema [:list :nil])))

  (c! (gen (schema :int))))
