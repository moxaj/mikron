(ns mikron.compiler.core-test
  (:require [clojure.test :as test]
            [mikron.util :as util]
            [mikron.compiler.core :as mikron]))

(test/deftest literal?-test
  (test/testing "Non-seqable values are literal"
    (test/are [value] (util/literal? value)
      0
      :x
      "x"
      true))
  (test/testing "Vectors, sets, and maps are literal"
    (test/are [value] (util/literal? value)
      [0]
      #{:x}
      {"x" false}
      [#{1 2 :x [{true [1] :false #{2}}]}]))
  (test/testing "Lists are not literal"
    (test/are [value] (not (util/literal? value))
      '(1 2 3)
      'x
      ''x
      [1 2 '(3 4 5)])))
