import{_ as y}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{d as g,l as r,o as n,c as p,n as c,F as h,a as v,b as k,Z as w,s as x}from"./index-8830fac0.js";const O=c("h6",{class:"text-h6 mb-3"}," Type your 6 digit security code ",-1),B=g({__name:"AppOtpInput",props:{totalInput:{default:6},default:{default:""}},emits:["updateOtp"],setup(i,{emit:f}){const u=i,o=r([]),a=r(null);o.value=u.default.split("");const d={style:"max-width: 54px; text-align: center;"},m=(t,l)=>{if(t.code!=="Tab"&&t.code!=="ArrowRight"&&t.code!=="ArrowLeft"&&t.preventDefault(),t.code==="Backspace"&&(o.value[l-1]="",a.value!==null&&l>1)){const e=a.value.children[l-2].querySelector("input");e&&e.focus()}if(/^([0-9])$/.test(t.key)&&(o.value[l-1]=t.key,a.value!==null&&l!==0&&l<a.value.children.length)){const e=a.value.children[l].querySelector("input");e&&e.focus()}f("updateOtp",o.value.join(""))};return(t,l)=>{const s=y;return n(),p("div",null,[O,c("div",{ref_key:"refOtpComp",ref:a,class:"d-flex align-center gap-4"},[(n(!0),p(h,null,v(u.totalInput,e=>(n(),k(s,w({key:e,"model-value":x(o)[e-1]},d,{maxlength:"1",onKeydown:_=>m(_,e)}),null,16,["model-value","onKeydown"]))),128))],512)])}}});export{B as _};