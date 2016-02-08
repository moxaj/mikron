(ns seria.core
  (:require [seria.buffer :refer [prepare-buffer! buffer->raw raw->buffer]]))


(def ^:dynamic *config*)
(def ^:dynamic *schema*)

(defmacro with-config [config & exprs]
  `(binding [*config* ~config]
     ~@exprs))

(defmacro with-schema [schema & exprs]
  `(binding [*schema* ~schema]
     ~@exprs))

(defmacro with-params [{:keys [schema config]} & exprs]
  `(binding [~@(concat (if schema [`*schema* schema] [])
                       (if config [`*config* config] []))]
     ~@exprs))

(defn prepare-config! [{:keys [state]} & {:keys [functions equality-ops]}]
  (swap! state #(-> %
                    (update :fn-map merge functions)
                    (update :eq-ops merge equality-ops))))

(defn pack [value & {:keys [schema config diffed?] :or {config  *config*
                                                        schema  *schema*
                                                        diffed? false}}]
  (let [{:keys [processors schema-map buffer]} config
        schema-id (schema-map schema)
        pack!     (get-in processors [schema :packer])]
    (when (and pack! schema-id)
      (prepare-buffer! buffer)
      (pack! value buffer config diffed?)
      (buffer->raw buffer schema-id diffed?))))

(defn unpack [raw & {:keys [config] :or {config *config*}}]
  (let [{:keys [processors schema-map state]} config
        {:keys [schema-id buffer diffed?]}    (raw->buffer raw)
        schema  (schema-map schema-id)
        unpack! (get-in processors [schema :unpacker])]
    (when (and unpack! schema)
      [schema (unpack! buffer config diffed?)])))

(defn diff [value-1 value-2 & {:keys [config schema] :or {config *config*
                                                          schema *schema*}}]
  (when-let [diff! (get-in config [:processors schema :differ])]
    (diff! value-1 value-2 config)))

(defn undiff [value-1 value-2 & {:keys [config schema] :or {config *config*
                                                            schema *schema*}}]
  (when-let [undiff! (get-in config [:processors schema :undiffer])]
    (undiff! value-1 value-2 config)))

(defn interp [value-1 value-2 time & {:keys [schema config] :or {config *config*
                                                                 schema *schema*}}]
  (let [interp!   (get-in config [:processors schema :interper])
        time-path (get-in config [:interp-opts schema :time-path])
        time-1    (get-in value-1 time-path)
        time-2    (get-in value-2 time-path)]
    (when interp!
      (assoc-in (interp! value-1 value-2 time-1 time-2 time config)
                time-path time))))
