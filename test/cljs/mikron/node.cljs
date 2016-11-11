(ns mikron.node
  "Node.js test client."
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args])

(set! *main-cli-fn* -main)
