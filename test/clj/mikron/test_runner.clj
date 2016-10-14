(ns mikron.test-runner
  "Test runner for the clj build."
  (:require [clojure.test :refer [run-all-tests]]
            [mikron.test]))

(defn -main [& args]
  (run-all-tests))
