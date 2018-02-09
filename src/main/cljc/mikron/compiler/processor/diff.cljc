(ns mikron.compiler.processor.diff
  "Differ and undiffer generating functions."
  (:require [macrowbar.core :as macrowbar]
            [mikron.compiler.processor.common :as processor.common]
            [mikron.compiler.schema :as compiler.schema]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(macrowbar/emit :debug
  (def hierarchy
    "The default schema hierarchy + groupings for comparability."
    (-> compiler.schema/hierarchy
        (compiler.schema/derive-all :identity-comparable [:boolean :nil])
        (compiler.schema/derive-all :=-comparable        [:char :string :symbol])
        (compiler.schema/derive-all :keyword-comparable  [:keyword :enum])))

  (defmulti diff
    "Returns the generated (un)differ code for a given schema."
    compiler.schema/schema-name
    :hierarchy #'hierarchy)

  (defn diff*
    "Returns the generated (un)differ code for a given schema."
    [schema paths value-1 value-2]
    (if-not paths
      (diff [:default] paths value-1 value-2)
      (case (:processor-type processor.common/*processor-options*)
        :diff   (diff schema paths value-1 value-2)
        :undiff `(if (runtime.processor.common/keyword-identical? :mikron/nil ~value-2)
                   ~value-1
                   ~(diff schema paths value-1 value-2)))))

  (defmethod diff :number [_ _ value-1 value-2]
    (case (:processor-type processor.common/*processor-options*)
      :diff   `(if (== ~value-1 ~value-2)
                 :mikron/nil
                 ~value-2)
      :undiff value-2))

  (defmethod diff :=-comparable [_ _ value-1 value-2]
    (case (:processor-type processor.common/*processor-options*)
      :diff   `(if (= ~value-1 ~value-2)
                 :mikron/nil
                 ~value-2)
      :undiff value-2))

  (defmethod diff :identity-comparable [_ _ value-1 value-2]
    (case (:processor-type processor.common/*processor-options*)
      :diff   `(if (identical? ~value-1 ~value-2)
                 :mikron/nil
                 ~value-2)
      :undiff value-2))

  (defmethod diff :keyword-comparable [_ _ value-1 value-2]
    (case (:processor-type processor.common/*processor-options*)
      :diff   `(if (runtime.processor.common/keyword-identical? ~value-1 ~value-2)
                 :mikron/nil
                 ~value-2)
      :undiff value-2))

  (defmethod diff :constant [[_ _ constant-value] _ _ _]
    (case (:processor-type processor.common/*processor-options*)
      :diff   :mikron/nil
      :undiff constant-value))

  (defmethod diff :optional [[_ _ schema'] paths value-1 value-2]
    `(if (and ~value-1 ~value-2)
       ~(diff schema' paths value-1 value-2)
       ~(diff [:default] nil value-1 value-2)))

  (defmethod diff :multi [[_ _ selector schemas'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [case-1 case-2]}
      `(let [~case-1 (~selector ~value-1)
             ~case-2 (~selector ~value-2)]
         (if (not= ~case-1 ~case-2)
           ~(diff [:default] nil value-1 value-2)
           (condp = ~case-1
             ~@(mapcat (fn [[key' schema']]
                         [key' (if-let [paths' (get paths key')]
                                 (diff schema' paths' value-1 value-2)
                                 (diff [:default] nil value-1 value-2))])
                       schemas'))))))

  (defmethod diff :list [[_ options schema'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1-vec value-2-vec]}
      `(let [~value-1-vec (vec ~value-1)
             ~value-2-vec (vec ~value-2)]
         ~(diff [:vector options schema'] paths value-1-vec value-2-vec))))

  (defmethod diff :vector [[_ _ schema'] paths value-1 value-2]
    (macrowbar/with-syms {:gen [index value-1' value-2' value value' length-1 length-2 same-length? all-dnil?]}
      (let [paths' (:all paths)]
        (if-not paths'
          (diff [:default] nil value-1 value-2)
          `(let [~length-1     (runtime.processor.common/count ~value-1)
                 ~length-2     (runtime.processor.common/count ~value-2)
                 ~same-length? (== ~length-1 ~length-2)]
             (loop [~value     (transient [])
                    ~index     (long 0)
                    ~all-dnil? true]
               (if (== ~index ~length-2)
                 (if (and ~all-dnil? ~same-length?)
                   :mikron/nil
                   (persistent! ~value))
                 (let [~value-2' (runtime.processor.common/nth ~value-2 ~index)
                       ~value'   (if (<= ~length-1 ~index)
                                   ~(diff [:default] nil nil value-2')
                                   (let [~value-1' (runtime.processor.common/nth ~value-1 ~index)]
                                     ~(diff* schema' paths' value-1' value-2')))]
                   (recur (conj! ~value ~value')
                          (unchecked-inc ~index)
                          (and ~all-dnil? (runtime.processor.common/keyword-identical? :mikron/nil ~value')))))))))))

  (defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2' entry-1 key-2 keys-2 value value'
                                         length-1 length-2 same-length? all-dnil?]}
      (let [paths' (:all paths)]
        (if-not paths'
          (diff [:default] nil value-1 value-2)
          `(let [~length-1     (runtime.processor.common/count ~value-1)
                 ~length-2     (runtime.processor.common/count ~value-2)
                 ~same-length? (== ~length-1 ~length-2)]
             (loop [~value            ~(if sorted-by `(sorted-map-by ~sorted-by) `(transient {}))
                    [~key-2 & ~keys-2] (keys ~value-2)
                    ~all-dnil?         true]
               (if-not ~key-2
                 (if (and ~all-dnil? ~same-length?)
                   :mikron/nil
                   ~(if sorted-by value `(persistent! ~value)))
                 (let [~value-2' (~value-2 ~key-2)
                       ~entry-1  (find ~value-1 ~key-2)
                       ~value'   (if ~entry-1
                                   (let [~value-1' (val ~entry-1)]
                                     ~(diff* val-schema paths' value-1' value-2'))
                                   ~(diff [:default] nil nil value-2'))]
                   (recur (~(if sorted-by `assoc `assoc!) ~value ~key-2 ~value')
                          ~keys-2
                          (and ~all-dnil? ~entry-1 (runtime.processor.common/keyword-identical? :mikron/nil ~value')))))))))))

  (defmethod diff :tuple [[_ _ schemas] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2']}
      (let [fields (processor.common/tuple->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(processor.common/tuple-lookup value-1 key)
                                          ~value-2' ~(processor.common/tuple-lookup value-2 key)]
                                      ~(if-let [paths' (get paths key)]
                                         (diff* (get schemas key) paths' value-1' value-2')
                                         (diff [:default] nil value-1' value-2')))])
                         fields)]
           (if (and ~@(map (fn [[_ value']]
                             `(runtime.processor.common/keyword-identical? :mikron/nil ~value'))
                           fields))
             :mikron/nil
             ~(processor.common/fields->tuple fields))))))

  (defmethod diff :record [[_ {:keys [type]} schemas] paths value-1 value-2]
    (macrowbar/with-syms {:gen [value-1' value-2']}
      (let [fields (processor.common/record->fields schemas)]
        `(let [~@(mapcat (fn [[key value']]
                           [value' `(let [~value-1' ~(processor.common/record-lookup value-1 key type)
                                          ~value-2' ~(processor.common/record-lookup value-2 key type)]
                                      ~(if-let [paths' (get paths key)]
                                         (diff* (get schemas key) paths' value-1' value-2')
                                         (diff [:default] nil value-1' value-2')))])
                         fields)]
           (if (and ~@(map (fn [[_ value']]
                             `(runtime.processor.common/keyword-identical? :mikron/nil ~value'))
                           fields))
             :mikron/nil
             ~(processor.common/fields->record fields type))))))

  (defmethod diff :custom [schema _ value-1 value-2]
    `(~(processor.common/custom-processor-name schema)
      ~value-1
      ~value-2))

  (defmethod diff :default [_ _ _ value-2]
    value-2)

  (defmethod processor.common/processor* :diff [_ schema]
    (macrowbar/with-syms {:gen [_ value-1 value-2]}
      {:args [value-1 value-2]
       :body (processor.common/force-lazy
               (diff* schema (:diff-paths processor.common/*processor-options*) value-1 value-2))}))

  (defmethod processor.common/processor* :undiff [_ schema]
    (macrowbar/with-syms {:gen [_ value-1 value-2]}
      {:args [value-1 value-2]
       :body (processor.common/force-lazy
               (diff* schema (:diff-paths processor.common/*processor-options*) value-1 value-2))})))
