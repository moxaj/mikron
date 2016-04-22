(ns my.config
  "This namespace was automatically generated at 2016.04.22. 15:26."
  (:require [my :refer [apple]]
            [seria.buffer :refer [compress
                                  read-boolean!
                                  read-headers!
                                  read-int!
                                  read-varint!
                                  wrap
                                  write-boolean!
                                  write-headers!
                                  write-int!
                                  write-varint!]]
            [seria.codegen.gen :refer [gen-size random-integer]]))

;; ============================================================================
;; Static seria config
;; ============================================================================

{:schemas {:x [:set {:sorted-by 'my/apple} :int]}}

;; ============================================================================
;; Forward declarations
;; ============================================================================

(declare
  pack
  unpack
  pack-inner*-x
  pack-x
  unpack-inner*-x
  diff-x
  undiff-x
  pack-diffed-inner*-x
  unpack-diffed-inner*-x
  gen-x)

;; ============================================================================
;; Private functions
;; ============================================================================

(defn ^{:private true} pack [value_3615
                             buffer_3616
                             schema-id_3617
                             diff-id_3618
                             diffed?_3619
                             pack-fn_3620]
  (-> buffer_3616
   (write-headers! schema-id_3617 diff-id_3618 diffed?_3619)
   (pack-fn_3620 value_3615)
   (compress)))

(defn ^{:private true} pack-diffed-inner*-x [buffer_3991 value_3990]
  (let [value-dnil?_3994 (= :dnil value_3990)]
    (write-boolean! buffer_3991 value-dnil?_3994)
    (when-not value-dnil?_3994
      (write-varint! buffer_3991 (count value_3990))
      (run!
        (fn [value-item_3992]
          (let [value-item-dnil?_3993 (= :dnil value-item_3992)]
            (write-boolean! buffer_3991 value-item-dnil?_3993)
            (when-not value-item-dnil?_3993
              (write-int! buffer_3991 value-item_3992))))
        value_3990)))
  buffer_3991)

(defn ^{:private true} pack-inner*-x [buffer_3979 value_3978]
  (write-varint! buffer_3979 (count value_3978))
  (run!
    (fn [value-item_3980] (write-int! buffer_3979 value-item_3980))
    value_3978)
  buffer_3979)

(defn ^{:private true} unpack-diffed-inner*-x [buffer_3995]
  (if (read-boolean! buffer_3995)
    :dnil
    (into
      (sorted-set-by apple)
      (doall
        (repeatedly
          (read-varint! buffer_3995)
          (fn []
            (if (read-boolean! buffer_3995)
              :dnil
              (read-int! buffer_3995))))))))

(defn ^{:private true} unpack-inner*-x [buffer_3985]
  (into
    (sorted-set-by apple)
    (doall
      (repeatedly
        (read-varint! buffer_3985)
        (fn [] (read-int! buffer_3985))))))

;; ============================================================================
;; Public functions
;; ============================================================================

(defn diff-x [value-1_3986 value-2_3987]
  (if (= value-1_3986 value-2_3987) :dnil value-2_3987))

(defn gen-x []
  (into
    (sorted-set-by apple)
    (repeatedly (gen-size) (fn [] (random-integer 4 true)))))

(defn pack-x
  ([value_3981 buffer_3982] (pack-x value_3981 buffer_3982 0 false))
  ([value_3981 buffer_3982 diff-id_3983]
   (pack-x value_3981 diff-id_3983 false))
  ([value_3981 buffer_3982 diff-id_3983 diffed?_3984]
   (pack
     value_3981
     buffer_3982
     0
     diff-id_3983
     diffed?_3984
     (if diffed?_3984 pack-diffed-inner*-x pack-inner*-x))))

(defn undiff-x [value-1_3988 value-2_3989]
  (if (= :dnil value-2_3989) value-1_3988 value-2_3989))

(defn unpack [raw_3971]
  (let [buffer_3972 (wrap raw_3971)
        headers_3973 (read-headers! buffer_3972)
        schema_3976 (nth [:x] (:schema-id headers_3973))]
    (if-not schema_3976
      :invalid
      {:schema schema_3976,
       :diffed? (:diffed? headers_3973),
       :value
       ((case
          schema_3976
          :x
          (if (:diffed headers_3973)
            unpack-diffed-inner*-x
            unpack-inner*-x)
         buffer_3972),)
       :diff-id (:diff-id headers_3973)})))
