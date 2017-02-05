goog.provide("mikron.buffer");

/**
 * @interface
 */
mikron.buffer.BitBufferOps = function(){};

/**
 * Gets the current position.
 */
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
});

/**
 * Sets the current position.
 */
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
});

/**
 * Gets the current index.
 */
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
});

/**
 * Sets the current index.
 */
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
});

/**
 * Gets the current value at the index.
 */
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
});

/**
 * Sets the current value at the index.
 */
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
});


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

mikron.buffer.__GT_BitBufferImpl = (function mikron$buffer$__GT_BitBufferImpl(value,index,pos){
return (new mikron.buffer.BitBufferImpl(value,index,pos));
});


/**
 * @interface
 */
mikron.buffer.ByteBufferOps = function(){};

/**
 * Reads a byte.
 */
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
});

/**
 * Writes a byte.
 */
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
});

/**
 * Reads a short.
 */
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
});

/**
 * Writes a short.
 */
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
});

/**
 * Reads an int.
 */
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
});

/**
 * Writes an int.
 */
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
});

/**
 * Reads a long.
 */
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
});

/**
 * Writes a long.
 */
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
});

/**
 * Reads a float.
 */
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
});

/**
 * Writes a float.
 */
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
});

/**
 * Reads a double.
 */
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
});

/**
 * Writes a double.
 */
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
});

/**
 * Reads a given number of bytes.
 */
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
});

/**
 * Writes a given number of bytes.
 */
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
});

/**
 * Reads all written bytes.
 */
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
});

/**
 * Gets the current position.
 */
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
});

/**
 * Sets the current position.
 */
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
});

/**
 * Gets the current endianness.
 */
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
});

/**
 * Sets the current endianness.
 */
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
});


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

mikron.buffer.__GT_ByteBufferImplCljsBrowser = (function mikron$buffer$__GT_ByteBufferImplCljsBrowser(data_view,int8_array,pos,le){
return (new mikron.buffer.ByteBufferImplCljsBrowser(data_view,int8_array,pos,le));
});


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

mikron.buffer.__GT_ByteBufferImplCljsNode = (function mikron$buffer$__GT_ByteBufferImplCljsNode(buffer,pos,le){
return (new mikron.buffer.ByteBufferImplCljsNode(buffer,pos,le));
});


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

mikron.buffer.__GT_Buffer = (function mikron$buffer$__GT_Buffer(bit_buffer,byte_buffer){
return (new mikron.buffer.Buffer(bit_buffer,byte_buffer));
});

/**
 * Gets the byte buffer of `buffer`.
 */
mikron.buffer._QMARK_byte_buffer = (function mikron$buffer$_QMARK_byte_buffer(buffer){
return buffer.byte_buffer;
});
/**
 * Gets the bit buffer of `buffer`.
 */
mikron.buffer._QMARK_bit_buffer = (function mikron$buffer$_QMARK_bit_buffer(buffer){
return buffer.bit_buffer;
});
/**
 * Gets the bit position of `buffer`.
 */
mikron.buffer._QMARK_bit_pos = (function mikron$buffer$_QMARK_bit_pos(buffer){
return mikron.buffer._QMARK_bit_pos_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
});
/**
 * Sets the bit position of `buffer` to `value`.
 */
mikron.buffer._BANG_bit_pos = (function mikron$buffer$_BANG_bit_pos(buffer,value){
return mikron.buffer._BANG_bit_pos_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
});
/**
 * Gets the bit index of `buffer`.
 */
mikron.buffer._QMARK_bit_index = (function mikron$buffer$_QMARK_bit_index(buffer){
return mikron.buffer._QMARK_bit_index_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
});
/**
 * Sets the bit index of `buffer` to `value`.
 */
mikron.buffer._BANG_bit_index = (function mikron$buffer$_BANG_bit_index(buffer,value){
return mikron.buffer._BANG_bit_index_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
});
/**
 * Gets the bit value of `buffer`.
 */
mikron.buffer._QMARK_bit_value = (function mikron$buffer$_QMARK_bit_value(buffer){
return mikron.buffer._QMARK_bit_value_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer));
});
/**
 * Sets the bit value of `buffer` to `value`.
 */
