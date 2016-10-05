(ns mikron.core
  "Public API facade."
  (:require [mikron.buffer :as buffer]
            [mikron.common :as common]
            [mikron.validate-old :as static-validate]
            #?@(:clj [[mikron.codegen [common :as codegen-common] pack unpack diff gen validate interp]
                      [mikron.util :as util]]))
  #?(:cljs (:require-macros [mikron.core]))
  (:import [mikron.buffer Buffer]))

#?(:clj
   (defmacro defschemas [options]
     (let [{:keys [schemas] :as options} (assoc (static-validate/validate-options options)
                                                :cljs? (boolean (:ns &env)))
           processor-types (keys (methods codegen-common/processors))
           schema-names    (keys schemas)
           fast-processors (->> (for [processor-type processor-types
                                      schema-name    schema-names]
                                  (codegen-common/fast-processors processor-type schema-name options))
                                (apply concat))
           processors      (->> (for [processor-type processor-types
                                      schema-name    schema-names]
                                  (codegen-common/processors processor-type schema-name options))
                                (apply concat))]
       `(do (swap! common/vars update :schema-ids merge ~(util/schema-ids schemas))
            (letfn [~@fast-processors]
              ~@processors)))))

(defn pack
  ([schema value]
   (pack schema value buffer/default-buffer))
  ([schema value ^Buffer buffer]
   (let [diffed? (common/diffed? value)
         value   (cond-> value diffed? (common/undiffed))]
     (buffer/!headers buffer ((@common/vars :schema-ids) schema) diffed?)
     (common/process (if diffed? :pack-diffed :pack) schema value buffer)
     (buffer/!finalize buffer)
     (buffer/?binary-all buffer))))

(defn unpack [^bytes binary]
  (let [buffer  (buffer/wrap binary)
        headers (buffer/?headers buffer)
        schema  ((@common/vars :schema-ids) (:schema-id headers))
        diffed? (:diffed? headers)]
    (if-not schema
      :mikron/invalid
      {:schema  schema
       :diffed? diffed?
       :value   (cond-> (common/process (if diffed? :unpack-diffed :unpack) schema buffer)
                  diffed? (common/diffed))})))

(defn gen [schema]
  (common/process :gen schema))

(defn validate
  ([schema value]
   (common/process :validate schema value)))

(defn diff [schema value-1 value-2]
  (common/process :diff schema value-1 value-2))

(defn undiff [schema value-1 value-2]
  (common/process :undiff schema value-1 value-2))

(defn interp [schema value-1 value-2 time-1 time-2 time]
  (let [time          (double time)
        time-1        (double time-1)
        time-2        (double time-2)
        prefer-first? (< (common/abs (- time time-1))
                         (common/abs (- time time-2)))
        time-factor   (/ (- time time-1) (- time-2 time))]
    (common/process :interp schema value-1 value-2 prefer-first? time-factor)))
