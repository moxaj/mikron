(ns mikron.runtime.buffer-macros
  (:require [mikron.compiler.spec :as compiler.spec]
            [mikron.compiler.util :as compiler.util])
  #?(:cljs (:require-macros [mikron.runtime.buffer-macros])))

(defmacro with-delta
  "Executes `body` and updates the position `pos` with the delta `delta`."
  [pos delta body]
  (compiler.util/with-gensyms [value]
    `(let [~value ~body]
       (set! ~pos (unchecked-add ~pos ~delta))
       ~value)))

(defmacro with-le
  "Executes the expressions with the endianness automatically set to `le`."
  [le [method & args]]
  `(if ~le
     (~(symbol (str method "LE")) ~@args)
     (~(symbol (str method "BE")) ~@args)))

(defn without-hint
  "Removes the type hint metadata from `value`."
  [value]
  (vary-meta value dissoc :tag))

(defn without-primitive-hint
  "Removes the primitive type hint metadata from `value`."
  [value]
  (vary-meta value (fn [{:keys [tag] :as meta}]
                     (cond-> meta
                       (#{'long 'double} tag) (dissoc :tag)))))

(defn can-have-metadata?
  "Returns `true` if `value` can have metadata, `false` otherwise."
  [value]
  (or (symbol? value) (coll? value)))

(defn with-runtime-hint
  "Takes the metadata of `value` and returns a piece of code which reapplies it to what `value` evaluates to."
  [value]
  `(if-not (can-have-metadata? ~value)
     ~value
     (vary-meta ~value assoc :tag '~(:tag (meta value)))))

(defmacro definterface+
  "Expands to a `definterface` call in clj, `defprotocol` call in cljs."
  [& args]
  (let [{:keys [interface-name ops]} (compiler.spec/enforce ::compiler.spec/definterface+-args args)]
    (if (compiler.util/cljs?)
      `(defprotocol ~interface-name
         ~@(map (fn [{:keys [op-name args docs]}]
                  `(~(without-hint op-name)
                    ~(into [(gensym "this")] (map without-hint args))
                    ~@(when docs [docs])))
                ops))
      `(do (definterface ~interface-name
             ~@(map (fn [{:keys [op-name args docs]}]
                      `(~(with-meta (munge op-name) (meta op-name))
                        ~args
                        ~@(when docs [docs])))
                    ops))
           ~@(map (fn [{:keys [op-name args docs]}]
                    (let [munged-name (symbol (str "." (munge op-name)))
                          args        (with-meta (into [(with-meta (gensym "this")
                                                                   {:tag (symbol (str (ns-name *ns*) "." interface-name))})]
                                                       args)
                                                 (meta op-name))]
                      `(defn ~(without-hint op-name)
                         ~@(when docs [docs])
                         {:inline (fn ~(mapv without-hint args)
                                    `(~'~munged-name
                                      ~~@(map (comp with-runtime-hint without-primitive-hint) args)))}
                         ~args
                         (~munged-name ~@(map without-hint args)))))
                  ops)))))
