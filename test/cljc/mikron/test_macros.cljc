(ns mikron.test-macros
  "Unit tests for each processor."
  (:require [clojure.test :as test]
            [mikron.core :as mikron]
            [mikron.compile-util :as compile-util])
  #?(:clj  (:import [java.util Arrays]))
  #?(:cljs (:require-macros [mikron.test-macros])))

(defn equal?
  "Extended equality checker for byte[] and ArrayBuffer."
  [x y]
  (if (not= (type x) #?(:clj  (Class/forName "[B")
                        :cljs js/ArrayBuffer))
    (= x y)
    #?(:clj  (Arrays/equals ^bytes x ^bytes y)
       :cljs (= (seq (.from js/Array (js/Int8Array. x)))
                (seq (.from js/Array (js/Int8Array. y)))))))

(defmulti test-mikron
  "Test function for :pack, :diff, :valid? and :interp processors."
  (fn [method schema dataset] method))

(defmethod test-mikron :pack [_ schema dataset]
  (doseq [value dataset]
    (test/is (equal? value (->> value (mikron/pack schema) (mikron/unpack schema))))))

(defmethod test-mikron :diff [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (test/is (= value-2 (->> value-2 (mikron/diff schema value-1) (mikron/undiff schema value-1))))))

(defmethod test-mikron :valid? [_ schema dataset]
  (doseq [value dataset]
    (test/is (mikron/valid? schema value))))

(defmethod test-mikron :interp [_ schema dataset]
  (doseq [[value-1 value-2] (partition 2 dataset)]
    (mikron/interp schema value-1 value-2 0 1 0.5)))

(defmacro def-mikron-tests
  "Generates test methods for all the test cases."
  [test-cases]
  (compile-util/with-gensyms [dataset]
    `(do ~@(for [[schema-name schema] test-cases]
             `(let [~schema-name (mikron/schema ~schema)
                    ~dataset     (repeatedly 100 #(mikron/gen ~schema-name))]
                ~@(for [method (keys (methods test-mikron))]
                    `(test/deftest ~(symbol (str (name method) "-" (name schema-name)))
                       (test-mikron ~method ~schema-name ~dataset))))))))
