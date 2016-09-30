(ns mikron.codegen.diff
  "Differ and undiffer generating functions."
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]
            [mikron.codegen.common :as codegen-common]))

(defmulti diff util/type-of :hierarchy #'type/hierarchy)

(defn diff* [schema route value-1 value-2 {:keys [processor-type] :as options}]
  (case processor-type
    :diff   `(if (= ~value-1 ~value-2)
               :mikron/dnil
               ~(diff schema route value-1 value-2 options))
    :undiff `(if (= :mikron/dnil ~value-2)
               ~value-1
               ~(diff schema route value-1 value-2 options))))

(defmethod diff :list [[_ _ schema'] route value-1 value-2 options]
  (util/with-gensyms [vec-value-1]
    `(let [~vec-value-1 (vec ~value-1)]
       ~(diff [:vector {} schema'] route vec-value-1 value-2 options))))

(defmethod diff :vector [[_ _ schema'] route value-1 value-2 options]
  (util/with-gensyms [index value-1' value-2']
    (let [route' (:all route)]
      (if-not route'
        (diff :default nil value-1 value-2 options)
        `(vec (map-indexed (fn [~index ~value-2']
                             (if-let [~value-1' (get ~value-1 ~index)]
                               ~(diff* schema' route' value-1' value-2' options)
                               ~value-2'))
                           ~value-2))))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] route value-1 value-2 options]
  (util/with-gensyms [key val-1 val-2]
    (let [route' (:all route)]
      (if-not route'
        (diff :default nil value-1 value-2 options)
        (->> `(map (fn [[~key ~val-2]]
                     [~key (if-let [~val-1 (~value-1 ~key)]
                             ~(diff* val-schema route' val-1 val-2 options)
                             ~val-2)])
                   ~value-2)
             (util/as-map sorted-by))))))

(defmethod diff :tuple [[_ _ schemas] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :default nil value-1 value-2 options)
      (->> schemas
           (map-indexed (fn [index schema']
                          `(let [~value-1' (~value-1 ~index)
                                 ~value-2' (~value-2 ~index)]
                             ~(if-let [route' (route index)]
                                (diff* schema' route' value-1' value-2' options)
                                (diff :default nil value-1' value-2' options)))))
           (vec)))))

(defmethod diff :record [[_ {:keys [constructor]} schemas] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    (if-not (map? route)
      (diff :default nil value-1 value-2 options)
      (->> schemas
           (map (fn [[index schema']]
                  [index `(let [~value-1' (~index ~value-1)
                                ~value-2' (~index ~value-2)]
                            ~(if-let [route' (route index)]
                               (diff* schema' route' value-1' value-2' options)
                               (diff :default nil value-1' value-2' options)))]))
           (into {})
           (util/as-record constructor)))))

(defmethod diff :optional [[_ _ schema'] route value-1 value-2 options]
  `(if (and ~value-1 ~value-2)
     ~(diff schema' route value-1 value-2 options)
     ~(diff :default nil value-1 value-2 options)))

(defmethod diff :multi [[_ _ selector multi-map] route value-1 value-2 options]
  (util/with-gensyms [case-1 case-2]
    (if-not (map? route)
      (diff :default nil value-1 value-2 options)
      `(let [~case-1 (~selector ~value-1)
             ~case-2 (~selector ~value-2)]
         (if (not= ~case-1 ~case-2)
           ~(diff :default nil value-1 value-2 options)
           (condp = ~case-1
             ~@(mapcat (fn [[multi-case schema']]
                         [multi-case (if-let [route' (route multi-case)]
                                       (diff schema' route' value-1 value-2 options)
                                       (diff :default nil value-1 value-2 options))])
                       multi-map)))))))

(defmethod diff :wrapped [[_ _ pre post schema'] route value-1 value-2 options]
  (util/with-gensyms [value-1' value-2']
    `(let [~value-1' (~pre ~value-1)
           ~value-2' (~pre ~value-2)]
       (~post ~(diff* schema' route value-1' value-2' options)))))

(defmethod diff :aliased [schema route value-1 value-2 options]
  (diff (type/aliases schema) route value-1 value-2 options))

(defmethod diff :custom [schema _ value-1 value-2 {:keys [processor-type]}]
  `(~(util/processor-name processor-type schema ~value-1 ~value-2)))

(defmethod diff :default [_ _ _ value-2 _]
  value-2)

(defmethod codegen-common/local-processor* :diff [_ schema-name {:keys [schemas diff-routes] :as options}]
  (util/with-gensyms [value-1 value-2]
    `([~value-1 ~value-2]
      (common/diffed
        ~(diff* (schemas schema-name)
                (diff-routes schema-name)
                value-1
                value-2
                (assoc options :processor-type :diff))))))

(defmethod codegen-common/local-processor* :undiff [_ schema-name {:keys [schemas diff-routes] :as options}]
  (util/with-gensyms [value-1 value-2]
    `([~value-1 ~value-2]
      (let [~value-2 (common/undiffed ~value-2)]
        ~(diff* (schemas schema-name)
                (diff-routes schema-name)
                value-1
                value-2
                (assoc options :processor-type :undiff))))))

(defmethod codegen-common/global-processor* :diff [_ {:keys [schemas]}]
  (util/with-gensyms [schema value-1 value-2]
    `([~schema ~value-1 ~value-2]
      (~(util/processor-name :diff schema (keys schemas))
       ~value-1 ~value-2))))

(defmethod codegen-common/global-processor* :undiff [_ {:keys [schemas]}]
  (util/with-gensyms [schema value-1 value-2]
    `([~schema ~value-1 ~value-2]
      (~(util/processor-name :undiff schema (keys schemas))
       ~value-1 ~value-2))))
