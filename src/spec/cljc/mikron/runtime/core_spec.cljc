(ns mikron.runtime.core-spec
  "`mikron.compiler.core` spec namespace."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]))

(macrowbar/emit :debug
  (s/def ::schema-args
    (s/cat :schema-name    (s/? qualified-keyword?)
           :schema         any?
           :global-options (s/keys*)))

  (s/def ::defschema-args
    (s/cat :schema-name    qualified-keyword?
           :schema         any?
           :global-options (s/keys*))))
