
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as P,v as q,p as N,L as V,a as R,r as x,I as z,J as A,D as j,f as e,o as i,l as c,g as _,q as m,e as g,c as f,w as H,F as B,$ as O,Q as w,R as y,n as v,an as T,_ as D,aa as E,z as F}from"./index-Bon7VqDN.js";import{a as L}from"./index-Dr7MFTSQ.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-qiw3IRFa.js";import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-TZNhs-8s.js";import"./logo-Djpa8uMr.js";import"./item-CiDAJ3Wj.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BWFXeKQn.js";import"./HBadge.vue_vue_type_script_setup_true_lang-CemWzMlE.js";import"./sub.vue_vue_type_script_setup_true_lang-Rtq9fUr3.js";const G=P({name:"SubSidebar",__name:"index",setup(J){const p=q(),s=N(),n=V(),b=R("subSidebarRef"),M=x(!1),k=x(!1);function h(){var t,o,l;const a=((t=b.value)==null?void 0:t.scrollTop)??0;M.value=a>0;const u=((o=b.value)==null?void 0:o.clientHeight)??0,d=((l=b.value)==null?void 0:l.scrollHeight)??0;k.value=Math.ceil(a+u)<d}const S=z(()=>{var a,u,d,t;return s.mode==="mobile"||["side","head","single"].includes(s.settings.menu.mode)&&n.sidebarMenus.length!==0&&!n.sidebarMenus.every(o=>{var l;return((l=o.meta)==null?void 0:l.menu)===!1})||s.settings.menu.mode==="customized"&&((u=(a=n.sidebarMenus[n.subActived])==null?void 0:a.children)==null?void 0:u.length)!==0&&!((t=(d=n.sidebarMenus[n.subActived])==null?void 0:d.children)!=null&&t.every(o=>{var l;return((l=o.meta)==null?void 0:l.menu)===!1}))});A(S,a=>{a&&E(()=>{h()})},{immediate:!0});const C=R("menuRef");j(()=>{if(S.value){const{height:a}=L(C);A(()=>a.value,()=>{a.value>0&&h()},{immediate:!0})}});const r=z(()=>s.mode==="pc"?!!(s.settings.menu.subMenuCollapse&&(!s.isHoverSidebar||s.isHoverSidebar&&!s.settings.menu.subMenuAutoCollapse)):s.settings.menu.subMenuCollapse);return(a,u)=>{const d=D;return e(S)?(i(),c("div",{key:0,class:m(["sub-sidebar-container",{"is-collapse":e(r),"shadow-side":e(s).isHoverSidebar&&e(s).settings.menu.subMenuAutoCollapse&&e(s).settings.menu.subMenuCollapse}])},[_(U,{"show-logo":e(s).settings.menu.mode==="single",class:m(["sidebar-logo",{"sidebar-logo-bg":e(s).settings.menu.mode==="single"}])},null,8,["show-logo","class"]),g("div",{ref_key:"subSidebarRef",ref:b,class:m(["sub-sidebar flex-1 transition-shadow-300 scrollbar-none",{"shadow-top":e(M),"shadow-bottom":e(k)}]),onScroll:h},[g("div",{ref_key:"menuRef",ref:C},[e(s).settings.menu.mode==="customized"?(i(),f(T,{key:0,name:"sub-sidebar"},{default:H(()=>[(i(!0),c(B,null,O(e(n).allMenus[e(n).actived].children,(t,o)=>w((i(),c("div",{key:o},[t.children?(i(),f($,{key:0,menu:t.children,value:e(p).meta.activeMenu||e(p).path,"default-openeds":e(n).defaultOpenedPaths,"always-openeds":e(n).alwaysOpenedPaths,accordion:e(s).settings.menu.subMenuUniqueOpened,collapse:e(r),rounded:e(s).settings.menu.isRounded,direction:e(s).settings.app.direction,class:"menu"},null,8,["menu","value","default-openeds","always-openeds","accordion","collapse","rounded","direction"])):v("",!0)],512)),[[y,o===e(n).subActived]])),128))]),_:1})):(i(),f(T,{key:1,name:"sub-sidebar"},{default:H(()=>[(i(!0),c(B,null,O(e(n).allMenus,(t,o)=>w((i(),c("div",{key:o},[t.children?(i(),f($,{key:0,menu:t.children,value:e(p).meta.activeMenu||e(p).path,"default-openeds":e(n).defaultOpenedPaths,"always-openeds":e(n).alwaysOpenedPaths,accordion:e(s).settings.menu.subMenuUniqueOpened,collapse:e(r),rounded:e(s).settings.menu.isRounded,direction:e(s).settings.app.direction,class:m(["menu",{"-mt-2":!(e(r)||["head","single","customized"].includes(e(s).settings.menu.mode))}])},null,8,["menu","value","default-openeds","always-openeds","accordion","collapse","rounded","direction","class"])):v("",!0)],512)),[[y,o===e(n).actived]])),128))]),_:1}))],512)],34),e(s).mode==="pc"&&e(s).settings.menu.enableSubMenuCollapseButton?(i(),c("div",{key:0,class:m(["relative flex items-center px-4 py-3",{"justify-center":e(r),"justify-between":!e(r)}])},[w(g("span",{class:"flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark-bg-stone-9 hover-bg-stone-2 dark-hover-bg-stone-8",onClick:u[0]||(u[0]=t=>e(s).toggleSidebarAutoCollapse())},[_(d,{name:e(s).settings.menu.subMenuAutoCollapse?"i-lucide:pin-off":"i-lucide:pin"},null,8,["name"])],512),[[y,!e(r)]]),g("span",{class:m(["flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark-bg-stone-9 hover-bg-stone-2 dark-hover-bg-stone-8",{"-rotate-z-180":e(s).settings.menu.subMenuCollapse}]),onClick:u[1]||(u[1]=t=>e(s).toggleSidebarCollapse())},[_(d,{name:"toolbar-collapse"})],2)],2)):v("",!0)],2)):v("",!0)}}}),ne=F(G,[["__scopeId","data-v-1a28d647"]]);export{ne as default};
//# sourceMappingURL=index-D9oVBY3-.js.map
