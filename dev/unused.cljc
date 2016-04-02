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

  (defn schema-graph [schemas])
  (->> schemas
       (map (fn [[schema-name schema]]
              [schema-name (set (inner-schemas schemas))]))
       (into {}))

  (defn schema-order [graph])
  (loop [graph graph
         order []]
    (if (empty? graph)
      order
      (if-let [schema (->> graph (filter #(empty? (second %))) (ffirst))]
        (recur (->> (dissoc graph schema)
                    (map (fn [[k v]] [k (disj v schema)]))
                    (into {}))
               (conj order schema))
        nil)))


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

  (def java-snapshot (clj->java snapshot)))
