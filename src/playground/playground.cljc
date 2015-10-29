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

(mm '(make-deserializer-m :my-map c))


(defconfig c {:my-map [:sorted-map [:tuple :int :int] :double]})
(def d (into (sorted-map) (mapv vector (map-indexed vector (range 100)) (range 100))))
(serialize d :my-map c)
(deserialize *1 c)
(let [c (make-config {})
      d (into (sorted-map) (mapv vector (range 100) (range 100)))]
  )


(comment
  (defconfig config-1
             {:a [:vector (identity :b)]
              :b [:record {}
                  :foo [:tuple :int :int]
                  :bar [:record {}
                        :qux :int]
                  :baz [:vector :boolean]]})
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
      (dotimes [_ 100]
        (nippy/freeze data))))                              ;(serialize data :a config-1)
  (count *1)


  (defconfig config-2
             {:a [:vector {:size :short} :double]}
             :buffer-count 4)
  (def data-2 (repeatedly 1000 rand))
  (run! deref (serialize-all (repeat 1000 data-2) :a config-2 identity))


  (crit/with-progress-reporting
    (crit/quick-bench
      (serialize-all (repeat 100 data-2) :a config-2)))

  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (serialize data-2 :a config-2))))
  (crit/with-progress-reporting
    (crit/quick-bench
      (dotimes [_ 100]
        (nippy/freeze data-2))))

  (count (pr-str data-2))
  (count (serialize data-2 :a config-2)))
