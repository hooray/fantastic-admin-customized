
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{r as J,I as b}from"./item-CiDAJ3Wj.js";import{_ as q}from"./sub.vue_vue_type_script_setup_true_lang-Rtq9fUr3.js";import{d as z,r as i,I as A,J as M,a8 as $,a9 as j,o as f,l as h,F as O,$ as F,c as B,n as K,q as L,f as T,aa as D}from"./index-Bon7VqDN.js";const R=z({name:"MainMenu",__name:"index",props:{menu:{},value:{},accordion:{type:Boolean,default:!0},defaultOpeneds:{default:()=>[]},alwaysOpeneds:{default:()=>[]},mode:{default:"vertical"},collapse:{type:Boolean,default:!1},showCollapseName:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},direction:{default:"ltr"}},setup(N){const l=N,o=i(l.value),c=i({}),t=i({}),s=i(Array.from(new Set([...l.alwaysOpeneds.slice(0),...l.defaultOpeneds.slice(0)]))),w=i(l.alwaysOpeneds.slice(0)),P=i([]),y=A(()=>l.mode==="horizontal"||l.mode==="vertical"&&l.collapse);function I(a,n=[]){a.forEach(e=>{const u=e.path??JSON.stringify(e);if(e.children){const d=[...n,u];t.value[u]={index:u,indexPath:d,active:!1},I(e.children,d)}else c.value[u]={index:u,indexPath:n}})}const m=(a,n)=>{s.value.includes(a)||(l.accordion&&(s.value=s.value.filter(e=>n.includes(e)||w.value.includes(e))),s.value.push(a))},v=a=>{if(Array.isArray(a)){D(()=>{v(a.at(-1)),a.length>1&&v(a.slice(0,-1))});return}Object.keys(t.value).forEach(n=>{t.value[n].indexPath.includes(a)&&(s.value=s.value.filter(e=>e!==a))})};function _(a){var n,e;for(const u in t.value)t.value[u].active=!1;(n=t.value[a])==null||n.indexPath.forEach(u=>{t.value[u].active=!0}),(e=c.value[a])==null||e.indexPath.forEach(u=>{t.value[u].active=!0})}const g=a=>{(l.mode==="horizontal"||l.collapse)&&(s.value=[]),_(a)},x=(a,n)=>{s.value.includes(a)?v(a):m(a,n)};function k(){const a=o.value&&c.value[o.value];_(o.value),!(!a||y.value||l.collapse)&&a.indexPath.forEach(n=>{const e=t.value[n];e&&m(n,e.indexPath)})}return M(()=>l.menu,a=>{I(a),k()},{deep:!0,immediate:!0}),M(()=>l.value,a=>{c.value[a]||(o.value="");const n=c.value[a]||o.value&&c.value[o.value]||c.value[l.value];n?o.value=n.index:o.value=a,k()}),M(()=>l.collapse,a=>{a?s.value=[]:s.value=l.alwaysOpeneds.slice(0),k()}),$(J,j({props:l,items:c,subMenus:t,activeIndex:o,openedMenus:s,alwaysOpenedsMenus:w,mouseInMenu:P,isMenuPopup:y,openMenu:m,closeMenu:v,handleMenuItemClick:g,handleSubMenuClick:x})),(a,n)=>(f(),h("div",{class:L(["h-full w-full flex flex-col of-hidden transition-all",{"flex-row! w-auto!":T(y)&&l.mode==="horizontal","py-1":l.mode==="vertical"}])},[(f(!0),h(O,null,F(a.menu,e=>{var u,d,C;return f(),h(O,{key:e.path??JSON.stringify(e)},[((u=e.meta)==null?void 0:u.menu)!==!1?(f(),h(O,{key:0},[(d=e.children)!=null&&d.length?(f(),B(q,{key:0,menu:e,"unique-key":[e.path??(e.children.every(p=>{var r;return((r=p.meta)==null?void 0:r.menu)===!1})?e.children[0].path:JSON.stringify(e))]},null,8,["menu","unique-key"])):(f(),B(b,{key:1,item:e,"unique-key":[e.path??((C=e.children)!=null&&C.every(p=>{var r;return((r=p.meta)==null?void 0:r.menu)===!1})?e.children[0].path:JSON.stringify(e))],onClick:p=>{var r;return g(e.path??((r=e.children)!=null&&r.every(E=>{var S;return((S=E.meta)==null?void 0:S.menu)===!1})?e.children[0].path:JSON.stringify(e)))}},null,8,["item","unique-key","onClick"]))],64)):K("",!0)],64)}),128))],2))}});export{R as _};
//# sourceMappingURL=index.vue_vue_type_script_setup_true_lang-TZNhs-8s.js.map
