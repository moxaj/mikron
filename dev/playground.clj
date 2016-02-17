(ns playground
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params make-buffer]]
            [seria.config :refer [make-config make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]]
            [seria.prettify :refer [prettify]]))

(let [config (make-test-config :schemas {:x :int})
      buffer (make-buffer 1000 1000)
      data 20]
  (with-params {:config config :schema :x :buffer buffer}
    (unpack (pack data))))


(defmacro foo [x]
  (let [y `'~x]
    `(identity ~y)))

(macroexpand '(foo z))
