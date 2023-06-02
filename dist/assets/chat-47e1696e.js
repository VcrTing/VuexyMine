import{_ as it}from"./MoreBtn.vue_vue_type_script_setup_true_lang-b4660021.js";import{af as ct,a5 as j,d as B,r as R,s as t,o as u,c as v,n as a,q as s,w as l,z as p,t as k,b as $,y as b,P as F,F as V,A as U,D as L,dR as rt,H as w,a as O,K as Y,L as W,Q as H,G as et,dn as dt,b7 as ut,l as S,Y as ht,C as mt,dS as X,$ as ft,bb as Z}from"./index-8830fac0.js";import{a as E,b as pt,f as vt}from"./formatters-c683a4a2.js";import{V as I}from"./VAvatar-5f7d57fd.js";import{V as z}from"./VImg-ced242ed.js";import{V as A}from"./VBadge-29ed10c7.js";import{_ as _t}from"./AppTextField.vue_vue_type_script_setup_true_lang-9593f99a.js";import{V as st}from"./VDivider-4bb05ad5.js";import{_ as bt}from"./AppTextarea.vue_vue_type_script_setup_true_lang-d8655210.js";import{V as Ct,a as gt}from"./VRadioGroup-5d6bb4f6.js";import{u as xt,V as yt,a as $t}from"./VMain-77a951cf.js";import{V as q}from"./VNavigationDrawer-f305b480.js";import{V as kt}from"./VSpacer-133aa7d6.js";import{V as Vt}from"./VForm-86bb0c44.js";import{V as wt}from"./VTextField-7d05b792.js";import{b as G}from"./route-block-83d24a4e.js";import"./VMenu-6ba2c256.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-6ebba9fb.js";import"./lazy-052468c5.js";import"./easing-9f15041e.js";import"./transition-6cf434f0.js";import"./dialog-transition-43f1c0f2.js";import"./VList-18a8346a.js";import"./ssrBoot-f3c014da.js";import"./index-681711bc.js";import"./VInput-544d2ce5.js";import"./VTextarea-ec486dba.js";/* empty css                   */import"./VField-c8919d58.js";import"./VCounter-1ea33411.js";import"./VSelectionControl-51d2b85b.js";const P=()=>({resolveAvatarBadgeVariant:e=>e==="online"?"success":e==="busy"?"error":e==="away"?"warning":"secondary"}),M=ct("chat",{state:()=>({contacts:[],chatsContacts:[],profileUser:void 0,activeChat:null}),actions:{async fetchChatsAndContacts(C){const{data:e}=await j.get("/apps/chat/chats-and-contacts",{params:{q:C}}),{chatsContacts:o,contacts:r,profileUser:m}=e;this.chatsContacts=o,this.contacts=r,this.profileUser=m},async getChat(C){const{data:e}=await j.get(`/apps/chat/chats/${C}`);this.activeChat=e},async sendMsg(C){var h,c,f,n,x;const e=(h=this.profileUser)==null?void 0:h.id,{data:o}=await j.post(`/apps/chat/chats/${(c=this.activeChat)==null?void 0:c.contact.id}`,{message:C,senderId:e}),{msg:r,chat:m}=o;if(m!==void 0){const N=this.activeChat;this.chatsContacts.push({...N.contact,chat:{id:m.id,lastMessage:[],unseenMsgs:0,messages:[r]}}),this.activeChat&&(this.activeChat.chat={id:m.id,messages:[r],unseenMsgs:0,userId:(f=this.activeChat)==null?void 0:f.contact.id})}else(x=(n=this.activeChat)==null?void 0:n.chat)==null||x.messages.push(r);const i=this.chatsContacts.find(N=>this.activeChat?N.id===this.activeChat.contact.id:!1);i.chat.lastMessage=r}}}),Ut={class:"text-center px-6"},It={key:1,class:"text-3xl"},St={class:"text-h5"},At={class:"text-capitalize text-medium-emphasis"},Bt={class:"my-8"},zt=a("span",{class:"text-sm text-disabled"},"ABOUT",-1),Mt={class:"mt-2"},Nt={class:"mb-8"},Dt=a("span",{class:"d-block text-sm text-disabled mb-3"},"PERSONAL INFORMATION",-1),Tt={class:"d-flex align-center"},Ot=a("span",null,"lucifer@email.com",-1),Pt={class:"d-flex align-center my-3"},Lt=a("span",null,"+1(123) 456 - 7890",-1),Rt={class:"d-flex align-center"},Ft=a("span",null,"Mon - Fri 10AM - 8PM",-1),Et=a("span",{class:"d-block text-sm text-disabled mb-3"},"OPTIONS",-1),jt={class:"d-flex align-center"},qt=a("span",null,"Add Tag",-1),Ht={class:"d-flex align-center my-3"},Jt=a("span",null,"Important Contact",-1),Kt={class:"d-flex align-center mb-3"},Qt=a("span",null,"Shared Media",-1),Yt={class:"d-flex align-center mb-3"},Wt=a("span",null,"Delete Contact",-1),Xt={class:"d-flex align-center"},Zt=a("span",null,"Block Contact",-1),Gt=B({__name:"ChatActiveChatUserProfileSidebarContent",emits:["close"],setup(C){const e=M(),{resolveAvatarBadgeVariant:o}=P();return(r,m)=>{const i=R("IconBtn");return t(e).activeChat?(u(),v(V,{key:0},[a("div",{class:k(["pt-2 me-2",r.$vuetify.locale.isRtl?"text-left":"text-right"])},[s(i,{onClick:m[0]||(m[0]=h=>r.$emit("close"))},{default:l(()=>[s(p,{icon:"tabler-x",color:"disabled",class:"text-medium-emphasis"})]),_:1})],2),a("div",Ut,[s(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:t(o)(t(e).activeChat.contact.status),class:"chat-user-profile-badge mb-5"},{default:l(()=>[s(I,{size:"80",variant:t(e).activeChat.contact.avatar?void 0:"tonal",color:t(e).activeChat.contact.avatar?void 0:t(o)(t(e).activeChat.contact.status)},{default:l(()=>[t(e).activeChat.contact.avatar?(u(),$(z,{key:0,src:t(e).activeChat.contact.avatar},null,8,["src"])):(u(),v("span",It,b(t(E)(t(e).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),a("h5",St,b(t(e).activeChat.contact.fullName),1),a("p",At,b(t(e).activeChat.contact.role),1)]),s(t(F),{class:"ps-chat-user-profile-sidebar-content text-medium-emphasis pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[a("div",Bt,[zt,a("p",Mt,b(t(e).activeChat.contact.about),1)]),a("div",Nt,[Dt,a("div",Tt,[s(p,{class:"me-2",icon:"tabler-mail",size:"24"}),Ot]),a("div",Pt,[s(p,{class:"me-2",icon:"tabler-phone-call",size:"24"}),Lt]),a("div",Rt,[s(p,{class:"me-2",icon:"tabler-clock",size:"24"}),Ft])]),a("div",null,[Et,a("div",jt,[s(p,{class:"me-2",icon:"tabler-badge",size:"24"}),qt]),a("div",Ht,[s(p,{class:"me-2",icon:"tabler-star",size:"24"}),Jt]),a("div",Kt,[s(p,{class:"me-2",icon:"tabler-photo",size:"24"}),Qt]),a("div",Yt,[s(p,{class:"me-2",icon:"tabler-trash",size:"24"}),Wt]),a("div",Xt,[s(p,{class:"me-2 ms-1",size:"18",icon:"tabler-ban"}),Zt])])]),_:1})],64)):U("",!0)}}}),te={key:1},ee={class:"flex-grow-1 ms-4 overflow-hidden"},se={class:"text-h6 mb-0"},ae={class:"mb-0 text-truncate text-disabled"},oe={key:0,class:"d-flex flex-column align-self-start"},ne={class:"d-block text-sm text-disabled whitespace-no-wrap"},tt=B({__name:"ChatContact",props:{isChatContact:{type:Boolean,default:!1},user:null},setup(C){const e=C,o=M(),{resolveAvatarBadgeVariant:r}=P(),m=L(()=>{var h,c;const i=((h=o.activeChat)==null?void 0:h.contact.id)===e.user.id;return(e.isChatContact||!((c=o.activeChat)!=null&&c.chat))&&i});return(i,h)=>(u(),v("li",{key:t(o).chatsContacts.length,class:k(["chat-contact cursor-pointer d-flex align-center",{"chat-contact-active":t(m)}])},[s(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:t(r)(e.user.status),bordered:"","model-value":e.isChatContact},{default:l(()=>[s(I,{size:"38",variant:e.user.avatar?void 0:"tonal",color:e.user.avatar?void 0:t(r)(e.user.status)},{default:l(()=>[e.user.avatar?(u(),$(z,{key:0,src:e.user.avatar,alt:"John Doe"},null,8,["src"])):(u(),v("span",te,b(t(E)(C.user.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color","model-value"]),a("div",ee,[a("p",se,b(e.user.fullName),1),a("p",ae,b(e.isChatContact&&"chat"in e.user?e.user.chat.lastMessage.message:e.user.about),1)]),e.isChatContact&&"chat"in e.user?(u(),v("div",oe,[a("span",ne,b(t(pt)(e.user.chat.lastMessage.time)),1),e.user.chat.unseenMsgs?(u(),$(A,{key:0,color:"error",inline:"",content:e.user.chat.unseenMsgs,class:"ms-auto"},null,8,["content"])):U("",!0)])):U("",!0)],2))}});const le={key:0,class:"chat-list-header"},ie=a("li",null,[a("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Chats")],-1),ce={class:"no-chat-items-text text-disabled"},re=a("li",null,[a("span",{class:"chat-contact-header d-block text-primary text-xl font-weight-medium"},"Contacts")],-1),de={class:"no-chat-items-text text-disabled"},ue=B({__name:"ChatLeftSidebarContent",props:{search:null,isDrawerOpen:{type:Boolean}},emits:["openChatOfContact","showUserProfile","close"],setup(C){const e=C,{resolveAvatarBadgeVariant:o}=P(),r=rt(e,"search"),m=M();return(i,h)=>{const c=_t,f=R("IconBtn");return u(),v(V,null,[t(m).profileUser?(u(),v("div",le,[s(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:t(o)(t(m).profileUser.status),bordered:""},{default:l(()=>[s(I,{size:"38",class:"cursor-pointer",onClick:h[0]||(h[0]=n=>i.$emit("showUserProfile"))},{default:l(()=>[s(z,{src:t(m).profileUser.avatar,alt:"John Doe"},null,8,["src"])]),_:1})]),_:1},8,["color"]),s(c,{modelValue:t(r),"onUpdate:modelValue":h[1]||(h[1]=n=>w(r)?r.value=n:null),placeholder:"Search...",class:"ms-4 me-1 chat-list-search"},{"prepend-inner":l(()=>[s(p,{size:"22",icon:"tabler-search"})]),_:1},8,["modelValue"]),i.$vuetify.display.smAndDown?(u(),$(f,{key:0,onClick:h[2]||(h[2]=n=>i.$emit("close"))},{default:l(()=>[s(p,{icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})):U("",!0)])):U("",!0),s(st),s(t(F),{tag:"ul",class:"d-flex flex-column gap-y-1 chat-contacts-list px-3 list-none",options:{wheelPropagation:!1}},{default:l(()=>[ie,(u(!0),v(V,null,O(t(m).chatsContacts,n=>(u(),$(tt,{key:`chat-${n.id}`,user:n,"is-chat-contact":"",onClick:x=>i.$emit("openChatOfContact",n.id)},null,8,["user","onClick"]))),128)),Y(a("span",ce,"No chats found",512),[[W,!t(m).chatsContacts.length]]),re,(u(!0),v(V,null,O(t(m).contacts,n=>(u(),$(tt,{key:`chat-${n.id}`,user:n,onClick:x=>i.$emit("openChatOfContact",n.id)},null,8,["user","onClick"]))),128)),Y(a("span",de,"No contacts found",512),[[W,!t(m).contacts.length]])]),_:1})],64)}}});const he={class:"chat-log pa-5"},me={class:"text-sm ms-1 text-disabled"},fe=B({__name:"ChatLog",setup(C){const e=M(),o=L(()=>{var i,h;return{id:(i=e.activeChat)==null?void 0:i.contact.id,avatar:(h=e.activeChat)==null?void 0:h.contact.avatar}}),r=i=>i.isSeen?{icon:"tabler-checks",color:"success"}:i.isDelivered?{icon:"tabler-checks",color:void 0}:{icon:"tabler-check",color:void 0},m=L(()=>{let i=[];const h=[];if(e.activeChat.chat){i=e.activeChat.chat.messages;let c=i[0].senderId,f={senderId:c,messages:[]};i.forEach((n,x)=>{c===n.senderId?f.messages.push({message:n.message,time:n.time,feedback:n.feedback}):(c=n.senderId,h.push(f),f={senderId:n.senderId,messages:[{message:n.message,time:n.time,feedback:n.feedback}]}),x===i.length-1&&h.push(f)})}return h});return(i,h)=>(u(),v("div",he,[(u(!0),v(V,null,O(t(m),(c,f)=>(u(),v("div",{key:c.senderId+String(f),class:k(["chat-group d-flex align-start",[{"flex-row-reverse":c.senderId!==t(o).id,"mb-4":t(m).length-1!==f}]])},[a("div",{class:k(["chat-avatar",c.senderId!==t(o).id?"ms-4":"me-4"])},[s(I,{size:"32"},{default:l(()=>{var n;return[s(z,{src:c.senderId===t(o).id?t(o).avatar:(n=t(e).profileUser)==null?void 0:n.avatar},null,8,["src"])]}),_:2},1024)],2),a("div",{class:k(["chat-body d-inline-flex flex-column",c.senderId!==t(o).id?"align-end":"align-start"])},[(u(!0),v(V,null,O(c.messages,(n,x)=>(u(),v("p",{key:n.time,class:k(["chat-content py-2 px-4 elevation-1",[c.senderId===t(o).id?"chat-left":"bg-primary text-white chat-right",c.messages.length-1!==x?"mb-3":"mb-1"]]),style:{"background-color":"rgb(var(--v-theme-surface))"}},b(n.message),3))),128)),a("div",{class:k({"text-right":c.senderId!==t(o).id})},[c.senderId!==t(o).id?(u(),$(p,{key:0,size:"18",color:r(c.messages[c.messages.length-1].feedback).color},{default:l(()=>[H(b(r(c.messages[c.messages.length-1].feedback).icon),1)]),_:2},1032,["color"])):U("",!0),a("span",me,b(t(vt)(c.messages[c.messages.length-1].time,{hour:"numeric",minute:"numeric"})),1)],2)],2)],2))),128))]))}});const pe={class:"pt-2 me-2 text-end"},ve={class:"text-center px-6"},_e={key:1,class:"text-3xl"},be={class:"text-h5"},Ce={class:"text-capitalize text-medium-emphasis"},ge={class:"my-5 text-medium-emphasis"},xe=a("span",{for:"textarea-user-about",class:"text-sm text-disabled"},"ABOUT",-1),ye={class:"mb-5"},$e=a("span",{class:"text-sm text-disabled"},"STATUS",-1),ke={class:"text-medium-emphasis"},Ve=a("span",{class:"text-sm text-disabled"},"SETTINGS",-1),we={class:"d-flex align-center my-3"},Ue=a("span",{class:"text-high-emphasis"},"Two-step Verification",-1),Ie={class:"d-flex align-center mb-3"},Se=a("span",{class:"text-high-emphasis"},"Notification",-1),Ae={class:"d-flex align-center mb-3"},Be=a("span",{class:"text-high-emphasis"},"Invite Friends",-1),ze={class:"d-flex align-center"},Me=a("span",{class:"text-high-emphasis"},"Delete Account",-1),Ne=B({__name:"ChatUserProfileSidebarContent",emits:["close"],setup(C){const e=M(),{resolveAvatarBadgeVariant:o}=P(),r=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}];return(m,i)=>{const h=R("IconBtn"),c=bt;return t(e).profileUser?(u(),v(V,{key:0},[a("div",pe,[s(h,{onClick:i[0]||(i[0]=f=>m.$emit("close"))},{default:l(()=>[s(p,{class:"text-medium-emphasis",color:"disabled",icon:"tabler-x"})]),_:1})]),a("div",ve,[s(A,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:t(o)(t(e).profileUser.status),class:"chat-user-profile-badge mb-3"},{default:l(()=>[s(I,{size:"84",variant:t(e).profileUser.avatar?void 0:"tonal",color:t(e).profileUser.avatar?void 0:t(o)(t(e).profileUser.status)},{default:l(()=>[t(e).profileUser.avatar?(u(),$(z,{key:0,src:t(e).profileUser.avatar},null,8,["src"])):(u(),v("span",_e,b(t(E)(t(e).profileUser.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),a("h5",be,b(t(e).profileUser.fullName),1),a("p",Ce,b(t(e).profileUser.role),1)]),s(t(F),{class:"ps-chat-user-profile-sidebar-content pb-5 px-5",options:{wheelPropagation:!1}},{default:l(()=>[a("div",ge,[xe,s(c,{id:"textarea-user-about",modelValue:t(e).profileUser.about,"onUpdate:modelValue":i[1]||(i[1]=f=>t(e).profileUser.about=f),"auto-grow":"",class:"mt-1",rows:"4"},null,8,["modelValue"])]),a("div",ye,[$e,s(Ct,{modelValue:t(e).profileUser.status,"onUpdate:modelValue":i[2]||(i[2]=f=>t(e).profileUser.status=f),class:"mt-1"},{default:l(()=>[(u(),v(V,null,O(r,f=>s(gt,{key:f.title,label:f.title,value:f.value,color:f.color},null,8,["label","value","color"])),64))]),_:1},8,["modelValue"])]),a("div",ke,[Ve,a("div",we,[s(p,{class:"me-2",icon:"tabler-message-dots",size:"22"}),Ue]),a("div",Ie,[s(p,{class:"me-2",icon:"tabler-bell",size:"22"}),Se]),a("div",Ae,[s(p,{class:"me-2",icon:"tabler-user-plus",size:"22"}),Be]),a("div",ze,[s(p,{class:"me-2",icon:"tabler-trash",size:"22"}),Me])]),s(et,{color:"primary",class:"mt-11"},{default:l(()=>[H(" Logout ")]),_:1})]),_:1})],64)):U("",!0)}}}),De={key:0,class:"d-flex flex-column h-100"},Te={class:"active-chat-header d-flex align-center text-medium-emphasis bg-surface"},Oe={key:1},Pe={class:"flex-grow-1 ms-4 overflow-hidden"},Le={class:"text-h6 mb-0"},Re={class:"text-truncate mb-0 text-disabled"},Fe={class:"d-sm-flex align-center d-none"},Ee={key:1,class:"d-flex h-100 align-center justify-center flex-column"},je=B({__name:"chat",setup(C){dt(g=>({"23750bbc":t(nt)}));const e=ut(),o=M(),{isLeftSidebarOpen:r}=xt(e.smAndDown),{resolveAvatarBadgeVariant:m}=P(),i=S(),h=()=>{const g=i.value.$el||i.value;g.scrollTop=g.scrollHeight},c=S("");ht(c,g=>o.fetchChatsAndContacts(g),{immediate:!0});const f=()=>{e.mdAndUp.value||(r.value=!0)},n=S(""),x=async()=>{n.value&&(await o.sendMsg(n.value),n.value="",Z(()=>{h()}))},N=async g=>{await o.getChat(g),n.value="";const d=o.chatsContacts.find(y=>y.id===g);d&&(d.chat.unseenMsgs=0),e.smAndDown.value&&(r.value=!1),Z(()=>{h()})},D=S(!1),T=S(!1),J=S(),at=[{title:"View Contact",value:"View Contact"},{title:"Mute Notifications",value:"Mute Notifications"},{title:"Block Contact",value:"Block Contact"},{title:"Clear Chat",value:"Clear Chat"},{title:"Report",value:"Report"}],{name:ot}=mt(),nt=L(()=>{var d,y;let g="transparent";return X&&(g=(y=(d=X.themes)==null?void 0:d[ot.value].colors)==null?void 0:y.background),g});return(g,d)=>{const y=R("IconBtn"),lt=it;return u(),$($t,{class:"chat-app-layout"},{default:l(()=>[s(q,{modelValue:t(D),"onUpdate:modelValue":d[1]||(d[1]=_=>w(D)?D.value=_:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:l(()=>[s(Ne,{onClose:d[0]||(d[0]=_=>D.value=!1)})]),_:1},8,["modelValue"]),s(q,{modelValue:t(T),"onUpdate:modelValue":d[3]||(d[3]=_=>w(T)?T.value=_:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:l(()=>[s(Gt,{onClose:d[2]||(d[2]=_=>T.value=!1)})]),_:1},8,["modelValue"]),s(q,{modelValue:t(r),"onUpdate:modelValue":d[8]||(d[8]=_=>w(r)?r.value=_:null),absolute:"",touchless:"",location:"start",width:"370",temporary:g.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:g.$vuetify.display.mdAndUp},{default:l(()=>[s(ue,{isDrawerOpen:t(r),"onUpdate:isDrawerOpen":d[4]||(d[4]=_=>w(r)?r.value=_:null),search:t(c),"onUpdate:search":d[5]||(d[5]=_=>w(c)?c.value=_:null),onOpenChatOfContact:N,onShowUserProfile:d[6]||(d[6]=_=>D.value=!0),onClose:d[7]||(d[7]=_=>r.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),s(yt,{class:"chat-content-container"},{default:l(()=>[t(o).activeChat?(u(),v("div",De,[a("div",Te,[s(y,{class:"d-md-none me-3",onClick:d[9]||(d[9]=_=>r.value=!0)},{default:l(()=>[s(p,{icon:"tabler-menu-2"})]),_:1}),a("div",{class:"d-flex align-center cursor-pointer",onClick:d[10]||(d[10]=_=>T.value=!0)},[s(A,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:t(m)(t(o).activeChat.contact.status),bordered:""},{default:l(()=>[s(I,{size:"38",variant:t(o).activeChat.contact.avatar?void 0:"tonal",color:t(o).activeChat.contact.avatar?void 0:t(m)(t(o).activeChat.contact.status),class:"cursor-pointer"},{default:l(()=>[t(o).activeChat.contact.avatar?(u(),$(z,{key:0,src:t(o).activeChat.contact.avatar,alt:t(o).activeChat.contact.fullName},null,8,["src","alt"])):(u(),v("span",Oe,b(t(E)(t(o).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),a("div",Pe,[a("p",Le,b(t(o).activeChat.contact.fullName),1),a("p",Re,b(t(o).activeChat.contact.role),1)])]),s(kt),a("div",Fe,[s(y,null,{default:l(()=>[s(p,{icon:"tabler-phone-call"})]),_:1}),s(y,null,{default:l(()=>[s(p,{icon:"tabler-video"})]),_:1}),s(y,null,{default:l(()=>[s(p,{icon:"tabler-search"})]),_:1})]),s(lt,{"menu-list":at,density:"comfortable",color:"undefined"})]),s(st),s(t(F),{ref_key:"chatLogPS",ref:i,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:l(()=>[s(fe)]),_:1},512),s(Vt,{class:"chat-log-message-form mb-5 mx-5",onSubmit:ft(x,["prevent"])},{default:l(()=>{var _;return[(u(),$(wt,{key:(_=t(o).activeChat)==null?void 0:_.contact.id,modelValue:t(n),"onUpdate:modelValue":d[12]||(d[12]=K=>w(n)?n.value=K:null),variant:"solo",class:"chat-message-input",placeholder:"Type your message...",density:"default",autofocus:""},{"append-inner":l(()=>[s(y,null,{default:l(()=>[s(p,{icon:"tabler-microphone"})]),_:1}),s(y,{class:"me-2",onClick:d[11]||(d[11]=K=>{var Q;return(Q=t(J))==null?void 0:Q.click()})},{default:l(()=>[s(p,{icon:"tabler-photo"})]),_:1}),s(et,{onClick:x},{default:l(()=>[H(" Send ")]),_:1})]),_:1},8,["modelValue"])),a("input",{ref_key:"refInputEl",ref:J,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1},8,["onSubmit"])])):(u(),v("div",Ee,[s(I,{size:"109",class:"elevation-3 mb-6 bg-surface"},{default:l(()=>[s(p,{size:"50",class:"rounded-0 text-high-emphasis",icon:"tabler-message"})]),_:1}),a("p",{class:k(["mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface",[{"cursor-pointer":g.$vuetify.display.smAndDown}]]),onClick:f}," Start Conversation ",2)]))]),_:1})]),_:1})}}});typeof G=="function"&&G(je);export{je as default};