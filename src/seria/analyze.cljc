(ns seria.analyze
  (:require [seria.utils :refer :all]
            [clojure.set :refer [union]]))

(def primitives #{:byte :short :int :float :double :char :boolean})

(def advanceds #{:string :long-string :keyword :symbol})

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

(defn validate-dispatch [_ [composite-type]]
  (condp contains? composite-type
    #{:list :vector :set :sorted-set} :coll
    #{:map :sorted-map} :map
    composite-type))

(defmulti validate-composite validate-dispatch)

(defmethod validate-composite :coll [schemas [composite-type options schema]]
  (assert schema "todo")
  (if-let [size-option (:size options)]
    (assert (size-type? size-option) "todo"))
  [composite-type options (validate schemas schema)])

(defmethod validate-composite :map [schemas [composite-type options schema-1 schema-2]]
  (assert schema-1 "todo")
  (assert schema-2 "todo")
  (if-let [size-option (:size options)]
    (assert (size-type? size-option) "todo"))
  [composite-type options (validate schemas schema-1) (validate schemas schema-2)])

(defmethod validate-composite :optional [schemas [_ options schema]]
  (assert schema "todo")
  [:optional options (validate schemas schema)])

(defmethod validate-composite :enum [_ [_ options args]]
  (assert (sequential? args) "todo")
  (assert (seq args) "todo")
  (assert (every? keyword? args) "todo")
  [:enum options args])

(defmethod validate-composite :tuple [schemas [_ options sub-schemas]]
  (assert (sequential? sub-schemas) "todo")
  (assert (seq sub-schemas) "todo")
  [:tuple options (mapv (partial validate schemas) sub-schemas)])

(defmethod validate-composite :record [schemas [_ options arg-map]]
  (assert (map? arg-map) "todo")
  (let [fields      (keys arg-map)
        sub-schemas (vals arg-map)]
    (assert (every? keyword? fields) "todo")
    [:record options (zipmap fields (mapv (partial validate schemas) sub-schemas))]))

(defmethod validate-composite :multi [schemas [_ options selector arg-map]]
  (assert (ifn? selector) "todo")
  (assert (map? arg-map) "todo")
  (let [multi-cases (keys arg-map)
        sub-schemas (vals arg-map)]
    [:multi options selector (zipmap multi-cases (mapv (partial validate schemas) sub-schemas))]))

(defn validate
  ([schemas]
   (assert (not-any? built-in? (keys schemas)) "todo")
   (into {} (for [[top-schema schema] schemas]
              [top-schema (validate schemas schema)])))
  ([schemas schema]
   (cond
     (or (primitive? schema)
         (advanced? schema)
         (contains? schemas schema)) schema
     (composite? schema) (validate-composite schemas (with-options schema))
     :else (throw (Exception. (str "Unknown schema type " schema))))))


(defn find-multi-cases [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :multi (first form)))))
       (mapcat (fn [[_ _ _ multi-map]]
                 (keys multi-map)))))

(defn find-enum-values [schemas]
  (->> schemas
       (find-by (fn [form]
                  (and (sequential? form)
                       (= :enum (first form)))))
       (mapcat (fn [[_ _ values]] values))))

(defn find-non-embeddables [schemas]
  (find-by fn? schemas))