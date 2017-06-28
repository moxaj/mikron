(ns mikron.compiler.template
  (:require [mikron.compiler.util :as util]
            [mikron.compiler.schema :as schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(defmulti resolve-template
  "The template resolver multimethod."
  schema/schema-name)

(defmethod resolve-template :merged [[_ schemas]]
  (util/macro-context {:gen-syms [value values]}
    (let [n (count schemas)]
      `[:wrapped (fn [~value]
                   [~@(repeat n value)])
                 (fn [~values]
                   (merge ~@(map (fn [index]
                                   `(runtime.processor.common/nth ~values ~index))
                                 (range n))))
                 [:tuple [~@schemas]]])))
