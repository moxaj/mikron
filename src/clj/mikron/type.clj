(ns mikron.type
  "Type hierarchy."
  (:require [mikron.common :as common]))

(defn derives [hierarchy parent children]
  (reduce (fn [h child]
            (derive h child parent))
          hierarchy
          children))

(def initial-hierarchy
  (-> (make-hierarchy)
      (derives :integer   [:byte :ubyte :short :ushort :int :uint :long :varint])
      (derives :floating  [:float :double])
      (derives :number    [:integer :floating])
      (derives :primitive [:number :boolean :char :string :raw])
      (derives :simple    [:primitive :keyword :symbol :nil :any :date])
      (derives :coll      [:list :vector :set])
      (derives :complex   [:coll :map :tuple :record :optional :multi :enum :wrapped])
      (derives :built-in  [:simple :complex])
      (derives :template  [:date])))

(def hierarchy nil)

(defn add-custom-types [_ custom-types]
  (derives initial-hierarchy :custom custom-types))

(def templates
  {:date [:wrapped {} `common/date->long `common/long->date
          :long]})
