goog.provide("mikron.buffer");

/**
 * @interface
 */
(function (){
mikron.buffer.BitBufferOps = function(){}; return (
new cljs.core.Var(function(){return mikron.buffer.BitBufferOps;},new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"BitBufferOps","BitBufferOps",(-542910020),null),"mikron/buffer.cljc",(42),(1),(9),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"?bit-pos*","?bit-pos*",(-514510785),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the current position."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"!bit-pos*","!bit-pos*",(642398045),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Sets the current position."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"?bit-index*","?bit-index*",(1366098102),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the current index."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"!bit-index*","!bit-index*",(-451861568),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Sets the current index."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"?bit-value*","?bit-value*",(1927664097),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the current value at the index."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"!bit-value*","!bit-value*",(-53172620),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Sets the current value at the index."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null)])], null),(9),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(mikron.buffer.BitBufferOps)?mikron.buffer.BitBufferOps.cljs$lang$test:null)])));})()
;

/**
 * Gets the current position.
 */
(function (){
mikron.buffer._QMARK_bit_pos_STAR_ = (function mikron$buffer$_QMARK_bit_pos_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_QMARK_bit_pos_STAR_$arity$1 == null)))){
return this$.mikron$buffer$BitBufferOps$_QMARK_bit_pos_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_bit_pos_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_bit_pos_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.?bit-pos*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_pos_STAR_;},new cljs.core.Symbol("mikron.buffer","?bit-pos*","mikron.buffer/?bit-pos*",(-1145313365),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-pos*","?bit-pos*",(-514510785),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Gets the current position.",(cljs.core.truth_(mikron.buffer._QMARK_bit_pos_STAR_)?mikron.buffer._QMARK_bit_pos_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Sets the current position.
 */
(function (){
mikron.buffer._BANG_bit_pos_STAR_ = (function mikron$buffer$_BANG_bit_pos_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_BANG_bit_pos_STAR_$arity$2 == null)))){
return this$.mikron$buffer$BitBufferOps$_BANG_bit_pos_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_bit_pos_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_bit_pos_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.!bit-pos*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_pos_STAR_;},new cljs.core.Symbol("mikron.buffer","!bit-pos*","mikron.buffer/!bit-pos*",(215253457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-pos*","!bit-pos*",(642398045),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Sets the current position.",(cljs.core.truth_(mikron.buffer._BANG_bit_pos_STAR_)?mikron.buffer._BANG_bit_pos_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Gets the current index.
 */
(function (){
mikron.buffer._QMARK_bit_index_STAR_ = (function mikron$buffer$_QMARK_bit_index_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_QMARK_bit_index_STAR_$arity$1 == null)))){
return this$.mikron$buffer$BitBufferOps$_QMARK_bit_index_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_bit_index_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_bit_index_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.?bit-index*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_index_STAR_;},new cljs.core.Symbol("mikron.buffer","?bit-index*","mikron.buffer/?bit-index*",(-2064460502),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-index*","?bit-index*",(1366098102),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Gets the current index.",(cljs.core.truth_(mikron.buffer._QMARK_bit_index_STAR_)?mikron.buffer._QMARK_bit_index_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Sets the current index.
 */
(function (){
mikron.buffer._BANG_bit_index_STAR_ = (function mikron$buffer$_BANG_bit_index_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_BANG_bit_index_STAR_$arity$2 == null)))){
return this$.mikron$buffer$BitBufferOps$_BANG_bit_index_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_bit_index_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_bit_index_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.!bit-index*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_index_STAR_;},new cljs.core.Symbol("mikron.buffer","!bit-index*","mikron.buffer/!bit-index*",(-793227180),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-index*","!bit-index*",(-451861568),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Sets the current index.",(cljs.core.truth_(mikron.buffer._BANG_bit_index_STAR_)?mikron.buffer._BANG_bit_index_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Gets the current value at the index.
 */
(function (){
mikron.buffer._QMARK_bit_value_STAR_ = (function mikron$buffer$_QMARK_bit_value_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_QMARK_bit_value_STAR_$arity$1 == null)))){
return this$.mikron$buffer$BitBufferOps$_QMARK_bit_value_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_bit_value_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_bit_value_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.?bit-value*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_value_STAR_;},new cljs.core.Symbol("mikron.buffer","?bit-value*","mikron.buffer/?bit-value*",(-1735621771),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-value*","?bit-value*",(1927664097),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Gets the current value at the index.",(cljs.core.truth_(mikron.buffer._QMARK_bit_value_STAR_)?mikron.buffer._QMARK_bit_value_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Sets the current value at the index.
 */
(function (){
mikron.buffer._BANG_bit_value_STAR_ = (function mikron$buffer$_BANG_bit_value_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$BitBufferOps$_BANG_bit_value_STAR_$arity$2 == null)))){
return this$.mikron$buffer$BitBufferOps$_BANG_bit_value_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_bit_value_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_bit_value_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"BitBufferOps.!bit-value*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_value_STAR_;},new cljs.core.Symbol("mikron.buffer","!bit-value*","mikron.buffer/!bit-value*",(-1770138392),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-value*","!bit-value*",(-53172620),null),"mikron/buffer.cljc",(1),(9),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Sets the current value at the index.",(cljs.core.truth_(mikron.buffer._BANG_bit_value_STAR_)?mikron.buffer._BANG_bit_value_STAR_.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {mikron.buffer.BitBufferOps}
*/
mikron.buffer.BitBufferImpl = (function (value,index,pos){
this.value = value;
this.index = index;
this.pos = pos;
})
mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_QMARK_bit_pos_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_BANG_bit_pos_STAR_$arity$2 = (function (_,value_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return self__.pos = cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_);
});

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_QMARK_bit_index_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.index;
});

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_BANG_bit_index_STAR_$arity$2 = (function (_,value_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return self__.index = cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_);
});

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_QMARK_bit_value_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

mikron.buffer.BitBufferImpl.prototype.mikron$buffer$BitBufferOps$_BANG_bit_value_STAR_$arity$2 = (function (_,value_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return self__.value = cljs.core.unchecked_long.call(null,value_SINGLEQUOTE_);
});

mikron.buffer.BitBufferImpl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null);
});

mikron.buffer.BitBufferImpl.cljs$lang$type = true;

mikron.buffer.BitBufferImpl.cljs$lang$ctorStr = "mikron.buffer/BitBufferImpl";

mikron.buffer.BitBufferImpl.cljs$lang$ctorPrWriter = (function (this__21580__auto__,writer__21581__auto__,opt__21582__auto__){
return cljs.core._write.call(null,writer__21581__auto__,"mikron.buffer/BitBufferImpl");
});

(function (){
mikron.buffer.__GT_BitBufferImpl = (function mikron$buffer$__GT_BitBufferImpl(value,index,pos){
return (new mikron.buffer.BitBufferImpl(value,index,pos));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_BitBufferImpl;},new cljs.core.Symbol("mikron.buffer","->BitBufferImpl","mikron.buffer/->BitBufferImpl",(-2078463232),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("mikron.buffer","BitBufferOps","mikron.buffer/BitBufferOps",(-180573392),null),null], null), null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->BitBufferImpl","->BitBufferImpl",(-4941684),null),"mikron/buffer.cljc",(23),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(19),(19),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",(108845612),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),null,null,(cljs.core.truth_(mikron.buffer.__GT_BitBufferImpl)?mikron.buffer.__GT_BitBufferImpl.cljs$lang$test:null)])));})()
;


/**
 * @interface
 */
