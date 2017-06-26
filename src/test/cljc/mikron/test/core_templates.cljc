(ns mikron.test.core-templates
  (:require [mikron.runtime.core :as mikron]))

(mikron/deftemplate :mikron.test.core/test-template
  (fn [schema-1 schema-2]
    [:tuple [schema-1 schema-2]]))
