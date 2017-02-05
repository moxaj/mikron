goog.provide("mikron.test");
var t_optional_2148 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1263){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1263))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1263))){
return mikron.buffer._QMARK_byte.call(null,buffer1263);
} else {
return null;
}
}
}),(function (value1264){
return ((value1264 == null)) || ((cljs.core.integer_QMARK_.call(null,value1264)) && ((cljs.core.unchecked_long.call(null,value1264) >= (-128))) && ((cljs.core.unchecked_long.call(null,value1264) < (128))));
}),(function (value_11266,value_21267){
return value_21267;
}),(function (){
if(((0.5) < mikron.util.math.rand.call(null))){
var r1268 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1268 * (128)) + (((1) - r1268) * (-128)))));
} else {
return null;
}
}),(function (buffer1269){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1269))){
return mikron.buffer._QMARK_byte.call(null,buffer1269);
} else {
return null;
}
}),(function (value_11271,value_21272,prefer_first_QMARK_1273,time_factor1274){
if(cljs.core.truth_((function (){var and__20483__auto__ = value_11271;
if(cljs.core.truth_(and__20483__auto__)){
return value_21272;
} else {
return and__20483__auto__;
}
})())){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11271,value_21272,time_factor1274));
} else {
if(cljs.core.truth_(prefer_first_QMARK_1273)){
return value_11271;
} else {
return value_21272;
}
}
}),(function (value1275,buffer1276){
var value_dnil_QMARK_1277 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1275);
mikron.buffer._BANG_boolean.call(null,buffer1276,value_dnil_QMARK_1277);

if(value_dnil_QMARK_1277){
return null;
} else {
mikron.buffer._BANG_boolean.call(null,buffer1276,value1275);

if(cljs.core.truth_(value1275)){
return mikron.buffer._BANG_byte.call(null,buffer1276,value1275);
} else {
return null;
}
}
}),(function (value1278,buffer1279){
mikron.buffer._BANG_boolean.call(null,buffer1279,value1278);

if(cljs.core.truth_(value1278)){
return mikron.buffer._BANG_byte.call(null,buffer1279,value1278);
} else {
return null;
}
}),(function (value_11281,value_21282){
return value_21282;
})]),null,null,null));
})();
var dataset1262_2149 = cljs.core.repeatedly.call(null,(100),((function (t_optional_2148){
return (function (){
return mikron.core.gen.call(null,t_optional_2148);
});})(t_optional_2148))
);
mikron.test.pack_t_optional = ((function (t_optional_2148,dataset1262_2149){
return (function mikron$test$pack_t_optional(){
return cljs.test.test_var.call(null,mikron.test.pack_t_optional.cljs$lang$var);
});})(t_optional_2148,dataset1262_2149))
;
mikron.test.pack_t_optional.cljs$lang$test = ((function (t_optional_2148,dataset1262_2149){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_optional_2148,dataset1262_2149);
});})(t_optional_2148,dataset1262_2149))
;

mikron.test.pack_t_optional.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_optional;},new cljs.core.Symbol("mikron.test","pack-t-optional","mikron.test/pack-t-optional",(-96760298),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-optional","pack-t-optional",(2056431860),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_optional)?mikron.test.pack_t_optional.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_optional = ((function (t_optional_2148,dataset1262_2149){
return (function mikron$test$diff_t_optional(){
return cljs.test.test_var.call(null,mikron.test.diff_t_optional.cljs$lang$var);
});})(t_optional_2148,dataset1262_2149))
;
mikron.test.diff_t_optional.cljs$lang$test = ((function (t_optional_2148,dataset1262_2149){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_optional_2148,dataset1262_2149);
});})(t_optional_2148,dataset1262_2149))
;

mikron.test.diff_t_optional.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_optional;},new cljs.core.Symbol("mikron.test","diff-t-optional","mikron.test/diff-t-optional",(-2082792292),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-optional","diff-t-optional",(41957054),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_optional)?mikron.test.diff_t_optional.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_optional = ((function (t_optional_2148,dataset1262_2149){
return (function mikron$test$valid_QMARK__t_optional(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_optional.cljs$lang$var);
});})(t_optional_2148,dataset1262_2149))
;
mikron.test.valid_QMARK__t_optional.cljs$lang$test = ((function (t_optional_2148,dataset1262_2149){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_optional_2148,dataset1262_2149);
});})(t_optional_2148,dataset1262_2149))
;

mikron.test.valid_QMARK__t_optional.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_optional;},new cljs.core.Symbol("mikron.test","valid?-t-optional","mikron.test/valid?-t-optional",(638233476),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-optional","valid?-t-optional",(-1515327062),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_optional)?mikron.test.valid_QMARK__t_optional.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_optional = ((function (t_optional_2148,dataset1262_2149){
return (function mikron$test$interp_t_optional(){
return cljs.test.test_var.call(null,mikron.test.interp_t_optional.cljs$lang$var);
});})(t_optional_2148,dataset1262_2149))
;
mikron.test.interp_t_optional.cljs$lang$test = ((function (t_optional_2148,dataset1262_2149){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_optional_2148,dataset1262_2149);
});})(t_optional_2148,dataset1262_2149))
;

mikron.test.interp_t_optional.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_optional;},new cljs.core.Symbol("mikron.test","interp-t-optional","mikron.test/interp-t-optional",(965171035),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-optional","interp-t-optional",(-1166115403),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_optional)?mikron.test.interp_t_optional.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_string_2150 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1303){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1303))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1303));
}
}),(function (value1304){
return typeof value1304 === 'string';
}),(function (value_11306,value_21307){
return value_21307;
}),(function (){
return cljs.core.apply.call(null,cljs.core.str,(function (){var coll1326 = cljs.core.PersistentVector.EMPTY;
var n1327 = (4);
var n1327__$1 = cljs.core.long$.call(null,n1327);
var coll1326__$1 = cljs.core.transient$.call(null,coll1326);
while(true){
if(((0) === n1327__$1)){
return cljs.core.persistent_BANG_.call(null,coll1326__$1);
} else {
var G__2152 = (n1327__$1 - (1));
var G__2153 = cljs.core.conj_BANG_.call(null,coll1326__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1327__$1 = G__2152;
coll1326__$1 = G__2153;
continue;
}
break;
}
})());
}),(function (buffer1308){
return mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1308));
}),(function (value_11310,value_21311,prefer_first_QMARK_1312,time_factor1313){
var value_1_SINGLEQUOTE_1314 = mikron.util.schema.string__GT_binary.call(null,value_11310);
var value_2_SINGLEQUOTE_1315 = mikron.util.schema.string__GT_binary.call(null,value_21311);
return mikron.util.schema.binary__GT_string.call(null,(cljs.core.truth_(prefer_first_QMARK_1312)?value_1_SINGLEQUOTE_1314:value_2_SINGLEQUOTE_1315));
}),(function (value1316,buffer1317){
var value_dnil_QMARK_1318 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1316);
mikron.buffer._BANG_boolean.call(null,buffer1317,value_dnil_QMARK_1318);

if(value_dnil_QMARK_1318){
return null;
} else {
var value_SINGLEQUOTE_1319 = mikron.util.schema.string__GT_binary.call(null,value1316);
return mikron.buffer._BANG_binary.call(null,buffer1317,value_SINGLEQUOTE_1319);
}
}),(function (value1320,buffer1321){
var value_SINGLEQUOTE_1322 = mikron.util.schema.string__GT_binary.call(null,value1320);
return mikron.buffer._BANG_binary.call(null,buffer1321,value_SINGLEQUOTE_1322);
}),(function (value_11324,value_21325){
return value_21325;
})]),null,null,null));
})();
var dataset1262_2151 = cljs.core.repeatedly.call(null,(100),((function (t_string_2150){
return (function (){
return mikron.core.gen.call(null,t_string_2150);
});})(t_string_2150))
);
mikron.test.pack_t_string = ((function (t_string_2150,dataset1262_2151){
return (function mikron$test$pack_t_string(){
return cljs.test.test_var.call(null,mikron.test.pack_t_string.cljs$lang$var);
});})(t_string_2150,dataset1262_2151))
;
mikron.test.pack_t_string.cljs$lang$test = ((function (t_string_2150,dataset1262_2151){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_string_2150,dataset1262_2151);
});})(t_string_2150,dataset1262_2151))
;

mikron.test.pack_t_string.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_string;},new cljs.core.Symbol("mikron.test","pack-t-string","mikron.test/pack-t-string",(1010215773),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-string","pack-t-string",(-1118715589),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_string)?mikron.test.pack_t_string.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_string = ((function (t_string_2150,dataset1262_2151){
return (function mikron$test$diff_t_string(){
return cljs.test.test_var.call(null,mikron.test.diff_t_string.cljs$lang$var);
});})(t_string_2150,dataset1262_2151))
;
mikron.test.diff_t_string.cljs$lang$test = ((function (t_string_2150,dataset1262_2151){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_string_2150,dataset1262_2151);
});})(t_string_2150,dataset1262_2151))
;

mikron.test.diff_t_string.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_string;},new cljs.core.Symbol("mikron.test","diff-t-string","mikron.test/diff-t-string",(1506025936),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-string","diff-t-string",(-647030222),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_string)?mikron.test.diff_t_string.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_string = ((function (t_string_2150,dataset1262_2151){
return (function mikron$test$valid_QMARK__t_string(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_string.cljs$lang$var);
});})(t_string_2150,dataset1262_2151))
;
mikron.test.valid_QMARK__t_string.cljs$lang$test = ((function (t_string_2150,dataset1262_2151){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_string_2150,dataset1262_2151);
});})(t_string_2150,dataset1262_2151))
;

mikron.test.valid_QMARK__t_string.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_string;},new cljs.core.Symbol("mikron.test","valid?-t-string","mikron.test/valid?-t-string",(-1868910367),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-string","valid?-t-string",(275930823),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_string)?mikron.test.valid_QMARK__t_string.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_string = ((function (t_string_2150,dataset1262_2151){
return (function mikron$test$interp_t_string(){
return cljs.test.test_var.call(null,mikron.test.interp_t_string.cljs$lang$var);
});})(t_string_2150,dataset1262_2151))
;
mikron.test.interp_t_string.cljs$lang$test = ((function (t_string_2150,dataset1262_2151){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_string_2150,dataset1262_2151);
});})(t_string_2150,dataset1262_2151))
;

mikron.test.interp_t_string.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_string;},new cljs.core.Symbol("mikron.test","interp-t-string","mikron.test/interp-t-string",(43207943),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-string","interp-t-string",(-2092419287),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_string)?mikron.test.interp_t_string.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_uint_2154 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1328){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1328))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_uint.call(null,buffer1328);
}
}),(function (value1329){
return (cljs.core.integer_QMARK_.call(null,value1329)) && ((cljs.core.unchecked_long.call(null,value1329) >= (0))) && ((cljs.core.unchecked_long.call(null,value1329) < (4294967296)));
}),(function (value_11331,value_21332){
return value_21332;
}),(function (){
var r1333 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1333 * (4294967296)) + (((1) - r1333) * (0)))));
}),(function (buffer1334){
return mikron.buffer._QMARK_uint.call(null,buffer1334);
}),(function (value_11336,value_21337,prefer_first_QMARK_1338,time_factor1339){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11336,value_21337,time_factor1339));
}),(function (value1340,buffer1341){
var value_dnil_QMARK_1342 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1340);
mikron.buffer._BANG_boolean.call(null,buffer1341,value_dnil_QMARK_1342);

if(value_dnil_QMARK_1342){
return null;
} else {
return mikron.buffer._BANG_uint.call(null,buffer1341,value1340);
}
}),(function (value1343,buffer1344){
return mikron.buffer._BANG_uint.call(null,buffer1344,value1343);
}),(function (value_11346,value_21347){
return value_21347;
})]),null,null,null));
})();
var dataset1262_2155 = cljs.core.repeatedly.call(null,(100),((function (t_uint_2154){
return (function (){
return mikron.core.gen.call(null,t_uint_2154);
});})(t_uint_2154))
);
mikron.test.pack_t_uint = ((function (t_uint_2154,dataset1262_2155){
return (function mikron$test$pack_t_uint(){
return cljs.test.test_var.call(null,mikron.test.pack_t_uint.cljs$lang$var);
});})(t_uint_2154,dataset1262_2155))
;
mikron.test.pack_t_uint.cljs$lang$test = ((function (t_uint_2154,dataset1262_2155){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_uint_2154,dataset1262_2155);
});})(t_uint_2154,dataset1262_2155))
;

mikron.test.pack_t_uint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_uint;},new cljs.core.Symbol("mikron.test","pack-t-uint","mikron.test/pack-t-uint",(1491409729),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-uint","pack-t-uint",(-670368477),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_uint)?mikron.test.pack_t_uint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_uint = ((function (t_uint_2154,dataset1262_2155){
return (function mikron$test$diff_t_uint(){
return cljs.test.test_var.call(null,mikron.test.diff_t_uint.cljs$lang$var);
});})(t_uint_2154,dataset1262_2155))
;
mikron.test.diff_t_uint.cljs$lang$test = ((function (t_uint_2154,dataset1262_2155){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_uint_2154,dataset1262_2155);
});})(t_uint_2154,dataset1262_2155))
;

mikron.test.diff_t_uint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_uint;},new cljs.core.Symbol("mikron.test","diff-t-uint","mikron.test/diff-t-uint",(1629498209),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-uint","diff-t-uint",(-506773181),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_uint)?mikron.test.diff_t_uint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_uint = ((function (t_uint_2154,dataset1262_2155){
return (function mikron$test$valid_QMARK__t_uint(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_uint.cljs$lang$var);
});})(t_uint_2154,dataset1262_2155))
;
mikron.test.valid_QMARK__t_uint.cljs$lang$test = ((function (t_uint_2154,dataset1262_2155){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_uint_2154,dataset1262_2155);
});})(t_uint_2154,dataset1262_2155))
;

mikron.test.valid_QMARK__t_uint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_uint;},new cljs.core.Symbol("mikron.test","valid?-t-uint","mikron.test/valid?-t-uint",(1684354780),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-uint","valid?-t-uint",(-452040386),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_uint)?mikron.test.valid_QMARK__t_uint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_uint = ((function (t_uint_2154,dataset1262_2155){
return (function mikron$test$interp_t_uint(){
return cljs.test.test_var.call(null,mikron.test.interp_t_uint.cljs$lang$var);
});})(t_uint_2154,dataset1262_2155))
;
mikron.test.interp_t_uint.cljs$lang$test = ((function (t_uint_2154,dataset1262_2155){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_uint_2154,dataset1262_2155);
});})(t_uint_2154,dataset1262_2155))
;

mikron.test.interp_t_uint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_uint;},new cljs.core.Symbol("mikron.test","interp-t-uint","mikron.test/interp-t-uint",(700128392),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-uint","interp-t-uint",(-1442680086),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_uint)?mikron.test.interp_t_uint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_int_2156 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1348){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1348))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_int.call(null,buffer1348);
}
}),(function (value1349){
return (cljs.core.integer_QMARK_.call(null,value1349)) && ((cljs.core.unchecked_long.call(null,value1349) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value1349) < (2147483648)));
}),(function (value_11351,value_21352){
return value_21352;
}),(function (){
var r1353 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1353 * (2147483648)) + (((1) - r1353) * (-2147483648)))));
}),(function (buffer1354){
return mikron.buffer._QMARK_int.call(null,buffer1354);
}),(function (value_11356,value_21357,prefer_first_QMARK_1358,time_factor1359){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11356,value_21357,time_factor1359));
}),(function (value1360,buffer1361){
var value_dnil_QMARK_1362 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1360);
mikron.buffer._BANG_boolean.call(null,buffer1361,value_dnil_QMARK_1362);

if(value_dnil_QMARK_1362){
return null;
} else {
return mikron.buffer._BANG_int.call(null,buffer1361,value1360);
}
}),(function (value1363,buffer1364){
return mikron.buffer._BANG_int.call(null,buffer1364,value1363);
}),(function (value_11366,value_21367){
return value_21367;
})]),null,null,null));
})();
var dataset1262_2157 = cljs.core.repeatedly.call(null,(100),((function (t_int_2156){
return (function (){
return mikron.core.gen.call(null,t_int_2156);
});})(t_int_2156))
);
mikron.test.pack_t_int = ((function (t_int_2156,dataset1262_2157){
return (function mikron$test$pack_t_int(){
return cljs.test.test_var.call(null,mikron.test.pack_t_int.cljs$lang$var);
});})(t_int_2156,dataset1262_2157))
;
mikron.test.pack_t_int.cljs$lang$test = ((function (t_int_2156,dataset1262_2157){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_int_2156,dataset1262_2157);
});})(t_int_2156,dataset1262_2157))
;

mikron.test.pack_t_int.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_int;},new cljs.core.Symbol("mikron.test","pack-t-int","mikron.test/pack-t-int",(70100799),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-int","pack-t-int",(-2066300643),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_int)?mikron.test.pack_t_int.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_int = ((function (t_int_2156,dataset1262_2157){
return (function mikron$test$diff_t_int(){
return cljs.test.test_var.call(null,mikron.test.diff_t_int.cljs$lang$var);
});})(t_int_2156,dataset1262_2157))
;
mikron.test.diff_t_int.cljs$lang$test = ((function (t_int_2156,dataset1262_2157){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_int_2156,dataset1262_2157);
});})(t_int_2156,dataset1262_2157))
;

mikron.test.diff_t_int.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_int;},new cljs.core.Symbol("mikron.test","diff-t-int","mikron.test/diff-t-int",(1149129488),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-int","diff-t-int",(-992511626),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_int)?mikron.test.diff_t_int.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_int = ((function (t_int_2156,dataset1262_2157){
return (function mikron$test$valid_QMARK__t_int(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_int.cljs$lang$var);
});})(t_int_2156,dataset1262_2157))
;
mikron.test.valid_QMARK__t_int.cljs$lang$test = ((function (t_int_2156,dataset1262_2157){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_int_2156,dataset1262_2157);
});})(t_int_2156,dataset1262_2157))
;

mikron.test.valid_QMARK__t_int.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_int;},new cljs.core.Symbol("mikron.test","valid?-t-int","mikron.test/valid?-t-int",(-1041541743),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-int","valid?-t-int",(1311945647),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_int)?mikron.test.valid_QMARK__t_int.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_int = ((function (t_int_2156,dataset1262_2157){
return (function mikron$test$interp_t_int(){
return cljs.test.test_var.call(null,mikron.test.interp_t_int.cljs$lang$var);
});})(t_int_2156,dataset1262_2157))
;
mikron.test.interp_t_int.cljs$lang$test = ((function (t_int_2156,dataset1262_2157){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_int_2156,dataset1262_2157);
});})(t_int_2156,dataset1262_2157))
;

mikron.test.interp_t_int.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_int;},new cljs.core.Symbol("mikron.test","interp-t-int","mikron.test/interp-t-int",(60587113),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-int","interp-t-int",(-2100980153),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_int)?mikron.test.interp_t_int.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t__LT__sorted_map_2158 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1368){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1368))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1408 = cljs.core.sorted_map_by.call(null,cljs.core._LT_);
var n1409 = mikron.buffer._QMARK_varint.call(null,buffer1368);
var n1409__$1 = cljs.core.long$.call(null,n1409);
var coll1408__$1 = coll1408;
while(true){
if(((0) === n1409__$1)){
return coll1408__$1;
} else {
var G__2160 = (n1409__$1 - (1));
var G__2161 = cljs.core.assoc.call(null,coll1408__$1,mikron.buffer._QMARK_byte.call(null,buffer1368),(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1368))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1368))));
n1409__$1 = G__2160;
coll1408__$1 = G__2161;
continue;
}
break;
}
}
}),(function (value1369){
return (cljs.core.map_QMARK_.call(null,value1369)) && (cljs.core.every_QMARK_.call(null,(function (entry_SINGLEQUOTE_1370){
var key_SINGLEQUOTE_1371 = cljs.core.key.call(null,entry_SINGLEQUOTE_1370);
var value_SINGLEQUOTE_1372 = cljs.core.val.call(null,entry_SINGLEQUOTE_1370);
return ((cljs.core.integer_QMARK_.call(null,key_SINGLEQUOTE_1371)) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1371) >= (-128))) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1371) < (128)))) && (typeof value_SINGLEQUOTE_1372 === 'string');
}),value1369));
}),(function (value_11374,value_21375){
return value_21375;
}),(function (){
var coll1410 = cljs.core.sorted_map_by.call(null,cljs.core._LT_);
var n1411 = (4);
var n1411__$1 = cljs.core.long$.call(null,n1411);
var coll1410__$1 = coll1410;
while(true){
if(((0) === n1411__$1)){
return coll1410__$1;
} else {
var G__2162 = (n1411__$1 - (1));
var G__2163 = cljs.core.assoc.call(null,coll1410__$1,(function (){var r1376 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1376 * (128)) + (((1) - r1376) * (-128)))));
})(),cljs.core.apply.call(null,cljs.core.str,(function (){var coll1412 = cljs.core.PersistentVector.EMPTY;
var n1413 = (4);
var n1413__$1 = cljs.core.long$.call(null,n1413);
var coll1412__$1 = cljs.core.transient$.call(null,coll1412);
while(true){
if(((0) === n1413__$1)){
return cljs.core.persistent_BANG_.call(null,coll1412__$1);
} else {
var G__2164 = (n1413__$1 - (1));
var G__2165 = cljs.core.conj_BANG_.call(null,coll1412__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1413__$1 = G__2164;
coll1412__$1 = G__2165;
continue;
}
break;
}
})()));
n1411__$1 = G__2162;
coll1410__$1 = G__2163;
continue;
}
break;
}
}),(function (buffer1377){
var coll1414 = cljs.core.sorted_map_by.call(null,cljs.core._LT_);
var n1415 = mikron.buffer._QMARK_varint.call(null,buffer1377);
var n1415__$1 = cljs.core.long$.call(null,n1415);
var coll1414__$1 = coll1414;
while(true){
if(((0) === n1415__$1)){
return coll1414__$1;
} else {
var G__2166 = (n1415__$1 - (1));
var G__2167 = cljs.core.assoc.call(null,coll1414__$1,mikron.buffer._QMARK_byte.call(null,buffer1377),mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1377)));
n1415__$1 = G__2166;
coll1414__$1 = G__2167;
continue;
}
break;
}
}),(function (value_11379,value_21380,prefer_first_QMARK_1381,time_factor1382){
if(cljs.core.truth_(prefer_first_QMARK_1381)){
return value_11379;
} else {
return value_21380;
}
}),(function (value1389,buffer1390){
var value_dnil_QMARK_1391 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1389);
mikron.buffer._BANG_boolean.call(null,buffer1390,value_dnil_QMARK_1391);

if(value_dnil_QMARK_1391){
return null;
} else {
var length1392 = mikron.util.coll.count.call(null,value1389);
mikron.buffer._BANG_varint.call(null,buffer1390,length1392);

return cljs.core.run_BANG_.call(null,((function (length1392,value_dnil_QMARK_1391){
return (function (entry_SINGLEQUOTE_1393){
var key_SINGLEQUOTE_1394 = cljs.core.key.call(null,entry_SINGLEQUOTE_1393);
var value_SINGLEQUOTE_1395 = cljs.core.val.call(null,entry_SINGLEQUOTE_1393);
mikron.buffer._BANG_byte.call(null,buffer1390,key_SINGLEQUOTE_1394);

var value_dnil_QMARK_1396 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1395);
mikron.buffer._BANG_boolean.call(null,buffer1390,value_dnil_QMARK_1396);

if(value_dnil_QMARK_1396){
return null;
} else {
var value_SINGLEQUOTE_1397 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1395);
return mikron.buffer._BANG_binary.call(null,buffer1390,value_SINGLEQUOTE_1397);
}
});})(length1392,value_dnil_QMARK_1391))
,value1389);
}
}),(function (value1398,buffer1399){
var length1400 = mikron.util.coll.count.call(null,value1398);
mikron.buffer._BANG_varint.call(null,buffer1399,length1400);

return cljs.core.run_BANG_.call(null,((function (length1400){
return (function (entry_SINGLEQUOTE_1401){
var key_SINGLEQUOTE_1402 = cljs.core.key.call(null,entry_SINGLEQUOTE_1401);
var value_SINGLEQUOTE_1403 = cljs.core.val.call(null,entry_SINGLEQUOTE_1401);
mikron.buffer._BANG_byte.call(null,buffer1399,key_SINGLEQUOTE_1402);

var value_SINGLEQUOTE_1404 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1403);
return mikron.buffer._BANG_binary.call(null,buffer1399,value_SINGLEQUOTE_1404);
});})(length1400))
,value1398);
}),(function (value_11406,value_21407){
return value_21407;
})]),null,null,null));
})();
var dataset1262_2159 = cljs.core.repeatedly.call(null,(100),((function (t__LT__sorted_map_2158){
return (function (){
return mikron.core.gen.call(null,t__LT__sorted_map_2158);
});})(t__LT__sorted_map_2158))
);
mikron.test.pack_t__LT__sorted_map = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function mikron$test$pack_t__LT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.pack_t__LT__sorted_map.cljs$lang$var);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;
mikron.test.pack_t__LT__sorted_map.cljs$lang$test = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t__LT__sorted_map_2158,dataset1262_2159);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;

