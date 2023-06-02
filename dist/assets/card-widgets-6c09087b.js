import{_ as z}from"./MoreBtn.vue_vue_type_script_setup_true_lang-b4660021.js";import{V as w}from"./vue3-apexcharts.common-56e6d501.js";import{d as $,C as S,D as T,ao as i,o as m,b as x,w as t,q as e,n as r,Q as _,s as n,c as M,F as P,a as L,z as O,y as v,ap as Q,l as X,H as K,I as Z,t as E,a6 as D,a7 as J,W as Y,G as N}from"./index-8830fac0.js";import{a as R,b as B,e as H,d as k,V as W}from"./VCard-2251bf0a.js";import{V as F,a as g}from"./VRow-7ada8777.js";import{V as ee}from"./VChip-3f339be7.js";import{V}from"./VAvatar-5f7d57fd.js";import{V as te}from"./VSlideGroup-ec6dfbee.js";import{V as G}from"./VSlideGroupItem-72211715.js";import{p as oe}from"./formatters-c683a4a2.js";import{V as A,a as I,c as j,b as U}from"./VList-18a8346a.js";import{V as ae}from"./VMenu-6ba2c256.js";import"./vue.runtime.esm-bundler-8d6f47b6.js";import"./VImg-ced242ed.js";import"./transition-6cf434f0.js";import"./index-681711bc.js";import"./ssrBoot-f3c014da.js";import"./VDivider-4bb05ad5.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";import"./easing-9f15041e.js";import"./dialog-transition-43f1c0f2.js";const se={class:"mt-n4 me-n2"},re={class:"d-flex align-center gap-2 mb-2 pb-1 flex-wrap"},le=r("h4",{class:"text-h1"}," $468 ",-1),ie=r("span",{class:"text-sm text-disabled"},"You informed of this week compared to last week",-1),ne={class:"border rounded mt-3 pa-4"},de={class:"d-flex align-center"},ce={class:"text-base font-weight-medium"},pe={class:"text-h4 my-2"},ue=$({__name:"CardWidgetsEarningReportsWeeklyOverview",setup(u){const f=S(),p=[{data:[40,65,50,45,90,55,70]}],b=T(()=>{const a=f.current.value.colors,l=f.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${i(a.primary)},${l["dragged-opacity"]})`,`rgba(${i(a.primary)},${l["dragged-opacity"]})`,`rgba(${i(a.primary)},${l["dragged-opacity"]})`,`rgba(${i(a.primary)},${l["dragged-opacity"]})`,`rgba(${i(a.primary)}, 1)`,`rgba(${i(a.primary)},${l["dragged-opacity"]})`,`rgba(${i(a.primary)},${l["dragged-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${i(a["on-surface"])},${l["disabled-opacity"]})`,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),d=[{color:"primary",icon:"tabler-currency-dollar",title:"Earnings",amount:"$545.69",progress:"55"},{color:"info",icon:"tabler-chart-pie-2",title:"Profit",amount:"$256.34",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Expense",amount:"$74.19",progress:"65"}],c=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,l)=>{const o=z;return m(),x(W,null,{default:t(()=>[e(R,{class:"pb-0"},{append:t(()=>[r("div",se,[e(o,{"menu-list":c})])]),default:t(()=>[e(B,null,{default:t(()=>[_("Earning Reports")]),_:1}),e(H,null,{default:t(()=>[_("Weekly Earnings Overview")]),_:1})]),_:1}),e(k,{class:"mt-n6"},{default:t(()=>[e(F,null,{default:t(()=>[e(g,{cols:"12",sm:"4",class:"d-flex flex-column align-self-end"},{default:t(()=>[r("div",re,[le,e(ee,{label:"",color:"success"},{default:t(()=>[_(" +4.2% ")]),_:1})]),ie]),_:1}),e(g,{cols:"12",sm:"8",class:"pt-0"},{default:t(()=>[e(n(w),{options:n(b),series:p,height:"190"},null,8,["options"])]),_:1})]),_:1}),r("div",ne,[e(F,null,{default:t(()=>[(m(),M(P,null,L(d,s=>e(g,{key:s.title,cols:"12",sm:"4"},{default:t(()=>[r("div",de,[e(V,{rounded:"",size:"26",color:s.color,variant:"tonal",class:"me-2"},{default:t(()=>[e(O,{size:"18",icon:s.icon},null,8,["icon"])]),_:2},1032,["color"]),r("h6",ce,v(s.title),1)]),r("h6",pe,v(s.amount),1),e(Q,{"model-value":s.progress,color:s.color,height:"8",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1})}}}),fe={class:"mt-n4 me-n2"},he=["onClick"],me={class:"mb-0"},be={style:{width:"110px",height:"94px"},class:"d-flex flex-column justify-center align-center rounded me-6 border border-dashed"},ge=$({__name:"CardWidgetsEarningReportsYearlyOverview",setup(u){const f=S(),p=X(0),b=X(),d=T(()=>{const a=f.current.value.colors,l=f.current.value.variables,o=`rgba(${i(a.primary)},${l["dragged-opacity"]})`,s=`rgba(${i(a["on-background"])},${l["high-emphasis-opacity"]})`,C=`rgba(${i(String(l["border-color"]))},${l["border-opacity"]})`,y=`rgba(${i(a["on-surface"])},${l["disabled-opacity"]})`;return[{title:"Orders",icon:"tabler-shopping-cart",chartOptions:{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"32%",startingShape:"rounded",borderRadius:4,distributed:!0,dataLabels:{position:"top"}}},grid:{show:!1,padding:{top:0,bottom:0,left:-10,right:-10}},colors:[o,o,`rgba(${i(a.primary)}, 1)`,o,o,o,o,o,o],dataLabels:{enabled:!0,formatter(h){return`${h}k`},offsetY:-25,style:{fontSize:"15px",colors:[s],fontWeight:"600",fontFamily:"Public Sans"}},legend:{show:!1},tooltip:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!0,color:C},axisTicks:{show:!1},labels:{style:{colors:y,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{offsetX:-15,formatter(h){return`${parseInt(h/1)}k`},style:{fontSize:"13px",colors:y,fontFamily:"Public Sans"},min:0,max:6e4,tickAmount:6}},responsive:[{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"41%"}}}},{breakpoint:590,options:{plotOptions:{bar:{columnWidth:"61%"}},yaxis:{labels:{show:!1}},grid:{padding:{right:0,left:-20}},dataLabels:{style:{fontSize:"12px",fontWeight:"400"}}}}]},series:[{data:[28,10,45,38,15,30,35,30,8]}]},{title:"Sales",icon:"tabler-chart-bar",chartOptions:{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"32%",startingShape:"rounded",borderRadius:4,distributed:!0,dataLabels:{position:"top"}}},grid:{show:!1,padding:{top:0,bottom:0,left:-10,right:-10}},colors:[o,o,o,o,o,o,`rgba(${i(a.primary)}, 1)`,o,o],dataLabels:{enabled:!0,formatter(h){return`${h}k`},offsetY:-25,style:{fontSize:"15px",colors:[s],fontWeight:"600",fontFamily:"Public Sans"}},legend:{show:!1},tooltip:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!0,color:C},axisTicks:{show:!1},labels:{style:{colors:y,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{offsetX:-15,formatter(h){return`${parseInt(h/1)}k`},style:{fontSize:"13px",colors:y,fontFamily:"Public Sans"},min:0,max:6e4,tickAmount:6}},responsive:[{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"41%"}}}},{breakpoint:590,options:{plotOptions:{bar:{columnWidth:"61%"}},grid:{padding:{right:0}},dataLabels:{style:{fontSize:"12px",fontWeight:"400"}},yaxis:{labels:{show:!1}}}}]},series:[{data:[35,25,15,40,42,25,48,8,30]}]},{title:"Profit",icon:"tabler-currency-dollar",chartOptions:{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"32%",startingShape:"rounded",borderRadius:4,distributed:!0,dataLabels:{position:"top"}}},grid:{show:!1,padding:{top:0,bottom:0,left:-10,right:-10}},colors:[o,o,o,o,`rgba(${i(a.primary)}, 1)`,o,o,o,o],dataLabels:{enabled:!0,formatter(h){return`${h}k`},offsetY:-25,style:{fontSize:"15px",colors:[s],fontWeight:"600",fontFamily:"Public Sans"}},legend:{show:!1},tooltip:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!0,color:C},axisTicks:{show:!1},labels:{style:{colors:y,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{offsetX:-15,formatter(h){return`${parseInt(h/1)}k`},style:{fontSize:"13px",colors:y,fontFamily:"Public Sans"},min:0,max:6e4,tickAmount:6}},responsive:[{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"41%"}}}},{breakpoint:590,options:{plotOptions:{bar:{columnWidth:"61%"}},grid:{padding:{right:0}},dataLabels:{style:{fontSize:"12px",fontWeight:"400"}},yaxis:{labels:{show:!1}}}}]},series:[{data:[10,22,27,33,42,32,27,22,8]}]},{title:"Income",icon:"tabler-chart-pie-2",chartOptions:{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"32%",startingShape:"rounded",borderRadius:4,distributed:!0,dataLabels:{position:"top"}}},grid:{show:!1,padding:{top:0,bottom:0,left:-10,right:-10}},colors:[o,o,o,o,o,o,o,o,`rgba(${i(a.primary)}, 1)`],dataLabels:{enabled:!0,formatter(h){return`${h}k`},offsetY:-25,style:{fontSize:"15px",colors:[s],fontWeight:"600",fontFamily:"Public Sans"}},legend:{show:!1},tooltip:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!0,color:C},axisTicks:{show:!1},labels:{style:{colors:y,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{offsetX:-15,formatter(h){return`${parseInt(h/1)}k`},style:{fontSize:"13px",colors:y,fontFamily:"Public Sans"},min:0,max:6e4,tickAmount:6}},responsive:[{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"41%"}}}},{breakpoint:590,options:{plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{style:{fontSize:"12px",fontWeight:"400"}},grid:{padding:{right:0}},yaxis:{labels:{show:!1}}}}]},series:[{data:[5,9,12,18,20,25,30,36,48]}]}]}),c=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,l)=>{const o=z;return m(),x(W,{title:"Earning Reports",subtitle:"Yearly Earnings Overview"},{append:t(()=>[r("div",fe,[e(o,{"menu-list":c})])]),default:t(()=>[e(k,null,{default:t(()=>[e(te,{modelValue:n(p),"onUpdate:modelValue":l[0]||(l[0]=s=>K(p)?p.value=s:null),"show-arrows":"",mandatory:""},{default:t(()=>[(m(!0),M(P,null,L(n(d),(s,C)=>(m(),x(G,{key:s.title,value:C},{default:t(({isSelected:y,toggle:h})=>[r("div",{style:Z([{width:"110px",height:"94px"},y?"border-color:rgb(var(--v-theme-primary)) !important":""]),class:E([y?"border":"border border-dashed","d-flex flex-column justify-center align-center cursor-pointer rounded px-5 py-2 me-6"]),onClick:h},[e(V,{rounded:"",size:"34",color:y?"primary":"secondary",variant:"tonal",class:"mb-2"},{default:t(()=>[e(O,{icon:s.icon},null,8,["icon"])]),_:2},1032,["color"]),r("p",me,v(s.title),1)],14,he)]),_:2},1032,["value"]))),128)),e(G,null,{default:t(()=>[r("div",be,[e(V,{rounded:"",size:"34",color:"default",variant:"tonal",class:"text-disabled"},{default:t(()=>[e(O,{icon:"tabler-plus"})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),(m(),x(n(w),{ref_key:"refVueApexChart",ref:b,key:n(p),options:n(d)[Number(n(p))].chartOptions,series:n(d)[Number(n(p))].series,height:"240",class:"mt-3"},null,8,["options","series"]))]),_:1})]),_:1})}}}),_e=u=>(D("data-v-7e3b511a"),u=u(),J(),u),ye={class:"mt-n4 me-n2"},xe=_e(()=>r("span",{class:"text-success"},"10.2%",-1)),ve={class:"me-3"},we=$({__name:"CardWidgetsProjectStatus",setup(u){const f=S(),p=[{data:[2e3,2e3,4e3,4e3,3050,3050,2e3,2e3,3050,3050,4700,4700,2750,2750,5700,5700]}],b=T(()=>{const a=f.current.value.colors;return{chart:{type:"area",toolbar:!1},markers:{strokeColor:"transparent"},dataLabels:{enabled:!1},grid:{show:!1,padding:{left:-10,right:-5}},stroke:{width:3,curve:"straight"},colors:[a.primary],fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.15,stops:[0,95,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},lines:{show:!1}},yaxis:{labels:{show:!1},min:1e3,max:6e3,tickAmount:5},tooltip:{enabled:!1}}}),d=[{title:"Donates",amount:"$756.26",lossProfit:-139.34},{title:"Podcasts",amount:"$2,207.03",lossProfit:576.24}],c=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,l)=>{const o=z;return m(),x(W,{title:"Project Status"},{append:t(()=>[r("div",ye,[e(o,{"menu-list":c})])]),default:t(()=>[e(k,null,{default:t(()=>[e(A,{class:"card-list"},{default:t(()=>[e(I,{title:"$4,3742"},{prepend:t(()=>[e(V,{color:"primary",variant:"tonal",rounded:"",icon:"tabler-currency-dollar"})]),append:t(()=>[xe]),default:t(()=>[e(j,null,{default:t(()=>[_("Your Earnings")]),_:1})]),_:1})]),_:1}),e(n(w),{options:n(b),series:p,height:"252"},null,8,["options"]),e(A,{class:"card-list"},{default:t(()=>[(m(),M(P,null,L(d,s=>e(I,{key:s.title},{append:t(()=>[r("span",ve,v(s.amount),1),r("span",{class:E(s.lossProfit>0?"text-success":"text-error")},v(n(oe)(s.lossProfit)),3)]),default:t(()=>[e(U,{class:"font-weight-medium"},{default:t(()=>[_(v(s.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}});const ke=Y(we,[["__scopeId","data-v-7e3b511a"]]),$e=r("h6",{class:"text-h5 mb-6"}," Revenue Report ",-1),Se=r("span",null,"2022",-1),Te=r("div",{class:"d-flex flex-column mt-6"},[r("h5",{class:"font-weight-medium text-h3"}," $25,825 "),r("p",null,[r("span",{class:"text-high-emphasis font-weight-medium me-1"},"Budget:"),r("span",null,"56,800")])],-1),We=$({__name:"CardWidgetsRevenueReport",setup(u){const f=S(),p={bar:[{name:"Earning",data:[270,210,180,200,250,280,250,270,150]},{name:"Expense",data:[-140,-160,-180,-150,-100,-60,-80,-100,-180]}],line:[{name:"Last Month",data:[20,10,30,16,24,5,40,23,28,5,30]},{name:"This Month",data:[50,40,60,46,54,35,70,53,58,35,60]}]},b=T(()=>{const d=f.current.value.colors,c=f.current.value.variables,a=`rgba(${i(d["on-surface"])},${c["disabled-opacity"]})`,l=`rgba(${i(d["on-background"])},${c["high-emphasis-opacity"]})`,o=`rgba(${i(String(c["border-color"]))},${c["border-opacity"]})`;return{bar:{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:8,startingShape:"rounded",endingShape:"rounded"}},colors:[d.primary,d.warning],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:6,lineCap:"round",colors:[d.surface]},legend:{show:!0,horizontalAlign:"left",position:"top",fontFamily:"Public Sans",fontSize:"13px",markers:{height:12,width:12,radius:12,offsetX:-3,offsetY:2},labels:{colors:l},itemMargin:{horizontal:5}},grid:{show:!1,padding:{bottom:-8,top:20}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{fontSize:"13px",colors:a,fontFamily:"Public Sans"}},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{offsetX:-16,style:{fontSize:"13px",colors:a,fontFamily:"Public Sans"}},min:-200,max:300,tickAmount:5},responsive:[{breakpoint:1700,options:{plotOptions:{bar:{columnWidth:"43%"}}}},{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"52%"}}}},{breakpoint:1280,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:1025,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:390}}},{breakpoint:991,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:850,options:{plotOptions:{bar:{columnWidth:"48%"}}}},{breakpoint:449,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:360},xaxis:{labels:{offsetY:-5}}}},{breakpoint:394,options:{plotOptions:{bar:{columnWidth:"88%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}},line:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line"},stroke:{curve:"smooth",dashArray:[5,0],width:[1,2]},legend:{show:!1},colors:[o,d.primary],grid:{show:!1,borderColor:o,padding:{top:-30,bottom:-15,left:25}},markers:{size:0},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},tooltip:{enabled:!1}}}});return(d,c)=>(m(),x(W,null,{default:t(()=>[e(F,{"no-gutters":""},{default:t(()=>[e(g,{cols:"12",sm:"8",lg:"8",class:E(d.$vuetify.display.smAndUp?"border-e":"border-b")},{default:t(()=>[e(k,{class:"pe-2"},{default:t(()=>[$e,e(n(w),{options:n(b).bar,series:p.bar,height:"365"},null,8,["options","series"])]),_:1})]),_:1},8,["class"]),e(g,{cols:"12",sm:"4"},{default:t(()=>[e(k,{class:"d-flex flex-column justify-center align-center text-center ps-2 h-100"},{default:t(()=>[e(N,{variant:"outlined",size:"small",class:"d-flex mx-auto"},{append:t(()=>[e(O,{size:"16",icon:"tabler-chevron-down"})]),default:t(()=>[Se,e(ae,{activator:"parent"},{default:t(()=>[e(A,null,{default:t(()=>[(m(),M(P,null,L(["2021","2020","2019"],(a,l)=>e(I,{key:l,value:l},{default:t(()=>[e(U,null,{default:t(()=>[_(v(a),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),Te,e(n(w),{options:n(b).line,series:p.line,height:"100"},null,8,["options","series"]),e(N,{class:"mt-4"},{default:t(()=>[_(" Increase Budget ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ce={class:"mt-n4 me-n2"},Oe=$({__name:"CardWidgetsSales",setup(u){const f=S(),p=[{name:"Sales",data:[32,27,27,30,25,25]},{name:"Visits",data:[25,35,20,20,20,20]}],b=T(()=>{const c=f.current.value.colors,a=f.current.value.variables,l=`rgba(${i(String(a["border-color"]))},${a["border-opacity"]})`,o=`rgba(${i(c["on-surface"])},${a["disabled-opacity"]})`,s=`rgba(${i(c["on-background"])},${a["high-emphasis-opacity"]})`;return{chart:{height:306,type:"radar",toolbar:{show:!1}},plotOptions:{radar:{polygons:{strokeColors:l,connectorColors:l}}},stroke:{show:!1,width:0},legend:{show:!0,fontSize:"13px",position:"bottom",labels:{colors:s,useSeriesColors:!1},markers:{height:10,width:10,offsetX:-3},itemMargin:{horizontal:10},onItemHover:{highlightDataSeries:!1}},colors:[c.primary,c.info],fill:{opacity:[1,.85]},markers:{size:0},grid:{show:!1,padding:{top:0,bottom:-5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"],labels:{show:!0,style:{colors:[o,o,o,o,o,o],fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{show:!1,min:0,max:40,tickAmount:4},responsive:[{breakpoint:769,options:{chart:{height:372}}}]}}),d=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(c,a)=>{const l=z;return m(),x(W,null,{default:t(()=>[e(R,{class:"pb-0"},{append:t(()=>[r("div",Ce,[e(l,{"menu-list":d})])]),default:t(()=>[e(B,null,{default:t(()=>[_("Sales")]),_:1}),e(H,null,{default:t(()=>[_("Last 6 Months")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(n(w),{options:n(b),series:p,height:"345"},null,8,["options"])]),_:1})]),_:1})}}}),Ve=u=>(D("data-v-b4cc8199"),u=u(),J(),u),ze={class:"mt-n4 me-n2"},Me=Ve(()=>r("div",{class:"mt-lg-7 mt-lg-2 mb-lg-9 mb-4"},[r("h4",{class:"text-h1"}," 164 "),r("p",{class:"text-sm mb-0"}," Total Tickets ")],-1)),Pe=$({__name:"CardWidgetsSupportTracker",setup(u){const f=S(),p=[85],b=T(()=>{const a=f.current.value.colors,l=f.current.value.variables;return{labels:["Completed Task"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:a.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${i(a["on-surface"])},${l["disabled-opacity"]})`,fontSize:"13px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${i(a["on-background"])},${l["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"400",fontFamily:"Public Sans"}}}},colors:[a.primary],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,gradientToColors:[a.primary],inverseColors:!0,opacityFrom:1,opacityTo:.6,stops:[30,70,100]}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),d=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"New Tickets",subtitle:"142"},{avatarColor:"info",avatarIcon:"tabler-circle-check",title:"Open Tickets",subtitle:"28"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Response Time",subtitle:"1 Day"}],c=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,l)=>{const o=z;return m(),x(W,null,{default:t(()=>[e(R,{class:"pb-0"},{append:t(()=>[r("div",ze,[e(o,{"menu-list":c})])]),default:t(()=>[e(B,null,{default:t(()=>[_("Support Tracker")]),_:1}),e(H,null,{default:t(()=>[_("Last 7 Days")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(F,null,{default:t(()=>[e(g,{cols:"12",lg:"4",md:"4"},{default:t(()=>[Me,e(A,{class:"card-list"},{default:t(()=>[(m(),M(P,null,L(d,s=>e(I,{key:s.title,title:s.title},{prepend:t(()=>[e(V,{rounded:"",size:"34",color:s.avatarColor,variant:"tonal"},{default:t(()=>[e(O,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[e(j,{class:"text-disabled"},{default:t(()=>[_(v(s.subtitle),1)]),_:2},1024)]),_:2},1032,["title"])),64))]),_:1})]),_:1}),e(g,{cols:"12",lg:"8",md:"8"},{default:t(()=>[e(n(w),{options:n(b),series:p,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})}}});const Le=Y(Pe,[["__scopeId","data-v-b4cc8199"]]),q=u=>(D("data-v-4b9a20e2"),u=u(),J(),u),Fe={class:"d-flex align-center mt-2"},Ae=q(()=>r("h4",{class:"text-h4 me-2"}," 87% ",-1)),Ie={class:"text-success"},Re=q(()=>r("span",{class:"text-base"},"25.8%",-1)),Be={class:"mt-n10 me-n2"},Ee={class:"text-success font-weight-medium"},De=$({__name:"CardWidgetsTotalEarning",setup(u){const f=S(),p=[{name:"Earning",data:[15,10,20,8,12,18,12,5]},{name:"Expense",data:[-7,-10,-7,-12,-6,-9,-5,-8]}],b=T(()=>{const a=f.current.value.colors;return{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},legend:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"18%",borderRadius:5,startingShape:"rounded",endingShape:"rounded"}},colors:[a.error,a.primary],dataLabels:{enabled:!1},grid:{show:!1,padding:{top:-40,bottom:-20,left:-10,right:-2}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1468,options:{plotOptions:{bar:{columnWidth:"22%"}}}},{breakpoint:1197,options:{chart:{height:228},plotOptions:{bar:{borderRadius:8,columnWidth:"26%"}}}},{breakpoint:783,options:{chart:{height:232},plotOptions:{bar:{borderRadius:6,columnWidth:"28%"}}}},{breakpoint:589,options:{plotOptions:{bar:{columnWidth:"16%"}}}},{breakpoint:520,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"18%"}}}},{breakpoint:426,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"20%"}}}},{breakpoint:381,options:{plotOptions:{bar:{columnWidth:"24%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}}}),d=[{avatar:"tabler-brand-paypal",avatarColor:"error",title:"Total Revenue",subtitle:"Client Payment",earning:"+$126"},{avatar:"tabler-currency-dollar",avatarColor:"primary",title:"Total Sales",subtitle:"Total Sales",earning:"+$98"}],c=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,l)=>{const o=z;return m(),x(W,null,{default:t(()=>[e(R,{class:"pb-0"},{append:t(()=>[r("div",Be,[e(o,{"menu-list":c})])]),default:t(()=>[e(B,null,{default:t(()=>[_("Total Earning")]),_:1}),r("div",Fe,[Ae,r("div",Ie,[e(O,{size:"18",icon:"tabler-chevron-up"}),Re])])]),_:1}),e(k,null,{default:t(()=>[e(n(w),{options:n(b),series:p,height:"225",class:"my-2"},null,8,["options"]),e(A,{class:"card-list"},{default:t(()=>[(m(),M(P,null,L(d,s=>e(I,{key:s.title,title:s.title},{prepend:t(()=>[e(V,{size:"34",icon:s.avatar,color:s.avatarColor,variant:"tonal",rounded:""},null,8,["icon","color"])]),append:t(()=>[r("span",Ee,v(s.earning),1)]),default:t(()=>[e(j,{class:"text-disabled"},{default:t(()=>[_(v(s.subtitle),1)]),_:2},1024)]),_:2},1032,["title"])),64))]),_:1})]),_:1})]),_:1})}}});const Je=Y(De,[["__scopeId","data-v-4b9a20e2"]]),ut=$({__name:"card-widgets",setup(u){return(f,p)=>(m(),x(F,null,{default:t(()=>[e(g,{cols:"12",md:"6","order-md":"1",order:"1"},{default:t(()=>[e(ue)]),_:1}),e(g,{cols:"12",sm:"6","order-md":"2",order:"2"},{default:t(()=>[e(Le)]),_:1}),e(g,{cols:"12",md:"4",sm:"6","order-md":"3",order:"3"},{default:t(()=>[e(Oe)]),_:1}),e(g,{cols:"12",md:"8","order-md":"4",order:"4"},{default:t(()=>[e(We)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4","order-md":"5",order:"6"},{default:t(()=>[e(ke)]),_:1}),e(g,{cols:"12",md:"6",lg:"8","order-md":"6",order:"5"},{default:t(()=>[e(ge)]),_:1}),e(g,{cols:"12",sm:"6",lg:"4",order:"7","order-md":"7"},{default:t(()=>[e(Je)]),_:1})]),_:1}))}});export{ut as default};