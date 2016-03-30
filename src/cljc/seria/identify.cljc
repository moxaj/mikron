(ns seria.identify
  "Identifier function generation.")

(comment
  {:body     [:record {:user-data [:record {:id :int}]
                       :position  :coord
                       :angle     :float
                       :body-type [:enum [:dynamic :static :kinetic]]
                       :fixtures  [:list :fixture]}]
   :fixture  [:record {:user-data [:record {:color :int}]
                       :coords    [:list :coord]}]
   :coord    [:tuple [:float :float]]
   :snapshot [:record {:time   :long
                       :bodies [:list :body]}]}

  [:vector :x] [vector? x? x?]
  [:list :x ]  [list? x? x?]
  [:set :x]    [set? x? x?]

  [:tuple [:x1 :xn]]        [vector? x1? xn?]
  [:record {:k1 :x1 :kn :xn}] [map? x1? xn?])
