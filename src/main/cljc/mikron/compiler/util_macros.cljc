(ns mikron.compiler.util-macros
  #?(:cljs [:require-macros mikron.compiler.util-macros]))

(defmacro compile-time
  "Emits the body only at compile time."
  [& body]
  (when #?(:clj  (not (:ns &env))
           :cljs (re-matches #".*\$macros" (name (ns-name *ns*))))
    `(do ~@body)))