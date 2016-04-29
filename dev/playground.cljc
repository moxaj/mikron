(ns playground
  (:require [criterium.core :as crit]
            [seria.processor :as processor]))


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

(let [{:keys [pack unpack undiff diff]}
      (processor/make-test-processors {:schemas {:x :int}})]
  (undiff :x 10
    (->> (diff :x 100 110)
         (pack :x)
         (unpack)
         :value)))

(processor/defprocessors [pack gen unpack]
  :schemas {:message [:list :byte]})

(unpack (pack :message [1 2 3]))

(processor/make-processors
  {:schemas {:x [:record {:a :int}]}})
