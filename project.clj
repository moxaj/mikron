(defproject moxaj/seria "0.1.0"
  :description "Seria is a schema-based serialization library for Clojure / ClojureScript."
  :url "https://github.com/moxaj92/seria"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]]
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
