import{j as V,m as G}from"./animations-DQW0BWnX.js";import{b as Ja,N as Ya,a as Za}from"./Footer-BEYWawbe.js";import{r as An}from"./react-vendor-BvOuhz89.js";import{c as br,i as It,f as gs}from"./animations-u70wyC8W.js";import{M as _s,P as tl,l as el,U as nl,m as rl,n as il}from"./icons-CqmRlV-k.js";import"./router-JQeOdLbu.js";var ys={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},sl=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,d=s+2<n.length,g=d?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let b=(c&15)<<2|g>>6,C=g&63;d||(C=64,u||(b=64)),i.push(e[I],e[w],e[b],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(so(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||g==null||w==null)throw new ol;const b=o<<2|c>>4;if(i.push(b),g!==64){const C=c<<4&240|g>>2;if(i.push(C),w!==64){const N=g<<6&192|w;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ol extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const al=function(n){const t=so(n);return oo.encodeByteArray(t,!0)},xn=function(n){return al(n).replace(/\./g,"")},ll=function(n){try{return oo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=()=>ul().__FIREBASE_DEFAULTS__,hl=()=>{if(typeof process>"u"||typeof ys>"u")return;const n=ys.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ll(n[1]);return t&&JSON.parse(t)},Wr=()=>{try{return cl()||hl()||dl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fl=n=>{var t,e;return(e=(t=Wr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ml=n=>{const t=fl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},ao=()=>{var n;return(n=Wr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xn(JSON.stringify(e)),xn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yl(){var n;const t=(n=Wr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vl(){return!yl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function El(){try{return typeof indexedDB=="object"}catch{return!1}}function Tl(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="FirebaseError";class ve extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Il,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Al(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ve(s,c,i)}}function Al(n,t){return n.replace(wl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const wl=/\{\$([^}]+)}/g;function kr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(vs(o)&&vs(u)){if(!kr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function vs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class He{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new pl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pl(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bl(n){return n===Xt?void 0:n}function Pl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Rl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Cl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Vl=U.INFO,Dl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Nl=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Dl[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uo{constructor(t){this.name=t,this._logLevel=Vl,this._logHandler=Nl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const xl=(n,t)=>t.some(e=>n instanceof e);let Es,Ts;function kl(){return Es||(Es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ol(){return Ts||(Ts=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const co=new WeakMap,Or=new WeakMap,ho=new WeakMap,Pr=new WeakMap,Xr=new WeakMap;function Ml(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ut(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&co.set(e,n)}).catch(()=>{}),Xr.set(t,n),t}function Ll(n){if(Or.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Or.set(n,t)}let Mr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Or.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ho.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Fl(n){Mr=n(Mr)}function Ul(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Sr(this),t,...e);return ho.set(i,t.sort?t.sort():[t]),Ut(i)}:Ol().includes(n)?function(...t){return n.apply(Sr(this),t),Ut(co.get(this))}:function(...t){return Ut(n.apply(Sr(this),t))}}function jl(n){return typeof n=="function"?Ul(n):(n instanceof IDBTransaction&&Ll(n),xl(n,kl())?new Proxy(n,Mr):n)}function Ut(n){if(n instanceof IDBRequest)return Ml(n);if(Pr.has(n))return Pr.get(n);const t=jl(n);return t!==n&&(Pr.set(n,t),Xr.set(t,n)),t}const Sr=n=>Xr.get(n);function Bl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Ut(u);return i&&u.addEventListener("upgradeneeded",d=>{i(Ut(u.result),d.oldVersion,d.newVersion,Ut(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const $l=["get","getKey","getAll","getAllKeys","count"],ql=["put","add","delete","clear"],Cr=new Map;function Is(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Cr.get(t))return Cr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=ql.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$l.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,s?"readwrite":"readonly");let g=d.store;return i&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),s&&d.done]))[0]};return Cr.set(t,o),o}Fl(n=>({...n,get:(t,e,i)=>Is(t,e)||n.get(t,e,i),has:(t,e)=>!!Is(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Gl(n){const t=n.getComponent();return t?.type==="VERSION"}const Lr="@firebase/app",As="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new uo("@firebase/app"),Hl="@firebase/app-compat",Kl="@firebase/analytics-compat",Ql="@firebase/analytics",Wl="@firebase/app-check-compat",Xl="@firebase/app-check",Jl="@firebase/auth",Yl="@firebase/auth-compat",Zl="@firebase/database",tu="@firebase/data-connect",eu="@firebase/database-compat",nu="@firebase/functions",ru="@firebase/functions-compat",iu="@firebase/installations",su="@firebase/installations-compat",ou="@firebase/messaging",au="@firebase/messaging-compat",lu="@firebase/performance",uu="@firebase/performance-compat",cu="@firebase/remote-config",hu="@firebase/remote-config-compat",du="@firebase/storage",fu="@firebase/storage-compat",mu="@firebase/firestore",pu="@firebase/vertexai",gu="@firebase/firestore-compat",_u="firebase",yu="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",vu={[Lr]:"fire-core",[Hl]:"fire-core-compat",[Ql]:"fire-analytics",[Kl]:"fire-analytics-compat",[Xl]:"fire-app-check",[Wl]:"fire-app-check-compat",[Jl]:"fire-auth",[Yl]:"fire-auth-compat",[Zl]:"fire-rtdb",[tu]:"fire-data-connect",[eu]:"fire-rtdb-compat",[nu]:"fire-fn",[ru]:"fire-fn-compat",[iu]:"fire-iid",[su]:"fire-iid-compat",[ou]:"fire-fcm",[au]:"fire-fcm-compat",[lu]:"fire-perf",[uu]:"fire-perf-compat",[cu]:"fire-rc",[hu]:"fire-rc-compat",[du]:"fire-gcs",[fu]:"fire-gcs-compat",[mu]:"fire-fst",[gu]:"fire-fst-compat",[pu]:"fire-vertex","fire-js":"fire-js",[_u]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Map,Eu=new Map,Ur=new Map;function ws(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function On(n){const t=n.name;if(Ur.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,n);for(const e of kn.values())ws(e,n);for(const e of Eu.values())ws(e,n);return!0}function Tu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new lo("app","Firebase",Iu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=yu;function fo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=ao()),!e)throw jt.create("no-options");const o=kn.get(s);if(o){if(kr(e,o.options)&&kr(i,o.config))return o;throw jt.create("duplicate-app",{appName:s})}const u=new Sl(s);for(const d of Ur.values())u.addComponent(d);const c=new Au(e,i,u);return kn.set(s,c),c}function Ru(n=Fr){const t=kn.get(n);if(!t&&n===Fr&&ao())return fo();if(!t)throw jt.create("no-app",{appName:n});return t}function de(n,t,e){var i;let s=(i=vu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}On(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="firebase-heartbeat-database",Pu=1,Ke="firebase-heartbeat-store";let Vr=null;function mo(){return Vr||(Vr=Bl(bu,Pu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ke)}catch(e){console.warn(e)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Vr}async function Su(n){try{const e=(await mo()).transaction(Ke),i=await e.objectStore(Ke).get(po(n));return await e.done,i}catch(t){if(t instanceof ve)kt.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function Rs(n,t){try{const i=(await mo()).transaction(Ke,"readwrite");await i.objectStore(Ke).put(t,po(n)),await i.done}catch(e){if(e instanceof ve)kt.warn(e.message);else{const i=jt.create("idb-set",{originalErrorMessage:e?.message});kt.warn(i.message)}}}function po(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=1024,Vu=30*24*60*60*1e3;class Du{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bs();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Vu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){kt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bs(),{heartbeatsToSend:i,unsentEntries:s}=Nu(this._heartbeatsCache.heartbeats),o=xn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function bs(){return new Date().toISOString().substring(0,10)}function Nu(n,t=Cu){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ps(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ps(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class xu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?Tl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Su(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ps(n){return xn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){On(new He("platform-logger",t=>new zl(t),"PRIVATE")),On(new He("heartbeat",t=>new Du(t),"PRIVATE")),de(Lr,As,n),de(Lr,As,"esm2017"),de("fire-js","")}ku("");var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var go;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,f){function p(){}p.prototype=f.prototype,v.D=f.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(_,y,T){for(var m=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)m[Ct-2]=arguments[Ct];return f.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,f,p){p||(p=0);var _=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)_[y]=f.charCodeAt(p++)|f.charCodeAt(p++)<<8|f.charCodeAt(p++)<<16|f.charCodeAt(p++)<<24;else for(y=0;16>y;++y)_[y]=f[p++]|f[p++]<<8|f[p++]<<16|f[p++]<<24;f=v.g[0],p=v.g[1],y=v.g[2];var T=v.g[3],m=f+(T^p&(y^T))+_[0]+3614090360&4294967295;f=p+(m<<7&4294967295|m>>>25),m=T+(y^f&(p^y))+_[1]+3905402710&4294967295,T=f+(m<<12&4294967295|m>>>20),m=y+(p^T&(f^p))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(f^y&(T^f))+_[3]+3250441966&4294967295,p=y+(m<<22&4294967295|m>>>10),m=f+(T^p&(y^T))+_[4]+4118548399&4294967295,f=p+(m<<7&4294967295|m>>>25),m=T+(y^f&(p^y))+_[5]+1200080426&4294967295,T=f+(m<<12&4294967295|m>>>20),m=y+(p^T&(f^p))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(f^y&(T^f))+_[7]+4249261313&4294967295,p=y+(m<<22&4294967295|m>>>10),m=f+(T^p&(y^T))+_[8]+1770035416&4294967295,f=p+(m<<7&4294967295|m>>>25),m=T+(y^f&(p^y))+_[9]+2336552879&4294967295,T=f+(m<<12&4294967295|m>>>20),m=y+(p^T&(f^p))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(f^y&(T^f))+_[11]+2304563134&4294967295,p=y+(m<<22&4294967295|m>>>10),m=f+(T^p&(y^T))+_[12]+1804603682&4294967295,f=p+(m<<7&4294967295|m>>>25),m=T+(y^f&(p^y))+_[13]+4254626195&4294967295,T=f+(m<<12&4294967295|m>>>20),m=y+(p^T&(f^p))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(f^y&(T^f))+_[15]+1236535329&4294967295,p=y+(m<<22&4294967295|m>>>10),m=f+(y^T&(p^y))+_[1]+4129170786&4294967295,f=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(f^p))+_[6]+3225465664&4294967295,T=f+(m<<9&4294967295|m>>>23),m=y+(f^p&(T^f))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^f&(y^T))+_[0]+3921069994&4294967295,p=y+(m<<20&4294967295|m>>>12),m=f+(y^T&(p^y))+_[5]+3593408605&4294967295,f=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(f^p))+_[10]+38016083&4294967295,T=f+(m<<9&4294967295|m>>>23),m=y+(f^p&(T^f))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^f&(y^T))+_[4]+3889429448&4294967295,p=y+(m<<20&4294967295|m>>>12),m=f+(y^T&(p^y))+_[9]+568446438&4294967295,f=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(f^p))+_[14]+3275163606&4294967295,T=f+(m<<9&4294967295|m>>>23),m=y+(f^p&(T^f))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^f&(y^T))+_[8]+1163531501&4294967295,p=y+(m<<20&4294967295|m>>>12),m=f+(y^T&(p^y))+_[13]+2850285829&4294967295,f=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(f^p))+_[2]+4243563512&4294967295,T=f+(m<<9&4294967295|m>>>23),m=y+(f^p&(T^f))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^f&(y^T))+_[12]+2368359562&4294967295,p=y+(m<<20&4294967295|m>>>12),m=f+(p^y^T)+_[5]+4294588738&4294967295,f=p+(m<<4&4294967295|m>>>28),m=T+(f^p^y)+_[8]+2272392833&4294967295,T=f+(m<<11&4294967295|m>>>21),m=y+(T^f^p)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^f)+_[14]+4259657740&4294967295,p=y+(m<<23&4294967295|m>>>9),m=f+(p^y^T)+_[1]+2763975236&4294967295,f=p+(m<<4&4294967295|m>>>28),m=T+(f^p^y)+_[4]+1272893353&4294967295,T=f+(m<<11&4294967295|m>>>21),m=y+(T^f^p)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^f)+_[10]+3200236656&4294967295,p=y+(m<<23&4294967295|m>>>9),m=f+(p^y^T)+_[13]+681279174&4294967295,f=p+(m<<4&4294967295|m>>>28),m=T+(f^p^y)+_[0]+3936430074&4294967295,T=f+(m<<11&4294967295|m>>>21),m=y+(T^f^p)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^f)+_[6]+76029189&4294967295,p=y+(m<<23&4294967295|m>>>9),m=f+(p^y^T)+_[9]+3654602809&4294967295,f=p+(m<<4&4294967295|m>>>28),m=T+(f^p^y)+_[12]+3873151461&4294967295,T=f+(m<<11&4294967295|m>>>21),m=y+(T^f^p)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^f)+_[2]+3299628645&4294967295,p=y+(m<<23&4294967295|m>>>9),m=f+(y^(p|~T))+_[0]+4096336452&4294967295,f=p+(m<<6&4294967295|m>>>26),m=T+(p^(f|~y))+_[7]+1126891415&4294967295,T=f+(m<<10&4294967295|m>>>22),m=y+(f^(T|~p))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~f))+_[5]+4237533241&4294967295,p=y+(m<<21&4294967295|m>>>11),m=f+(y^(p|~T))+_[12]+1700485571&4294967295,f=p+(m<<6&4294967295|m>>>26),m=T+(p^(f|~y))+_[3]+2399980690&4294967295,T=f+(m<<10&4294967295|m>>>22),m=y+(f^(T|~p))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~f))+_[1]+2240044497&4294967295,p=y+(m<<21&4294967295|m>>>11),m=f+(y^(p|~T))+_[8]+1873313359&4294967295,f=p+(m<<6&4294967295|m>>>26),m=T+(p^(f|~y))+_[15]+4264355552&4294967295,T=f+(m<<10&4294967295|m>>>22),m=y+(f^(T|~p))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~f))+_[13]+1309151649&4294967295,p=y+(m<<21&4294967295|m>>>11),m=f+(y^(p|~T))+_[4]+4149444226&4294967295,f=p+(m<<6&4294967295|m>>>26),m=T+(p^(f|~y))+_[11]+3174756917&4294967295,T=f+(m<<10&4294967295|m>>>22),m=y+(f^(T|~p))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~f))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+f&4294967295,v.g[1]=v.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,f){f===void 0&&(f=v.length);for(var p=f-this.blockSize,_=this.B,y=this.h,T=0;T<f;){if(y==0)for(;T<=p;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<f;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<f;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=f},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var f=1;f<v.length-8;++f)v[f]=0;var p=8*this.o;for(f=v.length-8;f<v.length;++f)v[f]=p&255,p/=256;for(this.u(v),v=Array(16),f=p=0;4>f;++f)for(var _=0;32>_;_+=8)v[p++]=this.g[f]>>>_&255;return v};function o(v,f){var p=c;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=f(v)}function u(v,f){this.h=f;for(var p=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==f||(p[y]=T,_=!1)}this.g=p}var c={};function d(v){return-128<=v&&128>v?o(v,function(f){return new u([f|0],0>f?-1:0)}):new u([v|0],0>v?-1:0)}function g(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return x(g(-v));for(var f=[],p=1,_=0;v>=p;_++)f[_]=v/p|0,p*=4294967296;return new u(f,0)}function I(v,f){if(v.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(v.charAt(0)=="-")return x(I(v.substring(1),f));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(f,8)),_=w,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),m=parseInt(v.substring(y,y+T),f);8>T?(T=g(Math.pow(f,T)),_=_.j(T).add(g(m))):(_=_.j(p),_=_.add(g(m)))}return _}var w=d(0),b=d(1),C=d(16777216);n=u.prototype,n.m=function(){if(O(this))return-x(this).m();for(var v=0,f=1,p=0;p<this.g.length;p++){var _=this.i(p);v+=(0<=_?_:4294967296+_)*f,f*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(O(this))return"-"+x(this).toString(v);for(var f=g(Math.pow(v,6)),p=this,_="";;){var y=lt(p,f).g;p=Q(p,y.j(f));var T=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=y,N(p))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var f=0;f<v.g.length;f++)if(v.g[f]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=Q(this,v),O(v)?-1:N(v)?0:1};function x(v){for(var f=v.g.length,p=[],_=0;_<f;_++)p[_]=~v.g[_];return new u(p,~v.h).add(b)}n.abs=function(){return O(this)?x(this):this},n.add=function(v){for(var f=Math.max(this.g.length,v.g.length),p=[],_=0,y=0;y<=f;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,p[y]=m<<16|T}return new u(p,p[p.length-1]&-2147483648?-1:0)};function Q(v,f){return v.add(x(f))}n.j=function(v){if(N(this)||N(v))return w;if(O(this))return O(v)?x(this).j(x(v)):x(x(this).j(v));if(O(v))return x(this.j(x(v)));if(0>this.l(C)&&0>v.l(C))return g(this.m()*v.m());for(var f=this.g.length+v.g.length,p=[],_=0;_<2*f;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Ct=v.i(y)>>>16,Ie=v.i(y)&65535;p[2*_+2*y]+=m*Ie,K(p,2*_+2*y),p[2*_+2*y+1]+=T*Ie,K(p,2*_+2*y+1),p[2*_+2*y+1]+=m*Ct,K(p,2*_+2*y+1),p[2*_+2*y+2]+=T*Ct,K(p,2*_+2*y+2)}for(_=0;_<f;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=f;_<2*f;_++)p[_]=0;return new u(p,0)};function K(v,f){for(;(v[f]&65535)!=v[f];)v[f+1]+=v[f]>>>16,v[f]&=65535,f++}function W(v,f){this.g=v,this.h=f}function lt(v,f){if(N(f))throw Error("division by zero");if(N(v))return new W(w,w);if(O(v))return f=lt(x(v),f),new W(x(f.g),x(f.h));if(O(f))return f=lt(v,x(f)),new W(x(f.g),f.h);if(30<v.g.length){if(O(v)||O(f))throw Error("slowDivide_ only works with positive integers.");for(var p=b,_=f;0>=_.l(v);)p=Gt(p),_=Gt(_);var y=yt(p,1),T=yt(_,1);for(_=yt(_,2),p=yt(p,2);!N(_);){var m=T.add(_);0>=m.l(v)&&(y=y.add(p),T=m),_=yt(_,1),p=yt(p,1)}return f=Q(v,y.j(f)),new W(y,f)}for(y=w;0<=v.l(f);){for(p=Math.max(1,Math.floor(v.m()/f.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(p),m=T.j(f);O(m)||0<m.l(v);)p-=_,T=g(p),m=T.j(f);N(T)&&(T=b),y=y.add(T),v=Q(v,m)}return new W(y,v)}n.A=function(v){return lt(this,v).h},n.and=function(v){for(var f=Math.max(this.g.length,v.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)&v.i(_);return new u(p,this.h&v.h)},n.or=function(v){for(var f=Math.max(this.g.length,v.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)|v.i(_);return new u(p,this.h|v.h)},n.xor=function(v){for(var f=Math.max(this.g.length,v.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)^v.i(_);return new u(p,this.h^v.h)};function Gt(v){for(var f=v.g.length+1,p=[],_=0;_<f;_++)p[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(p,v.h)}function yt(v,f){var p=f>>5;f%=32;for(var _=v.g.length-p,y=[],T=0;T<_;T++)y[T]=0<f?v.i(T+p)>>>f|v.i(T+p+1)<<32-f:v.i(T+p);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,go=u}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});var wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _o,je,yo,Cn,jr,vo,Eo,To;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof wn=="object"&&wn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in l))break t;l=l[E]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,E={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function b(r,a,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,b.apply(null,arguments)}function C(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function N(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,E,A){for(var S=Array(arguments.length-2),$=2;$<arguments.length;$++)S[$-2]=arguments[$];return a.prototype[E].apply(h,S)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function x(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const E=r.length||0,A=h.length||0;r.length=E+A;for(let S=0;S<A;S++)r[E+S]=h[S]}else r.push(h)}}class Q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function lt(r){return lt[" "](r),r}lt[" "]=function(){};var Gt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function yt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function v(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function f(r){const a={};for(const l in r)a[l]=r[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(l in h)r[l]=h[l];for(let A=0;A<p.length;A++)l=p[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function m(){var r=nr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,l){const h=Ie.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Ie=new Q(()=>new ga,r=>r.reset());class ga{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,nr=new Ct,gi=()=>{const r=c.Promise.resolve(void 0);Ae=()=>{r.then(_a)}};var _a=()=>{for(var r;r=m();){try{r.h.call(r.g)}catch(l){T(l)}var a=Ie;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}we=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var ya=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Re(r,a){if(ut.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Gt){t:{try{lt(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:va[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Re.aa.h.call(this)}}N(Re,ut);var va={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Ea=0;function Ta(r,a,l,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=E,this.key=++Ea,this.da=this.fa=!1}function sn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,a,l,h,E){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var S=ir(r,a,h,E);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new Ta(a,this.src,A,!!h,E),a.fa=l,r.push(a)),a};function rr(r,a){var l=a.type;if(l in r.g){var h=r.g[l],E=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=E)&&Array.prototype.splice.call(h,E,1),A&&(sn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function ir(r,a,l,h){for(var E=0;E<r.length;++E){var A=r[E];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return E}return-1}var sr="closure_lm_"+(1e6*Math.random()|0),or={};function _i(r,a,l,h,E){if(Array.isArray(a)){for(var A=0;A<a.length;A++)_i(r,a[A],l,h,E);return null}return l=Ei(l),r&&r[rn]?r.K(a,l,g(h)?!!h.capture:!1,E):Ia(r,a,l,!1,h,E)}function Ia(r,a,l,h,E,A){if(!a)throw Error("Invalid event type");var S=g(E)?!!E.capture:!!E,$=lr(r);if($||(r[sr]=$=new on(r)),l=$.add(a,l,h,S,A),l.proxy)return l;if(h=Aa(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)ya||(E=S),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(vi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Aa(){function r(l){return a.call(r.src,r.listener,l)}const a=wa;return r}function yi(r,a,l,h,E){if(Array.isArray(a))for(var A=0;A<a.length;A++)yi(r,a[A],l,h,E);else h=g(h)?!!h.capture:!!h,l=Ei(l),r&&r[rn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=ir(A,l,h,E),-1<l&&(sn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=lr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=ir(a,l,h,E)),(l=-1<r?a[r]:null)&&ar(l))}function ar(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[rn])rr(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(vi(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=lr(a))?(rr(l,r),l.h==0&&(l.src=null,a[sr]=null)):sn(r)}}}function vi(r){return r in or?or[r]:or[r]="on"+r}function wa(r,a){if(r.da)r=!0;else{a=new Re(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&ar(r),r=l.call(h,a)}return r}function lr(r){return r=r[sr],r instanceof on?r:null}var ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ei(r){return typeof r=="function"?r:(r[ur]||(r[ur]=function(a){return r.handleEvent(a)}),r[ur])}function ct(){Ot.call(this),this.i=new on(this),this.M=this,this.F=null}N(ct,Ot),ct.prototype[rn]=!0,ct.prototype.removeEventListener=function(r,a,l,h){yi(this,r,a,l,h)};function gt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new ut(a,r);else if(a instanceof ut)a.target=a.target||r;else{var E=a;a=new ut(h,r),_(a,E)}if(E=!0,l)for(var A=l.length-1;0<=A;A--){var S=a.g=l[A];E=an(S,h,!0,a)&&E}if(S=a.g=r,E=an(S,h,!0,a)&&E,E=an(S,h,!1,a)&&E,l)for(A=0;A<l.length;A++)S=a.g=l[A],E=an(S,h,!1,a)&&E}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)sn(l[h]);delete r.g[a],r.h--}}this.F=null},ct.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},ct.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function an(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==l){var $=S.listener,rt=S.ha||S.src;S.fa&&rr(r.i,S),E=$.call(rt,h)!==!1&&E}}return E&&!h.defaultPrevented}function Ti(r,a,l){if(typeof r=="function")l&&(r=b(r,l));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ii(r){r.g=Ti(()=>{r.g=null,r.i&&(r.i=!1,Ii(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ra extends Ot{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function be(r){Ot.call(this),this.h=r,this.g={}}N(be,Ot);var Ai=[];function wi(r){yt(r.g,function(a,l){this.g.hasOwnProperty(l)&&ar(a)},r),r.g={}}be.prototype.N=function(){be.aa.N.call(this),wi(this)},be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=c.JSON.stringify,ba=c.JSON.parse,Pa=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function hr(){}hr.prototype.h=null;function Ri(r){return r.h||(r.h=r.i())}function bi(){}var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dr(){ut.call(this,"d")}N(dr,ut);function fr(){ut.call(this,"c")}N(fr,ut);var Ht={},Pi=null;function ln(){return Pi=Pi||new ct}Ht.La="serverreachability";function Si(r){ut.call(this,Ht.La,r)}N(Si,ut);function Se(r){const a=ln();gt(a,new Si(a))}Ht.STAT_EVENT="statevent";function Ci(r,a){ut.call(this,Ht.STAT_EVENT,r),this.stat=a}N(Ci,ut);function _t(r){const a=ln();gt(a,new Ci(a,r))}Ht.Ma="timingevent";function Vi(r,a){ut.call(this,Ht.Ma,r),this.size=a}N(Vi,ut);function Ce(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Ve(){this.g=!0}Ve.prototype.xa=function(){this.g=!1};function Sa(r,a,l,h,E,A){r.info(function(){if(r.g)if(A)for(var S="",$=A.split("&"),rt=0;rt<$.length;rt++){var j=$[rt].split("=");if(1<j.length){var ht=j[0];j=j[1];var dt=ht.split("_");S=2<=dt.length&&dt[1]=="type"?S+(ht+"="+j+"&"):S+(ht+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+l+`
`+S})}function Ca(r,a,l,h,E,A,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+l+`
`+A+" "+S})}function oe(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Da(r,l)+(h?" "+h:"")})}function Va(r,a){r.info(function(){return"TIMEOUT: "+a})}Ve.prototype.info=function(){};function Da(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<E.length;S++)E[S]=""}}}}return cr(l)}catch{return a}}var un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function cn(){}N(cn,hr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},mr=new cn;function Mt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}var xi={},pr={};function gr(r,a,l){r.L=1,r.v=mn(Vt(a)),r.m=l,r.P=!0,ki(r,null)}function ki(r,a){r.F=Date.now(),hn(r),r.A=Vt(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Qi(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Ni,r.g=ds(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Ra(b(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(Ai[0]=E.toString()),E=Ai);for(var A=0;A<E.length;A++){var S=_i(l,E[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Se(),Sa(r.i,r.u,r.A,r.l,r.R,r.m)}Mt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Dt(r)==3?a.j():this.Y(r)},Mt.prototype.Y=function(r){try{if(r==this.g)t:{const dt=Dt(this.g);var a=this.g.Ba();const ue=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||es(this.g)))){this.J||dt!=4||a==7||(a==8||0>=ue?Se(3):Se(2)),_r(this);var l=this.g.Z();this.X=l;e:if(Oi(this)){var h=es(this.g);r="";var E=h.length,A=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),De(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Ca(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,rt=this.g;if(($=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K($)){var j=$;break e}}j=null}if(l=j)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,l);else{this.o=!1,this.s=3,_t(12),Kt(this),De(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<S.length;)if(At=Na(this,S),At==pr){dt==4&&(this.s=4,_t(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(At==xi){this.s=4,_t(15),oe(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,At,null),yr(this,At);if(Oi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,S,"[Invalid Chunked Response]"),Kt(this),De(this);else if(0<S.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),wr(ht),ht.M=!0,_t(11))}}else oe(this.i,this.l,S,null),yr(this,S);dt==4&&Kt(this),this.o&&!this.J&&(dt==4?ls(this.j,this):(this.o=!1,hn(this)))}else Wa(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Kt(this),De(this)}}}catch{}finally{}};function Oi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Na(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?pr:(l=Number(a.substring(l,h)),isNaN(l)?xi:(h+=1,h+l>a.length?pr:(a=a.slice(h,h+l),r.C=h+l,a)))}Mt.prototype.cancel=function(){this.J=!0,Kt(this)};function hn(r){r.S=Date.now()+r.I,Mi(r,r.I)}function Mi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ce(b(r.ba,r),a)}function _r(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Mt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Va(this.i,this.A),this.L!=2&&(Se(),_t(17)),Kt(this),this.s=2,De(this)):Mi(this,this.S-r)};function De(r){r.j.G==0||r.J||ls(r.j,r)}function Kt(r){_r(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,wi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function yr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||vr(l.h,r))){if(!r.K&&vr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)En(l),yn(l);else break t;Ar(l),_t(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ce(b(l.Za,l),6e3));if(1>=Ui(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Wt(l,11)}else if((r.K||l.g==r)&&En(l),!K(a))for(E=l.Da.g.parse(a),a=0;a<E.length;a++){let j=E[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ht=j[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=j[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const ue=j[5];ue!=null&&typeof ue=="number"&&0<ue&&(h=1.5*ue,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const At=r.g;if(At){const In=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(In){var A=h.h;A.g||In.indexOf("spdy")==-1&&In.indexOf("quic")==-1&&In.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Er(A,A.h),A.h=null))}if(h.D){const Rr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Rr&&(h.ya=Rr,z(h.I,h.D,Rr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=r;if(h.qa=hs(h,h.J?h.ia:null,h.W),S.K){ji(h.h,S);var $=S,rt=h.L;rt&&($.I=rt),$.B&&(_r($),hn($)),h.g=S}else os(h);0<l.i.length&&vn(l)}else j[0]!="stop"&&j[0]!="close"||Wt(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Wt(l,7):Ir(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Se(4)}catch{}}var xa=class{constructor(r,a){this.g=r,this.map=a}};function Li(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ui(r){return r.h?1:r.g?r.g.size:0}function vr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Er(r,a){r.g?r.g.add(a):r.h=a}function ji(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Li.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Bi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function ka(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function Oa(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function $i(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Oa(r),h=ka(r),E=h.length,A=0;A<E;A++)a.call(void 0,h[A],l&&l[A],r)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ma(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),E=null;if(0<=h){var A=r[l].substring(0,h);E=r[l].substring(h+1)}else A=r[l];a(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Qt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Qt){this.h=r.h,dn(this,r.j),this.o=r.o,this.g=r.g,fn(this,r.s),this.l=r.l;var a=r.i,l=new ke;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),zi(this,l),this.m=r.m}else r&&(a=String(r).match(qi))?(this.h=!1,dn(this,a[1]||"",!0),this.o=Ne(a[2]||""),this.g=Ne(a[3]||"",!0),fn(this,a[4]),this.l=Ne(a[5]||"",!0),zi(this,a[6]||"",!0),this.m=Ne(a[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}Qt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(xe(a,Gi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(xe(a,Gi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(xe(l,l.charAt(0)=="/"?Ua:Fa,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",xe(l,Ba)),r.join("")};function Vt(r){return new Qt(r)}function dn(r,a,l){r.j=l?Ne(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function fn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function zi(r,a,l){a instanceof ke?(r.i=a,$a(r.i,r.h)):(l||(a=xe(a,ja)),r.i=new ke(a,r.h))}function z(r,a,l){r.i.set(a,l)}function mn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ne(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function xe(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,La),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function La(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Gi=/[#\/\?@]/g,Fa=/[#\?:]/g,Ua=/[#\?]/g,ja=/[#\?@]/g,Ba=/#/g;function ke(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Lt(r){r.g||(r.g=new Map,r.h=0,r.i&&Ma(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=ke.prototype,n.add=function(r,a){Lt(this),this.i=null,r=ae(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Hi(r,a){Lt(r),a=ae(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Ki(r,a){return Lt(r),a=ae(r,a),r.g.has(a)}n.forEach=function(r,a){Lt(this),this.g.forEach(function(l,h){l.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Lt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const E=r[h];for(let A=0;A<E.length;A++)l.push(a[h])}return l},n.V=function(r){Lt(this);let a=[];if(typeof r=="string")Ki(this,r)&&(a=a.concat(this.g.get(ae(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Lt(this),this.i=null,r=ae(this,r),Ki(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Qi(r,a,l){Hi(r,a),0<l.length&&(r.i=null,r.g.set(ae(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var E=A;S[h]!==""&&(E+="="+encodeURIComponent(String(S[h]))),r.push(E)}}return this.i=r.join("&")};function ae(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function $a(r,a){a&&!r.j&&(Lt(r),r.i=null,r.g.forEach(function(l,h){var E=h.toLowerCase();h!=E&&(Hi(this,h),Qi(this,E,l))},r)),r.j=a}function qa(r,a){const l=new Ve;if(c.Image){const h=new Image;h.onload=C(Ft,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ft,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Ft,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ft,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function za(r,a){const l=new Ve,h=new AbortController,E=setTimeout(()=>{h.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(E),A.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Ft(l,"TestPingServer: error",!1,a)})}function Ft(r,a,l,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(l)}catch{}}function Ga(){this.g=new Pa}function Ha(r,a,l){const h=l||"";try{$i(r,function(E,A){let S=E;g(E)&&(S=cr(E)),a.push(h+A+"="+encodeURIComponent(S))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function pn(r){this.l=r.Ub||null,this.j=r.eb||!1}N(pn,hr),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(r){return function(){return r}}({});function gn(r,a){ct.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(gn,ct),n=gn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Me(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Oe(this):Me(this),this.readyState==3&&Wi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Oe(this))},n.Qa=function(r){this.g&&(this.response=r,Oe(this))},n.ga=function(){this.g&&Oe(this)};function Oe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Me(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Me(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Xi(r){let a="";return yt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Tr(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Xi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):z(r,a,l))}function X(r){ct.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(X,ct);var Ka=/^https?$/i,Qa=["POST","PUT"];n=X.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?Ri(this.o):Ri(mr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Ji(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)l.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),E=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qa,a,void 0))||h||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ts(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Ji(this,A)}};function Ji(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Yi(r),_n(r)}function Yi(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),_n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zi(this):this.bb())},n.bb=function(){Zi(this)};function Zi(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Dt(r)!=4||r.Z()!=2)){if(r.u&&Dt(r)==4)Ti(r.Ea,0,r);else if(gt(r,"readystatechange"),Dt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var E=String(r.D).match(qi)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),h=!Ka.test(E?E.toLowerCase():"")}l=h}if(l)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var A=2<Dt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Yi(r)}}finally{_n(r)}}}}function _n(r,a){if(r.g){ts(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{l.onreadystatechange=h}catch{}}}function ts(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Dt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),ba(a)}};function es(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Wa(r){const a={};r=(r.g&&2<=Dt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(K(r[h]))continue;var l=y(r[h]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[E]||[];a[E]=A,A.push(l)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Le(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function ns(r){this.Aa=0,this.i=[],this.j=new Ve,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Le("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Le("baseRetryDelayMs",5e3,r),this.cb=Le("retryDelaySeedMs",1e4,r),this.Wa=Le("forwardChannelMaxRetries",2,r),this.wa=Le("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(r&&r.concurrentRequestLimit),this.Da=new Ga,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ns.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){_t(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=hs(this,null,this.W),vn(this)};function Ir(r){if(rs(r),r.G==3){var a=r.U++,l=Vt(r.I);if(z(l,"SID",r.K),z(l,"RID",a),z(l,"TYPE","terminate"),Fe(r,l),a=new Mt(r,r.j,a),a.L=2,a.v=mn(Vt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ds(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hn(a)}cs(r)}function yn(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function rs(r){yn(r),r.u&&(c.clearTimeout(r.u),r.u=null),En(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function vn(r){if(!Fi(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ae||gi(),we||(Ae(),we=!0),nr.add(a,r),r.B=0}}function Xa(r,a){return Ui(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ce(b(r.Ga,r,a),us(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Mt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=f(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ss(this,E,a),l=Vt(this.I),z(l,"RID",r),z(l,"CVER",22),this.D&&z(l,"X-HTTP-Session-Id",this.D),Fe(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Xi(A)))+"&"+a:this.m&&Tr(l,this.m,A)),Er(this.h,E),this.Ua&&z(l,"TYPE","init"),this.P?(z(l,"$req",a),z(l,"SID","null"),E.T=!0,gr(E,l,null)):gr(E,l,a),this.G=2}}else this.G==3&&(r?is(this,r):this.i.length==0||Fi(this.h)||is(this))};function is(r,a){var l;a?l=a.l:l=r.U++;const h=Vt(r.I);z(h,"SID",r.K),z(h,"RID",l),z(h,"AID",r.T),Fe(r,h),r.m&&r.o&&Tr(h,r.m,r.o),l=new Mt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=ss(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Er(r.h,l),gr(l,h,a)}function Fe(r,a){r.H&&yt(r.H,function(l,h){z(a,h,l)}),r.l&&$i({},function(l,h){z(a,h,l)})}function ss(r,a,l){l=Math.min(r.i.length,l);var h=r.l?b(r.l.Na,r.l,r):null;t:{var E=r.i;let A=-1;for(;;){const S=["count="+l];A==-1?0<l?(A=E[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let $=!0;for(let rt=0;rt<l;rt++){let j=E[rt].g;const ht=E[rt].map;if(j-=A,0>j)A=Math.max(0,E[rt].g-100),$=!1;else try{Ha(ht,S,"req"+j+"_")}catch{h&&h(ht)}}if($){h=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function os(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ae||gi(),we||(Ae(),we=!0),nr.add(a,r),r.v=0}}function Ar(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ce(b(r.Fa,r),us(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,as(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ce(b(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),yn(this),as(this))};function wr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function as(r){r.g=new Mt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Vt(r.qa);z(a,"RID","rpc"),z(a,"SID",r.K),z(a,"AID",r.T),z(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(a,"TO",r.ja),z(a,"TYPE","xmlhttp"),Fe(r,a),r.m&&r.o&&Tr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=mn(Vt(a)),l.m=null,l.P=!0,ki(l,r)}n.Za=function(){this.C!=null&&(this.C=null,yn(this),Ar(this),_t(19))};function En(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function ls(r,a){var l=null;if(r.g==a){En(r),wr(r),r.g=null;var h=2}else if(vr(r.h,a))l=a.D,ji(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=ln(),gt(h,new Vi(h,l)),vn(r)}else os(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&Xa(r,a)||h==2&&Ar(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),E){case 1:Wt(r,5);break;case 4:Wt(r,10);break;case 3:Wt(r,6);break;default:Wt(r,2)}}}function us(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Wt(r,a){if(r.j.info("Error code "+a),a==2){var l=b(r.fb,r),h=r.Xa;const E=!h;h=new Qt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||dn(h,"https"),mn(h),E?qa(h.toString(),l):za(h.toString(),l)}else _t(2);r.G=0,r.l&&r.l.sa(a),cs(r),rs(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function cs(r){if(r.G=0,r.ka=[],r.l){const a=Bi(r.h);(a.length!=0||r.i.length!=0)&&(x(r.ka,a),x(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function hs(r,a,l){var h=l instanceof Qt?Vt(l):new Qt(l);if(h.g!="")a&&(h.g=a+"."+h.g),fn(h,h.s);else{var E=c.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var A=new Qt(null);h&&dn(A,h),a&&(A.g=a),E&&fn(A,E),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&z(h,l,a),z(h,"VER",r.la),Fe(r,h),h}function ds(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new X(new pn({eb:l})):new X(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fs(){}n=fs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tn(){}Tn.prototype.g=function(r,a){return new Tt(r,a)};function Tt(r,a){ct.call(this),this.g=new ns(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!K(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new le(this)}N(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Ir(this.g)},Tt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=cr(r),r=l);a.i.push(new xa(a.Ya++,r)),a.G==3&&vn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Ir(this.g),delete this.g,Tt.aa.N.call(this)};function ms(r){dr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}N(ms,dr);function ps(){fr.call(this),this.status=1}N(ps,fr);function le(r){this.g=r}N(le,fs),le.prototype.ua=function(){gt(this.g,"a")},le.prototype.ta=function(r){gt(this.g,new ms(r))},le.prototype.sa=function(r){gt(this.g,new ps)},le.prototype.ra=function(){gt(this.g,"b")},Tn.prototype.createWebChannel=Tn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,To=function(){return new Tn},Eo=function(){return ln()},vo=Ht,jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},un.NO_ERROR=0,un.TIMEOUT=8,un.HTTP_ERROR=6,Cn=un,Di.COMPLETE="complete",yo=Di,bi.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",ct.prototype.listen=ct.prototype.K,je=bi,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,_o=X}).apply(typeof wn<"u"?wn:typeof self<"u"?self:typeof window<"u"?window:{});const Cs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new uo("@firebase/firestore");function ce(){return te.logLevel}function D(n,...t){if(te.logLevel<=U.DEBUG){const e=t.map(Jr);te.debug(`Firestore (${Ee}): ${n}`,...e)}}function ee(n,...t){if(te.logLevel<=U.ERROR){const e=t.map(Jr);te.error(`Firestore (${Ee}): ${n}`,...e)}}function Mn(n,...t){if(te.logLevel<=U.WARN){const e=t.map(Jr);te.warn(`Firestore (${Ee}): ${n}`,...e)}}function Jr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw ee(t),new Error(t)}function Y(n,t){n||L()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ou{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Mu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lu{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let i=this.i;const s=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Y(typeof i.accessToken=="string"),new Io(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new mt(t)}}class Fu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Uu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Fu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ju{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new ju(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=$u(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function B(n,t){return n<t?-1:n>t?1:0}function me(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new nt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(t){return new H(t)}static min(){return new H(new nt(0,0))}static max(){return new H(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e,i){e===void 0?e=0:e>t.length&&L(),i===void 0?i=t.length-e:i>t.length-e&&L(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Qe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qe?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends Qe{construct(t,e,i){return new J(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Qe{construct(t,e,i){return new ot(t,e,i)}static isValidIdentifier(t){return qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}function zu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new nt(e+1,0):new nt(e,i));return new $t(s,M.empty(),t)}function Gu(n){return new $t(n.readTime,n.key,-1)}class $t{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new $t(H.min(),M.empty(),-1)}static max(){return new $t(H.max(),M.empty(),-1)}}function Hu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ku)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},d=>i(d))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const g=d;e(t[g]).next(I=>{u[g]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Wu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ze(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Zr.oe=-1;function ti(n){return n==null}function Ln(n){return n===0&&1/n==-1/0}function Xu(n){return typeof n=="number"&&Number.isInteger(n)&&!Ln(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Vs(t)),t=Yu(n.get(e),t);return Vs(t)}function Yu(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Vs(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Te(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function wo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rn(this.root,t,this.comparator,!0)}}class Rn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new it(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,i,s,o){return this}insert(t,e,i){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ns(this.data.getIterator())}getIteratorFrom(t){return new Ns(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Ns{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new bt([])}unionWith(t){let e=new at(ot.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Zu("Invalid base64 string: "+o):o}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const tc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(Y(!!n),typeof n=="string"){let t=0;const e=tc.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ni(n){const t=n.mapValue.fields.__previous_value__;return ei(t)?ni(t):t}function Fn(n){const t=ne(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,i,s,o,u,c,d,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=g}}class Un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={mapValue:{}};function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ei(n)?4:rc(n)?9007199254740991:nc(n)?10:11:L()}function St(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ne(s.timestampValue),c=ne(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=st(s.doubleValue),c=st(o.doubleValue);return u===c?Ln(u)===Ln(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return me(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ds(u)!==Ds(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!St(u[d],c[d])))return!1;return!0}(n,t);default:return L()}}function We(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function ge(n,t){if(n===t)return 0;const e=re(n),i=re(t);if(e!==i)return B(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=st(o.integerValue||o.doubleValue),d=st(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return xs(n.timestampValue,t.timestampValue);case 4:return xs(Fn(n),Fn(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,u){const c=pe(o),d=pe(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let g=0;g<c.length&&g<d.length;g++){const I=B(c[g],d[g]);if(I!==0)return I}return B(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=B(st(o.latitude),st(u.latitude));return c!==0?c:B(st(o.longitude),st(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ks(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,d,g,I;const w=o.fields||{},b=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,N=(d=b.value)===null||d===void 0?void 0:d.arrayValue,O=B(((g=C?.values)===null||g===void 0?void 0:g.length)||0,((I=N?.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:ks(C,N)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===bn.mapValue&&u===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(u===bn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),g=u.fields||{},I=Object.keys(g);d.sort(),I.sort();for(let w=0;w<d.length&&w<I.length;++w){const b=B(d[w],I[w]);if(b!==0)return b;const C=ge(c[d[w]],g[I[w]]);if(C!==0)return C}return B(d.length,I.length)}(n.mapValue,t.mapValue);default:throw L()}}function xs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ne(n),i=ne(t),s=B(e.seconds,i.seconds);return s!==0?s:B(e.nanos,i.nanos)}function ks(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=ge(e[s],i[s]);if(o)return o}return B(e.length,i.length)}function _e(n){return Br(n)}function Br(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ne(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Br(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${Br(e.fields[u])}`;return s+"}"}(n.mapValue):L()}function Vn(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ni(n);return t?16+Vn(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+Vn(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return Te(i.fields,(o,u)=>{s+=o.length+Vn(u)}),s}(n.mapValue);default:throw L()}}function $r(n){return!!n&&"integerValue"in n}function ri(n){return!!n&&"arrayValue"in n}function Dn(n){return!!n&&"mapValue"in n}function nc(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Be(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Te(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Be(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Be(n.arrayValue.values[e]);return t}return Object.assign({},n)}function rc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Dn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Be(e)}setAll(t){let e=ot.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Be(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Dn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Dn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Te(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new Rt(Be(this.value))}}function Ro(n){const t=[];return Te(n.fields,(e,i)=>{const s=new ot([e]);if(Dn(i)){const o=Ro(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,H.min(),H.min(),H.min(),Rt.empty(),0)}static newFoundDocument(t,e,i,s){return new wt(t,1,e,H.min(),i,s,0)}static newNoDocument(t,e){return new wt(t,2,e,H.min(),H.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,H.min(),H.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function Os(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),e.key):i=ge(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ms(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ic(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{}class et extends bo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new oc(t,e,i):e==="array-contains"?new uc(t,i):e==="in"?new cc(t,i):e==="not-in"?new hc(t,i):e==="array-contains-any"?new dc(t,i):new et(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new ac(t,i):new lc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends bo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qt(t,e)}matches(t){return Po(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Po(n){return n.op==="and"}function So(n){return sc(n)&&Po(n)}function sc(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function qr(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+_e(n.value);if(So(n))return n.filters.map(t=>qr(t)).join(",");{const t=n.filters.map(e=>qr(e)).join(",");return`${n.op}(${t})`}}function Co(n,t){return n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.field.isEqual(s.field)&&St(i.value,s.value)}(n,t):n instanceof qt?function(i,s){return s instanceof qt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&Co(u,s.filters[c]),!0):!1}(n,t):void L()}function Vo(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${_e(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Vo).join(" ,")+"}"}(n):"Filter"}class oc extends et{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ac extends et{constructor(t,e){super(t,"in",e),this.keys=Do("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class lc extends et{constructor(t,e){super(t,"not-in",e),this.keys=Do("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Do(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class uc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ri(e)&&We(e.arrayValue,this.value)}}class cc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class hc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!We(this.value.arrayValue,e)}}class dc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ri(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Ls(n,t=null,e=[],i=[],s=null,o=null,u=null){return new fc(n,t,e,i,s,o,u)}function ii(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>qr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>_e(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>_e(i)).join(",")),t.ue=e}return t.ue}function si(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ic(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Co(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ms(n.startAt,t.startAt)&&Ms(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mc(n,t,e,i,s,o,u,c){return new Qn(n,t,e,i,s,o,u,c)}function pc(n){return new Qn(n)}function Fs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gc(n){return n.collectionGroup!==null}function $e(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new at(ot.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Bn(o,i))}),e.has(ot.keyField().canonicalString())||t.ce.push(new Bn(ot.keyField(),i))}return t.ce}function Zt(n){const t=q(n);return t.le||(t.le=_c(t,$e(n))),t.le}function _c(n,t){if(n.limitType==="F")return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bn(s.field,o)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function zr(n,t,e){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function No(n,t){return si(Zt(n),Zt(t))&&n.limitType===t.limitType}function xo(n){return`${ii(Zt(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Vo(s)).join(", ")}]`),ti(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>_e(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>_e(s)).join(",")),`Target(${i})`}(Zt(n))}; limitType=${n.limitType})`}function oi(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):M.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of $e(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,d){const g=Os(u,c,d);return u.inclusive?g<=0:g<0}(i.startAt,$e(i),s)||i.endAt&&!function(u,c,d){const g=Os(u,c,d);return u.inclusive?g>=0:g>0}(i.endAt,$e(i),s))}(n,t)}function yc(n){return(t,e)=>{let i=!1;for(const s of $e(n)){const o=vc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function vc(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),g=c.data.field(o);return d!==null&&g!==null?ge(d,g):L()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return wo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Et(M.comparator);function $n(){return Ec}const ko=new Et(M.comparator);function Pn(...n){let t=ko;for(const e of n)t=t.insert(e.key,e);return t}function Oo(n){let t=ko;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Jt(){return qe()}function Mo(){return qe()}function qe(){return new ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const Tc=new Et(M.comparator),Ic=new at(M.comparator);function pt(...n){let t=Ic;for(const e of n)t=t.add(e);return t}const Ac=new at(B);function wc(){return Ac}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function Lo(n){return{integerValue:""+n}}function Rc(n,t){return Xu(t)?Lo(t):ai(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this._=void 0}}function bc(n,t,e){return n instanceof qn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ei(o)&&(o=ni(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Xe?Uo(n,t):n instanceof Je?jo(n,t):function(s,o){const u=Fo(s,o),c=Us(u)+Us(s.Pe);return $r(u)&&$r(s.Pe)?Lo(c):ai(s.serializer,c)}(n,t)}function Pc(n,t,e){return n instanceof Xe?Uo(n,t):n instanceof Je?jo(n,t):e}function Fo(n,t){return n instanceof zn?function(i){return $r(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class qn extends Wn{}class Xe extends Wn{constructor(t){super(),this.elements=t}}function Uo(n,t){const e=Bo(t);for(const i of n.elements)e.some(s=>St(s,i))||e.push(i);return{arrayValue:{values:e}}}class Je extends Wn{constructor(t){super(),this.elements=t}}function jo(n,t){let e=Bo(t);for(const i of n.elements)e=e.filter(s=>!St(s,i));return{arrayValue:{values:e}}}class zn extends Wn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Us(n){return st(n.integerValue||n.doubleValue)}function Bo(n){return ri(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Sc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Xe&&s instanceof Xe||i instanceof Je&&s instanceof Je?me(i.elements,s.elements,St):i instanceof zn&&s instanceof zn?St(i.Pe,s.Pe):i instanceof qn&&s instanceof qn}(n.transform,t.transform)}class Cc{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Xn{}function $o(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zo(n.key,Nt.none()):new tn(n.key,n.data,Nt.none());{const e=n.data,i=Rt.empty();let s=new at(ot.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new se(n.key,i,new bt(s.toArray()),Nt.none())}}function Vc(n,t,e){n instanceof tn?function(s,o,u){const c=s.value.clone(),d=Bs(s.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof se?function(s,o,u){if(!Nn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Bs(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(qo(s)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ze(n,t,e,i){return n instanceof tn?function(o,u,c,d){if(!Nn(o.precondition,u))return c;const g=o.value.clone(),I=$s(o.fieldTransforms,d,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof se?function(o,u,c,d){if(!Nn(o.precondition,u))return c;const g=$s(o.fieldTransforms,d,u),I=u.data;return I.setAll(qo(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Nn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Dc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Fo(i.transform,s||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(i.field,o))}return e||null}function js(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&me(i,s,(o,u)=>Sc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class tn extends Xn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends Xn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function qo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Bs(n,t,e){const i=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,Pc(u,c,e[s]))}return i}function $s(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,bc(o,u,t))}return i}class zo extends Xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nc extends Xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Vc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Mo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const d=$o(u,c);d!==null&&i.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(e,i)=>js(e,i))&&me(this.baseMutations,t.baseMutations,(e,i)=>js(e,i))}}class li{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Y(t.mutations.length===i.length);let s=function(){return Tc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new li(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,F;function Oc(n){switch(n){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Mc(n){if(n===void 0)return ee("GRPC error has no .code"),P.UNKNOWN;switch(n){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new go([4294967295,4294967295],0);class Lc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Uc(n,t){return Gr(n,t.toTimestamp())}function fe(n){return Y(!!n),H.fromTimestamp(function(e){const i=ne(e);return new nt(i.seconds,i.nanos)}(n))}function Go(n,t){return Hr(n,t).canonicalString()}function Hr(n,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function jc(n){const t=J.fromString(n);return Y(Qc(t)),t}function Kr(n,t){return Go(n.databaseId,t.path)}function Bc(n){const t=jc(n);return t.length===4?J.emptyPath():qc(t)}function $c(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qc(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qs(n,t,e){return{name:Kr(n,t),fields:e.value.mapValue.fields}}function zc(n,t){let e;if(t instanceof tn)e={update:qs(n,t.key,t.value)};else if(t instanceof zo)e={delete:Kr(n,t.key)};else if(t instanceof se)e={update:qs(n,t.key,t.data),updateMask:Kc(t.fieldMask)};else{if(!(t instanceof Nc))return L();e={verify:Kr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof qn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Je)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw L()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Uc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function Gc(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?fe(s.updateTime):fe(o);return u.isEqual(H.min())&&(u=fe(o)),new Cc(u,s.transformResults||[])}(e,t))):[]}function Hc(n){let t=Bc(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Y(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const b=Ho(w);return b instanceof qt&&So(b)?b.getFilters():[b]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(b=>function(N){return new Bn(he(N.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(w){let b;return b=typeof w=="object"?w.value:w,ti(b)?null:b}(e.limit));let d=null;e.startAt&&(d=function(w){const b=!!w.before,C=w.values||[];return new jn(C,b)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const b=!w.before,C=w.values||[];return new jn(C,b)}(e.endAt)),mc(t,s,u,o,c,"F",d,g)}function Ho(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=he(e.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=he(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=he(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=he(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return et.create(he(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(i=>Ho(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function he(n){return ot.fromServerFormat(n.fieldPath)}function Kc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.ht=t}}function Xc(n){const t=Hc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.ln=new Yc}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve($t.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Yc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new at(J.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new at(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new ye(0)}static Qn(){return new ye(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs([n,t],[e,i]){const s=B(n,e);return s===0?B(t,i):s}class Zc{constructor(t){this.Gn=t,this.buffer=new at(Gs),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Gs(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class th{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){D("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ze(e)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Yr(e)}await this.Yn(3e5)})}}class eh{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Zr.oe);const i=new Zc(e);return this.Zn.forEachTarget(t,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.Zn.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(zs)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zs):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let i,s,o,u,c,d,g;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(i=w,c=Date.now(),this.removeTargets(t,i,e))).next(w=>(o=w,d=Date.now(),this.removeOrphanedDocuments(t,i))).next(w=>(g=Date.now(),ce()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${w} documents in `+(g-d)+`ms
Total Duration: ${g-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function nh(n,t){return new eh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.changes=new ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&ze(i.mutation,s,bt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,pt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=pt()){const s=Jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Pn();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Jt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,pt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=$n();const u=qe(),c=function(){return qe()}();return e.forEach((d,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof se)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),ze(I.mutation,g,I.mutation.getFieldMask(),nt.now())):u.set(g.key,bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return c.set(g,new ih(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=qe();let s=new Et((u,c)=>u-c),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const g=e.get(d);if(g===null)return;let I=i.get(d)||bt.empty();I=c.applyToLocalView(g,I),i.set(d,I);const w=(s.get(c.batchId)||pt()).add(d);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),g=d.key,I=d.value,w=Mo();I.forEach(b=>{if(!o.has(b)){const C=$o(e.get(b),i.get(b));C!==null&&w.set(b,C),o=o.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Jt());let c=-1,d=o;return u.next(g=>R.forEach(g,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(b=>{d=d.insert(I,b)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,d,g,pt())).next(I=>({batchId:c,changes:Oo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Pn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,d=>{const g=function(w,b){return new Qn(b,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((w,b)=>{u=u.insert(w,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((d,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,wt.newInvalidDocument(I)))});let c=Pn();return u.forEach((d,g)=>{const I=o.get(d);I!==void 0&&ze(I.mutation,g,bt.empty(),nt.now()),oi(e,g)&&(c=c.insert(d,g))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:fe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:Xc(s.bundledQuery),readTime:fe(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.overlays=new Et(M.comparator),this.Er=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Jt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Er.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Jt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,g=d.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&d.largestBatchId>i&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new Et((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=o.get(g.largestBatchId);I===null&&(I=Jt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Jt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=s)););return R.resolve(c)}Tt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Er.get(s.largestBatchId).delete(i.key);this.Er.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new kc(e,i));let o=this.Er.get(e);o===void 0&&(o=pt(),this.Er.set(e,o)),this.Er.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.dr=new at(tt.Ar),this.Rr=new at(tt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const i=new tt(t,e);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.gr(new tt(t,e))}pr(t,e){t.forEach(i=>this.removeReference(i,e))}yr(t){const e=new M(new J([])),i=new tt(e,t),s=new tt(e,t+1),o=[];return this.Rr.forEachInRange([i,s],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new J([])),i=new tt(e,t),s=new tt(e,t+1);let o=pt();return this.Rr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new tt(t,0),i=this.dr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class tt{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||B(t.br,e.br)}static Vr(t,e){return B(t.br,e.br)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new at(tt.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new xc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.vr=this.vr.add(new tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Fr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([i,s],u=>{const c=this.Cr(u.br);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new at(B);return e.forEach(s=>{const o=new tt(s,0),u=new tt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{i=i.add(c.br)})}),R.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;M.isDocumentKey(o)||(o=o.child(""));const u=new tt(new M(o),0);let c=new at(B);return this.vr.forEachWhile(d=>{const g=d.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(d.br)),!0)},u),R.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(i=>{const s=this.Cr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=i})}Ln(t){}containsKey(t,e){const i=new tt(e,0),s=this.vr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.Nr=t,this.docs=function(){return new Et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Nr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let i=$n();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=$n();const u=e.path,c=new M(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:g,value:{document:I}}=d.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Hu(Gu(I),i)<=0||(s.has(I.key)||oi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){L()}Lr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new hh(this)}getSize(t){return R.resolve(this.size)}}class hh extends rh{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.persistence=t,this.Br=new ie(e=>ii(e),si),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.kr=0,this.qr=new ui,this.targetCount=0,this.Qr=ye.qn()}forEachTarget(t,e){return this.Br.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new ye(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Br.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.qr.mr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.qr.pr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.qr.Sr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Zr(0),this.Ur=!1,this.Ur=!0,this.Wr=new lh,this.referenceDelegate=t(this),this.Gr=new dh(this),this.indexManager=new Jc,this.remoteDocumentCache=function(s){return new ch(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Wc(e),this.jr=new oh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Kr[t.toKey()];return i||(i=new uh(e,this.referenceDelegate),this.Kr[t.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new fh(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(i=>()=>i.containsKey(t,e)))}}class fh extends Qu{constructor(t){super(),this.currentSequenceNumber=t}}class ci{constructor(t){this.persistence=t,this.Zr=new ui,this.Xr=null}static ei(t){return new ci(t)}get ti(){if(this.Xr)return this.Xr;throw L()}addReference(t,e,i){return this.Zr.addReference(i,e),this.ti.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Zr.removeReference(i,e),this.ti.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,i=>{const s=M.fromPath(i);return this.ni(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(i=>{i?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class Gn{constructor(t,e){this.persistence=t,this.ri=new ie(i=>Ju(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=nh(this,e)}static ei(t,e){return new Gn(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}nr(t){let e=0;return this.er(t,i=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(i,s)=>this.ir(t,i,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(i++,o.removeEntry(u,H.min()))})).next(()=>o.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.ri.set(i,t.currentSequenceNumber),R.resolve()}removeReference(t,e,i){return this.ri.set(i,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Vn(t.data.value)),e}ir(t,e,i){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return R.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Wi=i,this.Gi=s}static zi(t,e){let i=pt(),s=pt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new hi(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return vl()?8:Wu(_l())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new mh;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,i,s){return i.documentReadCount<this.Ji?(ce()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(ce()<=U.DEBUG&&D("QueryEngine","Query:",Ue(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(ce()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Zt(e))):R.resolve())}Xi(t,e){if(Fs(e))return R.resolve(null);let i=Zt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=zr(e,null,"F"),i=Zt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=pt(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(d=>{const g=this.rs(e,c);return this.ss(e,g,u,d.readTime)?this.Xi(t,zr(e,null,"F")):this.os(t,g,e,d)}))})))}es(t,e,i,s){return Fs(e)||s.isEqual(H.min())?R.resolve(null):this.Zi.getDocuments(t,i).next(o=>{const u=this.rs(e,o);return this.ss(e,u,i,s)?R.resolve(null):(ce()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.os(t,u,e,zu(s,-1)).next(c=>c))})}rs(t,e){let i=new at(yc(t));return e.forEach((s,o)=>{oi(t,o)&&(i=i.add(o))}),i}ss(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(t,e,i){return ce()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.Zi.getDocumentsMatchingQuery(t,e,$t.min(),i)}os(t,e,i,s){return this.Zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e,i,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new Et(B),this.cs=new ie(o=>ii(o),si),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(i)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sh(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function _h(n,t,e,i){return new gh(n,t,e,i)}async function Qo(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let d=pt();for(const g of s){u.push(g.batchId);for(const I of g.mutations)d=d.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(i,d).next(g=>({Ts:g,removedBatchIds:u,addedBatchIds:c}))})})}function yh(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,d,g,I){const w=g.batch,b=w.keys();let C=R.resolve();return b.forEach(N=>{C=C.next(()=>I.getEntry(d,N)).next(O=>{const x=g.docVersions.get(N);Y(x!==null),O.version.compareTo(x)<0&&(w.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(d,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let d=pt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(d=d.add(c.batch.mutations[g].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function vh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Eh(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Hs{constructor(){this.activeTargetIds=wc()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Th{constructor(){this._o=new Hs,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,i){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Hs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn=null;function Dr(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Rh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,i,s,o,u){const c=Dr(),d=this.No(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(g,o,u),this.Bo(e,d,g,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Mn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",d,"request:",s),I})}ko(e,i,s,o,u,c){return this.Oo(e,i,s,o,u)}Lo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}No(e,i){const s=Ah[e];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,i,s){const o=Dr();return new Promise((u,c)=>{const d=new _o;d.setWithCredentials(!0),d.listenOnce(yo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Cn.NO_ERROR:const I=d.getResponseJson();D(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Cn.TIMEOUT:D(ft,`RPC '${t}' ${o} timed out`),c(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Cn.HTTP_ERROR:const w=d.getStatus();if(D(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b?.error;if(C&&C.status&&C.message){const N=function(x){const Q=x.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(Q)>=0?Q:P.UNKNOWN}(C.status);c(new k(N,C.message))}else c(new k(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new k(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(ft,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);D(ft,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",g,i,15)})}qo(t,e,i){const s=Dr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=To(),c=Eo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(d.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Lo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const I=o.join("");D(ft,`Creating RPC '${t}' stream ${s}: ${I}`,d);const w=u.createWebChannel(I,d);let b=!1,C=!1;const N=new wh({Eo:x=>{C?D(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(b||(D(ft,`Opening RPC '${t}' stream ${s} transport.`),w.open(),b=!0),D(ft,`RPC '${t}' stream ${s} sending:`,x),w.send(x))},Ao:()=>w.close()}),O=(x,Q,K)=>{x.listen(Q,W=>{try{K(W)}catch(lt){setTimeout(()=>{throw lt},0)}})};return O(w,je.EventType.OPEN,()=>{C||(D(ft,`RPC '${t}' stream ${s} transport opened.`),N.So())}),O(w,je.EventType.CLOSE,()=>{C||(C=!0,D(ft,`RPC '${t}' stream ${s} transport closed`),N.Do())}),O(w,je.EventType.ERROR,x=>{C||(C=!0,Mn(ft,`RPC '${t}' stream ${s} transport errored:`,x),N.Do(new k(P.UNAVAILABLE,"The operation could not be completed")))}),O(w,je.EventType.MESSAGE,x=>{var Q;if(!C){const K=x.data[0];Y(!!K);const W=K,lt=W?.error||((Q=W[0])===null||Q===void 0?void 0:Q.error);if(lt){D(ft,`RPC '${t}' stream ${s} received error:`,lt);const Gt=lt.status;let yt=function(p){const _=Z[p];if(_!==void 0)return Mc(_)}(Gt),v=lt.message;yt===void 0&&(yt=P.INTERNAL,v="Unknown error status: "+Gt+" with message "+lt.message),C=!0,N.Do(new k(yt,v)),w.close()}else D(ft,`RPC '${t}' stream ${s} received:`,K),N.vo(K)}}),O(c,vo.STAT_EVENT,x=>{x.stat===jr.PROXY?D(ft,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===jr.NOPROXY&&D(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function Nr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){return new Lc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=i,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,i,s,o,u,c,d){this.li=t,this.Yo=i,this.Zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Wo(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===e&&this.I_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(s)})})}I_(t,e){const i=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.E_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ph extends bh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Gc(t.writeResults,t.commitTime),i=fe(t.commitTime);return this.listener.y_(i,e)}w_(){const t={};t.database=$c(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>zc(this.serializer,i))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,Hr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}ko(t,e,i,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,Hr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Ch{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ee(e),this.C_=!1):D("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{i.enqueueAndForget(async()=>{nn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const g=q(d);g.k_.add(4),await en(g),g.K_.set("Unknown"),g.k_.delete(4),await Yn(g)}(this))})}),this.K_=new Ch(i,s)}}async function Yn(n){if(nn(n))for(const t of n.q_)await t(!0)}async function en(n){for(const t of n.q_)await t(!1)}function nn(n){return q(n).k_.size===0}async function Xo(n,t,e){if(!Ze(t))throw t;n.k_.add(1),await en(n),n.K_.set("Offline"),e||(e=()=>vh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Yn(n)})}function Jo(n,t){return t().catch(e=>Xo(n,e,t))}async function Zn(n){const t=q(n),e=zt(t);let i=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Dh(t);)try{const s=await Eh(t.localStore,i);if(s===null){t.L_.length===0&&e.a_();break}i=s.batchId,Nh(t,s)}catch(s){await Xo(t,s)}Yo(t)&&Zo(t)}function Dh(n){return nn(n)&&n.L_.length<10}function Nh(n,t){n.L_.push(t);const e=zt(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Yo(n){return nn(n)&&!zt(n).i_()&&n.L_.length>0}function Zo(n){zt(n).start()}async function xh(n){zt(n).w_()}async function kh(n){const t=zt(n);for(const e of n.L_)t.g_(e.mutations)}async function Oh(n,t,e){const i=n.L_.shift(),s=li.from(i,t,e);await Jo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zn(n)}async function Mh(n,t){t&&zt(n).f_&&await async function(i,s){if(function(u){return Oc(u)&&u!==P.ABORTED}(s.code)){const o=i.L_.shift();zt(i).__(),await Jo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Zn(i)}}(n,t),Yo(n)&&Zo(n)}async function Qs(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=nn(e);e.k_.add(3),await en(e),i&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Yn(e)}async function Lh(n,t){const e=q(n);t?(e.k_.delete(2),await Yn(e)):t||(e.k_.add(2),await en(e),e.K_.set("Unknown"))}function zt(n){return n.G_||(n.G_=function(e,i,s){const o=q(e);return o.b_(),new Ph(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:xh.bind(null,n),po:Mh.bind(null,n),p_:kh.bind(null,n),y_:Oh.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await Zn(n)):(await n.G_.stop(),n.L_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new di(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,t){if(ee("AsyncQueue",`${t}: ${n}`),Ze(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Fh{constructor(){this.queries=Ws(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,i){const s=q(e),o=s.queries;s.queries=Ws(),o.forEach((u,c)=>{for(const d of c.J_)d.onError(i)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function Ws(){return new ie(n=>xo(n),No)}function Uh(n){n.X_.forEach(t=>{t.next()})}var Xs,Js;(Js=Xs||(Xs={})).na="default",Js.Cache="cache";class jh{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ie(c=>xo(c),No),this.Oa=new Map,this.Na=new Set,this.La=new Et(M.comparator),this.Ba=new Map,this.ka=new ui,this.qa={},this.Qa=new Map,this.Ka=ye.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Bh(n,t,e){const i=Gh(n);try{const s=await function(u,c){const d=q(u),g=nt.now(),I=c.reduce((C,N)=>C.add(N.key),pt());let w,b;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=$n(),O=pt();return d.hs.getEntries(C,I).next(x=>{N=x,N.forEach((Q,K)=>{K.isValidDocument()||(O=O.add(Q))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,N)).next(x=>{w=x;const Q=[];for(const K of c){const W=Dc(K,w.get(K.key).overlayedDocument);W!=null&&Q.push(new se(K.key,W,Ro(W.value.mapValue),Nt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,g,Q,c)}).next(x=>{b=x;const Q=x.applyToLocalDocumentSet(w,O);return d.documentOverlayCache.saveOverlays(C,x.batchId,Q)})}).then(()=>({batchId:b.batchId,changes:Oo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,d){let g=u.qa[u.currentUser.toKey()];g||(g=new Et(B)),g=g.insert(c,d),u.qa[u.currentUser.toKey()]=g}(i,s.batchId,e),await tr(i,s.changes),await Zn(i.remoteStore)}catch(s){const o=ta(s,"Failed to persist write");e.reject(o)}}function Ys(n,t,e){const i=q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const d=q(u);d.onlineState=c;let g=!1;d.queries.forEach((I,w)=>{for(const b of w.J_)b.ea(c)&&(g=!0)}),g&&Uh(d)}(i.eventManager,t),s.length&&i.Ma.R_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function $h(n,t){const e=q(n),i=t.batch.batchId;try{const s=await yh(e.localStore,t);na(e,i,null),ea(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await tr(e,s)}catch(s){await Yr(s)}}async function qh(n,t,e){const i=q(n);try{const s=await function(u,c){const d=q(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return d.mutationQueue.lookupMutationBatch(g,c).next(w=>(Y(w!==null),I=w.keys(),d.mutationQueue.removeMutationBatch(g,w))).next(()=>d.mutationQueue.performConsistencyCheck(g)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>d.localDocuments.getDocuments(g,I))})}(i.localStore,t);na(i,t,e),ea(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await tr(i,s)}catch(s){await Yr(s)}}function ea(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function na(n,t,e){const i=q(n);let s=i.qa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.qa[i.currentUser.toKey()]=s}}async function tr(n,t,e){const i=q(n),s=[],o=[],u=[];i.xa.isEmpty()||(i.xa.forEach((c,d)=>{u.push(i.Ua(d,t,e).then(g=>{var I;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(g){s.push(g);const w=hi.zi(d.targetId,g);o.push(w)}}))}),await Promise.all(u),i.Ma.R_(s),await async function(d,g){const I=q(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,b=>R.forEach(b.Wi,C=>I.persistence.referenceDelegate.addReference(w,b.targetId,C)).next(()=>R.forEach(b.Gi,C=>I.persistence.referenceDelegate.removeReference(w,b.targetId,C)))))}catch(w){if(!Ze(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const b=w.targetId;if(!w.fromCache){const C=I.us.get(b),N=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(N);I.us=I.us.insert(b,O)}}}(i.localStore,o))}async function zh(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Qo(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(d=>{d.reject(new k(P.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await tr(e,i.Ts)}}function Gh(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$h.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qh.bind(null,t),t}class Hn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Jn(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return _h(this.persistence,new ph,t.initialUser,this.serializer)}ja(t){return new Ko(ci.ei,this.serializer)}za(t){return new Th}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hn.provider={build:()=>new Hn};class Hh extends Hn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){Y(this.persistence.referenceDelegate instanceof Gn);const i=this.persistence.referenceDelegate.garbageCollector;return new th(i,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Ko(i=>Gn.ei(i,e),this.serializer)}}class Qr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ys(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=zh.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Fh}()}createDatastore(t){const e=Jn(t.databaseInfo.databaseId),i=function(o){return new Rh(o)}(t.databaseInfo);return function(o,u,c,d){return new Sh(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new Vh(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ys(this.syncEngine,e,0),function(){return Ks.p()?new Ks:new Ih}())}createSyncEngine(t,e){return function(s,o,u,c,d,g,I){const w=new jh(s,o,u,c,d,g);return I&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);D("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await en(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Qr.provider={build:()=>new Qr};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Ao.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=ta(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function xr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Qo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Zs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Qh(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Qs(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Qs(t.remoteStore,s)),n._onlineComponents=t}async function Qh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Mn("Error using user provided cache. Falling back to memory cache: "+e),await xr(n,new Hn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await xr(n,new Hh(void 0));return n._offlineComponents}async function Wh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Zs(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Zs(n,new Qr))),n._onlineComponents}function Xh(n){return Wh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jh(n,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function eo(n){if(!M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function no(n){if(M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function sa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ra((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class er{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ro({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ro(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Ou;switch(i.type){case"firstParty":return new Uu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=to.get(e);i&&(D("ComponentProvider","Removing Datastore"),to.delete(e),i.terminate())}(this),Promise.resolve()}}function Yh(n,t,e,i={}){var s;const o=(n=sa(n,er))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,d;if(typeof i.mockUserToken=="string")c=i.mockUserToken,d=mt.MOCK_USER;else{c=gl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new mt(g)}n._authCredentials=new Mu(new Io(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new mi(this.firestore,t,this._query)}}class xt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class Bt extends mi{constructor(t,e,i){super(t,e,pc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new M(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function Zh(n,t,...e){if(n=Ge(n),ia("collection","path",t),n instanceof er){const i=J.fromString(t,...e);return no(i),new Bt(n,null,i)}{if(!(n instanceof xt||n instanceof Bt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(J.fromString(t,...e));return no(i),new Bt(n.firestore,null,i)}}function td(n,t,...e){if(n=Ge(n),arguments.length===1&&(t=Ao.newId()),ia("doc","path",t),n instanceof er){const i=J.fromString(t,...e);return eo(i),new xt(n,null,new M(i))}{if(!(n instanceof xt||n instanceof Bt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(J.fromString(t,...e));return eo(i),new xt(n.firestore,n instanceof Bt?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Wo(this,"async_queue_retry"),this.fu=()=>{const i=Nr();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=t;const e=Nr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Nr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new Yt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Ze(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(i=>{this.Au=i,this.Ru=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw ee("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=e,e}enqueueAfterDelay(t,e,i){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=di.createAndSchedule(this,t,e,i,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&L()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class oa extends er{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new io,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new io(t),this._firestoreClient=void 0,await t}}}function ed(n,t){const e=typeof n=="object"?n:Ru(),i=typeof n=="string"?n:"(default)",s=Tu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=ml("firestore");o&&Yh(s,...o)}return s}function nd(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rd(n),n._firestoreClient}function rd(n){var t,e,i;const s=n._freezeSettings(),o=function(c,d,g,I){return new ec(c,d,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ra(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Kh(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const d=c?._online.build();return{_offline:c?._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(Pt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=/^__.*__$/;class sd{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}}function ha(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class pi{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:i,Nu:!1});return s.Lu(t),s}Bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Kn(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(ha(this.Mu)&&id.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class od{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Jn(t)}$u(t,e,i,s=!1){return new pi({Mu:t,methodName:e,Ku:i,path:ot.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ad(n){const t=n._freezeSettings(),e=Jn(n._databaseId);return new od(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ld(n,t,e,i,s,o={}){const u=n.$u(o.merge||o.mergeFields?2:0,t,e,s);pa("Data must be an object, but it was:",u,i);const c=fa(i,u);let d,g;if(o.merge)d=new bt(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const b=ud(t,w,e);if(!u.contains(b))throw new k(P.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);dd(I,b)||I.push(b)}d=new bt(I),g=u.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,g=u.fieldTransforms;return new sd(new Rt(c),d,g)}function da(n,t){if(ma(n=Ge(n)))return pa("Unsupported field value:",t,n),fa(n,t);if(n instanceof la)return function(i,s){if(!ha(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let d=da(c,s.ku(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Ge(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Rc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=nt.fromDate(i);return{timestampValue:Gr(s.serializer,o)}}if(i instanceof nt){const o=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Gr(s.serializer,o)}}if(i instanceof ua)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ye)return{bytesValue:Fc(s.serializer,i._byteString)};if(i instanceof xt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Go(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ca)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw c.qu("VectorValues must only contain numeric values.");return ai(c.serializer,d)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${fi(i)}`)}(n,t)}function fa(n,t){const e={};return wo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(n,(i,s)=>{const o=da(s,t.Ou(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function ma(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof ua||n instanceof Ye||n instanceof xt||n instanceof la||n instanceof ca)}function pa(n,t,e){if(!ma(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=fi(e);throw i==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+i)}}function ud(n,t,e){if((t=Ge(t))instanceof aa)return t._internalPath;if(typeof t=="string")return hd(n,t);throw Kn("Field path arguments must be of type string or ",n,!1,void 0,e)}const cd=new RegExp("[~\\*/\\[\\]]");function hd(n,t,e){if(t.search(cd)>=0)throw Kn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new aa(...t.split("."))._internalPath}catch{throw Kn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Kn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${i}`),u&&(d+=` in document ${s}`),d+=")"),new k(P.INVALID_ARGUMENT,c+n+d)}function dd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function md(n,t){const e=sa(n.firestore,oa),i=td(n),s=fd(n.converter,t);return pd(e,[ld(ad(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Nt.exists(!1))]).then(()=>i)}function pd(n,t){return function(i,s){const o=new Yt;return i.asyncQueue.enqueueAndForget(async()=>Bh(await Xh(i),s,o)),o.promise}(nd(n),t)}(function(t,e=!0){(function(s){Ee=s})(wu),On(new He("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new oa(new Lu(i.getProvider("auth-internal")),new Bu(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(g.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),de(Cs,"4.7.5",t),de(Cs,"4.7.5","esm2017")})();var gd="firebase",_d="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de(gd,_d,"app");const yd={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},vd=fo(yd),Ed=ed(vd),Td=()=>{const[n,t]=An.useState({name:"",email:"",subject:"",message:""}),[e,i]=An.useState({}),[s,o]=An.useState(!1),[u,c]=An.useState(null),d=[{icon:_s,title:"Email",content:"Henryagukwe01@gmail.com"},{icon:tl,title:"Phone",content:"+234 903 440 0634"},{icon:el,title:"Location",content:"Lagos, Nigeria"}],g=()=>{const b={};return(!n.name.trim()||n.name.trim().length<2)&&(b.name="Name must be at least 2 characters"),(!n.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email))&&(b.email="Please enter a valid email address"),(!n.subject.trim()||n.subject.trim().length<3)&&(b.subject="Subject must be at least 3 characters"),(!n.message.trim()||n.message.trim().length<10)&&(b.message="Message must be at least 10 characters"),i(b),Object.keys(b).length===0},I=b=>{const{name:C,value:N}=b.target;t(O=>({...O,[C]:N})),e[C]&&i(O=>({...O,[C]:void 0}))},w=async b=>{if(b.preventDefault(),!!g()){o(!0),c(null);try{await md(Zh(Ed,"contacts"),{...n,timestamp:new Date().toISOString(),read:!1}),c("success"),t({name:"",email:"",subject:"",message:""})}catch(C){console.error("Error submitting form:",C),c("error")}finally{o(!1)}}};return V.jsxs("div",{className:"min-h-screen bg-zinc-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden",children:[V.jsx("div",{className:"absolute inset-0 overflow-hidden","aria-hidden":"true",children:[...Array(5)].map((b,C)=>V.jsx(G.div,{className:"absolute w-32 h-32 bg-emerald-500/5 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:3+C,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}},C))}),V.jsxs(G.div,{variants:br,initial:"hidden",animate:"visible",className:"max-w-7xl mx-auto relative z-10",children:[V.jsxs(G.div,{className:"text-center mb-16",variants:It,children:[V.jsx("div",{className:"inline-block",children:V.jsxs(G.h1,{className:"text-4xl sm:text-5xl font-bold text-white mb-4 relative",animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:["Get in Touch",V.jsx("span",{className:"text-emerald-500",children:"."}),V.jsx(G.div,{"aria-hidden":"true",className:"absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full",animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}})]})}),V.jsx(G.p,{className:"text-gray-400 text-lg max-w-2xl mx-auto",variants:It,children:"Let's discuss your project and explore how we can work together to bring your ideas to life."})]}),V.jsx(G.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",variants:br,children:d.map(b=>V.jsxs(G.div,{className:"group relative",variants:It,whileHover:{scale:1.02},children:[V.jsx(G.div,{"aria-hidden":"true",className:"absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300",animate:gs}),V.jsxs("div",{className:"bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 relative hover:border-emerald-500 transition-colors duration-300",children:[V.jsx(G.div,{className:"w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300",whileHover:{rotate:360},transition:{duration:.6},"aria-hidden":"true",children:V.jsx(b.icon,{className:"w-8 h-8 text-emerald-500"})}),V.jsx("h3",{className:"text-2xl font-semibold text-white mb-2",children:b.title}),V.jsx("p",{className:"text-gray-400",children:b.content})]})]},b.title))}),V.jsxs(G.div,{variants:It,className:"bg-zinc-900/80 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 relative overflow-hidden",children:[V.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 overflow-hidden",children:V.jsx(G.div,{className:"absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent",animate:{opacity:[.5,1,.5]},transition:{duration:8,repeat:1/0,ease:"linear"}})}),V.jsxs("div",{className:"relative z-10",children:[V.jsxs(G.h2,{className:"text-3xl font-bold text-white mb-8",variants:It,children:["Send Message",V.jsx("span",{className:"text-emerald-500",children:"."})]}),V.jsxs("form",{onSubmit:w,className:"space-y-6",noValidate:!0,children:[V.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[V.jsxs(G.div,{variants:It,children:[V.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:[V.jsx(nl,{className:"w-4 h-4 inline mr-2","aria-hidden":"true"}),"Name"]}),V.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:I,required:!0,"aria-describedby":e.name?"name-error":void 0,"aria-invalid":!!e.name,className:`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${e.name?"border-red-500 focus:border-red-500":"border-zinc-700 focus:border-emerald-500"}`,placeholder:"Your Name"}),e.name&&V.jsx("p",{id:"name-error",role:"alert",className:"text-red-400 text-xs mt-1",children:e.name})]}),V.jsxs(G.div,{variants:It,children:[V.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:[V.jsx(_s,{className:"w-4 h-4 inline mr-2","aria-hidden":"true"}),"Email"]}),V.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:I,required:!0,"aria-describedby":e.email?"email-error":void 0,"aria-invalid":!!e.email,className:`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${e.email?"border-red-500 focus:border-red-500":"border-zinc-700 focus:border-emerald-500"}`,placeholder:"your.email@example.com"}),e.email&&V.jsx("p",{id:"email-error",role:"alert",className:"text-red-400 text-xs mt-1",children:e.email})]})]}),V.jsxs(G.div,{variants:It,children:[V.jsxs("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-300 mb-2",children:[V.jsx(rl,{className:"w-4 h-4 inline mr-2","aria-hidden":"true"}),"Subject"]}),V.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:I,required:!0,"aria-describedby":e.subject?"subject-error":void 0,"aria-invalid":!!e.subject,className:`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${e.subject?"border-red-500 focus:border-red-500":"border-zinc-700 focus:border-emerald-500"}`,placeholder:"Project Discussion"}),e.subject&&V.jsx("p",{id:"subject-error",role:"alert",className:"text-red-400 text-xs mt-1",children:e.subject})]}),V.jsxs(G.div,{variants:It,children:[V.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),V.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:I,required:!0,rows:6,"aria-describedby":e.message?"message-error":void 0,"aria-invalid":!!e.message,className:`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none ${e.message?"border-red-500 focus:border-red-500":"border-zinc-700 focus:border-emerald-500"}`,placeholder:"Tell me about your project..."}),e.message&&V.jsx("p",{id:"message-error",role:"alert",className:"text-red-400 text-xs mt-1",children:e.message})]}),V.jsxs(G.div,{variants:It,className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[V.jsxs(G.button,{type:"submit",disabled:s,whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-emerald-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[V.jsx(il,{className:"w-5 h-5","aria-hidden":"true"}),s?"Sending...":"Send Message"]}),u==="success"&&V.jsx(G.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},role:"status",className:"text-emerald-500 text-sm",children:"Message sent successfully!"}),u==="error"&&V.jsx(G.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},role:"alert",className:"text-red-500 text-sm",children:"Failed to send message. Please try again."})]})]})]})]}),V.jsxs(G.div,{className:"text-center mt-16",variants:It,children:[V.jsx("h3",{className:"text-2xl font-bold text-white mb-8",children:"Connect with me"}),V.jsx(G.div,{className:"flex justify-center space-x-6",variants:br,children:Ja.map(b=>V.jsxs(G.a,{href:b.href,target:"_blank",rel:"noopener noreferrer","aria-label":b.label,variants:It,whileHover:{scale:1.1,rotate:360,transition:{duration:.6}},className:"w-12 h-12 border-2 border-zinc-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-colors duration-300 relative group",children:[V.jsx(G.div,{"aria-hidden":"true",className:"absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",animate:gs}),V.jsx(b.icon,{className:"w-6 h-6 relative z-10","aria-hidden":"true"})]},b.label))})]})]})]})},Dd=()=>V.jsxs("div",{className:"min-h-screen",children:[V.jsx(Ya,{}),V.jsx("main",{className:"pt-16",children:V.jsx(Td,{})}),V.jsx(Za,{})]});export{Dd as default};
