
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{p,B as T,v as R,y as k,a3 as f}from"./index-Bon7VqDN.js";function B(){const c=R(),l=k(),u=p(),t=T();function o(){return u.settings.tabbar.mergeTabsBy==="activeMenu"?c.meta.activeMenu??c.fullPath:c.fullPath}function I(e){const n=t.list.findIndex(i=>i.tabId===o());t.$patch({leaveIndex:n}),l.push(e)}function h(e){const n=o();l.go(e),t.remove(n)}function a(e){const n=o();l.push(e).then(()=>{t.remove(n)})}function x(e=o()){const n=o();if(t.list.some(i=>i.tabId===e))if(t.list.length>1)if(e===n){const i=t.list.findIndex(d=>d.tabId===e);i<t.list.length-1?a(t.list[i+1].fullPath):a(t.list[i-1].fullPath)}else t.remove(e);else f.error("当前只有一个标签页，已阻止关闭",{zIndex:2e3});else f.error("关闭的页面不存在",{zIndex:2e3})}function v(e=o()){const n=o();if(e!==n){const i=t.list.findIndex(d=>d.tabId===e);l.push(t.list[i].fullPath)}t.removeOtherSide(e)}function b(e=o()){const n=o();if(e!==n){const i=t.list.findIndex(s=>s.tabId===e);t.list.findIndex(s=>s.tabId===n)<i&&l.push(t.list[i].fullPath)}t.removeLeftSide(e)}function g(e=o()){const n=o();if(e!==n){const i=t.list.findIndex(s=>s.tabId===e);t.list.findIndex(s=>s.tabId===n)>i&&l.push(t.list[i].fullPath)}t.removeRightSide(e)}function S(e=o()){return t.list.some(n=>!n.isPermanent&&!n.isPin&&n.tabId!==e)}function P(e=o()){var i;let n=!0;if(e===((i=t.list[0])==null?void 0:i.tabId))n=!1;else{const d=t.list.findIndex(s=>s.tabId===e);n=t.list.some((s,r)=>r<d&&!s.isPermanent&&!s.isPin&&s.tabId!==e)}return n}function m(e=o()){var i;let n=!0;if(e===((i=t.list.at(-1))==null?void 0:i.tabId))n=!1;else{const d=t.list.findIndex(s=>s.tabId===e);n=t.list.some((s,r)=>r>=d&&!s.isPermanent&&!s.isPin&&s.tabId!==e)}return n}return{getId:o,open:I,go:h,close:a,closeById:x,closeOtherSide:v,closeLeftSide:b,closeRightSide:g,checkCloseOtherSide:S,checkCloseLeftSide:P,checkCloseRightSide:m}}export{B as u};
//# sourceMappingURL=useTabbar-DACflRXF.js.map
