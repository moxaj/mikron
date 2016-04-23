(ns my.config
  "This namespace was automatically generated at 2016.04.23. 21:01."
  (:require [seria.buffer :refer [compress
                                  read-boolean!
                                  read-float!
                                  read-headers!
                                  read-int!
                                  read-long!
                                  read-varint!
                                  wrap
                                  write-boolean!
                                  write-float!
                                  write-headers!
                                  write-int!
                                  write-long!
                                  write-varint!]]
            [seria.codegen.gen :refer [gen-size random-integer]]
            [seria.codegen.interp :refer [interp-numbers]]
            [seria.util.common :refer [cljc-abs cljc-round]]))

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
 :interp {:snapshot {:time   +
                     :bodies {:all +}}
          :body     {:position +
                     :angle    +}
          :coord    {0 +
                     1 +}}
 :processors [:pack :diff :gen :interp]}

;; ============================================================================
;; Forward declarations
;; ============================================================================

(declare
  pack
  unpack
  pack-inner*-coord
  pack-coord
  unpack-inner*-coord
  diff-coord
  undiff-coord
  pack-diffed-inner*-coord
  unpack-diffed-inner*-coord
  gen-coord
  interp-coord
  pack-inner*-snapshot
  pack-snapshot
  unpack-inner*-snapshot
  diff-snapshot
  undiff-snapshot
  pack-diffed-inner*-snapshot
  unpack-diffed-inner*-snapshot
  gen-snapshot
  interp-snapshot
  pack-inner*-fixture
  pack-fixture
  unpack-inner*-fixture
  diff-fixture
  undiff-fixture
  pack-diffed-inner*-fixture
  unpack-diffed-inner*-fixture
  gen-fixture
  interp-fixture
  pack-inner*-body
  pack-body
  unpack-inner*-body
  diff-body
  undiff-body
  pack-diffed-inner*-body
  unpack-diffed-inner*-body
  gen-body
  interp-body)

;; ============================================================================
;; Private functions
;; ============================================================================

(defn ^{:private true} pack [value_3615
                             buffer_3616
                             schema-id_3617
                             diff-id_3618
                             diffed?_3619
                             pack-fn_3620]
  (-> buffer_3616
   (write-headers! schema-id_3617 diff-id_3618 diffed?_3619)
   (pack-fn_3620 value_3615)
   (compress)))

(defn ^{:private true} pack-diffed-inner*-body [buffer_4254 value_4253]
  (let [value-dnil?_4269 (= :dnil value_4253)]
    (write-boolean! buffer_4254 value-dnil?_4269)
    (when-not value-dnil?_4269
      (let [angle_4255 (:angle value_4253)
            body-type_4256 (:body-type value_4253)
            fixtures_4257 (:fixtures value_4253)
            position_4258 (:position value_4253)
            user-data_4259 (:user-data value_4253)]
        (let [angle-dnil?_4260 (= :dnil angle_4255)]
          (write-boolean! buffer_4254 angle-dnil?_4260)
          (when-not angle-dnil?_4260
            (write-float! buffer_4254 angle_4255)))
        (let [body-type-dnil?_4261 (= :dnil body-type_4256)]
          (write-boolean! buffer_4254 body-type-dnil?_4261)
          (when-not body-type-dnil?_4261
            (write-varint!
              buffer_4254
              (case body-type_4256 :dynamic 0 :static 1 :kinetic 2))))
        (let [fixtures-dnil?_4264 (= :dnil fixtures_4257)]
          (write-boolean! buffer_4254 fixtures-dnil?_4264)
          (when-not fixtures-dnil?_4264
            (write-varint! buffer_4254 (count fixtures_4257))
            (run!
              (fn [fixtures-item_4262]
                (let [fixtures-item-dnil?_4263 (=
                                                 :dnil
                                                 fixtures-item_4262)]
                  (write-boolean! buffer_4254 fixtures-item-dnil?_4263)
                  (when-not fixtures-item-dnil?_4263
                    (pack-diffed-inner*-fixture
                      buffer_4254
                      fixtures-item_4262))))
              fixtures_4257)))
        (let [position-dnil?_4265 (= :dnil position_4258)]
          (write-boolean! buffer_4254 position-dnil?_4265)
          (when-not position-dnil?_4265
            (pack-diffed-inner*-coord buffer_4254 position_4258)))
        (let [user-data-dnil?_4268 (= :dnil user-data_4259)]
          (write-boolean! buffer_4254 user-data-dnil?_4268)
          (when-not user-data-dnil?_4268
            (let [id_4266 (:id user-data_4259)]
              (let [id-dnil?_4267 (= :dnil id_4266)]
                (write-boolean! buffer_4254 id-dnil?_4267)
                (when-not id-dnil?_4267
                  (write-int! buffer_4254 id_4266)))))))))
  buffer_4254)

