(ns seria.type
  "Types and predicates.")

(def primitive-type? #{:byte :ubyte :short :ushort :int :uint :long :float :double
                       :char :boolean :varint
                       :string :keyword :symbol :any})

(defn composite-type? [schema]
  (and (vector? schema)
       (#{:list :vector :set :map :tuple :record :optional :multi :enum}
        (first schema))))

(def built-in-type? #(or (primitive-type? %)
                         (composite-type? %)))

(defn custom-type? [schema]
  (and (keyword? schema)
       (not (built-in-type? schema))))

(def number-type? #{:byte :ubyte :short :ushort :int :uint :long :float :double :varint})

(def integer-type? #{:byte :ubyte :short :ushort :int :uint :long :varint})

(defn traceable-type? [schema]
  (and (vector? schema)
       (#{:list :vector :map :tuple :record :optional :multi}
        (first schema))))

(defn interpable-type? [schema]
  (and (traceable-type? schema)
       (let [interp (:interp (second schema))]
         (or (= :all interp)
             (and (vector? interp)
                  (not (empty? interp)))))))

(defn traceable-index? [index traceable-indices]
  (or (= :all traceable-indices)
      ((set traceable-indices) index)))

(defn type-of [schema & _]
  (cond
    (primitive-type? schema) schema
    (composite-type? schema) (first schema)
    (custom-type? schema)    :custom))
