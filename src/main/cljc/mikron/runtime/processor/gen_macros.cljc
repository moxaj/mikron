(ns mikron.runtime.processor.gen-macros
  (:require [macrowbar.core :as macrowbar]
            [mikron.runtime.math :as math])
  #?(:cljs (:require-macros [mikron.runtime.processor.gen-macros])))

(defmacro gen-integer
  "Generates an integer."
  [bytes signed?]
  (macrowbar/macro-context {:gen-syms [r]}
    `(let [~r (math/rand)]
       (-> (* ~r ~(math/upper-bound bytes signed?))
           (+ (* (- 1 ~r) ~(math/lower-bound bytes signed?)))
           (math/floor)
           (unchecked-long)))))
