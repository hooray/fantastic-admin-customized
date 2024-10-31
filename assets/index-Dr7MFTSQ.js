
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{I as y,r as R,S as T,aM as I,J as _,aN as A,a9 as O,aO as C,aP as D,aQ as V,aR as B,aS as q,D as H,aT as K,aU as N,aV as j}from"./index-Bon7VqDN.js";const M=q?window:void 0,J=q?window.document:void 0,P=q?window.navigator:void 0;function S(a){var l;const e=C(a);return(l=e==null?void 0:e.$el)!=null?l:e}function F(...a){let l,e,m,u;if(typeof a[0]=="string"||Array.isArray(a[0])?([e,m,u]=a,l=M):[l,e,m,u]=a,!l)return D;Array.isArray(e)||(e=[e]),Array.isArray(m)||(m=[m]);const o=[],s=()=>{o.forEach(r=>r()),o.length=0},i=(r,t,v,h)=>(r.addEventListener(t,v,h),()=>r.removeEventListener(t,v,h)),d=_(()=>[S(l),C(u)],([r,t])=>{if(s(),!r)return;const v=V(t)?{...t}:t;o.push(...e.flatMap(h=>m.map(b=>i(r,h,b,v))))},{immediate:!0,flush:"post"}),p=()=>{d(),s()};return A(p),p}function U(){const a=R(!1),l=N();return l&&H(()=>{a.value=!0},l),a}function k(a){const l=U();return y(()=>(l.value,!!a()))}function L(a,l={}){const{controls:e=!1,navigator:m=P}=l,u=k(()=>m&&"permissions"in m),o=B(),s=typeof a=="string"?{name:a}:a,i=B(),d=()=>{var r,t;i.value=(t=(r=o.value)==null?void 0:r.state)!=null?t:"prompt"};F(o,"change",d);const p=K(async()=>{if(u.value){if(!o.value)try{o.value=await m.permissions.query(s)}catch{o.value=void 0}finally{d()}if(e)return j(o.value)}});return p(),e?{state:i,isSupported:u,query:p}:i}function X(a={}){const{navigator:l=P,read:e=!1,source:m,copiedDuring:u=1500,legacy:o=!1}=a,s=k(()=>l&&"clipboard"in l),i=L("clipboard-read"),d=L("clipboard-write"),p=y(()=>s.value||o),r=R(""),t=R(!1),v=T(()=>t.value=!1,u);function h(){s.value&&n(i.value)?l.clipboard.readText().then(w=>{r.value=w}):r.value=f()}p.value&&e&&F(["copy","cut"],h);async function b(w=C(m)){p.value&&w!=null&&(s.value&&n(d.value)?await l.clipboard.writeText(w):c(w),r.value=w,t.value=!0,v.start())}function c(w){const g=document.createElement("textarea");g.value=w??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function f(){var w,g,x;return(x=(g=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:g.toString())!=null?x:""}function n(w){return w==="granted"||w==="prompt"}return{isSupported:p,text:r,copied:t,copy:b}}function $(a,l,e={}){const{window:m=M,...u}=e;let o;const s=k(()=>m&&"ResizeObserver"in m),i=()=>{o&&(o.disconnect(),o=void 0)},d=y(()=>{const t=C(a);return Array.isArray(t)?t.map(v=>S(v)):[S(t)]}),p=_(d,t=>{if(i(),s.value&&m){o=new ResizeObserver(l);for(const v of t)v&&o.observe(v,u)}},{immediate:!0,flush:"post"}),r=()=>{i(),p()};return A(r),{isSupported:s,stop:r}}function Y(a,l={width:0,height:0},e={}){const{window:m=M,box:u="content-box"}=e,o=y(()=>{var t,v;return(v=(t=S(a))==null?void 0:t.namespaceURI)==null?void 0:v.includes("svg")}),s=R(l.width),i=R(l.height),{stop:d}=$(a,([t])=>{const v=u==="border-box"?t.borderBoxSize:u==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(m&&o.value){const h=S(a);if(h){const b=h.getBoundingClientRect();s.value=b.width,i.value=b.height}}else if(v){const h=Array.isArray(v)?v:[v];s.value=h.reduce((b,{inlineSize:c})=>b+c,0),i.value=h.reduce((b,{blockSize:c})=>b+c,0)}else s.value=t.contentRect.width,i.value=t.contentRect.height},e);I(()=>{const t=S(a);t&&(s.value="offsetWidth"in t?t.offsetWidth:l.width,i.value="offsetHeight"in t?t.offsetHeight:l.height)});const p=_(()=>S(a),t=>{s.value=t?l.width:0,i.value=t?l.height:0});function r(){d(),p()}return{width:s,height:i,stop:r}}const W=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Z(a,l={}){const{document:e=J,autoExit:m=!1}=l,u=y(()=>{var n;return(n=S(a))!=null?n:e==null?void 0:e.querySelector("html")}),o=R(!1),s=y(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(n=>e&&n in e||u.value&&n in u.value)),i=y(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(n=>e&&n in e||u.value&&n in u.value)),d=y(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(n=>e&&n in e||u.value&&n in u.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(n=>e&&n in e),r=k(()=>u.value&&e&&s.value!==void 0&&i.value!==void 0&&d.value!==void 0),t=()=>p?(e==null?void 0:e[p])===u.value:!1,v=()=>{if(d.value){if(e&&e[d.value]!=null)return e[d.value];{const n=u.value;if((n==null?void 0:n[d.value])!=null)return!!n[d.value]}}return!1};async function h(){if(!(!r.value||!o.value)){if(i.value)if((e==null?void 0:e[i.value])!=null)await e[i.value]();else{const n=u.value;(n==null?void 0:n[i.value])!=null&&await n[i.value]()}o.value=!1}}async function b(){if(!r.value||o.value)return;v()&&await h();const n=u.value;s.value&&(n==null?void 0:n[s.value])!=null&&(await n[s.value](),o.value=!0)}async function c(){await(o.value?h():b())}const f=()=>{const n=v();(!n||n&&t())&&(o.value=n)};return F(e,W,f,!1),F(()=>S(u),W,f,!1),m&&A(h),{isSupported:r,isFullscreen:o,enter:b,exit:h,toggle:c}}const G={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ee(a={}){const{reactive:l=!1,target:e=M,aliasMap:m=G,passive:u=!0,onEventFired:o=D}=a,s=O(new Set),i={toJSON(){return{}},current:s},d=l?O(i):i,p=new Set,r=new Set;function t(c,f){c in d&&(l?d[c]=f:d[c].value=f)}function v(){s.clear();for(const c of r)t(c,!1)}function h(c,f){var n,w;const g=(n=c.key)==null?void 0:n.toLowerCase(),z=[(w=c.code)==null?void 0:w.toLowerCase(),g].filter(Boolean);g&&(f?s.add(g):s.delete(g));for(const E of z)r.add(E),t(E,f);g==="meta"&&!f?(p.forEach(E=>{s.delete(E),t(E,!1)}),p.clear()):typeof c.getModifierState=="function"&&c.getModifierState("Meta")&&f&&[...s,...z].forEach(E=>p.add(E))}F(e,"keydown",c=>(h(c,!0),o(c)),{passive:u}),F(e,"keyup",c=>(h(c,!1),o(c)),{passive:u}),F("blur",v,{passive:!0}),F("focus",v,{passive:!0});const b=new Proxy(d,{get(c,f,n){if(typeof f!="string")return Reflect.get(c,f,n);if(f=f.toLowerCase(),f in m&&(f=m[f]),!(f in d))if(/[+_-]/.test(f)){const g=f.split(/[+_-]/g).map(x=>x.trim());d[f]=y(()=>g.every(x=>C(b[x])))}else d[f]=R(!1);const w=Reflect.get(c,f,n);return l?C(w):w}});return b}export{Y as a,ee as b,Z as c,X as u};
//# sourceMappingURL=index-Dr7MFTSQ.js.map