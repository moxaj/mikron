(ns mikron.runtime.processor.validate-macros
  (:require [mikron.runtime.math :as math])
  #?(:cljs (:require-macros [mikron.runtime.processor.validate-macros])))

(defmacro valid-integer?
  "Returns `true` if `value` is a valid integer."
  [value bytes signed?]
  `(and (integer? ~value)
        (let [~value (unchecked-long ~value)]
          (and (>= ~value ~(math/lower-bound bytes signed?))
               (<  ~value ~(math/upper-bound bytes signed?))))))
