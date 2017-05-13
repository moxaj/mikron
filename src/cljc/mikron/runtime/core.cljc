(ns mikron.runtime.core
  "Core namespace. Contains the public API."
  (:require [clojure.spec.alpha :as s]
            [mikron.compiler.schema :as compiler.schema]
            [mikron.compiler.spec :as compiler.spec]
            [mikron.compiler.util :as compiler.util]
            [mikron.compiler.util-macros :as compiler.util-macros]
            [mikron.compiler.processor.common :as compiler.processor.common]
            [mikron.compiler.processor.pack]
            [mikron.compiler.processor.unpack]
            [mikron.compiler.processor.validate]
            [mikron.compiler.processor.gen]
            [mikron.compiler.processor.diff]
            [mikron.compiler.processor.interp]
            [mikron.runtime.buffer :as buffer]
            [mikron.runtime.util :as util]
            [mikron.runtime.math :as math])
  #?(:cljs (:require-macros [mikron.runtime.core])))

(defrecord Schema [processors opts])

(defn schema?
  "Returns `true` if `arg` is an instance of `Schema`, `false` otherwise."
  [arg]
  (instance? Schema arg))

(defonce ^:private registry-ref (atom {}))

(defn register-schema!
  "Registers a reified schema with the given name."
  [schema-name schema]
  (swap! registry-ref assoc schema-name schema)
  schema-name)

(defn resolve-schema
  "Returns a resolved schema for the given argument."
  ^Schema [arg]
  (or (and (schema? arg) arg)
      (@registry-ref arg)
      (throw (ex-info "Invalid schema" {:arg arg}))))

(compiler.util-macros/compile-time
  (defn schema*
    "Given a schema definition, returns the unevaluated code to produce a reified schema."
    [env & args]
    (let [{:keys [schema ext] :as opts} (compiler.spec/enforce ::compiler.spec/schema*-args args)
          opts                          (assoc opts :diff   (compiler.schema/expand-path (:diff ext) schema)
                                                    :interp (compiler.schema/expand-path (:interp ext) schema))
          processor-types               (keys (methods compiler.processor.common/processor))]
      `(let [~@(->> (for [processor-type processor-types
                          custom-schema  (compiler.schema/custom-schemas schema)]
                      [(compiler.util/processor-name processor-type custom-schema)
                       `(delay (~processor-type (.-processors ^Schema (resolve-schema ~custom-schema))))])
                    (apply concat))]
         (Schema. ~(->> processor-types
                        (map (fn [processor-type]
                               [processor-type `(fn ~(compiler.processor.common/processor processor-type opts))]))
                        (into {}))
                  '~opts))))

  (defmacro schema
    "Returns a reified schema for the given schema definition."
    ^Schema [& args]
    (apply schema* &env args))

  (s/fdef schema :args ::compiler.spec/schema-args)

  (defmacro defschema
    "Globally registers a reified schema for the given schema definition, with the given name."
    [schema-name & args]
    `(register-schema! ~schema-name ~(apply schema* &env args)))

  (s/fdef defschema :args ::compiler.spec/defschema-args))

(def ^:dynamic ^:private *buffer*
  "The default buffer with 10Kb size."
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
        processor ((.-processors ^Schema (resolve-schema schema)) (if diffed? :pack-diffed :pack))]
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
          processor ((if diffed? :unpack-diffed :unpack) (.-processors ^Schema (resolve-schema schema)))]
      (cond-> (processor buffer)
        diffed? (DiffedValue.)))))

(defn gen
  "Generates a new value which conforms to `schema`."
  [schema]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :gen)]
    (processor)))

(defn valid?
  "Returns `true` if `value` conforms to `schema`, `false` otherwise."
  [schema value]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :valid?)]
    (processor value)))

(defn diff*
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`."
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :diff)]
    (processor value-1 value-2)))

(defn undiff*
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
   The old value must conform to `schema`."
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :undiff)]
    (processor value-1 value-2)))

(defn diff
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`.
   Wraps the return value with `DiffedValue` for `pack` and `undiff` consumption."
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :diff)]
    (DiffedValue. (processor value-1 value-2))))

(defn undiff
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value. The old value must conform to
   `schema`. `value-2` must be an instance of `DiffedValue`."
  [schema value-1 value-2]
  {:pre [(diffed? value-2)]}
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :undiff)]
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
        processor     ((.-processors ^Schema (resolve-schema schema)) :interp)]
    (processor value-1 value-2 prefer-first? time-factor)))
