(ns user
  (:require [clojure.tools.namespace.repl :as repl]))

(defn init []
  nil)

(defn start []
  nil)

(defn stop []
  nil)

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (repl/refresh :after 'user/go))

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)
