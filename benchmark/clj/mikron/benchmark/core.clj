(ns mikron.benchmark.core
  "Benchmarks."
  (:require [mikron.core :as mikron]
            [mikron.util.type :as util.type]
            [mikron.benchmark.data :as benchmark.data]
            [mikron.benchmark.schema :as benchmark.schema]
            [criterium.core :as crit]
            [taoensso.nippy :as nippy]
            [cheshire.core :as cheshire]
            [cognitect.transit :as transit]
            [gloss.core :as gloss]
            [gloss.io]
            [abracad.avro :as avro]
            [octet.core :as octet]
            [prc :as chart])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream ObjectInputStream ObjectOutputStream]
           [java.nio ByteBuffer]
           [com.google.protobuf AbstractMessageLite]
           [mikron Mikron$Doubles Mikron$Snapshot]))

;; Packers

(def ^ByteBuffer octet-buffer (octet/allocate 100000 {:type :direct :impl :nio}))

(defmulti pack (fn [method _ _] method))

(defmethod pack :edn ^bytes [_ _ data]
  (util.type/string->binary (util.type/any->string data)))

(defmethod pack :json ^bytes [_ _ data]
  (util.type/string->binary (cheshire/generate-string data)))

(defmethod pack :smile ^bytes [_ _ data]
  (cheshire/generate-smile data))

(defmethod pack :nippy ^bytes [_ _ data]
  (nippy/freeze data))

(defmethod pack :java ^bytes [_ _ data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (ObjectOutputStream. baos)]
      (.writeObject out data))
    (.toByteArray baos)))

(defmethod pack :transit ^bytes [_ _ data]
  (let [baos   (ByteArrayOutputStream.)
        writer (transit/writer baos :json)]
    (transit/write writer data)
    (.toByteArray baos)))

(defmethod pack :mikron ^bytes [_ schema data]
  (mikron/pack schema data))

(defmethod pack :avro ^bytes [_ schema data]
  (avro/binary-encoded schema data))

(defmethod pack :gloss ^bytes [_ schema data]
  (->> data
       (gloss.io/encode schema)
       (gloss.io/contiguous)
       (.array)))

(defmethod pack :octet ^bytes [_ schema data]
  (let [array (byte-array (octet/write! octet-buffer data schema))]
    (.position octet-buffer 0)
    (.get octet-buffer array)
    array))

(defmethod pack :protobuf ^bytes [_ _ ^AbstractMessageLite data]
  (.toByteArray data))

;; Unpackers

(defmulti unpack (fn [method _ _] method))

(defmethod unpack :edn [_ _ ^bytes binary]
  (util.type/string->any (util.type/binary->string binary)))

(defmethod unpack :json [_ _ ^bytes binary]
  (dorun (cheshire/parse-string (util.type/binary->string binary))))

(defmethod unpack :smile [_ _ ^bytes binary]
  (dorun (cheshire/parse-smile binary)))

(defmethod unpack :nippy [_ _ ^bytes binary]
  (nippy/thaw binary))

(defmethod unpack :java [_ _ ^bytes binary]
  (let [bais (ByteArrayInputStream. binary)]
    (with-open [in (ObjectInputStream. bais)]
      (.readObject in))))

(defmethod unpack :transit [_ schema ^bytes binary]
  (let [bais   (ByteArrayInputStream. binary)
        reader (transit/reader bais :json)]
     (transit/read reader))) ;; TODO

(defmethod unpack :mikron [_ _ ^bytes binary]
  (mikron/unpack binary))

(defmethod unpack :avro [_ schema ^bytes binary]
  (avro/decode schema binary))

(defmethod unpack :gloss [_ schema ^bytes binary]
  (->> binary
       (ByteBuffer/wrap)
       (gloss.io/decode schema)))

(defmethod unpack :octet [_ schema ^bytes binary]
  (-> binary
      (ByteBuffer/wrap)
      (octet/read schema)))

(defmethod unpack :protobuf [_ schema ^bytes binary]
  (case schema
    ::benchmark.schema/doubles  (Mikron$Doubles/parseFrom binary)
    ::benchmark.schema/snapshot (Mikron$Snapshot/parseFrom binary)))

;; Post process

(defmulti measure (fn [stat _ _ _] stat))

(defmethod measure :size [_ method schema value]
  (count (pack method schema value)))

(defmethod measure :pack-time [_ method schema value]
  (->> (crit/quick-benchmark (pack method schema value) {})
       :mean (first) (double) (* 1000 1000)))

(defmethod measure :unpack-time [_ method schema value]
  (let [binary (pack method schema value)]
    (->> (crit/quick-benchmark (unpack method schema binary) {})
         :mean (first) (double) (* 1000 1000))))

(defn benchmark [& {:keys [stats methods schema data]
                    :or   {methods (keys (methods pack))}}]
  [stats
   (->> (for [method methods]
          (let [data   (benchmark.data/get-data method schema data)
                schema (benchmark.schema/get-schema method schema)]
            [method
             (vec (for [stat stats]
                    (do (println (format "Measuring %s | %s ..."  (name method) (name stat)))
                        (measure stat method schema data))))]))
        (into {}))])

(def description
  {:size        "Size [bytes]"
   :pack-time   "Serialization time [μs]"
   :unpack-time "Deserialization time [μs]"})

(defn diagram [[stats data]]
  (chart/bar-chart "Benchmarks" data {:labels (map description stats)}))

(comment
  ;; Run benchmarks
  (diagram (benchmark :stats   [:pack-time]
                      :methods [:mikron]
                      :schema  ::benchmark.schema/snapshot
                      :data    :a))
  nil)

(defn -main []
  (println
    (benchmark :stats   [:pack-time]
               :methods [:mikron]
               :schema  ::benchmark.schema/snapshot
               :data    :a)))
