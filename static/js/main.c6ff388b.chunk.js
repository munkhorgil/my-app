(this.webpackJsonpwoods=this.webpackJsonpwoods||[]).push([[0],{42:function(e,t,n){e.exports=n(88)},48:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(47),n(48),n(9)),i=n.n(l),u=n(11),s=n(7),m=n(33),p=n(37);function d(){var e=Object(m.a)([""]);return d=function(){return e},e}var f=n(34).a.div(d());function h(e){var t=e.loading,n=e.items,a=void 0===n?[]:n;if(t)return r.a.createElement(p.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."));if(0===a.length)return null;return r.a.createElement(f,null,a.map((function(e,t){return r.a.createElement("div",{key:t,className:"content"},r.a.createElement("small",null,new Date(e.createdAt).toDateString()),r.a.createElement("p",null,e.comment),r.a.createElement("cite",null,"~",e.name))})))}var v=n(90),b=n(14),g=n.n(b);function y(e){var t=e.playing,n=e.url,a=e.onType,o=e.onSubmit,c=function(e){return a(e.target.value)},l=function(){return o()};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"I often find myself engaging with people's comments on beautiful songs while listening. Try to listen to your favourite music and read it's comments.")),r.a.createElement("div",{style:{marginBottom:30}},r.a.createElement("a",{href:"https://www.buymeacoffee.com/munkhorgil",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-orange.png",alt:"Buy Me A Coffee",style:{height:40,width:140}})),r.a.createElement("h5",{style:{marginTop:16}},"I'm always open for a chat ",r.a.createElement("a",{href:"mailto: info@latenightvibes.club"},"Email"))),r.a.createElement("div",{style:{marginBottom:20}},r.a.createElement("input",{placeholder:"Enter Youtube URL",type:"text",onChange:c}),r.a.createElement(v.a,{variant:"secondary",onClick:l},"Submit")),r.a.createElement(g.a,{playing:t,url:n,height:0}))}var w=n(38),E=n(39),k=n.n(E),S=function(e,t){return e.likeCount<t.likeCount?1:e.likeCount>t.likeCount?-1:0},O=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,o,c,l,u,s,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:if(n=e.sent,a=n.data,r=(void 0===a?{}:a).items,0!==(o=void 0===r?[]:r).length){e.next=7;break}return e.abrupt("return",[]);case 7:c=[],l=Object(w.a)(o);try{for(l.s();!(u=l.n()).done;)s=u.value,m=s.snippet.topLevelComment.snippet,c.push({createdAt:m.publishedAt,avatar:m.authorProfileImageUrl,name:m.authorDisplayName,comment:m.textOriginal,likeCount:m.likeCount})}catch(i){l.e(i)}finally{l.f()}return e.abrupt("return",c.sort(S));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"GET",url:"https://www.googleapis.com/youtube/v3/commentThreads",params:{key:"AIzaSyAsyThfvOStT7v4WNZSEvKW854N03qr6KM",videoId:t,part:"snippet",textForm:"plainText",maxResults:100}});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=n(41);n(87);function x(e){var t=e.url,n=e.icon,o=Object(a.useState)(!1),c=Object(s.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(.5),m=Object(s.a)(u,2),p=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("div",{className:l?"button-active":"button",onClick:function(){return i(!l)}},r.a.createElement("div",{className:"icon-btn"},r.a.createElement("img",{alt:"alt",src:"/my-app"+"".concat(n),className:l?"icon-active":"icon"})),r.a.createElement(g.a,{url:t,playing:l,loop:!0,volume:p,height:0,width:0})),r.a.createElement("div",{className:"slider"},r.a.createElement(C.a,{min:0,max:1,step:.1,defaultValue:p,onChange:function(e){return d(e)},handleStyle:N.handleStyle,trackStyle:N.trackStyle,railStyle:N.railStyle})))}var N={handleStyle:{backgroundColor:"gray",borderColor:"white"},trackStyle:{backgroundColor:"#9B5A4F"},railStyle:{backgroundColor:"#D0CDCD"}},z=[{icon:"/rain.png",url:"https://www.youtube.com/watch?v=74b3Zb18UDM"},{icon:"/bird.png",url:"https://www.youtube.com/watch?v=Qm846KdZN_c"},{icon:"/bonfire.png",url:"https://www.youtube.com/watch?v=NUKKzdVy0EI"},{icon:"/ocean.png",url:"https://www.youtube.com/watch?v=nPit8KqqFwI"}];function T(e){return r.a.createElement("div",{className:"buttonWrapper"},z.map((function(e,t){return r.a.createElement(x,{key:t,icon:e.icon,url:e.url})})))}var I=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),m=l[0],p=l[1],d=Object(a.useState)(!1),f=Object(s.a)(d,2),v=f[0],b=f[1],g=Object(a.useState)(!1),w=Object(s.a)(g,2),E=w[0],k=w[1],S=Object(a.useState)(""),j=Object(s.a)(S,2),C=j[0],x=j[1];return r.a.useEffect((function(){C&&function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,O(C);case 3:t=e.sent,o(t),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C]),r.a.createElement("section",{className:"wrapper"},r.a.createElement("h1",null,"Late Night Vibes"),r.a.createElement(y,{url:m,playing:v,onType:function(e){return p(e)},onSubmit:function(){if(0===m.length||(e=m,!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)))return alert("Please enter a valid URL");var e,t=m.split("v=")[1];x(t),b(!0)}}),r.a.createElement(T,null),r.a.createElement("div",{className:"tabWrapper"},r.a.createElement(h,{loading:E,items:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c6ff388b.chunk.js.map