mikron.test.pack_t__LT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t__LT__sorted_map;},new cljs.core.Symbol("mikron.test","pack-t-<-sorted-map","mikron.test/pack-t-<-sorted-map",(1327436654),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-<-sorted-map","pack-t-<-sorted-map",(-1066940080),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t__LT__sorted_map)?mikron.test.pack_t__LT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t__LT__sorted_map = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function mikron$test$diff_t__LT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.diff_t__LT__sorted_map.cljs$lang$var);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;
mikron.test.diff_t__LT__sorted_map.cljs$lang$test = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t__LT__sorted_map_2158,dataset1262_2159);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;

mikron.test.diff_t__LT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t__LT__sorted_map;},new cljs.core.Symbol("mikron.test","diff-t-<-sorted-map","mikron.test/diff-t-<-sorted-map",(858983447),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-<-sorted-map","diff-t-<-sorted-map",(-1281853707),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t__LT__sorted_map)?mikron.test.diff_t__LT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t__LT__sorted_map = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function mikron$test$valid_QMARK__t__LT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t__LT__sorted_map.cljs$lang$var);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;
mikron.test.valid_QMARK__t__LT__sorted_map.cljs$lang$test = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t__LT__sorted_map_2158,dataset1262_2159);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;

mikron.test.valid_QMARK__t__LT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t__LT__sorted_map;},new cljs.core.Symbol("mikron.test","valid?-t-<-sorted-map","mikron.test/valid?-t-<-sorted-map",(1422856587),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-<-sorted-map","valid?-t-<-sorted-map",(-711525459),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t__LT__sorted_map)?mikron.test.valid_QMARK__t__LT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t__LT__sorted_map = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function mikron$test$interp_t__LT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.interp_t__LT__sorted_map.cljs$lang$var);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;
mikron.test.interp_t__LT__sorted_map.cljs$lang$test = ((function (t__LT__sorted_map_2158,dataset1262_2159){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t__LT__sorted_map_2158,dataset1262_2159);
});})(t__LT__sorted_map_2158,dataset1262_2159))
;

mikron.test.interp_t__LT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t__LT__sorted_map;},new cljs.core.Symbol("mikron.test","interp-t-<-sorted-map","mikron.test/interp-t-<-sorted-map",(-1078488119),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-<-sorted-map","interp-t-<-sorted-map",(1062122987),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t__LT__sorted_map)?mikron.test.interp_t__LT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_short_2168 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1416){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1416))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_short.call(null,buffer1416);
}
}),(function (value1417){
return (cljs.core.integer_QMARK_.call(null,value1417)) && ((cljs.core.unchecked_long.call(null,value1417) >= (-32768))) && ((cljs.core.unchecked_long.call(null,value1417) < (32768)));
}),(function (value_11419,value_21420){
return value_21420;
}),(function (){
var r1421 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1421 * (32768)) + (((1) - r1421) * (-32768)))));
}),(function (buffer1422){
return mikron.buffer._QMARK_short.call(null,buffer1422);
}),(function (value_11424,value_21425,prefer_first_QMARK_1426,time_factor1427){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11424,value_21425,time_factor1427));
}),(function (value1428,buffer1429){
var value_dnil_QMARK_1430 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1428);
mikron.buffer._BANG_boolean.call(null,buffer1429,value_dnil_QMARK_1430);

if(value_dnil_QMARK_1430){
return null;
} else {
return mikron.buffer._BANG_short.call(null,buffer1429,value1428);
}
}),(function (value1431,buffer1432){
return mikron.buffer._BANG_short.call(null,buffer1432,value1431);
}),(function (value_11434,value_21435){
return value_21435;
})]),null,null,null));
})();
var dataset1262_2169 = cljs.core.repeatedly.call(null,(100),((function (t_short_2168){
return (function (){
return mikron.core.gen.call(null,t_short_2168);
});})(t_short_2168))
);
mikron.test.pack_t_short = ((function (t_short_2168,dataset1262_2169){
return (function mikron$test$pack_t_short(){
return cljs.test.test_var.call(null,mikron.test.pack_t_short.cljs$lang$var);
});})(t_short_2168,dataset1262_2169))
;
mikron.test.pack_t_short.cljs$lang$test = ((function (t_short_2168,dataset1262_2169){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_short_2168,dataset1262_2169);
});})(t_short_2168,dataset1262_2169))
;

mikron.test.pack_t_short.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_short;},new cljs.core.Symbol("mikron.test","pack-t-short","mikron.test/pack-t-short",(-165336573),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-short","pack-t-short",(1968049377),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_short)?mikron.test.pack_t_short.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_short = ((function (t_short_2168,dataset1262_2169){
return (function mikron$test$diff_t_short(){
return cljs.test.test_var.call(null,mikron.test.diff_t_short.cljs$lang$var);
});})(t_short_2168,dataset1262_2169))
;
mikron.test.diff_t_short.cljs$lang$test = ((function (t_short_2168,dataset1262_2169){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_short_2168,dataset1262_2169);
});})(t_short_2168,dataset1262_2169))
;

mikron.test.diff_t_short.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_short;},new cljs.core.Symbol("mikron.test","diff-t-short","mikron.test/diff-t-short",(-1709362113),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-short","diff-t-short",(448458333),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_short)?mikron.test.diff_t_short.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_short = ((function (t_short_2168,dataset1262_2169){
return (function mikron$test$valid_QMARK__t_short(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_short.cljs$lang$var);
});})(t_short_2168,dataset1262_2169))
;
mikron.test.valid_QMARK__t_short.cljs$lang$test = ((function (t_short_2168,dataset1262_2169){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_short_2168,dataset1262_2169);
});})(t_short_2168,dataset1262_2169))
;

mikron.test.valid_QMARK__t_short.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_short;},new cljs.core.Symbol("mikron.test","valid?-t-short","mikron.test/valid?-t-short",(284126811),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-short","valid?-t-short",(-1819787143),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_short)?mikron.test.valid_QMARK__t_short.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_short = ((function (t_short_2168,dataset1262_2169){
return (function mikron$test$interp_t_short(){
return cljs.test.test_var.call(null,mikron.test.interp_t_short.cljs$lang$var);
});})(t_short_2168,dataset1262_2169))
;
mikron.test.interp_t_short.cljs$lang$test = ((function (t_short_2168,dataset1262_2169){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_short_2168,dataset1262_2169);
});})(t_short_2168,dataset1262_2169))
;

mikron.test.interp_t_short.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_short;},new cljs.core.Symbol("mikron.test","interp-t-short","mikron.test/interp-t-short",(-283199491),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-short","interp-t-short",(1874947547),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_short)?mikron.test.interp_t_short.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_long_2170 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1436){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1436))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_long.call(null,buffer1436);
}
}),(function (value1437){
return (cljs.core.integer_QMARK_.call(null,value1437)) && ((cljs.core.unchecked_long.call(null,value1437) >= (-9223372036854776000))) && ((cljs.core.unchecked_long.call(null,value1437) < (9223372036854776000)));
}),(function (value_11439,value_21440){
return value_21440;
}),(function (){
var r1441 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1441 * (9223372036854776000)) + (((1) - r1441) * (-9223372036854776000)))));
}),(function (buffer1442){
return mikron.buffer._QMARK_long.call(null,buffer1442);
}),(function (value_11444,value_21445,prefer_first_QMARK_1446,time_factor1447){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11444,value_21445,time_factor1447));
}),(function (value1448,buffer1449){
var value_dnil_QMARK_1450 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1448);
mikron.buffer._BANG_boolean.call(null,buffer1449,value_dnil_QMARK_1450);

if(value_dnil_QMARK_1450){
return null;
} else {
return mikron.buffer._BANG_long.call(null,buffer1449,value1448);
}
}),(function (value1451,buffer1452){
return mikron.buffer._BANG_long.call(null,buffer1452,value1451);
}),(function (value_11454,value_21455){
return value_21455;
})]),null,null,null));
})();
var dataset1262_2171 = cljs.core.repeatedly.call(null,(100),((function (t_long_2170){
return (function (){
return mikron.core.gen.call(null,t_long_2170);
});})(t_long_2170))
);
mikron.test.pack_t_long = ((function (t_long_2170,dataset1262_2171){
return (function mikron$test$pack_t_long(){
return cljs.test.test_var.call(null,mikron.test.pack_t_long.cljs$lang$var);
});})(t_long_2170,dataset1262_2171))
;
mikron.test.pack_t_long.cljs$lang$test = ((function (t_long_2170,dataset1262_2171){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_long_2170,dataset1262_2171);
});})(t_long_2170,dataset1262_2171))
;

mikron.test.pack_t_long.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_long;},new cljs.core.Symbol("mikron.test","pack-t-long","mikron.test/pack-t-long",(830362589),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-long","pack-t-long",(-1328057281),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_long)?mikron.test.pack_t_long.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_long = ((function (t_long_2170,dataset1262_2171){
return (function mikron$test$diff_t_long(){
return cljs.test.test_var.call(null,mikron.test.diff_t_long.cljs$lang$var);
});})(t_long_2170,dataset1262_2171))
;
mikron.test.diff_t_long.cljs$lang$test = ((function (t_long_2170,dataset1262_2171){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_long_2170,dataset1262_2171);
});})(t_long_2170,dataset1262_2171))
;

mikron.test.diff_t_long.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_long;},new cljs.core.Symbol("mikron.test","diff-t-long","mikron.test/diff-t-long",(-1720262241),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-long","diff-t-long",(411667389),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_long)?mikron.test.diff_t_long.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_long = ((function (t_long_2170,dataset1262_2171){
return (function mikron$test$valid_QMARK__t_long(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_long.cljs$lang$var);
});})(t_long_2170,dataset1262_2171))
;
mikron.test.valid_QMARK__t_long.cljs$lang$test = ((function (t_long_2170,dataset1262_2171){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_long_2170,dataset1262_2171);
});})(t_long_2170,dataset1262_2171))
;

mikron.test.valid_QMARK__t_long.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_long;},new cljs.core.Symbol("mikron.test","valid?-t-long","mikron.test/valid?-t-long",(1149197107),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-long","valid?-t-long",(-992583219),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_long)?mikron.test.valid_QMARK__t_long.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_long = ((function (t_long_2170,dataset1262_2171){
return (function mikron$test$interp_t_long(){
return cljs.test.test_var.call(null,mikron.test.interp_t_long.cljs$lang$var);
});})(t_long_2170,dataset1262_2171))
;
mikron.test.interp_t_long.cljs$lang$test = ((function (t_long_2170,dataset1262_2171){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_long_2170,dataset1262_2171);
});})(t_long_2170,dataset1262_2171))
;

mikron.test.interp_t_long.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_long;},new cljs.core.Symbol("mikron.test","interp-t-long","mikron.test/interp-t-long",(1152364428),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-long","interp-t-long",(-1006307862),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_long)?mikron.test.interp_t_long.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_char_2172 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1456){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1456))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.util.schema.int__GT_char.call(null,mikron.buffer._QMARK_int.call(null,buffer1456));
}
}),(function (value1457){
return cljs.core.char_QMARK_.call(null,value1457);
}),(function (value_11459,value_21460){
return value_21460;
}),(function (){
return cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500)));
}),(function (buffer1461){
return mikron.util.schema.int__GT_char.call(null,mikron.buffer._QMARK_int.call(null,buffer1461));
}),(function (value_11463,value_21464,prefer_first_QMARK_1465,time_factor1466){
return value_21464;

}),(function (value1467,buffer1468){
var value_dnil_QMARK_1469 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1467);
mikron.buffer._BANG_boolean.call(null,buffer1468,value_dnil_QMARK_1469);

if(value_dnil_QMARK_1469){
return null;
} else {
var value_SINGLEQUOTE_1470 = mikron.util.schema.char__GT_int.call(null,value1467);
return mikron.buffer._BANG_int.call(null,buffer1468,value_SINGLEQUOTE_1470);
}
}),(function (value1471,buffer1472){
var value_SINGLEQUOTE_1473 = mikron.util.schema.char__GT_int.call(null,value1471);
return mikron.buffer._BANG_int.call(null,buffer1472,value_SINGLEQUOTE_1473);
}),(function (value_11475,value_21476){
return value_21476;
})]),null,null,null));
})();
var dataset1262_2173 = cljs.core.repeatedly.call(null,(100),((function (t_char_2172){
return (function (){
return mikron.core.gen.call(null,t_char_2172);
});})(t_char_2172))
);
mikron.test.pack_t_char = ((function (t_char_2172,dataset1262_2173){
return (function mikron$test$pack_t_char(){
return cljs.test.test_var.call(null,mikron.test.pack_t_char.cljs$lang$var);
});})(t_char_2172,dataset1262_2173))
;
mikron.test.pack_t_char.cljs$lang$test = ((function (t_char_2172,dataset1262_2173){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_char_2172,dataset1262_2173);
});})(t_char_2172,dataset1262_2173))
;

mikron.test.pack_t_char.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_char;},new cljs.core.Symbol("mikron.test","pack-t-char","mikron.test/pack-t-char",(823500836),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-char","pack-t-char",(-1313700282),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_char)?mikron.test.pack_t_char.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_char = ((function (t_char_2172,dataset1262_2173){
return (function mikron$test$diff_t_char(){
return cljs.test.test_var.call(null,mikron.test.diff_t_char.cljs$lang$var);
});})(t_char_2172,dataset1262_2173))
;
mikron.test.diff_t_char.cljs$lang$test = ((function (t_char_2172,dataset1262_2173){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_char_2172,dataset1262_2173);
});})(t_char_2172,dataset1262_2173))
;

mikron.test.diff_t_char.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_char;},new cljs.core.Symbol("mikron.test","diff-t-char","mikron.test/diff-t-char",(866051657),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-char","diff-t-char",(-1304048533),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_char)?mikron.test.diff_t_char.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_char = ((function (t_char_2172,dataset1262_2173){
return (function mikron$test$valid_QMARK__t_char(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_char.cljs$lang$var);
});})(t_char_2172,dataset1262_2173))
;
mikron.test.valid_QMARK__t_char.cljs$lang$test = ((function (t_char_2172,dataset1262_2173){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_char_2172,dataset1262_2173);
});})(t_char_2172,dataset1262_2173))
;

mikron.test.valid_QMARK__t_char.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_char;},new cljs.core.Symbol("mikron.test","valid?-t-char","mikron.test/valid?-t-char",(-2082976067),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-char","valid?-t-char",(43231),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_char)?mikron.test.valid_QMARK__t_char.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_char = ((function (t_char_2172,dataset1262_2173){
return (function mikron$test$interp_t_char(){
return cljs.test.test_var.call(null,mikron.test.interp_t_char.cljs$lang$var);
});})(t_char_2172,dataset1262_2173))
;
mikron.test.interp_t_char.cljs$lang$test = ((function (t_char_2172,dataset1262_2173){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_char_2172,dataset1262_2173);
});})(t_char_2172,dataset1262_2173))
;

mikron.test.interp_t_char.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_char;},new cljs.core.Symbol("mikron.test","interp-t-char","mikron.test/interp-t-char",(575700434),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-char","interp-t-char",(-1561816528),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_char)?mikron.test.interp_t_char.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_nil_2174 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1477){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1477))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return null;
}
}),(function (value1478){
return (value1478 == null);
}),(function (value_11480,value_21481){
return value_21481;
}),(function (){
return null;
}),(function (buffer1482){
return null;
}),(function (value_11484,value_21485,prefer_first_QMARK_1486,time_factor1487){
if(cljs.core.truth_(prefer_first_QMARK_1486)){
return value_11484;
} else {
return value_21485;
}
}),(function (value1488,buffer1489){
var value_dnil_QMARK_1490 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1488);
mikron.buffer._BANG_boolean.call(null,buffer1489,value_dnil_QMARK_1490);

if(value_dnil_QMARK_1490){
return null;
} else {
return null;
}
}),(function (value1491,buffer1492){
return null;
}),(function (value_11494,value_21495){
return value_21495;
})]),null,null,null));
})();
var dataset1262_2175 = cljs.core.repeatedly.call(null,(100),((function (t_nil_2174){
return (function (){
return mikron.core.gen.call(null,t_nil_2174);
});})(t_nil_2174))
);
mikron.test.pack_t_nil = ((function (t_nil_2174,dataset1262_2175){
return (function mikron$test$pack_t_nil(){
return cljs.test.test_var.call(null,mikron.test.pack_t_nil.cljs$lang$var);
});})(t_nil_2174,dataset1262_2175))
;
mikron.test.pack_t_nil.cljs$lang$test = ((function (t_nil_2174,dataset1262_2175){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_nil_2174,dataset1262_2175);
});})(t_nil_2174,dataset1262_2175))
;

mikron.test.pack_t_nil.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_nil;},new cljs.core.Symbol("mikron.test","pack-t-nil","mikron.test/pack-t-nil",(-2110765862),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-nil","pack-t-nil",(47816444),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_nil)?mikron.test.pack_t_nil.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_nil = ((function (t_nil_2174,dataset1262_2175){
return (function mikron$test$diff_t_nil(){
return cljs.test.test_var.call(null,mikron.test.diff_t_nil.cljs$lang$var);
});})(t_nil_2174,dataset1262_2175))
;
mikron.test.diff_t_nil.cljs$lang$test = ((function (t_nil_2174,dataset1262_2175){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_nil_2174,dataset1262_2175);
});})(t_nil_2174,dataset1262_2175))
;

mikron.test.diff_t_nil.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_nil;},new cljs.core.Symbol("mikron.test","diff-t-nil","mikron.test/diff-t-nil",(-243835703),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-nil","diff-t-nil",(1910273771),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_nil)?mikron.test.diff_t_nil.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_nil = ((function (t_nil_2174,dataset1262_2175){
return (function mikron$test$valid_QMARK__t_nil(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_nil.cljs$lang$var);
});})(t_nil_2174,dataset1262_2175))
;
mikron.test.valid_QMARK__t_nil.cljs$lang$test = ((function (t_nil_2174,dataset1262_2175){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_nil_2174,dataset1262_2175);
});})(t_nil_2174,dataset1262_2175))
;

mikron.test.valid_QMARK__t_nil.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_nil;},new cljs.core.Symbol("mikron.test","valid?-t-nil","mikron.test/valid?-t-nil",(-834601509),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-nil","valid?-t-nil",(1342150653),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_nil)?mikron.test.valid_QMARK__t_nil.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_nil = ((function (t_nil_2174,dataset1262_2175){
return (function mikron$test$interp_t_nil(){
return cljs.test.test_var.call(null,mikron.test.interp_t_nil.cljs$lang$var);
});})(t_nil_2174,dataset1262_2175))
;
mikron.test.interp_t_nil.cljs$lang$test = ((function (t_nil_2174,dataset1262_2175){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_nil_2174,dataset1262_2175);
});})(t_nil_2174,dataset1262_2175))
;

mikron.test.interp_t_nil.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_nil;},new cljs.core.Symbol("mikron.test","interp-t-nil","mikron.test/interp-t-nil",(-849651499),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-nil","interp-t-nil",(1307706103),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_nil)?mikron.test.interp_t_nil.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_ushort_2176 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1496){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1496))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_ushort.call(null,buffer1496);
}
}),(function (value1497){
return (cljs.core.integer_QMARK_.call(null,value1497)) && ((cljs.core.unchecked_long.call(null,value1497) >= (0))) && ((cljs.core.unchecked_long.call(null,value1497) < (65536)));
}),(function (value_11499,value_21500){
return value_21500;
}),(function (){
var r1501 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1501 * (65536)) + (((1) - r1501) * (0)))));
}),(function (buffer1502){
return mikron.buffer._QMARK_ushort.call(null,buffer1502);
}),(function (value_11504,value_21505,prefer_first_QMARK_1506,time_factor1507){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11504,value_21505,time_factor1507));
}),(function (value1508,buffer1509){
var value_dnil_QMARK_1510 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1508);
mikron.buffer._BANG_boolean.call(null,buffer1509,value_dnil_QMARK_1510);

if(value_dnil_QMARK_1510){
return null;
} else {
return mikron.buffer._BANG_ushort.call(null,buffer1509,value1508);
}
}),(function (value1511,buffer1512){
return mikron.buffer._BANG_ushort.call(null,buffer1512,value1511);
}),(function (value_11514,value_21515){
return value_21515;
})]),null,null,null));
})();
var dataset1262_2177 = cljs.core.repeatedly.call(null,(100),((function (t_ushort_2176){
return (function (){
return mikron.core.gen.call(null,t_ushort_2176);
});})(t_ushort_2176))
);
mikron.test.pack_t_ushort = ((function (t_ushort_2176,dataset1262_2177){
return (function mikron$test$pack_t_ushort(){
return cljs.test.test_var.call(null,mikron.test.pack_t_ushort.cljs$lang$var);
});})(t_ushort_2176,dataset1262_2177))
;
mikron.test.pack_t_ushort.cljs$lang$test = ((function (t_ushort_2176,dataset1262_2177){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_ushort_2176,dataset1262_2177);
});})(t_ushort_2176,dataset1262_2177))
;

