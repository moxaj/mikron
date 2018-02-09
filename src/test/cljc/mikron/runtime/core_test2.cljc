(ns mikron.runtime.core-test2
  "Property based testing namespace."
  (:require [clojure.test :as test]
            [clojure.test.check.clojure-test :as tc.test #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties :as tc.prop #?@(:cljs [:include-macros true])]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [macrowbar.core :as macrowbar]
            [mikron.test-util :as test-util]
            [mikron.test-generator.schema :as test-generator.schema]
            [mikron.test-generator.value :as test-generator.value]
            [mikron.runtime.core :as mikron]))

(macrowbar/emit :debug-self-hosted
  (def buffer (mikron/allocate-buffer 100000))

  (tc.test/defspec property-based-test 100
    (tc.prop/for-all
      [[schema value]
       (tc.gen/bind
         test-generator.schema/schema-generator
         (fn [schema]
           (tc.gen/tuple (tc.gen/return (macrowbar/eval `(mikron/schema ~schema
                                                           :processor-types #{:pack :unpack :valid?})))
                         (test-generator.value/value-generator schema))))]
      (let [value' (mikron/with-buffer buffer
                     (->> value (mikron/pack schema)
                                (mikron/unpack schema)))]
        (and (mikron/valid? schema value)
             (mikron/valid? schema value')
             (test-util/equal? value value'))))))
