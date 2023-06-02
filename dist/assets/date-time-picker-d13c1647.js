import{_ as u}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-9a0f682d.js";import{d as r,l as _,o as c,b as p,s as m,H as D,w as n,q as l}from"./index-8830fac0.js";import{_ as A}from"./AppCardCode.vue_vue_type_style_index_0_lang-031bfb66.js";import{a as d,V as F}from"./VRow-7ada8777.js";import"./VField-c8919d58.js";import"./VInput-544d2ce5.js";import"./transition-6cf434f0.js";import"./easing-9f15041e.js";import"./vue.runtime.esm-bundler-8d6f47b6.js";import"./VCard-2251bf0a.js";import"./VAvatar-5f7d57fd.js";import"./VImg-ced242ed.js";import"./VDivider-4bb05ad5.js";const V=r({__name:"DemoDateTimePickerInline",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"])}}}),v=r({__name:"DemoDateTimePickerDisabledRange",setup(s){const e=new Date,i=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=_("");return(o,f)=>{const g=u;return c(),p(g,{modelValue:m(t),"onUpdate:modelValue":f[0]||(f[0]=T=>D(t)?t.value=T:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${m(a)}-${m(i)}-20`,to:`${m(a)}-${m(i)}-25`}]}},null,8,["modelValue","config"])}}}),Y=r({__name:"DemoDateTimePickerHumanFriendly",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Human Friendly",config:{dateFormat:"F j, Y"}},null,8,["modelValue"])}}}),$=r({__name:"DemoDateTimePickerRange",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"])}}}),R=r({__name:"DemoDateTimePickerMultipleDates",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),w=r({__name:"DemoDateTimePickerDateAndTime",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}}),H=r({__name:"DemoDateTimePickerTimePicker",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}}),M=r({__name:"DemoDateTimePickerBasic",setup(s){const e=_("");return(i,a)=>{const t=u;return c(),p(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>D(e)?e.value=o:null),label:"Default"},null,8,["modelValue"])}}}),j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`},x={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},I={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},h={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},B={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},Z=r({__name:"date-time-picker",setup(s){return(e,i)=>{const a=M,t=A,o=H,f=w,g=R,T=$,k=Y,P=v,b=V;return c(),p(F,null,{default:n(()=>[l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:j},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:B},{default:n(()=>[l(o)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:x},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:y},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:h},{default:n(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:C},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:I},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:U},{default:n(()=>[l(b)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Z as default};
