 (ns mikron.core
  "Core namespace. Contains the public API."
  (:require [clojure.spec :as s]
            [mikron.compiler.spec :as compiler.spec]
            [mikron.compiler.util :as compiler.util]
            [mikron.compiler.processor.pack]
            [mikron.compiler.processor.unpack]
            [mikron.compiler.processor.validate]
            [mikron.compiler.processor.gen]
            [mikron.compiler.processor.diff]
            [mikron.compiler.processor.interp]
            [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.util.math :as util.math])
  #?(:cljs (:require-macros [mikron.core])))

(defrecord Schema [processors env])

(defn schema?
  "Returns `true` if `arg` is an instance of `Schema`, `false` otherwise."
  [arg]
  (instance? Schema arg))

(defonce ^:private registry-ref (atom {}))

(defn register-schema
  "Registers a reified schema with the given name."
  [schema-name schema]
  (swap! registry-ref assoc schema-name schema)
  schema-name)

(defn resolve-schema
  "Returns a resolved schema for the given argument."
  [arg]
  (if (schema? arg)
    arg
    (if-let [schema (@registry-ref arg)]
      schema
      (throw (ex-info "Invalid schema" {:arg arg})))))

(defn schema*
  "Given a schema definition, returns the unevaluated code to produce a reified schema.
   ~~~klipse
   (schema* [:vector :int])
   ~~~"
  [& args]
  (let [{:keys [dependencies] :as env} (compiler.spec/enforce ::compiler.spec/schema*-args args)
        processor-types (keys (methods compiler.util/processor))]
    `(let [~@(->> (for [processor-type processor-types
                        dependency     dependencies]
                    [(compiler.util/processor-name processor-type dependency)
                     `(delay (~processor-type (.-processors ^Schema (resolve-schema ~dependency))))])
                  (apply concat))]
       (Schema. ~(->> processor-types
                      (map (fn [processor-type]
                             [processor-type `(fn ~(compiler.util/processor processor-type env))]))
                      (into {}))
                '~env))))

(defmacro schema
  "Given a schema definition, returns a reified schema.
   ~~~klipse
   (def my-schema
     (schema [:tuple [:int :string [:enum [:a :b :c]]]]))
   ~~~"
  [& args]
  (apply schema* args))

(s/fdef schema :args ::compiler.spec/schema-args)

(defmacro defschema
  "Given a name and a schema definition, returns a globally registered, reified schema.
   ~~~klipse
   (defschema ::schema
     [:record {:a :keyword :b :ubyte}])
   ~~~"
  [& args]
  (let [{:keys [schema-name schema*-args]} (compiler.spec/enforce ::compiler.spec/defschema-args args)]
    `(register-schema ~schema-name ~(apply schema* schema*-args))))

(s/fdef defschema :args ::compiler.spec/defschema-args)

(def ^:dynamic ^:private *buffer*
  "The default buffer with 10Kb size."
  (buffer/allocate 10000))

(defn allocate-buffer
  "Allocates a new buffer with the given `size`.
   ~~~klipse
   (allocate-buffer 2048)
   ~~~"
  [size]
  {:pre [(nat-int? size)]}
  (buffer/allocate size))

(defn set-byte-buffer-factory!
  "Sets the byte buffer factory."
  [factory]
  (buffer/set-byte-buffer-factory! factory))

(defmacro with-buffer
  "Executes all the expressions of `body` in the context of `buffer`.
   ~~~klipse
   (let [my-schema (schema [:list :int])]
     (with-buffer (allocate-buffer 10000)
       (pack my-schema (repeatedly 2000 #(rand-int 1000)))))
   ~~~"
  [buffer & body]
  `(binding [*buffer* ~buffer]
     ~@body))

(defrecord DiffedValue [value])

(defn ^:private diffed?
  "Returns `true` if `value` is diffed, `false` otherwise."
  [value]
  (instance? DiffedValue value))

(defn pack
  "Packs `value`, which must conform to `schema`, and may be an instance of `DiffedValue`.
   ~~~klipse
   (let [my-schema (schema [:tuple [:int :keyword]])]
     (pack my-schema [100 :cat]))
   ~~~"
  [schema value]
  (let [buffer    *buffer*
        diffed?   (diffed? value)
        processor ((.-processors ^Schema (resolve-schema schema)) (if diffed? :pack-diffed :pack))]
    (buffer/!headers buffer diffed?)
    (processor (if diffed? (.-value ^DiffedValue value) value) buffer)
    (buffer/!finalize buffer)
    (buffer/?bytes-all buffer)))

(defn unpack
  "Unpacks a value (which conforms to `schema`) from the binary value `binary`.
   ~~~klipse
   (let [my-schema (schema [:tuple [:int :keyword]])]
     (->> [100 :cat] (pack my-schema) (unpack my-schema)))
   ~~~"
  [schema binary]
  (util/safe :mikron/invalid
    (let [buffer    (buffer/wrap binary)
          headers   (buffer/?headers buffer)
          diffed?   (headers :diffed?)
          processor ((if diffed? :unpack-diffed :unpack) (.-processors ^Schema (resolve-schema schema)))]
      (cond-> (processor buffer)
        diffed? (DiffedValue.)))))

(defn gen
  "Generates a new value which conforms to `schema`.
   ~~~klipse
   (let [my-schema (schema [:multi number? {true :ubyte false [:enum [:a :b :c]]}])]
     (repeatedly 10 #(gen my-schema)))
   ~~~"
  [schema]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :gen)]
    (processor)))

(defn valid?
  "Returns `true` if `value` conforms to `schema`, `false` otherwise.
   ~~~klipse
   (let [my-schema (schema [:vector :byte])]
     (valid? my-schema [0 1 2 3 4 5]))
   ~~~"
  [schema value]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :valid?)]
    (processor value)))

(defn diff*
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`.
   ~~~klipse
   (let [my-schema (schema [:vector [:enum [:a :b]]]
                           :diff {:all true})]
     (diff* my-schema [:a :b :a :a] [:b :b :a :b]))
   ~~~"
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :diff)]
    (processor value-1 value-2)))

(defn undiff*
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
   The old value must conform to `schema`.
   ~~~klipse
   (let [my-schema (schema [:vector [:enum [:a :b]]]
                           :diff {:all true})
         old-value [:a :b :a :a]]
     (->> [:b :b :a :b] (diff* my-schema old-value) (undiff* my-schema old-value)))
   ~~~"
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :undiff)]
    (processor value-1 value-2)))

(defn diff
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value, both conforming to `schema`.
   Wraps the return value with `DiffedValue` for `pack` and `undiff` consumption.
   ~~~klipse
   (let [my-schema (schema [:map :byte :keyword]
                           :diff {:all true})]
     (diff my-schema {0 :a 1 :b} {0 :a 1 :c 2 :d}))
   ~~~"
  [schema value-1 value-2]
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :diff)]
    (DiffedValue. (processor value-1 value-2))))

