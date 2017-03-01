(ns mikron.schema
  "Schema definition related functions."
  (:require [mikron.util.schema :as util.schema]))

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
  "The default type hierarchy."
  (reduce-kv derive-all
             (make-hierarchy)
             {:integer   [:byte :ubyte :short :ushort :int :uint :long :varint]
              :floating  [:float :double]
              :number    [:integer :floating]
              :primitive [:number :boolean :binary :nil]
              :aliased   (keys aliased-schemas)
              :simple    [:primitive :aliased]
              :coll      [:list :vector :set]
              :complex   [:coll :map :tuple :record :optional :multi :enum :wrapped]
              :built-in  [:simple :complex]}))

(defn schema-name
  "Returns the name of `schema` or `nil` if it is invalid."
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

(defmulti expand-path* (fn [path [type]] type) :hierarchy #'hierarchy)

(defn expand-path
  "Fully expands a path expression."
  [path schema]
  (if-not path
    false
    (expand-path* path schema)))

(defmethod expand-path* :tuple [path [_ _ schemas']]
  (if (true? path)
    (->> schemas'
         (map expand-path (repeat true))
         (zipmap (range)))
    (reduce-kv (fn [path key' path']
                 (assoc path key' (expand-path path' (schemas' key'))))
               {}
               path)))

(defmethod expand-path* :record [path [_ _ schemas']]
  (if (true? path)
    (reduce-kv (fn [path key' schema']
                 (assoc path key' (expand-path true schema')))
               {}
               schemas')
    (reduce-kv (fn [path key' path']
                 (assoc path key' (expand-path path' (schemas' key'))))
               {}
               path)))

(defmethod expand-path* :multi [path [_ _ _ multi-map]]
  (if (true? path)
    (reduce-kv (fn [path multi-case schema']
                 (assoc path multi-case (expand-path true schema')))
               {}
               multi-map)
    (reduce-kv (fn [path key' path']
                 (assoc path key' (expand-path path' (multi-map key'))))
               {}
               path)))

(defmethod expand-path* :coll [path [_ _ schema']]
  {:all (if (true? path)
          (expand-path true schema')
          (expand-path (:all path) schema'))})

(defmethod expand-path* :map [path [_ _ _ val-schema']]
  {:all (if (true? path)
          (expand-path true val-schema')
          (expand-path (:all path) val-schema'))})

(defmethod expand-path* :default [path _]
  (true? path))
