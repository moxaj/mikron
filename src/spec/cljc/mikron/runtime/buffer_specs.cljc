(ns mikron.runtime.buffer-specs
  "`mikron.runtime.buffer` spec namespace."
  (:require [clojure.spec.alpha :as s]))

(s/def ::definterface+-args
  (s/cat :interface-name simple-symbol?
         :ops            (s/* (s/spec (s/cat :op-name simple-symbol?
                                             :args    (s/coll-of simple-symbol? :kind vector?)
                                             :docs    (s/? string?))))))
