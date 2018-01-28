(ns mikron.compiler.core-test
  (:require [clojure.test :as test]
            [mikron.compiler.core :as mikron]))

(test/deftest partial-eval-test
  (test/testing "Without ^eval, no evaluation occurs"
    (test/are [value] (= value (mikron/partial-eval value))
      '(1 2 3 a)
      '(1 2 3 (4 5 6))))
  (test/testing "With ^eval, evaluation occurs"
    (test/is (= `(1 2 ~+) (mikron/partial-eval '(1 2 ^eval +))))
    (test/is (= `(1 2 ~(+ 1 2)) (mikron/partial-eval '(1 2 ^eval (+ 1 2)))))))
