(ns mikron.compiler.core
  "Main compiler namespace."
  (:require [clojure.set :as set]
            [macrowbar.core :as macrowbar]
            [mikron.util :as util]
            [mikron.compiler.core-spec :as compiler.core-spec]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.processor.common :as compiler.processor.common]
            [mikron.compiler.processor.pack]
            [mikron.compiler.processor.unpack]
            [mikron.compiler.processor.validate]
            [mikron.compiler.processor.gen]
            [mikron.compiler.processor.diff]
            [mikron.compiler.processor.interp]))

(macrowbar/emit :debug-self-hosted
  (defn compile-schema
    "Returns a compiled schema for the given args."
    [schema-name schema global-options]
    (macrowbar/with-syms {:eval [schema global-options]}
      (let [schema
            (util/enforce-spec ::compiler.core-spec/schema schema)

            {:keys [processor-types diff-paths interp-paths] :as global-options}
            (util/enforce-spec ::compiler.core-spec/global-options global-options)

            processor-types
            (cond-> (->> compiler.processor.common/processor* (methods) (keys) (set))
              (some? processor-types)
              (set/intersection processor-types))

            custom-processor-names
            (->> (for [processor-type     processor-types
                       custom-schema-name (disj (compiler.schema/custom-schema-names schema) schema-name)]
                   [[processor-type custom-schema-name]
                    (compiler.processor.common/processor-name processor-type custom-schema-name)])
                 (into {}))

            processor-options
            {:schema-name            schema-name
             :diff-paths             (compiler.schema/expand-paths diff-paths schema)
             :interp-paths           (compiler.schema/expand-paths interp-paths schema)
             :custom-processor-names custom-processor-names}

            processors
            (map (fn [processor-type]
                   [processor-type
                    (let [processor-name (compiler.processor.common/processor-name processor-type schema-name)]
                      (compiler.processor.common/processor processor-type
                        schema
                        (assoc processor-options :processor-type processor-type
                                                 :processor-name processor-name)))])
                 processor-types)]
        {:processors             processors
         :custom-processor-names custom-processor-names}))))
