goog.provide("mikron.compile_util");
/**
 * Returns a memoized processor name.
 */
mikron.compile_util.processor_name = cljs.core.memoize.call(null,(function (processor_type,schema_name){
return cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,processor_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_name))].join('')),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)),schema_name], null));
}));
/**
 * Returns `true` if compiled for cljs, `false` otherwise.
 */
mikron.compile_util.cljs_QMARK_ = (function mikron$compile_util$cljs_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",(-1222483266),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&env","&env",(-919163083),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.compile_util.cljs_QMARK_.cljs$lang$macro = true;
/**
 * Executes each expression of `body` in the context of each symbol in `syms`
 *   bound to a generated symbol.
 */
mikron.compile_util.with_gensyms = (function mikron$compile_util$with_gensyms(var_args){
var args__25948__auto__ = [];
var len__25946__auto___86 = arguments.length;
var i__25947__auto___87 = (0);
while(true){
if((i__25947__auto___87 < len__25946__auto___86)){
args__25948__auto__.push((arguments[i__25947__auto___87]));

var G__88 = (i__25947__auto___87 + (1));
i__25947__auto___87 = G__88;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.compile_util.with_gensyms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
});

mikron.compile_util.with_gensyms.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms,body){
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

mikron.compile_util.with_gensyms.cljs$lang$maxFixedArity = (3);

mikron.compile_util.with_gensyms.cljs$lang$applyTo = (function (seq82){
var G__83 = cljs.core.first.call(null,seq82);
var seq82__$1 = cljs.core.next.call(null,seq82);
var G__84 = cljs.core.first.call(null,seq82__$1);
var seq82__$2 = cljs.core.next.call(null,seq82__$1);
var G__85 = cljs.core.first.call(null,seq82__$2);
var seq82__$3 = cljs.core.next.call(null,seq82__$2);
return mikron.compile_util.with_gensyms.cljs$core$IFn$_invoke$arity$variadic(G__83,G__84,G__85,seq82__$3);
});


mikron.compile_util.with_gensyms.cljs$lang$macro = true;
/**
 * Executes each expression of `body` in the context of each symbol in `syms`
 *   bound to an **evaluated** value. Can be used to prevent accidental multiple evaluation
 *   in macros.
 */
mikron.compile_util.with_evaluated = (function mikron$compile_util$with_evaluated(var_args){
var args__25948__auto__ = [];
var len__25946__auto___101 = arguments.length;
var i__25947__auto___102 = (0);
while(true){
if((i__25947__auto___102 < len__25946__auto___101)){
args__25948__auto__.push((arguments[i__25947__auto___102]));

var G__103 = (i__25947__auto___102 + (1));
i__25947__auto___102 = G__103;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.compile_util.with_evaluated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
});

mikron.compile_util.with_evaluated.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms,body){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.gensym),syms));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (m){
return (function (p__97){
var vec__98 = p__97;
var sym = cljs.core.nth.call(null,vec__98,(0),null);
var temp_sym = cljs.core.nth.call(null,vec__98,(1),null);
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

mikron.compile_util.with_evaluated.cljs$lang$maxFixedArity = (3);

mikron.compile_util.with_evaluated.cljs$lang$applyTo = (function (seq89){
var G__90 = cljs.core.first.call(null,seq89);
var seq89__$1 = cljs.core.next.call(null,seq89);
var G__91 = cljs.core.first.call(null,seq89__$1);
var seq89__$2 = cljs.core.next.call(null,seq89__$1);
var G__92 = cljs.core.first.call(null,seq89__$2);
var seq89__$3 = cljs.core.next.call(null,seq89__$2);
return mikron.compile_util.with_evaluated.cljs$core$IFn$_invoke$arity$variadic(G__90,G__91,G__92,seq89__$3);
});


mikron.compile_util.with_evaluated.cljs$lang$macro = true;
/**
 * Walks `form` and collects all values for which the predicate `f` returns `true`.
 *   Does not filter duplicates.
 */
mikron.compile_util.find_by_STAR_ = (function mikron$compile_util$find_by_STAR_(f,form){
var G__105 = ((cljs.core.seqable_QMARK_.call(null,form))?cljs.core.mapcat.call(null,cljs.core.partial.call(null,mikron.compile_util.find_by_STAR_,f),form):cljs.core.PersistentVector.EMPTY);
var G__105__$1 = (cljs.core.truth_(f.call(null,form))?cljs.core.conj.call(null,G__105,form):G__105);
return G__105__$1;
});
/**
 * Walks `form` and collects all values for which the predicate `f` returns true.
 *   Filter duplicates.
 */
mikron.compile_util.find_by = (function mikron$compile_util$find_by(f,form){
return cljs.core.set.call(null,mikron.compile_util.find_by_STAR_.call(null,f,form));
});
/**
 * Returns the type of `schema` or `nil` if the schema is invalid.
 */
mikron.compile_util.type_of = (function mikron$compile_util$type_of(var_args){
var args__25948__auto__ = [];
var len__25946__auto___108 = arguments.length;
var i__25947__auto___109 = (0);
while(true){
if((i__25947__auto___109 < len__25946__auto___108)){
args__25948__auto__.push((arguments[i__25947__auto___109]));

var G__110 = (i__25947__auto___109 + (1));
i__25947__auto___109 = G__110;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((1) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((1)),(0),null)):null);
return mikron.compile_util.type_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25949__auto__);
});

mikron.compile_util.type_of.cljs$core$IFn$_invoke$arity$variadic = (function (schema,_){
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

mikron.compile_util.type_of.cljs$lang$maxFixedArity = (1);

mikron.compile_util.type_of.cljs$lang$applyTo = (function (seq106){
var G__107 = cljs.core.first.call(null,seq106);
var seq106__$1 = cljs.core.next.call(null,seq106);
return mikron.compile_util.type_of.cljs$core$IFn$_invoke$arity$variadic(G__107,seq106__$1);
});

/**
 * Returns an integer type into which `size` can fit.
 */
mikron.compile_util.integer_type = (function mikron$compile_util$integer_type(size){
var pred__114 = cljs.core._GT_;
var expr__115 = size;
if(cljs.core.truth_(pred__114.call(null,(256),expr__115))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"byte","byte",(683775220))], null);
} else {
if(cljs.core.truth_(pred__114.call(null,(65536),expr__115))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",(1928760516))], null);
} else {
if(cljs.core.truth_(pred__114.call(null,(2147483648),expr__115))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",(-1741416922))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long","long",(-171452093))], null);
}
}
}
});
/**
 * Generates code for record value lookup.
 */
