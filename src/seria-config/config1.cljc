(ns my.config
  "This namespace was automatically generated at 2016.04.20. 16:54."
  (:require))

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
 :processors [:diff]}

;; ============================================================================
;; Vars and declarations
;; ============================================================================

(declare
  diff-coord
  undiff-coord
  diff-snapshot
  undiff-snapshot
  diff-fixture
  undiff-fixture
  diff-body
  undiff-body)

;; ============================================================================
;; Public functions
;; ============================================================================

(defn diff-body [value-1_4033 value-2_4034]
  (if (= value-1_4033 value-2_4034)
    :s/dnil
    (let [value-2-angle_4035 (:angle value-2_4034)
          value-2-body-type_4036 (:body-type value-2_4034)
          value-2-fixtures_4037 (:fixtures value-2_4034)
          value-2-position_4038 (:position value-2_4034)
          value-2-user-data_4039 (:user-data value-2_4034)]
      {:angle
       (if (= (:angle value-1_4033) value-2-angle_4035)
         :s/dnil
         value-2-angle_4035),
       :body-type
       (if (= (:body-type value-1_4033) value-2-body-type_4036)
         :s/dnil
         value-2-body-type_4036),
       :fixtures
       (let [value-1-fixtures_4042 (:fixtures value-1_4033)]
         (if (= value-1-fixtures_4042 value-2-fixtures_4037)
           :s/dnil
           (let [value-1-fixtures-vec_4046 (vec value-1-fixtures_4042)]
             (map-indexed
               (fn [index_4043 value-2-fixtures-item_4045]
                 (if-let [value-1-fixtures-item_4044 (get
                                                       value-1-fixtures-vec_4046
                                                       index_4043)]
                   (if (=
                         value-1-fixtures-item_4044
                         value-2-fixtures-item_4045)
                     :s/dnil
                     (diff-fixture
                       value-1-fixtures-item_4044
                       value-2-fixtures-item_4045))
                   value-2-fixtures-item_4045))
               value-2-fixtures_4037)))),
       :position
       (let [value-1-position_4047 (:position value-1_4033)]
         (if (= value-1-position_4047 value-2-position_4038)
           :s/dnil
           (diff-coord value-1-position_4047 value-2-position_4038))),
       :user-data
       (let [value-1-user-data_4048 (:user-data value-1_4033)]
         (if (= value-1-user-data_4048 value-2-user-data_4039)
           :s/dnil
           (let [value-2-user-data-id_4049 (:id
                                             value-2-user-data_4039)]
             {:id
              (if (=
                    (:id value-1-user-data_4048)
                    value-2-user-data-id_4049)
                :s/dnil
                value-2-user-data-id_4049)})))})))

(defn diff-coord [value-1_3977 value-2_3978]
  (if (= value-1_3977 value-2_3978)
    :s/dnil
    (let [value-2-0_3979 (value-2_3978 0)
          value-2-1_3980 (value-2_3978 1)]
      [(if (= (value-1_3977 0) value-2-0_3979) :s/dnil value-2-0_3979)
       (if (= (value-1_3977 1) value-2-1_3980)
         :s/dnil
         value-2-1_3980)])))

(defn diff-fixture [value-1_4009 value-2_4010]
  (if (= value-1_4009 value-2_4010)
    :s/dnil
    (let [value-2-coords_4011 (:coords value-2_4010)
          value-2-user-data_4012 (:user-data value-2_4010)]
      {:coords
       (let [value-1-coords_4013 (:coords value-1_4009)]
         (if (= value-1-coords_4013 value-2-coords_4011)
           :s/dnil
           (let [value-1-coords-vec_4017 (vec value-1-coords_4013)]
             (map-indexed
               (fn [index_4014 value-2-coords-item_4016]
                 (if-let [value-1-coords-item_4015 (get
                                                     value-1-coords-vec_4017
                                                     index_4014)]
                   (if (=
                         value-1-coords-item_4015
                         value-2-coords-item_4016)
                     :s/dnil
                     (diff-coord
                       value-1-coords-item_4015
                       value-2-coords-item_4016))
                   value-2-coords-item_4016))
               value-2-coords_4011)))),
       :user-data
       (let [value-1-user-data_4018 (:user-data value-1_4009)]
         (if (= value-1-user-data_4018 value-2-user-data_4012)
           :s/dnil
           (let [value-2-user-data-color_4019 (:color
                                                value-2-user-data_4012)]
             {:color
              (if (=
                    (:color value-1-user-data_4018)
                    value-2-user-data-color_4019)
                :s/dnil
                value-2-user-data-color_4019)})))})))

(defn diff-snapshot [value-1_3989 value-2_3990]
  (if (= value-1_3989 value-2_3990)
    :s/dnil
    (let [value-2-bodies_3991 (:bodies value-2_3990)
          value-2-time_3992 (:time value-2_3990)]
      {:bodies
       (let [value-1-bodies_3993 (:bodies value-1_3989)]
         (if (= value-1-bodies_3993 value-2-bodies_3991)
           :s/dnil
           (let [value-1-bodies-vec_3997 (vec value-1-bodies_3993)]
             (map-indexed
               (fn [index_3994 value-2-bodies-item_3996]
                 (if-let [value-1-bodies-item_3995 (get
                                                     value-1-bodies-vec_3997
                                                     index_3994)]
                   (if (=
                         value-1-bodies-item_3995
                         value-2-bodies-item_3996)
                     :s/dnil
                     (diff-body
                       value-1-bodies-item_3995
                       value-2-bodies-item_3996))
                   value-2-bodies-item_3996))
               value-2-bodies_3991)))),
       :time
       (if (= (:time value-1_3989) value-2-time_3992)
         :s/dnil
         value-2-time_3992)})))