(defn ^{:private true} pack-diffed-inner*-coord [buffer_4076
                                                 value_4075]
  (let [value-dnil?_4081 (= :dnil value_4075)]
    (write-boolean! buffer_4076 value-dnil?_4081)
    (when-not value-dnil?_4081
      (let [value-0_4077 (value_4075 0) value-1_4078 (value_4075 1)]
        (let [value-0-dnil?_4079 (= :dnil value-0_4077)]
          (write-boolean! buffer_4076 value-0-dnil?_4079)
          (when-not value-0-dnil?_4079
            (write-float! buffer_4076 value-0_4077)))
        (let [value-1-dnil?_4080 (= :dnil value-1_4078)]
          (write-boolean! buffer_4076 value-1-dnil?_4080)
          (when-not value-1-dnil?_4080
            (write-float! buffer_4076 value-1_4078))))))
  buffer_4076)

(defn ^{:private true} pack-diffed-inner*-fixture [buffer_4185
                                                   value_4184]
  (let [value-dnil?_4194 (= :dnil value_4184)]
    (write-boolean! buffer_4185 value-dnil?_4194)
    (when-not value-dnil?_4194
      (let [coords_4186 (:coords value_4184)
            user-data_4187 (:user-data value_4184)]
        (let [coords-dnil?_4190 (= :dnil coords_4186)]
          (write-boolean! buffer_4185 coords-dnil?_4190)
          (when-not coords-dnil?_4190
            (write-varint! buffer_4185 (count coords_4186))
            (run!
              (fn [coords-item_4188]
                (let [coords-item-dnil?_4189 (=
                                               :dnil
                                               coords-item_4188)]
                  (write-boolean! buffer_4185 coords-item-dnil?_4189)
                  (when-not coords-item-dnil?_4189
                    (pack-diffed-inner*-coord
                      buffer_4185
                      coords-item_4188))))
              coords_4186)))
        (let [user-data-dnil?_4193 (= :dnil user-data_4187)]
          (write-boolean! buffer_4185 user-data-dnil?_4193)
          (when-not user-data-dnil?_4193
            (let [color_4191 (:color user-data_4187)]
              (let [color-dnil?_4192 (= :dnil color_4191)]
                (write-boolean! buffer_4185 color-dnil?_4192)
                (when-not color-dnil?_4192
                  (write-int! buffer_4185 color_4191)))))))))
  buffer_4185)

(defn ^{:private true} pack-diffed-inner*-snapshot [buffer_4125
                                                    value_4124]
  (let [value-dnil?_4132 (= :dnil value_4124)]
    (write-boolean! buffer_4125 value-dnil?_4132)
    (when-not value-dnil?_4132
      (let [bodies_4126 (:bodies value_4124)
            time_4127 (:time value_4124)]
        (let [bodies-dnil?_4130 (= :dnil bodies_4126)]
          (write-boolean! buffer_4125 bodies-dnil?_4130)
          (when-not bodies-dnil?_4130
            (write-varint! buffer_4125 (count bodies_4126))
            (run!
              (fn [bodies-item_4128]
                (let [bodies-item-dnil?_4129 (=
                                               :dnil
                                               bodies-item_4128)]
                  (write-boolean! buffer_4125 bodies-item-dnil?_4129)
                  (when-not bodies-item-dnil?_4129
                    (pack-diffed-inner*-body
                      buffer_4125
                      bodies-item_4128))))
              bodies_4126)))
        (let [time-dnil?_4131 (= :dnil time_4127)]
          (write-boolean! buffer_4125 time-dnil?_4131)
          (when-not time-dnil?_4131
            (write-long! buffer_4125 time_4127))))))
  buffer_4125)

