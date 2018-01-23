(ns mikron.test-generator.schema
  (:require [clojure.test.check.generators :as tc.gen]
            [mikron.test-generator.common :as test-generator.common]
            [mikron.compiler.schema :as compiler.schema]))

(def simple-string-generator
  (tc.gen/fmap (fn [string]
                 (if (> (count string) 5)
                   (.substring string 0 5)
                   string))
               (tc.gen/not-empty tc.gen/string-alphanumeric)))

(defmulti scalar-schema-generator
  (fn [schema-name] schema-name)
  :hierarchy #'compiler.schema/extended-hierarchy)

(defmethod scalar-schema-generator :simple [schema-name]
  (tc.gen/return [schema-name {}]))

(defmethod scalar-schema-generator :enum [_]
  (tc.gen/fmap (fn [enum-values]
                 [:enum {} enum-values])
               (tc.gen/not-empty (tc.gen/set test-generator.common/simple-keyword-generator))))

(defmulti compound-schema-generator
  (fn [schema-name inner-generator] schema-name)
  :hierarchy #'compiler.schema/extended-hierarchy)

(defmethod compound-schema-generator :optional [_ inner-generator]
  (tc.gen/fmap (fn [schema]
                 [:optional {} schema])
               inner-generator))

(defrecord Box2 [value])

(defn box ^Box2 [value]
  (->Box2 value))

(defn unbox [^Box2 box]
  (.-value box))

(defmethod compound-schema-generator :wrapped [_ inner-generator]
  (tc.gen/fmap (fn [schema]
                 [:wrapped {} unbox box schema])
               inner-generator))

(defmethod compound-schema-generator :multi [_ inner-generator]
  (tc.gen/fmap (fn [schema]
                 [:multi {} any? {true schema}])
               inner-generator))

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
               (tc.gen/map test-generator.common/simple-keyword-generator inner-generator)))

(defmethod compound-schema-generator :tuple [_ inner-generator]
  (tc.gen/fmap (fn [schemas]
                 [:tuple {} schemas])
               (tc.gen/vector inner-generator)))

(def schema-generator*
  (tc.gen/recursive-gen
    (fn [inner-generator]
      (->> (compiler.schema/leaf-descendants compiler.schema/extended-hierarchy :compound)
           (map (fn [schema]
                  (compound-schema-generator schema inner-generator)))
           (tc.gen/one-of)))
    (let [scalar-schemas (disj (compiler.schema/leaf-descendants compiler.schema/extended-hierarchy :scalar)
                               :binary
                               #?(:cljs :float))]
      (->> scalar-schemas
           (map scalar-schema-generator)
           (tc.gen/one-of)))))

(def ^:const max-schema-size 1000)
(def ^:const coll-schema-size-multiplier 30)

(defmulti schema-size
  compiler.schema/schema-name
  :hierarchy #'compiler.schema/extended-hierarchy)

(defmethod schema-size :scalar [_]
  1)

(defmethod schema-size :optional [[_ _ schema']]
  (schema-size schema'))

(defmethod schema-size :wrapped [[_ _ _ _ schema']]
  (schema-size schema'))

(defmethod schema-size :multi [[_ _ _ schemas']]
  (let [schema-sizes (map schema-size (vals schemas'))]
    (/ (reduce + schema-sizes)
       (count schema-sizes))))

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
