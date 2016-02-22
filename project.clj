(defproject moxaj/seria "0.1.223"
  :description "Seria is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/seria"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :target-path "target/%s"
  :source-paths ["src/cljc" "src/clj"]
  :java-source-paths ["src/java"]
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/java.classpath "0.2.3"]
                                  [criterium "0.4.3"]
                                  [com.taoensso/nippy "2.10.0"]]}})
