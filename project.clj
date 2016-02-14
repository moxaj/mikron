(defproject moxaj/seria "0.1.21"
  :description "Seria is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj/seria"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [criterium "0.4.3"]
                 [org.clojure/test.check "0.9.0"]
                 [midje "1.8.2"]
                 [com.taoensso/nippy "2.10.0"]]
  :target-path "target/%s"
  :source-paths ["src/clj"]
  :java-source-paths ["src/java"]

  ;:plugins [[lein-seria "0.1.0-SNAPSHOT"]]
  ;:seria {"cat" {:source        "seria/config1.clj"
  ;               :target        "seria/config1_compiled.clj"
  ;               :namespace     "seria.configzz"
  ;               :pretty-print? true

  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/java.classpath "0.2.3"]]}})
