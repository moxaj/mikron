(defproject moxaj/mikron "0.3.0"
  :description "mikron is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/mikron"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha11"]
                 [cljsjs/bytebuffer "5.0.1-0"]]
  :target-path "target/%s"
  :source-paths ["src/cljc" "src/clj"]
  :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
  :profiles {:dev {:source-paths ["dev"]
                   :plugins [[lein-ancient "0.6.10"]]
                   :dependencies [[org.clojure/tools.namespace "0.3.0-alpha3"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [proto-repl-charts "0.2.0"]
                                  [criterium "0.4.4"]
                                  [com.taoensso/nippy "2.12.1"]
                                  [org.clojars.runa/clj-kryo "1.5.0"]
                                  [com.cognitect/transit-clj "0.8.288"]
                                  [com.damballa/abracad "0.4.13"]
                                  [gloss "0.2.6"]
                                  [cheshire "5.6.3"]
                                  [funcool/octet "0.4.0"]
                                  [org.clojure/test.check "0.9.0"]]}})
