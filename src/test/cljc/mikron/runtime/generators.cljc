(ns mikron.runtime.generators
  (:require [clojure.test.check.generators :as tc.gen]
            [macrowbar.core :as macrowbar]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.runtime.math :as math]
            [mikron.runtime.processor.common :as processor.common]))

[:optional :wrapped :multi :list :vector :set :map :record :tuple]

(macrowbar/compile-time
  (def simple-string-generator
    (tc.gen/fmap (fn [string]
                   (if (> (count string) 5)
                     (.substring string 0 5)
                     string))
                 tc.gen/string-alphanumeric))

  (def simple-symbol-generator
    (tc.gen/fmap symbol simple-string-generator))

  (def simple-keyword-generator
    (tc.gen/fmap keyword simple-string-generator))

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
                 (tc.gen/not-empty (tc.gen/set simple-keyword-generator))))

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
                 (tc.gen/map simple-keyword-generator inner-generator)))

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

  (def ^:const scalar-schema-size 1)
  (def ^:const max-schema-size 1000)
  (def ^:const coll-schema-size-multiplier 30)

  (defmulti schema-size
    compiler.schema/schema-name
    :hierarchy #'compiler.schema/extended-hierarchy)

  (defmethod schema-size :scalar [_]
    scalar-schema-size)

  (defmethod schema-size :optional [[_ _ schema']]
    (schema-size schema'))

  (defmethod schema-size :wrapped [[_ _ _ _ schema']]
    (schema-size schema'))

  (defmethod schema-size :multi [[_ _ _ schema']]
    (schema-size schema'))

  (defmethod schema-size :coll [[_ _ schema']]
    (* coll-schema-size-multiplier (schema-size schema')))

  (defmethod schema-size :map [[_ _ key-schema' value-schema']]
    (* coll-schema-size-multiplier (+ (schema-size key-schema')
                                      (schema-size value-schema'))))

  (defmethod schema-size :record [[_ _ schemas']]
    (->> schemas'
         (vals)
         (map schema-size)
         (reduce +)))

  (defmethod schema-size :tuple [[_ _ schemas']]
    (->> schemas'
         (map schema-size)
         (reduce +)))

  (def schema-generator
    (tc.gen/such-that (fn [schema]
                        (< (schema-size schema) max-schema-size))
                      schema-generator*))

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
    (tc.gen/fmap unchecked-float
                 (tc.gen/double* {:infinite? true :NaN? false})))

  (defmethod value-generator :double [_]
    (tc.gen/double* {:infinite? true :NaN? false}))

  (defmethod value-generator :char [_]
    (tc.gen/fmap processor.common/int->char
                 (tc.gen/large-integer* (bounds 2 false))))

  (defmethod value-generator :boolean [_]
    tc.gen/boolean)

  (defmethod value-generator :nil [_]
    (tc.gen/return nil))

  (defmethod value-generator :ignored [_]
    (tc.gen/return nil))

  (defmethod value-generator :binary [_]
    (tc.gen/fmap processor.common/byte-seq->binary
                 (tc.gen/vector (tc.gen/large-integer* (bounds 1 true)))))

  (defmethod value-generator :string [_]
    simple-string-generator)

  (defmethod value-generator :keyword [_]
    simple-keyword-generator)

  (defmethod value-generator :symbol [_]
    simple-symbol-generator)

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
