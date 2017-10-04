(ns mikron.compiler.schema
  "Schema definition related functions."
  (:require [macrowbar.core :as macrowbar]))

(macrowbar/emit :debug
  (defn schema-name
    "Returns the name of `schema`."
    [schema & _]
    (if (vector? schema)
      (first schema)
      :custom))

  (defn derive-all
    "Returns a new hierarchy in which all `children` derive from `parent`, using `hierarchy` as the base."
    [hierarchy parent children]
    (reduce #(derive %1 %2 parent) hierarchy children))

  (def schema-names
    "The set of built-in schema names."
    #{:byte :ubyte :short :ushort :int :uint :long :varint :float :double :char :boolean
      :nil :binary :string :keyword :symbol :any :enum :optional :wrapped :multi
      :list :vector :set :map :record :tuple})

  (def hierarchy
    "The semantic schema hierarchy."
    (reduce-kv derive-all
               (make-hierarchy)
               {:integer   [:byte :ubyte :short :ushort :int :uint :long :varint]
                :floating  [:float :double]
                :number    [:integer :floating]
                :primitive [:number :boolean :binary]
                :coll      [:list :vector :set]}))

  (def extended-hierarchy
    "The schema hierarchy extended with syntactic groupings."
    (reduce-kv derive-all
               hierarchy
               {:simple   [:number :char :boolean :nil :binary :string :keyword :symbol :any]
                :scalar   [:simple :enum]
                :compound [:optional :wrapped :multi :coll :map :record :tuple]}))

  (defn integer-schema
    "Returns an integer schema into which `size` can fit."
    [^long size]
    (condp > size
      256        [:ubyte]
      65536      [:ushort]
      2147483648 [:uint]
      [:long]))

  (defmulti schema-keys
    "Returns the possible sub-path keys for a schema (e.g. indices for `tuple`, keys for `record`)."
    schema-name
    :hierarchy #'hierarchy)

  (defmethod schema-keys :tuple [[_ _ schemas']]
    (range (count schemas')))

  (defmethod schema-keys :record [[_ _ schemas']]
    (keys schemas'))

  (defmethod schema-keys :multi [[_ _ _ schemas']]
    (keys schemas'))

  (defmethod schema-keys :default [_]
    nil)

  (def expand-paths-hierarchy
    "Modified hierarchy for `expand-paths`."
    (derive-all hierarchy :keyed [:tuple :record :multi]))

  (defmulti expand-paths*
    "Returns a fully expanded path expression."
    (fn [paths schema]
      (schema-name schema))
    :hierarchy #'expand-paths-hierarchy)

  (defn expand-paths
    "Returns a fully expanded path expression."
    [paths schema]
    (if-not paths
      false
      (expand-paths* paths schema)))

  (defmethod expand-paths* :keyed [paths schema]
    (let [schemas' (peek schema)]
      (reduce-kv (fn [paths key' paths']
                   (assoc paths key' (expand-paths paths' (schemas' key'))))
                 {}
                 (if (true? paths)
                   (zipmap (schema-keys schema) (repeat true))
                   paths))))

  (defmethod expand-paths* :coll [paths [_ _ schema']]
    {:all (expand-paths (if (true? paths)
                          true
                          (:all paths))
                        schema')})

  (defmethod expand-paths* :map [paths [_ _ _ val-schema']]
    {:all (expand-paths (if (true? paths)
                          true
                          (:all paths))
                        val-schema')})

  (defmethod expand-paths* :default [paths _]
    (true? paths))

  (defmulti schema-children*
    "Returns the immediate children of `schema`."
    schema-name
    :hierarchy #'hierarchy)

  (defmethod schema-children* :optional [[_ _ schema']]
    [schema'])

  (defmethod schema-children* :wrapped [[_ _ _ _ schema']]
    [schema'])

  (defmethod schema-children* :multi [[_ _ _ schemas']]
    (vals schemas'))

  (defmethod schema-children* :coll [[_ _ schema']]
    [schema'])

  (defmethod schema-children* :map [[_ _ key-schema' val-schema']]
    [key-schema' val-schema'])

  (defmethod schema-children* :record [[_ _ schemas']]
    (vals schemas'))

  (defmethod schema-children* :tuple [[_ _ schemas']]
    schemas')

  (defmethod schema-children* :default [_]
    [])

  (defn schema-children
    "Returns a list consisting of `schema` and all of its children (including transitive ones)."
    [schema]
    (loop [children []
           schemas  [schema]]
      (if (empty? schemas)
        children
        (recur (into children schemas)
               (mapcat schema-children* schemas)))))

  (defn custom-schemas
    "Returns the custom schemas used by `schema`."
    [schema]
    (->> schema
       (schema-children)
       (filter (comp #{:custom} schema-name))
       (set)))

  (defn leaf-descendants
    "Returns the leaf children of the given tag in the hierarchy, or the tag if it has no leaf children."
    [hierarchy tag]
    (let [children (descendants hierarchy tag)]
      (if (empty? children)
        #{tag}
        (set (filter (fn [tag']
                       (empty? (descendants hierarchy tag')))
                     children))))))
