(ns generate-cljs-cache
  (:require [clojure.string :as string]))

(def nexeres (js/require "nexeres"))

(def mkdirp (js/require "mkdirp"))

(doseq [resource (filter #(re-matches #"cljs.*" %) (.keys nexeres))]
  (let [filename (str "docs\\cache-cljs\\" (string/replace resource #"[/\\]" "_SLASH_"))]
    (mkdirp (js/path.dirname filename)
            #(js/fs.writeFile filename (js/zlib.inflateSync (.get nexeres resource)) (constantly true)))))
