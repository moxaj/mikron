(require '[cljs.nodejs :as nodejs])
(require '[clojure.test :as test])
(require '[mikron.test])

(nodejs/enable-util-print!)

(defmethod test/report [::test/default :summary] [{:keys [fail error] :as summary}]
  (println "Test summary: " summary)
  (.exit nodejs/process (if (= 0 fail error) 0 1)))

(test/run-tests 'mikron.test)
