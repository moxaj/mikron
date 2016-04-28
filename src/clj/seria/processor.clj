(ns seria.processor
  "Processor generating functions."
  (:require [seria.validate :as validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen]
            [seria.util.symbol :as util.symbol]
            [seria.buffer :as buffer]))

(defn make-processors* [{:keys [schemas] :as options}]
  (->> (keys schemas)
       (mapcat (fn [schema-name]
                 [(pack/make-inner-packer schema-name options)
                  (pack/make-inner-packer schema-name (assoc options :diffed? true))
                  (pack/make-packer schema-name options)
                  (unpack/make-inner-unpacker schema-name options)
                  (unpack/make-inner-unpacker schema-name (assoc options :diffed? true))
                  (diff/make-differ schema-name options)
                  (diff/make-undiffer schema-name options)
                  (gen/make-generator schema-name options)
                  (interp/make-interper schema-name options)]))
       (concat [(unpack/make-unpacker options)])))

(defn make-processors [options]
  (let [options    (validate/validate-options options)
        processors (make-processors* options)]
    `(let [~(util.symbol/var-name :buffer) (buffer/allocate ~(:buffer-size options))]
       (letfn [~@processors]
         (hash-map
           ~@(->> processors
                  (map first)
                  (filter (comp not :private meta))
                  (mapcat (fn [processor-name]
                            [(keyword (util.symbol/raw-gensym processor-name))
                             processor-name]))))))))

(defmacro defprocessors [names & {:as options}]
  (let [processors (gensym)]
    `(let [~processors (make-processors ~options)]
       ~@(map (fn [name]
                `(def ~name (~(keyword name) ~processors)))
              names))))

(defn make-test-processors [options]
  (eval (make-processors options)))
