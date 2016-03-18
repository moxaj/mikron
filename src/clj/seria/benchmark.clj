(ns seria.benchmark
  (:require [criterium.core :refer [with-progress-reporting quick-bench
                                    bench benchmark quick-benchmark report-result]]
            [seria.core :refer [pack unpack with-params make-buffer]]
            [seria.config :refer [make-config make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]]
            [prc])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream
                    ObjectInputStream ObjectOutputStream]))

(defn java-serialize [data]
  (let [baos (ByteArrayOutputStream.)
        oos  (ObjectOutputStream. baos)]
    (.writeObject oos data)
    (.close oos)
    (.toByteArray baos)))

(defn java-deserialize [^bytes raw]
  (let [bais (ByteArrayInputStream. raw)
        ois  (ObjectInputStream. bais)
        data (.readObject ois)]
    (.close ois)
    data))

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

(def seria-config (make-test-config :schemas box2d-schemas))

(defmulti measure-stat (fn [stat & _] stat))

(defmethod measure-stat :size [_ [serialize] data]
  (->> data
       (map (comp count serialize))
       (apply +)))

(defmethod measure-stat :serialize-speed [_ [serialize] data]
  (->> (quick-benchmark (run! serialize data) {})
       :mean
       (first)
       (* 1000)))

(defmethod measure-stat :roundtrip-speed [_ [serialize deserialize] data]
  (->> (quick-benchmark (run! (comp deserialize serialize) data) {})
       :mean
       (first)
       (* 1000)))

(defn measure-methods [stats methods data]
  (into {}
        (for [stat stats
              [method-name fns] methods]
          [[stat method-name] (measure-stat stat fns data)])))

(defn run-benchmarks [schema config buffer]
  (with-params {:config config :schema schema :buffer buffer}
    (measure-methods [:size :roundtrip-speed]
                     {:seria [pack unpack]
                      :java  [java-serialize java-deserialize]
                      :nippy [freeze thaw]}
                     (sample 1000 schema config))))

(defn visualize-results [results]
  (prc/bar-chart "Benchmarks"
    (->> results
         (map (fn [[stat measures]]
                [stat ((juxt :seria :java :nippy) measures)]))
         (into {}))
    {:labels ["seria" "java" "nippy"]}))
