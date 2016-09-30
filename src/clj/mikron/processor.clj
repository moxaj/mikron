(ns mikron.processor
  "Processor generating functions."
  (:require [mikron.validate-old :as validate]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.buffer :as buffer]
            [mikron.codegen pack unpack diff gen validate interp
                            [common :as codegen-common]]))

(defn global-processors [options]
  (for [processor-type (keys (methods codegen-common/global-processor*))]
    (codegen-common/global-processor processor-type options)))

(defn local-processors [{:keys [schemas] :as options}]
  (for [processor-type (keys (methods codegen-common/local-processor*))
        schema-name    (keys schemas)]
    (codegen-common/local-processor processor-type schema-name options)))

(defn processors* [options]
  (let [options           (validate/validate-options options)
        local-processors  (local-processors options)
        global-processors (global-processors options)]
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
