
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,p as h,I as l,r as b,D as y,O as T,J as _,o as i,l as w,f as e,c,n as d,q as v,z as x}from"./index-Bon7VqDN.js";import S from"./index-D2fbFC8F.js";import k from"./index-B5svve5c.js";import"./index-Dr7MFTSQ.js";import"./sortable.esm-Cw1ESr5Y.js";import"./moreAction-Cozgqr3L.js";import"./HDropdown-bxtHxPp5.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BWFXeKQn.js";import"./useTabbar-DACflRXF.js";import"./useMainPage-Bkk9lp59.js";import"./leftSide.vue_vue_type_script_setup_true_lang-Csap2ECV.js";import"./tools.vue_vue_type_script_setup_true_lang-BMjqXkwD.js";import"./index-BEgK-8DH.js";import"./index-C9NexOF5.js";import"./item.vue_vue_type_script_setup_true_lang-B-kxnLWX.js";import"./index.vue_vue_type_script_setup_true_lang-DI7fzXCv.js";import"./HTabList.vue_vue_type_script_setup_true_lang-CuINIw9_.js";import"./use-resolve-button-type-C_ojqGW-.js";import"./index.vue_vue_type_script_setup_true_lang-D1d5CqCE.js";import"./panel-D9NXbITU.js";import"./index.vue_vue_type_script_setup_true_lang-CCZXvkTf.js";import"./index-WDJmRCyC.js";import"./index.vue_vue_type_script_setup_true_lang-D5z2vBNM.js";import"./HKbd-BcMEeIrk.js";import"./index-DDbAkzv-.js";import"./HBadge.vue_vue_type_script_setup_true_lang-CemWzMlE.js";import"./notification-CNn-TOwy.js";import"./panel-zX3a4tm8.js";import"./index-DmrdXvk6.js";import"./rightSide.vue_vue_type_script_setup_true_lang-DrMf93r-.js";const E=f({name:"Topbar",__name:"index",setup(C){const t=h(),n=l(()=>{const o=t.settings.toolbar.layout.findIndex(a=>a==="->"),r=t.settings.toolbar.layout.some((a,g)=>g<o&&a!=="->"?t.settings.app.routeBaseOn==="filesystem"&&a==="breadcrumb"?!1:t.settings.toolbar[a]:!1);return!["head","only-head"].includes(t.settings.menu.mode)||r}),s=b(0),m=b(!1),u=l(()=>{const o=t.settings.tabbar.enable?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-tabbar-height")):0,r=n.value?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-toolbar-height")):0;return o+r});y(()=>{window.addEventListener("scroll",p)}),T(()=>{window.removeEventListener("scroll",p)});function p(){s.value=(document.documentElement||document.body).scrollTop}return _(s,(o,r)=>{m.value=t.settings.topbar.mode==="sticky"&&o>r&&o>u.value}),(o,r)=>(i(),w("div",{class:v(["topbar-container",{"has-tabbar":e(t).settings.tabbar.enable,"has-toolbar":e(n),[`topbar-${e(t).settings.topbar.mode}`]:!0,shadow:!e(t).settings.topbar.switchTabbarAndToolbar&&e(s),hide:e(m),"switch-tabbar-toolbar":e(t).settings.topbar.switchTabbarAndToolbar}]),"data-fixed-calc-width":""},[e(t).settings.tabbar.enable?(i(),c(S,{key:0})):d("",!0),e(n)?(i(),c(k,{key:1})):d("",!0)],2))}}),at=x(E,[["__scopeId","data-v-fb3eb3fc"]]);export{at as default};
//# sourceMappingURL=index-CtX5Ue9j.js.map