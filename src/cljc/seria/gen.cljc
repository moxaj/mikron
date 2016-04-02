(ns seria.gen
  (:require [seria.type :as type]
            [seria.util :as util]
            [seria.gen-slow :as gen-slow]))

(def ^:dynamic *opts*)

(defmulti gen type/type-of)

(defmethod gen :byte [_]
  `(gen-slow/random-integer 1 true))

(defmethod gen :ubyte [_]
  `(gen-slow/random-integer 1 false))

(defmethod gen :short [_]
  `(gen-slow/random-integer 2 true))

(defmethod gen :ushort [_]
  `(gen-slow/random-integer 2 false))

(defmethod gen :int [_]
  `(gen-slow/random-integer 4 true))

(defmethod gen :uint [_]
  `(gen-slow/random-integer 4 false))

(defmethod gen :long [_]
  `(gen-slow/random-integer 8 true))

(defmethod gen :float [_]
  `(float (rand)))

(defmethod gen :double [_]
  `(double (rand)))

(defmethod gen :char [_]
  `(char ~(gen :ushort)))

(defmethod gen :boolean [_]
  `(zero? (rand-int 2)))

(defmethod gen :varint [_]
  (gen :long))

(defmethod gen :string [_]
  `(->> (fn [] ~(gen :char))
        (repeatedly (gen-slow/gen-size))
        (apply str)))

(defmethod gen :keyword [_]
  `(->> (fn [] ~(gen-slow/gen-symbol-char))
        (repeatedly (gen-slow/gen-size))
        (apply str)
        (keyword)))

(defmethod gen :symbol [_]
  `(->> (fn [] ~(gen-slow/gen-symbol-char))
        (repeatedly (gen-slow/gen-size))
        (apply str)
        (symbol)))

(defmethod gen :any [_]
  `(gen-slow/gen (gen-slow/random-schema)))

(defmethod gen :list [[_ _ inner-schema]]
  `(repeatedly (gen-slow/gen-size) (fn [] ~(gen inner-schema))))

(defmethod gen :vector [[_ _ inner-schema]]
  `(vec ~(gen [:list {} inner-schema])))

(defmethod gen :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (gen [:list {} inner-schema])
       (util/as-set sorted-by (:live-config *opts*))))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(->> (repeatedly (gen-slow/gen-size) (fn [] ~[(gen key-schema) (gen val-schema)]))
             (into {}))
       (util/as-map sorted-by (:live-config *opts*))))

(defmethod gen :tuple [[_ _ inner-schemas]]
  (mapv gen inner-schemas))

(defmethod gen :record [schema]
  (let [[_ {:keys [constructor]} record-map]
        (util/expand-record schema (:schemas (:config *opts*)))]
    (->> record-map
         (map (fn [[key inner-schema]]
                [key (gen inner-schema)]))
         (into {})
         (util/as-record constructor (:live-config *opts*)))))

(defmethod gen :optional [[_ _ inner-schema]]
  `(when ~(gen :boolean)
     ~(gen inner-schema)))

(defmethod gen :multi [[_ _ _ multi-map]]
  `(rand-nth ~(mapv gen (vals multi-map))))

(defmethod gen :enum [[_ _ enum-values]]
  `(rand-nth ~enum-values))

(defmethod gen :custom [schema]
  (let [live-config (:live-config *opts*)]
    `(~(util/runtime-processor schema :generator live-config) ~live-config)))

(defn make-generator [schema config]
  (let [live-config (gensym "config_")]
    (binding [*opts* {:config config :live-config live-config}]
      `(fn [~live-config]
         ~(gen schema)))))
