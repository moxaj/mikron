(ns mikron.runtime.buffer-tests
  (:require [clojure.test :as test]
            [clojure.test.check.generators :as tc.gen #?@(:cljs [:include-macros true])]
            [com.gfredericks.test.chuck.clojure-test :as chuck #?@(:cljs [:include-macros true])]
            [mikron.test-util :as test-util]
            [mikron.runtime.buffer :as buffer]
            [mikron.runtime.math :as math]
            [mikron.runtime.processor.common :as processor.common]))

(defn bounds [bytes signed?]
  {:min (math/lower-bound bytes signed?)
   :max (dec (math/upper-bound bytes signed?))})

(def processors
  {:byte    {:packer    buffer/put-byte
             :unpacker  buffer/take-byte
             :generator (tc.gen/large-integer* (bounds 1 true))}
   :short   {:packer    buffer/put-short
             :unpacker  buffer/take-short
             :generator (tc.gen/large-integer* (bounds 2 true))}
   :int     {:packer    buffer/put-int
             :unpacker  buffer/take-int
             :generator (tc.gen/large-integer* (bounds 4 true))}
   :long    {:packer    buffer/put-long
             :unpacker  buffer/take-long
             :generator (tc.gen/large-integer* (bounds 8 true))}
   :ubyte   {:packer    buffer/put-ubyte
             :unpacker  buffer/take-ubyte
             :generator (tc.gen/large-integer* (bounds 1 false))}
   :ushort  {:packer    buffer/put-ushort
             :unpacker  buffer/take-ushort
             :generator (tc.gen/large-integer* (bounds 2 false))}
   :uint    {:packer    buffer/put-uint
             :unpacker  buffer/take-uint
             :generator (tc.gen/large-integer* (bounds 4 false))}
   :varint  {:packer    buffer/put-varint
             :unpacker  buffer/take-varint
             :generator (tc.gen/large-integer* (bounds 8 false))}
   #?@(:clj
       [:float {:packer    buffer/put-float
                :unpacker  buffer/take-float
                :generator (tc.gen/fmap unchecked-float (tc.gen/double* {:infinite? true :NaN? false}))}])
   :double  {:packer    buffer/put-double
             :unpacker  buffer/take-double
             :generator (tc.gen/double* {:infinite? true :NaN? false})}
   :boolean {:packer    buffer/put-boolean
             :unpacker  buffer/take-boolean
             :generator tc.gen/boolean}
   :binary  {:packer    buffer/put-binary
             :unpacker  buffer/take-binary
             :generator (tc.gen/fmap processor.common/byte-seq->binary
                                     (tc.gen/vector (tc.gen/large-integer* (bounds 1 true))))}})

(test/deftest buffer-test
  (chuck/checking "Low-level buffer operations work correctly" 500
    [schemas (tc.gen/vector (tc.gen/elements (keys processors)) 1 100)
     values  (apply tc.gen/tuple (map (comp :generator processors) schemas))]
    (let [buffer (buffer/allocate 10000)]
      (doall (map (fn [schema-name value]
                    ((:packer (processors schema-name)) buffer value))
                  schemas
                  values))
      (buffer/finalize buffer)
      (buffer/reset buffer)
      (let [values' (map (fn [schema-name]
                           ((:unpacker (processors schema-name)) buffer))
                         schemas)]
        (test/is (every? (fn [[value value']]
                           (test-util/equal? value value'))
                         (map vector values values')))))))
