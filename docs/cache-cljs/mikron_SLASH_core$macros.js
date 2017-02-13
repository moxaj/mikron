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

mikron.core$macros.Schema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k339,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__341 = (((k339 instanceof cljs.core.Keyword))?k339.fqn:null);
switch (G__341) {
case "processors":
return self__.processors;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k339,else__21604__auto__);

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

mikron.core$macros.Schema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__338){
var self__ = this;
var G__338__$1 = this;
return (new cljs.core.RecordIter((0),G__338__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processors","processors",(-1321252827))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mikron.core$macros.Schema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__338){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__342 = cljs.core.keyword_identical_QMARK_;
var expr__343 = k__21609__auto__;
if(cljs.core.truth_(pred__342.call(null,new cljs.core.Keyword(null,"processors","processors",(-1321252827)),expr__343))){
return (new mikron.core$macros.Schema(G__338,self__.__meta,self__.__extmap,null));
} else {
return (new mikron.core$macros.Schema(self__.processors,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__338),null));
}
});

mikron.core$macros.Schema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"processors","processors",(-1321252827)),self__.processors],null))], null),self__.__extmap));
});

mikron.core$macros.Schema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__338){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.core$macros.Schema(self__.processors,G__338,self__.__extmap,self__.__hash));
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

(function (){
mikron.core$macros.__GT_Schema = (function mikron$core$macros$__GT_Schema(processors){
return (new mikron.core$macros.Schema(processors,null,null,null));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.__GT_Schema;},new cljs.core.Symbol("mikron.core$macros","->Schema","mikron.core$macros/->Schema",(965668629),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"->Schema","->Schema",(-1384660203),null),"mikron/core.cljc",(18),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"processors","processors",(319278700),null)], null)),null,(cljs.core.truth_(mikron.core$macros.__GT_Schema)?mikron.core$macros.__GT_Schema.cljs$lang$test:null)])));})()
;

(function (){
mikron.core$macros.map__GT_Schema = (function mikron$core$macros$map__GT_Schema(G__340){
return (new mikron.core$macros.Schema(new cljs.core.Keyword(null,"processors","processors",(-1321252827)).cljs$core$IFn$_invoke$arity$1(G__340),null,cljs.core.dissoc.call(null,G__340,new cljs.core.Keyword(null,"processors","processors",(-1321252827))),null));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.map__GT_Schema;},new cljs.core.Symbol("mikron.core$macros","map->Schema","mikron.core$macros/map->Schema",(1218127133),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"map->Schema","map->Schema",(875745565),null),"mikron/core.cljc",(18),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(16),(16),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__340","G__340",(-1524654984),null)], null)),null,(cljs.core.truth_(mikron.core$macros.map__GT_Schema)?mikron.core$macros.map__GT_Schema.cljs$lang$test:null)])));})()
;

/**
 * Returns `true` if `value` is an instance of `Schema`, `false` otherwise.
 */
(function (){
mikron.core$macros.schema_QMARK_ = (function mikron$core$macros$schema_QMARK_(value){
return (value instanceof mikron.core$macros.Schema);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.schema_QMARK_;},new cljs.core.Symbol("mikron.core$macros","schema?","mikron.core$macros/schema?",(122973302),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"schema?","schema?",(1781760118),null),"mikron/core.cljc",(14),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns `true` if `value` is an instance of `Schema`, `false` otherwise.",(cljs.core.truth_(mikron.core$macros.schema_QMARK_)?mikron.core$macros.schema_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns all the generated processors for the given env.
 */
(function (){
mikron.core$macros.processors = (function mikron$core$macros$processors(env){
var iter__21826__auto__ = (function mikron$core$macros$processors_$_iter__350(s__351){
return (new cljs.core.LazySeq(null,(function (){
var s__351__$1 = s__351;
while(true){
var temp__19650__auto__ = cljs.core.seq.call(null,s__351__$1);
if(temp__19650__auto__){
var s__351__$2 = temp__19650__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__351__$2)){
var c__21824__auto__ = cljs.core.chunk_first.call(null,s__351__$2);
var size__21825__auto__ = cljs.core.count.call(null,c__21824__auto__);
var b__353 = cljs.core.chunk_buffer.call(null,size__21825__auto__);
if((function (){var i__352 = (0);
while(true){
if((i__352 < size__21825__auto__)){
var processor_type = cljs.core._nth.call(null,c__21824__auto__,i__352);
cljs.core.chunk_append.call(null,b__353,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = mikron.compile_util.processor.call(null,processor_type,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null));

var G__354 = (i__352 + (1));
i__352 = G__354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__353),mikron$core$macros$processors_$_iter__350.call(null,cljs.core.chunk_rest.call(null,s__351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__353),null);
}
} else {
var processor_type = cljs.core.first.call(null,s__351__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)),processor_type,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__25689__auto__ = mikron.compile_util.processor.call(null,processor_type,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()))], null),mikron$core$macros$processors_$_iter__350.call(null,cljs.core.rest.call(null,s__351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21826__auto__.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,mikron.compile_util.processor)));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.processors;},new cljs.core.Symbol("mikron.core$macros","processors","mikron.core$macros/processors",(2088712812),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"processors","processors",(319278700),null),"mikron/core.cljc",(27),(1),(23),(23),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),"Returns all the generated processors for the given env.",(cljs.core.truth_(mikron.core$macros.processors)?mikron.core$macros.processors.cljs$lang$test:null)])));})()
;
/**
 * Returns all the processor dependencies of the given processors.
 */
(function (){
mikron.core$macros.dependencies = (function mikron$core$macros$dependencies(processors){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),mikron.compile_util.find_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)),cljs.core.meta),cljs.core.map.call(null,new cljs.core.Keyword(null,"processor-fn","processor-fn",(1224472776)),processors)));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.dependencies;},new cljs.core.Symbol("mikron.core$macros","dependencies","mikron.core$macros/dependencies",(528305060),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"dependencies","dependencies",(-1546371164),null),"mikron/core.cljc",(29),(1),(30),(30),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"processors","processors",(319278700),null)], null)),"Returns all the processor dependencies of the given processors.",(cljs.core.truth_(mikron.core$macros.dependencies)?mikron.core$macros.dependencies.cljs$lang$test:null)])));})()
;
/**
 * Generates all the processor related code for the given env.
 */
