(ns config1-compiled
  (:require [seria.buffer :refer [read-boolean!
                                  read-float!
                                  read-int!
                                  read-ubyte!
                                  write-boolean!
                                  write-float!
                                  write-int!
                                  write-ubyte!]]
            [seria.util :refer [cljc-abs]]))

(def config1
 {:schemas
  {:body
   [:record
    {:diff :all, :interp [], :extends [], :constructor nil}
    {:user-data
     [:record
      {:diff [], :interp [], :extends [], :constructor nil}
      {:id :int}],
     :position :coord,
     :angle :float,
     :body-type [:enum {} [:dynamic :static :kinetic]],
     :fixtures [:list {:size :ubyte} :fixture]}],
   :fixture
   [:record
    {:diff :all, :interp [], :extends [], :constructor nil}
    {:user-data
     [:record
      {:diff [], :interp [], :extends [], :constructor nil}
      {:color :int}],
     :coords [:list {:size :ubyte} :coord]}],
   :coord [:tuple {:diff [], :interp []} [:float :float]],
   :snapshot
   [:record
    {:diff :all, :interp [], :extends [], :constructor nil}
    {:time :int, :bodies [:list {:size :ubyte} :body]}],
   :x :snapshot},
  :schema-bimap
  {:size :ubyte,
   :map
   {0 :body,
    :coord 1,
    1 :coord,
    4 :x,
    :snapshot 3,
    3 :snapshot,
    2 :fixture,
    :x 4,
    :fixture 2,
    :body 0}},
  :enum-bimap
  {:size :ubyte,
   :map
   {0 :dynamic,
    :dynamic 0,
    1 :kinetic,
    :kinetic 1,
    2 :static,
    :static 2}},
  :multi-bimap {:size :ubyte, :map {}},
  :eq-ops {},
  :processors
  {:body
   {:packer
    (fn [value buffer config diffed?]
      (let [pack-value-fn_1782 (fn
                                 []
                                 (let
                                   [inner-value_1763 (get value :angle)
                                    inner-value_1765
                                    (get value :fixtures)
                                    inner-value_1764
                                    (get value :body-type)
                                    inner-value_1767
                                    (get value :user-data)
                                    inner-value_1766
                                    (get value :position)]
                                   (let
                                     [pack-value-fn_1768
                                      (fn
                                        []
                                        (write-float!
                                          buffer
                                          inner-value_1763))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1768)
                                       (let
                                         [value-dnil?_1769
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1763)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1769)
                                         (when-not
                                           value-dnil?_1769
                                           (pack-value-fn_1768)))))
                                   (let
                                     [pack-value-fn_1770
                                      (fn
                                        []
                                        (write-ubyte!
                                          buffer
                                          (get
                                            {0 :dynamic,
                                             :dynamic 0,
                                             1 :kinetic,
                                             :kinetic 1,
                                             2 :static,
                                             :static 2}
                                            inner-value_1764)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1770)
                                       (let
                                         [value-dnil?_1771
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1764)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1771)
                                         (when-not
                                           value-dnil?_1771
                                           (pack-value-fn_1770)))))
                                   (let
                                     [pack-value-fn_1773
                                      (fn
                                        []
                                        (do
                                          (write-ubyte!
                                            buffer
                                            (count inner-value_1765))
                                          (run!
                                            (fn
                                              [inner-value_1772]
                                              ((get-in
                                                 config
                                                 [:processors
                                                  :fixture
                                                  :packer]
                                                inner-value_1772
                                                buffer
                                                config
                                                diffed?)))
                                            inner-value_1765)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1773)
                                       (let
                                         [value-dnil?_1774
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1765)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1774)
                                         (when-not
                                           value-dnil?_1774
                                           (pack-value-fn_1773)))))
                                   (let
                                     [pack-value-fn_1775
                                      (fn
                                        []
                                        ((get-in
                                           config
                                           [:processors
                                            :coord
                                            :packer]
                                          inner-value_1766
                                          buffer
                                          config
                                          diffed?)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1775)
                                       (let
                                         [value-dnil?_1776
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1766)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1776)
                                         (when-not
                                           value-dnil?_1776
                                           (pack-value-fn_1775)))))
                                   (let
                                     [pack-value-fn_1780
                                      (fn
                                        []
                                        (write-int!
                                          buffer
                                          (get inner-value_1767 :id)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1780)
                                       (let
                                         [value-dnil?_1781
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1767)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1781)
                                         (when-not
                                           value-dnil?_1781
                                           (pack-value-fn_1780)))))))]
        (if-not diffed?
          (pack-value-fn_1782)
          (let [value-dnil?_1783 (= :seria.diff/dnil value)]
            (write-boolean! buffer value-dnil?_1783)
            (when-not value-dnil?_1783 (pack-value-fn_1782)))))),
    :unpacker
    (fn [buffer config diffed?]
      (let [unpack-value-fn_1789 (fn
                                   []
                                   {:angle
                                    (let
                                      [unpack-value-fn_1784
                                       (fn [] (read-float! buffer))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1784)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1784)))),
                                    :body-type
                                    (let
                                      [unpack-value-fn_1785
                                       (fn
                                         []
                                         (get
                                           {0 :dynamic,
                                            :dynamic 0,
                                            1 :kinetic,
                                            :kinetic 1,
                                            2 :static,
                                            :static 2}
                                           (read-ubyte! buffer)))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1785)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1785)))),
                                    :fixtures
                                    (let
                                      [unpack-value-fn_1786
                                       (fn
                                         []
                                         (doall
                                           (repeatedly
                                             (read-ubyte! buffer)
                                             (fn
                                               []
                                               ((get-in
                                                  config
                                                  [:processors
                                                   :fixture
                                                   :unpacker]
                                                 buffer
                                                 config
                                                 diffed?))))))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1786)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1786)))),
                                    :position
                                    (let
                                      [unpack-value-fn_1787
                                       (fn
                                         []
                                         ((get-in
                                            config
                                            [:processors
                                             :coord
                                             :unpacker]
                                           buffer
                                           config
                                           diffed?)))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1787)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1787)))),
                                    :user-data
                                    (let
                                      [unpack-value-fn_1788
                                       (fn
                                         []
                                         {:id (read-int! buffer)})]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1788)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1788))))})]
        (if-not diffed?
          (unpack-value-fn_1789)
          (if (read-boolean! buffer)
            :seria.diff/dnil
            (unpack-value-fn_1789))))),
    :differ
    (fn [value-1 value-2 config]
      (if (= value-1 value-2)
        :seria.diff/dnil
        (let [inner-value_1790 (get value-2 :angle)
              inner-value_1791 (get value-2 :body-type)
              inner-value_1792 (get value-2 :fixtures)
              inner-value_1794 (get value-2 :user-data)]
          {:angle
           (if (= (get value-1 :angle) inner-value_1790)
             :seria.diff/dnil
             inner-value_1790),
           :body-type
           (if (= (get value-1 :body-type) inner-value_1791)
             :seria.diff/dnil
             inner-value_1791),
           :fixtures
           (if (= (get value-1 :fixtures) inner-value_1792)
             :seria.diff/dnil
             inner-value_1792),
           :position
           ((get-in config [:processors :coord :differ]
             (get value-1 :position)
             (get value-2 :position)
             config),)
           :user-data
           (if (= (get value-1 :user-data) inner-value_1794)
             :seria.diff/dnil
             inner-value_1794)}))),
    :undiffer
    (fn [value-1 value-2 config]
      (if (= :seria.diff/dnil value-2)
        value-1
        (let [inner-value_1802 (get value-2 :fixtures)
              inner-value_1800 (get value-2 :angle)
              inner-value_1804 (get value-2 :user-data)
              inner-value_1801 (get value-2 :body-type)]
          {:angle
           (if (= :seria.diff/dnil inner-value_1800)
             (get value-1 :angle)
             inner-value_1800),
           :body-type
           (if (= :seria.diff/dnil inner-value_1801)
             (get value-1 :body-type)
             inner-value_1801),
           :fixtures
           (if (= :seria.diff/dnil inner-value_1802)
             (get value-1 :fixtures)
             inner-value_1802),
           :position
           ((get-in config [:processors :coord :undiffer]
             (get value-1 :position)
             (get value-2 :position)
             config),)
           :user-data
           (if (= :seria.diff/dnil inner-value_1804)
             (get value-1 :user-data)
             inner-value_1804)}))),
    :interper
    (fn [value-1 value-2 time-1 time-2 time config]
      (if (< (cljc-abs (- time time-1)) (cljc-abs (- time time-2)))
        value-1
        value-2))},
   :fixture
   {:packer
    (fn [value buffer config diffed?]
      (let [pack-value-fn_1820 (fn
                                 []
                                 (let
                                   [inner-value_1811
                                    (get value :user-data)
                                    inner-value_1810
                                    (get value :coords)]
                                   (let
                                     [pack-value-fn_1813
                                      (fn
                                        []
                                        (do
                                          (write-ubyte!
                                            buffer
                                            (count inner-value_1810))
                                          (run!
                                            (fn
                                              [inner-value_1812]
                                              ((get-in
                                                 config
                                                 [:processors
                                                  :coord
                                                  :packer]
                                                inner-value_1812
                                                buffer
                                                config
                                                diffed?)))
                                            inner-value_1810)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1813)
                                       (let
                                         [value-dnil?_1814
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1810)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1814)
                                         (when-not
                                           value-dnil?_1814
                                           (pack-value-fn_1813)))))
                                   (let
                                     [pack-value-fn_1818
                                      (fn
                                        []
                                        (write-int!
                                          buffer
                                          (get
                                            inner-value_1811
                                            :color)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1818)
                                       (let
                                         [value-dnil?_1819
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1811)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1819)
                                         (when-not
                                           value-dnil?_1819
                                           (pack-value-fn_1818)))))))]
        (if-not diffed?
          (pack-value-fn_1820)
          (let [value-dnil?_1821 (= :seria.diff/dnil value)]
            (write-boolean! buffer value-dnil?_1821)
            (when-not value-dnil?_1821 (pack-value-fn_1820)))))),
    :unpacker
    (fn [buffer config diffed?]
      (let [unpack-value-fn_1824 (fn
                                   []
                                   {:coords
                                    (let
                                      [unpack-value-fn_1822
                                       (fn
                                         []
                                         (doall
                                           (repeatedly
                                             (read-ubyte! buffer)
                                             (fn
                                               []
                                               ((get-in
                                                  config
                                                  [:processors
                                                   :coord
                                                   :unpacker]
                                                 buffer
                                                 config
                                                 diffed?))))))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1822)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1822)))),
                                    :user-data
                                    (let
                                      [unpack-value-fn_1823
                                       (fn
                                         []
                                         {:color (read-int! buffer)})]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1823)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1823))))})]
        (if-not diffed?
          (unpack-value-fn_1824)
          (if (read-boolean! buffer)
            :seria.diff/dnil
            (unpack-value-fn_1824))))),
    :differ
    (fn [value-1 value-2 config]
      (if (= value-1 value-2)
        :seria.diff/dnil
        (let [inner-value_1825 (get value-2 :coords)
              inner-value_1826 (get value-2 :user-data)]
          {:coords
           (if (= (get value-1 :coords) inner-value_1825)
             :seria.diff/dnil
             inner-value_1825),
           :user-data
           (if (= (get value-1 :user-data) inner-value_1826)
             :seria.diff/dnil
             inner-value_1826)}))),
    :undiffer
    (fn [value-1 value-2 config]
      (if (= :seria.diff/dnil value-2)
        value-1
        (let [inner-value_1829 (get value-2 :coords)
              inner-value_1830 (get value-2 :user-data)]
          {:coords
           (if (= :seria.diff/dnil inner-value_1829)
             (get value-1 :coords)
             inner-value_1829),
           :user-data
           (if (= :seria.diff/dnil inner-value_1830)
             (get value-1 :user-data)
             inner-value_1830)}))),
    :interper
    (fn [value-1 value-2 time-1 time-2 time config]
      (if (< (cljc-abs (- time time-1)) (cljc-abs (- time time-2)))
        value-1
        value-2))},
   :coord
   {:packer
    (fn [value buffer config diffed?]
      (let [pack-value-fn_1839 (fn
                                 []
                                 (do
                                   (write-float! buffer (value 0))
                                   (write-float! buffer (value 1))))]
        (if-not diffed?
          (pack-value-fn_1839)
          (let [value-dnil?_1840 (= :seria.diff/dnil value)]
            (write-boolean! buffer value-dnil?_1840)
            (when-not value-dnil?_1840 (pack-value-fn_1839)))))),
    :unpacker
    (fn [buffer config diffed?]
      (let [unpack-value-fn_1842 (fn
                                   []
                                   [(read-float! buffer)
                                    (read-float! buffer)])]
        (if-not diffed?
          (unpack-value-fn_1842)
          (if (read-boolean! buffer)
            :seria.diff/dnil
            (unpack-value-fn_1842))))),
    :differ
    (fn [value-1 value-2 config]
      (if (= value-1 value-2) :seria.diff/dnil value-2)),
    :undiffer
    (fn [value-1 value-2 config]
      (if (= :seria.diff/dnil value-2) value-1 value-2)),
    :interper
    (fn [value-1 value-2 time-1 time-2 time config]
      (if (< (cljc-abs (- time time-1)) (cljc-abs (- time time-2)))
        value-1
        value-2))},
   :snapshot
   {:packer
    (fn [value buffer config diffed?]
      (let [pack-value-fn_1850 (fn
                                 []
                                 (let
                                   [inner-value_1843
                                    (get value :bodies)
                                    inner-value_1844 (get value :time)]
                                   (let
                                     [pack-value-fn_1846
                                      (fn
                                        []
                                        (do
                                          (write-ubyte!
                                            buffer
                                            (count inner-value_1843))
                                          (run!
                                            (fn
                                              [inner-value_1845]
                                              ((get-in
                                                 config
                                                 [:processors
                                                  :body
                                                  :packer]
                                                inner-value_1845
                                                buffer
                                                config
                                                diffed?)))
                                            inner-value_1843)))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1846)
                                       (let
                                         [value-dnil?_1847
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1843)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1847)
                                         (when-not
                                           value-dnil?_1847
                                           (pack-value-fn_1846)))))
                                   (let
                                     [pack-value-fn_1848
                                      (fn
                                        []
                                        (write-int!
                                          buffer
                                          inner-value_1844))]
                                     (if-not
                                       diffed?
                                       (pack-value-fn_1848)
                                       (let
                                         [value-dnil?_1849
                                          (=
                                            :seria.diff/dnil
                                            inner-value_1844)]
                                         (write-boolean!
                                           buffer
                                           value-dnil?_1849)
                                         (when-not
                                           value-dnil?_1849
                                           (pack-value-fn_1848)))))))]
        (if-not diffed?
          (pack-value-fn_1850)
          (let [value-dnil?_1851 (= :seria.diff/dnil value)]
            (write-boolean! buffer value-dnil?_1851)
            (when-not value-dnil?_1851 (pack-value-fn_1850)))))),
    :unpacker
    (fn [buffer config diffed?]
      (let [unpack-value-fn_1854 (fn
                                   []
                                   {:bodies
                                    (let
                                      [unpack-value-fn_1852
                                       (fn
                                         []
                                         (doall
                                           (repeatedly
                                             (read-ubyte! buffer)
                                             (fn
                                               []
                                               ((get-in
                                                  config
                                                  [:processors
                                                   :body
                                                   :unpacker]
                                                 buffer
                                                 config
                                                 diffed?))))))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1852)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1852)))),
                                    :time
                                    (let
                                      [unpack-value-fn_1853
                                       (fn [] (read-int! buffer))]
                                      (if-not
                                        diffed?
                                        (unpack-value-fn_1853)
                                        (if
                                          (read-boolean! buffer)
                                          :seria.diff/dnil
                                          (unpack-value-fn_1853))))})]
        (if-not diffed?
          (unpack-value-fn_1854)
          (if (read-boolean! buffer)
            :seria.diff/dnil
            (unpack-value-fn_1854))))),
    :differ
    (fn [value-1 value-2 config]
      (if (= value-1 value-2)
        :seria.diff/dnil
        (let [inner-value_1856 (get value-2 :time)
              inner-value_1855 (get value-2 :bodies)]
          {:bodies
           (if (= (get value-1 :bodies) inner-value_1855)
             :seria.diff/dnil
             inner-value_1855),
           :time
           (if (= (get value-1 :time) inner-value_1856)
             :seria.diff/dnil
             inner-value_1856)}))),
    :undiffer
    (fn [value-1 value-2 config]
      (if (= :seria.diff/dnil value-2)
        value-1
        (let [inner-value_1859 (get value-2 :bodies)
              inner-value_1860 (get value-2 :time)]
          {:bodies
           (if (= :seria.diff/dnil inner-value_1859)
             (get value-1 :bodies)
             inner-value_1859),
           :time
           (if (= :seria.diff/dnil inner-value_1860)
             (get value-1 :time)
             inner-value_1860)}))),
    :interper
    (fn [value-1 value-2 time-1 time-2 time config]
      (if (< (cljc-abs (- time time-1)) (cljc-abs (- time time-2)))
        value-1
        value-2))},
   :x
   {:packer
    (fn [value buffer config diffed?]
      (let [pack-value-fn_1863 (fn
                                 []
                                 ((get-in
                                    config
                                    [:processors :snapshot :packer]
                                   value
                                   buffer
                                   config
                                   diffed?)))]
        (if-not diffed?
          (pack-value-fn_1863)
          (let [value-dnil?_1864 (= :seria.diff/dnil value)]
            (write-boolean! buffer value-dnil?_1864)
            (when-not value-dnil?_1864 (pack-value-fn_1863)))))),
    :unpacker
    (fn [buffer config diffed?]
      (let [unpack-value-fn_1865 (fn
                                   []
                                   ((get-in
                                      config
                                      [:processors
                                       :snapshot
                                       :unpacker]
                                     buffer
                                     config
                                     diffed?)))]
        (if-not diffed?
          (unpack-value-fn_1865)
          (if (read-boolean! buffer)
            :seria.diff/dnil
            (unpack-value-fn_1865))))),
    :differ
    (fn [value-1 value-2 config]
      ((get-in config [:processors :snapshot :differ]
        value-1
        value-2
        config)),)
    :undiffer
    (fn [value-1 value-2 config]
      ((get-in config [:processors :snapshot :undiffer]
        value-1
        value-2
        config)),)
    :interper
    (fn [value-1 value-2 time-1 time-2 time config]
      ((get-in config [:processors :snapshot :interper]
        value-1
        value-2
        time-1
        time-2
        time
        config)),)}}
  :state (atom {})})
