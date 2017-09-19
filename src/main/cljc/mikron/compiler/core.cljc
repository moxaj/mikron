(ns mikron.compiler.core
  "Main compiler namespace."
  (:require [clojure.set :as set]
            [macrowbar.core :as macrowbar]
            [mikron.compiler.core-spec :as core-spec]
            [mikron.compiler.schema :as schema]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.processor.pack]
            [mikron.compiler.processor.unpack]
            [mikron.compiler.processor.validate]
            [mikron.compiler.processor.gen]
            [mikron.compiler.processor.diff]
            [mikron.compiler.processor.interp]))

(macrowbar/emit :debug
  (defn literal?
    "Returns `true` if the given value is a literal (evaluates to itself), `false` otherwise."
    [value]
    (or (not (or (sequential? value) (map? value)))
        (and (not (seq? value))
             (every? literal? value)))))

(macrowbar/emit :debug-self-hosted
  (defn eval-if-not-literal
    "If the argument is a literal, returns it, otherwise returns what it evaluates to."
    [arg]
    (cond-> arg
      (not (literal? arg)) (macrowbar/eval)))

  (defn compile-schema
    "Returns a compiled schema for the given args."
    [schema global-options]
    #?(:clj (macrowbar/try-loading-compiling-ns))
    (let [schema
          (macrowbar/enforce-spec ::core-spec/schema (eval-if-not-literal schema))

          {:keys [processor-types] :as global-options}
          (macrowbar/enforce-spec ::core-spec/global-options (eval-if-not-literal global-options))

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
                       (processor.common/processor processor-type schema global-options)]))
               (into {}))]
      {:processors        processors
       :custom-processors custom-processors
       :global-options    global-options})))
