(ns mikron.spec
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.spec-macros :refer [schema-spec*]]))

(s/def ::sorted-by
  some?)

(s/def ::type
  (s/and (s/cat :class   symbol?
                :members (s/* symbol?))
         (s/conformer (fn [{:keys [class members]}]
                        (vec (cons class members))))))



(defmulti schema-spec
  "Returns a spec for a schema definition."
  compile-util/type-of :hierarchy #'schema/hierarchy)

(defmethod schema-spec :simple [_]
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

(defmethod schema-spec nil [_]
  (constantly false))

(s/def ::schema
  (s/and #(empty? (descendants schema/hierarchy %))
         (s/multi-spec schema-spec compile-util/type-of)))

(s/def ::route
  (s/and (s/or :tuple       (s/map-of nat-int? ::route)
               :record      (s/map-of keyword? ::route)
               :multi       (s/map-of any? ::route)
               :coll-or-map (s/keys :req-un [:route/all])
               :true        true?)
         (s/conformer second)))

(s/def :route/all ::route)

(s/def ::diff ::route)

(s/def ::interp ::route)

(s/def ::schema-args
  (s/cat :schema ::schema
         :ext    (s/keys* :opt-un [::diff ::interp])))

(s/def ::defschema-args
  (s/cat :schema-name simple-symbol?
         :doc-string  (s/? string?)
         :schema      ::schema
         :ext         (s/keys* :opt-un [::diff ::interp])))

(s/def ::definterface+-args
  (s/cat :interface-name simple-symbol?
         :doc-string     (s/? string?)
         :ops            (s/* (s/and (s/cat :op-name    simple-symbol?
                                            :args       (s/coll-of simple-symbol? :kind vector?)
                                            :doc-string (s/? string?))
                                     (s/conformer (juxt :op-name :args :doc-string))))))

(defn enforce
  "Returns `value` conformed to `spec`, or throws an exception if it fails."
  [spec value]
  (let [value' (s/conform spec value)]
    (if (s/invalid? value')
      (throw (ex-info "Invalid schema definition" (s/explain-data spec value)))
      value')))
