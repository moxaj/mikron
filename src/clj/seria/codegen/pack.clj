(ns seria.codegen.pack
  "Packer generating functions."
  (:require [seria.buffer :as buffer]
            [seria.util :as util]
            [seria.common :as common]
            [seria.type :as type])
  (:import  [seria.common DiffedValue]))

(def ^:dynamic *options*)

(defmulti pack util/type-of :hierarchy #'type/hierarchy)

(defn pack-diffed [schema value]
  (if-not (:diffed? *options*)
    (pack schema value)
    (util/with-gensyms [value-dnil?]
      `(let [~value-dnil? (common/dnil? ~value)]
         ~(pack :boolean value-dnil?)
         (when-not ~value-dnil?
           ~(pack schema value))))))

(defmethod pack :primitive [schema value]
  `(~(symbol (format "seria.buffer/write-%s!" (name schema)))
    ~(:buffer *options*)
    ~value))

(defmethod pack :string [_ value]
  (util/with-gensyms [char]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~char] ~(pack :char char))
               ~value))))

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

(defmethod pack :list [[_ _ inner-schema] value]
  (util/with-gensyms [inner-value]
    `(do ~(pack :varint `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack-diffed inner-schema inner-value))
               ~value))))

(defmethod pack :vector [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

(defmethod pack :set [[_ _ inner-schema] value]
  (pack [:list {} inner-schema] value))

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

(defmethod pack :record [schema value]
  (let [[_ _ inner-schemas] (util/expand-record schema (:schemas *options*))]
    (util/with-gensyms [inner-value]
      `(do ~@(->> inner-schemas
                  (into (sorted-map))
                  (map (fn [[index inner-schema]]
                         `(let [~inner-value (~index ~value)]
                            ~(pack-diffed inner-schema inner-value))))
                  (doall))))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
       (when ~value
         ~(pack inner-schema value))))

(defmethod pack :multi [[_ _ selector multi-map] value]
  `(case (~selector ~value)
     ~@(mapcat (fn [[multi-case inner-schema]]
                 [multi-case
                  `(do ~(pack :varint (->> multi-map (keys) (sort) (util/index-of multi-case)))
                       ~(pack inner-schema value))])
               multi-map)))

(defmethod pack :enum [[_ _ enum-values] value]
  (pack :varint `(case ~value
                   ~@(mapcat (fn [enum-value]
                               [enum-value (util/index-of enum-value enum-values)])
                             enum-values))))

(defmethod pack :custom [schema value]
  (let [{:keys [diffed? buffer]} *options*]
    `(~(util/processor-name (if diffed? :pack-diffed :pack)
                            schema)
      ~buffer ~value)))

;; private api

(defn make-packer [schema-name {:keys [schemas diffed?] :as options}]
  (util/with-gensyms [value buffer]
    (binding [*options* (assoc options :buffer buffer)]
      `(~(with-meta (util/processor-name (if diffed? :pack-diffed :pack)
                                         schema-name)
                    {:private true})
        [~buffer ~value]
        ~(pack-diffed (schemas schema-name) value)
        ~buffer))))

;; public api

(defn make-global-packer [{:keys [schemas processor-types]}]
  (util/with-gensyms [schema value schema-id diffed?]
    (let [buffer (util/var-name :buffer)]
      `(~(util/processor-name :pack)
        [~schema ~value]
        (let [~diffed?   (common/diffed? ~value)
              ~value     (if-not ~diffed? ~value (common/unwrap-diffed ~value))
              ~schema-id (~(->> (keys schemas)
                                (map-indexed #(vector %2 %1))
                                (into {}))
                          ~schema)]
          ~(common/wrap-locking buffer
             `(-> ~buffer
                  (buffer/write-headers! ~schema-id ~diffed?)
                  ((case ~schema
                     ~@(mapcat (fn [schema-name]
                                 [schema-name
                                  `(if ~diffed?
                                     ~(util/processor-name :pack-diffed schema-name)
                                     ~(util/processor-name :pack schema-name))])
                               (keys schemas)))
                   ~value)
                  (buffer/compress))))))))
