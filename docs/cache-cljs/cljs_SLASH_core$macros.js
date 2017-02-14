// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants false, :target :nodejs}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19505 = arguments.length;
var i__8980__auto___19506 = (0);
while(true){
if((i__8980__auto___19506 < len__8979__auto___19505)){
args__8986__auto__.push((arguments[i__8980__auto___19506]));

var G__19507 = (i__8980__auto___19506 + (1));
i__8980__auto___19506 = G__19507;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__8692__auto__ = form;
return cljs.core._conj((function (){var x__8692__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})());
var G__19508 = threaded;
var G__19509 = cljs.core.next(forms__$1);
x__$1 = G__19508;
forms__$1 = G__19509;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19501){
var G__19502 = cljs.core.first(seq19501);
var seq19501__$1 = cljs.core.next(seq19501);
var G__19503 = cljs.core.first(seq19501__$1);
var seq19501__$2 = cljs.core.next(seq19501__$1);
var G__19504 = cljs.core.first(seq19501__$2);
var seq19501__$3 = cljs.core.next(seq19501__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19502,G__19503,G__19504,seq19501__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19514 = arguments.length;
var i__8980__auto___19515 = (0);
while(true){
if((i__8980__auto___19515 < len__8979__auto___19514)){
args__8986__auto__.push((arguments[i__8980__auto___19515]));

var G__19516 = (i__8980__auto___19515 + (1));
i__8980__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.next(form),cljs.core.array_seq([(function (){var x__8692__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__8692__auto__ = form;
return cljs.core._conj((function (){var x__8692__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})());
var G__19517 = threaded;
var G__19518 = cljs.core.next(forms__$1);
x__$1 = G__19517;
forms__$1 = G__19518;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19510){
var G__19511 = cljs.core.first(seq19510);
var seq19510__$1 = cljs.core.next(seq19510);
var G__19512 = cljs.core.first(seq19510__$1);
var seq19510__$2 = cljs.core.next(seq19510__$1);
var G__19513 = cljs.core.first(seq19510__$2);
var seq19510__$3 = cljs.core.next(seq19510__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19511,G__19512,G__19513,seq19510__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args19519 = [];
var len__8979__auto___19527 = arguments.length;
var i__8980__auto___19528 = (0);
while(true){
if((i__8980__auto___19528 < len__8979__auto___19527)){
args19519.push((arguments[i__8980__auto___19528]));

var G__19529 = (i__8980__auto___19528 + (1));
i__8980__auto___19528 = G__19529;
continue;
} else {
}
break;
}

var G__19526 = args19519.length;
switch (G__19526) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args19519.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19520){
var G__19521 = cljs.core.first(seq19520);
var seq19520__$1 = cljs.core.next(seq19520);
var G__19522 = cljs.core.first(seq19520__$1);
var seq19520__$2 = cljs.core.next(seq19520__$1);
var G__19523 = cljs.core.first(seq19520__$2);
var seq19520__$3 = cljs.core.next(seq19520__$2);
var G__19524 = cljs.core.first(seq19520__$3);
var seq19520__$4 = cljs.core.next(seq19520__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19521,G__19522,G__19523,G__19524,seq19520__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19534 = arguments.length;
var i__8980__auto___19535 = (0);
while(true){
if((i__8980__auto___19535 < len__8979__auto___19534)){
args__8986__auto__.push((arguments[i__8980__auto___19535]));

var G__19536 = (i__8980__auto___19535 + (1));
i__8980__auto___19535 = G__19536;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19531){
var G__19532 = cljs.core.first(seq19531);
var seq19531__$1 = cljs.core.next(seq19531);
var G__19533 = cljs.core.first(seq19531__$1);
var seq19531__$2 = cljs.core.next(seq19531__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19532,G__19533,seq19531__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19540 = arguments.length;
var i__8980__auto___19541 = (0);
while(true){
if((i__8980__auto___19541 < len__8979__auto___19540)){
args__8986__auto__.push((arguments[i__8980__auto___19541]));

var G__19542 = (i__8980__auto___19541 + (1));
i__8980__auto___19541 = G__19542;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__8692__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__8692__auto____$2 = cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19537){
var G__19538 = cljs.core.first(seq19537);
var seq19537__$1 = cljs.core.next(seq19537);
var G__19539 = cljs.core.first(seq19537__$1);
var seq19537__$2 = cljs.core.next(seq19537__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19538,G__19539,seq19537__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19547 = arguments.length;
var i__8980__auto___19548 = (0);
while(true){
if((i__8980__auto___19548 < len__8979__auto___19547)){
args__8986__auto__.push((arguments[i__8980__auto___19548]));

var G__19549 = (i__8980__auto___19548 + (1));
i__8980__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19543_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__19543_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19544){
var G__19545 = cljs.core.first(seq19544);
var seq19544__$1 = cljs.core.next(seq19544);
var G__19546 = cljs.core.first(seq19544__$1);
var seq19544__$2 = cljs.core.next(seq19544__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19545,G__19546,seq19544__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19554 = arguments.length;
var i__8980__auto___19555 = (0);
while(true){
if((i__8980__auto___19555 < len__8979__auto___19554)){
args__8986__auto__.push((arguments[i__8980__auto___19555]));

var G__19556 = (i__8980__auto___19555 + (1));
i__8980__auto___19555 = G__19556;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__8692__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19550){
var G__19551 = cljs.core.first(seq19550);
var seq19550__$1 = cljs.core.next(seq19550);
var G__19552 = cljs.core.first(seq19550__$1);
var seq19550__$2 = cljs.core.next(seq19550__$1);
var G__19553 = cljs.core.first(seq19550__$2);
var seq19550__$3 = cljs.core.next(seq19550__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19551,G__19552,G__19553,seq19550__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__19557 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__19558 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__19557;
s = G__19558;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__19563){
var vec__19564 = p__19563;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19564,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19564,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19571 = arguments.length;
var i__8980__auto___19572 = (0);
while(true){
if((i__8980__auto___19572 < len__8979__auto___19571)){
args__8986__auto__.push((arguments[i__8980__auto___19572]));

var G__19573 = (i__8980__auto___19572 + (1));
i__8980__auto___19572 = G__19573;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19567){
var G__19568 = cljs.core.first(seq19567);
var seq19567__$1 = cljs.core.next(seq19567);
var G__19569 = cljs.core.first(seq19567__$1);
var seq19567__$2 = cljs.core.next(seq19567__$1);
var G__19570 = cljs.core.first(seq19567__$2);
var seq19567__$3 = cljs.core.next(seq19567__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19568,G__19569,G__19570,seq19567__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__19574 = cljs.core.next(params__$1);
var G__19575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__19576 = lets;
params__$1 = G__19574;
new_params = G__19575;
lets = G__19576;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__19577 = cljs.core.next(params__$1);
var G__19578 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__19579 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__19577;
new_params = G__19578;
lets = G__19579;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19586 = arguments.length;
var i__8980__auto___19587 = (0);
while(true){
if((i__8980__auto___19587 < len__8979__auto___19586)){
args__8986__auto__.push((arguments[i__8980__auto___19587]));

var G__19588 = (i__8980__auto___19587 + (1));
i__8980__auto___19587 = G__19588;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__8692__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__19583 = sig;
var seq__19584 = cljs.core.seq(vec__19583);
var first__19585 = cljs.core.first(seq__19584);
var seq__19584__$1 = cljs.core.next(seq__19584);
var params = first__19585;
var body = seq__19584__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__7758__auto__ = conds;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__8692__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19583,seq__19584,first__19585,seq__19584__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(vec__19583,seq__19584,first__19585,seq__19584__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19583,seq__19584,first__19585,seq__19584__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(vec__19583,seq__19584,first__19585,seq__19584__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19580){
var G__19581 = cljs.core.first(seq19580);
var seq19580__$1 = cljs.core.next(seq19580);
var G__19582 = cljs.core.first(seq19580__$1);
var seq19580__$2 = cljs.core.next(seq19580__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19581,G__19582,seq19580__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19593 = arguments.length;
var i__8980__auto___19594 = (0);
while(true){
if((i__8980__auto___19594 < len__8979__auto___19593)){
args__8986__auto__.push((arguments[i__8980__auto___19594]));

var G__19595 = (i__8980__auto___19594 + (1));
i__8980__auto___19594 = G__19595;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19589){
var G__19590 = cljs.core.first(seq19589);
var seq19589__$1 = cljs.core.next(seq19589);
var G__19591 = cljs.core.first(seq19589__$1);
var seq19589__$2 = cljs.core.next(seq19589__$1);
var G__19592 = cljs.core.first(seq19589__$2);
var seq19589__$3 = cljs.core.next(seq19589__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19590,G__19591,G__19592,seq19589__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args19597 = [];
var len__8979__auto___19606 = arguments.length;
var i__8980__auto___19607 = (0);
while(true){
if((i__8980__auto___19607 < len__8979__auto___19606)){
args19597.push((arguments[i__8980__auto___19607]));

var G__19608 = (i__8980__auto___19607 + (1));
i__8980__auto___19607 = G__19608;
continue;
} else {
}
break;
}

var G__19605 = args19597.length;
switch (G__19605) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args19597.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19596__auto__","temp__19596__auto__",-1490185008,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19596__auto__","temp__19596__auto__",-1490185008,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19596__auto__","temp__19596__auto__",-1490185008,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19598){
var G__19599 = cljs.core.first(seq19598);
var seq19598__$1 = cljs.core.next(seq19598);
var G__19600 = cljs.core.first(seq19598__$1);
var seq19598__$2 = cljs.core.next(seq19598__$1);
var G__19601 = cljs.core.first(seq19598__$2);
var seq19598__$3 = cljs.core.next(seq19598__$2);
var G__19602 = cljs.core.first(seq19598__$3);
var seq19598__$4 = cljs.core.next(seq19598__$3);
var G__19603 = cljs.core.first(seq19598__$4);
var seq19598__$5 = cljs.core.next(seq19598__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19599,G__19600,G__19601,G__19602,G__19603,seq19598__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args19610 = [];
var len__8979__auto___19613 = arguments.length;
var i__8980__auto___19614 = (0);
while(true){
if((i__8980__auto___19614 < len__8979__auto___19613)){
args19610.push((arguments[i__8980__auto___19614]));

var G__19615 = (i__8980__auto___19614 + (1));
i__8980__auto___19614 = G__19615;
continue;
} else {
}
break;
}

var G__19612 = args19610.length;
switch (G__19612) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args19610.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19622 = arguments.length;
var i__8980__auto___19623 = (0);
while(true){
if((i__8980__auto___19623 < len__8979__auto___19622)){
args__8986__auto__.push((arguments[i__8980__auto___19623]));

var G__19624 = (i__8980__auto___19623 + (1));
i__8980__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19617_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__19617_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19618){
var G__19619 = cljs.core.first(seq19618);
var seq19618__$1 = cljs.core.next(seq19618);
var G__19620 = cljs.core.first(seq19618__$1);
var seq19618__$2 = cljs.core.next(seq19618__$1);
var G__19621 = cljs.core.first(seq19618__$2);
var seq19618__$3 = cljs.core.next(seq19618__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19619,G__19620,G__19621,seq19618__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19629 = arguments.length;
var i__8980__auto___19630 = (0);
while(true){
if((i__8980__auto___19630 < len__8979__auto___19629)){
args__8986__auto__.push((arguments[i__8980__auto___19630]));

var G__19631 = (i__8980__auto___19630 + (1));
i__8980__auto___19630 = G__19631;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19625){
var G__19626 = cljs.core.first(seq19625);
var seq19625__$1 = cljs.core.next(seq19625);
var G__19627 = cljs.core.first(seq19625__$1);
var seq19625__$2 = cljs.core.next(seq19625__$1);
var G__19628 = cljs.core.first(seq19625__$2);
var seq19625__$3 = cljs.core.next(seq19625__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19626,G__19627,G__19628,seq19625__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19636 = arguments.length;
var i__8980__auto___19637 = (0);
while(true){
if((i__8980__auto___19637 < len__8979__auto___19636)){
args__8986__auto__.push((arguments[i__8980__auto___19637]));

var G__19638 = (i__8980__auto___19637 + (1));
i__8980__auto___19637 = G__19638;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19632){
var G__19633 = cljs.core.first(seq19632);
var seq19632__$1 = cljs.core.next(seq19632);
var G__19634 = cljs.core.first(seq19632__$1);
var seq19632__$2 = cljs.core.next(seq19632__$1);
var G__19635 = cljs.core.first(seq19632__$2);
var seq19632__$3 = cljs.core.next(seq19632__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19633,G__19634,G__19635,seq19632__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19647 = arguments.length;
var i__8980__auto___19648 = (0);
while(true){
if((i__8980__auto___19648 < len__8979__auto___19647)){
args__8986__auto__.push((arguments[i__8980__auto___19648]));

var G__19649 = (i__8980__auto___19648 + (1));
i__8980__auto___19648 = G__19649;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__19644 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19639__auto__","xs__19639__auto__",-1443600024,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19639__auto__","xs__19639__auto__",-1443600024,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19640){
var G__19641 = cljs.core.first(seq19640);
var seq19640__$1 = cljs.core.next(seq19640);
var G__19642 = cljs.core.first(seq19640__$1);
var seq19640__$2 = cljs.core.next(seq19640__$1);
var G__19643 = cljs.core.first(seq19640__$2);
var seq19640__$3 = cljs.core.next(seq19640__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19641,G__19642,G__19643,seq19640__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19655 = arguments.length;
var i__8980__auto___19656 = (0);
while(true){
if((i__8980__auto___19656 < len__8979__auto___19655)){
args__8986__auto__.push((arguments[i__8980__auto___19656]));

var G__19657 = (i__8980__auto___19656 + (1));
i__8980__auto___19656 = G__19657;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19650__auto__","temp__19650__auto__",2066253904,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19650__auto__","temp__19650__auto__",2066253904,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19650__auto__","temp__19650__auto__",2066253904,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19651){
var G__19652 = cljs.core.first(seq19651);
var seq19651__$1 = cljs.core.next(seq19651);
var G__19653 = cljs.core.first(seq19651__$1);
var seq19651__$2 = cljs.core.next(seq19651__$1);
var G__19654 = cljs.core.first(seq19651__$2);
var seq19651__$3 = cljs.core.next(seq19651__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19652,G__19653,G__19654,seq19651__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__8986__auto__ = [];
var len__8979__auto___19662 = arguments.length;
var i__8980__auto___19663 = (0);
while(true){
if((i__8980__auto___19663 < len__8979__auto___19662)){
args__8986__auto__.push((arguments[i__8980__auto___19663]));

var G__19664 = (i__8980__auto___19663 + (1));
i__8980__auto___19663 = G__19664;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),null),x__8692__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19658){
var G__19659 = cljs.core.first(seq19658);
var seq19658__$1 = cljs.core.next(seq19658);
var G__19660 = cljs.core.first(seq19658__$1);
var seq19658__$2 = cljs.core.next(seq19658__$1);
var G__19661 = cljs.core.first(seq19658__$2);
var seq19658__$3 = cljs.core.next(seq19658__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19659,G__19660,G__19661,seq19658__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20027 = arguments.length;
var i__8980__auto___20028 = (0);
while(true){
if((i__8980__auto___20028 < len__8979__auto___20027)){
args__8986__auto__.push((arguments[i__8980__auto___20028]));

var G__20029 = (i__8980__auto___20028 + (1));
i__8980__auto___20028 = G__20029;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19665){
var G__19666 = cljs.core.first(seq19665);
var seq19665__$1 = cljs.core.next(seq19665);
var G__19667 = cljs.core.first(seq19665__$1);
var seq19665__$2 = cljs.core.next(seq19665__$1);
var G__19668 = cljs.core.first(seq19665__$2);
var seq19665__$3 = cljs.core.next(seq19665__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19666,G__19667,G__19668,seq19665__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20038 = arguments.length;
var i__8980__auto___20039 = (0);
while(true){
if((i__8980__auto___20039 < len__8979__auto___20038)){
args__8986__auto__.push((arguments[i__8980__auto___20039]));

var G__20040 = (i__8980__auto___20039 + (1));
i__8980__auto___20039 = G__20040;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__20034){
var vec__20035 = p__20034;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq20030){
var G__20031 = cljs.core.first(seq20030);
var seq20030__$1 = cljs.core.next(seq20030);
var G__20032 = cljs.core.first(seq20030__$1);
var seq20030__$2 = cljs.core.next(seq20030__$1);
var G__20033 = cljs.core.first(seq20030__$2);
var seq20030__$3 = cljs.core.next(seq20030__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20031,G__20032,G__20033,seq20030__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20049 = arguments.length;
var i__8980__auto___20050 = (0);
while(true){
if((i__8980__auto___20050 < len__8979__auto___20049)){
args__8986__auto__.push((arguments[i__8980__auto___20050]));

var G__20051 = (i__8980__auto___20050 + (1));
i__8980__auto___20050 = G__20051;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__20045){
var vec__20046 = p__20045;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq20041){
var G__20042 = cljs.core.first(seq20041);
var seq20041__$1 = cljs.core.next(seq20041);
var G__20043 = cljs.core.first(seq20041__$1);
var seq20041__$2 = cljs.core.next(seq20041__$1);
var G__20044 = cljs.core.first(seq20041__$2);
var seq20041__$3 = cljs.core.next(seq20041__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20042,G__20043,G__20044,seq20041__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20057 = arguments.length;
var i__8980__auto___20058 = (0);
while(true){
if((i__8980__auto___20058 < len__8979__auto___20057)){
args__8986__auto__.push((arguments[i__8980__auto___20058]));

var G__20059 = (i__8980__auto___20058 + (1));
i__8980__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq20052){
var G__20053 = cljs.core.first(seq20052);
var seq20052__$1 = cljs.core.next(seq20052);
var G__20054 = cljs.core.first(seq20052__$1);
var seq20052__$2 = cljs.core.next(seq20052__$1);
var G__20055 = cljs.core.first(seq20052__$2);
var seq20052__$3 = cljs.core.next(seq20052__$2);
var G__20056 = cljs.core.first(seq20052__$3);
var seq20052__$4 = cljs.core.next(seq20052__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20053,G__20054,G__20055,G__20056,seq20052__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20064 = arguments.length;
var i__8980__auto___20065 = (0);
while(true){
if((i__8980__auto___20065 < len__8979__auto___20064)){
args__8986__auto__.push((arguments[i__8980__auto___20065]));

var G__20066 = (i__8980__auto___20065 + (1));
i__8980__auto___20065 = G__20066;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq20060){
var G__20061 = cljs.core.first(seq20060);
var seq20060__$1 = cljs.core.next(seq20060);
var G__20062 = cljs.core.first(seq20060__$1);
var seq20060__$2 = cljs.core.next(seq20060__$1);
var G__20063 = cljs.core.first(seq20060__$2);
var seq20060__$3 = cljs.core.next(seq20060__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20061,G__20062,G__20063,seq20060__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20071 = arguments.length;
var i__8980__auto___20072 = (0);
while(true){
if((i__8980__auto___20072 < len__8979__auto___20071)){
args__8986__auto__.push((arguments[i__8980__auto___20072]));

var G__20073 = (i__8980__auto___20072 + (1));
i__8980__auto___20072 = G__20073;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq20067){
var G__20068 = cljs.core.first(seq20067);
var seq20067__$1 = cljs.core.next(seq20067);
var G__20069 = cljs.core.first(seq20067__$1);
var seq20067__$2 = cljs.core.next(seq20067__$1);
var G__20070 = cljs.core.first(seq20067__$2);
var seq20067__$3 = cljs.core.next(seq20067__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20068,G__20069,G__20070,seq20067__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args20075 = [];
var len__8979__auto___20084 = arguments.length;
var i__8980__auto___20085 = (0);
while(true){
if((i__8980__auto___20085 < len__8979__auto___20084)){
args20075.push((arguments[i__8980__auto___20085]));

var G__20086 = (i__8980__auto___20085 + (1));
i__8980__auto___20085 = G__20086;
continue;
} else {
}
break;
}

var G__20083 = args20075.length;
switch (G__20083) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20075.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20074__auto__","temp__20074__auto__",-224736706,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20074__auto__","temp__20074__auto__",-224736706,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20074__auto__","temp__20074__auto__",-224736706,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq20076){
var G__20077 = cljs.core.first(seq20076);
var seq20076__$1 = cljs.core.next(seq20076);
var G__20078 = cljs.core.first(seq20076__$1);
var seq20076__$2 = cljs.core.next(seq20076__$1);
var G__20079 = cljs.core.first(seq20076__$2);
var seq20076__$3 = cljs.core.next(seq20076__$2);
var G__20080 = cljs.core.first(seq20076__$3);
var seq20076__$4 = cljs.core.next(seq20076__$3);
var G__20081 = cljs.core.first(seq20076__$4);
var seq20076__$5 = cljs.core.next(seq20076__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__20077,G__20078,G__20079,G__20080,G__20081,seq20076__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20093 = arguments.length;
var i__8980__auto___20094 = (0);
while(true){
if((i__8980__auto___20094 < len__8979__auto___20093)){
args__8986__auto__.push((arguments[i__8980__auto___20094]));

var G__20095 = (i__8980__auto___20094 + (1));
i__8980__auto___20094 = G__20095;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20088__auto__","temp__20088__auto__",259401925,null)),(function (){var x__8692__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20088__auto__","temp__20088__auto__",259401925,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20088__auto__","temp__20088__auto__",259401925,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq20089){
var G__20090 = cljs.core.first(seq20089);
var seq20089__$1 = cljs.core.next(seq20089);
var G__20091 = cljs.core.first(seq20089__$1);
var seq20089__$2 = cljs.core.next(seq20089__$1);
var G__20092 = cljs.core.first(seq20089__$2);
var seq20089__$3 = cljs.core.next(seq20089__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__20090,G__20091,G__20092,seq20089__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20096_SHARP_){
if(cljs.core.seq_QMARK_(p1__20096_SHARP_)){
return cljs.core.first(p1__20096_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20096_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20096_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__20097_SHARP_){
return cljs.core.vector_QMARK_(p1__20097_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__20098 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__20099 = cljs.core.next(fdecls);
ret = G__20098;
fdecls = G__20099;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__8692__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.array_seq([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.array_seq([cljs.core._conj((function (){var x__8692__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__20127 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__20128 = n;
var G__20129 = cljs.core.nnext(bs);
var G__20130 = true;
ret = G__20127;
n = G__20128;
bs = G__20129;
seen_rest_QMARK_ = G__20130;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__20131 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.array_seq([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8692__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__8692__auto__ = gvec;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__20132 = (n + (1));
var G__20133 = cljs.core.next(bs);
var G__20134 = seen_rest_QMARK_;
ret = G__20131;
n = G__20132;
bs = G__20133;
seen_rest_QMARK_ = G__20134;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20100_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__7758__auto__ = mkns;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.namespace(p1__20100_SHARP_);
}
})(),cljs.core.name(p1__20100_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20101_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__7758__auto__ = mkns;
if(cljs.core.truth_(or__7758__auto__)){
return or__7758__auto__;
} else {
return cljs.core.namespace(p1__20101_SHARP_);
}
})(),cljs.core.name(p1__20101_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__20102_SHARP_,p2__20103_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20102_SHARP_,p2__20103_SHARP_,cljs.core.val(entry).call(null,p2__20103_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.array_seq([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__8692__auto__ = gmap;
return cljs.core._conj((function (){var x__8692__auto____$1 = bk;
return cljs.core._conj((function (){var x__8692__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj((function (){var x__8692__auto__ = gmap;
return cljs.core._conj((function (){var x__8692__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__20135 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.array_seq([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__20136 = cljs.core.next(bes);
ret = G__20135;
bes = G__20136;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding form: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__6751__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__20104_SHARP_){
return (cljs.core.first(p1__20104_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__6751__auto__){
var kwbs = temp__6751__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__8692__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20141 = arguments.length;
var i__8980__auto___20142 = (0);
while(true){
if((i__8980__auto___20142 < len__8979__auto___20141)){
args__8986__auto__.push((arguments[i__8980__auto___20142]));

var G__20143 = (i__8980__auto___20142 + (1));
i__8980__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__8692__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq20137){
var G__20138 = cljs.core.first(seq20137);
var seq20137__$1 = cljs.core.next(seq20137);
var G__20139 = cljs.core.first(seq20137__$1);
var seq20137__$2 = cljs.core.next(seq20137__$1);
var G__20140 = cljs.core.first(seq20137__$2);
var seq20137__$3 = cljs.core.next(seq20137__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__20138,G__20139,G__20140,seq20137__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20420 = arguments.length;
var i__8980__auto___20421 = (0);
while(true){
if((i__8980__auto___20421 < len__8979__auto___20420)){
args__8986__auto__.push((arguments[i__8980__auto___20421]));

var G__20422 = (i__8980__auto___20421 + (1));
i__8980__auto___20421 = G__20422;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__20148){
var vec__20149 = p__20148;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq20144){
var G__20145 = cljs.core.first(seq20144);
var seq20144__$1 = cljs.core.next(seq20144);
var G__20146 = cljs.core.first(seq20144__$1);
var seq20144__$2 = cljs.core.next(seq20144__$1);
var G__20147 = cljs.core.first(seq20144__$2);
var seq20144__$3 = cljs.core.next(seq20144__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__20145,G__20146,G__20147,seq20144__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20458_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20458_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate((function (p__20460){
var vec__20464 = p__20460;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20464,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20464,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20478 = arguments.length;
var i__8980__auto___20479 = (0);
while(true){
if((i__8980__auto___20479 < len__8979__auto___20478)){
args__8986__auto__.push((arguments[i__8980__auto___20479]));

var G__20480 = (i__8980__auto___20479 + (1));
i__8980__auto___20479 = G__20480;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq20474){
var G__20475 = cljs.core.first(seq20474);
var seq20474__$1 = cljs.core.next(seq20474);
var G__20476 = cljs.core.first(seq20474__$1);
var seq20474__$2 = cljs.core.next(seq20474__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__20475,G__20476,seq20474__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__7746__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__7746__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__7746__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args20484 = [];
var len__8979__auto___20721 = arguments.length;
var i__8980__auto___20722 = (0);
while(true){
if((i__8980__auto___20722 < len__8979__auto___20721)){
args20484.push((arguments[i__8980__auto___20722]));

var G__20723 = (i__8980__auto___20722 + (1));
i__8980__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var G__20490 = args20484.length;
switch (G__20490) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20484.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__20481_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__20481_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__20482_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20482_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20483__auto__","and__20483__auto__",-2054499140,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20483__auto__","and__20483__auto__",-2054499140,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20483__auto__","and__20483__auto__",-2054499140,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq20485){
var G__20486 = cljs.core.first(seq20485);
var seq20485__$1 = cljs.core.next(seq20485);
var G__20487 = cljs.core.first(seq20485__$1);
var seq20485__$2 = cljs.core.next(seq20485__$1);
var G__20488 = cljs.core.first(seq20485__$2);
var seq20485__$3 = cljs.core.next(seq20485__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__20486,G__20487,G__20488,seq20485__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args20728 = [];
var len__8979__auto___20735 = arguments.length;
var i__8980__auto___20736 = (0);
while(true){
if((i__8980__auto___20736 < len__8979__auto___20735)){
args20728.push((arguments[i__8980__auto___20736]));

var G__20737 = (i__8980__auto___20736 + (1));
i__8980__auto___20736 = G__20737;
continue;
} else {
}
break;
}

var G__20734 = args20728.length;
switch (G__20734) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20728.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__20725_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__20725_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__20726_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20726_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20727__auto__","or__20727__auto__",-1315168668,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20727__auto__","or__20727__auto__",-1315168668,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20727__auto__","or__20727__auto__",-1315168668,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq20729){
var G__20730 = cljs.core.first(seq20729);
var seq20729__$1 = cljs.core.next(seq20729);
var G__20731 = cljs.core.first(seq20729__$1);
var seq20729__$2 = cljs.core.next(seq20729__$1);
var G__20732 = cljs.core.first(seq20729__$2);
var seq20729__$3 = cljs.core.next(seq20729__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__20730,G__20731,G__20732,seq20729__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.some_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = obj;
return cljs.core._conj((function (){var x__8692__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = key;
return cljs.core._conj((function (){var x__8692__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__8692__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__20747 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__20748 = cljs.core.seq(vec__20747);
var first__20749 = cljs.core.first(seq__20748);
var seq__20748__$1 = cljs.core.next(seq__20748);
var x = first__20749;
var ys = seq__20748__$1;
return cljs.core._conj((function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20747,seq__20748,first__20749,seq__20748__$1,x,ys){
return (function (p1__20743_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__20743_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__20747,seq__20748,first__20749,seq__20748__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj((function (){var x__8692__auto__ = cast_expr;
return cljs.core._conj((function (){var x__8692__auto____$1 = x;
return cljs.core._conj((function (){var x__8692__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20778__auto__","c__20778__auto__",-572806394,null)),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20779__auto__","x__20779__auto__",-1887087279,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20779__auto__","x__20779__auto__",-1887087279,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20778__auto__","c__20778__auto__",-572806394,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args20829 = [];
var len__8979__auto___20853 = arguments.length;
var i__8980__auto___20854 = (0);
while(true){
if((i__8980__auto___20854 < len__8979__auto___20853)){
args20829.push((arguments[i__8980__auto___20854]));

var G__20857 = (i__8980__auto___20854 + (1));
i__8980__auto___20854 = G__20857;
continue;
} else {
}
break;
}

var G__20843 = args20829.length;
switch (G__20843) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20829.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq20830){
var G__20831 = cljs.core.first(seq20830);
var seq20830__$1 = cljs.core.next(seq20830);
var G__20832 = cljs.core.first(seq20830__$1);
var seq20830__$2 = cljs.core.next(seq20830__$1);
var G__20833 = cljs.core.first(seq20830__$2);
var seq20830__$3 = cljs.core.next(seq20830__$2);
var G__20834 = cljs.core.first(seq20830__$3);
var seq20830__$4 = cljs.core.next(seq20830__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__20831,G__20832,G__20833,G__20834,seq20830__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args20864 = [];
var len__8979__auto___20873 = arguments.length;
var i__8980__auto___20874 = (0);
while(true){
if((i__8980__auto___20874 < len__8979__auto___20873)){
args20864.push((arguments[i__8980__auto___20874]));

var G__20875 = (i__8980__auto___20874 + (1));
i__8980__auto___20874 = G__20875;
continue;
} else {
}
break;
}

var G__20872 = args20864.length;
switch (G__20872) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20864.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9002__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj((function (){var x__8692__auto____$1 = i;
return cljs.core._conj((function (){var x__8692__auto____$2 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$2);
})(),x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq20865){
var G__20866 = cljs.core.first(seq20865);
var seq20865__$1 = cljs.core.next(seq20865);
var G__20867 = cljs.core.first(seq20865__$1);
var seq20865__$2 = cljs.core.next(seq20865__$1);
var G__20868 = cljs.core.first(seq20865__$2);
var seq20865__$3 = cljs.core.next(seq20865__$2);
var G__20869 = cljs.core.first(seq20865__$3);
var seq20865__$4 = cljs.core.next(seq20865__$3);
var G__20870 = cljs.core.first(seq20865__$4);
var seq20865__$5 = cljs.core.next(seq20865__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__20866,G__20867,G__20868,G__20869,G__20870,seq20865__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args20882 = [];
var len__8979__auto___20901 = arguments.length;
var i__8980__auto___20902 = (0);
while(true){
if((i__8980__auto___20902 < len__8979__auto___20901)){
args20882.push((arguments[i__8980__auto___20902]));

var G__20903 = (i__8980__auto___20902 + (1));
i__8980__auto___20902 = G__20903;
continue;
} else {
}
break;
}

var G__20890 = args20882.length;
switch (G__20890) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args20882.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq20884){
var G__20885 = cljs.core.first(seq20884);
var seq20884__$1 = cljs.core.next(seq20884);
var G__20886 = cljs.core.first(seq20884__$1);
var seq20884__$2 = cljs.core.next(seq20884__$1);
var G__20887 = cljs.core.first(seq20884__$2);
var seq20884__$3 = cljs.core.next(seq20884__$2);
var G__20888 = cljs.core.first(seq20884__$3);
var seq20884__$4 = cljs.core.next(seq20884__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__20885,G__20886,G__20887,G__20888,seq20884__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20925 = arguments.length;
var i__8980__auto___20926 = (0);
while(true){
if((i__8980__auto___20926 < len__8979__auto___20925)){
args__8986__auto__.push((arguments[i__8980__auto___20926]));

var G__20927 = (i__8980__auto___20926 + (1));
i__8980__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq20922){
var G__20923 = cljs.core.first(seq20922);
var seq20922__$1 = cljs.core.next(seq20922);
var G__20924 = cljs.core.first(seq20922__$1);
var seq20922__$2 = cljs.core.next(seq20922__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__20923,G__20924,seq20922__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20934 = arguments.length;
var i__8980__auto___20935 = (0);
while(true){
if((i__8980__auto___20935 < len__8979__auto___20934)){
args__8986__auto__.push((arguments[i__8980__auto___20935]));

var G__20936 = (i__8980__auto___20935 + (1));
i__8980__auto___20935 = G__20936;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq20931){
var G__20932 = cljs.core.first(seq20931);
var seq20931__$1 = cljs.core.next(seq20931);
var G__20933 = cljs.core.first(seq20931__$1);
var seq20931__$2 = cljs.core.next(seq20931__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__20932,G__20933,seq20931__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20943 = arguments.length;
var i__8980__auto___20944 = (0);
while(true){
if((i__8980__auto___20944 < len__8979__auto___20943)){
args__8986__auto__.push((arguments[i__8980__auto___20944]));

var G__20945 = (i__8980__auto___20944 + (1));
i__8980__auto___20944 = G__20945;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq20939){
var G__20940 = cljs.core.first(seq20939);
var seq20939__$1 = cljs.core.next(seq20939);
var G__20941 = cljs.core.first(seq20939__$1);
var seq20939__$2 = cljs.core.next(seq20939__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__20940,G__20941,seq20939__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20964 = arguments.length;
var i__8980__auto___20965 = (0);
while(true){
if((i__8980__auto___20965 < len__8979__auto___20964)){
args__8986__auto__.push((arguments[i__8980__auto___20965]));

var G__20966 = (i__8980__auto___20965 + (1));
i__8980__auto___20965 = G__20966;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq20950){
var G__20951 = cljs.core.first(seq20950);
var seq20950__$1 = cljs.core.next(seq20950);
var G__20952 = cljs.core.first(seq20950__$1);
var seq20950__$2 = cljs.core.next(seq20950__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__20951,G__20952,seq20950__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20991 = arguments.length;
var i__8980__auto___20992 = (0);
while(true){
if((i__8980__auto___20992 < len__8979__auto___20991)){
args__8986__auto__.push((arguments[i__8980__auto___20992]));

var G__20993 = (i__8980__auto___20992 + (1));
i__8980__auto___20992 = G__20993;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq20987){
var G__20988 = cljs.core.first(seq20987);
var seq20987__$1 = cljs.core.next(seq20987);
var G__20989 = cljs.core.first(seq20987__$1);
var seq20987__$2 = cljs.core.next(seq20987__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__20988,G__20989,seq20987__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__8986__auto__ = [];
var len__8979__auto___20997 = arguments.length;
var i__8980__auto___20998 = (0);
while(true){
if((i__8980__auto___20998 < len__8979__auto___20997)){
args__8986__auto__.push((arguments[i__8980__auto___20998]));

var G__20999 = (i__8980__auto___20998 + (1));
i__8980__auto___20998 = G__20999;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq20994){
var G__20995 = cljs.core.first(seq20994);
var seq20994__$1 = cljs.core.next(seq20994);
var G__20996 = cljs.core.first(seq20994__$1);
var seq20994__$2 = cljs.core.next(seq20994__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__20995,G__20996,seq20994__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21003 = arguments.length;
var i__8980__auto___21004 = (0);
while(true){
if((i__8980__auto___21004 < len__8979__auto___21003)){
args__8986__auto__.push((arguments[i__8980__auto___21004]));

var G__21005 = (i__8980__auto___21004 + (1));
i__8980__auto___21004 = G__21005;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq21000){
var G__21001 = cljs.core.first(seq21000);
var seq21000__$1 = cljs.core.next(seq21000);
var G__21002 = cljs.core.first(seq21000__$1);
var seq21000__$2 = cljs.core.next(seq21000__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__21001,G__21002,seq21000__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args21006 = [];
var len__8979__auto___21014 = arguments.length;
var i__8980__auto___21015 = (0);
while(true){
if((i__8980__auto___21015 < len__8979__auto___21014)){
args21006.push((arguments[i__8980__auto___21015]));

var G__21016 = (i__8980__auto___21015 + (1));
i__8980__auto___21015 = G__21016;
continue;
} else {
}
break;
}

var G__21013 = args21006.length;
switch (G__21013) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21006.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq21007){
var G__21008 = cljs.core.first(seq21007);
var seq21007__$1 = cljs.core.next(seq21007);
var G__21009 = cljs.core.first(seq21007__$1);
var seq21007__$2 = cljs.core.next(seq21007__$1);
var G__21010 = cljs.core.first(seq21007__$2);
var seq21007__$3 = cljs.core.next(seq21007__$2);
var G__21011 = cljs.core.first(seq21007__$3);
var seq21007__$4 = cljs.core.next(seq21007__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__21008,G__21009,G__21010,G__21011,seq21007__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args21018 = [];
var len__8979__auto___21026 = arguments.length;
var i__8980__auto___21027 = (0);
while(true){
if((i__8980__auto___21027 < len__8979__auto___21026)){
args21018.push((arguments[i__8980__auto___21027]));

var G__21028 = (i__8980__auto___21027 + (1));
i__8980__auto___21027 = G__21028;
continue;
} else {
}
break;
}

var G__21025 = args21018.length;
switch (G__21025) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21018.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq21019){
var G__21020 = cljs.core.first(seq21019);
var seq21019__$1 = cljs.core.next(seq21019);
var G__21021 = cljs.core.first(seq21019__$1);
var seq21019__$2 = cljs.core.next(seq21019__$1);
var G__21022 = cljs.core.first(seq21019__$2);
var seq21019__$3 = cljs.core.next(seq21019__$2);
var G__21023 = cljs.core.first(seq21019__$3);
var seq21019__$4 = cljs.core.next(seq21019__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21020,G__21021,G__21022,G__21023,seq21019__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args21030 = [];
var len__8979__auto___21038 = arguments.length;
var i__8980__auto___21039 = (0);
while(true){
if((i__8980__auto___21039 < len__8979__auto___21038)){
args21030.push((arguments[i__8980__auto___21039]));

var G__21040 = (i__8980__auto___21039 + (1));
i__8980__auto___21039 = G__21040;
continue;
} else {
}
break;
}

var G__21037 = args21030.length;
switch (G__21037) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21030.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq21031){
var G__21032 = cljs.core.first(seq21031);
var seq21031__$1 = cljs.core.next(seq21031);
var G__21033 = cljs.core.first(seq21031__$1);
var seq21031__$2 = cljs.core.next(seq21031__$1);
var G__21034 = cljs.core.first(seq21031__$2);
var seq21031__$3 = cljs.core.next(seq21031__$2);
var G__21035 = cljs.core.first(seq21031__$3);
var seq21031__$4 = cljs.core.next(seq21031__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__21032,G__21033,G__21034,G__21035,seq21031__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args21042 = [];
var len__8979__auto___21050 = arguments.length;
var i__8980__auto___21051 = (0);
while(true){
if((i__8980__auto___21051 < len__8979__auto___21050)){
args21042.push((arguments[i__8980__auto___21051]));

var G__21052 = (i__8980__auto___21051 + (1));
i__8980__auto___21051 = G__21052;
continue;
} else {
}
break;
}

var G__21049 = args21042.length;
switch (G__21049) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21042.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq21043){
var G__21044 = cljs.core.first(seq21043);
var seq21043__$1 = cljs.core.next(seq21043);
var G__21045 = cljs.core.first(seq21043__$1);
var seq21043__$2 = cljs.core.next(seq21043__$1);
var G__21046 = cljs.core.first(seq21043__$2);
var seq21043__$3 = cljs.core.next(seq21043__$2);
var G__21047 = cljs.core.first(seq21043__$3);
var seq21043__$4 = cljs.core.next(seq21043__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__21044,G__21045,G__21046,G__21047,seq21043__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args21054 = [];
var len__8979__auto___21062 = arguments.length;
var i__8980__auto___21063 = (0);
while(true){
if((i__8980__auto___21063 < len__8979__auto___21062)){
args21054.push((arguments[i__8980__auto___21063]));

var G__21064 = (i__8980__auto___21063 + (1));
i__8980__auto___21063 = G__21064;
continue;
} else {
}
break;
}

var G__21061 = args21054.length;
switch (G__21061) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21054.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq21055){
var G__21056 = cljs.core.first(seq21055);
var seq21055__$1 = cljs.core.next(seq21055);
var G__21057 = cljs.core.first(seq21055__$1);
var seq21055__$2 = cljs.core.next(seq21055__$1);
var G__21058 = cljs.core.first(seq21055__$2);
var seq21055__$3 = cljs.core.next(seq21055__$2);
var G__21059 = cljs.core.first(seq21055__$3);
var seq21055__$4 = cljs.core.next(seq21055__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__21056,G__21057,G__21058,G__21059,seq21055__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args21066 = [];
var len__8979__auto___21074 = arguments.length;
var i__8980__auto___21075 = (0);
while(true){
if((i__8980__auto___21075 < len__8979__auto___21074)){
args21066.push((arguments[i__8980__auto___21075]));

var G__21076 = (i__8980__auto___21075 + (1));
i__8980__auto___21075 = G__21076;
continue;
} else {
}
break;
}

var G__21073 = args21066.length;
switch (G__21073) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21066.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq21067){
var G__21068 = cljs.core.first(seq21067);
var seq21067__$1 = cljs.core.next(seq21067);
var G__21069 = cljs.core.first(seq21067__$1);
var seq21067__$2 = cljs.core.next(seq21067__$1);
var G__21070 = cljs.core.first(seq21067__$2);
var seq21067__$3 = cljs.core.next(seq21067__$2);
var G__21071 = cljs.core.first(seq21067__$3);
var seq21067__$4 = cljs.core.next(seq21067__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21068,G__21069,G__21070,G__21071,seq21067__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args21078 = [];
var len__8979__auto___21086 = arguments.length;
var i__8980__auto___21087 = (0);
while(true){
if((i__8980__auto___21087 < len__8979__auto___21086)){
args21078.push((arguments[i__8980__auto___21087]));

var G__21088 = (i__8980__auto___21087 + (1));
i__8980__auto___21087 = G__21088;
continue;
} else {
}
break;
}

var G__21085 = args21078.length;
switch (G__21085) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21078.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq21079){
var G__21080 = cljs.core.first(seq21079);
var seq21079__$1 = cljs.core.next(seq21079);
var G__21081 = cljs.core.first(seq21079__$1);
var seq21079__$2 = cljs.core.next(seq21079__$1);
var G__21082 = cljs.core.first(seq21079__$2);
var seq21079__$3 = cljs.core.next(seq21079__$2);
var G__21083 = cljs.core.first(seq21079__$3);
var seq21079__$4 = cljs.core.next(seq21079__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__21080,G__21081,G__21082,G__21083,seq21079__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args21090 = [];
var len__8979__auto___21098 = arguments.length;
var i__8980__auto___21099 = (0);
while(true){
if((i__8980__auto___21099 < len__8979__auto___21098)){
args21090.push((arguments[i__8980__auto___21099]));

var G__21100 = (i__8980__auto___21099 + (1));
i__8980__auto___21099 = G__21100;
continue;
} else {
}
break;
}

var G__21097 = args21090.length;
switch (G__21097) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21090.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq21091){
var G__21092 = cljs.core.first(seq21091);
var seq21091__$1 = cljs.core.next(seq21091);
var G__21093 = cljs.core.first(seq21091__$1);
var seq21091__$2 = cljs.core.next(seq21091__$1);
var G__21094 = cljs.core.first(seq21091__$2);
var seq21091__$3 = cljs.core.next(seq21091__$2);
var G__21095 = cljs.core.first(seq21091__$3);
var seq21091__$4 = cljs.core.next(seq21091__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21092,G__21093,G__21094,G__21095,seq21091__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args21102 = [];
var len__8979__auto___21110 = arguments.length;
var i__8980__auto___21111 = (0);
while(true){
if((i__8980__auto___21111 < len__8979__auto___21110)){
args21102.push((arguments[i__8980__auto___21111]));

var G__21112 = (i__8980__auto___21111 + (1));
i__8980__auto___21111 = G__21112;
continue;
} else {
}
break;
}

var G__21109 = args21102.length;
switch (G__21109) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21102.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq21103){
var G__21104 = cljs.core.first(seq21103);
var seq21103__$1 = cljs.core.next(seq21103);
var G__21105 = cljs.core.first(seq21103__$1);
var seq21103__$2 = cljs.core.next(seq21103__$1);
var G__21106 = cljs.core.first(seq21103__$2);
var seq21103__$3 = cljs.core.next(seq21103__$2);
var G__21107 = cljs.core.first(seq21103__$3);
var seq21103__$4 = cljs.core.next(seq21103__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21104,G__21105,G__21106,G__21107,seq21103__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args21116 = [];
var len__8979__auto___21124 = arguments.length;
var i__8980__auto___21125 = (0);
while(true){
if((i__8980__auto___21125 < len__8979__auto___21124)){
args21116.push((arguments[i__8980__auto___21125]));

var G__21126 = (i__8980__auto___21125 + (1));
i__8980__auto___21125 = G__21126;
continue;
} else {
}
break;
}

var G__21123 = args21116.length;
switch (G__21123) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21116.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21114__auto__","x__21114__auto__",-1567979504,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21115__auto__","y__21115__auto__",222312647,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21114__auto__","x__21114__auto__",-1567979504,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21115__auto__","y__21115__auto__",222312647,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21114__auto__","x__21114__auto__",-1567979504,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21115__auto__","y__21115__auto__",222312647,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq21117){
var G__21118 = cljs.core.first(seq21117);
var seq21117__$1 = cljs.core.next(seq21117);
var G__21119 = cljs.core.first(seq21117__$1);
var seq21117__$2 = cljs.core.next(seq21117__$1);
var G__21120 = cljs.core.first(seq21117__$2);
var seq21117__$3 = cljs.core.next(seq21117__$2);
var G__21121 = cljs.core.first(seq21117__$3);
var seq21117__$4 = cljs.core.next(seq21117__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__21118,G__21119,G__21120,G__21121,seq21117__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args21130 = [];
var len__8979__auto___21138 = arguments.length;
var i__8980__auto___21139 = (0);
while(true){
if((i__8980__auto___21139 < len__8979__auto___21138)){
args21130.push((arguments[i__8980__auto___21139]));

var G__21140 = (i__8980__auto___21139 + (1));
i__8980__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var G__21137 = args21130.length;
switch (G__21137) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21130.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21128__auto__","x__21128__auto__",1326269480,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21129__auto__","y__21129__auto__",2126160948,null)),(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21128__auto__","x__21128__auto__",1326269480,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21129__auto__","y__21129__auto__",2126160948,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21128__auto__","x__21128__auto__",1326269480,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21129__auto__","y__21129__auto__",2126160948,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq21131){
var G__21132 = cljs.core.first(seq21131);
var seq21131__$1 = cljs.core.next(seq21131);
var G__21133 = cljs.core.first(seq21131__$1);
var seq21131__$2 = cljs.core.next(seq21131__$1);
var G__21134 = cljs.core.first(seq21131__$2);
var seq21131__$3 = cljs.core.next(seq21131__$2);
var G__21135 = cljs.core.first(seq21131__$3);
var seq21131__$4 = cljs.core.next(seq21131__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__21132,G__21133,G__21134,G__21135,seq21131__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = num;
return cljs.core._conj((function (){var x__8692__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args21142 = [];
var len__8979__auto___21150 = arguments.length;
var i__8980__auto___21151 = (0);
while(true){
if((i__8980__auto___21151 < len__8979__auto___21150)){
args21142.push((arguments[i__8980__auto___21151]));

var G__21152 = (i__8980__auto___21151 + (1));
i__8980__auto___21151 = G__21152;
continue;
} else {
}
break;
}

var G__21149 = args21142.length;
switch (G__21149) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21142.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq21143){
var G__21144 = cljs.core.first(seq21143);
var seq21143__$1 = cljs.core.next(seq21143);
var G__21145 = cljs.core.first(seq21143__$1);
var seq21143__$2 = cljs.core.next(seq21143__$1);
var G__21146 = cljs.core.first(seq21143__$2);
var seq21143__$3 = cljs.core.next(seq21143__$2);
var G__21147 = cljs.core.first(seq21143__$3);
var seq21143__$4 = cljs.core.next(seq21143__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21144,G__21145,G__21146,G__21147,seq21143__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args21154 = [];
var len__8979__auto___21162 = arguments.length;
var i__8980__auto___21163 = (0);
while(true){
if((i__8980__auto___21163 < len__8979__auto___21162)){
args21154.push((arguments[i__8980__auto___21163]));

var G__21164 = (i__8980__auto___21163 + (1));
i__8980__auto___21163 = G__21164;
continue;
} else {
}
break;
}

var G__21161 = args21154.length;
switch (G__21161) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21154.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq21155){
var G__21156 = cljs.core.first(seq21155);
var seq21155__$1 = cljs.core.next(seq21155);
var G__21157 = cljs.core.first(seq21155__$1);
var seq21155__$2 = cljs.core.next(seq21155__$1);
var G__21158 = cljs.core.first(seq21155__$2);
var seq21155__$3 = cljs.core.next(seq21155__$2);
var G__21159 = cljs.core.first(seq21155__$3);
var seq21155__$4 = cljs.core.next(seq21155__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21156,G__21157,G__21158,G__21159,seq21155__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args21166 = [];
var len__8979__auto___21174 = arguments.length;
var i__8980__auto___21175 = (0);
while(true){
if((i__8980__auto___21175 < len__8979__auto___21174)){
args21166.push((arguments[i__8980__auto___21175]));

var G__21176 = (i__8980__auto___21175 + (1));
i__8980__auto___21175 = G__21176;
continue;
} else {
}
break;
}

var G__21173 = args21166.length;
switch (G__21173) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21166.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq21167){
var G__21168 = cljs.core.first(seq21167);
var seq21167__$1 = cljs.core.next(seq21167);
var G__21169 = cljs.core.first(seq21167__$1);
var seq21167__$2 = cljs.core.next(seq21167__$1);
var G__21170 = cljs.core.first(seq21167__$2);
var seq21167__$3 = cljs.core.next(seq21167__$2);
var G__21171 = cljs.core.first(seq21167__$3);
var seq21167__$4 = cljs.core.next(seq21167__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__21168,G__21169,G__21170,G__21171,seq21167__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args21178 = [];
var len__8979__auto___21186 = arguments.length;
var i__8980__auto___21187 = (0);
while(true){
if((i__8980__auto___21187 < len__8979__auto___21186)){
args21178.push((arguments[i__8980__auto___21187]));

var G__21188 = (i__8980__auto___21187 + (1));
i__8980__auto___21187 = G__21188;
continue;
} else {
}
break;
}

var G__21185 = args21178.length;
switch (G__21185) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21178.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq21179){
var G__21180 = cljs.core.first(seq21179);
var seq21179__$1 = cljs.core.next(seq21179);
var G__21181 = cljs.core.first(seq21179__$1);
var seq21179__$2 = cljs.core.next(seq21179__$1);
var G__21182 = cljs.core.first(seq21179__$2);
var seq21179__$3 = cljs.core.next(seq21179__$2);
var G__21183 = cljs.core.first(seq21179__$3);
var seq21179__$4 = cljs.core.next(seq21179__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__21180,G__21181,G__21182,G__21183,seq21179__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args21190 = [];
var len__8979__auto___21198 = arguments.length;
var i__8980__auto___21199 = (0);
while(true){
if((i__8980__auto___21199 < len__8979__auto___21198)){
args21190.push((arguments[i__8980__auto___21199]));

var G__21200 = (i__8980__auto___21199 + (1));
i__8980__auto___21199 = G__21200;
continue;
} else {
}
break;
}

var G__21197 = args21190.length;
switch (G__21197) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args21190.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq21191){
var G__21192 = cljs.core.first(seq21191);
var seq21191__$1 = cljs.core.next(seq21191);
var G__21193 = cljs.core.first(seq21191__$1);
var seq21191__$2 = cljs.core.next(seq21191__$1);
var G__21194 = cljs.core.first(seq21191__$2);
var seq21191__$3 = cljs.core.next(seq21191__$2);
var G__21195 = cljs.core.first(seq21191__$3);
var seq21191__$4 = cljs.core.next(seq21191__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__21192,G__21193,G__21194,G__21195,seq21191__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = x;
return cljs.core._conj((function (){var x__8692__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = hash;
return cljs.core._conj((function (){var x__8692__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__8692__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null)),(function (){var x__8692__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21202__auto__","h__21202__auto__",-674543978,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21203__auto__","x__21203__auto__",-1935920461,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21203__auto__","x__21203__auto__",-1935920461,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21211 = arguments.length;
var i__8980__auto___21212 = (0);
while(true){
if((i__8980__auto___21212 < len__8979__auto___21211)){
args__8986__auto__.push((arguments[i__8980__auto___21212]));

var G__21213 = (i__8980__auto___21212 + (1));
i__8980__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((6) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8987__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq21204){
var G__21205 = cljs.core.first(seq21204);
var seq21204__$1 = cljs.core.next(seq21204);
var G__21206 = cljs.core.first(seq21204__$1);
var seq21204__$2 = cljs.core.next(seq21204__$1);
var G__21207 = cljs.core.first(seq21204__$2);
var seq21204__$3 = cljs.core.next(seq21204__$2);
var G__21208 = cljs.core.first(seq21204__$3);
var seq21204__$4 = cljs.core.next(seq21204__$3);
var G__21209 = cljs.core.first(seq21204__$4);
var seq21204__$5 = cljs.core.next(seq21204__$4);
var G__21210 = cljs.core.first(seq21204__$5);
var seq21204__$6 = cljs.core.next(seq21204__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__21205,G__21206,G__21207,G__21208,G__21209,G__21210,seq21204__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = clojure.walk.postwalk((function (p1__21214_SHARP_){
if(cljs.core.sequential_QMARK_(p1__21214_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__21214_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),p1__21214_SHARP_));
} else {
return p1__21214_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__21215,fkv){
var vec__21219 = p__21215;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21219,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21219,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21225 = arguments.length;
var i__8980__auto___21226 = (0);
while(true){
if((i__8980__auto___21226 < len__8979__auto___21225)){
args__8986__auto__.push((arguments[i__8980__auto___21226]));

var G__21227 = (i__8980__auto___21226 + (1));
i__8980__auto___21226 = G__21227;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__8692__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq21222){
var G__21223 = cljs.core.first(seq21222);
var seq21222__$1 = cljs.core.next(seq21222);
var G__21224 = cljs.core.first(seq21222__$1);
var seq21222__$2 = cljs.core.next(seq21222__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__21223,G__21224,seq21222__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21258 = arguments.length;
var i__8980__auto___21259 = (0);
while(true){
if((i__8980__auto___21259 < len__8979__auto___21258)){
args__8986__auto__.push((arguments[i__8980__auto___21259]));

var G__21260 = (i__8980__auto___21259 + (1));
i__8980__auto___21259 = G__21260;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq21254){
var G__21255 = cljs.core.first(seq21254);
var seq21254__$1 = cljs.core.next(seq21254);
var G__21256 = cljs.core.first(seq21254__$1);
var seq21254__$2 = cljs.core.next(seq21254__$1);
var G__21257 = cljs.core.first(seq21254__$2);
var seq21254__$3 = cljs.core.next(seq21254__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21255,G__21256,G__21257,seq21254__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21266 = arguments.length;
var i__8980__auto___21267 = (0);
while(true){
if((i__8980__auto___21267 < len__8979__auto___21266)){
args__8986__auto__.push((arguments[i__8980__auto___21267]));

var G__21270 = (i__8980__auto___21267 + (1));
i__8980__auto___21267 = G__21270;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq21261){
var G__21262 = cljs.core.first(seq21261);
var seq21261__$1 = cljs.core.next(seq21261);
var G__21263 = cljs.core.first(seq21261__$1);
var seq21261__$2 = cljs.core.next(seq21261__$1);
var G__21264 = cljs.core.first(seq21261__$2);
var seq21261__$3 = cljs.core.next(seq21261__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__21262,G__21263,G__21264,seq21261__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21306 = arguments.length;
var i__8980__auto___21308 = (0);
while(true){
if((i__8980__auto___21308 < len__8979__auto___21306)){
args__8986__auto__.push((arguments[i__8980__auto___21308]));

var G__21309 = (i__8980__auto___21308 + (1));
i__8980__auto___21308 = G__21309;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq21289){
var G__21290 = cljs.core.first(seq21289);
var seq21289__$1 = cljs.core.next(seq21289);
var G__21291 = cljs.core.first(seq21289__$1);
var seq21289__$2 = cljs.core.next(seq21289__$1);
var G__21292 = cljs.core.first(seq21289__$2);
var seq21289__$3 = cljs.core.next(seq21289__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__21290,G__21291,G__21292,seq21289__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__6751__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__6751__auto__)){
var var$ = temp__6751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__7746__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7746__auto__)){
var and__7746__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__7746__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__7746__auto____$1;
}
} else {
return and__7746__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__6751__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__6751__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__21316 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__21317 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__21316;
s = G__21317;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__21318){
var vec__21326 = p__21318;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21326,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21326,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__21326,p,sigs){
return (function (p__21329){
var vec__21330 = p__21329;
var seq__21331 = cljs.core.seq(vec__21330);
var first__21332 = cljs.core.first(seq__21331);
var seq__21331__$1 = cljs.core.next(seq__21331);
var f = first__21332;
var meths = seq__21331__$1;
var form = vec__21330;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__21326,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__8789__auto__ = (function (){var G__21362 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21362) : cljs.core.atom.call(null,G__21362));
})();
var prefer_table__8790__auto__ = (function (){var G__21363 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21363) : cljs.core.atom.call(null,G__21363));
})();
var method_cache__8791__auto__ = (function (){var G__21364 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21364) : cljs.core.atom.call(null,G__21364));
})();
var cached_hierarchy__8792__auto__ = (function (){var G__21365 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21365) : cljs.core.atom.call(null,G__21365));
})();
var hierarchy__8793__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__,hierarchy__8793__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__,hierarchy__8793__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8793__auto__,method_table__8789__auto__,prefer_table__8790__auto__,method_cache__8791__auto__,cached_hierarchy__8792__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8692__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__8692__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__21372){
var vec__21379 = p__21372;
var seq__21380 = cljs.core.seq(vec__21379);
var first__21381 = cljs.core.first(seq__21380);
var seq__21380__$1 = cljs.core.next(seq__21380);
var vec__21382 = first__21381;
var seq__21383 = cljs.core.seq(vec__21382);
var first__21384 = cljs.core.first(seq__21383);
var seq__21383__$1 = cljs.core.next(seq__21383);
var this$ = first__21384;
var args = seq__21383__$1;
var sig = vec__21382;
var body = seq__21380__$1;
var x__8692__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__21385){
var vec__21395 = p__21385;
var seq__21396 = cljs.core.seq(vec__21395);
var first__21397 = cljs.core.first(seq__21396);
var seq__21396__$1 = cljs.core.next(seq__21396);
var vec__21398 = first__21397;
var seq__21399 = cljs.core.seq(vec__21398);
var first__21400 = cljs.core.first(seq__21399);
var seq__21399__$1 = cljs.core.next(seq__21399);
var this$ = first__21400;
var args = seq__21399__$1;
var sig = vec__21398;
var body = seq__21396__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__21401){
var vec__21408 = p__21401;
var seq__21409 = cljs.core.seq(vec__21408);
var first__21410 = cljs.core.first(seq__21409);
var seq__21409__$1 = cljs.core.next(seq__21409);
var vec__21411 = first__21410;
var seq__21412 = cljs.core.seq(vec__21411);
var first__21413 = cljs.core.first(seq__21412);
var seq__21412__$1 = cljs.core.next(seq__21412);
var this$ = first__21413;
var args = seq__21412__$1;
var sig = vec__21411;
var body = seq__21409__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__21415){
var vec__21428 = p__21415;
var seq__21429 = cljs.core.seq(vec__21428);
var first__21430 = cljs.core.first(seq__21429);
var seq__21429__$1 = cljs.core.next(seq__21429);
var vec__21431 = first__21430;
var seq__21432 = cljs.core.seq(vec__21431);
var first__21433 = cljs.core.first(seq__21432);
var seq__21432__$1 = cljs.core.next(seq__21432);
var this$ = first__21433;
var args = seq__21432__$1;
var sig = vec__21431;
var body = seq__21429__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21442){
var vec__21443 = p__21442;
var seq__21444 = cljs.core.seq(vec__21443);
var first__21445 = cljs.core.first(seq__21444);
var seq__21444__$1 = cljs.core.next(seq__21444);
var f = first__21445;
var meths = seq__21444__$1;
var form = vec__21443;
var vec__21446 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21446,f__$1,meths__$1,vec__21443,seq__21444,first__21445,seq__21444__$1,f,meths,form){
return (function (p1__21434_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__21434_SHARP_);
});})(vec__21446,f__$1,meths__$1,vec__21443,seq__21444,first__21445,seq__21444__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__21450){
var vec__21458 = p__21450;
var seq__21459 = cljs.core.seq(vec__21458);
var first__21460 = cljs.core.first(seq__21459);
var seq__21459__$1 = cljs.core.next(seq__21459);
var f = first__21460;
var meths = seq__21459__$1;
var form = vec__21458;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21458,seq__21459,first__21460,seq__21459__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__21463 = type_sym;
var G__21464 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__21463,G__21464) : cljs.core$macros.extend_prefix.call(null,G__21463,G__21464));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(vec__21458,seq__21459,first__21460,seq__21459__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21458,seq__21459,first__21460,seq__21459__$1,f,meths,form){
return (function (p1__21449_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__21449_SHARP_);
});})(vec__21458,seq__21459,first__21460,seq__21459__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__21466){
var vec__21478 = p__21466;
var seq__21479 = cljs.core.seq(vec__21478);
var first__21480 = cljs.core.first(seq__21479);
var seq__21479__$1 = cljs.core.next(seq__21479);
var f = first__21480;
var meths = seq__21479__$1;
var form = vec__21478;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21478,seq__21479,first__21480,seq__21479__$1,f,meths,form){
return (function (p1__21465_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__21465_SHARP_);
});})(vec__21478,seq__21479,first__21480,seq__21479__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__21483 = type_sym;
var G__21484 = new cljs.core.Symbol(null,"call","call",1120531661,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__21483,G__21484) : cljs.core$macros.extend_prefix.call(null,G__21483,G__21484));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__21487 = type_sym;
var G__21488 = new cljs.core.Symbol(null,"apply","apply",-1334050276,null);
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__21487,G__21488) : cljs.core$macros.extend_prefix.call(null,G__21487,G__21488));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__8692__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__8692__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__21489){
var vec__21505 = p__21489;
var seq__21506 = cljs.core.seq(vec__21505);
var first__21507 = cljs.core.first(seq__21506);
var seq__21506__$1 = cljs.core.next(seq__21506);
var f = first__21507;
var meths = seq__21506__$1;
var form = vec__21505;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__21510 = type_sym;
var G__21511 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__21510,G__21511) : cljs.core$macros.extend_prefix.call(null,G__21510,G__21511));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__21505,seq__21506,first__21507,seq__21506__$1,f,meths,form){
return (function (p__21512){
var vec__21513 = p__21512;
var seq__21514 = cljs.core.seq(vec__21513);
var first__21515 = cljs.core.first(seq__21514);
var seq__21514__$1 = cljs.core.next(seq__21514);
var sig = first__21515;
var body = seq__21514__$1;
var meth = vec__21513;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (function (){var G__21518 = type_sym;
var G__21519 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__21518,G__21519) : cljs.core$macros.extend_prefix.call(null,G__21518,G__21519));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(pf,vec__21505,seq__21506,first__21507,seq__21506__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__21520){
var vec__21524 = p__21520;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21524,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21524,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__21524,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__21524,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__21530 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_21533 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_21533))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__21534 = cljs.core.next(sigs__$1);
var G__21535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__21534;
seen = G__21535;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_21542 = cljs.core.PersistentHashSet.EMPTY;
var methods_21543__$1 = methods$;
while(true){
if(cljs.core.seq(methods_21543__$1)){
var vec__21539_21544 = cljs.core.first(methods_21543__$1);
var fname_21545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21539_21544,(0),null);
var method_21546 = vec__21539_21544;
if(cljs.core.contains_QMARK_(seen_21542,fname_21545)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_21545], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_21546);

var G__21547 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_21542,fname_21545);
var G__21548 = cljs.core.next(methods_21543__$1);
seen_21542 = G__21547;
methods_21543__$1 = G__21548;
continue;
} else {
}
break;
}

var G__21549 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__21550 = impls__$2;
protos = G__21549;
impls__$1 = G__21550;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21559 = arguments.length;
var i__8980__auto___21560 = (0);
while(true){
if((i__8980__auto___21560 < len__8979__auto___21559)){
args__8986__auto__.push((arguments[i__8980__auto___21560]));

var G__21561 = (i__8980__auto___21560 + (1));
i__8980__auto___21560 = G__21561;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__21556 = (function (){var temp__6751__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__6751__auto__)){
var type = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21556,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21556,(1),null);
if(cljs.core.truth_((function (){var and__7746__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7746__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__7746__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__21556,type,assign_impls){
return (function (p1__21551_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__21551_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__21551_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__21556,type,assign_impls))
,cljs.core.array_seq([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq21552){
var G__21553 = cljs.core.first(seq21552);
var seq21552__$1 = cljs.core.next(seq21552);
var G__21554 = cljs.core.first(seq21552__$1);
var seq21552__$2 = cljs.core.next(seq21552__$1);
var G__21555 = cljs.core.first(seq21552__$2);
var seq21552__$3 = cljs.core.next(seq21552__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__21553,G__21554,G__21555,seq21552__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__21563){
var vec__21567 = p__21563;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21567,f,sigs){
return (function (p1__21562_SHARP_){
return cljs.core.cons(cljs.core.second(p1__21562_SHARP_),cljs.core.nnext(p1__21562_SHARP_));
});})(vec__21567,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args21570 = [];
var len__8979__auto___21573 = arguments.length;
var i__8980__auto___21574 = (0);
while(true){
if((i__8980__auto___21574 < len__8979__auto___21573)){
args21570.push((arguments[i__8980__auto___21574]));

var G__21575 = (i__8980__auto___21574 + (1));
i__8980__auto___21574 = G__21575;
continue;
} else {
}
break;
}

var G__21572 = args21570.length;
switch (G__21572) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21570.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__21577 = ret__$1;
var G__21578 = specs__$2;
ret = G__21577;
specs__$1 = G__21578;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21579_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__21579_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21591 = arguments.length;
var i__8980__auto___21592 = (0);
while(true){
if((i__8980__auto___21592 < len__8979__auto___21591)){
args__8986__auto__.push((arguments[i__8980__auto___21592]));

var G__21593 = (i__8980__auto___21592 + (1));
i__8980__auto___21592 = G__21593;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__21588 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21580__auto__","this__21580__auto__",-229571749,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21581__auto__","writer__21581__auto__",444144539,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__21582__auto__","opt__21582__auto__",-562536261,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21581__auto__","writer__21581__auto__",444144539,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq21583){
var G__21584 = cljs.core.first(seq21583);
var seq21583__$1 = cljs.core.next(seq21583);
var G__21585 = cljs.core.first(seq21583__$1);
var seq21583__$2 = cljs.core.next(seq21583__$1);
var G__21586 = cljs.core.first(seq21583__$2);
var seq21583__$3 = cljs.core.next(seq21583__$2);
var G__21587 = cljs.core.first(seq21583__$3);
var seq21583__$4 = cljs.core.next(seq21583__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__21584,G__21585,G__21586,G__21587,seq21583__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__21594_SHARP_){
return cljs.core.with_meta(p1__21594_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.array_seq([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21595__auto__","this__21595__auto__",-686221028,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21596__auto__","this__21596__auto__",1630576613,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21596__auto__","this__21596__auto__",1630576613,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21597__auto__","this__21597__auto__",1010209930,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21598__auto__","other__21598__auto__",-1799847294,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21598__auto__","other__21598__auto__",-1799847294,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21597__auto__","this__21597__auto__",1010209930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21598__auto__","other__21598__auto__",-1799847294,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21597__auto__","this__21597__auto__",1010209930,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21598__auto__","other__21598__auto__",-1799847294,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21599__auto__","this__21599__auto__",1904195920,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21600__auto__","this__21600__auto__",-1077476073,null)),(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21601__auto__","this__21601__auto__",-1853191114,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21602__auto__","k__21602__auto__",-446966225,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21601__auto__","this__21601__auto__",-1853191114,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21602__auto__","k__21602__auto__",-446966225,null)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21603__auto__","this__21603__auto__",1004251546,null)),(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21604__auto__","else__21604__auto__",-1691093101,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21604__auto__","else__21604__auto__",-1691093101,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21605__auto__","this__21605__auto__",2071425361,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8692__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21606__auto__","this__21606__auto__",-1184940685,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21607__auto__","entry__21607__auto__",374297943,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21607__auto__","entry__21607__auto__",374297943,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21606__auto__","this__21606__auto__",-1184940685,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21607__auto__","entry__21607__auto__",374297943,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21607__auto__","entry__21607__auto__",374297943,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21606__auto__","this__21606__auto__",-1184940685,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21607__auto__","entry__21607__auto__",374297943,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21608__auto__","this__21608__auto__",1661740926,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21609__auto__","k__21609__auto__",-403620378,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21609__auto__","k__21609__auto__",-403620378,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21609__auto__","k__21609__auto__",-403620378,null)),(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21610__auto__","this__21610__auto__",1977905474,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21611__auto__","k__21611__auto__",1696674546,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21611__auto__","k__21611__auto__",1696674546,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21610__auto__","this__21610__auto__",1977905474,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21611__auto__","k__21611__auto__",1696674546,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21611__auto__","k__21611__auto__",1696674546,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21613__auto__","this__21613__auto__",-1962004560,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21612_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__21612_SHARP_);
return cljs.core._conj((function (){var x__8692__auto____$1 = p1__21612_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__8692__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21615__auto__","this__21615__auto__",-1965499174,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21616__auto__","writer__21616__auto__",338375682,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21617__auto__","opts__21617__auto__",28317118,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21618__auto__","pr-pair__21618__auto__",-1258677332,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21619__auto__","keyval__21619__auto__",523648995,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21616__auto__","writer__21616__auto__",338375682,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21617__auto__","opts__21617__auto__",28317118,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21619__auto__","keyval__21619__auto__",523648995,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21616__auto__","writer__21616__auto__",338375682,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21618__auto__","pr-pair__21618__auto__",-1258677332,null)),(function (){var x__8692__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21617__auto__","opts__21617__auto__",28317118,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21614_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__21614_SHARP_);
return cljs.core._conj((function (){var x__8692__auto____$1 = p1__21614_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null));
var vec__21623 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__8692__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8692__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8692__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21633 = arguments.length;
var i__8980__auto___21634 = (0);
while(true){
if((i__8980__auto___21634 < len__8979__auto___21633)){
args__8986__auto__.push((arguments[i__8980__auto___21634]));

var G__21635 = (i__8980__auto___21634 + (1));
i__8980__auto___21634 = G__21635;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21626__auto__","this__21626__auto__",-2110591542,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21626__auto__","this__21626__auto__",-2110591542,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21627__auto__","writer__21627__auto__",311319344,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21627__auto__","writer__21627__auto__",311319344,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq21628){
var G__21629 = cljs.core.first(seq21628);
var seq21628__$1 = cljs.core.next(seq21628);
var G__21630 = cljs.core.first(seq21628__$1);
var seq21628__$2 = cljs.core.next(seq21628__$1);
var G__21631 = cljs.core.first(seq21628__$2);
var seq21628__$3 = cljs.core.next(seq21628__$2);
var G__21632 = cljs.core.first(seq21628__$3);
var seq21628__$4 = cljs.core.next(seq21628__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__21629,G__21630,G__21631,G__21632,seq21628__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21686 = arguments.length;
var i__8980__auto___21687 = (0);
while(true){
if((i__8980__auto___21687 < len__8979__auto___21686)){
args__8986__auto__.push((arguments[i__8980__auto___21687]));

var G__21688 = (i__8980__auto___21687 + (1));
i__8980__auto___21687 = G__21688;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__21642 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__21642,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__21642,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__21645 = cljs.core.seq(methods$);
var chunk__21646 = null;
var count__21647 = (0);
var i__21648 = (0);
while(true){
if((i__21648 < count__21647)){
var vec__21649 = chunk__21646.cljs$core$IIndexed$_nth$arity$2(null,i__21648);
var seq__21650 = cljs.core.seq(vec__21649);
var first__21651 = cljs.core.first(seq__21650);
var seq__21650__$1 = cljs.core.next(seq__21650);
var mname = first__21651;
var arities = seq__21650__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__21689 = seq__21645;
var G__21690 = chunk__21646;
var G__21691 = count__21647;
var G__21692 = (i__21648 + (1));
seq__21645 = G__21689;
chunk__21646 = G__21690;
count__21647 = G__21691;
i__21648 = G__21692;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__21645);
if(temp__6753__auto__){
var seq__21645__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21645__$1)){
var c__8669__auto__ = cljs.core.chunk_first(seq__21645__$1);
var G__21693 = cljs.core.chunk_rest(seq__21645__$1);
var G__21694 = c__8669__auto__;
var G__21695 = cljs.core.count(c__8669__auto__);
var G__21696 = (0);
seq__21645 = G__21693;
chunk__21646 = G__21694;
count__21647 = G__21695;
i__21648 = G__21696;
continue;
} else {
var vec__21652 = cljs.core.first(seq__21645__$1);
var seq__21653 = cljs.core.seq(vec__21652);
var first__21654 = cljs.core.first(seq__21653);
var seq__21653__$1 = cljs.core.next(seq__21653);
var mname = first__21654;
var arities = seq__21653__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__21697 = cljs.core.next(seq__21645__$1);
var G__21698 = null;
var G__21699 = (0);
var G__21700 = (0);
seq__21645 = G__21697;
chunk__21646 = G__21698;
count__21647 = G__21699;
i__21648 = G__21700;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21636__auto__","x__21636__auto__",-1292189577,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21636__auto__","x__21636__auto__",-1292189577,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21637__auto__","m__21637__auto__",-523805959,null)),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__21678){
var vec__21679 = p__21678;
var seq__21680 = cljs.core.seq(vec__21679);
var first__21681 = cljs.core.first(seq__21680);
var seq__21680__$1 = cljs.core.next(seq__21680);
var fname = first__21681;
var sigs = seq__21680__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__21682){
var vec__21683 = p__21682;
var seq__21684 = cljs.core.seq(vec__21683);
var first__21685 = cljs.core.first(seq__21684);
var seq__21684__$1 = cljs.core.next(seq__21684);
var fname = first__21685;
var sigs = seq__21684__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8692__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__21683,seq__21684,first__21685,seq__21684__$1,fname,sigs,p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__21683,seq__21684,first__21685,seq__21684__$1,fname,sigs,p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__21642,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq21638){
var G__21639 = cljs.core.first(seq21638);
var seq21638__$1 = cljs.core.next(seq21638);
var G__21640 = cljs.core.first(seq21638__$1);
var seq21638__$2 = cljs.core.next(seq21638__$1);
var G__21641 = cljs.core.first(seq21638__$2);
var seq21638__$3 = cljs.core.next(seq21638__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__21639,G__21640,G__21641,seq21638__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__21704 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21704,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21704,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__21738 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21738,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21738,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8692__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8692__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21744 = arguments.length;
var i__8980__auto___21745 = (0);
while(true){
if((i__8980__auto___21745 < len__8979__auto___21744)){
args__8986__auto__.push((arguments[i__8980__auto___21745]));

var G__21746 = (i__8980__auto___21745 + (1));
i__8980__auto___21745 = G__21746;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq21741){
var G__21742 = cljs.core.first(seq21741);
var seq21741__$1 = cljs.core.next(seq21741);
var G__21743 = cljs.core.first(seq21741__$1);
var seq21741__$2 = cljs.core.next(seq21741__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__21742,G__21743,seq21741__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21750 = arguments.length;
var i__8980__auto___21751 = (0);
while(true){
if((i__8980__auto___21751 < len__8979__auto___21750)){
args__8986__auto__.push((arguments[i__8980__auto___21751]));

var G__21752 = (i__8980__auto___21751 + (1));
i__8980__auto___21751 = G__21752;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq21747){
var G__21748 = cljs.core.first(seq21747);
var seq21747__$1 = cljs.core.next(seq21747);
var G__21749 = cljs.core.first(seq21747__$1);
var seq21747__$2 = cljs.core.next(seq21747__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__21748,G__21749,seq21747__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21761 = arguments.length;
var i__8980__auto___21762 = (0);
while(true){
if((i__8980__auto___21762 < len__8979__auto___21761)){
args__8986__auto__.push((arguments[i__8980__auto___21762]));

var G__21763 = (i__8980__auto___21762 + (1));
i__8980__auto___21762 = G__21763;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__21757){
var vec__21758 = p__21757;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(1),null);
return cljs.core._conj((function (){var x__8692__auto__ = k;
return cljs.core._conj((function (){var x__8692__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq21753){
var G__21754 = cljs.core.first(seq21753);
var seq21753__$1 = cljs.core.next(seq21753);
var G__21755 = cljs.core.first(seq21753__$1);
var seq21753__$2 = cljs.core.next(seq21753__$1);
var G__21756 = cljs.core.first(seq21753__$2);
var seq21753__$3 = cljs.core.next(seq21753__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__21754,G__21755,G__21756,seq21753__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21768 = arguments.length;
var i__8980__auto___21769 = (0);
while(true){
if((i__8980__auto___21769 < len__8979__auto___21768)){
args__8986__auto__.push((arguments[i__8980__auto___21769]));

var G__21770 = (i__8980__auto___21769 + (1));
i__8980__auto___21769 = G__21770;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq21764){
var G__21765 = cljs.core.first(seq21764);
var seq21764__$1 = cljs.core.next(seq21764);
var G__21766 = cljs.core.first(seq21764__$1);
var seq21764__$2 = cljs.core.next(seq21764__$1);
var G__21767 = cljs.core.first(seq21764__$2);
var seq21764__$3 = cljs.core.next(seq21764__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__21765,G__21766,G__21767,seq21764__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21789 = arguments.length;
var i__8980__auto___21790 = (0);
while(true){
if((i__8980__auto___21790 < len__8979__auto___21789)){
args__8986__auto__.push((arguments[i__8980__auto___21790]));

var G__21791 = (i__8980__auto___21790 + (1));
i__8980__auto___21790 = G__21791;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__21783 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__21786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(2),null);
var clause = vec__21786;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21771__auto__","p__21771__auto__",-1025914711,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21771__auto__","p__21771__auto__",-1025914711,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq21772){
var G__21773 = cljs.core.first(seq21772);
var seq21772__$1 = cljs.core.next(seq21772);
var G__21774 = cljs.core.first(seq21772__$1);
var seq21772__$2 = cljs.core.next(seq21772__$1);
var G__21775 = cljs.core.first(seq21772__$2);
var seq21772__$3 = cljs.core.next(seq21772__$2);
var G__21776 = cljs.core.first(seq21772__$3);
var seq21772__$4 = cljs.core.next(seq21772__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__21773,G__21774,G__21775,G__21776,seq21772__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicate case test constant '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__7746__auto__ = cljs.core.list_QMARK_(x);
if(and__7746__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__7746__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__8986__auto__ = [];
var len__8979__auto___21812 = arguments.length;
var i__8980__auto___21813 = (0);
while(true){
if((i__8980__auto___21813 < len__8979__auto___21812)){
args__8986__auto__.push((arguments[i__8980__auto___21813]));

var G__21814 = (i__8980__auto___21813 + (1));
i__8980__auto___21813 = G__21814;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__21800){
var vec__21801 = p__21800;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__21801,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__8692__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__21801,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__8692__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__21792_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__21792_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__21793_SHARP_){
if(cljs.core.seq_QMARK_(p1__21793_SHARP_)){
return cljs.core.vec(p1__21793_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21793_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__21795_SHARP_){
if(cljs.core.seq_QMARK_(p1__21795_SHARP_)){
return cljs.core.vec(p1__21795_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21795_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__21794_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21794_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__21808){
var vec__21809 = p__21808;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8692__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq21796){
var G__21797 = cljs.core.first(seq21796);
var seq21796__$1 = cljs.core.next(seq21796);
var G__21798 = cljs.core.first(seq21796__$1);
var seq21796__$2 = cljs.core.next(seq21796__$1);
var G__21799 = cljs.core.first(seq21796__$2);
var seq21796__$3 = cljs.core.next(seq21796__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__21797,G__21798,G__21799,seq21796__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args21815 = [];
var len__8979__auto___21818 = arguments.length;
var i__8980__auto___21819 = (0);
while(true){
if((i__8980__auto___21819 < len__8979__auto___21818)){
args21815.push((arguments[i__8980__auto___21819]));

var G__21820 = (i__8980__auto___21819 + (1));
i__8980__auto___21819 = G__21820;
continue;
} else {
}
break;
}

var G__21817 = args21815.length;
switch (G__21817) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args21815.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([(function (){var x__8692__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__8692__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__25569){
var vec__25570 = p__25569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25570,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__25650__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25650 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25651__i = 0, G__25651__a = new Array(arguments.length -  0);
while (G__25651__i < G__25651__a.length) {G__25651__a[G__25651__i] = arguments[G__25651__i + 0]; ++G__25651__i;}
  msg = new cljs.core.IndexedSeq(G__25651__a,0);
} 
return G__25650__delegate.call(this,msg);};
G__25650.cljs$lang$maxFixedArity = 0;
G__25650.cljs$lang$applyTo = (function (arglist__25652){
var msg = cljs.core.seq(arglist__25652);
return G__25650__delegate(msg);
});
G__25650.cljs$core$IFn$_invoke$arity$variadic = G__25650__delegate;
return G__25650;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__25573){
var vec__25612 = p__25573;
var seq__25613 = cljs.core.seq(vec__25612);
var first__25614 = cljs.core.first(seq__25613);
var seq__25613__$1 = cljs.core.next(seq__25613);
var vec__25615 = first__25614;
var seq__25616 = cljs.core.seq(vec__25615);
var first__25617 = cljs.core.first(seq__25616);
var seq__25616__$1 = cljs.core.next(seq__25616);
var bind = first__25617;
var first__25617__$1 = cljs.core.first(seq__25616__$1);
var seq__25616__$2 = cljs.core.next(seq__25616__$1);
var expr = first__25617__$1;
var mod_pairs = seq__25616__$2;
var vec__25618 = seq__25613__$1;
var vec__25621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25618,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25621,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25621,(1),null);
var next_groups = vec__25618;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__25624){
var vec__25631 = p__25624;
var seq__25632 = cljs.core.seq(vec__25631);
var first__25633 = cljs.core.first(seq__25632);
var seq__25632__$1 = cljs.core.next(seq__25632);
var vec__25634 = first__25633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25634,(1),null);
var pair = vec__25634;
var etc = seq__25632__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21822__auto__","iterys__21822__auto__",1457411646,null)),(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21823__auto__","fs__21823__auto__",-1442035964,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21822__auto__","iterys__21822__auto__",1457411646,null)),(function (){var x__8692__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21823__auto__","fs__21823__auto__",-1442035964,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21823__auto__","fs__21823__auto__",-1442035964,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__8692__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__25637){
var vec__25644 = p__25637;
var seq__25645 = cljs.core.seq(vec__25644);
var first__25646 = cljs.core.first(seq__25645);
var seq__25645__$1 = cljs.core.next(seq__25645);
var vec__25647 = first__25646;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25647,(1),null);
var pair = vec__25647;
var etc = seq__25645__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__25612,seq__25613,first__25614,seq__25613__$1,vec__25615,seq__25616,first__25617,seq__25616__$1,bind,first__25617__$1,seq__25616__$2,expr,mod_pairs,vec__25618,vec__25621,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21824__auto__","c__21824__auto__",1039586426,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"C:\\Users\\appveyor\\.boot\\cache\\tmp\\projects\\lumo\\1vw\\-x4n1j4\\main.out\\cljs\\core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null))], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21825__auto__","size__21825__auto__",1516759472,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21824__auto__","c__21824__auto__",1039586426,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21825__auto__","size__21825__auto__",1516759472,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21825__auto__","size__21825__auto__",1516759472,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21824__auto__","c__21824__auto__",1039586426,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8692__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21826__auto__","iter__21826__auto__",763044970,null)),(function (){var x__8692__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21826__auto__","iter__21826__auto__",763044970,null)),(function (){var x__8692__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25662 = arguments.length;
var i__8980__auto___25663 = (0);
while(true){
if((i__8980__auto___25663 < len__8979__auto___25662)){
args__8986__auto__.push((arguments[i__8980__auto___25663]));

var G__25664 = (i__8980__auto___25663 + (1));
i__8980__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__25665__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25665 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25666__i = 0, G__25666__a = new Array(arguments.length -  0);
while (G__25666__i < G__25666__a.length) {G__25666__a[G__25666__i] = arguments[G__25666__i + 0]; ++G__25666__i;}
  msg = new cljs.core.IndexedSeq(G__25666__a,0);
} 
return G__25665__delegate.call(this,msg);};
G__25665.cljs$lang$maxFixedArity = 0;
G__25665.cljs$lang$applyTo = (function (arglist__25667){
var msg = cljs.core.seq(arglist__25667);
return G__25665__delegate(msg);
});
G__25665.cljs$core$IFn$_invoke$arity$variadic = G__25665__delegate;
return G__25665;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__8692__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__25653__auto__","c__25653__auto__",-1878554514,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8692__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq25654){
var G__25655 = cljs.core.first(seq25654);
var seq25654__$1 = cljs.core.next(seq25654);
var G__25656 = cljs.core.first(seq25654__$1);
var seq25654__$2 = cljs.core.next(seq25654__$1);
var G__25657 = cljs.core.first(seq25654__$2);
var seq25654__$3 = cljs.core.next(seq25654__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__25655,G__25656,G__25657,seq25654__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25671 = arguments.length;
var i__8980__auto___25672 = (0);
while(true){
if((i__8980__auto___25672 < len__8979__auto___25671)){
args__8986__auto__.push((arguments[i__8980__auto___25672]));

var G__25673 = (i__8980__auto___25672 + (1));
i__8980__auto___25672 = G__25673;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq25668){
var G__25669 = cljs.core.first(seq25668);
var seq25668__$1 = cljs.core.next(seq25668);
var G__25670 = cljs.core.first(seq25668__$1);
var seq25668__$2 = cljs.core.next(seq25668__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__25669,G__25670,seq25668__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args25677 = [];
var len__8979__auto___25685 = arguments.length;
var i__8980__auto___25686 = (0);
while(true){
if((i__8980__auto___25686 < len__8979__auto___25685)){
args25677.push((arguments[i__8980__auto___25686]));

var G__25687 = (i__8980__auto___25686 + (1));
i__8980__auto___25686 = G__25687;
continue;
} else {
}
break;
}

var G__25684 = args25677.length;
switch (G__25684) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25677.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9002__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__25674__auto__","dims__25674__auto__",1768772252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8692__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25676__auto__","i__25676__auto__",1068719620,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25676__auto__","i__25676__auto__",1068719620,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__25674__auto__","dims__25674__auto__",1768772252,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__25675__auto__","dimarray__25675__auto__",1254051060,null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq25678){
var G__25679 = cljs.core.first(seq25678);
var seq25678__$1 = cljs.core.next(seq25678);
var G__25680 = cljs.core.first(seq25678__$1);
var seq25678__$2 = cljs.core.next(seq25678__$1);
var G__25681 = cljs.core.first(seq25678__$2);
var seq25678__$3 = cljs.core.next(seq25678__$2);
var G__25682 = cljs.core.first(seq25678__$3);
var seq25678__$4 = cljs.core.next(seq25678__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__25679,G__25680,G__25681,G__25682,seq25678__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args25690 = [];
var len__8979__auto___25697 = arguments.length;
var i__8980__auto___25698 = (0);
while(true){
if((i__8980__auto___25698 < len__8979__auto___25697)){
args25690.push((arguments[i__8980__auto___25698]));

var G__25699 = (i__8980__auto___25698 + (1));
i__8980__auto___25698 = G__25699;
continue;
} else {
}
break;
}

var G__25696 = args25690.length;
switch (G__25696) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25690.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9002__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25689__auto__","x__25689__auto__",-1608466421,null)),(function (){var x__8692__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25689__auto__","x__25689__auto__",-1608466421,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq25691){
var G__25692 = cljs.core.first(seq25691);
var seq25691__$1 = cljs.core.next(seq25691);
var G__25693 = cljs.core.first(seq25691__$1);
var seq25691__$2 = cljs.core.next(seq25691__$1);
var G__25694 = cljs.core.first(seq25691__$2);
var seq25691__$3 = cljs.core.next(seq25691__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__25692,G__25693,G__25694,seq25691__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args25701 = [];
var len__8979__auto___25707 = arguments.length;
var i__8980__auto___25708 = (0);
while(true){
if((i__8980__auto___25708 < len__8979__auto___25707)){
args25701.push((arguments[i__8980__auto___25708]));

var G__25709 = (i__8980__auto___25708 + (1));
i__8980__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25706 = args25701.length;
switch (G__25706) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25701.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq25702){
var G__25703 = cljs.core.first(seq25702);
var seq25702__$1 = cljs.core.next(seq25702);
var G__25704 = cljs.core.first(seq25702__$1);
var seq25702__$2 = cljs.core.next(seq25702__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__25703,G__25704,seq25702__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args25713 = [];
var len__8979__auto___25719 = arguments.length;
var i__8980__auto___25720 = (0);
while(true){
if((i__8980__auto___25720 < len__8979__auto___25719)){
args25713.push((arguments[i__8980__auto___25720]));

var G__25721 = (i__8980__auto___25720 + (1));
i__8980__auto___25720 = G__25721;
continue;
} else {
}
break;
}

var G__25718 = args25713.length;
switch (G__25718) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25713.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__25711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25711_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__25712_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25712_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq25714){
var G__25715 = cljs.core.first(seq25714);
var seq25714__$1 = cljs.core.next(seq25714);
var G__25716 = cljs.core.first(seq25714__$1);
var seq25714__$2 = cljs.core.next(seq25714__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__25715,G__25716,seq25714__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args25723 = [];
var len__8979__auto___25729 = arguments.length;
var i__8980__auto___25730 = (0);
while(true){
if((i__8980__auto___25730 < len__8979__auto___25729)){
args25723.push((arguments[i__8980__auto___25730]));

var G__25731 = (i__8980__auto___25730 + (1));
i__8980__auto___25730 = G__25731;
continue;
} else {
}
break;
}

var G__25728 = args25723.length;
switch (G__25728) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25723.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq25724){
var G__25725 = cljs.core.first(seq25724);
var seq25724__$1 = cljs.core.next(seq25724);
var G__25726 = cljs.core.first(seq25724__$1);
var seq25724__$2 = cljs.core.next(seq25724__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__25725,G__25726,seq25724__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args25735 = [];
var len__8979__auto___25741 = arguments.length;
var i__8980__auto___25742 = (0);
while(true){
if((i__8980__auto___25742 < len__8979__auto___25741)){
args25735.push((arguments[i__8980__auto___25742]));

var G__25743 = (i__8980__auto___25742 + (1));
i__8980__auto___25742 = G__25743;
continue;
} else {
}
break;
}

var G__25740 = args25735.length;
switch (G__25740) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9002__auto__ = (new cljs.core.IndexedSeq(args25735.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9002__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__25733_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__25733_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25734_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25734_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq25736){
var G__25737 = cljs.core.first(seq25736);
var seq25736__$1 = cljs.core.next(seq25736);
var G__25738 = cljs.core.first(seq25736__$1);
var seq25736__$2 = cljs.core.next(seq25736__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__25737,G__25738,seq25736__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25760 = arguments.length;
var i__8980__auto___25761 = (0);
while(true){
if((i__8980__auto___25761 < len__8979__auto___25760)){
args__8986__auto__.push((arguments[i__8980__auto___25761]));

var G__25762 = (i__8980__auto___25761 + (1));
i__8980__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__25748){
var vec__25749 = p__25748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25752){
var vec__25753 = p__25752;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25756){
var vec__25757 = p__25756;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25757,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__8692__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq25745){
var G__25746 = cljs.core.first(seq25745);
var seq25745__$1 = cljs.core.next(seq25745);
var G__25747 = cljs.core.first(seq25745__$1);
var seq25745__$2 = cljs.core.next(seq25745__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__25746,G__25747,seq25745__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25763__auto__","a__25763__auto__",-1906783259,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25764__auto__","a__25764__auto__",-1162136707,null)),(function (){var x__8692__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__25764__auto__","a__25764__auto__",-1162136707,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25770 = arguments.length;
var i__8980__auto___25771 = (0);
while(true){
if((i__8980__auto___25771 < len__8979__auto___25770)){
args__8986__auto__.push((arguments[i__8980__auto___25771]));

var G__25772 = (i__8980__auto___25771 + (1));
i__8980__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__25765__auto__","n__25765__auto__",693167718,null)),(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__25765__auto__","n__25765__auto__",693167718,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body,(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8692__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq25766){
var G__25767 = cljs.core.first(seq25766);
var seq25766__$1 = cljs.core.next(seq25766);
var G__25768 = cljs.core.first(seq25766__$1);
var seq25766__$2 = cljs.core.next(seq25766__$1);
var G__25769 = cljs.core.first(seq25766__$2);
var seq25766__$3 = cljs.core.next(seq25766__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__25767,G__25768,G__25769,seq25766__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25776 = arguments.length;
var i__8980__auto___25777 = (0);
while(true){
if((i__8980__auto___25777 < len__8979__auto___25776)){
args__8986__auto__.push((arguments[i__8980__auto___25777]));

var G__25778 = (i__8980__auto___25777 + (1));
i__8980__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((1) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8987__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25773_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25773_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first(seq25774);
var seq25774__$1 = cljs.core.next(seq25774);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25788 = arguments.length;
var i__8980__auto___25789 = (0);
while(true){
if((i__8980__auto___25789 < len__8979__auto___25788)){
args__8986__auto__.push((arguments[i__8980__auto___25789]));

var G__25790 = (i__8980__auto___25789 + (1));
i__8980__auto___25789 = G__25790;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__25779__auto__","method-table__25779__auto__",956904721,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__25780__auto__","prefer-table__25780__auto__",-777606025,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__25781__auto__","method-cache__25781__auto__",-289150051,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__25782__auto__","cached-hierarchy__25782__auto__",1155329583,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__25783__auto__","hierarchy__25783__auto__",-876608853,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__8692__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8692__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__25783__auto__","hierarchy__25783__auto__",-876608853,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__25779__auto__","method-table__25779__auto__",956904721,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__25780__auto__","prefer-table__25780__auto__",-777606025,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__25781__auto__","method-cache__25781__auto__",-289150051,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__25782__auto__","cached-hierarchy__25782__auto__",1155329583,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq25784){
var G__25785 = cljs.core.first(seq25784);
var seq25784__$1 = cljs.core.next(seq25784);
var G__25786 = cljs.core.first(seq25784__$1);
var seq25784__$2 = cljs.core.next(seq25784__$1);
var G__25787 = cljs.core.first(seq25784__$2);
var seq25784__$3 = cljs.core.next(seq25784__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__25785,G__25786,G__25787,seq25784__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25796 = arguments.length;
var i__8980__auto___25797 = (0);
while(true){
if((i__8980__auto___25797 < len__8979__auto___25796)){
args__8986__auto__.push((arguments[i__8980__auto___25797]));

var G__25798 = (i__8980__auto___25797 + (1));
i__8980__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq25791){
var G__25792 = cljs.core.first(seq25791);
var seq25791__$1 = cljs.core.next(seq25791);
var G__25793 = cljs.core.first(seq25791__$1);
var seq25791__$2 = cljs.core.next(seq25791__$1);
var G__25794 = cljs.core.first(seq25791__$2);
var seq25791__$3 = cljs.core.next(seq25791__$2);
var G__25795 = cljs.core.first(seq25791__$3);
var seq25791__$4 = cljs.core.next(seq25791__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__25792,G__25793,G__25794,G__25795,seq25791__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25799__auto__","start__25799__auto__",727656988,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25800__auto__","ret__25800__auto__",1160172940,null)),(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25799__auto__","start__25799__auto__",727656988,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25800__auto__","ret__25800__auto__",1160172940,null))], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25815 = arguments.length;
var i__8980__auto___25816 = (0);
while(true){
if((i__8980__auto___25816 < len__8979__auto___25815)){
args__8986__auto__.push((arguments[i__8980__auto___25816]));

var G__25817 = (i__8980__auto___25816 + (1));
i__8980__auto___25816 = G__25817;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((5) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8987__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__25812){
var map__25813 = p__25812;
var map__25813__$1 = ((((!((map__25813 == null)))?((((map__25813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25813):map__25813);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25813__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25801__auto__","start__25801__auto__",659317489,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__25802__auto__","ret__25802__auto__",1402926191,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___25803__auto__","___25803__auto__",-606784877,null)),(function (){var x__8692__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__25804__auto__","end__25804__auto__",-800172095,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__25805__auto__","elapsed__25805__auto__",-1362273821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__25804__auto__","end__25804__auto__",-800172095,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__25801__auto__","start__25801__auto__",659317489,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__8692__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__8692__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__8692__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__25805__auto__","elapsed__25805__auto__",-1362273821,null)),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq25806){
var G__25807 = cljs.core.first(seq25806);
var seq25806__$1 = cljs.core.next(seq25806);
var G__25808 = cljs.core.first(seq25806__$1);
var seq25806__$2 = cljs.core.next(seq25806__$1);
var G__25809 = cljs.core.first(seq25806__$2);
var seq25806__$3 = cljs.core.next(seq25806__$2);
var G__25810 = cljs.core.first(seq25806__$3);
var seq25806__$4 = cljs.core.next(seq25806__$3);
var G__25811 = cljs.core.first(seq25806__$4);
var seq25806__$5 = cljs.core.next(seq25806__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__25807,G__25808,G__25809,G__25810,G__25811,seq25806__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args25818 = [];
var len__8979__auto___25825 = arguments.length;
var i__8980__auto___25826 = (0);
while(true){
if((i__8980__auto___25826 < len__8979__auto___25825)){
args25818.push((arguments[i__8980__auto___25826]));

var G__25827 = (i__8980__auto___25826 + (1));
i__8980__auto___25826 = G__25827;
continue;
} else {
}
break;
}

var G__25820 = args25818.length;
switch (G__25820) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25818.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = (function (){var G__25824 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__25824) : cljs.core$macros.cs.call(null,G__25824));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25834 = arguments.length;
var i__8980__auto___25835 = (0);
while(true){
if((i__8980__auto___25835 < len__8979__auto___25834)){
args__8986__auto__.push((arguments[i__8980__auto___25835]));

var G__25836 = (i__8980__auto___25835 + (1));
i__8980__auto___25835 = G__25836;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25830__auto__","x__25830__auto__",250863942,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__25830__auto__","x__25830__auto__",250863942,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__25829__auto__","sb__25829__auto__",-1628939641,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq25831){
var G__25832 = cljs.core.first(seq25831);
var seq25831__$1 = cljs.core.next(seq25831);
var G__25833 = cljs.core.first(seq25831__$1);
var seq25831__$2 = cljs.core.next(seq25831__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__25832,G__25833,seq25831__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25841 = arguments.length;
var i__8980__auto___25842 = (0);
while(true){
if((i__8980__auto___25842 < len__8979__auto___25841)){
args__8986__auto__.push((arguments[i__8980__auto___25842]));

var G__25843 = (i__8980__auto___25842 + (1));
i__8980__auto___25842 = G__25843;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25837_SHARP_){
return cljs.core._conj((function (){var x__8692__auto__ = p1__25837_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq25838){
var G__25839 = cljs.core.first(seq25838);
var seq25838__$1 = cljs.core.next(seq25838);
var G__25840 = cljs.core.first(seq25838__$1);
var seq25838__$2 = cljs.core.next(seq25838__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__25839,G__25840,seq25838__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__8692__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__8692__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25844__auto__","this__25844__auto__",361524767,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__25844__auto__","this__25844__auto__",361524767,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__25845){
var vec__25857 = p__25845;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25857,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to ns-interns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8692__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25857,quote,ns){
return (function (p__25864){
var vec__25865 = p__25864;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25865,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8692__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
});})(vec__25857,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__25868,p__25869){
var vec__25876 = p__25868;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25876,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25876,(1),null);
var vec__25879 = p__25869;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25879,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25879,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to ns-unmap must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__8692__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25887 = arguments.length;
var i__8980__auto___25888 = (0);
while(true){
if((i__8980__auto___25888 < len__8979__auto___25887)){
args__8986__auto__.push((arguments[i__8980__auto___25888]));

var G__25889 = (i__8980__auto___25888 + (1));
i__8980__auto___25888 = G__25889;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((4) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8987__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__8692__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__8692__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq25882){
var G__25883 = cljs.core.first(seq25882);
var seq25882__$1 = cljs.core.next(seq25882);
var G__25884 = cljs.core.first(seq25882__$1);
var seq25882__$2 = cljs.core.next(seq25882__$1);
var G__25885 = cljs.core.first(seq25882__$2);
var seq25882__$3 = cljs.core.next(seq25882__$2);
var G__25886 = cljs.core.first(seq25882__$3);
var seq25882__$4 = cljs.core.next(seq25882__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25883,G__25884,G__25885,G__25886,seq25882__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25894 = arguments.length;
var i__8980__auto___25895 = (0);
while(true){
if((i__8980__auto___25895 < len__8979__auto___25894)){
args__8986__auto__.push((arguments[i__8980__auto___25895]));

var G__25896 = (i__8980__auto___25895 + (1));
i__8980__auto___25895 = G__25896;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq25890){
var G__25891 = cljs.core.first(seq25890);
var seq25890__$1 = cljs.core.next(seq25890);
var G__25892 = cljs.core.first(seq25890__$1);
var seq25890__$2 = cljs.core.next(seq25890__$1);
var G__25893 = cljs.core.first(seq25890__$2);
var seq25890__$3 = cljs.core.next(seq25890__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__25891,G__25892,G__25893,seq25890__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace..
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure/string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25900 = arguments.length;
var i__8980__auto___25901 = (0);
while(true){
if((i__8980__auto___25901 < len__8979__auto___25900)){
args__8986__auto__.push((arguments[i__8980__auto___25901]));

var G__25902 = (i__8980__auto___25901 + (1));
i__8980__auto___25901 = G__25902;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq25897){
var G__25898 = cljs.core.first(seq25897);
var seq25897__$1 = cljs.core.next(seq25897);
var G__25899 = cljs.core.first(seq25897__$1);
var seq25897__$2 = cljs.core.next(seq25897__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__25898,G__25899,seq25897__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25906 = arguments.length;
var i__8980__auto___25907 = (0);
while(true){
if((i__8980__auto___25907 < len__8979__auto___25906)){
args__8986__auto__.push((arguments[i__8980__auto___25907]));

var G__25908 = (i__8980__auto___25907 + (1));
i__8980__auto___25907 = G__25908;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq25903){
var G__25904 = cljs.core.first(seq25903);
var seq25903__$1 = cljs.core.next(seq25903);
var G__25905 = cljs.core.first(seq25903__$1);
var seq25903__$2 = cljs.core.next(seq25903__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__25904,G__25905,seq25903__$2);
});


cljs.core$macros.require_macros.cljs$lang$macro = true;
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25912 = arguments.length;
var i__8980__auto___25913 = (0);
while(true){
if((i__8980__auto___25913 < len__8979__auto___25912)){
args__8986__auto__.push((arguments[i__8980__auto___25913]));

var G__25914 = (i__8980__auto___25913 + (1));
i__8980__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq25909){
var G__25910 = cljs.core.first(seq25909);
var seq25909__$1 = cljs.core.next(seq25909);
var G__25911 = cljs.core.first(seq25909__$1);
var seq25909__$2 = cljs.core.next(seq25909__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__25910,G__25911,seq25909__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25918 = arguments.length;
var i__8980__auto___25919 = (0);
while(true){
if((i__8980__auto___25919 < len__8979__auto___25918)){
args__8986__auto__.push((arguments[i__8980__auto___25919]));

var G__25920 = (i__8980__auto___25919 + (1));
i__8980__auto___25919 = G__25920;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq25915){
var G__25916 = cljs.core.first(seq25915);
var seq25915__$1 = cljs.core.next(seq25915);
var G__25917 = cljs.core.first(seq25915__$1);
var seq25915__$2 = cljs.core.next(seq25915__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__25916,G__25917,seq25915__$2);
});


cljs.core$macros.use_macros.cljs$lang$macro = true;
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25924 = arguments.length;
var i__8980__auto___25925 = (0);
while(true){
if((i__8980__auto___25925 < len__8979__auto___25924)){
args__8986__auto__.push((arguments[i__8980__auto___25925]));

var G__25926 = (i__8980__auto___25925 + (1));
i__8980__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq25921){
var G__25922 = cljs.core.first(seq25921);
var seq25921__$1 = cljs.core.next(seq25921);
var G__25923 = cljs.core.first(seq25921__$1);
var seq25921__$2 = cljs.core.next(seq25921__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__25922,G__25923,seq25921__$2);
});


cljs.core$macros.import$.cljs$lang$macro = true;
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__8986__auto__ = [];
var len__8979__auto___25930 = arguments.length;
var i__8980__auto___25931 = (0);
while(true){
if((i__8980__auto___25931 < len__8979__auto___25930)){
args__8986__auto__.push((arguments[i__8980__auto___25931]));

var G__25932 = (i__8980__auto___25931 + (1));
i__8980__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((2) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8987__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq25927){
var G__25928 = cljs.core.first(seq25927);
var seq25927__$1 = cljs.core.next(seq25927);
var G__25929 = cljs.core.first(seq25927__$1);
var seq25927__$2 = cljs.core.next(seq25927__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__25928,G__25929,seq25927__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__8692__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand-1 must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
return form;
}
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__25933 = form_SINGLEQUOTE_;
var G__25934 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__25933;
form_SINGLEQUOTE_ = G__25934;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8692__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
break;
}
} else {
return form;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__7746__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__7746__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__7746__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args25935 = [];
var len__8979__auto___25942 = arguments.length;
var i__8980__auto___25943 = (0);
while(true){
if((i__8980__auto___25943 < len__8979__auto___25942)){
args25935.push((arguments[i__8980__auto___25943]));

var G__25944 = (i__8980__auto___25943 + (1));
i__8980__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var G__25937 = args25935.length;
switch (G__25937) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25935.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__25938,solo){
var vec__25939 = p__25938;
var seq__25940 = cljs.core.seq(vec__25939);
var first__25941 = cljs.core.first(seq__25940);
var seq__25940__$1 = cljs.core.next(seq__25940);
var arglist = first__25941;
var body = seq__25940__$1;
var method = vec__25939;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"C:\\Users\\appveyor\\.boot\\cache\\tmp\\projects\\lumo\\1vw\\-x4n1j4\\main.out\\cljs\\core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"C:\\Users\\appveyor\\.boot\\cache\\tmp\\projects\\lumo\\1vw\\-x4n1j4\\main.out\\cljs\\core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))));
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8692__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),params,cljs.core.array_seq([(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8692__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
}
});})(sig,restarg,vec__25939,seq__25940,first__25941,seq__25940__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))):null),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__25946__auto__","len__25946__auto__",-1709952332,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__25946__auto__","len__25946__auto__",-1709952332,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__8692__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__25947__auto__","i__25947__auto__",832481319,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__25950,emit_var_QMARK_){
var vec__25957 = p__25950;
var vec__25960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25957,(0),null);
var seq__25961 = cljs.core.seq(vec__25960);
var first__25962 = cljs.core.first(seq__25961);
var seq__25961__$1 = cljs.core.next(seq__25961);
var arglist = first__25962;
var body = seq__25961__$1;
var method = vec__25960;
var fdecl = vec__25957;
var dest_args = ((function (vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});})(vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__25957,vec__25960,seq__25961,first__25962,seq__25961__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__8692__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25949__auto__","argseq__25949__auto__",-1813730050,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8692__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"C:\\Users\\appveyor\\.boot\\cache\\tmp\\projects\\lumo\\1vw\\-x4n1j4\\main.out\\cljs\\core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__25948__auto__","args__25948__auto__",-1208760821,null)),cljs.core.array_seq([(function (){var x__8692__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25949__auto__","argseq__25949__auto__",-1813730050,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__25987){
var vec__25991 = p__25987;
var seq__25992 = cljs.core.seq(vec__25991);
var first__25993 = cljs.core.first(seq__25992);
var seq__25992__$1 = cljs.core.next(seq__25992);
var sig = first__25993;
var body = seq__25992__$1;
var method = vec__25991;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__25963_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__25963_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__25964_SHARP_){
return fixed_arity(rname,p1__25964_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),(function (){var x__8692__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8692__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25965__auto__","argseq__25965__auto__",417829714,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8692__auto__ = cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"C:\\Users\\appveyor\\.boot\\cache\\tmp\\projects\\lumo\\1vw\\-x4n1j4\\main.out\\cljs\\core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__25965__auto__","argseq__25965__auto__",417829714,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8692__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8692__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),cljs.core.array_seq([(function (){var x__8692__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),(function (){var x__8692__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8692__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__8692__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj((function (){var x__8692__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__25994__i = 0, G__25994__a = new Array(arguments.length -  3);
while (G__25994__i < G__25994__a.length) {G__25994__a[G__25994__i] = arguments[G__25994__i + 3]; ++G__25994__i;}
  fdecl = new cljs.core.IndexedSeq(G__25994__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__25995){
var _AMPERSAND_form = cljs.core.first(arglist__25995);
arglist__25995 = cljs.core.next(arglist__25995);
var _AMPERSAND_env = cljs.core.first(arglist__25995);
arglist__25995 = cljs.core.next(arglist__25995);
var name = cljs.core.first(arglist__25995);
var fdecl = cljs.core.rest(arglist__25995);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__8986__auto__ = [];
var len__8979__auto___26000 = arguments.length;
var i__8980__auto___26001 = (0);
while(true){
if((i__8980__auto___26001 < len__8979__auto___26000)){
args__8986__auto__.push((arguments[i__8980__auto___26001]));

var G__26002 = (i__8980__auto___26001 + (1));
i__8980__auto___26001 = G__26002;
continue;
} else {
}
break;
}

var argseq__8987__auto__ = ((((3) < args__8986__auto__.length))?(new cljs.core.IndexedSeq(args__8986__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8987__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__8692__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__26003 = cljs.core.cons(f,p);
var G__26004 = cljs.core.next(args__$1);
p = G__26003;
args__$1 = G__26004;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__26005 = cljs.core.cons(f,p);
var G__26006 = cljs.core.next(args__$1);
p = G__26005;
args__$1 = G__26006;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__26007 = cljs.core.next(fd);
fd = G__26007;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__26008 = cljs.core.next(fd);
fd = G__26008;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__8692__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__26009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__26010 = cljs.core.next(ds);
acc = G__26009;
ds = G__26010;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__26011 = cljs.core.next(p);
var G__26012 = cljs.core.cons(cljs.core.first(p),d);
p = G__26011;
d = G__26012;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj((function (){var x__8692__auto__ = cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core._conj((function (){var x__8692__auto____$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8692__auto____$1 = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null))], 0))));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__8692__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8692__auto____$1);
})(),x__8692__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq25996){
var G__25997 = cljs.core.first(seq25996);
var seq25996__$1 = cljs.core.next(seq25996);
var G__25998 = cljs.core.first(seq25996__$1);
var seq25996__$2 = cljs.core.next(seq25996__$1);
var G__25999 = cljs.core.first(seq25996__$2);
var seq25996__$3 = cljs.core.next(seq25996__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__25997,G__25998,G__25999,seq25996__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
