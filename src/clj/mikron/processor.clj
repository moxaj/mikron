(ns mikron.processor
  "Processor generating functions."
  (:require [mikron.validate-old :as validate]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.buffer :as buffer]
            [mikron.codegen pack unpack diff gen validate interp]))

(def global-processors-types #{:pack :unpack :diff :undiff :gen :validate :interp})

(defn global-processors* [options]
  (for [processor-type global-processors-types]
    (util/global-processor processor-type options)))

(def local-processor-types (conj global-processors-types :pack-diffed :unpack-diffed))

(defn local-processors* [{:keys [schemas] :as options}]
  (for [processor-type local-processor-types
        schema-name    (keys schemas)]
    (util/local-processor processor-type schema-name options)))

(defn processors* [options]
  (let [options           (validate/validate-options options)
        local-processors  (local-processors* options)
        global-processors (global-processors* options)]
    `(letfn [~@(concat local-processors global-processors)]
       (hash-map ~@(mapcat (fn [[processor-name]]
                             [(keyword (util/gensym-base processor-name))
                              processor-name])
                           global-processors)))))

(defmacro defprocessors [names options]
  (util/with-gensyms [processors]
    `(let [~processors ~(processors* (assoc options :cljs-mode? (boolean (:ns &env))))]
       ~@(map (fn [[name-kw name-sym]]
                `(def ~name-sym (~name-kw ~processors)))
              names))))
