(ns mikron.spec
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.spec-macros :as spec-macros]))

(s/def ::sorted-by
  some?)

(s/def ::type
  (s/and (s/cat :class   symbol?
                :members (s/* symbol?))
         (s/conformer (fn [{:keys [class members]}]
                        (vec (cons class members))))))

(defn schema-name
  "Returns a spec for a schema definition."
  [schema]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)
    (symbol? schema)  :custom))

(defmulti schema-spec
  "Returns a spec for a schema definition."
  schema-name :hierarchy #'schema/hierarchy)

(defmethod schema-spec :simple [_]
  (spec-macros/schema-spec* []))

(defmethod schema-spec :coll [_]
  (spec-macros/schema-spec* [] :schema ::schema))

(defmethod schema-spec :set [_]
  (spec-macros/schema-spec* [::sorted-by] :schema ::schema))

(defmethod schema-spec :map [_]
  (spec-macros/schema-spec* [::sorted-by] :key-schema ::schema
                                          :val-schema ::schema))

(defmethod schema-spec :tuple [_]
  (spec-macros/schema-spec* [] :schemas (s/coll-of ::schema :kind vector?)))

(defmethod schema-spec :record [_]
  (spec-macros/schema-spec* [::type] :schemas (s/map-of keyword? ::schema)))

(defmethod schema-spec :optional [_]
  (spec-macros/schema-spec* [] :schema ::schema))

(defmethod schema-spec :enum [_]
  (spec-macros/schema-spec* [] :values (s/coll-of keyword? :kind vector?)))

(defmethod schema-spec :multi [_]
  (spec-macros/schema-spec* [] :selector some?
                               :schemas  (s/map-of any? ::schema)))

(defmethod schema-spec :wrapped [_]
  (spec-macros/schema-spec* [] :pre    some?
                               :post   some?
                               :schema ::schema))

(defmethod schema-spec :custom [_]
  some?)

(s/def ::schema
  (s/and #(empty? (descendants schema/hierarchy %))
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
                            (update-in [:ext :diff] schema/expand-path schema)
                            (update-in [:ext :interp] schema/expand-path schema))))))

(s/def ::schema-args (s/* any?))

(s/def ::defschema-args
  (s/cat :schema-name  simple-symbol?
         :doc-string   (s/? string?)
         :schema*-args (s/* any?)))

(s/def ::definterface+-args
  (s/cat :interface-name simple-symbol?
         :ops            (s/* (s/spec (s/cat :op-name    simple-symbol?
                                             :args       (s/coll-of simple-symbol? :kind vector?)
                                             :doc-string (s/? string?))))))

(defn enforce
  "Returns `value` conformed to `spec`, or throws an exception if it fails."
  [spec value]
  (let [value' (s/conform spec value)]
    (if (s/invalid? value')
      (throw (ex-info "Value does not conform to spec" (s/explain-data spec value)))
      value')))
