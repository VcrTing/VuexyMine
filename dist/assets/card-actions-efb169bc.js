import{d as g,l as R,r as x,o as i,b as u,w as t,s as C,c as z,q as e,ab as N,ac as S,n as o,p as V,z as r,I as w,A as m,Q as l,y as b,aq as A,K as D,L as O,H as Y,ar as E,F as L,a as P}from"./index-8830fac0.js";import{V as q,a as F,b as U,d as h}from"./VCard-2251bf0a.js";import{V as j}from"./VOverlay-6ebba9fb.js";import{a as _,V as H}from"./VRow-7ada8777.js";import{V as K}from"./VTable-2ddca156.js";import{V as Q}from"./VChip-3f339be7.js";import"./VAvatar-5f7d57fd.js";import"./VImg-ced242ed.js";import"./transition-6cf434f0.js";import"./lazy-052468c5.js";import"./easing-9f15041e.js";const G={key:0},J={class:"v-card-content"},M=g({inheritAttrs:!1}),W=g({...M,__name:"AppCardActions",props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapsed:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionRemove:{type:Boolean,default:!1},title:{default:void 0}},emits:["collapsed","refresh","trash"],setup(a,{emit:f}){const c=a,s=R(c.collapsed),v=R(!1),n=R(!1),d=()=>{n.value=!1},B=()=>{s.value=!s.value,f("collapsed",s.value)},I=()=>{n.value=!0,f("refresh",d)},T=()=>{v.value=!0,f("trash")};return(p,k)=>{const y=x("IconBtn");return i(),u(A,null,{default:t(()=>[C(v)?m("",!0):(i(),z("div",G,[e(q,N(S(p.$attrs)),{default:t(()=>[e(F,null,{append:t(()=>[o("div",null,[V(p.$slots,"before-actions"),(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(i(),u(y,{key:0,onClick:B},{default:t(()=>[e(r,{size:"20",icon:"tabler-chevron-up",style:w([{transform:C(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(a.actionRemove||a.actionCollapsed)||a.actionRefresh)&&!a.noActions?(i(),u(y,{key:1,onClick:I},{default:t(()=>[e(r,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(a.actionRefresh||a.actionCollapsed)||a.actionRemove)&&!a.noActions?(i(),u(y,{key:2,onClick:T},{default:t(()=>[e(r,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[c.title||p.$slots.title?(i(),u(U,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[l(b(c.title),1)])]),_:3})):m("",!0)]),_:3}),e(A,null,{default:t(()=>[D(o("div",J,[V(p.$slots,"default")],512),[[O,!C(s)]])]),_:3}),e(j,{modelValue:C(n),"onUpdate:modelValue":k[0]||(k[0]=$=>Y(n)?n.value=$:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(E,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}});const X=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," ACTION "),o("th",{scope:"col"}," ICON "),o("th",{scope:"col"}," DETAILS ")])],-1),Z=o("p",null,[l("You can specifically add collapsible action using "),o("code",null,"actionCollapse"),l(" prop")],-1),ee=o("p",null,[l("You can specifically add refresh action using "),o("code",null,"actionRefresh"),l(" prop")],-1),te=o("p",null,[l("You can specifically add remove action using "),o("code",null,"actionRemove"),l(" prop")],-1),oe=o("p",null,[o("code",null,"app-card-actions"),l(" also provides "),o("code",null,"before-actions"),l(" and "),o("code",null,"after-actions"),l(" slot")],-1),le=o("span",null,"You can find more details in our documentation",-1),he=g({__name:"card-actions",setup(a){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],c=s=>{setTimeout(s,3e3)};return(s,v)=>{const n=W;return i(),u(H,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[e(K,null,{default:t(()=>[X,o("tbody",null,[(i(),z(L,null,P(f,d=>o("tr",{key:d.icon},[o("td",null,b(d.action),1),o("td",null,[e(r,{size:"20",icon:d.icon},null,8,["icon"])]),o("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[Z,o("span",null,[l("Click on "),e(r,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:c},{default:t(()=>[e(h,null,{default:t(()=>[ee,o("span",null,[l("Click on "),e(r,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[te,o("span",null,[l("Click on "),e(r,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:c},{"before-actions":t(()=>[e(Q,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[oe,le]),_:1})]),_:1})]),_:1})]),_:1})}}});export{he as default};
