(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6944:function(t,e,s){"use strict";var i=s(4208),n=s(1664),r=s.n(n),a=s(5893);e.Z=function(t){return(0,a.jsx)(i.E.div,{initial:{y:48,opacity:0},whileHover:{scale:1.05},whileInView:{y:0,opacity:1,transition:{duration:.6}},className:"mt-[32px] max-w-[587px] p-2 cursor-pointer ",children:(0,a.jsx)(r(),{href:t.link?"".concat(t.link):"./blog/".concat(t.title),passHref:!0,children:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{target:"_blank",children:[(0,a.jsx)("img",{alt:"image blog",src:t.img,className:"border-2 border-[#ABAAAA]"}),(0,a.jsx)("h2",{className:"mt-2 text-[24px] text-[#01A7C2]",children:t.title}),(0,a.jsx)("h3",{className:" text-[20px] text-[#ABAAAA]",children:t.category}),(0,a.jsxs)("p",{className:"",children:[" ",t.description]})]})})})})}},2210:function(t,e,s){"use strict";var i=s(7294),n=s(1664),r=s.n(n),a=s(5675),c=s(4208),l=s(155),o=s(5893);e.Z=function(){var t=(0,a._)(),e=(0,a._)(),s=(0,i.useState)("bg-[#fff] text-[#01A7C2]"),n=(s[0],s[1],(0,i.useState)(!1)),d=(n[0],n[1],function(){window.scrollY>40?(t.start({backgroundColor:"#01A7C2",color:"white",transition:{duration:.1}}),e.start({backgroundColor:"#fff",color:"#01A7C2",transition:{duration:.1}})):(t.start({backgroundColor:"#fff",color:"#01A7C2",transition:{duration:.2}}),e.start({backgroundColor:"#01A7C2",color:"white",transition:{duration:.2}}))});return(0,i.useEffect)((function(){window.addEventListener("scroll",d)}),[]),(0,o.jsxs)(c.E.nav,{animate:t,className:"flex z-50 w-full fixed items-center text-[#01A7C2]  left-0 text-[24px] md:px-[5%] justify-between p-2 flex-row top-0 md:top-0",children:[(0,o.jsx)("div",{className:"flex w-full  justify-between px-3 md:p-0 ",children:(0,o.jsx)("h1",{className:"font-[500]",children:(0,o.jsx)(r(),{href:"/",children:(0,o.jsxs)("div",{className:"cursor-pointer",children:[(0,o.jsx)("div",{className:"text-[0px] md:text-[24px]",children:"Giovani SFPV"}),(0,o.jsx)("div",{className:"text-[24px] md:text-[0px]",children:(0,o.jsx)(l.yl6,{})})]})})})}),(0,o.jsx)("div",{className:"flex w-full justify-end items-center",children:(0,o.jsxs)("ul",{className:"flex ",children:[(0,o.jsx)("li",{className:"mr-[40px] ",children:(0,o.jsx)(r(),{href:"/projects",children:"Projects"})}),(0,o.jsx)("li",{className:"text-right mr-[40px] ",children:(0,o.jsx)(r(),{href:"/blog",children:"Blog"})})]})})]})}},410:function(t,e,s){"use strict";s.r(e);var i=s(2210),n=s(6944),r=s(200),a=s(5893);e.default=function(){return(0,a.jsxs)("div",{className:"pb-[28px] pt-[30px] ",children:[(0,a.jsx)(i.Z,{}),(0,a.jsxs)("div",{className:"mt-[40px] mt-[50px] font-main px-[5%]",children:[(0,a.jsx)("h1",{className:"text-[#01A7C2] text-[36px] mb-2 font-[300]",children:"Blog"}),(0,a.jsx)("div",{className:"flex justify-between flex-wrap",children:r.map((function(t){var e=t;return(0,a.jsx)(n.Z,{img:e.img,title:e.title,category:e.category,description:e.description},t.title)}))})]})]})}},7801:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(410)}])},200:function(t){"use strict";t.exports=JSON.parse('[{"img":"https://i.imgur.com/0aIpdvx.png","category":"programming","title":"My-emacs-configuration","description":"My init.org file that I use to configure my emacs for programming: front end, back-end, and embedded systems such as the stm32 and esp-idf"}]')}},function(t){t.O(0,[260,514,774,888,179],(function(){return e=7801,t(t.s=e);var e}));var e=t.O();_N_E=e}]);