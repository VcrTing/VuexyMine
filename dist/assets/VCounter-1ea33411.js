import{at as u,au as i,aK as r,D as s,aA as l,q as n,K as m,L as c}from"./index-8830fac0.js";import{m as v,M as d}from"./transition-6cf434f0.js";const V=u()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...i(),...v({transition:{component:r}})},setup(e,o){let{slots:a}=o;const t=s(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return l(()=>n(d,{transition:e.transition},{default:()=>[m(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[c,e.active]])]})),{}}});export{V};
