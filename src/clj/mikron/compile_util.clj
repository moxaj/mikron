(ns mikron.compile-util
  "Compile time utility functions.")

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

(defn record-lookup [record index [class]]
  (if-not class
    `(~index ~record)
    `(~(symbol (str "." (name index)))
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

;; symbol

(defmacro with-gensyms [binding-form & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym "_"))
                                      ~(meta sym))])
                   binding-form)]
     ~@body))

(def processor-name
  (memoize
    (fn [processor-type schema-name]
      (gensym (str (name processor-type) "-" (name schema-name))))))
