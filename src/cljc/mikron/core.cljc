(ns mikron.core
  "Public API facade."
  (:require [mikron.buffer :as buffer]
            [mikron.common :as common]
            #?(:clj [mikron.processor :as processor]))
  #?(:cljs (:require-macros [mikron.processor :as processor]
                            [mikron.core])))

#?(:clj
   (do (defmacro defprocessors [names options]
         `(processor/defprocessors ~names ~options))

       (defmacro with-buffer [buffer & body]
         `(binding [buffer/*buffer* ~buffer]
            ~@body))))

(defn allocate-buffer [size]
  (buffer/allocate size))
