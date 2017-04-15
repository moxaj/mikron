(set-env!
  :resource-paths #{"src/cljc" "src/js/foreign"}
  :dependencies   '[[org.clojure/clojure         "1.9.0-alpha14"]
                    [org.clojure/clojurescript   "1.9.473"]

                    [adzerk/boot-test            "1.2.0"     :scope "test"]
                    [pandeiro/boot-http          "0.7.6"     :scope "test"]
                    [adzerk/boot-reload          "0.5.1"     :scope "test"]
                    [adzerk/boot-cljs            "1.7.228-2" :scope "test"]
                    [adzerk/boot-cljs-repl       "0.3.3"     :scope "test"]
                    [crisptrutski/boot-cljs-test "0.3.0"     :scope "test"]
                    [boot-codox                  "0.10.3"    :scope "test"]
                    [adzerk/bootlaces            "0.1.13"    :scope "test"]

                    [me.raynes/conch             "0.8.0"     :scope "test"]
                    [com.cemerick/piggieback     "0.2.1"     :scope "test"]
                    [weasel                      "0.7.0"     :scope "test"]
                    [org.clojure/tools.nrepl     "0.2.12"    :scope "test"]
                    [viebel/codox-klipse-theme   "0.0.4"     :scope "test"]])

(require '[clojure.java.io :as io]
         '[clojure.pprint :as pprint]
         '[clojure.string :as string]

         '[boot.util :as util]
         '[adzerk.boot-test :as boot-test]
         '[pandeiro.boot-http :as boot-http]
         '[adzerk.boot-reload :as boot-reload]
         '[adzerk.boot-cljs :as boot-cljs]
         '[adzerk.boot-cljs-repl :as boot-cljs-repl]
         '[adzerk.bootlaces :as bootlaces]
         '[crisptrutski.boot-cljs-test :as boot-cljs-test]
         '[me.raynes.conch.low-level :as conch]
         '[codox.boot :as boot-codox]

         '[mikron.runtime.core :as mikron])

(import '[java.util Date])

(def +version+ "0.6.1-SNAPSHOT")

(task-options!
  pom {:project     'moxaj/mikron
       :version     +version+
       :description "mikron is a schema-based serialization library for Clojure and ClojureScript"
       :url         "http://github.com/moxaj/mikron"
       :license     {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}})

(bootlaces/bootlaces! +version+
  :dont-modify-paths? true)

(task-options!
  push {:ensure-clean false})

;; Util

(def windows?
  (.. (System/getProperty "os.name") (toLowerCase) (startsWith "windows")))

(defn fix-slashes
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
  (merge-env! :resource-paths #{"test/cljc" "test/cljs" "resources/test"})
  identity)

(deftask benchmarking
  "Adds the benchmark files to the fileset."
  []
  (merge-env! :resource-paths #{"benchmark/cljc" "benchmark/java" "resources/benchmark"}
              :dependencies   '[[com.cognitect/transit-clj "0.8.297"]
                                [com.cognitect/transit-cljs "0.8.239"]
                                [com.damballa/abracad "0.4.13"]
                                [gloss "0.2.6"]
                                [cheshire "5.7.0"]
                                [funcool/octet "1.0.1"]
                                [com.google.protobuf/protobuf-java "3.2.0"]
                                [com.taoensso/nippy "2.12.2"]
                                [criterium "0.4.4"]])
  identity)

(deftask dev
  "Dev task for proto-repl."
  []
  (merge-env! :init-ns        'user
              :resource-paths #{"dev"}
              :dependencies   '[[org.clojure/tools.namespace "0.2.11"]
                                [proto-repl "0.3.1" :exclusions [org.clojure/core.async]]])
  (require 'clojure.tools.namespace.repl)
  (apply (resolve 'clojure.tools.namespace.repl/set-refresh-dirs) (get-env :directories))
  (comp (testing)
        (benchmarking)
        (javac)))

(deftask benchmark-clj
  "Runs the benchmarks on JVM."
  [s stats  VAL #{kw} "The stat(s) to measure."
   S schema VAL kw    "The schema to benchmark. One of #{:doubles :quartet :snapshot :snapshot2}"]
  (let [stats  (or stats (do (util/info "No :stats specified, using [:pack-time :unpack-time].\n")
                             [:pack-time :unpack-time]))
        schema (keyword "mikron.benchmark.schema"
                        (name (or schema (do (util/info "No :schema specified, using :snapshot.\n")
                                             :snapshot))))
        tmp    (tmp-dir!)]
    (comp (benchmarking)
          (javac)
          (with-pre-wrap fileset
            (let [in-file (->> (output-files fileset) (by-name ["results.edn"]) (first))]
              (spit (io/file tmp (tmp-path in-file))
                    (let [results (do (require '[mikron.benchmark.core :as benchmark])
                                      ((resolve 'benchmark/benchmark) :stats stats :schema schema))]
                      (-> (tmp-file in-file)
                          (slurp)
                          (read-string)
                          (conj {:stats   (vec stats)
                                 :schema  schema
                                 :results results
                                 :time    (.getTime (Date.))})
                          (pprint/pprint)
                          (with-out-str))))
              (-> fileset
                  (add-resource tmp)
                  (commit!))))
          (sift :move {#"results.edn" "../resources/benchmark/results.edn"})
          (target))))

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
          (comp (target)
                (proc "lumo"
                      "-c" (System/getProperty "fake.class.path")
                      "-k" "lumo_cache"
                      "target/mikron/node.cljs"))
          (boot-cljs-test/test-cljs :js-env        :node
                                    :namespaces    '[mikron.test.core]
                                    :optimizations (or opt :none)))))

(deftask test-browser
  "Runs the tests in a browser environment."
  [o opt    VAL kw   "The optimization level for the cljs compiler."
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
  (comp (testing)
        (case (or platform :clj)
          :clj  (test-clj)
          :cljs (case (or target :browser)
                  :browser (test-browser :opt    opt
                                         :js-env :slimer)
                  :nodejs  (test-node :opt          opt
                                      :self-hosted? self-hosted?)))))


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
        (target)
        (with-pass-thru _
          (run! println (string/split (System/getProperty "fake.class.path") #";")))
        (proc "lumo"
              "-c" (str "\"" (System/getProperty "fake.class.path") "\"")
              "-k" "lumo_cache"
              "-e" (str "\"(require '[mikron.core :as mikron "
                        ":refer [schema defschema pack unpack gen valid?]])\"")
              "-r")))

(deftask generate-docs
  "Generates documentation.
   TODO does not work - waiting on Lumo commonjs modules"
  []
  (let [ns-str "(ns mikron.codox
                  (:require [mikron.core :as mikron
                             :refer [schema defschema with-buffer pack unpack gen valid? diff diff* undiff undiff* interp allocate-buffer]]))"]
    (comp (proc "lumo"
                "-c" (System/getProperty "fake.class.path")
                "-k" "docs/cache-cljs"
                "-e" ns-str)
          (proc "lumo" "scripts/lumo/generate_cljs_cache.cljs")
          (boot-codox/codox
            :name         "moxaj/mikron"
            :metadata     {:doc/format :markdown}
            :output-path  "docs"
            ;:namespaces   [#"^mikron\.(?!codegen)"]
            :exclude-vars #"^((map)?->\p{Upper}|[?!].*\*)"
            :themes       [:default
                           [:klipse
                            #:klipse{:cached-macro-ns-regexp #"/mikron\..*|cljs\..*/"
                                     :cached-ns-regexp       #"/mikron\..*|cljs\..*/"
                                     :cached-ns-root         "./cache-cljs"
                                     :require-statement      ns-str}]])
          (sift :move {#"docs" "../docs"})
          (target))))
