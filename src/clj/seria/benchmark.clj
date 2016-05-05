(ns seria.benchmark
  "Benchmarks comparing other methods."
  (:require [criterium.core :as crit]
            [seria.core :as seria]
            [taoensso.nippy :as nippy]
            [clj-kryo.core :as kryo]
            [cheshire.core :as cheshire]
            [cognitect.transit :as transit]
            [gloss.core]
            [gloss.io]
            [abracad.avro :as avro]
            [abracad.avro.edn :as aedn]
            [octet.core :as octet]
            [prc])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream
                    ObjectInputStream ObjectOutputStream]
           [java.nio ByteBuffer]))

;; java

(defn java-serialize [data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (ObjectOutputStream. baos)]
      (.writeObject out data)
      (.toByteArray baos))))

(defn java-deserialize [^bytes raw]
  (let [bais (ByteArrayInputStream. raw)]
    (with-open [in (ObjectInputStream. bais)]
      (.readObject in))))

;; kryo

(defn kryo-serialize [data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (kryo/make-output baos)]
      (kryo/write-object out data))
    (.toByteArray baos)))

(defn kryo-deserialize [^bytes raw]
  (let [bais (ByteArrayInputStream. raw)]
    (with-open [in (kryo/make-input bais)]
      (kryo/read-object in))))

;; transit

(defn transit-serialize [data]
  (let [baos   (ByteArrayOutputStream.)
        writer (transit/writer baos :json)]
    (transit/write writer data)
    (.toByteArray baos)))

(defn transit-deserialize [^bytes raw]
  (let [bais   (ByteArrayInputStream. raw)
        reader (transit/reader bais :json)]
    (transit/read reader)))

;; avro
(let [schema (avro/parse-schema
              {:name "example", :type "record",
               :fields [{:name "left", :type "string"}
                        {:name "right", :type "long"}]
               :abracad.reader "vector"})])

(def avro-schema
  (let [coord   {:name "coord" :type "record" :namespace "seria"
                 :fields [{:name "x" :type "float"}
                          {:name "y" :type "float"}]
                 :abracad.reader "vector"}
        fixture {:name "fixture" :type "record"
                 :fields [{:name "user-data"
                           :type {:name "user-data" :type "record"
                                  :fields [{:name "color" :type "int"}]}}
                          {:name "coords"
                           :type {:type "array"
                                  :items "seria.coord"}}]}]
    (avro/parse-schema coord)
    (avro/parse-schema fixture)))

(avro/parse-schema {:name "x" :type "record"
                    :fields [{:name "y" :type {:type "record"
                                               :name "z"
                                               :fields []}}]})


(defn avro-serialize [data]
  (avro/binary-encoded avro-schema data))

(defn avro-deserialize [^bytes raw]
  (avro/decode avro-schema raw))

;; seria

(seria/defprocessors [pack gen unpack]
  {:schemas  {:snapshot [:record {:time   :long}
                         :bodies [:list :body]]
              :body     [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
              :fixture  [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
              :coord    [:tuple [:float :float]]}})

(defn seria-serialize [data]
  (pack :snapshot data))

(defn seria-deserialize [^bytes raw]
  (unpack raw))

;; gloss

(def gloss-codec
  (let [coord    [:float32 :float32]
        fixture  {:user-data {:color :int32}
                  :coords    (gloss.core/repeated coord)}
        body     {:angle     :float32
                  :position  coord
                  :user-data {:id :int32}
                  :body-type (gloss.core/enum :byte :dynamic :static :kinetic)
                  :fixtures  (gloss.core/repeated fixture)}
        snapshot {:time   :int64
                  :bodies (gloss.core/repeated body)}]
    (gloss.core/compile-frame snapshot)))

(defn gloss-serialize [data]
  (->> data
       (gloss.io/encode gloss-codec)
       (gloss.io/contiguous)
       (.array)))

(defn gloss-deserialize [^bytes raw]
  (->> raw
       (ByteBuffer/wrap)
       (gloss.io/decode gloss-codec)))

;; octet

(def octet-buffer (octet/allocate 100000 {:type :direct :impl :nio}))

(def octet-spec
  (let [coord    (octet/spec octet/float octet/float)
        fixture  (octet/spec :user-data (octet/spec :color octet/int32)
                             :coords    (octet/vector* coord))
        body     (octet/spec :angle     octet/float
                             :position  coord
                             :user-data (octet/spec :id octet/int32)
                             ;; :body-type
                             ;; - octet does not support keywords or enums
                             :fixtures  (octet/vector* fixture))
        snapshot (octet/spec :time   octet/int64
                             :bodies (octet/vector* body))]
    snapshot))

(defn octet-serialize [data]
  (let [array (byte-array (octet/write! octet-buffer data octet-spec))]
    (.position octet-buffer 0)
    (.get octet-buffer array)
    array))

(defn octet-deserialize [data]
  (-> data
      (ByteBuffer/wrap)
      (octet/read octet-spec)))

;; benchmarks

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

(defn run-benchmarks [& {:keys [methods stats data]}]
  (->> (for [stat stats]
         [stat (->> (for [[method-name fns] methods]
                      (do (println "Measuring " method-name stat)
                          [method-name (measure-stat stat fns data)]))
                    (into {}))])
       (into {})))

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
    (run-benchmarks :methods {:seria   [seria-serialize seria-deserialize]
                              :avro    [avro-serialize avro-deserialize]}
                              ;:gloss   [gloss-serialize gloss-deserialize]
                              ;:octet   [octet-serialize octet-deserialize]
                              ;:smile   [cheshire/generate-smile cheshire/parse-smile]
                              ;:kryo    [kryo-serialize kryo-deserialize]
                              ;:nippy   [nippy/freeze nippy/thaw]
                              ;:java    [java-serialize java-deserialize]
                              ;:json    [cheshire/generate-string cheshire/parse-string]
                              ;:transit [transit-serialize transit-deserialize]}
                    :stats   [:size
                              :serialize-speed
                              :roundtrip-speed]
                    :data    (repeatedly 10 #(gen :snapshot))))
  nil)

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
 6.052328725344759 ;; ???
 7.366870683528338]

;; 4
[8.324240702158392
 10.035389753854808
 7.353889282552303]
