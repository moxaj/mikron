(ns mikron.benchmark.data
  "Benchmark data."
  (:refer-clojure :exclude [doubles])
  (:require [mikron.benchmark.schema :as benchmark-schema])
  (:import [mikron Mikron$Doubles Mikron$Coord Mikron$FixtureUserData Mikron$Fixture
                   Mikron$BodyUserData Mikron$Body Mikron$Snapshot Mikron$Body$BodyType]))

(def data-dir "benchmark/clj/mikron/benchmark/data/")

(defn write-data [name value]
  (spit (str data-dir name)
        (pr-str value)))

(defn load-data [name]
  (->> name
       (str data-dir)
       (slurp)
       (read-string)))

(def data
  {::benchmark-schema/doubles  {:a (load-data "doubles-a.edn")}
   ::benchmark-schema/snapshot {:a (load-data "snapshot-a.edn")}})

(defmulti get-data* (fn [method schema data] [method schema]))

(defmethod get-data* [:protobuf ::benchmark-schema/doubles] [_ _ doubles]
  (let [doubles' (Mikron$Doubles/newBuilder)]
    (run! (fn [double]
            (.addDoubles doubles' double))
          doubles)
    (.build doubles')))

(defmethod get-data* [:protobuf ::benchmark-schema/snapshot] [_ _ {:keys [time bodies]}]
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
    (.build snapshot')))

(defmethod get-data* :default [_ _ data]
  data)

(def get-data
  (memoize
    (fn [method schema data-key]
      (get-data* method schema (get-in data [schema data-key])))))
