(ns seria.codegen.common)

(def dnil :dnil)

(defrecord DiffedValue [value])

(defn wrap-diffed [value]
  (->DiffedValue value))

(defn unwrap-diffed [value]
  (:value value))
