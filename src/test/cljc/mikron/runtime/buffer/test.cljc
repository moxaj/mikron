(ns mikron.runtime.buffer.test
  (:require [clojure.test :as test]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [com.gfredericks.test.chuck.clojure-test :as chuck #?@(:cljs [:include-macros true])]
            [mikron.runtime.buffer :as buffer]
            [mikron.runtime.generators :as generators]
            [mikron.test-util :as test-util]))

(def processors
  {:byte    {:packer    buffer/put-byte
             :unpacker  buffer/take-byte
             :generator (generators/value-generator [:byte])}
   :short   {:packer    buffer/put-short
             :unpacker  buffer/take-short
             :generator (generators/value-generator [:short])}
   :int     {:packer    buffer/put-int
             :unpacker  buffer/take-int
             :generator (generators/value-generator [:int])}
   :long    {:packer    buffer/put-long
             :unpacker  buffer/take-long
             :generator (generators/value-generator [:long])}
   :ubyte   {:packer    buffer/put-ubyte
             :unpacker  buffer/take-ubyte
             :generator (generators/value-generator [:ubyte])}
   :ushort  {:packer    buffer/put-ushort
             :unpacker  buffer/take-ushort
             :generator (generators/value-generator [:ushort])}
   :uint    {:packer    buffer/put-uint
             :unpacker  buffer/take-uint
             :generator (generators/value-generator [:uint])}
   :varint  {:packer    buffer/put-varint
             :unpacker  buffer/take-varint
             :generator (generators/value-generator [:varint])}
   #?@(:clj
       [:float {:packer    buffer/put-float
                :unpacker  buffer/take-float
                :generator (generators/value-generator [:float])}])
   :double  {:packer    buffer/put-double
             :unpacker  buffer/take-double
             :generator (generators/value-generator [:double])}
   :boolean {:packer    buffer/put-boolean
             :unpacker  buffer/take-boolean
             :generator (generators/value-generator [:boolean])}
   :binary  {:packer    buffer/put-binary
             :unpacker  buffer/take-binary
             :generator (generators/value-generator [:binary])}})

(test/deftest buffer-test
  (chuck/checking "Low-level buffer operations work correctly" 100
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
      (test/is (test-util/equal? values
                                 (map (fn [schema-name]
                                        ((:unpacker (processors schema-name)) buffer))
                                      schemas))))))
