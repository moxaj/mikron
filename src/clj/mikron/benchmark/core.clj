(ns mikron.benchmark.core
  "Benchmarks."
  (:require [mikron.benchmark.data :as benchmark-data]
            [mikron.benchmark.schema :as benchmark-schema]
            [mikron.core :as mikron]
            [criterium.core :as crit]
            [mikron.common :as common]
            [taoensso.nippy :as nippy]
            [clj-kryo.core :as kryo]
            [cheshire.core :as cheshire]
            [cognitect.transit :as transit]
            [gloss.core :as gloss]
            [gloss.io :as gloss-io]
            [abracad.avro :as avro]
            [octet.core :as octet]
            [prc :as chart]
            [clojure.walk :as walk])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream ObjectInputStream ObjectOutputStream]
           [java.nio ByteBuffer]
           [com.esotericsoftware.kryo.io Input Output]
           [com.google.protobuf AbstractMessageLite]
           [mikron Mikron$Doubles Mikron$Snapshot]))

;; Util

(defn rec-realized? [form]
  (and (or (not (instance? clojure.lang.IPending form))
           (realized? form))
       (or (not (seqable? form))
           (every? rec-realized? form))))

(defn rec-realize [form]
  (walk/postwalk identity form))

;; Packers

(def ^ByteBuffer octet-buffer (octet/allocate 100000 {:type :direct :impl :nio}))

(defmulti pack (fn [method _ _] method))

(defmethod pack :edn ^bytes [_ _ data]
  (common/string->binary (pr-str data)))

(defmethod pack :json ^bytes [_ _ data]
  (common/string->binary (cheshire/generate-string data)))

(defmethod pack :smile ^bytes [_ _ data]
  (cheshire/generate-smile data))

(defmethod pack :nippy ^bytes [_ _ data]
  (nippy/freeze data))

(defmethod pack :java ^bytes [_ _ data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (ObjectOutputStream. baos)]
      (.writeObject out data))
    (.toByteArray baos)))

(defmethod pack :kryo ^bytes [_ _ data]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [^Output out (kryo/make-output baos)]
      (kryo/write-object out data))
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
       (gloss-io/encode schema)
       (gloss-io/contiguous)
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
  (read-string (common/binary->string binary)))

(defmethod unpack :json [_ _ ^bytes binary]
  (dorun (cheshire/parse-string (common/binary->string binary))))

(defmethod unpack :smile [_ _ ^bytes binary]
  (dorun (cheshire/parse-smile binary)))

(defmethod unpack :nippy [_ _ ^bytes binary]
  (nippy/thaw binary))

(defmethod unpack :java [_ _ ^bytes binary]
  (let [bais (ByteArrayInputStream. binary)]
    (with-open [in (ObjectInputStream. bais)]
      (.readObject in))))

(defmethod unpack :kryo [_ _ ^bytes binary]
  (let [bais (ByteArrayInputStream. binary)]
    (with-open [^Input in (kryo/make-input bais)]
      (kryo/read-object in))))

(defmethod unpack :transit [_ schema ^bytes binary]
  (let [bais   (ByteArrayInputStream. binary)
        reader (transit/reader bais :json)]
     (rec-realize (transit/read reader))))

(defmethod unpack :mikron [_ _ ^bytes binary]
  (mikron/unpack binary))

(defmethod unpack :avro [_ schema ^bytes binary]
  (avro/decode schema binary))

(defmethod unpack :gloss [_ schema ^bytes binary]
  (->> binary
       (ByteBuffer/wrap)
       (gloss-io/decode schema)))

(defmethod unpack :octet [_ schema ^bytes binary]
  (-> binary
      (ByteBuffer/wrap)
      (octet/read schema)))

(defmethod unpack :protobuf [_ schema ^bytes binary]
  (case schema
    :doubles  (Mikron$Doubles/parseFrom binary)
    :snapshot (Mikron$Snapshot/parseFrom binary)))

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
          (let [data   (benchmark-data/get-data method schema data)
                schema (benchmark-schema/get-schema method schema)]
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
  ;; Check if any methods return lazy values
  (for [[schema value] [[:doubles doubles] [:snapshot snapshot]]
        method         (keys (methods pack))]
    (let [value' (->> value
                      (pack method (get-schema method schema))
                      (unpack method (get-schema method schema)))]
      (when-not (rec-realized? value')
        (println method schema (type value')))))

  ;; Run benchmarks
  (diagram (benchmark :stats   [:pack-time :unpack-time]
                      :methods [:mikron :smile]
                      :schema  :snapshot
                      :data    (get-in benchmark-data/data [:snapshot :a])))

  ;; Snapshot
  [[:size]
   {:nippy [2847] :edn [2748] :java [9871] :smile [2150] :avro [732]
    :octet [748] :transit [2870] :kryo [2685] :json [2793] :gloss [752] :mikron [694]}]

  [[:pack-time :unpack-time]
   {:nippy   [56.920201862197395 35.092767078613115]
    :edn     [191.93976349206352 189.09592817164182]
    :java    [107.35283791887124 128.4312398893146]
    :smile   [47.27106596409055  21.61934102840705]
    :avro    [138.23873914037495 56.544362904735166]
    :octet   [40.91729274292744  56.56708908852705]
    :transit [61.73228516868237  41.91092730052822]
    :kryo    [47.339530792017456 29.518680396755595]
    :json    [66.88567794735678  37.717582767722476]
    :gloss   [263.3038478070176  141.52304472693032]
    :mikron  [4.247859232392693  3.7362821622697364]}]

  ;; Doubles
  [[:size]
   {:nippy [1807] :edn [3865] :java [6351] :smile [2206] :avro [1603]
    :octet [1604] :transit [3876] :kryo [1805] :json [3865] :gloss [1604] :mikron [1604]}]

  [[:pack-time :unpack-time]
   {:nippy   [14.505202565982405 6.8425498910528555]
    :edn     [94.52425546321946  225.58971579330424]
    :java    [122.11135888364778 104.3515169862092]
    :smile   [24.071493456968533 7.061145432860952]
    :avro    [23.16128393673638  5.68405362399851]
    :octet   [22.545969605878426 47.438951336477984]
    :transit [75.3628051590283   97.25555304518664]
    :kryo    [24.75690226537217  8.98302743754461]
    :json    [79.49238918849512  72.95299640954366]
    :gloss   [22.284690078405514 55.60210442101369]
    :mikron  [17.11354737245877  4.433268852915732]}]

  nil)
