import{aI as ve,b2 as me,b0 as be,D as l,dL as J,b3 as fe,ay as y,l as U,c8 as he,aM as ke,bS as ee,at as te,bt as ye,au as ae,aO as le,ax as pe,aA as re,az as N,b6 as Se,q as d,K as Q,bo as ge,dM as we,L as Ce,c9 as _e,b8 as Ve,b5 as Z}from"./index-8830fac0.js";const Y=Symbol.for("vuetify:v-slider");function Te(e,t,n){const o=n==="vertical",u=t.getBoundingClientRect(),k="touches"in e?e.touches[0]:e;return o?k.clientY-(u.top+u.height/2):k.clientX-(u.left+u.width/2)}function xe(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Fe=ve({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...me(),...be({elevation:2})},"slider"),Le=e=>{const t=l(()=>parseFloat(e.min)),n=l(()=>parseFloat(e.max)),o=l(()=>+e.step>0?parseFloat(e.step):0),u=l(()=>Math.max(J(o.value),J(t.value)));function k(b){if(o.value<=0)return b;const x=ee(b,t.value,n.value),f=t.value%o.value,C=Math.round((x-f)/o.value)*o.value+f;return parseFloat(Math.min(C,n.value).toFixed(u.value))}return{min:t,max:n,step:o,decimals:u,roundValue:k}},Me=e=>{let{props:t,steps:n,onSliderStart:o,onSliderMove:u,onSliderEnd:k,getActiveThumb:b}=e;const{isRtl:x}=fe(),f=y(t,"reverse"),C=l(()=>{let a=x.value?"rtl":"ltr";return t.reverse&&(a=a==="rtl"?"ltr":"rtl"),a}),{min:v,max:p,step:_,decimals:S,roundValue:z}=n,R=l(()=>parseInt(t.thumbSize,10)),K=l(()=>parseInt(t.tickSize,10)),O=l(()=>parseInt(t.trackSize,10)),V=l(()=>(p.value-v.value)/_.value),E=y(t,"disabled"),A=l(()=>t.direction==="vertical"),F=l(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),L=l(()=>t.error||t.disabled?void 0:t.trackColor??t.color),D=l(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),g=U(!1),h=U(0),M=U(),m=U();function s(a){var H;const i=t.direction==="vertical",ie=i?"top":"left",ne=i?"height":"width",oe=i?"clientY":"clientX",{[ie]:ue,[ne]:ce}=(H=M.value)==null?void 0:H.$el.getBoundingClientRect(),de=xe(a,oe);let X=Math.min(Math.max((de-ue-h.value)/ce,0),1)||0;return(i||C.value==="rtl")&&(X=1-X),z(v.value+X*(p.value-v.value))}const B=a=>{k({value:s(a)}),g.value=!1,h.value=0},P=a=>{m.value=b(a),m.value&&(m.value.focus(),g.value=!0,m.value.contains(a.target)?h.value=Te(a,m.value,t.direction):(h.value=0,u({value:s(a)})),o({value:s(a)}))},T={passive:!0,capture:!0};function r(a){u({value:s(a)})}function c(a){a.stopPropagation(),a.preventDefault(),B(a),window.removeEventListener("mousemove",r,T),window.removeEventListener("mouseup",c)}function w(a){var i;B(a),window.removeEventListener("touchmove",r,T),(i=a.target)==null||i.removeEventListener("touchend",w)}function I(a){var i;P(a),window.addEventListener("touchmove",r,T),(i=a.target)==null||i.addEventListener("touchend",w,{passive:!1})}function $(a){a.preventDefault(),P(a),window.addEventListener("mousemove",r,T),window.addEventListener("mouseup",c,{passive:!1})}const q=a=>{const i=(a-v.value)/(p.value-v.value)*100;return ee(isNaN(i)?0:i,0,100)},j=y(t,"showTicks"),W=l(()=>j.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:q(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseFloat(a),position:q(parseFloat(a)),label:t.ticks[a]})):V.value!==1/0?he(V.value+1).map(a=>{const i=v.value+a*_.value;return{value:i,position:q(i)}}):[]:[]),se=l(()=>W.value.some(a=>{let{label:i}=a;return!!i})),G={activeThumbRef:m,color:y(t,"color"),decimals:S,disabled:E,direction:y(t,"direction"),elevation:y(t,"elevation"),hasLabels:se,horizontalDirection:C,isReversed:f,min:v,max:p,mousePressed:g,numTicks:V,onSliderMousedown:$,onSliderTouchstart:I,parsedTicks:W,parseMouseMove:s,position:q,readonly:y(t,"readonly"),rounded:y(t,"rounded"),roundValue:z,showTicks:j,startOffset:h,step:_,thumbSize:R,thumbColor:F,thumbLabel:y(t,"thumbLabel"),ticks:y(t,"ticks"),tickSize:K,trackColor:L,trackContainerRef:M,trackFillColor:D,trackSize:O,vertical:A};return ke(Y,G),G},Ne=te()({name:"VSliderThumb",directives:{Ripple:ye},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:Boolean,default:!0},...ae()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:o}=t;const u=le(Y);if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:k,step:b,vertical:x,disabled:f,thumbSize:C,thumbLabel:v,direction:p,readonly:_,elevation:S,isReversed:z,horizontalDirection:R,mousePressed:K,decimals:O}=u,{textColorClasses:V,textColorStyles:E}=pe(k),{pageup:A,pagedown:F,end:L,home:D,left:g,right:h,down:M,up:m}=_e,s=[A,F,L,D,g,h,M,m],B=l(()=>b.value?[1,2,3]:[1,5,10]);function P(r,c){if(!s.includes(r.key))return;r.preventDefault();const w=b.value||.1,I=(e.max-e.min)/w;if([g,h,M,m].includes(r.key)){const q=(R.value==="rtl"?[g,m]:[h,m]).includes(r.key)?1:-1,j=r.shiftKey?2:r.ctrlKey?1:0;c=c+q*w*B.value[j]}else if(r.key===D)c=e.min;else if(r.key===L)c=e.max;else{const $=r.key===F?1:-1;c=c-$*w*(I>100?I/10:10)}return Math.max(e.min,Math.min(e.max,c))}function T(r){const c=P(r,e.modelValue);c!=null&&o("update:modelValue",c)}return re(()=>{const r=N(x.value||z.value?100-e.position:e.position,"%"),{elevationClasses:c}=Se(l(()=>f.value?void 0:S.value));return d("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&K.value},e.class],style:[{"--v-slider-thumb-position":r,"--v-slider-thumb-size":N(C.value)},e.style],role:"slider",tabindex:f.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":_.value,"aria-orientation":p.value,onKeydown:_.value?void 0:T},[d("div",{class:["v-slider-thumb__surface",V.value,c.value],style:{...E.value}},null),Q(d("div",{class:["v-slider-thumb__ripple",V.value],style:E.value},null),[[ge("ripple"),e.ripple,null,{circle:!0,center:!0}]]),d(we,{origin:"bottom center"},{default:()=>{var w;return[Q(d("div",{class:"v-slider-thumb__label-container"},[d("div",{class:["v-slider-thumb__label"]},[d("div",null,[((w=n["thumb-label"])==null?void 0:w.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(b.value?O.value:1)])])]),[[Ce,v.value&&e.focused||v.value==="always"]])]}})])}),{}}});const Re=te()({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0},...ae()},emits:{},setup(e,t){let{slots:n}=t;const o=le(Y);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,horizontalDirection:k,parsedTicks:b,rounded:x,showTicks:f,tickSize:C,trackColor:v,trackFillColor:p,trackSize:_,vertical:S,min:z,max:R}=o,{roundedClasses:K}=Ve(x),{backgroundColorClasses:O,backgroundColorStyles:V}=Z(p),{backgroundColorClasses:E,backgroundColorStyles:A}=Z(v),F=l(()=>`inset-${S.value?"block-end":"inline-start"}`),L=l(()=>S.value?"height":"width"),D=l(()=>({[F.value]:"0%",[L.value]:"100%"})),g=l(()=>e.stop-e.start),h=l(()=>({[F.value]:N(e.start,"%"),[L.value]:N(g.value,"%")})),M=l(()=>f.value?(S.value?b.value.slice().reverse():b.value).map((s,B)=>{var r;const P=S.value?"bottom":"margin-inline-start",T=s.value!==z.value&&s.value!==R.value?N(s.position,"%"):void 0;return d("div",{key:s.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":s.position>=e.start&&s.position<=e.stop,"v-slider-track__tick--first":s.value===z.value,"v-slider-track__tick--last":s.value===R.value}],style:{[P]:T}},[(s.label||n["tick-label"])&&d("div",{class:"v-slider-track__tick-label"},[((r=n["tick-label"])==null?void 0:r.call(n,{tick:s,index:B}))??s.label])])}):[]);return re(()=>d("div",{class:["v-slider-track",K.value,e.class],style:[{"--v-slider-track-size":N(_.value),"--v-slider-tick-size":N(C.value),direction:S.value?void 0:k.value},e.style]},[d("div",{class:["v-slider-track__background",E.value,{"v-slider-track__background--opacity":!!u.value||!p.value}],style:{...D.value,...A.value}},null),d("div",{class:["v-slider-track__fill",O.value],style:{...h.value,...V.value}},null),f.value&&d("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":f.value==="always"}]},[M.value])])),{}}});export{Re as V,Me as a,Ne as b,Te as g,Fe as m,Le as u};