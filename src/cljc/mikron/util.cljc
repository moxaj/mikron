(ns mikron.util
  "Runtime generic functions.")

(defn exception [^String s]
  #?(:clj  (Exception. s)
     :cljs (js/Error. s)))

(defn into!
  ([coll ^long n f]
   (loop [i 0 coll' (transient coll)]
     (if (== i n)
       (persistent! coll')
       (recur (inc i) (conj! coll' (f))))))
  ([map ^long n kf vf]
   (loop [i 0 map' (transient map)]
     (if (== i n)
       (persistent! map')
       (recur (inc i) (assoc! map' (kf) (vf)))))))

(defn bimap
  ([coll]
   (bimap coll 0))
  ([coll min-index]
   (let [indices (iterate inc min-index)]
     (into {} (concat (map vector coll indices)
                      (map vector indices coll))))))

;; schema ids

(defonce schema-ids (atom {}))

(defn register-schemas [schema-names]
  (swap! schema-ids
         (fn [schema-ids]
           (if (empty? schema-ids)
             (bimap schema-names)
             (merge schema-ids
                    (bimap schema-names
                           (->> (keys schema-ids)
                                (filter number?)
                                (apply max)
                                (inc))))))))

;; multimethods

(defmulti process (fn [processor-type schema & _]
                    [processor-type schema]))

(defmethod process :default [_ schema & _]
  (throw (exception (str "No such schema: " schema "!"))))

;; environment
#?(:cljs
   (defn node-env? []
     (= "nodejs" cljs.core/*target*)))
