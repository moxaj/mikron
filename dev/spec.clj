(ns spec
  (:require [clojure.spec :as spec]
            [mikron.type :as type]
            [mikron.util :as util]))

(defmacro options-spec [& keys]
  `(spec/? (spec/and (spec/keys :opt-un ~(vec keys))
                     (spec/conformer (fn [value#]
                                       (select-keys value# ~(->> keys
                                                                 (map (comp keyword name))
                                                                 (vec))))))))

(defmacro composite-spec [& fields]
  `(spec/and (spec/cat :schema keyword? ~@fields)
             (spec/conformer (juxt ~@(take-nth 2 fields)))))

(defn symbol-or-keyword? [form]
  (or (symbol? form)
      (keyword? form)))

(defn any? [form]
  true)

(spec/def ::sorted-by
  (spec/and (spec/or :default #{:default}
                     :nil     nil?
                     :symbol  symbol-or-keyword?)
            (spec/conformer second)))

(spec/def ::constructor
  (spec/and (spec/or :nil    nil?
                     :symbol symbol?)
            (spec/conformer second)))

(defmulti spec-type util/type-of :hierarchy #'type/hierarchy
                                 :default   :clojure.spec/invalid)

(defmethod spec-type :simple [_]
  any?)

(defmethod spec-type :custom [_]
  any?)

(defmethod spec-type :coll [_]
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
  (composite-spec :options  (options-spec)
                  :selector symbol-or-keyword?
                  :schemas  (spec/map-of any? ::schema)))

(defmethod spec-type :wrapped [_]
  (composite-spec :options (options-spec)
                  :pre     symbol-or-keyword?
                  :post    symbol-or-keyword?
                  :schema  ::schema))

(defmethod spec-type :clojure.spec/invalid [_]
  nil)

(spec/def ::schema
  (spec/multi-spec spec-type util/type-of))

(spec/def ::schemas
  (spec/and (fn [schemas]
              (if (some #(isa? type/initial-hierarchy % :built-in) schemas)
                false
                (do (alter-var-root #'type/hierarchy type/add-custom-types (keys schemas))
                    true)))
            (spec/map-of keyword? ::schema)))

(spec/def ::schema-name
  (spec/and ::schema keyword?))

(spec/def ::buffer-size
  (spec/and integer? pos?))

(spec/def ::diff-routes
  any?)

(spec/def ::interp-routes
  any?)

(spec/def ::eq-ops
  (spec/map-of ::schema-name symbol-or-keyword?))

(spec/def ::options
  (spec/and (spec/keys :req-un [::schemas]
                       :opt-un [::buffer-size
                                ::diff-routes
                                ::interp-routes
                                ::eq-ops])
            (spec/conformer (fn [{:keys [buffer-size] :or {buffer-size 10000} :as options}]
                              (assoc options :buffer-size buffer-size)))))

;; TODO  replace mikron.validate
;; TODO  routes validation
;; ISSUE conform does not flow into coll-of and map-of!

;; PLAYGROUND

(spec/conform ::options
  {:schemas {:body     [:record {:user-data [:record {:id :int}]
                                 :position  :coord
                                 :angle     :float
                                 :body-type [:enum [:dynamic :static :kinetic]]
                                 :fixtures  [:list :fixture]}]
             :fixture  [:record {:user-data [:record {:color :int}]
                                 :coords    [:list :coord]}]
             :coord    [:tuple [:float :float]]
             :snapshot [:record {:time   :long
                                 :bodies [:list :body]}]}})
