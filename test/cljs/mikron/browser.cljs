(ns mikron.browser
  "Browser test client."
  (:require [mikron.test]
            [clojure.test :refer [run-tests]]))

(enable-console-print!)

(run-tests 'mikron.test)
