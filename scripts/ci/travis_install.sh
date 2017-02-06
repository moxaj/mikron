#!/bin/bash

CACHE_DIR=$TRAVIS_BUILD_DIR/dep_cache

if [ ! -d $CACHE_DIR/lumo]; then
  wget https://github.com/anmonteiro/lumo/releases/download/1.1.0/lumo_linux64.zip
  unzip lumo_linux64.zip
  mv lumo $CACHE_DIR/lumo/lumo
fi

PATH=$CACHE_DIR/lumo:$PATH

if [ ! -d $CACHE_DIR/slimerjs]; then
  wget http://download.slimerjs.org/releases/0.10.2/slimerjs-0.10.2.zip
  unzip slimerjs-0.10.2.zip
  mv slimerjs-0.10.2 $CACHE_DIR/slimerjs
fi

PATH=$CACHE_DIR/slimerjs:$PATH

wget https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh
mv boot.sh boot
chmod a+x boot
sudo mv boot /usr/local/bin
boot -u
