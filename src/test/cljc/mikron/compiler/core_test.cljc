(ns mikron.compiler.core-test
  (:require [clojure.test :as test]
            [mikron.util :as util]
            [mikron.compiler.core :as mikron]))

(test/deftest literal?-test
  (test/testing "Non-seqable values are literal"
    (test/are [value] (util/literal? value)
      0
      0.0
      :x
      "x"
      true
      false))
  (test/testing "Vectors, sets, and maps are literal"
    (test/are [value] (util/literal? value)
      [0]
      #{0}
      {0 0}))
  (test/testing "Lists and symbols are not literal"
    (test/are [value] (not (util/literal? value))
      '(0)
      'x
      'x/x)))
