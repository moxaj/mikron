(ns mikron.buffer-test
  (:require [clojure.test :as test]
            [clojure.test.check.clojure-test :as tc.test #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties :as tc.prop #?@(:cljs [:include-macros true])]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [mikron.buffer :as buffer]
            [mikron.test-util :as test-util]
            [mikron.schema-generators :as schema-generators]
            [mikron.compiler.schema :as compiler.schema]))

(tc.test/defspec buffer-test 100
  (let [primitive-schemas (disj (compiler.schema/leaf-descendants compiler.schema/hierarchy :primitive)
                                #?(:cljs :float))]
    (tc.prop/for-all
      [[schemas values]
       (tc.gen/bind (tc.gen/vector (tc.gen/elements primitive-schemas) 1 1000)
                    (fn [schemas]
                      (tc.gen/tuple (tc.gen/return schemas)
                                    (->> schemas
                                         (map (comp schema-generators/value-generator vector))
                                         (apply tc.gen/tuple)))))]
      (let [buffer (buffer/allocate 100000)]
        (doall (map (fn [schema value]
                      (buffer/put-value schema buffer value))
                    schemas
                    values))
        (buffer/finalize buffer)
        (buffer/reset buffer)
        (test-util/equal? values
                          (map (fn [schema]
                                 (buffer/take-value schema buffer))
                               schemas))))))
