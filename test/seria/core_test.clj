(ns seria.core-test
  (:require [clojure.test :refer :all]
            [seria.test-utils :refer :all]))

(schema-test "Byte-test" {:a :byte}
             (make-range 8))

(schema-test "Short-test" {:a :short}
             (make-range 16))

(schema-test "Integer-test" {:a :int}
             (make-range 32))

(schema-test "Float-test" {:a :float}
             (repeatedly 16 #(float (rand))))

(schema-test "Double-test" {:a :double}
             (repeatedly 16 #(double (rand))))

(schema-test "Boolean-test" {:a :boolean}
             [true false])

(schema-test "Char-test" {:a :char}
             characters)

(schema-test "String-test" {:a :string}
             (repeatedly 16 #(random-string 32)))

(schema-test "Long-string-test" {:a :long-string}
             (repeatedly 16 #(random-string 300)))

(schema-test "Keyword-test" {:a :keyword}
             (repeatedly 16 #(keyword (random-safe-string 10))))

(schema-test "Symbol-test" {:a :symbol}
             (repeatedly 16 gensym))

(schema-test "Any-test" {:a [:vector :any]}
             [[1 :a 'u [3 4] 0.4] [:b 'cat [:dog "Grandma"]]])

(schema-test "List-test" {:a [:list :byte]}
             (repeatedly 4 random-byte-seq))

(schema-test "Vector-test" {:a [:vector :byte]}
             (repeatedly 4 #(vec (random-byte-seq))))

(schema-test "Set-test" {:a [:set :byte]}
             (repeatedly 4 #(set (random-byte-seq))))

(schema-test "Sorted-set-test" {:a [:sorted-set :byte]}
             (repeatedly 4 #(into (sorted-set) (random-byte-seq))))

(schema-test "Map-test" {:a [:map :byte :byte]}
             (repeatedly 4 #(into {} (map (fn [x] [x x]) (random-byte-seq)))))

(schema-test "Sorted-map-test" {:a [:map :byte :byte]}
             (repeatedly 4 #(into (sorted-map) (map (fn [x] [x x]) (random-byte-seq)))))

(schema-test "Tuple-test" {:a [:tuple [:byte :byte]]}
             (repeatedly 4 #(vector (random-byte) (random-byte))))

(schema-test "Record-test" {:a [:record {:a :byte :b :byte}]}
             (repeatedly 4 #(hash-map :a (random-byte) :b (random-byte))))

(schema-test "Optional-test" {:a [:optional :byte]}
             (repeatedly 16 #(when (random-boolean) (random-byte))))

(schema-test "Multi-test" {:a [:multi #(if (number? %) :a :b)
                               {:a :byte
                                :b [:tuple [:byte :byte]]}]}
             (repeatedly 16 #(if (random-boolean)
                              (random-byte)
                              [(random-byte) (random-byte)])))

(schema-test "Enum-test" {:a [:enum [:u :v :w]]}
             (repeatedly 16 #(rand-nth [:u :v :w])))

(schema-test "Top-schema-test" {:a [:list :b]
                                :b :byte}
             (repeatedly 4 random-byte-seq))

(schema-test "Record-extends-text" {:c [:record {:c1 :int :c2 :byte}]
                                    :b [:record {:extends [:c]} {:b1 :string}]
                                    :a [:record {:extends [:b]} {:a1 [:tuple [:int :int]]}]}
             [{:a1 [2 3] :b1 "dog-cat-measurement-error" :c1 2000 :c2 0}])

(defrecord Foo [u v])
(schema-test "Record-constructor-test" {:a [:record {:constructor map->Foo} {:u :int :v :int}]}
             [(map->Foo {:u 10 :v 20})])

(run-tests)