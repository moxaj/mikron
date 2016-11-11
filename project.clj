(defproject moxaj/mikron "0.5.0"
  :description  "mikron is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/mikron"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"]]
  :source-paths ["src/clj" "src/cljc"]
  :java-source-paths ["src/java"]
  :test-paths ["test/cljc"]
  :profiles {:dev {:source-paths ["dev" "benchmark/cljc"]
                   :java-source-paths ["benchmark/java"]
                   :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                   :plugins [[lein-ancient "0.6.10"]
                             [lein-cljsbuild "1.1.4"]
                             [lein-figwheel "0.5.8"]
                             [lein-nodisassemble "0.1.3"]]
                   :dependencies [[org.clojure/tools.namespace "0.3.0-alpha3"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [org.clojure/test.check "0.9.0"]
                                  [criterium "0.4.4"]
                                  [com.google.protobuf/protobuf-java "3.1.0"]
                                  [com.taoensso/nippy "2.12.2"]
                                  [com.cognitect/transit-clj "0.8.293"]
                                  [com.cognitect/transit-cljs "0.8.239"]
                                  [com.damballa/abracad "0.4.13"]
                                  [gloss "0.2.6"]
                                  [cheshire "5.6.3"]
                                  [funcool/octet "1.0.0"]
                                  [proto-repl-charts "0.3.2"]
                                  [com.taoensso/truss "1.3.6"]]}}
  :cljsbuild {:builds [{:id "browser"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs" "benchmark/cljc" "target/classes"]
                        :figwheel true
                        :compiler {:asset-path "js/out"
                                   :output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :parallel-build true
                                   :pretty-print false
                                   :static-fns true
                                   :main "mikron.browser"}}
                       {:id "node"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs" "benchmark/cljc" "target/classes"]
                        :figwheel true
                        :compiler {:output-to "node/app.js"
                                   :output-dir "node"
                                   :target :nodejs
                                   :optimizations :none
                                   :cache-analysis true
                                   :parallel-build true
                                   :pretty-print true
                                   :static-fns true
                                   :main "mikron.node"}}]}
  :clean-targets ^{:protect false} ["resources/public/js"
                                    "node"
                                    :target-path])
