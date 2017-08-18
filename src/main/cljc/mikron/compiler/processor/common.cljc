(ns mikron.compiler.processor.common
  "Common functions for the compilers."
  (:require [macrowbar.core :as macrowbar]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(macrowbar/compile-time
  (defn record-lookup
    "Generates code for record value lookup."
    [record key [class]]
    (if-not class
      `(~record ~key)
      `(~(symbol (str ".-" (name key)))
        ~(vary-meta record assoc :tag class))))

  (defn record->fields
    "Returns a map from record keys to generated symbols."
    [schemas]
    (->> (keys schemas)
         (map (fn [key]
                [key (gensym (str "value'-" (name key)))]))
         (into (sorted-map))))

  (defn fields->record
    "Generates code which reconstructs a record from its fields."
    [fields [class & members]]
    (if-not class
      fields
      `(~(symbol (str "->" class))
        ~@(map (fn [member]
                 (get fields (keyword member) 0))
               members))))

  (defn tuple-lookup
    "Generates code for tuple value lookup."
    [tuple index]
    `(runtime.processor.common/nth ~tuple ~index))

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

  (defn into!
    "Repeatedly evaluates `expr` `n` times, collecting the results into
    a collection `coll`. Uses transient operations if `transient?` is `true`."
    [coll transient? n expr]
    (macrowbar/macro-context {:eval-syms [coll n]}
      `(loop [~n    (long ~n)
              ~coll ~(if transient? `(transient ~coll) coll)]
         (if (== 0 ~n)
           ~(if transient? `(persistent! ~coll) coll)
           (recur (unchecked-dec ~n)
                  (~(if transient? `conj! `conj) ~coll ~expr))))))

  (defn into-kv!
    "Repeatedly evaluates `key-expr` and `value-expr` `n` times, collecting the results into
    a map `coll`. Uses transient operations if `transient?` is `true`."
    [coll transient? n key-expr value-expr]
    (macrowbar/macro-context {:eval-syms [coll n]}
      `(loop [~n    (long ~n)
              ~coll ~(if transient? `(transient ~coll) coll)]
         (if (== 0 ~n)
           ~(if transient? `(persistent! ~coll) coll)
           (recur (unchecked-dec ~n)
                  (~(if transient? `assoc! `assoc) ~coll ~key-expr ~value-expr))))))

  (defmulti processor
    "Generates processor code."
    (fn [processor-type global-options] processor-type))

  (defn processor-name
    "Generates a symbol for a processor name."
    [processor-type schema-name]
    (gensym (str (name processor-type) "-" (name schema-name)))))
