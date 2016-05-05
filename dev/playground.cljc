(ns playground
  (:require [criterium.core :as crit]
            [seria.processor :as p]
            [seria.core :as seria]))

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
                       :bodies [:list :body]}]

   :date     [:wrapped {:pre  (fn [] 1)
                        :post (fn [] 2)}
              :long]})

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

(seria/defprocessors [pack unpack gen]
   {:schemas {:x    :byte
              :meta [:record {:a :int :b :string}]}})

(let [x    10
      meta (gen :meta)]
  (unpack (pack :x x)))


(clojure.walk/macroexpand-all
  '(seria.processor/make-processors {:schemas {:x :int}}))

(macroexpand '(cond-> {} u (assoc v) x (assoc y)))

(let [{:keys [validate gen]}
      (seria.core/make-test-processors
       {:schemas {:body     [:record {:user-data [:record {:id :int}]
                                      :position  :coord
                                      :angle     :float
                                      :body-type [:enum [:dynamic :static :kinetic]]
                                      :fixtures  [:list :fixture]}]
                  :fixture  [:record {:user-data [:record {:color :int}]
                                      :coords    [:list :coord]}]
                  :coord    [:tuple [:float :float]]
                  :snapshot [:record {:time   :long
                                      :bodies [:list :body]}]
                  :x        :snapshot}})]
  (let [value (gen :x)]))

(defn int->string [n]
  (str n))

(defn string->int [s]
  (Integer/parseInt s))

(let [{:keys [pack gen unpack]}
      (seria/make-test-processors
        {:schemas {:x [:wrapped {:pre  'playground/string->int
                                 :post 'playground/int->string}
                       :int]}})]
  (->> (gen :x)
       (pack :x)
       (unpack)))
