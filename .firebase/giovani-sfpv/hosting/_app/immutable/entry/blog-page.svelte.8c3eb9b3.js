import{S as K,i as Y,d as C,s as M,T as I,v as N,V as O,p as g,y as z,c as A,q as v,r as $,z as F,l as p,f as H,u as y,x as E,g as T,I as h,k as j,j as U,h as k,U as W,C as X,D as G,E as J,W as L,X as Q,F as Z,B as ee}from"../chunks/index.74d5b8c7.js";import{C as S}from"../chunks/CardBlog.0c76f027.js";const P=[{img:"/images/blog/emacs.png",alt:"Image of the software Emacs",title:"My Emacs configuration",linkPost:"my-emacs",category:"Programation",description:"My init.org file that I use to configure my emacs for programming: front end, back-end, and embedded systems such as the stm32 and esp-idf"}];const b="src/routes/blog/+page.svelte";function B(f,e,r){const o=f.slice();return o[0]=e[r],o}function w(f){let e,r;const o=[f[0]];let d={};for(let a=0;a<o.length;a+=1)d=O(d,o[a]);e=new S({props:d,$$inline:!0});const m={c:function(){X(e.$$.fragment)},l:function(c){G(e.$$.fragment,c)},m:function(c,u){J(e,c,u),r=!0},p:function(c,u){const t=u&0?L(o,[Q(c[0])]):{};e.$set(t)},i:function(c){r||(j(e.$$.fragment,c),r=!0)},o:function(c){k(e.$$.fragment,c),r=!1},d:function(c){Z(e,c)}};return C("SvelteRegisterBlock",{block:m,id:w.name,type:"each",source:"(11:4) {#each posts as post}",ctx:f}),m}function x(f){let e,r,o,d,m,a,c,u=P;I(u);let t=[];for(let l=0;l<u.length;l+=1)t[l]=w(B(f,u,l));const D=l=>k(t[l],1,1,()=>{t[l]=null}),R={c:function(){e=g("main"),r=g("div"),o=g("h1"),d=z("Projects"),m=A(),a=g("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l:function(i){e=v(i,"MAIN",{class:!0});var s=$(e);r=v(s,"DIV",{class:!0});var n=$(r);o=v(n,"H1",{class:!0});var _=$(o);d=F(_,"Projects"),_.forEach(p),n.forEach(p),m=H(s),a=v(s,"DIV",{class:!0});var V=$(a);for(let q=0;q<t.length;q+=1)t[q].l(V);V.forEach(p),s.forEach(p),this.h()},h:function(){y(o,"class","title title-font s-KR0rVqYEqu45"),E(o,b,7,2,170),y(r,"class","title-container s-KR0rVqYEqu45"),E(r,b,6,2,138),y(a,"class","containerCards s-KR0rVqYEqu45"),E(a,b,9,2,225),y(e,"class","s-KR0rVqYEqu45"),E(e,b,5,0,128)},m:function(i,s){T(i,e,s),h(e,r),h(r,o),h(o,d),h(e,m),h(e,a);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(a,null);c=!0},p:function(i,[s]){if(s&0){u=P,I(u);let n;for(n=0;n<u.length;n+=1){const _=B(i,u,n);t[n]?(t[n].p(_,s),j(t[n],1)):(t[n]=w(_),t[n].c(),j(t[n],1),t[n].m(a,null))}for(ee(),n=u.length;n<t.length;n+=1)D(n);U()}},i:function(i){if(!c){for(let s=0;s<u.length;s+=1)j(t[s]);c=!0}},o:function(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)k(t[s]);c=!1},d:function(i){i&&p(e),W(t,i)}};return C("SvelteRegisterBlock",{block:R,id:x.name,type:"component",source:"",ctx:f}),R}function te(f,e,r){let{$$slots:o={},$$scope:d}=e;N("Page",o,[]);const m=[];return Object.keys(e).forEach(a=>{!~m.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),f.$capture_state=()=>({posts:P,CardProject:S}),[]}class se extends K{constructor(e){super(e),Y(this,e,te,x,M,{}),C("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:x.name})}}export{se as default};