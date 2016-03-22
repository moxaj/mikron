(ns playground
  (:require [seria.buffer :as buffer]
            [seria.core :as core]
            [seria.config :as config]
            [seria.gen :as gen]
            [criterium.core :as crit]
            [no.disassemble :as dis]
            [taoensso.nippy :as nippy])
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
   :snapshot [:record {:time   :int
                       :bodies [:list :body]}]})

(def seria-config (config/make-test-config :schemas box2d-schemas))

(let [buffer (core/allocate-buffer 10000 10000)
      data   (first (gen/sample 1 :snapshot seria-config))]
  (core/with-params {:schema :snapshot :config seria-config :buffer buffer}
    (dotimes [_ 100]
      (core/unpack (core/pack data)))))
