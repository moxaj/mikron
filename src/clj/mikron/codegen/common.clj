(ns mikron.codegen.common
  (:require [mikron.util :as util]))

(defmulti global-processor* (fn [processor-type options] processor-type))

(defn global-processor [processor-type options]
  `(~(util/processor-name processor-type)
    ~@(global-processor* processor-type options)))

(defmulti local-processor* (fn [processor-type schema-name options] processor-type))

(defn local-processor [processor-type schema-name options]
  `(~(vary-meta (util/processor-name processor-type schema-name) assoc :private true)
    ~@(local-processor* processor-type schema-name options)))
