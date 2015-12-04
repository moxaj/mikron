(ns seria.core
  (:require [seria.buffer :refer [prepare-wbuffer! unwrap-wbuffer
                                  wrap-bytes write-ushort! write-ushort!]]))

(def ^:dynamic *config*)

(defn diff [value-1 value-2 & {:keys [config schema] :or {config *config*}}]
  (assert config)
  (let [{:keys [schema-selector processors]} config
        schema (or schema (do (assert schema-selector)
                              (schema-selector value-2)))
        diff*  (get-in processors [schema :differ])]
    (assert diff*)
    (diff* value-1 value-2)))

(defn undiff [value-1 value-2 & {:keys [config schema] :or {config *config*}}]
  (assert config)
  (let [{:keys [schema-selector processors]} config
        schema  (or schema (do (assert schema-selector)
                               (schema-selector value-2)))
        undiff* (get-in processors [schema :undiffer])]
    (assert undiff*)
    (undiff* value-1 value-2)))

(defn pack [value & {:keys [schema config delta-id] :or {config *config* delta-id 0}}]
  (assert config)
  (let [{:keys [schema-selector processors schema-map wbuffer]} config
        schema (or schema (do (assert schema-selector)
                              (schema-selector value)))
        pack*  (get-in processors [schema :packer])]
    (assert pack*)
    (let [{:keys [buffer bit-position byte-position]} wbuffer]
      (prepare-wbuffer! (schema-map schema) delta-id wbuffer)
      (pack* value buffer bit-position byte-position)
      (unwrap-wbuffer wbuffer))))

(defn unpack [bytes & {:keys [config] :or {config *config*}}]
  (assert config)
  (let [{:keys [processors schema-map]} config
        {:keys [schema-id _delta-id wbuffer]} (wrap-bytes bytes)
        {:keys [buffer bit-position byte-position]} wbuffer
        schema  (get schema-map schema-id)
        unpack* (get-in processors [schema :unpacker])]
    (assert unpack*)
    [schema (unpack* buffer bit-position byte-position)]))

(defmacro with-config [config & body-exprs]
  `(binding [*config* ~config]
     ~@body-exprs))