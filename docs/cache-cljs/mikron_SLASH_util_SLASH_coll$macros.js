goog.provide("mikron.util.coll$macros");
/**
 * Returns the length of a vector `coll`.
 */
(function (){
mikron.util.coll$macros.count = (function mikron$util$coll$macros$count(coll){
return cljs.core._count.call(null,coll);
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.count;},new cljs.core.Symbol("mikron.util.coll$macros","count","mikron.util.coll$macros/count",(-839781693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"count","count",(-514511684),null),"mikron/util/coll.cljc",(12),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Returns the length of a vector `coll`.",(cljs.core.truth_(mikron.util.coll$macros.count)?mikron.util.coll$macros.count.cljs$lang$test:null)])));})()
;
/**
 * Returns the value of a vector `coll` at the position `index`.
 */
(function (){
mikron.util.coll$macros.nth = (function mikron$util$coll$macros$nth(coll,index){
return cljs.core._nth.call(null,coll,cljs.core.unchecked_int.call(null,index));
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.nth;},new cljs.core.Symbol("mikron.util.coll$macros","nth","mikron.util.coll$macros/nth",(2004929553),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"nth","nth",(1529209554),null),"mikron/util/coll.cljc",(10),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Returns the value of a vector `coll` at the position `index`.",(cljs.core.truth_(mikron.util.coll$macros.nth)?mikron.util.coll$macros.nth.cljs$lang$test:null)])));})()
;
/**
 * Returns a random value from a vector `coll`.
 */
(function (){
mikron.util.coll$macros.rand_nth = (function mikron$util$coll$macros$rand_nth(coll){
return mikron.util.coll$macros.nth.call(null,coll,mikron.util.math.rand_long.call(null,mikron.util.coll$macros.count.call(null,coll)));
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.rand_nth;},new cljs.core.Symbol("mikron.util.coll$macros","rand-nth","mikron.util.coll$macros/rand-nth",(-351710006),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"rand-nth","rand-nth",(-1227719931),null),"mikron/util/coll.cljc",(15),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Returns a random value from a vector `coll`.",(cljs.core.truth_(mikron.util.coll$macros.rand_nth)?mikron.util.coll$macros.rand_nth.cljs$lang$test:null)])));})()
;
/**
 * Returns `true` if `pred` returns `true` for each element of a
 *   vector `coll`, `false` otherwise.
 */
(function (){
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
var G__288 = (index + (1));
index = G__288;
continue;
} else {
return and__20483__auto__;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.every_QMARK_;},new cljs.core.Symbol("mikron.util.coll$macros","every?","mikron.util.coll$macros/every?",(1406558561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"every?","every?",(2083724064),null),"mikron/util/coll.cljc",(13),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Returns `true` if `pred` returns `true` for each element of a\n  vector `coll`, `false` otherwise.",(cljs.core.truth_(mikron.util.coll$macros.every_QMARK_)?mikron.util.coll$macros.every_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Repeatedly evaluates `expr` `n` times, collecting the results into
 *   a collection `coll`. Uses transient operations if `transient?` is `true`.
 */
(function (){
mikron.util.coll$macros.into_BANG_ = (function mikron$util$coll$macros$into_BANG_(_AMPERSAND_form,_AMPERSAND_env,coll,transient_QMARK_,n,expr){
var coll291 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"coll","coll",(-1006698606),null));
var n292 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"n","n",(-2092305744),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = coll291;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = coll;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$2 = n292;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$3 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$3);
})(),x__25689__auto____$2);
})(),x__25689__auto____$1);
})(),x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var coll__$1 = coll291;
var n__$1 = n292;
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
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.into_BANG_;},new cljs.core.Symbol("mikron.util.coll$macros","into!","mikron.util.coll$macros/into!",(567442480),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"into!","into!",(1970871281),null),"mikron/util/coll.cljc",(16),(1),(36),true,(36),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"transient?","transient?",(-959909842),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),"Repeatedly evaluates `expr` `n` times, collecting the results into\n  a collection `coll`. Uses transient operations if `transient?` is `true`.",(cljs.core.truth_(mikron.util.coll$macros.into_BANG_)?mikron.util.coll$macros.into_BANG_.cljs$lang$test:null)])));})()
;

mikron.util.coll$macros.into_BANG_.cljs$lang$macro = true;
/**
 * Repeatedly evaluates `key-expr` and `value-expr` `n` times, collecting the results into
 *   a map `coll`. Uses transient operations if `transient?` is `true`.
 */
(function (){
mikron.util.coll$macros.into_kv_BANG_ = (function mikron$util$coll$macros$into_kv_BANG_(_AMPERSAND_form,_AMPERSAND_env,coll,transient_QMARK_,n,key_expr,value_expr){
var coll295 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"coll","coll",(-1006698606),null));
var n296 = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"n","n",(-2092305744),null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = coll295;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$1 = coll;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$2 = n296;
return cljs.core._conj.call(null,(function (){var x__25689__auto____$3 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto____$3);
})(),x__25689__auto____$2);
})(),x__25689__auto____$1);
})(),x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (function (){var coll__$1 = coll295;
var n__$1 = n296;
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
}); return (
new cljs.core.Var(function(){return mikron.util.coll$macros.into_kv_BANG_;},new cljs.core.Symbol("mikron.util.coll$macros","into-kv!","mikron.util.coll$macros/into-kv!",(-282567276),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.coll$macros","mikron.util.coll$macros",(-1488089888),null),new cljs.core.Symbol(null,"into-kv!","into-kv!",(-1266305065),null),"mikron/util/coll.cljc",(19),(1),(48),true,(48),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",(-1006698606),null),new cljs.core.Symbol(null,"transient?","transient?",(-959909842),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"key-expr","key-expr",(937202112),null),new cljs.core.Symbol(null,"value-expr","value-expr",(-554198561),null)], null)),"Repeatedly evaluates `key-expr` and `value-expr` `n` times, collecting the results into\n  a map `coll`. Uses transient operations if `transient?` is `true`.",(cljs.core.truth_(mikron.util.coll$macros.into_kv_BANG_)?mikron.util.coll$macros.into_kv_BANG_.cljs$lang$test:null)])));})()
;

mikron.util.coll$macros.into_kv_BANG_.cljs$lang$macro = true;
