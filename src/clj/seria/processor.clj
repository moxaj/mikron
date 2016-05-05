(ns seria.processor
  "Processor generating functions."
  (:require [seria.validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen]
            [seria.codegen.validate :as validate]
            [seria.util :as util]
            [seria.type :as type]
            [seria.buffer :as buffer]))

(defn make-local-processors* [{:keys [schemas] :as options}]
  (->> (keys schemas)
       (mapcat (fn [schema-name]
                 [(pack/make-packer schema-name options)
                  (pack/make-packer schema-name (assoc options :diffed? true))
                  (unpack/make-unpacker schema-name options)
                  (unpack/make-unpacker schema-name (assoc options :diffed? true))
                  (diff/make-differ schema-name options)
                  (diff/make-undiffer schema-name options)
                  (gen/make-generator schema-name options)
                  (interp/make-interper schema-name options)
                  (validate/make-validator schema-name options)]))))

(defn make-global-processors* [options]
  [(pack/make-global-packer options)
   (unpack/make-global-unpacker options)
   (diff/make-global-differ options)
   (diff/make-global-undiffer options)
   (gen/make-global-generator options)
   (interp/make-global-interper options)
   (validate/make-global-validator options)])

(defn make-processors* [options env]
  (let [options    (assoc (seria.validate/validate-options (eval options))
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
