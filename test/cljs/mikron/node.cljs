(ns mikron.node
  "Node.js test client."
  (:require [cljs.nodejs :as nodejs]
            [clojure.test :refer [run-tests]]
            [mikron.test]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (let [{:keys [fail error]} (run-tests 'mikron.test)]
    (println "Fails: " fail ", errors: " error)
    (.exit js/process (if (= 0 fail error) 0 1))))

(set! *main-cli-fn* -main)
