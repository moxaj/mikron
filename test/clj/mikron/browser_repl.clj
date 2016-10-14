(ns mikron.browser-repl
  "Browser REPL runner."
  (:require [cljs.repl :as repl]
            [cljs.build.api :as build]
            [cljs.repl.browser :as browser-repl]
            [clojure.java.browse :as browse]))

(defn -main []
  (future
    (Thread/sleep 2000)
    (browse/browse-url "http://localhost:9000"))
  (repl/repl (browser-repl/repl-env :static-dir ["resources/public/"])
    :output-dir     "resources/public/js/out/"
    :optimizations  :none
    :cache-analysis true
    :source-map     true))
