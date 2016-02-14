(ns seria.spec
  (:require [clojure.set :refer [union]]))

(def primitive-types #{:byte :ubyte :short :ushort :int :uint :long :float :double :char :boolean})
(def primitive? primitive-types)

(def advanced-types #{:string :keyword :symbol :any})
(def advanced? advanced-types)

(def composite-types #{:list :vector :set :map :tuple :record :optional :multi :enum})
(defn composite? [schema]
  (and (vector? schema)
       (composite-types (first schema))))

(def built-in-types (union primitive-types advanced-types composite-types))
(def built-in? built-in-types)

(defn custom? [schema]
  (and (keyword? schema)
       (not (built-in? schema))))

(def size-types #{:ubyte :ushort})
(def size? size-types)

(def directly-interpable-types #{:byte :ubyte :short :ushort :int :uint :long :float :double})
(def directly-interpable? directly-interpable-types)

(def int-types #{:byte :ubyte :short :ushort :int :uint :long})
(def int? int-types)

(def traceable-types #{:vector :map :tuple :record :optional :multi})
(defn traceable? [schema]
  (and (composite? schema)
       (traceable-types (first schema))))

(defn diffable? [schema]
  (and (traceable? schema)
       (let [diff (:diff (second schema))]
         (or (= :all diff)
             (and (vector? diff)
                  (not (empty? diff)))))))

(defn interpable? [schema]
  (and (traceable? schema)
       (let [interp (:interp (second schema))]
         (or (= :all interp)
             (and (vector? interp)
                  (not (empty? interp)))))))

(defn traceable-index? [index indices]
  (or (= :all indices)
      ((set indices) index)))
