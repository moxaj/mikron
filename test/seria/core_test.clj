(ns seria.core-test
  (:require [clojure.test :refer :all]
            [seria.core :refer :all]
            [seria.utils :refer :all]
            [seria.analyze :refer :all]))

(comment
  "to-test"
  :string :long-string :keyword :date

  :list :vector :set :sorted-set :map :sorted-map
  :tuple :record :optional :multi)

(defn roundtrip [data schema config]
  (deserialize (serialize data schema config) config))

(defn equal-after-roundtrip? [data schema config]
  (= data (roundtrip data schema config)))

(deftest disj-composite-test
  (doseq [[test-case expected]
          {[:set]                                [:set {} []]
           [:set {}]                             [:set {} []]
           [:set []]                             [:set {} []]
           [:set {} []]                          [:set {} []]
           [:set :int]                           [:set {} [:int]]
           [:set {} :int]                        [:set {} [:int]]
           [:set [:int]]                         [:set {} [:int]]
           [:set {} [:int]]                      [:set {} [:int]]
           [:set [:list :int]]                   [:set {} [[:list :int]]]
           [:set {} [:list :int]]                [:set {} [[:list :int]]]
           [:set [[:list :int]]]                 [:set {} [[:list :int]]]
           [:set {} [[:list :int]]]              [:set {} [[:list :int]]]
           [:set :int :int]                      [:set {} [:int :int]]
           [:set {} :int :int]                   [:set {} [:int :int]]
           [:set [:int :int]]                    [:set {} [:int :int]]
           [:set {} [:int :int]]                 [:set {} [:int :int]]
           [:set [[:list :int] [:list :int]]]    [:set {} [[:list :int] [:list :int]]]
           [:set {} [[:list :int] [:list :int]]] [:set {} [[:list :int] [:list :int]]]}]
    (testing (str "Does " test-case " disjoin into " expected "?")
      (is (= (disj-composite test-case) expected)))))

(deftest primitive-test
  (let [config (make-config {:my-byte    :byte
                             :my-short   :short
                             :my-int     :int
                             :my-float   :float
                             :my-double  :double
                             :my-char    :char
                             :my-boolean :boolean})]
    (doseq [[schema data] {:my-byte    (byte 10)
                           :my-short   (short 3000)
                           :my-int     (int -234)
                           :my-float   (float 3.123)
                           :my-double  (double 1231)
                           :my-char    \u
                           :my-boolean true}]
      (testing (str "Primitive: " schema ", data: " data)
        (is (equal-after-roundtrip? data schema config))))))

(deftest booleans-test
  (let [config (make-config {:my-booleans [:vector :boolean]})]
    (doseq [data (for [data-count (range 1 127)]
                   (repeatedly data-count #(< 0.5 (rand))))]
      (testing (str (count data) " booleans")
        (is (equal-after-roundtrip? data :my-booleans config))))))

(deftest sorted-test
  (let [config (make-config {:my-set [:sorted-set :int]
                             :my-map [:map [:tuple :int :int] :double]})
        data-1 (into (sorted-set) (range 100))
        data-2 (into (sorted-map) (mapv vector
                                        (map-indexed vector (range 100))
                                        (map double (range 100))))]
    (testing "Sorted-set"
      (is (equal-after-roundtrip? data-1 :my-set config)))
    (testing "Sorted-map"
      (is (equal-after-roundtrip? data-2 :my-map config)))))

(deftest optional-test
  (let [config (make-config {:my-optional [:vector [:optional :int]]})
        data   (repeatedly 100 #(when (< (rand) 0.5) (rand-int 100)))]
    (testing "Optional ints"
      (is (equal-after-roundtrip? data :my-optional config)))))

(deftest multi-test
  (let [selector (fn [data] (if (vector? data) :v :nonv))
        config   (make-config {:my-multi [:vector [:multi selector
                                                   :v [:tuple :double :double]
                                                   :nonv :int]]})
        data     (repeatedly 100 #(if (< (rand) 0.5)
                                   [(rand) (rand)]
                                   (rand-int 100)))]
    (testing "Multis"
      (is (equal-after-roundtrip? data :my-multi config)))))

(deftest enum-test
  (let [config (make-config {:my-enums [:vector [:tuple
                                                 [:enum [:a :b]]
                                                 [:enum [:c :d]]]]})
        data   [[:a :c] [:a :d] [:b :c] [:b :d]]]
    (testing (str "Enums " data)
      (is (equal-after-roundtrip? data :my-enums config)))))

(run-tests)
