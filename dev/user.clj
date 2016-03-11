(ns user
  (:require [clojure.tools.namespace.repl :refer [refresh]]))

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
  (refresh :after 'user/go))
