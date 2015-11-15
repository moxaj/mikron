(ns seria.core
  #?@(:clj  [
             (:import [java.nio ByteBuffer]
                      [java.util Base64 Base64$Encoder])
             (:require [seria.buffers :refer [make-wbuffer reset-wbuffer! unwrap-wbuffer
                                              wrap-bytes write-short!]]
                       [seria.serialization :refer [make-packer make-unpacker non-embeddables]]
                       [seria.utils :refer [unique-int bimap]]
                       [seria.validate :refer [validate]]
                       [seria.analyze :refer [find-enum-values find-multi-cases find-non-embeddables]]
                       [seria.delta :refer [make-differ make-undiffer]])]
      :cljs [(:require
               [seria.buffers :refer [make-wbuffer reset-wbuffer! unwrap-wbuffer
                                      wrap-bytes write-short!]]
               [seria.serialization :refer [make-packer make-unpacker non-embeddables]]
               [seria.utils :refer [unique-int bimap]]
               [seria.validate :refer [validate]]
               [seria.analyze :refer [find-enum-values find-multi-cases find-non-embeddables]]
               [seria.delta :refer [make-differ make-undiffer]]
               [cljs.reader :refer [read-string]]
               [cljs.js :refer [eval js-eval empty-state]])]))

(defn eval-cljc [form]
  #?(:clj  (eval form)
     :cljs (binding [*print-err-fn* (constantly nil)]
             (eval (empty-state)
                   (read-string (pr-str form))
                   {:eval       js-eval
                    :source-map true
                    :context    :expr}
                   identity))))

(defn make-processors [schemas config]
  (->> (keys schemas)
       (map (fn [schema]
              (let [packer   (make-packer schema config)
                    unpacker (make-unpacker schema config)
                    differ   (make-differ schema config)
                    undiffer (make-undiffer schema config)]
                [schema {:packer          (eval-cljc packer)
                         :unpacker        (eval-cljc unpacker)
                         :differ          (eval-cljc differ)
                         :undiffer        (eval-cljc undiffer)
                         :packer-source   packer
                         :unpacker-source unpacker
                         :differ-source   differ
                         :undiffer-source undiffer}])))
       (into {})))

(defn make-config [& args]
  (let [{:keys [buffer-count max-bits max-bytes schemas]
         :or   {buffer-count 4 max-bits 10000 max-bytes 10000}} (apply hash-map args)
        config-id (unique-int)
        schemas   (validate schemas)
        config    {:config-id  config-id
                   :schemas    schemas
                   :wbuffers   (repeatedly buffer-count #(make-wbuffer max-bits max-bytes))
                   :schema-map (bimap (keys schemas))
                   :enum-map   (bimap (find-enum-values schemas))
                   :multi-map  (bimap (find-multi-cases schemas))
                   :groups     (atom {:sent {} :received {}})}]
    (swap! non-embeddables assoc config-id (bimap (find-non-embeddables schemas)))
    (assoc config :processors (make-processors schemas config))))

(defmacro defconfig [name & args]
  `(def ~name (make-config ~@args)))

(defn diff [data-1 data-2 schema {:keys [processors]}]
  (when-let [diff! (get-in processors [schema :differ])]
    (diff! data-1 data-2)))

(defn undiff [data-1 data-2 schema {:keys [processors]}]
  (when-let [undiff! (get-in processors [schema :undiffer])]
    (undiff! data-1 data-2)))

(defn pack-with-buffer [data schema {:keys [processors schema-map]} wbuffer]
  (when-let [pack! (get-in processors [schema :packer])]
    (let [{:keys [buffer bit-position byte-position]} wbuffer]
      (reset-wbuffer! wbuffer)
      (write-short! buffer 0 (schema-map schema))
      (pack! data buffer bit-position byte-position)
      (unwrap-wbuffer wbuffer))))

(defn pack [data schema {:keys [wbuffers] :as config}]
  (pack-with-buffer data schema config (first wbuffers)))

(defn unpack [bytes {:keys [processors schema-map]}]
  (let [[schema-id {:keys [buffer bit-position byte-position]}] (wrap-bytes bytes)
        schema  (get schema-map schema-id)
        unpack! (get-in processors [schema :unpacker])]
    (when (and schema unpack!)
      [schema (unpack! buffer bit-position byte-position)])))