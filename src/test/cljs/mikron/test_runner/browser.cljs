(ns mikron.test-runner.browser
  "Browser test runner."
  (:require [clojure.test :as test]
            [mikron.runtime.core-tests]
            [mikron.runtime.buffer-tests]))

(enable-console-print!)

(defmethod test/report [::test/default :summary] [summary]
  (println "Test summary: " summary))

(test/run-tests 'mikron.runtime.core-tests
                'mikron.runtime.buffer-tests)
