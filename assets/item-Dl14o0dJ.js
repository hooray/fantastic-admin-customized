
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as H}from"./HTooltip.vue_vue_type_script_setup_true_lang-BWFXeKQn.js";import{_ as P}from"./HBadge.vue_vue_type_script_setup_true_lang-CemWzMlE.js";import{d as T,M as V,ab as D,r as O,I as i,b as R,o,l as I,g as C,w as u,f as t,c as m,e as A,n as p,q as d,t as E,P as U,ac as W,ad as F,U as G,_ as J,z as L}from"./index-Bon7VqDN.js";const Q=Symbol("rootMenu"),X=T({name:"SubMenuItem",__name:"item",props:{uniqueKey:{},item:{},level:{default:0},subMenu:{type:Boolean,default:!1}},setup(S,{expose:N}){const n=S,{generateI18nTitle:s}=V(),a=D(Q),c=O(),v=i(()=>n.subMenu?a.subMenus[n.uniqueKey.at(-1)].active:a.activeIndex===n.uniqueKey.at(-1)),b=i(()=>{var r,l;let e;return(r=n.item.meta)!=null&&r.icon&&(e=n.item.meta.icon),v.value&&(l=n.item.meta)!=null&&l.activeIcon&&(e=n.item.meta.activeIcon),e}),j=i(()=>`padding-inline-start: ${12*(n.level-1)}px`);return N({ref:c}),(e,r)=>{const l=J,q=P,z=H,B=R("router-link");return o(),I("div",{ref_key:"itemRef",ref:c,class:d(["menu-item relative transition-all",{active:t(v),"py-1":e.level!==0,"py-1 px-2":e.level===0&&t(a).props.mode==="vertical","px-1 py-2":e.level===0&&t(a).props.mode==="horizontal"}])},[C(B,{custom:"",to:e.uniqueKey.at(-1)??""},{default:u(({href:K,navigate:$})=>{var f;return[C(z,{enable:e.level===0&&!e.subMenu,text:t(s)((f=e.item.meta)==null?void 0:f.title),placement:t(a).props.mode==="vertical"?"right":"bottom",class:"h-full w-full"},{default:u(()=>{var g,y,h,M;return[(o(),m(G(e.subMenu?"div":"a"),W({...!e.subMenu&&{href:(g=e.item.meta)!=null&&g.link?e.item.meta.link:K,target:(y=e.item.meta)!=null&&y.newWindow||(h=e.item.meta)!=null&&h.link?"_blank":"_self",class:"no-underline"}},{class:["group menu-item-container h-full w-full flex items-center justify-between gap-1 px-2 py-2",{...e.level!==1||e.level===1&&!e.subMenu?{"text-[var(--g-sub-sidebar-menu-color)] transition-all":!0,"cursor-pointer":!e.subMenu||e.level===0,"hover-bg-[var(--g-sub-sidebar-menu-hover-bg)] hover-text-[var(--g-sub-sidebar-menu-hover-color)]":!e.subMenu,"text-[var(--g-sub-sidebar-menu-active-color)]! bg-[var(--g-sub-sidebar-menu-active-bg)]!":t(a).activeIndex===e.uniqueKey.at(-1),"rounded-lg":t(a).props.rounded&&e.level===0,"rounded-md":t(a).props.rounded&&e.level!==0,"px-3!":e.level===0,"py-1!":e.level>1}:{"bg-[var(--g-sub-sidebar-menu-hover-bg)] text-[var(--g-sub-sidebar-menu-hover-color)]":!0,"rounded-md":t(a).props.rounded}}],title:t(s)((M=e.item.meta)==null?void 0:M.title)},F({...!e.subMenu&&{click:$}})),{default:u(()=>{var w,k;return[A("div",{class:d(["inline-flex flex-1 items-center justify-center gap-1",{"flex-col":e.level===0&&t(a).props.mode==="vertical","w-full":e.level===0&&t(a).props.showCollapseName&&t(a).props.mode==="vertical"}]),style:U(t(j))},[t(b)?(o(),m(l,{key:0,name:t(b),size:16,class:"menu-item-container-icon"},null,8,["name"])):p("",!0),e.level===0&&!t(a).props.showCollapseName?p("",!0):(o(),I("span",{key:1,class:d(["w-0 flex-1 truncate text-sm transition-height transition-opacity transition-width",{"text-xs!":e.level>1,"opacity-0 w-0 h-0":e.level===0&&!t(a).props.showCollapseName,"w-full text-center":e.level===0&&t(a).props.showCollapseName}])},E(t(s)((w=e.item.meta)==null?void 0:w.title)),3)),(k=e.item.meta)!=null&&k.badge&&e.level!==0?(o(),m(q,{key:2,value:typeof e.item.meta.badge=="function"?e.item.meta.badge():e.item.meta.badge,class:"badge transform-scale-80"},null,8,["value"])):p("",!0)],6)]}),_:2},1040,["class","title"]))]}),_:2},1032,["enable","text","placement"])]}),_:1},8,["to"])],2)}}}),Y=L(X,[["__scopeId","data-v-14bf56a9"]]),ee=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as I,ee as i,Q as r};
//# sourceMappingURL=item-Dl14o0dJ.js.map