"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var c=q(function(A,x){
function b(r,e,a,n,t,s,u,i,l,O,R){var v,f,o,m;if(r<=0)return i;for(v=n,f=u,o=O,m=0;m<r;m++)t[f]===0&&(i[o]=R(e[v])),v+=a,f+=s,o+=l;return i}x.exports=b
});var d=q(function(B,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=c();function h(r,e,a,n,t,s,u,i){return g(r,e,a,p(r,a),n,t,p(r,t),s,u,p(r,u),i)}y.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=c();j(k,"ndarray",w);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
