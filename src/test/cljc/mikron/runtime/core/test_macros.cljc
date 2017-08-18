(ns mikron.runtime.core-test-macro
  "Helper macros namespace for generative testing."
  (:require [clojure.test :as test]
            [macrowbar.core :as macrowbar]
            [mikron.runtime.core :as mikron])
  #?(:cljs (:require-macros [mikron.runtime.core.test-macro])))

(defmacro def-mikron-tests
  "Generates test methods for all the test cases."
  [test-fn test-methods test-cases]
  (macrowbar/macro-context {:gen-syms [schema values]}
    `(do ~@(for [[schema-name schema-def] test-cases]
             `(let [~schema (mikron/schema ~schema-def :diff-paths true :interp-paths true)
                    ~values (repeatedly 100 #(mikron/gen ~schema))]
                ~@(for [method test-methods]
                    `(test/deftest ~(gensym (str (name method) "-" (name schema-name)))
                       (~test-fn ~method ~schema ~values))))))))
