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
    :binary :nil :string :keyword :symbol :any :enum :optional :wrapped :multi
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

(def expand-path-hierarchy
  "Modified hierarchy for `expand-path`."
  (derive-all hierarchy :keyed [:tuple :record :multi]))

(defmulti expand-path*
  "Returns a fully expanded path expression."
  (fn [path schema]
    (schema-name schema))
  :hierarchy #'expand-path-hierarchy)

(defn expand-path
  "Returns a fully expanded path expression."
  [path schema]
  (if-not path
    false
    (expand-path* path schema)))

(defmethod expand-path* :keyed [path schema]
  (let [schemas' (peek schema)]
    (reduce-kv (fn [path key' path']
                 (assoc path key' (expand-path path' (schemas' key'))))
               {}
               (if (true? path)
                 (zipmap (schema-keys schema) (repeat true))
                 path))))

(defmethod expand-path* :coll [path [_ _ schema']]
  {:all (expand-path (if (true? path)
                       true
                       (:all path))
                     schema')})

(defmethod expand-path* :map [path [_ _ _ val-schema']]
  {:all (expand-path (if (true? path)
                       true
                       (:all path))
                     val-schema')})

(defmethod expand-path* :default [path _]
  (true? path))

(defmulti schema-seq*
  "Does a pre-order walk on `schema`, and collects them into a sequence."
  schema-name
  :hierarchy #'hierarchy)

(defn schema-seq
  "Does a pre-order walk on `schema`, and collects them into a sequence."
  [schema]
  (into [schema] (schema-seq* schema)))

(defmethod schema-seq* :coll [[_ _ schema']]
  (schema-seq schema'))

(defmethod schema-seq* :map [[_ _ key-schema' val-schema']]
  (into (schema-seq key-schema')
        (schema-seq val-schema')))

(defmethod schema-seq* :tuple [[_ _ schemas']]
  (->> schemas'
       (map schema-seq)
       (reduce into [])))

(defmethod schema-seq* :record [[_ _ schemas']]
  (->> schemas'
       (vals)
       (map schema-seq)
       (reduce into [])))

(defmethod schema-seq* :optional [[_ _ schema']]
  (schema-seq schema'))

(defmethod schema-seq* :multi [[_ _ _ schemas']]
  (->> schemas'
       (vals)
       (map schema-seq)
       (reduce into [])))

(defmethod schema-seq* :wrapped [[_ _ _ _ schema']]
  (schema-seq schema'))

(defmethod schema-seq* :default [schema]
  [])

(defn dependencies
  "Returns the dependencies of `schema`."
  [schema]
  (->> schema
       (schema-seq)
       (filter (complement vector?))
       (set)))
