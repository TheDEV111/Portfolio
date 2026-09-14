import{a as l,r as y}from"./react-vendor-BvOuhz89.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=l.createContext&&l.createContext(f),b=["attr","size","title"];function w(e,t){if(e==null)return{};var r=M(e,t),a,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function M(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(this,arguments)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(a){O(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function O(e,t,r){return t=j(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=P(e,"string");return typeof t=="symbol"?t:t+""}function P(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function m(e){return e&&e.map((t,r)=>l.createElement(t.tag,d({key:r},t.attr),m(t.child)))}function q(e){return t=>l.createElement(C,h({attr:d({},e.attr)},t),m(e.child))}function C(e){var t=r=>{var{attr:a,size:i,title:o}=e,p=w(e,b),s=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,p,{className:c,style:d(d({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return u!==void 0?l.createElement(u.Consumer,null,r=>t(r)):t(f)}/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:o,iconNode:p,...s},c)=>y.createElement("svg",{ref:c,...L,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:v("lucide",i),...s},[...p.map(([g,x])=>y.createElement(g,x)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(e,t)=>{const r=y.forwardRef(({className:a,...i},o)=>y.createElement(A,{ref:o,iconNode:t,className:v(`lucide-${z(e)}`,a),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=n("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=n("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=n("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=n("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=n("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=n("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=n("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=n("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=n("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=n("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=n("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=n("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=n("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=n("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=n("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=n("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=n("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{D as A,R as B,_ as C,G as D,I as E,W as G,X as L,$ as M,U as P,F as R,Q as S,ee as X,S as a,H as b,N as c,B as d,T as e,Y as f,V as g,Z as h,K as i,J as j,q as k};
