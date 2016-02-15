(ns playground
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params make-buffer]]
            [seria.config :refer [make-config make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]]
            [seria.prettify :refer [prettify]]))

(make-config :schemas {:x :int})
