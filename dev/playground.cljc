(ns playground
  (:require [seria.config :as config]
            [criterium.core :as crit]
            [seria.prettify :as prettify]))

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
  {:snapshot {:time   :!
              :bodies {:all :!}}
   :body     {:position :!
              :angle    :!}
   :coord    {0 :!
              1 :!}})

(let [config   (config/process-config {:schemas    box2d-schemas
                                       :interp     box2d-interp-routes
                                       :processors [:diff :gen]})
      _        (config/eval-output config)
      diff-x   @(resolve 'diff-snapshot)
      gen-x    @(resolve 'gen-snapshot)
      a        (gen-x)
      b        (gen-x)])
