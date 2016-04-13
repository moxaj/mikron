(ns incubator.validate
  "Validator generating functions."
  (:require [seria.util :as util]
            [seria.type :as type]))

(def ^:dynamic *options*)

(defn integer-bounds [bytes signed?]
  (let [max-value      (long (Math/pow 2 (* bytes 8)))
        half-max-value (/ max-value 2)]
    (if signed?
      [(- half-max-value) (dec half-max-value)]
      [0 (dec max-value)])))

(defmacro fits? [value [lower-bound upper-bound]]
  `(<= lower-bound value upper-bound))

(defmacro cond-not [& args]
  `(cond ~@(->> args
                (partition 2)
                (mapcat (fn [[arg-1 arg-2]]
                          (if (= :else arg-1)
                            [:else arg-2]
                            [`(not ~arg-1) arg-2]))))))

(defmacro validate-integer [value bytes signed?]
  `(cond-not
     (number? ~value) "Expected:"))

(defmulti validate type/type-of :default :custom)

(defmethod validate :byte [_ value]
  `(fits? value ~(integer-bounds 1 true)))

(defmethod validate :ubyte [_ value]
  `(fits? value ~(integer-bounds 1 false)))

(defmethod validate :short [_ value]
  `(fits? value ~(integer-bounds 2 true)))

(defmethod validate :ushort [_ value]
  `(fits? value ~(integer-bounds 2 false)))

(defmethod validate :int [_ value]
  `(fits? value ~(integer-bounds 4 true)))

(defmethod validate :uint [_ value]
  `(fits? value ~(integer-bounds 4 false)))

(defmethod validate :long [_ value]
  `(fits? value ~(integer-bounds 8 true)))

(defmethod validate :byte [_ value]
  `(fits? value ~(integer-bounds 1 true)))

(defmethod validate :byte [_ value]
  `(fits? value ~(integer-bounds 1 true)))

(defmethod validate :byte [_ value]
  `(fits? value ~(integer-bounds 1 true)))

(defn make-validator [schema config]
  (let [value (gensym "value_")]
    (binding [*options* {:config config}]
      `([~value]
        ~(validate schema value)))))
