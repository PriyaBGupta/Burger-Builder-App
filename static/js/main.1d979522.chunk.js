(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],[,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2-XiO",BreadTop:"BurgerIngredient_BreadTop__VkjlR",Seeds1:"BurgerIngredient_Seeds1__1_AAn",Seeds2:"BurgerIngredient_Seeds2__1K5-0",Meat:"BurgerIngredient_Meat__2Dxpd",Cheese:"BurgerIngredient_Cheese__1-DV4",Salad:"BurgerIngredient_Salad__185nL",Bacon:"BurgerIngredient_Bacon__1nzC0"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1Nijh",Label:"BuildControl_Label__Yrhy4",Less:"BuildControl_Less__2qXmV",More:"BuildControl_More__1lL0B"}},,,,,,,function(e,t,n){e.exports={content:"Layout_content__16F30"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__31_va",OrderButton:"BuildControls_OrderButton__2wKqG",enable:"BuildControls_enable__JUJE8"}},function(e,t,n){e.exports={Button:"Button_Button__1noVg",Success:"Button_Success__34Mgu",Danger:"Button_Danger__GgL-r"}},,,function(e,t,n){e.exports={Burger:"Burger_Burger__15Ly_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3rJvj"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__PhrYi"}},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),c=(n(23),n(3)),i=n(4),s=n(6),d=n(5),u=n(7),m=n(9),p=n.n(m),g=function(e){return e.children},h=function(e){return console.log(p.a),r.a.createElement(g,null,r.a.createElement("div",null," ToolBar Sidedrawer Backdrop "),r.a.createElement("main",{className:p.a.content},r.a.createElement("div",null,e.children)))},b=n(8),f=n(17),_=n(14),v=n.n(_),B=n(1),E=n.n(B),C=function(e){var t=null;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:E.a.BreadTop},r.a.createElement("div",{className:E.a.Seeds1}),r.a.createElement("div",{className:E.a.Seeds2}));break;case"bread-bottom":t=r.a.createElement("div",{className:E.a.BreadBottom});break;case"meat":t=r.a.createElement("div",{className:E.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:E.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:E.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:E.a.Bacon});break;default:t=null}return t},k=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(f.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(C,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return console.log(t),0===t.length&&(t=r.a.createElement("p",null,"Please start to add ingredients")),r.a.createElement("div",{className:v.a.Burger},r.a.createElement(C,{type:"bread-top"}),t,r.a.createElement(C,{type:"bread-bottom"}))},y=n(2),w=n.n(y),N=function(e){return r.a.createElement("div",{className:w.a.BuildControl},r.a.createElement("div",{className:w.a.Label},e.label),r.a.createElement("button",{className:w.a.Less,onClick:e.removed,disabled:e.disabled},"Less",e.disabled),r.a.createElement("button",{className:w.a.More,onClick:e.added},"More"))},O=n(10),S=n.n(O),j=function(e){return r.a.createElement("div",{className:S.a.BuildControls},r.a.createElement("p",null,"Current price:",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(N,{label:t.label,key:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:S.a.OrderButton,disabled:!e.purschasable,onClick:e.ordered},"ORDER NOW"))},I=n(15),L=n.n(I),x=n(16),M=n.n(x),A=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},P=function(e){return r.a.createElement(g,null,r.a.createElement(A,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:L.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?1:0}},e.children))},H=n(11),T=n.n(H),D=function(e){return r.a.createElement("button",{className:[T.a.Button,T.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},J=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.ingredients[t])}));return r.a.createElement(g,null,r.a.createElement("h3",null,"Your Orrder"),r.a.createElement("p",null,"A delicious burger with following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout ? "),r.a.createElement(D,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(D,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},R={salad:.5,cheese:.4,meat:1.3,bacon:.7},W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purschasable:!1,purschasing:!1},n.purschaseHandler=function(){n.setState({purschasing:!0})},n.purchaseCancelHandle=function(){console.log("cancel is called"),n.setState({purschasing:!1})},n.purchaseContinueHandle=function(){alert("You can continue")},n.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);n.setState({purschasable:t>0})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(b.a)({},n.state.ingredients);a[e]=t;var r=R[e]+n.state.totalPrice;n.setState({totalPrice:r,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e]-1,a=Object(b.a)({},n.state.ingredients);a[e]=t;var r=R[e],o=n.state.totalPrice-r;n.setState({totalPrice:o,ingredients:a}),n.updatePurchaseState(a)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(b.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return console.log("disabledInfo"+JSON.stringify(e)),r.a.createElement(g,null,r.a.createElement(P,{show:this.state.purschasing,modalClosed:this.purchaseCancelHandle},r.a.createElement(J,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandle,purchaseContinued:this.purchaseContinueHandle,price:this.state.totalPrice})),r.a.createElement(k,{ingredients:this.state.ingredients}),r.a.createElement(j,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purschasable:this.state.purschasable,price:this.state.totalPrice,ordered:this.purschaseHandler}))}}]),t}(a.Component),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null,r.a.createElement(W,null)))}}]),t}(a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Burger-Builder-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Burger-Builder-App","/service-worker.js");V?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):F(e)}))}}()}],[[18,1,2]]]);
//# sourceMappingURL=main.1d979522.chunk.js.map