mikron.test.pack_t_ushort.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_ushort;},new cljs.core.Symbol("mikron.test","pack-t-ushort","mikron.test/pack-t-ushort",(-1532587713),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-ushort","pack-t-ushort",(595573533),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_ushort)?mikron.test.pack_t_ushort.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_ushort = ((function (t_ushort_2176,dataset1262_2177){
return (function mikron$test$diff_t_ushort(){
return cljs.test.test_var.call(null,mikron.test.diff_t_ushort.cljs$lang$var);
});})(t_ushort_2176,dataset1262_2177))
;
mikron.test.diff_t_ushort.cljs$lang$test = ((function (t_ushort_2176,dataset1262_2177){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_ushort_2176,dataset1262_2177);
});})(t_ushort_2176,dataset1262_2177))
;

mikron.test.diff_t_ushort.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_ushort;},new cljs.core.Symbol("mikron.test","diff-t-ushort","mikron.test/diff-t-ushort",(-730860604),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-ushort","diff-t-ushort",(1438047718),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_ushort)?mikron.test.diff_t_ushort.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_ushort = ((function (t_ushort_2176,dataset1262_2177){
return (function mikron$test$valid_QMARK__t_ushort(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_ushort.cljs$lang$var);
});})(t_ushort_2176,dataset1262_2177))
;
mikron.test.valid_QMARK__t_ushort.cljs$lang$test = ((function (t_ushort_2176,dataset1262_2177){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_ushort_2176,dataset1262_2177);
});})(t_ushort_2176,dataset1262_2177))
;

mikron.test.valid_QMARK__t_ushort.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_ushort;},new cljs.core.Symbol("mikron.test","valid?-t-ushort","mikron.test/valid?-t-ushort",(-54720426),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-ushort","valid?-t-ushort",(2070270580),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_ushort)?mikron.test.valid_QMARK__t_ushort.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_ushort = ((function (t_ushort_2176,dataset1262_2177){
return (function mikron$test$interp_t_ushort(){
return cljs.test.test_var.call(null,mikron.test.interp_t_ushort.cljs$lang$var);
});})(t_ushort_2176,dataset1262_2177))
;
mikron.test.interp_t_ushort.cljs$lang$test = ((function (t_ushort_2176,dataset1262_2177){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_ushort_2176,dataset1262_2177);
});})(t_ushort_2176,dataset1262_2177))
;

mikron.test.interp_t_ushort.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_ushort;},new cljs.core.Symbol("mikron.test","interp-t-ushort","mikron.test/interp-t-ushort",(-1529927579),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-ushort","interp-t-ushort",(996544003),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_ushort)?mikron.test.interp_t_ushort.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_tuple_2178 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1516){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1516))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var value_SINGLEQUOTE__01517 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1516))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_int.call(null,buffer1516));
var value_SINGLEQUOTE__11518 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1516))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1516)));
var value_SINGLEQUOTE__21519 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1516))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_double.call(null,buffer1516));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__01517,value_SINGLEQUOTE__11518,value_SINGLEQUOTE__21519], null);
}
}),(function (value1520){
var and__20483__auto__ = cljs.core.vector_QMARK_.call(null,value1520);
if(and__20483__auto__){
var and__20483__auto____$1 = (mikron.util.coll.count.call(null,value1520) === (3));
if(and__20483__auto____$1){
var and__20483__auto____$2 = (function (){var value_SINGLEQUOTE__01521 = mikron.util.coll.nth.call(null,value1520,(0));
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE__01521)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE__01521) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE__01521) < (2147483648)));
})();
if(and__20483__auto____$2){
var and__20483__auto____$3 = (function (){var value_SINGLEQUOTE__11522 = mikron.util.coll.nth.call(null,value1520,(1));
return typeof value_SINGLEQUOTE__11522 === 'string';
})();
if(and__20483__auto____$3){
var value_SINGLEQUOTE__21523 = mikron.util.coll.nth.call(null,value1520,(2));
return typeof value_SINGLEQUOTE__21523 === 'number';
} else {
return and__20483__auto____$3;
}
} else {
return and__20483__auto____$2;
}
} else {
return and__20483__auto____$1;
}
} else {
return and__20483__auto__;
}
}),(function (value_11525,value_21526){
return value_21526;
}),(function (){
var value_SINGLEQUOTE__01527 = (function (){var r1530 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1530 * (2147483648)) + (((1) - r1530) * (-2147483648)))));
})();
var value_SINGLEQUOTE__11528 = cljs.core.apply.call(null,cljs.core.str,(function (){var coll1561 = cljs.core.PersistentVector.EMPTY;
var n1562 = (4);
var n1562__$1 = cljs.core.long$.call(null,n1562);
var coll1561__$1 = cljs.core.transient$.call(null,coll1561);
while(true){
if(((0) === n1562__$1)){
return cljs.core.persistent_BANG_.call(null,coll1561__$1);
} else {
var G__2180 = (n1562__$1 - (1));
var G__2181 = cljs.core.conj_BANG_.call(null,coll1561__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1562__$1 = G__2180;
coll1561__$1 = G__2181;
continue;
}
break;
}
})());
var value_SINGLEQUOTE__21529 = mikron.util.math.rand.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__01527,value_SINGLEQUOTE__11528,value_SINGLEQUOTE__21529], null);
}),(function (buffer1531){
var value_SINGLEQUOTE__01532 = mikron.buffer._QMARK_int.call(null,buffer1531);
var value_SINGLEQUOTE__11533 = mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1531));
var value_SINGLEQUOTE__21534 = mikron.buffer._QMARK_double.call(null,buffer1531);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__01532,value_SINGLEQUOTE__11533,value_SINGLEQUOTE__21534], null);
}),(function (value_11536,value_21537,prefer_first_QMARK_1538,time_factor1539){
if(cljs.core.truth_(prefer_first_QMARK_1538)){
return value_11536;
} else {
return value_21537;
}
}),(function (value1542,buffer1543){
var value_dnil_QMARK_1544 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1542);
mikron.buffer._BANG_boolean.call(null,buffer1543,value_dnil_QMARK_1544);

if(value_dnil_QMARK_1544){
return null;
} else {
var value_SINGLEQUOTE__01545_2182 = mikron.util.coll.nth.call(null,value1542,(0));
var value_dnil_QMARK_1548_2183 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE__01545_2182);
mikron.buffer._BANG_boolean.call(null,buffer1543,value_dnil_QMARK_1548_2183);

if(value_dnil_QMARK_1548_2183){
} else {
mikron.buffer._BANG_int.call(null,buffer1543,value_SINGLEQUOTE__01545_2182);
}

var value_SINGLEQUOTE__11546_2184 = mikron.util.coll.nth.call(null,value1542,(1));
var value_dnil_QMARK_1549_2185 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE__11546_2184);
mikron.buffer._BANG_boolean.call(null,buffer1543,value_dnil_QMARK_1549_2185);

if(value_dnil_QMARK_1549_2185){
} else {
var value_SINGLEQUOTE_1550_2186 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE__11546_2184);
mikron.buffer._BANG_binary.call(null,buffer1543,value_SINGLEQUOTE_1550_2186);
}

var value_SINGLEQUOTE__21547 = mikron.util.coll.nth.call(null,value1542,(2));
var value_dnil_QMARK_1551 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE__21547);
mikron.buffer._BANG_boolean.call(null,buffer1543,value_dnil_QMARK_1551);

if(value_dnil_QMARK_1551){
return null;
} else {
return mikron.buffer._BANG_double.call(null,buffer1543,value_SINGLEQUOTE__21547);
}
}
}),(function (value1552,buffer1553){
var value_SINGLEQUOTE__01554_2187 = mikron.util.coll.nth.call(null,value1552,(0));
mikron.buffer._BANG_int.call(null,buffer1553,value_SINGLEQUOTE__01554_2187);

var value_SINGLEQUOTE__11555_2188 = mikron.util.coll.nth.call(null,value1552,(1));
var value_SINGLEQUOTE_1557_2189 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE__11555_2188);
mikron.buffer._BANG_binary.call(null,buffer1553,value_SINGLEQUOTE_1557_2189);

var value_SINGLEQUOTE__21556 = mikron.util.coll.nth.call(null,value1552,(2));
return mikron.buffer._BANG_double.call(null,buffer1553,value_SINGLEQUOTE__21556);
}),(function (value_11559,value_21560){
return value_21560;
})]),null,null,null));
})();
var dataset1262_2179 = cljs.core.repeatedly.call(null,(100),((function (t_tuple_2178){
return (function (){
return mikron.core.gen.call(null,t_tuple_2178);
});})(t_tuple_2178))
);
mikron.test.pack_t_tuple = ((function (t_tuple_2178,dataset1262_2179){
return (function mikron$test$pack_t_tuple(){
return cljs.test.test_var.call(null,mikron.test.pack_t_tuple.cljs$lang$var);
});})(t_tuple_2178,dataset1262_2179))
;
mikron.test.pack_t_tuple.cljs$lang$test = ((function (t_tuple_2178,dataset1262_2179){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_tuple_2178,dataset1262_2179);
});})(t_tuple_2178,dataset1262_2179))
;

mikron.test.pack_t_tuple.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_tuple;},new cljs.core.Symbol("mikron.test","pack-t-tuple","mikron.test/pack-t-tuple",(773230183),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-tuple","pack-t-tuple",(-1364601979),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_tuple)?mikron.test.pack_t_tuple.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_tuple = ((function (t_tuple_2178,dataset1262_2179){
return (function mikron$test$diff_t_tuple(){
return cljs.test.test_var.call(null,mikron.test.diff_t_tuple.cljs$lang$var);
});})(t_tuple_2178,dataset1262_2179))
;
mikron.test.diff_t_tuple.cljs$lang$test = ((function (t_tuple_2178,dataset1262_2179){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_tuple_2178,dataset1262_2179);
});})(t_tuple_2178,dataset1262_2179))
;

mikron.test.diff_t_tuple.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_tuple;},new cljs.core.Symbol("mikron.test","diff-t-tuple","mikron.test/diff-t-tuple",(-1315628654),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-tuple","diff-t-tuple",(248281004),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_tuple)?mikron.test.diff_t_tuple.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_tuple = ((function (t_tuple_2178,dataset1262_2179){
return (function mikron$test$valid_QMARK__t_tuple(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_tuple.cljs$lang$var);
});})(t_tuple_2178,dataset1262_2179))
;
mikron.test.valid_QMARK__t_tuple.cljs$lang$test = ((function (t_tuple_2178,dataset1262_2179){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_tuple_2178,dataset1262_2179);
});})(t_tuple_2178,dataset1262_2179))
;

mikron.test.valid_QMARK__t_tuple.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_tuple;},new cljs.core.Symbol("mikron.test","valid?-t-tuple","mikron.test/valid?-t-tuple",(-701573332),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-tuple","valid?-t-tuple",(1472675278),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_tuple)?mikron.test.valid_QMARK__t_tuple.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_tuple = ((function (t_tuple_2178,dataset1262_2179){
return (function mikron$test$interp_t_tuple(){
return cljs.test.test_var.call(null,mikron.test.interp_t_tuple.cljs$lang$var);
});})(t_tuple_2178,dataset1262_2179))
;
mikron.test.interp_t_tuple.cljs$lang$test = ((function (t_tuple_2178,dataset1262_2179){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_tuple_2178,dataset1262_2179);
});})(t_tuple_2178,dataset1262_2179))
;

mikron.test.interp_t_tuple.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_tuple;},new cljs.core.Symbol("mikron.test","interp-t-tuple","mikron.test/interp-t-tuple",(-398506614),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-tuple","interp-t-tuple",(1771463592),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_tuple)?mikron.test.interp_t_tuple.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_wrapped_2190 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1563){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1563))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return (mikron.buffer._QMARK_int.call(null,buffer1563) - (1));
}
}),(function (value1564){
var value_SINGLEQUOTE_1565 = (function (){try{return (value1564 + (1));
}catch (e1588){if((e1588 instanceof Object)){
var e__4__auto__ = e1588;
return new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662));
} else {
throw e1588;

}
}})();
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662)),value_SINGLEQUOTE_1565)) && ((cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_1565)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1565) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1565) < (2147483648))));
}),(function (value_11567,value_21568){
return value_21568;
}),(function (){
return ((function (){var r1569 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1569 * (2147483648)) + (((1) - r1569) * (-2147483648)))));
})() - (1));
}),(function (buffer1570){
return (mikron.buffer._QMARK_int.call(null,buffer1570) - (1));
}),(function (value_11572,value_21573,prefer_first_QMARK_1574,time_factor1575){
var value_1_SINGLEQUOTE_1576 = (value_11572 + (1));
var value_2_SINGLEQUOTE_1577 = (value_21573 + (1));
return (mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_1_SINGLEQUOTE_1576,value_2_SINGLEQUOTE_1577,time_factor1575)) - (1));
}),(function (value1578,buffer1579){
var value_dnil_QMARK_1580 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1578);
mikron.buffer._BANG_boolean.call(null,buffer1579,value_dnil_QMARK_1580);

if(value_dnil_QMARK_1580){
return null;
} else {
var value_SINGLEQUOTE_1581 = (value1578 + (1));
return mikron.buffer._BANG_int.call(null,buffer1579,value_SINGLEQUOTE_1581);
}
}),(function (value1582,buffer1583){
var value_SINGLEQUOTE_1584 = (value1582 + (1));
return mikron.buffer._BANG_int.call(null,buffer1583,value_SINGLEQUOTE_1584);
}),(function (value_11586,value_21587){
return value_21587;
})]),null,null,null));
})();
var dataset1262_2191 = cljs.core.repeatedly.call(null,(100),((function (t_wrapped_2190){
return (function (){
return mikron.core.gen.call(null,t_wrapped_2190);
});})(t_wrapped_2190))
);
mikron.test.pack_t_wrapped = ((function (t_wrapped_2190,dataset1262_2191){
return (function mikron$test$pack_t_wrapped(){
return cljs.test.test_var.call(null,mikron.test.pack_t_wrapped.cljs$lang$var);
});})(t_wrapped_2190,dataset1262_2191))
;
mikron.test.pack_t_wrapped.cljs$lang$test = ((function (t_wrapped_2190,dataset1262_2191){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_wrapped_2190,dataset1262_2191);
});})(t_wrapped_2190,dataset1262_2191))
;

mikron.test.pack_t_wrapped.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_wrapped;},new cljs.core.Symbol("mikron.test","pack-t-wrapped","mikron.test/pack-t-wrapped",(-1002422482),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-wrapped","pack-t-wrapped",(1161385224),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_wrapped)?mikron.test.pack_t_wrapped.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_wrapped = ((function (t_wrapped_2190,dataset1262_2191){
return (function mikron$test$diff_t_wrapped(){
return cljs.test.test_var.call(null,mikron.test.diff_t_wrapped.cljs$lang$var);
});})(t_wrapped_2190,dataset1262_2191))
;
mikron.test.diff_t_wrapped.cljs$lang$test = ((function (t_wrapped_2190,dataset1262_2191){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_wrapped_2190,dataset1262_2191);
});})(t_wrapped_2190,dataset1262_2191))
;

mikron.test.diff_t_wrapped.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_wrapped;},new cljs.core.Symbol("mikron.test","diff-t-wrapped","mikron.test/diff-t-wrapped",(1459291192),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-wrapped","diff-t-wrapped",(-699147750),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_wrapped)?mikron.test.diff_t_wrapped.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_wrapped = ((function (t_wrapped_2190,dataset1262_2191){
return (function mikron$test$valid_QMARK__t_wrapped(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_wrapped.cljs$lang$var);
});})(t_wrapped_2190,dataset1262_2191))
;
mikron.test.valid_QMARK__t_wrapped.cljs$lang$test = ((function (t_wrapped_2190,dataset1262_2191){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_wrapped_2190,dataset1262_2191);
});})(t_wrapped_2190,dataset1262_2191))
;

mikron.test.valid_QMARK__t_wrapped.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_wrapped;},new cljs.core.Symbol("mikron.test","valid?-t-wrapped","mikron.test/valid?-t-wrapped",(-1114343924),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-wrapped","valid?-t-wrapped",(976441586),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_wrapped)?mikron.test.valid_QMARK__t_wrapped.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_wrapped = ((function (t_wrapped_2190,dataset1262_2191){
return (function mikron$test$interp_t_wrapped(){
return cljs.test.test_var.call(null,mikron.test.interp_t_wrapped.cljs$lang$var);
});})(t_wrapped_2190,dataset1262_2191))
;
mikron.test.interp_t_wrapped.cljs$lang$test = ((function (t_wrapped_2190,dataset1262_2191){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_wrapped_2190,dataset1262_2191);
});})(t_wrapped_2190,dataset1262_2191))
;

mikron.test.interp_t_wrapped.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_wrapped;},new cljs.core.Symbol("mikron.test","interp-t-wrapped","mikron.test/interp-t-wrapped",(-1899860150),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-wrapped","interp-t-wrapped",(254494060),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_wrapped)?mikron.test.interp_t_wrapped.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t__LT__sorted_set_2192 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1589){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1589))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1615 = cljs.core.sorted_set_by.call(null,cljs.core._LT_);
var n1616 = mikron.buffer._QMARK_varint.call(null,buffer1589);
var n1616__$1 = cljs.core.long$.call(null,n1616);
var coll1615__$1 = coll1615;
while(true){
if(((0) === n1616__$1)){
return coll1615__$1;
} else {
var G__2194 = (n1616__$1 - (1));
var G__2195 = cljs.core.conj.call(null,coll1615__$1,(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1589))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_short.call(null,buffer1589)));
n1616__$1 = G__2194;
coll1615__$1 = G__2195;
continue;
}
break;
}
}
}),(function (value1590){
return (cljs.core.set_QMARK_.call(null,value1590)) && (cljs.core.every_QMARK_.call(null,(function (value_SINGLEQUOTE_1591){
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_1591)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1591) >= (-32768))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1591) < (32768)));
}),value1590));
}),(function (value_11593,value_21594){
return value_21594;
}),(function (){
var coll1617 = cljs.core.sorted_set_by.call(null,cljs.core._LT_);
var n1618 = (4);
var n1618__$1 = cljs.core.long$.call(null,n1618);
var coll1617__$1 = coll1617;
while(true){
if(((0) === n1618__$1)){
return coll1617__$1;
} else {
var G__2196 = (n1618__$1 - (1));
var G__2197 = cljs.core.conj.call(null,coll1617__$1,(function (){var r1595 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1595 * (32768)) + (((1) - r1595) * (-32768)))));
})());
n1618__$1 = G__2196;
coll1617__$1 = G__2197;
continue;
}
break;
}
}),(function (buffer1596){
var coll1619 = cljs.core.sorted_set_by.call(null,cljs.core._LT_);
var n1620 = mikron.buffer._QMARK_varint.call(null,buffer1596);
var n1620__$1 = cljs.core.long$.call(null,n1620);
var coll1619__$1 = coll1619;
while(true){
if(((0) === n1620__$1)){
return coll1619__$1;
} else {
var G__2198 = (n1620__$1 - (1));
var G__2199 = cljs.core.conj.call(null,coll1619__$1,mikron.buffer._QMARK_short.call(null,buffer1596));
n1620__$1 = G__2198;
coll1619__$1 = G__2199;
continue;
}
break;
}
}),(function (value_11598,value_21599,prefer_first_QMARK_1600,time_factor1601){
if(cljs.core.truth_(prefer_first_QMARK_1600)){
return value_11598;
} else {
return value_21599;
}
}),(function (value1602,buffer1603){
var value_dnil_QMARK_1604 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1602);
mikron.buffer._BANG_boolean.call(null,buffer1603,value_dnil_QMARK_1604);

if(value_dnil_QMARK_1604){
return null;
} else {
var length1605 = cljs.core.count.call(null,value1602);
mikron.buffer._BANG_varint.call(null,buffer1603,length1605);

return cljs.core.run_BANG_.call(null,((function (length1605,value_dnil_QMARK_1604){
return (function (value_SINGLEQUOTE_1606){
var value_dnil_QMARK_1607 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1606);
mikron.buffer._BANG_boolean.call(null,buffer1603,value_dnil_QMARK_1607);

if(value_dnil_QMARK_1607){
return null;
} else {
return mikron.buffer._BANG_short.call(null,buffer1603,value_SINGLEQUOTE_1606);
}
});})(length1605,value_dnil_QMARK_1604))
,value1602);
}
}),(function (value1608,buffer1609){
var length1610 = cljs.core.count.call(null,value1608);
mikron.buffer._BANG_varint.call(null,buffer1609,length1610);

return cljs.core.run_BANG_.call(null,((function (length1610){
return (function (value_SINGLEQUOTE_1611){
return mikron.buffer._BANG_short.call(null,buffer1609,value_SINGLEQUOTE_1611);
});})(length1610))
,value1608);
}),(function (value_11613,value_21614){
return value_21614;
})]),null,null,null));
})();
var dataset1262_2193 = cljs.core.repeatedly.call(null,(100),((function (t__LT__sorted_set_2192){
return (function (){
return mikron.core.gen.call(null,t__LT__sorted_set_2192);
});})(t__LT__sorted_set_2192))
);
mikron.test.pack_t__LT__sorted_set = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function mikron$test$pack_t__LT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.pack_t__LT__sorted_set.cljs$lang$var);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;
mikron.test.pack_t__LT__sorted_set.cljs$lang$test = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t__LT__sorted_set_2192,dataset1262_2193);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;

mikron.test.pack_t__LT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t__LT__sorted_set;},new cljs.core.Symbol("mikron.test","pack-t-<-sorted-set","mikron.test/pack-t-<-sorted-set",(-1328566817),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-<-sorted-set","pack-t-<-sorted-set",(929581825),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t__LT__sorted_set)?mikron.test.pack_t__LT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t__LT__sorted_set = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function mikron$test$diff_t__LT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.diff_t__LT__sorted_set.cljs$lang$var);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;
mikron.test.diff_t__LT__sorted_set.cljs$lang$test = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t__LT__sorted_set_2192,dataset1262_2193);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;

mikron.test.diff_t__LT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t__LT__sorted_set;},new cljs.core.Symbol("mikron.test","diff-t-<-sorted-set","mikron.test/diff-t-<-sorted-set",(-1895155567),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-<-sorted-set","diff-t-<-sorted-set",(248578739),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t__LT__sorted_set)?mikron.test.diff_t__LT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t__LT__sorted_set = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function mikron$test$valid_QMARK__t__LT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t__LT__sorted_set.cljs$lang$var);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;
mikron.test.valid_QMARK__t__LT__sorted_set.cljs$lang$test = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t__LT__sorted_set_2192,dataset1262_2193);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;

mikron.test.valid_QMARK__t__LT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t__LT__sorted_set;},new cljs.core.Symbol("mikron.test","valid?-t-<-sorted-set","mikron.test/valid?-t-<-sorted-set",(318531489),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-<-sorted-set","valid?-t-<-sorted-set",(-1823110777),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t__LT__sorted_set)?mikron.test.valid_QMARK__t__LT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t__LT__sorted_set = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function mikron$test$interp_t__LT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.interp_t__LT__sorted_set.cljs$lang$var);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;
mikron.test.interp_t__LT__sorted_set.cljs$lang$test = ((function (t__LT__sorted_set_2192,dataset1262_2193){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t__LT__sorted_set_2192,dataset1262_2193);
});})(t__LT__sorted_set_2192,dataset1262_2193))
;

