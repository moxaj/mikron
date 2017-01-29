#!/bin/sh

sudo apt-get install libstdc++6

strings /usr/lib/libstdc++.so.6 | grep GLIBCXX
