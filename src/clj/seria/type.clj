(ns seria.type
  "Type hierarchy.")

(defn derives [hierarchy parent children]
  (reduce (fn [h child]
            (derive h child parent))
          hierarchy
          children))

(defn type-of [schema & _]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)))

(def initial-hierarchy
  (-> (make-hierarchy)
      (derives :s/integer   [:s/byte :s/ubyte :s/short :s/ushort :s/int :s/uint :s/long :s/varint])
      (derives :s/floating  [:s/float :s/double])
      (derives :s/number    [:s/integer :s/floating])
      (derives :s/primitive [:s/number :s/boolean :s/char])
      (derives :s/simple    [:s/primitive :s/string :s/keyword :s/symbol :s/nil :s/any])
      (derives :s/complex   [:s/list :s/vector :s/set :s/map :s/tuple :s/record :s/optional :s/multi :s/enum])
      (derives :s/built-in  [:s/simple :s/complex])
      (derives :s/diffable  [:s/list :s/vector :s/map :s/tuple :s/record :s/optional :s/multi])))

(def hierarchy nil)

(defn init-hierarchy [_ custom-types]
  (derives initial-hierarchy :s/custom custom-types))
