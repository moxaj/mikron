(ns mikron.phantom
  "Phantom.js test client."
  (:require [clojure.test :refer [run-tests]]
            [mikron.test]))

(enable-console-print!)

(defn ^:export run []
  (let [{:keys [fail error]} (run-tests 'mikron.test)]
    (if (= 0 fail error)
      0
      1)))
