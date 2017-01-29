(ns mikron.spec-macros
  (:require [clojure.spec :as s])
  #?(:cljs (:require-macros [mikron.spec-macros])))

(defmacro schema-spec*
  "Helper macro for shorthand schema spec definition."
  [options & fields]
  `(s/and (s/or ~@(when (empty? fields)
                    [:simple `(s/and keyword? (s/conformer vector))])
                :complex (s/and (s/cat :type    keyword?
                                       :options (s/? (s/nilable (s/keys :opt-un ~options)))
                                       ~@fields)
                                (s/conformer (juxt :type :options ~@(take-nth 2 fields)))))
          (s/conformer second)))
