
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as h,y as _,p as d,j as g,u as f,M as v,r as x,J as b,o as r,l as c,g as n,w as S,e as k,f as e,c as y,h as w,t as B,Y as i,_ as I,x as M}from"./index-Fwyt6FPF.js";import{_ as N}from"./tools.vue_vue_type_script_setup_true_lang-CYpGYzvY.js";const P={class:"flex items-center"},T={class:"flex-center gap-1"},V=["src","onerror"],j=h({name:"ToolbarRightSide",__name:"rightSide",setup($){const u=_(),t=d(),s=g(),{t:o}=f(),{generateI18nTitle:p}=v(),a=x(!1);return b(()=>s.avatar,()=>{a.value&&(a.value=!1)}),(C,D)=>{const l=I,m=M;return r(),c("div",P,[n(N,{mode:"right-side"}),n(m,{items:[[{label:e(p)(e(t).settings.home.title),handle:()=>e(u).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:e(o)("app.preferences"),handle:()=>e(i).emit("global-preferences-toggle"),hide:!e(t).settings.userPreferences.enable}],[{label:e(o)("app.hotkeys"),handle:()=>e(i).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:e(o)("app.logout"),handle:()=>e(s).logout(e(t).settings.home.fullPath)}]],class:"flex-center cursor-pointer px-2"},{default:S(()=>[k("div",T,[e(s).avatar&&!e(a)?(r(),c("img",{key:0,src:e(s).avatar,onerror:()=>a.value=!0,class:"h-[24px] w-[24px] rounded-full"},null,8,V)):(r(),y(l,{key:1,name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-gray-400"})),w(" "+B(e(s).account)+" ",1),n(l,{name:"i-ep:caret-bottom"})])]),_:1},8,["items"])])}}});export{j as _};
//# sourceMappingURL=rightSide.vue_vue_type_script_setup_true_lang-vts8Vxna.js.map
