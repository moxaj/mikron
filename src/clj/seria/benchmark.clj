(ns seria.benchmark
  "Benchmarks comparing other methods."
  (:require [criterium.core :as crit]
            [seria.core :as core]
            [seria.config :as config]
            [taoensso.nippy :as nippy]
            [clj-kryo.core :as kryo]
            [cheshire.core :as cheshire]
            [prc])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream
                    ObjectInputStream ObjectOutputStream]))

(defn java-serialize [data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (ObjectOutputStream. baos)]
      (.writeObject out data)
      (.toByteArray baos))))

(defn java-deserialize [^bytes raw]
  (let [bais (ByteArrayInputStream. raw)]
    (with-open [in (ObjectInputStream. bais)]
      (.readObject in))))

(defn kryo-serialize [data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (kryo/make-output baos)]
      (kryo/write-object out data))
    (.toByteArray baos)))

(defn kryo-deserialize [^bytes raw]
  (let [bais (ByteArrayInputStream. raw)]
    (with-open [in (kryo/make-input bais)]
      (kryo/read-object in))))

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

(def seria-config (config/make-test-config :schemas box2d-schemas))

(defmulti measure-stat (fn [stat & _] stat))

(defmethod measure-stat :size [_ [serialize] data]
  (->> data
       (map (comp count serialize))
       (apply +)))

(defmethod measure-stat :serialize-speed [_ [serialize] data]
  (->> (crit/quick-benchmark (run! serialize data) {})
       :mean
       (first)
       (* 1000)))

(defmethod measure-stat :roundtrip-speed [_ [serialize deserialize] data]
  (->> (crit/quick-benchmark (run! (comp deserialize serialize) data) {})
       :mean
       (first)
       (* 1000)))

(defn measure-methods [methods data stats]
  (->> (for [stat stats]
         [stat (->> (for [[method-name fns] methods]
                      (do (println "Measuring " method-name stat)
                          [method-name (measure-stat stat fns data)]))
                    (into {}))])
       (into {})))

(defn run-benchmarks [& {:keys [schema config buffer stats]}]
  (core/with-params {:config config :schema schema :buffer buffer}
    (measure-methods {:seria [core/pack core/unpack]
                      :java  [java-serialize java-deserialize]
                      :kryo  [kryo-serialize kryo-deserialize]
                      :nippy [nippy/freeze nippy/thaw]
                      :json  [cheshire/generate-string cheshire/parse-string]
                      :smile [cheshire/generate-smile cheshire/parse-smile]}
                     (repeatedly 1000 #(core/gen :schema schema :config config))
                     stats)))

(defn visualize-results [results]
  (let [stats      (-> results (keys) (sort))
        chart-data (->> results
                        (mapcat (fn [[stat stat-results]]
                                  (let [max-stat-result (->> stat-results (map second) (apply max))]
                                    (map (fn [[method stat-result]]
                                           {method {stat (/ stat-result max-stat-result 0.01)}})
                                         stat-results))))
                        (apply merge-with merge)
                        (map (fn [[method results]]
                               [method ((apply juxt stats) results)]))
                        (into {}))]
    (prc/bar-chart "Benchmarks" chart-data {:labels (map name stats)})))

(comment
  (visualize-results
    (run-benchmarks :schema :snapshot
                    :config seria-config
                    :buffer (core/allocate-buffer 10000)
                    :stats  [:size :serialize-speed :roundtrip-speed]))
  nil)
