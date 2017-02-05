(set-env!
  :resource-paths #{"src/cljc"}
  :dependencies   '[[org.clojure/clojure         "1.9.0-alpha14"]
                    [org.clojure/clojurescript   "1.9.456"]

                    [adzerk/boot-test            "1.2.0"     :scope "test"]
                    [pandeiro/boot-http          "0.7.6"     :scope "test"]
                    [adzerk/boot-reload          "0.5.0"     :scope "test"]
                    [adzerk/boot-cljs            "1.7.228-2" :scope "test"]
                    [adzerk/boot-cljs-repl       "0.3.3"     :scope "test"]
                    [crisptrutski/boot-cljs-test "0.3.0"     :scope "test"]

                    [me.raynes/conch             "0.8.0"     :scope "test"]
                    [com.cemerick/piggieback     "0.2.1"     :scope "test"]
                    [weasel                      "0.7.0"     :scope "test"]
                    [org.clojure/tools.nrepl     "0.2.12"    :scope "test"]])

(task-options!
  pom {:project 'moxaj/mikron
       :version "0.5.0"})

(require '[clojure.java.io :as io]
         '[clojure.pprint :as pprint]
         '[clojure.string :as string]

         '[boot.util :as util]
         '[adzerk.boot-test :as boot-test]
         '[pandeiro.boot-http :as boot-http]
         '[adzerk.boot-reload :as boot-reload]
         '[adzerk.boot-cljs :as boot-cljs]
         '[adzerk.boot-cljs-repl :as boot-cljs-repl]
         '[crisptrutski.boot-cljs-test :as boot-cljs-test]
         '[me.raynes.conch.low-level :as conch]

         '[mikron.core :as mikron])

(def windows?
  (.startsWith (.toLowerCase (System/getProperty "os.name")) "windows"))

(defn format-commands
  [& commands]
  (->> (interleave commands (repeat [(if windows? "&" ";")]))
       (butlast)
       (apply concat)
       ((fn [commands]
          (if windows?
            commands
            [(str "'" (string/join " " commands) "'")])))
       (into (if windows? ["cmd" "/c"] ["sh" "-c"]))))

(defn run-commands
  [& commands]
  (->> commands
       (apply format-commands)
       (apply util/dosh)))

(defn fix-slashes
  [^String s]
  (if windows?
    (.replaceAll s "/" "\\\\")
    s))

(deftask build
  "Builds the project."
  []
  (comp (pom) (jar) (install)))

(deftask testing
  "Adds the test files to the fileset."
  []
  (merge-env! :resource-paths #{"test/cljc" "test/cljs" "resources/test"})
  identity)

(deftask autotest-clj
  "Runs the tests on JVM."
  []
  (comp (testing) (boot-test/test)))

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
                                [criterium "0.4.4"]
                                [proto-repl-charts "0.3.2"]])
  identity)

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
    (comp
      (benchmarking)
      (javac)
      (with-pre-wrap fileset
        (let [in-file (->> (output-files fileset) (by-name ["results.edn"]) (first))]
          (spit (io/file tmp (tmp-path in-file))
                (str (slurp (tmp-file in-file))
                     "\r\n\r\nStats: " (vec stats) "\r\n"
                     (do (require '[mikron.benchmark.core :as benchmark])
                         (let [results ((resolve 'benchmark/benchmark) :stats stats :schema schema)]
                           (with-out-str (pprint/pprint results))))))
          (-> fileset
              (add-resource tmp)
              (commit!))))
      (target))))

(deftask compile-cljs
  "Compiles the cljs source files."
  [o opt VAL kw  "The compiler optimization level."
   i id  VAL str "The id of the build."]
  (boot-cljs/cljs
    :ids              (when id [(fix-slashes id)])
    :compiler-options {:static-fns     true
                       :optimizations  (or opt :none)
                       :parallel-build false
                       :infer-externs  false}))

(defn host-process
  "Connects the stdin and stdout to a process."
  [process]
  (future (conch/feed-from process System/in))
  (future (while true (conch/flush process) (Thread/sleep 100)))
  (conch/stream-to-out process :out))

(deftask autotest-node
  "Compiles the node test files and runs them."
  [s self-hosted? bool "True if self-hosted."]
  (comp
    (testing)
    (if self-hosted?
      (comp
        (target)
        (with-pass-thru _
          (host-process
            (conch/proc
              (format-commands
                ["lumo"
                 "-c" (System/getProperty "fake.class.path")
                 "-k" "lumo_cache"
                 "target/mikron/node.cljs"])))))
      (comp
        (compile-cljs :id "node/index")
        (target)
        (with-pass-thru _
          (util/info "A1\n")
          (util/info "B\n")
          (util/dosh "sudo" "sh" "-c" "\"cd target\"")
          (util/info "C\n")
          (util/dosh "bash" "-c" "'cd target ; ls -l'"))))))
        ;(with-pass-thru _
        ;  (run-commands ["cd" "target/node"] ["node" "index.js"]))))))

(deftask autotest
  "Runs the specified tests."
  [p platform     VAL kw   "The platform to run on."
   t target       VAL kw   "The target for the cljs compiler."
   o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (comp
    (testing)
    (case platform
      :clj  (autotest-clj)
      :cljs (case target
              :nodejs  (autotest-node :self-hosted? self-hosted?)
              ;; todo: browser self hosted?
              :browser (boot-cljs-test/test-cljs :js-env        :slimer
                                                 :namespaces    ['mikron.test]
                                                 :optimizations opt)))))

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
  (comp
    (benchmarking)
    (testing)
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
  (comp
    (testing)
    (benchmarking)
    (target)
    (with-pass-thru _
      (host-process
        (apply conch/proc
          (format-commands
            ["lumo"
             "-c" (str "\"" (System/getProperty "fake.class.path") "\"")
             "-k" "lumo_cache"
             "-e" (str "\"(require '[mikron.core :as mikron "
                       ":refer [schema defschema pack unpack gen valid?]])\"")
             "-r"]))))))
