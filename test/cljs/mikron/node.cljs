(ns mikron.node
  "Node.js test client."
  (:require [cljs.nodejs :as nodejs]
            [clojure.test :as test]
            [mikron.test]))

(nodejs/enable-util-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (.exit js/process (if (= 0 fail error) 0 1)))

(defn -main [& args]
  (test/run-tests 'mikron.test))

(set! *main-cli-fn* -main)
