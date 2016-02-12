(ns playground
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params]]
            [seria.config :refer [make-test-config]]
            [seria.gen :refer [sample]]))


(let [config (make-test-config :schemas {:x [:tuple {:diff :all}
                                             [:int]]})])

(identity *e)
