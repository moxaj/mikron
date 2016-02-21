(ns seria.core-test
  (:require [seria.config :refer [make-test-config]]
            [seria.core :refer [pack unpack diff undiff interp prepare-config! with-params make-buffer]]
            [seria.gen :refer [sample]]
            [clojure.test :refer [deftest is]]))

;; Pack
(defn pack-roundtrip [value config buffer]
  (with-params {:schema :x :config config :buffer buffer}
    (unpack (pack value))))

(defn test-pack-case
  ([schemas]
   (test-pack-case schemas nil))
  ([schemas functions]
   (let [config (make-test-config :schemas schemas)
         buffer (make-buffer 10000 10000)]
     (when functions
       (prepare-config! config :functions functions))
     (doseq [value (sample 10 :x config)]
       (is (= {:schema :x :diff-id 0 :value value}
              (pack-roundtrip value config buffer)))))))

(deftest primitive-test
  (doseq [schema [:byte :ubyte :short :ushort :int :uint :long
                  :float :double :char :boolean]]
    (test-pack-case {:x schema})))

(deftest advanced-test
  (doseq [schema [:string :keyword :symbol :any]]
    (test-pack-case {:x schema})))

(deftest composite-test
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

(deftest function-test
  (doseq [[schema functions] [[[:set {:sorted-by :f} :int] {:f <}]
                              [[:map {:sorted-by :f} :byte :string] {:f >}]
                              [[:multi :f {true :int false :string}] {:f number?}]]]
    (test-pack-case {:x schema} functions)))

(defrecord TestRecord [a b])
(deftest constructor-test
  (let [config (make-test-config :schemas {:x [:record {:constructor :c}
                                               {:a :int :b :string}]})
        value  (map->TestRecord {:a 1 :b "hi there"})
        buffer (make-buffer 10000 10000)]
    (prepare-config! config :functions {:c map->TestRecord})
    (is (= {:schema :x :diff-id 0 :value value}
           (with-params {:config config :schema :x :buffer buffer}
             (unpack (pack value)))))))

(deftest custom-test
  (doseq [schemas [{:x [:list :y]
                    :y [:tuple [:int :int]]}
                   {:x [:list :y]
                    :y [:record {:a :int
                                 :b :string
                                 :c [:tuple [:float :float :float]]
                                 :d [:list :int]}]}
                   {:body     [:record {:diff :all}
                               {:user-data [:record {:id :int}]
                                :position  :coord
                                :angle     :float
                                :body-type [:enum [:dynamic :static :kinetic]]
                                :fixtures  [:list :fixture]}]
                    :fixture  [:record {:diff :all}
                               {:user-data [:record {:color :int}]
                                :coords    [:list :coord]}]
                    :coord    [:tuple [:float :float]]
                    :snapshot [:record {:diff :all}
                               {:time   :int
                                :bodies [:list :body]}]
                    :x        :snapshot}]]
    (test-pack-case schemas)))

;; Diff
(defn diff-roundtrip [value-1 value-2 config]
  (with-params {:schema :x :config config}
    (undiff value-1 (diff value-1 value-2))))

(defn test-diff-case
  ([schemas]
   (test-diff-case schemas nil))
  ([schemas functions]
   (let [config (make-test-config :schemas schemas :top-level [:x])]
     (when functions
       (prepare-config! config :functions functions))
     (doseq [[value-1 value-2] (partition 2 (sample 20 :x config))]
       (is (= value-2 (diff-roundtrip value-1 value-2 config)))))))

(deftest diff-test
  (doseq [schemas [{:x [:record {:diff :all}
                        {:a :int
                         :b [:tuple {:diff :all}
                             [:y :y :y :y]]}]
                    :y [:enum [1 2 3 4]]}
                   {:x [:record {:diff [:a :b]}
                        {:a :byte
                         :b [:tuple [:byte :byte]]
                         :c [:vector {:diff :all}
                             [:enum [:cat :dog]]]}]}]]
      (test-diff-case schemas)))
