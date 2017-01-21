(ns mikron.spec
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.type :as type]
            [mikron.compile-util :as compile-util]))

(s/def ::sorted-by
  some?)

(s/def ::type
  (s/and (s/cat :class   symbol?
                :members (s/* symbol?))
         (s/conformer (fn [{:keys [class members]}]
                        (vec (cons class members))))))

(defmacro schema-spec*
  "Helper macro for shorthand schema spec definition."
  [options & fields]
  `(s/and (s/or ~@(when (empty? fields)
                    [:simple `(s/and keyword? (s/conformer vector))])
                :complex (s/and (s/cat :type    keyword?
                                       :options (s/? (s/nilable (s/keys :opt-un ~options)))
                                       ~@fields)
                                (s/conformer (juxt :type :options ~@(take-nth 2 fields)))))
          (s/conformer second)))

(defmulti schema-spec compile-util/type-of :hierarchy #'type/hierarchy)

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
  (s/and #(empty? (descendants type/hierarchy %))
         (s/multi-spec schema-spec compile-util/type-of)))

(s/def ::route
  (s/and (s/or :tuple           (s/map-of int? ::route)
               :record-or-multi (s/map-of keyword? ::route)
               :coll-or-map     (s/keys :req-un [:route/all])
               :true            true?)
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
  "Conforms `value` to `spec`. Throws an exception if it fails."
  [spec value]
  (let [value' (s/conform spec value)]
    (if (s/invalid? value')
      (throw (ex-info "Invalid schema definition" (s/explain-data spec value)))
      value')))
