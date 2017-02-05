goog.provide("mikron.test_macros");
/**
 * Extended equality checker for byte[] and ArrayBuffer.
 */
mikron.test_macros.equal_QMARK_ = (function mikron$test_macros$equal_QMARK_(x,y){
if(cljs.core.not_EQ_.call(null,cljs.core.type.call(null,x),ArrayBuffer)){
return cljs.core._EQ_.call(null,x,y);
} else {
return cljs.core._EQ_.call(null,cljs.core.seq.call(null,Array.from((new Int8Array(x)))),cljs.core.seq.call(null,Array.from((new Int8Array(y)))));
}
});
if(typeof mikron.test_macros.test_mikron !== 'undefined'){
} else {
/**
 * Test function for :pack, :diff, :valid? and :interp processors.
 */
mikron.test_macros.test_mikron = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.test-macros","test-mikron"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (method,schema,dataset){
return method;
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})();
}
cljs.core._add_method.call(null,mikron.test_macros.test_mikron,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),(function (_,schema,dataset){
var seq__1095 = cljs.core.seq.call(null,dataset);
var chunk__1096 = null;
var count__1097 = (0);
var i__1098 = (0);
while(true){
if((i__1098 < count__1097)){
var value = cljs.core._nth.call(null,chunk__1096,i__1098);
try{var values__36__auto___1101 = (function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.unpack.call(null,schema,mikron.core.pack.call(null,schema,value));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1102 = cljs.core.apply.call(null,mikron.test_macros.equal_QMARK_,values__36__auto___1101);
if(cljs.core.truth_(result__37__auto___1102)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.test_macros.equal_QMARK_,values__36__auto___1101)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),values__36__auto___1101);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1099){var t__45__auto___1103 = e1099;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1103], null));
}
var G__1104 = seq__1095;
var G__1105 = chunk__1096;
var G__1106 = count__1097;
var G__1107 = (i__1098 + (1));
seq__1095 = G__1104;
chunk__1096 = G__1105;
count__1097 = G__1106;
i__1098 = G__1107;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__1095);
if(temp__19650__auto__){
var seq__1095__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1095__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__1095__$1);
var G__1108 = cljs.core.chunk_rest.call(null,seq__1095__$1);
var G__1109 = c__25653__auto__;
var G__1110 = cljs.core.count.call(null,c__25653__auto__);
var G__1111 = (0);
seq__1095 = G__1108;
chunk__1096 = G__1109;
count__1097 = G__1110;
i__1098 = G__1111;
continue;
} else {
var value = cljs.core.first.call(null,seq__1095__$1);
try{var values__36__auto___1112 = (function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.unpack.call(null,schema,mikron.core.pack.call(null,schema,value));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1113 = cljs.core.apply.call(null,mikron.test_macros.equal_QMARK_,values__36__auto___1112);
if(cljs.core.truth_(result__37__auto___1113)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.test_macros.equal_QMARK_,values__36__auto___1112)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),values__36__auto___1112);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1100){var t__45__auto___1114 = e1100;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1114], null));
}
var G__1115 = cljs.core.next.call(null,seq__1095__$1);
var G__1116 = null;
var G__1117 = (0);
var G__1118 = (0);
seq__1095 = G__1115;
chunk__1096 = G__1116;
count__1097 = G__1117;
i__1098 = G__1118;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros.test_mikron,new cljs.core.Keyword(null,"diff","diff",(2135942783)),(function (_,schema,dataset){
var seq__1119 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),dataset));
var chunk__1120 = null;
var count__1121 = (0);
var i__1122 = (0);
while(true){
if((i__1122 < count__1121)){
var vec__1123 = cljs.core._nth.call(null,chunk__1120,i__1122);
var value_1 = cljs.core.nth.call(null,vec__1123,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1123,(1),null);
try{var values__36__auto___1131 = (function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.undiff.call(null,schema,value_1,mikron.core.diff.call(null,schema,value_1,value_2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1132 = cljs.core.apply.call(null,cljs.core._EQ_,values__36__auto___1131);
if(cljs.core.truth_(result__37__auto___1132)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__36__auto___1131)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__36__auto___1131);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1126){var t__45__auto___1133 = e1126;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1133], null));
}
var G__1134 = seq__1119;
var G__1135 = chunk__1120;
var G__1136 = count__1121;
var G__1137 = (i__1122 + (1));
seq__1119 = G__1134;
chunk__1120 = G__1135;
count__1121 = G__1136;
i__1122 = G__1137;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__1119);
if(temp__19650__auto__){
var seq__1119__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1119__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__1119__$1);
var G__1138 = cljs.core.chunk_rest.call(null,seq__1119__$1);
var G__1139 = c__25653__auto__;
var G__1140 = cljs.core.count.call(null,c__25653__auto__);
var G__1141 = (0);
seq__1119 = G__1138;
chunk__1120 = G__1139;
count__1121 = G__1140;
i__1122 = G__1141;
continue;
} else {
var vec__1127 = cljs.core.first.call(null,seq__1119__$1);
var value_1 = cljs.core.nth.call(null,vec__1127,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1127,(1),null);
try{var values__36__auto___1142 = (function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.undiff.call(null,schema,value_1,mikron.core.diff.call(null,schema,value_1,value_2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1143 = cljs.core.apply.call(null,cljs.core._EQ_,values__36__auto___1142);
if(cljs.core.truth_(result__37__auto___1143)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__36__auto___1142)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__36__auto___1142);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1130){var t__45__auto___1144 = e1130;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1144], null));
}
var G__1145 = cljs.core.next.call(null,seq__1119__$1);
var G__1146 = null;
var G__1147 = (0);
var G__1148 = (0);
seq__1119 = G__1145;
chunk__1120 = G__1146;
count__1121 = G__1147;
i__1122 = G__1148;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros.test_mikron,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),(function (_,schema,dataset){
var seq__1149 = cljs.core.seq.call(null,dataset);
var chunk__1150 = null;
var count__1151 = (0);
var i__1152 = (0);
while(true){
if((i__1152 < count__1151)){
var value = cljs.core._nth.call(null,chunk__1150,i__1152);
try{var values__36__auto___1155 = (function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1156 = cljs.core.apply.call(null,mikron.core.valid_QMARK_,values__36__auto___1155);
if(cljs.core.truth_(result__37__auto___1156)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.core.valid_QMARK_,values__36__auto___1155)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),values__36__auto___1155);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1153){var t__45__auto___1157 = e1153;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1157], null));
}
var G__1158 = seq__1149;
var G__1159 = chunk__1150;
var G__1160 = count__1151;
var G__1161 = (i__1152 + (1));
seq__1149 = G__1158;
chunk__1150 = G__1159;
count__1151 = G__1160;
i__1152 = G__1161;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__1149);
if(temp__19650__auto__){
var seq__1149__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1149__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__1149__$1);
var G__1162 = cljs.core.chunk_rest.call(null,seq__1149__$1);
var G__1163 = c__25653__auto__;
var G__1164 = cljs.core.count.call(null,c__25653__auto__);
var G__1165 = (0);
seq__1149 = G__1162;
chunk__1150 = G__1163;
count__1151 = G__1164;
i__1152 = G__1165;
continue;
} else {
var value = cljs.core.first.call(null,seq__1149__$1);
try{var values__36__auto___1166 = (function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1167 = cljs.core.apply.call(null,mikron.core.valid_QMARK_,values__36__auto___1166);
if(cljs.core.truth_(result__37__auto___1167)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.core.valid_QMARK_,values__36__auto___1166)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),values__36__auto___1166);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e1154){var t__45__auto___1168 = e1154;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1168], null));
}
var G__1169 = cljs.core.next.call(null,seq__1149__$1);
var G__1170 = null;
var G__1171 = (0);
var G__1172 = (0);
seq__1149 = G__1169;
chunk__1150 = G__1170;
count__1151 = G__1171;
i__1152 = G__1172;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros.test_mikron,new cljs.core.Keyword(null,"interp","interp",(1576701107)),(function (_,schema,dataset){
var seq__1173 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),dataset));
var chunk__1174 = null;
var count__1175 = (0);
var i__1176 = (0);
while(true){
if((i__1176 < count__1175)){
var vec__1177 = cljs.core._nth.call(null,chunk__1174,i__1176);
var value_1 = cljs.core.nth.call(null,vec__1177,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1177,(1),null);
mikron.core.interp.call(null,schema,value_1,value_2,(0),(1),(0.5));

var G__1183 = seq__1173;
var G__1184 = chunk__1174;
var G__1185 = count__1175;
var G__1186 = (i__1176 + (1));
seq__1173 = G__1183;
chunk__1174 = G__1184;
count__1175 = G__1185;
i__1176 = G__1186;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__1173);
if(temp__19650__auto__){
var seq__1173__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1173__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__1173__$1);
var G__1187 = cljs.core.chunk_rest.call(null,seq__1173__$1);
var G__1188 = c__25653__auto__;
var G__1189 = cljs.core.count.call(null,c__25653__auto__);
var G__1190 = (0);
seq__1173 = G__1187;
chunk__1174 = G__1188;
count__1175 = G__1189;
i__1176 = G__1190;
continue;
} else {
var vec__1180 = cljs.core.first.call(null,seq__1173__$1);
var value_1 = cljs.core.nth.call(null,vec__1180,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1180,(1),null);
mikron.core.interp.call(null,schema,value_1,value_2,(0),(1),(0.5));

var G__1191 = cljs.core.next.call(null,seq__1173__$1);
var G__1192 = null;
var G__1193 = (0);
var G__1194 = (0);
seq__1173 = G__1191;
chunk__1174 = G__1192;
count__1175 = G__1193;
i__1176 = G__1194;
continue;
}
} else {
return null;
}
}
break;
}
}));
/**
 * Generates test methods for all the test cases.
 */
