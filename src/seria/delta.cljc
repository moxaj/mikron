(ns seria.delta
  (:require [seria.validate :refer [primitive? advanced? composite?]]
            [seria.utils :refer [disj-indexed]]))

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


(defmethod diff* :map [[_ _ _ value-schema] config data-1 data-2 _]
  (let [key   (gensym "key_")
        value (gensym "value_")]
    `(into {} (for [[~key ~value] ~data-2]
                [~key ~(diff* value-schema config `(get ~data-1 ~key) value false)]))))

(defmethod undiff* :map [[map-type _ _ value-schema] config data-1 data-2 _]
  (let [key     (gensym "key_")
        value-2 (gensym "value_")]
    `(into ~(case map-type
              :map `{}
              :sorted-map `(sorted-map))
           (for [[~key ~value-2] ~data-2]
             [~key ~(undiff* value-schema config `(get ~data-1 ~key) value-2 false)]))))


(defmethod diff* :tuple [[_ {:keys [delta]} :as schema] config data-1 data-2 at-top]
  (let [disjoined-2 (disj-indexed schema data-2)
        ignored     (:ignored delta)
        diffed      (gensym "diffed_")]
    `(let [~@(concat (mapcat (juxt :symbol :sub-data) disjoined-2)
                     [diffed (mapv (fn [{:keys [symbol index sub-schema]}]
                                     (if (some #{index} ignored)
                                       symbol
                                       (diff* sub-schema config `(get ~data-1 ~index) symbol false)))
                                   disjoined-2)])]
       ~(if at-top
          diffed
          `(if (every? dnil? ~diffed)                       ;todo
             ~dnil
             ~diffed)))))

(defmethod undiff* :tuple [[_ {:keys [delta]} :as schema] config data-1 data-2 _]
  (let [disjoined-2 (disj-indexed schema data-2)
        ignored     (:ignored delta)]
    `(if (dnil? ~data-2)
       ~data-1
       (let [~@(mapcat (juxt :symbol :sub-data) disjoined-2)]
         (vector ~@(map (fn [{:keys [symbol index sub-schema]}]
                          (if (some #{index} ignored)
                            symbol
                            (undiff* sub-schema config `(get ~data-1 ~index) symbol false)))
                        disjoined-2))))))


(defmethod diff* :record [[_ {:keys [delta]} :as schema] config data-1 data-2 at-top]
  (let [disjoined-2 (disj-indexed schema data-2)
        ignored     (:ignored delta)
        diffed      (gensym "diffed_")]
    `(let [~@(concat (mapcat (juxt :symbol :sub-data) disjoined-2)
                     [diffed (->> disjoined-2
                                  (map (fn [{:keys [symbol index sub-schema]}]
                                         (if (some #{index} ignored)
                                           [index symbol]
                                           [index (diff* sub-schema config `(get ~data-1 ~index) symbol false)])))
                                  (into {}))])]
       ~(if at-top
          diffed
          `(if (every? dnil? (vals ~diffed))                ;todo
             ~dnil
             ~diffed)))))

(defmethod undiff* :record [[_ {:keys [delta]} :as schema] config data-1 data-2 _]
  (let [disjoined-2 (disj-indexed schema data-2)
        ignored     (:ignored delta)]
    `(if (dnil? ~data-2)
       ~data-1
       (let [~@(mapcat (juxt :symbol :sub-data) disjoined-2)]
         (hash-map ~@(mapcat (fn [{:keys [symbol index sub-schema]}]
                               (if (some #{index} ignored)
                                 [index symbol]
                                 [index (undiff* sub-schema config `(get ~data-1 ~index) symbol false)]))
                             disjoined-2))))))


(defmethod diff* :top-schema [schema {:keys [schemas] :as config} data-1 data-2 at-top]
  (diff* (get schemas schema) config data-1 data-2 at-top))

(defmethod undiff* :top-schema [schema {:keys [schemas] :as config} data-1 data-2 at-top]
  (undiff* (get schemas schema) config data-1 data-2 at-top))


(defmethod diff* :non-diffable [_ _ data-1 data-2 at-top]
  (if at-top
    data-2
    `(if (= ~data-1 ~data-2)
       dnil
       ~data-2)))

(defmethod undiff* :non-diffable [_ _ data-1 data-2 at-top]
  (if at-top
    data-2
    `(if-not (dnil? ~data-2)
       ~data-2
       ~data-1)))


(defn make-differ [schema config]
  `(fn [~'data-1 ~'data-2]
     ~(diff* schema config 'data-1 'data-2 true)))

(defn make-undiffer [schema config]
  `(fn [~'data-1 ~'data-2]
     ~(undiff* schema config 'data-1 'data-2 true)))