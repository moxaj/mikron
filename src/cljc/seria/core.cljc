(ns seria.core
  "Public API facade."
  (:require #?@(:clj  [[seria.processor :as processor]]
                :cljs [[seria.buffer]
                       [seria.common]]))
  #?(:cljs (:require-macros [seria.processor :as processor]
                            [seria.core])))

#?(:clj (defmacro make-processors [options]
          `(processor/make-processors ~options)))

#?(:clj (defmacro defprocessors [names options]
          `(processor/defprocessors ~names ~options)))

#?(:clj (defn make-test-processors [options]
          (processor/make-test-processors options)))
