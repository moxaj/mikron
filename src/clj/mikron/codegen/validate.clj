(ns mikron.codegen.validate
  "Validator generating functions."
  (:import [java.lang Exception])
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]))

(defmulti validate util/type-of :hierarchy #'type/hierarchy)

(defmethod validate :integer [schema value options]
  `(when-not (integer? ~value)
     :mikron/invalid))

(defmethod validate :floating [_ value options]
  `(when-not (number? ~value)
     :mikron/invalid))

(defmethod validate :char [_ value options]
  `(when-not (char? ~value)
     :mikron/invalid))

(defmethod validate :string [_ value options]
  `(when-not (string? ~value)
     :mikron/invalid))

(defmethod validate :binary [_ value options]
  `(when-not (common/binary? ~value)
     :mikron/invalid))

(defmethod validate :nil [_ value options]
  `(when-not (nil? ~value)
     :mikron/invalid))

(defmethod validate :keyword [_ value options]
  `(when-not (keyword? ~value)
     :mikron/invalid))

(defmethod validate :symbol [_ value options]
  `(when-not (symbol? ~value)
     :mikron/invalid))

(defmethod validate :list [[_ _ schema'] value options]
  (util/with-gensyms [value']
    `(when (or (not (sequential? ~value))
               (->> ~value
                    (map (fn [~value']
                           ~(validate schema' value' options)))
                    (some #{:mikron/invalid})))
       :mikron/invalid)))

(defmethod validate :vector [[_ _ schema'] value options]
  (util/with-gensyms [value']
    `(when (or (not (vector? ~value))
               (->> ~value
                    (map (fn [~value']
                           ~(validate schema' value' options)))
                    (some #{:mikron/invalid})))
       :mikron/invalid)))

(defmethod validate :set [[_ _ schema'] value options]
  (util/with-gensyms [value']
    `(when (or (not (set? ~value))
               (->> ~value
                    (map (fn [~value']
                           ~(validate schema' value' options)))
                    (some #{:mikron/invalid})))
       :mikron/invalid)))

(defmethod validate :map [[_ _ key-schema val-schema] value options]
  (util/with-gensyms [key val]
    `(when (or (not (map? ~value))
               (->> ~value
                    (mapcat (fn [[~key ~val]]
                              [~(validate key-schema key options)
                               ~(validate val-schema val options)]))
                    (some #{:mikron/invalid})))
       :mikron/invalid)))

(defmethod validate :tuple [[_ _ schemas] value options]
  (util/with-gensyms [value']
    `(when (or (not (vector? ~value))
               ~@(map-indexed (fn [index schema']
                                `(let [~value' (get ~value ~index)]
                                   (= :mikron/invalid ~(validate schema' value' options))))
                              schemas))
       :mikron/invalid)))

(defmethod validate :record [[_ _ schemas] value options]
  (util/with-gensyms [value']
    `(when (or (not (map? ~value))
               ~@(map (fn [[index schema']]
                        `(let [~value' (get ~value ~index)]
                           (= :mikron/invalid ~(validate schema' value' options))))
                      schemas))
       :mikron/invalid)))

(defmethod validate :optional [[_ _ schema'] value options]
  `(when (and ~value
              (= :mikron/invalid ~(validate schema' value options)))
     :mikron/invalid))

(defmethod validate :multi [[_ _ selector multi-map] value {:keys [cljs-mode?] :as options}]
  (util/with-gensyms [multi-case value' e]
    `(let [~multi-case (try
                         (~selector ~value)
                         (catch ~(if cljs-mode? `js/Object `Exception) ~e
                           :mikron/invalid))]
       (if (= :mikron/invalid ~multi-case)
         :mikron/invalid
         (case ~multi-case
           ~@(mapcat (fn [[multi-case' schema']]
                       [multi-case' `(let [~value' ~(validate schema' value options)]
                                       (when (= :mikron/invalid ~value')
                                         :mikron/invalid))])
                     multi-map)
           :else :mikron/invalid)))))

(defmethod validate :enum [[_ _ enum-values] value options]
  `(when-not (~(set enum-values) ~value)
     :mikron/invalid))

(defmethod validate :wrapped [[_ _ pre post schema'] value {:keys [cljs-mode?] :as options}]
  (util/with-gensyms [value' value'* e]
    `(let [~value' (try
                     (let [~value'* (~pre ~value)]
                       (~post ~value'*)
                       ~value'*)
                     (catch ~(if cljs-mode? `js/Object `Exception) ~e
                       :mikron/invalid))]
       (when (or (= :mikron/invalid ~value')
                 (= :mikron/invalid ~(validate schema' value' options)))
         :mikron/invalid))))

(defmethod validate :aliased [schema value options]
  (validate (type/aliases schema) value options))

(defmethod validate :custom [schema value _]
  `(~(util/processor-name :validate schema)
    ~value))

(defmethod validate :default [_ _ _]
  nil)

(defmethod util/local-processor* :validate [_ schema-name {:keys [schemas] :as options}]
  (util/with-gensyms [value]
    `([~value]
      ~(validate (schemas schema-name) value options))))

(defmethod util/global-processor* :validate [_ {:keys [schemas]}]
  (util/with-gensyms [schema value]
    `([~schema ~value]
      (if (= :mikron/invalid (~(util/processor-name :validate schema (keys schemas))
                              ~value))
        :mikron/invalid
        ~value))))
