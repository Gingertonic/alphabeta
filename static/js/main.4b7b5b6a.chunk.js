(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),o=n(14),c=n.n(o),l=n(4),s=n(10),u=n(18),m=(n(28),n(29),n(9)),h={ELEMENT:"element"},d=n(6),p=function(e){var t=e.path,n=e.title,a={cursor:"pointer",width:e.height};return r.a.createElement("img",{id:n,src:t,style:Object(d.a)({},a),alt:n})};function f(e,t,n){var a="translate3d(".concat(e,"px, ").concat(t,"px, 0)");return{position:"absolute",transform:a,WebkitTransform:a,opacity:n?0:1,height:n?0:""}}var g=function(e){var t=e.id,n=e.path,o=e.title,c=e.left,u=e.top,m=e.height,d=Object(l.c)({item:{type:h.ELEMENT,id:t,left:c,top:u,title:o,path:n,height:m},collect:function(e){return{isDragging:e.isDragging()}}}),g=Object(a.a)(d,3),v=g[0].isDragging,b=g[1],E=g[2];return Object(i.useEffect)(function(){E(Object(s.a)(),{captureDraggingState:!0})},[]),r.a.createElement("div",{className:"interaction",ref:b,style:f(c,u,v)},r.a.createElement(p,{path:n,title:o,height:m}))},v=function(){return r.a.createElement("div",{id:"ori-warning"},r.a.createElement("div",{className:"orientation",id:"orientation-left"},r.a.createElement("div",null,"Please"),r.a.createElement("br",null),r.a.createElement("div",null,"your")),r.a.createElement("div",{id:"spacer"}),r.a.createElement("div",{className:"orientation",id:"orientation-right"},r.a.createElement("div",null,"rotate"),r.a.createElement("br",null),r.a.createElement("div",null,"screen!")))},b=n(17),E=n.n(b),w=(n(30),function(){var e=Object(i.useState)({name:"",status:"",submitted:!1,formEmailSent:!1}),t=Object(a.a)(e,2),n=t[0],o=t[1],c=function(e){o(Object(d.a)({},n,{status:e.target.value}))};return r.a.createElement("div",{id:"rsvp",className:"interaction"},r.a.createElement("form",{className:"rsvp-form",onSubmit:function(e){return e.preventDefault(),n.formEmailSent?(alert("You already let us know that you ".concat(n.status," come, ").concat(n.name,"! If you wish to update your reply, please contact us directly.")),null):""===n.status||""===n.name?(alert("Please let us know your name and if you can come!"),null):(alert("Thank you for letting us know that you ".concat(n.status," come to our wedding, ").concat(n.name,"! If your plans change, please send an email or message direct to either Beth or Aleks!")),t="template_shuPpkdS",a=n.name,i=n.status,window.emailjs.send("mailgun",t,{senderName:a,status:i},"user_cJlfdrk255GDIX1LWupy1").then(function(e){o(Object(d.a)({},n,{formEmailSent:!0}))}).catch(function(e){console.error("Failed to send feedback. Error: ",e),alert("Oops, that didn't come through! Please try again!")}),void o(Object(d.a)({},n,{submitted:!0})));var t,a,i}},r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"checkbox"},"I'll be there!",r.a.createElement("input",{type:"checkbox",value:"can",checked:"can"===n.status,onChange:c,className:"form-check-input"}),r.a.createElement("span",null))),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,"I hope to be there...",r.a.createElement("input",{type:"checkbox",value:"may",checked:"may"===n.status,onChange:c,className:"form-check-input"}))),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,"I can't make it.",r.a.createElement("input",{type:"checkbox",value:"cannot",checked:"cannot"===n.status,onChange:c,className:"form-check-input"}))),r.a.createElement("br",null),r.a.createElement("div",{id:"submit-container"},r.a.createElement("div",{className:"name-input"},r.a.createElement("input",{type:"text",id:"name-input",value:n.name,placeholder:"Your name(s)",onChange:function(e){o(Object(d.a)({},n,{name:e.target.value}))},className:"form-check-input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:n.formEmailSent?"saveTheDateClicked":"saveTheDate",type:"submit"},r.a.createElement("img",{className:n.formEmailSent?"saveTheDateClicked":"saveTheDate",src:"images/stamp.png",alt:"save the date"}))))))});var y={position:"relative"},k=function(){var e=window.innerHeight,t=window.innerWidth,n=Object(i.useState)({bookmark:{top:-.04*e,left:.45*t,path:"images/bookmark.png",title:"bookmark",height:"12vw"},player1:{top:.12*e,left:.47*t,path:"images/A.png",title:"A",height:"8vw"},player2:{top:.33*e,left:.47*t,path:"images/B.png",title:"B",height:"8vw"},city:{top:.35*e,left:.225*t,path:"images/bigben.png",title:"London",height:"6vw"},date:{top:.12*e,left:.23*t,path:"images/date-gold.png",title:"30-4-20",height:"20vw"},ceremony:{top:.36*e,left:.3*t,path:"images/cirilica-backed.png",title:"\u0421\u0440\u043f\u0441\u043a\u0430 \u043f\u0440\u0430\u0432\u043e\u0441\u043b\u0430\u0432\u043d\u0430 \u0446\u0440\u043a\u0432\u0430",height:"15vw"},reception:{top:.56*e,left:.29*t,path:"images/newkew.png",title:"Kew Gardens",height:"15vw"},polaroid1:{top:.67*e,left:.64*t,path:"images/osterley-polaroid.png",title:"Osterley, London",height:"15vw"},polaroid2:{top:.64*e,left:.45*t,path:"images/plitvice-polaroid.png",title:"Plitvice Lakes, Croatia",height:"15vw"},polaroid3:{top:.67*e,left:.69*t,path:"images/batur-polaroid.png",title:"Mt Batur, Bali",height:"15vw"},ringOne:{top:.07*e,left:.68*t,path:"images/ivyOne.png",title:"A Ring",height:"12vw"},ringTwo:{top:.13*e,left:.65*t,path:"images/ivyTwo.png",title:"Another Ring",height:"12vw"}}),o=Object(a.a)(n,2),c=o[0],s=o[1],u=Object(i.useCallback)(function(e,t,n){s(E()(c,Object(m.a)({},e,{$merge:{left:t,top:n}})))},[c]),d=Object(l.e)({accept:h.ELEMENT,drop:function(e,t){var n=t.getDifferenceFromInitialOffset(),a=Math.round(e.left+n.x),i=Math.round(e.top+n.y);u(e.id,a,i)}}),p=Object(a.a)(d,2)[1];return r.a.createElement("div",{id:"craftboard",ref:p,style:y},Object.keys(c).map(function(e){return function(e,t){return r.a.createElement(g,Object.assign({key:t,id:t},e))}(c[e],e)}),r.a.createElement(w,null))},O=Object(i.memo)(function(e){var t=e.path,n=e.title,o=e.height,c=Object(i.useState)(!1),l=Object(a.a)(c,2),s=l[0],u=l[1];Object(i.useEffect)(function(){var e=setInterval(function(){return u(!s)},500);return function(){return clearInterval(e)}},[s]);return r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(p,{path:t,title:n,height:o}))}),j={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function N(e,t){if(!e||!t)return{display:"none"};var n=t.x,a=t.y,i="translate(".concat(n,"px, ").concat(a,"px)");return{transform:i,WebkitTransform:i}}var T=function(e){var t=Object(l.d)(function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}}),n=t.itemType,a=t.isDragging,i=t.item,o=t.initialOffset,c=t.currentOffset;return a?r.a.createElement("div",{id:"drag-layer",style:j},r.a.createElement("div",{style:N(o,c)},function(){switch(n){case h.ELEMENT:return r.a.createElement(O,{path:i.path,title:i.title,height:i.height});default:return null}}())):null},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var D=document.getElementById("root");c.a.render(r.a.createElement(function(){Object(i.useEffect)(function(){alert("We're getting married!\n\nOfficial invites to come in Autumn but we'd love to know if you think you could come. Tick a green box and hit the Save the Date stamp to let us know.\n\nPlease enjoy rearranging the scrapbook too!\n(Best enjoyed on a non-mobile device!)\n\nLove, Beth & Aleksandar")});var e=window.innerHeight>window.innerWidth?r.a.createElement(k,null):r.a.createElement(v,null),t=Object(i.useState)(!0),n=Object(a.a)(t,2),o=n[0],c=n[1];return window.addEventListener("orientationchange",function(){c(!o)}),r.a.createElement("div",{className:"App"},r.a.createElement(l.b,{backend:u.a,options:{enableMouseEvents:!0}},r.a.createElement("header",{className:"App-header"},e,r.a.createElement(T,null))))},null),D),function(e){if("serviceWorker"in navigator){if(new URL("/alpha-beta",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/alpha-beta","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):x(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.4b7b5b6a.chunk.js.map