(defn ^{:private true} pack-inner*-body [buffer_4204 value_4203]
  (let [fixtures_4207 (:fixtures value_4203)]
    (write-float! buffer_4204 (:angle value_4203))
    (write-varint!
      buffer_4204
      (case (:body-type value_4203) :dynamic 0 :static 1 :kinetic 2))
    (write-varint! buffer_4204 (count fixtures_4207))
    (run!
      (fn [fixtures-item_4210]
        (pack-inner*-fixture buffer_4204 fixtures-item_4210))
      fixtures_4207)
    (pack-inner*-coord buffer_4204 (:position value_4203))
    (write-int! buffer_4204 (:id (:user-data value_4203))))
  buffer_4204)

(defn ^{:private true} pack-inner*-coord [buffer_4055 value_4054]
  (write-float! buffer_4055 (value_4054 0))
  (write-float! buffer_4055 (value_4054 1))
  buffer_4055)

(defn ^{:private true} pack-inner*-fixture [buffer_4150 value_4149]
  (let [coords_4151 (:coords value_4149)]
    (write-varint! buffer_4150 (count coords_4151))
    (run!
      (fn [coords-item_4153]
        (pack-inner*-coord buffer_4150 coords-item_4153))
      coords_4151)
    (write-int! buffer_4150 (:color (:user-data value_4149))))
  buffer_4150)

(defn ^{:private true} pack-inner*-snapshot [buffer_4095 value_4094]
  (let [bodies_4096 (:bodies value_4094)]
    (write-varint! buffer_4095 (count bodies_4096))
    (run!
      (fn [bodies-item_4098]
        (pack-inner*-body buffer_4095 bodies-item_4098))
      bodies_4096)
    (write-long! buffer_4095 (:time value_4094)))
  buffer_4095)

(defn ^{:private true} unpack-diffed-inner*-body [buffer_4270]
  (if (read-boolean! buffer_4270)
    :dnil
    {:angle
     (if (read-boolean! buffer_4270) :dnil (read-float! buffer_4270)),
     :body-type
     (if (read-boolean! buffer_4270)
       :dnil
       (get [:dynamic :static :kinetic] (read-varint! buffer_4270))),
     :fixtures
     (if (read-boolean! buffer_4270)
       :dnil
       (doall
         (repeatedly
           (read-varint! buffer_4270)
           (fn []
             (if (read-boolean! buffer_4270)
               :dnil
               (unpack-diffed-inner*-fixture buffer_4270)))))),
     :position
     (if (read-boolean! buffer_4270)
       :dnil
       (unpack-diffed-inner*-coord buffer_4270)),
     :user-data
     (if (read-boolean! buffer_4270)
       :dnil
       {:id
        (if (read-boolean! buffer_4270)
          :dnil
          (read-int! buffer_4270))})}))

(defn ^{:private true} unpack-diffed-inner*-coord [buffer_4082]
  (if (read-boolean! buffer_4082)
    :dnil
    [(if (read-boolean! buffer_4082) :dnil (read-float! buffer_4082))
     (if (read-boolean! buffer_4082)
       :dnil
       (read-float! buffer_4082))]))

(defn ^{:private true} unpack-diffed-inner*-fixture [buffer_4195]
  (if (read-boolean! buffer_4195)
    :dnil
    {:coords
     (if (read-boolean! buffer_4195)
       :dnil
       (doall
         (repeatedly
           (read-varint! buffer_4195)
           (fn []
             (if (read-boolean! buffer_4195)
               :dnil
               (unpack-diffed-inner*-coord buffer_4195)))))),
     :user-data
     (if (read-boolean! buffer_4195)
       :dnil
       {:color
        (if (read-boolean! buffer_4195)
          :dnil
          (read-int! buffer_4195))})}))

