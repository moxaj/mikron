(ns mikron.compiler.template
  (:require [mikron.compiler.util :as util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(defn merged
  [schemas]
  (util/with-gensyms [value values]
    (let [n (count schemas)]
      `[:wrapped (fn [~value]
                   [~@(repeat n value)])
                 (fn [~values]
                   (merge ~@(map (fn [index]
                                   `(runtime.processor.common/nth ~values ~index))
                                 (range n))))
                 [:tuple [~@schemas]]])))
