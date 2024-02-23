var mt=Object.defineProperty;var pt=(t,n,e)=>n in t?mt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var v=(t,n,e)=>(pt(t,typeof n!="symbol"?n+"":n,e),e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var R=function(t,n){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},R(t,n)};function M(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");R(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function vt(t,n,e,r){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function l(d){try{s(r.next(d))}catch(p){a(p)}}function c(d){try{s(r.throw(d))}catch(p){a(p)}}function s(d){d.done?o(d.value):i(d.value).then(l,c)}s((r=r.apply(t,n||[])).next())})}function K(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(s){return function(d){return c([s,d])}}function c(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(e=0)),e;)try{if(r=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,i=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){e.label=s[1];break}if(s[0]===6&&e.label<o[1]){e.label=o[1],o=s;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(s);break}o[2]&&e.ops.pop(),e.trys.pop();continue}s=n.call(t,e)}catch(d){s=[6,d],i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function T(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),i,o=[],a;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(l){a={error:l}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(a)throw a.error}}return o}function A(t,n,e){if(e||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}function S(t){return this instanceof S?(this.v=t,this):new S(t)}function yt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(f){r[f]&&(i[f]=function(m){return new Promise(function(y,u){o.push([f,m,y,u])>1||l(f,m)})})}function l(f,m){try{c(r[f](m))}catch(y){p(o[0][3],y)}}function c(f){f.value instanceof S?Promise.resolve(f.value.v).then(s,d):p(o[0][2],f)}function s(f){l("next",f)}function d(f){l("throw",f)}function p(f,m){f(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function bt(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof T=="function"?T(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(a){return new Promise(function(l,c){a=t[o](a),i(l,c,a.done,a.value)})}}function i(o,a,l,c){Promise.resolve(c).then(function(s){o({value:s,done:l})},a)}}function h(t){return typeof t=="function"}function gt(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var P=gt(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function D(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var U=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,i,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=T(a),c=l.next();!c.done;c=l.next()){var s=c.value;s.remove(this)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(e=l.return)&&e.call(l)}finally{if(n)throw n.error}}else a.remove(this);var d=this.initialTeardown;if(h(d))try{d()}catch(u){o=u instanceof P?u.errors:[u]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var f=T(p),m=f.next();!m.done;m=f.next()){var y=m.value;try{j(y)}catch(u){o=o??[],u instanceof P?o=A(A([],L(o)),L(u.errors)):o.push(u)}}}catch(u){r={error:u}}finally{try{m&&!m.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(o)throw new P(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)j(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&D(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&D(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}();U.EMPTY;function Q(t){return t instanceof U||t&&"closed"in t&&h(t.remove)&&h(t.add)&&h(t.unsubscribe)}function j(t){h(t)?t():t.unsubscribe()}var $={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},W={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,A([t,n],L(e)))},clearTimeout:function(t){var n=W.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function X(t){W.setTimeout(function(){throw t})}function J(){}function wt(t){t()}var q=function(t){M(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,Q(e)&&e.add(r)):r.destination=Et,r}return n.create=function(e,r,i){return new B(e,r,i)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(U),kt=Function.prototype.bind;function C(t,n){return kt.call(t,n)}var xt=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){I(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){I(r)}else I(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){I(e)}},t}(),B=function(t){M(n,t);function n(e,r,i){var o=t.call(this)||this,a;if(h(e)||!e)a={next:e??void 0,error:r??void 0,complete:i??void 0};else{var l;o&&$.useDeprecatedNextContext?(l=Object.create(e),l.unsubscribe=function(){return o.unsubscribe()},a={next:e.next&&C(e.next,l),error:e.error&&C(e.error,l),complete:e.complete&&C(e.complete,l)}):a=e}return o.destination=new xt(a),o}return n}(q);function I(t){X(t)}function St(t){throw t}var Et={closed:!0,next:J,error:St,complete:J},G=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Tt(t){return t}function Lt(t){return t.length===0?Tt:t.length===1?t[0]:function(e){return t.reduce(function(r,i){return i(r)},e)}}var g=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var i=this,o=At(n)?n:new B(n,e,r);return wt(function(){var a=i,l=a.operator,c=a.source;o.add(l?l.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=Y(e),new e(function(i,o){var a=new B({next:function(l){try{n(l)}catch(c){o(c),a.unsubscribe()}},error:o,complete:i});r.subscribe(a)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[G]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Lt(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=Y(n),new n(function(r,i){var o;e.subscribe(function(a){return o=a},function(a){return i(a)},function(){return r(o)})})},t.create=function(n){return new t(n)},t}();function Y(t){var n;return(n=t??$.Promise)!==null&&n!==void 0?n:Promise}function It(t){return t&&h(t.next)&&h(t.error)&&h(t.complete)}function At(t){return t&&t instanceof q||It(t)&&Q(t)}function _t(t){return h(t==null?void 0:t.lift)}function O(t){return function(n){if(_t(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function _(t,n,e,r,i){return new Ot(t,n,e,r,i)}var Ot=function(t){M(n,t);function n(e,r,i,o,a,l){var c=t.call(this,e)||this;return c.onFinalize=a,c.shouldUnsubscribe=l,c._next=r?function(s){try{r(s)}catch(d){e.error(d)}}:t.prototype._next,c._error=o?function(s){try{o(s)}catch(d){e.error(d)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=i?function(){try{i()}catch(s){e.error(s)}finally{this.unsubscribe()}}:t.prototype._complete,c}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(q);function Pt(t){return t&&h(t.schedule)}function Ct(t){return t[t.length-1]}function Rt(t){return Pt(Ct(t))?t.pop():void 0}var F=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function V(t){return h(t==null?void 0:t.then)}function Z(t){return h(t[G])}function N(t){return Symbol.asyncIterator&&h(t==null?void 0:t[Symbol.asyncIterator])}function tt(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Bt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var et=Bt();function nt(t){return h(t==null?void 0:t[et])}function rt(t){return yt(this,arguments,function(){var e,r,i,o;return K(this,function(a){switch(a.label){case 0:e=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,S(e.read())];case 3:return r=a.sent(),i=r.value,o=r.done,o?[4,S(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,S(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function ot(t){return h(t==null?void 0:t.getReader)}function E(t){if(t instanceof g)return t;if(t!=null){if(Z(t))return Ht(t);if(F(t))return Mt(t);if(V(t))return Ut(t);if(N(t))return it(t);if(nt(t))return qt(t);if(ot(t))return Gt(t)}throw tt(t)}function Ht(t){return new g(function(n){var e=t[G]();if(h(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mt(t){return new g(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Ut(t){return new g(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,X)})}function qt(t){return new g(function(n){var e,r;try{for(var i=T(t),o=i.next();!o.done;o=i.next()){var a=o.value;if(n.next(a),n.closed)return}}catch(l){e={error:l}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}n.complete()})}function it(t){return new g(function(n){Ft(t,n).catch(function(e){return n.error(e)})})}function Gt(t){return it(rt(t))}function Ft(t,n){var e,r,i,o;return vt(this,void 0,void 0,function(){var a,l;return K(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=bt(t),c.label=1;case 1:return[4,e.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,n.next(a),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=c.sent(),i={error:l},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function k(t,n,e,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function at(t,n){return n===void 0&&(n=0),O(function(e,r){e.subscribe(_(r,function(i){return k(r,t,function(){return r.next(i)},n)},function(){return k(r,t,function(){return r.complete()},n)},function(i){return k(r,t,function(){return r.error(i)},n)}))})}function st(t,n){return n===void 0&&(n=0),O(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function Dt(t,n){return E(t).pipe(st(n),at(n))}function jt(t,n){return E(t).pipe(st(n),at(n))}function Jt(t,n){return new g(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Yt(t,n){return new g(function(e){var r;return k(e,n,function(){r=t[et](),k(e,n,function(){var i,o,a;try{i=r.next(),o=i.value,a=i.done}catch(l){e.error(l);return}a?e.complete():e.next(o)},0,!0)}),function(){return h(r==null?void 0:r.return)&&r.return()}})}function lt(t,n){if(!t)throw new Error("Iterable cannot be null");return new g(function(e){k(e,n,function(){var r=t[Symbol.asyncIterator]();k(e,n,function(){r.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function zt(t,n){return lt(rt(t),n)}function Kt(t,n){if(t!=null){if(Z(t))return Dt(t,n);if(F(t))return Jt(t,n);if(V(t))return jt(t,n);if(N(t))return lt(t,n);if(nt(t))return Yt(t,n);if(ot(t))return zt(t,n)}throw tt(t)}function Qt(t,n){return n?Kt(t,n):E(t)}function $t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=Rt(t);return Qt(t,e)}function ct(t,n){return O(function(e,r){var i=0;e.subscribe(_(r,function(o){r.next(t.call(n,o,i++))}))})}var Wt=Array.isArray;function Xt(t,n){return Wt(n)?t.apply(void 0,A([],L(n))):t(n)}function Vt(t){return ct(function(n){return Xt(t,n)})}function Zt(t,n,e,r,i,o,a,l){var c=[],s=0,d=0,p=!1,f=function(){p&&!c.length&&!s&&n.complete()},m=function(u){return s<r?y(u):c.push(u)},y=function(u){o&&n.next(u),s++;var b=!1;E(e(u,d++)).subscribe(_(n,function(w){i==null||i(w),o?m(w):n.next(w)},function(){b=!0},void 0,function(){if(b)try{s--;for(var w=function(){var x=c.shift();a?k(n,a,function(){return y(x)}):y(x)};c.length&&s<r;)w();f()}catch(x){n.error(x)}}))};return t.subscribe(_(n,m,function(){p=!0,f()})),function(){l==null||l()}}function ut(t,n,e){return e===void 0&&(e=1/0),h(n)?ut(function(r,i){return ct(function(o,a){return n(r,o,i,a)})(E(t(r,i)))},e):(typeof n=="number"&&(e=n),O(function(r,i){return Zt(r,i,t,e)}))}var Nt=["addListener","removeListener"],te=["addEventListener","removeEventListener"],ee=["on","off"];function H(t,n,e,r){if(h(e)&&(r=e,e=void 0),r)return H(t,n,e).pipe(Vt(r));var i=L(oe(t)?te.map(function(l){return function(c){return t[l](n,c,e)}}):ne(t)?Nt.map(z(t,n)):re(t)?ee.map(z(t,n)):[],2),o=i[0],a=i[1];if(!o&&F(t))return ut(function(l){return H(l,n,e)})(E(t));if(!o)throw new TypeError("Invalid event target");return new g(function(l){var c=function(){for(var s=[],d=0;d<arguments.length;d++)s[d]=arguments[d];return l.next(1<s.length?s:s[0])};return o(c),function(){return a(c)}})}function z(t,n){return function(e){return function(r){return t[e](n,r)}}}function ne(t){return h(t.addListener)&&h(t.removeListener)}function re(t){return h(t.on)&&h(t.off)}function oe(t){return h(t.addEventListener)&&h(t.removeEventListener)}const dt=document.createElement("template");dt.innerHTML=`
<style>
h1 {
  font-size: 5rem;
  background-color: #444;
}
</style>
<div><h1>TODO List</h1></div>
`;class ie extends HTMLElement{constructor(){var n;super(),this.attachShadow({mode:"open"}),(n=this.shadowRoot)==null||n.appendChild(dt.content.cloneNode(!0))}}customElements.define("omron-tag",ie);const ft=document.createElement("template");ft.innerHTML=`

<style>
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
  /* display: flex;
  flex-direction: column; */
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
  border-width: 0px;
  /*border-radius: 2px;*/
  padding: 5px;
  margin: 2px;
  /* min-width: 48px;
  min-height: 48px; */
}

