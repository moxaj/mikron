(ns seria.core
  (:require [seria.buffer :refer [prepare-wbuffer! wbuffer->bytes
                                  bytes->wbuffer write-ushort! write-ushort!]]
            [seria.util :refer [unique-delta-id cljc-throw]]
            [clojure.walk :refer [postwalk]]))

(defn diff [value-1 value-2 & {:keys [config schema]}]
  (let [schema (or schema ((:schema-selector config) value-2))
        diff*  (get-in config [:processors schema :differ])]
    (diff* value-1 value-2)))

(defn undiff [value-1 value-2 & {:keys [config schema]}]
  (let [schema  (or schema ((:schema-selector config) value-2))
        undiff* (get-in config [:processors schema :undiffer])]
    (undiff* value-1 value-2)))

(defn get-delta-id! [delta-group {:keys [delta-map delta-groups]}]
  (if-not delta-group
    0
    (if-let [delta-id (@delta-map delta-group)]
      delta-id
      (let [delta-id (unique-delta-id)]
        (swap! delta-map assoc delta-group delta-id)
        (swap! delta-groups assoc delta-id {:sent nil :counter 0})
        delta-id))))

(defn get-delta-group! [delta-id delta-groups]
  (if (zero? delta-id)
    nil
    (if-let [delta-group (@delta-groups delta-id)]
      delta-group
      (let [delta-group {:received nil}]
        (swap! delta-groups assoc delta-id delta-group)
        delta-group))))

(defn increase-delta-counter! [delta-groups delta-id period]
  (swap! delta-groups update-in [delta-id :counter]
         (fn [counter]
           (if (= counter (dec period))
             0
             (inc counter)))))

(defn store-and-return! [delta-groups delta-id type value]
  (swap! delta-groups assoc-in [delta-id type] value)
  value)

(defn pack [value & {:keys [schema config delta-group]}]
  (assert config)
  (let [{:keys [schema-selector processors schema-map wbuffer delta-groups delta-strategy]} config
        {:keys [buffer bit-position byte-position]} wbuffer
        schema    (or schema (schema-selector value))
        schema-id (schema-map schema)
        _         (assert schema-id "")
        delta-id  (get-delta-id! delta-group config)
        pack*     (get-in processors [schema :packer])
        diff*     (get-in processors [schema :differ])

        [value diffed?]
        (if-not delta-group
          [value false]
          (let [[type period] (delta-strategy delta-group)
                {:keys [sent counter]} (get @delta-groups delta-id)]
            (increase-delta-counter! delta-groups delta-id period)
            (if (or (nil? sent) (zero? counter))
              [(store-and-return! delta-groups delta-id :sent value) false]
              [(do (when (= type :incremental)
                     (swap! delta-groups assoc-in [delta-id :sent] value))
                   (diff* sent value))
               true])))]
    (prepare-wbuffer! schema-id delta-id diffed? wbuffer)
    (pack* value buffer bit-position byte-position)
    (wbuffer->bytes wbuffer)))

(defn unpack [bytes & {:keys [config]}]
  (let [{:keys [processors schema-map delta-groups]} config
        {:keys [schema-id delta-id wbuffer diffed?]} (bytes->wbuffer bytes)
        {:keys [buffer bit-position byte-position]} wbuffer
        schema         (schema-map schema-id)
        _              (assert schema "")
        unpack*        (get-in processors [schema :unpacker])
        unpacked-value (unpack* buffer bit-position byte-position)
        value          (if (zero? delta-id)
                         unpacked-value
                         (if-not diffed?
                           (store-and-return! delta-groups delta-id :received unpacked-value)
                           (let [received       (:received (get-delta-group! delta-id delta-groups))
                                 _              (assert received "")
                                 undiff*        (get-in config [:processors schema :undiffer])
                                 undiffed-value (undiff* received unpacked-value)]
                             (store-and-return! delta-groups delta-id :received undiffed-value))))]
    [schema value]))

(defmacro with-config [config & body-exprs]
  `(do ~@(postwalk (fn [form]
                     (if-not (and (sequential? form)
                                  (symbol? (first form))
                                  (#{"diff" "undiff" "pack" "unpack"} (name (first form)))
                                  (some #{:config} form))
                       form
                       (concat form [:config config])))
                   body-exprs)))