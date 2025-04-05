(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,dt=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),$t=new WeakMap;let Ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(dt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(e,t))}return t}toString(){return this.cssText}};const Ht=i=>new Ot(typeof i=="string"?i:i+"",void 0,pt),W=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Ot(e,i,pt)},Ft=(i,t)=>{if(dt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=G.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},vt=dt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ht(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Lt,defineProperty:Bt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Zt,getPrototypeOf:Vt}=Object,S=globalThis,mt=S.trustedTypes,Xt=mt?mt.emptyScript:"",rt=S.reactiveElementPolyfillSupport,U=(i,t)=>i,J={toAttribute(i,t){switch(t){case Boolean:i=i?Xt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},_t=(i,t)=>!Lt(i,t),zt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:_t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=zt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Bt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:n}=Qt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const h=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,s=[...Wt(e),...Zt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(vt(r))}else t!==void 0&&e.push(vt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:J).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:J;this._$Em=r,this[r]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??_t)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[U("elementProperties")]=new Map,k[U("finalized")]=new Map,rt==null||rt({ReactiveElement:k}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,K=N.trustedTypes,wt=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,Tt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+C,Yt=`<${It}>`,P=document,D=()=>P.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",yt=Array.isArray,Gt=i=>yt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,Ct=/>/g,M=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Mt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,Jt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Z=Jt(1),O=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Et=new WeakMap,E=P.createTreeWalker(P,129);function jt(i,t){if(!yt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return wt!==void 0?wt.createHTML(t):t}const Kt=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=R;for(let h=0;h<e;h++){const l=i[h];let u,c,a=-1,p=0;for(;p<l.length&&(o.lastIndex=p,c=o.exec(l),c!==null);)p=o.lastIndex,o===R?c[1]==="!--"?o=At:c[1]!==void 0?o=Ct:c[2]!==void 0?(Rt.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=M):c[3]!==void 0&&(o=M):o===M?c[0]===">"?(o=r??R,a=-1):c[1]===void 0?a=-2:(a=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?M:c[3]==='"'?Mt:St):o===Mt||o===St?o=M:o===At||o===Ct?o=R:(o=M,r=void 0);const d=o===M&&i[h+1].startsWith("/>")?" ":"";n+=o===R?l+Yt:a>=0?(s.push(u),l.slice(0,a)+Tt+l.slice(a)+C+d):l+C+(a===-2?h:d)}return[jt(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class F{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const h=t.length-1,l=this.parts,[u,c]=Kt(t,e);if(this.el=F.createElement(u,s),E.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=E.nextNode())!==null&&l.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const a of r.getAttributeNames())if(a.endsWith(Tt)){const p=c[o++],d=r.getAttribute(a).split(C),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:_[2],strings:d,ctor:_[1]==="."?ee:_[1]==="?"?ie:_[1]==="@"?se:it}),r.removeAttribute(a)}else a.startsWith(C)&&(l.push({type:6,index:n}),r.removeAttribute(a));if(Rt.test(r.tagName)){const a=r.textContent.split(C),p=a.length-1;if(p>0){r.textContent=K?K.emptyScript:"";for(let d=0;d<p;d++)r.append(a[d],D()),E.nextNode(),l.push({type:2,index:++n});r.append(a[p],D())}}}else if(r.nodeType===8)if(r.data===It)l.push({type:2,index:n});else{let a=-1;for(;(a=r.data.indexOf(C,a+1))!==-1;)l.push({type:7,index:n}),a+=C.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function T(i,t,e=i,s){var o,h;if(t===O)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=T(i,r._$AS(i,t.values),r,s)),t}class te{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??P).importNode(e,!0);E.currentNode=r;let n=E.nextNode(),o=0,h=0,l=s[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new V(n,n.nextSibling,this,t):l.type===1?u=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(u=new re(n,this,t)),this._$AV.push(u),l=s[++h]}o!==(l==null?void 0:l.index)&&(n=E.nextNode(),o++)}return E.currentNode=P,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),H(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=F.createElement(jt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new te(r,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new F(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new V(this.O(D()),this.O(D()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=T(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const h=t;let l,u;for(t=n[0],l=0;l<n.length-1;l++)u=T(this,h[s+l],e,l),u===O&&(u=this._$AH[l]),o||(o=!H(u)||u!==this._$AH[l]),u===y?t=y:t!==y&&(t+=(u??"")+n[l+1]),this._$AH[l]=u}o&&!r&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ee extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class ie extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class se extends it{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??y)===O)return;const s=this._$AH,r=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class re{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const ot=N.litHtmlPolyfillSupport;ot==null||ot(F,V),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.2.1");const ne=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new V(t.insertBefore(D(),n),n,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};var kt;z._$litElement$=!0,z.finalized=!0,(kt=globalThis.litElementHydrateSupport)==null||kt.call(globalThis,{LitElement:z});const ht=globalThis.litElementPolyfillSupport;ht==null||ht({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:_t},he=(i=oe,t,e)=>{const{kind:s,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(h){const l=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,l,i)},init(h){return h!==void 0&&this.P(o,void 0,i),h}}}if(s==="setter"){const{name:o}=e;return function(h){const l=this[o];t.call(this,h),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+s)};function b(i){return(t,e)=>typeof e=="object"?he(i,t,e):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}var ae=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ft=(i,t,e,s)=>{for(var r=s>1?void 0:s?le(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ae(t,e,r),r};let L=class extends z{onInputDuration(i){this.duration=i.detail.duration}onChangeAxisColor(i){this.axisColor=i.detail.axisColor}render(){return Z`
      <div>
        <camera-reset-button></camera-reset-button>

        <greek-id-button
          .duration="${this.duration}"
        ></greek-id-button>
      </div>

      <div>
        <greek-button
          elm="α"
          color="blue"
          .axis="${[0,0,1]}"
          .ax="${{x:"-x",y:"-y",z:"+z"}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="β"
          color="green"
          .axis="${[0,1,0]}"
          .ax="${{x:"-x",y:"+y",z:"-z"}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="γ"
          color="red"
          .axis="${[1,0,0]}"
          .ax="${{x:"+x",y:"-y",z:"-z"}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>
      </div>

      <div>
        <greek-button
          elm="σ"
          color="black"
          .axis="${[-1,1,-1]}"
          .ax="${{x:"-y",y:"-z",z:"+x"}}"
          .to="${Math.PI*2/3}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>

        <greek-button
          elm="τ"
          color="white"
          text-color="black"
          .axis="${[1,1,0]}"
          .ax="${{x:"+y",y:"+x",z:"-z"}}"
          .duration="${this.duration}"
          .axisColor="${this.axisColor}"
        ></greek-button>
      </div>

      <div>
        <textarea id="out" readonly></textarea>
      </div>

      <cube-menu
        .duration="${this.duration}"
        .axisColor="${this.axisColor}"
        @input-duration=${this.onInputDuration}
        @change-axis-color=${this.onChangeAxisColor}
      ></cube-menu>

      <div class="buttons-loading"></div>
    `}};L.styles=W`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1rem;
      padding: 1rem;
      background-color: rgb(256, 256, 256, 0.5);

      > div {
        display: flex;
        gap: 1rem;
        * {
          font-size: 1.5rem;
        }
      }

      .buttons-loading {
        display: none;
        /* pointer-events: none; */
        position: absolute;
        z-index: 10;
        inset: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgb(0, 0, 0, 0.5); */
        /* background-color: rgb(256, 256, 256, 0.2); */
        background-color: rgb(0, 0, 0, 0.1);
        cursor: wait;
      }

      textarea#out {
        direction: rtl;
      }
    }
  `;ft([b({type:Number,reflect:!0})],L.prototype,"duration",2);ft([b({type:Boolean,reflect:!0,attribute:"axis-color"})],L.prototype,"axisColor",2);L=ft([X("cube-controler")],L);var ce=Object.getOwnPropertyDescriptor,ue=(i,t,e,s)=>{for(var r=s>1?void 0:s?ce(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=o(r)||r);return r};let lt=class extends z{render(){return Z`
      <button
        @click="${()=>{const i=document.querySelector("a-camera");i.setAttribute("position","0 0 0"),i.components["look-controls"].yawObject.rotation.y=0,i.components["look-controls"].pitchObject.rotation.x=0,i.components["look-controls"].pitchObject.rotation.z=0}}"
      >camera reset</button>
    `}};lt.styles=W`
    :host {
      display: contents;
    }

    button {
      font-size: inherit;
    }
  `;lt=ue([X("camera-reset-button")],lt);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ut="175";function m(i,t,e){return Math.max(t,Math.min(e,i))}class Nt{constructor(t=0,e=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=r}static slerpFlat(t,e,s,r,n,o,h){let l=s[r+0],u=s[r+1],c=s[r+2],a=s[r+3];const p=n[o+0],d=n[o+1],_=n[o+2],x=n[o+3];if(h===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=a;return}if(h===1){t[e+0]=p,t[e+1]=d,t[e+2]=_,t[e+3]=x;return}if(a!==x||l!==p||u!==d||c!==_){let f=1-h;const g=l*p+u*d+c*_+a*x,I=g>=0?1:-1,gt=1-g*g;if(gt>Number.EPSILON){const A=Math.sqrt(gt),bt=Math.atan2(A,g*I);f=Math.sin(f*bt)/A,h=Math.sin(h*bt)/A}const Y=h*I;if(l=l*f+p*Y,u=u*f+d*Y,c=c*f+_*Y,a=a*f+x*Y,f===1-h){const A=1/Math.sqrt(l*l+u*u+c*c+a*a);l*=A,u*=A,c*=A,a*=A}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=a}static multiplyQuaternionsFlat(t,e,s,r,n,o){const h=s[r],l=s[r+1],u=s[r+2],c=s[r+3],a=n[o],p=n[o+1],d=n[o+2],_=n[o+3];return t[e]=h*_+c*a+l*d-u*p,t[e+1]=l*_+c*p+u*a-h*d,t[e+2]=u*_+c*d+h*p-l*a,t[e+3]=c*_-h*a-l*p-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,r){return this._x=t,this._y=e,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,r=t._y,n=t._z,o=t._order,h=Math.cos,l=Math.sin,u=h(s/2),c=h(r/2),a=h(n/2),p=l(s/2),d=l(r/2),_=l(n/2);switch(o){case"XYZ":this._x=p*c*a+u*d*_,this._y=u*d*a-p*c*_,this._z=u*c*_+p*d*a,this._w=u*c*a-p*d*_;break;case"YXZ":this._x=p*c*a+u*d*_,this._y=u*d*a-p*c*_,this._z=u*c*_-p*d*a,this._w=u*c*a+p*d*_;break;case"ZXY":this._x=p*c*a-u*d*_,this._y=u*d*a+p*c*_,this._z=u*c*_+p*d*a,this._w=u*c*a-p*d*_;break;case"ZYX":this._x=p*c*a-u*d*_,this._y=u*d*a+p*c*_,this._z=u*c*_-p*d*a,this._w=u*c*a+p*d*_;break;case"YZX":this._x=p*c*a+u*d*_,this._y=u*d*a+p*c*_,this._z=u*c*_-p*d*a,this._w=u*c*a-p*d*_;break;case"XZY":this._x=p*c*a-u*d*_,this._y=u*d*a-p*c*_,this._z=u*c*_+p*d*a,this._w=u*c*a+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],r=e[4],n=e[8],o=e[1],h=e[5],l=e[9],u=e[2],c=e[6],a=e[10],p=s+h+a;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(c-l)*d,this._y=(n-u)*d,this._z=(o-r)*d}else if(s>h&&s>a){const d=2*Math.sqrt(1+s-h-a);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(n+u)/d}else if(h>a){const d=2*Math.sqrt(1+h-s-a);this._w=(n-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+a-s-h);this._w=(o-r)/d,this._x=(n+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(m(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,e/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,r=t._y,n=t._z,o=t._w,h=e._x,l=e._y,u=e._z,c=e._w;return this._x=s*c+o*h+r*u-n*l,this._y=r*c+o*l+n*h-s*u,this._z=n*c+o*u+s*l-r*h,this._w=o*c-s*h-r*l-n*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,r=this._y,n=this._z,o=this._w;let h=o*t._w+s*t._x+r*t._y+n*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=o,this._x=s,this._y=r,this._z=n,this;const l=1-h*h;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*s+e*this._x,this._y=d*r+e*this._y,this._z=d*n+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,h),a=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=o*a+this._w*p,this._x=s*a+this._x*p,this._y=r*a+this._y*p,this._z=n*a+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),n=Math.sqrt(s);return this.set(r*Math.sin(t),r*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,e=0,s=0){st.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pt.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pt.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,r=this.z,n=t.elements;return this.x=n[0]*e+n[3]*s+n[6]*r,this.y=n[1]*e+n[4]*s+n[7]*r,this.z=n[2]*e+n[5]*s+n[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,n=t.elements,o=1/(n[3]*e+n[7]*s+n[11]*r+n[15]);return this.x=(n[0]*e+n[4]*s+n[8]*r+n[12])*o,this.y=(n[1]*e+n[5]*s+n[9]*r+n[13])*o,this.z=(n[2]*e+n[6]*s+n[10]*r+n[14])*o,this}applyQuaternion(t){const e=this.x,s=this.y,r=this.z,n=t.x,o=t.y,h=t.z,l=t.w,u=2*(o*r-h*s),c=2*(h*e-n*r),a=2*(n*s-o*e);return this.x=e+l*u+o*a-h*c,this.y=s+l*c+h*u-n*a,this.z=r+l*a+n*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,r=this.z,n=t.elements;return this.x=n[0]*e+n[4]*s+n[8]*r,this.y=n[1]*e+n[5]*s+n[9]*r,this.z=n[2]*e+n[6]*s+n[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=m(this.x,t.x,e.x),this.y=m(this.y,t.y,e.y),this.z=m(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=m(this.x,t,e),this.y=m(this.y,t,e),this.z=m(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(m(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,r=t.y,n=t.z,o=e.x,h=e.y,l=e.z;return this.x=r*l-n*h,this.y=n*o-s*l,this.z=s*h-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return at.copy(this).projectOnVector(t),this.sub(at)}reflect(t){return this.sub(at.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(m(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return e*e+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const r=Math.sin(e)*t;return this.x=r*Math.sin(s),this.y=Math.cos(e)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const at=new st,Pt=new Nt;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ut}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ut);var q=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return i},Out:function(i){return i},InOut:function(i){return i}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-q.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?q.Bounce.In(i*2)*.5:q.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),j=function(){return performance.now()},de=function(){function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,t)}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(){for(var t,e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];for(var r=0,n=e;r<n.length;r++){var o=n[r];(t=o._group)===null||t===void 0||t.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},i.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var s=0,r=t;s<r.length;s++){var n=r[s];n._group=void 0,delete this._tweens[n.getId()],delete this._tweensAddedDuringUpdate[n.getId()]}},i.prototype.allStopped=function(){return this.getAll().every(function(t){return!t.isPlaying()})},i.prototype.update=function(t,e){t===void 0&&(t=j()),e===void 0&&(e=!0);var s=Object.keys(this._tweens);if(s.length!==0)for(;s.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<s.length;r++){var n=this._tweens[s[r]],o=!e;n&&n.update(t,o)===!1&&!e&&this.remove(n)}s=Object.keys(this._tweensAddedDuringUpdate)}},i}(),ct={Linear:function(i,t){var e=i.length-1,s=e*t,r=Math.floor(s),n=ct.Utils.Linear;return t<0?n(i[0],i[1],s):t>1?n(i[e],i[e-1],e-s):n(i[r],i[r+1>e?e:r+1],s-r)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},qt=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),ut=new de,pe=function(){function i(t,e){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=q.Linear.None,this._interpolationFunction=ct.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=qt.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=t,typeof e=="object"?(this._group=e,e.add(this)):e===!0&&(this._group=ut,ut.add(this))}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=j()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var s in this._valuesStartRepeat)this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var n in this._valuesEnd)r[n]=this._valuesEnd[n];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,s,r,n){for(var o in s){var h=t[o],l=Array.isArray(h),u=l?"array":typeof h,c=!l&&Array.isArray(s[o]);if(!(u==="undefined"||u==="function")){if(c){var a=s[o];if(a.length===0)continue;for(var p=[h],d=0,_=a.length;d<_;d+=1){var x=this._handleRelativeValue(h,a[d]);if(isNaN(x)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}p.push(x)}c&&(s[o]=p)}if((u==="object"||l)&&h&&!c){e[o]=l?[]:{};var f=h;for(var g in f)e[o][g]=f[g];r[o]=l?[]:{};var a=s[o];if(!this._isDynamic){var I={};for(var g in a)I[g]=a[g];s[o]=a=I}this._setupProperties(f,e[o],a,r[o],n)}else(typeof e[o]>"u"||n)&&(e[o]=h),l||(e[o]*=1),c?r[o]=s[o].slice().reverse():r[o]=e[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},i.prototype.pause=function(t){return t===void 0&&(t=j()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this)},i.prototype.resume=function(t){return t===void 0&&(t=j()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t?(t.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},i.prototype.remove=function(){var t;return(t=this._group)===null||t===void 0||t.remove(this),this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=q.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=ct.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var s=this,r;if(t===void 0&&(t=j()),e===void 0&&(e=i.autoStartOnUpdate),this._isPaused)return!0;var n;if(!this._goToEnd&&!this._isPlaying)if(e)this.start(t,!0);else return!1;if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=t-this._startTime,h=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*h,u=function(){if(s._duration===0||o>l)return 1;var x=Math.trunc(o/h),f=o-x*h,g=Math.min(f/s._duration,1);return g===0&&o===s._duration?1:g},c=u(),a=this._easingFunction(c);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,c),this._duration===0||o>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((o-this._duration)/h)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=h*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var d=0,_=this._chainedTweens.length;d<_;d++)this._chainedTweens[d].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,s,r){for(var n in s)if(e[n]!==void 0){var o=e[n]||0,h=s[n],l=Array.isArray(t[n]),u=Array.isArray(h),c=!l&&u;c?t[n]=this._interpolationFunction(h,r):typeof h=="object"&&h?this._updateProperties(t[n],o,h,r):(h=this._handleRelativeValue(o,h),typeof h=="number"&&(t[n]=o+(h-o)*r))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],s=this._valuesEnd[t];typeof s=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(s):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i.autoStartOnUpdate=!1,i}();qt.nextId;var v=ut;v.getAll.bind(v);v.removeAll.bind(v);v.add.bind(v);v.remove.bind(v);v.update.bind(v);var B={x:1,y:2,z:3};function _e(i){B=i}function ye(i){return Array.from("xyz").map(t=>{const e=Math.abs(B[t])-1;return Math.sign(B[t])*i[e]})}function fe(i){const t={...B},e=Object.entries(t).sort((s,r)=>Math.abs(s[1])<Math.abs(r[1])?-1:1);Array.from("xyz").forEach((s,r)=>{const n=Math.sign(+`${i[s][0]}1`),o={x:1,y:2,z:3}[i[s][1]],h=e[r][0],l=Math.sign(e[r][1]);B[h]=n*l*(o??-1)})}function xe({axis:i,to:t,duration:e,selector:s,from:r,conjugation:n=!1}){const o=ye(i),h=document.querySelectorAll(s),l=Array.from(h).map(p=>p.object3D.quaternion.clone()),u={a:r},c=new pe(u).to({a:t},e).onUpdate(()=>{h.forEach((p,d)=>{const _=p.object3D.quaternion,x=new Nt,f=new st(...o).normalize();x.setFromAxisAngle(f,u.a),_.multiplyQuaternions(l[d],n?x.conjugate():x)})}).start(),a=p=>{c.update(p),requestAnimationFrame(a)};requestAnimationFrame(a)}function tt(i,t){var e,s;if(i){document.body.style.pointerEvents="none",document.body.style.cursor="wait";const r=(e=document.querySelector("cube-controler"))==null?void 0:e.shadowRoot;if(r.querySelector(".buttons-loading").style.display="block",t){const n=document.querySelector(`a-entity#axes a-cylinder[color='${t}']`);n.setAttribute("depth-test",!0),n.setAttribute("opacity","1")}}else{document.body.style.pointerEvents="auto",document.body.style.cursor="auto";const r=(s=document.querySelector("cube-controler"))==null?void 0:s.shadowRoot;if(r.querySelector(".buttons-loading").style.display="none",t){const n=document.querySelector(`a-entity#axes a-cylinder[color='${t}']`);n.setAttribute("depth-test",!1),n.setAttribute("opacity","0.5")}}}function ge({axis:i,to:t,ax:e={x:"+x",y:"+y",z:"+z"},elm:s,selector:r="a-entity#cube",from:n=0,duration:o=1e3,axisColor:h=void 0}){var l;if(tt(!0,h),s){const c=((l=document.querySelector("cube-controler"))==null?void 0:l.shadowRoot).querySelector("textarea#out");if(!c)return;const a=[...c.value];if(s===a[0])if(a.length===1)c.value=s+2;else{const p=a.slice(1).findIndex(d=>{const _=d.charCodeAt(0);return _<48||57<_});p===-1?c.value=s+(Number(a.slice(1).join(""))+1):p===0?c.value=s+2+a.slice(p+1).join(""):c.value=s+(Number(a.slice(1,p+1).join(""))+1)+a.slice(p+1).join("")}else c.value=s+c.value}xe({selector:r,axis:i,to:t,from:n,duration:o}),setTimeout(()=>{fe(e),tt(!1,h)},o)}var be=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Dt=(i,t,e,s)=>{for(var r=s>1?void 0:s?$e(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&be(t,e,r),r};let et=class extends z{render(){return Z`
      <button
        @click="${()=>{var r;tt(!0),_e({x:1,y:2,z:3});const t=((r=document.querySelector("cube-controler"))==null?void 0:r.shadowRoot).querySelector("textarea#out");t.value="";const e=document.getElementById("cube"),s="0 0 0";e.setAttribute("animation",["property: rotation; to: ",s,"; dur: ",this.duration,";"].join("")),setTimeout(()=>{e.removeAttribute("animation"),e.setAttribute("rotation",s),tt(!1)},this.duration)}}"
      >e</button>
    `}};et.styles=W`
    :host {
      display: contents;
    }

    button {
      font-size: inherit;
    }
  `;Dt([b({type:Number})],et.prototype,"duration",2);et=Dt([X("greek-id-button")],et);var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,w=(i,t,e,s)=>{for(var r=s>1?void 0:s?me(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ve(t,e,r),r};let $=class extends z{constructor(){super(...arguments),this.elm="α",this.color="blue",this.textColor="white",this.axis=[0,0,1],this.to=Math.PI,this.ax={x:"-x",y:"-y",z:"+z"}}render(){return Z`
      <button
        style="background: ${this.color}; color: ${this.textColor};"
        @click="${()=>{ge({elm:this.elm,axisColor:this.axisColor?this.color:void 0,axis:this.axis,to:this.to,ax:this.ax,duration:this.duration})}}"
      >
        ${this.elm}
      </button>
    `}};$.styles=W`
    :host {
      display: contents;
    }

    button {
      font-size: inherit;
      font-weight: bold;
    }
  `;w([b({type:String})],$.prototype,"elm",2);w([b({type:String})],$.prototype,"color",2);w([b({type:String,attribute:"text-color"})],$.prototype,"textColor",2);w([b({type:Array})],$.prototype,"axis",2);w([b({type:Number})],$.prototype,"to",2);w([b({type:Object})],$.prototype,"ax",2);w([b({type:Number})],$.prototype,"duration",2);w([b({type:Boolean,attribute:"axis-color"})],$.prototype,"axisColor",2);$=w([X("greek-button")],$);var ze=Object.defineProperty,we=Object.getOwnPropertyDescriptor,xt=(i,t,e,s)=>{for(var r=s>1?void 0:s?we(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ze(t,e,r),r};let Q=class extends z{render(){return Z`
      <details>
        <summary>menu</summary>
        <div>
          <label>
            <input
              id="arrow"
              type="checkbox"
              checked
              @change="${i=>{const t=i.target.checked;document.querySelector("a-entity#arrow").setAttribute("visible",t)}}"
            />
            arrow
          </label>

          <label>
            <input
              id="axes"
              type="checkbox"
              checked
              @change="${i=>{const t=i.target.checked;document.querySelector("a-entity#axes").setAttribute("visible",t)}}"
            />
            axes
          </label>

          <label>
            <input
              id="axis-color"
              type="checkbox"
              ?checked="${this.axisColor}"
              @change="${i=>{const t=i.target.checked;this.dispatchEvent(new CustomEvent("change-axis-color",{detail:{axisColor:t},bubbles:!0,composed:!0}))}}"
            />
            axis-color
          </label>

          <label>
            <input
              id="cursor"
              type="checkbox"
              @change="${i=>{const t=i.target.checked;document.querySelector("a-cursor").setAttribute("visible",t)}}"
            />
            cursor
          </label>

          <label>
            <input
              id="depth-test"
              type="checkbox"
              checked
              @change="${i=>{const t=i.target.checked;document.querySelector("a-entity#cube").querySelectorAll("a-plane").forEach(r=>{r.setAttribute("depth-test",t)})}}"
            />
            depth-test
          </label>

          <label>
            <input
              id="depth-write"
              type="checkbox"
              checked
              @change="${i=>{const t=i.target.checked;document.querySelector("a-entity#cube").querySelectorAll("a-plane").forEach(r=>{r.setAttribute("depth-write",t)})}}"
            />
            depth-write
          </label>

          <label>
            <input
              id="wireframe"
              type="checkbox"
              @change="${i=>{const t=i.target.checked;document.querySelector("a-entity#cube").querySelectorAll("a-plane").forEach(r=>{r.setAttribute("wireframe-linewidth",5),r.setAttribute("wireframe",t)})}}"
            />
            wireframe
          </label>

          <label>
            duration:
            <input
              id="duration"
              type="number"
              min="0"
              step="100"
              .value="${String(this.duration)}"
              style="width: 5rem;"
              list="durations-list"
              @change="${i=>{const t=i.target.value;this.dispatchEvent(new CustomEvent("input-duration",{detail:{duration:Number(t)},bubbles:!0,composed:!0}))}}"
            />

            <datalist id="durations-list">
              <option value="100"></option>
              <option value="500"></option>
              <option value="1000"></option>
              <option value="1500"></option>
              <option value="2000"></option>
            </datalist>
          </label>

          <label>
            sky-color:
            <input
              id="sky-color"
              type="color"
              value="#808080"
              @change="${i=>{const t=i.target.value;document.querySelector("a-sky").setAttribute("color",t)}}"
            />
          </label>
        </div>
      </details>
    `}};Q.styles=W`
    :host {
      display: contents;
    }

    details {
      display: flex;
      flex-direction: column;
      align-items: end;

      div {
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }
  `;xt([b({type:Number,reflect:!0})],Q.prototype,"duration",2);xt([b({type:Boolean,reflect:!0,attribute:"axis-color"})],Q.prototype,"axisColor",2);Q=xt([X("cube-menu")],Q);
