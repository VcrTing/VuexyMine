import{_ as K}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{_ as W}from"./AppSelect.vue_vue_type_script_setup_true_lang-a56e3b84.js";import{d as X,l as c,a3 as Y,r as I,o as y,c as k,q as t,w as a,F as ee,a as te,n as r,y as n,t as ae,s,H as m,G as f,Q as u,b as le,z as d,ai as se,Z as R}from"./index-8830fac0.js";import{_ as re}from"./AddNewUserDrawer.vue_vue_type_script_setup_true_lang-35db60a1.js";import{u as oe}from"./useUserListStore-cf4232f8.js";import{a as ie}from"./formatters-c683a4a2.js";import{a as v,V as T}from"./VRow-7ada8777.js";import{V as $,d as C}from"./VCard-2251bf0a.js";import{V as S}from"./VAvatar-5f7d57fd.js";import{V as L}from"./VDivider-4bb05ad5.js";import{V as ne}from"./VSpacer-133aa7d6.js";import{V as ce}from"./VDataTableServer-7ae44965.js";import{V as ue}from"./VImg-ced242ed.js";import{V as de}from"./VChip-3f339be7.js";import{V as pe}from"./VMenu-6ba2c256.js";import{V as me,a as z,b as A}from"./VList-18a8346a.js";import{V as fe}from"./VPagination-8ba8d2ef.js";import"./VInput-544d2ce5.js";import"./transition-6cf434f0.js";import"./VTextField-7d05b792.js";/* empty css                   */import"./VField-c8919d58.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-1ea33411.js";import"./VSelect-330c9d93.js";import"./dialog-transition-43f1c0f2.js";import"./VCheckboxBtn-cd1193e1.js";import"./VSelectionControl-51d2b85b.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-9969d87d.js";import"./validators-33c369bf.js";import"./index-681711bc.js";import"./VForm-86bb0c44.js";import"./VNavigationDrawer-f305b480.js";import"./ssrBoot-f3c014da.js";import"./VDataTable-2c46a491.js";import"./filter-d02b2f05.js";import"./VTable-2ddca156.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";const ve={class:"d-flex align-center gap-2 my-1"},_e={class:"text-h4"},ge={class:"me-3 d-flex gap-3"},be={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},we={style:{"inline-size":"10rem"}},Ve={class:"d-flex align-center"},xe={key:1},ye={class:"d-flex flex-column"},he={class:"text-base"},Ue={class:"text-sm text-medium-emphasis"},Pe={class:"d-flex align-center gap-4"},ke={class:"text-capitalize"},Ce={class:"text-capitalize font-weight-medium"},Se={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Le={class:"text-sm text-disabled mb-0"},gt=X({__name:"index",setup(ze){const h=oe(),_=c(""),g=c(),b=c(),w=c(),E=c(1),p=c(0),B=c([]),i=c({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),M=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],U=()=>{h.fetchUsers({q:_.value,status:w.value,plan:b.value,role:g.value,options:i.value}).then(o=>{B.value=o.data.users,E.value=o.data.totalPage,p.value=o.data.totalUsers,i.value.page=o.data.page}).catch(o=>{console.error(o)})};Y(U);const F=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],j=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],O=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],P=o=>{const l=o.toLowerCase();return l==="subscriber"?{color:"warning",icon:"tabler-circle-check"}:l==="author"?{color:"success",icon:"tabler-user"}:l==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:l==="editor"?{color:"info",icon:"tabler-edit"}:l==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},q=o=>{const l=o.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},V=c(!1),Q=o=>{h.addUser(o),U()},G=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}],D=o=>{h.deleteUser(o),U()};return(o,l)=>{const x=W,H=K,Z=I("RouterLink"),N=I("IconBtn");return y(),k("section",null,[t(T,null,{default:a(()=>[(y(),k(ee,null,te(G,e=>t(v,{key:e.title,cols:"12",sm:"6",lg:"3"},{default:a(()=>[t($,null,{default:a(()=>[t(C,{class:"d-flex justify-space-between"},{default:a(()=>[r("div",null,[r("span",null,n(e.title),1),r("div",ve,[r("h6",_e,n(e.stats),1),r("span",{class:ae(e.percentage>0?"text-success":"text-error")},"( "+n(e.percentage>0?"+":"")+" "+n(e.percentage)+"%)",3)]),r("span",null,n(e.subtitle),1)]),t(S,{rounded:"",variant:"tonal",color:e.color,icon:e.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),t(v,{cols:"12"},{default:a(()=>[t($,{title:"Search Filter"},{default:a(()=>[t(C,null,{default:a(()=>[t(T,null,{default:a(()=>[t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(g),"onUpdate:modelValue":l[0]||(l[0]=e=>m(g)?g.value=e:null),label:"Select Role",items:F,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(b),"onUpdate:modelValue":l[1]||(l[1]=e=>m(b)?b.value=e:null),label:"Select Plan",items:j,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"4"},{default:a(()=>[t(x,{modelValue:s(w),"onUpdate:modelValue":l[2]||(l[2]=e=>m(w)?w.value=e:null),label:"Select Status",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(L),t(C,{class:"d-flex flex-wrap py-4 gap-4"},{default:a(()=>[r("div",ge,[t(x,{"model-value":s(i).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>s(i).itemsPerPage=parseInt(e,10))},null,8,["model-value"])]),t(ne),r("div",be,[r("div",we,[t(H,{modelValue:s(_),"onUpdate:modelValue":l[4]||(l[4]=e=>m(_)?_.value=e:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),t(f,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:a(()=>[u(" Export ")]),_:1}),t(f,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>V.value=!0)},{default:a(()=>[u(" Add New User ")]),_:1})])]),_:1}),t(L),t(s(ce),{"items-per-page":s(i).itemsPerPage,"onUpdate:itemsPerPage":l[7]||(l[7]=e=>s(i).itemsPerPage=e),page:s(i).page,"onUpdate:page":l[8]||(l[8]=e=>s(i).page=e),items:s(B),"items-length":s(p),headers:M,class:"text-no-wrap","onUpdate:options":l[9]||(l[9]=e=>i.value=e)},{"item.user":a(({item:e})=>[r("div",Ve,[t(S,{size:"34",variant:e.raw.avatar?void 0:"tonal",color:e.raw.avatar?void 0:P(e.raw.role).color,class:"me-3"},{default:a(()=>[e.raw.avatar?(y(),le(ue,{key:0,src:e.raw.avatar},null,8,["src"])):(y(),k("span",xe,n(s(ie)(e.raw.fullName)),1))]),_:2},1032,["variant","color"]),r("div",ye,[r("h6",he,[t(Z,{to:{name:"apps-user-view-id",params:{id:e.raw.id}},class:"font-weight-medium user-list-name"},{default:a(()=>[u(n(e.raw.fullName),1)]),_:2},1032,["to"])]),r("span",Ue,"@"+n(e.raw.email),1)])])]),"item.role":a(({item:e})=>[r("div",Pe,[t(S,{size:30,color:P(e.raw.role).color,variant:"tonal"},{default:a(()=>[t(d,{size:20,icon:P(e.raw.role).icon},null,8,["icon"])]),_:2},1032,["color"]),r("span",ke,n(e.raw.role),1)])]),"item.plan":a(({item:e})=>[r("span",Ce,n(e.raw.currentPlan),1)]),"item.status":a(({item:e})=>[t(de,{color:q(e.raw.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[u(n(e.raw.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(N,{onClick:J=>D(e.raw.id)},{default:a(()=>[t(d,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(N,null,{default:a(()=>[t(d,{icon:"tabler-edit"})]),_:1}),t(f,{icon:"",variant:"text",size:"small",color:"medium-emphasis"},{default:a(()=>[t(d,{size:"24",icon:"tabler-dots-vertical"}),t(pe,{activator:"parent"},{default:a(()=>[t(me,null,{default:a(()=>[t(z,{to:{name:"apps-user-view-id",params:{id:e.raw.id}}},{prepend:a(()=>[t(d,{icon:"tabler-eye"})]),default:a(()=>[t(A,null,{default:a(()=>[u("View")]),_:1})]),_:2},1032,["to"]),t(z,{link:""},{prepend:a(()=>[t(d,{icon:"tabler-pencil"})]),default:a(()=>[t(A,null,{default:a(()=>[u("Edit")]),_:1})]),_:1}),t(z,{onClick:J=>D(e.raw.id)},{prepend:a(()=>[t(d,{icon:"tabler-trash"})]),default:a(()=>[t(A,null,{default:a(()=>[u("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(L),r("div",Se,[r("p",Le,n(s(se)(s(i),s(p))),1),t(fe,{modelValue:s(i).page,"onUpdate:modelValue":l[6]||(l[6]=e=>s(i).page=e),length:Math.ceil(s(p)/s(i).itemsPerPage),"total-visible":o.$vuetify.display.xs?1:Math.ceil(s(p)/s(i).itemsPerPage)},{prev:a(e=>[t(f,R({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Previous ")]),_:2},1040)]),next:a(e=>[t(f,R({variant:"tonal",color:"default"},e,{icon:!1}),{default:a(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(re,{isDrawerOpen:s(V),"onUpdate:isDrawerOpen":l[10]||(l[10]=e=>m(V)?V.value=e:null),onUserData:Q},null,8,["isDrawerOpen"])]),_:1})]),_:1})])}}});export{gt as default};
