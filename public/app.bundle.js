webpackJsonp([0],{150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,c,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=i(["\n  background-color: ",";\n  height: 100%;\n  width: 100%:\n"],["\n  background-color: ",";\n  height: 100%;\n  width: 100%:\n"]),s=i(["\n  position: fixed;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: lightgrey;\n  z-index: 2;\n  transition: left 350ms ease-in;\n\n  &.hidden {\n    left: -100%;\n    overflow: hidden;\n  }\n"],["\n  position: fixed;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: lightgrey;\n  z-index: 2;\n  transition: left 350ms ease-in;\n\n  &.hidden {\n    left: -100%;\n    overflow: hidden;\n  }\n"]),p=n(0),b=r(p),m=n(29),h=n(1),y=r(h),g=n(9),v=r(g),O=n(22),E=n(157),_=r(E),j=n(158),P=r(j),w=n(91),x=r(w),k=n(39),z=n(164),M=r(z),S=n(163),R=r(S),C=n(165),T=r(C),A=n(166),q=r(A),I=n(168),L=r(I),U=n(162),H=(r(U),n(167)),F=r(H),B=n(155),D=r(B),N=v.default.div(f,function(e){return e.theme.bgColor||"#fff"}),Y=(0,v.default)(F.default)(s),W=(c=l=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={user:null,hasAuthBeenChecked:!1},u=n,a(r,u)}return u(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.store;this.unsubscribe=t.subscribe(function(){var n=t.getState();e.setState(n.auth)}),t.dispatch((0,k.checkForAuth)())}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props.store,t=this.state,n=t.user,r=t.hasAuthBeenChecked;return b.default.createElement(O.BrowserRouter,{history:x.default},b.default.createElement(m.Provider,{store:e},b.default.createElement(g.ThemeProvider,{theme:P.default},b.default.createElement(N,{id:"content"},b.default.createElement(Y,{className:r?"hidden":null}),b.default.createElement(D.default,null),b.default.createElement(O.Switch,null,b.default.createElement(O.Route,{exact:!0,path:"/",component:R.default}),b.default.createElement(O.Route,{path:"/login",component:M.default}),b.default.createElement(_.default,{exact:!0,path:"/user",user:n,component:L.default}),b.default.createElement(_.default,{exact:!0,path:"/prayer/new",user:n,component:T.default}),b.default.createElement(_.default,{path:"/prayer/details/:fbId",user:n,component:q.default}),b.default.createElement(O.Route,{component:F.default}))))))}}]),t}(b.default.Component),l.PropTypes={store:y.default.object.isRequired},c);t.default=W},151:function(e,t,n){"use strict";var r=(n(111),n(54));!function(e){e&&e.__esModule}(r)},152:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.createStore)(d.default,e,f((0,a.applyMiddleware)(i.default)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(53),u=n(570),i=r(u),l=n(569),c=n(170),d=r(c),f=(0,l.composeWithDevTools)({name:"Prayerify"})},154:function(e,t,n){"use strict";function r(e){return{type:"SET:USER",payload:e}}function o(e){return{type:"SET:AUTHHASBEENCHECKED",payload:e}}function a(e){return{type:"ERROR:AUTH",payload:e}}function u(){return function(e){c.auth.onAuthStateChanged(function(t){e(r(t)),e(o(!0)),e((0,d.fetchPrayers)())})}}function i(e){var t=e.uid,n=e.pwd;return function(e){c.auth.signInWithEmailAndPassword(t,n).then(function(t){console.log("Signed In",t),e(r(t))}).catch(function(e){return console.log("SIGN IN ERR",e)})}}function l(){return function(e){c.auth.signOut().then(function(e){console.log("Signed Out",e)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setUser=r,t.setHasAuthBeenChecked=o,t.setAuthError=a,t.checkForAuth=u,t.signInUser=i,t.signOutUser=l;var c=n(54),d=n(87)},155:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e){var t=e.user,n=e.handleSignOut;return s.default.createElement(w,null,s.default.createElement(E.default,null,s.default.createElement(z,{className:"el-flex"},s.default.createElement(M,null,s.default.createElement(k,{to:"/"},s.default.createElement(v.Home,null)),s.default.createElement(x,null,s.default.createElement(g.Link,{to:"/"},"Prayerify"))),s.default.createElement(P.default,{user:t,handleSignOut:n}))))}Object.defineProperty(t,"__esModule",{value:!0});var u=o(["\n  position: relative;\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  //background-color: ",";\n  //border-top: 0.5rem solid ",";\n  text-align: center;\n"],["\n  position: relative;\n  min-height: 5vh;\n  vertical-align: middle;\n  padding: 1rem;\n  box-sizing: border-box;\n  //background-color: ",";\n  //border-top: 0.5rem solid ",";\n  text-align: center;\n"]),i=o(["\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: ",";\n  display: inline-block;\n\n  a {\n    color: ",";\n  }\n"],["\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  color: ",";\n  display: inline-block;\n\n  a {\n    color: ",";\n  }\n"]),l=o(["\n  // color: ",";\n  margin-right: 1rem;\n"],["\n  // color: ",";\n  margin-right: 1rem;\n"]),c=o(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]),d=o(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: ",";\n"],["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: ",";\n"]),f=n(0),s=r(f),p=n(9),b=r(p),m=n(1),h=r(m),y=n(29),g=n(22),v=n(81),O=n(40),E=r(O),_=n(39),j=n(156),P=r(j),w=b.default.header(u,function(e){return e.theme.primary},function(e){return e.theme.darkPrimary}),x=b.default.h1(i,function(e){return e.theme.accentLight},function(e){return e.theme.accentLight}),k=(0,b.default)(g.Link)(l,function(e){return e.theme.lightPrimary}),z=b.default.div(c),M=b.default.div(d,function(e){return e.theme.bgColor});a.propTypes={user:h.default.object,handleSignOut:h.default.func.isRequired};var S=function(e){return{user:e.auth.user}},R=function(e){return{handleSignOut:function(t){e((0,_.signOutUser)())}}};t.default=(0,y.connect)(S,R)(a)},156:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=i(["\n  &:hover, &:active {\n    color:",";\n  }\n"],["\n  &:hover, &:active {\n    color:",";\n  }\n"]),d=i(["\n  display: inline;\n  margin: 0 0.5rem;\n  // color: ",";\n"],["\n  display: inline;\n  margin: 0 0.5rem;\n  // color: ",";\n"]),f=n(0),s=r(f),p=n(22),b=n(9),m=r(b),h=n(81),y=m.default.nav(c,function(e){return e.theme.lightPrimary}),g=(0,m.default)(p.Link)(d,function(e){return e.theme.lightPrimary}),v=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props.user,t=e?s.default.createElement(g,{to:"/",onClick:this.props.handleSignOut},s.default.createElement(h.LogOut,null)):s.default.createElement(p.Link,{to:"/login"},s.default.createElement(h.LogIn,null));return s.default.createElement(y,null,e?s.default.createElement(g,{to:"/prayer/new"},s.default.createElement(h.FilePlus,null)):null,e?s.default.createElement(g,{to:"/user"},s.default.createElement(h.List,null)):null,t)}}]),t}(s.default.Component);t.default=v},157:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){var t=e.path,n=(e.exact,e.component),o=e.user;r(e,["path","exact","component","user"]);return u.default.createElement(i.Route,{exact:!0,path:t,render:function(e){return o?u.default.createElement(n,{user:o,routeProps:e}):u.default.createElement(i.Redirect,{to:{pathname:"/login",state:{from:e.location}}})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),i=n(22)},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    color: ",";\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  body {\n    background-color: ",";\n    min-height: 100vh;\n  }\n\n  main {\n    height: 100%;\n    width: 100%;\n  }\n\n  html {\n    background-color: ",";\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n  }\n"],["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    color: ",";\n    font-family: San Francisco, Roboto, sans-serif;\n  }\n\n  body {\n    background-color: ",";\n    min-height: 100vh;\n  }\n\n  main {\n    height: 100%;\n    width: 100%;\n  }\n\n  html {\n    background-color: ",";\n  }\n\n  a {\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n  }\n"]),a=n(9),u=n(159),i=(r(u),n(160)),l=r(i);(0,a.injectGlobal)(o,l.default.primaryText,l.default.bgColor,l.default.htmlColor,l.default.accent),t.default=l.default},159:function(e,t,n){"use strict";var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\n"]);(0,n(9).injectGlobal)(r)},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={darkPrimary:"teal",primary:"#9E9E9E",lightPrimary:"#f5f5f5",primaryText:"#c1c1c1",secondaryText:"#757575",dividerColor:"#575757",accent:"#936666",accentLight:"#D3C0C0",bgColor:"#1d1d1d",htmlColor:"#eee"};t.default=r},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),u=n(86),i=(n(153),n(150)),l=r(i),c=n(151),d=(r(c),n(152)),f=r(d),s=(0,f.default)();(0,u.render)(a.default.createElement(l.default,{store:s}),document.querySelector("main"))},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){return o.default.createElement("h1",null,"404.  Oops, page not here")}},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return u.default.createElement(l.default,null,u.default.createElement("h1",null,"Home"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),u=r(a),i=n(40),l=r(i)},164:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 1rem;\n  margin: 1rem auto;\n  max-width: 250px;\n  border: 1px solid #ccc;\n\n  label {\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n\n  > p,\n  h3 {\n    margin-bottom: 0.5rem;\n  }\n"],["\n  padding: 1rem;\n  margin: 1rem auto;\n  max-width: 250px;\n  border: 1px solid #ccc;\n\n  label {\n    display: block;\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n\n  > p,\n  h3 {\n    margin-bottom: 0.5rem;\n  }\n"]),c=n(0),d=r(c),f=n(29),s=n(22),p=n(9),b=r(p),m=n(88),h=r(m),y=n(89),g=r(y),v=n(90),O=r(v),E=n(39),_=b.default.form(l),j=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={uid:"",pwd:""},u=n,a(r,u)}return u(t,e),i(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.signIn(this.state)}},{key:"render",value:function(){var e=this;return this.props.user?d.default.createElement(s.Redirect,{to:"/"}):d.default.createElement(_,{onSubmit:function(t){e.submitForm(t)}},d.default.createElement("h3",null,"Login"),d.default.createElement("p",null,d.default.createElement(O.default,{name:"uid"},"email"),d.default.createElement(g.default,{type:"text",name:"uid",onInput:function(t){return e.setState({uid:t.target.value})}})),d.default.createElement("p",null,d.default.createElement("label",{htmlFor:"uid"},"password"),d.default.createElement(g.default,{type:"password",name:"pwd",onInput:function(t){return e.setState({pwd:t.target.value})}})),d.default.createElement(h.default,{type:"submit"},"Login"))}}]),t}(d.default.Component),P=function(e){return{user:e.auth.user}},w=function(e){return{signIn:function(t){return e((0,E.signInUser)(t))}}};t.default=(0,f.connect)(P,w)(j)},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=o(["\n  padding: 1rem;\n  max-width: 414px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  p {\n    padding: 0 0 1rem;\n  }\n"],["\n  padding: 1rem;\n  max-width: 414px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  p {\n    padding: 0 0 1rem;\n  }\n"]),d=o(["\n  display: block;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  height: 100px;\n  box-sizing: border-box;\n"],["\n  display: block;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  height: 100px;\n  box-sizing: border-box;\n"]),f=n(0),s=r(f),p=n(29),b=n(9),m=r(b),h=n(91),y=r(h),g=n(39),v=n(88),O=r(v),E=n(89),_=r(E),j=n(90),P=r(j),w=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:"",description:"",pinned:!1,public:!1},e}return i(t,e),l(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.submitPrayer(this.state),y.default.push("/")}},{key:"render",value:function(){var e=this;return s.default.createElement(k,{onSubmit:function(t){return e.submitForm(t)}},s.default.createElement("h3",null,"New Prayer"),s.default.createElement("p",null,s.default.createElement(P.default,{name:"title",text:"Title"}),s.default.createElement(_.default,{type:"text",name:"title",onInput:function(t){return e.setState({title:t.target.value})}})),s.default.createElement("p",null,s.default.createElement(P.default,{name:"description",text:"Description"}),s.default.createElement(z,{name:"description",onInput:function(t){return e.setState({description:t.target.value})}})),s.default.createElement("p",null,s.default.createElement("input",{type:"checkbox",name:"pinned",onChange:function(t){e.setState({pinned:"on"===t.target.value})}}),s.default.createElement("label",{htmlFor:"pinned"},"Pinned?")),s.default.createElement("p",null,s.default.createElement("input",{type:"checkbox",name:"public",onChange:function(t){e.setState({public:"on"===t.target.value})}}),s.default.createElement("label",{htmlFor:"public"},"Make Public?")),s.default.createElement(O.default,{type:"submit"},"Submit"))}}]),t}(s.default.Component),x=function(e){return{submitPrayer:function(t){return e((0,g.createPrayer)(t))}}};t.default=(0,p.connect)(function(e){return{}},x)(w);var k=m.default.form(c),z=m.default.textarea(d)},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.prayer,n=(e.routeProps,t.closed,t.createdDate),r=t.description,o=(t.pinned,t.title);t.uid;return u.default.createElement(b.default,null,u.default.createElement(f.Link,{to:"/user"},u.default.createElement(s.ArrowLeft,null),"Back"),u.default.createElement("h3",null,o),u.default.createElement("p",null,r),u.default.createElement("em",null,new Date(n).toLocaleString()))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=r(a),i=n(29),l=n(1),c=r(l),d=n(9),f=(r(d),n(22)),s=n(81),p=n(40),b=r(p),m=function(e,t){return{prayer:e.prayers.raw[t.routeProps.match.params.fbId]}};t.default=(0,i.connect)(m)(o),o.propTypes={prayer:c.default.object.isRequired,routeProps:c.default.object.isRequired}},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 3rem;\n  color: #fff;\n  padding: 0;\n  margin: 0;\n"],["\n  font-size: 3rem;\n  color: #fff;\n  padding: 0;\n  margin: 0;\n"]),a=n(0),u=r(a),i=n(9),l=r(i),c=l.default.h1(o);t.default=function(e){return u.default.createElement("section",{className:e.className},u.default.createElement(c,null,"Prayerify"))}},168:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e){var t=e.prayers;return p.default.createElement(O,null,p.default.createElement(v.default,null,p.default.createElement(i,{prayers:t})))}function u(e){return p.default.createElement(_,null,p.default.createElement(y.Link,{to:"prayer/details/"+e.fbId},e.title))}function i(e){var t=e.prayers;return p.default.createElement(E,null,t.map(function(e,t){return p.default.createElement(u,l({key:e.fbId||t},e))}))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=o(["padding: 1rem;"],["padding: 1rem;"]),d=o(["\n  margin: 0;\n  padding-bottom: 1rem;\n"],["\n  margin: 0;\n  padding-bottom: 1rem;\n"]),f=o(["\n  padding: 1rem;\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border: none;\n  }\n"],["\n  padding: 1rem;\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border: none;\n  }\n"]),s=n(0),p=r(s),b=n(29),m=n(9),h=r(m),y=n(22),g=n(40),v=r(g),O=h.default.section(c),E=h.default.ul(d),_=h.default.li(f,function(e){return e.theme.dividerColor}),j=function(e){return{prayers:e.prayers.list}};t.default=(0,b.connect)(j)(a)},169:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"SET:USER":return o({},e,{user:t.payload});case"SET:AUTHHASBEENCHECKED":return o({},e,{hasAuthBeenChecked:t.payload});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.authReducer=r;var a={user:null,hasAuthBeenChecked:!1}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),o=n(169),a=n(171);t.default=(0,r.combineReducers)({auth:o.authReducer,prayers:a.prayersReducer})},171:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"SET:PRAYERS":return o({},e,{list:t.payload});case"SET:PRAYERS:RAW":return o({},e,{raw:t.payload});case"FETCH:PRAYERS":default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.prayersReducer=r;var a={list:[],raw:{}}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(154);Object.defineProperty(t,"setUser",{enumerable:!0,get:function(){return r.setUser}}),Object.defineProperty(t,"setHasAuthBeenChecked",{enumerable:!0,get:function(){return r.setHasAuthBeenChecked}}),Object.defineProperty(t,"signOutUser",{enumerable:!0,get:function(){return r.signOutUser}}),Object.defineProperty(t,"signInUser",{enumerable:!0,get:function(){return r.signInUser}}),Object.defineProperty(t,"checkForAuth",{enumerable:!0,get:function(){return r.checkForAuth}});var o=n(87);Object.defineProperty(t,"setPrayers",{enumerable:!0,get:function(){return o.setPrayers}}),Object.defineProperty(t,"fetchPrayers",{enumerable:!0,get:function(){return o.fetchPrayers}}),Object.defineProperty(t,"createPrayer",{enumerable:!0,get:function(){return o.createPrayer}})},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return i.default.createElement(d,{className:"container"},e.children)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n\n  @media (max-width: 414px) {\n    padding: 0.25rem 0.5rem;\n  }\n"],["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n\n  @media (max-width: 414px) {\n    padding: 0.25rem 0.5rem;\n  }\n"]);t.default=o;var u=n(0),i=r(u),l=n(9),c=r(l),d=c.default.section(a)},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.db=t.auth=void 0;var r=n(191),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a={apiKey:"AIzaSyDoGO6j6Cg6PuEfjaayHyXQzNKsp-iYpkg",authDomain:"prayerfire-15ea2.firebaseapp.com",databaseURL:"https://prayerfire-15ea2.firebaseio.com",projectId:"prayerfire-15ea2",storageBucket:"prayerfire-15ea2.appspot.com",messagingSenderId:"522915402714"},u=o.default.initializeApp(a);t.default=u;t.auth=u.auth(),t.db=u.database()},87:function(e,t,n){"use strict";function r(e){return{type:"SET:PRAYERS",payload:e}}function o(e){return{type:"SET:PRAYERS:RAW",payload:e}}function a(){return function(e){d=c.db.ref("/prayers");var t={};d.on("value",function(n){t=n.val(),e(o(t)),e(r(i(t)))})}}function u(e){return function(t){d.push().set(e)}}function i(e){var t=[];for(var n in e)t.push(l({fbId:n},e[n]));return t}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.setPrayers=r,t.setPrayersRaw=o,t.fetchPrayers=a,t.createPrayer=u;var c=n(54),d=null},88:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return i.default.createElement(d,null,e.children)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  background-color: ",";\n  border: none;\n  color: white;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.1rem;\n\n  &:active {\n    background-color: pink;\n  }\n"],["\n  width: 100%;\n  background-color: ",";\n  border: none;\n  color: white;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 1.1rem;\n\n  &:active {\n    background-color: pink;\n  }\n"]);t.default=o;var u=n(0),i=r(u),l=n(9),c=r(l),d=c.default.button(a,function(e){return e.theme.accent})},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: block;\n  border-radius: 0px;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n"],["\n  display: block;\n  border-radius: 0px;\n  border: 1px solid #aaa;\n  padding: 0.25rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n"]),a=n(0),u=(r(a),n(9)),i=r(u),l=i.default.input(o);t.default=l},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.text,n=e.name,r=e.children;return i.default.createElement(s,{htmlFor:n},t||r)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 6px;\n"],["\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 6px;\n"]);t.default=o;var u=n(0),i=r(u),l=n(9),c=r(l),d=n(1),f=r(d);o.propTypes={text:f.default.string,name:f.default.string.isRequired};var s=c.default.label(a)},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(215);t.default=(0,r.createBrowserHistory)()}},[161]);