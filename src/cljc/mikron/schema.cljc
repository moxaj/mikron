(ns mikron.schema
  "Schema hierarchy."
  (:require [mikron.util.schema :as util.schema]))

(def aliases
  "The default built-in aliased types."
  {:char    [:wrapped {} `util.schema/char->int `util.schema/int->char [:int]]
   :string  [:wrapped {} `util.schema/string->binary `util.schema/binary->string [:binary]]
   :keyword [:wrapped {} `util.schema/keyword->string `util.schema/string->keyword [:string]]
   :symbol  [:wrapped {} `str `symbol [:string]]
   :any     [:wrapped {} `util.schema/any->string `util.schema/string->any [:string]]})

(defn derives
  "Returns a new hierarchy in which all `children` derive from `parent`, using `hierarchy` as the base."
  [hierarchy parent children]
  (reduce #(derive %1 %2 parent) hierarchy children))

(defn graph->hierarchy
  "Converts a graph to a hierarchy."
  [graph]
  (reduce (fn [hierarchy [parent children]]
            (derives hierarchy parent children))
          (make-hierarchy)
          graph))

(def hierarchy
  "The default type hierarchy."
  (graph->hierarchy
    {;; base hierarchy
     :integer   [:byte :ubyte :short :ushort :int :uint :long :varint]
     :floating  [:float :double]
     :number    [:integer :floating]
     :primitive [:number :boolean :binary :nil]
     :aliased   (keys aliases)
     :simple    [:primitive :aliased]
     :coll      [:list :vector :set]
     :complex   [:coll :map :tuple :record :optional :multi :enum :wrapped]
     :built-in  [:simple :complex]
     ;; comparability
     :identical?-comparable [:boolean :nil]
     :=-comparable          [:char :string :symbol]
     :keyword-comparable    [:keyword :enum]}))
