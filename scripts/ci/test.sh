#!/bin/bash

if [ $SELF_HOSTED == true ]; then
  boot autotest -p $PLATFORM -t $TARGET -so $OPT
else
  boot autotest -p $PLATFORM -t $TARGET -o $OPT
fi
