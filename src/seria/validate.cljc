(ns seria.validate
  (:require [clojure.set :refer [union]]
            [seria.util :refer [cljc-throw]]))

(def primitives #{:byte :ubyte :short :ushort :int :uint :long :float :double :char :boolean})

(def advanceds #{:string :long-string :keyword :symbol :any})

(def composites #{:list :vector :set :sorted-set :map :sorted-map
                  :tuple :record :optional :multi :enum})

(def size-types #{:ubyte :ushort})

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

(defmulti validate-composite (fn [[composite-type] _]
                               (condp contains? composite-type
                                 #{:list :vector :set :sorted-set} :coll
                                 #{:map :sorted-map} :map
                                 composite-type)))

(defmethod validate-composite :coll [[composite-type {:keys [size] :or {size :ubyte}} sub-schema :as schema]
                                     schemas]
  (assert (= 3 (count schema)))
  (assert (size-type? size))
  [composite-type {:size size} (validate sub-schema schemas)])

(defmethod validate-composite :map [[composite-type {:keys [size] :or {size :ubyte}} key-schema value-schema :as schema]
                                    schemas]
  (assert (= 4 (count schema)))
  (assert (size-type? size))
  [composite-type {:size size} (validate key-schema schemas) (validate value-schema schemas)])

(defmethod validate-composite :optional [[_ _ sub-schema :as schema] schemas]
  (assert (= 3 (count schema)))
  [:optional {} (validate sub-schema schemas)])

(defmethod validate-composite :enum [[_ _ values :as schema] _]
  (assert (= 3 (count schema)))
  (assert (sequential? values))
  (assert (seq values))
  (assert (every? keyword? values))
  [:enum {} values])

(defmethod validate-composite :tuple [[_ {:keys [delta]} sub-schemas :as schema] schemas]
  (assert (= 3 (count schema)))
  (assert (sequential? sub-schemas))
  (assert (seq sub-schemas))
  [:tuple {:delta delta} (mapv #(validate % schemas) sub-schemas)])

(defmethod validate-composite :record [[_ {:keys [extends constructor delta] :or {extends []}} arg-map :as schema] schemas]
  (assert (= 3 (count schema)))
  (assert (map? arg-map))
  (assert (sequential? extends))
  (assert (every? (partial contains? schemas) extends))
  (when constructor
    (assert (fn? constructor)))
  (let [fields      (keys arg-map)
        sub-schemas (vals arg-map)]
    (assert (every? keyword? fields))
    [:record {:extends     extends
              :constructor (boolean constructor)
              :delta       (boolean delta)}
     (zipmap fields (map #(validate % schemas) sub-schemas))]))

(defmethod validate-composite :multi [[_ _ selector arg-map :as schema] schemas]
  (assert (= 4 (count schema)))
  (assert (ifn? selector))
  (assert (map? arg-map))
  (let [multi-cases (keys arg-map)
        sub-schemas (vals arg-map)]
    [:multi {} selector (zipmap multi-cases (map #(validate % schemas)
                                                 sub-schemas))]))

(defn validate
  ([schemas]
   (assert (map? schemas))
   (assert (not-any? built-in? (keys schemas)))
   (into {} (for [[top-schema schema] schemas]
              [top-schema (validate schema schemas)])))
  ([schema schemas]
   (cond
     (or (primitive? schema)
         (advanced? schema)
         (contains? schemas schema)) schema
     (composite? schema) (validate-composite (with-options schema) schemas)
     :else (cljc-throw "TODO"))))