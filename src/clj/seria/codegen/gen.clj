(ns seria.codegen.gen
  "Generator generating functions."
  (:require [seria.type :as type]
            [seria.util.symbol :as util.symbol]
            [seria.util.schema :as util.schema]))

(def ^:dynamic *options*)

(def symbol-chars
  (map char (concat [\_ \- \?]
                    (range 97 123)
                    (range 65 91))))

(defn gen-symbol-char []
  (rand-nth symbol-chars))

(defn gen-size []
  (+ 2 (rand-int 4)))

(defn random-integer [bytes signed?]
  (let [max-value (Math/pow 2 (* bytes 8))
        r         (Math/floor (* max-value (rand)))]
    (long (if-not signed?
            r
            (- r (/ max-value 2))))))

(defmulti gen type/type-of :hierarchy #'type/hierarchy)

(defmethod gen :s/byte [_]
  `(random-integer 1 true))

(defmethod gen :s/ubyte [_]
  `(random-integer 1 false))

(defmethod gen :s/short [_]
  `(random-integer 2 true))

(defmethod gen :s/ushort [_]
  `(random-integer 2 false))

(defmethod gen :s/int [_]
  `(random-integer 4 true))

(defmethod gen :s/uint [_]
  `(random-integer 4 false))

(defmethod gen :s/long [_]
  `(random-integer 8 true))

(defmethod gen :s/float [_]
  `(float (rand)))

(defmethod gen :s/double [_]
  `(double (rand)))

(defmethod gen :s/char [_]
  `(char ~(gen :s/ushort)))

(defmethod gen :s/boolean [_]
  `(zero? (rand-int 2)))

(defmethod gen :s/varint [_]
  (gen :s/long))

(defmethod gen :s/string [_]
  `(->> (fn [] ~(gen :s/char))
        (repeatedly (gen-size))
        (apply str)))

(defmethod gen :s/keyword [_]
  `(->> (fn [] ~(gen-symbol-char))
        (repeatedly (gen-size))
        (apply str)
        (keyword)))

(defmethod gen :s/symbol [_]
  `(->> (fn [] ~(gen-symbol-char))
        (repeatedly (gen-size))
        (apply str)
        (symbol)))

(defmethod gen :s/any [_]
  "TODO")

(defmethod gen :s/nil [_]
  nil)

(defmethod gen :s/list [[_ _ inner-schema]]
  `(repeatedly (gen-size) (fn [] ~(gen inner-schema))))

(defmethod gen :s/vector [[_ _ inner-schema]]
  `(vec ~(gen [:s/list {} inner-schema])))

(defmethod gen :s/set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (gen [:s/list {} inner-schema])
       (util.schema/as-set sorted-by)))

(defmethod gen :s/map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(->> (repeatedly (gen-size) (fn [] ~[(gen key-schema) (gen val-schema)]))
             (into {}))
       (util.schema/as-map sorted-by)))

(defmethod gen :s/tuple [[_ _ inner-schemas]]
  (mapv gen inner-schemas))

(defmethod gen :s/record [schema]
  (let [[_ {:keys [constructor]} record-map] (util.schema/expand-record schema (:schemas *options*))]
    (->> record-map
         (map (fn [[key inner-schema]]
                [key (gen inner-schema)]))
         (into {})
         (util.schema/as-record constructor))))

(defmethod gen :s/optional [[_ _ inner-schema]]
  `(when ~(gen :s/boolean)
     ~(gen inner-schema)))

(defmethod gen :s/multi [[_ _ _ multi-map]]
  `(rand-nth ~(mapv gen (vals multi-map))))

(defmethod gen :s/enum [[_ _ enum-values]]
  `(rand-nth ~enum-values))

(defmethod gen :s/custom [schema]
  `(~(util.symbol/processor-name :gen schema)))

(defn make-generator [schema-name {:keys [schemas] :as options}]
  (binding [*options* options]
    `(~(util.symbol/processor-name :gen schema-name)
      []
      ~(gen (schemas schema-name)))))
