(ns mikron.benchmark.core
  "Benchmarks."
  (:require [#?(:clj  clojure.tools.reader ;; TODO jira issue
                :cljs cljs.tools.reader)
             :as edn]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.util :as runtime.util]
            [mikron.runtime.processor.common :as runtime.processor.common]
            [mikron.benchmark.data :as benchmark.data]
            [mikron.benchmark.schema :as benchmark.schema]
            [cognitect.transit :as transit]
            [octet.core :as octet]
            #?@(:clj [[macrowbar.core :as macrowbar]
                      [criterium.core :as crit]
                      [taoensso.nippy :as nippy]
                      [cheshire.core :as cheshire]
                      [gloss.core :as gloss]
                      [gloss.io]
                      [abracad.avro :as avro]]))
  #?(:cljs (:require-macros [mikron.benchmark.core :refer [bench]]))
  #?(:clj (:import [java.util Arrays]
                   [java.io ByteArrayInputStream ByteArrayOutputStream ObjectInputStream ObjectOutputStream]
                   [java.nio ByteBuffer]
                   [com.google.protobuf AbstractMessageLite]
                   [mikron Mikron$Doubles Mikron$Quartet Mikron$Snapshot]
                   [mikron.colf Quartet Snapshot])))

;; Packers

(def #?(:clj ^ByteBuffer octet-buffer :cljs octet-buffer)
   (octet/allocate 100000 #?(:clj  {:type :direct :impl :nio}
                             :cljs {:type :heap   :impl :es6})))

#?(:clj (def colfer-buffer ^bytes (byte-array 10000)))

(defmulti pack (fn [method _ _] method))

(defmethod pack :edn ^bytes [_ _ data]
  (runtime.processor.common/string->binary (pr-str data)))

(defmethod pack :mikron ^bytes [_ schema data]
  (mikron/pack schema data))

(defmethod pack :transit ^bytes [_ _ data]
  #?(:clj  (let [baos (ByteArrayOutputStream.)]
             (transit/write (transit/writer baos :msgpack) data)
             (.toByteArray baos))
     :cljs (->> data
                (transit/write (transit/writer :json))
                (runtime.processor.common/string->binary))))

(defmethod pack :octet ^bytes [_ schema data]
  (let [length (octet/write! octet-buffer data schema)]
    #?(:clj  (let [array (byte-array length)]
               (.position octet-buffer 0)
               (.get octet-buffer array)
               array)
       :cljs (.slice octet-buffer 0 length))))

#?(:clj ;; json
   (defmethod pack :json ^bytes [_ _ data]
     (runtime.processor.common/string->binary (cheshire/generate-string data))))

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

#?(:clj ;; colfer
   (defmethod pack :colfer ^bytes [_ schema data]
     (let [count (case schema
                   ::benchmark.schema/quartet   (.marshal ^Quartet data ^bytes colfer-buffer 0)
                   ::benchmark.schema/snapshot  (.marshal ^Snapshot data ^bytes colfer-buffer 0)
                   ::benchmark.schema/snapshot2 (.marshal ^Snapshot data ^bytes colfer-buffer 0))]
       (Arrays/copyOf ^bytes colfer-buffer count))))

;; Unpackers

(defmulti unpack (fn [method _ _] method))

(defmethod unpack :edn [_ _ ^bytes binary]
  (edn/read-string (runtime.processor.common/binary->string binary)))

(defmethod unpack :mikron [_ schema ^bytes binary]
  (mikron/unpack schema binary))

(defmethod unpack :transit [_ schema ^bytes binary]
  #?(:clj  (-> (ByteArrayInputStream. binary)
               (transit/reader :json)
               (transit/read))
     :cljs (->> binary
                (runtime.processor.common/binary->string)
                (transit/read (transit/reader :json)))))

(defmethod unpack :octet [_ schema ^bytes binary]
  (-> binary
      #?(:clj (ByteBuffer/wrap))
      (octet/read schema)))

#?(:clj ;; json
   (defmethod unpack :json [_ _ ^bytes binary]
     (cheshire/parse-string (runtime.processor.common/binary->string binary))))

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

#?(:clj ;; colfer
   (defmethod unpack :colfer [_ schema ^bytes binary]
     (case schema
       ::benchmark.schema/quartet   (.unmarshal (Quartet.) binary 0)
       ::benchmark.schema/snapshot  (.unmarshal (Snapshot.) binary 0)
       ::benchmark.schema/snapshot2 (.unmarshal (Snapshot.) binary 0))))

;; Post process

#?(:cljs
   (defn now []
     (if (runtime.util/node-env?)
       (let [[secs nanos] (.hrtime js/process)]
         (+ (* 1000 secs) (/ nanos 1000 1000)))
       (.now js/performance))))

#?(:clj
   (defmacro bench [expr]
     (if-not (macrowbar/cljs? &env)
       `(->> (crit/quick-benchmark ~expr {}) :mean (first) (double) (* 1000 1000))
       `(do (dotimes [_# 1000] ~expr)
            (let [t# (now)]
              (dotimes [_# 1000] ~expr)
              (- (now) t#))))))

(defmulti measure (fn [stat method schema data] stat))

(defmethod measure :size [_ method schema data]
  (count (pack method schema data)))

(defmethod measure :pack-time [_ method schema data]
  (bench (pack method schema data)))

(defmethod measure :unpack-time [_ method schema data]
  (let [binary (pack method schema data)]
    (bench (unpack method schema binary))))

(defn benchmark [& {:keys [stats methods schema]}]
  (let [all-methods (set (keys (clojure.core/methods pack)))
        methods     (if-not methods
                      all-methods
                      (filter all-methods methods))]
    (->> (for [method methods]
           (let [data   (benchmark.data/get-data method schema)
                 schema (benchmark.schema/get-schema method schema)]
             [method (vec (for [stat stats]
                            (do (println "Measuring" (name method) "|" (name stat))
                                (runtime.util/safe 0 (measure stat method schema data)))))]))
         (sort-by second)
         (vec))))

(comment
  (benchmark :stats   [:size]
             ;:methods [:mikron :protobuf :nippy]
             :schema  ::benchmark.schema/snapshot)
  nil)
