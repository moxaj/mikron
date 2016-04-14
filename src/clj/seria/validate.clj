(ns seria.validate
  "Static config validation."
  (:require [clojure.string :as string]
            [seria.type :as type]))

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(def ^:dynamic *schemas*)

(declare validated-schema)

(defn validated-simple [schema]
  schema)

(defn validated-custom [schema]
  (assert (contains? *schemas* schema)
          (format "Undefined schema: %s." schema))
  schema)

(defn validated-sortable [[complex-type {:keys [sorted-by] :as options} & args :as schema]]
  (assert (or (nil? sorted-by)
              (= :default sorted-by)
              (symbol? sorted-by))
          (format "Invalid schema: %s. :sorted-by option must be either nil, :default,
                   or a namespace qualified symbol."
                  schema))
  (vec (concat [complex-type options] args)))

(defn validated-interpable [[complex-type {:keys [interp] :as options} & args :as schema]]
  (assert (or (nil? interp)
              (= :all interp)
              (vector? interp))
          (format "Invalid schema: %s. :interp option must be either nil, :all or a vector of indices
                   (integers for tuples, keywords for records)."
                  interp))
  (vec (concat [complex-type options] args)))

(defmulti validated-complex first)

(defmethod validated-complex :list [[_ _ inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:list <options> :x]."
                  schema))
  [:list {} (validated-schema inner-schema)])

(defmethod validated-complex :vector [[_ _ inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:vector <options> :x]."
                  schema))
  [:vector {} (validated-schema inner-schema)])

(defmethod validated-complex :set [schema]
  (let [[_ options inner-schema :as schema] (validated-sortable schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:set <options> :x]."
                    schema))
    [:set (select-keys options [:sorted-by])
     (validated-schema inner-schema)]))

(defmethod validated-complex :map [schema]
  (let [[_ options key-schema val-schema :as schema] (->> schema
                                                          (validated-sortable)
                                                          (validated-interpable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:map <options> :x :y]."
                    schema))
    [:map (select-keys options [:sorted-by :interp])
     (validated-schema key-schema) (validated-schema val-schema)]))

(defmethod validated-complex :optional [[_ options inner-schema :as schema]]
  (assert (= 3 (count schema))
          (format "Invalid schema: %s. Correct signature: [:optional <options> :x]."
                  schema))
  [:optional {} (validated-schema inner-schema)])

(defmethod validated-complex :enum [[_ _ values :as schema]]
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

(defmethod validated-complex :tuple [schema]
  (let [[_ options inner-schemas :as schema] (->> schema
                                                  (validated-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:tuple <options> [:x1 ... :xn]]."
                    schema))
    (assert (vector? inner-schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector."
                    schema))
    [:tuple (select-keys options [:interp])
     (mapv validated-schema inner-schemas)]))

(defmethod validated-complex :record [schema]
  (let [[_ {:keys [extends constructor] :as options} record-map :as schema]
        (->> schema
             (validated-interpable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:record <options> {:k1 :x1 ... :kn :xn}]"
                    schema))
    (assert (map? record-map)
            (format "Invalid schema: %s. The last parameter must be a map."
                    schema))
    (assert (or (nil? extends)
                (vector? extends))
            (format "Invalid schema: %s. The :extends option must be nil or a vector."
                    schema))
    (assert (every? (partial contains? *schemas*) extends)
            (format "Invalid schema: %s. :extends keywords must point to existing :record schemas."
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
       (zipmap fields (map validated-schema inner-schemas))])))

(defmethod validated-complex :multi [[_ _ selector multi-map :as schema]]
  (assert (= 4 (count schema))
          (format "Invalid schema: %s. Correct signature: [:multi selector {:k1 :x1 ... :kn :xn}]."
                  schema))
  (assert (symbol? selector)
          (format "Invalid schema: %s. The :selector parameter must be a symbol."
                  schema))
  (assert (map? multi-map)
          (format "Invalid schema: %s. The last parameter must be a map."
                  schema))
  (let [multi-cases   (keys multi-map)
        inner-schemas (vals multi-map)]
    [:multi {} selector (zipmap multi-cases (map validated-schema inner-schemas))]))

(defn validated-schema [schema]
  (let [schema-type (type/type-of schema)]
    (cond
      (type/simple-type? schema-type)
      (validated-simple schema)

      (type/complex-type? schema-type)
      (validated-complex (with-options schema))

      (type/custom-type? schema-type)
      (validated-custom schema)

      :else
      (throw (Exception. (format "Invalid schema: %s. No such schema type: %s."
                                 schema
                                 schema-type))))))

(defn validated-schemas [schemas]
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
           [schema-name (validated-schema schema)])
         (into {}))))

(defn validated-processor-types [processor-types]
  (if-not processor-types
    [:pack :diff :gen :interp]
    (do (assert (vector? processor-types)
                "Invalid :processors parameter: must be nil or a vector.")
        (let [invalid-processor-types (remove #{:pack :diff :interp :gen} processor-types)]
          (assert (empty? invalid-processor-types)
                  (format "Invalid :processors parameter: [%s] are not valid processors."
                          (string/join ", " invalid-processor-types))))
        processor-types)))
