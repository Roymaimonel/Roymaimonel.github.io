var xM=Object.defineProperty;var SM=(r,e,t)=>e in r?xM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Gh=(r,e,t)=>SM(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var jc=function(r,e){return jc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},jc(r,e)};function Is(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");jc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Jc(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qc(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function eu(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function Si(r){return typeof r=="function"}function Lp(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var mc=Lp(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function tu(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var ja=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=Jc(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(b){e={error:b}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(Si(p))try{p()}catch(b){a=b instanceof mc?b.errors:[b]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=Jc(_),x=v.next();!x.done;x=v.next()){var M=x.value;try{Hh(M)}catch(b){a=a??[],b instanceof mc?a=eu(eu([],Qc(a)),Qc(b.errors)):a.push(b)}}}catch(b){i={error:b}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new mc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Hh(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&tu(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&tu(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),Dp=ja.EMPTY;function Ip(r){return r instanceof ja||r&&"closed"in r&&Si(r.remove)&&Si(r.add)&&Si(r.unsubscribe)}function Hh(r){Si(r)?r():r.unsubscribe()}var MM={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},EM={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,eu([r,e],Qc(t)))},clearTimeout:function(r){return clearTimeout(r)},delegate:void 0};function yM(r){EM.setTimeout(function(){throw r})}function Vh(){}function Oa(r){r()}var pu=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Ip(t)&&t.add(i)):i.destination=AM,i}return e.create=function(t,i,o){return new nu(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(ja),bM=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){oa(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){oa(i)}else oa(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){oa(t)}},r}(),nu=function(r){Is(e,r);function e(t,i,o){var a=r.call(this)||this,u;return Si(t)||!t?u={next:t??void 0,error:i??void 0,complete:o??void 0}:u=t,a.destination=new bM(u),a}return e}(pu);function oa(r){yM(r)}function TM(r){throw r}var AM={closed:!0,next:Vh,error:TM,complete:Vh},wM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Up(r){return r}function RM(r){return r.length===0?Up:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var kh=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=PM(e)?e:new nu(e,t,i);return Oa(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=Wh(t),new t(function(o,a){var u=new nu({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[wM]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return RM(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=Wh(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function Wh(r){var e;return(e=r??MM.Promise)!==null&&e!==void 0?e:Promise}function CM(r){return r&&Si(r.next)&&Si(r.error)&&Si(r.complete)}function PM(r){return r&&r instanceof pu||CM(r)&&Ip(r)}function LM(r){return Si(r==null?void 0:r.lift)}function Np(r){return function(e){if(LM(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Op(r,e,t,i,o){return new DM(r,e,t,i,o)}var DM=function(r){Is(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(pu),IM=Lp(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Fp=function(r){Is(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Xh(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new IM},e.prototype.next=function(t){var i=this;Oa(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=Jc(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Oa(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Oa(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?Dp:(this.currentObservers=null,c.push(t),new ja(function(){i.currentObservers=null,tu(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new kh;return t.source=this,t},e.create=function(t,i){return new Xh(t,i)},e}(kh),Xh=function(r){Is(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:Dp},e}(Fp),Us=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(Fp);function pi(r,e){return Np(function(t,i){var o=0;t.subscribe(Op(i,function(a){i.next(r.call(e,a,o++))}))})}function mi(r,e){return e===void 0&&(e=Up),r=r??UM,Np(function(t,i){var o,a=!0;t.subscribe(Op(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function UM(r,e){return r===e}const NM=new URL(window.location),qh=new URLSearchParams(NM.search),OM={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","clusters"],prefixMapping:{"Postnatal 5 Murine Sagittal Section":"p5","8 week Murine Coronal Section":"8week","4 week Murine Sagittal Section":"4weeks","1 year murine PTB1-ASO Sagittal Section":"1year_set2","1 year murine Control-ASO Sagittal Section":"1year_set3","1 year murine Non-injected Sagittal Section":"1year_set4","1 year murine PTB-ASO Coronal Section":"cbm5_ptb","1 year murine Saline Coronal Section":"cbm5_saline","Human Prenatal SVZ Gestation week 23":"fetus_human","Human 68 years old SVZ":"aged_human"},get prefixOptions(){return Object.keys(this.prefixMapping)},prefix:qh.has("prefix")?qh.get("prefix"):"8week",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},Rt=new Us(OM);function FM(r){const e=Rt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};Rt.next(i)}function BM(r){const t={...Rt.getValue(),genes:r};Rt.next(t)}const Fa=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)};function zM(){const r=Rt.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<r.length;t++){const i=document.createElement("p");i.innerHTML=`<a class="dropdown-item">${r[t]}</a>`,e.appendChild(i)}}function GM(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=e.item(t).innerText,o=Rt.value.prefixMapping[i],a=new URLSearchParams("");a.append("prefix",o),Fa(a),o!==Rt.value.prefix&&(r.innerHTML=i,window.location.reload())})}const HM={dotSize:5,minDotSize:.1,maxDotSize:10,offsetUMAP:1e4,genePercentile:.99,minGeneValue:0,maxGeneValue:0,currentMinGeneValue:0,currentGeneValue:0,currentMaxGeneValue:0,cameraPositionZ:250,cameraPositionY:0,cameraPositionX:0},wt=new Us(HM);function VM(r){const t={...wt.getValue(),dotSize:r};wt.next(t)}function kM(r,e,t){const i=wt.getValue();console.log("Current gene value",e);const o={...i,minGeneValue:r,maxGeneValue:t,currentMinGeneValue:r,currentGeneValue:e,currentMaxGeneValue:t};wt.next(o)}function WM(r){const t={...wt.getValue(),currentGeneValue:r};wt.next(t)}const XM=new URL(window.location),Yh=new URLSearchParams(XM.search),qM={selectedCelltypes:[],mode:Yh.has("mode")?Number(Yh.get("mode")):1,selectedSingleGene:"",selectedGenes:[],showing:"celltype"};function YM(r){const e=Ke.getValue(),t=[...e.selectedCelltypes],i=t.indexOf(r);i>-1?t.splice(i,1):t.push(r);const o={...e,selectedCelltypes:t};Ke.next(o)}const Ke=new Us(qM);function co(r){const t={...Ke.getValue(),selectedCelltypes:[...new Set(r)]};Ke.next(t)}function $M(r){const t={...Ke.getValue(),mode:r};Ke.next(t)}function Rs(r){const t={...Ke.getValue(),selectedGenes:r};Ke.next(t)}const mu=()=>({cellCheckbox:document.getElementById("cellCheckbox"),geneRadioContainer:document.getElementById("geneRadioContainer"),toggleCellCheckbox:document.getElementById("toggleCellCheckbox"),toggleGeneRadio:document.getElementById("toggleGeneRadio"),togglePointSize:document.getElementById("togglePointSize"),pointSizeSliderBox:document.getElementById("pointSizeSliderBox"),pointSizeSlider:document.getElementById("pointSizeSlider"),pointSizeSliderValue:document.getElementById("pointSizeSliderValue"),pointSizeMinId:document.getElementById("pointSizeMinId"),pointSizeMaxId:document.getElementById("pointSizeMaxId"),toggleGenePercentile:document.getElementById("toggleGenePercentile"),geneSliderBox:document.getElementById("geneSliderBox"),geneSlider:document.getElementById("geneSlider"),geneSliderValue:document.getElementById("geneSliderValue"),geneMinId:document.getElementById("geneMinId"),geneMaxId:document.getElementById("geneMaxId")}),za=r=>r?(r.style.display=r.style.display==="none"?"block":"none",r.style.display==="block"):!1,lr=(r,e)=>{r&&(r.style.backgroundColor=e?"white":"#282828",r.style.color=e?"black":"white")},KM=()=>{const r=mu(),{cellCheckbox:e,geneRadioContainer:t,toggleCellCheckbox:i,toggleGeneRadio:o}=r;i.addEventListener("click",()=>{const a=za(e);lr(i,a),lr(o,!1),t&&t.style.display==="block"&&(t.style.display="none")})},ZM=()=>{const r=mu(),{cellCheckbox:e,geneRadioContainer:t,toggleCellCheckbox:i,toggleGeneRadio:o}=r;o.addEventListener("click",()=>{const a=za(t);lr(o,a),lr(i,!1),e&&e.style.display==="block"&&(e.style.display="none")})},jM=()=>{const r=mu(),{pointSizeSlider:e,pointSizeSliderValue:t,pointSizeMinId:i,pointSizeMaxId:o,toggleGenePercentile:a,geneSlider:u,geneSliderValue:c,geneMinId:f,geneMaxId:d,togglePointSize:p,pointSizeSliderBox:_,geneSliderBox:v}=r,x=()=>{const w=Ke.value.selectedGenes.length===1,F=Ke.value.mode===1;w&&F?(a.disabled=!1,a.style.opacity="1",a.style.cursor="pointer"):(a.disabled=!0,a.style.opacity="0.5",a.style.cursor="not-allowed",v&&v.style.display==="block"&&(v.style.display="none"))};x(),Ke.subscribe(x);const M=()=>{const{minDotSize:w,maxDotSize:F,dotSize:O}=wt.value;e.min=w,e.max=F,e.value=O,t.value=O.toFixed(2),t.min=w,t.max=F,i.textContent=w.toFixed(2),o.textContent=F.toFixed(2)},b=()=>{f&&d&&(f.textContent="0.00",d.textContent="0.00")};M(),b(),(()=>{document.querySelectorAll(".iconBtn,.toggles").forEach(F=>{const O=F.dataset.target;if(!O)return;const L=document.getElementById(O);L&&(F.addEventListener("mouseenter",()=>{L.style.display="block"}),F.addEventListener("mouseleave",()=>{L.style.display="none"}))})})(),p.addEventListener("click",()=>{const{cellCheckbox:w,geneRadioContainer:F,geneSliderBox:O,toggleCellCheckbox:L,toggleGeneRadio:Y}=r;w&&w.style.display==="block"&&(w.style.display="none",lr(L,!1)),F&&F.style.display==="block"&&(F.style.display="none",lr(Y,!1)),O&&O.style.display==="block"&&(O.style.display="none"),za(_)});const m=w=>{const F=parseFloat(w).toFixed(2);t.value=F,VM(F)};e.addEventListener("change",function(){m(this.value)}),e.addEventListener("mouseup",function(){m(this.value)}),t.addEventListener("change",function(){const{minDotSize:w,maxDotSize:F}=wt.value;this.value<w&&(this.value=w),this.value>F&&(this.value=F),e.value=this.value,m(this.value)}),a.addEventListener("click",()=>{if(a.disabled)return;const{cellCheckbox:w,geneRadioContainer:F,pointSizeSliderBox:O,toggleCellCheckbox:L,toggleGeneRadio:Y}=r;w&&w.style.display==="block"&&(w.style.display="none",lr(L,!1)),F&&F.style.display==="block"&&(F.style.display="none",lr(Y,!1)),O&&O.style.display==="block"&&(O.style.display="none"),za(v)});const N=w=>{const F=parseFloat(w);c.value=F.toFixed(2),WM(F)};u.addEventListener("mouseup",function(){N(this.value)}),c.addEventListener("change",function(){const{minGeneValue:w,maxGeneValue:F}=wt.value,O=parseFloat(this.value);if(isNaN(O)){this.value=wt.value.currentGeneValue.toFixed(2);return}O>=w&&O<=F?u.value=O:u.value=O<w?w:F,N(O)});const C=w=>{w.key==="Enter"&&document.activeElement.blur()};t.addEventListener("keydown",C),c.addEventListener("keydown",C),wt.subscribe(w=>{if(!(w.minGeneValue<=0&&w.maxGeneValue<=0)){if(u.min=w.minGeneValue,u.max=w.maxGeneValue,c.min=w.minGeneValue,c.max=w.maxGeneValue,w.currentGeneValue>0)u.value=w.currentGeneValue,c.value=w.currentGeneValue.toFixed(2);else{const F=w.minGeneValue+(w.maxGeneValue-w.minGeneValue)*.99;u.value=F,c.value=F.toFixed(2)}f&&d&&(f.textContent=w.minGeneValue.toFixed(2),d.textContent=w.maxGeneValue.toFixed(2))}})},JM=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),QM(t)})};function QM(r){const e=document.getElementById("geneNotFound");if(r){const t=Rt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Ga(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Ga(Rt.value.genes)}function Ga(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",Ke.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(Ke.value.selectedGenes.length>=Ke.value.mode&&(u.target.checked=!1),Ke.value.mode===1&&Ke.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(Ke.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(Rs([]),u.target.checked=!0)}Bp(t,u.target.checked)})})}function eE(){const r=document.getElementById("modeButton");r.value=Ke.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,$M(e?2:1),e?zp():document.getElementById("selectedContainer").innerHTML=""}}function Bp(r,e){let t=Ke.value.selectedGenes.map(i=>i);e?(t.push(r),Rs(t)):(t=t.filter(i=>i!==r),Rs(t))}const tE=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Rs([]),Ga(Rt.value.genes),geneTextbox.value=""})},nE=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",Ke.value.selectedGenes.length!==0?Ke.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");Ke.value.selectedGenes.length===1?i.style.color="white":i.style.color=t===0?"green":"magenta",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},zp=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",Ke.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",Ke.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(Ke.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),Bp(t.value,!1)})}),Ke.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{zM(),GM()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".colorbar-wrapper2").load("/src/ui/ColorBar/colorBarGreen.html",()=>{})});$(function(){$(".colorbar-wrapper3").load("/src/ui/ColorBar/colorBarMagenta.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{KM(),ZM(),jM(),eE()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="162",Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iE=0,$h=1,rE=2,Gp=1,sE=2,Fi=3,dr=0,Pn=1,Bi=2,ur=0,As=1,Kh=2,Zh=3,jh=4,oE=5,Lr=100,aE=101,lE=102,Jh=103,Qh=104,cE=200,uE=201,fE=202,hE=203,iu=204,ru=205,dE=206,pE=207,mE=208,gE=209,_E=210,vE=211,xE=212,SE=213,ME=214,EE=0,yE=1,bE=2,Ha=3,TE=4,AE=5,wE=6,RE=7,Hp=0,CE=1,PE=2,fr=0,LE=1,DE=2,IE=3,UE=4,NE=5,OE=6,FE=7,Vp=300,Cs=301,Ps=302,su=303,ou=304,Ja=306,au=1e3,li=1001,lu=1002,yn=1003,ed=1004,to=1005,Cn=1006,gc=1007,Ir=1008,hr=1009,BE=1010,zE=1011,_u=1012,kp=1013,cr=1014,zi=1015,uo=1016,Wp=1017,Xp=1018,Ur=1020,GE=1021,ci=1023,HE=1024,VE=1025,Nr=1026,Ls=1027,kE=1028,qp=1029,WE=1030,Yp=1031,$p=1033,_c=33776,vc=33777,xc=33778,Sc=33779,td=35840,nd=35841,id=35842,rd=35843,Kp=36196,sd=37492,od=37496,ad=37808,ld=37809,cd=37810,ud=37811,fd=37812,hd=37813,dd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,xd=37820,Sd=37821,Mc=36492,Md=36494,Ed=36495,XE=36283,yd=36284,bd=36285,Td=36286,qE=3200,YE=3201,$E=0,KE=1,ar="",_i="srgb",pr="srgb-linear",vu="display-p3",Qa="display-p3-linear",Va="linear",Gt="srgb",ka="rec709",Wa="p3",as=7680,Ad=519,ZE=512,jE=513,JE=514,Zp=515,QE=516,ey=517,ty=518,ny=519,wd=35044,Rd="300 es",cu=1035,Gi=2e3,Xa=2001;class Gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cd=1234567;const ao=Math.PI/180,fo=180/Math.PI;function Ns(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function xu(r,e){return(r%e+e)%e}function iy(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function ry(r,e,t){return r!==e?(t-r)/(e-r):0}function lo(r,e,t){return(1-t)*r+t*e}function sy(r,e,t,i){return lo(r,e,1-Math.exp(-t*i))}function oy(r,e=1){return e-Math.abs(xu(r,e*2)-e)}function ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ly(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uy(r,e){return r+Math.random()*(e-r)}function fy(r){return r*(.5-Math.random())}function hy(r){r!==void 0&&(Cd=r);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dy(r){return r*ao}function py(r){return r*fo}function uu(r){return(r&r-1)===0&&r!==0}function my(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gy(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),M=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*M,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*M,c*d);break;case"ZYZ":r.set(f*M,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _y={DEG2RAD:ao,RAD2DEG:fo,generateUUID:Ns,clamp:gn,euclideanModulo:xu,mapLinear:iy,inverseLerp:ry,lerp:lo,damp:sy,pingpong:oy,smoothstep:ay,smootherstep:ly,randInt:cy,randFloat:uy,randFloatSpread:fy,seededRandom:hy,degToRad:dy,radToDeg:py,isPowerOfTwo:uu,ceilPowerOfTwo:my,floorPowerOfTwo:qa,setQuaternionFromProperEuler:gy,normalize:Mn,denormalize:ys};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,o,a,u,c,f,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],x=i[5],M=i[8],b=o[0],g=o[3],m=o[6],N=o[1],C=o[4],w=o[7],F=o[2],O=o[5],L=o[8];return a[0]=u*b+c*N+f*F,a[3]=u*g+c*C+f*O,a[6]=u*m+c*w+f*L,a[1]=d*b+p*N+_*F,a[4]=d*g+p*C+_*O,a[7]=d*m+p*w+_*L,a[2]=v*b+x*N+M*F,a[5]=v*g+x*C+M*O,a[8]=v*m+x*w+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,x=d*a-u*f,M=t*_+i*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=_*b,e[1]=(o*d-p*i)*b,e[2]=(c*i-o*u)*b,e[3]=v*b,e[4]=(p*t-o*f)*b,e[5]=(o*a-c*t)*b,e[6]=x*b,e[7]=(i*f-d*t)*b,e[8]=(u*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new gt;function jp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vy(){const r=Ya("canvas");return r.style.display="block",r}const Pd={};function xy(r){r in Pd||(Pd[r]=!0,console.warn(r))}const Ld=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dd=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[pr]:{transfer:Va,primaries:ka,toReference:r=>r,fromReference:r=>r},[_i]:{transfer:Gt,primaries:ka,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Va,primaries:Wa,toReference:r=>r.applyMatrix3(Dd),fromReference:r=>r.applyMatrix3(Ld)},[vu]:{transfer:Gt,primaries:Wa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Dd),fromReference:r=>r.applyMatrix3(Ld).convertLinearToSRGB()}},Sy=new Set([pr,Qa]),It={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Sy.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=aa[e].toReference,o=aa[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return aa[r].primaries},getTransfer:function(r){return r===ar?Va:aa[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ya("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ws(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(bc(o[u].image)):a.push(bc(o[u]))}else a=bc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function bc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ey=0;class Ln extends Gr{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=li,o=li,a=Cn,u=Ir,c=ci,f=hr,d=Ln.DEFAULT_ANISOTROPY,p=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ns(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Vp;Ln.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,t=0,i=0,o=1){un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],x=f[5],M=f[9],b=f[2],g=f[6],m=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-g)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+g)<.1&&Math.abs(d+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,w=(x+1)/2,F=(m+1)/2,O=(p+v)/4,L=(_+b)/4,Y=(M+g)/4;return C>w&&C>F?C<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(C),o=O/i,a=L/i):w>F?w<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(w),i=O/o,a=Y/o):F<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(F),i=L/a,o=Y/a),this.set(i,o,a,t),this}let N=Math.sqrt((g-M)*(g-M)+(_-b)*(_-b)+(v-p)*(v-p));return Math.abs(N)<.001&&(N=1),this.x=(g-M)/N,this.y=(_-b)/N,this.z=(v-p)/N,this.w=Math.acos((d+x+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yy extends Gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new Ln(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends yy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class em extends Ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class by extends Ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],M=a[u+2],b=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=b;return}if(_!==b||f!==v||d!==x||p!==M){let g=1-c;const m=f*v+d*x+p*M+_*b,N=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){const F=Math.sqrt(C),O=Math.atan2(F,m*N);g=Math.sin(g*O)/F,c=Math.sin(c*O)/F}const w=c*N;if(f=f*g+v*w,d=d*g+x*w,p=p*g+M*w,_=_*g+b*w,g===1-c){const F=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=F,d*=F,p*=F,_*=F}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],x=a[u+2],M=a[u+3];return e[t]=c*M+p*_+f*x-d*v,e[t+1]=f*M+p*v+d*_-c*x,e[t+2]=d*M+p*x+c*v-f*_,e[t+3]=p*M-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),M=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*x*M,this._y=d*x*_-v*p*M,this._z=d*p*M+v*x*_,this._w=d*p*_-v*x*M;break;case"YXZ":this._x=v*p*_+d*x*M,this._y=d*x*_-v*p*M,this._z=d*p*M-v*x*_,this._w=d*p*_+v*x*M;break;case"ZXY":this._x=v*p*_-d*x*M,this._y=d*x*_+v*p*M,this._z=d*p*M+v*x*_,this._w=d*p*_-v*x*M;break;case"ZYX":this._x=v*p*_-d*x*M,this._y=d*x*_+v*p*M,this._z=d*p*M-v*x*_,this._w=d*p*_+v*x*M;break;case"YZX":this._x=v*p*_+d*x*M,this._y=d*x*_+v*p*M,this._z=d*p*M-v*x*_,this._w=d*p*_-v*x*M;break;case"XZY":this._x=v*p*_-d*x*M,this._y=d*x*_-v*p*M,this._z=d*p*M+v*x*_,this._w=d*p*_+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(p-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new X,Id=new zr;class ho{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(a,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),ca.subVectors(this.max,no),cs.subVectors(e.a,no),us.subVectors(e.b,no),fs.subVectors(e.c,no),Qi.subVectors(us,cs),er.subVectors(fs,us),br.subVectors(cs,fs);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-br.z,br.y,Qi.z,0,-Qi.x,er.z,0,-er.x,br.z,0,-br.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-br.y,br.x,0];return!Ac(t,cs,us,fs,ca)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,cs,us,fs,ca))?!1:(ua.crossVectors(Qi,er),t=[ua.x,ua.y,ua.z],Ac(t,cs,us,fs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new X,new X,new X,new X,new X,new X,new X,new X],si=new X,la=new ho,cs=new X,us=new X,fs=new X,Qi=new X,er=new X,br=new X,no=new X,ca=new X,ua=new X,Tr=new X;function Ac(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){Tr.fromArray(r,a);const c=o.x*Math.abs(Tr.x)+o.y*Math.abs(Tr.y)+o.z*Math.abs(Tr.z),f=e.dot(Tr),d=t.dot(Tr),p=i.dot(Tr);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const Ty=new ho,io=new X,wc=new X;class el{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ty.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(io,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(wc)),this.expandByPoint(io.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new X,Rc=new X,fa=new X,tr=new X,Cc=new X,ha=new X,Pc=new X;class tl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Rc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(Rc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(fa),c=tr.dot(this.direction),f=-tr.dot(fa),d=tr.lengthSq(),p=Math.abs(1-u*u);let _,v,x,M;if(p>0)if(_=u*f-c,v=u*c-f,M=a*p,_>=0)if(v>=-M)if(v<=M){const b=1/p;_*=b,v*=b,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-M?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=M?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Rc).addScaledVector(fa,v),x}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),o=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,o,a){Cc.subVectors(t,e),ha.subVectors(i,e),Pc.crossVectors(Cc,ha);let u=this.direction.dot(Pc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;tr.subVectors(this.origin,e);const f=c*this.direction.dot(ha.crossVectors(tr,ha));if(f<0)return null;const d=c*this.direction.dot(Cc.cross(tr));if(d<0||f+d>u)return null;const p=-c*tr.dot(Pc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,x,M,b,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,x,M,b,g)}set(e,t,i,o,a,u,c,f,d,p,_,v,x,M,b,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=o,m[1]=a,m[5]=u,m[9]=c,m[13]=f,m[2]=d,m[6]=p,m[10]=_,m[14]=v,m[3]=x,m[7]=M,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/hs.setFromMatrixColumn(e,0).length(),a=1/hs.setFromMatrixColumn(e,1).length(),u=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,x=u*_,M=c*p,b=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=x+M*d,t[5]=v-b*d,t[9]=-c*f,t[2]=b-v*d,t[6]=M+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,x=f*_,M=d*p,b=d*_;t[0]=v+b*c,t[4]=M*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=x*c-M,t[6]=b+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,x=f*_,M=d*p,b=d*_;t[0]=v-b*c,t[4]=-u*_,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*p,t[9]=b-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,x=u*_,M=c*p,b=c*_;t[0]=f*p,t[4]=M*d-x,t[8]=v*d+b,t[1]=f*_,t[5]=b*d+v,t[9]=x*d-M,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,M=c*f,b=c*d;t[0]=f*p,t[4]=b-v*_,t[8]=M*_+x,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*_+M,t[10]=v-b*_}else if(e.order==="XZY"){const v=u*f,x=u*d,M=c*f,b=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+b,t[5]=u*p,t[9]=x*_-M,t[2]=M*_-x,t[6]=c*p,t[10]=b*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,wy)}lookAt(e,t,i){const o=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),nr.crossVectors(i,zn),nr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),nr.crossVectors(i,zn)),nr.normalize(),da.crossVectors(zn,nr),o[0]=nr.x,o[4]=da.x,o[8]=zn.x,o[1]=nr.y,o[5]=da.y,o[9]=zn.y,o[2]=nr.z,o[6]=da.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],x=i[13],M=i[2],b=i[6],g=i[10],m=i[14],N=i[3],C=i[7],w=i[11],F=i[15],O=o[0],L=o[4],Y=o[8],ve=o[12],T=o[1],U=o[5],xe=o[9],me=o[13],G=o[2],se=o[6],ne=o[10],ue=o[14],te=o[3],ce=o[7],fe=o[11],Se=o[15];return a[0]=u*O+c*T+f*G+d*te,a[4]=u*L+c*U+f*se+d*ce,a[8]=u*Y+c*xe+f*ne+d*fe,a[12]=u*ve+c*me+f*ue+d*Se,a[1]=p*O+_*T+v*G+x*te,a[5]=p*L+_*U+v*se+x*ce,a[9]=p*Y+_*xe+v*ne+x*fe,a[13]=p*ve+_*me+v*ue+x*Se,a[2]=M*O+b*T+g*G+m*te,a[6]=M*L+b*U+g*se+m*ce,a[10]=M*Y+b*xe+g*ne+m*fe,a[14]=M*ve+b*me+g*ue+m*Se,a[3]=N*O+C*T+w*G+F*te,a[7]=N*L+C*U+w*se+F*ce,a[11]=N*Y+C*xe+w*ne+F*fe,a[15]=N*ve+C*me+w*ue+F*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],x=e[14],M=e[3],b=e[7],g=e[11],m=e[15];return M*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+b*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*p-a*f*p)+g*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*p-i*d*p)+m*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],x=e[11],M=e[12],b=e[13],g=e[14],m=e[15],N=_*g*d-b*v*d+b*f*x-c*g*x-_*f*m+c*v*m,C=M*v*d-p*g*d-M*f*x+u*g*x+p*f*m-u*v*m,w=p*b*d-M*_*d+M*c*x-u*b*x-p*c*m+u*_*m,F=M*_*f-p*b*f-M*c*v+u*b*v+p*c*g-u*_*g,O=t*N+i*C+o*w+a*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=N*L,e[1]=(b*v*a-_*g*a-b*o*x+i*g*x+_*o*m-i*v*m)*L,e[2]=(c*g*a-b*f*a+b*o*d-i*g*d-c*o*m+i*f*m)*L,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*L,e[4]=C*L,e[5]=(p*g*a-M*v*a+M*o*x-t*g*x-p*o*m+t*v*m)*L,e[6]=(M*f*a-u*g*a-M*o*d+t*g*d+u*o*m-t*f*m)*L,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*x+t*f*x)*L,e[8]=w*L,e[9]=(M*_*a-p*b*a-M*i*x+t*b*x+p*i*m-t*_*m)*L,e[10]=(u*b*a-M*c*a+M*i*d-t*b*d-u*i*m+t*c*m)*L,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*x-t*c*x)*L,e[12]=F*L,e[13]=(p*b*o-M*_*o+M*i*v-t*b*v-p*i*g+t*_*g)*L,e[14]=(M*c*o-u*b*o-M*i*f+t*b*f+u*i*g-t*c*g)*L,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*L,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,x=a*p,M=a*_,b=u*p,g=u*_,m=c*_,N=f*d,C=f*p,w=f*_,F=i.x,O=i.y,L=i.z;return o[0]=(1-(b+m))*F,o[1]=(x+w)*F,o[2]=(M-C)*F,o[3]=0,o[4]=(x-w)*O,o[5]=(1-(v+m))*O,o[6]=(g+N)*O,o[7]=0,o[8]=(M+C)*L,o[9]=(g-N)*L,o[10]=(1-(v+b))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=hs.set(o[0],o[1],o[2]).length();const u=hs.set(o[4],o[5],o[6]).length(),c=hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const d=1/a,p=1/u,_=1/c;return oi.elements[0]*=d,oi.elements[1]*=d,oi.elements[2]*=d,oi.elements[4]*=p,oi.elements[5]*=p,oi.elements[6]*=p,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,t.setFromRotationMatrix(oi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Gi){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,M;if(c===Gi)x=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===Xa)x=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Gi){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*p;let M,b;if(c===Gi)M=(u+a)*_,b=-2*_;else if(c===Xa)M=a*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=b,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new X,oi=new jt,Ay=new X(0,0,0),wy=new X(1,1,1),nr=new X,da=new X,zn=new X,Ud=new jt,Nd=new zr;class Vi{constructor(e=0,t=0,i=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ry=0;const Od=new X,ds=new zr,Ui=new jt,pa=new X,ro=new X,Cy=new X,Py=new zr,Fd=new X(1,0,0),Bd=new X(0,1,0),zd=new X(0,0,1),Ly={type:"added"},Dy={type:"removed"},Lc={type:"childadded",child:null},Dc={type:"childremoved",child:null};class Dn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new X,t=new Vi,i=new zr,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new gt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Od.copy(e).applyQuaternion(this.quaternion),this.position.add(Od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ro,pa,this.up):Ui.lookAt(pa,ro,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ly),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dy),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new X(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new X,Ni=new X,Ic=new X,Oi=new X,ps=new X,ms=new X,Gd=new X,Uc=new X,Nc=new X,Oc=new X;class xi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),ai.subVectors(e,t),o.cross(ai);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){ai.subVectors(o,t),Ni.subVectors(i,t),Ic.subVectors(e,t);const u=ai.dot(ai),c=ai.dot(Ni),f=ai.dot(Ic),d=Ni.dot(Ni),p=Ni.dot(Ic),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*p)*v,M=(u*p-c*f)*v;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Oi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Oi.x),f.addScaledVector(u,Oi.y),f.addScaledVector(c,Oi.z),f)}static isFrontFacing(e,t,i,o){return ai.subVectors(i,t),Ni.subVectors(e,t),ai.cross(Ni).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ps.subVectors(o,i),ms.subVectors(a,i),Uc.subVectors(e,i);const f=ps.dot(Uc),d=ms.dot(Uc);if(f<=0&&d<=0)return t.copy(i);Nc.subVectors(e,o);const p=ps.dot(Nc),_=ms.dot(Nc);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(ps,u);Oc.subVectors(e,a);const x=ps.dot(Oc),M=ms.dot(Oc);if(M>=0&&x<=M)return t.copy(a);const b=x*d-f*M;if(b<=0&&d>=0&&M<=0)return c=d/(d-M),t.copy(i).addScaledVector(ms,c);const g=p*M-x*_;if(g<=0&&_-p>=0&&x-M>=0)return Gd.subVectors(a,o),c=(_-p)/(_-p+(x-M)),t.copy(o).addScaledVector(Gd,c);const m=1/(g+b+v);return u=b*m,c=v*m,t.copy(i).addScaledVector(ps,u).addScaledVector(ms,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Fc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=It.workingColorSpace){if(e=xu(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Fc(u,a,e+1/3),this.g=Fc(u,a,e),this.b=Fc(u,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=_i){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const i=tm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return It.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(mn.copy(this),t);const i=mn.r,o=mn.g,a=mn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=_i){It.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,o=mn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(ma);const i=lo(ir.h,ma.h,t),o=lo(ir.s,ma.s,t),a=lo(ir.l,ma.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new bt;bt.NAMES=tm;let Iy=0;class po extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=As,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==iu&&(i.blendSrc=this.blendSrc),this.blendDst!==ru&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nm extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new X,ga=new st;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}}class im extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rm extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Or extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Uy=0;const jn=new jt,Bc=new Dn,gs=new X,Gn=new ho,so=new ho,an=new X;class Mi extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?rm:im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Or(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];so.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(Gn.min,so.min),Gn.expandByPoint(an),an.addVectors(Gn.max,so.max),Gn.expandByPoint(an)):(Gn.expandByPoint(so.min),Gn.expandByPoint(so.max))}Gn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)an.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(an));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)an.fromBufferAttribute(c,d),f&&(gs.fromBufferAttribute(e,d),an.add(gs)),o=Math.max(o,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let Y=0;Y<i.count;Y++)c[Y]=new X,f[Y]=new X;const d=new X,p=new X,_=new X,v=new st,x=new st,M=new st,b=new X,g=new X;function m(Y,ve,T){d.fromBufferAttribute(i,Y),p.fromBufferAttribute(i,ve),_.fromBufferAttribute(i,T),v.fromBufferAttribute(a,Y),x.fromBufferAttribute(a,ve),M.fromBufferAttribute(a,T),p.sub(d),_.sub(d),x.sub(v),M.sub(v);const U=1/(x.x*M.y-M.x*x.y);isFinite(U)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(U),g.copy(_).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(U),c[Y].add(b),c[ve].add(b),c[T].add(b),f[Y].add(g),f[ve].add(g),f[T].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,ve=N.length;Y<ve;++Y){const T=N[Y],U=T.start,xe=T.count;for(let me=U,G=U+xe;me<G;me+=3)m(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const C=new X,w=new X,F=new X,O=new X;function L(Y){F.fromBufferAttribute(o,Y),O.copy(F);const ve=c[Y];C.copy(ve),C.sub(F.multiplyScalar(F.dot(ve))).normalize(),w.crossVectors(O,ve);const U=w.dot(f[Y])<0?-1:1;u.setXYZW(Y,C.x,C.y,C.z,U)}for(let Y=0,ve=N.length;Y<ve;++Y){const T=N[Y],U=T.start,xe=T.count;for(let me=U,G=U+xe;me<G;me+=3)L(e.getX(me+0)),L(e.getX(me+1)),L(e.getX(me+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),b=e.getX(v+1),g=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,b),u.fromBufferAttribute(t,g),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,g),c.add(p),f.add(p),d.add(p),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let x=0,M=0;for(let b=0,g=f.length;b<g;b++){c.isInterleavedBufferAttribute?x=f[b]*c.data.stride+c.offset:x=f[b]*p;for(let m=0;m<p;m++)v[M++]=d[x++]}return new Yt(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new jt,Ar=new tl,_a=new el,Vd=new X,_s=new X,vs=new X,xs=new X,zc=new X,va=new X,xa=new st,Sa=new st,Ma=new st,kd=new X,Wd=new X,Xd=new X,Ea=new X,ya=new X;class Hi extends Dn{constructor(e=new Mi,t=new nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){va.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(zc.fromBufferAttribute(_,e),u?va.addScaledVector(zc,p):va.addScaledVector(zc.sub(t),p))}t.add(va)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(_a.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(_a,Vd)===null||Ar.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Hd.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const g=v[M],m=u[g.materialIndex],N=Math.max(g.start,x.start),C=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let w=N,F=C;w<F;w+=3){const O=c.getX(w),L=c.getX(w+1),Y=c.getX(w+2);o=ba(this,m,e,i,d,p,_,O,L,Y),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),b=Math.min(c.count,x.start+x.count);for(let g=M,m=b;g<m;g+=3){const N=c.getX(g),C=c.getX(g+1),w=c.getX(g+2);o=ba(this,u,e,i,d,p,_,N,C,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const g=v[M],m=u[g.materialIndex],N=Math.max(g.start,x.start),C=Math.min(f.count,Math.min(g.start+g.count,x.start+x.count));for(let w=N,F=C;w<F;w+=3){const O=w,L=w+1,Y=w+2;o=ba(this,m,e,i,d,p,_,O,L,Y),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let g=M,m=b;g<m;g+=3){const N=g,C=g+1,w=g+2;o=ba(this,u,e,i,d,p,_,N,C,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Ny(r,e,t,i,o,a,u,c){let f;if(e.side===Pn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===dr,c),f===null)return null;ya.copy(c),ya.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(ya);return d<t.near||d>t.far?null:{distance:d,point:ya.clone(),object:r}}function ba(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,_s),r.getVertexPosition(f,vs),r.getVertexPosition(d,xs);const p=Ny(r,e,t,i,_s,vs,xs,Ea);if(p){o&&(xa.fromBufferAttribute(o,c),Sa.fromBufferAttribute(o,f),Ma.fromBufferAttribute(o,d),p.uv=xi.getInterpolation(Ea,_s,vs,xs,xa,Sa,Ma,new st)),a&&(xa.fromBufferAttribute(a,c),Sa.fromBufferAttribute(a,f),Ma.fromBufferAttribute(a,d),p.uv1=xi.getInterpolation(Ea,_s,vs,xs,xa,Sa,Ma,new st)),u&&(kd.fromBufferAttribute(u,c),Wd.fromBufferAttribute(u,f),Xd.fromBufferAttribute(u,d),p.normal=xi.getInterpolation(Ea,_s,vs,xs,kd,Wd,Xd,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};xi.getNormal(_s,vs,xs,_.normal),p.face=_}return p}class mo extends Mi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,x=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,o,u,2),M("x","z","y",1,-1,e,i,-t,o,u,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Or(d,3)),this.setAttribute("normal",new Or(p,3)),this.setAttribute("uv",new Or(_,2));function M(b,g,m,N,C,w,F,O,L,Y,ve){const T=w/L,U=F/Y,xe=w/2,me=F/2,G=O/2,se=L+1,ne=Y+1;let ue=0,te=0;const ce=new X;for(let fe=0;fe<ne;fe++){const Se=fe*U-me;for(let Ie=0;Ie<se;Ie++){const tt=Ie*T-xe;ce[b]=tt*N,ce[g]=Se*C,ce[m]=G,d.push(ce.x,ce.y,ce.z),ce[b]=0,ce[g]=0,ce[m]=O>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(Ie/L),_.push(1-fe/Y),ue+=1}}for(let fe=0;fe<Y;fe++)for(let Se=0;Se<L;Se++){const Ie=v+Se+se*fe,tt=v+Se+se*(fe+1),Q=v+(Se+1)+se*(fe+1),de=v+(Se+1)+se*fe;f.push(Ie,tt,de),f.push(tt,Q,de),te+=6}c.addGroup(x,te,ve),x+=te,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const i=Ds(r[t]);for(const o in i)e[o]=i[o]}return e}function Oy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sm(r){return r.getRenderTarget()===null?r.outputColorSpace:It.workingColorSpace}const Fy={clone:Ds,merge:En};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class om extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new X,qd=new st,Yd=new st;class Hn extends om{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,qd,Yd),t.subVectors(Yd,qd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class Gy extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const a=new Hn(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const u=new Hn(Ss,Ms,e,t);u.layers=this.layers,this.add(u);const c=new Hn(Ss,Ms,e,t);c.layers=this.layers,this.add(c);const f=new Hn(Ss,Ms,e,t);f.layers=this.layers,this.add(f);const d=new Hn(Ss,Ms,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class am extends Ln{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hy extends Br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new am(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mo(5,5,5),a=new ki({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:ur});a.uniforms.tEquirect.value=t;const u=new Hi(o,a),c=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Cn),new Gy(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Gc=new X,Vy=new X,ky=new gt;class or{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Gc.subVectors(i,t).cross(Vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ky.getNormalMatrix(e),o=this.coplanarPoint(Gc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new el,Ta=new X;class lm{constructor(e=new or,t=new or,i=new or,o=new or,a=new or,u=new or){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],x=o[8],M=o[9],b=o[10],g=o[11],m=o[12],N=o[13],C=o[14],w=o[15];if(i[0].setComponents(f-a,v-d,g-x,w-m).normalize(),i[1].setComponents(f+a,v+d,g+x,w+m).normalize(),i[2].setComponents(f+u,v+p,g+M,w+N).normalize(),i[3].setComponents(f-u,v-p,g-M,w-N).normalize(),i[4].setComponents(f-c,v-_,g-b,w-C).normalize(),t===Gi)i[5].setComponents(f+c,v+_,g+b,w+C).normalize();else if(t===Xa)i[5].setComponents(c,_,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ta.x=o.normal.x>0?e.max.x:e.min.x,Ta.y=o.normal.y>0?e.max.y:e.min.y,Ta.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Wy(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,x=_.byteLength,M=r.createBuffer();r.bindBuffer(p,M),r.bufferData(p,_,v),d.onUploadCallback();let b;if(_ instanceof Float32Array)b=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=r.SHORT;else if(_ instanceof Uint32Array)b=r.UNSIGNED_INT;else if(_ instanceof Int32Array)b=r.INT;else if(_ instanceof Int8Array)b=r.BYTE;else if(_ instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,p,_){const v=p.array,x=p._updateRange,M=p.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&M.length===0&&r.bufferSubData(_,0,v),M.length!==0){for(let b=0,g=M.length;b<g;b++){const m=M[b];t?r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v,m.start,m.count):r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v.subarray(m.start,m.start+m.count))}p.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class nl extends Mi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,x=[],M=[],b=[],g=[];for(let m=0;m<p;m++){const N=m*v-u;for(let C=0;C<d;C++){const w=C*_-a;M.push(w,-N,0),b.push(0,0,1),g.push(C/c),g.push(1-m/f)}}for(let m=0;m<f;m++)for(let N=0;N<c;N++){const C=N+d*m,w=N+d*(m+1),F=N+1+d*(m+1),O=N+1+d*m;x.push(C,w,O),x.push(w,F,O)}this.setIndex(x),this.setAttribute("position",new Or(M,3)),this.setAttribute("normal",new Or(b,3)),this.setAttribute("uv",new Or(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eb=`
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
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
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
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,Xb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tT=`#if defined( USE_POINTS_UV )
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
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
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
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qT=`uniform sampler2D t2D;
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
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
}`,JT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define MATCAP
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
}`,uA=`#define MATCAP
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
}`,fA=`#define NORMAL
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
}`,hA=`#define NORMAL
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
}`,dA=`#define PHONG
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
}`,pA=`#define PHONG
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
}`,mA=`#define STANDARD
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
}`,gA=`#define STANDARD
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
}`,_A=`#define TOON
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
}`,vA=`#define TOON
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
}`,xA=`uniform float size;
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 color;
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
}`,yA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:$y,alphatest_fragment:Ky,alphatest_pars_fragment:Zy,aomap_fragment:jy,aomap_pars_fragment:Jy,batching_pars_vertex:Qy,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:sb,clipping_planes_fragment:ob,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:hb,color_vertex:db,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:_b,displacementmap_vertex:vb,emissivemap_fragment:xb,emissivemap_pars_fragment:Sb,colorspace_fragment:Mb,colorspace_pars_fragment:Eb,envmap_fragment:yb,envmap_common_pars_fragment:bb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Bb,envmap_vertex:wb,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Pb,fog_pars_fragment:Lb,gradientmap_pars_fragment:Db,lightmap_fragment:Ib,lightmap_pars_fragment:Ub,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Fb,lights_toon_fragment:zb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Vb,lights_physical_fragment:kb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Xb,lights_fragment_maps:qb,lights_fragment_end:Yb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:jb,map_fragment:Jb,map_pars_fragment:Qb,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:aT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:fT,normal_pars_vertex:hT,normal_vertex:dT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:vT,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:yT,dithering_pars_fragment:bT,roughnessmap_fragment:TT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:RT,shadowmap_vertex:CT,shadowmask_pars_fragment:PT,skinbase_vertex:LT,skinning_pars_vertex:DT,skinning_vertex:IT,skinnormal_vertex:UT,specularmap_fragment:NT,specularmap_pars_fragment:OT,tonemapping_fragment:FT,tonemapping_pars_fragment:BT,transmission_fragment:zT,transmission_pars_fragment:GT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:kT,worldpos_vertex:WT,background_vert:XT,background_frag:qT,backgroundCube_vert:YT,backgroundCube_frag:$T,cube_vert:KT,cube_frag:ZT,depth_vert:jT,depth_frag:JT,distanceRGBA_vert:QT,distanceRGBA_frag:eA,equirect_vert:tA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:aA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:hA,meshphong_vert:dA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:_A,meshtoon_frag:vA,points_vert:xA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:yA,sprite_frag:bA},be={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},vi={basic:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:En([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:En([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:En([be.points,be.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:En([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:En([be.common,be.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:En([be.sprite,be.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:En([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:En([be.lights,be.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};vi.physical={uniforms:En([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Aa={r:0,b:0,g:0},Rr=new Vi,TA=new jt;function AA(r,e,t,i,o,a,u){const c=new bt(0);let f=a===!0?0:1,d,p,_=null,v=0,x=null;function M(g,m){let N=!1,C=m.isScene===!0?m.background:null;C&&C.isTexture&&(C=(m.backgroundBlurriness>0?t:e).get(C)),C===null?b(c,f):C&&C.isColor&&(b(C,1),N=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,u):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||N)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ja)?(p===void 0&&(p=new Hi(new mo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ds(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Rr.copy(m.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Rr)),p.material.toneMapped=It.getTransfer(C.colorSpace)!==Gt,(_!==C||v!==C.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,x=r.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Hi(new nl(2,2),new ki({name:"BackgroundMaterial",uniforms:Ds(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=It.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=C,v=C.version,x=r.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function b(g,m){g.getRGB(Aa,sm(r)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,m,u)}return{getClearColor:function(){return c},setClearColor:function(g,m=1){c.set(g),f=m,b(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,b(c,f)},render:M}}function wA(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=g(null);let d=f,p=!1;function _(G,se,ne,ue,te){let ce=!1;if(u){const fe=b(ue,ne,se);d!==fe&&(d=fe,x(d.object)),ce=m(G,ue,ne,te),ce&&N(G,ue,ne,te)}else{const fe=se.wireframe===!0;(d.geometry!==ue.id||d.program!==ne.id||d.wireframe!==fe)&&(d.geometry=ue.id,d.program=ne.id,d.wireframe=fe,ce=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ce||p)&&(p=!1,Y(G,se,ne,ue),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(G){return i.isWebGL2?r.bindVertexArray(G):a.bindVertexArrayOES(G)}function M(G){return i.isWebGL2?r.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function b(G,se,ne){const ue=ne.wireframe===!0;let te=c[G.id];te===void 0&&(te={},c[G.id]=te);let ce=te[se.id];ce===void 0&&(ce={},te[se.id]=ce);let fe=ce[ue];return fe===void 0&&(fe=g(v()),ce[ue]=fe),fe}function g(G){const se=[],ne=[],ue=[];for(let te=0;te<o;te++)se[te]=0,ne[te]=0,ue[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ne,attributeDivisors:ue,object:G,attributes:{},index:null}}function m(G,se,ne,ue){const te=d.attributes,ce=se.attributes;let fe=0;const Se=ne.getAttributes();for(const Ie in Se)if(Se[Ie].location>=0){const Q=te[Ie];let de=ce[Ie];if(de===void 0&&(Ie==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),Ie==="instanceColor"&&G.instanceColor&&(de=G.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;fe++}return d.attributesNum!==fe||d.index!==ue}function N(G,se,ne,ue){const te={},ce=se.attributes;let fe=0;const Se=ne.getAttributes();for(const Ie in Se)if(Se[Ie].location>=0){let Q=ce[Ie];Q===void 0&&(Ie==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),Ie==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),te[Ie]=de,fe++}d.attributes=te,d.attributesNum=fe,d.index=ue}function C(){const G=d.newAttributes;for(let se=0,ne=G.length;se<ne;se++)G[se]=0}function w(G){F(G,0)}function F(G,se){const ne=d.newAttributes,ue=d.enabledAttributes,te=d.attributeDivisors;ne[G]=1,ue[G]===0&&(r.enableVertexAttribArray(G),ue[G]=1),te[G]!==se&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,se),te[G]=se)}function O(){const G=d.newAttributes,se=d.enabledAttributes;for(let ne=0,ue=se.length;ne<ue;ne++)se[ne]!==G[ne]&&(r.disableVertexAttribArray(ne),se[ne]=0)}function L(G,se,ne,ue,te,ce,fe){fe===!0?r.vertexAttribIPointer(G,se,ne,te,ce):r.vertexAttribPointer(G,se,ne,ue,te,ce)}function Y(G,se,ne,ue){if(i.isWebGL2===!1&&(G.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const te=ue.attributes,ce=ne.getAttributes(),fe=se.defaultAttributeValues;for(const Se in ce){const Ie=ce[Se];if(Ie.location>=0){let tt=te[Se];if(tt===void 0&&(Se==="instanceMatrix"&&G.instanceMatrix&&(tt=G.instanceMatrix),Se==="instanceColor"&&G.instanceColor&&(tt=G.instanceColor)),tt!==void 0){const Q=tt.normalized,de=tt.itemSize,Re=t.get(tt);if(Re===void 0)continue;const je=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,Mt=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||tt.gpuType===kp);if(tt.isInterleavedBufferAttribute){const ke=tt.data,W=ke.stride,Xt=tt.offset;if(ke.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Ie.locationSize;Ue++)F(Ie.location+Ue,ke.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ue=0;Ue<Ie.locationSize;Ue++)w(Ie.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ue=0;Ue<Ie.locationSize;Ue++)L(Ie.location+Ue,de/Ie.locationSize,Oe,Q,W*Ce,(Xt+de/Ie.locationSize*Ue)*Ce,Mt)}else{if(tt.isInstancedBufferAttribute){for(let ke=0;ke<Ie.locationSize;ke++)F(Ie.location+ke,tt.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ke=0;ke<Ie.locationSize;ke++)w(Ie.location+ke);r.bindBuffer(r.ARRAY_BUFFER,je);for(let ke=0;ke<Ie.locationSize;ke++)L(Ie.location+ke,de/Ie.locationSize,Oe,Q,de*Ce,de/Ie.locationSize*ke*Ce,Mt)}}else if(fe!==void 0){const Q=fe[Se];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Ie.location,Q);break;case 3:r.vertexAttrib3fv(Ie.location,Q);break;case 4:r.vertexAttrib4fv(Ie.location,Q);break;default:r.vertexAttrib1fv(Ie.location,Q)}}}}O()}function ve(){xe();for(const G in c){const se=c[G];for(const ne in se){const ue=se[ne];for(const te in ue)M(ue[te].object),delete ue[te];delete se[ne]}delete c[G]}}function T(G){if(c[G.id]===void 0)return;const se=c[G.id];for(const ne in se){const ue=se[ne];for(const te in ue)M(ue[te].object),delete ue[te];delete se[ne]}delete c[G.id]}function U(G){for(const se in c){const ne=c[se];if(ne[G.id]===void 0)continue;const ue=ne[G.id];for(const te in ue)M(ue[te].object),delete ue[te];delete ne[G.id]}}function xe(){me(),p=!0,d!==f&&(d=f,x(d.object))}function me(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:xe,resetDefaultState:me,dispose:ve,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:w,disableUnusedAttributes:O}}function RA(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let x,M;if(o)x=r,M="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<v;M++)this.render(p[M],_[M]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=_[b];t.update(M,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function CA(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,w=u||e.has("OES_texture_float"),F=C&&w,O=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:N,vertexTextures:C,floatFragmentTextures:w,floatVertexTextures:F,maxSamples:O}}function PA(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new or,c=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,x){const M=_.clippingPlanes,b=_.clipIntersection,g=_.clipShadows,m=r.get(_);if(!o||M===null||M.length===0||a&&!g)a?p(null):d();else{const N=a?0:i,C=N*4;let w=m.clippingState||null;f.value=w,w=p(M,v,C,x);for(let F=0;F!==C;++F)w[F]=t[F];m.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,x,M){const b=_!==null?_.length:0;let g=null;if(b!==0){if(g=f.value,M!==!0||g===null){const m=x+b*4,N=v.matrixWorldInverse;c.getNormalMatrix(N),(g===null||g.length<m)&&(g=new Float32Array(m));for(let C=0,w=x;C!==b;++C,w+=4)u.copy(_[C]).applyMatrix4(N,c),u.normal.toArray(g,w),g[w+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function LA(r){let e=new WeakMap;function t(u,c){return c===su?u.mapping=Cs:c===ou&&(u.mapping=Ps),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===su||c===ou)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new Hy(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class DA extends om{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,$d=[.125,.215,.35,.446,.526,.582],Dr=20,Hc=new DA,Kd=new bt;let Vc=null,kc=0,Wc=0;const Pr=(1+Math.sqrt(5))/2,Es=1/Pr,Zd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Pr,Es),new X(0,Pr,-Es),new X(Es,0,Pr),new X(-Es,0,Pr),new X(Pr,Es,0),new X(-Pr,Es,0)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,kc,Wc),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:uo,format:ci,colorSpace:pr,depthBuffer:!1},o=Jd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(a)),this._blurMaterial=UA(a,e,t)}return o}_compileMaterial(e){const t=new Hi(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,i,o){const c=new Hn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Kd),p.toneMapping=fr,p.autoClear=!1;const x=new nm({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),M=new Hi(new mo,x);let b=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,b=!0):(x.color.copy(Kd),b=!0);for(let m=0;m<6;m++){const N=m%3;N===0?(c.up.set(0,f[m],0),c.lookAt(d[m],0,0)):N===1?(c.up.set(0,0,f[m]),c.lookAt(0,d[m],0)):(c.up.set(0,f[m],0),c.lookAt(0,0,d[m]));const C=this._cubeSize;wa(o,N*C,m>2?C:0,C,C),p.setRenderTarget(o),b&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Cs||e.mapping===Ps;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new Hi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;wa(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Hc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Zd[(o-1)%Zd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Hi(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Dr-1),b=a/M,g=isFinite(a)?1+Math.floor(p*b):Dr;g>Dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const m=[];let N=0;for(let L=0;L<Dr;++L){const Y=L/b,ve=Math.exp(-Y*Y/2);m.push(ve),L===0?N+=ve:L<g&&(N+=2*ve)}for(let L=0;L<m.length;L++)m[L]=m[L]/N;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=m,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-i;const w=this._sizeLods[o],F=3*w*(o>C-bs?o-C+bs:0),O=4*(this._cubeSize-w);wa(t,F,O,3*w,2*w),f.setRenderTarget(t),f.render(_,Hc)}}function IA(r){const e=[],t=[],i=[];let o=r;const a=r-bs+1+$d.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-bs?f=$d[u-r+bs-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,M=6,b=3,g=2,m=1,N=new Float32Array(b*M*x),C=new Float32Array(g*M*x),w=new Float32Array(m*M*x);for(let O=0;O<x;O++){const L=O%3*2/3-1,Y=O>2?0:-1,ve=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];N.set(ve,b*M*O),C.set(v,g*M*O);const T=[O,O,O,O,O,O];w.set(T,m*M*O)}const F=new Mi;F.setAttribute("position",new Yt(N,b)),F.setAttribute("uv",new Yt(C,g)),F.setAttribute("faceIndex",new Yt(w,m)),e.push(F),o>bs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jd(r,e,t){const i=new Br(r,e,t);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function UA(r,e,t){const i=new Float32Array(Dr),o=new X(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Qd(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function ep(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function NA(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===su||f===ou,p=f===Cs||f===Ps;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new jd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new jd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function OA(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function FA(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const b=v.morphAttributes[M];for(let g=0,m=b.length;g<m;g++)e.remove(b[g])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const M in x){const b=x[M];for(let g=0,m=b.length;g<m;g++)e.update(b[g],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,M=_.attributes.position;let b=0;if(x!==null){const N=x.array;b=x.version;for(let C=0,w=N.length;C<w;C+=3){const F=N[C+0],O=N[C+1],L=N[C+2];v.push(F,O,O,L,L,F)}}else if(M!==void 0){const N=M.array;b=M.version;for(let C=0,w=N.length/3-1;C<w;C+=3){const F=C+0,O=C+1,L=C+2;v.push(F,O,O,L,L,F)}}else return;const g=new(jp(v)?rm:im)(v,1);g.version=b;const m=a.get(_);m&&e.remove(m),a.set(_,g)}function p(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function BA(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,M){r.drawElements(a,M,c,x*f),t.update(M,a,1)}function _(x,M,b){if(b===0)return;let g,m;if(o)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,M,c,x*f,b),t.update(M,a,b)}function v(x,M,b){if(b===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<b;m++)this.render(x[m]/f,M[m]);else{g.multiDrawElementsWEBGL(a,M,0,c,x,0,b);let m=0;for(let N=0;N<b;N++)m+=M[N];t.update(m,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function zA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function GA(r,e){return r[0]-e[0]}function HA(r,e){return Math.abs(e[1])-Math.abs(r[1])}function VA(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new un,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const M=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b=M!==void 0?M.length:0;let g=a.get(p);if(g===void 0||g.count!==b){let me=function(){U.dispose(),a.delete(p),p.removeEventListener("dispose",me)};var x=me;g!==void 0&&g.texture.dispose();const m=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,C=p.morphAttributes.color!==void 0,w=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let L=0;m===!0&&(L=1),N===!0&&(L=2),C===!0&&(L=3);let Y=p.attributes.position.count*L,ve=1;Y>e.maxTextureSize&&(ve=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const T=new Float32Array(Y*ve*4*b),U=new em(T,Y,ve,b);U.type=zi,U.needsUpdate=!0;const xe=L*4;for(let G=0;G<b;G++){const se=w[G],ne=F[G],ue=O[G],te=Y*ve*4*G;for(let ce=0;ce<se.count;ce++){const fe=ce*xe;m===!0&&(u.fromBufferAttribute(se,ce),T[te+fe+0]=u.x,T[te+fe+1]=u.y,T[te+fe+2]=u.z,T[te+fe+3]=0),N===!0&&(u.fromBufferAttribute(ne,ce),T[te+fe+4]=u.x,T[te+fe+5]=u.y,T[te+fe+6]=u.z,T[te+fe+7]=0),C===!0&&(u.fromBufferAttribute(ue,ce),T[te+fe+8]=u.x,T[te+fe+9]=u.y,T[te+fe+10]=u.z,T[te+fe+11]=ue.itemSize===4?u.w:1)}}g={count:b,texture:U,size:new st(Y,ve)},a.set(p,g),p.addEventListener("dispose",me)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let m=0;for(let C=0;C<v.length;C++)m+=v[C];const N=p.morphTargetsRelative?1:1-m;_.getUniforms().setValue(r,"morphTargetBaseInfluence",N),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const M=v===void 0?0:v.length;let b=i[p.id];if(b===void 0||b.length!==M){b=[];for(let w=0;w<M;w++)b[w]=[w,0];i[p.id]=b}for(let w=0;w<M;w++){const F=b[w];F[0]=w,F[1]=v[w]}b.sort(HA);for(let w=0;w<8;w++)w<M&&b[w][1]?(c[w][0]=b[w][0],c[w][1]=b[w][1]):(c[w][0]=Number.MAX_SAFE_INTEGER,c[w][1]=0);c.sort(GA);const g=p.morphAttributes.position,m=p.morphAttributes.normal;let N=0;for(let w=0;w<8;w++){const F=c[w],O=F[0],L=F[1];O!==Number.MAX_SAFE_INTEGER&&L?(g&&p.getAttribute("morphTarget"+w)!==g[O]&&p.setAttribute("morphTarget"+w,g[O]),m&&p.getAttribute("morphNormal"+w)!==m[O]&&p.setAttribute("morphNormal"+w,m[O]),o[w]=L,N+=L):(g&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),m&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),o[w]=0)}const C=p.morphTargetsRelative?1:1-N;_.getUniforms().setValue(r,"morphTargetBaseInfluence",C),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function kA(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class um extends Ln{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Nr,p!==Nr&&p!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Nr&&(i=cr),i===void 0&&p===Ls&&(i=Ur),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:yn,this.minFilter=f!==void 0?f:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fm=new Ln,hm=new um(1,1);hm.compareFunction=Zp;const dm=new em,pm=new by,mm=new am,tp=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function Os(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=tp[o];if(a===void 0&&(a=new Float32Array(o),tp[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function il(r,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function WA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function $A(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;sp.set(i),r.uniformMatrix2fv(this.addr,!1,sp),rn(t,i)}}function KA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;rp.set(i),r.uniformMatrix3fv(this.addr,!1,rp),rn(t,i)}}function ZA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;ip.set(i),r.uniformMatrix4fv(this.addr,!1,ip),rn(t,i)}}function jA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function QA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function tw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function iw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function rw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function sw(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?hm:fm;t.setTexture2D(e||a,o)}function ow(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||pm,o)}function aw(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||mm,o)}function lw(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||dm,o)}function cw(r){switch(r){case 5126:return WA;case 35664:return XA;case 35665:return qA;case 35666:return YA;case 35674:return $A;case 35675:return KA;case 35676:return ZA;case 5124:case 35670:return jA;case 35667:case 35671:return JA;case 35668:case 35672:return QA;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return lw}}function uw(r,e){r.uniform1fv(this.addr,e)}function fw(r,e){const t=Os(e,this.size,2);r.uniform2fv(this.addr,t)}function hw(r,e){const t=Os(e,this.size,3);r.uniform3fv(this.addr,t)}function dw(r,e){const t=Os(e,this.size,4);r.uniform4fv(this.addr,t)}function pw(r,e){const t=Os(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mw(r,e){const t=Os(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gw(r,e){const t=Os(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _w(r,e){r.uniform1iv(this.addr,e)}function vw(r,e){r.uniform2iv(this.addr,e)}function xw(r,e){r.uniform3iv(this.addr,e)}function Sw(r,e){r.uniform4iv(this.addr,e)}function Mw(r,e){r.uniform1uiv(this.addr,e)}function Ew(r,e){r.uniform2uiv(this.addr,e)}function yw(r,e){r.uniform3uiv(this.addr,e)}function bw(r,e){r.uniform4uiv(this.addr,e)}function Tw(r,e,t){const i=this.cache,o=e.length,a=il(t,o);nn(i,a)||(r.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||fm,a[u])}function Aw(r,e,t){const i=this.cache,o=e.length,a=il(t,o);nn(i,a)||(r.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||pm,a[u])}function ww(r,e,t){const i=this.cache,o=e.length,a=il(t,o);nn(i,a)||(r.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||mm,a[u])}function Rw(r,e,t){const i=this.cache,o=e.length,a=il(t,o);nn(i,a)||(r.uniform1iv(this.addr,a),rn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||dm,a[u])}function Cw(r){switch(r){case 5126:return uw;case 35664:return fw;case 35665:return hw;case 35666:return dw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return _w;case 35667:case 35671:return vw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return yw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Rw}}class Pw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cw(t.type)}}class Lw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cw(t.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function op(r,e){r.seq.push(e),r.map[e.id]=e}function Iw(r,e,t){const i=r.name,o=i.length;for(Xc.lastIndex=0;;){const a=Xc.exec(i),u=Xc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){op(t,d===void 0?new Pw(c,r,e):new Lw(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new Dw(c),op(t,_)),t=_}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Iw(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function ap(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Uw=37297;let Nw=0;function Ow(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function Fw(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let i;switch(e===t?i="":e===Wa&&t===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&t===Wa&&(i="LinearSRGBToLinearDisplayP3"),r){case pr:case Qa:return[i,"LinearTransferOETF"];case _i:case vu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function lp(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Ow(r.getShaderSource(e),u)}else return o}function Bw(r,e){const t=Fw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zw(r,e){let t;switch(e){case LE:t="Linear";break;case DE:t="Reinhard";break;case IE:t="OptimizedCineon";break;case UE:t="ACESFilmic";break;case OE:t="AgX";break;case FE:t="Neutral";break;case NE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gw(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Hw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Vw(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kw(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function Ts(r){return r!==""}function cp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(r){return r.replace(Ww,qw)}const Xw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qw(r,e){let t=mt[e];if(t===void 0){const i=Xw.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(r){return r.replace(Yw,$w)}function $w(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function hp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Kw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sE?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Jw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case PE:e="ENVMAP_BLENDING_ADD";break}return e}function Qw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eR(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=Kw(t),d=Zw(t),p=jw(t),_=Jw(t),v=Qw(t),x=t.isWebGL2?"":Gw(t),M=Hw(t),b=Vw(a),g=o.createProgram();let m,N,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ts).join(`
`),m.length>0&&(m+=`
`),N=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ts).join(`
`),N.length>0&&(N+=`
`)):(m=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),N=[x,hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?mt.tonemapping_pars_fragment:"",t.toneMapping!==fr?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Bw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),u=fu(u),u=cp(u,t),u=up(u,t),c=fu(c),c=cp(c,t),c=up(c,t),u=fp(u),c=fp(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const w=C+m+u,F=C+N+c,O=ap(o,o.VERTEX_SHADER,w),L=ap(o,o.FRAGMENT_SHADER,F);o.attachShader(g,O),o.attachShader(g,L),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function Y(xe){if(r.debug.checkShaderErrors){const me=o.getProgramInfoLog(g).trim(),G=o.getShaderInfoLog(O).trim(),se=o.getShaderInfoLog(L).trim();let ne=!0,ue=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,g,O,L);else{const te=lp(o,O,"vertex"),ce=lp(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+xe.name+`
Material Type: `+xe.type+`

Program Info Log: `+me+`
`+te+`
`+ce)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(G===""||se==="")&&(ue=!1);ue&&(xe.diagnostics={runnable:ne,programLog:me,vertexShader:{log:G,prefix:m},fragmentShader:{log:se,prefix:N}})}o.deleteShader(O),o.deleteShader(L),ve=new Ba(o,g),T=kw(o,g)}let ve;this.getUniforms=function(){return ve===void 0&&Y(this),ve};let T;this.getAttributes=function(){return T===void 0&&Y(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(g,Uw)),U},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=L,this}let tR=0;class nR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iR(e),t.set(e,i)),i}}class iR{constructor(e){this.id=tR++,this.code=e,this.usedTimes=0}}function rR(r,e,t,i,o,a,u){const c=new Su,f=new nR,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return d.add(T),T===0?"uv":`uv${T}`}function m(T,U,xe,me,G){const se=me.fog,ne=G.geometry,ue=T.isMeshStandardMaterial?me.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ue),ce=te&&te.mapping===Ja?te.image.height:null,fe=b[T.type];T.precision!==null&&(M=o.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const Se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ie=Se!==void 0?Se.length:0;let tt=0;ne.morphAttributes.position!==void 0&&(tt=1),ne.morphAttributes.normal!==void 0&&(tt=2),ne.morphAttributes.color!==void 0&&(tt=3);let Q,de,Re,je;if(fe){const yt=vi[fe];Q=yt.vertexShader,de=yt.fragmentShader}else Q=T.vertexShader,de=T.fragmentShader,f.update(T),Re=f.getVertexShaderID(T),je=f.getFragmentShaderID(T);const Oe=r.getRenderTarget(),Ce=G.isInstancedMesh===!0,Mt=G.isBatchedMesh===!0,ke=!!T.map,W=!!T.matcap,Xt=!!te,Ue=!!T.aoMap,Je=!!T.lightMap,Ve=!!T.bumpMap,et=!!T.normalMap,nt=!!T.displacementMap,ct=!!T.emissiveMap,Tt=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,ee=T.clearcoat>0,oe=T.iridescence>0,ge=T.sheen>0,pe=T.transmission>0,Ze=E&&!!T.anisotropyMap,He=ee&&!!T.clearcoatMap,ye=ee&&!!T.clearcoatNormalMap,Te=ee&&!!T.clearcoatRoughnessMap,Qe=oe&&!!T.iridescenceMap,Ee=oe&&!!T.iridescenceThicknessMap,Ot=ge&&!!T.sheenColorMap,ot=ge&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Le=!!T.specularColorMap,Fe=!!T.specularIntensityMap,D=pe&&!!T.transmissionMap,le=pe&&!!T.thicknessMap,Ne=!!T.gradientMap,B=!!T.alphaMap,Me=T.alphaTest>0,q=!!T.alphaHash,_e=!!T.extensions;let we=fr;T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const dt={isWebGL2:_,shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:de,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Mt,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:pr,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:W,envMap:Xt,envMapMode:Xt&&te.mapping,envMapCubeUVHeight:ce,aoMap:Ue,lightMap:Je,bumpMap:Ve,normalMap:et,displacementMap:x&&nt,emissiveMap:ct,normalMapObjectSpace:et&&T.normalMapType===KE,normalMapTangentSpace:et&&T.normalMapType===$E,metalnessMap:Tt,roughnessMap:P,anisotropy:E,anisotropyMap:Ze,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,iridescence:oe,iridescenceMap:Qe,iridescenceThicknessMap:Ee,sheen:ge,sheenColorMap:Ot,sheenRoughnessMap:ot,specularMap:Ge,specularColorMap:Le,specularIntensityMap:Fe,transmission:pe,transmissionMap:D,thicknessMap:le,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===As&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:Me,alphaHash:q,combine:T.combine,mapUv:ke&&g(T.map.channel),aoMapUv:Ue&&g(T.aoMap.channel),lightMapUv:Je&&g(T.lightMap.channel),bumpMapUv:Ve&&g(T.bumpMap.channel),normalMapUv:et&&g(T.normalMap.channel),displacementMapUv:nt&&g(T.displacementMap.channel),emissiveMapUv:ct&&g(T.emissiveMap.channel),metalnessMapUv:Tt&&g(T.metalnessMap.channel),roughnessMapUv:P&&g(T.roughnessMap.channel),anisotropyMapUv:Ze&&g(T.anisotropyMap.channel),clearcoatMapUv:He&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:ot&&g(T.sheenRoughnessMap.channel),specularMapUv:Ge&&g(T.specularMap.channel),specularColorMapUv:Le&&g(T.specularColorMap.channel),specularIntensityMapUv:Fe&&g(T.specularIntensityMap.channel),transmissionMapUv:D&&g(T.transmissionMap.channel),thicknessMapUv:le&&g(T.thicknessMap.channel),alphaMapUv:B&&g(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(et||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(ke||B),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:tt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&xe.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===Pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:_e&&T.extensions.derivatives===!0,extensionFragDepth:_e&&T.extensions.fragDepth===!0,extensionDrawBuffers:_e&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_e&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=d.has(1),dt.vertexUv2s=d.has(2),dt.vertexUv3s=d.has(3),d.clear(),dt}function N(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const xe in T.defines)U.push(xe),U.push(T.defines[xe]);return T.isRawShaderMaterial===!1&&(C(U,T),w(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function C(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function w(T,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),T.push(c.mask)}function F(T){const U=b[T.type];let xe;if(U){const me=vi[U];xe=Fy.clone(me.uniforms)}else xe=T.uniforms;return xe}function O(T,U){let xe;for(let me=0,G=p.length;me<G;me++){const se=p[me];if(se.cacheKey===U){xe=se,++xe.usedTimes;break}}return xe===void 0&&(xe=new eR(r,U,T,a),p.push(xe)),xe}function L(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),T.destroy()}}function Y(T){f.remove(T)}function ve(){f.dispose()}return{getParameters:m,getProgramCacheKey:N,getUniforms:F,acquireProgram:O,releaseProgram:L,releaseShaderCache:Y,programs:p,dispose:ve}}function sR(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function oR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pp(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,M,b,g){let m=r[e];return m===void 0?(m={id:_.id,object:_,geometry:v,material:x,groupOrder:M,renderOrder:_.renderOrder,z:b,group:g},r[e]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=x,m.groupOrder=M,m.renderOrder=_.renderOrder,m.z=b,m.group=g),e++,m}function c(_,v,x,M,b,g){const m=u(_,v,x,M,b,g);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):t.push(m)}function f(_,v,x,M,b,g){const m=u(_,v,x,M,b,g);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):t.unshift(m)}function d(_,v){t.length>1&&t.sort(_||oR),i.length>1&&i.sort(v||dp),o.length>1&&o.sort(v||dp)}function p(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function aR(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new pp,r.set(i,[u])):o>=a.length?(u=new pp,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function lR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new bt};break;case"SpotLight":t={position:new X,direction:new X,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function cR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uR=0;function fR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hR(r,e){const t=new lR,i=cR(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,u=new jt,c=new jt;function f(p,_){let v=0,x=0,M=0;for(let xe=0;xe<9;xe++)o.probe[xe].set(0,0,0);let b=0,g=0,m=0,N=0,C=0,w=0,F=0,O=0,L=0,Y=0,ve=0;p.sort(fR);const T=_===!0?Math.PI:1;for(let xe=0,me=p.length;xe<me;xe++){const G=p[xe],se=G.color,ne=G.intensity,ue=G.distance,te=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=se.r*ne*T,x+=se.g*ne*T,M+=se.b*ne*T;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)o.probe[ce].addScaledVector(G.sh.coefficients[ce],ne);ve++}else if(G.isDirectionalLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*T),G.castShadow){const fe=G.shadow,Se=i.get(G);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,o.directionalShadow[b]=Se,o.directionalShadowMap[b]=te,o.directionalShadowMatrix[b]=G.shadow.matrix,w++}o.directional[b]=ce,b++}else if(G.isSpotLight){const ce=t.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(se).multiplyScalar(ne*T),ce.distance=ue,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,o.spot[m]=ce;const fe=G.shadow;if(G.map&&(o.spotLightMap[L]=G.map,L++,fe.updateMatrices(G),G.castShadow&&Y++),o.spotLightMatrix[m]=fe.matrix,G.castShadow){const Se=i.get(G);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,o.spotShadow[m]=Se,o.spotShadowMap[m]=te,O++}m++}else if(G.isRectAreaLight){const ce=t.get(G);ce.color.copy(se).multiplyScalar(ne),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),o.rectArea[N]=ce,N++}else if(G.isPointLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*T),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const fe=G.shadow,Se=i.get(G);Se.shadowBias=fe.bias,Se.shadowNormalBias=fe.normalBias,Se.shadowRadius=fe.radius,Se.shadowMapSize=fe.mapSize,Se.shadowCameraNear=fe.camera.near,Se.shadowCameraFar=fe.camera.far,o.pointShadow[g]=Se,o.pointShadowMap[g]=te,o.pointShadowMatrix[g]=G.shadow.matrix,F++}o.point[g]=ce,g++}else if(G.isHemisphereLight){const ce=t.get(G);ce.skyColor.copy(G.color).multiplyScalar(ne*T),ce.groundColor.copy(G.groundColor).multiplyScalar(ne*T),o.hemi[C]=ce,C++}}N>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=be.LTC_FLOAT_1,o.rectAreaLTC2=be.LTC_FLOAT_2):(o.rectAreaLTC1=be.LTC_HALF_1,o.rectAreaLTC2=be.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=be.LTC_FLOAT_1,o.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=be.LTC_HALF_1,o.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=M;const U=o.hash;(U.directionalLength!==b||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==N||U.hemiLength!==C||U.numDirectionalShadows!==w||U.numPointShadows!==F||U.numSpotShadows!==O||U.numSpotMaps!==L||U.numLightProbes!==ve)&&(o.directional.length=b,o.spot.length=m,o.rectArea.length=N,o.point.length=g,o.hemi.length=C,o.directionalShadow.length=w,o.directionalShadowMap.length=w,o.pointShadow.length=F,o.pointShadowMap.length=F,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=w,o.pointShadowMatrix.length=F,o.spotLightMatrix.length=O+L-Y,o.spotLightMap.length=L,o.numSpotLightShadowsWithMaps=Y,o.numLightProbes=ve,U.directionalLength=b,U.pointLength=g,U.spotLength=m,U.rectAreaLength=N,U.hemiLength=C,U.numDirectionalShadows=w,U.numPointShadows=F,U.numSpotShadows=O,U.numSpotMaps=L,U.numLightProbes=ve,o.version=uR++)}function d(p,_){let v=0,x=0,M=0,b=0,g=0;const m=_.matrixWorldInverse;for(let N=0,C=p.length;N<C;N++){const w=p[N];if(w.isDirectionalLight){const F=o.directional[v];F.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(m),v++}else if(w.isSpotLight){const F=o.spot[M];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(m),F.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(m),M++}else if(w.isRectAreaLight){const F=o.rectArea[b];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(m),c.identity(),u.copy(w.matrixWorld),u.premultiply(m),c.extractRotation(u),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),b++}else if(w.isPointLight){const F=o.point[x];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(m),x++}else if(w.isHemisphereLight){const F=o.hemi[g];F.direction.setFromMatrixPosition(w.matrixWorld),F.direction.transformDirection(m),g++}}}return{setup:f,setupView:d,state:o}}function mp(r,e){const t=new hR(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function dR(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new mp(r,e),t.set(a,[f])):u>=c.length?(f=new mp(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class pR extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mR extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_R=`uniform sampler2D shadow_pass;
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
}`;function vR(r,e,t){let i=new lm;const o=new st,a=new st,u=new un,c=new pR({depthPacking:YE}),f=new mR,d={},p=t.maxTextureSize,_={[dr]:Pn,[Pn]:dr,[Bi]:Bi},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:gR,fragmentShader:_R}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Mi;M.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Hi(M,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let m=this.type;this.render=function(O,L,Y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;const ve=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),xe=r.state;xe.setBlending(ur),xe.buffers.color.setClear(1,1,1,1),xe.buffers.depth.setTest(!0),xe.setScissorTest(!1);const me=m!==Fi&&this.type===Fi,G=m===Fi&&this.type!==Fi;for(let se=0,ne=O.length;se<ne;se++){const ue=O[se],te=ue.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ce=te.getFrameExtents();if(o.multiply(ce),a.copy(te.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ce.x),o.x=a.x*ce.x,te.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ce.y),o.y=a.y*ce.y,te.mapSize.y=a.y)),te.map===null||me===!0||G===!0){const Se=this.type!==Fi?{minFilter:yn,magFilter:yn}:{};te.map!==null&&te.map.dispose(),te.map=new Br(o.x,o.y,Se),te.map.texture.name=ue.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const fe=te.getViewportCount();for(let Se=0;Se<fe;Se++){const Ie=te.getViewport(Se);u.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),xe.viewport(u),te.updateMatrices(ue,Se),i=te.getFrustum(),w(L,Y,te.camera,ue,this.type)}te.isPointLightShadow!==!0&&this.type===Fi&&N(te,Y),te.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(ve,T,U)};function N(O,L){const Y=e.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Br(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(L,null,Y,v,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(L,null,Y,x,b,null)}function C(O,L,Y,ve){let T=null;const U=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(U!==void 0)T=U;else if(T=Y.isPointLight===!0?f:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const xe=T.uuid,me=L.uuid;let G=d[xe];G===void 0&&(G={},d[xe]=G);let se=G[me];se===void 0&&(se=T.clone(),G[me]=se,L.addEventListener("dispose",F)),T=se}if(T.visible=L.visible,T.wireframe=L.wireframe,ve===Fi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:_[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,Y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const xe=r.properties.get(T);xe.light=Y}return T}function w(O,L,Y,ve,T){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Fi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const me=e.update(O),G=O.material;if(Array.isArray(G)){const se=me.groups;for(let ne=0,ue=se.length;ne<ue;ne++){const te=se[ne],ce=G[te.materialIndex];if(ce&&ce.visible){const fe=C(O,ce,ve,T);O.onBeforeShadow(r,O,L,Y,me,fe,te),r.renderBufferDirect(Y,null,me,fe,O,te),O.onAfterShadow(r,O,L,Y,me,fe,te)}}}else if(G.visible){const se=C(O,G,ve,T);O.onBeforeShadow(r,O,L,Y,me,se,null),r.renderBufferDirect(Y,null,me,se,O,null),O.onAfterShadow(r,O,L,Y,me,se,null)}}const xe=O.children;for(let me=0,G=xe.length;me<G;me++)w(xe[me],L,Y,ve,T)}function F(O){O.target.removeEventListener("dispose",F);for(const Y in d){const ve=d[Y],T=O.target.uuid;T in ve&&(ve[T].dispose(),delete ve[T])}}}function xR(r,e,t){const i=t.isWebGL2;function o(){let B=!1;const Me=new un;let q=null;const _e=new un(0,0,0,0);return{setMask:function(we){q!==we&&!B&&(r.colorMask(we,we,we,we),q=we)},setLocked:function(we){B=we},setClear:function(we,dt,yt,Pt,Ht){Ht===!0&&(we*=Pt,dt*=Pt,yt*=Pt),Me.set(we,dt,yt,Pt),_e.equals(Me)===!1&&(r.clearColor(we,dt,yt,Pt),_e.copy(Me))},reset:function(){B=!1,q=null,_e.set(-1,0,0,0)}}}function a(){let B=!1,Me=null,q=null,_e=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!B&&(r.depthMask(we),Me=we)},setFunc:function(we){if(q!==we){switch(we){case EE:r.depthFunc(r.NEVER);break;case yE:r.depthFunc(r.ALWAYS);break;case bE:r.depthFunc(r.LESS);break;case Ha:r.depthFunc(r.LEQUAL);break;case TE:r.depthFunc(r.EQUAL);break;case AE:r.depthFunc(r.GEQUAL);break;case wE:r.depthFunc(r.GREATER);break;case RE:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=we}},setLocked:function(we){B=we},setClear:function(we){_e!==we&&(r.clearDepth(we),_e=we)},reset:function(){B=!1,Me=null,q=null,_e=null}}}function u(){let B=!1,Me=null,q=null,_e=null,we=null,dt=null,yt=null,Pt=null,Ht=null;return{setTest:function(Et){B||(Et?Ce(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Et){Me!==Et&&!B&&(r.stencilMask(Et),Me=Et)},setFunc:function(Et,Lt,sn){(q!==Et||_e!==Lt||we!==sn)&&(r.stencilFunc(Et,Lt,sn),q=Et,_e=Lt,we=sn)},setOp:function(Et,Lt,sn){(dt!==Et||yt!==Lt||Pt!==sn)&&(r.stencilOp(Et,Lt,sn),dt=Et,yt=Lt,Pt=sn)},setLocked:function(Et){B=Et},setClear:function(Et){Ht!==Et&&(r.clearStencil(Et),Ht=Et)},reset:function(){B=!1,Me=null,q=null,_e=null,we=null,dt=null,yt=null,Pt=null,Ht=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},x={},M=new WeakMap,b=[],g=null,m=!1,N=null,C=null,w=null,F=null,O=null,L=null,Y=null,ve=new bt(0,0,0),T=0,U=!1,xe=null,me=null,G=null,se=null,ne=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ce=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(fe)[1]),te=ce>=1):fe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),te=ce>=2);let Se=null,Ie={};const tt=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),de=new un().fromArray(tt),Re=new un().fromArray(Q);function je(B,Me,q,_e){const we=new Uint8Array(4),dt=r.createTexture();r.bindTexture(B,dt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<q;yt++)i&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Me+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return dt}const Oe={};Oe[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Ha),nt(!1),ct($h),Ce(r.CULL_FACE),Ve(ur);function Ce(B){v[B]!==!0&&(r.enable(B),v[B]=!0)}function Mt(B){v[B]!==!1&&(r.disable(B),v[B]=!1)}function ke(B,Me){return x[B]!==Me?(r.bindFramebuffer(B,Me),x[B]=Me,i&&(B===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Me),B===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function W(B,Me){let q=b,_e=!1;if(B){q=M.get(Me),q===void 0&&(q=[],M.set(Me,q));const we=B.textures;if(q.length!==we.length||q[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,yt=we.length;dt<yt;dt++)q[dt]=r.COLOR_ATTACHMENT0+dt;q.length=we.length,_e=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,_e=!0);if(_e)if(t.isWebGL2)r.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Xt(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Ue={[Lr]:r.FUNC_ADD,[aE]:r.FUNC_SUBTRACT,[lE]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[Jh]=r.MIN,Ue[Qh]=r.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ue[Jh]=B.MIN_EXT,Ue[Qh]=B.MAX_EXT)}const Je={[cE]:r.ZERO,[uE]:r.ONE,[fE]:r.SRC_COLOR,[iu]:r.SRC_ALPHA,[_E]:r.SRC_ALPHA_SATURATE,[mE]:r.DST_COLOR,[dE]:r.DST_ALPHA,[hE]:r.ONE_MINUS_SRC_COLOR,[ru]:r.ONE_MINUS_SRC_ALPHA,[gE]:r.ONE_MINUS_DST_COLOR,[pE]:r.ONE_MINUS_DST_ALPHA,[vE]:r.CONSTANT_COLOR,[xE]:r.ONE_MINUS_CONSTANT_COLOR,[SE]:r.CONSTANT_ALPHA,[ME]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(B,Me,q,_e,we,dt,yt,Pt,Ht,Et){if(B===ur){m===!0&&(Mt(r.BLEND),m=!1);return}if(m===!1&&(Ce(r.BLEND),m=!0),B!==oE){if(B!==N||Et!==U){if((C!==Lr||O!==Lr)&&(r.blendEquation(r.FUNC_ADD),C=Lr,O=Lr),Et)switch(B){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kh:r.blendFunc(r.ONE,r.ONE);break;case Zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,F=null,L=null,Y=null,ve.set(0,0,0),T=0,N=B,U=Et}return}we=we||Me,dt=dt||q,yt=yt||_e,(Me!==C||we!==O)&&(r.blendEquationSeparate(Ue[Me],Ue[we]),C=Me,O=we),(q!==w||_e!==F||dt!==L||yt!==Y)&&(r.blendFuncSeparate(Je[q],Je[_e],Je[dt],Je[yt]),w=q,F=_e,L=dt,Y=yt),(Pt.equals(ve)===!1||Ht!==T)&&(r.blendColor(Pt.r,Pt.g,Pt.b,Ht),ve.copy(Pt),T=Ht),N=B,U=!1}function et(B,Me){B.side===Bi?Mt(r.CULL_FACE):Ce(r.CULL_FACE);let q=B.side===Pn;Me&&(q=!q),nt(q),B.blending===As&&B.transparent===!1?Ve(ur):Ve(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),c.setMask(B.colorWrite);const _e=B.stencilWrite;d.setTest(_e),_e&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),P(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(B){xe!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),xe=B)}function ct(B){B!==iE?(Ce(r.CULL_FACE),B!==me&&(B===$h?r.cullFace(r.BACK):B===rE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),me=B}function Tt(B){B!==G&&(te&&r.lineWidth(B),G=B)}function P(B,Me,q){B?(Ce(r.POLYGON_OFFSET_FILL),(se!==Me||ne!==q)&&(r.polygonOffset(Me,q),se=Me,ne=q)):Mt(r.POLYGON_OFFSET_FILL)}function E(B){B?Ce(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ee(B){B===void 0&&(B=r.TEXTURE0+ue-1),Se!==B&&(r.activeTexture(B),Se=B)}function oe(B,Me,q){q===void 0&&(Se===null?q=r.TEXTURE0+ue-1:q=Se);let _e=Ie[q];_e===void 0&&(_e={type:void 0,texture:void 0},Ie[q]=_e),(_e.type!==B||_e.texture!==Me)&&(Se!==q&&(r.activeTexture(q),Se=q),r.bindTexture(B,Me||Oe[B]),_e.type=B,_e.texture=Me)}function ge(){const B=Ie[Se];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){de.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function Fe(B){Re.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Re.copy(B))}function D(B,Me){let q=_.get(Me);q===void 0&&(q=new WeakMap,_.set(Me,q));let _e=q.get(B);_e===void 0&&(_e=r.getUniformBlockIndex(Me,B.name),q.set(B,_e))}function le(B,Me){const _e=_.get(Me).get(B);p.get(Me)!==_e&&(r.uniformBlockBinding(Me,_e,B.__bindingPointIndex),p.set(Me,_e))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,Ie={},x={},M=new WeakMap,b=[],g=null,m=!1,N=null,C=null,w=null,F=null,O=null,L=null,Y=null,ve=new bt(0,0,0),T=0,U=!1,xe=null,me=null,G=null,se=null,ne=null,de.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:Mt,bindFramebuffer:ke,drawBuffers:W,useProgram:Xt,setBlending:Ve,setMaterial:et,setFlipSided:nt,setCullFace:ct,setLineWidth:Tt,setPolygonOffset:P,setScissorTest:E,activeTexture:ee,bindTexture:oe,unbindTexture:ge,compressedTexImage2D:pe,compressedTexImage3D:Ze,texImage2D:ot,texImage3D:Ge,updateUBOMapping:D,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Ot,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:Te,compressedTexSubImage3D:Qe,scissor:Le,viewport:Fe,reset:Ne}}function SR(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new st,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return M?new OffscreenCanvas(P,E):Ya("canvas")}function g(P,E,ee,oe){let ge=1;const pe=Tt(P);if((pe.width>oe||pe.height>oe)&&(ge=oe/Math.max(pe.width,pe.height)),ge<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ze=E?qa:Math.floor,He=Ze(ge*pe.width),ye=Ze(ge*pe.height);v===void 0&&(v=b(He,ye));const Te=ee?b(He,ye):v;return Te.width=He,Te.height=ye,Te.getContext("2d").drawImage(P,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+He+"x"+ye+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function m(P){const E=Tt(P);return uu(E.width)&&uu(E.height)}function N(P){return c?!1:P.wrapS!==li||P.wrapT!==li||P.minFilter!==yn&&P.minFilter!==Cn}function C(P,E){return P.generateMipmaps&&E&&P.minFilter!==yn&&P.minFilter!==Cn}function w(P){r.generateMipmap(P)}function F(P,E,ee,oe,ge=!1){if(c===!1)return E;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=E;if(E===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),E===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),E===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),E===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),E===r.RGBA){const Ze=ge?Va:It.getTransfer(oe);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=Ze===Gt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(P,E,ee){return C(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){return P===yn||P===ed||P===to?r.NEAREST:r.LINEAR}function Y(P){const E=P.target;E.removeEventListener("dispose",Y),T(E),E.isVideoTexture&&_.delete(E)}function ve(P){const E=P.target;E.removeEventListener("dispose",ve),xe(E)}function T(P){const E=i.get(P);if(E.__webglInit===void 0)return;const ee=P.source,oe=x.get(ee);if(oe){const ge=oe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&U(P),Object.keys(oe).length===0&&x.delete(ee)}i.remove(P)}function U(P){const E=i.get(P);r.deleteTexture(E.__webglTexture);const ee=P.source,oe=x.get(ee);delete oe[E.__cacheKey],u.memory.textures--}function xe(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let ge=0;ge<E.__webglFramebuffer[oe].length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[oe][ge]);else r.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)r.deleteFramebuffer(E.__webglFramebuffer[oe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=P.textures;for(let oe=0,ge=ee.length;oe<ge;oe++){const pe=i.get(ee[oe]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(P)}let me=0;function G(){me=0}function se(){const P=me;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),me+=1,P}function ne(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ue(P,E){const ee=i.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,P,E);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+E)}function te(P,E){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){Re(ee,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+E)}function ce(P,E){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){Re(ee,P,E);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+E)}function fe(P,E){const ee=i.get(P);if(P.version>0&&ee.__version!==P.version){je(ee,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+E)}const Se={[au]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[lu]:r.MIRRORED_REPEAT},Ie={[yn]:r.NEAREST,[ed]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},tt={[ZE]:r.NEVER,[ny]:r.ALWAYS,[jE]:r.LESS,[Zp]:r.LEQUAL,[JE]:r.EQUAL,[ty]:r.GEQUAL,[QE]:r.GREATER,[ey]:r.NOTEQUAL};function Q(P,E,ee){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===gc||E.magFilter===to||E.magFilter===Ir||E.minFilter===Cn||E.minFilter===gc||E.minFilter===to||E.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(P,r.TEXTURE_WRAP_S,Se[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ie[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ie[E.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==li||E.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,L(E.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==yn&&E.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==to&&E.minFilter!==Ir||E.type===zi&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===uo&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function de(P,E){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",Y));const oe=E.source;let ge=x.get(oe);ge===void 0&&(ge={},x.set(oe,ge));const pe=ne(E);if(pe!==P.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ge[pe].usedTimes++;const Ze=ge[P.__cacheKey];Ze!==void 0&&(ge[P.__cacheKey].usedTimes--,Ze.usedTimes===0&&U(E)),P.__cacheKey=pe,P.__webglTexture=ge[pe].texture}return ee}function Re(P,E,ee){let oe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=r.TEXTURE_3D);const ge=de(P,E),pe=E.source;t.bindTexture(oe,P.__webglTexture,r.TEXTURE0+ee);const Ze=i.get(pe);if(pe.version!==Ze.__version||ge===!0){t.activeTexture(r.TEXTURE0+ee);const He=It.getPrimaries(It.workingColorSpace),ye=E.colorSpace===ar?null:It.getPrimaries(E.colorSpace),Te=E.colorSpace===ar||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Qe=N(E)&&m(E.image)===!1;let Ee=g(E.image,Qe,!1,o.maxTextureSize);Ee=ct(E,Ee);const Ot=m(Ee)||c,ot=a.convert(E.format,E.colorSpace);let Ge=a.convert(E.type),Le=F(E.internalFormat,ot,Ge,E.colorSpace,E.isVideoTexture);Q(oe,E,Ot);let Fe;const D=E.mipmaps,le=c&&E.isVideoTexture!==!0&&Le!==Kp,Ne=Ze.__version===void 0||ge===!0,B=pe.dataReady,Me=O(E,Ee,Ot);if(E.isDepthTexture)Le=r.DEPTH_COMPONENT,c?E.type===zi?Le=r.DEPTH_COMPONENT32F:E.type===cr?Le=r.DEPTH_COMPONENT24:E.type===Ur?Le=r.DEPTH24_STENCIL8:Le=r.DEPTH_COMPONENT16:E.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Nr&&Le===r.DEPTH_COMPONENT&&E.type!==_u&&E.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=cr,Ge=a.convert(E.type)),E.format===Ls&&Le===r.DEPTH_COMPONENT&&(Le=r.DEPTH_STENCIL,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,Ge=a.convert(E.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Le,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,ot,Ge,null));else if(E.isDataTexture)if(D.length>0&&Ot){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Le,D[0].width,D[0].height);for(let q=0,_e=D.length;q<_e;q++)Fe=D[q],le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,ot,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Le,Fe.width,Fe.height,0,ot,Ge,Fe.data);E.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Le,Ee.width,Ee.height),B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ot,Ge,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,ot,Ge,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Le,D[0].width,D[0].height,Ee.depth);for(let q=0,_e=D.length;q<_e;q++)Fe=D[q],E.format!==ci?ot!==null?le?B&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,ot,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Le,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,ot,Ge,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Le,Fe.width,Fe.height,Ee.depth,0,ot,Ge,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Le,D[0].width,D[0].height);for(let q=0,_e=D.length;q<_e;q++)Fe=D[q],E.format!==ci?ot!==null?le?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,ot,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Le,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,ot,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Le,Fe.width,Fe.height,0,ot,Ge,Fe.data)}else if(E.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Le,Ee.width,Ee.height,Ee.depth),B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ot,Ge,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,Ee.width,Ee.height,Ee.depth,0,ot,Ge,Ee.data);else if(E.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,Me,Le,Ee.width,Ee.height,Ee.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ot,Ge,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Le,Ee.width,Ee.height,Ee.depth,0,ot,Ge,Ee.data);else if(E.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,Me,Le,Ee.width,Ee.height);else{let q=Ee.width,_e=Ee.height;for(let we=0;we<Me;we++)t.texImage2D(r.TEXTURE_2D,we,Le,q,_e,0,ot,Ge,null),q>>=1,_e>>=1}}else if(D.length>0&&Ot){if(le&&Ne){const q=Tt(D[0]);t.texStorage2D(r.TEXTURE_2D,Me,Le,q.width,q.height)}for(let q=0,_e=D.length;q<_e;q++)Fe=D[q],le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ot,Ge,Fe):t.texImage2D(r.TEXTURE_2D,q,Le,ot,Ge,Fe);E.generateMipmaps=!1}else if(le){if(Ne){const q=Tt(Ee);t.texStorage2D(r.TEXTURE_2D,Me,Le,q.width,q.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Ge,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Le,ot,Ge,Ee);C(E,Ot)&&w(oe),Ze.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function je(P,E,ee){if(E.image.length!==6)return;const oe=de(P,E),ge=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+ee);const pe=i.get(ge);if(ge.version!==pe.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Ze=It.getPrimaries(It.workingColorSpace),He=E.colorSpace===ar?null:It.getPrimaries(E.colorSpace),ye=E.colorSpace===ar||Ze===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Qe=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let q=0;q<6;q++)!Te&&!Qe?Ee[q]=g(E.image[q],!1,!0,o.maxCubemapSize):Ee[q]=Qe?E.image[q].image:E.image[q],Ee[q]=ct(E,Ee[q]);const Ot=Ee[0],ot=m(Ot)||c,Ge=a.convert(E.format,E.colorSpace),Le=a.convert(E.type),Fe=F(E.internalFormat,Ge,Le,E.colorSpace),D=c&&E.isVideoTexture!==!0,le=pe.__version===void 0||oe===!0,Ne=ge.dataReady;let B=O(E,Ot,ot);Q(r.TEXTURE_CUBE_MAP,E,ot);let Me;if(Te){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Fe,Ot.width,Ot.height);for(let q=0;q<6;q++){Me=Ee[q].mipmaps;for(let _e=0;_e<Me.length;_e++){const we=Me[_e];E.format!==ci?Ge!==null?D?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,we.width,we.height,Ge,Le,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Fe,we.width,we.height,0,Ge,Le,we.data)}}}else{if(Me=E.mipmaps,D&&le){Me.length>0&&B++;const q=Tt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Fe,q.width,q.height)}for(let q=0;q<6;q++)if(Qe){D?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee[q].width,Ee[q].height,Ge,Le,Ee[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Ee[q].width,Ee[q].height,0,Ge,Le,Ee[q].data);for(let _e=0;_e<Me.length;_e++){const dt=Me[_e].image[q].image;D?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,dt.width,dt.height,Ge,Le,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Fe,dt.width,dt.height,0,Ge,Le,dt.data)}}else{D?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ge,Le,Ee[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Ge,Le,Ee[q]);for(let _e=0;_e<Me.length;_e++){const we=Me[_e];D?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,Ge,Le,we.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Fe,Ge,Le,we.image[q])}}}C(E,ot)&&w(r.TEXTURE_CUBE_MAP),pe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Oe(P,E,ee,oe,ge,pe){const Ze=a.convert(ee.format,ee.colorSpace),He=a.convert(ee.type),ye=F(ee.internalFormat,Ze,He,ee.colorSpace);if(!i.get(E).__hasExternalTextures){const Qe=Math.max(1,E.width>>pe),Ee=Math.max(1,E.height>>pe);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,pe,ye,Qe,Ee,E.depth,0,Ze,He,null):t.texImage2D(ge,pe,ye,Qe,Ee,0,Ze,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),et(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ge,i.get(ee).__webglTexture,0,Ve(E)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ge,i.get(ee).__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(P,E,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||et(E)){const ge=E.depthTexture;ge&&ge.isDepthTexture&&(ge.type===zi?oe=r.DEPTH_COMPONENT32F:ge.type===cr&&(oe=r.DEPTH_COMPONENT24));const pe=Ve(E);et(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,oe,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,oe,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const oe=Ve(E);ee&&et(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,E.width,E.height):et(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const oe=E.textures;for(let ge=0;ge<oe.length;ge++){const pe=oe[ge],Ze=a.convert(pe.format,pe.colorSpace),He=a.convert(pe.type),ye=F(pe.internalFormat,Ze,He,pe.colorSpace),Te=Ve(E);ee&&et(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ye,E.width,E.height):et(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ye,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ye,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue(E.depthTexture,0);const oe=i.get(E.depthTexture).__webglTexture,ge=Ve(E);if(E.depthTexture.format===Nr)et(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Ls)et(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(P){const E=i.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Mt(E.__webglFramebuffer,P)}else if(ee){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(E.__webglDepthbuffer[oe],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ce(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(P,E,ee){const oe=i.get(P);E!==void 0&&Oe(oe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ke(P)}function Xt(P){const E=P.texture,ee=i.get(P),oe=i.get(E);P.addEventListener("dispose",ve);const ge=P.textures,pe=P.isWebGLCubeRenderTarget===!0,Ze=ge.length>1,He=m(P)||c;if(Ze||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=E.version,u.memory.textures++),pe){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let Te=0;Te<E.mipmaps.length;Te++)ee.__webglFramebuffer[ye][Te]=r.createFramebuffer()}else ee.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ze)if(o.drawBuffers)for(let ye=0,Te=ge.length;ye<Te;ye++){const Qe=i.get(ge[ye]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&et(P)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Te=ge[ye];ee.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const Qe=a.convert(Te.format,Te.colorSpace),Ee=a.convert(Te.type),Ot=F(Te.internalFormat,Qe,Ee,Te.colorSpace,P.isXRRenderTarget===!0),ot=Ve(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Ot,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(r.TEXTURE_CUBE_MAP,E,He);for(let ye=0;ye<6;ye++)if(c&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)Oe(ee.__webglFramebuffer[ye][Te],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else Oe(ee.__webglFramebuffer[ye],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);C(E,He)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let ye=0,Te=ge.length;ye<Te;ye++){const Qe=ge[ye],Ee=i.get(Qe);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Q(r.TEXTURE_2D,Qe,He),Oe(ee.__webglFramebuffer,P,Qe,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),C(Qe,He)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),Q(ye,E,He),c&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)Oe(ee.__webglFramebuffer[Te],P,E,r.COLOR_ATTACHMENT0,ye,Te);else Oe(ee.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ye,0);C(E,He)&&w(ye),t.unbindTexture()}P.depthBuffer&&ke(P)}function Ue(P){const E=m(P)||c,ee=P.textures;for(let oe=0,ge=ee.length;oe<ge;oe++){const pe=ee[oe];if(C(pe,E)){const Ze=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(pe).__webglTexture;t.bindTexture(Ze,He),w(Ze),t.unbindTexture()}}}function Je(P){if(c&&P.samples>0&&et(P)===!1){const E=P.textures,ee=P.width,oe=P.height;let ge=r.COLOR_BUFFER_BIT;const pe=[],Ze=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(P),ye=E.length>1;if(ye)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){pe.push(r.COLOR_ATTACHMENT0+Te),P.depthBuffer&&pe.push(Ze);const Qe=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Qe===!1&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[Te]),Qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ze])),ye){const Ee=i.get(E[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,ge,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,He.__webglColorRenderbuffer[Te]);const Qe=i.get(E[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(o.maxSamples,P.samples)}function et(P){const E=i.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(P){const E=u.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function ct(P,E){const ee=P.colorSpace,oe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===cu||ee!==pr&&ee!==ar&&(It.getTransfer(ee)===Gt?c===!1?e.has("EXT_sRGB")===!0&&oe===ci?(P.format=cu,P.minFilter=Cn,P.generateMipmaps=!1):E=Jp.sRGBToLinear(E):(oe!==ci||ge!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function Tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=fe,this.rebindTextures=W,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=et}function MR(r,e,t){const i=t.isWebGL2;function o(a,u=ar){let c;const f=It.getTransfer(u);if(a===hr)return r.UNSIGNED_BYTE;if(a===Wp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Xp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===BE)return r.BYTE;if(a===zE)return r.SHORT;if(a===_u)return r.UNSIGNED_SHORT;if(a===kp)return r.INT;if(a===cr)return r.UNSIGNED_INT;if(a===zi)return r.FLOAT;if(a===uo)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===GE)return r.ALPHA;if(a===ci)return r.RGBA;if(a===HE)return r.LUMINANCE;if(a===VE)return r.LUMINANCE_ALPHA;if(a===Nr)return r.DEPTH_COMPONENT;if(a===Ls)return r.DEPTH_STENCIL;if(a===cu)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===kE)return r.RED;if(a===qp)return r.RED_INTEGER;if(a===WE)return r.RG;if(a===Yp)return r.RG_INTEGER;if(a===$p)return r.RGBA_INTEGER;if(a===_c||a===vc||a===xc||a===Sc)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===_c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===_c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Sc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===td||a===nd||a===id||a===rd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kp)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===sd||a===od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===sd)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===od)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ad||a===ld||a===cd||a===ud||a===fd||a===hd||a===dd||a===pd||a===md||a===gd||a===_d||a===vd||a===xd||a===Sd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ad)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ld)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ud)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===hd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===md)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_d)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Sd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Mc||a===Md||a===Ed)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Mc)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===XE||a===yd||a===bd||a===Td)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Mc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Td)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ur?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class ER extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yR={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),m=this._getHandJoint(d,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(yR)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ra;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TR=`
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

}`;class AR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Ln,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new ki({extensions:{fragDepth:!0},vertexShader:bR,fragmentShader:TR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new nl(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class wR extends Gr{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,x=null,M=null;const b=new AR,g=t.getContextAttributes();let m=null,N=null;const C=[],w=[],F=new st;let O=null;const L=new Hn;L.layers.enable(1),L.viewport=new un;const Y=new Hn;Y.layers.enable(2),Y.viewport=new un;const ve=[L,Y],T=new ER;T.layers.enable(1),T.layers.enable(2);let U=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=C[Q];return de===void 0&&(de=new qc,C[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=C[Q];return de===void 0&&(de=new qc,C[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=C[Q];return de===void 0&&(de=new qc,C[Q]=de),de.getHandSpace()};function me(Q){const de=w.indexOf(Q.inputSource);if(de===-1)return;const Re=C[de];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<C.length;Q++){const de=w[Q];de!==null&&(w[Q]=null,C[Q].disconnect(de))}U=null,xe=null,b.reset(),e.setRenderTarget(m),x=null,v=null,_=null,o=null,N=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",G),o.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Br(x.framebufferWidth,x.framebufferHeight,{format:ci,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,Re=null,je=null;g.depth&&(je=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?Ls:Nr,Re=g.stencil?Ur:cr);const Oe={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Br(v.textureWidth,v.textureHeight,{format:ci,type:hr,depthTexture:new um(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(N);Ce.__ignoreDepthValues=v.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),tt.setContext(o),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Q){for(let de=0;de<Q.removed.length;de++){const Re=Q.removed[de],je=w.indexOf(Re);je>=0&&(w[je]=null,C[je].disconnect(Re))}for(let de=0;de<Q.added.length;de++){const Re=Q.added[de];let je=w.indexOf(Re);if(je===-1){for(let Ce=0;Ce<C.length;Ce++)if(Ce>=w.length){w.push(Re),je=Ce;break}else if(w[Ce]===null){w[Ce]=Re,je=Ce;break}if(je===-1)break}const Oe=C[je];Oe&&Oe.connect(Re)}}const ne=new X,ue=new X;function te(Q,de,Re){ne.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Re.matrixWorld);const je=ne.distanceTo(ue),Oe=de.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,Mt=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],Xt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],Je=(Ce[8]+1)/Ce[0],Ve=Mt*Ue,et=Mt*Je,nt=je/(-Ue+Je),ct=nt*-Ue;de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ct),Q.translateZ(nt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const Tt=Mt+nt,P=ke+nt,E=Ve-ct,ee=et+(je-ct),oe=W*ke/P*Tt,ge=Xt*ke/P*Tt;Q.projectionMatrix.makePerspective(E,ee,oe,ge,Tt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ce(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;b.texture!==null&&(Q.near=b.depthNear,Q.far=b.depthFar),T.near=Y.near=L.near=Q.near,T.far=Y.far=L.far=Q.far,(U!==T.near||xe!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,xe=T.far,L.near=U,L.far=xe,Y.near=U,Y.far=xe,L.updateProjectionMatrix(),Y.updateProjectionMatrix(),Q.updateProjectionMatrix());const de=Q.parent,Re=T.cameras;ce(T,de);for(let je=0;je<Re.length;je++)ce(Re[je],de);Re.length===2?te(T,L,Y):T.projectionMatrix.copy(L.projectionMatrix),fe(Q,T,de)};function fe(Q,de,Re){Re===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null};let Se=null;function Ie(Q,de){if(p=de.getViewerPose(d||u),M=de,p!==null){const Re=p.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let je=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,je=!0);for(let Ce=0;Ce<Re.length;Ce++){const Mt=Re[Ce];let ke=null;if(x!==null)ke=x.getViewport(Mt);else{const Xt=_.getViewSubImage(v,Mt);ke=Xt.viewport,Ce===0&&(e.setRenderTargetTextures(N,Xt.colorTexture,v.ignoreDepthValues?void 0:Xt.depthStencilTexture),e.setRenderTarget(N))}let W=ve[Ce];W===void 0&&(W=new Hn,W.layers.enable(Ce),W.viewport=new un,ve[Ce]=W),W.matrix.fromArray(Mt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Mt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(T.matrix.copy(W.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),je===!0&&T.cameras.push(W)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&b.init(e,Ce,o.renderState)}}for(let Re=0;Re<C.length;Re++){const je=w[Re],Oe=C[Re];je!==null&&Oe!==void 0&&Oe.update(je,de,d||u)}b.render(e,T),Se&&Se(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const tt=new cm;tt.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Cr=new Vi,RR=new jt;function CR(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,sm(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function o(g,m,N,C,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),_(g,m)):m.isMeshPhongMaterial?(a(g,m),p(g,m)):m.isMeshStandardMaterial?(a(g,m),v(g,m),m.isMeshPhysicalMaterial&&x(g,m,w)):m.isMeshMatcapMaterial?(a(g,m),M(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),b(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(u(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?f(g,m,N,C):m.isSpriteMaterial?d(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const N=e.get(m),C=N.envMap,w=N.envMapRotation;if(C&&(g.envMap.value=C,Cr.copy(w),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Cr)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const F=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*F,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function f(g,m,N,C){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*N,g.scale.value=C*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function v(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function x(g,m,N){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const N=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function PR(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(N,C){const w=C.program;i.uniformBlockBinding(N,w)}function d(N,C){let w=o[N.id];w===void 0&&(M(N),w=p(N),o[N.id]=w,N.addEventListener("dispose",g));const F=C.program;i.updateUBOMapping(N,F);const O=e.render.frame;a[N.id]!==O&&(v(N),a[N.id]=O)}function p(N){const C=_();N.__bindingPointIndex=C;const w=r.createBuffer(),F=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,F,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,w),w}function _(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const C=o[N.id],w=N.uniforms,F=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let O=0,L=w.length;O<L;O++){const Y=Array.isArray(w[O])?w[O]:[w[O]];for(let ve=0,T=Y.length;ve<T;ve++){const U=Y[ve];if(x(U,O,ve,F)===!0){const xe=U.__offset,me=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let se=0;se<me.length;se++){const ne=me[se],ue=b(ne);typeof ne=="number"||typeof ne=="boolean"?(U.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,xe+G,U.__data)):ne.isMatrix3?(U.__data[0]=ne.elements[0],U.__data[1]=ne.elements[1],U.__data[2]=ne.elements[2],U.__data[3]=0,U.__data[4]=ne.elements[3],U.__data[5]=ne.elements[4],U.__data[6]=ne.elements[5],U.__data[7]=0,U.__data[8]=ne.elements[6],U.__data[9]=ne.elements[7],U.__data[10]=ne.elements[8],U.__data[11]=0):(ne.toArray(U.__data,G),G+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,xe,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(N,C,w,F){const O=N.value,L=C+"_"+w;if(F[L]===void 0)return typeof O=="number"||typeof O=="boolean"?F[L]=O:F[L]=O.clone(),!0;{const Y=F[L];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return F[L]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function M(N){const C=N.uniforms;let w=0;const F=16;for(let L=0,Y=C.length;L<Y;L++){const ve=Array.isArray(C[L])?C[L]:[C[L]];for(let T=0,U=ve.length;T<U;T++){const xe=ve[T],me=Array.isArray(xe.value)?xe.value:[xe.value];for(let G=0,se=me.length;G<se;G++){const ne=me[G],ue=b(ne),te=w%F;te!==0&&F-te<ue.boundary&&(w+=F-te),xe.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=w,w+=ue.storage}}}const O=w%F;return O>0&&(w+=F-O),N.__size=w,N.__cache={},this}function b(N){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function g(N){const C=N.target;C.removeEventListener("dispose",g);const w=u.indexOf(C.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function m(){for(const N in o)r.deleteBuffer(o[N]);u=[],o={},a={}}return{bind:f,update:d,dispose:m}}class Eu{constructor(e={}){const{canvas:t=vy(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),M=new Int32Array(4);let b=null,g=null;const m=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const C=this;let w=!1,F=0,O=0,L=null,Y=-1,ve=null;const T=new un,U=new un;let xe=null;const me=new bt(0);let G=0,se=t.width,ne=t.height,ue=1,te=null,ce=null;const fe=new un(0,0,se,ne),Se=new un(0,0,se,ne);let Ie=!1;const tt=new lm;let Q=!1,de=!1,Re=null;const je=new jt,Oe=new st,Ce=new X,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return L===null?ue:1}let W=i;function Xt(R,k){for(let Z=0;Z<R.length;Z++){const J=R[Z],K=t.getContext(J,k);if(K!==null)return K}return null}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Me,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&k.shift(),W=Xt(k,R),W===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,Je,Ve,et,nt,ct,Tt,P,E,ee,oe,ge,pe,Ze,He,ye,Te,Qe,Ee,Ot,ot,Ge,Le,Fe;function D(){Ue=new OA(W),Je=new CA(W,Ue,e),Ue.init(Je),Ge=new MR(W,Ue,Je),Ve=new xR(W,Ue,Je),et=new zA(W),nt=new sR,ct=new SR(W,Ue,Ve,nt,Je,Ge,et),Tt=new LA(C),P=new NA(C),E=new Wy(W,Je),Le=new wA(W,Ue,E,Je),ee=new FA(W,E,et,Le),oe=new kA(W,ee,E,et),Ee=new VA(W,Je,ct),ye=new PA(nt),ge=new rR(C,Tt,P,Ue,Je,Le,ye),pe=new CR(C,nt),Ze=new aR,He=new dR(Ue,Je),Qe=new AA(C,Tt,P,Ve,oe,v,f),Te=new vR(C,oe,Je),Fe=new PR(W,et,Je,Ve),Ot=new RA(W,Ue,et,Je),ot=new BA(W,Ue,et,Je),et.programs=ge.programs,C.capabilities=Je,C.extensions=Ue,C.properties=nt,C.renderLists=Ze,C.shadowMap=Te,C.state=Ve,C.info=et}D();const le=new wR(C,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(R){R!==void 0&&(ue=R,this.setSize(se,ne,!1))},this.getSize=function(R){return R.set(se,ne)},this.setSize=function(R,k,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ne=k,t.width=Math.floor(R*ue),t.height=Math.floor(k*ue),Z===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(se*ue,ne*ue).floor()},this.setDrawingBufferSize=function(R,k,Z){se=R,ne=k,ue=Z,t.width=Math.floor(R*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,k,Z,J){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,k,Z,J),Ve.viewport(T.copy(fe).multiplyScalar(ue).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,k,Z,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,k,Z,J),Ve.scissor(U.copy(Se).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){Ve.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(R=!0,k=!0,Z=!0){let J=0;if(R){let K=!1;if(L!==null){const Pe=L.texture.format;K=Pe===$p||Pe===Yp||Pe===qp}if(K){const Pe=L.texture.type,Be=Pe===hr||Pe===cr||Pe===_u||Pe===Ur||Pe===Wp||Pe===Xp,Xe=Qe.getClearColor(),qe=Qe.getClearAlpha(),ft=Xe.r,it=Xe.g,at=Xe.b;Be?(x[0]=ft,x[1]=it,x[2]=at,x[3]=qe,W.clearBufferuiv(W.COLOR,0,x)):(M[0]=ft,M[1]=it,M[2]=at,M[3]=qe,W.clearBufferiv(W.COLOR,0,M))}else J|=W.COLOR_BUFFER_BIT}k&&(J|=W.DEPTH_BUFFER_BIT),Z&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ze.dispose(),He.dispose(),nt.dispose(),Tt.dispose(),P.dispose(),oe.dispose(),Le.dispose(),Fe.dispose(),ge.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ht),le.removeEventListener("sessionend",Et),Re&&(Re.dispose(),Re=null),Lt.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=et.autoReset,k=Te.enabled,Z=Te.autoUpdate,J=Te.needsUpdate,K=Te.type;D(),et.autoReset=R,Te.enabled=k,Te.autoUpdate=Z,Te.needsUpdate=J,Te.type=K}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function q(R){const k=R.target;k.removeEventListener("dispose",q),_e(k)}function _e(R){we(R),nt.remove(R)}function we(R){const k=nt.get(R).programs;k!==void 0&&(k.forEach(function(Z){ge.releaseProgram(Z)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Z,J,K,Pe){k===null&&(k=Mt);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Xe=sl(R,k,Z,J,K);Ve.setMaterial(J,Be);let qe=Z.index,ft=1;if(J.wireframe===!0){if(qe=ee.getWireframeAttribute(Z),qe===void 0)return;ft=2}const it=Z.drawRange,at=Z.attributes.position;let Vt=it.start*ft,fn=(it.start+it.count)*ft;Pe!==null&&(Vt=Math.max(Vt,Pe.start*ft),fn=Math.min(fn,(Pe.start+Pe.count)*ft)),qe!==null?(Vt=Math.max(Vt,0),fn=Math.min(fn,qe.count)):at!=null&&(Vt=Math.max(Vt,0),fn=Math.min(fn,at.count));const $t=fn-Vt;if($t<0||$t===1/0)return;Le.setup(K,J,Xe,Z,qe);let ei,Bt=Ot;if(qe!==null&&(ei=E.get(qe),Bt=ot,Bt.setIndex(ei)),K.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*ke()),Bt.setMode(W.LINES)):Bt.setMode(W.TRIANGLES);else if(K.isLine){let ut=J.linewidth;ut===void 0&&(ut=1),Ve.setLineWidth(ut*ke()),K.isLineSegments?Bt.setMode(W.LINES):K.isLineLoop?Bt.setMode(W.LINE_LOOP):Bt.setMode(W.LINE_STRIP)}else K.isPoints?Bt.setMode(W.POINTS):K.isSprite&&Bt.setMode(W.TRIANGLES);if(K.isBatchedMesh)Bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Bt.renderInstances(Vt,$t,K.count);else if(Z.isInstancedBufferGeometry){const ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fs=Math.min(Z.instanceCount,ut);Bt.renderInstances(Vt,$t,Fs)}else Bt.render(Vt,$t)};function dt(R,k,Z){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,kr(R,k,Z),R.side=dr,R.needsUpdate=!0,kr(R,k,Z),R.side=Bi):kr(R,k,Z)}this.compile=function(R,k,Z=null){Z===null&&(Z=R),g=He.get(Z),g.init(),N.push(g),Z.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),R!==Z&&R.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(C._useLegacyLights);const J=new Set;return R.traverse(function(K){const Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let Be=0;Be<Pe.length;Be++){const Xe=Pe[Be];dt(Xe,Z,K),J.add(Xe)}else dt(Pe,Z,K),J.add(Pe)}),N.pop(),g=null,J},this.compileAsync=function(R,k,Z=null){const J=this.compile(R,k,Z);return new Promise(K=>{function Pe(){if(J.forEach(function(Be){nt.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){K(R);return}setTimeout(Pe,10)}Ue.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let yt=null;function Pt(R){yt&&yt(R)}function Ht(){Lt.stop()}function Et(){Lt.start()}const Lt=new cm;Lt.setAnimationLoop(Pt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(R){yt=R,le.setAnimationLoop(R),R===null?Lt.stop():Lt.start()},le.addEventListener("sessionstart",Ht),le.addEventListener("sessionend",Et),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,k,L),g=He.get(R,N.length),g.init(),N.push(g),je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(je),de=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,de),b=Ze.get(R,m.length),b.init(),m.push(b),sn(R,k,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(te,ce),this.info.render.frame++,Q===!0&&ye.beginShadows();const Z=g.state.shadowsArray;if(Te.render(Z,R,k),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Qe.render(b,R),g.setupLights(C._useLegacyLights),k.isArrayCamera){const J=k.cameras;for(let K=0,Pe=J.length;K<Pe;K++){const Be=J[K];Qn(b,R,Be,Be.viewport)}}else Qn(b,R,k);L!==null&&(ct.updateMultisampleRenderTarget(L),ct.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(C,R,k),Le.resetDefaultState(),Y=-1,ve=null,N.pop(),N.length>0?g=N[N.length-1]:g=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function sn(R,k,Z,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){J&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Be=oe.update(R),Xe=R.material;Xe.visible&&b.push(R,Be,Xe,Z,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const Be=oe.update(R),Xe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(Xe)){const qe=Be.groups;for(let ft=0,it=qe.length;ft<it;ft++){const at=qe[ft],Vt=Xe[at.materialIndex];Vt&&Vt.visible&&b.push(R,Be,Vt,Z,Ce.z,at)}}else Xe.visible&&b.push(R,Be,Xe,Z,Ce.z,null)}}const Pe=R.children;for(let Be=0,Xe=Pe.length;Be<Xe;Be++)sn(Pe[Be],k,Z,J)}function Qn(R,k,Z,J){const K=R.opaque,Pe=R.transmissive,Be=R.transparent;g.setupLightsView(Z),Q===!0&&ye.setGlobalState(C.clippingPlanes,Z),Pe.length>0&&Hr(K,Pe,k,Z),J&&Ve.viewport(T.copy(J)),K.length>0&&Vr(K,k,Z),Pe.length>0&&Vr(Pe,k,Z),Be.length>0&&Vr(Be,k,Z),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Hr(R,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Pe=Je.isWebGL2;Re===null&&(Re=new Br(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?uo:hr,minFilter:Ir,samples:Pe?4:0})),C.getDrawingBufferSize(Oe),Pe?Re.setSize(Oe.x,Oe.y):Re.setSize(qa(Oe.x),qa(Oe.y));const Be=C.getRenderTarget();C.setRenderTarget(Re),C.getClearColor(me),G=C.getClearAlpha(),G<1&&C.setClearColor(16777215,.5),C.clear();const Xe=C.toneMapping;C.toneMapping=fr,Vr(R,Z,J),ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re);let qe=!1;for(let ft=0,it=k.length;ft<it;ft++){const at=k[ft],Vt=at.object,fn=at.geometry,$t=at.material,ei=at.group;if($t.side===Bi&&Vt.layers.test(J.layers)){const Bt=$t.side;$t.side=Pn,$t.needsUpdate=!0,go(Vt,Z,J,fn,$t,ei),$t.side=Bt,$t.needsUpdate=!0,qe=!0}}qe===!0&&(ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re)),C.setRenderTarget(Be),C.setClearColor(me,G),C.toneMapping=Xe}function Vr(R,k,Z){const J=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Pe=R.length;K<Pe;K++){const Be=R[K],Xe=Be.object,qe=Be.geometry,ft=J===null?Be.material:J,it=Be.group;Xe.layers.test(Z.layers)&&go(Xe,k,Z,qe,ft,it)}}function go(R,k,Z,J,K,Pe){R.onBeforeRender(C,k,Z,J,K,Pe),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,k,Z,J,R,Pe),K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,C.renderBufferDirect(Z,k,J,K,R,Pe),K.side=dr,K.needsUpdate=!0,C.renderBufferDirect(Z,k,J,K,R,Pe),K.side=Bi):C.renderBufferDirect(Z,k,J,K,R,Pe),R.onAfterRender(C,k,Z,J,K,Pe)}function kr(R,k,Z){k.isScene!==!0&&(k=Mt);const J=nt.get(R),K=g.state.lights,Pe=g.state.shadowsArray,Be=K.state.version,Xe=ge.getParameters(R,K.state,Pe,k,Z),qe=ge.getProgramCacheKey(Xe);let ft=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?P:Tt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ft===void 0&&(R.addEventListener("dispose",q),ft=new Map,J.programs=ft);let it=ft.get(qe);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===Be)return vo(R,Xe),it}else Xe.uniforms=ge.getUniforms(R),R.onBuild(Z,Xe,C),R.onBeforeCompile(Xe,C),it=ge.acquireProgram(Xe,qe),ft.set(qe,it),J.uniforms=Xe.uniforms;const at=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(at.clippingPlanes=ye.uniform),vo(R,Xe),J.needsLights=xo(R),J.lightsStateVersion=Be,J.needsLights&&(at.ambientLightColor.value=K.state.ambient,at.lightProbe.value=K.state.probe,at.directionalLights.value=K.state.directional,at.directionalLightShadows.value=K.state.directionalShadow,at.spotLights.value=K.state.spot,at.spotLightShadows.value=K.state.spotShadow,at.rectAreaLights.value=K.state.rectArea,at.ltc_1.value=K.state.rectAreaLTC1,at.ltc_2.value=K.state.rectAreaLTC2,at.pointLights.value=K.state.point,at.pointLightShadows.value=K.state.pointShadow,at.hemisphereLights.value=K.state.hemi,at.directionalShadowMap.value=K.state.directionalShadowMap,at.directionalShadowMatrix.value=K.state.directionalShadowMatrix,at.spotShadowMap.value=K.state.spotShadowMap,at.spotLightMatrix.value=K.state.spotLightMatrix,at.spotLightMap.value=K.state.spotLightMap,at.pointShadowMap.value=K.state.pointShadowMap,at.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=it,J.uniformsList=null,it}function _o(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Ba.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function vo(R,k){const Z=nt.get(R);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function sl(R,k,Z,J,K){k.isScene!==!0&&(k=Mt),ct.resetTextureUnits();const Pe=k.fog,Be=J.isMeshStandardMaterial?k.environment:null,Xe=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pr,qe=(J.isMeshStandardMaterial?P:Tt).get(J.envMap||Be),ft=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),at=!!Z.morphAttributes.position,Vt=!!Z.morphAttributes.normal,fn=!!Z.morphAttributes.color;let $t=fr;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&($t=C.toneMapping);const ei=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=ei!==void 0?ei.length:0,ut=nt.get(J),Fs=g.state.lights;if(Q===!0&&(de===!0||R!==ve)){const bn=R===ve&&J.id===Y;ye.setState(J,R,bn)}let Ut=!1;J.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Fs.state.version||ut.outputColorSpace!==Xe||K.isBatchedMesh&&ut.batching===!1||!K.isBatchedMesh&&ut.batching===!0||K.isInstancedMesh&&ut.instancing===!1||!K.isInstancedMesh&&ut.instancing===!0||K.isSkinnedMesh&&ut.skinning===!1||!K.isSkinnedMesh&&ut.skinning===!0||K.isInstancedMesh&&ut.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ut.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ut.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ut.instancingMorph===!1&&K.morphTexture!==null||ut.envMap!==qe||J.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ye.numPlanes||ut.numIntersection!==ye.numIntersection)||ut.vertexAlphas!==ft||ut.vertexTangents!==it||ut.morphTargets!==at||ut.morphNormals!==Vt||ut.morphColors!==fn||ut.toneMapping!==$t||Je.isWebGL2===!0&&ut.morphTargetsCount!==Bt)&&(Ut=!0):(Ut=!0,ut.__version=J.version);let ui=ut.currentProgram;Ut===!0&&(ui=kr(J,k,K));let Bs=!1,Ei=!1,zs=!1;const Qt=ui.getUniforms(),Vn=ut.uniforms;if(Ve.useProgram(ui.program)&&(Bs=!0,Ei=!0,zs=!0),J.id!==Y&&(Y=J.id,Ei=!0),Bs||ve!==R){Qt.setValue(W,"projectionMatrix",R.projectionMatrix),Qt.setValue(W,"viewMatrix",R.matrixWorldInverse);const bn=Qt.map.cameraPosition;bn!==void 0&&bn.setValue(W,Ce.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&Qt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Qt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),ve!==R&&(ve=R,Ei=!0,zs=!0)}if(K.isSkinnedMesh){Qt.setOptional(W,K,"bindMatrix"),Qt.setOptional(W,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(Je.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Qt.setValue(W,"boneTexture",bn.boneTexture,ct)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Qt.setOptional(W,K,"batchingTexture"),Qt.setValue(W,"batchingTexture",K._matricesTexture,ct));const Wr=Z.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Je.isWebGL2===!0)&&Ee.update(K,Z,ui),(Ei||ut.receiveShadow!==K.receiveShadow)&&(ut.receiveShadow=K.receiveShadow,Qt.setValue(W,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Vn.envMap.value=qe,Vn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Ei&&(Qt.setValue(W,"toneMappingExposure",C.toneMappingExposure),ut.needsLights&&ol(Vn,zs),Pe&&J.fog===!0&&pe.refreshFogUniforms(Vn,Pe),pe.refreshMaterialUniforms(Vn,J,ue,ne,Re),Ba.upload(W,_o(ut),Vn,ct)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ba.upload(W,_o(ut),Vn,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Qt.setValue(W,"center",K.center),Qt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Qt.setValue(W,"normalMatrix",K.normalMatrix),Qt.setValue(W,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let Xr=0,So=bn.length;Xr<So;Xr++)if(Je.isWebGL2){const qr=bn[Xr];Fe.update(qr,ui),Fe.bind(qr,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function ol(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function xo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,k,Z){nt.get(R.texture).__webglTexture=k,nt.get(R.depthTexture).__webglTexture=Z;const J=nt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const Z=nt.get(R);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Z=0){L=R,F=k,O=Z;let J=!0,K=null,Pe=!1,Be=!1;if(R){const qe=nt.get(R);qe.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):qe.__webglFramebuffer===void 0?ct.setupRenderTarget(R):qe.__hasExternalTextures&&ct.rebindTextures(R,nt.get(R.texture).__webglTexture,nt.get(R.depthTexture).__webglTexture);const ft=R.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Be=!0);const it=nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[k])?K=it[k][Z]:K=it[k],Pe=!0):Je.isWebGL2&&R.samples>0&&ct.useMultisampledRTT(R)===!1?K=nt.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[Z]:K=it,T.copy(R.viewport),U.copy(R.scissor),xe=R.scissorTest}else T.copy(fe).multiplyScalar(ue).floor(),U.copy(Se).multiplyScalar(ue).floor(),xe=Ie;if(Ve.bindFramebuffer(W.FRAMEBUFFER,K)&&Je.drawBuffers&&J&&Ve.drawBuffers(R,K),Ve.viewport(T),Ve.scissor(U),Ve.setScissorTest(xe),Pe){const qe=nt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,qe.__webglTexture,Z)}else if(Be){const qe=nt.get(R.texture),ft=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,Z||0,ft)}Y=-1},this.readRenderTargetPixels=function(R,k,Z,J,K,Pe,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Ve.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const qe=R.texture,ft=qe.format,it=qe.type;if(ft!==ci&&Ge.convert(ft)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===uo&&(Ue.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(it!==hr&&Ge.convert(it)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===zi&&(Je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&Z>=0&&Z<=R.height-K&&W.readPixels(k,Z,J,K,Ge.convert(ft),Ge.convert(it),Pe)}finally{const qe=L!==null?nt.get(L).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(R,k,Z=0){const J=Math.pow(2,-Z),K=Math.floor(k.image.width*J),Pe=Math.floor(k.image.height*J);ct.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,Z,0,0,R.x,R.y,K,Pe),Ve.unbindTexture()},this.copyTextureToTexture=function(R,k,Z,J=0){const K=k.image.width,Pe=k.image.height,Be=Ge.convert(Z.format),Xe=Ge.convert(Z.type);ct.setTexture2D(Z,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,K,Pe,Be,Xe,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Be,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,Be,Xe,k.image),J===0&&Z.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Z,J,K=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Xe=R.max.z-R.min.z+1,qe=Ge.convert(J.format),ft=Ge.convert(J.type);let it;if(J.isData3DTexture)ct.setTexture3D(J,0),it=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ct.setTexture2DArray(J,0),it=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const at=W.getParameter(W.UNPACK_ROW_LENGTH),Vt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),fn=W.getParameter(W.UNPACK_SKIP_PIXELS),$t=W.getParameter(W.UNPACK_SKIP_ROWS),ei=W.getParameter(W.UNPACK_SKIP_IMAGES),Bt=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Bt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Bt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?W.texSubImage3D(it,K,k.x,k.y,k.z,Pe,Be,Xe,qe,ft,Bt.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(it,K,k.x,k.y,k.z,Pe,Be,Xe,qe,Bt.data):W.texSubImage3D(it,K,k.x,k.y,k.z,Pe,Be,Xe,qe,ft,Bt),W.pixelStorei(W.UNPACK_ROW_LENGTH,at),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Vt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fn),W.pixelStorei(W.UNPACK_SKIP_ROWS,$t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ei),K===0&&J.generateMipmaps&&W.generateMipmap(it),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){F=0,O=0,L=null,Ve.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vu?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Qa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LR extends Eu{}LR.prototype.isWebGL1Renderer=!0;class DR extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class IR extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new jt,hu=new tl,Ca=new el,Pa=new X;class _p extends Dn{constructor(e=new Mi,t=new IR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(o),Ca.radius+=a,e.ray.intersectsSphere(Ca)===!1)return;gp.copy(o).invert(),hu.copy(e.ray).applyMatrix4(gp);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=i.index,_=i.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=v,b=x;M<b;M++){const g=d.getX(M);Pa.fromBufferAttribute(_,g),vp(Pa,g,f,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=v,b=x;M<b;M++)Pa.fromBufferAttribute(_,M),vp(Pa,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function vp(r,e,t,i,o,a,u){const c=hu.distanceSqToPoint(r);if(c<t){const f=new X;hu.closestPointToPoint(r,f),f.applyMatrix4(i);const d=o.ray.origin.distanceTo(f);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,object:u})}}const xp=new jt;class gm{constructor(e,t,i=0,o=1/0){this.ray=new tl(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new Su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xp),this}intersectObject(e,t=!0,i=[]){return du(e,this,i,t),i.sort(Sp),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)du(e[o],this,i,t);return i.sort(Sp),i}}function Sp(r,e){return r.distance-e.distance}function du(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const o=r.children;for(let a=0,u=o.length;a<u;a++)du(o[a],e,t,!0)}}class Mp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);const UR={items:[]},Fr=new Us(UR);function NR(r){const t={...Fr.getValue(),items:r};Fr.next(t)}const OR={scene:new DR},_m=new Us(OR),FR={isLoading:!0,theme:"light"},$a=new Us(FR);function gi(r){const t={...$a.getValue(),isLoading:r};$a.next(t)}const Ep={type:"change"},Yc={type:"start"},yp={type:"end"},La=new tl,bp=new or,BR=Math.cos(70*_y.DEG2RAD);class vm extends Gr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",He),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ep),i.update(),a=o.NONE},this.update=function(){const D=new X,le=new zr().setFromUnitVectors(e.up,new X(0,1,0)),Ne=le.clone().invert(),B=new X,Me=new zr,q=new X,_e=2*Math.PI;return function(dt=null){const yt=i.object.position;D.copy(yt).sub(i.target),D.applyQuaternion(le),c.setFromVector3(D),i.autoRotate&&a===o.NONE&&xe(T(dt)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Pt=i.minAzimuthAngle,Ht=i.maxAzimuthAngle;isFinite(Pt)&&isFinite(Ht)&&(Pt<-Math.PI?Pt+=_e:Pt>Math.PI&&(Pt-=_e),Ht<-Math.PI?Ht+=_e:Ht>Math.PI&&(Ht-=_e),Pt<=Ht?c.theta=Math.max(Pt,Math.min(Ht,c.theta)):c.theta=c.theta>(Pt+Ht)/2?Math.max(Pt,c.theta):Math.min(Ht,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&O||i.object.isOrthographicCamera)c.radius=fe(c.radius);else{const Lt=c.radius;c.radius=fe(c.radius*d),Et=Lt!=c.radius}if(D.setFromSpherical(c),D.applyQuaternion(Ne),yt.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&O){let Lt=null;if(i.object.isPerspectiveCamera){const sn=D.length();Lt=fe(sn*d);const Qn=sn-Lt;i.object.position.addScaledVector(w,Qn),i.object.updateMatrixWorld(),Et=!!Qn}else if(i.object.isOrthographicCamera){const sn=new X(F.x,F.y,0);sn.unproject(i.object);const Qn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Et=Qn!==i.object.zoom;const Hr=new X(F.x,F.y,0);Hr.unproject(i.object),i.object.position.sub(Hr).add(sn),i.object.updateMatrixWorld(),Lt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Lt).add(i.object.position):(La.origin.copy(i.object.position),La.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(La.direction))<BR?e.lookAt(i.target):(bp.setFromNormalAndCoplanarPoint(i.object.up,i.target),La.intersectPlane(bp,i.target))))}else if(i.object.isOrthographicCamera){const Lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return d=1,O=!1,Et||B.distanceToSquared(i.object.position)>u||8*(1-Me.dot(i.object.quaternion))>u||q.distanceToSquared(i.target)>u?(i.dispatchEvent(Ep),B.copy(i.object.position),Me.copy(i.object.quaternion),q.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Qe),i.domElement.removeEventListener("pointerdown",ct),i.domElement.removeEventListener("pointercancel",P),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",P),i.domElement.getRootNode().removeEventListener("keydown",pe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new Mp,f=new Mp;let d=1;const p=new X,_=new st,v=new st,x=new st,M=new st,b=new st,g=new st,m=new st,N=new st,C=new st,w=new X,F=new st;let O=!1;const L=[],Y={};let ve=!1;function T(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function U(D){const le=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*le)}function xe(D){f.theta-=D}function me(D){f.phi-=D}const G=function(){const D=new X;return function(Ne,B){D.setFromMatrixColumn(B,0),D.multiplyScalar(-Ne),p.add(D)}}(),se=function(){const D=new X;return function(Ne,B){i.screenSpacePanning===!0?D.setFromMatrixColumn(B,1):(D.setFromMatrixColumn(B,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Ne),p.add(D)}}(),ne=function(){const D=new X;return function(Ne,B){const Me=i.domElement;if(i.object.isPerspectiveCamera){const q=i.object.position;D.copy(q).sub(i.target);let _e=D.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),G(2*Ne*_e/Me.clientHeight,i.object.matrix),se(2*B*_e/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(Ne*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),se(B*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ue(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(D,le){if(!i.zoomToCursor)return;O=!0;const Ne=i.domElement.getBoundingClientRect(),B=D-Ne.left,Me=le-Ne.top,q=Ne.width,_e=Ne.height;F.x=B/q*2-1,F.y=-(Me/_e)*2+1,w.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function fe(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function Se(D){_.set(D.clientX,D.clientY)}function Ie(D){ce(D.clientX,D.clientX),m.set(D.clientX,D.clientY)}function tt(D){M.set(D.clientX,D.clientY)}function Q(D){v.set(D.clientX,D.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;xe(2*Math.PI*x.x/le.clientHeight),me(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function de(D){N.set(D.clientX,D.clientY),C.subVectors(N,m),C.y>0?ue(U(C.y)):C.y<0&&te(U(C.y)),m.copy(N),i.update()}function Re(D){b.set(D.clientX,D.clientY),g.subVectors(b,M).multiplyScalar(i.panSpeed),ne(g.x,g.y),M.copy(b),i.update()}function je(D){ce(D.clientX,D.clientY),D.deltaY<0?te(U(D.deltaY)):D.deltaY>0&&ue(U(D.deltaY)),i.update()}function Oe(D){let le=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?xe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?xe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),le=!0;break}le&&(D.preventDefault(),i.update())}function Ce(D){if(L.length===1)_.set(D.pageX,D.pageY);else{const le=Le(D),Ne=.5*(D.pageX+le.x),B=.5*(D.pageY+le.y);_.set(Ne,B)}}function Mt(D){if(L.length===1)M.set(D.pageX,D.pageY);else{const le=Le(D),Ne=.5*(D.pageX+le.x),B=.5*(D.pageY+le.y);M.set(Ne,B)}}function ke(D){const le=Le(D),Ne=D.pageX-le.x,B=D.pageY-le.y,Me=Math.sqrt(Ne*Ne+B*B);m.set(0,Me)}function W(D){i.enableZoom&&ke(D),i.enablePan&&Mt(D)}function Xt(D){i.enableZoom&&ke(D),i.enableRotate&&Ce(D)}function Ue(D){if(L.length==1)v.set(D.pageX,D.pageY);else{const Ne=Le(D),B=.5*(D.pageX+Ne.x),Me=.5*(D.pageY+Ne.y);v.set(B,Me)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;xe(2*Math.PI*x.x/le.clientHeight),me(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function Je(D){if(L.length===1)b.set(D.pageX,D.pageY);else{const le=Le(D),Ne=.5*(D.pageX+le.x),B=.5*(D.pageY+le.y);b.set(Ne,B)}g.subVectors(b,M).multiplyScalar(i.panSpeed),ne(g.x,g.y),M.copy(b)}function Ve(D){const le=Le(D),Ne=D.pageX-le.x,B=D.pageY-le.y,Me=Math.sqrt(Ne*Ne+B*B);N.set(0,Me),C.set(0,Math.pow(N.y/m.y,i.zoomSpeed)),ue(C.y),m.copy(N);const q=(D.pageX+le.x)*.5,_e=(D.pageY+le.y)*.5;ce(q,_e)}function et(D){i.enableZoom&&Ve(D),i.enablePan&&Je(D)}function nt(D){i.enableZoom&&Ve(D),i.enableRotate&&Ue(D)}function ct(D){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",Tt),i.domElement.addEventListener("pointerup",P)),!ot(D)&&(Ee(D),D.pointerType==="touch"?ye(D):E(D)))}function Tt(D){i.enabled!==!1&&(D.pointerType==="touch"?Te(D):ee(D))}function P(D){switch(Ot(D),L.length){case 0:i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",P),i.dispatchEvent(yp),a=o.NONE;break;case 1:const le=L[0],Ne=Y[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function E(D){let le;switch(D.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Jn.DOLLY:if(i.enableZoom===!1)return;Ie(D),a=o.DOLLY;break;case Jn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;tt(D),a=o.PAN}else{if(i.enableRotate===!1)return;Se(D),a=o.ROTATE}break;case Jn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;Se(D),a=o.ROTATE}else{if(i.enablePan===!1)return;tt(D),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Yc)}function ee(D){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;Q(D);break;case o.DOLLY:if(i.enableZoom===!1)return;de(D);break;case o.PAN:if(i.enablePan===!1)return;Re(D);break}}function oe(D){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(D.preventDefault(),i.dispatchEvent(Yc),je(ge(D)),i.dispatchEvent(yp))}function ge(D){const le=D.deltaMode,Ne={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return D.ctrlKey&&!ve&&(Ne.deltaY*=10),Ne}function pe(D){D.key==="Control"&&(ve=!0,i.domElement.getRootNode().addEventListener("keyup",Ze,{passive:!0,capture:!0}))}function Ze(D){D.key==="Control"&&(ve=!1,i.domElement.getRootNode().removeEventListener("keyup",Ze,{passive:!0,capture:!0}))}function He(D){i.enabled===!1||i.enablePan===!1||Oe(D)}function ye(D){switch(Ge(D),L.length){case 1:switch(i.touches.ONE){case sr.ROTATE:if(i.enableRotate===!1)return;Ce(D),a=o.TOUCH_ROTATE;break;case sr.PAN:if(i.enablePan===!1)return;Mt(D),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case sr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(D),a=o.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xt(D),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Yc)}function Te(D){switch(Ge(D),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(D),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Je(D),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;et(D),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(D),i.update();break;default:a=o.NONE}}function Qe(D){i.enabled!==!1&&D.preventDefault()}function Ee(D){L.push(D.pointerId)}function Ot(D){delete Y[D.pointerId];for(let le=0;le<L.length;le++)if(L[le]==D.pointerId){L.splice(le,1);return}}function ot(D){for(let le=0;le<L.length;le++)if(L[le]==D.pointerId)return!0;return!1}function Ge(D){let le=Y[D.pointerId];le===void 0&&(le=new st,Y[D.pointerId]=le),le.set(D.pageX,D.pageY)}function Le(D){const le=D.pointerId===L[0]?L[1]:L[0];return Y[le]}i.domElement.addEventListener("contextmenu",Qe),i.domElement.addEventListener("pointerdown",ct),i.domElement.addEventListener("pointercancel",P),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ka={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ka.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,x=4,M=1,b=2,g=1,m=2,N=4,C=8,w=16,F=32,O=64,L=128,Y=256,ve=512,T=30,U="...",xe=800,me=16,G=1,se=2,ne=3,ue=1/0,te=9007199254740991,ce=17976931348623157e292,fe=NaN,Se=4294967295,Ie=Se-1,tt=Se>>>1,Q=[["ary",L],["bind",g],["bindKey",m],["curry",C],["curryRight",w],["flip",ve],["partial",F],["partialRight",O],["rearg",Y]],de="[object Arguments]",Re="[object Array]",je="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",Mt="[object DOMException]",ke="[object Error]",W="[object Function]",Xt="[object GeneratorFunction]",Ue="[object Map]",Je="[object Number]",Ve="[object Null]",et="[object Object]",nt="[object Promise]",ct="[object Proxy]",Tt="[object RegExp]",P="[object Set]",E="[object String]",ee="[object Symbol]",oe="[object Undefined]",ge="[object WeakMap]",pe="[object WeakSet]",Ze="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",Te="[object Float64Array]",Qe="[object Int8Array]",Ee="[object Int16Array]",Ot="[object Int32Array]",ot="[object Uint8Array]",Ge="[object Uint8ClampedArray]",Le="[object Uint16Array]",Fe="[object Uint32Array]",D=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,q=RegExp(B.source),_e=RegExp(Me.source),we=/<%-([\s\S]+?)%>/g,dt=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ht=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,sn=RegExp(Lt.source),Qn=/^\s+/,Hr=/\s/,Vr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,go=/\{\n\/\* \[wrapped with (.+)\] \*/,kr=/,? & /,_o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vo=/[()=,{}\[\]\/\s]/,sl=/\\(\\)?/g,ol=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xo=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,K=/^(?:0|[1-9]\d*)$/,Pe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,qe="\\ud800-\\udfff",ft="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",Vt=ft+it+at,fn="\\u2700-\\u27bf",$t="a-z\\xdf-\\xf6\\xf8-\\xff",ei="\\xac\\xb1\\xd7\\xf7",Bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",Fs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ut="A-Z\\xc0-\\xd6\\xd8-\\xde",ui="\\ufe0e\\ufe0f",Bs=ei+Bt+ut+Fs,Ei="['’]",zs="["+qe+"]",Qt="["+Bs+"]",Vn="["+Vt+"]",Wr="\\d+",bn="["+fn+"]",Xr="["+$t+"]",So="[^"+qe+Bs+Wr+fn+$t+Ut+"]",qr="\\ud83c[\\udffb-\\udfff]",Mm="(?:"+Vn+"|"+qr+")",bu="[^"+qe+"]",al="(?:\\ud83c[\\udde6-\\uddff]){2}",ll="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="["+Ut+"]",Tu="\\u200d",Au="(?:"+Xr+"|"+So+")",Em="(?:"+Yr+"|"+So+")",wu="(?:"+Ei+"(?:d|ll|m|re|s|t|ve))?",Ru="(?:"+Ei+"(?:D|LL|M|RE|S|T|VE))?",Cu=Mm+"?",Pu="["+ui+"]?",ym="(?:"+Tu+"(?:"+[bu,al,ll].join("|")+")"+Pu+Cu+")*",bm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Tm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lu=Pu+Cu+ym,Am="(?:"+[bn,al,ll].join("|")+")"+Lu,wm="(?:"+[bu+Vn+"?",Vn,al,ll,zs].join("|")+")",Rm=RegExp(Ei,"g"),Cm=RegExp(Vn,"g"),cl=RegExp(qr+"(?="+qr+")|"+wm+Lu,"g"),Pm=RegExp([Yr+"?"+Xr+"+"+wu+"(?="+[Qt,Yr,"$"].join("|")+")",Em+"+"+Ru+"(?="+[Qt,Yr+Au,"$"].join("|")+")",Yr+"?"+Au+"+"+wu,Yr+"+"+Ru,Tm,bm,Wr,Am].join("|"),"g"),Lm=RegExp("["+Tu+qe+Vt+ui+"]"),Dm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Im=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Um=-1,zt={};zt[ye]=zt[Te]=zt[Qe]=zt[Ee]=zt[Ot]=zt[ot]=zt[Ge]=zt[Le]=zt[Fe]=!0,zt[de]=zt[Re]=zt[Ze]=zt[Oe]=zt[He]=zt[Ce]=zt[ke]=zt[W]=zt[Ue]=zt[Je]=zt[et]=zt[Tt]=zt[P]=zt[E]=zt[ge]=!1;var Ft={};Ft[de]=Ft[Re]=Ft[Ze]=Ft[He]=Ft[Oe]=Ft[Ce]=Ft[ye]=Ft[Te]=Ft[Qe]=Ft[Ee]=Ft[Ot]=Ft[Ue]=Ft[Je]=Ft[et]=Ft[Tt]=Ft[P]=Ft[E]=Ft[ee]=Ft[ot]=Ft[Ge]=Ft[Le]=Ft[Fe]=!0,Ft[ke]=Ft[W]=Ft[ge]=!1;var Nm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Om={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Bm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},zm=parseFloat,Gm=parseInt,Du=typeof oo=="object"&&oo&&oo.Object===Object&&oo,Hm=typeof self=="object"&&self&&self.Object===Object&&self,ln=Du||Hm||Function("return this")(),ul=e&&!e.nodeType&&e,mr=ul&&!0&&r&&!r.nodeType&&r,Iu=mr&&mr.exports===ul,fl=Iu&&Du.process,kn=function(){try{var H=mr&&mr.require&&mr.require("util").types;return H||fl&&fl.binding&&fl.binding("util")}catch{}}(),Uu=kn&&kn.isArrayBuffer,Nu=kn&&kn.isDate,Ou=kn&&kn.isMap,Fu=kn&&kn.isRegExp,Bu=kn&&kn.isSet,zu=kn&&kn.isTypedArray;function In(H,ie,j){switch(j.length){case 0:return H.call(ie);case 1:return H.call(ie,j[0]);case 2:return H.call(ie,j[0],j[1]);case 3:return H.call(ie,j[0],j[1],j[2])}return H.apply(ie,j)}function Vm(H,ie,j,De){for(var rt=-1,At=H==null?0:H.length;++rt<At;){var en=H[rt];ie(De,en,j(en),H)}return De}function Wn(H,ie){for(var j=-1,De=H==null?0:H.length;++j<De&&ie(H[j],j,H)!==!1;);return H}function km(H,ie){for(var j=H==null?0:H.length;j--&&ie(H[j],j,H)!==!1;);return H}function Gu(H,ie){for(var j=-1,De=H==null?0:H.length;++j<De;)if(!ie(H[j],j,H))return!1;return!0}function Wi(H,ie){for(var j=-1,De=H==null?0:H.length,rt=0,At=[];++j<De;){var en=H[j];ie(en,j,H)&&(At[rt++]=en)}return At}function Mo(H,ie){var j=H==null?0:H.length;return!!j&&$r(H,ie,0)>-1}function hl(H,ie,j){for(var De=-1,rt=H==null?0:H.length;++De<rt;)if(j(ie,H[De]))return!0;return!1}function kt(H,ie){for(var j=-1,De=H==null?0:H.length,rt=Array(De);++j<De;)rt[j]=ie(H[j],j,H);return rt}function Xi(H,ie){for(var j=-1,De=ie.length,rt=H.length;++j<De;)H[rt+j]=ie[j];return H}function dl(H,ie,j,De){var rt=-1,At=H==null?0:H.length;for(De&&At&&(j=H[++rt]);++rt<At;)j=ie(j,H[rt],rt,H);return j}function Wm(H,ie,j,De){var rt=H==null?0:H.length;for(De&&rt&&(j=H[--rt]);rt--;)j=ie(j,H[rt],rt,H);return j}function pl(H,ie){for(var j=-1,De=H==null?0:H.length;++j<De;)if(ie(H[j],j,H))return!0;return!1}var Xm=ml("length");function qm(H){return H.split("")}function Ym(H){return H.match(_o)||[]}function Hu(H,ie,j){var De;return j(H,function(rt,At,en){if(ie(rt,At,en))return De=At,!1}),De}function Eo(H,ie,j,De){for(var rt=H.length,At=j+(De?1:-1);De?At--:++At<rt;)if(ie(H[At],At,H))return At;return-1}function $r(H,ie,j){return ie===ie?sg(H,ie,j):Eo(H,Vu,j)}function $m(H,ie,j,De){for(var rt=j-1,At=H.length;++rt<At;)if(De(H[rt],ie))return rt;return-1}function Vu(H){return H!==H}function ku(H,ie){var j=H==null?0:H.length;return j?_l(H,ie)/j:fe}function ml(H){return function(ie){return ie==null?t:ie[H]}}function gl(H){return function(ie){return H==null?t:H[ie]}}function Wu(H,ie,j,De,rt){return rt(H,function(At,en,Nt){j=De?(De=!1,At):ie(j,At,en,Nt)}),j}function Km(H,ie){var j=H.length;for(H.sort(ie);j--;)H[j]=H[j].value;return H}function _l(H,ie){for(var j,De=-1,rt=H.length;++De<rt;){var At=ie(H[De]);At!==t&&(j=j===t?At:j+At)}return j}function vl(H,ie){for(var j=-1,De=Array(H);++j<H;)De[j]=ie(j);return De}function Zm(H,ie){return kt(ie,function(j){return[j,H[j]]})}function Xu(H){return H&&H.slice(0,Ku(H)+1).replace(Qn,"")}function Un(H){return function(ie){return H(ie)}}function xl(H,ie){return kt(ie,function(j){return H[j]})}function Gs(H,ie){return H.has(ie)}function qu(H,ie){for(var j=-1,De=H.length;++j<De&&$r(ie,H[j],0)>-1;);return j}function Yu(H,ie){for(var j=H.length;j--&&$r(ie,H[j],0)>-1;);return j}function jm(H,ie){for(var j=H.length,De=0;j--;)H[j]===ie&&++De;return De}var Jm=gl(Nm),Qm=gl(Om);function eg(H){return"\\"+Bm[H]}function tg(H,ie){return H==null?t:H[ie]}function Kr(H){return Lm.test(H)}function ng(H){return Dm.test(H)}function ig(H){for(var ie,j=[];!(ie=H.next()).done;)j.push(ie.value);return j}function Sl(H){var ie=-1,j=Array(H.size);return H.forEach(function(De,rt){j[++ie]=[rt,De]}),j}function $u(H,ie){return function(j){return H(ie(j))}}function qi(H,ie){for(var j=-1,De=H.length,rt=0,At=[];++j<De;){var en=H[j];(en===ie||en===p)&&(H[j]=p,At[rt++]=j)}return At}function yo(H){var ie=-1,j=Array(H.size);return H.forEach(function(De){j[++ie]=De}),j}function rg(H){var ie=-1,j=Array(H.size);return H.forEach(function(De){j[++ie]=[De,De]}),j}function sg(H,ie,j){for(var De=j-1,rt=H.length;++De<rt;)if(H[De]===ie)return De;return-1}function og(H,ie,j){for(var De=j+1;De--;)if(H[De]===ie)return De;return De}function Zr(H){return Kr(H)?lg(H):Xm(H)}function ti(H){return Kr(H)?cg(H):qm(H)}function Ku(H){for(var ie=H.length;ie--&&Hr.test(H.charAt(ie)););return ie}var ag=gl(Fm);function lg(H){for(var ie=cl.lastIndex=0;cl.test(H);)++ie;return ie}function cg(H){return H.match(cl)||[]}function ug(H){return H.match(Pm)||[]}var fg=function H(ie){ie=ie==null?ln:jr.defaults(ln.Object(),ie,jr.pick(ln,Im));var j=ie.Array,De=ie.Date,rt=ie.Error,At=ie.Function,en=ie.Math,Nt=ie.Object,Ml=ie.RegExp,hg=ie.String,Xn=ie.TypeError,bo=j.prototype,dg=At.prototype,Jr=Nt.prototype,To=ie["__core-js_shared__"],Ao=dg.toString,Dt=Jr.hasOwnProperty,pg=0,Zu=function(){var n=/[^.]+$/.exec(To&&To.keys&&To.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),wo=Jr.toString,mg=Ao.call(Nt),gg=ln._,_g=Ml("^"+Ao.call(Dt).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ro=Iu?ie.Buffer:t,Yi=ie.Symbol,Co=ie.Uint8Array,ju=Ro?Ro.allocUnsafe:t,Po=$u(Nt.getPrototypeOf,Nt),Ju=Nt.create,Qu=Jr.propertyIsEnumerable,Lo=bo.splice,ef=Yi?Yi.isConcatSpreadable:t,Hs=Yi?Yi.iterator:t,gr=Yi?Yi.toStringTag:t,Do=function(){try{var n=Mr(Nt,"defineProperty");return n({},"",{}),n}catch{}}(),vg=ie.clearTimeout!==ln.clearTimeout&&ie.clearTimeout,xg=De&&De.now!==ln.Date.now&&De.now,Sg=ie.setTimeout!==ln.setTimeout&&ie.setTimeout,Io=en.ceil,Uo=en.floor,El=Nt.getOwnPropertySymbols,Mg=Ro?Ro.isBuffer:t,tf=ie.isFinite,Eg=bo.join,yg=$u(Nt.keys,Nt),tn=en.max,hn=en.min,bg=De.now,Tg=ie.parseInt,nf=en.random,Ag=bo.reverse,yl=Mr(ie,"DataView"),Vs=Mr(ie,"Map"),bl=Mr(ie,"Promise"),Qr=Mr(ie,"Set"),ks=Mr(ie,"WeakMap"),Ws=Mr(Nt,"create"),No=ks&&new ks,es={},wg=Er(yl),Rg=Er(Vs),Cg=Er(bl),Pg=Er(Qr),Lg=Er(ks),Oo=Yi?Yi.prototype:t,Xs=Oo?Oo.valueOf:t,rf=Oo?Oo.toString:t;function y(n){if(qt(n)&&!lt(n)&&!(n instanceof xt)){if(n instanceof qn)return n;if(Dt.call(n,"__wrapped__"))return sh(n)}return new qn(n)}var ts=function(){function n(){}return function(s){if(!Wt(s))return{};if(Ju)return Ju(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Fo(){}function qn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}y.templateSettings={escape:we,evaluate:dt,interpolate:yt,variable:"",imports:{_:y}},y.prototype=Fo.prototype,y.prototype.constructor=y,qn.prototype=ts(Fo.prototype),qn.prototype.constructor=qn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function Dg(){var n=new xt(this.__wrapped__);return n.__actions__=Tn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Tn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Tn(this.__views__),n}function Ig(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Ug(){var n=this.__wrapped__.value(),s=this.__dir__,l=lt(n),h=s<0,S=l?n.length:0,A=q_(0,S,this.__views__),I=A.start,z=A.end,V=z-I,re=h?z:I-1,ae=this.__iteratees__,he=ae.length,Ae=0,ze=hn(V,this.__takeCount__);if(!l||!h&&S==V&&ze==V)return Rf(n,this.__actions__);var Ye=[];e:for(;V--&&Ae<ze;){re+=s;for(var pt=-1,$e=n[re];++pt<he;){var vt=ae[pt],St=vt.iteratee,Fn=vt.type,xn=St($e);if(Fn==se)$e=xn;else if(!xn){if(Fn==G)continue e;break e}}Ye[Ae++]=$e}return Ye}xt.prototype=ts(Fo.prototype),xt.prototype.constructor=xt;function _r(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Ng(){this.__data__=Ws?Ws(null):{},this.size=0}function Og(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Fg(n){var s=this.__data__;if(Ws){var l=s[n];return l===f?t:l}return Dt.call(s,n)?s[n]:t}function Bg(n){var s=this.__data__;return Ws?s[n]!==t:Dt.call(s,n)}function zg(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ws&&s===t?f:s,this}_r.prototype.clear=Ng,_r.prototype.delete=Og,_r.prototype.get=Fg,_r.prototype.has=Bg,_r.prototype.set=zg;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Gg(){this.__data__=[],this.size=0}function Hg(n){var s=this.__data__,l=Bo(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Lo.call(s,l,1),--this.size,!0}function Vg(n){var s=this.__data__,l=Bo(s,n);return l<0?t:s[l][1]}function kg(n){return Bo(this.__data__,n)>-1}function Wg(n,s){var l=this.__data__,h=Bo(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}yi.prototype.clear=Gg,yi.prototype.delete=Hg,yi.prototype.get=Vg,yi.prototype.has=kg,yi.prototype.set=Wg;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Xg(){this.size=0,this.__data__={hash:new _r,map:new(Vs||yi),string:new _r}}function qg(n){var s=Zo(this,n).delete(n);return this.size-=s?1:0,s}function Yg(n){return Zo(this,n).get(n)}function $g(n){return Zo(this,n).has(n)}function Kg(n,s){var l=Zo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}bi.prototype.clear=Xg,bi.prototype.delete=qg,bi.prototype.get=Yg,bi.prototype.has=$g,bi.prototype.set=Kg;function vr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new bi;++s<l;)this.add(n[s])}function Zg(n){return this.__data__.set(n,f),this}function jg(n){return this.__data__.has(n)}vr.prototype.add=vr.prototype.push=Zg,vr.prototype.has=jg;function ni(n){var s=this.__data__=new yi(n);this.size=s.size}function Jg(){this.__data__=new yi,this.size=0}function Qg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function e_(n){return this.__data__.get(n)}function t_(n){return this.__data__.has(n)}function n_(n,s){var l=this.__data__;if(l instanceof yi){var h=l.__data__;if(!Vs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new bi(h)}return l.set(n,s),this.size=l.size,this}ni.prototype.clear=Jg,ni.prototype.delete=Qg,ni.prototype.get=e_,ni.prototype.has=t_,ni.prototype.set=n_;function sf(n,s){var l=lt(n),h=!l&&yr(n),S=!l&&!h&&Ji(n),A=!l&&!h&&!S&&ss(n),I=l||h||S||A,z=I?vl(n.length,hg):[],V=z.length;for(var re in n)(s||Dt.call(n,re))&&!(I&&(re=="length"||S&&(re=="offset"||re=="parent")||A&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||Ri(re,V)))&&z.push(re);return z}function of(n){var s=n.length;return s?n[Nl(0,s-1)]:t}function i_(n,s){return jo(Tn(n),xr(s,0,n.length))}function r_(n){return jo(Tn(n))}function Tl(n,s,l){(l!==t&&!ii(n[s],l)||l===t&&!(s in n))&&Ti(n,s,l)}function qs(n,s,l){var h=n[s];(!(Dt.call(n,s)&&ii(h,l))||l===t&&!(s in n))&&Ti(n,s,l)}function Bo(n,s){for(var l=n.length;l--;)if(ii(n[l][0],s))return l;return-1}function s_(n,s,l,h){return $i(n,function(S,A,I){s(h,S,l(S),I)}),h}function af(n,s){return n&&hi(s,on(s),n)}function o_(n,s){return n&&hi(s,wn(s),n)}function Ti(n,s,l){s=="__proto__"&&Do?Do(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Al(n,s){for(var l=-1,h=s.length,S=j(h),A=n==null;++l<h;)S[l]=A?t:oc(n,s[l]);return S}function xr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,S,A){var I,z=s&_,V=s&v,re=s&x;if(l&&(I=S?l(n,h,S,A):l(n)),I!==t)return I;if(!Wt(n))return n;var ae=lt(n);if(ae){if(I=$_(n),!z)return Tn(n,I)}else{var he=dn(n),Ae=he==W||he==Xt;if(Ji(n))return Lf(n,z);if(he==et||he==de||Ae&&!S){if(I=V||Ae?{}:Zf(n),!z)return V?F_(n,o_(I,n)):O_(n,af(I,n))}else{if(!Ft[he])return S?n:{};I=K_(n,he,z)}}A||(A=new ni);var ze=A.get(n);if(ze)return ze;A.set(n,I),Th(n)?n.forEach(function($e){I.add(Yn($e,s,l,$e,n,A))}):yh(n)&&n.forEach(function($e,vt){I.set(vt,Yn($e,s,l,vt,n,A))});var Ye=re?V?ql:Xl:V?wn:on,pt=ae?t:Ye(n);return Wn(pt||n,function($e,vt){pt&&(vt=$e,$e=n[vt]),qs(I,vt,Yn($e,s,l,vt,n,A))}),I}function a_(n){var s=on(n);return function(l){return lf(l,n,s)}}function lf(n,s,l){var h=l.length;if(n==null)return!h;for(n=Nt(n);h--;){var S=l[h],A=s[S],I=n[S];if(I===t&&!(S in n)||!A(I))return!1}return!0}function cf(n,s,l){if(typeof n!="function")throw new Xn(u);return Qs(function(){n.apply(t,l)},s)}function Ys(n,s,l,h){var S=-1,A=Mo,I=!0,z=n.length,V=[],re=s.length;if(!z)return V;l&&(s=kt(s,Un(l))),h?(A=hl,I=!1):s.length>=o&&(A=Gs,I=!1,s=new vr(s));e:for(;++S<z;){var ae=n[S],he=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,I&&he===he){for(var Ae=re;Ae--;)if(s[Ae]===he)continue e;V.push(ae)}else A(s,he,h)||V.push(ae)}return V}var $i=Of(fi),uf=Of(Rl,!0);function l_(n,s){var l=!0;return $i(n,function(h,S,A){return l=!!s(h,S,A),l}),l}function zo(n,s,l){for(var h=-1,S=n.length;++h<S;){var A=n[h],I=s(A);if(I!=null&&(z===t?I===I&&!On(I):l(I,z)))var z=I,V=A}return V}function c_(n,s,l,h){var S=n.length;for(l=ht(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ht(h),h<0&&(h+=S),h=l>h?0:wh(h);l<h;)n[l++]=s;return n}function ff(n,s){var l=[];return $i(n,function(h,S,A){s(h,S,A)&&l.push(h)}),l}function cn(n,s,l,h,S){var A=-1,I=n.length;for(l||(l=j_),S||(S=[]);++A<I;){var z=n[A];s>0&&l(z)?s>1?cn(z,s-1,l,h,S):Xi(S,z):h||(S[S.length]=z)}return S}var wl=Ff(),hf=Ff(!0);function fi(n,s){return n&&wl(n,s,on)}function Rl(n,s){return n&&hf(n,s,on)}function Go(n,s){return Wi(s,function(l){return Ci(n[l])})}function Sr(n,s){s=Zi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[di(s[l++])];return l&&l==h?n:t}function df(n,s,l){var h=s(n);return lt(n)?h:Xi(h,l(n))}function _n(n){return n==null?n===t?oe:Ve:gr&&gr in Nt(n)?X_(n):rv(n)}function Cl(n,s){return n>s}function u_(n,s){return n!=null&&Dt.call(n,s)}function f_(n,s){return n!=null&&s in Nt(n)}function h_(n,s,l){return n>=hn(s,l)&&n<tn(s,l)}function Pl(n,s,l){for(var h=l?hl:Mo,S=n[0].length,A=n.length,I=A,z=j(A),V=1/0,re=[];I--;){var ae=n[I];I&&s&&(ae=kt(ae,Un(s))),V=hn(ae.length,V),z[I]=!l&&(s||S>=120&&ae.length>=120)?new vr(I&&ae):t}ae=n[0];var he=-1,Ae=z[0];e:for(;++he<S&&re.length<V;){var ze=ae[he],Ye=s?s(ze):ze;if(ze=l||ze!==0?ze:0,!(Ae?Gs(Ae,Ye):h(re,Ye,l))){for(I=A;--I;){var pt=z[I];if(!(pt?Gs(pt,Ye):h(n[I],Ye,l)))continue e}Ae&&Ae.push(Ye),re.push(ze)}}return re}function d_(n,s,l,h){return fi(n,function(S,A,I){s(h,l(S),A,I)}),h}function $s(n,s,l){s=Zi(s,n),n=eh(n,s);var h=n==null?n:n[di(Kn(s))];return h==null?t:In(h,n,l)}function pf(n){return qt(n)&&_n(n)==de}function p_(n){return qt(n)&&_n(n)==Ze}function m_(n){return qt(n)&&_n(n)==Ce}function Ks(n,s,l,h,S){return n===s?!0:n==null||s==null||!qt(n)&&!qt(s)?n!==n&&s!==s:g_(n,s,l,h,Ks,S)}function g_(n,s,l,h,S,A){var I=lt(n),z=lt(s),V=I?Re:dn(n),re=z?Re:dn(s);V=V==de?et:V,re=re==de?et:re;var ae=V==et,he=re==et,Ae=V==re;if(Ae&&Ji(n)){if(!Ji(s))return!1;I=!0,ae=!1}if(Ae&&!ae)return A||(A=new ni),I||ss(n)?Yf(n,s,l,h,S,A):k_(n,s,V,l,h,S,A);if(!(l&M)){var ze=ae&&Dt.call(n,"__wrapped__"),Ye=he&&Dt.call(s,"__wrapped__");if(ze||Ye){var pt=ze?n.value():n,$e=Ye?s.value():s;return A||(A=new ni),S(pt,$e,l,h,A)}}return Ae?(A||(A=new ni),W_(n,s,l,h,S,A)):!1}function __(n){return qt(n)&&dn(n)==Ue}function Ll(n,s,l,h){var S=l.length,A=S,I=!h;if(n==null)return!A;for(n=Nt(n);S--;){var z=l[S];if(I&&z[2]?z[1]!==n[z[0]]:!(z[0]in n))return!1}for(;++S<A;){z=l[S];var V=z[0],re=n[V],ae=z[1];if(I&&z[2]){if(re===t&&!(V in n))return!1}else{var he=new ni;if(h)var Ae=h(re,ae,V,n,s,he);if(!(Ae===t?Ks(ae,re,M|b,h,he):Ae))return!1}}return!0}function mf(n){if(!Wt(n)||Q_(n))return!1;var s=Ci(n)?_g:Z;return s.test(Er(n))}function v_(n){return qt(n)&&_n(n)==Tt}function x_(n){return qt(n)&&dn(n)==P}function S_(n){return qt(n)&&ia(n.length)&&!!zt[_n(n)]}function gf(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?lt(n)?xf(n[0],n[1]):vf(n):Bh(n)}function Dl(n){if(!Js(n))return yg(n);var s=[];for(var l in Nt(n))Dt.call(n,l)&&l!="constructor"&&s.push(l);return s}function M_(n){if(!Wt(n))return iv(n);var s=Js(n),l=[];for(var h in n)h=="constructor"&&(s||!Dt.call(n,h))||l.push(h);return l}function Il(n,s){return n<s}function _f(n,s){var l=-1,h=An(n)?j(n.length):[];return $i(n,function(S,A,I){h[++l]=s(S,A,I)}),h}function vf(n){var s=$l(n);return s.length==1&&s[0][2]?Jf(s[0][0],s[0][1]):function(l){return l===n||Ll(l,n,s)}}function xf(n,s){return Zl(n)&&jf(s)?Jf(di(n),s):function(l){var h=oc(l,n);return h===t&&h===s?ac(l,n):Ks(s,h,M|b)}}function Ho(n,s,l,h,S){n!==s&&wl(s,function(A,I){if(S||(S=new ni),Wt(A))E_(n,s,I,l,Ho,h,S);else{var z=h?h(Jl(n,I),A,I+"",n,s,S):t;z===t&&(z=A),Tl(n,I,z)}},wn)}function E_(n,s,l,h,S,A,I){var z=Jl(n,l),V=Jl(s,l),re=I.get(V);if(re){Tl(n,l,re);return}var ae=A?A(z,V,l+"",n,s,I):t,he=ae===t;if(he){var Ae=lt(V),ze=!Ae&&Ji(V),Ye=!Ae&&!ze&&ss(V);ae=V,Ae||ze||Ye?lt(z)?ae=z:Kt(z)?ae=Tn(z):ze?(he=!1,ae=Lf(V,!0)):Ye?(he=!1,ae=Df(V,!0)):ae=[]:eo(V)||yr(V)?(ae=z,yr(z)?ae=Rh(z):(!Wt(z)||Ci(z))&&(ae=Zf(V))):he=!1}he&&(I.set(V,ae),S(ae,V,h,A,I),I.delete(V)),Tl(n,l,ae)}function Sf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ri(s,l)?n[s]:t}function Mf(n,s,l){s.length?s=kt(s,function(A){return lt(A)?function(I){return Sr(I,A.length===1?A[0]:A)}:A}):s=[Rn];var h=-1;s=kt(s,Un(We()));var S=_f(n,function(A,I,z){var V=kt(s,function(re){return re(A)});return{criteria:V,index:++h,value:A}});return Km(S,function(A,I){return N_(A,I,l)})}function y_(n,s){return Ef(n,s,function(l,h){return ac(n,h)})}function Ef(n,s,l){for(var h=-1,S=s.length,A={};++h<S;){var I=s[h],z=Sr(n,I);l(z,I)&&Zs(A,Zi(I,n),z)}return A}function b_(n){return function(s){return Sr(s,n)}}function Ul(n,s,l,h){var S=h?$m:$r,A=-1,I=s.length,z=n;for(n===s&&(s=Tn(s)),l&&(z=kt(n,Un(l)));++A<I;)for(var V=0,re=s[A],ae=l?l(re):re;(V=S(z,ae,V,h))>-1;)z!==n&&Lo.call(z,V,1),Lo.call(n,V,1);return n}function yf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==A){var A=S;Ri(S)?Lo.call(n,S,1):Bl(n,S)}}return n}function Nl(n,s){return n+Uo(nf()*(s-n+1))}function T_(n,s,l,h){for(var S=-1,A=tn(Io((s-n)/(l||1)),0),I=j(A);A--;)I[h?A:++S]=n,n+=l;return I}function Ol(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Uo(s/2),s&&(n+=n);while(s);return l}function _t(n,s){return Ql(Qf(n,s,Rn),n+"")}function A_(n){return of(os(n))}function w_(n,s){var l=os(n);return jo(l,xr(s,0,l.length))}function Zs(n,s,l,h){if(!Wt(n))return n;s=Zi(s,n);for(var S=-1,A=s.length,I=A-1,z=n;z!=null&&++S<A;){var V=di(s[S]),re=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(S!=I){var ae=z[V];re=h?h(ae,V,z):t,re===t&&(re=Wt(ae)?ae:Ri(s[S+1])?[]:{})}qs(z,V,re),z=z[V]}return n}var bf=No?function(n,s){return No.set(n,s),n}:Rn,R_=Do?function(n,s){return Do(n,"toString",{configurable:!0,enumerable:!1,value:cc(s),writable:!0})}:Rn;function C_(n){return jo(os(n))}function $n(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var A=j(S);++h<S;)A[h]=n[h+s];return A}function P_(n,s){var l;return $i(n,function(h,S,A){return l=s(h,S,A),!l}),!!l}function Vo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=tt){for(;h<S;){var A=h+S>>>1,I=n[A];I!==null&&!On(I)&&(l?I<=s:I<s)?h=A+1:S=A}return S}return Fl(n,s,Rn,l)}function Fl(n,s,l,h){var S=0,A=n==null?0:n.length;if(A===0)return 0;s=l(s);for(var I=s!==s,z=s===null,V=On(s),re=s===t;S<A;){var ae=Uo((S+A)/2),he=l(n[ae]),Ae=he!==t,ze=he===null,Ye=he===he,pt=On(he);if(I)var $e=h||Ye;else re?$e=Ye&&(h||Ae):z?$e=Ye&&Ae&&(h||!ze):V?$e=Ye&&Ae&&!ze&&(h||!pt):ze||pt?$e=!1:$e=h?he<=s:he<s;$e?S=ae+1:A=ae}return hn(A,Ie)}function Tf(n,s){for(var l=-1,h=n.length,S=0,A=[];++l<h;){var I=n[l],z=s?s(I):I;if(!l||!ii(z,V)){var V=z;A[S++]=I===0?0:I}}return A}function Af(n){return typeof n=="number"?n:On(n)?fe:+n}function Nn(n){if(typeof n=="string")return n;if(lt(n))return kt(n,Nn)+"";if(On(n))return rf?rf.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Ki(n,s,l){var h=-1,S=Mo,A=n.length,I=!0,z=[],V=z;if(l)I=!1,S=hl;else if(A>=o){var re=s?null:H_(n);if(re)return yo(re);I=!1,S=Gs,V=new vr}else V=s?[]:z;e:for(;++h<A;){var ae=n[h],he=s?s(ae):ae;if(ae=l||ae!==0?ae:0,I&&he===he){for(var Ae=V.length;Ae--;)if(V[Ae]===he)continue e;s&&V.push(he),z.push(ae)}else S(V,he,l)||(V!==z&&V.push(he),z.push(ae))}return z}function Bl(n,s){return s=Zi(s,n),n=eh(n,s),n==null||delete n[di(Kn(s))]}function wf(n,s,l,h){return Zs(n,s,l(Sr(n,s)),h)}function ko(n,s,l,h){for(var S=n.length,A=h?S:-1;(h?A--:++A<S)&&s(n[A],A,n););return l?$n(n,h?0:A,h?A+1:S):$n(n,h?A+1:0,h?S:A)}function Rf(n,s){var l=n;return l instanceof xt&&(l=l.value()),dl(s,function(h,S){return S.func.apply(S.thisArg,Xi([h],S.args))},l)}function zl(n,s,l){var h=n.length;if(h<2)return h?Ki(n[0]):[];for(var S=-1,A=j(h);++S<h;)for(var I=n[S],z=-1;++z<h;)z!=S&&(A[S]=Ys(A[S]||I,n[z],s,l));return Ki(cn(A,1),s,l)}function Cf(n,s,l){for(var h=-1,S=n.length,A=s.length,I={};++h<S;){var z=h<A?s[h]:t;l(I,n[h],z)}return I}function Gl(n){return Kt(n)?n:[]}function Hl(n){return typeof n=="function"?n:Rn}function Zi(n,s){return lt(n)?n:Zl(n,s)?[n]:rh(Ct(n))}var L_=_t;function ji(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:$n(n,s,l)}var Pf=vg||function(n){return ln.clearTimeout(n)};function Lf(n,s){if(s)return n.slice();var l=n.length,h=ju?ju(l):new n.constructor(l);return n.copy(h),h}function Vl(n){var s=new n.constructor(n.byteLength);return new Co(s).set(new Co(n)),s}function D_(n,s){var l=s?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function I_(n){var s=new n.constructor(n.source,xo.exec(n));return s.lastIndex=n.lastIndex,s}function U_(n){return Xs?Nt(Xs.call(n)):{}}function Df(n,s){var l=s?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function If(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,A=On(n),I=s!==t,z=s===null,V=s===s,re=On(s);if(!z&&!re&&!A&&n>s||A&&I&&V&&!z&&!re||h&&I&&V||!l&&V||!S)return 1;if(!h&&!A&&!re&&n<s||re&&l&&S&&!h&&!A||z&&l&&S||!I&&S||!V)return-1}return 0}function N_(n,s,l){for(var h=-1,S=n.criteria,A=s.criteria,I=S.length,z=l.length;++h<I;){var V=If(S[h],A[h]);if(V){if(h>=z)return V;var re=l[h];return V*(re=="desc"?-1:1)}}return n.index-s.index}function Uf(n,s,l,h){for(var S=-1,A=n.length,I=l.length,z=-1,V=s.length,re=tn(A-I,0),ae=j(V+re),he=!h;++z<V;)ae[z]=s[z];for(;++S<I;)(he||S<A)&&(ae[l[S]]=n[S]);for(;re--;)ae[z++]=n[S++];return ae}function Nf(n,s,l,h){for(var S=-1,A=n.length,I=-1,z=l.length,V=-1,re=s.length,ae=tn(A-z,0),he=j(ae+re),Ae=!h;++S<ae;)he[S]=n[S];for(var ze=S;++V<re;)he[ze+V]=s[V];for(;++I<z;)(Ae||S<A)&&(he[ze+l[I]]=n[S++]);return he}function Tn(n,s){var l=-1,h=n.length;for(s||(s=j(h));++l<h;)s[l]=n[l];return s}function hi(n,s,l,h){var S=!l;l||(l={});for(var A=-1,I=s.length;++A<I;){var z=s[A],V=h?h(l[z],n[z],z,l,n):t;V===t&&(V=n[z]),S?Ti(l,z,V):qs(l,z,V)}return l}function O_(n,s){return hi(n,Kl(n),s)}function F_(n,s){return hi(n,$f(n),s)}function Wo(n,s){return function(l,h){var S=lt(l)?Vm:s_,A=s?s():{};return S(l,n,We(h,2),A)}}function ns(n){return _t(function(s,l){var h=-1,S=l.length,A=S>1?l[S-1]:t,I=S>2?l[2]:t;for(A=n.length>3&&typeof A=="function"?(S--,A):t,I&&vn(l[0],l[1],I)&&(A=S<3?t:A,S=1),s=Nt(s);++h<S;){var z=l[h];z&&n(s,z,h,A)}return s})}function Of(n,s){return function(l,h){if(l==null)return l;if(!An(l))return n(l,h);for(var S=l.length,A=s?S:-1,I=Nt(l);(s?A--:++A<S)&&h(I[A],A,I)!==!1;);return l}}function Ff(n){return function(s,l,h){for(var S=-1,A=Nt(s),I=h(s),z=I.length;z--;){var V=I[n?z:++S];if(l(A[V],V,A)===!1)break}return s}}function B_(n,s,l){var h=s&g,S=js(n);function A(){var I=this&&this!==ln&&this instanceof A?S:n;return I.apply(h?l:this,arguments)}return A}function Bf(n){return function(s){s=Ct(s);var l=Kr(s)?ti(s):t,h=l?l[0]:s.charAt(0),S=l?ji(l,1).join(""):s.slice(1);return h[n]()+S}}function is(n){return function(s){return dl(Oh(Nh(s).replace(Rm,"")),n,"")}}function js(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=ts(n.prototype),h=n.apply(l,s);return Wt(h)?h:l}}function z_(n,s,l){var h=js(n);function S(){for(var A=arguments.length,I=j(A),z=A,V=rs(S);z--;)I[z]=arguments[z];var re=A<3&&I[0]!==V&&I[A-1]!==V?[]:qi(I,V);if(A-=re.length,A<l)return kf(n,s,Xo,S.placeholder,t,I,re,t,t,l-A);var ae=this&&this!==ln&&this instanceof S?h:n;return In(ae,this,I)}return S}function zf(n){return function(s,l,h){var S=Nt(s);if(!An(s)){var A=We(l,3);s=on(s),l=function(z){return A(S[z],z,S)}}var I=n(s,l,h);return I>-1?S[A?s[I]:I]:t}}function Gf(n){return wi(function(s){var l=s.length,h=l,S=qn.prototype.thru;for(n&&s.reverse();h--;){var A=s[h];if(typeof A!="function")throw new Xn(u);if(S&&!I&&Ko(A)=="wrapper")var I=new qn([],!0)}for(h=I?h:l;++h<l;){A=s[h];var z=Ko(A),V=z=="wrapper"?Yl(A):t;V&&jl(V[0])&&V[1]==(L|C|F|Y)&&!V[4].length&&V[9]==1?I=I[Ko(V[0])].apply(I,V[3]):I=A.length==1&&jl(A)?I[z]():I.thru(A)}return function(){var re=arguments,ae=re[0];if(I&&re.length==1&&lt(ae))return I.plant(ae).value();for(var he=0,Ae=l?s[he].apply(this,re):ae;++he<l;)Ae=s[he].call(this,Ae);return Ae}})}function Xo(n,s,l,h,S,A,I,z,V,re){var ae=s&L,he=s&g,Ae=s&m,ze=s&(C|w),Ye=s&ve,pt=Ae?t:js(n);function $e(){for(var vt=arguments.length,St=j(vt),Fn=vt;Fn--;)St[Fn]=arguments[Fn];if(ze)var xn=rs($e),Bn=jm(St,xn);if(h&&(St=Uf(St,h,S,ze)),A&&(St=Nf(St,A,I,ze)),vt-=Bn,ze&&vt<re){var Zt=qi(St,xn);return kf(n,s,Xo,$e.placeholder,l,St,Zt,z,V,re-vt)}var ri=he?l:this,Li=Ae?ri[n]:n;return vt=St.length,z?St=sv(St,z):Ye&&vt>1&&St.reverse(),ae&&V<vt&&(St.length=V),this&&this!==ln&&this instanceof $e&&(Li=pt||js(Li)),Li.apply(ri,St)}return $e}function Hf(n,s){return function(l,h){return d_(l,n,s(h),{})}}function qo(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Nn(l),h=Nn(h)):(l=Af(l),h=Af(h)),S=n(l,h)}return S}}function kl(n){return wi(function(s){return s=kt(s,Un(We())),_t(function(l){var h=this;return n(s,function(S){return In(S,h,l)})})})}function Yo(n,s){s=s===t?" ":Nn(s);var l=s.length;if(l<2)return l?Ol(s,n):s;var h=Ol(s,Io(n/Zr(s)));return Kr(s)?ji(ti(h),0,n).join(""):h.slice(0,n)}function G_(n,s,l,h){var S=s&g,A=js(n);function I(){for(var z=-1,V=arguments.length,re=-1,ae=h.length,he=j(ae+V),Ae=this&&this!==ln&&this instanceof I?A:n;++re<ae;)he[re]=h[re];for(;V--;)he[re++]=arguments[++z];return In(Ae,S?l:this,he)}return I}function Vf(n){return function(s,l,h){return h&&typeof h!="number"&&vn(s,l,h)&&(l=h=t),s=Pi(s),l===t?(l=s,s=0):l=Pi(l),h=h===t?s<l?1:-1:Pi(h),T_(s,l,h,n)}}function $o(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Zn(s),l=Zn(l)),n(s,l)}}function kf(n,s,l,h,S,A,I,z,V,re){var ae=s&C,he=ae?I:t,Ae=ae?t:I,ze=ae?A:t,Ye=ae?t:A;s|=ae?F:O,s&=~(ae?O:F),s&N||(s&=-4);var pt=[n,s,S,ze,he,Ye,Ae,z,V,re],$e=l.apply(t,pt);return jl(n)&&th($e,pt),$e.placeholder=h,nh($e,n,s)}function Wl(n){var s=en[n];return function(l,h){if(l=Zn(l),h=h==null?0:hn(ht(h),292),h&&tf(l)){var S=(Ct(l)+"e").split("e"),A=s(S[0]+"e"+(+S[1]+h));return S=(Ct(A)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var H_=Qr&&1/yo(new Qr([,-0]))[1]==ue?function(n){return new Qr(n)}:hc;function Wf(n){return function(s){var l=dn(s);return l==Ue?Sl(s):l==P?rg(s):Zm(s,n(s))}}function Ai(n,s,l,h,S,A,I,z){var V=s&m;if(!V&&typeof n!="function")throw new Xn(u);var re=h?h.length:0;if(re||(s&=-97,h=S=t),I=I===t?I:tn(ht(I),0),z=z===t?z:ht(z),re-=S?S.length:0,s&O){var ae=h,he=S;h=S=t}var Ae=V?t:Yl(n),ze=[n,s,l,h,S,ae,he,A,I,z];if(Ae&&nv(ze,Ae),n=ze[0],s=ze[1],l=ze[2],h=ze[3],S=ze[4],z=ze[9]=ze[9]===t?V?0:n.length:tn(ze[9]-re,0),!z&&s&(C|w)&&(s&=-25),!s||s==g)var Ye=B_(n,s,l);else s==C||s==w?Ye=z_(n,s,z):(s==F||s==(g|F))&&!S.length?Ye=G_(n,s,l,h):Ye=Xo.apply(t,ze);var pt=Ae?bf:th;return nh(pt(Ye,ze),n,s)}function Xf(n,s,l,h){return n===t||ii(n,Jr[l])&&!Dt.call(h,l)?s:n}function qf(n,s,l,h,S,A){return Wt(n)&&Wt(s)&&(A.set(s,n),Ho(n,s,t,qf,A),A.delete(s)),n}function V_(n){return eo(n)?t:n}function Yf(n,s,l,h,S,A){var I=l&M,z=n.length,V=s.length;if(z!=V&&!(I&&V>z))return!1;var re=A.get(n),ae=A.get(s);if(re&&ae)return re==s&&ae==n;var he=-1,Ae=!0,ze=l&b?new vr:t;for(A.set(n,s),A.set(s,n);++he<z;){var Ye=n[he],pt=s[he];if(h)var $e=I?h(pt,Ye,he,s,n,A):h(Ye,pt,he,n,s,A);if($e!==t){if($e)continue;Ae=!1;break}if(ze){if(!pl(s,function(vt,St){if(!Gs(ze,St)&&(Ye===vt||S(Ye,vt,l,h,A)))return ze.push(St)})){Ae=!1;break}}else if(!(Ye===pt||S(Ye,pt,l,h,A))){Ae=!1;break}}return A.delete(n),A.delete(s),Ae}function k_(n,s,l,h,S,A,I){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ze:return!(n.byteLength!=s.byteLength||!A(new Co(n),new Co(s)));case Oe:case Ce:case Je:return ii(+n,+s);case ke:return n.name==s.name&&n.message==s.message;case Tt:case E:return n==s+"";case Ue:var z=Sl;case P:var V=h&M;if(z||(z=yo),n.size!=s.size&&!V)return!1;var re=I.get(n);if(re)return re==s;h|=b,I.set(n,s);var ae=Yf(z(n),z(s),h,S,A,I);return I.delete(n),ae;case ee:if(Xs)return Xs.call(n)==Xs.call(s)}return!1}function W_(n,s,l,h,S,A){var I=l&M,z=Xl(n),V=z.length,re=Xl(s),ae=re.length;if(V!=ae&&!I)return!1;for(var he=V;he--;){var Ae=z[he];if(!(I?Ae in s:Dt.call(s,Ae)))return!1}var ze=A.get(n),Ye=A.get(s);if(ze&&Ye)return ze==s&&Ye==n;var pt=!0;A.set(n,s),A.set(s,n);for(var $e=I;++he<V;){Ae=z[he];var vt=n[Ae],St=s[Ae];if(h)var Fn=I?h(St,vt,Ae,s,n,A):h(vt,St,Ae,n,s,A);if(!(Fn===t?vt===St||S(vt,St,l,h,A):Fn)){pt=!1;break}$e||($e=Ae=="constructor")}if(pt&&!$e){var xn=n.constructor,Bn=s.constructor;xn!=Bn&&"constructor"in n&&"constructor"in s&&!(typeof xn=="function"&&xn instanceof xn&&typeof Bn=="function"&&Bn instanceof Bn)&&(pt=!1)}return A.delete(n),A.delete(s),pt}function wi(n){return Ql(Qf(n,t,lh),n+"")}function Xl(n){return df(n,on,Kl)}function ql(n){return df(n,wn,$f)}var Yl=No?function(n){return No.get(n)}:hc;function Ko(n){for(var s=n.name+"",l=es[s],h=Dt.call(es,s)?l.length:0;h--;){var S=l[h],A=S.func;if(A==null||A==n)return S.name}return s}function rs(n){var s=Dt.call(y,"placeholder")?y:n;return s.placeholder}function We(){var n=y.iteratee||uc;return n=n===uc?gf:n,arguments.length?n(arguments[0],arguments[1]):n}function Zo(n,s){var l=n.__data__;return J_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function $l(n){for(var s=on(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,jf(S)]}return s}function Mr(n,s){var l=tg(n,s);return mf(l)?l:t}function X_(n){var s=Dt.call(n,gr),l=n[gr];try{n[gr]=t;var h=!0}catch{}var S=wo.call(n);return h&&(s?n[gr]=l:delete n[gr]),S}var Kl=El?function(n){return n==null?[]:(n=Nt(n),Wi(El(n),function(s){return Qu.call(n,s)}))}:dc,$f=El?function(n){for(var s=[];n;)Xi(s,Kl(n)),n=Po(n);return s}:dc,dn=_n;(yl&&dn(new yl(new ArrayBuffer(1)))!=He||Vs&&dn(new Vs)!=Ue||bl&&dn(bl.resolve())!=nt||Qr&&dn(new Qr)!=P||ks&&dn(new ks)!=ge)&&(dn=function(n){var s=_n(n),l=s==et?n.constructor:t,h=l?Er(l):"";if(h)switch(h){case wg:return He;case Rg:return Ue;case Cg:return nt;case Pg:return P;case Lg:return ge}return s});function q_(n,s,l){for(var h=-1,S=l.length;++h<S;){var A=l[h],I=A.size;switch(A.type){case"drop":n+=I;break;case"dropRight":s-=I;break;case"take":s=hn(s,n+I);break;case"takeRight":n=tn(n,s-I);break}}return{start:n,end:s}}function Y_(n){var s=n.match(go);return s?s[1].split(kr):[]}function Kf(n,s,l){s=Zi(s,n);for(var h=-1,S=s.length,A=!1;++h<S;){var I=di(s[h]);if(!(A=n!=null&&l(n,I)))break;n=n[I]}return A||++h!=S?A:(S=n==null?0:n.length,!!S&&ia(S)&&Ri(I,S)&&(lt(n)||yr(n)))}function $_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Dt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Zf(n){return typeof n.constructor=="function"&&!Js(n)?ts(Po(n)):{}}function K_(n,s,l){var h=n.constructor;switch(s){case Ze:return Vl(n);case Oe:case Ce:return new h(+n);case He:return D_(n,l);case ye:case Te:case Qe:case Ee:case Ot:case ot:case Ge:case Le:case Fe:return Df(n,l);case Ue:return new h;case Je:case E:return new h(n);case Tt:return I_(n);case P:return new h;case ee:return U_(n)}}function Z_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Vr,`{
/* [wrapped with `+s+`] */
`)}function j_(n){return lt(n)||yr(n)||!!(ef&&n&&n[ef])}function Ri(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&K.test(n))&&n>-1&&n%1==0&&n<s}function vn(n,s,l){if(!Wt(l))return!1;var h=typeof s;return(h=="number"?An(l)&&Ri(s,l.length):h=="string"&&s in l)?ii(l[s],n):!1}function Zl(n,s){if(lt(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||On(n)?!0:Ht.test(n)||!Pt.test(n)||s!=null&&n in Nt(s)}function J_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function jl(n){var s=Ko(n),l=y[s];if(typeof l!="function"||!(s in xt.prototype))return!1;if(n===l)return!0;var h=Yl(l);return!!h&&n===h[0]}function Q_(n){return!!Zu&&Zu in n}var ev=To?Ci:pc;function Js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Jr;return n===l}function jf(n){return n===n&&!Wt(n)}function Jf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Nt(l))}}function tv(n){var s=ta(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function nv(n,s){var l=n[1],h=s[1],S=l|h,A=S<(g|m|L),I=h==L&&l==C||h==L&&l==Y&&n[7].length<=s[8]||h==(L|Y)&&s[7].length<=s[8]&&l==C;if(!(A||I))return n;h&g&&(n[2]=s[2],S|=l&g?0:N);var z=s[3];if(z){var V=n[3];n[3]=V?Uf(V,z,s[4]):z,n[4]=V?qi(n[3],p):s[4]}return z=s[5],z&&(V=n[5],n[5]=V?Nf(V,z,s[6]):z,n[6]=V?qi(n[5],p):s[6]),z=s[7],z&&(n[7]=z),h&L&&(n[8]=n[8]==null?s[8]:hn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function iv(n){var s=[];if(n!=null)for(var l in Nt(n))s.push(l);return s}function rv(n){return wo.call(n)}function Qf(n,s,l){return s=tn(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,A=tn(h.length-s,0),I=j(A);++S<A;)I[S]=h[s+S];S=-1;for(var z=j(s+1);++S<s;)z[S]=h[S];return z[s]=l(I),In(n,this,z)}}function eh(n,s){return s.length<2?n:Sr(n,$n(s,0,-1))}function sv(n,s){for(var l=n.length,h=hn(s.length,l),S=Tn(n);h--;){var A=s[h];n[h]=Ri(A,l)?S[A]:t}return n}function Jl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var th=ih(bf),Qs=Sg||function(n,s){return ln.setTimeout(n,s)},Ql=ih(R_);function nh(n,s,l){var h=s+"";return Ql(n,Z_(h,ov(Y_(h),l)))}function ih(n){var s=0,l=0;return function(){var h=bg(),S=me-(h-l);if(l=h,S>0){if(++s>=xe)return arguments[0]}else s=0;return n.apply(t,arguments)}}function jo(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var A=Nl(l,S),I=n[A];n[A]=n[l],n[l]=I}return n.length=s,n}var rh=tv(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,S,A){s.push(S?A.replace(sl,"$1"):h||l)}),s});function di(n){if(typeof n=="string"||On(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Er(n){if(n!=null){try{return Ao.call(n)}catch{}try{return n+""}catch{}}return""}function ov(n,s){return Wn(Q,function(l){var h="_."+l[0];s&l[1]&&!Mo(n,h)&&n.push(h)}),n.sort()}function sh(n){if(n instanceof xt)return n.clone();var s=new qn(n.__wrapped__,n.__chain__);return s.__actions__=Tn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function av(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=tn(ht(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,A=0,I=j(Io(h/s));S<h;)I[A++]=$n(n,S,S+=s);return I}function lv(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var A=n[s];A&&(S[h++]=A)}return S}function cv(){var n=arguments.length;if(!n)return[];for(var s=j(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Xi(lt(l)?Tn(l):[l],cn(s,1))}var uv=_t(function(n,s){return Kt(n)?Ys(n,cn(s,1,Kt,!0)):[]}),fv=_t(function(n,s){var l=Kn(s);return Kt(l)&&(l=t),Kt(n)?Ys(n,cn(s,1,Kt,!0),We(l,2)):[]}),hv=_t(function(n,s){var l=Kn(s);return Kt(l)&&(l=t),Kt(n)?Ys(n,cn(s,1,Kt,!0),t,l):[]});function dv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),$n(n,s<0?0:s,h)):[]}function pv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,$n(n,0,s<0?0:s)):[]}function mv(n,s){return n&&n.length?ko(n,We(s,3),!0,!0):[]}function gv(n,s){return n&&n.length?ko(n,We(s,3),!0):[]}function _v(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&vn(n,s,l)&&(l=0,h=S),c_(n,s,l,h)):[]}function oh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=tn(h+S,0)),Eo(n,We(s,3),S)}function ah(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ht(l),S=l<0?tn(h+S,0):hn(S,h-1)),Eo(n,We(s,3),S,!0)}function lh(n){var s=n==null?0:n.length;return s?cn(n,1):[]}function vv(n){var s=n==null?0:n.length;return s?cn(n,ue):[]}function xv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ht(s),cn(n,s)):[]}function Sv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function ch(n){return n&&n.length?n[0]:t}function Mv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=tn(h+S,0)),$r(n,s,S)}function Ev(n){var s=n==null?0:n.length;return s?$n(n,0,-1):[]}var yv=_t(function(n){var s=kt(n,Gl);return s.length&&s[0]===n[0]?Pl(s):[]}),bv=_t(function(n){var s=Kn(n),l=kt(n,Gl);return s===Kn(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Pl(l,We(s,2)):[]}),Tv=_t(function(n){var s=Kn(n),l=kt(n,Gl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Pl(l,t,s):[]});function Av(n,s){return n==null?"":Eg.call(n,s)}function Kn(n){var s=n==null?0:n.length;return s?n[s-1]:t}function wv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ht(l),S=S<0?tn(h+S,0):hn(S,h-1)),s===s?og(n,s,S):Eo(n,Vu,S,!0)}function Rv(n,s){return n&&n.length?Sf(n,ht(s)):t}var Cv=_t(uh);function uh(n,s){return n&&n.length&&s&&s.length?Ul(n,s):n}function Pv(n,s,l){return n&&n.length&&s&&s.length?Ul(n,s,We(l,2)):n}function Lv(n,s,l){return n&&n.length&&s&&s.length?Ul(n,s,t,l):n}var Dv=wi(function(n,s){var l=n==null?0:n.length,h=Al(n,s);return yf(n,kt(s,function(S){return Ri(S,l)?+S:S}).sort(If)),h});function Iv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],A=n.length;for(s=We(s,3);++h<A;){var I=n[h];s(I,h,n)&&(l.push(I),S.push(h))}return yf(n,S),l}function ec(n){return n==null?n:Ag.call(n)}function Uv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&vn(n,s,l)?(s=0,l=h):(s=s==null?0:ht(s),l=l===t?h:ht(l)),$n(n,s,l)):[]}function Nv(n,s){return Vo(n,s)}function Ov(n,s,l){return Fl(n,s,We(l,2))}function Fv(n,s){var l=n==null?0:n.length;if(l){var h=Vo(n,s);if(h<l&&ii(n[h],s))return h}return-1}function Bv(n,s){return Vo(n,s,!0)}function zv(n,s,l){return Fl(n,s,We(l,2),!0)}function Gv(n,s){var l=n==null?0:n.length;if(l){var h=Vo(n,s,!0)-1;if(ii(n[h],s))return h}return-1}function Hv(n){return n&&n.length?Tf(n):[]}function Vv(n,s){return n&&n.length?Tf(n,We(s,2)):[]}function kv(n){var s=n==null?0:n.length;return s?$n(n,1,s):[]}function Wv(n,s,l){return n&&n.length?(s=l||s===t?1:ht(s),$n(n,0,s<0?0:s)):[]}function Xv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,$n(n,s<0?0:s,h)):[]}function qv(n,s){return n&&n.length?ko(n,We(s,3),!1,!0):[]}function Yv(n,s){return n&&n.length?ko(n,We(s,3)):[]}var $v=_t(function(n){return Ki(cn(n,1,Kt,!0))}),Kv=_t(function(n){var s=Kn(n);return Kt(s)&&(s=t),Ki(cn(n,1,Kt,!0),We(s,2))}),Zv=_t(function(n){var s=Kn(n);return s=typeof s=="function"?s:t,Ki(cn(n,1,Kt,!0),t,s)});function jv(n){return n&&n.length?Ki(n):[]}function Jv(n,s){return n&&n.length?Ki(n,We(s,2)):[]}function Qv(n,s){return s=typeof s=="function"?s:t,n&&n.length?Ki(n,t,s):[]}function tc(n){if(!(n&&n.length))return[];var s=0;return n=Wi(n,function(l){if(Kt(l))return s=tn(l.length,s),!0}),vl(s,function(l){return kt(n,ml(l))})}function fh(n,s){if(!(n&&n.length))return[];var l=tc(n);return s==null?l:kt(l,function(h){return In(s,t,h)})}var e0=_t(function(n,s){return Kt(n)?Ys(n,s):[]}),t0=_t(function(n){return zl(Wi(n,Kt))}),n0=_t(function(n){var s=Kn(n);return Kt(s)&&(s=t),zl(Wi(n,Kt),We(s,2))}),i0=_t(function(n){var s=Kn(n);return s=typeof s=="function"?s:t,zl(Wi(n,Kt),t,s)}),r0=_t(tc);function s0(n,s){return Cf(n||[],s||[],qs)}function o0(n,s){return Cf(n||[],s||[],Zs)}var a0=_t(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,fh(n,l)});function hh(n){var s=y(n);return s.__chain__=!0,s}function l0(n,s){return s(n),n}function Jo(n,s){return s(n)}var c0=wi(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(A){return Al(A,n)};return s>1||this.__actions__.length||!(h instanceof xt)||!Ri(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:Jo,args:[S],thisArg:t}),new qn(h,this.__chain__).thru(function(A){return s&&!A.length&&A.push(t),A}))});function u0(){return hh(this)}function f0(){return new qn(this.value(),this.__chain__)}function h0(){this.__values__===t&&(this.__values__=Ah(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function d0(){return this}function p0(n){for(var s,l=this;l instanceof Fo;){var h=sh(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function m0(){var n=this.__wrapped__;if(n instanceof xt){var s=n;return this.__actions__.length&&(s=new xt(this)),s=s.reverse(),s.__actions__.push({func:Jo,args:[ec],thisArg:t}),new qn(s,this.__chain__)}return this.thru(ec)}function g0(){return Rf(this.__wrapped__,this.__actions__)}var _0=Wo(function(n,s,l){Dt.call(n,l)?++n[l]:Ti(n,l,1)});function v0(n,s,l){var h=lt(n)?Gu:l_;return l&&vn(n,s,l)&&(s=t),h(n,We(s,3))}function x0(n,s){var l=lt(n)?Wi:ff;return l(n,We(s,3))}var S0=zf(oh),M0=zf(ah);function E0(n,s){return cn(Qo(n,s),1)}function y0(n,s){return cn(Qo(n,s),ue)}function b0(n,s,l){return l=l===t?1:ht(l),cn(Qo(n,s),l)}function dh(n,s){var l=lt(n)?Wn:$i;return l(n,We(s,3))}function ph(n,s){var l=lt(n)?km:uf;return l(n,We(s,3))}var T0=Wo(function(n,s,l){Dt.call(n,l)?n[l].push(s):Ti(n,l,[s])});function A0(n,s,l,h){n=An(n)?n:os(n),l=l&&!h?ht(l):0;var S=n.length;return l<0&&(l=tn(S+l,0)),ra(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&$r(n,s,l)>-1}var w0=_t(function(n,s,l){var h=-1,S=typeof s=="function",A=An(n)?j(n.length):[];return $i(n,function(I){A[++h]=S?In(s,I,l):$s(I,s,l)}),A}),R0=Wo(function(n,s,l){Ti(n,l,s)});function Qo(n,s){var l=lt(n)?kt:_f;return l(n,We(s,3))}function C0(n,s,l,h){return n==null?[]:(lt(s)||(s=s==null?[]:[s]),l=h?t:l,lt(l)||(l=l==null?[]:[l]),Mf(n,s,l))}var P0=Wo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function L0(n,s,l){var h=lt(n)?dl:Wu,S=arguments.length<3;return h(n,We(s,4),l,S,$i)}function D0(n,s,l){var h=lt(n)?Wm:Wu,S=arguments.length<3;return h(n,We(s,4),l,S,uf)}function I0(n,s){var l=lt(n)?Wi:ff;return l(n,na(We(s,3)))}function U0(n){var s=lt(n)?of:A_;return s(n)}function N0(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=ht(s);var h=lt(n)?i_:w_;return h(n,s)}function O0(n){var s=lt(n)?r_:C_;return s(n)}function F0(n){if(n==null)return 0;if(An(n))return ra(n)?Zr(n):n.length;var s=dn(n);return s==Ue||s==P?n.size:Dl(n).length}function B0(n,s,l){var h=lt(n)?pl:P_;return l&&vn(n,s,l)&&(s=t),h(n,We(s,3))}var z0=_t(function(n,s){if(n==null)return[];var l=s.length;return l>1&&vn(n,s[0],s[1])?s=[]:l>2&&vn(s[0],s[1],s[2])&&(s=[s[0]]),Mf(n,cn(s,1),[])}),ea=xg||function(){return ln.Date.now()};function G0(n,s){if(typeof s!="function")throw new Xn(u);return n=ht(n),function(){if(--n<1)return s.apply(this,arguments)}}function mh(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Ai(n,L,t,t,t,t,s)}function gh(n,s){var l;if(typeof s!="function")throw new Xn(u);return n=ht(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var nc=_t(function(n,s,l){var h=g;if(l.length){var S=qi(l,rs(nc));h|=F}return Ai(n,h,s,l,S)}),_h=_t(function(n,s,l){var h=g|m;if(l.length){var S=qi(l,rs(_h));h|=F}return Ai(s,h,n,l,S)});function vh(n,s,l){s=l?t:s;var h=Ai(n,C,t,t,t,t,t,s);return h.placeholder=vh.placeholder,h}function xh(n,s,l){s=l?t:s;var h=Ai(n,w,t,t,t,t,t,s);return h.placeholder=xh.placeholder,h}function Sh(n,s,l){var h,S,A,I,z,V,re=0,ae=!1,he=!1,Ae=!0;if(typeof n!="function")throw new Xn(u);s=Zn(s)||0,Wt(l)&&(ae=!!l.leading,he="maxWait"in l,A=he?tn(Zn(l.maxWait)||0,s):A,Ae="trailing"in l?!!l.trailing:Ae);function ze(Zt){var ri=h,Li=S;return h=S=t,re=Zt,I=n.apply(Li,ri),I}function Ye(Zt){return re=Zt,z=Qs(vt,s),ae?ze(Zt):I}function pt(Zt){var ri=Zt-V,Li=Zt-re,zh=s-ri;return he?hn(zh,A-Li):zh}function $e(Zt){var ri=Zt-V,Li=Zt-re;return V===t||ri>=s||ri<0||he&&Li>=A}function vt(){var Zt=ea();if($e(Zt))return St(Zt);z=Qs(vt,pt(Zt))}function St(Zt){return z=t,Ae&&h?ze(Zt):(h=S=t,I)}function Fn(){z!==t&&Pf(z),re=0,h=V=S=z=t}function xn(){return z===t?I:St(ea())}function Bn(){var Zt=ea(),ri=$e(Zt);if(h=arguments,S=this,V=Zt,ri){if(z===t)return Ye(V);if(he)return Pf(z),z=Qs(vt,s),ze(V)}return z===t&&(z=Qs(vt,s)),I}return Bn.cancel=Fn,Bn.flush=xn,Bn}var H0=_t(function(n,s){return cf(n,1,s)}),V0=_t(function(n,s,l){return cf(n,Zn(s)||0,l)});function k0(n){return Ai(n,ve)}function ta(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Xn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],A=l.cache;if(A.has(S))return A.get(S);var I=n.apply(this,h);return l.cache=A.set(S,I)||A,I};return l.cache=new(ta.Cache||bi),l}ta.Cache=bi;function na(n){if(typeof n!="function")throw new Xn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function W0(n){return gh(2,n)}var X0=L_(function(n,s){s=s.length==1&&lt(s[0])?kt(s[0],Un(We())):kt(cn(s,1),Un(We()));var l=s.length;return _t(function(h){for(var S=-1,A=hn(h.length,l);++S<A;)h[S]=s[S].call(this,h[S]);return In(n,this,h)})}),ic=_t(function(n,s){var l=qi(s,rs(ic));return Ai(n,F,t,s,l)}),Mh=_t(function(n,s){var l=qi(s,rs(Mh));return Ai(n,O,t,s,l)}),q0=wi(function(n,s){return Ai(n,Y,t,t,t,s)});function Y0(n,s){if(typeof n!="function")throw new Xn(u);return s=s===t?s:ht(s),_t(n,s)}function $0(n,s){if(typeof n!="function")throw new Xn(u);return s=s==null?0:tn(ht(s),0),_t(function(l){var h=l[s],S=ji(l,0,s);return h&&Xi(S,h),In(n,this,S)})}function K0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Xn(u);return Wt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),Sh(n,s,{leading:h,maxWait:s,trailing:S})}function Z0(n){return mh(n,1)}function j0(n,s){return ic(Hl(s),n)}function J0(){if(!arguments.length)return[];var n=arguments[0];return lt(n)?n:[n]}function Q0(n){return Yn(n,x)}function ex(n,s){return s=typeof s=="function"?s:t,Yn(n,x,s)}function tx(n){return Yn(n,_|x)}function nx(n,s){return s=typeof s=="function"?s:t,Yn(n,_|x,s)}function ix(n,s){return s==null||lf(n,s,on(s))}function ii(n,s){return n===s||n!==n&&s!==s}var rx=$o(Cl),sx=$o(function(n,s){return n>=s}),yr=pf(function(){return arguments}())?pf:function(n){return qt(n)&&Dt.call(n,"callee")&&!Qu.call(n,"callee")},lt=j.isArray,ox=Uu?Un(Uu):p_;function An(n){return n!=null&&ia(n.length)&&!Ci(n)}function Kt(n){return qt(n)&&An(n)}function ax(n){return n===!0||n===!1||qt(n)&&_n(n)==Oe}var Ji=Mg||pc,lx=Nu?Un(Nu):m_;function cx(n){return qt(n)&&n.nodeType===1&&!eo(n)}function ux(n){if(n==null)return!0;if(An(n)&&(lt(n)||typeof n=="string"||typeof n.splice=="function"||Ji(n)||ss(n)||yr(n)))return!n.length;var s=dn(n);if(s==Ue||s==P)return!n.size;if(Js(n))return!Dl(n).length;for(var l in n)if(Dt.call(n,l))return!1;return!0}function fx(n,s){return Ks(n,s)}function hx(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?Ks(n,s,t,l):!!h}function rc(n){if(!qt(n))return!1;var s=_n(n);return s==ke||s==Mt||typeof n.message=="string"&&typeof n.name=="string"&&!eo(n)}function dx(n){return typeof n=="number"&&tf(n)}function Ci(n){if(!Wt(n))return!1;var s=_n(n);return s==W||s==Xt||s==je||s==ct}function Eh(n){return typeof n=="number"&&n==ht(n)}function ia(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function Wt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function qt(n){return n!=null&&typeof n=="object"}var yh=Ou?Un(Ou):__;function px(n,s){return n===s||Ll(n,s,$l(s))}function mx(n,s,l){return l=typeof l=="function"?l:t,Ll(n,s,$l(s),l)}function gx(n){return bh(n)&&n!=+n}function _x(n){if(ev(n))throw new rt(a);return mf(n)}function vx(n){return n===null}function xx(n){return n==null}function bh(n){return typeof n=="number"||qt(n)&&_n(n)==Je}function eo(n){if(!qt(n)||_n(n)!=et)return!1;var s=Po(n);if(s===null)return!0;var l=Dt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ao.call(l)==mg}var sc=Fu?Un(Fu):v_;function Sx(n){return Eh(n)&&n>=-9007199254740991&&n<=te}var Th=Bu?Un(Bu):x_;function ra(n){return typeof n=="string"||!lt(n)&&qt(n)&&_n(n)==E}function On(n){return typeof n=="symbol"||qt(n)&&_n(n)==ee}var ss=zu?Un(zu):S_;function Mx(n){return n===t}function Ex(n){return qt(n)&&dn(n)==ge}function yx(n){return qt(n)&&_n(n)==pe}var bx=$o(Il),Tx=$o(function(n,s){return n<=s});function Ah(n){if(!n)return[];if(An(n))return ra(n)?ti(n):Tn(n);if(Hs&&n[Hs])return ig(n[Hs]());var s=dn(n),l=s==Ue?Sl:s==P?yo:os;return l(n)}function Pi(n){if(!n)return n===0?n:0;if(n=Zn(n),n===ue||n===-1/0){var s=n<0?-1:1;return s*ce}return n===n?n:0}function ht(n){var s=Pi(n),l=s%1;return s===s?l?s-l:s:0}function wh(n){return n?xr(ht(n),0,Se):0}function Zn(n){if(typeof n=="number")return n;if(On(n))return fe;if(Wt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Wt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Xu(n);var l=k.test(n);return l||J.test(n)?Gm(n.slice(2),l?2:8):R.test(n)?fe:+n}function Rh(n){return hi(n,wn(n))}function Ax(n){return n?xr(ht(n),-9007199254740991,te):n===0?n:0}function Ct(n){return n==null?"":Nn(n)}var wx=ns(function(n,s){if(Js(s)||An(s)){hi(s,on(s),n);return}for(var l in s)Dt.call(s,l)&&qs(n,l,s[l])}),Ch=ns(function(n,s){hi(s,wn(s),n)}),sa=ns(function(n,s,l,h){hi(s,wn(s),n,h)}),Rx=ns(function(n,s,l,h){hi(s,on(s),n,h)}),Cx=wi(Al);function Px(n,s){var l=ts(n);return s==null?l:af(l,s)}var Lx=_t(function(n,s){n=Nt(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&vn(s[0],s[1],S)&&(h=1);++l<h;)for(var A=s[l],I=wn(A),z=-1,V=I.length;++z<V;){var re=I[z],ae=n[re];(ae===t||ii(ae,Jr[re])&&!Dt.call(n,re))&&(n[re]=A[re])}return n}),Dx=_t(function(n){return n.push(t,qf),In(Ph,t,n)});function Ix(n,s){return Hu(n,We(s,3),fi)}function Ux(n,s){return Hu(n,We(s,3),Rl)}function Nx(n,s){return n==null?n:wl(n,We(s,3),wn)}function Ox(n,s){return n==null?n:hf(n,We(s,3),wn)}function Fx(n,s){return n&&fi(n,We(s,3))}function Bx(n,s){return n&&Rl(n,We(s,3))}function zx(n){return n==null?[]:Go(n,on(n))}function Gx(n){return n==null?[]:Go(n,wn(n))}function oc(n,s,l){var h=n==null?t:Sr(n,s);return h===t?l:h}function Hx(n,s){return n!=null&&Kf(n,s,u_)}function ac(n,s){return n!=null&&Kf(n,s,f_)}var Vx=Hf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=wo.call(s)),n[s]=l},cc(Rn)),kx=Hf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=wo.call(s)),Dt.call(n,s)?n[s].push(l):n[s]=[l]},We),Wx=_t($s);function on(n){return An(n)?sf(n):Dl(n)}function wn(n){return An(n)?sf(n,!0):M_(n)}function Xx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,A){Ti(l,s(h,S,A),h)}),l}function qx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,A){Ti(l,S,s(h,S,A))}),l}var Yx=ns(function(n,s,l){Ho(n,s,l)}),Ph=ns(function(n,s,l,h){Ho(n,s,l,h)}),$x=wi(function(n,s){var l={};if(n==null)return l;var h=!1;s=kt(s,function(A){return A=Zi(A,n),h||(h=A.length>1),A}),hi(n,ql(n),l),h&&(l=Yn(l,_|v|x,V_));for(var S=s.length;S--;)Bl(l,s[S]);return l});function Kx(n,s){return Lh(n,na(We(s)))}var Zx=wi(function(n,s){return n==null?{}:y_(n,s)});function Lh(n,s){if(n==null)return{};var l=kt(ql(n),function(h){return[h]});return s=We(s),Ef(n,l,function(h,S){return s(h,S[0])})}function jx(n,s,l){s=Zi(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var A=n==null?t:n[di(s[h])];A===t&&(h=S,A=l),n=Ci(A)?A.call(n):A}return n}function Jx(n,s,l){return n==null?n:Zs(n,s,l)}function Qx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Zs(n,s,l,h)}var Dh=Wf(on),Ih=Wf(wn);function eS(n,s,l){var h=lt(n),S=h||Ji(n)||ss(n);if(s=We(s,4),l==null){var A=n&&n.constructor;S?l=h?new A:[]:Wt(n)?l=Ci(A)?ts(Po(n)):{}:l={}}return(S?Wn:fi)(n,function(I,z,V){return s(l,I,z,V)}),l}function tS(n,s){return n==null?!0:Bl(n,s)}function nS(n,s,l){return n==null?n:wf(n,s,Hl(l))}function iS(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:wf(n,s,Hl(l),h)}function os(n){return n==null?[]:xl(n,on(n))}function rS(n){return n==null?[]:xl(n,wn(n))}function sS(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Zn(l),l=l===l?l:0),s!==t&&(s=Zn(s),s=s===s?s:0),xr(Zn(n),s,l)}function oS(n,s,l){return s=Pi(s),l===t?(l=s,s=0):l=Pi(l),n=Zn(n),h_(n,s,l)}function aS(n,s,l){if(l&&typeof l!="boolean"&&vn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Pi(n),s===t?(s=n,n=0):s=Pi(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=nf();return hn(n+S*(s-n+zm("1e-"+((S+"").length-1))),s)}return Nl(n,s)}var lS=is(function(n,s,l){return s=s.toLowerCase(),n+(l?Uh(s):s)});function Uh(n){return lc(Ct(n).toLowerCase())}function Nh(n){return n=Ct(n),n&&n.replace(Pe,Jm).replace(Cm,"")}function cS(n,s,l){n=Ct(n),s=Nn(s);var h=n.length;l=l===t?h:xr(ht(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function uS(n){return n=Ct(n),n&&_e.test(n)?n.replace(Me,Qm):n}function fS(n){return n=Ct(n),n&&sn.test(n)?n.replace(Lt,"\\$&"):n}var hS=is(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),dS=is(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),pS=Bf("toLowerCase");function mS(n,s,l){n=Ct(n),s=ht(s);var h=s?Zr(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return Yo(Uo(S),l)+n+Yo(Io(S),l)}function gS(n,s,l){n=Ct(n),s=ht(s);var h=s?Zr(n):0;return s&&h<s?n+Yo(s-h,l):n}function _S(n,s,l){n=Ct(n),s=ht(s);var h=s?Zr(n):0;return s&&h<s?Yo(s-h,l)+n:n}function vS(n,s,l){return l||s==null?s=0:s&&(s=+s),Tg(Ct(n).replace(Qn,""),s||0)}function xS(n,s,l){return(l?vn(n,s,l):s===t)?s=1:s=ht(s),Ol(Ct(n),s)}function SS(){var n=arguments,s=Ct(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var MS=is(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function ES(n,s,l){return l&&typeof l!="number"&&vn(n,s,l)&&(s=l=t),l=l===t?Se:l>>>0,l?(n=Ct(n),n&&(typeof s=="string"||s!=null&&!sc(s))&&(s=Nn(s),!s&&Kr(n))?ji(ti(n),0,l):n.split(s,l)):[]}var yS=is(function(n,s,l){return n+(l?" ":"")+lc(s)});function bS(n,s,l){return n=Ct(n),l=l==null?0:xr(ht(l),0,n.length),s=Nn(s),n.slice(l,l+s.length)==s}function TS(n,s,l){var h=y.templateSettings;l&&vn(n,s,l)&&(s=t),n=Ct(n),s=sa({},s,h,Xf);var S=sa({},s.imports,h.imports,Xf),A=on(S),I=xl(S,A),z,V,re=0,ae=s.interpolate||Be,he="__p += '",Ae=Ml((s.escape||Be).source+"|"+ae.source+"|"+(ae===yt?ol:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),ze="//# sourceURL="+(Dt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Um+"]")+`
`;n.replace(Ae,function($e,vt,St,Fn,xn,Bn){return St||(St=Fn),he+=n.slice(re,Bn).replace(Xe,eg),vt&&(z=!0,he+=`' +
__e(`+vt+`) +
'`),xn&&(V=!0,he+=`';
`+xn+`;
__p += '`),St&&(he+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),re=Bn+$e.length,$e}),he+=`';
`;var Ye=Dt.call(s,"variable")&&s.variable;if(!Ye)he=`with (obj) {
`+he+`
}
`;else if(vo.test(Ye))throw new rt(c);he=(V?he.replace(D,""):he).replace(le,"$1").replace(Ne,"$1;"),he="function("+(Ye||"obj")+`) {
`+(Ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var pt=Fh(function(){return At(A,ze+"return "+he).apply(t,I)});if(pt.source=he,rc(pt))throw pt;return pt}function AS(n){return Ct(n).toLowerCase()}function wS(n){return Ct(n).toUpperCase()}function RS(n,s,l){if(n=Ct(n),n&&(l||s===t))return Xu(n);if(!n||!(s=Nn(s)))return n;var h=ti(n),S=ti(s),A=qu(h,S),I=Yu(h,S)+1;return ji(h,A,I).join("")}function CS(n,s,l){if(n=Ct(n),n&&(l||s===t))return n.slice(0,Ku(n)+1);if(!n||!(s=Nn(s)))return n;var h=ti(n),S=Yu(h,ti(s))+1;return ji(h,0,S).join("")}function PS(n,s,l){if(n=Ct(n),n&&(l||s===t))return n.replace(Qn,"");if(!n||!(s=Nn(s)))return n;var h=ti(n),S=qu(h,ti(s));return ji(h,S).join("")}function LS(n,s){var l=T,h=U;if(Wt(s)){var S="separator"in s?s.separator:S;l="length"in s?ht(s.length):l,h="omission"in s?Nn(s.omission):h}n=Ct(n);var A=n.length;if(Kr(n)){var I=ti(n);A=I.length}if(l>=A)return n;var z=l-Zr(h);if(z<1)return h;var V=I?ji(I,0,z).join(""):n.slice(0,z);if(S===t)return V+h;if(I&&(z+=V.length-z),sc(S)){if(n.slice(z).search(S)){var re,ae=V;for(S.global||(S=Ml(S.source,Ct(xo.exec(S))+"g")),S.lastIndex=0;re=S.exec(ae);)var he=re.index;V=V.slice(0,he===t?z:he)}}else if(n.indexOf(Nn(S),z)!=z){var Ae=V.lastIndexOf(S);Ae>-1&&(V=V.slice(0,Ae))}return V+h}function DS(n){return n=Ct(n),n&&q.test(n)?n.replace(B,ag):n}var IS=is(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),lc=Bf("toUpperCase");function Oh(n,s,l){return n=Ct(n),s=l?t:s,s===t?ng(n)?ug(n):Ym(n):n.match(s)||[]}var Fh=_t(function(n,s){try{return In(n,t,s)}catch(l){return rc(l)?l:new rt(l)}}),US=wi(function(n,s){return Wn(s,function(l){l=di(l),Ti(n,l,nc(n[l],n))}),n});function NS(n){var s=n==null?0:n.length,l=We();return n=s?kt(n,function(h){if(typeof h[1]!="function")throw new Xn(u);return[l(h[0]),h[1]]}):[],_t(function(h){for(var S=-1;++S<s;){var A=n[S];if(In(A[0],this,h))return In(A[1],this,h)}})}function OS(n){return a_(Yn(n,_))}function cc(n){return function(){return n}}function FS(n,s){return n==null||n!==n?s:n}var BS=Gf(),zS=Gf(!0);function Rn(n){return n}function uc(n){return gf(typeof n=="function"?n:Yn(n,_))}function GS(n){return vf(Yn(n,_))}function HS(n,s){return xf(n,Yn(s,_))}var VS=_t(function(n,s){return function(l){return $s(l,n,s)}}),kS=_t(function(n,s){return function(l){return $s(n,l,s)}});function fc(n,s,l){var h=on(s),S=Go(s,h);l==null&&!(Wt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=Go(s,on(s)));var A=!(Wt(l)&&"chain"in l)||!!l.chain,I=Ci(n);return Wn(S,function(z){var V=s[z];n[z]=V,I&&(n.prototype[z]=function(){var re=this.__chain__;if(A||re){var ae=n(this.__wrapped__),he=ae.__actions__=Tn(this.__actions__);return he.push({func:V,args:arguments,thisArg:n}),ae.__chain__=re,ae}return V.apply(n,Xi([this.value()],arguments))})}),n}function WS(){return ln._===this&&(ln._=gg),this}function hc(){}function XS(n){return n=ht(n),_t(function(s){return Sf(s,n)})}var qS=kl(kt),YS=kl(Gu),$S=kl(pl);function Bh(n){return Zl(n)?ml(di(n)):b_(n)}function KS(n){return function(s){return n==null?t:Sr(n,s)}}var ZS=Vf(),jS=Vf(!0);function dc(){return[]}function pc(){return!1}function JS(){return{}}function QS(){return""}function eM(){return!0}function tM(n,s){if(n=ht(n),n<1||n>te)return[];var l=Se,h=hn(n,Se);s=We(s),n-=Se;for(var S=vl(h,s);++l<n;)s(l);return S}function nM(n){return lt(n)?kt(n,di):On(n)?[n]:Tn(rh(Ct(n)))}function iM(n){var s=++pg;return Ct(n)+s}var rM=qo(function(n,s){return n+s},0),sM=Wl("ceil"),oM=qo(function(n,s){return n/s},1),aM=Wl("floor");function lM(n){return n&&n.length?zo(n,Rn,Cl):t}function cM(n,s){return n&&n.length?zo(n,We(s,2),Cl):t}function uM(n){return ku(n,Rn)}function fM(n,s){return ku(n,We(s,2))}function hM(n){return n&&n.length?zo(n,Rn,Il):t}function dM(n,s){return n&&n.length?zo(n,We(s,2),Il):t}var pM=qo(function(n,s){return n*s},1),mM=Wl("round"),gM=qo(function(n,s){return n-s},0);function _M(n){return n&&n.length?_l(n,Rn):0}function vM(n,s){return n&&n.length?_l(n,We(s,2)):0}return y.after=G0,y.ary=mh,y.assign=wx,y.assignIn=Ch,y.assignInWith=sa,y.assignWith=Rx,y.at=Cx,y.before=gh,y.bind=nc,y.bindAll=US,y.bindKey=_h,y.castArray=J0,y.chain=hh,y.chunk=av,y.compact=lv,y.concat=cv,y.cond=NS,y.conforms=OS,y.constant=cc,y.countBy=_0,y.create=Px,y.curry=vh,y.curryRight=xh,y.debounce=Sh,y.defaults=Lx,y.defaultsDeep=Dx,y.defer=H0,y.delay=V0,y.difference=uv,y.differenceBy=fv,y.differenceWith=hv,y.drop=dv,y.dropRight=pv,y.dropRightWhile=mv,y.dropWhile=gv,y.fill=_v,y.filter=x0,y.flatMap=E0,y.flatMapDeep=y0,y.flatMapDepth=b0,y.flatten=lh,y.flattenDeep=vv,y.flattenDepth=xv,y.flip=k0,y.flow=BS,y.flowRight=zS,y.fromPairs=Sv,y.functions=zx,y.functionsIn=Gx,y.groupBy=T0,y.initial=Ev,y.intersection=yv,y.intersectionBy=bv,y.intersectionWith=Tv,y.invert=Vx,y.invertBy=kx,y.invokeMap=w0,y.iteratee=uc,y.keyBy=R0,y.keys=on,y.keysIn=wn,y.map=Qo,y.mapKeys=Xx,y.mapValues=qx,y.matches=GS,y.matchesProperty=HS,y.memoize=ta,y.merge=Yx,y.mergeWith=Ph,y.method=VS,y.methodOf=kS,y.mixin=fc,y.negate=na,y.nthArg=XS,y.omit=$x,y.omitBy=Kx,y.once=W0,y.orderBy=C0,y.over=qS,y.overArgs=X0,y.overEvery=YS,y.overSome=$S,y.partial=ic,y.partialRight=Mh,y.partition=P0,y.pick=Zx,y.pickBy=Lh,y.property=Bh,y.propertyOf=KS,y.pull=Cv,y.pullAll=uh,y.pullAllBy=Pv,y.pullAllWith=Lv,y.pullAt=Dv,y.range=ZS,y.rangeRight=jS,y.rearg=q0,y.reject=I0,y.remove=Iv,y.rest=Y0,y.reverse=ec,y.sampleSize=N0,y.set=Jx,y.setWith=Qx,y.shuffle=O0,y.slice=Uv,y.sortBy=z0,y.sortedUniq=Hv,y.sortedUniqBy=Vv,y.split=ES,y.spread=$0,y.tail=kv,y.take=Wv,y.takeRight=Xv,y.takeRightWhile=qv,y.takeWhile=Yv,y.tap=l0,y.throttle=K0,y.thru=Jo,y.toArray=Ah,y.toPairs=Dh,y.toPairsIn=Ih,y.toPath=nM,y.toPlainObject=Rh,y.transform=eS,y.unary=Z0,y.union=$v,y.unionBy=Kv,y.unionWith=Zv,y.uniq=jv,y.uniqBy=Jv,y.uniqWith=Qv,y.unset=tS,y.unzip=tc,y.unzipWith=fh,y.update=nS,y.updateWith=iS,y.values=os,y.valuesIn=rS,y.without=e0,y.words=Oh,y.wrap=j0,y.xor=t0,y.xorBy=n0,y.xorWith=i0,y.zip=r0,y.zipObject=s0,y.zipObjectDeep=o0,y.zipWith=a0,y.entries=Dh,y.entriesIn=Ih,y.extend=Ch,y.extendWith=sa,fc(y,y),y.add=rM,y.attempt=Fh,y.camelCase=lS,y.capitalize=Uh,y.ceil=sM,y.clamp=sS,y.clone=Q0,y.cloneDeep=tx,y.cloneDeepWith=nx,y.cloneWith=ex,y.conformsTo=ix,y.deburr=Nh,y.defaultTo=FS,y.divide=oM,y.endsWith=cS,y.eq=ii,y.escape=uS,y.escapeRegExp=fS,y.every=v0,y.find=S0,y.findIndex=oh,y.findKey=Ix,y.findLast=M0,y.findLastIndex=ah,y.findLastKey=Ux,y.floor=aM,y.forEach=dh,y.forEachRight=ph,y.forIn=Nx,y.forInRight=Ox,y.forOwn=Fx,y.forOwnRight=Bx,y.get=oc,y.gt=rx,y.gte=sx,y.has=Hx,y.hasIn=ac,y.head=ch,y.identity=Rn,y.includes=A0,y.indexOf=Mv,y.inRange=oS,y.invoke=Wx,y.isArguments=yr,y.isArray=lt,y.isArrayBuffer=ox,y.isArrayLike=An,y.isArrayLikeObject=Kt,y.isBoolean=ax,y.isBuffer=Ji,y.isDate=lx,y.isElement=cx,y.isEmpty=ux,y.isEqual=fx,y.isEqualWith=hx,y.isError=rc,y.isFinite=dx,y.isFunction=Ci,y.isInteger=Eh,y.isLength=ia,y.isMap=yh,y.isMatch=px,y.isMatchWith=mx,y.isNaN=gx,y.isNative=_x,y.isNil=xx,y.isNull=vx,y.isNumber=bh,y.isObject=Wt,y.isObjectLike=qt,y.isPlainObject=eo,y.isRegExp=sc,y.isSafeInteger=Sx,y.isSet=Th,y.isString=ra,y.isSymbol=On,y.isTypedArray=ss,y.isUndefined=Mx,y.isWeakMap=Ex,y.isWeakSet=yx,y.join=Av,y.kebabCase=hS,y.last=Kn,y.lastIndexOf=wv,y.lowerCase=dS,y.lowerFirst=pS,y.lt=bx,y.lte=Tx,y.max=lM,y.maxBy=cM,y.mean=uM,y.meanBy=fM,y.min=hM,y.minBy=dM,y.stubArray=dc,y.stubFalse=pc,y.stubObject=JS,y.stubString=QS,y.stubTrue=eM,y.multiply=pM,y.nth=Rv,y.noConflict=WS,y.noop=hc,y.now=ea,y.pad=mS,y.padEnd=gS,y.padStart=_S,y.parseInt=vS,y.random=aS,y.reduce=L0,y.reduceRight=D0,y.repeat=xS,y.replace=SS,y.result=jx,y.round=mM,y.runInContext=H,y.sample=U0,y.size=F0,y.snakeCase=MS,y.some=B0,y.sortedIndex=Nv,y.sortedIndexBy=Ov,y.sortedIndexOf=Fv,y.sortedLastIndex=Bv,y.sortedLastIndexBy=zv,y.sortedLastIndexOf=Gv,y.startCase=yS,y.startsWith=bS,y.subtract=gM,y.sum=_M,y.sumBy=vM,y.template=TS,y.times=tM,y.toFinite=Pi,y.toInteger=ht,y.toLength=wh,y.toLower=AS,y.toNumber=Zn,y.toSafeInteger=Ax,y.toString=Ct,y.toUpper=wS,y.trim=RS,y.trimEnd=CS,y.trimStart=PS,y.truncate=LS,y.unescape=DS,y.uniqueId=iM,y.upperCase=IS,y.upperFirst=lc,y.each=dh,y.eachRight=ph,y.first=ch,fc(y,function(){var n={};return fi(y,function(s,l){Dt.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),Wn(["drop","take"],function(n,s){xt.prototype[n]=function(l){l=l===t?1:tn(ht(l),0);var h=this.__filtered__&&!s?new xt(this):this.clone();return h.__filtered__?h.__takeCount__=hn(l,h.__takeCount__):h.__views__.push({size:hn(l,Se),type:n+(h.__dir__<0?"Right":"")}),h},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Wn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==G||l==ne;xt.prototype[n]=function(S){var A=this.clone();return A.__iteratees__.push({iteratee:We(S,3),type:l}),A.__filtered__=A.__filtered__||h,A}}),Wn(["head","last"],function(n,s){var l="take"+(s?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),Wn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Rn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=_t(function(n,s){return typeof n=="function"?new xt(this):this.map(function(l){return $s(l,n,s)})}),xt.prototype.reject=function(n){return this.filter(na(We(n)))},xt.prototype.slice=function(n,s){n=ht(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ht(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(Se)},fi(xt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=y[h?"take"+(s=="last"?"Right":""):s],A=h||/^find/.test(s);S&&(y.prototype[s]=function(){var I=this.__wrapped__,z=h?[1]:arguments,V=I instanceof xt,re=z[0],ae=V||lt(I),he=function(vt){var St=S.apply(y,Xi([vt],z));return h&&Ae?St[0]:St};ae&&l&&typeof re=="function"&&re.length!=1&&(V=ae=!1);var Ae=this.__chain__,ze=!!this.__actions__.length,Ye=A&&!Ae,pt=V&&!ze;if(!A&&ae){I=pt?I:new xt(this);var $e=n.apply(I,z);return $e.__actions__.push({func:Jo,args:[he],thisArg:t}),new qn($e,Ae)}return Ye&&pt?n.apply(this,z):($e=this.thru(he),Ye?h?$e.value()[0]:$e.value():$e)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(n){var s=bo[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var A=this.value();return s.apply(lt(A)?A:[],S)}return this[l](function(I){return s.apply(lt(I)?I:[],S)})}}),fi(xt.prototype,function(n,s){var l=y[s];if(l){var h=l.name+"";Dt.call(es,h)||(es[h]=[]),es[h].push({name:s,func:l})}}),es[Xo(t,m).name]=[{name:"wrapper",func:t}],xt.prototype.clone=Dg,xt.prototype.reverse=Ig,xt.prototype.value=Ug,y.prototype.at=c0,y.prototype.chain=u0,y.prototype.commit=f0,y.prototype.next=h0,y.prototype.plant=p0,y.prototype.reverse=m0,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=g0,y.prototype.first=y.prototype.head,Hs&&(y.prototype[Hs]=d0),y},jr=fg();mr?((mr.exports=jr)._=jr,ul._=jr):ln._=jr}).call(oo)})(Ka,Ka.exports);var $c=Ka.exports;const zR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},GR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),HR(t)})};function HR(r){const e=document.getElementById("cellNotFound");let t=Rt.value.listPalette;r?(t=Rt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Za(t)):Za(Rt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Za(r){let e={};const t=document.getElementById("cellCheckboxes");if(console.log(t),!t){console.error('Element with ID "cellCheckboxes" not found in the DOM.');return}t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,Ke.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,p,_,x=((M,b)=>{for(const g in M)if(M[g].includes(b))return g;return!1})(Rt.value.groups,o);if(x){const M=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(M),p=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,p=document.createElement("label"),p.htmlFor=x,p.setAttribute("for",M),p.style.color="white",p.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=M,p.appendChild(d),p.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(p),f.appendChild(_),t.appendChild(f));const b=document.createElement("li");b.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",M=>{console.log(M),VR(o,M.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=Ke.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),co(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function VR(r,e){let t=Ke.value.selectedCelltypes.map(i=>i);e?(t.push(r),co(t)):(t=t.filter(i=>i!==r),co(t))}const kR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{co([]),Za(Rt.value.listPalette),cellTextbox.value=""})},WR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",Ke.value.selectedCelltypes.length!==0?Ke.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Rt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};function Tp(){const r=Ke.value.selectedCelltypes,e=document.getElementById("cellCheckboxes");let t=[];for(const i in e.children){const o=e.children[i];o.nodeName==="LABEL"&&t.push(o.children[0])}t.forEach(i=>{r.includes(i.value)?i.checked||(i.checked=!0):i.checked&&(i.checked=!1)})}async function rl(r,e){const t=await fetch(`https://cb-backend.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=roy&csv_filename=${e}_matrix.csv`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===void 0||i.gene_values==null)return"[]";let o=i.gene_values.split(",").filter(c=>c!=="");const u=["clusters","clusters_pal","genes","hierarchical_clusters"].includes(r);return console.log(r),console.log(typeof r),console.log(u),u==!0?(console.log(o),o.shift(),o):(r=="clusters"&&console.log("sini bang"),o.shift(),console.log("float"),o.map(f=>parseFloat(f)))}function Ap(r){return rl(r,Rt.value.prefix)}function XR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function wp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:XR(r,e)}function Kc(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Rp(r,e){return r.map(t=>Math.min(t/e,1))}function xm(r,e,t){const i=document.createElement("p");return i.innerText="x",i.className="delete",i.setAttribute("data-badge_value",e),i.onclick=()=>{if(r==="celltype")YM(e);else if(r==="gene"){const o=[...Ke.value.selectedGenes];o.splice(o.indexOf(e),1),Rs(o)}t.remove()},t.onmouseover=()=>{i.style.display="block"},t.onmouseleave=()=>{i.style.display="none"},i}function Da(r,e=""){const t=document.querySelector(".showing-badge");if(!t){console.error("Badge container not found");return}t.querySelectorAll(".showing-label").forEach(a=>a.style.display="none");const o=t.querySelector(`.showing-${r}`);o?(o.style.display="inline-block",r==="gene"&&e.forEach((a,u)=>{const c=document.createElement("span");c.className="showing-label gene-badge",c.innerText=a,c.title=a,c.style.backgroundColor=u%2===0?"rgb(0, 200, 0)":"rgb(255, 0, 255)";const f=xm(r,a,c);c.appendChild(f),t.appendChild(c)})):console.warn(`Unknown label: ${r}`)}function Cp(){function r(u){const c=document.createElement("span");c.className="celltype-label",c.title=u,c.style.backgroundColor=Rt.value.pallete[u];const f=document.createElement("p");return f.className="celltype-text",f.innerText=u,c.appendChild(f),c.appendChild(xm("celltype",u,c)),c}const e=document.querySelector(".celltype-badges"),t=Ke.value.selectedCelltypes,i=document.querySelectorAll(".celltype-label"),o=[].map.call(i,u=>u.title);t.forEach(u=>{if(!o.includes(u)){const c=r(u);e.appendChild(c)}}),Array.from(e.childNodes).forEach(u=>{t.includes(u.title)||u.remove()})}function Zc(){const r=document.querySelector(".celltype-badges");Ke.value.selectedGenes,Ke.value.selectedAtacs;function e(t){const i=["colorbar-wrapper","colorbar-wrapper2","colorbar-wrapper3"];let o=0;i.forEach(c=>{const f=document.getElementById(c);if(f){const p=f.getBoundingClientRect().width;o=Math.max(o,p)}});const a=t?o+5:0,u=t?25:30;r.style.transform=`translateX(-${a}px)`,r.style.width=`${u}vw`}e(r)}const qR=36.75;function YR(r,e){const t=document.getElementById("top-label"),i=document.getElementById("bottom-label");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[0].split("_")[1]=="imputed"}catch{a=!1}let u=a?e*qR:e,c;u<1?c=u.toExponential(1):c=Math.round(u),t&&i?(t.textContent=c,i.textContent=r):console.error("Labels not found in the DOM.")}function $R(r,e){const t=document.getElementById("top-label-green"),i=document.getElementById("bottom-label-green");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[1].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*36.75:e,f;c<1?f=c.toExponential(1):f=Math.round(c),t&&i?(t.textContent=f,i.textContent=r):console.error("Labels not found in the DOM.")}function Pp(r,e){const t=document.getElementById("top-label-magenta"),i=document.getElementById("bottom-label-magenta");let o=Ke.value.selectedGenes,a=!1;if(o!=[])try{a=o[0].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*36.75:e,f;c<1?f=c.toExponential(1):f=Math.round(c),t&&i?(t.textContent=f,i.textContent=r):console.error("Labels not found in the DOM.")}function KR(){const r=document.getElementById("colorbar-wrapper");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function ZR(){const r=document.getElementById("colorbar-wrapper2");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function jR(){const r=document.getElementById("colorbar-wrapper3");r?r.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function Ia(){const r=document.getElementById("colorbar-wrapper");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function Ua(){const r=document.getElementById("colorbar-wrapper2");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function Na(){const r=document.getElementById("colorbar-wrapper3");r?r.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}const JR=new URL(window.location),Sn=new URLSearchParams(JR.search);class QR{constructor(e){Gh(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),(this.mouse.x!==0||this.mouse.y!==0)&&this.checkIntersections(),this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.raycaster=new gm,this.mouse=new st,this.hoveredPoint=null,this.tooltip=this.createTooltip(),this.lastCameraPosition=new X,this.initScene(),this.subscribeToStateChanges(),this.setupEventListeners()}initScene(){this.scene=_m.value.scene,this.camera=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Eu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=wt.value.cameraPositionZ,this.camera.position.y=wt.value.cameraPositionY,this.camera.position.x=wt.value.cameraPositionX,this.controls=new vm(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:Jn.PAN,MIDDLE:Jn.DOLLY,RIGHT:Jn.ROTATE},this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.jsonData=Fr.value.items,this.pallete=Rt.value.pallete,this.updateInstancedMesh(),this.createPointsGeometry(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){Fr.pipe(pi(e=>e.items),mi((e,t)=>$c.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),wt.pipe(pi(e=>e.dotSize),mi()).subscribe(e=>{console.log("Dot size changed:",e),this.pointsMeshSpatial&&this.pointsMeshSpatial.material.uniforms.dotSize&&(this.pointsMeshSpatial.material.uniforms.dotSize.value=e,this.pointsMeshUMAP.material.uniforms.dotSize.value=e)}),Rt.pipe(pi(e=>e.prefix),mi((e,t)=>$c.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton"),i=Rt.value.prefix,o=Object.keys(Rt.value.prefixMapping).find(a=>Rt.value.prefixMapping[a]===i)||i;t.innerText=o}),$a.pipe(pi(e=>e.isLoading),mi((e,t)=>$c.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),zR($a.value.isLoading)}),Ke.pipe(pi(e=>e.selectedCelltypes),mi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),gi(!0),this.updateCelltype(),gi(!1),WR(),Ke.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(Ke.value.selectedCelltypes));Sn.has("celltype")?Sn.set("celltype",t):Sn.append("celltype",t)}else Sn.delete("celltype");Fa(Sn)}),Ke.pipe(pi(e=>e.selectedGenes),mi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),Ke.value.mode===2&&zp(),gi(!0),this.updateGene(),gi(!1),Zc(),nE(),Ke.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(Ke.value.selectedGenes));Sn.append("gene",t),Sn.has("gene")?Sn.set("gene",t):Sn.append("gene",t)}else Sn.delete("gene");Fa(Sn)}),Ke.pipe(pi(e=>e.mode),mi()).subscribe(e=>{console.log("Selected genes changed:",e),Sn.has("mode")?Sn.set("mode",e):Sn.append("mode",e),Fa(Sn)}),wt.pipe(pi(e=>e.dotSize),mi()).subscribe(async e=>{console.log("Dot Size Changed:",e),gi(!0),wt.value.dotSize?await this.updateInstancedMesh(wt.value.dotSize):await this.updateInstancedMesh([]),gi(!1)}),wt.pipe(pi(e=>e.genePercentile),mi()).subscribe(async e=>{console.log("Gene Percentile",e),gi(!0),wt.value.genePercentile?await this.updateInstancedMesh(wt.value.genePercentile):await this.updateInstancedMesh([]),gi(!1)}),wt.pipe(pi(e=>e.currentGeneValue),mi()).subscribe(e=>{Ke.value.selectedGenes.length>0&&e>0&&(console.log("Gene slider value changed to:",e),this.updateGene(!0))})}async updateInstancedMesh(e=[]){console.log("Updating instanced mesh with filter type:",e)}async updateGene(e=!1){const t=Ke.value.selectedGenes;if(t.length==0){this.updateCelltype([]);return}let i,o,a=wt.value.genePercentile,u=1,c=0,f=0;if(t.length>0)try{let b=await Ap(t[0]);if(c=Kc(b,.8),u=Kc(b,a),f=b.reduce((g,m)=>m>g?m:g,0),wt.value.currentGeneValue>0&&e&&(u=wt.value.currentGeneValue),console.log("Gene Percentile",a),console.log("nmax1",u),i=Rp(b,u),t.length==2){let g=await Ap(t[1]),m=Kc(g,a);o=Rp(g,m),typeof Pp=="function"&&Pp(0,m)}kM(c,u,f),t.length>0?(Da("gene",t),t.length>1?(ZR(),jR(),Ia()):(KR(),Ua(),Na())):(Da("celltype"),Ia(),Ua(),Na()),Cp(),Tp(),Zc()}catch(b){console.error("Error fetching data:",b)}YR(0,u),$R(0,u);const d=wt.value.dotSize,p=[],_=[],v=d/20,x=d/4,M=b=>v+(x-v)*b;for(let b=0;b<this.jsonData.length;b++)if(t.length==1){const g=wp(i[b]);p.push(g),_.push(M(i[b]))}else{const g=wp(i[b],o[b]);p.push(g);let m=(i[b]+o[b])/2;_.push(M(m))}this.updateColors(p),this.updateScales(_)}rgbToHex(e){const t=[],i="0123456789ABCDEF";for(let o=0;o<e.length;o+=3){const a=Math.round(e[o]*255),u=Math.round(e[o+1]*255),c=Math.round(e[o+2]*255),f=Math.floor(a/16),d=a%16,p=Math.floor(u/16),_=u%16,v=Math.floor(c/16),x=c%16,M=i[f]+i[d],b=i[p]+i[_],g=i[v]+i[x];t.push(`#${M}${b}${g}`)}return t}async updateCelltype(){const e=Ke.value.selectedCelltypes,t="#adadad";if(e.length>0){const i=this.jsonData.map(a=>{const u=a.clusters;return e.includes(u)?this.pallete[u]:t}),o=this.jsonData.map(a=>e.includes(a.clusters)?1:.25);console.log("Celltypes selected without genes"),this.updateColors(i),this.updateScales(o),Da("celltype",e),Ia(),Ua(),Na()}else{const i=this.jsonData.map(a=>{const u=a.clusters;return this.pallete[u]||t});console.log("No celltypes selected without genes");const o=this.jsonData.map(a=>1);this.updateColors(i),this.updateScales(o),Da("celltype"),Ia(),Ua(),Na()}Cp(),Tp(),Zc()}async createPointsGeometry(){console.log(this.jsonData);const e=this.jsonData.length,t=new Mi,i=new Mi,o=new Float32Array(e*3),a=new Float32Array(e*3),u=new Float32Array(e*3),c=new Float32Array(e),f=new Float32Array(e),d=new Float32Array(e);this.jsonData.forEach((M,b)=>{o[b*3]=M.X_spatial0_norm*200,o[b*3+1]=M.X_spatial1_norm*200,o[b*3+2]=0,a[b*3]=M.X_umap0_norm*200+wt.value.offsetUMAP,a[b*3+1]=M.X_umap1_norm*200,a[b*3+2]=0;const g=this.pallete[M.clusters]||"#5e5e5e",m=new bt(g);u[b*3]=m.r,u[b*3+1]=m.g,u[b*3+2]=m.b,c[b]=2,f[b]=1,d[b]=.8}),t.setAttribute("position",new Yt(o,3)),t.setAttribute("color",new Yt(u,3)),t.setAttribute("size",new Yt(c,1)),t.setAttribute("alpha",new Yt(f,1)),i.setAttribute("position",new Yt(a,3)),i.setAttribute("color",new Yt(u,3)),i.setAttribute("size",new Yt(c,1)),i.setAttribute("alpha",new Yt(d,1));const p={value:wt.value.dotSize},_=`
            attribute float size;
            attribute vec3 color;
            attribute float alpha;
            uniform float dotSize;
            varying vec3 vColor;
            varying float vAlpha;
            varying float vDistance;

            void main() {
                vColor = color;
                vAlpha = alpha;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                
                // Calculate distance from camera
                float distance = -mvPosition.z;
                vDistance = distance;
                
                // Get base size from the size attribute, scaled by the dotSize uniform
                float baseSize = size * dotSize * 0.4; // Scale factor to make it reasonable
                
                // Dynamic sizing based on distance with smoother transitions
                float minSize = max(0.5, dotSize * 0.2); // Minimum size scales with dotSize
                float maxSize = min(50.0, dotSize * 6.0); // Maximum size scales with dotSize
                float zoomFactor = 150.0; // LOWER value makes points shrink faster when zooming in
                
                // Use a smooth curve for size transition based on distance
                // This creates a more natural zoom feeling
                float distanceRatio = zoomFactor / distance;
                
                // Smooth adaptive sizing with cubic easing
                float t = clamp((distance - 100.0) / 200.0, 0.0, 1.0); // Shorter distance range for faster transition
                float easedT = 1.0 - (1.0 - t) * (1.0 - t) * (1.0 - t); // Cubic ease-out
                
                // Blend between close-up and far-away behaviors
                float closeUpFactor = 1.0;  // Size multiplier when close to camera
                float farAwayFactor = 2.0;   // Size multiplier when far from camera
                float scaleFactor = mix(closeUpFactor, farAwayFactor, easedT);
                
                // Calculate final adaptive size
                float adaptiveSize = baseSize * distanceRatio * scaleFactor;
                
                // Clamp size between min and max
                gl_PointSize = clamp(adaptiveSize, minSize, maxSize);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,v=`
            varying vec3 vColor;
            varying float vAlpha;
            varying float vDistance;

            void main() {
                // Create circular points instead of squares
                float dist = length(gl_PointCoord - vec2(0.5, 0.5));
                if (dist > 0.5) {
                    discard;
                }
                
                // Enhanced edge effect for all points
                float edgeWidth = 0.15;  // Wider edge
                float distFromCenter = dist;
                
                // Smooth edge effect that transitions based on distance
                float edgeEffect = 1.0;
                float edgeFactor = smoothstep(0.5 - edgeWidth, 0.5, distFromCenter);
                
                // Transition edge effect based on distance
                float distanceFactor = smoothstep(150.0, 50.0, vDistance);
                edgeEffect = mix(1.0, 0.7, edgeFactor * distanceFactor);
                
                // Add subtle anti-aliasing at the edge
                float alpha = vAlpha;
                if (dist > 0.48) {
                    alpha *= smoothstep(0.5, 0.48, dist);
                }
                
                // Apply edge effect to color
                vec3 finalColor = vColor * edgeEffect;
                gl_FragColor = vec4(finalColor, alpha);
            }
        `,x=new ki({uniforms:{dotSize:p},vertexShader:_,fragmentShader:v,transparent:!0});this.pointsMeshSpatial=new _p(t,x),this.pointsMeshUMAP=new _p(i,x),this.pointsMeshSpatial.name="pointsMeshSpatial",this.pointsMeshUMAP.name="pointsMeshUMAP",this.scene.add(this.pointsMeshSpatial),this.scene.add(this.pointsMeshUMAP)}updateColors(e,t=!1){if(!this.pointsMeshSpatial||!e||e.length===0)return;const i=this.pointsMeshSpatial.geometry,o=this.pointsMeshUMAP.geometry,u=i.getAttribute("color").count;if(e.length!==u){console.error(`Color list length (${e.length}) does not match point count (${u}).`);return}const c=new Float32Array(u*3);e.forEach((f,d)=>{let p;t&&f.startsWith("rgb")?(p=this.parseRGBColor(f),p===null&&(p=new bt(1,1,1))):p=new bt(f),c[d*3]=p.r,c[d*3+1]=p.g,c[d*3+2]=p.b}),i.setAttribute("color",new Yt(c,3)),o.setAttribute("color",new Yt(c,3)),console.log("Colors updated for all points.")}updateScales(e){if(console.log("Updating scales for all points"),!this.pointsMeshSpatial||!this.pointsMeshUMAP||!e||e.length===0)return;const t=this.pointsMeshSpatial.geometry,i=this.pointsMeshUMAP.geometry,o=this.jsonData.length;if(e.length!==o){console.error(`Scale list length (${e.length}) does not match point count (${o}).`);return}const a=new Float32Array(o),u=new Float32Array(o);for(let c=0;c<o;c++)a[c]=e[c]*1,u[c]=e[c]*1;t.setAttribute("size",new Yt(a,1)),i.setAttribute("size",new Yt(u,1)),console.log("Scales updated for all points.")}checkIntersections(){const e=this.camera.position.clone();e.equals(this.lastCameraPosition),this.lastCameraPosition.copy(e);const t=this.camera.position.z,i=.2,o=2;let a;if(t<50)a=i;else if(t>500)a=o;else{const c=(t-50)/450;a=i+c*c*(o-i)}this.raycaster.params.Points.threshold=a,this.raycaster.setFromCamera(this.mouse,this.camera);const u=this.raycaster.intersectObject(this.pointsMeshSpatial);if(u.length>0){u.length>1&&u.sort((f,d)=>f.distance-d.distance);const c=u[0].index;if(this.hoveredPoint!==c){this.hoveredPoint=c;const d=this.jsonData[c].clusters,p=u[0].point;this.showTooltip(p,d)}}else this.hoveredPoint!==null&&(this.hoveredPoint=null,this.hideTooltip())}createTooltip(){const e=document.createElement("div");return e.className="point-tooltip",e.style.position="absolute",e.style.backgroundColor="rgba(0, 0, 0, 0.8)",e.style.color="white",e.style.padding="6px 10px",e.style.borderRadius="4px",e.style.fontSize="14px",e.style.fontFamily="Arial, sans-serif",e.style.pointerEvents="none",e.style.display="none",e.style.zIndex="1000",e.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",e.style.minWidth="80px",document.body.appendChild(e),e}showTooltip(e,t){const i=e.clone();i.project(this.camera);const o=(i.x*.5+.5)*this.renderer.domElement.clientWidth,a=(-i.y*.5+.5)*this.renderer.domElement.clientHeight,u=this.pallete[t]||"#5e5e5e";this.tooltip.innerHTML=`
            <div style="display: flex; align-items: center;">
                <div style="
                    width: 12px; 
                    height: 12px; 
                    border-radius: 50%; 
                    background-color: ${u}; 
                    margin-right: 6px;
                "></div>
                <span>${t}</span>
            </div>
        `,this.tooltip.style.left=`${o+10}px`,this.tooltip.style.top=`${a+10}px`,this.tooltip.style.display="block"}hideTooltip(){this.tooltip.style.display="none"}setupEventListeners(){this.renderer.domElement.addEventListener("mousemove",e=>{const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1}),this.renderer.domElement.addEventListener("click",e=>{if(this.hoveredPoint!==null){const i=this.jsonData[this.hoveredPoint].clusters;console.log(`Clicked on point with cluster: ${i}`)}})}}const yu=Rt.value.prefix;async function e1(){const r=Rt.value.palleteColumn;try{const e=await rl(r,yu);console.log(e);let t={};e.forEach(i=>{console.log(i);let[o,a]=i.split(":");o=o.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[o]=a.slice(0,7)}),console.log(t),FM(t)}catch(e){console.error("Failed to load items:",e)}}async function t1(){try{const r=await rl("genes",yu);BM(r)}catch(r){console.error("Failed to load items:",r)}}async function n1(){const r=Rt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>rl(o,yu)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}NR(t)}catch(i){console.error("Error combining data:",i)}}function i1(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}function Sm(){const r=document.createElement("div");r.id="overlay",r.className="overlay",r.setAttribute("display_type","maximize");const e=document.createElement("div");e.className="top-controls";const t=document.createElement("img");t.className="min_max_button",t.id="maximize",t.src="/overlay_controls/minimize.png",t.onclick=w=>{const F=w.target,O=F.id;let L="";O==="maximize"?L="minimize":L="maximize",F.id=L,F.src=`/overlay_controls/${O}.png`;const Y=document.querySelector(".overlay canvas");L=="minimize"?Y.style.display="none":Y.style.display="block",O==="maximize"?r.style.transform="translateX(90%)":r.style.transform="translateX(0%)",r.setAttribute("display_type",L)},e.appendChild(t),r.appendChild(e);const i=document.createElement("div");i.id="overlayScene",i.style.width="100%",i.style.height="100%",r.appendChild(i);const o=_m.value.scene,a=new Hn(75,i.offsetWidth/i.offsetHeight,.1,1e3),u=new Eu,c=window.innerWidth*.25,f=window.innerHeight*.5;a.aspect=c/f,a.updateProjectionMatrix(),u.setSize(c,f),u.render(o,a),i.appendChild(u.domElement),a.position.x=wt.value.offsetUMAP,a.position.z=150;const d=new vm(a,u.domElement);d.enableRotate=!1,d.mouseButtons={LEFT:Jn.PAN,MIDDLE:Jn.DOLLY,RIGHT:Jn.ROTATE},d.touches={ONE:sr.PAN,TWO:sr.DOLLY_PAN},a.lookAt(wt.value.offsetUMAP,0,0),d.target.set(wt.value.offsetUMAP,0,0),d.update(),u.render(o,a);const p=new gm,_=new st;let v=null,x=new X;const M=b();function b(){const w=document.createElement("div");return w.className="overlay-point-tooltip",w.style.position="absolute",w.style.backgroundColor="rgba(0, 0, 0, 0.8)",w.style.color="white",w.style.padding="6px 10px",w.style.borderRadius="4px",w.style.fontSize="14px",w.style.fontFamily="Arial, sans-serif",w.style.pointerEvents="none",w.style.display="none",w.style.zIndex="1001",w.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",w.style.minWidth="80px",r.appendChild(w),w}function g(w,F){const O=w.clone();O.project(a);const L=u.domElement.getBoundingClientRect(),Y=(O.x*.5+.5)*L.width,ve=(-O.y*.5+.5)*L.height,T=Rt.value.pallete[F]||"#5e5e5e";M.innerHTML=`
            <div style="display: flex; align-items: center;">
                <div style="
                    width: 12px; 
                    height: 12px; 
                    border-radius: 50%; 
                    background-color: ${T}; 
                    margin-right: 6px;
                "></div>
                <span>${F}</span>
            </div>
        `,r.getBoundingClientRect(),M.style.left=`${Y}px`,M.style.top=`${ve}px`,M.style.display="block"}function m(){M.style.display="none"}function N(){if(!Fr.value.items||Fr.value.items.length===0)return;const w=a.position.clone();w.equals(x),x.copy(w);const F=a.position.z,O=.5,L=3;let Y;if(F<50)Y=O;else if(F>500)Y=L;else{const U=(F-50)/450;Y=O+U*U*(L-O)}p.params.Points=p.params.Points||{},p.params.Points.threshold=Y,p.setFromCamera(_,a);const ve=o.getObjectByName("pointsMeshUMAP");if(!ve){console.log("UMAP mesh not found in overlay");return}const T=p.intersectObject(ve);if(T.length>0){T.length>1&&T.sort((xe,me)=>xe.distance-me.distance);const U=T[0].index;if(v!==U){v=U;const xe=Fr.value.items[U];if(xe){const me=xe.clusters,G=T[0].point;g(G,me)}}}else v!==null&&(v=null,m())}u.domElement.addEventListener("mousemove",w=>{const F=u.domElement.getBoundingClientRect();_.x=(w.clientX-F.left)/F.width*2-1,_.y=-((w.clientY-F.top)/F.height)*2+1});function C(){requestAnimationFrame(C),d.update(),(_.x!==0||_.y!==0)&&N(),u.render(o,a)}return C(),r}document.body.appendChild(Sm());document.addEventListener("DOMContentLoaded",async()=>{Sm();const r=i1();document.body.appendChild(r),gi(!0);try{await e1(),await n1(),await t1();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(u=>Object.keys(Rt.value.pallete).includes(u));co(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(u=>Rt.value.genes.includes(u));Rs(a)}Za(Rt.value.listPalette),kR(),GR(),Ga(Rt.value.genes),tE(),JM();const i=document.body;new QR(i)}catch(e){console.error("Failed to load data:",e)}finally{gi(!1)}});
