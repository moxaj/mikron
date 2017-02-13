goog.provide("mikron.util.schema");
/**
 * Converts an edn value `x` to a string.
 */
(function (){
mikron.util.schema.any__GT_string = (function mikron$util$schema$any__GT_string(x){
return cljs.core.pr_str.call(null,x);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.any__GT_string;},new cljs.core.Symbol("mikron.util.schema","any->string","mikron.util.schema/any->string",(-1063285825),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"any->string","any->string",(-1249370632),null),"mikron/util/schema.cljc",(18),(1),(9),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Converts an edn value `x` to a string.",(cljs.core.truth_(mikron.util.schema.any__GT_string)?mikron.util.schema.any__GT_string.cljs$lang$test:null)])));})()
;
/**
 * Converts a string `s` to an edn value.
 */
(function (){
mikron.util.schema.string__GT_any = (function mikron$util$schema$string__GT_any(s){
return cljs.tools.reader.read_string.call(null,s);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.string__GT_any;},new cljs.core.Symbol("mikron.util.schema","string->any","mikron.util.schema/string->any",(-1040075661),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"string->any","string->any",(-1216992708),null),"mikron/util/schema.cljc",(18),(1),(14),(14),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),"Converts a string `s` to an edn value.",(cljs.core.truth_(mikron.util.schema.string__GT_any)?mikron.util.schema.string__GT_any.cljs$lang$test:null)])));})()
;
/**
 * Converts a keyword `x` to a string.
 */
(function (){
mikron.util.schema.keyword__GT_string = (function mikron$util$schema$keyword__GT_string(x){
return [cljs.core.str(x)].join('').substring((1));
}); return (
new cljs.core.Var(function(){return mikron.util.schema.keyword__GT_string;},new cljs.core.Symbol("mikron.util.schema","keyword->string","mikron.util.schema/keyword->string",(1495241845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"keyword->string","keyword->string",(-437703116),null),"mikron/util/schema.cljc",(22),(1),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Converts a keyword `x` to a string.",(cljs.core.truth_(mikron.util.schema.keyword__GT_string)?mikron.util.schema.keyword__GT_string.cljs$lang$test:null)])));})()
;
/**
 * Converts a string `s` to a keyword.
 */
(function (){
mikron.util.schema.string__GT_keyword = (function mikron$util$schema$string__GT_keyword(s){
return cljs.core.keyword.call(null,s);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.string__GT_keyword;},new cljs.core.Symbol("mikron.util.schema","string->keyword","mikron.util.schema/string->keyword",(-15543812),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"string->keyword","string->keyword",(170223419),null),"mikron/util/schema.cljc",(22),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),"Converts a string `s` to a keyword.",(cljs.core.truth_(mikron.util.schema.string__GT_keyword)?mikron.util.schema.string__GT_keyword.cljs$lang$test:null)])));})()
;
/**
 * Converts a character `c` to an int.
 */
(function (){
mikron.util.schema.char__GT_int = (function mikron$util$schema$char__GT_int(c){
return c.charCodeAt((0));
}); return (
new cljs.core.Var(function(){return mikron.util.schema.char__GT_int;},new cljs.core.Symbol("mikron.util.schema","char->int","mikron.util.schema/char->int",(697791125),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"char->int","char->int",(-1096774828),null),"mikron/util/schema.cljc",(16),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Converts a character `c` to an int.",(cljs.core.truth_(mikron.util.schema.char__GT_int)?mikron.util.schema.char__GT_int.cljs$lang$test:null)])));})()
;
/**
 * Converts an int `n` to a char.
 */
(function (){
mikron.util.schema.int__GT_char = (function mikron$util$schema$int__GT_char(n){
return String.fromCharCode(n);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.int__GT_char;},new cljs.core.Symbol("mikron.util.schema","int->char","mikron.util.schema/int->char",(-216355484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"int->char","int->char",(1677722789),null),"mikron/util/schema.cljc",(16),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Converts an int `n` to a char.",(cljs.core.truth_(mikron.util.schema.int__GT_char)?mikron.util.schema.int__GT_char.cljs$lang$test:null)])));})()
;
/**
 * Converts a string `s` to a binary value.
 */
(function (){
mikron.util.schema.string__GT_binary = (function mikron$util$schema$string__GT_binary(s){
var chars = unescape(encodeURIComponent(s)).split("");
var array = [];
var n__22666__auto___240 = chars.length;
var i_241 = (0);
while(true){
if((i_241 < n__22666__auto___240)){
array.push((chars[i_241]).charCodeAt((0)));

var G__242 = (i_241 + (1));
i_241 = G__242;
continue;
} else {
}
break;
}

return (new Uint8Array(array)).buffer;
}); return (
new cljs.core.Var(function(){return mikron.util.schema.string__GT_binary;},new cljs.core.Symbol("mikron.util.schema","string->binary","mikron.util.schema/string->binary",(-444913317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"string->binary","string->binary",(-1871857948),null),"mikron/util/schema.cljc",(21),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),"Converts a string `s` to a binary value.",(cljs.core.truth_(mikron.util.schema.string__GT_binary)?mikron.util.schema.string__GT_binary.cljs$lang$test:null)])));})()
;
/**
 * Converts a binary value `x` to a string.
 */
(function (){
mikron.util.schema.binary__GT_string = (function mikron$util$schema$binary__GT_string(x){
return decodeURIComponent(escape(String.fromCharCode.apply(null,(new Uint8Array(x)))));
}); return (
new cljs.core.Var(function(){return mikron.util.schema.binary__GT_string;},new cljs.core.Symbol("mikron.util.schema","binary->string","mikron.util.schema/binary->string",(-714021430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"binary->string","binary->string",(1179024267),null),"mikron/util/schema.cljc",(21),(1),(51),(51),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null)], null))], null)),"Converts a binary value `x` to a string.",(cljs.core.truth_(mikron.util.schema.binary__GT_string)?mikron.util.schema.binary__GT_string.cljs$lang$test:null)])));})()
;
/**
 * Converts a double `x` to a float.
 */
