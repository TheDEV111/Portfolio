import{j as x}from"./animations-MIcpq9oP.js";import{a as Ka,b as Qa,c as Wa,N as Xa,F as Ja}from"./Footer-CF0rkAop.js";import{r as Tn}from"./react-vendor-BvOuhz89.js";import{M as to,h as Ya,i as Za,j as tl}from"./icons-BE6Bfsh2.js";import"./router-JQeOdLbu.js";var di={};/**
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
 */const eo=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},el=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],f=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[s++]=String.fromCharCode(55296+(f>>10)),t[s++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,f=i+2<n.length,g=f?n[i+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let b=(c&15)<<2|g>>6,C=g&63;f||(C=64,u||(b=64)),s.push(e[I],e[w],e[b],e[C])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(eo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):el(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const g=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||g==null||w==null)throw new nl;const b=o<<2|c>>4;if(s.push(b),g!==64){const C=c<<4&240|g>>2;if(s.push(C),w!==64){const D=g<<6&192|w;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rl=function(n){const t=eo(n);return no.encodeByteArray(t,!0)},Dn=function(n){return rl(n).replace(/\./g,"")},sl=function(n){try{return no.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ol=()=>il().__FIREBASE_DEFAULTS__,al=()=>{if(typeof process>"u"||typeof di>"u")return;const n=di.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ll=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&sl(n[1]);return t&&JSON.parse(t)},Hr=()=>{try{return ol()||al()||ll()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ul=n=>{var t,e;return(e=(t=Hr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},cl=n=>{const t=ul(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},ro=()=>{var n;return(n=Hr())===null||n===void 0?void 0:n.config};/**
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
 */class hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function fl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dn(JSON.stringify(e)),Dn(JSON.stringify(u)),""].join(".")}/**
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
 */function dl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pl(){var n;const t=(n=Hr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ml(){return!pl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gl(){try{return typeof indexedDB=="object"}catch{return!1}}function _l(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const yl="FirebaseError";class _e extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=yl,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?El(o,s):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new _e(i,c,s)}}function El(n,t){return n.replace(vl,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const vl=/\{\$([^}]+)}/g;function Dr(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const o=n[i],u=t[i];if(pi(o)&&pi(u)){if(!Dr(o,u))return!1}else if(o!==u)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function pi(n){return n!==null&&typeof n=="object"}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class ze{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Tl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new hl;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Al(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&u.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Il(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Il(n){return n===Qt?void 0:n}function Al(n){return n.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Tl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Rl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},bl=U.INFO,Pl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Sl=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Pl[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class io{constructor(t){this.name=t,this._logLevel=bl,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Cl=(n,t)=>t.some(e=>n instanceof e);let mi,gi;function Vl(){return mi||(mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dl(){return gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oo=new WeakMap,Nr=new WeakMap,ao=new WeakMap,wr=new WeakMap,Kr=new WeakMap;function Nl(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Lt(n.result)),i()},u=()=>{s(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&oo.set(e,n)}).catch(()=>{}),Kr.set(t,n),t}function xl(n){if(Nr.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Nr.set(n,t)}let xr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Nr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ao.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function kl(n){xr=n(xr)}function Ol(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Rr(this),t,...e);return ao.set(s,t.sort?t.sort():[t]),Lt(s)}:Dl().includes(n)?function(...t){return n.apply(Rr(this),t),Lt(oo.get(this))}:function(...t){return Lt(n.apply(Rr(this),t))}}function Ml(n){return typeof n=="function"?Ol(n):(n instanceof IDBTransaction&&xl(n),Cl(n,Vl())?new Proxy(n,xr):n)}function Lt(n){if(n instanceof IDBRequest)return Nl(n);if(wr.has(n))return wr.get(n);const t=Ml(n);return t!==n&&(wr.set(n,t),Kr.set(t,n)),t}const Rr=n=>Kr.get(n);function Ll(n,t,{blocked:e,upgrade:s,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=Lt(u);return s&&u.addEventListener("upgradeneeded",f=>{s(Lt(u.result),f.oldVersion,f.newVersion,Lt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const Fl=["get","getKey","getAll","getAllKeys","count"],Ul=["put","add","delete","clear"],br=new Map;function _i(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=Ul.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Fl.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,i?"readwrite":"readonly");let g=f.store;return s&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),i&&f.done]))[0]};return br.set(t,o),o}kl(n=>({...n,get:(t,e,s)=>_i(t,e)||n.get(t,e,s),has:(t,e)=>!!_i(t,e)||n.has(t,e)}));/**
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
 */class Bl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(jl(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function jl(n){const t=n.getComponent();return t?.type==="VERSION"}const kr="@firebase/app",yi="0.10.17";/**
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
 */const Nt=new io("@firebase/app"),$l="@firebase/app-compat",ql="@firebase/analytics-compat",zl="@firebase/analytics",Gl="@firebase/app-check-compat",Hl="@firebase/app-check",Kl="@firebase/auth",Ql="@firebase/auth-compat",Wl="@firebase/database",Xl="@firebase/data-connect",Jl="@firebase/database-compat",Yl="@firebase/functions",Zl="@firebase/functions-compat",tu="@firebase/installations",eu="@firebase/installations-compat",nu="@firebase/messaging",ru="@firebase/messaging-compat",su="@firebase/performance",iu="@firebase/performance-compat",ou="@firebase/remote-config",au="@firebase/remote-config-compat",lu="@firebase/storage",uu="@firebase/storage-compat",cu="@firebase/firestore",hu="@firebase/vertexai",fu="@firebase/firestore-compat",du="firebase",pu="11.1.0";/**
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
 */const Or="[DEFAULT]",mu={[kr]:"fire-core",[$l]:"fire-core-compat",[zl]:"fire-analytics",[ql]:"fire-analytics-compat",[Hl]:"fire-app-check",[Gl]:"fire-app-check-compat",[Kl]:"fire-auth",[Ql]:"fire-auth-compat",[Wl]:"fire-rtdb",[Xl]:"fire-data-connect",[Jl]:"fire-rtdb-compat",[Yl]:"fire-fn",[Zl]:"fire-fn-compat",[tu]:"fire-iid",[eu]:"fire-iid-compat",[nu]:"fire-fcm",[ru]:"fire-fcm-compat",[su]:"fire-perf",[iu]:"fire-perf-compat",[ou]:"fire-rc",[au]:"fire-rc-compat",[lu]:"fire-gcs",[uu]:"fire-gcs-compat",[cu]:"fire-fst",[fu]:"fire-fst-compat",[hu]:"fire-vertex","fire-js":"fire-js",[du]:"fire-js-all"};/**
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
 */const Nn=new Map,gu=new Map,Mr=new Map;function Ei(n,t){try{n.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if(Mr.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Mr.set(t,n);for(const e of Nn.values())Ei(e,n);for(const e of gu.values())Ei(e,n);return!0}function _u(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const yu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new so("app","Firebase",yu);/**
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
 */class Eu{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const vu=pu;function lo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(e||(e=ro()),!e)throw Ft.create("no-options");const o=Nn.get(i);if(o){if(Dr(e,o.options)&&Dr(s,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const u=new wl(i);for(const f of Mr.values())u.addComponent(f);const c=new Eu(e,s,u);return Nn.set(i,c),c}function Tu(n=Or){const t=Nn.get(n);if(!t&&n===Or&&ro())return lo();if(!t)throw Ft.create("no-app",{appName:n});return t}function ce(n,t,e){var s;let i=(s=mu[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}xn(new ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Iu="firebase-heartbeat-database",Au=1,Ge="firebase-heartbeat-store";let Pr=null;function uo(){return Pr||(Pr=Ll(Iu,Au,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ge)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Pr}async function wu(n){try{const e=(await uo()).transaction(Ge),s=await e.objectStore(Ge).get(co(n));return await e.done,s}catch(t){if(t instanceof _e)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t?.message});Nt.warn(e.message)}}}async function vi(n,t){try{const s=(await uo()).transaction(Ge,"readwrite");await s.objectStore(Ge).put(t,co(n)),await s.done}catch(e){if(e instanceof _e)Nt.warn(e.message);else{const s=Ft.create("idb-set",{originalErrorMessage:e?.message});Nt.warn(s.message)}}}function co(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ru=1024,bu=30*24*60*60*1e3;class Pu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Cu(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ti();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=bu}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Nt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ti(),{heartbeatsToSend:s,unsentEntries:i}=Su(this._heartbeatsCache.heartbeats),o=Dn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function Ti(){return new Date().toISOString().substring(0,10)}function Su(n,t=Ru){const e=[];let s=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Ii(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ii(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Cu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gl()?_l().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wu(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return vi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return vi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ii(n){return Dn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Vu(n){xn(new ze("platform-logger",t=>new Bl(t),"PRIVATE")),xn(new ze("heartbeat",t=>new Pu(t),"PRIVATE")),ce(kr,yi,n),ce(kr,yi,"esm2017"),ce("fire-js","")}Vu("");var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ho;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)p[Pt-2]=arguments[Pt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^m&(y^T))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^T)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~T))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}s.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)i(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){i(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){i(this,_),y=0;break}}this.h=y,this.o+=d},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)E[m++]=this.g[d]>>>_&255;return E};function o(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function u(E,d){this.h=d;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(m[y]=T,_=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function g(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(g(-E));for(var d=[],m=1,_=0;E>=m;_++)d[_]=E/m|0,m*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=g(Math.pow(d,T)),_=_.j(T).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=f(0),b=f(1),C=f(16777216);n=u.prototype,n.m=function(){if(O(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var d=g(Math.pow(E,6)),m=this,_="";;){var y=at(m,d).g;m=K(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,D(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=K(this,E),O(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,m=[],_=0;_<d;_++)m[_]=~E.g[_];return new u(m,~E.h).add(b)}n.abs=function(){return O(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,m[y]=p<<16|T}return new u(m,m[m.length-1]&-2147483648?-1:0)};function K(E,d){return E.add(N(d))}n.j=function(E){if(D(this)||D(E))return w;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return g(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Pt=E.i(y)>>>16,ve=E.i(y)&65535;m[2*_+2*y]+=p*ve,H(m,2*_+2*y),m[2*_+2*y+1]+=T*ve,H(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Pt,H(m,2*_+2*y+1),m[2*_+2*y+2]+=T*Pt,H(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new u(m,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function Q(E,d){this.g=E,this.h=d}function at(E,d){if(D(d))throw Error("division by zero");if(D(E))return new Q(w,w);if(O(E))return d=at(N(E),d),new Q(N(d.g),N(d.h));if(O(d))return d=at(E,N(d)),new Q(N(d.g),d.h);if(30<E.g.length){if(O(E)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var m=b,_=d;0>=_.l(E);)m=qt(m),_=qt(_);var y=_t(m,1),T=_t(_,1);for(_=_t(_,2),m=_t(m,2);!D(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(m),T=p),_=_t(_,1),m=_t(m,1)}return d=K(E,y.j(d)),new Q(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(m),p=T.j(d);O(p)||0<p.l(E);)m-=_,T=g(m),p=T.j(d);D(T)&&(T=b),y=y.add(T),E=K(E,p)}return new Q(y,E)}n.A=function(E){return at(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&E.i(_);return new u(m,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|E.i(_);return new u(m,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^E.i(_);return new u(m,this.h^E.h)};function qt(E){for(var d=E.g.length+1,m=[],_=0;_<d;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(m,E.h)}function _t(E,d){var m=d>>5;d%=32;for(var _=E.g.length-m,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+m)>>>d|E.i(T+m+1)<<32-d:E.i(T+m);return new u(y,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,ho=u}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fo,Fe,po,Pn,Lr,mo,go,_o;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var s=e(this);function i(r,a){if(a)t:{var l=s;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in l))break t;l=l[v]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,v={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function b(r,a,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,b.apply(null,arguments)}function C(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,v,A){for(var S=Array(arguments.length-2),$=2;$<arguments.length;$++)S[$-2]=arguments[$];return a.prototype[v].apply(h,S)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=r.length||0,A=h.length||0;r.length=v+A;for(let S=0;S<A;S++)r[v+S]=h[S]}else r.push(h)}}class K{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function at(r){return at[" "](r),r}at[" "]=function(){};var qt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function _t(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)r[l]=h[l];for(let A=0;A<m.length;A++)l=m[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=tr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,l){const h=ve.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ve=new K(()=>new fa,r=>r.reset());class fa{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ie=!1,tr=new Pt,ds=()=>{const r=c.Promise.resolve(void 0);Te=()=>{r.then(da)}};var da=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=ve;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ie=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var pa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Ae(r,a){if(lt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(qt){t:{try{at(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ma[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ae.aa.h.call(this)}}D(Ae,lt);var ma={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),ga=0;function _a(r,a,l,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++ga,this.da=this.fa=!1}function nn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function rn(r){this.src=r,this.g={},this.h=0}rn.prototype.add=function(r,a,l,h,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var S=nr(r,a,h,v);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new _a(a,this.src,A,!!h,v),a.fa=l,r.push(a)),a};function er(r,a){var l=a.type;if(l in r.g){var h=r.g[l],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(nn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function nr(r,a,l,h){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return v}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),sr={};function ps(r,a,l,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)ps(r,a[A],l,h,v);return null}return l=_s(l),r&&r[en]?r.K(a,l,g(h)?!!h.capture:!1,v):ya(r,a,l,!1,h,v)}function ya(r,a,l,h,v,A){if(!a)throw Error("Invalid event type");var S=g(v)?!!v.capture:!!v,$=or(r);if($||(r[rr]=$=new rn(r)),l=$.add(a,l,h,S,A),l.proxy)return l;if(h=Ea(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)pa||(v=S),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(gs(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ea(){function r(l){return a.call(r.src,r.listener,l)}const a=va;return r}function ms(r,a,l,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)ms(r,a[A],l,h,v);else h=g(h)?!!h.capture:!!h,l=_s(l),r&&r[en]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=nr(A,l,h,v),-1<l&&(nn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=or(r))&&(a=r.g[a.toString()],r=-1,a&&(r=nr(a,l,h,v)),(l=-1<r?a[r]:null)&&ir(l))}function ir(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[en])er(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(gs(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=or(a))?(er(l,r),l.h==0&&(l.src=null,a[rr]=null)):nn(r)}}}function gs(r){return r in sr?sr[r]:sr[r]="on"+r}function va(r,a){if(r.da)r=!0;else{a=new Ae(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&ir(r),r=l.call(h,a)}return r}function or(r){return r=r[rr],r instanceof rn?r:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(r){return typeof r=="function"?r:(r[ar]||(r[ar]=function(a){return r.handleEvent(a)}),r[ar])}function ut(){xt.call(this),this.i=new rn(this),this.M=this,this.F=null}D(ut,xt),ut.prototype[en]=!0,ut.prototype.removeEventListener=function(r,a,l,h){ms(this,r,a,l,h)};function mt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new lt(a,r);else if(a instanceof lt)a.target=a.target||r;else{var v=a;a=new lt(h,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var S=a.g=l[A];v=sn(S,h,!0,a)&&v}if(S=a.g=r,v=sn(S,h,!0,a)&&v,v=sn(S,h,!1,a)&&v,l)for(A=0;A<l.length;A++)S=a.g=l[A],v=sn(S,h,!1,a)&&v}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)nn(l[h]);delete r.g[a],r.h--}}this.F=null},ut.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},ut.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function sn(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==l){var $=S.listener,nt=S.ha||S.src;S.fa&&er(r.i,S),v=$.call(nt,h)!==!1&&v}}return v&&!h.defaultPrevented}function ys(r,a,l){if(typeof r=="function")l&&(r=b(r,l));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Es(r){r.g=ys(()=>{r.g=null,r.i&&(r.i=!1,Es(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ta extends xt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Es(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(r){xt.call(this),this.h=r,this.g={}}D(we,xt);var vs=[];function Ts(r){_t(r.g,function(a,l){this.g.hasOwnProperty(l)&&ir(a)},r),r.g={}}we.prototype.N=function(){we.aa.N.call(this),Ts(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,Ia=c.JSON.parse,Aa=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function ur(){}ur.prototype.h=null;function Is(r){return r.h||(r.h=r.i())}function As(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){lt.call(this,"d")}D(cr,lt);function hr(){lt.call(this,"c")}D(hr,lt);var zt={},ws=null;function on(){return ws=ws||new ut}zt.La="serverreachability";function Rs(r){lt.call(this,zt.La,r)}D(Rs,lt);function be(r){const a=on();mt(a,new Rs(a))}zt.STAT_EVENT="statevent";function bs(r,a){lt.call(this,zt.STAT_EVENT,r),this.stat=a}D(bs,lt);function gt(r){const a=on();mt(a,new bs(a,r))}zt.Ma="timingevent";function Ps(r,a){lt.call(this,zt.Ma,r),this.size=a}D(Ps,lt);function Pe(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Se(){this.g=!0}Se.prototype.xa=function(){this.g=!1};function wa(r,a,l,h,v,A){r.info(function(){if(r.g)if(A)for(var S="",$=A.split("&"),nt=0;nt<$.length;nt++){var B=$[nt].split("=");if(1<B.length){var ct=B[0];B=B[1];var ht=ct.split("_");S=2<=ht.length&&ht[1]=="type"?S+(ct+"="+B+"&"):S+(ct+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function Ra(r,a,l,h,v,A,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+S})}function se(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pa(r,l)+(h?" "+h:"")})}function ba(r,a){r.info(function(){return"TIMEOUT: "+a})}Se.prototype.info=function(){};function Pa(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return lr(l)}catch{return a}}var an={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ss={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function ln(){}D(ln,ur),ln.prototype.g=function(){return new XMLHttpRequest},ln.prototype.i=function(){return{}},fr=new ln;function kt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var Vs={},dr={};function pr(r,a,l){r.L=1,r.v=fn(St(a)),r.m=l,r.P=!0,Ds(r,null)}function Ds(r,a){r.F=Date.now(),un(r),r.A=St(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Gs(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Cs,r.g=ui(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Ta(b(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(vs[0]=v.toString()),v=vs);for(var A=0;A<v.length;A++){var S=ps(l,v[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),be(),wa(r.i,r.u,r.A,r.l,r.R,r.m)}kt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Ct(r)==3?a.j():this.Y(r)},kt.prototype.Y=function(r){try{if(r==this.g)t:{const ht=Ct(this.g);var a=this.g.Ba();const ae=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Ys(this.g)))){this.J||ht!=4||a==7||(a==8||0>=ae?be(3):be(2)),mr(this);var l=this.g.Z();this.X=l;e:if(Ns(this)){var h=Ys(this.g);r="";var v=h.length,A=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ce(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Ra(this.i,this.u,this.A,this.l,this.R,ht,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,nt=this.g;if(($=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H($)){var B=$;break e}}B=null}if(l=B)se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,l);else{this.o=!1,this.s=3,gt(12),Gt(this),Ce(this);break t}}if(this.P){l=!0;let Tt;for(;!this.J&&this.C<S.length;)if(Tt=Sa(this,S),Tt==dr){ht==4&&(this.s=4,gt(14),l=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Vs){this.s=4,gt(15),se(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else se(this.i,this.l,Tt,null),gr(this,Tt);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||S.length!=0||this.h.h||(this.s=1,gt(16),l=!1),this.o=this.o&&l,!l)se(this.i,this.l,S,"[Invalid Chunked Response]"),Gt(this),Ce(this);else if(0<S.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Ir(ct),ct.M=!0,gt(11))}}else se(this.i,this.l,S,null),gr(this,S);ht==4&&Gt(this),this.o&&!this.J&&(ht==4?ii(this.j,this):(this.o=!1,un(this)))}else Ga(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Gt(this),Ce(this)}}}catch{}finally{}};function Ns(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Sa(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?dr:(l=Number(a.substring(l,h)),isNaN(l)?Vs:(h+=1,h+l>a.length?dr:(a=a.slice(h,h+l),r.C=h+l,a)))}kt.prototype.cancel=function(){this.J=!0,Gt(this)};function un(r){r.S=Date.now()+r.I,xs(r,r.I)}function xs(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Pe(b(r.ba,r),a)}function mr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}kt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(ba(this.i,this.A),this.L!=2&&(be(),gt(17)),Gt(this),this.s=2,Ce(this)):xs(this,this.S-r)};function Ce(r){r.j.G==0||r.J||ii(r.j,r)}function Gt(r){mr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Ts(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function gr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||_r(l.h,r))){if(!r.K&&_r(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)yn(l),gn(l);else break t;Tr(l),gt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Pe(b(l.Za,l),6e3));if(1>=Ms(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Kt(l,11)}else if((r.K||l.g==r)&&yn(l),!H(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ct=B[3];ct!=null&&(l.la=ct,l.j.info("VER="+l.la));const ht=B[4];ht!=null&&(l.Aa=ht,l.j.info("SVER="+l.Aa));const ae=B[5];ae!=null&&typeof ae=="number"&&0<ae&&(h=1.5*ae,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Tt=r.g;if(Tt){const vn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vn){var A=h.h;A.g||vn.indexOf("spdy")==-1&&vn.indexOf("quic")==-1&&vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(yr(A,A.h),A.h=null))}if(h.D){const Ar=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ar&&(h.ya=Ar,z(h.I,h.D,Ar))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=r;if(h.qa=li(h,h.J?h.ia:null,h.W),S.K){Ls(h.h,S);var $=S,nt=h.L;nt&&($.I=nt),$.B&&(mr($),un($)),h.g=S}else ri(h);0<l.i.length&&_n(l)}else B[0]!="stop"&&B[0]!="close"||Kt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Kt(l,7):vr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}be(4)}catch{}}var Ca=class{constructor(r,a){this.g=r,this.map=a}};function ks(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Os(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ms(r){return r.h?1:r.g?r.g.size:0}function _r(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function yr(r,a){r.g?r.g.add(a):r.h=a}function Ls(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}ks.prototype.cancel=function(){if(this.i=Fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Fs(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function Va(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function Da(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function Us(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Da(r),h=Va(r),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],l&&l[A],r)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Na(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),v=null;if(0<=h){var A=r[l].substring(0,h);v=r[l].substring(h+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ht(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ht){this.h=r.h,cn(this,r.j),this.o=r.o,this.g=r.g,hn(this,r.s),this.l=r.l;var a=r.i,l=new Ne;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),js(this,l),this.m=r.m}else r&&(a=String(r).match(Bs))?(this.h=!1,cn(this,a[1]||"",!0),this.o=Ve(a[2]||""),this.g=Ve(a[3]||"",!0),hn(this,a[4]),this.l=Ve(a[5]||"",!0),js(this,a[6]||"",!0),this.m=Ve(a[7]||"")):(this.h=!1,this.i=new Ne(null,this.h))}Ht.prototype.toString=function(){var r=[],a=this.j;a&&r.push(De(a,$s,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(De(a,$s,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(De(l,l.charAt(0)=="/"?Oa:ka,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",De(l,La)),r.join("")};function St(r){return new Ht(r)}function cn(r,a,l){r.j=l?Ve(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function hn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function js(r,a,l){a instanceof Ne?(r.i=a,Fa(r.i,r.h)):(l||(a=De(a,Ma)),r.i=new Ne(a,r.h))}function z(r,a,l){r.i.set(a,l)}function fn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ve(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function De(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,xa),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function xa(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var $s=/[#\/\?@]/g,ka=/[#\?:]/g,Oa=/[#\?]/g,Ma=/[#\?@]/g,La=/#/g;function Ne(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ot(r){r.g||(r.g=new Map,r.h=0,r.i&&Na(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ne.prototype,n.add=function(r,a){Ot(this),this.i=null,r=ie(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function qs(r,a){Ot(r),a=ie(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function zs(r,a){return Ot(r),a=ie(r,a),r.g.has(a)}n.forEach=function(r,a){Ot(this),this.g.forEach(function(l,h){l.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){Ot(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=r[h];for(let A=0;A<v.length;A++)l.push(a[h])}return l},n.V=function(r){Ot(this);let a=[];if(typeof r=="string")zs(this,r)&&(a=a.concat(this.g.get(ie(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Ot(this),this.i=null,r=ie(this,r),zs(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Gs(r,a,l){qs(r,a),0<l.length&&(r.i=null,r.g.set(ie(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=A;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),r.push(v)}}return this.i=r.join("&")};function ie(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Fa(r,a){a&&!r.j&&(Ot(r),r.i=null,r.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(qs(this,h),Gs(this,v,l))},r)),r.j=a}function Ua(r,a){const l=new Se;if(c.Image){const h=new Image;h.onload=C(Mt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Mt,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Mt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Mt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Ba(r,a){const l=new Se,h=new AbortController,v=setTimeout(()=>{h.abort(),Mt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?Mt(l,"TestPingServer: ok",!0,a):Mt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Mt(l,"TestPingServer: error",!1,a)})}function Mt(r,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function ja(){this.g=new Aa}function $a(r,a,l){const h=l||"";try{Us(r,function(v,A){let S=v;g(v)&&(S=lr(v)),a.push(h+A+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function dn(r){this.l=r.Ub||null,this.j=r.eb||!1}D(dn,ur),dn.prototype.g=function(){return new pn(this.l,this.j)},dn.prototype.i=function(r){return function(){return r}}({});function pn(r,a){ut.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(pn,ut),n=pn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,ke(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,ke(this)),this.g&&(this.readyState=3,ke(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?xe(this):ke(this),this.readyState==3&&Hs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,xe(this))},n.Qa=function(r){this.g&&(this.response=r,xe(this))},n.ga=function(){this.g&&xe(this)};function xe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,ke(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function ke(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ks(r){let a="";return _t(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Er(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Ks(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):z(r,a,l))}function W(r){ut.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(W,ut);var qa=/^https?$/i,za=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?Is(this.o):Is(fr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Qs(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(za,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Qs(this,A)}};function Qs(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Ws(r),mn(r)}function Ws(r){r.A||(r.A=!0,mt(r,"complete"),mt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,mt(this,"complete"),mt(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xs(this):this.bb())},n.bb=function(){Xs(this)};function Xs(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Ct(r)!=4||r.Z()!=2)){if(r.u&&Ct(r)==4)ys(r.Ea,0,r);else if(mt(r,"readystatechange"),Ct(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var v=String(r.D).match(Bs)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!qa.test(v?v.toLowerCase():"")}l=h}if(l)mt(r,"complete"),mt(r,"success");else{r.m=6;try{var A=2<Ct(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Ws(r)}}finally{mn(r)}}}}function mn(r,a){if(r.g){Js(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||mt(r,"ready");try{l.onreadystatechange=h}catch{}}}function Js(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ct(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ia(a)}};function Ys(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ga(r){const a={};r=(r.g&&2<=Ct(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var l=y(r[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Zs(r){this.Aa=0,this.i=[],this.j=new Se,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oe("baseRetryDelayMs",5e3,r),this.cb=Oe("retryDelaySeedMs",1e4,r),this.Wa=Oe("forwardChannelMaxRetries",2,r),this.wa=Oe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new ks(r&&r.concurrentRequestLimit),this.Da=new ja,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zs.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){gt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=li(this,null,this.W),_n(this)};function vr(r){if(ti(r),r.G==3){var a=r.U++,l=St(r.I);if(z(l,"SID",r.K),z(l,"RID",a),z(l,"TYPE","terminate"),Me(r,l),a=new kt(r,r.j,a),a.L=2,a.v=fn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ui(a.j,null),a.g.ea(a.v)),a.F=Date.now(),un(a)}ai(r)}function gn(r){r.g&&(Ir(r),r.g.cancel(),r.g=null)}function ti(r){gn(r),r.u&&(c.clearTimeout(r.u),r.u=null),yn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function _n(r){if(!Os(r.h)&&!r.s){r.s=!0;var a=r.Ga;Te||ds(),Ie||(Te(),Ie=!0),tr.add(a,r),r.B=0}}function Ha(r,a){return Ms(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Pe(b(r.Ga,r,a),oi(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new kt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ni(this,v,a),l=St(this.I),z(l,"RID",r),z(l,"CVER",22),this.D&&z(l,"X-HTTP-Session-Id",this.D),Me(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Ks(A)))+"&"+a:this.m&&Er(l,this.m,A)),yr(this.h,v),this.Ua&&z(l,"TYPE","init"),this.P?(z(l,"$req",a),z(l,"SID","null"),v.T=!0,pr(v,l,null)):pr(v,l,a),this.G=2}}else this.G==3&&(r?ei(this,r):this.i.length==0||Os(this.h)||ei(this))};function ei(r,a){var l;a?l=a.l:l=r.U++;const h=St(r.I);z(h,"SID",r.K),z(h,"RID",l),z(h,"AID",r.T),Me(r,h),r.m&&r.o&&Er(h,r.m,r.o),l=new kt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=ni(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),yr(r.h,l),pr(l,h,a)}function Me(r,a){r.H&&_t(r.H,function(l,h){z(a,h,l)}),r.l&&Us({},function(l,h){z(a,h,l)})}function ni(r,a,l){l=Math.min(r.i.length,l);var h=r.l?b(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const S=["count="+l];A==-1?0<l?(A=v[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let $=!0;for(let nt=0;nt<l;nt++){let B=v[nt].g;const ct=v[nt].map;if(B-=A,0>B)A=Math.max(0,v[nt].g-100),$=!1;else try{$a(ct,S,"req"+B+"_")}catch{h&&h(ct)}}if($){h=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function ri(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Te||ds(),Ie||(Te(),Ie=!0),tr.add(a,r),r.v=0}}function Tr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Pe(b(r.Fa,r),oi(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,si(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Pe(b(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),gn(this),si(this))};function Ir(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function si(r){r.g=new kt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=St(r.qa);z(a,"RID","rpc"),z(a,"SID",r.K),z(a,"AID",r.T),z(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(a,"TO",r.ja),z(a,"TYPE","xmlhttp"),Me(r,a),r.m&&r.o&&Er(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=fn(St(a)),l.m=null,l.P=!0,Ds(l,r)}n.Za=function(){this.C!=null&&(this.C=null,gn(this),Tr(this),gt(19))};function yn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function ii(r,a){var l=null;if(r.g==a){yn(r),Ir(r),r.g=null;var h=2}else if(_r(r.h,a))l=a.D,Ls(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=on(),mt(h,new Ps(h,l)),_n(r)}else ri(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Ha(r,a)||h==2&&Tr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:Kt(r,5);break;case 4:Kt(r,10);break;case 3:Kt(r,6);break;default:Kt(r,2)}}}function oi(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Kt(r,a){if(r.j.info("Error code "+a),a==2){var l=b(r.fb,r),h=r.Xa;const v=!h;h=new Ht(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||cn(h,"https"),fn(h),v?Ua(h.toString(),l):Ba(h.toString(),l)}else gt(2);r.G=0,r.l&&r.l.sa(a),ai(r),ti(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function ai(r){if(r.G=0,r.ka=[],r.l){const a=Fs(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function li(r,a,l){var h=l instanceof Ht?St(l):new Ht(l);if(h.g!="")a&&(h.g=a+"."+h.g),hn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Ht(null);h&&cn(A,h),a&&(A.g=a),v&&hn(A,v),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&z(h,l,a),z(h,"VER",r.la),Me(r,h),h}function ui(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new dn({eb:l})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ci(){}n=ci.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function En(){}En.prototype.g=function(r,a){return new vt(r,a)};function vt(r,a){ut.call(this),this.g=new Zs(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new oe(this)}D(vt,ut),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){vr(this.g)},vt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=lr(r),r=l);a.i.push(new Ca(a.Ya++,r)),a.G==3&&_n(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,vt.aa.N.call(this)};function hi(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(hi,cr);function fi(){hr.call(this),this.status=1}D(fi,hr);function oe(r){this.g=r}D(oe,ci),oe.prototype.ua=function(){mt(this.g,"a")},oe.prototype.ta=function(r){mt(this.g,new hi(r))},oe.prototype.sa=function(r){mt(this.g,new fi)},oe.prototype.ra=function(){mt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,_o=function(){return new En},go=function(){return on()},mo=zt,Lr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},an.NO_ERROR=0,an.TIMEOUT=8,an.HTTP_ERROR=6,Pn=an,Ss.COMPLETE="complete",po=Ss,As.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Fe=As,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,fo=W}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const wi="@firebase/firestore";/**
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
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let ye="11.0.2";/**
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
 */const Yt=new io("@firebase/firestore");function le(){return Yt.logLevel}function V(n,...t){if(Yt.logLevel<=U.DEBUG){const e=t.map(Qr);Yt.debug(`Firestore (${ye}): ${n}`,...e)}}function Zt(n,...t){if(Yt.logLevel<=U.ERROR){const e=t.map(Qr);Yt.error(`Firestore (${ye}): ${n}`,...e)}}function kn(n,...t){if(Yt.logLevel<=U.WARN){const e=t.map(Qr);Yt.warn(`Firestore (${ye}): ${n}`,...e)}}function Qr(n){if(typeof n=="string")return n;try{/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+n;throw Zt(t),new Error(t)}function J(n,t){n||L()}function q(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends _e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class yo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Du{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class Nu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class xu{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0);let s=this.i;const i=f=>this.i!==s?(s=this.i,e(f)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(J(typeof s.accessToken=="string"),new yo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new dt(t)}}class ku{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ou{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new ku(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){J(this.o===void 0);const s=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>s(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new Mu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class Eo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Fu(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<e&&(s+=t.charAt(i[o]%t.length))}return s}}function j(n,t){return n<t?-1:n>t?1:0}function fe(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new et(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new et(0,0))}static max(){return new G(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class He{constructor(t,e,s){e===void 0?e=0:e>t.length&&L(),s===void 0?s=t.length-e:s>t.length-e&&L(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends He{construct(t,e,s){return new X(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Uu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends He{construct(t,e,s){return new it(t,e,s)}static isValidIdentifier(t){return Uu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const o=()=>{if(s.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=f,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(s+=c,i++):(o(),i++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Bu(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(s===1e9?new et(e+1,0):new et(e,s));return new Bt(i,M.empty(),t)}function ju(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Bt(G.min(),M.empty(),-1)}static max(){return new Bt(G.max(),M.empty(),-1)}}function $u(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const qu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Wr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==qu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((s,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(s,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,s)=>{e(t)})}static reject(t){return new R((e,s)=>{s(t)})}static waitFor(t){return new R((e,s)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},f=>s(f))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const s of t)e=e.next(i=>i?R.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,o)=>{s.push(e.call(this,i,o))}),this.waitFor(s)}static mapArray(t,e){return new R((s,i)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++c,c===o&&s(u)},I=>i(I))}})}static doWhile(t,e){return new R((s,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):s()};o()})}}function Gu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Xr.oe=-1;function Jr(n){return n==null}function On(n){return n===0&&1/n==-1/0}function Hu(n){return typeof n=="number"&&Number.isInteger(n)&&!On(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ku(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ri(t)),t=Qu(n.get(e),t);return Ri(t)}function Qu(n,t){let e=t;const s=n.length;for(let i=0;i<s;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ri(n){return n+""}/**
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
 */function bi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ee(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function vo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Et{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?s(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,s,i,o){this.key=t,this.value=e,this.color=s??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,o){return new rt(t??this.key,e??this.value,s??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const o=s(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,s),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,s,i,o){return this}insert(t,e,s){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pi(this.data.getIterator())}getIteratorFrom(t){return new Pi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=s.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Pi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ot(it.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Wu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wu("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const Xu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(J(!!n),typeof n=="string"){let t=0;const e=Xu.exec(n);if(J(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function de(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */function Yr(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zr(n){const t=n.mapValue.fields.__previous_value__;return Yr(t)?Zr(t):t}function Mn(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Ju{constructor(t,e,s,i,o,u,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}class Ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const wn={mapValue:{}};function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yr(n)?4:Zu(n)?9007199254740991:Yu(n)?10:11:L()}function bt(n,t){if(n===t)return!0;const e=ee(n);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Mn(n).isEqual(Mn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=te(i.timestampValue),c=te(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return de(i.bytesValue).isEqual(de(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=st(i.doubleValue),c=st(o.doubleValue);return u===c?On(u)===On(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return fe(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(bi(u)!==bi(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!bt(u[f],c[f])))return!1;return!0}(n,t);default:return L()}}function Ke(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=ee(n),s=ee(t);if(e!==s)return j(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=st(o.integerValue||o.doubleValue),f=st(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Si(n.timestampValue,t.timestampValue);case 4:return Si(Mn(n),Mn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=de(o),f=de(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=j(c[g],f[g]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(st(o.latitude),st(u.latitude));return c!==0?c:j(st(o.longitude),st(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ci(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,g,I;const w=o.fields||{},b=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,D=(f=b.value)===null||f===void 0?void 0:f.arrayValue,O=j(((g=C?.values)===null||g===void 0?void 0:g.length)||0,((I=D?.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Ci(C,D)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===wn.mapValue&&u===wn.mapValue)return 0;if(o===wn.mapValue)return 1;if(u===wn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const b=j(f[w],I[w]);if(b!==0)return b;const C=pe(c[f[w]],g[I[w]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw L()}}function Si(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=te(n),s=te(t),i=j(e.seconds,s.seconds);return i!==0?i:j(e.nanos,s.nanos)}function Ci(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const o=pe(e[i],s[i]);if(o)return o}return j(e.length,s.length)}function me(n){return Fr(n)}function Fr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=te(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return de(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const o of e.values||[])i?i=!1:s+=",",s+=Fr(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of s)o?o=!1:i+=",",i+=`${u}:${Fr(e.fields[u])}`;return i+"}"}(n.mapValue):L()}function Sn(n){switch(ee(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Zr(n);return t?16+Sn(t):16;case 5:return 2*n.stringValue.length;case 6:return de(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,o)=>i+Sn(o),0)}(n.arrayValue);case 10:case 11:return function(s){let i=0;return Ee(s.fields,(o,u)=>{i+=o.length+Sn(u)}),i}(n.mapValue);default:throw L()}}function Ur(n){return!!n&&"integerValue"in n}function ts(n){return!!n&&"arrayValue"in n}function Cn(n){return!!n&&"mapValue"in n}function Yu(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ue(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ee(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Ue(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ue(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Zu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Cn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(e)}setAll(t){let e=it.emptyPath(),s={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,s,i),s={},i=[],e=c.popLast()}u?s[c.lastSegment()]=Ue(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,s,i)}delete(t){const e=this.field(t.popLast());Cn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];Cn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Ee(e,(i,o)=>t[i]=o);for(const i of s)delete t[i]}clone(){return new At(Ue(this.value))}}function To(n){const t=[];return Ee(n.fields,(e,s)=>{const i=new it([e]);if(Cn(s)){const o=To(s.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
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
 */class It{constructor(t,e,s,i,o,u,c){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new It(t,0,G.min(),G.min(),G.min(),At.empty(),0)}static newFoundDocument(t,e,s,i){return new It(t,1,e,G.min(),s,i,0)}static newNoDocument(t,e){return new It(t,2,e,G.min(),G.min(),At.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,G.min(),G.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function Vi(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?s=M.comparator(M.fromName(u.referenceValue),e.key):s=pe(u,e.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Di(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function tc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Io{}class tt extends Io{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new nc(t,e,s):e==="array-contains"?new ic(t,s):e==="in"?new oc(t,s):e==="not-in"?new ac(t,s):e==="array-contains-any"?new lc(t,s):new tt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new rc(t,s):new sc(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Io{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new jt(t,e)}matches(t){return Ao(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ao(n){return n.op==="and"}function wo(n){return ec(n)&&Ao(n)}function ec(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Br(n){if(n instanceof tt)return n.field.canonicalString()+n.op.toString()+me(n.value);if(wo(n))return n.filters.map(t=>Br(t)).join(",");{const t=n.filters.map(e=>Br(e)).join(",");return`${n.op}(${t})`}}function Ro(n,t){return n instanceof tt?function(s,i){return i instanceof tt&&s.op===i.op&&s.field.isEqual(i.field)&&bt(s.value,i.value)}(n,t):n instanceof jt?function(s,i){return i instanceof jt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((o,u,c)=>o&&Ro(u,i.filters[c]),!0):!1}(n,t):void L()}function bo(n){return n instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${me(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(bo).join(" ,")+"}"}(n):"Filter"}class nc extends tt{constructor(t,e,s){super(t,e,s),this.key=M.fromName(s.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class rc extends tt{constructor(t,e){super(t,"in",e),this.keys=Po("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class sc extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Po("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Po(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>M.fromName(s.referenceValue))}class ic extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ts(e)&&Ke(e.arrayValue,this.value)}}class oc extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ke(this.value.arrayValue,e)}}class ac extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ke(this.value.arrayValue,e)}}class lc extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Ke(this.value.arrayValue,s))}}/**
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
 */class uc{constructor(t,e=null,s=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Ni(n,t=null,e=[],s=[],i=null,o=null,u=null){return new uc(n,t,e,s,i,o,u)}function es(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Br(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),Jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>me(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>me(s)).join(",")),t.ue=e}return t.ue}function ns(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!tc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ro(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Di(n.startAt,t.startAt)&&Di(n.endAt,t.endAt)}/**
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
 */class Hn{constructor(t,e=null,s=[],i=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cc(n,t,e,s,i,o,u,c){return new Hn(n,t,e,s,i,o,u,c)}function hc(n){return new Hn(n)}function xi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fc(n){return n.collectionGroup!==null}function Be(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ot(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Un(o,s))}),e.has(it.keyField().canonicalString())||t.ce.push(new Un(it.keyField(),s))}return t.ce}function Jt(n){const t=q(n);return t.le||(t.le=dc(t,Be(n))),t.le}function dc(n,t){if(n.limitType==="F")return Ni(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Un(i.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return Ni(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function jr(n,t,e){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function So(n,t){return ns(Jt(n),Jt(t))&&n.limitType===t.limitType}function Co(n){return`${es(Jt(n))}|lt:${n.limitType}`}function Le(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>bo(i)).join(", ")}]`),Jr(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>me(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>me(i)).join(",")),`Target(${s})`}(Jt(n))}; limitType=${n.limitType})`}function rs(n,t){return t.isFoundDocument()&&function(s,i){const o=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):M.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,t)&&function(s,i){for(const o of Be(s))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const o of s.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(u,c,f){const g=Vi(u,c,f);return u.inclusive?g<=0:g<0}(s.startAt,Be(s),i)||s.endAt&&!function(u,c,f){const g=Vi(u,c,f);return u.inclusive?g>=0:g>0}(s.endAt,Be(s),i))}(n,t)}function pc(n){return(t,e)=>{let s=!1;for(const i of Be(n)){const o=mc(i,t,e);if(o!==0)return o;s=s||i.field.isKeyField()}return 0}}function mc(n,t,e){const s=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),g=c.data.field(o);return f!==null&&g!==null?pe(f,g):L()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return L()}}/**
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
 */class ne{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,o]of s)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,s)=>{for(const[i,o]of s)t(i,o)})}isEmpty(){return vo(this.inner)}size(){return this.innerSize}}/**
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
 */const gc=new Et(M.comparator);function Bn(){return gc}const Vo=new Et(M.comparator);function Rn(...n){let t=Vo;for(const e of n)t=t.insert(e.key,e);return t}function Do(n){let t=Vo;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Wt(){return je()}function No(){return je()}function je(){return new ne(n=>n.toString(),(n,t)=>n.isEqual(t))}const _c=new Et(M.comparator),yc=new ot(M.comparator);function pt(...n){let t=yc;for(const e of n)t=t.add(e);return t}const Ec=new ot(j);function vc(){return Ec}/**
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
 */function ss(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function xo(n){return{integerValue:""+n}}function Tc(n,t){return Hu(t)?xo(t):ss(n,t)}/**
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
 */class Kn{constructor(){this._=void 0}}function Ic(n,t,e){return n instanceof jn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Yr(o)&&(o=Zr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Qe?Oo(n,t):n instanceof We?Mo(n,t):function(i,o){const u=ko(i,o),c=ki(u)+ki(i.Pe);return Ur(u)&&Ur(i.Pe)?xo(c):ss(i.serializer,c)}(n,t)}function Ac(n,t,e){return n instanceof Qe?Oo(n,t):n instanceof We?Mo(n,t):e}function ko(n,t){return n instanceof $n?function(s){return Ur(s)||function(o){return!!o&&"doubleValue"in o}(s)}(t)?t:{integerValue:0}:null}class jn extends Kn{}class Qe extends Kn{constructor(t){super(),this.elements=t}}function Oo(n,t){const e=Lo(t);for(const s of n.elements)e.some(i=>bt(i,s))||e.push(s);return{arrayValue:{values:e}}}class We extends Kn{constructor(t){super(),this.elements=t}}function Mo(n,t){let e=Lo(t);for(const s of n.elements)e=e.filter(i=>!bt(i,s));return{arrayValue:{values:e}}}class $n extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ki(n){return st(n.integerValue||n.doubleValue)}function Lo(n){return ts(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wc(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof Qe&&i instanceof Qe||s instanceof We&&i instanceof We?fe(s.elements,i.elements,bt):s instanceof $n&&i instanceof $n?bt(s.Pe,i.Pe):s instanceof jn&&i instanceof jn}(n.transform,t.transform)}class Rc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qn{}function Fo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bo(n.key,Vt.none()):new Ye(n.key,n.data,Vt.none());{const e=n.data,s=At.empty();let i=new ot(it.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?s.delete(o):s.set(o,u),i=i.add(o)}return new re(n.key,s,new wt(i.toArray()),Vt.none())}}function bc(n,t,e){n instanceof Ye?function(i,o,u){const c=i.value.clone(),f=Mi(i.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof re?function(i,o,u){if(!Vn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Mi(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Uo(i)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function $e(n,t,e,s){return n instanceof Ye?function(o,u,c,f){if(!Vn(o.precondition,u))return c;const g=o.value.clone(),I=Li(o.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,s):n instanceof re?function(o,u,c,f){if(!Vn(o.precondition,u))return c;const g=Li(o.fieldTransforms,f,u),I=u.data;return I.setAll(Uo(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,s):function(o,u,c){return Vn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Pc(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),o=ko(s.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(s.field,o))}return e||null}function Oi(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&fe(s,i,(o,u)=>wc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ye extends Qn{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class re extends Qn{constructor(t,e,s,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Uo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Mi(n,t,e){const s=new Map;J(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);s.set(o.field,Ac(u,c,e[i]))}return s}function Li(n,t,e){const s=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);s.set(i.field,Ic(o,u,t))}return s}class Bo extends Qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sc extends Qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cc{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&bc(o,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=$e(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=$e(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=No();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const f=Fo(u,c);f!==null&&s.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(e,s)=>Oi(e,s))&&fe(this.baseMutations,t.baseMutations,(e,s)=>Oi(e,s))}}class is{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){J(t.mutations.length===s.length);let i=function(){return _c}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,s[u].version);return new is(t,e,s,i)}}/**
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
 */class Vc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,F;function Dc(n){switch(n){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Nc(n){if(n===void 0)return Zt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ho([4294967295,4294967295],0);class xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $r(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Oc(n,t){return $r(n,t.toTimestamp())}function he(n){return J(!!n),G.fromTimestamp(function(e){const s=te(e);return new et(s.seconds,s.nanos)}(n))}function jo(n,t){return qr(n,t).canonicalString()}function qr(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Mc(n){const t=X.fromString(n);return J(zc(t)),t}function zr(n,t){return jo(n.databaseId,t.path)}function Lc(n){const t=Mc(n);return t.length===4?X.emptyPath():Uc(t)}function Fc(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Uc(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fi(n,t,e){return{name:zr(n,t),fields:e.value.mapValue.fields}}function Bc(n,t){let e;if(t instanceof Ye)e={update:Fi(n,t.key,t.value)};else if(t instanceof Bo)e={delete:zr(n,t.key)};else if(t instanceof re)e={update:Fi(n,t.key,t.data),updateMask:qc(t.fieldMask)};else{if(!(t instanceof Sc))return L();e={verify:zr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(o,u){const c=u.transform;if(c instanceof jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof We)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $n)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw L()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Oc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function jc(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(i,o){let u=i.updateTime?he(i.updateTime):he(o);return u.isEqual(G.min())&&(u=he(o)),new Rc(u,i.transformResults||[])}(e,t))):[]}function $c(n){let t=Lc(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){J(s===1);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const b=$o(w);return b instanceof jt&&wo(b)?b.getFilters():[b]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(b=>function(D){return new Un(ue(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(w){let b;return b=typeof w=="object"?w.value:w,Jr(b)?null:b}(e.limit));let f=null;e.startAt&&(f=function(w){const b=!!w.before,C=w.values||[];return new Fn(C,b)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const b=!w.before,C=w.values||[];return new Fn(C,b)}(e.endAt)),cc(t,i,u,o,c,"F",f,g)}function $o(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=ue(e.unaryFilter.field);return tt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ue(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ue(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ue(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return tt.create(ue(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(s=>$o(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function ue(n){return it.fromServerFormat(n.fieldPath)}function qc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function zc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gc{constructor(t){this.ht=t}}function Hc(n){const t=$c({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jr(t,t.limit,"L"):t}/**
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
 */class Kc{constructor(){this.ln=new Qc}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Bt.min())}updateCollectionGroup(t,e,s){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Qc{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new ot(X.comparator),o=!i.has(s);return this.index[e]=i.add(s),o}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new ot(X.comparator)).toArray()}}/**
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
 */const Ui={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{static withCacheSize(t){return new yt(t,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class ge{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new ge(0)}static Qn(){return new ge(-1)}}/**
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
 */function Bi([n,t],[e,s]){const i=j(n,e);return i===0?j(t,s):i}class Wc{constructor(t){this.Gn=t,this.buffer=new ot(Bi),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();Bi(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Xc{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){V("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Je(e)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Wr(e)}await this.Yn(3e5)})}}class Jc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(s=>Math.floor(e/100*s))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Xr.oe);const s=new Wc(e);return this.Zn.forEachTarget(t,i=>s.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>s.Hn(i))).next(()=>s.maxValue)}removeTargets(t,e,s){return this.Zn.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ui)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ui):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let s,i,o,u,c,f,g;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,u=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(s=w,c=Date.now(),this.removeTargets(t,s,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,s))).next(w=>(g=Date.now(),le()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Yc(n,t){return new Jc(n,t)}/**
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
 */class Zc{constructor(){this.changes=new ne(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?R.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class th{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class eh{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&$e(s.mutation,i,wt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,pt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=pt()){const i=Wt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(o=>{let u=Rn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const s=Wt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,pt()))}populateOverlays(t,e,s){const i=[];return s.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,s,i){let o=Bn();const u=je(),c=function(){return je()}();return e.forEach((f,g)=>{const I=s.get(g.key);i.has(g.key)&&(I===void 0||I.mutation instanceof re)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),$e(I.mutation,g,I.mutation.getFieldMask(),et.now())):u.set(g.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return c.set(g,new th(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const s=je();let i=new Et((u,c)=>u-c),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=s.get(f)||wt.empty();I=c.applyToLocalView(g,I),s.set(f,I);const w=(i.get(c.batchId)||pt()).add(f);i=i.insert(c.batchId,w)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,w=No();I.forEach(b=>{if(!o.has(b)){const C=Fo(e.get(b),s.get(b));C!==null&&w.set(b,C),o=o.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-o.size):R.resolve(Wt());let c=-1,f=o;return u.next(g=>R.forEach(g,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(b=>{f=f.insert(I,b)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,pt())).next(I=>({batchId:c,changes:Do(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(s=>{let i=Rn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const o=e.collectionGroup;let u=Rn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const g=function(w,b){return new Hn(b,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,s,i).next(I=>{I.forEach((w,b)=>{u=u.insert(w,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,s,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,o,i))).next(u=>{o.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,It.newInvalidDocument(I)))});let c=Rn();return u.forEach((f,g)=>{const I=o.get(f);I!==void 0&&$e(I.mutation,g,wt.empty(),et.now()),rs(e,g)&&(c=c.insert(f,g))}),c})}}/**
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
 */class nh{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:he(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:Hc(i.bundledQuery),readTime:he(i.readTime)}}(e)),R.resolve()}}/**
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
 */class rh{constructor(){this.overlays=new Et(M.comparator),this.Er=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Wt();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Er.get(s);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(s)),R.resolve()}getOverlaysForCollection(t,e,s){const i=Wt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>s&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let o=new Et((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>s){let I=o.get(g.largestBatchId);I===null&&(I=Wt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Wt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=i)););return R.resolve(c)}Tt(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const u=this.Er.get(i.largestBatchId).delete(s.key);this.Er.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new Vc(e,s));let o=this.Er.get(e);o===void 0&&(o=pt(),this.Er.set(e,o)),this.Er.set(e,o.add(s.key))}}/**
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
 */class sh{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class os{constructor(){this.dr=new ot(Z.Ar),this.Rr=new ot(Z.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const s=new Z(t,e);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.gr(new Z(t,e))}pr(t,e){t.forEach(s=>this.removeReference(s,e))}yr(t){const e=new M(new X([])),s=new Z(e,t),i=new Z(e,t+1),o=[];return this.Rr.forEachInRange([s,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new X([])),s=new Z(e,t),i=new Z(e,t+1);let o=pt();return this.Rr.forEachInRange([s,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new Z(t,0),s=this.dr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Z{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||j(t.br,e.br)}static Vr(t,e){return j(t.br,e.br)||M.comparator(t.key,e.key)}}/**
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
 */class ih{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new ot(Z.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Cc(o,e,s,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new Z(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.Fr(s),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Z(e,0),i=new Z(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([s,i],u=>{const c=this.Cr(u.br);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new ot(j);return e.forEach(i=>{const o=new Z(i,0),u=new Z(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{s=s.add(c.br)})}),R.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let o=s;M.isDocumentKey(o)||(o=o.child(""));const u=new Z(new M(o),0);let c=new ot(j);return this.vr.forEachWhile(f=>{const g=f.key.path;return!!s.isPrefixOf(g)&&(g.length===i&&(c=c.add(f.br)),!0)},u),R.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(s=>{const i=this.Cr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return R.forEach(e.mutations,i=>{const o=new Z(i.key,e.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=s})}Ln(t){}containsKey(t,e){const s=new Z(e,0),i=this.vr.firstAfterOrEqual(s);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class oh{constructor(t){this.Nr=t,this.docs=function(){return new Et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return R.resolve(s?s.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let s=Bn();return e.forEach(i=>{const o=this.docs.get(i);s=s.insert(i,o?o.document.mutableCopy():It.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let o=Bn();const u=e.path,c=new M(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||$u(ju(I),s)<=0||(i.has(I.key)||rs(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,s,i){L()}Lr(t,e){return R.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new ah(this)}getSize(t){return R.resolve(this.size)}}class ah extends Zc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(s)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class lh{constructor(t){this.persistence=t,this.Br=new ne(e=>es(e),ns),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.kr=0,this.qr=new os,this.targetCount=0,this.Qr=ge.qn()}forEachTarget(t,e){return this.Br.forEach((s,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new ge(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,s){let i=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&s.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const s=this.Br.get(e)||null;return R.resolve(s)}addMatchingKeys(t,e,s){return this.qr.mr(e,s),R.resolve()}removeMatchingKeys(t,e,s){this.qr.pr(e,s);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const s=this.qr.Sr(e);return R.resolve(s)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
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
 */class qo{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Xr(0),this.Ur=!1,this.Ur=!0,this.Wr=new sh,this.referenceDelegate=t(this),this.Gr=new lh(this),this.indexManager=new Kc,this.remoteDocumentCache=function(i){return new oh(i)}(s=>this.referenceDelegate.zr(s)),this.serializer=new Gc(e),this.jr=new nh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.Kr[t.toKey()];return s||(s=new ih(e,this.referenceDelegate),this.Kr[t.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,s){V("MemoryPersistence","Starting transaction:",t);const i=new uh(this.$r.next());return this.referenceDelegate.Hr(),s(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(s=>()=>s.containsKey(t,e)))}}class uh extends zu{constructor(t){super(),this.currentSequenceNumber=t}}class as{constructor(t){this.persistence=t,this.Zr=new os,this.Xr=null}static ei(t){return new as(t)}get ti(){if(this.Xr)return this.Xr;throw L()}addReference(t,e,s){return this.Zr.addReference(s,e),this.ti.delete(s.toString()),R.resolve()}removeReference(t,e,s){return this.Zr.removeReference(s,e),this.ti.add(s.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>s.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,s=>{const i=M.fromPath(s);return this.ni(t,i).next(o=>{o||e.removeEntry(i,G.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(s=>{s?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class qn{constructor(t,e){this.persistence=t,this.ri=new ne(s=>Ku(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=Yc(this,e)}static ei(t,e){return new qn(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>e.next(i=>s+i))}nr(t){let e=0;return this.er(t,s=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(s,i)=>this.ir(t,s,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(s++,o.removeEntry(u,G.min()))})).next(()=>o.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.ri.set(s,t.currentSequenceNumber),R.resolve()}removeReference(t,e,s){return this.ri.set(s,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Sn(t.data.value)),e}ir(t,e,s){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return R.resolve(i!==void 0&&i>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ls{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.Wi=s,this.Gi=i}static zi(t,e){let s=pt(),i=pt();for(const o of e.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ls(t,e.fromCache,s,i)}}/**
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
 */class ch{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class hh{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ml()?8:Gu(dl())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,s,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,s).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new ch;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,s,i){return s.documentReadCount<this.Ji?(le()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(le()<=U.DEBUG&&V("QueryEngine","Query:",Le(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Yi*i?(le()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):R.resolve())}Xi(t,e){if(xi(e))return R.resolve(null);let s=Jt(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=jr(e,null,"F"),s=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(o=>{const u=pt(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,s).next(f=>{const g=this.rs(e,c);return this.ss(e,g,u,f.readTime)?this.Xi(t,jr(e,null,"F")):this.os(t,g,e,f)}))})))}es(t,e,s,i){return xi(e)||i.isEqual(G.min())?R.resolve(null):this.Zi.getDocuments(t,s).next(o=>{const u=this.rs(e,o);return this.ss(e,u,s,i)?R.resolve(null):(le()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Le(e)),this.os(t,u,e,Bu(i,-1)).next(c=>c))})}rs(t,e){let s=new ot(pc(t));return e.forEach((i,o)=>{rs(t,o)&&(s=s.add(o))}),s}ss(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,s){return le()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Le(e)),this.Zi.getDocumentsMatchingQuery(t,e,Bt.min(),s)}os(t,e,s,i){return this.Zi.getDocumentsMatchingQuery(t,s,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class fh{constructor(t,e,s,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new Et(j),this.cs=new ne(o=>es(o),ns),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(s)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eh(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function dh(n,t,e,s){return new fh(n,t,e,s)}async function zo(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(s))).next(o=>{const u=[],c=[];let f=pt();for(const g of i){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(s,f).next(g=>({Ts:g,removedBatchIds:u,addedBatchIds:c}))})})}function ph(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const w=g.batch,b=w.keys();let C=R.resolve();return b.forEach(D=>{C=C.next(()=>I.getEntry(f,D)).next(O=>{const N=g.docVersions.get(D);J(N!==null),O.version.compareTo(N)<0&&(w.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,s,t,o).next(()=>o.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let f=pt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function mh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function gh(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class ji{constructor(){this.activeTargetIds=vc()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _h{constructor(){this._o=new ji,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,s){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new ji,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yh{uo(t){}shutdown(){}}/**
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
 */class $i{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bn=null;function Sr(){return bn===null?bn=function(){return 268435456+Math.round(2147483648*Math.random())}():bn++,"0x"+bn.toString(16)}/**
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
 */const Eh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const ft="WebChannelConnection";class Th extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,s,i,o,u){const c=Sr(),f=this.No(e,s.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${c}:`,f,i);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(g,o,u),this.Bo(e,f,g,i).then(I=>(V("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw kn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",i),I})}ko(e,s,i,o,u,c){return this.Oo(e,s,i,o,u)}Lo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ye}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,s){const i=Eh[e];return`${this.Fo}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,s,i){const o=Sr();return new Promise((u,c)=>{const f=new fo;f.setWithCredentials(!0),f.listenOnce(po.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pn.NO_ERROR:const I=f.getResponseJson();V(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Pn.TIMEOUT:V(ft,`RPC '${t}' ${o} timed out`),c(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Pn.HTTP_ERROR:const w=f.getStatus();if(V(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b?.error;if(C&&C.status&&C.message){const D=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(K)>=0?K:P.UNKNOWN}(C.status);c(new k(D,C.message))}else c(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new k(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{V(ft,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(i);V(ft,`RPC '${t}' ${o} sending request:`,i),f.send(e,"POST",g,s,15)})}qo(t,e,s){const i=Sr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=_o(),c=go(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Lo(f.initMessageHeaders,e,s),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ft,`Creating RPC '${t}' stream ${i}: ${I}`,f);const w=u.createWebChannel(I,f);let b=!1,C=!1;const D=new vh({Eo:N=>{C?V(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(b||(V(ft,`Opening RPC '${t}' stream ${i} transport.`),w.open(),b=!0),V(ft,`RPC '${t}' stream ${i} sending:`,N),w.send(N))},Ao:()=>w.close()}),O=(N,K,H)=>{N.listen(K,Q=>{try{H(Q)}catch(at){setTimeout(()=>{throw at},0)}})};return O(w,Fe.EventType.OPEN,()=>{C||(V(ft,`RPC '${t}' stream ${i} transport opened.`),D.So())}),O(w,Fe.EventType.CLOSE,()=>{C||(C=!0,V(ft,`RPC '${t}' stream ${i} transport closed`),D.Do())}),O(w,Fe.EventType.ERROR,N=>{C||(C=!0,kn(ft,`RPC '${t}' stream ${i} transport errored:`,N),D.Do(new k(P.UNAVAILABLE,"The operation could not be completed")))}),O(w,Fe.EventType.MESSAGE,N=>{var K;if(!C){const H=N.data[0];J(!!H);const Q=H,at=Q?.error||((K=Q[0])===null||K===void 0?void 0:K.error);if(at){V(ft,`RPC '${t}' stream ${i} received error:`,at);const qt=at.status;let _t=function(m){const _=Y[m];if(_!==void 0)return Nc(_)}(qt),E=at.message;_t===void 0&&(_t=P.INTERNAL,E="Unknown error status: "+qt+" with message "+at.message),C=!0,D.Do(new k(_t,E)),w.close()}else V(ft,`RPC '${t}' stream ${i} received:`,H),D.vo(H)}}),O(c,mo.STAT_EVENT,N=>{N.stat===Lr.PROXY?V(ft,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===Lr.NOPROXY&&V(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function Cr(){return typeof document<"u"?document:null}/**
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
 */function Wn(n){return new xc(n,!0)}/**
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
 */class Go{constructor(t,e,s=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=s,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Ih{constructor(t,e,s,i,o,u,c,f){this.li=t,this.Yo=s,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Go(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Zt(e.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Xo===e&&this.I_(s,i)},s=>{t(()=>{const i=new k(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(i)})})}I_(t,e){const s=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{s(()=>this.E_(i))}),this.stream.onMessage(i=>{s(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ah extends Ih{constructor(t,e,s,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=jc(t.writeResults,t.commitTime),s=he(t.commitTime);return this.listener.y_(s,e)}w_(){const t={};t.database=Fc(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Bc(this.serializer,s))};this.c_(e)}}/**
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
 */class wh extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,qr(e,s),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}ko(t,e,s,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,qr(e,s),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Rh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Zt(e),this.C_=!1):V("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class bh{constructor(t,e,s,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{s.enqueueAndForget(async()=>{tn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=q(f);g.k_.add(4),await Ze(g),g.K_.set("Unknown"),g.k_.delete(4),await Xn(g)}(this))})}),this.K_=new Rh(s,i)}}async function Xn(n){if(tn(n))for(const t of n.q_)await t(!0)}async function Ze(n){for(const t of n.q_)await t(!1)}function tn(n){return q(n).k_.size===0}async function Ho(n,t,e){if(!Je(t))throw t;n.k_.add(1),await Ze(n),n.K_.set("Offline"),e||(e=()=>mh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Xn(n)})}function Ko(n,t){return t().catch(e=>Ho(n,e,t))}async function Jn(n){const t=q(n),e=$t(t);let s=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Ph(t);)try{const i=await gh(t.localStore,s);if(i===null){t.L_.length===0&&e.a_();break}s=i.batchId,Sh(t,i)}catch(i){await Ho(t,i)}Qo(t)&&Wo(t)}function Ph(n){return tn(n)&&n.L_.length<10}function Sh(n,t){n.L_.push(t);const e=$t(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Qo(n){return tn(n)&&!$t(n).i_()&&n.L_.length>0}function Wo(n){$t(n).start()}async function Ch(n){$t(n).w_()}async function Vh(n){const t=$t(n);for(const e of n.L_)t.g_(e.mutations)}async function Dh(n,t,e){const s=n.L_.shift(),i=is.from(s,t,e);await Ko(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Jn(n)}async function Nh(n,t){t&&$t(n).f_&&await async function(s,i){if(function(u){return Dc(u)&&u!==P.ABORTED}(i.code)){const o=s.L_.shift();$t(s).__(),await Ko(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Jn(s)}}(n,t),Qo(n)&&Wo(n)}async function qi(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=tn(e);e.k_.add(3),await Ze(e),s&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Xn(e)}async function xh(n,t){const e=q(n);t?(e.k_.delete(2),await Xn(e)):t||(e.k_.add(2),await Ze(e),e.K_.set("Unknown"))}function $t(n){return n.G_||(n.G_=function(e,s,i){const o=q(e);return o.b_(),new Ah(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Ch.bind(null,n),po:Nh.bind(null,n),p_:Vh.bind(null,n),y_:Dh.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await Jn(n)):(await n.G_.stop(),n.L_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class us{constructor(t,e,s,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,o){const u=Date.now()+s,c=new us(t,e,u,i,o);return c.start(s),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xo(n,t){if(Zt("AsyncQueue",`${t}: ${n}`),Je(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class kh{constructor(){this.queries=zi(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,s){const i=q(e),o=i.queries;i.queries=zi(),o.forEach((u,c)=>{for(const f of c.J_)f.onError(s)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function zi(){return new ne(n=>Co(n),So)}function Oh(n){n.X_.forEach(t=>{t.next()})}var Gi,Hi;(Hi=Gi||(Gi={})).na="default",Hi.Cache="cache";class Mh{constructor(t,e,s,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ne(c=>Co(c),So),this.Oa=new Map,this.Na=new Set,this.La=new Et(M.comparator),this.Ba=new Map,this.ka=new os,this.qa={},this.Qa=new Map,this.Ka=ge.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Lh(n,t,e){const s=jh(n);try{const i=await function(u,c){const f=q(u),g=et.now(),I=c.reduce((C,D)=>C.add(D.key),pt());let w,b;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Bn(),O=pt();return f.hs.getEntries(C,I).next(N=>{D=N,D.forEach((K,H)=>{H.isValidDocument()||(O=O.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,D)).next(N=>{w=N;const K=[];for(const H of c){const Q=Pc(H,w.get(H.key).overlayedDocument);Q!=null&&K.push(new re(H.key,Q,To(Q.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,g,K,c)}).next(N=>{b=N;const K=N.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(C,N.batchId,K)})}).then(()=>({batchId:b.batchId,changes:Do(w)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(u,c,f){let g=u.qa[u.currentUser.toKey()];g||(g=new Et(j)),g=g.insert(c,f),u.qa[u.currentUser.toKey()]=g}(s,i.batchId,e),await Yn(s,i.changes),await Jn(s.remoteStore)}catch(i){const o=Xo(i,"Failed to persist write");e.reject(o)}}function Ki(n,t,e){const s=q(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const f=q(u);f.onlineState=c;let g=!1;f.queries.forEach((I,w)=>{for(const b of w.J_)b.ea(c)&&(g=!0)}),g&&Oh(f)}(s.eventManager,t),i.length&&s.Ma.R_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Fh(n,t){const e=q(n),s=t.batch.batchId;try{const i=await ph(e.localStore,t);Yo(e,s,null),Jo(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Yn(e,i)}catch(i){await Wr(i)}}async function Uh(n,t,e){const s=q(n);try{const i=await function(u,c){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(w=>(J(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(s.localStore,t);Yo(s,t,e),Jo(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Yn(s,i)}catch(i){await Wr(i)}}function Jo(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function Yo(n,t,e){const s=q(n);let i=s.qa[s.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),s.qa[s.currentUser.toKey()]=i}}async function Yn(n,t,e){const s=q(n),i=[],o=[],u=[];s.xa.isEmpty()||(s.xa.forEach((c,f)=>{u.push(s.Ua(f,t,e).then(g=>{var I;if((g||e)&&s.isPrimaryClient){const w=g?!g.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;s.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){i.push(g);const w=ls.zi(f.targetId,g);o.push(w)}}))}),await Promise.all(u),s.Ma.R_(i),await async function(f,g){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,b=>R.forEach(b.Wi,C=>I.persistence.referenceDelegate.addReference(w,b.targetId,C)).next(()=>R.forEach(b.Gi,C=>I.persistence.referenceDelegate.removeReference(w,b.targetId,C)))))}catch(w){if(!Je(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const b=w.targetId;if(!w.fromCache){const C=I.us.get(b),D=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(D);I.us=I.us.insert(b,O)}}}(s.localStore,o))}async function Bh(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const s=await zo(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(f=>{f.reject(new k(P.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Yn(e,s.Ts)}}function jh(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uh.bind(null,t),t}class zn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Wn(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return dh(this.persistence,new hh,t.initialUser,this.serializer)}ja(t){return new qo(as.ei,this.serializer)}za(t){return new _h}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zn.provider={build:()=>new zn};class $h extends zn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){J(this.persistence.referenceDelegate instanceof qn);const s=this.persistence.referenceDelegate.garbageCollector;return new Xc(s,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new qo(s=>qn.ei(s,e),this.serializer)}}class Gr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ki(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bh.bind(null,this.syncEngine),await xh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kh}()}createDatastore(t){const e=Wn(t.databaseInfo.databaseId),s=function(o){return new Th(o)}(t.databaseInfo);return function(o,u,c,f){return new wh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,o,u,c){return new bh(s,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ki(this.syncEngine,e,0),function(){return $i.p()?new $i:new yh}())}createSyncEngine(t,e){return function(i,o,u,c,f,g,I){const w=new Mh(i,o,u,c,f,g);return I&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=q(i);V("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Ze(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Gr.provider={build:()=>new Gr};/**
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
 */class qh{constructor(t,e,s,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Eo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async u=>{V("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(s,u=>(V("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Xo(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Vr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Qi(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zh(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>qi(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>qi(t.remoteStore,i)),n._onlineComponents=t}async function zh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Vr(n,new zn)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Vr(n,new $h(void 0));return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Qi(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Qi(n,new Gr))),n._onlineComponents}function Hh(n){return Gh(n).then(t=>t.syncEngine)}/**
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
 */function Zo(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Wi=new Map;/**
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
 */function ta(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Kh(n,t,e,s){if(t===!0&&s===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Xi(n){if(!M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ji(n){if(M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function ea(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=cs(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Yi{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Kh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zo((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zn{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yi(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Du;switch(s.type){case"firstParty":return new Ou(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Wi.get(e);s&&(V("ComponentProvider","Removing Datastore"),Wi.delete(e),s.terminate())}(this),Promise.resolve()}}function Qh(n,t,e,s={}){var i;const o=(n=ea(n,Zn))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),s.mockUserToken){let c,f;if(typeof s.mockUserToken=="string")c=s.mockUserToken,f=dt.MOCK_USER;else{c=fl(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(g)}n._authCredentials=new Nu(new yo(c,f))}}/**
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
 */class hs{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new hs(this.firestore,t,this._query)}}class Dt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Ut extends hs{constructor(t,e,s){super(t,e,hc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new M(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function Wh(n,t,...e){if(n=qe(n),ta("collection","path",t),n instanceof Zn){const s=X.fromString(t,...e);return Ji(s),new Ut(n,null,s)}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(t,...e));return Ji(s),new Ut(n.firestore,null,s)}}function Xh(n,t,...e){if(n=qe(n),arguments.length===1&&(t=Eo.newId()),ta("doc","path",t),n instanceof Zn){const s=X.fromString(t,...e);return Xi(s),new Dt(n,null,new M(s))}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(t,...e));return Xi(s),new Dt(n.firestore,n instanceof Ut?n.converter:null,new M(s))}}/**
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
 */class Zi{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Go(this,"async_queue_retry"),this.fu=()=>{const s=Cr();s&&V("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=t;const e=Cr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Cr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new Xt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Je(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(s=>{this.Au=s,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(s);throw Zt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ru=!1,s))));return this.gu=e,e}enqueueAfterDelay(t,e,s){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=us.createAndSchedule(this,t,e,s,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&L()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class na extends Zn{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Zi,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zi(t),this._firestoreClient=void 0,await t}}}function Jh(n,t){const e=typeof n=="object"?n:Tu(),s=typeof n=="string"?n:"(default)",i=_u(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=cl("firestore");o&&Qh(i,...o)}return i}function Yh(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zh(n),n._firestoreClient}function Zh(n){var t,e,s;const i=n._freezeSettings(),o=function(c,f,g,I){return new Ju(c,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Zo(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new qh(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c?._online.build();return{_offline:c?._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(Rt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xe(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ra{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class sa{constructor(t){this._methodName=t}}/**
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
 */class ia{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */class oa{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const tf=/^__.*__$/;class ef{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ye(t,this.data,e,this.fieldTransforms)}}function aa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class fs{constructor(t,e,s,i,o,u){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new fs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:s,Nu:!1});return i.Lu(t),i}Bu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:s,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Gn(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(aa(this.Mu)&&tf.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class nf{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Wn(t)}$u(t,e,s,i=!1){return new fs({Mu:t,methodName:e,Ku:s,path:it.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(n){const t=n._freezeSettings(),e=Wn(n._databaseId);return new nf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sf(n,t,e,s,i,o={}){const u=n.$u(o.merge||o.mergeFields?2:0,t,e,i);ha("Data must be an object, but it was:",u,s);const c=ua(s,u);let f,g;if(o.merge)f=new wt(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const b=of(t,w,e);if(!u.contains(b))throw new k(P.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);uf(I,b)||I.push(b)}f=new wt(I),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new ef(new At(c),f,g)}function la(n,t){if(ca(n=qe(n)))return ha("Unsupported field value:",t,n),ua(n,t);if(n instanceof sa)return function(s,i){if(!aa(i.Mu))throw i.qu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(s,i){const o=[];let u=0;for(const c of s){let f=la(c,i.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(s,i){if((s=qe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Tc(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=et.fromDate(s);return{timestampValue:$r(i.serializer,o)}}if(s instanceof et){const o=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$r(i.serializer,o)}}if(s instanceof ia)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xe)return{bytesValue:kc(i.serializer,s._byteString)};if(s instanceof Dt){const o=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:jo(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof oa)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.qu("VectorValues must only contain numeric values.");return ss(c.serializer,f)})}}}}}}(s,i);throw i.qu(`Unsupported field value: ${cs(s)}`)}(n,t)}function ua(n,t){const e={};return vo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(n,(s,i)=>{const o=la(i,t.Ou(s));o!=null&&(e[s]=o)}),{mapValue:{fields:e}}}function ca(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof ia||n instanceof Xe||n instanceof Dt||n instanceof sa||n instanceof oa)}function ha(n,t,e){if(!ca(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=cs(e);throw s==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+s)}}function of(n,t,e){if((t=qe(t))instanceof ra)return t._internalPath;if(typeof t=="string")return lf(n,t);throw Gn("Field path arguments must be of type string or ",n,!1,void 0,e)}const af=new RegExp("[~\\*/\\[\\]]");function lf(n,t,e){if(t.search(af)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ra(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gn(n,t,e,s,i){const o=s&&!s.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${s}`),u&&(f+=` in document ${i}`),f+=")"),new k(P.INVALID_ARGUMENT,c+n+f)}function uf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function cf(n,t,e){let s;return s=n?n.toFirestore(t):t,s}function hf(n,t){const e=ea(n.firestore,na),s=Xh(n),i=cf(n.converter,t);return ff(e,[sf(rf(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Vt.exists(!1))]).then(()=>s)}function ff(n,t){return function(s,i){const o=new Xt;return s.asyncQueue.enqueueAndForget(async()=>Lh(await Hh(s),i,o)),o.promise}(Yh(n),t)}(function(t,e=!0){(function(i){ye=i})(vu),xn(new ze("firestore",(s,{instanceIdentifier:i,options:o})=>{const u=s.getProvider("app").getImmediate(),c=new na(new xu(s.getProvider("auth-internal")),new Lu(s.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(g.options.projectId,I)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ce(wi,"4.7.5",t),ce(wi,"4.7.5","esm2017")})();var df="firebase",pf="11.1.0";/**
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
 */ce(df,pf,"app");const mf={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},gf=lo(mf),_f=Jh(gf),yf=[{icon:Ka,href:"https://github.com/TheDEV111",label:"GitHub"},{icon:Qa,href:"https://linkedin.com/in/henry-agukwe",label:"LinkedIn"},{icon:Wa,href:"https://x.com/@boy_gene_us",label:"Twitter"},{icon:to,href:"mailto:Henryagukwe01@gmail.com",label:"Email"}],Ef=yf.slice(0,3),vf=()=>{const[n,t]=Tn.useState({name:"",email:"",subject:"",message:""}),[e,s]=Tn.useState({}),[i,o]=Tn.useState(!1),[u,c]=Tn.useState(null),f=[{icon:to,title:"Email",content:"Henryagukwe01@gmail.com"},{icon:Ya,title:"Phone",content:"+234 903 440 0634"},{icon:Za,title:"Location",content:"Lagos, Nigeria"}],g=()=>{const b={};return(!n.name.trim()||n.name.trim().length<2)&&(b.name="Required"),(!n.email.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email))&&(b.email="Invalid email"),(!n.subject.trim()||n.subject.trim().length<3)&&(b.subject="Required"),(!n.message.trim()||n.message.trim().length<10)&&(b.message="Too short"),s(b),Object.keys(b).length===0},I=b=>{const{name:C,value:D}=b.target;t(O=>({...O,[C]:D})),e[C]&&s(O=>({...O,[C]:void 0}))},w=async b=>{if(b.preventDefault(),!!g()){o(!0),c(null);try{await hf(Wh(_f,"contacts"),{...n,timestamp:new Date().toISOString(),read:!1}),c("success"),t({name:"",email:"",subject:"",message:""})}catch(C){console.error("Error submitting form:",C),c("error")}finally{o(!1)}}};return x.jsx("div",{className:"min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 lg:px-24",children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsxs("div",{className:"mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12",children:[x.jsx("div",{children:x.jsxs("h1",{className:"font-display text-6xl md:text-8xl uppercase tracking-tighter text-white leading-none",children:["LET'S",x.jsx("br",{}),x.jsx("span",{className:"text-brand",children:"TALK"})]})}),x.jsx("p",{className:"font-sans text-zinc-400 max-w-sm uppercase text-sm tracking-widest font-semibold leading-relaxed",children:"HAVE A PROJECT IN MIND? LET'S DISCUSS HOW WE CAN WORK TOGETHER TO BRING YOUR IDEAS TO LIFE."})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-16",children:[x.jsxs("div",{className:"lg:col-span-2 space-y-12",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"font-display text-4xl uppercase tracking-tighter text-white mb-8",children:"Direct Contact"}),x.jsx("div",{className:"space-y-8",children:f.map(b=>x.jsxs("div",{className:"flex items-start gap-6 border-l-4 border-brand pl-6",children:[x.jsx(b.icon,{className:"w-6 h-6 text-brand shrink-0 mt-1"}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-sans text-white text-xs uppercase tracking-widest font-bold mb-1",children:b.title}),x.jsx("p",{className:"font-sans text-zinc-400",children:b.content})]})]},b.title))})]}),x.jsxs("div",{className:"pt-8 border-t border-zinc-900",children:[x.jsx("h2",{className:"font-display text-4xl uppercase tracking-tighter text-white mb-8",children:"Socials"}),x.jsx("div",{className:"flex gap-4",children:Ef.map(b=>x.jsx("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 border-2 border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-brand hover:border-brand transition-all duration-300",children:x.jsx(b.icon,{className:"w-6 h-6"})},b.label))})]})]}),x.jsx("div",{className:"lg:col-span-3 bg-zinc-900/30 p-8 sm:p-12 border border-zinc-800",children:x.jsxs("form",{onSubmit:w,className:"space-y-8",noValidate:!0,children:[x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{htmlFor:"name",className:"font-sans text-brand text-xs uppercase tracking-widest font-bold",children:"Name"}),x.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:I,className:`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${e.name?"border-red-500":"border-zinc-700 focus:border-brand"}`,placeholder:"John Doe"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{htmlFor:"email",className:"font-sans text-brand text-xs uppercase tracking-widest font-bold",children:"Email"}),x.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:I,className:`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${e.email?"border-red-500":"border-zinc-700 focus:border-brand"}`,placeholder:"john@example.com"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{htmlFor:"subject",className:"font-sans text-brand text-xs uppercase tracking-widest font-bold",children:"Subject"}),x.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:I,className:`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${e.subject?"border-red-500":"border-zinc-700 focus:border-brand"}`,placeholder:"Project Inquiry"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{htmlFor:"message",className:"font-sans text-brand text-xs uppercase tracking-widest font-bold",children:"Message"}),x.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:I,rows:4,className:`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors resize-none ${e.message?"border-red-500":"border-zinc-700 focus:border-brand"}`,placeholder:"Tell me about your project..."})]}),x.jsxs("div",{className:"flex items-center justify-between pt-8",children:[x.jsxs("button",{type:"submit",disabled:i,className:"bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-white transition-colors flex items-center gap-3 disabled:opacity-50",children:[x.jsx(tl,{className:"w-5 h-5"}),i?"Sending...":"Send Message"]}),u==="success"&&x.jsx("p",{className:"text-brand font-sans text-sm tracking-widest uppercase font-bold",children:"Sent Successfully!"}),u==="error"&&x.jsx("p",{className:"text-red-500 font-sans text-sm tracking-widest uppercase font-bold",children:"Failed to send."})]})]})})]})]})})},Cf=()=>x.jsxs("div",{className:"min-h-screen bg-black",children:[x.jsx(Xa,{}),x.jsx("main",{className:"pt-0 min-h-screen",children:x.jsx(vf,{})}),x.jsx(Ja,{})]});export{Cf as default};
