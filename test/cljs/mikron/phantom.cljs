(ns mikron.phantom
  "Phantom.js test client."
  (:require [clojure.test :as test]
            [mikron.test]))

(enable-console-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (if (= 0 fail error) 0 1))

(defn ^:export run []
  (test/run-tests 'mikron.test))
