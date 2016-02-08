(ns seria.validate
  (:require [seria.util :refer [cljc-throw]]
            [seria.spec :refer [primitive? composite? advanced? size? built-in?]]))

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(def ^:dynamic *schemas*)

(declare validate-schema)

(defn validate-sortable [[composite-type {:keys [sorted-by] :or {sorted-by :none} :as options} & args]]
  (assert (keyword? sorted-by))
  (vec (concat [composite-type (assoc options :sorted-by sorted-by)]
               args)))

(defn validate-diffable [[composite-type {:keys [diff] :or {diff []} :as options} & args]]
  (assert (or (= :all diff)
              (vector? diff)))
  (vec (concat [composite-type (assoc options :diff diff)]
               args)))

(defn validate-scalable [[composite-type {:keys [size] :or {size :ubyte} :as options} & args]]
  (assert (size? size))
  (vec (concat [composite-type (assoc options :size size)]
               args)))

(defn validate-interpable [[composite-type {:keys [interp] :or {interp []} :as options} & args]]
  (assert (or (= :all interp)
              (vector? interp)))
  (vec (concat [composite-type (assoc options :interp interp)]
               args)))

(defmulti validate-composite first)

(defmethod validate-composite :list [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable))]
    (assert (= 3 (count schema)))
    [:list (select-keys options [:size])
     (validate-schema inner-schema)]))

(defmethod validate-composite :vector [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable)
                                                 (validate-diffable)
                                                 (validate-interpable))]
    (assert (= 3 (count schema)))
    [:vector (select-keys options [:size :diff :interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :set [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable)
                                                 (validate-sortable))]
    (assert (= 3 (count schema)))
    [:set (select-keys options [:size :sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-composite :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validate-scalable)
                                                          (validate-diffable)
                                                          (validate-sortable)
                                                          (validate-interpable))]
    (assert (= 4 (count schema)))
    [:map (select-keys options [:size :diff :sorted-by :interp])
     (validate-schema key-schema) (validate-schema val-schema)]))

(defmethod validate-composite :optional [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-diffable)
                                                 (validate-interpable))]
    (assert (= 3 (count schema)))
    [:optional (select-keys options [:diff :interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :enum [[_ _ values :as schema]]
  (assert (= 3 (count schema)))
  (assert (vector? values))
  (assert (apply distinct? values))
  [:enum {} values])

(defmethod validate-composite :tuple [schema]
  (let [[_ options inner-schemas :as schema] (->> schema
                                                  (validate-diffable)
                                                  (validate-interpable))]
    (assert (= 3 (count schema)))
    (assert (vector? inner-schemas))
    [:tuple (select-keys options [:diff :interp])
     (mapv validate-schema inner-schemas)]))

(defmethod validate-composite :record [schema]
  (let [[_ {:keys [extends constructor] :or {extends []} :as options} arg-map :as schema]
        (->> schema
             (validate-diffable)
             (validate-interpable))]
    (assert (= 3 (count schema)))
    (assert (map? arg-map))
    (assert (every? (partial contains? *schemas*) extends))
    (when constructor
      (assert (keyword? constructor)))
    (let [fields        (keys arg-map)
          inner-schemas (vals arg-map)]
      (assert (every? keyword? fields))
      [:record (assoc (select-keys options [:diff :interp]) :extends extends
                                                            :constructor constructor)
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-composite :multi [schema]
  (let [[_ options selector arg-map :as schema] (->> schema
                                                     (validate-diffable)
                                                     (validate-interpable))]
    (assert (and (= 4 (count schema))))
    (assert (keyword? selector))
    (assert (map? arg-map))
    (let [multi-cases   (keys arg-map)
          inner-schemas (vals arg-map)]
      [:multi (select-keys options [:diff :interp]) selector
       (zipmap multi-cases (map validate-schema inner-schemas))])))

(defn validate-schema [schema]
  (cond
    (or (primitive? schema)
        (advanced? schema)
        (contains? *schemas* schema))
    schema

    (composite? schema)
    (validate-composite (with-options schema))

    :else
    (cljc-throw (format "Invalid schema: %s." schema))))

(defn validate-schemas [schemas]
  (assert (map? schemas))
  (assert (not-any? built-in? (keys schemas)))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))

(defn validate-diff-opts [diff-opts]
  (assert (map? diff-opts))
  diff-opts)

(defn validate-interp-opts [interp-opts]
  (assert (map? interp-opts))
  interp-opts)
