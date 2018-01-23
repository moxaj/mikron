(ns mikron.test-generator.common
  (:require [clojure.test.check.generators :as tc.gen]))

(def simple-string-generator
  (tc.gen/fmap (fn [string]
                 (if (> (count string) 5)
                   (.substring string 0 5)
                   string))
               (tc.gen/not-empty tc.gen/string-alphanumeric)))

(def simple-symbol-generator
  (tc.gen/fmap symbol simple-string-generator))

(def simple-keyword-generator
  (tc.gen/fmap keyword simple-string-generator))               
