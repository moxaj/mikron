(defn seria.codegen.header
  "")

(comment
  :default-header {:schema  schema
                   :diffed? diffed?}
  :diff-header    {:diff-group diff-group
                   :diff-id    diff-id}

  (pack value buffer {:schema :snapshot, :diffed? true}
                     {:diff-header {}})

  (pack-x value options)
  (unpack raw)
  (gen-x)
  (diff-x value-1 value-2)
  (undiff-x value-1 value-2)
  (interp-x value-1 value-2 time-1 time-2 time)
  (measure-x value

    (pack :schema value {:diffed? true
                         :headers {:diff-header {.. ..}
                                   :meta-header [1 2 3]}}))

  (pack :snapshot snapshot {:diffed? true
                            :buffer  buffer
                            :header})
  (with-meta 4)

  (with-buffer buffer
    (pack :x value {:diffed? false
                    :headers {:diff-header ...}})
    (gen :x)

    -> raw
    (unpack raw)
    -> {:value  value
        :header {:schema :x :diffed? false}}


    (pack value header custom-headers))

  (unpack raw ->
    {:value value
     :main-header {:schema schema :diffed? diffed}
     :custom-headers {:diff-header {:diff-id 10 :diff-grp 30}
                      :meta-header [1 2 3 4]}

     :headers {:diff-header [:record {:diff-id  :varint
                                      :diff-grp :varint}]
               :meta-header [:list :int]}}))
(let [{:keys [a b]} :sdf])

(def pack-x (partial pack :x config))
