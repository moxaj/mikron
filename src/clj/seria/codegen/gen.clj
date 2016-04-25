(ns seria.codegen.gen
  "Generator generating functions."
  (:require [seria.type :as type]
            [seria.util.symbol :as util.symbol]
            [seria.util.schema :as util.schema]
            [seria.util.common :as util.common]))

(def ^:dynamic *options*)

(def gen-size `(+ 2 (rand-int 4)))

(def gen-symbol-char `(rand-nth util.common/symbol-chars))

(defmulti gen util.schema/type-of :hierarchy #'type/hierarchy)

(defmethod gen :byte [_]
  `(util.common/random-integer 1 true))

(defmethod gen :ubyte [_]
  `(util.common/random-integer 1 false))

(defmethod gen :short [_]
  `(util.common/random-integer 2 true))

(defmethod gen :ushort [_]
  `(util.common/random-integer 2 false))

(defmethod gen :int [_]
  `(util.common/random-integer 4 true))

(defmethod gen :uint [_]
  `(util.common/random-integer 4 false))

(defmethod gen :long [_]
  `(util.common/random-integer 8 true))

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
        (repeatedly ~gen-size)
        (apply str)))

(defmethod gen :keyword [_]
  `(->> (fn [] ~gen-symbol-char)
        (repeatedly ~gen-size)
        (apply str)
        (keyword)))

(defmethod gen :symbol [_]
  `(->> (fn [] ~gen-symbol-char)
        (repeatedly ~gen-size)
        (apply str)
        (symbol)))

(defmethod gen :any [_]
  "TODO")

(defmethod gen :nil [_]
  nil)

(defmethod gen :list [[_ _ inner-schema]]
  `(repeatedly ~gen-size (fn [] ~(gen inner-schema))))

(defmethod gen :vector [[_ _ inner-schema]]
  `(vec ~(gen [:list {} inner-schema])))

(defmethod gen :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (gen [:list {} inner-schema])
       (util.schema/as-set sorted-by)))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(->> (repeatedly ~gen-size (fn [] ~[(gen key-schema) (gen val-schema)]))
             (into {}))
       (util.schema/as-map sorted-by)))

(defmethod gen :tuple [[_ _ inner-schemas]]
  (mapv gen inner-schemas))

(defmethod gen :record [schema]
  (let [[_ {:keys [constructor]} record-map] (util.schema/expand-record schema (:schemas *options*))]
    (->> record-map
         (map (fn [[key inner-schema]]
                [key (gen inner-schema)]))
         (into {})
         (util.schema/as-record constructor))))

(defmethod gen :optional [[_ _ inner-schema]]
  `(when ~(gen :boolean)
     ~(gen inner-schema)))

(defmethod gen :multi [[_ _ _ multi-map]]
  `(rand-nth ~(mapv gen (vals multi-map))))

(defmethod gen :enum [[_ _ enum-values]]
  `(rand-nth ~enum-values))

(defmethod gen :custom [schema]
  `(~(util.symbol/processor-name :gen schema)))

(defn make-generator [schema-name {:keys [schemas] :as options}]
  (binding [*options* options]
    `(defn ~(util.symbol/processor-name :gen schema-name)
      []
      ~(gen (schemas schema-name)))))
