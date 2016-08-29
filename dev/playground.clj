(ns playground
  (:require [clojure.pprint :as p]
            [criterium.core :as c]
            [mikron.buffer :as b]
            [mikron.core :as m]))

(defmacro c! [form]
  `(c/with-progress-reporting (c/quick-bench ~form)))

(defmacro p! [form]
 `(->> (quote ~form)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)))

(m/defprocessors {:pack b2d-pack :unpack b2d-unpack :gen b2d-gen}
  {:schemas   {:body    [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
               :fixture [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
               :coord   [:tuple [:float :float]]
               :x       [:record {:time   :long
                                  :bodies [:list :body]}]}})

(comment
  (p! (m/defprocessors {} {:schemas     {:x [:multi number? {true [:tuple [:int :int]] false :string}]}
                           :diff-routes {:x {true true}}}))

  (def ^:dynamic *x* (long 20))

  nil)
