(ns mikron.compiler.spec
  "Macro input validation."
  (:require [clojure.spec.alpha :as s]
            [mikron.compiler.schema :as schema]
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
    (simple-keyword? schema) schema
    (vector? schema)         (first schema)
    :else                    :custom))

(def hierarchy
  (-> schema/hierarchy
      (schema/derive-all :simple-schema [:number :boolean :binary :nil :ignored])))

(defmulti schema-spec
  "Returns a spec for a schema definition."
  schema-name :hierarchy #'hierarchy)

(defmethod schema-spec :simple-schema [_]
  (schema-spec* []))

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

(defmethod schema-spec :aliased [_]
  (schema-spec* []))

(defmethod schema-spec :custom [_]
  some?)

(s/def ::schema
  (s/and #(empty? (descendants hierarchy %))
         (s/multi-spec schema-spec schema-name)))

(s/def ::paths
  (s/and (s/or :tuple       (s/map-of nat-int? ::paths)
               :record      (s/map-of keyword? ::paths)
               :multi       (s/map-of any? ::paths)
               :coll-or-map (s/keys :req-un [:paths/all])
               :true        true?)
         (s/conformer second)))

(s/def :paths/all ::paths)

(s/def ::diff-paths ::paths)

(s/def ::interp-paths ::paths)

(s/def ::processor-types (s/coll-of keyword? :kind set?))

(s/def ::schema*-args
  (s/and (s/cat :schema ::schema
                :ext    (s/keys* :opt-un [::diff-paths ::interp-paths ::processor-types]))
         (s/conformer
           (fn [{:keys [ext] :as schema-args}]
             (reduce (fn [schema-args ext-key]
                       (if-some [ext-value (get ext ext-key)]
                         (assoc schema-args ext-key ext-value)
                         schema-args))
                     (dissoc schema-args :ext)
                     #{:diff-paths :interp-paths :processor-types})))))

(s/def ::schema-args
  (s/* any?))

(s/def ::defschema-args
  (s/cat :schema-name  qualified-keyword?
         :schema*-args (s/* any?)))

(s/def ::definterface+-args
  (s/cat :interface-name simple-symbol?
         :ops            (s/* (s/spec (s/cat :op-name simple-symbol?
                                             :args    (s/coll-of simple-symbol? :kind vector?)
                                             :docs    (s/? string?))))))

(defn enforce
  "Returns `value` conformed to `spec`, or throws an exception if the conformation fails."
  [spec value]
  (let [value' (s/conform spec value)]
    (if (s/invalid? value')
      (throw (ex-info "Value does not conform to spec" (s/explain-data spec value)))
      value')))
