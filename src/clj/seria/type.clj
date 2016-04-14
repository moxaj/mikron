(ns seria.type
  "Types and predicates.")

(def simple-type? #{:byte :ubyte :short :ushort :int :uint :long :float :double :varint
                    :boolean :char :string :keyword :symbol :nil :any})

(def complex-type? #{:optional :multi :enum :list :vector :set :map :tuple :record})

(def built-in-type? #(or (simple-type? %)
                         (complex-type? %)))

(def custom-type? #(and (keyword? %)
                        (not (built-in-type? %))))

(def number-type? #{:byte :ubyte :short :ushort :int :uint :long :float :double :varint})

(def integer-type? #{:byte :ubyte :short :ushort :int :uint :long :varint})

(def diffable-type? #{:list :vector :map :tuple :record :optional :multi})

(def interpable-type? #{:map :tuple :record :optional :multi})

(defn type-of [schema & _]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)))
