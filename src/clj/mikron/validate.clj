(ns mikron.validate
  "Macro input validation."
  (:require [clojure.spec :as s]
            [mikron.type :as type]
            [mikron.util :as util]))

(defmacro options-spec [& keys]
  `(s/? (s/keys :opt-un ~(vec keys))))

(defmacro complex-spec [& {:as fields}]
  (let [field-syms (->> (dissoc fields :options)
                        (keys)
                        (map (comp symbol name)))]
    `(s/and (s/cat :type keyword? ~@(mapcat identity fields))
            (s/conformer (fn [{:keys [~'type ~'options ~@field-syms]}]
                           [~'type (or ~'options {}) ~@field-syms])))))

(s/def ::sorted-by
  (s/and (s/or :default #{:default}
               :nil     nil?
               :fn      ident?)
         (s/conformer second)))

(s/def ::constructor
  (s/and (s/or :nil nil?
               :fn  symbol?)
         (s/conformer second)))

(defmulti schema-spec util/type-of :hierarchy #'type/hierarchy)

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
  (complex-spec :options (options-spec ::constructor)
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

(s/def ::schema
  (s/and (fn [schema]
           (empty? (descendants type/hierarchy (util/type-of schema))))
         (s/multi-spec schema-spec util/type-of)))

(s/def ::schemas
  (s/and (fn [schemas]
           (and (not-any? #(isa? type/default-hierarchy % :built-in) schemas)
                (alter-var-root #'type/hierarchy type/add-custom-types (keys schemas))))
         (s/map-of keyword? ::schema)))

(s/def ::schema-name
  (s/and keyword? ::schema))

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
  (s/keys :req-un [::schemas]
          :opt-un [::diff-routes ::interp-routes]))

(s/def ::names
  (s/and (s/map-of keyword? symbol?)
         (fn [names]
           (every? #{:pack :unpack :diff :undiff :gen :validate :interp}
                   (keys names)))))

;; todo: validate routes + schemas

(comment
  (s/fdef mikron.processor/defprocessors
    :args (s/cat :names ::names :options ::options))

  (s/conform ::schemas
    {:body     [:record {:user-data [:record {:id :int}]
                         :position  :coord
                         :angle     :float
                         :body-type [:enum [:dynamic :static :kinetic]]
                         :fixtures  [:list :fixture]}]
     :fixture  [:record {:user-data [:record {:color :int}]
                         :coords    [:list :coord]}]
     :coord    [:tuple [:float :float]]
     :snapshot [:record {:time   :long
                         :bodies [:list :body]}]})

  nil)
