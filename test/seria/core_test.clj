(ns seria.core-test
  (:require [clojure.test :as test]
            [seria.config :as config]
            [seria.buffer :as buffer]))

(defn pack-roundtrip [value buffer]
  ((resolve 'unpack) ((resolve 'pack-x) value buffer)))

(defn test-pack-case [schemas]
  (config/eval-output (config/process-config {:schemas schemas :processors [:pack :gen]}))
  (let [buffer (buffer/allocate 100000)]
    (doseq [value (repeatedly 10 (resolve 'gen-x))]
      (test/is (= {:schema :x :diff-id 0 :diffed? false :value value}
                  (pack-roundtrip value buffer))))))

(test/deftest simple-test
  (doseq [schema [:s/byte :s/ubyte :s/short :s/ushort :s/int :s/uint :s/long
                  :s/float :s/double :s/char :s/boolean :s/varint
                  :s/string :s/keyword :s/symbol :s/any :s/nil]]
    (test-pack-case {:x schema})))

(test/deftest complex-test
  (doseq [schema [[:s/list :s/byte]
                  [:s/vector :s/int]
                  [:s/set :s/short]
                  [:s/set {:sorted-by :default} :s/short]
                  [:s/set {:sorted-by 'clojure.core/>} :s/int]
                  [:s/map :s/byte :s/string]
                  [:s/map {:sorted-by :default} :s/byte :s/string]
                  [:s/map {:sorted-by 'clojure.core/>} :s/byte :s/string]
                  [:s/optional :s/byte]
                  [:s/enum [:s/cat :s/dog :s/measurement :s/error]]
                  [:s/tuple [:s/int :s/float :s/double]]
                  [:s/record {:s/a :s/int :s/b :s/string :s/c :s/byte}]
                  [:s/multi 'clojure.core/number? {true :s/int false :s/string}]]]
    (test-pack-case {:x schema})))

(test/deftest custom-test
  (doseq [schemas [{:x [:s/list :y]
                    :y [:s/tuple [:s/int :s/int]]}
                   {:x [:s/list :y]
                    :y [:s/record {:a :s/int
                                   :b :s/string
                                   :c [:s/tuple [:s/float :s/float :s/float]]
                                   :d [:s/list :s/int]}]}
                   {:body     [:s/record {:user-data [:s/record {:id :s/int}]
                                          :position  :coord
                                          :angle     :s/float
                                          :body-type [:s/enum [:dynamic :static :kinetic]]
                                          :fixtures  [:s/list :fixture]}]
                    :fixture  [:s/record {:user-data [:s/record {:color :s/int}]
                                          :coords    [:s/list :coord]}]
                    :coord    [:s/tuple [:s/float :s/float]]
                    :snapshot [:s/record {:time   :s/long
                                          :bodies [:s/list :body]}]
                    :x        :snapshot}]]
    (test-pack-case schemas)))

(defn diff-roundtrip [value-1 value-2]
  ((resolve 'undiff-x) value-1 ((resolve 'diff-x) value-1 value-2)))

(defn test-diff-case [schemas]
  (config/eval-output (config/process-config {:schemas schemas :processors [:diff :gen]}))
  (doseq [[value-1 value-2] (partition 2 (repeatedly 20 (resolve 'gen-x)))]
    (test/is (= value-2 (diff-roundtrip value-1 value-2)))))

(test/deftest diff-test
  (doseq [schemas [{:x [:s/record {:a :s/int
                                   :b [:s/tuple [:y :y :y :y]]}]
                    :y [:s/enum [:a :b :c :d]]}
                   {:x [:s/record {:a :s/byte
                                   :b [:s/tuple [:s/byte :s/byte]]
                                   :c [:s/vector [:s/enum [:cat :dog]]]}]}]]
      (test-diff-case schemas)))
