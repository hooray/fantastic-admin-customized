
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,l as g,g as o,w as e,X as $,o as k,h as m,Y as C,_ as P,G as x,A as l}from"./index-CibM-EBi.js";import{u as N}from"./notification-BC2dm3EZ.js";const B=r({name:"PersonalNotification",__name:"notification",setup(M){const s=N();function u(){s.$patch(t=>{t.message+=1})}function f(){s.$patch(t=>{t.message-=t.message>0?1:0})}function p(){s.$patch(t=>{t.todo+=1})}function _(){s.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const d=C,i=P,a=x,c=$;return k(),g("div",null,[o(d,{title:"通知中心",content:"本页面仅模拟右上角通知数变化，具体业务逻辑请到 /src/store/modules/notification.ts 文件中编写"}),o(c,{title:"消息"},{default:e(()=>[o(a,{onClick:u},{default:e(()=>[o(i,{name:"i-ep:plus"}),n[0]||(n[0]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:f},{default:e(()=>[o(i,{name:"i-ep:minus"}),n[1]||(n[1]=m(" 1 "))]),_:1})]),_:1}),o(c,{title:"待办"},{default:e(()=>[o(a,{onClick:p},{default:e(()=>[o(i,{name:"i-ep:plus"}),n[2]||(n[2]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:_},{default:e(()=>[o(i,{name:"i-ep:minus"}),n[3]||(n[3]=m(" 1 "))]),_:1})]),_:1})])}}});typeof l=="function"&&l(B);export{B as default};
//# sourceMappingURL=notification-D9v4Pfl9.js.map
