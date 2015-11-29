(ns seria.core
  (:require [seria.buffer :refer [reset-wbuffer! unwrap-wbuffer
                                  wrap-bytes write-ushort!]]
            [clojure.walk :refer [postwalk]]))

(def ^:dynamic *config*)

(defn diff
  ([value-1 value-2 schema]
   (diff value-1 value-2 schema *config*))
  ([value-1 value-2 schema {:keys [processors]}]
   (when-let [diff* (get-in processors [schema :differ])]
     (diff* value-1 value-2))))

(defn undiff
  ([value-1 value-2 schema]
   (undiff value-1 value-2 schema *config*))
  ([value-1 value-2 schema {:keys [processors]}]
   (when-let [undiff* (get-in processors [schema :undiffer])]
     (undiff* value-1 value-2))))

(defn pack
  ([value schema]
   (pack value schema *config*))
  ([value schema {:keys [processors schema-map wbuffer]}]
   (when-let [pack* (get-in processors [schema :packer])]
     (let [{:keys [buffer bit-position byte-position]} wbuffer]
       (reset-wbuffer! wbuffer)
       (write-ushort! buffer 0 (schema-map schema))
       (pack* value buffer bit-position byte-position)
       (unwrap-wbuffer wbuffer)))))

(defn unpack
  ([bytes]
   (unpack bytes *config*))
  ([bytes {:keys [processors schema-map]}]
   (let [[schema-id {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)
         schema  (get schema-map schema-id)
         unpack* (get-in processors [schema :unpacker])]
     (when (and schema unpack*)
       [schema (unpack* buffer bit-position byte-position)]))))

(defmacro with-config [config & body-exprs]
  `(binding [*config* ~config]
     ~@body-exprs))