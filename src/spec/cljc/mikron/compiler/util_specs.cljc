(ns mikron.compiler.util-specs
  (:require [clojure.spec.alpha :as s]))

(s/def ::symbols
  (s/coll-of symbol? :kind vector?))

(s/def ::with-gensyms-args
  (s/cat :syms ::symbols
         :body (s/* any?)))

(s/def ::with-evaluated-args
  (s/cat :syms ::symbols
         :body (s/* any?)))

(s/def ::gen-syms ::symbols)

(s/def ::eval-syms ::symbols)

(s/def ::macro-context-args
  (s/cat :context (s/keys :opt-un [::gen-syms ::eval-syms])
         :body    (s/* any?)))
