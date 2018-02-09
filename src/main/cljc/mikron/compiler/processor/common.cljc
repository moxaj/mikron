(ns mikron.compiler.processor.common
  "Common functions for the compilers."
  (:require [clojure.walk :as walk]
            [macrowbar.core :as macrowbar]
            [mikron.util :as util]
            ;; Runtime
            [mikron.runtime.processor.common :as runtime.processor.common]))

(macrowbar/emit :debug
  ;; generic functions

  (defn record-lookup
    "Generates code for record value lookup."
    [record key [class]]
    (if-not class
      `(~record ~key)
      (do (when-not (util/can-have-meta? record)
            (throw (ex-info "Invalid record" {:value record})))
          `(~(symbol (str ".-" (name key)))
            ~(vary-meta record assoc :tag class)))))

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
    (macrowbar/with-syms {:bind [coll n]}
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
    (macrowbar/with-syms {:bind [coll n]}
      `(loop [~n    (long ~n)
              ~coll ~(if transient? `(transient ~coll) coll)]
         (if (== 0 ~n)
           ~(if transient? `(persistent! ~coll) coll)
           (recur (unchecked-dec ~n)
                  (~(if transient? `assoc! `assoc) ~coll ~key-expr ~value-expr))))))

  ;; processor related functions

  (defn force-lazy
    "Walks the given datastructure and forces all lazy evaluations."
    [expr]
    (walk/postwalk identity expr))

  (def ^:dynamic *processor-options*
    "The constant processor level options."
    {})

  (defmulti processor*
    "Generates processor code."
    (fn [processor-type schema] processor-type))

  (defn processor
    "Generates processor code."
    [processor-type schema {:keys [processor-name] :as processor-options}]
    (binding [*processor-options* processor-options]
      (assoc (processor* processor-type schema) :name processor-name)))

  (defn processor-name
    "Generates a symbol for a processor name."
    [processor-type schema-name]
    (gensym (str (name processor-type) "-" (name schema-name))))

  (defn custom-processor-name
    "Returns a piece of code which referenced a custom processor."
    [custom-schema-name]
    (let [{:keys [schema-name processor-type processor-name custom-processor-names]} *processor-options*]
      (if (= custom-schema-name schema-name)
        processor-name
        `(deref ~(get custom-processor-names [processor-type custom-schema-name]))))))
