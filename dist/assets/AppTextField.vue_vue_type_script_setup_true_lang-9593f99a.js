import{V as f}from"./VInput-544d2ce5.js";import{V as u}from"./VTextField-7d05b792.js";import{d as p,D as l,as as n,o as i,c as _,s as t,b,A as x,q as h,aa as V,a as $,w as k,p as v,ab as c,ac as d,t as g}from"./index-8830fac0.js";const A=p({name:"AppTextField",inheritAttrs:!1}),y=p({...A,setup(C){const s=l(()=>{const e=n(),a=e.id||e.label;return a?`app-text-field-${a}-${Math.random().toString(36).slice(2,7)}`:void 0}),r=l(()=>n().label);return(e,a)=>(i(),_("div",{class:g(["app-text-field flex-grow-1",e.$attrs.class])},[t(r)?(i(),b(f,{key:0,for:t(s),class:"mb-1 text-body-2 text-high-emphasis",text:t(r)},null,8,["for","text"])):x("",!0),h(u,c(d({...e.$attrs,class:null,label:void 0,variant:"outlined",id:t(s)})),V({_:2},[$(e.$slots,(w,o)=>({name:o,fn:k(m=>[v(e.$slots,o,c(d(m||{})))])}))]),1040)],2))}});export{y as _};