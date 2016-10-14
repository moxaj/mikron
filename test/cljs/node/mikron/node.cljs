(ns mikron.node
  "Test runner for the node.js build."
  (:require [cljs.nodejs :as nodejs]
            [clojure.test :refer [run-all-tests]]
            [mikron.test]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (run-all-tests))

(set! *main-cli-fn* -main)
