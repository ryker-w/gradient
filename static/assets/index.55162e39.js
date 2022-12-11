var tu=Object.defineProperty;var eu=(i,t,e)=>t in i?tu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ft=(i,t,e)=>(eu(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Ko(i,t){const e=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)e[n[s]]=!0;return t?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=Ko(nu);function Cc(i){return!!i||i===""}function Jo(i){if(Ft(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Se(n)?ou(n):Jo(n);if(s)for(const r in s)t[r]=s[r]}return t}else{if(Se(i))return i;if(le(i))return i}}const su=/;(?![^(]*\))/g,ru=/:(.+)/;function ou(i){const t={};return i.split(su).forEach(e=>{if(e){const n=e.split(ru);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Qo(i){let t="";if(Se(i))t=i;else if(Ft(i))for(let e=0;e<i.length;e++){const n=Qo(i[e]);n&&(t+=n+" ")}else if(le(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Qt={},ki=[],en=()=>{},au=()=>!1,lu=/^on[^a-z]/,Sr=i=>lu.test(i),ta=i=>i.startsWith("onUpdate:"),be=Object.assign,ea=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},cu=Object.prototype.hasOwnProperty,Bt=(i,t)=>cu.call(i,t),Ft=Array.isArray,xs=i=>wr(i)==="[object Map]",hu=i=>wr(i)==="[object Set]",Nt=i=>typeof i=="function",Se=i=>typeof i=="string",na=i=>typeof i=="symbol",le=i=>i!==null&&typeof i=="object",Pc=i=>le(i)&&Nt(i.then)&&Nt(i.catch),uu=Object.prototype.toString,wr=i=>uu.call(i),fu=i=>wr(i).slice(8,-1),du=i=>wr(i)==="[object Object]",ia=i=>Se(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,cr=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tr=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},pu=/-(\w)/g,ji=Tr(i=>i.replace(pu,(t,e)=>e?e.toUpperCase():"")),mu=/\B([A-Z])/g,es=Tr(i=>i.replace(mu,"-$1").toLowerCase()),Lc=Tr(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ur=Tr(i=>i?`on${Lc(i)}`:""),ws=(i,t)=>!Object.is(i,t),Br=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},mr=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},gu=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Ra;const _u=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let on;class xu{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&on&&(this.parent=on,this.index=(on.scopes||(on.scopes=[])).push(this)-1)}run(t){if(this.active){const e=on;try{return on=this,t()}finally{on=e}}}on(){on=this}off(){on=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function vu(i,t=on){t&&t.active&&t.effects.push(i)}const sa=i=>{const t=new Set(i);return t.w=0,t.n=0,t},Rc=i=>(i.w&Wn)>0,Dc=i=>(i.n&Wn)>0,Mu=({deps:i})=>{if(i.length)for(let t=0;t<i.length;t++)i[t].w|=Wn},yu=i=>{const{deps:t}=i;if(t.length){let e=0;for(let n=0;n<t.length;n++){const s=t[n];Rc(s)&&!Dc(s)?s.delete(i):t[e++]=s,s.w&=~Wn,s.n&=~Wn}t.length=e}},Co=new WeakMap;let ps=0,Wn=1;const Po=30;let Je;const hi=Symbol(""),Lo=Symbol("");class ra{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,vu(this,n)}run(){if(!this.active)return this.fn();let t=Je,e=Gn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,Gn=!0,Wn=1<<++ps,ps<=Po?Mu(this):Da(this),this.fn()}finally{ps<=Po&&yu(this),Wn=1<<--ps,Je=this.parent,Gn=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(i){const{deps:t}=i;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(i);t.length=0}}let Gn=!0;const Ic=[];function ns(){Ic.push(Gn),Gn=!1}function is(){const i=Ic.pop();Gn=i===void 0?!0:i}function ze(i,t,e){if(Gn&&Je){let n=Co.get(i);n||Co.set(i,n=new Map);let s=n.get(e);s||n.set(e,s=sa()),Fc(s)}}function Fc(i,t){let e=!1;ps<=Po?Dc(i)||(i.n|=Wn,e=!Rc(i)):e=!i.has(Je),e&&(i.add(Je),Je.deps.push(i))}function En(i,t,e,n,s,r){const a=Co.get(i);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Ft(i))a.forEach((l,c)=>{(c==="length"||c>=n)&&o.push(l)});else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Ft(i)?ia(e)&&o.push(a.get("length")):(o.push(a.get(hi)),xs(i)&&o.push(a.get(Lo)));break;case"delete":Ft(i)||(o.push(a.get(hi)),xs(i)&&o.push(a.get(Lo)));break;case"set":xs(i)&&o.push(a.get(hi));break}if(o.length===1)o[0]&&Ro(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ro(sa(l))}}function Ro(i,t){const e=Ft(i)?i:[...i];for(const n of e)n.computed&&Ia(n);for(const n of e)n.computed||Ia(n)}function Ia(i,t){(i!==Je||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const bu=Ko("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(na)),Su=oa(),wu=oa(!1,!0),Tu=oa(!0),Fa=Eu();function Eu(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const n=Xt(this);for(let r=0,a=this.length;r<a;r++)ze(n,"get",r+"");const s=n[t](...e);return s===-1||s===!1?n[t](...e.map(Xt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){ns();const n=Xt(this)[t].apply(this,e);return is(),n}}),i}function oa(i=!1,t=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(i?t?ku:Gc:t?Bc:Uc).get(n))return n;const a=Ft(n);if(!i&&a&&Bt(Fa,s))return Reflect.get(Fa,s,r);const o=Reflect.get(n,s,r);return(na(s)?zc.has(s):bu(s))||(i||ze(n,"get",s),t)?o:Me(o)?a&&ia(s)?o:o.value:le(o)?i?Vc(o):ca(o):o}}const Au=Nc(),Cu=Nc(!0);function Nc(i=!1){return function(e,n,s,r){let a=e[n];if(Yi(a)&&Me(a)&&!Me(s))return!1;if(!i&&(!gr(s)&&!Yi(s)&&(a=Xt(a),s=Xt(s)),!Ft(e)&&Me(a)&&!Me(s)))return a.value=s,!0;const o=Ft(e)&&ia(n)?Number(n)<e.length:Bt(e,n),l=Reflect.set(e,n,s,r);return e===Xt(r)&&(o?ws(s,a)&&En(e,"set",n,s):En(e,"add",n,s)),l}}function Pu(i,t){const e=Bt(i,t);i[t];const n=Reflect.deleteProperty(i,t);return n&&e&&En(i,"delete",t,void 0),n}function Lu(i,t){const e=Reflect.has(i,t);return(!na(t)||!zc.has(t))&&ze(i,"has",t),e}function Ru(i){return ze(i,"iterate",Ft(i)?"length":hi),Reflect.ownKeys(i)}const Oc={get:Su,set:Au,deleteProperty:Pu,has:Lu,ownKeys:Ru},Du={get:Tu,set(i,t){return!0},deleteProperty(i,t){return!0}},Iu=be({},Oc,{get:wu,set:Cu}),aa=i=>i,Er=i=>Reflect.getPrototypeOf(i);function Fs(i,t,e=!1,n=!1){i=i.__v_raw;const s=Xt(i),r=Xt(t);e||(t!==r&&ze(s,"get",t),ze(s,"get",r));const{has:a}=Er(s),o=n?aa:e?ua:Ts;if(a.call(s,t))return o(i.get(t));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(t)}function zs(i,t=!1){const e=this.__v_raw,n=Xt(e),s=Xt(i);return t||(i!==s&&ze(n,"has",i),ze(n,"has",s)),i===s?e.has(i):e.has(i)||e.has(s)}function Ns(i,t=!1){return i=i.__v_raw,!t&&ze(Xt(i),"iterate",hi),Reflect.get(i,"size",i)}function za(i){i=Xt(i);const t=Xt(this);return Er(t).has.call(t,i)||(t.add(i),En(t,"add",i,i)),this}function Na(i,t){t=Xt(t);const e=Xt(this),{has:n,get:s}=Er(e);let r=n.call(e,i);r||(i=Xt(i),r=n.call(e,i));const a=s.call(e,i);return e.set(i,t),r?ws(t,a)&&En(e,"set",i,t):En(e,"add",i,t),this}function Oa(i){const t=Xt(this),{has:e,get:n}=Er(t);let s=e.call(t,i);s||(i=Xt(i),s=e.call(t,i)),n&&n.call(t,i);const r=t.delete(i);return s&&En(t,"delete",i,void 0),r}function Ua(){const i=Xt(this),t=i.size!==0,e=i.clear();return t&&En(i,"clear",void 0,void 0),e}function Os(i,t){return function(n,s){const r=this,a=r.__v_raw,o=Xt(a),l=t?aa:i?ua:Ts;return!i&&ze(o,"iterate",hi),a.forEach((c,h)=>n.call(s,l(c),l(h),r))}}function Us(i,t,e){return function(...n){const s=this.__v_raw,r=Xt(s),a=xs(r),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=s[i](...n),h=e?aa:t?ua:Ts;return!t&&ze(r,"iterate",l?Lo:hi),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:o?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function Ln(i){return function(...t){return i==="delete"?!1:this}}function Fu(){const i={get(r){return Fs(this,r)},get size(){return Ns(this)},has:zs,add:za,set:Na,delete:Oa,clear:Ua,forEach:Os(!1,!1)},t={get(r){return Fs(this,r,!1,!0)},get size(){return Ns(this)},has:zs,add:za,set:Na,delete:Oa,clear:Ua,forEach:Os(!1,!0)},e={get(r){return Fs(this,r,!0)},get size(){return Ns(this,!0)},has(r){return zs.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Os(!0,!1)},n={get(r){return Fs(this,r,!0,!0)},get size(){return Ns(this,!0)},has(r){return zs.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Us(r,!1,!1),e[r]=Us(r,!0,!1),t[r]=Us(r,!1,!0),n[r]=Us(r,!0,!0)}),[i,e,t,n]}const[zu,Nu,Ou,Uu]=Fu();function la(i,t){const e=t?i?Uu:Ou:i?Nu:zu;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Bt(e,s)&&s in n?e:n,s,r)}const Bu={get:la(!1,!1)},Gu={get:la(!1,!0)},Vu={get:la(!0,!1)},Uc=new WeakMap,Bc=new WeakMap,Gc=new WeakMap,ku=new WeakMap;function Hu(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(i){return i.__v_skip||!Object.isExtensible(i)?0:Hu(fu(i))}function ca(i){return Yi(i)?i:ha(i,!1,Oc,Bu,Uc)}function qu(i){return ha(i,!1,Iu,Gu,Bc)}function Vc(i){return ha(i,!0,Du,Vu,Gc)}function ha(i,t,e,n,s){if(!le(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=Wu(i);if(a===0)return i;const o=new Proxy(i,a===2?n:e);return s.set(i,o),o}function Hi(i){return Yi(i)?Hi(i.__v_raw):!!(i&&i.__v_isReactive)}function Yi(i){return!!(i&&i.__v_isReadonly)}function gr(i){return!!(i&&i.__v_isShallow)}function kc(i){return Hi(i)||Yi(i)}function Xt(i){const t=i&&i.__v_raw;return t?Xt(t):i}function Hc(i){return mr(i,"__v_skip",!0),i}const Ts=i=>le(i)?ca(i):i,ua=i=>le(i)?Vc(i):i;function Wc(i){Gn&&Je&&(i=Xt(i),Fc(i.dep||(i.dep=sa())))}function qc(i,t){i=Xt(i),i.dep&&Ro(i.dep)}function Me(i){return!!(i&&i.__v_isRef===!0)}function Xu(i){return ju(i,!1)}function ju(i,t){return Me(i)?i:new Yu(i,t)}class Yu{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Xt(t),this._value=e?t:Ts(t)}get value(){return Wc(this),this._value}set value(t){const e=this.__v_isShallow||gr(t)||Yi(t);t=e?t:Xt(t),ws(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Ts(t),qc(this))}}function Zu(i){return Me(i)?i.value:i}const $u={get:(i,t,e)=>Zu(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return Me(s)&&!Me(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Xc(i){return Hi(i)?i:new Proxy(i,$u)}var jc;class Ku{constructor(t,e,n,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[jc]=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,qc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const t=Xt(this);return Wc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}jc="__v_isReadonly";function Ju(i,t,e=!1){let n,s;const r=Nt(i);return r?(n=i,s=en):(n=i.get,s=i.set),new Ku(n,s,r||!s,e)}function Vn(i,t,e,n){let s;try{s=n?i(...n):i()}catch(r){Ar(r,t,e)}return s}function We(i,t,e,n){if(Nt(i)){const r=Vn(i,t,e,n);return r&&Pc(r)&&r.catch(a=>{Ar(a,t,e)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(We(i[r],t,e,n));return s}function Ar(i,t,e,n=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,o=e;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](i,a,o)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Vn(l,null,10,[i,a,o]);return}}Qu(i,e,s,n)}function Qu(i,t,e,n=!0){console.error(i)}let Es=!1,Do=!1;const ve=[];let hn=0;const Wi=[];let yn=null,ii=0;const Yc=Promise.resolve();let fa=null;function tf(i){const t=fa||Yc;return i?t.then(this?i.bind(this):i):t}function ef(i){let t=hn+1,e=ve.length;for(;t<e;){const n=t+e>>>1;As(ve[n])<i?t=n+1:e=n}return t}function da(i){(!ve.length||!ve.includes(i,Es&&i.allowRecurse?hn+1:hn))&&(i.id==null?ve.push(i):ve.splice(ef(i.id),0,i),Zc())}function Zc(){!Es&&!Do&&(Do=!0,fa=Yc.then(Kc))}function nf(i){const t=ve.indexOf(i);t>hn&&ve.splice(t,1)}function sf(i){Ft(i)?Wi.push(...i):(!yn||!yn.includes(i,i.allowRecurse?ii+1:ii))&&Wi.push(i),Zc()}function Ba(i,t=Es?hn+1:0){for(;t<ve.length;t++){const e=ve[t];e&&e.pre&&(ve.splice(t,1),t--,e())}}function $c(i){if(Wi.length){const t=[...new Set(Wi)];if(Wi.length=0,yn){yn.push(...t);return}for(yn=t,yn.sort((e,n)=>As(e)-As(n)),ii=0;ii<yn.length;ii++)yn[ii]();yn=null,ii=0}}const As=i=>i.id==null?1/0:i.id,rf=(i,t)=>{const e=As(i)-As(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Kc(i){Do=!1,Es=!0,ve.sort(rf);const t=en;try{for(hn=0;hn<ve.length;hn++){const e=ve[hn];e&&e.active!==!1&&Vn(e,null,14)}}finally{hn=0,ve.length=0,$c(),Es=!1,fa=null,(ve.length||Wi.length)&&Kc()}}function of(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||Qt;let s=e;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in n){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:f}=n[h]||Qt;f&&(s=e.map(m=>m.trim())),u&&(s=e.map(gu))}let o,l=n[o=Ur(t)]||n[o=Ur(ji(t))];!l&&r&&(l=n[o=Ur(es(t))]),l&&We(l,i,6,s);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,We(c,i,6,s)}}function Jc(i,t,e=!1){const n=t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!Nt(i)){const l=c=>{const h=Jc(c,t,!0);h&&(o=!0,be(a,h))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!o?(le(i)&&n.set(i,null),null):(Ft(r)?r.forEach(l=>a[l]=null):be(a,r),le(i)&&n.set(i,a),a)}function Cr(i,t){return!i||!Sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Bt(i,t[0].toLowerCase()+t.slice(1))||Bt(i,es(t))||Bt(i,t))}let un=null,Qc=null;function _r(i){const t=un;return un=i,Qc=i&&i.type.__scopeId||null,t}function af(i,t=un,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Za(-1);const r=_r(t),a=i(...s);return _r(r),n._d&&Za(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Gr(i){const{type:t,vnode:e,proxy:n,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:h,renderCache:u,data:f,setupState:m,ctx:g,inheritAttrs:p}=i;let d,x;const w=_r(i);try{if(e.shapeFlag&4){const b=s||n;d=ln(h.call(b,b,u,r,m,f,g)),x=l}else{const b=t;d=ln(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),x=t.props?l:lf(l)}}catch(b){vs.length=0,Ar(b,i,1),d=kn(wn)}let E=d;if(x&&p!==!1){const b=Object.keys(x),{shapeFlag:S}=E;b.length&&S&7&&(a&&b.some(ta)&&(x=cf(x,a)),E=qn(E,x))}return e.dirs&&(E=qn(E),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&(E.transition=e.transition),d=E,_r(w),d}const lf=i=>{let t;for(const e in i)(e==="class"||e==="style"||Sr(e))&&((t||(t={}))[e]=i[e]);return t},cf=(i,t)=>{const e={};for(const n in i)(!ta(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function hf(i,t,e){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Ga(n,a,c):!!a;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(a[f]!==n[f]&&!Cr(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ga(n,a,c):!0:!!a;return!1}function Ga(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==i[r]&&!Cr(e,r))return!0}return!1}function uf({vnode:i,parent:t},e){for(;t&&t.subTree===i;)(i=t.vnode).el=e,t=t.parent}const ff=i=>i.__isSuspense;function df(i,t){t&&t.pendingBranch?Ft(i)?t.effects.push(...i):t.effects.push(i):sf(i)}function pf(i,t){if(pe){let e=pe.provides;const n=pe.parent&&pe.parent.provides;n===e&&(e=pe.provides=Object.create(n)),e[i]=t}}function Vr(i,t,e=!1){const n=pe||un;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Nt(t)?t.call(n.proxy):t}}const Va={};function kr(i,t,e){return th(i,t,e)}function th(i,t,{immediate:e,deep:n,flush:s,onTrack:r,onTrigger:a}=Qt){const o=pe;let l,c=!1,h=!1;if(Me(i)?(l=()=>i.value,c=gr(i)):Hi(i)?(l=()=>i,n=!0):Ft(i)?(h=!0,c=i.some(x=>Hi(x)||gr(x)),l=()=>i.map(x=>{if(Me(x))return x.value;if(Hi(x))return Ui(x);if(Nt(x))return Vn(x,o,2)})):Nt(i)?t?l=()=>Vn(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return u&&u(),We(i,o,3,[f])}:l=en,t&&n){const x=l;l=()=>Ui(x())}let u,f=x=>{u=d.onStop=()=>{Vn(x,o,4)}};if(Ps)return f=en,t?e&&We(t,o,3,[l(),h?[]:void 0,f]):l(),en;let m=h?[]:Va;const g=()=>{if(!!d.active)if(t){const x=d.run();(n||c||(h?x.some((w,E)=>ws(w,m[E])):ws(x,m)))&&(u&&u(),We(t,o,3,[x,m===Va?void 0:m,f]),m=x)}else d.run()};g.allowRecurse=!!t;let p;s==="sync"?p=g:s==="post"?p=()=>Pe(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),p=()=>da(g));const d=new ra(l,p);return t?e?g():m=d.run():s==="post"?Pe(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&ea(o.scope.effects,d)}}function mf(i,t,e){const n=this.proxy,s=Se(i)?i.includes(".")?eh(n,i):()=>n[i]:i.bind(n,n);let r;Nt(t)?r=t:(r=t.handler,e=t);const a=pe;Zi(this);const o=th(s,r.bind(n),e);return a?Zi(a):ui(),o}function eh(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}function Ui(i,t){if(!le(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),Me(i))Ui(i.value,t);else if(Ft(i))for(let e=0;e<i.length;e++)Ui(i[e],t);else if(hu(i)||xs(i))i.forEach(e=>{Ui(e,t)});else if(du(i))for(const e in i)Ui(i[e],t);return i}function gf(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pa(()=>{i.isMounted=!0}),oh(()=>{i.isUnmounting=!0}),i}const Ue=[Function,Array],_f={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},setup(i,{slots:t}){const e=sd(),n=gf();let s;return()=>{const r=t.default&&ih(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const p of r)if(p.type!==wn){a=p;break}}const o=Xt(i),{mode:l}=o;if(n.isLeaving)return Hr(a);const c=ka(a);if(!c)return Hr(a);const h=Io(c,o,n,e);Fo(c,h);const u=e.subTree,f=u&&ka(u);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,m=!0)}if(f&&f.type!==wn&&(!si(c,f)||m)){const p=Io(f,o,n,e);if(Fo(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,e.update()},Hr(a);l==="in-out"&&c.type!==wn&&(p.delayLeave=(d,x,w)=>{const E=nh(n,f);E[String(f.key)]=f,d._leaveCb=()=>{x(),d._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=w})}return a}}},xf=_f;function nh(i,t){const{leavingVNodes:e}=i;let n=e.get(t.type);return n||(n=Object.create(null),e.set(t.type,n)),n}function Io(i,t,e,n){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:x,onAppearCancelled:w}=t,E=String(i.key),b=nh(e,i),S=(v,A)=>{v&&We(v,n,9,A)},P=(v,A)=>{const R=A[1];S(v,A),Ft(v)?v.every(Q=>Q.length<=1)&&R():v.length<=1&&R()},z={mode:r,persisted:a,beforeEnter(v){let A=o;if(!e.isMounted)if(s)A=p||o;else return;v._leaveCb&&v._leaveCb(!0);const R=b[E];R&&si(i,R)&&R.el._leaveCb&&R.el._leaveCb(),S(A,[v])},enter(v){let A=l,R=c,Q=h;if(!e.isMounted)if(s)A=d||l,R=x||c,Q=w||h;else return;let ot=!1;const G=v._enterCb=F=>{ot||(ot=!0,F?S(Q,[v]):S(R,[v]),z.delayedLeave&&z.delayedLeave(),v._enterCb=void 0)};A?P(A,[v,G]):G()},leave(v,A){const R=String(i.key);if(v._enterCb&&v._enterCb(!0),e.isUnmounting)return A();S(u,[v]);let Q=!1;const ot=v._leaveCb=G=>{Q||(Q=!0,A(),G?S(g,[v]):S(m,[v]),v._leaveCb=void 0,b[R]===i&&delete b[R])};b[R]=i,f?P(f,[v,ot]):ot()},clone(v){return Io(v,t,e,n)}};return z}function Hr(i){if(Pr(i))return i=qn(i),i.children=null,i}function ka(i){return Pr(i)?i.children?i.children[0]:void 0:i}function Fo(i,t){i.shapeFlag&6&&i.component?Fo(i.component.subTree,t):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function ih(i,t=!1,e){let n=[],s=0;for(let r=0;r<i.length;r++){let a=i[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===an?(a.patchFlag&128&&s++,n=n.concat(ih(a.children,t,o))):(t||a.type!==wn)&&n.push(o!=null?qn(a,{key:o}):a)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function sh(i){return Nt(i)?{setup:i,name:i.name}:i}const hr=i=>!!i.type.__asyncLoader,Pr=i=>i.type.__isKeepAlive;function vf(i,t){rh(i,"a",t)}function Mf(i,t){rh(i,"da",t)}function rh(i,t,e=pe){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Lr(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Pr(s.parent.vnode)&&yf(n,t,e,s),s=s.parent}}function yf(i,t,e,n){const s=Lr(t,i,n,!0);ah(()=>{ea(n[t],s)},e)}function Lr(i,t,e=pe,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;ns(),Zi(e);const o=We(t,e,i,a);return ui(),is(),o});return n?s.unshift(r):s.push(r),r}}const An=i=>(t,e=pe)=>(!Ps||i==="sp")&&Lr(i,(...n)=>t(...n),e),bf=An("bm"),pa=An("m"),Sf=An("bu"),wf=An("u"),oh=An("bum"),ah=An("um"),Tf=An("sp"),Ef=An("rtg"),Af=An("rtc");function Cf(i,t=pe){Lr("ec",i,t)}function Yn(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[n];l&&(ns(),We(l,e,8,[i.el,o,i,t]),is())}}const Pf=Symbol(),zo=i=>i?Mh(i)?va(i)||i.proxy:zo(i.parent):null,xr=be(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>zo(i.parent),$root:i=>zo(i.root),$emit:i=>i.emit,$options:i=>ma(i),$forceUpdate:i=>i.f||(i.f=()=>da(i.update)),$nextTick:i=>i.n||(i.n=tf.bind(i.proxy)),$watch:i=>mf.bind(i)}),Lf={get({_:i},t){const{ctx:e,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:l}=i;let c;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(n!==Qt&&Bt(n,t))return a[t]=1,n[t];if(s!==Qt&&Bt(s,t))return a[t]=2,s[t];if((c=i.propsOptions[0])&&Bt(c,t))return a[t]=3,r[t];if(e!==Qt&&Bt(e,t))return a[t]=4,e[t];No&&(a[t]=0)}}const h=xr[t];let u,f;if(h)return t==="$attrs"&&ze(i,"get",t),h(i);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==Qt&&Bt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Bt(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return s!==Qt&&Bt(s,t)?(s[t]=e,!0):n!==Qt&&Bt(n,t)?(n[t]=e,!0):Bt(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!e[a]||i!==Qt&&Bt(i,a)||t!==Qt&&Bt(t,a)||(o=r[0])&&Bt(o,a)||Bt(n,a)||Bt(xr,a)||Bt(s.config.globalProperties,a)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:Bt(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};let No=!0;function Rf(i){const t=ma(i),e=i.proxy,n=i.ctx;No=!1,t.beforeCreate&&Ha(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:x,beforeUnmount:w,destroyed:E,unmounted:b,render:S,renderTracked:P,renderTriggered:z,errorCaptured:v,serverPrefetch:A,expose:R,inheritAttrs:Q,components:ot,directives:G,filters:F}=t;if(c&&Df(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const nt in a){const k=a[nt];Nt(k)&&(n[nt]=k.bind(e))}if(s){const nt=s.call(e,e);le(nt)&&(i.data=ca(nt))}if(No=!0,r)for(const nt in r){const k=r[nt],O=Nt(k)?k.bind(e,e):Nt(k.get)?k.get.bind(e,e):en,H=!Nt(k)&&Nt(k.set)?k.set.bind(e):en,lt=hd({get:O,set:H});Object.defineProperty(n,nt,{enumerable:!0,configurable:!0,get:()=>lt.value,set:st=>lt.value=st})}if(o)for(const nt in o)lh(o[nt],n,e,nt);if(l){const nt=Nt(l)?l.call(e):l;Reflect.ownKeys(nt).forEach(k=>{pf(k,nt[k])})}h&&Ha(h,i,"c");function et(nt,k){Ft(k)?k.forEach(O=>nt(O.bind(e))):k&&nt(k.bind(e))}if(et(bf,u),et(pa,f),et(Sf,m),et(wf,g),et(vf,p),et(Mf,d),et(Cf,v),et(Af,P),et(Ef,z),et(oh,w),et(ah,b),et(Tf,A),Ft(R))if(R.length){const nt=i.exposed||(i.exposed={});R.forEach(k=>{Object.defineProperty(nt,k,{get:()=>e[k],set:O=>e[k]=O})})}else i.exposed||(i.exposed={});S&&i.render===en&&(i.render=S),Q!=null&&(i.inheritAttrs=Q),ot&&(i.components=ot),G&&(i.directives=G)}function Df(i,t,e=en,n=!1){Ft(i)&&(i=Oo(i));for(const s in i){const r=i[s];let a;le(r)?"default"in r?a=Vr(r.from||s,r.default,!0):a=Vr(r.from||s):a=Vr(r),Me(a)&&n?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[s]=a}}function Ha(i,t,e){We(Ft(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function lh(i,t,e,n){const s=n.includes(".")?eh(e,n):()=>e[n];if(Se(i)){const r=t[i];Nt(r)&&kr(s,r)}else if(Nt(i))kr(s,i.bind(e));else if(le(i))if(Ft(i))i.forEach(r=>lh(r,t,e,n));else{const r=Nt(i.handler)?i.handler.bind(e):t[i.handler];Nt(r)&&kr(s,r,i)}}function ma(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>vr(l,c,a,!0)),vr(l,t,a)),le(t)&&r.set(t,l),l}function vr(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&vr(i,r,e,!0),s&&s.forEach(a=>vr(i,a,e,!0));for(const a in t)if(!(n&&a==="expose")){const o=If[a]||e&&e[a];i[a]=o?o(i[a],t[a]):t[a]}return i}const If={data:Wa,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Qn,directives:Qn,watch:zf,provide:Wa,inject:Ff};function Wa(i,t){return t?i?function(){return be(Nt(i)?i.call(this,this):i,Nt(t)?t.call(this,this):t)}:t:i}function Ff(i,t){return Qn(Oo(i),Oo(t))}function Oo(i){if(Ft(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Te(i,t){return i?[...new Set([].concat(i,t))]:t}function Qn(i,t){return i?be(be(Object.create(null),i),t):t}function zf(i,t){if(!i)return t;if(!t)return i;const e=be(Object.create(null),i);for(const n in t)e[n]=Te(i[n],t[n]);return e}function Nf(i,t,e,n=!1){const s={},r={};mr(r,Rr,1),i.propsDefaults=Object.create(null),ch(i,t,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);e?i.props=n?s:qu(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Of(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=Xt(s),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const h=i.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Cr(i.emitsOptions,f))continue;const m=t[f];if(l)if(Bt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=ji(f);s[g]=Uo(l,o,g,m,i,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{ch(i,t,s,r)&&(c=!0);let h;for(const u in o)(!t||!Bt(t,u)&&((h=es(u))===u||!Bt(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=Uo(l,o,u,void 0,i,!0)):delete s[u]);if(r!==o)for(const u in r)(!t||!Bt(t,u)&&!0)&&(delete r[u],c=!0)}c&&En(i,"set","$attrs")}function ch(i,t,e,n){const[s,r]=i.propsOptions;let a=!1,o;if(t)for(let l in t){if(cr(l))continue;const c=t[l];let h;s&&Bt(s,h=ji(l))?!r||!r.includes(h)?e[h]=c:(o||(o={}))[h]=c:Cr(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(r){const l=Xt(e),c=o||Qt;for(let h=0;h<r.length;h++){const u=r[h];e[u]=Uo(s,l,u,c[u],i,!Bt(c,u))}}return a}function Uo(i,t,e,n,s,r){const a=i[e];if(a!=null){const o=Bt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Nt(l)){const{propsDefaults:c}=s;e in c?n=c[e]:(Zi(s),n=c[e]=l.call(null,t),ui())}else n=l}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===es(e))&&(n=!0))}return n}function hh(i,t,e=!1){const n=t.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let l=!1;if(!Nt(i)){const h=u=>{l=!0;const[f,m]=hh(u,t,!0);be(a,f),m&&o.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!r&&!l)return le(i)&&n.set(i,ki),ki;if(Ft(r))for(let h=0;h<r.length;h++){const u=ji(r[h]);qa(u)&&(a[u]=Qt)}else if(r)for(const h in r){const u=ji(h);if(qa(u)){const f=r[h],m=a[u]=Ft(f)||Nt(f)?{type:f}:f;if(m){const g=Ya(Boolean,m.type),p=Ya(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Bt(m,"default"))&&o.push(u)}}}const c=[a,o];return le(i)&&n.set(i,c),c}function qa(i){return i[0]!=="$"}function Xa(i){const t=i&&i.toString().match(/^\s*function (\w+)/);return t?t[1]:i===null?"null":""}function ja(i,t){return Xa(i)===Xa(t)}function Ya(i,t){return Ft(t)?t.findIndex(e=>ja(e,i)):Nt(t)&&ja(t,i)?0:-1}const uh=i=>i[0]==="_"||i==="$stable",ga=i=>Ft(i)?i.map(ln):[ln(i)],Uf=(i,t,e)=>{if(t._n)return t;const n=af((...s)=>ga(t(...s)),e);return n._c=!1,n},fh=(i,t,e)=>{const n=i._ctx;for(const s in i){if(uh(s))continue;const r=i[s];if(Nt(r))t[s]=Uf(s,r,n);else if(r!=null){const a=ga(r);t[s]=()=>a}}},dh=(i,t)=>{const e=ga(t);i.slots.default=()=>e},Bf=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=Xt(t),mr(t,"_",e)):fh(t,i.slots={})}else i.slots={},t&&dh(i,t);mr(i.slots,Rr,1)},Gf=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,a=Qt;if(n.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:(be(s,t),!e&&o===1&&delete s._):(r=!t.$stable,fh(t,s)),a=t}else t&&(dh(i,t),a={default:1});if(r)for(const o in s)!uh(o)&&!(o in a)&&delete s[o]};function ph(){return{app:null,config:{isNativeTag:au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function kf(i,t){return function(n,s=null){Nt(n)||(n=Object.assign({},n)),s!=null&&!le(s)&&(s=null);const r=ph(),a=new Set;let o=!1;const l=r.app={_uid:Vf++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:ud,get config(){return r.config},set config(c){},use(c,...h){return a.has(c)||(c&&Nt(c.install)?(a.add(c),c.install(l,...h)):Nt(c)&&(a.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(!o){const f=kn(n,s);return f.appContext=r,h&&t?t(f,c):i(f,c,u),o=!0,l._container=c,c.__vue_app__=l,va(f.component)||f.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l}};return l}}function Bo(i,t,e,n,s=!1){if(Ft(i)){i.forEach((f,m)=>Bo(f,t&&(Ft(t)?t[m]:t),e,n,s));return}if(hr(n)&&!s)return;const r=n.shapeFlag&4?va(n.component)||n.component.proxy:n.el,a=s?null:r,{i:o,r:l}=i,c=t&&t.r,h=o.refs===Qt?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==l&&(Se(c)?(h[c]=null,Bt(u,c)&&(u[c]=null)):Me(c)&&(c.value=null)),Nt(l))Vn(l,o,12,[a,h]);else{const f=Se(l),m=Me(l);if(f||m){const g=()=>{if(i.f){const p=f?h[l]:l.value;s?Ft(p)&&ea(p,r):Ft(p)?p.includes(r)||p.push(r):f?(h[l]=[r],Bt(u,l)&&(u[l]=h[l])):(l.value=[r],i.k&&(h[i.k]=l.value))}else f?(h[l]=a,Bt(u,l)&&(u[l]=a)):m&&(l.value=a,i.k&&(h[i.k]=a))};a?(g.id=-1,Pe(g,e)):g()}}}const Pe=df;function Hf(i){return Wf(i)}function Wf(i,t){const e=_u();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:m=en,insertStaticContent:g}=i,p=(T,C,V,K=null,Y=null,at=null,ht=!1,tt=null,ut=!!C.dynamicChildren)=>{if(T===C)return;T&&!si(T,C)&&(K=Gt(T),st(T,Y,at,!0),T=null),C.patchFlag===-2&&(ut=!1,C.dynamicChildren=null);const{type:it,ref:M,shapeFlag:_}=C;switch(it){case _a:d(T,C,V,K);break;case wn:x(T,C,V,K);break;case Wr:T==null&&w(C,V,K,ht);break;case an:ot(T,C,V,K,Y,at,ht,tt,ut);break;default:_&1?S(T,C,V,K,Y,at,ht,tt,ut):_&6?G(T,C,V,K,Y,at,ht,tt,ut):(_&64||_&128)&&it.process(T,C,V,K,Y,at,ht,tt,ut,Et)}M!=null&&Y&&Bo(M,T&&T.ref,at,C||T,!C)},d=(T,C,V,K)=>{if(T==null)n(C.el=o(C.children),V,K);else{const Y=C.el=T.el;C.children!==T.children&&c(Y,C.children)}},x=(T,C,V,K)=>{T==null?n(C.el=l(C.children||""),V,K):C.el=T.el},w=(T,C,V,K)=>{[T.el,T.anchor]=g(T.children,C,V,K,T.el,T.anchor)},E=({el:T,anchor:C},V,K)=>{let Y;for(;T&&T!==C;)Y=f(T),n(T,V,K),T=Y;n(C,V,K)},b=({el:T,anchor:C})=>{let V;for(;T&&T!==C;)V=f(T),s(T),T=V;s(C)},S=(T,C,V,K,Y,at,ht,tt,ut)=>{ht=ht||C.type==="svg",T==null?P(C,V,K,Y,at,ht,tt,ut):A(T,C,Y,at,ht,tt,ut)},P=(T,C,V,K,Y,at,ht,tt)=>{let ut,it;const{type:M,props:_,shapeFlag:I,transition:W,dirs:Z}=T;if(ut=T.el=a(T.type,at,_&&_.is,_),I&8?h(ut,T.children):I&16&&v(T.children,ut,null,K,Y,at&&M!=="foreignObject",ht,tt),Z&&Yn(T,null,K,"created"),_){for(const pt in _)pt!=="value"&&!cr(pt)&&r(ut,pt,null,_[pt],at,T.children,K,Y,j);"value"in _&&r(ut,"value",null,_.value),(it=_.onVnodeBeforeMount)&&rn(it,K,T)}z(ut,T,T.scopeId,ht,K),Z&&Yn(T,null,K,"beforeMount");const rt=(!Y||Y&&!Y.pendingBranch)&&W&&!W.persisted;rt&&W.beforeEnter(ut),n(ut,C,V),((it=_&&_.onVnodeMounted)||rt||Z)&&Pe(()=>{it&&rn(it,K,T),rt&&W.enter(ut),Z&&Yn(T,null,K,"mounted")},Y)},z=(T,C,V,K,Y)=>{if(V&&m(T,V),K)for(let at=0;at<K.length;at++)m(T,K[at]);if(Y){let at=Y.subTree;if(C===at){const ht=Y.vnode;z(T,ht,ht.scopeId,ht.slotScopeIds,Y.parent)}}},v=(T,C,V,K,Y,at,ht,tt,ut=0)=>{for(let it=ut;it<T.length;it++){const M=T[it]=tt?Un(T[it]):ln(T[it]);p(null,M,C,V,K,Y,at,ht,tt)}},A=(T,C,V,K,Y,at,ht)=>{const tt=C.el=T.el;let{patchFlag:ut,dynamicChildren:it,dirs:M}=C;ut|=T.patchFlag&16;const _=T.props||Qt,I=C.props||Qt;let W;V&&Zn(V,!1),(W=I.onVnodeBeforeUpdate)&&rn(W,V,C,T),M&&Yn(C,T,V,"beforeUpdate"),V&&Zn(V,!0);const Z=Y&&C.type!=="foreignObject";if(it?R(T.dynamicChildren,it,tt,V,K,Z,at):ht||k(T,C,tt,null,V,K,Z,at,!1),ut>0){if(ut&16)Q(tt,C,_,I,V,K,Y);else if(ut&2&&_.class!==I.class&&r(tt,"class",null,I.class,Y),ut&4&&r(tt,"style",_.style,I.style,Y),ut&8){const rt=C.dynamicProps;for(let pt=0;pt<rt.length;pt++){const B=rt[pt],yt=_[B],mt=I[B];(mt!==yt||B==="value")&&r(tt,B,yt,mt,Y,T.children,V,K,j)}}ut&1&&T.children!==C.children&&h(tt,C.children)}else!ht&&it==null&&Q(tt,C,_,I,V,K,Y);((W=I.onVnodeUpdated)||M)&&Pe(()=>{W&&rn(W,V,C,T),M&&Yn(C,T,V,"updated")},K)},R=(T,C,V,K,Y,at,ht)=>{for(let tt=0;tt<C.length;tt++){const ut=T[tt],it=C[tt],M=ut.el&&(ut.type===an||!si(ut,it)||ut.shapeFlag&70)?u(ut.el):V;p(ut,it,M,null,K,Y,at,ht,!0)}},Q=(T,C,V,K,Y,at,ht)=>{if(V!==K){if(V!==Qt)for(const tt in V)!cr(tt)&&!(tt in K)&&r(T,tt,V[tt],null,ht,C.children,Y,at,j);for(const tt in K){if(cr(tt))continue;const ut=K[tt],it=V[tt];ut!==it&&tt!=="value"&&r(T,tt,it,ut,ht,C.children,Y,at,j)}"value"in K&&r(T,"value",V.value,K.value)}},ot=(T,C,V,K,Y,at,ht,tt,ut)=>{const it=C.el=T?T.el:o(""),M=C.anchor=T?T.anchor:o("");let{patchFlag:_,dynamicChildren:I,slotScopeIds:W}=C;W&&(tt=tt?tt.concat(W):W),T==null?(n(it,V,K),n(M,V,K),v(C.children,V,M,Y,at,ht,tt,ut)):_>0&&_&64&&I&&T.dynamicChildren?(R(T.dynamicChildren,I,V,Y,at,ht,tt),(C.key!=null||Y&&C===Y.subTree)&&mh(T,C,!0)):k(T,C,V,M,Y,at,ht,tt,ut)},G=(T,C,V,K,Y,at,ht,tt,ut)=>{C.slotScopeIds=tt,T==null?C.shapeFlag&512?Y.ctx.activate(C,V,K,ht,ut):F(C,V,K,Y,at,ht,ut):J(T,C,ut)},F=(T,C,V,K,Y,at,ht)=>{const tt=T.component=id(T,K,Y);if(Pr(T)&&(tt.ctx.renderer=Et),rd(tt),tt.asyncDep){if(Y&&Y.registerDep(tt,et),!T.el){const ut=tt.subTree=kn(wn);x(null,ut,C,V)}return}et(tt,T,C,V,Y,at,ht)},J=(T,C,V)=>{const K=C.component=T.component;if(hf(T,C,V))if(K.asyncDep&&!K.asyncResolved){nt(K,C,V);return}else K.next=C,nf(K.update),K.update();else C.el=T.el,K.vnode=C},et=(T,C,V,K,Y,at,ht)=>{const tt=()=>{if(T.isMounted){let{next:M,bu:_,u:I,parent:W,vnode:Z}=T,rt=M,pt;Zn(T,!1),M?(M.el=Z.el,nt(T,M,ht)):M=Z,_&&Br(_),(pt=M.props&&M.props.onVnodeBeforeUpdate)&&rn(pt,W,M,Z),Zn(T,!0);const B=Gr(T),yt=T.subTree;T.subTree=B,p(yt,B,u(yt.el),Gt(yt),T,Y,at),M.el=B.el,rt===null&&uf(T,B.el),I&&Pe(I,Y),(pt=M.props&&M.props.onVnodeUpdated)&&Pe(()=>rn(pt,W,M,Z),Y)}else{let M;const{el:_,props:I}=C,{bm:W,m:Z,parent:rt}=T,pt=hr(C);if(Zn(T,!1),W&&Br(W),!pt&&(M=I&&I.onVnodeBeforeMount)&&rn(M,rt,C),Zn(T,!0),_&&jt){const B=()=>{T.subTree=Gr(T),jt(_,T.subTree,T,Y,null)};pt?C.type.__asyncLoader().then(()=>!T.isUnmounted&&B()):B()}else{const B=T.subTree=Gr(T);p(null,B,V,K,T,Y,at),C.el=B.el}if(Z&&Pe(Z,Y),!pt&&(M=I&&I.onVnodeMounted)){const B=C;Pe(()=>rn(M,rt,B),Y)}(C.shapeFlag&256||rt&&hr(rt.vnode)&&rt.vnode.shapeFlag&256)&&T.a&&Pe(T.a,Y),T.isMounted=!0,C=V=K=null}},ut=T.effect=new ra(tt,()=>da(it),T.scope),it=T.update=()=>ut.run();it.id=T.uid,Zn(T,!0),it()},nt=(T,C,V)=>{C.component=T;const K=T.vnode.props;T.vnode=C,T.next=null,Of(T,C.props,K,V),Gf(T,C.children,V),ns(),Ba(),is()},k=(T,C,V,K,Y,at,ht,tt,ut=!1)=>{const it=T&&T.children,M=T?T.shapeFlag:0,_=C.children,{patchFlag:I,shapeFlag:W}=C;if(I>0){if(I&128){H(it,_,V,K,Y,at,ht,tt,ut);return}else if(I&256){O(it,_,V,K,Y,at,ht,tt,ut);return}}W&8?(M&16&&j(it,Y,at),_!==it&&h(V,_)):M&16?W&16?H(it,_,V,K,Y,at,ht,tt,ut):j(it,Y,at,!0):(M&8&&h(V,""),W&16&&v(_,V,K,Y,at,ht,tt,ut))},O=(T,C,V,K,Y,at,ht,tt,ut)=>{T=T||ki,C=C||ki;const it=T.length,M=C.length,_=Math.min(it,M);let I;for(I=0;I<_;I++){const W=C[I]=ut?Un(C[I]):ln(C[I]);p(T[I],W,V,null,Y,at,ht,tt,ut)}it>M?j(T,Y,at,!0,!1,_):v(C,V,K,Y,at,ht,tt,ut,_)},H=(T,C,V,K,Y,at,ht,tt,ut)=>{let it=0;const M=C.length;let _=T.length-1,I=M-1;for(;it<=_&&it<=I;){const W=T[it],Z=C[it]=ut?Un(C[it]):ln(C[it]);if(si(W,Z))p(W,Z,V,null,Y,at,ht,tt,ut);else break;it++}for(;it<=_&&it<=I;){const W=T[_],Z=C[I]=ut?Un(C[I]):ln(C[I]);if(si(W,Z))p(W,Z,V,null,Y,at,ht,tt,ut);else break;_--,I--}if(it>_){if(it<=I){const W=I+1,Z=W<M?C[W].el:K;for(;it<=I;)p(null,C[it]=ut?Un(C[it]):ln(C[it]),V,Z,Y,at,ht,tt,ut),it++}}else if(it>I)for(;it<=_;)st(T[it],Y,at,!0),it++;else{const W=it,Z=it,rt=new Map;for(it=Z;it<=I;it++){const Pt=C[it]=ut?Un(C[it]):ln(C[it]);Pt.key!=null&&rt.set(Pt.key,it)}let pt,B=0;const yt=I-Z+1;let mt=!1,St=0;const _t=new Array(yt);for(it=0;it<yt;it++)_t[it]=0;for(it=W;it<=_;it++){const Pt=T[it];if(B>=yt){st(Pt,Y,at,!0);continue}let Wt;if(Pt.key!=null)Wt=rt.get(Pt.key);else for(pt=Z;pt<=I;pt++)if(_t[pt-Z]===0&&si(Pt,C[pt])){Wt=pt;break}Wt===void 0?st(Pt,Y,at,!0):(_t[Wt-Z]=it+1,Wt>=St?St=Wt:mt=!0,p(Pt,C[Wt],V,null,Y,at,ht,tt,ut),B++)}const Rt=mt?qf(_t):ki;for(pt=Rt.length-1,it=yt-1;it>=0;it--){const Pt=Z+it,Wt=C[Pt],D=Pt+1<M?C[Pt+1].el:K;_t[it]===0?p(null,Wt,V,D,Y,at,ht,tt,ut):mt&&(pt<0||it!==Rt[pt]?lt(Wt,V,D,2):pt--)}}},lt=(T,C,V,K,Y=null)=>{const{el:at,type:ht,transition:tt,children:ut,shapeFlag:it}=T;if(it&6){lt(T.component.subTree,C,V,K);return}if(it&128){T.suspense.move(C,V,K);return}if(it&64){ht.move(T,C,V,Et);return}if(ht===an){n(at,C,V);for(let _=0;_<ut.length;_++)lt(ut[_],C,V,K);n(T.anchor,C,V);return}if(ht===Wr){E(T,C,V);return}if(K!==2&&it&1&&tt)if(K===0)tt.beforeEnter(at),n(at,C,V),Pe(()=>tt.enter(at),Y);else{const{leave:_,delayLeave:I,afterLeave:W}=tt,Z=()=>n(at,C,V),rt=()=>{_(at,()=>{Z(),W&&W()})};I?I(at,Z,rt):rt()}else n(at,C,V)},st=(T,C,V,K=!1,Y=!1)=>{const{type:at,props:ht,ref:tt,children:ut,dynamicChildren:it,shapeFlag:M,patchFlag:_,dirs:I}=T;if(tt!=null&&Bo(tt,null,V,T,!0),M&256){C.ctx.deactivate(T);return}const W=M&1&&I,Z=!hr(T);let rt;if(Z&&(rt=ht&&ht.onVnodeBeforeUnmount)&&rn(rt,C,T),M&6)Ct(T.component,V,K);else{if(M&128){T.suspense.unmount(V,K);return}W&&Yn(T,null,C,"beforeUnmount"),M&64?T.type.remove(T,C,V,Y,Et,K):it&&(at!==an||_>0&&_&64)?j(it,C,V,!1,!0):(at===an&&_&384||!Y&&M&16)&&j(ut,C,V),K&&ct(T)}(Z&&(rt=ht&&ht.onVnodeUnmounted)||W)&&Pe(()=>{rt&&rn(rt,C,T),W&&Yn(T,null,C,"unmounted")},V)},ct=T=>{const{type:C,el:V,anchor:K,transition:Y}=T;if(C===an){bt(V,K);return}if(C===Wr){b(T);return}const at=()=>{s(V),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(T.shapeFlag&1&&Y&&!Y.persisted){const{leave:ht,delayLeave:tt}=Y,ut=()=>ht(V,at);tt?tt(T.el,at,ut):ut()}else at()},bt=(T,C)=>{let V;for(;T!==C;)V=f(T),s(T),T=V;s(C)},Ct=(T,C,V)=>{const{bum:K,scope:Y,update:at,subTree:ht,um:tt}=T;K&&Br(K),Y.stop(),at&&(at.active=!1,st(ht,T,C,V)),tt&&Pe(tt,C),Pe(()=>{T.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},j=(T,C,V,K=!1,Y=!1,at=0)=>{for(let ht=at;ht<T.length;ht++)st(T[ht],C,V,K,Y)},Gt=T=>T.shapeFlag&6?Gt(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),At=(T,C,V)=>{T==null?C._vnode&&st(C._vnode,null,null,!0):p(C._vnode||null,T,C,null,null,null,V),Ba(),$c(),C._vnode=T},Et={p,um:st,m:lt,r:ct,mt:F,mc:v,pc:k,pbc:R,n:Gt,o:i};let Mt,jt;return t&&([Mt,jt]=t(Et)),{render:At,hydrate:Mt,createApp:kf(At,Mt)}}function Zn({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function mh(i,t,e=!1){const n=i.children,s=t.children;if(Ft(n)&&Ft(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Un(s[r]),o.el=a.el),e||mh(a,o))}}function qf(i){const t=i.slice(),e=[0];let n,s,r,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,i[e[o]]<c?r=o+1:a=o;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}const Xf=i=>i.__isTeleport,an=Symbol(void 0),_a=Symbol(void 0),wn=Symbol(void 0),Wr=Symbol(void 0),vs=[];let tn=null;function gh(i=!1){vs.push(tn=i?null:[])}function jf(){vs.pop(),tn=vs[vs.length-1]||null}let Cs=1;function Za(i){Cs+=i}function _h(i){return i.dynamicChildren=Cs>0?tn||ki:null,jf(),Cs>0&&tn&&tn.push(i),i}function Yf(i,t,e,n,s,r){return _h(vh(i,t,e,n,s,r,!0))}function Zf(i,t,e,n,s){return _h(kn(i,t,e,n,s,!0))}function $f(i){return i?i.__v_isVNode===!0:!1}function si(i,t){return i.type===t.type&&i.key===t.key}const Rr="__vInternal",xh=({key:i})=>i!=null?i:null,ur=({ref:i,ref_key:t,ref_for:e})=>i!=null?Se(i)||Me(i)||Nt(i)?{i:un,r:i,k:t,f:!!e}:i:null;function vh(i,t=null,e=null,n=0,s=null,r=i===an?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&xh(t),ref:t&&ur(t),scopeId:Qc,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(xa(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),Cs>0&&!a&&tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&tn.push(l),l}const kn=Kf;function Kf(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Pf)&&(i=wn),$f(i)){const o=qn(i,t,!0);return e&&xa(o,e),Cs>0&&!r&&tn&&(o.shapeFlag&6?tn[tn.indexOf(i)]=o:tn.push(o)),o.patchFlag|=-2,o}if(cd(i)&&(i=i.__vccOpts),t){t=Jf(t);let{class:o,style:l}=t;o&&!Se(o)&&(t.class=Qo(o)),le(l)&&(kc(l)&&!Ft(l)&&(l=be({},l)),t.style=Jo(l))}const a=Se(i)?1:ff(i)?128:Xf(i)?64:le(i)?4:Nt(i)?2:0;return vh(i,t,e,n,s,a,r,!0)}function Jf(i){return i?kc(i)||Rr in i?be({},i):i:null}function qn(i,t,e=!1){const{props:n,ref:s,patchFlag:r,children:a}=i,o=t?td(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&xh(o),ref:t&&t.ref?e&&s?Ft(s)?s.concat(ur(t)):[s,ur(t)]:ur(t):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==an?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&qn(i.ssContent),ssFallback:i.ssFallback&&qn(i.ssFallback),el:i.el,anchor:i.anchor}}function Qf(i=" ",t=0){return kn(_a,null,i,t)}function ln(i){return i==null||typeof i=="boolean"?kn(wn):Ft(i)?kn(an,null,i.slice()):typeof i=="object"?Un(i):kn(_a,null,String(i))}function Un(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:qn(i)}function xa(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),xa(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!(Rr in t)?t._ctx=un:s===3&&un&&(un.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Nt(t)?(t={default:t,_ctx:un},e=32):(t=String(t),n&64?(e=16,t=[Qf(t)]):e=8);i.children=t,i.shapeFlag|=e}function td(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Qo([t.class,n.class]));else if(s==="style")t.style=Jo([t.style,n.style]);else if(Sr(s)){const r=t[s],a=n[s];a&&r!==a&&!(Ft(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=n[s])}return t}function rn(i,t,e,n=null){We(i,t,7,[e,n])}const ed=ph();let nd=0;function id(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||ed,r={uid:nd++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(n,s),emitsOptions:Jc(n,s),emit:null,emitted:null,propsDefaults:Qt,inheritAttrs:n.inheritAttrs,ctx:Qt,data:Qt,props:Qt,attrs:Qt,slots:Qt,refs:Qt,setupState:Qt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=of.bind(null,r),i.ce&&i.ce(r),r}let pe=null;const sd=()=>pe||un,Zi=i=>{pe=i,i.scope.on()},ui=()=>{pe&&pe.scope.off(),pe=null};function Mh(i){return i.vnode.shapeFlag&4}let Ps=!1;function rd(i,t=!1){Ps=t;const{props:e,children:n}=i.vnode,s=Mh(i);Nf(i,e,s,t),Bf(i,n);const r=s?od(i,t):void 0;return Ps=!1,r}function od(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=Hc(new Proxy(i.ctx,Lf));const{setup:n}=e;if(n){const s=i.setupContext=n.length>1?ld(i):null;Zi(i),ns();const r=Vn(n,i,0,[i.props,s]);if(is(),ui(),Pc(r)){if(r.then(ui,ui),t)return r.then(a=>{$a(i,a,t)}).catch(a=>{Ar(a,i,0)});i.asyncDep=r}else $a(i,r,t)}else yh(i,t)}function $a(i,t,e){Nt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:le(t)&&(i.setupState=Xc(t)),yh(i,e)}let Ka;function yh(i,t,e){const n=i.type;if(!i.render){if(!t&&Ka&&!n.render){const s=n.template||ma(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=be(be({isCustomElement:r,delimiters:o},a),l);n.render=Ka(s,c)}}i.render=n.render||en}Zi(i),ns(),Rf(i),is(),ui()}function ad(i){return new Proxy(i.attrs,{get(t,e){return ze(i,"get","$attrs"),t[e]}})}function ld(i){const t=n=>{i.exposed=n||{}};let e;return{get attrs(){return e||(e=ad(i))},slots:i.slots,emit:i.emit,expose:t}}function va(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Xc(Hc(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in xr)return xr[e](i)}}))}function cd(i){return Nt(i)&&"__vccOpts"in i}const hd=(i,t)=>Ju(i,t,Ps),ud="3.2.40",fd="http://www.w3.org/2000/svg",ri=typeof document<"u"?document:null,Ja=ri&&ri.createElement("template"),dd={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t?ri.createElementNS(fd,i):ri.createElement(i,e?{is:e}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>ri.createTextNode(i),createComment:i=>ri.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ri.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ja.innerHTML=n?`<svg>${i}</svg>`:i;const o=Ja.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function pd(i,t,e){const n=i._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}function md(i,t,e){const n=i.style,s=Se(e);if(e&&!s){for(const r in e)Go(n,r,e[r]);if(t&&!Se(t))for(const r in t)e[r]==null&&Go(n,r,"")}else{const r=n.display;s?t!==e&&(n.cssText=e):t&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Qa=/\s*!important$/;function Go(i,t,e){if(Ft(e))e.forEach(n=>Go(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=gd(i,t);Qa.test(e)?i.setProperty(es(n),e.replace(Qa,""),"important"):i[n]=e}}const tl=["Webkit","Moz","ms"],qr={};function gd(i,t){const e=qr[t];if(e)return e;let n=ji(t);if(n!=="filter"&&n in i)return qr[t]=n;n=Lc(n);for(let s=0;s<tl.length;s++){const r=tl[s]+n;if(r in i)return qr[t]=r}return t}const el="http://www.w3.org/1999/xlink";function _d(i,t,e,n,s){if(n&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(el,t.slice(6,t.length)):i.setAttributeNS(el,t,e);else{const r=iu(t);e==null||r&&!Cc(e)?i.removeAttribute(t):i.setAttribute(t,r?"":e)}}function xd(i,t,e,n,s,r,a){if(t==="innerHTML"||t==="textContent"){n&&a(n,s,r),i[t]=e==null?"":e;return}if(t==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=e;const l=e==null?"":e;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),e==null&&i.removeAttribute(t);return}let o=!1;if(e===""||e==null){const l=typeof i[t];l==="boolean"?e=Cc(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(t)}const[bh,vd]=(()=>{let i=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(e&&Number(e[1])<=53)}return[i,t]})();let Vo=0;const Md=Promise.resolve(),yd=()=>{Vo=0},bd=()=>Vo||(Md.then(yd),Vo=bh());function Sd(i,t,e,n){i.addEventListener(t,e,n)}function wd(i,t,e,n){i.removeEventListener(t,e,n)}function Td(i,t,e,n,s=null){const r=i._vei||(i._vei={}),a=r[t];if(n&&a)a.value=n;else{const[o,l]=Ed(t);if(n){const c=r[t]=Ad(n,s);Sd(i,o,c,l)}else a&&(wd(i,o,a,l),r[t]=void 0)}}const nl=/(?:Once|Passive|Capture)$/;function Ed(i){let t;if(nl.test(i)){t={};let n;for(;n=i.match(nl);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):es(i.slice(2)),t]}function Ad(i,t){const e=n=>{const s=n.timeStamp||bh();(vd||s>=e.attached-1)&&We(Cd(n,e.value),t,5,[n])};return e.value=i,e.attached=bd(),e}function Cd(i,t){if(Ft(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const il=/^on[a-z]/,Pd=(i,t,e,n,s=!1,r,a,o,l)=>{t==="class"?pd(i,n,s):t==="style"?md(i,e,n):Sr(t)?ta(t)||Td(i,t,e,n,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ld(i,t,n,s))?xd(i,t,n,r,a,o,l):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),_d(i,t,n,s))};function Ld(i,t,e,n){return n?!!(t==="innerHTML"||t==="textContent"||t in i&&il.test(t)&&Nt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA"||il.test(t)&&Se(e)?!1:t in i}const Rd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xf.props;const Dd=be({patchProp:Pd},dd);let sl;function Id(){return sl||(sl=Hf(Dd))}const Fd=(...i)=>{const t=Id().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=zd(n);if(!s)return;const r=t._component;!Nt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function zd(i){return Se(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="144",Nd=0,rl=1,Od=2,Sh=1,Ud=2,ms=3,$i=0,qe=1,Bn=2,Hn=0,qi=1,ol=2,al=3,ll=4,Bd=5,Oi=100,Gd=101,Vd=102,cl=103,hl=104,kd=200,Hd=201,Wd=202,qd=203,wh=204,Th=205,Xd=206,jd=207,Yd=208,Zd=209,$d=210,Kd=0,Jd=1,Qd=2,ko=3,tp=4,ep=5,np=6,ip=7,Eh=0,sp=1,rp=2,Tn=0,op=1,ap=2,lp=3,cp=4,hp=5,Ah=300,Ki=301,Ji=302,Ho=303,Wo=304,Dr=306,qo=1e3,Qe=1001,Xo=1002,Le=1003,ul=1004,fl=1005,Ve=1006,up=1007,Ir=1008,mi=1009,fp=1010,dp=1011,Ch=1012,pp=1013,ai=1014,li=1015,Ls=1016,mp=1017,gp=1018,Xi=1020,_p=1021,xp=1022,fn=1023,vp=1024,Mp=1025,fi=1026,Qi=1027,yp=1028,bp=1029,Sp=1030,wp=1031,Tp=1033,Xr=33776,jr=33777,Yr=33778,Zr=33779,dl=35840,pl=35841,ml=35842,gl=35843,Ep=36196,_l=37492,xl=37496,vl=37808,Ml=37809,yl=37810,bl=37811,Sl=37812,wl=37813,Tl=37814,El=37815,Al=37816,Cl=37817,Pl=37818,Ll=37819,Rl=37820,Dl=37821,Il=36492,gi=3e3,ie=3001,Ap=3200,Cp=3201,Ph=0,Pp=1,bn="srgb",ci="srgb-linear",$r=7680,Lp=519,Fl=35044,zl="300 es",jo=1035;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Ms=Math.PI/180,Mr=180/Math.PI;function ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function ya(i,t){return(i%t+t)%t}function Rp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dp(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function Ip(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function Fp(i,t=1){return t-Math.abs(ya(i,t*2)-t)}function zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Up(i,t){return i+Math.random()*(t-i)}function Bp(i){return i*(.5-Math.random())}function Gp(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vp(i){return i*Ms}function kp(i){return i*Mr}function Yo(i){return(i&i-1)===0&&i!==0}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ne=Object.freeze({__proto__:null,DEG2RAD:Ms,RAD2DEG:Mr,generateUUID:ss,clamp:xe,euclideanModulo:ya,mapLinear:Rp,inverseLerp:Dp,lerp:ys,damp:Ip,pingpong:Fp,smoothstep:zp,smootherstep:Np,randInt:Op,randFloat:Up,randFloatSpread:Bp,seededRandom:Gp,degToRad:Vp,radToDeg:kp,isPowerOfTwo:Yo,ceilPowerOfTwo:Hp,floorPowerOfTwo:yr,setQuaternionFromProperEuler:Wp,normalize:Ce,denormalize:gs});class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],p=s[0],d=s[3],x=s[6],w=s[1],E=s[4],b=s[7],S=s[2],P=s[5],z=s[8];return r[0]=a*p+o*w+l*S,r[3]=a*d+o*E+l*P,r[6]=a*x+o*b+l*z,r[1]=c*p+h*w+u*S,r[4]=c*d+h*E+u*P,r[7]=c*x+h*b+u*z,r[2]=f*p+m*w+g*S,r[5]=f*d+m*E+g*P,r[8]=f*x+m*b+g*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(s*c-h*n)*p,t[2]=(o*n-s*a)*p,t[3]=f*p,t[4]=(h*e-s*l)*p,t[5]=(s*r-o*e)*p,t[6]=m*p,t[7]=(n*l-c*e)*p,t[8]=(a*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),s=this.elements,r=s[0],a=s[3],o=s[6],l=s[1],c=s[4],h=s[7];return s[0]=e*r+n*l,s[3]=e*a+n*c,s[6]=e*o+n*h,s[1]=-n*r+e*l,s[4]=-n*a+e*c,s[7]=-n*o+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kr={[bn]:{[ci]:di},[ci]:{[bn]:fr}},Xe={legacyMode:!0,get workingColorSpace(){return ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(Kr[t]&&Kr[t][e]!==void 0){const n=Kr[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ce={r:0,g:0,b:0},je={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Gs(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ci){return this.r=t,this.g=e,this.b=n,Xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ci){if(t=ya(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jr(a,r,t+1/3),this.g=Jr(a,r,t),this.b=Jr(a,r,t-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(t,e=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Xe.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Xe.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Xe.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Xe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=bn){const n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Xe.fromWorkingColorSpace(Gs(this,ce),t),xe(ce.r*255,0,255)<<16^xe(ce.g*255,0,255)<<8^xe(ce.b*255,0,255)<<0}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ci){Xe.fromWorkingColorSpace(Gs(this,ce),e);const n=ce.r,s=ce.g,r=ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ci){return Xe.fromWorkingColorSpace(Gs(this,ce),e),t.r=ce.r,t.g=ce.g,t.b=ce.b,t}getStyle(t=bn){return Xe.fromWorkingColorSpace(Gs(this,ce),t),t!==bn?`color(${t} ${ce.r} ${ce.g} ${ce.b})`:`rgb(${ce.r*255|0},${ce.g*255|0},${ce.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(je),je.h+=t,je.s+=e,je.l+=n,this.setHSL(je.h,je.s,je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(je),t.getHSL(Bs);const n=ys(je.h,Bs.h,e),s=ys(je.s,Bs.s,e),r=ys(je.l,Bs.l,e);return this.setHSL(n,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Kt.NAMES=Rh;let Si;class Dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=br("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ih{constructor(t=null){this.isSource=!0,this.uuid=ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class nn extends vi{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Qe,s=Qe,r=Ve,a=Ir,o=fn,l=mi,c=1,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ss(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ah;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(m+1)/2,S=(x+1)/2,P=(h+f)/4,z=(u+p)/4,v=(g+d)/4;return E>b&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=z/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=P/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=z/r,s=v/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-g)*(d-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(u-p)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends vi{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ve,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ih(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xp extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==f||c!==m||h!==g){let d=1-o;const x=l*f+c*m+h*g+u*p,w=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const S=Math.sqrt(E),P=Math.atan2(S,x*w);d=Math.sin(d*P)/S,o=Math.sin(o*P)/S}const b=o*w;if(l=l*d+f*b,c=c*d+m*b,h=h*d+g*b,u=u*d+p*b,d===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*s-o*n,h=l*n+o*e-r*s,u=l*s+r*n-a*e,f=-r*e-a*n-o*s;return this.x=c*l+f*-r+h*-o-u*-a,this.y=h*l+f*-a+u*-r-c*-o,this.z=u*l+f*-o+c*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new L,Ol=new rs;class os{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(e,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(e,n,s),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)$n.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint($n)}else n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox),eo.applyMatrix4(t.matrixWorld),this.union(eo);const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Vs.subVectors(this.max,us),wi.subVectors(t.a,us),Ti.subVectors(t.b,us),Ei.subVectors(t.c,us),Rn.subVectors(Ti,wi),Dn.subVectors(Ei,Ti),Kn.subVectors(wi,Ei);let e=[0,-Rn.z,Rn.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Rn.z,0,-Rn.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Rn.y,Rn.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!no(e,wi,Ti,Ei,Vs)||(e=[1,0,0,0,1,0,0,0,1],!no(e,wi,Ti,Ei,Vs))?!1:(ks.crossVectors(Rn,Dn),e=[ks.x,ks.y,ks.z],no(e,wi,Ti,Ei,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return $n.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize($n).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new L,new L,new L,new L,new L,new L,new L,new L],$n=new L,eo=new os,wi=new L,Ti=new L,Ei=new L,Rn=new L,Dn=new L,Kn=new L,us=new L,Vs=new L,ks=new L,Jn=new L;function no(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jp=new os,Ul=new L,Hs=new L,io=new L;class Rs{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){io.subVectors(t,this.center);const e=io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.add(io.multiplyScalar(s/n)),this.radius+=s}return this}union(t){return this.center.equals(t.center)===!0?Hs.set(0,0,1).multiplyScalar(t.radius):Hs.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ul.copy(t.center).add(Hs)),this.expandByPoint(Ul.copy(t.center).sub(Hs)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new L,so=new L,Ws=new L,In=new L,ro=new L,qs=new L,oo=new L;class ba{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.direction).multiplyScalar(e).add(this.origin),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),In.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=In.dot(this.direction),l=-In.dot(Ws),c=In.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),s&&s.copy(Ws).multiplyScalar(f).add(so),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||n!==n)&&(n=r),(a<s||s!==s)&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),qs.subVectors(n,t),oo.crossVectors(ro,qs);let a=this.direction.dot(oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,t);const l=o*this.direction.dot(qs.crossVectors(In,qs));if(l<0)return null;const c=o*this.direction.dot(ro.cross(In));if(c<0||l+c>a)return null;const h=-o*In.dot(oo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,p,d){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,p=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-p*c,e[9]=-o*l,e[2]=p-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f+p*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=p+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f-p*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=p-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,p=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+p,e[1]=l*u,e[5]=p*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,p=o*c;e[0]=l*h,e[4]=p-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-p*u}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,p=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+p,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=p*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,Zp)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Fn.crossVectors(n,De),Fn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Fn.crossVectors(n,De)),Fn.normalize(),Xs.crossVectors(De,Fn),s[0]=Fn.x,s[4]=Xs.x,s[8]=De.x,s[1]=Fn.y,s[5]=Xs.y,s[9]=De.y,s[2]=Fn.z,s[6]=Xs.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],x=n[14],w=n[3],E=n[7],b=n[11],S=n[15],P=s[0],z=s[4],v=s[8],A=s[12],R=s[1],Q=s[5],ot=s[9],G=s[13],F=s[2],J=s[6],et=s[10],nt=s[14],k=s[3],O=s[7],H=s[11],lt=s[15];return r[0]=a*P+o*R+l*F+c*k,r[4]=a*z+o*Q+l*J+c*O,r[8]=a*v+o*ot+l*et+c*H,r[12]=a*A+o*G+l*nt+c*lt,r[1]=h*P+u*R+f*F+m*k,r[5]=h*z+u*Q+f*J+m*O,r[9]=h*v+u*ot+f*et+m*H,r[13]=h*A+u*G+f*nt+m*lt,r[2]=g*P+p*R+d*F+x*k,r[6]=g*z+p*Q+d*J+x*O,r[10]=g*v+p*ot+d*et+x*H,r[14]=g*A+p*G+d*nt+x*lt,r[3]=w*P+E*R+b*F+S*k,r[7]=w*z+E*Q+b*J+S*O,r[11]=w*v+E*ot+b*et+S*H,r[15]=w*A+E*G+b*nt+S*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],x=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+p*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+d*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+x*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],x=t[15],w=u*d*c-p*f*c+p*l*m-o*d*m-u*l*x+o*f*x,E=g*f*c-h*d*c-g*l*m+a*d*m+h*l*x-a*f*x,b=h*p*c-g*u*c+g*o*m-a*p*m-h*o*x+a*u*x,S=g*u*l-h*p*l-g*o*f+a*p*f+h*o*d-a*u*d,P=e*w+n*E+s*b+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=w*z,t[1]=(p*f*r-u*d*r-p*s*m+n*d*m+u*s*x-n*f*x)*z,t[2]=(o*d*r-p*l*r+p*s*c-n*d*c-o*s*x+n*l*x)*z,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*z,t[4]=E*z,t[5]=(h*d*r-g*f*r+g*s*m-e*d*m-h*s*x+e*f*x)*z,t[6]=(g*l*r-a*d*r-g*s*c+e*d*c+a*s*x-e*l*x)*z,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*z,t[8]=b*z,t[9]=(g*u*r-h*p*r-g*n*m+e*p*m+h*n*x-e*u*x)*z,t[10]=(a*p*r-g*o*r+g*n*c-e*p*c-a*n*x+e*o*x)*z,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*z,t[12]=S*z,t[13]=(h*p*s-g*u*s+g*n*f-e*p*f-h*n*d+e*u*d)*z,t[14]=(g*o*s-a*p*s-g*n*l+e*p*l+a*n*d-e*o*d)*z,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,p=a*h,d=a*u,x=o*u,w=l*c,E=l*h,b=l*u,S=n.x,P=n.y,z=n.z;return s[0]=(1-(p+x))*S,s[1]=(m+b)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(m-b)*P,s[5]=(1-(f+x))*P,s[6]=(d+w)*P,s[7]=0,s[8]=(g+E)*z,s[9]=(d-w)*z,s[10]=(1-(f+p))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);const c=1/r,h=1/a,u=1/o;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a){const o=this.elements,l=2*r/(e-t),c=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,a){const o=this.elements,l=1/(e-t),c=1/(n-s),h=1/(a-r),u=(e+t)*l,f=(n+s)*c,m=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new L,Ye=new Ut,Yp=new L(0,0,0),Zp=new L(1,1,1),Fn=new L,Xs=new L,De=new L,Bl=new Ut,Gl=new rs;class Ds{constructor(t=0,e=0,n=0,s=Ds.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ds.DefaultOrder="XYZ";Ds.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $p=0;const Vl=new L,Ci=new rs,xn=new Ut,js=new L,fs=new L,Kp=new L,Jp=new rs,kl=new L(1,0,0),Hl=new L(0,1,0),Wl=new L(0,0,1),Qp={type:"added"},ql={type:"removed"};class de extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DefaultUp.clone();const t=new L,e=new Ds,n=new rs,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new He}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=de.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=de.DefaultMatrixWorldAutoUpdate,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(fs,js,this.up):xn.lookAt(js,fs,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(xn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ql)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ql)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DefaultUp=new L(0,1,0);de.DefaultMatrixAutoUpdate=!0;de.DefaultMatrixWorldAutoUpdate=!0;const Ze=new L,vn=new L,ao=new L,Mn=new L,Pi=new L,Li=new L,Xl=new L,lo=new L,co=new L,ho=new L;class Sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),vn.subVectors(n,e),ao.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(vn),l=Ze.dot(ao),c=vn.dot(vn),h=vn.dot(ao),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mn),l.set(0,0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),vn.subVectors(t,e),Ze.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ze.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Sn.getUV(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Li.subVectors(r,n),lo.subVectors(t,n);const l=Pi.dot(lo),c=Li.dot(lo);if(l<=0&&c<=0)return e.copy(n);co.subVectors(t,s);const h=Pi.dot(co),u=Li.dot(co);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Pi,a);ho.subVectors(t,r);const m=Pi.dot(ho),g=Li.dot(ho);if(g>=0&&m<=g)return e.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Li,o);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Xl.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Xl,o);const x=1/(d+p+f);return a=p*x,o=f*x,e.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let tm=0;class as extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=qi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wh,this.blendDst=Th,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wa extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new L,Ys=new Ht;class pn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Fl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let em=0;const Be=new Ut,uo=new de,Ri=new L,Ie=new os,ds=new os,ue=new L;class ye extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Nh:zh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Ie.min,ds.min),Ie.expandByPoint(ue),ue.addVectors(Ie.max,ds.max),Ie.expandByPoint(ue)):(Ie.expandByPoint(ds.min),Ie.expandByPoint(ds.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ue.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),ue.add(Ri)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new L,h[R]=new L;const u=new L,f=new L,m=new L,g=new Ht,p=new Ht,d=new Ht,x=new L,w=new L;function E(R,Q,ot){u.fromArray(s,R*3),f.fromArray(s,Q*3),m.fromArray(s,ot*3),g.fromArray(a,R*2),p.fromArray(a,Q*2),d.fromArray(a,ot*2),f.sub(u),m.sub(u),p.sub(g),d.sub(g);const G=1/(p.x*d.y-d.x*p.y);!isFinite(G)||(x.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(G),w.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(G),c[R].add(x),c[Q].add(x),c[ot].add(x),h[R].add(w),h[Q].add(w),h[ot].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,Q=b.length;R<Q;++R){const ot=b[R],G=ot.start,F=ot.count;for(let J=G,et=G+F;J<et;J+=3)E(n[J+0],n[J+1],n[J+2])}const S=new L,P=new L,z=new L,v=new L;function A(R){z.fromArray(r,R*3),v.copy(z);const Q=c[R];S.copy(Q),S.sub(z.multiplyScalar(z.dot(Q))).normalize(),P.crossVectors(v,Q);const G=P.dot(h[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=G}for(let R=0,Q=b.length;R<Q;++R){const ot=b[R],G=ot.start,F=ot.count;for(let J=G,et=G+F;J<et;J+=3)A(n[J+0]),A(n[J+1]),A(n[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*h;for(let x=0;x<h;x++)f[g++]=c[m++]}return new pn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Ut,Di=new ba,fo=new Rs,zn=new L,Nn=new L,On=new L,po=new L,mo=new L,go=new L,Zs=new L,$s=new L,Ks=new L,Js=new Ht,Qs=new Ht,tr=new Ht,_o=new L,er=new L;class dn extends de{constructor(t=new ye,e=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),t.ray.intersectsSphere(fo)===!1)||(jl.copy(r).invert(),Di.copy(t.ray).applyMatrix4(jl),n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const x=m[p],w=s[x.materialIndex],E=Math.max(x.start,g.start),b=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let S=E,P=b;S<P;S+=3){const z=o.getX(S),v=o.getX(S+1),A=o.getX(S+2);a=nr(this,w,t,Di,l,c,h,u,f,z,v,A),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let x=p,w=d;x<w;x+=3){const E=o.getX(x),b=o.getX(x+1),S=o.getX(x+2);a=nr(this,s,t,Di,l,c,h,u,f,E,b,S),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,d=m.length;p<d;p++){const x=m[p],w=s[x.materialIndex],E=Math.max(x.start,g.start),b=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=E,P=b;S<P;S+=3){const z=S,v=S+1,A=S+2;a=nr(this,w,t,Di,l,c,h,u,f,z,v,A),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let x=p,w=d;x<w;x+=3){const E=x,b=x+1,S=x+2;a=nr(this,s,t,Di,l,c,h,u,f,E,b,S),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}}function nm(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side!==Bn,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,a,o,l,c,h,u){zn.fromBufferAttribute(s,c),Nn.fromBufferAttribute(s,h),On.fromBufferAttribute(s,u);const f=i.morphTargetInfluences;if(r&&f){Zs.set(0,0,0),$s.set(0,0,0),Ks.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],x=r[g];d!==0&&(po.fromBufferAttribute(x,c),mo.fromBufferAttribute(x,h),go.fromBufferAttribute(x,u),a?(Zs.addScaledVector(po,d),$s.addScaledVector(mo,d),Ks.addScaledVector(go,d)):(Zs.addScaledVector(po.sub(zn),d),$s.addScaledVector(mo.sub(Nn),d),Ks.addScaledVector(go.sub(On),d)))}zn.add(Zs),Nn.add($s),On.add(Ks)}i.isSkinnedMesh&&(i.boneTransform(c,zn),i.boneTransform(h,Nn),i.boneTransform(u,On));const m=nm(i,t,e,n,zn,Nn,On,_o);if(m){o&&(Js.fromBufferAttribute(o,c),Qs.fromBufferAttribute(o,h),tr.fromBufferAttribute(o,u),m.uv=Sn.getUV(_o,zn,Nn,On,Js,Qs,tr,new Ht)),l&&(Js.fromBufferAttribute(l,c),Qs.fromBufferAttribute(l,h),tr.fromBufferAttribute(l,u),m.uv2=Sn.getUV(_o,zn,Nn,On,Js,Qs,tr,new Ht));const g={a:c,b:h,c:u,normal:new L,materialIndex:0};Sn.getNormal(zn,Nn,On,g.normal),m.face=g}return m}class ls extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(p,d,x,w,E,b,S,P,z,v,A){const R=b/z,Q=S/v,ot=b/2,G=S/2,F=P/2,J=z+1,et=v+1;let nt=0,k=0;const O=new L;for(let H=0;H<et;H++){const lt=H*Q-G;for(let st=0;st<J;st++){const ct=st*R-ot;O[p]=ct*w,O[d]=lt*E,O[x]=F,c.push(O.x,O.y,O.z),O[p]=0,O[d]=0,O[x]=P>0?1:-1,h.push(O.x,O.y,O.z),u.push(st/z),u.push(1-H/v),nt+=1}}for(let H=0;H<v;H++)for(let lt=0;lt<z;lt++){const st=f+lt+J*H,ct=f+lt+J*(H+1),bt=f+(lt+1)+J*(H+1),Ct=f+(lt+1)+J*H;l.push(st,ct,Ct),l.push(ct,bt,Ct),k+=6}o.addGroup(m,k,A),m+=k,f+=nt}}static fromJSON(t){return new ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=ts(i[e]);for(const s in n)t[s]=n[s]}return t}function im(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}const sm={clone:ts,merge:_e};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends Oh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=90,Fi=1;class am extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new ke(Ii,Fi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new ke(Ii,Fi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const a=new ke(Ii,Fi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new ke(Ii,Fi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const l=new ke(Ii,Fi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new ke(Ii,Fi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Tn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uh extends nn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lm extends _i{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ls(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Hn});r.uniforms.tEquirect.value=e;const a=new dn(s,r),o=e.minFilter;return e.minFilter===Ir&&(e.minFilter=Ve),new am(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const xo=new L,cm=new L,hm=new He;class ti{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xo.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hm.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Rs,ir=new L;class Ta{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],x=n[13],w=n[14],E=n[15];return e[0].setComponents(o-s,u-l,p-f,E-d).normalize(),e[1].setComponents(o+s,u+l,p+f,E+d).normalize(),e[2].setComponents(o+r,u+c,p+m,E+x).normalize(),e[3].setComponents(o-r,u-c,p-m,E-x).normalize(),e[4].setComponents(o-a,u-h,p-g,E-w).normalize(),e[5].setComponents(o+a,u+h,p+g,E+w).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function um(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,m=h.updateRange;i.bindBuffer(u,c),m.count===-1?i.bufferSubData(u,0,f):(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,s(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Ea extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],p=[],d=[];for(let x=0;x<h;x++){const w=x*f-a;for(let E=0;E<c;E++){const b=E*u-r;g.push(b,-w,0),p.push(0,0,1),d.push(E/o),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let w=0;w<o;w++){const E=w+c*x,b=w+c*(x+1),S=w+1+c*(x+1),P=w+1+c*x;m.push(E,b,P),m.push(b,S,P)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(d,2))}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm="vec3 transformed = vec3( position );",vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ym=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Im=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,eg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ag=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Eg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Xg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,i_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,s_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,r_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,o_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,a_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,l_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,g_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,__=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,T_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,A_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,R_=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,G_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ot={alphamap_fragment:fm,alphamap_pars_fragment:dm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,begin_vertex:xm,beginnormal_vertex:vm,bsdfs:Mm,iridescence_fragment:ym,bumpmap_pars_fragment:bm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Em,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Lm,common:Rm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Im,displacementmap_pars_vertex:Fm,displacementmap_vertex:zm,emissivemap_fragment:Nm,emissivemap_pars_fragment:Om,encodings_fragment:Um,encodings_pars_fragment:Bm,envmap_fragment:Gm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:km,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:qm,fog_pars_vertex:Xm,fog_fragment:jm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Zm,lightmap_fragment:$m,lightmap_pars_fragment:Km,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:tg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:Mg,morphcolor_vertex:yg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Tg,normal_fragment_maps:Eg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Fg,output_fragment:zg,packing:Ng,premultiplied_alpha_fragment:Og,project_vertex:Ug,dithering_fragment:Bg,dithering_pars_fragment:Gg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:qg,shadowmask_pars_fragment:Xg,skinbase_vertex:jg,skinning_pars_vertex:Yg,skinning_vertex:Zg,skinnormal_vertex:$g,specularmap_fragment:Kg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,uv2_pars_fragment:o_,uv2_pars_vertex:a_,uv2_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,cube_vert:f_,cube_frag:d_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:__,equirect_vert:x_,equirect_frag:v_,linedashed_vert:M_,linedashed_frag:y_,meshbasic_vert:b_,meshbasic_frag:S_,meshlambert_vert:w_,meshlambert_frag:T_,meshmatcap_vert:E_,meshmatcap_frag:A_,meshnormal_vert:C_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:R_,meshphysical_vert:D_,meshphysical_frag:I_,meshtoon_vert:F_,meshtoon_frag:z_,points_vert:N_,points_frag:O_,shadow_vert:U_,shadow_frag:B_,sprite_vert:G_,sprite_frag:V_},dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new He},uv2Transform:{value:new He},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}}},cn={basic:{uniforms:_e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:_e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:_e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:_e([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:_e([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:_e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:_e([dt.points,dt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:_e([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:_e([dt.common,dt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:_e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:_e([dt.sprite,dt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},cube:{uniforms:_e([dt.envmap,{opacity:{value:1}}]),vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:_e([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:_e([dt.lights,dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};cn.physical={uniforms:_e([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};function k_(i,t,e,n,s,r){const a=new Kt(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function m(p,d){let x=!1,w=d.isScene===!0?d.background:null;w&&w.isTexture&&(w=t.get(w));const E=i.xr,b=E.getSession&&E.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?g(a,o):w&&w.isColor&&(g(w,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Dr)?(c===void 0&&(c=new dn(new ls(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ts(cn.cube.uniforms),vertexShader:cn.cube.vertexShader,fragmentShader:cn.cube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new dn(new Ea(2,2),new xi({name:"BackgroundMaterial",uniforms:ts(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){e.buffers.color.setClear(p.r,p.g,p.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function H_(i,t,e,n){const s=i.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,h=!1;function u(F,J,et,nt,k){let O=!1;if(a){const H=p(nt,et,J);c!==H&&(c=H,m(c.object)),O=x(F,nt,et,k),O&&w(F,nt,et,k)}else{const H=J.wireframe===!0;(c.geometry!==nt.id||c.program!==et.id||c.wireframe!==H)&&(c.geometry=nt.id,c.program=et.id,c.wireframe=H,O=!0)}k!==null&&e.update(k,34963),(O||h)&&(h=!1,v(F,J,et,nt),k!==null&&i.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,J,et){const nt=et.wireframe===!0;let k=o[F.id];k===void 0&&(k={},o[F.id]=k);let O=k[J.id];O===void 0&&(O={},k[J.id]=O);let H=O[nt];return H===void 0&&(H=d(f()),O[nt]=H),H}function d(F){const J=[],et=[],nt=[];for(let k=0;k<s;k++)J[k]=0,et[k]=0,nt[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:et,attributeDivisors:nt,object:F,attributes:{},index:null}}function x(F,J,et,nt){const k=c.attributes,O=J.attributes;let H=0;const lt=et.getAttributes();for(const st in lt)if(lt[st].location>=0){const bt=k[st];let Ct=O[st];if(Ct===void 0&&(st==="instanceMatrix"&&F.instanceMatrix&&(Ct=F.instanceMatrix),st==="instanceColor"&&F.instanceColor&&(Ct=F.instanceColor)),bt===void 0||bt.attribute!==Ct||Ct&&bt.data!==Ct.data)return!0;H++}return c.attributesNum!==H||c.index!==nt}function w(F,J,et,nt){const k={},O=J.attributes;let H=0;const lt=et.getAttributes();for(const st in lt)if(lt[st].location>=0){let bt=O[st];bt===void 0&&(st==="instanceMatrix"&&F.instanceMatrix&&(bt=F.instanceMatrix),st==="instanceColor"&&F.instanceColor&&(bt=F.instanceColor));const Ct={};Ct.attribute=bt,bt&&bt.data&&(Ct.data=bt.data),k[st]=Ct,H++}c.attributes=k,c.attributesNum=H,c.index=nt}function E(){const F=c.newAttributes;for(let J=0,et=F.length;J<et;J++)F[J]=0}function b(F){S(F,0)}function S(F,J){const et=c.newAttributes,nt=c.enabledAttributes,k=c.attributeDivisors;et[F]=1,nt[F]===0&&(i.enableVertexAttribArray(F),nt[F]=1),k[F]!==J&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),k[F]=J)}function P(){const F=c.newAttributes,J=c.enabledAttributes;for(let et=0,nt=J.length;et<nt;et++)J[et]!==F[et]&&(i.disableVertexAttribArray(et),J[et]=0)}function z(F,J,et,nt,k,O){n.isWebGL2===!0&&(et===5124||et===5125)?i.vertexAttribIPointer(F,J,et,k,O):i.vertexAttribPointer(F,J,et,nt,k,O)}function v(F,J,et,nt){if(n.isWebGL2===!1&&(F.isInstancedMesh||nt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const k=nt.attributes,O=et.getAttributes(),H=J.defaultAttributeValues;for(const lt in O){const st=O[lt];if(st.location>=0){let ct=k[lt];if(ct===void 0&&(lt==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),lt==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),ct!==void 0){const bt=ct.normalized,Ct=ct.itemSize,j=e.get(ct);if(j===void 0)continue;const Gt=j.buffer,At=j.type,Et=j.bytesPerElement;if(ct.isInterleavedBufferAttribute){const Mt=ct.data,jt=Mt.stride,T=ct.offset;if(Mt.isInstancedInterleavedBuffer){for(let C=0;C<st.locationSize;C++)S(st.location+C,Mt.meshPerAttribute);F.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let C=0;C<st.locationSize;C++)b(st.location+C);i.bindBuffer(34962,Gt);for(let C=0;C<st.locationSize;C++)z(st.location+C,Ct/st.locationSize,At,bt,jt*Et,(T+Ct/st.locationSize*C)*Et)}else{if(ct.isInstancedBufferAttribute){for(let Mt=0;Mt<st.locationSize;Mt++)S(st.location+Mt,ct.meshPerAttribute);F.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Mt=0;Mt<st.locationSize;Mt++)b(st.location+Mt);i.bindBuffer(34962,Gt);for(let Mt=0;Mt<st.locationSize;Mt++)z(st.location+Mt,Ct/st.locationSize,At,bt,Ct*Et,Ct/st.locationSize*Mt*Et)}}else if(H!==void 0){const bt=H[lt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(st.location,bt);break;case 3:i.vertexAttrib3fv(st.location,bt);break;case 4:i.vertexAttrib4fv(st.location,bt);break;default:i.vertexAttrib1fv(st.location,bt)}}}}P()}function A(){ot();for(const F in o){const J=o[F];for(const et in J){const nt=J[et];for(const k in nt)g(nt[k].object),delete nt[k];delete J[et]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;const J=o[F.id];for(const et in J){const nt=J[et];for(const k in nt)g(nt[k].object),delete nt[k];delete J[et]}delete o[F.id]}function Q(F){for(const J in o){const et=o[J];if(et[F.id]===void 0)continue;const nt=et[F.id];for(const k in nt)g(nt[k].object),delete nt[k];delete et[F.id]}}function ot(){G(),h=!0,c!==l&&(c=l,m(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ot,resetDefaultState:G,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:Q,initAttributes:E,enableAttribute:b,disableUnusedAttributes:P}}function W_(i,t,e,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,h){i.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,u),e.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function q_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(z){if(z==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),x=i.getParameter(36348),w=i.getParameter(36349),E=f>0,b=a||t.has("OES_texture_float"),S=E&&b,P=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:P}}function X_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ti,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||n!==0||s;return s=f,e=h(u,m,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,x=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{const w=r?0:n,E=w*4;let b=x.clippingState||null;l.value=b,b=h(g,f,E,m);for(let S=0;S!==E;++S)b[S]=e[S];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const x=m+p*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<x)&&(d=new Float32Array(x));for(let E=0,b=m;E!==p;++E,b+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function j_(i){let t=new WeakMap;function e(a,o){return o===Ho?a.mapping=Ki:o===Wo&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ho||o===Wo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lm(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gh extends Oh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Yl=[.125,.215,.35,.446,.526,.582],oi=20,vo=new Gh,Zl=new Kt;let Mo=null;const ei=(1+Math.sqrt(5))/2,Ni=1/ei,$l=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ei,Ni),new L(0,ei,-Ni),new L(Ni,0,ei),new L(-Ni,0,ei),new L(ei,Ni,0),new L(-ei,Ni,0)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo),t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Ls,format:fn,encoding:gi,depthBuffer:!1},s=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y_(r)),this._blurMaterial=Z_(r,t,e)}return s}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zl),h.toneMapping=Tn,h.autoClear=!1;const m=new wa({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new dn(new ls,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(Zl),p=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):w===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const E=this._cubeSize;sr(s,w*E,x>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(s-1)%$l.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),p=r/g,d=isFinite(r)?1+Math.floor(h*p):oi;d>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${oi}`);const x=[];let w=0;for(let z=0;z<oi;++z){const v=z/p,A=Math.exp(-v*v/2);x.push(A),z===0?w+=A:z<d&&(w+=2*A)}for(let z=0;z<x.length;z++)x[z]=x[z]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const b=this._sizeLods[s],S=3*b*(s>E-Bi?s-E+Bi:0),P=4*(this._cubeSize-b);sr(e,S,P,3*b,2*b),l.setRenderTarget(e),l.render(u,vo)}}function Y_(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Bi?l=Yl[a-i+Bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,d=2,x=1,w=new Float32Array(p*g*m),E=new Float32Array(d*g*m),b=new Float32Array(x*g*m);for(let P=0;P<m;P++){const z=P%3*2/3-1,v=P>2?0:-1,A=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];w.set(A,p*g*P),E.set(f,d*g*P);const R=[P,P,P,P,P,P];b.set(R,x*g*P)}const S=new ye;S.setAttribute("position",new pn(w,p)),S.setAttribute("uv",new pn(E,d)),S.setAttribute("faceIndex",new pn(b,x)),t.push(S),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Z_(i,t,e){const n=new Float32Array(oi),s=new L(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ql(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function tc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function $_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Wo,h=l===Ki||l===Ji;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Kl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Kl(i));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function K_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function J_(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)t.update(p[d],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let E=0,b=w.length;E<b;E+=3){const S=w[E+0],P=w[E+1],z=w[E+2];f.push(S,P,P,z,z,S)}}else{const w=g.array;p=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const S=E+0,P=E+1,z=E+2;f.push(S,P,P,z,z,S)}}const d=new(Lh(f)?Nh:zh)(f,1);d.version=p;const x=r.get(u);x&&t.remove(x),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Q_(i,t,e,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,m){i.drawElements(r,m,o,f*l),e.update(m,r,1)}function u(f,m,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,o,f*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function tx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ex(i,t){return i[0]-t[0]}function nx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ix(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0;let x=r.get(h);if(x===void 0||x.count!==d){let et=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",et)};var g=et;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let R=0;b===!0&&(R=1),S===!0&&(R=2),P===!0&&(R=3);let Q=h.attributes.position.count*R,ot=1;Q>t.maxTextureSize&&(ot=Math.ceil(Q/t.maxTextureSize),Q=t.maxTextureSize);const G=new Float32Array(Q*ot*4*d),F=new Fh(G,Q,ot,d);F.type=li,F.needsUpdate=!0;const J=R*4;for(let nt=0;nt<d;nt++){const k=z[nt],O=v[nt],H=A[nt],lt=Q*ot*4*nt;for(let st=0;st<k.count;st++){const ct=st*J;b===!0&&(a.fromBufferAttribute(k,st),G[lt+ct+0]=a.x,G[lt+ct+1]=a.y,G[lt+ct+2]=a.z,G[lt+ct+3]=0),S===!0&&(a.fromBufferAttribute(O,st),G[lt+ct+4]=a.x,G[lt+ct+5]=a.y,G[lt+ct+6]=a.z,G[lt+ct+7]=0),P===!0&&(a.fromBufferAttribute(H,st),G[lt+ct+8]=a.x,G[lt+ct+9]=a.y,G[lt+ct+10]=a.z,G[lt+ct+11]=H.itemSize===4?a.w:1)}}x={count:d,texture:F,size:new Ht(Q,ot)},r.set(h,x),h.addEventListener("dispose",et)}let w=0;for(let b=0;b<m.length;b++)w+=m[b];const E=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let d=n[h.id];if(d===void 0||d.length!==p){d=[];for(let S=0;S<p;S++)d[S]=[S,0];n[h.id]=d}for(let S=0;S<p;S++){const P=d[S];P[0]=S,P[1]=m[S]}d.sort(nx);for(let S=0;S<8;S++)S<p&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(ex);const x=h.morphAttributes.position,w=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const P=o[S],z=P[0],v=P[1];z!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+S)!==x[z]&&h.setAttribute("morphTarget"+S,x[z]),w&&h.getAttribute("morphNormal"+S)!==w[z]&&h.setAttribute("morphNormal"+S,w[z]),s[S]=v,E+=v):(x&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),w&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}const b=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function sx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Vh=new nn,kh=new Fh,Hh=new Xp,Wh=new Uh,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function cx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Ae(e,n)}}function hx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Ae(e,n)}}function ux(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),Ae(e,n)}}function fx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dx(i,t){const e=this.cache;Ee(e,t)||(i.uniform2iv(this.addr,t),Ae(e,t))}function px(i,t){const e=this.cache;Ee(e,t)||(i.uniform3iv(this.addr,t),Ae(e,t))}function mx(i,t){const e=this.cache;Ee(e,t)||(i.uniform4iv(this.addr,t),Ae(e,t))}function gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _x(i,t){const e=this.cache;Ee(e,t)||(i.uniform2uiv(this.addr,t),Ae(e,t))}function xx(i,t){const e=this.cache;Ee(e,t)||(i.uniform3uiv(this.addr,t),Ae(e,t))}function vx(i,t){const e=this.cache;Ee(e,t)||(i.uniform4uiv(this.addr,t),Ae(e,t))}function Mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Vh,s)}function yx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wh,s)}function Sx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kh,s)}function wx(i){switch(i){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Tx(i,t){i.uniform1fv(this.addr,t)}function Ex(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ax(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function Cx(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Px(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lx(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rx(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dx(i,t){i.uniform1iv(this.addr,t)}function Ix(i,t){i.uniform2iv(this.addr,t)}function Fx(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function Nx(i,t){i.uniform1uiv(this.addr,t)}function Ox(i,t){i.uniform2uiv(this.addr,t)}function Ux(i,t){i.uniform3uiv(this.addr,t)}function Bx(i,t){i.uniform4uiv(this.addr,t)}function Gx(i,t,e){const n=t.length,s=Fr(e,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Vh,s[r])}function Vx(i,t,e){const n=t.length,s=Fr(e,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Hh,s[r])}function kx(i,t,e){const n=t.length,s=Fr(e,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Wh,s[r])}function Hx(i,t,e){const n=t.length,s=Fr(e,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||kh,s[r])}function Wx(i){switch(i){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Rx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ix;case 35668:case 35672:return Fx;case 35669:case 35673:return zx;case 5125:return Nx;case 36294:return Ox;case 36295:return Ux;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Hx}}class qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=wx(e.type)}}class Xx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wx(e.type)}}class jx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function Yx(i,t,e){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){oc(e,c===void 0?new qx(o,i,t):new Xx(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new jx(o),oc(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Yx(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Zx=0;function $x(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kx(i){switch(i){case gi:return["Linear","( value )"];case ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function lc(i,t,e){const n=i.getShaderParameter(t,35713),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$x(i.getShaderSource(t),a)}else return s}function Jx(i,t){const e=Kx(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qx(i,t){let e;switch(t){case op:e="Linear";break;case ap:e="Reinhard";break;case lp:e="OptimizedCineon";break;case cp:e="ACESFilmic";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function e0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(i,t){const e={},n=i.getProgramParameter(t,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _s(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(i0,s0)}function s0(i,t){const e=Ot[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Zo(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(r0,o0)}function o0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ms&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case Ji:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function h0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case sp:t="ENVMAP_BLENDING_MIX";break;case rp:t="ENVMAP_BLENDING_ADD";break}return t}function u0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function f0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=a0(e),c=l0(e),h=c0(e),u=h0(e),f=u0(e),m=e.isWebGL2?"":t0(e),g=e0(r),p=s.createProgram();let d,x,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(_s).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(_s).join(`
`),x.length>0&&(x+=`
`)):(d=[fc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),x=[m,fc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.encodings_pars_fragment,Jx("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=Zo(a),a=cc(a,e),a=hc(a,e),o=Zo(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=w+d+a,b=w+x+o,S=ac(s,35633,E),P=ac(s,35632,b);if(s.attachShader(p,S),s.attachShader(p,P),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(S).trim(),Q=s.getShaderInfoLog(P).trim();let ot=!0,G=!0;if(s.getProgramParameter(p,35714)===!1){ot=!1;const F=lc(s,S,"vertex"),J=lc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||Q==="")&&(G=!1);G&&(this.diagnostics={runnable:ot,programLog:A,vertexShader:{log:R,prefix:d},fragmentShader:{log:Q,prefix:x}})}s.deleteShader(S),s.deleteShader(P);let z;this.getUniforms=function(){return z===void 0&&(z=new dr(s,p)),z};let v;return this.getAttributes=function(){return v===void 0&&(v=n0(s,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Zx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let d0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m0(t),e.set(t,n)),n}}class m0{constructor(t){this.id=d0++,this.code=t,this.usedTimes=0}}function g0(i,t,e,n,s,r,a){const o=new Sa,l=new p0,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,R,Q,ot){const G=Q.fog,F=ot.geometry,J=v.isMeshStandardMaterial?Q.environment:null,et=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),nt=!!et&&et.mapping===Dr?et.image.height:null,k=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const O=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,H=O!==void 0?O.length:0;let lt=0;F.morphAttributes.position!==void 0&&(lt=1),F.morphAttributes.normal!==void 0&&(lt=2),F.morphAttributes.color!==void 0&&(lt=3);let st,ct,bt,Ct;if(k){const jt=cn[k];st=jt.vertexShader,ct=jt.fragmentShader}else st=v.vertexShader,ct=v.fragmentShader,l.update(v),bt=l.getVertexShaderID(v),Ct=l.getFragmentShaderID(v);const j=i.getRenderTarget(),Gt=v.alphaTest>0,At=v.clearcoat>0,Et=v.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:v.type,vertexShader:st,fragmentShader:ct,defines:v.defines,customVertexShaderID:bt,customFragmentShaderID:Ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ot.isInstancedMesh===!0,instancingColor:ot.isInstancedMesh===!0&&ot.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?i.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:gi,map:!!v.map,matcap:!!v.matcap,envMap:!!et,envMapMode:et&&et.mapping,envMapCubeUVHeight:nt,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Pp,tangentSpaceNormalMap:v.normalMapType===Ph,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ie,clearcoat:At,clearcoatMap:At&&!!v.clearcoatMap,clearcoatRoughnessMap:At&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:At&&!!v.clearcoatNormalMap,iridescence:Et,iridescenceMap:Et&&!!v.iridescenceMap,iridescenceThicknessMap:Et&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===qi,alphaMap:!!v.alphaMap,alphaTest:Gt,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!G,useFog:v.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:ot.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Tn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===qe,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)A.push(R),A.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(x(A,v),w(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function x(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function w(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),v.push(o.mask)}function E(v){const A=g[v.type];let R;if(A){const Q=cn[A];R=sm.clone(Q.uniforms)}else R=v.uniforms;return R}function b(v,A){let R;for(let Q=0,ot=c.length;Q<ot;Q++){const G=c[Q];if(G.cacheKey===A){R=G,++R.usedTimes;break}}return R===void 0&&(R=new f0(i,A,v,r),c.push(R)),R}function S(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:b,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:z}}function _0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function x0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,g,p,d){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=p,x.group=d),t++,x}function o(u,f,m,g,p,d){const x=a(u,f,m,g,p,d);m.transmission>0?n.push(x):m.transparent===!0?s.push(x):e.push(x)}function l(u,f,m,g,p,d){const x=a(u,f,m,g,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function c(u,f){e.length>1&&e.sort(u||x0),n.length>1&&n.sort(f||dc),s.length>1&&s.sort(f||dc)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function v0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new pc,i.set(n,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function M0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b0=0;function S0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w0(i,t){const e=new M0,n=y0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new L);const r=new L,a=new Ut,o=new Ut;function l(h,u){let f=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let p=0,d=0,x=0,w=0,E=0,b=0,S=0,P=0,z=0,v=0;h.sort(S0);const A=u!==!0?Math.PI:1;for(let Q=0,ot=h.length;Q<ot;Q++){const G=h[Q],F=G.color,J=G.intensity,et=G.distance,nt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=F.r*J*A,m+=F.g*J*A,g+=F.b*J*A;else if(G.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(G.sh.coefficients[k],J);else if(G.isDirectionalLight){const k=e.get(G);if(k.color.copy(G.color).multiplyScalar(G.intensity*A),G.castShadow){const O=G.shadow,H=n.get(G);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,s.directionalShadow[p]=H,s.directionalShadowMap[p]=nt,s.directionalShadowMatrix[p]=G.shadow.matrix,b++}s.directional[p]=k,p++}else if(G.isSpotLight){const k=e.get(G);k.position.setFromMatrixPosition(G.matrixWorld),k.color.copy(F).multiplyScalar(J*A),k.distance=et,k.coneCos=Math.cos(G.angle),k.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),k.decay=G.decay,s.spot[x]=k;const O=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,O.updateMatrices(G),G.castShadow&&v++),s.spotLightMatrix[x]=O.matrix,G.castShadow){const H=n.get(G);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,s.spotShadow[x]=H,s.spotShadowMap[x]=nt,P++}x++}else if(G.isRectAreaLight){const k=e.get(G);k.color.copy(F).multiplyScalar(J),k.halfWidth.set(G.width*.5,0,0),k.halfHeight.set(0,G.height*.5,0),s.rectArea[w]=k,w++}else if(G.isPointLight){const k=e.get(G);if(k.color.copy(G.color).multiplyScalar(G.intensity*A),k.distance=G.distance,k.decay=G.decay,G.castShadow){const O=G.shadow,H=n.get(G);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,s.pointShadow[d]=H,s.pointShadowMap[d]=nt,s.pointShadowMatrix[d]=G.shadow.matrix,S++}s.point[d]=k,d++}else if(G.isHemisphereLight){const k=e.get(G);k.skyColor.copy(G.color).multiplyScalar(J*A),k.groundColor.copy(G.groundColor).multiplyScalar(J*A),s.hemi[E]=k,E++}}w>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==p||R.pointLength!==d||R.spotLength!==x||R.rectAreaLength!==w||R.hemiLength!==E||R.numDirectionalShadows!==b||R.numPointShadows!==S||R.numSpotShadows!==P||R.numSpotMaps!==z)&&(s.directional.length=p,s.spot.length=x,s.rectArea.length=w,s.point.length=d,s.hemi.length=E,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=P+z-v,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=v,R.directionalLength=p,R.pointLength=d,R.spotLength=x,R.rectAreaLength=w,R.hemiLength=E,R.numDirectionalShadows=b,R.numPointShadows=S,R.numSpotShadows=P,R.numSpotMaps=z,s.version=b0++)}function c(h,u){let f=0,m=0,g=0,p=0,d=0;const x=u.matrixWorldInverse;for(let w=0,E=h.length;w<E;w++){const b=h[w];if(b.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),f++}else if(b.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const S=s.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),o.identity(),a.copy(b.matrixWorld),a.premultiply(x),o.extractRotation(a),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const S=s.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const S=s.hemi[d];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:s}}function mc(i,t){const e=new w0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function T0(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new mc(i,t),e.set(r,[l])):a>=o.length?(l=new mc(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class E0 extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A0 extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function L0(i,t,e){let n=new Ta;const s=new Ht,r=new Ht,a=new fe,o=new E0({depthPacking:Cp}),l=new A0,c={},h=e.maxTextureSize,u={0:qe,1:$i,2:Bn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:C0,fragmentShader:P0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new dn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh,this.render=function(b,S,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const z=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Hn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Q=0,ot=b.length;Q<ot;Q++){const G=b[Q],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const J=F.getFrameExtents();if(s.multiply(J),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,F.mapSize.y=r.y)),F.map===null){const nt=this.type!==ms?{minFilter:Le,magFilter:Le}:{};F.map=new _i(s.x,s.y,nt),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const et=F.getViewportCount();for(let nt=0;nt<et;nt++){const k=F.getViewport(nt);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),R.viewport(a),F.updateMatrices(G,nt),n=F.getFrustum(),E(S,P,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===ms&&x(F,P),F.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(z,v,A)};function x(b,S){const P=t.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _i(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,P,m,p,null)}function w(b,S,P,z,v,A){let R=null;const Q=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Q!==void 0?R=Q:R=P.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ot=R.uuid,G=S.uuid;let F=c[ot];F===void 0&&(F={},c[ot]=F);let J=F[G];J===void 0&&(J=R.clone(),F[G]=J),R=J}return R.visible=S.visible,R.wireframe=S.wireframe,A===ms?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:u[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(P.matrixWorld),R.nearDistance=z,R.farDistance=v),R}function E(b,S,P,z,v){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ms)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const Q=t.update(b),ot=b.material;if(Array.isArray(ot)){const G=Q.groups;for(let F=0,J=G.length;F<J;F++){const et=G[F],nt=ot[et.materialIndex];if(nt&&nt.visible){const k=w(b,nt,z,P.near,P.far,v);i.renderBufferDirect(P,null,Q,k,b,et)}}}else if(ot.visible){const G=w(b,ot,z,P.near,P.far,v);i.renderBufferDirect(P,null,Q,G,b,null)}}const R=b.children;for(let Q=0,ot=R.length;Q<ot;Q++)E(R[Q],S,P,z,v)}}function R0(i,t,e){const n=e.isWebGL2;function s(){let D=!1;const vt=new fe;let q=null;const xt=new fe(0,0,0,0);return{setMask:function(gt){q!==gt&&!D&&(i.colorMask(gt,gt,gt,gt),q=gt)},setLocked:function(gt){D=gt},setClear:function(gt,qt,he,se,Cn){Cn===!0&&(gt*=se,qt*=se,he*=se),vt.set(gt,qt,he,se),xt.equals(vt)===!1&&(i.clearColor(gt,qt,he,se),xt.copy(vt))},reset:function(){D=!1,q=null,xt.set(-1,0,0,0)}}}function r(){let D=!1,vt=null,q=null,xt=null;return{setTest:function(gt){gt?Gt(2929):At(2929)},setMask:function(gt){vt!==gt&&!D&&(i.depthMask(gt),vt=gt)},setFunc:function(gt){if(q!==gt){if(gt)switch(gt){case Kd:i.depthFunc(512);break;case Jd:i.depthFunc(519);break;case Qd:i.depthFunc(513);break;case ko:i.depthFunc(515);break;case tp:i.depthFunc(514);break;case ep:i.depthFunc(518);break;case np:i.depthFunc(516);break;case ip:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);q=gt}},setLocked:function(gt){D=gt},setClear:function(gt){xt!==gt&&(i.clearDepth(gt),xt=gt)},reset:function(){D=!1,vt=null,q=null,xt=null}}}function a(){let D=!1,vt=null,q=null,xt=null,gt=null,qt=null,he=null,se=null,Cn=null;return{setTest:function(te){D||(te?Gt(2960):At(2960))},setMask:function(te){vt!==te&&!D&&(i.stencilMask(te),vt=te)},setFunc:function(te,mn,Ne){(q!==te||xt!==mn||gt!==Ne)&&(i.stencilFunc(te,mn,Ne),q=te,xt=mn,gt=Ne)},setOp:function(te,mn,Ne){(qt!==te||he!==mn||se!==Ne)&&(i.stencilOp(te,mn,Ne),qt=te,he=mn,se=Ne)},setLocked:function(te){D=te},setClear:function(te){Cn!==te&&(i.clearStencil(te),Cn=te)},reset:function(){D=!1,vt=null,q=null,xt=null,gt=null,qt=null,he=null,se=null,Cn=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,x=!1,w=null,E=null,b=null,S=null,P=null,z=null,v=null,A=!1,R=null,Q=null,ot=null,G=null,F=null;const J=i.getParameter(35661);let et=!1,nt=0;const k=i.getParameter(7938);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),et=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),et=nt>=2);let O=null,H={};const lt=i.getParameter(3088),st=i.getParameter(2978),ct=new fe().fromArray(lt),bt=new fe().fromArray(st);function Ct(D,vt,q){const xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,10241,9728),i.texParameteri(D,10240,9728);for(let qt=0;qt<q;qt++)i.texImage2D(vt+qt,0,6408,1,1,0,6408,5121,xt);return gt}const j={};j[3553]=Ct(3553,3553,1),j[34067]=Ct(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Gt(2929),l.setFunc(ko),Y(!1),at(rl),Gt(2884),V(Hn);function Gt(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function At(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Et(D,vt){return m[D]!==vt?(i.bindFramebuffer(D,vt),m[D]=vt,n&&(D===36009&&(m[36160]=vt),D===36160&&(m[36009]=vt)),!0):!1}function Mt(D,vt){let q=p,xt=!1;if(D)if(q=g.get(vt),q===void 0&&(q=[],g.set(vt,q)),D.isWebGLMultipleRenderTargets){const gt=D.texture;if(q.length!==gt.length||q[0]!==36064){for(let qt=0,he=gt.length;qt<he;qt++)q[qt]=36064+qt;q.length=gt.length,xt=!0}}else q[0]!==36064&&(q[0]=36064,xt=!0);else q[0]!==1029&&(q[0]=1029,xt=!0);xt&&(e.isWebGL2?i.drawBuffers(q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function jt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const T={[Oi]:32774,[Gd]:32778,[Vd]:32779};if(n)T[cl]=32775,T[hl]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(T[cl]=D.MIN_EXT,T[hl]=D.MAX_EXT)}const C={[kd]:0,[Hd]:1,[Wd]:768,[wh]:770,[$d]:776,[Yd]:774,[Xd]:772,[qd]:769,[Th]:771,[Zd]:775,[jd]:773};function V(D,vt,q,xt,gt,qt,he,se){if(D===Hn){x===!0&&(At(3042),x=!1);return}if(x===!1&&(Gt(3042),x=!0),D!==Bd){if(D!==w||se!==A){if((E!==Oi||P!==Oi)&&(i.blendEquation(32774),E=Oi,P=Oi),se)switch(D){case qi:i.blendFuncSeparate(1,771,1,771);break;case ol:i.blendFunc(1,1);break;case al:i.blendFuncSeparate(0,769,0,1);break;case ll:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:i.blendFuncSeparate(770,771,1,771);break;case ol:i.blendFunc(770,1);break;case al:i.blendFuncSeparate(0,769,0,1);break;case ll:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,z=null,v=null,w=D,A=se}return}gt=gt||vt,qt=qt||q,he=he||xt,(vt!==E||gt!==P)&&(i.blendEquationSeparate(T[vt],T[gt]),E=vt,P=gt),(q!==b||xt!==S||qt!==z||he!==v)&&(i.blendFuncSeparate(C[q],C[xt],C[qt],C[he]),b=q,S=xt,z=qt,v=he),w=D,A=null}function K(D,vt){D.side===Bn?At(2884):Gt(2884);let q=D.side===qe;vt&&(q=!q),Y(q),D.blending===qi&&D.transparent===!1?V(Hn):V(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const xt=D.stencilWrite;c.setTest(xt),xt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Gt(32926):At(32926)}function Y(D){R!==D&&(D?i.frontFace(2304):i.frontFace(2305),R=D)}function at(D){D!==Nd?(Gt(2884),D!==Q&&(D===rl?i.cullFace(1029):D===Od?i.cullFace(1028):i.cullFace(1032))):At(2884),Q=D}function ht(D){D!==ot&&(et&&i.lineWidth(D),ot=D)}function tt(D,vt,q){D?(Gt(32823),(G!==vt||F!==q)&&(i.polygonOffset(vt,q),G=vt,F=q)):At(32823)}function ut(D){D?Gt(3089):At(3089)}function it(D){D===void 0&&(D=33984+J-1),O!==D&&(i.activeTexture(D),O=D)}function M(D,vt){O===null&&it();let q=H[O];q===void 0&&(q={type:void 0,texture:void 0},H[O]=q),(q.type!==D||q.texture!==vt)&&(i.bindTexture(D,vt||j[D]),q.type=D,q.texture=vt)}function _(){const D=H[O];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function I(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(D){ct.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function _t(D){bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),bt.copy(D))}function Rt(D,vt){let q=u.get(vt);q===void 0&&(q=new WeakMap,u.set(vt,q));let xt=q.get(D);xt===void 0&&(xt=i.getUniformBlockIndex(vt,D.name),q.set(D,xt))}function Pt(D,vt){const xt=u.get(vt).get(D);h.get(D)!==xt&&(i.uniformBlockBinding(vt,xt,D.__bindingPointIndex),h.set(D,xt))}function Wt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},O=null,H={},m={},g=new WeakMap,p=[],d=null,x=!1,w=null,E=null,b=null,S=null,P=null,z=null,v=null,A=!1,R=null,Q=null,ot=null,G=null,F=null,ct.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Gt,disable:At,bindFramebuffer:Et,drawBuffers:Mt,useProgram:jt,setBlending:V,setMaterial:K,setFlipSided:Y,setCullFace:at,setLineWidth:ht,setPolygonOffset:tt,setScissorTest:ut,activeTexture:it,bindTexture:M,unbindTexture:_,compressedTexImage2D:I,texImage2D:yt,texImage3D:mt,updateUBOMapping:Rt,uniformBlockBinding:Pt,texStorage2D:pt,texStorage3D:B,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:rt,scissor:St,viewport:_t,reset:Wt}}function D0(i,t,e,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,_){return x?new OffscreenCanvas(M,_):br("canvas")}function E(M,_,I,W){let Z=1;if((M.width>W||M.height>W)&&(Z=W/Math.max(M.width,M.height)),Z<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const rt=_?yr:Math.floor,pt=rt(Z*M.width),B=rt(Z*M.height);p===void 0&&(p=w(pt,B));const yt=I?w(pt,B):p;return yt.width=pt,yt.height=B,yt.getContext("2d").drawImage(M,0,0,pt,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pt+"x"+B+")."),yt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return Yo(M.width)&&Yo(M.height)}function S(M){return o?!1:M.wrapS!==Qe||M.wrapT!==Qe||M.minFilter!==Le&&M.minFilter!==Ve}function P(M,_){return M.generateMipmaps&&_&&M.minFilter!==Le&&M.minFilter!==Ve}function z(M){i.generateMipmap(M)}function v(M,_,I,W,Z=!1){if(o===!1)return _;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let rt=_;return _===6403&&(I===5126&&(rt=33326),I===5131&&(rt=33325),I===5121&&(rt=33321)),_===33319&&(I===5126&&(rt=33328),I===5131&&(rt=33327),I===5121&&(rt=33323)),_===6408&&(I===5126&&(rt=34836),I===5131&&(rt=34842),I===5121&&(rt=W===ie&&Z===!1?35907:32856),I===32819&&(rt=32854),I===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function A(M,_,I){return P(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==Le&&M.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function R(M){return M===Le||M===ul||M===fl?9728:9729}function Q(M){const _=M.target;_.removeEventListener("dispose",Q),G(_),_.isVideoTexture&&g.delete(_)}function ot(M){const _=M.target;_.removeEventListener("dispose",ot),J(_)}function G(M){const _=n.get(M);if(_.__webglInit===void 0)return;const I=M.source,W=d.get(I);if(W){const Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(M),Object.keys(W).length===0&&d.delete(I)}n.remove(M)}function F(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const I=M.source,W=d.get(I);delete W[_.__cacheKey],a.memory.textures--}function J(M){const _=M.texture,I=n.get(M),W=n.get(_);if(W.__webglTexture!==void 0&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)i.deleteFramebuffer(I.__webglFramebuffer[Z]),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Z]);else{if(i.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Z=0;Z<I.__webglColorRenderbuffer.length;Z++)I.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Z]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,rt=_.length;Z<rt;Z++){const pt=n.get(_[Z]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(_[Z])}n.remove(_),n.remove(M)}let et=0;function nt(){et=0}function k(){const M=et;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),et+=1,M}function O(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function H(M,_){const I=n.get(M);if(M.isVideoTexture&&ut(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const W=M.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(I,M,_);return}}e.activeTexture(33984+_),e.bindTexture(3553,I.__webglTexture)}function lt(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){At(I,M,_);return}e.activeTexture(33984+_),e.bindTexture(35866,I.__webglTexture)}function st(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){At(I,M,_);return}e.activeTexture(33984+_),e.bindTexture(32879,I.__webglTexture)}function ct(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Et(I,M,_);return}e.activeTexture(33984+_),e.bindTexture(34067,I.__webglTexture)}const bt={[qo]:10497,[Qe]:33071,[Xo]:33648},Ct={[Le]:9728,[ul]:9984,[fl]:9986,[Ve]:9729,[up]:9985,[Ir]:9987};function j(M,_,I){if(I?(i.texParameteri(M,10242,bt[_.wrapS]),i.texParameteri(M,10243,bt[_.wrapT]),(M===32879||M===35866)&&i.texParameteri(M,32882,bt[_.wrapR]),i.texParameteri(M,10240,Ct[_.magFilter]),i.texParameteri(M,10241,Ct[_.minFilter])):(i.texParameteri(M,10242,33071),i.texParameteri(M,10243,33071),(M===32879||M===35866)&&i.texParameteri(M,32882,33071),(_.wrapS!==Qe||_.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,10240,R(_.magFilter)),i.texParameteri(M,10241,R(_.minFilter)),_.minFilter!==Le&&_.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const W=t.get("EXT_texture_filter_anisotropic");if(_.type===li&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ls&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(M,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Gt(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",Q));const W=_.source;let Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));const rt=O(_);if(rt!==M.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[rt].usedTimes++;const pt=Z[M.__cacheKey];pt!==void 0&&(Z[M.__cacheKey].usedTimes--,pt.usedTimes===0&&F(_)),M.__cacheKey=rt,M.__webglTexture=Z[rt].texture}return I}function At(M,_,I){let W=3553;_.isDataArrayTexture&&(W=35866),_.isData3DTexture&&(W=32879);const Z=Gt(M,_),rt=_.source;if(e.activeTexture(33984+I),e.bindTexture(W,M.__webglTexture),rt.version!==rt.__currentVersion||Z===!0){i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const pt=S(_)&&b(_.image)===!1;let B=E(_.image,pt,!1,h);B=it(_,B);const yt=b(B)||o,mt=r.convert(_.format,_.encoding);let St=r.convert(_.type),_t=v(_.internalFormat,mt,St,_.encoding,_.isVideoTexture);j(W,_,yt);let Rt;const Pt=_.mipmaps,Wt=o&&_.isVideoTexture!==!0,D=rt.__currentVersion===void 0||Z===!0,vt=A(_,B,yt);if(_.isDepthTexture)_t=6402,o?_.type===li?_t=36012:_.type===ai?_t=33190:_.type===Xi?_t=35056:_t=33189:_.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===fi&&_t===6402&&_.type!==Ch&&_.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ai,St=r.convert(_.type)),_.format===Qi&&_t===6402&&(_t=34041,_.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Xi,St=r.convert(_.type))),D&&(Wt?e.texStorage2D(3553,1,_t,B.width,B.height):e.texImage2D(3553,0,_t,B.width,B.height,0,mt,St,null));else if(_.isDataTexture)if(Pt.length>0&&yt){Wt&&D&&e.texStorage2D(3553,vt,_t,Pt[0].width,Pt[0].height);for(let q=0,xt=Pt.length;q<xt;q++)Rt=Pt[q],Wt?e.texSubImage2D(3553,q,0,0,Rt.width,Rt.height,mt,St,Rt.data):e.texImage2D(3553,q,_t,Rt.width,Rt.height,0,mt,St,Rt.data);_.generateMipmaps=!1}else Wt?(D&&e.texStorage2D(3553,vt,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,mt,St,B.data)):e.texImage2D(3553,0,_t,B.width,B.height,0,mt,St,B.data);else if(_.isCompressedTexture){Wt&&D&&e.texStorage2D(3553,vt,_t,Pt[0].width,Pt[0].height);for(let q=0,xt=Pt.length;q<xt;q++)Rt=Pt[q],_.format!==fn?mt!==null?Wt?e.compressedTexSubImage2D(3553,q,0,0,Rt.width,Rt.height,mt,Rt.data):e.compressedTexImage2D(3553,q,_t,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,q,0,0,Rt.width,Rt.height,mt,St,Rt.data):e.texImage2D(3553,q,_t,Rt.width,Rt.height,0,mt,St,Rt.data)}else if(_.isDataArrayTexture)Wt?(D&&e.texStorage3D(35866,vt,_t,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,mt,St,B.data)):e.texImage3D(35866,0,_t,B.width,B.height,B.depth,0,mt,St,B.data);else if(_.isData3DTexture)Wt?(D&&e.texStorage3D(32879,vt,_t,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,mt,St,B.data)):e.texImage3D(32879,0,_t,B.width,B.height,B.depth,0,mt,St,B.data);else if(_.isFramebufferTexture){if(D)if(Wt)e.texStorage2D(3553,vt,_t,B.width,B.height);else{let q=B.width,xt=B.height;for(let gt=0;gt<vt;gt++)e.texImage2D(3553,gt,_t,q,xt,0,mt,St,null),q>>=1,xt>>=1}}else if(Pt.length>0&&yt){Wt&&D&&e.texStorage2D(3553,vt,_t,Pt[0].width,Pt[0].height);for(let q=0,xt=Pt.length;q<xt;q++)Rt=Pt[q],Wt?e.texSubImage2D(3553,q,0,0,mt,St,Rt):e.texImage2D(3553,q,_t,mt,St,Rt);_.generateMipmaps=!1}else Wt?(D&&e.texStorage2D(3553,vt,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,mt,St,B)):e.texImage2D(3553,0,_t,mt,St,B);P(_,yt)&&z(W),rt.__currentVersion=rt.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Et(M,_,I){if(_.image.length!==6)return;const W=Gt(M,_),Z=_.source;if(e.activeTexture(33984+I),e.bindTexture(34067,M.__webglTexture),Z.version!==Z.__currentVersion||W===!0){i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const rt=_.isCompressedTexture||_.image[0].isCompressedTexture,pt=_.image[0]&&_.image[0].isDataTexture,B=[];for(let q=0;q<6;q++)!rt&&!pt?B[q]=E(_.image[q],!1,!0,c):B[q]=pt?_.image[q].image:_.image[q],B[q]=it(_,B[q]);const yt=B[0],mt=b(yt)||o,St=r.convert(_.format,_.encoding),_t=r.convert(_.type),Rt=v(_.internalFormat,St,_t,_.encoding),Pt=o&&_.isVideoTexture!==!0,Wt=Z.__currentVersion===void 0||W===!0;let D=A(_,yt,mt);j(34067,_,mt);let vt;if(rt){Pt&&Wt&&e.texStorage2D(34067,D,Rt,yt.width,yt.height);for(let q=0;q<6;q++){vt=B[q].mipmaps;for(let xt=0;xt<vt.length;xt++){const gt=vt[xt];_.format!==fn?St!==null?Pt?e.compressedTexSubImage2D(34069+q,xt,0,0,gt.width,gt.height,St,gt.data):e.compressedTexImage2D(34069+q,xt,Rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+q,xt,0,0,gt.width,gt.height,St,_t,gt.data):e.texImage2D(34069+q,xt,Rt,gt.width,gt.height,0,St,_t,gt.data)}}}else{vt=_.mipmaps,Pt&&Wt&&(vt.length>0&&D++,e.texStorage2D(34067,D,Rt,B[0].width,B[0].height));for(let q=0;q<6;q++)if(pt){Pt?e.texSubImage2D(34069+q,0,0,0,B[q].width,B[q].height,St,_t,B[q].data):e.texImage2D(34069+q,0,Rt,B[q].width,B[q].height,0,St,_t,B[q].data);for(let xt=0;xt<vt.length;xt++){const qt=vt[xt].image[q].image;Pt?e.texSubImage2D(34069+q,xt+1,0,0,qt.width,qt.height,St,_t,qt.data):e.texImage2D(34069+q,xt+1,Rt,qt.width,qt.height,0,St,_t,qt.data)}}else{Pt?e.texSubImage2D(34069+q,0,0,0,St,_t,B[q]):e.texImage2D(34069+q,0,Rt,St,_t,B[q]);for(let xt=0;xt<vt.length;xt++){const gt=vt[xt];Pt?e.texSubImage2D(34069+q,xt+1,0,0,St,_t,gt.image[q]):e.texImage2D(34069+q,xt+1,Rt,St,_t,gt.image[q])}}}P(_,mt)&&z(34067),Z.__currentVersion=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Mt(M,_,I,W,Z){const rt=r.convert(I.format,I.encoding),pt=r.convert(I.type),B=v(I.internalFormat,rt,pt,I.encoding);n.get(_).__hasExternalTextures||(Z===32879||Z===35866?e.texImage3D(Z,0,B,_.width,_.height,_.depth,0,rt,pt,null):e.texImage2D(Z,0,B,_.width,_.height,0,rt,pt,null)),e.bindFramebuffer(36160,M),tt(_)?f.framebufferTexture2DMultisampleEXT(36160,W,Z,n.get(I).__webglTexture,0,ht(_)):i.framebufferTexture2D(36160,W,Z,n.get(I).__webglTexture,0),e.bindFramebuffer(36160,null)}function jt(M,_,I){if(i.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let W=33189;if(I||tt(_)){const Z=_.depthTexture;Z&&Z.isDepthTexture&&(Z.type===li?W=36012:Z.type===ai&&(W=33190));const rt=ht(_);tt(_)?f.renderbufferStorageMultisampleEXT(36161,rt,W,_.width,_.height):i.renderbufferStorageMultisample(36161,rt,W,_.width,_.height)}else i.renderbufferStorage(36161,W,_.width,_.height);i.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const W=ht(_);I&&tt(_)===!1?i.renderbufferStorageMultisample(36161,W,35056,_.width,_.height):tt(_)?f.renderbufferStorageMultisampleEXT(36161,W,35056,_.width,_.height):i.renderbufferStorage(36161,34041,_.width,_.height),i.framebufferRenderbuffer(36160,33306,36161,M)}else{const W=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Z=0;Z<W.length;Z++){const rt=W[Z],pt=r.convert(rt.format,rt.encoding),B=r.convert(rt.type),yt=v(rt.internalFormat,pt,B,rt.encoding),mt=ht(_);I&&tt(_)===!1?i.renderbufferStorageMultisample(36161,mt,yt,_.width,_.height):tt(_)?f.renderbufferStorageMultisampleEXT(36161,mt,yt,_.width,_.height):i.renderbufferStorage(36161,yt,_.width,_.height)}}i.bindRenderbuffer(36161,null)}function T(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);const W=n.get(_.depthTexture).__webglTexture,Z=ht(_);if(_.depthTexture.format===fi)tt(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,Z):i.framebufferTexture2D(36160,36096,3553,W,0);else if(_.depthTexture.format===Qi)tt(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,Z):i.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function C(M){const _=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");T(_.__webglFramebuffer,M)}else if(I){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)e.bindFramebuffer(36160,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]=i.createRenderbuffer(),jt(_.__webglDepthbuffer[W],M,!1)}else e.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),jt(_.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function V(M,_,I){const W=n.get(M);_!==void 0&&Mt(W.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&C(M)}function K(M){const _=M.texture,I=n.get(M),W=n.get(_);M.addEventListener("dispose",ot),M.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++);const Z=M.isWebGLCubeRenderTarget===!0,rt=M.isWebGLMultipleRenderTargets===!0,pt=b(M)||o;if(Z){I.__webglFramebuffer=[];for(let B=0;B<6;B++)I.__webglFramebuffer[B]=i.createFramebuffer()}else{if(I.__webglFramebuffer=i.createFramebuffer(),rt)if(s.drawBuffers){const B=M.texture;for(let yt=0,mt=B.length;yt<mt;yt++){const St=n.get(B[yt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&tt(M)===!1){const B=rt?_:[_];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let yt=0;yt<B.length;yt++){const mt=B[yt];I.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(36161,I.__webglColorRenderbuffer[yt]);const St=r.convert(mt.format,mt.encoding),_t=r.convert(mt.type),Rt=v(mt.internalFormat,St,_t,mt.encoding),Pt=ht(M);i.renderbufferStorageMultisample(36161,Pt,Rt,M.width,M.height),i.framebufferRenderbuffer(36160,36064+yt,36161,I.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),jt(I.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}}if(Z){e.bindTexture(34067,W.__webglTexture),j(34067,_,pt);for(let B=0;B<6;B++)Mt(I.__webglFramebuffer[B],M,_,36064,34069+B);P(_,pt)&&z(34067),e.unbindTexture()}else if(rt){const B=M.texture;for(let yt=0,mt=B.length;yt<mt;yt++){const St=B[yt],_t=n.get(St);e.bindTexture(3553,_t.__webglTexture),j(3553,St,pt),Mt(I.__webglFramebuffer,M,St,36064+yt,3553),P(St,pt)&&z(3553)}e.unbindTexture()}else{let B=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?B=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(B,W.__webglTexture),j(B,_,pt),Mt(I.__webglFramebuffer,M,_,36064,B),P(_,pt)&&z(B),e.unbindTexture()}M.depthBuffer&&C(M)}function Y(M){const _=b(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let W=0,Z=I.length;W<Z;W++){const rt=I[W];if(P(rt,_)){const pt=M.isWebGLCubeRenderTarget?34067:3553,B=n.get(rt).__webglTexture;e.bindTexture(pt,B),z(pt),e.unbindTexture()}}}function at(M){if(o&&M.samples>0&&tt(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,W=M.height;let Z=16384;const rt=[],pt=M.stencilBuffer?33306:36096,B=n.get(M),yt=M.isWebGLMultipleRenderTargets===!0;if(yt)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+mt,36161,null),e.bindFramebuffer(36160,B.__webglFramebuffer),i.framebufferTexture2D(36009,36064+mt,3553,null,0);e.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,B.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){rt.push(36064+mt),M.depthBuffer&&rt.push(pt);const St=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(St===!1&&(M.depthBuffer&&(Z|=256),M.stencilBuffer&&(Z|=1024)),yt&&i.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[mt]),St===!0&&(i.invalidateFramebuffer(36008,[pt]),i.invalidateFramebuffer(36009,[pt])),yt){const _t=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,_t,0)}i.blitFramebuffer(0,0,I,W,0,0,I,W,Z,9728),m&&i.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),yt)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+mt,36161,B.__webglColorRenderbuffer[mt]);const St=n.get(_[mt]).__webglTexture;e.bindFramebuffer(36160,B.__webglFramebuffer),i.framebufferTexture2D(36009,36064+mt,3553,St,0)}e.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function ht(M){return Math.min(u,M.samples)}function tt(M){const _=n.get(M);return o&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(M){const _=a.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function it(M,_){const I=M.encoding,W=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===jo||I!==gi&&(I===ie?o===!1?t.has("EXT_sRGB")===!0&&W===fn?(M.format=jo,M.minFilter=Ve,M.generateMipmaps=!1):_=Dh.sRGBToLinear(_):(W!==fn||Z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),_}this.allocateTextureUnit=k,this.resetTextureUnits=nt,this.setTexture2D=H,this.setTexture2DArray=lt,this.setTexture3D=st,this.setTextureCube=ct,this.rebindTextures=V,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=tt}function I0(i,t,e){const n=e.isWebGL2;function s(r,a=null){let o;if(r===mi)return 5121;if(r===mp)return 32819;if(r===gp)return 32820;if(r===fp)return 5120;if(r===dp)return 5122;if(r===Ch)return 5123;if(r===pp)return 5124;if(r===ai)return 5125;if(r===li)return 5126;if(r===Ls)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_p)return 6406;if(r===fn)return 6408;if(r===vp)return 6409;if(r===Mp)return 6410;if(r===fi)return 6402;if(r===Qi)return 34041;if(r===yp)return 6403;if(r===xp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===jo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===bp)return 36244;if(r===Sp)return 33319;if(r===wp)return 33320;if(r===Tp)return 36249;if(r===Xr||r===jr||r===Yr||r===Zr)if(a===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dl||r===pl||r===ml||r===gl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ep)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_l||r===xl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===_l)return a===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===xl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vl||r===Ml||r===yl||r===bl||r===Sl||r===wl||r===Tl||r===El||r===Al||r===Cl||r===Pl||r===Ll||r===Rl||r===Dl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===vl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ml)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===El)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Al)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ll)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dl)return a===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Il)return a===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Xi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class F0 extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gi extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const w=new Gi;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[p.jointName]=w,c.add(w)}const x=c.joints[p.jointName];d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class N0 extends nn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:fi,h!==fi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=ai),n===void 0&&h===Qi&&(n=Xi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1}}class O0 extends vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const x=[],w=[],E=new ke;E.layers.enable(1),E.viewport=new fe;const b=new ke;b.layers.enable(2),b.viewport=new fe;const S=[E,b],P=new F0;P.layers.enable(1),P.layers.enable(2);let z=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let H=x[O];return H===void 0&&(H=new bo,x[O]=H),H.getTargetRaySpace()},this.getControllerGrip=function(O){let H=x[O];return H===void 0&&(H=new bo,x[O]=H),H.getGripSpace()},this.getHand=function(O){let H=x[O];return H===void 0&&(H=new bo,x[O]=H),H.getHandSpace()};function A(O){const H=w.indexOf(O.inputSource);if(H===-1)return;const lt=x[H];lt!==void 0&&lt.dispatchEvent({type:O.type,data:O.inputSource})}function R(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",Q);for(let O=0;O<x.length;O++){const H=w[O];H!==null&&(w[O]=null,x[O].disconnect(H))}z=null,v=null,t.setRenderTarget(p),f=null,u=null,h=null,s=null,d=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",R),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:f}),d=new _i(f.framebufferWidth,f.framebufferHeight,{format:fn,type:mi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,lt=null,st=null;g.depth&&(st=g.stencil?35056:33190,H=g.stencil?Qi:fi,lt=g.stencil?Xi:ai);const ct={colorFormat:32856,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),d=new _i(u.textureWidth,u.textureHeight,{format:fn,type:mi,depthTexture:new N0(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const bt=t.properties.get(d);bt.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Q(O){for(let H=0;H<O.removed.length;H++){const lt=O.removed[H],st=w.indexOf(lt);st>=0&&(w[st]=null,x[st].dispatchEvent({type:"disconnected",data:lt}))}for(let H=0;H<O.added.length;H++){const lt=O.added[H];let st=w.indexOf(lt);if(st===-1){for(let bt=0;bt<x.length;bt++)if(bt>=w.length){w.push(lt),st=bt;break}else if(w[bt]===null){w[bt]=lt,st=bt;break}if(st===-1)break}const ct=x[st];ct&&ct.dispatchEvent({type:"connected",data:lt})}}const ot=new L,G=new L;function F(O,H,lt){ot.setFromMatrixPosition(H.matrixWorld),G.setFromMatrixPosition(lt.matrixWorld);const st=ot.distanceTo(G),ct=H.projectionMatrix.elements,bt=lt.projectionMatrix.elements,Ct=ct[14]/(ct[10]-1),j=ct[14]/(ct[10]+1),Gt=(ct[9]+1)/ct[5],At=(ct[9]-1)/ct[5],Et=(ct[8]-1)/ct[0],Mt=(bt[8]+1)/bt[0],jt=Ct*Et,T=Ct*Mt,C=st/(-Et+Mt),V=C*-Et;H.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(V),O.translateZ(C),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const K=Ct+C,Y=j+C,at=jt-V,ht=T+(st-V),tt=Gt*j/Y*K,ut=At*j/Y*K;O.projectionMatrix.makePerspective(at,ht,tt,ut,K,Y)}function J(O,H){H===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(H.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;P.near=b.near=E.near=O.near,P.far=b.far=E.far=O.far,(z!==P.near||v!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,v=P.far);const H=O.parent,lt=P.cameras;J(P,H);for(let ct=0;ct<lt.length;ct++)J(lt[ct],H);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),O.matrix.copy(P.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const st=O.children;for(let ct=0,bt=st.length;ct<bt;ct++)st[ct].updateMatrixWorld(!0);lt.length===2?F(P,E,b):P.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let et=null;function nt(O,H){if(c=H.getViewerPose(l||a),m=H,c!==null){const lt=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let st=!1;lt.length!==P.cameras.length&&(P.cameras.length=0,st=!0);for(let ct=0;ct<lt.length;ct++){const bt=lt[ct];let Ct=null;if(f!==null)Ct=f.getViewport(bt);else{const Gt=h.getViewSubImage(u,bt);Ct=Gt.viewport,ct===0&&(t.setRenderTargetTextures(d,Gt.colorTexture,u.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(d))}let j=S[ct];j===void 0&&(j=new ke,j.layers.enable(ct),j.viewport=new fe,S[ct]=j),j.matrix.fromArray(bt.transform.matrix),j.projectionMatrix.fromArray(bt.projectionMatrix),j.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ct===0&&P.matrix.copy(j.matrix),st===!0&&P.cameras.push(j)}}for(let lt=0;lt<x.length;lt++){const st=w[lt],ct=x[lt];st!==null&&ct!==void 0&&ct.update(st,H,l||a)}et&&et(O,H),m=null}const k=new Bh;k.setAnimationLoop(nt),this.setAnimationLoop=function(O){et=O},this.dispose=function(){}}}function U0(i,t){function e(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,x,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===qe&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===qe&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let E;d.aoMap?E=d.aoMap:d.lightMap&&(E=d.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,x,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=w*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E;d.map?E=d.map:d.alphaMap&&(E=d.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===qe&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function B0(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(35375):0;function l(w,E){const b=E.program;n.uniformBlockBinding(w,b)}function c(w,E){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",d));const S=E.program;n.updateUBOMapping(w,S);const P=t.render.frame;r[w.id]!==P&&(f(w),r[w.id]=P)}function h(w){const E=u();w.__bindingPointIndex=E;const b=i.createBuffer(),S=w.__size,P=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,S,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,E,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=s[w.id],b=w.uniforms,S=w.__cache;i.bindBuffer(35345,E);for(let P=0,z=b.length;P<z;P++){const v=b[P];if(m(v,P,S)===!0){const A=v.value,R=v.__offset;typeof A=="number"?(v.__data[0]=A,i.bufferSubData(35345,R,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),i.bufferSubData(35345,R,v.__data))}}i.bindBuffer(35345,null)}function m(w,E,b){const S=w.value;if(b[E]===void 0)return typeof S=="number"?b[E]=S:b[E]=S.clone(),!0;if(typeof S=="number"){if(b[E]!==S)return b[E]=S,!0}else{const P=b[E];if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(w){const E=w.uniforms;let b=0;const S=16;let P=0;for(let z=0,v=E.length;z<v;z++){const A=E[z],R=p(A);if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,z>0){P=b%S;const Q=S-P;P!==0&&Q-R.boundary<0&&(b+=S-P,A.__offset=b)}b+=R.storage}return P=b%S,P>0&&(b+=S-P),w.__size=b,w.__cache={},this}function p(w){const E=w.value,b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function d(w){const E=w.target;E.removeEventListener("dispose",d);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function x(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:x}}function G0(){const i=br("canvas");return i.style.display="block",i}function qh(i={}){this.isWebGLRenderer=!0;const t=i.canvas!==void 0?i.canvas:G0(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,x=0,w=0,E=null,b=-1,S=null;const P=new fe,z=new fe;let v=null,A=t.width,R=t.height,Q=1,ot=null,G=null;const F=new fe(0,0,A,R),J=new fe(0,0,A,R);let et=!1;const nt=new Ta;let k=!1,O=!1,H=null;const lt=new Ut,st=new Ht,ct=new L,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return E===null?Q:1}let j=e;function Gt(y,U){for(let X=0;X<y.length;X++){const N=y[X],$=t.getContext(N,U);if($!==null)return $}return null}try{const y={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),j===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),j=Gt(U,y),j===null)throw Gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let At,Et,Mt,jt,T,C,V,K,Y,at,ht,tt,ut,it,M,_,I,W,Z,rt,pt,B,yt,mt;function St(){At=new K_(j),Et=new q_(j,At,i),At.init(Et),B=new I0(j,At,Et),Mt=new R0(j,At,Et),jt=new tx,T=new _0,C=new D0(j,At,Mt,T,Et,B,jt),V=new j_(p),K=new $_(p),Y=new um(j,Et),yt=new H_(j,At,Y,Et),at=new J_(j,Y,jt,yt),ht=new sx(j,at,Y,jt),Z=new ix(j,Et,C),_=new X_(T),tt=new g0(p,V,K,At,Et,yt,_),ut=new U0(p,T),it=new v0,M=new T0(At,Et),W=new k_(p,V,Mt,ht,h,a),I=new L0(p,ht,Et),mt=new B0(j,jt,Et,Mt),rt=new W_(j,At,jt,Et),pt=new Q_(j,At,jt,Et),jt.programs=tt.programs,p.capabilities=Et,p.extensions=At,p.properties=T,p.renderLists=it,p.shadowMap=I,p.state=Mt,p.info=jt}St();const _t=new O0(p,j);this.xr=_t,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const y=At.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=At.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(A,R,!1))},this.getSize=function(y){return y.set(A,R)},this.setSize=function(y,U,X){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,R=U,t.width=Math.floor(y*Q),t.height=Math.floor(U*Q),X!==!1&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(A*Q,R*Q).floor()},this.setDrawingBufferSize=function(y,U,X){A=y,R=U,Q=X,t.width=Math.floor(y*X),t.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(F)},this.setViewport=function(y,U,X,N){y.isVector4?F.set(y.x,y.y,y.z,y.w):F.set(y,U,X,N),Mt.viewport(P.copy(F).multiplyScalar(Q).floor())},this.getScissor=function(y){return y.copy(J)},this.setScissor=function(y,U,X,N){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,U,X,N),Mt.scissor(z.copy(J).multiplyScalar(Q).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){Mt.setScissorTest(et=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){G=y},this.getClearColor=function(y){return y.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(y=!0,U=!0,X=!0){let N=0;y&&(N|=16384),U&&(N|=256),X&&(N|=1024),j.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),it.dispose(),M.dispose(),T.dispose(),V.dispose(),K.dispose(),ht.dispose(),yt.dispose(),mt.dispose(),tt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",qt),_t.removeEventListener("sessionend",he),H&&(H.dispose(),H=null),se.stop()};function Rt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const y=jt.autoReset,U=I.enabled,X=I.autoUpdate,N=I.needsUpdate,$=I.type;St(),jt.autoReset=y,I.enabled=U,I.autoUpdate=X,I.needsUpdate=N,I.type=$}function Wt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function D(y){const U=y.target;U.removeEventListener("dispose",D),vt(U)}function vt(y){q(y),T.remove(y)}function q(y){const U=T.get(y).programs;U!==void 0&&(U.forEach(function(X){tt.releaseProgram(X)}),y.isShaderMaterial&&tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,N,$,Tt){U===null&&(U=bt);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,zt=$h(y,U,X,N,$);Mt.setMaterial(N,Lt);let Dt=X.index;const Zt=X.attributes.position;if(Dt===null){if(Zt===void 0||Zt.count===0)return}else if(Dt.count===0)return;let Vt=1;N.wireframe===!0&&(Dt=at.getWireframeAttribute(X),Vt=2),yt.setup($,N,zt,X,Dt);let kt,ee=rt;Dt!==null&&(kt=Y.get(Dt),ee=pt,ee.setIndex(kt));const Xn=Dt!==null?Dt.count:Zt.count,Mi=X.drawRange.start*Vt,yi=X.drawRange.count*Vt,sn=Tt!==null?Tt.start*Vt:0,Yt=Tt!==null?Tt.count*Vt:1/0,bi=Math.max(Mi,sn),re=Math.min(Xn,Mi+yi,sn+Yt)-1,Oe=Math.max(0,re-bi+1);if(Oe!==0){if($.isMesh)N.wireframe===!0?(Mt.setLineWidth(N.wireframeLinewidth*Ct()),ee.setMode(1)):ee.setMode(4);else if($.isLine){let Pn=N.linewidth;Pn===void 0&&(Pn=1),Mt.setLineWidth(Pn*Ct()),$.isLineSegments?ee.setMode(1):$.isLineLoop?ee.setMode(2):ee.setMode(3)}else $.isPoints?ee.setMode(0):$.isSprite&&ee.setMode(4);if($.isInstancedMesh)ee.renderInstances(bi,Oe,$.count);else if(X.isInstancedBufferGeometry){const Pn=Math.min(X.instanceCount,X._maxInstanceCount);ee.renderInstances(bi,Oe,Pn)}else ee.render(bi,Oe)}},this.compile=function(y,U){function X(N,$,Tt){N.transparent===!0&&N.side===Bn?(N.side=qe,N.needsUpdate=!0,Is(N,$,Tt),N.side=$i,N.needsUpdate=!0,Is(N,$,Tt),N.side=Bn):Is(N,$,Tt)}f=M.get(y),f.init(),g.push(f),y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let Tt=0;Tt<$.length;Tt++){const Lt=$[Tt];X(Lt,y,N)}else X($,y,N)}),g.pop(),f=null};let xt=null;function gt(y){xt&&xt(y)}function qt(){se.stop()}function he(){se.start()}const se=new Bh;se.setAnimationLoop(gt),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(y){xt=y,_t.setAnimationLoop(y),y===null?se.stop():se.start()},_t.addEventListener("sessionstart",qt),_t.addEventListener("sessionend",he),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(U),U=_t.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,E),f=M.get(y,g.length),f.init(),g.push(f),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(lt),O=this.localClippingEnabled,k=_.init(this.clippingPlanes,O,U),u=it.get(y,m.length),u.init(),m.push(u),Cn(y,U,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(ot,G),k===!0&&_.beginShadows();const X=f.state.shadowsArray;if(I.render(X,y,U),k===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(u,y),f.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let $=0,Tt=N.length;$<Tt;$++){const Lt=N[$];te(u,y,Lt,Lt.viewport)}}else te(u,y,U);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),y.isScene===!0&&y.onAfterRender(p,y,U),yt.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Cn(y,U,X,N){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){N&&ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);const Lt=ht.update(y),zt=y.material;zt.visible&&u.push(y,Lt,zt,X,ct.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==jt.render.frame&&(y.skeleton.update(),y.skeleton.frame=jt.render.frame),!y.frustumCulled||nt.intersectsObject(y))){N&&ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);const Lt=ht.update(y),zt=y.material;if(Array.isArray(zt)){const Dt=Lt.groups;for(let Zt=0,Vt=Dt.length;Zt<Vt;Zt++){const kt=Dt[Zt],ee=zt[kt.materialIndex];ee&&ee.visible&&u.push(y,Lt,ee,X,ct.z,kt)}}else zt.visible&&u.push(y,Lt,zt,X,ct.z,null)}}const Tt=y.children;for(let Lt=0,zt=Tt.length;Lt<zt;Lt++)Cn(Tt[Lt],U,X,N)}function te(y,U,X,N){const $=y.opaque,Tt=y.transmissive,Lt=y.transparent;f.setupLightsView(X),Tt.length>0&&mn($,U,X),N&&Mt.viewport(P.copy(N)),$.length>0&&Ne($,U,X),Tt.length>0&&Ne(Tt,U,X),Lt.length>0&&Ne(Lt,U,X),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function mn(y,U,X){const N=Et.isWebGL2;H===null&&(H=new _i(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?Ls:mi,minFilter:Ir,samples:N&&r===!0?4:0})),p.getDrawingBufferSize(st),N?H.setSize(st.x,st.y):H.setSize(yr(st.x),yr(st.y));const $=p.getRenderTarget();p.setRenderTarget(H),p.clear();const Tt=p.toneMapping;p.toneMapping=Tn,Ne(y,U,X),p.toneMapping=Tt,C.updateMultisampleRenderTarget(H),C.updateRenderTargetMipmap(H),p.setRenderTarget($)}function Ne(y,U,X){const N=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Tt=y.length;$<Tt;$++){const Lt=y[$],zt=Lt.object,Dt=Lt.geometry,Zt=N===null?Lt.material:N,Vt=Lt.group;zt.layers.test(X.layers)&&Zh(zt,U,X,Dt,Zt,Vt)}}function Zh(y,U,X,N,$,Tt){y.onBeforeRender(p,U,X,N,$,Tt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(p,U,X,N,y,Tt),$.transparent===!0&&$.side===Bn?($.side=qe,$.needsUpdate=!0,p.renderBufferDirect(X,U,N,$,y,Tt),$.side=$i,$.needsUpdate=!0,p.renderBufferDirect(X,U,N,$,y,Tt),$.side=Bn):p.renderBufferDirect(X,U,N,$,y,Tt),y.onAfterRender(p,U,X,N,$,Tt)}function Is(y,U,X){U.isScene!==!0&&(U=bt);const N=T.get(y),$=f.state.lights,Tt=f.state.shadowsArray,Lt=$.state.version,zt=tt.getParameters(y,$.state,Tt,U,X),Dt=tt.getProgramCacheKey(zt);let Zt=N.programs;N.environment=y.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(y.isMeshStandardMaterial?K:V).get(y.envMap||N.environment),Zt===void 0&&(y.addEventListener("dispose",D),Zt=new Map,N.programs=Zt);let Vt=Zt.get(Dt);if(Vt!==void 0){if(N.currentProgram===Vt&&N.lightsStateVersion===Lt)return Pa(y,zt),Vt}else zt.uniforms=tt.getUniforms(y),y.onBuild(X,zt,p),y.onBeforeCompile(zt,p),Vt=tt.acquireProgram(zt,Dt),Zt.set(Dt,Vt),N.uniforms=zt.uniforms;const kt=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(kt.clippingPlanes=_.uniform),Pa(y,zt),N.needsLights=Jh(y),N.lightsStateVersion=Lt,N.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMap.value=$.state.directionalShadowMap,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotShadowMap.value=$.state.spotShadowMap,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMap.value=$.state.pointShadowMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix);const ee=Vt.getUniforms(),Xn=dr.seqWithValue(ee.seq,kt);return N.currentProgram=Vt,N.uniformsList=Xn,Vt}function Pa(y,U){const X=T.get(y);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function $h(y,U,X,N,$){U.isScene!==!0&&(U=bt),C.resetTextureUnits();const Tt=U.fog,Lt=N.isMeshStandardMaterial?U.environment:null,zt=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:gi,Dt=(N.isMeshStandardMaterial?K:V).get(N.envMap||Lt),Zt=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!N.normalMap&&!!X.attributes.tangent,kt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,Xn=!!X.morphAttributes.color,Mi=N.toneMapped?p.toneMapping:Tn,yi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,sn=yi!==void 0?yi.length:0,Yt=T.get(N),bi=f.state.lights;if(k===!0&&(O===!0||y!==S)){const Re=y===S&&N.id===b;_.setState(N,y,Re)}let re=!1;N.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==bi.state.version||Yt.outputEncoding!==zt||$.isInstancedMesh&&Yt.instancing===!1||!$.isInstancedMesh&&Yt.instancing===!0||$.isSkinnedMesh&&Yt.skinning===!1||!$.isSkinnedMesh&&Yt.skinning===!0||Yt.envMap!==Dt||N.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==_.numPlanes||Yt.numIntersection!==_.numIntersection)||Yt.vertexAlphas!==Zt||Yt.vertexTangents!==Vt||Yt.morphTargets!==kt||Yt.morphNormals!==ee||Yt.morphColors!==Xn||Yt.toneMapping!==Mi||Et.isWebGL2===!0&&Yt.morphTargetsCount!==sn)&&(re=!0):(re=!0,Yt.__version=N.version);let Oe=Yt.currentProgram;re===!0&&(Oe=Is(N,U,$));let Pn=!1,hs=!1,zr=!1;const we=Oe.getUniforms(),jn=Yt.uniforms;if(Mt.useProgram(Oe.program)&&(Pn=!0,hs=!0,zr=!0),N.id!==b&&(b=N.id,hs=!0),Pn||S!==y){if(we.setValue(j,"projectionMatrix",y.projectionMatrix),Et.logarithmicDepthBuffer&&we.setValue(j,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,hs=!0,zr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Re=we.map.cameraPosition;Re!==void 0&&Re.setValue(j,ct.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&we.setValue(j,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&we.setValue(j,"viewMatrix",y.matrixWorldInverse)}if($.isSkinnedMesh){we.setOptional(j,$,"bindMatrix"),we.setOptional(j,$,"bindMatrixInverse");const Re=$.skeleton;Re&&(Et.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),we.setValue(j,"boneTexture",Re.boneTexture,C),we.setValue(j,"boneTextureSize",Re.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nr=X.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0&&Et.isWebGL2===!0)&&Z.update($,X,N,Oe),(hs||Yt.receiveShadow!==$.receiveShadow)&&(Yt.receiveShadow=$.receiveShadow,we.setValue(j,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(jn.envMap.value=Dt,jn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),hs&&(we.setValue(j,"toneMappingExposure",p.toneMappingExposure),Yt.needsLights&&Kh(jn,zr),Tt&&N.fog===!0&&ut.refreshFogUniforms(jn,Tt),ut.refreshMaterialUniforms(jn,N,Q,R,H),dr.upload(j,Yt.uniformsList,jn,C)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(dr.upload(j,Yt.uniformsList,jn,C),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&we.setValue(j,"center",$.center),we.setValue(j,"modelViewMatrix",$.modelViewMatrix),we.setValue(j,"normalMatrix",$.normalMatrix),we.setValue(j,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Re=N.uniformsGroups;for(let Or=0,Qh=Re.length;Or<Qh;Or++)if(Et.isWebGL2){const La=Re[Or];mt.update(La,Oe),mt.bind(La,Oe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oe}function Kh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(y,U,X){T.get(y.texture).__webglTexture=U,T.get(y.depthTexture).__webglTexture=X;const N=T.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const X=T.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){E=y,x=U,w=X;let N=!0;if(y){const Dt=T.get(y);Dt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(36160,null),N=!1):Dt.__webglFramebuffer===void 0?C.setupRenderTarget(y):Dt.__hasExternalTextures&&C.rebindTextures(y,T.get(y.texture).__webglTexture,T.get(y.depthTexture).__webglTexture)}let $=null,Tt=!1,Lt=!1;if(y){const Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture)&&(Lt=!0);const Zt=T.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?($=Zt[U],Tt=!0):Et.isWebGL2&&y.samples>0&&C.useMultisampledRTT(y)===!1?$=T.get(y).__webglMultisampledFramebuffer:$=Zt,P.copy(y.viewport),z.copy(y.scissor),v=y.scissorTest}else P.copy(F).multiplyScalar(Q).floor(),z.copy(J).multiplyScalar(Q).floor(),v=et;if(Mt.bindFramebuffer(36160,$)&&Et.drawBuffers&&N&&Mt.drawBuffers(y,$),Mt.viewport(P),Mt.scissor(z),Mt.setScissorTest(v),Tt){const Dt=T.get(y.texture);j.framebufferTexture2D(36160,36064,34069+U,Dt.__webglTexture,X)}else if(Lt){const Dt=T.get(y.texture),Zt=U||0;j.framebufferTextureLayer(36160,36064,Dt.__webglTexture,X||0,Zt)}b=-1},this.readRenderTargetPixels=function(y,U,X,N,$,Tt,Lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){Mt.bindFramebuffer(36160,zt);try{const Dt=y.texture,Zt=Dt.format,Vt=Dt.type;if(Zt!==fn&&B.convert(Zt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Vt===Ls&&(At.has("EXT_color_buffer_half_float")||Et.isWebGL2&&At.has("EXT_color_buffer_float"));if(Vt!==mi&&B.convert(Vt)!==j.getParameter(35738)&&!(Vt===li&&(Et.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-N&&X>=0&&X<=y.height-$&&j.readPixels(U,X,N,$,B.convert(Zt),B.convert(Vt),Tt)}finally{const Dt=E!==null?T.get(E).__webglFramebuffer:null;Mt.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(y,U,X=0){const N=Math.pow(2,-X),$=Math.floor(U.image.width*N),Tt=Math.floor(U.image.height*N);C.setTexture2D(U,0),j.copyTexSubImage2D(3553,X,0,0,y.x,y.y,$,Tt),Mt.unbindTexture()},this.copyTextureToTexture=function(y,U,X,N=0){const $=U.image.width,Tt=U.image.height,Lt=B.convert(X.format),zt=B.convert(X.type);C.setTexture2D(X,0),j.pixelStorei(37440,X.flipY),j.pixelStorei(37441,X.premultiplyAlpha),j.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?j.texSubImage2D(3553,N,y.x,y.y,$,Tt,Lt,zt,U.image.data):U.isCompressedTexture?j.compressedTexSubImage2D(3553,N,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,Lt,U.mipmaps[0].data):j.texSubImage2D(3553,N,y.x,y.y,Lt,zt,U.image),N===0&&X.generateMipmaps&&j.generateMipmap(3553),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,X,N,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=y.max.x-y.min.x+1,Lt=y.max.y-y.min.y+1,zt=y.max.z-y.min.z+1,Dt=B.convert(N.format),Zt=B.convert(N.type);let Vt;if(N.isData3DTexture)C.setTexture3D(N,0),Vt=32879;else if(N.isDataArrayTexture)C.setTexture2DArray(N,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,N.flipY),j.pixelStorei(37441,N.premultiplyAlpha),j.pixelStorei(3317,N.unpackAlignment);const kt=j.getParameter(3314),ee=j.getParameter(32878),Xn=j.getParameter(3316),Mi=j.getParameter(3315),yi=j.getParameter(32877),sn=X.isCompressedTexture?X.mipmaps[0]:X.image;j.pixelStorei(3314,sn.width),j.pixelStorei(32878,sn.height),j.pixelStorei(3316,y.min.x),j.pixelStorei(3315,y.min.y),j.pixelStorei(32877,y.min.z),X.isDataTexture||X.isData3DTexture?j.texSubImage3D(Vt,$,U.x,U.y,U.z,Tt,Lt,zt,Dt,Zt,sn.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Vt,$,U.x,U.y,U.z,Tt,Lt,zt,Dt,sn.data)):j.texSubImage3D(Vt,$,U.x,U.y,U.z,Tt,Lt,zt,Dt,Zt,sn),j.pixelStorei(3314,kt),j.pixelStorei(32878,ee),j.pixelStorei(3316,Xn),j.pixelStorei(3315,Mi),j.pixelStorei(32877,yi),$===0&&N.generateMipmaps&&j.generateMipmap(Vt),Mt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?C.setTextureCube(y,0):y.isData3DTexture?C.setTexture3D(y,0):y.isDataArrayTexture?C.setTexture2DArray(y,0):C.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){x=0,w=0,E=null,Mt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class V0 extends qh{}V0.prototype.isWebGL1Renderer=!0;class k0 extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class pi extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gc=new L,_c=new L,xc=new Ut,So=new ba,rr=new Rs;class bs extends de{constructor(t=new ye,e=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)gc.fromBufferAttribute(e,s-1),_c.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=gc.distanceTo(_c);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;xc.copy(s).invert(),So.copy(t.ray).applyMatrix4(xc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,f=new L,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const x=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let E=x,b=w-1;E<b;E+=m){const S=g.getX(E),P=g.getX(E+1);if(c.fromBufferAttribute(d,S),h.fromBufferAttribute(d,P),So.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let E=x,b=w-1;E<b;E+=m){if(c.fromBufferAttribute(d,E),h.fromBufferAttribute(d,E+1),So.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const vc=new L,Mc=new L;class Xh extends bs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vc.fromBufferAttribute(e,s),Mc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vc.distanceTo(Mc);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ht:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,l=new Ut;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(xe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class or extends H0{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new Ht,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ca extends ye{constructor(t=1,e=1,n=1,s=8,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const p=[],d=n/2;let x=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function w(){const b=new L,S=new L;let P=0;const z=(e-t)/n;for(let v=0;v<=r;v++){const A=[],R=v/r,Q=R*(e-t)+t;for(let ot=0;ot<=s;ot++){const G=ot/s,F=G*l+o,J=Math.sin(F),et=Math.cos(F);S.x=Q*J,S.y=-R*n+d,S.z=Q*et,u.push(S.x,S.y,S.z),b.set(J,z,et).normalize(),f.push(b.x,b.y,b.z),m.push(G,1-R),A.push(g++)}p.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){const R=p[A][v],Q=p[A+1][v],ot=p[A+1][v+1],G=p[A][v+1];h.push(R,Q,G),h.push(Q,ot,G),P+=6}c.addGroup(x,P,0),x+=P}function E(b){const S=g,P=new Ht,z=new L;let v=0;const A=b===!0?t:e,R=b===!0?1:-1;for(let ot=1;ot<=s;ot++)u.push(0,d*R,0),f.push(0,R,0),m.push(.5,.5),g++;const Q=g;for(let ot=0;ot<=s;ot++){const F=ot/s*l+o,J=Math.cos(F),et=Math.sin(F);z.x=A*et,z.y=d*R,z.z=A*J,u.push(z.x,z.y,z.z),f.push(0,R,0),P.x=J*.5+.5,P.y=et*.5*R+.5,m.push(P.x,P.y),g++}for(let ot=0;ot<s;ot++){const G=S+ot,F=Q+ot;b===!0?h.push(F,F+1,G):h.push(F+1,F,G),v+=3}c.addGroup(x,v,b===!0?1:2),x+=v}}static fromJSON(t){return new Ca(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class W0 extends as{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class jh extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const yc=new Ut,bc=new L,Sc=new L;class q0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class X0 extends q0{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DefaultUp),this.updateMatrix(),this.target=new de,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Y0 extends jh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z0{constructor(t,e,n=0,s=1/0){this.ray=new ba(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return $o(t,this,n,e),n.sort(wc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$o(t[s],this,n,e);return n.sort(wc),n}}function wc(i,t){return i.distance-t.distance}function $o(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)$o(s[r],t,e,!0)}}class Yh extends Xh{constructor(t=10,e=10,n=4473924,s=8947848){n=new Kt(n),s=new Kt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const p=f===r?n:s;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const h=new ye;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));const u=new pi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Tc=new L;let ar,wo;class To extends de{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ar===void 0&&(ar=new ye,ar.setAttribute("position",new me([0,0,0,0,1,0],3)),wo=new Ca(0,.5,1,5,1),wo.translate(0,-.5,0)),this.position.copy(e),this.line=new bs(ar,new pi({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dn(wo,new wa({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Tc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Tc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}}class $0 extends Xh{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ye;s.setAttribute("position",new me(e,3)),s.setAttribute("color",new me(n,3));const r=new pi({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Kt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const wt={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},$t={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},It={x:0,y:0},Fe={camera:new Ut,gizmos:new Ut},Jt={type:"change"},$e={type:"start"},Ge={type:"end"},K0=new Z0,ae=new L,Ec=new Ut,Ac=new Ut,Ke=new L;class J0 extends vi{constructor(e,n,s=null){super();ft(this,"onWindowResize",()=>{const e=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const n=this._tbRadius/e,r=new or(0,0,n,n).getPoints(this._curvePts),a=new ye().setFromPoints(r);for(const o in this._gizmos.children)this._gizmos.children[o].geometry=a;this.dispatchEvent(Jt)});ft(this,"onContextMenu",e=>{if(!!this.enabled){for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==2){e.preventDefault();break}}});ft(this,"onPointerCancel",()=>{this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=$t.NONE});ft(this,"onPointerDown",e=>{if(e.button==0&&e.isPrimary?(this._downValid=!0,this._downEvents.push(e),this._downStart=performance.now()):this._downValid=!1,e.pointerType=="touch"&&this._input!=$t.CURSOR)switch(this._touchStart.push(e),this._touchCurrent.push(e),this._input){case $t.NONE:this._input=$t.ONE_FINGER,this.onSinglePanStart(e,"ROTATE"),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp);break;case $t.ONE_FINGER:case $t.ONE_FINGER_SWITCHED:this._input=$t.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case $t.TWO_FINGER:this._input=$t.MULT_FINGER,this.onTriplePanStart(e);break}else if(e.pointerType!="touch"&&this._input==$t.NONE){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT"),this._mouseOp=this.getOpFromAction(e.button,n),this._mouseOp!=null&&(window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this._input=$t.CURSOR,this._button=e.button,this.onSinglePanStart(e,this._mouseOp))}});ft(this,"onPointerMove",e=>{if(e.pointerType=="touch"&&this._input!=$t.CURSOR)switch(this._input){case $t.ONE_FINGER:this.updateTouchEvent(e),this.onSinglePanMove(e,wt.ROTATE);break;case $t.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],e)*this._devPxRatio>=this._switchSensibility){this._input=$t.ONE_FINGER,this.updateTouchEvent(e),this.onSinglePanStart(e,"ROTATE");break}break;case $t.TWO_FINGER:this.updateTouchEvent(e),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case $t.MULT_FINGER:this.updateTouchEvent(e),this.onTriplePanMove(e);break}else if(e.pointerType!="touch"&&this._input==$t.CURSOR){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT");const s=this.getOpStateFromAction(this._button,n);s!=null&&this.onSinglePanMove(e,s)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],e)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)});ft(this,"onPointerUp",e=>{if(e.pointerType=="touch"&&this._input!=$t.CURSOR){const n=this._touchCurrent.length;for(let s=0;s<n;s++)if(this._touchCurrent[s].pointerId==e.pointerId){this._touchCurrent.splice(s,1),this._touchStart.splice(s,1);break}switch(this._input){case $t.ONE_FINGER:case $t.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=$t.NONE,this.onSinglePanEnd();break;case $t.TWO_FINGER:this.onDoublePanEnd(e),this.onPinchEnd(e),this.onRotateEnd(e),this._input=$t.ONE_FINGER_SWITCHED;break;case $t.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=$t.NONE,this.onTriplePanEnd());break}}else e.pointerType!="touch"&&this._input==$t.CURSOR&&(window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this._input=$t.NONE,this.onSinglePanEnd(),this._button=-1);if(e.isPrimary)if(this._downValid)if(e.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const s=e.timeStamp-this._clickStart,r=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;s<=this._maxInterval&&r<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(e)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)});ft(this,"onWheel",e=>{if(this.enabled&&this.enableZoom){let n=null;e.ctrlKey||e.metaKey?n="CTRL":e.shiftKey&&(n="SHIFT");const s=this.getOpFromAction("WHEEL",n);if(s!=null){e.preventDefault(),this.dispatchEvent($e);const r=125;let a=e.deltaY/r,o=1;switch(a>0?o=1/this.scaleFactor:a<0&&(o=this.scaleFactor),s){case"ZOOM":if(this.updateTbState(wt.SCALE,!0),a>0?o=1/Math.pow(this.scaleFactor,a):a<0&&(o=Math.pow(this.scaleFactor,-a)),this.cursorZoom&&this.enablePan){let l;this.camera.isOrthographicCamera?l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(l=this.unprojectOnTbPlane(this.camera,e.clientX,e.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(o,l))}else this.applyTransformMatrix(this.scale(o,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Jt),this.dispatchEvent(Ge);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(wt.FOV,!0),e.deltaX!=0&&(a=e.deltaX/r,o=1,a>0?o=1/Math.pow(this.scaleFactor,a):a<0&&(o=Math.pow(this.scaleFactor,-a))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/o;c=ne.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(ne.DEG2RAD*this.camera.fov*.5);let u=ne.RAD2DEG*(Math.atan(h/c)*2);u>this.maxFov?u=this.maxFov:u<this.minFov&&(u=this.minFov);const f=h/Math.tan(ne.DEG2RAD*(u/2));o=l/f,this.setFov(u),this.applyTransformMatrix(this.scale(o,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Jt),this.dispatchEvent(Ge);break}}}});ft(this,"onSinglePanStart",(e,n)=>{if(this.enabled)switch(this.dispatchEvent($e),this.setCenter(e.clientX,e.clientY),n){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Jt)),this.updateTbState(wt.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Jt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(wt.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,It.x,It.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Jt);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Jt)),this.updateTbState(wt.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Jt)),this.updateTbState(wt.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}});ft(this,"onSinglePanMove",(e,n)=>{if(this.enabled){const s=n!=this._state;switch(this.setCenter(e.clientX,e.clientY),n){case wt.PAN:this.enablePan&&(s?(this.dispatchEvent(Ge),this.dispatchEvent($e),this.updateTbState(n,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case wt.ROTATE:if(this.enableRotate)if(s)this.dispatchEvent(Ge),this.dispatchEvent($e),this.updateTbState(n,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,It.x,It.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,It.x,It.y,this.domElement,this._tbRadius));const r=this._startCursorPosition.distanceTo(this._currentCursorPosition),a=this._startCursorPosition.angleTo(this._currentCursorPosition),o=Math.max(r/this._tbRadius,a);this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),o)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=o,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case wt.SCALE:if(this.enableZoom)if(s)this.dispatchEvent(Ge),this.dispatchEvent($e),this.updateTbState(n,!0),this._startCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let o=1;a<0?o=1/Math.pow(this.scaleFactor,-a*8):a>0&&(o=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(o,this._v3_1))}break;case wt.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(s)this.dispatchEvent(Ge),this.dispatchEvent($e),this.updateTbState(n,!0),this._startCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let o=1;a<0?o=1/Math.pow(this.scaleFactor,-a*8):a>0&&(o=Math.pow(this.scaleFactor,a*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/o;c=ne.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(ne.DEG2RAD*this._fovState*.5);let u=ne.RAD2DEG*(Math.atan(h/c)*2);u=ne.clamp(u,this.minFov,this.maxFov);const f=h/Math.tan(ne.DEG2RAD*(u/2));o=l/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(o,this._v3_2,!1)),ae.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(f/l),this._m4_1.makeTranslation(ae.x,ae.y,ae.z)}break}this.dispatchEvent(Jt)}});ft(this,"onSinglePanEnd",()=>{if(this._state==wt.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const n=Math.abs((this._wPrev+this._wCurr)/2),s=this;this._animationId=window.requestAnimationFrame(function(r){s.updateTbState(wt.ANIMATION_ROTATE,!0);const a=s.calculateRotationAxis(s._cursorPosPrev,s._cursorPosCurr);s.onRotationAnim(r,a,Math.min(n,s.wMax))})}else this.updateTbState(wt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Jt);else this.updateTbState(wt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Jt)}else(this._state==wt.PAN||this._state==wt.IDLE)&&(this.updateTbState(wt.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Jt));this.dispatchEvent(Ge)});ft(this,"onDoubleTap",e=>{if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent($e),this.setCenter(e.clientX,e.clientY);const n=this.unprojectOnObj(this.getCursorNDC(It.x,It.y,this.domElement),this.camera);if(n!=null&&this.enableAnimations){const s=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(r){s.updateTbState(wt.ANIMATION_FOCUS,!0),s.onFocusAnim(r,n,s._cameraMatrixState,s._gizmoMatrixState)})}else n!=null&&!this.enableAnimations&&(this.updateTbState(wt.FOCUS,!0),this.focus(n,this.scaleFactor),this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Jt))}this.dispatchEvent(Ge)});ft(this,"onDoublePanStart",()=>{this.enabled&&this.enablePan&&(this.dispatchEvent($e),this.updateTbState(wt.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))});ft(this,"onDoublePanMove",()=>{this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=wt.PAN&&(this.updateTbState(wt.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Jt))});ft(this,"onDoublePanEnd",()=>{this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Ge)});ft(this,"onRotateStart",()=>{this.enabled&&this.enableRotate&&(this.dispatchEvent($e),this.updateTbState(wt.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))});ft(this,"onRotateMove",()=>{if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=wt.ZROTATE&&(this.updateTbState(wt.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):e=new L().setFromMatrixPosition(this._gizmoMatrixState);const n=ne.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,n)),this.dispatchEvent(Jt)}});ft(this,"onRotateEnd",()=>{this.updateTbState(wt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ge)});ft(this,"onPinchStart",()=>{this.enabled&&this.enableZoom&&(this.dispatchEvent($e),this.updateTbState(wt.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))});ft(this,"onPinchMove",()=>{if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=wt.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(wt.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const n=this._currentFingerDistance/this._startFingerDistance;let s;this.enablePan?this.camera.isOrthographicCamera?s=this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(s=this.unprojectOnTbPlane(this.camera,It.x,It.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):s=this._gizmos.position,this.applyTransformMatrix(this.scale(n,s)),this.dispatchEvent(Jt)}});ft(this,"onPinchEnd",()=>{this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Ge)});ft(this,"onTriplePanStart",()=>{if(this.enabled&&this.enableZoom){this.dispatchEvent($e),this.updateTbState(wt.SCALE,!0);let e=0,n=0;const s=this._touchCurrent.length;for(let r=0;r<s;r++)e+=this._touchCurrent[r].clientX,n+=this._touchCurrent[r].clientY;this.setCenter(e/s,n/s),this._startCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}});ft(this,"onTriplePanMove",()=>{if(this.enabled&&this.enableZoom){let e=0,n=0;const s=this._touchCurrent.length;for(let m=0;m<s;m++)e+=this._touchCurrent[m].clientX,n+=this._touchCurrent[m].clientY;this.setCenter(e/s,n/s);const r=8;this._currentCursorPosition.setY(this.getCursorNDC(It.x,It.y,this.domElement).y*.5);const a=this._currentCursorPosition.y-this._startCursorPosition.y;let o=1;a<0?o=1/Math.pow(this.scaleFactor,-a*r):a>0&&(o=Math.pow(this.scaleFactor,a*r)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const l=this._v3_1.distanceTo(this._gizmos.position);let c=l/o;c=ne.clamp(c,this.minDistance,this.maxDistance);const h=l*Math.tan(ne.DEG2RAD*this._fovState*.5);let u=ne.RAD2DEG*(Math.atan(h/c)*2);u=ne.clamp(u,this.minFov,this.maxFov);const f=h/Math.tan(ne.DEG2RAD*(u/2));o=l/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(u),this.applyTransformMatrix(this.scale(o,this._v3_2,!1)),ae.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(f/l),this._m4_1.makeTranslation(ae.x,ae.y,ae.z),this.dispatchEvent(Jt)}});ft(this,"onTriplePanEnd",()=>{this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Ge)});ft(this,"setCenter",(e,n)=>{It.x=e,It.y=n});ft(this,"initializeMouseActions",()=>{this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")});ft(this,"compareMouseAction",(e,n)=>e.operation==n.operation?e.mouse==n.mouse&&e.key==n.key:!1);ft(this,"setMouseAction",(e,n,s=null)=>{const r=["PAN","ROTATE","ZOOM","FOV"],a=[0,1,2,"WHEEL"],o=["CTRL","SHIFT",null];let l;if(!r.includes(e)||!a.includes(n)||!o.includes(s)||n=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":l=wt.PAN;break;case"ROTATE":l=wt.ROTATE;break;case"ZOOM":l=wt.SCALE;break;case"FOV":l=wt.FOV;break}const c={operation:e,mouse:n,key:s,state:l};for(let h=0;h<this.mouseActions.length;h++)if(this.mouseActions[h].mouse==c.mouse&&this.mouseActions[h].key==c.key)return this.mouseActions.splice(h,1,c),!0;return this.mouseActions.push(c),!0});ft(this,"unsetMouseAction",(e,n=null)=>{for(let s=0;s<this.mouseActions.length;s++)if(this.mouseActions[s].mouse==e&&this.mouseActions[s].key==n)return this.mouseActions.splice(s,1),!0;return!1});ft(this,"getOpFromAction",(e,n)=>{let s;for(let r=0;r<this.mouseActions.length;r++)if(s=this.mouseActions[r],s.mouse==e&&s.key==n)return s.operation;if(n!=null){for(let r=0;r<this.mouseActions.length;r++)if(s=this.mouseActions[r],s.mouse==e&&s.key==null)return s.operation}return null});ft(this,"getOpStateFromAction",(e,n)=>{let s;for(let r=0;r<this.mouseActions.length;r++)if(s=this.mouseActions[r],s.mouse==e&&s.key==n)return s.state;if(n!=null){for(let r=0;r<this.mouseActions.length;r++)if(s=this.mouseActions[r],s.mouse==e&&s.key==null)return s.state}return null});ft(this,"getAngle",(e,n)=>Math.atan2(n.clientY-e.clientY,n.clientX-e.clientX)*180/Math.PI);ft(this,"updateTouchEvent",e=>{for(let n=0;n<this._touchCurrent.length;n++)if(this._touchCurrent[n].pointerId==e.pointerId){this._touchCurrent.splice(n,1,e);break}});ft(this,"calculateAngularSpeed",(e,n,s,r)=>{const a=n-e,o=(r-s)/1e3;return o==0?0:a/o});ft(this,"calculatePointersDistance",(e,n)=>Math.sqrt(Math.pow(n.clientX-e.clientX,2)+Math.pow(n.clientY-e.clientY,2)));ft(this,"calculateRotationAxis",(e,n)=>(this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,n).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()));ft(this,"calculateTbRadius",e=>{const n=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const s=ne.DEG2RAD*e.fov*.5,r=Math.atan(e.aspect*Math.tan(s));return Math.tan(Math.min(s,r))*n*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor});ft(this,"focus",(e,n,s=1)=>{ae.copy(e).sub(this._gizmos.position).multiplyScalar(s),this._translationMatrix.makeTranslation(ae.x,ae.y,ae.z),Ec.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Ac.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(n,this._gizmos.position)),this._gizmoMatrixState.copy(Ec),this._cameraMatrixState.copy(Ac)});ft(this,"drawGrid",()=>{if(this.scene!=null){let s,r,a,o;if(this.camera.isOrthographicCamera){const l=this.camera.right-this.camera.left,c=this.camera.bottom-this.camera.top;a=Math.max(l,c),o=a/20,s=a/this.camera.zoom*3,r=s/o*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const l=this.camera.position.distanceTo(this._gizmos.position),c=ne.DEG2RAD*this.camera.fov*.5,h=Math.atan(this.camera.aspect*Math.tan(c));a=Math.tan(Math.max(c,h))*l*2,o=a/20,s=a*3,r=s/o}this._grid==null&&(this._grid=new Yh(s,r,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}});ft(this,"dispose",()=>{this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("resize",this.onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()});ft(this,"disposeGrid",()=>{this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)});ft(this,"easeOutCubic",e=>1-Math.pow(1-e,3));ft(this,"activateGizmos",e=>{const n=this._gizmos.children[0],s=this._gizmos.children[1],r=this._gizmos.children[2];e?(n.material.setValues({opacity:1}),s.material.setValues({opacity:1}),r.material.setValues({opacity:1})):(n.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}),r.material.setValues({opacity:.6}))});ft(this,"getCursorNDC",(e,n,s)=>{const r=s.getBoundingClientRect();return this._v2_1.setX((e-r.left)/r.width*2-1),this._v2_1.setY((r.bottom-n)/r.height*2-1),this._v2_1.clone()});ft(this,"getCursorPosition",(e,n,s)=>(this._v2_1.copy(this.getCursorNDC(e,n,s)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()));ft(this,"setCamera",e=>{e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.camera=e,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)});ft(this,"makeGizmos",(e,n)=>{const r=new or(0,0,n,n).getPoints(this._curvePts),a=new ye().setFromPoints(r),o=new pi({color:16744576,fog:!1,transparent:!0,opacity:.6}),l=new pi({color:8454016,fog:!1,transparent:!0,opacity:.6}),c=new pi({color:8421631,fog:!1,transparent:!0,opacity:.6}),h=new bs(a,o),u=new bs(a,l),f=new bs(a,c),m=Math.PI*.5;if(h.rotation.x=m,u.rotation.y=m,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const g=1/this.camera.zoom;this._scaleMatrix.makeScale(g,g,g),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(g){g.isLine&&(g.geometry.dispose(),g.material.dispose())}),this._gizmos.clear(),this._gizmos.add(h),this._gizmos.add(u),this._gizmos.add(f)});ft(this,"onFocusAnim",(e,n,s,r)=>{if(this._timeStart==-1&&(this._timeStart=e),this._state==wt.ANIMATION_FOCUS){const o=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(r),o>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(n,this.scaleFactor),this._timeStart=-1,this.updateTbState(wt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Jt);else{const l=this.easeOutCubic(o),c=1-l+this.scaleFactor*l;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(n,c,l),this.dispatchEvent(Jt);const h=this;this._animationId=window.requestAnimationFrame(function(u){h.onFocusAnim(u,n,s,r.clone())})}}else this._animationId=-1,this._timeStart=-1});ft(this,"onRotationAnim",(e,n,s)=>{if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==wt.ANIMATION_ROTATE){const r=(e-this._timeStart)/1e3;if(s+-this.dampingFactor*r>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(r,2)+s*r+0,this.applyTransformMatrix(this.rotate(n,this._angleCurrent)),this.dispatchEvent(Jt);const o=this;this._animationId=window.requestAnimationFrame(function(l){o.onRotationAnim(l,n,s)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(wt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Jt)}else this._animationId=-1,this._timeStart=-1,this._state!=wt.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Jt))});ft(this,"pan",(e,n,s=!1)=>{const r=e.clone().sub(n);if(this.camera.isOrthographicCamera)r.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&s){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const a=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);r.multiplyScalar(1/a)}return this._v3_1.set(r.x,r.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),Fe});ft(this,"reset",()=>{this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Jt)});ft(this,"rotate",(e,n)=>{const s=this._gizmos.position;return this._translationMatrix.makeTranslation(-s.x,-s.y,-s.z),this._rotationMatrix.makeRotationAxis(e,-n),this._m4_1.makeTranslation(s.x,s.y,s.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),Fe});ft(this,"copyState",()=>{let e;this.camera.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(e)});ft(this,"pasteState",()=>{const e=this;navigator.clipboard.readText().then(function(s){e.setStateFromJSON(s)})});ft(this,"saveState",()=>{this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)});ft(this,"scale",(e,n,s=!0)=>{Ke.copy(n);let r=1/e;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=e,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,r=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,r=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(r,r,r),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Ke.sub(this._v3_1);const a=Ke.clone().multiplyScalar(r);return Ke.sub(a),this._m4_1.makeTranslation(Ke.x,Ke.y,Ke.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),Fe}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let a=this._v3_1.distanceTo(Ke),o=a-a*r;const l=a-o;if(l<this.minDistance?(r=this.minDistance/a,o=a-a*r):l>this.maxDistance&&(r=this.maxDistance/a,o=a-a*r),ae.copy(Ke).sub(this._v3_1).normalize().multiplyScalar(o),this._m4_1.makeTranslation(ae.x,ae.y,ae.z),s){const c=this._v3_2;a=c.distanceTo(Ke),o=a-a*r,ae.copy(Ke).sub(this._v3_2).normalize().multiplyScalar(o),this._translationMatrix.makeTranslation(c.x,c.y,c.z),this._scaleMatrix.makeScale(r,r,r),this._m4_2.makeTranslation(ae.x,ae.y,ae.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-c.x,-c.y,-c.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return Fe}});ft(this,"setFov",e=>{this.camera.isPerspectiveCamera&&(this.camera.fov=ne.clamp(e,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())});ft(this,"zRotate",(e,n)=>(this._rotationMatrix.makeRotationAxis(this._rotationAxis,n),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,n),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),Fe));ft(this,"unprojectOnObj",(e,n)=>{const s=this.getRaycaster();s.near=n.near,s.far=n.far,s.setFromCamera(e,n);const r=s.intersectObjects(this.scene.children,!0);for(let a=0;a<r.length;a++)if(r[a].object.uuid!=this._gizmos.uuid&&r[a].face!=null)return r[a].point.clone();return null});ft(this,"unprojectOnTbSurface",(e,n,s,r,a)=>{if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(n,s,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const o=Math.pow(this._v2_1.x,2),l=Math.pow(this._v2_1.y,2),c=Math.pow(this._tbRadius,2);return o+l<=c*.5?this._v3_1.setZ(Math.sqrt(c-(o+l))):this._v3_1.setZ(c*.5/Math.sqrt(o+l)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(n,s,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const o=this._v3_1.clone().normalize(),l=e.position.distanceTo(this._gizmos.position),c=Math.pow(a,2),h=this._v3_1.z,u=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(u==0)return o.set(this._v3_1.x,this._v3_1.y,a),o;const f=h/u,m=l;let g=Math.pow(f,2)+1,p=2*f*m,d=Math.pow(m,2)-c,x=Math.pow(p,2)-4*g*d;if(x>=0&&(this._v2_1.setX((-p-Math.sqrt(x))/(2*g)),this._v2_1.setY(f*this._v2_1.x+m),ne.RAD2DEG*this._v2_1.angle()>=45)){const b=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return o.multiplyScalar(b),o.z+=l,o}g=f,p=m,d=-c*.5,x=Math.pow(p,2)-4*g*d,this._v2_1.setX((-p-Math.sqrt(x))/(2*g)),this._v2_1.setY(f*this._v2_1.x+m);const w=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(l-this._v2_1.y,2));return o.multiplyScalar(w),o.z+=l,o}});ft(this,"unprojectOnTbPlane",(e,n,s,r,a=!1)=>{if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(n,s,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(n,s,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const o=this._v3_1.clone().normalize(),l=this._v3_1.z,c=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let h;if(a?h=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):h=e.position.distanceTo(this._gizmos.position),c==0)return o.set(0,0,0),o;const u=l/c,f=h,m=-f/u,g=Math.sqrt(Math.pow(f,2)+Math.pow(m,2));return o.multiplyScalar(g),o.z=0,o}});ft(this,"updateMatrixState",()=>{this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)});ft(this,"updateTbState",(e,n)=>{this._state=e,n&&this.updateMatrixState()});ft(this,"update",()=>{if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const n=ne.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(n/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const n=this.camera.position.distanceTo(this._gizmos.position);if(n>this.maxDistance+1e-6||n<this.minDistance-1e-6){const r=ne.clamp(n,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(r/n,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=ne.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const s=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),s<this._tbRadius-1e-6||s>this._tbRadius+1e-6){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,a=this._tbRadius/r,l=new or(0,0,a,a).getPoints(this._curvePts),c=new ye().setFromPoints(l);for(const h in this._gizmos.children)this._gizmos.children[h].geometry=c}}this.camera.lookAt(this._gizmos.position)});ft(this,"setStateFromJSON",e=>{const n=JSON.parse(e);if(n.arcballState!=null){this._cameraMatrixState.fromArray(n.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(n.arcballState.cameraUp),this.camera.near=n.arcballState.cameraNear,this.camera.far=n.arcballState.cameraFar,this.camera.zoom=n.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=n.arcballState.cameraFov),this._gizmoMatrixState.fromArray(n.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const s=new Ut().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(s),this.camera.lookAt(this._gizmos.position),this.updateTbState(wt.IDLE,!1),this.dispatchEvent(Jt)}});this.camera=null,this.domElement=n,this.scene=s,this.target=new L,this._currentTarget=new L,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new Ht,this._v3_1=new L,this._v3_2=new L,this._m4_1=new Ut,this._m4_2=new Ut,this._quat=new rs,this._translationMatrix=new Ut,this._rotationMatrix=new Ut,this._scaleMatrix=new Ut,this._rotationAxis=new L,this._cameraMatrixState=new Ut,this._cameraProjectionState=new Ut,this._fovState=1,this._upState=new L,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Ut,this._up0=new L,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Ut,this._gizmoMatrixState0=new Ut,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=$t.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new L,this._startCursorPosition=new L,this._grid=null,this._gridPosition=new L,this._gizmos=new Gi,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new L,this._cursorPosCurr=new L,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=wt.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("wheel",this.onWheel),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),window.addEventListener("resize",this.onWindowResize)}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==wt.ROTATE||this._state==wt.ZROTATE||this._state==wt.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==wt.SCALE||this._state==wt.FOCUS||this._state==wt.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const n=this.camera.position.distanceTo(this._gizmos.position),s=new os;s.setFromObject(this._gizmos);const r=new Rs;s.getBoundingSphere(r);const a=Math.max(this._nearPos0,r.radius+r.center.length()),o=n-this._initialNear,l=Math.min(a,o);this.camera.near=n-l;const c=Math.min(this._farPos0,-r.radius+r.center.length()),h=n-this._initialFar,u=Math.min(c,h);this.camera.far=n-u,this.camera.updateProjectionMatrix()}else{let n=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,n=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,n=!0),n&&this.camera.updateProjectionMatrix()}}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(Jt)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.camera);const s=new or(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),r=new ye().setFromPoints(s);for(const a in this._gizmos.children)this._gizmos.children[a].geometry=r;this.dispatchEvent(Jt)}setTransformationMatrices(e=null,n=null){e!=null?Fe.camera!=null?Fe.camera.copy(e):Fe.camera=e.clone():Fe.camera=null,n!=null?Fe.gizmos!=null?Fe.gizmos.copy(n):Fe.gizmos=n.clone():Fe.gizmos=null}getRaycaster(){return K0}}var Ss=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++i%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var u=0;u<t.children.length;u++)t.children[u].style.display=u===h?"block":"none";i=h}var s=(performance||Date).now(),r=s,a=0,o=e(new Ss.Panel("FPS","#0ff","#002")),l=e(new Ss.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Ss.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-s,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){s=this.end()},domElement:t,setMode:n}};Ss.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,f=15*a,m=74*a,g=30*a,p=document.createElement("canvas");p.width=o,p.height=l,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=e,d.fillRect(0,0,o,l),d.fillStyle=t,d.fillText(i,c,h),d.fillRect(u,f,m,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(u,f,m,g),{dom:p,update:function(x,w){n=Math.min(n,x),s=Math.max(s,x),d.fillStyle=e,d.globalAlpha=1,d.fillRect(0,0,o,f),d.fillStyle=t,d.fillText(r(x)+" "+i+" ("+r(n)+"-"+r(s)+")",c,h),d.drawImage(p,u+a,f,m-a,g,u,f,m-a,g),d.fillRect(u+m-a,f,a,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(u+m-a,f,a,r((1-x/w)*g))}}};const Q0=Ss,lr=60,ni=.01,Eo=(i,t)=>{let e=3*ni;return Math.abs(i-t)<e||Math.abs(i+t)<e},Ao=(i,t)=>i>t;class tv{constructor(t){ft(this,"controls");ft(this,"scene");ft(this,"camera");ft(this,"renderer");ft(this,"hemiHelper");ft(this,"root");ft(this,"stats");ft(this,"gridHelper");ft(this,"box");ft(this,"showLog",!1);ft(this,"faceTo",new L(0,0,0));ft(this,"faceDelta",new L(0,0,0));ft(this,"lastLogTime",0);this.root=t,this.stats=Q0(),this.box=new Gi,this.box.rotation.set(this.faceTo.x,this.faceTo.y,this.faceTo.z),this.root.appendChild(this.stats.domElement)}init(){this.initScene(),this.initCamera(),this.initRender(),this.initLight(),this.initControls(),this.addCube(),document.addEventListener("resize",this.onWindowResize,!1)}initScene(){this.scene=new k0;let t=new $0(40);t.position.set(320,-70,150),this.scene.add(t),this.gridHelper=new Yh(600,10,8947848,4473924),this.scene.add(this.gridHelper)}initLight(){const t=new j0(16777215,2);t.position.set(1,1,1),this.scene.add(t);var e=new Y0(16777215,1);this.scene.add(e)}initCamera(){this.camera=new ke(20,this.root.clientWidth/this.root.clientHeight,.1,3e4),this.scene.add(this.camera),this.camera.position.set(1e3,500,1e3),this.camera.lookAt(0,200,0)}initRender(){this.renderer=new qh({antialias:!0}),this.renderer.setSize(this.root.clientWidth,this.root.clientHeight),this.root.appendChild(this.renderer.domElement)}initControls(){this.controls=new J0(this.camera,this.renderer.domElement,this.scene)}addCube(){console.log("add cube");let t=new W0,e=new ls(lr,lr/4,lr/2),n=new dn(e,t);n.position.set(0,0,0),this.box.add(n);let s=new L(0,0,0),r=2*lr,a=new To(new L(1,0,0),s,r,16711680),o=new To(new L(0,1,0),s,r,65280),l=new To(new L(0,0,1),s,r,255);this.box.add(a),this.box.add(o),this.box.add(l),this.scene.add(this.box)}log(){if(!this.showLog)return;let t=new Date().getSeconds();if(t!=this.lastLogTime)this.lastLogTime=t;else return;t%5==0&&(console.log("faceTo:"+this.faceTo.x+","+this.faceTo.y+","+this.faceTo.z),console.log("rotation:"+this.box.rotation.x+","+this.box.rotation.y+","+this.box.rotation.z))}animate(){requestAnimationFrame(()=>{this.animate()}),this.log(),this.stats.update(),this.box.rotation,this.box.rotation.x!=this.faceTo.x&&(Ao(this.faceTo.x,this.box.rotation.x)?this.box.rotation.x+=ni:this.box.rotation.x-=ni,Eo(this.box.rotation.x,this.faceTo.x)&&(console.log("x low step"),this.box.rotation.x=this.faceTo.x)),this.box.rotation.y!=this.faceTo.y&&(Ao(this.faceTo.y,this.box.rotation.y)?this.box.rotation.y+=ni:this.box.rotation.y-=ni,Eo(this.box.rotation.y,this.faceTo.y)&&(console.log("y low step"),this.box.rotation.y=this.faceTo.y)),this.box.rotation.z!=this.faceTo.z&&(Ao(this.faceTo.z,this.box.rotation.z)?this.box.rotation.z+=ni:this.box.rotation.z-=ni,Eo(this.box.rotation.z,this.faceTo.z)&&(console.log("z low step"),this.box.rotation.z=this.faceTo.z)),this.render()}render(){var t;(t=this.renderer)==null||t.render(this.scene,this.camera)}start(){this.init(),this.render(),this.animate()}onWindowResize(){this.camera.aspect=this.root.clientWidth,this.root.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.root.clientWidth,this.root.clientHeight)}change(t){console.log("change face to:"+t.x+","+t.y+","+t.z);let e=t.y/180,n=t.z/180,s=t.x/180;console.log("rotate \u03C0:"+e+","+n+","+s);let r=e*Math.PI,a=n*Math.PI,o=s*Math.PI;console.log("rotate:"+r+","+a+","+o),this.faceTo.set(r,a,o)}}const Vi=class{constructor(){ft(this,"ws",null);ft(this,"url","");ft(this,"callBackMapping",{});ft(this,"connected",!1);ft(this,"sendRetryCount",0);ft(this,"connectRetryCount",0);ft(this,"onmessage",t=>{})}static get Instance(){return Vi.instance?Vi.instance:Vi.instance=new Vi}sendFixHeart(){let t=null;clearInterval(t),t=setInterval(()=>{this.ws.send(JSON.stringify({}))},2e4)}connect(){if(console.log("\u5F00\u59CB\u8FDE\u63A5-->"+this.url),!window.WebSocket)return console.log("\u4E0D\u652F\u6301WebSocket");this.ws=new WebSocket(this.url),this.ws.onopen=()=>{console.log("\u8FDE\u63A5\u6210\u529F[\u72B6\u6001"+this.ws.readyState+"]"),this.connected=!0,this.connectRetryCount=0,this.sendFixHeart()},this.ws.onmessage=t=>{this.onmessage(t)},this.ws.onclose=()=>{this.connectRetryCount>=10?(this.ws.close(),console.log("\u91CD\u65B0\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25")):(this.connected=!1,this.connectRetryCount++,setTimeout(()=>{this.close(),this.connect(),console.log("\u8FDE\u63A5\u670D\u52A1\u7AEF\u5931\u8D25\u7B2C"+this.connectRetryCount+"\u6B21,1\u79D2\u540E\u91CD\u8BD5")},1e3))},this.ws.onerror=function(){console.log("Error:websocket\u8FDE\u63A5\u9519\u8BEF")}}send(t){this.connected?(this.sendRetryCount=0,this.ws.send(JSON.stringify(t))):(this.sendRetryCount++,setTimeout(()=>{this.send(t),console.log("\u5DF2\u7ECF\u91CD\u65B0\u53D1\u9001\u7B2C:"+this.sendRetryCount+"\u6B21")},1e3))}close(){this.ws.close()}};let pr=Vi;ft(pr,"instance");const ev=sh({__name:"HelloWorld",setup(i){const t=Xu();let e="/subscribe",n=!1,s="ws://",r="",a="",o;const l=()=>{n||(n=!0,u())},c=()=>{const f=location.search||location.hash||"",[m,g]=f.split("?"),p=new Map;if(g){const d=g.split("&");for(let x=0;x<d.length;x++){const[w,E]=d[x].split("=");p.set(w,E)}}return p},h=(f,m,g)=>{o.change(new L(f,g-90,m))},u=()=>{location.protocol.startsWith("https")&&(s="wss:");let f=c().get("id");if(r==null)return;r=f;let m=location.host;e=s+m+e,a=e;let g=pr.Instance;g.url=a,g.onmessage=p=>{if(p==null||p.data==null)return;console.log(p);let d=JSON.parse(p.data);console.log(d),h(d.x,d.y,d.z)},g.connect(),o=new tv(t.value),o.start()};return pa(()=>{l()}),(f,m)=>(gh(),Yf("div",{class:"w",ref_key:"root",ref:t},null,512))}});const nv=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},iv=nv(ev,[["__scopeId","data-v-87c10225"]]),sv=sh({__name:"App",setup(i){return(t,e)=>(gh(),Zf(iv))}});Fd(sv).mount("#app");
