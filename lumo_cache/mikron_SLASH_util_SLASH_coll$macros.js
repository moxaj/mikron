goog.provide("mikron.util.coll$macros");
/**
 * Returns the length of a vector `coll`.
 */
mikron.util.coll$macros.count = (function mikron$util$coll$macros$count(coll){
return cljs.core._count.call(null,coll);
});
/**
 * Returns the value of a vector `coll` at the position `index`.
 */
mikron.util.coll$macros.nth = (function mikron$util$coll$macros$nth(coll,index){
return cljs.core._nth.call(null,coll,cljs.core.unchecked_int.call(null,index));
});
/**
 * Returns a random value from a vector `coll`.
 */
mikron.util.coll$macros.rand_nth = (function mikron$util$coll$macros$rand_nth(coll){
return mikron.util.coll$macros.nth.call(null,coll,mikron.util.math.rand_long.call(null,mikron.util.coll$macros.count.call(null,coll)));
});
/**
 * Returns `true` if `pred` returns `true` for each element of a
 *   vector `coll`, `false` otherwise.
 */
mikron.util.coll$macros.every_QMARK_ = (function mikron$util$coll$macros$every_QMARK_(pred,coll){
var length = mikron.util.coll$macros.count.call(null,coll);
var index = cljs.core.long$.call(null,(0));
while(true){
var or__20727__auto__ = (index === length);
if(or__20727__auto__){
return or__20727__auto__;
} else {
var and__20483__auto__ = pred.call(null,mikron.util.coll$macros.nth.call(null,coll,index));
if(cljs.core.truth_(and__20483__auto__)){
var G__289 = (index + (1));
index = G__289;
continue;
} else {
return and__20483__auto__;
}
}
break;
}
});
/**
 * Repeatedly evaluates `expr` `n` times, collecting the results into
 *   a collection `coll`. Uses transient operations if `transient?` is `true`.
 */
mikron.util.coll$macros.into_BANG_ = (function mikron$util$coll$macros$into_BANG_(_AMPERSAND_form,_AMPERSAND_env,coll,transient_QMARK_,n,expr){
var coll292 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"coll","coll",(-1006698606),null));
var n293 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"n","n",(-2092305744),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = coll292;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = coll;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$2 = n293;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$3 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$3);
})(),x__25689__auto____$2);
})(),x__25689__auto____$1);
})(),x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var coll__$1 = coll292;
var n__$1 = n293;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",(241154833),null)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","transient","cljs.core/transient",(1549202584),null)),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):coll__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):coll__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-dec","cljs.core/unchecked-dec",(1420123595),null)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?new cljs.core.Symbol("cljs.core","conj!","cljs.core/conj!",(-1516742284),null):new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",(-460750931),null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.util.coll$macros.into_BANG_.cljs$lang$macro = true;
/**
 * Repeatedly evaluates `key-expr` and `value-expr` `n` times, collecting the results into
 *   a map `coll`. Uses transient operations if `transient?` is `true`.
 */
mikron.util.coll$macros.into_kv_BANG_ = (function mikron$util$coll$macros$into_kv_BANG_(_AMPERSAND_form,_AMPERSAND_env,coll,transient_QMARK_,n,key_expr,value_expr){
var coll296 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"coll","coll",(-1006698606),null));
var n297 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"n","n",(-2092305744),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = coll296;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = coll;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$2 = n297;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$3 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$3);
})(),x__25689__auto____$2);
})(),x__25689__auto____$1);
})(),x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var coll__$1 = coll296;
var n__$1 = n297;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",(241154833),null)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","transient","cljs.core/transient",(1549202584),null)),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):coll__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):coll__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",(1202958259),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-dec","cljs.core/unchecked-dec",(1420123595),null)),(function (){var x__25689__auto__ = n__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = (cljs.core.truth_(transient_QMARK_)?new cljs.core.Symbol("cljs.core","assoc!","cljs.core/assoc!",(-457673635),null):new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = coll__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.util.coll$macros.into_kv_BANG_.cljs$lang$macro = true;
