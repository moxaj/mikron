goog.provide("mikron.util.math");
/**
 * Returns a random double value.
 */
mikron.util.math.rand = (function mikron$util$math$rand(){
return Math.random();
});
/**
 * Raises `x` to `y`.
 */
mikron.util.math.pow = (function mikron$util$math$pow(x,y){
return Math.pow(x,y);
});
/**
 * Returns the floor of `x`.
 */
mikron.util.math.floor = (function mikron$util$math$floor(x){
return Math.floor(x);
});
/**
 * Returns the absolute value of `x`.
 */
mikron.util.math.abs = (function mikron$util$math$abs(x){
return Math.abs(x);
});
/**
 * Rounds `x`.
 */
mikron.util.math.round = (function mikron$util$math$round(x){
return Math.round(x);
});
/**
 * Calculates a new value via linear interpolation.
 */
mikron.util.math.interp = (function mikron$util$math$interp(x,y,f){
return ((x + (f * y)) - (f * x));
});
/**
 * Returns a random long value in range from 0 (inclusive) to `n` (exclusive).
 */
mikron.util.math.rand_long = (function mikron$util$math$rand_long(n){
return cljs.core.unchecked_long.call(null,(n * mikron.util.math.rand.call(null)));
});
/**
 * Creates a new long value.
 */
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
});

mikron.util.math.from.cljs$core$IFn$_invoke$arity$1 = (function (x){
return goog.math.Long.fromNumber(x);
});

mikron.util.math.from.cljs$core$IFn$_invoke$arity$2 = (function (low,high){
return goog.math.Long.fromBits(low,high);
});

mikron.util.math.from.cljs$lang$maxFixedArity = (2);

/**
 * The constant long 0.
 */
mikron.util.math.c0 = mikron.util.math.from.call(null,(0));
/**
 * The constant long 1.
 */
mikron.util.math.c1 = mikron.util.math.from.call(null,(1));
/**
 * The constant long 127.
 */
mikron.util.math.c127 = mikron.util.math.from.call(null,(127));
/**
 * The constant long 128.
 */
mikron.util.math.c128 = mikron.util.math.from.call(null,(128));
/**
 * The constant long -128.
 */
mikron.util.math.c_128 = mikron.util.math.from.call(null,(-128));
/**
 * Converts a number `x` to a long.
 */
mikron.util.math.to = (function mikron$util$math$to(x){
return x.toNumber();
});
/**
 * Returns `true` if a long `x` is zero, `false` otherwise.
 */
mikron.util.math.zero_QMARK_ = (function mikron$util$math$zero_QMARK_(x){
return x.isZero();
});
/**
 * Performs the bitwise AND operation on two longs `x` and `y`.
 */
mikron.util.math.and = (function mikron$util$math$and(x,y){
return x.and(y);
});
/**
 * Performs the bitwise OR operation on two longs `x` and `y`.
 */
mikron.util.math.or = (function mikron$util$math$or(x,y){
return x.or(y);
});
/**
 * Performs the bitwise XOR operation on two longs `x` and `y`.
 */
mikron.util.math.xor = (function mikron$util$math$xor(x,y){
return x.xor(y);
});
/**
 * Performs the bitwise NOT operation on a long `x`.
 */
mikron.util.math.not = (function mikron$util$math$not(x){
return x.not();
});
/**
 * Negates a long `x`.
 */
mikron.util.math.negate = (function mikron$util$math$negate(x){
return x.negate();
});
/**
 * Arithmetically shifts the bits of a long `x` to the left by `n`.
 */
mikron.util.math.shift_left = (function mikron$util$math$shift_left(x,n){
return x.shiftLeft(n);
});
/**
 * Arithmetically shifts the bits of a long `x` to the right by `n`.
 */
mikron.util.math.shift_right = (function mikron$util$math$shift_right(x,n){
return x.shiftRight(n);
});
/**
 * Logically shifts the bits of a long `x` to the right by `n`.
 */
mikron.util.math.unsigned_shift_right = (function mikron$util$math$unsigned_shift_right(x,n){
return x.shiftRightUnsigned(n);
});
/**
 * Zigzag encodes a long `x`.
 */
mikron.util.math.zigzag_encode = (function mikron$util$math$zigzag_encode(x){
return mikron.util.math.xor.call(null,mikron.util.math.shift_right.call(null,x,(63)),mikron.util.math.shift_left.call(null,x,(1)));
});
/**
 * Zigzag decodes a long `x`.
 */
mikron.util.math.zigzag_decode = (function mikron$util$math$zigzag_decode(x){
return mikron.util.math.xor.call(null,mikron.util.math.unsigned_shift_right.call(null,x,(1)),mikron.util.math.negate.call(null,mikron.util.math.and.call(null,x,mikron.util.math.c1)));
});
/**
 * Returns the lower bound for an integer value.
 */
mikron.util.math.lower_bound = (function mikron$util$math$lower_bound(bytes,signed_QMARK_){
if(cljs.core.truth_(signed_QMARK_)){
return (- mikron.util.math.pow.call(null,(2),((bytes * (8)) - (1))));
} else {
return (0);
}
});
/**
 * Returns the upper bound for an integer value.
 */
mikron.util.math.upper_bound = (function mikron$util$math$upper_bound(bytes,signed_QMARK_){
var m = mikron.util.math.pow.call(null,(2),(bytes * (8)));
if(cljs.core.truth_(signed_QMARK_)){
return (m / (2));
} else {
return m;
}
});
