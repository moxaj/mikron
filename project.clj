(defproject moxaj/mikron "0.4.0"
  :description  "mikron is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/mikron"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha13"]]
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj" "test/cljc"]
  :profiles {:dev {:source-paths ["dev" "benchmark/clj"]
                   :java-source-paths ["benchmark/java"]
                   :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                   :plugins [[lein-ancient "0.6.10"]
                             [lein-cljsbuild "1.1.4"]]
                   :dependencies [[org.clojure/clojurescript "1.9.229"]
                                  [org.clojure/tools.namespace "0.3.0-alpha3"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [org.clojure/test.check "0.9.0"]
                                  [criterium "0.4.4"]
                                  [com.google.protobuf/protobuf-java "3.1.0"]
                                  [com.taoensso/nippy "2.12.2"]
                                  [com.cognitect/transit-clj "0.8.290"]
                                  [com.damballa/abracad "0.4.13"]
                                  [gloss "0.2.6"]
                                  [cheshire "5.6.3"]
                                  [funcool/octet "1.0.0"]
                                  [proto-repl-charts "0.3.2"]]}}
  :cljsbuild {:builds [{:id "browser"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs/browser"]
                        :compiler {:asset-path "js/out"
                                   :output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true
                                   :parallel-build true
                                   :main "mikron.repl-client"}}
                       {:id "node"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs/node"]
                        :compiler {:output-to "node/app.js"
                                   :output-dir "node"
                                   :target :nodejs
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true
                                   :parallel-build false
                                   :main "mikron.node"}}]}
  :clean-targets ^{:protect false} ["resources/public/js"
                                    "node"
                                    :target-path])
