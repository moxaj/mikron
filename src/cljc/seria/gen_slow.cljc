(ns seria.gen-slow
  "Random data generation for schemas."
  (:require [seria.type :as type]))

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

(defn random-schema
  ([]
   (random-schema 3))
  ([depth]
   (if (zero? depth)
     (rand-nth [:long :double :varint :char :boolean :string :keyword :symbol])
     (let [[schema-1 schema-2] (repeatedly 2 #(random-schema (dec depth)))]
       (case (rand-int 4)
         0 [:list {} schema-1]
         1 [:set {:sorted-by :none} schema-1]
         2 [:vector {} schema-1]
         3 [:map {:sorted-by :none} schema-1 schema-2])))))

(defmulti gen type/type-of)

(defmethod gen :byte [_]
  (random-integer 1 true))

(defmethod gen :ubyte [_]
  (random-integer 1 false))

(defmethod gen :short [_]
  (random-integer 2 true))

(defmethod gen :ushort [_]
  (random-integer 2 false))

(defmethod gen :int [_]
  (random-integer 4 true))

(defmethod gen :uint [_]
  (random-integer 4 false))

(defmethod gen :long [_]
  (random-integer 8 true))

(defmethod gen :float [_]
  (float (rand)))

(defmethod gen :double [_]
  (double (rand)))

(defmethod gen :char [_]
  (char (gen :ushort)))

(defmethod gen :boolean [_]
  (zero? (rand-int 2)))

(defmethod gen :varint [_]
  (gen :long))

(defmethod gen :string [_]
  (->> #(gen :char)
       (repeatedly (gen-size))
       (apply str)))

(defmethod gen :keyword [_]
  (->> #(gen-symbol-char)
       (repeatedly (gen-size))
       (apply str)
       (keyword)))

(defmethod gen :symbol [_]
  (->> #(gen-symbol-char)
       (repeatedly (gen-size))
       (apply str)
       (symbol)))

(defmethod gen :any [_]
  (gen (random-schema)))

(defmethod gen :nil [_]
  nil)

(defmethod gen :list [[_ _ inner-schema]]
  (->> #(gen inner-schema)
       (repeatedly (gen-size))
       (doall)))

(defmethod gen :vector [[_ _ inner-schema]]
  (->> #(gen inner-schema)
       (repeatedly (gen-size))
       (vec)))

(defmethod gen :set [[_ {:keys [sorted-by]} inner-schema]]
  (into (case sorted-by
          :none    #{}
          :default (sorted-set)
          (sorted-set-by (get-in @(:state (:config *options*)) [:fn-map sorted-by])))
        (repeatedly (gen-size) #(gen inner-schema))))

(defmethod gen :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (let [size (gen-size)]
    (into (case sorted-by
            :none    {}
            :default (sorted-map)
            (sorted-map-by (get-in @(:state (:config *options*)) [:fn-map sorted-by])))
          (zipmap (repeatedly size #(gen key-schema))
                  (repeatedly size #(gen val-schema))))))

(defmethod gen :tuple [[_ _ inner-schemas]]
  (mapv gen inner-schemas))

(defmethod gen :record [[_ {:keys [constructor]} record-map]]
  (let [raw-record (->> (for [[key val-schema] record-map]
                          [key (gen val-schema)])
                        (into {}))]
    (if-not constructor
      raw-record
      ((get-in @(:state (:config *options*)) [:fn-map constructor])
       raw-record))))

(defmethod gen :optional [[_ _ inner-schema]]
  (when (gen :boolean)
    (gen inner-schema)))

(defmethod gen :enum [[_ _ values]]
  (rand-nth values))

(defmethod gen :multi [[_ _ _ multi-map]]
  (gen (rand-nth (vals multi-map))))

(defmethod gen :default [schema]
  (gen ((:schemas (:config *options*)) schema)))

(defn sample [n schema config]
  (binding [*options* {:config config}]
    (doall (repeatedly n #(gen schema)))))

(defn sample-one [schema config]
  (binding [*options* {:config config}]
    (gen schema)))
