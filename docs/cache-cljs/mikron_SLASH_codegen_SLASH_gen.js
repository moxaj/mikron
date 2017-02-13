goog.provide("mikron.codegen.gen");
(function (){
mikron.codegen.gen.gen_length = (4); return (
new cljs.core.Var(function(){return mikron.codegen.gen.gen_length;},new cljs.core.Symbol("mikron.codegen.gen","gen-length","mikron.codegen.gen/gen-length",(-671112633),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.gen","mikron.codegen.gen",(1997136196),null),new cljs.core.Symbol(null,"gen-length","gen-length",(277565470),null),"mikron/codegen/gen.cljc",(16),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.gen.gen_length)?mikron.codegen.gen.gen_length.cljs$lang$test:null)])));})()
;
if(typeof mikron.codegen.gen.gen !== 'undefined'){
} else {
(function (){
mikron.codegen.gen.gen = (function (){var method_table__22680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22684__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),new cljs.core.Var(function(){return mikron.schema.hierarchy;},new cljs.core.Symbol("mikron.schema","hierarchy","mikron.schema/hierarchy",(857531373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.schema","mikron.schema",(1753517621),null),new cljs.core.Symbol(null,"hierarchy","hierarchy",(587061186),null),"mikron/schema.cljc",(15),(1),(27),(27),cljs.core.List.EMPTY,"The default type hierarchy.",(cljs.core.truth_(mikron.schema.hierarchy)?mikron.schema.hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mikron.codegen.gen","gen"),mikron.compile_util.type_of,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__22684__auto__,method_table__22680__auto__,prefer_table__22681__auto__,method_cache__22682__auto__,cached_hierarchy__22683__auto__));
})(); return (
new cljs.core.Var(function(){return mikron.codegen.gen.gen;},new cljs.core.Symbol("mikron.codegen.gen","gen","mikron.codegen.gen/gen",(933756774),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.gen","mikron.codegen.gen",(1997136196),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),"mikron/codegen/gen.cljc",(14),(1),(12),(12),cljs.core.List.EMPTY,null,(cljs.core.truth_(mikron.codegen.gen.gen)?mikron.codegen.gen.gen.cljs$lang$test:null)])));})()
;
}
/**
 * Generates code for random integer generation.
 */
(function (){
mikron.codegen.gen.gen_integer = (function mikron$codegen$gen$gen_integer(bytes,signed_QMARK_){
var r = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"r"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",(-1269645878)),mikron.codegen.gen,new cljs.core.Keyword(null,"line","line",(212345235)),(17),new cljs.core.Keyword(null,"column","column",(2078222095)),(31),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),(17),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),(32)], null));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand","mikron.util.math/rand",(-1840839211),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",(-857794892),null)),(function (){var x__22590__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.util.math.upper_bound.call(null,bytes,signed_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",(-342754435),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",(-857794892),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",(187040141),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__22590__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.util.math.lower_bound.call(null,bytes,signed_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","floor","mikron.util.math/floor",(-712064532),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-long","cljs.core/unchecked-long",(2050992288),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}); return (
new cljs.core.Var(function(){return mikron.codegen.gen.gen_integer;},new cljs.core.Symbol("mikron.codegen.gen","gen-integer","mikron.codegen.gen/gen-integer",(-789736806),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.codegen.gen","mikron.codegen.gen",(1997136196),null),new cljs.core.Symbol(null,"gen-integer","gen-integer",(-1819278211),null),"mikron/codegen/gen.cljc",(18),(1),(14),(14),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.Symbol(null,"signed?","signed?",(1929052384),null)], null)),"Generates code for random integer generation.",(cljs.core.truth_(mikron.codegen.gen.gen_integer)?mikron.codegen.gen.gen_integer.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"byte","byte",(683775220)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(1),true);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"ubyte","ubyte",(-1022840731)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(1),false);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"short","short",(1928760516)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(2),true);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"ushort","ushort",(1434312932)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(2),false);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"int","int",(-1741416922)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(4),true);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"uint","uint",(521409576)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(4),false);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"long","long",(-171452093)),(function (_,___$1){
return mikron.codegen.gen.gen_integer.call(null,(8),true);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"varint","varint",(1231147450)),(function (_,env){
return mikron.codegen.gen.gen.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long","long",(-171452093))], null),env);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"float","float",(-1732389368)),(function (_,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.schema","double->float","mikron.util.schema/double->float",(-1322741861),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand","mikron.util.math/rand",(-1840839211),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"double","double",(884886883)),(function (_,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand","mikron.util.math/rand",(-1840839211),null))));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"boolean","boolean",(-1919418404)),(function (_,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<","cljs.core/<",(1677496129),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0.5)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand","mikron.util.math/rand",(-1840839211),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"char","char",(-641587586)),(function (_,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","char","cljs.core/char",(-1068683232),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand-long","mikron.util.math/rand-long",(1718561532),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(500))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"string","string",(-1989541586)),(function (_,env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__22590__auto__ = mikron.codegen.gen.gen_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",(-641587586))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"binary","binary",(-1802232288)),(function (_,___$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","unchecked-add","cljs.core/unchecked-add",(1865931960),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand-long","mikron.util.math/rand-long",(1718561532),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(30))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen_integer.call(null,(1),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.schema","byte-seq->binary","mikron.util.schema/byte-seq->binary",(2080210204),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"any","any",(1705907423)),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"nil","nil",(99600501)),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"coll","coll",(1647737163)),(function (p__269,env){
var vec__270 = p__269;
var _ = cljs.core.nth.call(null,vec__270,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__270,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__270,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__22590__auto__ = mikron.codegen.gen.gen_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"set","set",(304602554)),(function (p__273,env){
var vec__274 = p__273;
var _ = cljs.core.nth.call(null,vec__274,(0),null);
var map__277 = cljs.core.nth.call(null,vec__274,(1),null);
var map__277__$1 = ((((!((map__277 == null)))?((((map__277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__277):map__277);
var sorted_by = cljs.core.get.call(null,map__277__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__274,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into!","mikron.util.coll/into!",(2044580749),null)),(function (){var x__22590__auto__ = (cljs.core.truth_(sorted_by)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sorted-set-by","cljs.core/sorted-set-by",(-581598320),null)),(function (){var x__22590__auto__ = sorted_by;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())):cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = (sorted_by == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (p__279,env){
var vec__280 = p__279;
var _ = cljs.core.nth.call(null,vec__280,(0),null);
var map__283 = cljs.core.nth.call(null,vec__280,(1),null);
var map__283__$1 = ((((!((map__283 == null)))?((((map__283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283):map__283);
var sorted_by = cljs.core.get.call(null,map__283__$1,new cljs.core.Keyword(null,"sorted-by","sorted-by",(323871068)));
var key_schema = cljs.core.nth.call(null,vec__280,(2),null);
var value_schema = cljs.core.nth.call(null,vec__280,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","into-kv!","mikron.util.coll/into-kv!",(-1222521253),null)),(function (){var x__22590__auto__ = (cljs.core.truth_(sorted_by)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sorted-map-by","cljs.core/sorted-map-by",(1657795193),null)),(function (){var x__22590__auto__ = sorted_by;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})())):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = (sorted_by == null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen_length;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,key_schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,value_schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"tuple","tuple",(-472667284)),(function (p__285,env){
var vec__286 = p__285;
var _ = cljs.core.nth.call(null,vec__286,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__286,(1),null);
var schemas = cljs.core.nth.call(null,vec__286,(2),null);
var fields = mikron.compile_util.tuple__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,vec__286,_,___$1,schemas){
return (function (p__293){
var vec__294 = p__293;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__294,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__294,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,mikron.codegen.gen.gen.call(null,schemas.call(null,key_SINGLEQUOTE_),env)], null);
});})(fields,vec__286,_,___$1,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.compile_util.fields__GT_tuple.call(null,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"record","record",(-779106859)),(function (p__297,env){
var vec__298 = p__297;
var _ = cljs.core.nth.call(null,vec__298,(0),null);
var map__301 = cljs.core.nth.call(null,vec__298,(1),null);
var map__301__$1 = ((((!((map__301 == null)))?((((map__301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__301):map__301);
var type = cljs.core.get.call(null,map__301__$1,new cljs.core.Keyword(null,"type","type",(1174270348)));
var schemas = cljs.core.nth.call(null,vec__298,(2),null);
var fields = mikron.compile_util.record__GT_fields.call(null,schemas);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (fields,vec__298,_,map__301,map__301__$1,type,schemas){
return (function (p__307){
var vec__308 = p__307;
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__308,(0),null);
var value_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__308,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,mikron.codegen.gen.gen.call(null,schemas.call(null,key_SINGLEQUOTE_),env)], null);
});})(fields,vec__298,_,map__301,map__301__$1,type,schemas))
,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.compile_util.fields__GT_record.call(null,fields,type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"optional","optional",(2053951509)),(function (p__311,env){
var vec__312 = p__311;
var _ = cljs.core.nth.call(null,vec__312,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__312,(1),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__312,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",(-1919418404))], null),env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"multi","multi",(-190293005)),(function (p__315,env){
var vec__316 = p__315;
var _ = cljs.core.nth.call(null,vec__316,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__316,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__316,(2),null);
var multi_map = cljs.core.nth.call(null,vec__316,(3),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null)),(function (){var x__22590__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.math","rand-long","mikron.util.math/rand-long",(1718561532),null)),(function (){var x__22590__auto__ = cljs.core.count.call(null,multi_map);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (vec__316,_,___$1,___$2,multi_map){
return (function (index,p__319){
var vec__320 = p__319;
var ___$3 = cljs.core.nth.call(null,vec__320,(0),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__320,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,mikron.codegen.gen.gen.call(null,schema_SINGLEQUOTE_,env)], null);
});})(vec__316,_,___$1,___$2,multi_map))
,multi_map))));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"enum","enum",(1679018432)),(function (p__323,env){
var vec__324 = p__323;
var _ = cljs.core.nth.call(null,vec__324,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__324,(1),null);
var enum_values = cljs.core.nth.call(null,vec__324,(2),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.util.coll","rand-nth","mikron.util.coll/rand-nth",(-1284398215),null)),(function (){var x__22590__auto__ = enum_values;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"wrapped","wrapped",(1775172701)),(function (p__327,env){
var vec__328 = p__327;
var _ = cljs.core.nth.call(null,vec__328,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__328,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__328,(2),null);
var post = cljs.core.nth.call(null,vec__328,(3),null);
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__328,(4),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = post;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,schema_SINGLEQUOTE_,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"aliased","aliased",(-125439273)),(function (p__331,env){
var vec__332 = p__331;
var schema_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__332,(0),null);
return mikron.codegen.gen.gen.call(null,mikron.schema.aliases.call(null,schema_SINGLEQUOTE_),env);
}));
cljs.core._add_method.call(null,mikron.codegen.gen.gen,new cljs.core.Keyword(null,"custom","custom",(340151948)),(function (schema,env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = mikron.compile_util.processor_name.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));
cljs.core._add_method.call(null,mikron.compile_util.processor,new cljs.core.Keyword(null,"gen","gen",(142575302)),(function (_,p__335){
var map__336 = p__335;
var map__336__$1 = ((((!((map__336 == null)))?((((map__336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__336):map__336);
var env = map__336__$1;
var schema = cljs.core.get.call(null,map__336__$1,new cljs.core.Keyword(null,"schema","schema",(-1582001791)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__22590__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})(),(function (){var x__22590__auto__ = mikron.codegen.gen.gen.call(null,schema,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22590__auto__);
})()));
}));