(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return c(8010)}])},6846:function(d,b,a){"use strict";var e=a(5893),f=a(5670),c=a(1664),g=a.n(c);b.Z=function(a){return(0,e.jsx)(f.E.div,{initial:{y:48,opacity:0},whileHover:{scale:1.05},whileInView:{y:0,opacity:1,transition:{duration:.6}},className:"mt-[32px] max-w-[587px] p-2 cursor-pointer ",children:(0,e.jsx)(g(),{href:a.link?"".concat(a.link):"./blog/".concat(a.id),passHref:!0,children:(0,e.jsx)("div",{children:(0,e.jsxs)("a",{target:"_blank",children:[(0,e.jsx)("img",{alt:"image blog",src:a.img,className:"border-2 border-[#ABAAAA]"}),(0,e.jsx)("h2",{className:"mt-2 text-[24px] text-[#01A7C2]",children:a.title}),(0,e.jsx)("h3",{className:" text-[20px] text-[#ABAAAA]",children:a.category}),(0,e.jsxs)("p",{className:"",children:[" ",a.description]})]})})})})}},8010:function(e,b,a){"use strict";a.r(b);var f=a(7568),c=a(4051),g=a.n(c),h=a(5893),i=a(7294),d=a(9669),j=a.n(d),k=a(2121),l=a(6846);b.default=function(){var a=(0,i.useState)([]),b=a[0],c=a[1];return(0,i.useEffect)(function(){var a;(a=(0,f.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j().get("".concat(k.H,"/get-post/blog/"));case 3:b=a.sent,console.log("The return ",b),c(b.data),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0),alert(a.t0.message);case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(){return a.apply(this,arguments)})()},[]),(0,h.jsxs)("div",{className:"mt-[40px] font-main px-[5%]",children:[(0,h.jsx)("h1",{className:"text-[#01A7C2] text-[36px] mb-2 font-[300]",children:"Blog"}),(0,h.jsx)("div",{className:"flex justify-between flex-wrap",children:b.map(function(b){var a=b.postData;return(0,h.jsx)(l.Z,{img:a.imgLink,title:a.title,category:a.category,description:a.description,id:b.postId},b.postId)})})]})}},2121:function(c,a,b){"use strict";b.d(a,{H:function(){return d}});var d="http://giovani-web-design-back-end.herokuapp.com"}},function(a){a.O(0,[217,774,888,179],function(){var b;return a(a.s=7801)}),_N_E=a.O()}])