(ns mikron.core
  "Public API facade."
  (:require #?@(:clj  [[mikron.processor :as processor]]
                :cljs [[mikron.buffer]
                       [mikron.common]]))
  #?(:cljs (:require-macros [mikron.processor :as processor]
                            [mikron.core])))

#?(:clj (defmacro make-processors [options]
          `(processor/make-processors ~options)))

#?(:clj (defmacro defprocessors [names options]
          `(processor/defprocessors ~names ~options)))
