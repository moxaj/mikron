(ns mikron.runtime.core
  "Core namespace. Contains the public API."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]
            [mikron.runtime.core-spec :as core-spec]
            [mikron.compiler.core :as compiler]
            [mikron.runtime.buffer :as buffer]
            [mikron.runtime.util :as util]
            [mikron.runtime.math :as math]
            [mikron.runtime.processor.common :as processor.common])
  #?(:cljs (:require-macros [mikron.runtime.core])))

(defrecord Schema [processors global-options])

(defn schema?
  "Returns `true` if `arg` is an instance of `Schema`, `false` otherwise."
  [arg]
  (instance? Schema arg))

(defonce ^:private registry-ref (atom {}))

(defn register-schema!
  "Registers a reified schema with the given name."
  [schema-name ^Schema schema]
  (swap! registry-ref assoc schema-name schema)
  schema-name)

(defonce ^:private local-registry-ref (atom {}))

(defn register-local-schema!
  "Registers a local, reified schema with the given name."
  [schema-name ^Schema schema]
  (swap! local-registry-ref assoc schema-name schema)
  schema-name)

(defn resolve-schema
  "Returns a reified schema for the given argument."
  ^Schema [arg]
  (or (and (schema? arg) arg)
      (@registry-ref arg)
      (@local-registry-ref arg)
      (throw (ex-info "Invalid schema" {:arg arg}))))

(macrowbar/emit :debug-self-hosted
  (defn schema*
    "Returns the unevaluated code to produce a reified schema given a schema definition."
    ([schema global-options]
     (schema* schema global-options {}))
    ([schema global-options schema-name-aliases]
     (let [{:keys [processors custom-processors global-options]} (compiler/compile-schema schema global-options)]
       `(let [~@(mapcat (fn [[[processor-type custom-schema] processor-name]]
                          [processor-name
                           `(processor.common/create-processor-handle
                              (->> ~(get schema-name-aliases custom-schema custom-schema)
                                   (resolve-schema)
                                   (.-processors)
                                   (~processor-type)))])
                        custom-processors)]
          (->Schema ~(->> processors
                          (map (fn [[processor-type {:keys [args body]}]]
                                 [processor-type `(fn ~args ~@body)]))
                          (into {}))
                    '~global-options)))))

  (defmacro schema
    "Returns a reified schema for the given schema definition."
    [& args]
    (macrowbar/macro-context {:gen-syms [rschema]}
      (let [{:keys [schema-name schema global-options]} (macrowbar/enforce-spec ::core-spec/schema-args args)]
        (if-not schema-name
          (schema* schema global-options)
          (let [schema-name' (keyword (str (namespace schema-name))
                                      (str (gensym (name schema-name))))]
            `(let [~rschema ~(schema* schema global-options {schema-name schema-name'})]
               (register-local-schema! ~schema-name' ~rschema)
               ~rschema))))))

  (defmacro defschema
    "Globally registers a reified schema for the given schema definition, with the given name."
    [& args]
    (let [{:keys [schema-name schema global-options]} (macrowbar/enforce-spec ::core-spec/defschema-args args)]
      `(register-schema! ~schema-name ~(schema* schema global-options)))))

(def ^:dynamic ^:private *buffer*
  "The default buffer with a 10Kb size."
  (buffer/allocate 10000))

(defn allocate-buffer
  "Allocates a new buffer with the given `size`."
  [size]
  {:pre [(nat-int? size)]}
  (buffer/allocate size))

(defn set-byte-buffer-factory!
  "Sets the byte buffer factory."
  [factory]
  (buffer/set-byte-buffer-factory! factory))

(defmacro with-buffer
  "Executes all the expressions of `body` in the context of `buffer`."
  [buffer & body]
  `(binding [*buffer* ~buffer]
     ~@body))

(defrecord DiffedValue [value])

(defn ^:private diffed?
  "Returns `true` if `value` is diffed, `false` otherwise."
  [value]
  (instance? DiffedValue value))

(defn pack
  "Packs `value`, which must conform to `schema`, and may be an instance of `DiffedValue`."
  ^bytes [schema value]
  (let [buffer    *buffer*
        diffed?   (diffed? value)
        processor ((.-processors (resolve-schema schema)) (if diffed? :pack-diffed :pack))]
    (buffer/set-headers buffer diffed?)
    (processor (if diffed? (.-value ^DiffedValue value) value) buffer)
    (buffer/finalize buffer)
    (buffer/take-bytes-all buffer)))

(defn unpack
  "Unpacks a value (which conforms to `schema`) from the binary value `binary`."
  [schema ^bytes binary]
  (util/safe :mikron/invalid
    (let [buffer    (buffer/wrap binary)
          headers   (buffer/get-headers buffer)
          diffed?   (headers :diffed?)
          processor ((.-processors (resolve-schema schema)) (if diffed? :unpack-diffed :unpack))]
      (cond-> (processor buffer)
        diffed? (DiffedValue.)))))

(defn gen
  "Generates a new value which conforms to `schema`."
  [schema]
  (let [processor ((.-processors (resolve-schema schema)) :gen)]
    (processor)))

(defn valid?
  "Returns `true` if `value` conforms to `schema`, `false` otherwise."
  [schema value]
  (let [processor ((.-processors (resolve-schema schema)) :valid?)]
    (processor value)))

(defn diff*
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`."
  [schema value-1 value-2]
  (let [processor ((.-processors (resolve-schema schema)) :diff)]
    (processor value-1 value-2)))

(defn undiff*
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
   The old value must conform to `schema`."
  [schema value-1 value-2]
  (let [processor ((.-processors (resolve-schema schema)) :undiff)]
    (processor value-1 value-2)))

(defn diff
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`.
   Wraps the return value with `DiffedValue` for `pack` and `undiff` consumption."
  [schema value-1 value-2]
  (let [processor ((.-processors (resolve-schema schema)) :diff)]
    (DiffedValue. (processor value-1 value-2))))

(defn undiff
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value. The old value must conform to
   `schema`. `value-2` must be an instance of `DiffedValue`."
  [schema value-1 value-2]
  {:pre [(diffed? value-2)]}
  (let [processor ((.-processors (resolve-schema schema)) :undiff)]
    (processor value-1 (.-value ^DiffedValue value-2))))

(defn interp
  "Calculates a new value of an entity at `time`, given two other values (`value-1` and `value-2`, both conforming to
   `schema`) and their respective timestamps (`time-1` and `time-2`). Uses linear interpolation."
  [schema value-1 value-2 time-1 time-2 time]
  {:pre [(number? time-1) (number? time-2) (number? time)]}
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (math/abs (- time time-1))
                         (math/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time-1))
        processor     ((.-processors (resolve-schema schema)) :interp)]
    (processor value-1 value-2 prefer-first? time-factor)))
