var ht=Object.defineProperty;var pt=(t,n,e)=>n in t?ht(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var y=(t,n,e)=>(pt(t,typeof n!="symbol"?n+"":n,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var R=function(t,n){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},R(t,n)};function H(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");R(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function mt(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function u(f){try{a(r.next(f))}catch(m){s(m)}}function c(f){try{a(r.throw(f))}catch(m){s(m)}}function a(f){f.done?o(f.value):i(f.value).then(u,c)}a((r=r.apply(t,n||[])).next())})}function K(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(f){return c([a,f])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(e=0)),e;)try{if(r=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,i=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){e.label=a[1];break}if(a[0]===6&&e.label<o[1]){e.label=o[1],o=a;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(a);break}o[2]&&e.ops.pop(),e.trys.pop();continue}a=n.call(t,e)}catch(f){a=[6,f],i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function T(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),i,o=[],s;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(s)throw s.error}}return o}function _(t,n,e){if(e||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}function x(t){return this instanceof x?(this.v=t,this):new x(t)}function yt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(d){r[d]&&(i[d]=function(p){return new Promise(function(v,l){o.push([d,p,v,l])>1||u(d,p)})})}function u(d,p){try{c(r[d](p))}catch(v){m(o[0][3],v)}}function c(d){d.value instanceof x?Promise.resolve(d.value.v).then(a,f):m(o[0][2],d)}function a(d){u("next",d)}function f(d){u("throw",d)}function m(d,p){d(p),o.shift(),o.length&&u(o[0][0],o[0][1])}}function vt(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof T=="function"?T(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(u,c){s=t[o](s),i(u,c,s.done,s.value)})}}function i(o,s,u,c){Promise.resolve(c).then(function(a){o({value:a,done:u})},s)}}function h(t){return typeof t=="function"}function bt(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var P=bt(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function D(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var U=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=T(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(l){n={error:l}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(n)throw n.error}}else s.remove(this);var f=this.initialTeardown;if(h(f))try{f()}catch(l){o=l instanceof P?l.errors:[l]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var d=T(m),p=d.next();!p.done;p=d.next()){var v=p.value;try{j(v)}catch(l){o=o??[],l instanceof P?o=_(_([],I(o)),I(l.errors)):o.push(l)}}}catch(l){r={error:l}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new P(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)j(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&D(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&D(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}();U.EMPTY;function $(t){return t instanceof U||t&&"closed"in t&&h(t.remove)&&h(t.add)&&h(t.unsubscribe)}function j(t){h(t)?t():t.unsubscribe()}var X={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Q={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,_([t,n],I(e)))},clearTimeout:function(t){var n=Q.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function V(t){Q.setTimeout(function(){throw t})}function J(){}function wt(t){t()}var q=function(t){H(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,$(e)&&e.add(r)):r.destination=xt,r}return n.create=function(e,r,i){return new C(e,r,i)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(U),gt=Function.prototype.bind;function B(t,n){return gt.call(t,n)}var kt=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){L(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){L(r)}else L(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){L(e)}},t}(),C=function(t){H(n,t);function n(e,r,i){var o=t.call(this)||this,s;if(h(e)||!e)s={next:e??void 0,error:r??void 0,complete:i??void 0};else{var u;o&&X.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return o.unsubscribe()},s={next:e.next&&B(e.next,u),error:e.error&&B(e.error,u),complete:e.complete&&B(e.complete,u)}):s=e}return o.destination=new kt(s),o}return n}(q);function L(t){V(t)}function St(t){throw t}var xt={closed:!0,next:J,error:St,complete:J},F=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Et(t){return t}function Tt(t){return t.length===0?Et:t.length===1?t[0]:function(e){return t.reduce(function(r,i){return i(r)},e)}}var w=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var i=this,o=Lt(n)?n:new C(n,e,r);return wt(function(){var s=i,u=s.operator,c=s.source;o.add(u?u.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=Y(e),new e(function(i,o){var s=new C({next:function(u){try{n(u)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});r.subscribe(s)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[F]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Tt(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=Y(n),new n(function(r,i){var o;e.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},t.create=function(n){return new t(n)},t}();function Y(t){var n;return(n=t??X.Promise)!==null&&n!==void 0?n:Promise}function It(t){return t&&h(t.next)&&h(t.error)&&h(t.complete)}function Lt(t){return t&&t instanceof q||It(t)&&$(t)}function _t(t){return h(t==null?void 0:t.lift)}function A(t){return function(n){if(_t(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(t,n,e,r,i){return new Ot(t,n,e,r,i)}var Ot=function(t){H(n,t);function n(e,r,i,o,s,u){var c=t.call(this,e)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=r?function(a){try{r(a)}catch(f){e.error(f)}}:t.prototype._next,c._error=o?function(a){try{o(a)}catch(f){e.error(f)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:t.prototype._complete,c}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(q);function At(t){return t&&h(t.schedule)}function Pt(t){return t[t.length-1]}function Bt(t){return At(Pt(t))?t.pop():void 0}var G=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function W(t){return h(t==null?void 0:t.then)}function Z(t){return h(t[F])}function N(t){return Symbol.asyncIterator&&h(t==null?void 0:t[Symbol.asyncIterator])}function tt(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Rt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var et=Rt();function nt(t){return h(t==null?void 0:t[et])}function rt(t){return yt(this,arguments,function(){var e,r,i,o;return K(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,x(e.read())];case 3:return r=s.sent(),i=r.value,o=r.done,o?[4,x(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,x(i)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function ot(t){return h(t==null?void 0:t.getReader)}function E(t){if(t instanceof w)return t;if(t!=null){if(Z(t))return Ct(t);if(G(t))return Mt(t);if(W(t))return Ht(t);if(N(t))return it(t);if(nt(t))return Ut(t);if(ot(t))return qt(t)}throw tt(t)}function Ct(t){return new w(function(n){var e=t[F]();if(h(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mt(t){return new w(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Ht(t){return new w(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,V)})}function Ut(t){return new w(function(n){var e,r;try{for(var i=T(t),o=i.next();!o.done;o=i.next()){var s=o.value;if(n.next(s),n.closed)return}}catch(u){e={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}n.complete()})}function it(t){return new w(function(n){Ft(t,n).catch(function(e){return n.error(e)})})}function qt(t){return it(rt(t))}function Ft(t,n){var e,r,i,o;return mt(this,void 0,void 0,function(){var s,u;return K(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=vt(t),c.label=1;case 1:return[4,e.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,n.next(s),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),i={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function k(t,n,e,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function st(t,n){return n===void 0&&(n=0),A(function(e,r){e.subscribe(O(r,function(i){return k(r,t,function(){return r.next(i)},n)},function(){return k(r,t,function(){return r.complete()},n)},function(i){return k(r,t,function(){return r.error(i)},n)}))})}function at(t,n){return n===void 0&&(n=0),A(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function Gt(t,n){return E(t).pipe(at(n),st(n))}function Dt(t,n){return E(t).pipe(at(n),st(n))}function jt(t,n){return new w(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Jt(t,n){return new w(function(e){var r;return k(e,n,function(){r=t[et](),k(e,n,function(){var i,o,s;try{i=r.next(),o=i.value,s=i.done}catch(u){e.error(u);return}s?e.complete():e.next(o)},0,!0)}),function(){return h(r==null?void 0:r.return)&&r.return()}})}function ut(t,n){if(!t)throw new Error("Iterable cannot be null");return new w(function(e){k(e,n,function(){var r=t[Symbol.asyncIterator]();k(e,n,function(){r.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function Yt(t,n){return ut(rt(t),n)}function zt(t,n){if(t!=null){if(Z(t))return Gt(t,n);if(G(t))return jt(t,n);if(W(t))return Dt(t,n);if(N(t))return ut(t,n);if(nt(t))return Jt(t,n);if(ot(t))return Yt(t,n)}throw tt(t)}function Kt(t,n){return n?zt(t,n):E(t)}function $t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=Bt(t);return Kt(t,e)}function ct(t,n){return A(function(e,r){var i=0;e.subscribe(O(r,function(o){r.next(t.call(n,o,i++))}))})}var Xt=Array.isArray;function Qt(t,n){return Xt(n)?t.apply(void 0,_([],I(n))):t(n)}function Vt(t){return ct(function(n){return Qt(t,n)})}function Wt(t,n,e,r,i,o,s,u){var c=[],a=0,f=0,m=!1,d=function(){m&&!c.length&&!a&&n.complete()},p=function(l){return a<r?v(l):c.push(l)},v=function(l){o&&n.next(l),a++;var b=!1;E(e(l,f++)).subscribe(O(n,function(g){i==null||i(g),o?p(g):n.next(g)},function(){b=!0},void 0,function(){if(b)try{a--;for(var g=function(){var S=c.shift();s?k(n,s,function(){return v(S)}):v(S)};c.length&&a<r;)g();d()}catch(S){n.error(S)}}))};return t.subscribe(O(n,p,function(){m=!0,d()})),function(){u==null||u()}}function lt(t,n,e){return e===void 0&&(e=1/0),h(n)?lt(function(r,i){return ct(function(o,s){return n(r,o,i,s)})(E(t(r,i)))},e):(typeof n=="number"&&(e=n),A(function(r,i){return Wt(r,i,t,e)}))}var Zt=["addListener","removeListener"],Nt=["addEventListener","removeEventListener"],te=["on","off"];function M(t,n,e,r){if(h(e)&&(r=e,e=void 0),r)return M(t,n,e).pipe(Vt(r));var i=I(re(t)?Nt.map(function(u){return function(c){return t[u](n,c,e)}}):ee(t)?Zt.map(z(t,n)):ne(t)?te.map(z(t,n)):[],2),o=i[0],s=i[1];if(!o&&G(t))return lt(function(u){return M(u,n,e)})(E(t));if(!o)throw new TypeError("Invalid event target");return new w(function(u){var c=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return u.next(1<a.length?a:a[0])};return o(c),function(){return s(c)}})}function z(t,n){return function(e){return function(r){return t[e](n,r)}}}function ee(t){return h(t.addListener)&&h(t.removeListener)}function ne(t){return h(t.on)&&h(t.off)}function re(t){return h(t.addEventListener)&&h(t.removeEventListener)}const ft=document.createElement("template");ft.innerHTML=`
<style>
h1 {
  font-size: 5rem;
  background-color: #444;
}
</style>
<div><h1>TODO List</h1></div>
`;class oe extends HTMLElement{constructor(){var n;super(),this.attachShadow({mode:"open"}),(n=this.shadowRoot)==null||n.appendChild(ft.content.cloneNode(!0))}}customElements.define("omron-tag",oe);const dt=document.createElement("template");dt.innerHTML=`
<style>
h1 {
  font-size: 5rem;
  background-color: #444;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
} 

html, body, div, input, ul, li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

dialog::backdrop {
  background-color: #333A;
}

.dialogButton {
  margin: 1rem;
  padding: 1.0rem;
  border-radius: 0rem;
}

hr {
  margin: 0;
}

dialog {
  z-index: 10;
  /* margin-top: 10px; */
  background: #666;
  border: none;
  border-radius: 0.5rem;
}

.dialogwrapper {
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "message  message"
  "okay  cancel";
}

.dialogmessage {
  grid-area: message;
  align-self: center;
}

input, 
button {
  font: inherit;
  background-color: #555;
}

body {
  min-height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  margin: auto;
  width: 100%;
  /* max-width: 800px; */
  display: flex;
  flex-flow: column nowrap;
}

/* #list {
  list-style: none;
  padding: 0;
} */

section {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 0.5rem;
}

.button {
  border-radius: 2px;
  padding: 5px;
  /* min-width: 48px;
  min-height: 48px; */
}

.button:hover {
  cursor: pointer;
}

.newItemEntry {
  position: sticky;
  top: 0;
  margin-bottom: 1rem;
}

.newItemEntry__form {
  display: flex;
  gap: 0.25rem;
  font-size: 1.5rem;
}

.newItemEntry__input {
  width: calc(100% - (0.25rem + 48px));
  flex-grow: 1;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  padding: 0.5em;
}

.newItemEntry__button {
  background-color: transparent;
  color: whitesmoke;
  border: 3px dashed whitesmoke;
  padding: 0.75em;
}

.newItemEntry__button:hover,
.newItemEntry__button:focus {
  color: limegreen;
}

.listContainer {
  font-size: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.listTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listTitle__button {
  /* background-color: transparent; */
  color: whitesmoke;
  /* padding: 0.25em; */
}


.listItems {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  list-style-type: none;
}


.item {
  display: flex;
  align-items: center;
  padding-top: 0.25em;
  gap: 1em;
}

.item > input[type="checkbox"] {
  text-align: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
  cursor: pointer;
}

.item > input[type="checkbox"]:checked + label {
  text-decoration: line-through;
}

.item > label {
  flex-grow: 1;
  word-break: break-all;
}

.item > button:hover, 
.item > button:focus {
  color: red;
}

.listTitle__button:hover, 
.listTitle__button:focus {
  color: red;
}

@media (min-width: 768px) {
  section {
      padding: 1rem;
  }
  .newItemEntry__form {
      gap: 0.5rem;
  }
}
</style>
<main>
<omron-tag></omron-tag>
<dialog data-modal>
  <div class="dialogwrapper">
    <div class="dialogmessage">Delete all the todo items?</div>
    <button data-close-modal class="dialogButton">OK</button>
    <button data-cancel-modal class="dialogButton">Cancel</button>
    </div>
</dialog>
<section class="newItemEntry">
    <form class="newItemEntry__form" id="new-task-form">
        <input class="newItemEntry__input" type="text" id="new-task-title">
        <button class="button newItemEntry__button"  type="submit">Add</button>
    </form>
</section>
<section class="listContainer">
    <header class="listTitle">
        
        
        <button id="clearItemsButton" class="button listTitle__button" title="Clear the list"
          aria-label="Remove all items from the list">
          Clear All
        </button>
        <button data-open-button class="button">Open</button>
        <button data-save-button class="button" disabled>Save</button>
        <button data-saveas-button class="button">SaveAs</button>
        
      </header>
      <hr />
    <ul id="list"></ul>
</section>
</main>
`;class ie extends HTMLElement{constructor(){var r,i,o,s,u,c,a,f,m,d,p,v;super();y(this,"taskListGroup",this.loadTasks());y(this,"closeButton");y(this,"cancelButton");y(this,"modal");y(this,"list");y(this,"form");y(this,"input");y(this,"fileHandle",null);y(this,"openButton");y(this,"saveButton");y(this,"saveasButton");y(this,"clearItems");this.attachShadow({mode:"open"}),(r=this.shadowRoot)==null||r.appendChild(dt.content.cloneNode(!0)),this.closeButton=(i=this.shadowRoot)==null?void 0:i.querySelector("[data-close-modal]"),this.cancelButton=(o=this.shadowRoot)==null?void 0:o.querySelector("[data-cancel-modal]"),this.modal=(s=this.shadowRoot)==null?void 0:s.querySelector("[data-modal]"),this.list=(u=this.shadowRoot)==null?void 0:u.querySelector("#list"),this.form=(c=this.shadowRoot)==null?void 0:c.getElementById("new-task-form"),this.input=(a=this.shadowRoot)==null?void 0:a.querySelector("#new-task-title"),this.openButton=(f=this.shadowRoot)==null?void 0:f.querySelector("[data-open-button]"),this.saveButton=(m=this.shadowRoot)==null?void 0:m.querySelector("[data-save-button]"),this.saveasButton=(d=this.shadowRoot)==null?void 0:d.querySelector("[data-saveas-button]"),this.clearItems=(p=this.shadowRoot)==null?void 0:p.getElementById("clearItemsButton"),this.updateTaskUI(),this.closeButton.addEventListener("click",()=>{var l;this.currentTaskList().tasks=[],this.updateTaskUI(),this.saveTasks(),this.modal.close(),(l=this.input)==null||l.focus()}),M(this.cancelButton,"click").subscribe(()=>{var l;console.log("Clicked!"),this.modal.close(),(l=this.input)==null||l.focus()}),this.modal.addEventListener("click",l=>{const b=this.modal.getBoundingClientRect();(l.clientX<b.left||l.clientX>b.right||l.clientY<b.top||l.clientY>b.bottom)&&this.modal.close()}),(v=this.form)==null||v.addEventListener("submit",l=>{var g,S;if(l.preventDefault(),((g=this.input)==null?void 0:g.value)==""||((S=this.input)==null?void 0:S.value)==null)return;const b={id:this.nextId(),title:this.input.value,completed:!1,createdAt:new Date};this.currentTaskList().tasks.push(b),this.saveTasks(),this.addListItem(b),this.input.value=""}),this.clearItems.addEventListener("click",()=>{this.modal.showModal()}),this.openButton.addEventListener("click",async()=>{let l=await this.getFile();this.taskListGroup=JSON.parse(l),this.saveTasks(),this.updateTaskUI()}),this.saveButton.addEventListener("click",()=>{this.save(JSON.stringify(this.taskListGroup,null,2))}),this.saveasButton.addEventListener("click",()=>{this.saveAs(JSON.stringify(this.taskListGroup,null,2))})}async getFile(){return[this.fileHandle]=await window.showOpenFilePicker(),this.saveButton.disabled=!1,await(await this.fileHandle.getFile()).text()}async save(e){var i;if(this.fileHandle===void 0)return;let r=await((i=this.fileHandle)==null?void 0:i.createWritable());await(r==null?void 0:r.write(e)),await(r==null?void 0:r.close())}async saveAs(e){console.log("saveas"),this.fileHandle=await window.showSaveFilePicker(),this.saveButton.disabled=!1,this.save(e)}nextId(){return this.currentTaskList().tasks.reduce((e,r)=>Math.max(r.id,e),0)+1}addListItem(e){const r=document.createElement("li");r.className="item";const i=document.createElement("input");i.id=e.id.toString(),i.addEventListener("change",()=>{e.completed=i.checked,this.saveTasks()}),i.type="checkbox",i.checked=e.completed;const o=document.createElement("label");o.textContent=e.title,o.htmlFor=e.id.toString();const s=document.createElement("button");s.className="button",s.textContent="×",s.addEventListener("click",()=>{this.deleteTask(e.id)}),r.append(i),r.append(o),r.append(s),this.list.append(r)}deleteTask(e){this.currentTaskList().tasks=this.currentTaskList().tasks.filter(r=>r.id!==e),console.log(this.taskListGroup),this.saveTasks(),this.updateTaskUI()}currentTaskList(){return this.taskListGroup.taskLists[0]}saveTasks(){localStorage.setItem("TASKS",JSON.stringify(this.taskListGroup,null,2))}loadTasks(){const e=localStorage.getItem("TASKS");return e==null?{title:"Task List Group",taskLists:[{title:"Task List",tasks:[]}]}:JSON.parse(e)}updateTaskUI(){this.list.innerHTML="",this.currentTaskList().tasks.forEach(e=>this.addListItem(e))}}customElements.define("todo-list",ie);document.querySelector("#app").innerHTML=`
<todo-list></todo-list>
`;const se=$t("Sam","Ray","Thomas");se.subscribe(t=>{console.log(`Name: ${t}`)});
