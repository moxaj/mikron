(ns mikron.runtime.core-test-macro
  "Helper macros namespace for generative testing."
  (:require [clojure.test :as test]
            [macrowbar.core :as macrowbar]
            [mikron.runtime.core :as mikron])
  #?(:cljs (:require-macros [mikron.runtime.core-test-macro])))

(defmacro core-test-cases
  "Syntactic macro to generate test methods for all the test cases."
  [test-fn test-methods schema-defs]
  (macrowbar/macro-context {:gen-syms [schema values]}
    `(do ~@(for [[schema-name schema-def] schema-defs]
             `(let [~schema (mikron/schema ~schema-def :diff-paths true :interp-paths true)
                    ~values (repeatedly 100 #(mikron/gen ~schema))]
                (test/testing ~(str schema-name)
                  ~@(for [test-method test-methods]
                      `(~test-fn ~test-method ~schema ~values))))))))
