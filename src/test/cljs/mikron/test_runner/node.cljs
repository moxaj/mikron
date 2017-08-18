(ns mikron.test-runner.node
  "Node test runner."
  (:require [cljs.nodejs :as nodejs]
            [clojure.test :as test]
            [mikron.runtime.core-test]
            [mikron.runtime.core-test2]
            [mikron.runtime.buffer-test]))

(nodejs/enable-util-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (.exit nodejs/process (if (= 0 fail error) 0 1)))

(test/run-tests 'mikron.runtime.core-test
                'mikron.runtime.core-test2
                'mikron.runtime.buffer-test)
