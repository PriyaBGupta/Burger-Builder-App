(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],[,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2-XiO",BreadTop:"BurgerIngredient_BreadTop__VkjlR",Seeds1:"BurgerIngredient_Seeds1__1_AAn",Seeds2:"BurgerIngredient_Seeds2__1K5-0",Meat:"BurgerIngredient_Meat__2Dxpd",Cheese:"BurgerIngredient_Cheese__1-DV4",Salad:"BurgerIngredient_Salad__185nL",Bacon:"BurgerIngredient_Bacon__1nzC0"}},,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2B2jH",Open:"SideDrawer_Open__qQCqr",Close:"SideDrawer_Close__BK1lw",Logo:"SideDrawer_Logo__-IgX-"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__1Nijh",Label:"BuildControl_Label__Yrhy4",Less:"BuildControl_Less__2qXmV",More:"BuildControl_More__1lL0B"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__iITQH",Logo:"Toolbar_Logo__3dVnE",DesktopOnly:"Toolbar_DesktopOnly__19V42"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__bOiV1",active:"NavigationItem_active__1zVuH"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__31_va",OrderButton:"BuildControls_OrderButton__2wKqG",enable:"BuildControls_enable__JUJE8"}},function(e,t,a){e.exports={Button:"Button_Button__1noVg",Success:"Button_Success__34Mgu",Danger:"Button_Danger__GgL-r"}},,,,,,,,,,,function(e,t,a){e.exports={content:"Layout_content__385SG"}},function(e,t,a){e.exports=a.p+"static/media/burger-builder-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__7OiTY"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3KPuF"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1vGzz"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__PhrYi"}},function(e,t,a){e.exports={Burger:"Burger_Burger__15Ly_"}},function(e,t,a){e.exports={Modal:"Modal_Modal__3rJvj"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__XMTI-",load1:"Spinner_load1__106Sr"}},,function(e,t,a){e.exports=a(59)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),l=(a(41),a(3)),c=a(4),s=a(6),d=a(5),u=a(7),m=a(25),p=a.n(m),g=function(e){return e.children},h=a(11),_=a.n(h),f=a(26),b=a.n(f),v=a(27),E=a.n(v),w=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:b.a,alt:"logo"}))},B=a(28),C=a.n(B),k=a(12),y=a.n(k),N=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},S=function(){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(N,{link:"/",active:!0},"Burger Builder"),r.a.createElement(N,{link:"/"},"Checkout"))},O=a(29),j=a.n(O),D=function(e){return r.a.createElement("div",{onClick:e.clicked,className:j.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},L=function(e){return r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement(w,null),r.a.createElement("nav",{className:_.a.DesktopOnly},r.a.createElement(S,null)))},T=a(8),I=a.n(T),x=a(30),H=a.n(x),M=function(e){return e.show?r.a.createElement("div",{className:H.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.open&&(t=[I.a.SideDrawer,I.a.Open]),r.a.createElement(g,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(w,null)),r.a.createElement("nav",null,r.a.createElement(S,null))))},A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(L,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.content},r.a.createElement("div",null,this.props.children)))}}]),t}(n.Component),V=a(10),R=a(35),W=a(31),Y=a.n(W),z=a(2),G=a.n(z),J=function(e){var t=null;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:G.a.BreadTop},r.a.createElement("div",{className:G.a.Seeds1}),r.a.createElement("div",{className:G.a.Seeds2}));break;case"bread-bottom":t=r.a.createElement("div",{className:G.a.BreadBottom});break;case"meat":t=r.a.createElement("div",{className:G.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:G.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:G.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:G.a.Bacon});break;default:t=null}return t},U=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(J,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return console.log(t),0===t.length&&(t=r.a.createElement("p",null,"Please start to add ingredients")),r.a.createElement("div",{className:Y.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},q=a(9),K=a.n(q),X=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled},"Less",e.disabled),r.a.createElement("button",{className:K.a.More,onClick:e.added},"More"))},F=a(13),Q=a.n(F),$=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",null,"Current price:",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(X,{label:t.label,key:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purschasable,onClick:e.ordered},"ORDER NOW"))},Z=a(32),ee=a.n(Z),te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?1:0}},this.props.children))}}]),t}(n.Component),ae=a(14),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.ingredients[t])}));return r.a.createElement(g,null,r.a.createElement("h3",null,"Your Orrder"),r.a.createElement("p",null,"A delicious burger with following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout ? "),r.a.createElement(re,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ie=a(33),le=a.n(ie).a.create({baseURL:"https://react-my-burger-d6f2d.firebaseio.com/"}),ce=a(34),se=a.n(ce),de=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},ue={salad:.5,cheese:.4,meat:1.3,bacon:.7},me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purschasable:!1,purchasing:!1,loading:!1},a.purschaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandle=function(){a.setState({purchasing:!1})},a.purchaseContinueHandle=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Priya Gupta",address:{street:"TestStreet 1",zipCode:"41351",country:"India"},email:"test@test.com",deliveryMethod:"fastest"}};le.post("/orders.json",e).then((function(e){console.log("loading state",a.state.loading),a.setState({loading:!1,purchasing:!1})})).catch((function(e){a.setState({loading:!1,purchasing:!1})}))},a.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);a.setState({purschasable:t>0})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(V.a)({},a.state.ingredients);n[e]=t;var r=ue[e]+a.state.totalPrice;a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=Object(V.a)({},a.state.ingredients);n[e]=t;var r=ue[e],o=a.state.totalPrice-r;a.setState({totalPrice:o,ingredients:n}),a.updatePurchaseState(n)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(V.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(oe,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandle,purchaseContinued:this.purchaseContinueHandle,price:this.state.totalPrice});return this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement(g,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandle},a),r.a.createElement(U,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purschasable:this.state.purschasable,price:this.state.totalPrice,ordered:this.purschaseHandler}))}}]),t}(n.Component),pe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null,r.a.createElement(me,null)))}}]),t}(n.Component),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(pe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Burger-Builder-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Burger-Builder-App","/service-worker.js");ge?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):he(e)}))}}()}],[[36,1,2]]]);
//# sourceMappingURL=main.b483cc38.chunk.js.map