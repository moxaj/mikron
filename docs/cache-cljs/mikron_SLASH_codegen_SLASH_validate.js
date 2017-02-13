goog.provide("mikron.codegen.validate");
if(typeof mikron.codegen.validate.valid_QMARK_ !== 'undefined'){
} else {
(function (){
mikron.codegen.validate.valid_QMARK_ = (function (){var method_table__22680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22684__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(27),(27),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.validate","valid?"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__22684__auto__,method_table__22680__auto__,prefer_table__22681__auto__,method_cache__22682__auto__,cached_hierarchy__22683__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.validate.valid_QMARK_;},new cljs.core.Symbol("mikron.codegen.validate","valid?","mikron.codegen.validate/valid?",(1105356347),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.validate","mikron.codegen.validate",(-1774710012),null),new cljs.core.Symbol(null,"valid?","valid?",(1428119148),null),"mikron/codegen/validate.cljc",(17),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.validate.valid_QMARK_)?mikron.codegen.validate.valid_QMARK_.cljs$lang$test:null)])));})()
;
}
/**
 * Generates code for integer validation.
 */
(function (){
mikron.codegen.validate.valid_integer_QMARK_ = (function mikron$codegen$validate$valid_integer_QMARK_(value,bytes,signed_QMARK_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",(1710697810),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",(350096541),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-long","cljs.core/unchecked-long",(2050992288),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.util.math.lower_bound.call(null,bytes,signed_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<","cljs.core/<",(1677496129),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-long","cljs.core/unchecked-long",(2050992288),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.util.math.upper_bound.call(null,bytes,signed_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}); return (
new cljs.core.Var(function(){return mikron.codegen.validate.valid_integer_QMARK_;},new cljs.core.Symbol("mikron.codegen.validate","valid-integer?","mikron.codegen.validate/valid-integer?",(-1294680808),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.validate","mikron.codegen.validate",(-1774710012),null),new cljs.core.Symbol(null,"valid-integer?","valid-integer?",(-836876603),null),"mikron/codegen/validate.cljc",(21),(1),(12),(12),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.Symbol(null,"signed?","signed?",(1929052384),null)], null)),"Generates code for integer validation.",(cljs.core.truth_(mikron.codegen.validate.valid_integer_QMARK_)?mikron.codegen.validate.valid_integer_QMARK_.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"byte","byte",(683775220)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(1),true);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"ubyte","ubyte",(-1022840731)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(1),false);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"short","short",(1928760516)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(2),true);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"ushort","ushort",(1434312932)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(2),false);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"int","int",(-1741416922)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(4),true);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"uint","uint",(521409576)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(4),false);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"long","long",(-171452093)),(function (_,value,___$1){
return mikron.codegen.validate.valid_integer_QMARK_.call(null,value,(8),true);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"varint","varint",(1231147450)),(function (_,value,env){
return mikron.codegen.validate.valid_QMARK_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long","long",(-171452093))], null),value,env);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"floating","floating",(-1978091029)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",(-811857295),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"boolean","boolean",(-1919418404)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"char","char",(-641587586)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","char?","cljs.core/char?",(416405281),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"string","string",(-1989541586)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"binary","binary",(-1802232288)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.schema","binary?","mikron.util.schema/binary?",(1301386860),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"keyword","keyword",(811389747)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),(function (_,value,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",(1422196122),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"list","list",(765357683)),(function (p__338,value,env){
var vec__339 = p__338;
var _ = cljs.core.nth.call(null,vec__339,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__339,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__339,(2),null);
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(68),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(68),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",(1416822717),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (p__342,value,env){
var vec__343 = p__342;
var _ = cljs.core.nth.call(null,vec__343,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__343,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__343,(2),null);
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(75),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(75),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",(-1550392028),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","every?","mikron.util.coll/every?",(2075120300),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"set","set",(304602554)),(function (p__346,value,env){
var vec__347 = p__346;
var _ = cljs.core.nth.call(null,vec__347,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__347,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__347,(2),null);
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(82),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(82),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",(-1176684971),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",(1416822717),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__350,value,env){
var vec__351 = p__350;
var _ = cljs.core.nth.call(null,vec__351,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__351,(1),null);
var key_schema = cljs.core.nth.call(null,vec__351,(2),null);
var value_schema = cljs.core.nth.call(null,vec__351,(3),null);
var entry_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"entry'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(89),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(89),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
var key_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"key'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(89),new cljs.core.Keyword(null,"column","column",(2078222095)),(38),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(89),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(42)], null));
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(89),new cljs.core.Keyword(null,"column","column",(2078222095)),(43),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(89),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(49)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",(1416822717),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = key_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","key","cljs.core/key",(799303703),null)),(function (){var x__22590__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","val","cljs.core/val",(833354142),null)),(function (){var x__22590__auto__ = entry_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,key_schema,key_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,value_schema,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__354,value,env){
var vec__355 = p__354;
var _ = cljs.core.nth.call(null,vec__355,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__355,(1),null);
var schemas = cljs.core.nth.call(null,vec__355,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",(-1550392028),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","count","mikron.util.coll/count",(-439786192),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.count.call(null,schemas);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core.map.call(null,((function (vec__355,_,___$1,schemas){
return (function (p__358){
var vec__359 = p__358;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__359,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__359,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.compile_util.tuple_lookup.call(null,value,key_SINGLEQUOTE_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schemas.call(null,key_SINGLEQUOTE_),value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
});})(vec__355,_,___$1,schemas))
,mikron.compile_util.tuple__GT_fields.call(null,schemas))));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__362,value,env){
var vec__363 = p__362;
var _ = cljs.core.nth.call(null,vec__363,(0),null);
var map__366 = cljs.core.nth.call(null,vec__363,(1),null);
var map__366__$1 = ((((!((map__366 == null)))?((((map__366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__366):map__366);
var type = cljs.core.get.call(null,map__366__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__363,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = (cljs.core.truth_(type)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),(function (){var x__22590__auto__ = cljs.core.first.call(null,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())):cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core.map.call(null,((function (vec__363,_,map__366,map__366__$1,type,schemas){
return (function (p__368){
var vec__369 = p__368;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__369,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__369,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.compile_util.record_lookup.call(null,value,key_SINGLEQUOTE_,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schemas.call(null,key_SINGLEQUOTE_),value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
});})(vec__363,_,map__366,map__366__$1,type,schemas))
,mikron.compile_util.record__GT_fields.call(null,schemas))));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__372,value,env){
var vec__373 = p__372;
var _ = cljs.core.nth.call(null,vec__373,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__373,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__373,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__376,value,env){
var vec__377 = p__376;
var _ = cljs.core.nth.call(null,vec__377,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__377,(1),null);
var selector = cljs.core.nth.call(null,vec__377,(2),null);
var multi_map = cljs.core.nth.call(null,vec__377,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util","safe","mikron.util/safe",(-616818061),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662))),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = selector;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core.mapcat.call(null,((function (vec__377,_,___$1,selector,multi_map){
return (function (p__380){
var vec__381 = p__380;
var multi_case = cljs.core.nth.call(null,vec__381,(0),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__381,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_case,mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value,env)], null);
});})(vec__377,_,___$1,selector,multi_map))
,multi_map),cljs.core._conj.call(null,cljs.core.List.EMPTY,false)));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"enum","enum",(1679018432)),(function (p__384,value,_){
var vec__385 = p__384;
var ___$1 = cljs.core.nth.call(null,vec__385,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__385,(1),null);
var enum_values = cljs.core.nth.call(null,vec__385,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = cljs.core.set.call(null,enum_values);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__388,value,env){
var vec__389 = p__388;
var _ = cljs.core.nth.call(null,vec__389,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__389,(1),null);
var pre = cljs.core.nth.call(null,vec__389,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__389,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__389,(4),null);
var value_SINGLEQUOTE_ = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value'"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(130),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(130),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util","safe","mikron.util/safe",(-616818061),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662))),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = pre;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662))),(function (){var x__22590__auto__ = value_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema_SINGLEQUOTE_,value_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__392,value,env){
var vec__393 = p__392;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__393,(0),null);
return mikron.codegen.validate.valid_QMARK_.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),value,env);
}));
cljs.core._add_method.call(null,mikron.codegen.validate.valid_QMARK_,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,value,_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = mikron.compile_util.processor_name.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),(function (_,p__396){
var map__397 = p__396;
var map__397__$1 = ((((!((map__397 == null)))?((((map__397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__397):map__397);
var env = map__397__$1;
var schema = cljs.core.get.call(null,map__397__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var value = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"value"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.validate,new cljs.core.Keyword(null,"line","line",(212345235)),(142),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(142),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(36)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.validate.valid_QMARK_.call(null,schema,value,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
