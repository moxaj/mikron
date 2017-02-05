goog.provide("mikron.util.schema");
/**
 * Converts an edn value `x` to a string.
 */
mikron.util.schema.any__GT_string = (function mikron$util$schema$any__GT_string(x){
return cljs.core.pr_str.call(null,x);
});
/**
 * Converts a string `s` to an edn value.
 */
mikron.util.schema.string__GT_any = (function mikron$util$schema$string__GT_any(s){
return cljs.tools.reader.read_string.call(null,s);
});
/**
 * Converts a keyword `x` to a string.
 */
mikron.util.schema.keyword__GT_string = (function mikron$util$schema$keyword__GT_string(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1));
});
/**
 * Converts a string `s` to a keyword.
 */
mikron.util.schema.string__GT_keyword = (function mikron$util$schema$string__GT_keyword(s){
return cljs.core.keyword.call(null,s);
});
/**
 * Converts a character `c` to an int.
 */
mikron.util.schema.char__GT_int = (function mikron$util$schema$char__GT_int(c){
return c.charCodeAt((0));
});
/**
 * Converts an int `n` to a char.
 */
mikron.util.schema.int__GT_char = (function mikron$util$schema$int__GT_char(n){
return String.fromCharCode(n);
});
/**
 * Converts a string `s` to a binary value.
 */
mikron.util.schema.string__GT_binary = (function mikron$util$schema$string__GT_binary(s){
var chars = unescape(encodeURIComponent(s)).split("");
var array = [];
var n__25765__auto___22 = chars.length;
var i_23 = (0);
while(true){
if((i_23 < n__25765__auto___22)){
array.push((chars[i_23]).charCodeAt((0)));

var G__24 = (i_23 + (1));
i_23 = G__24;
continue;
} else {
}
break;
}

return (new Uint8Array(array)).buffer;
});
/**
 * Converts a binary value `x` to a string.
 */
mikron.util.schema.binary__GT_string = (function mikron$util$schema$binary__GT_string(x){
return decodeURIComponent(escape(String.fromCharCode.apply(null,(new Uint8Array(x)))));
});
/**
 * Converts a double `x` to a float.
 */
mikron.util.schema.double__GT_float = (function mikron$util$schema$double__GT_float(x){
return Math.fround(x);
});
/**
 * Converts a byte sequence to a binary value.
 */
mikron.util.schema.byte_seq__GT_binary = (function mikron$util$schema$byte_seq__GT_binary(byte_seq){
return (new Int8Array(cljs.core.apply.call(null,cljs.core.array,byte_seq))).buffer;
});
/**
 * Returns `true` if `x` is a binary value, `false` otherwise.
 */
mikron.util.schema.binary_QMARK_ = (function mikron$util$schema$binary_QMARK_(x){
return (x instanceof ArrayBuffer);
});
mikron.util.schema.keyword_identical_QMARK_ = (function mikron$util$schema$keyword_identical_QMARK_(value_1,value_2){
return cljs.core.keyword_identical_QMARK_.call(null,value_1,value_2);
});
