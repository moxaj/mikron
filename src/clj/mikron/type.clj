(ns mikron.type
  "Type hierarchy."
  (:require [mikron.common :as common]))

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
  {:char    [:wrapped {} `common/char->int `common/int->char :int]
   :string  [:wrapped {} `common/string->binary `common/binary->string :binary]
   :keyword [:wrapped {} `common/keyword->string `keyword :string]
   :symbol  [:wrapped {} `str `symbol :string]
   :any     [:wrapped {} `pr-str `common/read-string+ :string]
   :date    [:wrapped {} `common/date->long `common/long->date :long]})
