var vM=Object.defineProperty;var xM=(r,e,t)=>e in r?vM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ih=(r,e,t)=>(xM(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var qc=function(r,e){return qc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},qc(r,e)};function Us(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");qc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Yc(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function $c(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function Kc(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function xi(r){return typeof r=="function"}function wp(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var uc=wp(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Zc(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Ya=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=Yc(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(A){e={error:A}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(xi(p))try{p()}catch(A){a=A instanceof uc?A.errors:[A]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=Yc(_),x=v.next();!x.done;x=v.next()){var y=x.value;try{Dh(y)}catch(A){a=a??[],A instanceof uc?a=Kc(Kc([],$c(a)),$c(A.errors)):a.push(A)}}}catch(A){i={error:A}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new uc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Dh(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Zc(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Zc(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),Rp=Ya.EMPTY;function Cp(r){return r instanceof Ya||r&&"closed"in r&&xi(r.remove)&&xi(r.add)&&xi(r.unsubscribe)}function Dh(r){xi(r)?r():r.unsubscribe()}var Lp={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Pp={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Kc([r,e],$c(t)))},clearTimeout:function(r){var e=Pp.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function SM(r){Pp.setTimeout(function(){throw r})}function Uh(){}function Da(r){r()}var au=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Cp(t)&&t.add(i)):i.destination=bM,i}return e.create=function(t,i,o){return new jc(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ya),MM=Function.prototype.bind;function fc(r,e){return MM.call(r,e)}var EM=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){la(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){la(i)}else la(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){la(t)}},r}(),jc=function(r){Us(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(xi(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&Lp.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&fc(t.next,c),error:t.error&&fc(t.error,c),complete:t.complete&&fc(t.complete,c)}):u=t}return a.destination=new EM(u),a}return e}(au);function la(r){SM(r)}function yM(r){throw r}var bM={closed:!0,next:Uh,error:yM,complete:Uh},TM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ip(r){return r}function AM(r){return r.length===0?Ip:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var Nh=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=RM(e)?e:new jc(e,t,i);return Da(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=Oh(t),new t(function(o,a){var u=new jc({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[TM]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return AM(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=Oh(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function Oh(r){var e;return(e=r??Lp.Promise)!==null&&e!==void 0?e:Promise}function wM(r){return r&&xi(r.next)&&xi(r.error)&&xi(r.complete)}function RM(r){return r&&r instanceof au||wM(r)&&Cp(r)}function CM(r){return xi(r==null?void 0:r.lift)}function Dp(r){return function(e){if(CM(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Up(r,e,t,i,o){return new LM(r,e,t,i,o)}var LM=function(r){Us(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(au),PM=wp(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Np=function(r){Us(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Fh(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new PM},e.prototype.next=function(t){var i=this;Da(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=Yc(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Da(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Da(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?Rp:(this.currentObservers=null,c.push(t),new Ya(function(){i.currentObservers=null,Zc(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new Nh;return t.source=this,t},e.create=function(t,i){return new Fh(t,i)},e}(Nh),Fh=function(r){Us(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:Rp},e}(Np),Ns=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(Np);function Zi(r,e){return Dp(function(t,i){var o=0;t.subscribe(Up(i,function(a){i.next(r.call(e,a,o++))}))})}function ji(r,e){return e===void 0&&(e=Ip),r=r??IM,Dp(function(t,i){var o,a=!0;t.subscribe(Up(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function IM(r,e){return r===e}const DM=new URL(window.location),Bh=new URLSearchParams(DM.search),UM={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","clusters"],prefixOptions:["8week","4week","p5"],prefix:Bh.has("prefix")?Bh.get("prefix"):"p5",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},Pt=new Ns(UM);function NM(r){const e=Pt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};Pt.next(i)}function OM(r){const t={...Pt.getValue(),genes:r};Pt.next(t)}const Ua=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)};function FM(){const r=Pt.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<r.length;t++){const i=document.createElement("p");i.innerHTML=`<a class="dropdown-item">${r[t]}</a>`,e.appendChild(i)}}function BM(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=new URLSearchParams("");i.append("prefix",e.item(t).innerText),Ua(i),e.item(t).innerText!==Pt.value.prefix&&(r.innerHTML=Pt.value.prefix,window.location.reload())})}const GM={dotSize:5,genePercentile:.99,cameraPositionZ:250,cameraPositionY:0,cameraPositionX:0},En=new Ns(GM);function hc(r){const t={...En.getValue(),dotSize:r};En.next(t)}function Gh(r){const e=En.getValue(),t=r*.01,i={...e,genePercentile:t};En.next(i)}const zM=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{console.log(r.style.display),r.style.display=r.style.display==="none"?"block":"none",console.log(r.style.display),t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="#282828",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="#282828",t.style.color="white")})},HM=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="#282828",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="#282828",i.style.color="white")})},kM=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),d=document.getElementById("cellCheckbox"),p=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const y=()=>{const g=x.dataset.target,m=document.getElementById(g);m.style.display="block"},A=()=>{const g=x.dataset.target,m=document.getElementById(g);m.style.display="none"};["mouseenter"].forEach(g=>{x.addEventListener(g,function(){y()})}),["mouseleave"].forEach(g=>{x.addEventListener(g,function(){A()})})}),e.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.onchange=function(){o.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))},i.addEventListener("mouseup",function(){o.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))}),o.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),hc(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),Gh(parseFloat(this.value).toFixed(2))}),f.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),Gh(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}},VM=new URL(window.location),zh=new URLSearchParams(VM.search),WM={selectedCelltypes:[],mode:zh.has("mode")?Number(zh.get("mode")):1,selectedSingleGene:"",selectedGenes:[],showing:"celltype"};function Op(r){const e=Ke.getValue(),t=[...e.selectedCelltypes],i=t.indexOf(r);i>-1?t.splice(i,1):t.push(r);const o={...e,selectedCelltypes:t};Ke.next(o)}const Ke=new Ns(WM);function Rs(r){const t={...Ke.getValue(),selectedCelltypes:[...new Set(r)]};Ke.next(t)}function XM(r){const t={...Ke.getValue(),mode:r};Ke.next(t)}function Cs(r){const t={...Ke.getValue(),selectedGenes:r};Ke.next(t)}const qM=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),YM(t)})};function YM(r){const e=document.getElementById("geneNotFound");if(r){const t=Pt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Oa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Oa(Pt.value.genes)}function Oa(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",Ke.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(Ke.value.selectedGenes.length>=Ke.value.mode&&(u.target.checked=!1),Ke.value.mode===1&&Ke.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(Ke.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(Cs([]),u.target.checked=!0)}Fp(t,u.target.checked)})})}function $M(){const r=document.getElementById("modeButton");r.value=Ke.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,XM(e?2:1),e?Bp():document.getElementById("selectedContainer").innerHTML=""}}function Fp(r,e){let t=Ke.value.selectedGenes.map(i=>i);e?(t.push(r),Cs(t)):(t=t.filter(i=>i!==r),Cs(t))}const KM=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Cs([]),Oa(Pt.value.genes),geneTextbox.value=""})},ZM=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",Ke.value.selectedGenes.length!==0?Ke.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");Ke.value.selectedGenes.length===1?i.style.color="white":i.style.color=t===0?"green":"magenta",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},Bp=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",Ke.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",Ke.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(Ke.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),Fp(t.value,!1)})}),Ke.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{FM(),BM()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".colorbar-wrapper2").load("/src/ui/ColorBar/colorBarGreen.html",()=>{})});$(function(){$(".colorbar-wrapper3").load("/src/ui/ColorBar/colorBarMagenta.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{zM(),HM(),kM(),$M()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="162",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jM=0,Hh=1,JM=2,Gp=1,QM=2,Oi=3,ur=0,Pn=1,Bi=2,ar=0,As=1,kh=2,Vh=3,Wh=4,eE=5,Lr=100,tE=101,nE=102,Xh=103,qh=104,iE=200,rE=201,sE=202,oE=203,Jc=204,Qc=205,aE=206,lE=207,cE=208,uE=209,fE=210,hE=211,dE=212,pE=213,mE=214,gE=0,_E=1,vE=2,Fa=3,xE=4,SE=5,ME=6,EE=7,zp=0,yE=1,bE=2,lr=0,TE=1,AE=2,wE=3,RE=4,CE=5,LE=6,PE=7,Hp=300,Ls=301,Ps=302,eu=303,tu=304,$a=306,nu=1e3,oi=1001,iu=1002,ln=1003,Yh=1004,no=1005,Ln=1006,dc=1007,Ir=1008,cr=1009,IE=1010,DE=1011,cu=1012,kp=1013,or=1014,_i=1015,po=1016,Vp=1017,Wp=1018,Dr=1020,UE=1021,ai=1023,NE=1024,OE=1025,Ur=1026,Is=1027,Xp=1028,qp=1029,FE=1030,Yp=1031,$p=1033,pc=33776,mc=33777,gc=33778,_c=33779,$h=35840,Kh=35841,Zh=35842,jh=35843,Kp=36196,Jh=37492,Qh=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,fd=37819,hd=37820,dd=37821,vc=36492,pd=36494,md=36495,BE=36283,gd=36284,_d=36285,vd=36286,GE=3200,zE=3201,HE=0,kE=1,sr="",mi="srgb",hr="srgb-linear",uu="display-p3",Ka="display-p3-linear",Ba="linear",Gt="srgb",Ga="rec709",za="p3",os=7680,xd=519,VE=512,WE=513,XE=514,Zp=515,qE=516,YE=517,$E=518,KE=519,Sd=35044,Md="300 es",ru=1035,Gi=2e3,Ha=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ed=1234567;const uo=Math.PI/180,mo=180/Math.PI;function Os(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function ZE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function jE(r,e,t){return r!==e?(t-r)/(e-r):0}function fo(r,e,t){return(1-t)*r+t*e}function JE(r,e,t,i){return fo(r,e,1-Math.exp(-t*i))}function QE(r,e=1){return e-Math.abs(fu(r,e*2)-e)}function ey(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ty(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ny(r,e){return r+Math.floor(Math.random()*(e-r+1))}function iy(r,e){return r+Math.random()*(e-r)}function ry(r){return r*(.5-Math.random())}function sy(r){r!==void 0&&(Ed=r);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oy(r){return r*uo}function ay(r){return r*mo}function su(r){return(r&r-1)===0&&r!==0}function ly(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ka(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cy(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),y=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*y,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*y,c*d);break;case"ZYZ":r.set(f*y,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uy={DEG2RAD:uo,RAD2DEG:mo,generateUUID:Os,clamp:mn,euclideanModulo:fu,mapLinear:ZE,inverseLerp:jE,lerp:fo,damp:JE,pingpong:QE,smoothstep:ey,smootherstep:ty,randInt:ny,randFloat:iy,randFloatSpread:ry,seededRandom:sy,degToRad:oy,radToDeg:ay,isPowerOfTwo:su,ceilPowerOfTwo:ly,floorPowerOfTwo:ka,setQuaternionFromProperEuler:cy,normalize:Sn,denormalize:ys};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,o,a,u,c,f,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],x=i[5],y=i[8],A=o[0],g=o[3],m=o[6],N=o[1],R=o[4],D=o[7],B=o[2],G=o[5],I=o[8];return a[0]=u*A+c*N+f*B,a[3]=u*g+c*R+f*G,a[6]=u*m+c*D+f*I,a[1]=d*A+p*N+_*B,a[4]=d*g+p*R+_*G,a[7]=d*m+p*D+_*I,a[2]=v*A+x*N+y*B,a[5]=v*g+x*R+y*G,a[8]=v*m+x*D+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,x=d*a-u*f,y=t*_+i*v+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=_*A,e[1]=(o*d-p*i)*A,e[2]=(c*i-o*u)*A,e[3]=v*A,e[4]=(p*t-o*f)*A,e[5]=(o*a-c*t)*A,e[6]=x*A,e[7]=(i*f-d*t)*A,e[8]=(u*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new gt;function jp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fy(){const r=Va("canvas");return r.style.display="block",r}const yd={};function hy(r){r in yd||(yd[r]=!0,console.warn(r))}const bd=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Td=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[hr]:{transfer:Ba,primaries:Ga,toReference:r=>r,fromReference:r=>r},[mi]:{transfer:Gt,primaries:Ga,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Ba,primaries:za,toReference:r=>r.applyMatrix3(Td),fromReference:r=>r.applyMatrix3(bd)},[uu]:{transfer:Gt,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Td),fromReference:r=>r.applyMatrix3(bd).convertLinearToSRGB()}},dy=new Set([hr,Ka]),It={enabled:!0,_workingColorSpace:hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!dy.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ca[e].toReference,o=ca[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ca[r].primaries},getTransfer:function(r){return r===sr?Ba:ca[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Va("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ws(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Mc(o[u].image)):a.push(Mc(o[u]))}else a=Mc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Mc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class yn extends Fr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=oi,o=oi,a=Ln,u=Ir,c=ai,f=cr,d=yn.DEFAULT_ANISOTROPY,p=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Os(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Hp;yn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],x=f[5],y=f[9],A=f[2],g=f[6],m=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-A)<.01&&Math.abs(y-g)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+A)<.1&&Math.abs(y+g)<.1&&Math.abs(d+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,D=(x+1)/2,B=(m+1)/2,G=(p+v)/4,I=(_+A)/4,K=(y+g)/4;return R>D&&R>B?R<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(R),o=G/i,a=I/i):D>B?D<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(D),i=G/o,a=K/o):B<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),i=I/a,o=K/a),this.set(i,o,a,t),this}let N=Math.sqrt((g-y)*(g-y)+(_-A)*(_-A)+(v-p)*(v-p));return Math.abs(N)<.001&&(N=1),this.x=(g-y)/N,this.y=(_-A)/N,this.z=(v-p)/N,this.w=Math.acos((d+x+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new yn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends gy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class em extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _y extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],y=a[u+2],A=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=y,e[t+3]=A;return}if(_!==A||f!==v||d!==x||p!==y){let g=1-c;const m=f*v+d*x+p*y+_*A,N=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const B=Math.sqrt(R),G=Math.atan2(B,m*N);g=Math.sin(g*G)/B,c=Math.sin(c*G)/B}const D=c*N;if(f=f*g+v*D,d=d*g+x*D,p=p*g+y*D,_=_*g+A*D,g===1-c){const B=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=B,d*=B,p*=B,_*=B}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],x=a[u+2],y=a[u+3];return e[t]=c*y+p*_+f*x-d*v,e[t+1]=f*y+p*v+d*_-c*x,e[t+2]=d*y+p*x+c*v-f*_,e[t+3]=p*y-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),y=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_-v*x*y;break;case"YXZ":this._x=v*p*_+d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_+v*x*y;break;case"ZXY":this._x=v*p*_-d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_-v*x*y;break;case"ZYX":this._x=v*p*_-d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_+v*x*y;break;case"YZX":this._x=v*p*_+d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_-v*x*y;break;case"XZY":this._x=v*p*_-d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(p-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new X,Ad=new Or;class Br{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ii):ii.fromBufferAttribute(a,u),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),fa.subVectors(this.max,io),ls.subVectors(e.a,io),cs.subVectors(e.b,io),us.subVectors(e.c,io),Ji.subVectors(cs,ls),Qi.subVectors(us,cs),yr.subVectors(ls,us);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-yr.z,yr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,yr.z,0,-yr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-yr.y,yr.x,0];return!yc(t,ls,cs,us,fa)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,ls,cs,us,fa))?!1:(ha.crossVectors(Ji,Qi),t=[ha.x,ha.y,ha.z],yc(t,ls,cs,us,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new X,new X,new X,new X,new X,new X,new X,new X],ii=new X,ua=new Br,ls=new X,cs=new X,us=new X,Ji=new X,Qi=new X,yr=new X,io=new X,fa=new X,ha=new X,br=new X;function yc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){br.fromArray(r,a);const c=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),f=e.dot(br),d=t.dot(br),p=i.dot(br);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const vy=new Br,ro=new X,bc=new X;class go{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vy.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ro,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(bc)),this.expandByPoint(ro.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new X,Tc=new X,da=new X,er=new X,Ac=new X,pa=new X,wc=new X;class tm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Tc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Tc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(da),c=er.dot(this.direction),f=-er.dot(da),d=er.lengthSq(),p=Math.abs(1-u*u);let _,v,x,y;if(p>0)if(_=u*f-c,v=u*c-f,y=a*p,_>=0)if(v>=-y)if(v<=y){const A=1/p;_*=A,v*=A,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-y?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=y?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Tc).addScaledVector(da,v),x}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),o=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,o,a){Ac.subVectors(t,e),pa.subVectors(i,e),wc.crossVectors(Ac,pa);let u=this.direction.dot(wc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;er.subVectors(this.origin,e);const f=c*this.direction.dot(pa.crossVectors(er,pa));if(f<0)return null;const d=c*this.direction.dot(Ac.cross(er));if(d<0||f+d>u)return null;const p=-c*er.dot(wc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,x,y,A,g){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,x,y,A,g)}set(e,t,i,o,a,u,c,f,d,p,_,v,x,y,A,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=o,m[1]=a,m[5]=u,m[9]=c,m[13]=f,m[2]=d,m[6]=p,m[10]=_,m[14]=v,m[3]=x,m[7]=y,m[11]=A,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),u=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,x=u*_,y=c*p,A=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=x+y*d,t[5]=v-A*d,t[9]=-c*f,t[2]=A-v*d,t[6]=y+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,x=f*_,y=d*p,A=d*_;t[0]=v+A*c,t[4]=y*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=x*c-y,t[6]=A+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,x=f*_,y=d*p,A=d*_;t[0]=v-A*c,t[4]=-u*_,t[8]=y+x*c,t[1]=x+y*c,t[5]=u*p,t[9]=A-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,x=u*_,y=c*p,A=c*_;t[0]=f*p,t[4]=y*d-x,t[8]=v*d+A,t[1]=f*_,t[5]=A*d+v,t[9]=x*d-y,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,y=c*f,A=c*d;t[0]=f*p,t[4]=A-v*_,t[8]=y*_+x,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*_+y,t[10]=v-A*_}else if(e.order==="XZY"){const v=u*f,x=u*d,y=c*f,A=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+A,t[5]=u*p,t[9]=x*_-y,t[2]=y*_-x,t[6]=c*p,t[10]=A*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,Sy)}lookAt(e,t,i){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(i,Bn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(i,Bn)),tr.normalize(),ma.crossVectors(Bn,tr),o[0]=tr.x,o[4]=ma.x,o[8]=Bn.x,o[1]=tr.y,o[5]=ma.y,o[9]=Bn.y,o[2]=tr.z,o[6]=ma.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],x=i[13],y=i[2],A=i[6],g=i[10],m=i[14],N=i[3],R=i[7],D=i[11],B=i[15],G=o[0],I=o[4],K=o[8],Se=o[12],T=o[1],U=o[5],Me=o[9],_e=o[13],z=o[2],se=o[6],ne=o[10],ce=o[14],te=o[3],ue=o[7],fe=o[11],ve=o[15];return a[0]=u*G+c*T+f*z+d*te,a[4]=u*I+c*U+f*se+d*ue,a[8]=u*K+c*Me+f*ne+d*fe,a[12]=u*Se+c*_e+f*ce+d*ve,a[1]=p*G+_*T+v*z+x*te,a[5]=p*I+_*U+v*se+x*ue,a[9]=p*K+_*Me+v*ne+x*fe,a[13]=p*Se+_*_e+v*ce+x*ve,a[2]=y*G+A*T+g*z+m*te,a[6]=y*I+A*U+g*se+m*ue,a[10]=y*K+A*Me+g*ne+m*fe,a[14]=y*Se+A*_e+g*ce+m*ve,a[3]=N*G+R*T+D*z+B*te,a[7]=N*I+R*U+D*se+B*ue,a[11]=N*K+R*Me+D*ne+B*fe,a[15]=N*Se+R*_e+D*ce+B*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],x=e[14],y=e[3],A=e[7],g=e[11],m=e[15];return y*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+A*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*p-a*f*p)+g*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*p-i*d*p)+m*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],x=e[11],y=e[12],A=e[13],g=e[14],m=e[15],N=_*g*d-A*v*d+A*f*x-c*g*x-_*f*m+c*v*m,R=y*v*d-p*g*d-y*f*x+u*g*x+p*f*m-u*v*m,D=p*A*d-y*_*d+y*c*x-u*A*x-p*c*m+u*_*m,B=y*_*f-p*A*f-y*c*v+u*A*v+p*c*g-u*_*g,G=t*N+i*R+o*D+a*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=N*I,e[1]=(A*v*a-_*g*a-A*o*x+i*g*x+_*o*m-i*v*m)*I,e[2]=(c*g*a-A*f*a+A*o*d-i*g*d-c*o*m+i*f*m)*I,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*I,e[4]=R*I,e[5]=(p*g*a-y*v*a+y*o*x-t*g*x-p*o*m+t*v*m)*I,e[6]=(y*f*a-u*g*a-y*o*d+t*g*d+u*o*m-t*f*m)*I,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*x+t*f*x)*I,e[8]=D*I,e[9]=(y*_*a-p*A*a-y*i*x+t*A*x+p*i*m-t*_*m)*I,e[10]=(u*A*a-y*c*a+y*i*d-t*A*d-u*i*m+t*c*m)*I,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*x-t*c*x)*I,e[12]=B*I,e[13]=(p*A*o-y*_*o+y*i*v-t*A*v-p*i*g+t*_*g)*I,e[14]=(y*c*o-u*A*o-y*i*f+t*A*f+u*i*g-t*c*g)*I,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*I,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,x=a*p,y=a*_,A=u*p,g=u*_,m=c*_,N=f*d,R=f*p,D=f*_,B=i.x,G=i.y,I=i.z;return o[0]=(1-(A+m))*B,o[1]=(x+D)*B,o[2]=(y-R)*B,o[3]=0,o[4]=(x-D)*G,o[5]=(1-(v+m))*G,o[6]=(g+N)*G,o[7]=0,o[8]=(y+R)*I,o[9]=(g-N)*I,o[10]=(1-(v+A))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=fs.set(o[0],o[1],o[2]).length();const u=fs.set(o[4],o[5],o[6]).length(),c=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const d=1/a,p=1/u,_=1/c;return ri.elements[0]*=d,ri.elements[1]*=d,ri.elements[2]*=d,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,t.setFromRotationMatrix(ri),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Gi){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,y;if(c===Gi)x=-(u+a)/(u-a),y=-2*u*a/(u-a);else if(c===Ha)x=-u/(u-a),y=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Gi){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*p;let y,A;if(c===Gi)y=(u+a)*_,A=-2*_;else if(c===Ha)y=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=A,f[14]=-y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new X,ri=new qt,xy=new X(0,0,0),Sy=new X(1,1,1),tr=new X,ma=new X,Bn=new X,wd=new qt,Rd=new Or;class zi{constructor(e=0,t=0,i=0,o=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-mn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Cd=new X,hs=new Or,Di=new qt,ga=new X,so=new X,Ey=new X,yy=new Or,Ld=new X(1,0,0),Pd=new X(0,1,0),Id=new X(0,0,1),by={type:"added"},Ty={type:"removed"},Rc={type:"childadded",child:null},Cc={type:"childremoved",child:null};class bn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new X,t=new zi,i=new Or,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new gt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(so,ga,this.up):Di.lookAt(ga,so,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(Di),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(by),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ty),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),y=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}bn.DEFAULT_UP=new X(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new X,Ui=new X,Lc=new X,Ni=new X,ds=new X,ps=new X,Dd=new X,Pc=new X,Ic=new X,Dc=new X;class vi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),si.subVectors(e,t),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){si.subVectors(o,t),Ui.subVectors(i,t),Lc.subVectors(e,t);const u=si.dot(si),c=si.dot(Ui),f=si.dot(Lc),d=Ui.dot(Ui),p=Ui.dot(Lc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*p)*v,y=(u*p-c*f)*v;return a.set(1-x-y,y,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Ni)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ni.x),f.addScaledVector(u,Ni.y),f.addScaledVector(c,Ni.z),f)}static isFrontFacing(e,t,i,o){return si.subVectors(i,t),Ui.subVectors(e,t),si.cross(Ui).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ds.subVectors(o,i),ps.subVectors(a,i),Pc.subVectors(e,i);const f=ds.dot(Pc),d=ps.dot(Pc);if(f<=0&&d<=0)return t.copy(i);Ic.subVectors(e,o);const p=ds.dot(Ic),_=ps.dot(Ic);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(ds,u);Dc.subVectors(e,a);const x=ds.dot(Dc),y=ps.dot(Dc);if(y>=0&&x<=y)return t.copy(a);const A=x*d-f*y;if(A<=0&&d>=0&&y<=0)return c=d/(d-y),t.copy(i).addScaledVector(ps,c);const g=p*y-x*_;if(g<=0&&_-p>=0&&x-y>=0)return Dd.subVectors(a,o),c=(_-p)/(_-p+(x-y)),t.copy(o).addScaledVector(Dd,c);const m=1/(g+A+v);return u=A*m,c=v*m,t.copy(i).addScaledVector(ds,u).addScaledVector(ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=It.workingColorSpace){if(e=fu(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Uc(u,a,e+1/3),this.g=Uc(u,a,e),this.b=Uc(u,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=mi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=im[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return It.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,o=pn.g,a=pn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mi){It.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,o=pn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(_a);const i=fo(nr.h,_a.h,t),o=fo(nr.s,_a.s,t),a=fo(nr.l,_a.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new bt;bt.NAMES=im;let Ay=0;class Za extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=As,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,va=new lt;class ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sd&&(e.usage=this.usage),e}}class rm extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sm extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wy=0;const Kn=new qt,Nc=new bn,ms=new X,Gn=new Br,oo=new Br,sn=new X;class dr extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];oo.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(Gn.min,oo.min),Gn.expandByPoint(sn),sn.addVectors(Gn.max,oo.max),Gn.expandByPoint(sn)):(Gn.expandByPoint(oo.min),Gn.expandByPoint(oo.max))}Gn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)sn.fromBufferAttribute(c,d),f&&(ms.fromBufferAttribute(e,d),sn.add(ms)),o=Math.max(o,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let K=0;K<i.count;K++)c[K]=new X,f[K]=new X;const d=new X,p=new X,_=new X,v=new lt,x=new lt,y=new lt,A=new X,g=new X;function m(K,Se,T){d.fromBufferAttribute(i,K),p.fromBufferAttribute(i,Se),_.fromBufferAttribute(i,T),v.fromBufferAttribute(a,K),x.fromBufferAttribute(a,Se),y.fromBufferAttribute(a,T),p.sub(d),_.sub(d),x.sub(v),y.sub(v);const U=1/(x.x*y.y-y.x*x.y);isFinite(U)&&(A.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(U),g.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(U),c[K].add(A),c[Se].add(A),c[T].add(A),f[K].add(g),f[Se].add(g),f[T].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let K=0,Se=N.length;K<Se;++K){const T=N[K],U=T.start,Me=T.count;for(let _e=U,z=U+Me;_e<z;_e+=3)m(e.getX(_e+0),e.getX(_e+1),e.getX(_e+2))}const R=new X,D=new X,B=new X,G=new X;function I(K){B.fromBufferAttribute(o,K),G.copy(B);const Se=c[K];R.copy(Se),R.sub(B.multiplyScalar(B.dot(Se))).normalize(),D.crossVectors(G,Se);const U=D.dot(f[K])<0?-1:1;u.setXYZW(K,R.x,R.y,R.z,U)}for(let K=0,Se=N.length;K<Se;++K){const T=N[K],U=T.start,Me=T.count;for(let _e=U,z=U+Me;_e<z;_e+=3)I(e.getX(_e+0)),I(e.getX(_e+1)),I(e.getX(_e+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const y=e.getX(v+0),A=e.getX(v+1),g=e.getX(v+2);o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,A),u.fromBufferAttribute(t,g),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,g),c.add(p),f.add(p),d.add(p),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let x=0,y=0;for(let A=0,g=f.length;A<g;A++){c.isInterleavedBufferAttribute?x=f[A]*c.data.stride+c.offset:x=f[A]*p;for(let m=0;m<p;m++)v[y++]=d[x++]}return new ci(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ud=new qt,Tr=new tm,xa=new go,Nd=new X,gs=new X,_s=new X,vs=new X,Oc=new X,Sa=new X,Ma=new lt,Ea=new lt,ya=new lt,Od=new X,Fd=new X,Bd=new X,ba=new X,Ta=new X;class li extends bn{constructor(e=new dr,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Sa.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Oc.fromBufferAttribute(_,e),u?Sa.addScaledVector(Oc,p):Sa.addScaledVector(Oc.sub(t),p))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(a),Tr.copy(e.ray).recast(e.near),!(xa.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(xa,Nd)===null||Tr.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(Ud.copy(a).invert(),Tr.copy(e.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let y=0,A=v.length;y<A;y++){const g=v[y],m=u[g.materialIndex],N=Math.max(g.start,x.start),R=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let D=N,B=R;D<B;D+=3){const G=c.getX(D),I=c.getX(D+1),K=c.getX(D+2);o=Aa(this,m,e,i,d,p,_,G,I,K),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(c.count,x.start+x.count);for(let g=y,m=A;g<m;g+=3){const N=c.getX(g),R=c.getX(g+1),D=c.getX(g+2);o=Aa(this,u,e,i,d,p,_,N,R,D),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let y=0,A=v.length;y<A;y++){const g=v[y],m=u[g.materialIndex],N=Math.max(g.start,x.start),R=Math.min(f.count,Math.min(g.start+g.count,x.start+x.count));for(let D=N,B=R;D<B;D+=3){const G=D,I=D+1,K=D+2;o=Aa(this,m,e,i,d,p,_,G,I,K),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let g=y,m=A;g<m;g+=3){const N=g,R=g+1,D=g+2;o=Aa(this,u,e,i,d,p,_,N,R,D),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Ry(r,e,t,i,o,a,u,c){let f;if(e.side===Pn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===ur,c),f===null)return null;Ta.copy(c),Ta.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Ta);return d<t.near||d>t.far?null:{distance:d,point:Ta.clone(),object:r}}function Aa(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,gs),r.getVertexPosition(f,_s),r.getVertexPosition(d,vs);const p=Ry(r,e,t,i,gs,_s,vs,ba);if(p){o&&(Ma.fromBufferAttribute(o,c),Ea.fromBufferAttribute(o,f),ya.fromBufferAttribute(o,d),p.uv=vi.getInterpolation(ba,gs,_s,vs,Ma,Ea,ya,new lt)),a&&(Ma.fromBufferAttribute(a,c),Ea.fromBufferAttribute(a,f),ya.fromBufferAttribute(a,d),p.uv1=vi.getInterpolation(ba,gs,_s,vs,Ma,Ea,ya,new lt)),u&&(Od.fromBufferAttribute(u,c),Fd.fromBufferAttribute(u,f),Bd.fromBufferAttribute(u,d),p.normal=vi.getInterpolation(ba,gs,_s,vs,Od,Fd,Bd,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};vi.getNormal(gs,_s,vs,_.normal),p.face=_}return p}class _o extends dr{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,x=0;y("z","y","x",-1,-1,i,t,e,u,a,0),y("z","y","x",1,-1,i,t,-e,u,a,1),y("x","z","y",1,1,e,i,t,o,u,2),y("x","z","y",1,-1,e,i,-t,o,u,3),y("x","y","z",1,-1,e,t,i,o,a,4),y("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Si(d,3)),this.setAttribute("normal",new Si(p,3)),this.setAttribute("uv",new Si(_,2));function y(A,g,m,N,R,D,B,G,I,K,Se){const T=D/I,U=B/K,Me=D/2,_e=B/2,z=G/2,se=I+1,ne=K+1;let ce=0,te=0;const ue=new X;for(let fe=0;fe<ne;fe++){const ve=fe*U-_e;for(let De=0;De<se;De++){const tt=De*T-Me;ue[A]=tt*N,ue[g]=ve*R,ue[m]=z,d.push(ue.x,ue.y,ue.z),ue[A]=0,ue[g]=0,ue[m]=G>0?1:-1,p.push(ue.x,ue.y,ue.z),_.push(De/I),_.push(1-fe/K),ce+=1}}for(let fe=0;fe<K;fe++)for(let ve=0;ve<I;ve++){const De=v+ve+se*fe,tt=v+ve+se*(fe+1),Q=v+(ve+1)+se*(fe+1),de=v+(ve+1)+se*fe;f.push(De,tt,de),f.push(tt,Q,de),te+=6}c.addGroup(x,te,Se),x+=te,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const i=Ds(r[t]);for(const o in i)e[o]=i[o]}return e}function Cy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function om(r){return r.getRenderTarget()===null?r.outputColorSpace:It.workingColorSpace}const Ly={clone:Ds,merge:Mn};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class am extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new X,Gd=new lt,zd=new lt;class Zn extends am{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,zd),t.subVectors(zd,Gd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class Dy extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new Zn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const u=new Zn(xs,Ss,e,t);u.layers=this.layers,this.add(u);const c=new Zn(xs,Ss,e,t);c.layers=this.layers,this.add(c);const f=new Zn(xs,Ss,e,t);f.layers=this.layers,this.add(f);const d=new Zn(xs,Ss,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class lm extends yn{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uy extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new lm(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),a=new fr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ar});a.uniforms.tEquirect.value=t;const u=new li(o,a),c=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Ln),new Dy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Fc=new X,Ny=new X,Oy=new gt;class rr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Fc.subVectors(i,t).cross(Ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Oy.getNormalMatrix(e),o=this.coplanarPoint(Fc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new go,wa=new X;class cm{constructor(e=new rr,t=new rr,i=new rr,o=new rr,a=new rr,u=new rr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],x=o[8],y=o[9],A=o[10],g=o[11],m=o[12],N=o[13],R=o[14],D=o[15];if(i[0].setComponents(f-a,v-d,g-x,D-m).normalize(),i[1].setComponents(f+a,v+d,g+x,D+m).normalize(),i[2].setComponents(f+u,v+p,g+y,D+N).normalize(),i[3].setComponents(f-u,v-p,g-y,D-N).normalize(),i[4].setComponents(f-c,v-_,g-A,D-R).normalize(),t===Gi)i[5].setComponents(f+c,v+_,g+A,D+R).normalize();else if(t===Ha)i[5].setComponents(c,_,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(wa.x=o.normal.x>0?e.max.x:e.min.x,wa.y=o.normal.y>0?e.max.y:e.min.y,wa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function um(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Fy(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,x=_.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,_,v),d.onUploadCallback();let A;if(_ instanceof Float32Array)A=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)A=r.SHORT;else if(_ instanceof Uint32Array)A=r.UNSIGNED_INT;else if(_ instanceof Int32Array)A=r.INT;else if(_ instanceof Int8Array)A=r.BYTE;else if(_ instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:A,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,p,_){const v=p.array,x=p._updateRange,y=p.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&y.length===0&&r.bufferSubData(_,0,v),y.length!==0){for(let A=0,g=y.length;A<g;A++){const m=y[A];t?r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v,m.start,m.count):r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v.subarray(m.start,m.start+m.count))}p.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class ja extends dr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,x=[],y=[],A=[],g=[];for(let m=0;m<p;m++){const N=m*v-u;for(let R=0;R<d;R++){const D=R*_-a;y.push(D,-N,0),A.push(0,0,1),g.push(R/c),g.push(1-m/f)}}for(let m=0;m<f;m++)for(let N=0;N<c;N++){const R=N+d*m,D=N+d*(m+1),B=N+1+d*(m+1),G=N+1+d*m;x.push(R,D,G),x.push(D,B,G)}this.setIndex(x),this.setAttribute("position",new Si(y,3)),this.setAttribute("normal",new Si(A,3)),this.setAttribute("uv",new Si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
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
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jy=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`
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
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,Fb=`struct PhysicalMaterial {
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
}`,Bb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$b=`#if defined( USE_POINTS_UV )
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
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
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
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
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
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
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
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ET=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yT=`float getShadowMask() {
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
}`,bT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,RT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GT=`uniform sampler2D t2D;
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
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
}`,XT=`#if DEPTH_PACKING == 3200
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
}`,qT=`#define DISTANCE
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
}`,YT=`#define DISTANCE
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,QT=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,cA=`#define STANDARD
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
}`,uA=`#define TOON
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
}`,fA=`#define TOON
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
}`,hA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,gA=`uniform float rotation;
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
}`,_A=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:By,alphahash_pars_fragment:Gy,alphamap_fragment:zy,alphamap_pars_fragment:Hy,alphatest_fragment:ky,alphatest_pars_fragment:Vy,aomap_fragment:Wy,aomap_pars_fragment:Xy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:$y,beginnormal_vertex:Ky,bsdfs:Zy,iridescence_fragment:jy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:eb,clipping_planes_pars_vertex:tb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:rb,color_pars_vertex:sb,color_vertex:ob,common:ab,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Pb,envmap_vertex:Sb,fog_vertex:Mb,fog_pars_vertex:Eb,fog_fragment:yb,fog_pars_fragment:bb,gradientmap_pars_fragment:Tb,lightmap_fragment:Ab,lightmap_pars_fragment:wb,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Lb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Db,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Fb,lights_fragment_begin:Bb,lights_fragment_maps:Gb,lights_fragment_end:zb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Wb,map_fragment:Xb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:$b,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:jb,morphcolor_vertex:Jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:iT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:cT,clearcoat_pars_fragment:uT,iridescence_pars_fragment:fT,opaque_fragment:hT,packing:dT,premultiplied_alpha_fragment:pT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:_T,roughnessmap_fragment:vT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:MT,shadowmap_vertex:ET,shadowmask_pars_fragment:yT,skinbase_vertex:bT,skinning_pars_vertex:TT,skinning_vertex:AT,skinnormal_vertex:wT,specularmap_fragment:RT,specularmap_pars_fragment:CT,tonemapping_fragment:LT,tonemapping_pars_fragment:PT,transmission_fragment:IT,transmission_pars_fragment:DT,uv_pars_fragment:UT,uv_pars_vertex:NT,uv_vertex:OT,worldpos_vertex:FT,background_vert:BT,background_frag:GT,backgroundCube_vert:zT,backgroundCube_frag:HT,cube_vert:kT,cube_frag:VT,depth_vert:WT,depth_frag:XT,distanceRGBA_vert:qT,distanceRGBA_frag:YT,equirect_vert:$T,equirect_frag:KT,linedashed_vert:ZT,linedashed_frag:jT,meshbasic_vert:JT,meshbasic_frag:QT,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:fA,points_vert:hA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},be={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},gi={basic:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Mn([be.points,be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Mn([be.common,be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Mn([be.sprite,be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Mn([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Mn([be.lights,be.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};gi.physical={uniforms:Mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ra={r:0,b:0,g:0},wr=new zi,vA=new qt;function xA(r,e,t,i,o,a,u){const c=new bt(0);let f=a===!0?0:1,d,p,_=null,v=0,x=null;function y(g,m){let N=!1,R=m.isScene===!0?m.background:null;R&&R.isTexture&&(R=(m.backgroundBlurriness>0?t:e).get(R)),R===null?A(c,f):R&&R.isColor&&(A(R,1),N=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||N)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===$a)?(p===void 0&&(p=new li(new _o(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Ds(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,G,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),wr.copy(m.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(wr)),p.material.toneMapped=It.getTransfer(R.colorSpace)!==Gt,(_!==R||v!==R.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,x=r.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new li(new ja(2,2),new fr({name:"BackgroundMaterial",uniforms:Ds(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=It.getTransfer(R.colorSpace)!==Gt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,x=r.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function A(g,m){g.getRGB(Ra,om(r)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,m,u)}return{getClearColor:function(){return c},setClearColor:function(g,m=1){c.set(g),f=m,A(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,A(c,f)},render:y}}function SA(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=g(null);let d=f,p=!1;function _(z,se,ne,ce,te){let ue=!1;if(u){const fe=A(ce,ne,se);d!==fe&&(d=fe,x(d.object)),ue=m(z,ce,ne,te),ue&&N(z,ce,ne,te)}else{const fe=se.wireframe===!0;(d.geometry!==ce.id||d.program!==ne.id||d.wireframe!==fe)&&(d.geometry=ce.id,d.program=ne.id,d.wireframe=fe,ue=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ue||p)&&(p=!1,K(z,se,ne,ce),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(z){return i.isWebGL2?r.bindVertexArray(z):a.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?r.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function A(z,se,ne){const ce=ne.wireframe===!0;let te=c[z.id];te===void 0&&(te={},c[z.id]=te);let ue=te[se.id];ue===void 0&&(ue={},te[se.id]=ue);let fe=ue[ce];return fe===void 0&&(fe=g(v()),ue[ce]=fe),fe}function g(z){const se=[],ne=[],ce=[];for(let te=0;te<o;te++)se[te]=0,ne[te]=0,ce[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ne,attributeDivisors:ce,object:z,attributes:{},index:null}}function m(z,se,ne,ce){const te=d.attributes,ue=se.attributes;let fe=0;const ve=ne.getAttributes();for(const De in ve)if(ve[De].location>=0){const Q=te[De];let de=ue[De];if(de===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(de=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(de=z.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;fe++}return d.attributesNum!==fe||d.index!==ce}function N(z,se,ne,ce){const te={},ue=se.attributes;let fe=0;const ve=ne.getAttributes();for(const De in ve)if(ve[De].location>=0){let Q=ue[De];Q===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),te[De]=de,fe++}d.attributes=te,d.attributesNum=fe,d.index=ce}function R(){const z=d.newAttributes;for(let se=0,ne=z.length;se<ne;se++)z[se]=0}function D(z){B(z,0)}function B(z,se){const ne=d.newAttributes,ce=d.enabledAttributes,te=d.attributeDivisors;ne[z]=1,ce[z]===0&&(r.enableVertexAttribArray(z),ce[z]=1),te[z]!==se&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,se),te[z]=se)}function G(){const z=d.newAttributes,se=d.enabledAttributes;for(let ne=0,ce=se.length;ne<ce;ne++)se[ne]!==z[ne]&&(r.disableVertexAttribArray(ne),se[ne]=0)}function I(z,se,ne,ce,te,ue,fe){fe===!0?r.vertexAttribIPointer(z,se,ne,te,ue):r.vertexAttribPointer(z,se,ne,ce,te,ue)}function K(z,se,ne,ce){if(i.isWebGL2===!1&&(z.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const te=ce.attributes,ue=ne.getAttributes(),fe=se.defaultAttributeValues;for(const ve in ue){const De=ue[ve];if(De.location>=0){let tt=te[ve];if(tt===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),tt!==void 0){const Q=tt.normalized,de=tt.itemSize,Re=t.get(tt);if(Re===void 0)continue;const je=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,Mt=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||tt.gpuType===kp);if(tt.isInterleavedBufferAttribute){const Ve=tt.data,W=Ve.stride,Wt=tt.offset;if(Ve.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)B(De.location+Ue,Ve.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)D(De.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ue=0;Ue<De.locationSize;Ue++)I(De.location+Ue,de/De.locationSize,Oe,Q,W*Ce,(Wt+de/De.locationSize*Ue)*Ce,Mt)}else{if(tt.isInstancedBufferAttribute){for(let Ve=0;Ve<De.locationSize;Ve++)B(De.location+Ve,tt.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ve=0;Ve<De.locationSize;Ve++)D(De.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ve=0;Ve<De.locationSize;Ve++)I(De.location+Ve,de/De.locationSize,Oe,Q,de*Ce,de/De.locationSize*Ve*Ce,Mt)}}else if(fe!==void 0){const Q=fe[ve];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(De.location,Q);break;case 3:r.vertexAttrib3fv(De.location,Q);break;case 4:r.vertexAttrib4fv(De.location,Q);break;default:r.vertexAttrib1fv(De.location,Q)}}}}G()}function Se(){Me();for(const z in c){const se=c[z];for(const ne in se){const ce=se[ne];for(const te in ce)y(ce[te].object),delete ce[te];delete se[ne]}delete c[z]}}function T(z){if(c[z.id]===void 0)return;const se=c[z.id];for(const ne in se){const ce=se[ne];for(const te in ce)y(ce[te].object),delete ce[te];delete se[ne]}delete c[z.id]}function U(z){for(const se in c){const ne=c[se];if(ne[z.id]===void 0)continue;const ce=ne[z.id];for(const te in ce)y(ce[te].object),delete ce[te];delete ne[z.id]}}function Me(){_e(),p=!0,d!==f&&(d=f,x(d.object))}function _e(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:Me,resetDefaultState:_e,dispose:Se,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:D,disableUnusedAttributes:G}}function MA(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let x,y;if(o)x=r,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v;y++)this.render(p[y],_[y]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let y=0;for(let A=0;A<v;A++)y+=_[A];t.update(y,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function EA(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,D=u||e.has("OES_texture_float"),B=R&&D,G=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:A,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:N,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:B,maxSamples:G}}function yA(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new rr,c=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,x){const y=_.clippingPlanes,A=_.clipIntersection,g=_.clipShadows,m=r.get(_);if(!o||y===null||y.length===0||a&&!g)a?p(null):d();else{const N=a?0:i,R=N*4;let D=m.clippingState||null;f.value=D,D=p(y,v,R,x);for(let B=0;B!==R;++B)D[B]=t[B];m.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,x,y){const A=_!==null?_.length:0;let g=null;if(A!==0){if(g=f.value,y!==!0||g===null){const m=x+A*4,N=v.matrixWorldInverse;c.getNormalMatrix(N),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,D=x;R!==A;++R,D+=4)u.copy(_[R]).applyMatrix4(N,c),u.normal.toArray(g,D),g[D+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function bA(r){let e=new WeakMap;function t(u,c){return c===eu?u.mapping=Ls:c===tu&&(u.mapping=Ps),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===eu||c===tu)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new Uy(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class TA extends am{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Hd=[.125,.215,.35,.446,.526,.582],Pr=20,Bc=new TA,kd=new bt;let Gc=null,zc=0,Hc=0;const Cr=(1+Math.sqrt(5))/2,Ms=1/Cr,Vd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Cr,Ms),new X(0,Cr,-Ms),new X(Ms,0,Cr),new X(-Ms,0,Cr),new X(Cr,Ms,0),new X(-Cr,Ms,0)];class Wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Gc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,zc,Hc),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:po,format:ai,colorSpace:hr,depthBuffer:!1},o=Xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AA(a)),this._blurMaterial=wA(a,e,t)}return o}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Bc)}_sceneToCubeUV(e,t,i,o){const c=new Zn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(kd),p.toneMapping=lr,p.autoClear=!1;const x=new hu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),y=new li(new _o,x);let A=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,A=!0):(x.color.copy(kd),A=!0);for(let m=0;m<6;m++){const N=m%3;N===0?(c.up.set(0,f[m],0),c.lookAt(d[m],0,0)):N===1?(c.up.set(0,0,f[m]),c.lookAt(0,d[m],0)):(c.up.set(0,f[m],0),c.lookAt(0,0,d[m]));const R=this._cubeSize;Ca(o,N*R,m>2?R:0,R,R),p.setRenderTarget(o),A&&p.render(y,c),p.render(e,c)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ls||e.mapping===Ps;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new li(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ca(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Bc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Vd[(o-1)%Vd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new li(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Pr-1),A=a/y,g=isFinite(a)?1+Math.floor(p*A):Pr;g>Pr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);const m=[];let N=0;for(let I=0;I<Pr;++I){const K=I/A,Se=Math.exp(-K*K/2);m.push(Se),I===0?N+=Se:I<g&&(N+=2*Se)}for(let I=0;I<m.length;I++)m[I]=m[I]/N;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=m,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=y,v.mipInt.value=R-i;const D=this._sizeLods[o],B=3*D*(o>R-bs?o-R+bs:0),G=4*(this._cubeSize-D);Ca(t,B,G,3*D,2*D),f.setRenderTarget(t),f.render(_,Bc)}}function AA(r){const e=[],t=[],i=[];let o=r;const a=r-bs+1+Hd.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-bs?f=Hd[u-r+bs-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,A=3,g=2,m=1,N=new Float32Array(A*y*x),R=new Float32Array(g*y*x),D=new Float32Array(m*y*x);for(let G=0;G<x;G++){const I=G%3*2/3-1,K=G>2?0:-1,Se=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];N.set(Se,A*y*G),R.set(v,g*y*G);const T=[G,G,G,G,G,G];D.set(T,m*y*G)}const B=new dr;B.setAttribute("position",new ci(N,A)),B.setAttribute("uv",new ci(R,g)),B.setAttribute("faceIndex",new ci(D,m)),e.push(B),o>bs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xd(r,e,t){const i=new Nr(r,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function wA(r,e,t){const i=new Float32Array(Pr),o=new X(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qd(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Yd(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function RA(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===eu||f===tu,p=f===Ls||f===Ps;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Wd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new Wd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function CA(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function LA(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const A=v.morphAttributes[y];for(let g=0,m=A.length;g<m;g++)e.remove(A[g])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const y in x){const A=x[y];for(let g=0,m=A.length;g<m;g++)e.update(A[g],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,y=_.attributes.position;let A=0;if(x!==null){const N=x.array;A=x.version;for(let R=0,D=N.length;R<D;R+=3){const B=N[R+0],G=N[R+1],I=N[R+2];v.push(B,G,G,I,I,B)}}else if(y!==void 0){const N=y.array;A=y.version;for(let R=0,D=N.length/3-1;R<D;R+=3){const B=R+0,G=R+1,I=R+2;v.push(B,G,G,I,I,B)}}else return;const g=new(jp(v)?sm:rm)(v,1);g.version=A;const m=a.get(_);m&&e.remove(m),a.set(_,g)}function p(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function PA(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,y){r.drawElements(a,y,c,x*f),t.update(y,a,1)}function _(x,y,A){if(A===0)return;let g,m;if(o)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,y,c,x*f,A),t.update(y,a,A)}function v(x,y,A){if(A===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<A;m++)this.render(x[m]/f,y[m]);else{g.multiDrawElementsWEBGL(a,y,0,c,x,0,A);let m=0;for(let N=0;N<A;N++)m+=y[N];t.update(m,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function IA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function DA(r,e){return r[0]-e[0]}function UA(r,e){return Math.abs(e[1])-Math.abs(r[1])}function NA(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new cn,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,A=y!==void 0?y.length:0;let g=a.get(p);if(g===void 0||g.count!==A){let _e=function(){U.dispose(),a.delete(p),p.removeEventListener("dispose",_e)};var x=_e;g!==void 0&&g.texture.dispose();const m=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,R=p.morphAttributes.color!==void 0,D=p.morphAttributes.position||[],B=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let I=0;m===!0&&(I=1),N===!0&&(I=2),R===!0&&(I=3);let K=p.attributes.position.count*I,Se=1;K>e.maxTextureSize&&(Se=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const T=new Float32Array(K*Se*4*A),U=new em(T,K,Se,A);U.type=_i,U.needsUpdate=!0;const Me=I*4;for(let z=0;z<A;z++){const se=D[z],ne=B[z],ce=G[z],te=K*Se*4*z;for(let ue=0;ue<se.count;ue++){const fe=ue*Me;m===!0&&(u.fromBufferAttribute(se,ue),T[te+fe+0]=u.x,T[te+fe+1]=u.y,T[te+fe+2]=u.z,T[te+fe+3]=0),N===!0&&(u.fromBufferAttribute(ne,ue),T[te+fe+4]=u.x,T[te+fe+5]=u.y,T[te+fe+6]=u.z,T[te+fe+7]=0),R===!0&&(u.fromBufferAttribute(ce,ue),T[te+fe+8]=u.x,T[te+fe+9]=u.y,T[te+fe+10]=u.z,T[te+fe+11]=ce.itemSize===4?u.w:1)}}g={count:A,texture:U,size:new lt(K,Se)},a.set(p,g),p.addEventListener("dispose",_e)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let m=0;for(let R=0;R<v.length;R++)m+=v[R];const N=p.morphTargetsRelative?1:1-m;_.getUniforms().setValue(r,"morphTargetBaseInfluence",N),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const y=v===void 0?0:v.length;let A=i[p.id];if(A===void 0||A.length!==y){A=[];for(let D=0;D<y;D++)A[D]=[D,0];i[p.id]=A}for(let D=0;D<y;D++){const B=A[D];B[0]=D,B[1]=v[D]}A.sort(UA);for(let D=0;D<8;D++)D<y&&A[D][1]?(c[D][0]=A[D][0],c[D][1]=A[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(DA);const g=p.morphAttributes.position,m=p.morphAttributes.normal;let N=0;for(let D=0;D<8;D++){const B=c[D],G=B[0],I=B[1];G!==Number.MAX_SAFE_INTEGER&&I?(g&&p.getAttribute("morphTarget"+D)!==g[G]&&p.setAttribute("morphTarget"+D,g[G]),m&&p.getAttribute("morphNormal"+D)!==m[G]&&p.setAttribute("morphNormal"+D,m[G]),o[D]=I,N+=I):(g&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),m&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),o[D]=0)}const R=p.morphTargetsRelative?1:1-N;_.getUniforms().setValue(r,"morphTargetBaseInfluence",R),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function OA(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class fm extends yn{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Ur,p!==Ur&&p!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Ur&&(i=or),i===void 0&&p===Is&&(i=Dr),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=f!==void 0?f:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hm=new yn,dm=new fm(1,1);dm.compareFunction=Zp;const pm=new em,mm=new _y,gm=new lm,$d=[],Kd=[],Zd=new Float32Array(16),jd=new Float32Array(9),Jd=new Float32Array(4);function Fs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=$d[o];if(a===void 0&&(a=new Float32Array(o),$d[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ja(r,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function FA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function GA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function zA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function HA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Jd.set(i),r.uniformMatrix2fv(this.addr,!1,Jd),tn(t,i)}}function kA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jd.set(i),r.uniformMatrix3fv(this.addr,!1,jd),tn(t,i)}}function VA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Zd.set(i),r.uniformMatrix4fv(this.addr,!1,Zd),tn(t,i)}}function WA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function $A(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function ZA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function jA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function JA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?dm:hm;t.setTexture2D(e||a,o)}function QA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||mm,o)}function ew(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||gm,o)}function tw(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||pm,o)}function nw(r){switch(r){case 5126:return FA;case 35664:return BA;case 35665:return GA;case 35666:return zA;case 35674:return HA;case 35675:return kA;case 35676:return VA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return $A;case 36294:return KA;case 36295:return ZA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(r,e){r.uniform1fv(this.addr,e)}function rw(r,e){const t=Fs(e,this.size,2);r.uniform2fv(this.addr,t)}function sw(r,e){const t=Fs(e,this.size,3);r.uniform3fv(this.addr,t)}function ow(r,e){const t=Fs(e,this.size,4);r.uniform4fv(this.addr,t)}function aw(r,e){const t=Fs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lw(r,e){const t=Fs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cw(r,e){const t=Fs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uw(r,e){r.uniform1iv(this.addr,e)}function fw(r,e){r.uniform2iv(this.addr,e)}function hw(r,e){r.uniform3iv(this.addr,e)}function dw(r,e){r.uniform4iv(this.addr,e)}function pw(r,e){r.uniform1uiv(this.addr,e)}function mw(r,e){r.uniform2uiv(this.addr,e)}function gw(r,e){r.uniform3uiv(this.addr,e)}function _w(r,e){r.uniform4uiv(this.addr,e)}function vw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||hm,a[u])}function xw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||mm,a[u])}function Sw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||gm,a[u])}function Mw(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||pm,a[u])}function Ew(r){switch(r){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}class yw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nw(t.type)}}class bw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ew(t.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Qd(r,e){r.seq.push(e),r.map[e.id]=e}function Aw(r,e,t){const i=r.name,o=i.length;for(kc.lastIndex=0;;){const a=kc.exec(i),u=kc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){Qd(t,d===void 0?new yw(c,r,e):new bw(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new Tw(c),Qd(t,_)),t=_}}}class Na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Aw(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function ep(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const ww=37297;let Rw=0;function Cw(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function Lw(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let i;switch(e===t?i="":e===za&&t===Ga?i="LinearDisplayP3ToLinearSRGB":e===Ga&&t===za&&(i="LinearSRGBToLinearDisplayP3"),r){case hr:case Ka:return[i,"LinearTransferOETF"];case mi:case uu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function tp(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Cw(r.getShaderSource(e),u)}else return o}function Pw(r,e){const t=Lw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Iw(r,e){let t;switch(e){case TE:t="Linear";break;case AE:t="Reinhard";break;case wE:t="OptimizedCineon";break;case RE:t="ACESFilmic";break;case LE:t="AgX";break;case PE:t="Neutral";break;case CE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dw(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Uw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Nw(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ow(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function Ts(r){return r!==""}function np(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(Fw,Gw)}const Bw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gw(r,e){let t=mt[e];if(t===void 0){const i=Bw.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(r){return r.replace(zw,Hw)}function Hw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function sp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function kw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===QM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ls:case Ps:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ww(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Xw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case yE:e="ENVMAP_BLENDING_MIX";break;case bE:e="ENVMAP_BLENDING_ADD";break}return e}function qw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=kw(t),d=Vw(t),p=Ww(t),_=Xw(t),v=qw(t),x=t.isWebGL2?"":Dw(t),y=Uw(t),A=Nw(a),g=o.createProgram();let m,N,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ts).join(`
`),m.length>0&&(m+=`
`),N=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ts).join(`
`),N.length>0&&(N+=`
`)):(m=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),N=[x,sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?mt.tonemapping_pars_fragment:"",t.toneMapping!==lr?Iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Pw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),u=ou(u),u=np(u,t),u=ip(u,t),c=ou(c),c=np(c,t),c=ip(c,t),u=rp(u),c=rp(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const D=R+m+u,B=R+N+c,G=ep(o,o.VERTEX_SHADER,D),I=ep(o,o.FRAGMENT_SHADER,B);o.attachShader(g,G),o.attachShader(g,I),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function K(Me){if(r.debug.checkShaderErrors){const _e=o.getProgramInfoLog(g).trim(),z=o.getShaderInfoLog(G).trim(),se=o.getShaderInfoLog(I).trim();let ne=!0,ce=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,g,G,I);else{const te=tp(o,G,"vertex"),ue=tp(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+Me.name+`
Material Type: `+Me.type+`

Program Info Log: `+_e+`
`+te+`
`+ue)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(z===""||se==="")&&(ce=!1);ce&&(Me.diagnostics={runnable:ne,programLog:_e,vertexShader:{log:z,prefix:m},fragmentShader:{log:se,prefix:N}})}o.deleteShader(G),o.deleteShader(I),Se=new Na(o,g),T=Ow(o,g)}let Se;this.getUniforms=function(){return Se===void 0&&K(this),Se};let T;this.getAttributes=function(){return T===void 0&&K(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(g,ww)),U},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=G,this.fragmentShader=I,this}let $w=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zw(e),t.set(e,i)),i}}class Zw{constructor(e){this.id=$w++,this.code=e,this.usedTimes=0}}function jw(r,e,t,i,o,a,u){const c=new nm,f=new Kw,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return d.add(T),T===0?"uv":`uv${T}`}function m(T,U,Me,_e,z){const se=_e.fog,ne=z.geometry,ce=T.isMeshStandardMaterial?_e.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),ue=te&&te.mapping===$a?te.image.height:null,fe=A[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=ve!==void 0?ve.length:0;let tt=0;ne.morphAttributes.position!==void 0&&(tt=1),ne.morphAttributes.normal!==void 0&&(tt=2),ne.morphAttributes.color!==void 0&&(tt=3);let Q,de,Re,je;if(fe){const yt=gi[fe];Q=yt.vertexShader,de=yt.fragmentShader}else Q=T.vertexShader,de=T.fragmentShader,f.update(T),Re=f.getVertexShaderID(T),je=f.getFragmentShaderID(T);const Oe=r.getRenderTarget(),Ce=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Ve=!!T.map,W=!!T.matcap,Wt=!!te,Ue=!!T.aoMap,Je=!!T.lightMap,ke=!!T.bumpMap,et=!!T.normalMap,nt=!!T.displacementMap,ct=!!T.emissiveMap,Tt=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,ee=T.clearcoat>0,oe=T.iridescence>0,me=T.sheen>0,pe=T.transmission>0,Ze=M&&!!T.anisotropyMap,He=ee&&!!T.clearcoatMap,ye=ee&&!!T.clearcoatNormalMap,Te=ee&&!!T.clearcoatRoughnessMap,Qe=oe&&!!T.iridescenceMap,Ee=oe&&!!T.iridescenceThicknessMap,Nt=me&&!!T.sheenColorMap,st=me&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,L=pe&&!!T.transmissionMap,le=pe&&!!T.thicknessMap,Ne=!!T.gradientMap,O=!!T.alphaMap,xe=T.alphaTest>0,q=!!T.alphaHash,ge=!!T.extensions;let we=lr;T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const dt={isWebGL2:_,shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:de,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Mt,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:hr,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:W,envMap:Wt,envMapMode:Wt&&te.mapping,envMapCubeUVHeight:ue,aoMap:Ue,lightMap:Je,bumpMap:ke,normalMap:et,displacementMap:x&&nt,emissiveMap:ct,normalMapObjectSpace:et&&T.normalMapType===kE,normalMapTangentSpace:et&&T.normalMapType===HE,metalnessMap:Tt,roughnessMap:C,anisotropy:M,anisotropyMap:Ze,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,iridescence:oe,iridescenceMap:Qe,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Nt,sheenRoughnessMap:st,specularMap:ze,specularColorMap:Pe,specularIntensityMap:Fe,transmission:pe,transmissionMap:L,thicknessMap:le,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===As&&T.alphaToCoverage===!1,alphaMap:O,alphaTest:xe,alphaHash:q,combine:T.combine,mapUv:Ve&&g(T.map.channel),aoMapUv:Ue&&g(T.aoMap.channel),lightMapUv:Je&&g(T.lightMap.channel),bumpMapUv:ke&&g(T.bumpMap.channel),normalMapUv:et&&g(T.normalMap.channel),displacementMapUv:nt&&g(T.displacementMap.channel),emissiveMapUv:ct&&g(T.emissiveMap.channel),metalnessMapUv:Tt&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:Ze&&g(T.anisotropyMap.channel),clearcoatMapUv:He&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:st&&g(T.sheenRoughnessMap.channel),specularMapUv:ze&&g(T.specularMap.channel),specularColorMapUv:Pe&&g(T.specularColorMap.channel),specularIntensityMapUv:Fe&&g(T.specularIntensityMap.channel),transmissionMapUv:L&&g(T.transmissionMap.channel),thicknessMapUv:le&&g(T.thicknessMap.channel),alphaMapUv:O&&g(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(et||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(Ve||O),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:tt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Me.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===Pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ge&&T.extensions.derivatives===!0,extensionFragDepth:ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=d.has(1),dt.vertexUv2s=d.has(2),dt.vertexUv3s=d.has(3),d.clear(),dt}function N(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Me in T.defines)U.push(Me),U.push(T.defines[Me]);return T.isRawShaderMaterial===!1&&(R(U,T),D(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function R(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),T.push(c.mask)}function B(T){const U=A[T.type];let Me;if(U){const _e=gi[U];Me=Ly.clone(_e.uniforms)}else Me=T.uniforms;return Me}function G(T,U){let Me;for(let _e=0,z=p.length;_e<z;_e++){const se=p[_e];if(se.cacheKey===U){Me=se,++Me.usedTimes;break}}return Me===void 0&&(Me=new Yw(r,U,T,a),p.push(Me)),Me}function I(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),T.destroy()}}function K(T){f.remove(T)}function Se(){f.dispose()}return{getParameters:m,getProgramCacheKey:N,getUniforms:B,acquireProgram:G,releaseProgram:I,releaseShaderCache:K,programs:p,dispose:Se}}function Jw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function Qw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ap(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,y,A,g){let m=r[e];return m===void 0?(m={id:_.id,object:_,geometry:v,material:x,groupOrder:y,renderOrder:_.renderOrder,z:A,group:g},r[e]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=A,m.group=g),e++,m}function c(_,v,x,y,A,g){const m=u(_,v,x,y,A,g);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):t.push(m)}function f(_,v,x,y,A,g){const m=u(_,v,x,y,A,g);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):t.unshift(m)}function d(_,v){t.length>1&&t.sort(_||Qw),i.length>1&&i.sort(v||op),o.length>1&&o.sort(v||op)}function p(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function eR(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new ap,r.set(i,[u])):o>=a.length?(u=new ap,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function tR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new bt};break;case"SpotLight":t={position:new X,direction:new X,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function nR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iR=0;function rR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sR(r,e){const t=new tR,i=nR(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,u=new qt,c=new qt;function f(p,_){let v=0,x=0,y=0;for(let Me=0;Me<9;Me++)o.probe[Me].set(0,0,0);let A=0,g=0,m=0,N=0,R=0,D=0,B=0,G=0,I=0,K=0,Se=0;p.sort(rR);const T=_===!0?Math.PI:1;for(let Me=0,_e=p.length;Me<_e;Me++){const z=p[Me],se=z.color,ne=z.intensity,ce=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=se.r*ne*T,x+=se.g*ne*T,y+=se.b*ne*T;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(z.sh.coefficients[ue],ne);Se++}else if(z.isDirectionalLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const fe=z.shadow,ve=i.get(z);ve.shadowBias=fe.bias,ve.shadowNormalBias=fe.normalBias,ve.shadowRadius=fe.radius,ve.shadowMapSize=fe.mapSize,o.directionalShadow[A]=ve,o.directionalShadowMap[A]=te,o.directionalShadowMatrix[A]=z.shadow.matrix,D++}o.directional[A]=ue,A++}else if(z.isSpotLight){const ue=t.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(se).multiplyScalar(ne*T),ue.distance=ce,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,o.spot[m]=ue;const fe=z.shadow;if(z.map&&(o.spotLightMap[I]=z.map,I++,fe.updateMatrices(z),z.castShadow&&K++),o.spotLightMatrix[m]=fe.matrix,z.castShadow){const ve=i.get(z);ve.shadowBias=fe.bias,ve.shadowNormalBias=fe.normalBias,ve.shadowRadius=fe.radius,ve.shadowMapSize=fe.mapSize,o.spotShadow[m]=ve,o.spotShadowMap[m]=te,G++}m++}else if(z.isRectAreaLight){const ue=t.get(z);ue.color.copy(se).multiplyScalar(ne),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),o.rectArea[N]=ue,N++}else if(z.isPointLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const fe=z.shadow,ve=i.get(z);ve.shadowBias=fe.bias,ve.shadowNormalBias=fe.normalBias,ve.shadowRadius=fe.radius,ve.shadowMapSize=fe.mapSize,ve.shadowCameraNear=fe.camera.near,ve.shadowCameraFar=fe.camera.far,o.pointShadow[g]=ve,o.pointShadowMap[g]=te,o.pointShadowMatrix[g]=z.shadow.matrix,B++}o.point[g]=ue,g++}else if(z.isHemisphereLight){const ue=t.get(z);ue.skyColor.copy(z.color).multiplyScalar(ne*T),ue.groundColor.copy(z.groundColor).multiplyScalar(ne*T),o.hemi[R]=ue,R++}}N>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=be.LTC_FLOAT_1,o.rectAreaLTC2=be.LTC_FLOAT_2):(o.rectAreaLTC1=be.LTC_HALF_1,o.rectAreaLTC2=be.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=be.LTC_FLOAT_1,o.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=be.LTC_HALF_1,o.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=y;const U=o.hash;(U.directionalLength!==A||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==N||U.hemiLength!==R||U.numDirectionalShadows!==D||U.numPointShadows!==B||U.numSpotShadows!==G||U.numSpotMaps!==I||U.numLightProbes!==Se)&&(o.directional.length=A,o.spot.length=m,o.rectArea.length=N,o.point.length=g,o.hemi.length=R,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=B,o.pointShadowMap.length=B,o.spotShadow.length=G,o.spotShadowMap.length=G,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=B,o.spotLightMatrix.length=G+I-K,o.spotLightMap.length=I,o.numSpotLightShadowsWithMaps=K,o.numLightProbes=Se,U.directionalLength=A,U.pointLength=g,U.spotLength=m,U.rectAreaLength=N,U.hemiLength=R,U.numDirectionalShadows=D,U.numPointShadows=B,U.numSpotShadows=G,U.numSpotMaps=I,U.numLightProbes=Se,o.version=iR++)}function d(p,_){let v=0,x=0,y=0,A=0,g=0;const m=_.matrixWorldInverse;for(let N=0,R=p.length;N<R;N++){const D=p[N];if(D.isDirectionalLight){const B=o.directional[v];B.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(m),v++}else if(D.isSpotLight){const B=o.spot[y];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(m),B.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(a),B.direction.transformDirection(m),y++}else if(D.isRectAreaLight){const B=o.rectArea[A];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(m),c.identity(),u.copy(D.matrixWorld),u.premultiply(m),c.extractRotation(u),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),B.halfWidth.applyMatrix4(c),B.halfHeight.applyMatrix4(c),A++}else if(D.isPointLight){const B=o.point[x];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(m),x++}else if(D.isHemisphereLight){const B=o.hemi[g];B.direction.setFromMatrixPosition(D.matrixWorld),B.direction.transformDirection(m),g++}}}return{setup:f,setupView:d,state:o}}function lp(r,e){const t=new sR(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function oR(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new lp(r,e),t.set(a,[f])):u>=c.length?(f=new lp(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class aR extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lR extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uR=`uniform sampler2D shadow_pass;
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
}`;function fR(r,e,t){let i=new cm;const o=new lt,a=new lt,u=new cn,c=new aR({depthPacking:zE}),f=new lR,d={},p=t.maxTextureSize,_={[ur]:Pn,[Pn]:ur,[Bi]:Bi},v=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:cR,fragmentShader:uR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new dr;y.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new li(y,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let m=this.type;this.render=function(G,I,K){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||G.length===0)return;const Se=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),Me=r.state;Me.setBlending(ar),Me.buffers.color.setClear(1,1,1,1),Me.buffers.depth.setTest(!0),Me.setScissorTest(!1);const _e=m!==Oi&&this.type===Oi,z=m===Oi&&this.type!==Oi;for(let se=0,ne=G.length;se<ne;se++){const ce=G[se],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ue=te.getFrameExtents();if(o.multiply(ue),a.copy(te.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ue.x),o.x=a.x*ue.x,te.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ue.y),o.y=a.y*ue.y,te.mapSize.y=a.y)),te.map===null||_e===!0||z===!0){const ve=this.type!==Oi?{minFilter:ln,magFilter:ln}:{};te.map!==null&&te.map.dispose(),te.map=new Nr(o.x,o.y,ve),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const fe=te.getViewportCount();for(let ve=0;ve<fe;ve++){const De=te.getViewport(ve);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),Me.viewport(u),te.updateMatrices(ce,ve),i=te.getFrustum(),D(I,K,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Oi&&N(te,K),te.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(Se,T,U)};function N(G,I){const K=e.update(A);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,x.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Nr(o.x,o.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(I,null,K,v,A,null),x.uniforms.shadow_pass.value=G.mapPass.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(I,null,K,x,A,null)}function R(G,I,K,Se){let T=null;const U=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(U!==void 0)T=U;else if(T=K.isPointLight===!0?f:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Me=T.uuid,_e=I.uuid;let z=d[Me];z===void 0&&(z={},d[Me]=z);let se=z[_e];se===void 0&&(se=T.clone(),z[_e]=se,I.addEventListener("dispose",B)),T=se}if(T.visible=I.visible,T.wireframe=I.wireframe,Se===Oi?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:_[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Me=r.properties.get(T);Me.light=K}return T}function D(G,I,K,Se,T){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&T===Oi)&&(!G.frustumCulled||i.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const _e=e.update(G),z=G.material;if(Array.isArray(z)){const se=_e.groups;for(let ne=0,ce=se.length;ne<ce;ne++){const te=se[ne],ue=z[te.materialIndex];if(ue&&ue.visible){const fe=R(G,ue,Se,T);G.onBeforeShadow(r,G,I,K,_e,fe,te),r.renderBufferDirect(K,null,_e,fe,G,te),G.onAfterShadow(r,G,I,K,_e,fe,te)}}}else if(z.visible){const se=R(G,z,Se,T);G.onBeforeShadow(r,G,I,K,_e,se,null),r.renderBufferDirect(K,null,_e,se,G,null),G.onAfterShadow(r,G,I,K,_e,se,null)}}const Me=G.children;for(let _e=0,z=Me.length;_e<z;_e++)D(Me[_e],I,K,Se,T)}function B(G){G.target.removeEventListener("dispose",B);for(const K in d){const Se=d[K],T=G.target.uuid;T in Se&&(Se[T].dispose(),delete Se[T])}}}function hR(r,e,t){const i=t.isWebGL2;function o(){let O=!1;const xe=new cn;let q=null;const ge=new cn(0,0,0,0);return{setMask:function(we){q!==we&&!O&&(r.colorMask(we,we,we,we),q=we)},setLocked:function(we){O=we},setClear:function(we,dt,yt,Rt,zt){zt===!0&&(we*=Rt,dt*=Rt,yt*=Rt),xe.set(we,dt,yt,Rt),ge.equals(xe)===!1&&(r.clearColor(we,dt,yt,Rt),ge.copy(xe))},reset:function(){O=!1,q=null,ge.set(-1,0,0,0)}}}function a(){let O=!1,xe=null,q=null,ge=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(we){xe!==we&&!O&&(r.depthMask(we),xe=we)},setFunc:function(we){if(q!==we){switch(we){case gE:r.depthFunc(r.NEVER);break;case _E:r.depthFunc(r.ALWAYS);break;case vE:r.depthFunc(r.LESS);break;case Fa:r.depthFunc(r.LEQUAL);break;case xE:r.depthFunc(r.EQUAL);break;case SE:r.depthFunc(r.GEQUAL);break;case ME:r.depthFunc(r.GREATER);break;case EE:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=we}},setLocked:function(we){O=we},setClear:function(we){ge!==we&&(r.clearDepth(we),ge=we)},reset:function(){O=!1,xe=null,q=null,ge=null}}}function u(){let O=!1,xe=null,q=null,ge=null,we=null,dt=null,yt=null,Rt=null,zt=null;return{setTest:function(Et){O||(Et?Ce(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Et){xe!==Et&&!O&&(r.stencilMask(Et),xe=Et)},setFunc:function(Et,Ct,nn){(q!==Et||ge!==Ct||we!==nn)&&(r.stencilFunc(Et,Ct,nn),q=Et,ge=Ct,we=nn)},setOp:function(Et,Ct,nn){(dt!==Et||yt!==Ct||Rt!==nn)&&(r.stencilOp(Et,Ct,nn),dt=Et,yt=Ct,Rt=nn)},setLocked:function(Et){O=Et},setClear:function(Et){zt!==Et&&(r.clearStencil(Et),zt=Et)},reset:function(){O=!1,xe=null,q=null,ge=null,we=null,dt=null,yt=null,Rt=null,zt=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},x={},y=new WeakMap,A=[],g=null,m=!1,N=null,R=null,D=null,B=null,G=null,I=null,K=null,Se=new bt(0,0,0),T=0,U=!1,Me=null,_e=null,z=null,se=null,ne=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ue=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(fe)[1]),te=ue>=1):fe.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),te=ue>=2);let ve=null,De={};const tt=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),de=new cn().fromArray(tt),Re=new cn().fromArray(Q);function je(O,xe,q,ge){const we=new Uint8Array(4),dt=r.createTexture();r.bindTexture(O,dt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<q;yt++)i&&(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)?r.texImage3D(xe,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(xe+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return dt}const Oe={};Oe[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Fa),nt(!1),ct(Hh),Ce(r.CULL_FACE),ke(ar);function Ce(O){v[O]!==!0&&(r.enable(O),v[O]=!0)}function Mt(O){v[O]!==!1&&(r.disable(O),v[O]=!1)}function Ve(O,xe){return x[O]!==xe?(r.bindFramebuffer(O,xe),x[O]=xe,i&&(O===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=xe),O===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=xe)),!0):!1}function W(O,xe){let q=A,ge=!1;if(O){q=y.get(xe),q===void 0&&(q=[],y.set(xe,q));const we=O.textures;if(q.length!==we.length||q[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,yt=we.length;dt<yt;dt++)q[dt]=r.COLOR_ATTACHMENT0+dt;q.length=we.length,ge=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,ge=!0);if(ge)if(t.isWebGL2)r.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const Ue={[Lr]:r.FUNC_ADD,[tE]:r.FUNC_SUBTRACT,[nE]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[Xh]=r.MIN,Ue[qh]=r.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ue[Xh]=O.MIN_EXT,Ue[qh]=O.MAX_EXT)}const Je={[iE]:r.ZERO,[rE]:r.ONE,[sE]:r.SRC_COLOR,[Jc]:r.SRC_ALPHA,[fE]:r.SRC_ALPHA_SATURATE,[cE]:r.DST_COLOR,[aE]:r.DST_ALPHA,[oE]:r.ONE_MINUS_SRC_COLOR,[Qc]:r.ONE_MINUS_SRC_ALPHA,[uE]:r.ONE_MINUS_DST_COLOR,[lE]:r.ONE_MINUS_DST_ALPHA,[hE]:r.CONSTANT_COLOR,[dE]:r.ONE_MINUS_CONSTANT_COLOR,[pE]:r.CONSTANT_ALPHA,[mE]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(O,xe,q,ge,we,dt,yt,Rt,zt,Et){if(O===ar){m===!0&&(Mt(r.BLEND),m=!1);return}if(m===!1&&(Ce(r.BLEND),m=!0),O!==eE){if(O!==N||Et!==U){if((R!==Lr||G!==Lr)&&(r.blendEquation(r.FUNC_ADD),R=Lr,G=Lr),Et)switch(O){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kh:r.blendFunc(r.ONE,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}D=null,B=null,I=null,K=null,Se.set(0,0,0),T=0,N=O,U=Et}return}we=we||xe,dt=dt||q,yt=yt||ge,(xe!==R||we!==G)&&(r.blendEquationSeparate(Ue[xe],Ue[we]),R=xe,G=we),(q!==D||ge!==B||dt!==I||yt!==K)&&(r.blendFuncSeparate(Je[q],Je[ge],Je[dt],Je[yt]),D=q,B=ge,I=dt,K=yt),(Rt.equals(Se)===!1||zt!==T)&&(r.blendColor(Rt.r,Rt.g,Rt.b,zt),Se.copy(Rt),T=zt),N=O,U=!1}function et(O,xe){O.side===Bi?Mt(r.CULL_FACE):Ce(r.CULL_FACE);let q=O.side===Pn;xe&&(q=!q),nt(q),O.blending===As&&O.transparent===!1?ke(ar):ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),f.setFunc(O.depthFunc),f.setTest(O.depthTest),f.setMask(O.depthWrite),c.setMask(O.colorWrite);const ge=O.stencilWrite;d.setTest(ge),ge&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(O){Me!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),Me=O)}function ct(O){O!==jM?(Ce(r.CULL_FACE),O!==_e&&(O===Hh?r.cullFace(r.BACK):O===JM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),_e=O}function Tt(O){O!==z&&(te&&r.lineWidth(O),z=O)}function C(O,xe,q){O?(Ce(r.POLYGON_OFFSET_FILL),(se!==xe||ne!==q)&&(r.polygonOffset(xe,q),se=xe,ne=q)):Mt(r.POLYGON_OFFSET_FILL)}function M(O){O?Ce(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ee(O){O===void 0&&(O=r.TEXTURE0+ce-1),ve!==O&&(r.activeTexture(O),ve=O)}function oe(O,xe,q){q===void 0&&(ve===null?q=r.TEXTURE0+ce-1:q=ve);let ge=De[q];ge===void 0&&(ge={type:void 0,texture:void 0},De[q]=ge),(ge.type!==O||ge.texture!==xe)&&(ve!==q&&(r.activeTexture(q),ve=q),r.bindTexture(O,xe||Oe[O]),ge.type=O,ge.texture=xe)}function me(){const O=De[ve];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){de.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),de.copy(O))}function Fe(O){Re.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Re.copy(O))}function L(O,xe){let q=_.get(xe);q===void 0&&(q=new WeakMap,_.set(xe,q));let ge=q.get(O);ge===void 0&&(ge=r.getUniformBlockIndex(xe,O.name),q.set(O,ge))}function le(O,xe){const ge=_.get(xe).get(O);p.get(xe)!==ge&&(r.uniformBlockBinding(xe,ge,O.__bindingPointIndex),p.set(xe,ge))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ve=null,De={},x={},y=new WeakMap,A=[],g=null,m=!1,N=null,R=null,D=null,B=null,G=null,I=null,K=null,Se=new bt(0,0,0),T=0,U=!1,Me=null,_e=null,z=null,se=null,ne=null,de.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:Mt,bindFramebuffer:Ve,drawBuffers:W,useProgram:Wt,setBlending:ke,setMaterial:et,setFlipSided:nt,setCullFace:ct,setLineWidth:Tt,setPolygonOffset:C,setScissorTest:M,activeTexture:ee,bindTexture:oe,unbindTexture:me,compressedTexImage2D:pe,compressedTexImage3D:Ze,texImage2D:st,texImage3D:ze,updateUBOMapping:L,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:Te,compressedTexSubImage3D:Qe,scissor:Pe,viewport:Fe,reset:Ne}}function dR(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,M){return y?new OffscreenCanvas(C,M):Va("canvas")}function g(C,M,ee,oe){let me=1;const pe=Tt(C);if((pe.width>oe||pe.height>oe)&&(me=oe/Math.max(pe.width,pe.height)),me<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ze=M?ka:Math.floor,He=Ze(me*pe.width),ye=Ze(me*pe.height);v===void 0&&(v=A(He,ye));const Te=ee?A(He,ye):v;return Te.width=He,Te.height=ye,Te.getContext("2d").drawImage(C,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+He+"x"+ye+")."),Te}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),C;return C}function m(C){const M=Tt(C);return su(M.width)&&su(M.height)}function N(C){return c?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==ln&&C.minFilter!==Ln}function R(C,M){return C.generateMipmaps&&M&&C.minFilter!==ln&&C.minFilter!==Ln}function D(C){r.generateMipmap(C)}function B(C,M,ee,oe,me=!1){if(c===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=M;if(M===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),M===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),M===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),M===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),M===r.RGBA){const Ze=me?Ba:It.getTransfer(oe);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=Ze===Gt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function G(C,M,ee){return R(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){return C===ln||C===Yh||C===no?r.NEAREST:r.LINEAR}function K(C){const M=C.target;M.removeEventListener("dispose",K),T(M),M.isVideoTexture&&_.delete(M)}function Se(C){const M=C.target;M.removeEventListener("dispose",Se),Me(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const ee=C.source,oe=x.get(ee);if(oe){const me=oe[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&U(C),Object.keys(oe).length===0&&x.delete(ee)}i.remove(C)}function U(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const ee=C.source,oe=x.get(ee);delete oe[M.__cacheKey],u.memory.textures--}function Me(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let me=0;me<M.__webglFramebuffer[oe].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[oe][me]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=C.textures;for(let oe=0,me=ee.length;oe<me;oe++){const pe=i.get(ee[oe]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(C)}let _e=0;function z(){_e=0}function se(){const C=_e;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),_e+=1,C}function ne(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ce(C,M){const ee=i.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,C,M);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+M)}function te(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+M)}function ue(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+M)}function fe(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){je(ee,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+M)}const ve={[nu]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[iu]:r.MIRRORED_REPEAT},De={[ln]:r.NEAREST,[Yh]:r.NEAREST_MIPMAP_NEAREST,[no]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[dc]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},tt={[VE]:r.NEVER,[KE]:r.ALWAYS,[WE]:r.LESS,[Zp]:r.LEQUAL,[XE]:r.EQUAL,[$E]:r.GEQUAL,[qE]:r.GREATER,[YE]:r.NOTEQUAL};function Q(C,M,ee){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===dc||M.magFilter===no||M.magFilter===Ir||M.minFilter===Ln||M.minFilter===dc||M.minFilter===no||M.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(C,r.TEXTURE_WRAP_S,ve[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ve[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ve[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==oi||M.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,I(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,I(M.minFilter)),M.minFilter!==ln&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==no&&M.minFilter!==Ir||M.type===_i&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===po&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function de(C,M){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",K));const oe=M.source;let me=x.get(oe);me===void 0&&(me={},x.set(oe,me));const pe=ne(M);if(pe!==C.__cacheKey){me[pe]===void 0&&(me[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),me[pe].usedTimes++;const Ze=me[C.__cacheKey];Ze!==void 0&&(me[C.__cacheKey].usedTimes--,Ze.usedTimes===0&&U(M)),C.__cacheKey=pe,C.__webglTexture=me[pe].texture}return ee}function Re(C,M,ee){let oe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=r.TEXTURE_3D);const me=de(C,M),pe=M.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+ee);const Ze=i.get(pe);if(pe.version!==Ze.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const He=It.getPrimaries(It.workingColorSpace),ye=M.colorSpace===sr?null:It.getPrimaries(M.colorSpace),Te=M.colorSpace===sr||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Qe=N(M)&&m(M.image)===!1;let Ee=g(M.image,Qe,!1,o.maxTextureSize);Ee=ct(M,Ee);const Nt=m(Ee)||c,st=a.convert(M.format,M.colorSpace);let ze=a.convert(M.type),Pe=B(M.internalFormat,st,ze,M.colorSpace,M.isVideoTexture);Q(oe,M,Nt);let Fe;const L=M.mipmaps,le=c&&M.isVideoTexture!==!0&&Pe!==Kp,Ne=Ze.__version===void 0||me===!0,O=pe.dataReady,xe=G(M,Ee,Nt);if(M.isDepthTexture)Pe=r.DEPTH_COMPONENT,c?M.type===_i?Pe=r.DEPTH_COMPONENT32F:M.type===or?Pe=r.DEPTH_COMPONENT24:M.type===Dr?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:M.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ur&&Pe===r.DEPTH_COMPONENT&&M.type!==cu&&M.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=or,ze=a.convert(M.type)),M.format===Is&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,M.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Dr,ze=a.convert(M.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,st,ze,null));else if(M.isDataTexture)if(L.length>0&&Nt){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,xe,Pe,L[0].width,L[0].height);for(let q=0,ge=L.length;q<ge;q++)Fe=L[q],le?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,st,ze,Fe.data);M.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,xe,Pe,Ee.width,Ee.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,st,ze,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,st,ze,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Pe,L[0].width,L[0].height,Ee.depth);for(let q=0,ge=L.length;q<ge;q++)Fe=L[q],M.format!==ai?st!==null?le?O&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,st,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Pe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,st,ze,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Pe,Fe.width,Fe.height,Ee.depth,0,st,ze,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,xe,Pe,L[0].width,L[0].height);for(let q=0,ge=L.length;q<ge;q++)Fe=L[q],M.format!==ai?st!==null?le?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,st,ze,Fe.data)}else if(M.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Pe,Ee.width,Ee.height,Ee.depth),O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,st,ze,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,st,ze,Ee.data);else if(M.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,xe,Pe,Ee.width,Ee.height,Ee.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,st,ze,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,st,ze,Ee.data);else if(M.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,xe,Pe,Ee.width,Ee.height);else{let q=Ee.width,ge=Ee.height;for(let we=0;we<xe;we++)t.texImage2D(r.TEXTURE_2D,we,Pe,q,ge,0,st,ze,null),q>>=1,ge>>=1}}else if(L.length>0&&Nt){if(le&&Ne){const q=Tt(L[0]);t.texStorage2D(r.TEXTURE_2D,xe,Pe,q.width,q.height)}for(let q=0,ge=L.length;q<ge;q++)Fe=L[q],le?O&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,st,ze,Fe):t.texImage2D(r.TEXTURE_2D,q,Pe,st,ze,Fe);M.generateMipmaps=!1}else if(le){if(Ne){const q=Tt(Ee);t.texStorage2D(r.TEXTURE_2D,xe,Pe,q.width,q.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,st,ze,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,st,ze,Ee);R(M,Nt)&&D(oe),Ze.__version=pe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function je(C,M,ee){if(M.image.length!==6)return;const oe=de(C,M),me=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ee);const pe=i.get(me);if(me.version!==pe.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Ze=It.getPrimaries(It.workingColorSpace),He=M.colorSpace===sr?null:It.getPrimaries(M.colorSpace),ye=M.colorSpace===sr||Ze===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Qe=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let q=0;q<6;q++)!Te&&!Qe?Ee[q]=g(M.image[q],!1,!0,o.maxCubemapSize):Ee[q]=Qe?M.image[q].image:M.image[q],Ee[q]=ct(M,Ee[q]);const Nt=Ee[0],st=m(Nt)||c,ze=a.convert(M.format,M.colorSpace),Pe=a.convert(M.type),Fe=B(M.internalFormat,ze,Pe,M.colorSpace),L=c&&M.isVideoTexture!==!0,le=pe.__version===void 0||oe===!0,Ne=me.dataReady;let O=G(M,Nt,st);Q(r.TEXTURE_CUBE_MAP,M,st);let xe;if(Te){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,O,Fe,Nt.width,Nt.height);for(let q=0;q<6;q++){xe=Ee[q].mipmaps;for(let ge=0;ge<xe.length;ge++){const we=xe[ge];M.format!==ai?ze!==null?L?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,we.width,we.height,ze,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,we.width,we.height,ze,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Fe,we.width,we.height,0,ze,Pe,we.data)}}}else{if(xe=M.mipmaps,L&&le){xe.length>0&&O++;const q=Tt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,O,Fe,q.width,q.height)}for(let q=0;q<6;q++)if(Qe){L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee[q].width,Ee[q].height,ze,Pe,Ee[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Ee[q].width,Ee[q].height,0,ze,Pe,Ee[q].data);for(let ge=0;ge<xe.length;ge++){const dt=xe[ge].image[q].image;L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,dt.width,dt.height,ze,Pe,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Fe,dt.width,dt.height,0,ze,Pe,dt.data)}}else{L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ze,Pe,Ee[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,ze,Pe,Ee[q]);for(let ge=0;ge<xe.length;ge++){const we=xe[ge];L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,ze,Pe,we.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Fe,ze,Pe,we.image[q])}}}R(M,st)&&D(r.TEXTURE_CUBE_MAP),pe.__version=me.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,ee,oe,me,pe){const Ze=a.convert(ee.format,ee.colorSpace),He=a.convert(ee.type),ye=B(ee.internalFormat,Ze,He,ee.colorSpace);if(!i.get(M).__hasExternalTextures){const Qe=Math.max(1,M.width>>pe),Ee=Math.max(1,M.height>>pe);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,pe,ye,Qe,Ee,M.depth,0,Ze,He,null):t.texImage2D(me,pe,ye,Qe,Ee,0,Ze,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,me,i.get(ee).__webglTexture,0,ke(M)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,me,i.get(ee).__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,M,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||et(M)){const me=M.depthTexture;me&&me.isDepthTexture&&(me.type===_i?oe=r.DEPTH_COMPONENT32F:me.type===or&&(oe=r.DEPTH_COMPONENT24));const pe=ke(M);et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,oe,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,oe,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=ke(M);ee&&et(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const oe=M.textures;for(let me=0;me<oe.length;me++){const pe=oe[me],Ze=a.convert(pe.format,pe.colorSpace),He=a.convert(pe.type),ye=B(pe.internalFormat,Ze,He,pe.colorSpace),Te=ke(M);ee&&et(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ye,M.width,M.height):et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,me=ke(M);if(M.depthTexture.format===Ur)et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Is)et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const M=i.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,C)}else if(ee){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(C,M,ee){const oe=i.get(C);M!==void 0&&Oe(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Ve(C)}function Wt(C){const M=C.texture,ee=i.get(C),oe=i.get(M);C.addEventListener("dispose",Se);const me=C.textures,pe=C.isWebGLCubeRenderTarget===!0,Ze=me.length>1,He=m(C)||c;if(Ze||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,u.memory.textures++),pe){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let Te=0;Te<M.mipmaps.length;Te++)ee.__webglFramebuffer[ye][Te]=r.createFramebuffer()}else ee.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ze)if(o.drawBuffers)for(let ye=0,Te=me.length;ye<Te;ye++){const Qe=i.get(me[ye]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&et(C)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<me.length;ye++){const Te=me[ye];ee.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const Qe=a.convert(Te.format,Te.colorSpace),Ee=a.convert(Te.type),Nt=B(Te.internalFormat,Qe,Ee,Te.colorSpace,C.isXRRenderTarget===!0),st=ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Nt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M,He);for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Oe(ee.__webglFramebuffer[ye][Te],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else Oe(ee.__webglFramebuffer[ye],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);R(M,He)&&D(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let ye=0,Te=me.length;ye<Te;ye++){const Qe=me[ye],Ee=i.get(Qe);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Q(r.TEXTURE_2D,Qe,He),Oe(ee.__webglFramebuffer,C,Qe,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),R(Qe,He)&&D(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),Q(ye,M,He),c&&M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Oe(ee.__webglFramebuffer[Te],C,M,r.COLOR_ATTACHMENT0,ye,Te);else Oe(ee.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ye,0);R(M,He)&&D(ye),t.unbindTexture()}C.depthBuffer&&Ve(C)}function Ue(C){const M=m(C)||c,ee=C.textures;for(let oe=0,me=ee.length;oe<me;oe++){const pe=ee[oe];if(R(pe,M)){const Ze=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(pe).__webglTexture;t.bindTexture(Ze,He),D(Ze),t.unbindTexture()}}}function Je(C){if(c&&C.samples>0&&et(C)===!1){const M=C.textures,ee=C.width,oe=C.height;let me=r.COLOR_BUFFER_BIT;const pe=[],Ze=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(C),ye=M.length>1;if(ye)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){pe.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&pe.push(Ze);const Qe=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Qe===!1&&(C.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[Te]),Qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ze])),ye){const Ee=i.get(M[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,me,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,He.__webglColorRenderbuffer[Te]);const Qe=i.get(M[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function ke(C){return Math.min(o.maxSamples,C.samples)}function et(C){const M=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(C){const M=u.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function ct(C,M){const ee=C.colorSpace,oe=C.format,me=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ru||ee!==hr&&ee!==sr&&(It.getTransfer(ee)===Gt?c===!1?e.has("EXT_sRGB")===!0&&oe===ai?(C.format=ru,C.minFilter=Ln,C.generateMipmaps=!1):M=Jp.sRGBToLinear(M):(oe!==ai||me!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),M}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=z,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=fe,this.rebindTextures=W,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=et}function pR(r,e,t){const i=t.isWebGL2;function o(a,u=sr){let c;const f=It.getTransfer(u);if(a===cr)return r.UNSIGNED_BYTE;if(a===Vp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Wp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===IE)return r.BYTE;if(a===DE)return r.SHORT;if(a===cu)return r.UNSIGNED_SHORT;if(a===kp)return r.INT;if(a===or)return r.UNSIGNED_INT;if(a===_i)return r.FLOAT;if(a===po)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===UE)return r.ALPHA;if(a===ai)return r.RGBA;if(a===NE)return r.LUMINANCE;if(a===OE)return r.LUMINANCE_ALPHA;if(a===Ur)return r.DEPTH_COMPONENT;if(a===Is)return r.DEPTH_STENCIL;if(a===ru)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Xp)return r.RED;if(a===qp)return r.RED_INTEGER;if(a===FE)return r.RG;if(a===Yp)return r.RG_INTEGER;if(a===$p)return r.RGBA_INTEGER;if(a===pc||a===mc||a===gc||a===_c)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$h||a===Kh||a===Zh||a===jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kp)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Jh||a===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Jh)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ed||a===td||a===nd||a===id||a===rd||a===sd||a===od||a===ad||a===ld||a===cd||a===ud||a===fd||a===hd||a===dd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ed)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===td)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===nd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===id)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===od)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ad)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ld)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ud)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===hd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===dd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vc||a===pd||a===md)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===vc)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===BE||a===gd||a===_d||a===vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===vc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_d)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dr?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class mR extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gR={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const g=t.getJointPose(A,i),m=this._getHandJoint(d,A);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,y=.005;d.inputState.pinching&&v>x+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(gR)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`;class xR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new yn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new fr({extensions:{fragDepth:!0},vertexShader:_R,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new ja(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class SR extends Fr{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,x=null,y=null;const A=new xR,g=t.getContextAttributes();let m=null,N=null;const R=[],D=[],B=new lt;let G=null;const I=new Zn;I.layers.enable(1),I.viewport=new cn;const K=new Zn;K.layers.enable(2),K.viewport=new cn;const Se=[I,K],T=new mR;T.layers.enable(1),T.layers.enable(2);let U=null,Me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=R[Q];return de===void 0&&(de=new Vc,R[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=R[Q];return de===void 0&&(de=new Vc,R[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=R[Q];return de===void 0&&(de=new Vc,R[Q]=de),de.getHandSpace()};function _e(Q){const de=D.indexOf(Q.inputSource);if(de===-1)return;const Re=R[de];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){o.removeEventListener("select",_e),o.removeEventListener("selectstart",_e),o.removeEventListener("selectend",_e),o.removeEventListener("squeeze",_e),o.removeEventListener("squeezestart",_e),o.removeEventListener("squeezeend",_e),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<R.length;Q++){const de=D[Q];de!==null&&(D[Q]=null,R[Q].disconnect(de))}U=null,Me=null,A.reset(),e.setRenderTarget(m),x=null,v=null,_=null,o=null,N=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",_e),o.addEventListener("selectstart",_e),o.addEventListener("selectend",_e),o.addEventListener("squeeze",_e),o.addEventListener("squeezestart",_e),o.addEventListener("squeezeend",_e),o.addEventListener("end",z),o.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(B),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Nr(x.framebufferWidth,x.framebufferHeight,{format:ai,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,Re=null,je=null;g.depth&&(je=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?Is:Ur,Re=g.stencil?Dr:or);const Oe={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Nr(v.textureWidth,v.textureHeight,{format:ai,type:cr,depthTexture:new fm(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(N);Ce.__ignoreDepthValues=v.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),tt.setContext(o),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Q){for(let de=0;de<Q.removed.length;de++){const Re=Q.removed[de],je=D.indexOf(Re);je>=0&&(D[je]=null,R[je].disconnect(Re))}for(let de=0;de<Q.added.length;de++){const Re=Q.added[de];let je=D.indexOf(Re);if(je===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=D.length){D.push(Re),je=Ce;break}else if(D[Ce]===null){D[Ce]=Re,je=Ce;break}if(je===-1)break}const Oe=R[je];Oe&&Oe.connect(Re)}}const ne=new X,ce=new X;function te(Q,de,Re){ne.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Re.matrixWorld);const je=ne.distanceTo(ce),Oe=de.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,Mt=Oe[14]/(Oe[10]-1),Ve=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],Wt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],Je=(Ce[8]+1)/Ce[0],ke=Mt*Ue,et=Mt*Je,nt=je/(-Ue+Je),ct=nt*-Ue;de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ct),Q.translateZ(nt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const Tt=Mt+nt,C=Ve+nt,M=ke-ct,ee=et+(je-ct),oe=W*Ve/C*Tt,me=Wt*Ve/C*Tt;Q.projectionMatrix.makePerspective(M,ee,oe,me,Tt,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ue(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;A.texture!==null&&(Q.near=A.depthNear,Q.far=A.depthFar),T.near=K.near=I.near=Q.near,T.far=K.far=I.far=Q.far,(U!==T.near||Me!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,Me=T.far,I.near=U,I.far=Me,K.near=U,K.far=Me,I.updateProjectionMatrix(),K.updateProjectionMatrix(),Q.updateProjectionMatrix());const de=Q.parent,Re=T.cameras;ue(T,de);for(let je=0;je<Re.length;je++)ue(Re[je],de);Re.length===2?te(T,I,K):T.projectionMatrix.copy(I.projectionMatrix),fe(Q,T,de)};function fe(Q,de,Re){Re===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=mo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null};let ve=null;function De(Q,de){if(p=de.getViewerPose(d||u),y=de,p!==null){const Re=p.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let je=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,je=!0);for(let Ce=0;Ce<Re.length;Ce++){const Mt=Re[Ce];let Ve=null;if(x!==null)Ve=x.getViewport(Mt);else{const Wt=_.getViewSubImage(v,Mt);Ve=Wt.viewport,Ce===0&&(e.setRenderTargetTextures(N,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(N))}let W=Se[Ce];W===void 0&&(W=new Zn,W.layers.enable(Ce),W.viewport=new cn,Se[Ce]=W),W.matrix.fromArray(Mt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Mt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ce===0&&(T.matrix.copy(W.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),je===!0&&T.cameras.push(W)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&A.init(e,Ce,o.renderState)}}for(let Re=0;Re<R.length;Re++){const je=D[Re],Oe=R[Re];je!==null&&Oe!==void 0&&Oe.update(je,de,d||u)}A.render(e,T),ve&&ve(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),y=null}const tt=new um;tt.setAnimationLoop(De),this.setAnimationLoop=function(Q){ve=Q},this.dispose=function(){}}}const Rr=new zi,MR=new qt;function ER(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,om(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function o(g,m,N,R,D){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),_(g,m)):m.isMeshPhongMaterial?(a(g,m),p(g,m)):m.isMeshStandardMaterial?(a(g,m),v(g,m),m.isMeshPhysicalMaterial&&x(g,m,D)):m.isMeshMatcapMaterial?(a(g,m),y(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),A(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(u(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?f(g,m,N,R):m.isSpriteMaterial?d(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const N=e.get(m),R=N.envMap,D=N.envMapRotation;if(R&&(g.envMap.value=R,Rr.copy(D),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(Rr)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const B=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*B,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function f(g,m,N,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*N,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function v(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function x(g,m,N){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function A(g,m){const N=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function yR(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(N,R){const D=R.program;i.uniformBlockBinding(N,D)}function d(N,R){let D=o[N.id];D===void 0&&(y(N),D=p(N),o[N.id]=D,N.addEventListener("dispose",g));const B=R.program;i.updateUBOMapping(N,B);const G=e.render.frame;a[N.id]!==G&&(v(N),a[N.id]=G)}function p(N){const R=_();N.__bindingPointIndex=R;const D=r.createBuffer(),B=N.__size,G=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,D),D}function _(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const R=o[N.id],D=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let G=0,I=D.length;G<I;G++){const K=Array.isArray(D[G])?D[G]:[D[G]];for(let Se=0,T=K.length;Se<T;Se++){const U=K[Se];if(x(U,G,Se,B)===!0){const Me=U.__offset,_e=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let se=0;se<_e.length;se++){const ne=_e[se],ce=A(ne);typeof ne=="number"||typeof ne=="boolean"?(U.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,Me+z,U.__data)):ne.isMatrix3?(U.__data[0]=ne.elements[0],U.__data[1]=ne.elements[1],U.__data[2]=ne.elements[2],U.__data[3]=0,U.__data[4]=ne.elements[3],U.__data[5]=ne.elements[4],U.__data[6]=ne.elements[5],U.__data[7]=0,U.__data[8]=ne.elements[6],U.__data[9]=ne.elements[7],U.__data[10]=ne.elements[8],U.__data[11]=0):(ne.toArray(U.__data,z),z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Me,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(N,R,D,B){const G=N.value,I=R+"_"+D;if(B[I]===void 0)return typeof G=="number"||typeof G=="boolean"?B[I]=G:B[I]=G.clone(),!0;{const K=B[I];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return B[I]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function y(N){const R=N.uniforms;let D=0;const B=16;for(let I=0,K=R.length;I<K;I++){const Se=Array.isArray(R[I])?R[I]:[R[I]];for(let T=0,U=Se.length;T<U;T++){const Me=Se[T],_e=Array.isArray(Me.value)?Me.value:[Me.value];for(let z=0,se=_e.length;z<se;z++){const ne=_e[z],ce=A(ne),te=D%B;te!==0&&B-te<ce.boundary&&(D+=B-te),Me.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Me.__offset=D,D+=ce.storage}}}const G=D%B;return G>0&&(D+=B-G),N.__size=D,N.__cache={},this}function A(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function g(N){const R=N.target;R.removeEventListener("dispose",g);const D=u.indexOf(R.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete a[R.id]}function m(){for(const N in o)r.deleteBuffer(o[N]);u=[],o={},a={}}return{bind:f,update:d,dispose:m}}class _m{constructor(e={}){const{canvas:t=fy(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),y=new Int32Array(4);let A=null,g=null;const m=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const R=this;let D=!1,B=0,G=0,I=null,K=-1,Se=null;const T=new cn,U=new cn;let Me=null;const _e=new bt(0);let z=0,se=t.width,ne=t.height,ce=1,te=null,ue=null;const fe=new cn(0,0,se,ne),ve=new cn(0,0,se,ne);let De=!1;const tt=new cm;let Q=!1,de=!1,Re=null;const je=new qt,Oe=new lt,Ce=new X,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return I===null?ce:1}let W=i;function Wt(w,V){for(let Z=0;Z<w.length;Z++){const J=w[Z],Y=t.getContext(J,V);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",xe,!1),W===null){const V=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&V.shift(),W=Wt(V,w),W===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ue,Je,ke,et,nt,ct,Tt,C,M,ee,oe,me,pe,Ze,He,ye,Te,Qe,Ee,Nt,st,ze,Pe,Fe;function L(){Ue=new CA(W),Je=new EA(W,Ue,e),Ue.init(Je),ze=new pR(W,Ue,Je),ke=new hR(W,Ue,Je),et=new IA(W),nt=new Jw,ct=new dR(W,Ue,ke,nt,Je,ze,et),Tt=new bA(R),C=new RA(R),M=new Fy(W,Je),Pe=new SA(W,Ue,M,Je),ee=new LA(W,M,et,Pe),oe=new OA(W,ee,M,et),Ee=new NA(W,Je,ct),ye=new yA(nt),me=new jw(R,Tt,C,Ue,Je,Pe,ye),pe=new ER(R,nt),Ze=new eR,He=new oR(Ue,Je),Qe=new xA(R,Tt,C,ke,oe,v,f),Te=new fR(R,oe,Je),Fe=new yR(W,et,Je,ke),Nt=new MA(W,Ue,et,Je),st=new PA(W,Ue,et,Je),et.programs=me.programs,R.capabilities=Je,R.extensions=Ue,R.properties=nt,R.renderLists=Ze,R.shadowMap=Te,R.state=ke,R.info=et}L();const le=new SR(R,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=Ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(se,ne,!1))},this.getSize=function(w){return w.set(se,ne)},this.setSize=function(w,V,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,ne=V,t.width=Math.floor(w*ce),t.height=Math.floor(V*ce),Z===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(se*ce,ne*ce).floor()},this.setDrawingBufferSize=function(w,V,Z){se=w,ne=V,ce=Z,t.width=Math.floor(w*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,V,Z,J){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,V,Z,J),ke.viewport(T.copy(fe).multiplyScalar(ce).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,V,Z,J){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,V,Z,J),ke.scissor(U.copy(ve).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){ke.setScissorTest(De=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,V=!0,Z=!0){let J=0;if(w){let Y=!1;if(I!==null){const Le=I.texture.format;Y=Le===$p||Le===Yp||Le===qp}if(Y){const Le=I.texture.type,Be=Le===cr||Le===or||Le===cu||Le===Dr||Le===Vp||Le===Wp,Xe=Qe.getClearColor(),qe=Qe.getClearAlpha(),ft=Xe.r,it=Xe.g,ot=Xe.b;Be?(x[0]=ft,x[1]=it,x[2]=ot,x[3]=qe,W.clearBufferuiv(W.COLOR,0,x)):(y[0]=ft,y[1]=it,y[2]=ot,y[3]=qe,W.clearBufferiv(W.COLOR,0,y))}else J|=W.COLOR_BUFFER_BIT}V&&(J|=W.DEPTH_BUFFER_BIT),Z&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ze.dispose(),He.dispose(),nt.dispose(),Tt.dispose(),C.dispose(),oe.dispose(),Pe.dispose(),Fe.dispose(),me.dispose(),le.dispose(),le.removeEventListener("sessionstart",zt),le.removeEventListener("sessionend",Et),Re&&(Re.dispose(),Re=null),Ct.stop()};function Ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=et.autoReset,V=Te.enabled,Z=Te.autoUpdate,J=Te.needsUpdate,Y=Te.type;L(),et.autoReset=w,Te.enabled=V,Te.autoUpdate=Z,Te.needsUpdate=J,Te.type=Y}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function q(w){const V=w.target;V.removeEventListener("dispose",q),ge(V)}function ge(w){we(w),nt.remove(w)}function we(w){const V=nt.get(w).programs;V!==void 0&&(V.forEach(function(Z){me.releaseProgram(Z)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Z,J,Y,Le){V===null&&(V=Mt);const Be=Y.isMesh&&Y.matrixWorld.determinant()<0,Xe=el(w,V,Z,J,Y);ke.setMaterial(J,Be);let qe=Z.index,ft=1;if(J.wireframe===!0){if(qe=ee.getWireframeAttribute(Z),qe===void 0)return;ft=2}const it=Z.drawRange,ot=Z.attributes.position;let Ht=it.start*ft,un=(it.start+it.count)*ft;Le!==null&&(Ht=Math.max(Ht,Le.start*ft),un=Math.min(un,(Le.start+Le.count)*ft)),qe!==null?(Ht=Math.max(Ht,0),un=Math.min(un,qe.count)):ot!=null&&(Ht=Math.max(Ht,0),un=Math.min(un,ot.count));const Yt=un-Ht;if(Yt<0||Yt===1/0)return;Pe.setup(Y,J,Xe,Z,qe);let Jn,Ft=Nt;if(qe!==null&&(Jn=M.get(qe),Ft=st,Ft.setIndex(Jn)),Y.isMesh)J.wireframe===!0?(ke.setLineWidth(J.wireframeLinewidth*Ve()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(Y.isLine){let ut=J.linewidth;ut===void 0&&(ut=1),ke.setLineWidth(ut*Ve()),Y.isLineSegments?Ft.setMode(W.LINES):Y.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else Y.isPoints?Ft.setMode(W.POINTS):Y.isSprite&&Ft.setMode(W.TRIANGLES);if(Y.isBatchedMesh)Ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ft.renderInstances(Ht,Yt,Y.count);else if(Z.isInstancedBufferGeometry){const ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bs=Math.min(Z.instanceCount,ut);Ft.renderInstances(Ht,Yt,Bs)}else Ft.render(Ht,Yt)};function dt(w,V,Z){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,Hr(w,V,Z),w.side=ur,w.needsUpdate=!0,Hr(w,V,Z),w.side=Bi):Hr(w,V,Z)}this.compile=function(w,V,Z=null){Z===null&&(Z=w),g=He.get(Z),g.init(),N.push(g),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),w!==Z&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(R._useLegacyLights);const J=new Set;return w.traverse(function(Y){const Le=Y.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Xe=Le[Be];dt(Xe,Z,Y),J.add(Xe)}else dt(Le,Z,Y),J.add(Le)}),N.pop(),g=null,J},this.compileAsync=function(w,V,Z=null){const J=this.compile(w,V,Z);return new Promise(Y=>{function Le(){if(J.forEach(function(Be){nt.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){Y(w);return}setTimeout(Le,10)}Ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let yt=null;function Rt(w){yt&&yt(w)}function zt(){Ct.stop()}function Et(){Ct.start()}const Ct=new um;Ct.setAnimationLoop(Rt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){yt=w,le.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},le.addEventListener("sessionstart",zt),le.addEventListener("sessionend",Et),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,V,I),g=He.get(w,N.length),g.init(),N.push(g),je.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),tt.setFromProjectionMatrix(je),de=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,de),A=Ze.get(w,m.length),A.init(),m.push(A),nn(w,V,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(te,ue),this.info.render.frame++,Q===!0&&ye.beginShadows();const Z=g.state.shadowsArray;if(Te.render(Z,w,V),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Qe.render(A,w),g.setupLights(R._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let Y=0,Le=J.length;Y<Le;Y++){const Be=J[Y];jn(A,w,Be,Be.viewport)}}else jn(A,w,V);I!==null&&(ct.updateMultisampleRenderTarget(I),ct.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(R,w,V),Pe.resetDefaultState(),K=-1,Se=null,N.pop(),N.length>0?g=N[N.length-1]:g=null,m.pop(),m.length>0?A=m[m.length-1]:A=null};function nn(w,V,Z,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||tt.intersectsSprite(w)){J&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);const Be=oe.update(w),Xe=w.material;Xe.visible&&A.push(w,Be,Xe,Z,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||tt.intersectsObject(w))){const Be=oe.update(w),Xe=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(Xe)){const qe=Be.groups;for(let ft=0,it=qe.length;ft<it;ft++){const ot=qe[ft],Ht=Xe[ot.materialIndex];Ht&&Ht.visible&&A.push(w,Be,Ht,Z,Ce.z,ot)}}else Xe.visible&&A.push(w,Be,Xe,Z,Ce.z,null)}}const Le=w.children;for(let Be=0,Xe=Le.length;Be<Xe;Be++)nn(Le[Be],V,Z,J)}function jn(w,V,Z,J){const Y=w.opaque,Le=w.transmissive,Be=w.transparent;g.setupLightsView(Z),Q===!0&&ye.setGlobalState(R.clippingPlanes,Z),Le.length>0&&Gr(Y,Le,V,Z),J&&ke.viewport(T.copy(J)),Y.length>0&&zr(Y,V,Z),Le.length>0&&zr(Le,V,Z),Be.length>0&&zr(Be,V,Z),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Gr(w,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Le=Je.isWebGL2;Re===null&&(Re=new Nr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?po:cr,minFilter:Ir,samples:Le?4:0})),R.getDrawingBufferSize(Oe),Le?Re.setSize(Oe.x,Oe.y):Re.setSize(ka(Oe.x),ka(Oe.y));const Be=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(_e),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear();const Xe=R.toneMapping;R.toneMapping=lr,zr(w,Z,J),ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re);let qe=!1;for(let ft=0,it=V.length;ft<it;ft++){const ot=V[ft],Ht=ot.object,un=ot.geometry,Yt=ot.material,Jn=ot.group;if(Yt.side===Bi&&Ht.layers.test(J.layers)){const Ft=Yt.side;Yt.side=Pn,Yt.needsUpdate=!0,vo(Ht,Z,J,un,Yt,Jn),Yt.side=Ft,Yt.needsUpdate=!0,qe=!0}}qe===!0&&(ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re)),R.setRenderTarget(Be),R.setClearColor(_e,z),R.toneMapping=Xe}function zr(w,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Le=w.length;Y<Le;Y++){const Be=w[Y],Xe=Be.object,qe=Be.geometry,ft=J===null?Be.material:J,it=Be.group;Xe.layers.test(Z.layers)&&vo(Xe,V,Z,qe,ft,it)}}function vo(w,V,Z,J,Y,Le){w.onBeforeRender(R,V,Z,J,Y,Le),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(R,V,Z,J,w,Le),Y.transparent===!0&&Y.side===Bi&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,R.renderBufferDirect(Z,V,J,Y,w,Le),Y.side=ur,Y.needsUpdate=!0,R.renderBufferDirect(Z,V,J,Y,w,Le),Y.side=Bi):R.renderBufferDirect(Z,V,J,Y,w,Le),w.onAfterRender(R,V,Z,J,Y,Le)}function Hr(w,V,Z){V.isScene!==!0&&(V=Mt);const J=nt.get(w),Y=g.state.lights,Le=g.state.shadowsArray,Be=Y.state.version,Xe=me.getParameters(w,Y.state,Le,V,Z),qe=me.getProgramCacheKey(Xe);let ft=J.programs;J.environment=w.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(w.isMeshStandardMaterial?C:Tt).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,ft===void 0&&(w.addEventListener("dispose",q),ft=new Map,J.programs=ft);let it=ft.get(qe);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===Be)return So(w,Xe),it}else Xe.uniforms=me.getUniforms(w),w.onBuild(Z,Xe,R),w.onBeforeCompile(Xe,R),it=me.acquireProgram(Xe,qe),ft.set(qe,it),J.uniforms=Xe.uniforms;const ot=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ot.clippingPlanes=ye.uniform),So(w,Xe),J.needsLights=Mo(w),J.lightsStateVersion=Be,J.needsLights&&(ot.ambientLightColor.value=Y.state.ambient,ot.lightProbe.value=Y.state.probe,ot.directionalLights.value=Y.state.directional,ot.directionalLightShadows.value=Y.state.directionalShadow,ot.spotLights.value=Y.state.spot,ot.spotLightShadows.value=Y.state.spotShadow,ot.rectAreaLights.value=Y.state.rectArea,ot.ltc_1.value=Y.state.rectAreaLTC1,ot.ltc_2.value=Y.state.rectAreaLTC2,ot.pointLights.value=Y.state.point,ot.pointLightShadows.value=Y.state.pointShadow,ot.hemisphereLights.value=Y.state.hemi,ot.directionalShadowMap.value=Y.state.directionalShadowMap,ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ot.spotShadowMap.value=Y.state.spotShadowMap,ot.spotLightMatrix.value=Y.state.spotLightMatrix,ot.spotLightMap.value=Y.state.spotLightMap,ot.pointShadowMap.value=Y.state.pointShadowMap,ot.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=it,J.uniformsList=null,it}function xo(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Na.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function So(w,V){const Z=nt.get(w);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function el(w,V,Z,J,Y){V.isScene!==!0&&(V=Mt),ct.resetTextureUnits();const Le=V.fog,Be=J.isMeshStandardMaterial?V.environment:null,Xe=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hr,qe=(J.isMeshStandardMaterial?C:Tt).get(J.envMap||Be),ft=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ot=!!Z.morphAttributes.position,Ht=!!Z.morphAttributes.normal,un=!!Z.morphAttributes.color;let Yt=lr;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Jn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ft=Jn!==void 0?Jn.length:0,ut=nt.get(J),Bs=g.state.lights;if(Q===!0&&(de===!0||w!==Se)){const Tn=w===Se&&J.id===K;ye.setState(J,w,Tn)}let Dt=!1;J.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Bs.state.version||ut.outputColorSpace!==Xe||Y.isBatchedMesh&&ut.batching===!1||!Y.isBatchedMesh&&ut.batching===!0||Y.isInstancedMesh&&ut.instancing===!1||!Y.isInstancedMesh&&ut.instancing===!0||Y.isSkinnedMesh&&ut.skinning===!1||!Y.isSkinnedMesh&&ut.skinning===!0||Y.isInstancedMesh&&ut.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ut.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ut.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ut.instancingMorph===!1&&Y.morphTexture!==null||ut.envMap!==qe||J.fog===!0&&ut.fog!==Le||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ye.numPlanes||ut.numIntersection!==ye.numIntersection)||ut.vertexAlphas!==ft||ut.vertexTangents!==it||ut.morphTargets!==ot||ut.morphNormals!==Ht||ut.morphColors!==un||ut.toneMapping!==Yt||Je.isWebGL2===!0&&ut.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,ut.__version=J.version);let ui=ut.currentProgram;Dt===!0&&(ui=Hr(J,V,Y));let Gs=!1,Mi=!1,zs=!1;const jt=ui.getUniforms(),zn=ut.uniforms;if(ke.useProgram(ui.program)&&(Gs=!0,Mi=!0,zs=!0),J.id!==K&&(K=J.id,Mi=!0),Gs||Se!==w){jt.setValue(W,"projectionMatrix",w.projectionMatrix),jt.setValue(W,"viewMatrix",w.matrixWorldInverse);const Tn=jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(W,Ce.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&jt.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),Se!==w&&(Se=w,Mi=!0,zs=!0)}if(Y.isSkinnedMesh){jt.setOptional(W,Y,"bindMatrix"),jt.setOptional(W,Y,"bindMatrixInverse");const Tn=Y.skeleton;Tn&&(Je.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),jt.setValue(W,"boneTexture",Tn.boneTexture,ct)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(jt.setOptional(W,Y,"batchingTexture"),jt.setValue(W,"batchingTexture",Y._matricesTexture,ct));const kr=Z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0&&Je.isWebGL2===!0)&&Ee.update(Y,Z,ui),(Mi||ut.receiveShadow!==Y.receiveShadow)&&(ut.receiveShadow=Y.receiveShadow,jt.setValue(W,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(zn.envMap.value=qe,zn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Mi&&(jt.setValue(W,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&tl(zn,zs),Le&&J.fog===!0&&pe.refreshFogUniforms(zn,Le),pe.refreshMaterialUniforms(zn,J,ce,ne,Re),Na.upload(W,xo(ut),zn,ct)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Na.upload(W,xo(ut),zn,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(W,"center",Y.center),jt.setValue(W,"modelViewMatrix",Y.modelViewMatrix),jt.setValue(W,"normalMatrix",Y.normalMatrix),jt.setValue(W,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Tn=J.uniformsGroups;for(let Vr=0,Eo=Tn.length;Vr<Eo;Vr++)if(Je.isWebGL2){const Wr=Tn[Vr];Fe.update(Wr,ui),Fe.bind(Wr,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function tl(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Mo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,V,Z){nt.get(w.texture).__webglTexture=V,nt.get(w.depthTexture).__webglTexture=Z;const J=nt.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const Z=nt.get(w);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Z=0){I=w,B=V,G=Z;let J=!0,Y=null,Le=!1,Be=!1;if(w){const qe=nt.get(w);qe.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):qe.__webglFramebuffer===void 0?ct.setupRenderTarget(w):qe.__hasExternalTextures&&ct.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);const ft=w.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Be=!0);const it=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[V])?Y=it[V][Z]:Y=it[V],Le=!0):Je.isWebGL2&&w.samples>0&&ct.useMultisampledRTT(w)===!1?Y=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[Z]:Y=it,T.copy(w.viewport),U.copy(w.scissor),Me=w.scissorTest}else T.copy(fe).multiplyScalar(ce).floor(),U.copy(ve).multiplyScalar(ce).floor(),Me=De;if(ke.bindFramebuffer(W.FRAMEBUFFER,Y)&&Je.drawBuffers&&J&&ke.drawBuffers(w,Y),ke.viewport(T),ke.scissor(U),ke.setScissorTest(Me),Le){const qe=nt.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,qe.__webglTexture,Z)}else if(Be){const qe=nt.get(w.texture),ft=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,Z||0,ft)}K=-1},this.readRenderTargetPixels=function(w,V,Z,J,Y,Le,Be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){ke.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const qe=w.texture,ft=qe.format,it=qe.type;if(ft!==ai&&ze.convert(ft)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=it===po&&(Ue.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(it!==cr&&ze.convert(it)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===_i&&(Je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&Z>=0&&Z<=w.height-Y&&W.readPixels(V,Z,J,Y,ze.convert(ft),ze.convert(it),Le)}finally{const qe=I!==null?nt.get(I).__webglFramebuffer:null;ke.bindFramebuffer(W.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(w,V,Z=0){const J=Math.pow(2,-Z),Y=Math.floor(V.image.width*J),Le=Math.floor(V.image.height*J);ct.setTexture2D(V,0),W.copyTexSubImage2D(W.TEXTURE_2D,Z,0,0,w.x,w.y,Y,Le),ke.unbindTexture()},this.copyTextureToTexture=function(w,V,Z,J=0){const Y=V.image.width,Le=V.image.height,Be=ze.convert(Z.format),Xe=ze.convert(Z.type);ct.setTexture2D(Z,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,w.x,w.y,Y,Le,Be,Xe,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Be,V.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,w.x,w.y,Be,Xe,V.image),J===0&&Z.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(w,V,Z,J,Y=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=Math.round(w.max.x-w.min.x),Be=Math.round(w.max.y-w.min.y),Xe=w.max.z-w.min.z+1,qe=ze.convert(J.format),ft=ze.convert(J.type);let it;if(J.isData3DTexture)ct.setTexture3D(J,0),it=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ct.setTexture2DArray(J,0),it=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const ot=W.getParameter(W.UNPACK_ROW_LENGTH),Ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),un=W.getParameter(W.UNPACK_SKIP_PIXELS),Yt=W.getParameter(W.UNPACK_SKIP_ROWS),Jn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ft=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,w.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,w.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?W.texSubImage3D(it,Y,V.x,V.y,V.z,Le,Be,Xe,qe,ft,Ft.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(it,Y,V.x,V.y,V.z,Le,Be,Xe,qe,Ft.data):W.texSubImage3D(it,Y,V.x,V.y,V.z,Le,Be,Xe,qe,ft,Ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,ot),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,un),W.pixelStorei(W.UNPACK_SKIP_ROWS,Yt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jn),Y===0&&J.generateMipmaps&&W.generateMipmap(it),ke.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),ke.unbindTexture()},this.resetState=function(){B=0,G=0,I=null,ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bR extends _m{}bR.prototype.isWebGL1Renderer=!0;class TR extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class AR extends yn{constructor(e=null,t=1,i=1,o,a,u,c,f,d=ln,p=ln,_,v){super(null,u,c,f,d,p,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cp extends ci{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new qt,up=new qt,Pa=[],fp=new Br,wR=new qt,ao=new li,lo=new go;class hp extends li{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,wR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),fp.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(fp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),lo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Es),up.multiplyMatrices(i,Es),ao.matrixWorld=up,ao.raycast(e,Pa);for(let u=0,c=Pa.length;u<c;u++){const f=Pa[u];f.instanceId=a,f.object=this,t.push(f)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new AR(new Float32Array(o*this.count),o,this.count,Xp,_i));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pu extends dr{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new X,p=new lt;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/e+1)/2,p.y=(u[v+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new Si(u,3)),this.setAttribute("normal",new Si(c,3)),this.setAttribute("uv",new Si(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class dp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);const RR={items:[]},ho=new Ns(RR);function CR(r){const t={...ho.getValue(),items:r};ho.next(t)}const LR={scene:new TR},PR=new Ns(LR),IR={isLoading:!0,theme:"light"},Wa=new Ns(IR);function pi(r){const t={...Wa.getValue(),isLoading:r};Wa.next(t)}const pp={type:"change"},Wc={type:"start"},mp={type:"end"},Ia=new tm,gp=new rr,DR=Math.cos(70*uy.DEG2RAD);class UR extends Fr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",He),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pp),i.update(),a=o.NONE},this.update=function(){const L=new X,le=new Or().setFromUnitVectors(e.up,new X(0,1,0)),Ne=le.clone().invert(),O=new X,xe=new Or,q=new X,ge=2*Math.PI;return function(dt=null){const yt=i.object.position;L.copy(yt).sub(i.target),L.applyQuaternion(le),c.setFromVector3(L),i.autoRotate&&a===o.NONE&&Me(T(dt)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Rt=i.minAzimuthAngle,zt=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(zt)&&(Rt<-Math.PI?Rt+=ge:Rt>Math.PI&&(Rt-=ge),zt<-Math.PI?zt+=ge:zt>Math.PI&&(zt-=ge),Rt<=zt?c.theta=Math.max(Rt,Math.min(zt,c.theta)):c.theta=c.theta>(Rt+zt)/2?Math.max(Rt,c.theta):Math.min(zt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&G||i.object.isOrthographicCamera)c.radius=fe(c.radius);else{const Ct=c.radius;c.radius=fe(c.radius*d),Et=Ct!=c.radius}if(L.setFromSpherical(c),L.applyQuaternion(Ne),yt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&G){let Ct=null;if(i.object.isPerspectiveCamera){const nn=L.length();Ct=fe(nn*d);const jn=nn-Ct;i.object.position.addScaledVector(D,jn),i.object.updateMatrixWorld(),Et=!!jn}else if(i.object.isOrthographicCamera){const nn=new X(B.x,B.y,0);nn.unproject(i.object);const jn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Et=jn!==i.object.zoom;const Gr=new X(B.x,B.y,0);Gr.unproject(i.object),i.object.position.sub(Gr).add(nn),i.object.updateMatrixWorld(),Ct=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ct).add(i.object.position):(Ia.origin.copy(i.object.position),Ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ia.direction))<DR?e.lookAt(i.target):(gp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ia.intersectPlane(gp,i.target))))}else if(i.object.isOrthographicCamera){const Ct=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Ct!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return d=1,G=!1,Et||O.distanceToSquared(i.object.position)>u||8*(1-xe.dot(i.object.quaternion))>u||q.distanceToSquared(i.target)>u?(i.dispatchEvent(pp),O.copy(i.object.position),xe.copy(i.object.quaternion),q.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Qe),i.domElement.removeEventListener("pointerdown",ct),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",pe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new dp,f=new dp;let d=1;const p=new X,_=new lt,v=new lt,x=new lt,y=new lt,A=new lt,g=new lt,m=new lt,N=new lt,R=new lt,D=new X,B=new lt;let G=!1;const I=[],K={};let Se=!1;function T(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function U(L){const le=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*le)}function Me(L){f.theta-=L}function _e(L){f.phi-=L}const z=function(){const L=new X;return function(Ne,O){L.setFromMatrixColumn(O,0),L.multiplyScalar(-Ne),p.add(L)}}(),se=function(){const L=new X;return function(Ne,O){i.screenSpacePanning===!0?L.setFromMatrixColumn(O,1):(L.setFromMatrixColumn(O,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ne),p.add(L)}}(),ne=function(){const L=new X;return function(Ne,O){const xe=i.domElement;if(i.object.isPerspectiveCamera){const q=i.object.position;L.copy(q).sub(i.target);let ge=L.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ne*ge/xe.clientHeight,i.object.matrix),se(2*O*ge/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ne*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),se(O*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(L,le){if(!i.zoomToCursor)return;G=!0;const Ne=i.domElement.getBoundingClientRect(),O=L-Ne.left,xe=le-Ne.top,q=Ne.width,ge=Ne.height;B.x=O/q*2-1,B.y=-(xe/ge)*2+1,D.set(B.x,B.y,1).unproject(i.object).sub(i.object.position).normalize()}function fe(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ve(L){_.set(L.clientX,L.clientY)}function De(L){ue(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function tt(L){y.set(L.clientX,L.clientY)}function Q(L){v.set(L.clientX,L.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;Me(2*Math.PI*x.x/le.clientHeight),_e(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function de(L){N.set(L.clientX,L.clientY),R.subVectors(N,m),R.y>0?ce(U(R.y)):R.y<0&&te(U(R.y)),m.copy(N),i.update()}function Re(L){A.set(L.clientX,L.clientY),g.subVectors(A,y).multiplyScalar(i.panSpeed),ne(g.x,g.y),y.copy(A),i.update()}function je(L){ue(L.clientX,L.clientY),L.deltaY<0?te(U(L.deltaY)):L.deltaY>0&&ce(U(L.deltaY)),i.update()}function Oe(L){let le=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?_e(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?_e(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),le=!0;break}le&&(L.preventDefault(),i.update())}function Ce(L){if(I.length===1)_.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),O=.5*(L.pageY+le.y);_.set(Ne,O)}}function Mt(L){if(I.length===1)y.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),O=.5*(L.pageY+le.y);y.set(Ne,O)}}function Ve(L){const le=Pe(L),Ne=L.pageX-le.x,O=L.pageY-le.y,xe=Math.sqrt(Ne*Ne+O*O);m.set(0,xe)}function W(L){i.enableZoom&&Ve(L),i.enablePan&&Mt(L)}function Wt(L){i.enableZoom&&Ve(L),i.enableRotate&&Ce(L)}function Ue(L){if(I.length==1)v.set(L.pageX,L.pageY);else{const Ne=Pe(L),O=.5*(L.pageX+Ne.x),xe=.5*(L.pageY+Ne.y);v.set(O,xe)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;Me(2*Math.PI*x.x/le.clientHeight),_e(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function Je(L){if(I.length===1)A.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),O=.5*(L.pageY+le.y);A.set(Ne,O)}g.subVectors(A,y).multiplyScalar(i.panSpeed),ne(g.x,g.y),y.copy(A)}function ke(L){const le=Pe(L),Ne=L.pageX-le.x,O=L.pageY-le.y,xe=Math.sqrt(Ne*Ne+O*O);N.set(0,xe),R.set(0,Math.pow(N.y/m.y,i.zoomSpeed)),ce(R.y),m.copy(N);const q=(L.pageX+le.x)*.5,ge=(L.pageY+le.y)*.5;ue(q,ge)}function et(L){i.enableZoom&&ke(L),i.enablePan&&Je(L)}function nt(L){i.enableZoom&&ke(L),i.enableRotate&&Ue(L)}function ct(L){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Tt),i.domElement.addEventListener("pointerup",C)),!st(L)&&(Ee(L),L.pointerType==="touch"?ye(L):M(L)))}function Tt(L){i.enabled!==!1&&(L.pointerType==="touch"?Te(L):ee(L))}function C(L){switch(Nt(L),I.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(mp),a=o.NONE;break;case 1:const le=I[0],Ne=K[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function M(L){let le;switch(L.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Fi.DOLLY:if(i.enableZoom===!1)return;De(L),a=o.DOLLY;break;case Fi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;tt(L),a=o.PAN}else{if(i.enableRotate===!1)return;ve(L),a=o.ROTATE}break;case Fi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ve(L),a=o.ROTATE}else{if(i.enablePan===!1)return;tt(L),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function ee(L){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;Q(L);break;case o.DOLLY:if(i.enableZoom===!1)return;de(L);break;case o.PAN:if(i.enablePan===!1)return;Re(L);break}}function oe(L){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(L.preventDefault(),i.dispatchEvent(Wc),je(me(L)),i.dispatchEvent(mp))}function me(L){const le=L.deltaMode,Ne={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return L.ctrlKey&&!Se&&(Ne.deltaY*=10),Ne}function pe(L){L.key==="Control"&&(Se=!0,i.domElement.getRootNode().addEventListener("keyup",Ze,{passive:!0,capture:!0}))}function Ze(L){L.key==="Control"&&(Se=!1,i.domElement.getRootNode().removeEventListener("keyup",Ze,{passive:!0,capture:!0}))}function He(L){i.enabled===!1||i.enablePan===!1||Oe(L)}function ye(L){switch(ze(L),I.length){case 1:switch(i.touches.ONE){case ss.ROTATE:if(i.enableRotate===!1)return;Ce(L),a=o.TOUCH_ROTATE;break;case ss.PAN:if(i.enablePan===!1)return;Mt(L),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case ss.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(L),a=o.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(L),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function Te(L){switch(ze(L),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(L),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Je(L),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;et(L),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(L),i.update();break;default:a=o.NONE}}function Qe(L){i.enabled!==!1&&L.preventDefault()}function Ee(L){I.push(L.pointerId)}function Nt(L){delete K[L.pointerId];for(let le=0;le<I.length;le++)if(I[le]==L.pointerId){I.splice(le,1);return}}function st(L){for(let le=0;le<I.length;le++)if(I[le]==L.pointerId)return!0;return!1}function ze(L){let le=K[L.pointerId];le===void 0&&(le=new lt,K[L.pointerId]=le),le.set(L.pageX,L.pageY)}function Pe(L){const le=L.pointerId===I[0]?I[1]:I[0];return K[le]}i.domElement.addEventListener("contextmenu",Qe),i.domElement.addEventListener("pointerdown",ct),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Xa.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,x=4,y=1,A=2,g=1,m=2,N=4,R=8,D=16,B=32,G=64,I=128,K=256,Se=512,T=30,U="...",Me=800,_e=16,z=1,se=2,ne=3,ce=1/0,te=9007199254740991,ue=17976931348623157e292,fe=NaN,ve=4294967295,De=ve-1,tt=ve>>>1,Q=[["ary",I],["bind",g],["bindKey",m],["curry",R],["curryRight",D],["flip",Se],["partial",B],["partialRight",G],["rearg",K]],de="[object Arguments]",Re="[object Array]",je="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",Mt="[object DOMException]",Ve="[object Error]",W="[object Function]",Wt="[object GeneratorFunction]",Ue="[object Map]",Je="[object Number]",ke="[object Null]",et="[object Object]",nt="[object Promise]",ct="[object Proxy]",Tt="[object RegExp]",C="[object Set]",M="[object String]",ee="[object Symbol]",oe="[object Undefined]",me="[object WeakMap]",pe="[object WeakSet]",Ze="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",Te="[object Float64Array]",Qe="[object Int8Array]",Ee="[object Int16Array]",Nt="[object Int32Array]",st="[object Uint8Array]",ze="[object Uint8ClampedArray]",Pe="[object Uint16Array]",Fe="[object Uint32Array]",L=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,q=RegExp(O.source),ge=RegExp(xe.source),we=/<%-([\s\S]+?)%>/g,dt=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/[\\^$.*+?()[\]{}|]/g,nn=RegExp(Ct.source),jn=/^\s+/,Gr=/\s/,zr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,vo=/\{\n\/\* \[wrapped with (.+)\] \*/,Hr=/,? & /,xo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,So=/[()=,{}\[\]\/\s]/,el=/\\(\\)?/g,tl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mo=/\w*$/,w=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,Y=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,qe="\\ud800-\\udfff",ft="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",Ht=ft+it+ot,un="\\u2700-\\u27bf",Yt="a-z\\xdf-\\xf6\\xf8-\\xff",Jn="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",Bs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",ui="\\ufe0e\\ufe0f",Gs=Jn+Ft+ut+Bs,Mi="['’]",zs="["+qe+"]",jt="["+Gs+"]",zn="["+Ht+"]",kr="\\d+",Tn="["+un+"]",Vr="["+Yt+"]",Eo="[^"+qe+Gs+kr+un+Yt+Dt+"]",Wr="\\ud83c[\\udffb-\\udfff]",Sm="(?:"+zn+"|"+Wr+")",gu="[^"+qe+"]",nl="(?:\\ud83c[\\udde6-\\uddff]){2}",il="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+Dt+"]",_u="\\u200d",vu="(?:"+Vr+"|"+Eo+")",Mm="(?:"+Xr+"|"+Eo+")",xu="(?:"+Mi+"(?:d|ll|m|re|s|t|ve))?",Su="(?:"+Mi+"(?:D|LL|M|RE|S|T|VE))?",Mu=Sm+"?",Eu="["+ui+"]?",Em="(?:"+_u+"(?:"+[gu,nl,il].join("|")+")"+Eu+Mu+")*",ym="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yu=Eu+Mu+Em,Tm="(?:"+[Tn,nl,il].join("|")+")"+yu,Am="(?:"+[gu+zn+"?",zn,nl,il,zs].join("|")+")",wm=RegExp(Mi,"g"),Rm=RegExp(zn,"g"),rl=RegExp(Wr+"(?="+Wr+")|"+Am+yu,"g"),Cm=RegExp([Xr+"?"+Vr+"+"+xu+"(?="+[jt,Xr,"$"].join("|")+")",Mm+"+"+Su+"(?="+[jt,Xr+vu,"$"].join("|")+")",Xr+"?"+vu+"+"+xu,Xr+"+"+Su,bm,ym,kr,Tm].join("|"),"g"),Lm=RegExp("["+_u+qe+Ht+ui+"]"),Pm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Im=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Dm=-1,Bt={};Bt[ye]=Bt[Te]=Bt[Qe]=Bt[Ee]=Bt[Nt]=Bt[st]=Bt[ze]=Bt[Pe]=Bt[Fe]=!0,Bt[de]=Bt[Re]=Bt[Ze]=Bt[Oe]=Bt[He]=Bt[Ce]=Bt[Ve]=Bt[W]=Bt[Ue]=Bt[Je]=Bt[et]=Bt[Tt]=Bt[C]=Bt[M]=Bt[me]=!1;var Ot={};Ot[de]=Ot[Re]=Ot[Ze]=Ot[He]=Ot[Oe]=Ot[Ce]=Ot[ye]=Ot[Te]=Ot[Qe]=Ot[Ee]=Ot[Nt]=Ot[Ue]=Ot[Je]=Ot[et]=Ot[Tt]=Ot[C]=Ot[M]=Ot[ee]=Ot[st]=Ot[ze]=Ot[Pe]=Ot[Fe]=!0,Ot[Ve]=Ot[W]=Ot[me]=!1;var Um={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Nm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Om={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Fm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Bm=parseFloat,Gm=parseInt,bu=typeof co=="object"&&co&&co.Object===Object&&co,zm=typeof self=="object"&&self&&self.Object===Object&&self,on=bu||zm||Function("return this")(),sl=e&&!e.nodeType&&e,pr=sl&&!0&&r&&!r.nodeType&&r,Tu=pr&&pr.exports===sl,ol=Tu&&bu.process,Hn=function(){try{var H=pr&&pr.require&&pr.require("util").types;return H||ol&&ol.binding&&ol.binding("util")}catch{}}(),Au=Hn&&Hn.isArrayBuffer,wu=Hn&&Hn.isDate,Ru=Hn&&Hn.isMap,Cu=Hn&&Hn.isRegExp,Lu=Hn&&Hn.isSet,Pu=Hn&&Hn.isTypedArray;function In(H,ie,j){switch(j.length){case 0:return H.call(ie);case 1:return H.call(ie,j[0]);case 2:return H.call(ie,j[0],j[1]);case 3:return H.call(ie,j[0],j[1],j[2])}return H.apply(ie,j)}function Hm(H,ie,j,Ie){for(var rt=-1,At=H==null?0:H.length;++rt<At;){var Jt=H[rt];ie(Ie,Jt,j(Jt),H)}return Ie}function kn(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie&&ie(H[j],j,H)!==!1;);return H}function km(H,ie){for(var j=H==null?0:H.length;j--&&ie(H[j],j,H)!==!1;);return H}function Iu(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(!ie(H[j],j,H))return!1;return!0}function Hi(H,ie){for(var j=-1,Ie=H==null?0:H.length,rt=0,At=[];++j<Ie;){var Jt=H[j];ie(Jt,j,H)&&(At[rt++]=Jt)}return At}function yo(H,ie){var j=H==null?0:H.length;return!!j&&qr(H,ie,0)>-1}function al(H,ie,j){for(var Ie=-1,rt=H==null?0:H.length;++Ie<rt;)if(j(ie,H[Ie]))return!0;return!1}function kt(H,ie){for(var j=-1,Ie=H==null?0:H.length,rt=Array(Ie);++j<Ie;)rt[j]=ie(H[j],j,H);return rt}function ki(H,ie){for(var j=-1,Ie=ie.length,rt=H.length;++j<Ie;)H[rt+j]=ie[j];return H}function ll(H,ie,j,Ie){var rt=-1,At=H==null?0:H.length;for(Ie&&At&&(j=H[++rt]);++rt<At;)j=ie(j,H[rt],rt,H);return j}function Vm(H,ie,j,Ie){var rt=H==null?0:H.length;for(Ie&&rt&&(j=H[--rt]);rt--;)j=ie(j,H[rt],rt,H);return j}function cl(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(ie(H[j],j,H))return!0;return!1}var Wm=ul("length");function Xm(H){return H.split("")}function qm(H){return H.match(xo)||[]}function Du(H,ie,j){var Ie;return j(H,function(rt,At,Jt){if(ie(rt,At,Jt))return Ie=At,!1}),Ie}function bo(H,ie,j,Ie){for(var rt=H.length,At=j+(Ie?1:-1);Ie?At--:++At<rt;)if(ie(H[At],At,H))return At;return-1}function qr(H,ie,j){return ie===ie?rg(H,ie,j):bo(H,Uu,j)}function Ym(H,ie,j,Ie){for(var rt=j-1,At=H.length;++rt<At;)if(Ie(H[rt],ie))return rt;return-1}function Uu(H){return H!==H}function Nu(H,ie){var j=H==null?0:H.length;return j?hl(H,ie)/j:fe}function ul(H){return function(ie){return ie==null?t:ie[H]}}function fl(H){return function(ie){return H==null?t:H[ie]}}function Ou(H,ie,j,Ie,rt){return rt(H,function(At,Jt,Ut){j=Ie?(Ie=!1,At):ie(j,At,Jt,Ut)}),j}function $m(H,ie){var j=H.length;for(H.sort(ie);j--;)H[j]=H[j].value;return H}function hl(H,ie){for(var j,Ie=-1,rt=H.length;++Ie<rt;){var At=ie(H[Ie]);At!==t&&(j=j===t?At:j+At)}return j}function dl(H,ie){for(var j=-1,Ie=Array(H);++j<H;)Ie[j]=ie(j);return Ie}function Km(H,ie){return kt(ie,function(j){return[j,H[j]]})}function Fu(H){return H&&H.slice(0,Hu(H)+1).replace(jn,"")}function Dn(H){return function(ie){return H(ie)}}function pl(H,ie){return kt(ie,function(j){return H[j]})}function Hs(H,ie){return H.has(ie)}function Bu(H,ie){for(var j=-1,Ie=H.length;++j<Ie&&qr(ie,H[j],0)>-1;);return j}function Gu(H,ie){for(var j=H.length;j--&&qr(ie,H[j],0)>-1;);return j}function Zm(H,ie){for(var j=H.length,Ie=0;j--;)H[j]===ie&&++Ie;return Ie}var jm=fl(Um),Jm=fl(Nm);function Qm(H){return"\\"+Fm[H]}function eg(H,ie){return H==null?t:H[ie]}function Yr(H){return Lm.test(H)}function tg(H){return Pm.test(H)}function ng(H){for(var ie,j=[];!(ie=H.next()).done;)j.push(ie.value);return j}function ml(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie,rt){j[++ie]=[rt,Ie]}),j}function zu(H,ie){return function(j){return H(ie(j))}}function Vi(H,ie){for(var j=-1,Ie=H.length,rt=0,At=[];++j<Ie;){var Jt=H[j];(Jt===ie||Jt===p)&&(H[j]=p,At[rt++]=j)}return At}function To(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=Ie}),j}function ig(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=[Ie,Ie]}),j}function rg(H,ie,j){for(var Ie=j-1,rt=H.length;++Ie<rt;)if(H[Ie]===ie)return Ie;return-1}function sg(H,ie,j){for(var Ie=j+1;Ie--;)if(H[Ie]===ie)return Ie;return Ie}function $r(H){return Yr(H)?ag(H):Wm(H)}function Qn(H){return Yr(H)?lg(H):Xm(H)}function Hu(H){for(var ie=H.length;ie--&&Gr.test(H.charAt(ie)););return ie}var og=fl(Om);function ag(H){for(var ie=rl.lastIndex=0;rl.test(H);)++ie;return ie}function lg(H){return H.match(rl)||[]}function cg(H){return H.match(Cm)||[]}var ug=function H(ie){ie=ie==null?on:Kr.defaults(on.Object(),ie,Kr.pick(on,Im));var j=ie.Array,Ie=ie.Date,rt=ie.Error,At=ie.Function,Jt=ie.Math,Ut=ie.Object,gl=ie.RegExp,fg=ie.String,Vn=ie.TypeError,Ao=j.prototype,hg=At.prototype,Zr=Ut.prototype,wo=ie["__core-js_shared__"],Ro=hg.toString,Lt=Zr.hasOwnProperty,dg=0,ku=function(){var n=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Co=Zr.toString,pg=Ro.call(Ut),mg=on._,gg=gl("^"+Ro.call(Lt).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=Tu?ie.Buffer:t,Wi=ie.Symbol,Po=ie.Uint8Array,Vu=Lo?Lo.allocUnsafe:t,Io=zu(Ut.getPrototypeOf,Ut),Wu=Ut.create,Xu=Zr.propertyIsEnumerable,Do=Ao.splice,qu=Wi?Wi.isConcatSpreadable:t,ks=Wi?Wi.iterator:t,mr=Wi?Wi.toStringTag:t,Uo=function(){try{var n=Sr(Ut,"defineProperty");return n({},"",{}),n}catch{}}(),_g=ie.clearTimeout!==on.clearTimeout&&ie.clearTimeout,vg=Ie&&Ie.now!==on.Date.now&&Ie.now,xg=ie.setTimeout!==on.setTimeout&&ie.setTimeout,No=Jt.ceil,Oo=Jt.floor,_l=Ut.getOwnPropertySymbols,Sg=Lo?Lo.isBuffer:t,Yu=ie.isFinite,Mg=Ao.join,Eg=zu(Ut.keys,Ut),Qt=Jt.max,fn=Jt.min,yg=Ie.now,bg=ie.parseInt,$u=Jt.random,Tg=Ao.reverse,vl=Sr(ie,"DataView"),Vs=Sr(ie,"Map"),xl=Sr(ie,"Promise"),jr=Sr(ie,"Set"),Ws=Sr(ie,"WeakMap"),Xs=Sr(Ut,"create"),Fo=Ws&&new Ws,Jr={},Ag=Mr(vl),wg=Mr(Vs),Rg=Mr(xl),Cg=Mr(jr),Lg=Mr(Ws),Bo=Wi?Wi.prototype:t,qs=Bo?Bo.valueOf:t,Ku=Bo?Bo.toString:t;function E(n){if(Xt(n)&&!at(n)&&!(n instanceof xt)){if(n instanceof Wn)return n;if(Lt.call(n,"__wrapped__"))return jf(n)}return new Wn(n)}var Qr=function(){function n(){}return function(s){if(!Vt(s))return{};if(Wu)return Wu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Go(){}function Wn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}E.templateSettings={escape:we,evaluate:dt,interpolate:yt,variable:"",imports:{_:E}},E.prototype=Go.prototype,E.prototype.constructor=E,Wn.prototype=Qr(Go.prototype),Wn.prototype.constructor=Wn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ve,this.__views__=[]}function Pg(){var n=new xt(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function Ig(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Dg(){var n=this.__wrapped__.value(),s=this.__dir__,l=at(n),h=s<0,S=l?n.length:0,b=X_(0,S,this.__views__),P=b.start,F=b.end,k=F-P,re=h?F:P-1,ae=this.__iteratees__,he=ae.length,Ae=0,Ge=fn(k,this.__takeCount__);if(!l||!h&&S==k&&Ge==k)return Sf(n,this.__actions__);var Ye=[];e:for(;k--&&Ae<Ge;){re+=s;for(var pt=-1,$e=n[re];++pt<he;){var vt=ae[pt],St=vt.iteratee,On=vt.type,vn=St($e);if(On==se)$e=vn;else if(!vn){if(On==z)continue e;break e}}Ye[Ae++]=$e}return Ye}xt.prototype=Qr(Go.prototype),xt.prototype.constructor=xt;function gr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Ug(){this.__data__=Xs?Xs(null):{},this.size=0}function Ng(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Og(n){var s=this.__data__;if(Xs){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function Fg(n){var s=this.__data__;return Xs?s[n]!==t:Lt.call(s,n)}function Bg(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Xs&&s===t?f:s,this}gr.prototype.clear=Ug,gr.prototype.delete=Ng,gr.prototype.get=Og,gr.prototype.has=Fg,gr.prototype.set=Bg;function Ei(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Gg(){this.__data__=[],this.size=0}function zg(n){var s=this.__data__,l=zo(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Do.call(s,l,1),--this.size,!0}function Hg(n){var s=this.__data__,l=zo(s,n);return l<0?t:s[l][1]}function kg(n){return zo(this.__data__,n)>-1}function Vg(n,s){var l=this.__data__,h=zo(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ei.prototype.clear=Gg,Ei.prototype.delete=zg,Ei.prototype.get=Hg,Ei.prototype.has=kg,Ei.prototype.set=Vg;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Wg(){this.size=0,this.__data__={hash:new gr,map:new(Vs||Ei),string:new gr}}function Xg(n){var s=Jo(this,n).delete(n);return this.size-=s?1:0,s}function qg(n){return Jo(this,n).get(n)}function Yg(n){return Jo(this,n).has(n)}function $g(n,s){var l=Jo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}yi.prototype.clear=Wg,yi.prototype.delete=Xg,yi.prototype.get=qg,yi.prototype.has=Yg,yi.prototype.set=$g;function _r(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new yi;++s<l;)this.add(n[s])}function Kg(n){return this.__data__.set(n,f),this}function Zg(n){return this.__data__.has(n)}_r.prototype.add=_r.prototype.push=Kg,_r.prototype.has=Zg;function ei(n){var s=this.__data__=new Ei(n);this.size=s.size}function jg(){this.__data__=new Ei,this.size=0}function Jg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Qg(n){return this.__data__.get(n)}function e_(n){return this.__data__.has(n)}function t_(n,s){var l=this.__data__;if(l instanceof Ei){var h=l.__data__;if(!Vs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new yi(h)}return l.set(n,s),this.size=l.size,this}ei.prototype.clear=jg,ei.prototype.delete=Jg,ei.prototype.get=Qg,ei.prototype.has=e_,ei.prototype.set=t_;function Zu(n,s){var l=at(n),h=!l&&Er(n),S=!l&&!h&&Ki(n),b=!l&&!h&&!S&&is(n),P=l||h||S||b,F=P?dl(n.length,fg):[],k=F.length;for(var re in n)(s||Lt.call(n,re))&&!(P&&(re=="length"||S&&(re=="offset"||re=="parent")||b&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||wi(re,k)))&&F.push(re);return F}function ju(n){var s=n.length;return s?n[Ll(0,s-1)]:t}function n_(n,s){return Qo(An(n),vr(s,0,n.length))}function i_(n){return Qo(An(n))}function Sl(n,s,l){(l!==t&&!ti(n[s],l)||l===t&&!(s in n))&&bi(n,s,l)}function Ys(n,s,l){var h=n[s];(!(Lt.call(n,s)&&ti(h,l))||l===t&&!(s in n))&&bi(n,s,l)}function zo(n,s){for(var l=n.length;l--;)if(ti(n[l][0],s))return l;return-1}function r_(n,s,l,h){return Xi(n,function(S,b,P){s(h,S,l(S),P)}),h}function Ju(n,s){return n&&hi(s,rn(s),n)}function s_(n,s){return n&&hi(s,Rn(s),n)}function bi(n,s,l){s=="__proto__"&&Uo?Uo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Ml(n,s){for(var l=-1,h=s.length,S=j(h),b=n==null;++l<h;)S[l]=b?t:tc(n,s[l]);return S}function vr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Xn(n,s,l,h,S,b){var P,F=s&_,k=s&v,re=s&x;if(l&&(P=S?l(n,h,S,b):l(n)),P!==t)return P;if(!Vt(n))return n;var ae=at(n);if(ae){if(P=Y_(n),!F)return An(n,P)}else{var he=hn(n),Ae=he==W||he==Wt;if(Ki(n))return yf(n,F);if(he==et||he==de||Ae&&!S){if(P=k||Ae?{}:kf(n),!F)return k?O_(n,s_(P,n)):N_(n,Ju(P,n))}else{if(!Ot[he])return S?n:{};P=$_(n,he,F)}}b||(b=new ei);var Ge=b.get(n);if(Ge)return Ge;b.set(n,P),_h(n)?n.forEach(function($e){P.add(Xn($e,s,l,$e,n,b))}):mh(n)&&n.forEach(function($e,vt){P.set(vt,Xn($e,s,l,vt,n,b))});var Ye=re?k?Hl:zl:k?Rn:rn,pt=ae?t:Ye(n);return kn(pt||n,function($e,vt){pt&&(vt=$e,$e=n[vt]),Ys(P,vt,Xn($e,s,l,vt,n,b))}),P}function o_(n){var s=rn(n);return function(l){return Qu(l,n,s)}}function Qu(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ut(n);h--;){var S=l[h],b=s[S],P=n[S];if(P===t&&!(S in n)||!b(P))return!1}return!0}function ef(n,s,l){if(typeof n!="function")throw new Vn(u);return eo(function(){n.apply(t,l)},s)}function $s(n,s,l,h){var S=-1,b=yo,P=!0,F=n.length,k=[],re=s.length;if(!F)return k;l&&(s=kt(s,Dn(l))),h?(b=al,P=!1):s.length>=o&&(b=Hs,P=!1,s=new _r(s));e:for(;++S<F;){var ae=n[S],he=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,P&&he===he){for(var Ae=re;Ae--;)if(s[Ae]===he)continue e;k.push(ae)}else b(s,he,h)||k.push(ae)}return k}var Xi=Rf(fi),tf=Rf(yl,!0);function a_(n,s){var l=!0;return Xi(n,function(h,S,b){return l=!!s(h,S,b),l}),l}function Ho(n,s,l){for(var h=-1,S=n.length;++h<S;){var b=n[h],P=s(b);if(P!=null&&(F===t?P===P&&!Nn(P):l(P,F)))var F=P,k=b}return k}function l_(n,s,l,h){var S=n.length;for(l=ht(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ht(h),h<0&&(h+=S),h=l>h?0:xh(h);l<h;)n[l++]=s;return n}function nf(n,s){var l=[];return Xi(n,function(h,S,b){s(h,S,b)&&l.push(h)}),l}function an(n,s,l,h,S){var b=-1,P=n.length;for(l||(l=Z_),S||(S=[]);++b<P;){var F=n[b];s>0&&l(F)?s>1?an(F,s-1,l,h,S):ki(S,F):h||(S[S.length]=F)}return S}var El=Cf(),rf=Cf(!0);function fi(n,s){return n&&El(n,s,rn)}function yl(n,s){return n&&rf(n,s,rn)}function ko(n,s){return Hi(s,function(l){return Ri(n[l])})}function xr(n,s){s=Yi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[di(s[l++])];return l&&l==h?n:t}function sf(n,s,l){var h=s(n);return at(n)?h:ki(h,l(n))}function gn(n){return n==null?n===t?oe:ke:mr&&mr in Ut(n)?W_(n):iv(n)}function bl(n,s){return n>s}function c_(n,s){return n!=null&&Lt.call(n,s)}function u_(n,s){return n!=null&&s in Ut(n)}function f_(n,s,l){return n>=fn(s,l)&&n<Qt(s,l)}function Tl(n,s,l){for(var h=l?al:yo,S=n[0].length,b=n.length,P=b,F=j(b),k=1/0,re=[];P--;){var ae=n[P];P&&s&&(ae=kt(ae,Dn(s))),k=fn(ae.length,k),F[P]=!l&&(s||S>=120&&ae.length>=120)?new _r(P&&ae):t}ae=n[0];var he=-1,Ae=F[0];e:for(;++he<S&&re.length<k;){var Ge=ae[he],Ye=s?s(Ge):Ge;if(Ge=l||Ge!==0?Ge:0,!(Ae?Hs(Ae,Ye):h(re,Ye,l))){for(P=b;--P;){var pt=F[P];if(!(pt?Hs(pt,Ye):h(n[P],Ye,l)))continue e}Ae&&Ae.push(Ye),re.push(Ge)}}return re}function h_(n,s,l,h){return fi(n,function(S,b,P){s(h,l(S),b,P)}),h}function Ks(n,s,l){s=Yi(s,n),n=qf(n,s);var h=n==null?n:n[di(Yn(s))];return h==null?t:In(h,n,l)}function of(n){return Xt(n)&&gn(n)==de}function d_(n){return Xt(n)&&gn(n)==Ze}function p_(n){return Xt(n)&&gn(n)==Ce}function Zs(n,s,l,h,S){return n===s?!0:n==null||s==null||!Xt(n)&&!Xt(s)?n!==n&&s!==s:m_(n,s,l,h,Zs,S)}function m_(n,s,l,h,S,b){var P=at(n),F=at(s),k=P?Re:hn(n),re=F?Re:hn(s);k=k==de?et:k,re=re==de?et:re;var ae=k==et,he=re==et,Ae=k==re;if(Ae&&Ki(n)){if(!Ki(s))return!1;P=!0,ae=!1}if(Ae&&!ae)return b||(b=new ei),P||is(n)?Gf(n,s,l,h,S,b):k_(n,s,k,l,h,S,b);if(!(l&y)){var Ge=ae&&Lt.call(n,"__wrapped__"),Ye=he&&Lt.call(s,"__wrapped__");if(Ge||Ye){var pt=Ge?n.value():n,$e=Ye?s.value():s;return b||(b=new ei),S(pt,$e,l,h,b)}}return Ae?(b||(b=new ei),V_(n,s,l,h,S,b)):!1}function g_(n){return Xt(n)&&hn(n)==Ue}function Al(n,s,l,h){var S=l.length,b=S,P=!h;if(n==null)return!b;for(n=Ut(n);S--;){var F=l[S];if(P&&F[2]?F[1]!==n[F[0]]:!(F[0]in n))return!1}for(;++S<b;){F=l[S];var k=F[0],re=n[k],ae=F[1];if(P&&F[2]){if(re===t&&!(k in n))return!1}else{var he=new ei;if(h)var Ae=h(re,ae,k,n,s,he);if(!(Ae===t?Zs(ae,re,y|A,h,he):Ae))return!1}}return!0}function af(n){if(!Vt(n)||J_(n))return!1;var s=Ri(n)?gg:Z;return s.test(Mr(n))}function __(n){return Xt(n)&&gn(n)==Tt}function v_(n){return Xt(n)&&hn(n)==C}function x_(n){return Xt(n)&&sa(n.length)&&!!Bt[gn(n)]}function lf(n){return typeof n=="function"?n:n==null?Cn:typeof n=="object"?at(n)?ff(n[0],n[1]):uf(n):Lh(n)}function wl(n){if(!Qs(n))return Eg(n);var s=[];for(var l in Ut(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function S_(n){if(!Vt(n))return nv(n);var s=Qs(n),l=[];for(var h in n)h=="constructor"&&(s||!Lt.call(n,h))||l.push(h);return l}function Rl(n,s){return n<s}function cf(n,s){var l=-1,h=wn(n)?j(n.length):[];return Xi(n,function(S,b,P){h[++l]=s(S,b,P)}),h}function uf(n){var s=Vl(n);return s.length==1&&s[0][2]?Wf(s[0][0],s[0][1]):function(l){return l===n||Al(l,n,s)}}function ff(n,s){return Xl(n)&&Vf(s)?Wf(di(n),s):function(l){var h=tc(l,n);return h===t&&h===s?nc(l,n):Zs(s,h,y|A)}}function Vo(n,s,l,h,S){n!==s&&El(s,function(b,P){if(S||(S=new ei),Vt(b))M_(n,s,P,l,Vo,h,S);else{var F=h?h(Yl(n,P),b,P+"",n,s,S):t;F===t&&(F=b),Sl(n,P,F)}},Rn)}function M_(n,s,l,h,S,b,P){var F=Yl(n,l),k=Yl(s,l),re=P.get(k);if(re){Sl(n,l,re);return}var ae=b?b(F,k,l+"",n,s,P):t,he=ae===t;if(he){var Ae=at(k),Ge=!Ae&&Ki(k),Ye=!Ae&&!Ge&&is(k);ae=k,Ae||Ge||Ye?at(F)?ae=F:$t(F)?ae=An(F):Ge?(he=!1,ae=yf(k,!0)):Ye?(he=!1,ae=bf(k,!0)):ae=[]:to(k)||Er(k)?(ae=F,Er(F)?ae=Sh(F):(!Vt(F)||Ri(F))&&(ae=kf(k))):he=!1}he&&(P.set(k,ae),S(ae,k,h,b,P),P.delete(k)),Sl(n,l,ae)}function hf(n,s){var l=n.length;if(l)return s+=s<0?l:0,wi(s,l)?n[s]:t}function df(n,s,l){s.length?s=kt(s,function(b){return at(b)?function(P){return xr(P,b.length===1?b[0]:b)}:b}):s=[Cn];var h=-1;s=kt(s,Dn(We()));var S=cf(n,function(b,P,F){var k=kt(s,function(re){return re(b)});return{criteria:k,index:++h,value:b}});return $m(S,function(b,P){return U_(b,P,l)})}function E_(n,s){return pf(n,s,function(l,h){return nc(n,h)})}function pf(n,s,l){for(var h=-1,S=s.length,b={};++h<S;){var P=s[h],F=xr(n,P);l(F,P)&&js(b,Yi(P,n),F)}return b}function y_(n){return function(s){return xr(s,n)}}function Cl(n,s,l,h){var S=h?Ym:qr,b=-1,P=s.length,F=n;for(n===s&&(s=An(s)),l&&(F=kt(n,Dn(l)));++b<P;)for(var k=0,re=s[b],ae=l?l(re):re;(k=S(F,ae,k,h))>-1;)F!==n&&Do.call(F,k,1),Do.call(n,k,1);return n}function mf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==b){var b=S;wi(S)?Do.call(n,S,1):Dl(n,S)}}return n}function Ll(n,s){return n+Oo($u()*(s-n+1))}function b_(n,s,l,h){for(var S=-1,b=Qt(No((s-n)/(l||1)),0),P=j(b);b--;)P[h?b:++S]=n,n+=l;return P}function Pl(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Oo(s/2),s&&(n+=n);while(s);return l}function _t(n,s){return $l(Xf(n,s,Cn),n+"")}function T_(n){return ju(rs(n))}function A_(n,s){var l=rs(n);return Qo(l,vr(s,0,l.length))}function js(n,s,l,h){if(!Vt(n))return n;s=Yi(s,n);for(var S=-1,b=s.length,P=b-1,F=n;F!=null&&++S<b;){var k=di(s[S]),re=l;if(k==="__proto__"||k==="constructor"||k==="prototype")return n;if(S!=P){var ae=F[k];re=h?h(ae,k,F):t,re===t&&(re=Vt(ae)?ae:wi(s[S+1])?[]:{})}Ys(F,k,re),F=F[k]}return n}var gf=Fo?function(n,s){return Fo.set(n,s),n}:Cn,w_=Uo?function(n,s){return Uo(n,"toString",{configurable:!0,enumerable:!1,value:rc(s),writable:!0})}:Cn;function R_(n){return Qo(rs(n))}function qn(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var b=j(S);++h<S;)b[h]=n[h+s];return b}function C_(n,s){var l;return Xi(n,function(h,S,b){return l=s(h,S,b),!l}),!!l}function Wo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=tt){for(;h<S;){var b=h+S>>>1,P=n[b];P!==null&&!Nn(P)&&(l?P<=s:P<s)?h=b+1:S=b}return S}return Il(n,s,Cn,l)}function Il(n,s,l,h){var S=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var P=s!==s,F=s===null,k=Nn(s),re=s===t;S<b;){var ae=Oo((S+b)/2),he=l(n[ae]),Ae=he!==t,Ge=he===null,Ye=he===he,pt=Nn(he);if(P)var $e=h||Ye;else re?$e=Ye&&(h||Ae):F?$e=Ye&&Ae&&(h||!Ge):k?$e=Ye&&Ae&&!Ge&&(h||!pt):Ge||pt?$e=!1:$e=h?he<=s:he<s;$e?S=ae+1:b=ae}return fn(b,De)}function _f(n,s){for(var l=-1,h=n.length,S=0,b=[];++l<h;){var P=n[l],F=s?s(P):P;if(!l||!ti(F,k)){var k=F;b[S++]=P===0?0:P}}return b}function vf(n){return typeof n=="number"?n:Nn(n)?fe:+n}function Un(n){if(typeof n=="string")return n;if(at(n))return kt(n,Un)+"";if(Nn(n))return Ku?Ku.call(n):"";var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function qi(n,s,l){var h=-1,S=yo,b=n.length,P=!0,F=[],k=F;if(l)P=!1,S=al;else if(b>=o){var re=s?null:z_(n);if(re)return To(re);P=!1,S=Hs,k=new _r}else k=s?[]:F;e:for(;++h<b;){var ae=n[h],he=s?s(ae):ae;if(ae=l||ae!==0?ae:0,P&&he===he){for(var Ae=k.length;Ae--;)if(k[Ae]===he)continue e;s&&k.push(he),F.push(ae)}else S(k,he,l)||(k!==F&&k.push(he),F.push(ae))}return F}function Dl(n,s){return s=Yi(s,n),n=qf(n,s),n==null||delete n[di(Yn(s))]}function xf(n,s,l,h){return js(n,s,l(xr(n,s)),h)}function Xo(n,s,l,h){for(var S=n.length,b=h?S:-1;(h?b--:++b<S)&&s(n[b],b,n););return l?qn(n,h?0:b,h?b+1:S):qn(n,h?b+1:0,h?S:b)}function Sf(n,s){var l=n;return l instanceof xt&&(l=l.value()),ll(s,function(h,S){return S.func.apply(S.thisArg,ki([h],S.args))},l)}function Ul(n,s,l){var h=n.length;if(h<2)return h?qi(n[0]):[];for(var S=-1,b=j(h);++S<h;)for(var P=n[S],F=-1;++F<h;)F!=S&&(b[S]=$s(b[S]||P,n[F],s,l));return qi(an(b,1),s,l)}function Mf(n,s,l){for(var h=-1,S=n.length,b=s.length,P={};++h<S;){var F=h<b?s[h]:t;l(P,n[h],F)}return P}function Nl(n){return $t(n)?n:[]}function Ol(n){return typeof n=="function"?n:Cn}function Yi(n,s){return at(n)?n:Xl(n,s)?[n]:Zf(wt(n))}var L_=_t;function $i(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:qn(n,s,l)}var Ef=_g||function(n){return on.clearTimeout(n)};function yf(n,s){if(s)return n.slice();var l=n.length,h=Vu?Vu(l):new n.constructor(l);return n.copy(h),h}function Fl(n){var s=new n.constructor(n.byteLength);return new Po(s).set(new Po(n)),s}function P_(n,s){var l=s?Fl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function I_(n){var s=new n.constructor(n.source,Mo.exec(n));return s.lastIndex=n.lastIndex,s}function D_(n){return qs?Ut(qs.call(n)):{}}function bf(n,s){var l=s?Fl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Tf(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,b=Nn(n),P=s!==t,F=s===null,k=s===s,re=Nn(s);if(!F&&!re&&!b&&n>s||b&&P&&k&&!F&&!re||h&&P&&k||!l&&k||!S)return 1;if(!h&&!b&&!re&&n<s||re&&l&&S&&!h&&!b||F&&l&&S||!P&&S||!k)return-1}return 0}function U_(n,s,l){for(var h=-1,S=n.criteria,b=s.criteria,P=S.length,F=l.length;++h<P;){var k=Tf(S[h],b[h]);if(k){if(h>=F)return k;var re=l[h];return k*(re=="desc"?-1:1)}}return n.index-s.index}function Af(n,s,l,h){for(var S=-1,b=n.length,P=l.length,F=-1,k=s.length,re=Qt(b-P,0),ae=j(k+re),he=!h;++F<k;)ae[F]=s[F];for(;++S<P;)(he||S<b)&&(ae[l[S]]=n[S]);for(;re--;)ae[F++]=n[S++];return ae}function wf(n,s,l,h){for(var S=-1,b=n.length,P=-1,F=l.length,k=-1,re=s.length,ae=Qt(b-F,0),he=j(ae+re),Ae=!h;++S<ae;)he[S]=n[S];for(var Ge=S;++k<re;)he[Ge+k]=s[k];for(;++P<F;)(Ae||S<b)&&(he[Ge+l[P]]=n[S++]);return he}function An(n,s){var l=-1,h=n.length;for(s||(s=j(h));++l<h;)s[l]=n[l];return s}function hi(n,s,l,h){var S=!l;l||(l={});for(var b=-1,P=s.length;++b<P;){var F=s[b],k=h?h(l[F],n[F],F,l,n):t;k===t&&(k=n[F]),S?bi(l,F,k):Ys(l,F,k)}return l}function N_(n,s){return hi(n,Wl(n),s)}function O_(n,s){return hi(n,zf(n),s)}function qo(n,s){return function(l,h){var S=at(l)?Hm:r_,b=s?s():{};return S(l,n,We(h,2),b)}}function es(n){return _t(function(s,l){var h=-1,S=l.length,b=S>1?l[S-1]:t,P=S>2?l[2]:t;for(b=n.length>3&&typeof b=="function"?(S--,b):t,P&&_n(l[0],l[1],P)&&(b=S<3?t:b,S=1),s=Ut(s);++h<S;){var F=l[h];F&&n(s,F,h,b)}return s})}function Rf(n,s){return function(l,h){if(l==null)return l;if(!wn(l))return n(l,h);for(var S=l.length,b=s?S:-1,P=Ut(l);(s?b--:++b<S)&&h(P[b],b,P)!==!1;);return l}}function Cf(n){return function(s,l,h){for(var S=-1,b=Ut(s),P=h(s),F=P.length;F--;){var k=P[n?F:++S];if(l(b[k],k,b)===!1)break}return s}}function F_(n,s,l){var h=s&g,S=Js(n);function b(){var P=this&&this!==on&&this instanceof b?S:n;return P.apply(h?l:this,arguments)}return b}function Lf(n){return function(s){s=wt(s);var l=Yr(s)?Qn(s):t,h=l?l[0]:s.charAt(0),S=l?$i(l,1).join(""):s.slice(1);return h[n]()+S}}function ts(n){return function(s){return ll(Rh(wh(s).replace(wm,"")),n,"")}}function Js(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Qr(n.prototype),h=n.apply(l,s);return Vt(h)?h:l}}function B_(n,s,l){var h=Js(n);function S(){for(var b=arguments.length,P=j(b),F=b,k=ns(S);F--;)P[F]=arguments[F];var re=b<3&&P[0]!==k&&P[b-1]!==k?[]:Vi(P,k);if(b-=re.length,b<l)return Nf(n,s,Yo,S.placeholder,t,P,re,t,t,l-b);var ae=this&&this!==on&&this instanceof S?h:n;return In(ae,this,P)}return S}function Pf(n){return function(s,l,h){var S=Ut(s);if(!wn(s)){var b=We(l,3);s=rn(s),l=function(F){return b(S[F],F,S)}}var P=n(s,l,h);return P>-1?S[b?s[P]:P]:t}}function If(n){return Ai(function(s){var l=s.length,h=l,S=Wn.prototype.thru;for(n&&s.reverse();h--;){var b=s[h];if(typeof b!="function")throw new Vn(u);if(S&&!P&&jo(b)=="wrapper")var P=new Wn([],!0)}for(h=P?h:l;++h<l;){b=s[h];var F=jo(b),k=F=="wrapper"?kl(b):t;k&&ql(k[0])&&k[1]==(I|R|B|K)&&!k[4].length&&k[9]==1?P=P[jo(k[0])].apply(P,k[3]):P=b.length==1&&ql(b)?P[F]():P.thru(b)}return function(){var re=arguments,ae=re[0];if(P&&re.length==1&&at(ae))return P.plant(ae).value();for(var he=0,Ae=l?s[he].apply(this,re):ae;++he<l;)Ae=s[he].call(this,Ae);return Ae}})}function Yo(n,s,l,h,S,b,P,F,k,re){var ae=s&I,he=s&g,Ae=s&m,Ge=s&(R|D),Ye=s&Se,pt=Ae?t:Js(n);function $e(){for(var vt=arguments.length,St=j(vt),On=vt;On--;)St[On]=arguments[On];if(Ge)var vn=ns($e),Fn=Zm(St,vn);if(h&&(St=Af(St,h,S,Ge)),b&&(St=wf(St,b,P,Ge)),vt-=Fn,Ge&&vt<re){var Kt=Vi(St,vn);return Nf(n,s,Yo,$e.placeholder,l,St,Kt,F,k,re-vt)}var ni=he?l:this,Li=Ae?ni[n]:n;return vt=St.length,F?St=rv(St,F):Ye&&vt>1&&St.reverse(),ae&&k<vt&&(St.length=k),this&&this!==on&&this instanceof $e&&(Li=pt||Js(Li)),Li.apply(ni,St)}return $e}function Df(n,s){return function(l,h){return h_(l,n,s(h),{})}}function $o(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Un(l),h=Un(h)):(l=vf(l),h=vf(h)),S=n(l,h)}return S}}function Bl(n){return Ai(function(s){return s=kt(s,Dn(We())),_t(function(l){var h=this;return n(s,function(S){return In(S,h,l)})})})}function Ko(n,s){s=s===t?" ":Un(s);var l=s.length;if(l<2)return l?Pl(s,n):s;var h=Pl(s,No(n/$r(s)));return Yr(s)?$i(Qn(h),0,n).join(""):h.slice(0,n)}function G_(n,s,l,h){var S=s&g,b=Js(n);function P(){for(var F=-1,k=arguments.length,re=-1,ae=h.length,he=j(ae+k),Ae=this&&this!==on&&this instanceof P?b:n;++re<ae;)he[re]=h[re];for(;k--;)he[re++]=arguments[++F];return In(Ae,S?l:this,he)}return P}function Uf(n){return function(s,l,h){return h&&typeof h!="number"&&_n(s,l,h)&&(l=h=t),s=Ci(s),l===t?(l=s,s=0):l=Ci(l),h=h===t?s<l?1:-1:Ci(h),b_(s,l,h,n)}}function Zo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=$n(s),l=$n(l)),n(s,l)}}function Nf(n,s,l,h,S,b,P,F,k,re){var ae=s&R,he=ae?P:t,Ae=ae?t:P,Ge=ae?b:t,Ye=ae?t:b;s|=ae?B:G,s&=~(ae?G:B),s&N||(s&=~(g|m));var pt=[n,s,S,Ge,he,Ye,Ae,F,k,re],$e=l.apply(t,pt);return ql(n)&&Yf($e,pt),$e.placeholder=h,$f($e,n,s)}function Gl(n){var s=Jt[n];return function(l,h){if(l=$n(l),h=h==null?0:fn(ht(h),292),h&&Yu(l)){var S=(wt(l)+"e").split("e"),b=s(S[0]+"e"+(+S[1]+h));return S=(wt(b)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var z_=jr&&1/To(new jr([,-0]))[1]==ce?function(n){return new jr(n)}:ac;function Of(n){return function(s){var l=hn(s);return l==Ue?ml(s):l==C?ig(s):Km(s,n(s))}}function Ti(n,s,l,h,S,b,P,F){var k=s&m;if(!k&&typeof n!="function")throw new Vn(u);var re=h?h.length:0;if(re||(s&=~(B|G),h=S=t),P=P===t?P:Qt(ht(P),0),F=F===t?F:ht(F),re-=S?S.length:0,s&G){var ae=h,he=S;h=S=t}var Ae=k?t:kl(n),Ge=[n,s,l,h,S,ae,he,b,P,F];if(Ae&&tv(Ge,Ae),n=Ge[0],s=Ge[1],l=Ge[2],h=Ge[3],S=Ge[4],F=Ge[9]=Ge[9]===t?k?0:n.length:Qt(Ge[9]-re,0),!F&&s&(R|D)&&(s&=~(R|D)),!s||s==g)var Ye=F_(n,s,l);else s==R||s==D?Ye=B_(n,s,F):(s==B||s==(g|B))&&!S.length?Ye=G_(n,s,l,h):Ye=Yo.apply(t,Ge);var pt=Ae?gf:Yf;return $f(pt(Ye,Ge),n,s)}function Ff(n,s,l,h){return n===t||ti(n,Zr[l])&&!Lt.call(h,l)?s:n}function Bf(n,s,l,h,S,b){return Vt(n)&&Vt(s)&&(b.set(s,n),Vo(n,s,t,Bf,b),b.delete(s)),n}function H_(n){return to(n)?t:n}function Gf(n,s,l,h,S,b){var P=l&y,F=n.length,k=s.length;if(F!=k&&!(P&&k>F))return!1;var re=b.get(n),ae=b.get(s);if(re&&ae)return re==s&&ae==n;var he=-1,Ae=!0,Ge=l&A?new _r:t;for(b.set(n,s),b.set(s,n);++he<F;){var Ye=n[he],pt=s[he];if(h)var $e=P?h(pt,Ye,he,s,n,b):h(Ye,pt,he,n,s,b);if($e!==t){if($e)continue;Ae=!1;break}if(Ge){if(!cl(s,function(vt,St){if(!Hs(Ge,St)&&(Ye===vt||S(Ye,vt,l,h,b)))return Ge.push(St)})){Ae=!1;break}}else if(!(Ye===pt||S(Ye,pt,l,h,b))){Ae=!1;break}}return b.delete(n),b.delete(s),Ae}function k_(n,s,l,h,S,b,P){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ze:return!(n.byteLength!=s.byteLength||!b(new Po(n),new Po(s)));case Oe:case Ce:case Je:return ti(+n,+s);case Ve:return n.name==s.name&&n.message==s.message;case Tt:case M:return n==s+"";case Ue:var F=ml;case C:var k=h&y;if(F||(F=To),n.size!=s.size&&!k)return!1;var re=P.get(n);if(re)return re==s;h|=A,P.set(n,s);var ae=Gf(F(n),F(s),h,S,b,P);return P.delete(n),ae;case ee:if(qs)return qs.call(n)==qs.call(s)}return!1}function V_(n,s,l,h,S,b){var P=l&y,F=zl(n),k=F.length,re=zl(s),ae=re.length;if(k!=ae&&!P)return!1;for(var he=k;he--;){var Ae=F[he];if(!(P?Ae in s:Lt.call(s,Ae)))return!1}var Ge=b.get(n),Ye=b.get(s);if(Ge&&Ye)return Ge==s&&Ye==n;var pt=!0;b.set(n,s),b.set(s,n);for(var $e=P;++he<k;){Ae=F[he];var vt=n[Ae],St=s[Ae];if(h)var On=P?h(St,vt,Ae,s,n,b):h(vt,St,Ae,n,s,b);if(!(On===t?vt===St||S(vt,St,l,h,b):On)){pt=!1;break}$e||($e=Ae=="constructor")}if(pt&&!$e){var vn=n.constructor,Fn=s.constructor;vn!=Fn&&"constructor"in n&&"constructor"in s&&!(typeof vn=="function"&&vn instanceof vn&&typeof Fn=="function"&&Fn instanceof Fn)&&(pt=!1)}return b.delete(n),b.delete(s),pt}function Ai(n){return $l(Xf(n,t,eh),n+"")}function zl(n){return sf(n,rn,Wl)}function Hl(n){return sf(n,Rn,zf)}var kl=Fo?function(n){return Fo.get(n)}:ac;function jo(n){for(var s=n.name+"",l=Jr[s],h=Lt.call(Jr,s)?l.length:0;h--;){var S=l[h],b=S.func;if(b==null||b==n)return S.name}return s}function ns(n){var s=Lt.call(E,"placeholder")?E:n;return s.placeholder}function We(){var n=E.iteratee||sc;return n=n===sc?lf:n,arguments.length?n(arguments[0],arguments[1]):n}function Jo(n,s){var l=n.__data__;return j_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Vl(n){for(var s=rn(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Vf(S)]}return s}function Sr(n,s){var l=eg(n,s);return af(l)?l:t}function W_(n){var s=Lt.call(n,mr),l=n[mr];try{n[mr]=t;var h=!0}catch{}var S=Co.call(n);return h&&(s?n[mr]=l:delete n[mr]),S}var Wl=_l?function(n){return n==null?[]:(n=Ut(n),Hi(_l(n),function(s){return Xu.call(n,s)}))}:lc,zf=_l?function(n){for(var s=[];n;)ki(s,Wl(n)),n=Io(n);return s}:lc,hn=gn;(vl&&hn(new vl(new ArrayBuffer(1)))!=He||Vs&&hn(new Vs)!=Ue||xl&&hn(xl.resolve())!=nt||jr&&hn(new jr)!=C||Ws&&hn(new Ws)!=me)&&(hn=function(n){var s=gn(n),l=s==et?n.constructor:t,h=l?Mr(l):"";if(h)switch(h){case Ag:return He;case wg:return Ue;case Rg:return nt;case Cg:return C;case Lg:return me}return s});function X_(n,s,l){for(var h=-1,S=l.length;++h<S;){var b=l[h],P=b.size;switch(b.type){case"drop":n+=P;break;case"dropRight":s-=P;break;case"take":s=fn(s,n+P);break;case"takeRight":n=Qt(n,s-P);break}}return{start:n,end:s}}function q_(n){var s=n.match(vo);return s?s[1].split(Hr):[]}function Hf(n,s,l){s=Yi(s,n);for(var h=-1,S=s.length,b=!1;++h<S;){var P=di(s[h]);if(!(b=n!=null&&l(n,P)))break;n=n[P]}return b||++h!=S?b:(S=n==null?0:n.length,!!S&&sa(S)&&wi(P,S)&&(at(n)||Er(n)))}function Y_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function kf(n){return typeof n.constructor=="function"&&!Qs(n)?Qr(Io(n)):{}}function $_(n,s,l){var h=n.constructor;switch(s){case Ze:return Fl(n);case Oe:case Ce:return new h(+n);case He:return P_(n,l);case ye:case Te:case Qe:case Ee:case Nt:case st:case ze:case Pe:case Fe:return bf(n,l);case Ue:return new h;case Je:case M:return new h(n);case Tt:return I_(n);case C:return new h;case ee:return D_(n)}}function K_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(zr,`{
/* [wrapped with `+s+`] */
`)}function Z_(n){return at(n)||Er(n)||!!(qu&&n&&n[qu])}function wi(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&Y.test(n))&&n>-1&&n%1==0&&n<s}function _n(n,s,l){if(!Vt(l))return!1;var h=typeof s;return(h=="number"?wn(l)&&wi(s,l.length):h=="string"&&s in l)?ti(l[s],n):!1}function Xl(n,s){if(at(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:zt.test(n)||!Rt.test(n)||s!=null&&n in Ut(s)}function j_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ql(n){var s=jo(n),l=E[s];if(typeof l!="function"||!(s in xt.prototype))return!1;if(n===l)return!0;var h=kl(l);return!!h&&n===h[0]}function J_(n){return!!ku&&ku in n}var Q_=wo?Ri:cc;function Qs(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Zr;return n===l}function Vf(n){return n===n&&!Vt(n)}function Wf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Ut(l))}}function ev(n){var s=ia(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function tv(n,s){var l=n[1],h=s[1],S=l|h,b=S<(g|m|I),P=h==I&&l==R||h==I&&l==K&&n[7].length<=s[8]||h==(I|K)&&s[7].length<=s[8]&&l==R;if(!(b||P))return n;h&g&&(n[2]=s[2],S|=l&g?0:N);var F=s[3];if(F){var k=n[3];n[3]=k?Af(k,F,s[4]):F,n[4]=k?Vi(n[3],p):s[4]}return F=s[5],F&&(k=n[5],n[5]=k?wf(k,F,s[6]):F,n[6]=k?Vi(n[5],p):s[6]),F=s[7],F&&(n[7]=F),h&I&&(n[8]=n[8]==null?s[8]:fn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function nv(n){var s=[];if(n!=null)for(var l in Ut(n))s.push(l);return s}function iv(n){return Co.call(n)}function Xf(n,s,l){return s=Qt(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,b=Qt(h.length-s,0),P=j(b);++S<b;)P[S]=h[s+S];S=-1;for(var F=j(s+1);++S<s;)F[S]=h[S];return F[s]=l(P),In(n,this,F)}}function qf(n,s){return s.length<2?n:xr(n,qn(s,0,-1))}function rv(n,s){for(var l=n.length,h=fn(s.length,l),S=An(n);h--;){var b=s[h];n[h]=wi(b,l)?S[b]:t}return n}function Yl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Yf=Kf(gf),eo=xg||function(n,s){return on.setTimeout(n,s)},$l=Kf(w_);function $f(n,s,l){var h=s+"";return $l(n,K_(h,sv(q_(h),l)))}function Kf(n){var s=0,l=0;return function(){var h=yg(),S=_e-(h-l);if(l=h,S>0){if(++s>=Me)return arguments[0]}else s=0;return n.apply(t,arguments)}}function Qo(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var b=Ll(l,S),P=n[b];n[b]=n[l],n[l]=P}return n.length=s,n}var Zf=ev(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,S,b){s.push(S?b.replace(el,"$1"):h||l)}),s});function di(n){if(typeof n=="string"||Nn(n))return n;var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Mr(n){if(n!=null){try{return Ro.call(n)}catch{}try{return n+""}catch{}}return""}function sv(n,s){return kn(Q,function(l){var h="_."+l[0];s&l[1]&&!yo(n,h)&&n.push(h)}),n.sort()}function jf(n){if(n instanceof xt)return n.clone();var s=new Wn(n.__wrapped__,n.__chain__);return s.__actions__=An(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function ov(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=Qt(ht(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,b=0,P=j(No(h/s));S<h;)P[b++]=qn(n,S,S+=s);return P}function av(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var b=n[s];b&&(S[h++]=b)}return S}function lv(){var n=arguments.length;if(!n)return[];for(var s=j(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return ki(at(l)?An(l):[l],an(s,1))}var cv=_t(function(n,s){return $t(n)?$s(n,an(s,1,$t,!0)):[]}),uv=_t(function(n,s){var l=Yn(s);return $t(l)&&(l=t),$t(n)?$s(n,an(s,1,$t,!0),We(l,2)):[]}),fv=_t(function(n,s){var l=Yn(s);return $t(l)&&(l=t),$t(n)?$s(n,an(s,1,$t,!0),t,l):[]});function hv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),qn(n,s<0?0:s,h)):[]}function dv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,qn(n,0,s<0?0:s)):[]}function pv(n,s){return n&&n.length?Xo(n,We(s,3),!0,!0):[]}function mv(n,s){return n&&n.length?Xo(n,We(s,3),!0):[]}function gv(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&_n(n,s,l)&&(l=0,h=S),l_(n,s,l,h)):[]}function Jf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=Qt(h+S,0)),bo(n,We(s,3),S)}function Qf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ht(l),S=l<0?Qt(h+S,0):fn(S,h-1)),bo(n,We(s,3),S,!0)}function eh(n){var s=n==null?0:n.length;return s?an(n,1):[]}function _v(n){var s=n==null?0:n.length;return s?an(n,ce):[]}function vv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ht(s),an(n,s)):[]}function xv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function th(n){return n&&n.length?n[0]:t}function Sv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=Qt(h+S,0)),qr(n,s,S)}function Mv(n){var s=n==null?0:n.length;return s?qn(n,0,-1):[]}var Ev=_t(function(n){var s=kt(n,Nl);return s.length&&s[0]===n[0]?Tl(s):[]}),yv=_t(function(n){var s=Yn(n),l=kt(n,Nl);return s===Yn(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Tl(l,We(s,2)):[]}),bv=_t(function(n){var s=Yn(n),l=kt(n,Nl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Tl(l,t,s):[]});function Tv(n,s){return n==null?"":Mg.call(n,s)}function Yn(n){var s=n==null?0:n.length;return s?n[s-1]:t}function Av(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ht(l),S=S<0?Qt(h+S,0):fn(S,h-1)),s===s?sg(n,s,S):bo(n,Uu,S,!0)}function wv(n,s){return n&&n.length?hf(n,ht(s)):t}var Rv=_t(nh);function nh(n,s){return n&&n.length&&s&&s.length?Cl(n,s):n}function Cv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,We(l,2)):n}function Lv(n,s,l){return n&&n.length&&s&&s.length?Cl(n,s,t,l):n}var Pv=Ai(function(n,s){var l=n==null?0:n.length,h=Ml(n,s);return mf(n,kt(s,function(S){return wi(S,l)?+S:S}).sort(Tf)),h});function Iv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],b=n.length;for(s=We(s,3);++h<b;){var P=n[h];s(P,h,n)&&(l.push(P),S.push(h))}return mf(n,S),l}function Kl(n){return n==null?n:Tg.call(n)}function Dv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&_n(n,s,l)?(s=0,l=h):(s=s==null?0:ht(s),l=l===t?h:ht(l)),qn(n,s,l)):[]}function Uv(n,s){return Wo(n,s)}function Nv(n,s,l){return Il(n,s,We(l,2))}function Ov(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s);if(h<l&&ti(n[h],s))return h}return-1}function Fv(n,s){return Wo(n,s,!0)}function Bv(n,s,l){return Il(n,s,We(l,2),!0)}function Gv(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s,!0)-1;if(ti(n[h],s))return h}return-1}function zv(n){return n&&n.length?_f(n):[]}function Hv(n,s){return n&&n.length?_f(n,We(s,2)):[]}function kv(n){var s=n==null?0:n.length;return s?qn(n,1,s):[]}function Vv(n,s,l){return n&&n.length?(s=l||s===t?1:ht(s),qn(n,0,s<0?0:s)):[]}function Wv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,qn(n,s<0?0:s,h)):[]}function Xv(n,s){return n&&n.length?Xo(n,We(s,3),!1,!0):[]}function qv(n,s){return n&&n.length?Xo(n,We(s,3)):[]}var Yv=_t(function(n){return qi(an(n,1,$t,!0))}),$v=_t(function(n){var s=Yn(n);return $t(s)&&(s=t),qi(an(n,1,$t,!0),We(s,2))}),Kv=_t(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,qi(an(n,1,$t,!0),t,s)});function Zv(n){return n&&n.length?qi(n):[]}function jv(n,s){return n&&n.length?qi(n,We(s,2)):[]}function Jv(n,s){return s=typeof s=="function"?s:t,n&&n.length?qi(n,t,s):[]}function Zl(n){if(!(n&&n.length))return[];var s=0;return n=Hi(n,function(l){if($t(l))return s=Qt(l.length,s),!0}),dl(s,function(l){return kt(n,ul(l))})}function ih(n,s){if(!(n&&n.length))return[];var l=Zl(n);return s==null?l:kt(l,function(h){return In(s,t,h)})}var Qv=_t(function(n,s){return $t(n)?$s(n,s):[]}),e0=_t(function(n){return Ul(Hi(n,$t))}),t0=_t(function(n){var s=Yn(n);return $t(s)&&(s=t),Ul(Hi(n,$t),We(s,2))}),n0=_t(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,Ul(Hi(n,$t),t,s)}),i0=_t(Zl);function r0(n,s){return Mf(n||[],s||[],Ys)}function s0(n,s){return Mf(n||[],s||[],js)}var o0=_t(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,ih(n,l)});function rh(n){var s=E(n);return s.__chain__=!0,s}function a0(n,s){return s(n),n}function ea(n,s){return s(n)}var l0=Ai(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(b){return Ml(b,n)};return s>1||this.__actions__.length||!(h instanceof xt)||!wi(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ea,args:[S],thisArg:t}),new Wn(h,this.__chain__).thru(function(b){return s&&!b.length&&b.push(t),b}))});function c0(){return rh(this)}function u0(){return new Wn(this.value(),this.__chain__)}function f0(){this.__values__===t&&(this.__values__=vh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function h0(){return this}function d0(n){for(var s,l=this;l instanceof Go;){var h=jf(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function p0(){var n=this.__wrapped__;if(n instanceof xt){var s=n;return this.__actions__.length&&(s=new xt(this)),s=s.reverse(),s.__actions__.push({func:ea,args:[Kl],thisArg:t}),new Wn(s,this.__chain__)}return this.thru(Kl)}function m0(){return Sf(this.__wrapped__,this.__actions__)}var g0=qo(function(n,s,l){Lt.call(n,l)?++n[l]:bi(n,l,1)});function _0(n,s,l){var h=at(n)?Iu:a_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}function v0(n,s){var l=at(n)?Hi:nf;return l(n,We(s,3))}var x0=Pf(Jf),S0=Pf(Qf);function M0(n,s){return an(ta(n,s),1)}function E0(n,s){return an(ta(n,s),ce)}function y0(n,s,l){return l=l===t?1:ht(l),an(ta(n,s),l)}function sh(n,s){var l=at(n)?kn:Xi;return l(n,We(s,3))}function oh(n,s){var l=at(n)?km:tf;return l(n,We(s,3))}var b0=qo(function(n,s,l){Lt.call(n,l)?n[l].push(s):bi(n,l,[s])});function T0(n,s,l,h){n=wn(n)?n:rs(n),l=l&&!h?ht(l):0;var S=n.length;return l<0&&(l=Qt(S+l,0)),oa(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&qr(n,s,l)>-1}var A0=_t(function(n,s,l){var h=-1,S=typeof s=="function",b=wn(n)?j(n.length):[];return Xi(n,function(P){b[++h]=S?In(s,P,l):Ks(P,s,l)}),b}),w0=qo(function(n,s,l){bi(n,l,s)});function ta(n,s){var l=at(n)?kt:cf;return l(n,We(s,3))}function R0(n,s,l,h){return n==null?[]:(at(s)||(s=s==null?[]:[s]),l=h?t:l,at(l)||(l=l==null?[]:[l]),df(n,s,l))}var C0=qo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function L0(n,s,l){var h=at(n)?ll:Ou,S=arguments.length<3;return h(n,We(s,4),l,S,Xi)}function P0(n,s,l){var h=at(n)?Vm:Ou,S=arguments.length<3;return h(n,We(s,4),l,S,tf)}function I0(n,s){var l=at(n)?Hi:nf;return l(n,ra(We(s,3)))}function D0(n){var s=at(n)?ju:T_;return s(n)}function U0(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=ht(s);var h=at(n)?n_:A_;return h(n,s)}function N0(n){var s=at(n)?i_:R_;return s(n)}function O0(n){if(n==null)return 0;if(wn(n))return oa(n)?$r(n):n.length;var s=hn(n);return s==Ue||s==C?n.size:wl(n).length}function F0(n,s,l){var h=at(n)?cl:C_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}var B0=_t(function(n,s){if(n==null)return[];var l=s.length;return l>1&&_n(n,s[0],s[1])?s=[]:l>2&&_n(s[0],s[1],s[2])&&(s=[s[0]]),df(n,an(s,1),[])}),na=vg||function(){return on.Date.now()};function G0(n,s){if(typeof s!="function")throw new Vn(u);return n=ht(n),function(){if(--n<1)return s.apply(this,arguments)}}function ah(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Ti(n,I,t,t,t,t,s)}function lh(n,s){var l;if(typeof s!="function")throw new Vn(u);return n=ht(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var jl=_t(function(n,s,l){var h=g;if(l.length){var S=Vi(l,ns(jl));h|=B}return Ti(n,h,s,l,S)}),ch=_t(function(n,s,l){var h=g|m;if(l.length){var S=Vi(l,ns(ch));h|=B}return Ti(s,h,n,l,S)});function uh(n,s,l){s=l?t:s;var h=Ti(n,R,t,t,t,t,t,s);return h.placeholder=uh.placeholder,h}function fh(n,s,l){s=l?t:s;var h=Ti(n,D,t,t,t,t,t,s);return h.placeholder=fh.placeholder,h}function hh(n,s,l){var h,S,b,P,F,k,re=0,ae=!1,he=!1,Ae=!0;if(typeof n!="function")throw new Vn(u);s=$n(s)||0,Vt(l)&&(ae=!!l.leading,he="maxWait"in l,b=he?Qt($n(l.maxWait)||0,s):b,Ae="trailing"in l?!!l.trailing:Ae);function Ge(Kt){var ni=h,Li=S;return h=S=t,re=Kt,P=n.apply(Li,ni),P}function Ye(Kt){return re=Kt,F=eo(vt,s),ae?Ge(Kt):P}function pt(Kt){var ni=Kt-k,Li=Kt-re,Ph=s-ni;return he?fn(Ph,b-Li):Ph}function $e(Kt){var ni=Kt-k,Li=Kt-re;return k===t||ni>=s||ni<0||he&&Li>=b}function vt(){var Kt=na();if($e(Kt))return St(Kt);F=eo(vt,pt(Kt))}function St(Kt){return F=t,Ae&&h?Ge(Kt):(h=S=t,P)}function On(){F!==t&&Ef(F),re=0,h=k=S=F=t}function vn(){return F===t?P:St(na())}function Fn(){var Kt=na(),ni=$e(Kt);if(h=arguments,S=this,k=Kt,ni){if(F===t)return Ye(k);if(he)return Ef(F),F=eo(vt,s),Ge(k)}return F===t&&(F=eo(vt,s)),P}return Fn.cancel=On,Fn.flush=vn,Fn}var z0=_t(function(n,s){return ef(n,1,s)}),H0=_t(function(n,s,l){return ef(n,$n(s)||0,l)});function k0(n){return Ti(n,Se)}function ia(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Vn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],b=l.cache;if(b.has(S))return b.get(S);var P=n.apply(this,h);return l.cache=b.set(S,P)||b,P};return l.cache=new(ia.Cache||yi),l}ia.Cache=yi;function ra(n){if(typeof n!="function")throw new Vn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function V0(n){return lh(2,n)}var W0=L_(function(n,s){s=s.length==1&&at(s[0])?kt(s[0],Dn(We())):kt(an(s,1),Dn(We()));var l=s.length;return _t(function(h){for(var S=-1,b=fn(h.length,l);++S<b;)h[S]=s[S].call(this,h[S]);return In(n,this,h)})}),Jl=_t(function(n,s){var l=Vi(s,ns(Jl));return Ti(n,B,t,s,l)}),dh=_t(function(n,s){var l=Vi(s,ns(dh));return Ti(n,G,t,s,l)}),X0=Ai(function(n,s){return Ti(n,K,t,t,t,s)});function q0(n,s){if(typeof n!="function")throw new Vn(u);return s=s===t?s:ht(s),_t(n,s)}function Y0(n,s){if(typeof n!="function")throw new Vn(u);return s=s==null?0:Qt(ht(s),0),_t(function(l){var h=l[s],S=$i(l,0,s);return h&&ki(S,h),In(n,this,S)})}function $0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Vn(u);return Vt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),hh(n,s,{leading:h,maxWait:s,trailing:S})}function K0(n){return ah(n,1)}function Z0(n,s){return Jl(Ol(s),n)}function j0(){if(!arguments.length)return[];var n=arguments[0];return at(n)?n:[n]}function J0(n){return Xn(n,x)}function Q0(n,s){return s=typeof s=="function"?s:t,Xn(n,x,s)}function ex(n){return Xn(n,_|x)}function tx(n,s){return s=typeof s=="function"?s:t,Xn(n,_|x,s)}function nx(n,s){return s==null||Qu(n,s,rn(s))}function ti(n,s){return n===s||n!==n&&s!==s}var ix=Zo(bl),rx=Zo(function(n,s){return n>=s}),Er=of(function(){return arguments}())?of:function(n){return Xt(n)&&Lt.call(n,"callee")&&!Xu.call(n,"callee")},at=j.isArray,sx=Au?Dn(Au):d_;function wn(n){return n!=null&&sa(n.length)&&!Ri(n)}function $t(n){return Xt(n)&&wn(n)}function ox(n){return n===!0||n===!1||Xt(n)&&gn(n)==Oe}var Ki=Sg||cc,ax=wu?Dn(wu):p_;function lx(n){return Xt(n)&&n.nodeType===1&&!to(n)}function cx(n){if(n==null)return!0;if(wn(n)&&(at(n)||typeof n=="string"||typeof n.splice=="function"||Ki(n)||is(n)||Er(n)))return!n.length;var s=hn(n);if(s==Ue||s==C)return!n.size;if(Qs(n))return!wl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function ux(n,s){return Zs(n,s)}function fx(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?Zs(n,s,t,l):!!h}function Ql(n){if(!Xt(n))return!1;var s=gn(n);return s==Ve||s==Mt||typeof n.message=="string"&&typeof n.name=="string"&&!to(n)}function hx(n){return typeof n=="number"&&Yu(n)}function Ri(n){if(!Vt(n))return!1;var s=gn(n);return s==W||s==Wt||s==je||s==ct}function ph(n){return typeof n=="number"&&n==ht(n)}function sa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function Vt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xt(n){return n!=null&&typeof n=="object"}var mh=Ru?Dn(Ru):g_;function dx(n,s){return n===s||Al(n,s,Vl(s))}function px(n,s,l){return l=typeof l=="function"?l:t,Al(n,s,Vl(s),l)}function mx(n){return gh(n)&&n!=+n}function gx(n){if(Q_(n))throw new rt(a);return af(n)}function _x(n){return n===null}function vx(n){return n==null}function gh(n){return typeof n=="number"||Xt(n)&&gn(n)==Je}function to(n){if(!Xt(n)||gn(n)!=et)return!1;var s=Io(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ro.call(l)==pg}var ec=Cu?Dn(Cu):__;function xx(n){return ph(n)&&n>=-te&&n<=te}var _h=Lu?Dn(Lu):v_;function oa(n){return typeof n=="string"||!at(n)&&Xt(n)&&gn(n)==M}function Nn(n){return typeof n=="symbol"||Xt(n)&&gn(n)==ee}var is=Pu?Dn(Pu):x_;function Sx(n){return n===t}function Mx(n){return Xt(n)&&hn(n)==me}function Ex(n){return Xt(n)&&gn(n)==pe}var yx=Zo(Rl),bx=Zo(function(n,s){return n<=s});function vh(n){if(!n)return[];if(wn(n))return oa(n)?Qn(n):An(n);if(ks&&n[ks])return ng(n[ks]());var s=hn(n),l=s==Ue?ml:s==C?To:rs;return l(n)}function Ci(n){if(!n)return n===0?n:0;if(n=$n(n),n===ce||n===-ce){var s=n<0?-1:1;return s*ue}return n===n?n:0}function ht(n){var s=Ci(n),l=s%1;return s===s?l?s-l:s:0}function xh(n){return n?vr(ht(n),0,ve):0}function $n(n){if(typeof n=="number")return n;if(Nn(n))return fe;if(Vt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Vt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Fu(n);var l=V.test(n);return l||J.test(n)?Gm(n.slice(2),l?2:8):w.test(n)?fe:+n}function Sh(n){return hi(n,Rn(n))}function Tx(n){return n?vr(ht(n),-te,te):n===0?n:0}function wt(n){return n==null?"":Un(n)}var Ax=es(function(n,s){if(Qs(s)||wn(s)){hi(s,rn(s),n);return}for(var l in s)Lt.call(s,l)&&Ys(n,l,s[l])}),Mh=es(function(n,s){hi(s,Rn(s),n)}),aa=es(function(n,s,l,h){hi(s,Rn(s),n,h)}),wx=es(function(n,s,l,h){hi(s,rn(s),n,h)}),Rx=Ai(Ml);function Cx(n,s){var l=Qr(n);return s==null?l:Ju(l,s)}var Lx=_t(function(n,s){n=Ut(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&_n(s[0],s[1],S)&&(h=1);++l<h;)for(var b=s[l],P=Rn(b),F=-1,k=P.length;++F<k;){var re=P[F],ae=n[re];(ae===t||ti(ae,Zr[re])&&!Lt.call(n,re))&&(n[re]=b[re])}return n}),Px=_t(function(n){return n.push(t,Bf),In(Eh,t,n)});function Ix(n,s){return Du(n,We(s,3),fi)}function Dx(n,s){return Du(n,We(s,3),yl)}function Ux(n,s){return n==null?n:El(n,We(s,3),Rn)}function Nx(n,s){return n==null?n:rf(n,We(s,3),Rn)}function Ox(n,s){return n&&fi(n,We(s,3))}function Fx(n,s){return n&&yl(n,We(s,3))}function Bx(n){return n==null?[]:ko(n,rn(n))}function Gx(n){return n==null?[]:ko(n,Rn(n))}function tc(n,s,l){var h=n==null?t:xr(n,s);return h===t?l:h}function zx(n,s){return n!=null&&Hf(n,s,c_)}function nc(n,s){return n!=null&&Hf(n,s,u_)}var Hx=Df(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),n[s]=l},rc(Cn)),kx=Df(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},We),Vx=_t(Ks);function rn(n){return wn(n)?Zu(n):wl(n)}function Rn(n){return wn(n)?Zu(n,!0):S_(n)}function Wx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,b){bi(l,s(h,S,b),h)}),l}function Xx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,b){bi(l,S,s(h,S,b))}),l}var qx=es(function(n,s,l){Vo(n,s,l)}),Eh=es(function(n,s,l,h){Vo(n,s,l,h)}),Yx=Ai(function(n,s){var l={};if(n==null)return l;var h=!1;s=kt(s,function(b){return b=Yi(b,n),h||(h=b.length>1),b}),hi(n,Hl(n),l),h&&(l=Xn(l,_|v|x,H_));for(var S=s.length;S--;)Dl(l,s[S]);return l});function $x(n,s){return yh(n,ra(We(s)))}var Kx=Ai(function(n,s){return n==null?{}:E_(n,s)});function yh(n,s){if(n==null)return{};var l=kt(Hl(n),function(h){return[h]});return s=We(s),pf(n,l,function(h,S){return s(h,S[0])})}function Zx(n,s,l){s=Yi(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var b=n==null?t:n[di(s[h])];b===t&&(h=S,b=l),n=Ri(b)?b.call(n):b}return n}function jx(n,s,l){return n==null?n:js(n,s,l)}function Jx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:js(n,s,l,h)}var bh=Of(rn),Th=Of(Rn);function Qx(n,s,l){var h=at(n),S=h||Ki(n)||is(n);if(s=We(s,4),l==null){var b=n&&n.constructor;S?l=h?new b:[]:Vt(n)?l=Ri(b)?Qr(Io(n)):{}:l={}}return(S?kn:fi)(n,function(P,F,k){return s(l,P,F,k)}),l}function eS(n,s){return n==null?!0:Dl(n,s)}function tS(n,s,l){return n==null?n:xf(n,s,Ol(l))}function nS(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:xf(n,s,Ol(l),h)}function rs(n){return n==null?[]:pl(n,rn(n))}function iS(n){return n==null?[]:pl(n,Rn(n))}function rS(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=$n(l),l=l===l?l:0),s!==t&&(s=$n(s),s=s===s?s:0),vr($n(n),s,l)}function sS(n,s,l){return s=Ci(s),l===t?(l=s,s=0):l=Ci(l),n=$n(n),f_(n,s,l)}function oS(n,s,l){if(l&&typeof l!="boolean"&&_n(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ci(n),s===t?(s=n,n=0):s=Ci(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=$u();return fn(n+S*(s-n+Bm("1e-"+((S+"").length-1))),s)}return Ll(n,s)}var aS=ts(function(n,s,l){return s=s.toLowerCase(),n+(l?Ah(s):s)});function Ah(n){return ic(wt(n).toLowerCase())}function wh(n){return n=wt(n),n&&n.replace(Le,jm).replace(Rm,"")}function lS(n,s,l){n=wt(n),s=Un(s);var h=n.length;l=l===t?h:vr(ht(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function cS(n){return n=wt(n),n&&ge.test(n)?n.replace(xe,Jm):n}function uS(n){return n=wt(n),n&&nn.test(n)?n.replace(Ct,"\\$&"):n}var fS=ts(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),hS=ts(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),dS=Lf("toLowerCase");function pS(n,s,l){n=wt(n),s=ht(s);var h=s?$r(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return Ko(Oo(S),l)+n+Ko(No(S),l)}function mS(n,s,l){n=wt(n),s=ht(s);var h=s?$r(n):0;return s&&h<s?n+Ko(s-h,l):n}function gS(n,s,l){n=wt(n),s=ht(s);var h=s?$r(n):0;return s&&h<s?Ko(s-h,l)+n:n}function _S(n,s,l){return l||s==null?s=0:s&&(s=+s),bg(wt(n).replace(jn,""),s||0)}function vS(n,s,l){return(l?_n(n,s,l):s===t)?s=1:s=ht(s),Pl(wt(n),s)}function xS(){var n=arguments,s=wt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var SS=ts(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function MS(n,s,l){return l&&typeof l!="number"&&_n(n,s,l)&&(s=l=t),l=l===t?ve:l>>>0,l?(n=wt(n),n&&(typeof s=="string"||s!=null&&!ec(s))&&(s=Un(s),!s&&Yr(n))?$i(Qn(n),0,l):n.split(s,l)):[]}var ES=ts(function(n,s,l){return n+(l?" ":"")+ic(s)});function yS(n,s,l){return n=wt(n),l=l==null?0:vr(ht(l),0,n.length),s=Un(s),n.slice(l,l+s.length)==s}function bS(n,s,l){var h=E.templateSettings;l&&_n(n,s,l)&&(s=t),n=wt(n),s=aa({},s,h,Ff);var S=aa({},s.imports,h.imports,Ff),b=rn(S),P=pl(S,b),F,k,re=0,ae=s.interpolate||Be,he="__p += '",Ae=gl((s.escape||Be).source+"|"+ae.source+"|"+(ae===yt?tl:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),Ge="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Dm+"]")+`
`;n.replace(Ae,function($e,vt,St,On,vn,Fn){return St||(St=On),he+=n.slice(re,Fn).replace(Xe,Qm),vt&&(F=!0,he+=`' +
__e(`+vt+`) +
'`),vn&&(k=!0,he+=`';
`+vn+`;
__p += '`),St&&(he+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),re=Fn+$e.length,$e}),he+=`';
`;var Ye=Lt.call(s,"variable")&&s.variable;if(!Ye)he=`with (obj) {
`+he+`
}
`;else if(So.test(Ye))throw new rt(c);he=(k?he.replace(L,""):he).replace(le,"$1").replace(Ne,"$1;"),he="function("+(Ye||"obj")+`) {
`+(Ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(k?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var pt=Ch(function(){return At(b,Ge+"return "+he).apply(t,P)});if(pt.source=he,Ql(pt))throw pt;return pt}function TS(n){return wt(n).toLowerCase()}function AS(n){return wt(n).toUpperCase()}function wS(n,s,l){if(n=wt(n),n&&(l||s===t))return Fu(n);if(!n||!(s=Un(s)))return n;var h=Qn(n),S=Qn(s),b=Bu(h,S),P=Gu(h,S)+1;return $i(h,b,P).join("")}function RS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.slice(0,Hu(n)+1);if(!n||!(s=Un(s)))return n;var h=Qn(n),S=Gu(h,Qn(s))+1;return $i(h,0,S).join("")}function CS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.replace(jn,"");if(!n||!(s=Un(s)))return n;var h=Qn(n),S=Bu(h,Qn(s));return $i(h,S).join("")}function LS(n,s){var l=T,h=U;if(Vt(s)){var S="separator"in s?s.separator:S;l="length"in s?ht(s.length):l,h="omission"in s?Un(s.omission):h}n=wt(n);var b=n.length;if(Yr(n)){var P=Qn(n);b=P.length}if(l>=b)return n;var F=l-$r(h);if(F<1)return h;var k=P?$i(P,0,F).join(""):n.slice(0,F);if(S===t)return k+h;if(P&&(F+=k.length-F),ec(S)){if(n.slice(F).search(S)){var re,ae=k;for(S.global||(S=gl(S.source,wt(Mo.exec(S))+"g")),S.lastIndex=0;re=S.exec(ae);)var he=re.index;k=k.slice(0,he===t?F:he)}}else if(n.indexOf(Un(S),F)!=F){var Ae=k.lastIndexOf(S);Ae>-1&&(k=k.slice(0,Ae))}return k+h}function PS(n){return n=wt(n),n&&q.test(n)?n.replace(O,og):n}var IS=ts(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),ic=Lf("toUpperCase");function Rh(n,s,l){return n=wt(n),s=l?t:s,s===t?tg(n)?cg(n):qm(n):n.match(s)||[]}var Ch=_t(function(n,s){try{return In(n,t,s)}catch(l){return Ql(l)?l:new rt(l)}}),DS=Ai(function(n,s){return kn(s,function(l){l=di(l),bi(n,l,jl(n[l],n))}),n});function US(n){var s=n==null?0:n.length,l=We();return n=s?kt(n,function(h){if(typeof h[1]!="function")throw new Vn(u);return[l(h[0]),h[1]]}):[],_t(function(h){for(var S=-1;++S<s;){var b=n[S];if(In(b[0],this,h))return In(b[1],this,h)}})}function NS(n){return o_(Xn(n,_))}function rc(n){return function(){return n}}function OS(n,s){return n==null||n!==n?s:n}var FS=If(),BS=If(!0);function Cn(n){return n}function sc(n){return lf(typeof n=="function"?n:Xn(n,_))}function GS(n){return uf(Xn(n,_))}function zS(n,s){return ff(n,Xn(s,_))}var HS=_t(function(n,s){return function(l){return Ks(l,n,s)}}),kS=_t(function(n,s){return function(l){return Ks(n,l,s)}});function oc(n,s,l){var h=rn(s),S=ko(s,h);l==null&&!(Vt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=ko(s,rn(s)));var b=!(Vt(l)&&"chain"in l)||!!l.chain,P=Ri(n);return kn(S,function(F){var k=s[F];n[F]=k,P&&(n.prototype[F]=function(){var re=this.__chain__;if(b||re){var ae=n(this.__wrapped__),he=ae.__actions__=An(this.__actions__);return he.push({func:k,args:arguments,thisArg:n}),ae.__chain__=re,ae}return k.apply(n,ki([this.value()],arguments))})}),n}function VS(){return on._===this&&(on._=mg),this}function ac(){}function WS(n){return n=ht(n),_t(function(s){return hf(s,n)})}var XS=Bl(kt),qS=Bl(Iu),YS=Bl(cl);function Lh(n){return Xl(n)?ul(di(n)):y_(n)}function $S(n){return function(s){return n==null?t:xr(n,s)}}var KS=Uf(),ZS=Uf(!0);function lc(){return[]}function cc(){return!1}function jS(){return{}}function JS(){return""}function QS(){return!0}function eM(n,s){if(n=ht(n),n<1||n>te)return[];var l=ve,h=fn(n,ve);s=We(s),n-=ve;for(var S=dl(h,s);++l<n;)s(l);return S}function tM(n){return at(n)?kt(n,di):Nn(n)?[n]:An(Zf(wt(n)))}function nM(n){var s=++dg;return wt(n)+s}var iM=$o(function(n,s){return n+s},0),rM=Gl("ceil"),sM=$o(function(n,s){return n/s},1),oM=Gl("floor");function aM(n){return n&&n.length?Ho(n,Cn,bl):t}function lM(n,s){return n&&n.length?Ho(n,We(s,2),bl):t}function cM(n){return Nu(n,Cn)}function uM(n,s){return Nu(n,We(s,2))}function fM(n){return n&&n.length?Ho(n,Cn,Rl):t}function hM(n,s){return n&&n.length?Ho(n,We(s,2),Rl):t}var dM=$o(function(n,s){return n*s},1),pM=Gl("round"),mM=$o(function(n,s){return n-s},0);function gM(n){return n&&n.length?hl(n,Cn):0}function _M(n,s){return n&&n.length?hl(n,We(s,2)):0}return E.after=G0,E.ary=ah,E.assign=Ax,E.assignIn=Mh,E.assignInWith=aa,E.assignWith=wx,E.at=Rx,E.before=lh,E.bind=jl,E.bindAll=DS,E.bindKey=ch,E.castArray=j0,E.chain=rh,E.chunk=ov,E.compact=av,E.concat=lv,E.cond=US,E.conforms=NS,E.constant=rc,E.countBy=g0,E.create=Cx,E.curry=uh,E.curryRight=fh,E.debounce=hh,E.defaults=Lx,E.defaultsDeep=Px,E.defer=z0,E.delay=H0,E.difference=cv,E.differenceBy=uv,E.differenceWith=fv,E.drop=hv,E.dropRight=dv,E.dropRightWhile=pv,E.dropWhile=mv,E.fill=gv,E.filter=v0,E.flatMap=M0,E.flatMapDeep=E0,E.flatMapDepth=y0,E.flatten=eh,E.flattenDeep=_v,E.flattenDepth=vv,E.flip=k0,E.flow=FS,E.flowRight=BS,E.fromPairs=xv,E.functions=Bx,E.functionsIn=Gx,E.groupBy=b0,E.initial=Mv,E.intersection=Ev,E.intersectionBy=yv,E.intersectionWith=bv,E.invert=Hx,E.invertBy=kx,E.invokeMap=A0,E.iteratee=sc,E.keyBy=w0,E.keys=rn,E.keysIn=Rn,E.map=ta,E.mapKeys=Wx,E.mapValues=Xx,E.matches=GS,E.matchesProperty=zS,E.memoize=ia,E.merge=qx,E.mergeWith=Eh,E.method=HS,E.methodOf=kS,E.mixin=oc,E.negate=ra,E.nthArg=WS,E.omit=Yx,E.omitBy=$x,E.once=V0,E.orderBy=R0,E.over=XS,E.overArgs=W0,E.overEvery=qS,E.overSome=YS,E.partial=Jl,E.partialRight=dh,E.partition=C0,E.pick=Kx,E.pickBy=yh,E.property=Lh,E.propertyOf=$S,E.pull=Rv,E.pullAll=nh,E.pullAllBy=Cv,E.pullAllWith=Lv,E.pullAt=Pv,E.range=KS,E.rangeRight=ZS,E.rearg=X0,E.reject=I0,E.remove=Iv,E.rest=q0,E.reverse=Kl,E.sampleSize=U0,E.set=jx,E.setWith=Jx,E.shuffle=N0,E.slice=Dv,E.sortBy=B0,E.sortedUniq=zv,E.sortedUniqBy=Hv,E.split=MS,E.spread=Y0,E.tail=kv,E.take=Vv,E.takeRight=Wv,E.takeRightWhile=Xv,E.takeWhile=qv,E.tap=a0,E.throttle=$0,E.thru=ea,E.toArray=vh,E.toPairs=bh,E.toPairsIn=Th,E.toPath=tM,E.toPlainObject=Sh,E.transform=Qx,E.unary=K0,E.union=Yv,E.unionBy=$v,E.unionWith=Kv,E.uniq=Zv,E.uniqBy=jv,E.uniqWith=Jv,E.unset=eS,E.unzip=Zl,E.unzipWith=ih,E.update=tS,E.updateWith=nS,E.values=rs,E.valuesIn=iS,E.without=Qv,E.words=Rh,E.wrap=Z0,E.xor=e0,E.xorBy=t0,E.xorWith=n0,E.zip=i0,E.zipObject=r0,E.zipObjectDeep=s0,E.zipWith=o0,E.entries=bh,E.entriesIn=Th,E.extend=Mh,E.extendWith=aa,oc(E,E),E.add=iM,E.attempt=Ch,E.camelCase=aS,E.capitalize=Ah,E.ceil=rM,E.clamp=rS,E.clone=J0,E.cloneDeep=ex,E.cloneDeepWith=tx,E.cloneWith=Q0,E.conformsTo=nx,E.deburr=wh,E.defaultTo=OS,E.divide=sM,E.endsWith=lS,E.eq=ti,E.escape=cS,E.escapeRegExp=uS,E.every=_0,E.find=x0,E.findIndex=Jf,E.findKey=Ix,E.findLast=S0,E.findLastIndex=Qf,E.findLastKey=Dx,E.floor=oM,E.forEach=sh,E.forEachRight=oh,E.forIn=Ux,E.forInRight=Nx,E.forOwn=Ox,E.forOwnRight=Fx,E.get=tc,E.gt=ix,E.gte=rx,E.has=zx,E.hasIn=nc,E.head=th,E.identity=Cn,E.includes=T0,E.indexOf=Sv,E.inRange=sS,E.invoke=Vx,E.isArguments=Er,E.isArray=at,E.isArrayBuffer=sx,E.isArrayLike=wn,E.isArrayLikeObject=$t,E.isBoolean=ox,E.isBuffer=Ki,E.isDate=ax,E.isElement=lx,E.isEmpty=cx,E.isEqual=ux,E.isEqualWith=fx,E.isError=Ql,E.isFinite=hx,E.isFunction=Ri,E.isInteger=ph,E.isLength=sa,E.isMap=mh,E.isMatch=dx,E.isMatchWith=px,E.isNaN=mx,E.isNative=gx,E.isNil=vx,E.isNull=_x,E.isNumber=gh,E.isObject=Vt,E.isObjectLike=Xt,E.isPlainObject=to,E.isRegExp=ec,E.isSafeInteger=xx,E.isSet=_h,E.isString=oa,E.isSymbol=Nn,E.isTypedArray=is,E.isUndefined=Sx,E.isWeakMap=Mx,E.isWeakSet=Ex,E.join=Tv,E.kebabCase=fS,E.last=Yn,E.lastIndexOf=Av,E.lowerCase=hS,E.lowerFirst=dS,E.lt=yx,E.lte=bx,E.max=aM,E.maxBy=lM,E.mean=cM,E.meanBy=uM,E.min=fM,E.minBy=hM,E.stubArray=lc,E.stubFalse=cc,E.stubObject=jS,E.stubString=JS,E.stubTrue=QS,E.multiply=dM,E.nth=wv,E.noConflict=VS,E.noop=ac,E.now=na,E.pad=pS,E.padEnd=mS,E.padStart=gS,E.parseInt=_S,E.random=oS,E.reduce=L0,E.reduceRight=P0,E.repeat=vS,E.replace=xS,E.result=Zx,E.round=pM,E.runInContext=H,E.sample=D0,E.size=O0,E.snakeCase=SS,E.some=F0,E.sortedIndex=Uv,E.sortedIndexBy=Nv,E.sortedIndexOf=Ov,E.sortedLastIndex=Fv,E.sortedLastIndexBy=Bv,E.sortedLastIndexOf=Gv,E.startCase=ES,E.startsWith=yS,E.subtract=mM,E.sum=gM,E.sumBy=_M,E.template=bS,E.times=eM,E.toFinite=Ci,E.toInteger=ht,E.toLength=xh,E.toLower=TS,E.toNumber=$n,E.toSafeInteger=Tx,E.toString=wt,E.toUpper=AS,E.trim=wS,E.trimEnd=RS,E.trimStart=CS,E.truncate=LS,E.unescape=PS,E.uniqueId=nM,E.upperCase=IS,E.upperFirst=ic,E.each=sh,E.eachRight=oh,E.first=th,oc(E,function(){var n={};return fi(E,function(s,l){Lt.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),kn(["drop","take"],function(n,s){xt.prototype[n]=function(l){l=l===t?1:Qt(ht(l),0);var h=this.__filtered__&&!s?new xt(this):this.clone();return h.__filtered__?h.__takeCount__=fn(l,h.__takeCount__):h.__views__.push({size:fn(l,ve),type:n+(h.__dir__<0?"Right":"")}),h},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),kn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==z||l==ne;xt.prototype[n]=function(S){var b=this.clone();return b.__iteratees__.push({iteratee:We(S,3),type:l}),b.__filtered__=b.__filtered__||h,b}}),kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Cn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=_t(function(n,s){return typeof n=="function"?new xt(this):this.map(function(l){return Ks(l,n,s)})}),xt.prototype.reject=function(n){return this.filter(ra(We(n)))},xt.prototype.slice=function(n,s){n=ht(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ht(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(ve)},fi(xt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=E[h?"take"+(s=="last"?"Right":""):s],b=h||/^find/.test(s);S&&(E.prototype[s]=function(){var P=this.__wrapped__,F=h?[1]:arguments,k=P instanceof xt,re=F[0],ae=k||at(P),he=function(vt){var St=S.apply(E,ki([vt],F));return h&&Ae?St[0]:St};ae&&l&&typeof re=="function"&&re.length!=1&&(k=ae=!1);var Ae=this.__chain__,Ge=!!this.__actions__.length,Ye=b&&!Ae,pt=k&&!Ge;if(!b&&ae){P=pt?P:new xt(this);var $e=n.apply(P,F);return $e.__actions__.push({func:ea,args:[he],thisArg:t}),new Wn($e,Ae)}return Ye&&pt?n.apply(this,F):($e=this.thru(he),Ye?h?$e.value()[0]:$e.value():$e)})}),kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Ao[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var b=this.value();return s.apply(at(b)?b:[],S)}return this[l](function(P){return s.apply(at(P)?P:[],S)})}}),fi(xt.prototype,function(n,s){var l=E[s];if(l){var h=l.name+"";Lt.call(Jr,h)||(Jr[h]=[]),Jr[h].push({name:s,func:l})}}),Jr[Yo(t,m).name]=[{name:"wrapper",func:t}],xt.prototype.clone=Pg,xt.prototype.reverse=Ig,xt.prototype.value=Dg,E.prototype.at=l0,E.prototype.chain=c0,E.prototype.commit=u0,E.prototype.next=f0,E.prototype.plant=d0,E.prototype.reverse=p0,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=m0,E.prototype.first=E.prototype.head,ks&&(E.prototype[ks]=h0),E},Kr=ug();pr?((pr.exports=Kr)._=Kr,sl._=Kr):on._=Kr}).call(co)})(Xa,Xa.exports);var Xc=Xa.exports;const NR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},OR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),FR(t)})};function FR(r){const e=document.getElementById("cellNotFound");let t=Pt.value.listPalette;r?(t=Pt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),qa(t)):qa(Pt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function qa(r){let e={};const t=document.getElementById("cellCheckboxes");if(console.log(t),!t){console.error('Element with ID "cellCheckboxes" not found in the DOM.');return}t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,Ke.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,p,_,x=((y,A)=>{for(const g in y)if(y[g].includes(A))return g;return!1})(Pt.value.groups,o);if(x){const y=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(y),p=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,p=document.createElement("label"),p.htmlFor=x,p.setAttribute("for",y),p.style.color="white",p.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=y,p.appendChild(d),p.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(p),f.appendChild(_),t.appendChild(f));const A=document.createElement("li");A.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",y=>{console.log(y),BR(o,y.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=Ke.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),Rs(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function BR(r,e){let t=Ke.value.selectedCelltypes.map(i=>i);e?(t.push(r),Rs(t)):(t=t.filter(i=>i!==r),Rs(t))}const GR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{Rs([]),qa(Pt.value.listPalette),cellTextbox.value=""})},zR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",Ke.value.selectedCelltypes.length!==0?Ke.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Pt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};function HR(){const r=Ke.value.selectedCelltypes,e=document.getElementById("cellCheckboxes");let t=[];for(const i in e.children){const o=e.children[i];o.nodeName==="LABEL"&&t.push(o.children[0])}t.forEach(i=>{r.includes(i.value)?i.checked||(i.checked=!0):i.checked&&(i.checked=!1)})}async function Qa(r,e){const t=await fetch(`https://cb-backend.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=roy&csv_filename=${e}_matrix.csv`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===void 0||i.gene_values==null)return"[]";let o=i.gene_values.split(",").filter(c=>c!=="");const u=["clusters","clusters_pal","genes","hierarchical_clusters"].includes(r);return console.log(r),console.log(typeof r),console.log(u),u==!0?(console.log(o),o.shift(),o):(r=="clusters"&&console.log("sini bang"),o.shift(),console.log("float"),o.map(f=>parseFloat(f)))}function _p(r){return Qa(r,Pt.value.prefix)}function kR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function vp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:kR(r,e)}function xp(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Sp(r,e){return r.map(t=>Math.min(t/e,1))}function vm(r,e,t){const i=document.createElement("p");return i.innerText="x",i.className="delete",i.setAttribute("data-badge_value",e),i.onclick=()=>{if(r==="celltype")Op(e);else if(r==="gene"){const o=[...Ke.value.selectedGenes];o.splice(o.indexOf(e),1),Cs(o)}t.remove()},t.onmouseover=()=>{i.style.display="block"},t.onmouseleave=()=>{i.style.display="none"},i}function Mp(r,e=""){const t=document.querySelector(".showing-badge");if(!t){console.error("Badge container not found");return}t.querySelectorAll(".showing-label").forEach(a=>a.style.display="none");const o=t.querySelector(`.showing-${r}`);o?(o.style.display="inline-block",r==="gene"&&e.forEach((a,u)=>{const c=document.createElement("span");c.className="showing-label gene-badge",c.innerText=a,c.title=a,c.style.backgroundColor=u%2===0?"rgb(0, 200, 0)":"rgb(255, 0, 255)";const f=vm(r,a,c);c.appendChild(f),t.appendChild(c)})):console.warn(`Unknown label: ${r}`)}function VR(){function r(u){const c=document.createElement("span");c.className="celltype-label",c.title=u,c.style.backgroundColor=Pt.value.pallete[u];const f=document.createElement("p");return f.className="celltype-text",f.innerText=u,c.appendChild(f),c.appendChild(vm("celltype",u,c)),c}const e=document.querySelector(".celltype-badges"),t=Ke.value.selectedCelltypes,i=document.querySelectorAll(".celltype-label"),o=[].map.call(i,u=>u.title);t.forEach(u=>{if(!o.includes(u)){const c=r(u);e.appendChild(c)}}),Array.from(e.childNodes).forEach(u=>{t.includes(u.title)||u.remove()})}function Ep(){const r=document.querySelector(".celltype-badges");Ke.value.selectedGenes,Ke.value.selectedAtacs;function e(t){const i=["colorbar-wrapper","colorbar-wrapper2","colorbar-wrapper3"];let o=0;i.forEach(c=>{const f=document.getElementById(c);if(f){const p=f.getBoundingClientRect().width;o=Math.max(o,p)}});const a=t?o+5:0,u=t?25:30;r.style.transform=`translateX(-${a}px)`,r.style.width=`${u}vw`}e(r)}const WR=36.75;function XR(r,e){const t=document.getElementById("top-label"),i=document.getElementById("bottom-label");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[0].split("_")[1]=="imputed"}catch{a=!1}let u=a?e*WR:e,c;u<1?c=u.toExponential(1):c=Math.round(u),t&&i?(t.textContent=c,i.textContent=r):console.error("Labels not found in the DOM.")}function qR(r,e){const t=document.getElementById("top-label-green"),i=document.getElementById("bottom-label-green");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[1].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*36.75:e,f;c<1?f=c.toExponential(1):f=Math.round(c),t&&i?(t.textContent=f,i.textContent=r):console.error("Labels not found in the DOM.")}function YR(r,e){const t=document.getElementById("top-label-magenta"),i=document.getElementById("bottom-label-magenta");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[0].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*36.75:e,f;c<1?f=c.toExponential(1):f=Math.round(c),t&&i?(t.textContent=f,i.textContent=r):console.error("Labels not found in the DOM.")}function $R(){const r=document.getElementById("colorbar-wrapper");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function KR(){const r=document.getElementById("colorbar-wrapper2");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function ZR(){const r=document.getElementById("colorbar-wrapper3");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function yp(){const r=document.getElementById("colorbar-wrapper");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function bp(){const r=document.getElementById("colorbar-wrapper2");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function Tp(){const r=document.getElementById("colorbar-wrapper3");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function xm(){const r=document.createElement("div");r.id="overlay",r.className="overlay",r.setAttribute("display_type","maximize");const e=document.createElement("div");e.className="top-controls";const t=document.createElement("img");t.className="min_max_button",t.id="maximize",t.src="/overlay_controls/minimize.png",t.onclick=a=>{const u=a.target,c=u.id;let f="";c==="maximize"?f="minimize":f="maximize",u.id=f,u.src=`/overlay_controls/${c}.png`,document.querySelectorAll(".circle").forEach(p=>{f=="minimize"?p.style.display="none":p.style.display="block"}),c==="maximize"?r.style.transform="translateX(90%)":r.style.transform="translateX(0%)",r.setAttribute("display_type",f)},e.appendChild(t);const i=document.createElement("button");i.className="overlayClearButton btn btn-outline-danger m-1",i.id="clearButton",i.textContent="Clear",i.onclick=()=>{Rs([])},e.appendChild(i),r.appendChild(e);const o=document.createElement("div");return o.className="cluster-text",o.textContent="Hover the UMAP",e.appendChild(o),r}function jR(r){document.querySelectorAll(".circle").forEach(t=>{const i=parseInt(t.dataset.index,10),o=r[i];o&&(typeof o=="string"?t.style.backgroundColor=o:typeof o=="object"&&o.r!==void 0&&o.g!==void 0&&o.b!==void 0&&(t.style.backgroundColor=`rgba(${o.r*255}, ${o.g*255}, ${o.b*255}, 1)`))})}function JR(r,e){const t=document.getElementById("overlay"),i=document.querySelector(".cluster-text"),o=Pt.value.pallete;if(!t||!i){console.error("Overlay or text container element not found. Make sure the elements are present in the DOM.");return}r.forEach((a,u)=>{const c=document.createElement("div");c.className="circle";const f=(a.X_umap0_norm+.9)/2*100,d=(1-a.X_umap1_norm)/2*100+0;c.style.left=`${f}%`,c.style.top=`${d}%`,c.dataset.cluster=a.clusters,c.dataset.index=u;const p=e[u];p&&(c.style.backgroundColor=`rgba(${p.r*255}, ${p.g*255}, ${p.b*255}, 1)`),c.style.width="2.5px",c.style.height="2.5px",c.addEventListener("mouseenter",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(v=>v.classList.add("hovered")),i.style.display="block",i.innerText=`${a.clusters}`,i.style.backgroundColor=o[a.clusters]}),c.addEventListener("mouseleave",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(v=>v.classList.remove("hovered")),i.style.backgroundColor=""}),c.addEventListener("click",()=>{Op(a.clusters),i.innerText=`${a.clusters}`,i.style.backgroundColor=o[a.clusters]}),t.appendChild(c)})}document.body.appendChild(xm());const QR=new URL(window.location),xn=new URLSearchParams(QR.search);let Ap=0;class eC{constructor(e){Ih(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),ho.value.items,this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=PR.value.scene,this.camera=new Zn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new _m,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=En.value.cameraPositionZ,this.camera.position.y=En.value.cameraPositionY,this.camera.position.x=En.value.cameraPositionX,this.controls=new UR(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:Fi.PAN,MIDDLE:Fi.DOLLY,RIGHT:Fi.ROTATE},this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){ho.pipe(Zi(e=>e.items),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),Pt.pipe(Zi(e=>e.prefix),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=Pt.value.prefix}),Wa.pipe(Zi(e=>e.isLoading),ji((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),NR(Wa.value.isLoading)}),Ke.pipe(Zi(e=>e.selectedCelltypes),ji((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),pi(!0),Ke.value.selectedCelltypes?await this.updateInstancedMesh(Ke.value.selectedCelltypes):await this.updateInstancedMesh([]),pi(!1),zR(),Ke.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(Ke.value.selectedCelltypes));xn.has("celltype")?xn.set("celltype",t):xn.append("celltype",t)}else xn.delete("celltype");Ua(xn)}),Ke.pipe(Zi(e=>e.selectedGenes),ji((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),Ke.value.mode===2&&Bp(),pi(!0),Ke.value.selectedGenes?await this.updateInstancedMesh(Ke.value.selectedGenes):await this.updateInstancedMesh([]),pi(!1),Ep(),ZM(),Ke.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(Ke.value.selectedGenes));xn.append("gene",t),xn.has("gene")?xn.set("gene",t):xn.append("gene",t)}else xn.delete("gene");Ua(xn)}),Ke.pipe(Zi(e=>e.mode),ji()).subscribe(e=>{console.log("Selected genes changed:",e),xn.has("mode")?xn.set("mode",e):xn.append("mode",e),Ua(xn)}),En.pipe(Zi(e=>e.dotSize),ji()).subscribe(async e=>{console.log("Dot Size Changed:",e),pi(!0),En.value.dotSize?await this.updateInstancedMesh(En.value.dotSize):await this.updateInstancedMesh([]),pi(!1)}),En.pipe(Zi(e=>e.genePercentile),ji()).subscribe(async e=>{console.log("Gene Percentile",e),pi(!0),En.value.genePercentile?await this.updateInstancedMesh(En.value.genePercentile):await this.updateInstancedMesh([]),pi(!1)})}async updateInstancedMesh(e=[]){let t=[];this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let i=Pt.value.pallete,o=ho.value.items;const a=new pu(.1,32,32),u=new hu,c=o.length;console.log("Count",c),this.instancedMesh=new hp(a,u,c),this.instancedMeshUmap=new hp(a,u,c);const f=new bn,d=new bn;let p,_,v,x=200,y=2,A=Ke.value.selectedCelltypes,g=Ke.value.selectedGenes,m=En.value.dotSize,N=Math.floor(m/2),R=En.value.genePercentile,D=1;if(g.length>0)try{let B=await _p(g[0]);if(g.length==2){let G=await _p(g[1]),I=xp(G,R);v=Sp(G,I),YR(0,I)}D=xp(B,R),_=Sp(B,D)}catch(B){console.error("Error fetching data:",B)}XR(0,D),qR(0,D);for(let B=0;B<c;B++){if(g.length>0)if(A.length===0||A.includes(o[B].clusters)){let I,K;v?(I=vp(_[B],v[B]),K=(_[B]+v[B])/2*m+m/2):(I=vp(_[B]),K=_[B]*m+m/2),p=new bt(I),f.scale.set(K,K,K),d.scale.set(K*y,K*y,K*y)}else p=new bt("#5e5e5e"),f.scale.set(1,1,1),d.scale.set(1*y,1*y,1*y);else A.includes(o[B].clusters)||A.length==0?(p=new bt(i[o[B].clusters]),f.scale.set(m,m,m),d.scale.set(m*y,m*y,m*y)):(p=new bt("#5e5e5e"),f.scale.set(N,N,N),d.scale.set(N*y,N*y,N*y));f.position.set(o[B].X_spatial0_norm*x,o[B].X_spatial1_norm*x,0*x),f.updateMatrix(),this.instancedMesh.setMatrixAt(B,f.matrix),this.instancedMesh.setColorAt(B,p),d.position.set(o[B].X_umap0_norm*100+1e4-25,o[B].X_umap1_norm*100,0),d.updateMatrix(),this.instancedMeshUmap.setMatrixAt(B,d.matrix),this.instancedMeshUmap.setColorAt(B,p),t.push(p)}Ap==0?(Ap+=1,JR(o,t)):jR(t),this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap),g.length>0?(Mp("gene",g),g.length>1?(KR(),ZR(),yp()):($R(),bp(),Tp())):(Mp("celltype"),yp(),bp(),Tp()),VR(),HR(),Ep()}}const mu=Pt.value.prefix;async function tC(){const r=Pt.value.palleteColumn;try{const e=await Qa(r,mu);console.log(e);let t={};e.forEach(i=>{console.log(i);let[o,a]=i.split(":");o=o.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[o]=a}),console.log(t),NM(t)}catch(e){console.error("Failed to load items:",e)}}async function nC(){try{const r=await Qa("genes",mu);OM(r)}catch(r){console.error("Failed to load items:",r)}}async function iC(){const r=Pt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>Qa(o,mu)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}CR(t)}catch(i){console.error("Error combining data:",i)}}function rC(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}document.addEventListener("DOMContentLoaded",async()=>{xm();const r=rC();document.body.appendChild(r),pi(!0);try{await tC(),await iC(),await nC();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(u=>Object.keys(Pt.value.pallete).includes(u));Rs(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(u=>Pt.value.genes.includes(u));Cs(a)}qa(Pt.value.listPalette),GR(),OR(),Oa(Pt.value.genes),KM(),qM();const i=document.body;new eC(i)}catch(e){console.error("Failed to load data:",e)}finally{pi(!1)}});
