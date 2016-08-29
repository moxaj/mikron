(ns mikron.test
  (:require [clojure.test :refer [deftest is testing are]]
            [mikron.processor :as mikron]
            [mikron.util :as util])
  (:import [java.util Arrays]))

(defn equals? [a b]
  (if (= (Class/forName "[B") (class a))
    (Arrays/equals ^bytes a ^bytes b)
    (= a b)))

(defmulti test-mikron (fn [method processors dataset] method))

(defmethod test-mikron :pack [_ {:keys [pack unpack gen]} dataset]
  (doseq [value dataset]
    (let [{value' :value :keys [schema diffed?]} (unpack (pack :x value))]
      (are [x y] (equals? x y)
        schema  :x
        diffed? false
        value   value'))))

(defmethod test-mikron :diff [_ {:keys [diff undiff gen]} dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (is (= value-2 (undiff :x value-1 (diff :x value-1 value-2))))))

(defmethod test-mikron :validate [_ {:keys [validate gen]} dataset]
  (doseq [value dataset]
    (is (not= :mikron/invalid (validate :x value))
        (= :mikron/invalid (validate :x (Object.))))))

(defmethod test-mikron :interp [_ {:keys [interp gen]} dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (interp :x value-1 value-2 0 1 0.5)))

(defmacro def-mikron-tests [test-cases]
  (util/with-gensyms [processors dataset]
    `(do ~@(map (fn [[test-name schema]]
                  (let [schemas (if (map? schema) schema {:x schema})]
                    `(let [~processors (eval (mikron/processors* {:schemas ~schemas}))
                           ~dataset    (repeatedly 100 #((:gen ~processors) :x))]
                       ~@(map (fn [method]
                                `(deftest ~(symbol (str (name method) "-" test-name))
                                   (test-mikron ~method ~processors ~dataset)))
                              [:pack :diff :validate :interp]))))
                test-cases))))

(defn pre-inc ^long [^long x]
  (inc x))

(defn post-dec ^long [^long x]
  (dec x))

(def-mikron-tests
  {byte         :byte
   short        :short
   int          :int
   long         :long
   float        :float
   double       :double
   boolean      :boolean
   char         :char
   ubyte        :ubyte
   ushort       :ushort
   uint         :uint
   varint       :varint
   string       :string
   keyword      :keyword
   symbol       :symbol
   nil'         :nil
   date         :date
   binary       :binary
   any          :any
   list         [:list :byte]
   vector       [:vector :int]
   set          [:set :short]
   sorted-set   [:set {:sorted-by :default} :short]
   >-sorted-set [:set {:sorted-by `>} :int]
   map          [:map :byte :string]
   sorted-map   [:map {:sorted-by :default} :byte :string]
   <-sorted-map [:map {:sorted-by `<} :byte :string]
   optional     [:optional :byte]
   enum         [:enum [:cat :dog :measurement :error]]
   tuple        [:tuple [:int :float :double]]
   record       [:record {:a :int :b :string :c :byte}]
   multi        [:multi `number? {true :int false :string}]
   wrapped      [:wrapped `pre-inc `post-dec :int]
   box2d        {:body    [:record {:user-data [:record {:id :int}]
                                    :position  :coord
                                    :angle     :float
                                    :body-type [:enum [:dynamic :static :kinetic]]
                                    :fixtures  [:list :fixture]}]
                 :fixture [:record {:user-data [:record {:color :int}]
                                    :coords    [:list :coord]}]
                 :coord   [:tuple [:float :float]]
                 :x       [:record {:time   :long
                                    :bodies [:list :body]}]}
   media        {:image   [:record  {:uri    :string
                                     :title  [:optional :string]
                                     :width  :varint
                                     :height :varint
                                     :size   [:enum [:small :large]]}]
                 :media   [:record {:uri       :string
                                    :title     [:optional :string]
                                    :width     :varint
                                    :height    :varint
                                    :format    :string
                                    :duration  :long
                                    :size      :long
                                    :bitrate   :int
                                    :persons   [:list :string]
                                    :player    [:enum [:java :flash]]
                                    :copyright [:optional :string]}]
                 :x       [:record {:images [:list :image]
                                    :media  :media}]}})
