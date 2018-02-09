(ns mikron.runtime.core
  "Core namespace. Contains the public API."
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]
            [mikron.math :as math]
            [mikron.util :as util]
            [mikron.buffer :as buffer]
            [mikron.compiler.core :as compiler]
            [mikron.runtime.core-spec :as runtime.core-spec]
            [mikron.runtime.processor.common :as runtime.processor.common])
  #?(:cljs (:require-macros [mikron.runtime.core])))

(defrecord Schema [processors])

(defonce ^:private registry-ref (atom {}))

(defn register-schema!
  "Registers a reified schema with the given name."
  [schema-name ^Schema schema]
  (swap! registry-ref assoc schema-name schema)
  schema-name)

(defn resolve-schema
  "Returns a reified schema for the given argument."
  ^Schema [arg]
  (or (and (instance? Schema arg) arg)
      (@registry-ref arg)
      (throw (ex-info "Invalid schema" {:arg arg}))))

(defn get-processor
  "Given a schema and a processor type, returns the appropriate processor.
   Throws if it does not exist."
  [schema processor-type]
  (let [processor ((.-processors (resolve-schema schema)) processor-type)]
    (when-not processor
      (throw (ex-info "No such processor" {:processor-type processor-type
                                           :schema         schema})))
    processor))

(macrowbar/emit :debug-self-hosted
  (defn schema*
    "Returns the unevaluated code to produce a reified schema given a schema definition."
    [schema-name schema global-options]
    (let [{:keys [processors custom-processor-names]} (compiler/compile-schema schema-name schema global-options)]
      `(let [~@(mapcat (fn [[[processor-type custom-schema] processor-name]]
                         [processor-name `(delay (get-processor ~custom-schema ~processor-type))])
                       custom-processor-names)]
         (->Schema ~(->> processors
                         (map (fn [[processor-type {:keys [name args body]}]]
                                [processor-type `(fn ~name ~args ~body)]))
                         (into {}))))))

  (defmacro schema
    "Returns a reified schema for the given schema definition."
    [& args]
    (let [{:keys [schema-name schema global-options]
           :or   {schema-name :mikron.runtime.core/anonymous}}
          (util/enforce-spec ::runtime.core-spec/schema-args args)]
      (schema* schema-name schema global-options)))

  (defmacro defschema
    "Globally registers a reified schema for the given schema definition, with the given name."
    [& args]
    (let [{:keys [schema-name schema global-options]} (util/enforce-spec ::runtime.core-spec/defschema-args args)]
      `(register-schema! ~schema-name ~(schema* schema-name schema global-options)))))

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

(defn ^:private get-buffer-headers
  "Gets the headers of `buffer`."
  [^mikron.buffer.MikronBuffer buffer]
  (buffer/set-le buffer (buffer/take-boolean buffer))
  {:diffed? (buffer/take-boolean buffer)})

(defn ^:private set-buffer-headers
  "Sets the headers of `buffer`."
  ^mikron.buffer.MikronBuffer [^mikron.buffer.MikronBuffer buffer diffed?]
  (doto buffer
    (buffer/reset)
    (buffer/put-boolean (buffer/get-le buffer))
    (buffer/put-boolean diffed?)))

(defrecord DiffedValue [value])

(defn ^:private diffed?
  "Returns `true` if `value` is diffed, `false` otherwise."
  [value]
  (instance? DiffedValue value))

(defn pack
  "Packs `value`, which must conform to `schema`, and may be an instance of `DiffedValue`."
  ^bytes [schema value]
  (let [buffer  *buffer*
        diffed? (diffed? value)]
    (set-buffer-headers buffer diffed?)
    ((get-processor schema (if diffed? :pack-diffed :pack))
     buffer
     (if diffed? (.-value ^DiffedValue value) value))
    (buffer/finalize buffer)
    (buffer/take-bytes-all buffer)))

(defn unpack
  "Unpacks a value (which conforms to `schema`) from the binary value `binary`."
  [schema ^bytes binary]
  (util/safe :mikron/invalid
    (let [buffer  (buffer/wrap binary)
          headers (get-buffer-headers buffer)
          diffed? (headers :diffed?)]
      (cond-> ((get-processor schema (if diffed? :unpack-diffed :unpack)) buffer)
        diffed? (DiffedValue.)))))

(defn gen
  "Generates a new value which conforms to `schema`."
  [schema]
  ((get-processor schema :gen)))

(defn valid?
  "Returns `true` if `value` conforms to `schema`, `false` otherwise."
  [schema value]
  ((get-processor schema :valid?) value))

(defn diff*
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`."
  [schema value-1 value-2]
  ((get-processor schema :diff) value-1 value-2))

(defn undiff*
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
   The old value must conform to `schema`."
  [schema value-1 value-2]
  ((get-processor schema :undiff) value-1 value-2))

(defn diff
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`.
   Wraps the return value with `DiffedValue` for `pack` and `undiff` consumption."
  [schema value-1 value-2]
  (->DiffedValue ((get-processor schema :diff) value-1 value-2)))

(defn undiff
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value. The old value must conform to
   `schema`. `value-2` must be an instance of `DiffedValue`."
  [schema value-1 value-2]
  {:pre [(diffed? value-2)]}
  ((get-processor schema :undiff) value-1 (.-value ^DiffedValue value-2)))

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
        time-factor   (/ (- time time-1) (- time-2 time-1))]
    ((get-processor schema :interp) value-1 value-2 prefer-first? time-factor)))
