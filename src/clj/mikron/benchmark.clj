(ns mikron.benchmark
  "Benchmarks comparing other libraries."
  (:require [criterium.core :as crit]
            [mikron.core :as mikron]
            [taoensso.nippy :as nippy]
            [clj-kryo.core :as kryo]
            [cheshire.core :as cheshire]
            [cognitect.transit :as transit]
            [gloss.core]
            [gloss.io]
            [abracad.avro :as avro]
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

;; seria

(mikron/defprocessors [pack gen unpack]
  {:schemas  {:body     [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
              :fixture  [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
              :coord    [:tuple [:float :float]]
              :snapshot [:record {:time   :long
                                  :bodies [:list :body]}]
              :doubles  [:list :double]}})

;; avro

(def avro-doubles-schema)

(def avro-snapshot-schema
  (let [coord    {:name "coord" :type "record" :namespace "mikron"
                  :fields [{:name "x" :type "float"}
                           {:name "y" :type "float"}]
                  :abracad.reader "vector"}
        fixture  {:name "fixture" :type "record" :namespace "mikron"
                  :fields [{:name "user-data"
                            :type {:name "user-data" :type "record"
                                   :fields [{:name "color" :type "int"}]}}
                           {:name "coords" :type {:type "array"
                                                  :items "mikron.coord"}}]}
        body     {:name "body" :type "record" :namespace "mikron"
                  :fields [{:name "angle" :type "float"}
                           {:name "position" :type "mikron.coord"}
                           {:name "body-type"
                            :type {:type "enum"
                                   :name "body-type"
                                   :symbols ["static" "kinetic" "dynamic"]}}
                           {:name "fixtures" :type {:type "array"
                                                    :items "mikron.fixture"}}
                           {:name "user-data"
                            :type {:name "user-data2" :type "record"
                                   :fields [{:name "id" :type "int"}]}}]}
        snapshot {:name "snapshot" :type "record" :namespace "mikron"
                  :fields [{:name "time" :type "long"}
                           {:name "bodies" :type {:type "array"
                                                  :items "mikron.body"}}]}]
    (avro/parse-schema coord fixture body snapshot)))

(def avro-doubles-schema
  (avro/parse-schema {:type "array" :items "double"}))

(defn avro-serialize [schema data]
  (avro/binary-encoded schema data))

(defn avro-deserialize [schema ^bytes raw]
  (avro/decode schema raw))

;; mikron

(defn mikron-serialize [data]
  (pack :snapshot data))

(defn mikron-deserialize [^bytes raw]
  (unpack raw))

;; gloss

(def gloss-snapshot-codec
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

(def gloss-doubles-codec
  (gloss.core/compile-frame (gloss.core/repeated :float64)))

(defn gloss-serialize [codec data]
  (->> data
       (gloss.io/encode codec)
       (gloss.io/contiguous)
       (.array)))

(defn gloss-deserialize [codec ^bytes raw]
  (->> raw
       (ByteBuffer/wrap)
       (gloss.io/decode codec)))

;; octet

(def octet-buffer (octet/allocate 100000 {:type :direct :impl :nio}))

(def octet-snapshot-spec
  (let [coord    (octet/spec octet/float octet/float)
        fixture  (octet/spec :user-data (octet/spec :color octet/int32)
                             :coords    (octet/vector* coord))
        body     (octet/spec :angle     octet/float
                             :position  coord
                             :user-data (octet/spec :id octet/int32)
                             ; :body-type
                             :fixtures  (octet/vector* fixture))
        snapshot (octet/spec :time   octet/int64
                             :bodies (octet/vector* body))]
    snapshot))

(def octet-doubles-spec
  (octet/vector* octet/double))

(defn octet-serialize [spec data]
  (let [array (byte-array (octet/write! octet-buffer data spec))]
    (.position octet-buffer 0)
    (.get octet-buffer array)
    array))

(defn octet-deserialize [spec data]
  (-> data
      (ByteBuffer/wrap)
      (octet/read spec)))

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

(defn benchmark [& {:keys [methods stats data]}]
  (->> (for [stat stats]
         [stat (->> (for [[method-name fns] methods]
                      (do (println (format "Measuring %s | %s" stat method-name))
                          [method-name (measure-stat stat fns data)]))
                    (into {}))])
       (into {})))

(defn diagram [results]
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

(defn methods-for [schema]
  (let [gloss-codec (case schema
                      :snapshot gloss-snapshot-codec
                      :doubles  gloss-doubles-codec)
        octet-spec  (case schema
                      :snapshot octet-snapshot-spec
                      :doubles  octet-doubles-spec)
        avro-schema (case schema
                      :snapshot avro-snapshot-schema
                      :doubles  avro-doubles-schema)]
    {:mikron  [#(pack schema %) unpack]
     :gloss   [#(gloss-serialize gloss-codec %) #(gloss-deserialize gloss-codec %)]
     :octet   [#(octet-serialize octet-spec %) #(octet-deserialize octet-spec %)]
     :avro    [#(avro-serialize avro-schema %) #(avro-deserialize avro-schema %)]
     :smile   [cheshire/generate-smile cheshire/parse-smile]
     :kryo    [kryo-serialize kryo-deserialize]
     :nippy   [nippy/freeze nippy/thaw]
     :java    [java-serialize java-deserialize]
     :json    [cheshire/generate-string cheshire/parse-string]
     :transit [transit-serialize transit-deserialize]
     :pr-str  [pr-str read-string]}))

(comment
  (diagram
    (benchmark :methods (select-keys (methods-for :doubles)
                                     [:mikron :smile])
               :stats   [:roundtrip-speed]
               :data    [(repeatedly 1000 rand)]))

  (let [{:keys [pack]} (mikron/make-processors {:schemas {:x [:list :double]}})
        data           (repeatedly 1000 rand)]
    (crit/with-progress-reporting
      (crit/quick-bench
        (pack :x data))))

  (let [buffer (java.nio.ByteBuffer/allocateDirect 10000)]
    (crit/with-progress-reporting
      (crit/quick-bench
        (do (.position buffer 0)
            (dotimes [i 1000]
              (.putDouble buffer i)))))))

;; 34 ns for a double
;; 1000 -> 136 us vs 34 us
