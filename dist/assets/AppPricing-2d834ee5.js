import{d as v,l as w,o as n,c as m,n as o,y as a,q as e,w as s,Q as i,s as p,H as k,z as y,F as f,a as h,Z as C,t as L,K as b,L as P,b as S,G as B,a6 as I,a7 as U,W as z}from"./index-8830fac0.js";import{V as A}from"./VInput-544d2ce5.js";import{V as T}from"./VSwitch-b9d2c9b2.js";import{V as x}from"./VChip-3f339be7.js";import{a as D,V as F}from"./VRow-7ada8777.js";import{V as G,d as c,c as N}from"./VCard-2251bf0a.js";import{V as M}from"./VImg-ced242ed.js";import{V as R,a as j,b as E}from"./VList-18a8346a.js";const W="/assets/3d-safe-box-with-golden-dollar-coins-fcbc95c7.png",Y="/assets/3d-space-rocket-with-smoke-603bb4f0.png",$="/assets/dollar-coins-flying-pink-piggy-bank-85567cfa.png",d=l=>(I("data-v-e546b355"),l=l(),U(),l),q={class:"text-center"},H={class:"text-h2 pricing-title mb-4"},J=d(()=>o("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. ",-1)),K=d(()=>o("p",null,"Choose the best plan to fit your needs.",-1)),Q={class:"d-flex align-center justify-center mx-auto my-10"},Z={class:"position-relative"},O={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},X={class:"text-h5 mb-2"},ee={class:"mb-0"},te={class:"d-flex justify-center align-center"},se=d(()=>o("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),oe={class:"text-5xl font-weight-medium text-primary"},ae=d(()=>o("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),le=v({__name:"AppPricing",props:{title:null,xs:null,sm:null,md:null,lg:null,xl:null},setup(l){const u=l,r=w(!0),V=[{name:"Basic",tagLine:"A simple start for everyone",logo:$,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:W,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom “Thank you” page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:Y,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(re,_)=>(n(),m(f,null,[o("div",q,[o("h4",H,a(u.title?u.title:"Pricing Plans"),1),J,K]),o("div",Q,[e(A,{for:"pricing-plan-toggle",class:"me-2"},{default:s(()=>[i(" Monthly ")]),_:1}),o("div",Z,[e(T,{id:"pricing-plan-toggle",modelValue:p(r),"onUpdate:modelValue":_[0]||(_[0]=t=>k(r)?r.value=t:null),label:"Annual"},null,8,["modelValue"]),o("div",O,[e(y,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(x,{label:"",color:"primary"},{default:s(()=>[i(" Save up to 10% ")]),_:1})])])]),e(F,null,{default:s(()=>[(n(),m(f,null,h(V,t=>e(D,C({key:t.logo},u,{cols:"12"}),{default:s(()=>[e(G,{flat:"",border:"",class:L(t.isPopular?"border-primary border-opacity-100":"")},{default:s(()=>[e(c,{style:{"block-size":"4.125rem"},class:"text-end"},{default:s(()=>[b(e(x,{label:"",color:"primary",size:"small"},{default:s(()=>[i(" Popular ")]),_:2},1536),[[P,t.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:s(()=>[e(M,{height:140,src:t.logo,class:"mx-auto mb-5"},null,8,["src"]),o("h5",X,a(t.name),1),o("p",ee,a(t.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:s(()=>[o("div",te,[se,o("h1",oe,a(p(r)?Math.floor(Number(t.yearlyPrice)/12):t.monthlyPrice),1),ae]),b(o("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},a(t.yearlyPrice===0?"free":`USD ${t.yearlyPrice}/Year`),513),[[P,p(r)]])]),_:2},1024),e(c,{class:"mt-5"},{default:s(()=>[e(R,{class:"card-list"},{default:s(()=>[(n(!0),m(f,null,h(t.features,g=>(n(),S(j,{key:g},{prepend:s(()=>[e(y,{size:14,icon:"tabler-circle",class:"me-3"})]),default:s(()=>[e(E,null,{default:s(()=>[i(a(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(N,null,{default:s(()=>[e(B,{block:"",color:t.current?"success":"primary",variant:t.isPopular?"elevated":"tonal"},{default:s(()=>[i(a(t.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}});const _e=z(le,[["__scopeId","data-v-e546b355"]]);export{_e as _};