(function (){
mikron.util.schema.double__GT_float = (function mikron$util$schema$double__GT_float(x){
return Math.fround(x);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.double__GT_float;},new cljs.core.Symbol("mikron.util.schema","double->float","mikron.util.schema/double->float",(-1322741861),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"double->float","double->float",(606283352),null),"mikron/util/schema.cljc",(20),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Converts a double `x` to a float.",(cljs.core.truth_(mikron.util.schema.double__GT_float)?mikron.util.schema.double__GT_float.cljs$lang$test:null)])));})()
;
/**
 * Converts a byte sequence to a binary value.
 */
(function (){
mikron.util.schema.byte_seq__GT_binary = (function mikron$util$schema$byte_seq__GT_binary(byte_seq){
return (new Int8Array(cljs.core.apply.call(null,cljs.core.array,byte_seq))).buffer;
}); return (
new cljs.core.Var(function(){return mikron.util.schema.byte_seq__GT_binary;},new cljs.core.Symbol("mikron.util.schema","byte-seq->binary","mikron.util.schema/byte-seq->binary",(2080210204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"byte-seq->binary","byte-seq->binary",(-822735907),null),"mikron/util/schema.cljc",(23),(1),(65),(65),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"byte-seq","byte-seq",(-1434474666),null)], null)),"Converts a byte sequence to a binary value.",(cljs.core.truth_(mikron.util.schema.byte_seq__GT_binary)?mikron.util.schema.byte_seq__GT_binary.cljs$lang$test:null)])));})()
;
/**
 * Returns `true` if `x` is a binary value, `false` otherwise.
 */
(function (){
mikron.util.schema.binary_QMARK_ = (function mikron$util$schema$binary_QMARK_(x){
return (x instanceof ArrayBuffer);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.binary_QMARK_;},new cljs.core.Symbol("mikron.util.schema","binary?","mikron.util.schema/binary?",(1301386860),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"binary?","binary?",(1051126957),null),"mikron/util/schema.cljc",(14),(1),(73),(73),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns `true` if `x` is a binary value, `false` otherwise.",(cljs.core.truth_(mikron.util.schema.binary_QMARK_)?mikron.util.schema.binary_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
mikron.util.schema.keyword_identical_QMARK_ = (function mikron$util$schema$keyword_identical_QMARK_(value_1,value_2){
return cljs.core.keyword_identical_QMARK_.call(null,value_1,value_2);
}); return (
new cljs.core.Var(function(){return mikron.util.schema.keyword_identical_QMARK_;},new cljs.core.Symbol("mikron.util.schema","keyword-identical?","mikron.util.schema/keyword-identical?",(-1467019197),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.schema","mikron.util.schema",(1120404086),null),new cljs.core.Symbol(null,"keyword-identical?","keyword-identical?",(931555714),null),"mikron/util/schema.cljc",(25),(1),(81),(81),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null)], null)),null,(cljs.core.truth_(mikron.util.schema.keyword_identical_QMARK_)?mikron.util.schema.keyword_identical_QMARK_.cljs$lang$test:null)])));})()
;
