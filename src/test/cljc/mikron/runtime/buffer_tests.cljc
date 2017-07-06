(ns mikron.runtime.buffer-tests
  (:require [clojure.test.check.generators :as tc.gen]
            [clojure.test.check.properties :as tc.prop #?@(:cljs [:include-macros true])]
            [clojure.test.check.clojure-test :as tc.test #?@(:cljs [:include-macros true])]
            [mikron.runtime.core :as runtime.core]
            [mikron.runtime.buffer :as runtime.buffer]))

(def schemas
  {:byte    (runtime.core/schema :byte    :processor-types #{:gen})
   :short   (runtime.core/schema :short   :processor-types #{:gen})
   :int     (runtime.core/schema :int     :processor-types #{:gen})
   :long    (runtime.core/schema :long    :processor-types #{:gen})
   :float   (runtime.core/schema :float   :processor-types #{:gen})
   :double  (runtime.core/schema :double  :processor-types #{:gen})
   :ubyte   (runtime.core/schema :ubyte   :processor-types #{:gen})
   :ushort  (runtime.core/schema :ushort  :processor-types #{:gen})
   :uint    (runtime.core/schema :uint    :processor-types #{:gen})
   :varint  (runtime.core/schema :varint  :processor-types #{:gen})
   :boolean (runtime.core/schema :boolean :processor-types #{:gen})})

(def packers
  {:byte    [runtime.buffer/put-byte    runtime.buffer/take-byte]
   :short   [runtime.buffer/put-short   runtime.buffer/take-short]
   :int     [runtime.buffer/put-int     runtime.buffer/take-int]
   :long    [runtime.buffer/put-long    runtime.buffer/take-long]
   :float   [runtime.buffer/put-float   runtime.buffer/take-float]
   :double  [runtime.buffer/put-double  runtime.buffer/take-double]
   :ubyte   [runtime.buffer/put-ubyte   runtime.buffer/take-ubyte]
   :ushort  [runtime.buffer/put-ushort  runtime.buffer/take-ushort]
   :uint    [runtime.buffer/put-uint    runtime.buffer/take-uint]
   :varint  [runtime.buffer/put-varint  runtime.buffer/take-varint]
   :boolean [runtime.buffer/put-boolean runtime.buffer/take-boolean]})

(defn pack [schema buffer value]
  (let [[packer _] (packers schema)]
    (packer buffer value)))

(defn unpack [schema buffer]
  (let [[_ packer] (packers schema)]
    (packer buffer)))

(tc.test/defspec buffer-prop-test 500
  (tc.prop/for-all [schema-names (tc.gen/vector (tc.gen/elements (keys schemas)) 20 500)]
    (let [n      (count schema-names)
          values (mapv (comp runtime.core/gen schemas) schema-names)
          buffer (runtime.buffer/allocate 10000)]
      (run! (fn [index]
              (pack (schema-names index) buffer (values index)))
            (range n))
      (runtime.buffer/finalize buffer)
      (runtime.buffer/reset buffer)
      (let [values' (mapv (fn [index]
                            (unpack (schema-names index) buffer))
                          (range n))]
        (= values values')))))
