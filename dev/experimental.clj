(comment
  (defprocessors pack-x pack-y unpack diff-x diff-y gen-x gen-y
    :schemas {:dlist [:list :double]}
    :comparators {}
    :diff-routes {}
    :interp-routes {})

  (make-processors
    :schemas {:dlist [:list :double]}
    :headers {}
    :comparators {}
    :diff-routes {}
    :interp-routes {}) ;; => {:keys [pack-x pack-y ...]} letfn implementation!!

  (pack-x value buffer {:diffed? true})
  (unpack raw) ;; =>{:keys [value schema diffed?]}
  (gen-x)
  (diff-x value-1 value-2)
  (interp-x value-1 value-2 time-1 time-2 time))
