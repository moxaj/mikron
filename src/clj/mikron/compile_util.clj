(ns mikron.compile-util
  "Compile time utility functions."
  (:require [clojure.set :as set]))

(defmacro cljs? []
  `(boolean (:ns ~'&env)))

;; macro helper

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym "_"))
                                      ~(meta sym))])
                   binding-form)]
     ~@body))

(defmacro evaluated [syms & body]
  (let [m (into {} (map (juxt identity gensym) syms))]
    `(let [~@(mapcat (fn [temp-sym] [temp-sym `(gensym)])
                     (vals m))]
       `(let [~~@(mapcat reverse m)]
          ~(let [~@(mapcat identity m)]
             ~@body)))))

;; symbol

(def processor-name
  (memoize
    (fn [processor-type schema-name]
      (-> (str (name processor-type) "-" (name schema-name))
          (gensym)
          (with-meta {:processor-type processor-type
                      :schema-name    schema-name})))))

;; coll

(defn find-by* [f form]
  (cond-> (if (seqable? form)
            (mapcat (partial find-by* f) form)
            [])
    (f form) (conj form)))

(defn find-by [f form]
  (set (find-by* f form)))

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
    (symbol? schema)  :custom
    :else             nil))

(defn record-lookup [record index [class]]
  (if-not class
    `(~record ~index)
    `(~(symbol (str ".-" (name index)))
      ~(with-meta record {:tag class}))))

(defn record->fields [schemas]
  (->> (keys schemas)
       (map (fn [index]
              [index (gensym (str (name index) "_"))]))
       (into (sorted-map))))

(defn fields->record [fields [class & members]]
  (if-not class
    fields
    `(~(symbol (str "->" class))
      ~@(map (fn [member]
               (or (fields (keyword member)) 0))
             members))))

(defn integer-type [^long size]
  (condp > size
    256        :byte
    65536      :short
    2147483648 :int
    :long))

(defmulti processor (fn [processor-type env] processor-type))
