(ns mikron.compiler.spec
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.spec-macros :refer [schema-spec*]]))

(s/def ::sorted-by
  some?)

(s/def ::type
  (s/and (s/cat :class   symbol?
                :members (s/* symbol?))
         (s/conformer (fn [{:keys [class members]}]
                        (into [class] members)))))

(defn schema-name
  "Returns the name part of a schema definition."
  [schema]
  (cond
    (simple-keyword? schema)    schema
    (vector? schema)            (first schema)
    (qualified-keyword? schema) :custom))

(defmulti schema-spec
  "Returns a spec for a schema definition."
  schema-name :hierarchy #'compiler.schema/hierarchy)

(defmethod schema-spec :primitive [_]
  (schema-spec* []))

(defmethod schema-spec :aliased [_]
  (schema-spec* []))

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

(defmethod schema-spec :optional [_]
  (schema-spec* [] :schema ::schema))

(defmethod schema-spec :enum [_]
  (schema-spec* [] :values (s/coll-of keyword? :kind vector?)))

(defmethod schema-spec :multi [_]
  (schema-spec* [] :selector some?
                   :schemas  (s/map-of any? ::schema)))

(defmethod schema-spec :wrapped [_]
  (schema-spec* [] :pre    some?
                   :post   some?
                   :schema ::schema))

(defmethod schema-spec :custom [_]
  some?)

(s/def ::schema
  (s/and #(empty? (descendants compiler.schema/hierarchy %))
         (s/multi-spec schema-spec schema-name)))

(s/def ::path
  (s/and (s/or :tuple       (s/map-of nat-int? ::path)
               :record      (s/map-of keyword? ::path)
               :multi       (s/map-of any? ::path)
               :coll-or-map (s/keys :req-un [:path/all])
               :true        true?)
         (s/conformer second)))

(s/def :path/all ::path)

(s/def ::diff ::path)

(s/def ::interp ::path)

(s/def ::schema*-args
  (s/and (s/cat :schema ::schema
                :ext    (s/keys* :opt-un [::diff ::interp]))
         (s/conformer (fn [{:keys [schema] :as schema*-args}]
                        (-> schema*-args
                            (update-in [:ext :diff] compiler.schema/expand-path schema)
                            (update-in [:ext :interp] compiler.schema/expand-path schema)
                            (assoc :dependencies (compiler.schema/dependencies schema)))))))

(s/def ::schema-args (s/* any?))

(s/def ::defschema-args
  (s/cat :schema-name  qualified-keyword?
         :schema*-args (s/* any?)))

(s/def ::definterface+-args
  (s/cat :interface-name simple-symbol?
         :ops            (s/* (s/spec (s/cat :op-name    simple-symbol?
                                             :args       (s/coll-of simple-symbol? :kind vector?)
                                             :doc-string (s/? string?))))))

(defn enforce
  "Returns `value` conformed to `spec`, or throws an exception if the conformation fails."
  [spec value]
  (let [value' (s/conform spec value)]
    (if (s/invalid? value')
      (throw (ex-info "Value does not conform to spec" (s/explain-data spec value)))
      value')))
