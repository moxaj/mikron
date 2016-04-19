(ns my.config
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

{:schemas {:x [:s/set {:sorted-by 'my/apple} :s/int]}}

(def enum-ids {})

(def multi-ids {})

(def schema-ids {0 :x})

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

(defn pack [value_1387
            buffer_1388
            schema-id_1389
            diff-id_1390
            diffed?_1391
            pack-fn_1392]
  (-> buffer_1388
   (write-headers! schema-id_1389 diff-id_1390 diffed?_1391)
   (pack-fn_1392 value_1387)
   (compress)))

(defn pack-diffed-inner*-x [buffer_1838 value_1837]
  (let [value-dnil?_1841 (= :s/dnil value_1837)]
    (write-boolean! buffer_1838 value-dnil?_1841)
    (when-not value-dnil?_1841
      (write-varint! buffer_1838 (count value_1837))
      (run!
        (fn [value-item_1839]
          (let [value-item-dnil?_1840 (= :s/dnil value-item_1839)]
            (write-boolean! buffer_1838 value-item-dnil?_1840)
            (when-not value-item-dnil?_1840
              (write-int! buffer_1838 value-item_1839))))
        value_1837)))
  buffer_1838)

(defn pack-inner*-x [buffer_1826 value_1825]
  (write-varint! buffer_1826 (count value_1825))
  (run!
    (fn [value-item_1827] (write-int! buffer_1826 value-item_1827))
    value_1825)
  buffer_1826)

(defn unpack-diffed-inner*-x [buffer_1842]
  (if (read-boolean! buffer_1842)
    :s/dnil
    (into
      (sorted-set-by apple)
      (doall
        (repeatedly
          (read-varint! buffer_1842)
          (fn []
            (if (read-boolean! buffer_1842)
              :s/dnil
              (read-int! buffer_1842))))))))

(defn unpack-inner*-x [buffer_1832]
  (into
    (sorted-set-by apple)
    (doall
      (repeatedly
        (read-varint! buffer_1832)
        (fn [] (read-int! buffer_1832))))))

(defn diff-x [value-1_1833 value-2_1834]
  (if (= value-1_1833 value-2_1834) :s/dnil value-2_1834))

(defn gen-x []
  (into
    (sorted-set-by apple)
    (repeatedly (gen-size) (fn [] (random-integer 4 true)))))

(defn pack-x
  ([value_1828 buffer_1829] (pack-x value_1828 buffer_1829 0 false))
  ([value_1828 buffer_1829 diff-id_1830]
    (pack-x value_1828 diff-id_1830 false))
  ([value_1828 buffer_1829 diff-id_1830 diffed?_1831]
    (pack
      value_1828
      buffer_1829
      0
      diff-id_1830
      diffed?_1831
      (if diffed?_1831 pack-diffed-inner*-x pack-inner*-x))))

(defn undiff-x [value-1_1835 value-2_1836]
  (if (= :s/dnil value-2_1836) value-1_1835 value-2_1836))

(defn unpack [raw_1818]
  (let [buffer_1819 (wrap raw_1818)
        headers_1820 (read-headers! buffer_1819)
        schema_1823 (schema-ids (:schema-id headers_1820))]
    (if-not schema_1823
      :s/invalid
      {:schema schema_1823,
       :diffed? (:diffed? headers_1820),
       :value
       ((case
          schema_1823
          :x
          (if (:diffed headers_1820)
            unpack-diffed-inner*-x
            unpack-inner*-x))
         buffer_1819),
       :diff-id (:diff-id headers_1820)})))

