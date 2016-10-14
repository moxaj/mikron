(ns mikron.spec
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.type :as type]
            [mikron.compile-util :as compile-util]))

(defmacro options-spec [& keys]
  `(s/? (s/keys :opt-un ~(vec keys))))

(defmacro complex-spec [& fields]
  (let [field-syms (->> fields
                        (take-nth 2)
                        (next)
                        (map (comp symbol name)))]
    `(s/and (s/cat :type keyword? ~@fields)
            (s/conformer (fn [{:keys [~'type ~'options ~@field-syms]}]
                           [~'type (or ~'options {}) ~@field-syms])))))

(s/def ::sorted-by
  ident?)

(s/def ::type
  (s/and (s/cat :class   symbol?
                :members (s/* symbol?))
         (s/conformer (fn [{:keys [class members]}]
                        (vec (cons class members))))))

(defmulti schema-spec compile-util/type-of :hierarchy #'type/hierarchy)

(defmethod schema-spec :simple [_]
  any?)

(defmethod schema-spec :custom [_]
  any?)

(defmethod schema-spec :coll [_]
  (complex-spec :options (options-spec)
                :schema  ::schema))

(defmethod schema-spec :set [_]
  (complex-spec :options (options-spec ::sorted-by)
                :schema  ::schema))

(defmethod schema-spec :map [_]
  (complex-spec :options    (options-spec ::sorted-by)
                :key-schema ::schema
                :val-schema ::schema))

(defmethod schema-spec :tuple [_]
  (complex-spec :options (options-spec)
                :schemas (s/coll-of ::schema :kind vector?)))

(defmethod schema-spec :record [_]
  (complex-spec :options (options-spec ::type)
                :schemas (s/map-of keyword? ::schema)))

(defmethod schema-spec :optional [_]
  (complex-spec :options (options-spec)
                :schema  ::schema))

(defmethod schema-spec :enum [_]
  (complex-spec :options (options-spec)
                :values  (s/coll-of keyword? :kind vector?)))

(defmethod schema-spec :multi [_]
  (complex-spec :options  (options-spec)
                :selector ident?
                :schemas  (s/map-of any? ::schema)))

(defmethod schema-spec :wrapped [_]
  (complex-spec :options (options-spec)
                :pre     ident?
                :post    ident?
                :schema  ::schema))

(defmethod schema-spec :default [_]
  (complement any?))

(s/def ::schema
  (s/and (fn [schema]
           (empty? (descendants type/hierarchy (compile-util/type-of schema))))
         (s/multi-spec schema-spec compile-util/type-of)))

(s/def ::schemas
  (s/and (fn [schemas]
           (alter-var-root #'type/hierarchy type/add-custom-types (keys schemas)))
         (s/map-of qualified-keyword? ::schema)))

(s/def ::route
  (s/and (s/or :tuple           (s/map-of int? ::route)
               :record-or-multi (s/map-of keyword? ::route)
               :coll-or-map     (s/keys :req-un [:route/all])
               :true            true?)
         (s/conformer second)))

(s/def :route/all
  ::route)

(s/def ::routes
  (s/map-of keyword? ::route))

(s/def ::diff-routes
  ::routes)

(s/def ::interp-routes
  ::routes)

(s/def ::options
  (s/and (s/keys :req-un [::schemas]
                 :opt-un [::diff-routes ::interp-routes])
         (s/conformer (fn [{:keys [schemas diff-routes interp-routes]
                            :or   {diff-routes {} interp-routes {}}}]
                        {:schemas       schemas
                         :diff-routes   diff-routes
                         :interp-routes interp-routes}))))

;; todo: validate routes + schemas
