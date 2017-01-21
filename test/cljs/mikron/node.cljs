(ns mikron.node
  "Node.js test client."
  (:require [cljs.nodejs :as nodejs]
            [mikron.core]
            [mikron.test]))

(nodejs/enable-util-print!)

(defn -main [& args])

(set! *main-cli-fn* -main)
