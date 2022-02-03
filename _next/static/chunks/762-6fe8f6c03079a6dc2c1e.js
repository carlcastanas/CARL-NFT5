(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{92395:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),s=n(67294),a=n(22501);function i(e){var t=e.className,n=void 0===t?"button w-button":t,i=(0,a.Or)(),c=i.showConnectModal,o=i.handleDisconnectWalletConnect,l=(0,a.Os)().wallet,u=l.slice(0,2)+"..."+l.slice(38),d=(0,s.useState)(!1),f=d[0],h=d[1],m=(0,s.useState)(!1),p=m[0],g=m[1];return(0,s.useEffect)((function(){localStorage.getItem("walletconnect")&&h(!0)}),[]),(0,r.jsx)("button",{className:n,onClick:function(){l?f&&(o(),h(!1)):c()},style:{fontWeight:700},onMouseEnter:function(){return g(!0)},onFocus:function(){return g(!0)},onBlur:function(){return g(!0)},onMouseLeave:function(){return g(!1)},disabled:Boolean(l)&&!f,children:p&&f?"Disconnect":l?u:"Connect"})}},66513:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893);function s(){return(0,r.jsxs)("div",{className:"max-w-sm text-center",children:[(0,r.jsx)("img",{src:"/images/hally.svg",className:"mx-auto",alt:""}),(0,r.jsx)("h1",{className:"text-2xl",children:"We couldn't find a Roboto in your wallet"}),(0,r.jsx)("p",{className:"text-sm",children:"To be able to suit-up a Roboto, you need to have a Roboto in your wallet. Get one in Opensea or connect a different wallet."}),(0,r.jsx)("a",{href:"https://opensea.io/collection/robotos-official",className:"text-white bg-blue-600 rounded-lg p-3 w-full block mt-8",style:{textDecoration:"none"},children:"Visit OpenSea"})]})}},37652:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),s=n(27147),a=n(5373),i=n(65218),c=n(27131),o=["9735","4375"];function l(e){var t=e.selectedRoboto,n=e.setSelectedRoboto,l=e.className,u=(0,s.m)(o).robots;return(0,r.jsx)("div",{className:l,children:(0,r.jsx)(a.v,{menuButton:(0,r.jsxs)("button",{className:"text-left z-20 text-white appearance-none px-3 py-4 text-base w-full rounded-lg",style:{minWidth:205,background:"#1F2024 url(/images/expand-icon.svg) no-repeat right 10px center",border:"1px solid #4A4A4E"},children:["Roboto #",t.id]}),children:(0,r.jsx)(i.a,{value:t.id,onRadioChange:function(e){var t=u.find((function(t){return t.id===e.value}));t&&n(t)},children:u.map((function(e){return(0,r.jsxs)(c.s,{type:"radio",value:e.id,children:[(0,r.jsx)("img",{src:"https://d2lp2vbc3umjmr.cloudfront.net/".concat(e.id,"/roboto-head.png"),style:{width:20,height:20},className:"mr-2"})," ","Roboto #",e.id,t.id===e.id&&(0,r.jsx)("img",{src:"/images/check.svg",className:"ml-4"})]},e.id)}))})})})}},89098:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),s=n(34651),a=n(41664),i=n(67294),c=n(92395),o=n(22501);function l(e){var t=e.children,n=(e.bgType,(0,o.Os)().wallet),l=(0,s.useRouter)(),u=(null===n||void 0===n?void 0:n.slice(0,2))+"..."+(null===n||void 0===n?void 0:n.slice(38)),d=(0,i.useState)(!1),f=d[0],h=d[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center min-h-screen",style:{background:"#1F2024",fontFamily:'"Space Grotesk", sans-serif'},children:[(0,r.jsxs)("div",{className:"flex md:hidden items-center workshop-nav w-full justify-between px-6 py-4",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/robo-logo.png",width:"32",height:"32"})})}),(0,r.jsx)("button",{onClick:function(){return h((function(e){return!e}))},children:(0,r.jsx)("img",{src:"/images/hamburger.svg",width:"25",height:"25"})})]}),(0,r.jsx)("nav",{className:"".concat(f?"flex":"hidden"," md:hidden text-white text-center"),children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"py-3",children:(0,r.jsx)(a.default,{href:"/suit-up",children:(0,r.jsx)("a",{className:"/suit-up"===l.pathname?"font-bold":"",children:"Wardrobe"})})}),(0,r.jsx)("li",{className:"py-3",children:(0,r.jsx)(a.default,{href:"/banner-builder",children:(0,r.jsx)("a",{className:"/banner-builder"===l.pathname?"font-bold":"",children:"Banner"})})}),(0,r.jsx)("li",{className:"py-3",children:(0,r.jsx)(a.default,{href:"/family",children:(0,r.jsx)("a",{className:"/family"===l.pathname?"font-bold":"",children:"Family"})})})]})}),(0,r.jsxs)("nav",{className:"hidden workshop-nav w-full text-white md:flex justify-between h-16 px-6 z-10 items-center border-b border-gray-500",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsxs)("a",{className:"text-white hover:underline flex items-center font-bold",children:[(0,r.jsx)("img",{src:"/images/workshop/roboto-logo.png",loading:"lazy",height:40,width:40,alt:"Robotos"}),(0,r.jsx)("span",{className:"ml-4 text-white font-bold",children:"Robotos"})]})}),(0,r.jsxs)("span",{className:"font-normal ml-2",children:["Workshop ",(0,r.jsx)("small",{children:"BETA"})]})]}),(0,r.jsxs)("div",{className:"flex h-full gap-2",children:[(0,r.jsx)(a.default,{href:"/suit-up",children:(0,r.jsx)("a",{className:"flex items-center h-full p-6 relative ".concat("/suit-up"===l.pathname?"active":"text-gray-400"),children:"Wardrobe"})}),(0,r.jsx)(a.default,{href:"/banner-builder",children:(0,r.jsx)("a",{className:"flex items-center h-full p-6 relative ".concat("/banner-builder"===l.pathname?"active":"text-gray-400"),children:"Banner"})}),(0,r.jsx)(a.default,{href:"/family",children:(0,r.jsx)("a",{className:"flex items-center h-full p-6 relative ".concat("/family"===l.pathname?"active":"text-gray-400"),children:"Family"})})]}),(0,r.jsx)("div",{className:"flex items-center",children:n?(0,r.jsx)("div",{className:"flex items-center text-white w-32 h-12 rounded-lg p-2 border-2 align-items justify-center",style:{borderColor:"#232CFF"},children:u}):(0,r.jsx)(c.Z,{})})]}),(0,r.jsx)("div",{className:"w-full flex flex-1 flex-col items-center justify-center text-white z-10 workshop-container",children:t})]})})}},27147:function(e,t,n){"use strict";n.d(t,{m:function(){return f},D:function(){return h}});var r=n(809),s=n.n(r),a=n(26265),i=n(59999),c=n(92447),o=n(67294),l=n(22501);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=(0,l.Os)(),n=t.robotoTokenIds,r=t.loading,a=(0,o.useState)({robots:[],loading:!0}),u=a[0],f=a[1];return(0,o.useEffect)((function(){function t(){return(t=(0,c.Z)(s().mark((function t(){var r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,i.Z)(n).sort((function(e,t){return Number(e)-Number(t)})),t.next=3,Promise.all([].concat((0,i.Z)(r),(0,i.Z)(0===r.length&&null!==e&&void 0!==e?e:[])).map(function(){var e=(0,c.Z)(s().mark((function e(t){var n,r,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://robotos.mypinata.cloud/ipfs/QmQh36CsceXZoqS7v9YQLUyxXdRmWd8YWTBUz7WCXsiVty/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.image.split("/"),i=a[a.length-1],e.abrupt("return",d(d({},r),{},{id:t,image:"https://robotos.mypinata.cloud/ipfs/".concat(i)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r||function(){return t.apply(this,arguments)}().then((function(e){f({robots:e,loading:!1})}))}),[n,e,r]),u}function h(){var e=(0,l.Os)(),t=e.robopetTokenIds,n=e.loading,r=(0,o.useState)({pets:[],loading:!0}),a=r[0],u=r[1];return(0,o.useEffect)((function(){function e(){return(e=(0,c.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.Z)(t).sort((function(e,t){return Number(e)-Number(t)})),e.next=3,Promise.all(n.map(function(){var e=(0,c.Z)(s().mark((function e(t){var n,r,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://robotos.mypinata.cloud/ipfs/QmcVBQAbPMzEstPyaBoZ3J1dnE3t1horoX9WebLcCCYLR9/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,a=r.image.split("/"),i=a[a.length-1],e.abrupt("return",d(d({},r),{},{id:t,image:"https://robotos.mypinata.cloud/ipfs/".concat(i)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n||function(){return e.apply(this,arguments)}().then((function(e){u({pets:e,loading:!1})}))}),[t,n]),a}},21651:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294);function s(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=e}),[e]),t.current}},74256:function(e,t){"use strict";t.Z={src:"/_next/static/image/pages/suit-up/images/picker-icon.1e0ba829886ae9e41068780b1d930c2f.svg",height:24,width:24}},37684:function(e,t){"use strict";t.Z={src:"/_next/static/image/pages/suit-up/images/transparent.653b73d9edcedf970723e1e361cf5a0b.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAfElEQVR42hXIwQ2EIBBG4b8RSgAMmUwfHmA4YLLboB14WMugC0LQC8TF5F3eByCr4bvs8guPwrtHLFw1zMZXnDRC4cUmanTbL58eXapJtLrmGkHvgplu1NzqElXTBaf/8G0bJVps4RHwqCtuDFN14SNmBUw6wy5dhs8K+ANWojmDsm4nSgAAAABJRU5ErkJggg=="}},75676:function(e,t){"use strict";t.Z={src:"/_next/static/image/pages/workshop/images/download.9851fad7366e282b145896b8b0473d7e.png",height:96,width:96,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42l2JTQpAABSEn2RvwSH8lAOQE7iBhZ0l17BSUnIIykqyw72+vMTGNzUzzQgGlrxgfiWgo8cX0ROHlomEmBVPX2YK9YyUkItSB1E4OJ/chYUcm5oKl5hNNBpGGtWgiuTPDV/oOk0xjOptAAAAAElFTkSuQmCC"}},28418:function(e,t){"use strict";t.Z={src:"/_next/static/image/pages/workshop/images/shuffle.efeaeae678c4746b89a9ddd40d47bd10.png",height:96,width:96,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42mOAgH+sYJIdREj9y/hnBKT1/pX9O/VPgeGf/L/Mf5v/uf5b/6/8361/KhANev8+/tMF0lxgLprAP/l/6f82/XP9t+5fKVjLP6l/6WBDdf+Vgg2FgH8sMGsB52E4Myx++psAAAAASUVORK5CYII="}}}]);