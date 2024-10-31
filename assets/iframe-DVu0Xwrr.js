
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as x,v as b,p as v,aI as I,M as S,a as T,J as k,o as r,l as f,F as P,$ as R,q as L,f as a,g as d,w as z,Q as m,R as p,e as _,T as C,_ as M,aa as V,z as B}from"./index-Bon7VqDN.js";import{u as y}from"./useMainPage-Bkk9lp59.js";import"./useTabbar-DACflRXF.js";const E={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},F=["data-path","src"],N={class:"absolute left-0 top-0 h-full w-full flex-center bg-stone-2/75 dark-bg-stone-8/75"},$=x({name:"IframeView",__name:"iframe",setup(q){const o=b(),i=v(),n=I(),{setCustomTitle:h}=y(),{generateI18nTitle:g}=S(),c=T("iframeRef");return k(()=>o.fullPath,t=>{V(()=>{var l;(l=c.value)==null||l.forEach(s=>{var e;if(s.dataset.path===t){const u=(e=n.openedList.find(w=>w.path===t))==null?void 0:e.title;u&&h(g(u)),s.onload=()=>{n.closeLoading(t)}}})})},{immediate:!0}),(t,l)=>{const s=M;return r(),f("div",E,[(r(!0),f(P,null,R(a(n).openedList,e=>(r(),f("div",{key:e.path,class:L(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(o).fullPath===e.path}])},[d(C,{name:a(i).settings.mainPage.enableTransition?a(i).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:z(()=>[m(_("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,F),[[p,a(o).fullPath===e.path]])]),_:2},1032,["name"]),m(_("div",N,[d(s,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[p,e.isLoading]])],2))),128))])}}}),j=B($,[["__scopeId","data-v-21b94faf"]]);export{j as default};
//# sourceMappingURL=iframe-DVu0Xwrr.js.map
