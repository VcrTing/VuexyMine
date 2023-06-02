import{u as he}from"./useUserListStore-cf4232f8.js";import{_ as ve,m as ye,v as xe,g as Ae,s as we,a as Ve,b as De,c as Pe,f as Ce,t as $e,d as ke,e as Ue}from"./twitter-aaf235ac.js";import{_ as Te}from"./CustomRadios-eeef826b.js";import{_ as Ie}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-20b892d1.js";import{V as P,a as ie,b as re,e as Se,d as y}from"./VCard-2251bf0a.js";import{d as j,l as _,o as b,b as $,w as t,q as e,Q as o,s as l,G as w,n as a,H as I,c as U,y as i,z as k,A as Y,F as E,a as F,ap as le,a6 as Be,a7 as Ee,W as je,D as ze,a3 as Ne,r as te,Z as H,ai as ce,ak as Oe,dT as We,dU as Le,dV as Me,dW as Fe,$ as Re,ag as He}from"./index-8830fac0.js";import{V as W}from"./VDivider-4bb05ad5.js";import{V as Qe}from"./VDialog-815bcd9c.js";import{a as qe,_ as Je}from"./AddEditAddressDialog.vue_vue_type_script_setup_true_lang-73a320aa.js";import{a as Ge,k as oe}from"./formatters-c683a4a2.js";import{a as v,V as B}from"./VRow-7ada8777.js";import{V as O}from"./VAvatar-5f7d57fd.js";import{V as de}from"./VImg-ced242ed.js";import{V as Q}from"./VChip-3f339be7.js";import{V as G,a as T,b as N,c as ne}from"./VList-18a8346a.js";import{V as X}from"./VSpacer-133aa7d6.js";import{_ as ue}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{_ as me}from"./AppSelect.vue_vue_type_script_setup_true_lang-a56e3b84.js";import{_ as Xe}from"./MoreBtn.vue_vue_type_script_setup_true_lang-b4660021.js";import{u as Ye}from"./useInvoiceStore-2b7bc4f4.js";import{V as Ze}from"./VDataTableServer-7ae44965.js";import{V as Ke}from"./VTooltip-6efeb789.js";import{V as pe}from"./VPagination-8ba8d2ef.js";import{x as et,p as tt,s as at}from"./xamarin-9db23106.js";import{w as _e}from"./VDataTable-2c46a491.js";import{V as lt,a as J}from"./VTimelineItem-a9d01e05.js";import{_ as st,a as ot}from"./CardAddEditDialog.vue_vue_type_script_setup_true_lang-6f315723.js";import{V as fe,a as ge}from"./VAlert-ab7886ae.js";import{V as ae}from"./VTable-2ddca156.js";import{V as nt}from"./VSwitch-b9d2c9b2.js";import{V as ee}from"./VCheckbox-e40b7df4.js";import{V as it}from"./VForm-86bb0c44.js";import{V as rt,a as ct}from"./VTabs-711578d7.js";import{V as dt,a as R}from"./VWindowItem-7f8a5a09.js";import"./VInput-544d2ce5.js";import"./transition-6cf434f0.js";import"./VRadioGroup-5d6bb4f6.js";import"./VSelectionControl-51d2b85b.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-43f1c0f2.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-d8655210.js";import"./VTextarea-ec486dba.js";/* empty css                   */import"./VField-c8919d58.js";import"./VCounter-1ea33411.js";import"./CustomRadiosWithIcon-9588bcaf.js";import"./index-681711bc.js";import"./ssrBoot-f3c014da.js";import"./VTextField-7d05b792.js";import"./VSelect-330c9d93.js";import"./VMenu-6ba2c256.js";import"./VCheckboxBtn-cd1193e1.js";import"./filter-d02b2f05.js";import"./VSlideGroup-ec6dfbee.js";const ut=a("p",{class:"font-weight-medium mb-2"}," User current plan is standard plan ",-1),mt={class:"d-flex justify-space-between flex-wrap"},pt=a("div",{class:"d-flex align-center me-3"},[a("sup",{class:"text-primary"},"$"),a("h3",{class:"text-h3 text-primary"}," 99 "),a("sub",{class:"text-body-1 mt-3"},"/ month")],-1),be=j({__name:"UserUpgradePlanDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup(C,{emit:n}){const h=C,m=_("standard"),r=[{desc:"Standard - $99/month",title:"Standard",value:"standard"},{desc:"Basic - $0/month",title:"Basic",value:"basic"},{desc:"Enterprise - $499/month",title:"Enterprise",value:"enterprice"},{desc:"Company - $999/month",title:"Company",value:"company"}],f=_(!1),c=u=>{n("update:isDialogVisible",u)};return(u,s)=>{const V=Ie,d=Te,g=ve;return b(),$(Qe,{width:u.$vuetify.display.smAndDown?"auto":560,"model-value":h.isDialogVisible,"onUpdate:modelValue":c},{default:t(()=>[e(V,{onClick:s[0]||(s[0]=S=>c(!1))}),e(P,{class:"py-8"},{default:t(()=>[e(V,{variant:"text",size:"small",onClick:s[1]||(s[1]=S=>u.$emit("update:isDialogVisible",!1))}),e(ie,{class:"text-center"},{default:t(()=>[e(re,{class:"text-h5 mb-5"},{default:t(()=>[o(" Upgrade Plan ")]),_:1}),e(Se,null,{default:t(()=>[o(" Choose the best plan for user. ")]),_:1})]),_:1}),e(y,{class:"d-flex align-center flex-column flex-sm-nowrap px-15"},{default:t(()=>[e(d,{"radio-content":r,"selected-radio":l(m),"grid-column":{cols:"12",sm:"6"}},null,8,["selected-radio"]),e(w,{class:"mt-5"},{default:t(()=>[o(" Upgrade ")]),_:1})]),_:1}),e(W,{class:"my-3"}),e(y,{class:"px-15"},{default:t(()=>[ut,a("div",mt,[pt,e(w,{color:"error",variant:"tonal",class:"mt-3",onClick:s[2]||(s[2]=S=>f.value=!0)},{default:t(()=>[o(" Cancel Subscription ")]),_:1})])]),_:1}),e(g,{isDialogVisible:l(f),"onUpdate:isDialogVisible":s[3]||(s[3]=S=>I(f)?f.value=S:null),"cancel-title":"Cancelled","confirm-title":"Unsubscribed!","confirm-msg":"Your subscription cancelled successfully.","confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!"},null,8,["isDialogVisible"])]),_:1})]),_:1},8,["width","model-value"])}}}),L=C=>(Be("data-v-1910b7a7"),C=C(),Ee(),C),_t={key:1,class:"text-5xl font-weight-medium"},ft={class:"text-h4 mt-4"},gt={class:"d-flex align-center me-8"},bt={class:"text-h6"},ht=L(()=>a("span",{class:"text-sm"},"Task Done",-1)),vt={class:"d-flex align-center me-4"},yt={class:"text-h6"},xt=L(()=>a("span",{class:"text-sm"},"Project Done",-1)),At=L(()=>a("p",{class:"text-sm text-uppercase text-disabled"}," Details ",-1)),wt={class:"text-h6"},Vt={class:"text-body-1"},Dt={class:"text-h6"},Pt={class:"text-body-1"},Ct={class:"text-h6"},$t={class:"text-h6"},kt={class:"text-capitalize text-body-1"},Ut={class:"text-h6"},Tt={class:"text-body-1"},It={class:"text-h6"},St={class:"text-body-1"},Bt={class:"text-h6"},Et={class:"text-body-1"},jt={class:"text-h6"},zt={class:"text-body-1"},Nt=L(()=>a("div",{class:"d-flex align-center"},[a("sup",{class:"text-primary text-sm font-weight-regular"},"$"),a("h3",{class:"text-h3 text-primary"}," 99 "),a("sub",{class:"mt-3"},[a("h6",{class:"text-sm font-weight-regular text-disabled"},"/ month")])],-1)),Ot={class:"my-6"},Wt={class:"d-flex mt-3 mb-2"},Lt=L(()=>a("h6",{class:"text-base font-weight-medium"}," Days ",-1)),Mt=L(()=>a("h6",{class:"text-base font-weight-medium"}," 26 of 30 Days ",-1)),Ft=L(()=>a("p",{class:"mt-2"}," 4 days remaining ",-1)),Rt={class:"d-flex gap-4"},Ht=j({__name:"UserBioPanel",props:{userData:null},setup(C){const n=C,h={plan:"Standard",price:99,benefits:["10 Users","Up to 10GB storage","Basic Support"]},m=_(!1),r=_(!1),f=u=>u==="pending"?"warning":u==="active"?"success":u==="inactive"?"secondary":"primary",c=u=>u==="subscriber"?{color:"warning",icon:"tabler-user"}:u==="author"?{color:"success",icon:"tabler-circle-check"}:u==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:u==="editor"?{color:"info",icon:"tabler-pencil"}:u==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(u,s)=>{const V=qe,d=be;return b(),U(E,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[n.userData?(b(),$(P,{key:0},{default:t(()=>[e(y,{class:"text-center pt-15"},{default:t(()=>[e(O,{rounded:"",size:100,color:n.userData.avatar?void 0:"primary",variant:n.userData.avatar?void 0:"tonal"},{default:t(()=>[n.userData.avatar?(b(),$(de,{key:0,src:n.userData.avatar},null,8,["src"])):(b(),U("span",_t,i(l(Ge)(n.userData.fullName)),1))]),_:1},8,["color","variant"]),a("h6",ft,i(n.userData.fullName),1),e(Q,{label:"",color:c(n.userData.role).color,size:"small",class:"text-capitalize mt-3"},{default:t(()=>[o(i(n.userData.role),1)]),_:1},8,["color"])]),_:1}),e(y,{class:"d-flex justify-center flex-wrap mt-3"},{default:t(()=>[a("div",gt,[e(O,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e(k,{icon:"tabler-checkbox"})]),_:1}),a("div",null,[a("h6",bt,i(l(oe)(n.userData.taskDone)),1),ht])]),a("div",vt,[e(O,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e(k,{icon:"tabler-briefcase"})]),_:1}),a("div",null,[a("h6",yt,i(l(oe)(n.userData.projectDone)),1),xt])])]),_:1}),e(W),e(y,null,{default:t(()=>[At,e(G,{class:"card-list mt-2"},{default:t(()=>[e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",wt,[o(" Username: "),a("span",Vt,i(n.userData.fullName),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",Dt,[o(" Email: "),a("span",Pt,i(n.userData.email),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",Ct,[o(" Status: "),e(Q,{label:"",size:"small",color:f(n.userData.status),class:"text-capitalize"},{default:t(()=>[o(i(n.userData.status),1)]),_:1},8,["color"])])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",$t,[o(" Role: "),a("span",kt,i(n.userData.role),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",Ut,[o(" Tax ID: "),a("span",Tt,i(n.userData.taxId),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",It,[o(" Contact: "),a("span",St,i(n.userData.contact),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",Bt,[o(" Language: "),a("span",Et,i(n.userData.language),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(N,null,{default:t(()=>[a("h6",jt,[o(" Country: "),a("span",zt,i(n.userData.country),1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{class:"d-flex justify-center"},{default:t(()=>[e(w,{variant:"elevated",class:"me-4",onClick:s[0]||(s[0]=g=>m.value=!0)},{default:t(()=>[o(" Edit ")]),_:1}),e(w,{variant:"tonal",color:"error"},{default:t(()=>[o(" Suspend ")]),_:1})]),_:1})]),_:1})):Y("",!0)]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,null,{default:t(()=>[e(y,{class:"d-flex"},{default:t(()=>[e(Q,{label:"",color:"primary",size:"small",class:"font-weight-medium"},{default:t(()=>[o(" Popular ")]),_:1}),e(X),Nt]),_:1}),e(y,null,{default:t(()=>[e(G,{class:"card-list"},{default:t(()=>[(b(!0),U(E,null,F(h.benefits,g=>(b(),$(T,{key:g},{default:t(()=>[e(k,{size:"12",color:"#A8AAAE",class:"me-2",icon:"tabler-circle"}),a("span",null,i(g),1)]),_:2},1024))),128))]),_:1}),a("div",Ot,[a("div",Wt,[Lt,e(X),Mt]),e(le,{rounded:"","rounded-bar":"","model-value":65,height:"10",color:"primary"}),Ft]),a("div",Rt,[e(w,{onClick:s[1]||(s[1]=g=>r.value=!0)},{default:t(()=>[o(" Upgrade Plan ")]),_:1}),e(w,{variant:"tonal",color:"default"},{default:t(()=>[o(" cancel ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{isDialogVisible:l(m),"onUpdate:isDialogVisible":s[2]||(s[2]=g=>I(m)?m.value=g:null),"user-data":n.userData},null,8,["isDialogVisible","user-data"]),e(d,{isDialogVisible:l(r),"onUpdate:isDialogVisible":s[3]||(s[3]=g=>I(r)?r.value=g:null)},null,8,["isDialogVisible"])],64)}}});const Qt=je(Ht,[["__scopeId","data-v-1910b7a7"]]),qt={key:0},Jt={class:"me-3 d-flex gap-3"},Gt={class:"d-flex align-center flex-wrap gap-4"},Xt={class:"mb-0"},Yt={class:"mb-0"},Zt={class:"mb-0"},Kt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ea={class:"text-sm text-disabled mb-0"},ta=j({__name:"UserInvoiceTable",setup(C){const n=Ye(),h=_(""),m=_(""),r=_(),f=_(1),c=_(0),u=_([]),s=_({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),V=_(!1),d=[{title:"#ID",key:"id"},{title:"Trending",key:"trending",sortable:!1},{title:"Total",key:"total"},{title:"Date",key:"date"},{title:"Actions",key:"actions",sortable:!1,width:"3rem"}],g=(D,A,M,K,q)=>{V.value=!0,n.fetchInvoices({q:D,status:A,startDate:M,endDate:K,options:q}).then(z=>{u.value=z.data.invoices,f.value=z.data.totalPage,c.value=z.data.totalInvoices,s.value.page=z.data.page}).catch(z=>{console.log(z)}),V.value=!1},S=D=>D==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:D==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:D==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:D==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:D==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:D==="Past Due"?{variant:"error",icon:"tabler-info-circle"}:{variant:"secondary",icon:"tabler-x"},Z=ze(()=>D=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:D}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),x=D=>{n.deleteInvoice(D).then(()=>{var A,M;g(h.value,r.value,(A=m.value)==null?void 0:A.split("to")[0],(M=m.value)==null?void 0:M.split("to")[1],s.value)}).catch(A=>{console.log(A)})};return Ne(()=>{const[D,A]=m.value?m.value.split("to"):"";g(h.value,r.value,D,A,s.value)}),(D,A)=>{const M=me,K=te("RouterLink"),q=te("IconBtn"),z=Xe;return l(u)?(b(),U("section",qt,[e(P,{id:"invoice-list"},{default:t(()=>[e(y,{class:"d-flex align-center flex-wrap gap-4"},{default:t(()=>[a("div",Jt,[e(M,{"model-value":l(s).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":A[0]||(A[0]=p=>l(s).itemsPerPage=parseInt(p,10))},null,8,["model-value"])]),e(X),a("div",Gt,[e(w,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:t(()=>[o(" Export ")]),_:1})])]),_:1}),e(W),e(l(Ze),{"items-per-page":l(s).itemsPerPage,"onUpdate:itemsPerPage":A[2]||(A[2]=p=>l(s).itemsPerPage=p),page:l(s).page,"onUpdate:page":A[3]||(A[3]=p=>l(s).page=p),loading:l(V),"items-length":l(c),headers:d,items:l(u),class:"text-no-wrap","onUpdate:options":A[4]||(A[4]=p=>s.value=p)},{"column.trending":t(()=>[e(k,{size:"22",icon:"tabler-trending-up"})]),"item.id":t(({item:p})=>[e(K,{to:{name:"apps-invoice-preview-id",params:{id:p.value}}},{default:t(()=>[o(" #"+i(p.raw.id),1)]),_:2},1032,["to"])]),"item.trending":t(({item:p})=>[e(Ke,null,{activator:t(({props:se})=>[e(O,H({size:30},se,{color:S(p.raw.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(k,{size:20,icon:S(p.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[a("p",Xt,i(p.raw.invoiceStatus),1),a("p",Yt," Balance: "+i(p.raw.balance),1),a("p",Zt," Due date: "+i(p.raw.dueDate),1)]),_:2},1024)]),"item.total":t(({item:p})=>[o(" $"+i(p.raw.total),1)]),"item.date":t(({item:p})=>[o(i(p.raw.issuedDate),1)]),"item.actions":t(({item:p})=>[e(q,{onClick:se=>x(p.raw.id)},{default:t(()=>[e(k,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(q,{to:{name:"apps-invoice-preview-id",params:{id:p.raw.id}}},{default:t(()=>[e(k,{icon:"tabler-eye"})]),_:2},1032,["to"]),e(z,{"menu-list":l(Z)(p.raw.id),color:"undefined","item-props":""},null,8,["menu-list"])]),bottom:t(()=>[e(W),a("div",Kt,[a("p",ea,i(l(ce)(l(s),l(c))),1),e(pe,{modelValue:l(s).page,"onUpdate:modelValue":A[1]||(A[1]=p=>l(s).page=p),length:Math.ceil(l(c)/l(s).itemsPerPage),"total-visible":D.$vuetify.display.xs?1:Math.ceil(l(c)/l(s).itemsPerPage)},{prev:t(p=>[e(w,H({variant:"tonal",color:"default"},p,{icon:!1}),{default:t(()=>[o(" Previous ")]),_:2},1040)]),next:t(p=>[e(w,H({variant:"tonal",color:"default"},p,{icon:!1}),{default:t(()=>[o(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1})])):Y("",!0)}}});const aa={class:"d-flex"},la=a("div",{class:"flex-grow-1"},null,-1),sa={class:"d-flex"},oa={class:"font-weight-medium mb-0"},na={class:"text-xs text-medium-emphasis mb-0"},ia={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ra={class:"text-sm text-disabled mb-0"},ca=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," 12 Invoices have been paid "),a("span",{class:"app-timeline-meta"},"12 min ago")],-1),da=a("p",{class:"app-timeline-text mb-2"}," Invoices have been paid to the company ",-1),ua={class:"d-flex align-center mt-2"},ma=a("h6",{class:"font-weight-medium text-sm"}," Invoices.pdf ",-1),pa=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," Meeting with john "),a("span",{class:"app-timeline-meta"},"45 min ago")],-1),_a=a("p",{class:"app-timeline-text mb-1"}," React Project meeting with john @10:15am ",-1),fa={class:"d-flex align-center mt-3"},ga=a("div",null,[a("h6",{class:"text-sm font-weight-medium mb-n1"}," John Doe (Client) "),a("span",{class:"text-xs"},"CEO of Kelly Group")],-1),ba=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," Create a new react project for client "),a("span",{class:"app-timeline-meta"},"2 day ago")],-1),ha=a("p",{class:"app-timeline-text mb-0"}," Add files to new design folder ",-1),va=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," 12 Create invoices for client "),a("span",{class:"app-timeline-meta"},"5 day ago")],-1),ya=a("p",{class:"app-timeline-text mb-0"}," Weekly review of freshly prepared design for our new app. ",-1),xa=j({__name:"UserTabAccount",setup(C){const n=[{title:"PROJECT",key:"name"},{title:"TOTAL TASK",key:"totalTask"},{title:"PROGRESS",key:"progress"},{title:"HOURS",key:"hours"}],h=_(""),m=_({itemsPerPage:5,page:1}),r=[{logo:We,name:"BGC eCommerce App",project:"React Project",totalTask:"122/240",progress:78,hours:"18:42"},{logo:Le,name:"Falcon Logo Design",project:"Figma Project",totalTask:"09/56",progress:18,hours:"20:42"},{logo:Me,name:"Dashboard Design",project:"Vuejs Project",totalTask:"290/320",progress:62,hours:"120:87"},{logo:et,name:"Foodista mobile app",project:"Xamarin Project",totalTask:"290/320",progress:8,hours:"120:87"},{logo:tt,name:"Dojo Email App",project:"Python Project",totalTask:"120/186",progress:49,hours:"230:10"},{logo:at,name:"Blockchain Website",project:"Sketch Project",totalTask:"99/109",progress:92,hours:"342:41"},{logo:Fe,name:"Hoffman Website",project:"HTML Project",totalTask:"98/110",progress:88,hours:"12:45"}],f=c=>c<=25?"error":c>25&&c<=50?"warning":c>50&&c<=75?"primary":c>75&&c<=100?"success":"secondary";return(c,u)=>{const s=me,V=ue;return b(),$(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"User's Projects List"},{default:t(()=>[e(y,null,{default:t(()=>[a("div",aa,[e(s,{"model-value":l(m).itemsPerPage,items:[{value:5,title:"5"},{value:10,title:"10"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":u[0]||(u[0]=d=>l(m).itemsPerPage=parseInt(d,10))},null,8,["model-value"]),la,e(V,{modelValue:l(h),"onUpdate:modelValue":u[1]||(u[1]=d=>I(h)?h.value=d:null)},null,8,["modelValue"])])]),_:1}),e(W),e(l(_e),{page:l(m).page,"onUpdate:page":u[3]||(u[3]=d=>l(m).page=d),headers:n,items:r,search:l(h),"items-per-page":l(m).itemsPerPage,"onUpdate:options":u[4]||(u[4]=d=>m.value=d)},{"item.name":t(({item:d})=>[a("div",sa,[e(O,{size:34,class:"me-3",image:d.raw.logo},null,8,["image"]),a("div",null,[a("p",oa,i(d.raw.name),1),a("p",na,i(d.raw.project),1)])])]),"item.progress":t(({item:d})=>[a("span",null,i(d.raw.progress)+"%",1),e(le,{height:6,"model-value":d.raw.progress,rounded:"",color:f(d.raw.progress)},null,8,["model-value","color"])]),bottom:t(()=>[e(W),a("div",ia,[a("p",ra,i(l(ce)(l(m),r.length)),1),e(pe,{modelValue:l(m).page,"onUpdate:modelValue":u[2]||(u[2]=d=>l(m).page=d),length:Math.ceil(r.length/l(m).itemsPerPage),"total-visible":Math.ceil(r.length/l(m).itemsPerPage)},{prev:t(d=>[e(w,H({variant:"tonal",color:"default"},d,{icon:!1}),{default:t(()=>[o(" Previous ")]),_:2},1040)]),next:t(d=>[e(w,H({variant:"tonal",color:"default"},d,{icon:!1}),{default:t(()=>[o(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["page","search","items-per-page"])]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"User Activity Timeline"},{default:t(()=>[e(y,null,{default:t(()=>[e(lt,{density:"compact",align:"start","truncate-line":"both",class:"v-timeline-density-compact"},{default:t(()=>[e(J,{"dot-color":"error",size:"x-small"},{default:t(()=>[ca,da,a("div",ua,[e(k,{color:"error",icon:"tabler-file",size:"18",class:"me-2"}),ma])]),_:1}),e(J,{"dot-color":"primary",size:"x-small"},{default:t(()=>[pa,_a,a("div",fa,[e(O,{size:"34",class:"me-2",image:l(Oe)},null,8,["image"]),ga])]),_:1}),e(J,{"dot-color":"info",size:"x-small"},{default:t(()=>[ba,ha]),_:1}),e(J,{"dot-color":"success",size:"x-small"},{default:t(()=>[va,ya]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(ta)]),_:1})]),_:1})}}}),Aa="/assets/american-express-2c04e485.png",wa=a("h6",{class:"text-base font-weight-medium text-high-emphasis mb-1"}," Your Current Plan is Basic ",-1),Va=a("p",{class:"text-sm mb-3"}," A simple start for everyone ",-1),Da=a("h6",{class:"text-base font-weight-medium text-high-emphasis mb-1"}," Active until Dec 09, 2021 ",-1),Pa=a("p",{class:"text-sm mb-3"}," We will send you a notification upon Subscription expiration ",-1),Ca={class:"text-base font-weight-medium text-high-emphasis mb-1"},$a=a("span",{class:"me-2"},"$199 Per Month",-1),ka=a("p",{class:"text-sm mb-0"}," Standard plan for small to medium businesses ",-1),Ua=a("span",null,"Your plan requires update",-1),Ta=a("div",{class:"d-flex justify-space-between font-weight-bold mt-4 mb-2"},[a("h6",{class:"text-sm"}," Days "),a("h6",{class:"text-sm"}," 26 of 30 Days ")],-1),Ia=a("p",{class:"text-sm mt-2"}," 6 days remaining until your plan requires update ",-1),Sa={class:"d-flex flex-wrap gap-4"},Ba={class:"text-no-wrap"},Ea={class:"text-base my-3"},ja={class:"text-body-1"},za={class:"d-flex flex-column text-sm-end gap-2"},Na={class:"order-sm-0 order-1"},Oa={class:"mt-auto order-sm-1 order-0"},Wa=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Company Name: ")],-1),La={class:"text-body-1 mb-0"},Ma=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Billing Email: ")],-1),Fa={class:"text-body-1 mb-0"},Ra=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Tax ID: ")],-1),Ha={class:"text-body-1 mb-0"},Qa=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," VAT Number: ")],-1),qa={class:"text-body-1 mb-0"},Ja=a("td",{class:"d-flex align-baseline"},[a("h6",{class:"text-h6 text-no-wrap"}," Billing Address: ")],-1),Ga={class:"text-body-1 mb-0"},Xa=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Contact: ")],-1),Ya={class:"text-body-1 mb-0"},Za=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Country: ")],-1),Ka={class:"text-body-1 mb-0"},el=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," State: ")],-1),tl={class:"text-body-1 mb-0"},al=a("td",null,[a("h6",{class:"text-h6 text-no-wrap"}," Zip Code: ")],-1),ll={class:"text-body-1 mb-0"},sl=j({__name:"UserTabBillingsPlans",setup(C){const n=_(!1),h=_(),m=_(!1),r=_(!1),f=_(!1),c=V=>{h.value=V,m.value=!0},u=[{name:"Tom McBride",number:"4851234567899865",expiry:"12/24",isPrimary:!0,type:"mastercard",cvv:"123",image:ye},{name:"Mildred Wagner",number:"5531234567895678",expiry:"02/24",isPrimary:!1,type:"visa",cvv:"456",image:xe},{name:"Lester Jennings",number:"5531234567890002",expiry:"08/20",isPrimary:!1,type:"visa",cvv:"456",image:Aa}],s={companyName:"Pixinvent",billingEmail:"gertrude@gmail.com",taxID:"TAX-875623",vatNumber:"SDF754K77",address:"100 Water Plant Avenue, Building 1303 Wake Island",contact:"+1(609) 933-44-22",country:"USA",state:"Queensland",zipCode:403114};return(V,d)=>{const g=st,S=Je,Z=be;return b(),U(E,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Current Plan"},{default:t(()=>[e(y,null,{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",md:"6","order-md":"1",order:"2"},{default:t(()=>[wa,Va,Da,Pa,a("h6",Ca,[$a,e(Q,{color:"primary",size:"small",label:""},{default:t(()=>[o(" popular ")]),_:1})]),ka]),_:1}),e(v,{cols:"12",md:"6","order-md":"2",order:"1"},{default:t(()=>[e(fe,{color:"warning",variant:"tonal"},{default:t(()=>[e(ge,{class:"mb-2"},{default:t(()=>[o(" We need your attention! ")]),_:1}),Ua]),_:1}),Ta,e(le,{rounded:"",color:"primary",height:10,"model-value":75}),Ia]),_:1}),e(v,{cols:"12",order:"3"},{default:t(()=>[a("div",Sa,[e(w,{onClick:d[0]||(d[0]=x=>n.value=!0)},{default:t(()=>[o(" upgrade plan ")]),_:1}),e(w,{color:"error",variant:"tonal"},{default:t(()=>[o(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Payment Methods"},{append:t(()=>[e(w,{"prepend-icon":"tabler-plus",size:"small",onClick:d[1]||(d[1]=x=>r.value=!l(r))},{default:t(()=>[o(" Add Card ")]),_:1})]),default:t(()=>[e(y,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[(b(),U(E,null,F(u,x=>e(P,{key:x.name,border:"",flat:""},{default:t(()=>[e(y,{class:"d-flex flex-sm-row flex-column pa-4"},{default:t(()=>[a("div",Ba,[e(de,{src:x.image,width:60,height:25},null,8,["src"]),a("p",Ea,[o(i(x.name)+" ",1),x.isPrimary?(b(),$(Q,{key:0,label:"",color:"primary",size:"small"},{default:t(()=>[o(" Primary ")]),_:1})):Y("",!0)]),a("span",ja,"**** **** **** "+i(x.number.substring(x.number.length-4)),1)]),e(X),a("div",za,[a("div",Na,[e(w,{variant:"tonal",class:"me-2",onClick:D=>c(x)},{default:t(()=>[o(" Edit ")]),_:2},1032,["onClick"]),e(w,{color:"secondary",variant:"tonal"},{default:t(()=>[o(" Delete ")]),_:1})]),a("span",Oa,"Card expires at "+i(x.expiry),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Billing Address"},{default:t(()=>[e(y,null,{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",lg:"6"},{default:t(()=>[e(ae,{class:"billing-address-table"},{default:t(()=>[a("tr",null,[Wa,a("td",null,[a("p",La,i(s.companyName),1)])]),a("tr",null,[Ma,a("td",null,[a("p",Fa,i(s.billingEmail),1)])]),a("tr",null,[Ra,a("td",null,[a("p",Ha,i(s.taxID),1)])]),a("tr",null,[Qa,a("td",null,[a("p",qa,i(s.vatNumber),1)])]),a("tr",null,[Ja,a("td",null,[a("p",Ga,i(s.address),1)])])]),_:1})]),_:1}),e(v,{cols:"12",lg:"6"},{default:t(()=>[e(ae,{class:"billing-address-table"},{default:t(()=>[a("tr",null,[Xa,a("td",null,[a("p",Ya,i(s.contact),1)])]),a("tr",null,[Za,a("td",null,[a("p",Ka,i(s.country),1)])]),a("tr",null,[el,a("td",null,[a("p",tl,i(s.state),1)])]),a("tr",null,[al,a("td",null,[a("p",ll,i(s.zipCode),1)])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{isDialogVisible:l(m),"onUpdate:isDialogVisible":d[2]||(d[2]=x=>I(m)?m.value=x:null),"card-details":l(h)},null,8,["isDialogVisible","card-details"]),e(g,{isDialogVisible:l(r),"onUpdate:isDialogVisible":d[3]||(d[3]=x=>I(r)?r.value=x:null)},null,8,["isDialogVisible"]),e(S,{isDialogVisible:l(f),"onUpdate:isDialogVisible":d[4]||(d[4]=x=>I(f)?f.value=x:null),"billing-address":s},null,8,["isDialogVisible"]),e(Z,{isDialogVisible:l(n),"onUpdate:isDialogVisible":d[5]||(d[5]=x=>I(n)?n.value=x:null)},null,8,["isDialogVisible"])],64)}}});const ol="data:image/png;base64,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",nl=a("p",{class:"text-base mt-n6 mb-6"}," Display content from your connected accounts on your site ",-1),il={class:"text-h6"},rl=a("p",{class:"text-base mb-6 mt-n6"}," Display content from social accounts on your site ",-1),cl={class:"text-h6"},dl=["href"],ul=j({__name:"UserTabConnections",setup(C){const n=_([{img:Ae,title:"Google",text:"Calendar and contacts",connected:!0},{img:we,title:"Slack",text:"Communication",connected:!1},{img:Ve,title:"Github",text:"Manage your Git repositories",connected:!0},{img:De,title:"Mailchimp",text:"Email marketing service",connected:!1},{img:Pe,title:"Asana",text:"Communication",connected:!1}]),h=_([{img:Ce,title:"Facebook",connected:!1},{img:$e,title:"Twitter",link:"https://twitter.com/theme_selection",username:"@Theme_Selection",connected:!0},{img:ol,title:"Linkedin",link:"https://www.linkedin.com/company/pixinvent",username:"@Pixinvent",connected:!0},{img:ke,title:"Dribbble",connected:!1},{img:Ue,title:"Behance",connected:!1}]);return(m,r)=>{const f=te("IconBtn");return b(),$(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Connected Accounts"},{default:t(()=>[e(y,null,{default:t(()=>[nl,e(G,{class:"card-list"},{default:t(()=>[(b(!0),U(E,null,F(l(n),c=>(b(),$(T,{key:c.title,subtitle:c.text},{title:t(()=>[a("h6",il,i(c.title),1)]),prepend:t(()=>[e(O,{start:"",size:35,image:c.img},null,8,["image"])]),append:t(()=>[e(nt,{modelValue:c.connected,"onUpdate:modelValue":u=>c.connected=u,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["subtitle"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Social Accounts"},{default:t(()=>[e(y,null,{default:t(()=>[rl,e(G,{class:"card-list"},{default:t(()=>[(b(!0),U(E,null,F(l(h),c=>(b(),$(T,{key:c.title},{prepend:t(()=>[e(O,{start:"",size:"35",rounded:"0",image:c.img},null,8,["image"])]),append:t(()=>[e(f,{variant:"tonal",color:c.connected?"error":"secondary",class:"rounded"},{default:t(()=>[e(k,{icon:c.connected?"tabler-trash":"tabler-link"},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[a("h6",cl,i(c.title),1),c.connected?(b(),$(ne,{key:0},{default:t(()=>[a("a",{href:c.link,target:"_blank",rel:"noopener noreferrer"},i(c.username),9,dl)]),_:2},1024)):(b(),$(ne,{key:1},{default:t(()=>[o(" Not connected ")]),_:1}))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ml=a("p",{class:"text-base mt-2 mb-0"}," You will receive notification for the below selected items. ",-1),pl=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," TYPE "),a("th",{scope:"col"}," EMAIL "),a("th",{scope:"col"}," BROWSER "),a("th",{scope:"col"}," APP ")])],-1),_l=j({__name:"UserTabNotifications",setup(C){const n=_([{type:"New for you",email:!0,browser:!1,app:!1},{type:"Account activity",email:!1,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!0},{type:"A new device is linked",email:!1,browser:!0,app:!1}]);return(h,m)=>(b(),$(P,{class:"user-tab-notification"},{default:t(()=>[e(ie,null,{default:t(()=>[e(re,null,{default:t(()=>[o("Notifications")]),_:1}),ml]),_:1}),e(y,null,{default:t(()=>[e(ae,{class:"border rounded text-no-wrap"},{default:t(()=>[pl,a("tbody",null,[(b(!0),U(E,null,F(l(n),r=>(b(),U("tr",{key:r.type},[a("td",null,i(r.type),1),a("td",null,[e(ee,{modelValue:r.email,"onUpdate:modelValue":f=>r.email=f},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[e(ee,{modelValue:r.browser,"onUpdate:modelValue":f=>r.browser=f},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[e(ee,{modelValue:r.app,"onUpdate:modelValue":f=>r.app=f},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1}),e(y,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(w,null,{default:t(()=>[o("Save changes")]),_:1}),e(w,{color:"secondary",variant:"tonal"},{default:t(()=>[o(" Discard ")]),_:1})]),_:1})]),_:1}))}}),fl=a("span",null,"Minimum 8 characters long, uppercase & symbol",-1),gl=a("span",{class:"text-base"}," Keep your account secure with authentication step. ",-1),bl=a("h4",{class:"font-weight-medium"}," SMS ",-1),hl={class:"d-flex align-center gap-2"},vl=a("p",{class:"mb-0 mt-4"},[o(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),a("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more"),o(". ")],-1),yl={class:"d-flex"},xl=j({__name:"UserTabSecurity",setup(C){const n=_(!1),h=_(!1),m=_("+1(968) 819-2547"),r=_(!1),f=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"activity"}],c=[{browser:" Chrome on Windows",icon:"tabler-brand-windows",color:"info",device:"HP Spectre 360",location:"Switzerland",activity:"10, July 2021 20:07"},{browser:"Chrome on iPhone",icon:"tabler-device-mobile",color:"error",device:"iPhone 12x",location:"Australia",activity:"13, July 2021 10:10"},{browser:"Chrome on Android",icon:"tabler-brand-android",color:"success",device:"Oneplus 9 Pro",location:"Dubai",activity:"14, July 2021 15:15"},{browser:"Chrome on MacOS",icon:"tabler-brand-apple",color:"secondary",device:"Apple iMac",location:"India",activity:"16, July 2021 16:17"},{browser:"Chrome on Windows",icon:"tabler-brand-windows",color:"info",device:"HP Spectre 360",location:"Switzerland",activity:"20, July 2021 21:01"},{browser:"Chrome on Android",icon:"tabler-brand-android",color:"success",device:"Oneplus 9 Pro",location:"Dubai",activity:"20, July 2021 21:01"}];return(u,s)=>{const V=ue,d=ot;return b(),U(E,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Change Password"},{default:t(()=>[e(y,null,{default:t(()=>[e(fe,{variant:"tonal",color:"warning",class:"mb-4"},{default:t(()=>[e(ge,{class:"mb-2"},{default:t(()=>[o(" Ensure that these requirements are met ")]),_:1}),fl]),_:1}),e(it,{onSubmit:s[2]||(s[2]=Re(()=>{},["prevent"]))},{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",md:"6"},{default:t(()=>[e(V,{label:"New Password",type:l(n)?"text":"password","append-inner-icon":l(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[0]||(s[0]=g=>n.value=!l(n))},null,8,["type","append-inner-icon"])]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(V,{label:"Confirm Password",type:l(h)?"text":"password","append-inner-icon":l(h)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[1]||(s[1]=g=>h.value=!l(h))},null,8,["type","append-inner-icon"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(w,{type:"submit"},{default:t(()=>[o(" Change Password ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Two-step verification"},{subtitle:t(()=>[gl]),default:t(()=>[e(y,null,{default:t(()=>[a("div",null,[bl,e(V,{"model-value":l(m),readonly:""},{"append-inner":t(()=>[a("div",hl,[e(k,{icon:"tabler-edit",size:"22",onClick:s[3]||(s[3]=g=>r.value=!0)}),e(k,{size:"22",icon:"tabler-trash"})])]),_:1},8,["model-value"])]),vl]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Recent devices"},{default:t(()=>[e(W),e(l(_e),{items:c,headers:f,"hide-default-footer":""},{"item.browser":t(({item:g})=>[a("div",yl,[e(k,{icon:g.raw.icon,color:g.raw.color,size:22,class:"me-3"},null,8,["icon","color"]),o(" "+i(g.raw.browser),1)])]),bottom:t(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{isDialogVisible:l(r),"onUpdate:isDialogVisible":s[4]||(s[4]=g=>I(r)?r.value=g:null),"sms-code":l(m)},null,8,["isDialogVisible","sms-code"])],64)}}}),Ds=j({__name:"[id]",setup(C){const n=he(),h=He(),m=_(),r=_(null),f=[{icon:"tabler-user-check",title:"Account"},{icon:"tabler-lock",title:"Security"},{icon:"tabler-currency-dollar",title:"Billing & Plan"},{icon:"tabler-bell",title:"Notifications"},{icon:"tabler-link",title:"Connections"}];return n.fetchUser(Number(h.params.id)).then(c=>{m.value=c.data}),(c,u)=>l(m)?(b(),$(B,{key:0},{default:t(()=>[e(v,{cols:"12",md:"5",lg:"4"},{default:t(()=>[e(Qt,{"user-data":l(m)},null,8,["user-data"])]),_:1}),e(v,{cols:"12",md:"7",lg:"8"},{default:t(()=>[e(rt,{modelValue:l(r),"onUpdate:modelValue":u[0]||(u[0]=s=>I(r)?r.value=s:null),class:"v-tabs-pill"},{default:t(()=>[(b(),U(E,null,F(f,s=>e(ct,{key:s.icon},{default:t(()=>[e(k,{size:18,icon:s.icon,class:"me-1"},null,8,["icon"]),a("span",null,i(s.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(dt,{modelValue:l(r),"onUpdate:modelValue":u[1]||(u[1]=s=>I(r)?r.value=s:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(R,null,{default:t(()=>[e(xa)]),_:1}),e(R,null,{default:t(()=>[e(xl)]),_:1}),e(R,null,{default:t(()=>[e(sl)]),_:1}),e(R,null,{default:t(()=>[e(_l)]),_:1}),e(R,null,{default:t(()=>[e(ul)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):Y("",!0)}});export{Ds as default};
