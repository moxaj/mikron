(defproject moxaj/seria "0.2.21"
  :description "Seria is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/seria"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [cljsjs/bytebuffer "5.0.1-0"]]
  :target-path "target/%s"
  :source-paths ["src/cljc" "src/clj"]
  :java-source-paths ["src/java"]
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [proto-repl-charts "0.2.0"]
                                  [criterium "0.4.4"]
                                  [com.taoensso/nippy "2.11.1"]
                                  [org.clojars.runa/clj-kryo "1.5.0"]
                                  [com.cognitect/transit-clj "0.8.285"]
                                  [gloss "0.2.5"]
                                  [potemkin "0.4.3"]
                                  [cheshire "5.6.1"]
                                  [com.damballa/abracad "0.4.13"]
                                  [funcool/octet "0.2.0"]]}})
