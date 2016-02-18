(ns seria.flow)

"Extensions:
 - automatic delta groups and stuff
   :autodiff? to enable
   :group to select group
   incremental strategy: every n. is full, inbetween is diffed
     with previous full
   reserve 2 bytes for delta group
   "
