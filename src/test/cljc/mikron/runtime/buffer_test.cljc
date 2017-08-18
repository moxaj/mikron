(ns mikron.runtime.buffer-test
  (:require [clojure.test :as test]
            [clojure.test.check.clojure-test :as tc.test #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties :as tc.prop #?@(:cljs [:include-macros true])]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [mikron.runtime.buffer :as buffer]
            [mikron.runtime.test-generators :as test-generators]
            [mikron.runtime.test-util :as test-util]))


(def processors
  {:byte    {:packer    buffer/put-byte
             :unpacker  buffer/take-byte
             :generator (test-generators/value-generator [:byte])}
   :short   {:packer    buffer/put-short
             :unpacker  buffer/take-short
             :generator (test-generators/value-generator [:short])}
   :int     {:packer    buffer/put-int
             :unpacker  buffer/take-int
             :generator (test-generators/value-generator [:int])}
   :long    {:packer    buffer/put-long
             :unpacker  buffer/take-long
             :generator (test-generators/value-generator [:long])}
   :ubyte   {:packer    buffer/put-ubyte
             :unpacker  buffer/take-ubyte
             :generator (test-generators/value-generator [:ubyte])}
   :ushort  {:packer    buffer/put-ushort
             :unpacker  buffer/take-ushort
             :generator (test-generators/value-generator [:ushort])}
   :uint    {:packer    buffer/put-uint
             :unpacker  buffer/take-uint
             :generator (test-generators/value-generator [:uint])}
   :varint  {:packer    buffer/put-varint
             :unpacker  buffer/take-varint
             :generator (test-generators/value-generator [:varint])}
   #?@(:clj
       [:float {:packer    buffer/put-float
                :unpacker  buffer/take-float
                :generator (test-generators/value-generator [:float])}])
   :double  {:packer    buffer/put-double
             :unpacker  buffer/take-double
             :generator (test-generators/value-generator [:double])}
   :boolean {:packer    buffer/put-boolean
             :unpacker  buffer/take-boolean
             :generator (test-generators/value-generator [:boolean])}
   :binary  {:packer    buffer/put-binary
             :unpacker  buffer/take-binary
             :generator (test-generators/value-generator [:binary])}})

(tc.test/defspec buffer-test 100
  (tc.prop/for-all
    [[schemas values]
     (tc.gen/bind (tc.gen/vector (tc.gen/elements (keys processors)) 1 1000)
                  (fn [schemas]
                    (tc.gen/tuple (tc.gen/return schemas)
                                  (apply tc.gen/tuple (map (comp :generator processors) schemas)))))]
    (let [buffer (buffer/allocate 100000)]
      (doall (map (fn [schema-name value]
                    ((:packer (processors schema-name)) buffer value))
                  schemas
                  values))
      (buffer/finalize buffer)
      (buffer/reset buffer)
      (test-util/equal? values
                        (mapv (fn [schema-name]
                                ((:unpacker (processors schema-name)) buffer))
                              schemas)))))
