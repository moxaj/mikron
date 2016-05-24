(ns mikron.processor
  "Processor generating functions."
  (:require [mikron.validate]
            [mikron.codegen.diff :as diff]
            [mikron.codegen.pack :as pack]
            [mikron.codegen.unpack :as unpack]
            [mikron.codegen.interp :as interp]
            [mikron.codegen.gen :as gen]
            [mikron.codegen.validate :as validate]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.buffer :as buffer]))

(defn make-local-processors* [{:keys [schemas] :as options}]
  (->> (keys schemas)
       (mapcat (fn [schema-name]
                 [(pack/packer schema-name options)
                  (pack/packer schema-name (assoc options :diffed? true))
                  (unpack/unpacker schema-name options)
                  (unpack/unpacker schema-name (assoc options :diffed? true))
                  (diff/differ schema-name options)
                  (diff/undiffer schema-name options)
                  (gen/generator schema-name options)
                  (interp/interper schema-name options)
                  (validate/validator schema-name options)]))))

(defn make-global-processors* [options]
  [(pack/global-packer options)
   (unpack/global-unpacker options)
   (diff/global-differ options)
   (diff/global-undiffer options)
   (gen/global-generator options)
   (interp/global-interper options)
   (validate/global-validator options)])

(defn make-processors* [options env]
  (let [options    (assoc (mikron.validate/validate-options options)
                          :cljs-mode? (boolean (:ns env)))
        processors (concat (make-local-processors* options)
                           (make-global-processors* options))]
    `(let [~(util/var-name :buffer) (buffer/allocate ~(:buffer-size options))]
       (letfn [~@processors]
         (hash-map
           ~@(->> processors
                  (map first)
                  (filter (comp not :private meta))
                  (mapcat (fn [processor-name]
                            [(keyword (util/raw-gensym processor-name))
                             processor-name]))))))))

(defmacro make-processors [options]
  (make-processors* options &env))

(defmacro defprocessors [names options]
  (util/with-gensyms [processors]
    `(let [~processors ~(make-processors* options &env)]
       ~@(map (fn [name]
                `(def ~name (~(keyword name) ~processors)))
              names))))

(defn make-test-processors [options]
  (eval (make-processors* options {})))
