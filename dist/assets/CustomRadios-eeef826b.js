import{V,a as v}from"./VRow-7ada8777.js";import{V as C}from"./VInput-544d2ce5.js";import{a as R,V as b}from"./VRadioGroup-5d6bb4f6.js";import{V as x}from"./VSpacer-133aa7d6.js";import{d as g,l as h,bq as y,Y as k,o as a,b as c,w as o,q as l,c as i,F as w,a as B,Z as N,t as S,s as _,n as t,p as q,y as d,A as p,H as F,W as L}from"./index-8830fac0.js";const z={class:"flex-grow-1"},A={class:"d-flex align-center mb-1"},D={class:"cr-title text-base"},E={key:0,class:"text-disabled text-base"},G={class:"text-sm mb-0"},H=g({__name:"CustomRadios",props:{selectedRadio:null,radioContent:null,gridColumn:null},emits:["update:selectedRadio"],setup(r,{emit:m}){const n=r,s=h(structuredClone(y(n.selectedRadio)));return k(s,()=>{m("update:selectedRadio",s.value)}),(f,u)=>n.radioContent?(a(),c(b,{key:0,modelValue:_(s),"onUpdate:modelValue":u[0]||(u[0]=e=>F(s)?s.value=e:null)},{default:o(()=>[l(V,null,{default:o(()=>[(a(!0),i(w,null,B(n.radioContent,e=>(a(),c(v,N({key:e.title},r.gridColumn),{default:o(()=>[l(C,{class:S(["custom-input custom-radio rounded cursor-pointer",_(s)===e.value?"active":""])},{default:o(()=>[t("div",null,[l(R,{value:e.value},null,8,["value"])]),q(f.$slots,"default",{item:e},()=>[t("div",z,[t("div",A,[t("h6",D,d(e.title),1),l(x),e.subtitle?(a(),i("span",E,d(e.subtitle),1)):p("",!0)]),t("p",G,d(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["modelValue"])):p("",!0)}});const Y=L(H,[["__scopeId","data-v-49f3406c"]]);export{Y as _};
