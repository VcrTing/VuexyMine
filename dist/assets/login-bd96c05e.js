import{_ as M}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{d as $,l as c,ag as j,k as q,r as E,o as J,b as O,w as t,q as e,n as a,s,V as U,x as k,Q as n,y as z,$ as G,H as b,G as Q,a5 as W}from"./index-8830fac0.js";import{a as H,A as K,u as X}from"./conf-6f0f887e.js";import{u as Y}from"./useAppAbility-125ef4e3.js";import{_ as Z}from"./AuthProvider.vue_vue_type_script_setup_true_lang-62345c41.js";import{u as I}from"./useGenerateImageVariant-d58d2284.js";import{a as ee,b as te,c as se,d as oe}from"./auth-v2-login-illustration-light-19d5c0bb.js";import{m as ae,a as le}from"./misc-mask-light-eb104613.js";import{r as S,e as re}from"./validators-33c369bf.js";import{a as i,V as C}from"./VRow-7ada8777.js";import{V as L}from"./VImg-ced242ed.js";import{V as ne,d as y}from"./VCard-2251bf0a.js";import{V as ie}from"./VAlert-ab7886ae.js";import{V as me}from"./VForm-86bb0c44.js";import{V as ue}from"./VCheckbox-e40b7df4.js";import{V as A}from"./VDivider-4bb05ad5.js";import{b as D}from"./route-block-83d24a4e.js";import"./VInput-544d2ce5.js";import"./transition-6cf434f0.js";import"./VTextField-7d05b792.js";/* empty css                   */import"./VField-c8919d58.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-1ea33411.js";import"./index-681711bc.js";import"./VAvatar-5f7d57fd.js";import"./VCheckboxBtn-cd1193e1.js";import"./VSelectionControl-51d2b85b.js";const ce=async(x,_)=>{let m={};try{if(m=await H.post(`${K}/auth/local`,{identifier:x,password:_}),m&&m.status<=399){const r=m.data;if(r)return X().iogin(r.jwt,r.user)}}catch(r){console.log("登录错误 =",r);return}},de={iogin:ce},pe={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},fe={class:"d-flex align-center justify-center w-100 h-100"},ge={class:"text-h5 mb-1"},_e={class:"text-capitalize"},Ve=a("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),he=a("p",{class:"text-caption mb-2"},[n(" Admin Email: "),a("strong",null,"admin@demo.com"),n(" / Pass: "),a("strong",null,"admin")],-1),be=a("p",{class:"text-caption mb-0"},[n(" Client Email: "),a("strong",null,"client@demo.com"),n(" / Pass: "),a("strong",null,"client")],-1),ye={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},xe=a("span",null,"New on our platform?",-1),ve=a("span",{class:"mx-4"},"or",-1),we=$({__name:"login",setup(x){const _=I(oe,se,te,ee,!0),m=I(le,ae),r=c(!1),v=j(),N=q(),P=Y(),V=c({email:void 0,password:void 0}),w=c(),p=c("admin@demo.com"),f=c("admin"),h=c(!1),R=()=>de.iogin("system@vanlilycake.com","1Qazxc2Wsxcv?!"),T=()=>W.post("/auth/login",{email:p.value,password:f.value}).then(l=>{const{accessToken:o,userData:g,userAbilities:d}=l.data;console.log(l.data),localStorage.setItem("userAbilities",JSON.stringify(d)),P.update(d),localStorage.setItem("userData",JSON.stringify(g)),localStorage.setItem("accessToken",JSON.stringify(o)),N.replace(v.query.to?String(v.query.to):"/")}).catch(l=>{console.log("登录出错 =",l);const{errors:o}=l.response.data;V.value=o,console.error(l.response.data)}),B=async()=>{const l=await R();console.log("myIogin =",l),l?T():console.log("登录失败！！！")},F=()=>{var l;(l=w.value)==null||l.validate().then(({valid:o})=>{o&&B()})};return(l,o)=>{const g=M,d=E("RouterLink");return J(),O(C,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[e(i,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[a("div",pe,[a("div",fe,[e(L,{"max-width":"505",src:s(_),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(L,{src:s(m),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(i,{cols:"12",lg:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(ne,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(y,null,{default:t(()=>[e(s(U),{nodes:s(k).app.logo,class:"mb-6"},null,8,["nodes"]),a("h5",ge,[n(" Welcome to "),a("span",_e,z(s(k).app.title),1),n("! 👋🏻 ")]),Ve]),_:1}),e(y,null,{default:t(()=>[e(ie,{color:"primary",variant:"tonal"},{default:t(()=>[he,be]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(s(me),{ref_key:"refVForm",ref:w,onSubmit:G(F,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:s(p),"onUpdate:modelValue":o[0]||(o[0]=u=>b(p)?p.value=u:null),label:"Email",type:"email",autofocus:"",rules:[s(S),s(re)],"error-messages":s(V).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:s(f),"onUpdate:modelValue":o[1]||(o[1]=u=>b(f)?f.value=u:null),label:"Password",rules:[s(S)],type:s(r)?"text":"password","error-messages":s(V).password,"append-inner-icon":s(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=u=>r.value=!s(r))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),a("div",ye,[e(ue,{modelValue:s(h),"onUpdate:modelValue":o[3]||(o[3]=u=>b(h)?h.value=u:null),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[n(" Forgot Password? ")]),_:1})]),e(Q,{block:"",type:"submit"},{default:t(()=>[n(" Login ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[xe,e(d,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[n(" Create an account ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(A),ve,e(A)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(Z)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});typeof D=="function"&&D(we);export{we as default};
