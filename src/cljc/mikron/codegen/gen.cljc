(ns mikron.codegen.gen
  "Generator generating functions."
  (:require [mikron.schema :as schema]
            [mikron.compile-util :as compile-util]
            [mikron.util :as util]
            [mikron.util.schema :as util.schema]
            [mikron.util.coll :as util.coll]
            [mikron.util.math :as util.math]))

(def ^:const gen-length 4)

(defmulti gen compile-util/type-of :hierarchy #'schema/hierarchy)

(defmethod gen :byte [_ _]
  `(util.schema/gen-integer 1 true))

(defmethod gen :ubyte [_ _]
  `(util.schema/gen-integer 1 false))

(defmethod gen :short [_ _]
  `(util.schema/gen-integer 2 true))

(defmethod gen :ushort [_ _]
  `(util.schema/gen-integer 2 false))

(defmethod gen :int [_ _]
  `(util.schema/gen-integer 4 true))

(defmethod gen :uint [_ _]
  `(util.schema/gen-integer 4 false))

(defmethod gen :long [_ _]
  `(util.schema/gen-integer 8 true))

(defmethod gen :varint [_ env]
  (gen [:long] env))

(defmethod gen :float [_ _]
  `(util.schema/double->float (util.math/rand)))

(defmethod gen :double [_ _]
  `(util.math/rand))

(defmethod gen :boolean [_ _]
  `(< 0.5 (util.math/rand)))

(defmethod gen :char [_ _]
  `(char (util.math/rand-long 500)))

(defmethod gen :string [_ env]
  `(apply str (util.coll/into! [] true ~gen-length ~(gen [:char] env))))

(defmethod gen :binary [_ _]
  `(util.schema/gen-binary))

(defmethod gen :any [_ _]
  nil)

(defmethod gen :nil [_ _]
  nil)

(defmethod gen :coll [[_ _ schema'] env]
  `(util.coll/into! [] true ~gen-length ~(gen schema' env)))

(defmethod gen :set [[_ {:keys [sorted-by]} schema'] env]
  `(util.coll/into! ~(if sorted-by `(sorted-set-by ~sorted-by) #{})
                    ~(nil? sorted-by)
                    ~gen-length
                    ~(gen schema' env)))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema value-schema] env]
  `(util.coll/into-kv! ~(if sorted-by `(sorted-map-by ~sorted-by) {})
                       ~(nil? sorted-by)
                       ~gen-length
                       ~(gen key-schema env)
                       ~(gen value-schema env)))

(defmethod gen :tuple [[_ _ schemas] env]
  (let [fields (compile-util/tuple->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (gen (schemas key') env)])
                     fields)]
       ~(compile-util/fields->tuple fields))))

(defmethod gen :record [[_ {:keys [type]} schemas] env]
  (let [fields (compile-util/record->fields schemas)]
    `(let [~@(mapcat (fn [[key' value']]
                       [value' (gen (schemas key') env)])
                     fields)]
       ~(compile-util/fields->record fields type))))

(defmethod gen :optional [[_ _ schema'] env]
  `(when ~(gen [:boolean] env)
     ~(gen schema' env)))

(defmethod gen :multi [[_ _ _ multi-map] env]
  `(case (util.math/rand-long ~(count multi-map))
     ~@(->> multi-map
            (map-indexed (fn [index [_ schema']]
                           [index (gen schema' env)]))
            (apply concat))))

(defmethod gen :enum [[_ _ enum-values] env]
  `(util.coll/rand-nth ~enum-values))

(defmethod gen :wrapped [[_ _ _ post schema'] env]
  `(~post ~(gen schema' env)))

(defmethod gen :aliased [[schema'] env]
  (gen (schema/aliases schema') env))

(defmethod gen :custom [schema env]
  `(~(compile-util/processor-name :gen schema)))

(defmethod compile-util/processor :gen [_ {:keys [schema] :as env}]
  `([]
    ~(gen schema env)))
