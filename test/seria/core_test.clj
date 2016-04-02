(ns seria.core-test
  (:require [seria.config :as config]
            [seria.core :as core]
            [clojure.test :as test]))

(defn pack-roundtrip [value config buffer]
  (core/with-params {:schema :x :config config :buffer buffer}
    (core/unpack (core/pack value))))

(defn test-pack-case
  ([schemas]
   (test-pack-case schemas nil))
  ([schemas functions]
   (let [config (config/make-test-config :schemas schemas)
         buffer (core/allocate-buffer 100000)]
     (when functions
       (core/prepare-config! config :functions functions))
     (doseq [value (repeatedly 10 #(core/gen :schema :x :config config))]
       (test/is (= {:schema :x :diff-id 0 :value value}
                   (pack-roundtrip value config buffer)))))))

(test/deftest primitive-test
  (doseq [schema [:byte :ubyte :short :ushort :int :uint :long
                  :float :double :char :boolean :varint
                  :string :keyword :symbol :any]]
    (test-pack-case {:x schema})))

(test/deftest composite-test
  (doseq [schema [[:list :byte]
                  [:vector :int]
                  [:set :short]
                  [:set {:sorted-by :default} :short]
                  [:map :byte :string]
                  [:map {:sorted-by :default} :byte :string]
                  [:optional :byte]
                  [:enum [:cat :dog :measurement :error]]
                  [:tuple [:int :float :double]]
                  [:record {:a :int :b :string :c :byte}]]]
    (test-pack-case {:x schema})))

(test/deftest function-test
  (doseq [[schema functions] [[[:set {:sorted-by :f} :int] {:f <}]
                              [[:map {:sorted-by :f} :byte :string] {:f >}]
                              [[:multi :f {true :int false :string}] {:f number?}]]]
    (test-pack-case {:x schema} functions)))

(defrecord TestRecord [a b])
(test/deftest constructor-test
  (let [config (config/make-test-config :schemas {:x [:record {:constructor :c}
                                                      {:a :int :b :string}]})
        value  (map->TestRecord {:a 1 :b "hi there"})
        buffer (core/allocate-buffer 100000)]
    (core/prepare-config! config :functions {:c map->TestRecord})
    (test/is (= {:schema :x :diff-id 0 :value value}
                (core/with-params {:config config :schema :x :buffer buffer}
                  (core/unpack (core/pack value)))))))

(test/deftest custom-test
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

(defn diff-roundtrip [value-1 value-2 config]
  (core/with-params {:schema :x :config config}
    (core/undiff value-1 (core/diff value-1 value-2))))

(defn test-diff-case
  ([schemas]
   (test-diff-case schemas nil))
  ([schemas functions]
   (let [config (config/make-test-config :schemas schemas)]
     (when functions
       (core/prepare-config! config :functions functions))
     (doseq [[value-1 value-2] (partition 2 (repeatedly 20 #(core/gen :schema :x :config config)))]
       (test/is (= value-2 (diff-roundtrip value-1 value-2 config)))))))

(test/deftest diff-test
  (doseq [schemas [{:x [:record {:a :int
                                 :b [:tuple [:y :y :y :y]]}]
                    :y [:enum [:a :b :c :d]]}
                   {:x [:record {:a :byte
                                 :b [:tuple [:byte :byte]]
                                 :c [:vector [:enum [:cat :dog]]]}]}]]
      (test-diff-case schemas)))
