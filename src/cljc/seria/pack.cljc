(ns seria.pack
  (:require [seria.buffer :refer [read-byte! read-short! read-int!
                                  read-ubyte! read-ushort! read-uint!
                                  read-long! read-float! read-double!
                                  read-char! read-boolean!
                                  write-byte! write-short! write-int!
                                  write-ubyte! write-ushort! write-uint!
                                  write-long! write-float! write-double!
                                  write-char! write-boolean!]]
            [seria.util :refer [disj-indexed cljc-read-string runtime-fn runtime-processor
                                decorate-set decorate-map decorate-constructor expand-record]]
            [seria.spec :refer [primitive? advanced? composite? traceable-index? custom?]]))

(def ^:dynamic *config*)

(defn pack-dispatch [schema & _]
  (cond
    (or (primitive? schema)
        (advanced? schema)) schema
    (composite? schema)     (first schema)
    (custom? schema)        :custom))

(defmulti pack pack-dispatch)

(defmulti unpack pack-dispatch)

(defn decorate-diff
  ([value pack-value]
   (decorate-diff value :all nil pack-value))
  ([value indices pack-value]
   (decorate-diff value indices nil pack-value))
  ([value indices index pack-value]
   (let [pack-value-fn (gensym "pack-value-fn_")
         value-dnil?   (gensym "value-dnil?_")]
     (if-not (traceable-index? index indices)
        pack-value
       `(let [~pack-value-fn (fn [] ~pack-value)]
          (if-not ~'diffed?
            (~pack-value-fn)
            (let [~value-dnil? (= :seria.diff/dnil ~value)]
              ~(pack :boolean value-dnil?)
              (when-not ~value-dnil?
                (~pack-value-fn)))))))))

(defn decorate-undiff
  ([unpack-value]
   (decorate-undiff :all nil unpack-value))
  ([indices unpack-value]
   (decorate-undiff indices nil unpack-value))
  ([indices index unpack-value]
   (if-not (traceable-index? index indices)
     unpack-value
     (let [unpack-value-fn (gensym "unpack-value-fn_")]
       `(let [~unpack-value-fn (fn [] ~unpack-value)]
          (if-not ~'diffed?
            (~unpack-value-fn)
            (if ~(unpack :boolean)
              :seria.diff/dnil
              (~unpack-value-fn))))))))

