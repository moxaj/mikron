(ns seria.benchmark
  "Benchmarks comparing other methods."
  (:require [criterium.core :as crit]
            [seria.processor :as processor]
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

(processor/defprocessors [pack gen unpack]
  :schemas  {:body     [:record {:user-data [:record {:id :int}]
                                 :position  :coord
                                 :angle     :float
                                 :body-type [:enum [:dynamic :static :kinetic]]
                                 :fixtures  [:list :fixture]}]
             :fixture  [:record {:user-data [:record {:color :int}]
                                 :coords    [:list :coord]}]
             :coord    [:tuple [:float :float]]
             :snapshot [:record {:time   :long
                                 :bodies [:list :body]}]})

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

(defn run-benchmarks [& {:keys [stats]}]
  (measure-methods {:seria [#(pack :snapshot %) unpack]
                    :java  [java-serialize java-deserialize]
                    :kryo  [kryo-serialize kryo-deserialize]
                    :nippy [nippy/freeze nippy/thaw]
                    :json  [cheshire/generate-string cheshire/parse-string]
                    :smile [cheshire/generate-smile cheshire/parse-smile]}
                   (repeatedly 1000 #(gen :snapshot))
                   stats))

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
    (run-benchmarks :stats [:size :serialize-speed :roundtrip-speed]))
  nil)

(def results
  '[:proto-repl-code-execution-extension
    "proto-repl-charts"
    {:name "Benchmarks",
     :type "chart",
     :data {:axis {:x {:type "category",
                       :categories ("roundtrip-speed"
                                    "serialize-speed"
                                    "size",)}}
            :data {:type "bar",
                   :json {:nippy [35.51072945787636
                                  54.249653456539136
                                  14.57736740286537,]
                          :java [100 100 100],
                          :smile [27.583548945570033
                                  43.78076706942772
                                  23.128091751022712,]
                          :seria [8.502563595875728
                                  11.274565521893088
                                  7.390651649796993,]
                          :kryo [31.973661501951366
                                 46.315971057037345
                                 23.7524082061801,]
                          :json [56.87289864382199
                                 72.31563457982426
                                 43.72929004153248]}}}}])

;; 1
[8.502563595875728
 11.274565521893088
 7.390651649796993]

;; 2
[7.830408084944682
 10.667805742399354
 7.391915340005673]

;; 3
[8.317679630678501
 6.052328725344759
 7.366870683528338]
