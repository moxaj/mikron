(set-env!
  :resource-paths #{"src/main/cljc" "src/main/js/foreign"}
  :dependencies   '[[org.clojure/clojure         "1.9.0-alpha17"]
                    [org.clojure/clojurescript   "1.9.562"]

                    [adzerk/boot-test            "1.2.0"  :scope "test"]
                    [adzerk/boot-reload          "0.5.1"  :scope "test"]
                    [adzerk/boot-cljs            "2.0.0"  :scope "test"]
                    [adzerk/boot-cljs-repl       "0.3.3"  :scope "test"]
                    [pandeiro/boot-http          "0.8.3"  :scope "test"]
                    [crisptrutski/boot-cljs-test "0.3.0"  :scope "test"]
                    [boot-codox                  "0.10.3" :scope "test"]

                    [me.raynes/conch             "0.8.0"  :scope "test"]
                    [com.cemerick/piggieback     "0.2.1"  :scope "test"]
                    [weasel                      "0.7.0"  :scope "test"]
                    [org.clojure/tools.nrepl     "0.2.13" :scope "test"]
                    [viebel/codox-klipse-theme   "0.0.5"  :scope "test"]
                    [nodisassemble               "0.1.3"  :scope "test"]])

(merge-env!
  :repositories [["clojars" {:url      "https://clojars.org/repo"
                             :username (System/getenv "CLOJARS_USER")
                             :password (System/getenv "CLOJARS_PASS")}]])