(defmethod pack :byte [_ value]
  `(write-byte! ~'buffer ~value))

(defmethod unpack :byte [_]
  `(read-byte! ~'buffer))

(defmethod pack :ubyte [_ value]
  `(write-ubyte! ~'buffer ~value))

(defmethod unpack :ubyte [_]
  `(read-ubyte! ~'buffer))

(defmethod pack :short [_ value]
  `(write-short! ~'buffer ~value))

(defmethod unpack :short [_]
  `(read-short! ~'buffer))

(defmethod pack :ushort [_ value]
  `(write-ushort! ~'buffer ~value))

(defmethod unpack :ushort [_]
  `(read-ushort! ~'buffer))

(defmethod pack :int [_ value]
  `(write-int! ~'buffer ~value))

(defmethod unpack :int [_]
  `(read-int! ~'buffer))

(defmethod pack :uint [_ value]
  `(write-uint! ~'buffer ~value))

(defmethod unpack :uint [_]
  `(read-uint! ~'buffer))

(defmethod pack :long [_ value]
  `(write-long! ~'buffer ~value))

(defmethod unpack :long [_]
  `(read-long! ~'buffer))

(defmethod pack :float [_ value]
  `(write-float! ~'buffer ~value))

(defmethod unpack :float [_]
  `(read-float! ~'buffer))

(defmethod pack :double [_ value]
  `(write-double! ~'buffer ~value))

(defmethod unpack :double [_]
  `(read-double! ~'buffer))

(defmethod pack :char [_ value]
  `(write-char! ~'buffer ~value))

(defmethod unpack :char [_]
  `(read-char! ~'buffer))

(defmethod pack :boolean [_ value]
  `(write-boolean! ~'buffer ~value))

(defmethod unpack :boolean [_]
  `(read-boolean! ~'buffer))

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
                 ~(decorate-diff inner-value diff (pack inner-schema inner-value)))
               ~value))))

(defmethod unpack :vector [[_ {:keys [size diff]} inner-schema]]
  `(vec (repeatedly ~(unpack size)
                    (fn [] ~(decorate-undiff diff (unpack inner-schema))))))

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
                 ~(decorate-diff val diff (pack val-schema val)))
               ~value))))

(defmethod unpack :map [[_ {:keys [size diff sorted-by]} key-schema val-schema]]
  (->> `(->> (repeatedly ~(unpack size)
                         (fn [] [~(unpack key-schema)
                                 ~(decorate-undiff diff (unpack val-schema))]))
             (into {}))
       (decorate-map sorted-by)))

(defmethod pack :tuple [[_ {:keys [diff]} :as schema] value]
  (let [disjoined (disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (decorate-diff inner-value diff index (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :tuple [[_ {:keys [diff]} inner-schemas]]
  (let [unpack-inner-fn (gensym "unpack-inner-fn_")]
    (vec (map-indexed (fn [index inner-schema]
                        (decorate-undiff diff index (unpack inner-schema)))
                      inner-schemas))))

(defmethod pack :record [schema value]
  (let [[_ {:keys [diff]} :as schema] (expand-record schema (:schemas *config*))
        disjoined (disj-indexed schema value)]
    `(let [~@(mapcat (juxt :symbol :inner-value) disjoined)]
       ~@(doall (map (fn [{inner-schema :inner-schema inner-value :symbol index :index}]
                       (decorate-diff inner-value diff index (pack inner-schema inner-value)))
                     disjoined)))))

(defmethod unpack :record [schema]
  (let [[_ {:keys [diff constructor]} record-map] (expand-record schema (:schemas *config*))]
    (->> (sort (keys record-map))
         (map (fn [key]
                [key (decorate-undiff diff key (unpack (record-map key)))]))
         (into {})
         (decorate-constructor constructor))))

(defmethod pack :optional [[_ _ inner-schema] value]
  `(do ~(pack :boolean value)
     (when ~value
       ~(decorate-diff value (pack inner-schema value)))))

(defmethod unpack :optional [[_ _ inner-schema]]
  `(when ~(unpack :boolean)
     ~(decorate-undiff (unpack inner-schema))))

(defmethod pack :multi [[_ _ selector arg-map] value]
  (let [{{multi-map :map multi-size :size} :multi-bimap} *config*]
    `(case (~(runtime-fn selector) ~value)
       ~@(mapcat (fn [[multi-case inner-schema]]
                   [multi-case
                    `(do ~(pack multi-size (get multi-map multi-case))
                         ~(decorate-diff value (pack inner-schema value)))])
                 arg-map))))

(defmethod unpack :multi [[_ _ _ arg-map]]
  (let [{{multi-map :map multi-size :size} :multi-bimap} *config*]
    `(case (get ~multi-map ~(unpack multi-size))
       ~@(mapcat (fn [[multi-case inner-schema]]
                   [multi-case (decorate-undiff (unpack inner-schema))])
                 arg-map))))

(defmethod pack :enum [_ value]
  (let [{{enum-map :map enum-size :size} :enum-bimap} *config*]
    (pack enum-size `(get ~enum-map ~value))))

(defmethod unpack :enum [_]
  (let [{{enum-map :map enum-size :size} :enum-bimap} *config*]
    `(get ~enum-map ~(unpack enum-size))))

(defmethod pack :custom [schema value]
  `(~(runtime-processor schema :packer) ~value ~'buffer ~'config ~'diffed?))

(defmethod unpack :custom [schema]
  `(~(runtime-processor schema :unpacker) ~'buffer ~'config ~'diffed?))

(defn make-packer [schema config]
  (binding [*config* config]
    `(fn [~'value ~'buffer ~'config ~'diffed?]
       ~(decorate-diff 'value (pack schema 'value)))))

(defn make-unpacker [schema config]
  (binding [*config* config]
    `(fn [~'buffer ~'config ~'diffed?]
       ~(decorate-undiff (unpack schema)))))
