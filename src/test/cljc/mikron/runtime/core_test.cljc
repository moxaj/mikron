(ns mikron.runtime.core-test
  "Generative testing namespace."
  (:require [clojure.test :as test]
            [mikron.test-util :as test-util]
            [mikron.runtime.core :as mikron]
            [mikron.runtime.core-test-macro :refer [compile-schemas]]))
            
(def buffer (mikron/allocate-buffer 100000))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema values] method))

(defmethod test-mikron :pack [_ schema values]
  (mikron/with-buffer buffer
    (doseq [value values]
      (test/is (test-util/equal? value (->> value
                                            (mikron/pack schema)
                                            (mikron/unpack schema)))))))

(defmethod test-mikron :diff [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    (test/is (test-util/equal? value-2 (->> value-2
                                            (mikron/diff schema value-1)
                                            (mikron/undiff schema value-1))))))

(defmethod test-mikron :valid? [_ schema values]
  (doseq [value values]
    (test/is (mikron/valid? schema value))))

(defmethod test-mikron :interp [_ schema values]
  (doseq [[value-1 value-2] (partition 2 values)]
    ;; We don't actually test anything here
    (test/is (any? (mikron/interp schema value-1 value-2 0 1 0.5)))))

(test/deftest core-test-generative
  (doseq [[test-name schema]
          (compile-schemas
            {"Byte test"     :byte
             "Short test"    :short
             "Int test"      :int
             "Long test"     :long
             #?@(:clj ["Float test" :float])
             "Double test"   :double
             "Boolean test"  :boolean
             "Char test"     :char
             "Ubyte test"    :ubyte
             "Ushort test"   :ushort
             "Uint test"     :uint
             "Varint test"   :varint
             "String test"   :string
             "Keyword test"  :keyword
             "Symbol test"   :symbol
             "Nil test"      :nil
             "Binary test"   :binary
             "Any test"      :any
             "List test"     [:list :byte]
             "Vector test"   [:vector :int]
             "Set test"      [:set :short]
             "Set < test"    [:set {:sorted-by '<} :short]
             "Set > test"    [:set {:sorted-by '>} :int]
             "Map test"      [:map :byte :string]
             "Map < test"    [:map {:sorted-by '<} :byte :string]
             "Map > test"    [:map {:sorted-by '>} :byte :string]
             "Optional test" [:optional :byte]
             "Enum test"     [:enum #{:cat :dog :measurement :error}]
             "Tuple test"    [:tuple [:int :string :double]]
             "Record test"   [:record {:a :int :b :string :c :byte}]
             "Multi test"    [:multi 'number? {true :int false :string}]
             "Wrapped test"  [:wrapped 'unchecked-inc-int 'unchecked-dec-int :int]})]
    (let [values (repeatedly 100 #(mikron/gen schema))]
      (test/testing test-name
        (doseq [test-method (keys (methods test-mikron))]
          (test-mikron test-method schema values)))))
  (test/testing "Self-referential test"
    (let [schema (mikron/schema ::s [:tuple [:byte [:optional ::s]]])
          values (repeatedly 100 #(mikron/gen schema))]
      (doseq [test-method (keys (methods test-mikron))]
        (test-mikron test-method schema values)))))
