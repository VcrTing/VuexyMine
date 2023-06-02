import{c as $}from"./VAvatar-5f7d57fd.js";import{at as z,aC as L,au as w,aT as E,bm as G,b0 as R,bA as F,bG as O,b2 as Z,aZ as j,av as q,bh as H,aE as M,D as o,aw as N,bi as U,aU as J,bn as K,b6 as Q,bB as W,bH as X,b8 as Y,ax as p,ay as ee,aG as ae,q as t,bk as te,z as le,bp as d,G as ne,Z as se}from"./index-8830fac0.js";const oe=$("v-alert-title"),ie=["success","info","warning","error"],ue=z()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:L,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ie.includes(e)},...w(),...E(),...G(),...R(),...F(),...O(),...Z(),...j(),...q(),...H({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const i=M(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=N(e),{colorClasses:f,colorStyles:k,variantClasses:C}=U(y),{densityClasses:P}=J(e),{dimensionStyles:V}=K(e),{elevationClasses:x}=Q(e),{locationStyles:g}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Y(e),{textColorClasses:T,textColorStyles:h}=p(ee(e,"borderColor")),{t:B}=ae(),r=o(()=>({"aria-label":B(e.closeLabel),onClick(s){i.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),A=!!(a.title||e.title),D=!!(e.text||a.text),I=!!(a.close||e.closable);return i.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,P.value,x.value,S.value,_.value,C.value,e.class],style:[k.value,V.value,g.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",T.value],style:h.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[A&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),D&&(((c=a.text)==null?void 0:c.call(a))??e.text),(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),I&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:r.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},r.value),null)])]}})}}});export{ue as V,oe as a};
