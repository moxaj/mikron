goog.provide("mikron.spec_macros$macros");
/**
 * Helper macro for shorthand schema spec definition.
 */
(function (){
mikron.spec_macros$macros.schema_spec_STAR_ = (function mikron$spec_macros$macros$schema_spec_STAR_(var_args){
var args__22849__auto__ = [];
var len__22847__auto___486 = arguments.length;
var i__22848__auto___487 = (0);
while(true){
if((i__22848__auto___487 < len__22847__auto___486)){
args__22849__auto__.push((arguments[i__22848__auto___487]));

var G__488 = (i__22848__auto___487 + (1));
i__22848__auto___487 = G__488;
continue;
} else {
}
break;
}

var argseq__22850__auto__ = ((((3) < args__22849__auto__.length))?(new cljs.core.IndexedSeq(args__22849__auto__.slice((3)),(0),null)):null);
return mikron.spec_macros$macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22850__auto__);
}); return (
new cljs.core.Var(function(){return mikron.spec_macros$macros.schema_spec_STAR_;},new cljs.core.Symbol("mikron.spec-macros$macros","schema-spec*","mikron.spec-macros$macros/schema-spec*",(-1191599292),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.spec-macros$macros","mikron.spec-macros$macros",(-2073497594),null),new cljs.core.Symbol(null,"schema-spec*","schema-spec*",(1034780738),null),"mikron/spec_macros.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(5),true,(5),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null)], null)),"Helper macro for shorthand schema spec definition.",(cljs.core.truth_(mikron.spec_macros$macros.schema_spec_STAR_)?mikron.spec_macros$macros.schema_spec_STAR_.cljs$lang$test:null)])));})()
;

mikron.spec_macros$macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options,fields){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",(1200597689),null)),((cljs.core.empty_QMARK_.call(null,fields))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",(-581868663)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",(720641726),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()))], null):null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"complex","complex",(1415610825))),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",(850003863),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"options","options",(99638489))),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",(-1542560017),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",(-139722052),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",(-927379584),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496))),(function (){var x__22590__auto__ = options;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),fields));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","juxt","cljs.core/juxt",(263800975),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"options","options",(99638489))),cljs.core.take_nth.call(null,(2),fields)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","second","cljs.core/second",(520555958),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
});

mikron.spec_macros$macros.schema_spec_STAR_.cljs$lang$maxFixedArity = (3);

mikron.spec_macros$macros.schema_spec_STAR_.cljs$lang$applyTo = (function (seq482){
var G__483 = cljs.core.first.call(null,seq482);
var seq482__$1 = cljs.core.next.call(null,seq482);
var G__484 = cljs.core.first.call(null,seq482__$1);
var seq482__$2 = cljs.core.next.call(null,seq482__$1);
var G__485 = cljs.core.first.call(null,seq482__$2);
var seq482__$3 = cljs.core.next.call(null,seq482__$2);
return mikron.spec_macros$macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__483,G__484,G__485,seq482__$3);
});

new cljs.core.Var(function(){return mikron.spec_macros$macros.schema_spec_STAR_;},new cljs.core.Symbol("mikron.spec-macros$macros","schema-spec*","mikron.spec-macros$macros/schema-spec*",(-1191599292),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.spec-macros$macros","mikron.spec-macros$macros",(-2073497594),null),new cljs.core.Symbol(null,"schema-spec*","schema-spec*",(1034780738),null),"mikron/spec_macros.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(5),true,(5),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"options","options",(1740170016),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null)], null)),"Helper macro for shorthand schema spec definition.",(cljs.core.truth_(mikron.spec_macros$macros.schema_spec_STAR_)?mikron.spec_macros$macros.schema_spec_STAR_.cljs$lang$test:null)]));

mikron.spec_macros$macros.schema_spec_STAR_.cljs$lang$macro = true;
