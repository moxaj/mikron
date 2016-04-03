(ns seria.validate
  "Config validation."
  (:require [seria.type :as type]))

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
                                                 (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :list-s must have 1 or 2 arguments."
                    schema))
    [:list (select-keys options [:interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :vector [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :vector-s must have 1 or 2 arguments."
                    schema))
    [:vector (select-keys options [:interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :set [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :set-s must have 1 or 2 arguments."
                    schema))
    [:set (select-keys options [:sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-composite :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validate-sortable)
                                                          (validate-interpable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. :map-s must have 2 or 3 arguments."
                    schema))
    [:map (select-keys options [:sorted-by :interp])
     (validate-schema key-schema) (validate-schema val-schema)]))

(defmethod validate-composite :optional [[_ options inner-schema :as schema]]
  (let [[_ options inner-schema] (->> schema
                                      (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :optional-s must have 1 or 2 arguments."
                    schema))
    [:optional (select-keys options [:interp])
     (validate-schema inner-schema)]))

(defmethod validate-composite :enum [[_ _ values :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :enum-s must have 1 or 2 arguments."
                  schema))
  (assert (vector? values)
          (format "Invalid schema: %s. Possible :enum values must be listed in a vector."
                  schema))
  (assert (every? keyword? values)
          (format "Invalid schema: %s. Possible :enum values must be keywords."
                  schema))
  [:enum {} values])

(defmethod validate-composite :tuple [schema]
  (let [[_ options inner-schemas :as schema] (->> schema
                                                  (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :tuple-s must have 1 or 2 arguments."
                    schema))
    (assert (vector? inner-schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector."
                    schema))
    [:tuple (select-keys options [:interp])
     (mapv validate-schema inner-schemas)]))

(defmethod validate-composite :record [schema]
  (let [[_ {:keys [extends constructor] :or {extends []} :as options} arg-map :as schema]
        (->> schema
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
      [:record (assoc (select-keys options [:interp :constructor])
                      :extends extends)
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-composite :multi [[_ _ selector arg-map :as schema]]
  (let [[_ options selector arg-map :as schema] (->> schema
                                                     (validate-interpable))]
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
      [:multi (select-keys options [:interp])
       selector
       (zipmap multi-cases (map validate-schema inner-schemas))])))

(defn validate-schema [schema]
  (cond
    (or (type/primitive-type? schema)
        (contains? *schemas* schema))
    schema

    (type/composite-type? schema)
    (validate-composite (with-options schema))

    :else
    (throw (Exception. (format "Invalid schema: %s. No such schema name." schema)))))

(defn validate-schemas [schemas]
  (assert (map? schemas)
          (format ":schemas parameter must be a map: %s."
                  schemas))
  (assert (not-any? type/built-in-type? (keys schemas))
          (format "You cannot redefine built-in schemas."
                  schemas))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))
