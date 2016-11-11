(ns mikron.benchmark.data
  "Benchmark data."
  (:require [mikron.core :as mikron]
            [mikron.benchmark.schema :as benchmark.schema])
  #?(:clj (:import [mikron Mikron$Doubles Mikron$Coord Mikron$FixtureUserData Mikron$Fixture
                           Mikron$BodyUserData Mikron$Body Mikron$Snapshot Mikron$Body$BodyType
                           Mikron$Person Mikron$Quartet])))

(def data
  {::benchmark.schema/doubles   (vec (repeatedly 200 #(double (rand))))
   ::benchmark.schema/quartet   (mikron/gen benchmark.schema/quartet)
   ::benchmark.schema/snapshot  (mikron/gen benchmark.schema/snapshot)
   ::benchmark.schema/snapshot2 (mikron/gen benchmark.schema/snapshot2)})

(defmulti get-data* (fn [method schema data] [method schema]))

#?(:clj ;; protobuf doubles
   (defmethod get-data* [:protobuf ::benchmark.schema/doubles] [_ _ doubles]
     (let [doubles' (Mikron$Doubles/newBuilder)]
       (run! (fn [double]
               (.addDoubles doubles' double))
             doubles)
       (.build doubles'))))

#?(:clj ;; protobuf quartet
   (defmethod get-data* [:protobuf ::benchmark.schema/quartet] [_ _ quartet]
     (let [f (fn [person]
               (-> (Mikron$Person/newBuilder)
                   (.setFirstName (:first-name person))
                   (.setLastName  (:last-name person))))]
       (-> (Mikron$Quartet/newBuilder)
           (.setP1 (f (nth quartet 0)))
           (.setP2 (f (nth quartet 1)))
           (.setP3 (f (nth quartet 2)))
           (.setP4 (f (nth quartet 3)))
           (.build)))))

#?(:clj ;; protobuf snapshot
   (defmethod get-data* [:protobuf ::benchmark.schema/snapshot] [_ _ {:keys [time bodies]}]
     (let [snapshot' (Mikron$Snapshot/newBuilder)]
       (.setTime snapshot' time)
       (run! (fn [{:keys [user-data position angle body-type fixtures]}]
               (let [body' (Mikron$Body/newBuilder)]
                 (.setUserData body' (-> (Mikron$BodyUserData/newBuilder)
                                         (.setId (:id user-data))))
                 (.setPosition body' (-> (Mikron$Coord/newBuilder)
                                         (.setX (:x position))
                                         (.setY (:y position))))
                 (.setAngle body' angle)
                 (.setBodyType body' (case body-type
                                        :static  Mikron$Body$BodyType/STATIC
                                        :dynamic Mikron$Body$BodyType/DYNAMIC
                                        :kinetic Mikron$Body$BodyType/KINETIC))
                 (run! (fn [{:keys [user-data coords]}]
                         (let [fixture' (Mikron$Fixture/newBuilder)]
                           (.setUserData fixture' (-> (Mikron$FixtureUserData/newBuilder)
                                                      (.setColor (:color user-data))))
                           (run! (fn [{:keys [x y]}]
                                   (.addCoords fixture' (-> (Mikron$Coord/newBuilder)
                                                            (.setX x)
                                                            (.setY y))))
                                 coords)
                           (.addFixtures body' fixture')))
                       fixtures)
                 (.addBodies snapshot' body')))
             bodies)
       (.build snapshot'))))

#?(:clj ;; protobuf snapshot2
   (defmethod get-data* [:protobuf ::benchmark.schema/snapshot2] [method schema data]
     (get-data* :protobuf ::benchmark.schema/snapshot data)))

(defmethod get-data* :default [_ _ data]
  data)

(def get-data
  (memoize
    (fn [method schema]
      (get-data* method schema (data schema)))))
