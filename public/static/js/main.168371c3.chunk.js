(this["webpackJsonpreact-laravel-boilerplate"]=this["webpackJsonpreact-laravel-boilerplate"]||[]).push([[0],{35:function(e,t,a){e.exports=a(68)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(27),o=a.n(n),s=a(7),l=(a(40),a(15)),c=a(28),p=a(29),u=a(34),h=a(33),d=a(11),m=(a(41),a(30)),b=a.n(m),g=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})),w=function(){var e=Object(r.useContext)(N),t=b()({"nav-bar-wrapper ":!0,"drawer-opened":e.isDrawerOpened,"drawer-closed":!e.isDrawerOpened});return i.a.createElement("div",{className:t},i.a.createElement("nav",{className:"nav-bar"},i.a.createElement(s.b,{to:"/"},"Reactshop"),i.a.createElement("button",{onClick:function(){return e.toggleDrawer()},className:"cart-button"},g)))},v=(a(47),function(e){var t="Die B\xfccher-Liste l\xe4dt gerade...";return e.alternativeText&&(t=e.alternativeText),e.loading&&i.a.createElement("div",{className:"loading-wrapper"},i.a.createElement("p",null,t))}),f=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}))},y=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))},E=(a(48),function(e){var t=0;return i.a.createElement("div",{className:"cart-wrapper"},i.a.createElement("h2",{className:"cart-headline"},"Warenkorb"),i.a.createElement("hr",null),i.a.createElement("ul",{className:"cart-list"},e.cart&&!e.cart.length&&"Aktuell gibt es keine B\xfccher im Warenkorb.",e.cart.map((function(a,r){return t+=a.price,i.a.createElement("li",{key:a.isbn+r,className:"cart-list-item"},i.a.createElement("p",null,a.title," - ",i.a.createElement("strong",null,a.price," \u20ac")),i.a.createElement("button",{onClick:function(){return e.removeItemFromCart(r)}},i.a.createElement(y,null)))}))),i.a.createElement("div",{className:"cart-footer"},i.a.createElement("span",null,"Preis:"),i.a.createElement("span",null,t.toFixed(2)," \u20ac")))}),k=a(1),S=(a(49),function(){return i.a.createElement(N.Consumer,null,(function(e){return e.books&&e.books.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Bestseller B\xfccher 2020"),i.a.createElement("ul",{className:"book-overview-list"},e.books.map((function(t,a){return i.a.createElement("li",{className:"book-overview-list-item",key:t.isbn+a},i.a.createElement("p",null,t.title),i.a.createElement(s.b,{to:"/details/"+t.isbn},i.a.createElement("img",{src:t.image,alt:t.title})),i.a.createElement("button",{className:"cart-button",onClick:function(){e.addItemToCart(t),e.isDrawerOpened||e.toggleDrawer()}},i.a.createElement(f,null)))})))):"Aktuell gibt es keine B\xfccher"}))}),x=function(){return"Error 404"},J=a(16),j=[{isbn:"9781593275846",title:"Eloquent JavaScript, Second Edition",subtitle:"A Modern Introduction to Programming",author:"Marijn Haverbeke",published:"2014-12-14T00:00:00.000Z",publisher:"No Starch Press",pages:472,description:"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:55,website:"http://eloquentjavascript.net/"},{isbn:"9781449331818",title:"Learning JavaScript Design Patterns",subtitle:"A JavaScript and jQuery Developer's Guide",author:"Addy Osmani",published:"2012-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:30,website:"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"},{isbn:"9781449365035",title:"Speaking JavaScript",subtitle:"An In-Depth Guide for Programmers",author:"Axel Rauschmayer",published:"2014-02-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:460,description:"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:20,website:"http://speakingjs.com/"},{isbn:"9781491950296",title:"Programming JavaScript Applications",subtitle:"Robust Web Architecture with Node, HTML5, and Modern JS Libraries",author:"Eric Elliott",published:"2014-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:25,website:"http://chimera.labs.oreilly.com/books/1234000000262/index.html"},{isbn:"9781593275846",title:"Eloquent JavaScript, Second Edition",subtitle:"A Modern Introduction to Programming",author:"Marijn Haverbeke",published:"2014-12-14T00:00:00.000Z",publisher:"No Starch Press",pages:472,description:"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:55,website:"http://eloquentjavascript.net/"},{isbn:"9781449331818",title:"Learning JavaScript Design Patterns",subtitle:"A JavaScript and jQuery Developer's Guide",author:"Addy Osmani",published:"2012-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:30,website:"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"},{isbn:"9781449365035",title:"Speaking JavaScript",subtitle:"An In-Depth Guide for Programmers",author:"Axel Rauschmayer",published:"2014-02-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:460,description:"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:20,website:"http://speakingjs.com/"},{isbn:"9781491950296",title:"Programming JavaScript Applications",subtitle:"Robust Web Architecture with Node, HTML5, and Modern JS Libraries",author:"Eric Elliott",published:"2014-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:25,website:"http://chimera.labs.oreilly.com/books/1234000000262/index.html"},{isbn:"9781593275846",title:"Eloquent JavaScript, Second Edition",subtitle:"A Modern Introduction to Programming",author:"Marijn Haverbeke",published:"2014-12-14T00:00:00.000Z",publisher:"No Starch Press",pages:472,description:"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:55,website:"http://eloquentjavascript.net/"},{isbn:"9781449331818",title:"Learning JavaScript Design Patterns",subtitle:"A JavaScript and jQuery Developer's Guide",author:"Addy Osmani",published:"2012-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:30,website:"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"},{isbn:"9781449365035",title:"Speaking JavaScript",subtitle:"An In-Depth Guide for Programmers",author:"Axel Rauschmayer",published:"2014-02-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:460,description:"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:20,website:"http://speakingjs.com/"},{isbn:"9781491950296",title:"Programming JavaScript Applications",subtitle:"Robust Web Architecture with Node, HTML5, and Modern JS Libraries",author:"Eric Elliott",published:"2014-07-01T00:00:00.000Z",publisher:"O'Reilly Media",pages:254,description:"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:25,website:"http://chimera.labs.oreilly.com/books/1234000000262/index.html"},{isbn:"9781593277574",title:"Understanding ECMAScript 6",subtitle:"The Definitive Guide for JavaScript Developers",author:"Nicholas C. Zakas",published:"2016-09-03T00:00:00.000Z",publisher:"No Starch Press",pages:352,description:"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",price:29,website:"https://leanpub.com/understandinges6/read"}],O=(a(50),function(){var e=Object(k.g)(),t=Object(k.f)(),a=Object(r.useState)(),n=Object(J.a)(a,2),o=n[0],s=n[1],l=Object(r.useState)(!0),c=Object(J.a)(l,2),p=c[0],u=c[1];return Object(r.useEffect)((function(){var t;(t=e.id,new Promise((function(e,a){setTimeout((function(){e(j.find((function(e){return e.isbn===t})))}),1500)}))).then((function(e){s(e)})).catch((function(e){return console.error(e)})).finally((function(){return u(!1)}))}),[e.id]),p?i.a.createElement(v,{loading:p,alternativeText:"Das ausgew\xe4hlte Buch l\xe4dt gerade"}):i.a.createElement("div",{className:"book-detail"},i.a.createElement("div",{className:"book-detail-header"},i.a.createElement("button",{onClick:function(){return t.goBack()}},"Back"),i.a.createElement("h1",null,o.title)),i.a.createElement("p",null,o.description))}),T=i.a.createElement(k.c,null,i.a.createElement(k.a,{path:"/",exact:!0,render:function(e){return i.a.createElement(S,e)}}),"}/>",i.a.createElement(k.a,{path:"/details/:id",exact:!0,render:function(e){return i.a.createElement(O,null)}}),"}/>",i.a.createElement(k.a,{path:"*",render:function(e){return i.a.createElement(x,e)}})),D=a(32),M=a.n(D);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(d.a)(e);if(t){var i=Object(d.a)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Object(h.a)(this,a)}}var N=i.a.createContext({}),C=function(e){Object(u.a)(a,e);var t=A(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).addItemToCart=function(e){r.setState({cart:[].concat(Object(l.a)(r.state.cart),[e])})},r.removeItemFromCart=function(e){var t=Object(l.a)(r.state.cart);t.splice(e,1),r.setState({cart:t})},r.toggleDrawer=function(){r.setState({isDrawerOpened:!r.state.isDrawerOpened})},r.state={loading:!0,books:[],cart:[],isDrawerOpened:!1},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.a.get("/api/books").then((function(t){var a=t.data;e.setState({books:a})})).catch((function(e){return console.error(e)})).finally((function(){e.setState({loading:!1})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.books,a=e.loading,r=e.cart,n=e.isDrawerOpened,o=function(e){var t=[e];return n?t.push("drawer-opened"):t.push("drawer-closed"),t.join(" ")};return i.a.createElement("div",null,i.a.createElement(N.Provider,{value:{isDrawerOpened:n,books:t,cart:r,addItemToCart:this.addItemToCart,removeItemFromCart:this.removeItemFromCart,toggleDrawer:this.toggleDrawer}},i.a.createElement(w,null),i.a.createElement(v,{loading:a}),i.a.createElement("div",{className:o("main-wrapper")},i.a.createElement("div",{className:"main-col-wrapper"},i.a.createElement("div",{className:"content-wrapper"},!a&&T))),i.a.createElement("div",{className:o("drawer-wrapper")},i.a.createElement(E,{cart:r,removeItemFromCart:this.removeItemFromCart}))))}}],[{key:"getDerivedStateFromProps",value:function(){return{}}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(s.a,null,i.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.168371c3.chunk.js.map