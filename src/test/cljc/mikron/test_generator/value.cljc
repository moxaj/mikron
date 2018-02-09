(ns mikron.test-generator.value
  (:require [clojure.test.check.generators :as tc.gen]
            [mikron.test-generator.common :as test-generator.common]
            [mikron.math :as math]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.runtime.processor.common :as runtime.processor.common]))

(defn bounds [bytes signed?]
  {:min (math/lower-bound bytes signed?)
   :max (dec (math/upper-bound bytes signed?))})

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
  (value-generator [:long]))

(defmethod value-generator :float [_]
  (tc.gen/fmap unchecked-float
               (tc.gen/double* {:infinite? true :NaN? false})))

(defmethod value-generator :double [schema]
  (tc.gen/double* {:infinite? true :NaN? false}))

(defmethod value-generator :char [_]
  (tc.gen/fmap runtime.processor.common/int->char
               (tc.gen/large-integer* (bounds 2 false))))

(defmethod value-generator :boolean [schema]
  tc.gen/boolean)

(defmethod value-generator :nil [_]
  (tc.gen/return nil))

(defmethod value-generator :binary [schema]
  (tc.gen/fmap runtime.processor.common/byte-seq->binary
               (tc.gen/vector (tc.gen/large-integer* (bounds 1 true)))))

(defmethod value-generator :string [_]
  test-generator.common/simple-string-generator)

(defmethod value-generator :keyword [_]
  test-generator.common/simple-keyword-generator)

(defmethod value-generator :symbol [_]
  test-generator.common/simple-symbol-generator)

(defmethod value-generator :any [_]
  (tc.gen/return nil))

(defmethod value-generator :constant [[_ _ constant-value]]
  (tc.gen/return constant-value))

(defmethod value-generator :enum [[_ _ enum-values]]
  (tc.gen/elements enum-values))

(defmethod value-generator :optional [[_ _ schema']]
  (tc.gen/one-of [(value-generator [:nil {}])
                  (value-generator schema')]))

(defmethod value-generator :wrapped [[_ _ _ post schema']]
  (tc.gen/fmap post (value-generator schema')))

(defmethod value-generator :multi [[_ _ _ schemas']]
  (tc.gen/one-of (map value-generator (vals schemas'))))

(defmethod value-generator :list [[_ _ schema']]
  (tc.gen/list (value-generator schema')))

(defmethod value-generator :vector [[_ _ schema']]
  (tc.gen/vector (value-generator schema')))

(defmethod value-generator :set [[_ _ schema']]
  (tc.gen/set (value-generator schema')))

(defmethod value-generator :map [[_ _ key-schema value-schema]]
  (tc.gen/map (value-generator key-schema)
              (value-generator value-schema)))
              
(defmethod value-generator :tuple [[_ _ schemas]]
  (apply tc.gen/tuple (map value-generator schemas)))

(defmethod value-generator :record [[_ _ schemas]]
  (let [schemas' (sort schemas)]
    (->> schemas'
         (map (comp value-generator second))
         (apply tc.gen/tuple)
         (tc.gen/fmap (fn [values]
                        (zipmap (map first schemas') values))))))
