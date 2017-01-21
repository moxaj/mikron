(ns mikron.type
  "Type hierarchy."
  (:require [mikron.util.type :as util.type]))

(defn derives
  "Returns a new hierarchy in which all `children` derive from `parent`, using
  `hierarchy` as the base."
  [hierarchy parent children]
  (reduce #(derive %1 %2 parent) hierarchy children))

(def aliases
  "The default built-in aliased types."
  {:char    [:wrapped {} `util.type/char->int `util.type/int->char [:int]]
   :string  [:wrapped {} `util.type/string->binary `util.type/binary->string [:binary]]
   :keyword [:wrapped {} `util.type/keyword->string `util.type/string->keyword [:string]]
   :symbol  [:wrapped {} `str `symbol [:string]]
   :any     [:wrapped {} `util.type/any->string `util.type/string->any [:string]]})

(def hierarchy
  "The default type hierarchy."
  (-> (make-hierarchy)
      ;; base hierarchy
      (derives :integer   [:byte :ubyte :short :ushort :int :uint :long :varint])
      (derives :floating  [:float :double])
      (derives :number    [:integer :floating])
      (derives :primitive [:number :boolean :binary :nil])
      (derives :aliased   (keys aliases))
      (derives :simple    [:primitive :aliased])
      (derives :coll      [:list :vector :set])
      (derives :complex   [:coll :map :tuple :record :optional :multi :enum :wrapped])
      (derives :built-in  [:simple :complex])
      ;; comparability
      (derives :identical?-comparable [:keyword :boolean :nil :enum])
      (derives :=-comparable          [:char :string :symbol])))