mikron.compile_util.record_lookup = (function mikron$compile_util$record_lookup(record,key,p__117){
var vec__121 = p__117;
var class$ = cljs.core.nth.call(null,vec__121,(0),null);
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
});
/**
 * Returns a map from record keys to generated symbols.
 */
mikron.compile_util.record__GT_fields = (function mikron$compile_util$record__GT_fields(schemas){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.gensym.call(null,key)], null);
}),cljs.core.keys.call(null,schemas)));
});
/**
 * Generates code which reconstructs a record from its fields.
 */
mikron.compile_util.fields__GT_record = (function mikron$compile_util$fields__GT_record(fields,p__124){
var vec__128 = p__124;
var seq__129 = cljs.core.seq.call(null,vec__128);
var first__130 = cljs.core.first.call(null,seq__129);
var seq__129__$1 = cljs.core.next.call(null,seq__129);
var class$ = first__130;
var members = seq__129__$1;
if(cljs.core.not.call(null,class$)){
return fields;
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("->"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.map.call(null,((function (vec__128,seq__129,first__130,seq__129__$1,class$,members){
return (function (member){
var or__20727__auto__ = fields.call(null,cljs.core.keyword.call(null,member));
if(cljs.core.truth_(or__20727__auto__)){
return or__20727__auto__;
} else {
return (0);
}
});})(vec__128,seq__129,first__130,seq__129__$1,class$,members))
,members)));
}
});
/**
 * Generates code for tuple value lookup.
 */
mikron.compile_util.tuple_lookup = (function mikron$compile_util$tuple_lookup(tuple,index){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = tuple;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});
/**
 * Returns a map from tuple indices to generated symbols.
 */
mikron.compile_util.tuple__GT_fields = (function mikron$compile_util$tuple__GT_fields(schemas){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map_indexed.call(null,(function (index,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("value'-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''))], null);
}),schemas));
});
/**
 * Generates code which reconstructs a tuple from its fields.
 */
mikron.compile_util.fields__GT_tuple = (function mikron$compile_util$fields__GT_tuple(fields){
return cljs.core.vec.call(null,cljs.core.vals.call(null,fields));
});
if(typeof mikron.compile_util.processor !== 'undefined'){
} else {
/**
 * Generates processor code.
 */
mikron.compile_util.processor = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.compile-util","processor"),((function (method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__){
return (function (processor_type,env){
return processor_type;
});})(method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__,hierarchy__25783__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})();
}
