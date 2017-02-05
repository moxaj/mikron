goog.provide("mikron.util");
/**
 * Returns `true` if compiled for Node.js, `false` otherwise.
 */
mikron.util.node_env_QMARK_ = (function mikron$util$node_env_QMARK_(){
return cljs.core._EQ_.call(null,"nodejs",cljs.core._STAR_target_STAR_);
});
/**
 * Evaluates each expression of `body` and returns `ex-value` if an exception occured.
 *   Otherwise returns the value of the last expression in `body`.
 */
mikron.util.safe = (function mikron$util$safe(var_args){
var args__25948__auto__ = [];
var len__25946__auto___180 = arguments.length;
var i__25947__auto___181 = (0);
while(true){
if((i__25947__auto___181 < len__25946__auto___180)){
args__25948__auto__.push((arguments[i__25947__auto___181]));

var G__182 = (i__25947__auto___181 + (1));
i__25947__auto___181 = G__182;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.util.safe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
});

mikron.util.safe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ex_value,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__25689__auto__ = ((cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))?new cljs.core.Symbol("js","Object","js/Object",(61215323),null):new cljs.core.Symbol("mikron.util","Throwable","mikron.util/Throwable",(-159093921),null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__5__auto__","e__5__auto__",(2124973438),null)),(function (){var x__25689__auto__ = ex_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.util.safe.cljs$lang$maxFixedArity = (3);

mikron.util.safe.cljs$lang$applyTo = (function (seq176){
var G__177 = cljs.core.first.call(null,seq176);
var seq176__$1 = cljs.core.next.call(null,seq176);
var G__178 = cljs.core.first.call(null,seq176__$1);
var seq176__$2 = cljs.core.next.call(null,seq176__$1);
var G__179 = cljs.core.first.call(null,seq176__$2);
var seq176__$3 = cljs.core.next.call(null,seq176__$2);
return mikron.util.safe.cljs$core$IFn$_invoke$arity$variadic(G__177,G__178,G__179,seq176__$3);
});


mikron.util.safe.cljs$lang$macro = true;
