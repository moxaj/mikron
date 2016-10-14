(ns mikron.type
  "Type hierarchy."
  (:require [mikron.util.type :as util.type]))

(defn derives [hierarchy parent children]
  (reduce (fn [h child]
            (derive h child parent))
          hierarchy
          children))

(def default-hierarchy
  (-> (make-hierarchy)
      (derives :integer   [:byte :ubyte :short :ushort :int :uint :long :varint])
      (derives :floating  [:float :double])
      (derives :number    [:integer :floating])
      (derives :primitive [:number :boolean :binary :nil])
      (derives :aliased   [:char :string :keyword :symbol :any :date])
      (derives :simple    [:primitive :aliased])
      (derives :coll      [:list :vector :set])
      (derives :complex   [:coll :map :tuple :record :optional :multi :enum :wrapped])
      (derives :built-in  [:simple :complex])))

(def hierarchy nil)

(defn add-custom-types [_ custom-types]
  (derives default-hierarchy :custom custom-types))

(def aliases
  {:char    [:wrapped {} `util.type/char->int
                         `util.type/int->char
                         :int]
   :string  [:wrapped {} `util.type/string->binary
                         `util.type/binary->string
                         :binary]
   :keyword [:wrapped {} `util.type/keyword->string
                         `util.type/string->keyword
                         :string]
   :symbol  [:wrapped {} `str
                         `symbol
                         :string]
   :any     [:wrapped {} `util.type/any->string
                         `util.type/string->any
                         :string]
   :date    [:wrapped {} `util.type/date->long
                         `util.type/long->date
                         :long]})