(defn ^{:private true} unpack-diffed-inner*-snapshot [buffer_4133]
  (if (read-boolean! buffer_4133)
    :dnil
    {:bodies
     (if (read-boolean! buffer_4133)
       :dnil
       (doall
         (repeatedly
           (read-varint! buffer_4133)
           (fn []
             (if (read-boolean! buffer_4133)
               :dnil
               (unpack-diffed-inner*-body buffer_4133)))))),
     :time
     (if (read-boolean! buffer_4133) :dnil (read-long! buffer_4133))}))

(defn ^{:private true} unpack-inner*-body [buffer_4216]
  {:angle (read-float! buffer_4216),
   :body-type
   (get [:dynamic :static :kinetic] (read-varint! buffer_4216)),
   :fixtures
   (doall
     (repeatedly
       (read-varint! buffer_4216)
       (fn [] (unpack-inner*-fixture buffer_4216)))),
   :position (unpack-inner*-coord buffer_4216),
   :user-data {:id (read-int! buffer_4216)}})

(defn ^{:private true} unpack-inner*-coord [buffer_4062]
  [(read-float! buffer_4062) (read-float! buffer_4062)])

(defn ^{:private true} unpack-inner*-fixture [buffer_4159]
  {:coords
   (doall
     (repeatedly
       (read-varint! buffer_4159)
       (fn [] (unpack-inner*-coord buffer_4159)))),
   :user-data {:color (read-int! buffer_4159)}})

(defn ^{:private true} unpack-inner*-snapshot [buffer_4103]
  {:bodies
   (doall
     (repeatedly
       (read-varint! buffer_4103)
       (fn [] (unpack-inner*-body buffer_4103)))),
   :time (read-long! buffer_4103)})

;; ============================================================================
;; Public functions
;; ============================================================================

(defn diff-body [value-1_4217 value-2_4218]
  (if (= value-1_4217 value-2_4218)
    :dnil
    (let [value-2-angle_4219 (:angle value-2_4218)
          value-2-body-type_4220 (:body-type value-2_4218)
          value-2-fixtures_4221 (:fixtures value-2_4218)
          value-2-position_4222 (:position value-2_4218)
          value-2-user-data_4223 (:user-data value-2_4218)]
      {:angle
       (if (= (:angle value-1_4217) value-2-angle_4219)
         :dnil
         value-2-angle_4219),
       :body-type
       (if (= (:body-type value-1_4217) value-2-body-type_4220)
         :dnil
         value-2-body-type_4220),
       :fixtures
       (let [value-1-fixtures_4226 (:fixtures value-1_4217)]
         (if (= value-1-fixtures_4226 value-2-fixtures_4221)
           :dnil
           (let [value-1-fixtures-vec_4230 (vec value-1-fixtures_4226)]
             (map-indexed
               (fn [index_4227 value-2-fixtures-item_4229]
                 (if-let [value-1-fixtures-item_4228 (get
                                                       value-1-fixtures-vec_4230
                                                       index_4227)]
                   (if (=
                         value-1-fixtures-item_4228
                         value-2-fixtures-item_4229)
                     :dnil
                     (diff-fixture
                       value-1-fixtures-item_4228
                       value-2-fixtures-item_4229))
                   value-2-fixtures-item_4229))
               value-2-fixtures_4221)))),
       :position
       (let [value-1-position_4231 (:position value-1_4217)]
         (if (= value-1-position_4231 value-2-position_4222)
           :dnil
           (diff-coord value-1-position_4231 value-2-position_4222))),
       :user-data
       (let [value-1-user-data_4232 (:user-data value-1_4217)]
         (if (= value-1-user-data_4232 value-2-user-data_4223)
           :dnil
           (let [value-2-user-data-id_4233 (:id
                                             value-2-user-data_4223)]
             {:id
              (if (=
                    (:id value-1-user-data_4232)
                    value-2-user-data-id_4233)
                :dnil
                value-2-user-data-id_4233)})))})))

