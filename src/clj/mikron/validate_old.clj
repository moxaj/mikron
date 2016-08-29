(ns mikron.validate-old
  "Static options validation."
  (:require [clojure.string :as string]
            [mikron.type :as type]
            [mikron.util :as util]))

(def ^:dynamic *schemas*)

(defn with-options [[a b & rest :as complex]]
  (if (and (map? b) (seq rest))
    complex
    (vec (concat [a {} b] rest))))

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
  (let [[_ _ schema' :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:list <options> :x]." schema))
    [:list {} (validate-schema schema')]))

(defmethod validate-schema :vector [schema]
  (let [[_ _ schema' :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:vector <options> :x]." schema))
    [:vector {} (validate-schema schema')]))

(defmethod validate-schema :set [schema]
  (let [[_ options schema' :as schema] (-> schema
                                           (with-options)
                                           (validate-sortable))]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:set <options> :x]." schema))
    [:set (select-keys options [:sorted-by])
     (validate-schema schema')]))

(defmethod validate-schema :map [schema]
  (let [[_ options key-schema val-schema :as schema] (-> schema
                                                         (with-options)
                                                         (validate-sortable))]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:map <options> :x :y]." schema))
    [:map (select-keys options [:sorted-by])
     (validate-schema key-schema)
     (validate-schema val-schema)]))

(defmethod validate-schema :tuple [schema]
  (let [[_ _ schemas :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:tuple <options> [:x1 ... :xn]]." schema))
    (assert (vector? schemas)
            (format "Invalid schema: %s. Inner schemas must be listed in a vector." schema))
    [:tuple {} (mapv validate-schema schemas)]))

(defmethod validate-schema :record [schema]
  (let [[_ {:keys [extends constructor] :as options} record-map :as schema]
        (with-options schema)]
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
    (let [fields  (keys record-map)
          schemas (vals record-map)]
      (assert (every? keyword? fields)
              (format "Invalid schema: %s. :record fields must be accessible by keywords." schema))
      [:record (select-keys options [:constructor :extends])
       (zipmap fields (map validate-schema schemas))])))

(defmethod validate-schema :optional [schema]
  (let [[_ options schema' :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:optional <options> :x]." schema))
    [:optional {} (validate-schema schema')]))

(defmethod validate-schema :multi [schema]
  (let [[_ _ selector multi-map :as schema] (with-options schema)]
    (assert (= 4 (count schema))
            (format "Invalid schema: %s. Correct signature: [:multi <options> selector {:k1 :x1 ... :kn :xn}]."
                    schema))
    (assert (symbol? selector)
            (format "Invalid schema: %s. The selector must be a symbol." schema))
    (assert (map? multi-map)
            (format "Invalid schema: %s. The last parameter must be a map." schema))
    (let [multi-cases (keys multi-map)
          schemas     (vals multi-map)]
      [:multi {} selector (zipmap multi-cases (map validate-schema schemas))])))

(defmethod validate-schema :enum [schema]
  (let [[_ _ values :as schema] (with-options schema)]
    (assert (= 3 (count schema))
            (format "Invalid schema: %s. Correct signature: [:enum <options> [:v1 ... :vn]]." schema))
    (assert (vector? values)
            (format "Invalid schema: %s. :enum values must be listed in a vector." schema))
    (assert (every? keyword? values)
            (format "Invalid schema: %s. :enum values must be keywords." schema))
    [:enum {} values]))

(defmethod validate-schema :wrapped [schema]
  (let [[_ _ pre post schema' :as schema] (with-options schema)
        pre  (or pre 'clojure.cire/identity)
        post (or post 'clojure.cire/identity)]
    (assert (= 5 (count schema))
            (format "Invalid schema: %s. Correct signature: [:wrapped <options> :x}]."
                    schema))
    #_(
        (assert (symbol? pre)
                (format "Invalid schema %s. :pre options must be a symbol."
                        schema))
        (assert (symbol? post)
                (format "Invalid schema %s. :post options must be a symbol."
                        schema)))
    [:wrapped {} pre post (validate-schema schema')]))

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

(defn validate-routes [routes]
  routes)

(defn validate-options [{:keys [schemas eq-ops interp diff buffer-size cljs-mode?]
                         :or   {schemas {}
                                interp  {}
                                diff    {}}}]
  (let [schemas       (validate-schemas schemas)
        interp-routes (validate-routes interp)
        diff-routes   (validate-routes diff)]
    {:schemas       schemas
     :interp-routes interp-routes
     :diff-routes   diff-routes
     :cljs-mode?    cljs-mode?}))
