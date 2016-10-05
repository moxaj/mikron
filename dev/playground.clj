(ns playground
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.buffer :as b]
            [mikron.core :as m]
            [mikron.benchmark.data :refer [data]])
  (:import [mikron Mikron$Doubles]))

(defmacro c! [form]
  `(c/with-progress-reporting (c/quick-bench ~form)))

(defmacro p! [form]
 `(->> (quote ~form)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)))

(m/defschemas
  {:schemas  {:doubles  [:list :double]

              :coord    [:tuple [:float :float]]
              :fixture  [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
              :body     [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
              :snapshot [:record {:time   :long
                                  :bodies [:list :body]}]}})

(comment
  (let [snapshot (get-in data [:snapshot :a])]
    (c!
      (m/pack :snapshot snapshot))))
