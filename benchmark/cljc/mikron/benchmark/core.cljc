(ns mikron.benchmark.core
  "Benchmarks."
  (:require [mikron.core :as mikron]
            [mikron.util :as util]
            [mikron.util.type :as util.type]
            [mikron.benchmark.data :as benchmark.data]
            [mikron.benchmark.schema :as benchmark.schema]
            [cognitect.transit :as transit]
            [octet.core :as octet]
            #?@(:clj [[mikron.compile-util :as compile-util]
                      [criterium.core :as crit]
                      [taoensso.nippy :as nippy]
                      [cheshire.core :as cheshire]
                      [gloss.core :as gloss]
                      [gloss.io]
                      [abracad.avro :as avro]
                      [prc :as chart]]))
  #?(:cljs (:require-macros [mikron.benchmark.core :refer [bench]]))
  #?(:clj (:import [java.io ByteArrayInputStream ByteArrayOutputStream ObjectInputStream ObjectOutputStream]
                   [java.nio ByteBuffer]
                   [com.google.protobuf AbstractMessageLite]
                   [mikron Mikron$Doubles Mikron$Quartet Mikron$Snapshot])))

;; Packers

(def #?(:clj ^ByteBuffer octet-buffer :cljs octet-buffer)
   (octet/allocate 100000 #?(:clj  {:type :direct :impl :nio
                                    :cljs {:type :heap   :impl :es6}})))

(defmulti pack (fn [method _ _] method))

(defmethod pack :edn ^bytes [_ _ data]
  (util.type/string->binary (util.type/any->string data)))
(defmethod pack :mikron ^bytes [_ schema data]
  (mikron/pack schema data))

(defmethod pack :transit ^bytes [_ _ data]
  #?(:clj  (let [baos (ByteArrayOutputStream.)]
             (transit/write (transit/writer baos :msgpack) data)
             (.toByteArray baos))
     :cljs (->> data
                (transit/write (transit/writer :json))
                (util.type/string->binary))))

(defmethod pack :octet ^bytes [_ schema data]
  (let [length (octet/write! octet-buffer data schema)]
    #?(:clj  (let [array (byte-array length)]
               (.position octet-buffer 0)
               (.get octet-buffer array)
               array)
       :cljs (.slice octet-buffer 0 length))))

#?(:clj ;; json
   (defmethod pack :json ^bytes [_ _ data]
     (util.type/string->binary (cheshire/generate-string data))))

#?(:clj ;; smile
   (defmethod pack :smile ^bytes [_ _ data]
     (cheshire/generate-smile data)))

#?(:clj ;; nippy
   (defmethod pack :nippy ^bytes [_ _ data]
     (nippy/freeze data)))

#?(:clj ;; java
   (defmethod pack :java ^bytes [_ _ data]
     (let [baos (ByteArrayOutputStream.)]
       (with-open [out (ObjectOutputStream. baos)]
         (.writeObject out data))
       (.toByteArray baos))))

#?(:clj ;; avro
   (defmethod pack :avro ^bytes [_ schema data]
     (avro/binary-encoded schema data)))

#?(:clj ;; gloss
   (defmethod pack :gloss ^bytes [_ schema data]
     (->> data
          (gloss.io/encode schema)
          (gloss.io/contiguous)
          (.array))))

#?(:clj ;; protobuf
   (defmethod pack :protobuf ^bytes [_ _ ^AbstractMessageLite data]
     (.toByteArray data)))

;; Unpackers

(defmulti unpack (fn [method _ _] method))

(defmethod unpack :edn [_ _ ^bytes binary]
  (util.type/string->any (util.type/binary->string binary)))

(defmethod unpack :mikron [_ schema ^bytes binary]
  (mikron/unpack schema binary))

(defmethod unpack :transit [_ schema ^bytes binary]
  #?(:clj  (-> (ByteArrayInputStream. binary)
               (transit/reader :json)
               (transit/read))
     :cljs (->> binary
                (util.type/binary->string)
                (transit/read (transit/reader :json)))))

(defmethod unpack :octet [_ schema ^bytes binary]
  (-> binary
      #?(:clj (ByteBuffer/wrap))
      (octet/read schema)))

#?(:clj ;; json
   (defmethod unpack :json [_ _ ^bytes binary]
     (cheshire/parse-string (util.type/binary->string binary))))

#?(:clj ;; smile
   (defmethod unpack :smile [_ _ ^bytes binary]
     (cheshire/parse-smile binary)))

#?(:clj ;; nippy
   (defmethod unpack :nippy [_ _ ^bytes binary]
     (nippy/thaw binary)))

#?(:clj ;; java
   (defmethod unpack :java [_ _ ^bytes binary]
     (let [bais (ByteArrayInputStream. binary)]
       (with-open [in (ObjectInputStream. bais)]
         (.readObject in)))))

#?(:clj ;; avro
   (defmethod unpack :avro [_ schema ^bytes binary]
     (avro/decode schema binary)))

#?(:clj ;; gloss
   (defmethod unpack :gloss [_ schema ^bytes binary]
     (->> binary
          (ByteBuffer/wrap)
          (gloss.io/decode schema))))

#?(:clj ;; protobuf
   (defmethod unpack :protobuf [_ schema ^bytes binary]
     (case schema
       ::benchmark.schema/doubles   (Mikron$Doubles/parseFrom binary)
       ::benchmark.schema/quartet   (Mikron$Quartet/parseFrom binary)
       ::benchmark.schema/snapshot  (Mikron$Snapshot/parseFrom binary)
       ::benchmark.schema/snapshot2 (Mikron$Snapshot/parseFrom binary))))

;; Post process

#?(:cljs
   (defn now []
     (if (util/node-env?)
       (let [[secs nanos] (.hrtime js/process)]
         (+ (* 1000 secs) (/ nanos 1000 1000)))
       (.now js/performance))))

#?(:clj
   (defmacro bench [expr]
     (if-not (compile-util/cljs?)
       `(->> (crit/quick-benchmark ~expr {}) :mean (first) (double) (* 1000 1000))
       `(do (dotimes [_# 1000] ~expr)
            (let [t# (now)]
              (dotimes [_# 1000] ~expr)
              (- (now) t#))))))

(defmulti measure (fn [stat _ _ _] stat))

(defmethod measure :size [_ method schema data]
  (count (pack method schema data)))

(defmethod measure :pack-time [_ method schema data]
  (bench (pack method schema data)))

(defmethod measure :unpack-time [_ method schema data]
  (let [binary (pack method schema data)]
    (bench (unpack method schema binary))))

(defn benchmark [& {:keys [stats methods schema]}]
  (let [all-methods (set (keys (clojure.core/methods pack)))
        methods     (filter all-methods (or methods all-methods))]
    [stats
     (->> (for [method methods]
            (let [data   (benchmark.data/get-data method schema)
                  schema (benchmark.schema/get-schema method schema)]
              [method (vec (for [stat stats]
                             (do (println "Measuring" (name method) "|" (name stat))
                                 (util/safe 0 (measure stat method schema data)))))]))
          (into {}))]))

(def description
  {:size        "Size [bytes]"
   :pack-time   "Serialization time [μs]"
   :unpack-time "Deserialization time [μs]"})

(defn diagram [[stats data]]
  #?(:clj  (chart/bar-chart "Benchmarks" data {:labels (map description stats)})
     :cljs [[stats data]]))

(comment
  (diagram (benchmark :stats   [:size]
                      ;:methods [:mikron]
                      :schema  ::benchmark.schema/quartet))
  nil)