.button:hover {
  cursor: pointer;
  background-color: #AAA;
}

.newItemEntry {
  /*position: sticky;*/
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
/*  background-color: transparent;
  color: whitesmoke;
  border: 3px dashed whitesmoke;*/
  padding: 0.75em;
}

/*
.newItemEntry__button:hover,
.newItemEntry__button:focus {
  color: limegreen;
}*/

.listContainer {
  font-size: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.listTitle {

  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
/*
  display: flex;
  justify-content: left;
  align-items: center;*/
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

/*.listTitle__button:hover, 
.listTitle__button:focus {
  color: red;
}*/

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
<!-- <omron-tag></omron-tag>*/ -->
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
        <button id="clearItemsButton" class="button listTitle__button" title="Clear the list" aria-label="Remove all items from the list">Clear All</button>
        <button data-open-button class="button">Open</button>
        <button data-save-button class="button" disabled>Save</button>
        <button data-saveas-button class="button">SaveAs</button>
      </header>
      <hr />
    <ul id="list"></ul>
</section>
</main>
`;class ae extends HTMLElement{constructor(){var r,i,o,a,l,c,s,d,p,f,m,y;super();v(this,"taskListGroup",this.loadTasks());v(this,"closeButton");v(this,"cancelButton");v(this,"modal");v(this,"list");v(this,"form");v(this,"input");v(this,"fileHandle",null);v(this,"openButton");v(this,"saveButton");v(this,"saveasButton");v(this,"clearItems");this.attachShadow({mode:"open"}),(r=this.shadowRoot)==null||r.appendChild(ft.content.cloneNode(!0)),this.closeButton=(i=this.shadowRoot)==null?void 0:i.querySelector("[data-close-modal]"),this.cancelButton=(o=this.shadowRoot)==null?void 0:o.querySelector("[data-cancel-modal]"),this.modal=(a=this.shadowRoot)==null?void 0:a.querySelector("[data-modal]"),this.list=(l=this.shadowRoot)==null?void 0:l.querySelector("#list"),this.form=(c=this.shadowRoot)==null?void 0:c.getElementById("new-task-form"),this.input=(s=this.shadowRoot)==null?void 0:s.querySelector("#new-task-title"),this.openButton=(d=this.shadowRoot)==null?void 0:d.querySelector("[data-open-button]"),this.saveButton=(p=this.shadowRoot)==null?void 0:p.querySelector("[data-save-button]"),this.saveasButton=(f=this.shadowRoot)==null?void 0:f.querySelector("[data-saveas-button]"),this.clearItems=(m=this.shadowRoot)==null?void 0:m.getElementById("clearItemsButton"),this.updateTaskUI(),this.closeButton.addEventListener("click",()=>{var u;this.currentTaskList().tasks=[],this.updateTaskUI(),this.saveTasks(),this.modal.close(),(u=this.input)==null||u.focus()}),H(this.cancelButton,"click").subscribe(()=>{var u;console.log("Clicked!"),this.modal.close(),(u=this.input)==null||u.focus()}),this.modal.addEventListener("click",u=>{const b=this.modal.getBoundingClientRect();(u.clientX<b.left||u.clientX>b.right||u.clientY<b.top||u.clientY>b.bottom)&&this.modal.close()}),(y=this.form)==null||y.addEventListener("submit",u=>{var w,x;if(u.preventDefault(),((w=this.input)==null?void 0:w.value)==""||((x=this.input)==null?void 0:x.value)==null)return;const b={id:this.nextId(),title:this.input.value,completed:!1,createdAt:new Date};this.currentTaskList().tasks.push(b),this.saveTasks(),this.addListItem(b),this.input.value=""}),this.clearItems.addEventListener("click",()=>{this.modal.showModal()}),this.openButton.addEventListener("click",async()=>{let u=await this.getFile();this.taskListGroup=JSON.parse(u),this.saveTasks(),this.updateTaskUI()}),this.saveButton.addEventListener("click",()=>{this.save(JSON.stringify(this.taskListGroup,null,2))}),this.saveasButton.addEventListener("click",()=>{this.saveAs(JSON.stringify(this.taskListGroup,null,2))})}async getFile(){return[this.fileHandle]=await window.showOpenFilePicker(),this.saveButton.disabled=!1,await(await this.fileHandle.getFile()).text()}async save(e){var i;if(this.fileHandle===void 0)return;let r=await((i=this.fileHandle)==null?void 0:i.createWritable());await(r==null?void 0:r.write(e)),await(r==null?void 0:r.close())}async saveAs(e){console.log("saveas"),this.fileHandle=await window.showSaveFilePicker(),this.saveButton.disabled=!1,this.save(e)}nextId(){return this.currentTaskList().tasks.reduce((e,r)=>Math.max(r.id,e),0)+1}addListItem(e){const r=document.createElement("li");r.className="item";const i=document.createElement("input");i.id=e.id.toString(),i.addEventListener("change",()=>{e.completed=i.checked,this.saveTasks()}),i.type="checkbox",i.checked=e.completed;const o=document.createElement("label");o.textContent=e.title,o.htmlFor=e.id.toString();const a=document.createElement("button");a.className="button",a.textContent="×",a.addEventListener("click",()=>{this.deleteTask(e.id)}),r.append(i),r.append(o),r.append(a),this.list.append(r)}deleteTask(e){this.currentTaskList().tasks=this.currentTaskList().tasks.filter(r=>r.id!==e),console.log(this.taskListGroup),this.saveTasks(),this.updateTaskUI()}currentTaskList(){return this.taskListGroup.taskLists[0]}saveTasks(){localStorage.setItem("TASKS",JSON.stringify(this.taskListGroup,null,2))}loadTasks(){const e=localStorage.getItem("TASKS");return e==null?{title:"Task List Group",taskLists:[{title:"Task List",tasks:[]}]}:JSON.parse(e)}updateTaskUI(){this.list.innerHTML="",this.currentTaskList().tasks.forEach(e=>this.addListItem(e))}}customElements.define("todo-list",ae);const ht=document.createElement("template");ht.innerHTML=`
  <style>
    :host { display: inline-block; border: 2px solid rebeccapurple; }
    /*::slotted(child-element) { background: lightgreen }*/
    /*div { border:3px dashed rebeccapurple }*/
  </style>
  <div><slot name=child-elements></slot></div>
  <slot class="myslot"></slot>`;customElements.define("parent-element",class extends HTMLElement{constructor(){var t,n;super(),this.attachShadow({mode:"open"}),(t=this.shadowRoot)==null||t.appendChild(ht.content.cloneNode(!0)),(n=this.shadowRoot)==null||n.addEventListener("slotchange",()=>{var a;const e=(a=this.shadowRoot)==null?void 0:a.querySelector(".myslot"),r=document.querySelector(".nav"),i=[],o=[];e.assignedElements().forEach((l,c)=>{if(o.push(l),l.getAttribute("navigationname")===null)return;const s=document.createElement("button");i.push(s),s.classList.add("navbutton"),s.addEventListener("click",d=>{const p=d.target.innerText;o.forEach(m=>m.style.display="none");const f=o.filter(m=>m.getAttribute("navigationname")===p);f[0].style.display="block",i.forEach(m=>{m.classList.remove("active")}),d.target.classList.add("active")}),c===0?s.classList.add("active"):l.style.display="none",s.innerHTML=l.getAttribute("navigationname"),r.appendChild(s)})})}});customElements.define("child-element",class extends HTMLElement{connectedCallback(){}static get observedAttributes(){return["navigationname"]}get navigationname(){return this.getAttribute("navigationname")}set navigationname(t){t!==null&&this.setAttribute("navigationname",t)}attributeChangedCallback(t,n,e){console.log(t,n,e)}});document.querySelector("#app").innerHTML=`
<div class="wrapper">
  <nav class="nav">
  <!--
    <button data-home class="active navbutton">Home</button>
    <button data-todo class="navbutton">Todo</button>
  -->
  </nav>
  <!-- <div> -->
  <parent-element class='main'>
    <child-element navigationname="Home">
      <div data-homepage class="todo homepage">Welcome to the Quark Home Page!</div>
    </child-element>
    <child-element navigationname="Todo">
      <todo-list data-todolist class="todo"></todo-list>
    </child-element>
    <child-element navigationname="About">
      <div class="About">About Quark</div>
    </child-element>
      
      <!--
      <parent-element>
        <child-element navigationname="Alpha">Child 1</child-element>
        <child-element navigationname="Beta">Child 2</child-element>
        <b>Content</b>
        <div><child-element navigationname="Gamma" slot = 'child-elements'>Child 3 !!!</child-element></div>
        </parent-element>
      -->
      <!--<child-element navigationname="Delta">Child 4 !!!</child-element>-->

      


      </parent-element>
      <!-- </div> -->
</div>
`;const se=$t("Sam","Ray","Thomas");se.subscribe(t=>{console.log(`Name: ${t}`)});
