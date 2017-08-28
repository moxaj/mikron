(ns mikron.runtime.core-test-macro
  "Helper macros namespace for generative testing."
  (:require [clojure.test :as test]
            [macrowbar.core :as macrowbar]
            [mikron.runtime.core :as mikron])
  #?(:cljs (:require-macros [mikron.runtime.core-test-macro])))

(defmacro compile-schemas
  "Syntactic macro to compile multiple schemas at once."
  [schemas]
  (->> schemas
       (map (fn [[schema-name schema-def]]
              [schema-name `(mikron/schema ~schema-def :diff-paths true :interp-paths true)]))
       (into {})))
