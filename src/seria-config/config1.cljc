(ns my.config
  "This namespace was automatically generated at 2016.04.22. 11:02."
  (:require [seria.buffer :refer [compress
                                  read-float!
                                  read-headers!
                                  read-int!
                                  read-long!
                                  read-varint!
                                  wrap
                                  write-float!
                                  write-headers!
                                  write-int!
                                  write-long! write-varint!]]))

;; ============================================================================
;; Static seria config 
;; ============================================================================

{:schemas {:body     [:record {:user-data [:record {:id :int}]
                               :position  :coord
                               :angle     :float
                               :body-type [:enum [:dynamic :static :kinetic]]
                               :fixtures  [:list :fixture]}]
           :fixture  [:record {:user-data [:record {:color :int}]
                               :coords    [:list :coord]}]
           :coord    [:tuple [:float :float]]
           :snapshot [:record {:time   :long
                               :bodies [:list :body]}]}
 :processors [:pack]}

;; ============================================================================
;; Vars and declarations
;; ============================================================================

(def ^{:private true} enum-ids {0 :dynamic, 1 :static, 2 :kinetic})

(def ^{:private true} schema-ids
 {0 :coord, 1 :snapshot, 2 :fixture, 3 :body})

(declare
  pack
  unpack
  pack-inner*-coord
  pack-coord
  unpack-inner*-coord
  pack-inner*-snapshot
  pack-snapshot
  unpack-inner*-snapshot
  pack-inner*-fixture
  pack-fixture
  unpack-inner*-fixture
  pack-inner*-body
  pack-body
  unpack-inner*-body)

;; ============================================================================
;; Private functions
;; ============================================================================

(defn ^{:private true} pack [value_3614
                             buffer_3615
                             schema-id_3616
                             diff-id_3617
                             diffed?_3618
                             pack-fn_3619]
  (-> buffer_3615
   (write-headers! schema-id_3616 diff-id_3617 diffed?_3618)
   (pack-fn_3619 value_3614)
   (compress)))

(defn ^{:private true} pack-inner*-body [buffer_4011 value_4010]
  (let [fixtures_4014 (:fixtures value_4010)]
    (write-float! buffer_4011 (:angle value_4010))
    (write-varint!
      buffer_4011
      (case (:body-type value_4010) :dynamic 0 :static 1 :kinetic 2))
    (write-varint! buffer_4011 (count fixtures_4014))
    (run!
      (fn [fixtures-item_4017]
        (pack-inner*-fixture buffer_4011 fixtures-item_4017))
      fixtures_4014)
    (pack-inner*-coord buffer_4011 (:position value_4010))
    (write-int! buffer_4011 (:id (:user-data value_4010))))
  buffer_4011)

(defn ^{:private true} pack-inner*-coord [buffer_3981 value_3980]
  (write-float! buffer_3981 (value_3980 0))
  (write-float! buffer_3981 (value_3980 1))
  buffer_3981)

(defn ^{:private true} pack-inner*-fixture [buffer_4000 value_3999]
  (let [coords_4001 (:coords value_3999)]
    (write-varint! buffer_4000 (count coords_4001))
    (run!
      (fn [coords-item_4003]
        (pack-inner*-coord buffer_4000 coords-item_4003))
      coords_4001)
    (write-int! buffer_4000 (:color (:user-data value_3999))))
  buffer_4000)

(defn ^{:private true} pack-inner*-snapshot [buffer_3990 value_3989]
  (let [bodies_3991 (:bodies value_3989)]
    (write-varint! buffer_3990 (count bodies_3991))
    (run!
      (fn [bodies-item_3993]
        (pack-inner*-body buffer_3990 bodies-item_3993))
      bodies_3991)
    (write-long! buffer_3990 (:time value_3989)))
  buffer_3990)

(defn ^{:private true} unpack-inner*-body [buffer_4023]
  {:angle (read-float! buffer_4023),
   :body-type (enum-ids (read-varint! buffer_4023)),
   :fixtures
   (doall
     (repeatedly
       (read-varint! buffer_4023)
       (fn [] (unpack-inner*-fixture buffer_4023)))),
   :position (unpack-inner*-coord buffer_4023),
   :user-data {:id (read-int! buffer_4023)}})

(defn ^{:private true} unpack-inner*-coord [buffer_3988]
  [(read-float! buffer_3988) (read-float! buffer_3988)])

(defn ^{:private true} unpack-inner*-fixture [buffer_4009]
  {:coords
   (doall
     (repeatedly
       (read-varint! buffer_4009)
       (fn [] (unpack-inner*-coord buffer_4009)))),
   :user-data {:color (read-int! buffer_4009)}})

(defn ^{:private true} unpack-inner*-snapshot [buffer_3998]
  {:bodies
   (doall
     (repeatedly
       (read-varint! buffer_3998)
       (fn [] (unpack-inner*-body buffer_3998)))),
   :time (read-long! buffer_3998)})

;; ============================================================================
;; Public functions
;; ============================================================================

(defn pack-body
  ([value_4019 buffer_4020] (pack-body value_4019 buffer_4020 0 false))
  ([value_4019 buffer_4020 diff-id_4021]
    (pack-body value_4019 diff-id_4021 false))
  ([value_4019 buffer_4020 diff-id_4021 diffed?_4022]
    (pack
      value_4019
      buffer_4020
      3
      diff-id_4021
      diffed?_4022
      pack-inner*-body)))

(defn pack-coord
  ([value_3984 buffer_3985]
    (pack-coord value_3984 buffer_3985 0 false))
  ([value_3984 buffer_3985 diff-id_3986]
    (pack-coord value_3984 diff-id_3986 false))
  ([value_3984 buffer_3985 diff-id_3986 diffed?_3987]
    (pack
      value_3984
      buffer_3985
      0
      diff-id_3986
      diffed?_3987
      pack-inner*-coord)))

(defn pack-fixture
  ([value_4005 buffer_4006]
    (pack-fixture value_4005 buffer_4006 0 false))
  ([value_4005 buffer_4006 diff-id_4007]
    (pack-fixture value_4005 diff-id_4007 false))
  ([value_4005 buffer_4006 diff-id_4007 diffed?_4008]
    (pack
      value_4005
      buffer_4006
      2
      diff-id_4007
      diffed?_4008
      pack-inner*-fixture)))

(defn pack-snapshot
  ([value_3994 buffer_3995]
    (pack-snapshot value_3994 buffer_3995 0 false))
  ([value_3994 buffer_3995 diff-id_3996]
    (pack-snapshot value_3994 diff-id_3996 false))
  ([value_3994 buffer_3995 diff-id_3996 diffed?_3997]
    (pack
      value_3994
      buffer_3995
      1
      diff-id_3996
      diffed?_3997
      pack-inner*-snapshot)))

(defn unpack [raw_3973]
  (let [buffer_3974 (wrap raw_3973)
        headers_3975 (read-headers! buffer_3974)
        schema_3978 (schema-ids (:schema-id headers_3975))]
    (if-not schema_3978
      :invalid
      {:schema schema_3978,
       :diffed? (:diffed? headers_3975),
       :value
       ((case
          schema_3978
          :coord
          unpack-inner*-coord
          :snapshot
          unpack-inner*-snapshot
          :fixture
          unpack-inner*-fixture
          :body
          unpack-inner*-body)
         buffer_3974),
       :diff-id (:diff-id headers_3975)})))

