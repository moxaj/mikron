goog.provide("mikron.core$macros");

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
mikron.core$macros.Schema = (function (processors,__meta,__extmap,__hash){
this.processors = processors;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mikron.core$macros.Schema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21601__auto__,k__21602__auto__){
var self__ = this;
var this__21601__auto____$1 = this;
return this__21601__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21602__auto__,null);
});

mikron.core$macros.Schema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k813,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__815 = (((k813 instanceof cljs.core.Keyword))?k813.fqn:null);
switch (G__815) {
case "processors":
return self__.processors;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k813,else__21604__auto__);

}
});

mikron.core$macros.Schema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21615__auto__,writer__21616__auto__,opts__21617__auto__){
var self__ = this;
var this__21615__auto____$1 = this;
var pr_pair__21618__auto__ = ((function (this__21615__auto____$1){
return (function (keyval__21619__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,cljs.core.pr_writer,""," ","",opts__21617__auto__,keyval__21619__auto__);
});})(this__21615__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,pr_pair__21618__auto__,"#mikron.core$macros.Schema{",", ","}",opts__21617__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"processors","processors",(-1321252827)),self__.processors],null))], null),self__.__extmap));
});

mikron.core$macros.Schema.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

mikron.core$macros.Schema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__812){
var self__ = this;
var G__812__$1 = this;
return (new cljs.core.RecordIter((0),G__812__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processors","processors",(-1321252827))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mikron.core$macros.Schema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21599__auto__){
var self__ = this;
var this__21599__auto____$1 = this;
return self__.__meta;
});

mikron.core$macros.Schema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21595__auto__){
var self__ = this;
var this__21595__auto____$1 = this;
return (new mikron.core$macros.Schema(self__.processors,self__.__meta,self__.__extmap,self__.__hash));
});

mikron.core$macros.Schema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21605__auto__){
var self__ = this;
var this__21605__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

mikron.core$macros.Schema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21596__auto__){
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

mikron.core$macros.Schema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21597__auto__,other__21598__auto__){
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

mikron.core$macros.Schema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21610__auto__,k__21611__auto__){
var self__ = this;
var this__21610__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"processors","processors",(-1321252827)),null], null), null),k__21611__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21610__auto____$1),self__.__meta),k__21611__auto__);
} else {
return (new mikron.core$macros.Schema(self__.processors,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21611__auto__)),null));
}
});

mikron.core$macros.Schema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__812){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__816 = cljs.core.keyword_identical_QMARK_;
var expr__817 = k__21609__auto__;
if(cljs.core.truth_(pred__816.call(null,new cljs.core.Keyword(null,"processors","processors",(-1321252827)),expr__817))){
return (new mikron.core$macros.Schema(G__812,self__.__meta,self__.__extmap,null));
} else {
return (new mikron.core$macros.Schema(self__.processors,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__812),null));
}
});

mikron.core$macros.Schema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"processors","processors",(-1321252827)),self__.processors],null))], null),self__.__extmap));
});

mikron.core$macros.Schema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__812){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.core$macros.Schema(self__.processors,G__812,self__.__extmap,self__.__hash));
});

mikron.core$macros.Schema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21606__auto__,entry__21607__auto__){
var self__ = this;
var this__21606__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21607__auto__)){
return this__21606__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21607__auto__,(0)),cljs.core._nth.call(null,entry__21607__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21606__auto____$1,entry__21607__auto__);
}
});

mikron.core$macros.Schema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"processors","processors",(319278700),null)], null);
});

mikron.core$macros.Schema.cljs$lang$type = true;

mikron.core$macros.Schema.cljs$lang$ctorPrSeq = (function (this__21626__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mikron.core$macros/Schema");
});

mikron.core$macros.Schema.cljs$lang$ctorPrWriter = (function (this__21626__auto__,writer__21627__auto__){
return cljs.core._write.call(null,writer__21627__auto__,"mikron.core$macros/Schema");
});

mikron.core$macros.__GT_Schema = (function mikron$core$macros$__GT_Schema(processors){
return (new mikron.core$macros.Schema(processors,null,null,null));
});

