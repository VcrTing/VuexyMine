import{e as p,f as v}from"./VInput-544d2ce5.js";import{f as b}from"./forwardRefs-a29b5f65.js";import{at as h,au as y,l as R,aA as V,q as F}from"./index-8830fac0.js";const D=h()({name:"VForm",props:{...y(),...p()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,f){let{slots:n,emit:i}=f;const r=v(o),s=R();function l(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),i("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return V(()=>{var t;return F("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),b(r,s)}});export{D as V};