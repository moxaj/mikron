(ns mikron.codegen.common)

(defmulti fast-processors (fn [processor-name schema-name options] processor-name))

(defmulti processors (fn [processor-name schema-name options] processor-name))
