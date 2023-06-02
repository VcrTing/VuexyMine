import{_ as A}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{_ as N}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-20b892d1.js";import{d as w,l as g,bq as b,Y as H,o as v,b as U,w as t,q as l,Q as p,$ as I,s as o,H as S,G as _,n as x,y as j,A as q}from"./index-8830fac0.js";import{V as T,a as $,b as B,d as E,e as L}from"./VCard-2251bf0a.js";import{V as k}from"./VForm-86bb0c44.js";import{V as F,a as u}from"./VRow-7ada8777.js";import{V as M}from"./VSwitch-b9d2c9b2.js";import{V as R}from"./VDialog-815bcd9c.js";import{_ as O}from"./AppTextarea.vue_vue_type_script_setup_true_lang-d8655210.js";import{_ as G}from"./CustomRadiosWithIcon-9588bcaf.js";const P=x("p",{class:"mb-0"}," Updating user details will receive a privacy audit. ",-1),ol=w({__name:"UserInfoEditDialog",props:{userData:{default:()=>({id:0,fullName:"",company:"",role:"",username:"",country:"",contact:"",email:"",currentPlan:"",status:"",avatar:"",taskDone:null,projectDone:null,taxId:"",language:""})},isDialogVisible:{type:Boolean}},emits:["submit","update:isDialogVisible"],setup(y,{emit:m}){const n=y,a=g(structuredClone(b(n.userData))),V=g(!1);H(n,()=>{a.value=structuredClone(b(n.userData))});const D=()=>{m("update:isDialogVisible",!1),m("submit",a.value)},f=()=>{a.value=structuredClone(b(n.userData)),m("update:isDialogVisible",!1)},c=r=>{m("update:isDialogVisible",r)};return(r,e)=>{const C=N,i=A;return v(),U(R,{width:r.$vuetify.display.smAndDown?"auto":677,"model-value":n.isDialogVisible,"onUpdate:modelValue":c},{default:t(()=>[l(C,{onClick:e[0]||(e[0]=s=>c(!1))}),l(T,{class:"pa-sm-8 pa-5"},{default:t(()=>[l($,{class:"text-center"},{default:t(()=>[l(B,{class:"text-h5 mb-3"},{default:t(()=>[p(" Edit User Information ")]),_:1}),P]),_:1}),l(E,null,{default:t(()=>[l(k,{class:"mt-6",onSubmit:I(D,["prevent"])},{default:t(()=>[l(F,null,{default:t(()=>[l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).fullName.split(" ")[0],"onUpdate:modelValue":e[1]||(e[1]=s=>o(a).fullName.split(" ")[0]=s),label:"first Name"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).fullName.split(" ")[1],"onUpdate:modelValue":e[2]||(e[2]=s=>o(a).fullName.split(" ")[1]=s),label:"Last Name"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).email,"onUpdate:modelValue":e[3]||(e[3]=s=>o(a).email=s),label:"Billing Email"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).status,"onUpdate:modelValue":e[4]||(e[4]=s=>o(a).status=s),label:"Status"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).taxId,"onUpdate:modelValue":e[5]||(e[5]=s=>o(a).taxId=s),label:"Tax Id"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).contact,"onUpdate:modelValue":e[6]||(e[6]=s=>o(a).contact=s),label:"Contact"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).language,"onUpdate:modelValue":e[7]||(e[7]=s=>o(a).language=s),chips:"",multiple:"",label:"Language"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(i,{modelValue:o(a).country,"onUpdate:modelValue":e[8]||(e[8]=s=>o(a).country=s),label:"Country"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:t(()=>[l(M,{modelValue:o(V),"onUpdate:modelValue":e[9]||(e[9]=s=>S(V)?V.value=s:null),density:"compact",label:"Use as a billing address?"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:t(()=>[l(_,{type:"submit"},{default:t(()=>[p(" Submit ")]),_:1}),l(_,{color:"secondary",variant:"tonal",onClick:f},{default:t(()=>[p(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),Q=x("span",{class:"text-base"}," Add new address for express delivery ",-1),W={class:"d-flex"},sl=w({__name:"AddEditAddressDialog",props:{billingAddress:{default:()=>({companyName:"",billingEmail:"",taxID:"",vatNumber:"",address:"",contact:"",country:null,state:"",zipCode:null})},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(y,{emit:m}){const n=y,a=g(structuredClone(b(n.billingAddress))),V=()=>{m("update:isDialogVisible",!1),a.value=structuredClone(b(n.billingAddress))},D=()=>{m("update:isDialogVisible",!1),m("submit",a.value)},f=g("Home"),c=[{icon:{icon:"custom-home",size:"40"},title:"Home",desc:"Delivery Time (7am - 9pm)",value:"Home"},{icon:{icon:"custom-office",size:"40"},title:"Office",desc:"Delivery Time (10am - 6pm)",value:"Office"}];return(r,e)=>{const C=N,i=G,s=A,z=O;return v(),U(R,{width:r.$vuetify.display.smAndDown?"auto":610,"model-value":n.isDialogVisible,"onUpdate:modelValue":e[11]||(e[11]=d=>r.$emit("update:isDialogVisible",d))},{default:t(()=>[l(C,{onClick:e[0]||(e[0]=d=>r.$emit("update:isDialogVisible",!1))}),n.billingAddress?(v(),U(T,{key:0,class:"pa-sm-8 pa-5"},{default:t(()=>[l($,null,{default:t(()=>[l(B,{class:"text-h4 text-center"},{default:t(()=>[p(j(n.billingAddress.address?"Edit":"Add New")+" Address ",1)]),_:1})]),_:1}),l(E,null,{default:t(()=>[l(L,{class:"text-center mb-6"},{default:t(()=>[Q]),_:1}),x("div",W,[l(i,{"selected-radio":o(f),"onUpdate:selectedRadio":e[1]||(e[1]=d=>S(f)?f.value=d:null),"radio-content":c,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])]),l(k,{class:"mt-4",onSubmit:I(D,["prevent"])},{default:t(()=>[l(F,null,{default:t(()=>[l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).companyName,"onUpdate:modelValue":e[2]||(e[2]=d=>o(a).companyName=d),label:"Company Name"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).billingEmail,"onUpdate:modelValue":e[3]||(e[3]=d=>o(a).billingEmail=d),label:"Email"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).taxID,"onUpdate:modelValue":e[4]||(e[4]=d=>o(a).taxID=d),label:"Tax ID"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).vatNumber,"onUpdate:modelValue":e[5]||(e[5]=d=>o(a).vatNumber=d),label:"VAT Number"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:t(()=>[l(z,{modelValue:o(a).address,"onUpdate:modelValue":e[6]||(e[6]=d=>o(a).address=d),rows:"2",label:"Billing Address"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).contact,"onUpdate:modelValue":e[7]||(e[7]=d=>o(a).contact=d),label:"Contact"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).country,"onUpdate:modelValue":e[8]||(e[8]=d=>o(a).country=d),label:"Country"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).state,"onUpdate:modelValue":e[9]||(e[9]=d=>o(a).state=d),label:"State"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",md:"6"},{default:t(()=>[l(s,{modelValue:o(a).zipCode,"onUpdate:modelValue":e[10]||(e[10]=d=>o(a).zipCode=d),label:"Zip Code",type:"number"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",class:"text-center"},{default:t(()=>[l(_,{type:"submit",class:"me-3"},{default:t(()=>[p(" submit ")]),_:1}),l(_,{variant:"tonal",color:"secondary",onClick:V},{default:t(()=>[p(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})):q("",!0)]),_:1},8,["width","model-value"])}}});export{sl as _,ol as a};