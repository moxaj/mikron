goog.provide("mikron.codegen.diff");
(function (){
mikron.codegen.diff.hierarchy = mikron.schema.derives.call(null,mikron.schema.derives.call(null,mikron.schema.derives.call(null,mikron.schema.hierarchy,new cljs.core.Keyword(null,"identical?-comparable","identical?-comparable",(244199612)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404)),new cljs.core.Keyword(null,"nil","nil",(99600501))], null)),new cljs.core.Keyword(null,"=-comparable","=-comparable",(1594366861)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",(-641587586)),new cljs.core.Keyword(null,"string","string",(-1989541586)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696))], null)),new cljs.core.Keyword(null,"keyword-comparable","keyword-comparable",(1761750143)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",(811389747)),new cljs.core.Keyword(null,"enum","enum",(1679018432))], null)); return (
new cljs.core.Var(function(){return mikron.codegen.diff.hierarchy;},new cljs.core.Symbol("mikron.codegen.diff","hierarchy","mikron.codegen.diff/hierarchy",(1228265950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.diff","mikron.codegen.diff",(-1315707905),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/codegen/diff.cljc",(15),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.diff.hierarchy)?mikron.codegen.diff.hierarchy.cljs$lang$test:null)])));})()
;
if(typeof mikron.codegen.diff.diff !== 'undefined'){
} else {
(function (){
mikron.codegen.diff.diff = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.codegen.diff.hierarchy;},new cljs.core.Symbol("mikron.codegen.diff","hierarchy","mikron.codegen.diff/hierarchy",(1228265950),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.diff","mikron.codegen.diff",(-1315707905),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/codegen/diff.cljc",(15),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.diff.hierarchy)?mikron.codegen.diff.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.diff","diff"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.diff.diff;},new cljs.core.Symbol("mikron.codegen.diff","diff","mikron.codegen.diff/diff",(-1721737510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.diff","mikron.codegen.diff",(-1315707905),null),new cljs.core.Symbol(null,"diff","diff",(-518492986),null),"mikron/codegen/diff.cljc",(15),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.diff.diff)?mikron.codegen.diff.diff.cljs$lang$test:null)])));})()
;
}
cljs.core.prefer_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"=-comparable","=-comparable",(1594366861)),new cljs.core.Keyword(null,"aliased","aliased",(-125439273)));
cljs.core.prefer_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"=-comparable","=-comparable",(1594366861)),new cljs.core.Keyword(null,"built-in","built-in",(1245067766)));
cljs.core.prefer_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"identical?-comparable","identical?-comparable",(244199612)),new cljs.core.Keyword(null,"built-in","built-in",(1245067766)));
cljs.core.prefer_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"keyword-comparable","keyword-comparable",(1761750143)),new cljs.core.Keyword(null,"aliased","aliased",(-125439273)));
cljs.core.prefer_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"keyword-comparable","keyword-comparable",(1761750143)),new cljs.core.Keyword(null,"built-in","built-in",(1245067766)));
(function (){
mikron.codegen.diff.diff_STAR_ = (function mikron$codegen$diff$diff_STAR_(schema,route,value_1,value_2,p__590){
var map__594 = p__590;
var map__594__$1 = ((((!((map__594 == null)))?((((map__594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__594):map__594);
var env = map__594__$1;
var processor_type = cljs.core.get.call(null,map__594__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
if(cljs.core.not.call(null,route)){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),route,value_1,value_2,env);
} else {
var G__596 = (((processor_type instanceof cljs.core.Keyword))?processor_type.fqn:null);
switch (G__596) {
case "diff":
return mikron.codegen.diff.diff.call(null,schema,route,value_1,value_2,env);

break;
case "undiff":
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,schema,route,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(processor_type)].join('')));

}
}
}); return (
new cljs.core.Var(function(){return mikron.codegen.diff.diff_STAR_;},new cljs.core.Symbol("mikron.codegen.diff","diff*","mikron.codegen.diff/diff*",(-1656781194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.diff","mikron.codegen.diff",(-1315707905),null),new cljs.core.Symbol(null,"diff*","diff*",(-176712622),null),"mikron/codegen/diff.cljc",(12),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"route","route",(1970422836),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"processor-type","processor-type",(-187781098),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)], null)),null,(cljs.core.truth_(mikron.codegen.diff.diff_STAR_)?mikron.codegen.diff.diff_STAR_.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"number","number",(1570378438)),(function (_,___$1,value_1,value_2,p__598){
var map__599 = p__598;
var map__599__$1 = ((((!((map__599 == null)))?((((map__599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__599):map__599);
var processor_type = cljs.core.get.call(null,map__599__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var G__601 = (((processor_type instanceof cljs.core.Keyword))?processor_type.fqn:null);
switch (G__601) {
case "diff":
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));

break;
case "undiff":
return value_2;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(processor_type)].join('')));

}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"=-comparable","=-comparable",(1594366861)),(function (_,___$1,value_1,value_2,p__603){
var map__604 = p__603;
var map__604__$1 = ((((!((map__604 == null)))?((((map__604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__604):map__604);
var processor_type = cljs.core.get.call(null,map__604__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var G__606 = (((processor_type instanceof cljs.core.Keyword))?processor_type.fqn:null);
switch (G__606) {
case "diff":
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));

break;
case "undiff":
return value_2;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(processor_type)].join('')));

}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"identical?-comparable","identical?-comparable",(244199612)),(function (_,___$1,value_1,value_2,p__608){
var map__609 = p__608;
var map__609__$1 = ((((!((map__609 == null)))?((((map__609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__609):map__609);
var processor_type = cljs.core.get.call(null,map__609__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var G__611 = (((processor_type instanceof cljs.core.Keyword))?processor_type.fqn:null);
switch (G__611) {
case "diff":
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));

break;
case "undiff":
return value_2;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(processor_type)].join('')));

}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"keyword-comparable","keyword-comparable",(1761750143)),(function (_,___$1,value_1,value_2,p__613){
var map__614 = p__613;
var map__614__$1 = ((((!((map__614 == null)))?((((map__614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__614):map__614);
var processor_type = cljs.core.get.call(null,map__614__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var G__616 = (((processor_type instanceof cljs.core.Keyword))?processor_type.fqn:null);
switch (G__616) {
case "diff":
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.schema","keyword-identical?","mikron.util.schema/keyword-identical?",(-1467019197),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));

break;
case "undiff":
return value_2;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(processor_type)].join('')));

}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"list","list",(765357683)),(function (p__618,route,value_1,value_2,env){
var vec__619 = p__618;
var _ = cljs.core.nth.call(null,vec__619,(0),null);
var options = cljs.core.nth.call(null,vec__619,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__619,(2),null);
var value_1_vec = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1-vec"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(64),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(64),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(42)], null));
var value_2_vec = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2-vec"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(64),new cljs.core.Keyword(null,"column","column",(2078222095)),(43),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(64),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(54)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_vec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",(307622519),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2_vec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",(307622519),null)),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",(1902966158)),options,schema_SINGLEQUOTE_], null),route,value_1_vec,value_2_vec,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (p__622,route,value_1,value_2,env){
var vec__623 = p__622;
var _ = cljs.core.nth.call(null,vec__623,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__623,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__623,(2),null);
var index = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"index"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(36)], null));
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(37),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(45)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(46),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(54)], null));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(55),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(60)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(61),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(67)], null));
var length_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(68),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(76)], null));
var length_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(77),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(85)], null));
var same_length_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"same-length?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(86),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(98)], null));
var all_dnil_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"all-dnil?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(70),new cljs.core.Keyword(null,"column","column",(2078222095)),(99),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(70),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(108)], null));
var route_SINGLEQUOTE_ = new cljs.core.Keyword(null,"all","all",(892129742)).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.not.call(null,route_SINGLEQUOTE_)){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = length_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = same_length_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__25689__auto__ = length_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","transient","cljs.core/transient",(1549202584),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",(241154833),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = same_length_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__25689__auto__ = length_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,null,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff_STAR_.call(null,schema_SINGLEQUOTE_,route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj!","cljs.core/conj!",(-1516742284),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",(-501313167),null)),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__626,route,value_1,value_2,env){
var vec__627 = p__626;
var _ = cljs.core.nth.call(null,vec__627,(0),null);
var map__630 = cljs.core.nth.call(null,vec__627,(1),null);
var map__630__$1 = ((((!((map__630 == null)))?((((map__630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__630):map__630);
var sorted_by = cljs.core.get.call(null,map__630__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var ___$1 = cljs.core.nth.call(null,vec__627,(2),null);
var val_schema = cljs.core.nth.call(null,vec__627,(3),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
var entry_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"entry-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(49),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(56)], null));
var key_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"key-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(57),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(62)], null));
var keys_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"keys-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(63),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(69)], null));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(70),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(75)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(94),new cljs.core.Keyword(null,"column","column",(2078222095)),(76),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(94),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(82)], null));
var length_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(95),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(95),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var length_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(95),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(95),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
var same_length_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"same-length?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(95),new cljs.core.Keyword(null,"column","column",(2078222095)),(49),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(95),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(61)], null));
var all_dnil_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"all-dnil?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(95),new cljs.core.Keyword(null,"column","column",(2078222095)),(62),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(95),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(71)], null));
var route_SINGLEQUOTE_ = new cljs.core.Keyword(null,"all","all",(892129742)).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.not.call(null,route_SINGLEQUOTE_)){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = length_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = same_length_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__25689__auto__ = length_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sorted-map-by","cljs.core/sorted-map-by",(1657795193),null)),(function (){var x__25689__auto__ = sorted_by;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","transient","cljs.core/transient",(1549202584),null)),(function (){var x__25689__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),(function (){var x__25689__auto__ = keys_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",(-927561820),null)),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null)),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = same_length_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?value:cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = entry_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","find","cljs.core/find",(656179788),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = entry_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","val","cljs.core/val",(833354142),null)),(function (){var x__25689__auto__ = entry_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff_STAR_.call(null,val_schema,route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,null,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null):new cljs.core.Symbol("cljs.core","assoc!","cljs.core/assoc!",(-457673635),null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = keys_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = all_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = entry_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__632,route,value_1,value_2,env){
var vec__633 = p__632;
var _ = cljs.core.nth.call(null,vec__633,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__633,(1),null);
var schemas = cljs.core.nth.call(null,vec__633,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(120),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(120),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(120),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(120),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.tuple__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__633,_,___$1,schemas){
return (function (p__640){
var vec__641 = p__640;
var key = cljs.core.nth.call(null,vec__641,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__641,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.tuple_lookup.call(null,value_1,key);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.tuple_lookup.call(null,value_2,key);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var temp__19596__auto__ = route.call(null,key);
if(cljs.core.truth_(temp__19596__auto__)){
var route_SINGLEQUOTE_ = temp__19596__auto__;
return mikron.codegen.diff.diff_STAR_.call(null,schemas.call(null,key),route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
} else {
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__633,_,___$1,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core.map.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__633,_,___$1,schemas){
return (function (p__656){
var vec__657 = p__656;
var ___$2 = cljs.core.nth.call(null,vec__657,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__657,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__633,_,___$1,schemas))
,fields)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_tuple.call(null,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__660,route,value_1,value_2,env){
var vec__661 = p__660;
var _ = cljs.core.nth.call(null,vec__661,(0),null);
var map__664 = cljs.core.nth.call(null,vec__661,(1),null);
var map__664__$1 = ((((!((map__664 == null)))?((((map__664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__664):map__664);
var type = cljs.core.get.call(null,map__664__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__661,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(138),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(138),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(138),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(138),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.record__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__661,_,map__664,map__664__$1,type,schemas){
return (function (p__670){
var vec__671 = p__670;
var key = cljs.core.nth.call(null,vec__671,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__671,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.record_lookup.call(null,value_1,key,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.record_lookup.call(null,value_2,key,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var temp__19596__auto__ = route.call(null,key);
if(cljs.core.truth_(temp__19596__auto__)){
var route_SINGLEQUOTE_ = temp__19596__auto__;
return mikron.codegen.diff.diff_STAR_.call(null,schemas.call(null,key),route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
} else {
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__661,_,map__664,map__664__$1,type,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core.map.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__661,_,map__664,map__664__$1,type,schemas){
return (function (p__686){
var vec__687 = p__686;
var ___$1 = cljs.core.nth.call(null,vec__687,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__687,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__661,_,map__664,map__664__$1,type,schemas))
,fields)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_record.call(null,fields,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__690,route,value_1,value_2,env){
var vec__691 = p__690;
var _ = cljs.core.nth.call(null,vec__691,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__691,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__691,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,schema_SINGLEQUOTE_,route,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__694,route,value_1,value_2,env){
var vec__695 = p__694;
var _ = cljs.core.nth.call(null,vec__695,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__695,(1),null);
var selector = cljs.core.nth.call(null,vec__695,(2),null);
var multi_map = cljs.core.nth.call(null,vec__695,(3),null);
var case_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"case-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(161),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(161),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var case_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"case-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(161),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(161),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = case_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = selector;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = case_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = selector;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__25689__auto__ = case_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = case_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","condp","cljs.core/condp",(353371154),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__25689__auto__ = case_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.mapcat.call(null,((function (case_1,case_2,vec__695,_,___$1,selector,multi_map){
return (function (p__710){
var vec__711 = p__710;
var multi_case = cljs.core.nth.call(null,vec__711,(0),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__711,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_case,(function (){var temp__19596__auto__ = route.call(null,multi_case);
if(cljs.core.truth_(temp__19596__auto__)){
var route_SINGLEQUOTE_ = temp__19596__auto__;
return mikron.codegen.diff.diff.call(null,schema_SINGLEQUOTE_,route_SINGLEQUOTE_,value_1,value_2,env);
} else {
return mikron.codegen.diff.diff.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
}
})()], null);
});})(case_1,case_2,vec__695,_,___$1,selector,multi_map))
,multi_map)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__714,route,value_1,value_2,env){
var vec__715 = p__714;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__715,(0),null);
return mikron.codegen.diff.diff.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),route,value_1,value_2,env);
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),(function (_,___$1,___$2,value_2,___$3){
return value_2;
}));
cljs.core._add_method.call(null,mikron.codegen.diff.diff,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,_,value_1,value_2,p__718){
var map__719 = p__718;
var map__719__$1 = ((((!((map__719 == null)))?((((map__719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__719):map__719);
var processor_type = cljs.core.get.call(null,map__719__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = mikron.compile_util.processor_name.call(null,processor_type,schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"diff","diff",(2135942783)),(function (_,p__721){
var map__722 = p__721;
var map__722__$1 = ((((!((map__722 == null)))?((((map__722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__722):map__722);
var env = map__722__$1;
var schema = cljs.core.get.call(null,map__722__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var ext = cljs.core.get.call(null,map__722__$1,new cljs.core.Keyword(null,"ext","ext",(-996964541)));
var ___$1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"_"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(185),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(185),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(32)], null));
var value_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(185),new cljs.core.Keyword(null,"column","column",(2078222095)),(33),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(185),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(40)], null));
var value_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(185),new cljs.core.Keyword(null,"column","column",(2078222095)),(41),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(185),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff_STAR_.call(null,schema,new cljs.core.Keyword(null,"diff","diff",(2135942783)).cljs$core$IFn$_invoke$arity$1(ext),value_1,value_2,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),new cljs.core.Keyword(null,"diff","diff",(2135942783))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),(function (_,p__724){
var map__725 = p__724;
var map__725__$1 = ((((!((map__725 == null)))?((((map__725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__725):map__725);
var env = map__725__$1;
var schema = cljs.core.get.call(null,map__725__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var ext = cljs.core.get.call(null,map__725__$1,new cljs.core.Keyword(null,"ext","ext",(-996964541)));
var ___$1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"_"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(190),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(190),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(32)], null));
var value_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(190),new cljs.core.Keyword(null,"column","column",(2078222095)),(33),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(190),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(40)], null));
var value_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.diff,new cljs.core.Keyword(null,"line","line",(212345235)),(190),new cljs.core.Keyword(null,"column","column",(2078222095)),(41),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(190),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.diff.diff_STAR_.call(null,schema,new cljs.core.Keyword(null,"diff","diff",(2135942783)).cljs$core$IFn$_invoke$arity$1(ext),value_1,value_2,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
