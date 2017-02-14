goog.provide("mikron.compile_util$macros");
/**
 * Returns a memoized processor name.
 */
(function (){
mikron.compile_util$macros.processor_name = cljs.core.memoize.call(null,(function (processor_type,schema_name){
return cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,processor_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join('')),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)),schema_name], null));
})); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.processor_name;},new cljs.core.Symbol("mikron.compile-util$macros","processor-name","mikron.compile-util$macros/processor-name",(-2143853622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"processor-name","processor-name",(-760304537),null),"mikron/compile_util.cljc",(20),(1),(7),(7),cljs.core.List.EMPTY,"Returns a memoized processor name.",(cljs.core.truth_(mikron.compile_util$macros.processor_name)?mikron.compile_util$macros.processor_name.cljs$lang$test:null)])));})()
;
/**
 * Returns `true` if compiled for cljs, `false` otherwise.
 */
(function (){
mikron.compile_util$macros.cljs_QMARK_ = (function mikron$compile_util$macros$cljs_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",(-1222483266),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&env","&env",(-919163083),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.cljs_QMARK_;},new cljs.core.Symbol("mikron.compile-util$macros","cljs?","mikron.compile-util$macros/cljs?",(-1241382712),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"cljs?","cljs?",(2073899371),null),"mikron/compile_util.cljc",(16),(1),(18),true,(18),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns `true` if compiled for cljs, `false` otherwise.",(cljs.core.truth_(mikron.compile_util$macros.cljs_QMARK_)?mikron.compile_util$macros.cljs_QMARK_.cljs$lang$test:null)])));})()
;

mikron.compile_util$macros.cljs_QMARK_.cljs$lang$macro = true;
/**
 * Executes each expression of `body` in the context of each symbol in `syms`
 *   bound to a generated symbol.
 */
(function (){
mikron.compile_util$macros.with_gensyms = (function mikron$compile_util$macros$with_gensyms(var_args){
var args__25948__auto__ = [];
var len__25946__auto___37 = arguments.length;
var i__25947__auto___38 = (0);
while(true){
if((i__25947__auto___38 < len__25946__auto___37)){
args__25948__auto__.push((arguments[i__25947__auto___38]));

var G__39 = (i__25947__auto___38 + (1));
i__25947__auto___38 = G__39;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.compile_util$macros.with_gensyms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.with_gensyms;},new cljs.core.Symbol("mikron.compile-util$macros","with-gensyms","mikron.compile-util$macros/with-gensyms",(1248591089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"with-gensyms","with-gensyms",(79736470),null),"mikron/compile_util.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(23),true,(23),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes each expression of `body` in the context of each symbol in `syms`\n  bound to a generated symbol.",(cljs.core.truth_(mikron.compile_util$macros.with_gensyms)?mikron.compile_util$macros.with_gensyms.cljs$lang$test:null)])));})()
;

mikron.compile_util$macros.with_gensyms.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (sym){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",(749126446),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","gensym","cljs.core/gensym",(-857997988),null)),(function (){var x__25689__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.meta.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
}),syms))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
});

mikron.compile_util$macros.with_gensyms.cljs$lang$maxFixedArity = (3);

mikron.compile_util$macros.with_gensyms.cljs$lang$applyTo = (function (seq33){
var G__34 = cljs.core.first.call(null,seq33);
var seq33__$1 = cljs.core.next.call(null,seq33);
var G__35 = cljs.core.first.call(null,seq33__$1);
var seq33__$2 = cljs.core.next.call(null,seq33__$1);
var G__36 = cljs.core.first.call(null,seq33__$2);
var seq33__$3 = cljs.core.next.call(null,seq33__$2);
return mikron.compile_util$macros.with_gensyms.cljs$core$IFn$_invoke$arity$variadic(G__34,G__35,G__36,seq33__$3);
});

