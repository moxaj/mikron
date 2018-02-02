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
    [schema global-options]
    #?(:clj
       (try
         (require (ns-name *ns*))
         (catch Exception e)))
    (macrowbar/with-syms {:eval [schema global-options]}
      (let [schema
            (util/enforce-spec ::compiler.core-spec/schema schema)

            {:keys [processor-types] :as global-options}
            (util/enforce-spec ::compiler.core-spec/global-options global-options)

            processor-types
            (cond-> (->> compiler.processor.common/processor (methods) (keys) (set))
              (some? processor-types) (set/intersection processor-types))

            custom-processors
            (->> (for [processor-type processor-types
                       custom-schema  (compiler.schema/custom-schemas schema)]
                   [[processor-type custom-schema]
                    (compiler.processor.common/processor-name processor-type custom-schema)])
                 (into {}))

            global-options
            (-> global-options
                (assoc :custom-processors custom-processors)
                (update :diff-paths compiler.schema/expand-paths schema)
                (update :interp-paths compiler.schema/expand-paths schema))

            processors
            (->> processor-types
                 (map (fn [processor-type]
                        [processor-type
                         (compiler.processor.common/processor processor-type schema global-options)]))
                 (into {}))]
        {:processors        processors
         :custom-processors custom-processors
         :global-options    global-options}))))
