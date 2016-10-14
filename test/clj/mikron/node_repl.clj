(ns mikron.node-repl
  "Node.js REPL runner."
  (:require [cljs.repl :as repl]
            [cljs.repl.node :as node]))

(defn -main []
  (repl/repl (node/repl-env)
    :output-dir     "node"
    :optimizations  :none
    :cache-analysis true
    :source-map     true))
