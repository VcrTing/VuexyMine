import{d as V,ag as x,l as p,Y as C,s as t,o as m,b as g,w as a,q as e,n as s,y as i,H as w,c as T,F as k,a as A,G as B,z as u,Q as v,A as D,a5 as H}from"./index-8830fac0.js";import{a as h,V as I}from"./VRow-7ada8777.js";import{V as N,a as z}from"./VTabs-711578d7.js";import{V as L,a as R}from"./VWindowItem-7f8a5a09.js";import{V as S,d as _,a as j,b as F}from"./VCard-2251bf0a.js";import{V as f}from"./VAvatar-5f7d57fd.js";import{V as M}from"./VDivider-4bb05ad5.js";import{b as y}from"./route-block-83d24a4e.js";import"./VSlideGroup-ec6dfbee.js";import"./easing-9f15041e.js";import"./lazy-052468c5.js";import"./transition-6cf434f0.js";import"./ssrBoot-f3c014da.js";import"./VImg-ced242ed.js";const W={class:"text-base mb-3"},q={class:"text-wrap"},E=s("span",null,"Back to categories",-1),G={class:"d-flex justify-space-between flex-wrap mb-2"},P={class:"article-info"},Q={class:"text-h6 mb-1"},U=s("p",{class:"mb-1"}," 55 People found this helpful ",-1),Y=s("h6",{class:"text-h6"},[v(" Still need help? "),s("a",{href:"javascript:void(0);"},"Contact us?")],-1),J={class:"article-votes d-flex align-center gap-3"},K=V({__name:"[article]",setup(O){const r=x(),n=p(),l=p(r.params.article),c=p();return C(l,()=>H.get("/pages/help-center/article",{params:{article:l.value,category:r.params.category,subcategory:r.params.subcategory}}).then(d=>{n.value=d.data.activeSubcategory,c.value=d.data.activeArticle}),{immediate:!0}),(d,b)=>t(c)&&t(n)?(m(),g(I,{key:0},{default:a(()=>[e(h,{cols:"12",md:"4"},{default:a(()=>[s("h6",W,i(t(n).title),1),e(N,{modelValue:t(l),"onUpdate:modelValue":b[0]||(b[0]=o=>w(l)?l.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[(m(!0),T(k,null,A(t(n).articles,o=>(m(),g(z,{key:o.slug,value:o.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:t(r).params.category,subcategory:t(r).params.subcategory,article:o.slug}}},{default:a(()=>[s("span",q,i(o.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(h,{cols:"12",md:"8"},{default:a(()=>[e(L,{class:"disable-tab-transition"},{default:a(()=>[e(R,null,{default:a(()=>[e(S,null,{default:a(()=>[e(_,{class:"pb-0"},{default:a(()=>[e(B,{variant:"tonal",to:{name:"pages-help-center-category-subcategory",params:{category:t(r).params.category,subcategory:t(r).params.subcategory}}},{default:a(()=>[e(u,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),E]),_:1},8,["to"])]),_:1}),e(j,null,{prepend:a(()=>[e(f,{color:"primary",variant:"tonal",rounded:""},{default:a(()=>[e(u,{icon:"tabler-currency-dollar"})]),_:1})]),default:a(()=>[e(F,null,{default:a(()=>[v(i(t(c).title),1)]),_:1})]),_:1}),e(_,{class:"help-center-article-content",innerHTML:t(c).content},null,8,["innerHTML"]),e(M),e(_,null,{default:a(()=>[s("div",G,[s("div",P,[s("h6",Q,i(t(c).title),1),U]),Y]),s("div",J,[e(f,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-up"})]),_:1}),e(f,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-down"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):D("",!0)}});typeof y=="function"&&y(K);export{K as default};
