(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var B=function(t,n){return B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},B(t,n)};function U(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");B(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function ht(t,n,e,r){function i(o){return o instanceof e?o:new e(function(c){c(o)})}return new(e||(e=Promise))(function(o,c){function a(d){try{u(r.next(d))}catch(p){c(p)}}function s(d){try{u(r.throw(d))}catch(p){c(p)}}function u(d){d.done?o(d.value):i(d.value).then(a,s)}u((r=r.apply(t,n||[])).next())})}function V(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(u){return function(d){return s([u,d])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(e=0)),e;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return e.label++,{value:u[1],done:!1};case 5:e.label++,i=u[1],u=[0];continue;case 7:u=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){e=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){e.label=u[1];break}if(u[0]===6&&e.label<o[1]){e.label=o[1],o=u;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(u);break}o[2]&&e.ops.pop(),e.trys.pop();continue}u=n.call(t,e)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function I(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function F(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var r=e.call(t),i,o=[],c;try{for(;(n===void 0||n-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){c={error:a}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(c)throw c.error}}return o}function R(t,n,e){if(e||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}function k(t){return this instanceof k?(this.v=t,this):new k(t)}function yt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(f){r[f]&&(i[f]=function(v){return new Promise(function(w,m){o.push([f,v,w,m])>1||a(f,v)})})}function a(f,v){try{s(r[f](v))}catch(w){p(o[0][3],w)}}function s(f){f.value instanceof k?Promise.resolve(f.value.v).then(u,d):p(o[0][2],f)}function u(f){a("next",f)}function d(f){a("throw",f)}function p(f,v){f(v),o.shift(),o.length&&a(o[0][0],o[0][1])}}function pt(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof I=="function"?I(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(c){return new Promise(function(a,s){c=t[o](c),i(a,s,c.done,c.value)})}}function i(o,c,a,s){Promise.resolve(s).then(function(u){o({value:u,done:a})},c)}}function y(t){return typeof t=="function"}function vt(t){var n=function(r){Error.call(r),r.stack=new Error().stack},e=t(n);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var P=vt(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function G(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var C=function(){function t(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var n,e,r,i,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=I(c),s=a.next();!s.done;s=a.next()){var u=s.value;u.remove(this)}}catch(m){n={error:m}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(n)throw n.error}}else c.remove(this);var d=this.initialTeardown;if(y(d))try{d()}catch(m){o=m instanceof P?m.errors:[m]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var f=I(p),v=f.next();!v.done;v=f.next()){var w=v.value;try{J(w)}catch(m){o=o??[],m instanceof P?o=R(R([],F(o)),F(m.errors)):o.push(m)}}}catch(m){r={error:m}}finally{try{v&&!v.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}if(o)throw new P(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)J(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}},t.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},t.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},t.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&G(e,n)},t.prototype.remove=function(n){var e=this._finalizers;e&&G(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}();C.EMPTY;function X(t){return t instanceof C||t&&"closed"in t&&y(t.remove)&&y(t.add)&&y(t.unsubscribe)}function J(t){y(t)?t():t.unsubscribe()}var $={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},N={setTimeout:function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,R([t,n],F(e)))},clearTimeout:function(t){var n=N.delegate;return((n==null?void 0:n.clearTimeout)||clearTimeout)(t)},delegate:void 0};function W(t){N.setTimeout(function(){throw t})}function H(){}function mt(t){t()}var M=function(t){U(n,t);function n(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,X(e)&&e.add(r)):r.destination=gt,r}return n.create=function(e,r,i){return new q(e,r,i)},n.prototype.next=function(e){this.isStopped||this._next(e)},n.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(e){this.destination.next(e)},n.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(C),bt=Function.prototype.bind;function _(t,n){return bt.call(t,n)}var wt=function(){function t(n){this.partialObserver=n}return t.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(r){O(r)}},t.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(r){O(r)}else O(n)},t.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(e){O(e)}},t}(),q=function(t){U(n,t);function n(e,r,i){var o=t.call(this)||this,c;if(y(e)||!e)c={next:e??void 0,error:r??void 0,complete:i??void 0};else{var a;o&&$.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=function(){return o.unsubscribe()},c={next:e.next&&_(e.next,a),error:e.error&&_(e.error,a),complete:e.complete&&_(e.complete,a)}):c=e}return o.destination=new wt(c),o}return n}(M);function O(t){W(t)}function St(t){throw t}var gt={closed:!0,next:H,error:St,complete:H},D=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Et(t){return t}function kt(t){return t.length===0?Et:t.length===1?t[0]:function(e){return t.reduce(function(r,i){return i(r)},e)}}var b=function(){function t(n){n&&(this._subscribe=n)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(n,e,r){var i=this,o=It(n)?n:new q(n,e,r);return mt(function(){var c=i,a=c.operator,s=c.source;o.add(a?a.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},t.prototype.forEach=function(n,e){var r=this;return e=K(e),new e(function(i,o){var c=new q({next:function(a){try{n(a)}catch(s){o(s),c.unsubscribe()}},error:o,complete:i});r.subscribe(c)})},t.prototype._subscribe=function(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)},t.prototype[D]=function(){return this},t.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return kt(n)(this)},t.prototype.toPromise=function(n){var e=this;return n=K(n),new n(function(r,i){var o;e.subscribe(function(c){return o=c},function(c){return i(c)},function(){return r(o)})})},t.create=function(n){return new t(n)},t}();function K(t){var n;return(n=t??$.Promise)!==null&&n!==void 0?n:Promise}function xt(t){return t&&y(t.next)&&y(t.error)&&y(t.complete)}function It(t){return t&&t instanceof M||xt(t)&&X(t)}function Tt(t){return y(t==null?void 0:t.lift)}function Q(t){return function(n){if(Tt(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Lt(t,n,e,r,i){return new Ot(t,n,e,r,i)}var Ot=function(t){U(n,t);function n(e,r,i,o,c,a){var s=t.call(this,e)||this;return s.onFinalize=c,s.shouldUnsubscribe=a,s._next=r?function(u){try{r(u)}catch(d){e.error(d)}}:t.prototype._next,s._error=o?function(u){try{o(u)}catch(d){e.error(d)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=i?function(){try{i()}catch(u){e.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,s}return n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},n}(M);function At(t){return t&&y(t.schedule)}function Pt(t){return t[t.length-1]}function _t(t){return At(Pt(t))?t.pop():void 0}var Z=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function z(t){return y(t==null?void 0:t.then)}function tt(t){return y(t[D])}function et(t){return Symbol.asyncIterator&&y(t==null?void 0:t[Symbol.asyncIterator])}function nt(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Bt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var rt=Bt();function ot(t){return y(t==null?void 0:t[rt])}function it(t){return yt(this,arguments,function(){var e,r,i,o;return V(this,function(c){switch(c.label){case 0:e=t.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,k(e.read())];case 3:return r=c.sent(),i=r.value,o=r.done,o?[4,k(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,k(i)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function ct(t){return y(t==null?void 0:t.getReader)}function Y(t){if(t instanceof b)return t;if(t!=null){if(tt(t))return Ft(t);if(Z(t))return Rt(t);if(z(t))return qt(t);if(et(t))return ut(t);if(ot(t))return Ut(t);if(ct(t))return Ct(t)}throw nt(t)}function Ft(t){return new b(function(n){var e=t[D]();if(y(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Rt(t){return new b(function(n){for(var e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function qt(t){return new b(function(n){t.then(function(e){n.closed||(n.next(e),n.complete())},function(e){return n.error(e)}).then(null,W)})}function Ut(t){return new b(function(n){var e,r;try{for(var i=I(t),o=i.next();!o.done;o=i.next()){var c=o.value;if(n.next(c),n.closed)return}}catch(a){e={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}n.complete()})}function ut(t){return new b(function(n){Mt(t,n).catch(function(e){return n.error(e)})})}function Ct(t){return ut(it(t))}function Mt(t,n){var e,r,i,o;return ht(this,void 0,void 0,function(){var c,a;return V(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),e=pt(t),s.label=1;case 1:return[4,e.next()];case 2:if(r=s.sent(),!!r.done)return[3,4];if(c=r.value,n.next(c),n.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=s.sent(),i={error:a},[3,11];case 6:return s.trys.push([6,,9,10]),r&&!r.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function g(t,n,e,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function at(t,n){return n===void 0&&(n=0),Q(function(e,r){e.subscribe(Lt(r,function(i){return g(r,t,function(){return r.next(i)},n)},function(){return g(r,t,function(){return r.complete()},n)},function(i){return g(r,t,function(){return r.error(i)},n)}))})}function st(t,n){return n===void 0&&(n=0),Q(function(e,r){r.add(t.schedule(function(){return e.subscribe(r)},n))})}function Dt(t,n){return Y(t).pipe(st(n),at(n))}function Yt(t,n){return Y(t).pipe(st(n),at(n))}function jt(t,n){return new b(function(e){var r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Gt(t,n){return new b(function(e){var r;return g(e,n,function(){r=t[rt](),g(e,n,function(){var i,o,c;try{i=r.next(),o=i.value,c=i.done}catch(a){e.error(a);return}c?e.complete():e.next(o)},0,!0)}),function(){return y(r==null?void 0:r.return)&&r.return()}})}function lt(t,n){if(!t)throw new Error("Iterable cannot be null");return new b(function(e){g(e,n,function(){var r=t[Symbol.asyncIterator]();g(e,n,function(){r.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function Jt(t,n){return lt(it(t),n)}function Ht(t,n){if(t!=null){if(tt(t))return Dt(t,n);if(Z(t))return jt(t,n);if(z(t))return Yt(t,n);if(et(t))return lt(t,n);if(ot(t))return Gt(t,n);if(ct(t))return Jt(t,n)}throw nt(t)}function Kt(t,n){return n?Ht(t,n):Y(t)}function Vt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=_t(t);return Kt(t,e)}function Xt(){document.querySelector("#app").innerHTML=`
<main>
<dialog data-modal>
    <div>Delete all the todo items?</div>
    <button data-close-modal class="dialogButton">OK</button>
    <button data-cancel-modal class="dialogButton">Cancel</button>
</dialog>
<section class="newItemEntry">
    <form class="newItemEntry__form" id="new-task-form">
        <input class="newItemEntry__input" type="text" id="new-task-title">
        <button class="button newItemEntry__button"  type="submit">Add</button>
    </form>
</section>
<section class="listContainer">
    <header class="listTitle">
        <h2 id="listName">List</h2>
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
`;let t=dt();const n=document.querySelector("[data-close-modal]"),e=document.querySelector("[data-cancel-modal]"),r=document.querySelector("[data-modal]"),i=document.querySelector("#list"),o=document.getElementById("new-task-form"),c=document.querySelector("#new-task-title");T(),n.addEventListener("click",()=>{E().tasks=[],T(),x(),r.close(),c==null||c.focus()}),e.addEventListener("click",()=>{r.close(),c==null||c.focus()}),r.addEventListener("click",l=>{const h=r.getBoundingClientRect();(l.clientX<h.left||l.clientX>h.right||l.clientY<h.top||l.clientY>h.bottom)&&r.close()}),o==null||o.addEventListener("submit",l=>{if(l.preventDefault(),(c==null?void 0:c.value)==""||(c==null?void 0:c.value)==null)return;const h={id:m(),title:c.value,completed:!1,createdAt:new Date};E().tasks.push(h),x(),j(h),c.value=""}),document.getElementById("clearItemsButton").addEventListener("click",()=>{r.showModal()});const s=document.querySelector("[data-open-button]"),u=document.querySelector("[data-save-button]"),d=document.querySelector("[data-saveas-button]");s.addEventListener("click",async()=>{let l=await f();t=JSON.parse(l),x(),T()}),u.addEventListener("click",()=>{v(JSON.stringify(t,null,2))}),d.addEventListener("click",()=>{w(JSON.stringify(t,null,2))});let p;async function f(){return[p]=await window.showOpenFilePicker(),u.disabled=!1,await(await p.getFile()).text()}async function v(l){if(p===void 0)return;let h=await p.createWritable();await h.write(l),await h.close()}async function w(l){p=await window.showSaveFilePicker(),u.disabled=!1,v(l)}function m(){return E().tasks.reduce((l,h)=>Math.max(h.id,l),0)+1}function j(l){const h=document.createElement("li");h.className="item";const S=document.createElement("input");S.id=l.id.toString(),S.addEventListener("change",()=>{l.completed=S.checked,x()}),S.type="checkbox",S.checked=l.completed;const A=document.createElement("label");A.textContent=l.title,A.htmlFor=l.id.toString();const L=document.createElement("button");L.className="button",L.textContent="×",L.addEventListener("click",()=>{ft(l.id)}),h.append(S),h.append(A),h.append(L),i==null||i.append(h)}function ft(l){E().tasks=E().tasks.filter(h=>h.id!==l),console.log(t),x(),T()}function E(){return t.taskLists[0]}function x(){localStorage.setItem("TASKS",JSON.stringify(t,null,2))}function dt(){const l=localStorage.getItem("TASKS");return l==null?{title:"Task List Group",taskLists:[{title:"Task List",tasks:[]}]}:JSON.parse(l)}function T(){i.innerHTML="",E().tasks.forEach(j)}}const $t=Vt("Sam","Ray","Thomas");$t.subscribe(t=>{console.log(`Name: ${t}`)});Xt();
