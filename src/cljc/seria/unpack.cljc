(ns seria.unpack
  "Unpacker generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.type :as type]))

(def ^:dynamic *opts*)

(defmulti unpack type/type-of :default :custom)

(defn as-undiffable [body]
  (if-not (:diffed? *opts*)
    body
    `(if ~(unpack :boolean)
       :seria/dnil
       ~body)))

(defmethod unpack :byte [_]
  `(buffer/read-byte! ~(:buffer *opts*)))

(defmethod unpack :ubyte [_]
  `(buffer/read-ubyte! ~(:buffer *opts*)))

(defmethod unpack :short [_]
  `(buffer/read-short! ~(:buffer *opts*)))

(defmethod unpack :ushort [_]
  `(buffer/read-ushort! ~(:buffer *opts*)))

(defmethod unpack :int [_]
  `(buffer/read-int! ~(:buffer *opts*)))

(defmethod unpack :uint [_]
  `(buffer/read-uint! ~(:buffer *opts*)))

(defmethod unpack :long [_]
  `(buffer/read-long! ~(:buffer *opts*)))

(defmethod unpack :float [_]
  `(buffer/read-float! ~(:buffer *opts*)))

(defmethod unpack :double [_]
  `(buffer/read-double! ~(:buffer *opts*)))

(defmethod unpack :char [_]
  `(buffer/read-char! ~(:buffer *opts*)))

(defmethod unpack :boolean [_]
  `(buffer/read-boolean! ~(:buffer *opts*)))

(defmethod unpack :varint [_]
  `(buffer/read-varint! ~(:buffer *opts*)))

(defmethod unpack :string [_]
  `(apply str (repeatedly ~(unpack :varint)
                          (fn [] ~(unpack :char)))))

(defmethod unpack :keyword [_]
  `(keyword ~(unpack :string)))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod unpack :any [_]
  `(util/cljc-read-string ~(unpack :string)))

(defmethod unpack :nil [_]
  nil)

(defmethod unpack :list [[_ _ inner-schema]]
  `(doall (repeatedly ~(unpack :varint)
                      (fn [] ~(as-undiffable (unpack inner-schema))))))

(defmethod unpack :vector [[_ _ inner-schema]]
  `(vec ~(unpack [:list {} inner-schema])))

(defmethod unpack :set [[_ {:keys [sorted-by]} inner-schema]]
  (->> (unpack [:list {} inner-schema])
       (util/as-set sorted-by (:runtime-config *opts*))))

(defmethod unpack :map [[_ {:keys [sorted-by]} key-schema val-schema]]
  (->> `(repeatedly ~(unpack :varint)
                    (fn [] [~(unpack key-schema)
                            ~(as-undiffable (unpack val-schema))]))
       (util/as-map sorted-by (:runtime-config *opts*))))

(defmethod unpack :tuple [[_ _ inner-schemas]]
  (vec (map-indexed (fn [index inner-schema]
                      (as-undiffable (unpack inner-schema)))
                    inner-schemas)))

(defmethod unpack :record [schema]
  (let [[_ {:keys [constructor]} record-map] (util/expand-record schema (:schemas (:config *opts*)))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (as-undiffable (unpack (record-map key)))]))
         (into {})
         (util/as-record constructor (:runtime-config *opts*)))))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(unpack inner-schema)))

(defmethod unpack :multi [[_ _ _ arg-map]]
  `(case (get ~(:multi-map (:config *opts*)) ~(unpack :varint))
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case (unpack inner-schema)])
               arg-map)))

(defmethod unpack :enum [_]
  `(~(:enum-map (:config *opts*)) ~(unpack :varint)))

(defmethod unpack :custom [schema]
  (let [{:keys [runtime-config buffer]} *opts*]
    `(~(util/runtime-processor schema :unpack runtime-config)
      ~buffer ~runtime-config)))

(defn make-unpacker [schema config diffed?]
  (let [buffer         (gensym "buffer_")
        runtime-config (gensym "config_")]
    (binding [*opts* {:config         config
                      :diffed?        diffed?
                      :runtime-config runtime-config
                      :buffer         buffer}]
      `(fn [~buffer ~runtime-config]
         ~(as-undiffable (unpack schema))))))
