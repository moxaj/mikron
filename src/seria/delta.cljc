(ns seria.delta
  (:require [seria.validate :refer [primitive? advanced? composite?]]
            [seria.util :refer [disj-indexed]]))

(defn diff-dispatch [schema {:keys [schemas]} _ _ _]
  (cond
    (or (primitive? schema)
        (advanced? schema)) :non-diffable
    (contains? schemas schema) :custom
    (composite? schema) (let [[composite-type {:keys [delta]}] schema]
                          (if (and (#{:vector :map :tuple :record} composite-type)
                                   (:enabled delta))
                            composite-type
                            :non-diffable))))

(def dnil ::dnil)

(defn dnil? [x]
  (= dnil x))

(defmulti diff* diff-dispatch)

(defmulti undiff* diff-dispatch)


(defmethod diff* :vector [[_ _ sub-schema] config value-1 value-2 at-top]
  (let [index  (gensym "index_")
        item-1 (gensym "item-1_")
        item-2 (gensym "item-2_")
        diffed (gensym "diffed_")]
    `(let [~diffed (vec (map-indexed (fn [~index ~item-2]
                                       (let [~item-1 (get ~value-1 ~index)]
                                         ~(diff* sub-schema config item-1 item-2 false)))
                                     ~value-2))]
       ~(if at-top
          diffed
          `(if (and (every? dnil? ~diffed)
                    (= (count ~value-1) (count ~value-2)))
             ~dnil
             ~diffed)))))

(defmethod undiff* :vector [[_ _ sub-schema] config value-1 value-2 at-top]
  (let [index    (gensym "index_")
        item-1   (gensym "item-1_")
        item-2   (gensym "item-2_")
        undiffed `(vec (map-indexed (fn [~index ~item-2]
                                      (let [~item-1 (get ~value-1 ~index)]
                                        ~(undiff* sub-schema config item-1 item-2 false)))
                                    ~value-2))]
    (if at-top
      undiffed
      `(if (dnil? ~value-2)
         ~value-1
         ~undiffed))))


(defmethod diff* :map [[_ _ _ value-schema] config value-1 value-2 at-top]
  (let [key    (gensym "key_")
        val-1  (gensym "val-1_")
        val-2  (gensym "val-2_")
        diffed (gensym "diffed_")]
    `(let [~diffed (into {} (map (fn [[~key ~val-2]]
                                   (let [~val-1 (get ~value-1 ~key)]
                                     [~key ~(diff* value-schema config val-1 val-2 false)]))
                                 ~value-2))]
       ~(if at-top
          diffed
          `(if (and (every? dnil? (vals ~diffed))
                    (= (keys ~value-1) (keys ~value-2)))
             ~dnil
             ~diffed)))))

(defmethod undiff* :map [[_ _ _ value-schema] config value-1 value-2 at-top]
  (let [key      (gensym "key_")
        val-1    (gensym "val-1_")
        val-2    (gensym "val-2_")
        undiffed `(into {} (map (fn [[~key ~val-2]]
                                  (let [~val-1 (get ~value-1 ~key)]
                                    [~key ~(undiff* value-schema config val-1 val-2 false)]))
                                ~value-2))]
    (if at-top
      undiffed
      `(if (dnil? ~value-2)
         ~value-1
         ~undiffed))))


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

(defmethod undiff* :tuple [[_ {:keys [delta]} :as schema] config value-1 value-2 at-top]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))
        undiffed    `(let [~@(mapcat (juxt :symbol :sub-value) disjoined-2)]
                       (vector ~@(map (fn [{:keys [symbol index sub-schema]}]
                                        (if (ignored index)
                                          symbol
                                          (let [tuple-1-item (gensym "tuple-1-item_")]
                                            `(let [~tuple-1-item (get ~value-1 ~index)]
                                               ~(undiff* sub-schema config tuple-1-item symbol false)))))
                                      disjoined-2)))]
    (if at-top
      undiffed
      `(if (dnil? ~value-2)
         ~value-1
         ~undiffed))))


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

(defmethod undiff* :record [[_ {:keys [delta]} :as schema] config value-1 value-2 at-top]
  (let [disjoined-2 (disj-indexed schema value-2)
        ignored     (set (:ignored delta))
        undiffed    `(let [~@(mapcat (juxt :symbol :sub-value) disjoined-2)]
                       (hash-map ~@(mapcat (fn [{:keys [symbol index sub-schema]}]
                                             [index (if (ignored index)
                                                      symbol
                                                      (let [record-1-item (gensym "record-1-item_")]
                                                        `(let [~record-1-item (get ~value-1 ~index)]
                                                           ~(undiff* sub-schema config record-1-item symbol false))))])
                                           disjoined-2)))]
    (if at-top
      undiffed
      `(if (dnil? ~value-2)
         ~value-1
         ~undiffed))))


(defmethod diff* :custom [schema {:keys [schemas] :as config} value-1 value-2 at-top]
  (diff* (get schemas schema) config value-1 value-2 at-top))

(defmethod undiff* :custom [schema {:keys [schemas] :as config} value-1 value-2 at-top]
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