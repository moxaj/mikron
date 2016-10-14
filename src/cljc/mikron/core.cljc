(ns mikron.core
  "Public API facade."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.util.math :as math]
            [mikron.util.type]
            #?@(:clj [[clojure.spec :as spec]
                      [mikron.spec :as mikron-spec]
                      [mikron.codegen [common :as codegen.common] pack unpack diff gen validate interp]]))
  #?(:clj  (:import [mikron.buffer Buffer])
     :cljs (:require-macros [mikron.core])))

#?(:clj
   (defmacro defprocessors [options]
     (let [options' (spec/conform :mikron.spec/options options)]
       (if (= :clojure.spec/invalid options')
         (spec/explain :mikron.spec/options options)
         (let [schemas         (:schemas options')
               processor-types (keys (methods codegen.common/processors))
               schema-names    (keys schemas)
               fast-processors (->> (for [processor-type processor-types
                                          schema-name    schema-names]
                                      (codegen.common/fast-processors processor-type schema-name options'))
                                    (apply concat))
               processors      (->> (for [processor-type processor-types
                                          schema-name    schema-names]
                                      (codegen.common/processors processor-type schema-name options'))
                                    (apply concat))]
           `(do (util/register-schemas ~(vec schema-names))
                (letfn [~@fast-processors]
                  ~@processors)))))))

(defn pack
  ([schema value]
   (pack schema value :buffer buffer/default-buffer))
  ([schema value & {:keys [^Buffer buffer diffed?]
                    :or   {buffer  buffer/default-buffer
                           diffed? false}}]
   (buffer/!headers buffer (@util/schema-ids schema) diffed?)
   (util/process (if diffed? :pack-diffed :pack) schema value buffer)
   (buffer/!finalize buffer)
   (buffer/?binary-all buffer)))

(defn unpack [^bytes binary]
  (let [buffer  (buffer/wrap binary)
        headers (buffer/?headers buffer)
        schema  (@util/schema-ids (:schema-id headers))
        diffed? (:diffed? headers)]
    (if-not schema
      :mikron/invalid
      {:schema  schema
       :diffed? diffed?
       :value   (util/process (if diffed? :unpack-diffed :unpack) schema buffer)})))

(defn gen [schema]
  (util/process :gen schema))

(defn valid? [schema value]
  (not= :mikron/invalid (util/process :validate schema value)))

(defn diff [schema value-1 value-2]
  (util/process :diff schema value-1 value-2))

(defn undiff [schema value-1 value-2]
  (util/process :undiff schema value-1 value-2))

(defn interp [schema value-1 value-2 time-1 time-2 time]
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (math/abs (- time time-1))
                         (math/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time))]
    (util/process :interp schema value-1 value-2 prefer-first? time-factor)))
