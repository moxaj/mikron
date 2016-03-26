(ns playground
  (:require [seria.buffer :as buffer]
            [seria.core :as core]
            [seria.config :as config]
            [seria.gen :as gen]
            [criterium.core :as crit]
            [taoensso.nippy :as nippy]
            [cheshire.core :as json]
            [seria.util :as util])
  (:import [seria SeriaByteBuffer
                  Seria Seria$Snapshot
                  Seria$Snapshot$Builder
                  Seria$Snapshot$Body
                  Seria$Snapshot$BodyUserData
                  Seria$Snapshot$Coord
                  Seria$Snapshot$Fixture
                  Seria$Snapshot$FixtureUserData
                  Seria$Snapshot$BodyType]))

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
(def snapshot
  (quote
    {:time -1413142939,
     :bodies ({:body-type :static,
               :angle 0.29315555,
               :user-data {:id -1373289877},
               :fixtures ({:coords ([0.38542026 0.8420807]
                                    [0.27763635 0.34505853]
                                    [0.024787704 0.07085419]
                                    [0.8249449 0.6371931]
                                    [0.18333276 0.24217781]),
                           :user-data {:color -1660563718}}
                          {:coords ([0.8088335 0.23636836]
                                    [0.688026 0.15539747]
                                    [0.27948704 0.920366]),
                           :user-data {:color -2048203535}}),
               :position [0.220892 0.5876004]}
              {:body-type :static,
               :angle 0.9739053,
               :user-data {:id 339558719},
               :fixtures ({:coords ([0.0140783265 0.011112004]
                                    [0.21523105 0.2028166]
                                    [0.4646652 0.20887117]
                                    [0.4907125 0.110494316]),
                           :user-data {:color 904160234}}
                          {:coords ([0.037456032 0.75865215]
                                    [0.43188444 0.5782671]
                                    [0.90387166 0.3385813]
                                    [0.22503924 0.5238595]
                                    [0.6965461 0.06480345]),
                           :user-data {:color 1328676591}}),
               :position [0.8799744 0.32544374]}
              {:body-type :kinetic,
               :angle 0.8361599,
               :user-data {:id 625269933},
               :fixtures ({:coords ([0.77910733 0.74620426]
                                    [0.28636888 0.22407727]
                                    [0.32931006 0.26871824]
                                    [0.4823569 0.5195808]
                                    [0.87180233 0.006773126]),
                           :user-data {:color 1259435551}}
                          {:coords ([0.6145922 0.37396628]
                                    [0.6693212 0.05990007]
                                    [0.7382007 0.8572182]
                                    [0.6389876 0.045283478]),
                           :user-data {:color 956001325}}
                          {:coords ([0.6273067 0.5623523]
                                    [0.3262636 0.7305917]
                                    [0.12310381 0.52127427]
                                    [0.25433856 0.534674]
                                    [0.36719972 0.7570934]),
                           :user-data {:color -1586136225}}),
               :position [0.44506198 0.14749344]}
              {:body-type :static,
               :angle 0.5254005,
               :user-data {:id 726629727},
               :fixtures ({:coords ([0.32527563 0.39093798]
                                    [0.0812917 0.36325842]),
                           :user-data {:color -677269935}}
                          {:coords ([0.31990048 0.65714496]
                                    [0.45052594 0.117640845]),
                           :user-data {:color 204464446}}),
               :position [0.41555458 0.9286049]})}))

(def seria-config (config/make-test-config :schemas box2d-schemas))

(defn clj->java [{:keys [time bodies]}]
  (let [snapshot-builder (Seria$Snapshot/newBuilder)]
    (run! (fn [{:keys [body-type angle position fixtures user-data]}]
            (let [body-builder (Seria$Snapshot$Body/newBuilder)
                  user-data    (-> (Seria$Snapshot$BodyUserData/newBuilder)
                                   (.setId (:id user-data))
                                   (.build))
                  position     (-> (Seria$Snapshot$Coord/newBuilder)
                                   (.setX (first position))
                                   (.setY (second position))
                                   (.build))]
              (-> body-builder
                  (.setPosition position)
                  (.setAngle angle)
                  (.setBodyType (case body-type
                                  :static Seria$Snapshot$BodyType/STATIC
                                  :kinetic Seria$Snapshot$BodyType/KINETIC
                                  :dynamic Seria$Snapshot$BodyType/DYNAMIC))
                  (.setUserData user-data))
              (run! (fn [{:keys [user-data coords]}]
                      (let [fixture-builder (Seria$Snapshot$Fixture/newBuilder)
                            user-data       (-> (Seria$Snapshot$FixtureUserData/newBuilder)
                                                (.setColor (:color user-data)))]
                        (run! (fn [[x y]]
                                (.addCoord fixture-builder (-> (Seria$Snapshot$Coord/newBuilder)
                                                               (.setX x)
                                                               (.setY y))))
                              coords)
                        (-> fixture-builder
                            (.setUserData user-data))
                        (.addFixture body-builder fixture-builder)))
                    fixtures)
              (.addBody snapshot-builder body-builder)))
          bodies)
    (.setTime snapshot-builder time)
    (.build snapshot-builder)))

(def java-snapshot (clj->java snapshot))

(let [buffer (core/allocate-buffer 10000)
      config (config/make-test-config :schemas {:x :any})
      data   snapshot]
  (->> (config/make-test-config :schemas box2d-schemas)
       :sources
       :snapshot
       :packer))