mikron.test.interp_t__LT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t__LT__sorted_set;},new cljs.core.Symbol("mikron.test","interp-t-<-sorted-set","mikron.test/interp-t-<-sorted-set",(2034479419),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-<-sorted-set","interp-t-<-sorted-set",(-106369259),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t__LT__sorted_set)?mikron.test.interp_t__LT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_symbol_2200 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1621){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1621))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return cljs.core.symbol.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1621)));
}
}),(function (value1622){
return (value1622 instanceof cljs.core.Symbol);
}),(function (value_11624,value_21625){
return value_21625;
}),(function (){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var coll1648 = cljs.core.PersistentVector.EMPTY;
var n1649 = (4);
var n1649__$1 = cljs.core.long$.call(null,n1649);
var coll1648__$1 = cljs.core.transient$.call(null,coll1648);
while(true){
if(((0) === n1649__$1)){
return cljs.core.persistent_BANG_.call(null,coll1648__$1);
} else {
var G__2202 = (n1649__$1 - (1));
var G__2203 = cljs.core.conj_BANG_.call(null,coll1648__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1649__$1 = G__2202;
coll1648__$1 = G__2203;
continue;
}
break;
}
})()));
}),(function (buffer1626){
return cljs.core.symbol.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1626)));
}),(function (value_11628,value_21629,prefer_first_QMARK_1630,time_factor1631){
var value_1_SINGLEQUOTE_1632 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_11628)].join('');
var value_2_SINGLEQUOTE_1633 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_21629)].join('');
return cljs.core.symbol.call(null,(function (){var value_1_SINGLEQUOTE_1634 = mikron.util.schema.string__GT_binary.call(null,value_1_SINGLEQUOTE_1632);
var value_2_SINGLEQUOTE_1635 = mikron.util.schema.string__GT_binary.call(null,value_2_SINGLEQUOTE_1633);
return mikron.util.schema.binary__GT_string.call(null,(cljs.core.truth_(prefer_first_QMARK_1630)?value_1_SINGLEQUOTE_1634:value_2_SINGLEQUOTE_1635));
})());
}),(function (value1636,buffer1637){
var value_dnil_QMARK_1638 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1636);
mikron.buffer._BANG_boolean.call(null,buffer1637,value_dnil_QMARK_1638);

if(value_dnil_QMARK_1638){
return null;
} else {
var value_SINGLEQUOTE_1639 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value1636)].join('');
var value_SINGLEQUOTE_1640 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1639);
return mikron.buffer._BANG_binary.call(null,buffer1637,value_SINGLEQUOTE_1640);
}
}),(function (value1641,buffer1642){
var value_SINGLEQUOTE_1643 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value1641)].join('');
var value_SINGLEQUOTE_1644 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1643);
return mikron.buffer._BANG_binary.call(null,buffer1642,value_SINGLEQUOTE_1644);
}),(function (value_11646,value_21647){
return value_21647;
})]),null,null,null));
})();
var dataset1262_2201 = cljs.core.repeatedly.call(null,(100),((function (t_symbol_2200){
return (function (){
return mikron.core.gen.call(null,t_symbol_2200);
});})(t_symbol_2200))
);
mikron.test.pack_t_symbol = ((function (t_symbol_2200,dataset1262_2201){
return (function mikron$test$pack_t_symbol(){
return cljs.test.test_var.call(null,mikron.test.pack_t_symbol.cljs$lang$var);
});})(t_symbol_2200,dataset1262_2201))
;
mikron.test.pack_t_symbol.cljs$lang$test = ((function (t_symbol_2200,dataset1262_2201){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_symbol_2200,dataset1262_2201);
});})(t_symbol_2200,dataset1262_2201))
;

mikron.test.pack_t_symbol.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_symbol;},new cljs.core.Symbol("mikron.test","pack-t-symbol","mikron.test/pack-t-symbol",(81335494),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-symbol","pack-t-symbol",(-2072612124),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_symbol)?mikron.test.pack_t_symbol.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_symbol = ((function (t_symbol_2200,dataset1262_2201){
return (function mikron$test$diff_t_symbol(){
return cljs.test.test_var.call(null,mikron.test.diff_t_symbol.cljs$lang$var);
});})(t_symbol_2200,dataset1262_2201))
;
mikron.test.diff_t_symbol.cljs$lang$test = ((function (t_symbol_2200,dataset1262_2201){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_symbol_2200,dataset1262_2201);
});})(t_symbol_2200,dataset1262_2201))
;

mikron.test.diff_t_symbol.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_symbol;},new cljs.core.Symbol("mikron.test","diff-t-symbol","mikron.test/diff-t-symbol",(878252289),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-symbol","diff-t-symbol",(-1291829277),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_symbol)?mikron.test.diff_t_symbol.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_symbol = ((function (t_symbol_2200,dataset1262_2201){
return (function mikron$test$valid_QMARK__t_symbol(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_symbol.cljs$lang$var);
});})(t_symbol_2200,dataset1262_2201))
;
mikron.test.valid_QMARK__t_symbol.cljs$lang$test = ((function (t_symbol_2200,dataset1262_2201){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_symbol_2200,dataset1262_2201);
});})(t_symbol_2200,dataset1262_2201))
;

mikron.test.valid_QMARK__t_symbol.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_symbol;},new cljs.core.Symbol("mikron.test","valid?-t-symbol","mikron.test/valid?-t-symbol",(-629175824),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-symbol","valid?-t-symbol",(1528260494),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_symbol)?mikron.test.valid_QMARK__t_symbol.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_symbol = ((function (t_symbol_2200,dataset1262_2201){
return (function mikron$test$interp_t_symbol(){
return cljs.test.test_var.call(null,mikron.test.interp_t_symbol.cljs$lang$var);
});})(t_symbol_2200,dataset1262_2201))
;
mikron.test.interp_t_symbol.cljs$lang$test = ((function (t_symbol_2200,dataset1262_2201){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_symbol_2200,dataset1262_2201);
});})(t_symbol_2200,dataset1262_2201))
;

mikron.test.interp_t_symbol.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_symbol;},new cljs.core.Symbol("mikron.test","interp-t-symbol","mikron.test/interp-t-symbol",(1679782823),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-symbol","interp-t-symbol",(-457812415),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_symbol)?mikron.test.interp_t_symbol.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_vector_2204 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1650){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1650))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1685 = cljs.core.PersistentVector.EMPTY;
var n1686 = mikron.buffer._QMARK_varint.call(null,buffer1650);
var n1686__$1 = cljs.core.long$.call(null,n1686);
var coll1685__$1 = cljs.core.transient$.call(null,coll1685);
while(true){
if(((0) === n1686__$1)){
return cljs.core.persistent_BANG_.call(null,coll1685__$1);
} else {
var G__2206 = (n1686__$1 - (1));
var G__2207 = cljs.core.conj_BANG_.call(null,coll1685__$1,(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1650))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_int.call(null,buffer1650)));
n1686__$1 = G__2206;
coll1685__$1 = G__2207;
continue;
}
break;
}
}
}),(function (value1651){
var and__20483__auto__ = cljs.core.vector_QMARK_.call(null,value1651);
if(and__20483__auto__){
return mikron.util.coll.every_QMARK_.call(null,((function (and__20483__auto__){
return (function (value_SINGLEQUOTE_1652){
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_1652)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1652) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1652) < (2147483648)));
});})(and__20483__auto__))
,value1651);
} else {
return and__20483__auto__;
}
}),(function (value_11654,value_21655){
return value_21655;
}),(function (){
var coll1687 = cljs.core.PersistentVector.EMPTY;
var n1688 = (4);
var n1688__$1 = cljs.core.long$.call(null,n1688);
var coll1687__$1 = cljs.core.transient$.call(null,coll1687);
while(true){
if(((0) === n1688__$1)){
return cljs.core.persistent_BANG_.call(null,coll1687__$1);
} else {
var G__2208 = (n1688__$1 - (1));
var G__2209 = cljs.core.conj_BANG_.call(null,coll1687__$1,(function (){var r1656 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1656 * (2147483648)) + (((1) - r1656) * (-2147483648)))));
})());
n1688__$1 = G__2208;
coll1687__$1 = G__2209;
continue;
}
break;
}
}),(function (buffer1657){
var coll1689 = cljs.core.PersistentVector.EMPTY;
var n1690 = mikron.buffer._QMARK_varint.call(null,buffer1657);
var n1690__$1 = cljs.core.long$.call(null,n1690);
var coll1689__$1 = cljs.core.transient$.call(null,coll1689);
while(true){
if(((0) === n1690__$1)){
return cljs.core.persistent_BANG_.call(null,coll1689__$1);
} else {
var G__2210 = (n1690__$1 - (1));
var G__2211 = cljs.core.conj_BANG_.call(null,coll1689__$1,mikron.buffer._QMARK_int.call(null,buffer1657));
n1690__$1 = G__2210;
coll1689__$1 = G__2211;
continue;
}
break;
}
}),(function (value_11659,value_21660,prefer_first_QMARK_1661,time_factor1662){
if(cljs.core.truth_(prefer_first_QMARK_1661)){
return value_11659;
} else {
return value_21660;
}
}),(function (value1670,buffer1671){
var value_dnil_QMARK_1672 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1670);
mikron.buffer._BANG_boolean.call(null,buffer1671,value_dnil_QMARK_1672);

if(value_dnil_QMARK_1672){
return null;
} else {
var length1673 = mikron.util.coll.count.call(null,value1670);
mikron.buffer._BANG_varint.call(null,buffer1671,length1673);

var n__25765__auto__ = length1673;
var index1675 = (0);
while(true){
if((index1675 < n__25765__auto__)){
var value_SINGLEQUOTE_1674_2212 = mikron.util.coll.nth.call(null,value1670,index1675);
var value_dnil_QMARK_1676_2213 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1674_2212);
mikron.buffer._BANG_boolean.call(null,buffer1671,value_dnil_QMARK_1676_2213);

if(value_dnil_QMARK_1676_2213){
} else {
mikron.buffer._BANG_int.call(null,buffer1671,value_SINGLEQUOTE_1674_2212);
}

var G__2214 = (index1675 + (1));
index1675 = G__2214;
continue;
} else {
return null;
}
break;
}
}
}),(function (value1677,buffer1678){
var length1679 = mikron.util.coll.count.call(null,value1677);
mikron.buffer._BANG_varint.call(null,buffer1678,length1679);

var n__25765__auto__ = length1679;
var index1681 = (0);
while(true){
if((index1681 < n__25765__auto__)){
var value_SINGLEQUOTE_1680_2215 = mikron.util.coll.nth.call(null,value1677,index1681);
mikron.buffer._BANG_int.call(null,buffer1678,value_SINGLEQUOTE_1680_2215);

var G__2216 = (index1681 + (1));
index1681 = G__2216;
continue;
} else {
return null;
}
break;
}
}),(function (value_11683,value_21684){
return value_21684;
})]),null,null,null));
})();
var dataset1262_2205 = cljs.core.repeatedly.call(null,(100),((function (t_vector_2204){
return (function (){
return mikron.core.gen.call(null,t_vector_2204);
});})(t_vector_2204))
);
mikron.test.pack_t_vector = ((function (t_vector_2204,dataset1262_2205){
return (function mikron$test$pack_t_vector(){
return cljs.test.test_var.call(null,mikron.test.pack_t_vector.cljs$lang$var);
});})(t_vector_2204,dataset1262_2205))
;
mikron.test.pack_t_vector.cljs$lang$test = ((function (t_vector_2204,dataset1262_2205){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_vector_2204,dataset1262_2205);
});})(t_vector_2204,dataset1262_2205))
;

mikron.test.pack_t_vector.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_vector;},new cljs.core.Symbol("mikron.test","pack-t-vector","mikron.test/pack-t-vector",(1033852063),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-vector","pack-t-vector",(1115173569),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_vector)?mikron.test.pack_t_vector.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_vector = ((function (t_vector_2204,dataset1262_2205){
return (function mikron$test$diff_t_vector(){
return cljs.test.test_var.call(null,mikron.test.diff_t_vector.cljs$lang$var);
});})(t_vector_2204,dataset1262_2205))
;
mikron.test.diff_t_vector.cljs$lang$test = ((function (t_vector_2204,dataset1262_2205){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_vector_2204,dataset1262_2205);
});})(t_vector_2204,dataset1262_2205))
;

mikron.test.diff_t_vector.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_vector;},new cljs.core.Symbol("mikron.test","diff-t-vector","mikron.test/diff-t-vector",(-1729016796),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-vector","diff-t-vector",(408446666),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_vector)?mikron.test.diff_t_vector.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_vector = ((function (t_vector_2204,dataset1262_2205){
return (function mikron$test$valid_QMARK__t_vector(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_vector.cljs$lang$var);
});})(t_vector_2204,dataset1262_2205))
;
mikron.test.valid_QMARK__t_vector.cljs$lang$test = ((function (t_vector_2204,dataset1262_2205){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_vector_2204,dataset1262_2205);
});})(t_vector_2204,dataset1262_2205))
;

mikron.test.valid_QMARK__t_vector.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_vector;},new cljs.core.Symbol("mikron.test","valid?-t-vector","mikron.test/valid?-t-vector",(-1730912218),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-vector","valid?-t-vector",(426544840),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_vector)?mikron.test.valid_QMARK__t_vector.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_vector = ((function (t_vector_2204,dataset1262_2205){
return (function mikron$test$interp_t_vector(){
return cljs.test.test_var.call(null,mikron.test.interp_t_vector.cljs$lang$var);
});})(t_vector_2204,dataset1262_2205))
;
mikron.test.interp_t_vector.cljs$lang$test = ((function (t_vector_2204,dataset1262_2205){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_vector_2204,dataset1262_2205);
});})(t_vector_2204,dataset1262_2205))
;

mikron.test.interp_t_vector.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_vector;},new cljs.core.Symbol("mikron.test","interp-t-vector","mikron.test/interp-t-vector",(2039554439),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-vector","interp-t-vector",(-84407323),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_vector)?mikron.test.interp_t_vector.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_map_2217 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1691){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1691))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1731 = cljs.core.PersistentArrayMap.EMPTY;
var n1732 = mikron.buffer._QMARK_varint.call(null,buffer1691);
var n1732__$1 = cljs.core.long$.call(null,n1732);
var coll1731__$1 = cljs.core.transient$.call(null,coll1731);
while(true){
if(((0) === n1732__$1)){
return cljs.core.persistent_BANG_.call(null,coll1731__$1);
} else {
var G__2219 = (n1732__$1 - (1));
var G__2220 = cljs.core.assoc_BANG_.call(null,coll1731__$1,mikron.buffer._QMARK_byte.call(null,buffer1691),(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1691))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1691))));
n1732__$1 = G__2219;
coll1731__$1 = G__2220;
continue;
}
break;
}
}
}),(function (value1692){
return (cljs.core.map_QMARK_.call(null,value1692)) && (cljs.core.every_QMARK_.call(null,(function (entry_SINGLEQUOTE_1693){
var key_SINGLEQUOTE_1694 = cljs.core.key.call(null,entry_SINGLEQUOTE_1693);
var value_SINGLEQUOTE_1695 = cljs.core.val.call(null,entry_SINGLEQUOTE_1693);
return ((cljs.core.integer_QMARK_.call(null,key_SINGLEQUOTE_1694)) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1694) >= (-128))) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1694) < (128)))) && (typeof value_SINGLEQUOTE_1695 === 'string');
}),value1692));
}),(function (value_11697,value_21698){
return value_21698;
}),(function (){
var coll1733 = cljs.core.PersistentArrayMap.EMPTY;
var n1734 = (4);
var n1734__$1 = cljs.core.long$.call(null,n1734);
var coll1733__$1 = cljs.core.transient$.call(null,coll1733);
while(true){
if(((0) === n1734__$1)){
return cljs.core.persistent_BANG_.call(null,coll1733__$1);
} else {
var G__2221 = (n1734__$1 - (1));
var G__2222 = cljs.core.assoc_BANG_.call(null,coll1733__$1,(function (){var r1699 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1699 * (128)) + (((1) - r1699) * (-128)))));
})(),cljs.core.apply.call(null,cljs.core.str,(function (){var coll1735 = cljs.core.PersistentVector.EMPTY;
var n1736 = (4);
var n1736__$1 = cljs.core.long$.call(null,n1736);
var coll1735__$1 = cljs.core.transient$.call(null,coll1735);
while(true){
if(((0) === n1736__$1)){
return cljs.core.persistent_BANG_.call(null,coll1735__$1);
} else {
var G__2223 = (n1736__$1 - (1));
var G__2224 = cljs.core.conj_BANG_.call(null,coll1735__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1736__$1 = G__2223;
coll1735__$1 = G__2224;
continue;
}
break;
}
})()));
n1734__$1 = G__2221;
coll1733__$1 = G__2222;
continue;
}
break;
}
}),(function (buffer1700){
var coll1737 = cljs.core.PersistentArrayMap.EMPTY;
var n1738 = mikron.buffer._QMARK_varint.call(null,buffer1700);
var n1738__$1 = cljs.core.long$.call(null,n1738);
var coll1737__$1 = cljs.core.transient$.call(null,coll1737);
while(true){
if(((0) === n1738__$1)){
return cljs.core.persistent_BANG_.call(null,coll1737__$1);
} else {
var G__2225 = (n1738__$1 - (1));
var G__2226 = cljs.core.assoc_BANG_.call(null,coll1737__$1,mikron.buffer._QMARK_byte.call(null,buffer1700),mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1700)));
n1738__$1 = G__2225;
coll1737__$1 = G__2226;
continue;
}
break;
}
}),(function (value_11702,value_21703,prefer_first_QMARK_1704,time_factor1705){
if(cljs.core.truth_(prefer_first_QMARK_1704)){
return value_11702;
} else {
return value_21703;
}
}),(function (value1712,buffer1713){
var value_dnil_QMARK_1714 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1712);
mikron.buffer._BANG_boolean.call(null,buffer1713,value_dnil_QMARK_1714);

if(value_dnil_QMARK_1714){
return null;
} else {
var length1715 = mikron.util.coll.count.call(null,value1712);
mikron.buffer._BANG_varint.call(null,buffer1713,length1715);

return cljs.core.run_BANG_.call(null,((function (length1715,value_dnil_QMARK_1714){
return (function (entry_SINGLEQUOTE_1716){
var key_SINGLEQUOTE_1717 = cljs.core.key.call(null,entry_SINGLEQUOTE_1716);
var value_SINGLEQUOTE_1718 = cljs.core.val.call(null,entry_SINGLEQUOTE_1716);
mikron.buffer._BANG_byte.call(null,buffer1713,key_SINGLEQUOTE_1717);

var value_dnil_QMARK_1719 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1718);
mikron.buffer._BANG_boolean.call(null,buffer1713,value_dnil_QMARK_1719);

if(value_dnil_QMARK_1719){
return null;
} else {
var value_SINGLEQUOTE_1720 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1718);
return mikron.buffer._BANG_binary.call(null,buffer1713,value_SINGLEQUOTE_1720);
}
});})(length1715,value_dnil_QMARK_1714))
,value1712);
}
}),(function (value1721,buffer1722){
var length1723 = mikron.util.coll.count.call(null,value1721);
mikron.buffer._BANG_varint.call(null,buffer1722,length1723);

return cljs.core.run_BANG_.call(null,((function (length1723){
return (function (entry_SINGLEQUOTE_1724){
var key_SINGLEQUOTE_1725 = cljs.core.key.call(null,entry_SINGLEQUOTE_1724);
var value_SINGLEQUOTE_1726 = cljs.core.val.call(null,entry_SINGLEQUOTE_1724);
mikron.buffer._BANG_byte.call(null,buffer1722,key_SINGLEQUOTE_1725);

var value_SINGLEQUOTE_1727 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1726);
return mikron.buffer._BANG_binary.call(null,buffer1722,value_SINGLEQUOTE_1727);
});})(length1723))
,value1721);
}),(function (value_11729,value_21730){
return value_21730;
})]),null,null,null));
})();
var dataset1262_2218 = cljs.core.repeatedly.call(null,(100),((function (t_map_2217){
return (function (){
return mikron.core.gen.call(null,t_map_2217);
});})(t_map_2217))
);
mikron.test.pack_t_map = ((function (t_map_2217,dataset1262_2218){
return (function mikron$test$pack_t_map(){
return cljs.test.test_var.call(null,mikron.test.pack_t_map.cljs$lang$var);
});})(t_map_2217,dataset1262_2218))
;
mikron.test.pack_t_map.cljs$lang$test = ((function (t_map_2217,dataset1262_2218){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_map_2217,dataset1262_2218);
});})(t_map_2217,dataset1262_2218))
;

mikron.test.pack_t_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_map;},new cljs.core.Symbol("mikron.test","pack-t-map","mikron.test/pack-t-map",(-1408960907),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-map","pack-t-map",(754724243),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_map)?mikron.test.pack_t_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_map = ((function (t_map_2217,dataset1262_2218){
return (function mikron$test$diff_t_map(){
return cljs.test.test_var.call(null,mikron.test.diff_t_map.cljs$lang$var);
});})(t_map_2217,dataset1262_2218))
;
mikron.test.diff_t_map.cljs$lang$test = ((function (t_map_2217,dataset1262_2218){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_map_2217,dataset1262_2218);
});})(t_map_2217,dataset1262_2218))
;

mikron.test.diff_t_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_map;},new cljs.core.Symbol("mikron.test","diff-t-map","mikron.test/diff-t-map",(-133234033),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-map","diff-t-map",(2028349293),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_map)?mikron.test.diff_t_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_map = ((function (t_map_2217,dataset1262_2218){
return (function mikron$test$valid_QMARK__t_map(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_map.cljs$lang$var);
});})(t_map_2217,dataset1262_2218))
;
mikron.test.valid_QMARK__t_map.cljs$lang$test = ((function (t_map_2217,dataset1262_2218){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_map_2217,dataset1262_2218);
});})(t_map_2217,dataset1262_2218))
;

mikron.test.valid_QMARK__t_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_map;},new cljs.core.Symbol("mikron.test","valid?-t-map","mikron.test/valid?-t-map",(-435252672),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-map","valid?-t-map",(1733687394),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_map)?mikron.test.valid_QMARK__t_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_map = ((function (t_map_2217,dataset1262_2218){
return (function mikron$test$interp_t_map(){
return cljs.test.test_var.call(null,mikron.test.interp_t_map.cljs$lang$var);
});})(t_map_2217,dataset1262_2218))
;
mikron.test.interp_t_map.cljs$lang$test = ((function (t_map_2217,dataset1262_2218){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_map_2217,dataset1262_2218);
});})(t_map_2217,dataset1262_2218))
;

