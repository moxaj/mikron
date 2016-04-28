(ns unused)

(comment
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
      (.build snapshot-builder))))
