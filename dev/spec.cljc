(ns spec
  (:require [clojure.spec :as s]
            [clojure.walk :as walk]))

(def ^:dynamic *transformer* :json)

(s/def ::street string?)

(s/def ::street-num int?)

(defmulti transform (fn [type _] [type *transformer*]))

(defmethod transform [::address :json] [_ {street ::street street-num ::street-num :as value}]
  (str street " " street-num))

(defmethod transform [::address :default] [_ value]
  value)

(s/def ::address
  (s/and (s/keys :req [::street ::street-num])
         (s/conformer (fn [value] (transform ::address value)))))

(defn stringify-keys [value]
  (reduce-kv (fn [m k v]
              (assoc m (str k) v))
             {}
             value))

(s/def ::bla
  (s/and (s/keys :req [::address])
         (s/conformer stringify-keys)))

(s/def ::ble
  (s/and (s/keys :req [::bla ::address])
         (s/conformer stringify-keys)))


(s/conform ::ble {::bla {::id 1 ::address {::street "asdf" ::street-num 10}}
                  ::address {::street "asdf" ::street-num 10}})
