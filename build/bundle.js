!function(){"use strict";var e,n,t,r,o,a,i,c,u,s,f,l,p,d,v={807:function(e,n,t){var r=t(657),o=t.n(r),a=t(483),i=t.n(a)()(o());i.push([e.id,"body{background:palegoldenrod}\n",""]),n.Z=i},483:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var f=[].concat(e[s]);r&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},657:function(e){e.exports=function(e){return e[1]}},906:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],f=a[s]||0,l="".concat(s," ").concat(f);a[s]=f+1;var p=t(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var v=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var f=t(a[s]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}a=u}}},486:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},102:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},918:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},814:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},653:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function m(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return v[e](t,t.exports,m),t.exports}m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,{a:n}),n},m.d=function(e,n){for(var t in n)m.o(n,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e=m(906),n=m.n(e),t=m(814),r=m.n(t),o=m(486),a=m.n(o),i=m(918),c=m.n(i),u=m(102),s=m.n(u),f=m(653),l=m.n(f),p=m(807),(d={}).styleTagTransform=l(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=s(),n()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals,console.log("hello world")}();