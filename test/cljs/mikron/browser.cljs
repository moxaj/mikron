(ns mikron.browser
  "Browser test client."
  (:require [clojure.test :as test]
            [mikron.test]))

(enable-console-print!)

(test/run-tests 'mikron.test)