(function (){
mikron.core$macros.schema_STAR_ = (function mikron$core$macros$schema_STAR_(env){
var processors = mikron.core$macros.processors.call(null,env);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (processors){
return (function (dependency){
var map__361 = cljs.core.meta.call(null,dependency);
var map__361__$1 = ((((!((map__361 == null)))?((((map__361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__361):map__361);
var processor_type = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"processor-type","processor-type",(-1828312625)));
var schema_name = cljs.core.get.call(null,map__361__$1,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)));
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
}); return (
new cljs.core.Var(function(){return mikron.core$macros.schema_STAR_;},new cljs.core.Symbol("mikron.core$macros","schema*","mikron.core$macros/schema*",(675213205),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"schema*","schema*",(-1114227819),null),"mikron/core.cljc",(24),(1),(38),(38),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),"Generates all the processor related code for the given env.",(cljs.core.truth_(mikron.core$macros.schema_STAR_)?mikron.core$macros.schema_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Creates a new schema.
 */
(function (){
mikron.core$macros.schema = (function mikron$core$macros$schema(var_args){
var args__25948__auto__ = [];
var len__25946__auto___366 = arguments.length;
var i__25947__auto___367 = (0);
while(true){
if((i__25947__auto___367 < len__25946__auto___366)){
args__25948__auto__.push((arguments[i__25947__auto___367]));

var G__368 = (i__25947__auto___367 + (1));
i__25947__auto___367 = G__368;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.schema;},new cljs.core.Symbol("mikron.core$macros","schema","mikron.core$macros/schema",(1876181960),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),"mikron/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Creates a new schema.",(cljs.core.truth_(mikron.core$macros.schema)?mikron.core$macros.schema.cljs$lang$test:null)])));})()
;

mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return mikron.core$macros.schema_STAR_.call(null,mikron.spec.enforce.call(null,new cljs.core.Keyword("mikron.spec","schema-args","mikron.spec/schema-args",(1315675157)),args));
});

mikron.core$macros.schema.cljs$lang$maxFixedArity = (2);

mikron.core$macros.schema.cljs$lang$applyTo = (function (seq363){
var G__364 = cljs.core.first.call(null,seq363);
var seq363__$1 = cljs.core.next.call(null,seq363);
var G__365 = cljs.core.first.call(null,seq363__$1);
var seq363__$2 = cljs.core.next.call(null,seq363__$1);
return mikron.core$macros.schema.cljs$core$IFn$_invoke$arity$variadic(G__364,G__365,seq363__$2);
});

new cljs.core.Var(function(){return mikron.core$macros.schema;},new cljs.core.Symbol("mikron.core$macros","schema","mikron.core$macros/schema",(1876181960),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"schema","schema",(58529736),null),"mikron/core.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(50),true,(50),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Creates a new schema.",(cljs.core.truth_(mikron.core$macros.schema)?mikron.core$macros.schema.cljs$lang$test:null)]));

mikron.core$macros.schema.cljs$lang$macro = true;
/**
 * Creates a new schema and binds it to the given symbol.
 */
(function (){
mikron.core$macros.defschema = (function mikron$core$macros$defschema(var_args){
var args__25948__auto__ = [];
var len__25946__auto___374 = arguments.length;
var i__25947__auto___375 = (0);
while(true){
if((i__25947__auto___375 < len__25946__auto___374)){
args__25948__auto__.push((arguments[i__25947__auto___375]));

var G__376 = (i__25947__auto___375 + (1));
i__25947__auto___375 = G__376;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((2) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((2)),(0),null)):null);
return mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.defschema;},new cljs.core.Symbol("mikron.core$macros","defschema","mikron.core$macros/defschema",(-1744993681),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"defschema","defschema",(983881327),null),"mikron/core.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(55),true,(55),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Creates a new schema and binds it to the given symbol.",(cljs.core.truth_(mikron.core$macros.defschema)?mikron.core$macros.defschema.cljs$lang$test:null)])));})()
;

mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var map__372 = mikron.spec.enforce.call(null,new cljs.core.Keyword("mikron.spec","defschema-args","mikron.spec/defschema-args",(-1054426411)),args);
var map__372__$1 = ((((!((map__372 == null)))?((((map__372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372):map__372);
var env = map__372__$1;
var schema_name = cljs.core.get.call(null,map__372__$1,new cljs.core.Keyword(null,"schema-name","schema-name",(1666725119)));
var doc_string = cljs.core.get.call(null,map__372__$1,new cljs.core.Keyword(null,"doc-string","doc-string",(367171695)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__25689__auto__ = schema_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),(cljs.core.truth_(doc_string)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc_string], null):null),(function (){var x__25689__auto__ = mikron.core$macros.schema_STAR_.call(null,env);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})()));
});

mikron.core$macros.defschema.cljs$lang$maxFixedArity = (2);

mikron.core$macros.defschema.cljs$lang$applyTo = (function (seq369){
var G__370 = cljs.core.first.call(null,seq369);
var seq369__$1 = cljs.core.next.call(null,seq369);
var G__371 = cljs.core.first.call(null,seq369__$1);
var seq369__$2 = cljs.core.next.call(null,seq369__$1);
return mikron.core$macros.defschema.cljs$core$IFn$_invoke$arity$variadic(G__370,G__371,seq369__$2);
});

new cljs.core.Var(function(){return mikron.core$macros.defschema;},new cljs.core.Symbol("mikron.core$macros","defschema","mikron.core$macros/defschema",(-1744993681),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"defschema","defschema",(983881327),null),"mikron/core.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(55),true,(55),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Creates a new schema and binds it to the given symbol.",(cljs.core.truth_(mikron.core$macros.defschema)?mikron.core$macros.defschema.cljs$lang$test:null)]));

mikron.core$macros.defschema.cljs$lang$macro = true;
/**
 * The default buffer with 10Kb size.
 */
