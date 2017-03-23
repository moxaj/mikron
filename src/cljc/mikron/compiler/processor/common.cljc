(ns mikron.compiler.processor.common)

(defmulti processor
  "Generates processor code."
  (fn [processor-type opts] processor-type))
