(ns spec
  (:require [clojure.spec :as spec]
            [mikron.type :as type]
            [mikron.util :as util]))

(alter-var-root #'type/hierarchy type/add-custom-types [:body :fixture :coord :snapshot])

(defn opts [& keys]
  (fn [{:keys [options]}]
    (select-keys options keys)))

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
  (spec/and (spec/cat :symbol  #{:list}
                      :options (spec/? map?)
                      :schema  ::schema)
            (spec/conformer (juxt :symbol (opts) :schema))))

(defmethod spec-type :vector [_]
  (spec/and (spec/cat :symbol  #{:vector}
                      :options (spec/? map?)
                      :schema  ::schema)
            (spec/conformer (juxt :symbol (opts) :schema))))

(defmethod spec-type :set [_]
  (spec/and (spec/cat :symbol  #{:set}
                      :options (spec/? (spec/keys :opt-un [::sorted-by]))
                      :schema  ::schema)
            (spec/conformer (juxt :symbol (opts :sorted-by) :schema))))

(defmethod spec-type :map [_]
  (spec/and (spec/cat :symbol     #{:map}
                      :options    (spec/? (spec/keys :opt-un [::sorted-by]))
                      :key-schema ::schema
                      :val-schema ::schema)
            (spec/conformer (juxt :symbol (opts :sorted-by) :key-schema :val-schema))))

(defmethod spec-type :tuple [_]
  (spec/and (spec/cat :symbol  #{:tuple}
                      :options (spec/? map?)
                      :schemas (spec/coll-of ::schema []))
            (spec/conformer (juxt :symbol (opts) :schema))))

(defmethod spec-type :record [_]
  (spec/and (spec/cat :symbol  #{:record}
                      :options (spec/? (spec/keys :opt-un [::constructor]))
                      :schemas (spec/map-of keyword? ::schema))
            (spec/conformer (juxt :symbol (opts :constructors) :schemas))))

(defmethod spec-type :optional [_]
  (spec/and (spec/cat :symbol  #{:optional}
                      :options (spec/? map?)
                      :schema  ::schema)
            (spec/conformer (juxt :symbol (opts) :schemas))))

(defmethod spec-type :enum [_]
  (spec/and (spec/cat :symbol  #{:enum}
                      :options (spec/? map?)
                      :values  (spec/coll-of keyword? []))
            (spec/conformer (juxt :symbol (opts) :values))))

(defmethod spec-type :multi [_]
  (spec/and (spec/cat :symbol   #{:multi}
                      :options  (spec/? map?)
                      :selector symbol?
                      :schemas  (spec/map-of (constantly true) ::schema))
            (spec/conformer (juxt :symbol (opts) :selector :schemas))))

(defmethod spec-type :wrapped [_]
  (spec/and (spec/cat :symbol  #{:wrapped}
                      :pre     symbol?
                      :post    symbol?
                      :schema  ::schema)
            (spec/conformer (juxt :symbol (opts) :pre :post :schemas))))

(defmethod spec-type :clojure.spec/invalid [_]
  nil)

(spec/def ::schema (spec/multi-spec spec-type util/type-of))

(spec/def ::schemas (spec/and (spec/map-of keyword? ::schema)
                              (fn [schemas]
                                 (not-any? #(isa? type/hierarchy % :built-in)
                                           (keys schemas)))))

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

;; PLAYGROUND

(spec/conform ::schema
              [:record {:user-data [:record {:id :int}]
                        :position  :coord
                        :angle     :float
                        :body-type [:enum [:dynamic :static :kinetic]]
                        :fixtures  [:list :fixture]}])

(spec/conform (spec/map-of keyword? ::schema)
              {:body [:set [:list :int]]})

(spec/conform (spec/and (spec/coll-of ::schema [])
                        (spec/conformer identity))
              [[:set [:list :int]]])

(spec/conform ::schema [:set {:sorted-by 'adf} :int])

(spec/conform (spec/cat :u (spec/and integer?
                                     (spec/conformer (constantly nil))))
              [1])

(spec/conform (spec/and integer? (spec/conformer (constantly nil)))
              10)
