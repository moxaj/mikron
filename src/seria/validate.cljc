(ns seria.validate
  (:require [clojure.set :refer [union]]))

(def primitives #{:byte :short :int :float :double :char :boolean})

(def advanceds #{:string :long-string :keyword :symbol :any})

(def composites #{:list :vector :set :sorted-set :map :sorted-map
                  :tuple :record :optional :multi :enum})

(def size-types #{:byte :short})

(def built-ins (union primitives advanceds composites))

(defn primitive? [schema]
  (contains? primitives schema))

(defn advanced? [schema]
  (contains? advanceds schema))

(defn composite? [schema]
  (and (vector? schema)
       (contains? composites (first schema))))

(defn built-in? [kw]
  (contains? built-ins kw))

(defn size-type? [schema]
  (contains? size-types schema))

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(declare validate)

(defmulti validate-composite (fn [_ [composite-type]]
                               (condp contains? composite-type
                                 #{:list :vector :set :sorted-set} :coll
                                 #{:map :sorted-map} :map
                                 composite-type)))

(defmethod validate-composite :coll [schemas [composite-type options schema]]
  (when-let [size-option (:size options)]
    (assert (size-type? size-option) (str composite-type " | Invalid size option: " size-option)))
  [composite-type options (validate schemas schema)])

(defmethod validate-composite :map [schemas [composite-type options key-schema value-schema]]
  (when-let [size-option (:size options)]
    (assert (size-type? size-option) (str composite-type " | Invalid size option: " size-option)))
  [composite-type options (validate schemas key-schema) (validate schemas value-schema)])

(defmethod validate-composite :optional [schemas [_ options schema]]
  [:optional options (validate schemas schema)])

(defmethod validate-composite :enum [_ [_ options values]]
  (assert (sequential? values) (str ":enum | Invalid values (must be sequential): " values))
  (assert (seq values) (str ":enum | Invalid values (must be non-empty): " values))
  (assert (every? keyword? values) (str ":enum | Invalid values (must contain keywords only): " values))
  [:enum options values])

(defmethod validate-composite :tuple [schemas [_ options sub-schemas]]
  (assert (sequential? sub-schemas) (str ":tuple | Invalid schemas (must be sequential): " sub-schemas))
  (assert (seq sub-schemas) (str ":tuple | Invalid schemas (must be non-empty): " sub-schemas))
  [:tuple options (mapv (partial validate schemas) sub-schemas)])

(defmethod validate-composite :record [schemas [_ options arg-map]]
  (assert (map? arg-map) (str ":record | Invalid record map (must be a map): " arg-map))
  (when-let [extends-option (:extends options)]
    (assert (sequential? extends-option)
            (str ":record | Invalid record schemas (extends option must be sequential): " extends-option))
    (assert (every? (partial contains? schemas) extends-option)
            (str ":record | Invalid record schemas in extends option: " extends-option)))
  (let [fields      (keys arg-map)
        sub-schemas (vals arg-map)]
    (assert (every? keyword? fields) (str ":record | Invalid record fields (must be keywords): " fields))
    [:record options (zipmap fields (mapv (partial validate schemas) sub-schemas))]))

(defmethod validate-composite :multi [schemas [_ options selector arg-map]]
  (assert (ifn? selector) (str ":multi | Invalid selector (must implement IFn): " selector))
  (assert (map? arg-map) (str ":multi | Invalid multi map (must be a map): " arg-map))
  (let [multi-cases (keys arg-map)
        sub-schemas (vals arg-map)]
    [:multi options selector (zipmap multi-cases (mapv (partial validate schemas) sub-schemas))]))

(defn validate
  ([schemas]
   (assert (map? schemas) ":schemas arg must be a map.")
   (assert (not-any? built-in? (keys schemas)) "Built-in schemas cannot be used as top-level schemas.")
   (into {} (for [[top-schema schema] schemas]
              [top-schema (validate schemas schema)])))
  ([schemas schema]
   (cond
     (or (primitive? schema)
         (advanced? schema)
         (contains? schemas schema)) schema
     (composite? schema) (validate-composite schemas (with-options schema))
     :else (throw (new #?(:clj Exception :cljs js/Error) (str "Unknown schema type: " schema))))))