(function (){
mikron.core$macros._STAR_buffer_STAR_ = mikron.buffer.allocate.call(null,(10000)); return (
new cljs.core.Var(function(){return mikron.core$macros._STAR_buffer_STAR_;},new cljs.core.Symbol("mikron.core$macros","*buffer*","mikron.core$macros/*buffer*",(1310979847),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"*buffer*","*buffer*",(-744699129),null),"mikron/core.cljc",(34),(1),true,(62),(62),cljs.core.List.EMPTY,"The default buffer with 10Kb size.",(cljs.core.truth_(mikron.core$macros._STAR_buffer_STAR_)?mikron.core$macros._STAR_buffer_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Allocates a new buffer with the given `size`.
 */
(function (){
mikron.core$macros.allocate_buffer = (function mikron$core$macros$allocate_buffer(size){
if(cljs.core.nat_int_QMARK_.call(null,size)){
} else {
throw (new Error("Assert failed: (nat-int? size)"));
}

return mikron.buffer.allocate.call(null,size);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.allocate_buffer;},new cljs.core.Symbol("mikron.core$macros","allocate-buffer","mikron.core$macros/allocate-buffer",(-61046237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"allocate-buffer","allocate-buffer",(-1870172637),null),"mikron/core.cljc",(22),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",(-1555742762),null)], null)),"Allocates a new buffer with the given `size`.",(cljs.core.truth_(mikron.core$macros.allocate_buffer)?mikron.core$macros.allocate_buffer.cljs$lang$test:null)])));})()
;
/**
 * Sets the byte buffer factory.
 */
(function (){
mikron.core$macros.set_byte_buffer_factory_BANG_ = (function mikron$core$macros$set_byte_buffer_factory_BANG_(factory){
return mikron.buffer.set_byte_buffer_factory_BANG_.call(null,factory);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.set_byte_buffer_factory_BANG_;},new cljs.core.Symbol("mikron.core$macros","set-byte-buffer-factory!","mikron.core$macros/set-byte-buffer-factory!",(588175501),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"set-byte-buffer-factory!","set-byte-buffer-factory!",(-564661107),null),"mikron/core.cljc",(31),(1),(72),(72),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"factory","factory",(1704465273),null)], null)),"Sets the byte buffer factory.",(cljs.core.truth_(mikron.core$macros.set_byte_buffer_factory_BANG_)?mikron.core$macros.set_byte_buffer_factory_BANG_.cljs$lang$test:null)])));})()
;
/**
 * Executes all the expressions of `body` in the context of `buffer`.
 */
(function (){
mikron.core$macros.with_buffer = (function mikron$core$macros$with_buffer(var_args){
var args__25948__auto__ = [];
var len__25946__auto___381 = arguments.length;
var i__25947__auto___382 = (0);
while(true){
if((i__25947__auto___382 < len__25946__auto___381)){
args__25948__auto__.push((arguments[i__25947__auto___382]));

var G__383 = (i__25947__auto___382 + (1));
i__25947__auto___382 = G__383;
continue;
} else {
}
break;
}

var argseq__25949__auto__ = ((((3) < args__25948__auto__.length))?(new cljs.core.IndexedSeq(args__25948__auto__.slice((3)),(0),null)):null);
return mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25949__auto__);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.with_buffer;},new cljs.core.Symbol("mikron.core$macros","with-buffer","mikron.core$macros/with-buffer",(1629951739),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"with-buffer","with-buffer",(-229750021),null),"mikron/core.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(77),true,(77),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes all the expressions of `body` in the context of `buffer`.",(cljs.core.truth_(mikron.core$macros.with_buffer)?mikron.core$macros.with_buffer.cljs$lang$test:null)])));})()
;

mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,buffer,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__25689__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mikron.core","*buffer*","mikron.core/*buffer*",(1560098834),null)),(function (){var x__25689__auto__ = buffer;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25689__auto__);
})(),body));
});

mikron.core$macros.with_buffer.cljs$lang$maxFixedArity = (3);

mikron.core$macros.with_buffer.cljs$lang$applyTo = (function (seq377){
var G__378 = cljs.core.first.call(null,seq377);
var seq377__$1 = cljs.core.next.call(null,seq377);
var G__379 = cljs.core.first.call(null,seq377__$1);
var seq377__$2 = cljs.core.next.call(null,seq377__$1);
var G__380 = cljs.core.first.call(null,seq377__$2);
var seq377__$3 = cljs.core.next.call(null,seq377__$2);
return mikron.core$macros.with_buffer.cljs$core$IFn$_invoke$arity$variadic(G__378,G__379,G__380,seq377__$3);
});

new cljs.core.Var(function(){return mikron.core$macros.with_buffer;},new cljs.core.Symbol("mikron.core$macros","with-buffer","mikron.core$macros/with-buffer",(1629951739),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"with-buffer","with-buffer",(-229750021),null),"mikron/core.cljc",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(77),true,(77),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Executes all the expressions of `body` in the context of `buffer`.",(cljs.core.truth_(mikron.core$macros.with_buffer)?mikron.core$macros.with_buffer.cljs$lang$test:null)]));

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

mikron.core$macros.DiffedValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21603__auto__,k385,else__21604__auto__){
var self__ = this;
var this__21603__auto____$1 = this;
var G__387 = (((k385 instanceof cljs.core.Keyword))?k385.fqn:null);
switch (G__387) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k385,else__21604__auto__);

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

mikron.core$macros.DiffedValue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__384){
var self__ = this;
var G__384__$1 = this;
return (new cljs.core.RecordIter((0),G__384__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mikron.core$macros.DiffedValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21608__auto__,k__21609__auto__,G__384){
var self__ = this;
var this__21608__auto____$1 = this;
var pred__388 = cljs.core.keyword_identical_QMARK_;
var expr__389 = k__21609__auto__;
if(cljs.core.truth_(pred__388.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__389))){
return (new mikron.core$macros.DiffedValue(G__384,self__.__meta,self__.__extmap,null));
} else {
return (new mikron.core$macros.DiffedValue(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21609__auto__,G__384),null));
}
});

mikron.core$macros.DiffedValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21613__auto__){
var self__ = this;
var this__21613__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null))], null),self__.__extmap));
});

mikron.core$macros.DiffedValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21600__auto__,G__384){
var self__ = this;
var this__21600__auto____$1 = this;
return (new mikron.core$macros.DiffedValue(self__.value,G__384,self__.__extmap,self__.__hash));
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

(function (){
mikron.core$macros.__GT_DiffedValue = (function mikron$core$macros$__GT_DiffedValue(value){
return (new mikron.core$macros.DiffedValue(value,null,null,null));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.__GT_DiffedValue;},new cljs.core.Symbol("mikron.core$macros","->DiffedValue","mikron.core$macros/->DiffedValue",(-2120995150),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"->DiffedValue","->DiffedValue",(1967987378),null),"mikron/core.cljc",(23),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(83),(83),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),null,(cljs.core.truth_(mikron.core$macros.__GT_DiffedValue)?mikron.core$macros.__GT_DiffedValue.cljs$lang$test:null)])));})()
;

(function (){
mikron.core$macros.map__GT_DiffedValue = (function mikron$core$macros$map__GT_DiffedValue(G__386){
return (new mikron.core$macros.DiffedValue(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__386),null,cljs.core.dissoc.call(null,G__386,new cljs.core.Keyword(null,"value","value",(305978217))),null));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.map__GT_DiffedValue;},new cljs.core.Symbol("mikron.core$macros","map->DiffedValue","mikron.core$macros/map->DiffedValue",(-415221992),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"map->DiffedValue","map->DiffedValue",(1410941720),null),"mikron/core.cljc",(23),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(83),(83),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__386","G__386",(219382795),null)], null)),null,(cljs.core.truth_(mikron.core$macros.map__GT_DiffedValue)?mikron.core$macros.map__GT_DiffedValue.cljs$lang$test:null)])));})()
;

/**
 * Returns `true` if `value` is diffed, `false` otherwise.
 */
