(ns mikron.core
  "Core namespace."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.util.math :as util.math]
            [mikron.util.coll]
            [mikron.util.type]
            #?@(:clj [[clojure.spec :as spec]
                      [mikron.spec :as mikron-spec]
                      [mikron.compile-util :as compile-util]
                      [mikron.codegen pack unpack validate gen diff interp]]))
  #?(:cljs (:require-macros [mikron.core]))
  #?(:clj (:import [mikron.buffer Buffer])))

#?(:clj
   (defn processors [env]
     (for [processor-type (keys (methods compile-util/processor))]
       {:processor-type processor-type
        :processor-fn   `(fn ~(compile-util/processor processor-type env))})))

#?(:clj
   (defn dependencies [processors]
     (->> processors
          (map :processor-fn)
          (compile-util/find-by (comp :schema-name meta))
          (into (sorted-set)))))

#?(:clj
   (defmacro schema [& args]
     (let [env (spec/conform :mikron.spec/schema-args args)]
       (if (= :clojure.spec/invalid env)
         (spec/explain :mikron.spec/schema-args)
         (let [processors   (processors env)
               dependencies (dependencies processors)]
           `(let [~@(mapcat (fn [dependency]
                              (let [{:keys [processor-type schema-name]} (meta dependency)]
                                [dependency `(~schema-name ~processor-type)]))
                            dependencies)]
              ~(->> processors
                    (map (juxt :processor-type :processor-fn))
                    (into {}))))))))

#?(:clj
   (defmacro defschema [& args]
     (let [env (spec/conform ::mikron.spec/defschema-args args)]
       (if (= :clojure.spec/invalid env)
         (spec/explain :mikron.spec/defschema-args)
         (let [{:keys [schema-name docstring schema ext]} env]
           `(def ~schema-name ~@(when docstring [docstring])
              (mikron.core/schema ~schema ~@(when ext [ext]))))))))

(defonce ^:dynamic *buffer* (buffer/allocate 10000))

(defn allocate-buffer [size]
  (buffer/allocate size))

#?(:clj
   (defmacro with-buffer [buffer & body]
     `(binding [*buffer* buffer]
        ~@body)))

(defn pack [schema value]
  (let [buffer  *buffer*
        diffed? false]
    (buffer/!headers buffer diffed?)
    ((schema (if diffed? :pack-diffed :pack)) value buffer)
    (buffer/!finalize buffer)
    (buffer/?binary-all buffer)))

(defn unpack [schema binary]
  (util/safe :mikron/invalid
    (let [buffer  (buffer/wrap binary)
          headers (buffer/?headers buffer)
          diffed? (headers :diffed?)]
      {:diffed? diffed?
       :value   ((schema (if diffed? :unpack-diffed :unpack)) buffer)})))

(defn gen [schema]
  ((schema :gen)))

(defn valid? [schema value]
  ((schema :valid?) value))

(defn diff [schema value-1 value-2]
  ((schema :diff) value-1 value-2))

(defn undiff [schema value-1 value-2]
  ((schema :undiff) value-1 value-2))

(defn interp [schema value-1 value-2 time-1 time-2 time]
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (util.math/abs (- time time-1))
                         (util.math/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time))]
    ((schema :interp) value-1 value-2 prefer-first? time-factor)))