(defn diff-coord [value-1_4063 value-2_4064]
  (if (= value-1_4063 value-2_4064)
    :dnil
    (let [value-2-0_4065 (value-2_4064 0)
          value-2-1_4066 (value-2_4064 1)]
      [(if (= (value-1_4063 0) value-2-0_4065) :dnil value-2-0_4065)
       (if (= (value-1_4063 1) value-2-1_4066)
         :dnil
         value-2-1_4066)])))

(defn diff-fixture [value-1_4160 value-2_4161]
  (if (= value-1_4160 value-2_4161)
    :dnil
    (let [value-2-coords_4162 (:coords value-2_4161)
          value-2-user-data_4163 (:user-data value-2_4161)]
      {:coords
       (let [value-1-coords_4164 (:coords value-1_4160)]
         (if (= value-1-coords_4164 value-2-coords_4162)
           :dnil
           (let [value-1-coords-vec_4168 (vec value-1-coords_4164)]
             (map-indexed
               (fn [index_4165 value-2-coords-item_4167]
                 (if-let [value-1-coords-item_4166 (get
                                                     value-1-coords-vec_4168
                                                     index_4165)]
                   (if (=
                         value-1-coords-item_4166
                         value-2-coords-item_4167)
                     :dnil
                     (diff-coord
                       value-1-coords-item_4166
                       value-2-coords-item_4167))
                   value-2-coords-item_4167))
               value-2-coords_4162)))),
       :user-data
       (let [value-1-user-data_4169 (:user-data value-1_4160)]
         (if (= value-1-user-data_4169 value-2-user-data_4163)
           :dnil
           (let [value-2-user-data-color_4170 (:color
                                                value-2-user-data_4163)]
             {:color
              (if (=
                    (:color value-1-user-data_4169)
                    value-2-user-data-color_4170)
                :dnil
                value-2-user-data-color_4170)})))})))

(defn diff-snapshot [value-1_4104 value-2_4105]
  (if (= value-1_4104 value-2_4105)
    :dnil
    (let [value-2-bodies_4106 (:bodies value-2_4105)
          value-2-time_4107 (:time value-2_4105)]
      {:bodies
       (let [value-1-bodies_4108 (:bodies value-1_4104)]
         (if (= value-1-bodies_4108 value-2-bodies_4106)
           :dnil
           (let [value-1-bodies-vec_4112 (vec value-1-bodies_4108)]
             (map-indexed
               (fn [index_4109 value-2-bodies-item_4111]
                 (if-let [value-1-bodies-item_4110 (get
                                                     value-1-bodies-vec_4112
                                                     index_4109)]
                   (if (=
                         value-1-bodies-item_4110
                         value-2-bodies-item_4111)
                     :dnil
                     (diff-body
                       value-1-bodies-item_4110
                       value-2-bodies-item_4111))
                   value-2-bodies-item_4111))
               value-2-bodies_4106)))),
       :time
       (if (= (:time value-1_4104) value-2-time_4107)
         :dnil
         value-2-time_4107)})))

(defn gen-body []
  {:body-type (rand-nth [:dynamic :static :kinetic]),
   :angle (float (rand)),
   :user-data {:id (random-integer 4 true)},
   :fixtures (repeatedly (gen-size) (fn [] (gen-fixture))),
   :position (gen-coord)})

(defn gen-coord [] [(float (rand)) (float (rand))])

(defn gen-fixture []
  {:coords (repeatedly (gen-size) (fn [] (gen-coord))),
   :user-data {:color (random-integer 4 true)}})

(defn gen-snapshot []
  {:time (random-integer 8 true),
   :bodies (repeatedly (gen-size) (fn [] (gen-body)))})

