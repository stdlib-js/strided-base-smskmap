"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=l(function(z,q){
function g(r,e,f,o,v,t,s,m){var a,n,u,i;if(r<=0)return t;for(f<0?a=(1-r)*f:a=0,v<0?n=(1-r)*v:n=0,s<0?u=(1-r)*s:u=0,i=0;i<r;i++)o[n]===0&&(t[u]=m(e[a])),a+=f,n+=v,u+=s;return t}q.exports=g
});var R=l(function(A,O){
function h(r,e,f,o,v,t,s,m,a,n,u){var i,c,p,x;if(r<=0)return m;for(i=o,c=s,p=n,x=0;x<r;x++)v[c]===0&&(m[p]=u(e[i])),i+=f,c+=t,p+=a;return m}O.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=y(),k=R();j(b,"ndarray",k);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
