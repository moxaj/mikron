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

(defn compile-schema
  "Returns a compiled schema for the given args."
  [& args]
  (let [{:keys [schema processor-types] :as global-options}
        (util/enforce-spec ::core-specs/compile-schema-args args)

        all-processor-types
        (->> processor.common/processor (methods) (keys) (set))

        processor-types
        (if-not (some? processor-types)
          all-processor-types
          (set/intersection processor-types all-processor-types))

        custom-schemas
        (schema/custom-schemas schema)

        global-options
        (-> global-options
            (assoc :custom-processors (->> (for [processor-type processor-types
                                                 custom-schema  custom-schemas]
                                             [[processor-type custom-schema]
                                              (processor.common/processor-name processor-type custom-schema)])
                                           (into {})))
            (update :diff-paths schema/expand-paths schema)
            (update :interp-paths schema/expand-paths schema))]
    {:processors     (->> processor-types
                          (map (fn [processor-type]
                                 [processor-type `(fn ~(processor.common/processor processor-type global-options))]))
                          (into {}))
     :global-options global-options}))
