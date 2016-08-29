(ns mikron.codegen.gen
  "Generator generating functions."
  (:require [mikron.type :as type]
            [mikron.util :as util]
            [mikron.common :as common]))

(def gen-size `(+ 3 (long (rand-int 3))))

(defmulti gen util/type-of :hierarchy #'type/hierarchy)

(defmethod gen :byte [_ _]
  `(common/gen-integer 1 true))

(defmethod gen :ubyte [_ _]
  `(common/gen-integer 1 false))

(defmethod gen :short [_ _]
  `(common/gen-integer 2 true))

(defmethod gen :ushort [_ _]
  `(common/gen-integer 2 false))

(defmethod gen :int [_ _]
  `(common/gen-integer 4 true))

(defmethod gen :uint [_ _]
  `(common/gen-integer 4 false))

(defmethod gen :long [_ _]
  `(common/gen-integer 8 true))

(defmethod gen :varint [_ options]
  (gen :long options))

(defmethod gen :float [_ _]
  `(float (rand)))

(defmethod gen :double [_ _]
  `(double (rand)))

(defmethod gen :boolean [_ _]
  `(zero? (long (rand-int 2))))

(defmethod gen :char [_ _]
  `(char (rand-int 50000)))

(defmethod gen :string [_ options]
  `(->> (fn [] ~(gen :char options))
        (common/repeatedly! [] ~gen-size)
        (apply str)))

(defmethod gen :binary [_ _]
  `(common/gen-binary))

(defmethod gen :any [_ _]
  nil)

(defmethod gen :nil [_ _]
  nil)

(defmethod gen :date [_ _]
  `(common/gen-date))

(defmethod gen :coll [[_ _ schema'] options]
  `(common/repeatedly! [] ~gen-size (fn [] ~(gen schema' options))))

(defmethod gen :set [[_ {:keys [sorted-by]} schema'] options]
  (->> `(common/repeatedly! #{}
                            ~gen-size
                            (fn [] ~(gen schema' options)))
       (util/as-set sorted-by)))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema] options]
  (->> `(common/repeatedly! {}
                            ~gen-size
                            (fn [] ~(gen key-schema options))
                            (fn [] ~(gen val-schema options)))
       (util/as-map sorted-by)))

(defmethod gen :tuple [[_ _ schemas] options]
  (mapv (fn [schema']
          (gen schema' options))
        schemas))

(defmethod gen :record [[_ {:keys [constructor]} schemas] options]
  (->> schemas
       (map (fn [[key schema']]
              [key (gen schema' options)]))
       (into {})
       (util/as-record constructor)))

(defmethod gen :optional [[_ _ schema'] options]
  `(when ~(gen :boolean options)
     ~(gen schema' options)))

(defmethod gen :multi [[_ _ _ multi-map] options]
  `(case (rand-nth ~(-> multi-map (keys) (vec)))
     ~@(mapcat (fn [[multi-case schema']]
                [multi-case (gen schema' options)])
               multi-map)))

(defmethod gen :enum [[_ _ enum-values] options]
  `(rand-nth ~enum-values))

(defmethod gen :wrapped [[_ _ _ post schema'] options]
  `(~post ~(gen schema' options)))

(defmethod gen :aliased [schema options]
  (gen (type/aliases schema) options))

(defmethod gen :custom [schema options]
  `(~(util/processor-name :gen schema)))

(defmethod util/local-processor* :gen [_ schema-name {:keys [schemas] :as options}]
  `([]
    ~(gen (schemas schema-name) options)))

(defmethod util/global-processor* :gen [_ {:keys [schemas]}]
  (util/with-gensyms [schema]
    `([~schema]
      (~(util/processor-name :gen schema (keys schemas))))))
