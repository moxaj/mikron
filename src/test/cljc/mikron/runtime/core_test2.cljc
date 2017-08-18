(ns mikron.runtime.core-test2
  "Property based testing namespace."
  (:require [clojure.test :as test]
            [clojure.test.check.clojure-test :as tc.test #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties :as tc.prop #?@(:cljs [:include-macros true])]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]

            ;; Load these for macrowbar
            [cljs.js]
            [cljs.env]

            [macrowbar.core :as macrowbar]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.test-generators :as test-generators]
            [mikron.runtime.test-util :as test-util]))

;; Property based testing

(def buffer (mikron/allocate-buffer 100000))

(macrowbar/emit :debug-self-hosted
  (tc.test/defspec core-test 100
    (tc.prop/for-all
      [[schema value]
       (tc.gen/bind
         test-generators/schema-generator
         (fn [schema]
           (tc.gen/tuple (tc.gen/return (macrowbar/eval `(mikron/schema
                                                           ~schema
                                                           :processor-types #{:pack :unpack})))
                         (test-generators/value-generator schema))))]
      (test-util/equal? value (mikron/with-buffer buffer
                                (->> value (mikron/pack schema)
                                           (mikron/unpack schema)))))))
