(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[11],{1121:function(t,n,r){"use strict";r.r(n);var e=r(4),o=r.n(e),c=r(37),i=r(752),a=o.a.combineStores(o.a.commonStore,i.a);a.initialState,a.actions,a.controls,a.reducer,a.resolvers,a.selectors;o.a.registerStore(c.a,a)},37:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var e="core/location"},4:function(t,n){t.exports=googlesitekit.data},74:function(t,n,r){"use strict";r.d(n,"a",(function(){return _})),r.d(n,"b",(function(){return E})),r.d(n,"c",(function(){return k})),r.d(n,"d",(function(){return I})),r.d(n,"e",(function(){return D})),r.d(n,"g",(function(){return R})),r.d(n,"f",(function(){return x}));var e,o=r(5),c=r.n(o),i=r(24),a=r.n(i),u=r(6),s=r.n(u),f=r(10),l=r.n(f),p=r(214),v=r.n(p),g=r(69),d=r.n(g),y=r(108);function O(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function b(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach((function(n){s()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var w=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.reduce((function(t,n){return b(b({},t),n)}),{}),o=n.reduce((function(t,n){return[].concat(a()(t),a()(Object.keys(n)))}),[]),c=G(o);return l()(0===c.length,"collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(c.join(", "),". Check your data stores for duplicates.")),e},h=w,j=w,T=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e,o=[].concat(n);return"function"!=typeof o[0]&&(e=o.shift()),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.reduce((function(t,r){return r(t,n)}),t)}},m=w,S=w,A=w,P=function(t){return t},_=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=A.apply(void 0,a()(n.map((function(t){return t.initialState||{}}))));return{initialState:e,controls:j.apply(void 0,a()(n.map((function(t){return t.controls||{}})))),actions:h.apply(void 0,a()(n.map((function(t){return t.actions||{}})))),reducer:T.apply(void 0,[e].concat(a()(n.map((function(t){return t.reducer||P}))))),resolvers:m.apply(void 0,a()(n.map((function(t){return t.resolvers||{}})))),selectors:S.apply(void 0,a()(n.map((function(t){return t.selectors||{}}))))}},E={getRegistry:function(){return{payload:{},type:"GET_REGISTRY"}},await:c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{payload:{value:n},type:"AWAIT"});case 1:case"end":return t.stop()}}),t)}))},k=(e={},s()(e,"GET_REGISTRY",Object(y.d)((function(t){return function(){return t}}))),s()(e,"AWAIT",(function(t){return t.payload.value})),e),G=function(t){for(var n=[],r={},e=0;e<t.length;e++){var o=t[e];r[o]=r[o]>=1?r[o]+1:1,r[o]>1&&n.push(o)}return n},I={actions:E,controls:k,reducer:P},D=function(t){return function(n){return N(t(n))}},N=d()((function(t){return v()(t,(function(t,n){return function(){var r=t.apply(void 0,arguments);return l()(void 0!==r,"".concat(n,"(...) is not resolved")),r}}))}));function R(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.negate,e=void 0!==r&&r,o=Object(y.e)((function(n){return function(r){var o=!e,c=!!e;try{for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];return t.apply(void 0,[n,r].concat(a)),o}catch(t){return c}}})),c=Object(y.e)((function(n){return function(r){for(var e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];t.apply(void 0,[n,r].concat(o))}}));return{safeSelector:o,dangerousSelector:c}}function x(t,n){return l()("function"==typeof t,"a validator function is required."),l()("function"==typeof n,"an action creator function is required."),l()("Generator"!==t[Symbol.toStringTag]&&"GeneratorFunction"!==t[Symbol.toStringTag],"an action’s validator function must not be a generator."),function(){return t.apply(void 0,arguments),n.apply(void 0,arguments)}}},752:function(t,n,r){"use strict";(function(t){var e=r(6),o=r.n(e),c=r(5),i=r.n(c),a=r(10),u=r.n(a),s=r(74);function f(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function l(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){o()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var p={navigatingTo:void 0},v={navigateTo:Object(s.f)((function(t){var n=!1;try{n=new URL(t)}catch(t){}u()(!!n,"url must be a valid URI.")}),i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={url:n},t.next=3,{type:"SET_NAVIGATING_TO",payload:r};case 3:return t.next=5,{type:"DO_NAVIGATE_TO",payload:r};case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))},g=o()({},"DO_NAVIGATE_TO",(function(n){var r=n.payload;t.location.assign(r.url)}));var d={isNavigating:function(t){return!!t.navigatingTo},isNavigatingTo:function(t,n){var r=t.navigatingTo;return u()("string"==typeof n||n instanceof RegExp,"url must be either a string or a regular expression."),"string"==typeof n?r===n:n.test(r)},getNavigateURL:function(t){return t.navigatingTo||null}};n.a={initialState:p,actions:v,controls:g,reducer:function(t,n){var r=n.type,e=n.payload;switch(r){case"SET_NAVIGATING_TO":return l(l({},t),{},{navigatingTo:e.url});default:return t}},resolvers:{},selectors:d}}).call(this,r(20))}},[[1121,1,0]]]);