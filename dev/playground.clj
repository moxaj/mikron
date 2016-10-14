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

(defmacro inspect! [processor-types defprocessors-form]
 `(->> (quote ~defprocessors-form)
       (macroexpand)
       (nnext)
       (first)
       (second)
       (filterv (fn [[processor-type#]]
                  (some #(.startsWith (str processor-type#) (name %))
                        ~processor-types)))
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)))

(comment
 ;; quartet
 :person   [:record {:name :string
                     :age  :ubyte}]
 :quartet  [:tuple [:person :person :person :person]])

(comment
  (let [schema   :mikron.benchmark.schema/snapshot
        snapshot (-> data/data schema :a)]
    (seq (pack schema snapshot)))
  nil)
