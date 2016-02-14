(ns
 seria.configzz
 (:require
  [seria.buffer
   :refer
   [write-int! write-boolean! read-boolean! read-int!]]
  [seria.diff :refer [dnil?]]
  [seria.util :refer [cljc-abs]]))

(def my-config1
 (assoc
  {:schemas {:x [:tuple {:diff [], :interp []} [:int]]},
   :schema-map {0 :x, :x 0},
   :enum-map {},
   :enum-size :ubyte,
   :multi-map {},
   :multi-size :ubyte,
   :eq-ops nil}
  :processors
  {:x
   {:packer
    (fn [value buffer config diffed?]
     (let
      [pack-value-fn_1709
       (fn
        []
        (let
         [inner-value_1706 (value 0)]
         (write-int! buffer inner-value_1706)))]
      (if-not
       diffed?
       (pack-value-fn_1709)
       (let
        [value-dnil?_1710 (dnil? value)]
        (write-boolean! buffer value-dnil?_1710)
        (when-not value-dnil?_1710 (pack-value-fn_1709))))),)
    :unpacker
    (fn
     [buffer config diffed?]
     (let
      [unpack-value-fn_1713 (fn [] [(read-int! buffer)])]
      (if-not
       diffed?
       (unpack-value-fn_1713)
       (if
        (read-boolean! buffer)
        :seria.diff/dnil
        (unpack-value-fn_1713))))),
    :differ
    (fn
     [value-1 value-2 config]
     (if (= value-1 value-2) :seria.diff/dnil value-2)),
    :undiffer
    (fn [value-1 value-2 config] (if (dnil? value-2) value-1 value-2)),
    :interper
    (fn
     [value-1 value-2 time-1 time-2 time config]
     (let
      [prefer-first?
       (< (cljc-abs (- time time-1)) (cljc-abs (- time time-2)))
       time-factor
       (/ (- time time-1) (- time-2 time-1))]
      (if prefer-first? value-1 value-2)))}}
  :state
  (atom {})))
