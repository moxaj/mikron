(ns mikron.util
  "Compile time utility functions."
  (:require [clojure.string :as string]))

;; coll

(defn index-of [item coll]
  (->> coll
       (map-indexed vector)
       (filter (comp (partial = item) second))
       (ffirst)))

;; schema

(defn type-of [schema & _]
  (cond
    (keyword? schema) schema
    (vector? schema)  (first schema)
    :else             nil))

(defn as-set [sorted-by body]
  (if (nil? sorted-by)
    body
    `(into ~(if (= :default sorted-by)
              `(sorted-set)
              `(sorted-set-by ~sorted-by))
           ~body)))

(defn as-map [sorted-by body]
  (if (nil? sorted-by)
    body
    `(into ~(if (= :default sorted-by)
              `(sorted-map)
              `(sorted-map-by ~sorted-by))
           ~body)))

(defn as-record [constructor body]
  (if constructor
    `(~constructor ~body)
    body))

;; symbol

(defn gensym-base [sym]
  (let [sym-name (name sym)]
    (if-let [index (string/last-index-of sym-name "_")]
      (symbol (subs sym-name 0 index))
      sym)))

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym "_"))
                                      ~(meta sym))])
                   binding-form)]
     ~@body))

(def var-name
  (memoize
    (fn [key]
      (gensym (format "%s_" (name key))))))

(defn processor-name
  ([processor-type]
   (var-name processor-type))
  ([processor-type schema-name]
   (-> (format "%s-%s" (name processor-type) (name schema-name))
       (keyword)
       (var-name)))
  ([processor-type schema-name schema-names]
   `(case ~schema-name
      ~@(mapcat (fn [schema-name']
                  [schema-name' (processor-name processor-type schema-name')])
                schema-names))))

;; multi

(defmulti global-processor* (fn [processor-type options] processor-type))

(defn global-processor [processor-type options]
  `(~(processor-name processor-type)
    ~@(global-processor* processor-type options)))

(defmulti local-processor* (fn [processor-type schema-name options] processor-type))

(defn local-processor [processor-type schema-name options]
  `(~(vary-meta (processor-name processor-type schema-name) assoc :private true)
    ~@(local-processor* processor-type schema-name options)))
