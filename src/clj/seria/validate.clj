(ns seria.validate
  "Static config validation."
  (:require [clojure.string :as string]
            [clojure.walk :as walk]
            [seria.type :as type]))

;; Schema validation

(def ^:dynamic *schemas*)

(defn with-options [[a b & rest :as composite]]
  (if (and (map? b) (seq rest))
    composite
    (vec (concat [a {} b] rest))))

(defn validate-sortable [[complex-type {:keys [sorted-by] :as options} & args :as schema]]
  (assert (or (nil? sorted-by)
              (= :default sorted-by)
              (symbol? sorted-by))
          (format "Invalid schema: %s. :sorted-by option must be either nil, :default,
                   or a symbol."
                  schema))
  (vec (concat [complex-type options] args)))

(defmulti validate-schema type/type-of :hierarchy #'type/hierarchy)

(defmethod validate-schema :s/simple [schema]
  schema)

(defmethod validate-schema :s/list [schema]
  (let [[_ _ inner-schema :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:list <options> :x]."
                    schema))
    [:s/list {} (validate-schema inner-schema)]))

(defmethod validate-schema :s/vector [schema]
  (let [[_ _ inner-schema :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:vector <options> :x]."
                    schema))
    [:s/vector {} (validate-schema inner-schema)]))

(defmethod validate-schema :s/set [schema]
  (let [[_ options inner-schema :as schema] (-> schema (with-options) (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:set <options> :x]."
                    schema))
    [:s/set (select-keys options [:sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-schema :s/map [schema]
  (let [[_ options key-schema val-schema :as schema] (-> schema (with-options) (validate-sortable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:map <options> :x :y]."
                    schema))
    [:s/map (select-keys options [:sorted-by])
     (validate-schema key-schema)
     (validate-schema val-schema)]))

(defmethod validate-schema :s/optional [schema]
  (let [[_ options inner-schema :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:optional <options> :x]."
                    schema))
    [:s/optional {} (validate-schema inner-schema)]))

(defmethod validate-schema :s/enum [schema]
  (let [[_ _ values :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:enum <options> [:v1 ... :vn]]."
                    schema))
    (assert (vector? values)
            (format "Invalid schema: %s. :enum values must be listed in a vector."
                    schema))
    (assert (every? keyword? values)
            (format "Invalid schema: %s. :enum values must be keywords."
                    schema))
    [:s/enum {} values]))

(defmethod validate-schema :s/tuple [schema]
  (let [[_ _ inner-schemas :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:s/tuple <options> [:x1 ... :xn]]."
                    schema))
    (assert (vector? inner-schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector."
                    schema))
    [:s/tuple {} (mapv validate-schema inner-schemas)]))

(defmethod validate-schema :s/record [schema]
  (let [[_ {:keys [extends constructor] :as options} record-map :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:s/record <options> {:k1 :x1 ... :kn :xn}]"
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
    (assert (or (nil? constructor)
                (symbol? constructor))
            (format "Invalid schema: %s. The :constructor option must be nil or a symbol."
                    schema))
    (let [fields        (keys record-map)
          inner-schemas (vals record-map)]
      (assert (every? keyword? fields)
              (format "Invalid schema: %s. :s/record fields must be accessible by keywords."
                      schema))
      [:s/record (select-keys options [:constructor :extends])
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-schema :s/multi [schema]
  (let [[_ _ selector multi-map :as schema] (with-options schema)]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:s/multi selector {:k1 :x1 ... :kn :xn}]."
                    schema))
    (assert (symbol? selector)
            (format "Invalid schema: %s. The selector must be a symbol."
                    schema))
    (assert (map? multi-map)
            (format "Invalid schema: %s. The last parameter must be a map."
                    schema))
    (let [multi-cases   (keys multi-map)
          inner-schemas (vals multi-map)]
      [:s/multi {} selector (zipmap multi-cases (map validate-schema inner-schemas))])))

(defmethod validate-schema :s/custom [schema]
  (assert (contains? *schemas* schema)
          (format "Undefined schema: %s."
                  schema))
  schema)

(defmethod validate-schema :default [schema]
  (throw (Exception. (format "Invalid schema: %s. No such schema type."
                             schema))))

;; Config validation

(defn validate-schemas [schemas]
  (assert (map? schemas)
          (format "Invalid :schemas parameter: must be a map."))
  (let [invalid-schema-names (filter (complement keyword?) (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] are not keywords."
                    (string/join invalid-schema-names))))
  (let [invalid-schema-names (filter (fn [schema-name]
                                       (isa? schema-name :s/built-in))
                                     (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] shadow built-in types."
                    (string/join invalid-schema-names))))
  (alter-var-root #'type/hierarchy type/init-hierarchy (keys schemas))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))

(defn validate-processor-types [processor-types]
  (assert (vector? processor-types)
          "Invalid :processors parameter: must be nil or a vector.")
  (let [invalid-processor-types (remove #{:pack :diff :interp :gen} processor-types)]
    (assert (empty? invalid-processor-types)
            (format "Invalid :processors parameter: [%s] are not valid processors."
                    (string/join ", " invalid-processor-types))))
  processor-types)

(defn validate-eq-ops [eq-ops schemas]
  (assert (map? eq-ops)
          "Invalid :eq-ops parameter: must be a map.")
  (assert (every? (fn [schema]
                    (or (isa? schema :s/built-in)
                        (contains? schemas schema)))
                  (keys eq-ops))
          "Invalid :eq-ops parameter: keys must be valid schemas.")
  (assert (every? symbol? (vals eq-ops))
          "Invalid :eq-ops parameter: values must be symbols.")
  eq-ops)

(defn validate-config [{:keys [schemas processors eq-ops]
                        :or   {schemas    {}
                               processors [:pack :diff :gen :interp]
                               eq-ops     {}}}]
  (let [schemas         (validate-schemas schemas)
        processor-types (validate-processor-types processors)
        eq-ops          (validate-eq-ops eq-ops schemas)]
    {:schemas         schemas
     :processor-types processor-types
     :eq-ops          eq-ops}))