(defn interp-body [value-1_4271
                   value-2_4272
                   time-1_4273
                   time-2_4274
                   time_4275]
  (let [prefer-first?_4276 (<
                             (cljc-abs (- time_4275 time-1_4273))
                             (cljc-abs (- time_4275 time-2_4274)))]
    (if (= value-1_4271 value-2_4272)
      value-1_4271
      (let [value-2-angle_4278 (:angle value-2_4272)
            value-2-position_4281 (:position value-2_4272)]
        {:angle
         (let [value-1-angle_4283 (:angle value-1_4271)]
           (if (= value-1-angle_4283 value-2-angle_4278)
             value-1-angle_4283
             (interp-numbers
               value-1-angle_4283
               value-2-angle_4278
               (/
                 (- time_4275 time-1_4273)
                 (- time-2_4274 time-1_4273))))),
         :body-type
         (if prefer-first?_4276
           (:body-type value-1_4271)
           (:body-type value-2_4272)),
         :fixtures
         (if prefer-first?_4276
           (:fixtures value-1_4271)
           (:fixtures value-2_4272)),
         :position
         (let [value-1-position_4286 (:position value-1_4271)]
           (if (= value-1-position_4286 value-2-position_4281)
             value-1-position_4286
             (interp-coord
               value-1-position_4286
               value-2-position_4281
               time-1_4273
               time-2_4274
               time_4275))),
         :user-data
         (if prefer-first?_4276
           (:user-data value-1_4271)
           (:user-data value-2_4272))}))))

(defn interp-coord [value-1_4083
                    value-2_4084
                    time-1_4085
                    time-2_4086
                    time_4087]
  (let [time-factor_4089 (/
                           (- time_4087 time-1_4085)
                           (- time-2_4086 time-1_4085))]
    (if (= value-1_4083 value-2_4084)
      value-1_4083
      (let [value-2-0_4090 (value-2_4084 0)
            value-2-1_4091 (value-2_4084 1)]
        [(let [value-1-0_4092 (value-1_4083 0)]
           (if (= value-1-0_4092 value-2-0_4090)
             value-1-0_4092
             (interp-numbers
               value-1-0_4092
               value-2-0_4090
               time-factor_4089)))
         (let [value-1-1_4093 (value-1_4083 1)]
           (if (= value-1-1_4093 value-2-1_4091)
             value-1-1_4093
             (interp-numbers
               value-1-1_4093
               value-2-1_4091
               time-factor_4089)))]))))

(defn interp-fixture [value-1_4196
                      value-2_4197
                      time-1_4198
                      time-2_4199
                      time_4200]
  (if (= value-1_4196 value-2_4197)
    value-1_4196
    (if (<
          (cljc-abs (- time_4200 time-1_4198))
          (cljc-abs (- time_4200 time-2_4199)))
      value-1_4196
      value-2_4197)))

(defn interp-snapshot [value-1_4134
                       value-2_4135
                       time-1_4136
                       time-2_4137
                       time_4138]
  (if (= value-1_4134 value-2_4135)
    value-1_4134
    (let [value-2-bodies_4141 (:bodies value-2_4135)
          value-2-time_4142 (:time value-2_4135)]
      {:bodies
       (let [value-1-bodies_4143 (:bodies value-1_4134)]
         (if (= value-1-bodies_4143 value-2-bodies_4141)
           value-1-bodies_4143
           (let [value-1-bodies-vec_4144 (vec value-1-bodies_4143)]
             (vec
               (map-indexed
                 (fn [index_4145 value-2-bodies-item_4147]
                   (if-let [value-1-bodies-vec-item_4146 (get
                                                           value-1-bodies-vec_4144
                                                           index_4145)]
                     (if (=
                           value-1-bodies-vec-item_4146
                           value-2-bodies-item_4147)
                       value-1-bodies-vec-item_4146
                       (interp-body
                         value-1-bodies-vec-item_4146
                         value-2-bodies-item_4147
                         time-1_4136
                         time-2_4137
                         time_4138))
                     value-2-bodies-item_4147))
                 value-2-bodies_4141))))),
       :time
       (let [value-1-time_4148 (:time value-1_4134)]
         (if (= value-1-time_4148 value-2-time_4142)
           value-1-time_4148
           (cljc-round
             (interp-numbers
               value-1-time_4148
               value-2-time_4142
               (/
                 (- time_4138 time-1_4136)
                 (- time-2_4137 time-1_4136))))))})))