new cljs.core.Var(function(){return mikron.compile_util$macros.with_gensyms;},new cljs.core.Symbol("mikron.compile-util$macros","with-gensyms","mikron.compile-util$macros/with-gensyms",(1248591089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"with-gensyms","with-gensyms",(79736470),null),"mikron/compile_util.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(23),true,(23),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes each expression of `body` in the context of each symbol in `syms`\n  bound to a generated symbol.",(cljs.core.truth_(mikron.compile_util$macros.with_gensyms)?mikron.compile_util$macros.with_gensyms.cljs$lang$test:null)]));

mikron.compile_util$macros.with_gensyms.cljs$lang$macro = true;
/**
 * Executes each expression of `body` in the context of each symbol in `syms`
 *   bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation
 *   in macros.
 */
(function (){
mikron.compile_util$macros.with_evaluated = (function mikron$compile_util$macros$with_evaluated(var_args){
var args__25948__auto__ = [];
var len__25946__auto___52 = arguments.length;
var i__25947__auto___53 = (0);
while(true){
if((i__25947__auto___53 < len__25946__auto___52)){
args__25948__auto__.push((arguments[i__25947__auto___53]));

var G__54 = (i__25947__auto___53 + (1));
i__25947__auto___53 = G__54;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.compile_util$macros.with_evaluated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.with_evaluated;},new cljs.core.Symbol("mikron.compile-util$macros","with-evaluated","mikron.compile-util$macros/with-evaluated",(-2010839375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"with-evaluated","with-evaluated",(-74657706),null),"mikron/compile_util.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes each expression of `body` in the context of each symbol in `syms`\n  bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation\n  in macros.",(cljs.core.truth_(mikron.compile_util$macros.with_evaluated)?mikron.compile_util$macros.with_evaluated.cljs$lang$test:null)])));})()
;

