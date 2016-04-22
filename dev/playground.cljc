(ns playground
  (:require [seria.config :as config]))

(def box2d-schemas
  {:body     [:s/record {:user-data [:s/record {:id :s/int}]
                         :position  :coord
                         :angle     :s/float
                         :body-type [:s/enum [:dynamic :static :kinetic]]
                         :fixtures  [:s/list :fixture]}]
   :fixture  [:s/record {:user-data [:s/record {:color :s/int}]
                         :coords    [:s/list :coord]}]
   :coord    [:s/tuple [:s/float :s/float]]
   :snapshot [:s/record {:time   :s/long
                         :bodies [:s/list :body]}]})

{:schemas {}
 :diff {}
 :interp {:snapshot [[:time] [:bodies :all]]
          :body     [[:position] [:angle]]
          :coord    [[0] [1]]}
 :processors [:pack :diff :gen]
 :eq-ops {:float +}}


(let [c (config/process-config
          {:schemas {:x [:list :y]
                     :y :int}
           :processors [:pack]})]
  c)

(config/eval-output *1)
