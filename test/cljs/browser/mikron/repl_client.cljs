(ns mikron.repl-client
  "Browser REPL client."
   (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")