mikron.test.interp_t_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_map;},new cljs.core.Symbol("mikron.test","interp-t-map","mikron.test/interp-t-map",(-1486210535),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-map","interp-t-map",(604049467),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_map)?mikron.test.interp_t_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_double_2227 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1739){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1739))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_double.call(null,buffer1739);
}
}),(function (value1740){
return typeof value1740 === 'number';
}),(function (value_11742,value_21743){
return value_21743;
}),(function (){
return mikron.util.math.rand.call(null);
}),(function (buffer1744){
return mikron.buffer._QMARK_double.call(null,buffer1744);
}),(function (value_11746,value_21747,prefer_first_QMARK_1748,time_factor1749){
return mikron.util.math.interp.call(null,value_11746,value_21747,time_factor1749);
}),(function (value1750,buffer1751){
var value_dnil_QMARK_1752 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1750);
mikron.buffer._BANG_boolean.call(null,buffer1751,value_dnil_QMARK_1752);

if(value_dnil_QMARK_1752){
return null;
} else {
return mikron.buffer._BANG_double.call(null,buffer1751,value1750);
}
}),(function (value1753,buffer1754){
return mikron.buffer._BANG_double.call(null,buffer1754,value1753);
}),(function (value_11756,value_21757){
return value_21757;
})]),null,null,null));
})();
var dataset1262_2228 = cljs.core.repeatedly.call(null,(100),((function (t_double_2227){
return (function (){
return mikron.core.gen.call(null,t_double_2227);
});})(t_double_2227))
);
mikron.test.pack_t_double = ((function (t_double_2227,dataset1262_2228){
return (function mikron$test$pack_t_double(){
return cljs.test.test_var.call(null,mikron.test.pack_t_double.cljs$lang$var);
});})(t_double_2227,dataset1262_2228))
;
mikron.test.pack_t_double.cljs$lang$test = ((function (t_double_2227,dataset1262_2228){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_double_2227,dataset1262_2228);
});})(t_double_2227,dataset1262_2228))
;

mikron.test.pack_t_double.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_double;},new cljs.core.Symbol("mikron.test","pack-t-double","mikron.test/pack-t-double",(-1155472152),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-double","pack-t-double",(986156746),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_double)?mikron.test.pack_t_double.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_double = ((function (t_double_2227,dataset1262_2228){
return (function mikron$test$diff_t_double(){
return cljs.test.test_var.call(null,mikron.test.diff_t_double.cljs$lang$var);
});})(t_double_2227,dataset1262_2228))
;
mikron.test.diff_t_double.cljs$lang$test = ((function (t_double_2227,dataset1262_2228){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_double_2227,dataset1262_2228);
});})(t_double_2227,dataset1262_2228))
;

mikron.test.diff_t_double.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_double;},new cljs.core.Symbol("mikron.test","diff-t-double","mikron.test/diff-t-double",(194946873),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-double","diff-t-double",(-1964507685),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_double)?mikron.test.diff_t_double.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_double = ((function (t_double_2227,dataset1262_2228){
return (function mikron$test$valid_QMARK__t_double(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_double.cljs$lang$var);
});})(t_double_2227,dataset1262_2228))
;
mikron.test.valid_QMARK__t_double.cljs$lang$test = ((function (t_double_2227,dataset1262_2228){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_double_2227,dataset1262_2228);
});})(t_double_2227,dataset1262_2228))
;

mikron.test.valid_QMARK__t_double.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_double;},new cljs.core.Symbol("mikron.test","valid?-t-double","mikron.test/valid?-t-double",(-1958420507),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-double","valid?-t-double",(183316935),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_double)?mikron.test.valid_QMARK__t_double.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_double = ((function (t_double_2227,dataset1262_2228){
return (function mikron$test$interp_t_double(){
return cljs.test.test_var.call(null,mikron.test.interp_t_double.cljs$lang$var);
});})(t_double_2227,dataset1262_2228))
;
mikron.test.interp_t_double.cljs$lang$test = ((function (t_double_2227,dataset1262_2228){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_double_2227,dataset1262_2228);
});})(t_double_2227,dataset1262_2228))
;

mikron.test.interp_t_double.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_double;},new cljs.core.Symbol("mikron.test","interp-t-double","mikron.test/interp-t-double",(-503790381),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-double","interp-t-double",(1720951093),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_double)?mikron.test.interp_t_double.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_byte_2229 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1758){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1758))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_byte.call(null,buffer1758);
}
}),(function (value1759){
return (cljs.core.integer_QMARK_.call(null,value1759)) && ((cljs.core.unchecked_long.call(null,value1759) >= (-128))) && ((cljs.core.unchecked_long.call(null,value1759) < (128)));
}),(function (value_11761,value_21762){
return value_21762;
}),(function (){
var r1763 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1763 * (128)) + (((1) - r1763) * (-128)))));
}),(function (buffer1764){
return mikron.buffer._QMARK_byte.call(null,buffer1764);
}),(function (value_11766,value_21767,prefer_first_QMARK_1768,time_factor1769){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11766,value_21767,time_factor1769));
}),(function (value1770,buffer1771){
var value_dnil_QMARK_1772 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1770);
mikron.buffer._BANG_boolean.call(null,buffer1771,value_dnil_QMARK_1772);

if(value_dnil_QMARK_1772){
return null;
} else {
return mikron.buffer._BANG_byte.call(null,buffer1771,value1770);
}
}),(function (value1773,buffer1774){
return mikron.buffer._BANG_byte.call(null,buffer1774,value1773);
}),(function (value_11776,value_21777){
return value_21777;
})]),null,null,null));
})();
var dataset1262_2230 = cljs.core.repeatedly.call(null,(100),((function (t_byte_2229){
return (function (){
return mikron.core.gen.call(null,t_byte_2229);
});})(t_byte_2229))
);
mikron.test.pack_t_byte = ((function (t_byte_2229,dataset1262_2230){
return (function mikron$test$pack_t_byte(){
return cljs.test.test_var.call(null,mikron.test.pack_t_byte.cljs$lang$var);
});})(t_byte_2229,dataset1262_2230))
;
mikron.test.pack_t_byte.cljs$lang$test = ((function (t_byte_2229,dataset1262_2230){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_byte_2229,dataset1262_2230);
});})(t_byte_2229,dataset1262_2230))
;

mikron.test.pack_t_byte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_byte;},new cljs.core.Symbol("mikron.test","pack-t-byte","mikron.test/pack-t-byte",(3358137),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-byte","pack-t-byte",(-2015751269),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_byte)?mikron.test.pack_t_byte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_byte = ((function (t_byte_2229,dataset1262_2230){
return (function mikron$test$diff_t_byte(){
return cljs.test.test_var.call(null,mikron.test.diff_t_byte.cljs$lang$var);
});})(t_byte_2229,dataset1262_2230))
;
mikron.test.diff_t_byte.cljs$lang$test = ((function (t_byte_2229,dataset1262_2230){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_byte_2229,dataset1262_2230);
});})(t_byte_2229,dataset1262_2230))
;

mikron.test.diff_t_byte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_byte;},new cljs.core.Symbol("mikron.test","diff-t-byte","mikron.test/diff-t-byte",(-280823289),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-byte","diff-t-byte",(1814418469),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_byte)?mikron.test.diff_t_byte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_byte = ((function (t_byte_2229,dataset1262_2230){
return (function mikron$test$valid_QMARK__t_byte(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_byte.cljs$lang$var);
});})(t_byte_2229,dataset1262_2230))
;
mikron.test.valid_QMARK__t_byte.cljs$lang$test = ((function (t_byte_2229,dataset1262_2230){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_byte_2229,dataset1262_2230);
});})(t_byte_2229,dataset1262_2230))
;

mikron.test.valid_QMARK__t_byte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_byte;},new cljs.core.Symbol("mikron.test","valid?-t-byte","mikron.test/valid?-t-byte",(-521160006),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-byte","valid?-t-byte",(1615371612),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_byte)?mikron.test.valid_QMARK__t_byte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_byte = ((function (t_byte_2229,dataset1262_2230){
return (function mikron$test$interp_t_byte(){
return cljs.test.test_var.call(null,mikron.test.interp_t_byte.cljs$lang$var);
});})(t_byte_2229,dataset1262_2230))
;
mikron.test.interp_t_byte.cljs$lang$test = ((function (t_byte_2229,dataset1262_2230){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_byte_2229,dataset1262_2230);
});})(t_byte_2229,dataset1262_2230))
;

mikron.test.interp_t_byte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_byte;},new cljs.core.Symbol("mikron.test","interp-t-byte","mikron.test/interp-t-byte",(-151543117),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-byte","interp-t-byte",(2006940881),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_byte)?mikron.test.interp_t_byte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_list_2231 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1778){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1778))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1806 = cljs.core.PersistentVector.EMPTY;
var n1807 = mikron.buffer._QMARK_varint.call(null,buffer1778);
var n1807__$1 = cljs.core.long$.call(null,n1807);
var coll1806__$1 = cljs.core.transient$.call(null,coll1806);
while(true){
if(((0) === n1807__$1)){
return cljs.core.persistent_BANG_.call(null,coll1806__$1);
} else {
var G__2233 = (n1807__$1 - (1));
var G__2234 = cljs.core.conj_BANG_.call(null,coll1806__$1,(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1778))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_byte.call(null,buffer1778)));
n1807__$1 = G__2233;
coll1806__$1 = G__2234;
continue;
}
break;
}
}
}),(function (value1779){
return (cljs.core.sequential_QMARK_.call(null,value1779)) && (cljs.core.every_QMARK_.call(null,(function (value_SINGLEQUOTE_1780){
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_1780)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1780) >= (-128))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1780) < (128)));
}),value1779));
}),(function (value_11782,value_21783){
return value_21783;
}),(function (){
var coll1808 = cljs.core.PersistentVector.EMPTY;
var n1809 = (4);
var n1809__$1 = cljs.core.long$.call(null,n1809);
var coll1808__$1 = cljs.core.transient$.call(null,coll1808);
while(true){
if(((0) === n1809__$1)){
return cljs.core.persistent_BANG_.call(null,coll1808__$1);
} else {
var G__2235 = (n1809__$1 - (1));
var G__2236 = cljs.core.conj_BANG_.call(null,coll1808__$1,(function (){var r1784 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1784 * (128)) + (((1) - r1784) * (-128)))));
})());
n1809__$1 = G__2235;
coll1808__$1 = G__2236;
continue;
}
break;
}
}),(function (buffer1785){
var coll1810 = cljs.core.PersistentVector.EMPTY;
var n1811 = mikron.buffer._QMARK_varint.call(null,buffer1785);
var n1811__$1 = cljs.core.long$.call(null,n1811);
var coll1810__$1 = cljs.core.transient$.call(null,coll1810);
while(true){
if(((0) === n1811__$1)){
return cljs.core.persistent_BANG_.call(null,coll1810__$1);
} else {
var G__2237 = (n1811__$1 - (1));
var G__2238 = cljs.core.conj_BANG_.call(null,coll1810__$1,mikron.buffer._QMARK_byte.call(null,buffer1785));
n1811__$1 = G__2237;
coll1810__$1 = G__2238;
continue;
}
break;
}
}),(function (value_11787,value_21788,prefer_first_QMARK_1789,time_factor1790){
if(cljs.core.truth_(prefer_first_QMARK_1789)){
return value_11787;
} else {
return value_21788;
}
}),(function (value1793,buffer1794){
var value_dnil_QMARK_1795 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1793);
mikron.buffer._BANG_boolean.call(null,buffer1794,value_dnil_QMARK_1795);

if(value_dnil_QMARK_1795){
return null;
} else {
var length1796 = cljs.core.count.call(null,value1793);
mikron.buffer._BANG_varint.call(null,buffer1794,length1796);

return cljs.core.run_BANG_.call(null,((function (length1796,value_dnil_QMARK_1795){
return (function (value_SINGLEQUOTE_1797){
var value_dnil_QMARK_1798 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1797);
mikron.buffer._BANG_boolean.call(null,buffer1794,value_dnil_QMARK_1798);

if(value_dnil_QMARK_1798){
return null;
} else {
return mikron.buffer._BANG_byte.call(null,buffer1794,value_SINGLEQUOTE_1797);
}
});})(length1796,value_dnil_QMARK_1795))
,value1793);
}
}),(function (value1799,buffer1800){
var length1801 = cljs.core.count.call(null,value1799);
mikron.buffer._BANG_varint.call(null,buffer1800,length1801);

return cljs.core.run_BANG_.call(null,((function (length1801){
return (function (value_SINGLEQUOTE_1802){
return mikron.buffer._BANG_byte.call(null,buffer1800,value_SINGLEQUOTE_1802);
});})(length1801))
,value1799);
}),(function (value_11804,value_21805){
return value_21805;
})]),null,null,null));
})();
var dataset1262_2232 = cljs.core.repeatedly.call(null,(100),((function (t_list_2231){
return (function (){
return mikron.core.gen.call(null,t_list_2231);
});})(t_list_2231))
);
mikron.test.pack_t_list = ((function (t_list_2231,dataset1262_2232){
return (function mikron$test$pack_t_list(){
return cljs.test.test_var.call(null,mikron.test.pack_t_list.cljs$lang$var);
});})(t_list_2231,dataset1262_2232))
;
mikron.test.pack_t_list.cljs$lang$test = ((function (t_list_2231,dataset1262_2232){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_list_2231,dataset1262_2232);
});})(t_list_2231,dataset1262_2232))
;

mikron.test.pack_t_list.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_list;},new cljs.core.Symbol("mikron.test","pack-t-list","mikron.test/pack-t-list",(-521910925),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-list","pack-t-list",(1665867533),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_list)?mikron.test.pack_t_list.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_list = ((function (t_list_2231,dataset1262_2232){
return (function mikron$test$diff_t_list(){
return cljs.test.test_var.call(null,mikron.test.diff_t_list.cljs$lang$var);
});})(t_list_2231,dataset1262_2232))
;
mikron.test.diff_t_list.cljs$lang$test = ((function (t_list_2231,dataset1262_2232){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_list_2231,dataset1262_2232);
});})(t_list_2231,dataset1262_2232))
;

mikron.test.diff_t_list.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_list;},new cljs.core.Symbol("mikron.test","diff-t-list","mikron.test/diff-t-list",(145183662),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-list","diff-t-list",(-2005370804),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_list)?mikron.test.diff_t_list.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_list = ((function (t_list_2231,dataset1262_2232){
return (function mikron$test$valid_QMARK__t_list(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_list.cljs$lang$var);
});})(t_list_2231,dataset1262_2232))
;
mikron.test.valid_QMARK__t_list.cljs$lang$test = ((function (t_list_2231,dataset1262_2232){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_list_2231,dataset1262_2232);
});})(t_list_2231,dataset1262_2232))
;

mikron.test.valid_QMARK__t_list.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_list;},new cljs.core.Symbol("mikron.test","valid?-t-list","mikron.test/valid?-t-list",(1776977048),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-list","valid?-t-list",(-382488710),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_list)?mikron.test.valid_QMARK__t_list.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_list = ((function (t_list_2231,dataset1262_2232){
return (function mikron$test$interp_t_list(){
return cljs.test.test_var.call(null,mikron.test.interp_t_list.cljs$lang$var);
});})(t_list_2231,dataset1262_2232))
;
mikron.test.interp_t_list.cljs$lang$test = ((function (t_list_2231,dataset1262_2232){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_list_2231,dataset1262_2232);
});})(t_list_2231,dataset1262_2232))
;

mikron.test.interp_t_list.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_list;},new cljs.core.Symbol("mikron.test","interp-t-list","mikron.test/interp-t-list",(-1700810259),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-list","interp-t-list",(438736783),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_list)?mikron.test.interp_t_list.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_multi_2239 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1812){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1812))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var G__1838 = mikron.buffer._QMARK_byte.call(null,buffer1812);
switch (G__1838) {
case (0):
return mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1812));

break;
case (1):
return mikron.buffer._QMARK_int.call(null,buffer1812);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mikron.buffer._QMARK_byte.call(null,buffer1812))].join('')));

}
}
}),(function (value1813){
var G__1839 = (function (){try{return typeof value1813 === 'number';
}catch (e1840){if((e1840 instanceof Object)){
var e__4__auto__ = e1840;
return new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662));
} else {
throw e1840;

}
}})();
if(cljs.core._EQ_.call(null,true,G__1839)){
return (cljs.core.integer_QMARK_.call(null,value1813)) && ((cljs.core.unchecked_long.call(null,value1813) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value1813) < (2147483648)));
} else {
if(cljs.core._EQ_.call(null,false,G__1839)){
return typeof value1813 === 'string';
} else {
return false;

}
}
}),(function (value_11815,value_21816){
return value_21816;
}),(function (){
var G__1841 = mikron.util.math.rand_long.call(null,(2));
switch (G__1841) {
case (0):
var r1817 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1817 * (2147483648)) + (((1) - r1817) * (-2147483648)))));

break;
case (1):
return cljs.core.apply.call(null,cljs.core.str,(function (){var coll1842 = cljs.core.PersistentVector.EMPTY;
var n1843 = (4);
var n1843__$1 = cljs.core.long$.call(null,n1843);
var coll1842__$1 = cljs.core.transient$.call(null,coll1842);
while(true){
if(((0) === n1843__$1)){
return cljs.core.persistent_BANG_.call(null,coll1842__$1);
} else {
var G__2243 = (n1843__$1 - (1));
var G__2244 = cljs.core.conj_BANG_.call(null,coll1842__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1843__$1 = G__2243;
coll1842__$1 = G__2244;
continue;
}
break;
}
})());

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mikron.util.math.rand_long.call(null,(2)))].join('')));

}
}),(function (buffer1818){
var G__1844 = mikron.buffer._QMARK_byte.call(null,buffer1818);
switch (G__1844) {
case (0):
return mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1818));

break;
case (1):
return mikron.buffer._QMARK_int.call(null,buffer1818);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mikron.buffer._QMARK_byte.call(null,buffer1818))].join('')));

}
}),(function (value_11820,value_21821,prefer_first_QMARK_1822,time_factor1823){
var case_11824 = typeof value_11820 === 'number';
var case_21825 = typeof value_21821 === 'number';
if(!(cljs.core._EQ_.call(null,case_11824,case_21825))){
if(cljs.core.truth_(prefer_first_QMARK_1822)){
return value_11820;
} else {
return value_21821;
}
} else {
var G__1845 = case_11824;
if(cljs.core._EQ_.call(null,true,G__1845)){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11820,value_21821,time_factor1823));
} else {
if(cljs.core._EQ_.call(null,false,G__1845)){
var value_1_SINGLEQUOTE_1826 = mikron.util.schema.string__GT_binary.call(null,value_11820);
var value_2_SINGLEQUOTE_1827 = mikron.util.schema.string__GT_binary.call(null,value_21821);
return mikron.util.schema.binary__GT_string.call(null,(cljs.core.truth_(prefer_first_QMARK_1822)?value_1_SINGLEQUOTE_1826:value_2_SINGLEQUOTE_1827));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(case_11824)].join('')));

}
}
}
}),(function (value1828,buffer1829){
var value_dnil_QMARK_1830 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1828);
mikron.buffer._BANG_boolean.call(null,buffer1829,value_dnil_QMARK_1830);

if(value_dnil_QMARK_1830){
return null;
} else {
var G__1846 = typeof value1828 === 'number';
if(cljs.core._EQ_.call(null,false,G__1846)){
mikron.buffer._BANG_byte.call(null,buffer1829,(0));

var value_SINGLEQUOTE_1831 = mikron.util.schema.string__GT_binary.call(null,value1828);
return mikron.buffer._BANG_binary.call(null,buffer1829,value_SINGLEQUOTE_1831);
} else {
if(cljs.core._EQ_.call(null,true,G__1846)){
mikron.buffer._BANG_byte.call(null,buffer1829,(1));

return mikron.buffer._BANG_int.call(null,buffer1829,value1828);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof value1828 === 'number')].join('')));

}
}
}
}),(function (value1832,buffer1833){
var G__1847 = typeof value1832 === 'number';
if(cljs.core._EQ_.call(null,false,G__1847)){
mikron.buffer._BANG_byte.call(null,buffer1833,(0));

var value_SINGLEQUOTE_1834 = mikron.util.schema.string__GT_binary.call(null,value1832);
return mikron.buffer._BANG_binary.call(null,buffer1833,value_SINGLEQUOTE_1834);
} else {
if(cljs.core._EQ_.call(null,true,G__1847)){
mikron.buffer._BANG_byte.call(null,buffer1833,(1));

return mikron.buffer._BANG_int.call(null,buffer1833,value1832);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof value1832 === 'number')].join('')));

}
}
}),(function (value_11836,value_21837){
return value_21837;
})]),null,null,null));
})();
var dataset1262_2240 = cljs.core.repeatedly.call(null,(100),((function (t_multi_2239){
return (function (){
return mikron.core.gen.call(null,t_multi_2239);
});})(t_multi_2239))
);
mikron.test.pack_t_multi = ((function (t_multi_2239,dataset1262_2240){
return (function mikron$test$pack_t_multi(){
return cljs.test.test_var.call(null,mikron.test.pack_t_multi.cljs$lang$var);
});})(t_multi_2239,dataset1262_2240))
;
mikron.test.pack_t_multi.cljs$lang$test = ((function (t_multi_2239,dataset1262_2240){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_multi_2239,dataset1262_2240);
});})(t_multi_2239,dataset1262_2240))
;

mikron.test.pack_t_multi.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_multi;},new cljs.core.Symbol("mikron.test","pack-t-multi","mikron.test/pack-t-multi",(-1355261672),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-multi","pack-t-multi",(751903606),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_multi)?mikron.test.pack_t_multi.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_multi = ((function (t_multi_2239,dataset1262_2240){
return (function mikron$test$diff_t_multi(){
return cljs.test.test_var.call(null,mikron.test.diff_t_multi.cljs$lang$var);
});})(t_multi_2239,dataset1262_2240))
;
mikron.test.diff_t_multi.cljs$lang$test = ((function (t_multi_2239,dataset1262_2240){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_multi_2239,dataset1262_2240);
});})(t_multi_2239,dataset1262_2240))
;

mikron.test.diff_t_multi.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_multi;},new cljs.core.Symbol("mikron.test","diff-t-multi","mikron.test/diff-t-multi",(1921100393),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-multi","diff-t-multi",(-231059569),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_multi)?mikron.test.diff_t_multi.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_multi = ((function (t_multi_2239,dataset1262_2240){
return (function mikron$test$valid_QMARK__t_multi(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_multi.cljs$lang$var);
});})(t_multi_2239,dataset1262_2240))
;
mikron.test.valid_QMARK__t_multi.cljs$lang$test = ((function (t_multi_2239,dataset1262_2240){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_multi_2239,dataset1262_2240);
});})(t_multi_2239,dataset1262_2240))
;

mikron.test.valid_QMARK__t_multi.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_multi;},new cljs.core.Symbol("mikron.test","valid?-t-multi","mikron.test/valid?-t-multi",(1533528454),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-multi","valid?-t-multi",(-607186012),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_multi)?mikron.test.valid_QMARK__t_multi.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_multi = ((function (t_multi_2239,dataset1262_2240){
return (function mikron$test$interp_t_multi(){
return cljs.test.test_var.call(null,mikron.test.interp_t_multi.cljs$lang$var);
});})(t_multi_2239,dataset1262_2240))
;
mikron.test.interp_t_multi.cljs$lang$test = ((function (t_multi_2239,dataset1262_2240){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_multi_2239,dataset1262_2240);
});})(t_multi_2239,dataset1262_2240))
;

