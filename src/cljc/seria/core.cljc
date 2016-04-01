(ns seria.core
  "Main namespace. Acts as a facade for the public API."
  (:require [seria.buffer :as buffer])
  #?(:cljs (:require-macros seria.core)))

(def ^:dynamic *params*)

#?(:clj (defmacro with-params [{:keys [schema config buffer]} & body]
          `(binding [*params* ~{:schema schema :config config :buffer buffer}]
             ~@body)))

(def allocate-buffer buffer/allocate)

(defn prepare-config! [{:keys [state]} & {:keys [functions]}]
  (swap! state update :fn-map merge functions))

(defn pack [value & {:keys [schema config buffer diff-id diffed?]
                     :or   {config  (:config *params*)
                            schema  (:schema *params*)
                            buffer  (:buffer *params*)
                            diff-id 0
                            diffed? false}}]
  (let [schema-id (get-in config [:schema-map schema])
        pack!     (get-in config [:processors schema (if diffed? :diffed-packer :packer)])]
    (if (and pack! schema-id buffer)
      (-> buffer
          (buffer/write-headers! schema-id diff-id diffed?)
          (pack! value config)
          (buffer/compressed))
      :seria/invalid)))

(defn unpack [raw & {:keys [config] :or {config (:config *params*)}}]
  (let [buffer  (buffer/wrap raw)
        {:keys [schema-id diff-id diffed?]} (buffer/read-headers! buffer)
        schema  (get-in config [:schema-map schema-id])
        unpack! (get-in config [:processors schema (if diffed? :diffed-unpacker :unpacker)])]
    (if (and unpack! schema)
      {:schema  schema
       :diff-id diff-id
       :value   (unpack! buffer config)}
      :seria/invalid)))

(defn diff [value-1 value-2 & {:keys [config schema]
                               :or   {config (:config *params*)
                                      schema (:schema *params*)}}]
  (if-let [diff! (get-in config [:processors schema :differ])]
    (diff! value-1 value-2 config)
    :seria/invalid))

(defn undiff [value-1 value-2 & {:keys [config schema]
                                 :or   {config (:config *params*)
                                        schema (:schema *params*)}}]
  (if-let [undiff! (get-in config [:processors schema :undiffer])]
    (undiff! value-1 value-2 config)
    :seria/invalid))

(defn interp [value-1 value-2 time-1 time-2 time
              & {:keys [schema config]
                 :or   {config (:config *params*)
                        schema (:schema *params*)}}]
  (if-let [interp! (get-in config [:processors schema :interper])]
    (interp! value-1 value-2 time-1 time-2 time config)
    :seria/invalid))
