(ns mikron.runtime.core-spec
  "`mikron.compiler.core` spec namespace."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]))

(macrowbar/emit :debug
  (s/def ::schema-args
    (s/and (s/cat :schema-name    (s/? qualified-keyword?)
                  :schema         any?
                  :global-options (s/keys*))
           (s/conformer
             (fn [{:keys [schema-name] :as schema-args}]
               (cond-> schema-args
                 (nil? schema-name) (assoc :schema-name (keyword "mikron" (str (gensym "anonymous")))))))))

  (s/def ::defschema-args
    (s/cat :schema-name    qualified-keyword?
           :schema         any?
           :global-options (s/keys*))))
