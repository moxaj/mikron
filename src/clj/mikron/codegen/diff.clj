(ns mikron.codegen.diff
  "Differ and undiffer generating functions."
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]))

(def ^:dynamic *options*)

(defn equality-operator [schema]
  (or (get-in *options* [:eq-ops schema])
      `=))

(defmulti diff util/type-of :hierarchy #'type/hierarchy)

(defn wrap-diffed [schema route value-1 value-2]
  (case (:processor-type *options*)
    :diff   `(if (~(equality-operator schema) ~value-1 ~value-2)
               :mikron/dnil
               ~(diff schema route value-1 value-2))
    :undiff `(if (= :mikron/dnil ~value-2)
               ~value-1
               ~(diff schema route value-1 value-2))))

(defmethod diff :list [[_ _ inner-schema] route value-1 value-2]
  (if-not (:all route)
    (diff :default nil value-1 value-2)
    (util/with-gensyms [vec-value-1]
      `(let [~vec-value-1 (vec ~value-1)]
         ~(diff [:vector {} inner-schema] route vec-value-1 value-2)))))

(defmethod diff :vector [[_ _ inner-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (diff :default nil value-1 value-2)
      (util/with-gensyms [index inner-value-1 inner-value-2]
        `(vec (map-indexed (fn [~index ~inner-value-2]
                             (if-let [~inner-value-1 (get ~value-1 ~index)]
                               ~(wrap-diffed inner-schema inner-route inner-value-1 inner-value-2)
                               ~inner-value-2))
                           ~value-2))))))

(defmethod diff :map [[_ {:keys [sorted-by]} _ val-schema] route value-1 value-2]
  (let [inner-route (:all route)]
    (if-not inner-route
      (diff :default nil value-1 value-2)
      (util/with-gensyms [key val-1 val-2]
        (->> `(map (fn [[~key ~val-2]]
                     [~key (if-let [~val-1 (~value-1 ~key)]
                             ~(wrap-diffed val-schema inner-route val-1 val-2)
                             ~val-2)])
                   ~value-2)
             (util/as-map sorted-by))))))

(defmethod diff :tuple [[_ _ inner-schemas] route value-1 value-2]
  (if-not (map? route)
    (diff :default nil value-1 value-2)
    (util/with-gensyms [inner-value-1 inner-value-2]
      (->> inner-schemas
           (map-indexed (fn [index inner-schema]
                          `(let [~inner-value-1 (~value-1 ~index)
                                 ~inner-value-2 (~value-2 ~index)]
                             ~(if-let [inner-route (route index)]
                                (wrap-diffed inner-schema inner-route inner-value-1 inner-value-2)
                                (diff :default nil inner-value-1 inner-value-2)))))
           (vec)))))

(defmethod diff :record [[_ {:keys [constructor]} inner-schemas] route value-1 value-2]
  (if-not (map? route)
    (diff :default nil value-1 value-2)
    (util/with-gensyms [inner-value-1 inner-value-2]
      (->> inner-schemas
           (map (fn [[index inner-schema]]
                  [index `(let [~inner-value-1 (~index ~value-1)
                                ~inner-value-2 (~index ~value-2)]
                            ~(if-let [inner-route (route index)]
                               (wrap-diffed inner-schema inner-route inner-value-1 inner-value-2)
                               (diff :default nil inner-value-1 inner-value-2)))]))
           (into {})
           (util/as-record constructor)))))

(defmethod diff :optional [[_ _ inner-schema] route value-1 value-2]
  `(if (and ~value-1 ~value-2)
     ~(diff inner-schema route value-1 value-2)
     ~(diff :default nil value-1 value-2)))

(defmethod diff :multi [[_ _ selector multi-map] route value-1 value-2]
  (util/with-gensyms [case-1 case-2]
    `(let [~case-1 (~selector ~value-1)
           ~case-2 (~selector ~value-2)]
       (if (not= ~case-1 ~case-2)
         ~(diff :default nil value-1 value-2)
         (condp = ~case-1
           ~@(->> multi-map
                  (mapcat (fn [[multi-case inner-schema]]
                            [multi-case (diff inner-schema route value-1 value-2)]))
                  (doall)))))))

(defmethod diff :wrapped [[_ _ pre post inner-schema] route value-1 value-2]
  (util/with-gensyms [inner-value-1 inner-value-2]
    `(~post (let [~inner-value-1 (~pre ~value-1)
                  ~inner-value-2 (~pre ~value-2)]
              ~(wrap-diffed inner-schema route inner-value-1 inner-value-2)))))

(defmethod diff :template [schema route value-1 value-2]
  (diff (type/templates schema) route value-1 value-2))

(defmethod diff :custom [schema _ value-1 value-2]
  `(~(util/processor-name (:processor-type *options*) schema) ~value-1 ~value-2))

(defmethod diff :default [_ _ value-1 value-2]
  value-2)

;; private api

(defn differ [schema-name {:keys [schemas diff-routes] :as options}]
  (binding [*options* (assoc options :processor-type :diff)]
    (util/with-gensyms [value-1 value-2]
      `(~(with-meta (util/processor-name :diff schema-name)
                    {:private true})
        [~value-1 ~value-2]
        (common/wrap-diffed
          ~(wrap-diffed (schemas schema-name) (diff-routes schema-name) value-1 value-2))))))

(defn undiffer [schema-name {:keys [schemas diff-routes] :as options}]
  (binding [*options* (assoc options :processor-type :undiff)]
    (util/with-gensyms [value-1 value-2]
      `(~(with-meta (util/processor-name :undiff schema-name)
                    {:private true})
        [~value-1 ~value-2]
        (let [~value-2 (common/unwrap-diffed ~value-2)]
          ~(wrap-diffed (schemas schema-name) (diff-routes schema-name) value-1 value-2))))))

;; public api

(defn global-common [{:keys [schemas processor-type]}]
  (util/with-gensyms [schema value-1 value-2]
    `(~(util/processor-name processor-type)
      [~schema ~value-1 ~value-2]
      (~(util/select-processor processor-type schema schemas)
       ~value-1 ~value-2))))

(defn global-differ [options]
  (global-common (assoc options :processor-type :diff)))

(defn global-undiffer [options]
  (global-common (assoc options :processor-type :undiff)))