mikron.compile_util$macros.with_evaluated.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms,body){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.gensym),syms));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (m){
return (function (p__48){
var vec__49 = p__48;
var sym = cljs.core.nth.call(null,vec__49,(0),null);
var temp_sym = cljs.core.nth.call(null,vec__49,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [temp_sym,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","gensym","cljs.core/gensym",(-857997988),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__25689__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(m))
,m))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",(1908459032),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",(307622519),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",(1908459032),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),cljs.core.mapcat.call(null,cljs.core.reverse,m)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.identity,m))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.compile_util$macros.with_evaluated.cljs$lang$maxFixedArity = (3);

mikron.compile_util$macros.with_evaluated.cljs$lang$applyTo = (function (seq40){
var G__41 = cljs.core.first.call(null,seq40);
var seq40__$1 = cljs.core.next.call(null,seq40);
var G__42 = cljs.core.first.call(null,seq40__$1);
var seq40__$2 = cljs.core.next.call(null,seq40__$1);
var G__43 = cljs.core.first.call(null,seq40__$2);
var seq40__$3 = cljs.core.next.call(null,seq40__$2);
return mikron.compile_util$macros.with_evaluated.cljs$core$IFn$_invoke$arity$variadic(G__41,G__42,G__43,seq40__$3);
});

new cljs.core.Var(function(){return mikron.compile_util$macros.with_evaluated;},new cljs.core.Symbol("mikron.compile-util$macros","with-evaluated","mikron.compile-util$macros/with-evaluated",(-2010839375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"with-evaluated","with-evaluated",(-74657706),null),"mikron/compile_util.cljc",(25),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(32),true,(32),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"syms","syms",(64639765),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes each expression of `body` in the context of each symbol in `syms`\n  bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation\n  in macros.",(cljs.core.truth_(mikron.compile_util$macros.with_evaluated)?mikron.compile_util$macros.with_evaluated.cljs$lang$test:null)]));

mikron.compile_util$macros.with_evaluated.cljs$lang$macro = true;
/**
 * Walks `form` and collects all values for which the predicate `f` returns `true`.
 *   Does not filter duplicates.
 */
(function (){
mikron.compile_util$macros.find_by_STAR_ = (function mikron$compile_util$macros$find_by_STAR_(f,form){
var G__56 = ((cljs.core.seqable_QMARK_.call(null,form))?cljs.core.mapcat.call(null,cljs.core.partial.call(null,mikron.compile_util$macros.find_by_STAR_,f),form):cljs.core.PersistentVector.EMPTY);
var G__56__$1 = (cljs.core.truth_(f.call(null,form))?cljs.core.conj.call(null,G__56,form):G__56);
return G__56__$1;
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.find_by_STAR_;},new cljs.core.Symbol("mikron.compile-util$macros","find-by*","mikron.compile-util$macros/find-by*",(-374274295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"find-by*","find-by*",(-1504151820),null),"mikron/compile_util.cljc",(15),(1),(47),(47),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Walks `form` and collects all values for which the predicate `f` returns `true`.\n  Does not filter duplicates.",(cljs.core.truth_(mikron.compile_util$macros.find_by_STAR_)?mikron.compile_util$macros.find_by_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Walks `form` and collects all values for which the predicate `f` returns true.
 *   Filter duplicates.
 */
(function (){
mikron.compile_util$macros.find_by = (function mikron$compile_util$macros$find_by(f,form){
return cljs.core.set.call(null,mikron.compile_util$macros.find_by_STAR_.call(null,f,form));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.find_by;},new cljs.core.Symbol("mikron.compile-util$macros","find-by","mikron.compile-util$macros/find-by",(2081925589),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"find-by","find-by",(-893486986),null),"mikron/compile_util.cljc",(14),(1),(56),(56),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Walks `form` and collects all values for which the predicate `f` returns true.\n  Filter duplicates.",(cljs.core.truth_(mikron.compile_util$macros.find_by)?mikron.compile_util$macros.find_by.cljs$lang$test:null)])));})()
;
/**
 * Returns the type of `schema` or `nil` if the schema is invalid.
 */
(function (){
mikron.compile_util$macros.type_of = (function mikron$compile_util$macros$type_of(var_args){
var args__25948__auto__ = [];
var len__25946__auto___59 = arguments.length;
var i__25947__auto___60 = (0);
while(true){
if((i__25947__auto___60 < len__25946__auto___59)){
args__25948__auto__.push((arguments[i__25947__auto___60]));

var G__61 = (i__25947__auto___60 + (1));
i__25947__auto___60 = G__61;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((1) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((1)),(0),null)):null);
return mikron.compile_util$macros.type_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.type_of;},new cljs.core.Symbol("mikron.compile-util$macros","type-of","mikron.compile-util$macros/type-of",(207807851),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"type-of","type-of",(-1043613738),null),"mikron/compile_util.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),"Returns the type of `schema` or `nil` if the schema is invalid.",(cljs.core.truth_(mikron.compile_util$macros.type_of)?mikron.compile_util$macros.type_of.cljs$lang$test:null)])));})()
;

mikron.compile_util$macros.type_of.cljs$core$IFn$_invoke$arity$variadic = (function (schema,_){
if((schema instanceof cljs.core.Keyword)){
return schema;
} else {
if(cljs.core.vector_QMARK_.call(null,schema)){
return cljs.core.first.call(null,schema);
} else {
if((schema instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"custom","custom",(340151948));
} else {
return null;

}
}
}
});

mikron.compile_util$macros.type_of.cljs$lang$maxFixedArity = (1);

mikron.compile_util$macros.type_of.cljs$lang$applyTo = (function (seq57){
var G__58 = cljs.core.first.call(null,seq57);
var seq57__$1 = cljs.core.next.call(null,seq57);
return mikron.compile_util$macros.type_of.cljs$core$IFn$_invoke$arity$variadic(G__58,seq57__$1);
});

new cljs.core.Var(function(){return mikron.compile_util$macros.type_of;},new cljs.core.Symbol("mikron.compile-util$macros","type-of","mikron.compile-util$macros/type-of",(207807851),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"type-of","type-of",(-1043613738),null),"mikron/compile_util.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(64),(64),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"_","_",(-1201019570),null)], null)),"Returns the type of `schema` or `nil` if the schema is invalid.",(cljs.core.truth_(mikron.compile_util$macros.type_of)?mikron.compile_util$macros.type_of.cljs$lang$test:null)]));
/**
 * Returns an integer type into which `size` can fit.
 */
(function (){
mikron.compile_util$macros.integer_type = (function mikron$compile_util$macros$integer_type(size){
var pred__65 = cljs.core._GT_;
var expr__66 = size;
if(cljs.core.truth_(pred__65.call(null,(256),expr__66))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"byte","byte",(683775220))], null);
} else {
if(cljs.core.truth_(pred__65.call(null,(65536),expr__66))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",(1928760516))], null);
} else {
if(cljs.core.truth_(pred__65.call(null,(2147483648),expr__66))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",(-1741416922))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long","long",(-171452093))], null);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.integer_type;},new cljs.core.Symbol("mikron.compile-util$macros","integer-type","mikron.compile-util$macros/integer-type",(1858466122),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"integer-type","integer-type",(590102327),null),"mikron/compile_util.cljc",(19),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Returns an integer type into which `size` can fit.",(cljs.core.truth_(mikron.compile_util$macros.integer_type)?mikron.compile_util$macros.integer_type.cljs$lang$test:null)])));})()
;
/**
 * Generates code for record value lookup.
 */
(function (){
mikron.compile_util$macros.record_lookup = (function mikron$compile_util$macros$record_lookup(record,key,p__68){
var vec__72 = p__68;
var class$ = cljs.core.nth.call(null,vec__72,(0),null);
if(cljs.core.not.call(null,class$)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = record;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(".-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.with_meta.call(null,record,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),class$], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.record_lookup;},new cljs.core.Symbol("mikron.compile-util$macros","record-lookup","mikron.compile-util$macros/record-lookup",(179301047),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"record-lookup","record-lookup",(1146502356),null),"mikron/compile_util.cljc",(20),(1),(82),(82),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"record","record",(861424668),null),new cljs.core.Symbol(null,"key","key",(124488940),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null)], null)], null)),"Generates code for record value lookup.",(cljs.core.truth_(mikron.compile_util$macros.record_lookup)?mikron.compile_util$macros.record_lookup.cljs$lang$test:null)])));})()
;
/**
 * Returns a map from record keys to generated symbols.
 */
(function (){
mikron.compile_util$macros.record__GT_fields = (function mikron$compile_util$macros$record__GT_fields(schemas){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.gensym.call(null,key)], null);
}),cljs.core.keys.call(null,schemas)));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.record__GT_fields;},new cljs.core.Symbol("mikron.compile-util$macros","record->fields","mikron.compile-util$macros/record->fields",(-1724592969),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"record->fields","record->fields",(1205616340),null),"mikron/compile_util.cljc",(21),(1),(90),(90),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",(-2079365190),null)], null)),"Returns a map from record keys to generated symbols.",(cljs.core.truth_(mikron.compile_util$macros.record__GT_fields)?mikron.compile_util$macros.record__GT_fields.cljs$lang$test:null)])));})()
;
/**
 * Generates code which reconstructs a record from its fields.
 */
(function (){
mikron.compile_util$macros.fields__GT_record = (function mikron$compile_util$macros$fields__GT_record(fields,p__75){
var vec__79 = p__75;
var seq__80 = cljs.core.seq.call(null,vec__79);
var first__81 = cljs.core.first.call(null,seq__80);
var seq__80__$1 = cljs.core.next.call(null,seq__80);
var class$ = first__81;
var members = seq__80__$1;
if(cljs.core.not.call(null,class$)){
return fields;
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("->"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.map.call(null,((function (vec__79,seq__80,first__81,seq__80__$1,class$,members){
return (function (member){
var or__20727__auto__ = fields.call(null,cljs.core.keyword.call(null,member));
if(cljs.core.truth_(or__20727__auto__)){
return or__20727__auto__;
} else {
return (0);
}
});})(vec__79,seq__80,first__81,seq__80__$1,class$,members))
,members)));
}
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.fields__GT_record;},new cljs.core.Symbol("mikron.compile-util$macros","fields->record","mikron.compile-util$macros/fields->record",(-1146163146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"fields->record","fields->record",(-298450347),null),"mikron/compile_util.cljc",(21),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class","class",(-390430469),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"members","members",(1799532545),null)], null)], null)),"Generates code which reconstructs a record from its fields.",(cljs.core.truth_(mikron.compile_util$macros.fields__GT_record)?mikron.compile_util$macros.fields__GT_record.cljs$lang$test:null)])));})()
;
/**
 * Generates code for tuple value lookup.
 */
(function (){
mikron.compile_util$macros.tuple_lookup = (function mikron$compile_util$macros$tuple_lookup(tuple,index){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = tuple;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.tuple_lookup;},new cljs.core.Symbol("mikron.compile-util$macros","tuple-lookup","mikron.compile-util$macros/tuple-lookup",(353885639),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"tuple-lookup","tuple-lookup",(-612454814),null),"mikron/compile_util.cljc",(19),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tuple","tuple",(1167864243),null),new cljs.core.Symbol(null,"index","index",(108845612),null)], null)),"Generates code for tuple value lookup.",(cljs.core.truth_(mikron.compile_util$macros.tuple_lookup)?mikron.compile_util$macros.tuple_lookup.cljs$lang$test:null)])));})()
;
/**
 * Returns a map from tuple indices to generated symbols.
 */
(function (){
mikron.compile_util$macros.tuple__GT_fields = (function mikron$compile_util$macros$tuple__GT_fields(schemas){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map_indexed.call(null,(function (index,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("value'-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''))], null);
}),schemas));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.tuple__GT_fields;},new cljs.core.Symbol("mikron.compile-util$macros","tuple->fields","mikron.compile-util$macros/tuple->fields",(-725508619),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"tuple->fields","tuple->fields",(-1506096304),null),"mikron/compile_util.cljc",(20),(1),(113),(113),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",(-2079365190),null)], null)),"Returns a map from tuple indices to generated symbols.",(cljs.core.truth_(mikron.compile_util$macros.tuple__GT_fields)?mikron.compile_util$macros.tuple__GT_fields.cljs$lang$test:null)])));})()
;
/**
 * Generates code which reconstructs a tuple from its fields.
 */
(function (){
mikron.compile_util$macros.fields__GT_tuple = (function mikron$compile_util$macros$fields__GT_tuple(fields){
return cljs.core.vec.call(null,cljs.core.vals.call(null,fields));
}); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.fields__GT_tuple;},new cljs.core.Symbol("mikron.compile-util$macros","fields->tuple","mikron.compile-util$macros/fields->tuple",(1571331827),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"fields->tuple","fields->tuple",(801131668),null),"mikron/compile_util.cljc",(20),(1),(121),(121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fields","fields",(-291534703),null)], null)),"Generates code which reconstructs a tuple from its fields.",(cljs.core.truth_(mikron.compile_util$macros.fields__GT_tuple)?mikron.compile_util$macros.fields__GT_tuple.cljs$lang$test:null)])));})()
;
if(typeof mikron.compile_util$macros.processor !== 'undefined'){
} else {
/**
 * Generates processor code.
 */
(function (){
mikron.compile_util$macros.processor = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.compile-util$macros","processor"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (processor_type,env){
return processor_type;
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.compile_util$macros.processor;},new cljs.core.Symbol("mikron.compile-util$macros","processor","mikron.compile-util$macros/processor",(-692430560),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.compile-util$macros","mikron.compile-util$macros",(72382497),null),new cljs.core.Symbol(null,"processor","processor",(1624313731),null),"mikron/compile_util.cljc",(20),(1),(126),(126),cljs.core.List.EMPTY,"Generates processor code.",(cljs.core.truth_(mikron.compile_util$macros.processor)?mikron.compile_util$macros.processor.cljs$lang$test:null)])));})()
;
}
