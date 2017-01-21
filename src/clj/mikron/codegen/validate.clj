(ns mikron.codegen.validate
  "Validator generating functions."
  (:require [mikron.type :as type]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.type :as util.type]
            [mikron.util.coll :as util.coll]))

(defmulti valid? compile-util/type-of :hierarchy #'type/hierarchy)

(defmethod valid? :byte [_ value _]
  `(util.type/valid-integer? ~value 1 true))

(defmethod valid? :ubyte [_ value _]
  `(util.type/valid-integer? ~value 1 false))

(defmethod valid? :short [_ value _]
  `(util.type/valid-integer? ~value 2 true))

(defmethod valid? :ushort [_ value _]
  `(util.type/valid-integer? ~value 2 false))

(defmethod valid? :int [_ value _]
  `(util.type/valid-integer? ~value 4 true))

(defmethod valid? :uint [_ value _]
  `(util.type/valid-integer? ~value 4 false))

(defmethod valid? :long [_ value _]
  `(util.type/valid-integer? ~value 8 true))

(defmethod valid? :varint [_ value env]
  (valid? [:long] value env))

(defmethod valid? :floating [_ value _]
  `(number? ~value))

(defmethod valid? :boolean [_ value _]
  `(any? ~value))

(defmethod valid? :char [_ value _]
  `(char? ~value))

(defmethod valid? :string [_ value _]
  `(string? ~value))

(defmethod valid? :binary [_ value _]
  `(util.type/binary? ~value))

(defmethod valid? :nil [_ value _]
  `(nil? ~value))

(defmethod valid? :keyword [_ value _]
  `(keyword? ~value))

(defmethod valid? :symbol [_ value _]
  `(symbol? ~value))

(defmethod valid? :list [[_ _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(and (sequential? ~value)
          (every? (fn [~value']
                    ~(valid? schema' value' env))
                  ~value))))

(defmethod valid? :vector [[_ _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(and (vector? ~value)
          (util.coll/every? (fn [~value']
                              ~(valid? schema' value' env))
                            ~value))))

(defmethod valid? :set [[_ _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(and (set? ~value)
          (every? (fn [~value']
                    ~(valid? schema' value' env))
                  ~value))))

(defmethod valid? :map [[_ _ key-schema value-schema] value env]
  (compile-util/with-gensyms [entry' key' value']
    `(and (map? ~value)
          (every? (fn [~entry']
                    (let [~key'   (key ~entry')
                          ~value' (val ~entry')]
                      (and ~(valid? key-schema key' env)
                           ~(valid? value-schema value' env))))
                  ~value))))

(defmethod valid? :tuple [[_ _ schemas] value env]
  `(and (vector? ~value)
        (== (util.coll/count ~value) ~(count schemas))
        ~@(map (fn [[key' value']]
                 `(let [~value' ~(compile-util/tuple-lookup value key')]
                    ~(valid? (schemas key') value' env)))
               (compile-util/tuple->fields schemas))))

(defmethod valid? :record [[_ {:keys [type]} schemas] value env]
  `(and ~(if type
           `(instance? ~(first type) ~value)
           `(map? ~value))
        ~@(map (fn [[key' value']]
                 `(let [~value' ~(compile-util/record-lookup value key' type)]
                    ~(valid? (schemas key') value' env)))
               (compile-util/record->fields schemas))))

(defmethod valid? :optional [[_ _ schema'] value env]
  `(or (nil? ~value)
       ~(valid? schema' value env)))

(defmethod valid? :multi [[_ _ selector multi-map] value env]
  `(case (util/safe :mikron/invalid (~selector ~value))
     ~@(mapcat (fn [[multi-case schema']]
                 [multi-case (valid? schema' value env)])
               multi-map)
     false))

(defmethod valid? :enum [[_ _ enum-values] value _]
  `(~(set enum-values) ~value))

(defmethod valid? :wrapped [[_ _ pre _ schema'] value env]
  (compile-util/with-gensyms [value']
    `(let [~value' (util/safe :mikron/invalid (~pre ~value))]
       (and (not= :mikron/invalid ~value')
            ~(valid? schema' value' env)))))

(defmethod valid? :aliased [[schema'] value env]
  (valid? (type/aliases schema') value env))

(defmethod valid? :custom [schema value _]
  `(~(compile-util/processor-name :valid? schema) ~value))

(defmethod compile-util/processor :valid? [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [value]
    `([~value]
      ~(valid? schema value env))))