(function (){
mikron.buffer.ByteBufferOps = function(){}; return (
new cljs.core.Var(function(){return mikron.buffer.ByteBufferOps;},new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"ByteBufferOps","ByteBufferOps",(-346240844),null),"mikron/buffer.cljc",(43),(1),(38),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentHashMap.fromArrays([cljs.core.with_meta(new cljs.core.Symbol(null,"!pos*","!pos*",(-1479798302),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Sets the current position."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!double*","!double*",(1778915940),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a double."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?double*","?double*",(-1149995638),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a double."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?byte*","?byte*",(-1159921525),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a byte."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?pos*","?pos*",(1702424395),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the current position."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!le*","!le*",(1401944748),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Sets the current endianness."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!long*","!long*",(-137968914),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a long."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!bytes*","!bytes*",(-472750765),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a given number of bytes."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?bytes-all*","?bytes-all*",(1903761780),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads all written bytes."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!short*","!short*",(1019411988),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a short."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?int*","?int*",(-1923184555),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads an int."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?le*","?le*",(1930383191),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Gets the current endianness."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?long*","?long*",(-343150376),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a long."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!byte*","!byte*",(2008130521),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a byte."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?float*","?float*",(1436073658),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a float."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!int*","!int*",(825361691),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes an int."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?bytes*","?bytes*",(1097935419),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a given number of bytes."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"!float*","!float*",(1432637597),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Writes a float."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"?short*","?short*",(-630931425),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Reads a short."], null))],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)], null)])], null),(38),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(mikron.buffer.ByteBufferOps)?mikron.buffer.ByteBufferOps.cljs$lang$test:null)])));})()
;

/**
 * Reads a byte.
 */
(function (){
mikron.buffer._QMARK_byte_STAR_ = (function mikron$buffer$_QMARK_byte_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_byte_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_byte_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_byte_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_byte_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?byte*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_byte_STAR_;},new cljs.core.Symbol("mikron.buffer","?byte*","mikron.buffer/?byte*",(-1875585257),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?byte*","?byte*",(-1159921525),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads a byte.",(cljs.core.truth_(mikron.buffer._QMARK_byte_STAR_)?mikron.buffer._QMARK_byte_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a byte.
 */
(function (){
mikron.buffer._BANG_byte_STAR_ = (function mikron$buffer$_BANG_byte_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_byte_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_byte_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_byte_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_byte_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!byte*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_byte_STAR_;},new cljs.core.Symbol("mikron.buffer","!byte*","mikron.buffer/!byte*",(710284877),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!byte*","!byte*",(2008130521),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a byte.",(cljs.core.truth_(mikron.buffer._BANG_byte_STAR_)?mikron.buffer._BANG_byte_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads a short.
 */
(function (){
mikron.buffer._QMARK_short_STAR_ = (function mikron$buffer$_QMARK_short_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_short_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_short_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_short_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_short_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?short*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_short_STAR_;},new cljs.core.Symbol("mikron.buffer","?short*","mikron.buffer/?short*",(214805899),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?short*","?short*",(-630931425),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads a short.",(cljs.core.truth_(mikron.buffer._QMARK_short_STAR_)?mikron.buffer._QMARK_short_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a short.
 */
(function (){
mikron.buffer._BANG_short_STAR_ = (function mikron$buffer$_BANG_short_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_short_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_short_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_short_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_short_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!short*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_short_STAR_;},new cljs.core.Symbol("mikron.buffer","!short*","mikron.buffer/!short*",(-882135936),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!short*","!short*",(1019411988),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a short.",(cljs.core.truth_(mikron.buffer._BANG_short_STAR_)?mikron.buffer._BANG_short_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads an int.
 */
(function (){
mikron.buffer._QMARK_int_STAR_ = (function mikron$buffer$_QMARK_int_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_int_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_int_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_int_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_int_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?int*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_int_STAR_;},new cljs.core.Symbol("mikron.buffer","?int*","mikron.buffer/?int*",(1741118425),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?int*","?int*",(-1923184555),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads an int.",(cljs.core.truth_(mikron.buffer._QMARK_int_STAR_)?mikron.buffer._QMARK_int_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes an int.
 */
(function (){
mikron.buffer._BANG_int_STAR_ = (function mikron$buffer$_BANG_int_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_int_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_int_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_int_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_int_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!int*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_int_STAR_;},new cljs.core.Symbol("mikron.buffer","!int*","mikron.buffer/!int*",(1733875367),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!int*","!int*",(825361691),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes an int.",(cljs.core.truth_(mikron.buffer._BANG_int_STAR_)?mikron.buffer._BANG_int_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads a long.
 */
(function (){
mikron.buffer._QMARK_long_STAR_ = (function mikron$buffer$_QMARK_long_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_long_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_long_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_long_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_long_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?long*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_long_STAR_;},new cljs.core.Symbol("mikron.buffer","?long*","mikron.buffer/?long*",(-1324022452),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?long*","?long*",(-343150376),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads a long.",(cljs.core.truth_(mikron.buffer._QMARK_long_STAR_)?mikron.buffer._QMARK_long_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a long.
 */
(function (){
mikron.buffer._BANG_long_STAR_ = (function mikron$buffer$_BANG_long_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_long_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_long_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_long_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_long_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!long*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_long_STAR_;},new cljs.core.Symbol("mikron.buffer","!long*","mikron.buffer/!long*",(565154930),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!long*","!long*",(-137968914),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a long.",(cljs.core.truth_(mikron.buffer._BANG_long_STAR_)?mikron.buffer._BANG_long_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads a float.
 */
(function (){
mikron.buffer._QMARK_float_STAR_ = (function mikron$buffer$_QMARK_float_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_float_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_float_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_float_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_float_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?float*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_float_STAR_;},new cljs.core.Symbol("mikron.buffer","?float*","mikron.buffer/?float*",(2067688246),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?float*","?float*",(1436073658),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads a float.",(cljs.core.truth_(mikron.buffer._QMARK_float_STAR_)?mikron.buffer._QMARK_float_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a float.
 */
(function (){
mikron.buffer._BANG_float_STAR_ = (function mikron$buffer$_BANG_float_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_float_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_float_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_float_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_float_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!float*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_float_STAR_;},new cljs.core.Symbol("mikron.buffer","!float*","mikron.buffer/!float*",(-1559419383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!float*","!float*",(1432637597),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a float.",(cljs.core.truth_(mikron.buffer._BANG_float_STAR_)?mikron.buffer._BANG_float_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads a double.
 */
(function (){
mikron.buffer._QMARK_double_STAR_ = (function mikron$buffer$_QMARK_double_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_double_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_double_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_double_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_double_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?double*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_double_STAR_;},new cljs.core.Symbol("mikron.buffer","?double*","mikron.buffer/?double*",(-1781873130),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?double*","?double*",(-1149995638),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads a double.",(cljs.core.truth_(mikron.buffer._QMARK_double_STAR_)?mikron.buffer._QMARK_double_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a double.
 */
(function (){
mikron.buffer._BANG_double_STAR_ = (function mikron$buffer$_BANG_double_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_double_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_double_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_double_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_double_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!double*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_double_STAR_;},new cljs.core.Symbol("mikron.buffer","!double*","mikron.buffer/!double*",(1352846544),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!double*","!double*",(1778915940),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a double.",(cljs.core.truth_(mikron.buffer._BANG_double_STAR_)?mikron.buffer._BANG_double_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads a given number of bytes.
 */
(function (){
mikron.buffer._QMARK_bytes_STAR_ = (function mikron$buffer$_QMARK_bytes_STAR_(this$,n){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_bytes_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_bytes_STAR_$arity$2(this$,n);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_bytes_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,n);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_bytes_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,n);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?bytes*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bytes_STAR_;},new cljs.core.Symbol("mikron.buffer","?bytes*","mikron.buffer/?bytes*",(-1259602745),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bytes*","?bytes*",(1097935419),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Reads a given number of bytes.",(cljs.core.truth_(mikron.buffer._QMARK_bytes_STAR_)?mikron.buffer._QMARK_bytes_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Writes a given number of bytes.
 */
(function (){
mikron.buffer._BANG_bytes_STAR_ = (function mikron$buffer$_BANG_bytes_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_bytes_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_bytes_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_bytes_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_bytes_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!bytes*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bytes_STAR_;},new cljs.core.Symbol("mikron.buffer","!bytes*","mikron.buffer/!bytes*",(-2005159225),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bytes*","!bytes*",(-472750765),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a given number of bytes.",(cljs.core.truth_(mikron.buffer._BANG_bytes_STAR_)?mikron.buffer._BANG_bytes_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Reads all written bytes.
 */
(function (){
mikron.buffer._QMARK_bytes_all_STAR_ = (function mikron$buffer$_QMARK_bytes_all_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_bytes_all_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_bytes_all_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_bytes_all_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_bytes_all_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?bytes-all*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bytes_all_STAR_;},new cljs.core.Symbol("mikron.buffer","?bytes-all*","mikron.buffer/?bytes-all*",(-1679839256),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bytes-all*","?bytes-all*",(1903761780),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Reads all written bytes.",(cljs.core.truth_(mikron.buffer._QMARK_bytes_all_STAR_)?mikron.buffer._QMARK_bytes_all_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Gets the current position.
 */
(function (){
mikron.buffer._QMARK_pos_STAR_ = (function mikron$buffer$_QMARK_pos_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_pos_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_pos_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_pos_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_pos_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?pos*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_pos_STAR_;},new cljs.core.Symbol("mikron.buffer","?pos*","mikron.buffer/?pos*",(266288383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?pos*","?pos*",(1702424395),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Gets the current position.",(cljs.core.truth_(mikron.buffer._QMARK_pos_STAR_)?mikron.buffer._QMARK_pos_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Sets the current position.
 */
(function (){
mikron.buffer._BANG_pos_STAR_ = (function mikron$buffer$_BANG_pos_STAR_(this$,pos){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_pos_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_pos_STAR_$arity$2(this$,pos);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_pos_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,pos);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_pos_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,pos);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!pos*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_pos_STAR_;},new cljs.core.Symbol("mikron.buffer","!pos*","mikron.buffer/!pos*",(2021064278),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!pos*","!pos*",(-1479798302),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null)),"Sets the current position.",(cljs.core.truth_(mikron.buffer._BANG_pos_STAR_)?mikron.buffer._BANG_pos_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Gets the current endianness.
 */
(function (){
mikron.buffer._QMARK_le_STAR_ = (function mikron$buffer$_QMARK_le_STAR_(this$){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_QMARK_le_STAR_$arity$1 == null)))){
return this$.mikron$buffer$ByteBufferOps$_QMARK_le_STAR_$arity$1(this$);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._QMARK_le_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$);
} else {
var m__21637__auto____$1 = (mikron.buffer._QMARK_le_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.?le*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_le_STAR_;},new cljs.core.Symbol("mikron.buffer","?le*","mikron.buffer/?le*",(427170499),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?le*","?le*",(1930383191),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),"Gets the current endianness.",(cljs.core.truth_(mikron.buffer._QMARK_le_STAR_)?mikron.buffer._QMARK_le_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Sets the current endianness.
 */
(function (){
mikron.buffer._BANG_le_STAR_ = (function mikron$buffer$_BANG_le_STAR_(this$,value){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferOps$_BANG_le_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferOps$_BANG_le_STAR_$arity$2(this$,value);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer._BANG_le_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,value);
} else {
var m__21637__auto____$1 = (mikron.buffer._BANG_le_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferOps.!le*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_le_STAR_;},new cljs.core.Symbol("mikron.buffer","!le*","mikron.buffer/!le*",(1008084760),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!le*","!le*",(1401944748),null),"mikron/buffer.cljc",(1),(38),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Sets the current endianness.",(cljs.core.truth_(mikron.buffer._BANG_le_STAR_)?mikron.buffer._BANG_le_STAR_.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {mikron.buffer.ByteBufferOps}
*/
mikron.buffer.ByteBufferImplCljsBrowser = (function (data_view,int8_array,pos,le){
this.data_view = data_view;
this.int8_array = int8_array;
this.pos = pos;
this.le = le;
})
mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_pos_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.pos = value;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_double_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value243 = self__.data_view.setFloat64(self__.pos,value,self__.le);
self__.pos = (self__.pos + (8));

return value243;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_double_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value244 = self__.data_view.getFloat64(self__.pos,self__.le);
self__.pos = (self__.pos + (8));

return value244;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_byte_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value245 = self__.data_view.getInt8(self__.pos);
self__.pos = (self__.pos + (1));

return value245;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_pos_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_le_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.le = value;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_long_STAR_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var value__$1 = mikron.util.math.from.call(null,value);
var low = value__$1.getLowBits();
var high = value__$1.getHighBits();
if(self__.le){
mikron.buffer._BANG_int_STAR_.call(null,this$__$1,low);

return mikron.buffer._BANG_int_STAR_.call(null,this$__$1,high);
} else {
mikron.buffer._BANG_int_STAR_.call(null,this$__$1,high);

return mikron.buffer._BANG_int_STAR_.call(null,this$__$1,low);
}
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_bytes_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
self__.int8_array.set((new Int8Array(value)),self__.pos);

return self__.pos = (self__.pos + value.byteLength);
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_bytes_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.int8_array.slice((0),self__.pos).buffer;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_short_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value246 = self__.data_view.setInt16(self__.pos,value,self__.le);
self__.pos = (self__.pos + (2));

return value246;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_int_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value247 = self__.data_view.getInt32(self__.pos,self__.le);
self__.pos = (self__.pos + (4));

return value247;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_le_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.le;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_long_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mikron.util.math.to.call(null,(function (){var u = mikron.buffer._QMARK_int_STAR_.call(null,this$__$1);
var v = mikron.buffer._QMARK_int_STAR_.call(null,this$__$1);
if(self__.le){
return mikron.util.math.from.call(null,u,v);
} else {
return mikron.util.math.from.call(null,v,u);
}
})());
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_byte_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value248 = self__.data_view.setInt8(self__.pos,value);
self__.pos = (self__.pos + (1));

return value248;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_float_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value249 = self__.data_view.getFloat32(self__.pos,self__.le);
self__.pos = (self__.pos + (4));

return value249;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_int_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value250 = self__.data_view.setInt32(self__.pos,value,self__.le);
self__.pos = (self__.pos + (4));

return value250;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_bytes_STAR_$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var from = self__.pos;
var to = (self__.pos + n);
self__.pos = to;

return self__.int8_array.slice(from,to).buffer;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_BANG_float_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value251 = self__.data_view.setFloat32(self__.pos,value,self__.le);
self__.pos = (self__.pos + (4));

return value251;
});

mikron.buffer.ByteBufferImplCljsBrowser.prototype.mikron$buffer$ByteBufferOps$_QMARK_short_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value242 = self__.data_view.getInt16(self__.pos,self__.le);
self__.pos = (self__.pos + (2));

return value242;
});

mikron.buffer.ByteBufferImplCljsBrowser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data-view","data-view",(-511535157),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","DataView","js/DataView",(-1837680350),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"int8-array","int8-array",(594499285),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","Int8Array","js/Int8Array",(1115836735),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"le","le",(1421379234),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null);
});

mikron.buffer.ByteBufferImplCljsBrowser.cljs$lang$type = true;

mikron.buffer.ByteBufferImplCljsBrowser.cljs$lang$ctorStr = "mikron.buffer/ByteBufferImplCljsBrowser";

mikron.buffer.ByteBufferImplCljsBrowser.cljs$lang$ctorPrWriter = (function (this__21580__auto__,writer__21581__auto__,opt__21582__auto__){
return cljs.core._write.call(null,writer__21581__auto__,"mikron.buffer/ByteBufferImplCljsBrowser");
});

(function (){
mikron.buffer.__GT_ByteBufferImplCljsBrowser = (function mikron$buffer$__GT_ByteBufferImplCljsBrowser(data_view,int8_array,pos,le){
return (new mikron.buffer.ByteBufferImplCljsBrowser(data_view,int8_array,pos,le));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_ByteBufferImplCljsBrowser;},new cljs.core.Symbol("mikron.buffer","->ByteBufferImplCljsBrowser","mikron.buffer/->ByteBufferImplCljsBrowser",(-1801223383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),null], null), null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->ByteBufferImplCljsBrowser","->ByteBufferImplCljsBrowser",(-1039585115),null),"mikron/buffer.cljc",(38),(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(125),(125),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data-view","data-view",(-511535157),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","DataView","js/DataView",(-1837680350),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"int8-array","int8-array",(594499285),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","Int8Array","js/Int8Array",(1115836735),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"le","le",(1421379234),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),null,null,(cljs.core.truth_(mikron.buffer.__GT_ByteBufferImplCljsBrowser)?mikron.buffer.__GT_ByteBufferImplCljsBrowser.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {mikron.buffer.ByteBufferOps}
*/
mikron.buffer.ByteBufferImplCljsNode = (function (buffer,pos,le){
this.buffer = buffer;
this.pos = pos;
this.le = le;
})
mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_pos_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.pos = value;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_double_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value253 = ((self__.le)?self__.buffer.writeDoubleLE(value,self__.pos,true):self__.buffer.writeDoubleBE(value,self__.pos,true));
self__.pos = (self__.pos + (8));

return value253;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_double_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value254 = ((self__.le)?self__.buffer.readDoubleLE(self__.pos,true):self__.buffer.readDoubleBE(self__.pos,true));
self__.pos = (self__.pos + (8));

return value254;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_byte_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value255 = self__.buffer.readInt8(self__.pos,true);
self__.pos = (self__.pos + (1));

return value255;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_pos_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_le_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return self__.le = value;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_long_STAR_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
var value__$1 = mikron.util.math.from.call(null,value);
var low = value__$1.getLowBits();
var high = value__$1.getHighBits();
if(self__.le){
mikron.buffer._BANG_int_STAR_.call(null,this$__$1,low);

return mikron.buffer._BANG_int_STAR_.call(null,this$__$1,high);
} else {
mikron.buffer._BANG_int_STAR_.call(null,this$__$1,high);

return mikron.buffer._BANG_int_STAR_.call(null,this$__$1,low);
}
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_bytes_STAR_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
Buffer.from(value).copy(self__.buffer,self__.pos);

return self__.pos = (self__.pos + value.byteLength);
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_bytes_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buffer.buffer.slice((0),self__.pos);
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_short_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value256 = ((self__.le)?self__.buffer.writeInt16LE(value,self__.pos,true):self__.buffer.writeInt16BE(value,self__.pos,true));
self__.pos = (self__.pos + (2));

return value256;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_int_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value257 = ((self__.le)?self__.buffer.readInt32LE(self__.pos,true):self__.buffer.readInt32BE(self__.pos,true));
self__.pos = (self__.pos + (4));

return value257;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_le_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.le;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_long_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mikron.util.math.to.call(null,(function (){var u = mikron.buffer._QMARK_int_STAR_.call(null,this$__$1);
var v = mikron.buffer._QMARK_int_STAR_.call(null,this$__$1);
if(self__.le){
return mikron.util.math.from.call(null,u,v);
} else {
return mikron.util.math.from.call(null,v,u);
}
})());
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_byte_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value258 = self__.buffer.writeInt8(value,self__.pos,true);
self__.pos = (self__.pos + (1));

return value258;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_float_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value259 = ((self__.le)?self__.buffer.readFloatLE(self__.pos,true):self__.buffer.readFloatBE(self__.pos,true));
self__.pos = (self__.pos + (4));

return value259;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_int_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value260 = ((self__.le)?self__.buffer.writeInt32LE(value,self__.pos,true):self__.buffer.writeInt32BE(value,self__.pos,true));
self__.pos = (self__.pos + (4));

return value260;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_bytes_STAR_$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var from = self__.pos;
var to = (self__.pos + n);
self__.pos = to;

return self__.buffer.buffer.slice(from,to);
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_BANG_float_STAR_$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
var value261 = ((self__.le)?self__.buffer.writeFloatLE(value,self__.pos,true):self__.buffer.writeFloatBE(value,self__.pos,true));
self__.pos = (self__.pos + (4));

return value261;
});

mikron.buffer.ByteBufferImplCljsNode.prototype.mikron$buffer$ByteBufferOps$_QMARK_short_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var value252 = ((self__.le)?self__.buffer.readInt16LE(self__.pos,true):self__.buffer.readInt16BE(self__.pos,true));
self__.pos = (self__.pos + (2));

return value252;
});

mikron.buffer.ByteBufferImplCljsNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","Buffer","js/Buffer",(-358741242),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"le","le",(1421379234),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null);
});

mikron.buffer.ByteBufferImplCljsNode.cljs$lang$type = true;

mikron.buffer.ByteBufferImplCljsNode.cljs$lang$ctorStr = "mikron.buffer/ByteBufferImplCljsNode";

mikron.buffer.ByteBufferImplCljsNode.cljs$lang$ctorPrWriter = (function (this__21580__auto__,writer__21581__auto__,opt__21582__auto__){
return cljs.core._write.call(null,writer__21581__auto__,"mikron.buffer/ByteBufferImplCljsNode");
});

(function (){
mikron.buffer.__GT_ByteBufferImplCljsNode = (function mikron$buffer$__GT_ByteBufferImplCljsNode(buffer,pos,le){
return (new mikron.buffer.ByteBufferImplCljsNode(buffer,pos,le));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_ByteBufferImplCljsNode;},new cljs.core.Symbol("mikron.buffer","->ByteBufferImplCljsNode","mikron.buffer/->ByteBufferImplCljsNode",(1091277575),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("mikron.buffer","ByteBufferOps","mikron.buffer/ByteBufferOps",(-1859797216),null),null], null), null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->ByteBufferImplCljsNode","->ByteBufferImplCljsNode",(-1632550509),null),"mikron/buffer.cljc",(35),(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(190),(190),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol("js","Buffer","js/Buffer",(-358741242),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"le","le",(1421379234),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",(-164143950)),true,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null))], null)),null,null,(cljs.core.truth_(mikron.buffer.__GT_ByteBufferImplCljsNode)?mikron.buffer.__GT_ByteBufferImplCljsNode.cljs$lang$test:null)])));})()
;


/**
* @constructor
*/
mikron.buffer.Buffer = (function (bit_buffer,byte_buffer){
this.bit_buffer = bit_buffer;
this.byte_buffer = byte_buffer;
})

mikron.buffer.Buffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bit-buffer","bit-buffer",(1061814737),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"byte-buffer","byte-buffer",(-1392112133),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null], null))], null);
});

mikron.buffer.Buffer.cljs$lang$type = true;

mikron.buffer.Buffer.cljs$lang$ctorStr = "mikron.buffer/Buffer";

mikron.buffer.Buffer.cljs$lang$ctorPrWriter = (function (this__21580__auto__,writer__21581__auto__,opt__21582__auto__){
return cljs.core._write.call(null,writer__21581__auto__,"mikron.buffer/Buffer");
});

(function (){
mikron.buffer.__GT_Buffer = (function mikron$buffer$__GT_Buffer(bit_buffer,byte_buffer){
return (new mikron.buffer.Buffer(bit_buffer,byte_buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_Buffer;},new cljs.core.Symbol("mikron.buffer","->Buffer","mikron.buffer/->Buffer",(1690601820),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->Buffer","->Buffer",(-1833271344),null),"mikron/buffer.cljc",(16),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(253),(253),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bit-buffer","bit-buffer",(1061814737),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"byte-buffer","byte-buffer",(-1392112133),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),null], null))], null)),null,null,(cljs.core.truth_(mikron.buffer.__GT_Buffer)?mikron.buffer.__GT_Buffer.cljs$lang$test:null)])));})()
;

/**
 * Gets the byte buffer of `buffer`.
 */
(function (){
mikron.buffer._QMARK_byte_buffer = (function mikron$buffer$_QMARK_byte_buffer(buffer){
return buffer.byte_buffer;
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_byte_buffer;},new cljs.core.Symbol("mikron.buffer","?byte-buffer","mikron.buffer/?byte-buffer",(1915494303),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?byte-buffer","?byte-buffer",(699773187),null),"mikron/buffer.cljc",(19),(1),(256),(256),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the byte buffer of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_byte_buffer)?mikron.buffer._QMARK_byte_buffer.cljs$lang$test:null)])));})()
;
/**
 * Gets the bit buffer of `buffer`.
 */
(function (){
mikron.buffer._QMARK_bit_buffer = (function mikron$buffer$_QMARK_bit_buffer(buffer){
return buffer.bit_buffer;
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_buffer;},new cljs.core.Symbol("mikron.buffer","?bit-buffer","mikron.buffer/?bit-buffer",(1906891687),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-buffer","?bit-buffer",(-1542387405),null),"mikron/buffer.cljc",(18),(1),(261),(261),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the bit buffer of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bit_buffer)?mikron.buffer._QMARK_bit_buffer.cljs$lang$test:null)])));})()
;
/**
 * Gets the bit position of `buffer`.
 */
(function (){
mikron.buffer._QMARK_bit_pos = (function mikron$buffer$_QMARK_bit_pos(buffer){
return mikron.buffer._QMARK_bit_pos_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_pos;},new cljs.core.Symbol("mikron.buffer","?bit-pos","mikron.buffer/?bit-pos",(-666306089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-pos","?bit-pos",(841370715),null),"mikron/buffer.cljc",(15),(1),(266),(266),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the bit position of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bit_pos)?mikron.buffer._QMARK_bit_pos.cljs$lang$test:null)])));})()
;
/**
 * Sets the bit position of `buffer` to `value`.
 */
(function (){
mikron.buffer._BANG_bit_pos = (function mikron$buffer$_BANG_bit_pos(buffer,value){
return mikron.buffer._BANG_bit_pos_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_pos;},new cljs.core.Symbol("mikron.buffer","!bit-pos","mikron.buffer/!bit-pos",(1483618254),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-pos","!bit-pos",(-1899980222),null),"mikron/buffer.cljc",(15),(1),(271),(271),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Sets the bit position of `buffer` to `value`.",(cljs.core.truth_(mikron.buffer._BANG_bit_pos)?mikron.buffer._BANG_bit_pos.cljs$lang$test:null)])));})()
;
/**
 * Gets the bit index of `buffer`.
 */
(function (){
mikron.buffer._QMARK_bit_index = (function mikron$buffer$_QMARK_bit_index(buffer){
return mikron.buffer._QMARK_bit_index_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_index;},new cljs.core.Symbol("mikron.buffer","?bit-index","mikron.buffer/?bit-index",(753955265),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-index","?bit-index",(424349517),null),"mikron/buffer.cljc",(17),(1),(276),(276),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the bit index of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bit_index)?mikron.buffer._QMARK_bit_index.cljs$lang$test:null)])));})()
;
/**
 * Sets the bit index of `buffer` to `value`.
 */
(function (){
mikron.buffer._BANG_bit_index = (function mikron$buffer$_BANG_bit_index(buffer,value){
return mikron.buffer._BANG_bit_index_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_index;},new cljs.core.Symbol("mikron.buffer","!bit-index","mikron.buffer/!bit-index",(202999715),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-index","!bit-index",(1718841903),null),"mikron/buffer.cljc",(17),(1),(281),(281),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Sets the bit index of `buffer` to `value`.",(cljs.core.truth_(mikron.buffer._BANG_bit_index)?mikron.buffer._BANG_bit_index.cljs$lang$test:null)])));})()
;
/**
 * Gets the bit value of `buffer`.
 */
(function (){
mikron.buffer._QMARK_bit_value = (function mikron$buffer$_QMARK_bit_value(buffer){
return mikron.buffer._QMARK_bit_value_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bit_value;},new cljs.core.Symbol("mikron.buffer","?bit-value","mikron.buffer/?bit-value",(1348217389),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bit-value","?bit-value",(985351313),null),"mikron/buffer.cljc",(17),(1),(286),(286),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the bit value of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bit_value)?mikron.buffer._QMARK_bit_value.cljs$lang$test:null)])));})()
;
/**
 * Sets the bit value of `buffer` to `value`.
 */
(function (){
mikron.buffer._BANG_bit_value = (function mikron$buffer$_BANG_bit_value(buffer,value){
return mikron.buffer._BANG_bit_value_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bit_value;},new cljs.core.Symbol("mikron.buffer","!bit-value","mikron.buffer/!bit-value",(-139804862),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bit-value","!bit-value",(-1378490154),null),"mikron/buffer.cljc",(17),(1),(291),(291),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Sets the bit value of `buffer` to `value`.",(cljs.core.truth_(mikron.buffer._BANG_bit_value)?mikron.buffer._BANG_bit_value.cljs$lang$test:null)])));})()
;
/**
 * Reads a byte from `buffer`.
 */
(function (){
mikron.buffer._QMARK_byte = (function mikron$buffer$_QMARK_byte(buffer){
return mikron.buffer._QMARK_byte_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_byte;},new cljs.core.Symbol("mikron.buffer","?byte","mikron.buffer/?byte",(1779700089),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?byte","?byte",(-1079022587),null),"mikron/buffer.cljc",(12),(1),(298),(298),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a byte from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_byte)?mikron.buffer._QMARK_byte.cljs$lang$test:null)])));})()
;
/**
 * Writes a byte `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_byte = (function mikron$buffer$_BANG_byte(buffer,value){
return mikron.buffer._BANG_byte_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_byte;},new cljs.core.Symbol("mikron.buffer","!byte","mikron.buffer/!byte",(-246488635),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!byte","!byte",(187011897),null),"mikron/buffer.cljc",(12),(1),(303),(303),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes a byte `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_byte)?mikron.buffer._BANG_byte.cljs$lang$test:null)])));})()
;
/**
 * Reads a short from `buffer`.
 */
(function (){
mikron.buffer._QMARK_short = (function mikron$buffer$_QMARK_short(buffer){
return mikron.buffer._QMARK_short_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_short;},new cljs.core.Symbol("mikron.buffer","?short","mikron.buffer/?short",(-2001169612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?short","?short",(-1522012736),null),"mikron/buffer.cljc",(13),(1),(308),(308),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a short from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_short)?mikron.buffer._QMARK_short.cljs$lang$test:null)])));})()
;
/**
 * Writes a short `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_short = (function mikron$buffer$_BANG_short(buffer,value){
return mikron.buffer._BANG_short_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_short;},new cljs.core.Symbol("mikron.buffer","!short","mikron.buffer/!short",(-357672178),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!short","!short",(-1073117030),null),"mikron/buffer.cljc",(13),(1),(313),(313),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes a short `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_short)?mikron.buffer._BANG_short.cljs$lang$test:null)])));})()
;
/**
 * Reads an int from `buffer`.
 */
(function (){
mikron.buffer._QMARK_int = (function mikron$buffer$_QMARK_int(buffer){
return mikron.buffer._QMARK_int_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_int;},new cljs.core.Symbol("mikron.buffer","?int","mikron.buffer/?int",(1765747627),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?int","?int",(-1633264329),null),"mikron/buffer.cljc",(11),(1),(318),(318),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads an int from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_int)?mikron.buffer._QMARK_int.cljs$lang$test:null)])));})()
;
/**
 * Writes an int `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_int = (function mikron$buffer$_BANG_int(buffer,value){
return mikron.buffer._BANG_int_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_int;},new cljs.core.Symbol("mikron.buffer","!int","mikron.buffer/!int",(2099237417),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!int","!int",(192331685),null),"mikron/buffer.cljc",(11),(1),(323),(323),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes an int `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_int)?mikron.buffer._BANG_int.cljs$lang$test:null)])));})()
;
/**
 * Reads a long from `buffer`.
 */
(function (){
mikron.buffer._QMARK_long = (function mikron$buffer$_QMARK_long(buffer){
return mikron.buffer._QMARK_long_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_long;},new cljs.core.Symbol("mikron.buffer","?long","mikron.buffer/?long",(1147988279),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?long","?long",(533175203),null),"mikron/buffer.cljc",(12),(1),(328),(328),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a long from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_long)?mikron.buffer._QMARK_long.cljs$lang$test:null)])));})()
;
/**
 * Writes a long `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_long = (function mikron$buffer$_BANG_long(buffer,value){
return mikron.buffer._BANG_long_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_long;},new cljs.core.Symbol("mikron.buffer","!long","mikron.buffer/!long",(-497472348),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!long","!long",(-936223184),null),"mikron/buffer.cljc",(12),(1),(333),(333),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes a long `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_long)?mikron.buffer._BANG_long.cljs$lang$test:null)])));})()
;
/**
 * Reads a float from `buffer`.
 */
(function (){
mikron.buffer._QMARK_float = (function mikron$buffer$_QMARK_float(buffer){
return mikron.buffer._QMARK_float_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_float;},new cljs.core.Symbol("mikron.buffer","?float","mikron.buffer/?float",(205693626),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?float","?float",(584808206),null),"mikron/buffer.cljc",(13),(1),(338),(338),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a float from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_float)?mikron.buffer._QMARK_float.cljs$lang$test:null)])));})()
;
/**
 * Writes a float `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_float = (function mikron$buffer$_BANG_float(buffer,value){
return mikron.buffer._BANG_float_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_float;},new cljs.core.Symbol("mikron.buffer","!float","mikron.buffer/!float",(-1714974889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!float","!float",(-1217847069),null),"mikron/buffer.cljc",(13),(1),(343),(343),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Writes a float `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_float)?mikron.buffer._BANG_float.cljs$lang$test:null)])));})()
;
/**
 * Reads a double from `buffer`.
 */
(function (){
mikron.buffer._QMARK_double = (function mikron$buffer$_QMARK_double(buffer){
return mikron.buffer._QMARK_double_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_double;},new cljs.core.Symbol("mikron.buffer","?double","mikron.buffer/?double",(1477055599),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?double","?double",(1990510291),null),"mikron/buffer.cljc",(14),(1),(348),(348),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a double from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_double)?mikron.buffer._QMARK_double.cljs$lang$test:null)])));})()
;
/**
 * Writes a double `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_double = (function mikron$buffer$_BANG_double(buffer,value){
return mikron.buffer._BANG_double_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_double;},new cljs.core.Symbol("mikron.buffer","!double","mikron.buffer/!double",(1437030332),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!double","!double",(2144175408),null),"mikron/buffer.cljc",(14),(1),(353),(353),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"double","double",(-1769548886),null)], null))], null)),"Writes a double `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_double)?mikron.buffer._BANG_double.cljs$lang$test:null)])));})()
;
/**
 * Reads `n` bytes from `buffer`.
 */
(function (){
mikron.buffer._QMARK_bytes = (function mikron$buffer$_QMARK_bytes(buffer,n){
return mikron.buffer._QMARK_bytes_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),n);
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bytes;},new cljs.core.Symbol("mikron.buffer","?bytes","mikron.buffer/?bytes",(616734765),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bytes","?bytes",(-765168735),null),"mikron/buffer.cljc",(13),(1),(358),(358),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Reads `n` bytes from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bytes)?mikron.buffer._QMARK_bytes.cljs$lang$test:null)])));})()
;
/**
 * Writes some bytes `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_bytes = (function mikron$buffer$_BANG_bytes(buffer,value){
return mikron.buffer._BANG_bytes_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_bytes;},new cljs.core.Symbol("mikron.buffer","!bytes","mikron.buffer/!bytes",(392471405),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!bytes","!bytes",(1656885473),null),"mikron/buffer.cljc",(13),(1),(363),(363),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes some bytes `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_bytes)?mikron.buffer._BANG_bytes.cljs$lang$test:null)])));})()
;
/**
 * Reads all bytes from `buffer`.
 */
(function (){
mikron.buffer._QMARK_bytes_all = (function mikron$buffer$_QMARK_bytes_all(buffer){
return mikron.buffer._QMARK_bytes_all_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_bytes_all;},new cljs.core.Symbol("mikron.buffer","?bytes-all","mikron.buffer/?bytes-all",(-2084392774),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?bytes-all","?bytes-all",(-1452546738),null),"mikron/buffer.cljc",(17),(1),(368),(368),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads all bytes from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_bytes_all)?mikron.buffer._QMARK_bytes_all.cljs$lang$test:null)])));})()
;
/**
 * Gets the position of `buffer`.
 */
(function (){
mikron.buffer._QMARK_pos = (function mikron$buffer$_QMARK_pos(buffer){
return mikron.buffer._QMARK_pos_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_pos;},new cljs.core.Symbol("mikron.buffer","?pos","mikron.buffer/?pos",(1617878580),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?pos","?pos",(535915688),null),"mikron/buffer.cljc",(11),(1),(373),(373),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the position of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_pos)?mikron.buffer._QMARK_pos.cljs$lang$test:null)])));})()
;
/**
 * Sets the position of `buffer`.
 */
(function (){
mikron.buffer._BANG_pos = (function mikron$buffer$_BANG_pos(buffer,value){
return mikron.buffer._BANG_pos_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_pos;},new cljs.core.Symbol("mikron.buffer","!pos","mikron.buffer/!pos",(982470106),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!pos","!pos",(336651118),null),"mikron/buffer.cljc",(11),(1),(378),(378),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Sets the position of `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_pos)?mikron.buffer._BANG_pos.cljs$lang$test:null)])));})()
;
/**
 * Gets the endianness of `buffer`.
 */
(function (){
mikron.buffer._QMARK_le = (function mikron$buffer$_QMARK_le(buffer){
return mikron.buffer._QMARK_le_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_le;},new cljs.core.Symbol("mikron.buffer","?le","mikron.buffer/?le",(-484322879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?le","?le",(-1991858603),null),"mikron/buffer.cljc",(10),(1),(383),(383),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Gets the endianness of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_le)?mikron.buffer._QMARK_le.cljs$lang$test:null)])));})()
;
/**
 * Sets the endianness of `buffer`.
 */
(function (){
mikron.buffer._BANG_le = (function mikron$buffer$_BANG_le(buffer,value){
return mikron.buffer._BANG_le_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_le;},new cljs.core.Symbol("mikron.buffer","!le","mikron.buffer/!le",(-2145645614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!le","!le",(1785035046),null),"mikron/buffer.cljc",(10),(1),(388),(388),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Sets the endianness of `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_le)?mikron.buffer._BANG_le.cljs$lang$test:null)])));})()
;
/**
 * Reads an unsigned byte from `buffer`.
 */
(function (){
mikron.buffer._QMARK_ubyte = (function mikron$buffer$_QMARK_ubyte(buffer){
return (mikron.buffer._QMARK_byte.call(null,buffer) & (255));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_ubyte;},new cljs.core.Symbol("mikron.buffer","?ubyte","mikron.buffer/?ubyte",(-837226048),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?ubyte","?ubyte",(-1199364276),null),"mikron/buffer.cljc",(13),(1),(395),(395),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads an unsigned byte from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_ubyte)?mikron.buffer._QMARK_ubyte.cljs$lang$test:null)])));})()
;
/**
 * Writes an unsigned byte `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_ubyte = (function mikron$buffer$_BANG_ubyte(buffer,value){
return mikron.buffer._BANG_byte.call(null,buffer,(value & (255)));
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_ubyte;},new cljs.core.Symbol("mikron.buffer","!ubyte","mikron.buffer/!ubyte",(-1180328693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!ubyte","!ubyte",(1406028679),null),"mikron/buffer.cljc",(13),(1),(400),(400),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes an unsigned byte `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_ubyte)?mikron.buffer._BANG_ubyte.cljs$lang$test:null)])));})()
;
/**
 * Reads an unsigned short from `buffer`.
 */
(function (){
mikron.buffer._QMARK_ushort = (function mikron$buffer$_QMARK_ushort(buffer){
return (mikron.buffer._QMARK_short.call(null,buffer) & (65535));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_ushort;},new cljs.core.Symbol("mikron.buffer","?ushort","mikron.buffer/?ushort",(1429909480),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?ushort","?ushort",(-1554245260),null),"mikron/buffer.cljc",(14),(1),(405),(405),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads an unsigned short from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_ushort)?mikron.buffer._QMARK_ushort.cljs$lang$test:null)])));})()
;
/**
 * Writes an unsigned short `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_ushort = (function mikron$buffer$_BANG_ushort(buffer,value){
return mikron.buffer._BANG_short.call(null,buffer,(value & (65535)));
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_ushort;},new cljs.core.Symbol("mikron.buffer","!ushort","mikron.buffer/!ushort",(1022277988),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!ushort","!ushort",(1451690960),null),"mikron/buffer.cljc",(14),(1),(410),(410),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes an unsigned short `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_ushort)?mikron.buffer._BANG_ushort.cljs$lang$test:null)])));})()
;
/**
 * Reads an unsigned int from `buffer`.
 */
(function (){
mikron.buffer._QMARK_uint = (function mikron$buffer$_QMARK_uint(buffer){
return (mikron.buffer._QMARK_int.call(null,buffer) >>> (0));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_uint;},new cljs.core.Symbol("mikron.buffer","?uint","mikron.buffer/?uint",(-1883398756),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?uint","?uint",(1505978376),null),"mikron/buffer.cljc",(12),(1),(415),(415),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads an unsigned int from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_uint)?mikron.buffer._QMARK_uint.cljs$lang$test:null)])));})()
;
/**
 * Writes an unsigned int `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_uint = (function mikron$buffer$_BANG_uint(buffer,value){
return mikron.buffer._BANG_int.call(null,buffer,cljs.core.unchecked_int.call(null,(value & (4294967295))));
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_uint;},new cljs.core.Symbol("mikron.buffer","!uint","mikron.buffer/!uint",(-684241202),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!uint","!uint",(-381150158),null),"mikron/buffer.cljc",(12),(1),(421),(421),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes an unsigned int `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_uint)?mikron.buffer._BANG_uint.cljs$lang$test:null)])));})()
;
/**
 * Writes a byte to the given position in `buffer`.
 */
(function (){
mikron.buffer._BANG_byte_at = (function mikron$buffer$_BANG_byte_at(buffer,pos,value){
var pos_SINGLEQUOTE_ = mikron.buffer._QMARK_pos.call(null,buffer);
var G__263 = buffer;
mikron.buffer._BANG_pos.call(null,G__263,pos);

mikron.buffer._BANG_byte.call(null,G__263,value);

mikron.buffer._BANG_pos.call(null,G__263,pos_SINGLEQUOTE_);

return G__263;
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_byte_at;},new cljs.core.Symbol("mikron.buffer","!byte-at","mikron.buffer/!byte-at",(1155647482),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!byte-at","!byte-at",(1850119302),null),"mikron/buffer.cljc",(15),(1),(426),(426),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",(775924307),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes a byte to the given position in `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_byte_at)?mikron.buffer._BANG_byte_at.cljs$lang$test:null)])));})()
;
/**
 * Reads a boolean from `buffer`.
 */
(function (){
mikron.buffer._QMARK_boolean = (function mikron$buffer$_QMARK_boolean(buffer){
if(((0) === cljs.core.rem.call(null,mikron.buffer._QMARK_bit_index.call(null,buffer),(8)))){
mikron.buffer._BANG_bit_value.call(null,buffer,mikron.buffer._QMARK_byte.call(null,buffer));
} else {
}

var index = mikron.buffer._QMARK_bit_index.call(null,buffer);
mikron.buffer._BANG_bit_index.call(null,buffer,(index + (1)));

return !(((0) === (mikron.buffer._QMARK_bit_value.call(null,buffer) & ((1) << cljs.core.rem.call(null,index,(8))))));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_boolean;},new cljs.core.Symbol("mikron.buffer","?boolean","mikron.buffer/?boolean",(616681797),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?boolean","?boolean",(1919452857),null),"mikron/buffer.cljc",(15),(1),(435),(435),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a boolean from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_boolean)?mikron.buffer._QMARK_boolean.cljs$lang$test:null)])));})()
;
/**
 * Writes a boolean `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_boolean = (function mikron$buffer$_BANG_boolean(buffer,value){
if(((0) === cljs.core.rem.call(null,mikron.buffer._QMARK_bit_index.call(null,buffer),(8)))){
if((mikron.buffer._QMARK_bit_index.call(null,buffer) > (0))){
mikron.buffer._BANG_byte_at.call(null,buffer,mikron.buffer._QMARK_bit_pos.call(null,buffer),mikron.buffer._QMARK_bit_value.call(null,buffer));
} else {
}

mikron.buffer._BANG_bit_pos.call(null,buffer,mikron.buffer._QMARK_pos.call(null,buffer));

mikron.buffer._BANG_bit_value.call(null,buffer,(0));

mikron.buffer._BANG_pos.call(null,buffer,(mikron.buffer._QMARK_bit_pos.call(null,buffer) + (1)));
} else {
}

var index = mikron.buffer._QMARK_bit_index.call(null,buffer);
var mask = ((1) << cljs.core.rem.call(null,index,(8)));
mikron.buffer._BANG_bit_index.call(null,buffer,(index + (1)));

return mikron.buffer._BANG_bit_value.call(null,buffer,(cljs.core.truth_(value)?(mikron.buffer._QMARK_bit_value.call(null,buffer) | mask):(mikron.buffer._QMARK_bit_value.call(null,buffer) & (~ mask))));
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_boolean;},new cljs.core.Symbol("mikron.buffer","!boolean","mikron.buffer/!boolean",(1727709194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!boolean","!boolean",(457405078),null),"mikron/buffer.cljc",(15),(1),(445),(445),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Writes a boolean `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_boolean)?mikron.buffer._BANG_boolean.cljs$lang$test:null)])));})()
;
/**
 * Reads a varint from `buffer`.
 */
(function (){
mikron.buffer._QMARK_varint = (function mikron$buffer$_QMARK_varint(buffer){
var value = mikron.util.math.c0;
var shift = cljs.core.long$.call(null,(0));
while(true){
if((shift >= (64))){
throw cljs.core.ex_info.call(null,"Malformed varint!",null);
} else {
var byte$ = mikron.util.math.from.call(null,mikron.buffer._QMARK_byte.call(null,buffer));
var value__$1 = mikron.util.math.or.call(null,mikron.util.math.shift_left.call(null,mikron.util.math.and.call(null,byte$,mikron.util.math.c127),shift),value);
if(cljs.core.truth_(mikron.util.math.zero_QMARK_.call(null,mikron.util.math.and.call(null,byte$,mikron.util.math.c128)))){
return mikron.util.math.to.call(null,mikron.util.math.zigzag_decode.call(null,value__$1));
} else {
var G__264 = value__$1;
var G__265 = (shift + (7));
value = G__264;
shift = G__265;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_varint;},new cljs.core.Symbol("mikron.buffer","?varint","mikron.buffer/?varint",(-1603253413),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?varint","?varint",(1309391079),null),"mikron/buffer.cljc",(14),(1),(462),(462),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a varint from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_varint)?mikron.buffer._QMARK_varint.cljs$lang$test:null)])));})()
;
/**
 * Writes a varint `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_varint = (function mikron$buffer$_BANG_varint(buffer,value){
var value__$1 = mikron.util.math.zigzag_encode.call(null,mikron.util.math.from.call(null,value));
while(true){
if(cljs.core.truth_(mikron.util.math.zero_QMARK_.call(null,mikron.util.math.and.call(null,value__$1,mikron.util.math.c_128)))){
return mikron.buffer._BANG_byte.call(null,buffer,mikron.util.math.to.call(null,value__$1));
} else {
mikron.buffer._BANG_byte.call(null,buffer,mikron.util.math.to.call(null,mikron.util.math.or.call(null,mikron.util.math.and.call(null,value__$1,mikron.util.math.c127),mikron.util.math.c128)));

var G__266 = mikron.util.math.unsigned_shift_right.call(null,value__$1,(7));
value__$1 = G__266;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_varint;},new cljs.core.Symbol("mikron.buffer","!varint","mikron.buffer/!varint",(24130119),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!varint","!varint",(-270956613),null),"mikron/buffer.cljc",(14),(1),(477),(477),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Writes a varint `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_varint)?mikron.buffer._BANG_varint.cljs$lang$test:null)])));})()
;
/**
 * Reads a binary value from `buffer`.
 */
(function (){
mikron.buffer._QMARK_binary = (function mikron$buffer$_QMARK_binary(buffer){
return mikron.buffer._QMARK_bytes.call(null,buffer,mikron.buffer._QMARK_varint.call(null,buffer));
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_binary;},new cljs.core.Symbol("mikron.buffer","?binary","mikron.buffer/?binary",(339974084),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?binary","?binary",(1071467080),null),"mikron/buffer.cljc",(14),(1),(489),(489),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads a binary value from `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_binary)?mikron.buffer._QMARK_binary.cljs$lang$test:null)])));})()
;
/**
 * Writes a binary value `value` to `buffer`.
 */
(function (){
mikron.buffer._BANG_binary = (function mikron$buffer$_BANG_binary(buffer,value){
var G__268 = buffer;
mikron.buffer._BANG_varint.call(null,G__268,value.byteLength);

mikron.buffer._BANG_bytes.call(null,G__268,value);

return G__268;
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_binary;},new cljs.core.Symbol("mikron.buffer","!binary","mikron.buffer/!binary",(243974873),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!binary","!binary",(895512677),null),"mikron/buffer.cljc",(14),(1),(494),(494),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null)], null))], null)),"Writes a binary value `value` to `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_binary)?mikron.buffer._BANG_binary.cljs$lang$test:null)])));})()
;
/**
 * Resets `buffer`.
 */
(function (){
mikron.buffer._BANG_reset = (function mikron$buffer$_BANG_reset(buffer){
var G__270 = buffer;
mikron.buffer._BANG_pos.call(null,G__270,(0));

mikron.buffer._BANG_bit_pos.call(null,G__270,(-1));

mikron.buffer._BANG_bit_value.call(null,G__270,(0));

mikron.buffer._BANG_bit_index.call(null,G__270,(0));

return G__270;
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_reset;},new cljs.core.Symbol("mikron.buffer","!reset","mikron.buffer/!reset",(2137141573),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!reset","!reset",(-1593252167),null),"mikron/buffer.cljc",(13),(1),(504),(504),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Resets `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_reset)?mikron.buffer._BANG_reset.cljs$lang$test:null)])));})()
;
/**
 * Finalizes `buffer`.
 */
(function (){
mikron.buffer._BANG_finalize = (function mikron$buffer$_BANG_finalize(buffer){
var bit_pos = mikron.buffer._QMARK_bit_pos.call(null,buffer);
if(((-1) === bit_pos)){
return null;
} else {
return mikron.buffer._BANG_byte_at.call(null,buffer,bit_pos,mikron.buffer._QMARK_bit_value.call(null,buffer));
}
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_finalize;},new cljs.core.Symbol("mikron.buffer","!finalize","mikron.buffer/!finalize",(-1631231556),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!finalize","!finalize",(1220333360),null),"mikron/buffer.cljc",(16),(1),(513),(513),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Finalizes `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_finalize)?mikron.buffer._BANG_finalize.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
mikron.buffer.ByteBufferFactoryOps = function(){}; return (
new cljs.core.Var(function(){return mikron.buffer.ByteBufferFactoryOps;},new cljs.core.Symbol("mikron.buffer","ByteBufferFactoryOps","mikron.buffer/ByteBufferFactoryOps",(1624378086),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"ByteBufferFactoryOps","ByteBufferFactoryOps",(-1233422230),null),"mikron/buffer.cljc",(50),(1),(520),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"allocate*","allocate*",(-1145608660),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Allocates a buffer with size `size`."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"wrap*","wrap*",(203976753),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Wraps a binary value `binary` with a buffer."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"binary","binary",(-161700761),null)], null)], null)])], null),(520),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(mikron.buffer.ByteBufferFactoryOps)?mikron.buffer.ByteBufferFactoryOps.cljs$lang$test:null)])));})()
;

/**
 * Allocates a buffer with size `size`.
 */
(function (){
mikron.buffer.allocate_STAR_ = (function mikron$buffer$allocate_STAR_(this$,size){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferFactoryOps$allocate_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferFactoryOps$allocate_STAR_$arity$2(this$,size);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer.allocate_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,size);
} else {
var m__21637__auto____$1 = (mikron.buffer.allocate_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,size);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferFactoryOps.allocate*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer.allocate_STAR_;},new cljs.core.Symbol("mikron.buffer","allocate*","mikron.buffer/allocate*",(-1776430888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferFactoryOps","mikron.buffer/ByteBufferFactoryOps",(1624378086),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"allocate*","allocate*",(-1145608660),null),"mikron/buffer.cljc",(1),(520),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),"Allocates a buffer with size `size`.",(cljs.core.truth_(mikron.buffer.allocate_STAR_)?mikron.buffer.allocate_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Wraps a binary value `binary` with a buffer.
 */
(function (){
mikron.buffer.wrap_STAR_ = (function mikron$buffer$wrap_STAR_(this$,binary){
if((!((this$ == null))) && (!((this$.mikron$buffer$ByteBufferFactoryOps$wrap_STAR_$arity$2 == null)))){
return this$.mikron$buffer$ByteBufferFactoryOps$wrap_STAR_$arity$2(this$,binary);
} else {
var x__21636__auto__ = (((this$ == null))?null:this$);
var m__21637__auto__ = (mikron.buffer.wrap_STAR_[goog.typeOf(x__21636__auto__)]);
if(!((m__21637__auto__ == null))){
return m__21637__auto__.call(null,this$,binary);
} else {
var m__21637__auto____$1 = (mikron.buffer.wrap_STAR_["_"]);
if(!((m__21637__auto____$1 == null))){
return m__21637__auto____$1.call(null,this$,binary);
} else {
throw cljs.core.missing_protocol.call(null,"ByteBufferFactoryOps.wrap*",this$);
}
}
}
}); return (
new cljs.core.Var(function(){return mikron.buffer.wrap_STAR_;},new cljs.core.Symbol("mikron.buffer","wrap*","mikron.buffer/wrap*",(1942406821),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("mikron.buffer","ByteBufferFactoryOps","mikron.buffer/ByteBufferFactoryOps",(1624378086),null),new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"wrap*","wrap*",(203976753),null),"mikron/buffer.cljc",(1),(520),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"binary","binary",(-161700761),null)], null)),"Wraps a binary value `binary` with a buffer.",(cljs.core.truth_(mikron.buffer.wrap_STAR_)?mikron.buffer.wrap_STAR_.cljs$lang$test:null)])));})()
;

/**
 * Returns `true` if `value` is an instance of `ByteBufferFactoryOps`, `false` otherwise.
 */
(function (){
mikron.buffer.byte_buffer_factory_QMARK_ = (function mikron$buffer$byte_buffer_factory_QMARK_(value){
return (value instanceof mikron.buffer.ByteBufferFactoryOps);
}); return (
new cljs.core.Var(function(){return mikron.buffer.byte_buffer_factory_QMARK_;},new cljs.core.Symbol("mikron.buffer","byte-buffer-factory?","mikron.buffer/byte-buffer-factory?",(-328452436),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"byte-buffer-factory?","byte-buffer-factory?",(-2100993224),null),"mikron/buffer.cljc",(27),(1),(524),(524),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns `true` if `value` is an instance of `ByteBufferFactoryOps`, `false` otherwise.",(cljs.core.truth_(mikron.buffer.byte_buffer_factory_QMARK_)?mikron.buffer.byte_buffer_factory_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {mikron.buffer.ByteBufferFactoryOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mikron.buffer.ByteBufferFactoryImplCljsBrowser = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21601__auto__,k__21602__auto__){
var self__ = this;
var this__21601__auto____$1 = this;
return this__21601__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21602__auto__,null);
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k272,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__274 = k272;
switch (G__274) {
default:
return cljs.core.get.call(null,self__.__extmap,k272,else__21604__auto__);

}
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21615__auto__,writer__21616__auto__,opts__21617__auto__){
var self__ = this;
var this__21615__auto____$1 = this;
var pr_pair__21618__auto__ = ((function (this__21615__auto____$1){
return (function (keyval__21619__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,cljs.core.pr_writer,""," ","",opts__21617__auto__,keyval__21619__auto__);
});})(this__21615__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,pr_pair__21618__auto__,"#mikron.buffer.ByteBufferFactoryImplCljsBrowser{",", ","}",opts__21617__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__271){
var self__ = this;
var G__271__$1 = this;
return (new cljs.core.RecordIter((0),G__271__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21599__auto__){
var self__ = this;
var this__21599__auto____$1 = this;
return self__.__meta;
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21595__auto__){
var self__ = this;
var this__21595__auto____$1 = this;
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(self__.__meta,self__.__extmap,self__.__hash));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21605__auto__){
var self__ = this;
var this__21605__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.mikron$buffer$ByteBufferFactoryOps$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.mikron$buffer$ByteBufferFactoryOps$allocate_STAR_$arity$2 = (function (_,size){
var self__ = this;
var ___$1 = this;
var array_buffer = (new ArrayBuffer(size));
return (new mikron.buffer.ByteBufferImplCljsBrowser((new DataView(array_buffer)),(new Int8Array(array_buffer)),(0),true));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.mikron$buffer$ByteBufferFactoryOps$wrap_STAR_$arity$2 = (function (_,binary){
var self__ = this;
var ___$1 = this;
return (new mikron.buffer.ByteBufferImplCljsBrowser((new DataView(binary)),(new Int8Array(binary)),(0),true));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21596__auto__){
var self__ = this;
var this__21596__auto____$1 = this;
var h__21202__auto__ = self__.__hash;
if(!((h__21202__auto__ == null))){
return h__21202__auto__;
} else {
var h__21202__auto____$1 = cljs.core.hash_imap.call(null,this__21596__auto____$1);
self__.__hash = h__21202__auto____$1;

return h__21202__auto____$1;
}
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21597__auto__,other__21598__auto__){
var self__ = this;
var this__21597__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20483__auto__ = other__21598__auto__;
if(cljs.core.truth_(and__20483__auto__)){
return ((this__21597__auto____$1.constructor === other__21598__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__21597__auto____$1,other__21598__auto__));
} else {
return and__20483__auto__;
}
})())){
return true;
} else {
return false;
}
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21610__auto__,k__21611__auto__){
var self__ = this;
var this__21610__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__21611__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21610__auto____$1),self__.__meta),k__21611__auto__);
} else {
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21611__auto__)),null));
}
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__271){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__275 = cljs.core.keyword_identical_QMARK_;
var expr__276 = k__21609__auto__;
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__271),null));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__271){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(G__271,self__.__extmap,self__.__hash));
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21606__auto__,entry__21607__auto__){
var self__ = this;
var this__21606__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21607__auto__)){
return this__21606__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21607__auto__,(0)),cljs.core._nth.call(null,entry__21607__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21606__auto____$1,entry__21607__auto__);
}
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.cljs$lang$type = true;

mikron.buffer.ByteBufferFactoryImplCljsBrowser.cljs$lang$ctorPrSeq = (function (this__21626__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mikron.buffer/ByteBufferFactoryImplCljsBrowser");
});

mikron.buffer.ByteBufferFactoryImplCljsBrowser.cljs$lang$ctorPrWriter = (function (this__21626__auto__,writer__21627__auto__){
return cljs.core._write.call(null,writer__21627__auto__,"mikron.buffer/ByteBufferFactoryImplCljsBrowser");
});

(function (){
mikron.buffer.__GT_ByteBufferFactoryImplCljsBrowser = (function mikron$buffer$__GT_ByteBufferFactoryImplCljsBrowser(){
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,null,null));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_ByteBufferFactoryImplCljsBrowser;},new cljs.core.Symbol("mikron.buffer","->ByteBufferFactoryImplCljsBrowser","mikron.buffer/->ByteBufferFactoryImplCljsBrowser",(2085024663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->ByteBufferFactoryImplCljsBrowser","->ByteBufferFactoryImplCljsBrowser",(-1548795613),null),"mikron/buffer.cljc",(47),(4),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(538),(538),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mikron.buffer.__GT_ByteBufferFactoryImplCljsBrowser)?mikron.buffer.__GT_ByteBufferFactoryImplCljsBrowser.cljs$lang$test:null)])));})()
;

(function (){
mikron.buffer.map__GT_ByteBufferFactoryImplCljsBrowser = (function mikron$buffer$map__GT_ByteBufferFactoryImplCljsBrowser(G__273){
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,cljs.core.dissoc.call(null,G__273),null));
}); return (
new cljs.core.Var(function(){return mikron.buffer.map__GT_ByteBufferFactoryImplCljsBrowser;},new cljs.core.Symbol("mikron.buffer","map->ByteBufferFactoryImplCljsBrowser","mikron.buffer/map->ByteBufferFactoryImplCljsBrowser",(-2068244490),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"map->ByteBufferFactoryImplCljsBrowser","map->ByteBufferFactoryImplCljsBrowser",(-549295998),null),"mikron/buffer.cljc",(47),(4),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(538),(538),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__273","G__273",(-2010320959),null)], null)),null,(cljs.core.truth_(mikron.buffer.map__GT_ByteBufferFactoryImplCljsBrowser)?mikron.buffer.map__GT_ByteBufferFactoryImplCljsBrowser.cljs$lang$test:null)])));})()
;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {mikron.buffer.ByteBufferFactoryOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mikron.buffer.ByteBufferFactoryImplCljsNode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21601__auto__,k__21602__auto__){
var self__ = this;
var this__21601__auto____$1 = this;
return this__21601__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21602__auto__,null);
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k280,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__282 = k280;
switch (G__282) {
default:
return cljs.core.get.call(null,self__.__extmap,k280,else__21604__auto__);

}
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21615__auto__,writer__21616__auto__,opts__21617__auto__){
var self__ = this;
var this__21615__auto____$1 = this;
var pr_pair__21618__auto__ = ((function (this__21615__auto____$1){
return (function (keyval__21619__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,cljs.core.pr_writer,""," ","",opts__21617__auto__,keyval__21619__auto__);
});})(this__21615__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,pr_pair__21618__auto__,"#mikron.buffer.ByteBufferFactoryImplCljsNode{",", ","}",opts__21617__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__279){
var self__ = this;
var G__279__$1 = this;
return (new cljs.core.RecordIter((0),G__279__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21599__auto__){
var self__ = this;
var this__21599__auto____$1 = this;
return self__.__meta;
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21595__auto__){
var self__ = this;
var this__21595__auto____$1 = this;
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(self__.__meta,self__.__extmap,self__.__hash));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21605__auto__){
var self__ = this;
var this__21605__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.mikron$buffer$ByteBufferFactoryOps$ = cljs.core.PROTOCOL_SENTINEL;

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.mikron$buffer$ByteBufferFactoryOps$allocate_STAR_$arity$2 = (function (_,size){
var self__ = this;
var ___$1 = this;
return (new mikron.buffer.ByteBufferImplCljsNode(Buffer.allocUnsafe(size),(0),true));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.mikron$buffer$ByteBufferFactoryOps$wrap_STAR_$arity$2 = (function (_,binary){
var self__ = this;
var ___$1 = this;
return (new mikron.buffer.ByteBufferImplCljsNode(Buffer.from(binary),(0),true));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21596__auto__){
var self__ = this;
var this__21596__auto____$1 = this;
var h__21202__auto__ = self__.__hash;
if(!((h__21202__auto__ == null))){
return h__21202__auto__;
} else {
var h__21202__auto____$1 = cljs.core.hash_imap.call(null,this__21596__auto____$1);
self__.__hash = h__21202__auto____$1;

return h__21202__auto____$1;
}
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21597__auto__,other__21598__auto__){
var self__ = this;
var this__21597__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20483__auto__ = other__21598__auto__;
if(cljs.core.truth_(and__20483__auto__)){
return ((this__21597__auto____$1.constructor === other__21598__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__21597__auto____$1,other__21598__auto__));
} else {
return and__20483__auto__;
}
})())){
return true;
} else {
return false;
}
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21610__auto__,k__21611__auto__){
var self__ = this;
var this__21610__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__21611__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21610__auto____$1),self__.__meta),k__21611__auto__);
} else {
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21611__auto__)),null));
}
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__279){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__283 = cljs.core.keyword_identical_QMARK_;
var expr__284 = k__21609__auto__;
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__279),null));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__279){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(G__279,self__.__extmap,self__.__hash));
});

mikron.buffer.ByteBufferFactoryImplCljsNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21606__auto__,entry__21607__auto__){
var self__ = this;
var this__21606__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21607__auto__)){
return this__21606__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21607__auto__,(0)),cljs.core._nth.call(null,entry__21607__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21606__auto____$1,entry__21607__auto__);
}
});

mikron.buffer.ByteBufferFactoryImplCljsNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mikron.buffer.ByteBufferFactoryImplCljsNode.cljs$lang$type = true;

mikron.buffer.ByteBufferFactoryImplCljsNode.cljs$lang$ctorPrSeq = (function (this__21626__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mikron.buffer/ByteBufferFactoryImplCljsNode");
});

mikron.buffer.ByteBufferFactoryImplCljsNode.cljs$lang$ctorPrWriter = (function (this__21626__auto__,writer__21627__auto__){
return cljs.core._write.call(null,writer__21627__auto__,"mikron.buffer/ByteBufferFactoryImplCljsNode");
});

(function (){
mikron.buffer.__GT_ByteBufferFactoryImplCljsNode = (function mikron$buffer$__GT_ByteBufferFactoryImplCljsNode(){
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(null,null,null));
}); return (
new cljs.core.Var(function(){return mikron.buffer.__GT_ByteBufferFactoryImplCljsNode;},new cljs.core.Symbol("mikron.buffer","->ByteBufferFactoryImplCljsNode","mikron.buffer/->ByteBufferFactoryImplCljsNode",(-203508735),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"->ByteBufferFactoryImplCljsNode","->ByteBufferFactoryImplCljsNode",(-1368045683),null),"mikron/buffer.cljc",(44),(4),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(551),(551),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mikron.buffer.__GT_ByteBufferFactoryImplCljsNode)?mikron.buffer.__GT_ByteBufferFactoryImplCljsNode.cljs$lang$test:null)])));})()
;

(function (){
mikron.buffer.map__GT_ByteBufferFactoryImplCljsNode = (function mikron$buffer$map__GT_ByteBufferFactoryImplCljsNode(G__281){
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(null,cljs.core.dissoc.call(null,G__281),null));
}); return (
new cljs.core.Var(function(){return mikron.buffer.map__GT_ByteBufferFactoryImplCljsNode;},new cljs.core.Symbol("mikron.buffer","map->ByteBufferFactoryImplCljsNode","mikron.buffer/map->ByteBufferFactoryImplCljsNode",(-800760503),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"map->ByteBufferFactoryImplCljsNode","map->ByteBufferFactoryImplCljsNode",(-420606011),null),"mikron/buffer.cljc",(44),(4),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(551),(551),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__281","G__281",(-1739614715),null)], null)),null,(cljs.core.truth_(mikron.buffer.map__GT_ByteBufferFactoryImplCljsNode)?mikron.buffer.map__GT_ByteBufferFactoryImplCljsNode.cljs$lang$test:null)])));})()
;

/**
 * The default byte buffer factory.
 */
(function (){
mikron.buffer.byte_buffer_factory = (cljs.core.truth_(mikron.util.node_env_QMARK_.call(null))?(new mikron.buffer.ByteBufferFactoryImplCljsNode(null,null,null)):(new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,null,null))); return (
new cljs.core.Var(function(){return mikron.buffer.byte_buffer_factory;},new cljs.core.Symbol("mikron.buffer","byte-buffer-factory","mikron.buffer/byte-buffer-factory",(-627642121),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"byte-buffer-factory","byte-buffer-factory",(-1250416765),null),"mikron/buffer.cljc",(47),(1),(558),(558),new cljs.core.Symbol(null,"ByteBufferFactoryOps","ByteBufferFactoryOps",(-1233422230),null),cljs.core.List.EMPTY,"The default byte buffer factory.",(cljs.core.truth_(mikron.buffer.byte_buffer_factory)?mikron.buffer.byte_buffer_factory.cljs$lang$test:null)])));})()
;
/**
 * Sets the byte buffer factory.
 */
(function (){
mikron.buffer.set_byte_buffer_factory_BANG_ = (function mikron$buffer$set_byte_buffer_factory_BANG_(factory){
if(cljs.core.truth_(mikron.buffer.byte_buffer_factory_QMARK_.call(null,factory))){
} else {
throw (new Error("Assert failed: (byte-buffer-factory? factory)"));
}

return mikron.buffer.byte_buffer_factory = factory;
}); return (
new cljs.core.Var(function(){return mikron.buffer.set_byte_buffer_factory_BANG_;},new cljs.core.Symbol("mikron.buffer","set-byte-buffer-factory!","mikron.buffer/set-byte-buffer-factory!",(-523347695),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"set-byte-buffer-factory!","set-byte-buffer-factory!",(-564661107),null),"mikron/buffer.cljc",(31),(1),(565),(565),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"factory","factory",(1704465273),null)], null)),"Sets the byte buffer factory.",(cljs.core.truth_(mikron.buffer.set_byte_buffer_factory_BANG_)?mikron.buffer.set_byte_buffer_factory_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Allocates a buffer with the size `size`.
 */
(function (){
mikron.buffer.allocate = (function mikron$buffer$allocate(size){
return (new mikron.buffer.Buffer((new mikron.buffer.BitBufferImpl((0),(0),(-1))),mikron.buffer.allocate_STAR_.call(null,mikron.buffer.byte_buffer_factory,size)));
}); return (
new cljs.core.Var(function(){return mikron.buffer.allocate;},new cljs.core.Symbol("mikron.buffer","allocate","mikron.buffer/allocate",(-603568868),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"allocate","allocate",(-1963381880),null),"mikron/buffer.cljc",(15),(1),(572),(572),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"long","long",(1469079434),null)], null))], null)),"Allocates a buffer with the size `size`.",(cljs.core.truth_(mikron.buffer.allocate)?mikron.buffer.allocate.cljs$lang$test:null)])));})()
;
/**
 * Wraps a binary value `binary` with a buffer.
 */
(function (){
mikron.buffer.wrap = (function mikron$buffer$wrap(binary){
return (new mikron.buffer.Buffer((new mikron.buffer.BitBufferImpl((0),(0),(-1))),mikron.buffer.wrap_STAR_.call(null,mikron.buffer.byte_buffer_factory,binary)));
}); return (
new cljs.core.Var(function(){return mikron.buffer.wrap;},new cljs.core.Symbol("mikron.buffer","wrap","mikron.buffer/wrap",(-1183766306),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"wrap","wrap",(-1802765782),null),"mikron/buffer.cljc",(11),(1),(578),(578),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"binary","binary",(-161700761),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null)], null))], null)),"Wraps a binary value `binary` with a buffer.",(cljs.core.truth_(mikron.buffer.wrap)?mikron.buffer.wrap.cljs$lang$test:null)])));})()
;
/**
 * Writes the headers of `buffer`.
 */
(function (){
mikron.buffer._BANG_headers = (function mikron$buffer$_BANG_headers(buffer,diffed_QMARK_){
var G__288 = buffer;
mikron.buffer._BANG_reset.call(null,G__288);

mikron.buffer._BANG_boolean.call(null,G__288,mikron.buffer._QMARK_le.call(null,buffer));

mikron.buffer._BANG_boolean.call(null,G__288,diffed_QMARK_);

return G__288;
}); return (
new cljs.core.Var(function(){return mikron.buffer._BANG_headers;},new cljs.core.Symbol("mikron.buffer","!headers","mikron.buffer/!headers",(-1488483695),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"!headers","!headers",(-1694681059),null),"mikron/buffer.cljc",(15),(1),(584),(584),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null)),new cljs.core.Symbol(null,"diffed?","diffed?",(-454160819),null)], null)),"Writes the headers of `buffer`.",(cljs.core.truth_(mikron.buffer._BANG_headers)?mikron.buffer._BANG_headers.cljs$lang$test:null)])));})()
;
/**
 * Reads the headers of `buffer`.
 */
(function (){
mikron.buffer._QMARK_headers = (function mikron$buffer$_QMARK_headers(buffer){
mikron.buffer._BANG_le.call(null,buffer,mikron.buffer._QMARK_boolean.call(null,buffer));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),mikron.buffer._QMARK_boolean.call(null,buffer)], null);
}); return (
new cljs.core.Var(function(){return mikron.buffer._QMARK_headers;},new cljs.core.Symbol("mikron.buffer","?headers","mikron.buffer/?headers",(-1668613476),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.buffer","mikron.buffer",(-229394077),null),new cljs.core.Symbol(null,"?headers","?headers",(-958327808),null),"mikron/buffer.cljc",(15),(1),(592),(592),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Buffer","Buffer",(-358711607),null)], null))], null)),"Reads the headers of `buffer`.",(cljs.core.truth_(mikron.buffer._QMARK_headers)?mikron.buffer._QMARK_headers.cljs$lang$test:null)])));})()
;
