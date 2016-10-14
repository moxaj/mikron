(ns playground
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.buffer :as buffer]
            [mikron.core :refer [defprocessors pack unpack gen valid? diff undiff interp]]
            [mikron.benchmark.data :as data])
  (:import [java.io File]))

(defmacro c! [& form]
  `(c/with-progress-reporting (c/quick-bench (do ~@form))))

(defmacro p! [form]
 `(->> (quote ~form)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)))

(comment
 ;; quartet
 :person   [:record {:name :string
                     :age  :ubyte}]
 :quartet  [:tuple [:person :person :person :person]])

(comment
  (let [b (buffer/allocate 100)]
    (c!
      (buffer/!reset b)
      (buffer/!varint b 10)))
  nil)
