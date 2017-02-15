goog.provide("mikron.codegen.unpack");
if(typeof mikron.codegen.unpack.unpack !== 'undefined'){
} else {
(function (){
mikron.codegen.unpack.unpack = (function (){var method_table__25779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25783__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(26),(26),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.unpack","unpack"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__25783__auto__,method_table__25779__auto__,prefer_table__25780__auto__,method_cache__25781__auto__,cached_hierarchy__25782__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.unpack.unpack;},new cljs.core.Symbol("mikron.codegen.unpack","unpack","mikron.codegen.unpack/unpack",(-1321232312),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.unpack","mikron.codegen.unpack",(-1253600563),null),new cljs.core.Symbol(null,"unpack","unpack",(-386536015),null),"mikron/codegen/unpack.cljc",(17),(1),(9),(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.unpack.unpack)?mikron.codegen.unpack.unpack.cljs$lang$test:null)])));})()
;
}
(function (){
mikron.codegen.unpack.unpack_STAR_ = (function mikron$codegen$unpack$unpack_STAR_(schema,p__377){
var map__380 = p__377;
var map__380__$1 = ((((!((map__380 == null)))?((((map__380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__380):map__380);
var env = map__380__$1;
var diffed_QMARK_ = cljs.core.get.call(null,map__380__$1,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
if(cljs.core.not.call(null,diffed_QMARK_)){
return mikron.codegen.unpack.unpack.call(null,schema,env);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470))),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}
}); return (
new cljs.core.Var(function(){return mikron.codegen.unpack.unpack_STAR_;},new cljs.core.Symbol("mikron.codegen.unpack","unpack*","mikron.codegen.unpack/unpack*",(-128408297),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.unpack","mikron.codegen.unpack",(-1253600563),null),new cljs.core.Symbol(null,"unpack*","unpack*",(522026654),null),"mikron/codegen/unpack.cljc",(14),(1),(11),(11),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"diffed?","diffed?",(-454160819),null)], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)], null)),null,(cljs.core.truth_(mikron.codegen.unpack.unpack_STAR_)?mikron.codegen.unpack.unpack_STAR_.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"primitive","primitive",(1884541424)),(function (p__382,p__383){
var vec__384 = p__382;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__384,(0),null);
var map__387 = p__383;
var map__387__$1 = ((((!((map__387 == null)))?((((map__387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__387):map__387);
var buffer = cljs.core.get.call(null,map__387__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.symbol.call(null,"mikron.buffer",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,schema_SINGLEQUOTE_))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"coll","coll",(1647737163)),(function (p__389,env){
var vec__390 = p__389;
var _ = cljs.core.nth.call(null,vec__390,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__390,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__390,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack_STAR_.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"set","set",(304602554)),(function (p__393,env){
var vec__394 = p__393;
var _ = cljs.core.nth.call(null,vec__394,(0),null);
var map__397 = cljs.core.nth.call(null,vec__394,(1),null);
var map__397__$1 = ((((!((map__397 == null)))?((((map__397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__397):map__397);
var sorted_by = cljs.core.get.call(null,map__397__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__394,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sorted-set-by","cljs.core/sorted-set-by",(-581598320),null)),(function (){var x__25689__auto__ = sorted_by;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (sorted_by == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack_STAR_.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__399,env){
var vec__400 = p__399;
var _ = cljs.core.nth.call(null,vec__400,(0),null);
var map__403 = cljs.core.nth.call(null,vec__400,(1),null);
var map__403__$1 = ((((!((map__403 == null)))?((((map__403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__403):map__403);
var sorted_by = cljs.core.get.call(null,map__403__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var key_schema = cljs.core.nth.call(null,vec__400,(2),null);
var val_schema = cljs.core.nth.call(null,vec__400,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into-kv!","mikron.util.coll/into-kv!",(-1222521253),null)),(function (){var x__25689__auto__ = (cljs.core.truth_(sorted_by)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sorted-map-by","cljs.core/sorted-map-by",(1657795193),null)),(function (){var x__25689__auto__ = sorted_by;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = (sorted_by == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"varint","varint",(1231147450))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,key_schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack_STAR_.call(null,val_schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__405,env){
var vec__406 = p__405;
var _ = cljs.core.nth.call(null,vec__406,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__406,(1),null);
var schemas = cljs.core.nth.call(null,vec__406,(2),null);
var fields = mikron.compile_util.tuple__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,vec__406,_,___$1,schemas){
return (function (p__413){
var vec__414 = p__413;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__414,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__414,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,mikron.codegen.unpack.unpack_STAR_.call(null,schemas.call(null,key_SINGLEQUOTE_),env)], null);
});})(fields,vec__406,_,___$1,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_tuple.call(null,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__417,env){
var vec__418 = p__417;
var _ = cljs.core.nth.call(null,vec__418,(0),null);
var map__421 = cljs.core.nth.call(null,vec__418,(1),null);
var map__421__$1 = ((((!((map__421 == null)))?((((map__421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__421):map__421);
var type = cljs.core.get.call(null,map__421__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__418,(2),null);
var fields = mikron.compile_util.record__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,vec__418,_,map__421,map__421__$1,type,schemas){
return (function (p__427){
var vec__428 = p__427;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__428,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__428,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,mikron.codegen.unpack.unpack_STAR_.call(null,schemas.call(null,key_SINGLEQUOTE_),env)], null);
});})(fields,vec__418,_,map__421,map__421__$1,type,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.compile_util.fields__GT_record.call(null,fields,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__431,env){
var vec__432 = p__431;
var _ = cljs.core.nth.call(null,vec__432,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__432,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__432,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__435,env){
var vec__436 = p__435;
var _ = cljs.core.nth.call(null,vec__436,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__436,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__436,(2),null);
var multi_map = cljs.core.nth.call(null,vec__436,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,mikron.compile_util.integer_type.call(null,cljs.core.count.call(null,multi_map)),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (vec__436,_,___$1,___$2,multi_map){
return (function (index,multi_case){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,mikron.codegen.unpack.unpack.call(null,multi_map.call(null,multi_case),env)], null);
});})(vec__436,_,___$1,___$2,multi_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,multi_map))))));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"enum","enum",(1679018432)),(function (p__439,env){
var vec__440 = p__439;
var _ = cljs.core.nth.call(null,vec__440,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__440,(1),null);
var enum_values = cljs.core.nth.call(null,vec__440,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","nth","mikron.util.coll/nth",(1602862406),null)),(function (){var x__25689__auto__ = enum_values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,mikron.compile_util.integer_type.call(null,cljs.core.count.call(null,enum_values)),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__443,env){
var vec__444 = p__443;
var _ = cljs.core.nth.call(null,vec__444,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__444,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__444,(2),null);
var post = cljs.core.nth.call(null,vec__444,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__444,(4),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = post;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__447,env){
var vec__448 = p__447;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__448,(0),null);
return mikron.codegen.unpack.unpack.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),env);
}));
cljs.core._add_method.call(null,mikron.codegen.unpack.unpack,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,p__451){
var map__452 = p__451;
var map__452__$1 = ((((!((map__452 == null)))?((((map__452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__452):map__452);
var diffed_QMARK_ = cljs.core.get.call(null,map__452__$1,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
var buffer = cljs.core.get.call(null,map__452__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = mikron.compile_util.processor_name.call(null,(cljs.core.truth_(diffed_QMARK_)?new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)):new cljs.core.Keyword(null,"unpack","unpack",(-2027067542))),schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),(function (_,p__454){
var map__455 = p__454;
var map__455__$1 = ((((!((map__455 == null)))?((((map__455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455):map__455);
var env = map__455__$1;
var schema = cljs.core.get.call(null,map__455__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var buffer = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"buffer"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.unpack,new cljs.core.Keyword(null,"line","line",(212345235)),(81),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(81),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack_STAR_.call(null,schema,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),false,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),buffer));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),(function (_,p__457){
var map__458 = p__457;
var map__458__$1 = ((((!((map__458 == null)))?((((map__458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458):map__458);
var env = map__458__$1;
var schema = cljs.core.get.call(null,map__458__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
var buffer = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"buffer"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.unpack,new cljs.core.Keyword(null,"line","line",(212345235)),(86),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(86),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(37)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = mikron.codegen.unpack.unpack_STAR_.call(null,schema,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),true,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),buffer));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
}));