mikron.buffer._BANG_bit_value = (function mikron$buffer$_BANG_bit_value(buffer,value){
return mikron.buffer._BANG_bit_value_STAR_.call(null,mikron.buffer._QMARK_bit_buffer.call(null,buffer),value);
});
/**
 * Reads a byte from `buffer`.
 */
mikron.buffer._QMARK_byte = (function mikron$buffer$_QMARK_byte(buffer){
return mikron.buffer._QMARK_byte_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes a byte `value` to `buffer`.
 */
mikron.buffer._BANG_byte = (function mikron$buffer$_BANG_byte(buffer,value){
return mikron.buffer._BANG_byte_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads a short from `buffer`.
 */
mikron.buffer._QMARK_short = (function mikron$buffer$_QMARK_short(buffer){
return mikron.buffer._QMARK_short_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes a short `value` to `buffer`.
 */
mikron.buffer._BANG_short = (function mikron$buffer$_BANG_short(buffer,value){
return mikron.buffer._BANG_short_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads an int from `buffer`.
 */
mikron.buffer._QMARK_int = (function mikron$buffer$_QMARK_int(buffer){
return mikron.buffer._QMARK_int_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes an int `value` to `buffer`.
 */
mikron.buffer._BANG_int = (function mikron$buffer$_BANG_int(buffer,value){
return mikron.buffer._BANG_int_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads a long from `buffer`.
 */
mikron.buffer._QMARK_long = (function mikron$buffer$_QMARK_long(buffer){
return mikron.buffer._QMARK_long_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes a long `value` to `buffer`.
 */
mikron.buffer._BANG_long = (function mikron$buffer$_BANG_long(buffer,value){
return mikron.buffer._BANG_long_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads a float from `buffer`.
 */
mikron.buffer._QMARK_float = (function mikron$buffer$_QMARK_float(buffer){
return mikron.buffer._QMARK_float_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes a float `value` to `buffer`.
 */
mikron.buffer._BANG_float = (function mikron$buffer$_BANG_float(buffer,value){
return mikron.buffer._BANG_float_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads a double from `buffer`.
 */
mikron.buffer._QMARK_double = (function mikron$buffer$_QMARK_double(buffer){
return mikron.buffer._QMARK_double_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Writes a double `value` to `buffer`.
 */
mikron.buffer._BANG_double = (function mikron$buffer$_BANG_double(buffer,value){
return mikron.buffer._BANG_double_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads `n` bytes from `buffer`.
 */
mikron.buffer._QMARK_bytes = (function mikron$buffer$_QMARK_bytes(buffer,n){
return mikron.buffer._QMARK_bytes_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),n);
});
/**
 * Writes some bytes `value` to `buffer`.
 */
mikron.buffer._BANG_bytes = (function mikron$buffer$_BANG_bytes(buffer,value){
return mikron.buffer._BANG_bytes_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads all bytes from `buffer`.
 */
mikron.buffer._QMARK_bytes_all = (function mikron$buffer$_QMARK_bytes_all(buffer){
return mikron.buffer._QMARK_bytes_all_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Gets the position of `buffer`.
 */
mikron.buffer._QMARK_pos = (function mikron$buffer$_QMARK_pos(buffer){
return mikron.buffer._QMARK_pos_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Sets the position of `buffer`.
 */
mikron.buffer._BANG_pos = (function mikron$buffer$_BANG_pos(buffer,value){
return mikron.buffer._BANG_pos_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Gets the endianness of `buffer`.
 */
mikron.buffer._QMARK_le = (function mikron$buffer$_QMARK_le(buffer){
return mikron.buffer._QMARK_le_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer));
});
/**
 * Sets the endianness of `buffer`.
 */
mikron.buffer._BANG_le = (function mikron$buffer$_BANG_le(buffer,value){
return mikron.buffer._BANG_le_STAR_.call(null,mikron.buffer._QMARK_byte_buffer.call(null,buffer),value);
});
/**
 * Reads an unsigned byte from `buffer`.
 */
mikron.buffer._QMARK_ubyte = (function mikron$buffer$_QMARK_ubyte(buffer){
return (mikron.buffer._QMARK_byte.call(null,buffer) & (255));
});
/**
 * Writes an unsigned byte `value` to `buffer`.
 */
mikron.buffer._BANG_ubyte = (function mikron$buffer$_BANG_ubyte(buffer,value){
return mikron.buffer._BANG_byte.call(null,buffer,(value & (255)));
});
/**
 * Reads an unsigned short from `buffer`.
 */
mikron.buffer._QMARK_ushort = (function mikron$buffer$_QMARK_ushort(buffer){
return (mikron.buffer._QMARK_short.call(null,buffer) & (65535));
});
/**
 * Writes an unsigned short `value` to `buffer`.
 */
mikron.buffer._BANG_ushort = (function mikron$buffer$_BANG_ushort(buffer,value){
return mikron.buffer._BANG_short.call(null,buffer,(value & (65535)));
});
/**
 * Reads an unsigned int from `buffer`.
 */
mikron.buffer._QMARK_uint = (function mikron$buffer$_QMARK_uint(buffer){
return (mikron.buffer._QMARK_int.call(null,buffer) >>> (0));
});
/**
 * Writes an unsigned int `value` to `buffer`.
 */
mikron.buffer._BANG_uint = (function mikron$buffer$_BANG_uint(buffer,value){
return mikron.buffer._BANG_int.call(null,buffer,cljs.core.unchecked_int.call(null,(value & (4294967295))));
});
/**
 * Writes a byte to the given position in `buffer`.
 */
mikron.buffer._BANG_byte_at = (function mikron$buffer$_BANG_byte_at(buffer,pos,value){
var pos_SINGLEQUOTE_ = mikron.buffer._QMARK_pos.call(null,buffer);
var G__263 = buffer;
mikron.buffer._BANG_pos.call(null,G__263,pos);

mikron.buffer._BANG_byte.call(null,G__263,value);

mikron.buffer._BANG_pos.call(null,G__263,pos_SINGLEQUOTE_);

return G__263;
});
/**
 * Reads a boolean from `buffer`.
 */
mikron.buffer._QMARK_boolean = (function mikron$buffer$_QMARK_boolean(buffer){
if(((0) === cljs.core.rem.call(null,mikron.buffer._QMARK_bit_index.call(null,buffer),(8)))){
mikron.buffer._BANG_bit_value.call(null,buffer,mikron.buffer._QMARK_byte.call(null,buffer));
} else {
}

var index = mikron.buffer._QMARK_bit_index.call(null,buffer);
mikron.buffer._BANG_bit_index.call(null,buffer,(index + (1)));

return !(((0) === (mikron.buffer._QMARK_bit_value.call(null,buffer) & ((1) << cljs.core.rem.call(null,index,(8))))));
});
/**
 * Writes a boolean `value` to `buffer`.
 */
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
});
/**
 * Reads a varint from `buffer`.
 */
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
});
/**
 * Writes a varint `value` to `buffer`.
 */
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
});
/**
 * Reads a binary value from `buffer`.
 */
mikron.buffer._QMARK_binary = (function mikron$buffer$_QMARK_binary(buffer){
return mikron.buffer._QMARK_bytes.call(null,buffer,mikron.buffer._QMARK_varint.call(null,buffer));
});
/**
 * Writes a binary value `value` to `buffer`.
 */
mikron.buffer._BANG_binary = (function mikron$buffer$_BANG_binary(buffer,value){
var G__268 = buffer;
mikron.buffer._BANG_varint.call(null,G__268,value.byteLength);

mikron.buffer._BANG_bytes.call(null,G__268,value);

return G__268;
});
/**
 * Resets `buffer`.
 */
mikron.buffer._BANG_reset = (function mikron$buffer$_BANG_reset(buffer){
var G__270 = buffer;
mikron.buffer._BANG_pos.call(null,G__270,(0));

mikron.buffer._BANG_bit_pos.call(null,G__270,(-1));

mikron.buffer._BANG_bit_value.call(null,G__270,(0));

mikron.buffer._BANG_bit_index.call(null,G__270,(0));

return G__270;
});
/**
 * Finalizes `buffer`.
 */
mikron.buffer._BANG_finalize = (function mikron$buffer$_BANG_finalize(buffer){
var bit_pos = mikron.buffer._QMARK_bit_pos.call(null,buffer);
if(((-1) === bit_pos)){
return null;
} else {
return mikron.buffer._BANG_byte_at.call(null,buffer,bit_pos,mikron.buffer._QMARK_bit_value.call(null,buffer));
}
});

/**
 * @interface
 */
mikron.buffer.ByteBufferFactoryOps = function(){};

/**
 * Allocates a buffer with size `size`.
 */
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
});

/**
 * Wraps a binary value `binary` with a buffer.
 */
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
});

/**
 * Returns `true` if `value` is an instance of `ByteBufferFactoryOps`, `false` otherwise.
 */
mikron.buffer.byte_buffer_factory_QMARK_ = (function mikron$buffer$byte_buffer_factory_QMARK_(value){
return (value instanceof mikron.buffer.ByteBufferFactoryOps);
});

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

mikron.buffer.__GT_ByteBufferFactoryImplCljsBrowser = (function mikron$buffer$__GT_ByteBufferFactoryImplCljsBrowser(){
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,null,null));
});

mikron.buffer.map__GT_ByteBufferFactoryImplCljsBrowser = (function mikron$buffer$map__GT_ByteBufferFactoryImplCljsBrowser(G__273){
return (new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,cljs.core.dissoc.call(null,G__273),null));
});


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

mikron.buffer.__GT_ByteBufferFactoryImplCljsNode = (function mikron$buffer$__GT_ByteBufferFactoryImplCljsNode(){
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(null,null,null));
});

mikron.buffer.map__GT_ByteBufferFactoryImplCljsNode = (function mikron$buffer$map__GT_ByteBufferFactoryImplCljsNode(G__281){
return (new mikron.buffer.ByteBufferFactoryImplCljsNode(null,cljs.core.dissoc.call(null,G__281),null));
});

/**
 * The default byte buffer factory.
 */
mikron.buffer.byte_buffer_factory = (cljs.core.truth_(mikron.util.node_env_QMARK_.call(null))?(new mikron.buffer.ByteBufferFactoryImplCljsNode(null,null,null)):(new mikron.buffer.ByteBufferFactoryImplCljsBrowser(null,null,null)));
/**
 * Sets the byte buffer factory.
 */
mikron.buffer.set_byte_buffer_factory_BANG_ = (function mikron$buffer$set_byte_buffer_factory_BANG_(factory){
if(cljs.core.truth_(mikron.buffer.byte_buffer_factory_QMARK_.call(null,factory))){
} else {
throw (new Error("Assert failed: (byte-buffer-factory? factory)"));
}

return mikron.buffer.byte_buffer_factory = factory;
});
/**
 * Allocates a buffer with the size `size`.
 */
mikron.buffer.allocate = (function mikron$buffer$allocate(size){
return (new mikron.buffer.Buffer((new mikron.buffer.BitBufferImpl((0),(0),(-1))),mikron.buffer.allocate_STAR_.call(null,mikron.buffer.byte_buffer_factory,size)));
});
/**
 * Wraps a binary value `binary` with a buffer.
 */
mikron.buffer.wrap = (function mikron$buffer$wrap(binary){
return (new mikron.buffer.Buffer((new mikron.buffer.BitBufferImpl((0),(0),(-1))),mikron.buffer.wrap_STAR_.call(null,mikron.buffer.byte_buffer_factory,binary)));
});
/**
 * Writes the headers of `buffer`.
 */
mikron.buffer._BANG_headers = (function mikron$buffer$_BANG_headers(buffer,diffed_QMARK_){
var G__288 = buffer;
mikron.buffer._BANG_reset.call(null,G__288);

mikron.buffer._BANG_boolean.call(null,G__288,mikron.buffer._QMARK_le.call(null,buffer));

mikron.buffer._BANG_boolean.call(null,G__288,diffed_QMARK_);

return G__288;
});
/**
 * Reads the headers of `buffer`.
 */
mikron.buffer._QMARK_headers = (function mikron$buffer$_QMARK_headers(buffer){
mikron.buffer._BANG_le.call(null,buffer,mikron.buffer._QMARK_boolean.call(null,buffer));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)),mikron.buffer._QMARK_boolean.call(null,buffer)], null);
});
