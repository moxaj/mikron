(defproject moxaj/mikron "0.6.0"
  :description  "mikron is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/mikron"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.456"]]
  :source-paths ["src/cljc"]
  :java-source-paths ["src/java"]
  :test-paths ["test/cljc"]
  :profiles {:dev {:source-paths ["dev" "benchmark/cljc"]
                   :java-source-paths ["benchmark/java"]
                   :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                   :plugins [[lein-cljsbuild "1.1.4"]
                             [lein-figwheel "0.5.9"]
                             [lein-codox "0.10.2"]]
                             ;[lein-nodisassemble "0.1.3"]]
                   :dependencies [[org.clojure/tools.namespace "0.3.0-alpha3"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [org.clojure/test.check "0.9.0"]
                                  [criterium "0.4.4"]
                                  [com.google.protobuf/protobuf-java "3.2.0"]
                                  [com.taoensso/nippy "2.12.2"]
                                  [com.cognitect/transit-clj "0.8.297"]
                                  [com.cognitect/transit-cljs "0.8.239"]
                                  [com.damballa/abracad "0.4.13"]
                                  [gloss "0.2.6"]
                                  [cheshire "5.7.0"]
                                  [funcool/octet "1.0.1"]
                                  [proto-repl-charts "0.3.2"]
                                  [viebel/codox-klipse-theme "0.0.4"]]}}
  :figwheel {:http-server-root "test/browser"}
  :cljsbuild {:test-commands {"phantom" ["phantomjs" "resources/test/phantom/test.js" "resources/test/phantom/test.html"]}
              :builds [;; phantom.js
                       {:id "phantom"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs" "target/classes"]
                        :compiler {:asset-path "js/out"
                                   :output-to "resources/test/phantom/js/app.js"
                                   :output-dir "resources/test/phantom/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :parallel-build true
                                   :static-fns true
                                   :main "mikron.phantom"}}
                       ;; manual browser
                       {:id "browser"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs" "target/classes"]
                        :figwheel true
                        :compiler {:asset-path "js/out"
                                   :output-to "resources/test/browser/js/app.js"
                                   :output-dir "resources/test/browser/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :parallel-build true
                                   :static-fns true
                                   :main "mikron.browser"}}
                       ;; manual node.js
                       {:id "node"
                        :source-paths ["src/cljc" "test/cljc" "test/cljs" "target/classes"]
                        :figwheel true
                        :compiler {:output-to "resources/test/node/app.js"
                                   :output-dir "resources/test/node"
                                   :target :nodejs
                                   :optimizations :none
                                   :cache-analysis true
                                   :parallel-build true
                                   :verbose true
                                   :static-fns true
                                   :main "mikron.node"}}]}
  :codox {:metadata {:doc/format :markdown}
          :source-paths ["src/cljc"]
          :output-path "docs"
          :namespaces [#"^mikron\.(?!codegen)"]
          :exclude-vars #"^((map)?->\p{Upper}|[?!].*\*)"
          :themes [:default
                   [:klipse
                    {:klipse/external-libs "https://raw.githubusercontent.com/moxaj/mikron/master/src/cljc"
                     :klipse/require-statement "(ns mikron.codox
                                                  (:require [mikron.core :as mikron
                                                             :refer-macros [schema defschema]
                                                             :refer [pack unpack gen valid? diff diff* undiff undiff* interp]]))"}]]}
  :clean-targets ^{:protect false} ["resources/test/browser/js"
                                    "resources/test/phantom/js"
                                    "resources/test/node"
                                    :target-path])
