(ns mikron.compiler.core-spec
  "`mikron.compiler.core` spec namespace."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]
            [mikron.compiler.core-spec-macro :refer [schema-spec*]]
            [mikron.compiler.schema :as schema]))

(macrowbar/emit :debug
  (s/def ::sorted-by
    some?)

  (s/def ::type
    (s/+ symbol?))

  (defn schema-name
    "Returns the name of `schema`."
    [schema]
    (let [name (if (vector? schema)
                 (first schema)
                 schema)]
      (if (schema/schema-names name)
        name
        :custom)))

  (defmulti schema-spec
    "Returns a spec for a schema definition."
    schema-name :hierarchy #'schema/extended-hierarchy)

  (defmethod schema-spec :simple [_]
    (schema-spec* []))

  (defmethod schema-spec :constant [_]
    (schema-spec* [] :constant-value any?))

  (defmethod schema-spec :enum [_]
    (schema-spec* [] :values (s/coll-of keyword? :kind set?)))

  (defmethod schema-spec :optional [_]
    (schema-spec* [] :schema ::schema))

  (defmethod schema-spec :wrapped [_]
    (schema-spec* [] :pre    some?
                     :post   some?
                     :schema ::schema))

  (defmethod schema-spec :multi [_]
    (schema-spec* [] :selector some?
                     :schemas  (s/map-of any? ::schema)))

  (defmethod schema-spec :coll [_]
    (schema-spec* [] :schema ::schema))

  (defmethod schema-spec :set [_]
    (schema-spec* [::sorted-by] :schema ::schema))

  (defmethod schema-spec :map [_]
    (schema-spec* [::sorted-by] :key-schema ::schema
                                :val-schema ::schema))

  (defmethod schema-spec :tuple [_]
    (schema-spec* [] :schemas (s/coll-of ::schema :kind vector?)))

  (defmethod schema-spec :record [_]
    (schema-spec* [::type] :schemas (s/map-of keyword? ::schema)))

  (defmethod schema-spec :custom [_]
    some?)

  (s/def ::schema
    (s/and (s/multi-spec schema-spec
                         (fn [schema tag]
                           (if (= :custom tag)
                             schema
                             (let [tag' (rand-nth (schema/leaf-descendants schema/extended-hierarchy tag))]
                               (if (keyword? schema)
                                 tag'
                                 (into [tag'] (rest schema)))))))
           #(empty? (descendants schema/extended-hierarchy %))))

  (s/def ::paths
    (s/and (s/or :tuple       (s/map-of nat-int? ::paths)
                 :record      (s/map-of keyword? ::paths)
                 :multi       (s/map-of any? ::paths)
                 :coll-or-map (s/keys :req-un [:paths/all])
                 :boolean     boolean?)
           (s/conformer second)))

  (s/def :paths/all
    ::paths)

  (s/def ::diff-paths
    ::paths)

  (s/def ::interp-paths
    ::paths)

  (s/def ::processor-types
    (s/coll-of keyword? :kind set?))

  (s/def ::global-options
    (s/nilable (s/keys :opt-un [::diff-paths ::interp-paths ::processor-types]))))
