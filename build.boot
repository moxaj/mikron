(merge-env!
  :init-ns        'user
  :resource-paths #{"src/main/cljc"
                    "src/spec/cljc"
                    "src/main/js"}
  :dependencies   '[[seancorfield/boot-tools-deps "0.4.1" :scope "test"]]
  :repositories   [["clojars" {:url      "https://clojars.org/repo"
                               :username (System/getenv "CLOJARS_USER")
                               :password (System/getenv "CLOJARS_PASS")}]])

(require '[boot-tools-deps.core :as boot-tools-deps])
(boot-tools-deps/load-deps {:resolve-aliases [:build] :quick-merge true})

(require '[clojure.string :as string]
         '[boot.util :as boot-util]
         '[boot-tools-deps.core :as boot-tools-deps]
         '[adzerk.boot-test :as boot-test]
         '[adzerk.boot-reload :as boot-reload]
         '[adzerk.boot-cljs :as boot-cljs]
         '[adzerk.boot-cljs-repl :as boot-cljs-repl]
         '[pandeiro.boot-http :as boot-http]
         '[crisptrutski.boot-cljs-test :as boot-cljs-test])

(task-options!
  pom  {:project     'moxaj/mikron
        :version     "0.6.4-SNAPSHOT"
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
  '[mikron.buffer-test
    mikron.runtime.core-test])

(def clj-test-namespaces
  "Clojure test namespaces."
  (conj cljs-test-namespaces 'mikron.runtime.core-test2))

;; Tasks

(deftask dev
  "Dev task for proto-repl."
  []
  (require 'clojure.tools.namespace.repl)
  (apply (resolve 'clojure.tools.namespace.repl/set-refresh-dirs) (get-env :directories))
  (comp (boot-tools-deps/deps :aliases [:test :benchmark :dev] :quick-merge true)
        (javac)))

(deftask test-clj
  "Runs the tests on JVM."
  []
  (comp (boot-tools-deps/deps :aliases [:test] :quick-merge true)
        (boot-test/test :namespaces clj-test-namespaces)))

(deftask test-node
  "Runs the tests in a Node.js environment."
  [o opt          VAL kw   "The optimization level for the cljs compiler."
   s self-hosted?     bool "True if self-hosted."]
  (let [opt (or opt :none)]
    (comp (boot-tools-deps/deps :aliases [:test] :quick-merge true)
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
    (comp (boot-tools-deps/deps :aliases [:test] :quick-merge true)
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
  (let [platform (or platform :clj)]
    (comp (with-pass-thru _
            (println "Testing" platform target opt self-hosted?))
          (case platform
            :clj  (test-clj)
            :cljs (case (or target :browser)
                    :browser (test-browser :opt    opt
                                           :js-env :slimer)
                    :nodejs  (test-node :opt          opt
                                        :self-hosted? self-hosted?))))))

(deftask test-all
  "Runs all test."
  []
  (comp (test :platform     :clj)
        (test :platform     :cljs
              :target       :browser)
        (test :platform     :cljs
              :target       :browser
              :opt          :advanced)
        (test :platform     :cljs
              :target       :nodejs)
        ;; TODO externs for node.js?
        #_(test :platform     :cljs
                :target       :nodejs
                :opt          :advanced)
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
  (comp (boot-tools-deps/deps :aliases [:test :benchmark] :quick-merge true)
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
  (comp (boot-tools-deps/deps :aliases [:test :benchmark] :quick-merge true)
        (with-pass-thru _
          (proc "lumo"
              "-c" (str "\"" (System/getProperty "fake.class.path") "\"")
              "-k" "lumo_cache"
              "-e" (str "\""
                        "(require '[mikron.runtime.core :as mikron :refer [schema defschema pack unpack gen valid?]])"
                        "\"")
              "-r"))))

(deftask local-deploy
  "Installs the artifact into the local maven repository."
  []
  (comp (boot-tools-deps/deps :overwrite-boot-deps true)
        (pom)
        (jar)
        (install)))

(deftask deploy
  "Installs the artifact into the local maven repository and pushes to clojars."
  []
  (comp (boot-tools-deps/deps :overwrite-boot-deps true)
        (local-deploy)
        (push)))
