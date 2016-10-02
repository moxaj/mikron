(ns mikron.benchmark.data
  "Benchmark data."
  (:refer-clojure :exclude [doubles])
  (:import [mikron Mikron$Doubles Mikron$Coord Mikron$FixtureUserData Mikron$Fixture
                   Mikron$BodyUserData Mikron$Body Mikron$Snapshot Mikron$Body$BodyType]))

(def data
  {:doubles  {:a (repeatedly 200 rand)}
   :snapshot {:a {:time   -8897634893184432128
                  :bodies [{:user-data {:id 772351170}
                            :position  [0.12869532 0.21690896]
                            :angle     0.53218615
                            :body-type :kinetic
                            :fixtures  [{:user-data {:color 950764680}
                                         :coords    [[0.7610403 0.4807302]
                                                     [0.4260479 0.93488866]
                                                     [0.18761584 0.62211967]]}
                                        {:user-data {:color -1087363628}
                                         :coords    [[0.32375553 0.95686257]
                                                     [0.98342615 0.64082116]
                                                     [0.9626239 0.4122986]
                                                     [0.44671413 0.6274868]]}
                                        {:user-data {:color -2145537603}
                                         :coords    [[0.22026068 0.62667584]
                                                     [0.07853425 0.37216997]
                                                     [0.38838577 0.110833935]
                                                     [0.0056155147 0.5670468]]}]}
                           {:user-data {:id -199729251}
                            :position  [0.77650875 0.9739637]
                            :angle     0.94069326
                            :body-type :kinetic
                            :fixtures  [{:user-data {:color -1851856872}
                                         :coords    [[0.15766707 0.92573905]
                                                     [0.28386086 0.50579554]
                                                     [0.122885324 0.065113924]]}
                                        {:user-data {:color 531012326}
                                         :coords    [[0.78031766 0.95833397]
                                                     [0.51050925 0.31640592]
                                                     [0.07478944 0.6374381]
                                                     [0.15393399 0.83672523]]}
                                        {:user-data {:color 389245078}
                                         :coords    [[0.46409312 0.8230157]
                                                     [0.39341003 0.62518275]
                                                     [0.8439251 0.04126302]
                                                     [0.05799583 0.67760795]]}
                                        {:user-data {:color 1170550463}
                                         :coords    [[0.9298557 0.025075234]
                                                     [0.899514 0.2593797]
                                                     [0.84398496 0.46197954]
                                                     [0.23048908 0.3382324]]}
                                        {:user-data {:color -1726365603}
                                         :coords    [[0.53016 0.77797544]
                                                     [0.89153373 0.32682067]
                                                     [0.56338286 0.13163084]
                                                     [0.225837 0.43675026]
                                                     [0.80354357 0.18686455]]}]}
                           {:user-data {:id 1927051941}
                            :position  [0.7361625 0.14031501]
                            :angle     0.19493714
                            :body-type :dynamic
                            :fixtures  [{:user-data {:color 685201494}
                                         :coords    [[0.19347441 0.6536752]
                                                     [0.24858955 0.8323852]
                                                     [0.47723803 0.22835433]
                                                     [0.7884576 0.39233938]]}
                                        {:user-data {:color -2100930709}
                                         :coords    [[0.65276194 0.66007906]
                                                     [0.020007953 0.3181094]
                                                     [0.34894365 0.50230277]
                                                     [0.60575014 0.7668206]
                                                     [0.8571492 0.85658014]]}
                                        {:user-data {:color 165314502}
                                         :coords    [[0.51067173 0.5443819]
                                                     [0.8838357 0.6847749]
                                                     [0.77697074 0.12580936]
                                                     [0.11778578 0.7067983]
                                                     [0.46749872 0.5256676]]}
                                        {:user-data {:color -176740328}
                                         :coords    [[0.8313221 0.9700986]
                                                     [0.80449957 0.6181498]
                                                     [0.32052988 0.23880848]
                                                     [0.82642907 0.36838138]
                                                     [0.5546832 0.35999528]]}
                                        {:user-data {:color 1089747552}
                                         :coords    [[0.83952 0.9011726]
                                                     [0.15706488 0.6534034]
                                                     [0.004541657 0.41317675]
                                                     [0.6872476 0.4615006]]}]}
                           {:user-data {:id 699343903}
                            :position  [0.9589766 0.622547]
                            :angle     0.84386337
                            :body-type :static
                            :fixtures  [{:user-data {:color -1515098833}
                                         :coords    [[0.25604144 0.19003278]
                                                     [0.5448535 0.50277406]
                                                     [0.022034843 0.0026561152]
                                                     [0.02100538 0.25088885]]}
                                        {:user-data {:color 1513999336}
                                         :coords    [[0.71929866 0.11233374]
                                                     [0.43279323 0.785766]
                                                     [0.79064494 0.9632471]
                                                     [0.9625 0.6288017]
                                                     [0.4098191 0.7107847]]}
                                        {:user-data {:color -693337825}
                                         :coords    [[0.97909206 0.6511967]
                                                     [0.32891005 0.6774595]
                                                     [0.13106862 0.33364552]]}]}]}}})

(defmulti get-data* (fn [method schema data] [method schema]))

(defmethod get-data* [:protobuf :doubles] [_ _ doubles]
  (let [doubles' (Mikron$Doubles/newBuilder)]
    (run! (fn [double]
            (.addDoubles doubles' double))
          doubles)
    (.build doubles')))

(defmethod get-data* [:protobuf :snapshot] [_ _ {:keys [time bodies]}]
  (let [snapshot' (Mikron$Snapshot/newBuilder)]
    (.setTime snapshot' time)
    (run! (fn [{:keys [user-data position angle body-type fixtures]}]
            (let [body' (Mikron$Body/newBuilder)]
              (.setUserData body' (-> (Mikron$BodyUserData/newBuilder)
                                      (.setId (:id user-data))))
              (.setPosition body' (-> (Mikron$Coord/newBuilder)
                                      (.setX (first position))
                                      (.setY (second position))))
              (.setAngle body' angle)
              (.setBodyType body' (case body-type
                                     :static  Mikron$Body$BodyType/STATIC
                                     :dynamic Mikron$Body$BodyType/DYNAMIC
                                     :kinetic Mikron$Body$BodyType/KINETIC))
              (run! (fn [{:keys [user-data coords]}]
                      (let [fixture' (Mikron$Fixture/newBuilder)]
                        (.setUserData fixture' (-> (Mikron$FixtureUserData/newBuilder)
                                                   (.setColor (:color user-data))))
                        (run! (fn [[x y]]
                                (.addCoords fixture' (-> (Mikron$Coord/newBuilder)
                                                         (.setX x)
                                                         (.setY y))))
                              coords)
                        (.addFixtures body' fixture')))
                    fixtures)
              (.addBodies snapshot' body')))
          bodies)
    (.build snapshot')))

(defmethod get-data* :default [_ _ data]
  data)

(def get-data
  (memoize
    (fn [method schema data]
      (get-data* method schema data))))