(require '[adzerk.boot-test :as boot-test]
         '[adzerk.boot-reload :as boot-reload]
         '[adzerk.boot-cljs :as boot-cljs]
         '[adzerk.boot-cljs-repl :as boot-cljs-repl]
         '[pandeiro.boot-http :as boot-http]
         '[crisptrutski.boot-cljs-test :as boot-cljs-test]
         '[codox.boot :as boot-codox]
         '[me.raynes.conch.low-level :as conch])

(load-data-readers!)

(def +version+ "0.6.3-SNAPSHOT")

(task-options!
  pom  {:project     'moxaj/mikron
        :version     +version+
        :description "mikron is a schema-based serialization library for Clojure and ClojureScript"
        :url         "http://github.com/moxaj/mikron"
        :license     {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}}
  push {:ensure-clean  false
        :ensure-branch "master"
        :repo          "clojars"})

;; Util

(def windows?
  (.. (System/getProperty "os.name") (toLowerCase) (startsWith "windows")))

(defn fix-slashes
  "Replaces all forward slashes with backwards slashes in the given string."
  [^String s]
  (if windows?
    (.replaceAll s "/" "\\\\")
    s))

(defn host-process
  "Connects the stdin and stdout to a process."
  [process]
  (future (conch/feed-from process System/in))
  (future (while true (conch/flush process) (Thread/sleep 100)))
  (conch/stream-to-out process :out))

;; Tasks

(defn proc
  "Returns a task which runs the args as a shell command."
  [& args]
  (with-pass-thru _ (host-process (apply conch/proc args))))

(deftask testing
  "Adds the test files to the fileset."
  []
  (merge-env! :resource-paths #{"src/test/cljc" "src/test/cljs" "resources/test"})
  identity)

(deftask benchmarking
  "Adds the benchmark files to the fileset."
  []
  (merge-env! :resource-paths #{"src/benchmark/cljc" "src/benchmark/java" "resources/benchmark"}
              :dependencies   '[[com.cognitect/transit-clj         "0.8.300"]
                                [com.cognitect/transit-cljs        "0.8.239"]
                                [com.damballa/abracad              "0.4.14-alpha2"]
                                [gloss                             "0.2.6"]
                                [cheshire                          "5.7.1"]
                                [funcool/octet                     "1.0.1"]
                                [com.google.protobuf/protobuf-java "3.3.1"]
                                [com.taoensso/nippy                "2.14.0-alpha1"]
                                [criterium                         "0.4.4"]])
  identity)

(deftask dev
  "Dev task for proto-repl."
  []
  (merge-env! :init-ns        'user
              :resource-paths #{"src/dev"}
              :dependencies   '[[org.clojure/tools.namespace "0.2.11"]
                                [proto-repl                  "0.3.1" :exclusions [org.clojure/core.async]]])
  (require 'clojure.tools.namespace.repl)
  (apply (resolve 'clojure.tools.namespace.repl/set-refresh-dirs) (get-env :directories))
  (comp (testing)
        (benchmarking)
        (javac)))

(deftask test-clj
  "Runs the tests on JVM."
  []
  (comp (testing)
        (boot-test/test :namespaces ['mikron.test.core])))

(deftask test-node
  "Runs the tests in a Node.js environment."
  [o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (comp (testing)
        (if self-hosted?
          (proc "lumo"
                "-c" (System/getProperty "fake.class.path")
                "-k" "lumo_cache"
                "target/mikron/test_runner/node.cljs")
          (boot-cljs-test/test-cljs :js-env        :node
                                    :namespaces    '[mikron.test.core]
                                    :optimizations (or opt :none)))))

(deftask test-browser
  "Runs the tests in a browser environment."
  [o opt    VAL kw "The optimization level for the cljs compiler."
   e js-env VAL kw "The js environment."]
  (comp (testing)
        (boot-cljs-test/test-cljs :js-env        (or js-env :slimer)
                                  :namespaces    '[mikron.test.core]
                                  :optimizations (or opt :none))))

(deftask test
  "Runs the specified tests."
  [p platform     VAL kw   "The platform to run on."
   t target       VAL kw   "The target for the cljs compiler."
   o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (case (or platform :clj)
    :clj  (test-clj)
    :cljs (case (or target :browser)
            :browser (test-browser :opt    opt
                                   :js-env :slimer)
            :nodejs  (test-node :opt          opt
                                :self-hosted? self-hosted?))))


(deftask compile-cljs
  "Compiles the cljs source files."
  [o opt VAL kw  "The compiler optimization level."
   i id  VAL str "The id of the build."]
  (boot-cljs/cljs
    :ids              [(fix-slashes (or id "browser/index"))]
    :compiler-options {:static-fns    true
                       :optimizations (or opt :none)}))

(deftask run-browser-repl
  "Compiles the cljs sources, serves them on localhost:3000, and sets up
   an nrepl listener.
   Terminal A
     - boot run-browser-repl
   Terminal B
     - boot repl -c
     - (boot-cljs-repl/start-repl)
   localhost:3000"
  [o opt VAL kw  "The compiler optimization level."]
  (comp (benchmarking)
        (testing)
        (javac)
        (boot-http/serve :dir "target/browser")
        (watch)
        (boot-reload/reload)
        (boot-cljs-repl/cljs-repl)
        (compile-cljs :id "browser/index" :opt opt)
        (target)
        (speak)))

(deftask run-node-repl
  "Runs a node repl.
   TODO does not work - waiting on Lumo commonjs modules"
  []
  (comp (testing)
        (benchmarking)
        (proc "lumo"
              "-c" (str "\"" (System/getProperty "fake.class.path") "\"")
              "-k" "lumo_cache"
              "-e" (str "\"(require '[mikron.runtime.core :as mikron "
                        ":refer [schema defschema pack unpack gen valid?]])\"")
              "-r")))

(deftask generate-docs
  "Generates the documentation using codox."
  []
  (comp (boot-codox/codox
          :name         "moxaj/mikron"
          :metadata     {:doc/format :markdown}
          :output-path  "docs"
          ;:namespaces   [#"^mikron\.(?!codegen)"]
          :exclude-vars #"^((map)?->\p{Upper}|(get|set|put|take).*\*)")
        (sift :move {#"docs" "../docs"})
        (target)))

(deftask deploy
  "Installs the artifact into the local maven repo and pushes to clojars."
  []
  (comp (pom)
        (jar)
        (install)
        (push)))
