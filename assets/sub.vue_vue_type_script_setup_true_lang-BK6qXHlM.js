
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as K,a as M,ab as T,I as b,b as N,o as a,l as c,g as k,f,c as g,T as W,ac as $,ad as F,w as C,Q as J,R as O,e as P,F as h,$ as w,n as p,q as _,ae as L,a7 as V,S as q,aa as j}from"./index-Bon7VqDN.js";import{I as z,r as A}from"./item-Dl14o0dJ.js";const D={class:"columns-3 p-2 2xl:columns-4"},U=K({name:"SubMenu",__name:"sub",props:{uniqueKey:{},menu:{},level:{default:0}},setup(R){const l=R,m=l.menu.path??JSON.stringify(l.menu),v=M("itemRef"),o=M("subMenuRef"),n=T(A),E=b(()=>n.openedMenus.includes(l.uniqueKey.at(-1))),H={enter(e){e.offsetHeight>window.innerHeight&&(e.style.height=`${window.innerHeight}px`)},afterEnter:()=>{},beforeLeave:e=>{e.style.overflow="hidden",e.style.maxHeight=`${e.offsetHeight}px`},leave:e=>{e.style.maxHeight="0"},afterLeave(e){e.style.overflow="",e.style.maxHeight=""}},B={enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-x-4",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},r=b(()=>{let e=!0;return l.menu.children?l.menu.children.every(u=>{var i;return((i=u.meta)==null?void 0:i.menu)===!1})&&(e=!1):e=!1,e});function S(){r.value||n.handleMenuItemClick(m)}let s;function x(){l.level===0&&(n.mouseInMenu=l.uniqueKey,s==null||s(),{stop:s}=q(()=>{if(r.value)n.openMenu(m),j(()=>{var t;const e=(t=v.value)==null?void 0:t.ref;if(!e)return;let u=0,i=0;n.props.mode==="vertical"||l.level!==0?(u=e.getBoundingClientRect().top+e.scrollTop,i=(n.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right)+e.getBoundingClientRect().width,u+o.value.getElement().offsetHeight>window.innerHeight&&(u=window.innerHeight-o.value.getElement().offsetHeight)):(u=e.getBoundingClientRect().top+e.getBoundingClientRect().height,i=n.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right,u+o.value.getElement().offsetHeight>window.innerHeight&&(o.value.getElement().style.height=`${window.innerHeight-u}px`),i+o.value.getElement().offsetWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth-o.value.getElement().offsetWidth)),o.value.getElement().style.top=`${u}px`,o.value.getElement().style.insetInlineStart=`${i}px`});else{const e=l.menu.children?n.subMenus[m].indexPath.at(-1):n.items[m].indexPath.at(-1);n.openMenu(e)}},300))}function y(){l.level===0&&(n.mouseInMenu=[],s==null||s(),{stop:s}=q(()=>{n.mouseInMenu.length===0?n.closeMenu(l.uniqueKey):r.value&&!n.mouseInMenu.includes(l.uniqueKey.at(-1))&&n.closeMenu(l.uniqueKey.at(-1))},300))}function I(){s==null||s()}return(e,u)=>{const i=N("SubMenu");return a(),c(h,null,[k(z,{ref_key:"itemRef",ref:v,"unique-key":e.uniqueKey,item:e.menu,level:e.level,"sub-menu":f(r),onClick:S,onMouseenter:x,onMouseleave:y},null,8,["unique-key","item","level","sub-menu"]),f(r)?(a(),g(V,{key:0,to:"body",disabled:e.level!==0},[e.level===0?(a(),g(W,$({key:0},B,F(H)),{default:C(()=>[J(k(f(L),{ref_key:"subMenuRef",ref:o,options:{scrollbars:{visibility:"hidden"}},defer:"",class:_(["sub-menu fixed z-3000 bg-[var(--g-sub-sidebar-bg)] px-1 shadow-xl ring-1 ring-stone-2 dark-ring-stone-8",{"rounded-lg":f(n).props.rounded}]),onMouseenter:I,onMouseleave:y},{default:C(()=>[P("div",D,[(a(!0),c(h,null,w(e.menu.children,t=>{var d;return a(),c("div",{key:t.path??JSON.stringify(t),class:"w-[200px] break-inside-avoid"},[((d=t.meta)==null?void 0:d.menu)!==!1?(a(),g(i,{key:0,"unique-key":[...e.uniqueKey,t.path??JSON.stringify(t)],menu:t,level:e.level+1},null,8,["unique-key","menu","level"])):p("",!0)])}),128))])]),_:1},8,["class"]),[[O,f(E)]])]),_:1},16)):(a(!0),c(h,{key:1},w(e.menu.children,t=>{var d;return a(),c(h,{key:t.path??JSON.stringify(t)},[((d=t.meta)==null?void 0:d.menu)!==!1?(a(),g(i,{key:0,"unique-key":[...e.uniqueKey,t.path??JSON.stringify(t)],menu:t,level:e.level+1},null,8,["unique-key","menu","level"])):p("",!0)],64)}),128))],8,["disabled"])):p("",!0)],64)}}});export{U as _};
//# sourceMappingURL=sub.vue_vue_type_script_setup_true_lang-BK6qXHlM.js.map