mikron.core$macros.map__GT_Schema = (function mikron$core$macros$map__GT_Schema(G__814){
return (new mikron.core$macros.Schema(new cljs.core.Keyword(null,"processors","processors",(-1321252827)).cljs$core$IFn$_invoke$arity$1(G__814),null,cljs.core.dissoc.call(null,G__814,new cljs.core.Keyword(null,"processors","processors",(-1321252827))),null));
});

/**
 * Returns `true` if `value` is an instance of `Schema`, `false` otherwise.
 */
mikron.core$macros.schema_QMARK_ = (function mikron$core$macros$schema_QMARK_(value){
return (value instanceof mikron.core$macros.Schema);
});
/**
 * Returns all the generated processors for the given env.
 */
mikron.core$macros.processors = (function mikron$core$macros$processors(env){
var iter__21826__auto__ = (function mikron$core$macros$processors_$_iter__824(s__825){
return (new cljs.core.LazySeq(null,(function (){
var s__825__$1 = s__825;
while(true){
var temp__19650__auto__ = cljs.core.seq.call(null,s__825__$1);
if(temp__19650__auto__){
var s__825__$2 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__825__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__825__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__827 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__826 = (0);
while(true){
if((i__826 < size__21825__auto__)){
var processor_type = cljs.core._nth.call(null,c__21824__auto__,i__826);
cljs.core.chunk_append.call(null,b__827,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = mikron.compile_util.processor.call(null,processor_type,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null));

var G__828 = (i__826 + (1));
i__826 = G__828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__827),mikron$core$macros$processors_$_iter__824.call(null,cljs.core.chunk_rest.call(null,s__825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__827),null);
}
} else {
var processor_type = cljs.core.first.call(null,s__825__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = mikron.compile_util.processor.call(null,processor_type,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null),mikron$core$macros$processors_$_iter__824.call(null,cljs.core.rest.call(null,s__825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.compile_util.processor)));
});
/**
 * Returns all the processor dependencies of the given processors.
 */
mikron.core$macros.dependencies = (function mikron$core$macros$dependencies(processors){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),mikron.compile_util.find_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)),cljs.core.meta),cljs.core.map.call(null,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),processors)));
});
/**
 * Generates all the processor related code for the given env.
 */
mikron.core$macros.schema_STAR_ = (function mikron$core$macros$schema_STAR_(env){
var processors = mikron.core$macros.processors.call(null,env);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (processors){
return (function (dependency){
var map__835 = cljs.core.meta.call(null,dependency);
var map__835__$1 = ((((!((map__835 == null)))?((((map__835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__835):map__835);
var processor_type = cljs.core.get.call(null,map__835__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var schema_name = cljs.core.get.call(null,map__835__$1,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dependency,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-processors",".-processors",(-826896854),null)),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = processor_type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null);
});})(processors))
,mikron.core$macros.dependencies.call(null,processors)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(function (){var x__25689__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","Schema.","mikron.core/Schema.",(28898763),null)),(function (){var x__25689__auto__ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776))),processors));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});
/**
 * Creates a new schema.
 */
mikron.core$macros.schema = (function mikron$core$macros$schema(var_args){
var args__25948__auto__ = [];
var len__25946__auto___840 = arguments.length;
var i__25947__auto___841 = (0);
while(true){
if((i__25947__auto___841 < len__25946__auto___840)){
args__25948__auto__.push((arguments[i__25947__auto___841]));

var G__842 = (i__25947__auto___841 + (1));
i__25947__auto___841 = G__842;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
});

mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return mikron.core$macros.schema_STAR_.call(null,mikron.spec.enforce.call(null,new cljs.core.Keyword("mikron.spec","schema-args","mikron.spec/schema-args",(1315675157)),args));
});

mikron.core$macros.schema.cljs$lang$maxFixedArity = (2);

mikron.core$macros.schema.cljs$lang$applyTo = (function (seq837){
var G__838 = cljs.core.first.call(null,seq837);
var seq837__$1 = cljs.core.next.call(null,seq837);
var G__839 = cljs.core.first.call(null,seq837__$1);
var seq837__$2 = cljs.core.next.call(null,seq837__$1);
return mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic(G__838,G__839,seq837__$2);
});


mikron.core$macros.schema.cljs$lang$macro = true;
/**
 * Creates a new schema and binds it to the given symbol.
 */
mikron.core$macros.defschema = (function mikron$core$macros$defschema(var_args){
var args__25948__auto__ = [];
var len__25946__auto___848 = arguments.length;
var i__25947__auto___849 = (0);
while(true){
if((i__25947__auto___849 < len__25946__auto___848)){
args__25948__auto__.push((arguments[i__25947__auto___849]));

var G__850 = (i__25947__auto___849 + (1));
i__25947__auto___849 = G__850;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
});

mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var map__846 = mikron.spec.enforce.call(null,new cljs.core.Keyword("mikron.spec","defschema-args","mikron.spec/defschema-args",(-1054426411)),args);
var map__846__$1 = ((((!((map__846 == null)))?((((map__846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__846):map__846);
var env = map__846__$1;
var schema_name = cljs.core.get.call(null,map__846__$1,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)));
var doc_string = cljs.core.get.call(null,map__846__$1,new cljs.core.Keyword(null,"doc-string","doc-string",(367171695)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(cljs.core.truth_(doc_string)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc_string], null):null),(function (){var x__25689__auto__ = mikron.core$macros.schema_STAR_.call(null,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.core$macros.defschema.cljs$lang$maxFixedArity = (2);

mikron.core$macros.defschema.cljs$lang$applyTo = (function (seq843){
var G__844 = cljs.core.first.call(null,seq843);
var seq843__$1 = cljs.core.next.call(null,seq843);
var G__845 = cljs.core.first.call(null,seq843__$1);
var seq843__$2 = cljs.core.next.call(null,seq843__$1);
return mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic(G__844,G__845,seq843__$2);
});


mikron.core$macros.defschema.cljs$lang$macro = true;
/**
 * The default buffer with 10Kb size.
 */
mikron.core$macros._STAR_buffer_STAR_ = mikron.buffer.allocate.call(null,(10000));
/**
 * Allocates a new buffer with the given `size`.
 */
mikron.core$macros.allocate_buffer = (function mikron$core$macros$allocate_buffer(size){
if(cljs.core.nat_int_QMARK_.call(null,size)){
} else {
throw (new Error("Assert failed: (nat-int? size)"));
}

return mikron.buffer.allocate.call(null,size);
});
/**
 * Sets the byte buffer factory.
 */
mikron.core$macros.set_byte_buffer_factory_BANG_ = (function mikron$core$macros$set_byte_buffer_factory_BANG_(factory){
return mikron.buffer.set_byte_buffer_factory_BANG_.call(null,factory);
});
/**
 * Executes all the expressions of `body` in the context of `buffer`.
 */
mikron.core$macros.with_buffer = (function mikron$core$macros$with_buffer(var_args){
var args__25948__auto__ = [];
var len__25946__auto___855 = arguments.length;
var i__25947__auto___856 = (0);
while(true){
if((i__25947__auto___856 < len__25946__auto___855)){
args__25948__auto__.push((arguments[i__25947__auto___856]));

var G__857 = (i__25947__auto___856 + (1));
i__25947__auto___856 = G__857;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
});

mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,buffer,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","*buffer*","mikron.core/*buffer*",(1560098834),null)),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
});

mikron.core$macros.with_buffer.cljs$lang$maxFixedArity = (3);

mikron.core$macros.with_buffer.cljs$lang$applyTo = (function (seq851){
var G__852 = cljs.core.first.call(null,seq851);
var seq851__$1 = cljs.core.next.call(null,seq851);
var G__853 = cljs.core.first.call(null,seq851__$1);
var seq851__$2 = cljs.core.next.call(null,seq851__$1);
var G__854 = cljs.core.first.call(null,seq851__$2);
var seq851__$3 = cljs.core.next.call(null,seq851__$2);
return mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic(G__852,G__853,G__854,seq851__$3);
});


mikron.core$macros.with_buffer.cljs$lang$macro = true;

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
mikron.core$macros.DiffedValue = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
mikron.core$macros.DiffedValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21601__auto__,k__21602__auto__){
var self__ = this;
var this__21601__auto____$1 = this;
return this__21601__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21602__auto__,null);
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k859,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__861 = (((k859 instanceof cljs.core.Keyword))?k859.fqn:null);
switch (G__861) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k859,else__21604__auto__);

}
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21615__auto__,writer__21616__auto__,opts__21617__auto__){
var self__ = this;
var this__21615__auto____$1 = this;
var pr_pair__21618__auto__ = ((function (this__21615__auto____$1){
return (function (keyval__21619__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,cljs.core.pr_writer,""," ","",opts__21617__auto__,keyval__21619__auto__);
});})(this__21615__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21616__auto__,pr_pair__21618__auto__,"#mikron.core$macros.DiffedValue{",", ","}",opts__21617__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

mikron.core$macros.DiffedValue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__858){
var self__ = this;
var G__858__$1 = this;
return (new cljs.core.RecordIter((0),G__858__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21599__auto__){
var self__ = this;
var this__21599__auto____$1 = this;
return self__.__meta;
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21595__auto__){
var self__ = this;
var this__21595__auto____$1 = this;
return (new mikron.core$macros.DiffedValue(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21605__auto__){
var self__ = this;
var this__21605__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21596__auto__){
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

mikron.core$macros.DiffedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21597__auto__,other__21598__auto__){
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

mikron.core$macros.DiffedValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21610__auto__,k__21611__auto__){
var self__ = this;
var this__21610__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",(305978217)),null], null), null),k__21611__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21610__auto____$1),self__.__meta),k__21611__auto__);
} else {
return (new mikron.core$macros.DiffedValue(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21611__auto__)),null));
}
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__858){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__862 = cljs.core.keyword_identical_QMARK_;
var expr__863 = k__21609__auto__;
if(cljs.core.truth_(pred__862.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__863))){
return (new mikron.core$macros.DiffedValue(G__858,self__.__meta,self__.__extmap,null));
} else {
return (new mikron.core$macros.DiffedValue(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__858),null));
}
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__858){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.core$macros.DiffedValue(self__.value,G__858,self__.__extmap,self__.__hash));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21606__auto__,entry__21607__auto__){
var self__ = this;
var this__21606__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21607__auto__)){
return this__21606__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__21607__auto__,(0)),cljs.core._nth.call(null,entry__21607__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21606__auto____$1,entry__21607__auto__);
}
});

mikron.core$macros.DiffedValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null);
});

mikron.core$macros.DiffedValue.cljs$lang$type = true;

mikron.core$macros.DiffedValue.cljs$lang$ctorPrSeq = (function (this__21626__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mikron.core$macros/DiffedValue");
});

mikron.core$macros.DiffedValue.cljs$lang$ctorPrWriter = (function (this__21626__auto__,writer__21627__auto__){
return cljs.core._write.call(null,writer__21627__auto__,"mikron.core$macros/DiffedValue");
});

mikron.core$macros.__GT_DiffedValue = (function mikron$core$macros$__GT_DiffedValue(value){
return (new mikron.core$macros.DiffedValue(value,null,null,null));
});

mikron.core$macros.map__GT_DiffedValue = (function mikron$core$macros$map__GT_DiffedValue(G__860){
return (new mikron.core$macros.DiffedValue(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__860),null,cljs.core.dissoc.call(null,G__860,new cljs.core.Keyword(null,"value","value",(305978217))),null));
});

/**
 * Returns `true` if `value` is diffed, `false` otherwise.
 */
mikron.core$macros.diffed_QMARK_ = (function mikron$core$macros$diffed_QMARK_(value){
return (value instanceof mikron.core$macros.DiffedValue);
});
/**
 * Packs `value`, which must conform to `schema`, and may be an instance of
 *   `DiffedValue`.
 */
mikron.core$macros.pack = (function mikron$core$macros$pack(schema,value){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var buffer = mikron.core$macros._STAR_buffer_STAR_;
var diffed_QMARK_ = mikron.core$macros.diffed_QMARK_.call(null,value);
var processor = schema.processors.call(null,(cljs.core.truth_(diffed_QMARK_)?new cljs.core.Keyword(null,"pack-diffed","pack-diffed",(86146555)):new cljs.core.Keyword(null,"pack","pack",(-1240257891))));
mikron.buffer._BANG_headers.call(null,buffer,diffed_QMARK_);

processor.call(null,(cljs.core.truth_(diffed_QMARK_)?value.value:value),buffer);

mikron.buffer._BANG_finalize.call(null,buffer);

return mikron.buffer._QMARK_bytes_all.call(null,buffer);
});
/**
 * Unpacks a value (which conforms to `schema`) from the binary value `binary`.
 */
mikron.core$macros.unpack = (function mikron$core$macros$unpack(schema,binary){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

try{var buffer = mikron.buffer.wrap.call(null,binary);
var headers = mikron.buffer._QMARK_headers.call(null,buffer);
var diffed_QMARK_ = headers.call(null,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
var processor = (cljs.core.truth_(diffed_QMARK_)?new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)):new cljs.core.Keyword(null,"unpack","unpack",(-2027067542))).call(null,schema.processors);
var G__869 = processor.call(null,buffer);
var G__869__$1 = (cljs.core.truth_(diffed_QMARK_)?(new mikron.core$macros.DiffedValue(G__869,null,null,null)):G__869);
return G__869__$1;
}catch (e868){if((e868 instanceof Object)){
var e__4__auto__ = e868;
return new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662));
} else {
throw e868;

}
}});
/**
 * Generates a new value which conforms to `schema`.
 */
mikron.core$macros.gen = (function mikron$core$macros$gen(schema){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return processor.call(null);
});
/**
 * Returns `true` if `value` conforms to `schema`, `false` otherwise.
 */
mikron.core$macros.valid_QMARK_ = (function mikron$core$macros$valid_QMARK_(schema,value){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)));
return processor.call(null,value);
});
/**
 * Returns the diff between the old (`value-1`) and the new (`value-2`) value,
 *   both conforming to `schema`.
 */
mikron.core$macros.diff_STAR_ = (function mikron$core$macros$diff_STAR_(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)));
return processor.call(null,value_1,value_2);
});
/**
 * Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
 *   The old value must conform to `schema`.
 */
mikron.core$macros.undiff_STAR_ = (function mikron$core$macros$undiff_STAR_(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"undiff","undiff",(1883196934)));
return processor.call(null,value_1,value_2);
});
/**
 * Returns the diff between the old (`value-1`) and the new (`value-2`) value,
 *   both conforming to `schema`. Wraps the return value with `DiffedValue` for `pack`
 *   and `undiff` consumption.
 */
mikron.core$macros.diff = (function mikron$core$macros$diff(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)));
return (new mikron.core$macros.DiffedValue(processor.call(null,value_1,value_2),null,null,null));
});
/**
 * Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
 *   The old value must conform to `schema`. `value-2` must be an instance of `DiffedValue`.
 */
mikron.core$macros.undiff = (function mikron$core$macros$undiff(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

if(cljs.core.truth_(mikron.core$macros.diffed_QMARK_.call(null,value_2))){
} else {
throw (new Error("Assert failed: (diffed? value-2)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"undiff","undiff",(1883196934)));
return processor.call(null,value_1,value_2.value);
});
/**
 * Calculates a new value of an entity at `time`, given two other values
 *   (`value-1` and `value-2`, both conforming to `schema`) and their respective
 *   timestamps (`time-1` and `time-2`). Uses linear interpolation.
 */
mikron.core$macros.interp = (function mikron$core$macros$interp(schema,value_1,value_2,time_1,time_2,time){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

if(typeof time_1 === 'number'){
} else {
throw (new Error("Assert failed: (number? time-1)"));
}

if(typeof time_2 === 'number'){
} else {
throw (new Error("Assert failed: (number? time-2)"));
}

if(typeof time === 'number'){
} else {
throw (new Error("Assert failed: (number? time)"));
}

var time__$1 = time;
var time_1__$1 = time_1;
var time_2__$1 = time_2;
var prefer_first_QMARK_ = (mikron.util.math.abs.call(null,(time__$1 - time_1__$1)) < mikron.util.math.abs.call(null,(time__$1 - time_2__$1)));
var time_factor = ((time__$1 - time_1__$1) / (time_2__$1 - time_1__$1));
var processor = schema.processors.call(null,new cljs.core.Keyword(null,"interp","interp",(1576701107)));
return processor.call(null,value_1,value_2,prefer_first_QMARK_,time_factor);
});
