(ns mikron.benchmark
  "Benchmarks."
  (:require [criterium.core :as crit]
            [mikron.core :as mikron]
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
  (:refer-clojure :exclude [doubles])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream ObjectInputStream ObjectOutputStream]
           [java.nio ByteBuffer]
           [com.esotericsoftware.kryo.io Input Output]
           [com.google.protobuf AbstractMessageLite]
           [mikron Mikron$Doubles Mikron$Coord Mikron$FixtureUserData Mikron$Fixture
                   Mikron$BodyUserData Mikron$Body Mikron$Snapshot Mikron$Body$BodyType]))

;; Util

(defn rec-realized? [form]
  (and (or (not (instance? clojure.lang.IPending form))
           (realized? form))
       (or (not (seqable? form))
           (every? rec-realized? form))))

(defn rec-realize [form]
  (walk/postwalk identity form))

;; Data

(def snapshot
  '{:time -8897634893184432128, :bodies ({:user-data {:id 772351170}, :position [0.12869532 0.21690896], :angle 0.53218615, :body-type :kinetic, :fixtures ({:user-data {:color 950764680}, :coords ([0.7610403 0.4807302] [0.4260479 0.93488866] [0.18761584 0.62211967])} {:user-data {:color -1087363628}, :coords ([0.32375553 0.95686257] [0.98342615 0.64082116] [0.9626239 0.4122986] [0.44671413 0.6274868])} {:user-data {:color -2145537603}, :coords ([0.22026068 0.62667584] [0.07853425 0.37216997] [0.38838577 0.110833935] [0.0056155147 0.5670468])})} {:user-data {:id -199729251}, :position [0.77650875 0.9739637], :angle 0.94069326, :body-type :kinetic, :fixtures ({:user-data {:color -1851856872}, :coords ([0.15766707 0.92573905] [0.28386086 0.50579554] [0.122885324 0.065113924])} {:user-data {:color 531012326}, :coords ([0.78031766 0.95833397] [0.51050925 0.31640592] [0.07478944 0.6374381] [0.15393399 0.83672523])} {:user-data {:color 389245078}, :coords ([0.46409312 0.8230157] [0.39341003 0.62518275] [0.8439251 0.04126302] [0.05799583 0.67760795])} {:user-data {:color 1170550463}, :coords ([0.9298557 0.025075234] [0.899514 0.2593797] [0.84398496 0.46197954] [0.23048908 0.3382324])} {:user-data {:color -1726365603}, :coords ([0.53016 0.77797544] [0.89153373 0.32682067] [0.56338286 0.13163084] [0.225837 0.43675026] [0.80354357 0.18686455])})} {:user-data {:id 1927051941}, :position [0.7361625 0.14031501], :angle 0.19493714, :body-type :dynamic, :fixtures ({:user-data {:color 685201494}, :coords ([0.19347441 0.6536752] [0.24858955 0.8323852] [0.47723803 0.22835433] [0.7884576 0.39233938])} {:user-data {:color -2100930709}, :coords ([0.65276194 0.66007906] [0.020007953 0.3181094] [0.34894365 0.50230277] [0.60575014 0.7668206] [0.8571492 0.85658014])} {:user-data {:color 165314502}, :coords ([0.51067173 0.5443819] [0.8838357 0.6847749] [0.77697074 0.12580936] [0.11778578 0.7067983] [0.46749872 0.5256676])} {:user-data {:color -176740328}, :coords ([0.8313221 0.9700986] [0.80449957 0.6181498] [0.32052988 0.23880848] [0.82642907 0.36838138] [0.5546832 0.35999528])} {:user-data {:color 1089747552}, :coords ([0.83952 0.9011726] [0.15706488 0.6534034] [0.004541657 0.41317675] [0.6872476 0.4615006])})} {:user-data {:id 699343903}, :position [0.9589766 0.622547], :angle 0.84386337, :body-type :static, :fixtures ({:user-data {:color -1515098833}, :coords ([0.25604144 0.19003278] [0.5448535 0.50277406] [0.022034843 0.0026561152] [0.02100538 0.25088885])} {:user-data {:color 1513999336}, :coords ([0.71929866 0.11233374] [0.43279323 0.785766] [0.79064494 0.9632471] [0.9625 0.6288017] [0.4098191 0.7107847])} {:user-data {:color -693337825}, :coords ([0.97909206 0.6511967] [0.32891005 0.6774595] [0.13106862 0.33364552])})})})

(def doubles
  (repeatedly 200 rand))

(defn protobuf-data []
  {:snapshot {snapshot (let [p-snapshot (Mikron$Snapshot/newBuilder)]
                         (.setTime p-snapshot (:time snapshot))
                         (run! (fn [{:keys [user-data position angle body-type fixtures]}]
                                 (let [p-body (Mikron$Body/newBuilder)]
                                   (.setUserData p-body (-> (Mikron$BodyUserData/newBuilder)
                                                            (.setId (:id user-data))))
                                   (.setPosition p-body (-> (Mikron$Coord/newBuilder)
                                                            (.setX (first position))
                                                            (.setY (second position))))
                                   (.setAngle p-body angle)
                                   (.setBodyType p-body (case body-type
                                                          :dynamic Mikron$Body$BodyType/DYNAMIC
                                                          :static  Mikron$Body$BodyType/STATIC
                                                          :kinetic Mikron$Body$BodyType/KINETIC))
                                   (run! (fn [{:keys [user-data coords]}]
                                           (let [p-fixture (Mikron$Fixture/newBuilder)]
                                             (.setUserData p-fixture (-> (Mikron$FixtureUserData/newBuilder)
                                                                         (.setColor (:color user-data))))
                                             (run! (fn [[x y]]
                                                     (.addCoords p-fixture (-> (Mikron$Coord/newBuilder)
                                                                               (.setX x)
                                                                               (.setY y))))
                                                   coords)
                                             (.addFixtures p-body p-fixture)))
                                         fixtures)
                                   (.addBodies p-snapshot p-body)))
                               (:bodies snapshot))
                         (.build p-snapshot))}
   :doubles  {doubles  (let [p-doubles (Mikron$Doubles/newBuilder)]
                         (run! (fn [double]
                                 (.addDoubles p-doubles double))
                               doubles)
                         (.build p-doubles))}})

(def compiled-protobuf-data (protobuf-data))

;; Schemas

(mikron/defprocessors {:pack mikron-pack :gen mikron-gen :unpack mikron-unpack}
  {:schemas  {:doubles  [:list :double]
              :body     [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
              :fixture  [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
              :coord    [:tuple [:float :float]]
              :snapshot [:record {:time   :long
                                  :bodies [:list :body]}]}})

(def avro-doubles-schema
  (avro/parse-schema {:type "array" :items "double"}))

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

(def gloss-doubles-codec
  (gloss/compile-frame (gloss/repeated :float64)))

(def gloss-snapshot-codec
  (let [coord    [:float32 :float32]
        fixture  {:user-data {:color :int32}
                  :coords    (gloss/repeated coord)}
        body     {:angle     :float32
                  :position  coord
                  :user-data {:id :int32}
                  :body-type (gloss/enum :byte :dynamic :static :kinetic)
                  :fixtures  (gloss/repeated fixture)}
        snapshot {:time   :int64
                  :bodies (gloss/repeated body)}]
    (gloss/compile-frame snapshot)))

(def ^ByteBuffer octet-buffer (octet/allocate 100000 {:type :direct :impl :nio}))

(def octet-doubles-spec
  (octet/vector* octet/double))

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

(defmulti get-schema (fn [method _] method))

(defmethod get-schema :avro [_ schema]
  (case schema
    :doubles  avro-doubles-schema
    :snapshot avro-snapshot-schema))

(defmethod get-schema :gloss [_ schema]
  (case schema
    :doubles  gloss-doubles-codec
    :snapshot gloss-snapshot-codec))

(defmethod get-schema :octet [_ schema]
  (case schema
    :doubles  octet-doubles-spec
    :snapshot octet-snapshot-spec))

(defmethod get-schema :default [_ schema]
  schema)

;; Packers

(defmulti pack (fn [method _ _] method))

(defmethod pack :edn ^bytes [_ _ value]
  (common/string->binary (pr-str value)))

(defmethod pack :json ^bytes [_ _ value]
  (common/string->binary (cheshire/generate-string value)))

(defmethod pack :smile ^bytes [_ _ value]
  (cheshire/generate-smile value))

(defmethod pack :nippy ^bytes [_ _ value]
  (nippy/freeze value))

(defmethod pack :java ^bytes [_ _ value]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [out (ObjectOutputStream. baos)]
      (.writeObject out value))
    (.toByteArray baos)))

(defmethod pack :kryo ^bytes [_ _ value]
  (let [baos (ByteArrayOutputStream.)]
    (with-open [^Output out (kryo/make-output baos)]
      (kryo/write-object out value))
    (.toByteArray baos)))

(defmethod pack :transit ^bytes [_ _ value]
  (let [baos   (ByteArrayOutputStream.)
        writer (transit/writer baos :json)]
    (transit/write writer value)
    (.toByteArray baos)))

(defmethod pack :mikron ^bytes [_ schema value]
  (mikron-pack schema value))

(defmethod pack :avro ^bytes [_ schema value]
  (avro/binary-encoded schema value))

(defmethod pack :gloss ^bytes [_ schema value]
  (->> value
       (gloss-io/encode schema)
       (gloss-io/contiguous)
       (.array)))

(defmethod pack :octet ^bytes [_ schema value]
  (let [array (byte-array (octet/write! octet-buffer value schema))]
    (.position octet-buffer 0)
    (.get octet-buffer array)
    array))

(defmethod pack :protobuf ^bytes [_ schema value]
  (.toByteArray ^AbstractMessageLite (get-in compiled-protobuf-data [schema value])))

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
  (mikron-unpack binary))

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

(def all-methods
  #{:edn :json :smile :nippy :java :kryo :transit :mikron :avro :gloss :octet})

(defn benchmark [& {:keys [stats methods schema data] :or {methods all-methods}}]
  [stats
   (->> (for [method methods]
          (let [schema (get-schema method schema)]
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
        method         all-methods]
    (let [value' (->> value
                      (pack method (get-schema method schema))
                      (unpack method (get-schema method schema)))]
      (when-not (rec-realized? value')
        (println method schema (type value')))))

  ;; Run benchmarks
  (diagram (benchmark :stats   [:pack-time :unpack-time]
                      :methods [:mikron :protobuf]
                      :schema  :doubles
                      :data    doubles))

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
