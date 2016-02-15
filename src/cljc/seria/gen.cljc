(ns seria.gen
  (:require [seria.spec :refer [primitive? advanced? composite? custom?]]
            [seria.util :refer [resolve-schema]]))

(def ^:dynamic *config*)

(def symbol-chars
  (map char (concat [\_ \- \? \\]
                    (range 97 123)
                    (range 65 91))))

(defn gen-symbol-char []
  (rand-nth symbol-chars))

(defn gen-small-size []
  (rand-nth (range 1 5)))

(defn gen-big-size []
  (rand-nth (range 256 300)))

(defn gen-size [size-type]
  (case size-type
    :ubyte (gen-small-size)
    :ushort (gen-big-size)))

(defn gen-dispatch [schema]
  (cond
    (primitive? schema) :primitive
    (advanced? schema)  schema
    (composite? schema) (first schema)
    (custom? schema)    :custom))

(defmulti gen gen-dispatch)

(defmethod gen :primitive [schema]
  (case schema
    :byte    (- (rand-int 256) 128)
    :ubyte   (rand-int 256)
    :short   (- (rand-int 65536) 32768)
    :ushort  (rand-int 65536)
    :int     (rand-int 2147483648)
    :uint    (long (* 4294967296 (rand)))
    :long    (long (* Long/MAX_VALUE (rand)))
    :float   (float (rand))
    :double  (double (rand))
    :char    (char (rand-int 65536))
    :boolean (zero? (rand-int 2))))

(defmethod gen :string [_]
  (->> #(gen :char)
       (repeatedly (gen-small-size))
       (apply str)))

(defmethod gen :keyword [_]
  (->> #(gen-symbol-char)
       (repeatedly (gen-small-size))
       (apply str)
       (keyword)))

(defmethod gen :symbol [_]
  (->> #(gen-symbol-char)
       (repeatedly (gen-small-size))
       (apply str)
       (symbol)))

(defmethod gen :any [_]
  "Not yet implemented")

(defmethod gen :list [[_ {:keys [size]} inner-schema]]
  (doall (repeatedly (gen-size size) #(gen inner-schema))))

(defmethod gen :vector [[_ {:keys [size]} inner-schema]]
  (vec (repeatedly (gen-size size) #(gen inner-schema))))

(defmethod gen :set [[_ {:keys [size sorted-by]} inner-schema]]
  (into (case sorted-by
          :none #{}
          :default (sorted-set)
          (sorted-set-by (get-in @(:state *config*) [:fn-map sorted-by])))
        (repeatedly (gen-size size) #(gen inner-schema))))

(defmethod gen :map [[_ {:keys [size sorted-by]} key-schema val-schema]]
  (let [size-value (gen-size size)]
    (into (case sorted-by
            :none {}
            :default (sorted-map)
            (sorted-map-by (get-in @(:state *config*) [:fn-map sorted-by])))
          (zipmap (repeatedly size-value #(gen key-schema))
                  (repeatedly size-value #(gen val-schema))))))

(defmethod gen :tuple [[_ _ inner-schemas]]
  (mapv gen inner-schemas))

(defmethod gen :record [[_ _ record-map]]
  (into {} (for [[key val-schema] record-map]
             [key (gen val-schema)])))

(defmethod gen :optional [[_ _ inner-schema]]
  (when (gen :boolean)
    (gen inner-schema)))

(defmethod gen :enum [[_ _ values]]
  (rand-nth values))

(defmethod gen :multi [[_ _ _ multi-map]]
  (gen (rand-nth (vals multi-map))))

(defmethod gen :custom [schema]
  (gen (resolve-schema schema (:schemas *config*))))

(defn sample [n schema config]
  (binding [*config* config]
    (doall (repeatedly n #(gen schema)))))