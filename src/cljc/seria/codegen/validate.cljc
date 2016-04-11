(ns seria.codegen.validate
  "Validator generating functions."
  (:require [seria.util :as util]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defmulti validate type/type-of :default :custom)

(defn make-validator [schema config]
  (let [value  (gensym "value_")]
    (binding [*options* {:config  config}]
      `([~value]
        ~(validate schema value)))))
