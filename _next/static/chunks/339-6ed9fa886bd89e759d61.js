(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{66230:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{g:function(){return r},v:function(){return o}})},5373:function(e,n,t){"use strict";t.d(n,{v:function(){return L}});var r=t(66230),o=t(67294),i=t(45697),u=t(73935),c=t(61496),a=t(38490),f=function e(n,t,r){void 0===t&&(t=0);var i=t,u=!1;return{items:o.Children.map(n,(function(n){if(void 0===n||null===n)return null;if(!n.type)return n;var t=(0,a.oY)(n.type);switch(t){case"MenuItem":if(r){var c={type:"radio"};return n.props.disabled||(c.index=i++),(0,o.cloneElement)(n,c)}case"SubMenu":case"FocusableItem":return n.props.disabled?n:(0,o.cloneElement)(n,{index:i++});default:var f=n.props.children;if(null===f||"object"!==typeof f)return n;var l=e(f,i,r||"MenuRadioGroup"===t);if(i=l.index,"MenuGroup"===t){var s=!!n.props.takeOverflow,d=l.descendOverflow;0,u=u||d||s}return(0,o.cloneElement)(n,{children:l.items})}})),index:i,descendOverflow:u}},l=function(e){var n,t,r,o=e.anchorRect,i=e.containerRect,u=e.menuRect,c=e.placeLeftorRightY,a=e.placeLeftX,f=e.placeRightX,l=e.getLeftOverflow,s=e.getRightOverflow,d=e.confineHorizontally,m=e.confineVertically,p=e.arrowRef,v=e.arrow,h=e.direction,g=e.position,R=h,b=c;return"initial"!==g&&(b=m(b),"anchor"===g&&(b=Math.min(b,o.bottom-i.top),b=Math.max(b,o.top-i.top-u.height))),"left"===R?(n=a,"initial"!==g&&(t=l(n))<0&&((r=s(f))<=0||-t>r)&&(n=f,R="right")):(n=f,"initial"!==g&&(r=s(n))>0&&((t=l(a))>=0||-t<r)&&(n=a,R="left")),"auto"===g&&(n=d(n)),{arrowY:v?function(e){var n=e.arrowRef,t=e.menuY,r=e.anchorRect,o=e.containerRect,i=e.menuRect,u=r.top-o.top-t+r.height/2,c=1.25*n.current.offsetHeight;return u=Math.max(c,u),Math.min(u,i.height-c)}({menuY:b,arrowRef:p,anchorRect:o,containerRect:i,menuRect:u}):void 0,x:n,y:b,computedDirection:R}},s=function(e){var n,t,r,o=e.anchorRect,i=e.containerRect,u=e.menuRect,c=e.placeToporBottomX,a=e.placeTopY,f=e.placeBottomY,l=e.getTopOverflow,s=e.getBottomOverflow,d=e.confineHorizontally,m=e.confineVertically,p=e.arrowRef,v=e.arrow,h=e.direction,g=e.position,R="top"===h?"top":"bottom",b=c;return"initial"!==g&&(b=d(b),"anchor"===g&&(b=Math.min(b,o.right-i.left),b=Math.max(b,o.left-i.left-u.width))),"top"===R?(n=a,"initial"!==g&&(t=l(n))<0&&((r=s(f))<=0||-t>r)&&(n=f,R="bottom")):(n=f,"initial"!==g&&(r=s(n))>0&&((t=l(a))>=0||-t<r)&&(n=a,R="top")),"auto"===g&&(n=m(n)),{arrowX:v?function(e){var n=e.arrowRef,t=e.menuX,r=e.anchorRect,o=e.containerRect,i=e.menuRect,u=r.left-o.left-t+r.width/2,c=1.25*n.current.offsetWidth;return u=Math.max(c,u),Math.min(u,i.width-c)}({menuX:b,arrowRef:p,anchorRect:o,containerRect:i,menuRect:u}):void 0,x:b,y:n,computedDirection:R}},d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?o.useLayoutEffect:o.useEffect,m=t(65234),p=t(3247),v=t(61358),h=["ariaLabel","menuClassName","menuStyles","arrowClassName","arrowStyles","anchorPoint","anchorRef","containerRef","externalRef","parentScrollingRef","arrow","align","direction","position","overflow","repositionFlag","captureFocus","state","endTransition","isDisabled","menuItemFocus","offsetX","offsetY","children","onClose"],g=function(e){var n=e.ariaLabel,t=e.menuClassName,i=e.menuStyles,u=e.arrowClassName,g=e.arrowStyles,y=e.anchorPoint,E=e.anchorRef,w=e.containerRef,x=e.externalRef,C=e.parentScrollingRef,O=e.arrow,S=e.align,T=e.direction,M=e.position,k=e.overflow,N=e.repositionFlag,A=e.captureFocus,L=void 0===A||A,B=e.state,D=e.endTransition,P=e.isDisabled,I=e.menuItemFocus,H=e.offsetX,z=e.offsetY,j=e.children,U=e.onClose,Y=(0,r.v)(e,h),_=(0,o.useState)({x:0,y:0}),F=_[0],X=_[1],G=(0,o.useState)({}),K=G[0],V=G[1],J=(0,o.useState)(),Q=J[0],W=J[1],Z=(0,o.useState)(T),q=Z[0],$=Z[1],ee=(0,o.useContext)(c.J6),ne=ee.transition,te=ee.boundingBoxRef,re=ee.boundingBoxPadding,oe=ee.rootMenuRef,ie=ee.rootAnchorRef,ue=ee.scrollingRef,ce=ee.anchorScrollingRef,ae=ee.reposition,fe=ee.viewScroll,le=(0,o.useContext)(c.b7).reposSubmenu||N,se=(0,o.useRef)(null),de=(0,o.useRef)(null),me=(0,o.useRef)(0),pe=(0,o.useRef)(!1),ve=(0,o.useRef)({width:0,height:0}),he=(0,o.useRef)((function(){})),ge=(0,o.useRef)(!1),Re=(0,a.tr)(B),be=(0,a.us)(ne,"open"),ye=(0,a.us)(ne,"close"),Ee=(0,o.useReducer)((function(e,n){var t=e.hoverIndex,r=e.openSubmenuCount;return{hoverIndex:R(t,n,me),openSubmenuCount:b(r,n)}}),{hoverIndex:c.bz,openSubmenuCount:0}),we=Ee[0],xe=we.hoverIndex,Ce=we.openSubmenuCount,Oe=Ee[1],Se=(0,o.useReducer)((function(e){return e+1}),1),Te=Se[0],Me=Se[1],ke=(0,o.useMemo)((function(){var e=f(j),n=e.items,t=e.index,r=e.descendOverflow;return me.current=t,ge.current=r,n}),[j]),Ne=(0,o.useCallback)((function(){if(w.current){ue.current||(ue.current=te?te.current:(0,a.GZ)(oe.current));var e=function(e){var n=e.menuRef,t=e.containerRef,r=e.scrollingRef,o=e.boundingBoxPadding,i=n.current.getBoundingClientRect(),u=t.current.getBoundingClientRect(),c=r.current===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:r.current.getBoundingClientRect(),f=(0,a.dj)(o),l=function(e){return e+u.left-c.left-f.left},s=function(e){return e+u.left+i.width-c.right+f.right},d=function(e){return e+u.top-c.top-f.top},m=function(e){return e+u.top+i.height-c.bottom+f.bottom};return{menuRect:i,containerRect:u,getLeftOverflow:l,getRightOverflow:s,getTopOverflow:d,getBottomOverflow:m,confineHorizontally:function(e){var n=l(e);if(n<0)e-=n;else{var t=s(e);t>0&&(n=l(e-=t))<0&&(e-=n)}return e},confineVertically:function(e){var n=d(e);if(n<0)e-=n;else{var t=m(e);t>0&&(n=d(e-=t))<0&&(e-=n)}return e}}}({menuRef:se,containerRef:w,scrollingRef:ue,boundingBoxPadding:re}),n=e.menuRect,t={computedDirection:"bottom"};y?t=function(e){var n,t,r=e.positionHelpers,o=e.anchorPoint,i=r.menuRect,u=r.containerRect,c=r.getLeftOverflow,a=r.getRightOverflow,f=r.getTopOverflow,l=r.getBottomOverflow,s=r.confineHorizontally,d=r.confineVertically;n=o.x-u.left,t=o.y-u.top;var m=a(n);if(m>0){var p=n-i.width,v=c(p);(v>=0||-v<m)&&(n=p),n=s(n)}var h="bottom",g=l(t);if(g>0){var R=t-i.height,b=f(R);(b>=0||-b<g)&&(t=R,h="top"),t=d(t)}return{x:n,y:t,computedDirection:h}}({positionHelpers:e,anchorPoint:y}):E&&(t=function(e){var n=e.arrow,t=e.align,o=e.direction,i=e.offsetX,u=e.offsetY,c=e.position,a=e.anchorRef,f=e.arrowRef,d=e.positionHelpers,m=d.menuRect,p=d.containerRect,v=i,h=u;n&&("left"===o||"right"===o?v+=f.current.offsetWidth:h+=f.current.offsetHeight);var g,R,b=a.current.getBoundingClientRect(),y=b.left-p.left-m.width-v,E=b.right-p.left+v,w=b.top-p.top-m.height-h,x=b.bottom-p.top+h;"end"===t?(g=b.right-p.left-m.width,R=b.bottom-p.top-m.height):"center"===t?(g=b.left-p.left-(m.width-b.width)/2,R=b.top-p.top-(m.height-b.height)/2):(g=b.left-p.left,R=b.top-p.top),g+=v,R+=h;var C=(0,r.g)({},d,{anchorRect:b,placeLeftX:y,placeRightX:E,placeLeftorRightY:R,placeTopY:w,placeBottomY:x,placeToporBottomX:g,arrowRef:f,arrow:n,direction:o,position:c});switch(o){case"left":case"right":return l(C);case"top":case"bottom":default:return s(C)}}({arrow:O,align:S,direction:T,offsetX:H,offsetY:z,position:M,anchorRef:E,arrowRef:de,positionHelpers:e}));var o=t,i=o.arrowX,u=o.arrowY,c=o.x,f=o.y,d=o.computedDirection,m=n.height;if("visible"!==k){var p,v,h=e.getTopOverflow,g=e.getBottomOverflow,R=ve.current.height,b=g(f);if(b>0||(0,a.eO)(b,0)&&(0,a.eO)(m,R))p=m-b,v=b;else{var x=h(f);(x<0||(0,a.eO)(x,0)&&(0,a.eO)(m,R))&&(v=0-x,(p=m+x)>=0&&(f-=x))}p>=0?(m=p,W({height:p,overflowAmt:v})):W()}O&&V({x:i,y:u}),X({x:c,y:f}),$(d),ve.current={width:n.width,height:m}}}),[O,S,re,T,H,z,M,k,y,E,w,te,oe,ue]);d((function(){Re&&(Ne(),pe.current&&Me()),pe.current=Re,he.current=Ne}),[Re,Ne,le]),d((function(){Q&&!ge.current&&(se.current.scrollTop=0)}),[Q]),(0,o.useEffect)((function(){if(Re){!ce.current&&ie&&ie.current.tagName&&(ce.current=(0,a.GZ)(ie.current));var e=ue.current,n=e&&e.addEventListener?e:window,t=ce.current||n,r=fe;if(t!==n&&"initial"===r&&(r="auto"),"initial"!==r){"auto"===r&&"visible"!==k&&(r="close");var o=function(){"auto"===r?(0,a.MA)(Ne):(0,a.Dx)(U,{reason:c.GB.SCROLL})},i=t!==n&&"initial"!==fe?[t,n]:[t];return i.forEach((function(e){return e.addEventListener("scroll",o)})),function(){return i.forEach((function(e){return e.removeEventListener("scroll",o)}))}}}}),[ie,ce,ue,Re,k,U,fe,Ne]);var Ae=!!Q&&Q.overflowAmt>0;(0,o.useEffect)((function(){if(!Ae&&Re&&C){var e=function(){return(0,a.MA)(Ne)},n=C.current;return n.addEventListener("scroll",e),function(){return n.removeEventListener("scroll",e)}}}),[Re,Ae,C,Ne]),(0,o.useEffect)((function(){if("function"===typeof ResizeObserver&&"initial"!==ae){var e=new ResizeObserver((function(e){var n,t,r=e[0],o=r.borderBoxSize,i=r.target;if(o){var u=o[0]||o;n=u.inlineSize,t=u.blockSize}else{var c=i.getBoundingClientRect();n=c.width,t=c.height}0!==n&&0!==t&&((0,a.eO)(n,ve.current.width,1)&&(0,a.eO)(t,ve.current.height,1)||(0,a.MA)((function(){he.current(),Me()})))})),n=se.current;return e.observe(n,{box:"border-box"}),function(){return e.unobserve(n)}}}),[ae]),(0,o.useEffect)((function(){if(!Re)return Oe({type:c.Ay.RESET}),void(ye||W());var e=I||{},n=e.position,t=e.alwaysUpdate,r=function(){n===c.td.FIRST?Oe({type:c.Ay.FIRST}):n===c.td.LAST?Oe({type:c.Ay.LAST}):n>=0&&n<me.current&&Oe({type:c.Ay.SET,index:n})};if(t)r();else if(L){var o=setTimeout((function(){se.current&&!se.current.contains(document.activeElement)&&(se.current.focus(),r())}),be?170:100);return function(){return clearTimeout(o)}}}),[be,ye,L,Re,I]);var Le,Be,De=Ce>0,Pe=(0,o.useMemo)((function(){return{parentMenuRef:se,parentOverflow:k,isParentOpen:Re,isSubmenuOpen:De,dispatch:Oe}}),[Re,De,k]);Q&&(ge.current?Be=Q.overflowAmt:Le=Q.height);var Ie=(0,o.useMemo)((function(){return{reposSubmenu:Te,overflow:k,overflowAmt:Be}}),[Te,k,Be]),He=Le>=0?{maxHeight:Le,overflow:k}:void 0,ze=(0,o.useMemo)((function(){return{state:B,dir:q}}),[B,q]),je=(0,o.useMemo)((function(){return Object.freeze({dir:q})}),[q]),Ue=(0,m.l)({block:c.nJ,element:c.fM,modifiers:je,className:u}),Ye=(0,p.N)(g,je),_e=(0,a.Q)({onKeyDown:function(e){var n=!1;switch(e.key){case c.R8.HOME:Oe({type:c.Ay.FIRST}),n=!0;break;case c.R8.END:Oe({type:c.Ay.LAST}),n=!0;break;case c.R8.UP:Oe({type:c.Ay.DECREASE}),n=!0;break;case c.R8.DOWN:Oe({type:c.Ay.INCREASE}),n=!0;break;case c.R8.SPACE:e.target&&-1!==e.target.className.indexOf(c.nJ)&&e.preventDefault()}n&&(e.preventDefault(),e.stopPropagation())},onAnimationEnd:function(){"closing"===B&&W(),(0,a.Dx)(D)}},Y);return o.createElement("ul",(0,r.g)({role:"menu",tabIndex:"-1","aria-disabled":P||void 0,"aria-label":n},Y,_e,{ref:(0,v.Q)(x,se),className:(0,m.l)({block:c.nJ,modifiers:ze,className:t}),style:(0,r.g)({},(0,p.N)(i,ze),He,{left:F.x+"px",top:F.y+"px"})}),O&&o.createElement("div",{className:Ue,style:(0,r.g)({},Ye,{left:K.x&&K.x+"px",top:K.y&&K.y+"px"}),ref:de}),o.createElement(c.b7.Provider,{value:Ie},o.createElement(c._X.Provider,{value:Pe},o.createElement(c.R9.Provider,{value:xe},ke))))};function R(e,n,t){var r=n.type,o=n.index;switch(r){case c.Ay.RESET:return c.bz;case c.Ay.SET:return o;case c.Ay.UNSET:return e===o?c.bz:e;case c.Ay.DECREASE:var i=e;return--i<0&&(i=t.current-1),i;case c.Ay.INCREASE:var u=e;return++u>=t.current&&(u=0),u;case c.Ay.FIRST:return t.current>0?0:c.bz;case c.Ay.LAST:return t.current>0?t.current-1:c.bz;default:return e}}function b(e,n){switch(n.type){case c.kY.OPEN:return e+1;case c.kY.CLOSE:return Math.max(e-1,0);default:return e}}var y=function(e){var n;return(n={})[e?e+"ClassName":"className"]=(0,i.oneOfType)([i.string,i.func]),n[e?e+"Styles":"styles"]=(0,i.oneOfType)([i.object,i.func]),n},E=(0,r.g)({className:i.string},y("menu"),y("arrow"),{arrow:i.bool,offsetX:i.number,offsetY:i.number,align:(0,i.oneOf)(["start","center","end"]),direction:(0,i.oneOf)(["left","right","top","bottom"]),position:(0,i.oneOf)(["auto","anchor","initial"]),overflow:(0,i.oneOf)(["auto","visible","hidden"])}),w=(i.object,i.bool,i.bool,i.bool,i.bool,i.bool,i.bool,i.number,i.object,i.string,i.string,i.number,i.number,i.number,i.bool,i.string,i.func,i.object,i.func,i.func,{offsetX:0,offsetY:0,align:"start",direction:"bottom",position:"auto",overflow:"visible"}),x=(0,r.g)({},w,{reposition:"auto",viewScroll:"initial",transitionTimeout:500,submenuOpenDelay:300,submenuCloseDelay:150}),C=["aria-label","className","containerProps","initialMounted","unmountOnClose","transition","transitionTimeout","boundingBoxRef","boundingBoxPadding","reposition","submenuOpenDelay","submenuCloseDelay","skipOpen","viewScroll","portal","theming","onItemClick","onClose"],O=(0,o.forwardRef)((function(e,n){var t=e["aria-label"],i=e.className,f=e.containerProps,l=e.initialMounted,s=e.unmountOnClose,d=e.transition,p=e.transitionTimeout,v=e.boundingBoxRef,h=e.boundingBoxPadding,R=e.reposition,b=e.submenuOpenDelay,y=e.submenuCloseDelay,E=e.skipOpen,w=e.viewScroll,x=e.portal,O=e.theming,S=e.onItemClick,T=e.onClose,M=(0,r.v)(e,C),k=(0,o.useRef)(null),N=(0,o.useRef)(null),A=(0,o.useRef)(null),L=M.anchorRef,B=M.state,D=(0,o.useMemo)((function(){return{initialMounted:l,unmountOnClose:s,transition:d,transitionTimeout:p,boundingBoxRef:v,boundingBoxPadding:h,rootMenuRef:k,rootAnchorRef:L,scrollingRef:N,anchorScrollingRef:A,reposition:R,viewScroll:w}}),[l,s,d,p,L,v,h,R,w]),P=(0,o.useMemo)((function(){return{submenuOpenDelay:b,submenuCloseDelay:y}}),[b,y]),I=(0,o.useMemo)((function(){return{handleClick:function(e,n){e.stopPropagation||(0,a.Dx)(S,e);var t=e.keepOpen;void 0===t&&(t=n&&e.key===c.R8.SPACE),t||(0,a.Dx)(T,{value:e.value,key:e.key,reason:c.GB.CLICK})},handleClose:function(e){(0,a.Dx)(T,{key:e,reason:c.GB.CLICK})}}}),[S,T]),H=(0,a.us)(d,"item"),z=(0,o.useMemo)((function(){return{theme:O,itemTransition:H}}),[O,H]),j=(0,a.Q)({onKeyDown:function(e){var n=e.key;switch(n){case c.R8.ESC:(0,a.Dx)(T,{key:n,reason:c.GB.CANCEL})}},onBlur:function(e){(0,a.tr)(B)&&!e.currentTarget.contains(e.relatedTarget||document.activeElement)&&((0,a.Dx)(T,{reason:c.GB.BLUR}),E&&(E.current=!0,setTimeout((function(){return E.current=!1}),300)))}},f),U=o.createElement("div",(0,r.g)({},f,j,{className:(0,m.l)({block:c.Kk,modifiers:z,className:i}),ref:k}),B&&o.createElement(c.J6.Provider,{value:D},o.createElement(c.Bs.Provider,{value:P},o.createElement(c.AH.Provider,{value:I},o.createElement(g,(0,r.g)({},M,{ariaLabel:t||"Menu",externalRef:n,containerRef:k,onClose:T}))))));return x?(0,u.createPortal)(U,document.body):U}));O.defaultProps=(0,r.g)({},x,{menuItemFocus:{}});var S=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],T=function(e){return e?6:5},M=function(e,n,t,r,o){clearTimeout(r.current),n(e),t.current=e,o&&o({state:S[e]})},k=function(e){var n=void 0===e?{}:e,t=n.initialMounted,r=n.unmountOnClose,i=n.transition,u=function(e){var n,t,r=void 0===e?{}:e,i=r.enter,u=void 0===i||i,c=r.exit,a=void 0===c||c,f=r.preEnter,l=r.preExit,s=r.timeout,d=r.initialEntered,m=r.mountOnEnter,p=r.unmountOnExit,v=r.onChange,h=(0,o.useState)(d?2:T(m)),g=h[0],R=h[1],b=(0,o.useRef)(g),y=(0,o.useRef)();"object"===typeof s?(n=s.enter,t=s.exit):n=t=s;var E=(0,o.useCallback)((function(){var e;switch(b.current){case 1:case 0:e=2;break;case 4:case 3:e=T(p)}void 0!==e&&M(e,R,b,y,v)}),[v,p]),w=(0,o.useCallback)((function(e){var r=function e(r){switch(M(r,R,b,y,v),r){case 1:n>=0&&(y.current=setTimeout(E,n));break;case 4:t>=0&&(y.current=setTimeout(E,t));break;case 0:case 3:y.current=setTimeout((function(){return e(r+1)}),0)}},o=b.current<=2;"boolean"!==typeof e&&(e=!o),e?o||r(u?f?0:1:2):o&&r(a?l?3:4:T(p))}),[E,v,u,a,f,l,n,t,p]);return(0,o.useEffect)((function(){return function(){return clearTimeout(y.current)}}),[]),[S[g],w,E]}({mountOnEnter:!t,unmountOnExit:r,timeout:n.transitionTimeout,enter:(0,a.us)(i,"open"),exit:(0,a.us)(i,"close")}),f=u[0],l=u[1],s=u[2];return{state:c._f[f],toggleMenu:l,endTransition:s}},N=["aria-label","captureFocus","menuButton","instanceRef","onMenuChange"],A=["openMenu","toggleMenu"],L=(0,o.forwardRef)((function(e,n){var t=e["aria-label"],i=e.menuButton,u=e.instanceRef,f=e.onMenuChange,l=(0,r.v)(e,N),s=function(e){var n=k(e),t=(0,o.useState)(),i=t[0],u=t[1];return(0,r.g)({},n,{openMenu:function(e,t){u({position:e,alwaysUpdate:t}),n.toggleMenu(!0)},menuItemFocus:i})}(l),d=s.openMenu,m=s.toggleMenu,p=(0,r.v)(s,A),h=(0,a.tr)(p.state),g=(0,o.useRef)(!1),R=(0,o.useRef)(null),b=(0,o.useCallback)((function(e){m(!1),e.key&&R.current.focus()}),[m]),y=(0,a.Dx)(i,{open:h});if(!y)throw new Error("Menu requires a menuButton prop.");var E=(0,r.g)({ref:(0,v.Q)(y.ref,R)},(0,a.Q)({onClick:function(e){g.current||d(0===e.detail?c.td.FIRST:void 0)},onKeyDown:function(e){var n=!1;switch(e.key){case c.R8.UP:d(c.td.LAST),n=!0;break;case c.R8.DOWN:d(c.td.FIRST),n=!0}n&&e.preventDefault()}},y.props));"MenuButton"===(0,a.oY)(y.type)&&(E.isOpen=h);var w=(0,o.cloneElement)(y,E);!function(e,n){var t=(0,o.useRef)(n);(0,o.useEffect)((function(){t.current!==n&&(0,a.Dx)(e,{open:n}),t.current=n}),[e,n])}(f,h),(0,o.useImperativeHandle)(u,(function(){return{openMenu:d,closeMenu:function(){return m(!1)}}}));var x=(0,r.g)({},l,p,{"aria-label":t||("string"===typeof y.props.children?y.props.children:"Menu"),anchorRef:R,ref:n,onClose:b,skipOpen:g});return o.createElement(o.Fragment,null,w,o.createElement(O,x))}));L.defaultProps=x},27131:function(e,n,t){"use strict";t.d(n,{s:function(){return m}});var r=t(66230),o=t(67294),i=(t(45697),t(61496)),u=t(38490),c=function(e,n){var t=(0,u.zi)((0,o.forwardRef)((function(n,t){return o.createElement(e,(0,r.g)({},n,{externalRef:t,isHovering:(0,o.useContext)(i.R9)===n.index}))})),n);return t.displayName="WithHovering("+n+")",t},a=t(61358),f=t(65234),l=t(3247),s=["className","styles","value","href","type","checked","disabled","index","children","onClick","isHovering","externalRef"],d=["isActive","onKeyUp","onBlur"],m=c((0,o.memo)((function(e){var n=e.className,t=e.styles,c=e.value,m=e.href,p=e.type,v=e.checked,h=e.disabled,g=e.index,R=e.children,b=e.onClick,y=e.isHovering,E=e.externalRef,w=(0,r.v)(e,s),x=!!h;(0,u.Ls)(g,x,R);var C=(0,o.useRef)(),O=function(e,n,t,r){var u=(0,o.useContext)(i.Bs).submenuCloseDelay,c=(0,o.useContext)(i._X),a=c.isParentOpen,f=c.isSubmenuOpen,l=c.dispatch,s=(0,o.useRef)(),d=function(){r||l({type:i.Ay.SET,index:n})};return(0,o.useEffect)((function(){return function(){return clearTimeout(s.current)}}),[]),(0,o.useEffect)((function(){t&&a&&e.current&&e.current.focus()}),[e,t,a]),{setHover:d,onBlur:function(e){t&&!e.currentTarget.contains(e.relatedTarget)&&l({type:i.Ay.UNSET,index:n})},onMouseEnter:function(){f?s.current=setTimeout(d,u):d()},onMouseLeave:function(e,t){s.current&&clearTimeout(s.current),t||l({type:i.Ay.UNSET,index:n})}}}(C,g,y,x),S=O.setHover,T=O.onBlur,M=O.onMouseEnter,k=O.onMouseLeave,N=(0,o.useContext)(i.AH),A=(0,o.useContext)(i.L1),L=function(e,n,t){var r=(0,o.useState)(!1),u=r[0],c=r[1],a=[i.R8.ENTER,i.R8.SPACE].concat(t),f=function(){return u&&c(!1)};return{isActive:u,onPointerDown:function(){n||c(!0)},onPointerUp:f,onPointerLeave:f,onKeyDown:function(t){u||!e||n||-1===a.indexOf(t.key)||c(!0)},onKeyUp:function(e){-1!==a.indexOf(e.key)&&c(!1)},onBlur:function(e){u&&!e.currentTarget.contains(e.relatedTarget)&&c(!1)}}}(y,x),B=L.isActive,D=L.onKeyUp,P=L.onBlur,I=(0,r.v)(L,d),H="radio"===p,z="checkbox"===p,j=!!m&&!x&&!H&&!z,U=H?A.value===c:!!z&&!!v,Y=function(e){if(!x){var n={value:c,syntheticEvent:e};void 0!==e.key&&(n.key=e.key),z&&(n.checked=!U),H&&(n.name=A.name),(0,u.Dx)(b,n),H&&(0,u.Dx)(A.onRadioChange,n),N.handleClick(n,z||H)}},_=(0,o.useMemo)((function(){return Object.freeze({type:p,disabled:x,hover:y,active:B,checked:U,anchor:j})}),[p,x,y,B,U,j]),F=(0,u.Q)((0,r.g)({},I,{onMouseEnter:M,onMouseLeave:k,onMouseDown:S,onKeyUp:function(e){if(B)switch(D(e),e.key){case i.R8.ENTER:case i.R8.SPACE:j?C.current.click():Y(e)}},onBlur:function(e){P(e),T(e)},onClick:Y}),w),X=(0,r.g)({role:H?"menuitemradio":z?"menuitemcheckbox":"menuitem","aria-checked":H||z?U:void 0,"aria-disabled":x||void 0,tabIndex:y?0:-1},w,F,{ref:(0,a.Q)(E,C),className:(0,f.l)({block:i.nJ,element:i.np,modifiers:_,className:n}),style:(0,l.N)(t,_)}),G=(0,o.useMemo)((function(){return(0,u.Dx)(R,_)}),[R,_]);return j?o.createElement("li",{role:"presentation"},o.createElement("a",(0,r.g)({},X,{href:m}),G)):o.createElement("li",X,G)})),"MenuItem")},65218:function(e,n,t){"use strict";t.d(n,{a:function(){return l}});var r=t(66230),o=t(67294),i=(t(45697),t(65234)),u=t(61496),c=t(3247),a=t(38490),f=["aria-label","className","styles","name","value","onRadioChange"],l=(0,a.zi)((0,o.forwardRef)((function(e,n){var t=e["aria-label"],a=e.className,l=e.styles,s=e.name,d=e.value,m=e.onRadioChange,p=(0,r.v)(e,f),v=(0,o.useMemo)((function(){return{name:s,value:d,onRadioChange:m}}),[s,d,m]);return o.createElement(u.L1.Provider,{value:v},o.createElement("li",{role:"presentation"},o.createElement("ul",(0,r.g)({role:"group","aria-label":t||s||"Radio group"},p,{ref:n,className:(0,i.l)({block:u.nJ,element:u.Zi,className:a}),style:(0,c.N)(l)}))))})),"MenuRadioGroup")},65234:function(e,n,t){"use strict";t.d(n,{l:function(){return o}});var r=t(67294),o=function(e){var n=e.block,t=e.element,o=e.modifiers,i=e.className;return(0,r.useMemo)((function(){for(var e=t?n+"__"+t:n,r=e,u=0,c=Object.keys(o||{});u<c.length;u++){var a=c[u],f=o[a];f&&(r+=" "+e+"--",r+=!0===f?a:a+"-"+f)}var l="function"===typeof i?i(o):i;return"string"===typeof l&&(l=l.trim())&&(r+=" "+l),r}),[n,t,o,i])}},61358:function(e,n,t){"use strict";t.d(n,{Q:function(){return i}});var r=t(67294),o=function(e,n){"function"===typeof e?e(n):e&&(e.current=n)},i=function(e,n){return(0,r.useMemo)((function(){return e?n?function(t){o(e,t),o(n,t)}:e:n}),[e,n])}},3247:function(e,n,t){"use strict";t.d(n,{N:function(){return c}});var r=t(66230),o=t(67294),i=function(e){return e&&"object"===typeof e},u=function(e){return"$"===e[0]?e.slice(1):e},c=function(e,n){return(0,o.useMemo)((function(){if("function"===typeof e)return e(n);if(i(e)){if(!n)return e;for(var t={},o=0,c=Object.keys(e);o<c.length;o++){var a=c[o],f=e[a];if(i(f)){var l=n[u(a)];if("string"===typeof l)for(var s=0,d=Object.keys(f);s<d.length;s++){var m=d[s],p=f[m];i(p)?u(m)===l&&(t=(0,r.g)({},t,p)):t[m]=p}else l&&(t=(0,r.g)({},t,f))}else t[a]=f}return t}}),[e,n])}},61496:function(e,n,t){"use strict";t.d(n,{GB:function(){return y},AH:function(){return m},td:function(){return E},Ay:function(){return R},R9:function(){return l},Bs:function(){return h},R8:function(){return g},b7:function(){return d},_X:function(){return s},_f:function(){return w},L1:function(){return p},J6:function(){return v},kY:function(){return b},bz:function(){return f},fM:function(){return u},nJ:function(){return i},Kk:function(){return o},np:function(){return c},Zi:function(){return a}});var r=t(67294),o="szh-menu-container",i="szh-menu",u="arrow",c="item",a="radio-group",f=-1,l=(0,r.createContext)(f),s=(0,r.createContext)({}),d=(0,r.createContext)({}),m=(0,r.createContext)({}),p=(0,r.createContext)({}),v=(0,r.createContext)({}),h=(0,r.createContext)({}),g=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),R=Object.freeze({RESET:"HOVER_RESET",SET:"HOVER_SET",UNSET:"HOVER_UNSET",INCREASE:"HOVER_INCREASE",DECREASE:"HOVER_DECREASE",FIRST:"HOVER_FIRST",LAST:"HOVER_LAST"}),b=Object.freeze({OPEN:"SUBMENU_OPEN",CLOSE:"SUBMENU_CLOSE"}),y=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),E=Object.freeze({INITIAL:"initial",FIRST:"first",LAST:"last"}),w=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"})},38490:function(e,n,t){"use strict";t.d(n,{Q:function(){return s},MA:function(){return i},zi:function(){return l},eO:function(){return u},oY:function(){return f},GZ:function(){return m},us:function(){return c},tr:function(){return o},dj:function(){return d},Dx:function(){return a},Ls:function(){return p}});var r=t(73935),o=function(e){return!!e&&"o"===e[0]},i=r.unstable_batchedUpdates||function(e){return e()},u=(Object.values,function(e,n,t){return void 0===t&&(t=1e-4),Math.abs(e-n)<t}),c=function(e,n){return!(!e||!e[n])||!0===e},a=function(e,n){return"function"===typeof e?e(n):e},f=function(e){return e&&e._szhsinMenu},l=function(e,n){return n?Object.defineProperty(e,"_szhsinMenu",{value:n}):e},s=function(e,n){if(!n)return e;for(var t={},r=function(r,o){var i=o[r],u=e[i],c=n[i],a=void 0;a="function"===typeof c?function(e){c(e),u(e)}:u,t[i]=a},o=0,i=Object.keys(e);o<i.length;o++)r(o,i);return t},d=function(e){if("string"!==typeof e)return{top:0,right:0,bottom:0,left:0};var n=e.trim().split(/\s+/,4).map(parseFloat),t=isNaN(n[0])?0:n[0],r=isNaN(n[1])?t:n[1];return{top:t,right:r,bottom:isNaN(n[2])?t:n[2],left:isNaN(n[3])?r:n[3]}},m=function(e){for(;e&&e!==document.body;){var n=getComputedStyle(e),t=n.overflow,r=n.overflowX,o=n.overflowY;if(/auto|scroll|overlay|hidden/.test(t+o+r))return e;e=e.parentNode}return window},p=function(e,n,t){}}}]);