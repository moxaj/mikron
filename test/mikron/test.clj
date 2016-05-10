(ns mikron.test
  (:import [java.util Arrays])
  (:require [clojure.test :refer [deftest is]]
            [mikron.processor :refer [make-test-processors]]))

(defn pack-roundtrip [value {:keys [pack unpack]}]
  (unpack (pack :x value)))

(defn test-pack-case [schemas]
  (let [{:keys [gen] :as processors} (make-test-processors {:schemas schemas})]
    (doseq [value (repeatedly 10 #(gen :x))]
      (is (= {:schema :x :diffed? false :value value}
             (pack-roundtrip value processors))))))

(deftest simple-test
  (doseq [schema [:byte :ubyte :short :ushort :int :uint :long
                  :varint :float :double :boolean :char
                  :string :keyword :symbol :any :nil :date]]
    (test-pack-case {:x schema})))

(defn int->string [n]
  (str n))

(defn string->int [s]
  (Integer/parseInt s))

(deftest raw-test
  (let [{:keys [pack unpack gen]} (make-test-processors {:schemas {:x :raw}})]
    (doseq [value (repeatedly 10 #(gen :x))]
      (is (Arrays/equals ^bytes value
                         ^bytes (->> value (pack :x) (unpack) :value))))))

(deftest complex-test
  (doseq [schema [[:list :byte]
                  [:vector :int]
                  [:set :short]
                  [:set {:sorted-by :default} :short]
                  [:set {:sorted-by ''clojure.core/>} :int]
                  [:map :byte :string]
                  [:map {:sorted-by :default} :byte :string]
                  [:map {:sorted-by ''clojure.core/>} :byte :string]
                  [:optional :byte]
                  [:enum [:cat :dog :measurement :error]]
                  [:tuple [:int :float :double]]
                  [:record {:a :int :b :string :c :byte}]
                  [:multi ''clojure.core/number? {true :int false :string}]
                  [:wrapped {:pre  ''mikron.test/string->int
                             :post ''mikron.test/int->string}
                   :int]]]
    (test-pack-case {:x schema})))

(deftest custom-test
  (doseq [schemas [{:x [:list :y]
                    :y [:tuple [:int :int]]}
                   {:x [:list :y]
                    :y [:record {:a :int
                                 :b :string
                                 :c [:tuple [:float :float :float]]
                                 :d [:list :int]}]}
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
                    :x        :snapshot}]]
    (test-pack-case schemas)))

(deftest meta-schema-test
  (let [{:keys [pack unpack gen]} (make-test-processors
                                    {:schemas {:x [:record {:a :int :b :byte :c :string}]}})
        value-1 (gen :x)
        meta-1  (gen :x)
        {:keys [schema value meta-schema meta-value]} (unpack (pack :x value-1 :x meta-1))]
    (is (= [:x value-1 :x meta-1]
           [schema value meta-schema meta-value]))))

(defn diff-roundtrip [value-1 value-2 {:keys [diff undiff]}]
  (undiff :x value-1 (diff :x value-1 value-2)))

(defn test-diff-case [schemas]
  (let [{:keys [gen] :as processors}
        (make-test-processors {:schemas schemas})]
    (doseq [[value-1 value-2] (partition 2 (repeatedly 20 #(gen :x)))]
      (is (= value-2 (diff-roundtrip value-1 value-2 processors))))))

(deftest diff-test
  (doseq [schemas [{:x [:record {:a :int
                                 :b [:tuple [:y :y :y :y]]}]
                    :y [:enum [:a :b :c :d]]}
                   {:x [:record {:a :byte
                                 :b [:tuple [:byte :byte]]
                                 :c [:vector [:enum [:cat :dog]]]}]}]]
      (test-diff-case schemas)))


(defn test-interp-case [schema]
  (let [{:keys [interp gen]} (make-test-processors {:schemas {:x schema}})]
    (doseq [[value-1 value-2] (partition 2 (repeatedly 20 #(gen :x)))]
      (interp :x value-1 value-2 0 1 0.5))))

(deftest interp-test
  (doseq [schema [[:list :byte]
                  [:vector :int]
                  [:set :short]
                  [:set {:sorted-by :default} :short]
                  [:set {:sorted-by ''clojure.core/>} :int]
                  [:map :byte :string]
                  [:map {:sorted-by :default} :byte :string]
                  [:map {:sorted-by ''clojure.core/>} :byte :string]
                  [:optional :byte]
                  [:enum [:cat :dog :measurement :error]]
                  [:tuple [:int :float :double]]
                  [:record {:a :int :b :string :c :byte}]
                  [:multi ''clojure.core/number? {true :int false :string}]]]
    (test-interp-case schema)))

(defn test-validate-case [schemas]
  (let [{:keys [validate gen]} (make-test-processors {:schemas schemas})]
    (doseq [value (repeatedly 20 #(gen :x))]
      (validate :x value))))

(defn validate-test []
  (doseq [schemas [{:x [:list :byte]}
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
                    :x        :snapshot}]]
    (test-validate-case schemas)))
