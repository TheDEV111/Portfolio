import{j as N,m as G}from"./animations-BKTe7w95.js";import{N as Qa,F as Wa}from"./Footer-BBNw3X-y.js";import{r as wr}from"./react-vendor-BvOuhz89.js";import{M as ms,P as Xa,l as Ja,U as Ya,m as Za,n as tl,G as el,L as nl,a as rl}from"./icons-CXIZk87G.js";import"./router-JQeOdLbu.js";var ps={};/**
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
 */const no=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},il=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let P=(c&15)<<2|g>>6,C=g&63;f||(C=64,u||(P=64)),i.push(e[I],e[w],e[P],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(no(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):il(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||g==null||w==null)throw new sl;const P=o<<2|c>>4;if(i.push(P),g!==64){const C=c<<4&240|g>>2;if(i.push(C),w!==64){const V=g<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(n){const t=no(n);return ro.encodeByteArray(t,!0)},Dn=function(n){return ol(n).replace(/\./g,"")},al=function(n){try{return ro.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ul=()=>ll().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof ps>"u")return;const n=ps.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&al(n[1]);return t&&JSON.parse(t)},Kr=()=>{try{return ul()||cl()||hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fl=n=>{var t,e;return(e=(t=Kr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},dl=n=>{const t=fl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},io=()=>{var n;return(n=Kr())===null||n===void 0?void 0:n.config};/**
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
 */class ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function pl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dn(JSON.stringify(e)),Dn(JSON.stringify(u)),""].join(".")}/**
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
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){var n;const t=(n=Kr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yl(){return!_l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function El(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Tl="FirebaseError";class ye extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Tl,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Il(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ye(s,c,i)}}function Il(n,t){return n.replace(Al,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Al=/\{\$([^}]+)}/g;function Nr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(gs(o)&&gs(u)){if(!Nr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function gs(n){return n!==null&&typeof n=="object"}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class wl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new ml;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bl(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(n){return n===Wt?void 0:n}function bl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Sl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Cl=U.INFO,Vl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Dl=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Vl[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oo{constructor(t){this.name=t,this._logLevel=Cl,this._logHandler=Dl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Nl=(n,t)=>t.some(e=>n instanceof e);let _s,ys;function xl(){return _s||(_s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return ys||(ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ao=new WeakMap,xr=new WeakMap,lo=new WeakMap,Rr=new WeakMap,Qr=new WeakMap;function Ol(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ft(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ao.set(e,n)}).catch(()=>{}),Qr.set(t,n),t}function Ml(n){if(xr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});xr.set(n,t)}let kr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return xr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||lo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ll(n){kr=n(kr)}function Fl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(br(this),t,...e);return lo.set(i,t.sort?t.sort():[t]),Ft(i)}:kl().includes(n)?function(...t){return n.apply(br(this),t),Ft(ao.get(this))}:function(...t){return Ft(n.apply(br(this),t))}}function Ul(n){return typeof n=="function"?Fl(n):(n instanceof IDBTransaction&&Ml(n),Nl(n,xl())?new Proxy(n,kr):n)}function Ft(n){if(n instanceof IDBRequest)return Ol(n);if(Rr.has(n))return Rr.get(n);const t=Ul(n);return t!==n&&(Rr.set(n,t),Qr.set(t,n)),t}const br=n=>Qr.get(n);function Bl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Ft(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Ft(u.result),f.oldVersion,f.newVersion,Ft(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const jl=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],Pr=new Map;function vs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Pr.get(t))return Pr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=$l.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||jl.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),s&&f.done]))[0]};return Pr.set(t,o),o}Ll(n=>({...n,get:(t,e,i)=>vs(t,e)||n.get(t,e,i),has:(t,e)=>!!vs(t,e)||n.has(t,e)}));/**
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
 */class ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function zl(n){const t=n.getComponent();return t?.type==="VERSION"}const Or="@firebase/app",Es="0.10.17";/**
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
 */const xt=new oo("@firebase/app"),Gl="@firebase/app-compat",Hl="@firebase/analytics-compat",Kl="@firebase/analytics",Ql="@firebase/app-check-compat",Wl="@firebase/app-check",Xl="@firebase/auth",Jl="@firebase/auth-compat",Yl="@firebase/database",Zl="@firebase/data-connect",tu="@firebase/database-compat",eu="@firebase/functions",nu="@firebase/functions-compat",ru="@firebase/installations",iu="@firebase/installations-compat",su="@firebase/messaging",ou="@firebase/messaging-compat",au="@firebase/performance",lu="@firebase/performance-compat",uu="@firebase/remote-config",cu="@firebase/remote-config-compat",hu="@firebase/storage",fu="@firebase/storage-compat",du="@firebase/firestore",mu="@firebase/vertexai",pu="@firebase/firestore-compat",gu="firebase",_u="11.1.0";/**
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
 */const Mr="[DEFAULT]",yu={[Or]:"fire-core",[Gl]:"fire-core-compat",[Kl]:"fire-analytics",[Hl]:"fire-analytics-compat",[Wl]:"fire-app-check",[Ql]:"fire-app-check-compat",[Xl]:"fire-auth",[Jl]:"fire-auth-compat",[Yl]:"fire-rtdb",[Zl]:"fire-data-connect",[tu]:"fire-rtdb-compat",[eu]:"fire-fn",[nu]:"fire-fn-compat",[ru]:"fire-iid",[iu]:"fire-iid-compat",[su]:"fire-fcm",[ou]:"fire-fcm-compat",[au]:"fire-perf",[lu]:"fire-perf-compat",[uu]:"fire-rc",[cu]:"fire-rc-compat",[hu]:"fire-gcs",[fu]:"fire-gcs-compat",[du]:"fire-fst",[pu]:"fire-fst-compat",[mu]:"fire-vertex","fire-js":"fire-js",[gu]:"fire-js-all"};/**
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
 */const Nn=new Map,vu=new Map,Lr=new Map;function Ts(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if(Lr.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;Lr.set(t,n);for(const e of Nn.values())Ts(e,n);for(const e of vu.values())Ts(e,n);return!0}function Eu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Tu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new so("app","Firebase",Tu);/**
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
 */class Iu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const Au=_u;function uo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(e||(e=io()),!e)throw Ut.create("no-options");const o=Nn.get(s);if(o){if(Nr(e,o.options)&&Nr(i,o.config))return o;throw Ut.create("duplicate-app",{appName:s})}const u=new Pl(s);for(const f of Lr.values())u.addComponent(f);const c=new Iu(e,i,u);return Nn.set(s,c),c}function wu(n=Mr){const t=Nn.get(n);if(!t&&n===Mr&&io())return uo();if(!t)throw Ut.create("no-app",{appName:n});return t}function he(n,t,e){var i;let s=(i=yu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(c.join(" "));return}xn(new Ge(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ru="firebase-heartbeat-database",bu=1,He="firebase-heartbeat-store";let Sr=null;function co(){return Sr||(Sr=Bl(Ru,bu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(He)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Sr}async function Pu(n){try{const e=(await co()).transaction(He),i=await e.objectStore(He).get(ho(n));return await e.done,i}catch(t){if(t instanceof ye)xt.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:t?.message});xt.warn(e.message)}}}async function Is(n,t){try{const i=(await co()).transaction(He,"readwrite");await i.objectStore(He).put(t,ho(n)),await i.done}catch(e){if(e instanceof ye)xt.warn(e.message);else{const i=Ut.create("idb-set",{originalErrorMessage:e?.message});xt.warn(i.message)}}}function ho(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Su=1024,Cu=30*24*60*60*1e3;class Vu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=As();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Cu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){xt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=As(),{heartbeatsToSend:i,unsentEntries:s}=Du(this._heartbeatsCache.heartbeats),o=Dn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function As(){return new Date().toISOString().substring(0,10)}function Du(n,t=Su){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),ws(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ws(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Nu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?El().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pu(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Is(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Is(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ws(n){return Dn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xu(n){xn(new Ge("platform-logger",t=>new ql(t),"PRIVATE")),xn(new Ge("heartbeat",t=>new Vu(t),"PRIVATE")),he(Or,Es,n),he(Or,Es,"esm2017"),he("fire-js","")}xu("");var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(_,y,T){for(var m=Array(arguments.length-2),St=2;St<arguments.length;St++)m[St-2]=arguments[St];return d.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,p){p||(p=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)_[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],y=v.g[2];var T=v.g[3],m=d+(T^p&(y^T))+_[0]+3614090360&4294967295;d=p+(m<<7&4294967295|m>>>25),m=T+(y^d&(p^y))+_[1]+3905402710&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(p^T&(d^p))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(d^y&(T^d))+_[3]+3250441966&4294967295,p=y+(m<<22&4294967295|m>>>10),m=d+(T^p&(y^T))+_[4]+4118548399&4294967295,d=p+(m<<7&4294967295|m>>>25),m=T+(y^d&(p^y))+_[5]+1200080426&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(p^T&(d^p))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(d^y&(T^d))+_[7]+4249261313&4294967295,p=y+(m<<22&4294967295|m>>>10),m=d+(T^p&(y^T))+_[8]+1770035416&4294967295,d=p+(m<<7&4294967295|m>>>25),m=T+(y^d&(p^y))+_[9]+2336552879&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(p^T&(d^p))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(d^y&(T^d))+_[11]+2304563134&4294967295,p=y+(m<<22&4294967295|m>>>10),m=d+(T^p&(y^T))+_[12]+1804603682&4294967295,d=p+(m<<7&4294967295|m>>>25),m=T+(y^d&(p^y))+_[13]+4254626195&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(p^T&(d^p))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=p+(d^y&(T^d))+_[15]+1236535329&4294967295,p=y+(m<<22&4294967295|m>>>10),m=d+(y^T&(p^y))+_[1]+4129170786&4294967295,d=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(d^p))+_[6]+3225465664&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^p&(T^d))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^d&(y^T))+_[0]+3921069994&4294967295,p=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(p^y))+_[5]+3593408605&4294967295,d=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(d^p))+_[10]+38016083&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^p&(T^d))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^d&(y^T))+_[4]+3889429448&4294967295,p=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(p^y))+_[9]+568446438&4294967295,d=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(d^p))+_[14]+3275163606&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^p&(T^d))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^d&(y^T))+_[8]+1163531501&4294967295,p=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(p^y))+_[13]+2850285829&4294967295,d=p+(m<<5&4294967295|m>>>27),m=T+(p^y&(d^p))+_[2]+4243563512&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^p&(T^d))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=p+(T^d&(y^T))+_[12]+2368359562&4294967295,p=y+(m<<20&4294967295|m>>>12),m=d+(p^y^T)+_[5]+4294588738&4294967295,d=p+(m<<4&4294967295|m>>>28),m=T+(d^p^y)+_[8]+2272392833&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^p)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^d)+_[14]+4259657740&4294967295,p=y+(m<<23&4294967295|m>>>9),m=d+(p^y^T)+_[1]+2763975236&4294967295,d=p+(m<<4&4294967295|m>>>28),m=T+(d^p^y)+_[4]+1272893353&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^p)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^d)+_[10]+3200236656&4294967295,p=y+(m<<23&4294967295|m>>>9),m=d+(p^y^T)+_[13]+681279174&4294967295,d=p+(m<<4&4294967295|m>>>28),m=T+(d^p^y)+_[0]+3936430074&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^p)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^d)+_[6]+76029189&4294967295,p=y+(m<<23&4294967295|m>>>9),m=d+(p^y^T)+_[9]+3654602809&4294967295,d=p+(m<<4&4294967295|m>>>28),m=T+(d^p^y)+_[12]+3873151461&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^p)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=p+(y^T^d)+_[2]+3299628645&4294967295,p=y+(m<<23&4294967295|m>>>9),m=d+(y^(p|~T))+_[0]+4096336452&4294967295,d=p+(m<<6&4294967295|m>>>26),m=T+(p^(d|~y))+_[7]+1126891415&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~p))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~d))+_[5]+4237533241&4294967295,p=y+(m<<21&4294967295|m>>>11),m=d+(y^(p|~T))+_[12]+1700485571&4294967295,d=p+(m<<6&4294967295|m>>>26),m=T+(p^(d|~y))+_[3]+2399980690&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~p))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~d))+_[1]+2240044497&4294967295,p=y+(m<<21&4294967295|m>>>11),m=d+(y^(p|~T))+_[8]+1873313359&4294967295,d=p+(m<<6&4294967295|m>>>26),m=T+(p^(d|~y))+_[15]+4264355552&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~p))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~d))+_[13]+1309151649&4294967295,p=y+(m<<21&4294967295|m>>>11),m=d+(y^(p|~T))+_[4]+4149444226&4294967295,d=p+(m<<6&4294967295|m>>>26),m=T+(p^(d|~y))+_[11]+3174756917&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~p))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=p+(T^(y|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=p;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<d;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var _=0;32>_;_+=8)v[p++]=this.g[d]>>>_&255;return v};function o(v,d){var p=c;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function u(v,d){this.h=d;for(var p=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==d||(p[y]=T,_=!1)}this.g=p}var c={};function f(v){return-128<=v&&128>v?o(v,function(d){return new u([d|0],0>d?-1:0)}):new u([v|0],0>v?-1:0)}function g(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return x(g(-v));for(var d=[],p=1,_=0;v>=p;_++)d[_]=v/p|0,p*=4294967296;return new u(d,0)}function I(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return x(I(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(d,8)),_=w,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),m=parseInt(v.substring(y,y+T),d);8>T?(T=g(Math.pow(d,T)),_=_.j(T).add(g(m))):(_=_.j(p),_=_.add(g(m)))}return _}var w=f(0),P=f(1),C=f(16777216);n=u.prototype,n.m=function(){if(O(this))return-x(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var _=this.i(p);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(O(this))return"-"+x(this).toString(v);for(var d=g(Math.pow(v,6)),p=this,_="";;){var y=lt(p,d).g;p=Q(p,y.j(d));var T=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=y,V(p))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=Q(this,v),O(v)?-1:V(v)?0:1};function x(v){for(var d=v.g.length,p=[],_=0;_<d;_++)p[_]=~v.g[_];return new u(p,~v.h).add(P)}n.abs=function(){return O(this)?x(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,p[y]=m<<16|T}return new u(p,p[p.length-1]&-2147483648?-1:0)};function Q(v,d){return v.add(x(d))}n.j=function(v){if(V(this)||V(v))return w;if(O(this))return O(v)?x(this).j(x(v)):x(x(this).j(v));if(O(v))return x(this.j(x(v)));if(0>this.l(C)&&0>v.l(C))return g(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],_=0;_<2*d;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,St=v.i(y)>>>16,Te=v.i(y)&65535;p[2*_+2*y]+=m*Te,K(p,2*_+2*y),p[2*_+2*y+1]+=T*Te,K(p,2*_+2*y+1),p[2*_+2*y+1]+=m*St,K(p,2*_+2*y+1),p[2*_+2*y+2]+=T*St,K(p,2*_+2*y+2)}for(_=0;_<d;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=d;_<2*d;_++)p[_]=0;return new u(p,0)};function K(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function W(v,d){this.g=v,this.h=d}function lt(v,d){if(V(d))throw Error("division by zero");if(V(v))return new W(w,w);if(O(v))return d=lt(x(v),d),new W(x(d.g),x(d.h));if(O(d))return d=lt(v,x(d)),new W(x(d.g),d.h);if(30<v.g.length){if(O(v)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var p=P,_=d;0>=_.l(v);)p=zt(p),_=zt(_);var y=yt(p,1),T=yt(_,1);for(_=yt(_,2),p=yt(p,2);!V(_);){var m=T.add(_);0>=m.l(v)&&(y=y.add(p),T=m),_=yt(_,1),p=yt(p,1)}return d=Q(v,y.j(d)),new W(y,d)}for(y=w;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(p),m=T.j(d);O(m)||0<m.l(v);)p-=_,T=g(p),m=T.j(d);V(T)&&(T=P),y=y.add(T),v=Q(v,m)}return new W(y,v)}n.A=function(v){return lt(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)&v.i(_);return new u(p,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)|v.i(_);return new u(p,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)^v.i(_);return new u(p,this.h^v.h)};function zt(v){for(var d=v.g.length+1,p=[],_=0;_<d;_++)p[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(p,v.h)}function yt(v,d){var p=d>>5;d%=32;for(var _=v.g.length-p,y=[],T=0;T<_;T++)y[T]=0<d?v.i(T+p)>>>d|v.i(T+p+1)<<32-d:v.i(T+p);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,fo=u}).apply(typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mo,Ue,po,Pn,Fr,go,_o,yo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var E=r[h];if(!(E in l))break t;l=l[E]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,E={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function P(r,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,P.apply(null,arguments)}function C(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,E,A){for(var S=Array(arguments.length-2),$=2;$<arguments.length;$++)S[$-2]=arguments[$];return a.prototype[E].apply(h,S)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function x(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const E=r.length||0,A=h.length||0;r.length=E+A;for(let S=0;S<A;S++)r[E+S]=h[S]}else r.push(h)}}class Q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function lt(r){return lt[" "](r),r}lt[" "]=function(){};var zt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function yt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function v(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(l in h)r[l]=h[l];for(let A=0;A<p.length;A++)l=p[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function m(){var r=tr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,l){const h=Te.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Te=new Q(()=>new da,r=>r.reset());class da{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ae=!1,tr=new St,mi=()=>{const r=c.Promise.resolve(void 0);Ie=()=>{r.then(ma)}};var ma=()=>{for(var r;r=m();){try{r.h.call(r.g)}catch(l){T(l)}var a=Te;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ae=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var pa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function we(r,a){if(ut.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(zt){t:{try{lt(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ga[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&we.aa.h.call(this)}}V(we,ut);var ga={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),_a=0;function ya(r,a,l,h,E){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=E,this.key=++_a,this.da=this.fa=!1}function rn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function sn(r){this.src=r,this.g={},this.h=0}sn.prototype.add=function(r,a,l,h,E){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var S=nr(r,a,h,E);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new ya(a,this.src,A,!!h,E),a.fa=l,r.push(a)),a};function er(r,a){var l=a.type;if(l in r.g){var h=r.g[l],E=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=E)&&Array.prototype.splice.call(h,E,1),A&&(rn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function nr(r,a,l,h){for(var E=0;E<r.length;++E){var A=r[E];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return E}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),ir={};function pi(r,a,l,h,E){if(Array.isArray(a)){for(var A=0;A<a.length;A++)pi(r,a[A],l,h,E);return null}return l=yi(l),r&&r[nn]?r.K(a,l,g(h)?!!h.capture:!1,E):va(r,a,l,!1,h,E)}function va(r,a,l,h,E,A){if(!a)throw Error("Invalid event type");var S=g(E)?!!E.capture:!!E,$=or(r);if($||(r[rr]=$=new sn(r)),l=$.add(a,l,h,S,A),l.proxy)return l;if(h=Ea(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)pa||(E=S),E===void 0&&(E=!1),r.addEventListener(a.toString(),h,E);else if(r.attachEvent)r.attachEvent(_i(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ea(){function r(l){return a.call(r.src,r.listener,l)}const a=Ta;return r}function gi(r,a,l,h,E){if(Array.isArray(a))for(var A=0;A<a.length;A++)gi(r,a[A],l,h,E);else h=g(h)?!!h.capture:!!h,l=yi(l),r&&r[nn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=nr(A,l,h,E),-1<l&&(rn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=or(r))&&(a=r.g[a.toString()],r=-1,a&&(r=nr(a,l,h,E)),(l=-1<r?a[r]:null)&&sr(l))}function sr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[nn])er(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(_i(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=or(a))?(er(l,r),l.h==0&&(l.src=null,a[rr]=null)):rn(r)}}}function _i(r){return r in ir?ir[r]:ir[r]="on"+r}function Ta(r,a){if(r.da)r=!0;else{a=new we(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&sr(r),r=l.call(h,a)}return r}function or(r){return r=r[rr],r instanceof sn?r:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(r){return typeof r=="function"?r:(r[ar]||(r[ar]=function(a){return r.handleEvent(a)}),r[ar])}function ct(){kt.call(this),this.i=new sn(this),this.M=this,this.F=null}V(ct,kt),ct.prototype[nn]=!0,ct.prototype.removeEventListener=function(r,a,l,h){gi(this,r,a,l,h)};function gt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new ut(a,r);else if(a instanceof ut)a.target=a.target||r;else{var E=a;a=new ut(h,r),_(a,E)}if(E=!0,l)for(var A=l.length-1;0<=A;A--){var S=a.g=l[A];E=on(S,h,!0,a)&&E}if(S=a.g=r,E=on(S,h,!0,a)&&E,E=on(S,h,!1,a)&&E,l)for(A=0;A<l.length;A++)S=a.g=l[A],E=on(S,h,!1,a)&&E}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)rn(l[h]);delete r.g[a],r.h--}}this.F=null},ct.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},ct.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function on(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==l){var $=S.listener,rt=S.ha||S.src;S.fa&&er(r.i,S),E=$.call(rt,h)!==!1&&E}}return E&&!h.defaultPrevented}function vi(r,a,l){if(typeof r=="function")l&&(r=P(r,l));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ei(r){r.g=vi(()=>{r.g=null,r.i&&(r.i=!1,Ei(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ia extends kt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(r){kt.call(this),this.h=r,this.g={}}V(Re,kt);var Ti=[];function Ii(r){yt(r.g,function(a,l){this.g.hasOwnProperty(l)&&sr(a)},r),r.g={}}Re.prototype.N=function(){Re.aa.N.call(this),Ii(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,Aa=c.JSON.parse,wa=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function ur(){}ur.prototype.h=null;function Ai(r){return r.h||(r.h=r.i())}function wi(){}var be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){ut.call(this,"d")}V(cr,ut);function hr(){ut.call(this,"c")}V(hr,ut);var Gt={},Ri=null;function an(){return Ri=Ri||new ct}Gt.La="serverreachability";function bi(r){ut.call(this,Gt.La,r)}V(bi,ut);function Pe(r){const a=an();gt(a,new bi(a))}Gt.STAT_EVENT="statevent";function Pi(r,a){ut.call(this,Gt.STAT_EVENT,r),this.stat=a}V(Pi,ut);function _t(r){const a=an();gt(a,new Pi(a,r))}Gt.Ma="timingevent";function Si(r,a){ut.call(this,Gt.Ma,r),this.size=a}V(Si,ut);function Se(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Ce(){this.g=!0}Ce.prototype.xa=function(){this.g=!1};function Ra(r,a,l,h,E,A){r.info(function(){if(r.g)if(A)for(var S="",$=A.split("&"),rt=0;rt<$.length;rt++){var B=$[rt].split("=");if(1<B.length){var ht=B[0];B=B[1];var ft=ht.split("_");S=2<=ft.length&&ft[1]=="type"?S+(ht+"="+B+"&"):S+(ht+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+l+`
`+S})}function ba(r,a,l,h,E,A,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+l+`
`+A+" "+S})}function se(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Sa(r,l)+(h?" "+h:"")})}function Pa(r,a){r.info(function(){return"TIMEOUT: "+a})}Ce.prototype.info=function(){};function Sa(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<E.length;S++)E[S]=""}}}}return lr(l)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function un(){}V(un,ur),un.prototype.g=function(){return new XMLHttpRequest},un.prototype.i=function(){return{}},fr=new un;function Ot(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new Re(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var Di={},dr={};function mr(r,a,l){r.L=1,r.v=dn(Ct(a)),r.m=l,r.P=!0,Ni(r,null)}function Ni(r,a){r.F=Date.now(),cn(r),r.A=Ct(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Hi(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Vi,r.g=cs(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Ia(P(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(Ti[0]=E.toString()),E=Ti);for(var A=0;A<E.length;A++){var S=pi(l,E[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Pe(),Ra(r.i,r.u,r.A,r.l,r.R,r.m)}Ot.prototype.ca=function(r){r=r.target;const a=this.M;a&&Vt(r)==3?a.j():this.Y(r)},Ot.prototype.Y=function(r){try{if(r==this.g)t:{const ft=Vt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Zi(this.g)))){this.J||ft!=4||a==7||(a==8||0>=le?Pe(3):Pe(2)),pr(this);var l=this.g.Z();this.X=l;e:if(xi(this)){var h=Zi(this.g);r="";var E=h.length,A=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Ve(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==E-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,ba(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,rt=this.g;if(($=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K($)){var B=$;break e}}B=null}if(l=B)se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,l);else{this.o=!1,this.s=3,_t(12),Ht(this),Ve(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<S.length;)if(It=Ca(this,S),It==dr){ft==4&&(this.s=4,_t(14),l=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Di){this.s=4,_t(15),se(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else se(this.i,this.l,It,null),gr(this,It);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||S.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)se(this.i,this.l,S,"[Invalid Chunked Response]"),Ht(this),Ve(this);else if(0<S.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Ir(ht),ht.M=!0,_t(11))}}else se(this.i,this.l,S,null),gr(this,S);ft==4&&Ht(this),this.o&&!this.J&&(ft==4?os(this.j,this):(this.o=!1,cn(this)))}else Ha(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Ht(this),Ve(this)}}}catch{}finally{}};function xi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ca(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?dr:(l=Number(a.substring(l,h)),isNaN(l)?Di:(h+=1,h+l>a.length?dr:(a=a.slice(h,h+l),r.C=h+l,a)))}Ot.prototype.cancel=function(){this.J=!0,Ht(this)};function cn(r){r.S=Date.now()+r.I,ki(r,r.I)}function ki(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Se(P(r.ba,r),a)}function pr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ot.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Pa(this.i,this.A),this.L!=2&&(Pe(),_t(17)),Ht(this),this.s=2,Ve(this)):ki(this,this.S-r)};function Ve(r){r.j.G==0||r.J||os(r.j,r)}function Ht(r){pr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Ii(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function gr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||_r(l.h,r))){if(!r.K&&_r(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)vn(l),_n(l);else break t;Tr(l),_t(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=Se(P(l.Za,l),6e3));if(1>=Li(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Qt(l,11)}else if((r.K||l.g==r)&&vn(l),!K(a))for(E=l.Da.g.parse(a),a=0;a<E.length;a++){let B=E[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ht=B[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const ft=B[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const le=B[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const It=r.g;if(It){const Tn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tn){var A=h.h;A.g||Tn.indexOf("spdy")==-1&&Tn.indexOf("quic")==-1&&Tn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(yr(A,A.h),A.h=null))}if(h.D){const Ar=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Ar&&(h.ya=Ar,z(h.I,h.D,Ar))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=r;if(h.qa=us(h,h.J?h.ia:null,h.W),S.K){Fi(h.h,S);var $=S,rt=h.L;rt&&($.I=rt),$.B&&(pr($),cn($)),h.g=S}else is(h);0<l.i.length&&yn(l)}else B[0]!="stop"&&B[0]!="close"||Qt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Qt(l,7):Er(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Pe(4)}catch{}}var Va=class{constructor(r,a){this.g=r,this.map=a}};function Oi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Li(r){return r.h?1:r.g?r.g.size:0}function _r(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function yr(r,a){r.g?r.g.add(a):r.h=a}function Fi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Oi.prototype.cancel=function(){if(this.i=Ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Ui(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function Da(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function Na(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function Bi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Na(r),h=Da(r),E=h.length,A=0;A<E;A++)a.call(void 0,h[A],l&&l[A],r)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xa(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),E=null;if(0<=h){var A=r[l].substring(0,h);E=r[l].substring(h+1)}else A=r[l];a(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Kt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Kt){this.h=r.h,hn(this,r.j),this.o=r.o,this.g=r.g,fn(this,r.s),this.l=r.l;var a=r.i,l=new xe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),$i(this,l),this.m=r.m}else r&&(a=String(r).match(ji))?(this.h=!1,hn(this,a[1]||"",!0),this.o=De(a[2]||""),this.g=De(a[3]||"",!0),fn(this,a[4]),this.l=De(a[5]||"",!0),$i(this,a[6]||"",!0),this.m=De(a[7]||"")):(this.h=!1,this.i=new xe(null,this.h))}Kt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ne(a,qi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ne(a,qi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Ne(l,l.charAt(0)=="/"?Ma:Oa,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Ne(l,Fa)),r.join("")};function Ct(r){return new Kt(r)}function hn(r,a,l){r.j=l?De(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function fn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function $i(r,a,l){a instanceof xe?(r.i=a,Ua(r.i,r.h)):(l||(a=Ne(a,La)),r.i=new xe(a,r.h))}function z(r,a,l){r.i.set(a,l)}function dn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function De(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ne(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,ka),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ka(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var qi=/[#\/\?@]/g,Oa=/[#\?:]/g,Ma=/[#\?]/g,La=/[#\?@]/g,Fa=/#/g;function xe(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Mt(r){r.g||(r.g=new Map,r.h=0,r.i&&xa(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=xe.prototype,n.add=function(r,a){Mt(this),this.i=null,r=oe(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function zi(r,a){Mt(r),a=oe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Gi(r,a){return Mt(r),a=oe(r,a),r.g.has(a)}n.forEach=function(r,a){Mt(this),this.g.forEach(function(l,h){l.forEach(function(E){r.call(a,E,h,this)},this)},this)},n.na=function(){Mt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const E=r[h];for(let A=0;A<E.length;A++)l.push(a[h])}return l},n.V=function(r){Mt(this);let a=[];if(typeof r=="string")Gi(this,r)&&(a=a.concat(this.g.get(oe(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Mt(this),this.i=null,r=oe(this,r),Gi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Hi(r,a,l){zi(r,a),0<l.length&&(r.i=null,r.g.set(oe(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var E=A;S[h]!==""&&(E+="="+encodeURIComponent(String(S[h]))),r.push(E)}}return this.i=r.join("&")};function oe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Ua(r,a){a&&!r.j&&(Mt(r),r.i=null,r.g.forEach(function(l,h){var E=h.toLowerCase();h!=E&&(zi(this,h),Hi(this,E,l))},r)),r.j=a}function Ba(r,a){const l=new Ce;if(c.Image){const h=new Image;h.onload=C(Lt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Lt,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Lt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Lt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function ja(r,a){const l=new Ce,h=new AbortController,E=setTimeout(()=>{h.abort(),Lt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(E),A.ok?Lt(l,"TestPingServer: ok",!0,a):Lt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Lt(l,"TestPingServer: error",!1,a)})}function Lt(r,a,l,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(l)}catch{}}function $a(){this.g=new wa}function qa(r,a,l){const h=l||"";try{Bi(r,function(E,A){let S=E;g(E)&&(S=lr(E)),a.push(h+A+"="+encodeURIComponent(S))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function mn(r){this.l=r.Ub||null,this.j=r.eb||!1}V(mn,ur),mn.prototype.g=function(){return new pn(this.l,this.j)},mn.prototype.i=function(r){return function(){return r}}({});function pn(r,a){ct.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(pn,ct),n=pn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Oe(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Oe(this)),this.g&&(this.readyState=3,Oe(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ki(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ki(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?ke(this):Oe(this),this.readyState==3&&Ki(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,ke(this))},n.Qa=function(r){this.g&&(this.response=r,ke(this))},n.ga=function(){this.g&&ke(this)};function ke(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Oe(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Oe(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Qi(r){let a="";return yt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function vr(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Qi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):z(r,a,l))}function X(r){ct.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(X,ct);var za=/^https?$/i,Ga=["POST","PUT"];n=X.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?Ai(this.o):Ai(fr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Wi(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)l.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),E=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ga,a,void 0))||h||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yi(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Wi(this,A)}};function Wi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Xi(r),gn(r)}function Xi(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ji(this):this.bb())},n.bb=function(){Ji(this)};function Ji(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)vi(r.Ea,0,r);else if(gt(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var E=String(r.D).match(ji)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),h=!za.test(E?E.toLowerCase():"")}l=h}if(l)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var A=2<Vt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Xi(r)}}finally{gn(r)}}}}function gn(r,a){if(r.g){Yi(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{l.onreadystatechange=h}catch{}}}function Yi(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Aa(a)}};function Zi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ha(r){const a={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(K(r[h]))continue;var l=y(r[h]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[E]||[];a[E]=A,A.push(l)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Me(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function ts(r){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Me("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Me("baseRetryDelayMs",5e3,r),this.cb=Me("retryDelaySeedMs",1e4,r),this.Wa=Me("forwardChannelMaxRetries",2,r),this.wa=Me("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(r&&r.concurrentRequestLimit),this.Da=new $a,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ts.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){_t(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=us(this,null,this.W),yn(this)};function Er(r){if(es(r),r.G==3){var a=r.U++,l=Ct(r.I);if(z(l,"SID",r.K),z(l,"RID",a),z(l,"TYPE","terminate"),Le(r,l),a=new Ot(r,r.j,a),a.L=2,a.v=dn(Ct(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=cs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),cn(a)}ls(r)}function _n(r){r.g&&(Ir(r),r.g.cancel(),r.g=null)}function es(r){_n(r),r.u&&(c.clearTimeout(r.u),r.u=null),vn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function yn(r){if(!Mi(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ie||mi(),Ae||(Ie(),Ae=!0),tr.add(a,r),r.B=0}}function Ka(r,a){return Li(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Se(P(r.Ga,r,a),as(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Ot(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=rs(this,E,a),l=Ct(this.I),z(l,"RID",r),z(l,"CVER",22),this.D&&z(l,"X-HTTP-Session-Id",this.D),Le(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Qi(A)))+"&"+a:this.m&&vr(l,this.m,A)),yr(this.h,E),this.Ua&&z(l,"TYPE","init"),this.P?(z(l,"$req",a),z(l,"SID","null"),E.T=!0,mr(E,l,null)):mr(E,l,a),this.G=2}}else this.G==3&&(r?ns(this,r):this.i.length==0||Mi(this.h)||ns(this))};function ns(r,a){var l;a?l=a.l:l=r.U++;const h=Ct(r.I);z(h,"SID",r.K),z(h,"RID",l),z(h,"AID",r.T),Le(r,h),r.m&&r.o&&vr(h,r.m,r.o),l=new Ot(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=rs(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),yr(r.h,l),mr(l,h,a)}function Le(r,a){r.H&&yt(r.H,function(l,h){z(a,h,l)}),r.l&&Bi({},function(l,h){z(a,h,l)})}function rs(r,a,l){l=Math.min(r.i.length,l);var h=r.l?P(r.l.Na,r.l,r):null;t:{var E=r.i;let A=-1;for(;;){const S=["count="+l];A==-1?0<l?(A=E[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let $=!0;for(let rt=0;rt<l;rt++){let B=E[rt].g;const ht=E[rt].map;if(B-=A,0>B)A=Math.max(0,E[rt].g-100),$=!1;else try{qa(ht,S,"req"+B+"_")}catch{h&&h(ht)}}if($){h=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function is(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ie||mi(),Ae||(Ie(),Ae=!0),tr.add(a,r),r.v=0}}function Tr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Se(P(r.Fa,r),as(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ss(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Se(P(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),_n(this),ss(this))};function Ir(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ss(r){r.g=new Ot(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Ct(r.qa);z(a,"RID","rpc"),z(a,"SID",r.K),z(a,"AID",r.T),z(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(a,"TO",r.ja),z(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&vr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=dn(Ct(a)),l.m=null,l.P=!0,Ni(l,r)}n.Za=function(){this.C!=null&&(this.C=null,_n(this),Tr(this),_t(19))};function vn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function os(r,a){var l=null;if(r.g==a){vn(r),Ir(r),r.g=null;var h=2}else if(_r(r.h,a))l=a.D,Fi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;h=an(),gt(h,new Si(h,l)),yn(r)}else is(r);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&Ka(r,a)||h==2&&Tr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),E){case 1:Qt(r,5);break;case 4:Qt(r,10);break;case 3:Qt(r,6);break;default:Qt(r,2)}}}function as(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Qt(r,a){if(r.j.info("Error code "+a),a==2){var l=P(r.fb,r),h=r.Xa;const E=!h;h=new Kt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hn(h,"https"),dn(h),E?Ba(h.toString(),l):ja(h.toString(),l)}else _t(2);r.G=0,r.l&&r.l.sa(a),ls(r),es(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function ls(r){if(r.G=0,r.ka=[],r.l){const a=Ui(r.h);(a.length!=0||r.i.length!=0)&&(x(r.ka,a),x(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function us(r,a,l){var h=l instanceof Kt?Ct(l):new Kt(l);if(h.g!="")a&&(h.g=a+"."+h.g),fn(h,h.s);else{var E=c.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var A=new Kt(null);h&&hn(A,h),a&&(A.g=a),E&&fn(A,E),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&z(h,l,a),z(h,"VER",r.la),Le(r,h),h}function cs(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new X(new mn({eb:l})):new X(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hs(){}n=hs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function En(){}En.prototype.g=function(r,a){return new Tt(r,a)};function Tt(r,a){ct.call(this),this.g=new ts(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!K(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ae(this)}V(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Er(this.g)},Tt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=lr(r),r=l);a.i.push(new Va(a.Ya++,r)),a.G==3&&yn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,Tt.aa.N.call(this)};function fs(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(fs,cr);function ds(){hr.call(this),this.status=1}V(ds,hr);function ae(r){this.g=r}V(ae,hs),ae.prototype.ua=function(){gt(this.g,"a")},ae.prototype.ta=function(r){gt(this.g,new fs(r))},ae.prototype.sa=function(r){gt(this.g,new ds)},ae.prototype.ra=function(){gt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,yo=function(){return new En},_o=function(){return an()},go=Gt,Fr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Pn=ln,Ci.COMPLETE="complete",po=Ci,wi.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ue=wi,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,mo=X}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const bs="@firebase/firestore";/**
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
 */let ve="11.0.2";/**
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
 */const Zt=new oo("@firebase/firestore");function ue(){return Zt.logLevel}function D(n,...t){if(Zt.logLevel<=U.DEBUG){const e=t.map(Wr);Zt.debug(`Firestore (${ve}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=U.ERROR){const e=t.map(Wr);Zt.error(`Firestore (${ve}): ${n}`,...e)}}function kn(n,...t){if(Zt.logLevel<=U.WARN){const e=t.map(Wr);Zt.warn(`Firestore (${ve}): ${n}`,...e)}}function Wr(n){if(typeof n=="string")return n;try{/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function Y(n,t){n||L()}function q(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class vo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ku{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Ou{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Mu{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Y(typeof i.accessToken=="string"),new vo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new mt(t)}}class Lu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Fu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Lu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Uu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ju(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Eo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=ju(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function de(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new nt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ke{constructor(t,e,i){e===void 0?e=0:e>t.length&&L(),i===void 0?i=t.length-e:i>t.length-e&&L(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends Ke{construct(t,e,i){return new J(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const $u=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ke{construct(t,e,i){return new ot(t,e,i)}static isValidIdentifier(t){return $u.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}function qu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new nt(e+1,0):new nt(e,i));return new jt(s,M.empty(),t)}function zu(n){return new jt(n.readTime,n.key,-1)}class jt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new jt(H.min(),M.empty(),-1)}static max(){return new jt(H.max(),M.empty(),-1)}}function Gu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const Hu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ku{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xr(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Hu)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Qu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ye(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Jr.oe=-1;function Yr(n){return n==null}function On(n){return n===0&&1/n==-1/0}function Wu(n){return typeof n=="number"&&Number.isInteger(n)&&!On(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ps(t)),t=Ju(n.get(e),t);return Ps(t)}function Ju(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ps(n){return n+""}/**
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
 */function Ss(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ee(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function To(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Et{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new it(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,i,s,o){return this}insert(t,e,i){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Cs(this.data.getIterator())}getIteratorFrom(t){return new Cs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Cs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new at(ot.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Yu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Yu("Invalid base64 string: "+o):o}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Zu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(Y(!!n),typeof n=="string"){let t=0;const e=Zu.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function me(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */function Zr(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ti(n){const t=n.mapValue.fields.__previous_value__;return Zr(t)?ti(t):t}function Mn(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class tc{constructor(t,e,i,s,o,u,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}class Ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const wn={mapValue:{}};function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zr(n)?4:nc(n)?9007199254740991:ec(n)?10:11:L()}function Pt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Mn(n).isEqual(Mn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ee(s.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return me(s.bytesValue).isEqual(me(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=st(s.doubleValue),c=st(o.doubleValue);return u===c?On(u)===On(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ss(u)!==Ss(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!Pt(u[f],c[f])))return!1;return!0}(n,t);default:return L()}}function Qe(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=ne(n),i=ne(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=st(o.integerValue||o.doubleValue),f=st(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Vs(n.timestampValue,t.timestampValue);case 4:return Vs(Mn(n),Mn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=me(o),f=me(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=j(c[g],f[g]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(st(o.latitude),st(u.latitude));return c!==0?c:j(st(o.longitude),st(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ds(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,g,I;const w=o.fields||{},P=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(f=P.value)===null||f===void 0?void 0:f.arrayValue,O=j(((g=C?.values)===null||g===void 0?void 0:g.length)||0,((I=V?.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Ds(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===wn.mapValue&&u===wn.mapValue)return 0;if(o===wn.mapValue)return 1;if(u===wn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const P=j(f[w],I[w]);if(P!==0)return P;const C=pe(c[f[w]],g[I[w]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw L()}}function Vs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ee(n),i=ee(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function Ds(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=pe(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function ge(n){return Ur(n)}function Ur(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return me(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Ur(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${Ur(e.fields[u])}`;return s+"}"}(n.mapValue):L()}function Sn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ti(n);return t?16+Sn(t):16;case 5:return 2*n.stringValue.length;case 6:return me(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+Sn(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return Ee(i.fields,(o,u)=>{s+=o.length+Sn(u)}),s}(n.mapValue);default:throw L()}}function Br(n){return!!n&&"integerValue"in n}function ei(n){return!!n&&"arrayValue"in n}function Cn(n){return!!n&&"mapValue"in n}function ec(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Be(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ee(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Be(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Be(n.arrayValue.values[e]);return t}return Object.assign({},n)}function nc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Cn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Be(e)}setAll(t){let e=ot.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Be(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Cn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Cn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Ee(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new wt(Be(this.value))}}function Io(n){const t=[];return Ee(n.fields,(e,i)=>{const s=new ot([e]);if(Cn(i)){const o=Io(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new Rt(t)}/**
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
 */class At{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new At(t,0,H.min(),H.min(),H.min(),wt.empty(),0)}static newFoundDocument(t,e,i,s){return new At(t,1,e,H.min(),i,s,0)}static newNoDocument(t,e){return new At(t,2,e,H.min(),H.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,H.min(),H.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function Ns(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),e.key):i=pe(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function xs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function rc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ao{}class et extends Ao{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new sc(t,e,i):e==="array-contains"?new lc(t,i):e==="in"?new uc(t,i):e==="not-in"?new cc(t,i):e==="array-contains-any"?new hc(t,i):new et(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new oc(t,i):new ac(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Ao{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new $t(t,e)}matches(t){return wo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wo(n){return n.op==="and"}function Ro(n){return ic(n)&&wo(n)}function ic(n){for(const t of n.filters)if(t instanceof $t)return!1;return!0}function jr(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Ro(n))return n.filters.map(t=>jr(t)).join(",");{const t=n.filters.map(e=>jr(e)).join(",");return`${n.op}(${t})`}}function bo(n,t){return n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)}(n,t):n instanceof $t?function(i,s){return s instanceof $t&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&bo(u,s.filters[c]),!0):!1}(n,t):void L()}function Po(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(Po).join(" ,")+"}"}(n):"Filter"}class sc extends et{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class oc extends et{constructor(t,e){super(t,"in",e),this.keys=So("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ac extends et{constructor(t,e){super(t,"not-in",e),this.keys=So("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function So(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class lc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ei(e)&&Qe(e.arrayValue,this.value)}}class uc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qe(this.value.arrayValue,e)}}class cc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Qe(this.value.arrayValue,e)}}class hc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ei(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Qe(this.value.arrayValue,i))}}/**
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
 */class fc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function ks(n,t=null,e=[],i=[],s=null,o=null,u=null){return new fc(n,t,e,i,s,o,u)}function ni(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>jr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ge(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ge(i)).join(",")),t.ue=e}return t.ue}function ri(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!rc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!xs(n.startAt,t.startAt)&&xs(n.endAt,t.endAt)}/**
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
 */class Hn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dc(n,t,e,i,s,o,u,c){return new Hn(n,t,e,i,s,o,u,c)}function mc(n){return new Hn(n)}function Os(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pc(n){return n.collectionGroup!==null}function je(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new at(ot.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Un(o,i))}),e.has(ot.keyField().canonicalString())||t.ce.push(new Un(ot.keyField(),i))}return t.ce}function Yt(n){const t=q(n);return t.le||(t.le=gc(t,je(n))),t.le}function gc(n,t){if(n.limitType==="F")return ks(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Un(s.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return ks(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function $r(n,t,e){return new Hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Co(n,t){return ri(Yt(n),Yt(t))&&n.limitType===t.limitType}function Vo(n){return`${ni(Yt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Po(s)).join(", ")}]`),Yr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${i})`}(Yt(n))}; limitType=${n.limitType})`}function ii(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):M.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of je(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const g=Ns(u,c,f);return u.inclusive?g<=0:g<0}(i.startAt,je(i),s)||i.endAt&&!function(u,c,f){const g=Ns(u,c,f);return u.inclusive?g>=0:g>0}(i.endAt,je(i),s))}(n,t)}function _c(n){return(t,e)=>{let i=!1;for(const s of je(n)){const o=yc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function yc(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),g=c.data.field(o);return f!==null&&g!==null?pe(f,g):L()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
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
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return To(this.inner)}size(){return this.innerSize}}/**
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
 */const vc=new Et(M.comparator);function Bn(){return vc}const Do=new Et(M.comparator);function Rn(...n){let t=Do;for(const e of n)t=t.insert(e.key,e);return t}function No(n){let t=Do;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Xt(){return $e()}function xo(){return $e()}function $e(){return new re(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ec=new Et(M.comparator),Tc=new at(M.comparator);function pt(...n){let t=Tc;for(const e of n)t=t.add(e);return t}const Ic=new at(j);function Ac(){return Ic}/**
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
 */function si(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(t)?"-0":t}}function ko(n){return{integerValue:""+n}}function wc(n,t){return Wu(t)?ko(t):si(n,t)}/**
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
 */class Kn{constructor(){this._=void 0}}function Rc(n,t,e){return n instanceof jn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Zr(o)&&(o=ti(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof We?Mo(n,t):n instanceof Xe?Lo(n,t):function(s,o){const u=Oo(s,o),c=Ms(u)+Ms(s.Pe);return Br(u)&&Br(s.Pe)?ko(c):si(s.serializer,c)}(n,t)}function bc(n,t,e){return n instanceof We?Mo(n,t):n instanceof Xe?Lo(n,t):e}function Oo(n,t){return n instanceof $n?function(i){return Br(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class jn extends Kn{}class We extends Kn{constructor(t){super(),this.elements=t}}function Mo(n,t){const e=Fo(t);for(const i of n.elements)e.some(s=>Pt(s,i))||e.push(i);return{arrayValue:{values:e}}}class Xe extends Kn{constructor(t){super(),this.elements=t}}function Lo(n,t){let e=Fo(t);for(const i of n.elements)e=e.filter(s=>!Pt(s,i));return{arrayValue:{values:e}}}class $n extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ms(n){return st(n.integerValue||n.doubleValue)}function Fo(n){return ei(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Pc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof We&&s instanceof We||i instanceof Xe&&s instanceof Xe?de(i.elements,s.elements,Pt):i instanceof $n&&s instanceof $n?Pt(i.Pe,s.Pe):i instanceof jn&&s instanceof jn}(n.transform,t.transform)}class Sc{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qn{}function Uo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jo(n.key,Dt.none()):new Ze(n.key,n.data,Dt.none());{const e=n.data,i=wt.empty();let s=new at(ot.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new ie(n.key,i,new Rt(s.toArray()),Dt.none())}}function Cc(n,t,e){n instanceof Ze?function(s,o,u){const c=s.value.clone(),f=Fs(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ie?function(s,o,u){if(!Vn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Fs(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Bo(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function qe(n,t,e,i){return n instanceof Ze?function(o,u,c,f){if(!Vn(o.precondition,u))return c;const g=o.value.clone(),I=Us(o.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof ie?function(o,u,c,f){if(!Vn(o.precondition,u))return c;const g=Us(o.fieldTransforms,f,u),I=u.data;return I.setAll(Bo(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Vn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Vc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Oo(i.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(i.field,o))}return e||null}function Ls(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&de(i,s,(o,u)=>Pc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ze extends Qn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends Qn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Bo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Fs(n,t,e){const i=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,bc(u,c,e[s]))}return i}function Us(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,Rc(o,u,t))}return i}class jo extends Qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dc extends Qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Cc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=Uo(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,i)=>Ls(e,i))&&de(this.baseMutations,t.baseMutations,(e,i)=>Ls(e,i))}}class oi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){Y(t.mutations.length===i.length);let s=function(){return Ec}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new oi(t,e,i,s)}}/**
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
 */class xc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Z,F;function kc(n){switch(n){default:return L();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Oc(n){if(n===void 0)return te("GRPC error has no .code"),b.UNKNOWN;switch(n){case Z.OK:return b.OK;case Z.CANCELLED:return b.CANCELLED;case Z.UNKNOWN:return b.UNKNOWN;case Z.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Z.INTERNAL:return b.INTERNAL;case Z.UNAVAILABLE:return b.UNAVAILABLE;case Z.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Z.NOT_FOUND:return b.NOT_FOUND;case Z.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Z.ABORTED:return b.ABORTED;case Z.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Z.DATA_LOSS:return b.DATA_LOSS;default:return L()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new fo([4294967295,4294967295],0);class Mc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Fc(n,t){return qr(n,t.toTimestamp())}function fe(n){return Y(!!n),H.fromTimestamp(function(e){const i=ee(e);return new nt(i.seconds,i.nanos)}(n))}function $o(n,t){return zr(n,t).canonicalString()}function zr(n,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Uc(n){const t=J.fromString(n);return Y(Kc(t)),t}function Gr(n,t){return $o(n.databaseId,t.path)}function Bc(n){const t=Uc(n);return t.length===4?J.emptyPath():$c(t)}function jc(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $c(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bs(n,t,e){return{name:Gr(n,t),fields:e.value.mapValue.fields}}function qc(n,t){let e;if(t instanceof Ze)e={update:Bs(n,t.key,t.value)};else if(t instanceof jo)e={delete:Gr(n,t.key)};else if(t instanceof ie)e={update:Bs(n,t.key,t.data),updateMask:Hc(t.fieldMask)};else{if(!(t instanceof Dc))return L();e={verify:Gr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof We)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $n)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw L()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Fc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function zc(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?fe(s.updateTime):fe(o);return u.isEqual(H.min())&&(u=fe(o)),new Sc(u,s.transformResults||[])}(e,t))):[]}function Gc(n){let t=Bc(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Y(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const P=qo(w);return P instanceof $t&&Ro(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(P=>function(V){return new Un(ce(V.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(P))}(e.orderBy));let c=null;e.limit&&(c=function(w){let P;return P=typeof w=="object"?w.value:w,Yr(P)?null:P}(e.limit));let f=null;e.startAt&&(f=function(w){const P=!!w.before,C=w.values||[];return new Fn(C,P)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const P=!w.before,C=w.values||[];return new Fn(C,P)}(e.endAt)),dc(t,s,u,o,c,"F",f,g)}function qo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ce(e.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ce(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ce(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ce(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(i=>qo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function ce(n){return ot.fromServerFormat(n.fieldPath)}function Hc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Kc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Qc{constructor(t){this.ht=t}}function Wc(n){const t=Gc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$r(t,t.limit,"L"):t}/**
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
 */class Xc{constructor(){this.ln=new Jc}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(jt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(jt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Jc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new at(J.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new at(J.comparator)).toArray()}}/**
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
 */const js={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */class _e{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new _e(0)}static Qn(){return new _e(-1)}}/**
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
 */function $s([n,t],[e,i]){const s=j(n,e);return s===0?j(t,i):s}class Yc{constructor(t){this.Gn=t,this.buffer=new at($s),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();$s(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Zc{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){D("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ye(e)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Xr(e)}await this.Yn(3e5)})}}class th{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Jr.oe);const i=new Yc(e);return this.Zn.forEachTarget(t,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.Zn.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(js)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),js):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let i,s,o,u,c,f,g;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(i=w,c=Date.now(),this.removeTargets(t,i,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,i))).next(w=>(g=Date.now(),ue()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function eh(n,t){return new th(n,t)}/**
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
 */class nh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class rh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ih{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&qe(i.mutation,s,Rt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,pt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=pt()){const s=Xt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Rn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Xt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,pt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=Bn();const u=$e(),c=function(){return $e()}();return e.forEach((f,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof ie)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),qe(I.mutation,g,I.mutation.getFieldMask(),nt.now())):u.set(g.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return c.set(g,new rh(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=$e();let s=new Et((u,c)=>u-c),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=i.get(f)||Rt.empty();I=c.applyToLocalView(g,I),i.set(f,I);const w=(s.get(c.batchId)||pt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,w=xo();I.forEach(P=>{if(!o.has(P)){const C=Uo(e.get(P),i.get(P));C!==null&&w.set(P,C),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Xt());let c=-1,f=o;return u.next(g=>R.forEach(g,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(P=>{f=f.insert(I,P)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,pt())).next(I=>({batchId:c,changes:No(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=Rn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Rn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const g=function(w,P){return new Hn(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((w,P)=>{u=u.insert(w,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,At.newInvalidDocument(I)))});let c=Rn();return u.forEach((f,g)=>{const I=o.get(f);I!==void 0&&qe(I.mutation,g,Rt.empty(),nt.now()),ii(e,g)&&(c=c.insert(f,g))}),c})}}/**
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
 */class sh{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:fe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:Wc(s.bundledQuery),readTime:fe(s.readTime)}}(e)),R.resolve()}}/**
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
 */class oh{constructor(){this.overlays=new Et(M.comparator),this.Er=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Xt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Er.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Xt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new Et((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=o.get(g.largestBatchId);I===null&&(I=Xt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Xt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=s)););return R.resolve(c)}Tt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Er.get(s.largestBatchId).delete(i.key);this.Er.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new xc(e,i));let o=this.Er.get(e);o===void 0&&(o=pt(),this.Er.set(e,o)),this.Er.set(e,o.add(i.key))}}/**
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
 */class ah{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class ai{constructor(){this.dr=new at(tt.Ar),this.Rr=new at(tt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const i=new tt(t,e);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.gr(new tt(t,e))}pr(t,e){t.forEach(i=>this.removeReference(i,e))}yr(t){const e=new M(new J([])),i=new tt(e,t),s=new tt(e,t+1),o=[];return this.Rr.forEachInRange([i,s],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new J([])),i=new tt(e,t),s=new tt(e,t+1);let o=pt();return this.Rr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new tt(t,0),i=this.dr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class tt{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||j(t.br,e.br)}static Vr(t,e){return j(t.br,e.br)||M.comparator(t.key,e.key)}}/**
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
 */class lh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new at(tt.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Nc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.vr=this.vr.add(new tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Fr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([i,s],u=>{const c=this.Cr(u.br);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new at(j);return e.forEach(s=>{const o=new tt(s,0),u=new tt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{i=i.add(c.br)})}),R.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;M.isDocumentKey(o)||(o=o.child(""));const u=new tt(new M(o),0);let c=new at(j);return this.vr.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(f.br)),!0)},u),R.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(i=>{const s=this.Cr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=i})}Ln(t){}containsKey(t,e){const i=new tt(e,0),s=this.vr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class uh{constructor(t){this.Nr=t,this.docs=function(){return new Et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Nr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let i=Bn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Bn();const u=e.path,c=new M(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Gu(zu(I),i)<=0||(s.has(I.key)||ii(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){L()}Lr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new ch(this)}getSize(t){return R.resolve(this.size)}}class ch extends nh{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class hh{constructor(t){this.persistence=t,this.Br=new re(e=>ni(e),ri),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.kr=0,this.qr=new ai,this.targetCount=0,this.Qr=_e.qn()}forEachTarget(t,e){return this.Br.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Br.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.qr.mr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.qr.pr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.qr.Sr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
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
 */class zo{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Jr(0),this.Ur=!1,this.Ur=!0,this.Wr=new ah,this.referenceDelegate=t(this),this.Gr=new hh(this),this.indexManager=new Xc,this.remoteDocumentCache=function(s){return new uh(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Qc(e),this.jr=new sh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new oh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Kr[t.toKey()];return i||(i=new lh(e,this.referenceDelegate),this.Kr[t.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new fh(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(i=>()=>i.containsKey(t,e)))}}class fh extends Ku{constructor(t){super(),this.currentSequenceNumber=t}}class li{constructor(t){this.persistence=t,this.Zr=new ai,this.Xr=null}static ei(t){return new li(t)}get ti(){if(this.Xr)return this.Xr;throw L()}addReference(t,e,i){return this.Zr.addReference(i,e),this.ti.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Zr.removeReference(i,e),this.ti.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,i=>{const s=M.fromPath(i);return this.ni(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(i=>{i?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class qn{constructor(t,e){this.persistence=t,this.ri=new re(i=>Xu(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=eh(this,e)}static ei(t,e){return new qn(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}nr(t){let e=0;return this.er(t,i=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(i,s)=>this.ir(t,i,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(i++,o.removeEntry(u,H.min()))})).next(()=>o.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.ri.set(i,t.currentSequenceNumber),R.resolve()}removeReference(t,e,i){return this.ri.set(i,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Sn(t.data.value)),e}ir(t,e,i){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return R.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ui{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Wi=i,this.Gi=s}static zi(t,e){let i=pt(),s=pt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ui(t,e.fromCache,i,s)}}/**
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
 */class dh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class mh{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return yl()?8:Qu(gl())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new dh;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,i,s){return i.documentReadCount<this.Ji?(ue()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(ue()<=U.DEBUG&&D("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(ue()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Yt(e))):R.resolve())}Xi(t,e){if(Os(e))return R.resolve(null);let i=Yt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=$r(e,null,"F"),i=Yt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=pt(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.rs(e,c);return this.ss(e,g,u,f.readTime)?this.Xi(t,$r(e,null,"F")):this.os(t,g,e,f)}))})))}es(t,e,i,s){return Os(e)||s.isEqual(H.min())?R.resolve(null):this.Zi.getDocuments(t,i).next(o=>{const u=this.rs(e,o);return this.ss(e,u,i,s)?R.resolve(null):(ue()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.os(t,u,e,qu(s,-1)).next(c=>c))})}rs(t,e){let i=new at(_c(t));return e.forEach((s,o)=>{ii(t,o)&&(i=i.add(o))}),i}ss(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(t,e,i){return ue()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.Zi.getDocumentsMatchingQuery(t,e,jt.min(),i)}os(t,e,i,s){return this.Zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class ph{constructor(t,e,i,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new Et(j),this.cs=new re(o=>ni(o),ri),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(i)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ih(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function gh(n,t,e,i){return new ph(n,t,e,i)}async function Go(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=pt();for(const g of s){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(g=>({Ts:g,removedBatchIds:u,addedBatchIds:c}))})})}function _h(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const w=g.batch,P=w.keys();let C=R.resolve();return P.forEach(V=>{C=C.next(()=>I.getEntry(f,V)).next(O=>{const x=g.docVersions.get(V);Y(x!==null),O.version.compareTo(x)<0&&(w.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=pt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function yh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function vh(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class qs{constructor(){this.activeTargetIds=Ac()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eh{constructor(){this._o=new qs,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,i){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new qs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Th{uo(t){}shutdown(){}}/**
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
 */class zs{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bn=null;function Cr(){return bn===null?bn=function(){return 268435456+Math.round(2147483648*Math.random())}():bn++,"0x"+bn.toString(16)}/**
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
 */const Ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ah{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const dt="WebChannelConnection";class wh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,i,s,o,u){const c=Cr(),f=this.No(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(g,o,u),this.Bo(e,f,g,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw kn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}ko(e,i,s,o,u,c){return this.Oo(e,i,s,o,u)}Lo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ve}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}No(e,i){const s=Ih[e];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,i,s){const o=Cr();return new Promise((u,c)=>{const f=new mo;f.setWithCredentials(!0),f.listenOnce(po.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Pn.NO_ERROR:const I=f.getResponseJson();D(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Pn.TIMEOUT:D(dt,`RPC '${t}' ${o} timed out`),c(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case Pn.HTTP_ERROR:const w=f.getStatus();if(D(dt,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P?.error;if(C&&C.status&&C.message){const V=function(x){const Q=x.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Q)>=0?Q:b.UNKNOWN}(C.status);c(new k(V,C.message))}else c(new k(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new k(b.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(dt,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);D(dt,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",g,i,15)})}qo(t,e,i){const s=Cr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=yo(),c=_o(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Lo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(dt,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let P=!1,C=!1;const V=new Ah({Eo:x=>{C?D(dt,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(P||(D(dt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),P=!0),D(dt,`RPC '${t}' stream ${s} sending:`,x),w.send(x))},Ao:()=>w.close()}),O=(x,Q,K)=>{x.listen(Q,W=>{try{K(W)}catch(lt){setTimeout(()=>{throw lt},0)}})};return O(w,Ue.EventType.OPEN,()=>{C||(D(dt,`RPC '${t}' stream ${s} transport opened.`),V.So())}),O(w,Ue.EventType.CLOSE,()=>{C||(C=!0,D(dt,`RPC '${t}' stream ${s} transport closed`),V.Do())}),O(w,Ue.EventType.ERROR,x=>{C||(C=!0,kn(dt,`RPC '${t}' stream ${s} transport errored:`,x),V.Do(new k(b.UNAVAILABLE,"The operation could not be completed")))}),O(w,Ue.EventType.MESSAGE,x=>{var Q;if(!C){const K=x.data[0];Y(!!K);const W=K,lt=W?.error||((Q=W[0])===null||Q===void 0?void 0:Q.error);if(lt){D(dt,`RPC '${t}' stream ${s} received error:`,lt);const zt=lt.status;let yt=function(p){const _=Z[p];if(_!==void 0)return Oc(_)}(zt),v=lt.message;yt===void 0&&(yt=b.INTERNAL,v="Unknown error status: "+zt+" with message "+lt.message),C=!0,V.Do(new k(yt,v)),w.close()}else D(dt,`RPC '${t}' stream ${s} received:`,K),V.vo(K)}}),O(c,go.STAT_EVENT,x=>{x.stat===Fr.PROXY?D(dt,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Fr.NOPROXY&&D(dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Vr(){return typeof document<"u"?document:null}/**
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
 */function Wn(n){return new Mc(n,!0)}/**
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
 */class Ho{constructor(t,e,i=1e3,s=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=i,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Rh{constructor(t,e,i,s,o,u,c,f){this.li=t,this.Yo=i,this.Zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ho(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===e&&this.I_(i,s)},i=>{t(()=>{const s=new k(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(s)})})}I_(t,e){const i=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.E_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bh extends Rh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=zc(t.writeResults,t.commitTime),i=fe(t.commitTime);return this.listener.y_(i,e)}w_(){const t={};t.database=jc(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>qc(this.serializer,i))};this.c_(e)}}/**
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
 */class Ph extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,zr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}ko(t,e,i,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,zr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(b.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Sh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(te(e),this.C_=!1):D("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Ch{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{i.enqueueAndForget(async()=>{en(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=q(f);g.k_.add(4),await tn(g),g.K_.set("Unknown"),g.k_.delete(4),await Xn(g)}(this))})}),this.K_=new Sh(i,s)}}async function Xn(n){if(en(n))for(const t of n.q_)await t(!0)}async function tn(n){for(const t of n.q_)await t(!1)}function en(n){return q(n).k_.size===0}async function Ko(n,t,e){if(!Ye(t))throw t;n.k_.add(1),await tn(n),n.K_.set("Offline"),e||(e=()=>yh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Xn(n)})}function Qo(n,t){return t().catch(e=>Ko(n,e,t))}async function Jn(n){const t=q(n),e=qt(t);let i=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Vh(t);)try{const s=await vh(t.localStore,i);if(s===null){t.L_.length===0&&e.a_();break}i=s.batchId,Dh(t,s)}catch(s){await Ko(t,s)}Wo(t)&&Xo(t)}function Vh(n){return en(n)&&n.L_.length<10}function Dh(n,t){n.L_.push(t);const e=qt(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Wo(n){return en(n)&&!qt(n).i_()&&n.L_.length>0}function Xo(n){qt(n).start()}async function Nh(n){qt(n).w_()}async function xh(n){const t=qt(n);for(const e of n.L_)t.g_(e.mutations)}async function kh(n,t,e){const i=n.L_.shift(),s=oi.from(i,t,e);await Qo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Jn(n)}async function Oh(n,t){t&&qt(n).f_&&await async function(i,s){if(function(u){return kc(u)&&u!==b.ABORTED}(s.code)){const o=i.L_.shift();qt(i).__(),await Qo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Jn(i)}}(n,t),Wo(n)&&Xo(n)}async function Gs(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=en(e);e.k_.add(3),await tn(e),i&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Xn(e)}async function Mh(n,t){const e=q(n);t?(e.k_.delete(2),await Xn(e)):t||(e.k_.add(2),await tn(e),e.K_.set("Unknown"))}function qt(n){return n.G_||(n.G_=function(e,i,s){const o=q(e);return o.b_(),new bh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Nh.bind(null,n),po:Oh.bind(null,n),p_:xh.bind(null,n),y_:kh.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await Jn(n)):(await n.G_.stop(),n.L_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class ci{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new ci(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(n,t){if(te("AsyncQueue",`${t}: ${n}`),Ye(n))return new k(b.UNAVAILABLE,`${t}: ${n}`);throw n}class Lh{constructor(){this.queries=Hs(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,i){const s=q(e),o=s.queries;s.queries=Hs(),o.forEach((u,c)=>{for(const f of c.J_)f.onError(i)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function Hs(){return new re(n=>Vo(n),Co)}function Fh(n){n.X_.forEach(t=>{t.next()})}var Ks,Qs;(Qs=Ks||(Ks={})).na="default",Qs.Cache="cache";class Uh{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new re(c=>Vo(c),Co),this.Oa=new Map,this.Na=new Set,this.La=new Et(M.comparator),this.Ba=new Map,this.ka=new ai,this.qa={},this.Qa=new Map,this.Ka=_e.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Bh(n,t,e){const i=zh(n);try{const s=await function(u,c){const f=q(u),g=nt.now(),I=c.reduce((C,V)=>C.add(V.key),pt());let w,P;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=Bn(),O=pt();return f.hs.getEntries(C,I).next(x=>{V=x,V.forEach((Q,K)=>{K.isValidDocument()||(O=O.add(Q))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,V)).next(x=>{w=x;const Q=[];for(const K of c){const W=Vc(K,w.get(K.key).overlayedDocument);W!=null&&Q.push(new ie(K.key,W,Io(W.value.mapValue),Dt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,g,Q,c)}).next(x=>{P=x;const Q=x.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(C,x.batchId,Q)})}).then(()=>({batchId:P.batchId,changes:No(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let g=u.qa[u.currentUser.toKey()];g||(g=new Et(j)),g=g.insert(c,f),u.qa[u.currentUser.toKey()]=g}(i,s.batchId,e),await Yn(i,s.changes),await Jn(i.remoteStore)}catch(s){const o=Jo(s,"Failed to persist write");e.reject(o)}}function Ws(n,t,e){const i=q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=q(u);f.onlineState=c;let g=!1;f.queries.forEach((I,w)=>{for(const P of w.J_)P.ea(c)&&(g=!0)}),g&&Fh(f)}(i.eventManager,t),s.length&&i.Ma.R_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function jh(n,t){const e=q(n),i=t.batch.batchId;try{const s=await _h(e.localStore,t);Zo(e,i,null),Yo(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Yn(e,s)}catch(s){await Xr(s)}}async function $h(n,t,e){const i=q(n);try{const s=await function(u,c){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(w=>(Y(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(i.localStore,t);Zo(i,t,e),Yo(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Yn(i,s)}catch(s){await Xr(s)}}function Yo(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function Zo(n,t,e){const i=q(n);let s=i.qa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.qa[i.currentUser.toKey()]=s}}async function Yn(n,t,e){const i=q(n),s=[],o=[],u=[];i.xa.isEmpty()||(i.xa.forEach((c,f)=>{u.push(i.Ua(f,t,e).then(g=>{var I;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=ui.zi(f.targetId,g);o.push(w)}}))}),await Promise.all(u),i.Ma.R_(s),await async function(f,g){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,P=>R.forEach(P.Wi,C=>I.persistence.referenceDelegate.addReference(w,P.targetId,C)).next(()=>R.forEach(P.Gi,C=>I.persistence.referenceDelegate.removeReference(w,P.targetId,C)))))}catch(w){if(!Ye(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const P=w.targetId;if(!w.fromCache){const C=I.us.get(P),V=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(V);I.us=I.us.insert(P,O)}}}(i.localStore,o))}async function qh(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Go(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(f=>{f.reject(new k(b.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Yn(e,i.Ts)}}function zh(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$h.bind(null,t),t}class zn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Wn(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return gh(this.persistence,new mh,t.initialUser,this.serializer)}ja(t){return new zo(li.ei,this.serializer)}za(t){return new Eh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zn.provider={build:()=>new zn};class Gh extends zn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){Y(this.persistence.referenceDelegate instanceof qn);const i=this.persistence.referenceDelegate.garbageCollector;return new Zc(i,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new zo(i=>qn.ei(i,e),this.serializer)}}class Hr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ws(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qh.bind(null,this.syncEngine),await Mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lh}()}createDatastore(t){const e=Wn(t.databaseInfo.databaseId),i=function(o){return new wh(o)}(t.databaseInfo);return function(o,u,c,f){return new Ph(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new Ch(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ws(this.syncEngine,e,0),function(){return zs.p()?new zs:new Th}())}createSyncEngine(t,e){return function(s,o,u,c,f,g,I){const w=new Uh(s,o,u,c,f,g);return I&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);D("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await tn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Hr.provider={build:()=>new Hr};/**
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
 */class Hh{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Eo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Jo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Dr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Go(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Xs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Kh(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Gs(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Gs(t.remoteStore,s)),n._onlineComponents=t}async function Kh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;kn("Error using user provided cache. Falling back to memory cache: "+e),await Dr(n,new zn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Dr(n,new Gh(void 0));return n._offlineComponents}async function Qh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Xs(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Xs(n,new Hr))),n._onlineComponents}function Wh(n){return Qh(n).then(t=>t.syncEngine)}/**
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
 */function ta(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Js=new Map;/**
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
 */function ea(n,t,e){if(!e)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Xh(n,t,e,i){if(t===!0&&i===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ys(n){if(!M.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(M.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function na(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hi(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class to{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Xh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ta((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new to({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new to(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ku;switch(i.type){case"firstParty":return new Fu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Js.get(e);i&&(D("ComponentProvider","Removing Datastore"),Js.delete(e),i.terminate())}(this),Promise.resolve()}}function Jh(n,t,e,i={}){var s;const o=(n=na(n,Zn))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=mt.MOCK_USER;else{c=pl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new mt(g)}n._authCredentials=new Ou(new vo(c,f))}}/**
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
 */class fi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new fi(this.firestore,t,this._query)}}class Nt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class Bt extends fi{constructor(t,e,i){super(t,e,mc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new M(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function Yh(n,t,...e){if(n=ze(n),ea("collection","path",t),n instanceof Zn){const i=J.fromString(t,...e);return Zs(i),new Bt(n,null,i)}{if(!(n instanceof Nt||n instanceof Bt))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(J.fromString(t,...e));return Zs(i),new Bt(n.firestore,null,i)}}function Zh(n,t,...e){if(n=ze(n),arguments.length===1&&(t=Eo.newId()),ea("doc","path",t),n instanceof Zn){const i=J.fromString(t,...e);return Ys(i),new Nt(n,null,new M(i))}{if(!(n instanceof Nt||n instanceof Bt))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(J.fromString(t,...e));return Ys(i),new Nt(n.firestore,n instanceof Bt?n.converter:null,new M(i))}}/**
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
 */class eo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ho(this,"async_queue_retry"),this.fu=()=>{const i=Vr();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=t;const e=Vr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Vr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new Jt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Ye(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(i=>{this.Au=i,this.Ru=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=e,e}enqueueAfterDelay(t,e,i){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=ci.createAndSchedule(this,t,e,i,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&L()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class ra extends Zn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new eo,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new eo(t),this._firestoreClient=void 0,await t}}}function tf(n,t){const e=typeof n=="object"?n:wu(),i=typeof n=="string"?n:"(default)",s=Eu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=dl("firestore");o&&Jh(s,...o)}return s}function ef(n){if(n._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nf(n),n._firestoreClient}function nf(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,g,I){return new tc(c,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ta(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Hh(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c?._online.build();return{_offline:c?._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Je(bt.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Je(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ia{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class oa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */class aa{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const rf=/^__.*__$/;class sf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ze(t,this.data,e,this.fieldTransforms)}}function la(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class di{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:i,Nu:!1});return s.Lu(t),s}Bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Gn(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(la(this.Mu)&&rf.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class of{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Wn(t)}$u(t,e,i,s=!1){return new di({Mu:t,methodName:e,Ku:i,path:ot.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function af(n){const t=n._freezeSettings(),e=Wn(n._databaseId);return new of(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lf(n,t,e,i,s,o={}){const u=n.$u(o.merge||o.mergeFields?2:0,t,e,s);fa("Data must be an object, but it was:",u,i);const c=ca(i,u);let f,g;if(o.merge)f=new Rt(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const P=uf(t,w,e);if(!u.contains(P))throw new k(b.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);ff(I,P)||I.push(P)}f=new Rt(I),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new sf(new wt(c),f,g)}function ua(n,t){if(ha(n=ze(n)))return fa("Unsupported field value:",t,n),ca(n,t);if(n instanceof sa)return function(i,s){if(!la(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=ua(c,s.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=ze(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return wc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=nt.fromDate(i);return{timestampValue:qr(s.serializer,o)}}if(i instanceof nt){const o=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:qr(s.serializer,o)}}if(i instanceof oa)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Je)return{bytesValue:Lc(s.serializer,i._byteString)};if(i instanceof Nt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$o(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof aa)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.qu("VectorValues must only contain numeric values.");return si(c.serializer,f)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${hi(i)}`)}(n,t)}function ca(n,t){const e={};return To(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(n,(i,s)=>{const o=ua(s,t.Ou(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function ha(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof oa||n instanceof Je||n instanceof Nt||n instanceof sa||n instanceof aa)}function fa(n,t,e){if(!ha(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=hi(e);throw i==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+i)}}function uf(n,t,e){if((t=ze(t))instanceof ia)return t._internalPath;if(typeof t=="string")return hf(n,t);throw Gn("Field path arguments must be of type string or ",n,!1,void 0,e)}const cf=new RegExp("[~\\*/\\[\\]]");function hf(n,t,e){if(t.search(cf)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ia(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new k(b.INVALID_ARGUMENT,c+n+f)}function ff(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function df(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function mf(n,t){const e=na(n.firestore,ra),i=Zh(n),s=df(n.converter,t);return pf(e,[lf(af(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Dt.exists(!1))]).then(()=>i)}function pf(n,t){return function(i,s){const o=new Jt;return i.asyncQueue.enqueueAndForget(async()=>Bh(await Wh(i),s,o)),o.promise}(ef(n),t)}(function(t,e=!0){(function(s){ve=s})(Au),xn(new Ge("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new ra(new Mu(i.getProvider("auth-internal")),new Bu(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(g.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(bs,"4.7.5",t),he(bs,"4.7.5","esm2017")})();var gf="firebase",_f="11.1.0";/**
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
 */he(gf,_f,"app");const yf={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},vf=uo(yf),Ef=tf(vf),Tf=()=>{const[n,t]=wr.useState({name:"",email:"",subject:"",message:""}),[e,i]=wr.useState(!1),[s,o]=wr.useState(null),u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},f={y:[-10,10,-10],transition:{duration:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}},g=C=>{const{name:V,value:O}=C.target;t(x=>({...x,[V]:O}))},I=async C=>{C.preventDefault(),i(!0),o(null);try{await mf(Yh(Ef,"contacts"),{...n,timestamp:new Date().toISOString(),read:!1}),o("success"),t({name:"",email:"",subject:"",message:""})}catch(V){console.error("Error submitting form:",V),o("error")}finally{i(!1)}},w=[{icon:ms,title:"Email",content:"Henryagukwe01@gmail.com"},{icon:Xa,title:"Phone",content:"+234 903 440 0634"},{icon:Ja,title:"Location",content:"Lagos, Nigeria"}],P=[{icon:el,href:"https://github.com/Henryno111",label:"GitHub"},{icon:nl,href:"https://linkedin.com/in/agukwe-henry",label:"LinkedIn"},{icon:rl,href:"https://x.com/@boy_gene_us",label:"Twitter"}];return N.jsxs("div",{className:"min-h-screen bg-gray-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden",children:[N.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(5)].map((C,V)=>N.jsx(G.div,{className:"absolute w-32 h-32 bg-emerald-500/5 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:3+V,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}},V))}),N.jsxs(G.div,{variants:u,initial:"hidden",animate:"visible",className:"max-w-7xl mx-auto relative z-10",children:[N.jsxs(G.div,{className:"text-center mb-16",variants:c,children:[N.jsx("div",{className:"inline-block",children:N.jsxs(G.h1,{className:"text-4xl sm:text-5xl font-bold text-white mb-4 relative",animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:["Get in Touch",N.jsx("span",{className:"text-emerald-500",children:"."}),N.jsx(G.div,{className:"absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full",animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}})]})}),N.jsx(G.p,{className:"text-gray-400 text-lg max-w-2xl mx-auto",variants:c,children:"Let's discuss your project and explore how we can work together to bring your ideas to life."})]}),N.jsx(G.div,{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",variants:u,children:w.map(C=>N.jsxs(G.div,{className:"group relative",variants:c,whileHover:{scale:1.02},children:[N.jsx(G.div,{className:"absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300",animate:f}),N.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 relative hover:border-emerald-500 transition-colors duration-300",children:[N.jsx(G.div,{className:"w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300",whileHover:{rotate:360},transition:{duration:.6},children:N.jsx(C.icon,{className:"w-8 h-8 text-emerald-500"})}),N.jsx("h3",{className:"text-2xl font-semibold text-white mb-2",children:C.title}),N.jsx("p",{className:"text-gray-400",children:C.content})]})]},C.title))}),N.jsxs(G.div,{variants:c,className:"bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative overflow-hidden",children:[N.jsx(G.div,{className:"absolute inset-0",animate:{background:["linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)","linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)","linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)","linear-gradient(270deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)"]},transition:{duration:8,repeat:1/0,ease:"linear"}}),N.jsxs("div",{className:"relative z-10",children:[N.jsxs(G.h2,{className:"text-3xl font-bold text-white mb-8",variants:c,children:["Send Message",N.jsx("span",{className:"text-emerald-500",children:"."})]}),N.jsxs("form",{onSubmit:I,className:"space-y-6",children:[N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[N.jsxs(G.div,{variants:c,children:[N.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:[N.jsx(Ya,{className:"w-4 h-4 inline mr-2"}),"Name"]}),N.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:g,required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300",placeholder:"Your Name"})]}),N.jsxs(G.div,{variants:c,children:[N.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:[N.jsx(ms,{className:"w-4 h-4 inline mr-2"}),"Email"]}),N.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:g,required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300",placeholder:"your.email@example.com"})]})]}),N.jsxs(G.div,{variants:c,children:[N.jsxs("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-300 mb-2",children:[N.jsx(Za,{className:"w-4 h-4 inline mr-2"}),"Subject"]}),N.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:g,required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300",placeholder:"Project Discussion"})]}),N.jsxs(G.div,{variants:c,children:[N.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),N.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:g,required:!0,rows:6,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none",placeholder:"Tell me about your project..."})]}),N.jsxs(G.div,{variants:c,className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[N.jsxs(G.button,{type:"submit",disabled:e,whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-emerald-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[N.jsx(tl,{className:"w-5 h-5"}),e?"Sending...":"Send Message"]}),s==="success"&&N.jsx(G.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-emerald-500 text-sm",children:"Message sent successfully!"}),s==="error"&&N.jsx(G.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"text-red-500 text-sm",children:"Failed to send message. Please try again."})]})]})]})]}),N.jsxs(G.div,{className:"text-center mt-16",variants:c,children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-8",children:"Connect with me"}),N.jsx(G.div,{className:"flex justify-center space-x-6",variants:u,children:P.map(C=>N.jsxs(G.a,{href:C.href,target:"_blank",rel:"noopener noreferrer",variants:c,whileHover:{scale:1.1,rotate:360,transition:{duration:.6}},className:"w-12 h-12 border-2 border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-colors duration-300 relative group",children:[N.jsx(G.div,{className:"absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",animate:f}),N.jsx(C.icon,{className:"w-6 h-6 relative z-10"})]},C.label))})]})]})]})},Vf=()=>N.jsxs("div",{className:"min-h-screen",children:[N.jsx(Qa,{}),N.jsx("main",{className:"pt-16",children:N.jsx(Tf,{})}),N.jsx(Wa,{})]});export{Vf as default};
