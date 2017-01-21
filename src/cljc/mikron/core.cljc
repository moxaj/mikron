 (ns mikron.core
  "Core namespace."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.util.math :as util.math]
            [mikron.util.coll]
            [mikron.util.type]
            #?@(:clj [[mikron.spec :as spec]
                      [mikron.compile-util :as compile-util]
                      [mikron.codegen pack unpack validate gen diff interp]]))
  #?(:cljs (:require-macros [mikron.core])))

#?(:clj
   (defn ^:private processors
     "Returns all the generated processors for the given env."
     [env]
     (for [processor-type (keys (methods compile-util/processor))]
       {:processor-type processor-type
        :processor-fn   `(fn ~(compile-util/processor processor-type env))})))

#?(:clj
   (defn ^:private dependencies
     "Returns all the processor dependencies of the given processors."
     [processors]
     (->> processors
          (map :processor-fn)
          (compile-util/find-by (comp :schema-name meta))
          (into (sorted-set)))))

#?(:clj
   (defn ^:private schema*
     "Generates all the processor related code for the given env."
     [env]
     (let [processors (processors env)]
       `(let [~@(mapcat (fn [dependency]
                          (let [{:keys [processor-type schema-name]} (meta dependency)]
                            [dependency `(~schema-name ~processor-type)]))
                        (dependencies processors))]
          ~(->> processors
                (map (juxt :processor-type :processor-fn))
                (into {}))))))

#?(:clj
   (defmacro schema
     "Creates a new schema."
     [& args]
     (schema* (spec/enforce :mikron.spec/schema-args args))))

#?(:clj
   (defmacro defschema
     "Creates a new schema and binds it to the given symbol."
     [& args]
     (let [{:keys [schema-name doc-string] :as env} (spec/enforce :mikron.spec/defschema-args args)]
       `(def ~schema-name ~@(when doc-string [doc-string])
          ~(schema* env)))))

(def ^:dynamic ^:private *buffer*
  "The default buffer with 10Kb size."
  (buffer/allocate 10000))

(defn allocate-buffer
  "Allocates a new buffer with the given `size`."
  [size]
  (buffer/allocate size))

(defn set-byte-buffer-factory!
  "Sets the byte buffer factory."
  [buffer-factory]
  (buffer/set-byte-buffer-factory! buffer-factory))

#?(:clj
   (defmacro with-buffer
     "Executes all the expressions of `body` in the context of `buffer`."
     [buffer & body]
     `(binding [*buffer* ~buffer]
        ~@body)))

(defn pack
  "Packs `value`, which must conform to `schema`."
  ([schema value]
   (pack schema value false))
  ([schema value diffed?]
   (let [buffer *buffer*]
     (buffer/!headers buffer diffed?)
     ((schema (if diffed? :pack-diffed :pack)) value buffer)
     (buffer/!finalize buffer)
     (buffer/?bytes-all buffer))))

(defn unpack
  "Unpacks a value (which conforms to `schema`) from the binary value `binary`."
  [schema binary]
  (util/safe :mikron/invalid
    (let [buffer  (buffer/wrap binary)
          headers (buffer/?headers buffer)
          diffed? (headers :diffed?)]
      {:diffed? diffed?
       :value   ((schema (if diffed? :unpack-diffed :unpack)) buffer)})))

(defn gen
  "Generates a new value which conforms to `schema`."
  [schema]
  ((schema :gen)))

(defn valid?
  "Returns true if `value` conforms to `schema`, false otherwise."
  [schema value]
  ((schema :valid?) value))

(defn diff
  "Returns the diff between the old (`value-1`) and the new (`value-2`) value,
  both conforming to `schema`."
  [schema value-1 value-2]
  ((schema :diff) value-1 value-2))

(defn undiff
  "Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
  The old value must conform to `schema`."
  [schema value-1 value-2]
  ((schema :undiff) value-1 value-2))

(defn interp
  "Calculates a new value of an entity at `time`, given two other values
  (`value-1` and `value-2`, both conforming to `schema`) and their respective
  timestamps (`time-1` and `time-2`)."
  [schema value-1 value-2 time-1 time-2 time]
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (util.math/abs (- time time-1))
                         (util.math/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time-1))]
    ((schema :interp) value-1 value-2 prefer-first? time-factor)))
