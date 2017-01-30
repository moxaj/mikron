#!/bin/sh

node -v

case "$PLATFORM" in
  "clj")
    lein do clean, javac, test ;;
  "cljs_browser")
    lein do clean, javac, test ;; # TODO phantomjs
  "cljs_node")
    lein do clean, javac, cljsbuild once node
    node resources/test/node/app.js ;;
esac
