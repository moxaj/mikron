goog.provide("mikron.util$macros");
/**
 * Returns `true` if compiled for Node.js, `false` otherwise.
 */
(function (){
mikron.util$macros.node_env_QMARK_ = (function mikron$util$macros$node_env_QMARK_(){
return cljs.core._EQ_.call(null,"nodejs",cljs.core._STAR_target_STAR_);
}); return (
new cljs.core.Var(function(){return mikron.util$macros.node_env_QMARK_;},new cljs.core.Symbol("mikron.util$macros","node-env?","mikron.util$macros/node-env?",(-389569995),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util$macros","mikron.util$macros",(-542957450),null),new cljs.core.Symbol(null,"node-env?","node-env?",(2065740784),null),"mikron/util.cljc",(19),(4),(7),(7),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns `true` if compiled for Node.js, `false` otherwise.",(cljs.core.truth_(mikron.util$macros.node_env_QMARK_)?mikron.util$macros.node_env_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Evaluates each expression of `body` and returns `ex-value` if an exception occured.
 *   Otherwise returns the value of the last expression in `body`.
 */
(function (){
mikron.util$macros.safe = (function mikron$util$macros$safe(var_args){
var args__22849__auto__ = [];
var len__22847__auto___124 = arguments.length;
var i__22848__auto___125 = (0);
while(true){
if((i__22848__auto___125 < len__22847__auto___124)){
args__22849__auto__.push((arguments[i__22848__auto___125]));

var G__126 = (i__22848__auto___125 + (1));
i__22848__auto___125 = G__126;
continue;
} else {
}
break;
}

var argseq__22850__auto__ = ((((3) < args__22849__auto__.length))?(new cljs.core.IndexedSeq(args__22849__auto__.slice((3)),(0),null)):null);
return mikron.util$macros.safe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22850__auto__);
}); return (
new cljs.core.Var(function(){return mikron.util$macros.safe;},new cljs.core.Symbol("mikron.util$macros","safe","mikron.util$macros/safe",(-869187742),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util$macros","mikron.util$macros",(-542957450),null),new cljs.core.Symbol(null,"safe","safe",(1515473313),null),"mikron/util.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(12),true,(12),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Evaluates each expression of `body` and returns `ex-value` if an exception occured.\n  Otherwise returns the value of the last expression in `body`.",(cljs.core.truth_(mikron.util$macros.safe)?mikron.util$macros.safe.cljs$lang$test:null)])));})()
;

mikron.util$macros.safe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ex_value,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__22590__auto__ = ((cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))?new cljs.core.Symbol("js","Object","js/Object",(61215323),null):new cljs.core.Symbol("mikron.util","Throwable","mikron.util/Throwable",(-159093921),null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__1__auto__","e__1__auto__",(996064048),null)),(function (){var x__22590__auto__ = ex_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
});

mikron.util$macros.safe.cljs$lang$maxFixedArity = (3);

mikron.util$macros.safe.cljs$lang$applyTo = (function (seq120){
var G__121 = cljs.core.first.call(null,seq120);
var seq120__$1 = cljs.core.next.call(null,seq120);
var G__122 = cljs.core.first.call(null,seq120__$1);
var seq120__$2 = cljs.core.next.call(null,seq120__$1);
var G__123 = cljs.core.first.call(null,seq120__$2);
var seq120__$3 = cljs.core.next.call(null,seq120__$2);
return mikron.util$macros.safe.cljs$core$IFn$_invoke$arity$variadic(G__121,G__122,G__123,seq120__$3);
});

new cljs.core.Var(function(){return mikron.util$macros.safe;},new cljs.core.Symbol("mikron.util$macros","safe","mikron.util$macros/safe",(-869187742),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util$macros","mikron.util$macros",(-542957450),null),new cljs.core.Symbol(null,"safe","safe",(1515473313),null),"mikron/util.cljc",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(12),true,(12),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"ex-value","ex-value",(-1739143297),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Evaluates each expression of `body` and returns `ex-value` if an exception occured.\n  Otherwise returns the value of the last expression in `body`.",(cljs.core.truth_(mikron.util$macros.safe)?mikron.util$macros.safe.cljs$lang$test:null)]));

mikron.util$macros.safe.cljs$lang$macro = true;