(defn pack-body
  ([value_4212 buffer_4213] (pack-body value_4212 buffer_4213 0 false))
  ([value_4212 buffer_4213 diff-id_4214]
   (pack-body value_4212 diff-id_4214 false))
  ([value_4212 buffer_4213 diff-id_4214 diffed?_4215]
   (pack
     value_4212
     buffer_4213
     0
     diff-id_4214
     diffed?_4215
     (if diffed?_4215 pack-diffed-inner*-body pack-inner*-body))))

(defn pack-coord
  ([value_4058 buffer_4059]
   (pack-coord value_4058 buffer_4059 0 false))
  ([value_4058 buffer_4059 diff-id_4060]
   (pack-coord value_4058 diff-id_4060 false))
  ([value_4058 buffer_4059 diff-id_4060 diffed?_4061]
   (pack
     value_4058
     buffer_4059
     1
     diff-id_4060
     diffed?_4061
     (if diffed?_4061 pack-diffed-inner*-coord pack-inner*-coord))))

(defn pack-fixture
  ([value_4155 buffer_4156]
   (pack-fixture value_4155 buffer_4156 0 false))
  ([value_4155 buffer_4156 diff-id_4157]
   (pack-fixture value_4155 diff-id_4157 false))
  ([value_4155 buffer_4156 diff-id_4157 diffed?_4158]
   (pack
     value_4155
     buffer_4156
     2
     diff-id_4157
     diffed?_4158
     (if diffed?_4158
       pack-diffed-inner*-fixture
       pack-inner*-fixture))))

(defn pack-snapshot
  ([value_4099 buffer_4100]
   (pack-snapshot value_4099 buffer_4100 0 false))
  ([value_4099 buffer_4100 diff-id_4101]
   (pack-snapshot value_4099 diff-id_4101 false))
  ([value_4099 buffer_4100 diff-id_4101 diffed?_4102]
   (pack
     value_4099
     buffer_4100
     3
     diff-id_4101
     diffed?_4102
     (if diffed?_4102
       pack-diffed-inner*-snapshot
       pack-inner*-snapshot))))

(defn undiff-body [value-1_4235 value-2_4236]
  (if (= :dnil value-2_4236)
    value-1_4235
    (let [value-2-angle_4237 (:angle value-2_4236)
          value-2-body-type_4238 (:body-type value-2_4236)
          value-2-fixtures_4239 (:fixtures value-2_4236)
          value-2-position_4240 (:position value-2_4236)
          value-2-user-data_4241 (:user-data value-2_4236)]
      {:angle
       (if (= :dnil value-2-angle_4237)
         (:angle value-1_4235)
         value-2-angle_4237),
       :body-type
       (if (= :dnil value-2-body-type_4238)
         (:body-type value-1_4235)
         value-2-body-type_4238),
       :fixtures
       (let [value-1-fixtures_4244 (:fixtures value-1_4235)]
         (if (= :dnil value-2-fixtures_4239)
           value-1-fixtures_4244
           (let [value-1-fixtures-vec_4248 (vec value-1-fixtures_4244)]
             (map-indexed
               (fn [index_4245 value-2-fixtures-item_4247]
                 (if-let [value-1-fixtures-item_4246 (get
                                                       value-1-fixtures-vec_4248
                                                       index_4245)]
                   (if (= :dnil value-2-fixtures-item_4247)
                     value-1-fixtures-item_4246
                     (undiff-fixture
                       value-1-fixtures-item_4246
                       value-2-fixtures-item_4247))
                   value-2-fixtures-item_4247))
               value-2-fixtures_4239)))),
       :position
       (let [value-1-position_4249 (:position value-1_4235)]
         (if (= :dnil value-2-position_4240)
           value-1-position_4249
           (undiff-coord
             value-1-position_4249
             value-2-position_4240))),
       :user-data
       (let [value-1-user-data_4250 (:user-data value-1_4235)]
         (if (= :dnil value-2-user-data_4241)
           value-1-user-data_4250
           (let [value-2-user-data-id_4251 (:id
                                             value-2-user-data_4241)]
             {:id
              (if (= :dnil value-2-user-data-id_4251)
                (:id value-1-user-data_4250)
                value-2-user-data-id_4251)})))})))

