/*! For license information please see main.6677dd15.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_pi_bpmn_canvas=self.webpackChunk_pi_bpmn_canvas||[]).push([[179],{"../../../earthling-design-system/packages/web-components/dist/components/button/index.js":()=>{(()=>{"use strict";var t={947:(t,e,o)=>{o.d(e,{i:()=>r});const r=o(427).iv`
  :host {
    all: initial;
  }

  .hidden {
    display: none;
  }
`},514:(t,e,o)=>{o.d(e,{XM:()=>n,Xe:()=>i,pX:()=>r});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},311:(t,e,o)=>{var r;o.d(e,{Jb:()=>S,Ld:()=>k,dy:()=>E,sY:()=>j});const n=window,i=n.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,l=`lit$${(Math.random()+"").slice(9)}$`,a="?"+l,d=`<${a}>`,c=document,h=(t="")=>c.createComment(t),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,$=/>/g,y=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),g=/'/g,_=/"/g,m=/^(?:script|style|textarea|title)$/i,A=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),E=A(1),S=(A(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),C=new WeakMap,w=c.createTreeWalker(c,129,null,!1),x=(t,e)=>{const o=t.length-1,r=[];let n,i=2===e?"<svg>":"",a=v;for(let e=0;e<o;e++){const o=t[e];let s,c,h=-1,u=0;for(;u<o.length&&(a.lastIndex=u,c=a.exec(o),null!==c);)u=a.lastIndex,a===v?"!--"===c[1]?a=f:void 0!==c[1]?a=$:void 0!==c[2]?(m.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=y):void 0!==c[3]&&(a=y):a===y?">"===c[0]?(a=null!=n?n:v,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?y:'"'===c[3]?_:g):a===_||a===g?a=y:a===f||a===$?a=v:(a=y,n=void 0);const p=a===y&&t[e+1].startsWith("/>")?" ":"";i+=a===v?o+d:h>=0?(r.push(s),o.slice(0,h)+"$lit$"+o.slice(h)+l+p):o+l+(-2===h?(r.push(void 0),e):p)}const c=i+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(c):c,r]};class T{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,s=0;const d=t.length-1,c=this.parts,[u,p]=x(t,e);if(this.el=T.createElement(u,o),w.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=w.nextNode())&&c.length<d;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(l)){const o=p[s++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(l),e=/([.?@])?(.*)/.exec(o);c.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?N:"@"===e[1]?L:H})}else c.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(m.test(r.tagName)){const t=r.textContent.split(l),e=t.length-1;if(e>0){r.textContent=i?i.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],h()),w.nextNode(),c.push({type:2,index:++n});r.append(t[e],h())}}}else if(8===r.nodeType)if(r.data===a)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(l,t+1));)c.push({type:7,index:n}),t+=l.length-1}n++}}static createElement(t,e){const o=c.createElement("template");return o.innerHTML=t,o}}function P(t,e,o=t,r){var n,i,s,l;if(e===S)return e;let a=void 0!==r?null===(n=o._$Co)||void 0===n?void 0:n[r]:o._$Cl;const d=u(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(i=null==a?void 0:a._$AO)||void 0===i||i.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,o,r)),void 0!==r?(null!==(s=(l=o)._$Co)&&void 0!==s?s:l._$Co=[])[r]=a:o._$Cl=a),void 0!==a&&(e=P(t,a._$AS(t,e.values),a,r)),e}class U{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(o,!0);w.currentNode=n;let i=w.nextNode(),s=0,l=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new O(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new I(i,this,t)),this.u.push(e),a=r[++l]}s!==(null==a?void 0:a.index)&&(i=w.nextNode(),s++)}return n}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class O{constructor(t,e,o,r){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),u(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==S&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==k&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=T.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(o);else{const t=new U(n,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new T(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new O(this.O(h()),this.O(h()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,o,r,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const n=this.strings;let i=!1;if(void 0===n)t=P(this,t,e,0),i=!u(t)||t!==this._$AH&&t!==S,i&&(this._$AH=t);else{const r=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=P(this,r[o+s],e,s),l===S&&(l=this._$AH[s]),i||(i=!u(l)||l!==this._$AH[s]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}i&&!r&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const M=i?i.emptyScript:"";class N extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,M):this.element.removeAttribute(this.name)}}class L extends H{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=P(this,t,e,0))&&void 0!==o?o:k)===S)return;const r=this._$AH,n=t===k&&r!==k||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==k&&(r===k||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const z=n.litHtmlPolyfillSupport;null==z||z(T,O),(null!==(r=n.litHtmlVersions)&&void 0!==r?r:n.litHtmlVersions=[]).push("2.5.0");const j=(t,e,o)=>{var r,n;const i=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=i._$litPart$;if(void 0===s){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;i._$litPart$=s=new O(e.insertBefore(h(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s}},331:(t,e,o)=>{o.d(e,{Mo:()=>r,Cb:()=>i});const r=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function i(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):n(t,e)}var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},427:(t,e,o)=>{o.d(e,{oi:()=>A,iv:()=>a,dy:()=>m.dy,Ld:()=>m.Ld});const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class l{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new l(o,t,i)},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var c;const h=window,u=h.trustedTypes,p=u?u.emptyScript:"",b=h.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},f=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),n=r.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=$){var r;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:v).toAttribute(e,o.type);this._$El=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:v;this._$El=n,this[n]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:y}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.5.0");var g,_,m=o(311);class A extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,m.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return m.Jb}}A.finalized=!0,A._$litElement$=!0,null===(g=globalThis.litElementHydrateSupport)||void 0===g||g.call(globalThis,{LitElement:A});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:A}),(null!==(_=globalThis.litElementVersions)&&void 0!==_?_:globalThis.litElementVersions=[]).push("3.2.2")}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(427),e=o(331),r=o(311),n=o(514);const i=(0,n.XM)(class extends n.Xe{constructor(t){var e;if(super(t),t.type!==n.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const i=t.element.classList;this.nt.forEach((t=>{t in e||(i.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(o?(i.add(t),this.nt.add(t)):(i.remove(t),this.nt.delete(t)))}return r.Jb}});var s=o(947);const l=[t.iv`
  * {
    --ne-button-color-background-primary-default: #006bd6;
    --ne-button-color-background-primary-hover: #0a85ff;
    --ne-button-color-background-primary-disabled: #a7abaf;
    --ne-button-color-background-secondary-default: #ffffff;
    --ne-button-color-background-secondary-hover: #f0f7ff;
    --ne-button-color-background-secondary-disabled: #a7abaf;
    --ne-button-color-background-destructive-default: #b80000;
    --ne-button-color-background-destructive-hover: #ff1f1f;
    --ne-button-color-background-destructive-disabled: #a7abaf;
    --ne-button-color-background-text-hover: #f0f7ff;
    --ne-button-color-background-text-disabled: #a7abaf;
    --ne-button-color-background-inverse-hover: #f0f7ff;
    --ne-button-color-background-inverse-disabled: #a7abaf;
    --ne-button-color-border-primary-default: #0052a3;
    --ne-button-color-border-secondary-default: #e2e3e4;
    --ne-button-color-border-destructive-default: #7c0d0e;
    --ne-button-color-border-focus: #a3d1ff;
    --ne-button-color-border-inverse-default: #ffffff;
    --ne-button-color-label-primary-disabled: #414548;
    --ne-button-color-label-primary-default: #ffffff;
    --ne-button-color-label-secondary-default: #006bd6;
    --ne-button-color-label-secondary-disabled: #414548;
    --ne-button-color-label-destructive-default: #ffffff;
    --ne-button-color-label-destructive-disabled: #414548;
    --ne-button-color-label-text-default: #006bd6;
    --ne-button-color-label-text-disabled: #414548;
    --ne-button-color-label-inverse-default: #ffffff;
    --ne-button-color-label-inverse-disabled: #414548;
    --ne-button-border-radius: 0.25em;
    --ne-button-padding-horizontal: 0.75em;
    --ne-button-padding-vertical: 0.5em;
    --ne-button-gap: 0.5em;
    --ne-button-font-family: Open Sans;
    --ne-button-font-size: 0.875em;
  }
`,t.iv`
  .btn {
    font-family: var(--ne-button-font-family);
    font-size: var(--ne-button-font-size);
    padding-top: var(--ne-button-padding-vertical);
    padding-right: var(--ne-button-padding-horizontal);
    padding-bottom: var(--ne-button-padding-vertical);
    padding-left: var(--ne-button-padding-horizontal);
    gap: var(--ne-button-gap);
    border-radius: var(--ne-button-border-radius);
    outline: none;
    display: grid;
    grid-auto-flow: column;
  }

  .btn:focus {
    border: 4px solid var(--ne-button-color-border-focus);
  }

  .btn-primary {
    border: 1px solid var(--ne-button-color-border-primary-default);
    color: var(--ne-button-color-label-primary-default);
    background-color: var(--ne-button-color-background-primary-default);
  }

  .btn-primary:hover {
    background-color: var(--ne-button-color-background-primary-hover);
  }

  .btn-primary:disabled {
    border: 0;
    color: var(--ne-button-color-label-primary-disabled);
    background-color: var(--ne-button-color-background-primary-disabled);
  }

  .btn-secondary {
    border: 1px solid var(--ne-button-color-border-secondary-default);
    color: var(--ne-button-color-label-secondary-default);
    background-color: var(--ne-button-color-background-secondary-default);
  }

  .btn-secondary:hover {
    background-color: var(--ne-button-color-background-secondary-hover);
  }

  .btn-secondary:disabled {
    border: 0;
    color: var(--ne-button-color-label-secondary-disabled);
    background-color: var(--ne-button-color-background-secondary-disabled);
  }

  .btn-destructive {
    border: 1px solid var(--ne-button-color-border-destructive-default);
    color: var(--ne-button-color-label-destructive-default);
    background-color: var(--ne-button-color-background-destructive-default);
  }

  .btn-destructive:hover {
    background-color: var(--ne-button-color-background-destructive-hover);
  }

  .btn-destructive:disabled {
    border: 0;
    color: var(--ne-button-color-label-destructive-disabled);
    background-color: var(--ne-button-color-background-destructive-disabled);
  }

  .btn-text {
    border: 0;
    color: var(--ne-button-color-label-text-default);
    background-color: transparent;
  }

  .btn-text:hover {
    background-color: var(--ne-button-color-background-text-hover);
  }

  .btn-text:disabled {
    border: 0;
    color: var(--ne-button-color-label-text-disabled);
    background-color: var(--ne-button-color-background-text-disabled);
  }

  .btn-inverse {
    color: var(--ne-button-color-label-inverse-default);
    background-color: transparent;
    border: 1px solid var(--ne-button-color-border-inverse-default);
  }

  .btn-inverse:hover {
    background-color: var(--ne-button-color-background-inverse-hover);
  }

  .btn-inverse:disabled {
    border: 0;
    color: var(--ne-button-color-label-inverse-disabled);
    background-color: var(--ne-button-color-background-inverse-disabled);
  }
`,s.i];var a=function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};let d=class extends t.oi{constructor(){super(...arguments),this.id="",this.disabled=!1,this.ariaLabel="",this.leftIconType="",this.rightIconType="",this.variant="primary",this.onClick=()=>{((t,e,o)=>{const n=new CustomEvent("ne-click",{bubbles:!0,cancelable:!1,composed:!0,composed:!0,bubbles:!0});t.dispatchEvent(n)})(this)}}static get styles(){return l}render(){let e="",o="";return this.leftIconType&&(e=t.dy`<ne-icon
        id="left-button-icon"
        type="${this.leftIconType}"
      ></ne-icon>`),this.rightIconType&&(o=t.dy`<ne-icon
        id="right-button-icon"
        type="${this.rightIconType}"
      ></ne-icon>`),t.dy`
      <button
        id=${this.id}
        type="button"
        ?disabled=${this.disabled}
        @click="${this.onClick}"
        aria-label=${this.ariaLabel||t.Ld}
        class=${i({btn:!0,"btn-primary":"primary"===this.variant,"btn-secondary":"secondary"===this.variant,"btn-destructive":"destructive"===this.variant,"btn-text":"text"===this.variant,"btn-inverse":"inverse"===this.variant})}
      >
        <slot name="left">${e}</slot>
        <slot></slot>
        <slot name="right">${o}</slot>
      </button>
//# sourceMappingURL=main.6677dd15.iframe.bundle.js.map