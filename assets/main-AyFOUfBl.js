var hM=Object.defineProperty;var dM=(r,e,t)=>e in r?hM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Dh=(r,e,t)=>(dM(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Yc=function(r,e){return Yc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},Yc(r,e)};function Is(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Yc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function qc(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function $c(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function Kc(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function Si(r){return typeof r=="function"}function Ep(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var uc=Ep(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Zc(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var qa=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=qc(u),f=c.next();!f.done;f=c.next()){var p=f.value;p.remove(this)}}catch(w){e={error:w}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var g=this.initialTeardown;if(Si(g))try{g()}catch(w){a=w instanceof uc?w.errors:[w]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=qc(_),x=v.next();!x.done;x=v.next()){var y=x.value;try{Uh(y)}catch(w){a=a??[],w instanceof uc?a=Kc(Kc([],$c(a)),$c(w.errors)):a.push(w)}}}catch(w){i={error:w}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new uc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Uh(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Zc(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Zc(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),yp=qa.EMPTY;function Tp(r){return r instanceof qa||r&&"closed"in r&&Si(r.remove)&&Si(r.add)&&Si(r.unsubscribe)}function Uh(r){Si(r)?r():r.unsubscribe()}var bp={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ap={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Kc([r,e],$c(t)))},clearTimeout:function(r){var e=Ap.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function pM(r){Ap.setTimeout(function(){throw r})}function Nh(){}function Da(r){r()}var au=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Tp(t)&&t.add(i)):i.destination=vM,i}return e.create=function(t,i,o){return new jc(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(qa),mM=Function.prototype.bind;function fc(r,e){return mM.call(r,e)}var gM=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){la(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){la(i)}else la(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){la(t)}},r}(),jc=function(r){Is(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(Si(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&bp.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&fc(t.next,c),error:t.error&&fc(t.error,c),complete:t.complete&&fc(t.complete,c)}):u=t}return a.destination=new gM(u),a}return e}(au);function la(r){pM(r)}function _M(r){throw r}var vM={closed:!0,next:Nh,error:_M,complete:Nh},xM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function wp(r){return r}function SM(r){return r.length===0?wp:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var Oh=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=EM(e)?e:new jc(e,t,i);return Da(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=Fh(t),new t(function(o,a){var u=new jc({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[xM]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return SM(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=Fh(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function Fh(r){var e;return(e=r??bp.Promise)!==null&&e!==void 0?e:Promise}function MM(r){return r&&Si(r.next)&&Si(r.error)&&Si(r.complete)}function EM(r){return r&&r instanceof au||MM(r)&&Tp(r)}function yM(r){return Si(r==null?void 0:r.lift)}function Rp(r){return function(e){if(yM(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Cp(r,e,t,i,o){return new TM(r,e,t,i,o)}var TM=function(r){Is(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(p){try{i(p)}catch(g){t.error(g)}}:r.prototype._next,f._error=a?function(p){try{a(p)}catch(g){t.error(g)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(au),bM=Ep(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Lp=function(r){Is(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Bh(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new bM},e.prototype.next=function(t){var i=this;Da(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=qc(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(p){o={error:p}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Da(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Da(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?yp:(this.currentObservers=null,c.push(t),new qa(function(){i.currentObservers=null,Zc(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new Oh;return t.source=this,t},e.create=function(t,i){return new Bh(t,i)},e}(Oh),Bh=function(r){Is(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:yp},e}(Lp),Ds=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(Lp);function Zi(r,e){return Rp(function(t,i){var o=0;t.subscribe(Cp(i,function(a){i.next(r.call(e,a,o++))}))})}function ji(r,e){return e===void 0&&(e=wp),r=r??AM,Rp(function(t,i){var o,a=!0;t.subscribe(Cp(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function AM(r,e){return r===e}const wM=new URL(window.location),zh=new URLSearchParams(wM.search),RM={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","clusters"],prefixOptions:["c5sal","c5ptb","8week","4week"],prefix:zh.has("prefix")?zh.get("prefix"):"8week",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},It=new Ds(RM);function CM(r){const e=It.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};It.next(i)}function LM(r){const t={...It.getValue(),genes:r};It.next(t)}const Ua=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)};function PM(){const r=It.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<r.length;t++){const i=document.createElement("p");i.innerHTML=`<a class="dropdown-item">${r[t]}</a>`,e.appendChild(i)}}function IM(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=new URLSearchParams("");i.append("prefix",e.item(t).innerText),Ua(i),e.item(t).innerText!==It.value.prefix&&(r.innerHTML=It.value.prefix,window.location.reload())})}const DM={dotSize:5,genePercentile:.99,cameraPositionZ:250,cameraPositionY:0,cameraPositionX:0},En=new Ds(DM);function hc(r){const t={...En.getValue(),dotSize:r};En.next(t)}function Gh(r){const e=En.getValue(),t=r*.01,i={...e,genePercentile:t};En.next(i)}const UM=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{console.log(r.style.display),r.style.display=r.style.display==="none"?"block":"none",console.log(r.style.display),t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="#282828",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="#282828",t.style.color="white")})},NM=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="#282828",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="#282828",i.style.color="white")})},OM=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),p=document.getElementById("cellCheckbox"),g=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const y=()=>{const m=x.dataset.target,d=document.getElementById(m);d.style.display="block"},w=()=>{const m=x.dataset.target,d=document.getElementById(m);d.style.display="none"};["mouseenter"].forEach(m=>{x.addEventListener(m,function(){y()})}),["mouseleave"].forEach(m=>{x.addEventListener(m,function(){w()})})}),e.addEventListener("click",()=>{p.style.display==="block"&&(p.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),g.style.display==="block"&&(g.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.onchange=function(){o.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))},i.addEventListener("mouseup",function(){o.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))}),o.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{p.style.display==="block"&&(p.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),g.style.display==="block"&&(g.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),Gh(parseFloat(this.value).toFixed(2))}),f.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),Gh(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}},FM=new URL(window.location),Hh=new URLSearchParams(FM.search),BM={selectedCelltypes:[],mode:Hh.has("mode")?Number(Hh.get("mode")):1,selectedSingleGene:"",selectedGenes:[]},gt=new Ds(BM);function fo(r){const t={...gt.getValue(),selectedCelltypes:[...new Set(r)]};gt.next(t)}function zM(r){const t={...gt.getValue(),mode:r};gt.next(t)}function ho(r){const t={...gt.getValue(),selectedGenes:r};gt.next(t)}const GM=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),HM(t)})};function HM(r){const e=document.getElementById("geneNotFound");if(r){const t=It.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Oa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Oa(It.value.genes)}function Oa(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",gt.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(gt.value.selectedGenes.length>=gt.value.mode&&(u.target.checked=!1),gt.value.mode===1&&gt.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(gt.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(ho([]),u.target.checked=!0)}Pp(t,u.target.checked)})})}function VM(){const r=document.getElementById("modeButton");r.value=gt.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,zM(e?2:1),e?Ip():document.getElementById("selectedContainer").innerHTML=""}}function Pp(r,e){let t=gt.value.selectedGenes.map(i=>i);e?(t.push(r),ho(t)):(t=t.filter(i=>i!==r),ho(t))}const kM=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{ho([]),Oa(It.value.genes),geneTextbox.value=""})},WM=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",gt.value.selectedGenes.length!==0?gt.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");gt.value.selectedGenes.length===1?i.style.color="white":i.style.color=t===0?"green":"magenta",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},Ip=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",gt.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",gt.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(gt.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),Pp(t.value,!1)})}),gt.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{PM(),IM()})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{UM(),NM(),OM(),VM()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="162",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XM=0,Vh=1,YM=2,Dp=1,qM=2,Fi=3,fr=0,Pn=1,Bi=2,lr=0,As=1,kh=2,Wh=3,Xh=4,$M=5,Pr=100,KM=101,ZM=102,Yh=103,qh=104,jM=200,JM=201,QM=202,eE=203,Jc=204,Qc=205,tE=206,nE=207,iE=208,rE=209,sE=210,oE=211,aE=212,lE=213,cE=214,uE=0,fE=1,hE=2,Fa=3,dE=4,pE=5,mE=6,gE=7,Up=0,_E=1,vE=2,cr=0,xE=1,SE=2,ME=3,EE=4,yE=5,TE=6,bE=7,Np=300,Rs=301,Cs=302,eu=303,tu=304,$a=306,nu=1e3,ai=1001,iu=1002,ln=1003,$h=1004,eo=1005,Ln=1006,dc=1007,Dr=1008,ur=1009,AE=1010,wE=1011,cu=1012,Op=1013,ar=1014,vi=1015,po=1016,Fp=1017,Bp=1018,Ur=1020,RE=1021,li=1023,CE=1024,LE=1025,Nr=1026,Ls=1027,zp=1028,Gp=1029,PE=1030,Hp=1031,Vp=1033,pc=33776,mc=33777,gc=33778,_c=33779,Kh=35840,Zh=35841,jh=35842,Jh=35843,kp=36196,Qh=37492,ed=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,vc=36492,md=36494,gd=36495,IE=36283,_d=36284,vd=36285,xd=36286,DE=3200,UE=3201,NE=0,OE=1,or="",gi="srgb",dr="srgb-linear",uu="display-p3",Ka="display-p3-linear",Ba="linear",zt="srgb",za="rec709",Ga="p3",os=7680,Sd=519,FE=512,BE=513,zE=514,Wp=515,GE=516,HE=517,VE=518,kE=519,Md=35044,Ed="300 es",ru=1035,zi=2e3,Ha=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yd=1234567;const lo=Math.PI/180,mo=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function WE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function XE(r,e,t){return r!==e?(t-r)/(e-r):0}function co(r,e,t){return(1-t)*r+t*e}function YE(r,e,t,i){return co(r,e,1-Math.exp(-t*i))}function qE(r,e=1){return e-Math.abs(fu(r,e*2)-e)}function $E(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function KE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ZE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jE(r,e){return r+Math.random()*(e-r)}function JE(r){return r*(.5-Math.random())}function QE(r){r!==void 0&&(yd=r);let e=yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ey(r){return r*lo}function ty(r){return r*mo}function su(r){return(r&r-1)===0&&r!==0}function ny(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Va(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function iy(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),p=a((e+i)/2),g=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),y=u((i-e)/2);switch(o){case"XYX":r.set(c*g,f*_,f*v,c*p);break;case"YZY":r.set(f*v,c*g,f*_,c*p);break;case"ZXZ":r.set(f*_,f*v,c*g,c*p);break;case"XZX":r.set(c*g,f*y,f*x,c*p);break;case"YXY":r.set(f*x,c*g,f*y,c*p);break;case"ZYZ":r.set(f*y,f*x,c*g,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ry={DEG2RAD:lo,RAD2DEG:mo,generateUUID:Us,clamp:mn,euclideanModulo:fu,mapLinear:WE,inverseLerp:XE,lerp:co,damp:YE,pingpong:qE,smoothstep:$E,smootherstep:KE,randInt:ZE,randFloat:jE,randFloatSpread:JE,seededRandom:QE,degToRad:ey,radToDeg:ty,isPowerOfTwo:su,ceilPowerOfTwo:ny,floorPowerOfTwo:Va,setQuaternionFromProperEuler:iy,normalize:Sn,denormalize:ys};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,o,a,u,c,f,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,p)}set(e,t,i,o,a,u,c,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=t,g[4]=a,g[5]=f,g[6]=i,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],p=i[1],g=i[4],_=i[7],v=i[2],x=i[5],y=i[8],w=o[0],m=o[3],d=o[6],P=o[1],T=o[4],L=o[7],G=o[2],B=o[5],U=o[8];return a[0]=u*w+c*P+f*G,a[3]=u*m+c*T+f*B,a[6]=u*d+c*L+f*U,a[1]=p*w+g*P+_*G,a[4]=p*m+g*T+_*B,a[7]=p*d+g*L+_*U,a[2]=v*w+x*P+y*G,a[5]=v*m+x*T+y*B,a[8]=v*d+x*L+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*c*p-i*a*g+i*c*f+o*a*p-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],p=e[7],g=e[8],_=g*u-c*p,v=c*f-g*a,x=p*a-u*f,y=t*_+i*v+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=_*w,e[1]=(o*p-g*i)*w,e[2]=(c*i-o*u)*w,e[3]=v*w,e[4]=(g*t-o*f)*w,e[5]=(o*a-c*t)*w,e[6]=x*w,e[7]=(i*f-p*t)*w,e[8]=(u*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),p=Math.sin(a);return this.set(i*f,i*p,-i*(f*u+p*c)+u+e,-o*p,o*f,-o*(-p*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new mt;function Xp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sy(){const r=ka("canvas");return r.style.display="block",r}const Td={};function oy(r){r in Td||(Td[r]=!0,console.warn(r))}const bd=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ad=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[dr]:{transfer:Ba,primaries:za,toReference:r=>r,fromReference:r=>r},[gi]:{transfer:zt,primaries:za,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Ba,primaries:Ga,toReference:r=>r.applyMatrix3(Ad),fromReference:r=>r.applyMatrix3(bd)},[uu]:{transfer:zt,primaries:Ga,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ad),fromReference:r=>r.applyMatrix3(bd).convertLinearToSRGB()}},ay=new Set([dr,Ka]),Pt={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ay.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ca[e].toReference,o=ca[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ca[r].primaries},getTransfer:function(r){return r===or?Ba:ca[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Yp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=ka("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ws(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ly=0;class qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Mc(o[u].image)):a.push(Mc(o[u]))}else a=Mc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Mc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class yn extends Br{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=ai,o=ai,a=Ln,u=Dr,c=li,f=ur,p=yn.DEFAULT_ANISOTROPY,g=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Us(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Np;yn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,p=f[0],g=f[4],_=f[8],v=f[1],x=f[5],y=f[9],w=f[2],m=f[6],d=f[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(y-m)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(y+m)<.1&&Math.abs(p+x+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(p+1)/2,L=(x+1)/2,G=(d+1)/2,B=(g+v)/4,U=(_+w)/4,j=(y+m)/4;return T>L&&T>G?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=B/i,a=U/i):L>G?L<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),i=B/o,a=j/o):G<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(G),i=U/a,o=j/a),this.set(i,o,a,t),this}let P=Math.sqrt((m-y)*(m-y)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(m-y)/P,this.y=(_-w)/P,this.z=(v-g)/P,this.w=Math.acos((p+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new yn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends uy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $p extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fy extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],p=i[o+1],g=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],y=a[u+2],w=a[u+3];if(c===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=y,e[t+3]=w;return}if(_!==w||f!==v||p!==x||g!==y){let m=1-c;const d=f*v+p*x+g*y+_*w,P=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const G=Math.sqrt(T),B=Math.atan2(G,d*P);m=Math.sin(m*B)/G,c=Math.sin(c*B)/G}const L=c*P;if(f=f*m+v*L,p=p*m+x*L,g=g*m+y*L,_=_*m+w*L,m===1-c){const G=1/Math.sqrt(f*f+p*p+g*g+_*_);f*=G,p*=G,g*=G,_*=G}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],p=i[o+2],g=i[o+3],_=a[u],v=a[u+1],x=a[u+2],y=a[u+3];return e[t]=c*y+g*_+f*x-p*v,e[t+1]=f*y+g*v+p*_-c*x,e[t+2]=p*y+g*x+c*v-f*_,e[t+3]=g*y-c*_-f*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,p=c(i/2),g=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),y=f(a/2);switch(u){case"XYZ":this._x=v*g*_+p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_-v*x*y;break;case"YXZ":this._x=v*g*_+p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_+v*x*y;break;case"ZXY":this._x=v*g*_-p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_-v*x*y;break;case"ZYX":this._x=v*g*_-p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_+v*x*y;break;case"YZX":this._x=v*g*_+p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_-v*x*y;break;case"XZY":this._x=v*g*_-p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],p=t[2],g=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-f)*x,this._y=(a-p)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(g-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+p)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+p)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,p=t._z,g=t._w;return this._x=i*g+u*c+o*p-a*f,this._y=o*g+u*f+a*c-i*p,this._z=a*g+u*p+i*f-o*c,this._w=u*g-i*c-o*f-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const p=Math.sqrt(f),g=Math.atan2(p,c),_=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,p=2*(u*o-c*i),g=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*p+u*_-c*g,this.y=i+f*g+c*p-a*_,this.z=o+f*_+a*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new X,wd=new Fr;class zr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(a,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),fa.subVectors(this.max,to),ls.subVectors(e.a,to),cs.subVectors(e.b,to),us.subVectors(e.c,to),Ji.subVectors(cs,ls),Qi.subVectors(us,cs),Tr.subVectors(ls,us);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Tr.z,Tr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Tr.z,0,-Tr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Tr.y,Tr.x,0];return!yc(t,ls,cs,us,fa)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,ls,cs,us,fa))?!1:(ha.crossVectors(Ji,Qi),t=[ha.x,ha.y,ha.z],yc(t,ls,cs,us,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new X,new X,new X,new X,new X,new X,new X,new X],ri=new X,ua=new zr,ls=new X,cs=new X,us=new X,Ji=new X,Qi=new X,Tr=new X,to=new X,fa=new X,ha=new X,br=new X;function yc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){br.fromArray(r,a);const c=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),f=e.dot(br),p=t.dot(br),g=i.dot(br);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>c)return!1}return!0}const hy=new zr,no=new X,Tc=new X;class go{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hy.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(no,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Tc)),this.expandByPoint(no.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new X,bc=new X,da=new X,er=new X,Ac=new X,pa=new X,wc=new X;class Kp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){bc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),er.copy(this.origin).sub(bc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(da),c=er.dot(this.direction),f=-er.dot(da),p=er.lengthSq(),g=Math.abs(1-u*u);let _,v,x,y;if(g>0)if(_=u*f-c,v=u*c-f,y=a*g,_>=0)if(v>=-y)if(v<=y){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+p}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+p;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+p;else v<=-y?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+p):v<=y?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+p):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+p);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(bc).addScaledVector(da,v),x}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),o=Di.dot(Di)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(i=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(i=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(a=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(a=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,o,a){Ac.subVectors(t,e),pa.subVectors(i,e),wc.crossVectors(Ac,pa);let u=this.direction.dot(wc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;er.subVectors(this.origin,e);const f=c*this.direction.dot(pa.crossVectors(er,pa));if(f<0)return null;const p=c*this.direction.dot(Ac.cross(er));if(p<0||f+p>u)return null;const g=-c*er.dot(wc);return g<0?null:this.at(g/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,o,a,u,c,f,p,g,_,v,x,y,w,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,p,g,_,v,x,y,w,m)}set(e,t,i,o,a,u,c,f,p,g,_,v,x,y,w,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=o,d[1]=a,d[5]=u,d[9]=c,d[13]=f,d[2]=p,d[6]=g,d[10]=_,d[14]=v,d[3]=x,d[7]=y,d[11]=w,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),u=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),p=Math.sin(o),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*g,x=u*_,y=c*g,w=c*_;t[0]=f*g,t[4]=-f*_,t[8]=p,t[1]=x+y*p,t[5]=v-w*p,t[9]=-c*f,t[2]=w-v*p,t[6]=y+x*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,x=f*_,y=p*g,w=p*_;t[0]=v+w*c,t[4]=y*c-x,t[8]=u*p,t[1]=u*_,t[5]=u*g,t[9]=-c,t[2]=x*c-y,t[6]=w+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,x=f*_,y=p*g,w=p*_;t[0]=v-w*c,t[4]=-u*_,t[8]=y+x*c,t[1]=x+y*c,t[5]=u*g,t[9]=w-v*c,t[2]=-u*p,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,x=u*_,y=c*g,w=c*_;t[0]=f*g,t[4]=y*p-x,t[8]=v*p+w,t[1]=f*_,t[5]=w*p+v,t[9]=x*p-y,t[2]=-p,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*p,y=c*f,w=c*p;t[0]=f*g,t[4]=w-v*_,t[8]=y*_+x,t[1]=_,t[5]=u*g,t[9]=-c*g,t[2]=-p*g,t[6]=x*_+y,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*f,x=u*p,y=c*f,w=c*p;t[0]=f*g,t[4]=-_,t[8]=p*g,t[1]=v*_+w,t[5]=u*g,t[9]=x*_-y,t[2]=y*_-x,t[6]=c*g,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,py)}lookAt(e,t,i){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(i,Bn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(i,Bn)),tr.normalize(),ma.crossVectors(Bn,tr),o[0]=tr.x,o[4]=ma.x,o[8]=Bn.x,o[1]=tr.y,o[5]=ma.y,o[9]=Bn.y,o[2]=tr.z,o[6]=ma.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],p=i[12],g=i[1],_=i[5],v=i[9],x=i[13],y=i[2],w=i[6],m=i[10],d=i[14],P=i[3],T=i[7],L=i[11],G=i[15],B=o[0],U=o[4],j=o[8],xe=o[12],b=o[1],N=o[5],ge=o[9],he=o[13],O=o[2],J=o[6],ee=o[10],ce=o[14],ie=o[3],ue=o[7],fe=o[11],Se=o[15];return a[0]=u*B+c*b+f*O+p*ie,a[4]=u*U+c*N+f*J+p*ue,a[8]=u*j+c*ge+f*ee+p*fe,a[12]=u*xe+c*he+f*ce+p*Se,a[1]=g*B+_*b+v*O+x*ie,a[5]=g*U+_*N+v*J+x*ue,a[9]=g*j+_*ge+v*ee+x*fe,a[13]=g*xe+_*he+v*ce+x*Se,a[2]=y*B+w*b+m*O+d*ie,a[6]=y*U+w*N+m*J+d*ue,a[10]=y*j+w*ge+m*ee+d*fe,a[14]=y*xe+w*he+m*ce+d*Se,a[3]=P*B+T*b+L*O+G*ie,a[7]=P*U+T*N+L*J+G*ue,a[11]=P*j+T*ge+L*ee+G*fe,a[15]=P*xe+T*he+L*ce+G*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],p=e[13],g=e[2],_=e[6],v=e[10],x=e[14],y=e[3],w=e[7],m=e[11],d=e[15];return y*(+a*f*_-o*p*_-a*c*v+i*p*v+o*c*x-i*f*x)+w*(+t*f*x-t*p*v+a*u*v-o*u*x+o*p*g-a*f*g)+m*(+t*p*_-t*c*x-a*u*_+i*u*x+a*c*g-i*p*g)+d*(-o*c*g-t*f*_+t*c*v+o*u*_-i*u*v+i*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],p=e[7],g=e[8],_=e[9],v=e[10],x=e[11],y=e[12],w=e[13],m=e[14],d=e[15],P=_*m*p-w*v*p+w*f*x-c*m*x-_*f*d+c*v*d,T=y*v*p-g*m*p-y*f*x+u*m*x+g*f*d-u*v*d,L=g*w*p-y*_*p+y*c*x-u*w*x-g*c*d+u*_*d,G=y*_*f-g*w*f-y*c*v+u*w*v+g*c*m-u*_*m,B=t*P+i*T+o*L+a*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=P*U,e[1]=(w*v*a-_*m*a-w*o*x+i*m*x+_*o*d-i*v*d)*U,e[2]=(c*m*a-w*f*a+w*o*p-i*m*p-c*o*d+i*f*d)*U,e[3]=(_*f*a-c*v*a-_*o*p+i*v*p+c*o*x-i*f*x)*U,e[4]=T*U,e[5]=(g*m*a-y*v*a+y*o*x-t*m*x-g*o*d+t*v*d)*U,e[6]=(y*f*a-u*m*a-y*o*p+t*m*p+u*o*d-t*f*d)*U,e[7]=(u*v*a-g*f*a+g*o*p-t*v*p-u*o*x+t*f*x)*U,e[8]=L*U,e[9]=(y*_*a-g*w*a-y*i*x+t*w*x+g*i*d-t*_*d)*U,e[10]=(u*w*a-y*c*a+y*i*p-t*w*p-u*i*d+t*c*d)*U,e[11]=(g*c*a-u*_*a-g*i*p+t*_*p+u*i*x-t*c*x)*U,e[12]=G*U,e[13]=(g*w*o-y*_*o+y*i*v-t*w*v-g*i*m+t*_*m)*U,e[14]=(y*c*o-u*w*o-y*i*f+t*w*f+u*i*m-t*c*m)*U,e[15]=(u*_*o-g*c*o+g*i*f-t*_*f-u*i*v+t*c*v)*U,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,p=a*u,g=a*c;return this.set(p*u+i,p*c-o*f,p*f+o*c,0,p*c+o*f,g*c+i,g*f-o*u,0,p*f-o*c,g*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,p=a+a,g=u+u,_=c+c,v=a*p,x=a*g,y=a*_,w=u*g,m=u*_,d=c*_,P=f*p,T=f*g,L=f*_,G=i.x,B=i.y,U=i.z;return o[0]=(1-(w+d))*G,o[1]=(x+L)*G,o[2]=(y-T)*G,o[3]=0,o[4]=(x-L)*B,o[5]=(1-(v+d))*B,o[6]=(m+P)*B,o[7]=0,o[8]=(y+T)*U,o[9]=(m-P)*U,o[10]=(1-(v+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=fs.set(o[0],o[1],o[2]).length();const u=fs.set(o[4],o[5],o[6]).length(),c=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const p=1/a,g=1/u,_=1/c;return si.elements[0]*=p,si.elements[1]*=p,si.elements[2]*=p,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,t.setFromRotationMatrix(si),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=zi){const f=this.elements,p=2*a/(t-e),g=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,y;if(c===zi)x=-(u+a)/(u-a),y=-2*u*a/(u-a);else if(c===Ha)x=-u/(u-a),y=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=g,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=zi){const f=this.elements,p=1/(t-e),g=1/(i-o),_=1/(u-a),v=(t+e)*p,x=(i+o)*g;let y,w;if(c===zi)y=(u+a)*_,w=-2*_;else if(c===Ha)y=a*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new X,si=new Yt,dy=new X(0,0,0),py=new X(1,1,1),tr=new X,ma=new X,Bn=new X,Rd=new Yt,Cd=new Fr;class Gi{constructor(e=0,t=0,i=0,o=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-mn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const Ld=new X,hs=new Fr,Ui=new Yt,ga=new X,io=new X,gy=new X,_y=new Fr,Pd=new X(1,0,0),Id=new X(0,1,0),Dd=new X(0,0,1),vy={type:"added"},xy={type:"removed"},Rc={type:"childadded",child:null},Cc={type:"childremoved",child:null};class Tn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new X,t=new Gi,i=new Fr,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(io,ga,this.up):Ui.lookAt(ga,io,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(Ui),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vy),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xy),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const _=f[p];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,p=this.material.length;f<p;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),y=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=o,i;function u(c){const f=[];for(const p in c){const g=c[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new X,Ni=new X,Lc=new X,Oi=new X,ds=new X,ps=new X,Ud=new X,Pc=new X,Ic=new X,Dc=new X;class xi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),oi.subVectors(e,t),o.cross(oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){oi.subVectors(o,t),Ni.subVectors(i,t),Lc.subVectors(e,t);const u=oi.dot(oi),c=oi.dot(Ni),f=oi.dot(Lc),p=Ni.dot(Ni),g=Ni.dot(Lc),_=u*p-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(p*f-c*g)*v,y=(u*g-c*f)*v;return a.set(1-x-y,y,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Oi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Oi.x),f.addScaledVector(u,Oi.y),f.addScaledVector(c,Oi.z),f)}static isFrontFacing(e,t,i,o){return oi.subVectors(i,t),Ni.subVectors(e,t),oi.cross(Ni).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ds.subVectors(o,i),ps.subVectors(a,i),Pc.subVectors(e,i);const f=ds.dot(Pc),p=ps.dot(Pc);if(f<=0&&p<=0)return t.copy(i);Ic.subVectors(e,o);const g=ds.dot(Ic),_=ps.dot(Ic);if(g>=0&&_<=g)return t.copy(o);const v=f*_-g*p;if(v<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(i).addScaledVector(ds,u);Dc.subVectors(e,a);const x=ds.dot(Dc),y=ps.dot(Dc);if(y>=0&&x<=y)return t.copy(a);const w=x*p-f*y;if(w<=0&&p>=0&&y<=0)return c=p/(p-y),t.copy(i).addScaledVector(ps,c);const m=g*y-x*_;if(m<=0&&_-g>=0&&x-y>=0)return Ud.subVectors(a,o),c=(_-g)/(_-g+(x-y)),t.copy(o).addScaledVector(Ud,c);const d=1/(m+w+v);return u=w*d,c=v*d,t.copy(i).addScaledVector(ds,u).addScaledVector(ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Pt.workingColorSpace){if(e=fu(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Uc(u,a,e+1/3),this.g=Uc(u,a,e),this.b=Uc(u,a,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=gi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Pt.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,o=pn.g,a=pn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,p;const g=(c+u)/2;if(c===u)f=0,p=0;else{const _=u-c;switch(p=g<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=gi){Pt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,o=pn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(_a);const i=co(nr.h,_a.h,t),o=co(nr.s,_a.s,t),a=co(nr.l,_a.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Tt;Tt.NAMES=jp;let Sy=0;class Za extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=As,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,va=new at;class ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Md&&(e.usage=this.usage),e}}class Jp extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qp extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mi extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let My=0;const Zn=new Yt,Nc=new Tn,ms=new X,zn=new zr,ro=new zr,sn=new X;class pr extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Qp:Jp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];zn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ro.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(zn.min,ro.min),zn.expandByPoint(sn),sn.addVectors(zn.max,ro.max),zn.expandByPoint(sn)):(zn.expandByPoint(ro.min),zn.expandByPoint(ro.max))}zn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)sn.fromBufferAttribute(c,p),f&&(ms.fromBufferAttribute(e,p),sn.add(ms)),o=Math.max(o,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let j=0;j<i.count;j++)c[j]=new X,f[j]=new X;const p=new X,g=new X,_=new X,v=new at,x=new at,y=new at,w=new X,m=new X;function d(j,xe,b){p.fromBufferAttribute(i,j),g.fromBufferAttribute(i,xe),_.fromBufferAttribute(i,b),v.fromBufferAttribute(a,j),x.fromBufferAttribute(a,xe),y.fromBufferAttribute(a,b),g.sub(p),_.sub(p),x.sub(v),y.sub(v);const N=1/(x.x*y.y-y.x*x.y);isFinite(N)&&(w.copy(g).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(N),m.copy(_).multiplyScalar(x.x).addScaledVector(g,-y.x).multiplyScalar(N),c[j].add(w),c[xe].add(w),c[b].add(w),f[j].add(m),f[xe].add(m),f[b].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,xe=P.length;j<xe;++j){const b=P[j],N=b.start,ge=b.count;for(let he=N,O=N+ge;he<O;he+=3)d(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const T=new X,L=new X,G=new X,B=new X;function U(j){G.fromBufferAttribute(o,j),B.copy(G);const xe=c[j];T.copy(xe),T.sub(G.multiplyScalar(G.dot(xe))).normalize(),L.crossVectors(B,xe);const N=L.dot(f[j])<0?-1:1;u.setXYZW(j,T.x,T.y,T.z,N)}for(let j=0,xe=P.length;j<xe;++j){const b=P[j],N=b.start,ge=b.count;for(let he=N,O=N+ge;he<O;he+=3)U(e.getX(he+0)),U(e.getX(he+1)),U(e.getX(he+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,p=new X,g=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const y=e.getX(v+0),w=e.getX(v+1),m=e.getX(v+2);o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,m),g.subVectors(u,a),_.subVectors(o,a),g.cross(_),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,m),c.add(g),f.add(g),p.add(g),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(m,p.x,p.y,p.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,a),_.subVectors(o,a),g.cross(_),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,f){const p=c.array,g=c.itemSize,_=c.normalized,v=new p.constructor(f.length*g);let x=0,y=0;for(let w=0,m=f.length;w<m;w++){c.isInterleavedBufferAttribute?x=f[w]*c.data.stride+c.offset:x=f[w]*g;for(let d=0;d<g;d++)v[y++]=p[x++]}return new ui(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],p=e(f,i);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const f=[],p=a[c];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(e.data))}g.length>0&&(o[f]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],_=a[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nd=new Yt,Ar=new Kp,xa=new go,Od=new X,gs=new X,_s=new X,vs=new X,Oc=new X,Sa=new X,Ma=new at,Ea=new at,ya=new at,Fd=new X,Bd=new X,zd=new X,Ta=new X,ba=new X;class ci extends Tn{constructor(e=new pr,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Sa.set(0,0,0);for(let f=0,p=a.length;f<p;f++){const g=c[f],_=a[f];g!==0&&(Oc.fromBufferAttribute(_,e),u?Sa.addScaledVector(Oc,g):Sa.addScaledVector(Oc.sub(t),g))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(xa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(xa,Od)===null||Ar.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Nd.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(Nd),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],d=u[m.materialIndex],P=Math.max(m.start,x.start),T=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let L=P,G=T;L<G;L+=3){const B=c.getX(L),U=c.getX(L+1),j=c.getX(L+2);o=Aa(this,d,e,i,p,g,_,B,U,j),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let m=y,d=w;m<d;m+=3){const P=c.getX(m),T=c.getX(m+1),L=c.getX(m+2);o=Aa(this,u,e,i,p,g,_,P,T,L),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],d=u[m.materialIndex],P=Math.max(m.start,x.start),T=Math.min(f.count,Math.min(m.start+m.count,x.start+x.count));for(let L=P,G=T;L<G;L+=3){const B=L,U=L+1,j=L+2;o=Aa(this,d,e,i,p,g,_,B,U,j),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let m=y,d=w;m<d;m+=3){const P=m,T=m+1,L=m+2;o=Aa(this,u,e,i,p,g,_,P,T,L),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Ey(r,e,t,i,o,a,u,c){let f;if(e.side===Pn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===fr,c),f===null)return null;ba.copy(c),ba.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(ba);return p<t.near||p>t.far?null:{distance:p,point:ba.clone(),object:r}}function Aa(r,e,t,i,o,a,u,c,f,p){r.getVertexPosition(c,gs),r.getVertexPosition(f,_s),r.getVertexPosition(p,vs);const g=Ey(r,e,t,i,gs,_s,vs,Ta);if(g){o&&(Ma.fromBufferAttribute(o,c),Ea.fromBufferAttribute(o,f),ya.fromBufferAttribute(o,p),g.uv=xi.getInterpolation(Ta,gs,_s,vs,Ma,Ea,ya,new at)),a&&(Ma.fromBufferAttribute(a,c),Ea.fromBufferAttribute(a,f),ya.fromBufferAttribute(a,p),g.uv1=xi.getInterpolation(Ta,gs,_s,vs,Ma,Ea,ya,new at)),u&&(Fd.fromBufferAttribute(u,c),Bd.fromBufferAttribute(u,f),zd.fromBufferAttribute(u,p),g.normal=xi.getInterpolation(Ta,gs,_s,vs,Fd,Bd,zd,new X),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:c,b:f,c:p,normal:new X,materialIndex:0};xi.getNormal(gs,_s,vs,_.normal),g.face=_}return g}class _o extends pr{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],p=[],g=[],_=[];let v=0,x=0;y("z","y","x",-1,-1,i,t,e,u,a,0),y("z","y","x",1,-1,i,t,-e,u,a,1),y("x","z","y",1,1,e,i,t,o,u,2),y("x","z","y",1,-1,e,i,-t,o,u,3),y("x","y","z",1,-1,e,t,i,o,a,4),y("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(_,2));function y(w,m,d,P,T,L,G,B,U,j,xe){const b=L/U,N=G/j,ge=L/2,he=G/2,O=B/2,J=U+1,ee=j+1;let ce=0,ie=0;const ue=new X;for(let fe=0;fe<ee;fe++){const Se=fe*N-he;for(let De=0;De<J;De++){const et=De*b-ge;ue[w]=et*P,ue[m]=Se*T,ue[d]=O,p.push(ue.x,ue.y,ue.z),ue[w]=0,ue[m]=0,ue[d]=B>0?1:-1,g.push(ue.x,ue.y,ue.z),_.push(De/U),_.push(1-fe/j),ce+=1}}for(let fe=0;fe<j;fe++)for(let Se=0;Se<U;Se++){const De=v+Se+J*fe,et=v+Se+J*(fe+1),te=v+(Se+1)+J*(fe+1),pe=v+(Se+1)+J*fe;f.push(De,et,pe),f.push(et,te,pe),ie+=6}c.addGroup(x,ie,xe),x+=ie,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const i=Ps(r[t]);for(const o in i)e[o]=i[o]}return e}function yy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function em(r){return r.getRenderTarget()===null?r.outputColorSpace:Pt.workingColorSpace}const Ty={clone:Ps,merge:Mn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tm extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new X,Gd=new at,Hd=new at;class Gn extends tm{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Hd),t.subVectors(Hd,Gd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/p,o*=u.width/f,i*=u.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class wy extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new Gn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const u=new Gn(xs,Ss,e,t);u.layers=this.layers,this.add(u);const c=new Gn(xs,Ss,e,t);c.layers=this.layers,this.add(c);const f=new Gn(xs,Ss,e,t);f.layers=this.layers,this.add(f);const p=new Gn(xs,Ss,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const p of t)this.remove(p);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,p),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(t,g),e.setRenderTarget(_,v,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class nm extends yn{constructor(e,t,i,o,a,u,c,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,o,a,u,c,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new nm(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _o(5,5,5),a=new hr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:lr});a.uniforms.tEquirect.value=t;const u=new ci(o,a),c=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Ln),new wy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Fc=new X,Cy=new X,Ly=new mt;class sr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Fc.subVectors(i,t).cross(Cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ly.getNormalMatrix(e),o=this.coplanarPoint(Fc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new go,wa=new X;class im{constructor(e=new sr,t=new sr,i=new sr,o=new sr,a=new sr,u=new sr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],p=o[4],g=o[5],_=o[6],v=o[7],x=o[8],y=o[9],w=o[10],m=o[11],d=o[12],P=o[13],T=o[14],L=o[15];if(i[0].setComponents(f-a,v-p,m-x,L-d).normalize(),i[1].setComponents(f+a,v+p,m+x,L+d).normalize(),i[2].setComponents(f+u,v+g,m+y,L+P).normalize(),i[3].setComponents(f-u,v-g,m-y,L-P).normalize(),i[4].setComponents(f-c,v-_,m-w,L-T).normalize(),t===zi)i[5].setComponents(f+c,v+_,m+w,L+T).normalize();else if(t===Ha)i[5].setComponents(c,_,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(wa.x=o.normal.x>0?e.max.x:e.min.x,wa.y=o.normal.y>0?e.max.y:e.min.y,wa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Py(r,e){const t=e.isWebGL2,i=new WeakMap;function o(p,g){const _=p.array,v=p.usage,x=_.byteLength,y=r.createBuffer();r.bindBuffer(g,y),r.bufferData(g,_,v),p.onUploadCallback();let w;if(_ instanceof Float32Array)w=r.FLOAT;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=r.SHORT;else if(_ instanceof Uint32Array)w=r.UNSIGNED_INT;else if(_ instanceof Int32Array)w=r.INT;else if(_ instanceof Int8Array)w=r.BYTE;else if(_ instanceof Uint8Array)w=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:x}}function a(p,g,_){const v=g.array,x=g._updateRange,y=g.updateRanges;if(r.bindBuffer(_,p),x.count===-1&&y.length===0&&r.bufferSubData(_,0,v),y.length!==0){for(let w=0,m=y.length;w<m;w++){const d=y[w];t?r.bufferSubData(_,d.start*v.BYTES_PER_ELEMENT,v,d.start,d.count):r.bufferSubData(_,d.start*v.BYTES_PER_ELEMENT,v.subarray(d.start,d.start+d.count))}g.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),g.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=i.get(p);g&&(r.deleteBuffer(g.buffer),i.delete(p))}function f(p,g){if(p.isGLBufferAttribute){const v=i.get(p);(!v||v.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=i.get(p);if(_===void 0)i.set(p,o(p,g));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,p,g),_.version=p.version}}return{get:u,remove:c,update:f}}class ja extends pr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),p=c+1,g=f+1,_=e/c,v=t/f,x=[],y=[],w=[],m=[];for(let d=0;d<g;d++){const P=d*v-u;for(let T=0;T<p;T++){const L=T*_-a;y.push(L,-P,0),w.push(0,0,1),m.push(T/c),m.push(1-d/f)}}for(let d=0;d<f;d++)for(let P=0;P<c;P++){const T=P+p*d,L=P+p*(d+1),G=P+1+p*(d+1),B=P+1+p*d;x.push(T,L,B),x.push(L,G,B)}this.setIndex(x),this.setAttribute("position",new Mi(y,3)),this.setAttribute("normal",new Mi(w,3)),this.setAttribute("uv",new Mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lT="gl_FragColor = linearToOutputTexel( gl_FragColor );",cT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ST=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,BT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$T=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Iy,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Ny,alphatest_fragment:Oy,alphatest_pars_fragment:Fy,aomap_fragment:By,aomap_pars_fragment:zy,batching_pars_vertex:Gy,batching_vertex:Hy,begin_vertex:Vy,beginnormal_vertex:ky,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Zy,color_fragment:jy,color_pars_fragment:Jy,color_pars_vertex:Qy,color_vertex:eT,common:tT,cube_uv_reflection_fragment:nT,defaultnormal_vertex:iT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:oT,emissivemap_pars_fragment:aT,colorspace_fragment:lT,colorspace_pars_fragment:cT,envmap_fragment:uT,envmap_common_pars_fragment:fT,envmap_pars_fragment:hT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:bT,envmap_vertex:pT,fog_vertex:mT,fog_pars_vertex:gT,fog_fragment:_T,fog_pars_fragment:vT,gradientmap_pars_fragment:xT,lightmap_fragment:ST,lightmap_pars_fragment:MT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:yT,lights_pars_begin:TT,lights_toon_fragment:AT,lights_toon_pars_fragment:wT,lights_phong_fragment:RT,lights_phong_pars_fragment:CT,lights_physical_fragment:LT,lights_physical_pars_fragment:PT,lights_fragment_begin:IT,lights_fragment_maps:DT,lights_fragment_end:UT,logdepthbuf_fragment:NT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:FT,logdepthbuf_vertex:BT,map_fragment:zT,map_pars_fragment:GT,map_particle_fragment:HT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:WT,morphinstance_vertex:XT,morphcolor_vertex:YT,morphnormal_vertex:qT,morphtarget_pars_vertex:$T,morphtarget_vertex:KT,normal_fragment_begin:ZT,normal_fragment_maps:jT,normal_pars_fragment:JT,normal_pars_vertex:QT,normal_vertex:eb,normalmap_pars_fragment:tb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:rb,iridescence_pars_fragment:sb,opaque_fragment:ob,packing:ab,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:ub,dithering_pars_fragment:fb,roughnessmap_fragment:hb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:_b,skinbase_vertex:vb,skinning_pars_vertex:xb,skinning_vertex:Sb,skinnormal_vertex:Mb,specularmap_fragment:Eb,specularmap_pars_fragment:yb,tonemapping_fragment:Tb,tonemapping_pars_fragment:bb,transmission_fragment:Ab,transmission_pars_fragment:wb,uv_pars_fragment:Rb,uv_pars_vertex:Cb,uv_vertex:Lb,worldpos_vertex:Pb,background_vert:Ib,background_frag:Db,backgroundCube_vert:Ub,backgroundCube_frag:Nb,cube_vert:Ob,cube_frag:Fb,depth_vert:Bb,depth_frag:zb,distanceRGBA_vert:Gb,distanceRGBA_frag:Hb,equirect_vert:Vb,equirect_frag:kb,linedashed_vert:Wb,linedashed_frag:Xb,meshbasic_vert:Yb,meshbasic_frag:qb,meshlambert_vert:$b,meshlambert_frag:Kb,meshmatcap_vert:Zb,meshmatcap_frag:jb,meshnormal_vert:Jb,meshnormal_frag:Qb,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:rA,meshtoon_frag:sA,points_vert:oA,points_frag:aA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:fA},Te={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Mn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Mn([Te.lights,Te.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ra={r:0,b:0,g:0},Rr=new Gi,hA=new Yt;function dA(r,e,t,i,o,a,u){const c=new Tt(0);let f=a===!0?0:1,p,g,_=null,v=0,x=null;function y(m,d){let P=!1,T=d.isScene===!0?d.background:null;T&&T.isTexture&&(T=(d.backgroundBlurriness>0?t:e).get(T)),T===null?w(c,f):T&&T.isColor&&(w(T,1),P=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===$a)?(g===void 0&&(g=new ci(new _o(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Ps(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Rr.copy(d.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.material.uniforms.envMap.value=T,g.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hA.makeRotationFromEuler(Rr)),g.material.toneMapped=Pt.getTransfer(T.colorSpace)!==zt,(_!==T||v!==T.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),g.layers.enableAll(),m.unshift(g,g.geometry,g.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new ci(new ja(2,2),new hr({name:"BackgroundMaterial",uniforms:Ps(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||v!==T.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null))}function w(m,d){m.getRGB(Ra,em(r)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,d,u)}return{getClearColor:function(){return c},setClearColor:function(m,d=1){c.set(m),f=d,w(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,w(c,f)},render:y}}function pA(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=m(null);let p=f,g=!1;function _(O,J,ee,ce,ie){let ue=!1;if(u){const fe=w(ce,ee,J);p!==fe&&(p=fe,x(p.object)),ue=d(O,ce,ee,ie),ue&&P(O,ce,ee,ie)}else{const fe=J.wireframe===!0;(p.geometry!==ce.id||p.program!==ee.id||p.wireframe!==fe)&&(p.geometry=ce.id,p.program=ee.id,p.wireframe=fe,ue=!0)}ie!==null&&t.update(ie,r.ELEMENT_ARRAY_BUFFER),(ue||g)&&(g=!1,j(O,J,ee,ce),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(O){return i.isWebGL2?r.bindVertexArray(O):a.bindVertexArrayOES(O)}function y(O){return i.isWebGL2?r.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function w(O,J,ee){const ce=ee.wireframe===!0;let ie=c[O.id];ie===void 0&&(ie={},c[O.id]=ie);let ue=ie[J.id];ue===void 0&&(ue={},ie[J.id]=ue);let fe=ue[ce];return fe===void 0&&(fe=m(v()),ue[ce]=fe),fe}function m(O){const J=[],ee=[],ce=[];for(let ie=0;ie<o;ie++)J[ie]=0,ee[ie]=0,ce[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ee,attributeDivisors:ce,object:O,attributes:{},index:null}}function d(O,J,ee,ce){const ie=p.attributes,ue=J.attributes;let fe=0;const Se=ee.getAttributes();for(const De in Se)if(Se[De].location>=0){const te=ie[De];let pe=ue[De];if(pe===void 0&&(De==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),De==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;fe++}return p.attributesNum!==fe||p.index!==ce}function P(O,J,ee,ce){const ie={},ue=J.attributes;let fe=0;const Se=ee.getAttributes();for(const De in Se)if(Se[De].location>=0){let te=ue[De];te===void 0&&(De==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),De==="instanceColor"&&O.instanceColor&&(te=O.instanceColor));const pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),ie[De]=pe,fe++}p.attributes=ie,p.attributesNum=fe,p.index=ce}function T(){const O=p.newAttributes;for(let J=0,ee=O.length;J<ee;J++)O[J]=0}function L(O){G(O,0)}function G(O,J){const ee=p.newAttributes,ce=p.enabledAttributes,ie=p.attributeDivisors;ee[O]=1,ce[O]===0&&(r.enableVertexAttribArray(O),ce[O]=1),ie[O]!==J&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,J),ie[O]=J)}function B(){const O=p.newAttributes,J=p.enabledAttributes;for(let ee=0,ce=J.length;ee<ce;ee++)J[ee]!==O[ee]&&(r.disableVertexAttribArray(ee),J[ee]=0)}function U(O,J,ee,ce,ie,ue,fe){fe===!0?r.vertexAttribIPointer(O,J,ee,ie,ue):r.vertexAttribPointer(O,J,ee,ce,ie,ue)}function j(O,J,ee,ce){if(i.isWebGL2===!1&&(O.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ie=ce.attributes,ue=ee.getAttributes(),fe=J.defaultAttributeValues;for(const Se in ue){const De=ue[Se];if(De.location>=0){let et=ie[Se];if(et===void 0&&(Se==="instanceMatrix"&&O.instanceMatrix&&(et=O.instanceMatrix),Se==="instanceColor"&&O.instanceColor&&(et=O.instanceColor)),et!==void 0){const te=et.normalized,pe=et.itemSize,Re=t.get(et);if(Re===void 0)continue;const Ze=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,Mt=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||et.gpuType===Op);if(et.isInterleavedBufferAttribute){const ke=et.data,W=ke.stride,Wt=et.offset;if(ke.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)G(De.location+Ue,ke.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)L(De.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<De.locationSize;Ue++)U(De.location+Ue,pe/De.locationSize,Oe,te,W*Ce,(Wt+pe/De.locationSize*Ue)*Ce,Mt)}else{if(et.isInstancedBufferAttribute){for(let ke=0;ke<De.locationSize;ke++)G(De.location+ke,et.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ke=0;ke<De.locationSize;ke++)L(De.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ke=0;ke<De.locationSize;ke++)U(De.location+ke,pe/De.locationSize,Oe,te,pe*Ce,pe/De.locationSize*ke*Ce,Mt)}}else if(fe!==void 0){const te=fe[Se];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(De.location,te);break;case 3:r.vertexAttrib3fv(De.location,te);break;case 4:r.vertexAttrib4fv(De.location,te);break;default:r.vertexAttrib1fv(De.location,te)}}}}B()}function xe(){ge();for(const O in c){const J=c[O];for(const ee in J){const ce=J[ee];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete J[ee]}delete c[O]}}function b(O){if(c[O.id]===void 0)return;const J=c[O.id];for(const ee in J){const ce=J[ee];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete J[ee]}delete c[O.id]}function N(O){for(const J in c){const ee=c[J];if(ee[O.id]===void 0)continue;const ce=ee[O.id];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete ee[O.id]}}function ge(){he(),g=!0,p!==f&&(p=f,x(p.object))}function he(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:ge,resetDefaultState:he,dispose:xe,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:L,disableUnusedAttributes:B}}function mA(r,e,t,i){const o=i.isWebGL2;let a;function u(g){a=g}function c(g,_){r.drawArrays(a,g,_),t.update(_,a,1)}function f(g,_,v){if(v===0)return;let x,y;if(o)x=r,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,g,_,v),t.update(_,a,v)}function p(g,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v;y++)this.render(g[y],_[y]);else{x.multiDrawArraysWEBGL(a,g,0,_,0,v);let y=0;for(let w=0;w<v;w++)y+=_[w];t.update(y,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function gA(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=u||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),w=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,L=u||e.has("OES_texture_float"),G=T&&L,B=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:w,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:P,vertexTextures:T,floatFragmentTextures:L,floatVertexTextures:G,maxSamples:B}}function _A(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new sr,c=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,x){const y=_.clippingPlanes,w=_.clipIntersection,m=_.clipShadows,d=r.get(_);if(!o||y===null||y.length===0||a&&!m)a?g(null):p();else{const P=a?0:i,T=P*4;let L=d.clippingState||null;f.value=L,L=g(y,v,T,x);for(let G=0;G!==T;++G)L[G]=t[G];d.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,v,x,y){const w=_!==null?_.length:0;let m=null;if(w!==0){if(m=f.value,y!==!0||m===null){const d=x+w*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,L=x;T!==w;++T,L+=4)u.copy(_[T]).applyMatrix4(P,c),u.normal.toArray(m,L),m[L+3]=u.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}function vA(r){let e=new WeakMap;function t(u,c){return c===eu?u.mapping=Rs:c===tu&&(u.mapping=Cs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===eu||c===tu)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Ry(f.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class xA extends tm{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,u=a+p*this.view.width,c-=g*this.view.offsetY,f=c-g*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Vd=[.125,.215,.35,.446,.526,.582],Ir=20,Bc=new xA,kd=new Tt;let zc=null,Gc=0,Hc=0;const Lr=(1+Math.sqrt(5))/2,Ms=1/Lr,Wd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Lr,Ms),new X(0,Lr,-Ms),new X(Ms,0,Lr),new X(-Ms,0,Lr),new X(Lr,Ms,0),new X(-Lr,Ms,0)];class Xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){zc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Gc,Hc),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:po,format:li,colorSpace:dr,depthBuffer:!1},o=Yd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SA(a)),this._blurMaterial=MA(a,e,t)}return o}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,Bc)}_sceneToCubeUV(e,t,i,o){const c=new Gn(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(kd),g.toneMapping=cr,g.autoClear=!1;const x=new hu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),y=new ci(new _o,x);let w=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,w=!0):(x.color.copy(kd),w=!0);for(let d=0;d<6;d++){const P=d%3;P===0?(c.up.set(0,f[d],0),c.lookAt(p[d],0,0)):P===1?(c.up.set(0,0,f[d]),c.lookAt(0,p[d],0)):(c.up.set(0,f[d],0),c.lookAt(0,0,p[d]));const T=this._cubeSize;Ca(o,P*T,d>2?T:0,T,T),g.setRenderTarget(o),w&&g.render(y,c),g.render(e,c)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Rs||e.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new ci(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ca(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Bc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Wd[(o-1)%Wd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ci(this._lodPlanes[o],p),v=p.uniforms,x=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ir-1),w=a/y,m=isFinite(a)?1+Math.floor(g*w):Ir;m>Ir&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let P=0;for(let U=0;U<Ir;++U){const j=U/w,xe=Math.exp(-j*j/2);d.push(xe),U===0?P+=xe:U<m&&(P+=2*xe)}for(let U=0;U<d.length;U++)d[U]=d[U]/P;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=d,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:T}=this;v.dTheta.value=y,v.mipInt.value=T-i;const L=this._sizeLods[o],G=3*L*(o>T-Ts?o-T+Ts:0),B=4*(this._cubeSize-L);Ca(t,G,B,3*L,2*L),f.setRenderTarget(t),f.render(_,Bc)}}function SA(r){const e=[],t=[],i=[];let o=r;const a=r-Ts+1+Vd.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-Ts?f=Vd[u-r+Ts-1]:u===0&&(f=0),i.push(f);const p=1/(c-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,y=6,w=3,m=2,d=1,P=new Float32Array(w*y*x),T=new Float32Array(m*y*x),L=new Float32Array(d*y*x);for(let B=0;B<x;B++){const U=B%3*2/3-1,j=B>2?0:-1,xe=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];P.set(xe,w*y*B),T.set(v,m*y*B);const b=[B,B,B,B,B,B];L.set(b,d*y*B)}const G=new pr;G.setAttribute("position",new ui(P,w)),G.setAttribute("uv",new ui(T,m)),G.setAttribute("faceIndex",new ui(L,d)),e.push(G),o>Ts&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yd(r,e,t){const i=new Or(r,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function MA(r,e,t){const i=new Float32Array(Ir),o=new X(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function qd(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function $d(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EA(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,p=f===eu||f===tu,g=f===Rs||f===Cs;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Xd(r)),_=p?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(p&&_&&_.height>0||g&&_&&o(_)){t===null&&(t=new Xd(r));const v=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&f++;return f===p}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function yA(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function TA(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const w=v.morphAttributes[y];for(let m=0,d=w.length;m<d;m++)e.remove(w[m])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const y in x){const w=x[y];for(let m=0,d=w.length;m<d;m++)e.update(w[m],r.ARRAY_BUFFER)}}function p(_){const v=[],x=_.index,y=_.attributes.position;let w=0;if(x!==null){const P=x.array;w=x.version;for(let T=0,L=P.length;T<L;T+=3){const G=P[T+0],B=P[T+1],U=P[T+2];v.push(G,B,B,U,U,G)}}else if(y!==void 0){const P=y.array;w=y.version;for(let T=0,L=P.length/3-1;T<L;T+=3){const G=T+0,B=T+1,U=T+2;v.push(G,B,B,U,U,G)}}else return;const m=new(Xp(v)?Qp:Jp)(v,1);m.version=w;const d=a.get(_);d&&e.remove(d),a.set(_,m)}function g(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:g}}function bA(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function g(x,y){r.drawElements(a,y,c,x*f),t.update(y,a,1)}function _(x,y,w){if(w===0)return;let m,d;if(o)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](a,y,c,x*f,w),t.update(y,a,w)}function v(x,y,w){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<w;d++)this.render(x[d]/f,y[d]);else{m.multiDrawElementsWEBGL(a,y,0,c,x,0,w);let d=0;for(let P=0;P<w;P++)d+=y[P];t.update(d,a,1)}}this.setMode=u,this.setIndex=p,this.render=g,this.renderInstances=_,this.renderMultiDraw=v}function AA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function wA(r,e){return r[0]-e[0]}function RA(r,e){return Math.abs(e[1])-Math.abs(r[1])}function CA(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new cn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function f(p,g,_){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const y=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=y!==void 0?y.length:0;let m=a.get(g);if(m===void 0||m.count!==w){let he=function(){N.dispose(),a.delete(g),g.removeEventListener("dispose",he)};var x=he;m!==void 0&&m.texture.dispose();const d=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,T=g.morphAttributes.color!==void 0,L=g.morphAttributes.position||[],G=g.morphAttributes.normal||[],B=g.morphAttributes.color||[];let U=0;d===!0&&(U=1),P===!0&&(U=2),T===!0&&(U=3);let j=g.attributes.position.count*U,xe=1;j>e.maxTextureSize&&(xe=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const b=new Float32Array(j*xe*4*w),N=new $p(b,j,xe,w);N.type=vi,N.needsUpdate=!0;const ge=U*4;for(let O=0;O<w;O++){const J=L[O],ee=G[O],ce=B[O],ie=j*xe*4*O;for(let ue=0;ue<J.count;ue++){const fe=ue*ge;d===!0&&(u.fromBufferAttribute(J,ue),b[ie+fe+0]=u.x,b[ie+fe+1]=u.y,b[ie+fe+2]=u.z,b[ie+fe+3]=0),P===!0&&(u.fromBufferAttribute(ee,ue),b[ie+fe+4]=u.x,b[ie+fe+5]=u.y,b[ie+fe+6]=u.z,b[ie+fe+7]=0),T===!0&&(u.fromBufferAttribute(ce,ue),b[ie+fe+8]=u.x,b[ie+fe+9]=u.y,b[ie+fe+10]=u.z,b[ie+fe+11]=ce.itemSize===4?u.w:1)}}m={count:w,texture:N,size:new at(j,xe)},a.set(g,m),g.addEventListener("dispose",he)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",p.morphTexture,t);else{let d=0;for(let T=0;T<v.length;T++)d+=v[T];const P=g.morphTargetsRelative?1:1-d;_.getUniforms().setValue(r,"morphTargetBaseInfluence",P),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const y=v===void 0?0:v.length;let w=i[g.id];if(w===void 0||w.length!==y){w=[];for(let L=0;L<y;L++)w[L]=[L,0];i[g.id]=w}for(let L=0;L<y;L++){const G=w[L];G[0]=L,G[1]=v[L]}w.sort(RA);for(let L=0;L<8;L++)L<y&&w[L][1]?(c[L][0]=w[L][0],c[L][1]=w[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(wA);const m=g.morphAttributes.position,d=g.morphAttributes.normal;let P=0;for(let L=0;L<8;L++){const G=c[L],B=G[0],U=G[1];B!==Number.MAX_SAFE_INTEGER&&U?(m&&g.getAttribute("morphTarget"+L)!==m[B]&&g.setAttribute("morphTarget"+L,m[B]),d&&g.getAttribute("morphNormal"+L)!==d[B]&&g.setAttribute("morphNormal"+L,d[B]),o[L]=U,P+=U):(m&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),d&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),o[L]=0)}const T=g.morphTargetsRelative?1:1-P;_.getUniforms().setValue(r,"morphTargetBaseInfluence",T),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function LA(r,e,t,i){let o=new WeakMap;function a(f){const p=i.render.frame,g=f.geometry,_=e.get(f,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function u(){o=new WeakMap}function c(f){const p=f.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:u}}class sm extends yn{constructor(e,t,i,o,a,u,c,f,p,g){if(g=g!==void 0?g:Nr,g!==Nr&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===Nr&&(i=ar),i===void 0&&g===Ls&&(i=Ur),super(null,o,a,u,c,f,g,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=f!==void 0?f:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const om=new yn,am=new sm(1,1);am.compareFunction=Wp;const lm=new $p,cm=new fy,um=new nm,Kd=[],Zd=[],jd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function Ns(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Kd[o];if(a===void 0&&(a=new Float32Array(o),Kd[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ja(r,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function PA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function IA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function DA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function UA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function NA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Qd.set(i),r.uniformMatrix2fv(this.addr,!1,Qd),tn(t,i)}}function OA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Jd.set(i),r.uniformMatrix3fv(this.addr,!1,Jd),tn(t,i)}}function FA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jd.set(i),r.uniformMatrix4fv(this.addr,!1,jd),tn(t,i)}}function BA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function GA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function HA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function VA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function WA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function XA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function YA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?am:om;t.setTexture2D(e||a,o)}function qA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||cm,o)}function $A(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||um,o)}function KA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||lm,o)}function ZA(r){switch(r){case 5126:return PA;case 35664:return IA;case 35665:return DA;case 35666:return UA;case 35674:return NA;case 35675:return OA;case 35676:return FA;case 5124:case 35670:return BA;case 35667:case 35671:return zA;case 35668:case 35672:return GA;case 35669:case 35673:return HA;case 5125:return VA;case 36294:return kA;case 36295:return WA;case 36296:return XA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return KA}}function jA(r,e){r.uniform1fv(this.addr,e)}function JA(r,e){const t=Ns(e,this.size,2);r.uniform2fv(this.addr,t)}function QA(r,e){const t=Ns(e,this.size,3);r.uniform3fv(this.addr,t)}function ew(r,e){const t=Ns(e,this.size,4);r.uniform4fv(this.addr,t)}function tw(r,e){const t=Ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nw(r,e){const t=Ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iw(r,e){const t=Ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rw(r,e){r.uniform1iv(this.addr,e)}function sw(r,e){r.uniform2iv(this.addr,e)}function ow(r,e){r.uniform3iv(this.addr,e)}function aw(r,e){r.uniform4iv(this.addr,e)}function lw(r,e){r.uniform1uiv(this.addr,e)}function cw(r,e){r.uniform2uiv(this.addr,e)}function uw(r,e){r.uniform3uiv(this.addr,e)}function fw(r,e){r.uniform4uiv(this.addr,e)}function hw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||om,a[u])}function dw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||cm,a[u])}function pw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||um,a[u])}function mw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||lm,a[u])}function gw(r){switch(r){case 5126:return jA;case 35664:return JA;case 35665:return QA;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}class _w{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZA(t.type)}}class vw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gw(t.type)}}class xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function ep(r,e){r.seq.push(e),r.map[e.id]=e}function Sw(r,e,t){const i=r.name,o=i.length;for(Vc.lastIndex=0;;){const a=Vc.exec(i),u=Vc.lastIndex;let c=a[1];const f=a[2]==="]",p=a[3];if(f&&(c=c|0),p===void 0||p==="["&&u+2===o){ep(t,p===void 0?new _w(c,r,e):new vw(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new xw(c),ep(t,_)),t=_}}}class Na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Sw(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function tp(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Mw=37297;let Ew=0;function yw(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function Tw(r){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(r);let i;switch(e===t?i="":e===Ga&&t===za?i="LinearDisplayP3ToLinearSRGB":e===za&&t===Ga&&(i="LinearSRGBToLinearDisplayP3"),r){case dr:case Ka:return[i,"LinearTransferOETF"];case gi:case uu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function np(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+yw(r.getShaderSource(e),u)}else return o}function bw(r,e){const t=Tw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Aw(r,e){let t;switch(e){case xE:t="Linear";break;case SE:t="Reinhard";break;case ME:t="OptimizedCineon";break;case EE:t="ACESFilmic";break;case TE:t="AgX";break;case bE:t="Neutral";break;case yE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ww(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function Rw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Cw(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Lw(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function bs(r){return r!==""}function ip(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(Pw,Dw)}const Iw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dw(r,e){let t=pt[e];if(t===void 0){const i=Iw.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(r){return r.replace(Uw,Nw)}function Nw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function op(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ow(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Fw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case _E:e="ENVMAP_BLENDING_MIX";break;case vE:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=Ow(t),p=Fw(t),g=Bw(t),_=zw(t),v=Gw(t),x=t.isWebGL2?"":ww(t),y=Rw(t),w=Cw(a),m=o.createProgram();let d,P,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),d.length>0&&(d+=`
`),P=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),P.length>0&&(P+=`
`)):(d=[op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),P=[x,op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?pt.tonemapping_pars_fragment:"",t.toneMapping!==cr?Aw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,bw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),u=ou(u),u=ip(u,t),u=rp(u,t),c=ou(c),c=ip(c,t),c=rp(c,t),u=sp(u),c=sp(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const L=T+d+u,G=T+P+c,B=tp(o,o.VERTEX_SHADER,L),U=tp(o,o.FRAGMENT_SHADER,G);o.attachShader(m,B),o.attachShader(m,U),t.index0AttributeName!==void 0?o.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function j(ge){if(r.debug.checkShaderErrors){const he=o.getProgramInfoLog(m).trim(),O=o.getShaderInfoLog(B).trim(),J=o.getShaderInfoLog(U).trim();let ee=!0,ce=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,m,B,U);else{const ie=np(o,B,"vertex"),ue=np(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+ge.name+`
Material Type: `+ge.type+`

Program Info Log: `+he+`
`+ie+`
`+ue)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(O===""||J==="")&&(ce=!1);ce&&(ge.diagnostics={runnable:ee,programLog:he,vertexShader:{log:O,prefix:d},fragmentShader:{log:J,prefix:P}})}o.deleteShader(B),o.deleteShader(U),xe=new Na(o,m),b=Lw(o,m)}let xe;this.getUniforms=function(){return xe===void 0&&j(this),xe};let b;this.getAttributes=function(){return b===void 0&&j(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(m,Mw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=B,this.fragmentShader=U,this}let Vw=0;class kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ww(e),t.set(e,i)),i}}class Ww{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function Xw(r,e,t,i,o,a,u){const c=new Zp,f=new kw,p=new Set,g=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return p.add(b),b===0?"uv":`uv${b}`}function d(b,N,ge,he,O){const J=he.fog,ee=O.geometry,ce=b.isMeshStandardMaterial?he.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),ue=ie&&ie.mapping===$a?ie.image.height:null,fe=w[b.type];b.precision!==null&&(y=o.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,De=Se!==void 0?Se.length:0;let et=0;ee.morphAttributes.position!==void 0&&(et=1),ee.morphAttributes.normal!==void 0&&(et=2),ee.morphAttributes.color!==void 0&&(et=3);let te,pe,Re,Ze;if(fe){const yt=_i[fe];te=yt.vertexShader,pe=yt.fragmentShader}else te=b.vertexShader,pe=b.fragmentShader,f.update(b),Re=f.getVertexShaderID(b),Ze=f.getFragmentShaderID(b);const Oe=r.getRenderTarget(),Ce=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,ke=!!b.map,W=!!b.matcap,Wt=!!ie,Ue=!!b.aoMap,je=!!b.lightMap,Ve=!!b.bumpMap,Qe=!!b.normalMap,tt=!!b.displacementMap,lt=!!b.emissiveMap,bt=!!b.metalnessMap,C=!!b.roughnessMap,M=b.anisotropy>0,ne=b.clearcoat>0,oe=b.iridescence>0,_e=b.sheen>0,me=b.transmission>0,Ke=M&&!!b.anisotropyMap,He=ne&&!!b.clearcoatMap,ye=ne&&!!b.clearcoatNormalMap,be=ne&&!!b.clearcoatRoughnessMap,Je=oe&&!!b.iridescenceMap,Ee=oe&&!!b.iridescenceThicknessMap,Nt=_e&&!!b.sheenColorMap,rt=_e&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Pe=!!b.specularColorMap,Fe=!!b.specularIntensityMap,I=me&&!!b.transmissionMap,le=me&&!!b.thicknessMap,Ne=!!b.gradientMap,F=!!b.alphaMap,Me=b.alphaTest>0,Y=!!b.alphaHash,ve=!!b.extensions;let we=cr;b.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const ht={isWebGL2:_,shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:pe,defines:b.defines,customVertexShaderID:Re,customFragmentShaderID:Ze,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Mt,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:dr,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:W,envMap:Wt,envMapMode:Wt&&ie.mapping,envMapCubeUVHeight:ue,aoMap:Ue,lightMap:je,bumpMap:Ve,normalMap:Qe,displacementMap:x&&tt,emissiveMap:lt,normalMapObjectSpace:Qe&&b.normalMapType===OE,normalMapTangentSpace:Qe&&b.normalMapType===NE,metalnessMap:bt,roughnessMap:C,anisotropy:M,anisotropyMap:Ke,clearcoat:ne,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,iridescence:oe,iridescenceMap:Je,iridescenceThicknessMap:Ee,sheen:_e,sheenColorMap:Nt,sheenRoughnessMap:rt,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:Fe,transmission:me,transmissionMap:I,thicknessMap:le,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===As&&b.alphaToCoverage===!1,alphaMap:F,alphaTest:Me,alphaHash:Y,combine:b.combine,mapUv:ke&&m(b.map.channel),aoMapUv:Ue&&m(b.aoMap.channel),lightMapUv:je&&m(b.lightMap.channel),bumpMapUv:Ve&&m(b.bumpMap.channel),normalMapUv:Qe&&m(b.normalMap.channel),displacementMapUv:tt&&m(b.displacementMap.channel),emissiveMapUv:lt&&m(b.emissiveMap.channel),metalnessMapUv:bt&&m(b.metalnessMap.channel),roughnessMapUv:C&&m(b.roughnessMap.channel),anisotropyMapUv:Ke&&m(b.anisotropyMap.channel),clearcoatMapUv:He&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&m(b.sheenRoughnessMap.channel),specularMapUv:Ge&&m(b.specularMap.channel),specularColorMapUv:Pe&&m(b.specularColorMap.channel),specularIntensityMapUv:Fe&&m(b.specularIntensityMap.channel),transmissionMapUv:I&&m(b.transmissionMap.channel),thicknessMapUv:le&&m(b.thicknessMap.channel),alphaMapUv:F&&m(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Qe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ee.attributes.uv&&(ke||F),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:O.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&ge.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ve&&b.extensions.derivatives===!0,extensionFragDepth:ve&&b.extensions.fragDepth===!0,extensionDrawBuffers:ve&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=p.has(1),ht.vertexUv2s=p.has(2),ht.vertexUv3s=p.has(3),p.clear(),ht}function P(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ge in b.defines)N.push(ge),N.push(b.defines[ge]);return b.isRawShaderMaterial===!1&&(T(N,b),L(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function T(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function L(b,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.instancingMorph&&c.enable(4),N.matcap&&c.enable(5),N.envMap&&c.enable(6),N.normalMapObjectSpace&&c.enable(7),N.normalMapTangentSpace&&c.enable(8),N.clearcoat&&c.enable(9),N.iridescence&&c.enable(10),N.alphaTest&&c.enable(11),N.vertexColors&&c.enable(12),N.vertexAlphas&&c.enable(13),N.vertexUv1s&&c.enable(14),N.vertexUv2s&&c.enable(15),N.vertexUv3s&&c.enable(16),N.vertexTangents&&c.enable(17),N.anisotropy&&c.enable(18),N.alphaHash&&c.enable(19),N.batching&&c.enable(20),b.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.alphaToCoverage&&c.enable(20),b.push(c.mask)}function G(b){const N=w[b.type];let ge;if(N){const he=_i[N];ge=Ty.clone(he.uniforms)}else ge=b.uniforms;return ge}function B(b,N){let ge;for(let he=0,O=g.length;he<O;he++){const J=g[he];if(J.cacheKey===N){ge=J,++ge.usedTimes;break}}return ge===void 0&&(ge=new Hw(r,N,b,a),g.push(ge)),ge}function U(b){if(--b.usedTimes===0){const N=g.indexOf(b);g[N]=g[g.length-1],g.pop(),b.destroy()}}function j(b){f.remove(b)}function xe(){f.dispose()}return{getParameters:d,getProgramCacheKey:P,getUniforms:G,acquireProgram:B,releaseProgram:U,releaseShaderCache:j,programs:g,dispose:xe}}function Yw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function qw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ap(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lp(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,y,w,m){let d=r[e];return d===void 0?(d={id:_.id,object:_,geometry:v,material:x,groupOrder:y,renderOrder:_.renderOrder,z:w,group:m},r[e]=d):(d.id=_.id,d.object=_,d.geometry=v,d.material=x,d.groupOrder=y,d.renderOrder=_.renderOrder,d.z=w,d.group=m),e++,d}function c(_,v,x,y,w,m){const d=u(_,v,x,y,w,m);x.transmission>0?i.push(d):x.transparent===!0?o.push(d):t.push(d)}function f(_,v,x,y,w,m){const d=u(_,v,x,y,w,m);x.transmission>0?i.unshift(d):x.transparent===!0?o.unshift(d):t.unshift(d)}function p(_,v){t.length>1&&t.sort(_||qw),i.length>1&&i.sort(v||ap),o.length>1&&o.sort(v||ap)}function g(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:g,sort:p}}function $w(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new lp,r.set(i,[u])):o>=a.length?(u=new lp,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Tt};break;case"SpotLight":t={position:new X,direction:new X,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Zw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jw=0;function Jw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qw(r,e){const t=new Kw,i=Zw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)o.probe.push(new X);const a=new X,u=new Yt,c=new Yt;function f(g,_){let v=0,x=0,y=0;for(let ge=0;ge<9;ge++)o.probe[ge].set(0,0,0);let w=0,m=0,d=0,P=0,T=0,L=0,G=0,B=0,U=0,j=0,xe=0;g.sort(Jw);const b=_===!0?Math.PI:1;for(let ge=0,he=g.length;ge<he;ge++){const O=g[ge],J=O.color,ee=O.intensity,ce=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)v+=J.r*ee*b,x+=J.g*ee*b,y+=J.b*ee*b;else if(O.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(O.sh.coefficients[ue],ee);xe++}else if(O.isDirectionalLight){const ue=t.get(O);if(ue.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const fe=O.shadow,Se=i.get(O);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,o.directionalShadow[w]=Se,o.directionalShadowMap[w]=ie,o.directionalShadowMatrix[w]=O.shadow.matrix,L++}o.directional[w]=ue,w++}else if(O.isSpotLight){const ue=t.get(O);ue.position.setFromMatrixPosition(O.matrixWorld),ue.color.copy(J).multiplyScalar(ee*b),ue.distance=ce,ue.coneCos=Math.cos(O.angle),ue.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ue.decay=O.decay,o.spot[d]=ue;const fe=O.shadow;if(O.map&&(o.spotLightMap[U]=O.map,U++,fe.updateMatrices(O),O.castShadow&&j++),o.spotLightMatrix[d]=fe.matrix,O.castShadow){const Se=i.get(O);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,o.spotShadow[d]=Se,o.spotShadowMap[d]=ie,B++}d++}else if(O.isRectAreaLight){const ue=t.get(O);ue.color.copy(J).multiplyScalar(ee),ue.halfWidth.set(O.width*.5,0,0),ue.halfHeight.set(0,O.height*.5,0),o.rectArea[P]=ue,P++}else if(O.isPointLight){const ue=t.get(O);if(ue.color.copy(O.color).multiplyScalar(O.intensity*b),ue.distance=O.distance,ue.decay=O.decay,O.castShadow){const fe=O.shadow,Se=i.get(O);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,Se.shadowCameraNear=fe.camera.near,Se.shadowCameraFar=fe.camera.far,o.pointShadow[m]=Se,o.pointShadowMap[m]=ie,o.pointShadowMatrix[m]=O.shadow.matrix,G++}o.point[m]=ue,m++}else if(O.isHemisphereLight){const ue=t.get(O);ue.skyColor.copy(O.color).multiplyScalar(ee*b),ue.groundColor.copy(O.groundColor).multiplyScalar(ee*b),o.hemi[T]=ue,T++}}P>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=y;const N=o.hash;(N.directionalLength!==w||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==P||N.hemiLength!==T||N.numDirectionalShadows!==L||N.numPointShadows!==G||N.numSpotShadows!==B||N.numSpotMaps!==U||N.numLightProbes!==xe)&&(o.directional.length=w,o.spot.length=d,o.rectArea.length=P,o.point.length=m,o.hemi.length=T,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=B,o.spotShadowMap.length=B,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=G,o.spotLightMatrix.length=B+U-j,o.spotLightMap.length=U,o.numSpotLightShadowsWithMaps=j,o.numLightProbes=xe,N.directionalLength=w,N.pointLength=m,N.spotLength=d,N.rectAreaLength=P,N.hemiLength=T,N.numDirectionalShadows=L,N.numPointShadows=G,N.numSpotShadows=B,N.numSpotMaps=U,N.numLightProbes=xe,o.version=jw++)}function p(g,_){let v=0,x=0,y=0,w=0,m=0;const d=_.matrixWorldInverse;for(let P=0,T=g.length;P<T;P++){const L=g[P];if(L.isDirectionalLight){const G=o.directional[v];G.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(d),v++}else if(L.isSpotLight){const G=o.spot[y];G.position.setFromMatrixPosition(L.matrixWorld),G.position.applyMatrix4(d),G.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(d),y++}else if(L.isRectAreaLight){const G=o.rectArea[w];G.position.setFromMatrixPosition(L.matrixWorld),G.position.applyMatrix4(d),c.identity(),u.copy(L.matrixWorld),u.premultiply(d),c.extractRotation(u),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),G.halfWidth.applyMatrix4(c),G.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const G=o.point[x];G.position.setFromMatrixPosition(L.matrixWorld),G.position.applyMatrix4(d),x++}else if(L.isHemisphereLight){const G=o.hemi[m];G.direction.setFromMatrixPosition(L.matrixWorld),G.direction.transformDirection(d),m++}}}return{setup:f,setupView:p,state:o}}function cp(r,e){const t=new Qw(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function p(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function eR(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new cp(r,e),t.set(a,[f])):u>=c.length?(f=new cp(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class tR extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nR extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sR(r,e,t){let i=new im;const o=new at,a=new at,u=new cn,c=new tR({depthPacking:UE}),f=new nR,p={},g=t.maxTextureSize,_={[fr]:Pn,[Pn]:fr,[Bi]:Bi},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:iR,fragmentShader:rR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new pr;y.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ci(y,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let d=this.type;this.render=function(B,U,j){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;const xe=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),ge=r.state;ge.setBlending(lr),ge.buffers.color.setClear(1,1,1,1),ge.buffers.depth.setTest(!0),ge.setScissorTest(!1);const he=d!==Fi&&this.type===Fi,O=d===Fi&&this.type!==Fi;for(let J=0,ee=B.length;J<ee;J++){const ce=B[J],ie=ce.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const ue=ie.getFrameExtents();if(o.multiply(ue),a.copy(ie.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/ue.x),o.x=a.x*ue.x,ie.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/ue.y),o.y=a.y*ue.y,ie.mapSize.y=a.y)),ie.map===null||he===!0||O===!0){const Se=this.type!==Fi?{minFilter:ln,magFilter:ln}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Or(o.x,o.y,Se),ie.map.texture.name=ce.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();const fe=ie.getViewportCount();for(let Se=0;Se<fe;Se++){const De=ie.getViewport(Se);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),ge.viewport(u),ie.updateMatrices(ce,Se),i=ie.getFrustum(),L(U,j,ie.camera,ce,this.type)}ie.isPointLightShadow!==!0&&this.type===Fi&&P(ie,j),ie.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(xe,b,N)};function P(B,U){const j=e.update(w);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Or(o.x,o.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(U,null,j,v,w,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(U,null,j,x,w,null)}function T(B,U,j,xe){let b=null;const N=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)b=N;else if(b=j.isPointLight===!0?f:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ge=b.uuid,he=U.uuid;let O=p[ge];O===void 0&&(O={},p[ge]=O);let J=O[he];J===void 0&&(J=b.clone(),O[he]=J,U.addEventListener("dispose",G)),b=J}if(b.visible=U.visible,b.wireframe=U.wireframe,xe===Fi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:_[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ge=r.properties.get(b);ge.light=j}return b}function L(B,U,j,xe,b){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&b===Fi)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const he=e.update(B),O=B.material;if(Array.isArray(O)){const J=he.groups;for(let ee=0,ce=J.length;ee<ce;ee++){const ie=J[ee],ue=O[ie.materialIndex];if(ue&&ue.visible){const fe=T(B,ue,xe,b);B.onBeforeShadow(r,B,U,j,he,fe,ie),r.renderBufferDirect(j,null,he,fe,B,ie),B.onAfterShadow(r,B,U,j,he,fe,ie)}}}else if(O.visible){const J=T(B,O,xe,b);B.onBeforeShadow(r,B,U,j,he,J,null),r.renderBufferDirect(j,null,he,J,B,null),B.onAfterShadow(r,B,U,j,he,J,null)}}const ge=B.children;for(let he=0,O=ge.length;he<O;he++)L(ge[he],U,j,xe,b)}function G(B){B.target.removeEventListener("dispose",G);for(const j in p){const xe=p[j],b=B.target.uuid;b in xe&&(xe[b].dispose(),delete xe[b])}}}function oR(r,e,t){const i=t.isWebGL2;function o(){let F=!1;const Me=new cn;let Y=null;const ve=new cn(0,0,0,0);return{setMask:function(we){Y!==we&&!F&&(r.colorMask(we,we,we,we),Y=we)},setLocked:function(we){F=we},setClear:function(we,ht,yt,Rt,Gt){Gt===!0&&(we*=Rt,ht*=Rt,yt*=Rt),Me.set(we,ht,yt,Rt),ve.equals(Me)===!1&&(r.clearColor(we,ht,yt,Rt),ve.copy(Me))},reset:function(){F=!1,Y=null,ve.set(-1,0,0,0)}}}function a(){let F=!1,Me=null,Y=null,ve=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!F&&(r.depthMask(we),Me=we)},setFunc:function(we){if(Y!==we){switch(we){case uE:r.depthFunc(r.NEVER);break;case fE:r.depthFunc(r.ALWAYS);break;case hE:r.depthFunc(r.LESS);break;case Fa:r.depthFunc(r.LEQUAL);break;case dE:r.depthFunc(r.EQUAL);break;case pE:r.depthFunc(r.GEQUAL);break;case mE:r.depthFunc(r.GREATER);break;case gE:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=we}},setLocked:function(we){F=we},setClear:function(we){ve!==we&&(r.clearDepth(we),ve=we)},reset:function(){F=!1,Me=null,Y=null,ve=null}}}function u(){let F=!1,Me=null,Y=null,ve=null,we=null,ht=null,yt=null,Rt=null,Gt=null;return{setTest:function(Et){F||(Et?Ce(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Et){Me!==Et&&!F&&(r.stencilMask(Et),Me=Et)},setFunc:function(Et,Ct,nn){(Y!==Et||ve!==Ct||we!==nn)&&(r.stencilFunc(Et,Ct,nn),Y=Et,ve=Ct,we=nn)},setOp:function(Et,Ct,nn){(ht!==Et||yt!==Ct||Rt!==nn)&&(r.stencilOp(Et,Ct,nn),ht=Et,yt=Ct,Rt=nn)},setLocked:function(Et){F=Et},setClear:function(Et){Gt!==Et&&(r.clearStencil(Et),Gt=Et)},reset:function(){F=!1,Me=null,Y=null,ve=null,we=null,ht=null,yt=null,Rt=null,Gt=null}}}const c=new o,f=new a,p=new u,g=new WeakMap,_=new WeakMap;let v={},x={},y=new WeakMap,w=[],m=null,d=!1,P=null,T=null,L=null,G=null,B=null,U=null,j=null,xe=new Tt(0,0,0),b=0,N=!1,ge=null,he=null,O=null,J=null,ee=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ue=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ie=ue>=1):fe.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ie=ue>=2);let Se=null,De={};const et=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),pe=new cn().fromArray(et),Re=new cn().fromArray(te);function Ze(F,Me,Y,ve){const we=new Uint8Array(4),ht=r.createTexture();r.bindTexture(F,ht),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<Y;yt++)i&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Me+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ht}const Oe={};Oe[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Fa),tt(!1),lt(Vh),Ce(r.CULL_FACE),Ve(lr);function Ce(F){v[F]!==!0&&(r.enable(F),v[F]=!0)}function Mt(F){v[F]!==!1&&(r.disable(F),v[F]=!1)}function ke(F,Me){return x[F]!==Me?(r.bindFramebuffer(F,Me),x[F]=Me,i&&(F===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Me),F===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function W(F,Me){let Y=w,ve=!1;if(F){Y=y.get(Me),Y===void 0&&(Y=[],y.set(Me,Y));const we=F.textures;if(Y.length!==we.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,yt=we.length;ht<yt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=we.length,ve=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ve=!0);if(ve)if(t.isWebGL2)r.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Ue={[Pr]:r.FUNC_ADD,[KM]:r.FUNC_SUBTRACT,[ZM]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[Yh]=r.MIN,Ue[qh]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ue[Yh]=F.MIN_EXT,Ue[qh]=F.MAX_EXT)}const je={[jM]:r.ZERO,[JM]:r.ONE,[QM]:r.SRC_COLOR,[Jc]:r.SRC_ALPHA,[sE]:r.SRC_ALPHA_SATURATE,[iE]:r.DST_COLOR,[tE]:r.DST_ALPHA,[eE]:r.ONE_MINUS_SRC_COLOR,[Qc]:r.ONE_MINUS_SRC_ALPHA,[rE]:r.ONE_MINUS_DST_COLOR,[nE]:r.ONE_MINUS_DST_ALPHA,[oE]:r.CONSTANT_COLOR,[aE]:r.ONE_MINUS_CONSTANT_COLOR,[lE]:r.CONSTANT_ALPHA,[cE]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,Me,Y,ve,we,ht,yt,Rt,Gt,Et){if(F===lr){d===!0&&(Mt(r.BLEND),d=!1);return}if(d===!1&&(Ce(r.BLEND),d=!0),F!==$M){if(F!==P||Et!==N){if((T!==Pr||B!==Pr)&&(r.blendEquation(r.FUNC_ADD),T=Pr,B=Pr),Et)switch(F){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kh:r.blendFunc(r.ONE,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}L=null,G=null,U=null,j=null,xe.set(0,0,0),b=0,P=F,N=Et}return}we=we||Me,ht=ht||Y,yt=yt||ve,(Me!==T||we!==B)&&(r.blendEquationSeparate(Ue[Me],Ue[we]),T=Me,B=we),(Y!==L||ve!==G||ht!==U||yt!==j)&&(r.blendFuncSeparate(je[Y],je[ve],je[ht],je[yt]),L=Y,G=ve,U=ht,j=yt),(Rt.equals(xe)===!1||Gt!==b)&&(r.blendColor(Rt.r,Rt.g,Rt.b,Gt),xe.copy(Rt),b=Gt),P=F,N=!1}function Qe(F,Me){F.side===Bi?Mt(r.CULL_FACE):Ce(r.CULL_FACE);let Y=F.side===Pn;Me&&(Y=!Y),tt(Y),F.blending===As&&F.transparent===!1?Ve(lr):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),f.setFunc(F.depthFunc),f.setTest(F.depthTest),f.setMask(F.depthWrite),c.setMask(F.colorWrite);const ve=F.stencilWrite;p.setTest(ve),ve&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),C(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){ge!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),ge=F)}function lt(F){F!==XM?(Ce(r.CULL_FACE),F!==he&&(F===Vh?r.cullFace(r.BACK):F===YM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),he=F}function bt(F){F!==O&&(ie&&r.lineWidth(F),O=F)}function C(F,Me,Y){F?(Ce(r.POLYGON_OFFSET_FILL),(J!==Me||ee!==Y)&&(r.polygonOffset(Me,Y),J=Me,ee=Y)):Mt(r.POLYGON_OFFSET_FILL)}function M(F){F?Ce(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ne(F){F===void 0&&(F=r.TEXTURE0+ce-1),Se!==F&&(r.activeTexture(F),Se=F)}function oe(F,Me,Y){Y===void 0&&(Se===null?Y=r.TEXTURE0+ce-1:Y=Se);let ve=De[Y];ve===void 0&&(ve={type:void 0,texture:void 0},De[Y]=ve),(ve.type!==F||ve.texture!==Me)&&(Se!==Y&&(r.activeTexture(Y),Se=Y),r.bindTexture(F,Me||Oe[F]),ve.type=F,ve.texture=Me)}function _e(){const F=De[Se];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){pe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function Fe(F){Re.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Re.copy(F))}function I(F,Me){let Y=_.get(Me);Y===void 0&&(Y=new WeakMap,_.set(Me,Y));let ve=Y.get(F);ve===void 0&&(ve=r.getUniformBlockIndex(Me,F.name),Y.set(F,ve))}function le(F,Me){const ve=_.get(Me).get(F);g.get(Me)!==ve&&(r.uniformBlockBinding(Me,ve,F.__bindingPointIndex),g.set(Me,ve))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,De={},x={},y=new WeakMap,w=[],m=null,d=!1,P=null,T=null,L=null,G=null,B=null,U=null,j=null,xe=new Tt(0,0,0),b=0,N=!1,ge=null,he=null,O=null,J=null,ee=null,pe.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ce,disable:Mt,bindFramebuffer:ke,drawBuffers:W,useProgram:Wt,setBlending:Ve,setMaterial:Qe,setFlipSided:tt,setCullFace:lt,setLineWidth:bt,setPolygonOffset:C,setScissorTest:M,activeTexture:ne,bindTexture:oe,unbindTexture:_e,compressedTexImage2D:me,compressedTexImage3D:Ke,texImage2D:rt,texImage3D:Ge,updateUBOMapping:I,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Je,scissor:Pe,viewport:Fe,reset:Ne}}function aR(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new at,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,M){return y?new OffscreenCanvas(C,M):ka("canvas")}function m(C,M,ne,oe){let _e=1;const me=bt(C);if((me.width>oe||me.height>oe)&&(_e=oe/Math.max(me.width,me.height)),_e<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ke=M?Va:Math.floor,He=Ke(_e*me.width),ye=Ke(_e*me.height);v===void 0&&(v=w(He,ye));const be=ne?w(He,ye):v;return be.width=He,be.height=ye,be.getContext("2d").drawImage(C,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+He+"x"+ye+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),C;return C}function d(C){const M=bt(C);return su(M.width)&&su(M.height)}function P(C){return c?!1:C.wrapS!==ai||C.wrapT!==ai||C.minFilter!==ln&&C.minFilter!==Ln}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==ln&&C.minFilter!==Ln}function L(C){r.generateMipmap(C)}function G(C,M,ne,oe,_e=!1){if(c===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me=M;if(M===r.RED&&(ne===r.FLOAT&&(me=r.R32F),ne===r.HALF_FLOAT&&(me=r.R16F),ne===r.UNSIGNED_BYTE&&(me=r.R8)),M===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.R8UI),ne===r.UNSIGNED_SHORT&&(me=r.R16UI),ne===r.UNSIGNED_INT&&(me=r.R32UI),ne===r.BYTE&&(me=r.R8I),ne===r.SHORT&&(me=r.R16I),ne===r.INT&&(me=r.R32I)),M===r.RG&&(ne===r.FLOAT&&(me=r.RG32F),ne===r.HALF_FLOAT&&(me=r.RG16F),ne===r.UNSIGNED_BYTE&&(me=r.RG8)),M===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.RG8UI),ne===r.UNSIGNED_SHORT&&(me=r.RG16UI),ne===r.UNSIGNED_INT&&(me=r.RG32UI),ne===r.BYTE&&(me=r.RG8I),ne===r.SHORT&&(me=r.RG16I),ne===r.INT&&(me=r.RG32I)),M===r.RGBA){const Ke=_e?Ba:Pt.getTransfer(oe);ne===r.FLOAT&&(me=r.RGBA32F),ne===r.HALF_FLOAT&&(me=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(me=Ke===zt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function B(C,M,ne){return T(C,ne)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function U(C){return C===ln||C===$h||C===eo?r.NEAREST:r.LINEAR}function j(C){const M=C.target;M.removeEventListener("dispose",j),b(M),M.isVideoTexture&&_.delete(M)}function xe(C){const M=C.target;M.removeEventListener("dispose",xe),ge(M)}function b(C){const M=i.get(C);if(M.__webglInit===void 0)return;const ne=C.source,oe=x.get(ne);if(oe){const _e=oe[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&N(C),Object.keys(oe).length===0&&x.delete(ne)}i.remove(C)}function N(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const ne=C.source,oe=x.get(ne);delete oe[M.__cacheKey],u.memory.textures--}function ge(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let _e=0;_e<M.__webglFramebuffer[oe].length;_e++)r.deleteFramebuffer(M.__webglFramebuffer[oe][_e]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ne=C.textures;for(let oe=0,_e=ne.length;oe<_e;oe++){const me=i.get(ne[oe]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),u.memory.textures--),i.remove(ne[oe])}i.remove(C)}let he=0;function O(){he=0}function J(){const C=he;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),he+=1,C}function ee(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ce(C,M){const ne=i.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&ne.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ne,C,M);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+M)}function ie(C,M){const ne=i.get(C);if(C.version>0&&ne.__version!==C.version){Re(ne,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+M)}function ue(C,M){const ne=i.get(C);if(C.version>0&&ne.__version!==C.version){Re(ne,C,M);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+M)}function fe(C,M){const ne=i.get(C);if(C.version>0&&ne.__version!==C.version){Ze(ne,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+M)}const Se={[nu]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[iu]:r.MIRRORED_REPEAT},De={[ln]:r.NEAREST,[$h]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[dc]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},et={[FE]:r.NEVER,[kE]:r.ALWAYS,[BE]:r.LESS,[Wp]:r.LEQUAL,[zE]:r.EQUAL,[VE]:r.GEQUAL,[GE]:r.GREATER,[HE]:r.NOTEQUAL};function te(C,M,ne){if(M.type===vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===dc||M.magFilter===eo||M.magFilter===Dr||M.minFilter===Ln||M.minFilter===dc||M.minFilter===eo||M.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ne?(r.texParameteri(C,r.TEXTURE_WRAP_S,Se[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Se[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Se[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==ai||M.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,U(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,U(M.minFilter)),M.minFilter!==ln&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==eo&&M.minFilter!==Dr||M.type===vi&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===po&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function pe(C,M){let ne=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",j));const oe=M.source;let _e=x.get(oe);_e===void 0&&(_e={},x.set(oe,_e));const me=ee(M);if(me!==C.__cacheKey){_e[me]===void 0&&(_e[me]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),_e[me].usedTimes++;const Ke=_e[C.__cacheKey];Ke!==void 0&&(_e[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&N(M)),C.__cacheKey=me,C.__webglTexture=_e[me].texture}return ne}function Re(C,M,ne){let oe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=r.TEXTURE_3D);const _e=pe(C,M),me=M.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+ne);const Ke=i.get(me);if(me.version!==Ke.__version||_e===!0){t.activeTexture(r.TEXTURE0+ne);const He=Pt.getPrimaries(Pt.workingColorSpace),ye=M.colorSpace===or?null:Pt.getPrimaries(M.colorSpace),be=M.colorSpace===or||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Je=P(M)&&d(M.image)===!1;let Ee=m(M.image,Je,!1,o.maxTextureSize);Ee=lt(M,Ee);const Nt=d(Ee)||c,rt=a.convert(M.format,M.colorSpace);let Ge=a.convert(M.type),Pe=G(M.internalFormat,rt,Ge,M.colorSpace,M.isVideoTexture);te(oe,M,Nt);let Fe;const I=M.mipmaps,le=c&&M.isVideoTexture!==!0&&Pe!==kp,Ne=Ke.__version===void 0||_e===!0,F=me.dataReady,Me=B(M,Ee,Nt);if(M.isDepthTexture)Pe=r.DEPTH_COMPONENT,c?M.type===vi?Pe=r.DEPTH_COMPONENT32F:M.type===ar?Pe=r.DEPTH_COMPONENT24:M.type===Ur?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:M.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nr&&Pe===r.DEPTH_COMPONENT&&M.type!==cu&&M.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ar,Ge=a.convert(M.type)),M.format===Ls&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,Ge=a.convert(M.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,null));else if(M.isDataTexture)if(I.length>0&&Nt){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,I[0].width,I[0].height);for(let Y=0,ve=I.length;Y<ve;Y++)Fe=I[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data);M.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,rt,Ge,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,I[0].width,I[0].height,Ee.depth);for(let Y=0,ve=I.length;Y<ve;Y++)Fe=I[Y],M.format!==li?rt!==null?le?F&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Ge,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,rt,Ge,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,I[0].width,I[0].height);for(let Y=0,ve=I.length;Y<ve;Y++)Fe=I[Y],M.format!==li?rt!==null?le?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data)}else if(M.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(M.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,Me,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(M.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height);else{let Y=Ee.width,ve=Ee.height;for(let we=0;we<Me;we++)t.texImage2D(r.TEXTURE_2D,we,Pe,Y,ve,0,rt,Ge,null),Y>>=1,ve>>=1}}else if(I.length>0&&Nt){if(le&&Ne){const Y=bt(I[0]);t.texStorage2D(r.TEXTURE_2D,Me,Pe,Y.width,Y.height)}for(let Y=0,ve=I.length;Y<ve;Y++)Fe=I[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,rt,Ge,Fe):t.texImage2D(r.TEXTURE_2D,Y,Pe,rt,Ge,Fe);M.generateMipmaps=!1}else if(le){if(Ne){const Y=bt(Ee);t.texStorage2D(r.TEXTURE_2D,Me,Pe,Y.width,Y.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Ge,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,rt,Ge,Ee);T(M,Nt)&&L(oe),Ke.__version=me.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ze(C,M,ne){if(M.image.length!==6)return;const oe=pe(C,M),_e=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ne);const me=i.get(_e);if(_e.version!==me.__version||oe===!0){t.activeTexture(r.TEXTURE0+ne);const Ke=Pt.getPrimaries(Pt.workingColorSpace),He=M.colorSpace===or?null:Pt.getPrimaries(M.colorSpace),ye=M.colorSpace===or||Ke===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Je=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let Y=0;Y<6;Y++)!be&&!Je?Ee[Y]=m(M.image[Y],!1,!0,o.maxCubemapSize):Ee[Y]=Je?M.image[Y].image:M.image[Y],Ee[Y]=lt(M,Ee[Y]);const Nt=Ee[0],rt=d(Nt)||c,Ge=a.convert(M.format,M.colorSpace),Pe=a.convert(M.type),Fe=G(M.internalFormat,Ge,Pe,M.colorSpace),I=c&&M.isVideoTexture!==!0,le=me.__version===void 0||oe===!0,Ne=_e.dataReady;let F=B(M,Nt,rt);te(r.TEXTURE_CUBE_MAP,M,rt);let Me;if(be){I&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Nt.width,Nt.height);for(let Y=0;Y<6;Y++){Me=Ee[Y].mipmaps;for(let ve=0;ve<Me.length;ve++){const we=Me[ve];M.format!==li?Ge!==null?I?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,we.width,we.height,Ge,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Fe,we.width,we.height,0,Ge,Pe,we.data)}}}else{if(Me=M.mipmaps,I&&le){Me.length>0&&F++;const Y=bt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Je){I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee[Y].width,Ee[Y].height,Ge,Pe,Ee[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ee[Y].width,Ee[Y].height,0,Ge,Pe,Ee[Y].data);for(let ve=0;ve<Me.length;ve++){const ht=Me[ve].image[Y].image;I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,ht.width,ht.height,Ge,Pe,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Fe,ht.width,ht.height,0,Ge,Pe,ht.data)}}else{I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ge,Pe,Ee[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ge,Pe,Ee[Y]);for(let ve=0;ve<Me.length;ve++){const we=Me[ve];I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,Ge,Pe,we.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Fe,Ge,Pe,we.image[Y])}}}T(M,rt)&&L(r.TEXTURE_CUBE_MAP),me.__version=_e.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,ne,oe,_e,me){const Ke=a.convert(ne.format,ne.colorSpace),He=a.convert(ne.type),ye=G(ne.internalFormat,Ke,He,ne.colorSpace);if(!i.get(M).__hasExternalTextures){const Je=Math.max(1,M.width>>me),Ee=Math.max(1,M.height>>me);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,me,ye,Je,Ee,M.depth,0,Ke,He,null):t.texImage2D(_e,me,ye,Je,Ee,0,Ke,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,_e,i.get(ne).__webglTexture,0,Ve(M)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,_e,i.get(ne).__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,M,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ne||Qe(M)){const _e=M.depthTexture;_e&&_e.isDepthTexture&&(_e.type===vi?oe=r.DEPTH_COMPONENT32F:_e.type===ar&&(oe=r.DEPTH_COMPONENT24));const me=Ve(M);Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,oe,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,me,oe,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Ve(M);ne&&Qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const oe=M.textures;for(let _e=0;_e<oe.length;_e++){const me=oe[_e],Ke=a.convert(me.format,me.colorSpace),He=a.convert(me.type),ye=G(me.internalFormat,Ke,He,me.colorSpace),be=Ve(M);ne&&Qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ye,M.width,M.height):Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,_e=Ve(M);if(M.depthTexture.format===Nr)Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Ls)Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(C){const M=i.get(C),ne=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,C)}else if(ne){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(C,M,ne){const oe=i.get(C);M!==void 0&&Oe(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&ke(C)}function Wt(C){const M=C.texture,ne=i.get(C),oe=i.get(M);C.addEventListener("dispose",xe);const _e=C.textures,me=C.isWebGLCubeRenderTarget===!0,Ke=_e.length>1,He=d(C)||c;if(Ke||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,u.memory.textures++),me){ne.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer[ye]=[];for(let be=0;be<M.mipmaps.length;be++)ne.__webglFramebuffer[ye][be]=r.createFramebuffer()}else ne.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)ne.__webglFramebuffer[ye]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if(Ke)if(o.drawBuffers)for(let ye=0,be=_e.length;ye<be;ye++){const Je=i.get(_e[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Qe(C)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ye=0;ye<_e.length;ye++){const be=_e[ye];ne.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[ye]);const Je=a.convert(be.format,be.colorSpace),Ee=a.convert(be.type),Nt=G(be.internalFormat,Je,Ee,be.colorSpace,C.isXRRenderTarget===!0),rt=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Nt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ne.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),te(r.TEXTURE_CUBE_MAP,M,He);for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ne.__webglFramebuffer[ye][be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Oe(ne.__webglFramebuffer[ye],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);T(M,He)&&L(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let ye=0,be=_e.length;ye<be;ye++){const Je=_e[ye],Ee=i.get(Je);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),te(r.TEXTURE_2D,Je,He),Oe(ne.__webglFramebuffer,C,Je,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),T(Je,He)&&L(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),te(ye,M,He),c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ne.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,ye,be);else Oe(ne.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ye,0);T(M,He)&&L(ye),t.unbindTexture()}C.depthBuffer&&ke(C)}function Ue(C){const M=d(C)||c,ne=C.textures;for(let oe=0,_e=ne.length;oe<_e;oe++){const me=ne[oe];if(T(me,M)){const Ke=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(me).__webglTexture;t.bindTexture(Ke,He),L(Ke),t.unbindTexture()}}}function je(C){if(c&&C.samples>0&&Qe(C)===!1){const M=C.textures,ne=C.width,oe=C.height;let _e=r.COLOR_BUFFER_BIT;const me=[],Ke=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(C),ye=M.length>1;if(ye)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){me.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&me.push(Ke);const Je=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Je===!1&&(C.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Je===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ke])),ye){const Ee=i.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,_e,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Je=i.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(o.maxSamples,C.samples)}function Qe(C){const M=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(C){const M=u.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function lt(C,M){const ne=C.colorSpace,oe=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ru||ne!==dr&&ne!==or&&(Pt.getTransfer(ne)===zt?c===!1?e.has("EXT_sRGB")===!0&&oe===li?(C.format=ru,C.minFilter=Ln,C.generateMipmaps=!1):M=Yp.sRGBToLinear(M):(oe!==li||_e!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),M}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(g.width=C.naturalWidth||C.width,g.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(g.width=C.displayWidth,g.height=C.displayHeight):(g.width=C.width,g.height=C.height),g}this.allocateTextureUnit=J,this.resetTextureUnits=O,this.setTexture2D=ce,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=fe,this.rebindTextures=W,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Qe}function lR(r,e,t){const i=t.isWebGL2;function o(a,u=or){let c;const f=Pt.getTransfer(u);if(a===ur)return r.UNSIGNED_BYTE;if(a===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Bp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===AE)return r.BYTE;if(a===wE)return r.SHORT;if(a===cu)return r.UNSIGNED_SHORT;if(a===Op)return r.INT;if(a===ar)return r.UNSIGNED_INT;if(a===vi)return r.FLOAT;if(a===po)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===RE)return r.ALPHA;if(a===li)return r.RGBA;if(a===CE)return r.LUMINANCE;if(a===LE)return r.LUMINANCE_ALPHA;if(a===Nr)return r.DEPTH_COMPONENT;if(a===Ls)return r.DEPTH_STENCIL;if(a===ru)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===zp)return r.RED;if(a===Gp)return r.RED_INTEGER;if(a===PE)return r.RG;if(a===Hp)return r.RG_INTEGER;if(a===Vp)return r.RGBA_INTEGER;if(a===pc||a===mc||a===gc||a===_c)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Kh||a===Zh||a===jh||a===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kp)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Qh||a===ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Qh)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ed)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===td||a===nd||a===id||a===rd||a===sd||a===od||a===ad||a===ld||a===cd||a===ud||a===fd||a===hd||a===dd||a===pd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===td)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===nd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===id)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===od)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ad)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ld)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ud)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vc||a===md||a===gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===vc)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===IE||a===_d||a===vd||a===xd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===vc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===_d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ur?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class cR extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uR={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,i),d=this._getHandJoint(p,w);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,y=.005;p.inputState.pinching&&v>x+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(uR)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new yn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new hr({extensions:{fragDepth:!0},vertexShader:fR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new ja(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class pR extends Br{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,p=null,g=null,_=null,v=null,x=null,y=null;const w=new dR,m=t.getContextAttributes();let d=null,P=null;const T=[],L=[],G=new at;let B=null;const U=new Gn;U.layers.enable(1),U.viewport=new cn;const j=new Gn;j.layers.enable(2),j.viewport=new cn;const xe=[U,j],b=new cR;b.layers.enable(1),b.layers.enable(2);let N=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=T[te];return pe===void 0&&(pe=new kc,T[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=T[te];return pe===void 0&&(pe=new kc,T[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=T[te];return pe===void 0&&(pe=new kc,T[te]=pe),pe.getHandSpace()};function he(te){const pe=L.indexOf(te.inputSource);if(pe===-1)return;const Re=T[pe];Re!==void 0&&(Re.update(te.inputSource,te.frame,p||u),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",J);for(let te=0;te<T.length;te++){const pe=L[te];pe!==null&&(L[te]=null,T[te].disconnect(pe))}N=null,ge=null,w.reset(),e.setRenderTarget(d),x=null,v=null,_=null,o=null,P=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(d=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",O),o.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:o.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Or(x.framebufferWidth,x.framebufferHeight,{format:li,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,Re=null,Ze=null;m.depth&&(Ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Ls:Nr,Re=m.stencil?Ur:ar);const Oe={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Or(v.textureWidth,v.textureHeight,{format:li,type:ur,depthTexture:new sm(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(P);Ce.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(c),et.setContext(o),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function J(te){for(let pe=0;pe<te.removed.length;pe++){const Re=te.removed[pe],Ze=L.indexOf(Re);Ze>=0&&(L[Ze]=null,T[Ze].disconnect(Re))}for(let pe=0;pe<te.added.length;pe++){const Re=te.added[pe];let Ze=L.indexOf(Re);if(Ze===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=L.length){L.push(Re),Ze=Ce;break}else if(L[Ce]===null){L[Ce]=Re,Ze=Ce;break}if(Ze===-1)break}const Oe=T[Ze];Oe&&Oe.connect(Re)}}const ee=new X,ce=new X;function ie(te,pe,Re){ee.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Re.matrixWorld);const Ze=ee.distanceTo(ce),Oe=pe.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,Mt=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],Wt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],je=(Ce[8]+1)/Ce[0],Ve=Mt*Ue,Qe=Mt*je,tt=Ze/(-Ue+je),lt=tt*-Ue;pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(lt),te.translateZ(tt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const bt=Mt+tt,C=ke+tt,M=Ve-lt,ne=Qe+(Ze-lt),oe=W*ke/C*bt,_e=Wt*ke/C*bt;te.projectionMatrix.makePerspective(M,ne,oe,_e,bt,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ue(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;w.texture!==null&&(te.near=w.depthNear,te.far=w.depthFar),b.near=j.near=U.near=te.near,b.far=j.far=U.far=te.far,(N!==b.near||ge!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,ge=b.far,U.near=N,U.far=ge,j.near=N,j.far=ge,U.updateProjectionMatrix(),j.updateProjectionMatrix(),te.updateProjectionMatrix());const pe=te.parent,Re=b.cameras;ue(b,pe);for(let Ze=0;Ze<Re.length;Ze++)ue(Re[Ze],pe);Re.length===2?ie(b,U,j):b.projectionMatrix.copy(U.projectionMatrix),fe(te,b,pe)};function fe(te,pe,Re){Re===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=mo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(te){f=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return w.texture!==null};let Se=null;function De(te,pe){if(g=pe.getViewerPose(p||u),y=pe,g!==null){const Re=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Ze=!1;Re.length!==b.cameras.length&&(b.cameras.length=0,Ze=!0);for(let Ce=0;Ce<Re.length;Ce++){const Mt=Re[Ce];let ke=null;if(x!==null)ke=x.getViewport(Mt);else{const Wt=_.getViewSubImage(v,Mt);ke=Wt.viewport,Ce===0&&(e.setRenderTargetTextures(P,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(P))}let W=xe[Ce];W===void 0&&(W=new Gn,W.layers.enable(Ce),W.viewport=new cn,xe[Ce]=W),W.matrix.fromArray(Mt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Mt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(b.matrix.copy(W.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ze===!0&&b.cameras.push(W)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(e,Ce,o.renderState)}}for(let Re=0;Re<T.length;Re++){const Ze=L[Re],Oe=T[Re];Ze!==null&&Oe!==void 0&&Oe.update(Ze,pe,p||u)}w.render(e,b),Se&&Se(te,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),y=null}const et=new rm;et.setAnimationLoop(De),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const Cr=new Gi,mR=new Yt;function gR(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,em(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function o(m,d,P,T,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),_(m,d)):d.isMeshPhongMaterial?(a(m,d),g(m,d)):d.isMeshStandardMaterial?(a(m,d),v(m,d),d.isMeshPhysicalMaterial&&x(m,d,L)):d.isMeshMatcapMaterial?(a(m,d),y(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),w(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(u(m,d),d.isLineDashedMaterial&&c(m,d)):d.isPointsMaterial?f(m,d,P,T):d.isSpriteMaterial?p(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const P=e.get(d),T=P.envMap,L=P.envMapRotation;if(T&&(m.envMap.value=T,Cr.copy(L),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(Cr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const G=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*G,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function c(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function f(m,d,P,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*P,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function g(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function _(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function v(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function x(m,d,P){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function w(m,d){const P=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function _R(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(P,T){const L=T.program;i.uniformBlockBinding(P,L)}function p(P,T){let L=o[P.id];L===void 0&&(y(P),L=g(P),o[P.id]=L,P.addEventListener("dispose",m));const G=T.program;i.updateUBOMapping(P,G);const B=e.render.frame;a[P.id]!==B&&(v(P),a[P.id]=B)}function g(P){const T=_();P.__bindingPointIndex=T;const L=r.createBuffer(),G=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,G,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,L),L}function _(){for(let P=0;P<c;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const T=o[P.id],L=P.uniforms,G=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let B=0,U=L.length;B<U;B++){const j=Array.isArray(L[B])?L[B]:[L[B]];for(let xe=0,b=j.length;xe<b;xe++){const N=j[xe];if(x(N,B,xe,G)===!0){const ge=N.__offset,he=Array.isArray(N.value)?N.value:[N.value];let O=0;for(let J=0;J<he.length;J++){const ee=he[J],ce=w(ee);typeof ee=="number"||typeof ee=="boolean"?(N.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,ge+O,N.__data)):ee.isMatrix3?(N.__data[0]=ee.elements[0],N.__data[1]=ee.elements[1],N.__data[2]=ee.elements[2],N.__data[3]=0,N.__data[4]=ee.elements[3],N.__data[5]=ee.elements[4],N.__data[6]=ee.elements[5],N.__data[7]=0,N.__data[8]=ee.elements[6],N.__data[9]=ee.elements[7],N.__data[10]=ee.elements[8],N.__data[11]=0):(ee.toArray(N.__data,O),O+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ge,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(P,T,L,G){const B=P.value,U=T+"_"+L;if(G[U]===void 0)return typeof B=="number"||typeof B=="boolean"?G[U]=B:G[U]=B.clone(),!0;{const j=G[U];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return G[U]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function y(P){const T=P.uniforms;let L=0;const G=16;for(let U=0,j=T.length;U<j;U++){const xe=Array.isArray(T[U])?T[U]:[T[U]];for(let b=0,N=xe.length;b<N;b++){const ge=xe[b],he=Array.isArray(ge.value)?ge.value:[ge.value];for(let O=0,J=he.length;O<J;O++){const ee=he[O],ce=w(ee),ie=L%G;ie!==0&&G-ie<ce.boundary&&(L+=G-ie),ge.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=L,L+=ce.storage}}}const B=L%G;return B>0&&(L+=G-B),P.__size=L,P.__cache={},this}function w(P){const T={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(T.boundary=4,T.storage=4):P.isVector2?(T.boundary=8,T.storage=8):P.isVector3||P.isColor?(T.boundary=16,T.storage=12):P.isVector4?(T.boundary=16,T.storage=16):P.isMatrix3?(T.boundary=48,T.storage=48):P.isMatrix4?(T.boundary=64,T.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),T}function m(P){const T=P.target;T.removeEventListener("dispose",m);const L=u.indexOf(T.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function d(){for(const P in o)r.deleteBuffer(o[P]);u=[],o={},a={}}return{bind:f,update:p,dispose:d}}class pu{constructor(e={}){const{canvas:t=sy(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),y=new Int32Array(4);let w=null,m=null;const d=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const T=this;let L=!1,G=0,B=0,U=null,j=-1,xe=null;const b=new cn,N=new cn;let ge=null;const he=new Tt(0);let O=0,J=t.width,ee=t.height,ce=1,ie=null,ue=null;const fe=new cn(0,0,J,ee),Se=new cn(0,0,J,ee);let De=!1;const et=new im;let te=!1,pe=!1,Re=null;const Ze=new Yt,Oe=new at,Ce=new X,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return U===null?ce:1}let W=i;function Wt(R,k){for(let K=0;K<R.length;K++){const Q=R[K],q=t.getContext(Q,k);if(q!==null)return q}return null}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Me,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&k.shift(),W=Wt(k,R),W===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,je,Ve,Qe,tt,lt,bt,C,M,ne,oe,_e,me,Ke,He,ye,be,Je,Ee,Nt,rt,Ge,Pe,Fe;function I(){Ue=new yA(W),je=new gA(W,Ue,e),Ue.init(je),Ge=new lR(W,Ue,je),Ve=new oR(W,Ue,je),Qe=new AA(W),tt=new Yw,lt=new aR(W,Ue,Ve,tt,je,Ge,Qe),bt=new vA(T),C=new EA(T),M=new Py(W,je),Pe=new pA(W,Ue,M,je),ne=new TA(W,M,Qe,Pe),oe=new LA(W,ne,M,Qe),Ee=new CA(W,je,lt),ye=new _A(tt),_e=new Xw(T,bt,C,Ue,je,Pe,ye),me=new gR(T,tt),Ke=new $w,He=new eR(Ue,je),Je=new dA(T,bt,C,Ve,oe,v,f),be=new sR(T,oe,je),Fe=new _R(W,Qe,je,Ve),Nt=new mA(W,Ue,Qe,je),rt=new bA(W,Ue,Qe,je),Qe.programs=_e.programs,T.capabilities=je,T.extensions=Ue,T.properties=tt,T.renderLists=Ke,T.shadowMap=be,T.state=Ve,T.info=Qe}I();const le=new pR(T,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(J,ee,!1))},this.getSize=function(R){return R.set(J,ee)},this.setSize=function(R,k,K=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,ee=k,t.width=Math.floor(R*ce),t.height=Math.floor(k*ce),K===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(J*ce,ee*ce).floor()},this.setDrawingBufferSize=function(R,k,K){J=R,ee=k,ce=K,t.width=Math.floor(R*K),t.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,k,K,Q){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,k,K,Q),Ve.viewport(b.copy(fe).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,k,K,Q){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,k,K,Q),Ve.scissor(N.copy(Se).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ve.setScissorTest(De=R)},this.setOpaqueSort=function(R){ie=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,k=!0,K=!0){let Q=0;if(R){let q=!1;if(U!==null){const Le=U.texture.format;q=Le===Vp||Le===Hp||Le===Gp}if(q){const Le=U.texture.type,Be=Le===ur||Le===ar||Le===cu||Le===Ur||Le===Fp||Le===Bp,Xe=Je.getClearColor(),Ye=Je.getClearAlpha(),ut=Xe.r,nt=Xe.g,st=Xe.b;Be?(x[0]=ut,x[1]=nt,x[2]=st,x[3]=Ye,W.clearBufferuiv(W.COLOR,0,x)):(y[0]=ut,y[1]=nt,y[2]=st,y[3]=Ye,W.clearBufferiv(W.COLOR,0,y))}else Q|=W.COLOR_BUFFER_BIT}k&&(Q|=W.DEPTH_BUFFER_BIT),K&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ke.dispose(),He.dispose(),tt.dispose(),bt.dispose(),C.dispose(),oe.dispose(),Pe.dispose(),Fe.dispose(),_e.dispose(),le.dispose(),le.removeEventListener("sessionstart",Gt),le.removeEventListener("sessionend",Et),Re&&(Re.dispose(),Re=null),Ct.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=Qe.autoReset,k=be.enabled,K=be.autoUpdate,Q=be.needsUpdate,q=be.type;I(),Qe.autoReset=R,be.enabled=k,be.autoUpdate=K,be.needsUpdate=Q,be.type=q}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Y(R){const k=R.target;k.removeEventListener("dispose",Y),ve(k)}function ve(R){we(R),tt.remove(R)}function we(R){const k=tt.get(R).programs;k!==void 0&&(k.forEach(function(K){_e.releaseProgram(K)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,Q,q,Le){k===null&&(k=Mt);const Be=q.isMesh&&q.matrixWorld.determinant()<0,Xe=el(R,k,K,Q,q);Ve.setMaterial(Q,Be);let Ye=K.index,ut=1;if(Q.wireframe===!0){if(Ye=ne.getWireframeAttribute(K),Ye===void 0)return;ut=2}const nt=K.drawRange,st=K.attributes.position;let Ht=nt.start*ut,un=(nt.start+nt.count)*ut;Le!==null&&(Ht=Math.max(Ht,Le.start*ut),un=Math.min(un,(Le.start+Le.count)*ut)),Ye!==null?(Ht=Math.max(Ht,0),un=Math.min(un,Ye.count)):st!=null&&(Ht=Math.max(Ht,0),un=Math.min(un,st.count));const qt=un-Ht;if(qt<0||qt===1/0)return;Pe.setup(q,Q,Xe,K,Ye);let Qn,Ft=Nt;if(Ye!==null&&(Qn=M.get(Ye),Ft=rt,Ft.setIndex(Qn)),q.isMesh)Q.wireframe===!0?(Ve.setLineWidth(Q.wireframeLinewidth*ke()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(q.isLine){let ct=Q.linewidth;ct===void 0&&(ct=1),Ve.setLineWidth(ct*ke()),q.isLineSegments?Ft.setMode(W.LINES):q.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else q.isPoints?Ft.setMode(W.POINTS):q.isSprite&&Ft.setMode(W.TRIANGLES);if(q.isBatchedMesh)Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ft.renderInstances(Ht,qt,q.count);else if(K.isInstancedBufferGeometry){const ct=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Os=Math.min(K.instanceCount,ct);Ft.renderInstances(Ht,qt,Os)}else Ft.render(Ht,qt)};function ht(R,k,K){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,Vr(R,k,K),R.side=fr,R.needsUpdate=!0,Vr(R,k,K),R.side=Bi):Vr(R,k,K)}this.compile=function(R,k,K=null){K===null&&(K=R),m=He.get(K),m.init(),P.push(m),K.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==K&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(T._useLegacyLights);const Q=new Set;return R.traverse(function(q){const Le=q.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Xe=Le[Be];ht(Xe,K,q),Q.add(Xe)}else ht(Le,K,q),Q.add(Le)}),P.pop(),m=null,Q},this.compileAsync=function(R,k,K=null){const Q=this.compile(R,k,K);return new Promise(q=>{function Le(){if(Q.forEach(function(Be){tt.get(Be).currentProgram.isReady()&&Q.delete(Be)}),Q.size===0){q(R);return}setTimeout(Le,10)}Ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let yt=null;function Rt(R){yt&&yt(R)}function Gt(){Ct.stop()}function Et(){Ct.start()}const Ct=new rm;Ct.setAnimationLoop(Rt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(R){yt=R,le.setAnimationLoop(R),R===null?Ct.stop():Ct.start()},le.addEventListener("sessionstart",Gt),le.addEventListener("sessionend",Et),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,k,U),m=He.get(R,P.length),m.init(),P.push(m),Ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(Ze),pe=this.localClippingEnabled,te=ye.init(this.clippingPlanes,pe),w=Ke.get(R,d.length),w.init(),d.push(w),nn(R,k,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(ie,ue),this.info.render.frame++,te===!0&&ye.beginShadows();const K=m.state.shadowsArray;if(be.render(K,R,k),te===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Je.render(w,R),m.setupLights(T._useLegacyLights),k.isArrayCamera){const Q=k.cameras;for(let q=0,Le=Q.length;q<Le;q++){const Be=Q[q];Jn(w,R,Be,Be.viewport)}}else Jn(w,R,k);U!==null&&(lt.updateMultisampleRenderTarget(U),lt.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(T,R,k),Pe.resetDefaultState(),j=-1,xe=null,P.pop(),P.length>0?m=P[P.length-1]:m=null,d.pop(),d.length>0?w=d[d.length-1]:w=null};function nn(R,k,K,Q){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){Q&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);const Be=oe.update(R),Xe=R.material;Xe.visible&&w.push(R,Be,Xe,K,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const Be=oe.update(R),Xe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Xe)){const Ye=Be.groups;for(let ut=0,nt=Ye.length;ut<nt;ut++){const st=Ye[ut],Ht=Xe[st.materialIndex];Ht&&Ht.visible&&w.push(R,Be,Ht,K,Ce.z,st)}}else Xe.visible&&w.push(R,Be,Xe,K,Ce.z,null)}}const Le=R.children;for(let Be=0,Xe=Le.length;Be<Xe;Be++)nn(Le[Be],k,K,Q)}function Jn(R,k,K,Q){const q=R.opaque,Le=R.transmissive,Be=R.transparent;m.setupLightsView(K),te===!0&&ye.setGlobalState(T.clippingPlanes,K),Le.length>0&&Gr(q,Le,k,K),Q&&Ve.viewport(b.copy(Q)),q.length>0&&Hr(q,k,K),Le.length>0&&Hr(Le,k,K),Be.length>0&&Hr(Be,k,K),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Gr(R,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Le=je.isWebGL2;Re===null&&(Re=new Or(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?po:ur,minFilter:Dr,samples:Le?4:0})),T.getDrawingBufferSize(Oe),Le?Re.setSize(Oe.x,Oe.y):Re.setSize(Va(Oe.x),Va(Oe.y));const Be=T.getRenderTarget();T.setRenderTarget(Re),T.getClearColor(he),O=T.getClearAlpha(),O<1&&T.setClearColor(16777215,.5),T.clear();const Xe=T.toneMapping;T.toneMapping=cr,Hr(R,K,Q),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re);let Ye=!1;for(let ut=0,nt=k.length;ut<nt;ut++){const st=k[ut],Ht=st.object,un=st.geometry,qt=st.material,Qn=st.group;if(qt.side===Bi&&Ht.layers.test(Q.layers)){const Ft=qt.side;qt.side=Pn,qt.needsUpdate=!0,vo(Ht,K,Q,un,qt,Qn),qt.side=Ft,qt.needsUpdate=!0,Ye=!0}}Ye===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re)),T.setRenderTarget(Be),T.setClearColor(he,O),T.toneMapping=Xe}function Hr(R,k,K){const Q=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Le=R.length;q<Le;q++){const Be=R[q],Xe=Be.object,Ye=Be.geometry,ut=Q===null?Be.material:Q,nt=Be.group;Xe.layers.test(K.layers)&&vo(Xe,k,K,Ye,ut,nt)}}function vo(R,k,K,Q,q,Le){R.onBeforeRender(T,k,K,Q,q,Le),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(T,k,K,Q,R,Le),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,T.renderBufferDirect(K,k,Q,q,R,Le),q.side=fr,q.needsUpdate=!0,T.renderBufferDirect(K,k,Q,q,R,Le),q.side=Bi):T.renderBufferDirect(K,k,Q,q,R,Le),R.onAfterRender(T,k,K,Q,q,Le)}function Vr(R,k,K){k.isScene!==!0&&(k=Mt);const Q=tt.get(R),q=m.state.lights,Le=m.state.shadowsArray,Be=q.state.version,Xe=_e.getParameters(R,q.state,Le,k,K),Ye=_e.getProgramCacheKey(Xe);let ut=Q.programs;Q.environment=R.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(R.isMeshStandardMaterial?C:bt).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ut===void 0&&(R.addEventListener("dispose",Y),ut=new Map,Q.programs=ut);let nt=ut.get(Ye);if(nt!==void 0){if(Q.currentProgram===nt&&Q.lightsStateVersion===Be)return So(R,Xe),nt}else Xe.uniforms=_e.getUniforms(R),R.onBuild(K,Xe,T),R.onBeforeCompile(Xe,T),nt=_e.acquireProgram(Xe,Ye),ut.set(Ye,nt),Q.uniforms=Xe.uniforms;const st=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ye.uniform),So(R,Xe),Q.needsLights=Mo(R),Q.lightsStateVersion=Be,Q.needsLights&&(st.ambientLightColor.value=q.state.ambient,st.lightProbe.value=q.state.probe,st.directionalLights.value=q.state.directional,st.directionalLightShadows.value=q.state.directionalShadow,st.spotLights.value=q.state.spot,st.spotLightShadows.value=q.state.spotShadow,st.rectAreaLights.value=q.state.rectArea,st.ltc_1.value=q.state.rectAreaLTC1,st.ltc_2.value=q.state.rectAreaLTC2,st.pointLights.value=q.state.point,st.pointLightShadows.value=q.state.pointShadow,st.hemisphereLights.value=q.state.hemi,st.directionalShadowMap.value=q.state.directionalShadowMap,st.directionalShadowMatrix.value=q.state.directionalShadowMatrix,st.spotShadowMap.value=q.state.spotShadowMap,st.spotLightMatrix.value=q.state.spotLightMatrix,st.spotLightMap.value=q.state.spotLightMap,st.pointShadowMap.value=q.state.pointShadowMap,st.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=nt,Q.uniformsList=null,nt}function xo(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Na.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function So(R,k){const K=tt.get(R);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function el(R,k,K,Q,q){k.isScene!==!0&&(k=Mt),lt.resetTextureUnits();const Le=k.fog,Be=Q.isMeshStandardMaterial?k.environment:null,Xe=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:dr,Ye=(Q.isMeshStandardMaterial?C:bt).get(Q.envMap||Be),ut=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),st=!!K.morphAttributes.position,Ht=!!K.morphAttributes.normal,un=!!K.morphAttributes.color;let qt=cr;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qt=T.toneMapping);const Qn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=Qn!==void 0?Qn.length:0,ct=tt.get(Q),Os=m.state.lights;if(te===!0&&(pe===!0||R!==xe)){const bn=R===xe&&Q.id===j;ye.setState(Q,R,bn)}let Dt=!1;Q.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Os.state.version||ct.outputColorSpace!==Xe||q.isBatchedMesh&&ct.batching===!1||!q.isBatchedMesh&&ct.batching===!0||q.isInstancedMesh&&ct.instancing===!1||!q.isInstancedMesh&&ct.instancing===!0||q.isSkinnedMesh&&ct.skinning===!1||!q.isSkinnedMesh&&ct.skinning===!0||q.isInstancedMesh&&ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ct.instancingMorph===!1&&q.morphTexture!==null||ct.envMap!==Ye||Q.fog===!0&&ct.fog!==Le||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==ye.numPlanes||ct.numIntersection!==ye.numIntersection)||ct.vertexAlphas!==ut||ct.vertexTangents!==nt||ct.morphTargets!==st||ct.morphNormals!==Ht||ct.morphColors!==un||ct.toneMapping!==qt||je.isWebGL2===!0&&ct.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,ct.__version=Q.version);let fi=ct.currentProgram;Dt===!0&&(fi=Vr(Q,k,q));let Fs=!1,Ei=!1,Bs=!1;const jt=fi.getUniforms(),Hn=ct.uniforms;if(Ve.useProgram(fi.program)&&(Fs=!0,Ei=!0,Bs=!0),Q.id!==j&&(j=Q.id,Ei=!0),Fs||xe!==R){jt.setValue(W,"projectionMatrix",R.projectionMatrix),jt.setValue(W,"viewMatrix",R.matrixWorldInverse);const bn=jt.map.cameraPosition;bn!==void 0&&bn.setValue(W,Ce.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&jt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&jt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),xe!==R&&(xe=R,Ei=!0,Bs=!0)}if(q.isSkinnedMesh){jt.setOptional(W,q,"bindMatrix"),jt.setOptional(W,q,"bindMatrixInverse");const bn=q.skeleton;bn&&(je.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),jt.setValue(W,"boneTexture",bn.boneTexture,lt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(W,q,"batchingTexture"),jt.setValue(W,"batchingTexture",q._matricesTexture,lt));const kr=K.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0&&je.isWebGL2===!0)&&Ee.update(q,K,fi),(Ei||ct.receiveShadow!==q.receiveShadow)&&(ct.receiveShadow=q.receiveShadow,jt.setValue(W,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Hn.envMap.value=Ye,Hn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Ei&&(jt.setValue(W,"toneMappingExposure",T.toneMappingExposure),ct.needsLights&&tl(Hn,Bs),Le&&Q.fog===!0&&me.refreshFogUniforms(Hn,Le),me.refreshMaterialUniforms(Hn,Q,ce,ee,Re),Na.upload(W,xo(ct),Hn,lt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Na.upload(W,xo(ct),Hn,lt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&jt.setValue(W,"center",q.center),jt.setValue(W,"modelViewMatrix",q.modelViewMatrix),jt.setValue(W,"normalMatrix",q.normalMatrix),jt.setValue(W,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const bn=Q.uniformsGroups;for(let Wr=0,Eo=bn.length;Wr<Eo;Wr++)if(je.isWebGL2){const Xr=bn[Wr];Fe.update(Xr,fi),Fe.bind(Xr,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function tl(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,k,K){tt.get(R.texture).__webglTexture=k,tt.get(R.depthTexture).__webglTexture=K;const Q=tt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const K=tt.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){U=R,G=k,B=K;let Q=!0,q=null,Le=!1,Be=!1;if(R){const Ye=tt.get(R);Ye.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),Q=!1):Ye.__webglFramebuffer===void 0?lt.setupRenderTarget(R):Ye.__hasExternalTextures&&lt.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const ut=R.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Be=!0);const nt=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[k])?q=nt[k][K]:q=nt[k],Le=!0):je.isWebGL2&&R.samples>0&&lt.useMultisampledRTT(R)===!1?q=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[K]:q=nt,b.copy(R.viewport),N.copy(R.scissor),ge=R.scissorTest}else b.copy(fe).multiplyScalar(ce).floor(),N.copy(Se).multiplyScalar(ce).floor(),ge=De;if(Ve.bindFramebuffer(W.FRAMEBUFFER,q)&&je.drawBuffers&&Q&&Ve.drawBuffers(R,q),Ve.viewport(b),Ve.scissor(N),Ve.setScissorTest(ge),Le){const Ye=tt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ye.__webglTexture,K)}else if(Be){const Ye=tt.get(R.texture),ut=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,K||0,ut)}j=-1},this.readRenderTargetPixels=function(R,k,K,Q,q,Le,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Ve.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ye=R.texture,ut=Ye.format,nt=Ye.type;if(ut!==li&&Ge.convert(ut)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===po&&(Ue.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(nt!==ur&&Ge.convert(nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===vi&&(je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Q&&K>=0&&K<=R.height-q&&W.readPixels(k,K,Q,q,Ge.convert(ut),Ge.convert(nt),Le)}finally{const Ye=U!==null?tt.get(U).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,k,K=0){const Q=Math.pow(2,-K),q=Math.floor(k.image.width*Q),Le=Math.floor(k.image.height*Q);lt.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,R.x,R.y,q,Le),Ve.unbindTexture()},this.copyTextureToTexture=function(R,k,K,Q=0){const q=k.image.width,Le=k.image.height,Be=Ge.convert(K.format),Xe=Ge.convert(K.type);lt.setTexture2D(K,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Q,R.x,R.y,q,Le,Be,Xe,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Q,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Be,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,Q,R.x,R.y,Be,Xe,k.image),Q===0&&K.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,K,Q,q=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Xe=R.max.z-R.min.z+1,Ye=Ge.convert(Q.format),ut=Ge.convert(Q.type);let nt;if(Q.isData3DTexture)lt.setTexture3D(Q,0),nt=W.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)lt.setTexture2DArray(Q,0),nt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment);const st=W.getParameter(W.UNPACK_ROW_LENGTH),Ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),un=W.getParameter(W.UNPACK_SKIP_PIXELS),qt=W.getParameter(W.UNPACK_SKIP_ROWS),Qn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ft=K.isCompressedTexture?K.mipmaps[q]:K.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft.data):Q.isCompressedArrayTexture?W.compressedTexSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,Ft.data):W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,st),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,un),W.pixelStorei(W.UNPACK_SKIP_ROWS,qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qn),q===0&&Q.generateMipmaps&&W.generateMipmap(nt),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){G=0,B=0,U=null,Ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vR extends pu{}vR.prototype.isWebGL1Renderer=!0;class xR extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class SR extends yn{constructor(e=null,t=1,i=1,o,a,u,c,f,p=ln,g=ln,_,v){super(null,u,c,f,p,g,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class up extends ui{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Yt,fp=new Yt,Pa=[],hp=new zr,MR=new Yt,so=new ci,oo=new go;class dp extends ci{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new up(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,MR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),hp.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),oo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Es),fp.multiplyMatrices(i,Es),so.matrixWorld=fp,so.raycast(e,Pa);for(let u=0,c=Pa.length;u<c;u++){const f=Pa[u];f.instanceId=a,f.object=this,t.push(f)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new up(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new SR(new Float32Array(o*this.count),o,this.count,zp,vi));const a=this.morphTexture.source.data.data;let u=0;for(let p=0;p<i.length;p++)u+=i[p];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mu extends pr{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],p=new X,g=new at;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;p.x=e*Math.cos(x),p.y=e*Math.sin(x),u.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(u[v]/e+1)/2,g.y=(u[v+1]/e+1)/2,f.push(g.x,g.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new Mi(u,3)),this.setAttribute("normal",new Mi(c,3)),this.setAttribute("uv",new Mi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);const ER={items:[]},uo=new Ds(ER);function yR(r){const t={...uo.getValue(),items:r};uo.next(t)}const TR={scene:new xR},fm=new Ds(TR),bR={isLoading:!0,theme:"light"},Wa=new Ds(bR);function mi(r){const t={...Wa.getValue(),isLoading:r};Wa.next(t)}const mp={type:"change"},Wc={type:"start"},gp={type:"end"},Ia=new Kp,_p=new sr,AR=Math.cos(70*ry.DEG2RAD);class hm extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",He),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mp),i.update(),a=o.NONE},this.update=function(){const I=new X,le=new Fr().setFromUnitVectors(e.up,new X(0,1,0)),Ne=le.clone().invert(),F=new X,Me=new Fr,Y=new X,ve=2*Math.PI;return function(ht=null){const yt=i.object.position;I.copy(yt).sub(i.target),I.applyQuaternion(le),c.setFromVector3(I),i.autoRotate&&a===o.NONE&&ge(b(ht)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Rt=i.minAzimuthAngle,Gt=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(Gt)&&(Rt<-Math.PI?Rt+=ve:Rt>Math.PI&&(Rt-=ve),Gt<-Math.PI?Gt+=ve:Gt>Math.PI&&(Gt-=ve),Rt<=Gt?c.theta=Math.max(Rt,Math.min(Gt,c.theta)):c.theta=c.theta>(Rt+Gt)/2?Math.max(Rt,c.theta):Math.min(Gt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(g,i.dampingFactor):i.target.add(g),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&B||i.object.isOrthographicCamera)c.radius=fe(c.radius);else{const Ct=c.radius;c.radius=fe(c.radius*p),Et=Ct!=c.radius}if(I.setFromSpherical(c),I.applyQuaternion(Ne),yt.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,g.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),g.set(0,0,0)),i.zoomToCursor&&B){let Ct=null;if(i.object.isPerspectiveCamera){const nn=I.length();Ct=fe(nn*p);const Jn=nn-Ct;i.object.position.addScaledVector(L,Jn),i.object.updateMatrixWorld(),Et=!!Jn}else if(i.object.isOrthographicCamera){const nn=new X(G.x,G.y,0);nn.unproject(i.object);const Jn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),Et=Jn!==i.object.zoom;const Gr=new X(G.x,G.y,0);Gr.unproject(i.object),i.object.position.sub(Gr).add(nn),i.object.updateMatrixWorld(),Ct=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ct).add(i.object.position):(Ia.origin.copy(i.object.position),Ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ia.direction))<AR?e.lookAt(i.target):(_p.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ia.intersectPlane(_p,i.target))))}else if(i.object.isOrthographicCamera){const Ct=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),Ct!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return p=1,B=!1,Et||F.distanceToSquared(i.object.position)>u||8*(1-Me.dot(i.object.quaternion))>u||Y.distanceToSquared(i.target)>u?(i.dispatchEvent(mp),F.copy(i.object.position),Me.copy(i.object.quaternion),Y.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",lt),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new pp,f=new pp;let p=1;const g=new X,_=new at,v=new at,x=new at,y=new at,w=new at,m=new at,d=new at,P=new at,T=new at,L=new X,G=new at;let B=!1;const U=[],j={};let xe=!1;function b(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function N(I){const le=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*le)}function ge(I){f.theta-=I}function he(I){f.phi-=I}const O=function(){const I=new X;return function(Ne,F){I.setFromMatrixColumn(F,0),I.multiplyScalar(-Ne),g.add(I)}}(),J=function(){const I=new X;return function(Ne,F){i.screenSpacePanning===!0?I.setFromMatrixColumn(F,1):(I.setFromMatrixColumn(F,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Ne),g.add(I)}}(),ee=function(){const I=new X;return function(Ne,F){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;I.copy(Y).sub(i.target);let ve=I.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),O(2*Ne*ve/Me.clientHeight,i.object.matrix),J(2*F*ve/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(Ne*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),J(F*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(I,le){if(!i.zoomToCursor)return;B=!0;const Ne=i.domElement.getBoundingClientRect(),F=I-Ne.left,Me=le-Ne.top,Y=Ne.width,ve=Ne.height;G.x=F/Y*2-1,G.y=-(Me/ve)*2+1,L.set(G.x,G.y,1).unproject(i.object).sub(i.object.position).normalize()}function fe(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function Se(I){_.set(I.clientX,I.clientY)}function De(I){ue(I.clientX,I.clientX),d.set(I.clientX,I.clientY)}function et(I){y.set(I.clientX,I.clientY)}function te(I){v.set(I.clientX,I.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;ge(2*Math.PI*x.x/le.clientHeight),he(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function pe(I){P.set(I.clientX,I.clientY),T.subVectors(P,d),T.y>0?ce(N(T.y)):T.y<0&&ie(N(T.y)),d.copy(P),i.update()}function Re(I){w.set(I.clientX,I.clientY),m.subVectors(w,y).multiplyScalar(i.panSpeed),ee(m.x,m.y),y.copy(w),i.update()}function Ze(I){ue(I.clientX,I.clientY),I.deltaY<0?ie(N(I.deltaY)):I.deltaY>0&&ce(N(I.deltaY)),i.update()}function Oe(I){let le=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?ge(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?ge(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(-i.keyPanSpeed,0),le=!0;break}le&&(I.preventDefault(),i.update())}function Ce(I){if(U.length===1)_.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);_.set(Ne,F)}}function Mt(I){if(U.length===1)y.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);y.set(Ne,F)}}function ke(I){const le=Pe(I),Ne=I.pageX-le.x,F=I.pageY-le.y,Me=Math.sqrt(Ne*Ne+F*F);d.set(0,Me)}function W(I){i.enableZoom&&ke(I),i.enablePan&&Mt(I)}function Wt(I){i.enableZoom&&ke(I),i.enableRotate&&Ce(I)}function Ue(I){if(U.length==1)v.set(I.pageX,I.pageY);else{const Ne=Pe(I),F=.5*(I.pageX+Ne.x),Me=.5*(I.pageY+Ne.y);v.set(F,Me)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;ge(2*Math.PI*x.x/le.clientHeight),he(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function je(I){if(U.length===1)w.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);w.set(Ne,F)}m.subVectors(w,y).multiplyScalar(i.panSpeed),ee(m.x,m.y),y.copy(w)}function Ve(I){const le=Pe(I),Ne=I.pageX-le.x,F=I.pageY-le.y,Me=Math.sqrt(Ne*Ne+F*F);P.set(0,Me),T.set(0,Math.pow(P.y/d.y,i.zoomSpeed)),ce(T.y),d.copy(P);const Y=(I.pageX+le.x)*.5,ve=(I.pageY+le.y)*.5;ue(Y,ve)}function Qe(I){i.enableZoom&&Ve(I),i.enablePan&&je(I)}function tt(I){i.enableZoom&&Ve(I),i.enableRotate&&Ue(I)}function lt(I){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",bt),i.domElement.addEventListener("pointerup",C)),!rt(I)&&(Ee(I),I.pointerType==="touch"?ye(I):M(I)))}function bt(I){i.enabled!==!1&&(I.pointerType==="touch"?be(I):ne(I))}function C(I){switch(Nt(I),U.length){case 0:i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(gp),a=o.NONE;break;case 1:const le=U[0],Ne=j[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function M(I){let le;switch(I.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case jn.DOLLY:if(i.enableZoom===!1)return;De(I),a=o.DOLLY;break;case jn.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;et(I),a=o.PAN}else{if(i.enableRotate===!1)return;Se(I),a=o.ROTATE}break;case jn.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;Se(I),a=o.ROTATE}else{if(i.enablePan===!1)return;et(I),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function ne(I){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;te(I);break;case o.DOLLY:if(i.enableZoom===!1)return;pe(I);break;case o.PAN:if(i.enablePan===!1)return;Re(I);break}}function oe(I){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(I.preventDefault(),i.dispatchEvent(Wc),Ze(_e(I)),i.dispatchEvent(gp))}function _e(I){const le=I.deltaMode,Ne={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return I.ctrlKey&&!xe&&(Ne.deltaY*=10),Ne}function me(I){I.key==="Control"&&(xe=!0,i.domElement.getRootNode().addEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ke(I){I.key==="Control"&&(xe=!1,i.domElement.getRootNode().removeEventListener("keyup",Ke,{passive:!0,capture:!0}))}function He(I){i.enabled===!1||i.enablePan===!1||Oe(I)}function ye(I){switch(Ge(I),U.length){case 1:switch(i.touches.ONE){case rr.ROTATE:if(i.enableRotate===!1)return;Ce(I),a=o.TOUCH_ROTATE;break;case rr.PAN:if(i.enablePan===!1)return;Mt(I),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(I),a=o.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(I),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function be(I){switch(Ge(I),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(I),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;je(I),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Qe(I),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(I),i.update();break;default:a=o.NONE}}function Je(I){i.enabled!==!1&&I.preventDefault()}function Ee(I){U.push(I.pointerId)}function Nt(I){delete j[I.pointerId];for(let le=0;le<U.length;le++)if(U[le]==I.pointerId){U.splice(le,1);return}}function rt(I){for(let le=0;le<U.length;le++)if(U[le]==I.pointerId)return!0;return!1}function Ge(I){let le=j[I.pointerId];le===void 0&&(le=new at,j[I.pointerId]=le),le.set(I.pageX,I.pageY)}function Pe(I){const le=I.pointerId===U[0]?U[1]:U[0];return j[le]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",lt),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Xa.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,g="__lodash_placeholder__",_=1,v=2,x=4,y=1,w=2,m=1,d=2,P=4,T=8,L=16,G=32,B=64,U=128,j=256,xe=512,b=30,N="...",ge=800,he=16,O=1,J=2,ee=3,ce=1/0,ie=9007199254740991,ue=17976931348623157e292,fe=NaN,Se=4294967295,De=Se-1,et=Se>>>1,te=[["ary",U],["bind",m],["bindKey",d],["curry",T],["curryRight",L],["flip",xe],["partial",G],["partialRight",B],["rearg",j]],pe="[object Arguments]",Re="[object Array]",Ze="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",Mt="[object DOMException]",ke="[object Error]",W="[object Function]",Wt="[object GeneratorFunction]",Ue="[object Map]",je="[object Number]",Ve="[object Null]",Qe="[object Object]",tt="[object Promise]",lt="[object Proxy]",bt="[object RegExp]",C="[object Set]",M="[object String]",ne="[object Symbol]",oe="[object Undefined]",_e="[object WeakMap]",me="[object WeakSet]",Ke="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",be="[object Float64Array]",Je="[object Int8Array]",Ee="[object Int16Array]",Nt="[object Int32Array]",rt="[object Uint8Array]",Ge="[object Uint8ClampedArray]",Pe="[object Uint16Array]",Fe="[object Uint32Array]",I=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,Y=RegExp(F.source),ve=RegExp(Me.source),we=/<%-([\s\S]+?)%>/g,ht=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/[\\^$.*+?()[\]{}|]/g,nn=RegExp(Ct.source),Jn=/^\s+/,Gr=/\s/,Hr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,vo=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,xo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,So=/[()=,{}\[\]\/\s]/,el=/\\(\\)?/g,tl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mo=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,K=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",ut="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",Ht=ut+nt+st,un="\\u2700-\\u27bf",qt="a-z\\xdf-\\xf6\\xf8-\\xff",Qn="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ct="\\u2000-\\u206f",Os=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",fi="\\ufe0e\\ufe0f",Fs=Qn+Ft+ct+Os,Ei="['’]",Bs="["+Ye+"]",jt="["+Fs+"]",Hn="["+Ht+"]",kr="\\d+",bn="["+un+"]",Wr="["+qt+"]",Eo="[^"+Ye+Fs+kr+un+qt+Dt+"]",Xr="\\ud83c[\\udffb-\\udfff]",pm="(?:"+Hn+"|"+Xr+")",_u="[^"+Ye+"]",nl="(?:\\ud83c[\\udde6-\\uddff]){2}",il="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="["+Dt+"]",vu="\\u200d",xu="(?:"+Wr+"|"+Eo+")",mm="(?:"+Yr+"|"+Eo+")",Su="(?:"+Ei+"(?:d|ll|m|re|s|t|ve))?",Mu="(?:"+Ei+"(?:D|LL|M|RE|S|T|VE))?",Eu=pm+"?",yu="["+fi+"]?",gm="(?:"+vu+"(?:"+[_u,nl,il].join("|")+")"+yu+Eu+")*",_m="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Tu=yu+Eu+gm,xm="(?:"+[bn,nl,il].join("|")+")"+Tu,Sm="(?:"+[_u+Hn+"?",Hn,nl,il,Bs].join("|")+")",Mm=RegExp(Ei,"g"),Em=RegExp(Hn,"g"),rl=RegExp(Xr+"(?="+Xr+")|"+Sm+Tu,"g"),ym=RegExp([Yr+"?"+Wr+"+"+Su+"(?="+[jt,Yr,"$"].join("|")+")",mm+"+"+Mu+"(?="+[jt,Yr+xu,"$"].join("|")+")",Yr+"?"+xu+"+"+Su,Yr+"+"+Mu,vm,_m,kr,xm].join("|"),"g"),Tm=RegExp("["+vu+Ye+Ht+fi+"]"),bm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Am=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wm=-1,Bt={};Bt[ye]=Bt[be]=Bt[Je]=Bt[Ee]=Bt[Nt]=Bt[rt]=Bt[Ge]=Bt[Pe]=Bt[Fe]=!0,Bt[pe]=Bt[Re]=Bt[Ke]=Bt[Oe]=Bt[He]=Bt[Ce]=Bt[ke]=Bt[W]=Bt[Ue]=Bt[je]=Bt[Qe]=Bt[bt]=Bt[C]=Bt[M]=Bt[_e]=!1;var Ot={};Ot[pe]=Ot[Re]=Ot[Ke]=Ot[He]=Ot[Oe]=Ot[Ce]=Ot[ye]=Ot[be]=Ot[Je]=Ot[Ee]=Ot[Nt]=Ot[Ue]=Ot[je]=Ot[Qe]=Ot[bt]=Ot[C]=Ot[M]=Ot[ne]=Ot[rt]=Ot[Ge]=Ot[Pe]=Ot[Fe]=!0,Ot[ke]=Ot[W]=Ot[_e]=!1;var Rm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Im=parseFloat,Dm=parseInt,bu=typeof ao=="object"&&ao&&ao.Object===Object&&ao,Um=typeof self=="object"&&self&&self.Object===Object&&self,on=bu||Um||Function("return this")(),sl=e&&!e.nodeType&&e,mr=sl&&!0&&r&&!r.nodeType&&r,Au=mr&&mr.exports===sl,ol=Au&&bu.process,Vn=function(){try{var H=mr&&mr.require&&mr.require("util").types;return H||ol&&ol.binding&&ol.binding("util")}catch{}}(),wu=Vn&&Vn.isArrayBuffer,Ru=Vn&&Vn.isDate,Cu=Vn&&Vn.isMap,Lu=Vn&&Vn.isRegExp,Pu=Vn&&Vn.isSet,Iu=Vn&&Vn.isTypedArray;function In(H,re,Z){switch(Z.length){case 0:return H.call(re);case 1:return H.call(re,Z[0]);case 2:return H.call(re,Z[0],Z[1]);case 3:return H.call(re,Z[0],Z[1],Z[2])}return H.apply(re,Z)}function Nm(H,re,Z,Ie){for(var it=-1,At=H==null?0:H.length;++it<At;){var Jt=H[it];re(Ie,Jt,Z(Jt),H)}return Ie}function kn(H,re){for(var Z=-1,Ie=H==null?0:H.length;++Z<Ie&&re(H[Z],Z,H)!==!1;);return H}function Om(H,re){for(var Z=H==null?0:H.length;Z--&&re(H[Z],Z,H)!==!1;);return H}function Du(H,re){for(var Z=-1,Ie=H==null?0:H.length;++Z<Ie;)if(!re(H[Z],Z,H))return!1;return!0}function Hi(H,re){for(var Z=-1,Ie=H==null?0:H.length,it=0,At=[];++Z<Ie;){var Jt=H[Z];re(Jt,Z,H)&&(At[it++]=Jt)}return At}function yo(H,re){var Z=H==null?0:H.length;return!!Z&&qr(H,re,0)>-1}function al(H,re,Z){for(var Ie=-1,it=H==null?0:H.length;++Ie<it;)if(Z(re,H[Ie]))return!0;return!1}function Vt(H,re){for(var Z=-1,Ie=H==null?0:H.length,it=Array(Ie);++Z<Ie;)it[Z]=re(H[Z],Z,H);return it}function Vi(H,re){for(var Z=-1,Ie=re.length,it=H.length;++Z<Ie;)H[it+Z]=re[Z];return H}function ll(H,re,Z,Ie){var it=-1,At=H==null?0:H.length;for(Ie&&At&&(Z=H[++it]);++it<At;)Z=re(Z,H[it],it,H);return Z}function Fm(H,re,Z,Ie){var it=H==null?0:H.length;for(Ie&&it&&(Z=H[--it]);it--;)Z=re(Z,H[it],it,H);return Z}function cl(H,re){for(var Z=-1,Ie=H==null?0:H.length;++Z<Ie;)if(re(H[Z],Z,H))return!0;return!1}var Bm=ul("length");function zm(H){return H.split("")}function Gm(H){return H.match(xo)||[]}function Uu(H,re,Z){var Ie;return Z(H,function(it,At,Jt){if(re(it,At,Jt))return Ie=At,!1}),Ie}function To(H,re,Z,Ie){for(var it=H.length,At=Z+(Ie?1:-1);Ie?At--:++At<it;)if(re(H[At],At,H))return At;return-1}function qr(H,re,Z){return re===re?Jm(H,re,Z):To(H,Nu,Z)}function Hm(H,re,Z,Ie){for(var it=Z-1,At=H.length;++it<At;)if(Ie(H[it],re))return it;return-1}function Nu(H){return H!==H}function Ou(H,re){var Z=H==null?0:H.length;return Z?hl(H,re)/Z:fe}function ul(H){return function(re){return re==null?t:re[H]}}function fl(H){return function(re){return H==null?t:H[re]}}function Fu(H,re,Z,Ie,it){return it(H,function(At,Jt,Ut){Z=Ie?(Ie=!1,At):re(Z,At,Jt,Ut)}),Z}function Vm(H,re){var Z=H.length;for(H.sort(re);Z--;)H[Z]=H[Z].value;return H}function hl(H,re){for(var Z,Ie=-1,it=H.length;++Ie<it;){var At=re(H[Ie]);At!==t&&(Z=Z===t?At:Z+At)}return Z}function dl(H,re){for(var Z=-1,Ie=Array(H);++Z<H;)Ie[Z]=re(Z);return Ie}function km(H,re){return Vt(re,function(Z){return[Z,H[Z]]})}function Bu(H){return H&&H.slice(0,Vu(H)+1).replace(Jn,"")}function Dn(H){return function(re){return H(re)}}function pl(H,re){return Vt(re,function(Z){return H[Z]})}function zs(H,re){return H.has(re)}function zu(H,re){for(var Z=-1,Ie=H.length;++Z<Ie&&qr(re,H[Z],0)>-1;);return Z}function Gu(H,re){for(var Z=H.length;Z--&&qr(re,H[Z],0)>-1;);return Z}function Wm(H,re){for(var Z=H.length,Ie=0;Z--;)H[Z]===re&&++Ie;return Ie}var Xm=fl(Rm),Ym=fl(Cm);function qm(H){return"\\"+Pm[H]}function $m(H,re){return H==null?t:H[re]}function $r(H){return Tm.test(H)}function Km(H){return bm.test(H)}function Zm(H){for(var re,Z=[];!(re=H.next()).done;)Z.push(re.value);return Z}function ml(H){var re=-1,Z=Array(H.size);return H.forEach(function(Ie,it){Z[++re]=[it,Ie]}),Z}function Hu(H,re){return function(Z){return H(re(Z))}}function ki(H,re){for(var Z=-1,Ie=H.length,it=0,At=[];++Z<Ie;){var Jt=H[Z];(Jt===re||Jt===g)&&(H[Z]=g,At[it++]=Z)}return At}function bo(H){var re=-1,Z=Array(H.size);return H.forEach(function(Ie){Z[++re]=Ie}),Z}function jm(H){var re=-1,Z=Array(H.size);return H.forEach(function(Ie){Z[++re]=[Ie,Ie]}),Z}function Jm(H,re,Z){for(var Ie=Z-1,it=H.length;++Ie<it;)if(H[Ie]===re)return Ie;return-1}function Qm(H,re,Z){for(var Ie=Z+1;Ie--;)if(H[Ie]===re)return Ie;return Ie}function Kr(H){return $r(H)?tg(H):Bm(H)}function ei(H){return $r(H)?ng(H):zm(H)}function Vu(H){for(var re=H.length;re--&&Gr.test(H.charAt(re)););return re}var eg=fl(Lm);function tg(H){for(var re=rl.lastIndex=0;rl.test(H);)++re;return re}function ng(H){return H.match(rl)||[]}function ig(H){return H.match(ym)||[]}var rg=function H(re){re=re==null?on:Zr.defaults(on.Object(),re,Zr.pick(on,Am));var Z=re.Array,Ie=re.Date,it=re.Error,At=re.Function,Jt=re.Math,Ut=re.Object,gl=re.RegExp,sg=re.String,Wn=re.TypeError,Ao=Z.prototype,og=At.prototype,jr=Ut.prototype,wo=re["__core-js_shared__"],Ro=og.toString,Lt=jr.hasOwnProperty,ag=0,ku=function(){var n=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Co=jr.toString,lg=Ro.call(Ut),cg=on._,ug=gl("^"+Ro.call(Lt).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=Au?re.Buffer:t,Wi=re.Symbol,Po=re.Uint8Array,Wu=Lo?Lo.allocUnsafe:t,Io=Hu(Ut.getPrototypeOf,Ut),Xu=Ut.create,Yu=jr.propertyIsEnumerable,Do=Ao.splice,qu=Wi?Wi.isConcatSpreadable:t,Gs=Wi?Wi.iterator:t,gr=Wi?Wi.toStringTag:t,Uo=function(){try{var n=Mr(Ut,"defineProperty");return n({},"",{}),n}catch{}}(),fg=re.clearTimeout!==on.clearTimeout&&re.clearTimeout,hg=Ie&&Ie.now!==on.Date.now&&Ie.now,dg=re.setTimeout!==on.setTimeout&&re.setTimeout,No=Jt.ceil,Oo=Jt.floor,_l=Ut.getOwnPropertySymbols,pg=Lo?Lo.isBuffer:t,$u=re.isFinite,mg=Ao.join,gg=Hu(Ut.keys,Ut),Qt=Jt.max,fn=Jt.min,_g=Ie.now,vg=re.parseInt,Ku=Jt.random,xg=Ao.reverse,vl=Mr(re,"DataView"),Hs=Mr(re,"Map"),xl=Mr(re,"Promise"),Jr=Mr(re,"Set"),Vs=Mr(re,"WeakMap"),ks=Mr(Ut,"create"),Fo=Vs&&new Vs,Qr={},Sg=Er(vl),Mg=Er(Hs),Eg=Er(xl),yg=Er(Jr),Tg=Er(Vs),Bo=Wi?Wi.prototype:t,Ws=Bo?Bo.valueOf:t,Zu=Bo?Bo.toString:t;function E(n){if(Xt(n)&&!ot(n)&&!(n instanceof xt)){if(n instanceof Xn)return n;if(Lt.call(n,"__wrapped__"))return Jf(n)}return new Xn(n)}var es=function(){function n(){}return function(s){if(!kt(s))return{};if(Xu)return Xu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function zo(){}function Xn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}E.templateSettings={escape:we,evaluate:ht,interpolate:yt,variable:"",imports:{_:E}},E.prototype=zo.prototype,E.prototype.constructor=E,Xn.prototype=es(zo.prototype),Xn.prototype.constructor=Xn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function bg(){var n=new xt(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function Ag(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function wg(){var n=this.__wrapped__.value(),s=this.__dir__,l=ot(n),h=s<0,S=l?n.length:0,A=z_(0,S,this.__views__),D=A.start,z=A.end,V=z-D,se=h?z:D-1,ae=this.__iteratees__,de=ae.length,Ae=0,ze=fn(V,this.__takeCount__);if(!l||!h&&S==V&&ze==V)return Mf(n,this.__actions__);var qe=[];e:for(;V--&&Ae<ze;){se+=s;for(var dt=-1,$e=n[se];++dt<de;){var vt=ae[dt],St=vt.iteratee,On=vt.type,vn=St($e);if(On==J)$e=vn;else if(!vn){if(On==O)continue e;break e}}qe[Ae++]=$e}return qe}xt.prototype=es(zo.prototype),xt.prototype.constructor=xt;function _r(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Rg(){this.__data__=ks?ks(null):{},this.size=0}function Cg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Lg(n){var s=this.__data__;if(ks){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function Pg(n){var s=this.__data__;return ks?s[n]!==t:Lt.call(s,n)}function Ig(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=ks&&s===t?f:s,this}_r.prototype.clear=Rg,_r.prototype.delete=Cg,_r.prototype.get=Lg,_r.prototype.has=Pg,_r.prototype.set=Ig;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Dg(){this.__data__=[],this.size=0}function Ug(n){var s=this.__data__,l=Go(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Do.call(s,l,1),--this.size,!0}function Ng(n){var s=this.__data__,l=Go(s,n);return l<0?t:s[l][1]}function Og(n){return Go(this.__data__,n)>-1}function Fg(n,s){var l=this.__data__,h=Go(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}yi.prototype.clear=Dg,yi.prototype.delete=Ug,yi.prototype.get=Ng,yi.prototype.has=Og,yi.prototype.set=Fg;function Ti(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Bg(){this.size=0,this.__data__={hash:new _r,map:new(Hs||yi),string:new _r}}function zg(n){var s=Jo(this,n).delete(n);return this.size-=s?1:0,s}function Gg(n){return Jo(this,n).get(n)}function Hg(n){return Jo(this,n).has(n)}function Vg(n,s){var l=Jo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}Ti.prototype.clear=Bg,Ti.prototype.delete=zg,Ti.prototype.get=Gg,Ti.prototype.has=Hg,Ti.prototype.set=Vg;function vr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ti;++s<l;)this.add(n[s])}function kg(n){return this.__data__.set(n,f),this}function Wg(n){return this.__data__.has(n)}vr.prototype.add=vr.prototype.push=kg,vr.prototype.has=Wg;function ti(n){var s=this.__data__=new yi(n);this.size=s.size}function Xg(){this.__data__=new yi,this.size=0}function Yg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function qg(n){return this.__data__.get(n)}function $g(n){return this.__data__.has(n)}function Kg(n,s){var l=this.__data__;if(l instanceof yi){var h=l.__data__;if(!Hs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ti(h)}return l.set(n,s),this.size=l.size,this}ti.prototype.clear=Xg,ti.prototype.delete=Yg,ti.prototype.get=qg,ti.prototype.has=$g,ti.prototype.set=Kg;function ju(n,s){var l=ot(n),h=!l&&yr(n),S=!l&&!h&&Ki(n),A=!l&&!h&&!S&&rs(n),D=l||h||S||A,z=D?dl(n.length,sg):[],V=z.length;for(var se in n)(s||Lt.call(n,se))&&!(D&&(se=="length"||S&&(se=="offset"||se=="parent")||A&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Ri(se,V)))&&z.push(se);return z}function Ju(n){var s=n.length;return s?n[Ll(0,s-1)]:t}function Zg(n,s){return Qo(An(n),xr(s,0,n.length))}function jg(n){return Qo(An(n))}function Sl(n,s,l){(l!==t&&!ni(n[s],l)||l===t&&!(s in n))&&bi(n,s,l)}function Xs(n,s,l){var h=n[s];(!(Lt.call(n,s)&&ni(h,l))||l===t&&!(s in n))&&bi(n,s,l)}function Go(n,s){for(var l=n.length;l--;)if(ni(n[l][0],s))return l;return-1}function Jg(n,s,l,h){return Xi(n,function(S,A,D){s(h,S,l(S),D)}),h}function Qu(n,s){return n&&di(s,rn(s),n)}function Qg(n,s){return n&&di(s,Rn(s),n)}function bi(n,s,l){s=="__proto__"&&Uo?Uo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Ml(n,s){for(var l=-1,h=s.length,S=Z(h),A=n==null;++l<h;)S[l]=A?t:tc(n,s[l]);return S}function xr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,S,A){var D,z=s&_,V=s&v,se=s&x;if(l&&(D=S?l(n,h,S,A):l(n)),D!==t)return D;if(!kt(n))return n;var ae=ot(n);if(ae){if(D=H_(n),!z)return An(n,D)}else{var de=hn(n),Ae=de==W||de==Wt;if(Ki(n))return Tf(n,z);if(de==Qe||de==pe||Ae&&!S){if(D=V||Ae?{}:kf(n),!z)return V?L_(n,Qg(D,n)):C_(n,Qu(D,n))}else{if(!Ot[de])return S?n:{};D=V_(n,de,z)}}A||(A=new ti);var ze=A.get(n);if(ze)return ze;A.set(n,D),vh(n)?n.forEach(function($e){D.add(Yn($e,s,l,$e,n,A))}):gh(n)&&n.forEach(function($e,vt){D.set(vt,Yn($e,s,l,vt,n,A))});var qe=se?V?Hl:Gl:V?Rn:rn,dt=ae?t:qe(n);return kn(dt||n,function($e,vt){dt&&(vt=$e,$e=n[vt]),Xs(D,vt,Yn($e,s,l,vt,n,A))}),D}function e_(n){var s=rn(n);return function(l){return ef(l,n,s)}}function ef(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ut(n);h--;){var S=l[h],A=s[S],D=n[S];if(D===t&&!(S in n)||!A(D))return!1}return!0}function tf(n,s,l){if(typeof n!="function")throw new Wn(u);return Js(function(){n.apply(t,l)},s)}function Ys(n,s,l,h){var S=-1,A=yo,D=!0,z=n.length,V=[],se=s.length;if(!z)return V;l&&(s=Vt(s,Dn(l))),h?(A=al,D=!1):s.length>=o&&(A=zs,D=!1,s=new vr(s));e:for(;++S<z;){var ae=n[S],de=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,D&&de===de){for(var Ae=se;Ae--;)if(s[Ae]===de)continue e;V.push(ae)}else A(s,de,h)||V.push(ae)}return V}var Xi=Cf(hi),nf=Cf(yl,!0);function t_(n,s){var l=!0;return Xi(n,function(h,S,A){return l=!!s(h,S,A),l}),l}function Ho(n,s,l){for(var h=-1,S=n.length;++h<S;){var A=n[h],D=s(A);if(D!=null&&(z===t?D===D&&!Nn(D):l(D,z)))var z=D,V=A}return V}function n_(n,s,l,h){var S=n.length;for(l=ft(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ft(h),h<0&&(h+=S),h=l>h?0:Sh(h);l<h;)n[l++]=s;return n}function rf(n,s){var l=[];return Xi(n,function(h,S,A){s(h,S,A)&&l.push(h)}),l}function an(n,s,l,h,S){var A=-1,D=n.length;for(l||(l=W_),S||(S=[]);++A<D;){var z=n[A];s>0&&l(z)?s>1?an(z,s-1,l,h,S):Vi(S,z):h||(S[S.length]=z)}return S}var El=Lf(),sf=Lf(!0);function hi(n,s){return n&&El(n,s,rn)}function yl(n,s){return n&&sf(n,s,rn)}function Vo(n,s){return Hi(s,function(l){return Ci(n[l])})}function Sr(n,s){s=qi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[pi(s[l++])];return l&&l==h?n:t}function of(n,s,l){var h=s(n);return ot(n)?h:Vi(h,l(n))}function gn(n){return n==null?n===t?oe:Ve:gr&&gr in Ut(n)?B_(n):j_(n)}function Tl(n,s){return n>s}function i_(n,s){return n!=null&&Lt.call(n,s)}function r_(n,s){return n!=null&&s in Ut(n)}function s_(n,s,l){return n>=fn(s,l)&&n<Qt(s,l)}function bl(n,s,l){for(var h=l?al:yo,S=n[0].length,A=n.length,D=A,z=Z(A),V=1/0,se=[];D--;){var ae=n[D];D&&s&&(ae=Vt(ae,Dn(s))),V=fn(ae.length,V),z[D]=!l&&(s||S>=120&&ae.length>=120)?new vr(D&&ae):t}ae=n[0];var de=-1,Ae=z[0];e:for(;++de<S&&se.length<V;){var ze=ae[de],qe=s?s(ze):ze;if(ze=l||ze!==0?ze:0,!(Ae?zs(Ae,qe):h(se,qe,l))){for(D=A;--D;){var dt=z[D];if(!(dt?zs(dt,qe):h(n[D],qe,l)))continue e}Ae&&Ae.push(qe),se.push(ze)}}return se}function o_(n,s,l,h){return hi(n,function(S,A,D){s(h,l(S),A,D)}),h}function qs(n,s,l){s=qi(s,n),n=qf(n,s);var h=n==null?n:n[pi($n(s))];return h==null?t:In(h,n,l)}function af(n){return Xt(n)&&gn(n)==pe}function a_(n){return Xt(n)&&gn(n)==Ke}function l_(n){return Xt(n)&&gn(n)==Ce}function $s(n,s,l,h,S){return n===s?!0:n==null||s==null||!Xt(n)&&!Xt(s)?n!==n&&s!==s:c_(n,s,l,h,$s,S)}function c_(n,s,l,h,S,A){var D=ot(n),z=ot(s),V=D?Re:hn(n),se=z?Re:hn(s);V=V==pe?Qe:V,se=se==pe?Qe:se;var ae=V==Qe,de=se==Qe,Ae=V==se;if(Ae&&Ki(n)){if(!Ki(s))return!1;D=!0,ae=!1}if(Ae&&!ae)return A||(A=new ti),D||rs(n)?Gf(n,s,l,h,S,A):O_(n,s,V,l,h,S,A);if(!(l&y)){var ze=ae&&Lt.call(n,"__wrapped__"),qe=de&&Lt.call(s,"__wrapped__");if(ze||qe){var dt=ze?n.value():n,$e=qe?s.value():s;return A||(A=new ti),S(dt,$e,l,h,A)}}return Ae?(A||(A=new ti),F_(n,s,l,h,S,A)):!1}function u_(n){return Xt(n)&&hn(n)==Ue}function Al(n,s,l,h){var S=l.length,A=S,D=!h;if(n==null)return!A;for(n=Ut(n);S--;){var z=l[S];if(D&&z[2]?z[1]!==n[z[0]]:!(z[0]in n))return!1}for(;++S<A;){z=l[S];var V=z[0],se=n[V],ae=z[1];if(D&&z[2]){if(se===t&&!(V in n))return!1}else{var de=new ti;if(h)var Ae=h(se,ae,V,n,s,de);if(!(Ae===t?$s(ae,se,y|w,h,de):Ae))return!1}}return!0}function lf(n){if(!kt(n)||Y_(n))return!1;var s=Ci(n)?ug:K;return s.test(Er(n))}function f_(n){return Xt(n)&&gn(n)==bt}function h_(n){return Xt(n)&&hn(n)==C}function d_(n){return Xt(n)&&sa(n.length)&&!!Bt[gn(n)]}function cf(n){return typeof n=="function"?n:n==null?Cn:typeof n=="object"?ot(n)?hf(n[0],n[1]):ff(n):Ph(n)}function wl(n){if(!js(n))return gg(n);var s=[];for(var l in Ut(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function p_(n){if(!kt(n))return Z_(n);var s=js(n),l=[];for(var h in n)h=="constructor"&&(s||!Lt.call(n,h))||l.push(h);return l}function Rl(n,s){return n<s}function uf(n,s){var l=-1,h=wn(n)?Z(n.length):[];return Xi(n,function(S,A,D){h[++l]=s(S,A,D)}),h}function ff(n){var s=kl(n);return s.length==1&&s[0][2]?Xf(s[0][0],s[0][1]):function(l){return l===n||Al(l,n,s)}}function hf(n,s){return Xl(n)&&Wf(s)?Xf(pi(n),s):function(l){var h=tc(l,n);return h===t&&h===s?nc(l,n):$s(s,h,y|w)}}function ko(n,s,l,h,S){n!==s&&El(s,function(A,D){if(S||(S=new ti),kt(A))m_(n,s,D,l,ko,h,S);else{var z=h?h(ql(n,D),A,D+"",n,s,S):t;z===t&&(z=A),Sl(n,D,z)}},Rn)}function m_(n,s,l,h,S,A,D){var z=ql(n,l),V=ql(s,l),se=D.get(V);if(se){Sl(n,l,se);return}var ae=A?A(z,V,l+"",n,s,D):t,de=ae===t;if(de){var Ae=ot(V),ze=!Ae&&Ki(V),qe=!Ae&&!ze&&rs(V);ae=V,Ae||ze||qe?ot(z)?ae=z:$t(z)?ae=An(z):ze?(de=!1,ae=Tf(V,!0)):qe?(de=!1,ae=bf(V,!0)):ae=[]:Qs(V)||yr(V)?(ae=z,yr(z)?ae=Mh(z):(!kt(z)||Ci(z))&&(ae=kf(V))):de=!1}de&&(D.set(V,ae),S(ae,V,h,A,D),D.delete(V)),Sl(n,l,ae)}function df(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ri(s,l)?n[s]:t}function pf(n,s,l){s.length?s=Vt(s,function(A){return ot(A)?function(D){return Sr(D,A.length===1?A[0]:A)}:A}):s=[Cn];var h=-1;s=Vt(s,Dn(We()));var S=uf(n,function(A,D,z){var V=Vt(s,function(se){return se(A)});return{criteria:V,index:++h,value:A}});return Vm(S,function(A,D){return R_(A,D,l)})}function g_(n,s){return mf(n,s,function(l,h){return nc(n,h)})}function mf(n,s,l){for(var h=-1,S=s.length,A={};++h<S;){var D=s[h],z=Sr(n,D);l(z,D)&&Ks(A,qi(D,n),z)}return A}function __(n){return function(s){return Sr(s,n)}}function Cl(n,s,l,h){var S=h?Hm:qr,A=-1,D=s.length,z=n;for(n===s&&(s=An(s)),l&&(z=Vt(n,Dn(l)));++A<D;)for(var V=0,se=s[A],ae=l?l(se):se;(V=S(z,ae,V,h))>-1;)z!==n&&Do.call(z,V,1),Do.call(n,V,1);return n}function gf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==A){var A=S;Ri(S)?Do.call(n,S,1):Dl(n,S)}}return n}function Ll(n,s){return n+Oo(Ku()*(s-n+1))}function v_(n,s,l,h){for(var S=-1,A=Qt(No((s-n)/(l||1)),0),D=Z(A);A--;)D[h?A:++S]=n,n+=l;return D}function Pl(n,s){var l="";if(!n||s<1||s>ie)return l;do s%2&&(l+=n),s=Oo(s/2),s&&(n+=n);while(s);return l}function _t(n,s){return $l(Yf(n,s,Cn),n+"")}function x_(n){return Ju(ss(n))}function S_(n,s){var l=ss(n);return Qo(l,xr(s,0,l.length))}function Ks(n,s,l,h){if(!kt(n))return n;s=qi(s,n);for(var S=-1,A=s.length,D=A-1,z=n;z!=null&&++S<A;){var V=pi(s[S]),se=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(S!=D){var ae=z[V];se=h?h(ae,V,z):t,se===t&&(se=kt(ae)?ae:Ri(s[S+1])?[]:{})}Xs(z,V,se),z=z[V]}return n}var _f=Fo?function(n,s){return Fo.set(n,s),n}:Cn,M_=Uo?function(n,s){return Uo(n,"toString",{configurable:!0,enumerable:!1,value:rc(s),writable:!0})}:Cn;function E_(n){return Qo(ss(n))}function qn(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var A=Z(S);++h<S;)A[h]=n[h+s];return A}function y_(n,s){var l;return Xi(n,function(h,S,A){return l=s(h,S,A),!l}),!!l}function Wo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=et){for(;h<S;){var A=h+S>>>1,D=n[A];D!==null&&!Nn(D)&&(l?D<=s:D<s)?h=A+1:S=A}return S}return Il(n,s,Cn,l)}function Il(n,s,l,h){var S=0,A=n==null?0:n.length;if(A===0)return 0;s=l(s);for(var D=s!==s,z=s===null,V=Nn(s),se=s===t;S<A;){var ae=Oo((S+A)/2),de=l(n[ae]),Ae=de!==t,ze=de===null,qe=de===de,dt=Nn(de);if(D)var $e=h||qe;else se?$e=qe&&(h||Ae):z?$e=qe&&Ae&&(h||!ze):V?$e=qe&&Ae&&!ze&&(h||!dt):ze||dt?$e=!1:$e=h?de<=s:de<s;$e?S=ae+1:A=ae}return fn(A,De)}function vf(n,s){for(var l=-1,h=n.length,S=0,A=[];++l<h;){var D=n[l],z=s?s(D):D;if(!l||!ni(z,V)){var V=z;A[S++]=D===0?0:D}}return A}function xf(n){return typeof n=="number"?n:Nn(n)?fe:+n}function Un(n){if(typeof n=="string")return n;if(ot(n))return Vt(n,Un)+"";if(Nn(n))return Zu?Zu.call(n):"";var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Yi(n,s,l){var h=-1,S=yo,A=n.length,D=!0,z=[],V=z;if(l)D=!1,S=al;else if(A>=o){var se=s?null:U_(n);if(se)return bo(se);D=!1,S=zs,V=new vr}else V=s?[]:z;e:for(;++h<A;){var ae=n[h],de=s?s(ae):ae;if(ae=l||ae!==0?ae:0,D&&de===de){for(var Ae=V.length;Ae--;)if(V[Ae]===de)continue e;s&&V.push(de),z.push(ae)}else S(V,de,l)||(V!==z&&V.push(de),z.push(ae))}return z}function Dl(n,s){return s=qi(s,n),n=qf(n,s),n==null||delete n[pi($n(s))]}function Sf(n,s,l,h){return Ks(n,s,l(Sr(n,s)),h)}function Xo(n,s,l,h){for(var S=n.length,A=h?S:-1;(h?A--:++A<S)&&s(n[A],A,n););return l?qn(n,h?0:A,h?A+1:S):qn(n,h?A+1:0,h?S:A)}function Mf(n,s){var l=n;return l instanceof xt&&(l=l.value()),ll(s,function(h,S){return S.func.apply(S.thisArg,Vi([h],S.args))},l)}function Ul(n,s,l){var h=n.length;if(h<2)return h?Yi(n[0]):[];for(var S=-1,A=Z(h);++S<h;)for(var D=n[S],z=-1;++z<h;)z!=S&&(A[S]=Ys(A[S]||D,n[z],s,l));return Yi(an(A,1),s,l)}function Ef(n,s,l){for(var h=-1,S=n.length,A=s.length,D={};++h<S;){var z=h<A?s[h]:t;l(D,n[h],z)}return D}function Nl(n){return $t(n)?n:[]}function Ol(n){return typeof n=="function"?n:Cn}function qi(n,s){return ot(n)?n:Xl(n,s)?[n]:jf(wt(n))}var T_=_t;function $i(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:qn(n,s,l)}var yf=fg||function(n){return on.clearTimeout(n)};function Tf(n,s){if(s)return n.slice();var l=n.length,h=Wu?Wu(l):new n.constructor(l);return n.copy(h),h}function Fl(n){var s=new n.constructor(n.byteLength);return new Po(s).set(new Po(n)),s}function b_(n,s){var l=s?Fl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function A_(n){var s=new n.constructor(n.source,Mo.exec(n));return s.lastIndex=n.lastIndex,s}function w_(n){return Ws?Ut(Ws.call(n)):{}}function bf(n,s){var l=s?Fl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Af(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,A=Nn(n),D=s!==t,z=s===null,V=s===s,se=Nn(s);if(!z&&!se&&!A&&n>s||A&&D&&V&&!z&&!se||h&&D&&V||!l&&V||!S)return 1;if(!h&&!A&&!se&&n<s||se&&l&&S&&!h&&!A||z&&l&&S||!D&&S||!V)return-1}return 0}function R_(n,s,l){for(var h=-1,S=n.criteria,A=s.criteria,D=S.length,z=l.length;++h<D;){var V=Af(S[h],A[h]);if(V){if(h>=z)return V;var se=l[h];return V*(se=="desc"?-1:1)}}return n.index-s.index}function wf(n,s,l,h){for(var S=-1,A=n.length,D=l.length,z=-1,V=s.length,se=Qt(A-D,0),ae=Z(V+se),de=!h;++z<V;)ae[z]=s[z];for(;++S<D;)(de||S<A)&&(ae[l[S]]=n[S]);for(;se--;)ae[z++]=n[S++];return ae}function Rf(n,s,l,h){for(var S=-1,A=n.length,D=-1,z=l.length,V=-1,se=s.length,ae=Qt(A-z,0),de=Z(ae+se),Ae=!h;++S<ae;)de[S]=n[S];for(var ze=S;++V<se;)de[ze+V]=s[V];for(;++D<z;)(Ae||S<A)&&(de[ze+l[D]]=n[S++]);return de}function An(n,s){var l=-1,h=n.length;for(s||(s=Z(h));++l<h;)s[l]=n[l];return s}function di(n,s,l,h){var S=!l;l||(l={});for(var A=-1,D=s.length;++A<D;){var z=s[A],V=h?h(l[z],n[z],z,l,n):t;V===t&&(V=n[z]),S?bi(l,z,V):Xs(l,z,V)}return l}function C_(n,s){return di(n,Wl(n),s)}function L_(n,s){return di(n,Hf(n),s)}function Yo(n,s){return function(l,h){var S=ot(l)?Nm:Jg,A=s?s():{};return S(l,n,We(h,2),A)}}function ts(n){return _t(function(s,l){var h=-1,S=l.length,A=S>1?l[S-1]:t,D=S>2?l[2]:t;for(A=n.length>3&&typeof A=="function"?(S--,A):t,D&&_n(l[0],l[1],D)&&(A=S<3?t:A,S=1),s=Ut(s);++h<S;){var z=l[h];z&&n(s,z,h,A)}return s})}function Cf(n,s){return function(l,h){if(l==null)return l;if(!wn(l))return n(l,h);for(var S=l.length,A=s?S:-1,D=Ut(l);(s?A--:++A<S)&&h(D[A],A,D)!==!1;);return l}}function Lf(n){return function(s,l,h){for(var S=-1,A=Ut(s),D=h(s),z=D.length;z--;){var V=D[n?z:++S];if(l(A[V],V,A)===!1)break}return s}}function P_(n,s,l){var h=s&m,S=Zs(n);function A(){var D=this&&this!==on&&this instanceof A?S:n;return D.apply(h?l:this,arguments)}return A}function Pf(n){return function(s){s=wt(s);var l=$r(s)?ei(s):t,h=l?l[0]:s.charAt(0),S=l?$i(l,1).join(""):s.slice(1);return h[n]()+S}}function ns(n){return function(s){return ll(Ch(Rh(s).replace(Mm,"")),n,"")}}function Zs(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=es(n.prototype),h=n.apply(l,s);return kt(h)?h:l}}function I_(n,s,l){var h=Zs(n);function S(){for(var A=arguments.length,D=Z(A),z=A,V=is(S);z--;)D[z]=arguments[z];var se=A<3&&D[0]!==V&&D[A-1]!==V?[]:ki(D,V);if(A-=se.length,A<l)return Of(n,s,qo,S.placeholder,t,D,se,t,t,l-A);var ae=this&&this!==on&&this instanceof S?h:n;return In(ae,this,D)}return S}function If(n){return function(s,l,h){var S=Ut(s);if(!wn(s)){var A=We(l,3);s=rn(s),l=function(z){return A(S[z],z,S)}}var D=n(s,l,h);return D>-1?S[A?s[D]:D]:t}}function Df(n){return wi(function(s){var l=s.length,h=l,S=Xn.prototype.thru;for(n&&s.reverse();h--;){var A=s[h];if(typeof A!="function")throw new Wn(u);if(S&&!D&&jo(A)=="wrapper")var D=new Xn([],!0)}for(h=D?h:l;++h<l;){A=s[h];var z=jo(A),V=z=="wrapper"?Vl(A):t;V&&Yl(V[0])&&V[1]==(U|T|G|j)&&!V[4].length&&V[9]==1?D=D[jo(V[0])].apply(D,V[3]):D=A.length==1&&Yl(A)?D[z]():D.thru(A)}return function(){var se=arguments,ae=se[0];if(D&&se.length==1&&ot(ae))return D.plant(ae).value();for(var de=0,Ae=l?s[de].apply(this,se):ae;++de<l;)Ae=s[de].call(this,Ae);return Ae}})}function qo(n,s,l,h,S,A,D,z,V,se){var ae=s&U,de=s&m,Ae=s&d,ze=s&(T|L),qe=s&xe,dt=Ae?t:Zs(n);function $e(){for(var vt=arguments.length,St=Z(vt),On=vt;On--;)St[On]=arguments[On];if(ze)var vn=is($e),Fn=Wm(St,vn);if(h&&(St=wf(St,h,S,ze)),A&&(St=Rf(St,A,D,ze)),vt-=Fn,ze&&vt<se){var Kt=ki(St,vn);return Of(n,s,qo,$e.placeholder,l,St,Kt,z,V,se-vt)}var ii=de?l:this,Pi=Ae?ii[n]:n;return vt=St.length,z?St=J_(St,z):qe&&vt>1&&St.reverse(),ae&&V<vt&&(St.length=V),this&&this!==on&&this instanceof $e&&(Pi=dt||Zs(Pi)),Pi.apply(ii,St)}return $e}function Uf(n,s){return function(l,h){return o_(l,n,s(h),{})}}function $o(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Un(l),h=Un(h)):(l=xf(l),h=xf(h)),S=n(l,h)}return S}}function Bl(n){return wi(function(s){return s=Vt(s,Dn(We())),_t(function(l){var h=this;return n(s,function(S){return In(S,h,l)})})})}function Ko(n,s){s=s===t?" ":Un(s);var l=s.length;if(l<2)return l?Pl(s,n):s;var h=Pl(s,No(n/Kr(s)));return $r(s)?$i(ei(h),0,n).join(""):h.slice(0,n)}function D_(n,s,l,h){var S=s&m,A=Zs(n);function D(){for(var z=-1,V=arguments.length,se=-1,ae=h.length,de=Z(ae+V),Ae=this&&this!==on&&this instanceof D?A:n;++se<ae;)de[se]=h[se];for(;V--;)de[se++]=arguments[++z];return In(Ae,S?l:this,de)}return D}function Nf(n){return function(s,l,h){return h&&typeof h!="number"&&_n(s,l,h)&&(l=h=t),s=Li(s),l===t?(l=s,s=0):l=Li(l),h=h===t?s<l?1:-1:Li(h),v_(s,l,h,n)}}function Zo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Kn(s),l=Kn(l)),n(s,l)}}function Of(n,s,l,h,S,A,D,z,V,se){var ae=s&T,de=ae?D:t,Ae=ae?t:D,ze=ae?A:t,qe=ae?t:A;s|=ae?G:B,s&=~(ae?B:G),s&P||(s&=~(m|d));var dt=[n,s,S,ze,de,qe,Ae,z,V,se],$e=l.apply(t,dt);return Yl(n)&&$f($e,dt),$e.placeholder=h,Kf($e,n,s)}function zl(n){var s=Jt[n];return function(l,h){if(l=Kn(l),h=h==null?0:fn(ft(h),292),h&&$u(l)){var S=(wt(l)+"e").split("e"),A=s(S[0]+"e"+(+S[1]+h));return S=(wt(A)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var U_=Jr&&1/bo(new Jr([,-0]))[1]==ce?function(n){return new Jr(n)}:ac;function Ff(n){return function(s){var l=hn(s);return l==Ue?ml(s):l==C?jm(s):km(s,n(s))}}function Ai(n,s,l,h,S,A,D,z){var V=s&d;if(!V&&typeof n!="function")throw new Wn(u);var se=h?h.length:0;if(se||(s&=~(G|B),h=S=t),D=D===t?D:Qt(ft(D),0),z=z===t?z:ft(z),se-=S?S.length:0,s&B){var ae=h,de=S;h=S=t}var Ae=V?t:Vl(n),ze=[n,s,l,h,S,ae,de,A,D,z];if(Ae&&K_(ze,Ae),n=ze[0],s=ze[1],l=ze[2],h=ze[3],S=ze[4],z=ze[9]=ze[9]===t?V?0:n.length:Qt(ze[9]-se,0),!z&&s&(T|L)&&(s&=~(T|L)),!s||s==m)var qe=P_(n,s,l);else s==T||s==L?qe=I_(n,s,z):(s==G||s==(m|G))&&!S.length?qe=D_(n,s,l,h):qe=qo.apply(t,ze);var dt=Ae?_f:$f;return Kf(dt(qe,ze),n,s)}function Bf(n,s,l,h){return n===t||ni(n,jr[l])&&!Lt.call(h,l)?s:n}function zf(n,s,l,h,S,A){return kt(n)&&kt(s)&&(A.set(s,n),ko(n,s,t,zf,A),A.delete(s)),n}function N_(n){return Qs(n)?t:n}function Gf(n,s,l,h,S,A){var D=l&y,z=n.length,V=s.length;if(z!=V&&!(D&&V>z))return!1;var se=A.get(n),ae=A.get(s);if(se&&ae)return se==s&&ae==n;var de=-1,Ae=!0,ze=l&w?new vr:t;for(A.set(n,s),A.set(s,n);++de<z;){var qe=n[de],dt=s[de];if(h)var $e=D?h(dt,qe,de,s,n,A):h(qe,dt,de,n,s,A);if($e!==t){if($e)continue;Ae=!1;break}if(ze){if(!cl(s,function(vt,St){if(!zs(ze,St)&&(qe===vt||S(qe,vt,l,h,A)))return ze.push(St)})){Ae=!1;break}}else if(!(qe===dt||S(qe,dt,l,h,A))){Ae=!1;break}}return A.delete(n),A.delete(s),Ae}function O_(n,s,l,h,S,A,D){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ke:return!(n.byteLength!=s.byteLength||!A(new Po(n),new Po(s)));case Oe:case Ce:case je:return ni(+n,+s);case ke:return n.name==s.name&&n.message==s.message;case bt:case M:return n==s+"";case Ue:var z=ml;case C:var V=h&y;if(z||(z=bo),n.size!=s.size&&!V)return!1;var se=D.get(n);if(se)return se==s;h|=w,D.set(n,s);var ae=Gf(z(n),z(s),h,S,A,D);return D.delete(n),ae;case ne:if(Ws)return Ws.call(n)==Ws.call(s)}return!1}function F_(n,s,l,h,S,A){var D=l&y,z=Gl(n),V=z.length,se=Gl(s),ae=se.length;if(V!=ae&&!D)return!1;for(var de=V;de--;){var Ae=z[de];if(!(D?Ae in s:Lt.call(s,Ae)))return!1}var ze=A.get(n),qe=A.get(s);if(ze&&qe)return ze==s&&qe==n;var dt=!0;A.set(n,s),A.set(s,n);for(var $e=D;++de<V;){Ae=z[de];var vt=n[Ae],St=s[Ae];if(h)var On=D?h(St,vt,Ae,s,n,A):h(vt,St,Ae,n,s,A);if(!(On===t?vt===St||S(vt,St,l,h,A):On)){dt=!1;break}$e||($e=Ae=="constructor")}if(dt&&!$e){var vn=n.constructor,Fn=s.constructor;vn!=Fn&&"constructor"in n&&"constructor"in s&&!(typeof vn=="function"&&vn instanceof vn&&typeof Fn=="function"&&Fn instanceof Fn)&&(dt=!1)}return A.delete(n),A.delete(s),dt}function wi(n){return $l(Yf(n,t,th),n+"")}function Gl(n){return of(n,rn,Wl)}function Hl(n){return of(n,Rn,Hf)}var Vl=Fo?function(n){return Fo.get(n)}:ac;function jo(n){for(var s=n.name+"",l=Qr[s],h=Lt.call(Qr,s)?l.length:0;h--;){var S=l[h],A=S.func;if(A==null||A==n)return S.name}return s}function is(n){var s=Lt.call(E,"placeholder")?E:n;return s.placeholder}function We(){var n=E.iteratee||sc;return n=n===sc?cf:n,arguments.length?n(arguments[0],arguments[1]):n}function Jo(n,s){var l=n.__data__;return X_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function kl(n){for(var s=rn(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Wf(S)]}return s}function Mr(n,s){var l=$m(n,s);return lf(l)?l:t}function B_(n){var s=Lt.call(n,gr),l=n[gr];try{n[gr]=t;var h=!0}catch{}var S=Co.call(n);return h&&(s?n[gr]=l:delete n[gr]),S}var Wl=_l?function(n){return n==null?[]:(n=Ut(n),Hi(_l(n),function(s){return Yu.call(n,s)}))}:lc,Hf=_l?function(n){for(var s=[];n;)Vi(s,Wl(n)),n=Io(n);return s}:lc,hn=gn;(vl&&hn(new vl(new ArrayBuffer(1)))!=He||Hs&&hn(new Hs)!=Ue||xl&&hn(xl.resolve())!=tt||Jr&&hn(new Jr)!=C||Vs&&hn(new Vs)!=_e)&&(hn=function(n){var s=gn(n),l=s==Qe?n.constructor:t,h=l?Er(l):"";if(h)switch(h){case Sg:return He;case Mg:return Ue;case Eg:return tt;case yg:return C;case Tg:return _e}return s});function z_(n,s,l){for(var h=-1,S=l.length;++h<S;){var A=l[h],D=A.size;switch(A.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=fn(s,n+D);break;case"takeRight":n=Qt(n,s-D);break}}return{start:n,end:s}}function G_(n){var s=n.match(vo);return s?s[1].split(Vr):[]}function Vf(n,s,l){s=qi(s,n);for(var h=-1,S=s.length,A=!1;++h<S;){var D=pi(s[h]);if(!(A=n!=null&&l(n,D)))break;n=n[D]}return A||++h!=S?A:(S=n==null?0:n.length,!!S&&sa(S)&&Ri(D,S)&&(ot(n)||yr(n)))}function H_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function kf(n){return typeof n.constructor=="function"&&!js(n)?es(Io(n)):{}}function V_(n,s,l){var h=n.constructor;switch(s){case Ke:return Fl(n);case Oe:case Ce:return new h(+n);case He:return b_(n,l);case ye:case be:case Je:case Ee:case Nt:case rt:case Ge:case Pe:case Fe:return bf(n,l);case Ue:return new h;case je:case M:return new h(n);case bt:return A_(n);case C:return new h;case ne:return w_(n)}}function k_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Hr,`{
/* [wrapped with `+s+`] */
`)}function W_(n){return ot(n)||yr(n)||!!(qu&&n&&n[qu])}function Ri(n,s){var l=typeof n;return s=s??ie,!!s&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<s}function _n(n,s,l){if(!kt(l))return!1;var h=typeof s;return(h=="number"?wn(l)&&Ri(s,l.length):h=="string"&&s in l)?ni(l[s],n):!1}function Xl(n,s){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:Gt.test(n)||!Rt.test(n)||s!=null&&n in Ut(s)}function X_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Yl(n){var s=jo(n),l=E[s];if(typeof l!="function"||!(s in xt.prototype))return!1;if(n===l)return!0;var h=Vl(l);return!!h&&n===h[0]}function Y_(n){return!!ku&&ku in n}var q_=wo?Ci:cc;function js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||jr;return n===l}function Wf(n){return n===n&&!kt(n)}function Xf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Ut(l))}}function $_(n){var s=ia(n,function(h){return l.size===p&&l.clear(),h}),l=s.cache;return s}function K_(n,s){var l=n[1],h=s[1],S=l|h,A=S<(m|d|U),D=h==U&&l==T||h==U&&l==j&&n[7].length<=s[8]||h==(U|j)&&s[7].length<=s[8]&&l==T;if(!(A||D))return n;h&m&&(n[2]=s[2],S|=l&m?0:P);var z=s[3];if(z){var V=n[3];n[3]=V?wf(V,z,s[4]):z,n[4]=V?ki(n[3],g):s[4]}return z=s[5],z&&(V=n[5],n[5]=V?Rf(V,z,s[6]):z,n[6]=V?ki(n[5],g):s[6]),z=s[7],z&&(n[7]=z),h&U&&(n[8]=n[8]==null?s[8]:fn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function Z_(n){var s=[];if(n!=null)for(var l in Ut(n))s.push(l);return s}function j_(n){return Co.call(n)}function Yf(n,s,l){return s=Qt(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,A=Qt(h.length-s,0),D=Z(A);++S<A;)D[S]=h[s+S];S=-1;for(var z=Z(s+1);++S<s;)z[S]=h[S];return z[s]=l(D),In(n,this,z)}}function qf(n,s){return s.length<2?n:Sr(n,qn(s,0,-1))}function J_(n,s){for(var l=n.length,h=fn(s.length,l),S=An(n);h--;){var A=s[h];n[h]=Ri(A,l)?S[A]:t}return n}function ql(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var $f=Zf(_f),Js=dg||function(n,s){return on.setTimeout(n,s)},$l=Zf(M_);function Kf(n,s,l){var h=s+"";return $l(n,k_(h,Q_(G_(h),l)))}function Zf(n){var s=0,l=0;return function(){var h=_g(),S=he-(h-l);if(l=h,S>0){if(++s>=ge)return arguments[0]}else s=0;return n.apply(t,arguments)}}function Qo(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var A=Ll(l,S),D=n[A];n[A]=n[l],n[l]=D}return n.length=s,n}var jf=$_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,S,A){s.push(S?A.replace(el,"$1"):h||l)}),s});function pi(n){if(typeof n=="string"||Nn(n))return n;var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Er(n){if(n!=null){try{return Ro.call(n)}catch{}try{return n+""}catch{}}return""}function Q_(n,s){return kn(te,function(l){var h="_."+l[0];s&l[1]&&!yo(n,h)&&n.push(h)}),n.sort()}function Jf(n){if(n instanceof xt)return n.clone();var s=new Xn(n.__wrapped__,n.__chain__);return s.__actions__=An(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function ev(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=Qt(ft(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,A=0,D=Z(No(h/s));S<h;)D[A++]=qn(n,S,S+=s);return D}function tv(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var A=n[s];A&&(S[h++]=A)}return S}function nv(){var n=arguments.length;if(!n)return[];for(var s=Z(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Vi(ot(l)?An(l):[l],an(s,1))}var iv=_t(function(n,s){return $t(n)?Ys(n,an(s,1,$t,!0)):[]}),rv=_t(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,an(s,1,$t,!0),We(l,2)):[]}),sv=_t(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,an(s,1,$t,!0),t,l):[]});function ov(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),qn(n,s<0?0:s,h)):[]}function av(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,0,s<0?0:s)):[]}function lv(n,s){return n&&n.length?Xo(n,We(s,3),!0,!0):[]}function cv(n,s){return n&&n.length?Xo(n,We(s,3),!0):[]}function uv(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&_n(n,s,l)&&(l=0,h=S),n_(n,s,l,h)):[]}function Qf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ft(l);return S<0&&(S=Qt(h+S,0)),To(n,We(s,3),S)}function eh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ft(l),S=l<0?Qt(h+S,0):fn(S,h-1)),To(n,We(s,3),S,!0)}function th(n){var s=n==null?0:n.length;return s?an(n,1):[]}function fv(n){var s=n==null?0:n.length;return s?an(n,ce):[]}function hv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ft(s),an(n,s)):[]}function dv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function nh(n){return n&&n.length?n[0]:t}function pv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ft(l);return S<0&&(S=Qt(h+S,0)),qr(n,s,S)}function mv(n){var s=n==null?0:n.length;return s?qn(n,0,-1):[]}var gv=_t(function(n){var s=Vt(n,Nl);return s.length&&s[0]===n[0]?bl(s):[]}),_v=_t(function(n){var s=$n(n),l=Vt(n,Nl);return s===$n(l)?s=t:l.pop(),l.length&&l[0]===n[0]?bl(l,We(s,2)):[]}),vv=_t(function(n){var s=$n(n),l=Vt(n,Nl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?bl(l,t,s):[]});function xv(n,s){return n==null?"":mg.call(n,s)}function $n(n){var s=n==null?0:n.length;return s?n[s-1]:t}function Sv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ft(l),S=S<0?Qt(h+S,0):fn(S,h-1)),s===s?Qm(n,s,S):To(n,Nu,S,!0)}function Mv(n,s){return n&&n.length?df(n,ft(s)):t}var Ev=_t(ih);function ih(n,s){return n&&n.length&&s&&s.length?Cl(n,s):n}function yv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,We(l,2)):n}function Tv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,t,l):n}var bv=wi(function(n,s){var l=n==null?0:n.length,h=Ml(n,s);return gf(n,Vt(s,function(S){return Ri(S,l)?+S:S}).sort(Af)),h});function Av(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],A=n.length;for(s=We(s,3);++h<A;){var D=n[h];s(D,h,n)&&(l.push(D),S.push(h))}return gf(n,S),l}function Kl(n){return n==null?n:xg.call(n)}function wv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&_n(n,s,l)?(s=0,l=h):(s=s==null?0:ft(s),l=l===t?h:ft(l)),qn(n,s,l)):[]}function Rv(n,s){return Wo(n,s)}function Cv(n,s,l){return Il(n,s,We(l,2))}function Lv(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s);if(h<l&&ni(n[h],s))return h}return-1}function Pv(n,s){return Wo(n,s,!0)}function Iv(n,s,l){return Il(n,s,We(l,2),!0)}function Dv(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s,!0)-1;if(ni(n[h],s))return h}return-1}function Uv(n){return n&&n.length?vf(n):[]}function Nv(n,s){return n&&n.length?vf(n,We(s,2)):[]}function Ov(n){var s=n==null?0:n.length;return s?qn(n,1,s):[]}function Fv(n,s,l){return n&&n.length?(s=l||s===t?1:ft(s),qn(n,0,s<0?0:s)):[]}function Bv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,s<0?0:s,h)):[]}function zv(n,s){return n&&n.length?Xo(n,We(s,3),!1,!0):[]}function Gv(n,s){return n&&n.length?Xo(n,We(s,3)):[]}var Hv=_t(function(n){return Yi(an(n,1,$t,!0))}),Vv=_t(function(n){var s=$n(n);return $t(s)&&(s=t),Yi(an(n,1,$t,!0),We(s,2))}),kv=_t(function(n){var s=$n(n);return s=typeof s=="function"?s:t,Yi(an(n,1,$t,!0),t,s)});function Wv(n){return n&&n.length?Yi(n):[]}function Xv(n,s){return n&&n.length?Yi(n,We(s,2)):[]}function Yv(n,s){return s=typeof s=="function"?s:t,n&&n.length?Yi(n,t,s):[]}function Zl(n){if(!(n&&n.length))return[];var s=0;return n=Hi(n,function(l){if($t(l))return s=Qt(l.length,s),!0}),dl(s,function(l){return Vt(n,ul(l))})}function rh(n,s){if(!(n&&n.length))return[];var l=Zl(n);return s==null?l:Vt(l,function(h){return In(s,t,h)})}var qv=_t(function(n,s){return $t(n)?Ys(n,s):[]}),$v=_t(function(n){return Ul(Hi(n,$t))}),Kv=_t(function(n){var s=$n(n);return $t(s)&&(s=t),Ul(Hi(n,$t),We(s,2))}),Zv=_t(function(n){var s=$n(n);return s=typeof s=="function"?s:t,Ul(Hi(n,$t),t,s)}),jv=_t(Zl);function Jv(n,s){return Ef(n||[],s||[],Xs)}function Qv(n,s){return Ef(n||[],s||[],Ks)}var e0=_t(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,rh(n,l)});function sh(n){var s=E(n);return s.__chain__=!0,s}function t0(n,s){return s(n),n}function ea(n,s){return s(n)}var n0=wi(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(A){return Ml(A,n)};return s>1||this.__actions__.length||!(h instanceof xt)||!Ri(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ea,args:[S],thisArg:t}),new Xn(h,this.__chain__).thru(function(A){return s&&!A.length&&A.push(t),A}))});function i0(){return sh(this)}function r0(){return new Xn(this.value(),this.__chain__)}function s0(){this.__values__===t&&(this.__values__=xh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function o0(){return this}function a0(n){for(var s,l=this;l instanceof zo;){var h=Jf(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function l0(){var n=this.__wrapped__;if(n instanceof xt){var s=n;return this.__actions__.length&&(s=new xt(this)),s=s.reverse(),s.__actions__.push({func:ea,args:[Kl],thisArg:t}),new Xn(s,this.__chain__)}return this.thru(Kl)}function c0(){return Mf(this.__wrapped__,this.__actions__)}var u0=Yo(function(n,s,l){Lt.call(n,l)?++n[l]:bi(n,l,1)});function f0(n,s,l){var h=ot(n)?Du:t_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}function h0(n,s){var l=ot(n)?Hi:rf;return l(n,We(s,3))}var d0=If(Qf),p0=If(eh);function m0(n,s){return an(ta(n,s),1)}function g0(n,s){return an(ta(n,s),ce)}function _0(n,s,l){return l=l===t?1:ft(l),an(ta(n,s),l)}function oh(n,s){var l=ot(n)?kn:Xi;return l(n,We(s,3))}function ah(n,s){var l=ot(n)?Om:nf;return l(n,We(s,3))}var v0=Yo(function(n,s,l){Lt.call(n,l)?n[l].push(s):bi(n,l,[s])});function x0(n,s,l,h){n=wn(n)?n:ss(n),l=l&&!h?ft(l):0;var S=n.length;return l<0&&(l=Qt(S+l,0)),oa(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&qr(n,s,l)>-1}var S0=_t(function(n,s,l){var h=-1,S=typeof s=="function",A=wn(n)?Z(n.length):[];return Xi(n,function(D){A[++h]=S?In(s,D,l):qs(D,s,l)}),A}),M0=Yo(function(n,s,l){bi(n,l,s)});function ta(n,s){var l=ot(n)?Vt:uf;return l(n,We(s,3))}function E0(n,s,l,h){return n==null?[]:(ot(s)||(s=s==null?[]:[s]),l=h?t:l,ot(l)||(l=l==null?[]:[l]),pf(n,s,l))}var y0=Yo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function T0(n,s,l){var h=ot(n)?ll:Fu,S=arguments.length<3;return h(n,We(s,4),l,S,Xi)}function b0(n,s,l){var h=ot(n)?Fm:Fu,S=arguments.length<3;return h(n,We(s,4),l,S,nf)}function A0(n,s){var l=ot(n)?Hi:rf;return l(n,ra(We(s,3)))}function w0(n){var s=ot(n)?Ju:x_;return s(n)}function R0(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=ft(s);var h=ot(n)?Zg:S_;return h(n,s)}function C0(n){var s=ot(n)?jg:E_;return s(n)}function L0(n){if(n==null)return 0;if(wn(n))return oa(n)?Kr(n):n.length;var s=hn(n);return s==Ue||s==C?n.size:wl(n).length}function P0(n,s,l){var h=ot(n)?cl:y_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}var I0=_t(function(n,s){if(n==null)return[];var l=s.length;return l>1&&_n(n,s[0],s[1])?s=[]:l>2&&_n(s[0],s[1],s[2])&&(s=[s[0]]),pf(n,an(s,1),[])}),na=hg||function(){return on.Date.now()};function D0(n,s){if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){if(--n<1)return s.apply(this,arguments)}}function lh(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Ai(n,U,t,t,t,t,s)}function ch(n,s){var l;if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var jl=_t(function(n,s,l){var h=m;if(l.length){var S=ki(l,is(jl));h|=G}return Ai(n,h,s,l,S)}),uh=_t(function(n,s,l){var h=m|d;if(l.length){var S=ki(l,is(uh));h|=G}return Ai(s,h,n,l,S)});function fh(n,s,l){s=l?t:s;var h=Ai(n,T,t,t,t,t,t,s);return h.placeholder=fh.placeholder,h}function hh(n,s,l){s=l?t:s;var h=Ai(n,L,t,t,t,t,t,s);return h.placeholder=hh.placeholder,h}function dh(n,s,l){var h,S,A,D,z,V,se=0,ae=!1,de=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);s=Kn(s)||0,kt(l)&&(ae=!!l.leading,de="maxWait"in l,A=de?Qt(Kn(l.maxWait)||0,s):A,Ae="trailing"in l?!!l.trailing:Ae);function ze(Kt){var ii=h,Pi=S;return h=S=t,se=Kt,D=n.apply(Pi,ii),D}function qe(Kt){return se=Kt,z=Js(vt,s),ae?ze(Kt):D}function dt(Kt){var ii=Kt-V,Pi=Kt-se,Ih=s-ii;return de?fn(Ih,A-Pi):Ih}function $e(Kt){var ii=Kt-V,Pi=Kt-se;return V===t||ii>=s||ii<0||de&&Pi>=A}function vt(){var Kt=na();if($e(Kt))return St(Kt);z=Js(vt,dt(Kt))}function St(Kt){return z=t,Ae&&h?ze(Kt):(h=S=t,D)}function On(){z!==t&&yf(z),se=0,h=V=S=z=t}function vn(){return z===t?D:St(na())}function Fn(){var Kt=na(),ii=$e(Kt);if(h=arguments,S=this,V=Kt,ii){if(z===t)return qe(V);if(de)return yf(z),z=Js(vt,s),ze(V)}return z===t&&(z=Js(vt,s)),D}return Fn.cancel=On,Fn.flush=vn,Fn}var U0=_t(function(n,s){return tf(n,1,s)}),N0=_t(function(n,s,l){return tf(n,Kn(s)||0,l)});function O0(n){return Ai(n,xe)}function ia(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Wn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],A=l.cache;if(A.has(S))return A.get(S);var D=n.apply(this,h);return l.cache=A.set(S,D)||A,D};return l.cache=new(ia.Cache||Ti),l}ia.Cache=Ti;function ra(n){if(typeof n!="function")throw new Wn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function F0(n){return ch(2,n)}var B0=T_(function(n,s){s=s.length==1&&ot(s[0])?Vt(s[0],Dn(We())):Vt(an(s,1),Dn(We()));var l=s.length;return _t(function(h){for(var S=-1,A=fn(h.length,l);++S<A;)h[S]=s[S].call(this,h[S]);return In(n,this,h)})}),Jl=_t(function(n,s){var l=ki(s,is(Jl));return Ai(n,G,t,s,l)}),ph=_t(function(n,s){var l=ki(s,is(ph));return Ai(n,B,t,s,l)}),z0=wi(function(n,s){return Ai(n,j,t,t,t,s)});function G0(n,s){if(typeof n!="function")throw new Wn(u);return s=s===t?s:ft(s),_t(n,s)}function H0(n,s){if(typeof n!="function")throw new Wn(u);return s=s==null?0:Qt(ft(s),0),_t(function(l){var h=l[s],S=$i(l,0,s);return h&&Vi(S,h),In(n,this,S)})}function V0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Wn(u);return kt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),dh(n,s,{leading:h,maxWait:s,trailing:S})}function k0(n){return lh(n,1)}function W0(n,s){return Jl(Ol(s),n)}function X0(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function Y0(n){return Yn(n,x)}function q0(n,s){return s=typeof s=="function"?s:t,Yn(n,x,s)}function $0(n){return Yn(n,_|x)}function K0(n,s){return s=typeof s=="function"?s:t,Yn(n,_|x,s)}function Z0(n,s){return s==null||ef(n,s,rn(s))}function ni(n,s){return n===s||n!==n&&s!==s}var j0=Zo(Tl),J0=Zo(function(n,s){return n>=s}),yr=af(function(){return arguments}())?af:function(n){return Xt(n)&&Lt.call(n,"callee")&&!Yu.call(n,"callee")},ot=Z.isArray,Q0=wu?Dn(wu):a_;function wn(n){return n!=null&&sa(n.length)&&!Ci(n)}function $t(n){return Xt(n)&&wn(n)}function ex(n){return n===!0||n===!1||Xt(n)&&gn(n)==Oe}var Ki=pg||cc,tx=Ru?Dn(Ru):l_;function nx(n){return Xt(n)&&n.nodeType===1&&!Qs(n)}function ix(n){if(n==null)return!0;if(wn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||Ki(n)||rs(n)||yr(n)))return!n.length;var s=hn(n);if(s==Ue||s==C)return!n.size;if(js(n))return!wl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function rx(n,s){return $s(n,s)}function sx(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?$s(n,s,t,l):!!h}function Ql(n){if(!Xt(n))return!1;var s=gn(n);return s==ke||s==Mt||typeof n.message=="string"&&typeof n.name=="string"&&!Qs(n)}function ox(n){return typeof n=="number"&&$u(n)}function Ci(n){if(!kt(n))return!1;var s=gn(n);return s==W||s==Wt||s==Ze||s==lt}function mh(n){return typeof n=="number"&&n==ft(n)}function sa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ie}function kt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xt(n){return n!=null&&typeof n=="object"}var gh=Cu?Dn(Cu):u_;function ax(n,s){return n===s||Al(n,s,kl(s))}function lx(n,s,l){return l=typeof l=="function"?l:t,Al(n,s,kl(s),l)}function cx(n){return _h(n)&&n!=+n}function ux(n){if(q_(n))throw new it(a);return lf(n)}function fx(n){return n===null}function hx(n){return n==null}function _h(n){return typeof n=="number"||Xt(n)&&gn(n)==je}function Qs(n){if(!Xt(n)||gn(n)!=Qe)return!1;var s=Io(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ro.call(l)==lg}var ec=Lu?Dn(Lu):f_;function dx(n){return mh(n)&&n>=-ie&&n<=ie}var vh=Pu?Dn(Pu):h_;function oa(n){return typeof n=="string"||!ot(n)&&Xt(n)&&gn(n)==M}function Nn(n){return typeof n=="symbol"||Xt(n)&&gn(n)==ne}var rs=Iu?Dn(Iu):d_;function px(n){return n===t}function mx(n){return Xt(n)&&hn(n)==_e}function gx(n){return Xt(n)&&gn(n)==me}var _x=Zo(Rl),vx=Zo(function(n,s){return n<=s});function xh(n){if(!n)return[];if(wn(n))return oa(n)?ei(n):An(n);if(Gs&&n[Gs])return Zm(n[Gs]());var s=hn(n),l=s==Ue?ml:s==C?bo:ss;return l(n)}function Li(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ce||n===-ce){var s=n<0?-1:1;return s*ue}return n===n?n:0}function ft(n){var s=Li(n),l=s%1;return s===s?l?s-l:s:0}function Sh(n){return n?xr(ft(n),0,Se):0}function Kn(n){if(typeof n=="number")return n;if(Nn(n))return fe;if(kt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=kt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Bu(n);var l=k.test(n);return l||Q.test(n)?Dm(n.slice(2),l?2:8):R.test(n)?fe:+n}function Mh(n){return di(n,Rn(n))}function xx(n){return n?xr(ft(n),-ie,ie):n===0?n:0}function wt(n){return n==null?"":Un(n)}var Sx=ts(function(n,s){if(js(s)||wn(s)){di(s,rn(s),n);return}for(var l in s)Lt.call(s,l)&&Xs(n,l,s[l])}),Eh=ts(function(n,s){di(s,Rn(s),n)}),aa=ts(function(n,s,l,h){di(s,Rn(s),n,h)}),Mx=ts(function(n,s,l,h){di(s,rn(s),n,h)}),Ex=wi(Ml);function yx(n,s){var l=es(n);return s==null?l:Qu(l,s)}var Tx=_t(function(n,s){n=Ut(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&_n(s[0],s[1],S)&&(h=1);++l<h;)for(var A=s[l],D=Rn(A),z=-1,V=D.length;++z<V;){var se=D[z],ae=n[se];(ae===t||ni(ae,jr[se])&&!Lt.call(n,se))&&(n[se]=A[se])}return n}),bx=_t(function(n){return n.push(t,zf),In(yh,t,n)});function Ax(n,s){return Uu(n,We(s,3),hi)}function wx(n,s){return Uu(n,We(s,3),yl)}function Rx(n,s){return n==null?n:El(n,We(s,3),Rn)}function Cx(n,s){return n==null?n:sf(n,We(s,3),Rn)}function Lx(n,s){return n&&hi(n,We(s,3))}function Px(n,s){return n&&yl(n,We(s,3))}function Ix(n){return n==null?[]:Vo(n,rn(n))}function Dx(n){return n==null?[]:Vo(n,Rn(n))}function tc(n,s,l){var h=n==null?t:Sr(n,s);return h===t?l:h}function Ux(n,s){return n!=null&&Vf(n,s,i_)}function nc(n,s){return n!=null&&Vf(n,s,r_)}var Nx=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),n[s]=l},rc(Cn)),Ox=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},We),Fx=_t(qs);function rn(n){return wn(n)?ju(n):wl(n)}function Rn(n){return wn(n)?ju(n,!0):p_(n)}function Bx(n,s){var l={};return s=We(s,3),hi(n,function(h,S,A){bi(l,s(h,S,A),h)}),l}function zx(n,s){var l={};return s=We(s,3),hi(n,function(h,S,A){bi(l,S,s(h,S,A))}),l}var Gx=ts(function(n,s,l){ko(n,s,l)}),yh=ts(function(n,s,l,h){ko(n,s,l,h)}),Hx=wi(function(n,s){var l={};if(n==null)return l;var h=!1;s=Vt(s,function(A){return A=qi(A,n),h||(h=A.length>1),A}),di(n,Hl(n),l),h&&(l=Yn(l,_|v|x,N_));for(var S=s.length;S--;)Dl(l,s[S]);return l});function Vx(n,s){return Th(n,ra(We(s)))}var kx=wi(function(n,s){return n==null?{}:g_(n,s)});function Th(n,s){if(n==null)return{};var l=Vt(Hl(n),function(h){return[h]});return s=We(s),mf(n,l,function(h,S){return s(h,S[0])})}function Wx(n,s,l){s=qi(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var A=n==null?t:n[pi(s[h])];A===t&&(h=S,A=l),n=Ci(A)?A.call(n):A}return n}function Xx(n,s,l){return n==null?n:Ks(n,s,l)}function Yx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Ks(n,s,l,h)}var bh=Ff(rn),Ah=Ff(Rn);function qx(n,s,l){var h=ot(n),S=h||Ki(n)||rs(n);if(s=We(s,4),l==null){var A=n&&n.constructor;S?l=h?new A:[]:kt(n)?l=Ci(A)?es(Io(n)):{}:l={}}return(S?kn:hi)(n,function(D,z,V){return s(l,D,z,V)}),l}function $x(n,s){return n==null?!0:Dl(n,s)}function Kx(n,s,l){return n==null?n:Sf(n,s,Ol(l))}function Zx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Sf(n,s,Ol(l),h)}function ss(n){return n==null?[]:pl(n,rn(n))}function jx(n){return n==null?[]:pl(n,Rn(n))}function Jx(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Kn(l),l=l===l?l:0),s!==t&&(s=Kn(s),s=s===s?s:0),xr(Kn(n),s,l)}function Qx(n,s,l){return s=Li(s),l===t?(l=s,s=0):l=Li(l),n=Kn(n),s_(n,s,l)}function eS(n,s,l){if(l&&typeof l!="boolean"&&_n(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Li(n),s===t?(s=n,n=0):s=Li(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=Ku();return fn(n+S*(s-n+Im("1e-"+((S+"").length-1))),s)}return Ll(n,s)}var tS=ns(function(n,s,l){return s=s.toLowerCase(),n+(l?wh(s):s)});function wh(n){return ic(wt(n).toLowerCase())}function Rh(n){return n=wt(n),n&&n.replace(Le,Xm).replace(Em,"")}function nS(n,s,l){n=wt(n),s=Un(s);var h=n.length;l=l===t?h:xr(ft(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function iS(n){return n=wt(n),n&&ve.test(n)?n.replace(Me,Ym):n}function rS(n){return n=wt(n),n&&nn.test(n)?n.replace(Ct,"\\$&"):n}var sS=ns(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),oS=ns(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),aS=Pf("toLowerCase");function lS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return Ko(Oo(S),l)+n+Ko(No(S),l)}function cS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?n+Ko(s-h,l):n}function uS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?Ko(s-h,l)+n:n}function fS(n,s,l){return l||s==null?s=0:s&&(s=+s),vg(wt(n).replace(Jn,""),s||0)}function hS(n,s,l){return(l?_n(n,s,l):s===t)?s=1:s=ft(s),Pl(wt(n),s)}function dS(){var n=arguments,s=wt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var pS=ns(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function mS(n,s,l){return l&&typeof l!="number"&&_n(n,s,l)&&(s=l=t),l=l===t?Se:l>>>0,l?(n=wt(n),n&&(typeof s=="string"||s!=null&&!ec(s))&&(s=Un(s),!s&&$r(n))?$i(ei(n),0,l):n.split(s,l)):[]}var gS=ns(function(n,s,l){return n+(l?" ":"")+ic(s)});function _S(n,s,l){return n=wt(n),l=l==null?0:xr(ft(l),0,n.length),s=Un(s),n.slice(l,l+s.length)==s}function vS(n,s,l){var h=E.templateSettings;l&&_n(n,s,l)&&(s=t),n=wt(n),s=aa({},s,h,Bf);var S=aa({},s.imports,h.imports,Bf),A=rn(S),D=pl(S,A),z,V,se=0,ae=s.interpolate||Be,de="__p += '",Ae=gl((s.escape||Be).source+"|"+ae.source+"|"+(ae===yt?tl:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),ze="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wm+"]")+`
`;n.replace(Ae,function($e,vt,St,On,vn,Fn){return St||(St=On),de+=n.slice(se,Fn).replace(Xe,qm),vt&&(z=!0,de+=`' +
__e(`+vt+`) +
'`),vn&&(V=!0,de+=`';
`+vn+`;
__p += '`),St&&(de+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),se=Fn+$e.length,$e}),de+=`';
`;var qe=Lt.call(s,"variable")&&s.variable;if(!qe)de=`with (obj) {
`+de+`
}
`;else if(So.test(qe))throw new it(c);de=(V?de.replace(I,""):de).replace(le,"$1").replace(Ne,"$1;"),de="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+de+`return __p
}`;var dt=Lh(function(){return At(A,ze+"return "+de).apply(t,D)});if(dt.source=de,Ql(dt))throw dt;return dt}function xS(n){return wt(n).toLowerCase()}function SS(n){return wt(n).toUpperCase()}function MS(n,s,l){if(n=wt(n),n&&(l||s===t))return Bu(n);if(!n||!(s=Un(s)))return n;var h=ei(n),S=ei(s),A=zu(h,S),D=Gu(h,S)+1;return $i(h,A,D).join("")}function ES(n,s,l){if(n=wt(n),n&&(l||s===t))return n.slice(0,Vu(n)+1);if(!n||!(s=Un(s)))return n;var h=ei(n),S=Gu(h,ei(s))+1;return $i(h,0,S).join("")}function yS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.replace(Jn,"");if(!n||!(s=Un(s)))return n;var h=ei(n),S=zu(h,ei(s));return $i(h,S).join("")}function TS(n,s){var l=b,h=N;if(kt(s)){var S="separator"in s?s.separator:S;l="length"in s?ft(s.length):l,h="omission"in s?Un(s.omission):h}n=wt(n);var A=n.length;if($r(n)){var D=ei(n);A=D.length}if(l>=A)return n;var z=l-Kr(h);if(z<1)return h;var V=D?$i(D,0,z).join(""):n.slice(0,z);if(S===t)return V+h;if(D&&(z+=V.length-z),ec(S)){if(n.slice(z).search(S)){var se,ae=V;for(S.global||(S=gl(S.source,wt(Mo.exec(S))+"g")),S.lastIndex=0;se=S.exec(ae);)var de=se.index;V=V.slice(0,de===t?z:de)}}else if(n.indexOf(Un(S),z)!=z){var Ae=V.lastIndexOf(S);Ae>-1&&(V=V.slice(0,Ae))}return V+h}function bS(n){return n=wt(n),n&&Y.test(n)?n.replace(F,eg):n}var AS=ns(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),ic=Pf("toUpperCase");function Ch(n,s,l){return n=wt(n),s=l?t:s,s===t?Km(n)?ig(n):Gm(n):n.match(s)||[]}var Lh=_t(function(n,s){try{return In(n,t,s)}catch(l){return Ql(l)?l:new it(l)}}),wS=wi(function(n,s){return kn(s,function(l){l=pi(l),bi(n,l,jl(n[l],n))}),n});function RS(n){var s=n==null?0:n.length,l=We();return n=s?Vt(n,function(h){if(typeof h[1]!="function")throw new Wn(u);return[l(h[0]),h[1]]}):[],_t(function(h){for(var S=-1;++S<s;){var A=n[S];if(In(A[0],this,h))return In(A[1],this,h)}})}function CS(n){return e_(Yn(n,_))}function rc(n){return function(){return n}}function LS(n,s){return n==null||n!==n?s:n}var PS=Df(),IS=Df(!0);function Cn(n){return n}function sc(n){return cf(typeof n=="function"?n:Yn(n,_))}function DS(n){return ff(Yn(n,_))}function US(n,s){return hf(n,Yn(s,_))}var NS=_t(function(n,s){return function(l){return qs(l,n,s)}}),OS=_t(function(n,s){return function(l){return qs(n,l,s)}});function oc(n,s,l){var h=rn(s),S=Vo(s,h);l==null&&!(kt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=Vo(s,rn(s)));var A=!(kt(l)&&"chain"in l)||!!l.chain,D=Ci(n);return kn(S,function(z){var V=s[z];n[z]=V,D&&(n.prototype[z]=function(){var se=this.__chain__;if(A||se){var ae=n(this.__wrapped__),de=ae.__actions__=An(this.__actions__);return de.push({func:V,args:arguments,thisArg:n}),ae.__chain__=se,ae}return V.apply(n,Vi([this.value()],arguments))})}),n}function FS(){return on._===this&&(on._=cg),this}function ac(){}function BS(n){return n=ft(n),_t(function(s){return df(s,n)})}var zS=Bl(Vt),GS=Bl(Du),HS=Bl(cl);function Ph(n){return Xl(n)?ul(pi(n)):__(n)}function VS(n){return function(s){return n==null?t:Sr(n,s)}}var kS=Nf(),WS=Nf(!0);function lc(){return[]}function cc(){return!1}function XS(){return{}}function YS(){return""}function qS(){return!0}function $S(n,s){if(n=ft(n),n<1||n>ie)return[];var l=Se,h=fn(n,Se);s=We(s),n-=Se;for(var S=dl(h,s);++l<n;)s(l);return S}function KS(n){return ot(n)?Vt(n,pi):Nn(n)?[n]:An(jf(wt(n)))}function ZS(n){var s=++ag;return wt(n)+s}var jS=$o(function(n,s){return n+s},0),JS=zl("ceil"),QS=$o(function(n,s){return n/s},1),eM=zl("floor");function tM(n){return n&&n.length?Ho(n,Cn,Tl):t}function nM(n,s){return n&&n.length?Ho(n,We(s,2),Tl):t}function iM(n){return Ou(n,Cn)}function rM(n,s){return Ou(n,We(s,2))}function sM(n){return n&&n.length?Ho(n,Cn,Rl):t}function oM(n,s){return n&&n.length?Ho(n,We(s,2),Rl):t}var aM=$o(function(n,s){return n*s},1),lM=zl("round"),cM=$o(function(n,s){return n-s},0);function uM(n){return n&&n.length?hl(n,Cn):0}function fM(n,s){return n&&n.length?hl(n,We(s,2)):0}return E.after=D0,E.ary=lh,E.assign=Sx,E.assignIn=Eh,E.assignInWith=aa,E.assignWith=Mx,E.at=Ex,E.before=ch,E.bind=jl,E.bindAll=wS,E.bindKey=uh,E.castArray=X0,E.chain=sh,E.chunk=ev,E.compact=tv,E.concat=nv,E.cond=RS,E.conforms=CS,E.constant=rc,E.countBy=u0,E.create=yx,E.curry=fh,E.curryRight=hh,E.debounce=dh,E.defaults=Tx,E.defaultsDeep=bx,E.defer=U0,E.delay=N0,E.difference=iv,E.differenceBy=rv,E.differenceWith=sv,E.drop=ov,E.dropRight=av,E.dropRightWhile=lv,E.dropWhile=cv,E.fill=uv,E.filter=h0,E.flatMap=m0,E.flatMapDeep=g0,E.flatMapDepth=_0,E.flatten=th,E.flattenDeep=fv,E.flattenDepth=hv,E.flip=O0,E.flow=PS,E.flowRight=IS,E.fromPairs=dv,E.functions=Ix,E.functionsIn=Dx,E.groupBy=v0,E.initial=mv,E.intersection=gv,E.intersectionBy=_v,E.intersectionWith=vv,E.invert=Nx,E.invertBy=Ox,E.invokeMap=S0,E.iteratee=sc,E.keyBy=M0,E.keys=rn,E.keysIn=Rn,E.map=ta,E.mapKeys=Bx,E.mapValues=zx,E.matches=DS,E.matchesProperty=US,E.memoize=ia,E.merge=Gx,E.mergeWith=yh,E.method=NS,E.methodOf=OS,E.mixin=oc,E.negate=ra,E.nthArg=BS,E.omit=Hx,E.omitBy=Vx,E.once=F0,E.orderBy=E0,E.over=zS,E.overArgs=B0,E.overEvery=GS,E.overSome=HS,E.partial=Jl,E.partialRight=ph,E.partition=y0,E.pick=kx,E.pickBy=Th,E.property=Ph,E.propertyOf=VS,E.pull=Ev,E.pullAll=ih,E.pullAllBy=yv,E.pullAllWith=Tv,E.pullAt=bv,E.range=kS,E.rangeRight=WS,E.rearg=z0,E.reject=A0,E.remove=Av,E.rest=G0,E.reverse=Kl,E.sampleSize=R0,E.set=Xx,E.setWith=Yx,E.shuffle=C0,E.slice=wv,E.sortBy=I0,E.sortedUniq=Uv,E.sortedUniqBy=Nv,E.split=mS,E.spread=H0,E.tail=Ov,E.take=Fv,E.takeRight=Bv,E.takeRightWhile=zv,E.takeWhile=Gv,E.tap=t0,E.throttle=V0,E.thru=ea,E.toArray=xh,E.toPairs=bh,E.toPairsIn=Ah,E.toPath=KS,E.toPlainObject=Mh,E.transform=qx,E.unary=k0,E.union=Hv,E.unionBy=Vv,E.unionWith=kv,E.uniq=Wv,E.uniqBy=Xv,E.uniqWith=Yv,E.unset=$x,E.unzip=Zl,E.unzipWith=rh,E.update=Kx,E.updateWith=Zx,E.values=ss,E.valuesIn=jx,E.without=qv,E.words=Ch,E.wrap=W0,E.xor=$v,E.xorBy=Kv,E.xorWith=Zv,E.zip=jv,E.zipObject=Jv,E.zipObjectDeep=Qv,E.zipWith=e0,E.entries=bh,E.entriesIn=Ah,E.extend=Eh,E.extendWith=aa,oc(E,E),E.add=jS,E.attempt=Lh,E.camelCase=tS,E.capitalize=wh,E.ceil=JS,E.clamp=Jx,E.clone=Y0,E.cloneDeep=$0,E.cloneDeepWith=K0,E.cloneWith=q0,E.conformsTo=Z0,E.deburr=Rh,E.defaultTo=LS,E.divide=QS,E.endsWith=nS,E.eq=ni,E.escape=iS,E.escapeRegExp=rS,E.every=f0,E.find=d0,E.findIndex=Qf,E.findKey=Ax,E.findLast=p0,E.findLastIndex=eh,E.findLastKey=wx,E.floor=eM,E.forEach=oh,E.forEachRight=ah,E.forIn=Rx,E.forInRight=Cx,E.forOwn=Lx,E.forOwnRight=Px,E.get=tc,E.gt=j0,E.gte=J0,E.has=Ux,E.hasIn=nc,E.head=nh,E.identity=Cn,E.includes=x0,E.indexOf=pv,E.inRange=Qx,E.invoke=Fx,E.isArguments=yr,E.isArray=ot,E.isArrayBuffer=Q0,E.isArrayLike=wn,E.isArrayLikeObject=$t,E.isBoolean=ex,E.isBuffer=Ki,E.isDate=tx,E.isElement=nx,E.isEmpty=ix,E.isEqual=rx,E.isEqualWith=sx,E.isError=Ql,E.isFinite=ox,E.isFunction=Ci,E.isInteger=mh,E.isLength=sa,E.isMap=gh,E.isMatch=ax,E.isMatchWith=lx,E.isNaN=cx,E.isNative=ux,E.isNil=hx,E.isNull=fx,E.isNumber=_h,E.isObject=kt,E.isObjectLike=Xt,E.isPlainObject=Qs,E.isRegExp=ec,E.isSafeInteger=dx,E.isSet=vh,E.isString=oa,E.isSymbol=Nn,E.isTypedArray=rs,E.isUndefined=px,E.isWeakMap=mx,E.isWeakSet=gx,E.join=xv,E.kebabCase=sS,E.last=$n,E.lastIndexOf=Sv,E.lowerCase=oS,E.lowerFirst=aS,E.lt=_x,E.lte=vx,E.max=tM,E.maxBy=nM,E.mean=iM,E.meanBy=rM,E.min=sM,E.minBy=oM,E.stubArray=lc,E.stubFalse=cc,E.stubObject=XS,E.stubString=YS,E.stubTrue=qS,E.multiply=aM,E.nth=Mv,E.noConflict=FS,E.noop=ac,E.now=na,E.pad=lS,E.padEnd=cS,E.padStart=uS,E.parseInt=fS,E.random=eS,E.reduce=T0,E.reduceRight=b0,E.repeat=hS,E.replace=dS,E.result=Wx,E.round=lM,E.runInContext=H,E.sample=w0,E.size=L0,E.snakeCase=pS,E.some=P0,E.sortedIndex=Rv,E.sortedIndexBy=Cv,E.sortedIndexOf=Lv,E.sortedLastIndex=Pv,E.sortedLastIndexBy=Iv,E.sortedLastIndexOf=Dv,E.startCase=gS,E.startsWith=_S,E.subtract=cM,E.sum=uM,E.sumBy=fM,E.template=vS,E.times=$S,E.toFinite=Li,E.toInteger=ft,E.toLength=Sh,E.toLower=xS,E.toNumber=Kn,E.toSafeInteger=xx,E.toString=wt,E.toUpper=SS,E.trim=MS,E.trimEnd=ES,E.trimStart=yS,E.truncate=TS,E.unescape=bS,E.uniqueId=ZS,E.upperCase=AS,E.upperFirst=ic,E.each=oh,E.eachRight=ah,E.first=nh,oc(E,function(){var n={};return hi(E,function(s,l){Lt.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),kn(["drop","take"],function(n,s){xt.prototype[n]=function(l){l=l===t?1:Qt(ft(l),0);var h=this.__filtered__&&!s?new xt(this):this.clone();return h.__filtered__?h.__takeCount__=fn(l,h.__takeCount__):h.__views__.push({size:fn(l,Se),type:n+(h.__dir__<0?"Right":"")}),h},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),kn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==O||l==ee;xt.prototype[n]=function(S){var A=this.clone();return A.__iteratees__.push({iteratee:We(S,3),type:l}),A.__filtered__=A.__filtered__||h,A}}),kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Cn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=_t(function(n,s){return typeof n=="function"?new xt(this):this.map(function(l){return qs(l,n,s)})}),xt.prototype.reject=function(n){return this.filter(ra(We(n)))},xt.prototype.slice=function(n,s){n=ft(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ft(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(Se)},hi(xt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=E[h?"take"+(s=="last"?"Right":""):s],A=h||/^find/.test(s);S&&(E.prototype[s]=function(){var D=this.__wrapped__,z=h?[1]:arguments,V=D instanceof xt,se=z[0],ae=V||ot(D),de=function(vt){var St=S.apply(E,Vi([vt],z));return h&&Ae?St[0]:St};ae&&l&&typeof se=="function"&&se.length!=1&&(V=ae=!1);var Ae=this.__chain__,ze=!!this.__actions__.length,qe=A&&!Ae,dt=V&&!ze;if(!A&&ae){D=dt?D:new xt(this);var $e=n.apply(D,z);return $e.__actions__.push({func:ea,args:[de],thisArg:t}),new Xn($e,Ae)}return qe&&dt?n.apply(this,z):($e=this.thru(de),qe?h?$e.value()[0]:$e.value():$e)})}),kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Ao[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var A=this.value();return s.apply(ot(A)?A:[],S)}return this[l](function(D){return s.apply(ot(D)?D:[],S)})}}),hi(xt.prototype,function(n,s){var l=E[s];if(l){var h=l.name+"";Lt.call(Qr,h)||(Qr[h]=[]),Qr[h].push({name:s,func:l})}}),Qr[qo(t,d).name]=[{name:"wrapper",func:t}],xt.prototype.clone=bg,xt.prototype.reverse=Ag,xt.prototype.value=wg,E.prototype.at=n0,E.prototype.chain=i0,E.prototype.commit=r0,E.prototype.next=s0,E.prototype.plant=a0,E.prototype.reverse=l0,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=c0,E.prototype.first=E.prototype.head,Gs&&(E.prototype[Gs]=o0),E},Zr=rg();mr?((mr.exports=Zr)._=Zr,sl._=Zr):on._=Zr}).call(ao)})(Xa,Xa.exports);var Xc=Xa.exports;const wR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},RR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),CR(t)})};function CR(r){const e=document.getElementById("cellNotFound");let t=It.value.listPalette;r?(t=It.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Ya(t)):Ya(It.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Ya(r){let e={};const t=document.getElementById("cellCheckboxes");if(console.log(t),!t){console.error('Element with ID "cellCheckboxes" not found in the DOM.');return}t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,gt.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,p,g,_,x=((y,w)=>{for(const m in y)if(y[m].includes(w))return m;return!1})(It.value.groups,o);if(x){const y=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),p=document.getElementById(y),g=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,g=document.createElement("label"),g.htmlFor=x,g.setAttribute("for",y),g.style.color="white",g.id=`${x}-label`,p=document.createElement("input"),p.type="checkbox",p.classList.add("box"),p.classList.add("group-input"),p.value=x,p.id=y,g.appendChild(p),g.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(g),f.appendChild(_),t.appendChild(f));const w=document.createElement("li");w.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",y=>{console.log(y),LR(o,y.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=gt.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),fo(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function LR(r,e){let t=gt.value.selectedCelltypes.map(i=>i);e?(t.push(r),fo(t)):(t=t.filter(i=>i!==r),fo(t))}const PR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{fo([]),Ya(It.value.listPalette),cellTextbox.value=""})},IR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",gt.value.selectedCelltypes.length!==0?gt.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=It.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function Qa(r,e){const t=await fetch(`https://cb-backend.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=roy&csv_filename=${e}_matrix.csv`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===void 0||i.gene_values==null)return"[]";let o=i.gene_values.split(",").filter(c=>c!=="");const u=["clusters","clusters_pal","genes","hierarchical_clusters"].includes(r);return console.log(r),console.log(typeof r),console.log(u),u==!0?(console.log(o),o.shift(),o):(r=="clusters"&&console.log("sini bang"),o.shift(),console.log("float"),o.map(f=>parseFloat(f)))}function vp(r){return Qa(r,It.value.prefix)}function DR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function xp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:DR(r,e)}function Sp(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Mp(r,e){return r.map(t=>Math.min(t/e,1))}const UR=new URL(window.location),xn=new URLSearchParams(UR.search);class NR{constructor(e){Dh(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),uo.value.items,this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=fm.value.scene,this.camera=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new pu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=En.value.cameraPositionZ,this.camera.position.y=En.value.cameraPositionY,this.camera.position.x=En.value.cameraPositionX,this.controls=new hm(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:jn.PAN,MIDDLE:jn.DOLLY,RIGHT:jn.ROTATE},this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){uo.pipe(Zi(e=>e.items),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),It.pipe(Zi(e=>e.prefix),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=It.value.prefix}),Wa.pipe(Zi(e=>e.isLoading),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),wR(Wa.value.isLoading)}),gt.pipe(Zi(e=>e.selectedCelltypes),ji((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),mi(!0),gt.value.selectedCelltypes?await this.updateInstancedMesh(gt.value.selectedCelltypes):await this.updateInstancedMesh([]),mi(!1),IR(),gt.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(gt.value.selectedCelltypes));xn.has("celltype")?xn.set("celltype",t):xn.append("celltype",t)}else xn.delete("celltype");Ua(xn)}),gt.pipe(Zi(e=>e.selectedGenes),ji((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),gt.value.mode===2&&Ip(),mi(!0),gt.value.selectedGenes?await this.updateInstancedMesh(gt.value.selectedGenes):await this.updateInstancedMesh([]),mi(!1),WM(),gt.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(gt.value.selectedGenes));xn.append("gene",t),xn.has("gene")?xn.set("gene",t):xn.append("gene",t)}else xn.delete("gene");Ua(xn)}),gt.pipe(Zi(e=>e.mode),ji()).subscribe(e=>{console.log("Selected genes changed:",e),xn.has("mode")?xn.set("mode",e):xn.append("mode",e),Ua(xn)}),En.pipe(Zi(e=>e.dotSize),ji()).subscribe(async e=>{console.log("Dot Size Changed:",e),mi(!0),En.value.dotSize?await this.updateInstancedMesh(En.value.dotSize):await this.updateInstancedMesh([]),mi(!1)}),En.pipe(Zi(e=>e.genePercentile),ji()).subscribe(async e=>{console.log("Gene Percentile",e),mi(!0),En.value.genePercentile?await this.updateInstancedMesh(En.value.genePercentile):await this.updateInstancedMesh([]),mi(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=It.value.pallete,i=uo.value.items;const o=new mu(.1,32,32),a=new hu,u=i.length;console.log("Count",u),this.instancedMesh=new dp(o,a,u),this.instancedMeshUmap=new dp(o,a,u);const c=new Tn,f=new Tn;let p,g,_,v=200,x=.5,y=gt.value.selectedCelltypes,w=gt.value.selectedGenes,m=En.value.dotSize,d=Math.floor(m/5),P=En.value.genePercentile;if(w.length>0)try{let T=await vp(w[0]);if(w.length==2){let G=await vp(w[1]),B=Sp(G,P);_=Mp(G,B)}let L=Sp(T,P);g=Mp(T,L)}catch(T){console.error("Error fetching data:",T)}for(let T=0;T<u;T++){if(w.length>0)if(y.length===0||y.includes(i[T].clusters)){let G,B;_?(G=xp(g[T],_[T]),B=(g[T]+_[T])/2*m+m/5):(G=xp(g[T]),B=g[T]*m+m/5),p=new Tt(G),c.scale.set(B,B,B),f.scale.set(B*x,B*x,B*x)}else p=new Tt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else y.includes(i[T].clusters)||y.length==0?(p=new Tt(t[i[T].clusters]),c.scale.set(m,m,m),f.scale.set(m*x,m*x,m*x)):(p=new Tt("#5e5e5e"),c.scale.set(d,d,d),f.scale.set(d*x,d*x,d*x));c.position.set(i[T].X_spatial0_norm*v,i[T].X_spatial1_norm*v,0*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(T,c.matrix),this.instancedMesh.setColorAt(T,p);let L=1e4;It.value.prefix=="75pe"?f.position.set(i[T].X_umap0_norm*80+L,i[T].X_umap1_norm*80,10):f.position.set(i[T].X_umap0_norm*60+L-25,i[T].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(T,f.matrix),this.instancedMeshUmap.setColorAt(T,p)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const gu=It.value.prefix;async function OR(){const r=It.value.palleteColumn;try{const e=await Qa(r,gu);console.log(e);let t={};e.forEach(i=>{console.log(i);let[o,a]=i.split(":");o=o.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[o]=a}),console.log(t),CM(t)}catch(e){console.error("Failed to load items:",e)}}async function FR(){try{const r=await Qa("genes",gu);LM(r)}catch(r){console.error("Failed to load items:",r)}}async function BR(){const r=It.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>Qa(o,gu)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}yR(t)}catch(i){console.error("Error combining data:",i)}}function zR(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}function dm(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",r.appendChild(e);let t=!1,i=0,o=0,a=0,u=0;e.addEventListener("mousedown",m=>{t=!0,i=m.clientX,o=m.clientY;const d=r.getBoundingClientRect();a=d.left,u=d.top});const c=()=>{var d;r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const m=((d=document.getElementsByClassName("navbar")[0])==null?void 0:d.offsetHeight)||0;r.offsetTop<m&&(r.style.top=`${m/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=m&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${m/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-m}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",m=>{if(t){const d=a+(m.clientX-i),P=u+(m.clientY-o);r.style.left=`${d/window.innerWidth*100}%`,r.style.top=`${P/window.innerHeight*100}%`,c()}}),document.addEventListener("mouseup",()=>{t=!1}),r.addEventListener("mousemove",m=>{const d=r.getBoundingClientRect(),P=10,T=m.clientX>d.right-P&&m.clientX<d.right+P,L=m.clientX>d.left-P&&m.clientX<d.left+P,G=m.clientY>d.bottom-P&&m.clientY<d.bottom+P,B=m.clientY>d.top-P&&m.clientY<d.top+P;L&&B?(r.classList.add("resizable-corner"),r.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),r.style.cursor="nwse-resize"):T&&B||L&&G?(r.classList.add("resizable-corner"),r.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),r.style.cursor="nesw-resize"):T&&G?(r.classList.add("resizable-corner"),r.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),r.style.cursor="nwse-resize"):T?(r.classList.add("resizable-right"),r.classList.remove("resizable-corner","resizable-bottom","resizable-top","resizable-left"),r.style.cursor="ew-resize"):L?(r.classList.add("resizable-left"),r.classList.remove("resizable-corner","resizable-right","resizable-bottom","resizable-top"),r.style.cursor="ew-resize"):G?(r.classList.add("resizable-bottom"),r.classList.remove("resizable-corner","resizable-right","resizable-top","resizable-left"),r.style.cursor="ns-resize"):B?(r.classList.add("resizable-top"),r.classList.remove("resizable-corner","resizable-right","resizable-bottom","resizable-left"),r.style.cursor="ns-resize"):(r.style.cursor="default",r.classList.remove("resizable-right","resizable-bottom","resizable-corner","resizable-top","resizable-left"))}),r.addEventListener("mousedown",m=>{const d=r.getBoundingClientRect(),P=m.clientX>d.right-10&&m.clientX<d.right+10,T=m.clientX>d.left-10&&m.clientX<d.left+10,L=m.clientY>d.bottom-10&&m.clientY<d.bottom+10,G=m.clientY>d.top-10&&m.clientY<d.top+10,B=T&&G,U=P&&G,j=T&&L,xe=P&&L;if(P||T||L||G){let ge=function(O){if(xe)r.style.width=`${O.clientX-d.left}px`,r.style.height=`${O.clientY-d.top}px`;else if(j){const J=d.right-O.clientX;r.style.width=`${J}px`,r.style.height=`${O.clientY-d.top}px`,r.style.left=`${d.right-J}px`}else if(U)r.style.width=`${O.clientX-d.left}px`,r.style.height=`${d.bottom-O.clientY}px`,r.style.top=`${O.clientY}px`;else if(B){const J=d.right-O.clientX,ee=d.bottom-O.clientY;r.style.width=`${J}px`,r.style.height=`${ee}px`,r.style.left=`${d.right-J}px`,r.style.top=`${d.bottom-ee}px`}else if(P)r.style.width=`${O.clientX-d.left}px`;else if(T){const J=d.right-O.clientX;r.style.width=`${J}px`,r.style.left=`${d.right-J}px`}else if(L)r.style.height=`${O.clientY-d.top}px`;else if(G){const J=d.bottom-O.clientY;r.style.height=`${J}px`,r.style.top=`${d.bottom-J}px`}g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight)},he=function(){window.removeEventListener("mousemove",ge),window.removeEventListener("mouseup",he)};var b=ge,N=he;window.addEventListener("mousemove",ge),window.addEventListener("mouseup",he)}}),e.addEventListener("touchstart",m=>{t=!0,i=m.changedTouches[0].clientX,o=m.changedTouches[0].clientY;const d=r.getBoundingClientRect();a=d.left,u=d.top}),document.addEventListener("touchmove",m=>{if(t){let d=m.changedTouches[0].clientX;d+r.offsetWidth>window.innerWidth&&(d=window.innerWidth-r.offsetWidth);const P=a+(m.changedTouches[0].clientX-i),T=u+(m.changedTouches[0].clientY-o);r.style.left=`${P/window.innerWidth*100}%`,r.style.top=`${T/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{t=!1}),r.addEventListener("touchstart",m=>{const d=r.getBoundingClientRect(),P=m.changedTouches[0].clientX>d.right-10&&m.changedTouches[0].clientX<d.right+10,T=m.changedTouches[0].clientX>d.left-10&&m.changedTouches[0].clientX<d.left+10,L=m.changedTouches[0].clientY>d.bottom-10&&m.changedTouches[0].clientY<d.bottom+10,G=m.changedTouches[0].clientY>d.top-10&&m.changedTouches[0].clientY<d.top+10,B=T&&G,U=P&&G,j=T&&L,xe=P&&L;if(P||T||L||G){let ge=function(O){if(xe)r.style.width=`${O.changedTouches[0].clientX-d.left}px`,r.style.height=`${O.changedTouches[0].clientY-d.top}px`;else if(j){const J=d.right-O.changedTouches[0].clientX;r.style.width=`${J}px`,r.style.height=`${O.changedTouches[0].clientY-d.top}px`,r.style.left=`${d.right-J}px`}else if(U)r.style.width=`${O.changedTouches[0].clientX-d.left}px`,r.style.height=`${d.bottom-O.changedTouches[0].clientY}px`,r.style.top=`${O.changedTouches[0].clientY}px`;else if(B){const J=d.right-O.changedTouches[0].clientX,ee=d.bottom-O.changedTouches[0].clientY;r.style.width=`${J}px`,r.style.height=`${ee}px`,r.style.left=`${d.right-J}px`,r.style.top=`${d.bottom-ee}px`}else if(P)r.style.width=`${O.changedTouches[0].clientX-d.left}px`;else if(T){const J=d.right-O.changedTouches[0].clientX;r.style.width=`${J}px`,r.style.left=`${d.right-J}px`}else if(L)r.style.height=`${O.changedTouches[0].clientY-d.top}px`;else if(G){const J=d.bottom-O.changedTouches[0].clientY;r.style.height=`${J}px`,r.style.top=`${d.bottom-J}px`}g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight)},he=function(){window.removeEventListener("touchmove",ge),window.removeEventListener("touchend",he)};var b=ge,N=he;window.addEventListener("touchmove",ge),window.addEventListener("touchend",he)}});const f=document.createElement("div");f.id="overlayScene",f.style.width="100%",f.style.height="100%",r.appendChild(f);const p=fm.value.scene,g=new Gn(75,f.offsetWidth/f.offsetHeight,.1,1e3),_=new pu,v=window.innerWidth*.25,x=window.innerHeight*.5;g.aspect=v/x,g.updateProjectionMatrix(),_.setSize(v,x),_.render(p,g),f.appendChild(_.domElement),g.position.x=1e4,g.position.z=150;const y=new hm(g,_.domElement);y.enableRotate=!1,y.mouseButtons={LEFT:jn.PAN,MIDDLE:jn.DOLLY,RIGHT:jn.ROTATE},y.touches={ONE:rr.PAN,TWO:rr.DOLLY_PAN},g.lookAt(1e4,0,10),y.target.set(1e4,0,10),y.update(),_.render(p,g);function w(){requestAnimationFrame(w),_.render(p,g)}return w(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(dm());document.addEventListener("DOMContentLoaded",async()=>{dm();const r=zR();document.body.appendChild(r),mi(!0);try{await OR(),await BR(),await FR();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(u=>Object.keys(It.value.pallete).includes(u));fo(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(u=>It.value.genes.includes(u));ho(a)}Ya(It.value.listPalette),PR(),RR(),Oa(It.value.genes),kM(),GM();const i=document.body;new NR(i)}catch(e){console.error("Failed to load data:",e)}finally{mi(!1)}});
