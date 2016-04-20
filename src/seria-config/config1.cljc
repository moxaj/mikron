(ns my.config
  "This namespace was automatically generated at 2016.04.20. 17:18."
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

{:schemas {:body     [:s/record {:user-data [:s/record {:id :s/int}]
                                 :position  :coord
                                 :angle     :s/float
                                 :body-type [:s/enum [:dynamic :static :kinetic]]
                                 :fixtures  [:s/list :fixture]}]
           :fixture  [:s/record {:user-data [:s/record {:color :s/int}]
                                 :coords    [:s/list :coord]}]
           :coord    [:s/tuple [:s/float :s/float]]
           :snapshot [:s/record {:time   :s/long
                                 :bodies [:s/list :body]}]}
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

(defn ^{:private true} pack [value_3599
                             buffer_3600
                             schema-id_3601
                             diff-id_3602
                             diffed?_3603
                             pack-fn_3604]
  (-> buffer_3600
   (write-headers! schema-id_3601 diff-id_3602 diffed?_3603)
   (pack-fn_3604 value_3599)
   (compress)))

(defn ^{:private true} pack-inner*-body [buffer_4012 value_4011]
  (let [fixtures_4015 (:fixtures value_4011)]
    (write-float! buffer_4012 (:angle value_4011))
    (write-varint!
      buffer_4012
      (case (:body-type value_4011) :dynamic 0 :static 1 :kinetic 2))
    (write-varint! buffer_4012 (count fixtures_4015))
    (run!
      (fn [fixtures-item_4018]
        (pack-inner*-fixture buffer_4012 fixtures-item_4018))
      fixtures_4015)
    (pack-inner*-coord buffer_4012 (:position value_4011))
    (write-int! buffer_4012 (:id (:user-data value_4011))))
  buffer_4012)

(defn ^{:private true} pack-inner*-coord [buffer_3982 value_3981]
  (write-float! buffer_3982 (value_3981 0))
  (write-float! buffer_3982 (value_3981 1))
  buffer_3982)

(defn ^{:private true} pack-inner*-fixture [buffer_4001 value_4000]
  (let [coords_4002 (:coords value_4000)]
    (write-varint! buffer_4001 (count coords_4002))
    (run!
      (fn [coords-item_4004]
        (pack-inner*-coord buffer_4001 coords-item_4004))
      coords_4002)
    (write-int! buffer_4001 (:color (:user-data value_4000))))
  buffer_4001)

(defn ^{:private true} pack-inner*-snapshot [buffer_3991 value_3990]
  (let [bodies_3992 (:bodies value_3990)]
    (write-varint! buffer_3991 (count bodies_3992))
    (run!
      (fn [bodies-item_3994]
        (pack-inner*-body buffer_3991 bodies-item_3994))
      bodies_3992)
    (write-long! buffer_3991 (:time value_3990)))
  buffer_3991)

(defn ^{:private true} unpack-inner*-body [buffer_4024]
  {:angle (read-float! buffer_4024),
   :body-type (enum-ids (read-varint! buffer_4024)),
   :fixtures
   (doall
     (repeatedly
       (read-varint! buffer_4024)
       (fn [] (unpack-inner*-fixture buffer_4024)))),
   :position (unpack-inner*-coord buffer_4024),
   :user-data {:id (read-int! buffer_4024)}})

(defn ^{:private true} unpack-inner*-coord [buffer_3989]
  [(read-float! buffer_3989) (read-float! buffer_3989)])

(defn ^{:private true} unpack-inner*-fixture [buffer_4010]
  {:coords
   (doall
     (repeatedly
       (read-varint! buffer_4010)
       (fn [] (unpack-inner*-coord buffer_4010)))),
   :user-data {:color (read-int! buffer_4010)}})

(defn ^{:private true} unpack-inner*-snapshot [buffer_3999]
  {:bodies
   (doall
     (repeatedly
       (read-varint! buffer_3999)
       (fn [] (unpack-inner*-body buffer_3999)))),
   :time (read-long! buffer_3999)})

;; ============================================================================
;; Public functions
;; ============================================================================

(defn pack-body
  ([value_4020 buffer_4021] (pack-body value_4020 buffer_4021 0 false))
  ([value_4020 buffer_4021 diff-id_4022]
    (pack-body value_4020 diff-id_4022 false))
  ([value_4020 buffer_4021 diff-id_4022 diffed?_4023]
    (pack
      value_4020
      buffer_4021
      3
      diff-id_4022
      diffed?_4023
      pack-inner*-body)))

(defn pack-coord
  ([value_3985 buffer_3986]
    (pack-coord value_3985 buffer_3986 0 false))
  ([value_3985 buffer_3986 diff-id_3987]
    (pack-coord value_3985 diff-id_3987 false))
  ([value_3985 buffer_3986 diff-id_3987 diffed?_3988]
    (pack
      value_3985
      buffer_3986
      0
      diff-id_3987
      diffed?_3988
      pack-inner*-coord)))

(defn pack-fixture
  ([value_4006 buffer_4007]
    (pack-fixture value_4006 buffer_4007 0 false))
  ([value_4006 buffer_4007 diff-id_4008]
    (pack-fixture value_4006 diff-id_4008 false))
  ([value_4006 buffer_4007 diff-id_4008 diffed?_4009]
    (pack
      value_4006
      buffer_4007
      2
      diff-id_4008
      diffed?_4009
      pack-inner*-fixture)))

(defn pack-snapshot
  ([value_3995 buffer_3996]
    (pack-snapshot value_3995 buffer_3996 0 false))
  ([value_3995 buffer_3996 diff-id_3997]
    (pack-snapshot value_3995 diff-id_3997 false))
  ([value_3995 buffer_3996 diff-id_3997 diffed?_3998]
    (pack
      value_3995
      buffer_3996
      1
      diff-id_3997
      diffed?_3998
      pack-inner*-snapshot)))

(defn unpack [raw_3974]
  (let [buffer_3975 (wrap raw_3974)
        headers_3976 (read-headers! buffer_3975)
        schema_3979 (schema-ids (:schema-id headers_3976))]
    (if-not schema_3979
      :s/invalid
      {:schema schema_3979,
       :diffed? (:diffed? headers_3976),
       :value
       ((case
          schema_3979
          :coord
          unpack-inner*-coord
          :snapshot
          unpack-inner*-snapshot
          :fixture
          unpack-inner*-fixture
          :body
          unpack-inner*-body)
         buffer_3975),
       :diff-id (:diff-id headers_3976)})))

