import{S as _,i as d,d as f,s as p,K as h,v as m,c as v,Q as y,l as r,f as $,g,L as w,M as L,N as b,k as S,h as k}from"../chunks/index.74d5b8c7.js";function u(a){let n,o;const l=a[1].default,e=h(l,a,a[0],null),c={c:function(){n=v(),e&&e.c(),this.h()},l:function(t){y("svelte-10h7psl",document.head).forEach(r),n=$(t),e&&e.l(t),this.h()},h:function(){document.title="Blog"},m:function(t,i){g(t,n,i),e&&e.m(t,i),o=!0},p:function(t,[i]){e&&e.p&&(!o||i&1)&&w(e,l,t,t[0],o?b(l,t[0],i,null):L(t[0]),null)},i:function(t){o||(S(e,t),o=!0)},o:function(t){k(e,t),o=!1},d:function(t){t&&r(n),e&&e.d(t)}};return f("SvelteRegisterBlock",{block:c,id:u.name,type:"component",source:"",ctx:a}),c}function B(a,n,o){let{$$slots:l={},$$scope:e}=n;m("Layout",l,["default"]);const c=[];return Object.keys(n).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Layout> was created with unknown prop '${s}'`)}),a.$$set=s=>{"$$scope"in s&&o(0,e=s.$$scope)},[e,l]}class E extends _{constructor(n){super(n),d(this,n,B,u,p,{}),f("SvelteRegisterComponent",{component:this,tagName:"Layout",options:n,id:u.name})}}export{E as default};