(ns seria.core
  (:require [seria.buffer :as buffer])
  #?(:cljs (:require-macros seria.core)))

(def ^:dynamic *config*)
(def ^:dynamic *schema*)
(def ^:dynamic *buffer*)

#?(:clj (defmacro with-params [{:keys [schema config buffer]} & body]
          `(binding [~@(mapcat (fn [[default arg]]
                                 (if arg [default arg] []))
                               {`*schema* schema `*config* config `*buffer* buffer})]
             ~@body)))

(defn allocate-buffer [bits bytes]
  (buffer/allocate bits bytes))

(defn prepare-config! [{:keys [state]} & {:keys [functions]}]
  (swap! state update :fn-map merge functions))

(defn pack [value & {:keys [schema config diff-id diffed? buffer]
                     :or   {config *config* schema *schema* buffer *buffer* diff-id 0 diffed? false}}]
  (let [schema-id (get-in config [:schema-bimap :map schema])
        pack!     (get-in config [:processors schema :packer])]
    (if (and pack! schema-id buffer)
      (do (buffer/prepare buffer)
          (pack! value buffer config diffed?)
          (buffer/set-headers buffer schema-id diff-id diffed?)
          (buffer/compress buffer))
      ::invalid)))

(defn unpack [raw & {:keys [config] :or {config *config*}}]
  (let [buffer (buffer/wrap raw)
        {:keys [schema-id diff-id diffed?]} (buffer/get-headers buffer)
        schema  (get-in config [:schema-bimap :map schema-id])
        unpack! (get-in config [:processors schema :unpacker])]
    (if (and unpack! schema)
      (do (buffer/prepare buffer)
          {:schema  schema
           :diff-id diff-id
           :value   (unpack! buffer config diffed?)})
      ::invalid)))

(defn diff [value-1 value-2 & {:keys [config schema] :or {config *config* schema *schema*}}]
  (if-let [diff! (get-in config [:processors schema :differ])]
    (diff! value-1 value-2 config)
    ::invalid))

(defn undiff [value-1 value-2 & {:keys [config schema] :or {config *config* schema *schema*}}]
  (if-let [undiff! (get-in config [:processors schema :undiffer])]
    (undiff! value-1 value-2 config)
    ::invalid))

(defn interp [value-1 value-2 time-1 time-2 time
              & {:keys [schema config] :or {config *config* schema *schema*}}]
  (if-let [interp! (get-in config [:processors schema :interper])]
    (interp! value-1 value-2 time-1 time-2 time config)
    ::invalid))
