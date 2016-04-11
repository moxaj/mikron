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
              (= :default sorted-by)
              (symbol? sorted-by))
          (format "Invalid schema: %s. :sorted-by option must be either nil, :default,
                   or a namespace qualified symbol."
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
          (format "Invalid schema: %s. Correct signature: [:list <options> :x]."
                  schema))
  [:list {} (validate-schema inner-schema)])

(defmethod validate-complex :vector [[_ _ inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:vector <options> :x]."
                  schema))
  [:vector {} (validate-schema inner-schema)])

(defmethod validate-complex :set [schema]
  (let [[_ options inner-schema :as schema] (validate-sortable schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:set <options> :x]."
                    schema))
    [:set (select-keys options [:sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-complex :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validate-sortable)
                                                          (validate-interpable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:map <options> :x :y]."
                    schema))
    [:map (select-keys options [:sorted-by :interp])
     (validate-schema key-schema) (validate-schema val-schema)]))

(defmethod validate-complex :optional [[_ options inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:optional <options> :x]."
                  schema))
  [:optional {} (validate-schema inner-schema)])

(defmethod validate-complex :enum [[_ _ values :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:enum <options> [:v1 ... :vn]]."
                  schema))
  (assert (vector? values)
          (format "Invalid schema: %s. :enum values must be listed in a vector."
                  schema))
  (assert (every? keyword? values)
          (format "Invalid schema: %s. :enum values must be keywords."
                  schema))
  [:enum {} values])

(defmethod validate-complex :tuple [schema]
  (let [[_ options inner-schemas :as schema] (->> schema
                                                  (validate-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:tuple <options> [:x1 ... :xn]]."
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
            (format "Invalid schema: %s. Correct signature: [:record <options> {:k1 :x1 ... :kn :xn}]"
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
      (assert (symbol? constructor)
              (format "Invalid schema: %s. :constructor option must be a namespace qualified symbol."
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
  (let [invalid-schema-names (filter (complement keyword?) (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] are not keywords."
                    (string/join invalid-schema-names))))
  (let [invalid-schema-names (filter type/built-in-type? (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] shadow built-in types."
                    (string/join invalid-schema-names))))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))

(defn validate-processor-types [processor-types]
  (let [processor-types (or processor-types [:pack :diff :gen :interp])]
    (assert (vector? processor-types)
            "Invalid :processors parameter: must be nil or a vector.")
    (let [invalid-processor-types (remove #{:pack :diff :interp :gen} processor-types)]
      (assert (empty? invalid-processor-types)
              (format "Invalid :processors parameter: [%s] are not valid processors."
                      (string/join ", " invalid-processor-types))))
    processor-types))
