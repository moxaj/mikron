(ns seria.generate
  (:require [seria.validate :refer [primitive? advanced? composite?]]
            [clojure.walk :refer [postwalk]]))

(def ^:dynamic *small-sizes* (range 1 5))
(def ^:dynamic *big-sizes* (range 128 150))

(def symbol-chars
  (map char (concat [\_ \- \? \\]
                    (range 97 123)
                    (range 65 91))))

(defn gen-symbol-char []
  (rand-nth symbol-chars))

(defn gen-small-size []
  (rand-nth *small-sizes*))

(defn gen-big-size []
  (rand-nth *big-sizes*))

(defn gen-size [size-type]
  (case size-type
    :byte (gen-small-size)
    :short (gen-big-size)))

(defmulti gen (fn [schema schemas]
                (cond
                  (primitive? schema) schema
                  (advanced? schema) schema
                  (composite? schema) (first schema)
                  (contains? schemas schema) :top-schema
                  :else schema)))

(defmethod gen :byte [_ _]
  (- (rand-int 256) 128))

(defmethod gen :short [_ _]
  (- (rand-int 65536) 32768))

(defmethod gen :int [_ _]
  (rand-int 2147483648))

(defmethod gen :float [_ _]
  (float (rand)))

(defmethod gen :double [_ _]
  (double (rand)))

(defmethod gen :char [_ _]
  (char (rand-int 65536)))

(defmethod gen :boolean [_ _]
  (zero? (rand-int 2)))

(defmethod gen :string [_ schemas]
  (->> #(gen :char schemas)
       (repeatedly (gen-small-size))
       (apply str)))

(defmethod gen :long-string [_ schemas]
  (->> #(gen :char schemas)
       (repeatedly (gen-big-size))
       (apply str)))

(defmethod gen :keyword [_ _]
  (->> #(gen-symbol-char)
       (repeatedly (gen-small-size))
       (apply str)
       (keyword)))

(defmethod gen :symbol [_ _]
  (->> #(gen-symbol-char)
       (repeatedly (gen-small-size))
       (apply str)
       (symbol)))

(defmethod gen :any [_ _]
  "Not yet implemented")

(defmethod gen :top-schema [schema schemas]
  (gen (get schemas schema) schemas))

(defmethod gen :list [[_ {:keys [size]} sub-schema] schemas]
  (repeatedly (gen-size size) #(gen sub-schema schemas)))

(defmethod gen :vector [[_ {:keys [size]} sub-schema] schemas]
  (vec (repeatedly (gen-size size) #(gen sub-schema schemas))))

(defmethod gen :set [[_ {:keys [size]} sub-schema] schemas]
  (set (repeatedly (gen-size size) #(gen sub-schema schemas))))

(defmethod gen :sorted-set [[_ {:keys [size]} sub-schema] schemas]
  (into (sorted-set)
        (repeatedly (gen-size size)
                    #(gen sub-schema schemas))))

(defmethod gen :map [[_ {:keys [size]} key-schema value-schema] schemas]
  (let [size-value (gen-size size)]
    (zipmap (repeatedly size-value #(gen key-schema schemas))
            (repeatedly size-value #(gen value-schema schemas)))))

(defmethod gen :sorted-map [[_ {:keys [size]} key-schema value-schema] schemas]
  (let [size-value (gen-size size)]
    (into (sorted-map)
          (zipmap (repeatedly size-value #(gen key-schema schemas))
                  (repeatedly size-value #(gen value-schema schemas))))))

(defmethod gen :tuple [[_ _ sub-schemas] schemas]
  (vec (map #(gen % schemas) sub-schemas)))

(defmethod gen :optional [[_ _ sub-schema] schemas]
  (when (gen :boolean schemas)
    (gen sub-schema schemas)))

(defmethod gen :enum [[_ _ values] _]
  (rand-nth values))

(defmethod gen :record [[_ _ record-map] schemas]
  (into {} (for [[key value-schema] record-map]
             [key (gen value-schema schemas)])))

(defmethod gen :multi [[_ _ _ multi-map] schemas]
  (gen (rand-nth (vals multi-map)) schemas))

(defn sample [n schema schemas]
  (repeatedly n #(gen schema schemas)))