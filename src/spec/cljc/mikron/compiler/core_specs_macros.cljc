(ns mikron.compiler.core-specs-macros
  "`mikron.compiler.core-specs` macro namespace."
  (:require [clojure.spec.alpha :as s])
  #?(:cljs (:require-macros [mikron.compiler.core-specs-macros])))

(defmacro schema-spec*
  "Helper macro for shorthand schema spec definition."
  [options & fields]
  `(s/and (s/or ~@(when (empty? fields)
                    [:simple `(s/and keyword? (s/conformer vector))])
                :complex (s/and (s/cat :type    keyword?
                                       :options (s/? (s/nilable (s/keys :opt-un ~options)))
                                       ~@fields)
                                (s/conformer (juxt :type
                                                   #(or (:options %) {})
                                                   ~@(take-nth 2 fields)))))
          (s/conformer second)))
