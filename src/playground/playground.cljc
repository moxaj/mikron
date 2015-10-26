(ns playground.playground
  (:require [seria.core :refer :all]
            [seria.buffers :refer :all]
            [seria.serialization :refer :all]
            [criterium.core :as crit]
            [clojure.pprint :refer [pprint *print-miser-width* *print-right-margin*]]
            [taoensso.nippy :as nippy]))

(def mm #(binding [*print-miser-width* 120
                   *print-right-margin* 120]
          (pprint (macroexpand %))))

(defmacro make-serializer-m [schema config]
  (make-serializer (eval schema) (eval config)))

(defmacro make-deserializer-m [schema config]
  (make-deserializer (eval schema) (eval config)))

;(mm '(make-serializer-m :a config-1))

(comment
  (defconfig config-1
             {:a [:s/vector (identity :b)]
              :b [:s/record {}
                  :foo [:s/tuple :s/int :s/int]
                  :bar [:s/record {}
                        :qux :s/int]
                  :baz [:s/vector :s/boolean]]}
             {:max-bits    10000
              :max-bytes   10000})
  (def data [{:foo [1 2]
              :bar {:qux 3}
              :baz [true false true true false]}
             {:foo [4 5]
              :bar {:qux 6}
              :baz [true true]}])
  (serialize data :a config-1)
  (deserialize *1 config-1)
  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 10000]
        (serialize data :a config-1))))
  (count *1)



  (defconfig config-2
             {:a [:s/vector {:size :s/short} :s/double]}
             {})
  (def data-2 (repeatedly 1000 rand))
  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (serialize data-2 :a config-2))))
  (count (nippy/freeze data-2))
  (serialize data-2 :a config-2)
  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (nippy/freeze data-2))))

  (count (pr-str data-2))
  (count (serialize data-2 :a config-2)))