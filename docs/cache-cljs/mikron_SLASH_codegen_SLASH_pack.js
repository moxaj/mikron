goog.provide("mikron.codegen.pack");
if(typeof mikron.codegen.pack.pack !== 'undefined'){
} else {
(function (){
mikron.codegen.pack.pack = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(27),(27),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.pack","pack"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.pack.pack;},new cljs.core.Symbol("mikron.codegen.pack","pack","mikron.codegen.pack/pack",(1067265236),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.pack","mikron.codegen.pack",(-1488111880),null),new cljs.core.Symbol(null,"pack","pack",(400273636),null),"mikron/codegen/pack.cljc",(15),(1),(9),(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.pack.pack)?mikron.codegen.pack.pack.cljs$lang$test:null)])));})()
;
}
(function (){
mikron.codegen.pack.pack_STAR_ = (function mikron$codegen$pack$pack_STAR_(schema,value,p__307){
var map__310 = p__307;
var map__310__$1 = ((((!((map__310 == null)))?((((map__310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__310):map__310);
var env = map__310__$1;
var diffed_QMARK_ = cljs.core.get.call(null,map__310__$1,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
if(cljs.core.not.call(null,diffed_QMARK_)){
return mikron.codegen.pack.pack.call(null,schema,value,env);
} else {
var value_dnil_QMARK_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value-dnil?"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(14),new cljs.core.Keyword(null,"column","column",(2078222095)),(33),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(14),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404))], null),value_dnil_QMARK_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__25689__auto__ = value_dnil_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,schema,value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}); return (
new cljs.core.Var(function(){return mikron.codegen.pack.pack_STAR_;},new cljs.core.Symbol("mikron.codegen.pack","pack*","mikron.codegen.pack/pack*",(-436970820),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.pack","mikron.codegen.pack",(-1488111880),null),new cljs.core.Symbol(null,"pack*","pack*",(-231225748),null),"mikron/codegen/pack.cljc",(12),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"diffed?","diffed?",(-454160819),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)], null)),null,(cljs.core.truth_(mikron.codegen.pack.pack_STAR_)?mikron.codegen.pack.pack_STAR_.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"primitive","primitive",(1884541424)),(function (p__312,value,p__313){
var vec__314 = p__312;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__314,(0),null);
var map__317 = p__313;
var map__317__$1 = ((((!((map__317 == null)))?((((map__317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__317):map__317);
var buffer = cljs.core.get.call(null,map__317__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.symbol.call(null,"mikron.buffer",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_SINGLEQUOTE_))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (p__319,value,env){
var vec__320 = p__319;
var _ = cljs.core.nth.call(null,vec__320,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__320,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__320,(2),null);
var length = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(29),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(29),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(29),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(29),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
var index = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"index"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(29),new cljs.core.Keyword(null,"column","column",(2078222095)),(45),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(29),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(50)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),length,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",(-1326291458),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = index;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"coll","coll",(1647737163)),(function (p__323,value,env){
var vec__324 = p__323;
var _ = cljs.core.nth.call(null,vec__324,(0),null);
var options = cljs.core.nth.call(null,vec__324,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__324,(2),null);
var length = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(37),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(37),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(37),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(37),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),length,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","run!","cljs.core/run!",(-591566066),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__327,value,env){
var vec__328 = p__327;
var _ = cljs.core.nth.call(null,vec__328,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__328,(1),null);
var key_schema = cljs.core.nth.call(null,vec__328,(2),null);
var value_schema = cljs.core.nth.call(null,vec__328,(3),null);
var length = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"length"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(45),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(45),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var entry_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"entry'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(45),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(45),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(44)], null));
var key_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"key'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(45),new cljs.core.Keyword(null,"column","column",(2078222095)),(45),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(45),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(49)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(45),new cljs.core.Keyword(null,"column","column",(2078222095)),(50),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(45),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(56)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),length,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","run!","cljs.core/run!",(-591566066),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = key_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","key","cljs.core/key",(799303703),null)),(function (){var x__25689__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","val","cljs.core/val",(833354142),null)),(function (){var x__25689__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,key_schema,key_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,value_schema,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__331,value,env){
var vec__332 = p__331;
var _ = cljs.core.nth.call(null,vec__332,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__332,(1),null);
var schemas = cljs.core.nth.call(null,vec__332,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,((function (vec__332,_,___$1,schemas){
return (function (p__335){
var vec__336 = p__335;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__336,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__336,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.tuple_lookup.call(null,value,key_SINGLEQUOTE_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schemas.call(null,key_SINGLEQUOTE_),value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(vec__332,_,___$1,schemas))
,mikron.compile_util.tuple__GT_fields.call(null,schemas))));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__339,value,env){
var vec__340 = p__339;
var _ = cljs.core.nth.call(null,vec__340,(0),null);
var map__343 = cljs.core.nth.call(null,vec__340,(1),null);
var map__343__$1 = ((((!((map__343 == null)))?((((map__343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343):map__343);
var type = cljs.core.get.call(null,map__343__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__340,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,((function (vec__340,_,map__343,map__343__$1,type,schemas){
return (function (p__345){
var vec__346 = p__345;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__346,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__346,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.record_lookup.call(null,value,key_SINGLEQUOTE_,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schemas.call(null,key_SINGLEQUOTE_),value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});})(vec__340,_,map__343,map__343__$1,type,schemas))
,mikron.compile_util.record__GT_fields.call(null,schemas))));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__349,value,env){
var vec__350 = p__349;
var _ = cljs.core.nth.call(null,vec__350,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__350,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__350,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404))], null),value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,schema_SINGLEQUOTE_,value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__353,value,env){
var vec__354 = p__353;
var _ = cljs.core.nth.call(null,vec__354,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__354,(1),null);
var selector = cljs.core.nth.call(null,vec__354,(2),null);
var multi_map = cljs.core.nth.call(null,vec__354,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = selector;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (vec__354,_,___$1,selector,multi_map){
return (function (index,multi_case){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_case,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,mikron.compile_util.integer_type.call(null,cljs.core.count.call(null,multi_map)),index,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,multi_map.call(null,multi_case),value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(vec__354,_,___$1,selector,multi_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,multi_map))))));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"enum","enum",(1679018432)),(function (p__357,value,env){
var vec__358 = p__357;
var _ = cljs.core.nth.call(null,vec__358,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__358,(1),null);
var enum_values = cljs.core.nth.call(null,vec__358,(2),null);
return mikron.codegen.pack.pack.call(null,mikron.compile_util.integer_type.call(null,cljs.core.count.call(null,enum_values)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (vec__358,_,___$1,enum_values){
return (function (index,enum_value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enum_value,index], null);
});})(vec__358,_,___$1,enum_values))
,enum_values)))),env);
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__361,value,env){
var vec__362 = p__361;
var _ = cljs.core.nth.call(null,vec__362,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__362,(1),null);
var pre = cljs.core.nth.call(null,vec__362,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__362,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__362,(4),null);
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(93),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(93),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = pre;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__365,value,env){
var vec__366 = p__365;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__366,(0),null);
return mikron.codegen.pack.pack.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),value,env);
}));
cljs.core._add_method.call(null,mikron.codegen.pack.pack,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,value,p__369){
var map__370 = p__369;
var map__370__$1 = ((((!((map__370 == null)))?((((map__370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370):map__370);
var diffed_QMARK_ = cljs.core.get.call(null,map__370__$1,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
var buffer = cljs.core.get.call(null,map__370__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = mikron.compile_util.processor_name.call(null,(cljs.core.truth_(diffed_QMARK_)?new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)):new cljs.core.Keyword(null,"pack","pack",(-1240257891))),schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),(function (_,p__372){
var map__373 = p__372;
var map__373__$1 = ((((!((map__373 == null)))?((((map__373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__373):map__373);
var env = map__373__$1;
var schema = cljs.core.get.call(null,map__373__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(104),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(104),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(36)], null));
var buffer = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"buffer"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(104),new cljs.core.Keyword(null,"column","column",(2078222095)),(37),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(104),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(43)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schema,value,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),buffer,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),false));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),(function (_,p__375){
var map__376 = p__375;
var map__376__$1 = ((((!((map__376 == null)))?((((map__376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376):map__376);
var env = map__376__$1;
var schema = cljs.core.get.call(null,map__376__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(109),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(109),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(36)], null));
var buffer = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"buffer"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.pack,new cljs.core.Keyword(null,"line","line",(212345235)),(109),new cljs.core.Keyword(null,"column","column",(2078222095)),(37),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(109),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(43)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.pack.pack_STAR_.call(null,schema,value,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),buffer,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),true));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
