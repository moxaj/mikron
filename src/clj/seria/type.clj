(ns seria.type
  "Type hierarchy.")

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
      (derives :simple    [:primitive :string :keyword :symbol :nil :any])
      (derives :complex   [:list :vector :set :map :tuple :record :optional :multi :enum])
      (derives :built-in  [:simple :complex])))

(def hierarchy)

(defn add-custom-types [_ custom-types]
  (derives initial-hierarchy :custom custom-types))
