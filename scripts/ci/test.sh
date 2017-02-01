#!/bin/sh

if [ $PLATFORM == clj ] then
  lein do clean, javac, test
else
  if [ $SELF_HOSTED == true ] then
    if [ $TARGET == node ] then
      lumo -vc `lein classpath` -k lumo_cache scripts/ci/lumo.clj
    fi # TODO add browser branch
  else
    lein do clean, javac, cljsbuild once $TARGET
    if [ $TARGET == node ] then
      node resources/test/node/app.js
    fi # TODO add browser branch
  fi
fi
