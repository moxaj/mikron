(ns seria.validate
  (:require [clojure.set :refer [union]]
            [seria.util :refer [cljc-throw]]))

(def primitives #{:byte :ubyte :short :ushort :int :uint :long :float :double :char :boolean})

(def advanceds #{:string :keyword :symbol :any})

(def composites #{:list :vector :set :map :tuple :record :optional :multi :enum})

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

(defn validate-sortable [[composite-type {:keys [sorted-by] :or {sorted-by :none} :as options} & args]]
  (assert (ifn? sorted-by))
  (vec (concat [composite-type (assoc options :sorted-by sorted-by)]
               args)))

(defn validate-diffable [[composite-type {:keys [delta] :or {delta {}} :as options} & args]]
  (let [{:keys [enabled ignored] :or {ignored []}} delta]
    (assert (sequential? ignored))
    (vec (concat [composite-type (assoc options :delta {:enabled (boolean enabled)
                                                        :ignored ignored})]
                 args))))

(defn validate-scalable [[composite-type {:keys [size] :or {size :ubyte} :as options} & args]]
  (assert (size-type? size))
  (vec (concat [composite-type (assoc options :size size)]
               args)))

(defmulti validate-composite (fn [[composite-type] _] composite-type))

(defmethod validate-composite :list [schema schemas]
  (let [[composite-type options sub-schema :as schema] (-> schema
                                                           validate-scalable)]
    (assert (= 3 (count schema)))
    [composite-type (select-keys options [:size])
     (validate sub-schema schemas)]))

(defmethod validate-composite :vector [schema schemas]
  (let [[composite-type options sub-schema :as schema] (-> schema
                                                           validate-scalable
                                                           validate-diffable)]
    (assert (= 3 (count schema)))
    [composite-type (select-keys options [:size :delta])
     (validate sub-schema schemas)]))

(defmethod validate-composite :set [schema schemas]
  (let [[composite-type options sub-schema :as schema] (-> schema
                                                           validate-scalable
                                                           validate-sortable)]
    (assert (= 3 (count schema)))
    [composite-type (select-keys options [:size :sorted-by])
     (validate sub-schema schemas)]))

(defmethod validate-composite :map [schema schemas]
  (let [[composite-type options key-schema value-schema :as schema] (-> schema
                                                                        validate-scalable
                                                                        validate-diffable
                                                                        validate-sortable)]
    (assert (= 4 (count schema)))
    [composite-type (select-keys options [:size :delta :sorted-by])
     (validate key-schema schemas) (validate value-schema schemas)]))

(defmethod validate-composite :optional [[_ _ sub-schema :as schema] schemas]
  (assert (= 3 (count schema)))
  [:optional {} (validate sub-schema schemas)])

(defmethod validate-composite :enum [[_ _ values :as schema] _]
  (assert (= 3 (count schema)))
  (assert (sequential? values))
  (assert (not (empty? values)))
  [:enum {} values])

(defmethod validate-composite :tuple [schema schemas]
  (let [[_ options sub-schemas :as schema] (-> schema
                                               validate-diffable)]
    (assert (= 3 (count schema)))
    (assert (sequential? sub-schemas))
    (assert (not (empty? sub-schemas)))
    [:tuple (select-keys options [:delta])
     (doall (mapv #(validate % schemas) sub-schemas))]))

(defmethod validate-composite :record [schema schemas]
  (let [[_ {:keys [extends constructor] :or {extends []} :as options} arg-map :as schema]
        (-> schema
            validate-diffable)]
    (assert (= 3 (count schema)))
    (assert (map? arg-map))
    (assert (every? (partial contains? schemas) extends))
    (when constructor
      (assert (fn? constructor)))
    (let [fields      (keys arg-map)
          sub-schemas (vals arg-map)]
      (assert (every? keyword? fields))
      [:record (assoc (select-keys options [:delta]) :extends extends
                                                     :constructor constructor)
       (zipmap fields (map #(validate % schemas) sub-schemas))])))

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