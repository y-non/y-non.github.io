import{c as j,u as Ze,a as et,h as S,d as n,e as Me,i as Be,f as G,l as ge,r as q,w as T,o as be,g as mt,Q as ce,j as ie,k as X,s as gt,m as bt,n as Oe,p as yt,q as St,t as zt,v as _t,x as Le,y as Pe,z as Y,A as wt,B as pe,C as pt,D as qt,E as Ie,F as He,T as se,G as kt,H as xt,I as Ct,J as $t,K as Tt,L as Mt,M as Bt,N as De,O as Ve,P as Ot,R as tt,S as Lt,U as Pt,V as qe,W as de,X as Ht,_ as Qt,Y as At,Z as It,$ as Dt,a0 as Vt,a1 as ke,a2 as Rt,a3 as Re,a4 as L,a5 as Q,a6 as p,a7 as C,a8 as R,a9 as M,aa as Ne,ab as ae,ac as le,ad as fe,ae as oe,af as Nt,ag as xe,ah as re,ai as Ce,aj as F,ak as We,al as Wt,am as Ft,an as he,ao as $e,ap as me}from"./index.a9cde8d8.js";const jt='<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5"><animate attributeName="fill-opacity" begin="0.7s" dur="1.4s" values="0.5;1;0.5" calcMode="linear" repeatCount="indefinite"></animate></path><path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"></path>';var Fe=j({name:"QSpinnerHearts",props:Ze,setup(e){const{cSize:_,classes:c}=et(e);return()=>S("svg",{class:c.value,fill:"currentColor",width:_.value,height:_.value,viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg",innerHTML:jt})}});const Et='<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>';var je=j({name:"QSpinnerHourglass",props:Ze,setup(e){const{cSize:_,classes:c}=et(e);return()=>S("svg",{class:c.value,width:_.value,height:_.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:Et})}}),Ut=j({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:_}){const c=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:c.value,role:"toolbar"},Me(_.default))}}),Xt=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:_,emit:c}){const{proxy:{$q:i}}=ie(),s=Be(ge,G);if(s===G)return console.error("QHeader needs to be child of QLayout"),G;const f=q(parseInt(e.heightHint,10)),r=q(!0),t=n(()=>e.reveal===!0||s.view.value.indexOf("H")!==-1||i.platform.is.ios&&s.isContainer.value===!0),z=n(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return r.value===!0?f.value:0;const v=f.value-s.scroll.value.position;return v>0?v:0}),$=n(()=>e.modelValue!==!0||t.value===!0&&r.value!==!0),l=n(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),P=n(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+($.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=n(()=>{const v=s.rows.value.top,H={};return v[0]==="l"&&s.left.space===!0&&(H[i.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),v[2]==="r"&&s.right.space===!0&&(H[i.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),H});function u(v,H){s.update("header",v,H)}function h(v,H){v.value!==H&&(v.value=H)}function A({height:v}){h(f,v),u("size",v)}function w(v){l.value===!0&&h(r,!0),c("focusin",v)}T(()=>e.modelValue,v=>{u("space",v),h(r,!0),s.animate()}),T(z,v=>{u("offset",v)}),T(()=>e.reveal,v=>{v===!1&&h(r,e.modelValue)}),T(r,v=>{s.animate(),c("reveal",v)}),T(s.scroll,v=>{e.reveal===!0&&h(r,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const b={};return s.instances.header=b,e.modelValue===!0&&u("size",f.value),u("space",e.modelValue),u("offset",z.value),be(()=>{s.instances.header===b&&(s.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const v=mt(_.default,[]);return e.elevated===!0&&v.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(S(ce,{debounce:0,onResize:A})),S("header",{class:P.value,style:g.value,onFocusin:w},v)}}}),Kt=j({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[S("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),S("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),X(S("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),X(S("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}});const{passive:Ee}=St,Yt=["both","horizontal","vertical"];var at=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:gt},emits:["scroll"],setup(e,{emit:_}){const c={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,s,f;T(()=>e.scrollTarget,()=>{z(),t()});function r(){i!==null&&i();const P=Math.max(0,zt(s)),g=_t(s),u={top:P-c.position.top,left:g-c.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const h=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";c.position={top:P,left:g},c.directionChanged=c.direction!==h,c.delta=u,c.directionChanged===!0&&(c.direction=h,c.inflectionPoint=c.position),_("scroll",{...c})}function t(){s=bt(f,e.scrollTarget),s.addEventListener("scroll",$,Ee),$(!0)}function z(){s!==void 0&&(s.removeEventListener("scroll",$,Ee),s=void 0)}function $(P){if(P===!0||e.debounce===0||e.debounce==="0")r();else if(i===null){const[g,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];i=()=>{u(g),i=null}}}const{proxy:l}=ie();return T(()=>l.$q.lang.rtl,r),Oe(()=>{f=l.$el.parentNode,t()}),be(()=>{i!==null&&i(),z()}),Object.assign(l,{trigger:$,getPosition:()=>c}),yt}});const Ue=["vertical","horizontal"],Te={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Xe={prevent:!0,mouse:!0,mouseAllDir:!0},Ke=e=>e>=250?50:Math.ceil(e/5);var Ye=j({name:"QScrollArea",props:{...Le,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:_,emit:c}){const i=q(!1),s=q(!1),f=q(!1),r={vertical:q(0),horizontal:q(0)},t={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:z}=ie(),$=Pe(e,z.$q);let l=null,P;const g=q(null),u=n(()=>"q-scrollarea"+($.value===!0?" q-scrollarea--dark":""));Object.assign(r,{verticalInner:n(()=>r.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:n(()=>r.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),t.vertical.percentage=n(()=>{const o=t.vertical.size.value-r.vertical.value;if(o<=0)return 0;const d=Y(t.vertical.position.value/o,0,1);return Math.round(d*1e4)/1e4}),t.vertical.thumbHidden=n(()=>(e.visible===null?f.value:e.visible)!==!0&&i.value===!1&&s.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=n(()=>e.verticalOffset[0]+t.vertical.percentage.value*(r.verticalInner.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=n(()=>Math.round(Y(r.verticalInner.value*r.verticalInner.value/t.vertical.size.value,Ke(r.verticalInner.value),r.verticalInner.value))),t.vertical.style=n(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),t.vertical.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=n(()=>{const o=t.horizontal.size.value-r.horizontal.value;if(o<=0)return 0;const d=Y(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(d*1e4)/1e4}),t.horizontal.thumbHidden=n(()=>(e.visible===null?f.value:e.visible)!==!0&&i.value===!1&&s.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=n(()=>e.horizontalOffset[0]+t.horizontal.percentage.value*(r.horizontalInner.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=n(()=>Math.round(Y(r.horizontalInner.value*r.horizontalInner.value/t.horizontal.size.value,Ke(r.horizontalInner.value),r.horizontalInner.value))),t.horizontal.style=n(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[z.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),t.horizontal.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const h=n(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function A(){const o={};return Ue.forEach(d=>{const x=t[d];Object.assign(o,{[d+"Position"]:x.position.value,[d+"Percentage"]:x.percentage.value,[d+"Size"]:x.size.value,[d+"ContainerSize"]:r[d].value,[d+"ContainerInnerSize"]:r[d+"Inner"].value})}),o}const w=wt(()=>{const o=A();o.ref=z,c("scroll",o)},0);function b(o,d,x){if(Ue.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?Ie:pe)(g.value,d,x)}function v({height:o,width:d}){let x=!1;r.vertical.value!==o&&(r.vertical.value=o,x=!0),r.horizontal.value!==d&&(r.horizontal.value=d,x=!0),x===!0&&I()}function H({position:o}){let d=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,d=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,d=!0),d===!0&&I()}function m({height:o,width:d}){t.horizontal.size.value!==d&&(t.horizontal.size.value=d,I()),t.vertical.size.value!==o&&(t.vertical.size.value=o,I())}function k(o,d){const x=t[d];if(o.isFirst===!0){if(x.thumbHidden.value===!0)return;P=x.position.value,s.value=!0}else if(s.value!==!0)return;o.isFinal===!0&&(s.value=!1);const E=Te[d],K=(x.size.value-r[d].value)/(r[d+"Inner"].value-x.thumbSize.value),U=o.distance[E.dist],ue=P+(o.direction===E.dir?1:-1)*U*K;N(ue,d)}function O(o,d){const x=t[d];if(x.thumbHidden.value!==!0){const E=d==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],K=o[Te[d].offset]-E,U=x.thumbStart.value-E;if(K<U||K>U+x.thumbSize.value){const ue=K-x.thumbSize.value/2,ye=Y(ue/(r[d+"Inner"].value-x.thumbSize.value),0,1);N(ye*Math.max(0,x.size.value-r[d].value),d)}x.ref.value!==null&&x.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function I(){i.value=!0,l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,i.value=!1},e.delay),e.onScroll!==void 0&&w()}function N(o,d){g.value[Te[d].scroll]=o}let B=null;function W(){B!==null&&clearTimeout(B),B=setTimeout(()=>{B=null,f.value=!0},z.$q.platform.is.ios?50:0)}function J(){B!==null&&(clearTimeout(B),B=null),f.value=!1}let ne=null;T(()=>z.$q.lang.rtl,o=>{g.value!==null&&pe(g.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),pt(()=>{ne={top:t.vertical.position.value,left:t.horizontal.position.value}}),qt(()=>{if(ne===null)return;const o=g.value;o!==null&&(pe(o,ne.left),Ie(o,ne.top))}),be(w.cancel),Object.assign(z,{getScrollTarget:()=>g.value,getScroll:A,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:b,setScrollPercentage(o,d,x){b(o,d*(t[o].size.value-r[o].value)*(o==="horizontal"&&z.$q.lang.rtl===!0?-1:1),x)}});const Z={scroll:t,thumbVertDir:[[se,o=>{k(o,"vertical")},void 0,{vertical:!0,...Xe}]],thumbHorizDir:[[se,o=>{k(o,"horizontal")},void 0,{horizontal:!0,...Xe}]],onVerticalMousedown(o){O(o,"vertical")},onHorizontalMousedown(o){O(o,"horizontal")}};return()=>S("div",{class:u.value,onMouseenter:W,onMouseleave:J},[S("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[S("div",{class:"q-scrollarea__content absolute",style:h.value},He(_.default,[S(ce,{debounce:0,onResize:m})])),S(at,{axis:"both",onScroll:H})]),S(ce,{debounce:0,onResize:v}),S(Kt,{store:Z,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}});const Gt={xs:2,sm:4,md:6,lg:10,xl:14};function Ge(e,_,c){return{transform:_===!0?`translateX(${c.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Jt=j({name:"QLinearProgress",props:{...Le,...kt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:_}){const{proxy:c}=ie(),i=Pe(e,c.$q),s=xt(e,Gt),f=n(()=>e.indeterminate===!0||e.query===!0),r=n(()=>e.reverse!==e.query),t=n(()=>({...s.value!==null?s.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),z=n(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),$=n(()=>Ge(e.buffer!==void 0?e.buffer:1,r.value,c.$q)),l=n(()=>`with${e.instantFeedback===!0?"out":""}-transition`),P=n(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${l.value} q-linear-progress__track--${i.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),g=n(()=>Ge(f.value===!0?1:e.value,r.value,c.$q)),u=n(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${l.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),h=n(()=>({width:`${e.value*100}%`})),A=n(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${l.value}`);return()=>{const w=[S("div",{class:P.value,style:$.value}),S("div",{class:u.value,style:g.value})];return e.stripe===!0&&f.value===!1&&w.push(S("div",{class:A.value,style:h.value})),S("div",{class:z.value,style:t.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},He(_.default,w))}}});const Je=150;var Zt=j({name:"QDrawer",inheritAttrs:!1,props:{...Ct,...Le,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$t,"onLayout","miniState"],setup(e,{slots:_,emit:c,attrs:i}){const s=ie(),{proxy:{$q:f}}=s,r=Pe(e,f),{preventBodyScroll:t}=Ot(),{registerTimeout:z,removeTimeout:$}=Tt(),l=Be(ge,G);if(l===G)return console.error("QDrawer needs to be child of QLayout"),G;let P,g=null,u;const h=q(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),A=n(()=>e.mini===!0&&h.value!==!0),w=n(()=>A.value===!0?e.miniWidth:e.width),b=q(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),v=n(()=>e.persistent!==!0&&(h.value===!0||ue.value===!0));function H(a,y){if(I(),a!==!1&&l.animate(),V(0),h.value===!0){const D=l.instances[x.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),ee(1),l.isContainer.value!==!0&&t(!0)}else ee(0),a!==!1&&ze(!1);z(()=>{a!==!1&&ze(!0),y!==!0&&c("show",a)},Je)}function m(a,y){N(),a!==!1&&l.animate(),ee(0),V(J.value*w.value),_e(),y!==!0?z(()=>{c("hide",a)},Je):$()}const{show:k,hide:O}=Mt({showing:b,hideOnRouteChange:v,handleShow:H,handleHide:m}),{addToHistory:I,removeFromHistory:N}=Bt(b,O,v),B={belowBreakpoint:h,hide:O},W=n(()=>e.side==="right"),J=n(()=>(f.lang.rtl===!0?-1:1)*(W.value===!0?1:-1)),ne=q(0),Z=q(!1),o=q(!1),d=q(w.value*J.value),x=n(()=>W.value===!0?"left":"right"),E=n(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),K=n(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(W.value?"R":"L")!==-1||f.platform.is.ios===!0&&l.isContainer.value===!0),U=n(()=>e.overlay===!1&&b.value===!0&&h.value===!1),ue=n(()=>e.overlay===!0&&b.value===!0&&h.value===!1),ye=n(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&Z.value===!1?" hidden":"")),lt=n(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),Qe=n(()=>W.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),nt=n(()=>W.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),rt=n(()=>{const a={};return l.header.space===!0&&Qe.value===!1&&(K.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&nt.value===!1&&(K.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),it=n(()=>{const a={width:`${w.value}px`,transform:`translateX(${d.value}px)`};return h.value===!0?a:Object.assign(a,rt.value)}),ot=n(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),ut=n(()=>`q-drawer q-drawer--${e.side}`+(o.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(Z.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(K.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),st=n(()=>{const a=f.lang.rtl===!0?e.side:x.value;return[[se,ft,void 0,{[a]:!0,mouse:!0}]]}),ct=n(()=>{const a=f.lang.rtl===!0?x.value:e.side;return[[se,Ae,void 0,{[a]:!0,mouse:!0}]]}),vt=n(()=>{const a=f.lang.rtl===!0?x.value:e.side;return[[se,Ae,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function Se(){ht(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}T(h,a=>{a===!0?(P=b.value,b.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&P!==!1&&(b.value===!0?(V(0),ee(0),_e()):k(!1))}),T(()=>e.side,(a,y)=>{l.instances[y]===B&&(l.instances[y]=void 0,l[y].space=!1,l[y].offset=0),l.instances[a]=B,l[a].size=w.value,l[a].space=U.value,l[a].offset=E.value}),T(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Se()}),T(()=>e.behavior+e.breakpoint,Se),T(l.isContainer,a=>{b.value===!0&&t(a!==!0),a===!0&&Se()}),T(l.scrollbarWidth,()=>{V(b.value===!0?0:void 0)}),T(E,a=>{te("offset",a)}),T(U,a=>{c("onLayout",a),te("space",a)}),T(W,()=>{V()}),T(w,a=>{V(),we(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{we(a,w.value)}),T(()=>f.lang.rtl,()=>{V()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(dt(),l.animate())}),T(A,a=>{c("miniState",a)});function V(a){a===void 0?De(()=>{a=b.value===!0?0:w.value,V(J.value*a)}):(l.isContainer.value===!0&&W.value===!0&&(h.value===!0||Math.abs(a)===w.value)&&(a+=J.value*l.scrollbarWidth.value),d.value=a)}function ee(a){ne.value=a}function ze(a){const y=a===!0?"remove":l.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function dt(){g!==null&&clearTimeout(g),s.proxy&&s.proxy.$el&&s.proxy.$el.classList.add("q-drawer--mini-animate"),o.value=!0,g=setTimeout(()=>{g=null,o.value=!1,s&&s.proxy&&s.proxy.$el&&s.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ft(a){if(b.value!==!1)return;const y=w.value,D=Y(a.distance.x,0,y);if(a.isFinal===!0){D>=Math.min(75,y)===!0?k():(l.animate(),ee(0),V(J.value*y)),Z.value=!1;return}V((f.lang.rtl===!0?W.value!==!0:W.value)?Math.max(y-D,0):Math.min(0,D-y)),ee(Y(D/y,0,1)),a.isFirst===!0&&(Z.value=!0)}function Ae(a){if(b.value!==!0)return;const y=w.value,D=a.direction===e.side,ve=(f.lang.rtl===!0?D!==!0:D)?Y(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(ve)<Math.min(75,y)===!0?(l.animate(),ee(1),V(0)):O(),Z.value=!1;return}V(J.value*ve),ee(Y(1-ve/y,0,1)),a.isFirst===!0&&(Z.value=!0)}function _e(){t(!1),ze(!0)}function te(a,y){l.update(e.side,a,y)}function ht(a,y){a.value!==y&&(a.value=y)}function we(a,y){te("size",a===!0?e.miniWidth:y)}return l.instances[e.side]=B,we(e.miniToOverlay,w.value),te("space",U.value),te("offset",E.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),Oe(()=>{c("onLayout",U.value),c("miniState",A.value),P=e.showIfAbove===!0;const a=()=>{(b.value===!0?H:m)(!1,!0)};if(l.totalWidth.value!==0){De(a);return}u=T(l.totalWidth,()=>{u(),u=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?k(!1):a()})}),be(()=>{u!==void 0&&u(),g!==null&&(clearTimeout(g),g=null),b.value===!0&&_e(),l.instances[e.side]===B&&(l.instances[e.side]=void 0,te("size",0),te("offset",0),te("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(X(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),st.value)),a.push(Ve("div",{ref:"backdrop",class:ye.value,style:lt.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>vt.value)));const y=A.value===!0&&_.mini!==void 0,D=[S("div",{...i,key:""+y,class:[ot.value,i.class]},y===!0?_.mini():Me(_.default))];return e.elevated===!0&&b.value===!0&&D.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ve("aside",{ref:"content",class:ut.value,style:it.value},D,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ct.value)),S("div",{class:"q-drawer-container"},a)}}}),ea=j({name:"QPageContainer",setup(e,{slots:_}){const{proxy:{$q:c}}=ie(),i=Be(ge,G);if(i===G)return console.error("QPageContainer needs to be child of QLayout"),G;tt(Lt,!0);const s=n(()=>{const f={};return i.header.space===!0&&(f.paddingTop=`${i.header.size}px`),i.right.space===!0&&(f[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(f.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(f[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),f});return()=>S("div",{class:"q-page-container",style:s.value},Me(_.default))}}),ta=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:_,emit:c}){const{proxy:{$q:i}}=ie(),s=q(null),f=q(i.screen.height),r=q(e.container===!0?0:i.screen.width),t=q({position:0,direction:"down",inflectionPoint:0}),z=q(0),$=q(Pt.value===!0?0:qe()),l=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),P=n(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),g=n(()=>$.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${$.value}px`}:null),u=n(()=>$.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${$.value}px`,width:`calc(100% + ${$.value}px)`}:null);function h(m){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};t.value=k,e.onScroll!==void 0&&c("scroll",k)}}function A(m){const{height:k,width:O}=m;let I=!1;f.value!==k&&(I=!0,f.value=k,e.onScrollHeight!==void 0&&c("scrollHeight",k),b()),r.value!==O&&(I=!0,r.value=O),I===!0&&e.onResize!==void 0&&c("resize",m)}function w({height:m}){z.value!==m&&(z.value=m,b())}function b(){if(e.container===!0){const m=f.value>z.value?qe():0;$.value!==m&&($.value=m)}}let v=null;const H={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:s,height:f,containerHeight:z,scrollbarWidth:$,totalWidth:n(()=>r.value+$.value),rows:n(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:t,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,k,O){H[m][k]=O}};if(tt(ge,H),qe()>0){let O=function(){m=null,k.classList.remove("hide-scrollbar")},I=function(){if(m===null){if(k.scrollHeight>i.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(O,300)},N=function(B){m!==null&&B==="remove"&&(clearTimeout(m),O()),window[`${B}EventListener`]("resize",I)},m=null;const k=document.body;T(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),Ht(()=>{N("remove")})}return()=>{const m=He(_.default,[S(at,{onScroll:h}),S(ce,{onResize:A})]),k=S("div",{class:l.value,style:P.value,ref:e.container===!0?void 0:s,tabindex:-1},m);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:s},[S(ce,{onResize:w}),S("div",{class:"absolute-full",style:g.value},[S("div",{class:"scroll",style:u.value},[k])])]):k}}});const aa={class:"flex justify-between full-width",style:{"align-items":"center"}},la={class:"q-ml-md"},na={key:1,class:"flex justify-end"},ra={key:0},ia={class:"active"},oa={class:"text-capitalize q-mr-sm"},ua={class:"q-ml-sm text-capitalize"},sa={class:"q-ml-sm text-capitalize"},ca={class:"q-ml-sm"},va={key:2},da={class:"text-h6"},fa={__name:"MainLayout",setup(e){const _=At();It();const c=Dt(),i=Vt(),s=q(!1),f=q(!1),r=q(""),t=ke.getLocalStorageData("isLogin")||!1,z=q(""),$=q(""),l=[{path:"/admin",name:"Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n",icon:"eva-people-outline"},{path:"/admin/order",name:"Qu\u1EA3n l\xFD \u0111\u01A1n h\xE0ng",icon:"eva-file-text-outline"},{path:"/admin/discount",name:"Qu\u1EA3n l\xFD m\xE3 gi\u1EA3m gi\xE1",icon:"eva-credit-card-outline"},{path:"/admin/giftcard",name:"Qu\u1EA3n l\xFD m\xE3 qu\xE0 t\u1EB7ng",icon:"eva-gift-outline"}];function P(g){try{const u=l.filter(h=>h.path===g)[0];$.value=u.name}catch(u){console.error("Internal Server Error: ",u)}}return Oe(async()=>{var g;f.value=localStorage.getItem("isLogin")||!1,z.value=(g=ke.getLocalStorageData("userAuthInfo"))==null?void 0:g.role,t&&z.value==="admin"?(_.push("/admin"),P(_.currentRoute.value.fullPath)):t&&z.value!=="admin"?_.push("/data"):_.push("/")}),Rt(()=>{}),T(()=>i.listUserData,g=>{const u=g.filter(h=>h.userid===ke.getLocalStorageData("selfAppInfo").userid)[0];r.value=u}),T(()=>_.currentRoute.value.fullPath,g=>{P(g)}),(g,u)=>{const h=Re("router-link"),A=Re("router-view");return L(),Q(ta,{view:"lHh Lpr lFf"},{default:p(()=>[C(Xt,{class:"q-py-sm",elevated:""},{default:p(()=>[C(Ut,null,{default:p(()=>{var w,b,v,H,m;return[R("div",aa,[M(t)&&z.value!=="admin"?(L(),Q(Ne,{key:0,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u[0]||(u[0]=k=>s.value=!s.value)},{default:p(()=>{var k,O;return[R("span",la,ae((k=r.value)==null?void 0:k.username)+" - "+ae((O=r.value)==null?void 0:O.status_name),1)]}),_:1})):le("",!0),z.value!=="admin"?(L(),fe("div",na,[f.value?(L(),fe("div",ra,[R("div",ia,[R("span",oa,ae((w=r.value)==null?void 0:w.status_name),1),((b=r.value)==null?void 0:b.status_name)===M(i).statusServing?(L(),Q(Fe,{key:0,color:"grey-3",size:"md"})):le("",!0),((v=r.value)==null?void 0:v.status_name)===M(i).statusWaiting?(L(),Q(je,{key:1,color:"grey-3",size:"xs"})):le("",!0),((H=r.value)==null?void 0:H.status_name)!==M(i).statusServing&&((m=r.value)==null?void 0:m.status_name)!==M(i).statusWaiting?(L(),Q(oe,{key:2,name:"eva-wifi-off-outline",color:"red",size:"xs"})):le("",!0)]),C(Nt,{"auto-close":""},{default:p(()=>[C(xe,{"auto-close":"",style:{"min-width":"150px"}},{default:p(()=>{var k,O,I;return[X((L(),Q(re,{clickable:"",class:Ce(((k=r.value)==null?void 0:k.status_name)===M(i).statusServing?"bg-grey-3":"")},{default:p(()=>[C(F,null,{default:p(()=>[R("div",{class:"active",onClick:u[1]||(u[1]=N=>{var B;return((B=r.value)==null?void 0:B.status_name)!==M(i).statusServing?M(i).updateUserStatus(M(i).statusServing):[]})},[C(Fe,{color:"green"}),R("span",ua,ae(M(i).statusServing),1)])]),_:1})]),_:1},8,["class"])),[[$e]]),C(We),X((L(),Q(re,{class:Ce(((O=r.value)==null?void 0:O.status_name)===M(i).statusWaiting?"bg-grey-3":""),clickable:""},{default:p(()=>[C(F,null,{default:p(()=>[R("div",{class:"active",onClick:u[2]||(u[2]=N=>{var B;return((B=r.value)==null?void 0:B.status_name)!==M(i).statusWaiting?M(i).updateUserStatus(M(i).statusWaiting):[]})},[C(je,{color:"yellow",size:"xs"}),R("span",sa,ae(M(i).statusWaiting),1)])]),_:1})]),_:1},8,["class"])),[[$e]]),C(We),X((L(),Q(re,{class:Ce(((I=r.value)==null?void 0:I.status_name)===M(i).statusOff?"bg-grey-3":""),clickable:""},{default:p(()=>[C(F,null,{default:p(()=>[R("div",{class:"active",onClick:u[3]||(u[3]=N=>{var B;return((B=r.value)==null?void 0:B.status_name)!==M(i).statusOff?M(i).updateUserStatus(M(i).statusOff):[]})},[C(oe,{name:"eva-wifi-off-outline",size:"xs",color:"red"}),R("span",ca,ae(M(i).statusOff),1)])]),_:1})]),_:1},8,["class"])),[[$e]])]}),_:1})]),_:1})])):le("",!0)])):(L(),fe("div",va,[R("span",da,ae($.value),1)])),M(t)&&z.value==="admin"?(L(),Q(Ne,{key:3,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u[4]||(u[4]=k=>s.value=!s.value)})):le("",!0)])]}),_:1})]),_:1}),M(t)?(L(),Q(Zt,{key:0,side:z.value==="admin"?"right":"left",modelValue:s.value,"onUpdate:modelValue":u[5]||(u[5]=w=>s.value=w),width:200,breakpoint:500},{default:p(()=>[z.value==="admin"?(L(),Q(Ye,{key:0,class:"fit"},{default:p(()=>[C(xe,{padding:"",class:"menu-list"},{default:p(()=>[(L(),fe(Ft,null,Wt(l,(w,b)=>R("div",{key:b},[C(h,{to:w.path},{default:p(()=>[X((L(),Q(re,{clickable:""},{default:p(()=>[C(F,{avatar:""},{default:p(()=>[C(oe,{class:"text-primary",name:w.icon},null,8,["name"])]),_:2},1024),C(F,{class:"text-grey-9"},{default:p(()=>[he(ae(w.name),1)]),_:2},1024)]),_:2},1024)),[[me]])]),_:2},1032,["to"])])),64)),X((L(),Q(re,{onClick:M(c).signOut,clickable:""},{default:p(()=>[C(F,{avatar:""},{default:p(()=>[C(oe,{class:"text-red-8 text-bold",name:"logout"})]),_:1}),C(F,null,{default:p(()=>u[6]||(u[6]=[he(" \u0110\u0103ng xu\u1EA5t ")])),_:1})]),_:1},8,["onClick"])),[[me]])]),_:1})]),_:1})):(L(),Q(Ye,{key:1,class:"fit"},{default:p(()=>[C(xe,{padding:"",class:"menu-list"},{default:p(()=>[X((L(),Q(re,{clickable:""},{default:p(()=>[C(F,{avatar:""},{default:p(()=>[C(oe,{class:"text-green-8 text-bold text-bold",name:"sync"})]),_:1}),C(F,null,{default:p(()=>u[7]||(u[7]=[he(" \u0110\u1ED3ng b\u1ED9 Menu ")])),_:1})]),_:1})),[[me]]),M(i).isLoadingMenuData?(L(),Q(Jt,{key:0,indeterminate:"",color:"secondary",class:"q-mt-sm"})):le("",!0),X((L(),Q(re,{onClick:M(c).signOut,clickable:""},{default:p(()=>[C(F,{avatar:""},{default:p(()=>[C(oe,{class:"text-red-8 text-bold text-bold",name:"logout"})]),_:1}),C(F,null,{default:p(()=>u[8]||(u[8]=[he(" \u0110\u0103ng xu\u1EA5t ")])),_:1})]),_:1},8,["onClick"])),[[me]])]),_:1})]),_:1}))]),_:1},8,["side","modelValue"])):le("",!0),C(ea,null,{default:p(()=>[C(A)]),_:1})]),_:1})}}};var ga=Qt(fa,[["__scopeId","data-v-06b34ef6"]]);export{ga as default};