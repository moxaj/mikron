#!/bin/sh

case "$PLATFORM" in
  "clj")
    lein do clean, javac, test ;;
  "cljs_browser")
    lein do clean, javac, test ;;
  "cljs_node")
    lein do clean, javac, test ;;
esac
