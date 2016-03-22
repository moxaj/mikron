(ns seria.type
  (:require [clojure.set :as set]))

(def primitive-types #{:byte :ubyte :short :ushort :int :uint :long :float :double
                       :char :boolean :varint
                       :string :keyword :symbol :any})
(def primitive-type? primitive-types)

(def composite-types #{:list :vector :set :map :tuple :record :optional :multi :enum})
(defn composite-type? [schema]
  (and (vector? schema)
       (composite-types (first schema))))

(def built-in-types (set/union primitive-types composite-types))
(def built-in-type? built-in-types)

(defn custom-type? [schema]
  (and (keyword? schema)
       (not (built-in-type? schema))))

(def directly-interpable-types #{:byte :ubyte :short :ushort :int :uint :long :float :double :varint})
(def directly-interpable-type? directly-interpable-types)

(def floating-types #{:float :double})
(def floating-type? floating-types)

(def traceable-types #{:vector :map :tuple :record :optional :multi})
(defn traceable-type? [schema]
  (and (composite-type? schema)
       (traceable-types (first schema))))

(defn diffable-type? [schema]
  (and (traceable-type? schema)
       (let [diff (:diff (second schema))]
         (or (= :all diff)
             (and (vector? diff)
                  (not (empty? diff)))))))

(defn interpable-type? [schema]
  (and (traceable-type? schema)
       (let [interp (:interp (second schema))]
         (or (= :all interp)
             (and (vector? interp)
                  (not (empty? interp)))))))

(defn traceable-index? [index traceable-indices]
  (or (= :all traceable-indices)
      ((set traceable-indices) index)))
