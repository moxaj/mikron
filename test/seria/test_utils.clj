(ns seria.test-utils
  (:require [clojure.test :refer :all]
            [seria.core :refer :all]
            [seria.utils :refer :all]
            [seria.analyze :refer :all]
            [seria.test-utils :refer :all]))

(defn roundtrip [data schema config]
  (deserialize (serialize data schema config) config))

(defn equal-after-roundtrip? [data schema config]
  (= data (roundtrip data schema config)))

(defn make-range [bit-count]
  (let [max (long (Math/pow 2 (dec bit-count)))]
    (range (- max) max (/ max 16))))

(def characters (map char (range 0 255)))

(def safe-characters (map char (range 97 123)))

(defn random-boolean []
  (zero? (rand-int 2)))

(defn random-byte []
  (rand-nth (range -128 128)))

(defn random-string [n]
  (->> (fn [] (rand-nth characters))
       (repeatedly n)
       (apply str)))

(defn random-safe-string [n]
  (->> (fn [] (rand-nth safe-characters))
       (repeatedly n)
       (apply str)))

(defn random-byte-seq []
  (take (rand-int 128) (repeatedly random-byte)))

(defmacro schema-test [name config-spec top-schema datas]
  `(deftest ~(symbol name)
     (let [config# (make-config ~config-spec)]
       (testing ~name
         (doseq [data# ~datas]
           (is (equal-after-roundtrip? data# ~top-schema config#)))))))
