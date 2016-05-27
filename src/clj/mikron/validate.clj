(ns mikron.validate
  "Static options validation."
  (:require [clojure.string :as string]
            [mikron.type :as type]
            [mikron.util :as util]))

;; Schema validation

(def ^:dynamic *schemas*)

(defn validate-sortable [[complex-type {:keys [sorted-by] :as options} & args :as schema]]
  (assert (or (nil? sorted-by)
              (= :default sorted-by)
              (symbol? sorted-by))
          (format "Invalid schema: %s. :sorted-by option must be either nil, :default, or a symbol." schema))
  (vec (concat [complex-type options] args)))

(defmulti validate-schema util/type-of :hierarchy #'type/hierarchy)

(defmethod validate-schema :simple [schema]
  schema)

(defmethod validate-schema :list [schema]
  (let [[_ _ inner-schema :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:list <options> :x]." schema))
    [:list {} (validate-schema inner-schema)]))

(defmethod validate-schema :vector [schema]
  (let [[_ _ inner-schema :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:vector <options> :x]." schema))
    [:vector {} (validate-schema inner-schema)]))

(defmethod validate-schema :set [schema]
  (let [[_ options inner-schema :as schema] (-> schema
                                                (util/with-options)
                                                (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:set <options> :x]." schema))
    [:set (select-keys options [:sorted-by])
     (validate-schema inner-schema)]))

(defmethod validate-schema :map [schema]
  (let [[_ options key-schema val-schema :as schema] (-> schema
                                                         (util/with-options)
                                                         (validate-sortable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:map <options> :x :y]." schema))
    [:map (select-keys options [:sorted-by])
     (validate-schema key-schema)
     (validate-schema val-schema)]))

(defmethod validate-schema :tuple [schema]
  (let [[_ _ inner-schemas :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:tuple <options> [:x1 ... :xn]]." schema))
    (assert (vector? inner-schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector." schema))
    [:tuple {} (mapv validate-schema inner-schemas)]))

(defmethod validate-schema :record [schema]
  (let [[_ {:keys [extends constructor] :as options} record-map :as schema]
        (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:record <options> {:k1 :x1 ... :kn :xn}]" schema))
    (assert (map? record-map)
            (format "Invalid schema: %s. The last parameter must be a map." schema))
    (assert (or (nil? extends)
                (vector? extends))
            (format "Invalid schema: %s. The :extends option must be nil or a vector." schema))
    (assert (every? (partial contains? *schemas*) extends)
            (format "Invalid schema: %s. :extends keywords must point to existing :record schemas." schema))
    (assert (or (nil? constructor)
                (symbol? constructor))
            (format "Invalid schema: %s. The :constructor option must be nil or a symbol." schema))
    (let [fields        (keys record-map)
          inner-schemas (vals record-map)]
      (assert (every? keyword? fields)
              (format "Invalid schema: %s. :record fields must be accessible by keywords." schema))
      [:record (select-keys options [:constructor :extends])
       (zipmap fields (map validate-schema inner-schemas))])))

(defmethod validate-schema :optional [schema]
  (let [[_ options inner-schema :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:optional <options> :x]." schema))
    [:optional {} (validate-schema inner-schema)]))

(defmethod validate-schema :multi [schema]
  (let [[_ _ selector multi-map :as schema] (util/with-options schema)]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:multi <options> selector {:k1 :x1 ... :kn :xn}]."
                    schema))
    (assert (symbol? selector)
            (format "Invalid schema: %s. The selector must be a symbol." schema))
    (assert (map? multi-map)
            (format "Invalid schema: %s. The last parameter must be a map." schema))
    (let [multi-cases   (keys multi-map)
          inner-schemas (vals multi-map)]
      [:multi {} selector (zipmap multi-cases (map validate-schema inner-schemas))])))

(defmethod validate-schema :enum [schema]
  (let [[_ _ values :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:enum <options> [:v1 ... :vn]]." schema))
    (assert (vector? values)
            (format "Invalid schema: %s. :enum values must be listed in a vector." schema))
    (assert (every? keyword? values)
            (format "Invalid schema: %s. :enum values must be keywords." schema))
    [:enum {} values]))

(defmethod validate-schema :wrapped [schema]
  (let [[_ {:keys [pre post]
            :or   {pre 'clojure.core/identity post 'clojure.core/identity}}
         inner-schema :as schema] (util/with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:wrapped <options> :x}]."
                    schema))
    (assert (symbol? pre)
            (format "Invalid schema %s. :pre options must be a symbol."
                    schema))
    (assert (symbol? post)
            (format "Invalid schema %s. :post options must be a symbol."
                    schema))
    [:wrapped {:pre pre :post post} (validate-schema inner-schema)]))

(defmethod validate-schema :custom [schema]
  (assert (contains? *schemas* schema)
          (format "Undefined schema: %s." schema))
  schema)

(defmethod validate-schema :default [schema]
  (throw (Exception. (format "Invalid schema: %s. No such schema type." schema))))

;; options validation

(defn validate-schemas [schemas]
  (assert (map? schemas)
          (format "Invalid :schemas parameter: must be a map."))
  (let [invalid-schema-names (filter (complement keyword?) (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] are not keywords." (string/join invalid-schema-names))))
  (let [invalid-schema-names (filter (fn [schema-name]
                                       (isa? schema-name :built-in))
                                     (keys schemas))]
    (assert (empty? invalid-schema-names)
            (format "Invalid :schemas parameter: [%s] shadow built-in types." (string/join invalid-schema-names))))
  (alter-var-root #'type/hierarchy type/add-custom-types (keys schemas))
  (binding [*schemas* schemas]
    (->> (for [[schema-name schema] schemas]
           [schema-name (validate-schema schema)])
         (into {}))))

(defn validate-eq-ops [eq-ops schemas]
  (assert (map? eq-ops)
          "Invalid :eq-ops parameter: must be a map.")
  (assert (every? (fn [schema]
                    (or (isa? schema :built-in)
                        (contains? schemas schema)))
                  (keys eq-ops))
          "Invalid :eq-ops parameter: keys must be valid schemas.")
  (assert (every? symbol? (vals eq-ops))
          "Invalid :eq-ops parameter: values must be symbols.")
  eq-ops)

(defn validate-routes [routes]
  routes)

(defn validate-options [{:keys [schemas eq-ops interp diff buffer-size cljs-mode?]
                         :or   {schemas     {}
                                eq-ops      {}
                                interp      {}
                                diff        {}
                                buffer-size 10000}}]
  (let [schemas       (validate-schemas schemas)
        eq-ops        (validate-eq-ops eq-ops schemas)
        interp-routes (validate-routes interp)
        diff-routes   (validate-routes diff)]
    {:schemas       schemas
     :buffer-size   buffer-size
     :interp-routes interp-routes
     :diff-routes   diff-routes
     :eq-ops        eq-ops
     :cljs-mode?    cljs-mode?}))
