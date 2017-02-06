#!/bin/bash

npm install -g lumo-cljs
sh -e /etc/init.d/xvfb start

if [ ! -d $TRAVIS_BUILD_DIR/slimerjs ]; then
  wget http://download.slimerjs.org/releases/0.10.2/slimerjs-0.10.2.zip
  unzip slimerjs-0.10.2.zip
  mv slimerjs-0.10.2 $TRAVIS_BUILD_DIR/slimerjs
fi
