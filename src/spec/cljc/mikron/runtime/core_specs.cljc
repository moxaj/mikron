(ns mikron.runtime.core-specs
  "`mikron.compiler.core` spec namespace."
  (:require [clojure.spec.alpha :as s]))

(s/def ::defschema-args
  (s/cat :schema-name           qualified-keyword?
         :schema+global-options (s/* any?)))
