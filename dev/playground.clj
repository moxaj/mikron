(ns playground
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.buffer :as b]
            [mikron.core :as m])
  (:import [mikron Mikron$Doubles]))

(defmacro c! [form]
  `(c/with-progress-reporting (c/quick-bench ~form)))

(defmacro p! [form]
 `(->> (quote ~form)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)))
