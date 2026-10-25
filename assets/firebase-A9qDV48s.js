const gg=()=>{};var Uc={};/**
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
 */const wh=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},pg=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,m=(i&3)<<4|u>>4;let p=(u&15)<<2|h>>6,v=h&63;c||(v=64,a||(p=64)),n.push(e[f],e[m],e[p],e[v])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(wh(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):pg(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const h=s<r.length?e[r.charAt(s)]:64;++s;const m=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new _g;const p=i<<2|u>>4;if(n.push(p),h!==64){const v=u<<4&240|h>>2;if(n.push(v),m!==64){const V=h<<6&192|m;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(r){const t=wh(r);return vh.encodeByteArray(t,!0)},yi=function(r){return yg(r).replace(/\./g,"")},Ig=function(r){try{return vh.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ah(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eg=()=>Ah().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process=="undefined"||typeof Uc=="undefined")return;const r=Uc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wg=()=>{if(typeof document=="undefined")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Ig(r[1]);return t&&JSON.parse(t)},Va=()=>{try{return gg()||Eg()||Tg()||wg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},vg=r=>{var t,e;return(e=(t=Va())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},Ag=r=>{const t=vg(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},bh=()=>{var r;return(r=Va())===null||r===void 0?void 0:r.config};/**
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
 */class bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rh(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Rg(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[yi(JSON.stringify(e)),yi(JSON.stringify(a)),""].join(".")}const Xr={};function Sg(){const r={prod:[],emulator:[]};for(const t of Object.keys(Xr))Xr[t]?r.emulator.push(t):r.prod.push(t);return r}function Pg(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let qc=!1;function Vg(r,t){if(typeof window=="undefined"||typeof document=="undefined"||!Bi(window.location.host)||Xr[r]===t||Xr[r]||qc)return;Xr[r]=t;function e(p){return`__firebase__banner__${p}`}const n="__firebase__banner",i=Sg().prod.length>0;function a(){const p=document.getElementById(n);p&&p.remove()}function u(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,v){p.setAttribute("width","24"),p.setAttribute("id",v),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{qc=!0,a()},p}function f(p,v){p.setAttribute("id",v),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=Pg(n),v=e("text"),V=document.getElementById(v)||document.createElement("span"),D=e("learnmore"),x=document.getElementById(D)||document.createElement("a"),L=e("preprendIcon"),q=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const B=p.element;u(B),f(x,D);const K=h();c(q,L),B.append(q,V,x,K),document.body.appendChild(B)}i?(V.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ii(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sh(){var r;const t=(r=Va())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ph(){return!Sh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vh(){return!Sh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Ch(){try{return typeof indexedDB=="object"}catch{return!1}}function Cg(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Dg="FirebaseError";class hr extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Dg,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dh.prototype.create)}}class Dh{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?xg(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new hr(s,u,n)}}function xg(r,t){return r.replace(Ng,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Ng=/\{\$([^}]+)}/g;function Ne(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(jc(i)&&jc(a)){if(!Ne(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function jc(r){return r!==null&&typeof r=="object"}/**
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
 */function It(r){return r&&r._delegate?r._delegate:r}class os{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class kg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new bg;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fg(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Og(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(r){return r===en?void 0:r}function Fg(r){return r.instantiationMode==="EAGER"}/**
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
 */class Mg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Lg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Bg=J.INFO,Ug={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},qg=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Ug[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xh{constructor(t){this.name=t,this._logLevel=Bg,this._logHandler=qg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const jg=(r,t)=>t.some(e=>r instanceof e);let zc,$c;function zg(){return zc||(zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $g(){return $c||($c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Xo=new WeakMap,kh=new WeakMap,Lo=new WeakMap,Ca=new WeakMap;function Gg(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(Ve(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Nh.set(e,r)}).catch(()=>{}),Ca.set(t,r),t}function Kg(r){if(Xo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Xo.set(r,t)}let Jo={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Xo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||kh.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ve(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Qg(r){Jo=r(Jo)}function Wg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Bo(this),t,...e);return kh.set(n,t.sort?t.sort():[t]),Ve(n)}:$g().includes(r)?function(...t){return r.apply(Bo(this),t),Ve(Nh.get(this))}:function(...t){return Ve(r.apply(Bo(this),t))}}function Hg(r){return typeof r=="function"?Wg(r):(r instanceof IDBTransaction&&Kg(r),jg(r,zg())?new Proxy(r,Jo):r)}function Ve(r){if(r instanceof IDBRequest)return Gg(r);if(Lo.has(r))return Lo.get(r);const t=Hg(r);return t!==r&&(Lo.set(r,t),Ca.set(t,r)),t}const Bo=r=>Ca.get(r);function Xg(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=Ve(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Ve(a.result),c.oldVersion,c.newVersion,Ve(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const Jg=["get","getKey","getAll","getAllKeys","count"],Yg=["put","add","delete","clear"],Uo=new Map;function Gc(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Uo.get(t))return Uo.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Yg.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Jg.includes(e)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[e](...u),s&&c.done]))[0]};return Uo.set(t,i),i}Qg(r=>({...r,get:(t,e,n)=>Gc(t,e)||r.get(t,e,n),has:(t,e)=>!!Gc(t,e)||r.has(t,e)}));/**
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
 */class Zg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(tp(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function tp(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yo="@firebase/app",Kc="0.13.2";/**
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
 */const he=new xh("@firebase/app"),ep="@firebase/app-compat",np="@firebase/analytics-compat",rp="@firebase/analytics",sp="@firebase/app-check-compat",ip="@firebase/app-check",op="@firebase/auth",ap="@firebase/auth-compat",up="@firebase/database",cp="@firebase/data-connect",lp="@firebase/database-compat",hp="@firebase/functions",dp="@firebase/functions-compat",fp="@firebase/installations",mp="@firebase/installations-compat",gp="@firebase/messaging",pp="@firebase/messaging-compat",_p="@firebase/performance",yp="@firebase/performance-compat",Ip="@firebase/remote-config",Ep="@firebase/remote-config-compat",Tp="@firebase/storage",wp="@firebase/storage-compat",vp="@firebase/firestore",Ap="@firebase/ai",bp="@firebase/firestore-compat",Rp="firebase",Sp="11.10.0";/**
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
 */const Ei="[DEFAULT]",Pp={[Yo]:"fire-core",[ep]:"fire-core-compat",[rp]:"fire-analytics",[np]:"fire-analytics-compat",[ip]:"fire-app-check",[sp]:"fire-app-check-compat",[op]:"fire-auth",[ap]:"fire-auth-compat",[up]:"fire-rtdb",[cp]:"fire-data-connect",[lp]:"fire-rtdb-compat",[hp]:"fire-fn",[dp]:"fire-fn-compat",[fp]:"fire-iid",[mp]:"fire-iid-compat",[gp]:"fire-fcm",[pp]:"fire-fcm-compat",[_p]:"fire-perf",[yp]:"fire-perf-compat",[Ip]:"fire-rc",[Ep]:"fire-rc-compat",[Tp]:"fire-gcs",[wp]:"fire-gcs-compat",[vp]:"fire-fst",[bp]:"fire-fst-compat",[Ap]:"fire-vertex","fire-js":"fire-js",[Rp]:"fire-js-all"};/**
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
 */const Ti=new Map,Vp=new Map,Zo=new Map;function Qc(r,t){try{r.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function wi(r){const t=r.name;if(Zo.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;Zo.set(t,r);for(const e of Ti.values())Qc(e,r);for(const e of Vp.values())Qc(e,r);return!0}function Da(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Cp(r,t,e=Ei){Da(r,t).clearInstance(e)}function Dp(r){return r==null?!1:r.settings!==void 0}/**
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
 */const xp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new Dh("app","Firebase",xp);/**
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
 */class Np{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const kp=Sp;function Op(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ei,automaticDataCollectionEnabled:!0},t),s=n.name;if(typeof s!="string"||!s)throw Ce.create("bad-app-name",{appName:String(s)});if(e||(e=bh()),!e)throw Ce.create("no-options");const i=Ti.get(s);if(i){if(Ne(e,i.options)&&Ne(n,i.config))return i;throw Ce.create("duplicate-app",{appName:s})}const a=new Mg(s);for(const c of Zo.values())a.addComponent(c);const u=new Np(e,n,a);return Ti.set(s,u),u}function Fp(r=Ei){const t=Ti.get(r);if(!t&&r===Ei&&bh())return Op();if(!t)throw Ce.create("no-app",{appName:r});return t}function qn(r,t,e){var n;let s=(n=Pp[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(u.join(" "));return}wi(new os(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Mp="firebase-heartbeat-database",Lp=1,as="firebase-heartbeat-store";let qo=null;function Oh(){return qo||(qo=Xg(Mp,Lp,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(as)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ce.create("idb-open",{originalErrorMessage:r.message})})),qo}async function Bp(r){try{const e=(await Oh()).transaction(as),n=await e.objectStore(as).get(Fh(r));return await e.done,n}catch(t){if(t instanceof hr)he.warn(t.message);else{const e=Ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function Wc(r,t){try{const n=(await Oh()).transaction(as,"readwrite");await n.objectStore(as).put(t,Fh(r)),await n.done}catch(e){if(e instanceof hr)he.warn(e.message);else{const n=Ce.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(n.message)}}}function Fh(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Up=1024,qp=30;class jp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $p(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hc();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qp){const a=Gp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){he.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hc(),{heartbeatsToSend:n,unsentEntries:s}=zp(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return he.warn(e),""}}}function Hc(){return new Date().toISOString().substring(0,10)}function zp(r,t=Up){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Xc(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Xc(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class $p{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ch()?Cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Xc(r){return yi(JSON.stringify({version:2,heartbeats:r})).length}function Gp(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Kp(r){wi(new os("platform-logger",t=>new Zg(t),"PRIVATE")),wi(new os("heartbeat",t=>new jp(t),"PRIVATE")),qn(Yo,Kc,r),qn(Yo,Kc,"esm2017"),qn("fire-js","")}Kp("");var Qp="firebase",Wp="11.10.0";/**
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
 */qn(Qp,Wp,"app");var Jc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var De,Mh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,w,S){for(var y=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)y[oe-2]=arguments[oe];return _.prototype[w].apply(T,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)T[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],w=E.g[2];var S=E.g[3],y=_+(S^I&(w^S))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(S^I&(w^S))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(w^_&(I^w))+T[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(I^S&(_^I))+T[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=I+(_^w&(S^_))+T[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^S&(I^w))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(I^w))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^w&(_^I))+T[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(S^_))+T[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(w^S))+T[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^S)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^S)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^w)+T[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^I)+T[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=I+(w^S^_)+T[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~S))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~S))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~w))+T[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~I))+T[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=I+(S^(w|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,T=this.B,w=this.h,S=0;S<_;){if(w==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(T[w++]=E.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<_;)if(T[w++]=E[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)E[I++]=this.g[_]>>>T&255;return E};function i(E,_){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function a(E,_){this.h=_;for(var I=[],T=!0,w=E.length-1;0<=w;w--){var S=E[w]|0;T&&S==_||(I[w]=S,T=!1)}this.g=I}var u={};function c(E){return-128<=E&&128>E?i(E,function(_){return new a([_|0],0>_?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return x(h(-E));for(var _=[],I=1,T=0;E>=I;T++)_[T]=E/I|0,I*=4294967296;return new a(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=m,w=0;w<E.length;w+=8){var S=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var m=c(0),p=c(1),v=c(16777216);r=a.prototype,r.m=function(){if(D(this))return-x(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(D(this))return"-"+x(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,T="";;){var w=K(I,_).g;I=L(I,w.j(_));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=w,V(I))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=L(this,E),D(E)?-1:V(E)?0:1};function x(E){for(var _=E.g.length,I=[],T=0;T<_;T++)I[T]=~E.g[T];return new a(I,~E.h).add(p)}r.abs=function(){return D(this)?x(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0,w=0;w<=_;w++){var S=T+(this.i(w)&65535)+(E.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,S&=65535,y&=65535,I[w]=y<<16|S}return new a(I,I[I.length-1]&-2147483648?-1:0)};function L(E,_){return E.add(x(_))}r.j=function(E){if(V(this)||V(E))return m;if(D(this))return D(E)?x(this).j(x(E)):x(x(this).j(E));if(D(E))return x(this.j(x(E)));if(0>this.l(v)&&0>E.l(v))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var S=this.i(T)>>>16,y=this.i(T)&65535,oe=E.i(w)>>>16,Ar=E.i(w)&65535;I[2*T+2*w]+=y*Ar,q(I,2*T+2*w),I[2*T+2*w+1]+=S*Ar,q(I,2*T+2*w+1),I[2*T+2*w+1]+=y*oe,q(I,2*T+2*w+1),I[2*T+2*w+2]+=S*oe,q(I,2*T+2*w+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new a(I,0)};function q(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function B(E,_){this.g=E,this.h=_}function K(E,_){if(V(_))throw Error("division by zero");if(V(E))return new B(m,m);if(D(E))return _=K(x(E),_),new B(x(_.g),x(_.h));if(D(_))return _=K(E,x(_)),new B(x(_.g),_.h);if(30<E.g.length){if(D(E)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,T=_;0>=T.l(E);)I=tt(I),T=tt(T);var w=G(I,1),S=G(T,1);for(T=G(T,2),I=G(I,2);!V(T);){var y=S.add(T);0>=y.l(E)&&(w=w.add(I),S=y),T=G(T,1),I=G(I,1)}return _=L(E,w.j(_)),new B(w,_)}for(w=m;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(I),y=S.j(_);D(y)||0<y.l(E);)I-=T,S=h(I),y=S.j(_);V(S)&&(S=p),w=w.add(S),E=L(E,y)}return new B(w,E)}r.A=function(E){return K(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function tt(E){for(var _=E.g.length+1,I=[],T=0;T<_;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function G(E,_){var I=_>>5;_%=32;for(var T=E.g.length-I,w=[],S=0;S<T;S++)w[S]=0<_?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new a(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Mh=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,De=a}).apply(typeof Jc!="undefined"?Jc:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ti=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lh,Kr,Bh,ui,ta,Uh,qh,jh;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var d=n;o=o.split(".");for(var g=0;g<o.length-1;g++){var b=o[g];if(!(b in d))break t;d=d[b]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,g=!1,b={next:function(){if(!g&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function p(o,l,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,p.apply(null,arguments)}function v(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,b,P){for(var F=Array(arguments.length-2),it=2;it<arguments.length;it++)F[it-2]=arguments[it];return l.prototype[b].apply(g,F)}}function D(o){const l=o.length;if(0<l){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const b=o.length||0,P=g.length||0;o.length=b+P;for(let F=0;F<P;F++)o[b+F]=g[F]}else o.push(g)}}class L{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var tt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function G(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)o[d]=g[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function w(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function S(o){u.setTimeout(()=>{throw o},0)}function y(){var o=mo;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class oe{constructor(){this.h=this.g=null}add(l,d){const g=Ar.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ar=new L(()=>new km,o=>o.reset());class km{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let br,Rr=!1,mo=new oe,Uu=()=>{const o=u.Promise.resolve(void 0);br=()=>{o.then(Om)}};var Om=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){S(d)}var l=Ar;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Rr=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var Fm=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o})();function Sr(o,l){if(Pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(tt){t:{try{K(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Mm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Sr.aa.h.call(this)}}V(Sr,Pt);var Mm={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),Lm=0;function Bm(o,l,d,g,b){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=b,this.key=++Lm,this.da=this.fa=!1}function Fs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ms(o){this.src=o,this.g={},this.h=0}Ms.prototype.add=function(o,l,d,g,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var F=po(o,l,g,b);return-1<F?(l=o[F],d||(l.fa=!1)):(l=new Bm(l,this.src,P,!!g,b),l.fa=d,o.push(l)),l};function go(o,l){var d=l.type;if(d in o.g){var g=o.g[d],b=Array.prototype.indexOf.call(g,l,void 0),P;(P=0<=b)&&Array.prototype.splice.call(g,b,1),P&&(Fs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function po(o,l,d,g){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return b}return-1}var _o="closure_lm_"+(1e6*Math.random()|0),yo={};function qu(o,l,d,g,b){if(Array.isArray(l)){for(var P=0;P<l.length;P++)qu(o,l[P],d,g,b);return null}return d=$u(d),o&&o[Os]?o.K(l,d,h(g)?!!g.capture:!1,b):Um(o,l,d,!1,g,b)}function Um(o,l,d,g,b,P){if(!l)throw Error("Invalid event type");var F=h(b)?!!b.capture:!!b,it=Eo(o);if(it||(o[_o]=it=new Ms(o)),d=it.add(l,d,g,F,P),d.proxy)return d;if(g=qm(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Fm||(b=F),b===void 0&&(b=!1),o.addEventListener(l.toString(),g,b);else if(o.attachEvent)o.attachEvent(zu(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qm(){function o(d){return l.call(o.src,o.listener,d)}const l=jm;return o}function ju(o,l,d,g,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)ju(o,l[P],d,g,b);else g=h(g)?!!g.capture:!!g,d=$u(d),o&&o[Os]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=po(P,d,g,b),-1<d&&(Fs(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Eo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=po(l,d,g,b)),(d=-1<o?l[o]:null)&&Io(d))}function Io(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Os])go(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(zu(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=Eo(l))?(go(d,o),d.h==0&&(d.src=null,l[_o]=null)):Fs(o)}}}function zu(o){return o in yo?yo[o]:yo[o]="on"+o}function jm(o,l){if(o.da)o=!0;else{l=new Sr(l,this);var d=o.listener,g=o.ha||o.src;o.fa&&Io(o),o=d.call(g,l)}return o}function Eo(o){return o=o[_o],o instanceof Ms?o:null}var To="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(o){return typeof o=="function"?o:(o[To]||(o[To]=function(l){return o.handleEvent(l)}),o[To])}function Vt(){ye.call(this),this.i=new Ms(this),this.M=this,this.F=null}V(Vt,ye),Vt.prototype[Os]=!0,Vt.prototype.removeEventListener=function(o,l,d,g){ju(this,o,l,d,g)};function Mt(o,l){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new Pt(l,o);else if(l instanceof Pt)l.target=l.target||o;else{var b=l;l=new Pt(g,o),T(l,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var F=l.g=d[P];b=Ls(F,g,!0,l)&&b}if(F=l.g=o,b=Ls(F,g,!0,l)&&b,b=Ls(F,g,!1,l)&&b,d)for(P=0;P<d.length;P++)F=l.g=d[P],b=Ls(F,g,!1,l)&&b}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],g=0;g<d.length;g++)Fs(d[g]);delete o.g[l],o.h--}}this.F=null},Vt.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},Vt.prototype.L=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function Ls(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,P=0;P<l.length;++P){var F=l[P];if(F&&!F.da&&F.capture==d){var it=F.listener,bt=F.ha||F.src;F.fa&&go(o.i,F),b=it.call(bt,g)!==!1&&b}}return b&&!g.defaultPrevented}function Gu(o,l,d){if(typeof o=="function")d&&(o=p(o,d));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Ku(o){o.g=Gu(()=>{o.g=null,o.i&&(o.i=!1,Ku(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class zm extends ye{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ku(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(o){ye.call(this),this.h=o,this.g={}}V(Pr,ye);var Qu=[];function Wu(o){G(o.g,function(l,d){this.g.hasOwnProperty(d)&&Io(l)},o),o.g={}}Pr.prototype.N=function(){Pr.aa.N.call(this),Wu(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=u.JSON.stringify,$m=u.JSON.parse,Gm=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function vo(){}vo.prototype.h=null;function Hu(o){return o.h||(o.h=o.i())}function Xu(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ao(){Pt.call(this,"d")}V(Ao,Pt);function bo(){Pt.call(this,"c")}V(bo,Pt);var Xe={},Ju=null;function Bs(){return Ju=Ju||new Vt}Xe.La="serverreachability";function Yu(o){Pt.call(this,Xe.La,o)}V(Yu,Pt);function Cr(o){const l=Bs();Mt(l,new Yu(l))}Xe.STAT_EVENT="statevent";function Zu(o,l){Pt.call(this,Xe.STAT_EVENT,o),this.stat=l}V(Zu,Pt);function Lt(o){const l=Bs();Mt(l,new Zu(l,o))}Xe.Ma="timingevent";function tc(o,l){Pt.call(this,Xe.Ma,o),this.size=l}V(tc,Pt);function Dr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function Km(o,l,d,g,b,P){o.info(function(){if(o.g)if(P)for(var F="",it=P.split("&"),bt=0;bt<it.length;bt++){var Y=it[bt].split("=");if(1<Y.length){var Ct=Y[0];Y=Y[1];var Dt=Ct.split("_");F=2<=Dt.length&&Dt[1]=="type"?F+(Ct+"="+Y+"&"):F+(Ct+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+d+`
`+F})}function Qm(o,l,d,g,b,P,F){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+F})}function Sn(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Hm(o,d)+(g?" "+g:"")})}function Wm(o,l){o.info(function(){return"TIMEOUT: "+l})}xr.prototype.info=function(){};function Hm(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<b.length;F++)b[F]=""}}}}return wo(d)}catch{return l}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ec={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function qs(){}V(qs,vo),qs.prototype.g=function(){return new XMLHttpRequest},qs.prototype.i=function(){return{}},Ro=new qs;function Ie(o,l,d,g){this.j=o,this.i=l,this.l=d,this.R=g||1,this.U=new Pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}var rc={},So={};function Po(o,l,d){o.L=1,o.v=Gs(ae(l)),o.m=d,o.P=!0,sc(o,null)}function sc(o,l){o.F=Date.now(),js(o),o.A=ae(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),yc(d.i,"t",g),o.C=0,d=o.j.J,o.h=new nc,o.g=Fc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new zm(p(o.Y,o,o.g),o.O)),l=o.U,d=o.g,g=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Qu[0]=b.toString()),b=Qu);for(var P=0;P<b.length;P++){var F=qu(d,b[P],g||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Cr(),Km(o.i,o.u,o.A,o.l,o.R,o.m)}Ie.prototype.ca=function(o){o=o.target;const l=this.M;l&&ue(o)==3?l.j():this.Y(o)},Ie.prototype.Y=function(o){try{if(o==this.g)t:{const Dt=ue(this.g);var l=this.g.Ba();const Cn=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||bc(this.g)))){this.J||Dt!=4||l==7||(l==8||0>=Cn?Cr(3):Cr(2)),Vo(this);var d=this.g.Z();this.X=d;e:if(ic(this)){var g=bc(this.g);o="";var b=g.length,P=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Je(this),Nr(this);var F="";break e}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(P&&l==b-1)});g.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,Qm(this.i,this.u,this.A,this.l,this.R,Dt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var it,bt=this.g;if((it=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(it)){var Y=it;break e}}Y=null}if(d=Y)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Co(this,d);else{this.o=!1,this.s=3,Lt(12),Je(this),Nr(this);break t}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<F.length;)if(Ht=Xm(this,F),Ht==So){Dt==4&&(this.s=4,Lt(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==rc){this.s=4,Lt(15),Sn(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,Ht,null),Co(this,Ht);if(ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||F.length!=0||this.h.h||(this.s=1,Lt(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,F,"[Invalid Chunked Response]"),Je(this),Nr(this);else if(0<F.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Fo(Ct),Ct.M=!0,Lt(11))}}else Sn(this.i,this.l,F,null),Co(this,F);Dt==4&&Je(this),this.o&&!this.J&&(Dt==4?xc(this.j,this):(this.o=!1,js(this)))}else fg(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Je(this),Nr(this)}}}catch{}finally{}};function ic(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Xm(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?So:(d=Number(l.substring(d,g)),isNaN(d)?rc:(g+=1,g+d>l.length?So:(l=l.slice(g,g+d),o.C=g+d,l)))}Ie.prototype.cancel=function(){this.J=!0,Je(this)};function js(o){o.S=Date.now()+o.I,oc(o,o.I)}function oc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Dr(p(o.ba,o),l)}function Vo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Ie.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wm(this.i,this.A),this.L!=2&&(Cr(),Lt(17)),Je(this),this.s=2,Nr(this)):oc(this,this.S-o)};function Nr(o){o.j.G==0||o.J||xc(o.j,o)}function Je(o){Vo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Wu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Co(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Do(d.h,o))){if(!o.K&&Do(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Js(d),Hs(d);else break t;Oo(d),Lt(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Dr(p(d.Za,d),6e3));if(1>=cc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ze(d,11)}else if((o.K||d.g==o)&&Js(d),!q(l))for(b=d.Da.g.parse(l),l=0;l<b.length;l++){let Y=b[l];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Ct=Y[3];Ct!=null&&(d.la=Ct,d.j.info("VER="+d.la));const Dt=Y[4];Dt!=null&&(d.Aa=Dt,d.j.info("SVER="+d.Aa));const Cn=Y[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(g=1.5*Cn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=o.g;if(Ht){const Zs=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var P=g.h;P.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xo(P,P.h),P.h=null))}if(g.D){const Mo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(g.ya=Mo,at(g.I,g.D,Mo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var F=o;if(g.qa=Oc(g,g.J?g.ia:null,g.W),F.K){lc(g.h,F);var it=F,bt=g.L;bt&&(it.I=bt),it.B&&(Vo(it),js(it)),g.g=F}else Cc(g);0<d.i.length&&Xs(d)}else Y[0]!="stop"&&Y[0]!="close"||Ze(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Ze(d,7):ko(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}Cr(4)}catch{}}var Jm=class{constructor(o,l){this.g=o,this.map=l}};function ac(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cc(o){return o.h?1:o.g?o.g.size:0}function Do(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function xo(o,l){o.g?o.g.add(l):o.h=l}function lc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ac.prototype.cancel=function(){if(this.i=hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return D(o.i)}function Ym(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map!="undefined"&&o instanceof Map||typeof Set!="undefined"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,g=0;g<d;g++)l.push(o[g]);return l}l=[],d=0;for(g in o)l[d++]=o[g];return l}function Zm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map!="undefined"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set!="undefined"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const g in o)l[d++]=g;return l}}}function dc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Zm(o),g=Ym(o),b=g.length,P=0;P<b;P++)l.call(void 0,g[P],d&&d[P],o)}var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tg(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),b=null;if(0<=g){var P=o[d].substring(0,g);b=o[d].substring(g+1)}else P=o[d];l(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ye(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ye){this.h=o.h,zs(this,o.j),this.o=o.o,this.g=o.g,$s(this,o.s),this.l=o.l;var l=o.i,d=new Fr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),mc(this,d),this.m=o.m}else o&&(l=String(o).match(fc))?(this.h=!1,zs(this,l[1]||"",!0),this.o=kr(l[2]||""),this.g=kr(l[3]||"",!0),$s(this,l[4]),this.l=kr(l[5]||"",!0),mc(this,l[6]||"",!0),this.m=kr(l[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}Ye.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Or(l,gc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Or(l,gc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Or(d,d.charAt(0)=="/"?rg:ng,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Or(d,ig)),o.join("")};function ae(o){return new Ye(o)}function zs(o,l,d){o.j=d?kr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function $s(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function mc(o,l,d){l instanceof Fr?(o.i=l,og(o.i,o.h)):(d||(l=Or(l,sg)),o.i=new Fr(l,o.h))}function at(o,l,d){o.i.set(l,d)}function Gs(o){return at(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Or(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,eg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function eg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gc=/[#\/\?@]/g,ng=/[#\?:]/g,rg=/[#\?]/g,sg=/[#\?@]/g,ig=/#/g;function Fr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ee(o){o.g||(o.g=new Map,o.h=0,o.i&&tg(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Fr.prototype,r.add=function(o,l){Ee(this),this.i=null,o=Pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function pc(o,l){Ee(o),l=Pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function _c(o,l){return Ee(o),l=Pn(o,l),o.g.has(l)}r.forEach=function(o,l){Ee(this),this.g.forEach(function(d,g){d.forEach(function(b){o.call(l,b,g,this)},this)},this)},r.na=function(){Ee(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let g=0;g<l.length;g++){const b=o[g];for(let P=0;P<b.length;P++)d.push(l[g])}return d},r.V=function(o){Ee(this);let l=[];if(typeof o=="string")_c(this,o)&&(l=l.concat(this.g.get(Pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return Ee(this),this.i=null,o=Pn(this,o),_c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function yc(o,l,d){pc(o,l),0<d.length&&(o.i=null,o.g.set(Pn(o,l),D(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var g=l[d];const P=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var b=P;F[g]!==""&&(b+="="+encodeURIComponent(String(F[g]))),o.push(b)}}return this.i=o.join("&")};function Pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function og(o,l){l&&!o.j&&(Ee(o),o.i=null,o.g.forEach(function(d,g){var b=g.toLowerCase();g!=b&&(pc(this,g),yc(this,b,d))},o)),o.j=l}function ag(o,l){const d=new xr;if(u.Image){const g=new Image;g.onload=v(Te,d,"TestLoadImage: loaded",!0,l,g),g.onerror=v(Te,d,"TestLoadImage: error",!1,l,g),g.onabort=v(Te,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=v(Te,d,"TestLoadImage: timeout",!1,l,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function ug(o,l){const d=new xr,g=new AbortController,b=setTimeout(()=>{g.abort(),Te(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?Te(d,"TestPingServer: ok",!0,l):Te(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Te(d,"TestPingServer: error",!1,l)})}function Te(o,l,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function cg(){this.g=new Gm}function lg(o,l,d){const g=d||"";try{dc(o,function(b,P){let F=b;h(b)&&(F=wo(b)),l.push(g+P+"="+encodeURIComponent(F))})}catch(b){throw l.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ks(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Ks,vo),Ks.prototype.g=function(){return new Qs(this.l,this.j)},Ks.prototype.i=(function(o){return function(){return o}})({});function Qs(o,l){Vt.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Qs,Vt),r=Qs.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Lr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Lr(this)),this.g&&(this.readyState=3,Lr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream!="undefined"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Mr(this):Lr(this),this.readyState==3&&Ic(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Mr(this))},r.Qa=function(o){this.g&&(this.response=o,Mr(this))},r.ga=function(){this.g&&Mr(this)};function Mr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Lr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Lr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ec(o){let l="";return G(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function No(o,l,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=Ec(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):at(o,l,d))}function mt(o){Vt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(mt,Vt);var hg=/^https?$/i,dg=["POST","PUT"];r=mt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Hu(this.o):Hu(Ro),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Tc(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(dg,l,void 0))||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of d)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ac(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Tc(this,P)}};function Tc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,wc(o),Ws(o)}function wc(o){o.A||(o.A=!0,Mt(o,"complete"),Mt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Mt(this,"complete"),Mt(this,"abort"),Ws(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),mt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?vc(this):this.bb())},r.bb=function(){vc(this)};function vc(o){if(o.h&&typeof a!="undefined"&&(!o.v[1]||ue(o)!=4||o.Z()!=2)){if(o.u&&ue(o)==4)Gu(o.Ea,0,o);else if(Mt(o,"readystatechange"),ue(o)==4){o.h=!1;try{const F=o.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var d;if(!(d=l)){var g;if(g=F===0){var b=String(o.D).match(fc)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),g=!hg.test(b?b.toLowerCase():"")}d=g}if(d)Mt(o,"complete"),Mt(o,"success");else{o.m=6;try{var P=2<ue(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",wc(o)}}finally{Ws(o)}}}}function Ws(o,l){if(o.g){Ac(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Mt(o,"ready");try{d.onreadystatechange=g}catch{}}}function Ac(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ue(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),$m(l)}};function bc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fg(o){const l={};o=(o.g&&2<=ue(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(q(o[g]))continue;var d=w(o[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}E(l,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Rc(o){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Br("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Br("baseRetryDelayMs",5e3,o),this.cb=Br("retryDelaySeedMs",1e4,o),this.Wa=Br("forwardChannelMaxRetries",2,o),this.wa=Br("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ac(o&&o.concurrentRequestLimit),this.Da=new cg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Rc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,g){Lt(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Oc(this,null,this.W),Xs(this)};function ko(o){if(Sc(o),o.G==3){var l=o.U++,d=ae(o.I);if(at(d,"SID",o.K),at(d,"RID",l),at(d,"TYPE","terminate"),Ur(o,d),l=new Ie(o,o.j,l),l.L=2,l.v=Gs(ae(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Fc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),js(l)}kc(o)}function Hs(o){o.g&&(Fo(o),o.g.cancel(),o.g=null)}function Sc(o){Hs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Js(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Xs(o){if(!uc(o.h)&&!o.s){o.s=!0;var l=o.Ga;br||Uu(),Rr||(br(),Rr=!0),mo.add(l,o),o.B=0}}function mg(o,l){return cc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Dr(p(o.Ga,o,l),Nc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new Ie(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)t:{for(var l=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=d;break t}if(l===4096||d===this.i.length-1){l=d+1;break t}}l=1e3}else l=1e3;l=Vc(this,b,l),d=ae(this.I),at(d,"RID",o),at(d,"CVER",22),this.D&&at(d,"X-HTTP-Session-Id",this.D),Ur(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Ec(P)))+"&"+l:this.m&&No(d,this.m,P)),xo(this.h,b),this.Ua&&at(d,"TYPE","init"),this.P?(at(d,"$req",l),at(d,"SID","null"),b.T=!0,Po(b,d,null)):Po(b,d,l),this.G=2}}else this.G==3&&(o?Pc(this,o):this.i.length==0||uc(this.h)||Pc(this))};function Pc(o,l){var d;l?d=l.l:d=o.U++;const g=ae(o.I);at(g,"SID",o.K),at(g,"RID",d),at(g,"AID",o.T),Ur(o,g),o.m&&o.o&&No(g,o.m,o.o),d=new Ie(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Vc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xo(o.h,d),Po(d,g,l)}function Ur(o,l){o.H&&G(o.H,function(d,g){at(l,g,d)}),o.l&&dc({},function(d,g){at(l,g,d)})}function Vc(o,l,d){d=Math.min(o.i.length,d);var g=o.l?p(o.l.Na,o.l,o):null;t:{var b=o.i;let P=-1;for(;;){const F=["count="+d];P==-1?0<d?(P=b[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let it=!0;for(let bt=0;bt<d;bt++){let Y=b[bt].g;const Ct=b[bt].map;if(Y-=P,0>Y)P=Math.max(0,b[bt].g-100),it=!1;else try{lg(Ct,F,"req"+Y+"_")}catch{g&&g(Ct)}}if(it){g=F.join("&");break t}}}return o=o.i.splice(0,d),l.D=o,g}function Cc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;br||Uu(),Rr||(br(),Rr=!0),mo.add(l,o),o.v=0}}function Oo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Dr(p(o.Fa,o),Nc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Dc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Dr(p(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Hs(this),Dc(this))};function Fo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Dc(o){o.g=new Ie(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ae(o.qa);at(l,"RID","rpc"),at(l,"SID",o.K),at(l,"AID",o.T),at(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&at(l,"TO",o.ja),at(l,"TYPE","xmlhttp"),Ur(o,l),o.m&&o.o&&No(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Gs(ae(l)),d.m=null,d.P=!0,sc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Hs(this),Oo(this),Lt(19))};function Js(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function xc(o,l){var d=null;if(o.g==l){Js(o),Fo(o),o.g=null;var g=2}else if(Do(o.h,l))d=l.D,lc(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;g=Bs(),Mt(g,new tc(g,d)),Xs(o)}else Cc(o);else if(b=l.s,b==3||b==0&&0<l.X||!(g==1&&mg(o,l)||g==2&&Oo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),b){case 1:Ze(o,5);break;case 4:Ze(o,10);break;case 3:Ze(o,6);break;default:Ze(o,2)}}}function Nc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Ze(o,l){if(o.j.info("Error code "+l),l==2){var d=p(o.fb,o),g=o.Xa;const b=!g;g=new Ye(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||zs(g,"https"),Gs(g),b?ag(g.toString(),d):ug(g.toString(),d)}else Lt(2);o.G=0,o.l&&o.l.sa(l),kc(o),Sc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function kc(o){if(o.G=0,o.ka=[],o.l){const l=hc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Oc(o,l,d){var g=d instanceof Ye?ae(d):new Ye(d);if(g.g!="")l&&(g.g=l+"."+g.g),$s(g,g.s);else{var b=u.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var P=new Ye(null);g&&zs(P,g),l&&(P.g=l),b&&$s(P,b),d&&(P.l=d),g=P}return d=o.D,l=o.ya,d&&l&&at(g,d,l),at(g,"VER",o.la),Ur(o,g),g}function Fc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new mt(new Ks({eb:d})):new mt(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mc(){}r=Mc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ys(){}Ys.prototype.g=function(o,l){return new Gt(o,l)};function Gt(o,l){Vt.call(this),this.g=new Rc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Vn(this)}V(Gt,Vt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){ko(this.g)},Gt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=wo(o),o=d);l.i.push(new Jm(l.Ya++,o)),l.G==3&&Xs(l)},Gt.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,Gt.aa.N.call(this)};function Lc(o){Ao.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const d in l){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(Lc,Ao);function Bc(){bo.call(this),this.status=1}V(Bc,bo);function Vn(o){this.g=o}V(Vn,Mc),Vn.prototype.ua=function(){Mt(this.g,"a")},Vn.prototype.ta=function(o){Mt(this.g,new Lc(o))},Vn.prototype.sa=function(o){Mt(this.g,new Bc)},Vn.prototype.ra=function(){Mt(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,jh=function(){return new Ys},qh=function(){return Bs()},Uh=Xe,ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,ui=Us,ec.COMPLETE="complete",Bh=ec,Xu.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,Kr=Xu,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,Lh=mt}).apply(typeof ti!="undefined"?ti:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Yc="@firebase/firestore",Zc="4.8.0";/**
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
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let dr="11.10.0";/**
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
 */const ke=new xh("@firebase/firestore");function Mn(){return ke.logLevel}function Hp(r){ke.setLogLevel(r)}function N(r,...t){if(ke.logLevel<=J.DEBUG){const e=t.map(xa);ke.debug(`Firestore (${dr}): ${r}`,...e)}}function gt(r,...t){if(ke.logLevel<=J.ERROR){const e=t.map(xa);ke.error(`Firestore (${dr}): ${r}`,...e)}}function Ft(r,...t){if(ke.logLevel<=J.WARN){const e=t.map(xa);ke.warn(`Firestore (${dr}): ${r}`,...e)}}function xa(r){if(typeof r=="string")return r;try{/**
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
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
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
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,zh(r,n,e)}function zh(r,t,e){let n=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw gt(n),new Error(n)}function U(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||zh(t,s,n)}function Xp(r,t){r||M(57014,t)}function O(r,t){return r}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends hr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class At{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class $h{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Gh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(vt.UNAUTHENTICATED)))}shutdown(){}}class Jp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Yp{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){U(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},u=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new $h(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class Zp{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class t_{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Zp(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ea{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e_{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){U(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ea(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(U(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ea(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class n_{getToken(){return Promise.resolve(new ea(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */function r_(r){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function Na(){return new TextEncoder}/**
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
 */class Ui{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=r_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function na(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return z(n,s);{const i=Na(),a=s_(i.encode(tl(r,e)),i.encode(tl(t,e)));return a!==0?a:z(n,s)}}e+=n>65535?2:1}return z(r.length,t.length)}function tl(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function s_(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return z(r[e],t[e]);return z(r.length,t.length)}function $n(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function Kh(r){return r+"\0"}/**
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
 */const ra="__name__";class Zt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Zt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return z(t.length,e.length)}static compareSegments(t,e){const n=Zt.isNumericId(t),s=Zt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Zt.extractNumericId(t).compare(Zt.extractNumericId(e)):na(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return De.fromString(t.substring(4,t.length-2))}}class Q extends Zt{construct(t,e,n){return new Q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const i_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Zt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return i_.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ra}static keyField(){return new ct([ra])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new C(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new C(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}/**
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
 */function ka(r,t,e){if(!e)throw new C(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Qh(r,t,e,n){if(t===!0&&n===!0)throw new C(R.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function el(r){if(!k.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function nl(r){if(k.isDocumentKey(r))throw new C(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Wh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function W(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qi(r);throw new C(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Hh(r,t){if(t<=0)throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r,t){const e={typeString:r};return t&&(e.value=t),e}function wn(r,t){if(!Wh(r))throw new C(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new C(R.INVALID_ARGUMENT,e);return!0}/**
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
 */const rl=-62135596800,sl=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*sl);return new Z(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<rl)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sl}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(wn(t,Z._jsonSchema))return new Z(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rl;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:yt("string",Z._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new Z(0,0))}static max(){return new j(new Z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gn=-1;class Kn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function sa(r){return r.fields.find((t=>t.kind===2))}function nn(r){return r.fields.filter((t=>t.kind!==2))}function o_(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=a_(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}Kn.UNKNOWN_ID=-1;class ln{constructor(t,e){this.fieldPath=t,this.kind=e}}function a_(r,t){const e=ct.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class Qn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Qn(0,Qt.min())}}function Xh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=j.fromTimestamp(n===1e9?new Z(e+1,0):new Z(e,n));return new Qt(s,k.empty(),t)}function Jh(r){return new Qt(r.readTime,r.key,Gn)}class Qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qt(j.min(),k.empty(),Gn)}static max(){return new Qt(j.max(),k.empty(),Gn)}}function Oa(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const Yh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function je(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==Yh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):A.reject(e)}static resolve(t){return new A(((e,n)=>{e(t)}))}static reject(t){return new A(((e,n)=>{n(t)}))}static waitFor(t){return new A(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(c=>n(c)))})),a=!0,i===s&&e()}))}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next((s=>s?A.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new A(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;e(t[h]).next((f=>{a[h]=f,++u,u===i&&n(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new A(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
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
 */const Kt="SimpleDb";class ji{static open(t,e,n,s){try{return new ji(e,t.transaction(s,n))}catch(i){throw new Jr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new At,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Jr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Fa(n.target.error);this.S.reject(new Jr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(Kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new c_(e)}}class re{static delete(t){return N(Kt,"Removing database:",t),sn(Ah().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!Ch())return!1;if(re.F())return!0;const t=Ii(),e=re.M(t),n=0<e&&e<10,s=td(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process!="undefined"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,re.M(Ii())===12.2&&gt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(N(Kt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new Jr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new C(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Jr(t,a))},s.onupgradeneeded=i=>{N(Kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next((()=>{N(Kt,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(e=>{const n=e.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(e=>{var n;e.newVersion===null&&(Ft('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=ji.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next((h=>(u.v(),h))).catch((h=>(u.abort(h),A.reject(h)))).toPromise();return c.catch((()=>{})),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(N(Kt,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function td(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class u_{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return sn(this.$.delete())}}class Jr extends C{constructor(t,e){super(R.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ze(r){return r.name==="IndexedDbTransactionError"}class c_{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(Kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(Kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),sn(n)}add(t){return N(Kt,"ADD",this.store.name,t,t),sn(this.store.add(t))}get(t){return sn(this.store.get(t)).next((e=>(e===void 0&&(e=null),N(Kt,"GET",this.store.name,t,e),e)))}delete(t){return N(Kt,"DELETE",this.store.name,t),sn(this.store.delete(t))}count(){return N(Kt,"COUNT",this.store.name),sn(this.store.count())}j(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}{const i=this.cursor(n),a=[];return this.J(i,((u,c)=>{a.push(c)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}Y(t,e){N(Kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const s=this.cursor(n);return this.J(s,((i,a,u)=>u.delete()))}X(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.J(s,e)}ee(t){const e=this.cursor({});return new A(((n,s)=>{e.onerror=i=>{const a=Fa(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}J(t,e){const n=[];return new A(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new u_(u),h=e(u.primaryKey,u.value,c);if(h instanceof A){const f=h.catch((m=>(c.done(),A.reject(m))));n.push(f)}c.isDone?s():c.W===null?u.continue():u.continue(c.W)}})).next((()=>A.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function sn(r){return new A(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Fa(n.target.error);e(s)}}))}let il=!1;function Fa(r){const t=re.M(Ii());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return il||(il=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Yr="IndexBackfiller";class l_{constructor(t,e){this.asyncQueue=t,this.te=e,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(t){N(Yr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.te.re();N(Yr,`Documents written: ${e}`)}catch(e){ze(e)?N(Yr,"Ignoring IndexedDB error during index backfill: ",e):await je(e)}await this.ne(6e4)}))}}class h_{constructor(t,e){this.localStore=t,this.persistence=e}async re(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.ie(e,t)))}ie(t,e){const n=new Set;let s=e,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return N(Yr,`Processing collection: ${a}`),this.se(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}se(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.oe(s,i))).next((u=>(N(Yr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}oe(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=Jh(i);Oa(a,n)>0&&(n=a)})),new Qt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Ut{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ut.ue=-1;/**
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
 */const xe=-1;function Ts(r){return r==null}function us(r){return r===0&&1/r==-1/0}function ed(r){return typeof r=="number"&&Number.isInteger(r)&&!us(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const vi="";function kt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=ol(t)),t=d_(r.get(e),t);return ol(t)}function d_(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case vi:e+="";break;default:e+=i}}return e}function ol(r){return r+vi+""}function ee(r){const t=r.length;if(U(t>=2,64408,{path:r}),t===2)return U(r.charAt(0)===vi&&r.charAt(1)==="",56145,{path:r}),Q.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(vi,i);switch((a<0||a>e)&&M(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:M(61167,{path:r})}i=a+2}return new Q(n)}/**
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
 */const rn="remoteDocuments",ws="owner",Dn="owner",cs="mutationQueues",f_="userId",Xt="mutations",al="batchId",cn="userMutationsIndex",ul=["userId","batchId"];/**
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
 */function ci(r,t){return[r,kt(t)]}function nd(r,t,e){return[r,kt(t),e]}const m_={},Wn="documentMutations",Ai="remoteDocumentsV14",g_=["prefixPath","collectionGroup","readTime","documentId"],li="documentKeyIndex",p_=["prefixPath","collectionGroup","documentId"],rd="collectionGroupIndex",__=["collectionGroup","readTime","prefixPath","documentId"],ls="remoteDocumentGlobal",ia="remoteDocumentGlobalKey",Hn="targets",sd="queryTargetsIndex",y_=["canonicalId","targetId"],Xn="targetDocuments",I_=["targetId","path"],Ma="documentTargetsIndex",E_=["path","targetId"],bi="targetGlobalKey",hn="targetGlobal",hs="collectionParents",T_=["collectionId","parent"],Jn="clientMetadata",w_="clientId",zi="bundles",v_="bundleId",$i="namedQueries",A_="name",La="indexConfiguration",b_="indexId",oa="collectionGroupIndex",R_="collectionGroup",Zr="indexState",S_=["indexId","uid"],id="sequenceNumberIndex",P_=["uid","sequenceNumber"],ts="indexEntries",V_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],od="documentKeyIndex",C_=["indexId","uid","orderedDocumentKey"],Gi="documentOverlays",D_=["userId","collectionPath","documentId"],aa="collectionPathOverlayIndex",x_=["userId","collectionPath","largestBatchId"],ad="collectionGroupOverlayIndex",N_=["userId","collectionGroup","largestBatchId"],Ba="globals",k_="name",ud=[cs,Xt,Wn,rn,Hn,ws,hn,Xn,Jn,ls,hs,zi,$i],O_=[...ud,Gi],cd=[cs,Xt,Wn,Ai,Hn,ws,hn,Xn,Jn,ls,hs,zi,$i,Gi],ld=cd,Ua=[...ld,La,Zr,ts],F_=Ua,hd=[...Ua,Ba],M_=hd;/**
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
 */class ua extends Zh{constructor(t,e){super(),this.ce=t,this.currentSequenceNumber=e}}function Tt(r,t){const e=O(r);return re.N(e.ce,t)}/**
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
 */function cl(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function $e(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function dd(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function fd(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ot{constructor(t,e){this.comparator=t,this.root=e||Rt.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ei(this.root,t,this.comparator,!0)}}class ei{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n!=null?n:Rt.RED,this.left=s!=null?s:Rt.EMPTY,this.right=i!=null?i:Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Rt(t!=null?t:this.key,e!=null?e:this.value,n!=null?n:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new Rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ll(this.data.getIterator())}getIteratorFrom(t){return new ll(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class ll{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class qt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new qt([])}unionWith(t){let e=new rt(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return $n(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
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
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function L_(){return typeof atob!="undefined"}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new md("Invalid base64 string: "+i):i}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const B_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function de(r){if(U(!!r,39018),typeof r=="string"){let t=0;const e=B_.exec(r);if(U(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fe(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
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
 */const gd="server_timestamp",pd="__type__",_d="__previous_value__",yd="__local_write_time__";function Ki(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[pd])===null||e===void 0?void 0:e.stringValue)===gd}function Qi(r){const t=r.mapValue.fields[_d];return Ki(t)?Qi(t):t}function ds(r){const t=de(r.mapValue.fields[yd].timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class U_{constructor(t,e,n,s,i,a,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const fs="(default)";class Oe{constructor(t,e){this.projectId=t,this.database=e||fs}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===fs}isEqual(t){return t instanceof Oe&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const qa="__type__",Id="__max__",Se={mapValue:{fields:{__type__:{stringValue:Id}}}},ja="__vector__",Yn="value",hi={nullValue:"NULL_VALUE"};function Fe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ki(r)?4:Ed(r)?9007199254740991:Wi(r)?10:11:M(28295,{value:r})}function ie(r,t){if(r===t)return!0;const e=Fe(r);if(e!==Fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ds(r).isEqual(ds(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=de(s.timestampValue),u=de(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return fe(s.bytesValue).isEqual(fe(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=lt(s.doubleValue),u=lt(i.doubleValue);return a===u?us(a)===us(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return $n(r.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(cl(a)!==cl(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!ie(a[c],u[c])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function ms(r,t){return(r.values||[]).find((e=>ie(e,t)))!==void 0}function Me(r,t){if(r===t)return 0;const e=Fe(r),n=Fe(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=lt(i.integerValue||i.doubleValue),c=lt(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,t);case 3:return hl(r.timestampValue,t.timestampValue);case 4:return hl(ds(r),ds(t));case 5:return na(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=fe(i),c=fe(a);return u.compareTo(c)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=z(u[h],c[h]);if(f!==0)return f}return z(u.length,c.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=z(lt(i.latitude),lt(a.latitude));return u!==0?u:z(lt(i.longitude),lt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return dl(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,c,h,f;const m=i.fields||{},p=a.fields||{},v=(u=m[Yn])===null||u===void 0?void 0:u.arrayValue,V=(c=p[Yn])===null||c===void 0?void 0:c.arrayValue,D=z(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:dl(v,V)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Se.mapValue&&a===Se.mapValue)return 0;if(i===Se.mapValue)return 1;if(a===Se.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=na(c[m],f[m]);if(p!==0)return p;const v=Me(u[c[m]],h[f[m]]);if(v!==0)return v}return z(c.length,f.length)})(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function hl(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=de(r),n=de(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function dl(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Me(e[s],n[s]);if(i)return i}return z(e.length,n.length)}function Zn(r){return ca(r)}function ca(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=de(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return fe(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return k.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=ca(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${ca(e.fields[a])}`;return s+"}"})(r.mapValue):M(61005,{value:r})}function di(r){switch(Fe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qi(r);return t?16+di(t):16;case 5:return 2*r.stringValue.length;case 6:return fe(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+di(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return $e(n.fields,((i,a)=>{s+=i.length+di(a)})),s})(r.mapValue);default:throw M(13486,{value:r})}}function fn(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function la(r){return!!r&&"integerValue"in r}function gs(r){return!!r&&"arrayValue"in r}function fl(r){return!!r&&"nullValue"in r}function ml(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fi(r){return!!r&&"mapValue"in r}function Wi(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[qa])===null||e===void 0?void 0:e.stringValue)===ja}function es(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return $e(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=es(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=es(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ed(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Id}const Td={mapValue:{fields:{[qa]:{stringValue:ja},[Yn]:{arrayValue:{}}}}};function q_(r){return"nullValue"in r?hi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?fn(Oe.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Wi(r)?Td:{mapValue:{}}:M(35942,{value:r})}function j_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?fn(Oe.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Td:"mapValue"in r?Wi(r)?{mapValue:{}}:Se:M(61959,{value:r})}function gl(r,t){const e=Me(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function pl(r,t){const e=Me(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!fi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=es(e)}setAll(t){let e=ct.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=es(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());fi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];fi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){$e(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new St(es(this.value))}}function wd(r){const t=[];return $e(r.fields,((e,n)=>{const s=new ct([e]);if(fi(n)){const i=wd(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new qt(t)}/**
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
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,j.min(),j.min(),j.min(),St.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,j.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,j.min(),j.min(),St.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,j.min(),j.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Le{constructor(t,e){this.position=t,this.inclusive=e}}function _l(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(a.referenceValue),e.key):n=Me(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function yl(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ie(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class ps{constructor(t,e="asc"){this.field=t,this.dir=e}}function z_(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class vd{}class H extends vd{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new $_(t,e,n):e==="array-contains"?new Q_(t,n):e==="in"?new Vd(t,n):e==="not-in"?new W_(t,n):e==="array-contains-any"?new H_(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new G_(t,n):new K_(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Me(e,this.value)):e!==null&&Fe(this.value)===Fe(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends vd{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new et(t,e)}matches(t){return tr(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function tr(r){return r.op==="and"}function ha(r){return r.op==="or"}function za(r){return Ad(r)&&tr(r)}function Ad(r){for(const t of r.filters)if(t instanceof et)return!1;return!0}function da(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+Zn(r.value);if(za(r))return r.filters.map((t=>da(t))).join(",");{const t=r.filters.map((e=>da(e))).join(",");return`${r.op}(${t})`}}function bd(r,t){return r instanceof H?(function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&ie(n.value,s.value)})(r,t):r instanceof et?(function(n,s){return s instanceof et&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&bd(a,s.filters[u])),!0):!1})(r,t):void M(19439)}function Rd(r,t){const e=r.filters.concat(t);return et.create(e,r.op)}function Sd(r){return r instanceof H?(function(e){return`${e.field.canonicalString()} ${e.op} ${Zn(e.value)}`})(r):r instanceof et?(function(e){return e.op.toString()+" {"+e.getFilters().map(Sd).join(" ,")+"}"})(r):"Filter"}class $_ extends H{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class G_ extends H{constructor(t,e){super(t,"in",e),this.keys=Pd("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class K_ extends H{constructor(t,e){super(t,"not-in",e),this.keys=Pd("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Pd(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>k.fromName(n.referenceValue)))}class Q_ extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gs(e)&&ms(e.arrayValue,this.value)}}class Vd extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ms(this.value.arrayValue,e)}}class W_ extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ms(this.value.arrayValue,e)}}class H_ extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>ms(this.value.arrayValue,n)))}}/**
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
 */class X_{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function fa(r,t=null,e=[],n=[],s=null,i=null,a=null){return new X_(r,t,e,n,s,i,a)}function mn(r){const t=O(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>da(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Zn(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Zn(n))).join(",")),t.Pe=e}return t.Pe}function vs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!z_(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!bd(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!yl(r.startAt,t.startAt)&&yl(r.endAt,t.endAt)}function Ri(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Si(r,t){return r.filters.filter((e=>e instanceof H&&e.field.isEqual(t)))}function Il(r,t,e){let n=hi,s=!0;for(const i of Si(r,t)){let a=hi,u=!0;switch(i.op){case"<":case"<=":a=q_(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=hi}gl({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];gl({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function El(r,t,e){let n=Se,s=!0;for(const i of Si(r,t)){let a=Se,u=!0;switch(i.op){case">=":case">":a=j_(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=Se}pl({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];pl({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class me{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Cd(r,t,e,n,s,i,a,u){return new me(r,t,e,n,s,i,a,u)}function fr(r){return new me(r)}function Tl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function $a(r){return r.collectionGroup!==null}function jn(r){const t=O(r);if(t.Te===null){t.Te=[];const e=new Set;for(const i of t.explicitOrderBy)t.Te.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new rt(ct.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(u=u.add(h.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Te.push(new ps(i,n))})),e.has(ct.keyField().canonicalString())||t.Te.push(new ps(ct.keyField(),n))}return t.Te}function Ot(r){const t=O(r);return t.Ie||(t.Ie=xd(t,jn(r))),t.Ie}function Dd(r){const t=O(r);return t.de||(t.de=xd(t,r.explicitOrderBy)),t.de}function xd(r,t){if(r.limitType==="F")return fa(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ps(s.field,i)}));const e=r.endAt?new Le(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Le(r.startAt.position,r.startAt.inclusive):null;return fa(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ma(r,t){const e=r.filters.concat([t]);return new me(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Pi(r,t,e){return new me(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function As(r,t){return vs(Ot(r),Ot(t))&&r.limitType===t.limitType}function Nd(r){return`${mn(Ot(r))}|lt:${r.limitType}`}function Ln(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>Sd(s))).join(", ")}]`),Ts(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Zn(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Zn(s))).join(",")),`Target(${n})`})(Ot(r))}; limitType=${r.limitType})`}function bs(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of jn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,c){const h=_l(a,u,c);return a.inclusive?h<=0:h<0})(n.startAt,jn(n),s)||n.endAt&&!(function(a,u,c){const h=_l(a,u,c);return a.inclusive?h>=0:h>0})(n.endAt,jn(n),s))})(r,t)}function kd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Od(r){return(t,e)=>{let n=!1;for(const s of jn(r)){const i=J_(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function J_(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):(function(i,a,u){const c=a.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Me(c,h):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
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
 */const Y_=new ot(k.comparator);function jt(){return Y_}const Fd=new ot(k.comparator);function Qr(...r){let t=Fd;for(const e of r)t=t.insert(e.key,e);return t}function Md(r){let t=Fd;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ne(){return ns()}function Ld(){return ns()}function ns(){return new ge((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Z_=new ot(k.comparator),ty=new rt(k.comparator);function $(...r){let t=ty;for(const e of r)t=t.add(e);return t}const ey=new rt(z);function Ga(){return ey}/**
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
 */function Ka(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:us(t)?"-0":t}}function Bd(r){return{integerValue:""+r}}function Ud(r,t){return ed(t)?Bd(t):Ka(r,t)}/**
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
 */class Hi{constructor(){this._=void 0}}function ny(r,t,e){return r instanceof er?(function(s,i){const a={fields:{[pd]:{stringValue:gd},[yd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ki(i)&&(i=Qi(i)),i&&(a.fields[_d]=i),{mapValue:a}})(e,t):r instanceof gn?jd(r,t):r instanceof pn?zd(r,t):(function(s,i){const a=qd(s,i),u=wl(a)+wl(s.Ee);return la(a)&&la(s.Ee)?Bd(u):Ka(s.serializer,u)})(r,t)}function ry(r,t,e){return r instanceof gn?jd(r,t):r instanceof pn?zd(r,t):e}function qd(r,t){return r instanceof nr?(function(n){return la(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class er extends Hi{}class gn extends Hi{constructor(t){super(),this.elements=t}}function jd(r,t){const e=$d(t);for(const n of r.elements)e.some((s=>ie(s,n)))||e.push(n);return{arrayValue:{values:e}}}class pn extends Hi{constructor(t){super(),this.elements=t}}function zd(r,t){let e=$d(t);for(const n of r.elements)e=e.filter((s=>!ie(s,n)));return{arrayValue:{values:e}}}class nr extends Hi{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function wl(r){return lt(r.integerValue||r.doubleValue)}function $d(r){return gs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Rs{constructor(t,e){this.field=t,this.transform=e}}function sy(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof gn&&s instanceof gn||n instanceof pn&&s instanceof pn?$n(n.elements,s.elements,ie):n instanceof nr&&s instanceof nr?ie(n.Ee,s.Ee):n instanceof er&&s instanceof er})(r.transform,t.transform)}class iy{constructor(t,e){this.version=t,this.transformResults=e}}class ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mi(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Xi{}function Gd(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new gr(r.key,ht.none()):new mr(r.key,r.data,ht.none());{const e=r.data,n=St.empty();let s=new rt(ct.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new pe(r.key,n,new qt(s.toArray()),ht.none())}}function oy(r,t,e){r instanceof mr?(function(s,i,a){const u=s.value.clone(),c=Al(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof pe?(function(s,i,a){if(!mi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Al(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Kd(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function rs(r,t,e,n){return r instanceof mr?(function(i,a,u,c){if(!mi(i.precondition,a))return u;const h=i.value.clone(),f=bl(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(r,t,e,n):r instanceof pe?(function(i,a,u,c){if(!mi(i.precondition,a))return u;const h=bl(i.fieldTransforms,c,a),f=a.data;return f.setAll(Kd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(r,t,e,n):(function(i,a,u){return mi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function ay(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=qd(n.transform,s||null);i!=null&&(e===null&&(e=St.empty()),e.set(n.field,i))}return e||null}function vl(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$n(n,s,((i,a)=>sy(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class mr extends Xi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pe extends Xi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kd(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Al(r,t,e){const n=new Map;U(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,ry(a,u,e[s]))}return n}function bl(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,ny(i,a,t))}return n}class gr extends Xi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qa extends Xi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&oy(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=rs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=rs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ld();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=Gd(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(j.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$())}isEqual(t){return this.batchId===t.batchId&&$n(this.mutations,t.mutations,((e,n)=>vl(e,n)))&&$n(this.baseMutations,t.baseMutations,((e,n)=>vl(e,n)))}}class Ha{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){U(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let s=(function(){return Z_})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Ha(t,e,n,s)}}/**
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
 */class Xa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Qd{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class uy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var _t,X;function Wd(r){switch(r){case R.OK:return M(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Hd(r){if(r===void 0)return gt("GRPC error has no .code"),R.UNKNOWN;switch(r){case _t.OK:return R.OK;case _t.CANCELLED:return R.CANCELLED;case _t.UNKNOWN:return R.UNKNOWN;case _t.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case _t.INTERNAL:return R.INTERNAL;case _t.UNAVAILABLE:return R.UNAVAILABLE;case _t.UNAUTHENTICATED:return R.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case _t.NOT_FOUND:return R.NOT_FOUND;case _t.ALREADY_EXISTS:return R.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return R.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case _t.ABORTED:return R.ABORTED;case _t.OUT_OF_RANGE:return R.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return R.UNIMPLEMENTED;case _t.DATA_LOSS:return R.DATA_LOSS;default:return M(39323,{code:r})}}(X=_t||(_t={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Vi=null;/**
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
 */const cy=new De([4294967295,4294967295],0);function Rl(r){const t=Na().encode(r),e=new Mh;return e.update(t),new Uint8Array(e.digest())}function Sl(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new De([e,n],0),new De([s,i],0)]}class Ja{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Wr(`Invalid padding: ${e}`);if(n<0)throw new Wr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=De.fromNumber(this.fe)}pe(t,e,n){let s=t.add(e.multiply(De.fromNumber(n)));return s.compare(cy)===1&&(s=new De([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Rl(t),[n,s]=Sl(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);if(!this.ye(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ja(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.fe===0)return;const e=Rl(t),[n,s]=Sl(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ss{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Ps.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ss(j.min(),s,new ot(z),jt(),$())}}class Ps{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ps(n,e,$(),$(),$())}}/**
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
 */class gi{constructor(t,e,n,s){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=s}}class Xd{constructor(t,e){this.targetId=t,this.De=e}}class Jd{constructor(t,e,n=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Pl{constructor(){this.ve=0,this.Ce=Vl(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=$(),e=$(),n=$();return this.Ce.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:i})}})),new Ps(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=Vl()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ly{constructor(t){this.We=t,this.Ge=new Map,this.ze=jt(),this.je=ni(),this.Je=ni(),this.He=new ot(z)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,n=t.De.count,s=this.st(e);if(s){const i=s.target;if(Ri(i))if(n===0){const a=new k(i.path);this.Xe(e,a,ut.newNoDocument(a,j.min()))}else U(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const u=this._t(t),c=u?this.ut(u,t,a):1;if(c!==0){this.rt(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,h)}Vi==null||Vi.ct((function(f,m,p,v,V){var D,x,L,q,B,K;const tt={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},G=m.unchangedNames;return G&&(tt.bloomFilter={applied:V===0,hashCount:(D=G==null?void 0:G.hashCount)!==null&&D!==void 0?D:0,bitmapLength:(q=(L=(x=G==null?void 0:G.bits)===null||x===void 0?void 0:x.bitmap)===null||L===void 0?void 0:L.length)!==null&&q!==void 0?q:0,padding:(K=(B=G==null?void 0:G.bits)===null||B===void 0?void 0:B.padding)!==null&&K!==void 0?K:0,mightContain:E=>{var _;return(_=v==null?void 0:v.mightContain(E))!==null&&_!==void 0&&_}}),tt})(a,t.De,this.We.lt(),u,c))}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=fe(n).toUint8Array()}catch(c){if(c instanceof md)return Ft("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Ja(a,s,i)}catch(c){return Ft(c instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.fe===0?null:u}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,i,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((i,a)=>{const u=this.st(a);if(u){if(i.current&&Ri(u.target)){const c=new k(u.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,ut.newNoDocument(c,t))}i.Ne&&(e.set(a,i.Le()),i.ke())}}));let n=$();this.Je.forEach(((i,a)=>{let u=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(t)));const s=new Ss(t,e,this.He,this.ze,n);return this.ze=jt(),this.je=ni(),this.Je=ni(),this.He=new ot(z),s}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Pl,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new rt(z),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new rt(z),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Pl),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function ni(){return new ot(k.comparator)}function Vl(){return new ot(k.comparator)}const hy={asc:"ASCENDING",desc:"DESCENDING"},dy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fy={and:"AND",or:"OR"};class my{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ga(r,t){return r.useProto3Json||Ts(t)?t:{value:t}}function rr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function gy(r,t){return rr(r,t.toTimestamp())}function pt(r){return U(!!r,49232),j.fromTimestamp((function(e){const n=de(e);return new Z(n.seconds,n.nanos)})(r))}function Ya(r,t){return pa(r,t).canonicalString()}function pa(r,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Zd(r){const t=Q.fromString(r);return U(cf(t),10190,{key:t.toString()}),t}function _s(r,t){return Ya(r.databaseId,t.path)}function se(r,t){const e=Zd(t);if(e.get(1)!==r.databaseId.projectId)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(nf(e))}function tf(r,t){return Ya(r.databaseId,t)}function ef(r){const t=Zd(r);return t.length===4?Q.emptyPath():nf(t)}function _a(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nf(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Cl(r,t,e){return{name:_s(r,t),fields:e.value.mapValue.fields}}function Ji(r,t,e){const n=se(r,t.name),s=pt(t.updateTime),i=t.createTime?pt(t.createTime):j.min(),a=new St({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function py(r,t){return"found"in t?(function(n,s){U(!!s.found,43571),s.found.name,s.found.updateTime;const i=se(n,s.found.name),a=pt(s.found.updateTime),u=s.found.createTime?pt(s.found.createTime):j.min(),c=new St({mapValue:{fields:s.found.fields}});return ut.newFoundDocument(i,a,u,c)})(r,t):"missing"in t?(function(n,s){U(!!s.missing,3894),U(!!s.readTime,22933);const i=se(n,s.missing),a=pt(s.readTime);return ut.newNoDocument(i,a)})(r,t):M(7234,{result:t})}function _y(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(h){const f=h.code===void 0?R.UNKNOWN:Hd(h.code);return new C(f,h.message||"")})(a);e=new Jd(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=se(r,n.document.name),i=pt(n.document.updateTime),a=n.document.createTime?pt(n.document.createTime):j.min(),u=new St({mapValue:{fields:n.document.fields}}),c=ut.newFoundDocument(s,i,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];e=new gi(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=se(r,n.document),i=n.readTime?pt(n.readTime):j.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new gi([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=se(r,n.document),i=n.removedTargetIds||[];e=new gi([],i,s,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new uy(s,i),u=n.targetId;e=new Xd(u,a)}}return e}function ys(r,t){let e;if(t instanceof mr)e={update:Cl(r,t.key,t.value)};else if(t instanceof gr)e={delete:_s(r,t.key)};else if(t instanceof pe)e={update:Cl(r,t.key,t.data),updateMask:vy(t.fieldMask)};else{if(!(t instanceof Qa))return M(16599,{Rt:t.type});e={verify:_s(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof nr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw M(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:gy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)})(r,t.precondition)),e}function ya(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?ht.updateTime(pt(i.updateTime)):i.exists!==void 0?ht.exists(i.exists):ht.none()})(t.currentDocument):ht.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let c=null;if("setToServerValue"in u)U(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new er;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new gn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new pn(f)}else"increment"in u?c=new nr(a,u.increment):M(16584,{proto:u});const h=ct.fromServerFormat(u.fieldPath);return new Rs(h,c)})(r,s))):[];if(t.update){t.update.name;const s=se(r,t.update.name),i=new St({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(c){const h=c.fieldPaths||[];return new qt(h.map((f=>ct.fromServerFormat(f))))})(t.updateMask);return new pe(s,i,a,e,n)}return new mr(s,i,e,n)}if(t.delete){const s=se(r,t.delete);return new gr(s,e)}if(t.verify){const s=se(r,t.verify);return new Qa(s,e)}return M(1463,{proto:t})}function yy(r,t){return r&&r.length>0?(U(t!==void 0,14353),r.map((e=>(function(s,i){let a=s.updateTime?pt(s.updateTime):pt(i);return a.isEqual(j.min())&&(a=pt(i)),new iy(a,s.transformResults||[])})(e,t)))):[]}function rf(r,t){return{documents:[tf(r,t.path)]}}function Yi(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=tf(r,s);const i=(function(h){if(h.length!==0)return uf(et.create(h,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(p){return{field:be(p.field),direction:Ey(p.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ga(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{Vt:e,parent:s}}function sf(r,t,e,n){const{Vt:s,parent:i}=Yi(r,t),a={},u=[];let c=0;return e.forEach((h=>{const f=n?h.alias:"aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:be(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:be(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},ft:a,parent:i}}function of(r){let t=ef(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){U(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(m){const p=af(m);return p instanceof et&&za(p)?p.getFilters():[p]})(e.where));let a=[];e.orderBy&&(a=(function(m){return m.map((p=>(function(V){return new ps(Bn(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(p)))})(e.orderBy));let u=null;e.limit&&(u=(function(m){let p;return p=typeof m=="object"?m.value:m,Ts(p)?null:p})(e.limit));let c=null;e.startAt&&(c=(function(m){const p=!!m.before,v=m.values||[];return new Le(v,p)})(e.startAt));let h=null;return e.endAt&&(h=(function(m){const p=!m.before,v=m.values||[];return new Le(v,p)})(e.endAt)),Cd(t,s,a,i,u,"F",c,h)}function Iy(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function af(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bn(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bn(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return H.create(Bn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return et.create(e.compositeFilter.filters.map((n=>af(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Ey(r){return hy[r]}function Ty(r){return dy[r]}function wy(r){return fy[r]}function be(r){return{fieldPath:r.canonicalString()}}function Bn(r){return ct.fromServerFormat(r.fieldPath)}function uf(r){return r instanceof H?(function(e){if(e.op==="=="){if(ml(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NAN"}};if(fl(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ml(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NAN"}};if(fl(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:be(e.field),op:Ty(e.op),value:e.value}}})(r):r instanceof et?(function(e){const n=e.getFilters().map((s=>uf(s)));return n.length===1?n[0]:{compositeFilter:{op:wy(e.op),filters:n}}})(r):M(54877,{filter:r})}function vy(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function cf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ce{constructor(t,e,n,s,i=j.min(),a=j.min(),u=ft.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class lf{constructor(t){this.gt=t}}function Ay(r,t){let e;if(t.document)e=Ji(r.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),s=yn(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return M(56709);{const n=k.fromSegments(t.unknownDocument.path),s=yn(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new Z(s[0],s[1]);return j.fromTimestamp(i)})(t.readTime)),e}function Dl(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ci(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:_s(i,a.key),fields:a.data.value.mapValue.fields,updateTime:rr(i,a.version.toTimestamp()),createTime:rr(i,a.createTime.toTimestamp())}})(r.gt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:_n(t.version)};else{if(!t.isUnknownDocument())return M(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:_n(t.version)}}return n}function Ci(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function _n(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function yn(r){const t=new Z(r.seconds,r.nanoseconds);return j.fromTimestamp(t)}function on(r,t){const e=(t.baseMutations||[]).map((i=>ya(r.gt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>ya(r.gt,i))),s=Z.fromMillis(t.localWriteTimeMs);return new Wa(t.batchId,s,e,n)}function Hr(r){const t=yn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?yn(r.lastLimboFreeSnapshotVersion):j.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const a=i.documents.length;return U(a===1,1966,{count:a}),Ot(fr(ef(i.documents[0])))})(r.query):(function(i){return Ot(of(i))})(r.query),new ce(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ft.fromBase64String(r.resumeToken))}function hf(r,t){const e=_n(t.snapshotVersion),n=_n(t.lastLimboFreeSnapshotVersion);let s;s=Ri(t.target)?rf(r.gt,t.target):Yi(r.gt,t.target).Vt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:mn(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Zi(r){const t=of({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Pi(t,t.limit,"L"):t}function jo(r,t){return new Xa(t.largestBatchId,ya(r.gt,t.overlayMutation))}function xl(r,t){const e=t.path.lastSegment();return[r,kt(t.path.popLast()),e]}function Nl(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:_n(n.readTime),documentKey:kt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class by{getBundleMetadata(t,e){return kl(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:yn(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return kl(t).put((function(s){return{bundleId:s.id,createTime:_n(pt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return Ol(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:Zi(i.bundledQuery),readTime:yn(i.readTime)}})(n)}))}saveNamedQuery(t,e){return Ol(t).put((function(s){return{name:s.name,readTime:_n(pt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function kl(r){return Tt(r,zi)}function Ol(r){return Tt(r,$i)}/**
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
 */class to{constructor(t,e){this.serializer=t,this.userId=e}static yt(t,e){const n=e.uid||"";return new to(t,n)}getOverlay(t,e){return qr(t).get(xl(this.userId,e)).next((n=>n?jo(this.serializer,n):null))}getOverlays(t,e){const n=ne();return A.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new Xa(e,a);s.push(this.wt(t,u))})),A.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(kt(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(qr(t).Y(aa,u))})),A.waitFor(i)}getOverlaysForCollection(t,e,n){const s=ne(),i=kt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return qr(t).j(aa,a).next((u=>{for(const c of u){const h=jo(this.serializer,c);s.set(h.getKey(),h)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=ne();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return qr(t).X({index:ad,range:u},((c,h,f)=>{const m=jo(this.serializer,h);i.size()<s||m.largestBatchId===a?(i.set(m.getKey(),m),a=m.largestBatchId):f.done()})).next((()=>i))}wt(t,e){return qr(t).put((function(s,i,a){const[u,c,h]=xl(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ys(s.gt,a.mutation)}})(this.serializer,this.userId,e))}}function qr(r){return Tt(r,Gi)}/**
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
 */class Ry{St(t){return Tt(t,Ba)}getSessionToken(t){return this.St(t).get("sessionToken").next((e=>{const n=e==null?void 0:e.value;return n?ft.fromUint8Array(n):ft.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.St(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class an{constructor(){}bt(t,e){this.Dt(t,e),e.vt()}Dt(t,e){if("nullValue"in t)this.Ct(e,5);else if("booleanValue"in t)this.Ct(e,10),e.Ft(t.booleanValue?1:0);else if("integerValue"in t)this.Ct(e,15),e.Ft(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.Ct(e,13):(this.Ct(e,15),us(n)?e.Ft(0):e.Ft(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ct(e,20),typeof n=="string"&&(n=de(n)),e.Mt(`${n.seconds||""}`),e.Ft(n.nanos||0)}else if("stringValue"in t)this.xt(t.stringValue,e),this.Ot(e);else if("bytesValue"in t)this.Ct(e,30),e.Nt(fe(t.bytesValue)),this.Ot(e);else if("referenceValue"in t)this.Bt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ct(e,45),e.Ft(n.latitude||0),e.Ft(n.longitude||0)}else"mapValue"in t?Ed(t)?this.Ct(e,Number.MAX_SAFE_INTEGER):Wi(t)?this.Lt(t.mapValue,e):(this.kt(t.mapValue,e),this.Ot(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Ot(e)):M(19022,{Qt:t})}xt(t,e){this.Ct(e,25),this.$t(t,e)}$t(t,e){e.Mt(t)}kt(t,e){const n=t.fields||{};this.Ct(e,55);for(const s of Object.keys(n))this.xt(s,e),this.Dt(n[s],e)}Lt(t,e){var n,s;const i=t.fields||{};this.Ct(e,53);const a=Yn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Ct(e,15),e.Ft(lt(u)),this.xt(a,e),this.Dt(i[a],e)}qt(t,e){const n=t.values||[];this.Ct(e,50);for(const s of n)this.Dt(s,e)}Bt(t,e){this.Ct(e,37),k.fromName(t).path.forEach((n=>{this.Ct(e,60),this.$t(n,e)}))}Ct(t,e){t.Ft(e)}Ot(t){t.Ft(2)}}an.Ut=new an;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=255;function Sy(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Fl(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Sy(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class Py{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Wt(n.value),n=e.next();this.Gt()}zt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.jt(n.value),n=e.next();this.Jt()}Ht(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const s=e.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=e.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(t){const e=this.Xt(t),n=Fl(e);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}tn(t){const e=this.Xt(t),n=Fl(e);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}nn(){this.rn(Nn),this.rn(255)}sn(){this._n(Nn),this._n(255)}reset(){this.position=0}seed(t){this.en(t.length),this.buffer.set(t,this.position),this.position+=t.length}an(){return this.buffer.slice(0,this.position)}Xt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Wt(t){const e=255&t;e===0?(this.rn(0),this.rn(255)):e===Nn?(this.rn(Nn),this.rn(0)):this.rn(e)}jt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===Nn?(this._n(Nn),this._n(0)):this._n(t)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(t){this.en(1),this.buffer[this.position++]=t}_n(t){this.en(1),this.buffer[this.position++]=~t}en(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Vy{constructor(t){this.un=t}Nt(t){this.un.Kt(t)}Mt(t){this.un.Ht(t)}Ft(t){this.un.Zt(t)}vt(){this.un.nn()}}class Cy{constructor(t){this.un=t}Nt(t){this.un.zt(t)}Mt(t){this.un.Yt(t)}Ft(t){this.un.tn(t)}vt(){this.un.sn()}}class jr{constructor(){this.un=new Py,this.cn=new Vy(this.un),this.ln=new Cy(this.un)}seed(t){this.un.seed(t)}hn(t){return t===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class un{constructor(t,e,n,s){this.Pn=t,this.Tn=e,this.In=n,this.dn=s}En(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new un(this.Pn,this.Tn,this.In,n)}An(t,e,n){return{indexId:this.Pn,uid:t,arrayValue:pi(this.In),directionalValue:pi(this.dn),orderedDocumentKey:pi(e),documentKey:n.path.toArray()}}Rn(t,e,n){const s=this.An(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function we(r,t){let e=r.Pn-t.Pn;return e!==0?e:(e=Ml(r.In,t.In),e!==0?e:(e=Ml(r.dn,t.dn),e!==0?e:k.comparator(r.Tn,t.Tn)))}function Ml(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function pi(r){return Vh()?(function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n})(r):r}function Ll(r){return typeof r!="string"?r:(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(r)}class Bl{constructor(t){this.Vn=new rt(((e,n)=>ct.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.mn=t.orderBy,this.fn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(t){if(U(t.collectionGroup===this.collectionId,49279),this.gn)return!1;const e=sa(t);if(e!==void 0&&!this.yn(e))return!1;const n=nn(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.yn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.wn(u,c)||!this.Sn(this.mn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.mn.length||!this.Sn(this.mn[a++],u))return!1}return!0}bn(){if(this.gn)return null;let t=new rt(ct.comparator);const e=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ln(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ln(n.field,0))}for(const n of this.mn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ln(n.field,n.dir==="asc"?0:1)));return new Kn(Kn.UNKNOWN_ID,this.collectionId,e,Qn.empty())}yn(t){for(const e of this.fn)if(this.wn(e,t))return!0;return!1}wn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function df(r){var t,e;if(U(r instanceof H||r instanceof et,20012),r instanceof H){if(r instanceof Vd){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>H.create(r.field,"==",i))))||[];return et.create(s,"or")}return r}const n=r.filters.map((s=>df(s)));return et.create(n,r.op)}function Dy(r){if(r.getFilters().length===0)return[];const t=Ta(df(r));return U(ff(t),7391),Ia(t)||Ea(t)?[t]:t.getFilters()}function Ia(r){return r instanceof H}function Ea(r){return r instanceof et&&za(r)}function ff(r){return Ia(r)||Ea(r)||(function(e){if(e instanceof et&&ha(e)){for(const n of e.getFilters())if(!Ia(n)&&!Ea(n))return!1;return!0}return!1})(r)}function Ta(r){if(U(r instanceof H||r instanceof et,34018),r instanceof H)return r;if(r.filters.length===1)return Ta(r.filters[0]);const t=r.filters.map((n=>Ta(n)));let e=et.create(t,r.op);return e=Di(e),ff(e)?e:(U(e instanceof et,64498),U(tr(e),40251),U(e.filters.length>1,57927),e.filters.reduce(((n,s)=>Za(n,s))))}function Za(r,t){let e;return U(r instanceof H||r instanceof et,38388),U(t instanceof H||t instanceof et,25473),e=r instanceof H?t instanceof H?(function(s,i){return et.create([s,i],"and")})(r,t):Ul(r,t):t instanceof H?Ul(t,r):(function(s,i){if(U(s.filters.length>0&&i.filters.length>0,48005),tr(s)&&tr(i))return Rd(s,i.getFilters());const a=ha(s)?s:i,u=ha(s)?i:s,c=a.filters.map((h=>Za(h,u)));return et.create(c,"or")})(r,t),Di(e)}function Ul(r,t){if(tr(t))return Rd(t,r.getFilters());{const e=t.filters.map((n=>Za(r,n)));return et.create(e,"or")}}function Di(r){if(U(r instanceof H||r instanceof et,11850),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return Di(t[0]);if(Ad(r))return r;const e=t.map((s=>Di(s))),n=[];return e.forEach((s=>{s instanceof H?n.push(s):s instanceof et&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:et.create(n,r.op)}/**
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
 */class xy{constructor(){this.Dn=new tu}addToCollectionParentIndex(t,e){return this.Dn.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(Qt.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class tu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new rt(Q.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new rt(Q.comparator)).toArray()}}/**
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
 */const ql="IndexedDbIndexManager",ri=new Uint8Array(0);class Ny{constructor(t,e){this.databaseId=e,this.vn=new tu,this.Cn=new ge((n=>mn(n)),((n,s)=>vs(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.vn.add(e)}));const i={collectionId:n,parent:kt(s)};return jl(t).put(i)}return A.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Kh(e),""],!1,!0);return jl(t).j(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(ee(a.parent))}return n}))}addFieldIndex(t,e){const n=zr(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=On(t);return i.next((u=>{a.put(Nl(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=zr(t),s=On(t),i=kn(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=zr(t),n=kn(t),s=On(t);return e.Y().next((()=>n.Y())).next((()=>s.Y()))}createTargetIndexes(t,e){return A.forEach(this.Fn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new Bl(n).bn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=kn(t);let s=!0;const i=new Map;return A.forEach(this.Fn(e),(a=>this.Mn(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=$();const u=[];return A.forEach(i,((c,h)=>{N(ql,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((K=>`${K.fieldPath}:${K.kind}`)).join(",")}`})(c)} to execute ${mn(e)}`);const f=(function(B,K){const tt=sa(K);if(tt===void 0)return null;for(const G of Si(B,tt.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null})(h,c),m=(function(B,K){const tt=new Map;for(const G of nn(K))for(const E of Si(B,G.fieldPath))switch(E.op){case"==":case"in":tt.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return tt.set(G.fieldPath.canonicalString(),E.value),Array.from(tt.values())}return null})(h,c),p=(function(B,K){const tt=[];let G=!0;for(const E of nn(K)){const _=E.kind===0?Il(B,E.fieldPath,B.startAt):El(B,E.fieldPath,B.startAt);tt.push(_.value),G&&(G=_.inclusive)}return new Le(tt,G)})(h,c),v=(function(B,K){const tt=[];let G=!0;for(const E of nn(K)){const _=E.kind===0?El(B,E.fieldPath,B.endAt):Il(B,E.fieldPath,B.endAt);tt.push(_.value),G&&(G=_.inclusive)}return new Le(tt,G)})(h,c),V=this.xn(c,h,p),D=this.xn(c,h,v),x=this.On(c,h,m),L=this.Nn(c.indexId,f,V,p.inclusive,D,v.inclusive,x);return A.forEach(L,(q=>n.H(q,e.limit).next((B=>{B.forEach((K=>{const tt=k.fromSegments(K.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))}))}))))})).next((()=>u))}return A.resolve(null)}))}Fn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=Dy(et.create(t.filters,"and")).map((n=>fa(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.Cn.set(t,e),e)}Nn(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),h=c/(e!=null?e.length:1),f=[];for(let m=0;m<c;++m){const p=e?this.Bn(e[m/h]):ri,v=this.Ln(t,p,n[m%h],s),V=this.kn(t,p,i[m%h],a),D=u.map((x=>this.Ln(t,p,x,!0)));f.push(...this.createRange(v,V,D))}return f}Ln(t,e,n,s){const i=new un(t,k.empty(),e,n);return s?i:i.En()}kn(t,e,n,s){const i=new un(t,k.empty(),e,n);return s?i.En():i}Mn(t,e){const n=new Bl(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.pn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.Fn(e);return A.forEach(s,(i=>this.Mn(t,i).next((a=>{a?n!==0&&a.fields.length<(function(c){let h=new rt(ct.comparator),f=!1;for(const m of c.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}qn(t,e){const n=new jr;for(const s of nn(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.hn(s.kind);an.Ut.bt(i,a)}return n.an()}Bn(t){const e=new jr;return an.Ut.bt(t,e.hn(0)),e.an()}Qn(t,e){const n=new jr;return an.Ut.bt(fn(this.databaseId,e),n.hn((function(i){const a=nn(i);return a.length===0?0:a[a.length-1].kind})(t))),n.an()}On(t,e,n){if(n===null)return[];let s=[];s.push(new jr);let i=0;for(const a of nn(t)){const u=n[i++];for(const c of s)if(this.$n(e,a.fieldPath)&&gs(u))s=this.Un(s,a,u);else{const h=c.hn(a.kind);an.Ut.bt(u,h)}}return this.Kn(s)}xn(t,e,n){return this.On(t,e,n.position)}Kn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].an();return e}Un(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new jr;c.seed(u.an()),an.Ut.bt(a,c.hn(e.kind)),i.push(c)}return i}$n(t,e){return!!t.filters.find((n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=zr(t),s=On(t);return(e?n.j(oa,IDBKeyRange.bound(e,e)):n.j()).next((i=>{const a=[];return A.forEach(i,(u=>s.get([u.indexId,this.uid]).next((c=>{a.push((function(f,m){const p=m?new Qn(m.sequenceNumber,new Qt(yn(m.readTime),new k(ee(m.documentKey)),m.largestBatchId)):Qn.empty(),v=f.fields.map((([V,D])=>new ln(ct.fromServerFormat(V),D)));return new Kn(f.indexId,f.collectionGroup,v,p)})(u,c))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=zr(t),i=On(t);return this.Wn(t).next((a=>s.j(oa,IDBKeyRange.bound(e,e)).next((u=>A.forEach(u,(c=>i.put(Nl(c.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),A.forEach(u,(c=>this.Gn(t,s,c).next((h=>{const f=this.zn(i,c);return h.isEqual(f)?A.resolve():this.jn(t,i,c,h,f)})))))))}))}Jn(t,e,n,s){return kn(t).put(s.An(this.uid,this.Qn(n,e.key),e.key))}Hn(t,e,n,s){return kn(t).delete(s.Rn(this.uid,this.Qn(n,e.key),e.key))}Gn(t,e,n){const s=kn(t);let i=new rt(we);return s.X({index:od,range:IDBKeyRange.only([n.indexId,this.uid,pi(this.Qn(n,e))])},((a,u)=>{i=i.add(new un(n.indexId,e,Ll(u.arrayValue),Ll(u.directionalValue)))})).next((()=>i))}zn(t,e){let n=new rt(we);const s=this.qn(e,t);if(s==null)return n;const i=sa(e);if(i!=null){const a=t.data.field(i.fieldPath);if(gs(a))for(const u of a.arrayValue.values||[])n=n.add(new un(e.indexId,t.key,this.Bn(u),s))}else n=n.add(new un(e.indexId,t.key,ri,s));return n}jn(t,e,n,s,i){N(ql,"Updating index entries for document '%s'",e.key);const a=[];return(function(c,h,f,m,p){const v=c.getIterator(),V=h.getIterator();let D=xn(v),x=xn(V);for(;D||x;){let L=!1,q=!1;if(D&&x){const B=f(D,x);B<0?q=!0:B>0&&(L=!0)}else D!=null?q=!0:L=!0;L?(m(x),x=xn(V)):q?(p(D),D=xn(v)):(D=xn(v),x=xn(V))}})(s,i,we,(u=>{a.push(this.Jn(t,e,n,u))}),(u=>{a.push(this.Hn(t,e,n,u))})),A.waitFor(a)}Wn(t){let e=1;return On(t).X({index:id,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>we(a,u))).filter(((a,u,c)=>!u||we(a,c[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=we(a,t),c=we(a,e);if(u===0)s[0]=t.En();else if(u>0&&c<0)s.push(a),s.push(a.En());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Yn(s[a],s[a+1]))return[];const u=s[a].Rn(this.uid,ri,k.empty()),c=s[a+1].Rn(this.uid,ri,k.empty());i.push(IDBKeyRange.bound(u,c))}return i}Yn(t,e){return we(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(zl)}getMinOffset(t,e){return A.mapArray(this.Fn(e),(n=>this.Mn(t,n).next((s=>s||M(44426))))).next(zl)}}function jl(r){return Tt(r,hs)}function kn(r){return Tt(r,ts)}function zr(r){return Tt(r,La)}function On(r){return Tt(r,Zr)}function zl(r){U(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Oa(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Qt(t.readTime,t.documentKey,e)}/**
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
 */const $l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mf=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function gf(r,t,e){const n=r.store(Xt),s=r.store(Wn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.X({range:a},((f,m,p)=>(u++,p.delete())));i.push(c.next((()=>{U(u===1,47070,{batchId:e.batchId})})));const h=[];for(const f of e.mutations){const m=nd(t,f.key.path,e.batchId);i.push(s.delete(m)),h.push(f.key)}return A.waitFor(i).next((()=>h))}function xi(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw M(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(mf,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class eo{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static yt(t,e,n,s){U(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new eo(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ve(t).X({index:cn,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=Un(t),a=ve(t);return a.add({}).next((u=>{U(typeof u=="number",49019);const c=new Wa(u,e,n,s),h=(function(v,V,D){const x=D.baseMutations.map((q=>ys(v.gt,q))),L=D.mutations.map((q=>ys(v.gt,q)));return{userId:V,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:x,mutations:L}})(this.serializer,this.userId,c),f=[];let m=new rt(((p,v)=>z(p.canonicalString(),v.canonicalString())));for(const p of s){const v=nd(this.userId,p.key.path,u);m=m.add(p.key.path.popLast()),f.push(a.put(h)),f.push(i.put(v,m_))}return m.forEach((p=>{f.push(this.indexManager.addToCollectionParentIndex(t,p))})),t.addOnCommittedListener((()=>{this.Zn[u]=c.keys()})),A.waitFor(f).next((()=>c))}))}lookupMutationBatch(t,e){return ve(t).get(e).next((n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),on(this.serializer,n)):null))}Xn(t,e){return this.Zn[e]?A.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ve(t).X({index:cn,range:s},((a,u,c)=>{u.userId===this.userId&&(U(u.batchId>=n,47524,{er:n}),i=on(this.serializer,u)),c.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=xe;return ve(t).X({index:cn,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,xe],[this.userId,Number.POSITIVE_INFINITY]);return ve(t).j(cn,e).next((n=>n.map((s=>on(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ci(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return Un(t).X({range:s},((a,u,c)=>{const[h,f,m]=a,p=ee(f);if(h===this.userId&&e.path.isEqual(p))return ve(t).get(m).next((v=>{if(!v)throw M(61480,{tr:a,batchId:m});U(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:m}),i.push(on(this.serializer,v))}));c.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(z);const s=[];return e.forEach((i=>{const a=ci(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=Un(t).X({range:u},((h,f,m)=>{const[p,v,V]=h,D=ee(v);p===this.userId&&i.path.isEqual(D)?n=n.add(V):m.done()}));s.push(c)})),A.waitFor(s).next((()=>this.nr(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ci(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new rt(z);return Un(t).X({range:a},((c,h,f)=>{const[m,p,v]=c,V=ee(p);m===this.userId&&n.isPrefixOf(V)?V.length===s&&(u=u.add(v)):f.done()})).next((()=>this.nr(t,u)))}nr(t,e){const n=[],s=[];return e.forEach((i=>{s.push(ve(t).get(i).next((a=>{if(a===null)throw M(35274,{batchId:i});U(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(on(this.serializer,a))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return gf(t.ce,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.rr(e.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}rr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return Un(t).X({range:n},((i,a,u)=>{if(i[0]===this.userId){const c=ee(i[1]);s.push(c)}else u.done()})).next((()=>{U(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(t,e){return pf(t,this.userId,e)}sr(t){return _f(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:xe,lastStreamToken:""}))}}function pf(r,t,e){const n=ci(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return Un(r).X({range:i,Z:!0},((u,c,h)=>{const[f,m,p]=u;f===t&&m===s&&(a=!0),h.done()})).next((()=>a))}function ve(r){return Tt(r,Xt)}function Un(r){return Tt(r,Wn)}function _f(r){return Tt(r,cs)}/**
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
 */class In{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new In(0)}static ur(){return new In(-1)}}/**
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
 */class ky{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.cr(t).next((e=>{const n=new In(e.highestTargetId);return e.highestTargetId=n.next(),this.lr(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.cr(t).next((e=>j.fromTimestamp(new Z(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.cr(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.cr(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.lr(t,s))))}addTargetData(t,e){return this.hr(t,e).next((()=>this.cr(t).next((n=>(n.targetCount+=1,this.Pr(e,n),this.lr(t,n))))))}updateTargetData(t,e){return this.hr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Fn(t).delete(e.targetId))).next((()=>this.cr(t))).next((n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.lr(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return Fn(t).X(((a,u)=>{const c=Hr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(t,e){return Fn(t).X(((n,s)=>{const i=Hr(s);e(i)}))}cr(t){return Gl(t).get(bi).next((e=>(U(e!==null,2888),e)))}lr(t,e){return Gl(t).put(bi,e)}hr(t,e){return Fn(t).put(hf(this.serializer,e))}Pr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.cr(t).next((e=>e.targetCount))}getTargetData(t,e){const n=mn(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fn(t).X({range:s,index:sd},((a,u,c)=>{const h=Hr(u);vs(e,h.target)&&(i=h,c.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=Re(t);return e.forEach((a=>{const u=kt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),A.waitFor(s)}removeMatchingKeys(t,e,n){const s=Re(t);return A.forEach(e,(i=>{const a=kt(i.path);return A.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=Re(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=Re(t);let i=$();return s.X({range:n,Z:!0},((a,u,c)=>{const h=ee(a[1]),f=new k(h);i=i.add(f)})).next((()=>i))}containsKey(t,e){const n=kt(e.path),s=IDBKeyRange.bound([n],[Kh(n)],!1,!0);let i=0;return Re(t).X({index:Ma,Z:!0,range:s},(([a,u],c,h)=>{a!==0&&(i++,h.done())})).next((()=>i>0))}Et(t,e){return Fn(t).get(e).next((n=>n?Hr(n):null))}}function Fn(r){return Tt(r,Hn)}function Gl(r){return Tt(r,hn)}function Re(r){return Tt(r,Xn)}/**
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
 */const Kl="LruGarbageCollector",yf=1048576;function Ql([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class Oy{constructor(t){this.Tr=t,this.buffer=new rt(Ql),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ql(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class If{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(Kl,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ze(e)?N(Kl,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Rr(3e5)}))}}class Fy{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Ut.ue);const n=new Oy(e);return this.Vr.forEachTarget(t,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve($l)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$l):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,s,i,a,u,c,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s)))).next((m=>(n=m,u=Date.now(),this.removeTargets(t,n,e)))).next((m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((m=>(h=Date.now(),Mn()<=J.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function Ef(r,t){return new Fy(r,t)}/**
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
 */class My{constructor(t,e){this.db=t,this.garbageCollector=Ef(this,e)}mr(t){const e=this.yr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}gr(t,e){return this.wr(t,((n,s)=>e(s)))}addReference(t,e,n){return si(t,n)}removeReference(t,e,n){return si(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return si(t,e)}Sr(t,e){return(function(s,i){let a=!1;return _f(s).ee((u=>pf(s,u,i).next((c=>(c&&(a=!0),A.resolve(!c)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(t,((a,u)=>{if(u<=e){const c=this.Sr(t,a).next((h=>{if(!h)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,j.min()),Re(t).delete((function(m){return[0,kt(m.path)]})(a)))))}));s.push(c)}})).next((()=>A.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return si(t,e)}wr(t,e){const n=Re(t);let s,i=Ut.ue;return n.X({index:Ma},(([a,u],{path:c,sequenceNumber:h})=>{a===0?(i!==Ut.ue&&e(new k(ee(s)),i),i=h,s=c):i=Ut.ue})).next((()=>{i!==Ut.ue&&e(new k(ee(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function si(r,t){return Re(r).put((function(n,s){return{targetId:0,path:kt(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
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
 */class Tf{constructor(){this.changes=new ge((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ly{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return tn(t).put(n)}removeEntry(t,e,n){return tn(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ci(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.br(t,n))))}getEntry(t,e){let n=ut.newInvalidDocument(e);return tn(t).X({index:li,range:IDBKeyRange.only($r(e))},((s,i)=>{n=this.Dr(e,i)})).next((()=>n))}vr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return tn(t).X({index:li,range:IDBKeyRange.only($r(e))},((s,i)=>{n={document:this.Dr(e,i),size:xi(i)}})).next((()=>n))}getEntries(t,e){let n=jt();return this.Cr(t,e,((s,i)=>{const a=this.Dr(s,i);n=n.insert(s,a)})).next((()=>n))}Fr(t,e){let n=jt(),s=new ot(k.comparator);return this.Cr(t,e,((i,a)=>{const u=this.Dr(i,a);n=n.insert(i,u),s=s.insert(i,xi(a))})).next((()=>({documents:n,Mr:s})))}Cr(t,e,n){if(e.isEmpty())return A.resolve();let s=new rt(Xl);e.forEach((c=>s=s.add(c)));const i=IDBKeyRange.bound($r(s.first()),$r(s.last())),a=s.getIterator();let u=a.getNext();return tn(t).X({index:li,range:i},((c,h,f)=>{const m=k.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&Xl(u,m)<0;)n(u,null),u=a.getNext();u&&u.isEqual(m)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.G($r(u)):f.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Ci(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tn(t).j(IDBKeyRange.bound(u,c,!0)).next((h=>{i==null||i.incrementDocumentReadCount(h.length);let f=jt();for(const m of h){const p=this.Dr(k.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(bs(e,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f}))}getAllFromCollectionGroup(t,e,n,s){let i=jt();const a=Hl(e,n),u=Hl(e,Qt.max());return tn(t).X({index:rd,range:IDBKeyRange.bound(a,u,!0)},((c,h,f)=>{const m=this.Dr(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(t){return new By(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return Wl(t).get(ia).next((e=>(U(!!e,20021),e)))}br(t,e){return Wl(t).put(ia,e)}Dr(t,e){if(e){const n=Ay(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(j.min())))return n}return ut.newInvalidDocument(t)}}function wf(r){return new Ly(r)}class By extends Tf{constructor(t,e){super(),this.Or=t,this.trackRemovals=e,this.Nr=new ge((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new rt(((i,a)=>z(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Nr.get(i);if(e.push(this.Or.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=Dl(this.Or.serializer,a);s=s.add(i.path.popLast());const h=xi(c);n+=h-u.size,e.push(this.Or.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=Dl(this.Or.serializer,a.convertToNoDocument(j.min()));e.push(this.Or.addEntry(t,i,c))}})),s.forEach((i=>{e.push(this.Or.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Or.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.Or.vr(t,e).next((n=>(this.Nr.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Or.Fr(t,e).next((({documents:n,Mr:s})=>(s.forEach(((i,a)=>{this.Nr.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function Wl(r){return Tt(r,ls)}function tn(r){return Tt(r,Ai)}function $r(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Hl(r,t){const e=t.documentKey.path.toArray();return[r,Ci(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Xl(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
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
 */class Uy{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class vf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&rs(n.mutation,s,qt.empty(),Z.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,$()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=$()){const s=ne();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=Qr();return i.forEach(((u,c)=>{a=a.insert(u,c.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=ne();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,$())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=jt();const a=ns(),u=(function(){return ns()})();return e.forEach(((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof pe)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),rs(f.mutation,h,f.mutation.getFieldMask(),Z.now())):a.set(h.key,qt.empty())})),this.recalculateAndSaveOverlays(t,i).next((c=>(c.forEach(((h,f)=>a.set(h,f))),e.forEach(((h,f)=>{var m;return u.set(h,new Uy(f,(m=a.get(h))!==null&&m!==void 0?m:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=ns();let s=new ot(((a,u)=>a-u)),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((c=>{const h=e.get(c);if(h===null)return;let f=n.get(c)||qt.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(s.get(u.batchId)||$()).add(c);s=s.insert(u.batchId,m)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=Ld();f.forEach((p=>{if(!i.has(p)){const v=Gd(e.get(p),n.get(p));v!==null&&m.set(p,v),i=i.add(p)}})),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return A.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return k.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$a(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):A.resolve(ne());let u=Gn,c=i;return a.next((h=>A.forEach(h,((f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next((p=>{c=c.insert(f,p)}))))).next((()=>this.populateOverlays(t,h,i))).next((()=>this.computeViews(t,c,h,$()))).next((f=>({batchId:u,changes:Md(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((n=>{let s=Qr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Qr();return this.indexManager.getCollectionParents(t,i).next((u=>A.forEach(u,(c=>{const h=(function(m,p){return new me(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,n,s).next((f=>{f.forEach(((m,p)=>{a=a.insert(m,p)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ut.newInvalidDocument(f)))}));let u=Qr();return a.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&rs(f.mutation,h,qt.empty(),Z.now()),bs(e,h)&&(u=u.insert(c,h))})),u}))}}/**
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
 */class qy{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return A.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}})(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Zi(s.bundledQuery),readTime:pt(s.readTime)}})(e)),A.resolve()}}/**
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
 */class jy{constructor(){this.overlays=new ot(k.comparator),this.kr=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ne();return A.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.wt(t,e,i)})),A.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const s=ne(),i=e.length+1,a=new k(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ot(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=ne(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=ne(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>u.set(h,f))),!(u.size()>=s)););return A.resolve(u)}wt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Xa(e,n));let i=this.kr.get(e);i===void 0&&(i=$(),this.kr.set(e,i)),this.kr.set(e,i.add(n.key))}}/**
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
 */class zy{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
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
 */class eu{constructor(){this.qr=new rt(wt.Qr),this.$r=new rt(wt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new wt(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new wt(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new k(new Q([])),n=new wt(e,t),s=new wt(e,t+1),i=[];return this.$r.forEachInRange([n,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new k(new Q([])),n=new wt(e,t),s=new wt(e,t+1);let i=$();return this.$r.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new wt(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class wt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return k.comparator(t.key,e.key)||z(t.Hr,e.Hr)}static Ur(t,e){return z(t.Hr,e.Hr)||k.comparator(t.key,e.key)}}/**
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
 */class $y{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new rt(wt.Qr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wa(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new wt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?xe:this.er-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new wt(e,0),s=new wt(e,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Hr);i.push(u)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(z);return e.forEach((s=>{const i=new wt(s,0),a=new wt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(u=>{n=n.add(u.Hr)}))})),A.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const a=new wt(new k(i),0);let u=new rt(z);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Hr)),!0)}),a),A.resolve(this.ei(u))}ei(t){const e=[];return t.forEach((n=>{const s=this.Zr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){U(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return A.forEach(e.mutations,(s=>{const i=new wt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new wt(e,0),s=this.Yr.firstAfterOrEqual(n);return A.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Gy{constructor(t){this.ni=t,this.docs=(function(){return new ot(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=jt();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=jt();const a=e.path,u=new k(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Oa(Jh(f),n)<=0||(s.has(f.key)||bs(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(t,e,n,s){M(9500)}ri(t,e){return A.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Ky(this)}getSize(t){return A.resolve(this.size)}}class Ky extends Tf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(n)})),A.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Qy{constructor(t){this.persistence=t,this.ii=new ge((e=>mn(e)),vs),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new eu,this.targetCount=0,this._i=In.ar()}forEachTarget(t,e){return this.ii.forEach(((n,s)=>e(s))),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),A.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new In(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.hr(e),A.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ii.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),A.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.oi.containsKey(e))}}/**
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
 */class nu{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ut(0),this.ci=!1,this.ci=!0,this.li=new zy,this.referenceDelegate=t(this),this.hi=new Qy(this),this.indexManager=new xy,this.remoteDocumentCache=(function(s){return new Gy(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new lf(e),this.Ti=new qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new $y(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new Wy(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(t,e){return A.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class Wy extends Zh{constructor(t){super(),this.currentSequenceNumber=t}}class no{constructor(t){this.persistence=t,this.Ai=new eu,this.Ri=null}static Vi(t){return new no(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),A.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.mi,(n=>{const s=k.fromPath(n);return this.fi(t,s).next((i=>{i||e.removeEntry(s,j.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return A.or([()=>A.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ni{constructor(t,e){this.persistence=t,this.gi=new ge((n=>kt(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Ef(this,e)}static Vi(t,e){return new Ni(t,e)}Ii(){}di(t){return A.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return A.forEach(this.gi,((n,s)=>this.Sr(t,n,s).next((i=>i?A.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((u=>{u||(n++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),A.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),A.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),A.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),A.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=di(t.data.value)),e}Sr(t,e,n){return A.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Hy{constructor(t){this.serializer=t}q(t,e,n,s){const i=new ji("createOrUpgrade",e);n<1&&s>=1&&((function(c){c.createObjectStore(ws)})(t),(function(c){c.createObjectStore(cs,{keyPath:f_}),c.createObjectStore(Xt,{keyPath:al,autoIncrement:!0}).createIndex(cn,ul,{unique:!0}),c.createObjectStore(Wn)})(t),Jl(t),(function(c){c.createObjectStore(rn)})(t));let a=A.resolve();return n<3&&s>=3&&(n!==0&&((function(c){c.deleteObjectStore(Xn),c.deleteObjectStore(Hn),c.deleteObjectStore(hn)})(t),Jl(t)),a=a.next((()=>(function(c){const h=c.store(hn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(bi,f)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(c,h){return h.store(Xt).j().next((m=>{c.deleteObjectStore(Xt),c.createObjectStore(Xt,{keyPath:al,autoIncrement:!0}).createIndex(cn,ul,{unique:!0});const p=h.store(Xt),v=m.map((V=>p.put(V)));return A.waitFor(v)}))})(t,i)))),a=a.next((()=>{(function(c){c.createObjectStore(Jn,{keyPath:w_})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this.pi(i)))),n<6&&s>=6&&(a=a.next((()=>((function(c){c.createObjectStore(ls)})(t),this.yi(i))))),n<7&&s>=7&&(a=a.next((()=>this.wi(i)))),n<8&&s>=8&&(a=a.next((()=>this.Si(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.bi(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(c){c.createObjectStore(zi,{keyPath:v_})})(t),(function(c){c.createObjectStore($i,{keyPath:A_})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(c){const h=c.createObjectStore(Gi,{keyPath:D_});h.createIndex(aa,x_,{unique:!1}),h.createIndex(ad,N_,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(c){const h=c.createObjectStore(Ai,{keyPath:g_});h.createIndex(li,p_),h.createIndex(rd,__)})(t))).next((()=>this.Di(t,i))).next((()=>t.deleteObjectStore(rn)))),n<14&&s>=14&&(a=a.next((()=>this.Ci(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(c){c.createObjectStore(La,{keyPath:b_,autoIncrement:!0}).createIndex(oa,R_,{unique:!1}),c.createObjectStore(Zr,{keyPath:S_}).createIndex(id,P_,{unique:!1}),c.createObjectStore(ts,{keyPath:V_}).createIndex(od,C_,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(Zr).clear()})).next((()=>{e.objectStore(ts).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(c){c.createObjectStore(Ba,{keyPath:k_})})(t)}))),n<18&&s>=18&&Vh()&&(a=a.next((()=>{e.objectStore(Zr).clear()})).next((()=>{e.objectStore(ts).clear()}))),a}yi(t){let e=0;return t.store(rn).X(((n,s)=>{e+=xi(s)})).next((()=>{const n={byteSize:e};return t.store(ls).put(ia,n)}))}pi(t){const e=t.store(cs),n=t.store(Xt);return e.j().next((s=>A.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,xe],[i.userId,i.lastAcknowledgedBatchId]);return n.j(cn,a).next((u=>A.forEach(u,(c=>{U(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=on(this.serializer,c);return gf(t,i.userId,h).next((()=>{}))}))))}))))}wi(t){const e=t.store(Xn),n=t.store(rn);return t.store(hn).get(bi).next((s=>{const i=[];return n.X(((a,u)=>{const c=new Q(a),h=(function(m){return[0,kt(m)]})(c);i.push(e.get(h).next((f=>f?A.resolve():(m=>e.put({targetId:0,path:kt(m),sequenceNumber:s.highestListenSequenceNumber}))(c))))})).next((()=>A.waitFor(i)))}))}Si(t,e){t.createObjectStore(hs,{keyPath:T_});const n=e.store(hs),s=new tu,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:kt(c)})}};return e.store(rn).X({Z:!0},((a,u)=>{const c=new Q(a);return i(c.popLast())})).next((()=>e.store(Wn).X({Z:!0},(([a,u,c],h)=>{const f=ee(u);return i(f.popLast())}))))}bi(t){const e=t.store(Hn);return e.X(((n,s)=>{const i=Hr(s),a=hf(this.serializer,i);return e.put(a)}))}Di(t,e){const n=e.store(rn),s=[];return n.X(((i,a)=>{const u=e.store(Ai),c=(function(m){return m.document?new k(Q.fromString(m.document.name).popFirst(5)):m.noDocument?k.fromSegments(m.noDocument.path):m.unknownDocument?k.fromSegments(m.unknownDocument.path):M(36783)})(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(h))})).next((()=>A.waitFor(s)))}Ci(t,e){const n=e.store(Xt),s=wf(this.serializer),i=new nu(no.Vi,this.serializer.gt);return n.j().next((a=>{const u=new Map;return a.forEach((c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:$();on(this.serializer,c).keys().forEach((m=>f=f.add(m))),u.set(c.userId,f)})),A.forEach(u,((c,h)=>{const f=new vt(h),m=to.yt(this.serializer,f),p=i.getIndexManager(f),v=eo.yt(f,this.serializer,p,i.referenceDelegate);return new vf(s,v,m,p).recalculateAndSaveOverlaysForDocumentKeys(new ua(e,Ut.ue),c).next()}))}))}}function Jl(r){r.createObjectStore(Xn,{keyPath:I_}).createIndex(Ma,E_,{unique:!0}),r.createObjectStore(Hn,{keyPath:"targetId"}).createIndex(sd,y_,{unique:!0}),r.createObjectStore(hn)}const Ae="IndexedDbPersistence",zo=18e5,$o=5e3,Go="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Af="main";class ru{constructor(t,e,n,s,i,a,u,c,h,f,m=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Fi=i,this.window=a,this.document=u,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=p=>Promise.resolve(),!ru.C())throw new C(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new My(this,s),this.Qi=e+Af,this.serializer=new lf(c),this.$i=new re(this.Qi,this.Oi,new Hy(this.serializer)),this.li=new Ry,this.hi=new ky(this.referenceDelegate,this.serializer),this.remoteDocumentCache=wf(this.serializer),this.Ti=new by,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&gt(Ae,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(R.FAILED_PRECONDITION,Go);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.hi.getHighestSequenceNumber(t)))})).then((t=>{this.ui=new Ut(t,this.Mi)})).then((()=>{this.ci=!0})).catch((t=>(this.$i&&this.$i.close(),Promise.reject(t))))}ji(t){return this.qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.$i.setDatabaseDeletedListener(t)}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>ii(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(t).next((e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(t))).next((e=>this.isPrimary&&!e?this.Yi(t).next((()=>!1)):!!e&&this.Zi(t).next((()=>!0)))))).catch((t=>{if(ze(t))return N(Ae,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return N(Ae,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Fi.enqueueRetryable((()=>this.qi(t))),this.isPrimary=t}))}Ji(t){return Gr(t).get(Dn).next((e=>A.resolve(this.Xi(e))))}es(t){return ii(t).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,zo)){this.ki=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=Tt(e,Jn);return n.j().next((s=>{const i=this.rs(s,zo),a=s.filter((u=>i.indexOf(u)===-1));return A.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ui)for(const e of t)this.Ui.removeItem(this.ss(e.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(t){return!!t&&t.ownerId===this.clientId}Hi(t){return this.xi?A.resolve(!0):Gr(t).get(Dn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,$o)&&!this._s(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new C(R.FAILED_PRECONDITION,Go);return!1}}return!(!this.networkEnabled||!this.inForeground)||ii(t).j().next((n=>this.rs(n,$o).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&N(Ae,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[ws,Jn],(t=>{const e=new ua(t,Ut.ue);return this.Yi(e).next((()=>this.es(e)))})),this.$i.close(),this.hs()}rs(t,e){return t.filter((n=>this.ns(n.updateTimeMs,e)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(t=>ii(t).j().next((e=>this.rs(e,zo).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(t,e){return eo.yt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Ny(t,this.serializer.gt.databaseId)}getDocumentOverlayCache(t){return to.yt(this.serializer,t)}getBundleCache(){return this.Ti}runTransaction(t,e,n){N(Ae,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(c){return c===18?M_:c===17?hd:c===16?F_:c===15?Ua:c===14?ld:c===13?cd:c===12?O_:c===11?ud:void M(60245)})(this.Oi);let a;return this.$i.runTransaction(t,s,i,(u=>(a=new ua(u,this.ui?this.ui.next():Ut.ue),e==="readwrite-primary"?this.Ji(a).next((c=>!!c||this.Hi(a))).next((c=>{if(!c)throw gt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new C(R.FAILED_PRECONDITION,Yh);return n(a)})).next((c=>this.Zi(a).next((()=>c)))):this.Ts(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Ts(t){return Gr(t).get(Dn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,$o)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new C(R.FAILED_PRECONDITION,Go)}))}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Gr(t).put(Dn,e)}static C(){return re.C()}Yi(t){const e=Gr(t);return e.get(Dn).next((n=>this.Xi(n)?(N(Ae,"Releasing primary lease."),e.delete(Dn)):A.resolve()))}ns(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(gt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;Ph()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(t){var e;try{const n=((e=this.Ui)===null||e===void 0?void 0:e.getItem(this.ss(t)))!==null;return N(Ae,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return gt(Ae,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(t){gt("Failed to set zombie client id.",t)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Gr(r){return Tt(r,ws)}function ii(r){return Tt(r,Jn)}function su(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class iu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=s}static Es(t,e){let n=$(),s=$();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new iu(t,e.fromCache,n,s)}}/**
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
 */class Xy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bf{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ph()?8:td(Ii())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ps(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Xy;return this.ws(t,e,a).next((u=>{if(i.result=u,this.Rs)return this.Ss(t,e,a,u.size)}))})).next((()=>i.result))}Ss(t,e,n,s){return n.documentReadCount<this.Vs?(Mn()<=J.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ln(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Mn()<=J.DEBUG&&N("QueryEngine","Query:",Ln(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(Mn()<=J.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ln(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):A.resolve())}ps(t,e){if(Tl(e))return A.resolve(null);let n=Ot(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Pi(e,null,"F"),n=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=$(...i);return this.gs.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((c=>{const h=this.bs(e,u);return this.Ds(e,h,a,c.readTime)?this.ps(t,Pi(e,null,"F")):this.vs(t,h,e,c)}))))})))))}ys(t,e,n,s){return Tl(e)||s.isEqual(j.min())?A.resolve(null):this.gs.getDocuments(t,n).next((i=>{const a=this.bs(e,i);return this.Ds(e,a,n,s)?A.resolve(null):(Mn()<=J.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ln(e)),this.vs(t,a,e,Xh(s,Gn)).next((u=>u)))}))}bs(t,e){let n=new rt(Od(t));return e.forEach(((s,i)=>{bs(t,i)&&(n=n.add(i))})),n}Ds(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(t,e,n){return Mn()<=J.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ln(e)),this.gs.getDocumentsMatchingQuery(t,e,Qt.min(),n)}vs(t,e,n,s){return this.gs.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const ou="LocalStore",Jy=3e8;class Yy{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new ot(z),this.Ms=new ge((i=>mn(i)),vs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vf(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Rf(r,t,e,n){return new Yy(r,t,e,n)}async function Sf(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let c=$();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:u})))}))}))}function Zy(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.Os.newChangeBuffer({trackRemovals:!0});return(function(u,c,h,f){const m=h.batch,p=m.keys();let v=A.resolve();return p.forEach((V=>{v=v.next((()=>f.getEntry(c,V))).next((D=>{const x=h.docVersions.get(V);U(x!==null,48541),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))}))})),v.next((()=>u.mutationQueue.removeMutationBatch(c,m)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=$();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Pf(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function tI(r,t){const e=O(r),n=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach(((f,m)=>{const p=s.get(m);if(!p)return;u.push(e.hi.removeMatchingKeys(i,f.removedDocuments,m).next((()=>e.hi.addMatchingKeys(i,f.addedDocuments,m))));let v=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),s=s.insert(m,v),(function(D,x,L){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Jy?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(p,v,f)&&u.push(e.hi.updateTargetData(i,v))}));let c=jt(),h=$();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),u.push(Vf(i,a,t.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!n.isEqual(j.min())){const f=e.hi.getLastRemoteSnapshotVersion(i).next((m=>e.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(f)}return A.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(e.Fs=s,i)))}function Vf(r,t,e){let n=$(),s=$();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=jt();return e.forEach(((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(j.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):N(ou,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:s}}))}function eI(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=xe),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function sr(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.hi.getTargetData(n,t).next((i=>i?(s=i,A.resolve(s)):e.hi.allocateTargetId(n).next((a=>(s=new ce(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function ir(r,t,e){const n=O(r),s=n.Fs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ze(a))throw a;N(ou,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(s.target)}function ki(r,t,e){const n=O(r);let s=j.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const m=O(c),p=m.Ms.get(f);return p!==void 0?A.resolve(m.Fs.get(p)):m.hi.getTargetData(h,f)})(n,a,Ot(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,u.targetId).next((c=>{i=c}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:j.min(),e?i:$()))).next((u=>(xf(n,kd(t),u),{documents:u,qs:i})))))}function Cf(r,t){const e=O(r),n=O(e.hi),s=e.Fs.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",(i=>n.Et(i,t).next((a=>a?a.target:null))))}function Df(r,t){const e=O(r),n=e.xs.get(t)||j.min();return e.persistence.runTransaction("Get new document changes","readonly",(s=>e.Os.getAllFromCollectionGroup(s,t,Xh(n,Gn),Number.MAX_SAFE_INTEGER))).then((s=>(xf(e,t,s),s)))}function xf(r,t,e){let n=r.xs.get(t)||j.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(t,n)}async function nI(r,t,e,n){const s=O(r);let i=$(),a=jt();for(const h of e){const f=t.Qs(h.metadata.name);h.document&&(i=i.add(f));const m=t.$s(h);m.setReadTime(t.Us(h.metadata.readTime)),a=a.insert(f,m)}const u=s.Os.newChangeBuffer({trackRemovals:!0}),c=await sr(s,(function(f){return Ot(fr(Q.fromString(`__bundle__/docs/${f}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(h=>Vf(h,u,a).next((f=>(u.apply(h),f))).next((f=>s.hi.removeMatchingKeysForTargetId(h,c.targetId).next((()=>s.hi.addMatchingKeys(h,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(h,f.Ls,f.ks))).next((()=>f.Ls))))))}async function rI(r,t,e=$()){const n=await sr(r,Ot(Zi(t.bundledQuery))),s=O(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const a=pt(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Ti.saveNamedQuery(i,t);const u=n.withResumeToken(ft.EMPTY_BYTE_STRING,a);return s.Fs=s.Fs.insert(u.targetId,u),s.hi.updateTargetData(i,u).next((()=>s.hi.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.hi.addMatchingKeys(i,e,n.targetId))).next((()=>s.Ti.saveNamedQuery(i,t)))}))}/**
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
 */const Nf="firestore_clients";function Yl(r,t){return`${Nf}_${r}_${t}`}const kf="firestore_mutations";function Zl(r,t,e){let n=`${kf}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Of="firestore_targets";function Ko(r,t){return`${Of}_${r}_${t}`}/**
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
 */const te="SharedClientState";class Oi{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ks(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new C(s.error.code,s.error.message))),a?new Oi(t,e,s.state,i):(gt(te,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ss{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ks(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new C(n.error.code,n.error.message))),i?new ss(t,n.state,s):(gt(te,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Fi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ks(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ga();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=ed(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Fi(t,i):(gt(te,`Failed to parse client data for instance '${t}': ${e}`),null)}}class au{constructor(t,e){this.clientId=t,this.onlineState=e}static Ks(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new au(e.clientId,e.onlineState):(gt(te,`Failed to parse online state: ${t}`),null)}}class wa{constructor(){this.activeTargetIds=Ga()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qo{constructor(t,e,n,s,i){this.window=t,this.Fi=e,this.persistenceKey=n,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ot(z),this.started=!1,this.Zs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Yl(this.persistenceKey,this.js),this.eo=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new wa),this.no=new RegExp(`^${Nf}_${a}_([^_]*)$`),this.ro=new RegExp(`^${kf}_${a}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Of}_${a}_(\\d+)$`),this.so=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this.oo=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ps();for(const n of t){if(n===this.js)continue;const s=this.getItem(Yl(this.persistenceKey,n));if(s){const i=Fi.Ks(n,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const e=this.storage.getItem(this.so);if(e){const n=this.ao(e);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.eo,JSON.stringify(t))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(t){let e=!1;return this.Ys.forEach(((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.lo(t,"pending")}updateMutationState(t,e,n){this.lo(t,e,n),this.ho(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Ko(this.persistenceKey,t));if(s){const i=ss.Ks(t,s);i&&(n=i.state)}}return e&&this.Po.Gs(t),this._o(),n}removeLocalQueryTarget(t){this.Po.zs(t),this._o()}isLocalQueryTarget(t){return this.Po.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ko(this.persistenceKey,t))}updateQueryState(t,e,n){this.To(t,e,n)}handleUserChange(t,e,n){e.forEach((s=>{this.ho(s)})),this.currentUser=t,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(t){this.Io(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return N(te,"READ",t,e),e}setItem(t,e){N(te,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){N(te,"REMOVE",t),this.storage.removeItem(t)}Hs(t){const e=t;if(e.storageArea===this.storage){if(N(te,"EVENT",e.key,e.newValue),e.key===this.Xs)return void gt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(e.key!==null){if(this.no.test(e.key)){if(e.newValue==null){const n=this.Ao(e.key);return this.Ro(n,null)}{const n=this.Vo(e.key,e.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(e.key)){if(e.newValue!==null){const n=this.mo(e.key,e.newValue);if(n)return this.fo(n)}}else if(this.io.test(e.key)){if(e.newValue!==null){const n=this.po(e.key,e.newValue);if(n)return this.yo(n)}}else if(e.key===this.so){if(e.newValue!==null){const n=this.ao(e.newValue);if(n)return this.uo(n)}}else if(e.key===this.eo){const n=(function(i){let a=Ut.ue;if(i!=null)try{const u=JSON.parse(i);U(typeof u=="number",30636,{wo:i}),a=u}catch(u){gt(te,"Failed to read sequence number from WebStorage",u)}return a})(e.newValue);n!==Ut.ue&&this.sequenceNumberHandler(n)}else if(e.key===this.oo){const n=this.So(e.newValue);await Promise.all(n.map((s=>this.syncEngine.bo(s))))}}}else this.Zs.push(e)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(t,e,n){const s=new Oi(this.currentUser,t,e,n),i=Zl(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Ws())}ho(t){const e=Zl(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Io(t){const e={clientId:this.js,onlineState:t};this.storage.setItem(this.so,JSON.stringify(e))}To(t,e,n){const s=Ko(this.persistenceKey,t),i=new ss(t,e,n);this.setItem(s,i.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.oo,e)}Ao(t){const e=this.no.exec(t);return e?e[1]:null}Vo(t,e){const n=this.Ao(t);return Fi.Ks(n,e)}mo(t,e){const n=this.ro.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Oi.Ks(new vt(i),s,e)}po(t,e){const n=this.io.exec(t),s=Number(n[1]);return ss.Ks(s,e)}ao(t){return au.Ks(t)}So(t){return JSON.parse(t)}async fo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Do(t.batchId,t.state,t.error);N(te,`Ignoring mutation for non-active user ${t.user.uid}`)}yo(t){return this.syncEngine.vo(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Ys.insert(t,e):this.Ys.remove(t),s=this.co(this.Ys),i=this.co(n),a=[],u=[];return i.forEach((c=>{s.has(c)||a.push(c)})),s.forEach((c=>{i.has(c)||u.push(c)})),this.syncEngine.Co(a,u).then((()=>{this.Ys=n}))}uo(t){this.Ys.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}co(t){let e=Ga();return t.forEach(((n,s)=>{e=e.unionWith(s.activeTargetIds)})),e}}class Ff{constructor(){this.Fo=new wa,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new wa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sI{xo(t){}shutdown(){}}/**
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
 */const th="ConnectivityMonitor";class eh{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(th,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(th,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oi=null;function va(){return oi===null?oi=(function(){return 268435456+Math.round(2147483648*Math.random())})():oi++,"0x"+oi.toString(16)}/**
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
 */const Wo="RestConnection",iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oI{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===fs?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const a=va(),u=this.Go(t,e.toUriEncodedString());N(Wo,`Sending RPC '${t}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(u),f=Bi(h);return this.jo(t,u,c,n,f).then((m=>(N(Wo,`Received RPC '${t}' ${a}: `,m),m)),(m=>{throw Ft(Wo,`RPC '${t}' ${a} failed with error: `,m,"url: ",u,"request:",n),m}))}Jo(t,e,n,s,i,a){return this.Wo(t,e,n,s,i)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+dr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}Go(t,e){const n=iI[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
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
 */class aI{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const xt="WebChannelConnection";class uI extends oI{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,s,i){const a=va();return new Promise(((u,c)=>{const h=new Lh;h.setWithCredentials(!0),h.listenOnce(Bh.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ui.NO_ERROR:const m=h.getResponseJson();N(xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),u(m);break;case ui.TIMEOUT:N(xt,`RPC '${t}' ${a} timed out`),c(new C(R.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const p=h.getStatus();if(N(xt,`RPC '${t}' ${a} failed with status:`,p,"response text:",h.getResponseText()),p>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const V=v==null?void 0:v.error;if(V&&V.status&&V.message){const D=(function(L){const q=L.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN})(V.status);c(new C(D,V.message))}else c(new C(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new C(R.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{N(xt,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);N(xt,`RPC '${t}' ${a} sending request:`,s),h.send(e,"POST",f,n,15)}))}P_(t,e,n){const s=va(),i=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=jh(),u=qh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=i.join("");N(xt,`Creating RPC '${t}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);this.T_(m);let p=!1,v=!1;const V=new aI({Ho:x=>{v?N(xt,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(p||(N(xt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),p=!0),N(xt,`RPC '${t}' stream ${s} sending:`,x),m.send(x))},Yo:()=>m.close()}),D=(x,L,q)=>{x.listen(L,(B=>{try{q(B)}catch(K){setTimeout((()=>{throw K}),0)}}))};return D(m,Kr.EventType.OPEN,(()=>{v||(N(xt,`RPC '${t}' stream ${s} transport opened.`),V.s_())})),D(m,Kr.EventType.CLOSE,(()=>{v||(v=!0,N(xt,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(m))})),D(m,Kr.EventType.ERROR,(x=>{v||(v=!0,Ft(xt,`RPC '${t}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.__(new C(R.UNAVAILABLE,"The operation could not be completed")))})),D(m,Kr.EventType.MESSAGE,(x=>{var L;if(!v){const q=x.data[0];U(!!q,16349);const B=q,K=(B==null?void 0:B.error)||((L=B[0])===null||L===void 0?void 0:L.error);if(K){N(xt,`RPC '${t}' stream ${s} received error:`,K);const tt=K.status;let G=(function(I){const T=_t[I];if(T!==void 0)return Hd(T)})(tt),E=K.message;G===void 0&&(G=R.INTERNAL,E="Unknown error status: "+tt+" with message "+K.message),v=!0,V.__(new C(G,E)),m.close()}else N(xt,`RPC '${t}' stream ${s} received:`,q),V.a_(q)}})),D(u,Uh.STAT_EVENT,(x=>{x.stat===ta.PROXY?N(xt,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===ta.NOPROXY&&N(xt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}/**
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
 *//**
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
 */function Mf(){return typeof window!="undefined"?window:null}function _i(){return typeof document!="undefined"?document:null}/**
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
 */function vn(r){return new my(r,!0)}/**
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
 */class uu{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const nh="PersistentStream";class Lf{constructor(t,e,n,s,i,a,u,c){this.Fi=t,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new uu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(gt(e.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===e&&this.W_(n,s)}),(n=>{t((()=>{const s=new C(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return N(nh,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(N(nh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cI extends Lf{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=_y(this.serializer,t),n=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?pt(a.readTime):j.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=_a(this.serializer),e.addTarget=(function(i,a){let u;const c=a.target;if(u=Ri(c)?{documents:rf(i,c)}:{query:Yi(i,c).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Yd(i,a.resumeToken);const h=ga(i,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(j.min())>0){u.readTime=rr(i,a.snapshotVersion.toTimestamp());const h=ga(i,a.expectedCount);h!==null&&(u.expectedCount=h)}return u})(this.serializer,t);const n=Iy(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=_a(this.serializer),e.removeTarget=t,this.k_(e)}}class lI extends Lf{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return U(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,U(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){U(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=yy(t.writeResults,t.commitTime),n=pt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=_a(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>ys(this.serializer,n)))};this.k_(e)}}/**
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
 */class hI{}class dI extends hI{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(t,pa(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(R.UNKNOWN,i.toString())}))}Jo(t,e,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Jo(t,pa(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class fI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gt(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const En="RemoteStore";class mI{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{Ge(this)&&(N(En,"Restarting streams for network reachability change."),await(async function(c){const h=O(c);h.Ia.add(4),await pr(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Vs(h)})(this))}))})),this.Aa=new fI(n,s)}}async function Vs(r){if(Ge(r))for(const t of r.da)await t(!0)}async function pr(r){for(const t of r.da)await t(!1)}function ro(r,t){const e=O(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),hu(e)?lu(e):yr(e).x_()&&cu(e,t))}function or(r,t){const e=O(r),n=yr(e);e.Ta.delete(t),n.x_()&&Bf(e,t),e.Ta.size===0&&(n.x_()?n.B_():Ge(e)&&e.Aa.set("Unknown"))}function cu(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}yr(r).H_(t)}function Bf(r,t){r.Ra.$e(t),yr(r).Y_(t)}function lu(r){r.Ra=new ly({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),yr(r).start(),r.Aa.aa()}function hu(r){return Ge(r)&&!yr(r).M_()&&r.Ta.size>0}function Ge(r){return O(r).Ia.size===0}function Uf(r){r.Ra=void 0}async function gI(r){r.Aa.set("Online")}async function pI(r){r.Ta.forEach(((t,e)=>{cu(r,t)}))}async function _I(r,t){Uf(r),hu(r)?(r.Aa.la(t),lu(r)):r.Aa.set("Unknown")}async function yI(r,t,e){if(r.Aa.set("Online"),t instanceof Jd&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))})(r,t)}catch(n){N(En,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Mi(r,n)}else if(t instanceof gi?r.Ra.Ye(t):t instanceof Xd?r.Ra.it(t):r.Ra.et(t),!e.isEqual(j.min()))try{const n=await Pf(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(c.resumeToken,a))}})),u.targetMismatches.forEach(((c,h)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Bf(i,c);const m=new ce(f.target,c,h,f.sequenceNumber);cu(i,m)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){N(En,"Failed to raise snapshot:",n),await Mi(r,n)}}async function Mi(r,t,e){if(!ze(t))throw t;r.Ia.add(1),await pr(r),r.Aa.set("Offline"),e||(e=()=>Pf(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{N(En,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await Vs(r)}))}function qf(r,t){return t().catch((e=>Mi(r,e,t)))}async function _r(r){const t=O(r),e=Be(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:xe;for(;II(t);)try{const s=await eI(t.localStore,n);if(s===null){t.Pa.length===0&&e.B_();break}n=s.batchId,EI(t,s)}catch(s){await Mi(t,s)}jf(t)&&zf(t)}function II(r){return Ge(r)&&r.Pa.length<10}function EI(r,t){r.Pa.push(t);const e=Be(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function jf(r){return Ge(r)&&!Be(r).M_()&&r.Pa.length>0}function zf(r){Be(r).start()}async function TI(r){Be(r).na()}async function wI(r){const t=Be(r);for(const e of r.Pa)t.X_(e.mutations)}async function vI(r,t,e){const n=r.Pa.shift(),s=Ha.from(n,t,e);await qf(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await _r(r)}async function AI(r,t){t&&Be(r).Z_&&await(async function(n,s){if((function(a){return Wd(a)&&a!==R.ABORTED})(s.code)){const i=n.Pa.shift();Be(n).N_(),await qf(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await _r(n)}})(r,t),jf(r)&&zf(r)}async function rh(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),N(En,"RemoteStore received new credentials");const n=Ge(e);e.Ia.add(3),await pr(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Vs(e)}async function Aa(r,t){const e=O(r);t?(e.Ia.delete(2),await Vs(e)):t||(e.Ia.add(2),await pr(e),e.Aa.set("Unknown"))}function yr(r){return r.Va||(r.Va=(function(e,n,s){const i=O(e);return i.ia(),new cI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:gI.bind(null,r),e_:pI.bind(null,r),n_:_I.bind(null,r),J_:yI.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),hu(r)?lu(r):r.Aa.set("Unknown")):(await r.Va.stop(),Uf(r))}))),r.Va}function Be(r){return r.ma||(r.ma=(function(e,n,s){const i=O(e);return i.ia(),new lI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:TI.bind(null,r),n_:AI.bind(null,r),ea:wI.bind(null,r),ta:vI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await _r(r)):(await r.ma.stop(),r.Pa.length>0&&(N(En,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class du{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new du(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ir(r,t){if(gt("AsyncQueue",`${t}: ${r}`),ze(r))return new C(R.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class dn{static emptySet(t){return new dn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=Qr(),this.sortedSet=new ot(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new dn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class sh{constructor(){this.fa=new ot(k.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Tn{constructor(t,e,n,s,i,a,u,c,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Tn(t,e,dn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&As(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class bI{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class RI{constructor(){this.queries=ih(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const s=O(e),i=s.queries;s.queries=ih(),i.forEach(((a,u)=>{for(const c of u.wa)c.onError(n)}))})(this,new C(R.ABORTED,"Firestore shutting down"))}}function ih(){return new ge((r=>Nd(r)),As)}async function fu(r,t){const e=O(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Sa()&&t.ba()&&(n=2):(i=new bI,n=t.ba()?0:1);try{switch(n){case 0:i.ya=await e.onListen(s,!0);break;case 1:i.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ir(a,`Initialization of query '${Ln(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.wa.push(t),t.va(e.onlineState),i.ya&&t.Ca(i.ya)&&gu(e)}async function mu(r,t){const e=O(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.wa.indexOf(t);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function SI(r,t){const e=O(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(n=!0);a.ya=s}}n&&gu(e)}function PI(r,t,e){const n=O(r),s=n.queries.get(t);if(s)for(const i of s.wa)i.onError(e);n.queries.delete(t)}function gu(r){r.Da.forEach((t=>{t.next()}))}var ba,oh;(oh=ba||(ba={})).Fa="default",oh.Cache="cache";class pu{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Tn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ba.Cache}}/**
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
 */class $f{constructor(t,e){this.qa=t,this.byteLength=e}Qa(){return"metadata"in this.qa}}/**
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
 */class ah{constructor(t){this.serializer=t}Qs(t){return se(this.serializer,t)}$s(t){return t.metadata.exists?Ji(this.serializer,t.document,!1):ut.newNoDocument(this.Qs(t.metadata.name),this.Us(t.metadata.readTime))}Us(t){return pt(t)}}class _u{constructor(t,e){this.$a=t,this.serializer=e,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=Gf(t)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.qa.namedQuery)this.Ua.push(t.qa.namedQuery);else if(t.qa.documentMetadata){this.Ka.push({metadata:t.qa.documentMetadata}),t.qa.documentMetadata.exists||++e;const n=Q.fromString(t.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.qa.document&&(this.Ka[this.Ka.length-1].document=t.qa.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Ga(t){const e=new Map,n=new ah(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.Qs(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||$()).add(i);e.set(a,u)}}return e}async za(t){const e=await nI(t,new ah(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const s of this.Ua)await rI(t,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:e}}}function Gf(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class Kf{constructor(t){this.key=t}}class Qf{constructor(t){this.key=t}}class Wf{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$(),this.mutatedKeys=$(),this.Xa=Od(t),this.eu=new dn(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new sh,s=e?e.eu:this.eu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,m)=>{const p=s.get(f),v=bs(this.query,m)?m:null,V=!!p&&this.mutatedKeys.has(p.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;p&&v?p.data.isEqual(v.data)?V!==D&&(n.track({type:3,doc:v}),x=!0):this.iu(p,v)||(n.track({type:2,doc:v}),x=!0,(c&&this.Xa(v,c)>0||h&&this.Xa(v,h)<0)&&(u=!0)):!p&&v?(n.track({type:0,doc:v}),x=!0):p&&!v&&(n.track({type:1,doc:p}),x=!0,(c||h)&&(u=!0)),x&&(v?(a=a.add(v),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{eu:a,ru:n,Ds:u,mutatedKeys:i}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((f,m)=>(function(v,V){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:x})}};return D(v)-D(V)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(n),s=s!=null&&s;const u=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Tn(this.query,t.eu,i,a,t.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new sh,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=$(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new Qf(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new Kf(n))})),e}uu(t){this.Ha=t.qs,this.Za=$();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Tn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ke="SyncEngine";class VI{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class CI{constructor(t){this.key=t,this.lu=!1}}class DI{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new ge((u=>Nd(u)),As),this.Tu=new Map,this.Iu=new Set,this.du=new ot(k.comparator),this.Eu=new Map,this.Au=new eu,this.Ru={},this.Vu=new Map,this.mu=In.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function xI(r,t,e=!0){const n=so(r);let s;const i=n.Pu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Hf(n,t,e,!0),s}async function NI(r,t){const e=so(r);await Hf(e,t,!0,!1)}async function Hf(r,t,e,n){const s=await sr(r.localStore,Ot(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await yu(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&ro(r.remoteStore,s),u}async function yu(r,t,e,n,s){r.gu=(m,p,v)=>(async function(D,x,L,q){let B=x.view.nu(L);B.Ds&&(B=await ki(D.localStore,x.query,!1).then((({documents:E})=>x.view.nu(E,B))));const K=q&&q.targetChanges.get(x.targetId),tt=q&&q.targetMismatches.get(x.targetId)!=null,G=x.view.applyChanges(B,D.isPrimaryClient,K,tt);return Ra(D,x.targetId,G._u),G.snapshot})(r,m,p,v);const i=await ki(r.localStore,t,!0),a=new Wf(t,i.qs),u=a.nu(i.documents),c=Ps.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),h=a.applyChanges(u,r.isPrimaryClient,c);Ra(r,e,h._u);const f=new VI(t,e,a);return r.Pu.set(t,f),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),h.snapshot}async function kI(r,t,e){const n=O(r),s=n.Pu.get(t),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((a=>!As(a,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ir(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&or(n.remoteStore,s.targetId),ar(n,s.targetId)})).catch(je)):(ar(n,s.targetId),await ir(n.localStore,s.targetId,!0))}async function OI(r,t){const e=O(r),n=e.Pu.get(t),s=e.Tu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),or(e.remoteStore,n.targetId))}async function FI(r,t,e){const n=wu(r);try{const s=await(function(a,u){const c=O(a),h=Z.now(),f=u.reduce(((v,V)=>v.add(V.key)),$());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let V=jt(),D=$();return c.Os.getEntries(v,f).next((x=>{V=x,V.forEach(((L,q)=>{q.isValidDocument()||(D=D.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,V))).next((x=>{m=x;const L=[];for(const q of u){const B=ay(q,m.get(q.key).overlayedDocument);B!=null&&L.push(new pe(q.key,B,wd(B.value.mapValue),ht.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,L,u)})).next((x=>{p=x;const L=x.applyToLocalDocumentSet(m,D);return c.documentOverlayCache.saveOverlays(v,x.batchId,L)}))})).then((()=>({batchId:p.batchId,changes:Md(m)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new ot(z)),h=h.insert(u,c),a.Ru[a.currentUser.toKey()]=h})(n,s.batchId,e),await _e(n,s.changes),await _r(n.remoteStore)}catch(s){const i=Ir(s,"Failed to persist write");e.reject(i)}}async function Xf(r,t){const e=O(r);try{const n=await tI(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Eu.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?U(a.lu,14607):s.removedDocuments.size>0&&(U(a.lu,42227),a.lu=!1))})),await _e(e,n,t)}catch(n){await je(n)}}function uh(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Pu.forEach(((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const c=O(a);c.onlineState=u;let h=!1;c.queries.forEach(((f,m)=>{for(const p of m.wa)p.va(u)&&(h=!0)})),h&&gu(c)})(n.eventManager,t),s.length&&n.hu.J_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function MI(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Eu.get(t),i=s&&s.key;if(i){let a=new ot(k.comparator);a=a.insert(i,ut.newNoDocument(i,j.min()));const u=$().add(i),c=new Ss(j.min(),new Map,new ot(z),a,u);await Xf(n,c),n.du=n.du.remove(i),n.Eu.delete(t),Tu(n)}else await ir(n.localStore,t,!1).then((()=>ar(n,t,e))).catch(je)}async function LI(r,t){const e=O(r),n=t.batch.batchId;try{const s=await Zy(e.localStore,t);Eu(e,n,null),Iu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _e(e,s)}catch(s){await je(s)}}async function BI(r,t,e){const n=O(r);try{const s=await(function(a,u){const c=O(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next((m=>(U(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(n.localStore,t);Eu(n,t,e),Iu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await _e(n,s)}catch(s){await je(s)}}async function UI(r,t){const e=O(r);Ge(e.remoteStore)||N(Ke,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(a){const u=O(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c)))})(e.localStore);if(n===xe)return void t.resolve();const s=e.Vu.get(n)||[];s.push(t),e.Vu.set(n,s)}catch(n){const s=Ir(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function Iu(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function Eu(r,t,e){const n=O(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ru[n.currentUser.toKey()]=s}}function ar(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||Jf(r,n)}))}function Jf(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(or(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),Tu(r))}function Ra(r,t,e){for(const n of e)n instanceof Kf?(r.Au.addReference(n.key,t),qI(r,n)):n instanceof Qf?(N(Ke,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||Jf(r,n.key)):M(19791,{yu:n})}function qI(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(N(Ke,"New document in limbo: "+e),r.Iu.add(n),Tu(r))}function Tu(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new k(Q.fromString(t)),n=r.mu.next();r.Eu.set(n,new CI(e)),r.du=r.du.insert(e,n),ro(r.remoteStore,new ce(Ot(fr(e.path)),n,"TargetPurposeLimboResolution",Ut.ue))}}async function _e(r,t,e){const n=O(r),s=[],i=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((u,c)=>{a.push(n.gu(c,t,e).then((h=>{var f;if((h||e)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=iu.Es(c.targetId,h);i.push(m)}})))})),await Promise.all(a),n.hu.J_(s),await(async function(c,h){const f=O(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>A.forEach(h,(p=>A.forEach(p.Is,(v=>f.persistence.referenceDelegate.addReference(m,p.targetId,v))).next((()=>A.forEach(p.ds,(v=>f.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))))))}catch(m){if(!ze(m))throw m;N(ou,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const v=f.Fs.get(p),V=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(V);f.Fs=f.Fs.insert(p,D)}}})(n.localStore,i))}async function jI(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){N(Ke,"User change. New user:",t.toKey());const n=await Sf(e.localStore,t);e.currentUser=t,(function(i,a){i.Vu.forEach((u=>{u.forEach((c=>{c.reject(new C(R.CANCELLED,a))}))})),i.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await _e(e,n.Bs)}}function zI(r,t){const e=O(r),n=e.Eu.get(t);if(n&&n.lu)return $().add(n.key);{let s=$();const i=e.Tu.get(t);if(!i)return s;for(const a of i){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}async function $I(r,t){const e=O(r),n=await ki(e.localStore,t.query,!0),s=t.view.uu(n);return e.isPrimaryClient&&Ra(e,t.targetId,s._u),s}async function GI(r,t){const e=O(r);return Df(e.localStore,t).then((n=>_e(e,n)))}async function KI(r,t,e,n){const s=O(r),i=await(function(u,c){const h=O(u),f=O(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.Xn(m,c).next((p=>p?h.localDocuments.getDocuments(m,p):A.resolve(null)))))})(s.localStore,t);i!==null?(e==="pending"?await _r(s.remoteStore):e==="acknowledged"||e==="rejected"?(Eu(s,t,n||null),Iu(s,t),(function(u,c){O(O(u).mutationQueue).rr(c)})(s.localStore,t)):M(6720,"Unknown batchState",{wu:e}),await _e(s,i)):N(Ke,"Cannot apply mutation batch with id: "+t)}async function QI(r,t){const e=O(r);if(so(e),wu(e),t===!0&&e.fu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await ch(e,n.toArray());e.fu=!0,await Aa(e.remoteStore,!0);for(const i of s)ro(e.remoteStore,i)}else if(t===!1&&e.fu!==!1){const n=[];let s=Promise.resolve();e.Tu.forEach(((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then((()=>(ar(e,a),ir(e.localStore,a,!0)))),or(e.remoteStore,a)})),await s,await ch(e,n),(function(a){const u=O(a);u.Eu.forEach(((c,h)=>{or(u.remoteStore,h)})),u.Au.jr(),u.Eu=new Map,u.du=new ot(k.comparator)})(e),e.fu=!1,await Aa(e.remoteStore,!1)}}async function ch(r,t,e){const n=O(r),s=[],i=[];for(const a of t){let u;const c=n.Tu.get(a);if(c&&c.length!==0){u=await sr(n.localStore,Ot(c[0]));for(const h of c){const f=n.Pu.get(h),m=await $I(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Cf(n.localStore,a);u=await sr(n.localStore,h),await yu(n,Yf(h),a,!1,u.resumeToken)}s.push(u)}return n.hu.J_(i),s}function Yf(r){return Cd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function WI(r){return(function(e){return O(O(e).persistence).Ps()})(O(r).localStore)}async function HI(r,t,e,n){const s=O(r);if(s.fu)return void N(Ke,"Ignoring unexpected query state notification.");const i=s.Tu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Df(s.localStore,kd(i[0])),u=Ss.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ft.EMPTY_BYTE_STRING);await _e(s,a,u);break}case"rejected":await ir(s.localStore,t,!0),ar(s,t,n);break;default:M(64155,e)}}async function XI(r,t,e){const n=so(r);if(n.fu){for(const s of t){if(n.Tu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){N(Ke,"Adding an already active target "+s);continue}const i=await Cf(n.localStore,s),a=await sr(n.localStore,i);await yu(n,Yf(i),a.targetId,!1,a.resumeToken),ro(n.remoteStore,a)}for(const s of e)n.Tu.has(s)&&await ir(n.localStore,s,!1).then((()=>{or(n.remoteStore,s),ar(n,s)})).catch(je)}}function so(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=MI.bind(null,t),t.hu.J_=SI.bind(null,t.eventManager),t.hu.pu=PI.bind(null,t.eventManager),t}function wu(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=BI.bind(null,t),t}function JI(r,t,e){const n=O(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await(function(v,V){const D=O(v),x=pt(V.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",(L=>D.Ti.getBundleMetadata(L,V.id))).then((L=>!!L&&L.createTime.compareTo(x)>=0))})(i.localStore,c))return await a.close(),u._completeWith((function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}})(c)),Promise.resolve(new Set);u._updateProgress(Gf(c));const h=new _u(c,a.serializer);let f=await a.Su();for(;f;){const p=await h.Wa(f);p&&u._updateProgress(p),f=await a.Su()}const m=await h.za(i.localStore);return await _e(i,m.Ja,void 0),await(function(v,V){const D=O(v);return D.persistence.runTransaction("Save bundle","readwrite",(x=>D.Ti.saveBundleMetadata(x,V)))})(i.localStore,c),u._completeWith(m.progress),Promise.resolve(m.ja)}catch(c){return Ft(Ke,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vn(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Rf(this.persistence,new bf,t.initialUser,this.serializer)}Du(t){return new nu(no.Vi,this.serializer)}bu(t){return new Ff}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ur.provider={build:()=>new ur};class vu extends ur{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){U(this.persistence.referenceDelegate instanceof Ni,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new If(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new nu((n=>Ni.Vi(n,e)),this.serializer)}}class Au extends ur{constructor(t,e,n){super(),this.Mu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Mu.initialize(this,t),await wu(this.Mu.syncEngine),await _r(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(t){return Rf(this.persistence,new bf,t.initialUser,this.serializer)}Cu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new If(n,t.asyncQueue,e)}Fu(t,e){const n=new h_(e,this.persistence);return new l_(t.asyncQueue,n)}Du(t){const e=su(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new ru(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Mf(),_i(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(t){return new Ff}}class Zf extends Au{constructor(t,e){super(t,e,!1),this.Mu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Mu.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={Do:KI.bind(null,e),vo:HI.bind(null,e),Co:XI.bind(null,e),Ps:WI.bind(null,e),bo:GI.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await QI(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(t){const e=Mf();if(!Qo.C(e))throw new C(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=su(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Qo(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Ue{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>uh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await Aa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new RI})()}createDatastore(t){const e=vn(t.databaseInfo.databaseId),n=(function(i){return new uI(i)})(t.databaseInfo);return(function(i,a,u,c){return new dI(i,a,u,c)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new mI(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>uh(this.syncEngine,e,0)),(function(){return eh.C()?new eh:new sI})())}createSyncEngine(t,e){return(function(s,i,a,u,c,h,f){const m=new DI(s,i,a,u,c,h);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=O(s);N(En,"RemoteStore shutting down."),i.Ia.add(5),await pr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ue.provider={build:()=>new Ue};function lh(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class io{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */class YI{constructor(t,e){this.Nu=t,this.serializer=e,this.metadata=new At,this.buffer=new Uint8Array,this.Bu=(function(){return new TextDecoder("utf-8")})(),this.Lu().then((n=>{n&&n.Qa()?this.metadata.resolve(n.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const t=await this.ku();if(t===null)return null;const e=this.Bu.decode(t),n=Number(e);isNaN(n)&&this.qu(`length string (${e}) is not valid number`);const s=await this.Qu(n);return new $f(JSON.parse(s),t.length+n)}$u(){return this.buffer.findIndex((t=>t===123))}async ku(){for(;this.$u()<0&&!await this.Uu(););if(this.buffer.length===0)return null;const t=this.$u();t<0&&this.qu("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Qu(t){for(;this.buffer.length<t;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const e=this.Bu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}qu(t){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${t}`)}async Uu(){const t=await this.Nu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(t,e){this.bundleData=t,this.serializer=e,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.qa)}`);this.metadata=n;do n=this.Su(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const t=this.ku(),e=this.Qu(t);return new $f(JSON.parse(e),t)}Qu(t){if(this.cursor+t>this.bundleData.length)throw new C(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=t)}ku(){const t=this.cursor;let e=this.cursor;for(;e<this.bundleData.length;){if(this.bundleData[e]==="{"){if(e===t)throw new Error("First character is a bracket and not a number");return this.cursor=e,Number(this.bundleData.slice(t,e))}e++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */class tE{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(s,i){const a=O(s),u={documents:i.map((m=>_s(a.serializer,m)))},c=await a.Jo("BatchGetDocuments",a.serializer.databaseId,Q.emptyPath(),u,i.length),h=new Map;c.forEach((m=>{const p=py(a.serializer,m);h.set(p.key.toString(),p)}));const f=[];return i.forEach((m=>{const p=h.get(m.toString());U(!!p,55234,{key:m}),f.push(p)})),f})(this.datastore,t);return e.forEach((n=>this.recordVersion(n))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new gr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,n)=>{const s=k.fromPath(n);this.mutations.push(new Qa(s,this.precondition(s)))})),await(async function(n,s){const i=O(n),a={writes:s.map((u=>ys(i.serializer,u)))};await i.Wo("Commit",i.serializer.databaseId,Q.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw M(50498,{Wu:t.constructor.name});e=j.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new C(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(j.min())?ht.exists(!1):ht.updateTime(e):ht.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(j.min()))throw new C(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ht.updateTime(e)}return ht.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class eE{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.Gu=n.maxAttempts,this.F_=new uu(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const t=new tE(this.datastore),e=this.Ju(t);e&&e.then((n=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Hu(s)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(t){try{const e=this.updateFunction(t);return!Ts(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(t){this.Gu>0&&this.Yu(t)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(t)}Yu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Wd(e)}return!1}}/**
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
 */const qe="FirestoreClient";class nE{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{N(qe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(N(qe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ir(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ho(r,t){r.asyncQueue.verifyOperationInProgress(),N(qe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Sf(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>{Ft("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Ft("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=t}async function hh(r,t){r.asyncQueue.verifyOperationInProgress();const e=await bu(r);N(qe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>rh(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>rh(t.remoteStore,s))),r._onlineComponents=t}async function bu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(qe,"Using user provided OfflineComponentProvider");try{await Ho(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Ft("Error using user provided cache. Falling back to memory cache: "+e),await Ho(r,new ur)}}else N(qe,"Using default OfflineComponentProvider"),await Ho(r,new vu(void 0));return r._offlineComponents}async function oo(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(qe,"Using user provided OnlineComponentProvider"),await hh(r,r._uninitializedComponentsProvider._online)):(N(qe,"Using default OnlineComponentProvider"),await hh(r,new Ue))),r._onlineComponents}function tm(r){return bu(r).then((t=>t.persistence))}function Er(r){return bu(r).then((t=>t.localStore))}function em(r){return oo(r).then((t=>t.remoteStore))}function Ru(r){return oo(r).then((t=>t.syncEngine))}function nm(r){return oo(r).then((t=>t.datastore))}async function cr(r){const t=await oo(r),e=t.eventManager;return e.onListen=xI.bind(null,t.syncEngine),e.onUnlisten=kI.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=NI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=OI.bind(null,t.syncEngine),e}function rE(r){return r.asyncQueue.enqueue((async()=>{const t=await tm(r),e=await em(r);return t.setNetworkEnabled(!0),(function(s){const i=O(s);return i.Ia.delete(0),Vs(i)})(e)}))}function sE(r){return r.asyncQueue.enqueue((async()=>{const t=await tm(r),e=await em(r);return t.setNetworkEnabled(!1),(async function(s){const i=O(s);i.Ia.add(0),await pr(i),i.Aa.set("Offline")})(e)}))}function iE(r,t){const e=new At;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,a){try{const u=await(function(h,f){const m=O(h);return m.persistence.runTransaction("read document","readonly",(p=>m.localDocuments.getDocument(p,f)))})(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new C(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Ir(u,`Failed to get document '${i} from cache`);a.reject(c)}})(await Er(r),t,e))),e.promise}function rm(r,t,e={}){const n=new At;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,c,h){const f=new io({next:p=>{f.Ou(),a.enqueueAndForget((()=>mu(i,m)));const v=p.docs.has(u);!v&&p.fromCache?h.reject(new C(R.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?h.reject(new C(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new pu(fr(u.path),f,{includeMetadataChanges:!0,ka:!0});return fu(i,m)})(await cr(r),r.asyncQueue,t,e,n))),n.promise}function oE(r,t){const e=new At;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,a){try{const u=await ki(s,i,!0),c=new Wf(i,u.qs),h=c.nu(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Ir(u,`Failed to execute query '${i} against cache`);a.reject(c)}})(await Er(r),t,e))),e.promise}function sm(r,t,e={}){const n=new At;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,c,h){const f=new io({next:p=>{f.Ou(),a.enqueueAndForget((()=>mu(i,m))),p.fromCache&&c.source==="server"?h.reject(new C(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new pu(u,f,{includeMetadataChanges:!0,ka:!0});return fu(i,m)})(await cr(r),r.asyncQueue,t,e,n))),n.promise}function aE(r,t,e){const n=new At;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await nm(r);n.resolve((async function(a,u,c){var h;const f=O(a),{request:m,ft:p,parent:v}=sf(f.serializer,Dd(u),c);f.connection.Qo||delete m.parent;const V=(await f.Jo("RunAggregationQuery",f.serializer.databaseId,v,m,1)).filter((x=>!!x.result));U(V.length===1,64727);const D=(h=V[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(D).reduce(((x,L)=>(x[p[L]]=D[L],x)),{})})(s,t,e))}catch(s){n.reject(s)}})),n.promise}function uE(r,t){const e=new io(t);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Da.add(i),i.next()})(await cr(r),e))),()=>{e.Ou(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Da.delete(i)})(await cr(r),e)))}}function cE(r,t,e,n){const s=(function(a,u){let c;return c=typeof a=="string"?Na().encode(a):a,(function(f,m){return new YI(f,m)})((function(f,m){if(f instanceof Uint8Array)return lh(f,m);if(f instanceof ArrayBuffer)return lh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(c),u)})(e,vn(t));r.asyncQueue.enqueueAndForget((async()=>{JI(await Ru(r),s,n)}))}function lE(r,t){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",(a=>i.Ti.getNamedQuery(a,s)))})(await Er(r),t)))}function im(r,t){return(function(n,s){return new ZI(n,s)})(r,t)}function hE(r,t){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=O(n),a=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",(c=>a.getFieldIndexes(c).next((h=>(function(m,p,v,V,D){m=[...m],p=[...p],m.sort(v),p.sort(v);const x=m.length,L=p.length;let q=0,B=0;for(;q<L&&B<x;){const K=v(m[B],p[q]);K<0?D(m[B++]):K>0?V(p[q++]):(q++,B++)}for(;q<L;)V(p[q++]);for(;B<x;)D(m[B++])})(h,s,o_,(f=>{u.push(a.addFieldIndex(c,f))}),(f=>{u.push(a.deleteFieldIndex(c,f))})))).next((()=>A.waitFor(u)))))})(await Er(r),t)))}function dE(r,t){return r.asyncQueue.enqueue((async()=>(function(n,s){O(n).Cs.Rs=s})(await Er(r),t)))}function fE(r){return r.asyncQueue.enqueue((async()=>(function(e){const n=O(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Er(r))))}/**
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
 */function om(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const dh=new Map;/**
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
 */const am="firestore.googleapis.com",fh=!0;class mh{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=fh}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:fh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=mf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yf)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Cs{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Gh;switch(n.type){case"firstParty":return new t_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=dh.get(e);n&&(N("ComponentProvider","Removing Datastore"),dh.delete(e),n.terminate())})(this),Promise.resolve()}}function um(r,t,e,n={}){var s;r=W(r,Cs);const i=Bi(t),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;i&&(Rh(`https://${c}`),Vg("Firestore",!0)),a.host!==am&&a.host!==c&&Ft("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:n});if(!Ne(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=vt.MOCK_USER;else{f=Rg(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new C(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new vt(p)}r._authCredentials=new Jp(new $h(f,m))}}/**
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
 */class Et{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Et(this.firestore,t,this._query)}}class nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(wn(e,nt._jsonSchema))return new nt(t,n||null,new k(Q.fromString(e.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:yt("string",nt._jsonSchemaVersion),referencePath:yt("string")};class Jt extends Et{constructor(t,e,n){super(t,e,fr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new k(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function mE(r,t,...e){if(r=It(r),ka("collection","path",t),r instanceof Cs){const n=Q.fromString(t,...e);return nl(n),new Jt(r,null,n)}{if(!(r instanceof nt||r instanceof Jt))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return nl(n),new Jt(r.firestore,null,n)}}function gE(r,t){if(r=W(r,Cs),ka("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new C(R.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Et(r,null,(function(n){return new me(Q.emptyPath(),n)})(t))}function cm(r,t,...e){if(r=It(r),arguments.length===1&&(t=Ui.newId()),ka("doc","path",t),r instanceof Cs){const n=Q.fromString(t,...e);return el(n),new nt(r,null,new k(n))}{if(!(r instanceof nt||r instanceof Jt))throw new C(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return el(n),new nt(r.firestore,r instanceof Jt?r.converter:null,new k(n))}}function pE(r,t){return r=It(r),t=It(t),(r instanceof nt||r instanceof Jt)&&(t instanceof nt||t instanceof Jt)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function Su(r,t){return r=It(r),t=It(t),r instanceof Et&&t instanceof Et&&r.firestore===t.firestore&&As(r._query,t._query)&&r.converter===t.converter}/**
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
 */const gh="AsyncQueue";class ph{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new uu(this,"async_queue_retry"),this.oc=()=>{const n=_i();n&&N(gh,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=_i();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=_i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new At;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!ze(t))throw t;N(gh,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,gt("INTERNAL UNHANDLED ERROR: ",_h(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=du.createAndSchedule(this,t,e,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&M(47125,{hc:_h(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function _h(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function zn(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class lm{constructor(){this._progressObserver={},this._taskCompletionResolver=new At,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
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
 */const _E=-1;class st extends Cs{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ph,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ph(t),this._firestoreClient=void 0,await t}}}function yE(r,t,e){e||(e=fs);const n=Da(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Ne(i,t))return s;throw new C(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new C(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yf)throw new C(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&Bi(t.host)&&Rh(t.host),n.initialize({options:t,instanceIdentifier:e})}function IE(r,t){const e=typeof r=="object"?r:Fp(),n=typeof r=="string"?r:t||fs,s=Da(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Ag("firestore");i&&um(s,...i)}return s}function dt(r){if(r._terminated)throw new C(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hm(r),r._firestoreClient}function hm(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,c,h,f){return new U_(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,om(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new nE(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(r._componentsProvider))}function EE(r,t){Ft("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return dm(r,Ue.provider,{build:n=>new Au(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function TE(r){Ft("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();dm(r,Ue.provider,{build:e=>new Zf(e,t.cacheSizeBytes)})}function dm(r,t,e){if((r=W(r,st))._firestoreClient||r._terminated)throw new C(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},hm(r)}function wE(r){if(r._initialized&&!r._terminated)throw new C(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new At;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!re.C())return Promise.resolve();const s=n+Af;await re.delete(s)})(su(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function vE(r){return(function(e){const n=new At;return e.asyncQueue.enqueueAndForget((async()=>UI(await Ru(e),n))),n.promise})(dt(r=W(r,st)))}function AE(r){return rE(dt(r=W(r,st)))}function bE(r){return sE(dt(r=W(r,st)))}function RE(r){return Cp(r.app,"firestore",r._databaseId.database),r._delete()}function Sa(r,t){const e=dt(r=W(r,st)),n=new lm;return cE(e,r._databaseId,t,n),n}function fm(r,t){return lE(dt(r=W(r,st)),t).then((e=>e?new Et(r,null,e.query):null))}/**
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
 */class lr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class mm{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bt(ft.fromBase64String(t))}catch(e){throw new C(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Bt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(wn(t,Bt._jsonSchema))return Bt.fromBase64String(t.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:yt("string",Bt._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class Qe{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function SE(){return new Qe(ra)}/**
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
 */class We{constructor(t){this._methodName=t}}/**
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
 */class Yt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(t){if(wn(t,Yt._jsonSchema))return new Yt(t.latitude,t.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:yt("string",Yt._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class Wt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(wn(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Wt(t.vectorValues);throw new C(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:yt("string",Wt._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const PE=/^__.*__$/;class VE{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new mr(t,this.data,e,this.fieldTransforms)}}class gm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new pe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function pm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class ao{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new ao(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.fc(t),s}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Li(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(pm(this.Ec)&&PE.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class CE{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||vn(t)}Dc(t,e,n,s=!1){return new ao({Ec:t,methodName:e,bc:n,path:ct.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function An(r){const t=r._freezeSettings(),e=vn(r._databaseId);return new CE(r._databaseId,!!t.ignoreUndefinedProperties,e)}function uo(r,t,e,n,s,i={}){const a=r.Dc(i.merge||i.mergeFields?2:0,t,e,s);ku("Data must be an object, but it was:",a,n);const u=Im(n,a);let c,h;if(i.merge)c=new qt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=Is(t,m,e);if(!a.contains(p))throw new C(R.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Tm(f,p)||f.push(p)}c=new qt(f),h=a.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,h=a.fieldTransforms;return new VE(new St(u),c,h)}class Ds extends We{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ds}}function _m(r,t,e){return new ao({Ec:3,bc:t.settings.bc,methodName:r._methodName,mc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Pu extends We{_toFieldTransform(t){return new Rs(t.path,new er)}isEqual(t){return t instanceof Pu}}class Vu extends We{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=_m(this,t,!0),n=this.vc.map((i=>bn(i,e))),s=new gn(n);return new Rs(t.path,s)}isEqual(t){return t instanceof Vu&&Ne(this.vc,t.vc)}}class Cu extends We{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=_m(this,t,!0),n=this.vc.map((i=>bn(i,e))),s=new pn(n);return new Rs(t.path,s)}isEqual(t){return t instanceof Cu&&Ne(this.vc,t.vc)}}class Du extends We{constructor(t,e){super(t),this.Cc=e}_toFieldTransform(t){const e=new nr(t.serializer,Ud(t.serializer,this.Cc));return new Rs(t.path,e)}isEqual(t){return t instanceof Du&&this.Cc===t.Cc}}function xu(r,t,e,n){const s=r.Dc(1,t,e);ku("Data must be an object, but it was:",s,n);const i=[],a=St.empty();$e(n,((c,h)=>{const f=co(t,c,e);h=It(h);const m=s.gc(f);if(h instanceof Ds)i.push(f);else{const p=bn(h,m);p!=null&&(i.push(f),a.set(f,p))}}));const u=new qt(i);return new gm(a,u,s.fieldTransforms)}function Nu(r,t,e,n,s,i){const a=r.Dc(1,t,e),u=[Is(t,n,e)],c=[s];if(i.length%2!=0)throw new C(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)u.push(Is(t,i[p])),c.push(i[p+1]);const h=[],f=St.empty();for(let p=u.length-1;p>=0;--p)if(!Tm(h,u[p])){const v=u[p];let V=c[p];V=It(V);const D=a.gc(v);if(V instanceof Ds)h.push(v);else{const x=bn(V,D);x!=null&&(h.push(v),f.set(v,x))}}const m=new qt(h);return new gm(f,m,a.fieldTransforms)}function ym(r,t,e,n=!1){return bn(e,r.Dc(n?4:3,t))}function bn(r,t){if(Em(r=It(r)))return ku("Unsupported field value:",t,r),Im(r,t);if(r instanceof We)return(function(n,s){if(!pm(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let c=bn(u,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=It(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ud(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Z.fromDate(n);return{timestampValue:rr(s.serializer,i)}}if(n instanceof Z){const i=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rr(s.serializer,i)}}if(n instanceof Yt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bt)return{bytesValue:Yd(s.serializer,n._byteString)};if(n instanceof nt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ya(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Wt)return(function(a,u){return{mapValue:{fields:{[qa]:{stringValue:ja},[Yn]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw u.wc("VectorValues must only contain numeric values.");return Ka(u.serializer,h)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${qi(n)}`)})(r,t)}function Im(r,t){const e={};return fd(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(r,((n,s)=>{const i=bn(s,t.Vc(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function Em(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof Yt||r instanceof Bt||r instanceof nt||r instanceof We||r instanceof Wt)}function ku(r,t,e){if(!Em(e)||!Wh(e)){const n=qi(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function Is(r,t,e){if((t=It(t))instanceof Qe)return t._internalPath;if(typeof t=="string")return co(r,t);throw Li("Field path arguments must be of type string or ",r,!1,void 0,e)}const DE=new RegExp("[~\\*/\\[\\]]");function co(r,t,e){if(t.search(DE)>=0)throw Li(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Qe(...t.split("."))._internalPath}catch{throw Li(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Li(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new C(R.INVALID_ARGUMENT,u+r+c)}function Tm(r,t){return r.some((e=>e.isEqual(t)))}/**
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
 */class Es{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(lo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xE extends Es{data(){return super.data()}}function lo(r,t){return typeof t=="string"?co(r,t):t instanceof Qe?t._internalPath:t._delegate._internalPath}/**
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
 */function wm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ou{}class Tr extends Ou{}function NE(r,t,...e){let n=[];t instanceof Ou&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((c=>c instanceof Rn)).length,u=i.filter((c=>c instanceof wr)).length;if(a>1||a>0&&u>0)throw new C(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class wr extends Tr{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new wr(t,e,n)}_apply(t){const e=this._parse(t);return Am(t._query,e),new Et(t.firestore,t.converter,ma(t._query,e))}_parse(t){const e=An(t.firestore);return(function(i,a,u,c,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ih(m,f);const V=[];for(const D of m)V.push(yh(c,i,D));p={arrayValue:{values:V}}}else p=yh(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ih(m,f),p=ym(u,a,m,f==="in"||f==="not-in");return H.create(h,f,p)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function kE(r,t,e){const n=t,s=lo("where",r);return wr._create(s,n,e)}class Rn extends Ou{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Rn(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:et.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)Am(a,c),a=ma(a,c)})(t._query,e),new Et(t.firestore,t.converter,ma(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function OE(...r){return r.forEach((t=>bm("or",t))),Rn._create("or",r)}function FE(...r){return r.forEach((t=>bm("and",t))),Rn._create("and",r)}class ho extends Tr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ho(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ps(i,a)})(t._query,this._field,this._direction);return new Et(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new me(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function ME(r,t="asc"){const e=t,n=lo("orderBy",r);return ho._create(n,e)}class xs extends Tr{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new xs(t,e,n)}_apply(t){return new Et(t.firestore,t.converter,Pi(t._query,this._limit,this._limitType))}}function LE(r){return Hh("limit",r),xs._create("limit",r,"F")}function BE(r){return Hh("limitToLast",r),xs._create("limitToLast",r,"L")}class Ns extends Tr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ns(t,e,n)}_apply(t){const e=vm(t,this.type,this._docOrFields,this._inclusive);return new Et(t.firestore,t.converter,(function(s,i){return new me(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)})(t._query,e))}}function UE(...r){return Ns._create("startAt",r,!0)}function qE(...r){return Ns._create("startAfter",r,!1)}class ks extends Tr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ks(t,e,n)}_apply(t){const e=vm(t,this.type,this._docOrFields,this._inclusive);return new Et(t.firestore,t.converter,(function(s,i){return new me(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)})(t._query,e))}}function jE(...r){return ks._create("endBefore",r,!1)}function zE(...r){return ks._create("endAt",r,!0)}function vm(r,t,e,n){if(e[0]=It(e[0]),e[0]instanceof Es)return(function(i,a,u,c,h){if(!c)throw new C(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of jn(i))if(m.field.isKeyField())f.push(fn(a,c.key));else{const p=c.data.field(m.field);if(Ki(p))throw new C(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=m.field.canonicalString();throw new C(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(p)}return new Le(f,h)})(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=An(r.firestore);return(function(a,u,c,h,f,m){const p=a.explicitOrderBy;if(f.length>p.length)throw new C(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let V=0;V<f.length;V++){const D=f[V];if(p[V].field.isKeyField()){if(typeof D!="string")throw new C(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!$a(a)&&D.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const x=a.path.child(Q.fromString(D));if(!k.isDocumentKey(x))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const L=new k(x);v.push(fn(u,L))}else{const x=ym(c,h,D);v.push(x)}}return new Le(v,m)})(r._query,r.firestore._databaseId,s,t,e,n)}}function yh(r,t,e){if(typeof(e=It(e))=="string"){if(e==="")throw new C(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$a(t)&&e.indexOf("/")!==-1)throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Q.fromString(e));if(!k.isDocumentKey(n))throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fn(r,new k(n))}if(e instanceof nt)return fn(r,e._key);throw new C(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qi(e)}.`)}function Ih(r,t){if(!Array.isArray(r)||r.length===0)throw new C(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Am(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function bm(r,t){if(!(t instanceof wr||t instanceof Rn))throw new C(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Fu{convertValue(t,e="none"){switch(Fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return $e(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[Yn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>lt(a.doubleValue)));return new Wt(i)}convertGeoPoint(t){return new Yt(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Qi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ds(t));default:return null}}convertTimestamp(t){const e=de(t);return new Z(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Q.fromString(t);U(cf(n),9688,{name:t});const s=new Oe(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function fo(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Mu extends Fu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}/**
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
 */function $E(r){return new lr("sum",Is("sum",r))}function GE(r){return new lr("avg",Is("average",r))}function Rm(){return new lr("count")}function KE(r,t){var e,n;return r instanceof lr&&t instanceof lr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function QE(r,t){return Su(r.query,t.query)&&Ne(r.data(),t.data())}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Sm="NOT SUPPORTED";class le{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zt extends Es{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(lo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=zt._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}function WE(r,t,e){if(wn(t,zt._jsonSchema)){if(t.bundle===Sm)throw new C(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=im(t.bundle,n),i=s.Ku(),a=new _u(s.getMetadata(),n);for(const f of i)a.Wa(f);const u=a.documents;if(u.length!==1)throw new C(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=Ji(n,u[0].document),h=new k(Q.fromString(t.bundleName));return new zt(r,new Mu(r),h,c,new le(!1,!1),e||null)}}zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",zt._jsonSchema={type:yt("string",zt._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class is extends zt{data(t={}){return super.data(t)}}class $t{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new le(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new is(this._firestore,this._userDataWriter,n.key,n,new le(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const c=new is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new le(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const c=new is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new le(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:XE(u.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$t._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ui.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function HE(r,t,e){if(wn(t,$t._jsonSchema)){if(t.bundle===Sm)throw new C(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=im(t.bundle,n),i=s.Ku(),a=new _u(s.getMetadata(),n);for(const p of i)a.Wa(p);if(a.queries.length!==1)throw new C(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${a.queries.length} queries.`);const u=Zi(a.queries[0].bundledQuery),c=a.documents;let h=new dn;c.map((p=>{const v=Ji(n,p.document);h=h.add(v)}));const f=Tn.fromInitialDocuments(u,h,$(),!1,!1),m=new Et(r,e||null,u);return new $t(r,new Mu(r),m,f)}}function XE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}function JE(r,t){return r instanceof zt&&t instanceof zt?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof $t&&t instanceof $t&&r._firestore===t._firestore&&Su(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
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
 */function YE(r){r=W(r,nt);const t=W(r.firestore,st);return rm(dt(t),r._key).then((e=>Lu(t,r,e)))}$t._jsonSchemaVersion="firestore/querySnapshot/1.0",$t._jsonSchema={type:yt("string",$t._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class He extends Fu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}function ZE(r){r=W(r,nt);const t=W(r.firestore,st),e=dt(t),n=new He(t);return iE(e,r._key).then((s=>new zt(t,n,r._key,s,new le(s!==null&&s.hasLocalMutations,!0),r.converter)))}function tT(r){r=W(r,nt);const t=W(r.firestore,st);return rm(dt(t),r._key,{source:"server"}).then((e=>Lu(t,r,e)))}function eT(r){r=W(r,Et);const t=W(r.firestore,st),e=dt(t),n=new He(t);return wm(r._query),sm(e,r._query).then((s=>new $t(t,n,r,s)))}function nT(r){r=W(r,Et);const t=W(r.firestore,st),e=dt(t),n=new He(t);return oE(e,r._query).then((s=>new $t(t,n,r,s)))}function rT(r){r=W(r,Et);const t=W(r.firestore,st),e=dt(t),n=new He(t);return sm(e,r._query,{source:"server"}).then((s=>new $t(t,n,r,s)))}function sT(r,t,e){r=W(r,nt);const n=W(r.firestore,st),s=fo(r.converter,t,e);return vr(n,[uo(An(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ht.none())])}function iT(r,t,e,...n){r=W(r,nt);const s=W(r.firestore,st),i=An(s);let a;return a=typeof(t=It(t))=="string"||t instanceof Qe?Nu(i,"updateDoc",r._key,t,e,n):xu(i,"updateDoc",r._key,t),vr(s,[a.toMutation(r._key,ht.exists(!0))])}function oT(r){return vr(W(r.firestore,st),[new gr(r._key,ht.none())])}function aT(r,t){const e=W(r.firestore,st),n=cm(r),s=fo(r.converter,t);return vr(e,[uo(An(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ht.exists(!1))]).then((()=>n))}function Pa(r,...t){var e,n,s;r=It(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||zn(t[a])||(i=t[a++]);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zn(t[a])){const m=t[a];t[a]=(e=m.next)===null||e===void 0?void 0:e.bind(m),t[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),t[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,f;if(r instanceof nt)h=W(r.firestore,st),f=fr(r._key.path),c={next:m=>{t[a]&&t[a](Lu(h,r,m))},error:t[a+1],complete:t[a+2]};else{const m=W(r,Et);h=W(m.firestore,st),f=m._query;const p=new He(h);c={next:v=>{t[a]&&t[a](new $t(h,p,m,v))},error:t[a+1],complete:t[a+2]},wm(r._query)}return(function(p,v,V,D){const x=new io(D),L=new pu(v,x,V);return p.asyncQueue.enqueueAndForget((async()=>fu(await cr(p),L))),()=>{x.Ou(),p.asyncQueue.enqueueAndForget((async()=>mu(await cr(p),L)))}})(dt(h),f,u,c)}function uT(r,t,...e){const n=It(r),s=(function(c){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in c)){h.error=`snapshotJson missing required field: ${m}`;break}const p=c[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h})(t);if(s.error)throw new C(R.INVALID_ARGUMENT,s.error);let i,a=0;if(typeof e[a]!="object"||zn(e[a])||(i=e[a++]),s.bundleSource==="QuerySnapshot"){let u=null;if(typeof e[a]=="object"&&zn(e[a])){const c=e[a++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:e[a++],error:e[a++],complete:e[a++]};return(function(h,f,m,p,v){let V,D=!1;return Sa(h,f.bundle).then((()=>fm(h,f.bundleName))).then((L=>{L&&!D&&(v&&L.withConverter(v),V=Pa(L,m||{},p))})).catch((L=>(p.error&&p.error(L),()=>{}))),()=>{D||(D=!0,V&&V())}})(n,s,i,u,e[a])}if(s.bundleSource==="DocumentSnapshot"){let u=null;if(typeof e[a]=="object"&&zn(e[a])){const c=e[a++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:e[a++],error:e[a++],complete:e[a++]};return(function(h,f,m,p,v){let V,D=!1;return Sa(h,f.bundle).then((()=>{if(!D){const L=new nt(h,v||null,k.fromPath(f.bundleName));V=Pa(L,m||{},p)}})).catch((L=>(p.error&&p.error(L),()=>{}))),()=>{D||(D=!0,V&&V())}})(n,s,i,u,e[a])}throw new C(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function cT(r,t){return uE(dt(r=W(r,st)),zn(t)?t:{next:t})}function vr(r,t){return(function(n,s){const i=new At;return n.asyncQueue.enqueueAndForget((async()=>FI(await Ru(n),s,i))),i.promise})(dt(r),t)}function Lu(r,t,e){const n=e.docs.get(t._key),s=new He(r);return new zt(r,s,t._key,n,new le(e.hasPendingWrites,e.fromCache),t.converter)}function lT(r){return Pm(r,{count:Rm()})}function Pm(r,t){const e=W(r.firestore,st),n=dt(e),s=dd(t,((i,a)=>new Qd(a,i.aggregateType,i._internalFieldPath)));return aE(n,r._query,s).then((i=>(function(u,c,h){const f=new He(u);return new mm(c,f,h)})(e,r,i)))}class hT{constructor(t){this.kind="memory",this._onlineComponentProvider=Ue.provider,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new vu(void 0)}}toJSON(){return{kind:this.kind}}}class dT{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Vm(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class fT{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ur.provider}toJSON(){return{kind:this.kind}}}class mT{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new vu(t)}}toJSON(){return{kind:this.kind}}}function gT(){return new fT}function pT(r){return new mT(r==null?void 0:r.cacheSizeBytes)}function _T(r){return new hT(r)}function yT(r){return new dT(r)}class IT{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Ue.provider,this._offlineComponentProvider={build:e=>new Au(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class ET{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Ue.provider,this._offlineComponentProvider={build:e=>new Zf(e,t==null?void 0:t.cacheSizeBytes)}}}function Vm(r){return new IT(r==null?void 0:r.forceOwnership)}function TT(){return new ET}/**
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
 */const wT={maxAttempts:5};/**
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
 */class Cm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=An(t)}set(t,e,n){this._verifyNotCommitted();const s=Pe(t,this._firestore),i=fo(s.converter,e,n),a=uo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ht.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Pe(t,this._firestore);let a;return a=typeof(e=It(e))=="string"||e instanceof Qe?Nu(this._dataReader,"WriteBatch.update",i._key,e,n,s):xu(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ht.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Pe(t,this._firestore);return this._mutations=this._mutations.concat(new gr(e._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pe(r,t){if((r=It(r)).firestore!==t)throw new C(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class vT{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=An(t)}get(t){const e=Pe(t,this._firestore),n=new Mu(this._firestore);return this._transaction.lookup([e._key]).then((s=>{if(!s||s.length!==1)return M(24041);const i=s[0];if(i.isFoundDocument())return new Es(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new Es(this._firestore,n,e._key,null,e.converter);throw M(18433,{doc:i})}))}set(t,e,n){const s=Pe(t,this._firestore),i=fo(s.converter,e,n),a=uo(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(t,e,n,...s){const i=Pe(t,this._firestore);let a;return a=typeof(e=It(e))=="string"||e instanceof Qe?Nu(this._dataReader,"Transaction.update",i._key,e,n,s):xu(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,a),this}delete(t){const e=Pe(t,this._firestore);return this._transaction.delete(e._key),this}}/**
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
 */class Dm extends vT{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Pe(t,this._firestore),n=new He(this._firestore);return super.get(t).then((s=>new zt(this._firestore,n,e._key,s._document,new le(!1,!1),e.converter)))}}function AT(r,t,e){r=W(r,st);const n=Object.assign(Object.assign({},wT),e);return(function(i){if(i.maxAttempts<1)throw new C(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(i,a,u){const c=new At;return i.asyncQueue.enqueueAndForget((async()=>{const h=await nm(i);new eE(i.asyncQueue,h,u,a,c).zu()})),c.promise})(dt(r),(s=>t(new Dm(r,s))),n)}/**
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
 */function bT(){return new Ds("deleteField")}function RT(){return new Pu("serverTimestamp")}function ST(...r){return new Vu("arrayUnion",r)}function PT(...r){return new Cu("arrayRemove",r)}function VT(r){return new Du("increment",r)}function CT(r){return new Wt(r)}/**
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
 */function DT(r){return dt(r=W(r,st)),new Cm(r,(t=>vr(r,t)))}/**
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
 */function xT(r,t){const e=dt(r=W(r,st));if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return Ft("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const a=typeof i=="string"?(function(h){try{return JSON.parse(h)}catch(f){throw new C(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}})(i):i,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const h=Eh(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const m of c.fields){const p=co("setIndexConfiguration",Eh(m,"fieldPath"));m.arrayConfig==="CONTAINS"?f.push(new ln(p,2)):m.order==="ASCENDING"?f.push(new ln(p,0)):m.order==="DESCENDING"&&f.push(new ln(p,1))}u.push(new Kn(Kn.UNKNOWN_ID,h,f,Qn.empty()))}return u})(t);return hE(e,n)}function Eh(r,t){if(typeof r[t]!="string")throw new C(R.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
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
 */class xm{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function NT(r){var t;r=W(r,st);const e=Th.get(r);if(e)return e;if(((t=dt(r)._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offline.kind)!=="persistent")return null;const n=new xm(r);return Th.set(r,n),n}function kT(r){Nm(r,!0)}function OT(r){Nm(r,!1)}function FT(r){fE(dt(r._firestore)).then((t=>N("deleting all persistent cache indexes succeeded"))).catch((t=>Ft("deleting all persistent cache indexes failed",t)))}function Nm(r,t){dE(dt(r._firestore),t).then((e=>N(`setting persistent cache index auto creation isEnabled=${t} succeeded`))).catch((e=>Ft(`setting persistent cache index auto creation isEnabled=${t} failed`,e)))}const Th=new WeakMap;/**
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
 */function MT(r){var t;const e=(t=dt(W(r.firestore,st))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:Yi(e,Ot(r._query)).Vt}function LT(r,t){var e;const n=dd(t,((i,a)=>new Qd(a,i.aggregateType,i._internalFieldPath))),s=(e=dt(W(r.firestore,st))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return s===void 0?null:sf(s,Dd(r._query),n,!0).request}/**
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
 */class BT{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return Bu.instance.onExistenceFilterMismatch(t)}}class Bu{constructor(){this.Fc=new Map}static get instance(){return ai||(ai=new Bu,(function(e){if(Vi)throw new Error("a TestingHooksSpi instance is already set");Vi=e})(ai)),ai}ct(t){this.Fc.forEach((e=>e(t)))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Fc;return n.set(e,t),()=>n.delete(e)}}let ai=null;(function(t,e=!0){(function(s){dr=s})(kp),wi(new os("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new st(new Yp(n.getProvider("auth-internal")),new e_(a,n.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(h.options.projectId,f)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),qn(Yc,Zc,t),qn(Yc,Zc,"esm2017")})();const qT=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Fu,AggregateField:lr,AggregateQuerySnapshot:mm,Bytes:Bt,CACHE_SIZE_UNLIMITED:_E,CollectionReference:Jt,DocumentReference:nt,DocumentSnapshot:zt,FieldPath:Qe,FieldValue:We,Firestore:st,FirestoreError:C,GeoPoint:Yt,LoadBundleTask:lm,PersistentCacheIndexManager:xm,Query:Et,QueryCompositeFilterConstraint:Rn,QueryConstraint:Tr,QueryDocumentSnapshot:is,QueryEndAtConstraint:ks,QueryFieldFilterConstraint:wr,QueryLimitConstraint:xs,QueryOrderByConstraint:ho,QuerySnapshot:$t,QueryStartAtConstraint:Ns,SnapshotMetadata:le,Timestamp:Z,Transaction:Dm,VectorValue:Wt,WriteBatch:Cm,_AutoId:Ui,_ByteString:ft,_DatabaseId:Oe,_DocumentKey:k,_EmptyAppCheckTokenProvider:n_,_EmptyAuthCredentialsProvider:Gh,_FieldPath:ct,_TestingHooks:BT,_cast:W,_debugAssert:Xp,_internalAggregationQueryToProtoRunAggregationQueryRequest:LT,_internalQueryToProtoQueryTarget:MT,_isBase64Available:L_,_logWarn:Ft,_validateIsNotUsedTogether:Qh,addDoc:aT,aggregateFieldEqual:KE,aggregateQuerySnapshotEqual:QE,and:FE,arrayRemove:PT,arrayUnion:ST,average:GE,clearIndexedDbPersistence:wE,collection:mE,collectionGroup:gE,connectFirestoreEmulator:um,count:Rm,deleteAllPersistentCacheIndexes:FT,deleteDoc:oT,deleteField:bT,disableNetwork:bE,disablePersistentCacheIndexAutoCreation:OT,doc:cm,documentId:SE,documentSnapshotFromJSON:WE,enableIndexedDbPersistence:EE,enableMultiTabIndexedDbPersistence:TE,enableNetwork:AE,enablePersistentCacheIndexAutoCreation:kT,endAt:zE,endBefore:jE,ensureFirestoreConfigured:dt,executeWrite:vr,getAggregateFromServer:Pm,getCountFromServer:lT,getDoc:YE,getDocFromCache:ZE,getDocFromServer:tT,getDocs:eT,getDocsFromCache:nT,getDocsFromServer:rT,getFirestore:IE,getPersistentCacheIndexManager:NT,increment:VT,initializeFirestore:yE,limit:LE,limitToLast:BE,loadBundle:Sa,memoryEagerGarbageCollector:gT,memoryLocalCache:_T,memoryLruGarbageCollector:pT,namedQuery:fm,onSnapshot:Pa,onSnapshotResume:uT,onSnapshotsInSync:cT,or:OE,orderBy:ME,persistentLocalCache:yT,persistentMultipleTabManager:TT,persistentSingleTabManager:Vm,query:NE,queryEqual:Su,querySnapshotFromJSON:HE,refEqual:pE,runTransaction:AT,serverTimestamp:RT,setDoc:sT,setIndexConfiguration:xT,setLogLevel:Hp,snapshotEqual:JE,startAfter:qE,startAt:UE,sum:$E,terminate:RE,updateDoc:iT,vector:CT,waitForPendingWrites:vE,where:kE,writeBatch:DT},Symbol.toStringTag,{value:"Module"}));export{Op as a,TT as b,qT as c,yE as i,yT as p};
