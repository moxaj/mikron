(ns seria.pack
  (:require [seria.buffer :refer [read-byte! read-short! read-int!
                                  read-ubyte! read-ushort! read-uint!
                                  read-long! read-float! read-double!
                                  read-char! read-boolean!
                                  write-byte! write-short! write-int!
                                  write-ubyte! write-ushort! write-uint!
                                  write-long! write-float! write-double!
                                  write-char! write-boolean!]]
            [seria.util :refer [disj-indexed cljc-read-string cljc-ceil runtime-fn runtime-processor
                                decorate-set decorate-map decorate-constructor expand-record]]
            [seria.spec :refer [primitive? advanced? composite? traceable-index? custom?]]
            [seria.diff :refer [dnil? dnil]]))

(def ^:dynamic *config*)

(defn pack-dispatch [schema & _]
  (cond
    (primitive? schema) :primitive
    (advanced? schema)  schema
    (composite? schema) (first schema)
    (custom? schema)    :custom))

(defmulti pack pack-dispatch)

(defmulti unpack pack-dispatch)

(defn pack-with-diff
  ([value to-diff pack-value]
   (pack-with-diff value to-diff nil pack-value))
  ([value to-diff index pack-value]
   (let [pack-value-fn (gensym "pack-value-fn_")
         value-dnil?   (gensym "value-dnil?_")]
     (if-not (traceable-index? index to-diff)
        pack-value
       `(let [~pack-value-fn (fn [] ~pack-value)]
          (if-not ~'diffed?
            (~pack-value-fn)
            (let [~value-dnil? (dnil? ~value)]
              ~(pack :boolean value-dnil?)
              (when-not ~value-dnil?
                (~pack-value-fn)))))))))

(defn unpack-with-diff
  ([to-diff unpack-value]
   (unpack-with-diff to-diff nil unpack-value))
  ([to-diff index unpack-value]
   (let [unpack-value-fn (gensym "unpack-value-fn_")]
     (if-not (traceable-index? index to-diff)
       unpack-value
       `(let [~unpack-value-fn (fn [] ~unpack-value)]
          (if-not ~'diffed?
            (~unpack-value-fn)
            (if ~(unpack :boolean)
              ~dnil
              (~unpack-value-fn))))))))

(defmethod pack :primitive [schema value]
  (case schema
    :byte    `(write-byte!    ~'buffer ~value)
    :ubyte   `(write-ubyte!   ~'buffer ~value)
    :short   `(write-short!   ~'buffer ~value)
    :ushort  `(write-ushort!  ~'buffer ~value)
    :int     `(write-int!     ~'buffer ~value)
    :uint    `(write-uint!    ~'buffer ~value)
    :long    `(write-long!    ~'buffer ~value)
    :float   `(write-float!   ~'buffer ~value)
    :double  `(write-double!  ~'buffer ~value)
    :char    `(write-char!    ~'buffer ~value)
    :boolean `(write-boolean! ~'buffer ~value)))

(defmethod unpack :primitive [schema]
  (case schema
    :byte    `(read-byte!    ~'buffer)
    :ubyte   `(read-ubyte!   ~'buffer)
    :short   `(read-short!   ~'buffer)
    :ushort  `(read-ushort!  ~'buffer)
    :int     `(read-int!     ~'buffer)
    :uint    `(read-uint!    ~'buffer)
    :long    `(read-long!    ~'buffer)
    :float   `(read-float!   ~'buffer)
    :double  `(read-double!  ~'buffer)
    :char    `(read-char!    ~'buffer)
    :boolean `(read-boolean! ~'buffer)))

(defmethod pack :string [_ value]
  (let [char (gensym "char_")]
    `(do ~(pack :ushort `(count ~value))
         (run! (fn [~char] ~(pack :char char))
               ~value))))

(defmethod unpack :string [_]
  `(apply str (repeatedly ~(unpack :ushort)
                          (fn [] ~(unpack :char)))))

(defmethod pack :keyword [_ value]
  (let [keyword-as-str (gensym "keyword-as-str_")]
    `(let [~keyword-as-str (subs (str ~value) 1)]
       ~(pack :string keyword-as-str))))

(defmethod unpack :keyword [_]
  `(keyword ~(unpack :string)))

(defmethod pack :symbol [_ value]
  (let [symbol-as-str (gensym "symbol-as-str_")]
    `(let [~symbol-as-str (str ~value)]
       ~(pack :string symbol-as-str))))

(defmethod unpack :symbol [_]
  `(symbol ~(unpack :string)))

(defmethod pack :any [_ value]
  (let [any-as-str (gensym "value-as-str_")]
    `(let [~any-as-str (pr-str ~value)]
       ~(pack :string any-as-str))))

(defmethod unpack :any [_]
  `(cljc-read-string ~(unpack :string)))

(defmethod pack :list [[_ {:keys [size]} inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack size `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack inner-schema inner-value))
               ~value))))

(defmethod unpack :list [[_ {:keys [size]} inner-schema]]
  `(doall (repeatedly ~(unpack size)
                      (fn [] ~(unpack inner-schema)))))

(defmethod pack :vector [[_ {:keys [size diff]} inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack size `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack-with-diff inner-value diff (pack inner-schema inner-value)))
               ~value))))

