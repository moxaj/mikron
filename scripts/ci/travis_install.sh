#!/bin/bash

if [ ! -d $CACHE_DIR/lumo ]; then
  wget https://github.com/anmonteiro/lumo/releases/download/1.1.0/lumo_linux64.zip
  unzip lumo_linux64.zip
  chmod a+x lumo
  mkdir -p $CACHE_DIR/lumo
  mv lumo $CACHE_DIR/lumo/lumo
fi

if [ ! -d $CACHE_DIR/slimerjs ]; then
  wget http://download.slimerjs.org/releases/0.10.2/slimerjs-0.10.2.zip
  unzip slimerjs-0.10.2.zip
  mv slimerjs-0.10.2 $CACHE_DIR/slimerjs
fi

if [ ! -d $CACHE_DIR/boot ]; then
  wget https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh
  mv boot.sh boot
  chmod a+x boot
  mkdir -p $CACHE_DIR/boot
  mv boot $CACHE_DIR/boot/boot boot
fi