mikron.test_macros.def_mikron_tests = (function mikron$test_macros$def_mikron_tests(_AMPERSAND_form,_AMPERSAND_env,test_cases){
var dataset = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"dataset"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.test_macros,new cljs.core.Keyword(null,"line","line",(212345235)),(42),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(42),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(38)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var iter__21826__auto__ = ((function (dataset){
return (function mikron$test_macros$def_mikron_tests_$_iter__1227(s__1228){
return (new cljs.core.LazySeq(null,((function (dataset){
return (function (){
var s__1228__$1 = s__1228;
while(true){
var temp__19650__auto__ = cljs.core.seq.call(null,s__1228__$1);
if(temp__19650__auto__){
var s__1228__$2 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1228__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__1228__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__1230 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__1229 = (0);
while(true){
if((i__1229 < size__21825__auto__)){
var vec__1245 = cljs.core._nth.call(null,c__21824__auto__,i__1229);
var schema_name = cljs.core.nth.call(null,vec__1245,(0),null);
var schema = cljs.core.nth.call(null,vec__1245,(1),null);
cljs.core.chunk_append.call(null,b__1230,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","schema","mikron.core/schema",(-2112715723),null)),(function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",(-1346003388),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(100)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","gen","mikron.core/gen",(-370631656),null)),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var iter__21826__auto__ = ((function (i__1229,vec__1245,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1230,s__1228__$2,temp__19650__auto__,dataset){
return (function mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1248(s__1249){
return (new cljs.core.LazySeq(null,((function (i__1229,vec__1245,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1230,s__1228__$2,temp__19650__auto__,dataset){
return (function (){
var s__1249__$1 = s__1249;
while(true){
var temp__19650__auto____$1 = cljs.core.seq.call(null,s__1249__$1);
if(temp__19650__auto____$1){
var s__1249__$2 = temp__19650__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1249__$2)){
var c__21824__auto____$1 = cljs.core.chunk_first.call(null,s__1249__$2);
var size__21825__auto____$1 = cljs.core.count.call(null,c__21824__auto____$1);
var b__1251 = cljs.core.chunk_buffer.call(null,size__21825__auto____$1);
if((function (){var i__1250 = (0);
while(true){
if((i__1250 < size__21825__auto____$1)){
var method = cljs.core._nth.call(null,c__21824__auto____$1,i__1250);
cljs.core.chunk_append.call(null,b__1251,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.test-macros","test-mikron","mikron.test-macros/test-mikron",(-2070612709),null)),(function (){var x__25689__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));

var G__1259 = (i__1250 + (1));
i__1250 = G__1259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1251),mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1248.call(null,cljs.core.chunk_rest.call(null,s__1249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1251),null);
}
} else {
var method = cljs.core.first.call(null,s__1249__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.test-macros","test-mikron","mikron.test-macros/test-mikron",(-2070612709),null)),(function (){var x__25689__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())),mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1248.call(null,cljs.core.rest.call(null,s__1249__$2)));
}
} else {
return null;
}
break;
}
});})(i__1229,vec__1245,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1230,s__1228__$2,temp__19650__auto__,dataset))
,null,null));
});})(i__1229,vec__1245,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1230,s__1228__$2,temp__19650__auto__,dataset))
;
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.test_macros.test_mikron)));
})())));

var G__1260 = (i__1229 + (1));
i__1229 = G__1260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1230),mikron$test_macros$def_mikron_tests_$_iter__1227.call(null,cljs.core.chunk_rest.call(null,s__1228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1230),null);
}
} else {
var vec__1252 = cljs.core.first.call(null,s__1228__$2);
var schema_name = cljs.core.nth.call(null,vec__1252,(0),null);
var schema = cljs.core.nth.call(null,vec__1252,(1),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","schema","mikron.core/schema",(-2112715723),null)),(function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","repeatedly","cljs.core/repeatedly",(-1346003388),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(100)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","gen","mikron.core/gen",(-370631656),null)),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var iter__21826__auto__ = ((function (vec__1252,schema_name,schema,s__1228__$2,temp__19650__auto__,dataset){
return (function mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1255(s__1256){
return (new cljs.core.LazySeq(null,((function (vec__1252,schema_name,schema,s__1228__$2,temp__19650__auto__,dataset){
return (function (){
var s__1256__$1 = s__1256;
while(true){
var temp__19650__auto____$1 = cljs.core.seq.call(null,s__1256__$1);
if(temp__19650__auto____$1){
var s__1256__$2 = temp__19650__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1256__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__1256__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__1258 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__1257 = (0);
while(true){
if((i__1257 < size__21825__auto__)){
var method = cljs.core._nth.call(null,c__21824__auto__,i__1257);
cljs.core.chunk_append.call(null,b__1258,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.test-macros","test-mikron","mikron.test-macros/test-mikron",(-2070612709),null)),(function (){var x__25689__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));

var G__1261 = (i__1257 + (1));
i__1257 = G__1261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1258),mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1255.call(null,cljs.core.chunk_rest.call(null,s__1256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1258),null);
}
} else {
var method = cljs.core.first.call(null,s__1256__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.test-macros","test-mikron","mikron.test-macros/test-mikron",(-2070612709),null)),(function (){var x__25689__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = dataset;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())),mikron$test_macros$def_mikron_tests_$_iter__1227_$_iter__1255.call(null,cljs.core.rest.call(null,s__1256__$2)));
}
} else {
return null;
}
break;
}
});})(vec__1252,schema_name,schema,s__1228__$2,temp__19650__auto__,dataset))
,null,null));
});})(vec__1252,schema_name,schema,s__1228__$2,temp__19650__auto__,dataset))
;
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.test_macros.test_mikron)));
})())),mikron$test_macros$def_mikron_tests_$_iter__1227.call(null,cljs.core.rest.call(null,s__1228__$2)));
}
} else {
return null;
}
break;
}
});})(dataset))
,null,null));
});})(dataset))
;
return iter__21826__auto__.call(null,test_cases);
})()));
});

mikron.test_macros.def_mikron_tests.cljs$lang$macro = true;
