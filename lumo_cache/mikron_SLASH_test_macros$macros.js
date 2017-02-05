goog.provide("mikron.test_macros$macros");
/**
 * Extended equality checker for byte[] and ArrayBuffer.
 */
mikron.test_macros$macros.equal_QMARK_ = (function mikron$test_macros$macros$equal_QMARK_(x,y){
if(cljs.core.not_EQ_.call(null,cljs.core.type.call(null,x),ArrayBuffer)){
return cljs.core._EQ_.call(null,x,y);
} else {
return cljs.core._EQ_.call(null,cljs.core.seq.call(null,Array.from((new Int8Array(x)))),cljs.core.seq.call(null,Array.from((new Int8Array(y)))));
}
});
if(typeof mikron.test_macros$macros.test_mikron !== 'undefined'){
} else {
/**
 * Test function for :pack, :diff, :valid? and :interp processors.
 */
mikron.test_macros$macros.test_mikron = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.test-macros$macros","test-mikron"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (method,schema,dataset){
return method;
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})();
}
cljs.core._add_method.call(null,mikron.test_macros$macros.test_mikron,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),(function (_,schema,dataset){
var seq__928 = cljs.core.seq.call(null,dataset);
var chunk__929 = null;
var count__930 = (0);
var i__931 = (0);
while(true){
if((i__931 < count__930)){
var value = cljs.core._nth.call(null,chunk__929,i__931);
try{var values__36__auto___934 = (function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.unpack.call(null,schema,mikron.core.pack.call(null,schema,value));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___935 = cljs.core.apply.call(null,mikron.test_macros$macros.equal_QMARK_,values__36__auto___934);
if(cljs.core.truth_(result__37__auto___935)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.test_macros$macros.equal_QMARK_,values__36__auto___934)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),values__36__auto___934);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e932){var t__45__auto___936 = e932;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___936], null));
}
var G__937 = seq__928;
var G__938 = chunk__929;
var G__939 = count__930;
var G__940 = (i__931 + (1));
seq__928 = G__937;
chunk__929 = G__938;
count__930 = G__939;
i__931 = G__940;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__928);
if(temp__19650__auto__){
var seq__928__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__928__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__928__$1);
var G__941 = cljs.core.chunk_rest.call(null,seq__928__$1);
var G__942 = c__25653__auto__;
var G__943 = cljs.core.count.call(null,c__25653__auto__);
var G__944 = (0);
seq__928 = G__941;
chunk__929 = G__942;
count__930 = G__943;
i__931 = G__944;
continue;
} else {
var value = cljs.core.first.call(null,seq__928__$1);
try{var values__36__auto___945 = (function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.unpack.call(null,schema,mikron.core.pack.call(null,schema,value));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___946 = cljs.core.apply.call(null,mikron.test_macros$macros.equal_QMARK_,values__36__auto___945);
if(cljs.core.truth_(result__37__auto___946)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.test_macros$macros.equal_QMARK_,values__36__auto___945)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),values__36__auto___945);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e933){var t__45__auto___947 = e933;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"equal?","equal?",(-1795638954),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),cljs.core.list(new cljs.core.Symbol("mikron","pack","mikron/pack",(-674204222),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)),cljs.core.list(new cljs.core.Symbol("mikron","unpack","mikron/unpack",(687841491),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___947], null));
}
var G__948 = cljs.core.next.call(null,seq__928__$1);
var G__949 = null;
var G__950 = (0);
var G__951 = (0);
seq__928 = G__948;
chunk__929 = G__949;
count__930 = G__950;
i__931 = G__951;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros$macros.test_mikron,new cljs.core.Keyword(null,"diff","diff",(2135942783)),(function (_,schema,dataset){
var seq__952 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),dataset));
var chunk__953 = null;
var count__954 = (0);
var i__955 = (0);
while(true){
if((i__955 < count__954)){
var vec__956 = cljs.core._nth.call(null,chunk__953,i__955);
var value_1 = cljs.core.nth.call(null,vec__956,(0),null);
var value_2 = cljs.core.nth.call(null,vec__956,(1),null);
try{var values__36__auto___964 = (function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.undiff.call(null,schema,value_1,mikron.core.diff.call(null,schema,value_1,value_2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___965 = cljs.core.apply.call(null,cljs.core._EQ_,values__36__auto___964);
if(cljs.core.truth_(result__37__auto___965)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__36__auto___964)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__36__auto___964);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e959){var t__45__auto___966 = e959;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___966], null));
}
var G__967 = seq__952;
var G__968 = chunk__953;
var G__969 = count__954;
var G__970 = (i__955 + (1));
seq__952 = G__967;
chunk__953 = G__968;
count__954 = G__969;
i__955 = G__970;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__952);
if(temp__19650__auto__){
var seq__952__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__952__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__952__$1);
var G__971 = cljs.core.chunk_rest.call(null,seq__952__$1);
var G__972 = c__25653__auto__;
var G__973 = cljs.core.count.call(null,c__25653__auto__);
var G__974 = (0);
seq__952 = G__971;
chunk__953 = G__972;
count__954 = G__973;
i__955 = G__974;
continue;
} else {
var vec__960 = cljs.core.first.call(null,seq__952__$1);
var value_1 = cljs.core.nth.call(null,vec__960,(0),null);
var value_2 = cljs.core.nth.call(null,vec__960,(1),null);
try{var values__36__auto___975 = (function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = mikron.core.undiff.call(null,schema,value_1,mikron.core.diff.call(null,schema,value_1,value_2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___976 = cljs.core.apply.call(null,cljs.core._EQ_,values__36__auto___975);
if(cljs.core.truth_(result__37__auto___976)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__36__auto___975)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__36__auto___975);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e963){var t__45__auto___977 = e963;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",(-1874332161),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),cljs.core.list(new cljs.core.Symbol("mikron","diff","mikron/diff",(555725088),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)),cljs.core.list(new cljs.core.Symbol("mikron","undiff","mikron/undiff",(302879083),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null)))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___977], null));
}
var G__978 = cljs.core.next.call(null,seq__952__$1);
var G__979 = null;
var G__980 = (0);
var G__981 = (0);
seq__952 = G__978;
chunk__953 = G__979;
count__954 = G__980;
i__955 = G__981;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros$macros.test_mikron,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),(function (_,schema,dataset){
var seq__982 = cljs.core.seq.call(null,dataset);
var chunk__983 = null;
var count__984 = (0);
var i__985 = (0);
while(true){
if((i__985 < count__984)){
var value = cljs.core._nth.call(null,chunk__983,i__985);
try{var values__36__auto___988 = (function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___989 = cljs.core.apply.call(null,mikron.core.valid_QMARK_,values__36__auto___988);
if(cljs.core.truth_(result__37__auto___989)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.core.valid_QMARK_,values__36__auto___988)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),values__36__auto___988);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e986){var t__45__auto___990 = e986;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___990], null));
}
var G__991 = seq__982;
var G__992 = chunk__983;
var G__993 = count__984;
var G__994 = (i__985 + (1));
seq__982 = G__991;
chunk__983 = G__992;
count__984 = G__993;
i__985 = G__994;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__982);
if(temp__19650__auto__){
var seq__982__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__982__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__982__$1);
var G__995 = cljs.core.chunk_rest.call(null,seq__982__$1);
var G__996 = c__25653__auto__;
var G__997 = cljs.core.count.call(null,c__25653__auto__);
var G__998 = (0);
seq__982 = G__995;
chunk__983 = G__996;
count__984 = G__997;
i__985 = G__998;
continue;
} else {
var value = cljs.core.first.call(null,seq__982__$1);
try{var values__36__auto___999 = (function (){var x__25689__auto__ = schema;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$1);
})(),x__25689__auto__);
})();
var result__37__auto___1000 = cljs.core.apply.call(null,mikron.core.valid_QMARK_,values__36__auto___999);
if(cljs.core.truth_(result__37__auto___1000)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,mikron.core.valid_QMARK_,values__36__auto___999)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core._conj.call(null,(function (){var x__25689__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),values__36__auto___999);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),new cljs.core.Symbol(null,"not","not",(1044554643),null))], null));
}

}catch (e987){var t__45__auto___1001 = e987;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol("mikron","valid?","mikron/valid?",(-1793483890),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__45__auto___1001], null));
}
var G__1002 = cljs.core.next.call(null,seq__982__$1);
var G__1003 = null;
var G__1004 = (0);
var G__1005 = (0);
seq__982 = G__1002;
chunk__983 = G__1003;
count__984 = G__1004;
i__985 = G__1005;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,mikron.test_macros$macros.test_mikron,new cljs.core.Keyword(null,"interp","interp",(1576701107)),(function (_,schema,dataset){
var seq__1006 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),dataset));
var chunk__1007 = null;
var count__1008 = (0);
var i__1009 = (0);
while(true){
if((i__1009 < count__1008)){
var vec__1010 = cljs.core._nth.call(null,chunk__1007,i__1009);
var value_1 = cljs.core.nth.call(null,vec__1010,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1010,(1),null);
mikron.core.interp.call(null,schema,value_1,value_2,(0),(1),(0.5));

var G__1016 = seq__1006;
var G__1017 = chunk__1007;
var G__1018 = count__1008;
var G__1019 = (i__1009 + (1));
seq__1006 = G__1016;
chunk__1007 = G__1017;
count__1008 = G__1018;
i__1009 = G__1019;
continue;
} else {
var temp__19650__auto__ = cljs.core.seq.call(null,seq__1006);
if(temp__19650__auto__){
var seq__1006__$1 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1006__$1)){
var c__25653__auto__ = cljs.core.chunk_first.call(null,seq__1006__$1);
var G__1020 = cljs.core.chunk_rest.call(null,seq__1006__$1);
var G__1021 = c__25653__auto__;
var G__1022 = cljs.core.count.call(null,c__25653__auto__);
var G__1023 = (0);
seq__1006 = G__1020;
chunk__1007 = G__1021;
count__1008 = G__1022;
i__1009 = G__1023;
continue;
} else {
var vec__1013 = cljs.core.first.call(null,seq__1006__$1);
var value_1 = cljs.core.nth.call(null,vec__1013,(0),null);
var value_2 = cljs.core.nth.call(null,vec__1013,(1),null);
mikron.core.interp.call(null,schema,value_1,value_2,(0),(1),(0.5));

var G__1024 = cljs.core.next.call(null,seq__1006__$1);
var G__1025 = null;
var G__1026 = (0);
var G__1027 = (0);
seq__1006 = G__1024;
chunk__1007 = G__1025;
count__1008 = G__1026;
i__1009 = G__1027;
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
mikron.test_macros$macros.def_mikron_tests = (function mikron$test_macros$macros$def_mikron_tests(_AMPERSAND_form,_AMPERSAND_env,test_cases){
var dataset = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"dataset"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.test_macros,new cljs.core.Keyword(null,"line","line",(212345235)),(42),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(42),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(38)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var iter__21826__auto__ = ((function (dataset){
return (function mikron$test_macros$macros$def_mikron_tests_$_iter__1060(s__1061){
return (new cljs.core.LazySeq(null,((function (dataset){
return (function (){
var s__1061__$1 = s__1061;
while(true){
var temp__19650__auto__ = cljs.core.seq.call(null,s__1061__$1);
if(temp__19650__auto__){
var s__1061__$2 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1061__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__1061__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__1063 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__1062 = (0);
while(true){
if((i__1062 < size__21825__auto__)){
var vec__1078 = cljs.core._nth.call(null,c__21824__auto__,i__1062);
var schema_name = cljs.core.nth.call(null,vec__1078,(0),null);
var schema = cljs.core.nth.call(null,vec__1078,(1),null);
cljs.core.chunk_append.call(null,b__1063,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = schema_name;
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
})(),(function (){var iter__21826__auto__ = ((function (i__1062,vec__1078,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1063,s__1061__$2,temp__19650__auto__,dataset){
return (function mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1081(s__1082){
return (new cljs.core.LazySeq(null,((function (i__1062,vec__1078,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1063,s__1061__$2,temp__19650__auto__,dataset){
return (function (){
var s__1082__$1 = s__1082;
while(true){
var temp__19650__auto____$1 = cljs.core.seq.call(null,s__1082__$1);
if(temp__19650__auto____$1){
var s__1082__$2 = temp__19650__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1082__$2)){
var c__21824__auto____$1 = cljs.core.chunk_first.call(null,s__1082__$2);
var size__21825__auto____$1 = cljs.core.count.call(null,c__21824__auto____$1);
var b__1084 = cljs.core.chunk_buffer.call(null,size__21825__auto____$1);
if((function (){var i__1083 = (0);
while(true){
if((i__1083 < size__21825__auto____$1)){
var method = cljs.core._nth.call(null,c__21824__auto____$1,i__1083);
cljs.core.chunk_append.call(null,b__1084,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
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

var G__1092 = (i__1083 + (1));
i__1083 = G__1092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1084),mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1081.call(null,cljs.core.chunk_rest.call(null,s__1082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1084),null);
}
} else {
var method = cljs.core.first.call(null,s__1082__$2);
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
})())),mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1081.call(null,cljs.core.rest.call(null,s__1082__$2)));
}
} else {
return null;
}
break;
}
});})(i__1062,vec__1078,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1063,s__1061__$2,temp__19650__auto__,dataset))
,null,null));
});})(i__1062,vec__1078,schema_name,schema,c__21824__auto__,size__21825__auto__,b__1063,s__1061__$2,temp__19650__auto__,dataset))
;
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.test_macros$macros.test_mikron)));
})())));

var G__1093 = (i__1062 + (1));
i__1062 = G__1093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1063),mikron$test_macros$macros$def_mikron_tests_$_iter__1060.call(null,cljs.core.chunk_rest.call(null,s__1061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1063),null);
}
} else {
var vec__1085 = cljs.core.first.call(null,s__1061__$2);
var schema_name = cljs.core.nth.call(null,vec__1085,(0),null);
var schema = cljs.core.nth.call(null,vec__1085,(1),null);
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
})(),(function (){var iter__21826__auto__ = ((function (vec__1085,schema_name,schema,s__1061__$2,temp__19650__auto__,dataset){
return (function mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1088(s__1089){
return (new cljs.core.LazySeq(null,((function (vec__1085,schema_name,schema,s__1061__$2,temp__19650__auto__,dataset){
return (function (){
var s__1089__$1 = s__1089;
while(true){
var temp__19650__auto____$1 = cljs.core.seq.call(null,s__1089__$1);
if(temp__19650__auto____$1){
var s__1089__$2 = temp__19650__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1089__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__1089__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__1091 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__1090 = (0);
while(true){
if((i__1090 < size__21825__auto__)){
var method = cljs.core._nth.call(null,c__21824__auto__,i__1090);
cljs.core.chunk_append.call(null,b__1091,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","deftest","cljs.test/deftest",(-271367143),null)),(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,method)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join(''));
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

var G__1094 = (i__1090 + (1));
i__1090 = G__1094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1091),mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1088.call(null,cljs.core.chunk_rest.call(null,s__1089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1091),null);
}
} else {
var method = cljs.core.first.call(null,s__1089__$2);
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
})())),mikron$test_macros$macros$def_mikron_tests_$_iter__1060_$_iter__1088.call(null,cljs.core.rest.call(null,s__1089__$2)));
}
} else {
return null;
}
break;
}
});})(vec__1085,schema_name,schema,s__1061__$2,temp__19650__auto__,dataset))
,null,null));
});})(vec__1085,schema_name,schema,s__1061__$2,temp__19650__auto__,dataset))
;
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.test_macros$macros.test_mikron)));
})())),mikron$test_macros$macros$def_mikron_tests_$_iter__1060.call(null,cljs.core.rest.call(null,s__1061__$2)));
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

mikron.test_macros$macros.def_mikron_tests.cljs$lang$macro = true;
