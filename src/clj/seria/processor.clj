(ns seria.processor
  "Processor generating functions."
  (:require [seria.validate :as validate]
            [seria.codegen.diff :as diff]
            [seria.codegen.pack :as pack]
            [seria.codegen.unpack :as unpack]
            [seria.codegen.interp :as interp]
            [seria.codegen.gen :as gen]
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
                  (interp/make-interper schema-name options)]))
       (doall)))

(defn make-global-processors* [options]
  [(pack/make-global-packer options)
   (unpack/make-global-unpacker options)
   (diff/make-global-differ options)
   (diff/make-global-undiffer options)
   (gen/make-global-generator options)
   (interp/make-global-interper options)])

(defn make-processors* [options]
  (let [options    (validate/validate-options options)
        processors (type/with-custom-types (:custom-types options)
                     (concat (make-local-processors* options)
                             (make-global-processors* options)))]
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
  (make-processors* (assoc options :cljs-mode? (boolean (:ns &env)))))

(defn make-test-processors [options]
  (eval (make-processors* options)))

(defmacro defprocessors [names options]
  (let [processors (gensym)
        options    (assoc options :cljs-mode? (boolean (:ns &env)))]
    `(let [~processors ~(make-processors* options)]
       ~@(map (fn [name]
                `(def ~name (~(keyword name) ~processors)))
              names))))