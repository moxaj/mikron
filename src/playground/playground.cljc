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
  (make-serializer schema config))

(defmacro make-deserializer-m [schema config]
  (make-deserializer schema config))

(comment
  (defconfig config-1
             {:a [:vector (identity :b)]
              :b [:record {}
                  :foo [:tuple :int :int]
                  :bar [:record {}
                        :qux :int]
                  :baz [:vector :boolean]]})
  (def data-1 [{:foo [1 2]
                :bar {:qux 3}
                :baz [true false true true false]}
               {:foo [4 5]
                :bar {:qux 6}
                :baz [true true]}])
  (serialize data-1 :a config-1)
  (deserialize *1 config-1)

  (defconfig config-2
             {:a [:vector {:size :short} :double]}
             :buffer-count 4)
  (def data-2 (repeatedly 1000 #(rand)))

  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (serialize data-2 :a config-2))))

  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (nippy/freeze data-2))))

  (count (pr-str data-1))
  (count (serialize data-1 :a config-1))
  (count (nippy/freeze data-1)))