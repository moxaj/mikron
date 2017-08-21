(ns mikron.test-runner.browser
  "Browser test runner."
  (:require [clojure.test :as test]
            [mikron.compiler.core-test]
            [mikron.runtime.core-test]
            [mikron.runtime.buffer-test]))

(enable-console-print!)

(defmethod test/report [::test/default :summary] [summary]
  (println "Test summary: " summary))

(test/run-tests 'mikron.compiler.core-test
                'mikron.runtime.core-test
                'mikron.runtime.buffer-test)
