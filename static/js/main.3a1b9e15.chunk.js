(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(t,e,n){"use strict";var c=n(16),r=n.n(c),a=n(25),u=n(19),i=n.n(u),o=n(3);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){i.a.defaults.headers.common.Authorization=""},b=Object(o.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(o.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),d={register:b,logOut:Object(o.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:l(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:j,fetchCurrentUser:Object(o.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())};e.a=d},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return s}));var c=n(21),r=function(t){return t.contacts},a=function(t){return t.filter},u=function(t){return t.loading},i=Object(c.a)([r,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),o=function(t){return t.auth.isLoggedIn},s=function(t){return t.auth.user.name}},26:function(t,e,n){t.exports={link:"Navigation_link__3N9UW",activeLink:"Navigation_activeLink__28cpt"}},27:function(t,e,n){t.exports={link:"AuthNav_link__38g6F",activeLink:"AuthNav_activeLink__Sp2qt"}},31:function(t,e,n){t.exports={container:"UserMenu_container__1SDVk",avatar:"UserMenu_avatar__2aDZh",name:"UserMenu_name__1h1lr"}},49:function(t,e,n){t.exports={header:"AppBar_header__3FfFU"}},57:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return b})),n.d(e,"h",(function(){return j})),n.d(e,"d",(function(){return d}));var c=n(3),r=Object(c.b)("fetchContactRequest"),a=Object(c.b)("fetchContactSuccess"),u=Object(c.b)("fetchContactError"),i=Object(c.b)("addContactRequest"),o=Object(c.b)("addContactSuccess"),s=Object(c.b)("addContactError"),l=Object(c.b)("removeContactRequest"),b=Object(c.b)("removeContactSuccess"),j=Object(c.b)("removeContactError"),d=Object(c.b)("contact/changeFilter")},82:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),u=n(28),i=n.n(u),o=n(14),s=(n(57),n(10)),l=n(4),b=n(15),j=n(22),d=n(30),f=n(18);function O(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,a=Object(d.a)(t,["children","redirectTo"]),u=Object(s.c)(f.d);return Object(c.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{children:u?e:Object(c.jsx)(l.a,{to:r})}))}function h(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,a=t.redirectTo,u=void 0===a?"/":a,i=Object(d.a)(t,["children","restricted","redirectTo"]),o=Object(s.c)(f.d)&&r;return Object(c.jsx)(l.b,Object(j.a)(Object(j.a)({},i),{},{children:o?Object(c.jsx)(l.a,{to:u}):e}))}n(82);var p=n(26),v=n.n(p),x=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.b,{to:"/",exact:!0,className:v.a.link,activeClassName:v.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)(o.b,{to:"/contacts",exact:!0,className:v.a.link,activeClassName:v.a.activeLink,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})},g=n.p+"static/media/default-avatar.e3cd3b0f.png",k=n(31),m=n.n(k);function _(){var t=Object(s.b)(),e=Object(s.c)(f.f),n=g;return Object(c.jsxs)("div",{className:m.a.container,children:[Object(c.jsx)("img",{src:n,alt:"",width:"32",className:m.a.avatar}),Object(c.jsxs)("span",{className:m.a.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",e]}),Object(c.jsx)("button",{type:"button",onClick:function(){return t(b.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var C=n(27),y=n.n(C);function N(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/register",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(c.jsx)(o.b,{to:"/login",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var L=n(49),w=n.n(L);function I(){var t=Object(s.c)(f.d);return Object(c.jsxs)("header",{className:w.a.header,children:[Object(c.jsx)(x,{}),t?Object(c.jsx)(_,{}):Object(c.jsx)(N,{})]})}var S=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,95))})),U=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,92))})),z=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,93))})),A=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,94))}));function T(){var t=Object(s.b)();return Object(r.useEffect)((function(){t(b.a.fetchCurrentUser())}),[t]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(I,{}),Object(c.jsx)(l.d,{children:Object(c.jsxs)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:[Object(c.jsx)(h,{exact:!0,path:"/",children:Object(c.jsx)(S,{})}),Object(c.jsx)(h,{exact:!0,path:"/register",restricted:!0,children:Object(c.jsx)(U,{})}),Object(c.jsx)(h,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(c.jsx)(z,{})}),Object(c.jsx)(O,{path:"/contacts",redirectTo:"/login",children:Object(c.jsx)(A,{})})]})})]})}var E,R,q,F=n(50),M=n(5),B=n(37),D=n(3),J=n(8),V=Object(D.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(E={},Object(M.a)(E,b.a.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(M.a)(E,b.a.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(M.a)(E,b.a.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(M.a)(E,b.a.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),E)}).reducer,W=n(17),Z=n(51),G=n.n(Z),H=Object(B.a)(Object(D.f)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),K={key:"auth",storage:G.a,whitelist:["token"]},P=Object(D.d)([],(R={},Object(M.a)(R,J.g,(function(t,e){return e.payload})),Object(M.a)(R,J.c,(function(t,e){return[e.payload].concat(Object(B.a)(t))})),Object(M.a)(R,J.j,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),R)),Q=Object(D.d)("",Object(M.a)({},J.d,(function(t,e){return e.payload}))),X=Object(D.d)(!1,(q={},Object(M.a)(q,J.b,(function(){return!0})),Object(M.a)(q,J.c,(function(){return!1})),Object(M.a)(q,J.a,(function(){return!1})),Object(M.a)(q,J.i,(function(){return!0})),Object(M.a)(q,J.j,(function(){return!1})),Object(M.a)(q,J.h,(function(){return!1})),Object(M.a)(q,J.f,(function(){return!0})),Object(M.a)(q,J.g,(function(){return!1})),Object(M.a)(q,J.e,(function(){return!1})),q)),Y=Object(D.a)({reducer:{auth:Object(W.g)(K,V),contacts:P,filter:Q,loading:X},middleware:H,devTools:!1}),$=Object(W.h)(Y);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(s.a,{store:Y,children:Object(c.jsx)(F.a,{loading:null,persistor:$,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(T,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.3a1b9e15.chunk.js.map