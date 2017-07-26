(ns mikron.runtime.generators
  (:require [clojure.test.check.generators :as tc.gen]
            [macrowbar.core :as macrowbar]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.runtime.math :as math]
            [mikron.runtime.processor.common :as processor.common]))

[:optional :wrapped :multi :list :vector :set :map :record :tuple]

(macrowbar/compile-time
  (defn bounds [bytes signed?]
    {:min (math/lower-bound bytes signed?)
     :max (dec (math/upper-bound bytes signed?))})

  (defmulti scalar-schema-generator
    (fn [schema-name] schema-name)
    :hierarchy #'compiler.schema/extended-hierarchy)

  (defmethod scalar-schema-generator :simple [schema-name]
    (tc.gen/return [schema-name {}]))

  (defmethod scalar-schema-generator :enum [_]
    (tc.gen/fmap (fn [enum-values]
                   [:enum {} enum-values])
                 (tc.gen/not-empty (tc.gen/set tc.gen/keyword))))

  (defmulti compound-schema-generator
    (fn [schema-name inner-generator] schema-name)
    :hierarchy #'compiler.schema/extended-hierarchy)

  (defmethod compound-schema-generator :optional [_ inner-generator]
    (tc.gen/fmap (fn [schema]
                   [:optional {} schema])
                 inner-generator))

  (defmethod compound-schema-generator :wrapped [_ inner-generator]
    inner-generator)

  (defmethod compound-schema-generator :multi [_ inner-generator]
    inner-generator)

  (defmethod compound-schema-generator :coll [schema-name inner-generator]
    (tc.gen/fmap (fn [schema]
                   [schema-name {} schema])
                 inner-generator))

  (defmethod compound-schema-generator :map [_ inner-generator]
    (tc.gen/fmap (fn [[key-schema value-schema]]
                   [:map {} key-schema value-schema])
                 (tc.gen/tuple inner-generator inner-generator)))

  (defmethod compound-schema-generator :record [_ inner-generator]
    (tc.gen/fmap (fn [schemas]
                   [:record {} schemas])
                 (tc.gen/map tc.gen/keyword inner-generator)))

  (defmethod compound-schema-generator :tuple [_ inner-generator]
    (tc.gen/fmap (fn [schemas]
                   [:tuple {} schemas])
                 (tc.gen/vector inner-generator)))

  (def schema-generator*
    (tc.gen/recursive-gen
      (fn [inner-generator]
        (->> (compiler.schema/leaf-children compiler.schema/extended-hierarchy :compound)
             (map (fn [schema]
                    (compound-schema-generator schema inner-generator)))
             (tc.gen/one-of)))
      (->> (compiler.schema/leaf-children compiler.schema/extended-hierarchy :scalar)
           (map scalar-schema-generator)
           (tc.gen/one-of))))

  (def schema-generator
    (tc.gen/such-that (fn [schema]
                        true) ;; TODO
                      schema-generator*))

  (tc.gen/sample schema-generator)

  (defmulti value-generator
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/extended-hierarchy)

  (defmethod value-generator :byte [_]
    (tc.gen/large-integer* (bounds 1 true)))

  (defmethod value-generator :ubyte [_]
    (tc.gen/large-integer* (bounds 1 false)))

  (defmethod value-generator :short [_]
    (tc.gen/large-integer* (bounds 2 true)))

  (defmethod value-generator :ushort [_]
    (tc.gen/large-integer* (bounds 2 false)))

  (defmethod value-generator :int [_]
    (tc.gen/large-integer* (bounds 4 true)))

  (defmethod value-generator :uint [_]
    (tc.gen/large-integer* (bounds 4 false)))

  (defmethod value-generator :long [_]
    (tc.gen/large-integer* (bounds 8 true)))

  (defmethod value-generator :varint [_]
    (value-generator [:long {}]))

  (defmethod value-generator :float [_]
    (tc.gen/fmap unchecked-float (tc.gen/double* {:infinite? true :NaN? false})))

  (defmethod value-generator :double [_]
    (tc.gen/double* {:infinite? true :NaN? false}))

  (defmethod value-generator :char [_]
    (tc.gen/large-integer* (bounds 1 true)))

  (defmethod value-generator :boolean [_]
    tc.gen/boolean)

  (defmethod value-generator :nil [_]
    (tc.gen/return nil))

  (defmethod value-generator :ignored [_]
    (tc.gen/return nil))

  (defmethod value-generator :binary [_]
    (tc.gen/fmap processor.common/byte-seq->binary (tc.gen/vector (tc.gen/large-integer* (bounds 1 true)))))

  (defmethod value-generator :string [_]
    tc.gen/string-alphanumeric)

  (defmethod value-generator :keyword [_]
    (tc.gen/fmap keyword tc.gen/string-alphanumeric))

  (defmethod value-generator :symbol [_]
    (tc.gen/fmap symbol tc.gen/string-alphanumeric))

  (defmethod value-generator :any [_]
    (tc.gen/return nil))

  (defmethod value-generator :enum [[_ _ enum-values]]
    (tc.gen/elements enum-values))

  (defmethod value-generator :optional [[_ _ schema]]
    (tc.gen/one-of [(value-generator [:nil {}])
                    (value-generator schema)]))

  (defmethod value-generator :wrapped [_]
    (tc.gen/return "Not value-generator implemented for :wrapped"))

  (defmethod value-generator :multi [_]
    (tc.gen/return "Not value-generator implemented for :multi"))

  (defmethod value-generator :list [[_ _ schema]]
    (tc.gen/list (value-generator schema)))

  (defmethod value-generator :vector [[_ _ schema]]
    (tc.gen/vector (value-generator schema)))

  (defmethod value-generator :set [[_ _ schema]]
    (tc.gen/set (value-generator schema)))

  (defmethod value-generator :map [[_ _ key-schema value-schema]]
    (tc.gen/map (value-generator key-schema)
                (value-generator value-schema)))

  (defmethod value-generator :record [[_ _ schemas]]
    (let [schemas' (sort schemas)]
      (->> schemas'
           (map (comp value-generator second))
           (apply tc.gen/tuple)
           (tc.gen/fmap (fn [values]
                          (zipmap (map first schemas') values))))))

  (defmethod value-generator :tuple [[_ _ schemas]]
    (apply tc.gen/tuple (map value-generator schemas))))


(require '[clojure.test.check :as tc]
         '[clojure.test.check.properties :as tc.prop])

(tc/quick-check 100
  (tc.prop/for-all [value (tc.gen/recursive-gen tc.gen/vector tc.gen/boolean)]
    (every? true? (flatten value))))
