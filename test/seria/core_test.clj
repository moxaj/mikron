(ns seria.core-test
  (:require [clojure.test :refer :all]
            [seria.core :refer :all]
            [seria.utils :refer :all]
            [seria.analyze :refer :all]
            [seria.test-utils :refer :all]))

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

(schema-test "Byte-test" {:a :byte} :a
             (make-range 8))

(schema-test "Short-test" {:a :short} :a
             (make-range 16))

(schema-test "Integer-test" {:a :int} :a
             (make-range 32))

(schema-test "Float-test" {:a :float} :a
             (repeatedly 16 #(float (rand))))

(schema-test "Double-test" {:a :double} :a
             (repeatedly 16 #(double (rand))))

(schema-test "Boolean-test" {:a :boolean} :a
             [true false])

(schema-test "Char-test" {:a :char} :a
             characters)

(schema-test "String-test" {:a :string} :a
             (repeatedly 16 #(random-string 32)))

(schema-test "Long-string-test" {:a :long-string} :a
             (repeatedly 16 #(random-string 300)))

(schema-test "Keyword-test" {:a :keyword} :a
             (repeatedly 16 #(keyword (random-safe-string 10))))

(schema-test "List-test" {:a [:list :byte]} :a
             (repeatedly 4 random-byte-seq))

(schema-test "Vector-test" {:a [:vector :byte]} :a
             (repeatedly 4 #(vec (random-byte-seq))))

(schema-test "Set-test" {:a [:set :byte]} :a
             (repeatedly 4 #(set (random-byte-seq))))

(schema-test "Sorted-set-test" {:a [:sorted-set :byte]} :a
             (repeatedly 4 #(into (sorted-set) (random-byte-seq))))

(schema-test "Map-test" {:a [:map :byte :byte]} :a
             (repeatedly 4 #(into {} (map (fn [x] [x x]) (random-byte-seq)))))

(schema-test "Sorted-map-test" {:a [:map :byte :byte]} :a
             (repeatedly 4 #(into (sorted-map) (map (fn [x] [x x]) (random-byte-seq)))))

(schema-test "Tuple-test" {:a [:tuple :byte :byte]} :a
             (repeatedly 4 #(vector (random-byte) (random-byte))))

(schema-test "Record-test" {:a [:record :a :byte :b :byte]} :a
             (repeatedly 4 #(hash-map :a (random-byte) :b (random-byte))))

(schema-test "Optional-test" {:a [:optional :byte]} :a
             (repeatedly 16 #(when (random-boolean) (random-byte))))

(schema-test "Multi-test" {:a [:multi #(if (number? %) :a :b)
                               :a :byte
                               :b [:tuple :byte :byte]]}
             :a
             (repeatedly 16 #(if (random-boolean)
                              (random-byte)
                              [(random-byte) (random-byte)])))

(schema-test "Enum-test" {:a [:enum :u :v :w]} :a
             (repeatedly 16 #(rand-nth [:u :v :w])))

(schema-test "Top-schema-test" {:a [:list :b]
                                :b :byte}
             :a
             (repeatedly 4 random-byte-seq))

(run-tests)
