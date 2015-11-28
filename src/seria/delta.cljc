(ns seria.delta
  (:require [seria.validate :refer [primitive? advanced? composite?]]
            [seria.util :refer [disj-indexed]]))

(defn diff-dispatch [schema {:keys [schemas]} _ _ _]
  (cond
    (or (primitive? schema)
        (advanced? schema)) :non-diffable
    (contains? schemas schema) :top-schema
    (composite? schema) (let [[composite-type {:keys [delta]}] schema]
                          (if-not (:enabled delta)
                            :non-diffable
                            (case composite-type
                              :tuple :tuple
                              :record :record
                              :map :map
                              :sorted-map :map
                              :non-diffable)))))

(def dnil ::dnil)

(defn dnil? [x]
  (= dnil x))

(defmulti diff* diff-dispatch)

(defmulti undiff* diff-dispatch)


(defmethod diff* :map [[_ _ _ value-schema] config value-1 value-2 _]
  (let [key     (gensym "key_")
        value-1 (gensym "value-1_")
        value-2 (gensym "value-2_")]
    `(into {} (for [[~key ~value-2] ~value-2]
                (let [~value-1 (get ~value-1 ~key)]
                  [~key ~(diff* value-schema config value-1 value-2 false)])))))

(defmethod undiff* :map [[map-type _ _ value-schema] config value-1 value-2 _]
  (let [key     (gensym "key_")
        value-1 (gensym "value-1_")
        value-2 (gensym "value-2_")]
    `(into ~(case map-type
              :map `{}
              :sorted-map `(sorted-map))
           (for [[~key ~value-2] ~value-2]
             (let [~value-1 (get ~value-1 ~key)]
               [~key ~(undiff* value-schema config value-1 value-2 false)])))))


(defmethod diff* :tuple [[_ {:keys [delta]} :as schema] config value-1 value-2 at-top]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))
        diffed      (gensym "diffed_")]
    `(let [~@(concat (mapcat (juxt :symbol :sub-value) disjoined-2)
                     [diffed (mapv (fn [{:keys [symbol index sub-schema]}]
                                     (if (ignored index)
                                       symbol
                                       (let [tuple-1-item (gensym "tuple-1-item_")]
                                         `(let [~tuple-1-item (get ~value-1 ~index)]
                                            ~(diff* sub-schema config tuple-1-item symbol false)))))
                                   disjoined-2)])]
       ~(if at-top
          diffed
          `(if (and ~@(map (fn [{:keys [index]}]
                             `(dnil? (get ~diffed ~index)))
                           disjoined-2))
             ~dnil
             ~diffed)))))

(defmethod undiff* :tuple [[_ {:keys [delta]} :as schema] config value-1 value-2 _]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))]
    `(if (dnil? ~value-2)
       ~value-1
       (let [~@(mapcat (juxt :symbol :sub-value) disjoined-2)]
         (vector ~@(map (fn [{:keys [symbol index sub-schema]}]
                          (if (ignored index)
                            symbol
                            (let [tuple-1-item (gensym "tuple-1-item_")]
                              `(let [~tuple-1-item (get ~value-1 ~index)]
                                 ~(undiff* sub-schema config tuple-1-item symbol false)))))
                        disjoined-2))))))


(defmethod diff* :record [[_ {:keys [delta]} :as schema] config value-1 value-2 at-top]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))
        diffed      (gensym "diffed_")]
    `(let [~@(concat (mapcat (juxt :symbol :sub-value) disjoined-2)
                     [diffed (->> disjoined-2
                                  (map (fn [{:keys [symbol index sub-schema]}]
                                         [index (if (ignored index)
                                                  symbol
                                                  (let [record-1-item (gensym "record-1-item_")]
                                                    `(let [~record-1-item (get ~value-1 ~index)]
                                                       ~(diff* sub-schema config record-1-item symbol false))))]))
                                  (into {}))])]
       ~(if at-top
          diffed
          `(if (and ~@(map (fn [{:keys [index]}]
                             `(dnil? (get ~diffed ~index)))
                           disjoined-2))
             ~dnil
             ~diffed)))))

(defmethod undiff* :record [[_ {:keys [delta]} :as schema] config value-1 value-2 _]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))]
    `(if (dnil? ~value-2)
       ~value-1
       (let [~@(mapcat (juxt :symbol :sub-value) disjoined-2)]
         (hash-map ~@(mapcat (fn [{:keys [symbol index sub-schema]}]
                               [index (if (ignored index)
                                        symbol
                                        (let [record-1-item (gensym "record-1-item_")]
                                          `(let [~record-1-item (get ~value-1 ~index)]
                                             ~(undiff* sub-schema config record-1-item symbol false))))])
                             disjoined-2))))))


(defmethod diff* :top-schema [schema {:keys [schemas] :as config} value-1 value-2 at-top]
  (diff* (get schemas schema) config value-1 value-2 at-top))

(defmethod undiff* :top-schema [schema {:keys [schemas] :as config} value-1 value-2 at-top]
  (undiff* (get schemas schema) config value-1 value-2 at-top))


(defmethod diff* :non-diffable [_ _ value-1 value-2 at-top]
  (if at-top
    value-2
    `(if (= ~value-1 ~value-2)
       dnil
       ~value-2)))

(defmethod undiff* :non-diffable [_ _ value-1 value-2 at-top]
  (if at-top
    value-2
    `(if-not (dnil? ~value-2)
       ~value-2
       ~value-1)))


(defn make-differ [schema config]
  `(fn [~'value-1 ~'value-2]
     ~(diff* schema config 'value-1 'value-2 true)))

(defn make-undiffer [schema config]
  `(fn [~'value-1 ~'value-2]
     ~(undiff* schema config 'value-1 'value-2 true)))