(defn undiff
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value. The old value must conform to
   `schema`. `value-2` must be an instance of `DiffedValue`.
   ~~~klipse
   (let [my-schema (schema [:map :byte :keyword]
                           :diff {:all true})
         old-value {0 :a 1 :b}]
     (->> {0 :a 1 :c 2 :d} (diff my-schema old-value) (undiff my-schema old-value)))
   ~~~"
  [schema value-1 value-2]
  {:pre [(diffed? value-2)]}
  (let [processor ((.-processors ^Schema (resolve-schema schema)) :undiff)]
    (processor value-1 (.-value ^DiffedValue value-2))))

(defn interp
  "Calculates a new value of an entity at `time`, given two other values (`value-1` and `value-2`, both conforming to
   `schema`) and their respective timestamps (`time-1` and `time-2`). Uses linear interpolation.
   ~~~klipse
   (let [my-schema (schema [:record {:a :float :b [:vector :float]}]
                           :interp {:a true :b {:all true}})]
     (interp my-schema {:a 10 :b [1 2 3]} {:a 20 :b [4 5 6 7]} 0 1 0.5))
   ~~~"
  [schema value-1 value-2 time-1 time-2 time]
  {:pre [(number? time-1) (number? time-2) (number? time)]}
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (util.math/abs (- time time-1))
                         (util.math/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time-1))
        processor     ((.-processors ^Schema (resolve-schema schema)) :interp)]
    (processor value-1 value-2 prefer-first? time-factor)))
