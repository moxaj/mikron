(ns mikron.runtime.processor.gen
  (:require [mikron.runtime.processor.gen-macros :refer [gen-integer]]))

(defn gen-byte []
  "Generates a byte."
  (gen-integer 1 true))

(defn gen-ubyte []
  "Generates a ubyte."
  (gen-integer 1 false))

(defn gen-short []
  "Generates a short."
  (gen-integer 2 true))

(defn gen-ushort []
  "Generates a ushort."
  (gen-integer 2 false))

(defn gen-int []
  "Generates an int."
  (gen-integer 4 true))

(defn gen-uint []
  "Generates a uint."
  (gen-integer 4 false))

(defn gen-long []
  "Generates a long."
  (gen-integer 8 true))
