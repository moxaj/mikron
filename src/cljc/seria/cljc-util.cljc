(ns seria.cljc-util
  "Cross-platform utility functions."
   #?(:cljs (:require [cljs.reader :as reader])))

(defn cljc-exception [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

(defn cljc-read-string [^String s]
  #?(:clj  (read-string s)
     :cljs (reader/read-string s)))

(defn cljc-abs [^double n]
  #?(:clj  (Math/abs n)
     :cljs (.abs js/Math n)))

(defn cljc-round [^double n]
  #?(:clj  (Math/round n)
     :cljs (.round js/Math n)))