(function (){
mikron.core$macros.diffed_QMARK_ = (function mikron$core$macros$diffed_QMARK_(value){
return (value instanceof mikron.core$macros.DiffedValue);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.diffed_QMARK_;},new cljs.core.Symbol("mikron.core$macros","diffed?","mikron.core$macros/diffed?",(1904556621),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"diffed?","diffed?",(-454160819),null),"mikron/core.cljc",(14),(1),(85),(85),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns `true` if `value` is diffed, `false` otherwise.",(cljs.core.truth_(mikron.core$macros.diffed_QMARK_)?mikron.core$macros.diffed_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Packs `value`, which must conform to `schema`, and may be an instance of
 *   `DiffedValue`.
 */
(function (){
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
}); return (
new cljs.core.Var(function(){return mikron.core$macros.pack;},new cljs.core.Symbol("mikron.core$macros","pack","mikron.core$macros/pack",(-1200431900),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"pack","pack",(400273636),null),"mikron/core.cljc",(11),(1),(90),(90),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Packs `value`, which must conform to `schema`, and may be an instance of\n  `DiffedValue`.",(cljs.core.truth_(mikron.core$macros.pack)?mikron.core$macros.pack.cljs$lang$test:null)])));})()
;
/**
 * Unpacks a value (which conforms to `schema`) from the binary value `binary`.
 */
(function (){
mikron.core$macros.unpack = (function mikron$core$macros$unpack(schema,binary){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

try{var buffer = mikron.buffer.wrap.call(null,binary);
var headers = mikron.buffer._QMARK_headers.call(null,buffer);
var diffed_QMARK_ = headers.call(null,new cljs.core.Keyword(null,"diffed?","diffed?",(-2094692346)));
var processor = (cljs.core.truth_(diffed_QMARK_)?new cljs.core.Keyword(null,"unpack-diffed","unpack-diffed",(1542955523)):new cljs.core.Keyword(null,"unpack","unpack",(-2027067542))).call(null,schema.processors);
var G__395 = processor.call(null,buffer);
var G__395__$1 = (cljs.core.truth_(diffed_QMARK_)?(new mikron.core$macros.DiffedValue(G__395,null,null,null)):G__395);
return G__395__$1;
}catch (e394){if((e394 instanceof Object)){
var e__1__auto__ = e394;
return new cljs.core.Keyword("mikron","invalid","mikron/invalid",(1490396662));
} else {
throw e394;

}
}}); return (
new cljs.core.Var(function(){return mikron.core$macros.unpack;},new cljs.core.Symbol("mikron.core$macros","unpack","mikron.core$macros/unpack",(1163663793),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"unpack","unpack",(-386536015),null),"mikron/core.cljc",(13),(1),(103),(103),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"binary","binary",(-161700761),null)], null)),"Unpacks a value (which conforms to `schema`) from the binary value `binary`.",(cljs.core.truth_(mikron.core$macros.unpack)?mikron.core$macros.unpack.cljs$lang$test:null)])));})()
;
/**
 * Generates a new value which conforms to `schema`.
 */
(function (){
mikron.core$macros.gen = (function mikron$core$macros$gen(schema){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"gen","gen",(142575302)));
return processor.call(null);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.gen;},new cljs.core.Symbol("mikron.core$macros","gen","mikron.core$macros/gen",(-953982707),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"gen","gen",(1783106829),null),"mikron/core.cljc",(10),(1),(115),(115),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null)], null)),"Generates a new value which conforms to `schema`.",(cljs.core.truth_(mikron.core$macros.gen)?mikron.core$macros.gen.cljs$lang$test:null)])));})()
;
/**
 * Returns `true` if `value` conforms to `schema`, `false` otherwise.
 */
