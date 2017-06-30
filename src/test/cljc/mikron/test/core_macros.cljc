(ns mikron.test.core-macros
  "Unit tests for each processor."
  (:require [clojure.test :as test]
            [mikron.runtime.core :as mikron]
            [mikron.compiler.util :as compiler.util])
  #?(:cljs (:require-macros [mikron.test.core-macros])))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema dataset] method))

(defmacro def-mikron-tests
  "Generates test methods for all the test cases."
  [test-methods test-cases]
  (compiler.util/macro-context {:gen-syms [schema dataset]}
    `(do ~@(for [[schema-name schema-def] test-cases]
             `(let [~schema  (mikron/schema ~schema-def :diff-paths true :interp-paths true)
                    ~dataset (repeatedly 100 #(mikron/gen ~schema))]
                ~@(for [method test-methods]
                    `(test/deftest ~(gensym (str (name method) "-" (name schema-name)))
                       (test-mikron ~method ~schema ~dataset))))))))