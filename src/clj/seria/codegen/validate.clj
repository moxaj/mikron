(ns seria.codegen.validate
  "Linear interpolator generating functions."
  (:require [seria.type :as type]
            [seria.util :as util]
            [seria.common :as common]))

(def ^:dynamic *options*)

(defmulti validate util/type-of :hierarchy #'type/hierarchy)

(defmethod validate :integer [schema value]
  `(assert (integer? ~value)
           (common/format "'%s' is not an integer." ~value)))

(defmethod validate :floating [_ value]
  `(assert (number? ~value)
           (common/format "'%s' is not a number." ~value)))

(defmethod validate :char [_ value]
  `(assert (char? ~value)
           (common/format "'%s' is not a character." ~value)))

(defmethod validate :boolean [_ value]
  nil)

(defmethod validate :any [_ value]
  nil)

(defmethod validate :string [_ value]
  `(assert (string? ~value)
           (common/format "'%s' is not a string." ~value)))

(defmethod validate :nil [_ value]
  `(assert (nil? ~value)
           (common/format "'%s' is not nil." ~value)))

(defmethod validate :keyword [_ value]
  `(assert (keyword? ~value)
           (common/format "'%s' is not a keyword." ~value)))

(defmethod validate :symbol [_ value]
  `(assert (symbol? ~value)
           (common/format "'%s' is not a symbol." ~value)))

(defmethod validate :list [[_ _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(do (assert (sequential? ~value)
                 (common/format "'%s' is not sequential." ~value))
         (run! (fn [~inner-value]
                 ~(validate inner-schema inner-value))
               ~value))))

(defmethod validate :vector [[_ _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(do (assert (vector? ~value)
                 (common/format "'%s' is not a vector." ~value))
         (run! (fn [~inner-value]
                 ~(validate inner-schema inner-value))
               ~value))))

(defmethod validate :set [[_ _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(do (assert (set? ~value)
                 (common/format "'%s' is not a set." ~value))
         (run! (fn [~inner-value]
                 ~(validate inner-schema inner-value))
               ~value))))

(defmethod validate :map [[_ _ key-schema val-schema] value]
  (util/with-gensyms [key val]
    `(do (assert (map? ~value)
                 (common/format "'%s' is not a map." ~value))
         (run! (fn [[~key ~val]]
                 ~(validate key-schema key)
                 ~(validate val-schema val))
               ~value))))

(defmethod validate :tuple [[_ _ inner-schemas] value]
  (util/with-gensyms [inner-value]
    `(do (assert (vector? ~value)
                 (common/format "'%s' is not a vector." ~value))
         ~@(->> inner-schemas
                (map-indexed (fn [index inner-schema]
                               `(let [~inner-value (~value ~index)]
                                  ~(validate inner-schema inner-value))))
                (doall)))))

(defmethod validate :record [schema value]
  (let [[_ _ inner-schemas] (util/expand-record schema (:schemas *options*))]
    (util/with-gensyms [inner-value]
      `(do (assert (map? ~value)
                   (common/format "'%s' is not a map." ~value))
           ~@(->> inner-schemas
                  (map (fn [[index inner-schema]]
                         `(let [~inner-value (~index ~value)]
                            ~(validate inner-schema inner-value))))
                  (doall))))))

(defmethod validate :optional [[_ _ inner-schema] value]
  `(when ~value
     ~(validate inner-schema value)))

(defmethod validate :multi [[_ _ selector multi-map] value]
  (util/with-gensyms [selected-multi-case]
    `(let [~selected-multi-case (~selector ~value)]
       (case ~selected-multi-case
         ~@(map (fn [[multi-case inner-schema]]
                  [multi-case (validate inner-schema value)])
                multi-map)
         (assert (~(set (keys multi-map)) ~value)
                 (common/format ~(str "Selected multi dispach value '%s' for value '%s' "
                                      "is invalid.")
                                ~selected-multi-case ~value))))))

(defmethod validate :enum [[_ _ enum-values] value]
  `(assert (~(set enum-values) ~value)
           (common/format "'%s' is not a valid enum value." ~value)))

(defmethod validate :wrapped [[_ {:keys [pre post]} inner-schema] value]
  (util/with-gensyms [inner-value]
    `(let [~inner-value (~pre ~value)]
       ~(validate inner-schema inner-value)
       (~post ~inner-value))))

(defmethod validate :custom [schema value]
  `(~(util/processor-name :validate schema)
    ~value))

(defmethod validate :template [schema value]
  (validate (type/templates schema) value))

;; private api

(defn make-validator [schema-name {:keys [schemas] :as options}]
  (util/with-gensyms [value]
    (binding [*options* options]
      `(~(with-meta (util/processor-name :validate schema-name)
                    {:private true})
        [~value]
        ~(validate (schemas schema-name) value)
        ~value))))

;; public api

(defn make-global-validator [{:keys [schemas]}]
  (util/with-gensyms [schema value]
    `(~(util/processor-name :validate)
      [~schema ~value]
      (~(util/select-processor :validate schema schemas)
       ~value))))
