(ns mikron.benchmark.schema
  "Benchmark schemas."
  (:require [mikron.core :as mikron]
            [abracad.avro :as avro]
            [gloss.core :as gloss]
            [octet.core :as octet]))

(mikron/defschemas
  {:schemas  {;; doubles
              :doubles  [:list :double]
              ;; quartet
              :person   [:record {:name :string
                                  :age  :ubyte}]
              :quartet  [:tuple [:person :person :person :person]]
              ;; snapshot
              :coord    [:tuple [:float :float]]
              :fixture  [:record {:user-data [:record {:color :int}]
                                  :coords    [:list :coord]}]
              :body     [:record {:user-data [:record {:id :int}]
                                  :position  :coord
                                  :angle     :float
                                  :body-type [:enum [:dynamic :static :kinetic]]
                                  :fixtures  [:list :fixture]}]
              :snapshot [:record {:time   :long
                                  :bodies [:list :body]}]}})

(defmulti get-schema* (fn [method schema] [method schema]))

(defmethod get-schema* [:avro :doubles] [_ _]
  (avro/parse-schema {:type "array" :items "double"}))

(defmethod get-schema* [:avro :snapshot] [_ _]
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

(defmethod get-schema* [:gloss :doubles] [_ _]
  (gloss/compile-frame (gloss/repeated :float64)))

(defmethod get-schema* [:gloss :snapshot] [_ _]
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

(defmethod get-schema* [:octet :doubles] [_ _]
  (octet/vector* octet/double))

(defmethod get-schema* [:octet :snapshot] [_ _]
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

(defmethod get-schema* :default [_ schema]
  schema)

(def get-schema
  (memoize
    (fn [method schema]
      (get-schema* method schema))))
