(ns seria.type
  "Type hierarchy."
  (:require [seria.common :as common]))

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
      (derives :primitive [:number :boolean :char])
      (derives :simple    [:primitive :string :keyword :symbol :nil :any :date])
      (derives :complex   [:list :vector :set :map :tuple :record :optional :multi :enum :wrapped])
      (derives :built-in  [:simple :complex])
      (derives :template  [:date])))

(def hierarchy)

(defn add-custom-types [_ custom-types]
  (derives initial-hierarchy :custom custom-types))

(def templates
  {:date [:wrapped {:pre  `common/date->long
                    :post `common/long->date}
          :long]})

;;;;; ORDER
[:byte :ubyte :short :ushort :int :uint :long :varint :integer
 :float :double :floating :number
 :boolean :char :primitive
 :string :keyword :symbol :any :nil :date :simple
 :list :vector :set :map :tuple :record :optional :multi :enum :wrapped :complex :built-in
 :template
 :custom]
