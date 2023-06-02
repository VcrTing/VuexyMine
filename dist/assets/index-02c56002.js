import{_ as q}from"./MoreBtn.vue_vue_type_script_setup_true_lang-b4660021.js";import{_ as Q}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{_ as F}from"./AppSelect.vue_vue_type_script_setup_true_lang-a56e3b84.js";import{d as G,l as c,D as H,a3 as Z,r as T,s as a,o as g,b as k,w as o,q as l,n as r,G as D,Q as u,H as S,z as b,y as s,Z as B,c as A,ai as J,A as K}from"./index-8830fac0.js";import{u as O}from"./useInvoiceStore-2b7bc4f4.js";import{a as W}from"./formatters-c683a4a2.js";import{d as X,V as Y}from"./VCard-2251bf0a.js";import{V as ee}from"./VSpacer-133aa7d6.js";import{V as N}from"./VDivider-4bb05ad5.js";import{V as te}from"./VDataTableServer-7ae44965.js";import{V as ae}from"./VTooltip-6efeb789.js";import{V as M}from"./VAvatar-5f7d57fd.js";import{V as oe}from"./VImg-ced242ed.js";import{V as le}from"./VChip-3f339be7.js";import{V as ie}from"./VPagination-8ba8d2ef.js";import"./VMenu-6ba2c256.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";import"./easing-9f15041e.js";import"./transition-6cf434f0.js";import"./dialog-transition-43f1c0f2.js";import"./VList-18a8346a.js";import"./ssrBoot-f3c014da.js";import"./VInput-544d2ce5.js";import"./VTextField-7d05b792.js";/* empty css                   */import"./VField-c8919d58.js";import"./VCounter-1ea33411.js";import"./VSelect-330c9d93.js";import"./VCheckboxBtn-cd1193e1.js";import"./VSelectionControl-51d2b85b.js";import"./index-681711bc.js";import"./VDataTable-2c46a491.js";import"./filter-d02b2f05.js";import"./VTable-2ddca156.js";const ne={class:"me-3 d-flex gap-3"},re={class:"d-flex align-center flex-wrap gap-4"},se={class:"invoice-list-filter"},ce={class:"invoice-list-filter"},de={class:"mb-0"},pe={class:"mb-0"},ue={class:"mb-0"},me={class:"d-flex align-center"},ve={key:1},fe={class:"d-flex flex-column"},_e={class:"text-body-1 font-weight-medium mb-0"},ge={class:"text-sm text-disabled"},we={key:1,class:"text-base"},be={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Ve={class:"text-sm text-disabled mb-0"},lt=G({__name:"index",setup(he){const C=O(),v=c(""),w=c(""),f=c(),_=c(0),V=c([]),h=c([]),n=c({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),y=c(!1),z=c(1);z.value=n.value.page;const L=[{title:"#ID",key:"id"},{title:"Trending",key:"trending",sortable:!1},{title:"Client",key:"client"},{title:"Total",key:"total"},{title:"Issued Date",key:"date"},{title:"Balance",key:"balance"},{title:"Actions",key:"actions",sortable:!1}],$=(i,t,p,P,I)=>{y.value=!0,C.fetchInvoices({q:i,status:t,startDate:p,endDate:P,options:I}).then(d=>{V.value=d.data.invoices,_.value=d.data.totalInvoices,n.value.page=d.data.page}).catch(d=>{console.log(d)}),y.value=!1},m=(i,t)=>i===t?{status:"Unpaid",chip:{color:"error"}}:i===0?{status:"Paid",chip:{color:"success"}}:{status:i,chip:{variant:"text"}},x=i=>i==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:i==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:i==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:i==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:i==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:i==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"},R=H(()=>i=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:i}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),E=i=>{C.deleteInvoice(i).then(()=>{var t,p;$(v.value,f.value,(t=w.value)==null?void 0:t.split("to")[0],(p=w.value)==null?void 0:p.split("to")[1],n.value)}).catch(t=>{console.log(t)})};return Z(()=>{const[i,t]=w.value?w.value.split("to"):"";$(v.value,f.value,i,t,n.value)}),(i,t)=>{const p=F,P=Q,I=T("RouterLink"),d=T("IconBtn"),j=q;return a(V)?(g(),k(Y,{key:0,id:"invoice-list"},{default:o(()=>[l(X,{class:"d-flex align-center flex-wrap gap-4"},{default:o(()=>[r("div",ne,[l(p,{"model-value":a(n).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":t[0]||(t[0]=e=>a(n).itemsPerPage=parseInt(e,10))},null,8,["model-value"]),l(D,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:o(()=>[u(" Create invoice ")]),_:1})]),l(ee),r("div",re,[r("div",se,[l(P,{modelValue:a(v),"onUpdate:modelValue":t[1]||(t[1]=e=>S(v)?v.value=e:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),r("div",ce,[l(p,{modelValue:a(f),"onUpdate:modelValue":t[2]||(t[2]=e=>S(f)?f.value=e:null),placeholder:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),l(N),l(a(te),{modelValue:a(h),"onUpdate:modelValue":t[4]||(t[4]=e=>S(h)?h.value=e:null),"items-per-page":a(n).itemsPerPage,"onUpdate:itemsPerPage":t[5]||(t[5]=e=>a(n).itemsPerPage=e),page:a(n).page,"onUpdate:page":t[6]||(t[6]=e=>a(n).page=e),loading:a(y),"items-length":a(_),headers:L,items:a(V),class:"text-no-wrap","onUpdate:options":t[7]||(t[7]=e=>n.value=e)},{"column.trending":o(()=>[l(b,{size:"22",icon:"tabler-trending-up"})]),"item.id":o(({item:e})=>[l(I,{to:{name:"apps-invoice-preview-id",params:{id:e.value}}},{default:o(()=>[u(" #"+s(e.raw.id),1)]),_:2},1032,["to"])]),"item.trending":o(({item:e})=>[l(ae,null,{activator:o(({props:U})=>[l(M,B({size:30},U,{color:x(e.raw.invoiceStatus).variant,variant:"tonal"}),{default:o(()=>[l(b,{size:20,icon:x(e.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:o(()=>[r("p",de,s(e.raw.invoiceStatus),1),r("p",pe," Balance: "+s(e.raw.balance),1),r("p",ue," Due date: "+s(e.raw.dueDate),1)]),_:2},1024)]),"item.client":o(({item:e})=>[r("div",me,[l(M,{size:"38",color:e.raw.avatar.length?void 0:x(e.raw.invoiceStatus).variant,variant:e.raw.avatar.length?void 0:"tonal",class:"me-3"},{default:o(()=>[e.raw.avatar.length?(g(),k(oe,{key:0,src:e.raw.avatar},null,8,["src"])):(g(),A("span",ve,s(a(W)(e.raw.client.name)),1))]),_:2},1032,["color","variant"]),r("div",fe,[r("h6",_e,s(e.raw.client.name),1),r("span",ge,s(e.raw.client.companyEmail),1)])])]),"item.total":o(({item:e})=>[u(" $"+s(e.raw.total),1)]),"item.date":o(({item:e})=>[u(s(e.raw.issuedDate),1)]),"item.balance":o(({item:e})=>[typeof m(e.raw.balance,e.raw.total).status=="string"?(g(),k(le,{key:0,color:m(e.raw.balance,e.raw.total).chip.color,label:""},{default:o(()=>[u(s(m(e.raw.balance,e.raw.total).status),1)]),_:2},1032,["color"])):(g(),A("span",we,s(Number(m(e.raw.balance,e.raw.total).status)>0?`$${m(e.raw.balance,e.raw.total).status}`:`-$${Math.abs(Number(m(e.raw.balance,e.raw.total).status))}`),1))]),"item.actions":o(({item:e})=>[l(d,{onClick:U=>E(e.raw.id)},{default:o(()=>[l(b,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),l(d,{to:{name:"apps-invoice-preview-id",params:{id:e.raw.id}}},{default:o(()=>[l(b,{icon:"tabler-eye"})]),_:2},1032,["to"]),l(j,{"menu-list":a(R)(e.raw.id),"item-props":"",color:"undefined"},null,8,["menu-list"])]),bottom:o(()=>[l(N),r("div",be,[r("p",Ve,s(a(J)(a(n),a(_))),1),l(ie,{modelValue:a(n).page,"onUpdate:modelValue":t[3]||(t[3]=e=>a(n).page=e),length:Math.ceil(a(_)/a(n).itemsPerPage),"total-visible":i.$vuetify.display.xs?1:Math.ceil(a(_)/a(n).itemsPerPage)},{prev:o(e=>[l(D,B({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[u(" Previous ")]),_:2},1040)]),next:o(e=>[l(D,B({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","loading","items-length","items"])]),_:1})):K("",!0)}}});export{lt as default};
