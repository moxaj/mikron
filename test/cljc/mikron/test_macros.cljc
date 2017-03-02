(ns mikron.test-macros
  "Unit tests for each processor."
  (:require [clojure.test :as test]
            [mikron.core :as mikron]
            [mikron.compile-util :as compile-util])
  #?(:cljs (:require-macros [mikron.test-macros])))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema dataset] method))

(defmacro def-mikron-tests
  "Generates test methods for all the test cases."
  [test-cases]
  (compile-util/with-gensyms [schema dataset]
    `(do ~@(for [[schema-name schema-def] test-cases]
             `(let [~schema  (mikron/schema ~schema-def :diff true :interp true)
                    ~dataset (repeatedly 100 #(mikron/gen ~schema))]
                ~@(for [method (keys (methods test-mikron))]
                    `(test/deftest ~(gensym (symbol (str (name method) "-" (name schema-name))))
                       (test-mikron ~method ~schema ~dataset))))))))