mikron.test.interp_t_multi.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_multi;},new cljs.core.Symbol("mikron.test","interp-t-multi","mikron.test/interp-t-multi",(1202992710),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-multi","interp-t-multi",(-955314012),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_multi)?mikron.test.interp_t_multi.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_binary_2246 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1848){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1848))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_binary.call(null,buffer1848);
}
}),(function (value1849){
return mikron.util.schema.binary_QMARK_.call(null,value1849);
}),(function (value_11851,value_21852){
return value_21852;
}),(function (){
return mikron.util.schema.byte_seq__GT_binary.call(null,(function (){var coll1868 = cljs.core.PersistentVector.EMPTY;
var n1869 = ((2) + mikron.util.math.rand_long.call(null,(30)));
var n1869__$1 = cljs.core.long$.call(null,n1869);
var coll1868__$1 = cljs.core.transient$.call(null,coll1868);
while(true){
if(((0) === n1869__$1)){
return cljs.core.persistent_BANG_.call(null,coll1868__$1);
} else {
var G__2248 = (n1869__$1 - (1));
var G__2249 = cljs.core.conj_BANG_.call(null,coll1868__$1,(function (){var r1853 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1853 * (128)) + (((1) - r1853) * (-128)))));
})());
n1869__$1 = G__2248;
coll1868__$1 = G__2249;
continue;
}
break;
}
})());
}),(function (buffer1854){
return mikron.buffer._QMARK_binary.call(null,buffer1854);
}),(function (value_11856,value_21857,prefer_first_QMARK_1858,time_factor1859){
if(cljs.core.truth_(prefer_first_QMARK_1858)){
return value_11856;
} else {
return value_21857;
}
}),(function (value1860,buffer1861){
var value_dnil_QMARK_1862 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1860);
mikron.buffer._BANG_boolean.call(null,buffer1861,value_dnil_QMARK_1862);

if(value_dnil_QMARK_1862){
return null;
} else {
return mikron.buffer._BANG_binary.call(null,buffer1861,value1860);
}
}),(function (value1863,buffer1864){
return mikron.buffer._BANG_binary.call(null,buffer1864,value1863);
}),(function (value_11866,value_21867){
return value_21867;
})]),null,null,null));
})();
var dataset1262_2247 = cljs.core.repeatedly.call(null,(100),((function (t_binary_2246){
return (function (){
return mikron.core.gen.call(null,t_binary_2246);
});})(t_binary_2246))
);
mikron.test.pack_t_binary = ((function (t_binary_2246,dataset1262_2247){
return (function mikron$test$pack_t_binary(){
return cljs.test.test_var.call(null,mikron.test.pack_t_binary.cljs$lang$var);
});})(t_binary_2246,dataset1262_2247))
;
mikron.test.pack_t_binary.cljs$lang$test = ((function (t_binary_2246,dataset1262_2247){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_binary_2246,dataset1262_2247);
});})(t_binary_2246,dataset1262_2247))
;

mikron.test.pack_t_binary.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_binary;},new cljs.core.Symbol("mikron.test","pack-t-binary","mikron.test/pack-t-binary",(-1927453411),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-binary","pack-t-binary",(229788483),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_binary)?mikron.test.pack_t_binary.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_binary = ((function (t_binary_2246,dataset1262_2247){
return (function mikron$test$diff_t_binary(){
return cljs.test.test_var.call(null,mikron.test.diff_t_binary.cljs$lang$var);
});})(t_binary_2246,dataset1262_2247))
;
mikron.test.diff_t_binary.cljs$lang$test = ((function (t_binary_2246,dataset1262_2247){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_binary_2246,dataset1262_2247);
});})(t_binary_2246,dataset1262_2247))
;

mikron.test.diff_t_binary.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_binary;},new cljs.core.Symbol("mikron.test","diff-t-binary","mikron.test/diff-t-binary",(-1561281727),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-binary","diff-t-binary",(630743395),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_binary)?mikron.test.diff_t_binary.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_binary = ((function (t_binary_2246,dataset1262_2247){
return (function mikron$test$valid_QMARK__t_binary(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_binary.cljs$lang$var);
});})(t_binary_2246,dataset1262_2247))
;
mikron.test.valid_QMARK__t_binary.cljs$lang$test = ((function (t_binary_2246,dataset1262_2247){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_binary_2246,dataset1262_2247);
});})(t_binary_2246,dataset1262_2247))
;

mikron.test.valid_QMARK__t_binary.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_binary;},new cljs.core.Symbol("mikron.test","valid?-t-binary","mikron.test/valid?-t-binary",(242088288),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-binary","valid?-t-binary",(-1853563070),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_binary)?mikron.test.valid_QMARK__t_binary.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_binary = ((function (t_binary_2246,dataset1262_2247){
return (function mikron$test$interp_t_binary(){
return cljs.test.test_var.call(null,mikron.test.interp_t_binary.cljs$lang$var);
});})(t_binary_2246,dataset1262_2247))
;
mikron.test.interp_t_binary.cljs$lang$test = ((function (t_binary_2246,dataset1262_2247){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_binary_2246,dataset1262_2247);
});})(t_binary_2246,dataset1262_2247))
;

mikron.test.interp_t_binary.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_binary;},new cljs.core.Symbol("mikron.test","interp-t-binary","mikron.test/interp-t-binary",(-293044046),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-binary","interp-t-binary",(1847680720),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_binary)?mikron.test.interp_t_binary.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t__GT__sorted_map_2250 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1870){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1870))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1910 = cljs.core.sorted_map_by.call(null,cljs.core._GT_);
var n1911 = mikron.buffer._QMARK_varint.call(null,buffer1870);
var n1911__$1 = cljs.core.long$.call(null,n1911);
var coll1910__$1 = coll1910;
while(true){
if(((0) === n1911__$1)){
return coll1910__$1;
} else {
var G__2252 = (n1911__$1 - (1));
var G__2253 = cljs.core.assoc.call(null,coll1910__$1,mikron.buffer._QMARK_byte.call(null,buffer1870),(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1870))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1870))));
n1911__$1 = G__2252;
coll1910__$1 = G__2253;
continue;
}
break;
}
}
}),(function (value1871){
return (cljs.core.map_QMARK_.call(null,value1871)) && (cljs.core.every_QMARK_.call(null,(function (entry_SINGLEQUOTE_1872){
var key_SINGLEQUOTE_1873 = cljs.core.key.call(null,entry_SINGLEQUOTE_1872);
var value_SINGLEQUOTE_1874 = cljs.core.val.call(null,entry_SINGLEQUOTE_1872);
return ((cljs.core.integer_QMARK_.call(null,key_SINGLEQUOTE_1873)) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1873) >= (-128))) && ((cljs.core.unchecked_long.call(null,key_SINGLEQUOTE_1873) < (128)))) && (typeof value_SINGLEQUOTE_1874 === 'string');
}),value1871));
}),(function (value_11876,value_21877){
return value_21877;
}),(function (){
var coll1912 = cljs.core.sorted_map_by.call(null,cljs.core._GT_);
var n1913 = (4);
var n1913__$1 = cljs.core.long$.call(null,n1913);
var coll1912__$1 = coll1912;
while(true){
if(((0) === n1913__$1)){
return coll1912__$1;
} else {
var G__2254 = (n1913__$1 - (1));
var G__2255 = cljs.core.assoc.call(null,coll1912__$1,(function (){var r1878 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1878 * (128)) + (((1) - r1878) * (-128)))));
})(),cljs.core.apply.call(null,cljs.core.str,(function (){var coll1914 = cljs.core.PersistentVector.EMPTY;
var n1915 = (4);
var n1915__$1 = cljs.core.long$.call(null,n1915);
var coll1914__$1 = cljs.core.transient$.call(null,coll1914);
while(true){
if(((0) === n1915__$1)){
return cljs.core.persistent_BANG_.call(null,coll1914__$1);
} else {
var G__2256 = (n1915__$1 - (1));
var G__2257 = cljs.core.conj_BANG_.call(null,coll1914__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n1915__$1 = G__2256;
coll1914__$1 = G__2257;
continue;
}
break;
}
})()));
n1913__$1 = G__2254;
coll1912__$1 = G__2255;
continue;
}
break;
}
}),(function (buffer1879){
var coll1916 = cljs.core.sorted_map_by.call(null,cljs.core._GT_);
var n1917 = mikron.buffer._QMARK_varint.call(null,buffer1879);
var n1917__$1 = cljs.core.long$.call(null,n1917);
var coll1916__$1 = coll1916;
while(true){
if(((0) === n1917__$1)){
return coll1916__$1;
} else {
var G__2258 = (n1917__$1 - (1));
var G__2259 = cljs.core.assoc.call(null,coll1916__$1,mikron.buffer._QMARK_byte.call(null,buffer1879),mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1879)));
n1917__$1 = G__2258;
coll1916__$1 = G__2259;
continue;
}
break;
}
}),(function (value_11881,value_21882,prefer_first_QMARK_1883,time_factor1884){
if(cljs.core.truth_(prefer_first_QMARK_1883)){
return value_11881;
} else {
return value_21882;
}
}),(function (value1891,buffer1892){
var value_dnil_QMARK_1893 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1891);
mikron.buffer._BANG_boolean.call(null,buffer1892,value_dnil_QMARK_1893);

if(value_dnil_QMARK_1893){
return null;
} else {
var length1894 = mikron.util.coll.count.call(null,value1891);
mikron.buffer._BANG_varint.call(null,buffer1892,length1894);

return cljs.core.run_BANG_.call(null,((function (length1894,value_dnil_QMARK_1893){
return (function (entry_SINGLEQUOTE_1895){
var key_SINGLEQUOTE_1896 = cljs.core.key.call(null,entry_SINGLEQUOTE_1895);
var value_SINGLEQUOTE_1897 = cljs.core.val.call(null,entry_SINGLEQUOTE_1895);
mikron.buffer._BANG_byte.call(null,buffer1892,key_SINGLEQUOTE_1896);

var value_dnil_QMARK_1898 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1897);
mikron.buffer._BANG_boolean.call(null,buffer1892,value_dnil_QMARK_1898);

if(value_dnil_QMARK_1898){
return null;
} else {
var value_SINGLEQUOTE_1899 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1897);
return mikron.buffer._BANG_binary.call(null,buffer1892,value_SINGLEQUOTE_1899);
}
});})(length1894,value_dnil_QMARK_1893))
,value1891);
}
}),(function (value1900,buffer1901){
var length1902 = mikron.util.coll.count.call(null,value1900);
mikron.buffer._BANG_varint.call(null,buffer1901,length1902);

return cljs.core.run_BANG_.call(null,((function (length1902){
return (function (entry_SINGLEQUOTE_1903){
var key_SINGLEQUOTE_1904 = cljs.core.key.call(null,entry_SINGLEQUOTE_1903);
var value_SINGLEQUOTE_1905 = cljs.core.val.call(null,entry_SINGLEQUOTE_1903);
mikron.buffer._BANG_byte.call(null,buffer1901,key_SINGLEQUOTE_1904);

var value_SINGLEQUOTE_1906 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_1905);
return mikron.buffer._BANG_binary.call(null,buffer1901,value_SINGLEQUOTE_1906);
});})(length1902))
,value1900);
}),(function (value_11908,value_21909){
return value_21909;
})]),null,null,null));
})();
var dataset1262_2251 = cljs.core.repeatedly.call(null,(100),((function (t__GT__sorted_map_2250){
return (function (){
return mikron.core.gen.call(null,t__GT__sorted_map_2250);
});})(t__GT__sorted_map_2250))
);
mikron.test.pack_t__GT__sorted_map = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function mikron$test$pack_t__GT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.pack_t__GT__sorted_map.cljs$lang$var);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;
mikron.test.pack_t__GT__sorted_map.cljs$lang$test = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t__GT__sorted_map_2250,dataset1262_2251);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;

mikron.test.pack_t__GT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t__GT__sorted_map;},new cljs.core.Symbol("mikron.test","pack-t->-sorted-map","mikron.test/pack-t->-sorted-map",(2014357957),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t->-sorted-map","pack-t->-sorted-map",(-9859101),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t__GT__sorted_map)?mikron.test.pack_t__GT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t__GT__sorted_map = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function mikron$test$diff_t__GT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.diff_t__GT__sorted_map.cljs$lang$var);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;
mikron.test.diff_t__GT__sorted_map.cljs$lang$test = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t__GT__sorted_map_2250,dataset1262_2251);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;

mikron.test.diff_t__GT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t__GT__sorted_map;},new cljs.core.Symbol("mikron.test","diff-t->-sorted-map","mikron.test/diff-t->-sorted-map",(-235166914),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t->-sorted-map","diff-t->-sorted-map",(1922267484),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t__GT__sorted_map)?mikron.test.diff_t__GT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t__GT__sorted_map = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function mikron$test$valid_QMARK__t__GT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t__GT__sorted_map.cljs$lang$var);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;
mikron.test.valid_QMARK__t__GT__sorted_map.cljs$lang$test = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t__GT__sorted_map_2250,dataset1262_2251);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;

mikron.test.valid_QMARK__t__GT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t__GT__sorted_map;},new cljs.core.Symbol("mikron.test","valid?-t->-sorted-map","mikron.test/valid?-t->-sorted-map",(1231863061),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t->-sorted-map","valid?-t->-sorted-map",(-904538309),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t__GT__sorted_map)?mikron.test.valid_QMARK__t__GT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t__GT__sorted_map = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function mikron$test$interp_t__GT__sorted_map(){
return cljs.test.test_var.call(null,mikron.test.interp_t__GT__sorted_map.cljs$lang$var);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;
mikron.test.interp_t__GT__sorted_map.cljs$lang$test = ((function (t__GT__sorted_map_2250,dataset1262_2251){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t__GT__sorted_map_2250,dataset1262_2251);
});})(t__GT__sorted_map_2250,dataset1262_2251))
;

mikron.test.interp_t__GT__sorted_map.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t__GT__sorted_map;},new cljs.core.Symbol("mikron.test","interp-t->-sorted-map","mikron.test/interp-t->-sorted-map",(54932874),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t->-sorted-map","interp-t->-sorted-map",(-2098244696),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t__GT__sorted_map)?mikron.test.interp_t__GT__sorted_map.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_ubyte_2260 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1918){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1918))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_ubyte.call(null,buffer1918);
}
}),(function (value1919){
return (cljs.core.integer_QMARK_.call(null,value1919)) && ((cljs.core.unchecked_long.call(null,value1919) >= (0))) && ((cljs.core.unchecked_long.call(null,value1919) < (256)));
}),(function (value_11921,value_21922){
return value_21922;
}),(function (){
var r1923 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1923 * (256)) + (((1) - r1923) * (0)))));
}),(function (buffer1924){
return mikron.buffer._QMARK_ubyte.call(null,buffer1924);
}),(function (value_11926,value_21927,prefer_first_QMARK_1928,time_factor1929){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11926,value_21927,time_factor1929));
}),(function (value1930,buffer1931){
var value_dnil_QMARK_1932 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1930);
mikron.buffer._BANG_boolean.call(null,buffer1931,value_dnil_QMARK_1932);

if(value_dnil_QMARK_1932){
return null;
} else {
return mikron.buffer._BANG_ubyte.call(null,buffer1931,value1930);
}
}),(function (value1933,buffer1934){
return mikron.buffer._BANG_ubyte.call(null,buffer1934,value1933);
}),(function (value_11936,value_21937){
return value_21937;
})]),null,null,null));
})();
var dataset1262_2261 = cljs.core.repeatedly.call(null,(100),((function (t_ubyte_2260){
return (function (){
return mikron.core.gen.call(null,t_ubyte_2260);
});})(t_ubyte_2260))
);
mikron.test.pack_t_ubyte = ((function (t_ubyte_2260,dataset1262_2261){
return (function mikron$test$pack_t_ubyte(){
return cljs.test.test_var.call(null,mikron.test.pack_t_ubyte.cljs$lang$var);
});})(t_ubyte_2260,dataset1262_2261))
;
mikron.test.pack_t_ubyte.cljs$lang$test = ((function (t_ubyte_2260,dataset1262_2261){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_ubyte_2260,dataset1262_2261);
});})(t_ubyte_2260,dataset1262_2261))
;

mikron.test.pack_t_ubyte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_ubyte;},new cljs.core.Symbol("mikron.test","pack-t-ubyte","mikron.test/pack-t-ubyte",(881015997),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-ubyte","pack-t-ubyte",(-1209277797),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_ubyte)?mikron.test.pack_t_ubyte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_ubyte = ((function (t_ubyte_2260,dataset1262_2261){
return (function mikron$test$diff_t_ubyte(){
return cljs.test.test_var.call(null,mikron.test.diff_t_ubyte.cljs$lang$var);
});})(t_ubyte_2260,dataset1262_2261))
;
mikron.test.diff_t_ubyte.cljs$lang$test = ((function (t_ubyte_2260,dataset1262_2261){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_ubyte_2260,dataset1262_2261);
});})(t_ubyte_2260,dataset1262_2261))
;

mikron.test.diff_t_ubyte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_ubyte;},new cljs.core.Symbol("mikron.test","diff-t-ubyte","mikron.test/diff-t-ubyte",(-1118844917),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-ubyte","diff-t-ubyte",(1034219049),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_ubyte)?mikron.test.diff_t_ubyte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_ubyte = ((function (t_ubyte_2260,dataset1262_2261){
return (function mikron$test$valid_QMARK__t_ubyte(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_ubyte.cljs$lang$var);
});})(t_ubyte_2260,dataset1262_2261))
;
mikron.test.valid_QMARK__t_ubyte.cljs$lang$test = ((function (t_ubyte_2260,dataset1262_2261){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_ubyte_2260,dataset1262_2261);
});})(t_ubyte_2260,dataset1262_2261))
;

mikron.test.valid_QMARK__t_ubyte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_ubyte;},new cljs.core.Symbol("mikron.test","valid?-t-ubyte","mikron.test/valid?-t-ubyte",(1024443963),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-ubyte","valid?-t-ubyte",(-1109066531),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_ubyte)?mikron.test.valid_QMARK__t_ubyte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_ubyte = ((function (t_ubyte_2260,dataset1262_2261){
return (function mikron$test$interp_t_ubyte(){
return cljs.test.test_var.call(null,mikron.test.interp_t_ubyte.cljs$lang$var);
});})(t_ubyte_2260,dataset1262_2261))
;
mikron.test.interp_t_ubyte.cljs$lang$test = ((function (t_ubyte_2260,dataset1262_2261){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_ubyte_2260,dataset1262_2261);
});})(t_ubyte_2260,dataset1262_2261))
;

mikron.test.interp_t_ubyte.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_ubyte;},new cljs.core.Symbol("mikron.test","interp-t-ubyte","mikron.test/interp-t-ubyte",(785557163),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-ubyte","interp-t-ubyte",(-1381266231),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_ubyte)?mikron.test.interp_t_ubyte.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_enum_2262 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1938){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1938))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.util.coll.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",(-1457810207)),new cljs.core.Keyword(null,"dog","dog",(-1650861974)),new cljs.core.Keyword(null,"measurement","measurement",(-1778859790)),new cljs.core.Keyword(null,"error","error",(-978969032))], null),mikron.buffer._QMARK_byte.call(null,buffer1938));
}
}),(function (value1939){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat","cat",(-1457810207)),null,new cljs.core.Keyword(null,"dog","dog",(-1650861974)),null,new cljs.core.Keyword(null,"measurement","measurement",(-1778859790)),null,new cljs.core.Keyword(null,"error","error",(-978969032)),null], null), null).call(null,value1939);
}),(function (value_11941,value_21942){
return value_21942;
}),(function (){
return mikron.util.coll.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",(-1457810207)),new cljs.core.Keyword(null,"dog","dog",(-1650861974)),new cljs.core.Keyword(null,"measurement","measurement",(-1778859790)),new cljs.core.Keyword(null,"error","error",(-978969032))], null));
}),(function (buffer1943){
return mikron.util.coll.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",(-1457810207)),new cljs.core.Keyword(null,"dog","dog",(-1650861974)),new cljs.core.Keyword(null,"measurement","measurement",(-1778859790)),new cljs.core.Keyword(null,"error","error",(-978969032))], null),mikron.buffer._QMARK_byte.call(null,buffer1943));
}),(function (value_11945,value_21946,prefer_first_QMARK_1947,time_factor1948){
if(cljs.core.truth_(prefer_first_QMARK_1947)){
return value_11945;
} else {
return value_21946;
}
}),(function (value1949,buffer1950){
var value_dnil_QMARK_1951 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1949);
mikron.buffer._BANG_boolean.call(null,buffer1950,value_dnil_QMARK_1951);

if(value_dnil_QMARK_1951){
return null;
} else {
return mikron.buffer._BANG_byte.call(null,buffer1950,(function (){var G__1957 = (((value1949 instanceof cljs.core.Keyword))?value1949.fqn:null);
switch (G__1957) {
case "cat":
return (0);

break;
case "dog":
return (1);

break;
case "measurement":
return (2);

break;
case "error":
return (3);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value1949)].join('')));

}
})());
}
}),(function (value1952,buffer1953){
return mikron.buffer._BANG_byte.call(null,buffer1953,(function (){var G__1958 = (((value1952 instanceof cljs.core.Keyword))?value1952.fqn:null);
switch (G__1958) {
case "cat":
return (0);

break;
case "dog":
return (1);

break;
case "measurement":
return (2);

break;
case "error":
return (3);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value1952)].join('')));

}
})());
}),(function (value_11955,value_21956){
return value_21956;
})]),null,null,null));
})();
var dataset1262_2263 = cljs.core.repeatedly.call(null,(100),((function (t_enum_2262){
return (function (){
return mikron.core.gen.call(null,t_enum_2262);
});})(t_enum_2262))
);
mikron.test.pack_t_enum = ((function (t_enum_2262,dataset1262_2263){
return (function mikron$test$pack_t_enum(){
return cljs.test.test_var.call(null,mikron.test.pack_t_enum.cljs$lang$var);
});})(t_enum_2262,dataset1262_2263))
;
mikron.test.pack_t_enum.cljs$lang$test = ((function (t_enum_2262,dataset1262_2263){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_enum_2262,dataset1262_2263);
});})(t_enum_2262,dataset1262_2263))
;

mikron.test.pack_t_enum.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_enum;},new cljs.core.Symbol("mikron.test","pack-t-enum","mikron.test/pack-t-enum",(848312000),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-enum","pack-t-enum",(-1245114206),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_enum)?mikron.test.pack_t_enum.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_enum = ((function (t_enum_2262,dataset1262_2263){
return (function mikron$test$diff_t_enum(){
return cljs.test.test_var.call(null,mikron.test.diff_t_enum.cljs$lang$var);
});})(t_enum_2262,dataset1262_2263))
;
mikron.test.diff_t_enum.cljs$lang$test = ((function (t_enum_2262,dataset1262_2263){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_enum_2262,dataset1262_2263);
});})(t_enum_2262,dataset1262_2263))
;

mikron.test.diff_t_enum.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_enum;},new cljs.core.Symbol("mikron.test","diff-t-enum","mikron.test/diff-t-enum",(1360101941),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-enum","diff-t-enum",(-758552361),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_enum)?mikron.test.diff_t_enum.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_enum = ((function (t_enum_2262,dataset1262_2263){
return (function mikron$test$valid_QMARK__t_enum(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_enum.cljs$lang$var);
});})(t_enum_2262,dataset1262_2263))
;
mikron.test.valid_QMARK__t_enum.cljs$lang$test = ((function (t_enum_2262,dataset1262_2263){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_enum_2262,dataset1262_2263);
});})(t_enum_2262,dataset1262_2263))
;

