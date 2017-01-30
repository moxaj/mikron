(ns mikron.browser
  "Browser test client."
  (:require [clojure.test :as test]
            [mikron.test]))

(enable-console-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (.exit js/process (if (= 0 fail error) 0 1)))

(test/run-tests 'mikron.test)
