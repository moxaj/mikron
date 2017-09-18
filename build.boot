(merge-env!
  :resource-paths #{"src/main/cljc" "src/spec/cljc" "src/main/js"}
  :dependencies   '[[org.clojure/clojure         "1.9.0-alpha19"]
                    [org.clojure/clojurescript   "1.9.908"]
                    [moxaj/macrowbar             "0.1.2"]

                    ;; test
                    [org.clojure/test.check      "0.10.0-alpha1" :scope "test"]

                    ;; script
                    [adzerk/boot-test            "1.2.0"  :scope "test"]
                    [adzerk/boot-reload          "0.5.1"  :scope "test"]
                    [adzerk/boot-cljs            "2.0.0"  :scope "test"]
                    [adzerk/boot-cljs-repl       "0.3.3"  :scope "test"]
                    [pandeiro/boot-http          "0.8.3"  :scope "test"]
                    [crisptrutski/boot-cljs-test "0.3.0"  :scope "test"]
                    [boot-codox                  "0.10.3" :scope "test"]

                    [com.cemerick/piggieback     "0.2.1"  :scope "test"]
                    [weasel                      "0.7.0"  :scope "test"]
                    [org.clojure/tools.nrepl     "0.2.13" :scope "test"]
                    [nodisassemble               "0.1.3"  :scope "test"]]
  :repositories   [["clojars" {:url      "https://clojars.org/repo"
                               :username (System/getenv "CLOJARS_USER")
                               :password (System/getenv "CLOJARS_PASS")}]])

(require '[boot.util :as boot-util]
         '[adzerk.boot-test :as boot-test]
         '[adzerk.boot-reload :as boot-reload]
         '[adzerk.boot-cljs :as boot-cljs]
         '[adzerk.boot-cljs-repl :as boot-cljs-repl]
         '[pandeiro.boot-http :as boot-http]
         '[crisptrutski.boot-cljs-test :as boot-cljs-test]
         '[codox.boot :as boot-codox])

(task-options!
  pom  {:project     'moxaj/mikron
        :version     "0.6.3-SNAPSHOT"
        :description "mikron is a schema-based serialization library for Clojure and ClojureScript"
        :url         "http://github.com/moxaj/mikron"
        :license     {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}}
  push {:ensure-clean  false
        :ensure-branch "master"
        :repo          "clojars"})

;; Util

(def windows?
  "True if running on windows."
  (.. (System/getProperty "os.name") (toLowerCase) (startsWith "windows")))

(defn fix-slashes
  "Replaces all forward slashes with backwards slashes in the given string."
  [^String s]
  (if windows?
    (.replaceAll s "/" "\\\\")
    s))

(defn proc
  "Runs the args as a shell command."
  [& args]
  (let [exit-value (-> (ProcessBuilder. args)
                       (.inheritIO)
                       (.start)
                       (.waitFor))]
    (when-not (zero? exit-value)
      (boot-util/exit-error))))

;; Config

(def cljs-compiler-opts
  "Default ClojureScript compiler options."
  {:static-fns         true
   :fn-invoke-direct   true
   :parallel-build     true
   :optimize-constants true
   :compiler-stats     true
   :elide-asserts      true
   :process-shim       false
   :closure-defines    {'macrowbar.util/DEBUG true}})

(def cljs-test-namespaces
  "ClojureScript test namespaces."
  '[mikron.compiler.core-test
    mikron.runtime.core-test
    mikron.runtime.buffer-test])

(def clj-test-namespaces
  "Clojure test namespaces."
  (conj cljs-test-namespaces 'mikron.runtime.core-test2))

;; Tasks

(deftask testing
  "Adds the test files to the fileset."
  []
  (merge-env! :resource-paths #{"src/test/cljc" "src/test/cljs" "src/test/resources"})
  identity)

(deftask benchmarking
  "Adds the benchmark files to the fileset."
  []
  (merge-env! :resource-paths #{"src/benchmark/cljc" "src/benchmark/java" "src/benchmark/resources"}
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
        (boot-test/test :namespaces clj-test-namespaces)))

(deftask test-node
  "Runs the tests in a Node.js environment."
  [o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (let [opt (or opt :none)]
    (comp (testing)
          (if self-hosted?
            (with-pass-thru fileset
              (proc "lumo"
                    "-c" (str "\"" (System/getProperty "fake.class.path") "\"")
                    "-k" "lumo_cache"
                    (->> fileset
                         (input-files)
                         (map tmp-file)
                         (by-re [#"mikron[\\/]test_runner[\\/]node_self_hosted.cljs"])
                         (first)
                         (.getAbsolutePath))))
            (boot-cljs-test/test-cljs :js-env        :node
                                      :namespaces    cljs-test-namespaces
                                      :optimizations opt
                                      :cljs-opts     cljs-compiler-opts)))))

(deftask test-browser
  "Runs the tests in a browser environment."
  [o opt    VAL kw "The optimization level for the cljs compiler."
   e js-env VAL kw "The js environment."]
  (let [opt    (or opt :none)
        js-env (or js-env :slimer)]
    (comp (testing)
          (boot-cljs-test/test-cljs :js-env        js-env
                                    :namespaces    cljs-test-namespaces
                                    :optimizations opt
                                    :cljs-opts     cljs-compiler-opts))))

(deftask test
  "Runs the specified tests."
  [p platform     VAL kw   "The platform to run on."
   t target       VAL kw   "The target for the cljs compiler."
   o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (let [platform (or platform :clj)
        target   (or target :browser)]
    (case platform
      :clj  (test-clj)
      :cljs (case target
              :browser (test-browser :opt    opt
                                     :js-env :slimer)
              :nodejs  (test-node :opt          opt
                                  :self-hosted? self-hosted?)))))

(deftask test-all
  "Runs all test."
  []
  (comp (with-pass-thru _ (println "======= Testing clj"))
        (test :platform     :clj)
        (with-pass-thru _ (println "======= Testing cljs | browser"))
        (test :platform     :cljs
              :target       :browser)
        (with-pass-thru _ (println "======= Testing cljs | browser | advanced"))
        (test :platform     :cljs
              :target       :browser
              :opt          :advanced)
        (with-pass-thru _ (println "======= Testing cljs | node"))
        (test :platform     :cljs
              :target       :nodejs)
        (with-pass-thru _ (println "======= Testing cljs | node | self-hosted"))
        (test :platform     :cljs
              :target       :nodejs
              :self-hosted? true)))

(deftask compile-cljs
  "Compiles the cljs source files."
  [o opt VAL kw  "The compiler optimization level."
   i id  VAL str "The id of the build."]
  (let [opt (or opt :none)
        id  (or id "browser/index")]
    (boot-cljs/cljs
      :ids              [(fix-slashes id)]
      :compiler-options (assoc cljs-compiler-opts :optimizations opt))))

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
  "Runs a node repl."
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
          :source-paths (get-env :resource-paths)
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
