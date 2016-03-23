(ns seria.core
  (:require [seria.buffer :as buffer])
  #?(:cljs (:require-macros seria.core)))

(def ^:dynamic *config*)
(def ^:dynamic *schema*)
(def ^:dynamic *buffer*)

#?(:clj (defmacro with-params [{:keys [schema config buffer]} & body]
          `(binding [~@(mapcat (fn [[base-value value]]
                                 (if value [base-value value] []))
                               {`*schema* schema `*config* config `*buffer* buffer})]
             ~@body)))

(defn allocate-buffer [size]
  (buffer/allocate size))

(defn prepare-config! [{:keys [state]} & {:keys [functions]}]
  (swap! state update :fn-map merge functions))

(defn pack [value & {:keys [schema config diff-id diffed? buffer]
                     :or   {config *config* schema *schema* buffer *buffer* diff-id 0 diffed? false}}]
  (let [schema-id (get-in config [:schema-bimap schema])
        pack!     (get-in config [:processors schema :packer])]
    (if (and pack! schema-id buffer)
      (-> buffer
          (buffer/write-headers! schema-id diff-id diffed?)
          (pack! value config diffed?)
          (buffer/compressed))
      :seria/invalid)))

(defn unpack [raw & {:keys [config] :or {config *config*}}]
  (let [buffer (buffer/wrap raw)
        {:keys [schema-id diff-id diffed?]} (buffer/read-headers! buffer)
        schema  (get-in config [:schema-bimap schema-id])
        unpack! (get-in config [:processors schema :unpacker])]
    (if (and unpack! schema)
      {:schema  schema
       :diff-id diff-id
       :value   (unpack! buffer config diffed?)}
      :seria/invalid)))

(defn diff [value-1 value-2 & {:keys [config schema] :or {config *config* schema *schema*}}]
  (if-let [diff! (get-in config [:processors schema :differ])]
    (diff! value-1 value-2 config)
    :seria/invalid))

(defn undiff [value-1 value-2 & {:keys [config schema] :or {config *config* schema *schema*}}]
  (if-let [undiff! (get-in config [:processors schema :undiffer])]
    (undiff! value-1 value-2 config)
    :seria/invalid))

(defn interp [value-1 value-2 time-1 time-2 time
              & {:keys [schema config] :or {config *config* schema *schema*}}]
  (if-let [interp! (get-in config [:processors schema :interper])]
    (interp! value-1 value-2 time-1 time-2 time config)
    :seria/invalid))