mikron.test.valid_QMARK__t_enum.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_enum;},new cljs.core.Symbol("mikron.test","valid?-t-enum","mikron.test/valid?-t-enum",(-1767098514),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-enum","valid?-t-enum",(369577296),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_enum)?mikron.test.valid_QMARK__t_enum.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_enum = ((function (t_enum_2262,dataset1262_2263){
return (function mikron$test$interp_t_enum(){
return cljs.test.test_var.call(null,mikron.test.interp_t_enum.cljs$lang$var);
});})(t_enum_2262,dataset1262_2263))
;
mikron.test.interp_t_enum.cljs$lang$test = ((function (t_enum_2262,dataset1262_2263){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_enum_2262,dataset1262_2263);
});})(t_enum_2262,dataset1262_2263))
;

mikron.test.interp_t_enum.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_enum;},new cljs.core.Symbol("mikron.test","interp-t-enum","mikron.test/interp-t-enum",(326109436),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-enum","interp-t-enum",(-1817618654),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_enum)?mikron.test.interp_t_enum.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t__GT__sorted_set_2266 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1959){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1959))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll1985 = cljs.core.sorted_set_by.call(null,cljs.core._GT_);
var n1986 = mikron.buffer._QMARK_varint.call(null,buffer1959);
var n1986__$1 = cljs.core.long$.call(null,n1986);
var coll1985__$1 = coll1985;
while(true){
if(((0) === n1986__$1)){
return coll1985__$1;
} else {
var G__2268 = (n1986__$1 - (1));
var G__2269 = cljs.core.conj.call(null,coll1985__$1,(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1959))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_int.call(null,buffer1959)));
n1986__$1 = G__2268;
coll1985__$1 = G__2269;
continue;
}
break;
}
}
}),(function (value1960){
return (cljs.core.set_QMARK_.call(null,value1960)) && (cljs.core.every_QMARK_.call(null,(function (value_SINGLEQUOTE_1961){
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_1961)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1961) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_1961) < (2147483648)));
}),value1960));
}),(function (value_11963,value_21964){
return value_21964;
}),(function (){
var coll1987 = cljs.core.sorted_set_by.call(null,cljs.core._GT_);
var n1988 = (4);
var n1988__$1 = cljs.core.long$.call(null,n1988);
var coll1987__$1 = coll1987;
while(true){
if(((0) === n1988__$1)){
return coll1987__$1;
} else {
var G__2270 = (n1988__$1 - (1));
var G__2271 = cljs.core.conj.call(null,coll1987__$1,(function (){var r1965 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1965 * (2147483648)) + (((1) - r1965) * (-2147483648)))));
})());
n1988__$1 = G__2270;
coll1987__$1 = G__2271;
continue;
}
break;
}
}),(function (buffer1966){
var coll1989 = cljs.core.sorted_set_by.call(null,cljs.core._GT_);
var n1990 = mikron.buffer._QMARK_varint.call(null,buffer1966);
var n1990__$1 = cljs.core.long$.call(null,n1990);
var coll1989__$1 = coll1989;
while(true){
if(((0) === n1990__$1)){
return coll1989__$1;
} else {
var G__2272 = (n1990__$1 - (1));
var G__2273 = cljs.core.conj.call(null,coll1989__$1,mikron.buffer._QMARK_int.call(null,buffer1966));
n1990__$1 = G__2272;
coll1989__$1 = G__2273;
continue;
}
break;
}
}),(function (value_11968,value_21969,prefer_first_QMARK_1970,time_factor1971){
if(cljs.core.truth_(prefer_first_QMARK_1970)){
return value_11968;
} else {
return value_21969;
}
}),(function (value1972,buffer1973){
var value_dnil_QMARK_1974 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1972);
mikron.buffer._BANG_boolean.call(null,buffer1973,value_dnil_QMARK_1974);

if(value_dnil_QMARK_1974){
return null;
} else {
var length1975 = cljs.core.count.call(null,value1972);
mikron.buffer._BANG_varint.call(null,buffer1973,length1975);

return cljs.core.run_BANG_.call(null,((function (length1975,value_dnil_QMARK_1974){
return (function (value_SINGLEQUOTE_1976){
var value_dnil_QMARK_1977 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_1976);
mikron.buffer._BANG_boolean.call(null,buffer1973,value_dnil_QMARK_1977);

if(value_dnil_QMARK_1977){
return null;
} else {
return mikron.buffer._BANG_int.call(null,buffer1973,value_SINGLEQUOTE_1976);
}
});})(length1975,value_dnil_QMARK_1974))
,value1972);
}
}),(function (value1978,buffer1979){
var length1980 = cljs.core.count.call(null,value1978);
mikron.buffer._BANG_varint.call(null,buffer1979,length1980);

return cljs.core.run_BANG_.call(null,((function (length1980){
return (function (value_SINGLEQUOTE_1981){
return mikron.buffer._BANG_int.call(null,buffer1979,value_SINGLEQUOTE_1981);
});})(length1980))
,value1978);
}),(function (value_11983,value_21984){
return value_21984;
})]),null,null,null));
})();
var dataset1262_2267 = cljs.core.repeatedly.call(null,(100),((function (t__GT__sorted_set_2266){
return (function (){
return mikron.core.gen.call(null,t__GT__sorted_set_2266);
});})(t__GT__sorted_set_2266))
);
mikron.test.pack_t__GT__sorted_set = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function mikron$test$pack_t__GT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.pack_t__GT__sorted_set.cljs$lang$var);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;
mikron.test.pack_t__GT__sorted_set.cljs$lang$test = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t__GT__sorted_set_2266,dataset1262_2267);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;

mikron.test.pack_t__GT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t__GT__sorted_set;},new cljs.core.Symbol("mikron.test","pack-t->-sorted-set","mikron.test/pack-t->-sorted-set",(-99051342),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t->-sorted-set","pack-t->-sorted-set",(2034348692),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t__GT__sorted_set)?mikron.test.pack_t__GT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t__GT__sorted_set = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function mikron$test$diff_t__GT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.diff_t__GT__sorted_set.cljs$lang$var);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;
mikron.test.diff_t__GT__sorted_set.cljs$lang$test = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t__GT__sorted_set_2266,dataset1262_2267);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;

mikron.test.diff_t__GT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t__GT__sorted_set;},new cljs.core.Symbol("mikron.test","diff-t->-sorted-set","mikron.test/diff-t->-sorted-set",(-611803330),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t->-sorted-set","diff-t->-sorted-set",(1533128988),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t__GT__sorted_set)?mikron.test.diff_t__GT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t__GT__sorted_set = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function mikron$test$valid_QMARK__t__GT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t__GT__sorted_set.cljs$lang$var);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;
mikron.test.valid_QMARK__t__GT__sorted_set.cljs$lang$test = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t__GT__sorted_set_2266,dataset1262_2267);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;

mikron.test.valid_QMARK__t__GT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t__GT__sorted_set;},new cljs.core.Symbol("mikron.test","valid?-t->-sorted-set","mikron.test/valid?-t->-sorted-set",(169270549),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t->-sorted-set","valid?-t->-sorted-set",(-1786775749),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t__GT__sorted_set)?mikron.test.valid_QMARK__t__GT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t__GT__sorted_set = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function mikron$test$interp_t__GT__sorted_set(){
return cljs.test.test_var.call(null,mikron.test.interp_t__GT__sorted_set.cljs$lang$var);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;
mikron.test.interp_t__GT__sorted_set.cljs$lang$test = ((function (t__GT__sorted_set_2266,dataset1262_2267){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t__GT__sorted_set_2266,dataset1262_2267);
});})(t__GT__sorted_set_2266,dataset1262_2267))
;

mikron.test.interp_t__GT__sorted_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t__GT__sorted_set;},new cljs.core.Symbol("mikron.test","interp-t->-sorted-set","mikron.test/interp-t->-sorted-set",(-538124759),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t->-sorted-set","interp-t->-sorted-set",(1598797831),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t__GT__sorted_set)?mikron.test.interp_t__GT__sorted_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_record_2274 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1991){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1991))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var _COLON_a1992 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1991))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_int.call(null,buffer1991));
var _COLON_b1993 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1991))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer1991)));
var _COLON_c1994 = (cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1991))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_byte.call(null,buffer1991));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",(-2123407586)),_COLON_a1992,new cljs.core.Keyword(null,"b","b",(1482224470)),_COLON_b1993,new cljs.core.Keyword(null,"c","c",(-1763192079)),_COLON_c1994], null);
}
}),(function (value1995){
var and__20483__auto__ = cljs.core.map_QMARK_.call(null,value1995);
if(and__20483__auto__){
var and__20483__auto____$1 = (function (){var _COLON_a1996 = value1995.call(null,new cljs.core.Keyword(null,"a","a",(-2123407586)));
return (cljs.core.integer_QMARK_.call(null,_COLON_a1996)) && ((cljs.core.unchecked_long.call(null,_COLON_a1996) >= (-2147483648))) && ((cljs.core.unchecked_long.call(null,_COLON_a1996) < (2147483648)));
})();
if(and__20483__auto____$1){
var and__20483__auto____$2 = (function (){var _COLON_b1997 = value1995.call(null,new cljs.core.Keyword(null,"b","b",(1482224470)));
return typeof _COLON_b1997 === 'string';
})();
if(and__20483__auto____$2){
var _COLON_c1998 = value1995.call(null,new cljs.core.Keyword(null,"c","c",(-1763192079)));
return (cljs.core.integer_QMARK_.call(null,_COLON_c1998)) && ((cljs.core.unchecked_long.call(null,_COLON_c1998) >= (-128))) && ((cljs.core.unchecked_long.call(null,_COLON_c1998) < (128)));
} else {
return and__20483__auto____$2;
}
} else {
return and__20483__auto____$1;
}
} else {
return and__20483__auto__;
}
}),(function (value_12000,value_22001){
return value_22001;
}),(function (){
var _COLON_a2002 = (function (){var r2005 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r2005 * (2147483648)) + (((1) - r2005) * (-2147483648)))));
})();
var _COLON_b2003 = cljs.core.apply.call(null,cljs.core.str,(function (){var coll2037 = cljs.core.PersistentVector.EMPTY;
var n2038 = (4);
var n2038__$1 = cljs.core.long$.call(null,n2038);
var coll2037__$1 = cljs.core.transient$.call(null,coll2037);
while(true){
if(((0) === n2038__$1)){
return cljs.core.persistent_BANG_.call(null,coll2037__$1);
} else {
var G__2276 = (n2038__$1 - (1));
var G__2277 = cljs.core.conj_BANG_.call(null,coll2037__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n2038__$1 = G__2276;
coll2037__$1 = G__2277;
continue;
}
break;
}
})());
var _COLON_c2004 = (function (){var r2006 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r2006 * (128)) + (((1) - r2006) * (-128)))));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",(-2123407586)),_COLON_a2002,new cljs.core.Keyword(null,"b","b",(1482224470)),_COLON_b2003,new cljs.core.Keyword(null,"c","c",(-1763192079)),_COLON_c2004], null);
}),(function (buffer2007){
var _COLON_a2008 = mikron.buffer._QMARK_int.call(null,buffer2007);
var _COLON_b2009 = mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer2007));
var _COLON_c2010 = mikron.buffer._QMARK_byte.call(null,buffer2007);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",(-2123407586)),_COLON_a2008,new cljs.core.Keyword(null,"b","b",(1482224470)),_COLON_b2009,new cljs.core.Keyword(null,"c","c",(-1763192079)),_COLON_c2010], null);
}),(function (value_12012,value_22013,prefer_first_QMARK_2014,time_factor2015){
if(cljs.core.truth_(prefer_first_QMARK_2014)){
return value_12012;
} else {
return value_22013;
}
}),(function (value2018,buffer2019){
var value_dnil_QMARK_2020 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value2018);
mikron.buffer._BANG_boolean.call(null,buffer2019,value_dnil_QMARK_2020);

if(value_dnil_QMARK_2020){
return null;
} else {
var _COLON_a2021_2278 = value2018.call(null,new cljs.core.Keyword(null,"a","a",(-2123407586)));
var value_dnil_QMARK_2024_2279 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === _COLON_a2021_2278);
mikron.buffer._BANG_boolean.call(null,buffer2019,value_dnil_QMARK_2024_2279);

if(value_dnil_QMARK_2024_2279){
} else {
mikron.buffer._BANG_int.call(null,buffer2019,_COLON_a2021_2278);
}

var _COLON_b2022_2280 = value2018.call(null,new cljs.core.Keyword(null,"b","b",(1482224470)));
var value_dnil_QMARK_2025_2281 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === _COLON_b2022_2280);
mikron.buffer._BANG_boolean.call(null,buffer2019,value_dnil_QMARK_2025_2281);

if(value_dnil_QMARK_2025_2281){
} else {
var value_SINGLEQUOTE_2026_2282 = mikron.util.schema.string__GT_binary.call(null,_COLON_b2022_2280);
mikron.buffer._BANG_binary.call(null,buffer2019,value_SINGLEQUOTE_2026_2282);
}

var _COLON_c2023 = value2018.call(null,new cljs.core.Keyword(null,"c","c",(-1763192079)));
var value_dnil_QMARK_2027 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === _COLON_c2023);
mikron.buffer._BANG_boolean.call(null,buffer2019,value_dnil_QMARK_2027);

if(value_dnil_QMARK_2027){
return null;
} else {
return mikron.buffer._BANG_byte.call(null,buffer2019,_COLON_c2023);
}
}
}),(function (value2028,buffer2029){
var _COLON_a2030_2283 = value2028.call(null,new cljs.core.Keyword(null,"a","a",(-2123407586)));
mikron.buffer._BANG_int.call(null,buffer2029,_COLON_a2030_2283);

var _COLON_b2031_2284 = value2028.call(null,new cljs.core.Keyword(null,"b","b",(1482224470)));
var value_SINGLEQUOTE_2033_2285 = mikron.util.schema.string__GT_binary.call(null,_COLON_b2031_2284);
mikron.buffer._BANG_binary.call(null,buffer2029,value_SINGLEQUOTE_2033_2285);

var _COLON_c2032 = value2028.call(null,new cljs.core.Keyword(null,"c","c",(-1763192079)));
return mikron.buffer._BANG_byte.call(null,buffer2029,_COLON_c2032);
}),(function (value_12035,value_22036){
return value_22036;
})]),null,null,null));
})();
var dataset1262_2275 = cljs.core.repeatedly.call(null,(100),((function (t_record_2274){
return (function (){
return mikron.core.gen.call(null,t_record_2274);
});})(t_record_2274))
);
mikron.test.pack_t_record = ((function (t_record_2274,dataset1262_2275){
return (function mikron$test$pack_t_record(){
return cljs.test.test_var.call(null,mikron.test.pack_t_record.cljs$lang$var);
});})(t_record_2274,dataset1262_2275))
;
mikron.test.pack_t_record.cljs$lang$test = ((function (t_record_2274,dataset1262_2275){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_record_2274,dataset1262_2275);
});})(t_record_2274,dataset1262_2275))
;

mikron.test.pack_t_record.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_record;},new cljs.core.Symbol("mikron.test","pack-t-record","mikron.test/pack-t-record",(441378465),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-record","pack-t-record",(-1679441785),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_record)?mikron.test.pack_t_record.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_record = ((function (t_record_2274,dataset1262_2275){
return (function mikron$test$diff_t_record(){
return cljs.test.test_var.call(null,mikron.test.diff_t_record.cljs$lang$var);
});})(t_record_2274,dataset1262_2275))
;
mikron.test.diff_t_record.cljs$lang$test = ((function (t_record_2274,dataset1262_2275){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_record_2274,dataset1262_2275);
});})(t_record_2274,dataset1262_2275))
;

mikron.test.diff_t_record.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_record;},new cljs.core.Symbol("mikron.test","diff-t-record","mikron.test/diff-t-record",(1807198707),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-record","diff-t-record",(-319893547),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_record)?mikron.test.diff_t_record.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_record = ((function (t_record_2274,dataset1262_2275){
return (function mikron$test$valid_QMARK__t_record(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_record.cljs$lang$var);
});})(t_record_2274,dataset1262_2275))
;
mikron.test.valid_QMARK__t_record.cljs$lang$test = ((function (t_record_2274,dataset1262_2275){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_record_2274,dataset1262_2275);
});})(t_record_2274,dataset1262_2275))
;

mikron.test.valid_QMARK__t_record.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_record;},new cljs.core.Symbol("mikron.test","valid?-t-record","mikron.test/valid?-t-record",(1664068522),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-record","valid?-t-record",(-531197560),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_record)?mikron.test.valid_QMARK__t_record.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_record = ((function (t_record_2274,dataset1262_2275){
return (function mikron$test$interp_t_record(){
return cljs.test.test_var.call(null,mikron.test.interp_t_record.cljs$lang$var);
});})(t_record_2274,dataset1262_2275))
;
mikron.test.interp_t_record.cljs$lang$test = ((function (t_record_2274,dataset1262_2275){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_record_2274,dataset1262_2275);
});})(t_record_2274,dataset1262_2275))
;

mikron.test.interp_t_record.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_record;},new cljs.core.Symbol("mikron.test","interp-t-record","mikron.test/interp-t-record",(2118438570),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-record","interp-t-record",(-1052468),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_record)?mikron.test.interp_t_record.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_boolean_2286 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer2039){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer2039))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_boolean.call(null,buffer2039);
}
}),(function (value2040){
return cljs.core.any_QMARK_.call(null,value2040);
}),(function (value_12042,value_22043){
return value_22043;
}),(function (){
return ((0.5) < mikron.util.math.rand.call(null));
}),(function (buffer2044){
return mikron.buffer._QMARK_boolean.call(null,buffer2044);
}),(function (value_12046,value_22047,prefer_first_QMARK_2048,time_factor2049){
if(cljs.core.truth_(prefer_first_QMARK_2048)){
return value_12046;
} else {
return value_22047;
}
}),(function (value2050,buffer2051){
var value_dnil_QMARK_2052 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value2050);
mikron.buffer._BANG_boolean.call(null,buffer2051,value_dnil_QMARK_2052);

if(value_dnil_QMARK_2052){
return null;
} else {
return mikron.buffer._BANG_boolean.call(null,buffer2051,value2050);
}
}),(function (value2053,buffer2054){
return mikron.buffer._BANG_boolean.call(null,buffer2054,value2053);
}),(function (value_12056,value_22057){
return value_22057;
})]),null,null,null));
})();
var dataset1262_2287 = cljs.core.repeatedly.call(null,(100),((function (t_boolean_2286){
return (function (){
return mikron.core.gen.call(null,t_boolean_2286);
});})(t_boolean_2286))
);
mikron.test.pack_t_boolean = ((function (t_boolean_2286,dataset1262_2287){
return (function mikron$test$pack_t_boolean(){
return cljs.test.test_var.call(null,mikron.test.pack_t_boolean.cljs$lang$var);
});})(t_boolean_2286,dataset1262_2287))
;
mikron.test.pack_t_boolean.cljs$lang$test = ((function (t_boolean_2286,dataset1262_2287){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_boolean_2286,dataset1262_2287);
});})(t_boolean_2286,dataset1262_2287))
;

mikron.test.pack_t_boolean.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_boolean;},new cljs.core.Symbol("mikron.test","pack-t-boolean","mikron.test/pack-t-boolean",(-806752595),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-boolean","pack-t-boolean",(1284560015),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_boolean)?mikron.test.pack_t_boolean.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_boolean = ((function (t_boolean_2286,dataset1262_2287){
return (function mikron$test$diff_t_boolean(){
return cljs.test.test_var.call(null,mikron.test.diff_t_boolean.cljs$lang$var);
});})(t_boolean_2286,dataset1262_2287))
;
mikron.test.diff_t_boolean.cljs$lang$test = ((function (t_boolean_2286,dataset1262_2287){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_boolean_2286,dataset1262_2287);
});})(t_boolean_2286,dataset1262_2287))
;

mikron.test.diff_t_boolean.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_boolean;},new cljs.core.Symbol("mikron.test","diff-t-boolean","mikron.test/diff-t-boolean",(1327378180),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-boolean","diff-t-boolean",(-811136726),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_boolean)?mikron.test.diff_t_boolean.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_boolean = ((function (t_boolean_2286,dataset1262_2287){
return (function mikron$test$valid_QMARK__t_boolean(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_boolean.cljs$lang$var);
});})(t_boolean_2286,dataset1262_2287))
;
mikron.test.valid_QMARK__t_boolean.cljs$lang$test = ((function (t_boolean_2286,dataset1262_2287){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_boolean_2286,dataset1262_2287);
});})(t_boolean_2286,dataset1262_2287))
;

mikron.test.valid_QMARK__t_boolean.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_boolean;},new cljs.core.Symbol("mikron.test","valid?-t-boolean","mikron.test/valid?-t-boolean",(-2116054752),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-boolean","valid?-t-boolean",(1048005382),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_boolean)?mikron.test.valid_QMARK__t_boolean.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_boolean = ((function (t_boolean_2286,dataset1262_2287){
return (function mikron$test$interp_t_boolean(){
return cljs.test.test_var.call(null,mikron.test.interp_t_boolean.cljs$lang$var);
});})(t_boolean_2286,dataset1262_2287))
;
mikron.test.interp_t_boolean.cljs$lang$test = ((function (t_boolean_2286,dataset1262_2287){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_boolean_2286,dataset1262_2287);
});})(t_boolean_2286,dataset1262_2287))
;

mikron.test.interp_t_boolean.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_boolean;},new cljs.core.Symbol("mikron.test","interp-t-boolean","mikron.test/interp-t-boolean",(403557070),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-boolean","interp-t-boolean",(-1721429780),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_boolean)?mikron.test.interp_t_boolean.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_keyword_2288 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer2058){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer2058))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.util.schema.string__GT_keyword.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer2058)));
}
}),(function (value2059){
return (value2059 instanceof cljs.core.Keyword);
}),(function (value_12061,value_22062){
return value_22062;
}),(function (){
return mikron.util.schema.string__GT_keyword.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var coll2085 = cljs.core.PersistentVector.EMPTY;
var n2086 = (4);
var n2086__$1 = cljs.core.long$.call(null,n2086);
var coll2085__$1 = cljs.core.transient$.call(null,coll2085);
while(true){
if(((0) === n2086__$1)){
return cljs.core.persistent_BANG_.call(null,coll2085__$1);
} else {
var G__2290 = (n2086__$1 - (1));
var G__2291 = cljs.core.conj_BANG_.call(null,coll2085__$1,cljs.core.char$.call(null,mikron.util.math.rand_long.call(null,(500))));
n2086__$1 = G__2290;
coll2085__$1 = G__2291;
continue;
}
break;
}
})()));
}),(function (buffer2063){
return mikron.util.schema.string__GT_keyword.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer2063)));
}),(function (value_12065,value_22066,prefer_first_QMARK_2067,time_factor2068){
var value_1_SINGLEQUOTE_2069 = mikron.util.schema.keyword__GT_string.call(null,value_12065);
var value_2_SINGLEQUOTE_2070 = mikron.util.schema.keyword__GT_string.call(null,value_22066);
return mikron.util.schema.string__GT_keyword.call(null,(function (){var value_1_SINGLEQUOTE_2071 = mikron.util.schema.string__GT_binary.call(null,value_1_SINGLEQUOTE_2069);
var value_2_SINGLEQUOTE_2072 = mikron.util.schema.string__GT_binary.call(null,value_2_SINGLEQUOTE_2070);
return mikron.util.schema.binary__GT_string.call(null,(cljs.core.truth_(prefer_first_QMARK_2067)?value_1_SINGLEQUOTE_2071:value_2_SINGLEQUOTE_2072));
})());
}),(function (value2073,buffer2074){
var value_dnil_QMARK_2075 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value2073);
mikron.buffer._BANG_boolean.call(null,buffer2074,value_dnil_QMARK_2075);

if(value_dnil_QMARK_2075){
return null;
} else {
var value_SINGLEQUOTE_2076 = mikron.util.schema.keyword__GT_string.call(null,value2073);
var value_SINGLEQUOTE_2077 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_2076);
return mikron.buffer._BANG_binary.call(null,buffer2074,value_SINGLEQUOTE_2077);
}
}),(function (value2078,buffer2079){
var value_SINGLEQUOTE_2080 = mikron.util.schema.keyword__GT_string.call(null,value2078);
var value_SINGLEQUOTE_2081 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_2080);
return mikron.buffer._BANG_binary.call(null,buffer2079,value_SINGLEQUOTE_2081);
}),(function (value_12083,value_22084){
return value_22084;
})]),null,null,null));
})();
var dataset1262_2289 = cljs.core.repeatedly.call(null,(100),((function (t_keyword_2288){
return (function (){
return mikron.core.gen.call(null,t_keyword_2288);
});})(t_keyword_2288))
);
mikron.test.pack_t_keyword = ((function (t_keyword_2288,dataset1262_2289){
return (function mikron$test$pack_t_keyword(){
return cljs.test.test_var.call(null,mikron.test.pack_t_keyword.cljs$lang$var);
});})(t_keyword_2288,dataset1262_2289))
;
mikron.test.pack_t_keyword.cljs$lang$test = ((function (t_keyword_2288,dataset1262_2289){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_keyword_2288,dataset1262_2289);
});})(t_keyword_2288,dataset1262_2289))
;