(function (){
mikron.core$macros.valid_QMARK_ = (function mikron$core$macros$valid_QMARK_(schema,value){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"valid?","valid?",(-212412379)));
return processor.call(null,value);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.valid_QMARK_;},new cljs.core.Symbol("mikron.core$macros","valid?","mikron.core$macros/valid?",(-1602878868),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"valid?","valid?",(1428119148),null),"mikron/core.cljc",(13),(1),(122),(122),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value","value",(1946509744),null)], null)),"Returns `true` if `value` conforms to `schema`, `false` otherwise.",(cljs.core.truth_(mikron.core$macros.valid_QMARK_)?mikron.core$macros.valid_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Returns the diff between the old (`value-1`) and the new (`value-2`) value,
 *   both conforming to `schema`.
 */
(function (){
mikron.core$macros.diff_STAR_ = (function mikron$core$macros$diff_STAR_(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)));
return processor.call(null,value_1,value_2);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.diff_STAR_;},new cljs.core.Symbol("mikron.core$macros","diff*","mikron.core$macros/diff*",(429867090),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"diff*","diff*",(-176712622),null),"mikron/core.cljc",(12),(1),(129),(129),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null)], null)),"Returns the diff between the old (`value-1`) and the new (`value-2`) value,\n  both conforming to `schema`.",(cljs.core.truth_(mikron.core$macros.diff_STAR_)?mikron.core$macros.diff_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
 *   The old value must conform to `schema`.
 */
(function (){
mikron.core$macros.undiff_STAR_ = (function mikron$core$macros$undiff_STAR_(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"undiff","undiff",(1883196934)));
return processor.call(null,value_1,value_2);
}); return (
new cljs.core.Var(function(){return mikron.core$macros.undiff_STAR_;},new cljs.core.Symbol("mikron.core$macros","undiff*","mikron.core$macros/undiff*",(913816543),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"undiff*","undiff*",(-1557598241),null),"mikron/core.cljc",(14),(1),(137),(137),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null)], null)),"Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.\n  The old value must conform to `schema`.",(cljs.core.truth_(mikron.core$macros.undiff_STAR_)?mikron.core$macros.undiff_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Returns the diff between the old (`value-1`) and the new (`value-2`) value,
 *   both conforming to `schema`. Wraps the return value with `DiffedValue` for `pack`
 *   and `undiff` consumption.
 */
(function (){
mikron.core$macros.diff = (function mikron$core$macros$diff(schema,value_1,value_2){
if(cljs.core.truth_(mikron.core$macros.schema_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (schema? schema)"));
}

var processor = schema.processors.call(null,new cljs.core.Keyword(null,"diff","diff",(2135942783)));
return (new mikron.core$macros.DiffedValue(processor.call(null,value_1,value_2),null,null,null));
}); return (
new cljs.core.Var(function(){return mikron.core$macros.diff;},new cljs.core.Symbol("mikron.core$macros","diff","mikron.core$macros/diff",(364976326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"diff","diff",(-518492986),null),"mikron/core.cljc",(11),(1),(145),(145),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null)], null)),"Returns the diff between the old (`value-1`) and the new (`value-2`) value,\n  both conforming to `schema`. Wraps the return value with `DiffedValue` for `pack`\n  and `undiff` consumption.",(cljs.core.truth_(mikron.core$macros.diff)?mikron.core$macros.diff.cljs$lang$test:null)])));})()
;
/**
 * Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.
 *   The old value must conform to `schema`. `value-2` must be an instance of `DiffedValue`.
 */
(function (){
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
}); return (
new cljs.core.Var(function(){return mikron.core$macros.undiff;},new cljs.core.Symbol("mikron.core$macros","undiff","mikron.core$macros/undiff",(1051473997),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"undiff","undiff",(-771238835),null),"mikron/core.cljc",(13),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null)], null)),"Returns the original value from the old (`value-1`) and the diffed (`value-2`) value.\n  The old value must conform to `schema`. `value-2` must be an instance of `DiffedValue`.",(cljs.core.truth_(mikron.core$macros.undiff)?mikron.core$macros.undiff.cljs$lang$test:null)])));})()
;
/**
 * Calculates a new value of an entity at `time`, given two other values
 *   (`value-1` and `value-2`, both conforming to `schema`) and their respective
 *   timestamps (`time-1` and `time-2`). Uses linear interpolation.
 */
(function (){
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
}); return (
new cljs.core.Var(function(){return mikron.core$macros.interp;},new cljs.core.Symbol("mikron.core$macros","interp","mikron.core$macros/interp",(715704058),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"mikron.core$macros","mikron.core$macros",(-1968168636),null),new cljs.core.Symbol(null,"interp","interp",(-1077734662),null),"mikron/core.cljc",(13),(1),(162),(162),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",(58529736),null),new cljs.core.Symbol(null,"value-1","value-1",(1371934008),null),new cljs.core.Symbol(null,"value-2","value-2",(-1516591055),null),new cljs.core.Symbol(null,"time-1","time-1",(1826856274),null),new cljs.core.Symbol(null,"time-2","time-2",(1650131427),null),new cljs.core.Symbol(null,"time","time",(-1268547887),null)], null)),"Calculates a new value of an entity at `time`, given two other values\n  (`value-1` and `value-2`, both conforming to `schema`) and their respective\n  timestamps (`time-1` and `time-2`). Uses linear interpolation.",(cljs.core.truth_(mikron.core$macros.interp)?mikron.core$macros.interp.cljs$lang$test:null)])));})()
;