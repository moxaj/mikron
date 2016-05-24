(ns playground
  (:require [criterium.core :as crit]
            [mikron.core :as mikron])
  (:import [java.nio ByteBuffer]
           [java.nio.charset StandardCharsets]))

(def box2d-schemas
  {:body     [:record {:user-data [:record {:id :int}]
                       :position  :coord
                       :angle     :float
                       :body-type [:enum [:dynamic :static :kinetic]]
                       :fixtures  [:list :fixture]}]
   :fixture  [:record {:user-data [:record {:color :int}]
                       :coords    [:list :coord]}]
   :coord    [:tuple [:float :float]]
   :snapshot [:record {:time   :long
                       :bodies [:list :body]}]})

(def box2d-interp-routes
  {:snapshot {:time   true
              :bodies {:all true}}
   :body     {:position true
              :angle    true}
   :coord    {0 true
              1 true}})

(def box2d-diff-routes
  {:snapshot {:time   true
              :bodies {:all true}}
   :body     {:user-data {:id true}
              :body-type true
              :fixtures  {:all true}}
   :fixture  {:user-data {:color true}
              :coords    true}})

(mikron/defprocessors [gen validate]
  {:schemas {:body     [:record {:user-data [:record {:id :int}]
                                 :position  :coord
                                 :angle     :float
                                 :body-type [:enum [:dynamic :static :kinetic]]
                                 :fixtures  [:list :fixture]}]
             :fixture  [:record {:user-data [:record {:color :int}]
                                 :coords    [:list :coord]}]
             :coord    [:tuple [:float :float]]
             :snapshot [:record {:time   :long
                                 :bodies [:list :body]}]}})

(mikron/defprocessors [pack unpack gen validate]
  {:schemas {:image   [:record  {:uri    :string
                                 :title  [:optional :string]
                                 :width  :varint
                                 :height :varint
                                 :size   [:enum [:small :large]]}]
             :media   [:record {:uri       :string
                                :title     [:optional :string]
                                :width     :varint
                                :height    :varint
                                :format    :string
                                :duration  :long
                                :size      :long
                                :bitrate   :int
                                :persons   [:list :string]
                                :player    [:enum [:java :flash]]
                                :copyright [:optional :string]}]
             :content [:record {:images [:list :image]
                                :media  :media}]}})

(def content-value
  {:media  {:uri       "http://javaone.com/keynote.mpg"
            :title     "Javaone Keynote"
            :width     640
            :height    480
            :format    "video/mpg4"
            :duration  18000000
            :size      58982400
            :bitrate   262144
            :persons   ["Bill Gates" "Steve Jobs"]
            :player    :java
            :copyright nil}
   :images [{:uri    "http://javaone.com/keynote_large.jpg"
             :title  "Javaone Keynote"
             :width  1024
             :height 768
             :size   :large}
            {:uri    "http://javaone.com/keynote_small.jpg"
             :title  "Javaone Keynote"
             :width  320
             :height 240
             :size   :small}]})

(comment
  (crit/with-progress-reporting
    (crit/quick-bench
      (let [content-value
            {:media  {:uri       "http://javaone.com/keynote.mpg"
                      :title     "Javaone Keynote"
                      :width     640
                      :height    480
                      :format    "video/mpg4"
                      :duration  18000000
                      :size      58982400
                      :bitrate   262144
                      :persons   ["Bill Gates" "Steve Jobs"]
                      :player    :java
                      :copyright nil}
             :images [{:uri    "http://javaone.com/keynote_large.jpg"
                       :title  "Javaone Keynote"
                       :width  1024
                       :height 768
                       :size   :large}
                      {:uri    "http://javaone.com/keynote_small.jpg"
                       :title  "Javaone Keynote"
                       :width  320
                       :height 240
                       :size   :small}]}])))
  (crit/with-progress-reporting
    (crit/quick-bench
      (unpack (pack :content content-value))))
  nil)

(def schemas)
(let [{:keys [gen pack unpack]} (mikron/make-processors {:schemas {:x :int}})]
  (->> (gen :x)
       (pack :x)
       (unpack)))
