(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],[,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2-XiO",BreadTop:"BurgerIngredient_BreadTop__VkjlR",Seeds1:"BurgerIngredient_Seeds1__1_AAn",Seeds2:"BurgerIngredient_Seeds2__1K5-0",Meat:"BurgerIngredient_Meat__2Dxpd",Cheese:"BurgerIngredient_Cheese__1-DV4",Salad:"BurgerIngredient_Salad__185nL",Bacon:"BurgerIngredient_Bacon__1nzC0"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1Nijh",Label:"BuildControl_Label__Yrhy4",Less:"BuildControl_Less__2qXmV",More:"BuildControl_More__1lL0B"}},,,,,,,function(e,t,n){e.exports={content:"Layout_content__16F30"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__bOiV1",active:"NavigationItem_active__1zVuH"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__31_va",OrderButton:"BuildControls_OrderButton__2wKqG",enable:"BuildControls_enable__JUJE8"}},function(e,t,n){e.exports={Button:"Button_Button__1noVg",Success:"Button_Success__34Mgu",Danger:"Button_Danger__GgL-r"}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__iITQH"}},function(e,t,n){e.exports=n.p+"static/media/burger-builder-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__7OiTY"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3KPuF"}},function(e,t,n){e.exports={Burger:"Burger_Burger__15Ly_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3rJvj"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__PhrYi"}},,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),l=n.n(o),i=(n(28),n(3)),c=n(4),s=n(6),u=n(5),d=n(7),m=n(9),g=n.n(m),p=function(e){return e.children},h=n(15),b=n.n(h),f=n(16),_=n.n(f),v=n(17),E=n.n(v),B=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:_.a,alt:"logo"}))},C=n(18),k=n.n(C),N=n(10),y=n.n(N),w=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},O=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(w,{link:"/",active:!0},"Burger Builder"),r.a.createElement(w,{link:"/"},"Checkout"))},I=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement("div",null,"MENU"),r.a.createElement(B,null),r.a.createElement("nav",null,r.a.createElement(O,null)))},j=function(e){return console.log(g.a),r.a.createElement(p,null,r.a.createElement(I,null),r.a.createElement("main",{className:g.a.content},r.a.createElement("div",null,e.children)))},S=n(8),L=n(22),x=n(19),T=n.n(x),M=n(1),H=n.n(M),P=function(e){var t=null;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:H.a.BreadTop},r.a.createElement("div",{className:H.a.Seeds1}),r.a.createElement("div",{className:H.a.Seeds2}));break;case"bread-bottom":t=r.a.createElement("div",{className:H.a.BreadBottom});break;case"meat":t=r.a.createElement("div",{className:H.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:H.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:H.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:H.a.Bacon});break;default:t=null}return t},A=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(L.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(P,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return console.log(t),0===t.length&&(t=r.a.createElement("p",null,"Please start to add ingredients")),r.a.createElement("div",{className:T.a.Burger},r.a.createElement(P,{type:"bread-top"}),t,r.a.createElement(P,{type:"bread-bottom"}))},Y=n(2),D=n.n(Y),J=function(e){return r.a.createElement("div",{className:D.a.BuildControl},r.a.createElement("div",{className:D.a.Label},e.label),r.a.createElement("button",{className:D.a.Less,onClick:e.removed,disabled:e.disabled},"Less",e.disabled),r.a.createElement("button",{className:D.a.More,onClick:e.added},"More"))},R=n(11),V=n.n(R),W=function(e){return r.a.createElement("div",{className:V.a.BuildControls},r.a.createElement("p",null,"Current price:",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(J,{label:t.label,key:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:V.a.OrderButton,disabled:!e.purschasable,onClick:e.ordered},"ORDER NOW"))},F=n(20),U=n.n(F),K=n(21),q=n.n(K),z=function(e){return e.show?r.a.createElement("div",{className:q.a.Backdrop,onClick:e.clicked}):null},G=function(e){return r.a.createElement(p,null,r.a.createElement(z,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:U.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?1:0}},e.children))},Q=n(12),X=n.n(Q),$=function(e){return r.a.createElement("button",{className:[X.a.Button,X.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},Z=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.ingredients[t])}));return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Orrder"),r.a.createElement("p",null,"A delicious burger with following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout ? "),r.a.createElement($,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement($,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purschasable:!1,purschasing:!1},n.purschaseHandler=function(){n.setState({purschasing:!0})},n.purchaseCancelHandle=function(){console.log("cancel is called"),n.setState({purschasing:!1})},n.purchaseContinueHandle=function(){alert("You can continue")},n.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);n.setState({purschasable:t>0})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(S.a)({},n.state.ingredients);a[e]=t;var r=ee[e]+n.state.totalPrice;n.setState({totalPrice:r,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e]-1,a=Object(S.a)({},n.state.ingredients);a[e]=t;var r=ee[e],o=n.state.totalPrice-r;n.setState({totalPrice:o,ingredients:a}),n.updatePurchaseState(a)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(S.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return console.log("disabledInfo"+JSON.stringify(e)),r.a.createElement(p,null,r.a.createElement(G,{show:this.state.purschasing,modalClosed:this.purchaseCancelHandle},r.a.createElement(Z,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandle,purchaseContinued:this.purchaseContinueHandle,price:this.state.totalPrice})),r.a.createElement(A,{ingredients:this.state.ingredients}),r.a.createElement(W,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purschasable:this.state.purschasable,price:this.state.totalPrice,ordered:this.purschaseHandler}))}}]),t}(a.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null,r.a.createElement(te,null)))}}]),t}(a.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(ne,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Burger-Builder-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Burger-Builder-App","/service-worker.js");ae?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):re(e)}))}}()}],[[23,1,2]]]);
//# sourceMappingURL=main.99419ee6.chunk.js.map