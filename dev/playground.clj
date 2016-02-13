(ns playground
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params make-buffer]]
            [seria.config :refer [make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]]))

#_(let [config (make-test-config :schemas {:x :double})
        data   21341234.012012
        buffer (make-buffer 1000 1000)]
    (with-params {:schema :x :config config :buffer buffer}
      (with-progress-reporting
        (quick-bench
          (unpack (pack data))))))


(-> (make-test-config :schemas {:x :double})
    keys)