mikron.test.pack_t_keyword.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_keyword;},new cljs.core.Symbol("mikron.test","pack-t-keyword","mikron.test/pack-t-keyword",(-2072318401),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-keyword","pack-t-keyword",(93571165),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_keyword)?mikron.test.pack_t_keyword.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_keyword = ((function (t_keyword_2288,dataset1262_2289){
return (function mikron$test$diff_t_keyword(){
return cljs.test.test_var.call(null,mikron.test.diff_t_keyword.cljs$lang$var);
});})(t_keyword_2288,dataset1262_2289))
;
mikron.test.diff_t_keyword.cljs$lang$test = ((function (t_keyword_2288,dataset1262_2289){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_keyword_2288,dataset1262_2289);
});})(t_keyword_2288,dataset1262_2289))
;

mikron.test.diff_t_keyword.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_keyword;},new cljs.core.Symbol("mikron.test","diff-t-keyword","mikron.test/diff-t-keyword",(-118378987),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-keyword","diff-t-keyword",(2074640439),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_keyword)?mikron.test.diff_t_keyword.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_keyword = ((function (t_keyword_2288,dataset1262_2289){
return (function mikron$test$valid_QMARK__t_keyword(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_keyword.cljs$lang$var);
});})(t_keyword_2288,dataset1262_2289))
;
mikron.test.valid_QMARK__t_keyword.cljs$lang$test = ((function (t_keyword_2288,dataset1262_2289){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_keyword_2288,dataset1262_2289);
});})(t_keyword_2288,dataset1262_2289))
;

mikron.test.valid_QMARK__t_keyword.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_keyword;},new cljs.core.Symbol("mikron.test","valid?-t-keyword","mikron.test/valid?-t-keyword",(1802800297),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-keyword","valid?-t-keyword",(-337664305),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_keyword)?mikron.test.valid_QMARK__t_keyword.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_keyword = ((function (t_keyword_2288,dataset1262_2289){
return (function mikron$test$interp_t_keyword(){
return cljs.test.test_var.call(null,mikron.test.interp_t_keyword.cljs$lang$var);
});})(t_keyword_2288,dataset1262_2289))
;
mikron.test.interp_t_keyword.cljs$lang$test = ((function (t_keyword_2288,dataset1262_2289){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_keyword_2288,dataset1262_2289);
});})(t_keyword_2288,dataset1262_2289))
;

mikron.test.interp_t_keyword.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_keyword;},new cljs.core.Symbol("mikron.test","interp-t-keyword","mikron.test/interp-t-keyword",(1410699309),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-keyword","interp-t-keyword",(-704973105),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_keyword)?mikron.test.interp_t_keyword.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_any_2292 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer2087){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer2087))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.util.schema.string__GT_any.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer2087)));
}
}),(function (value2088){
var value_SINGLEQUOTE_2089 = (function (){try{return mikron.util.schema.any__GT_string.call(null,value2088);
}catch (e2115){if((e2115 instanceof Object)){
var e__4__auto__ = e2115;
return new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662));
} else {
throw e2115;

}
}})();
return (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662)),value_SINGLEQUOTE_2089)) && (typeof value_SINGLEQUOTE_2089 === 'string');
}),(function (value_12091,value_22092){
return value_22092;
}),(function (){
return null;
}),(function (buffer2093){
return mikron.util.schema.string__GT_any.call(null,mikron.util.schema.binary__GT_string.call(null,mikron.buffer._QMARK_binary.call(null,buffer2093)));
}),(function (value_12095,value_22096,prefer_first_QMARK_2097,time_factor2098){
var value_1_SINGLEQUOTE_2099 = mikron.util.schema.any__GT_string.call(null,value_12095);
var value_2_SINGLEQUOTE_2100 = mikron.util.schema.any__GT_string.call(null,value_22096);
return mikron.util.schema.string__GT_any.call(null,(function (){var value_1_SINGLEQUOTE_2101 = mikron.util.schema.string__GT_binary.call(null,value_1_SINGLEQUOTE_2099);
var value_2_SINGLEQUOTE_2102 = mikron.util.schema.string__GT_binary.call(null,value_2_SINGLEQUOTE_2100);
return mikron.util.schema.binary__GT_string.call(null,(cljs.core.truth_(prefer_first_QMARK_2097)?value_1_SINGLEQUOTE_2101:value_2_SINGLEQUOTE_2102));
})());
}),(function (value2103,buffer2104){
var value_dnil_QMARK_2105 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value2103);
mikron.buffer._BANG_boolean.call(null,buffer2104,value_dnil_QMARK_2105);

if(value_dnil_QMARK_2105){
return null;
} else {
var value_SINGLEQUOTE_2106 = mikron.util.schema.any__GT_string.call(null,value2103);
var value_SINGLEQUOTE_2107 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_2106);
return mikron.buffer._BANG_binary.call(null,buffer2104,value_SINGLEQUOTE_2107);
}
}),(function (value2108,buffer2109){
var value_SINGLEQUOTE_2110 = mikron.util.schema.any__GT_string.call(null,value2108);
var value_SINGLEQUOTE_2111 = mikron.util.schema.string__GT_binary.call(null,value_SINGLEQUOTE_2110);
return mikron.buffer._BANG_binary.call(null,buffer2109,value_SINGLEQUOTE_2111);
}),(function (value_12113,value_22114){
return value_22114;
})]),null,null,null));
})();
var dataset1262_2293 = cljs.core.repeatedly.call(null,(100),((function (t_any_2292){
return (function (){
return mikron.core.gen.call(null,t_any_2292);
});})(t_any_2292))
);
mikron.test.pack_t_any = ((function (t_any_2292,dataset1262_2293){
return (function mikron$test$pack_t_any(){
return cljs.test.test_var.call(null,mikron.test.pack_t_any.cljs$lang$var);
});})(t_any_2292,dataset1262_2293))
;
mikron.test.pack_t_any.cljs$lang$test = ((function (t_any_2292,dataset1262_2293){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_any_2292,dataset1262_2293);
});})(t_any_2292,dataset1262_2293))
;

mikron.test.pack_t_any.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_any;},new cljs.core.Symbol("mikron.test","pack-t-any","mikron.test/pack-t-any",(-961429860),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-any","pack-t-any",(1180079298),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_any)?mikron.test.pack_t_any.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_any = ((function (t_any_2292,dataset1262_2293){
return (function mikron$test$diff_t_any(){
return cljs.test.test_var.call(null,mikron.test.diff_t_any.cljs$lang$var);
});})(t_any_2292,dataset1262_2293))
;
mikron.test.diff_t_any.cljs$lang$test = ((function (t_any_2292,dataset1262_2293){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_any_2292,dataset1262_2293);
});})(t_any_2292,dataset1262_2293))
;

mikron.test.diff_t_any.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_any;},new cljs.core.Symbol("mikron.test","diff-t-any","mikron.test/diff-t-any",(-319398601),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-any","diff-t-any",(1818167129),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_any)?mikron.test.diff_t_any.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_any = ((function (t_any_2292,dataset1262_2293){
return (function mikron$test$valid_QMARK__t_any(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_any.cljs$lang$var);
});})(t_any_2292,dataset1262_2293))
;
mikron.test.valid_QMARK__t_any.cljs$lang$test = ((function (t_any_2292,dataset1262_2293){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_any_2292,dataset1262_2293);
});})(t_any_2292,dataset1262_2293))
;

mikron.test.valid_QMARK__t_any.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_any;},new cljs.core.Symbol("mikron.test","valid?-t-any","mikron.test/valid?-t-any",(1485287288),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-any","valid?-t-any",(-648514274),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_any)?mikron.test.valid_QMARK__t_any.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_any = ((function (t_any_2292,dataset1262_2293){
return (function mikron$test$interp_t_any(){
return cljs.test.test_var.call(null,mikron.test.interp_t_any.cljs$lang$var);
});})(t_any_2292,dataset1262_2293))
;
mikron.test.interp_t_any.cljs$lang$test = ((function (t_any_2292,dataset1262_2293){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_any_2292,dataset1262_2293);
});})(t_any_2292,dataset1262_2293))
;

mikron.test.interp_t_any.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_any;},new cljs.core.Symbol("mikron.test","interp-t-any","mikron.test/interp-t-any",(-133926281),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-any","interp-t-any",(2024477781),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_any)?mikron.test.interp_t_any.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_set_2294 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer2116){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer2116))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
var coll2142 = cljs.core.PersistentHashSet.EMPTY;
var n2143 = mikron.buffer._QMARK_varint.call(null,buffer2116);
var n2143__$1 = cljs.core.long$.call(null,n2143);
var coll2142__$1 = cljs.core.transient$.call(null,coll2142);
while(true){
if(((0) === n2143__$1)){
return cljs.core.persistent_BANG_.call(null,coll2142__$1);
} else {
var G__2296 = (n2143__$1 - (1));
var G__2297 = cljs.core.conj_BANG_.call(null,coll2142__$1,(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer2116))?new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)):mikron.buffer._QMARK_short.call(null,buffer2116)));
n2143__$1 = G__2296;
coll2142__$1 = G__2297;
continue;
}
break;
}
}
}),(function (value2117){
return (cljs.core.set_QMARK_.call(null,value2117)) && (cljs.core.every_QMARK_.call(null,(function (value_SINGLEQUOTE_2118){
return (cljs.core.integer_QMARK_.call(null,value_SINGLEQUOTE_2118)) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_2118) >= (-32768))) && ((cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_2118) < (32768)));
}),value2117));
}),(function (value_12120,value_22121){
return value_22121;
}),(function (){
var coll2144 = cljs.core.PersistentHashSet.EMPTY;
var n2145 = (4);
var n2145__$1 = cljs.core.long$.call(null,n2145);
var coll2144__$1 = cljs.core.transient$.call(null,coll2144);
while(true){
if(((0) === n2145__$1)){
return cljs.core.persistent_BANG_.call(null,coll2144__$1);
} else {
var G__2298 = (n2145__$1 - (1));
var G__2299 = cljs.core.conj_BANG_.call(null,coll2144__$1,(function (){var r2122 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r2122 * (32768)) + (((1) - r2122) * (-32768)))));
})());
n2145__$1 = G__2298;
coll2144__$1 = G__2299;
continue;
}
break;
}
}),(function (buffer2123){
var coll2146 = cljs.core.PersistentHashSet.EMPTY;
var n2147 = mikron.buffer._QMARK_varint.call(null,buffer2123);
var n2147__$1 = cljs.core.long$.call(null,n2147);
var coll2146__$1 = cljs.core.transient$.call(null,coll2146);
while(true){
if(((0) === n2147__$1)){
return cljs.core.persistent_BANG_.call(null,coll2146__$1);
} else {
var G__2300 = (n2147__$1 - (1));
var G__2301 = cljs.core.conj_BANG_.call(null,coll2146__$1,mikron.buffer._QMARK_short.call(null,buffer2123));
n2147__$1 = G__2300;
coll2146__$1 = G__2301;
continue;
}
break;
}
}),(function (value_12125,value_22126,prefer_first_QMARK_2127,time_factor2128){
if(cljs.core.truth_(prefer_first_QMARK_2127)){
return value_12125;
} else {
return value_22126;
}
}),(function (value2129,buffer2130){
var value_dnil_QMARK_2131 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value2129);
mikron.buffer._BANG_boolean.call(null,buffer2130,value_dnil_QMARK_2131);

if(value_dnil_QMARK_2131){
return null;
} else {
var length2132 = cljs.core.count.call(null,value2129);
mikron.buffer._BANG_varint.call(null,buffer2130,length2132);

return cljs.core.run_BANG_.call(null,((function (length2132,value_dnil_QMARK_2131){
return (function (value_SINGLEQUOTE_2133){
var value_dnil_QMARK_2134 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value_SINGLEQUOTE_2133);
mikron.buffer._BANG_boolean.call(null,buffer2130,value_dnil_QMARK_2134);

if(value_dnil_QMARK_2134){
return null;
} else {
return mikron.buffer._BANG_short.call(null,buffer2130,value_SINGLEQUOTE_2133);
}
});})(length2132,value_dnil_QMARK_2131))
,value2129);
}
}),(function (value2135,buffer2136){
var length2137 = cljs.core.count.call(null,value2135);
mikron.buffer._BANG_varint.call(null,buffer2136,length2137);

return cljs.core.run_BANG_.call(null,((function (length2137){
return (function (value_SINGLEQUOTE_2138){
return mikron.buffer._BANG_short.call(null,buffer2136,value_SINGLEQUOTE_2138);
});})(length2137))
,value2135);
}),(function (value_12140,value_22141){
return value_22141;
})]),null,null,null));
})();
var dataset1262_2295 = cljs.core.repeatedly.call(null,(100),((function (t_set_2294){
return (function (){
return mikron.core.gen.call(null,t_set_2294);
});})(t_set_2294))
);
mikron.test.pack_t_set = ((function (t_set_2294,dataset1262_2295){
return (function mikron$test$pack_t_set(){
return cljs.test.test_var.call(null,mikron.test.pack_t_set.cljs$lang$var);
});})(t_set_2294,dataset1262_2295))
;
mikron.test.pack_t_set.cljs$lang$test = ((function (t_set_2294,dataset1262_2295){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_set_2294,dataset1262_2295);
});})(t_set_2294,dataset1262_2295))
;

mikron.test.pack_t_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_set;},new cljs.core.Symbol("mikron.test","pack-t-set","mikron.test/pack-t-set",(2002202833),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-set","pack-t-set",(-139979465),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_set)?mikron.test.pack_t_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_set = ((function (t_set_2294,dataset1262_2295){
return (function mikron$test$diff_t_set(){
return cljs.test.test_var.call(null,mikron.test.diff_t_set.cljs$lang$var);
});})(t_set_2294,dataset1262_2295))
;
mikron.test.diff_t_set.cljs$lang$test = ((function (t_set_2294,dataset1262_2295){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_set_2294,dataset1262_2295);
});})(t_set_2294,dataset1262_2295))
;

mikron.test.diff_t_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_set;},new cljs.core.Symbol("mikron.test","diff-t-set","mikron.test/diff-t-set",(-1355599926),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-set","diff-t-set",(781455912),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_set)?mikron.test.diff_t_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_set = ((function (t_set_2294,dataset1262_2295){
return (function mikron$test$valid_QMARK__t_set(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_set.cljs$lang$var);
});})(t_set_2294,dataset1262_2295))
;
mikron.test.valid_QMARK__t_set.cljs$lang$test = ((function (t_set_2294,dataset1262_2295){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_set_2294,dataset1262_2295);
});})(t_set_2294,dataset1262_2295))
;

mikron.test.valid_QMARK__t_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_set;},new cljs.core.Symbol("mikron.test","valid?-t-set","mikron.test/valid?-t-set",(-615940220),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-set","valid?-t-set",(1488070058),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_set)?mikron.test.valid_QMARK__t_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_set = ((function (t_set_2294,dataset1262_2295){
return (function mikron$test$interp_t_set(){
return cljs.test.test_var.call(null,mikron.test.interp_t_set.cljs$lang$var);
});})(t_set_2294,dataset1262_2295))
;
mikron.test.interp_t_set.cljs$lang$test = ((function (t_set_2294,dataset1262_2295){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_set_2294,dataset1262_2295);
});})(t_set_2294,dataset1262_2295))
;

mikron.test.interp_t_set.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_set;},new cljs.core.Symbol("mikron.test","interp-t-set","mikron.test/interp-t-set",(-672523927),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-set","interp-t-set",(1217608843),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_set)?mikron.test.interp_t_set.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

var t_varint_2302 = (function (){return (new mikron.core.Schema(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)),new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),new cljs.core.Keyword(null,"undiff","undiff",(1883196934)),new cljs.core.Keyword(null,"gen","gen",(142575302)),new cljs.core.Keyword(null,"unpack","unpack",(-2027067542)),new cljs.core.Keyword(null,"interp","interp",(1576701107)),new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)),new cljs.core.Keyword(null,"pack","pack",(-1240257891)),new cljs.core.Keyword(null,"diff","diff",(2135942783))],[(function (buffer1283){
if(cljs.core.truth_(mikron.buffer._QMARK_boolean.call(null,buffer1283))){
return new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470));
} else {
return mikron.buffer._QMARK_varint.call(null,buffer1283);
}
}),(function (value1284){
return (cljs.core.integer_QMARK_.call(null,value1284)) && ((cljs.core.unchecked_long.call(null,value1284) >= (-9223372036854776000))) && ((cljs.core.unchecked_long.call(null,value1284) < (9223372036854776000)));
}),(function (value_11286,value_21287){
return value_21287;
}),(function (){
var r1288 = mikron.util.math.rand.call(null);
return cljs.core.unchecked_long.call(null,mikron.util.math.floor.call(null,((r1288 * (9223372036854776000)) + (((1) - r1288) * (-9223372036854776000)))));
}),(function (buffer1289){
return mikron.buffer._QMARK_varint.call(null,buffer1289);
}),(function (value_11291,value_21292,prefer_first_QMARK_1293,time_factor1294){
return mikron.util.math.round.call(null,mikron.util.math.interp.call(null,value_11291,value_21292,time_factor1294));
}),(function (value1295,buffer1296){
var value_dnil_QMARK_1297 = (new cljs.core.Keyword("mikron","dnil","mikron/dnil",(-1119699470)) === value1295);
mikron.buffer._BANG_boolean.call(null,buffer1296,value_dnil_QMARK_1297);

if(value_dnil_QMARK_1297){
return null;
} else {
return mikron.buffer._BANG_varint.call(null,buffer1296,value1295);
}
}),(function (value1298,buffer1299){
return mikron.buffer._BANG_varint.call(null,buffer1299,value1298);
}),(function (value_11301,value_21302){
return value_21302;
})]),null,null,null));
})();
var dataset1262_2303 = cljs.core.repeatedly.call(null,(100),((function (t_varint_2302){
return (function (){
return mikron.core.gen.call(null,t_varint_2302);
});})(t_varint_2302))
);
mikron.test.pack_t_varint = ((function (t_varint_2302,dataset1262_2303){
return (function mikron$test$pack_t_varint(){
return cljs.test.test_var.call(null,mikron.test.pack_t_varint.cljs$lang$var);
});})(t_varint_2302,dataset1262_2303))
;
mikron.test.pack_t_varint.cljs$lang$test = ((function (t_varint_2302,dataset1262_2303){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"pack","pack",(-1240257891)),t_varint_2302,dataset1262_2303);
});})(t_varint_2302,dataset1262_2303))
;

mikron.test.pack_t_varint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.pack_t_varint;},new cljs.core.Symbol("mikron.test","pack-t-varint","mikron.test/pack-t-varint",(1134036927),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"pack-t-varint","pack-t-varint",(-1060951655),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.pack_t_varint)?mikron.test.pack_t_varint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.diff_t_varint = ((function (t_varint_2302,dataset1262_2303){
return (function mikron$test$diff_t_varint(){
return cljs.test.test_var.call(null,mikron.test.diff_t_varint.cljs$lang$var);
});})(t_varint_2302,dataset1262_2303))
;
mikron.test.diff_t_varint.cljs$lang$test = ((function (t_varint_2302,dataset1262_2303){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)),t_varint_2302,dataset1262_2303);
});})(t_varint_2302,dataset1262_2303))
;

mikron.test.diff_t_varint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.diff_t_varint;},new cljs.core.Symbol("mikron.test","diff-t-varint","mikron.test/diff-t-varint",(-2075180298),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"diff-t-varint","diff-t-varint",(120068120),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.diff_t_varint)?mikron.test.diff_t_varint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.valid_QMARK__t_varint = ((function (t_varint_2302,dataset1262_2303){
return (function mikron$test$valid_QMARK__t_varint(){
return cljs.test.test_var.call(null,mikron.test.valid_QMARK__t_varint.cljs$lang$var);
});})(t_varint_2302,dataset1262_2303))
;
mikron.test.valid_QMARK__t_varint.cljs$lang$test = ((function (t_varint_2302,dataset1262_2303){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)),t_varint_2302,dataset1262_2303);
});})(t_varint_2302,dataset1262_2303))
;

mikron.test.valid_QMARK__t_varint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.valid_QMARK__t_varint;},new cljs.core.Symbol("mikron.test","valid?-t-varint","mikron.test/valid?-t-varint",(-1425497772),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"valid?-t-varint","valid?-t-varint",(737114994),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.valid_QMARK__t_varint)?mikron.test.valid_QMARK__t_varint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));

mikron.test.interp_t_varint = ((function (t_varint_2302,dataset1262_2303){
return (function mikron$test$interp_t_varint(){
return cljs.test.test_var.call(null,mikron.test.interp_t_varint.cljs$lang$var);
});})(t_varint_2302,dataset1262_2303))
;
mikron.test.interp_t_varint.cljs$lang$test = ((function (t_varint_2302,dataset1262_2303){
return (function (){
return mikron.test_macros.test_mikron.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)),t_varint_2302,dataset1262_2303);
});})(t_varint_2302,dataset1262_2303))
;

mikron.test.interp_t_varint.cljs$lang$var = new cljs.core.Var(function(){return mikron.test.interp_t_varint;},new cljs.core.Symbol("mikron.test","interp-t-varint","mikron.test/interp-t-varint",(1070445055),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"mikron/test.cljc",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"mikron.test","mikron.test",(-1453100653),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(6),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"interp-t-varint","interp-t-varint",(-1088070695),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(mikron.test.interp_t_varint)?mikron.test.interp_t_varint.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null));
