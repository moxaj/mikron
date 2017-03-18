(ns mikron.compiler.schema
  "Schema definition related functions."
  (:require [clojure.set :as set]
            ;; Runtime
            [mikron.util.schema :as util.schema]))

(def aliased-schemas
  "The default built-in aliased schemas."
  {:char    [:wrapped {} `util.schema/char->int `util.schema/int->char [:int]]
   :string  [:wrapped {} `util.schema/string->binary `util.schema/binary->string [:binary]]
   :keyword [:wrapped {} `util.schema/keyword->string `util.schema/string->keyword [:string]]
   :symbol  [:wrapped {} `str `symbol [:string]]
   :any     [:wrapped {} `util.schema/any->string `util.schema/string->any [:string]]})

(defn derive-all
  "Returns a new hierarchy in which all `children` derive from `parent`, using `hierarchy` as the base."
  [hierarchy parent children]
  (reduce #(derive %1 %2 parent) hierarchy children))

(def hierarchy
  "The default schema hierarchy."
  (reduce-kv derive-all
             (make-hierarchy)
             {:integer   [:byte :ubyte :short :ushort :int :uint :long :varint]
              :floating  [:float :double]
              :number    [:integer :floating]
              :primitive [:number :boolean :binary :nil]
              :aliased   (keys aliased-schemas)
              :coll      [:list :vector :set]}))

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

(defmulti expand-path* (fn [path schema] (schema-name schema)) :hierarchy #'hierarchy)

(defn expand-path
  "Returns a fully expanded path expression."
  [path schema]
  (if-not path
    false
    (expand-path* path schema)))

(defmethod expand-path* :tuple [path [_ _ schemas']]
  (reduce-kv (fn [path key' path']
               (assoc path key' (expand-path path' (schemas' key'))))
             {}
             (if (true? path)
               (zipmap (range (count schemas')) (repeat true))
               path)))

(defmethod expand-path* :record [path [_ _ schemas']]
  (reduce-kv (fn [path key' path']
               (assoc path key' (expand-path path' (schemas' key'))))
             {}
             (if (true? path)
               (zipmap (keys schemas') (repeat true))
               path)))

(defmethod expand-path* :multi [path [_ _ _ schemas']]
  (reduce-kv (fn [path key' path']
               (assoc path key' (expand-path path' (schemas' key'))))
             {}
             (if (true? path)
               (zipmap (keys schemas') (repeat true))
               path)))

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

(defmulti schema-seq* schema-name :hierarchy #'hierarchy)

(defn schema-seq [schema]
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

(defmethod schema-seq* :custom [schema]
  [])

(defmethod schema-seq* :default [schema]
  [])

(defn dependencies [schema]
  (->> schema
       (schema-seq)
       (filter (complement vector?))
       (set)))
