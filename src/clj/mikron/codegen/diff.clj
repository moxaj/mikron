(ns mikron.codegen.diff
  "Differ and undiffer generating functions."
  (:refer-clojure :exclude [comparator])
  (:require [mikron.type :as type]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll]))

(defmulti diff compile-util/type-of :hierarchy #'type/hierarchy)

(prefer-method diff :atomic :aliased)

(prefer-method diff :atomic :built-in)

(defn diff* [schema route value-1 value-2 {:keys [processor-type] :as env}]
  (if-not route
    (diff :built-in route value-1 value-2 env)
    (case processor-type
      :diff   (diff schema route value-1 value-2 env)
      :undiff `(if (identical? :mikron/dnil ~value-2)
                 ~value-1
                 ~(diff schema route value-1 value-2 env)))))

(defmethod diff :number [_ _ value-1 value-2 {:keys [processor-type]}]
  (case processor-type
    :diff   `(if (== ~value-1 ~value-2)
               :mikron/dnil
               ~value-2)
    :undiff value-2))

(defmethod diff :atomic [_ _ value-1 value-2 {:keys [processor-type]}]
  (case processor-type
    :diff   `(if (identical? ~value-1 ~value-2)
               :mikron/dnil
               ~value-2)
    :undiff value-2))

(defmethod diff :list [[_ options schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    `(let [~value-1' (vec ~value-1)
           ~value-2' (vec ~value-2)]
       ~(diff [:vector options schema'] route value-1' value-2' env))))

(defmethod diff :vector [[_ _ schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [index value-1' value-2']
    (let [route' (:all route)]
      (if-not route'
        (diff :built-in nil value-1 value-2 env)
        `(util.coll/combine! ~value-1 ~value-2 [] true
                             (fn [~value-1' ~value-2']
                               ~(diff* schema' route' value-1' value-2' env))
                             (fn [~value-1' ~value-2']
                               ~(diff :built-in nil value-1' value-2' env)))))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] route value-1 value-2 env]
  (compile-util/with-gensyms [val-1 val-2]
    (let [route' (:all route)]
      (if-not route'
        (diff :built-in nil value-1 value-2 env)
        `(util.coll/combine-kv! ~value-1 ~value-2
                                ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                                ~(nil? sorted-by)
                                (fn [~val-1 ~val-2]
                                  ~(diff* val-schema route' val-1 val-2 env))
                                (fn [~val-1 ~val-2]
                                  ~(diff :built-in nil val-1 val-2 env)))))))

(defmethod diff :tuple [[_ _ schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :built-in nil value-1 value-2 env)
      (->> schemas
           (map-indexed (fn [index schema']
                          `(let [~value-1' (util.coll/nth ~value-1 ~index)
                                 ~value-2' (util.coll/nth ~value-2 ~index)]
                             ~(if-let [route' (route index)]
                                (diff* schema' route' value-1' value-2' env)
                                (diff :built-in nil value-1' value-2' env)))))
           (vec)))))

(defmethod diff :record [[_ {:keys [type]} schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :built-in nil value-1 value-2 env)
      (let [fields (compile-util/record->fields schemas)]
        `(let [~@(mapcat (fn [[index field]]
                           [field `(let [~value-1' ~(compile-util/record-lookup value-1 index type)
                                         ~value-2' ~(compile-util/record-lookup value-2 index type)]
                                     ~(if-let [route' (route index)]
                                        (diff* (schemas index) route' value-1' value-2' env)
                                        (diff :built-in nil value-1' value-2' env)))])
                         fields)]
           ~(compile-util/fields->record fields type))))))

(defmethod diff :optional [[_ _ schema'] route value-1 value-2 env]
  `(if (and ~value-1 ~value-2)
     ~(diff schema' route value-1 value-2 env)
     ~(diff :built-in nil value-1 value-2 env)))

(defmethod diff :multi [[_ _ selector multi-map] route value-1 value-2 env]
  (compile-util/with-gensyms [case-1 case-2]
    (if-not (map? route)
      (diff :built-in nil value-1 value-2 env)
      `(let [~case-1 (~selector ~value-1)
             ~case-2 (~selector ~value-2)]
         (if (not= ~case-1 ~case-2)
           ~(diff :built-in nil value-1 value-2 env)
           (condp = ~case-1
             ~@(mapcat (fn [[multi-case schema']]
                         [multi-case (if-let [route' (route multi-case)]
                                       (diff schema' route' value-1 value-2 env)
                                       (diff :built-in nil value-1 value-2 env))])
                       multi-map)))))))

(defmethod diff :aliased [schema route value-1 value-2 env]
  (diff (type/aliases schema) route value-1 value-2 env))

(defmethod diff :built-in [_ _ _ value-2 _]
  value-2)

(defmethod diff :custom [schema _ value-1 value-2 {:keys [processor-type]}]
  `(~(compile-util/processor-name processor-type schema) ~value-1 ~value-2))

(defmethod compile-util/processor :diff [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2]
    `([~value-1 ~value-2]
      ~(diff* schema (:diff env) value-1 value-2 (assoc env :processor-type :diff)))))

(defmethod compile-util/processor :undiff [_ {:keys [schema] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2]
    `([~value-1 ~value-2]
      ~(diff* schema (:diff env) value-1 value-2 (assoc env :processor-type :undiff)))))
