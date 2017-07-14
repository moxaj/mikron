(ns mikron.compiler.core
  "Main compiler namespace."
  (:require [clojure.set :as set]
            [mikron.compiler.core-specs :as core-specs]
            [mikron.compiler.schema :as schema]
            [mikron.compiler.util :as util]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.processor.pack]
            [mikron.compiler.processor.unpack]
            [mikron.compiler.processor.validate]
            [mikron.compiler.processor.gen]
            [mikron.compiler.processor.diff]
            [mikron.compiler.processor.interp]))

(util/compile-time
  #?(:cljs (require '[cljs.js :as cljs]
                    '[cljs.env :as env])))

(util/compile-time
  #?(:cljs
     (defn eval
       "Evaluates the expression."
       [expr]
       (let [result (volatile! nil)]
         (cljs/eval env/*compiler*
                    expr
                    {:ns      (.-name *ns*)
                     :context :expr}
                    (fn [{:keys [value error]}]
                      (if error
                        (throw (js/Error. (str error)))
                        (vreset! result value))))
         @result)))

  #?(:clj
     (defn try-loading-compiling-ns []
       (try
         (require (ns-name *ns*))
         (catch Exception e))))

  (defn compile-schema
    "Returns a compiled schema for the given args."
    [& args]
    #?(:clj (try-loading-compiling-ns))
    (let [{:keys [schema processor-types] :as global-options}
          (util/enforce-spec ::core-specs/compile-schema-args (eval (vec args)))

          processor-types
          (cond-> (->> processor.common/processor (methods) (keys) (set))
            (some? processor-types) (set/intersection processor-types))

          custom-processors
          (->> (for [processor-type processor-types
                     custom-schema  (schema/custom-schemas schema)]
                 [[processor-type custom-schema]
                  (processor.common/processor-name processor-type custom-schema)])
               (into {}))

          global-options
          (-> global-options
              (assoc :custom-processors custom-processors)
              (update :diff-paths schema/expand-paths schema)
              (update :interp-paths schema/expand-paths schema))

          processors
          (->> processor-types
               (map (fn [processor-type]
                      [processor-type
                       (processor.common/processor processor-type global-options)]))
               (into {}))]
      {:processors     processors
       :global-options global-options})))
