(ns seria.type
  "Types and predicates.")

(def primitive-types #{:byte :ubyte :short :ushort :int :uint :long :float :double
                       :char :boolean :varint
                       :string :keyword :symbol :any})
(def primitive-type? primitive-types)

(def composite-types #{:list :vector :set :map :tuple :record :optional :multi :enum})
(defn composite-type? [schema]
  (and (vector? schema)
       (composite-types (first schema))))

(def built-in-types (set (concat primitive-types composite-types)))
(def built-in-type? built-in-types)

(defn custom-type? [schema]
  (and (keyword? schema)
       (not (built-in-type? schema))))

(def number-types #{:byte :ubyte :short :ushort :int :uint :long :float :double :varint})
(def number-type? number-types)

(def integer-types #{:byte :ubyte :short :ushort :int :uint :long :varint})
(def integer-type? integer-types)

(def traceable-types #{:list :vector :map :tuple :record :optional :multi})
(defn traceable-type? [schema]
  (and (composite-type? schema)
       (traceable-types (first schema))))

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
