(ns mikron.codegen.gen
  "Generator generating functions."
  (:require [mikron.type :as type]
            [mikron.codegen.common :as codegen.common]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.type :as util.type]))

(def gen-size `(+ 3 (long (rand-int 3))))

(defmulti gen compile-util/type-of :hierarchy #'type/hierarchy)

(defmethod gen :byte [_ _]
  `(util.type/gen-integer 1 true))

(defmethod gen :ubyte [_ _]
  `(util.type/gen-integer 1 false))

(defmethod gen :short [_ _]
  `(util.type/gen-integer 2 true))

(defmethod gen :ushort [_ _]
  `(util.type/gen-integer 2 false))

(defmethod gen :int [_ _]
  `(util.type/gen-integer 4 true))

(defmethod gen :uint [_ _]
  `(util.type/gen-integer 4 false))

(defmethod gen :long [_ _]
  `(util.type/gen-integer 8 true))

(defmethod gen :varint [_ options]
  (gen :long options))

(defmethod gen :float [_ _]
  `(util.type/double->float (rand)))

(defmethod gen :double [_ _]
  `(double (rand)))

(defmethod gen :boolean [_ _]
  `(zero? (long (rand-int 2))))

(defmethod gen :char [_ _]
  `(char (rand-int 50000)))

(defmethod gen :string [_ options]
  `(->> (fn [] ~(gen :char options))
        (util/into! [] ~gen-size)
        (apply str)))

(defmethod gen :binary [_ _]
  `(util.type/gen-binary))

(defmethod gen :any [_ _]
  nil)

(defmethod gen :nil [_ _]
  nil)

(defmethod gen :date [_ _]
  `(util.type/gen-date))

(defmethod gen :coll [[_ _ schema'] options]
  `(util/into! [] ~gen-size (fn [] ~(gen schema' options))))

(defmethod gen :set [[_ {:keys [sorted-by]} schema'] options]
  (->> `(util/into! #{} ~gen-size
                        (fn [] ~(gen schema' options)))
       (compile-util/as-set sorted-by)))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema] options]
  (->> `(util/into! {} ~gen-size
                       (fn [] ~(gen key-schema options))
                       (fn [] ~(gen val-schema options)))
       (compile-util/as-map sorted-by)))

(defmethod gen :tuple [[_ _ schemas] options]
  (mapv (fn [schema']
          (gen schema' options))
        schemas))

(defmethod gen :record [[_ {:keys [type]} schemas] options]
  (let [fields (compile-util/record->fields schemas)]
    `(let [~@(mapcat (fn [[index field]]
                       [field (gen (schemas index) options)])
                     fields)]
       ~(compile-util/fields->record fields type))))

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
  `(~(compile-util/processor-name :gen schema)))

(defmethod codegen.common/fast-processors :gen [_ schema-name {:keys [schemas] :as options}]
  [`(~(compile-util/processor-name :gen schema-name)
     []
     ~(gen (schemas schema-name) options))])

(defmethod codegen.common/processors :gen [_ schema-name options]
  (compile-util/with-gensyms [_]
    [`(defmethod util/process [:gen ~schema-name] [~_ ~_]
        (~(compile-util/processor-name :gen schema-name)))]))
