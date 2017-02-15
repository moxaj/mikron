goog.provide("mikron.codegen.interp");
if(typeof mikron.codegen.interp.interp !== 'undefined'){
} else {
(function (){
mikron.codegen.interp.interp = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(26),(26),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"floating","floating",(-1978091029)),(function (_,___$1,value_1,value_2,p__727){
var map__728 = p__727;
var map__728__$1 = ((((!((map__728 == null)))?((((map__728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__728):map__728);
var time_factor = cljs.core.get.call(null,map__728__$1,new cljs.core.Keyword(null,"time-factor","time-factor",(-2011149288)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","interp","mikron.util.math/interp",(-1285881182),null)),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = time_factor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"list","list",(765357683)),(function (p__730,route,value_1,value_2,env){
var vec__731 = p__730;
var _ = cljs.core.nth.call(null,vec__731,(0),null);
var options = cljs.core.nth.call(null,vec__731,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__731,(2),null);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (p__734,route,value_1,value_2,env){
var vec__735 = p__734;
var _ = cljs.core.nth.call(null,vec__735,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__735,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__735,(2),null);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__738,route,value_1,value_2,env){
var vec__739 = p__738;
var _ = cljs.core.nth.call(null,vec__739,(0),null);
var map__742 = cljs.core.nth.call(null,vec__739,(1),null);
var map__742__$1 = ((((!((map__742 == null)))?((((map__742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__742):map__742);
var sorted_by = cljs.core.get.call(null,map__742__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var key_schema = cljs.core.nth.call(null,vec__739,(2),null);
var val_schema = cljs.core.nth.call(null,vec__739,(3),null);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__744,route,value_1,value_2,env){
var vec__745 = p__744;
var _ = cljs.core.nth.call(null,vec__745,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__745,(1),null);
var schemas = cljs.core.nth.call(null,vec__745,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(67),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(67),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(67),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(67),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.tuple__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__745,_,___$1,schemas){
return (function (p__752){
var vec__753 = p__752;
var key = cljs.core.nth.call(null,vec__753,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__753,(1),null);
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
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__745,_,___$1,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_tuple.call(null,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__756,route,value_1,value_2,env){
var vec__757 = p__756;
var _ = cljs.core.nth.call(null,vec__757,(0),null);
var map__760 = cljs.core.nth.call(null,vec__757,(1),null);
var map__760__$1 = ((((!((map__760 == null)))?((((map__760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__760):map__760);
var type = cljs.core.get.call(null,map__760__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__757,(2),null);
var value_1_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-1'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(81),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(81),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(39)], null));
var value_2_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-2'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.interp,new cljs.core.Keyword(null,"line","line",(212345235)),(81),new cljs.core.Keyword(null,"column","column",(2078222095)),(40),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(81),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(48)], null));
if(!(cljs.core.map_QMARK_.call(null,route))){
return mikron.codegen.interp.interp.call(null,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),null,value_1,value_2,env);
} else {
var fields = mikron.compile_util.record__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__757,_,map__760,map__760__$1,type,schemas){
return (function (p__766){
var vec__767 = p__766;
var key = cljs.core.nth.call(null,vec__767,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__767,(1),null);
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
});})(fields,value_1_SINGLEQUOTE_,value_2_SINGLEQUOTE_,vec__757,_,map__760,map__760__$1,type,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_record.call(null,fields,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__770,route,value_1,value_2,env){
var vec__771 = p__770;
var _ = cljs.core.nth.call(null,vec__771,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__771,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__771,(2),null);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__774,route,value_1,value_2,env){
var vec__775 = p__774;
var _ = cljs.core.nth.call(null,vec__775,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__775,(1),null);
var selector = cljs.core.nth.call(null,vec__775,(2),null);
var multi_map = cljs.core.nth.call(null,vec__775,(3),null);
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
})(),cljs.core.mapcat.call(null,((function (case_1,case_2,vec__775,_,___$1,selector,multi_map){
return (function (p__790){
var vec__791 = p__790;
var multi_case = cljs.core.nth.call(null,vec__791,(0),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_case,mikron.codegen.interp.interp.call(null,schema_SINGLEQUOTE_,route,value_1,value_2,env)], null);
});})(case_1,case_2,vec__775,_,___$1,selector,multi_map))
,multi_map)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__794,route,value_1,value_2,env){
var vec__795 = p__794;
var _ = cljs.core.nth.call(null,vec__795,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__795,(1),null);
var pre = cljs.core.nth.call(null,vec__795,(2),null);
var post = cljs.core.nth.call(null,vec__795,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__795,(4),null);
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
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__798,route,value_1,value_2,env){
var vec__799 = p__798;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__799,(0),null);
return mikron.codegen.interp.interp.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),route,value_1,value_2,env);
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"built-in","built-in",(1245067766)),(function (_,___$1,value_1,value_2,p__802){
var map__803 = p__802;
var map__803__$1 = ((((!((map__803 == null)))?((((map__803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__803):map__803);
var prefer_first_QMARK_ = cljs.core.get.call(null,map__803__$1,new cljs.core.Keyword(null,"prefer-first?","prefer-first?",(-1698989589)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = prefer_first_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.interp.interp,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,_,value_1,value_2,p__805){
var map__806 = p__805;
var map__806__$1 = ((((!((map__806 == null)))?((((map__806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__806):map__806);
var prefer_first_QMARK_ = cljs.core.get.call(null,map__806__$1,new cljs.core.Keyword(null,"prefer-first?","prefer-first?",(-1698989589)));
var time_factor = cljs.core.get.call(null,map__806__$1,new cljs.core.Keyword(null,"time-factor","time-factor",(-2011149288)));
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
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"interp","interp",(1576701107)),(function (_,p__808){
var map__809 = p__808;
var map__809__$1 = ((((!((map__809 == null)))?((((map__809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__809):map__809);
var env = map__809__$1;
var schema = cljs.core.get.call(null,map__809__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var ext = cljs.core.get.call(null,map__809__$1,new cljs.core.Keyword(null,"ext","ext",(-996964541)));
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
