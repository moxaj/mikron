goog.provide("mikron.spec_macros");
/**
 * Helper macro for shorthand schema spec definition.
 */
mikron.spec_macros.schema_spec_STAR_ = (function mikron$spec_macros$schema_spec_STAR_(var_args){
var args__25948__auto__ = [];
var len__25946__auto___142 = arguments.length;
var i__25947__auto___143 = (0);
while(true){
if((i__25947__auto___143 < len__25946__auto___142)){
args__25948__auto__.push((arguments[i__25947__auto___143]));

var G__144 = (i__25947__auto___143 + (1));
i__25947__auto___143 = G__144;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.spec_macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
});

mikron.spec_macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options,fields){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",(1200597689),null)),((cljs.core.empty_QMARK_.call(null,fields))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",(-581868663)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",(720641726),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null):null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"complex","complex",(1415610825))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",(850003863),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"options","options",(99638489))),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",(-1542560017),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",(-139722052),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",(-927379584),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496))),(function (){var x__25689__auto__ = options;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),fields));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","juxt","cljs.core/juxt",(263800975),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",(1174270348))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"options","options",(99638489))),cljs.core.take_nth.call(null,(2),fields)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",(-236330417),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","second","cljs.core/second",(520555958),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.spec_macros.schema_spec_STAR_.cljs$lang$maxFixedArity = (3);

mikron.spec_macros.schema_spec_STAR_.cljs$lang$applyTo = (function (seq138){
var G__139 = cljs.core.first.call(null,seq138);
var seq138__$1 = cljs.core.next.call(null,seq138);
var G__140 = cljs.core.first.call(null,seq138__$1);
var seq138__$2 = cljs.core.next.call(null,seq138__$1);
var G__141 = cljs.core.first.call(null,seq138__$2);
var seq138__$3 = cljs.core.next.call(null,seq138__$2);
return mikron.spec_macros.schema_spec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__139,G__140,G__141,seq138__$3);
});


mikron.spec_macros.schema_spec_STAR_.cljs$lang$macro = true;
