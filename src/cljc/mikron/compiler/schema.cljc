(ns mikron.compiler.schema
  "Schema definition related functions."
  (:require ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(def aliased-schemas
  "The default built-in aliased schemas."
  {:char    [:wrapped {} `runtime.processor.common/char->int
                         `runtime.processor.common/int->char
                         [:int]]
   :string  [:wrapped {} `runtime.processor.common/string->binary
                         `runtime.processor.common/binary->string
                         [:binary]]
   :keyword [:wrapped {} `runtime.processor.common/keyword->string
                         `runtime.processor.common/string->keyword
                         [:string]]
   :symbol  [:wrapped {} `str `symbol
                         [:string]]
   :any     [:wrapped {} `runtime.processor.common/any->string
                         `runtime.processor.common/string->any
                         [:string]]})

(defn derive-all
  "Returns a new hierarchy in which all `children` derive from `parent`, using `hierarchy` as the base."
  [hierarchy parent children]
  (reduce #(derive %1 %2 parent) hierarchy children))

(def schema-names
  #{:byte :ubyte :short :ushort :int :uint :long :varint :float :double :char :boolean
    :binary :nil :ignored :string :keyword :symbol :any :enum :optional :wrapped :multi
    :list :vector :set :map :record :tuple})

(def hierarchy
  "The default schema hierarchy."
  (reduce-kv derive-all
             (make-hierarchy)
             {:integer [:byte :ubyte :short :ushort :int :uint :long :varint]
              :number  [:integer :float :double]
              :aliased (keys aliased-schemas)
              :coll    [:list :vector :set]}))

(defn schema-name
  "Returns the name of `schema`."
  [schema & _]
  (if (vector? schema)
    (first schema)
    :custom))

(defn integer-schema
  "Returns an integer schema into which `size` can fit."
  [^long size]
  (condp > size
    256        [:byte]
    65536      [:short]
    2147483648 [:int]
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

;; Unused

(defmulti prewalk-schema*
  "Maps the function `f` over `schema` and its children."
  (fn [f schema] (schema-name schema))
  :hierarchy #'hierarchy)

(defn prewalk-schema [f schema]
  (prewalk-schema* f (f schema)))

(defmethod prewalk-schema* :optional [f schema]
  (update schema 2 (partial prewalk-schema f)))

(defmethod prewalk-schema* :wrapped [f schema]
  (update schema 4 (partial prewalk-schema f)))

(defmethod prewalk-schema* :multi [f [_ _ _ schemas' :as schema]]
  (update schema 3 (fn [schemas']
                     (reduce-kv (fn [schemas' key schema']
                                  (assoc schemas' key (prewalk-schema f schema')))
                                {}
                                schemas'))))

(defmethod prewalk-schema* :coll [f schema]
  (update schema 2 (partial prewalk-schema f)))

(defmethod prewalk-schema* :map [f [_ _ key-schema' val-schema' :as schema]]
  (-> schema
      (update 2 (partial prewalk-schema f))
      (update 3 (partial prewalk-schema f))))

(defmethod prewalk-schema* :record [f [_ _ schemas' :as schema]]
  (update schema 2 (fn [schemas']
                     (reduce-kv (fn [schemas' key schema']
                                  (assoc schemas' key (prewalk-schema f schema')))
                                {}
                                schemas'))))

(defmethod prewalk-schema* :tuple [f [_ _ schemas' :as schema]]
  (update schema 2 (fn [schemas']
                     (mapv (partial prewalk-schema f) schemas'))))

(defmethod prewalk-schema* :default [_ schema]
  schema)