(defmethod unpack :vector [[_ {:keys [size diff]} inner-schema]]
  `(vec (repeatedly ~(unpack size)
                    (fn [] ~(unpack-with-diff diff (unpack inner-schema))))))

(defmethod pack :set [[_ {:keys [size]} inner-schema] value]
  (let [inner-value (gensym "inner-value_")]
    `(do ~(pack size `(count ~value))
         (run! (fn [~inner-value]
                 ~(pack inner-schema inner-value))
               ~value))))

(defmethod unpack :set [[_ {:keys [size sorted-by]} inner-schema]]
  (->> `(repeatedly ~(unpack size)
                    (fn [] ~(unpack inner-schema)))
       (decorate-set sorted-by)))

(defmethod pack :map [[_ {:keys [size diff]} key-schema val-schema] value]
  (let [key (gensym "key_")
        val (gensym "val_")]
    `(do ~(pack size `(count ~value))
         (run! (fn [[~key ~val]]
                 ~(pack key-schema key)
                 ~(pack-with-diff val diff (pack val-schema val)))
               ~value))))

(defmethod unpack :map [[_ {:keys [size diff sorted-by]} key-schema val-schema]]
  (->> `(->> (repeatedly ~(unpack size)
                         (fn [] [~(unpack key-schema)
                                 ~(unpack-with-diff diff (unpack val-schema))]))
             (into {}))
       (decorate-map sorted-by)))

(defmethod pack :tuple [[_ {:keys [diff]} :as schema] value]
  (let [disjoined (disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (pack-with-diff inner-value diff index (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :tuple [[_ {:keys [diff]} inner-schemas]]
  (let [unpack-inner-fn (gensym "unpack-inner-fn_")]
    (vec (map-indexed (fn [index inner-schema]
                        (unpack-with-diff diff index (unpack inner-schema)))
                      inner-schemas))))

(defmethod pack :record [schema value]
  (let [[_ {:keys [diff]} :as schema] (expand-record schema (:schemas *config*))
        disjoined (disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (pack-with-diff inner-value diff index (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :record [schema]
  (let [[_ {:keys [diff constructor]} record-map] (expand-record schema (:schemas *config*))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (unpack-with-diff diff key (unpack (record-map key)))]))
         (into {})
         (decorate-constructor constructor))))

(defmethod pack :optional [[_ _ inner-schema] value]
  (pack-with-diff value :all `(do ~(pack :boolean value)
                                (when ~value
                                  ~(pack inner-schema value)))))

(defmethod unpack :optional [[_ _ inner-schema]]
  (unpack-with-diff :all `(when ~(unpack :boolean)
                            ~(unpack inner-schema))))

(defmethod pack :multi [[_ _ selector arg-map] value]
  (let [{:keys [multi-map multi-size]} *config*]
    `(case (~(runtime-fn selector) ~value)
       ~@(mapcat (fn [[multi-case inner-schema]]
                   [multi-case
                    `(do ~(pack multi-size (get multi-map multi-case))
                         ~(pack-with-diff value :all (pack inner-schema value)))])
                 arg-map))))

(defmethod unpack :multi [[_ _ _ arg-map]]
  (let [{:keys [multi-map multi-size]} *config*]
    `(case (get ~multi-map ~(unpack multi-size))
       ~@(mapcat (fn [[multi-case inner-schema]]
                   [multi-case (unpack-with-diff :all (unpack inner-schema))])
                 arg-map))))

(defmethod pack :enum [_ value]
  (let [{:keys [enum-map enum-size]} *config*]
    (pack enum-size `(get ~enum-map ~value))))

(defmethod unpack :enum [_]
  (let [{:keys [enum-map enum-size]} *config*]
    `(get ~enum-map ~(unpack enum-size))))

(defmethod pack :custom [schema value]
  `(~(runtime-processor schema :packer) ~value ~'buffer ~'config ~'diffed?))

(defmethod unpack :custom [schema]
  `(~(runtime-processor schema :unpacker) ~'buffer ~'config ~'diffed?))

(defn make-packer [schema config]
  (binding [*config* config]
    `(fn [~'value ~'buffer ~'config ~'diffed?]
       ~(pack-with-diff 'value :all (pack schema 'value)))))

(defn make-unpacker [schema config]
  (binding [*config* config]
    `(fn [~'buffer ~'config ~'diffed?]
       ~(unpack-with-diff :all (unpack schema)))))
