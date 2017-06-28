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
  [& args]
  (let [{:keys [schema processor-types] :as opts}
        (util/enforce-spec ::core-specs/compile-schema-args args)

        all-processor-types
        (->> processor.common/processor (methods) (keys) (set))

        processor-types
        (if-not (some? processor-types)
          all-processor-types
          (set/intersection processor-types all-processor-types))

        opts
        (-> opts
            (update :diff-paths   schema/expand-paths schema)
            (update :interp-paths schema/expand-paths schema))

        custom-schemas
        (schema/custom-schemas schema)]
    {:custom-processors (for [processor-type processor-types
                              custom-schema  custom-schemas]
                          {:processor-name (processor.common/processor-name processor-type custom-schema)
                           :processor-type processor-type
                           :custom-schema  custom-schema})
     :processors        (->> processor-types
                             (map (fn [processor-type]
                                    [processor-type `(fn ~(processor.common/processor processor-type opts))]))
                             (into {}))
     :opts              opts}))
