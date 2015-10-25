(ns playground.playground
  (:require [seria.core :refer :all]
            [seria.utils :refer :all]
            [seria.buffers :refer :all]
            [seria.serialization :refer :all]
            [criterium.core :as crit]
            [clojure.pprint :refer [pprint]]
            [criterium.core :as crit]
            [criterium.core :as crit]))

(def mm #(pprint (macroexpand %)))
(defmacro cc [arg]
  (crit/with-progress-reporting
    (crit/quick-bench arg)))

(defmacro make-serializer-m [schema config]
  (make-serializer schema config))

(defmacro make-deserializer-m [schema config]
  (make-deserializer schema config))

(mm '(defconfig config-1
                {:a [:s/vector (identity :b)]
                 :b [:s/record {}
                     :foo [:s/tuple :s/int :s/int]
                     :bar [:s/record {}
                           :qux :s/int]
                     :baz [:s/vector :s/boolean]]}
                {:max-bits  10000
                 :max-bytes 10000}))

(comment
  (defconfig config-1
             {:a [:s/vector (identity :b)]
              :b [:s/record {}
                  :foo [:s/tuple :s/int :s/int]
                  :bar [:s/record {}
                        :qux :s/int]
                  :baz [:s/vector :s/boolean]]}
             {:max-bits  10000
              :max-bytes 10000})

  (serialize [{:foo [1 2]
               :bar {:qux 3}
               :baz [true false true true false]}
              {:foo [4 5]
               :bar {:qux 6}
               :baz [true true]}]
             :a
             config-1)
  (deserialize *1
               config-1)
  (let [data [{:foo [1 2]
               :bar {:qux 3}
               :baz [true false true true false]}
              {:foo [4 5]
               :bar {:qux 6}
               :baz [true true]}]]
    (crit/with-progress-reporting
      (crit/quick-bench
        (dotimes [_ 10000]
          (serialize data :a config-1))))
    nil)
  )