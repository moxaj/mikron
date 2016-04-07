(ns seria.validate
  "Config validation."
  (:require [clojure.string :as string]
            [seria.type :as type]))

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(def ^:dynamic *schemas*)

(declare validate-schema)

(defn validate-simple [schema]
  schema)

(defn validate-custom [schema]
  (assert (contains? *schemas* schema)
          (format "Undefined schema: %s." schema))
  schema)

(defn validate-sortable [[complex-type {:keys [sorted-by] :as options} & args :as schema]]
  (assert (or (nil? sorted-by)
              (keyword? sorted-by))
          (format "Invalid schema: %s. :sorted-by option must be either nil, :default,
                   or another keyword pointing to a function provided at runtime."
                  schema))
  (vec (concat [complex-type options] args)))

(defn validate-interpable [[complex-type {:keys [interp] :as options} & args :as schema]]
  (assert (or (nil? interp)
              (= :all interp)
              (vector? interp))
          (format "Invalid schema: %s. :interp option must be either nil, :all or a vector of indices
                   (integers for tuples, keywords for records)."
                  interp))
  (vec (concat [complex-type options] args)))

(defmulti validate-complex first)

(defmethod validate-complex :list [[_ _ inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :list-s must have 1 or 2 arguments."
                  schema))
  [:list {} (validate-schema inner-schema)])

(defmethod validate-complex :vector [[_ _ inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :vector-s must have 1 or 2 arguments."
                  schema))
  [:vector {} (validate-schema inner-schema)])

(defmethod validate-complex :set [schema]
  (let [[_ options inner-schema :as schema] (->> schema
                                                 (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :set-s must have 1 or 2 arguments."
                    schema))
    [:set (select-keys options [:sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-complex :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validate-sortable)
                                                          (validate-interpable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. :map-s must have 2 or 3 arguments."
                    schema))
    [:map (select-keys options [:sorted-by :interp])
     (validate-schema key-schema) (validate-schema val-schema)]))

(defmethod validate-complex :optional [[_ options inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. :optional-s must have 1 or 2 arguments."
                  schema))
  [:optional {} (validate-schema inner-schema)])

(defmethod validate-complex :enum [[_ _ values :as schema]]
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

(defmethod validate-complex :tuple [schema]
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

(defmethod validate-complex :record [schema]
  (let [[_ {:keys [extends constructor] :as options} record-map :as schema]
        (->> schema
             (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. :record-s must have 1 or 2 arguments."
                    schema))
    (assert (map? record-map)
            (format "Invalid schema: %s. The last parameter of a :record must be a map."
                    schema))
    (assert (or (nil? extends)
                (vector? extends))
            (format "Invalid schema: %s. The :extends option must be nil or a vector."
                    schema))
    (assert (every? (partial contains? *schemas*) extends)
            (format "Invalid schema: %s. :extend keywords must point to existing :record schemas."
                    schema))
    (when constructor
      (assert (keyword? constructor)
              (format "Invalid schema: %s. :constructor option must be a keyword."
                      schema)))
    (let [fields        (keys record-map)
          inner-schemas (vals record-map)]
      (assert (every? keyword? fields)
              (format "Invalid schema: %s. :record fields must be accessible by keywords."
                      schema))
      [:record (select-keys options [:interp :constructor :extends])
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-complex :multi [[_ _ selector multi-map :as schema]]
  (assert (= 4 (count schema))
          (format "Invalid schema: %s. :multi-s must have 2 or 3 arguments."
                  schema))
  (assert (keyword? selector)
          (format "Invalid schema: %s. The :selector parameter of a :multi must be a keyword."
                  schema))
  (assert (map? multi-map)
          (format "Invalid schema: %s. The last parameter of a :multi must be a map."
                  schema))
  (let [multi-cases   (keys multi-map)
        inner-schemas (vals multi-map)]
    [:multi {} selector (zipmap multi-cases (map validate-schema inner-schemas))]))

(defn validate-schema [schema]
  (let [schema-type (type/type-of schema)]
    (cond
      (type/simple-type? schema-type)
      (validate-simple schema)

      (type/complex-type? schema-type)
      (validate-complex (with-options schema))

      (type/custom-type? schema-type)
      (validate-custom schema)

      :else
      (throw (Exception. (format "Invalid schema: %s. No such schema type: %s."
                                 schema
                                 schema-type))))))

(defn validate-schemas [schemas]
  (assert (map? schemas)
          (format "Invalid :schemas parameter: must be a map."))
  (assert (every? keyword? (keys schemas))
          "Invalid :schemas parameter: schema names must be keywords.")
  (assert (not-any? type/built-in-type? (keys schemas))
          "Invalid :schemas parameter: you cannot redefine built-in schemas.")
  (binding [*schemas* schemas]
    (->> (for [[schema schema-def] schemas]
           [schema (validate-schema schema-def)])
         (into {}))))

(defn validate-processors [processors]
  (let [processors (or processors [:pack :diff :gen :interp])]
    (assert (vector? processors)
            "Invalid :processors parameter: must be nil or a vector.")
    (let [invalid-processors (remove #{:pack :diff :interp :gen} processors)]
      (assert (empty? invalid-processors)
              (format "Invalid :processors parameter: [%s] are not valid processors."
                      (string/join ", " invalid-processors))))
    processors))
