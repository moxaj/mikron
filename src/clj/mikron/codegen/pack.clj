(ns mikron.codegen.pack
  "Packer generating functions."
  (:require [mikron.buffer :as buffer]
            [mikron.util :as util]
            [mikron.type :as type]
            [mikron.common :as common]))

(def ^:dynamic *options*)

(defn wrap-locking [lock & body]
  (if-not (:cljs-mode? *options*)
    `(locking ~lock ~@body)
    `(do ~@body)))

(defmulti pack util/type-of :hierarchy #'type/hierarchy)

(defn pack-diffed [schema value]
  (if-not (:diffed? *options*)
    (pack schema value)
    (util/with-gensyms [value-dnil?]
      `(let [~value-dnil? (= :mikron/dnil ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~(pack schema value))))))

(defmethod pack :primitive [schema value]
  `(~(symbol (format "mikron.buffer/write-%s!" (name schema)))
    ~(:buffer *options*)
    ~value))

(defmethod pack :keyword [_ value]
  (util/with-gensyms [keyword-as-str]
    `(let [~keyword-as-str (name ~value)]
       ~(pack :string keyword-as-str))))

(defmethod pack :symbol [_ value]
  (util/with-gensyms [symbol-as-str]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod pack :any [_ value]
  (util/with-gensyms [any-as-str]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod pack :nil [_ _]
  nil)

(defmethod pack :coll [[_ _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack-diffed inner-schema inner-value))
               ~value))))

(defmethod pack :map [[_ _ key-schema val-schema] value]
  (util/with-gensyms [key val]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(pack-diffed val-schema val))
               ~value))))

(defmethod pack :tuple [[_ _ inner-schemas] value]
  (util/with-gensyms [inner-value]
    `(do ~@(->> inner-schemas
                (map-indexed (fn [index inner-schema]
                               `(let [~inner-value (~value ~index)]
                                  ~(pack-diffed inner-schema inner-value))))
                (doall)))))

(defmethod pack :record [[_ _ inner-schemas] value]
  (util/with-gensyms [inner-value]
    `(do ~@(->> inner-schemas
                (into (sorted-map))
                (map (fn [[index inner-schema]]
                       `(let [~inner-value (~index ~value)]
                          ~(pack-diffed inner-schema inner-value))))
                (doall)))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(pack inner-schema value))))

(defmethod pack :multi [[_ _ selector multi-map] value]
  `(case (~selector ~value)
     ~@(->> multi-map
            (mapcat (fn [[multi-case inner-schema]]
                      [multi-case
                       `(do ~(pack :varint (->> multi-map (keys) (sort) (util/index-of multi-case)))
                            ~(pack inner-schema value))]))
            (doall))))

(defmethod pack :enum [[_ _ enum-values] value]
  (pack :varint `(case ~value
                   ~@(->> enum-values
                          (mapcat (fn [enum-value]
                                    [enum-value (util/index-of enum-value enum-values)]))
                          (doall)))))

(defmethod pack :wrapped [[_ _ pre _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(let [~inner-value (~pre ~value)]
       ~(pack inner-schema inner-value))))

(defmethod pack :template [schema value]
  (pack (type/templates schema) value))

(defmethod pack :custom [schema value]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util/processor-name (if diffed? :pack-diffed :pack)
                            schema)
      ~buffer ~value)))

;; private api

(defn packer [schema-name {:keys [schemas diffed?] :as options}]
  (util/with-gensyms [value buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util/processor-name (if diffed? :pack-diffed :pack)
                                         schema-name)
                    {:private true})
        [~buffer ~value]
        ~(pack-diffed (schemas schema-name) value)
        ~buffer))))

;; public api

(defn global-packer [{:keys [schemas processor-types] :as options}]
  (util/with-gensyms [schema value diffed? meta-schema meta-value meta-schema-id]
    (binding [*options* options]
      (let [buffer         (util/var-name :buffer)
            processor-name (util/processor-name :pack)
            schema-ids     (->> (keys schemas)
                                (sort)
                                (map-indexed #(vector %2 %1))
                                (into {}))]
        `(~processor-name
          ([~schema ~value]
           (~processor-name ~schema ~value nil nil))
          ([~schema ~value ~meta-schema ~meta-value]
           (let [~diffed? (common/diffed? ~value)
                 ~value   (cond-> ~value ~diffed? (common/unwrap-diffed))]
             ~(wrap-locking buffer
                `(-> ~buffer
                     (buffer/write-headers! (~schema-ids ~schema)
                                            (~schema-ids ~meta-schema)
                                            ~diffed?)
                     ((if ~diffed?
                        ~(util/select-processor :pack-diffed schema schemas)
                        ~(util/select-processor :pack schema schemas))
                      ~value)
                     (cond->
                       ~meta-schema
                       (~(util/select-processor :pack meta-schema schemas)
                        ~meta-value))
                     (buffer/compact))))))))))
