goog.provide("mikron.util.math");
/**
 * Returns a random double value.
 */
(function (){
mikron.util.math.rand = (function mikron$util$math$rand(){
return Math.random();
}); return (
new cljs.core.Var(function(){return mikron.util.math.rand;},new cljs.core.Symbol("mikron.util.math","rand","mikron.util.math/rand",(-1840839211),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"rand","rand",(-1745930995),null),"mikron/util/math.cljc",(11),(1),(8),(8),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns a random double value.",(cljs.core.truth_(mikron.util.math.rand)?mikron.util.math.rand.cljs$lang$test:null)])));})()
;
/**
 * Raises `x` to `y`.
 */
(function (){
mikron.util.math.pow = (function mikron$util$math$pow(x,y){
return Math.pow(x,y);
}); return (
new cljs.core.Var(function(){return mikron.util.math.pow;},new cljs.core.Symbol("mikron.util.math","pow","mikron.util.math/pow",(399438552),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"pow","pow",(196526960),null),"mikron/util/math.cljc",(10),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Raises `x` to `y`.",(cljs.core.truth_(mikron.util.math.pow)?mikron.util.math.pow.cljs$lang$test:null)])));})()
;
/**
 * Returns the floor of `x`.
 */
(function (){
mikron.util.math.floor = (function mikron$util$math$floor(x){
return Math.floor(x);
}); return (
new cljs.core.Var(function(){return mikron.util.math.floor;},new cljs.core.Symbol("mikron.util.math","floor","mikron.util.math/floor",(-712064532),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"floor","floor",(-772394748),null),"mikron/util/math.cljc",(12),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Returns the floor of `x`.",(cljs.core.truth_(mikron.util.math.floor)?mikron.util.math.floor.cljs$lang$test:null)])));})()
;
/**
 * Returns the absolute value of `x`.
 */
(function (){
mikron.util.math.abs = (function mikron$util$math$abs(x){
return Math.abs(x);
}); return (
new cljs.core.Var(function(){return mikron.util.math.abs;},new cljs.core.Symbol("mikron.util.math","abs","mikron.util.math/abs",(-1364818510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"abs","abs",(1394505050),null),"mikron/util/math.cljc",(10),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Returns the absolute value of `x`.",(cljs.core.truth_(mikron.util.math.abs)?mikron.util.math.abs.cljs$lang$test:null)])));})()
;
/**
 * Rounds `x`.
 */
(function (){
mikron.util.math.round = (function mikron$util$math$round(x){
return Math.round(x);
}); return (
new cljs.core.Var(function(){return mikron.util.math.round;},new cljs.core.Symbol("mikron.util.math","round","mikron.util.math/round",(-718923617),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"round","round",(-645002441),null),"mikron/util/math.cljc",(12),(1),(33),(33),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Rounds `x`.",(cljs.core.truth_(mikron.util.math.round)?mikron.util.math.round.cljs$lang$test:null)])));})()
;
/**
 * Calculates a new value via linear interpolation.
 */
(function (){
mikron.util.math.interp = (function mikron$util$math$interp(x,y,f){
return ((x + (f * y)) - (f * x));
}); return (
new cljs.core.Var(function(){return mikron.util.math.interp;},new cljs.core.Symbol("mikron.util.math","interp","mikron.util.math/interp",(-1285881182),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"interp","interp",(-1077734662),null),"mikron/util/math.cljc",(13),(1),(39),(39),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Calculates a new value via linear interpolation.",(cljs.core.truth_(mikron.util.math.interp)?mikron.util.math.interp.cljs$lang$test:null)])));})()
;
/**
 * Returns a random long value in range from 0 (inclusive) to `n` (exclusive).
 */
(function (){
mikron.util.math.rand_long = (function mikron$util$math$rand_long(n){
return cljs.core.unchecked_long.call(null,(n * mikron.util.math.rand.call(null)));
}); return (
new cljs.core.Var(function(){return mikron.util.math.rand_long;},new cljs.core.Symbol("mikron.util.math","rand-long","mikron.util.math/rand-long",(1718561532),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"rand-long","rand-long",(1654086308),null),"mikron/util/math.cljc",(16),(1),(48),(48),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Returns a random long value in range from 0 (inclusive) to `n` (exclusive).",(cljs.core.truth_(mikron.util.math.rand_long)?mikron.util.math.rand_long.cljs$lang$test:null)])));})()
;
/**
 * Creates a new long value.
 */
(function (){
mikron.util.math.from = (function mikron$util$math$from(var_args){
var args183 = [];
var len__25946__auto___186 = arguments.length;
var i__25947__auto___187 = (0);
while(true){
if((i__25947__auto___187 < len__25946__auto___186)){
args183.push((arguments[i__25947__auto___187]));

var G__188 = (i__25947__auto___187 + (1));
i__25947__auto___187 = G__188;
continue;
} else {
}
break;
}

var G__185 = args183.length;
switch (G__185) {
case (1):
return mikron.util.math.from.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return mikron.util.math.from.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return mikron.util.math.from;},new cljs.core.Symbol("mikron.util.math","from","mikron.util.math/from",(-838630893),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),"mikron/util/math.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),"Creates a new long value.",(cljs.core.truth_(mikron.util.math.from)?mikron.util.math.from.cljs$lang$test:null)])));})()
;

mikron.util.math.from.cljs$core$IFn$_invoke$arity$1 = (function (x){
return goog.math.Long.fromNumber(x);
});

mikron.util.math.from.cljs$core$IFn$_invoke$arity$2 = (function (low,high){
return goog.math.Long.fromBits(low,high);
});

mikron.util.math.from.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return mikron.util.math.from;},new cljs.core.Symbol("mikron.util.math","from","mikron.util.math/from",(-838630893),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"from","from",(-839142725),null),"mikron/util/math.cljc",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"low","low",(39169118),null),new cljs.core.Symbol(null,"high","high",(-627137961),null)], null)),"Creates a new long value.",(cljs.core.truth_(mikron.util.math.from)?mikron.util.math.from.cljs$lang$test:null)]));
/**
 * The constant long 0.
 */
(function (){
mikron.util.math.c0 = mikron.util.math.from.call(null,(0)); return (
new cljs.core.Var(function(){return mikron.util.math.c0;},new cljs.core.Symbol("mikron.util.math","c0","mikron.util.math/c0",(1090570591),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"c0","c0",(2105080311),null),"mikron/util/math.cljc",(8),(1),(61),(61),cljs.core.List.EMPTY,"The constant long 0.",(cljs.core.truth_(mikron.util.math.c0)?mikron.util.math.c0.cljs$lang$test:null)])));})()
;
/**
 * The constant long 1.
 */
(function (){
mikron.util.math.c1 = mikron.util.math.from.call(null,(1)); return (
new cljs.core.Var(function(){return mikron.util.math.c1;},new cljs.core.Symbol("mikron.util.math","c1","mikron.util.math/c1",(-1583250750),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"c1","c1",(-1521904966),null),"mikron/util/math.cljc",(8),(1),(65),(65),cljs.core.List.EMPTY,"The constant long 1.",(cljs.core.truth_(mikron.util.math.c1)?mikron.util.math.c1.cljs$lang$test:null)])));})()
;
/**
 * The constant long 127.
 */
(function (){
mikron.util.math.c127 = mikron.util.math.from.call(null,(127)); return (
new cljs.core.Var(function(){return mikron.util.math.c127;},new cljs.core.Symbol("mikron.util.math","c127","mikron.util.math/c127",(-2078061881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"c127","c127",(-2141496641),null),"mikron/util/math.cljc",(10),(1),(69),(69),cljs.core.List.EMPTY,"The constant long 127.",(cljs.core.truth_(mikron.util.math.c127)?mikron.util.math.c127.cljs$lang$test:null)])));})()
;
/**
 * The constant long 128.
 */
(function (){
mikron.util.math.c128 = mikron.util.math.from.call(null,(128)); return (
new cljs.core.Var(function(){return mikron.util.math.c128;},new cljs.core.Symbol("mikron.util.math","c128","mikron.util.math/c128",(-970417938),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"c128","c128",(-92231338),null),"mikron/util/math.cljc",(10),(1),(73),(73),cljs.core.List.EMPTY,"The constant long 128.",(cljs.core.truth_(mikron.util.math.c128)?mikron.util.math.c128.cljs$lang$test:null)])));})()
;
/**
 * The constant long -128.
 */
(function (){
mikron.util.math.c_128 = mikron.util.math.from.call(null,(-128)); return (
new cljs.core.Var(function(){return mikron.util.math.c_128;},new cljs.core.Symbol("mikron.util.math","c-128","mikron.util.math/c-128",(1938898476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"c-128","c-128",(1869008468),null),"mikron/util/math.cljc",(11),(1),(77),(77),cljs.core.List.EMPTY,"The constant long -128.",(cljs.core.truth_(mikron.util.math.c_128)?mikron.util.math.c_128.cljs$lang$test:null)])));})()
;
/**
 * Converts a number `x` to a long.
 */
(function (){
mikron.util.math.to = (function mikron$util$math$to(x){
return x.toNumber();
}); return (
new cljs.core.Var(function(){return mikron.util.math.to;},new cljs.core.Symbol("mikron.util.math","to","mikron.util.math/to",(1364429166),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"to","to",(1832630534),null),"mikron/util/math.cljc",(9),(1),(81),(81),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Converts a number `x` to a long.",(cljs.core.truth_(mikron.util.math.to)?mikron.util.math.to.cljs$lang$test:null)])));})()
;
/**
 * Returns `true` if a long `x` is zero, `false` otherwise.
 */
(function (){
mikron.util.math.zero_QMARK_ = (function mikron$util$math$zero_QMARK_(x){
return x.isZero();
}); return (
new cljs.core.Var(function(){return mikron.util.math.zero_QMARK_;},new cljs.core.Symbol("mikron.util.math","zero?","mikron.util.math/zero?",(381861657),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"zero?","zero?",(325758897),null),"mikron/util/math.cljc",(12),(1),(87),(87),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Returns `true` if a long `x` is zero, `false` otherwise.",(cljs.core.truth_(mikron.util.math.zero_QMARK_)?mikron.util.math.zero_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Performs the bitwise AND operation on two longs `x` and `y`.
 */
(function (){
mikron.util.math.and = (function mikron$util$math$and(x,y){
return x.and(y);
}); return (
new cljs.core.Var(function(){return mikron.util.math.and;},new cljs.core.Symbol("mikron.util.math","and","mikron.util.math/and",(405967398),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"and","and",(668631710),null),"mikron/util/math.cljc",(10),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Performs the bitwise AND operation on two longs `x` and `y`.",(cljs.core.truth_(mikron.util.math.and)?mikron.util.math.and.cljs$lang$test:null)])));})()
;
/**
 * Performs the bitwise OR operation on two longs `x` and `y`.
 */
(function (){
mikron.util.math.or = (function mikron$util$math$or(x,y){
return x.or(y);
}); return (
new cljs.core.Var(function(){return mikron.util.math.or;},new cljs.core.Symbol("mikron.util.math","or","mikron.util.math/or",(1802355112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"or","or",(1876275696),null),"mikron/util/math.cljc",(9),(1),(99),(99),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Performs the bitwise OR operation on two longs `x` and `y`.",(cljs.core.truth_(mikron.util.math.or)?mikron.util.math.or.cljs$lang$test:null)])));})()
;
/**
 * Performs the bitwise XOR operation on two longs `x` and `y`.
 */
(function (){
mikron.util.math.xor = (function mikron$util$math$xor(x,y){
return x.xor(y);
}); return (
new cljs.core.Var(function(){return mikron.util.math.xor;},new cljs.core.Symbol("mikron.util.math","xor","mikron.util.math/xor",(597663281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"xor","xor",(520589273),null),"mikron/util/math.cljc",(10),(1),(105),(105),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",(-117328249),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Performs the bitwise XOR operation on two longs `x` and `y`.",(cljs.core.truth_(mikron.util.math.xor)?mikron.util.math.xor.cljs$lang$test:null)])));})()
;
/**
 * Performs the bitwise NOT operation on a long `x`.
 */
(function (){
mikron.util.math.not = (function mikron$util$math$not(x){
return x.not();
}); return (
new cljs.core.Var(function(){return mikron.util.math.not;},new cljs.core.Symbol("mikron.util.math","not","mikron.util.math/not",(1037734475),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"not","not",(1044554643),null),"mikron/util/math.cljc",(10),(1),(111),(111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Performs the bitwise NOT operation on a long `x`.",(cljs.core.truth_(mikron.util.math.not)?mikron.util.math.not.cljs$lang$test:null)])));})()
;
/**
 * Negates a long `x`.
 */
(function (){
mikron.util.math.negate = (function mikron$util$math$negate(x){
return x.negate();
}); return (
new cljs.core.Var(function(){return mikron.util.math.negate;},new cljs.core.Symbol("mikron.util.math","negate","mikron.util.math/negate",(327798538),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"negate","negate",(337772450),null),"mikron/util/math.cljc",(13),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Negates a long `x`.",(cljs.core.truth_(mikron.util.math.negate)?mikron.util.math.negate.cljs$lang$test:null)])));})()
;
/**
 * Arithmetically shifts the bits of a long `x` to the left by `n`.
 */
(function (){
mikron.util.math.shift_left = (function mikron$util$math$shift_left(x,n){
return x.shiftLeft(n);
}); return (
new cljs.core.Var(function(){return mikron.util.math.shift_left;},new cljs.core.Symbol("mikron.util.math","shift-left","mikron.util.math/shift-left",(-516811787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"shift-left","shift-left",(-576053171),null),"mikron/util/math.cljc",(17),(1),(123),(123),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Arithmetically shifts the bits of a long `x` to the left by `n`.",(cljs.core.truth_(mikron.util.math.shift_left)?mikron.util.math.shift_left.cljs$lang$test:null)])));})()
;
/**
 * Arithmetically shifts the bits of a long `x` to the right by `n`.
 */
(function (){
mikron.util.math.shift_right = (function mikron$util$math$shift_right(x,n){
return x.shiftRight(n);
}); return (
new cljs.core.Var(function(){return mikron.util.math.shift_right;},new cljs.core.Symbol("mikron.util.math","shift-right","mikron.util.math/shift-right",(-2062773826),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"shift-right","shift-right",(-123436570),null),"mikron/util/math.cljc",(18),(1),(129),(129),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Arithmetically shifts the bits of a long `x` to the right by `n`.",(cljs.core.truth_(mikron.util.math.shift_right)?mikron.util.math.shift_right.cljs$lang$test:null)])));})()
;
/**
 * Logically shifts the bits of a long `x` to the right by `n`.
 */
(function (){
mikron.util.math.unsigned_shift_right = (function mikron$util$math$unsigned_shift_right(x,n){
return x.shiftRightUnsigned(n);
}); return (
new cljs.core.Var(function(){return mikron.util.math.unsigned_shift_right;},new cljs.core.Symbol("mikron.util.math","unsigned-shift-right","mikron.util.math/unsigned-shift-right",(-1620672561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"unsigned-shift-right","unsigned-shift-right",(-1678668185),null),"mikron/util/math.cljc",(27),(1),(135),(135),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Logically shifts the bits of a long `x` to the right by `n`.",(cljs.core.truth_(mikron.util.math.unsigned_shift_right)?mikron.util.math.unsigned_shift_right.cljs$lang$test:null)])));})()
;
/**
 * Zigzag encodes a long `x`.
 */
(function (){
mikron.util.math.zigzag_encode = (function mikron$util$math$zigzag_encode(x){
return mikron.util.math.xor.call(null,mikron.util.math.shift_right.call(null,x,(63)),mikron.util.math.shift_left.call(null,x,(1)));
}); return (
new cljs.core.Var(function(){return mikron.util.math.zigzag_encode;},new cljs.core.Symbol("mikron.util.math","zigzag-encode","mikron.util.math/zigzag-encode",(791748032),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"zigzag-encode","zigzag-encode",(860286392),null),"mikron/util/math.cljc",(20),(1),(141),(141),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Zigzag encodes a long `x`.",(cljs.core.truth_(mikron.util.math.zigzag_encode)?mikron.util.math.zigzag_encode.cljs$lang$test:null)])));})()
;
/**
 * Zigzag decodes a long `x`.
 */
(function (){
mikron.util.math.zigzag_decode = (function mikron$util$math$zigzag_decode(x){
return mikron.util.math.xor.call(null,mikron.util.math.unsigned_shift_right.call(null,x,(1)),mikron.util.math.negate.call(null,mikron.util.math.and.call(null,x,mikron.util.math.c1)));
}); return (
new cljs.core.Var(function(){return mikron.util.math.zigzag_decode;},new cljs.core.Symbol("mikron.util.math","zigzag-decode","mikron.util.math/zigzag-decode",(1908552263),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"zigzag-decode","zigzag-decode",(2084184623),null),"mikron/util/math.cljc",(20),(1),(147),(147),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",(-555367584),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Zigzag decodes a long `x`.",(cljs.core.truth_(mikron.util.math.zigzag_decode)?mikron.util.math.zigzag_decode.cljs$lang$test:null)])));})()
;
/**
 * Returns the lower bound for an integer value.
 */
(function (){
mikron.util.math.lower_bound = (function mikron$util$math$lower_bound(bytes,signed_QMARK_){
if(cljs.core.truth_(signed_QMARK_)){
return (- mikron.util.math.pow.call(null,(2),((bytes * (8)) - (1))));
} else {
return (0);
}
}); return (
new cljs.core.Var(function(){return mikron.util.math.lower_bound;},new cljs.core.Symbol("mikron.util.math","lower-bound","mikron.util.math/lower-bound",(1854469784),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"lower-bound","lower-bound",(1794164016),null),"mikron/util/math.cljc",(18),(1),(153),(153),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.Symbol(null,"signed?","signed?",(1929052384),null)], null)),"Returns the lower bound for an integer value.",(cljs.core.truth_(mikron.util.math.lower_bound)?mikron.util.math.lower_bound.cljs$lang$test:null)])));})()
;
/**
 * Returns the upper bound for an integer value.
 */
(function (){
mikron.util.math.upper_bound = (function mikron$util$math$upper_bound(bytes,signed_QMARK_){
var m = mikron.util.math.pow.call(null,(2),(bytes * (8)));
if(cljs.core.truth_(signed_QMARK_)){
return (m / (2));
} else {
return m;
}
}); return (
new cljs.core.Var(function(){return mikron.util.math.upper_bound;},new cljs.core.Symbol("mikron.util.math","upper-bound","mikron.util.math/upper-bound",(-1168609233),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.util.math","mikron.util.math",(-734781514),null),new cljs.core.Symbol(null,"upper-bound","upper-bound",(-1091542953),null),"mikron/util/math.cljc",(18),(1),(160),(160),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),new cljs.core.Symbol(null,"signed?","signed?",(1929052384),null)], null)),"Returns the upper bound for an integer value.",(cljs.core.truth_(mikron.util.math.upper_bound)?mikron.util.math.upper_bound.cljs$lang$test:null)])));})()
;