(defn undiff-body [value-1_4051 value-2_4052]
  (if (= :s/dnil value-2_4052)
    value-1_4051
    (let [value-2-angle_4053 (:angle value-2_4052)
          value-2-body-type_4054 (:body-type value-2_4052)
          value-2-fixtures_4055 (:fixtures value-2_4052)
          value-2-position_4056 (:position value-2_4052)
          value-2-user-data_4057 (:user-data value-2_4052)]
      {:angle
       (if (= :s/dnil value-2-angle_4053)
         (:angle value-1_4051)
         value-2-angle_4053),
       :body-type
       (if (= :s/dnil value-2-body-type_4054)
         (:body-type value-1_4051)
         value-2-body-type_4054),
       :fixtures
       (let [value-1-fixtures_4060 (:fixtures value-1_4051)]
         (if (= :s/dnil value-2-fixtures_4055)
           value-1-fixtures_4060
           (let [value-1-fixtures-vec_4064 (vec value-1-fixtures_4060)]
             (map-indexed
               (fn [index_4061 value-2-fixtures-item_4063]
                 (if-let [value-1-fixtures-item_4062 (get
                                                       value-1-fixtures-vec_4064
                                                       index_4061)]
                   (if (= :s/dnil value-2-fixtures-item_4063)
                     value-1-fixtures-item_4062
                     (undiff-fixture
                       value-1-fixtures-item_4062
                       value-2-fixtures-item_4063))
                   value-2-fixtures-item_4063))
               value-2-fixtures_4055)))),
       :position
       (let [value-1-position_4065 (:position value-1_4051)]
         (if (= :s/dnil value-2-position_4056)
           value-1-position_4065
           (undiff-coord
             value-1-position_4065
             value-2-position_4056))),
       :user-data
       (let [value-1-user-data_4066 (:user-data value-1_4051)]
         (if (= :s/dnil value-2-user-data_4057)
           value-1-user-data_4066
           (let [value-2-user-data-id_4067 (:id
                                             value-2-user-data_4057)]
             {:id
              (if (= :s/dnil value-2-user-data-id_4067)
                (:id value-1-user-data_4066)
                value-2-user-data-id_4067)})))})))

(defn undiff-coord [value-1_3983 value-2_3984]
  (if (= :s/dnil value-2_3984)
    value-1_3983
    (let [value-2-0_3985 (value-2_3984 0)
          value-2-1_3986 (value-2_3984 1)]
      [(if (= :s/dnil value-2-0_3985) (value-1_3983 0) value-2-0_3985)
       (if (= :s/dnil value-2-1_3986)
         (value-1_3983 1)
         value-2-1_3986)])))

(defn undiff-fixture [value-1_4021 value-2_4022]
  (if (= :s/dnil value-2_4022)
    value-1_4021
    (let [value-2-coords_4023 (:coords value-2_4022)
          value-2-user-data_4024 (:user-data value-2_4022)]
      {:coords
       (let [value-1-coords_4025 (:coords value-1_4021)]
         (if (= :s/dnil value-2-coords_4023)
           value-1-coords_4025
           (let [value-1-coords-vec_4029 (vec value-1-coords_4025)]
             (map-indexed
               (fn [index_4026 value-2-coords-item_4028]
                 (if-let [value-1-coords-item_4027 (get
                                                     value-1-coords-vec_4029
                                                     index_4026)]
                   (if (= :s/dnil value-2-coords-item_4028)
                     value-1-coords-item_4027
                     (undiff-coord
                       value-1-coords-item_4027
                       value-2-coords-item_4028))
                   value-2-coords-item_4028))
               value-2-coords_4023)))),
       :user-data
       (let [value-1-user-data_4030 (:user-data value-1_4021)]
         (if (= :s/dnil value-2-user-data_4024)
           value-1-user-data_4030
           (let [value-2-user-data-color_4031 (:color
                                                value-2-user-data_4024)]
             {:color
              (if (= :s/dnil value-2-user-data-color_4031)
                (:color value-1-user-data_4030)
                value-2-user-data-color_4031)})))})))

(defn undiff-snapshot [value-1_3999 value-2_4000]
  (if (= :s/dnil value-2_4000)
    value-1_3999
    (let [value-2-bodies_4001 (:bodies value-2_4000)
          value-2-time_4002 (:time value-2_4000)]
      {:bodies
       (let [value-1-bodies_4003 (:bodies value-1_3999)]
         (if (= :s/dnil value-2-bodies_4001)
           value-1-bodies_4003
           (let [value-1-bodies-vec_4007 (vec value-1-bodies_4003)]
             (map-indexed
               (fn [index_4004 value-2-bodies-item_4006]
                 (if-let [value-1-bodies-item_4005 (get
                                                     value-1-bodies-vec_4007
                                                     index_4004)]
                   (if (= :s/dnil value-2-bodies-item_4006)
                     value-1-bodies-item_4005
                     (undiff-body
                       value-1-bodies-item_4005
                       value-2-bodies-item_4006))
                   value-2-bodies-item_4006))
               value-2-bodies_4001)))),
       :time
       (if (= :s/dnil value-2-time_4002)
         (:time value-1_3999)
         value-2-time_4002)})))

