// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,a=n.toString,i=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;function c(e,t,r,o,n,a,i,l){var u,f,c,p;if(e<=0)return a;for(u=r<0?(1-e)*r:0,f=n<0?(1-e)*n:0,c=i<0?(1-e)*i:0,p=0;p<e;p++)0===o[f]&&(a[c]=l(t[u])),u+=r,f+=n,c+=i;return a}function p(e,t,r,o,n,a,i,l,u,f,c){var p,_,d,s;if(e<=0)return l;for(p=o,_=i,d=f,s=0;s<e;s++)0===n[_]&&(l[d]=c(t[p])),p+=r,_+=a,d+=u;return l}t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?o:function(e,t,r){var o,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||f.call(e,t)?(o=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=o):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&l&&l.call(e,t,r.set),e},t(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p}),e.default=c,e.ndarray=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).smskmap={});
//# sourceMappingURL=index.js.map
