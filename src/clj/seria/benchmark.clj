(ns seria.benchmark
  (:require [criterium.core :refer [with-progress-reporting quick-bench]]
            [seria.core :refer [pack unpack with-params allocate-buffer]]
            [seria.config :refer [make-config make-test-config]]
            [seria.gen :refer [sample]]
            [taoensso.nippy :refer [freeze thaw]])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream
                    ObjectInputStream ObjectOutputStream]))

(defn java-serialize [data]
  (let [baos (ByteArrayOutputStream.)
        oos  (ObjectOutputStream. baos)]
    (.writeObject oos data)
    (.close oos)
    (.toByteArray baos)))

(defn java-deserialize [^bytes bytes]
  (let [bais (ByteArrayInputStream. bytes)
        ois  (ObjectInputStream. bais)
        data (.readObject ois)]
    (.close ois)
    data))

(def box2d-schemas
  {:body     [:record {:user-data [:record {:id :int}]
                       :position  :coord
                       :angle     :float
                       :body-type [:enum [:dynamic :static :kinetic]]
                       :fixtures  [:list :fixture]}]
   :fixture  [:record {:user-data [:record {:color :int}]
                       :coords    [:list :coord]}]
   :coord    [:tuple [:float :float]]
   :snapshot [:record {:time   :int
                       :bodies [:list :body]}]})

(def seria-config (make-test-config :schemas box2d-schemas))

(let [config (make-test-config :schemas {:snapshot [:list :int]})
      data   (repeat 1000 42)]
  (with-params {:config config
                :schema :snapshot
                :buffer (allocate-buffer 100000 100000)}
    (with-progress-reporting
      (quick-bench (freeze data)))))
