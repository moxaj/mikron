(ns mikron.runtime.buffer-spec
  "`mikron.runtime.buffer` spec namespace."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]))

(macrowbar/emit :debug
  (s/def ::definterface+-args
    (s/cat :interface-name simple-symbol?
           :ops            (s/* (s/spec (s/cat :op-name simple-symbol?
                                               :args    (s/coll-of simple-symbol? :kind vector?)
                                               :docs    (s/? string?)))))))
