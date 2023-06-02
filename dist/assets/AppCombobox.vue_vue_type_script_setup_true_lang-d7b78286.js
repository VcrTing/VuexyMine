import{b as de,V as fe}from"./VInput-544d2ce5.js";import{m as me}from"./VSelect-330c9d93.js";import{f as be}from"./forwardRefs-a29b5f65.js";import{m as pe,u as he}from"./filter-d02b2f05.js";import{m as xe}from"./transition-6cf434f0.js";import{u as ye,t as R,V as ge,a as j}from"./VList-18a8346a.js";import{at as ke,aB as Ce,aG as Ve,l as V,aE as q,D as p,ax as _e,aL as we,Y as E,bb as G,aA as Ae,q as s,F as W,Z as D,bp as Ie,Q as De,d as X,as as H,o as Q,c as Pe,s as T,b as Fe,A as Se,aa as Re,a as Ee,w as Te,p as Le,ab as Y,ac as Z,t as $e}from"./index-8830fac0.js";import{m as Me,V as J}from"./VTextField-7d05b792.js";import{V as Ne}from"./VMenu-6ba2c256.js";import{V as Be}from"./VCheckboxBtn-cd1193e1.js";import{V as Ue}from"./VChip-3f339be7.js";function Oe(e,d,g){if(d==null)return e;if(Array.isArray(d))throw new Error("Multiple matches is not implemented");return typeof d=="number"&&~d?s(W,null,[s("span",{class:"v-combobox__unmask"},[e.substr(0,d)]),s("span",{class:"v-combobox__mask"},[e.substr(d,g)]),s("span",{class:"v-combobox__unmask"},[e.substr(d+g)])]):e}const ze=ke()({name:"VCombobox",props:{delimiters:Array,...pe({filterKeys:["title"]}),...me({hideNoData:!0,returnObject:!0}),...Ce(Me({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...xe({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,d){var K;let{emit:g,slots:a}=d;const{t:A}=Ve(),y=V(),m=V(!1),h=V(!0),O=V(),L=q(e,"menu"),v=p({get:()=>L.value,set:l=>{var t;L.value&&!l&&((t=O.value)!=null&&t.ΨopenChildren)||(L.value=l)}}),u=V(-1);let $=!1;const ee=p(()=>{var l;return(l=y.value)==null?void 0:l.color}),{items:M,transformIn:le,transformOut:ae}=ye(e),{textColorClasses:te,textColorStyles:ne}=_e(ee),c=q(e,"modelValue",[],l=>le(we(l)),l=>{const t=ae(l);return e.multiple?t:t[0]??null}),_=de(),w=V(e.multiple?"":((K=c.value[0])==null?void 0:K.title)??""),i=p({get:()=>w.value,set:l=>{var t;if(w.value=l,e.multiple||(c.value=[R(e,l)]),l&&e.multiple&&((t=e.delimiters)!=null&&t.length)){const r=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));r.length>1&&(r.forEach(x=>{x=x.trim(),x&&C(R(e,x))}),w.value="")}l||(u.value=-1),h.value=!l}});E(w,l=>{$?G(()=>$=!1):m.value&&!v.value&&(v.value=!0),g("update:search",l)}),E(c,l=>{var t;e.multiple||(w.value=((t=l[0])==null?void 0:t.title)??"")});const{filteredItems:P,getMatches:ue}=he(e,M,p(()=>h.value?void 0:i.value)),k=p(()=>c.value.map(l=>M.value.find(t=>e.valueComparator(t.value,l.value))||l)),N=p(()=>e.hideSelected?P.value.filter(l=>!k.value.some(t=>t.value===l.value)):P.value),B=p(()=>k.value.map(l=>l.props.value)),z=p(()=>k.value[u.value]),U=V();function oe(l){$=!0,e.openOnClear&&(v.value=!0)}function se(){e.hideNoData&&!M.value.length||e.readonly||_!=null&&_.isReadonly.value||(v.value=!0)}function ie(l){var x,n;if(e.readonly||_!=null&&_.isReadonly.value)return;const t=y.value.selectionStart,r=B.value.length;if((u.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(v.value=!0),["Escape"].includes(l.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(h.value=!0),l.key==="ArrowDown"?(x=U.value)==null||x.focus("next"):l.key==="ArrowUp"&&((n=U.value)==null||n.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(u.value<0){l.key==="Backspace"&&!i.value&&(u.value=r-1);return}const o=u.value;z.value&&C(z.value),u.value=o>=r-1?r-2:o}if(l.key==="ArrowLeft"){if(u.value<0&&t>0)return;const o=u.value>-1?u.value-1:r-1;k.value[o]?u.value=o:(u.value=-1,y.value.setSelectionRange(i.value.length,i.value.length))}if(l.key==="ArrowRight"){if(u.value<0)return;const o=u.value+1;k.value[o]?u.value=o:(u.value=-1,y.value.setSelectionRange(0,0))}l.key==="Enter"&&i.value&&(C(R(e,i.value)),i.value="")}}function re(){m.value&&(h.value=!0)}function C(l){if(e.multiple){const t=B.value.findIndex(r=>e.valueComparator(r,l.value));if(t===-1)c.value=[...c.value,l];else{const r=[...c.value];r.splice(t,1),c.value=r}i.value=""}else c.value=[l],w.value=l.title,G(()=>{v.value=!1,h.value=!0})}function ce(l){m.value=!0}function ve(l){var t;l.relatedTarget==null&&((t=y.value)==null||t.focus())}return E(P,l=>{!l.length&&e.hideNoData&&(v.value=!1)}),E(m,l=>{if(l)u.value=-1;else{if(v.value=!1,!e.multiple||!i.value)return;c.value=[...c.value,R(e,i.value)],i.value=""}}),Ae(()=>{const l=!!(e.chips||a.chip),t=!!(!e.hideNoData||N.value.length||a.prepend||a.append||a["no-data"]),r=c.value.length>0,[x]=J.filterProps(e);return s(J,D({ref:y},x,{modelValue:i.value,"onUpdate:modelValue":[n=>i.value=n,n=>{n==null&&(c.value=[])}],focused:m.value,"onUpdate:focused":n=>m.value=n,validationValue:c.externalValue,dirty:r,class:["v-combobox",{"v-combobox--active-menu":v.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":u.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:r?void 0:e.placeholder,"onClick:clear":oe,"onMousedown:control":se,onKeydown:ie}),{...a,default:()=>s(W,null,[s(Ne,D({ref:O,modelValue:v.value,"onUpdate:modelValue":n=>v.value=n,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:re},e.menuProps),{default:()=>[t&&s(ge,{ref:U,selected:B.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onFocusin:ce,onFocusout:ve},{default:()=>{var n,o,F;return[!N.value.length&&!e.hideNoData&&(((n=a["no-data"])==null?void 0:n.call(a))??s(j,{title:A(e.noDataText)},null)),(o=a["prepend-item"])==null?void 0:o.call(a),N.value.map(f=>{var I;return((I=a.item)==null?void 0:I.call(a,{item:f,props:D(f.props,{onClick:()=>C(f)})}))??s(j,D({key:f.value},f.props,{onClick:()=>C(f)}),{prepend:b=>{let{isSelected:S}=b;return e.multiple&&!e.hideSelected?s(Be,{modelValue:S,ripple:!1,tabindex:"-1"},null):void 0},title:()=>{var b,S;return h.value?f.title:Oe(f.title,(b=ue(f))==null?void 0:b.title,((S=i.value)==null?void 0:S.length)??0)}})}),(F=a["append-item"])==null?void 0:F.call(a)]}})]}),k.value.map((n,o)=>{var I;function F(b){b.stopPropagation(),b.preventDefault(),C(n)}const f={"onClick:close":F,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:n.value,class:["v-combobox__selection",o===u.value&&["v-combobox__selection--selected",te.value]],style:o===u.value?ne.value:{}},[l?a.chip?s(Ie,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>{var b;return[(b=a.chip)==null?void 0:b.call(a,{item:n,index:o,props:f})]}}):s(Ue,D({key:"chip",closable:e.closableChips,size:"small",text:n.title},f),null):((I=a.selection)==null?void 0:I.call(a,{item:n,index:o}))??s("span",{class:"v-combobox__selection-text"},[n.title,e.multiple&&o<k.value.length-1&&s("span",{class:"v-combobox__selection-comma"},[De(",")])])])})])})}),be({isFocused:m,isPristine:h,menu:v,search:i,selectionIndex:u,filteredItems:P,select:C},y)}}),Ke=X({name:"AppCombobox",inheritAttrs:!1}),ll=X({...Ke,setup(e){const d=p(()=>{const a=H(),A=a.id||a.label;return A?`app-combobox-${A}-${Math.random().toString(36).slice(2,7)}`:void 0}),g=p(()=>H().label);return(a,A)=>(Q(),Pe("div",{class:$e(["app-combobox flex-grow-1",a.$attrs.class])},[T(g)?(Q(),Fe(fe,{key:0,for:T(d),class:"mb-1 text-body-2 text-high-emphasis",text:T(g)},null,8,["for","text"])):Se("",!0),s(ze,Y(Z({...a.$attrs,class:null,label:void 0,variant:"outlined",id:T(d),menuProps:{contentClass:["app-inner-list","app-combobox__content","v-combobox__content",a.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),Re({_:2},[Ee(a.$slots,(y,m)=>({name:m,fn:Te(h=>[Le(a.$slots,m,Y(Z(h||{})))])}))]),1040)],2))}});export{ze as V,ll as _};