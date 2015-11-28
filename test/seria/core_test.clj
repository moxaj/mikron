(ns seria.core-test
  (:require [seria.config :refer [make-test-config]]
            [seria.core :refer [pack unpack diff undiff]]
            [seria.generate :refer [sample]]
            [midje.sweet :refer [facts]]))

(defn roundtrip [data schema config]
  (unpack (pack data schema config) config))

(defn schema-test [config-args]
  (facts
    (let [config (make-test-config :schemas config-args)]
      (doseq [data (sample 15 :x (:schemas config))]
        (roundtrip data :x config) => [:x data]))))

(defn schema-tests [arg]
  (every? true? (map schema-test arg)))

(def test-cases
  [
   ; Primitives
   {:x :byte}
   {:x :ubyte}
   {:x :short}
   {:x :ushort}
   {:x :int}
   {:x :uint}
   {:x :float}
   {:x :double}
   {:x :char}
   {:x :boolean}

   ; Advanceds
   {:x :string}
   {:x :long-string}
   {:x :keyword}
   {:x :symbol}
   {:x :any}

   ; Composites
   {:x [:list :byte]}
   {:x [:vector :int]}
   {:x [:set :short]}
   {:x [:sorted-set :boolean]}
   {:x [:map :byte :string]}
   {:x [:sorted-map :short :float]}

   ; Complex
   {:x [:list :y] :y [:tuple [:int :int]]}
   {:x [:optional :byte]}
   {:x [:enum [:cat :dog :measurement :error]]}
   {:x [:tuple [:int :float [:tuple [:int :int]]]]}
   {:x [:record {:a :int :b :string :c [:tuple [:int :int]]}]}
   {:x [:multi number? {true :int false [:tuple [:int :int]]}]}

   ; Custom
   {:x [:list :y]
    :y [:record {:a :int
                 :b :string
                 :c [:tuple [:float :float :float]]
                 :d [:list :int]}]}
   ; Box2d
   {:body     [:record {:delta {:enabled true}}
               {:user-data [:record {:id :int}]
                :position  :coord
                :angle     :float
                :body-type [:enum [:dynamic :static :kinetic]]
                :fixtures  [:list :fixture]}]
    :fixture  [:record {:delta {:enabled true}}
               {:user-data [:record {:color :int}]
                :coords    [:list :coord]}]
    :coord    [:tuple [:float :float]]
    :snapshot [:record {:delta {:enabled true}}
               {:time   :int
                :bodies [:list :body]}]
    :x        :snapshot}])

(schema-tests test-cases)