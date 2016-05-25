(ns spec
  (:require [clojure.spec :as spec]
            [mikron.type :as type]
            [mikron.util :as util]))

(alter-var-root #'type/hierarchy type/add-custom-types [:body :fixture :coord :snapshot])

(defmacro options-spec [& keys]
  `(spec/? (spec/and (spec/keys :opt-un ~(vec keys))
                     (spec/conformer (fn [value#]
                                       (select-keys value# ~(->> keys
                                                                 (map (comp keyword name))
                                                                 (vec))))))))

(defmacro composite-spec [& fields]
  `(spec/and (spec/cat :schema keyword? ~@fields)
             (spec/conformer (juxt ~@(take-nth 2 fields)))))

(spec/def ::pre
  symbol?)

(spec/def ::post
  symbol?)

(spec/def ::sorted-by
  (spec/and (spec/or :default #{:default}
                     :nil     nil?
                     :symbol  symbol?)
            (spec/conformer second)))

(spec/def ::constructor
  (spec/and (spec/or :nil    nil?
                     :symbol symbol?)
            (spec/conformer second)))

(defmulti spec-type util/type-of :hierarchy #'type/hierarchy
                                 :default   :clojure.spec/invalid)

(defmethod spec-type :simple [_]
  (spec/spec (constantly true)))

(defmethod spec-type :custom [_]
  (spec/spec (constantly true)))

(defmethod spec-type :list [_]
  (composite-spec :options (options-spec)
                  :schema  ::schema))

(defmethod spec-type :vector [_]
  (composite-spec :options (options-spec)
                  :schema  ::schema))

(defmethod spec-type :set [_]
  (composite-spec :options (options-spec ::sorted-by)
                  :schema  ::schema))

(defmethod spec-type :map [_]
  (composite-spec :options    (options-spec ::sorted-by)
                  :key-schema ::schema
                  :val-schema ::schema))

(defmethod spec-type :tuple [_]
  (composite-spec :options (options-spec)
                  :schemas (spec/coll-of ::schema [])))

(defmethod spec-type :record [_]
  (composite-spec :options (options-spec ::constructor)
                  :schemas (spec/map-of keyword? ::schema)))

(defmethod spec-type :optional [_]
  (composite-spec :options (options-spec)
                  :schema  ::schema))

(defmethod spec-type :enum [_]
  (composite-spec :options (options-spec)
                  :values  (spec/coll-of keyword? [])))

(defmethod spec-type :multi [_]
  (composite-spec :options (options-spec)
                  :selector symbol?
                  :schemas  (spec/map-of (constantly true) ::schema)))

(defmethod spec-type :wrapped [_]
  (composite-spec :options (options-spec)
                  :pre     symbol?
                  :post    symbol?
                  :schema  ::schema))

(defmethod spec-type :clojure.spec/invalid [_]
  nil)

(spec/def ::schema
  (spec/multi-spec spec-type util/type-of))

(spec/def ::schemas
  (spec/and (spec/map-of keyword? ::schema)
            (fn [schemas]
               (not-any? #(isa? type/hierarchy % :built-in)
                         (keys schemas)))))

(spec/def ::options
  (spec/keys :opt-un [::schemas]))

;; PLAYGROUND

(spec/conform ::schemas
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

;; ISSUES
;; conform does not flow into coll-of / map-of
