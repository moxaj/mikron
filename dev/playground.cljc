(ns playground
  (:require [seria.buffer :as buffer]
            [seria.config :as config]
            [criterium.core :as crit]
            [taoensso.nippy :as nippy]
            [cheshire.core :as json]
            [seria.prettify :as prettify]
            [seria.util :as util]
            [clojure.pprint :as pprint]
            [seria.codegen.gen :as gen])
  (:import [seria SeriaByteBuffer]))

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

{:schemas {}
 :diff {}
 :interp {:snapshot [[:time] [:bodies :all]]
          :body     [[:position] [:angle]]
          :coord    [[0] [1]]}
 :processors [:pack :diff :gen]
 :eq-ops {:float +}}

;(def seria-config (config/make-test-config :schemas box2d-schemas))

(comment
  (let [buffer (core/allocate-buffer 10000)]
    (core/with-params {:buffer buffer :config seria-config :schema :snapshot}
      (seq (core/pack (core/gen)))))

  (pprint/with-pprint-dispatch pprint/code-dispatch
    (pprint/pprint (->> seria-config prettify/prettify)))

  (let [config (config/make-test-config :schemas {:x [:list :int]})
        buffer (core/allocate-buffer 10000)]
    (core/with-params {:config config :schema :x :buffer buffer}
      (core/unpack (core/pack (core/gen)))))

  (let [config (config/make-test-config :schemas {:x :nil})]
    (pprint/with-pprint-dispatch pprint/code-dispatch
      (pprint/pprint (->> config :sources prettify/prettify)))))


(pprint/with-pprint-dispatch pprint/code-dispatch
  (->> {:schemas {:x :int}
        :processors [:pack :diff :gen :interp]}
       (config/make-config)
       (prettify/prettify)
       (pprint/pprint)))

;; generate into same file
;; capture namespace name, config name, config
