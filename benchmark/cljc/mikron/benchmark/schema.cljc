(ns mikron.benchmark.schema
  "Benchmark schemas."
  (:refer-clojure :exclude [doubles])
  (:require [mikron.runtime.core :as mikron]
            [cognitect.transit :as transit]
            [octet.core :as octet]
            #?@(:clj [[abracad.avro :as avro]
                      [gloss.core :as gloss]])))

(mikron/defschema ::doubles
  [:vector :double])

(mikron/defschema ::person
  [:record {:first-name :string
            :last-name  :string}])

(mikron/defschema ::quartet
  [:tuple [::person ::person ::person ::person]])

(mikron/defschema ::coord
  [:record {:x :double :y :double}])

(mikron/defschema ::fixture
  [:record {:user-data [:record {:color :int}]
            :coords    [:list ::coord]}])

(mikron/defschema ::body
  [:record {:user-data [:record {:id :int}]
            :position  ::coord
            :angle     :double
            :body-type [:enum [:dynamic :static :kinetic]]
            :fixtures  [:list ::fixture]}])

(mikron/defschema ::snapshot
  [:record {:time   :long
            :bodies [:list ::body]}])

(defrecord Coord [^double x ^double y])

(defrecord FixtureUserData [^long color])

(defrecord Fixture [^FixtureUserData user-data coords])

(defrecord BodyUserData [^long id])

(defrecord Body [^BodyUserData user-data ^Coord position ^double angle body-type fixtures])

(defrecord Snapshot [^long time bodies])

(mikron/defschema ::coord2
  [:record {:type [Coord x y]}
           {:x :double :y :double}])

(mikron/defschema ::fixture2
  [:record {:type [Fixture user-data coords]}
           {:user-data [:record {:type [FixtureUserData color]}
                                {:color :int}]
            :coords    [:vector ::coord2]}])

(mikron/defschema ::body2
  [:record {:type [Body user-data position angle body-type fixtures]}
           {:user-data [:record {:type [BodyUserData id]}
                                {:id :int}]
            :position  ::coord2
            :angle     :double
            :body-type [:enum [:dynamic :static :kinetic]]
            :fixtures  [:vector ::fixture2]}])

(mikron/defschema ::snapshot2
  [:record {:type [Snapshot time bodies]}
           {:time   :long
            :bodies [:vector ::body2]}])

(defmulti get-schema* (fn [method schema] [method schema]))

(defmethod get-schema* [:mikron ::doubles] [_ _]
  ::doubles)

(defmethod get-schema* [:mikron ::quartet] [_ _]
  ::quartet)

(defmethod get-schema* [:mikron ::snapshot] [_ _]
  ::snapshot)

(defmethod get-schema* [:mikron ::snapshot2] [_ _]
  ::snapshot2)

#?(:clj ;; avro doubles
   (defmethod get-schema* [:avro ::doubles] [_ _]
     (avro/parse-schema {:type "array" :items "double"})))

#?(:clj ;; avro quartet
   (defmethod get-schema* [:avro ::quartet] [_ _]
     (let [person  {:name "person" :type "record" :namespace "mikron"
                    :fields [{:name "first-name" :type "string"}
                             {:name "last-name" :type "string"}]}
           quartet {:name "quartet" :type "record" :namespace "mikron"
                    :fields [{:name "a" :type "mikron.person"}
                             {:name "b" :type "mikron.person"}
                             {:name "c" :type "mikron.person"}
                             {:name "d" :type "mikron.person"}]
                    :abracad.reader "vector"}]
      (avro/parse-schema person quartet))))

#?(:clj ;; avro snapshot
   (defmethod get-schema* [:avro ::snapshot] [_ _]
     (let [coord    {:name "coord" :type "record" :namespace "mikron"
                     :fields [{:name "x" :type "double"}
                              {:name "y" :type "double"}]}
           fixture  {:name "fixture" :type "record" :namespace "mikron"
                     :fields [{:name "user-data"
                               :type {:name "user-data" :type "record"
                                      :fields [{:name "color" :type "int"}]}}
                              {:name "coords" :type {:type "array"
                                                     :items "mikron.coord"}}]}
           body     {:name "body" :type "record" :namespace "mikron"
                     :fields [{:name "angle" :type "double"}
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
       (avro/parse-schema coord fixture body snapshot))))

#?(:clj ;; avro snapshot2
   (defmethod get-schema* [:avro ::snapshot2] [_ _]
     (get-schema* :avro ::snapshot)))

#?(:clj ;; gloss doubles
   (defmethod get-schema* [:gloss ::doubles] [_ _]
     (gloss/compile-frame (gloss/repeated :float64))))

#?(:clj ;; gloss quartet
   (defmethod get-schema* [:gloss ::quartet] [_ _]
     (let [person  {:first-name (gloss/string :utf-8)
                    :last-name  (gloss/string :utf-8)}
           quartet [person person person person]]
       (gloss/compile-frame quartet))))

#?(:clj ;; gloss snapshot
   (defmethod get-schema* [:gloss ::snapshot] [_ _]
     (let [coord    {:x :float64
                     :y :float64}
           fixture  {:user-data {:color :int32}
                     :coords    (gloss/repeated coord)}
           body     {:angle     :float64
                     :position  coord
                     :user-data {:id :int32}
                     :body-type (gloss/enum :byte :dynamic :static :kinetic)
                     :fixtures  (gloss/repeated fixture)}
           snapshot {:time   :int64
                     :bodies (gloss/repeated body)}]
       (gloss/compile-frame snapshot))))

#?(:clj ;; gloss snapshot2
   (defmethod get-schema* [:gloss ::snapshot2] [_ _]
     (get-schema* :gloss ::snapshot)))

(defmethod get-schema* [:octet ::doubles] [_ _]
  (octet/vector* octet/double))

(defmethod get-schema* [:octet ::quartet] [_ _]
  (let [person  (octet/spec :first-name octet/string*
                            :last-name  octet/string*)
        quartet (octet/spec person person person person)]
    quartet))

(defmethod get-schema* [:octet ::snapshot] [_ _]
  (let [coord    (octet/spec :x octet/double
                             :y octet/double)
        fixture  (octet/spec :user-data (octet/spec :color octet/int32)
                             :coords    (octet/vector* coord))
        body     (octet/spec :angle     octet/double
                             :position  coord
                             :user-data (octet/spec :id octet/int32)
                             ; :body-type
                             :fixtures  (octet/vector* fixture))
        snapshot (octet/spec :time   octet/int64
                             :bodies (octet/vector* body))]
    snapshot))

(defmethod get-schema* [:octet ::snapshot2] [_ _]
  (get-schema* :octet ::snapshot))

(defmethod get-schema* :default [_ schema]
  schema)

(def get-schema
  (memoize
    (fn [method schema]
      (get-schema* method schema))))
