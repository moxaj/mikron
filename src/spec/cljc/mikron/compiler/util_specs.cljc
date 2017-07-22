(ns mikron.compiler.util-specs
  (:require [clojure.spec.alpha :as s]
            [macrowbar.core :as macrowbar]))

(macrowbar/compile-time
  (s/def ::symbols
    (s/coll-of symbol? :kind vector?))

  (s/def ::with-gensyms-args
    (s/cat :syms ::symbols
           :body (s/* any?)))

  (s/def ::with-evaluated-args
    (s/cat :syms ::symbols
           :body (s/* any?)))

  (s/def ::syntax-cond->-args
    (s/cat :expr       any?
           :alias      simple-symbol?
           :cond+exprs (s/* (s/cat :cond any?
                                   :expr any?))))

  (s/def ::gen-syms ::symbols)

  (s/def ::eval-syms ::symbols)

  (s/def ::macro-context-args
    (s/cat :context (s/keys :opt-un [::gen-syms ::eval-syms])
           :body    (s/* any?))))
