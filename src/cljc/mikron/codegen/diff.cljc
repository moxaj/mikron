(ns mikron.codegen.diff
  "Differ and undiffer generating functions."
  (:require [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.util.schema :as util.schema]
            [mikron.util.coll :as util.coll]))

(def hierarchy
  (-> schema/hierarchy
      (schema/derives :identical?-comparable [:boolean :nil])
      (schema/derives :=-comparable          [:char :string :symbol])
      (schema/derives :keyword-comparable    [:keyword :enum])))

(defmulti diff compile-util/type-of :hierarchy #'hierarchy)

(prefer-method diff :=-comparable :aliased)

(prefer-method diff :=-comparable :built-in)

(prefer-method diff :identical?-comparable :built-in)

(prefer-method diff :keyword-comparable :aliased)

(prefer-method diff :keyword-comparable :built-in)

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

(defmethod diff :=-comparable [_ _ value-1 value-2 {:keys [processor-type]}]
  (case processor-type
    :diff   `(if (= ~value-1 ~value-2)
               :mikron/dnil
               ~value-2)
    :undiff value-2))

(defmethod diff :identical?-comparable [_ _ value-1 value-2 {:keys [processor-type]}]
  (case processor-type
    :diff   `(if (identical? ~value-1 ~value-2)
               :mikron/dnil
               ~value-2)
    :undiff value-2))

(defmethod diff :keyword-comparable [_ _ value-1 value-2 {:keys [processor-type]}]
  (case processor-type
    :diff   `(if (util.schema/keyword-identical? ~value-1 ~value-2)
               :mikron/dnil
               ~value-2)
    :undiff value-2))

(defmethod diff :list [[_ options schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1-vec value-2-vec]
    `(let [~value-1-vec (vec ~value-1)
           ~value-2-vec (vec ~value-2)]
       ~(diff [:vector options schema'] route value-1-vec value-2-vec env))))

(defmethod diff :vector [[_ _ schema'] route value-1 value-2 env]
  (compile-util/with-gensyms [index value-1' value-2' value value' length-1 length-2 same-length? all-dnil?]
    (let [route' (:all route)]
      (if-not route'
        (diff :built-in nil value-1 value-2 env)
        `(let [~length-1     (util.coll/count ~value-1)
               ~length-2     (util.coll/count ~value-2)
               ~same-length? (== ~length-1 ~length-2)]
           (loop [~value     (transient [])
                  ~index     (long 0)
                  ~all-dnil? true]
             (if (== ~index ~length-2)
               (if (and ~all-dnil? ~same-length?)
                 :mikron/dnil
                 (persistent! ~value))
               (let [~value-2' (util.coll/nth ~value-2 ~index)
                     ~value'   (if (<= ~length-1 ~index)
                                 ~(diff :built-in nil nil value-2' env)
                                 (let [~value-1' (util.coll/nth ~value-1 ~index)]
                                   ~(diff* schema' route' value-1' value-2' env)))]
                 (recur (conj! ~value ~value')
                        (unchecked-inc ~index)
                        (and ~all-dnil? (identical? :mikron/dnil ~value')))))))))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2' entry-1 key-2 keys-2 value value'
                              length-1 length-2 same-length? all-dnil?]
    (let [route' (:all route)]
      (if-not route'
        (diff :built-in nil value-1 value-2 env)
        `(let [~length-1     (util.coll/count ~value-1)
               ~length-2     (util.coll/count ~value-2)
               ~same-length? (== ~length-1 ~length-2)]
           (loop [~value            ~(if sorted-by `(sorted-map-by ~sorted-by) `(transient {}))
                  [~key-2 & ~keys-2] (keys ~value-2)
                  ~all-dnil?         true]
             (if-not ~key-2
               (if (and ~all-dnil? ~same-length?)
                 :mikron/dnil
                 ~(if sorted-by value `(persistent! ~value)))
               (let [~value-2' (~value-2 ~key-2)
                     ~entry-1  (find ~value-1 ~key-2)
                     ~value'   (if ~entry-1
                                 (let [~value-1' (val ~entry-1)]
                                   ~(diff* val-schema route' value-1' value-2' env))
                                 ~(diff :built-in nil nil value-2' env))]
                 (recur (~(if sorted-by `assoc `assoc!) ~value ~key-2 ~value')
                        ~keys-2
                        (and ~all-dnil? ~entry-1 (identical? :mikron/dnil ~value')))))))))))

(defmethod diff :tuple [[_ _ schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :built-in nil value-1 value-2 env)
      (let [fields (compile-util/tuple->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(compile-util/tuple-lookup value-1 key)
                                          ~value-2' ~(compile-util/tuple-lookup value-2 key)]
                                      ~(if-let [route' (route key)]
                                         (diff* (schemas key) route' value-1' value-2' env)
                                         (diff :built-in nil value-1' value-2' env)))])
                         fields)]
           (if (and ~@(map (fn [[_ value']]
                             `(identical? :mikron/dnil ~value'))
                           fields))
             :mikron/dnil
             ~(compile-util/fields->tuple fields)))))))

(defmethod diff :record [[_ {:keys [type]} schemas] route value-1 value-2 env]
  (compile-util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :built-in nil value-1 value-2 env)
      (let [fields (compile-util/record->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(compile-util/record-lookup value-1 key type)
                                          ~value-2' ~(compile-util/record-lookup value-2 key type)]
                                      ~(if-let [route' (route key)]
                                         (diff* (schemas key) route' value-1' value-2' env)
                                         (diff :built-in nil value-1' value-2' env)))])
                         fields)]
           (if (and ~@(map (fn [[_ value']]
                             `(identical? :mikron/dnil ~value'))
                           fields))
             :mikron/dnil
             ~(compile-util/fields->record fields type)))))))

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

(defmethod diff :aliased [[schema'] route value-1 value-2 env]
  (diff (schema/aliases schema') route value-1 value-2 env))

(defmethod diff :built-in [_ _ _ value-2 _]
  value-2)

(defmethod diff :custom [schema _ value-1 value-2 {:keys [processor-type]}]
  `(~(compile-util/processor-name processor-type schema) ~value-1 ~value-2))

(defmethod compile-util/processor :diff [_ {:keys [schema ext] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2]
    `([~value-1 ~value-2]
      ~(diff* schema (:diff ext) value-1 value-2 (assoc env :processor-type :diff)))))

(defmethod compile-util/processor :undiff [_ {:keys [schema ext] :as env}]
  (compile-util/with-gensyms [_ value-1 value-2]
    `([~value-1 ~value-2]
      ~(diff* schema (:diff ext) value-1 value-2 (assoc env :processor-type :undiff)))))
