(ns mikron.compiler.util
  "Compile time utility functions."
  #?(:cljs (:require-macros [mikron.compiler.util])))

;; macro helper

(defmacro cljs?
  "Returns `true` if compiled for cljs, `false` otherwise."
  []
  `(boolean (:ns ~'&env)))

(defmacro with-gensyms
  "Executes each expression of `body` in the context of each symbol in `syms`
  bound to a generated symbol."
  [syms & body]
  `(let [~@(mapcat (fn [sym]
                     [sym `(with-meta (gensym ~(str sym)) ~(meta sym))])
                   syms)]
     ~@body))

(defmacro with-evaluated
  "Executes each expression of `body` in the context of each symbol in `syms`
  bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation
  in macros."
  [syms & body]
  (let [m (into {} (map (juxt identity gensym) syms))]
    `(let [~@(mapcat (fn [[sym temp-sym]]
                       [temp-sym `(gensym '~sym)])
                     m)]
       `(let [~~@(mapcat reverse m)]
          ~(let [~@(mapcat identity m)]
             ~@body)))))

;; schema destructuring

(defn record-lookup
  "Generates code for record value lookup."
  [record key [class]]
  (if-not class
    `(~record ~key)
    `(~(symbol (str ".-" (name key)))
      ~(with-meta record {:tag class}))))

(defn record->fields
  "Returns a map from record keys to generated symbols."
  [schemas]
  (->> (keys schemas)
       (map (fn [key]
              [key (gensym (name key))]))
       (into (sorted-map))))

(defn fields->record
  "Generates code which reconstructs a record from its fields."
  [fields [class & members]]
  (if-not class
    fields
    `(~(symbol (str "->" class))
      ~@(map (fn [member]
               (or (fields (keyword member)) 0))
             members))))

(defn tuple-lookup
  "Generates code for tuple value lookup."
  [tuple index]
  `(mikron.util.coll/nth ~tuple ~index))

(defn tuple->fields
  "Returns a map from tuple indices to generated symbols."
  [schemas]
  (->> schemas
       (map-indexed (fn [index _]
                      [index (gensym (str "value'-" index))]))
       (into (sorted-map))))

(defn fields->tuple
  "Generates code which reconstructs a tuple from its fields."
  [fields]
  (vec (vals fields)))

;; processor

(def processor-name
  "Returns a memoized processor name."
  (memoize
    (fn [processor-type schema-name]
      (gensym (str (name processor-type) "-" (name schema-name))))))
