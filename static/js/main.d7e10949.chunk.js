(this["webpackJsonppodcast.web"]=this["webpackJsonppodcast.web"]||[]).push([[0],{168:function(e,t,a){e.exports=a(274)},255:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);a(169),a(195),a(197),a(198),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237);var n=a(0),r=a.n(n),o=a(94),c=a.n(o),l=a(38),i=a.n(l),s=a(27),u=a(108),d=a.n(u),m=(a(245),a(2)),p=a(48),f=a.n(p),g=(a(255),function(e){var t=e.id,a=e.go;return r.a.createElement(m.k,{id:t,centered:!0},r.a.createElement(m.l,null,"\u041f\u043e\u0434\u043a\u0430\u0441\u0442\u044b"),r.a.createElement(m.n,{icon:r.a.createElement(f.a,{className:"Home__icon"}),header:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0434\u043a\u0430\u0441\u0442",action:r.a.createElement(m.a,{size:"l",onClick:a,"data-to":"new-podcast"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043a\u0430\u0441\u0442"),className:"Home__placeholder"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u043f\u043e\u0434\u043a\u0430\u0441\u0442\u0430\u043c\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430."))}),E=a(26),h=a.n(E),b=a(37),y=a(21),v=a(66),x=a.n(v),w=(a(257),a(277));function _(){return(_=Object(b.a)(h.a.mark((function e(t,a,n,r,o){var c,l,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new FormData,console.log("trim",t),c.append("audio",t,a),c.append("left",n),c.append("right",r),e.next=7,fetch("/cut_audio",{method:"POST",body:c,headers:{responseType:"arraybuffer"}});case 7:return l=e.sent,e.next=10,l.blob();case 10:i=e.sent,console.log(i),(s=new FileReader).readAsDataURL(i),s.onloadend=Object(b.a)(h.a.mark((function e(){var t,a,n,r,c,l,u,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.result,e.next=3,i.arrayBuffer();case 3:return a=e.sent,n=new AudioContext,r=[],e.next=8,n.decodeAudioData(a);case 8:for(c=e.sent,l=0;l<c.length;l+=Math.floor(c.length/100)){for(u=0,d=0;d<c.numberOfChannels;++d)u+=c.getChannelData(d)[l];u/=c.numberOfChannels,u+=1,u/=2,r.push(u)}o((function(e){return Object(y.a)(Object(y.a)({},e),{},{audio:t,waves:r})}));case 11:case"end":return e.stop()}}),e)})));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e,t,a,n,r){return _.apply(this,arguments)},O=function(e){var t=e.id,a=e.go,n=e.setCurrentSettings,o=e.currentSettings,c=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,r,o,c,i,s,u,d,m,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],console.log(a),e.next=4,a.arrayBuffer();case 4:return r=e.sent,o=new AudioContext,c=[],e.next=9,o.decodeAudioData(r);case 9:for(i=e.sent,s=0;s<i.length;s+=Math.floor(i.length/100)){for(u=0,d=0;d<i.numberOfChannels;++d)u+=i.getChannelData(d)[s];u/=i.numberOfChannels,u+=1,u/=2,c.push(u)}n((function(e){return Object(y.a)(Object(y.a)({},e),{},{waves:c})})),m=l(i.duration),(p=new FileReader).onload=function(e){console.log(p.result),n((function(e){return Object(y.a)(Object(y.a)({},e),{},{audioDurationString:m,audioName:a.name,audio:p.result})}))},p.readAsDataURL(a),console.log(a);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=Math.round(e),a=Math.round(t/60),n=t%60;return"".concat(a>9?a:"0".concat(a),":").concat(n>9?n:"0".concat(n))};return r.a.createElement(m.k,{id:t,className:"NewPodcast"},r.a.createElement(m.l,{left:r.a.createElement(m.m,{onClick:a,"data-to":"home"})},"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0434\u043a\u0430\u0441\u0442"),r.a.createElement(m.h,null,r.a.createElement(m.f,{style:{display:"flex",padding:0}},r.a.createElement(m.f,{className:"NewPodcast__imageOverlay"},o.imgSrc?r.a.createElement("img",{className:"NewPodcast__image",src:o.imgSrc,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430\u0444",onClick:function(){n((function(e){return Object(y.a)(Object(y.a)({},e),{},{imgSrc:null})}))}}):r.a.createElement(m.g,{tabIndex:0,mode:"overlay_primary",className:"cover-input",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){n((function(e){return Object(y.a)(Object(y.a)({},e),{},{imgSrc:t.result})}))},t.readAsDataURL(e.target.files[0])}},r.a.createElement(x.a,{className:"cover-input__icon",width:32,height:32}))),r.a.createElement(m.f,{className:"NewPodcast__TopForm"},r.a.createElement(m.h,{Component:"div"},r.a.createElement(m.j,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u043a\u0430\u0441\u0442\u0430",className:"NewPodcast__name",value:o.podcastName,onChange:function(e){e.persist(),n((function(t){return Object(y.a)(Object(y.a)({},t),{},{podcastName:e.target.value})}))}}))))),r.a.createElement(m.h,null,r.a.createElement(m.r,{value:o.podcastDescription,onChange:function(e){e.persist(),n((function(t){return Object(y.a)(Object(y.a)({},t),{},{podcastDescription:e.target.value})}))},top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u043a\u0430\u0441\u0442\u0430"})),o.audio?r.a.createElement(m.f,null,r.a.createElement(m.d,{className:"NewPodcast__audioInfo",before:r.a.createElement(m.c,{style:{width:"48px",height:"48px",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(w.a,null)),asideContent:o.audioDurationString},o.audioName),r.a.createElement(m.b,{level:"1",className:"",weight:"regular",style:{color:"#818C99",marginTop:"10px"}},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u043a\u043e\u0434\u044b \u0438 \u0441\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u043a\u0430\u0441\u0442 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),r.a.createElement(m.a,{size:"xl",mode:"outline",style:{marginTop:"18px"},onClick:a,"data-to":"edit-audio"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0443\u0434\u0438\u043e\u0437\u0430\u043f\u0438\u0441\u044c")):r.a.createElement(m.n,{header:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0412\u0430\u0448 \u043f\u043e\u0434\u043a\u0430\u0441\u0442",className:"NewPodcast__placeholder",action:r.a.createElement(m.g,{style:{cursor:"pointer"},tabIndex:0,accept:"audio/*",onChange:c,mode:"outline",controlSize:"l"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b")},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u0430\u0443\u0434\u0438\u043e\u0444\u0430\u0439\u043b \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e"),r.a.createElement(m.p,{style:{marginBottom:"2px",marginTop:"10px"}}),r.a.createElement(m.h,{className:"NewPodcast__checkboxes"},r.a.createElement(m.e,{tabIndex:0,className:"NewPodcast__checkbox"},"\u041d\u0435\u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442"),r.a.createElement(m.e,{tabIndex:0,className:"NewPodcast__checkbox"},"\u0418\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u044d\u043f\u0438\u0437\u043e\u0434 \u0438\u0437 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430"),r.a.createElement(m.e,{tabIndex:0,className:"NewPodcast__checkbox"},"\u0422\u0440\u0435\u0439\u043b\u0435\u0440 \u043f\u043e\u0434\u043a\u0430\u0441\u0442\u0430")),r.a.createElement(m.d,{className:"NewPodcast__privacyCell",expandable:!0,size:"l",description:"\u0412\u0441\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"},"\u041a\u043e\u043c\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u043a\u0430\u0441\u0442"),r.a.createElement(m.f,{style:{paddingTop:0}},r.a.createElement(m.b,{level:"1",weight:"regular",style:{color:"#818C99"}},"\u041f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0441 \u044d\u043f\u0438\u0437\u043e\u0434\u043e\u043c, \u043e\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")),r.a.createElement(m.f,{style:{flexGrow:1,padding:0}}),r.a.createElement(m.f,null,r.a.createElement(m.a,{disabled:!o.imgSrc||!o.podcastName||!o.podcastDescription||!o.audio,size:"xl",mode:"primary"},"\u0414\u0430\u043b\u0435\u0435")))},j=a(49),C=a.n(j),N=(a(93),a(105)),S=a.n(N),L=a(104),P=a.n(L),T=a(106),A=a.n(T),R=a(107),F=a.n(R);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=r.a.createElement("path",{d:"M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),M=r.a.createElement("path",{d:"M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),I=r.a.createElement("path",{d:"M20 4L8.12 15.88",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),W=r.a.createElement("path",{d:"M14.47 14.48L20 20",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),J=r.a.createElement("path",{d:"M8.12 8.12L12 12",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),U=function(e){var t=e.svgRef,a=e.title,n=z(e,["svgRef","title"]);return r.a.createElement("svg",D({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,B,M,I,W,J)},V=r.a.forwardRef((function(e,t){return r.a.createElement(U,D({svgRef:t},e))}));a.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("path",{d:"M12 20V10",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),Z=r.a.createElement("path",{d:"M6 20V4",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),K=r.a.createElement("path",{d:"M18 20V16",stroke:"#3F8AE0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),Y=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,H,Z,K)},Q=r.a.forwardRef((function(e,t){return r.a.createElement(Y,q({svgRef:t},e))}));a.p;var X=function(e){for(var t=e.indexOf(";base64,")+";base64,".length,a=e.substring(t),n=window.atob(a),r=n.length,o=new Uint8Array(new ArrayBuffer(r)),c=0;c<r;c++)o[c]=n.charCodeAt(c);return o},$=a(278),ee=function(e){return r.a.createElement($.a,{className:e.className,color:"#3858ad",size:60,speed:116,thickness:180})},te=(a(259),function(e){return r.a.createElement("div",{className:"LoadingSpinnerBlur ".concat(e.className)},r.a.createElement(ee,{className:"LoadingSpinnerBlur__Spinner",color:"#3858ad",size:60,speed:116,thickness:180}))}),ae=(a(260),function(e){var t=e.id,a=e.audioSrc,o=e.waves,c=e.go,l=e.setCurrentSettings,i=Object(n.useRef)(),u=(Object(n.useRef)(),Object(n.useState)(0)),d=Object(s.a)(u,2),p=d[0],f=d[1],g=Object(n.useState)(!1),E=Object(s.a)(g,2),y=E[0],v=E[1],x=Object(n.useState)(),w=Object(s.a)(x,2),_=(w[0],w[1],Object(n.useState)([20,60])),O=Object(s.a)(_,2),j=O[0],N=O[1],L=Object(n.useState)(!1),T=Object(s.a)(L,2),R=T[0],D=T[1],z=function(e){console.log(i.current.currentTime||0===i.current.currentTime),(i.current.currentTime||0===i.current.currentTime)&&f(e.target.currentTime/i.current.duration*100)};z=function(e,t){var a,n,r=!1;return function o(){if(r)return a=arguments,void(n=this);e.apply(this,arguments),r=!0,setTimeout((function(){r=!1,a&&(o.apply(n,a),a=n=null)}),t)}}(z,1e3),Object(n.useEffect)((function(){i.current.addEventListener("timeupdate",z)}));var B=function(){var e=Object(b.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(!0),n=X(i.current.src),r=new Blob([n],{type:"audio/mp3"}),k(r,"audio.mp3",i.current.duration*j[0]/100,i.current.duration*j[1]/100,l).then((function(){return D(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(m.k,{id:t},r.a.createElement(m.l,{left:r.a.createElement(m.m,{onClick:c,"data-to":"new-podcast"})},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),R&&r.a.createElement(te,null),r.a.createElement("audio",{ref:i,id:"audio",src:a},"Your browser does not support the audio element."),r.a.createElement("div",{style:{borderRadius:"10px",border:"0.5px solid rgba(0, 0, 0, 0.12)",margin:"0 12px",position:"relative"}},r.a.createElement(C.a,{className:"double-slider",range:{min:0,max:100},start:j,connect:!0,onSlide:function(e,t,a,n,r){N(a)}}),r.a.createElement("input",{className:"slider_play",type:"range",style:{position:"absolute",top:-70,left:0,zIndex:100},step:"0.1",value:p,onChange:function(e){(i.current.currentTime||0===i.current.currentTime)&&(i.current.currentTime=i.current.duration*e.target.value/100,f(e.target.value))}}),r.a.createElement(m.f,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:96,backgroundColor:"#F2F3F5",position:"relative",borderRadius:"10px 10px 0 0"}},o.map((function(e){return r.a.createElement("div",{style:{height:e<.5?40*e*.5:40*e,width:2,borderRadius:"2px",backgroundColor:"#3F8AE0"}})}))),r.a.createElement("div",{className:"toolbar"},r.a.createElement(m.a,{className:"toolbar__button",onClick:function(){y?i.current.pause():i.current.play(),v(!y)}},y?r.a.createElement(P.a,null):r.a.createElement(S.a,null)),r.a.createElement(m.a,{className:"toolbar__button",onClick:B,mode:"secondary"},r.a.createElement(V,null)),r.a.createElement(m.a,{className:"toolbar__button",mode:"secondary"},r.a.createElement(A.a,null)),r.a.createElement(m.a,{className:"toolbar__button",mode:"secondary",onClick:function(e){v(!1),c(e)},"data-to":"add-music"},r.a.createElement(F.a,{width:24,height:24})),r.a.createElement(m.a,{className:"toolbar__button",mode:"secondary"},r.a.createElement(Q,{style:{transform:"rotate(270deg)"}})),r.a.createElement(m.a,{className:"toolbar__button",mode:"secondary"},r.a.createElement(Q,null)))))}),ne=(a(261),function(e){var t=e.id;e.go;return r.a.createElement(m.k,{id:t,centered:!0},r.a.createElement(m.l,null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("input",{className:"slider_play",type:"range"}))}),re=(a(262),function(e){var t=e.id;e.go;return r.a.createElement(m.k,{id:t,centered:!0},r.a.createElement(m.l,null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("img",{style:{position:"absolute",width:"100%"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"}),r.a.createElement(C.a,{className:"double-slider",range:{min:0,max:100},start:[20,80],connect:!0}))}),oe=(a(263),a(67)),ce=a.n(oe),le=function(e){var t=e.id,a=e.go,o=Object(n.useState)(""),c=Object(s.a)(o,2),l=c[0],i=c[1];return r.a.createElement(m.k,{id:t},r.a.createElement(m.l,{separator:!1,left:r.a.createElement(m.m,{onClick:a,"data-to":"edit-audio"})},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0443\u0437\u044b\u043a\u0443"),r.a.createElement(m.o,{value:l,onChange:function(e){i(e.target.value)},after:null}),r.a.createElement(m.d,{asideContent:r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{marginRight:"16px",color:"#818C99",fontSize:"16px"}},"3:53"),r.a.createElement(ce.a,{style:{color:"#3F8AE0"}})),className:"AddMusic__cell",description:"\u0412\u0435\u0440\u043a\u0430 \u0421\u0435\u0440\u0434\u044e\u0447\u043a\u0430",before:r.a.createElement("img",{style:{height:"48px",width:"48px",borderRadius:"4px"},src:"https://avatars.yandex.net/get-music-content/49707/fb3db1be.a.1012220-1/200x200"})},"\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e"),r.a.createElement(m.d,{asideContent:r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{marginRight:"16px",color:"#818C99",fontSize:"16px"}},"3:05"),r.a.createElement(ce.a,{style:{color:"#3F8AE0"}})),className:"AddMusic__cell2",description:"\u042e\u0440\u0438\u0439 \u041d\u0438\u043a\u0443\u043b\u0438\u043d",before:r.a.createElement("img",{style:{height:"48px",width:"48px",borderRadius:"4px"},src:"https://drinking-songs.ru/wp-content/uploads/2017/09/tekst-pesni-pro-zajcev.jpg"})},"\u041f\u0435\u0441\u043d\u044f \u043f\u0440\u043e \u0437\u0430\u0439\u0446\u0435\u0432"))},ie=(a(264),function(e){var t=e.id,a=e.go,n=e.currentSettings;return r.a.createElement(m.k,{id:t,className:"FinalPreview",style:{display:"flex"}},r.a.createElement(m.l,{left:r.a.createElement(m.m,{onClick:a,"data-to":"new-podcast"})},"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0434\u043a\u0430\u0441\u0442"),r.a.createElement(m.f,{style:{display:"flex",flexDirection:"column",flexGrow:"1",padding:0}},r.a.createElement(m.f,{className:"FinalPreview__imageOverlay"},r.a.createElement("img",{className:"NewPodcast__image",src:n.imgSrc,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430"}),r.a.createElement(m.f,{style:{padding:0,height:"100%",display:"flex",flexDirection:"column"}},r.a.createElement(m.i,{style:{fontSize:"17px",marginTop:"6px",padding:0,marginBottom:"6px"},weight:"regular"},n.podcastName),r.a.createElement(m.b,{style:{fontSize:"12px",marginBottom:"6px",padding:0,color:"#4986CC",fontWeight:"medium"},weight:"regular"},"\u041f\u0430\u0440\u0430Dogs"),r.a.createElement(m.b,{style:{fontSize:"12px",color:"#818C99",padding:0},weight:"regular"},"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: ",n.audioDurationString))),r.a.createElement(m.p,{style:{marginTop:"12px"}}),r.a.createElement(m.f,null,r.a.createElement(m.i,{weight:"medium",style:{fontSize:"17px"}},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement(m.q,{style:{marginTop:"14px"}},n.podcastDescription)),r.a.createElement(m.p,{style:{marginTop:"6px"}}),r.a.createElement(m.f,null,r.a.createElement(m.i,{weight:"medium",style:{fontSize:"17px",paddingBottom:"9px"}},"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435"),n.timeCodes.map((function(e){return r.a.createElement(m.d,{className:"Preview__timecodeCell",before:r.a.createElement(m.f,{style:{padding:0}},e.time)}," \u2014 ",e.topic)}))),r.a.createElement(m.f,{style:{flexGrow:1}}),r.a.createElement(m.f,null,r.a.createElement(m.a,{size:"xl",mode:"primary",onClick:a,"data-to":"final"},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u043a\u0430\u0441\u0442"))))}),se=function(){var e=Object(n.useState)("home"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({audioName:"\u041c\u0438\u0445\u0430\u0438\u043b \u041a\u0440\u0443\u0433.mp3",audioDurationString:"59:41"}),l=Object(s.a)(c,2),i=l[0],u=l[1],m=function(e){o(e.currentTarget.dataset.to)};return r.a.createElement(d.a,{activePanel:a},r.a.createElement(g,{id:"home",go:m}),r.a.createElement(O,{id:"new-podcast",go:m,currentSettings:i,setCurrentSettings:u}),r.a.createElement(ae,{id:"edit-audio",audioSrc:i.audio,waves:i.waves,setCurrentSettings:u,go:m}),r.a.createElement(ne,{id:"slider-test",go:m}),r.a.createElement(re,{id:"double-slider-test",go:m}),r.a.createElement(le,{id:"add-music",go:m}),r.a.createElement(ie,{id:"final-preview",go:m}))};i.a.send("VKWebAppInit"),c.a.render(r.a.createElement(se,null),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.d7e10949.chunk.js.map