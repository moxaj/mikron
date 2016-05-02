(ns playground
  (:require [criterium.core :as crit]
            [seria.core :as seria]))

(def box2d-schemas
  {:body     [:record {:user-data [:record {:id :int}]
                       :position  :coord
                       :angle     :float
                       :body-type [:enum [:dynamic :static :kinetic]]
                       :fixtures  [:list :fixture]}]
   :fixture  [:record {:user-data [:record {:color :int}]
                       :coords    [:list :coord]}]
   :coord    [:tuple [:float :float]]
   :snapshot [:record {:time   :long
                       :bodies [:list :body]}]})

(def box2d-interp-routes
  {:snapshot {:time   true
              :bodies {:all true}}
   :body     {:position true
              :angle    true}
   :coord    {0 true
              1 true}})

(def box2d-diff-routes
  {:snapshot {:time   true
              :bodies {:all true}}
   :body     {:user-data {:id true}
              :body-type true
              :fixtures  {:all true}}
   :fixture  {:user-data {:color true}
              :coords    true}})

(seria/defprocessors [pack unpack gen]
   {:schemas {:x    :byte
              :meta [:record {:a :int :b :string}]}})

(let [x    10
      meta (gen :meta)]
  (unpack (pack :x x)))


(clojure.walk/macroexpand-all
  '(seria.processor/make-processors {:schemas {:x :int}}))

(macroexpand '(cond-> {} u (assoc v) x (assoc y)))

(let [{:keys [validate gen]}
      (seria.core/make-test-processors
       {:schemas {:body     [:record {:user-data [:record {:id :int}]
                                      :position  :coord
                                      :angle     :float
                                      :body-type [:enum [:dynamic :static :kinetic]]
                                      :fixtures  [:list :fixture]}]
                  :fixture  [:record {:user-data [:record {:color :int}]
                                      :coords    [:list :coord]}]
                  :coord    [:tuple [:float :float]]
                  :snapshot [:record {:time   :long
                                      :bodies [:list :body]}]
                  :x        :snapshot}})]
  (let [value (gen :x)]))
    
