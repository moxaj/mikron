goog.provide("mikron.codegen.interp");
if(typeof mikron.codegen.interp.interp !== 'undefined'){
} else {
(function (){
mikron.codegen.interp.interp = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(27),(27),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.interp","interp"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.interp.interp;},new cljs.core.Symbol("mikron.codegen.interp","interp","mikron.codegen.interp/interp",(-1459551641),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.interp","mikron.codegen.interp",(2131442716),null),new cljs.core.Symbol(null,"interp","interp",(-1077734662),null),"mikron/codegen/interp.cljc",(17),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.interp.interp)?mikron.codegen.interp.interp.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"char","char",(-641587586)),(function (_,___$1,value_1,value_2,env){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,cljs.core.char$);
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"integer","integer",(-604721710)),(function (_,___$1,value_1,value_2,env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","round","mikron.util.math/round",(-718923617),null)),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"floating","floating",(-1978091029)),null,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"floating","floating",(-1978091029)),(function (_,___$1,value_1,value_2,p__728){
var map__729 = p__728;
var map__729__$1 = ((((!((map__729 == null)))?((((map__729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__729):map__729);
var time_factor = cljs.core.get.call(null,map__729__$1,new cljs.core.Keyword(null,"time-factor","time-factor",(-2011149288)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","interp","mikron.util.math/interp",(-1285881182),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = time_factor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"list","list",(765357683)),(function (p__731,route,value_1,value_2,env){
var vec__732 = p__731;
var _ = cljs.core.nth.call(null,vec__732,(0),null);
var options = cljs.core.nth.call(null,vec__732,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__732,(2),null);
var value_1_vec = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1-vec"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(20),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(20),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(42)], null));
var value_2_vec = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2-vec"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(20),new cljs.core.Keyword(null,"column","column",(2078222095)),(43),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(20),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(54)], null));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"all","all",(892129742)).cljs$core$IFn$_invoke$arity$1(route))){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
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
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",(1902966158)),options,schema_SINGLEQUOTE_], null),route,value_1_vec,value_2_vec,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (p__735,route,value_1,value_2,env){
var vec__736 = p__735;
var _ = cljs.core.nth.call(null,vec__736,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__736,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__736,(2),null);
var index = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"index"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(36)], null));
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(37),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(45)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(46),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(54)], null));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(55),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(60)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(61),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(67)], null));
var length_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(68),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(76)], null));
var length_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(28),new cljs.core.Keyword(null,"column","column",(2078222095)),(77),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(28),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(85)], null));
var route_SINGLEQUOTE_ = new cljs.core.Keyword(null,"all","all",(892129742)).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.not.call(null,route_SINGLEQUOTE_)){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
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
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = value;
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
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,null,value_2_SINGLEQUOTE_,env);
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
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,schema_SINGLEQUOTE_,route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__739,route,value_1,value_2,env){
var vec__740 = p__739;
var _ = cljs.core.nth.call(null,vec__740,(0),null);
var map__743 = cljs.core.nth.call(null,vec__740,(1),null);
var map__743__$1 = ((((!((map__743 == null)))?((((map__743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__743):map__743);
var sorted_by = cljs.core.get.call(null,map__743__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var key_schema = cljs.core.nth.call(null,vec__740,(2),null);
var val_schema = cljs.core.nth.call(null,vec__740,(3),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
var key_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"key-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(49),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(54)], null));
var keys_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"keys-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(55),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(61)], null));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(62),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(67)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(47),new cljs.core.Keyword(null,"column","column",(2078222095)),(68),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(47),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(74)], null));
var route_SINGLEQUOTE_ = new cljs.core.Keyword(null,"all","all",(892129742)).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.not.call(null,route_SINGLEQUOTE_)){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value;
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
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null)),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?value:cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","persistent!","cljs.core/persistent!",(-1804741483),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",(1346583165),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = key_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,val_schema,route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,null,value_2_SINGLEQUOTE_,env);
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
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__745,route,value_1,value_2,env){
var vec__746 = p__745;
var _ = cljs.core.nth.call(null,vec__746,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__746,(1),null);
var schemas = cljs.core.nth.call(null,vec__746,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(67),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(67),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(67),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(67),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.tuple__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__746,_,___$1,schemas){
return (function (p__753){
var vec__754 = p__753;
var key = cljs.core.nth.call(null,vec__754,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__754,(1),null);
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
return mikron.codegen.interp.interp.call(null,schemas.call(null,key),route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
} else {
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__746,_,___$1,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_tuple.call(null,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__757,route,value_1,value_2,env){
var vec__758 = p__757;
var _ = cljs.core.nth.call(null,vec__758,(0),null);
var map__761 = cljs.core.nth.call(null,vec__758,(1),null);
var map__761__$1 = ((((!((map__761 == null)))?((((map__761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__761):map__761);
var type = cljs.core.get.call(null,map__761__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__758,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(81),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(81),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(81),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(81),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.record__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__758,_,map__761,map__761__$1,type,schemas){
return (function (p__767){
var vec__768 = p__767;
var key = cljs.core.nth.call(null,vec__768,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__768,(1),null);
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
return mikron.codegen.interp.interp.call(null,schemas.call(null,key),route_SINGLEQUOTE_,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
} else {
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__758,_,map__761,map__761__$1,type,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_record.call(null,fields,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__771,route,value_1,value_2,env){
var vec__772 = p__771;
var _ = cljs.core.nth.call(null,vec__772,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__772,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__772,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,schema_SINGLEQUOTE_,route,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__775,route,value_1,value_2,env){
var vec__776 = p__775;
var _ = cljs.core.nth.call(null,vec__776,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__776,(1),null);
var selector = cljs.core.nth.call(null,vec__776,(2),null);
var multi_map = cljs.core.nth.call(null,vec__776,(3),null);
var case_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"case-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(100),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(100),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var case_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"case-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(100),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(100),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
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
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__25689__auto__ = case_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = case_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__25689__auto__ = case_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.mapcat.call(null,((function (case_1,case_2,vec__776,_,___$1,selector,multi_map){
return (function (p__791){
var vec__792 = p__791;
var multi_case = cljs.core.nth.call(null,vec__792,(0),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__792,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_case,mikron.codegen.interp.interp.call(null,schema_SINGLEQUOTE_,route,value_1,value_2,env)], null);
});})(case_1,case_2,vec__776,_,___$1,selector,multi_map))
,multi_map)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__795,route,value_1,value_2,env){
var vec__796 = p__795;
var _ = cljs.core.nth.call(null,vec__796,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__796,(1),null);
var pre = cljs.core.nth.call(null,vec__796,(2),null);
var post = cljs.core.nth.call(null,vec__796,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__796,(4),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(111),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(111),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(111),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(111),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = pre;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = pre;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = post;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,schema_SINGLEQUOTE_,route,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__799,route,value_1,value_2,env){
var vec__800 = p__799;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__800,(0),null);
return mikron.codegen.interp.interp.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),route,value_1,value_2,env);
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),(function (_,___$1,value_1,value_2,p__803){
var map__804 = p__803;
var map__804__$1 = ((((!((map__804 == null)))?((((map__804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__804):map__804);
var prefer_first_QMARK_ = cljs.core.get.call(null,map__804__$1,new cljs.core.Keyword(null,"prefer-first?","prefer-first?",(-1698989589)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = prefer_first_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,_,value_1,value_2,p__806){
var map__807 = p__806;
var map__807__$1 = ((((!((map__807 == null)))?((((map__807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__807):map__807);
var prefer_first_QMARK_ = cljs.core.get.call(null,map__807__$1,new cljs.core.Keyword(null,"prefer-first?","prefer-first?",(-1698989589)));
var time_factor = cljs.core.get.call(null,map__807__$1,new cljs.core.Keyword(null,"time-factor","time-factor",(-2011149288)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = mikron.compile_util.processor_name.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = prefer_first_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = time_factor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"interp","interp",(1576701107)),(function (_,p__809){
var map__810 = p__809;
var map__810__$1 = ((((!((map__810 == null)))?((((map__810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__810):map__810);
var env = map__810__$1;
var schema = cljs.core.get.call(null,map__810__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var ext = cljs.core.get.call(null,map__810__$1,new cljs.core.Keyword(null,"ext","ext",(-996964541)));
var ___$1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"_"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(126),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(126),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(32)], null));
var value_1 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(126),new cljs.core.Keyword(null,"column","column",(2078222095)),(33),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(126),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(40)], null));
var value_2 = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(126),new cljs.core.Keyword(null,"column","column",(2078222095)),(41),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(126),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
var prefer_first_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"prefer-first?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(126),new cljs.core.Keyword(null,"column","column",(2078222095)),(49),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(126),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(62)], null));
var time_factor = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"time-factor"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(126),new cljs.core.Keyword(null,"column","column",(2078222095)),(63),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(126),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(74)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = prefer_first_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = time_factor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.interp.interp.call(null,schema,new cljs.core.Keyword(null,"interp","interp",(1576701107)).cljs$core$IFn$_invoke$arity$1(ext),value_1,value_2,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"prefer-first?","prefer-first?",(-1698989589)),prefer_first_QMARK_,new cljs.core.Keyword(null,"time-factor","time-factor",(-2011149288)),time_factor));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
