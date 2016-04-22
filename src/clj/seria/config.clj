(ns seria.config
  "Code generation from static config."
  (:require [clojure.set :as set]
            [seria.util.coll :as util.coll]
            [seria.util.schema :as util.schema]
            [seria.validate :as validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen])
  (:import  [java.util Date]))

(defn make-processors [{:keys [processor-types schemas] :as options}]
  (->> (keys schemas)
       (mapcat (fn [schema-name]
                 (cond-> []
                   (processor-types :pack)
                   (conj (pack/make-inner-packer schema-name options)
                         (pack/make-packer schema-name options)
                         (unpack/make-inner-unpacker schema-name options))

                   (processor-types :diff)
                   (conj (diff/make-differ schema-name options)
                         (diff/make-undiffer schema-name options))

                   (and (processor-types :pack)
                        (processor-types :diff))
                   (conj (pack/make-inner-packer schema-name (assoc options :diffed? true))
                         (unpack/make-inner-unpacker schema-name (assoc options :diffed? true)))

                   (processor-types :gen)
                   (conj (gen/make-generator schema-name options)))))

                   ; (processor-types :interp)
                   ; (conj (interp/make-interper schema-name options)))]))
       (concat (when (processor-types :pack)
                 [pack/common-packer (unpack/make-unpacker options)]))
       (vec)))

(defn process-config [config]
  (let [{:keys [schemas] :as config} (validate/validate-config config)
        processors                   (make-processors config)]
    {:fns      processors
     :declares `(declare ~@(map (fn [[_ processor-name]]
                                  (with-meta processor-name {}))
                                processors))}))

(defn eval-output [{:keys [declares fns]}]
  (eval [declares fns]))
