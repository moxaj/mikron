(ns mikron.test-runner.node-self-hosted
  "Node test runner."
  (:require [clojure.test :as test]
            [cljs.nodejs :as nodejs]
            [cljs.js]
            [cljs.env]
            [mikron.buffer-test]
            [mikron.compiler.core-test]
            [mikron.runtime.core-test]
            [mikron.runtime.core-test2]))

(nodejs/enable-util-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (.exit nodejs/process (if (= 0 fail error) 0 1)))

(test/run-tests 'mikron.buffer-test
                'mikron.compiler.core-test
                'mikron.runtime.core-test
                'mikron.runtime.core-test2)
