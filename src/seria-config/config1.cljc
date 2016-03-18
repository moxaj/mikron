(def config1
  :schemas   {:body     [:record {:diff :all}
                         {:user-data [:record {:id :int}]
                          :position  :coord
                          :angle     :float
                          :body-type [:enum [:dynamic :static :kinetic]]
                          :fixtures  [:list :fixture]}]
              :fixture  [:record {:diff :all}
                         {:user-data [:record {:color :int}]
                          :coords    [:list :coord]}]
              :coord    [:tuple [:float :float]]
              :snapshot [:record {:diff :all}
                         {:time   :int
                          :bodies [:list :body]}]
              :x        :snapshot})
