(ns playground
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.buffer :as buffer]
            [mikron.benchmark.data :as benchmark.data]
            [mikron.benchmark.schema :as benchmark.schema]
            [mikron.core :refer [defschema pack unpack gen valid? diff undiff interp]]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll]
            [mikron.util.math :as util.math]
            [mikron.compile-util :as compile-util]
            [no.disassemble :refer [disassemble]])
  (:import [mikron.buffer Buffer ByteBufferImplNio] ;ByteBufferImplUnsafe]
           [java.nio ByteBuffer ByteOrder]
           [clojure.lang Indexed Counted PersistentVector ISeq]
           [java.nio.charset Charset StandardCharsets]))

(defmacro c! [& form]
  `(c/with-progress-reporting (c/quick-bench (do ~@form))))

(defmacro p! [form]
 `(->> (quote ~form)
       (macroexpand)
       (p/pprint)))
       ;(p/with-pprint-dispatch p/code-dispatch)))
       ;(binding [p/*print-suppress-namespaces* true])))

(defmacro d! [form]
  `(println (disassemble ~form)))

(comment

  nil)

(defmacro if-not-let [binding-form & [then else]]
  `(if-let ~binding-form ~else ~then))
