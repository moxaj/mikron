(ns mikron.runtime.buffer-macros
  "`mikron.runtime.buffer` macros namespace."
  (:require [macrowbar.core :as macrowbar]
            [mikron.runtime.buffer-specs :as buffer-specs])
  #?(:cljs (:require-macros [mikron.runtime.buffer-macros])))

(macrowbar/compile-time
  (defmacro with-delta
    "Executes `body` and updates the position `pos` with the delta `delta`."
    [pos delta body]
    (macrowbar/macro-context {:gen-syms [value]}
      `(let [~value ~body]
         (set! ~pos (unchecked-add ~pos ~delta))
         ~value)))

  (defmacro with-le
    "Executes the expressions with the endianness automatically set to `le`."
    [le [method & args]]
    `(if ~le
       (~(symbol (str method "LE")) ~@args)
       (~(symbol (str method "BE")) ~@args)))

  (defn without-tag
    "Removes the `tag` metadata from `value`."
    [value]
    (vary-meta value dissoc :tag))

  (defn without-primitive-tag
    "Removes the primitive `tag` metadata from `value`."
    [value]
    (vary-meta value (fn [{:keys [tag] :as meta}]
                       (cond-> meta
                         (#{'long 'double} tag) (dissoc :tag)))))

  (defn can-have-metadata?
    "Returns `true` if `value` can have metadata, `false` otherwise."
    [value]
    (or (symbol? value) (coll? value)))

  (defn with-runtime-tag
    "Takes the `tag` metadata of `value` and returns a piece of code which reapplies it to what `value` evaluates to."
    [value]
    `(if-not (can-have-metadata? ~value)
       ~value
       (vary-meta ~value assoc :tag '~(:tag (meta value)))))

  (defmacro definterface+
    "Expands to a `definterface` call in clj, `defprotocol` call in cljs."
    [& args]
    (let [{:keys [interface-name ops]} (macrowbar/enforce-spec ::buffer-specs/definterface+-args args)]
      (if (macrowbar/cljs? &env)
        `(defprotocol ~interface-name
           ~@(map (fn [{:keys [op-name args docs]}]
                    `(~(without-tag op-name)
                      ~(into [(gensym "this")] (map without-tag args))
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
                        `(defn ~(without-tag op-name)
                           ~@(when docs [docs])
                           {:inline (fn ~(mapv without-tag args)
                                      `(~'~munged-name
                                        ~~@(map (comp with-runtime-tag without-primitive-tag) args)))}
                           ~args
                           (~munged-name ~@(map without-tag args)))))
                    ops))))))
