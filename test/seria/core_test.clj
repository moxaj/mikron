(ns seria.core-test
  (:require [clojure.test :refer :all]
            [seria.core :refer :all]))

(defn roundtrip [data schema config]
  (deserialize (serialize data schema config) config))

(defn same-after-roundtrip? [data schema config]
  (= data (roundtrip data schema config)))

(deftest primitive-test
  (let [config (make-config {:byte    :byte
                             :short   :short
                             :int     :int
                             :float   :float
                             :double  :double
                             :char    :char
                             :boolean :boolean})]
    (doseq [[schema data] [[:byte (byte 10)]
                           [:short (short 3000)]
                           [:int (int -234)]
                           [:float (float 3.123)]
                           [:double (double 1231)]
                           [:char \u]
                           [:boolean true]
                           [:boolean false]]]
      (testing (str "Schema: " schema ", data: " data)
        (is (same-after-roundtrip? data schema config))))))

(deftest booleans-test
  (let [config (make-config {:booleans [:vector :boolean]})]
    (doseq [data (for [data-count (range 1 127)]
                   (repeatedly data-count #(< 0.5 (rand))))]
      (testing (str (count data) " booleans")
        (is (same-after-roundtrip? data :booleans config))))))

(deftest sorted-test
  (let [config (make-config {:my-set [:sorted-set :int]
                             :my-map [:map [:tuple :int :int] :double]})
        data-1 (into (sorted-set) (range 100))
        data-2 (into (sorted-map) (mapv vector
                                        (map-indexed vector (range 100))
                                        (map double (range 100))))]
    (testing "Sorted-set"
      (is (same-after-roundtrip? data-1 :my-set config)))
    (testing "Sorted-map"
      (is (same-after-roundtrip? data-2 :my-map config)))))

(run-tests)