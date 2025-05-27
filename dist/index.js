"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(A,x){
function b(r,e,i,n,t,s,u,a,l,O,R){var v,f,o,m;if(r<=0)return a;for(v=n,f=u,o=O,m=0;m<r;m++)t[f]===0&&(a[o]=R(e[v])),v+=i,f+=s,o+=l;return a}x.exports=b
});var d=q(function(B,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=c();function h(r,e,i,n,t,s,u,a){return g(r,e,i,p(r,i),n,t,p(r,t),s,u,p(r,u),a)}y.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=c();j(k,"ndarray",w);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