(defn undiff-coord [value-1_4069 value-2_4070]
  (if (= :dnil value-2_4070)
    value-1_4069
    (let [value-2-0_4071 (value-2_4070 0)
          value-2-1_4072 (value-2_4070 1)]
      [(if (= :dnil value-2-0_4071) (value-1_4069 0) value-2-0_4071)
       (if (= :dnil value-2-1_4072)
         (value-1_4069 1)
         value-2-1_4072)])))

(defn undiff-fixture [value-1_4172 value-2_4173]
  (if (= :dnil value-2_4173)
    value-1_4172
    (let [value-2-coords_4174 (:coords value-2_4173)
          value-2-user-data_4175 (:user-data value-2_4173)]
      {:coords
       (let [value-1-coords_4176 (:coords value-1_4172)]
         (if (= :dnil value-2-coords_4174)
           value-1-coords_4176
           (let [value-1-coords-vec_4180 (vec value-1-coords_4176)]
             (map-indexed
               (fn [index_4177 value-2-coords-item_4179]
                 (if-let [value-1-coords-item_4178 (get
                                                     value-1-coords-vec_4180
                                                     index_4177)]
                   (if (= :dnil value-2-coords-item_4179)
                     value-1-coords-item_4178
                     (undiff-coord
                       value-1-coords-item_4178
                       value-2-coords-item_4179))
                   value-2-coords-item_4179))
               value-2-coords_4174)))),
       :user-data
       (let [value-1-user-data_4181 (:user-data value-1_4172)]
         (if (= :dnil value-2-user-data_4175)
           value-1-user-data_4181
           (let [value-2-user-data-color_4182 (:color
                                                value-2-user-data_4175)]
             {:color
              (if (= :dnil value-2-user-data-color_4182)
                (:color value-1-user-data_4181)
                value-2-user-data-color_4182)})))})))

(defn undiff-snapshot [value-1_4114 value-2_4115]
  (if (= :dnil value-2_4115)
    value-1_4114
    (let [value-2-bodies_4116 (:bodies value-2_4115)
          value-2-time_4117 (:time value-2_4115)]
      {:bodies
       (let [value-1-bodies_4118 (:bodies value-1_4114)]
         (if (= :dnil value-2-bodies_4116)
           value-1-bodies_4118
           (let [value-1-bodies-vec_4122 (vec value-1-bodies_4118)]
             (map-indexed
               (fn [index_4119 value-2-bodies-item_4121]
                 (if-let [value-1-bodies-item_4120 (get
                                                     value-1-bodies-vec_4122
                                                     index_4119)]
                   (if (= :dnil value-2-bodies-item_4121)
                     value-1-bodies-item_4120
                     (undiff-body
                       value-1-bodies-item_4120
                       value-2-bodies-item_4121))
                   value-2-bodies-item_4121))
               value-2-bodies_4116)))),
       :time
       (if (= :dnil value-2-time_4117)
         (:time value-1_4114)
         value-2-time_4117)})))

(defn unpack [raw_4047]
  (let [buffer_4048 (wrap raw_4047)
        headers_4049 (read-headers! buffer_4048)
        schema_4052 (get
                      [:body :coord :fixture :snapshot]
                      (:schema-id headers_4049))]
    (if-not schema_4052
      :invalid
      {:schema schema_4052,
       :diffed? (:diffed? headers_4049),
       :value
       ((case
          schema_4052
          :coord
          (if (:diffed headers_4049)
            unpack-diffed-inner*-coord
            unpack-inner*-coord)
          :snapshot
          (if (:diffed headers_4049)
            unpack-diffed-inner*-snapshot
            unpack-inner*-snapshot)
          :fixture
          (if (:diffed headers_4049)
            unpack-diffed-inner*-fixture
            unpack-inner*-fixture)
          :body
          (if (:diffed headers_4049)
            unpack-diffed-inner*-body
            unpack-inner*-body))
        buffer_4048),
       :diff-id (:diff-id headers_4049)})))
