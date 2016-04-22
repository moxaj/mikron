(ns seria.test
  (:require [clojure.test :refer [deftest is]]
            [seria.config :as config]
            [seria.buffer :as buffer]))

(defn pack-roundtrip [value buffer]
  ((resolve 'unpack) ((resolve 'pack-x) value buffer)))

(defn test-pack-case [schemas]
  (config/eval-output (config/process-config {:schemas schemas :processors [:pack :gen]}))
  (let [buffer (buffer/allocate 100000)]
    (doseq [value (repeatedly 10 (resolve 'gen-x))]
      (is (= {:schema :x :diff-id 0 :diffed? false :value value}
             (pack-roundtrip value buffer))))))

(deftest simple-test
  (doseq [schema [:byte :ubyte :short :ushort :int :uint :long
                  :float :double :char :boolean :varint
                  :string :keyword :symbol :any :nil]]
    (test-pack-case {:x schema})))

(deftest complex-test
  (doseq [schema [[:list :byte]
                  [:vector :int]
                  [:set :short]
                  [:set {:sorted-by :default} :short]
                  [:set {:sorted-by 'clojure.core/>} :int]
                  [:map :byte :string]
                  [:map {:sorted-by :default} :byte :string]
                  [:map {:sorted-by 'clojure.core/>} :byte :string]
                  [:optional :byte]
                  [:enum [:cat :dog :measurement :error]]
                  [:tuple [:int :float :double]]
                  [:record {:a :int :b :string :c :byte}]
                  [:multi 'clojure.core/number? {true :int false :string}]]]
    (test-pack-case {:x schema})))

(deftest custom-test
  (doseq [schemas [{:x [:list :y]
                    :y [:tuple [:int :int]]}
                   {:x [:list :y]
                    :y [:record {:a :int
                                 :b :string
                                 :c [:tuple [:float :float :float]]
                                 :d [:list :int]}]}
                   {:body     [:record {:user-data [:record {:id :int}]
                                        :position  :coord
                                        :angle     :float
                                        :body-type [:enum [:dynamic :static :kinetic]]
                                        :fixtures  [:list :fixture]}]
                    :fixture  [:record {:user-data [:record {:color :int}]
                                        :coords    [:list :coord]}]
                    :coord    [:tuple [:float :float]]
                    :snapshot [:record {:time   :long
                                        :bodies [:list :body]}]
                    :x        :snapshot}]]
    (test-pack-case schemas)))

(defn diff-roundtrip [value-1 value-2]
  ((resolve 'undiff-x) value-1 ((resolve 'diff-x) value-1 value-2)))

(defn test-diff-case [schemas]
  (config/eval-output (config/process-config {:schemas schemas :processors [:diff :gen]}))
  (doseq [[value-1 value-2] (partition 2 (repeatedly 20 (resolve 'gen-x)))]
    (is (= value-2 (diff-roundtrip value-1 value-2)))))

(deftest diff-test
  (doseq [schemas [{:x [:record {:a :int
                                 :b [:tuple [:y :y :y :y]]}]
                    :y [:enum [:a :b :c :d]]}
                   {:x [:record {:a :byte
                                 :b [:tuple [:byte :byte]]
                                 :c [:vector [:enum [:cat :dog]]]}]}]]
      (test-diff-case schemas)))
