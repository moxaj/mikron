(ns playground
  (:require [seria.buffer :as buffer]
            [seria.config :as config]
            [criterium.core :as crit]
            [seria.output :as output]
            [taoensso.nippy :as nippy]))

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

(comment
  (as-> {:schemas    {:x [:s/set {:sorted-by 'my/pack} :s/int]}
         :processors [:pack]} $
        (config/process-config $)
        (output/format-output $ :pretty-print? true :ns-name 'my-ns :config '[a b c])
        (spit "e:\\workspace\\clojure\\.dump\\config.clj" $))
  :S)
