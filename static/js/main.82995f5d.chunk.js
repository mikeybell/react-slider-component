(this["webpackJsonpreact-slider-component"]=this["webpackJsonpreact-slider-component"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),c=r.n(a),l=r(5),i=r.n(l),o=(r(12),r(2)),s="?api_key=".concat("f7b0ca82130bdadd46f9a9df00403da1"),u=r(4),f=r.n(u),b=r(6),p="".concat("https://api.themoviedb.org/3").concat("/trending/movie/day").concat(s);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=a.createElement("path",{fill:"#00c1f3",d:"M256 0a18.73 18.73 0 00-18.73 18.73v93a18.73 18.73 0 0037.46 0v-93A18.73 18.73 0 00256 0zM256 381.54a18.73 18.73 0 00-18.73 18.73v93a18.73 18.73 0 0037.46 0v-93A18.73 18.73 0 00256 381.54zM140.42 167.64l-80.54-46.5a18.73 18.73 0 00-18.73 32.45l80.54 46.5a18.73 18.73 0 1018.73-32.45zM470.85 358.41l-80.54-46.5a18.73 18.73 0 10-18.73 32.45l80.53 46.5a18.74 18.74 0 0018.74-32.45zM121.69 311.92l-80.54 46.49a18.74 18.74 0 0018.74 32.45l80.53-46.5a18.73 18.73 0 10-18.73-32.44zM390.31 200.09l80.54-46.5a18.74 18.74 0 00-18.74-32.45l-80.53 46.5a18.73 18.73 0 1018.73 32.45z",transform:"translate(-31.78)"});function O(e,t){var r=e.title,n=e.titleId,c=j(e,["title","titleId"]);return a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 448.43 512",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,v)}var h=a.forwardRef(O),m=(r.p,r(14),function(){return Object(n.jsx)("div",{className:"loading-icon",children:Object(n.jsx)(h,{})})}),g=(r(15),function(e){var t=e.translateValue,r=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],s=l[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(b.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,t.json();case 8:r=e.sent,n(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),s(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return{movies:r,error:i}}(),c=r.movies,l=r.error;return 0!==c.length||l?l?Object(n.jsx)("p",{className:"error-message",children:l}):Object(n.jsx)("ul",{className:"movies-container",style:{transform:"translateX(".concat(t,"%)"),transition:"all 600ms ease-in-out"},children:c.map((function(e){return Object(n.jsx)("li",{className:"movie-container",children:Object(n.jsx)("img",{className:"movie-poster",src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(e.poster_path),alt:e.title})},e.id)}))}):Object(n.jsx)(m,{})});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=a.createElement("path",{d:"M25 955.3C-8.3 922-8.3 868.1 25 834.9l345.7-344.8L25 145.3C-8.3 112-8.3 58.1 25 24.9s87.4-33.2 120.7 0l401 400c17.9 17.9 25.4 41.7 24 65.1 1.4 23.5-6.1 47.3-24 65.2l-401 400c-33.3 33.2-87.4 33.4-120.7.1z",fill:"#fff"});function E(e,t){var r=e.title,n=e.titleId,c=w(e,["title","titleId"]);return a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 570.8 980.2",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,x)}var k=a.forwardRef(E);r.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var M=a.createElement("path",{d:"M425.2 955.2l-401-400C6.3 537.3-1.2 513.5.2 490c-1.4-23.4 6.1-47.2 24-65.1l401-400c33.3-33.2 87.4-33.2 120.7 0s33.3 87.1 0 120.4L200.2 490.1l345.7 344.8c33.3 33.2 33.3 87.1 0 120.4-33.3 33.3-87.4 33.1-120.7-.1z",fill:"#fff"});function P(e,t){var r=e.title,n=e.titleId,c=I(e,["title","titleId"]);return a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 570.8 980.2",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,M)}var z=a.forwardRef(P),N=(r.p,r(16),function(e){var t=e.prev,r=e.next,a=e.onClick,c=e.disabled,l=c?"disabledStyle":null;return Object(n.jsxs)("button",{className:"button ".concat(l),onClick:c?void 0:a,children:[t&&Object(n.jsx)(z,{}),r&&Object(n.jsx)(k,{})]})}),C=(r(17),function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(a.useState)(0),i=Object(o.a)(l,2),s=i[0],u=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"header",children:"Trending"}),Object(n.jsxs)("section",{className:"container",children:[Object(n.jsx)(N,{prev:!0,disabled:0===r,onClick:function(){r>0&&(c(r-1),u(s+100))}}),Object(n.jsx)(g,{translateValue:s}),Object(n.jsx)(N,{next:!0,disabled:3===r,onClick:function(){r<4&&(c(r+1),u(s-100))}})]})]})});i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.82995f5d.chunk.js.map