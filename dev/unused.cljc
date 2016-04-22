(ns unused)

(comment
  (defn inner-schemas [schema]
    (cond
      (and (keyword? schema)
           (not (built-in? schema)))
      [schema]

      (vector? schema)
      (condp = (first schema)
        :list     (inner-schemas (get schema 2))
        :vector   (inner-schemas (get schema 2))
        :set      (inner-schemas (get schema 2))
        :optional (inner-schemas (get schema 2))
        :map      (concat (inner-schemas (get schema 2))
                          (inner-schemas (get schema 3)))
        :tuple    (mapcat inner-schemas (get schema 2))
        :record   (mapcat inner-schemas (vals (get schema 2)))
        :multi    (mapcat inner-schemas (vals (get schema 3))))

      :else
      []))




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

  (defn random-schema
    ([]
     (random-schema 3))
    ([depth]
     (if (zero? depth)
       (rand-nth [:long :double :varint :char :boolean :string :keyword :symbol])
       (let [[schema-1 schema-2] (repeatedly 2 #(random-schema (dec depth)))]
         (case (rand-int 4)
           0 [:list {} schema-1]
           1 [:set {:sorted-by :none} schema-1]
           2 [:vector {} schema-1]
           3 [:map {:sorted-by :none} schema-1 schema-2]))))))
