(ns playground
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params make-buffer]]
            [seria.config :refer [make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]]
            [seria.prettify :refer [prettify]]))

#_(let [config (make-test-config :schemas {:x :double})
        data   21341234.012012
        buffer (make-buffer 1000 1000)]
    (with-params {:schema :x :config config :buffer buffer}
      (with-progress-reporting
        (quick-bench
          (unpack (pack data))))))


(-> (make-test-config :schemas {:x :double})
    keys)


(def data
 '(fn
   [value buffer config diffed?]
   (let
    [pack-value-fn_1209
     (fn
      []
      (let
       [inner-value_1203
        (get value :coord)
        inner-value_1204
        (get value :time)]
       ((get-in config [:processors :y :packer])
        inner-value_1203
        buffer
        config
        diffed?)
       (write-float! buffer inner-value_1204)))]
    (if-not
     diffed?
     (pack-value-fn_1209)
     (let
      [value-dnil?_1210 (dnil? value)]
      (write-boolean! buffer value-dnil?_1210)
      (when-not value-dnil?_1210 (pack-value-fn_1209)))))))

(prettify data)
