(ns playground
  (:refer-clojure :exclude [doubles])
  (:require [clojure.pprint :as p]
            [clojure.spec :as s]
            [clojure.walk :as walk]
            [criterium.core :as c]
            [mikron.buffer :as buffer]
            [mikron.benchmark.data :as benchmark.data]
            [mikron.benchmark.schema :as benchmark.schema]
            [mikron.core :as mikron :refer [defschema schema pack unpack gen valid? diff undiff interp]]
            [mikron.util :as util]
            [mikron.util.coll :as util.coll]
            [mikron.util.math :as util.math]
            [mikron.compile-util :as compile-util]))


(defmacro c! [& body]
  `(c/with-progress-reporting (c/quick-bench (do ~@body))))

(defmacro p! [expr]
 `(->> (quote ~expr)
       (macroexpand)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)
       (binding [p/*print-suppress-namespaces* true])))

(defmacro p!! [expr]
 `(->> (quote ~expr)
       (walk/macroexpand-all)
       (p/pprint)
       (p/with-pprint-dispatch p/code-dispatch)
       (binding [p/*print-suppress-namespaces* true])))

(defmacro d! [expr]
  `(println (disassemble ~expr)))

(mikron/defschema coord
  [:record {:x :double :y :double}]
  :diff {:x true :y true})

(mikron/defschema fixture
  [:record {:user-data [:record {:color :int}]
            :coords    [:list coord]}]
  :diff {:user-data {:color true}
         :coords    {:all true}})

(mikron/defschema body
  [:record {:user-data [:record {:id :int}]
            :position  coord
            :angle     :double
            :body-type [:enum [:dynamic :static :kinetic]]
            :fixtures  [:list fixture]}]
  :diff {:user-data {:id true}
         :position  true
         :angle     true
         :body-type true
         :fixtures  {:all true}})

(mikron/defschema snapshot
  [:record {:time   :long
            :bodies [:list body]}]
  :diff {:time   true
         :bodies {:all true}})

(s/def :coord/x double?)

(s/def :coord/y double?)

(s/def :box2d/coord (s/keys :req-un [:coord/x :coord/y]))

(s/def :fixture/color int?)

(s/def :fixture/user-data (s/keys :req-un [:fixture/color]))

(s/def :fixture/coords (s/coll-of :box2d/coord))

(s/def :box2d/fixture (s/keys :req-un [:fixture/user-data :fixture/coords]))

(s/def :body/id int?)

(s/def :body/user-data (s/keys :req-un [:body/id]))

(s/def :body/position :box2d/coord)

(s/def :body/angle double?)

(s/def :body/body-type #{:dynamic :static :kinetic})

(s/def :body/fixtures (s/coll-of :box2d/fixture))

(s/def :box2d/body (s/keys :req-un [:body/user-data :body/position :body/angle :body/body-type :body/fixtures]))

(s/def :snapshot/time int?)

(s/def :snapshot/bodies (s/coll-of :box2d/body))

(s/def :box2d/snapshot (s/keys :req-un [:snapshot/time :snapshot/bodies]))
