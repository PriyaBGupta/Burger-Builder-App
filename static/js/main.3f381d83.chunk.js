(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2-XiO",BreadTop:"BurgerIngredient_BreadTop__VkjlR",Seeds1:"BurgerIngredient_Seeds1__1_AAn",Seeds2:"BurgerIngredient_Seeds2__1K5-0",Meat:"BurgerIngredient_Meat__2Dxpd",Cheese:"BurgerIngredient_Cheese__1-DV4",Salad:"BurgerIngredient_Salad__185nL",Bacon:"BurgerIngredient_Bacon__1nzC0"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2B2jH",Open:"SideDrawer_Open__qQCqr",Close:"SideDrawer_Close__BK1lw",Logo:"SideDrawer_Logo__-IgX-"}},function(e,t,n){e.exports={Input:"Input_Input__1f0bM",Label:"Input_Label__NLCjF",InputElement:"Input_InputElement__3T4kC",Invalid:"Input_Invalid__3gmaV"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1Nijh",Label:"BuildControl_Label__Yrhy4",Less:"BuildControl_Less__2qXmV",More:"BuildControl_More__1lL0B"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__iITQH",Logo:"Toolbar_Logo__3dVnE",DesktopOnly:"Toolbar_DesktopOnly__19V42"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__bOiV1",active:"NavigationItem_active__1zVuH"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__31_va",OrderButton:"BuildControls_OrderButton__2wKqG",enable:"BuildControls_enable__JUJE8"}},function(e,t,n){e.exports={Button:"Button_Button__1noVg",Success:"Button_Success__34Mgu",Danger:"Button_Danger__GgL-r"}},,,,,,,,,,,,function(e,t,n){e.exports={content:"Layout_content__385SG"}},function(e,t,n){e.exports=n.p+"static/media/burger-builder-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__7OiTY"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3KPuF"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1vGzz"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__PhrYi"}},function(e,t,n){e.exports={Burger:"Burger_Burger__15Ly_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3rJvj"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__XMTI-",load1:"Spinner_load1__106Sr"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__14JNq"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__2ZQFg",Input:"ContactData_Input__2nfRo"}},function(e,t,n){e.exports={Order:"Order_Order__35RiX"}},,function(e,t,n){e.exports=n(82)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),i=n.n(o),l=(n(59),n(2)),c=n(3),s=n(5),u=n(4),d=n(6),m=n(38),p=n.n(m),h=function(e){return e.children},g=n(21),v=n.n(g),f=n(39),b=n.n(f),_=n(40),E=n.n(_),C=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:b.a,alt:"logo"}))},y=n(41),k=n.n(y),O=n(22),w=n.n(O),j=n(15),S=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement(j.b,{to:e.link,exact:e.exact,activeClassName:w.a.active},e.children))},B=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(S,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(S,{link:"/orders"},"Orders"))},N=n(44),I=n.n(N),x=function(e){return r.a.createElement("div",{onClick:e.clicked,className:I.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:v.a.Toolbar},r.a.createElement(x,{clicked:e.drawerToggleClicked}),r.a.createElement(C,null),r.a.createElement("nav",{className:v.a.DesktopOnly},r.a.createElement(B,null)))},T=n(16),L=n.n(T),H=n(45),P=n.n(H),M=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},A=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(h,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},V=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(A,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.content},r.a.createElement("div",null,this.props.children)))}}]),t}(a.Component),q=n(11),F=n(53),R=n(46),U=n.n(R),W=n(12),Y=n.n(W),z=function(e){var t=null;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"bread-bottom":t=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"meat":t=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:Y.a.Bacon});break;default:t=null}return t},J=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(z,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start to add ingredients")),r.a.createElement("div",{className:U.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},X=n(19),G=n.n(X),K=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled},"Less",e.disabled),r.a.createElement("button",{className:G.a.More,onClick:e.added},"More"))},Q=n(25),Z=n.n(Q),$=function(e){return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current price:",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(K,{label:t.label,key:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purschasable,onClick:e.ordered},"ORDER NOW"))},ee=n(47),te=n.n(ee),ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?1:0}},this.props.children))}}]),t}(a.Component),ae=n(26),re=n.n(ae),oe=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.ingredients[t])}));return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Orrder"),r.a.createElement("p",null,"A delicious burger with following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout ? "),r.a.createElement(oe,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},le=n(48),ce=n.n(le).a.create({baseURL:"https://react-my-burger-d6f2d.firebaseio.com/"}),se=n(49),ue=n.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},me=function(e,t){return function(n){function a(e){var n;return Object(l.a)(this,a),(n=Object(s.a)(this,Object(u.a)(a).call(this,e))).errorConfirmedHandler=function(){n.setState({error:null})},n.reqInterceptor=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n.state={error:null},n}return Object(d.a)(a,n),Object(c.a)(a,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(ne,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},pe={salad:.5,cheese:.4,meat:1.3,bacon:.7},he=me(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purschasable:!1,purchasing:!1,loading:!1,error:!1},n.purschaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandle=function(){n.setState({purchasing:!1})},n.purchaseContinueHandle=function(){var e=[];for(var t in n.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(n.state.ingredients[t]));e.push("price="+n.state.totalPrice);var a=e.join("&");n.props.history.push({pathname:"/checkout",search:"?"+a})},n.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);n.setState({purschasable:t>0})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(q.a)({},n.state.ingredients);a[e]=t;var r=pe[e]+n.state.totalPrice;n.setState({totalPrice:r,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e]-1,a=Object(q.a)({},n.state.ingredients);a[e]=t;var r=pe[e],o=n.state.totalPrice-r;n.setState({totalPrice:o,ingredients:a}),n.updatePurchaseState(a)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;ce.get("/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients cant be loaded"):r.a.createElement(de,null);return this.state.ingredients&&(a=r.a.createElement(h,null,r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purschasable:this.state.purschasable,price:this.state.totalPrice,ordered:this.purschaseHandler})),n=r.a.createElement(ie,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandle,purchaseContinued:this.purchaseContinueHandle,price:this.state.totalPrice})),this.state.loading&&(n=r.a.createElement(de,null)),r.a.createElement(h,null,r.a.createElement(ne,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandle},n),a)}}]),t}(a.Component),ce),ge=n(50),ve=n.n(ge),fe=function(e){return r.a.createElement("div",{className:ve.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"300px",margin:"auto"}},r.a.createElement(J,{ingredients:e.ingredients})),r.a.createElement(oe,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},be=n(51),_e=n.n(be),Ee=n(17),Ce=n.n(Ee),ye=function(e){var t=null,n=[Ce.a.InputElement];switch(e.invalid&&e.shouldValidate&&n.push(Ce.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({},e.elementConfig,{className:n.join(" "),value:e.value,onChange:e.changed}));break;case"textArea":t=r.a.createElement("textarea",Object.assign({},e.elementConfig,{className:n.join(" "),value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({},e.elementConfig,{className:Ce.a.InputElement,value:e.value}))}return r.a.createElement("div",{className:Ce.a.Input},r.a.createElement("label",{className:Ce.a.Label},e.label),t)},ke=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zipcode"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your E-mail"},value:"",validation:{required:!0},valid:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:""}},loading:!1},n.orderHandler=function(e){e.preventDefault(),n.setState({loading:!0});var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ingredients,price:n.props.totalPrice,orderData:t};ce.post("/orders.json",r).then((function(e){n.setState({loading:!1}),n.props.history.push("/")})).catch((function(e){n.setState({loading:!1})}))},n.inputChangedHandler=function(e,t){var a=Object(q.a)({},n.state.orderForm),r=Object(q.a)({},n.state.orderForm[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),console.log(r),a[t]=r,n.setState({orderForm:a})},n.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(ye,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation})})),r.a.createElement(oe,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement("div",{className:_e.a.ContactData},r.a.createElement("h4",null,"Enter your contact data"),a)}}]),t}(a.Component),Oe=n(13),we=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")};var a=new URLSearchParams(n.props.location.search),r={},o=0,i=!0,c=!1,d=void 0;try{for(var m,p=a.entries()[Symbol.iterator]();!(i=(m=p.next()).done);i=!0){var h=m.value;"price"===h[0]?o=h[1]:r[h[0]]=+h[1]}}catch(g){c=!0,d=g}finally{try{i||null==p.return||p.return()}finally{if(c)throw d}}return n.state={ingredients:r,totalPrice:o},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(fe,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(Oe.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(ke,Object.assign({ingredients:e.state.ingredients,totalPrice:e.state.totalPrice},t))}}))}}]),t}(a.Component),je=n(52),Se=n.n(je),Be=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Se.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price ",r.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},Ne=me(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;ce.get("/orders.json").then((function(t){var n=[];for(var a in e.setState({loading:!1}),t.data)n.push(Object(q.a)({},t.data[a],{id:a}));e.setState({orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return this.state.loading,r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(Be,{key:e.id,ingredients:e.ingredients,price:+e.price})})))}}]),t}(a.Component),ce),Ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,null,r.a.createElement(Oe.c,null,r.a.createElement(Oe.a,{path:"/checkout",component:we}),r.a.createElement(Oe.a,{path:"/orders",component:Ne}),r.a.createElement(Oe.a,{path:"/",exact:!0,component:he}))))}}]),t}(a.Component),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Te=r.a.createElement(j.a,null,r.a.createElement(Ie,null));i.a.render(Te,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Burger-Builder-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Burger-Builder-App","/service-worker.js");xe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):De(e)}))}}()}],[[54,1,2]]]);
//# sourceMappingURL=main.3f381d83.chunk.js.map