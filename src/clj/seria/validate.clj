(ns seria.validate
  (:require [seria.spec :refer [primitive? composite? advanced? size? built-in?]]))

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(def ^:dynamic *schemas*)

(declare validate-schema)

(defn validate-sortable [[composite-type {:keys [sorted-by] :or {sorted-by :none} :as options} & args :as schema]]
  (assert (keyword? sorted-by)
          (format "Invalid schema: %s. :sorted-by option must be either :none, :default,
                   or another keyword pointing to a function provided at runtime."
                  schema))
  (vec (concat [composite-type (assoc options :sorted-by sorted-by)]
               args)))

(defn validate-diffable [[composite-type {:keys [diff] :or {diff []} :as options} & args :as schema]]
  (assert (or (= :all diff)
              (vector? diff))
          (format "Invalid schema: %s. :diff option must be either :all or a vector of indices
                   (integers for tuples, keywords for records)."
                  schema))
  (vec (concat [composite-type (assoc options :diff diff)]
               args)))

(defn validate-scalable [[composite-type {:keys [size] :or {size :ubyte} :as options} & args :as schema]]
  (assert (size? size)
          (format "Invalid schema: %s. :size option must be either :ubyte or :ushort."
                  schema))
  (vec (concat [composite-type (assoc options :size size)]
               args)))

(defn validate-interpable [[composite-type {:keys [interp] :or {interp []} :as options} & args :as schema]]
  (assert (or (= :all interp)
              (vector? interp))
          (format "Invalid schema: %s. :interp option must be either :all or a vector of indices
                   (integers for tuples, keywords for records)."
                  interp))
  (vec (concat [composite-type (assoc options :interp interp)]
               args)))

(defmulti validate-composite first)

(defmethod validate-composite :list [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :list-s must have 1 or 2 arguments."
                    schema))
    [:list (select-keys options [:size])
     (validate-schema inner-schema)]))

(defmethod validate-composite :vector [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable)
                                                 (validate-diffable)
                                                 (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :vector-s must have 1 or 2 arguments."
                    schema))
    [:vector (select-keys options [:size :diff :interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :set [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-scalable)
                                                 (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :set-s must have 1 or 2 arguments."
                    schema))
    [:set (select-keys options [:size :sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-composite :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validate-scalable)
                                                          (validate-diffable)
                                                          (validate-sortable)
                                                          (validate-interpable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. :map-s must have 2 or 3 arguments."
                    schema))
    [:map (select-keys options [:size :diff :sorted-by :interp])
     (validate-schema key-schema) (validate-schema val-schema)]))

(defmethod validate-composite :optional [[_ options inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :optional-s must have 1 or 2 arguments."
                  schema))
  [:optional {} (validate-schema inner-schema)])

(defmethod validate-composite :enum [[_ _ values :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :enum-s must have 1 or 2 arguments."
                  schema))
  (assert (vector? values)
          (format "Invalid schema: %s. Possible :enum values must be listed in a vector."
                  schema))
  [:enum {} values])

(defmethod validate-composite :tuple [schema]
  (let [[_ options inner-schemas :as schema] (->> schema
                                                  (validate-diffable)
                                                  (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :tuple-s must have 1 or 2 arguments."
                    schema))
    (assert (vector? inner-schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector."
                    schema))
    [:tuple (select-keys options [:diff :interp])
     (mapv validate-schema inner-schemas)]))

(defmethod validate-composite :record [schema]
  (let [[_ {:keys [extends constructor] :or {extends []} :as options} arg-map :as schema]
        (->> schema
             (validate-diffable)
             (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :record-s must have 1 or 2 arguments."
                    schema))
    (assert (map? arg-map)
            (format "Invalid schema: %s. The last parameter of a :record must be a map."
                    schema))
    (assert (every? (partial contains? *schemas*) extends)
            (format "Invalid schema: %s. :extend keywords must point to existing :record schemas."
                    schema))
    (when constructor
      (assert (keyword? constructor)
              (format "Invalid schema: %s. :constructor option must be a keyword."
                      schema)))
    (let [fields        (keys arg-map)
          inner-schemas (vals arg-map)]
      (assert (every? keyword? fields)
              (format "Invalid schema: %s. :record fields must be accessible by keywords."
                      schema))
      [:record (assoc (select-keys options [:diff :interp]) :extends extends
                                                            :constructor constructor)
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-composite :multi [[_ _ selector arg-map :as schema]]
  (assert (= 4 (count schema))
          (format "Invalid schema: %s. :multi-s must have 2 or 3 arguments."
                  schema))
  (assert (keyword? selector)
          (format "Invalid schema: %s. The :selector parameter of a :multi must be a keyword."
                  schema))
  (assert (map? arg-map)
          (format "Invalid schema: %s. The last parameter of a :multi must be a map."
                  schema))
  (let [multi-cases   (keys arg-map)
        inner-schemas (vals arg-map)]
    [:multi {} selector (zipmap multi-cases (map validate-schema inner-schemas))]))

(defn validate-schema [schema]
  (cond
    (or (primitive? schema)
        (advanced? schema)
        (contains? *schemas* schema))
    schema

    (composite? schema)
    (validate-composite (with-options schema))

    :else
    (throw (Exception. (format "Invalid schema: %s. No such schema name." schema)))))

(defn validate-schemas [schemas]
  (assert (map? schemas)
          (format ":schemas parameter must be a map: %s."
                  schemas))
  (assert (not-any? built-in? (keys schemas))
          (format "You cannot redefine built-in schemas."
                  schemas))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))
