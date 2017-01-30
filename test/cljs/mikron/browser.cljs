(ns mikron.browser
  "Browser test client."
  (:require [clojure.test :refer [run-tests]]
            [mikron.test]))
            
(enable-console-print!)

(run-tests 'mikron.test)
