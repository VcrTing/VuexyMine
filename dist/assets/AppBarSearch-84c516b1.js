import{d as j,dP as E,l as g,bq as f,Y as B,a3 as q,r as H,o as r,b as y,w as t,q as a,s as l,H as O,dC as A,n as o,z as u,P as W,K as w,c as p,F as b,a as x,Q as L,y as v,p as D,L as $,A as z,a6 as X,a7 as Y,W as G}from"./index-8830fac0.js";import{V as J,d as I}from"./VCard-2251bf0a.js";import{V as Z}from"./VTextField-7d05b792.js";import{V as ee}from"./VDivider-4bb05ad5.js";import{V as K,d as se,a as Q,b as te}from"./VList-18a8346a.js";import{V as ae,a as le}from"./VRow-7ada8777.js";import{V as re}from"./VDialog-815bcd9c.js";import"./VAvatar-5f7d57fd.js";import"./VImg-ced242ed.js";import"./transition-6cf434f0.js";/* empty css                   */import"./VField-c8919d58.js";import"./VInput-544d2ce5.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-1ea33411.js";import"./ssrBoot-f3c014da.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";import"./dialog-transition-43f1c0f2.js";const R=m=>(X("data-v-615c1b5c"),m=m(),Y(),m),oe={class:"d-flex align-center text-high-emphasis me-1"},ie={class:"d-flex align-center"},ne={class:"h-100"},ce={class:"text-xs text-disabled text-uppercase"},ue={class:"h-100"},pe={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},de={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},he=R(()=>o("span",null,"No Result For ",-1)),fe={key:0,class:"mt-8"},me=R(()=>o("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),_e=["onClick"],ge={class:"text-sm"},ye=j({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:_}){const i=m,{ctrl_k:F,meta_k:T}=E({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),S=g(),n=g(structuredClone(f(i.searchQuery))),P=g(),C=g(structuredClone(f(i.isDialogVisible))),d=g(structuredClone(f(i.searchResults)));B(i,()=>{C.value=structuredClone(f(i.isDialogVisible)),d.value=structuredClone(f(i.searchResults)),n.value=structuredClone(f(i.searchQuery))}),B([F,T],()=>{C.value=!0,_("update:isDialogVisible",!0)});const V=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};q(()=>{n.value.length||(d.value=[])});const U=e=>{var c,k;e.key==="ArrowDown"?(e.preventDefault(),(c=S.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(k=S.value)==null||k.focus("prev"))},M=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},N=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>{const k=H("IconBtn");return r(),y(re,{"max-width":"600","model-value":l(C),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":M,onKeyup:A(V,["esc"])},{default:t(()=>[a(J,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(I,{class:"pt-1",style:{"min-block-size":"65px"}},{default:t(()=>[a(Z,{ref_key:"refSearchInput",ref:P,modelValue:l(n),"onUpdate:modelValue":[c[0]||(c[0]=s=>O(n)?n.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",l(n)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:A(V,["esc"]),onKeydown:U},{"prepend-inner":t(()=>[o("div",oe,[a(u,{size:"22",icon:"tabler-search",class:"mt-1",style:{opacity:"1"}})])]),"append-inner":t(()=>[o("div",ie,[o("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:V}," [esc] "),a(k,{size:"small",onClick:V},{default:t(()=>[a(u,{icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(ee),a(l(W),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[w(a(l(K),{ref_key:"refSearchList",ref:S,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(r(!0),p(b,null,x(l(d),s=>(r(),p(b,{key:s.title},["header"in s?(r(),y(l(se),{key:0,class:"text-disabled"},{default:t(()=>[L(v(N(s.title)),1)]),_:2},1024)):D(e.$slots,"searchResult",{key:1,item:s},()=>[a(l(Q),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(te,null,{default:t(()=>[L(v(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,l(n).length&&!!l(d).length]]),w(o("div",ne,[D(e.$slots,"suggestions",{},()=>[a(I,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(r(),y(ae,{key:0,class:"gap-y-4"},{default:t(()=>[(r(!0),p(b,null,x(i.suggestions,s=>(r(),y(le,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[o("p",ce,v(s.title),1),a(l(K),{class:"card-list"},{default:t(()=>[(r(!0),p(b,null,x(s.content,h=>(r(),y(l(Q),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:be=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):z("",!0)]),_:1})],!0)],512),[[$,!!l(d)&&!l(n)]]),w(o("div",ue,[D(e.$slots,"noData",{},()=>[a(I,{class:"h-100"},{default:t(()=>[o("div",pe,[a(u,{size:"75",icon:"tabler-file-x"}),o("div",de,[he,o("span",null,'"'+v(l(n))+'"',1)]),i.noDataSuggestion?(r(),p("div",fe,[me,(r(!0),p(b,null,x(i.noDataSuggestion,s=>(r(),p("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),o("span",ge,v(s.title),1)],8,_e))),128))])):z("",!0)])]),_:1})],!0)],512),[[$,!l(d).length&&l(n).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}});const Ue=G(ye,[["__scopeId","data-v-615c1b5c"]]);export{Ue as default};